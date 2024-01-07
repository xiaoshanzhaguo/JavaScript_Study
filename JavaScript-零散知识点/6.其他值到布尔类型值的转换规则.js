/**
 * 以下这些都是假值：
 * null、undefined
 * false
 * +0、+0和NaN
 * ""
 * 假值的布尔强制类型转换结果为false。从逻辑上说，假值列表以外的都应该是真值。
 */

// Null和Undefined类型
let a1 = null, a2 = undefined;
console.log("null: " + Boolean(a1), "undefined: " + Boolean(a2));  // null: false undefined: false

// Boolean类型
let b1 = true, b2 = false;
console.log("b1:" + Boolean(b1), "b2:" + Boolean(b2));  // b1:true b2:false

// Number类型
let c1 = +0, c2 = -0, c3 = NaN;
console.log("c1:" + Boolean(c1), "c2:" + Boolean(c2), "c3:" + Boolean(c3));  // c1:false c2:false c3:false

// Symbol类型
let d1 = Symbol('foo');
// 这是显式转换
console.log("d1:" + Boolean(d1));  // d1:true

// String类型
let e1 = "1111", e2 = "dajfi", e3 = "";
console.log("e1:" + Boolean(e1), "e2:" + Boolean(e2), "e3:" + Boolean(e3));  // e1:true e2:true e3:false