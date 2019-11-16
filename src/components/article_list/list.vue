<template>
  <div>
    <li v-for="item in list" :key="item.name">
      <v-item :item="item">
        <v-title :name="item.name" :time="item.time"></v-title>
        <v-content :cont="item.content"></v-content>
        <v-foot :source="item.source"></v-foot>
      </v-item>
    </li>
  </div>
</template>

<script>
import VItem from "@/components/article_list/item.vue";
import VTitle from "@/components/article_list/title.vue";
import VContent from "@/components/article_list/content.vue";
import VFoot from "@/components/article_list/foot.vue";
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
  mounted() {
    console.log(this.list);
  }
};
</script>

<style lang="less" scoped>
li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>