import * as THREE from 'three';
import {strikeProp,stepProps} from './physics.mjs';
import {GLTFLoader} from './vendor/loaders/GLTFLoader.js';
import {RoundedBoxGeometry} from './vendor/geometries/RoundedBoxGeometry.js';
import {destinations,roadPoints,obstacles,createRoute,advanceRoute,clearSegment} from './navigation.mjs';
export function createCampus(container,{onState,onArrive,onSelect}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#deddd3');scene.fog=new THREE.Fog('#deddd3',190,400);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(container.clientWidth,container.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;container.append(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(37,container.clientWidth/container.clientHeight,.1,600);
 const sun=new THREE.DirectionalLight('#fff0d2',4);sun.position.set(-65,90,35);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-82,right:82,top:82,bottom:-82,far:250});sun.shadow.bias=-.0003;sun.shadow.normalBias=.08;scene.add(sun,new THREE.HemisphereLight('#eef4ff','#b29972',2.4));
 const environment=new THREE.Scene();environment.background=new THREE.Color('#cad9de');const ceiling=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshBasicMaterial({color:'#fff9e9',side:THREE.DoubleSide}));ceiling.position.y=70;ceiling.rotation.x=Math.PI/2;environment.add(ceiling);const fill=new THREE.Mesh(new THREE.PlaneGeometry(70,120),new THREE.MeshBasicMaterial({color:'#ffffff',side:THREE.DoubleSide}));fill.position.set(-40,20,-40);fill.rotation.y=.7;environment.add(fill);const pmrem=new THREE.PMREMGenerator(renderer),env=pmrem.fromScene(environment,.03);scene.environment=env.texture;
 const material=(color,roughness=.8,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
 const cream=material('#d6c4a6'),paper=material('#f0e7d7'),dark=material('#303d3c'),black=material('#1b272a'),orange=material('#dc713b'),moss=material('#7d9277'),metal=material('#657774',.4,.7),glass=new THREE.MeshPhysicalMaterial({color:'#658b8b',roughness:.2,metalness:.45,clearcoat:1});
 const textures=[],interactive=[],animated=[];let disposed=false;
 function box(parent,w,h,d,x,y,z,mat,r=.15){const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function cylinder(parent,r,h,x,y,z,mat,segments=32){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function sign(parent,title,subtitle,x,y,z,width=9,height=2.4,color='#df9c5c',rotation=Math.PI){const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#263b39';ctx.fillRect(0,0,1024,256);ctx.fillStyle=color;ctx.fillRect(28,35,8,182);ctx.font='bold 76px Arial';ctx.fillText(title,66,115,905);ctx.fillStyle='#d6e2d1';ctx.font='28px Arial';ctx.fillText(subtitle,66,189,900);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);const m=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));m.position.set(x,y,z);m.rotation.y=rotation;parent.add(m);return m;}
 const base=box(scene,129,4,114,0,-2.2,-5,cream,2);box(scene,128,.4,113,0,-.06,-5,paper,1.3);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(1800,1800),material('#dbd7ca'));floor.rotation.x=-Math.PI/2;floor.position.y=-4.3;floor.receiveShadow=true;scene.add(floor);
 function ribbon(points,width,color,y){const vertices=[],indices=[];for(let i=0;i<points.length;i++){const p=points[i],before=points[(i+points.length-1)%points.length],after=points[(i+1)%points.length];const dx=after.x-before.x,dz=after.z-before.z,l=Math.hypot(dx,dz);for(const s of [-1,1])vertices.push(p.x-dz/l*width/2*s,y,p.z+dx/l*width/2*s);const n=(i+1)%points.length;indices.push(i*2,n*2,i*2+1,i*2+1,n*2,n*2+1);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();const mesh=new THREE.Mesh(g,material(color));mesh.receiveShadow=true;scene.add(mesh);}
 ribbon(roadPoints,9.3,'#b5ad98',.17);ribbon(roadPoints,8,'#646b65',.21);
 for(let i=0;i<roadPoints.length;i+=2){const p=roadPoints[i],q=roadPoints[(i+1)%roadPoints.length];const dash=box(scene,.14,.02,.8,p.x,.235,p.z,paper,.005);dash.rotation.y=Math.atan2(q.x-p.x,q.z-p.z);}
 // Crosswalks, parking aprons and street furniture turn navigation into a real place.
 destinations.forEach(d=>{const apron=box(scene,8,.15,7,d.x,.2,d.z,cream,.1);apron.rotation.y=d.rotation;for(const side of [-1,1]){const line=box(scene,.09,.02,4.8,d.x+Math.cos(d.rotation)*side*2.8,.3,d.z-Math.sin(d.rotation)*side*2.8,paper,.01);line.rotation.y=d.rotation;}});
 for(let i=5;i<roadPoints.length;i+=12){const p=roadPoints[i],q=roadPoints[(i+1)%roadPoints.length],a=Math.atan2(q.x-p.x,q.z-p.z);const x=p.x-Math.cos(a)*6,z=p.z+Math.sin(a)*6;cylinder(scene,.11,5,x,2.6,z,dark,10);box(scene,1.7,.18,.7,x,5.2,z,paper);}
 // Central field: a kinetic research sculpture and low planting beds.
 box(scene,26,.5,21,-1,.35,-3,cream,1);box(scene,23,.25,18,-1,.73,-3,moss,1);
 cylinder(scene,4.7,.45,-1,1.1,-3,paper);const sculpture=new THREE.Group();sculpture.position.set(-1,5.3,-3);scene.add(sculpture);
 for(let i=0;i<3;i++){const torus=new THREE.Mesh(new THREE.TorusGeometry(3.2,.25,12,64),i===1?orange:metal);torus.rotation.set(i*.8,i*1.2,.4);sculpture.add(torus);}animated.push(sculpture);
 function planter(parent,x,z,r=1.2){cylinder(parent,r,.75,x,.6,z,cream,20);const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(r*.9,1),moss);crown.position.set(x,1.5,z);crown.castShadow=true;parent.add(crown);}
 const tags=[];
 destinations.forEach((d,i)=>{
 const exhibit=new THREE.Group();exhibit.position.set(d.bx,0,d.bz);exhibit.rotation.y=d.rotation;scene.add(exhibit);box(exhibit,20,.55,14,0,.45,0,cream,.6);const tint=material(d.color);let labelHeight=9;
 if(i===0){
  // Studio: drafting table, monitor, stool, task lamp, and a large name plate.
  box(exhibit,17,6,.45,0,3.8,4,paper,.2);sign(exhibit,'HEM PAREKH','SECURITY & VULNERABILITY RESEARCH',0,4.1,3.73,15,3.7,'#e4a467');
  box(exhibit,11,.3,4,0,2.4,-1,dark);for(const x of [-4.5,4.5])box(exhibit,.3,2.3,3,x,1.25,-1,metal);
  box(exhibit,4.1,2.8,.24,1,4,-1.5,black);sign(exhibit,'~/research','read code. prove impact. ship fixes.',1,4,-1.66,3.8,2.3,'#95ba9b');box(exhibit,2.5,.12,1.2,1,2.6,-2.1,paper);
  cylinder(exhibit,1.1,.3,-2,1.5,-5,orange);cylinder(exhibit,.14,1.4,-2,.9,-5,metal);
  box(exhibit,1.2,.13,1.2,-4,2.7,-1,metal);cylinder(exhibit,.07,2,-4,3.7,-1,metal);box(exhibit,1.5,.2,.7,-3.5,4.7,-1,orange);
  planter(exhibit,7,-4);labelHeight=8;
 }else if(i===1){
  // Research lab: cabinets with individual rack modules and live status lights.
  for(let j=-1;j<=1;j++){box(exhibit,4.7,7,4,j*5.6,4,0,dark,.4);box(exhibit,4.25,6.3,.2,j*5.6,4,-2.08,black);
  for(let k=0;k<8;k++){box(exhibit,3.9,.53,.25,j*5.6,1.45+k*.69,-2.24,metal,.04);for(let dot=0;dot<3;dot++)box(exhibit,.12,.11,.07,j*5.6-1.45+dot*.27,1.45+k*.69,-2.4,material(dot===2?'#cce4a7':'#8ebea3'),.02);}
  sign(exhibit,['LINUX','PYTORCH','CURL'][j+1],'UPSTREAM FINDINGS',j*5.6,8.6,0,5,1.4,d.color);}
  for(const x of [-9,9])box(exhibit,.18,10,.18,x,5,4,metal);box(exhibit,19,.3,8,0,10,1,paper);labelHeight=11.5;
 }else if(i===2){
  // Project garage: open steel framework, tools, benches and three products.
  for(const x of [-9,9])for(const z of [-5,5])box(exhibit,.25,8,.25,x,4.5,z,dark);box(exhibit,19,.4,11,0,8.7,0,orange,.15);
  for(let j=-1;j<=1;j++){box(exhibit,5,1.9,3,j*5.8,1.8,-.4,dark,.3);box(exhibit,4.6,2.8,.25,j*5.8,4.1,-.8,black);sign(exhibit,['RAVEN','FORGE','CRIP'][j+1],'SECURITY TOOLING',j*5.8,4.1,-.98,4.4,2.5,'#ebb879');}
  const wheel=new THREE.Mesh(new THREE.TorusGeometry(1.25,.24,12,12),metal);wheel.position.set(-7,2,-4);exhibit.add(wheel);planter(exhibit,8,-4);labelHeight=10.5;
 }else if(i===3){
  // Writing pavilion: staggered shelves, cloth-covered volumes and a reading table.
  box(exhibit,18,.35,4,0,1,3,dark);box(exhibit,18,.35,4,0,4,3,dark);box(exhibit,18,.35,4,0,7,3,dark);
  for(let j=0;j<14;j++){const h=1.4+(j%4)*.24;for(const level of [0,1]){const b=box(exhibit,.8,h,2.4,-8+j*1.2,1.2+level*3+h/2,3,material(['#b09a83','#9baaac','#c5b797','#566c68'][j%4]),.05);b.rotation.z=(j%3-1)*.05;}}
  box(exhibit,13,.3,4,0,2,-3,paper);for(const x of [-5,5])box(exhibit,.25,1.6,3,x,1.2,-3,dark);for(let j=-1;j<=1;j++){const page=box(exhibit,3,.08,2,j*4,2.2,-3,paper,.02);page.rotation.y=j*.12;}labelHeight=9;
 }else if(i===4){
  // Career timeline: dated plinths, topped by the names from the résumé.
  const names=['RNS','LANGAN','TOSHIBA','AMAZON'],dates=['2021–2022','2023–2024','2024','2025–NOW'];
  for(let j=0;j<4;j++){const h=1.8+j*1.25;box(exhibit,4,h,6,-7.5+j*5,h/2+.6,0,j===3?orange:dark,.25);sign(exhibit,names[j],dates[j],-7.5+j*5,h+2.4,0,4.9,2.1,j===3?'#efbc79':d.color);}
  sign(exhibit,'RIT / VIIT','EDUCATION',0,2.2,-5.2,9,2.3,d.color);labelHeight=11;
 }else{
  // Contact terrace: a shaded communal table rather than another box building.
  for(const x of [-8,8])for(const z of [-5,5])box(exhibit,.2,7,.2,x,4,z,dark);
  for(let j=0;j<10;j++)box(exhibit,.5,.22,12,-8+j*1.8,7.7,0,cream);
  cylinder(exhibit,3.1,.25,0,2.2,0,paper);cylinder(exhibit,.3,1.6,0,1.3,0,dark);
  for(let j=0;j<4;j++){const a=j*Math.PI/2,x=Math.sin(a)*5,z=Math.cos(a)*5;cylinder(exhibit,1,.35,x,1.5,z,orange);cylinder(exhibit,.13,1,x,.9,z,metal);}
  planter(exhibit,-7,-4);planter(exhibit,7,4);labelHeight=9;
 }
 exhibit.traverse(o=>{if(o.isMesh){o.userData.destination=i;interactive.push(o);}});
 const tag=document.createElement('button');tag.className='world-label';tag.innerHTML='<span>0'+(i+1)+'</span><div>'+d.title+'<small>'+d.subtitle+'</small></div><b>↗</b>';tag.setAttribute('aria-label','Drive to '+d.title);tag.onclick=()=>onSelect(i);container.append(tag);tags.push({el:tag,x:d.bx,y:labelHeight,z:d.bz});
 });
 // Small repeated details share geometry and materials for low draw cost.
 let seed=71;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<36;i++){const x=-59+random()*117,z=-54+random()*94;if(roadPoints.some(p=>Math.hypot(p.x-x,p.z-z)<7)||destinations.some(d=>Math.hypot(d.bx-x,d.bz-z)<12)||Math.hypot(x+1,z+3)<17)continue;cylinder(scene,.25,3,x,1.6,z,cream,8);const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(2.4,1),moss);crown.position.set(x,4,z);crown.scale.y=1.4;crown.castShadow=true;scene.add(crown);}
 for(let i=0;i<14;i++){const x=-11+(i%7)*3.3,z=i<7?-13:8;planter(scene,x,z,.7);}
 // A loose-object playground: every cone, crate and barrel can be pushed around.
 const props=[];
 function addProp(type,x,z){const group=new THREE.Group();scene.add(group);if(type==='cone'){box(group,1.1,.14,1.1,0,.25,0,black,.08);const cone=new THREE.Mesh(new THREE.ConeGeometry(.48,1.25,16),orange);cone.position.y=.94;cone.castShadow=true;group.add(cone);const band=new THREE.Mesh(new THREE.ConeGeometry(.3,.34,16),paper);band.position.y=1.05;group.add(band);}else if(type==='crate'){box(group,1.65,1.65,1.65,0,1,0,cream,.09);for(const y of [.4,1.6])box(group,1.7,.13,1.72,0,y,0,dark,.025);for(const x of [-.7,.7])box(group,.12,1.65,1.74,x,1,0,dark,.025);}else{cylinder(group,.7,1.7,0,1,0,orange,20);for(const y of [.42,1.5])cylinder(group,.73,.12,0,y,0,metal,20);}props.push({mesh:group,type,x,z,vx:0,vz:0,radius:type==='cone'?.6:.85,rotation:0,spin:0,tip:0,homeX:x,homeZ:z});}
 for(let i=0;i<12;i++)addProp('cone',-19+i*3.3,32+(i%2)*2.4);
 for(let i=0;i<9;i++)addProp('crate',40+(i%3)*2,-11+Math.floor(i/3)*2);
 for(let i=0;i<7;i++)addProp('barrel',-48+(i%3)*2.3,3+Math.floor(i/3)*2.1);
 for(let i=0;i<8;i++)addProp(i%2?'crate':'cone',-18+i*3.2,-42+(i%2)*3);
 const ramps=[{x:15,z:-7,w:7,l:8,h:2.2},{x:-19,z:4,w:6,l:7,h:1.8}];
 for(const ramp of ramps){const g=new THREE.BufferGeometry();const x=ramp.w/2,z=ramp.l/2,h=ramp.h;g.setAttribute('position',new THREE.Float32BufferAttribute([-x,.22,-z,x,.22,-z,-x,h,z,x,h,z,-x,.22,z,x,.22,z],3));g.setIndex([0,2,1,1,2,3,0,4,2,1,3,5,2,4,3,3,4,5]);g.computeVertexNormals();const m=new THREE.Mesh(g,orange);m.position.set(ramp.x,0,ramp.z);m.castShadow=true;m.receiveShadow=true;scene.add(m);for(const side of [-1,1]){const rail=box(scene,.13,.08,ramp.l,ramp.x+side*(ramp.w/2-.4),ramp.h/2+.22,ramp.z,paper,.02);rail.rotation.x=Math.atan2(ramp.h,ramp.l);}}
 for(let i=0;i<15;i++){box(scene,4,.7,.6,-58+i*8,.5,45,dark,.1);box(scene,4,.7,.6,-58+i*8,.5,-56,dark,.1);}
 let altitude=.28,verticalSpeed=0,impactShake=0;
 const car=new THREE.Group();scene.add(car);const placeholder=new THREE.Group();car.add(placeholder);box(placeholder,2.5,.6,5.2,0,.75,0,orange,.3);box(placeholder,2,.65,2.5,0,1.35,-.2,glass,.2);for(const x of [-1.25,1.25])for(const z of [-1.65,1.65]){const w=new THREE.Mesh(new THREE.CylinderGeometry(.49,.49,.35,20),black);w.rotation.z=Math.PI/2;w.position.set(x,.55,z);placeholder.add(w);}
 new GLTFLoader().load('./assets/models/car.glb',gltf=>{if(disposed)return;const model=gltf.scene;const bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());const scale=5.9/Math.max(size.x,size.z);model.scale.setScalar(scale);model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;if(o.material.transmission)o.material.transmission=.3;}});car.add(model);placeholder.visible=false;},undefined,()=>{});
 const targetRing=new THREE.Mesh(new THREE.RingGeometry(3.2,3.35,64),new THREE.MeshBasicMaterial({color:'#d37642',transparent:true,opacity:.8}));targetRing.rotation.x=-Math.PI/2;targetRing.position.y=.35;targetRing.visible=false;scene.add(targetRing);
 const routeLine=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineDashedMaterial({color:'#edb465',dashSize:1.1,gapSize:.75,transparent:true,opacity:.95,depthTest:false}));routeLine.renderOrder=4;scene.add(routeLine);
 let state={x:-28,z:20,yaw:Math.PI/2,speed:0},path=[],destination=null,parked=false,mode='manual',view=1,paused=false,panelOpen=false,lastArrival=-1,frame,last=0,send=0;const keys=new Set();
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down;
 renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>6)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(interactive)[0];if(hit)onSelect(hit.object.userData.destination);});
 function input(k,value){if(value){if(parked||paused)return;keys.add(k);path=[];destination=null;routeLine.visible=false;targetRing.visible=false;mode='manual';view=0;}else keys.delete(k);}
 function keydown(e){if(e.target.closest('button,a,input,textarea,select,#reader'))return;const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' '].includes(k)){e.preventDefault();input(k,true);}if(k==='c')view=1-view;}
 function keyup(e){keys.delete(e.key.toLowerCase());}const blur=()=>{keys.clear();if(mode!=='parked')paused=true;};window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',blur);
 function resize(){camera.aspect=container.clientWidth/container.clientHeight;camera.updateProjectionMatrix();renderer.setSize(container.clientWidth,container.clientHeight);}window.addEventListener('resize',resize);
 const look=new THREE.Vector3(0,0,-5);camera.position.set(94,108,118);const cameraOffset=new THREE.Vector3(23,27,30);
 function emit(){onState({x:state.x,z:state.z,yaw:state.yaw,speed:state.speed,airborne:altitude>.8,mode:paused?'paused':mode,destination,near:destinations.findIndex(d=>Math.hypot(d.x-state.x,d.z-state.z)<4.5)});}
 function animate(now){frame=requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.04)||.016;last=now;
  if(!paused&&!parked){if(path.length){if(advanceRoute(state,path,dt)){parked=true;mode='parked';lastArrival=destination;routeLine.visible=false;onArrive(destination);}}else{const f=keys.has('w')||keys.has('arrowup'),b=keys.has('s')||keys.has('arrowdown'),brake=keys.has(' ');state.speed+=((f?16:0)-(b?11:0)-state.speed*1.65)*dt;if(brake)state.speed*=Math.exp(-10*dt);state.speed=THREE.MathUtils.clamp(state.speed,-5,11);const steer=Number(keys.has('a')||keys.has('arrowleft'))-Number(keys.has('d')||keys.has('arrowright'));state.yaw+=steer*dt*1.7*Math.min(1,Math.abs(state.speed)/2)*Math.sign(state.speed||1);const next={x:state.x+Math.sin(state.yaw)*state.speed*dt,z:state.z+Math.cos(state.yaw)*state.speed*dt};if(Math.abs(next.x)<59&&next.z>-55&&next.z<44&&clearSegment(state,next)){state.x=next.x;state.z=next.z;}else{state.speed*=-.5;impactShake=.7;}
   // Manual roaming never interrupts driving with a reader; E opens a nearby place.
   const near=destinations.findIndex(d=>Math.hypot(d.x-state.x,d.z-state.z)<4.5);if(near<0)lastArrival=-1;

  }}
  if(!paused){if(altitude<1.9){for(const prop of props){const impact=strikeProp(state,prop);if(impact>1)impactShake=Math.min(.6,impact*.045);}}stepProps(props,dt,obstacles);}
  for(const prop of props){prop.mesh.position.set(prop.x,prop.type==='cone'?-.18*Math.sin(prop.tip):0,prop.z);prop.mesh.rotation.set(prop.type==='cone'?prop.tip:0,prop.rotation,prop.type==='barrel'?prop.tip*.25:0);}
  let floorHeight=.28,rampPitch=0;for(const ramp of ramps){if(Math.abs(state.x-ramp.x)<ramp.w/2&&Math.abs(state.z-ramp.z)<ramp.l/2){floorHeight=.28+(state.z-ramp.z+ramp.l/2)/ramp.l*ramp.h;rampPitch=-Math.atan2(ramp.h,ramp.l)*Math.cos(state.yaw);}}
  if(!paused){if(altitude<=floorHeight+.08){if(floorHeight>altitude){verticalSpeed=Math.max(verticalSpeed,Math.cos(state.yaw)*state.speed*.25);}altitude=floorHeight;if(floorHeight===.28)verticalSpeed=0;}else verticalSpeed-=12*dt;altitude=Math.max(floorHeight,altitude+verticalSpeed*dt);impactShake*=Math.exp(-dt*8);}
  car.position.set(state.x,altitude+Math.sin(now*.05)*impactShake*.15,state.z);car.rotation.set(rampPitch+Math.sin(now*.06)*impactShake*.1,state.yaw,Math.cos(now*.047)*impactShake*.13);sculpture.rotation.y=now*.00009;targetRing.material.opacity=.5+Math.sin(now*.003)*.2;
  const narrow=container.clientWidth<760,focus=new THREE.Vector3(state.x,0,state.z),camTarget=new THREE.Vector3(),lookTarget=new THREE.Vector3();
  if(view===1){camTarget.set(narrow?100:89,narrow?140:108,narrow?148:115);lookTarget.set(narrow?0:-9,0,-5);}else{camTarget.copy(focus).add(cameraOffset);if(narrow)camTarget.y+=8;lookTarget.copy(focus);if(panelOpen){if(narrow)lookTarget.z+=8;else lookTarget.add(new THREE.Vector3(-8,0,6));}}
  camera.position.lerp(camTarget,1-Math.exp(-dt*2.1));look.lerp(lookTarget,1-Math.exp(-dt*2.6));camera.lookAt(look);camera.updateMatrixWorld();
  for(const tag of tags){const p=new THREE.Vector3(tag.x,tag.y,tag.z).project(camera);const dist=Math.hypot(tag.x-state.x,tag.z-state.z);tag.el.hidden=p.z>=1||Math.abs(p.x)>1.05||Math.abs(p.y)>1||(view===0&&dist>37);tag.el.classList.toggle('compact',view===0);tag.el.style.left=((p.x+1)/2*container.clientWidth)+'px';tag.el.style.top=((-p.y+1)/2*container.clientHeight)+'px';}
  renderer.render(scene,camera);if(now-send>80){emit();send=now;}
 }
 frame=requestAnimationFrame(animate);
 return{reset(){state={x:-28,z:20,yaw:Math.PI/2,speed:0};altitude=.28;verticalSpeed=0;path=[];destination=null;parked=false;paused=false;mode='manual';routeLine.visible=false;targetRing.visible=false;keys.clear();for(const p of props){p.x=p.homeX;p.z=p.homeZ;p.vx=p.vz=p.spin=p.rotation=p.tip=0;}emit();},goTo(index){if(!destinations[index])throw new Error('Unknown destination');const route=createRoute(state,destinations[index]);keys.clear();destination=index;path=route;parked=false;paused=false;view=0;panelOpen=false;mode='travelling';targetRing.position.set(destinations[index].x,.36,destinations[index].z);targetRing.visible=true;routeLine.geometry.dispose();routeLine.geometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(state.x,.42,state.z),...route.map(p=>new THREE.Vector3(p.x,.42,p.z))]);routeLine.computeLineDistances();routeLine.visible=true;emit();},explore(){path=[];destination=null;routeLine.visible=false;targetRing.visible=false;parked=false;paused=false;panelOpen=false;view=0;mode='manual';keys.clear();emit();},setPanel(value){panelOpen=value;if(value){parked=true;state.speed=0;keys.clear();}},pause(){paused=!paused;keys.clear();emit();},camera(){view=1-view;return view;},input,dispose(){disposed=true;cancelAnimationFrame(frame);window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);window.removeEventListener('resize',resize);textures.forEach(t=>t.dispose());env.dispose();pmrem.dispose();renderer.dispose();scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});renderer.domElement.remove();tags.forEach(t=>t.el.remove());}};
}
