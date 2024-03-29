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
  - vdom 就是一个js的对象，用各种属性生成一个dom的结构

- 引入vdom的好处
  - 将dom抽象成vdom，有效减少直接操作的dom次数，提高程序性能
  - 直接操作dom是由限制的，比如：diff，clone 的等操作，一个真实的dom上有许多内容，如果直接对其diff操作会对一些没必要的内容进行操作；同样clone 也会进行一些不必要的赋值
  - 操作dom是非常昂贵的操作，频繁的dom操作容易引起页面的重回和回流，但是通过操作vnode从而减少操作dom的次数，从而减少页面重绘和回流。
  - 方便实现跨平台

- vdom 怎么生成的 如何成为dom
  - 组件模板被compile编译后通过render渲染 函数生成vnode，再转化成dom。

- 后面对diff的作用
  - 挂载结束后，vue进入更新流程。如果响应式的数据发生变化，将重执行新render函数，生成新的vdom，和上一次的渲染结果做对比，然后得到改变的地方，再去执行dom操作。

### 了解diff算法吗

- diff算法做什么的
  - diff算法称为patching算法，vdom 转dom 需要通过patch方法转换
- 它的必要性
  - 在v1视图中每个依赖都有更新函数与之对应，可以做到精准更新，但是在大项目中会有性能问题
  - 在v2中降低了watcher力度，每个组件只有一个watchher，所以需要引入patchhing算法才能精准找到发生变化的地方 并更新
- 何时执行
  - vue中diff执行时刻是组件内响应式数据发生变化的时候促会发更新函数，然后更新函数胡hi再次执行render函数生成最新的vdom，然后执行patch函数，传入新旧vdom进行对比找到变化的地方，最后在转换成对应的dom操作。
- 具体执行方式
  - 对比方式是个递归的过程，深度优先，同层比较
- 在v3中的优化
  - 编译优化patchflags，block等（vue3 效率提升）

### [vue3 有哪些新特性](https://v3-migration.vuejs.org/)

- 组合式api
- SFC单文件组件 setup 语法糖
- 更快
  - 虚拟dom的重写
  - 编译器的优化：静态提升，patchFlags，block等
  - 响应式的重写Proxy
- 更小
- 更容易维护Ts+模块化
- 更容易扩展
  - 独立的响应化模块
  - 自定义渲染器

### 怎么定义动态路由？怎么获取传来的动态参数？

- 何为动态路由

  - 给定匹配模式的路由映射到同一个组件


- 什么时候使用动态路由，如何定义
  - 如新闻页news，不同的新闻id不同在vue router中这么写,其中id 就是路径参数

  - ``````javascript
    {
        path:'/news/:id',
        component:News
    }

- 参数如何获取


  - this.$route.params

- 注意事项


  - vue3 新增其他api
  - $route.quer/hash

### 如何从零写一个vue路由

#### ps：spa应用用户点击链接内容 切换但是页面不刷新

- 借助 hash 或者 history api 实现url跳转页面不刷新
- 同时监听hashchange事件或者popstate事件处理跳转
- 根据hash值或者state值从routers表中匹配对应的组件渲染

### key有什么用---性能优化

- key 的作用主要是更高效的更新虚拟dom
- vue 在patch过程中判断两个节点是否相同key 是一个必要条件，在渲染一组列表时，key往往时唯一的标识，如果不定义key的化，vue会认为比较的两个节点是同一个节点哪怕实际上不是，会导致频繁跟新元素影响性能

### nextTick 使用和原理

- nextTick 是做什么的
  - nextTick（） 是等待下次dom更新的方法
- 为什么需要它
  - Vue有个异步更新的策略，数据变化时，vue 不会立刻更新dom，而是开始一个队列，把更新函数保存在队列中，在事件循环中所有的数据比那花会异步的批量哥你性能。所以我们的数据改变不糊hi立刻体现在dom上，如果此时想要获取dom的状态，就需要nextTick
- 开发时什么时候用
  - created中获取dom
  - 响应式数据发生变化后立即获取dom更新后的状态
- 介绍一下如何使用
- 解读原理

### watch 和computed 区别及选择

- 两者定义
  - computed：返回值具有响应式
  - watch：监测变化，执行回调，无返回值
- 使用场景的差异及选择
  - 计算属性，主要是为了简化模板中复杂的表达式。
  - 监听器，主要是在场景发生变化后执行一些额外的dom操作或者异步操作
  - 能用计算属性实现的优先使用计算属性，
- 使用细节 注意事项
- v3 变化

### Vue子组件父组件创建和挂载的顺序---koa洋葱模型？

- 创建过程自上而下，挂载过程自下而上

### 怎么缓存当前组件？缓存皇后如何更新？

- keep-alive 作用和用法
  - 使用keep-alive 包裹动态组件，离开时会会缓存起来而不死销毁 
- 使用细节？
  - 可以使用 include exclude 属性指定哪些组件缓存和不缓存哪些组件
  - 
- 组件缓存皇后更新可以利用avtivated或者beforerouteenter

### 如何从0到1构建一个vue项目

- 构建项目，引入必要插件，代码规范，提交规范，常用库

- v3 项目vite 或者create--vue创建项目

- 必要插件 路由插件，状态管理，ui库，http工具axios

- 其他常用的库vueuse，nprogress等

- 代码规范？

- ```javascript
  {
  plugins:放vite 的插件plugin配置
  public：放公共文件，会被打包在dist根目录下
  src：项目代码文件
  api：axios接口配置文件
  assets：静态资源
  components：项目组件
  router：路由配置
  store：状态管理工具
  utils：工具类的方法
  views：项目页面
  }
  ```

### 说说对vuex的理解

### template 到render 处理过程

对编译器的工作原理

### Vue实例挂载的过程中发生了什么

- 挂载过程是指app.mount()
  - 整体做了两件事 初始化和建立更新机制
- 初始化会创建组件实例，初始化组件状态，创建各种响应式数据

  

 ### v3 设计目标 及优化？

- 优化
  - 开发体验：新增租金啊 teleport 传送门，。fragments suspense composition api 等语法糖
  - 易扩展：reactivity 模块
  - 维护性：对ts 的支持 及组合式api 更易编写搞服用的逻辑
  - 性能：响应式底层的api 该笔那（proxy），编译时期的优化（静态标识，事件缓存，静态提升）
- 目标
  - 替代v2

### 了解哪些vue性能优化方法

- 路由懒加载 异步加载组件 有效减少应用的尺寸

  - ``````javascript
    const router = createTouter({
        routes:[
            {path:'/a',component:()=>import('/a.vue')}
        ]
    })

- keep-alive 缓存页面：避免重复创建实例，并且能保留状态

- 避免v-for v-if 一起写
- 对于不在变化的数据可以使用 v-once 或者冻结
- 虚拟列表
- 图片懒加载 v-lazy
- 第三方组件库按需加载

### 为什么v2里面 只能有一个根节点

- 因为vdom 是一个单根树型结构，‘patch’方法在遍历的时候需要冲根节点开始遍历
- v3中之所以可以写多个根节点，死因为引入了 ‘fragment’这个概念，如果发现组件时多根的，就创建一个fragment节点 其他的多根作为它的children。

### vuex 使用情况

- module，项目规模变大后，单独的store对象 太过于臃肿，通过模块方式便于维护
- 通过createStore({modules:{....}})  注册
- 使用 store.state.xxx.yyy
- 缺点 操作繁琐，易出错。pinia优化

###  为何需要使用路由懒加载

- [路由懒加载优化](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E4%BD%BF%E7%94%A8-webpack)

### v3 中ref 和 reactive 异同

- 



### watcheffect watch 异同

watcheffect  立刻运行一个函数，然后被动跟踪它的依赖

watch 侦测一个或多个响应式数据 在数据发生变化时调用一个回调函数

### 异步主键是什么？ 使用场景有哪些？

- 在大型应用中，我需要分割应用为更小的块，并且在需要的时候再加载。
- 路由切换时可以懒加载组件，还可以在页面组件中使用异步组件。
- 使用`defineAsyncComponent` 指定一个loader函数，结合es模块动态导入函数import可以快速实现。

### 你是如何处理vue 中发生的错误

- 错误一般分为 接口异常 和 代码逻辑异常。
- 接口异常：一般发生在请求数据中，以axios 为例，可以将axios 二次封装 在请求将拦截或者响应拦截中处理请求错误。
- 代码逻辑异常：主要是前端代码出错造成的异常，vue中最常见的是使用全局处理函数`app.config.errorHandler`来收集。

### 如何从零实现一个Vuex

- vuex 是一个状态管理库，并确保这些状态可预期的方式变更。
  - 实现一个名为`Store`存储全局状态。
  - 需要提供可以修改状态所需的API`commit（type，payload）` `dispatch（type，payload）`
- 实现Store时，可以定义store类，构造函数接受选项options，设置属性state对外暴露状态，提供commit和dispatch修改属性state。这里需要设置state为响应式对象，同时将Store定义为Vue插件。
- commit 方法可以获取用户传入的mutations并执行，dispatch 跟commit差不多，但注意是个异步，所以需要返回一个promise给用户处理异步结果。

### Vue中长列表优化

- 避免大数据量：分页获取
- 避免渲染大量数据：采取虚拟滚动方案，值渲染视口范围内的数据
- 避免更新：使用v-once 只渲染 一次，或者对不需要更新的对象冻结（vue2）
- 优化更新：通过v-memo缓存子树，有条件更新，提高复用，避免不必要的更新
- 按需加载数据：采用懒加载方式，在瀛湖需要的是很好在加载数据
- 当然最主要是，能够避免大数据获取和渲染最好，如果实在需要可以采用虚拟列表方式优化渲染数量，最后优化更新，如果不需要更新可以v-once ，需要更新使用v-memo。其他还可以采用懒加载，无线滚动等方案。

### 如何监听vuex数据的变化

- 由于vuex里面数据具有响应式可以使用`watch`方法监听状态
- 可以使用vuex 提供的api：`store.subscribe()`

### Vue3 性能提升在哪

### Vue3 为什么使用proxy代替defineProprty

- js 属性拦截有三种方式`defineProperty getter/setter Proxies`

- Vue2 诞生时 es2013 只能使用`defineProperty`,由于此api存在一些局限性，如对数组拦截有问题，为此vue 单独对数组做了一套响应式，并单独增加了api（$set等），另外在vue初始化的时候需要深度递归，但proxy 不需要。

- proxy属于懒处理，如果用户为访问不会实施拦截。
### History 和 Hash有什么区别
- 使用没有什么区别

- url 展示上有区别 hash url具有#，这种方式使用和部署比较简单

- history url看起来更美观，但在部署时需要做处理，web服务器需要做回退处理，否则会出现刷新404问题

- 这两种模式都是通过监听popstate事件触发路由跳转处理，url希纳是不同只是希纳是效果上的差异。

### VUEX 有什么缺点

  - 

  

  
