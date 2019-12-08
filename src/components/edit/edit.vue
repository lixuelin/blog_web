<template>
  <div id="edit"></div>
</template>

<script>
import Edit from "wangeditor";

export default {
  name: "editor",
  mounted() {
    const editor = new Edit("#edit");
    editor.customConfig.onchange = html => {
      this.editorContent = html;
      this.$emit("editor", html);
    };
    editor.create();
  }
};
</script>

<style lang="scss" scoped>
</style>