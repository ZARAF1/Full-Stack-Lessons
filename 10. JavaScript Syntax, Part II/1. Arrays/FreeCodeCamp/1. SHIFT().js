var names = ["Andrew", "Edward", "Paul", undefined, "Chris", "John"];

while (typeof (i = names.shift()) !== 'undefined') {
    console.log(i);
}
