/*
 * @Author: SunBOY
 * @Date: 2023-01-24 23:00:37
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-01 12:16:04
 * @FilePath: \js-challenges.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-01-24 23:00:37
 */

const res = require("./text");
console.log(res);
const data = [
  {
    id: "1",
    name: "父节点1",
    children: [
      {
        id: "1-1",
        name: "子节点1-1",
        children: [
          {
            id: "1-1-1",
            name: "子节点1-1-1",
          },
          {
            id: "1-1-2",
            name: "子节点1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    children: [
      {
        id: "2-1",
        name: "子节点2-1",
      },
    ],
  },
];

function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}
// console.log(...treeToList(data));

// const url =
//   "https://www.baidu.com/s?wd=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E9%A2%98%E6%8A%A5%E5%91%8A&rsv_spt=1&rsv_iqid=0xa3f5eb180001d272&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ib&rsv_sug3=2&rsv_n=2";
let url = 1;
function urlPars(url) {
  if (typeof url !== "string") return new Error("不是字符串");
  let index = url.indexOf("?");
  url = url.substring(index + 1);
  let arr = url.split("&");
  let obj = {};
  for (const item of arr) {
    let arr = item.split("=");
    obj[arr[0]] = arr[1];
  }
  return obj;
}
// console.table(urlPars(url));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var a = 3;
const obj2 = {
  a: 1,
  m1() {
    console.log(this.a + "2222");
  },
  m2: () => {
    console.log(this.a + "11111");
  },
};
obj2.m1();
obj2.m2();
