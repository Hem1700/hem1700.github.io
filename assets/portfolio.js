import {destinations,CENTRE,ISLAND,RING} from './navigation.mjs';
import {FINDINGS,HOSTS,GATEWAY,breachAt} from './security.mjs';
const $=id=>document.getElementById(id);
let campus,active=0,near=-1,requestId=0,panelOpen=false,travelling=null,mode='parked',logHold=0;const documents=new Map();
const reader=$('reader'),content=$('reader-body');reader.classList.add('closed');reader.inert=true;
function setPanel(open){panelOpen=open;reader.classList.toggle('closed',!open);reader.inert=!open;document.body.classList.toggle('panel-open',open);campus?.setPanel(open);}
function closeContent(){document.body.classList.add('exploring');setPanel(false);campus?.explore();$('world').focus();}
function highlight(index){document.querySelectorAll('[data-destination]').forEach(b=>{b.classList.toggle('active',Number(b.dataset.destination)===index);if(Number(b.dataset.destination)===index)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});}
async function getPage(file){if(!documents.has(file)){const promise=fetch(file).then(r=>{if(!r.ok)throw new Error('Content unavailable');return r.text();}).then(html=>new DOMParser().parseFromString(html,'text/html')).catch(error=>{documents.delete(file);throw error;});documents.set(file,promise);}return documents.get(file);}
async function renderContent(file,{contact=false,article=false,focus=false}={}){
 const token=++requestId;content.replaceChildren();const loading=document.createElement('p');loading.textContent='Opening portfolio…';content.append(loading);$('full-page').href=file;
 try{const doc=await getPage(file);if(token!==requestId)return;const fragment=document.createDocumentFragment();
 if(article){const back=document.createElement('button');back.className='back-to-section';back.textContent=`← Back to ${destinations[active].title}`;back.onclick=()=>renderContent(destinations[active].file,{contact:active===5});fragment.append(back);}
 const nodes=contact?[doc.querySelector('body > footer')]:Array.from(doc.body.children).filter(n=>['HEADER','MAIN','SECTION','ARTICLE','FOOTER'].includes(n.tagName));
 for(const source of nodes){if(!source)continue;const clone=source.cloneNode(true);clone.querySelectorAll('script,iframe,object,embed').forEach(n=>n.remove());clone.querySelectorAll('[id]').forEach(n=>n.id=`original-${n.id}`);clone.querySelectorAll('[style]').forEach(n=>n.removeAttribute('style'));
  for(const element of [clone,...clone.querySelectorAll('*')]){for(const attr of Array.from(element.attributes)){if(attr.name.startsWith('on'))element.removeAttribute(attr.name);}for(const name of ['href','src','poster']){const v=element.getAttribute(name);if(!v)continue;if(v.startsWith('#'))element.setAttribute(name,'#original-'+v.slice(1));else{const url=new URL(v,new URL(file,location.href));if(['http:','https:','mailto:','tel:'].includes(url.protocol))element.setAttribute(name,url.href);else element.removeAttribute(name);}}}
  fragment.append(clone);
 }
 content.replaceChildren(fragment);content.scrollTop=0;if(focus)$('reader-title').focus({preventScroll:true});
 }catch{if(token!==requestId)return;const p=document.createElement('p');p.className='content-error';p.textContent='This section could not load. ';const a=document.createElement('a');a.href=file;a.textContent='Open the original page →';p.append(a);content.replaceChildren(p);}
}
function arrive(index,focus=true){if(!destinations[index])return;active=index;travelling=null;highlight(index);$('reader-title').textContent=destinations[index].title;$('chapter').textContent='YOU’RE AT';$('status').textContent=`Parked at ${destinations[index].title}`;$('next-place').textContent=`Drive to ${destinations[(index+1)%6].title} →`;setPanel(true);void renderContent(destinations[index].file,{contact:index===5,focus});}
function goTo(index){if(!Number.isInteger(index)||!destinations[index])throw new Error('Unknown destination');if(!campus){arrive(index);return;}travelling=index;document.body.classList.add('exploring');setPanel(false);highlight(index);$('status').textContent=`Driving to ${destinations[index].title}…`;$('arrival').hidden=true;campus.goTo(index);$('world').focus();}
function update(state){mode=state.mode;near=state.near;
 const hudSpeed=Math.round(Math.abs(state.speed||0)*3.6);
 $('hud-gear').textContent=state.swimming?'—':state.gear??1;$('hud-rpm').textContent=state.swimming?'idle':state.rpm??850;
 $('hud-speed').textContent=`${hudSpeed} km/h`;$('hud-packets').textContent=state.caught??0;$('hud-findings').textContent=`${state.patched??0}/4`;
 if(probe){probe.setAttribute('transform',`translate(${state.x} ${state.z}) rotate(${(state.yaw||0)*180/Math.PI})`);if(probeLabel)probeLabel.setAttribute('transform',`rotate(${-(state.yaw||0)*180/Math.PI})`);}if(Math.abs(state.speed||0)>.3)document.body.classList.add('exploring');const title=state.destination!==null?destinations[state.destination]?.title:undefined;$('pause').hidden=panelOpen;$('pause').textContent=mode==='paused'?'Resume':'Pause';if(!panelOpen&&performance.now()>logHold){$('hud-line').firstChild.nodeValue=$('status').textContent=!document.body.classList.contains('exploring')?'[ready] pick a host, or take the wheel':mode==='paused'?'[paused] drive paused':mode==='travelling'?`[route] driving to ${title}…`:near>=0?`[arrived] ${destinations[near].title.toLowerCase()}.hem.local`:state.swimming?'[afloat] paddling · drive at the beach to get out':state.airborne?'[airborne]':`[roam] ${Math.round(Math.abs(state.speed||0)*3.6)} km/h · free roam`;}
 $('arrival').hidden=panelOpen||mode==='travelling'||near<0;if(near>=0)$('arrival-label').textContent=`You’re at ${destinations[near].title}`;
}
$('reset').onclick=()=>{setPanel(false);document.body.classList.add('exploring');campus?.reset();$('world').focus();};$('close').onclick=closeContent;$('explore').onclick=closeContent;$('next-place').onclick=()=>goTo((active+1)%6);$('enter-place').onclick=()=>{if(near>=0)arrive(near);};$('pause').onclick=()=>{campus?.pause();$('world').focus();};$('camera').onclick=()=>toggleMap();
// ---------------------------------------------------------------- network map
// The map is a network diagram, not a picture of the island: hosts, links, and a probe that is the car.
const NS='http://www.w3.org/2000/svg',VIEW=ISLAND+70;
let mapOpen=false,probe=null,probeLabel=null,breachMarks=[];
function svg(name,attributes,parent){const node=document.createElementNS(NS,name);for(const [key,value] of Object.entries(attributes))node.setAttribute(key,value);parent?.append(node);return node;}
function buildMap(){
 const panel=$('netmap');
 const header=document.createElement('header');header.className='netmap-bar';
 header.innerHTML='<b>network · 10.0.1.0/24</b><span>6 hosts up · click one to drive there</span><span id="netmap-patched">findings 0/4 patched</span>';
 const legend=document.createElement('ul');legend.className='netmap-legend';
 legend.innerHTML='<li class="legend-title">findings on 10.0.1.20</li>'+FINDINGS.map((finding,index)=>`<li data-breach="${index}"><i></i><b>${finding.host}</b><span>${finding.detail}</span></li>`).join('');
 const stage=document.createElement('div');stage.className='netmap-stage';
 panel.append(header,stage,legend);

 const root=svg('svg',{viewBox:`${-VIEW} ${-VIEW} ${VIEW*2} ${VIEW*2}`,role:'img','aria-label':'Network map of the portfolio'},stage);
 const grid=svg('g',{class:'grid'},root);
 for(let g=-VIEW;g<=VIEW;g+=48){svg('line',{x1:g,y1:-VIEW,x2:g,y2:VIEW},grid);svg('line',{x1:-VIEW,y1:g,x2:VIEW,y2:g},grid);}
 svg('circle',{cx:CENTRE.x,cy:CENTRE.z,r:ISLAND,class:'perimeter'},root);
 svg('text',{x:CENTRE.x,y:CENTRE.z-ISLAND-14,class:'edge-label'},root).textContent='perimeter · sea beyond';
 svg('circle',{cx:CENTRE.x,cy:CENTRE.z,r:RING,class:'ring'},root);
 const links=svg('g',{class:'links'},root);
 destinations.forEach(place=>svg('line',{x1:CENTRE.x+Math.sin(place.rotation)*RING,y1:CENTRE.z+Math.cos(place.rotation)*RING,x2:place.bx,y2:place.bz},links));
 breachMarks=FINDINGS.map((finding,index)=>{const spot=breachAt(index),group=svg('g',{class:'breach'},root);
  svg('rect',{x:spot.x-5,y:spot.z-9,width:10,height:18,rx:2},group);return group;});

 const nodes=svg('g',{class:'nodes'},root);
 const gateway=svg('g',{class:'node gateway'},nodes);
 svg('circle',{cx:CENTRE.x,cy:CENTRE.z,r:11},gateway);
 svg('text',{x:CENTRE.x,y:CENTRE.z-46,class:'host'},gateway).textContent=GATEWAY.name;
 svg('text',{x:CENTRE.x,y:CENTRE.z-26,class:'meta'},gateway).textContent=`${GATEWAY.address} · gateway`;
 destinations.forEach((place,index)=>{const host=HOSTS[index],out={x:Math.sin(place.rotation),z:Math.cos(place.rotation)};
  const node=svg('g',{class:'node','data-destination':index,tabindex:'0',role:'button','aria-label':`Drive to ${place.title}`},nodes);
  svg('circle',{cx:place.bx,cy:place.bz,r:13},node);
  const anchor=out.x>.3?'start':out.x<-.3?'end':'middle',x=place.bx+out.x*26,y=place.bz+out.z*26;
  svg('text',{x,y:y+(out.z>0?26:-6),class:'host','text-anchor':anchor},node).textContent=`${host.name}.hem.local`;
  svg('text',{x,y:y+(out.z>0?50:18),class:'meta','text-anchor':anchor},node).textContent=`${host.address} · ${host.ports}`;
  const drive=()=>{toggleMap(false);goTo(index);};
  node.addEventListener('click',drive);
  node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();drive();}});});

 const car=svg('g',{class:'probe'},root);
 svg('path',{d:'M0 -20 L11 12 L0 5 L-11 12 Z'},car);
 probe=car;probeLabel=svg('text',{x:0,y:34,class:'probe-label','text-anchor':'middle'},car);probeLabel.textContent='probe';
}
function markPatched(finding){breachMarks[finding.index]?.classList.add('patched');$('netmap').querySelector(`[data-breach="${finding.index}"]`)?.classList.add('patched');
 const counter=$('netmap-patched');if(counter)counter.textContent=`findings ${finding.patched}/${finding.total} patched`;}
function toggleMap(open){mapOpen=open===undefined?!mapOpen:open;$('netmap').hidden=!mapOpen;document.body.classList.toggle('map-open',mapOpen);
 $('camera').textContent=mapOpen?'Close map ✕':'Network map ⌗';$('camera').setAttribute('aria-expanded',String(mapOpen));
 if(!mapOpen)$('world').focus();}

let nightOn=true;try{nightOn=localStorage.getItem('portfolio-night')!=='off';}catch{}
function paintNight(){document.body.classList.toggle('night',nightOn);$('night').textContent=nightOn?'Night ◐':'Day ☀';$('night').setAttribute('aria-pressed',String(nightOn));}
$('night').onclick=()=>{nightOn=!nightOn;campus?.night(nightOn);try{localStorage.setItem('portfolio-night',nightOn?'on':'off');}catch{}paintNight();$('world').focus();};
paintNight();
let soundOn=true;try{soundOn=localStorage.getItem('portfolio-sound')!=='off';}catch{}
function paintSound(){$('sound').textContent=soundOn?'Sound ♪':'Muted ♪';$('sound').setAttribute('aria-pressed',String(soundOn));}
paintSound();$('sound').onclick=()=>{soundOn=!soundOn;campus?.audio(soundOn);try{localStorage.setItem('portfolio-sound',soundOn?'on':'off');}catch{}paintSound();$('world').focus();};
document.querySelectorAll('[data-destination]').forEach(b=>b.onclick=()=>goTo(Number(b.dataset.destination)));
document.querySelectorAll('[data-key]').forEach(b=>{b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);campus?.input(b.dataset.key,true);};b.onpointerup=b.onpointercancel=()=>campus?.input(b.dataset.key,false);});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();if(panelOpen)closeContent();else campus?.pause();}if(e.key.toLowerCase()==='r'&&!e.target.closest('input,textarea,#reader')){$('reset').click();}if(e.key.toLowerCase()==='e'&&!panelOpen&&near>=0)arrive(near);});
content.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||a.hasAttribute('download'))return;const url=new URL(a.href);if(url.origin!==location.origin||url.protocol!=='http:'&&url.protocol!=='https:')return;if(url.hash.startsWith('#original-')){e.preventDefault();content.querySelector(`[id="${CSS.escape(url.hash.slice(1))}"]`)?.scrollIntoView();return;}const file=url.pathname.split('/').pop();let index=destinations.findIndex(d=>d.file===file);if(file==='index.html')index=0;if(index>=0){e.preventDefault();goTo(index);return;}if(url.pathname.includes('/posts/')&&file.endsWith('.html')){e.preventDefault();void renderContent(url.href,{article:true,focus:true});}});
highlight(0);$('begin-tour').onclick=closeContent;$('tour-findings').onclick=()=>goTo(1);
buildMap();
// Patching a finding: a flash, a log line, and the map node turns green.
function log(text,seconds=3.4){$('status').textContent=text;logHold=performance.now()+seconds*1000;}
function patch(finding){markPatched(finding);
 $('glitch').hidden=false;$('glitch').classList.remove('flash');void $('glitch').offsetWidth;$('glitch').classList.add('flash');
 setTimeout(()=>{$('glitch').hidden=true;},650);
 log(`[patched] ${finding.host} — ${finding.detail} (${finding.patched}/${finding.total})`,4.5);}
// A short boot log, skipped by any key or tap.
{const lines=['hem@portfolio:~$ ./drive.sh --world island --mode night','[ ok ] mounting /dev/portfolio','[ ok ] nmap -sV 10.0.1.0/24','       10.0.1.10  overview.hem.local   443/tcp  22/tcp','       10.0.1.20  findings.hem.local   443/tcp  4444/tcp','       10.0.1.30  projects.hem.local   443/tcp  8080/tcp','       10.0.1.40  writing.hem.local    443/tcp','       10.0.1.50  about.hem.local      443/tcp','       10.0.1.60  contact.hem.local    443/tcp  25/tcp','[ ok ] arming firewall · default deny','[warn] 4 findings unpatched — drive through them to patch','[ ok ] handing you the keys'];
 const target=$('boot-log');let index=0;
 const step=()=>{if(index<lines.length){target.textContent+=(index?'\n':'')+lines[index++];campus?.key?.();setTimeout(step,110);}else setTimeout(done,620);};
 const done=()=>{if($('boot').hidden)return;$('boot').classList.add('gone');setTimeout(()=>{$('boot').hidden=true;},420);};
 setTimeout(step,180);
 window.addEventListener('keydown',done,{once:true});window.addEventListener('pointerdown',done,{once:true});}
try{const {createCampus}=await import('./campus.js');campus=createCampus($('world'),{onState:update,onArrive:arrive,onSelect:goTo,onDrive:()=>{document.body.classList.add('exploring');setPanel(false);},onMap:()=>toggleMap(),onBreach:patch,onNight:value=>{nightOn=value;try{localStorage.setItem('portfolio-night',value?'on':'off');}catch{}paintNight();}});campus.setPanel(panelOpen);campus.night(nightOn);if(!soundOn)campus.audio(false);}catch(error){$('sound').hidden=true;$('night').hidden=true;$('fallback').hidden=false;arrive(0,false);$('camera').disabled=true;$('explore').hidden=true;console.error('3D portfolio unavailable',error);}
const lifecycle=new AbortController();if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'drive_to_portfolio_section',description:'Start driving the portfolio car to a selected place. Its content opens after arrival.',inputSchema:{type:'object',properties:{section:{type:'string',enum:destinations.map(d=>d.id)}},required:['section'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){const i=destinations.findIndex(d=>d.id===input?.section);if(i<0)throw new Error('Unknown destination');goTo(i);return{destination:destinations[i].title,status:campus?'driving':'content_open'};}},{signal:lifecycle.signal})).catch(()=>{});}catch{}}
window.addEventListener('pagehide',()=>{lifecycle.abort();campus?.dispose();},{once:true});
