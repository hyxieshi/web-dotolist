/*
 * @Author: SunBOY
 * @Date: 2023-01-03 16:24:40
 * @LastEditors: SunBOY
 * @LastEditTime: 2023-02-14 17:00:07
 * @FilePath: \web-dotolist\ts\dome\app.ts
 * @Description:
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-01-03 16:24:40
 */
// let b: number;
// b = 12312;
// console.log(b);
// interface littleBeauty {
//     name:String,
//     age:Number
// }
// const a :littleBeauty ={
// name:'jhjh',
// age:11
// }

// const hhh :()=>String = ()=>{
// return '1'
// }
// let aaaaa:Number [] =[3,24,234,2]

// function getdata(a:Number,b:String):String{

//     return `${a}${b}`
// }
// getdata(2,'w')

// const arr:({}| undefined|null) = ['1',2,{},undefined,null]

// function Throttle(callback: Function, time: number): void {
//   let _timeout: number | undefined;
//   if (_timeout) {
//     clearInterval(_timeout);
//     _timeout = setTimeout(() => {
//       callback();
//     }, time * 1000);
//   } else {
//     _timeout = setTimeout(() => {
//       callback();
//     }, time * 1000);
//   }
// }

// 10000 斐波拉数列
// 返回第1000 位数
function fun(number:number):number{
  if(number === 1) return 0
  else if(number === 2 ) return 1
  else return fun(number-1) +fun(number-2)
}
console.time('时间')
console.log(fun(100))
console.timeEnd('时间')