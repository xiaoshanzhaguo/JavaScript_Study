let obj = {};

// JSON自带的stringify方法
if (JSON.stringify(obj) == '{}') {
    console.log('空对象');
}


// ES6新增的方法Object.keys
if (Object.keys(obj).length == 0) {
    console.log('空对象');
}