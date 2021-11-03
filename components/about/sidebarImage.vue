<template>
    <div id="sidebar" :style="{height: `${imageHeight}px`}">
        <!-- TODO 由About配置获取 -->
        <img :style="{height: `${imageHeight * 1.5}px`}" data-depth="0.5" :src="imageUrl" alt="sidebar">
    </div>
</template>

<script>
import { computed, defineComponent, onMounted, getCurrentInstance } from 'vue-demi'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy



        console.log('about',instance)
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
        const imageUrl = computed(() => instance.$page.frontmatter.imageUrl)

        return {
            imageHeight, imageUrl
        }
    },
})
</script>


<style scoped lang="stylus">
#sidebar {
    width: 50%;
    overflow: hidden; 

// TODO 图片自适应
    img {
        display: block;
        height: 100%;
        margin-top: -200px;
        margin-left: -100px;
    }

    
}
</style>
