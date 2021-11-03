<template>
    <div class="runtu-background" id="runtu-background">
        <!-- TODO mock-data 之后换成自定义图片 -->
        <img data-depth="0.5" :src="imageUrl" alt="背景图">
    </div>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
    name: 'Background',
    setup(props, ctx) {
        console.log(props)
        // 渲染图片
        setTimeout(() => {
            const imageDom = document.getElementById('runtu-background')
            const parallaxInstance = new Parallax(imageDom, {
                limitX: 70,
                limitY: 70,
                hoverOnly: true
            })
        })
    },
    props: ['imageUrl']
})
</script>

<style scoped lang="stylus">
.runtu-background {
    width: 100%;
    max-height: 400px;
    overflow: hidden;
    
    img {
        width: 110%;
        height: 100%;
        margin-left: -70px;
        margin-top: -200px;
    }
}
</style>