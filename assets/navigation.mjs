// The six places are scattered across the open world, each at the tip of a road that runs out from the middle.
export const CENTRE={x:-1,z:-3};
const PLACES=[
 {id:'overview',title:'Overview',file:'profile.html',angle:.52,distance:70,color:'#f3be64',subtitle:'Security engineer. Seattle.'},
 {id:'findings',title:'Findings',file:'findings.html',angle:1.57,distance:118,color:'#8bbaa2',subtitle:'Linux · PyTorch · curl'},
 {id:'projects',title:'Projects',file:'projects.html',angle:2.62,distance:88,color:'#eea46e',subtitle:'FORGE · RAVEN · CRIP'},
 {id:'writing',title:'Writing',file:'writing.html',angle:3.67,distance:145,color:'#9da9d0',subtitle:'Notes from the source'},
 {id:'about',title:'About',file:'about.html',angle:4.71,distance:96,color:'#bca4c5',subtitle:'Experience & education'},
 {id:'contact',title:'Contact',file:'profile.html',angle:5.76,distance:155,color:'#d8ad93',subtitle:'Let\u2019s talk'}
];
// x,z is the parking spot; bx,bz is the exhibit behind it, facing back towards the middle.
export const destinations=PLACES.map(({angle,distance,...place})=>{const sx=Math.sin(angle),sz=Math.cos(angle),x=CENTRE.x+sx*distance,z=CENTRE.z+sz*distance;return {...place,x,z,bx:x+sx*11.5,bz:z+sz*11.5,rotation:angle};});
export const WORLD_RADIUS=Math.max(...PLACES.map(p=>p.distance))+35;
export const obstacles=destinations.map(d=>({x:d.bx,z:d.bz,r:8.3}));
const cat=(a,b,c,d,t)=>.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t);
// Roads: one closed loop that runs out to each parking spot and back through the middle, like petals.
const controls=[];
destinations.forEach((d,i)=>{const next=PLACES[(i+1)%PLACES.length],turn=(PLACES[i].angle+(next.angle>PLACES[i].angle?next.angle:next.angle+Math.PI*2))/2;controls.push([d.x,d.z],[CENTRE.x+Math.sin(turn)*26,CENTRE.z+Math.cos(turn)*26]);});
export const roadPoints=[];
for(let i=0;i<controls.length;i++)for(let j=0;j<10;j++){const n=controls.length,a=controls[(i+n-1)%n],b=controls[i],c=controls[(i+1)%n],d=controls[(i+2)%n],t=j/10;roadPoints.push({x:cat(a[0],b[0],c[0],d[0],t),z:cat(a[1],b[1],c[1],d[1],t)});}
export const angleDifference=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function clearSegment(a,b){return obstacles.every(o=>{const dx=b.x-a.x,dz=b.z-a.z,n=dx*dx+dz*dz;const t=n?Math.max(0,Math.min(1,((o.x-a.x)*dx+(o.z-a.z)*dz)/n)):0;return Math.hypot(a.x+t*dx-o.x,a.z+t*dz-o.z)>o.r;});}
// Roads that pass close to each other (the petals near the middle) are joined, so a route can cut across instead of going all the way round.
const shortcuts=[];
for(let i=0;i<roadPoints.length;i++)for(let j=i+2;j<roadPoints.length;j++){if(Math.abs(i-j)<6||roadPoints.length-Math.abs(i-j)<6)continue;if(Math.hypot(roadPoints[i].x-roadPoints[j].x,roadPoints[i].z-roadPoints[j].z)<34&&clearSegment(roadPoints[i],roadPoints[j]))shortcuts.push([i,j]);}

export function createRoute(position,destination){
 if(!destination||!Number.isFinite(destination.x)||!Number.isFinite(destination.z))throw new Error('Invalid destination');
 const nodes=[...roadPoints,{x:position.x,z:position.z},{x:destination.x,z:destination.z}],n=nodes.length,start=n-2,end=n-1,edges=nodes.map(()=>[]);const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 function link(a,b){const weight=distance(nodes[a],nodes[b]);edges[a].push([b,weight]);edges[b].push([a,weight]);}
 for(let i=0;i<roadPoints.length;i++)link(i,(i+1)%roadPoints.length);
 for(const [i,j] of shortcuts)link(i,j);
 // Free roaming can leave the car anywhere (on a platform, far off the island); if nothing is clearly reachable, join the nearest road points anyway.
 for(const index of [start,end]){const nearest=roadPoints.map((p,i)=>({i,d:distance(nodes[index],p)})).sort((a,b)=>a.d-b.d);const clear=nearest.filter(c=>clearSegment(nodes[index],nodes[c.i]));(clear.length?clear:nearest).slice(0,3).forEach(c=>link(index,c.i));}
 const distances=Array(n).fill(Infinity),prev=Array(n).fill(-1),seen=new Set();distances[start]=0;
 for(let step=0;step<n;step++){let u=-1;for(let i=0;i<n;i++)if(!seen.has(i)&&(u===-1||distances[i]<distances[u]))u=i;if(u<0||!Number.isFinite(distances[u]))break;if(u===end)break;seen.add(u);for(const [v,w] of edges[u])if(distances[u]+w<distances[v]){distances[v]=distances[u]+w;prev[v]=u;}}
 if(!Number.isFinite(distances[end]))throw new Error('No clear route available');const route=[];for(let u=end;u!==start;u=prev[u])route.unshift({...nodes[u]});return route;
}
