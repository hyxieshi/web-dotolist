/*
 * @Author: SunBOY
 * @Date: 2023-01-07 14:46:16
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-01-07 17:05:00
 * @FilePath: \sort.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-01-07 14:46:16
 */
let arr = [1, 233, 546, 67, 23, 3, 7, 677, 23, 2334, 56, 7676, 8];

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let x = 0; x < arr.length - 1 - i; x++) {
      if (arr[x] > arr[x + 1]) {
        [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]];
      }
    }
  }
  return arr;
}
console.time("bubbleSort");
console.log(bubbleSort(arr));
console.timeEnd("bubbleSort");

// 选择排序
// 默认取第一位 跟后面所有值进行对比
// 如果后面有更小的 将保存最小一位的下标
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.time("selectSort");
console.log(selectSort(arr));
console.timeEnd("selectSort");

// 插入排序
function insertSort(arr) {
  return arr;
}
