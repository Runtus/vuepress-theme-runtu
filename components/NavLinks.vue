<template>
    <div class="runtu-navLinks">
        <div class="runtu-hrefbox" v-for="item in links" :key="item.name">
            <a :href="item.route" >{{item.name}}</a>
            <div />
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from '@vue/composition-api'

// 缺省config
const mockLinks = [
    {
        name: '主页',
        route: '/blogs'
    },
    {
        name: '归档',
        route: '/archive'
    },
    {
        name: '关于',
        route: '/'
    },
    {
        name: '友链',
        route: '/friend'
    }
]


export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy
        const links = computed(() => {
            const temp = instance.$themeConfig.topBarConfig || mockLinks
            return temp
        })


        return {
            links
        }
    },
})
</script>


<style lang="stylus" scoped>

.runtu-navLinks {
    display: flex;
    width: 200px;
    justify-content: space-around;

    .runtu-hrefbox {
        a {
            font-weight: 500;
            color: #2c3e50; 
        }

        div {
            height: 1px;
            width: 0;
            border-bottom: 2px solid #1890ff;
            transition: width 0.2s ease-out; 
            margin: 0 auto;
        }

        &:hover {
            div {
                width: 100%;
            }
        }


    }


}
</style>