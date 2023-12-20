function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData(); //suspend
    //wait for get data to complete microtask queue
    //javascript move to synchronous code
    console.log(data);
}

abc();
console.log('1');