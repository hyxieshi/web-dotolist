/*
 * @Author: SunBOY
 * @Date: 2022-11-18 21:34:50
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-19 16:22:25
 * @FilePath: \promise.js
 * @Description:手写promis
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-18 21:34:50
 */

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "reject";

/**
 * @description: 运行一个微任务
 * @param {Function} callback
 * @return {*}
 * @Author: SunBOY
 */
function runMicroTask(callback) {
  // node  环境
  if (global.process && global.process.nextTick) {
    process.nextTick(callback);
  } else if (global.MutationObserver) {
    //浏览器环境 需要元素变化 监听
    const a = new MutationObserver(callback);
  } else {
    setTimeout(callback, 0);
  }
}

/**
 * @description: 判断是否为promise
 * @param {*} obj
 * @return {*}
 * @Author: SunBOY
 */
function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}

class MyPromise {
  constructor(fn) {
    this._state = PENDING;
    this._value = undefined;
    this._list = []; //then 的队列
    try {
      // 如果在执行的过程中发生错误执行rej
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  /**
   * @description:  给队列添加函数
   * @param {Function} fn  传过来的函数
   * @param {String} start  状态
   * @param {Function} resolve then 成功后执行
   * @param {Function} reject then 失败后执行
   * @return {*}
   * @Author: SunBOY
   */
  pushlist(fn, start, resolve, reject) {
    this._list.push({
      fn,
      start,
      resolve,
      reject,
    });
  }

  /**
   * @description:  处理队列
   * @return {*}
   * @Author: SunBOY
   */
  runlist() {
    if (this._state === PENDING) {
      return;
    }
    while (this._list[0]) {
      this.runonelist(this._list[0]);
      this._list.shift();
    }
  }
  /**
   * @description:  处理一个任务
   * @return {*}
   * @Author: SunBOY
   */
  runonelist({ fn, start, resolve, reject }) {
    runMicroTask(() => {
      if (this._state !== start) {
        return;
      }
      if (typeof fn !== "function") {
        this._state = FULFILLED ? resolve(this._value) : reject(this._value);
        return;
      }
      try {
        const data = fn(this._value);
        //   判断返回值是否为promise
        if (isPromise(data)) {
          // console.log(9);
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
        console.log(error);
      }
    });
  }

  /**
   * @description: promise a+ 规范
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   * @return {*}
   * @Author: SunBOY
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.pushlist(onFulfilled, FULFILLED, resolve, reject);
      this.pushlist(onRejected, REJECTED, resolve, reject);
      this.runlist();
    });
  }

  /**
   * @description:
   * @param {状态} newState
   * @param {数据} value
   * @return {*}
   * @Author: SunBOY
   */
  changState(newState, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = newState;
    this._value = value;
    this.runlist();
    // console.log(this._value);
  }
  /**
   * @description:  成功
   * @return {*}
   * @Author: SunBOY
   */
  resolve(data) {
    this.changState(FULFILLED, data);
  }
  /**
   * @description: 失败
   * @return {*}
   * @Author: SunBOY
   */
  reject(err) {
    this.changState(reject, err);
  }
}

// new Promise((res) => {
//   res("1231");
// })
//   .then((data) => {
//     console.log(data);
//     return new MyPromise((res) => {
//       res(2580);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });
