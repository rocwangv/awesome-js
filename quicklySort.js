

/**
 * 阮一峰版本快排
 * @param {*} arr 待排序的数组
 */
function quicklySort(arr){
    if(!arr || arr.length<=0)return arr;

    var pivotIndex = Math.floor(arr.length/2);//基准元素的索引位置
    var pivot = arr.splice(pivotIndex,1)[0];//取出基准元素

    var left =[],right = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quicklySort(left).concat([pivot],quicklySort(right));
}

var messArr = [1,90,88,2,43,66,22,33,4,9,0];
var start = new Date().getTime();
console.log('快速排序后的结果为：',quicklySort(messArr));
var end = new Date().getTime();
console.log('本次排序总共耗时(ms)：',end-start);