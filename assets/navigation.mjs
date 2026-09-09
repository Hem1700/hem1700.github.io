export const RADIUS=32;
export const destinations=[
 {id:'overview',title:'Overview',file:'profile.html',angle:0,color:'#e8f4aa',subtitle:'Security & vulnerability research',details:['HEM PAREKH','SEATTLE · AMAZON']},
 {id:'findings',title:'Findings',file:'findings.html',angle:Math.PI/3,color:'#81dcc9',subtitle:'Upstream vulnerability research',details:['LINUX KERNEL','PYTORCH · CURL']},
 {id:'projects',title:'Projects',file:'projects.html',angle:Math.PI*2/3,color:'#f0bc78',subtitle:'Security tooling',details:['FORGE · CRIP','RAVEN · PATCHPROBE']},
 {id:'writing',title:'Writing',file:'writing.html',angle:Math.PI,color:'#aabcf2',subtitle:'Notes from the source',details:['CVE RESEARCH','KERNEL · FIRMWARE']},
 {id:'about',title:'About',file:'about.html',angle:Math.PI*4/3,color:'#d6b1e8',subtitle:'Experience, education & skills',details:['AMAZON · RIT','EXPERIENCE · EDUCATION']},
 {id:'contact',title:'Contact',file:'profile.html',angle:Math.PI*5/3,color:'#edac9e',subtitle:'Start a conversation',details:['LET’S CONNECT','EMAIL · GITHUB · LINKEDIN']}
].map(d=>({...d,x:Math.sin(d.angle)*40,z:Math.cos(d.angle)*40}));
export const angleDifference=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function createRoute(position,destination){
 if(!destination||!Number.isFinite(destination.angle))throw new Error('Invalid destination');
 const from=Math.atan2(position.x,position.z),delta=angleDifference(destination.angle,from);
 const path=[{x:Math.sin(from)*RADIUS,z:Math.cos(from)*RADIUS}];
 const steps=Math.max(1,Math.ceil(Math.abs(delta)/.12));
 for(let i=1;i<=steps;i++){const a=from+delta*i/steps;path.push({x:Math.sin(a)*RADIUS,z:Math.cos(a)*RADIUS});}
 path.push({x:destination.x,z:destination.z});return path;
}
export function advanceRoute(car,path,dt){
 if(!path.length){car.speed=0;return true;}
 let target=path[0],distance=Math.hypot(target.x-car.x,target.z-car.z);
 while(distance<1.05&&path.length>1){path.shift();target=path[0];distance=Math.hypot(target.x-car.x,target.z-car.z);}
 if(distance<.7&&path.length===1){car.x=target.x;car.z=target.z;car.speed=0;path.length=0;return true;}
 const desired=Math.atan2(target.x-car.x,target.z-car.z),difference=angleDifference(desired,car.yaw);
 car.yaw+=Math.max(-2.8*dt,Math.min(2.8*dt,difference));
 const alignment=Math.max(0,Math.cos(difference));
 const targetSpeed=Math.min(12,path.length===1?Math.sqrt(distance*10):12)*alignment;
 car.speed+=(targetSpeed-car.speed)*Math.min(1,dt*5);
 const move=Math.min(distance,car.speed*dt);
 // The path controls travel while the vehicle visibly turns to follow it.
 car.x+=(target.x-car.x)/distance*move;car.z+=(target.z-car.z)/distance*move;
 return false;
}
