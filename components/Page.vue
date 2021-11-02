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
        <div class="runtu-blogs" v-else-if="new RegExp('/blog*').test(this.$page.regularPath)">
            <div class="runtu-pageHeader">
                <Background />
            </div>
            <div class="runtu-blogs-box">
                <div v-for="bItem in blogs" v-bind:key="bItem.key" class="runtu-blog-m">
                    <Blog :blogAttr="bItem" />
                </div>
            </div>
            <div class="runtu-bottom">
                <PageButton :dire="'left'" v-if="preLink" :onClickTurn="paginTurning(preLink)" />
                <PageButton :dire="'right'" v-if="nextLink" :onClickTurn="paginTurning(nextLink)" />
            </div>
        </div>
        <section class="runtu-content" v-else>
            <Content class="theme-runtu-content" />
        </section>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance} from '@vue/composition-api'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/blogContainer.vue'
import Header from '@theme/components/Header'
import SideImage from '@theme/components/about/sidebarImage'
import PageButton from '@theme/components/PageButton'
import '@theme/style/content.styl'


export default defineComponent({
    components: {Background, Blog, Header, SideImage, PageButton},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy
        // TODO computed返回的值都是Ref包装后的响应值\
        console.log(instance)

        const blogs = computed(() => instance.$pagination.pages)
        const nextLink = computed(() => instance.$pagination.nextLink)
        const preLink = computed(() => instance.$pagination.prevLink)

        // 为了让子组件调用函数时能够获取link的值，需要返回一个函数，类似柯里化
        const paginTurning = (link) => () => {
            instance.$router.push({ path: link })
        }

        
        return {
            blogs, nextLink, preLink, paginTurning
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .runtu-blogs-box {
            .runtu-blog-m {
                margin-left: 12px;
                margin-top: 20px;
            }
        }

        .runtu-bottom {
            display: flex;
        }

        
    }
    
    .runtu-content {
        width: 60%;
    }
}

</style>