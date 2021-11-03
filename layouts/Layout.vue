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
    font-family: Optima-Regular,Optima,-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;
}

a {
    text-decoration: none
    outline-color: none
    color: #000
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