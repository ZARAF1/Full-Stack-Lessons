let destinations = { x: 'LA', y: 'NYC', z: 'MIA' };
/*
let x = destinations['x']
let y = destinations.y;
let z = destinations.z;
console.log(x, y, z); // Prints LA NYC MIA
*/


let moreDestinations = { x: 'LA', y: 'NYC', z: 'MIA' };
let { x,y,z }=moreDestinations; // name of variables has to be same as  property name
console.log(x,y,z)

let vampire = {
                home:"transylvania"
              }

              let {home}=vampire;
console.log(home)