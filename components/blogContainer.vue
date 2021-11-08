<template>
    <div class="runtu-blogContainer">
        <span class="runtu-title" >
            <span @click="blogClick(blogAttr.path)">{{blogAttr.title}}</span>
        </span>
        <section class="runtu-desc">
            {{blogAttr.frontmatter.description}}
        </section>
        <div class="runtu-blog-bottom">
            <span class="runtu-date">
                <img :src="date_icon" alt="icon-date"/>
            {{formatDate}}
            </span>
            <span class="runtu-readmore" @click="blogClick(blogAttr.path)">
                Read more
                <img :src="right_svg" alt="icon-right">
            </span>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from 'vue-demi'
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

.runtu-blogContainer {
    border-radius: 5px;
    box-shadow: 1px 1px 5px #bfbfbf;
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    transition: transform 0.4s, box-shadow 0.4s;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px)
        box-shadow: 1px 1px 15px #bfbfbf;

    }

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