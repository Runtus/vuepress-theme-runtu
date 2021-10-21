<template>
<!-- TODO 外层blog的title，description展示 -->
    <div class="runtu-blogContainer">
        {{blogAttr.title}}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup(props, ctx) {
        // console.log()
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
}
</style>