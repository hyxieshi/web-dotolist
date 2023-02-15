/*
 * @Author: SunBOY
 * @Date: 2023-02-15 22:25:36
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-15 23:15:56
 * @FilePath: \动态规划.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-02-15 22:25:36
 */
// 给出第n位的值是多少

// 0、1、1、2、3、5、8、13

function fibo(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

function fibo2(n) {
  if (n <= 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibo2(n - 1) + fibo2(n - 2);
}
console.log(fibo2(8));

// 青蛙跳台阶 一次只能跳一阶或者两阶
// 问青蛙跳上n级有多少种情况
//  n-1 n-2

function fn(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return fn(n - 1) + fn(n - 2);
}
console.log(fn(10));
