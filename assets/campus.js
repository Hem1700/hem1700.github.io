import * as THREE from 'three';
import * as CANNON from './vendor/cannon-es.js';
import {RoundedBoxGeometry} from './vendor/geometries/RoundedBoxGeometry.js';
import {destinations,roadPoints,createRoute,angleDifference} from './navigation.mjs';

// World conventions: +Y is up, a heading (yaw) of 0 faces +Z, and a body's local +X is its left side.
const GROUND=.15,FIXED_STEP=1/60;
const CAMERA_OFFSET=new THREE.Vector3(13,17,16);
const TOWARD_CAMERA_YAW=Math.atan2(CAMERA_OFFSET.x,CAMERA_OFFSET.z);
const UP_SCREEN_YAW=Math.atan2(-CAMERA_OFFSET.x,-CAMERA_OFFSET.z);
const SCREEN_RIGHT={x:Math.cos(TOWARD_CAMERA_YAW),z:-Math.sin(TOWARD_CAMERA_YAW)};
const NAME_CENTER={x:-1,z:-3};
const SPAWN={x:NAME_CENTER.x+Math.sin(TOWARD_CAMERA_YAW)*10,z:NAME_CENTER.z+Math.cos(TOWARD_CAMERA_YAW)*10,yaw:UP_SCREEN_YAW};
const PIXEL_FONT={H:['1.1','1.1','111','1.1','1.1'],E:['111','1..','11.','1..','111'],M:['1...1','11.11','1.1.1','1...1','1...1'],P:['11.','1.1','11.','1..','1..'],A:['.1.','1.1','111','1.1','1.1'],R:['11.','1.1','11.','1.1','1.1'],K:['1.1','1.1','11.','1.1','1.1'],'.':['.','.','.','.','1']};
const DRIVE_KEYS=['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' ','shift'];

export function createCampus(container,{onState,onArrive,onSelect}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#deddd3');scene.fog=new THREE.Fog('#deddd3',190,400);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(container.clientWidth,container.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;container.append(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(37,container.clientWidth/container.clientHeight,.1,600);
 const sun=new THREE.DirectionalLight('#fff0d2',4);sun.position.set(-65,90,35);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-82,right:82,top:82,bottom:-82,far:250});sun.shadow.bias=-.0003;sun.shadow.normalBias=.08;scene.add(sun,new THREE.HemisphereLight('#eef4ff','#b29972',2.4));
 const environment=new THREE.Scene();environment.background=new THREE.Color('#cad9de');const ceiling=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshBasicMaterial({color:'#fff9e9',side:THREE.DoubleSide}));ceiling.position.y=70;ceiling.rotation.x=Math.PI/2;environment.add(ceiling);const fill=new THREE.Mesh(new THREE.PlaneGeometry(70,120),new THREE.MeshBasicMaterial({color:'#ffffff',side:THREE.DoubleSide}));fill.position.set(-40,20,-40);fill.rotation.y=.7;environment.add(fill);const pmrem=new THREE.PMREMGenerator(renderer),env=pmrem.fromScene(environment,.03);scene.environment=env.texture;
 const material=(color,roughness=.8,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
 const cream=material('#d6c4a6'),paper=material('#f0e7d7'),dark=material('#303d3c'),black=material('#1b272a'),orange=material('#dc713b'),moss=material('#7d9277'),metal=material('#657774',.4,.7);
 const textures=[],interactive=[];
 function box(parent,w,h,d,x,y,z,mat,r=.15){const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function cylinder(parent,r,h,x,y,z,mat,segments=32){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function sign(parent,title,subtitle,x,y,z,width=9,height=2.4,color='#df9c5c',rotation=Math.PI){const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#263b39';ctx.fillRect(0,0,1024,256);ctx.fillStyle=color;ctx.fillRect(28,35,8,182);ctx.font='bold 76px Arial';ctx.fillText(title,66,115,905);ctx.fillStyle='#d6e2d1';ctx.font='28px Arial';ctx.fillText(subtitle,66,189,900);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);const m=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));m.position.set(x,y,z);m.rotation.y=rotation;parent.add(m);return m;}

 // ---------------------------------------------------------------- physics world
 const world=new CANNON.World({gravity:new CANNON.Vec3(0,-24,0)});world.broadphase=new CANNON.SAPBroadphase(world);world.allowSleep=true;world.defaultContactMaterial.friction=.35;world.defaultContactMaterial.restitution=.12;
 const half=(x,y,z)=>new CANNON.Vec3(x,y,z);
 function solid(shape,x,y,z,yaw=0,pitch=0){const body=new CANNON.Body({mass:0});body.addShape(shape);body.position.set(x,y,z);body.quaternion.setFromEuler(pitch,yaw,0,'YXZ');world.addBody(body);return body;}
 // A box, not a CANNON.Plane: cannon-es computes a rotated plane's bounds wrongly, which makes wheel rays miss half the world.
 solid(new CANNON.Box(half(66,.5,58)),0,GROUND-.5,-5);
 solid(new CANNON.Box(half(.5,4,58)),-61.7,3,-5);solid(new CANNON.Box(half(.5,4,58)),61.7,3,-5);solid(new CANNON.Box(half(64,4,.5)),0,3,45.8);solid(new CANNON.Box(half(64,4,.5)),0,3,-56.8);

 // ---------------------------------------------------------------- ground, roads and street furniture
 box(scene,129,4,114,0,-2.2,-5,cream,2);box(scene,128,.4,113,0,-.06,-5,paper,1.3);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(1800,1800),material('#dbd7ca'));floor.rotation.x=-Math.PI/2;floor.position.y=-4.3;floor.receiveShadow=true;scene.add(floor);
 function ribbon(points,width,color,y){const vertices=[],indices=[];for(let i=0;i<points.length;i++){const p=points[i],before=points[(i+points.length-1)%points.length],after=points[(i+1)%points.length];const dx=after.x-before.x,dz=after.z-before.z,l=Math.hypot(dx,dz);for(const s of [-1,1])vertices.push(p.x-dz/l*width/2*s,y,p.z+dx/l*width/2*s);const n=(i+1)%points.length;indices.push(i*2,i*2+1,n*2,i*2+1,n*2+1,n*2);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();const mesh=new THREE.Mesh(g,material(color));mesh.receiveShadow=true;scene.add(mesh);}
 ribbon(roadPoints,9.3,'#b5ad98',.155);ribbon(roadPoints,8,'#646b65',.165);
 for(let i=0;i<roadPoints.length;i+=2){const p=roadPoints[i],q=roadPoints[(i+1)%roadPoints.length];const dash=box(scene,.14,.02,.8,p.x,.175,p.z,paper,.005);dash.rotation.y=Math.atan2(q.x-p.x,q.z-p.z);}
 destinations.forEach(d=>{const apron=box(scene,8,.06,7,d.x,.17,d.z,cream,.02);apron.rotation.y=d.rotation;for(const side of [-1,1]){const line=box(scene,.09,.02,4.8,d.x+Math.cos(d.rotation)*side*2.8,.205,d.z-Math.sin(d.rotation)*side*2.8,paper,.01);line.rotation.y=d.rotation;}});
 for(let i=5;i<roadPoints.length;i+=12){const p=roadPoints[i],q=roadPoints[(i+1)%roadPoints.length],a=Math.atan2(q.x-p.x,q.z-p.z);const x=p.x-Math.cos(a)*6,z=p.z+Math.sin(a)*6;cylinder(scene,.11,5,x,2.6,z,dark,10);box(scene,1.7,.18,.7,x,5.2,z,paper);solid(new CANNON.Cylinder(.2,.2,5,8),x,2.6,z);}
 for(let i=0;i<15;i++){box(scene,4,.7,.6,-58+i*8,.5,45,dark,.1);box(scene,4,.7,.6,-58+i*8,.5,-56,dark,.1);}
 for(let i=0;i<12;i++)for(const x of [-61,61]){const b=box(scene,4,.7,.6,x,.5,-52+i*8,dark,.1);b.rotation.y=Math.PI/2;}
 function planter(parent,x,z,r=1.2){cylinder(parent,r,.75,x,.6,z,cream,20);const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(r*.9,1),moss);crown.position.set(x,1.5,z);crown.castShadow=true;parent.add(crown);}

 // ---------------------------------------------------------------- portfolio exhibits
 const tags=[];
 destinations.forEach((d,i)=>{
 const exhibit=new THREE.Group();exhibit.position.set(d.bx,0,d.bz);exhibit.rotation.y=d.rotation;scene.add(exhibit);box(exhibit,20,.55,14,0,.45,0,cream,.6);const tint=material(d.color);let labelHeight=9;
 solid(new CANNON.Box(half(10,4,7)),d.bx,4,d.bz,d.rotation);
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

 // ---------------------------------------------------------------- loose objects (all real rigid bodies)
 const loose=[];
 function addLoose(body,mesh){body.sleepSpeedLimit=.25;body.sleepTimeLimit=.5;world.addBody(body);scene.add(mesh);loose.push({body,mesh,homePosition:body.position.clone(),homeQuaternion:body.quaternion.clone()});mesh.position.copy(body.position);mesh.quaternion.copy(body.quaternion);body.sleep();}
 const shadowed=mesh=>{mesh.castShadow=true;mesh.receiveShadow=true;return mesh;};

 // Your name in giant pixel letters, standing where the drive starts. Drive into it.
 const pixel=new RoundedBoxGeometry(.6,.6,.8,1,.06),PIXEL=.6,word='HEM PAREKH.',letters=[];let cursor=0;
 for(const ch of word){if(ch===' '){cursor+=3;continue;}const width=PIXEL_FONT[ch][0].length;letters.push({ch,middle:cursor+width/2});cursor+=width+1;}
 cursor-=1;
 for(const {ch,middle} of letters){const rows=PIXEL_FONT[ch],w=rows[0].length,h=rows.length,group=new THREE.Group(),body=new CANNON.Body({mass:ch==='.'?3:9});
  for(let r=0;r<h;r++){let c=0;while(c<w){if(rows[r][c]!=='1'){c++;continue;}let e=c;while(e+1<w&&rows[r][e+1]==='1')e++;const y=((h-1)/2-r)*PIXEL;
   body.addShape(new CANNON.Box(half((e-c+1)*PIXEL/2,PIXEL/2,.4)),new CANNON.Vec3(((c+e)/2-(w-1)/2)*PIXEL,y,0));
   for(let k=c;k<=e;k++){const m=shadowed(new THREE.Mesh(pixel,ch==='.'?dark:orange));m.position.set((k-(w-1)/2)*PIXEL,y,0);group.add(m);}c=e+1;}}
  const along=(middle-cursor/2)*PIXEL;body.position.set(NAME_CENTER.x+SCREEN_RIGHT.x*along,GROUND+h*PIXEL/2+.02,NAME_CENTER.z+SCREEN_RIGHT.z*along);body.quaternion.setFromEuler(0,TOWARD_CAMERA_YAW,0);addLoose(body,group);}
 const lawn=new THREE.Mesh(new THREE.CylinderGeometry(15,15,.03,64),moss);lawn.position.set(NAME_CENTER.x,.15,NAME_CENTER.z);lawn.receiveShadow=true;scene.add(lawn);
 const lawnEdge=new THREE.Mesh(new THREE.CylinderGeometry(15.7,15.7,.02,64),cream);lawnEdge.position.set(NAME_CENTER.x,.145,NAME_CENTER.z);lawnEdge.receiveShadow=true;scene.add(lawnEdge);

 // A brick wall made for smashing.
 const brick=new RoundedBoxGeometry(1.3,.62,.62,1,.05),brickColors=[material('#c9855a'),material('#b9704a'),material('#d49a70')],WALL={x:30,z:25};
 for(let row=0;row<6;row++){const count=7-(row%2);for(let i=0;i<count;i++){const along=(i-(count-1)/2)*1.32,body=new CANNON.Body({mass:2.2,shape:new CANNON.Box(half(.65,.31,.31))});body.position.set(WALL.x+SCREEN_RIGHT.x*along,GROUND+.31+row*.62+.002,WALL.z+SCREEN_RIGHT.z*along);body.quaternion.setFromEuler(0,TOWARD_CAMERA_YAW,0);addLoose(body,shadowed(new THREE.Mesh(brick,brickColors[(row+i)%3])));}}

 // Cones, crates and barrels to knock around.
 const coneGeometry=new THREE.ConeGeometry(.48,1.25,16),bandGeometry=new THREE.ConeGeometry(.3,.34,16),barrelGeometry=new THREE.CylinderGeometry(.7,.7,1.7,20),ringGeometry=new THREE.CylinderGeometry(.73,.73,.12,20);
 function addProp(type,x,z,lift=0,yaw=0){const group=new THREE.Group();let body,height;
  if(type==='cone'){height=1.4;body=new CANNON.Body({mass:1.2,shape:new CANNON.Cylinder(.22,.55,height,10)});box(group,1.1,.14,1.1,0,-.63,0,black,.08);const cone=shadowed(new THREE.Mesh(coneGeometry,orange));cone.position.y=.07;group.add(cone);const band=new THREE.Mesh(bandGeometry,paper);band.position.y=.18;group.add(band);}
  else if(type==='crate'){height=1.65;body=new CANNON.Body({mass:3,shape:new CANNON.Box(half(.825,.825,.825))});box(group,1.65,1.65,1.65,0,0,0,cream,.09);for(const y of [-.6,.6])box(group,1.7,.13,1.72,0,y,0,dark,.025);for(const bx of [-.7,.7])box(group,.12,1.65,1.74,bx,0,0,dark,.025);}
  else{height=1.7;body=new CANNON.Body({mass:4,shape:new CANNON.Cylinder(.72,.72,height,12)});group.add(shadowed(new THREE.Mesh(barrelGeometry,orange)));for(const y of [-.54,.54]){const ring=new THREE.Mesh(ringGeometry,metal);ring.position.y=y;group.add(ring);}}
  body.position.set(x,GROUND+height/2+lift+.01,z);body.quaternion.setFromEuler(0,yaw,0);addLoose(body,group);}
 for(let i=0;i<12;i++)addProp('cone',-19+i*3.3,32+(i%2)*2.4);
 for(const [row,count] of [[0,3],[1,2],[2,1]])for(let i=0;i<count;i++)addProp('crate',42+(i-(count-1)/2)*1.72,-9,row*1.66);
 for(let i=0;i<7;i++)addProp('barrel',-48+(i%3)*2.3,3+Math.floor(i/3)*2.1);
 for(let i=0;i<8;i++)addProp(i%2?'crate':'cone',-18+i*3.2,-42+(i%2)*3);
 for(let i=0;i<6;i++)addProp('cone',NAME_CENTER.x+SCREEN_RIGHT.x*(i-2.5)*4+Math.sin(TOWARD_CAMERA_YAW)*5.2,NAME_CENTER.z+SCREEN_RIGHT.z*(i-2.5)*4+Math.cos(TOWARD_CAMERA_YAW)*5.2);

 // Jump ramps.
 const ramps=[{x:-22,z:6,w:6,l:8,h:1.9},{x:20,z:-4,w:7,l:9,h:2.3}];
 for(const ramp of ramps){const g=new THREE.BufferGeometry();const x=ramp.w/2,z=ramp.l/2,h=ramp.h,b=GROUND+.01;g.setAttribute('position',new THREE.Float32BufferAttribute([-x,b,-z,x,b,-z,-x,h,z,x,h,z,-x,b,z,x,b,z],3));g.setIndex([0,2,1,1,2,3,0,4,2,1,3,5,2,4,3,3,4,5]);g.computeVertexNormals();const m=new THREE.Mesh(g,orange);m.position.set(ramp.x,0,ramp.z);m.castShadow=true;m.receiveShadow=true;scene.add(m);for(const side of [-1,1]){const rail=box(scene,.13,.08,ramp.l,ramp.x+side*(ramp.w/2-.4),ramp.h/2+.22,ramp.z,paper,.02);rail.rotation.x=-Math.atan2(ramp.h,ramp.l);}
  const slope=Math.atan2(ramp.h-GROUND,ramp.l),length=Math.hypot(ramp.l,ramp.h-GROUND);solid(new CANNON.Box(half(ramp.w/2,.2,length/2)),ramp.x,(GROUND+ramp.h)/2-.2*Math.cos(slope),ramp.z+.2*Math.sin(slope),0,-slope);solid(new CANNON.Box(half(ramp.w/2,ramp.h/2,.15)),ramp.x,ramp.h/2,ramp.z+ramp.l/2-.15);}

 // Trees, kept clear of roads, exhibits, the name, the wall and the ramps.
 const reserved=[{x:NAME_CENTER.x,z:NAME_CENTER.z,r:18},{x:WALL.x,z:WALL.z,r:9},{x:42,z:-9,r:6},...ramps.map(r=>({x:r.x,z:r.z,r:9}))];
 let seed=71;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<36;i++){const x=-59+random()*117,z=-54+random()*94;if(roadPoints.some(p=>Math.hypot(p.x-x,p.z-z)<7)||destinations.some(d=>Math.hypot(d.bx-x,d.bz-z)<12)||reserved.some(r=>Math.hypot(r.x-x,r.z-z)<r.r))continue;cylinder(scene,.25,3,x,1.6,z,cream,8);const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(2.4,1),moss);crown.position.set(x,4,z);crown.scale.y=1.4;crown.castShadow=true;scene.add(crown);solid(new CANNON.Cylinder(.45,.45,6,8),x,3,z);}

 // ---------------------------------------------------------------- the car: a chunky 4x4 on raycast suspension
 const chassis=new CANNON.Body({mass:150,allowSleep:false});chassis.addShape(new CANNON.Box(half(1.05,.45,2.15)),new CANNON.Vec3(0,.3,0));chassis.angularDamping=.35;chassis.linearDamping=.04;
 const vehicle=new CANNON.RaycastVehicle({chassisBody:chassis,indexRightAxis:0,indexUpAxis:1,indexForwardAxis:2});
 const wheelOptions={radius:.62,directionLocal:new CANNON.Vec3(0,-1,0),suspensionStiffness:30,suspensionRestLength:.5,frictionSlip:2.4,dampingRelaxation:2.1,dampingCompression:3.4,maxSuspensionForce:1e5,rollInfluence:.04,axleLocal:new CANNON.Vec3(-1,0,0),maxSuspensionTravel:.42};
 for(const [x,z] of [[1.18,1.45],[-1.18,1.45],[1.18,-1.45],[-1.18,-1.45]])vehicle.addWheel({...wheelOptions,chassisConnectionPointLocal:new CANNON.Vec3(x,0,z)});
 vehicle.addToWorld(world);
 const glow=(color,intensity)=>new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:intensity,roughness:.4});
 const paint=new THREE.MeshPhysicalMaterial({color:'#dc6a32',roughness:.38,metalness:.1,clearcoat:.7,clearcoatRoughness:.3}),tinted=new THREE.MeshPhysicalMaterial({color:'#28403f',roughness:.1,metalness:.3,clearcoat:1}),headlight=glow('#fff2c4',1.3),taillight=glow('#e2402c',.5);
 const car=new THREE.Group();scene.add(car);
 box(car,2.1,.8,4.3,0,.3,0,paint,.24);box(car,1.92,.22,1.5,0,.78,1.35,paint,.1);
 box(car,1.9,.8,2,0,1.1,-.45,paint,.2);box(car,1.96,.5,1.5,0,1.14,-.45,tinted,.1);box(car,1.62,.5,.1,0,1.12,.56,tinted,.04).rotation.x=-.25;box(car,1.62,.46,.1,0,1.14,-1.46,tinted,.04);
 box(car,2,.12,2.1,0,1.54,-.45,dark,.05);box(car,1.7,.18,.32,0,1.69,.3,black,.06);for(const x of [-.6,-.2,.2,.6])box(car,.3,.12,.06,x,1.69,.47,headlight,.02);
 box(car,2.34,.34,.42,0,.02,2.24,black,.12);box(car,1.2,.34,.06,0,.42,2.16,dark,.03);for(const x of [-.72,.72])box(car,.36,.2,.06,x,.46,2.16,headlight,.03);
 box(car,2.34,.34,.42,0,.02,-2.24,black,.12);for(const x of [-.76,.76])box(car,.3,.18,.06,x,.46,-2.16,taillight,.03);const spare=cylinder(car,.5,.3,0,.62,-2.36,black,20);spare.rotation.x=Math.PI/2;cylinder(car,.26,.32,0,.62,-2.37,paper,14).rotation.x=Math.PI/2;
 for(const x of [-1.2,1.2])for(const z of [-1.45,1.45])box(car,.62,.16,1.55,x,.66,z,black,.06);
 for(const x of [-1.06,1.06])box(car,.04,.12,2.3,x,.34,.1,paper,.02);
 const tireGeometry=new THREE.CylinderGeometry(.62,.62,.52,28).rotateZ(Math.PI/2),rimGeometry=new THREE.CylinderGeometry(.33,.33,.54,14).rotateZ(Math.PI/2),treadGeometry=new RoundedBoxGeometry(.56,.12,.24,1,.04),spokeGeometry=new THREE.BoxGeometry(.58,.1,.52);
 const wheelMeshes=vehicle.wheelInfos.map(()=>{const wheel=new THREE.Group();wheel.add(shadowed(new THREE.Mesh(tireGeometry,black)),new THREE.Mesh(rimGeometry,paper));for(let k=0;k<12;k++){const a=k/12*Math.PI*2,tread=new THREE.Mesh(treadGeometry,black);tread.position.set(0,Math.cos(a)*.61,Math.sin(a)*.61);tread.rotation.x=-a;wheel.add(tread);}for(const turn of [0,Math.PI/2]){const spoke=new THREE.Mesh(spokeGeometry,metal);spoke.rotation.x=turn;wheel.add(spoke);}scene.add(wheel);return wheel;});

 // Dust: a small pool of puffs kicked up by wheelspin, skids and hard landings.
 const dustGeometry=new THREE.IcosahedronGeometry(.32,0),dustMaterial=new THREE.MeshStandardMaterial({color:'#e9dfcc',roughness:1,transparent:true,opacity:.85}),dust=[];let dustCursor=0;
 for(let i=0;i<48;i++){const mesh=new THREE.Mesh(dustGeometry,dustMaterial);mesh.visible=false;scene.add(mesh);dust.push({mesh,life:0,vx:0,vy:0,vz:0});}
 function puff(x,y,z,strength=1){const p=dust[dustCursor++%dust.length];p.mesh.position.set(x+(Math.random()-.5)*.4,y,z+(Math.random()-.5)*.4);p.vx=(Math.random()-.5)*1.4*strength;p.vy=1+Math.random()*1.2*strength;p.vz=(Math.random()-.5)*1.4*strength;p.life=1;p.mesh.visible=true;}
 function stepDust(dt){for(const p of dust){if(p.life<=0)continue;p.life-=dt*1.6;p.mesh.position.x+=p.vx*dt;p.mesh.position.y+=p.vy*dt;p.mesh.position.z+=p.vz*dt;p.vy*=Math.exp(-dt*2);const k=p.life>0?Math.sin(Math.PI*Math.min(1,p.life)):0;p.mesh.scale.setScalar(.3+k*1.4*(1.2-p.life*.6));p.mesh.rotation.y+=dt;if(p.life<=0)p.mesh.visible=false;}}
 let wasGrounded=4,dustTimer=0;

 // ---------------------------------------------------------------- navigation aids
 const targetRing=new THREE.Mesh(new THREE.RingGeometry(3.2,3.35,64),new THREE.MeshBasicMaterial({color:'#d37642',transparent:true,opacity:.8}));targetRing.rotation.x=-Math.PI/2;targetRing.position.y=.3;targetRing.visible=false;scene.add(targetRing);
 const routeLine=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineDashedMaterial({color:'#edb465',dashSize:1.1,gapSize:.75,transparent:true,opacity:.95,depthTest:false}));routeLine.renderOrder=4;scene.add(routeLine);

 // ---------------------------------------------------------------- state and input
 let path=[],destination=null,parked=false,mode='manual',view=1,paused=false,panelOpen=false,frame,last=0,send=0;
 let grounded=4,steer=0,engine=0,braking=0,impactShake=0,flipTime=0,stuckTime=0,travelTime=0;const keys=new Set();
 const forward=new CANNON.Vec3(),up=new CANNON.Vec3(),LOCAL_FORWARD=new CANNON.Vec3(0,0,1),LOCAL_UP=new CANNON.Vec3(0,1,0);
 function placeCar(x,z,yaw,y=GROUND+1.25){chassis.position.set(x,y,z);chassis.quaternion.setFromEuler(0,yaw,0);chassis.velocity.setZero();chassis.angularVelocity.setZero();steer=0;flipTime=0;stuckTime=0;}
 placeCar(SPAWN.x,SPAWN.z,SPAWN.yaw);
 chassis.addEventListener('collide',event=>{const hit=Math.abs(event.contact.getImpactVelocityAlongNormal());if(hit>3)impactShake=Math.min(1,Math.max(impactShake,hit*.07));});
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down;
 renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>6)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(interactive)[0];if(hit)onSelect(hit.object.userData.destination);});
 // Any drive key takes the wheel: it resumes a paused drive and cancels automatic navigation (unless the reader is open).
 function input(k,value){if(value){if(panelOpen)return;paused=false;parked=false;keys.add(k);path=[];destination=null;routeLine.visible=false;targetRing.visible=false;mode='manual';view=0;}else keys.delete(k);}
 function keydown(e){const target=e.target instanceof Element?e.target:document.body;if(target.closest('input,textarea,select,#reader'))return;const k=e.key.toLowerCase();if(target.closest('button,a')&&(k===' '||k==='enter'))return;if(DRIVE_KEYS.includes(k)){if(k!=='shift')e.preventDefault();input(k,true);}if(k==='c'&&!e.repeat){view=1-view;emit();}}
 function keyup(e){keys.delete(e.key.toLowerCase());}const blur=()=>{keys.clear();if(mode!=='parked')paused=true;};window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',blur);
 function resize(){camera.aspect=container.clientWidth/container.clientHeight;camera.updateProjectionMatrix();renderer.setSize(container.clientWidth,container.clientHeight);}window.addEventListener('resize',resize);
 const look=new THREE.Vector3(0,0,-5);camera.position.set(94,108,118);
 const near=()=>destinations.findIndex(d=>Math.hypot(d.x-chassis.position.x,d.z-chassis.position.z)<5);
 function emit(){chassis.quaternion.vmult(LOCAL_FORWARD,forward);onState({x:chassis.position.x,z:chassis.position.z,yaw:Math.atan2(forward.x,forward.z),speed:chassis.velocity.dot(forward),airborne:grounded===0,mode:paused?'paused':mode,destination,near:near(),view});}
 function arrive(){const index=destination;path=[];parked=true;mode='parked';routeLine.visible=false;targetRing.visible=false;travelTime=0;onArrive(index);}

 // ---------------------------------------------------------------- driving
 function drive(dt){
  chassis.quaternion.vmult(LOCAL_FORWARD,forward);chassis.quaternion.vmult(LOCAL_UP,up);
  const speed=chassis.velocity.dot(forward),position=chassis.position;let steerTarget=0,rearBrake=null;engine=0;braking=0;
  if(parked||panelOpen){braking=30;}
  else if(path.length){
   travelTime+=dt;let target=path[0],distance=Math.hypot(target.x-position.x,target.z-position.z);
   // Pass a waypoint once it is close or already behind the car; chasing it would make the car orbit it.
   const behind=p=>(p.x-position.x)*forward.x+(p.z-position.z)*forward.z<0;
   while(path.length>1&&(distance<5.5||(distance<10&&behind(target)))){path.shift();target=path[0];distance=Math.hypot(target.x-position.x,target.z-position.z);}
   const difference=angleDifference(Math.atan2(target.x-position.x,target.z-position.z),Math.atan2(forward.x,forward.z));
   steerTarget=THREE.MathUtils.clamp(difference*1.5,-.55,.55);
   const final=path.length===1,cruise=(final?Math.min(13,1.5+distance*1.2):13)*(Math.abs(difference)>1?.45:1);
   if(speed<cruise)engine=-620;else if(speed>cruise+2)braking=6;
   if(Math.abs(speed)<.8){stuckTime+=dt;if(stuckTime>2.4){const next=path[0],after=path[1]||next;placeCar(next.x,next.z,after===next?Math.atan2(forward.x,forward.z):Math.atan2(after.x-next.x,after.z-next.z));}}else stuckTime=0;
   // Arrive when close; if the drive is taking far too long (blocked by debris, circling), tow the car the rest of the way.
   const place=destinations[destination];
   if(final&&(distance<2.8||(distance<5.5&&Math.abs(difference)>1.1))){engine=0;braking=30;arrive();}
   else if(travelTime>(final&&distance<7?14:30)){placeCar(place.x,place.z,Math.atan2(place.bx-place.x,place.bz-place.z));engine=0;braking=30;arrive();}
  }else{
   const ahead=keys.has('w')||keys.has('arrowup'),back=keys.has('s')||keys.has('arrowdown'),left=keys.has('a')||keys.has('arrowleft'),right=keys.has('d')||keys.has('arrowright'),boost=keys.has('shift');
   if(ahead&&speed<(boost?30:21))engine=boost?-980:-700;
   if(back){if(speed>1.5)braking=8;else if(speed>-9)engine=480;}
   if(!ahead&&!back)braking=.8;
   if(keys.has(' '))rearBrake=16;
   steerTarget=(Number(left)-Number(right))*.52*(1-Math.min(Math.abs(speed)/48,.5));
  }
  steer+=(steerTarget-steer)*Math.min(1,dt*9);
  for(let i=0;i<4;i++){vehicle.applyEngineForce(engine,i);vehicle.setBrake(rearBrake!==null&&i>1?rearBrake:braking,i);}
  vehicle.setSteeringValue(steer,0);vehicle.setSteeringValue(steer,1);
  // Flip recovery and out-of-bounds rescue.
  if(up.y<.35){flipTime+=dt;if(flipTime>1.3)placeCar(position.x,position.z,Math.atan2(forward.x,forward.z),Math.max(GROUND+1.25,position.y+1));}else flipTime=0;
  if(position.y<-6)placeCar(SPAWN.x,SPAWN.z,SPAWN.yaw);
  headlight.emissiveIntensity=1.3;taillight.emissiveIntensity=braking>5||rearBrake||engine>0?2.4:.5;
 }

 function animate(now){frame=requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.05)||FIXED_STEP;last=now;
  if(!paused){drive(dt);world.step(FIXED_STEP,dt,4);}
  grounded=vehicle.wheelInfos.filter(w=>w.isInContact).length;
  // Kick up dust from the rear wheels when spinning up, skidding or landing.
  dustTimer-=dt;const planar=Math.hypot(chassis.velocity.x,chassis.velocity.z),skidding=vehicle.wheelInfos.some(w=>w.isInContact&&w.skidInfo<.7);
  if(!paused&&grounded>0&&dustTimer<=0&&((engine!==0&&planar<7)||(skidding&&planar>3))){dustTimer=.06;for(const i of [2,3]){const w=vehicle.wheelInfos[i];if(w.isInContact)puff(w.raycastResult.hitPointWorld.x,GROUND+.2,w.raycastResult.hitPointWorld.z,.8);}}
  if(!paused&&wasGrounded===0&&grounded>=2)for(let i=0;i<8;i++)puff(chassis.position.x,GROUND+.2,chassis.position.z,1.6);
  wasGrounded=grounded;stepDust(dt);
  car.position.copy(chassis.position);car.quaternion.copy(chassis.quaternion);
  for(let i=0;i<wheelMeshes.length;i++){vehicle.updateWheelTransform(i);const t=vehicle.wheelInfos[i].worldTransform;wheelMeshes[i].position.copy(t.position);wheelMeshes[i].quaternion.copy(t.quaternion);}
  for(const item of loose){if(item.body.sleepState!==CANNON.Body.SLEEPING){item.mesh.position.copy(item.body.position);item.mesh.quaternion.copy(item.body.quaternion);}}
  targetRing.material.opacity=.5+Math.sin(now*.003)*.2;
  const narrow=container.clientWidth<760,carPosition=new THREE.Vector3().copy(chassis.position),camTarget=new THREE.Vector3(),lookTarget=new THREE.Vector3();
  if(view===1){camTarget.set(narrow?100:89,narrow?140:108,narrow?148:115);lookTarget.set(narrow?0:-9,0,-5);}
  else{chassis.quaternion.vmult(LOCAL_FORWARD,forward);const zoom=(1+Math.min(chassis.velocity.length(),30)*.011)*(narrow?1.3:1);camTarget.copy(CAMERA_OFFSET).multiplyScalar(zoom).add(carPosition);camTarget.y-=carPosition.y*.6;lookTarget.set(carPosition.x+forward.x*2,carPosition.y*.4,carPosition.z+forward.z*2);if(panelOpen){if(narrow){lookTarget.x+=Math.sin(TOWARD_CAMERA_YAW)*10;lookTarget.z+=Math.cos(TOWARD_CAMERA_YAW)*10;}else{lookTarget.x+=SCREEN_RIGHT.x*7.5;lookTarget.z+=SCREEN_RIGHT.z*7.5;}}}
  camera.position.lerp(camTarget,1-Math.exp(-dt*(view===1?2.1:4)));look.lerp(lookTarget,1-Math.exp(-dt*(view===1?2.6:6)));
  if(impactShake>.01){camera.position.x+=(Math.random()-.5)*impactShake*.7;camera.position.y+=(Math.random()-.5)*impactShake*.7;impactShake*=Math.exp(-dt*7);}
  camera.lookAt(look);camera.updateMatrixWorld();
  for(const tag of tags){const p=new THREE.Vector3(tag.x,tag.y,tag.z).project(camera);const dist=Math.hypot(tag.x-carPosition.x,tag.z-carPosition.z);tag.el.hidden=p.z>=1||Math.abs(p.x)>1.05||Math.abs(p.y)>1||(view===0&&dist>37);tag.el.classList.toggle('compact',view===0);tag.el.style.left=((p.x+1)/2*container.clientWidth)+'px';tag.el.style.top=((-p.y+1)/2*container.clientHeight)+'px';}
  renderer.render(scene,camera);if(now-send>80){emit();send=now;}
 }
 frame=requestAnimationFrame(animate);

 return{
  reset(){placeCar(SPAWN.x,SPAWN.z,SPAWN.yaw);path=[];destination=null;parked=false;paused=false;mode='manual';travelTime=0;routeLine.visible=false;targetRing.visible=false;keys.clear();for(const item of loose){item.body.position.copy(item.homePosition);item.body.quaternion.copy(item.homeQuaternion);item.body.velocity.setZero();item.body.angularVelocity.setZero();item.mesh.position.copy(item.homePosition);item.mesh.quaternion.copy(item.homeQuaternion);item.body.sleep();}emit();},
  goTo(index){if(!destinations[index])throw new Error('Unknown destination');const route=createRoute({x:chassis.position.x,z:chassis.position.z},destinations[index]);keys.clear();destination=index;path=route;parked=false;paused=false;view=0;panelOpen=false;mode='travelling';travelTime=0;stuckTime=0;targetRing.position.set(destinations[index].x,.3,destinations[index].z);targetRing.visible=true;routeLine.geometry.dispose();routeLine.geometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(chassis.position.x,.42,chassis.position.z),...route.map(p=>new THREE.Vector3(p.x,.42,p.z))]);routeLine.computeLineDistances();routeLine.visible=true;emit();},
  explore(){path=[];destination=null;routeLine.visible=false;targetRing.visible=false;parked=false;paused=false;panelOpen=false;view=0;mode='manual';keys.clear();emit();},
  setPanel(value){panelOpen=value;if(value){parked=true;keys.clear();}},
  pause(){paused=!paused;keys.clear();emit();},
  camera(){view=1-view;return view;},
  input,
  dispose(){cancelAnimationFrame(frame);window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);window.removeEventListener('resize',resize);textures.forEach(t=>t.dispose());env.dispose();pmrem.dispose();renderer.dispose();scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});renderer.domElement.remove();tags.forEach(t=>t.el.remove());}
 };
}
