<template>
    <div class="runtu-blogContainer">
        <span class="runtu-title" >
            <span @click="blogClick(blogAttr.regularPath)">{{blogAttr.title}}</span>
        </span>
        <section class="runtu-desc">
            {{blogAttr.frontmatter.description}}
        </section>
        <div class="runtu-blog-bottom">
            <span class="runtu-date">
                <img :src="date_icon" alt="icon-date"/>
            {{formatDate}}
            </span>
            <span class="runtu-readmore" @click="blogClick(blogAttr.regularPath)">
                Read more
                <img :src="right_svg" alt="icon-right">
            </span>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from '@vue/composition-api'
import date_icon from '@theme/icons/date.png'
import right_icon from '@theme/icons/right.png'
import right_svg from '@theme/icons/right.svg'
import { YMDFormat } from '@theme/helpers/timeFormat' 

export default defineComponent({
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const blogClick = (key) => {
            instance.$router.push({ path: key })
        }


        const formatDate = computed(() => YMDFormat(props.blogAttr.frontmatter.date))

        return {
            blogClick, 
            formatDate, 
            date_icon, 
            right_icon,
            right_svg
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
* {
    font-family: Optima-Regular,Optima,-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;
}

.runtu-blogContainer {
    box-shadow: 1px 1px 5px #8c8c8c;
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 12px 16px;

    .runtu-title {
        font-weight: 600;
        font-size: 1.4rem;
        color: #4c4c57;
        
        span {
            cursor: pointer;
        }

    }

    .runtu-desc {
        margin-top: 12px;
        word-wrap: break-word;
        font-size: 1rem;
        line-height: 2;
        color: #50505c;
    }

    .runtu-blog-bottom {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        .runtu-date {
                display: flex;
                align-items: center;
                color: #808091;

                img {
                    width: 1.1rem;
                    height: 1.1rem;
                    margin-right: 4px;
                }
            }

            .runtu-readmore {
                cursor: pointer;
                display: flex;
                align-items: center;
                color: #808091;
                transition: 0.5s color;


                img {
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-left: 4px;
                }
            }

            .runtu-readmore:hover {
                color: #69c0ff;
            }
    }

    
}
</style>