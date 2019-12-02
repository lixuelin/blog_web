<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
    export default {
        provide () {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>