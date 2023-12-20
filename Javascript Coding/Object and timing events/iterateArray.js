var arr = [20, 30, 40, 50];

var obj = {
    "0" : 20,
    "1" : 30,
    "2" : 40,
    "3" : 50
}

arr.prop1 = "demo";
console.log(arr);
console.log(arr.length); // max value integ key + 1

for(var i in arr) {
    console.log(i, arr[i]);
}