<template>
    <div id="sidebar" :style="{height: `${imageHeight}px`}">
        <!-- TODO 由About配置获取 -->
        <img :style="{height: `${imageHeight * 1.5}px`}" data-depth="0.5" :src="imageUrl" alt="sidebar">
    </div>
</template>

<script>
import { computed, defineComponent, onMounted, getCurrentInstance, ref } from 'vue-demi'
import { onWindowSizeChange } from '@theme/helpers/vueUtils'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy

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
        
        const imageHeight = ref(window.innerHeight)
        onWindowSizeChange((res) => {
            console.log(res.height)
            imageHeight.value = res.height
        })
        


        return {
            imageHeight
        }
    },
    props: ['imageUrl']
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
