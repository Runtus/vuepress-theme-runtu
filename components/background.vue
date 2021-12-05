<template>
    <div class="runtu-background" id="runtu-background" :style="{height: height + 'px'}">
        <!-- TODO mock-data 之后换成自定义图片 -->
        <img data-depth="0.5" :src="imageUrl" alt="背景图">
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue-demi'
import { onWindowSizeChange } from '@theme/helpers/vueUtils'

export default defineComponent({
    name: 'Background',
    setup(props, ctx) {
        const height = ref(0)
        // 渲染图片
        onMounted(() => {
            const imageDom = document.getElementById('runtu-background')
            const parallaxInstance = new Parallax(imageDom, {
                limitX: 70,
                limitY: 70,
                hoverOnly: true
            })

            height.value = window.innerHeight
            onWindowSizeChange((meta) => {
                height.value = meta.height
            }, 500)
        })

        return {
            height
        }
    },
    props: ['imageUrl']
})
</script>

<style scoped lang="stylus">
.runtu-background {
    width: 100%;
    z-index: 1;
    overflow: hidden
    
    img {
        width: 110%;
        height: 110%;
        // TODO 这个css属性去看下 好东西
        object-fit: cover;
        margin-left: -50px;
        margin-top: -50px;
    }
}
</style>