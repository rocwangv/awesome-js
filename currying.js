/*
 * @Author: RocWong 
 * @Date: 2018-07-22 16:05:45 
 * @Last Modified by:   RocWong 
 * @Last Modified time: 2018-07-22 16:05:45 
 */

/**
 * 柯里化的通用实现
 * @param {*} fn 
 */
function currying(fn) {
    var slice = Array.prototype.slice;
    var _args = slice.call(arguments, 1);
    return function () {
        var _inargs = slice.call(arguments);
        return fn.apply(null, _args.concat(_inargs));
    }
}

//test code
function apple(sth) {
    console.log(`apple ${sth}`);
}

function pineapple(sth) {
    console.log(`pineapple ${sth}`);
}
function map(handler, list) {
    return list.map(handler);
}

//数据的每一项进行遍历拼接
map(apple, ['pen', 'watch', 'phone']);

map(pineapple, ['pen', 'watch', 'phone']);
console.log('~~~~~~~~~~柯里化的分割线~~~~~~~~~~~')
//加入 柯里化 实现后,可以看到和上面的结果是一致的
currying(map, apple)(['pen', 'watch', 'phone']);
currying(map, pineapple)(['pen', 'watch', 'phone']);

// 柯里化
function curry(fn) {
    var args = [],
        slice = Array.prototype.slice,
        fnLen = fn.length;//函数的长度就是定义形参的个数
    function curring() {
        args = args.concat(slice.call(arguments));
        if (args.length < fnLen) {
            return curring;
        }
        return fn.apply(this, args);
    }
    return curring
}
var fn = function (a, b, c) {
    return a + b + c;
}
console.log(curry(fn)(1)(2)(3));//6