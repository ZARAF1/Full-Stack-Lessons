const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
    },
    date: new Date(),
}


/*
seperately
const {welcome,title,subtitle,author,date}=data
let {firstName,lastName}=author;
*/

// one a single line
const {welcome,title,subtitle,author:{firstName,lastName},date}=data;
console.log(welcome)
console.log(title)
console.log(firstName)

function printer ({welcome,title,subtitle,author:{firstName,lastName},date}){
    console.log(welcome+" " + firstName)
}
printer(data)