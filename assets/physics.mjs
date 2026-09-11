export function strikeProp(car,prop){
 const fx=Math.sin(car.yaw),fz=Math.cos(car.yaw),along=Math.max(-1.45,Math.min(1.45,(prop.x-car.x)*fx+(prop.z-car.z)*fz));
 const dx=prop.x-(car.x+fx*along),dz=prop.z-(car.z+fz*along),distance=Math.hypot(dx,dz),limit=1.05+prop.radius;if(distance>=limit)return false;
 const nx=distance>.001?dx/distance:Math.sin(car.yaw),nz=distance>.001?dz/distance:Math.cos(car.yaw);const impact=Math.max(0,(Math.sin(car.yaw)*nx+Math.cos(car.yaw)*nz)*car.speed);
 prop.x+=nx*(limit-distance)*.75;prop.z+=nz*(limit-distance)*.75;prop.vx+=nx*(impact*1.8+1.2);prop.vz+=nz*(impact*1.8+1.2);prop.spin+=(nx*Math.cos(car.yaw)-nz*Math.sin(car.yaw))*impact*.6+.2;prop.tip=Math.min(1.5,(prop.tip||0)+impact*.14);car.speed*=.82;return impact;
}
export function stepProps(props,dt,obstacles=[]){
 for(const p of props){p.x+=p.vx*dt;p.z+=p.vz*dt;p.rotation+=p.spin*dt;p.vx*=Math.exp(-1.6*dt);p.vz*=Math.exp(-1.6*dt);p.spin*=Math.exp(-1.1*dt);if(Math.abs(p.x)>60){p.x=Math.sign(p.x)*60;p.vx*=-.5;}if(p.z>44||p.z< -55){p.z=Math.max(-55,Math.min(44,p.z));p.vz*=-.5;}}
 for(let i=0;i<props.length;i++)for(let j=i+1;j<props.length;j++){const a=props[i],b=props[j],dx=b.x-a.x,dz=b.z-a.z,l=Math.hypot(dx,dz),r=a.radius+b.radius;if(l<r&&l>.001){const nx=dx/l,nz=dz/l,push=(r-l)/2;a.x-=nx*push;a.z-=nz*push;b.x+=nx*push;b.z+=nz*push;const closing=(a.vx-b.vx)*nx+(a.vz-b.vz)*nz;if(closing>0){a.vx-=nx*closing*.7;a.vz-=nz*closing*.7;b.vx+=nx*closing*.7;b.vz+=nz*closing*.7;}}}
 for(const p of props)for(const obstacle of obstacles)keepPropOutside(p,obstacle);
}

export function keepPropOutside(prop,obstacle){
 const dx=prop.x-obstacle.x,dz=prop.z-obstacle.z,length=Math.hypot(dx,dz),limit=prop.radius+obstacle.r;
 if(length>=limit)return;
 const nx=length>.0001?dx/length:1,nz=length>.0001?dz/length:0;
 prop.x=obstacle.x+nx*limit;prop.z=obstacle.z+nz*limit;
 const inward=prop.vx*nx+prop.vz*nz;
 if(inward<0){prop.vx-=1.5*inward*nx;prop.vz-=1.5*inward*nz;}
}
