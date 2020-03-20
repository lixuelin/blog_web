<template>
  <div class="article">
    <header class="article-header">
      <h1>{{ title }}</h1>
    </header>
    <article class="article-main">
      <div>
        <template v-for="item in content">
          <p :key="item">{{ item }}</p>
        </template>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "做了这么久的程序员，你知道为什么会有Lambda表达式吗？",
      content: [
        "Java8有一些新的特性，今天老顾给大家分享一下关于Lambda表达式的由来，一开始感觉Lambda可读性蛮差的，不知道为什么Java8会出来这个表达式？既然大佬们推出来，肯定是有原因的，应该是为了解决一些问题，那我们就看看解决了什么问题？",
        "上面的伪代码，是不是很简单，写一个方法，直接过滤出苏州地区的学生。",
        "这样是不是就解决了，所有地区的查询问题，把地区作为一个参数。"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  &-header {
    width: 100%;
    & h1 {
      padding: 10px 15px;
      font-size: 20px;
      text-align: center;
    }
  }

  &-main {
    width: 100%;
    & p {
      margin-bottom: 10px;
      line-height: 160%;
      text-indent: 24px;
    }
  }
}
</style>
