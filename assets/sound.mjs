// Everything here is synthesised with the Web Audio API — no audio files to download, and nothing plays
// until the visitor first touches the page, which is what browsers require anyway.
//
// The engine is modelled the way a real one sounds: a four-cylinder four-stroke fires twice per crank
// revolution, so the firing frequency is rpm/30. Harmonics of that frequency make the tone, a resonant
// filter opens with throttle, and intake and exhaust noise sit on top. The gearbox lives in the physics
// (see campus.js) and hands us the rpm, so shifts drop the note exactly as they do in the car.
const VOLUME=.5,SMOOTH=.05;

export function createSound(){
 let context=null,master=null,enabled=true,failed=false,started=false;
 let engineGain=null,engineFilter=null,engineBody=null,voices=[],intakeGain=null,intakeFilter=null,rollGain=null,rollFilter=null,skidGain=null,windGain=null;
 const now=()=>context.currentTime;
 const ramp=(parameter,value,seconds=SMOOTH)=>{try{parameter.setTargetAtTime(value,now(),seconds);}catch{}};
 function noiseBuffer(seconds=2,colour=.02){const frames=Math.floor(context.sampleRate*seconds),buffer=context.createBuffer(1,frames,context.sampleRate),data=buffer.getChannelData(0);let last=0;for(let i=0;i<frames;i++){const white=Math.random()*2-1;last=(last+colour*white)/(1+colour);data[i]=last*(1/Math.sqrt(colour))*.55;}return buffer;}
 function loop(buffer,filterType,frequency,Q,gainValue){const source=context.createBufferSource();source.buffer=buffer;source.loop=true;const filter=context.createBiquadFilter();filter.type=filterType;filter.frequency.value=frequency;filter.Q.value=Q;const gain=context.createGain();gain.gain.value=gainValue;source.connect(filter);filter.connect(gain);gain.connect(master);source.start();return {filter,gain};}
 // A pulse-like wave: strong low harmonics with a slightly uneven top end, which is what gives an
 // engine its edge rather than the smooth buzz of a plain sawtooth.
 function engineWave(){const size=20,real=new Float32Array(size),imag=new Float32Array(size);for(let n=1;n<size;n++){imag[n]=(1/Math.pow(n,.85))*(n%2?1:.62)*(n>10?.35:1);}return context.createPeriodicWave(real,imag,{disableNormalization:false});}

 function build(){
  if(context||failed||!enabled)return;
  try{
   const Context=window.AudioContext||window.webkitAudioContext;if(!Context)throw new Error('No Web Audio');
   context=new Context();
   master=context.createGain();master.gain.value=VOLUME;master.connect(context.destination);
   // Engine: firing pulses and their sub-octave, through a resonant filter and a body resonance.
   engineBody=context.createBiquadFilter();engineBody.type='peaking';engineBody.frequency.value=190;engineBody.Q.value=1.1;engineBody.gain.value=7;
   engineFilter=context.createBiquadFilter();engineFilter.type='lowpass';engineFilter.frequency.value=500;engineFilter.Q.value=5;
   engineGain=context.createGain();engineGain.gain.value=0;
   engineFilter.connect(engineBody);engineBody.connect(engineGain);engineGain.connect(master);
   const wave=engineWave();
   voices=[{ratio:1,level:.55,wave},{ratio:.5,level:.5,wave},{ratio:1.006,level:.3,wave},{ratio:2,level:.14,type:'sawtooth'},{ratio:.25,level:.3,type:'sine'}].map(voice=>{
    const oscillator=context.createOscillator(),gain=context.createGain();
    if(voice.wave)oscillator.setPeriodicWave(voice.wave);else oscillator.type=voice.type;
    oscillator.frequency.value=30*voice.ratio;gain.gain.value=voice.level;oscillator.connect(gain);gain.connect(engineFilter);oscillator.start();return {oscillator,ratio:voice.ratio};});
   // Intake and exhaust roar: noise that follows the throttle.
   const rough=noiseBuffer(3,.06);
   const intake=loop(rough,'bandpass',700,.9,0);intakeFilter=intake.filter;intakeGain=intake.gain;
   // Tyres rolling on the road surface, tyres sliding, and wind over the car.
   const grain=noiseBuffer(3,.35);
   const roll=loop(grain,'bandpass',320,.7,0);rollFilter=roll.filter;rollGain=roll.gain;
   const skid=loop(grain,'bandpass',1500,1.1,0);skidGain=skid.gain;
   const air=loop(noiseBuffer(3,.01),'lowpass',300,.7,.015);windGain=air.gain;
  }catch{failed=true;context=null;}
 }
 // A starter motor and a catch, the first time sound wakes up.
 function ignition(){
  if(!context||started)return;started=true;
  const start=now()+.02;
  try{
   const crank=context.createOscillator(),crankGain=context.createGain(),crankFilter=context.createBiquadFilter();
   crank.type='sawtooth';crankFilter.type='lowpass';crankFilter.frequency.value=900;
   crank.frequency.setValueAtTime(32,start);crank.frequency.linearRampToValueAtTime(46,start+.45);
   crankGain.gain.setValueAtTime(0,start);crankGain.gain.linearRampToValueAtTime(.12,start+.06);crankGain.gain.setValueAtTime(.12,start+.42);crankGain.gain.exponentialRampToValueAtTime(.001,start+.6);
   crank.connect(crankFilter);crankFilter.connect(crankGain);crankGain.connect(master);crank.start(start);crank.stop(start+.62);
   // The blip as it catches.
   ramp(engineGain.gain,.16,.08);setTimeout(()=>ramp(engineGain.gain,.05,.25),420);
  }catch{}
 }

 return {
  get enabled(){return enabled;},
  // Call from a real user gesture: browsers keep audio suspended until then.
  resume(){build();if(!context)return;if(context.state==='suspended')context.resume().catch(()=>{});ignition();},
  setEnabled(value){enabled=value;if(!value){if(master)ramp(master.gain,0,.05);}else{build();if(master)ramp(master.gain,VOLUME,.05);if(context&&context.state==='suspended')context.resume().catch(()=>{});}return enabled;},
  /** rpm from the gearbox, throttle 0..1, speed in m/s, sliding 0..1, grounded false in the air. */
  update({rpm=800,throttle=0,speed=0,sliding=0,grounded=true,shifting=false}={}){
   if(!context||!enabled)return;
   const pace=Math.abs(speed),firing=Math.max(11,rpm/30),load=shifting?.12:throttle;
   for(const voice of voices)ramp(voice.oscillator.frequency,firing*voice.ratio,.045);
   ramp(engineFilter.frequency,360+rpm*.12+load*1500+(grounded?0:300),.07);
   ramp(engineGain.gain,.042+load*.1+Math.min(rpm,6500)*.000012,.07);
   ramp(intakeFilter.frequency,520+rpm*.16,.08);
   ramp(intakeGain.gain,load*.05+(rpm>5200?.02:0),.08);
   // Road roar only while a wheel is actually on the ground.
   ramp(rollFilter.frequency,260+pace*22,.12);
   ramp(rollGain.gain,grounded?Math.min(.07,pace*.0042):0,.1);
   ramp(skidGain.gain,Math.min(.14,sliding*.14),.05);
   ramp(windGain.gain,.012+Math.min(pace*pace,1300)*.00007,.2);
  },
  /** A body thump, a metallic ring and a burst of debris; strength 0..1. */
  impact(strength=.5){
   if(!context||!enabled)return;
   const level=Math.max(.05,Math.min(1,strength)),start=now();
   try{
    const thump=context.createOscillator(),thumpGain=context.createGain();thump.type='sine';
    thump.frequency.setValueAtTime(96+level*60,start);thump.frequency.exponentialRampToValueAtTime(34,start+.24);
    thumpGain.gain.setValueAtTime(level*.5,start);thumpGain.gain.exponentialRampToValueAtTime(.0008,start+.32);
    thump.connect(thumpGain);thumpGain.connect(master);thump.start(start);thump.stop(start+.34);
    const burst=context.createBufferSource();burst.buffer=noiseBuffer(.4,.5);
    const burstFilter=context.createBiquadFilter();burstFilter.type='lowpass';burstFilter.frequency.setValueAtTime(1200+level*3400,start);burstFilter.frequency.exponentialRampToValueAtTime(500,start+.25);
    const burstGain=context.createGain();burstGain.gain.setValueAtTime(level*.3,start);burstGain.gain.exponentialRampToValueAtTime(.0008,start+.16+level*.22);
    burst.connect(burstFilter);burstFilter.connect(burstGain);burstGain.connect(master);burst.start(start);burst.stop(start+.5);
    // Panel ring, so metal sounds like metal.
    if(level>.25)for(const [index,frequency] of [430,611,884].entries()){const ring=context.createOscillator(),ringGain=context.createGain();ring.type='triangle';ring.frequency.value=frequency*(.98+Math.random()*.05);
     ringGain.gain.setValueAtTime(level*.06/(index+1),start);ringGain.gain.exponentialRampToValueAtTime(.0006,start+.18+index*.05);
     ring.connect(ringGain);ringGain.connect(master);ring.start(start);ring.stop(start+.3);}
   }catch{}
  },
  /** Two soft notes when a place opens. */
  chime(){
   if(!context||!enabled)return;
   const start=now();
   try{for(const [index,frequency] of [587.33,880].entries()){const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type='triangle';oscillator.frequency.value=frequency;
    const at=start+index*.11;gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.13,at+.02);gain.gain.exponentialRampToValueAtTime(.0008,at+.5);
    oscillator.connect(gain);gain.connect(master);oscillator.start(at);oscillator.stop(at+.55);}}catch{}
  },
  dispose(){try{context?.close();}catch{}context=null;}
 };
}
