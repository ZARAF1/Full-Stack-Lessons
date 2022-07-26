/*Function arguments are another place where destructuring is useful. Instead of accepting a complete object as an
argument, a function can use destructuring to capture specific properties as named parameters.

The printCarInfo function uses object destructuring to create three parameter variables: model, maker, and city.
When the function is invoked with the truck object, these parameters are assigned the corresponding values from that
object.

Note that we don’t have to use every property from the truck object: we only create parameter variables for the values
that we need.*/
let truck = {
    model: '1977 Mustang convertible',
    maker: 'Ford',
    city: 'Detroit',
    year: '1977',
    convertible: true

};

const printCarInfo = ({model, maker, city}) => {
    console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};

printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.


/*<<<***example 2***>>>*/
const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
}

const destructionInsideFunction = (obj) => {
    const {welcome} = obj;
    const {title} = obj;
    const {subtitle} = obj;
    const {firstName, lastName} = obj.author;
    console.log(welcome + " " + firstName)
}

destructionInsideFunction(data)


// refining above
const destructionInOneLineInsideFunction = (obj) => {
    const {welcome, title, subtitle, author, date} = obj;
    const {firstName,lastName}=author;
    console.log(welcome + " " + lastName)
}

// refining above more
const destructionInOneLineInsideFunctionRefined = (obj) => {
    const {welcome, title, subtitle, author:{firstName,lastName}, date} = obj;
    console.log(welcome + " " + lastName)
}

// refining more and more Destructuring the props inside the parenthesis

const destructionInsideParentheses =({welcome, title, subtitle, author:{firstName,lastName}, date})=>{
    console.log(welcome +" "+firstName+" on" + date)
}
destructionInsideParentheses(data)