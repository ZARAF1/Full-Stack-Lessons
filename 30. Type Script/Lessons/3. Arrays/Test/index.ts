let arr:string[]=["A","B"];
let tuple:[string,string]=["C","D"];
tuple=["c","d"];
console.log(tuple);


let favoriteCoordinates:[number,number,string,number,number,string] = [40, 43.2, 'N', 73, 59.8, 'W'];
favoriteCoordinates=[17,45,'N',142,30,'E'];
favoriteCoordinates[6]=-6.825; // throws an error The whole point of tuples is that they have fixed lengths, so you
// cannot access elements of favoriteCoordinates with indices greater than 5. Even when you want to!



