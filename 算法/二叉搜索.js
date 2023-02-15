/*
 * @Author: SunBOY
 * @Date: 2023-02-15 14:40:11
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-15 17:13:21
 * @FilePath: \二叉搜索.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-02-15 14:40:11
 */
let arr = [];
for (var i = 0; i < 4; i++) {
  arr[i] = Math.floor(Math.random() * 10000);
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
// 添加节点
function addNode(root, val) {
  if (root == null) return;
  if (root.val == val) return;
  if (root.val < val) {
    if (root.right == null) root.right = new Node(val);
    else addNode(root.right, val);
  } else {
    if (root.left == null) root.left = new Node(val);
    else addNode(root.left, val);
  }
}

function buildSearchTree(array) {
  if (array == null || array.length == 0) return null;
  let root = new Node(array[0]);
  for (let i = 1; i < array.length; i++) {
    addNode(root, array[i]);
  }
  return root;
}
let tree = buildSearchTree(arr);
// 获取最大深度
function getDeep(tree) {
  if (tree == null) return 0;
  let left = getDeep(tree.left);
  let right = getDeep(tree.right);
  return Math.max(left, right) + 1;
}
// 判断是不是平衡二叉
function isByTree(root) {
  if (root == null) return true;
  let left = getDeep(root.left);
  let right = getDeep(root.right);
  if (Math.abs(right - left) > 1) return false;
  else {
    return isByTree(root.left) && isByTree(root.right);
  }
}
// 二叉搜索
let nums = 0;
function searchByTree(root, val) {
  if (root == null) return false;
  //   console.log(root.val);
  if (root.val === val) return true;
  nums += 1;
  if (root.val < val) {
    return searchByTree(root.right, val);
  } else {
    return searchByTree(root.left, val);
  }
}

console.log(isByTree(tree));

// 返回平衡之后的根节点
function change(root) {
  // 先判断是不是平衡二叉树
  if (isByTree(root)) return true;
  // 不是
  if (root.left != null) root.left = change(root.left);
  if (root.right != null) root.right = change(root.right);
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) return root;
  else if (leftDeep > rightDeep) {
    // 右旋
    let changeTreeDeep = getDeep(root.left.right);
    let noChangeTreeDeep = getDeep(root.left.left);
    if (changeTreeDeep > noChangeTreeDeep) root.left = leftRotate(root.left);
    return rightRotate(root);
  } else {
    // 左旋
    let changeTreeDeep = getDeep(root.right.left);
    let noChangeTreeDeep = getDeep(root.right.right);
    if (changeTreeDeep > noChangeTreeDeep) root.left = leftRotate(root.right);
    return leftRotate(root);
  }
}
function leftRotate(root) {
  // 找到新根
  let newRoot = root.right;
  // 找到需要变化的分支
  let changeTree = root.right.left;
  root.right = changeTree;
  newRoot.left = root;
  return newRoot;
}
function rightRotate(root) {
  let newRoot = root.left;
  // 找到需要变化的分支
  let changeTree = root.left.right;
  root.left = changeTree;
  newRoot.right = root;
  return newRoot;
}
console.log(isByTree(change(tree)));

function deepTree(root) {
  console.log(root.val);
}
