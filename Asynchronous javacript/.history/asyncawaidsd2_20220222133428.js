function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData(); //suspend
    //wait for get data to complete;
    console.log(data);
}