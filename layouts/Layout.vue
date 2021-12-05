<template>
    <div class="theme-container">
        <!-- <Header /> -->
        <Sidebar />
        <Page class="page-container"/>
        <Footer />
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar'
import Footer from '@theme/components/Footer.vue'

export default defineComponent({
    // TODO 注册组件
    components: { Page, Footer, Sidebar },
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
}

.theme-container {
    position: relative;
    width: 100%;
    .page-container {

    } 


}

</style>