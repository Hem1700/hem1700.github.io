// Every sound here is synthesised with the Web Audio API — no audio files to download, and nothing plays
// until the visitor first touches the page, which is what browsers require anyway.
const VOLUME=.5;

export function createSound(){
 let context=null,master=null,engineGain=null,engineFilter=null,voices=[],skidGain=null,windGain=null,enabled=true,failed=false;
 const now=()=>context.currentTime;
 function noise(seconds=2){const frames=Math.floor(context.sampleRate*seconds),buffer=context.createBuffer(1,frames,context.sampleRate),data=buffer.getChannelData(0);let last=0;for(let i=0;i<frames;i++){const white=Math.random()*2-1;last=(last+.02*white)/1.02;data[i]=last*3.5;}return buffer;}
 function build(){
  if(context||failed||!enabled)return;
  try{
   const Context=window.AudioContext||window.webkitAudioContext;if(!Context)throw new Error('No Web Audio');
   context=new Context();
   master=context.createGain();master.gain.value=VOLUME;master.connect(context.destination);
   // Engine: two detuned saws over a square sub, through a filter that opens up with speed.
   engineFilter=context.createBiquadFilter();engineFilter.type='lowpass';engineFilter.frequency.value=420;engineFilter.Q.value=4;
   engineGain=context.createGain();engineGain.gain.value=0;engineFilter.connect(engineGain);engineGain.connect(master);
   voices=[{type:'sawtooth',ratio:1,level:.5},{type:'sawtooth',ratio:1.011,level:.4},{type:'square',ratio:.5,level:.45},{type:'sawtooth',ratio:2.02,level:.12}].map(voice=>{
    const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type=voice.type;oscillator.frequency.value=40*voice.ratio;gain.gain.value=voice.level;oscillator.connect(gain);gain.connect(engineFilter);oscillator.start();return {oscillator,ratio:voice.ratio};});
   // Tyres: filtered noise that comes up when a wheel is sliding.
   const tyres=context.createBufferSource();tyres.buffer=noise();tyres.loop=true;
   const tyreFilter=context.createBiquadFilter();tyreFilter.type='bandpass';tyreFilter.frequency.value=1500;tyreFilter.Q.value=1.1;
   skidGain=context.createGain();skidGain.gain.value=0;tyres.connect(tyreFilter);tyreFilter.connect(skidGain);skidGain.connect(master);tyres.start();
   // A little wind so standing still is not silent.
   const wind=context.createBufferSource();wind.buffer=noise();wind.loop=true;
   const windFilter=context.createBiquadFilter();windFilter.type='lowpass';windFilter.frequency.value=320;
   windGain=context.createGain();windGain.gain.value=.02;wind.connect(windFilter);windFilter.connect(windGain);windGain.connect(master);wind.start();
  }catch{failed=true;context=null;}
 }
 const ramp=(parameter,value,seconds=.08)=>{try{parameter.setTargetAtTime(value,now(),seconds);}catch{}};

 return {
  get enabled(){return enabled;},
  // Call from a real user gesture: browsers keep audio suspended until then.
  resume(){build();if(context&&context.state==='suspended')context.resume().catch(()=>{});},
  setEnabled(value){enabled=value;if(!value){if(master)ramp(master.gain,0,.05);}else{build();if(master)ramp(master.gain,VOLUME,.05);if(context&&context.state==='suspended')context.resume().catch(()=>{});}return enabled;},
  // speed in units/second, throttle -1..1, sliding 0..1, grounded true when a wheel is down.
  update({speed=0,throttle=0,sliding=0,grounded=true}={}){
   if(!context||!enabled)return;
   const pace=Math.abs(speed),slipping=Math.abs(throttle)>.05&&pace<5?(5-pace)*1.6:0;
   const base=34+pace*4.4+slipping*3+(grounded?0:9);
   for(const voice of voices)ramp(voice.oscillator.frequency,base*voice.ratio,.09);
   ramp(engineFilter.frequency,420+pace*44+Math.abs(throttle)*260,.12);
   ramp(engineGain.gain,.035+Math.abs(throttle)*.09+Math.min(pace,30)*.0022,.12);
   ramp(skidGain.gain,Math.min(.13,sliding*.13),.06);
   ramp(windGain.gain,.018+Math.min(pace,36)*.0016,.2);
  },
  // A thump plus a burst of debris noise; strength 0..1.
  impact(strength=.5){
   if(!context||!enabled)return;
   const level=Math.max(.05,Math.min(1,strength)),start=now();
   try{
    const thump=context.createOscillator(),thumpGain=context.createGain();thump.type='sine';
    thump.frequency.setValueAtTime(90+level*70,start);thump.frequency.exponentialRampToValueAtTime(38,start+.22);
    thumpGain.gain.setValueAtTime(level*.5,start);thumpGain.gain.exponentialRampToValueAtTime(.0008,start+.3);
    thump.connect(thumpGain);thumpGain.connect(master);thump.start(start);thump.stop(start+.32);
    const burst=context.createBufferSource();burst.buffer=noise(.4);
    const burstFilter=context.createBiquadFilter();burstFilter.type='lowpass';burstFilter.frequency.value=900+level*2600;
    const burstGain=context.createGain();burstGain.gain.setValueAtTime(level*.32,start);burstGain.gain.exponentialRampToValueAtTime(.0008,start+.18+level*.2);
    burst.connect(burstFilter);burstFilter.connect(burstGain);burstGain.connect(master);burst.start(start);burst.stop(start+.5);
   }catch{}
  },
  // Two soft notes when a place opens.
  chime(){
   if(!context||!enabled)return;
   const start=now();
   try{for(const [index,frequency] of [587.33,880].entries()){const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type='triangle';oscillator.frequency.value=frequency;
    const at=start+index*.11;gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.14,at+.02);gain.gain.exponentialRampToValueAtTime(.0008,at+.5);
    oscillator.connect(gain);gain.connect(master);oscillator.start(at);oscillator.stop(at+.55);}}catch{}
  },
  dispose(){try{context?.close();}catch{}context=null;}
 };
}
