/*
 * @Author: RocWong 
 * @Date: 2018-07-29 10:39:05 
 * @Last Modified by: RocWong
 * @Last Modified time: 2018-07-29 11:54:03
 * @Desc : 数组的indexOf返回的是首个匹配元素的索引，filter返回的是一个匹配条件的新数组
 */

function arrayDistinct(arr) {
    return arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });
}

console.log(arrayDistinct([2, 34, 5, 3, 2, 6, 77, 899, 34, 55]));
// excepted output : [ 2, 34, 5, 3, 6, 77, 899, 55 ]