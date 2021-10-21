<template>
    <div class="theme-container">
        <Page />
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import Page from '@theme/components/Page.vue'

export default defineComponent({
    // TODO 注册组件
    components: { Page },
    setup(props, ctx) {
        
    }

})
</script>

<style lang="stylus">
* {
    margin: 0;
    padding: 0;
}
</style>