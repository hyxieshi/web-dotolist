/*
 * @Author: SunBOY
 * @Date: 2023-03-30 20:46:08
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-04-03 21:42:57
 * @FilePath: \MyPromise.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-30 20:46:08
 */
class MyPromise {
  constructor(executor) {
    this.init();
    this.initBind();
    try {
      executor(this.res, this.rej);
    } catch (error) {
      this.rej(error);
    }
  }
  init() {
    this.state = "pending";
    this.result = null;
  }
  initBind() {
    this.res = this.res.bind(this);
    this.rej = this.rej.bind(this);
  }
  res(value) {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    this.result = value;
  }
  rej(value) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.result = value;
  }
  then(onfulfilled, onrejected) {
    // 接受两个函数
    onfulfilled = typeof onfulfilled === "function" ? onfulfilled : null;
    onrejected = typeof onrejected === "function" ? onrejected : null;

    if (this.state === "fulfilled") {
      onfulfilled(this.result);
    } else if (this.state === "rejected") {
      onrejected(this.result);
    }
  }
}

new Promise((res, rej) => {});
console.log(
  new MyPromise((res, rej) => {
    throw "err";
    res("hhhh");
    rej("sdfss");
  })
);
