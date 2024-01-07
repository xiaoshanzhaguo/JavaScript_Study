/**
 * 转换为数字型的几种方式：
 * 1. parseInt() 和 parseFloat() 函数
 *    这两个函数可以用于将字符串转换为整数或浮点数。它们会尝试从字符串的开头开始解析数字，直到遇到非数字字符为止。
 * 2. Number() 函数
 *    Number() 函数可以用于将任何可转换为数字的值转换为数字类型。
 *    如果字符串无法被解析为有效的数字，Number() 返回 NaN。
 * 3. 使用加号（+）进行隐式转换：
 *    这种方法通常用于将字符串转换为数字，但请注意，如果字符串不能被解析为有效的数字，结果将是 NaN。
 * 4. parseInt() 和 parseFloat() 的底层使用：
 *    如果你想确保将字符串转换为整数或浮点数，可以使用 parseInt() 或 parseFloat() 并传递进制
 *    小数点精度参数。
        var strNumber = "123.45";
        var intNumber = parseInt(strNumber, 10); // 解析为整数，基数为10
        var floatNumber = parseFloat(strNumber); // 解析为浮点数
 */


// Null和Undefined类型
let a1 = null, a2 = undefined;
result1 = Number(a1);
result2 = Number(a2);
console.log("null: " + result1, "undefined: " +  result2);  // null: 0 undefined: NaN

// Boolean类型
let b1 = true, b2 = false;
console.log("b1:" + Number(b1), "b2:" + Number(b2));  // b1:1 b2:0

// String类型
let c1 = "1111", c2 = "dajfi", c3 = "";
console.log("c1:" + Number(c1), "c2:" + Number(c2), "c3:" + Number(c3));  // c1:1111 c2:NaN c3:0

// Symbol类型
let d1 = Symbol('foo');
// 显式转换和隐式转换都会报错
// console.log("d1:" + Number(d1));  // TypeError: Cannot convert a Symbol value to a number
// try {
//     let result3 = +d1;
//     console.log("d1:" + Number(d1));
// } catch (error) {
//     console.error(error);   // TypeError: Cannot convert a Symbol value to a number
// }

// 数组、对象
// let e1 = [1,2,3], e2 = {a: 'abc', b: 18};
// console.log("e1:" + Number(e1), "e2:" + Number(e2));  // e1:NaN e2:NaN
let e1 = [1], e2 = {0: 1};
console.log("e1:" + Number(e1), "e2:" + Number(e2));  // e1:1 e2:NaN
/**
 * 1. 普通对象，按11条的规则，会转换成字符串"[Object Obejct]"，然后将这个字符串转换成数字：NaN。
   2. 数组，如果是['123']的数组，会转成字符串'123'，再转成数字123；如果是['123b']的数组，会转成字符串'123b'，再转成数字 NaN；[]或['']会转成空字符串''，再转成数字0
 */
