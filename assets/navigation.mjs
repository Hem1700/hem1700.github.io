const controls=[[-28,20],[-9,20],[15,15],[31,0],[24,-20],[2,-27],[-24,-20],[-34,-1]];
export const destinations=[
 {id:'overview',title:'Overview',file:'profile.html',x:-32,z:26,bx:-39,bz:35,rotation:-.55,color:'#f3be64',subtitle:'Security engineer. Seattle.'},
 {id:'findings',title:'Findings',file:'findings.html',x:1,z:24,bx:2,bz:35,rotation:0,color:'#8bbaa2',subtitle:'Linux · PyTorch · curl'},
 {id:'projects',title:'Projects',file:'projects.html',x:36,z:3,bx:47,bz:5,rotation:1.4,color:'#eea46e',subtitle:'FORGE · RAVEN · CRIP'},
 {id:'writing',title:'Writing',file:'writing.html',x:27,z:-24,bx:35,bz:-35,rotation:2.6,color:'#9da9d0',subtitle:'Notes from the source'},
 {id:'about',title:'About',file:'about.html',x:-3,z:-33,bx:-5,bz:-44,rotation:Math.PI,color:'#bca4c5',subtitle:'Experience & education'},
 {id:'contact',title:'Contact',file:'profile.html',x:-32,z:-21,bx:-43,bz:-28,rotation:4.1,color:'#d8ad93',subtitle:'Let’s talk'}
];
export const obstacles=destinations.map(d=>({x:d.bx,z:d.bz,r:8.3}));
const cat=(a,b,c,d,t)=>.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t);
export const roadPoints=[];
for(let i=0;i<controls.length;i++)for(let j=0;j<12;j++){const a=controls[(i+7)%8],b=controls[i],c=controls[(i+1)%8],d=controls[(i+2)%8],t=j/12;roadPoints.push({x:cat(a[0],b[0],c[0],d[0],t),z:cat(a[1],b[1],c[1],d[1],t)});}
export const angleDifference=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function clearSegment(a,b){return obstacles.every(o=>{const dx=b.x-a.x,dz=b.z-a.z,n=dx*dx+dz*dz;const t=n?Math.max(0,Math.min(1,((o.x-a.x)*dx+(o.z-a.z)*dz)/n)):0;return Math.hypot(a.x+t*dx-o.x,a.z+t*dz-o.z)>o.r;});}
export function createRoute(position,destination){
 if(!destination||!Number.isFinite(destination.x)||!Number.isFinite(destination.z))throw new Error('Invalid destination');
 const nodes=[...roadPoints,{x:position.x,z:position.z},{x:destination.x,z:destination.z}],n=nodes.length,start=n-2,end=n-1,edges=nodes.map(()=>[]);const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 function link(a,b){const weight=distance(nodes[a],nodes[b]);edges[a].push([b,weight]);edges[b].push([a,weight]);}
 for(let i=0;i<roadPoints.length;i++)link(i,(i+1)%roadPoints.length);
 for(const index of [start,end]){const candidates=roadPoints.map((p,i)=>({i,d:distance(nodes[index],p)})).filter(c=>clearSegment(nodes[index],nodes[c.i])).sort((a,b)=>a.d-b.d).slice(0,3);candidates.forEach(c=>link(index,c.i));}
 const distances=Array(n).fill(Infinity),prev=Array(n).fill(-1),seen=new Set();distances[start]=0;
 for(let step=0;step<n;step++){let u=-1;for(let i=0;i<n;i++)if(!seen.has(i)&&(u===-1||distances[i]<distances[u]))u=i;if(u<0||!Number.isFinite(distances[u]))break;if(u===end)break;seen.add(u);for(const [v,w] of edges[u])if(distances[u]+w<distances[v]){distances[v]=distances[u]+w;prev[v]=u;}}
 if(!Number.isFinite(distances[end]))throw new Error('No clear route available');const route=[];for(let u=end;u!==start;u=prev[u])route.unshift({...nodes[u]});return route;
}
export function advanceRoute(car,path,dt){
 if(!path.length){car.speed=0;return true;}let target=path[0],distance=Math.hypot(target.x-car.x,target.z-car.z);
 while(distance<.65&&path.length>1){path.shift();target=path[0];distance=Math.hypot(target.x-car.x,target.z-car.z);}
 if(distance<.3&&path.length===1){car.x=target.x;car.z=target.z;car.speed=0;path.length=0;return true;}
 const desired=Math.atan2(target.x-car.x,target.z-car.z),difference=angleDifference(desired,car.yaw);car.yaw+=Math.max(-3*dt,Math.min(3*dt,difference));
 const targetSpeed=Math.min(11,path.length===1?Math.sqrt(distance*9):11)*Math.max(0,Math.cos(difference));car.speed+=(targetSpeed-car.speed)*Math.min(1,dt*4);const move=Math.min(distance,car.speed*dt);car.x+=(target.x-car.x)/distance*move;car.z+=(target.z-car.z)/distance*move;return false;
}
