const str1 = "987654321";
const str2 = "1265765";

/**
 * 给一串 字符串类型的数字
 * 输出 第一个 连续的三位数
 *
 * 如  "987654321" -->"987"
 * */

const seek = function (str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    if (arr.length === 3) {
      if (isarr(arr)) return arr.join("");
      else {
        arr.shift();
      }
    }
  }
  return false;
};

const isarr = function (arr) {
  //   console.log(arr);
  if (+(arr[0] + 1) === +arr[1] && +(arr[1] + 1) === +arr[2]) {
    return true;
  }
  if (+(arr[0] - 1) === +arr[1] && +(arr[1] - 1) === +arr[2]) {
    return true;
  }
  return false;
};

console.log(seek(str2));

/**
 * 深拷贝 要考虑数组 对象 set map 及symbol
 */

const deepCopy = function (tagter) {
  let a;
  if (isObj(tagter)) {
    a = {};
    for (const key in tagter) {
      a[key] = deepCopy(tagter[key]);
    }
    return a;
  }
  if (isArr(tagter)) {
    a = [];
    for (const item of tagter) {
      a.push(deepCopy(item));
    }
    return a;
  }
  //   set
  if (isSet(tagter)) {
    a = new Set();
    for (const item of tagter) {
      a.add(deepCopy(item));
    }
    return a;
  }
  //   map
  if (isMap(tagter)) {
    a = new Map();
    for (const item of tagter) {
      a.set(deepCopy(item[0]), deepCopy(item[1]));
    }
    return a;
  }
  //   不知道怎么写=-=
  if (isSymbol(tagter)) {
  }
  return tagter;
};
const isObj = function (item) {
  return item instanceof Object ? true : false;
};
const isArr = function (item) {
  return item instanceof Array ? true : false;
};
const isSet = function (item) {
  return item instanceof Set ? true : false;
};
const isMap = function (item) {
  return item instanceof Map ? true : false;
};
const isSymbol = function (item) {
  return typeof item === "symbol" ? true : false;
};
const isfun = function (item) {
  return typeof item === "function" ? true : false;
};
let a = new Map();
a.set("湖南理工", "岳阳");
a.set("摄影师", "二次元摄影师");
a.set("程序员", "前端");

let obj = {
  id: Symbol(1),
  userinfo: {
    name: "稀客",
    age: 21,
  },
  tags: [
    "前端",
    "程序员",
    {
      name: "摄影师",
      tags: ["二次元", "摄影师", "人像"],
      ids: Symbol("摄影师"),
      set: new Set(["二次元", "摄影师", "人像"]),
      map: a,
    },
  ],
};
let b = obj;
console.log(b === obj);
console.table(deepCopy(obj).id === obj.id);
