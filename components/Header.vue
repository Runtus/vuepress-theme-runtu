<template>
    <header class="runtu-header" ref="headerRef">
        <div class="runtu-intro">
            <img :src="avatar" alt="avatar">
            <!-- TODO 博客名称配置 -->
            <span>Runtus</span>
        </div>
        <!-- TODO 选项配置，不过这个可以放在后面自定义 -->
        <div class="runtu-navLinksBox">
            <NavLinks />
        </div>
    </header>
</template>

<script>
import { defineComponent, onMounted, ref, getCurrentInstance, computed } from '@vue/composition-api'
import { eventScrollInject } from '@theme/helpers/topbarScroll'
import NavLinks from '@theme/components/NavLinks'

export default defineComponent({
    components: {NavLinks},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy
        const headerRef = ref(null)
        onMounted(() => {
            console.log(headerRef.value)
            eventScrollInject(headerRef.value, 300, 300)
        })
        console.log(instance.$themeConfig)

        const avatar = computed(() => {
            const href = instance.$themeConfig.avatar
            return href
        })
        return {
            headerRef, avatar
        }
    },
})
</script>

<style lang="stylus" scoped>
.runtu-header {
    z-index: 100;
    transition: top 0.3s ;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-content: center;
    padding-left: 24px;

    .runtu-intro {

        display: flex;
        align-items: center;

        img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }

        span {
            margin-left: 12px;
            font-size: 20px;
        }
    }

    .runtu-navLinksBox {
        display: flex;
        align-items: center;
        margin-right: 36px;
    }
}

</style>