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
// Roads: a ring around the middle with one spur running out to each place, so the centre reads as a hub
// rather than a tangle of lines crossing each other.
export const RING=34;
export const roadPoints=[],roadLinks=[],roadSegments=[];
function addSegment(points,closed){const base=roadPoints.length;for(const p of points)roadPoints.push(p);
 for(let i=0;i<points.length-1;i++)roadLinks.push([base+i,base+i+1]);
 if(closed)roadLinks.push([base+points.length-1,base]);
 roadSegments.push({points,closed});return base;}
const ring=[];for(let i=0;i<54;i++){const a=i/54*Math.PI*2;ring.push({x:CENTRE.x+Math.sin(a)*RING,z:CENTRE.z+Math.cos(a)*RING});}
const ringBase=addSegment(ring,true);
for(const place of destinations){
 const start={x:CENTRE.x+Math.sin(place.rotation)*RING,z:CENTRE.z+Math.cos(place.rotation)*RING};
 const span=Math.hypot(place.x-start.x,place.z-start.z),steps=Math.max(6,Math.round(span/7)),points=[];
 for(let k=0;k<=steps;k++){const t=k/steps;points.push({x:start.x+(place.x-start.x)*t,z:start.z+(place.z-start.z)*t});}
 const base=addSegment(points,false);
 let nearest=ringBase,best=Infinity;
 for(let i=0;i<ring.length;i++){const d=Math.hypot(roadPoints[ringBase+i].x-points[0].x,roadPoints[ringBase+i].z-points[0].z);if(d<best){best=d;nearest=ringBase+i;}}
 roadLinks.push([nearest,base]);}

export const angleDifference=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function clearSegment(a,b){return obstacles.every(o=>{const dx=b.x-a.x,dz=b.z-a.z,n=dx*dx+dz*dz;const t=n?Math.max(0,Math.min(1,((o.x-a.x)*dx+(o.z-a.z)*dz)/n)):0;return Math.hypot(a.x+t*dx-o.x,a.z+t*dz-o.z)>o.r;});}
export function createRoute(position,destination){
 if(!destination||!Number.isFinite(destination.x)||!Number.isFinite(destination.z))throw new Error('Invalid destination');
 const nodes=[...roadPoints,{x:position.x,z:position.z},{x:destination.x,z:destination.z}],n=nodes.length,start=n-2,end=n-1,edges=nodes.map(()=>[]);const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 function link(a,b){const weight=distance(nodes[a],nodes[b]);edges[a].push([b,weight]);edges[b].push([a,weight]);}
 for(const [i,j] of roadLinks)link(i,j);
 // Free roaming can leave the car anywhere (on a platform, far off the island); if nothing is clearly reachable, join the nearest road points anyway.
 for(const index of [start,end]){const nearest=roadPoints.map((p,i)=>({i,d:distance(nodes[index],p)})).sort((a,b)=>a.d-b.d);const clear=nearest.filter(c=>clearSegment(nodes[index],nodes[c.i]));(clear.length?clear:nearest).slice(0,3).forEach(c=>link(index,c.i));}
 const distances=Array(n).fill(Infinity),prev=Array(n).fill(-1),seen=new Set();distances[start]=0;
 for(let step=0;step<n;step++){let u=-1;for(let i=0;i<n;i++)if(!seen.has(i)&&(u===-1||distances[i]<distances[u]))u=i;if(u<0||!Number.isFinite(distances[u]))break;if(u===end)break;seen.add(u);for(const [v,w] of edges[u])if(distances[u]+w<distances[v]){distances[v]=distances[u]+w;prev[v]=u;}}
 if(!Number.isFinite(distances[end]))throw new Error('No clear route available');const route=[];for(let u=end;u!==start;u=prev[u])route.unshift({...nodes[u]});return route;
}
