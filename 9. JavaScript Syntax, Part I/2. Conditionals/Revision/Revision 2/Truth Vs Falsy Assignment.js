let userName="Ali";
let defaultName;
if(userName){
    defaultName=userName;
}
else{
    defaultName="Stranger"
}
console.log(defaultName)

// another way for shorthand assignment

let name=""
let defName=name||"stranger";
console.log(defName)

// another one
let age=18;
let permission= age>=18||"not allowed"
console.log(permission)