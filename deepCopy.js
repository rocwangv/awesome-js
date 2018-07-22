/*
 * @Author: RocWong 
 * @Date: 2018-07-22 16:08:58 
 * @Last Modified by: RocWong
 * @Last Modified time: 2018-07-22 16:28:22
 * @Desc: 可以拷贝数组、对象、方法，缺点：不能复制不可枚举属性，如constructor，prototype等
 */

function deepCopy(o) {
    if (o instanceof Array) {
        let n = [];
        for (let a of o) {
            n.push(deepCopy(a));
        }
        return n;
    } else if (o instanceof Function) {
        return new Function('return ' + o.toString())();
    } else if (o instanceof Object) {
        var n = {};
        for (var key in o) {
            n[key] = deepCopy(o[key]);
        }
        return n;
    } else return o;
}

var res = deepCopy(['1', '2', '4', ['3', '8']]);
console.log(res);

var res1 = deepCopy(function () { console.log('I am a function.') });
console.log(res1());

var res2 = deepCopy({ name: 'Roc', girlFriend: { name: 'JingJing', age: 23 }, love: function () { console.log('love JingJing') } });
console.log(res2);
console.log(res2.love());


/**
 * 其他方式：
 *     深拷贝对象还有另一个解决方法，在对象中不含有函数的时候，使用JSON解析反解析就可以得到一个深拷贝对象。
 * 
 * 局限性：
 *      会忽略 undefined
 *      不能序列化函数，会被忽略
 *      不能解决循环引用的对象
 */
function hackDeepCopy(o) {
    return JSON.parse(JSON.stringify(o))
}