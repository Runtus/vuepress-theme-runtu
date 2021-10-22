<template>
<!-- TODO 外层blog的title，description展示 -->
    <div class="runtu-blogContainer" @click="blogClick(blogAttr.regularPath)">
        {{blogAttr.title}}
        {{blogAttr.frontmatter}}
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from '@vue/composition-api'

export default defineComponent({
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const blogClick = (key) => {
            instance.$router.push({ path: key })
        }

        return {
            blogClick
        }
    },
    /**
     * {
     *    title: string,
     *    regularPath: string,
     *    key: string,
     *    path: string
     * }   
     */
    props: ['blogAttr']
})


</script>

<style lang="stylus" scoped>
.runtu-blogContainer {
    width: 300px;
    height: 150px;
    border: 1px solid black;
    cursor: pointer;
}
</style>