/*
 * @Author: SunBOY
 * @Date: 2022-11-08 20:53:05
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-13 23:18:36
 * @FilePath: d:\xike\Desktop\duyi\数据结构与算法\基础算法.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-11-08 20:53:05
 */
// let a = [2, 235, 546, 2, 4, 54, 6, 8];
// // 冒泡
// function b(a) {
//   for (let i = 0; i < a.length; i++) {
//     for (let y = i; y < a.length; y++) {
//       if (a[i] >= a[y]) {
//         [a[i], a[y]] = [a[y], a[i]];
//       }
//     }
//   }
//   return a;
// }
// // console.log(b(a));

// function compare(arr, a, b) {
//   arr[a] >= arr[b] ? true : false;
// }
// function exchange(arr, a, b) {
//   return ([arr[a], arr[b]] = [arr[b], arr[a]]);
// }
// // function sort(arr) {
// //   for (let i = 0; i < a.length; i++) {
// //     for (let y = i; y < a.length; y++) {
// //       if (compare(arr, i, y)) {
// //         exchange(arr, i, y);
// //       }
// //     }
// //   }
// //   return arr;
// // }
// // console.log(sort(a));
// function remove(arr, val) {
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== val) {
//       arr[y] = arr[i];
//       y++;
//     }
//   }
//   return y;
// }
// // console.log(remove(a, 2));

// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// function q(nums) {
//   //   if (nums.length == [...new Set(nums)].length) return false;
//   //   return true;
//   return nums.length == [...new Set(nums)].length ? false : true;
// }
// // let qc = [...new Set(nums)];
// nums = [1, 3, 5, 6];
// nums.push(7);
// nums.sort((a, b) => {
//   return a - b;
// });
// console.log(nums.indexOf(7));
// // console.log(1 ? true : false);

// 二叉树
/*
function ernode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
let a = new ernode("a");
let b = new ernode("b");
let c = new ernode("c");
let d = new ernode("d");
let e = new ernode("e");
let f = new ernode("f");
let g = new ernode("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
*/
function q(node) {
  // console.log(node.val);
  if (node.left) q(node.left);
  // console.log(node.val);
  if (node.right) q(node.right);
  console.log(node.val);
}
let qian = ["a", "c", "f", "g", "b", "d", "e"];
let zhong = ["f", "c", "g", "a", "d", "b", "e"];
let hou = ["f", "g", "c", "d", "e", "b", "a"];

function qpaixu(qian, zhong) {
  if (
    qian === null ||
    zhong === null ||
    qian.length == 0 ||
    zhong.length == 0 ||
    zhong.length !== qian.length
  ) {
    return null;
  }
  // 先找根节点
  let root = new ernode(qian[0]);
  // 找到根节点在中序的位置
  let index = zhong.indexOf(root.val); //在中序 找到根节点的位置
  let qian_left = qian.slice(1, index + 1); //找到 前序中左边的节点
  let qian_right = qian.slice(index + 1, qian.length); //找到 前序中右边的节点
  let zhong_left = zhong.slice(0, index); //找到 中序中左边的节点
  let zhong_right = zhong.slice(index + 1, zhong.length); //找到 中序中右边的节点
  root.left = paixu(qian_left, zhong_left);
  root.right = paixu(qian_right, zhong_right);
  return root;
}
function hpaixu(h, z) {
  if (
    h === null ||
    z === null ||
    h.length === 0 ||
    z.length === 0 ||
    h.length !== z.length
  )
    return null;
  let root = new ernode(h[h.length - 1]); //获取根节点
  let index = z.indexOf(root.val);
  let z_left = z.slice(0, index);
  let z_right = z.slice(index + 1, z.length);
  let h_left = h.slice(0, index);
  let h_right = h.slice(index, h.length - 1);
  root.left = hpaixu(h_left, z_left);
  root.right = hpaixu(h_right, z_right);
  return root;
}

// let root = hpaixu(hou, zhong);
// console.log(root.left);
// console.log(root);
// console.log(root.right);
/**
 * @description:  深度优先搜索-dfs
 * @param {root} 根节点
 * @param {tag} 需要匹配的值
 * @return {true||false}
 * @Author: SunBOY
 */
function deepSearch(root, tag) {
  if (root === null) return false;
  if (root.val === tag) return true;
  return deepSearch(root.left, tag) || deepSearch(root.right, tag);
}
// console.log(deepSearch(a, "z"));
/**
 * @description: 广度优先 bfs
 * @param {*} root
 * @param {*} tag
 * @return {*}
 * @Author: SunBOY
 */
function bfs(root, tag) {
  if (root === null && root.length === 0) return false;
  let list = [];
  for (let i = 0; i < root.length; i++) {
    console.log(root[i].val);
    if (root[i].val === tag) return true;
    else {
      list.push(root[i].left);
      list.push(root[i].right);
    }
  }
  return bfs(list, tag);
}

// console.log(bfs([a], "e"));

function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let a = new node("a");
let b = new node("b");
let c = new node("c");
let d = new node("d");
let e = new node("e");
let f = new node("f");
let g = new node("g");
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

let a1 = new node("a");
let b1 = new node("b");
let c1 = new node("c");
let d1 = new node("d");
let e1 = new node("e");
let f1 = new node("f");
let g1 = new node("g");
a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = null;

/**
 * @description: 二叉树比较
 * @param {*} root1
 * @param {*} root2
 * @return {false||true}
 * @Author: SunBOY
 */
function compareTree(root1, root2) {
  if (root1 === root2) return true;
  if ((root1 === null && root2 !== null) || (root2 === null && root1 !== null))
    return false;
  if (root1.val !== root2.val) return false;
  return (
    (compareTree(root1.left, root2.left) &&
      compareTree(root1.right, root2.right)) ||
    (compareTree(root1.left, root2.right) &&
      compareTree(root1.right, root2.left))
  );
}
// console.time("compareTree");
// console.log(compareTree(a, a1));
// console.timeEnd("compareTree");

/**
 * @description: 比较两个树
 * @param {*} root1
 * @param {*} root2
 * @param {*} difflist
 * @return {*}
 * @Author: SunBOY
 */
function diffTree(root1, root2, difflist) {
  if (root1 === root2) return true;
  if (root1 === null && roo2 !== null) {
    difflist.push({
      type: "新增",
      origin: null,
      now: root2,
    });
  } else if (root1 !== null && root2 === null) {
    difflist.push({
      type: "删除",
      origin: root1,
      now: null,
    });
  } else if (root1.val !== root2.val) {
    difflist.push({
      type: "修改",
      origin: root1.val,
      now: root2.val,
    });
    diffTree(root1.left, root2.left, difflist);
    diffTree(root1.right, root2.right, difflist);
  } else {
    diffTree(root1.left, root2.left, difflist);
    diffTree(root1.right, root2.right, difflist);
  }
}
let diffList = [];
diffTree(a, a1, diffList);
console.log(diffList);
// document.addEventListener("keydown", function (e) {
//   console.log(e.target);
// });
