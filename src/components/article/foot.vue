<template>
    <div>
        原文件：<a :href="source" target="_blank">{{source}}</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cont: "test",
                source: "http://www.baiduc.com"
            }
        },
    }
</script>

<style lang="less" scoped>

</style>