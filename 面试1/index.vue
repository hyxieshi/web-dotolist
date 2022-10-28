<template>
  <form>
    name<input type="text" v-model="name" /> pass<input
      type="pass"
      v-model="pass"
    />
    pass<input type="pass" v-model="pas" />
    <button onclick="click"></button>
  </form>
  <!-- 工程化 构建 工具 性能 数据响应式 组合api ----vue3/2 区别 -->
  <!-- 性能优化 webpack  vue优化-->
  <!-- 项目 亮点 性能优化 准备 -->
  <!-- 网络（请求url）-->
  <!-- 自我介绍  -->

  <!-- 面试题  八股文 -->
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: "",
      pas: "",
    };
  },
  metobds: {
    async click() {
      if (this.name && this.pass && this.pas) {
        if (this.pas === this.pass) {
          let config = {
            name: this.name,
            pass: this.pass,
          };
          let a = await axios.post("../", config);
        }
      }
    },
  },
};
</script>
