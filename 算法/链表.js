/*
 * @Author: SunBOY
 * @Date: 2023-02-16 17:03:30
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-17 00:22:23
 * @FilePath: \链表.js
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-02-16 17:03:30
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

function searchNode(root, value) {
  if (root == null) return false;
  if (root.value === value) return true;
  else return searchNode(root.next, value);
}
// console.log(searchNode(a, "sd"));

function consoleNode(root) {
  if (root === null) return false;
  console.log(root.value);
  if (root.next != null) consoleNode(root.next);
  return "结束";
}
// console.log(consoleNode(a));

function deleteNode(root, value) {
  if (root.value === null) return false;
  const head = new Node("sdfs");
  head.next = root;
  let a = head;
  while (a.next) {
    if (a.next.value === value) {
      a.next = a.next.next;
      continue;
    }
    a = a.next;
  }
  return head.next;
}
// console.log(consoleNode(a));
// console.log(consoleNode(deleteNode(a, "b")));


