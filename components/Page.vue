<template>
    <div class="runtu-page">
        <div class="runtu-pageHeader">
            <Background />
        </div>
        <div class="runtu-blogs">
            <div v-for="bItem in this.$site.pages" v-bind:key="bItem.key" class="runtu-blog-m">
                <Blog :blogAttr="bItem" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/blogContainer.vue'


export default defineComponent({
    components: {Background, Blog},
    setup() {
        
    },
})

</script>

<style lang="stylus" scoped>
.runtu-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .runtu-blogs {
        width: 60%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .runtu-blog-m {
            margin-left: 12px;
            margin-top: 12px;
        }
        
    }
}
</style>