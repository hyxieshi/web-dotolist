/*
 * @Author: SunBOY
 * @Date: 2023-02-16 00:57:48
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-16 17:00:37
 * @FilePath: \图.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-02-16 00:57:48
 */
function Node(value) {
  this.value = value;
  this.neighbor = [];
}
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(c);
b.neighbor.push(d);
b.neighbor.push(a);
c.neighbor.push(d);
c.neighbor.push(b);
c.neighbor.push(a);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);
e.neighbor.push(f);
f.neighbor.push(e);

/**
 * @description: 图的深度度
 * @param {Node} node
 * @param {string} target
 * @param {Array} path
 * @return {Boolean}
 * @Author: SunBOY
 */
function deepSearch(node, target, path) {
  if (node == null) return false;
  if (node.value === target) return true;
  // 不要形成环
  if (path.includes(node)) return false;
  // 一查找过的
  path.push(node);
  let a = false;
  for (let i = 0; i < node.neighbor.length; i++) {
    console.log(node.neighbor[i]);
    if (deepSearch(node.neighbor[i], target, path)) {
      a = true;
    }
  }
  return a;
}
// console.log(deepSearch(f, "a", []));

function bfs(nodes, target, path) {
  if (nodes.length === 0 || nodes === null) return false;

  let a = [];
  for (let i = 0; i < nodes.length; i++) {
    if (path.includes(nodes[i])) continue;
    path.push(nodes[i]);
    console.log(nodes[i].neighbor);
    if (nodes[i].value === target) return true;
    else a = a.concat(nodes[i].neighbor);
  }

  return bfs(a, target, path);
}
console.log(bfs([a], 'f', []));

