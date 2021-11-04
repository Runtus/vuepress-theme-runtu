<template>
    <div class="runtu-blog-content">
        <span class="title">
            {{this.$frontmatter.title}}
        </span>
        <div class="page-meta">
            <span class="page-time">
                <i class="fas fa-calendar"></i>
                {{YMDFormat(this.$frontmatter.date)}}
            </span>
        </div>
        <section class="runtu-content" >
            <Content class="theme-runtu-content" />
        </section>
    </div> 
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import { YMDFormat } from '@theme/helpers/timeFormat'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy
        console.log('blog',instance)

        return { YMDFormat }
    },
})
</script>

<style scoped lang="stylus">
.runtu-blog-content {
    width: 60%;

    .title {
        font-size: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        margin-top: 40px;
        color: #403e3e;
        margin-bottom: 2rem;
        
        &::after {
            margin-top: 12px;
            content: '';
            height: 2px;
            width: 20%;
            border-bottom: 2px dashed #cce5ff;
            
        }
    }

    .page-meta {
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #efefef;

        .page-time {
            color: #5c6b72;
        }
    }


}
</style>
