// Null和Undefined类型
let a1 = null, a2 = undefined;
result1 = String(a1);
result2 = String(a2);
console.log("null: " + result1, "undefined: " +  result2);  // null: null undefined: undefined

// Boolean类型
let b1 = true, b2 = false;
console.log("b1:" + b1.toString(), "b2:" + b2.toString());  // b1:true b2:false

// Number类型
let c1 = 2, c2 = 10000000000000000000000000;
console.log("c1:" + c1.toString(), "c2:" + c2.toString());  // c1:2 c2:1e+25

// Symbol类型
let d1 = Symbol('foo');
// 这是显式转换
console.log("d1:" + d1.toString());  // d1:Symbol(foo)
// 隐式转换会报错
try {
    let result3 = d1 + '';
    console.log("d1:" + d1.toString());
} catch (error) {
    console.error(error);   // TypeError: Cannot convert a Symbol value to a string
}

/**
 * 对普通对象来说，除非自行定义toString()方法，否则会调用toString (Object.prototype.toString()) 来返回内部属性[[Class]]的值，如"[object Object]"。
 * 如果对象有自己的 toString()方法，字符串化时就会调用该方法并使用其返回值。
 */