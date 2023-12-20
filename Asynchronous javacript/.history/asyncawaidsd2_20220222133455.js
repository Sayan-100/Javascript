function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData(); //suspend
    //wait for get data to complete;
    //javascript move to synchronous code
    console.log(data);
}

console.log('1');