function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData();
    console.log(data);
}