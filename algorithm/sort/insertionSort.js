/**
 * 【插入排序】
 * 核心思想：不断地将尚未排好序的数插入到已经排好序的部分。
 * 特点：对于插入排序来说，经过每一轮的排序处理后，数组前端的数都是排好序的。
 * 空间复杂度：O(1)
 * 时间复杂度：O(n^2)
 */
const insertionSort = function(arr) {
  // 将数组的第一个元素当作已经排好序的，从第二个元素，即 i 从 1 开始遍历数组
  for (let i = 1, j, current; i < arr.length; i++) {
    // 外围循环开始，把当前 i 指向的值用 current 保存
    current = arr[i];
    // 指针 j 内循环，和 current 值比较，若 j 所指向的值比 current 值大，则该数右移一位
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j+1] = arr[j];
    }
    // 内循环结束，j+1 所指向的位置就是 current 值插入的位置
    arr[j+1] = current;
  }
  return arr;
}

// test
console.time('insertion sort');
console.log(insertionSort([2,1,7,9,5,8]));
console.timeEnd('insertion sort');