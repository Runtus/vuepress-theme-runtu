<template>
    <div class="runtu-page">
        <div class="runtu-pageHeader">
            <Background />
        </div>
        <div class="runtu-blogs" v-if="this.$page.regularPath === '/'">
            <div v-for="bItem in blogs" v-bind:key="bItem.key" class="runtu-blog-m">
                <Blog :blogAttr="bItem" />
            </div>
        </div>
        <section class="runtu-content" v-else>
            <Content class="mdContent" />
        </section>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from '@vue/composition-api'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/blogContainer.vue'


export default defineComponent({
    components: {Background, Blog},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy
        // TODO computed返回的值都是Ref包装后的响应值
        const blogs = computed(() => {
            const pages = instance.$site.pages
            return pages.filter(item => item.title)
        })
        
        return {
            blogs
        }

    },
    // mounted(){
    //     console.log(this)
    //     console.log(this.$site)
    // }
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
        justify-content: left;
        flex-wrap: wrap;
        border: 1px solid black;

        .runtu-blog-m {
            margin-left: 12px;
            margin-top: 12px;
        }
    }
    
    .runtu-content {
        width: 60%;
    }
}

</style>