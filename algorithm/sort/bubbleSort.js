/**
 * 【冒泡排序】
 * 核心思想： 给定一个数组，通过进行两两对比，大的放在右边，小的放在左边，
 *          依次进行对比，最后就可以生成一个升序的有序数组。
 * 特点：在冒泡排序中，经过每一轮的排序处理后，数组后端的数是排好序的。
 * 空间复杂度： O(1)
 * 时间复杂度：O（n^2）
 */
 const bubbleSort = function(arr) {
   let hasChanged = true;
   for (let i = 0; i < arr.length - 1 && hasChanged; i++) {

    hasChanged = false;
     for (let j = 0; j < arr.length - 1 - i; j++) {
       if (arr[j] > arr[j+1]) {
         let temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
         hasChanged = true;
       } 
     }
   }
   return arr;
 }

// test
console.time('bubble');
console.log(bubbleSort([2,1,7,9,5,8]));
console.timeEnd('bubble');
