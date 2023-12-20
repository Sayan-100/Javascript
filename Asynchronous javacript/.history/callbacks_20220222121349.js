//a function which can be passed as an argument to another function
//complete the sequence


function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}

function askQuestion() {
    console.log('How are you?');
}