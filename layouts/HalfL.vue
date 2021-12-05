<template>
    <div class="HalfLayout">
        <Sidebar />
        <HalfPage />
    </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import Header from '@theme/components/Header'
import HalfPage from '@theme/components/HalfPage'
import Sidebar from '@theme/components/Sidebar'

export default defineComponent({
    components: {Header, HalfPage, Sidebar},
    setup() {
        
    }
})
</script>


<style lang="stylus">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Optima-Regular,Optima,-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;
}
</style>