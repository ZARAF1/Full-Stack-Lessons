const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('wash tins', 'wash bins')
console.log(chores)

// push method also returns the length of the array after an element has been pushed into it. so does unshift()

let lengthOfArray = chores.push("have bath");
console.log(lengthOfArray)


let anotherArrayLength = chores.unshift("wash car");
console.log(anotherArrayLength)