let calculateRuntime = (func) => {
    let t1 = Date.now();
    func();
    let t2 = Date.now();
    return t2 - t1;
}

let test = () => {
    for (let i = 0; i < 100; i++) {
        console.log(i)
    }
}

console.log(calculateRuntime(test))