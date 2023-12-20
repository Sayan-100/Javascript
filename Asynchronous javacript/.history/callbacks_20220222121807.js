//a function which can be passed as an argument to another function
//complete the sequence


function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}

function askQuestion() { //callback
    console.log('How are you?');
}

greet('John', askQuestion);

console.log(1);