/*
 * @Author: SunBOY
 * @Date: 2022-10-25 17:29:56
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-29 00:54:04
 * @FilePath: \js方法重写.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-10-25 17:29:56
 */
// flat
// 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
let arr = [1, 24, 42, [213, 234, 123, [232, [2]]]];
function myflat(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      a = a.concat(myflat(arr[i]));
    } else {
      a.push(arr[i]);
    }
  }
  return a;
}
myflat(arr);

// forEach
//方法对数组的每个元素执行一次提供的函数。
// callback
//      为数组中每个元素执行的函数，该函数接收三个参数：
// currentValue
//      数组中正在处理的当前元素。
// index可选
//      数组中正在处理的当前元素的索引。
// array可选
//      forEach() 方法正在操作的数组。

function myforEach(callback) {
  if (typeof callback !== "function") {
    throw new Error(callback + "不是函数");
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

// map
function myMap(callback) {
  if (typeof callback !== "function") {
    throw new Error(callback + "不是函数");
  }
  let a = [];
  for (let i = 0; i < this.length; i++) {
    a.push(callback(this[i], i, this));
  }
  return a;
}
// var kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];
// var reformattedArray = kvArray.myMap(function (obj) {
//   var rObj = {};
//   rObj[obj.key] = obj.value;
//   return rObj;
// });
// console.log(reformattedArray);

// filter
// 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
function myFilter(callback) {
  if (typeof callback !== "function") {
    throw new Error(callback + "不是函数");
  }
  let a = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      a = a.push(this[i]);
    }
  }
  return a;
}
// reduce

// fill
// 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值。

// 如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end。
function myFill(value, start = 0, end = this.length) {
  start = start < 0 ? this.leng + start : start;
  end = end < 0 ? this.leng + end : end;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
}

// includes

// push

// slice

// unshift
