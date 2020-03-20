<template>
  <div class="nav">
    <ul>
      <span class="line" :style="hover_pos"></span>
      <li
        :class="{ active: current === index }"
        v-for="(item, index) in menu"
        :key="item.name"
        @click="change(index)"
        @mouseenter="enter(index)"
        @mouseout="out(index)"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
        <!-- <div v-if="item.children" v-show="current === index">
          <item :tree="item.children"></item>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      current: 0,
      pos: {
        top: "10px"
      },
      menu: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Vue",
          path: "/vue"
        },
        {
          name: "Node",
          path: "/node"
        },
        {
          name: "About",
          path: "/about"
        }
      ]
    };
  },
  computed: {
    hover_pos() {
      return this.data;
    }
  },
  methods: {
    change(index) {
      this.current = index;
    },
    enter() {},
    out() {}
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/common.less");
</style>
