<template>
    <div class="runtu-page">
        <div class="runtu-about" v-if="this.$page.path === '/'">
            <SideImage :imageUrl="imageSidebar" />
            <div class="runtu-about-content">
                <section>
                    <Content class="theme-runtu-content" />
                </section>
            </div>
        </div>

        <div class="runtu-blogs" v-else-if="new RegExp('/blog*').test(this.$page.path)">
            <div class="runtu-pageHeader">
                <Background :imageUrl='imageUrl' id="runtu-background" />
            </div>
            <div class="runtu-pageBody">
                <div class="intro" id="runtu-intro">
                    <SelfIntro  />
                </div>
                <div class="runtu-blogs-box">
                    <h2 class="header">
                        文章列表
                    </h2>
                    <div class="body">
                        <div v-for="bItem in blogs" v-bind:key="bItem.key" class="runtu-blog-m">
                            <Blog :blogAttr="bItem" />
                        </div>
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
        </div>
        <BlogContent class="runtu-blog-content-outer" v-else />
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted, ref} from '@vue/composition-api'
import { onDOMChange } from '@theme/helpers/vueUtils'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/BlogContainer.vue'
import Header from '@theme/components/Header'
import SideImage from '@theme/components/SidebarImage'
import PageButton from '@theme/components/PageButton'
import BlogContent from '@theme/components/BlogContent'
import SelfIntro from '@theme/components/SelfIntro'
import '@theme/style/content.styl'


export default defineComponent({
    components: {Background, Blog, Header, SideImage, PageButton, BlogContent, SelfIntro},
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

        const imageUrl = computed(() => instance.$themeConfig.indexBackground)

        // TODO 这里只是暂时这样放，后期会移植到HalfL模版里
        const imageSidebar = computed(() => instance.$frontmatter ? instance.$frontmatter.imageUrl : '')

        onMounted(() => {
            const backDOM = document.getElementById('runtu-background')
            console.log('backDom',backDOM)
            const self = document.getElementById('runtu-intro')

            onDOMChange((res) => {
                const position = window.getComputedStyle(self, null)['position'];

                if(res.bottom <= 0 && position === 'absolute') {
                    self.style.position = 'fixed'
                    self.style.top = '20px'
                } else if ( res.bottom > 0 && position === 'fixed') {
                    self.style.position = 'absolute'
                    self.style.top = '20px'
                } else {}

            }, backDOM)
        })

        
        return {
            blogs,
            nextLink,
            preLink,
            paginTurning,
            imageUrl,
            imageSidebar,
        }

    }
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
            margin-top: 60px;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            
            
            section { 
               
            }
        }
    }


    .runtu-blogs {
        padding-bottom: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;


        .runtu-pageBody {
            
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .intro {
                position: absolute;
                top: 20px;
                left: 5%;
            }

            .runtu-blogs-box {
                width: 640px;;

                .header {
                    font-size: Roboto, system-ui,PingFang SC,STHeiti,sans-serif;
                    padding: 20px 0 20px 20px;
                    border-bottom: 1px solid #D8D8D8;
                }

                .body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }


                .runtu-blog-m{
                    margin-top: 60px;
                    
                    &:first-child {
                        margin-top: 28px;
                    }
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


        
    }
    
    .runtu-blog-content-outer {
        margin-top: 60px;
    }
    .runtu-content {
        width: 60%;
    }
}

</style>