### vue组件之间的通信

- 父子
  - props
  - emit
  - parent
  - ref
  - attrs
- 兄弟
  - parent
  - root
  - bus
  - vuex/pinia
- 公共
  - bus
  - vuex/pinia
  - provide+inject

### v-if v-for 优先级

文档说明 不要将v-for和-v--if放一起

​	V2     v-for  优先于 v-if

​    V3   v-if 优先于v-for

### VUE 生命周期

生命周期就是vue应用创建后 都会经过一系列的初始化，数据观测，模板编译，挂载实例等。步骤

Vue 生命周期可以分为四个阶段

创建前后 挂载前后 更新前后 卸载前后 `缓存组件的两个格外的生命周期`

#### 区别

v3 卸载前后的名字改变

v3 在使用组合api的时候setup 优先所有的生命周期（无create）

### Vue 双绑定 使用原理

v-model语法糖 是：value @input 组成的

### Vue 如何扩展一个组件

逻辑扩展：mixins，extends，composition api

内容扩展：slots    

### Vue 子组件是否可以直接改变父组件的数据 为什么

不可以直接改变 通过emit事件修改

文档中也不建议 子组件改变父组件值

坚持单项是数据流䣌原则

### VUE 权限管理

通常是页面和按钮权限

前端控制 服务控制

### 谈谈你对Vue响应式的理解

- 啥是响应式
- 为什么vue 需要响应式
- 有什么好处
- vue的响应式怎么实现的有什么优缺点
- vue3响应式的变化

### 对虚拟dom的理解

- vdom 是什么
  - vdom 就是一个js的对象，用各种属性取秒速一个dom的结构

- 引入vdom的好处
  - 将dom抽象成vdom，有效减少直接操作的dom次数，提高程序性能
  - 直接操作dom是由限制的，比如：diff，clone 的等操作，一个真实的dom上有许多内容，如果直接对其diff操作会对一些没必要的内容进行操作；同样clone 也会进行一些不必要的赋值
  - 操作dom是非常昂贵的操作，频繁的dom操作容易引起页面的重回和回流，但是通过操作vnode从而减少操作dom的次数，从而减少页面重绘和回流。
  - 方便实现跨平台

- vdom 怎么生成的 如何成为dom
  - 

- 后面对diff的作用







