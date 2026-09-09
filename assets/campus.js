import * as THREE from 'three';
import { Sky } from './vendor/Sky.js';
import {destinations,createRoute,advanceRoute} from './navigation.mjs';
export function createCampus(container,{onState,onArrive,onSelect}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#bacbd0');scene.fog=new THREE.Fog('#bacbd0',150,370);
 const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(container.clientWidth,container.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;container.append(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(48,container.clientWidth/container.clientHeight,.1,1000);
 scene.add(new THREE.HemisphereLight('#d8eafa','#756f51',2.5));
 const sun=new THREE.DirectionalLight('#ffe6be',3.1);sun.position.set(-70,110,60);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-100,right:100,top:100,bottom:-100,far:300});sun.shadow.bias=-.0003;scene.add(sun);
 const sky=new Sky();sky.scale.setScalar(5000);sky.material.uniforms.sunPosition.value.set(-.7,.45,.5);sky.material.uniforms.turbidity.value=3;sky.material.uniforms.rayleigh.value=1.3;scene.add(sky);
 const pmrem=new THREE.PMREMGenerator(renderer),env=pmrem.fromScene(sky,.02);scene.environment=env.texture;
 const concrete=new THREE.MeshStandardMaterial({color:'#d2cfc3',roughness:.88});const trim=new THREE.MeshStandardMaterial({color:'#3d514d',metalness:.5,roughness:.45});const glass=new THREE.MeshPhysicalMaterial({color:'#496d73',metalness:.65,roughness:.12,clearcoat:1});const asphalt=new THREE.MeshStandardMaterial({color:'#394647',roughness:.94});const lawn=new THREE.MeshStandardMaterial({color:'#738772',roughness:1});
 const interactive=[],colliders=[],ownedTextures=[];
 function box(parent,w,h,d,x,y,z,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function cylinder(parent,r,h,x,y,z,mat,segments=32){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function flatRing(inner,outer,material){const m=new THREE.Mesh(new THREE.RingGeometry(inner,outer,160),material);m.rotation.x=-Math.PI/2;m.position.y=.045;scene.add(m);m.receiveShadow=true;return m;}
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(800,800),lawn);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
 flatRing(24,43,concrete);flatRing(27,37,asphalt);flatRing(27.1,27.25,new THREE.MeshBasicMaterial({color:'#f2ead3'}));flatRing(36.75,36.9,new THREE.MeshBasicMaterial({color:'#f2ead3'}));
 for(let i=0;i<90;i++){const a=i/90*Math.PI*2;const dash=box(scene,.14,.025,1.05,Math.sin(a)*32,.07,Math.cos(a)*32,new THREE.MeshStandardMaterial({color:'#cacdbb'}));dash.rotation.y=a+Math.PI/2;}
 // The central courtyard and a single sculptural nameplate orient the visitor.
 cylinder(scene,20,.16,0,.02,0,concrete,100);cylinder(scene,11,.28,0,.12,0,trim,80);
 const water=new THREE.MeshPhysicalMaterial({color:'#467e82',metalness:.65,roughness:.12,clearcoat:1});cylinder(scene,10.7,.12,0,.33,0,water,80);
 cylinder(scene,3.1,.65,0,.72,0,concrete);const monolith=box(scene,2,9,2,0,5,0,trim);monolith.rotation.y=Math.PI/4;
 const accentMat=color=>new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.16,roughness:.6});
 function label(text,sub,color,w=12,h=3){const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#18322e';ctx.fillRect(0,0,1024,256);ctx.fillStyle=color;ctx.fillRect(0,0,12,256);ctx.font='500 88px Arial';ctx.fillText(text,44,112);ctx.fillStyle='#d0dcd5';ctx.font='27px Arial';ctx.fillText(sub,48,183);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;ownedTextures.push(texture);return new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));}
 const welcome=label('HEM PAREKH','SECURITY & VULNERABILITY RESEARCH','#e8f4aa',13,3.25);welcome.position.set(0,3.2,5);scene.add(welcome);
 const halos=[];
 destinations.forEach((d,i)=>{
  const building=new THREE.Group();building.position.set(Math.sin(d.angle)*54,0,Math.cos(d.angle)*54);building.rotation.y=d.angle;scene.add(building);
  const color=accentMat(d.color);box(building,19,.5,13,0,.25,0,concrete);
  const h=[7,11,7,9,13,6][i];box(building,16,h,10,0,h/2+.5,0,i===1||i===4?trim:concrete);box(building,16.5,.38,10.5,0,h+.6,0,color);
  // Each pavilion has a distinct physical exhibit visible through its glazed facade.
  box(building,14,h-1,.18,0,h/2+.5,-5.1,glass);for(let c=-6;c<=6;c+=3)box(building,.13,h,.25,c,h/2+.5,-5.25,trim);
  box(building,2.4,3,.3,0,2,-5.4,trim);box(building,1.9,2.6,.32,0,2,-5.6,glass);
  if(i===1){for(let j=-1;j<=1;j++){box(building,2,4.5,1.5,j*4,2.6,-6.9,trim);for(let k=0;k<8;k++)box(building,1.55,.13,.08,j*4,.9+k*.45,-7.72,color);}}
  if(i===2){for(let j=-1;j<=1;j++){box(building,3,1.6,2,j*4,1.3,-7.1,trim);box(building,2.6,1.7,.15,j*4,2.7,-7.1,color);}box(building,4,1,3,0,h+1.3,1,trim);}
  if(i===3){for(let j=0;j<6;j++)box(building,.8,2+j*.35,2,-5+j*2,1.5+j*.175,-6.8,accentMat(['#9faace','#d7c49c','#b4c7b2'][j%3]));}
  if(i===4){box(building,10,.3,7,0,5,-1,concrete);box(building,10,.3,7,0,8,-1,concrete);}
  if(i===5){box(building,8,.2,5,0,1.8,-8,trim);for(let side of [-1,1])box(building,8,.65,.6,0,1,side===1?-10.4:-5.8,concrete);}
  const sign=label(d.title,d.details.join('  /  '),d.color,14,3.5);sign.position.set(0,h+3,-4.9);sign.rotation.y=Math.PI;building.add(sign);
  const entry=label(String(i+1).padStart(2,'0')+'  '+d.title.toUpperCase(),'PARK HERE TO EXPLORE',d.color,6,1.5);entry.rotation.x=-Math.PI/2;entry.rotation.z=Math.PI;entry.position.set(0,.08,-14);building.add(entry);
  // Raycast targets include the whole place, rather than a detached menu shortcut.
  building.traverse(o=>{if(o.isMesh){o.userData.destination=i;interactive.push(o);}});
  colliders.push({x:building.position.x,z:building.position.z,radius:9});
  const halo=new THREE.Mesh(new THREE.RingGeometry(2.8,3.05,64),new THREE.MeshBasicMaterial({color:d.color,transparent:true,opacity:.6,side:THREE.DoubleSide}));halo.rotation.x=-Math.PI/2;halo.position.set(d.x,.11,d.z);scene.add(halo);halos.push(halo);
  for(const side of [-1,1]){const pole=new THREE.Group();pole.position.set(Math.sin(d.angle)*43+Math.cos(d.angle)*side*9,0,Math.cos(d.angle)*43-Math.sin(d.angle)*side*9);scene.add(pole);cylinder(pole,.12,6,0,3,0,trim,8);box(pole,1.3,.16,1.3,0,6,0,color);}
 });
 let seed=18;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const trees=new THREE.InstancedMesh(new THREE.ConeGeometry(2.6,9,9),new THREE.MeshStandardMaterial({color:'#365e47',roughness:1}),300);const trunks=new THREE.InstancedMesh(new THREE.CylinderGeometry(.2,.35,3,7),new THREE.MeshStandardMaterial({color:'#68594a'}),300);const dummy=new THREE.Object3D();for(let i=0;i<300;i++){const angle=random()*Math.PI*2,r=77+random()*100,h=.6+random()*.7;dummy.position.set(Math.sin(angle)*r,5*h,Math.cos(angle)*r);dummy.scale.set(h,h,h);dummy.rotation.y=random()*6;dummy.updateMatrix();trees.setMatrixAt(i,dummy.matrix);dummy.position.y=1.5;dummy.scale.set(1,1,1);dummy.updateMatrix();trunks.setMatrixAt(i,dummy.matrix);}trees.castShadow=true;scene.add(trees,trunks);
 for(let i=0;i<20;i++){const angle=i/20*Math.PI*2;const m=new THREE.Mesh(new THREE.ConeGeometry(45,50+random()*70,7),new THREE.MeshStandardMaterial({color:'#90aaa0',flatShading:true}));m.position.set(Math.sin(angle)*250,22,Math.cos(angle)*250);scene.add(m);}
 const car=new THREE.Group();scene.add(car);const paint=new THREE.MeshPhysicalMaterial({color:'#e7c86b',metalness:.7,roughness:.24,clearcoat:1});const rubber=new THREE.MeshStandardMaterial({color:'#14201d',roughness:.8});
 box(car,1.9,.45,3.9,0,.63,0,paint);box(car,1.7,.2,1.1,0,.94,1.2,paint);box(car,1.54,.6,1.8,0,1.1,-.25,glass);box(car,1.6,.12,1.3,0,1.46,-.3,paint);box(car,1.97,.15,3.8,0,.38,0,rubber);for(const x of [-.8,.8])box(car,.12,.6,1.8,x,1.12,-.25,paint);
 const wheels=[];for(const x of [-.97,.97])for(const z of [-1.2,1.2]){const wheel=new THREE.Group();wheel.position.set(x,.4,z);const tire=new THREE.Mesh(new THREE.CylinderGeometry(.37,.37,.25,24),rubber);tire.rotation.z=Math.PI/2;wheel.add(tire);const hub=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.27,16),trim);hub.rotation.z=Math.PI/2;wheel.add(hub);car.add(wheel);wheels.push(wheel);}
 box(car,1.4,.09,.07,0,.79,-1.98,accentMat('#f26552'));for(const x of [-.64,.64])box(car,.36,.12,.07,x,.86,1.98,accentMat('#f7f4d7'));
 const marker=new THREE.Mesh(new THREE.RingGeometry(1.6,1.7,48),new THREE.MeshBasicMaterial({color:'#e8f4aa',transparent:true,opacity:.65}));marker.rotation.x=-Math.PI/2;marker.position.y=.12;scene.add(marker);
 const state={x:0,z:40,yaw:Math.PI/2,speed:0};let path=[],destination=null,parked=true,mode='parked',view=0,paused=false,frame,last=0,send=0,lastArrival=0;const keys=new Set();
 const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();let down;
 function click(e){if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>8)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(interactive,false)[0];if(hit)onSelect(hit.object.userData.destination);}
 renderer.domElement.addEventListener('pointerdown',e=>down={x:e.clientX,y:e.clientY});renderer.domElement.addEventListener('pointerup',click);
 function input(key,value){if(value){if(parked||paused)return;keys.add(key);path=[];destination=null;mode='manual';}else keys.delete(key);}
 function keydown(e){if(e.target.closest('button,a,input,textarea,select,#reader'))return;const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' '].includes(k)){e.preventDefault();input(k,true);}if(k==='c')view=1-view;}
 function keyup(e){keys.delete(e.key.toLowerCase());}
 const blur=()=>{keys.clear();paused=true;};window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',blur);
 function resize(){camera.aspect=container.clientWidth/container.clientHeight;camera.updateProjectionMatrix();renderer.setSize(container.clientWidth,container.clientHeight);}window.addEventListener('resize',resize);
 camera.position.set(57,74,106);const look=new THREE.Vector3(0,0,0);let panelOpen=true;
 function emit(){onState({x:state.x,z:state.z,mode:paused?'paused':mode,destination,near:destinations.findIndex(d=>Math.hypot(d.x-state.x,d.z-state.z)<4.5)});}
 function animate(now){frame=requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.04)||.016;last=now;
  if(!paused&&!parked){if(path.length){if(advanceRoute(state,path,dt)){parked=true;mode='parked';lastArrival=destination;onArrive(destination);}}else{const forward=keys.has('w')||keys.has('arrowup'),back=keys.has('s')||keys.has('arrowdown'),brake=keys.has(' ');state.speed+=((forward?13:0)-(back?10:0)-state.speed*2.1)*dt;if(brake)state.speed*=Math.exp(-9*dt);state.speed=Math.max(-5,Math.min(12,state.speed));const steer=Number(keys.has('a')||keys.has('arrowleft'))-Number(keys.has('d')||keys.has('arrowright'));state.yaw+=steer*dt*1.6*Math.min(1,Math.abs(state.speed)/2)*Math.sign(state.speed||1);const nx=state.x+Math.sin(state.yaw)*state.speed*dt,nz=state.z+Math.cos(state.yaw)*state.speed*dt;const radius=Math.hypot(nx,nz);if(radius>21&&radius<44&&!colliders.some(c=>Math.hypot(nx-c.x,nz-c.z)<c.radius)){state.x=nx;state.z=nz;}else state.speed*=-.25;
   const near=destinations.findIndex(d=>Math.hypot(d.x-state.x,d.z-state.z)<3.3);if(near!==lastArrival&&near!==-1&&Math.abs(state.speed)<3){lastArrival=near;parked=true;state.speed=0;mode='parked';onArrive(near);}if(near===-1)lastArrival=-1;
  }}
  car.position.set(state.x,.1,state.z);car.rotation.y=state.yaw;for(const w of wheels)w.rotation.x+=state.speed*dt/.37;marker.position.x=state.x;marker.position.z=state.z;
  for(let i=0;i<halos.length;i++)halos[i].material.opacity=i===destination ? .8 : .4;
  const narrow=container.clientWidth<800;const focus=new THREE.Vector3(state.x,0,state.z);const camTarget=new THREE.Vector3();
  if(view===1){camTarget.set(38,111,115);look.lerp(new THREE.Vector3(0,0,0),1-Math.exp(-dt*3));}
  else{const radial=new THREE.Vector3(state.x,0,state.z).normalize();const tangent=new THREE.Vector3(radial.z,0,-radial.x);camTarget.copy(focus).addScaledVector(radial,narrow?-45:-42).addScaledVector(tangent,14);camTarget.y=narrow?49:43;look.lerp(focus.clone().addScaledVector(tangent,panelOpen&&!narrow?-13:0).addScaledVector(radial,panelOpen&&narrow?8:0),1-Math.exp(-dt*3));}
  camera.position.lerp(camTarget,1-Math.exp(-dt*2.4));camera.lookAt(look);renderer.render(scene,camera);if(now-send>80){send=now;emit();}
 }
 frame=requestAnimationFrame(animate);
 return{goTo(index){if(!destinations[index])throw new Error('Unknown destination');keys.clear();destination=index;path=createRoute(state,destinations[index]);parked=false;paused=false;panelOpen=false;mode='travelling';emit();},explore(){parked=false;paused=false;panelOpen=false;mode='manual';keys.clear();emit();},setPanel(value){panelOpen=value;if(value){parked=true;state.speed=0;keys.clear();}},pause(){paused=!paused;keys.clear();emit();},camera(){view=1-view;},input,dispose(){cancelAnimationFrame(frame);window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);window.removeEventListener('resize',resize);renderer.dispose();env.dispose();pmrem.dispose();ownedTextures.forEach(t=>t.dispose());scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});renderer.domElement.remove();}};
}
