let arr = [
    1, 2, 3
]

// 方法1
// console.log(Object.prototype.toString.call(arr));   // [object Array]
console.log(Object.prototype.toString.call(arr).slice(8, -1));  // Array  截取下标为8到倒数第一位

// 方法2
console.log(arr.__proto__ == Array.prototype);   // true

// 方法3
console.log(Array.isArray(arr));   // true

// 方法4
console.log(arr instanceof Array);  // true

// 方法5
console.log(Array.prototype.isPrototypeOf(arr));  // true
