<template>
    <div class="runtu-page">
        <div class="runtu-about" v-if="this.$page.regularPath === '/'">
            <SideImage />
            <div class="runtu-about-content">
                <section class="runtu-about-content">
                    <Content class="theme-runtu-content" />
                </section>
            </div>
        </div>
        <div class="runtu-blogs" v-else-if="this.$page.regularPath === '/blogs'">
            <div class="runtu-pageHeader">
                <Background />
            </div>
            <div class="runtu-blogs-box">
                <div v-for="bItem in blogs" v-bind:key="bItem.key" class="runtu-blog-m">
                    <Blog :blogAttr="bItem" />
                </div>
            </div>
            
        </div>
        <section class="runtu-content" v-else>
            <Content class="theme-runtu-content" />
        </section>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted } from '@vue/composition-api'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/blogContainer.vue'
import Header from '@theme/components/Header'
import SideImage from '@theme/components/about/sidebarImage'
import '@theme/style/content.styl'


export default defineComponent({
    components: {Background, Blog, Header, SideImage},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy
        // TODO computed返回的值都是Ref包装后的响应值
        const blogs = computed(() => {
            const pages = instance.$site.pages
            console.log(instance)
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

    .runtu-about {
        width: 100%;
        display: flex;

        .runtu-about-content {
            width: 50%;
            display: flex;
            justify-content: center;
            
            .runtu-about-content { 
            }
        }
    }

    .runtu-blogs {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .runtu-blogs-box {
            .runtu-blog-m {
                margin-left: 12px;
                margin-top: 20px;
            }
        }

        
    }
    
    .runtu-content {
        width: 60%;
    }
}

</style>