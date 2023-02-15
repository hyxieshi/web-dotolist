/*
 * @Author: SunBOY
 * @Date: 2023-02-16 00:57:48
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-16 01:36:30
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

function deepSearch(node, target, path) {
  if (node == null) return false;
  if (path.includes(node)) return false;
  if (node.value === target) return true;
  path.push(node);
  let a = null;
  for (let i = 0; i < node.neighbor.length; i++) {
    a = deepSearch(node.neighbor[i], target, path);
  }
  return a;
}
console.log(deepSearch(b, "a", []));
