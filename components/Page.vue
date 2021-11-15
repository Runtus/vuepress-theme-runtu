<template>
    <div class="runtu-page">
        <div class="runtu-about" v-if="this.$page.path === '/'">
            <SideImage :imageUrl="imageSidebar" class="page-sideimage" />
            <div class="runtu-about-content">
                <section>
                    <Content class="theme-runtu-content" />
                    <div class="go-home animate__animated animate__heartBeat animate__infinite">
                        <span @click="goHome">
                            Get Start
                            <i class="far fa-paper-plane"></i>
                        </span> 
                    </div>
                </section>
            </div>
        </div>

        <div class="runtu-blogs" v-else-if="new RegExp('/blog*').test(this.$page.path)">
            <div class="runtu-pageHeader">
                <Background :imageUrl='imageUrl' id="runtu-background" />
            </div>
            <div class="runtu-pageBody">
                <!-- 自我介绍先不展示 -->
                <!-- <div class="intro" id="runtu-intro">
                    <SelfIntro  />
                </div> -->
                <div class="runtu-blogs-box">
                    <h2 class="header">
                        文章列表
                    </h2>
                    <div class="body">
                        <div v-for="bItem in this.$pagination ? this.$pagination.pages : []" v-bind:key="bItem.key" class="runtu-blog-m">
                            <Blog :blogAttr="bItem" />
                        </div>
                    </div>   
                </div>
                <div class="runtu-bottom">
                    <PageButton 
                    class="runtu-pre"
                    :dire="'left'" 
                    :onClickTurn="paginTurning(this.$pagination ? this.$pagination.prevLink : '')" 
                    v-show="this.$pagination ? this.$pagination.prevLink : ''" 
                    key="pre"/>
                    <PageButton 
                    class="runtu-next"
                    :dire="'right'" 
                    :onClickTurn="paginTurning(this.$pagination ? this.$pagination.nextLink : '')" 
                    v-show="this.$pagination ? this.$pagination.nextLink : ''"
                    key="next"
                    />
                </div>
            </div>
        </div>
        <BlogContent class="runtu-blog-content-outer" v-else />
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted, onUpdated, ref} from 'vue-demi'
import Background from '@theme/components/background.vue'
import Blog from '@theme/components/BlogContainer.vue'
import Header from '@theme/components/Header'
import SideImage from '@theme/components/SidebarImage'
import PageButton from '@theme/components/PageButton'
import BlogContent from '@theme/components/BlogContent'
import SelfIntro from '@theme/components/SelfIntro'
import '@theme/styles/content.styl'


export default defineComponent({
    components: {Background, Blog, Header, SideImage, PageButton, BlogContent, SelfIntro},
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy

        // 为了让子组件调用函数时能够获取link的值，需要返回一个函数，类似柯里化
        const paginTurning = (link) => () => {
            instance.$router.push({ path: link })
        }

        const imageUrl = computed(() => instance.$themeConfig.indexBackground)

        // TODO 这里只是暂时这样放，后期会移植到HalfL模版里
        const imageSidebar = computed(() => instance.$frontmatter ? instance.$frontmatter.imageUrl : '')

        const goHome = () => {
            instance.$router.push({ path: '/blogs/' })
        }

        // TODO 自我介绍先不展示
        // onMounted(() => {
        //     const backDOM = document.getElementById('runtu-background')
        //     const self = document.getElementById('runtu-intro')

        //     onDOMChange((res) => {
        //         const position = window.getComputedStyle(self, null)['position'];

        //         if(res.bottom <= 0 && position === 'absolute') {
        //             self.style.position = 'fixed'
        //             self.style.top = '20px'
        //         } else if ( res.bottom > 0 && position === 'fixed') {
        //             self.style.position = 'absolute'
        //             self.style.top = '20px'
        //         } else {}

        //     }, backDOM)
        // })

        
        return {
            paginTurning,
            imageUrl,
            imageSidebar,
            goHome
        }

    }
})



</script>

<style lang="stylus" scoped>
@require '../styles/variables'
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
                z-index: 2;
                word-wrap: break-word;
                padding-left: 12px;
                padding-right: 12px;
                

               
               .go-home { 
                   display: flex;
                   justify-content: center;
                   margin-top: 36px;
                   font-size: 20px;
                   font-weight: 500;
                   --animate-duration: 16s;
                   --animate-delay: 1s;
                   color: #4C4C4C;

                   span {
                       cursor: pointer;
                        i {
                            margin-left: 4px;
                        }
                   }
                   
               }
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
        position: relative;


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
                width: 640px;

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

    // 媒体查询
    @media screen and (max-width: 600px){
        .runtu-blogs {
            margin-top: 60px;

            #runtu-background {
                display: none;
            }

            .runtu-pageBody {
                
                .runtu-blogs-box {
                    width: 100%; 

                    .body {
                        .runtu-blog-m {
                            width: 90%;    
                        }    
                    }
                }

                .runtu-bottom {
                    width: 400px;    
                }
            }
        }

        .runtu-about {
            .runtu-about-content {
                width: 100%;
            }

            .page-sideimage {
                display: none;
            }
        }


    }
}

// 暗黑模式
.darkmode--activated  {
    section {
        color: #fff;
    }

    .go-home {
        span {
            color: $gray-100;
        }    
    }
}


</style>