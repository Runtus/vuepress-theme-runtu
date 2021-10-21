<template>
    <div class="runtu-background">
        <!-- TODO mock-data 之后换成自定义图片 -->
        <img src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/backg.png" alt="背景图">
    </div>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
    name: 'Background',
    setup(props, ctx) {

        let testValue = {
            va : 1
        }

        return {
            testValue
        }
    },
})
</script>

<style scoped lang="stylus">
.runtu-background {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>