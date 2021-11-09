<template>
    <header class="runtu-header" ref="headerRef">
        <div class="runtu-intro" @click="turnHome()">
            <img :src="avatar" alt="avatar">
            <!-- TODO 博客名称配置 -->
            <span>Runtus</span>
        </div>
        <!-- TODO 选项配置，不过这个可以放在后面自定义 -->
        <div class="runtu-navLinksBox">
            <NavLinks />
            <!-- TODO searchbox 后续增加 -->
            <!-- <SearchBox class="searchBox" /> -->
        </div>
    </header>
</template>

<script>
import { defineComponent, onMounted, ref, getCurrentInstance, computed } from 'vue-demi'
import { eventScrollInject } from '@theme/helpers/vueUtils'
import SearchBox from '@SearchBox'
import NavLinks from '@theme/components/NavLinks'

export default defineComponent({
    components: {NavLinks, SearchBox},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy
        const headerRef = ref(null)
        onMounted(() => {
            eventScrollInject(headerRef.value, 300, 300)
        })

        const avatar = computed(() => {
            const href = instance.$themeConfig.avatar
            return href
        })

        const turnHome = () => {
            // 回到主页
            instance.$router.push({
                path: '/blogs/'
            })            
        }

        return {
            headerRef, avatar, turnHome
        }
    },
})
</script>

<style lang="stylus" scoped>
.runtu-header {
    min-width: 800px;
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
    border-bottom: 1px solid rgba(0,0,0,0.1)

    .runtu-intro {
        cursor: pointer;
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

        .searchBox {
            margin-left: 48px;
        }
    }



    
}

@media screen and (max-width:600px) {
    .runtu-header {
        min-width: 300px;
        width: 100%;
        max-width: 600px;
    }

}

</style>