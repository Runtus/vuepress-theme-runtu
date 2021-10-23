<template>
    <div class="theme-container">
        <Header />
        <Page class="runtu-page"/>
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import Page from '@theme/components/Page.vue'
import Header from '@theme/components/Header.vue'

export default defineComponent({
    // TODO 注册组件
    components: { Page, Header },
    setup(props, ctx) {

    }

})
</script>

<style lang="stylus">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.theme-container {
    position: relative;
    width: 100%;
    .runtu-page {
        // 与Header-bar高度相同
        margin-top: 60px;
    } 
}

</style>