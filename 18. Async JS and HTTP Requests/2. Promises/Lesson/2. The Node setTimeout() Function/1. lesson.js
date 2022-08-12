const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {true?resolve('I resolved!'):reject("I rejected")}, 3000);
    });
};

const prom = returnPromiseFunction();
console.log(prom)