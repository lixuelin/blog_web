<template>
    <div class="vside">
        <sidebar v-model="activeKey">
            <sidebar-item title="标签名称" />
            <sidebar-item title="标签名称" />
            <sidebar-item title="标签名称" />
        </sidebar>
    </div>
</template>

<script>
    import { Sidebar, SidebarItem } from 'vant';
    export default {
        data() {
            return {
                activeKey: 0
            }
        },
        components: {
            Sidebar,
            SidebarItem
        }
    }
</script>

<style lang="scss" scoped>

</style>