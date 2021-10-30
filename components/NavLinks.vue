<template>
    <div class="runtu-navLinks">
        <div class="runtu-hrefbox" v-for="item in mockLinks" :key="item.name">
            <a href="" >{{item.name}}</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        // TODO mock links
        const mockLinks = [
            {
                name: '主页'
            },
            {
                name: '归档'
            },
            {
                name: '关于我'
            },
            {
                name: '友链'
            }
        ]

        return {
            mockLinks
        }
    },
})
</script>


<style lang="stylus" scoped>
.runtu-navLinks {
    display: flex;
    width: 200px;
    justify-content: space-around;
}
</style>