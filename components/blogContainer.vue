<template>
<!-- TODO 外层blog的title，description展示 -->
    <div class="runtu-blogContainer" @click="blogClick(blogAttr.regularPath)">
        <span class="runtu-title">
            {{blogAttr.title}}
        </span>
        <span class="runtu-date">
            {{formatDate}}
        </span>
        <section class="runtu-desc">
            {{blogAttr.frontmatter.description}}
        </section>
        <!-- {{blogAttr.frontmatter}} -->
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from '@vue/composition-api'
import { YMDFormat } from '@theme/helpers/timeFormat' 

export default defineComponent({
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const blogClick = (key) => {
            instance.$router.push({ path: key })
        }

        const formatDate = computed(() => YMDFormat(props.blogAttr.frontmatter.date))

        return {
            blogClick, formatDate
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
    width: 600px;
    height: 150px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}
</style>