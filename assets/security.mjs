// The security layer of the world, shared by the 3D scene and the network map so both agree on where
// everything is. Hosts are made up for the map; the findings are Hem's real upstream work.
import {destinations, CENTRE} from './navigation.mjs';

export const FINDINGS=[
 {host:'linux / ksmbd',detail:'smb_check_perm_dacl() heap OOB read',status:'applied · cc stable'},
 {host:'pytorch',detail:'flatbuffer_loader.cpp unchecked index',status:'pull request open'},
 {host:'curl',detail:'parse_authority() ssrf bypass',status:'disclosed · under review'},
 {host:'linux / ntfs',detail:'ntfs_readdir() unvalidated offset',status:'submitted · fsdevel'}
];

/** Where the nth unpatched finding stands: along the road out to Findings. */
export function breachAt(index){
 const bearing=destinations[1].rotation,radius=52+index*17;
 return {x:CENTRE.x+Math.sin(bearing)*radius,z:CENTRE.z+Math.cos(bearing)*radius,bearing};
}

/** Host details for the network map, one per place. */
export const HOSTS=[
 {name:'overview',address:'10.0.1.10',ports:'443/tcp · 22/tcp'},
 {name:'findings',address:'10.0.1.20',ports:'443/tcp · 4444/tcp'},
 {name:'projects',address:'10.0.1.30',ports:'443/tcp · 8080/tcp'},
 {name:'writing',address:'10.0.1.40',ports:'443/tcp'},
 {name:'about',address:'10.0.1.50',ports:'443/tcp'},
 {name:'contact',address:'10.0.1.60',ports:'443/tcp · 25/tcp'}
];
export const GATEWAY={name:'hem.local',address:'10.0.1.1',ports:'gateway'};
