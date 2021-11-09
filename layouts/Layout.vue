<template>
    <div class="theme-container">
        <Header />
        <Page class="page-container"/>
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
    font-family:fa5-proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
}

a {
    text-decoration: none
    outline-color: none
    color: #000
}

.theme-container {
    position: relative;
    width: 100%;
    .page-container {

    } 


}

</style>