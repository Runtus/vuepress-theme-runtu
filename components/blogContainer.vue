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
                <i class="date-icon fas fa-calendar" />
                {{formatDate}}
            </span>
            <span class="runtu-readmore" @click="blogClick(blogAttr.path)">
                Read more
                <i class="fas fa-angle-right" />
            </span>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from 'vue-demi'
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
@require "../styles/variables.styl"

.runtu-blogContainer {
    isolation: isolate;
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
                color: $gray-500;

                .date-icon {
                    width: 1.1rem;
                    height: 1.1rem;
                    margin-right: 4px;
                }
            }

            .runtu-readmore {
                cursor: pointer;
                display: flex;
                align-items: center;
                color: $gray-500;
                transition: 0.5s color;


                i {
                    font-size: 1.1rem;
                    margin-left: 4px;
                }
            }

            .runtu-readmore:hover {
                color: #69c0ff;
            }
    }


    
}

    // 媒体查询
@media screen and (max-width: 600px){
    .runtu-blogContainer {
        width: 100%;
    }
}

.darkmode--activated {

    .runtu-blogContainer {
        box-shadow: 1px 1px 5px $gray-200;
    }

    .runtu-date {
        color: black !important;
    }

    .runtu-readmore {
        color: black !important;
    }
}
</style>