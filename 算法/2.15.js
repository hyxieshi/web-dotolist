// 树的前中后
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
// 前
let arr1 = [];
function fn1(root) {
  if (root === null) return;
  arr1.push(root.val);
  fn1(root.left);
  fn1(root.right);
}
// 中
let arr2 = [];
function fn2(root) {
  if (root === null) return;
  fn2(root.left);
  arr2.push(root.val);
  fn2(root.right);
}
// 后
let arr3 = [];
function fn3(root) {
  if (root === null) return;
  fn3(root.left);
  fn3(root.right);
  arr3.push(root.val);
}
// fn1(a);
// fn2(a);
// fn3(a);
// console.log(arr1, arr2, arr3);

// 深、广 搜索

function deepTree(root, val) {
  if (root == null || val == null) return false;
  if (root.val === val) return true;
  else {
    return deepTree(root.left, val) || deepTree(root.right, val) ? true : false;
  }
}
// console.log(deepTree(a, "a"));
function bfs(roots, val) {
  if (roots === null || roots.length == 0) return false;
  let a = [];
  for (let i = 0; i < roots.length; i++) {
    if (roots[i] != null && roots[i].val === val) return true;
    else {
      // 谨防 Cannot read property 'left' of null
      if (roots[i].left) a.push(roots[i].left);
      if (roots[i].right) a.push(roots[i].right);
    }
  }
  //   console.log(roots);
  return bfs(a, val);
}
console.log(bfs([a], "e"));

// 最大深度
function deepByTree(root) {
  if (root === null) return 0;
  let leftDeep = deepByTree(root.left);
  let rightDeep = deepByTree(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}
console.log(deepByTree(a));
