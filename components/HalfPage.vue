<template>
    <div class="runtu-halfpage">
        <SidebarImage :imageUrl="imageUrl" class="halfpage-sidebar-image" />
        <HalfContent />
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from 'vue-demi'
import SidebarImage from '@theme/components/SidebarImage'
import HalfContent from '@theme/components/HalfContent'

export default defineComponent({
    components: { SidebarImage, HalfContent },
    setup() {
        const instance = getCurrentInstance().proxy
        console.log('half',instance)
        const imageUrl = computed(() => {
            const path = instance.$page.path
            return instance.$themeConfig.topBarConfig.find(item => item.route === path).image
        })

        return {
            imageUrl
        }
    },
})
</script>

<style lang="stylus" scoped>
.runtu-halfpage {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 600px) {
        .halfpage-sidebar-image {
            display: none;
        }    
    }

}
</style>