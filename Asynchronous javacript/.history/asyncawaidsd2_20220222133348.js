function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData(); //suspend
    console.log(data);
}