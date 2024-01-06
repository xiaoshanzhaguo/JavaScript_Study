/*
   测试改变对象原型后，constructor不能判断该数据类型
*/
function Fn() {}

// 改变原型为数组
Fn.prototype = new Array(); 

// 创建对象实例
let f = new Fn();

// 测试输出结果
console.log(f.constructor === Fn);   // false
console.log(f.constructor == Array); // true



/**
 * Object.prototype.toString.call()
 */

var a = Object.prototype.toString;

console.log(a.call(2));  // 
console. log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));