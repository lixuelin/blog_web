<template>
  <div class="nav">
    <ul>
      <span class="line" :style="hover_pos"></span>
      <li :class="{active: current === index}" 
      v-for="(item, index) in menu" 
      :key="item.name" 
      @click="change(index)"
      @mouseenter="enter(index)" 
      @mouseout="out(index)">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
    },
  },
  data() {
    return {
      current: 0,
      pos: {
        top: "10px",
      },
    };
  },
  computed: {
    hover_pos() {
      return this.data 
    }
  },
  methods: {
    change(index) {
      this.current = index;
    },
    enter() {
      
    },
    out() {

    }
  },
};
</script>

<style lang="less" scoped>
.nav {
  & ul {
    position: relative;
  }
  & .line {
    position: absolute;
    left: 0px;
    width: 2px;
    height: 50px;
    background: transparent;
  }
  & li {
    padding-left: 20px;
    height: 50px;
    line-height: 50px;
    transition: all 0.2s ease-in-out;
    border-left: 2px solid transparent;
    cursor: pointer;
    &:hover {
      background: #e4e4e4;
      border-left: 2px solid #f04844;
    }

    &.active{
      border-left: 2px solid #f04844;
    }
  }

  & a{
    display: block;
  }
}
</style>
