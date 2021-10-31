<template>
    <div id="sidebar" :style="{height: `${imageHeight}px`}">
        <!-- TODO 由About配置获取 -->
        <img :style="{height: `${imageHeight * 1.1}px`}" data-depth="0.5" src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/pixiv12.PNG" alt="sidebar">
    </div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue-demi'

export default defineComponent({
    setup() {
        
        onMounted(() => {
            setTimeout(() => {
                const imageDom = document.getElementById('sidebar')
                const parallaxInstance = new Parallax(imageDom , {
                    limitX: 50,
                    limitY : 50,
                    hoverOnly: true
                })
            });
        })

        const imageHeight = computed(() => window.innerHeight - 60)

        return {
            imageHeight
        }
    },
})
</script>


<style scoped lang="stylus">
#sidebar {
    width: 50%;
    overflow: hidden; 

    img {
        display: block;
        height: 100%;
        margin-left: -50px;
        margin-top: -50px;
    }

    
}
</style>
