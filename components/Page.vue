<template>
    <div class="runtu-page">
        <div class="runtu-about" v-if="this.$page.path === '/'">
            <SideImage />
            <div class="runtu-about-content">
                <section class="runtu-about-content">
                    <Content class="theme-runtu-content" />
                </section>
            </div>
        </div>
        <div class="runtu-blogs" v-else-if="new RegExp('/blog*').test(this.$page.path)">
            <div class="runtu-pageHeader">
                <Background />
            </div>
            <div class="runtu-blogs-box">
                <div v-for="bItem in blogs" v-bind:key="bItem.key" class="runtu-blog-m">
                    <Blog :blogAttr="bItem" />
                </div>
            </div>
            <div class="runtu-bottom">
                <PageButton 
                class="runtu-pre"
                :dire="'left'" 
                :onClickTurn="paginTurning(preLink)" 
                v-show="preLink" 
                key="pre"/>
                <PageButton 
                class="runtu-next"
                :dire="'right'" 
                :onClickTurn="paginTurning(nextLink)" 
                v-show="nextLink"
                key="next"
                />
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
        let blogs, nextLink, preLink
        console.log(instance)

        // 非博客展示页 instance.$pagination 为 null
        try {
            blogs = computed(() => instance.$pagination.pages)
            nextLink = computed(() => instance.$pagination.nextLink)
            preLink = computed(() => instance.$pagination.prevLink)
        } catch(err) {
            
        }

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
    padding-bottom: 20px;

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
                margin-top: 60px;
            }
        }

        .runtu-bottom { 
            margin-top: 24px;
            position: relative;
            width: 600px;
            height: 30px;

            .runtu-pre {
                position: absolute;
                left: 0;
            }
            
            .runtu-next {
                position: absolute;
                right: 0;
            }
        }

        
    }
    
    .runtu-content {
        width: 60%;
    }
}

</style>