<template>
    <div class="runtu-navLinks" :style="{flexDirection: display || 'row'}">
        <div class="runtu-hrefbox" v-for="item in links" :key="item.name" @click="turn(item.route)">
            <span>{{item.name}}</span>
            <div />
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted, ref } from 'vue-demi'

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

        const turn = (link) => {
            instance.$router.push({
                path: link
            }).catch(err => {})
        }

        return {
            links, turn
        }
    },
    props: ['display'],
})
</script>


<style lang="stylus" scoped>
@require '../styles/variables.styl'

.runtu-navLinks {
    z-index: 1;
    cursor: pointer;
    display: flex;
    height: 200px;
    justify-content: space-around;
    align-items: center;

    .runtu-hrefbox {
        span {
            font-weight: 500;
            color: $gray-400; 
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

.darkmode--activated {
    .runtu-hrefbox {
        span {
            color: $gray-50;
        }
    }

}
</style>