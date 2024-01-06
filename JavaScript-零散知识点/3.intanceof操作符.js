// 让instanceof能判断基本数据类型
class PrimitiveNumber {
    static [Symbol.hasInstance](x) {
        return typeof x === 'number'
    }
}

console.log(111 instanceof PrimitiveNumber)   // true


/**
 * 手写instanceof，实现核心：原型链的向上查找
 * @param {*} left 判断的对象
 * @param {*} right 构造函数
 */
function myInstanceof(left, right) {
    if (typeof left !== 'object' || left == null) return false;
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;

    while (true) {
        if (proto == null) return false;
        if (proto == prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
console.log(2 instanceof Number);  // false
console.log([] instanceof Array);  // true
