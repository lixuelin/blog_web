<template>
  <div>
    <li v-for="(item, index) in list" :key="index" @click="go_to_detail(item)">
      <v-item :item="item">
        <v-title :name="item.name" :time="item.time"></v-title>
        <v-content :cont="item.content"></v-content>
        <v-foot :source="item.source"></v-foot>
      </v-item>
    </li>
  </div>
</template>

<script>
import VItem from "./item.vue";
import VTitle from "./title.vue";
import VContent from "./content.vue";
import VFoot from "./foot.vue";
export default {
  props: {
    list: {
      type: Array
    }
  },
  components: {
    VItem,
    VTitle,
    VContent,
    VFoot
  },
  methods: {
    go_to_detail(item) {
      this.$router.push({name: "article", query: {id: "ddd"}});
    }
  },
};
</script>

<style lang="less" scoped>
li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>