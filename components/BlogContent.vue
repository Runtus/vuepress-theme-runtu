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
        <button class="return-blogs" @click="returnBack">
            <i class="fas fa-arrow-left" />
        </button>
    </div> 
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import { YMDFormat } from '@theme/helpers/timeFormat'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy
        console.log('blog',instance)

        const returnBack = () => {
            instance.$router.push({ path: '/blogs/' })
        }

        return { YMDFormat, returnBack }
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

    .return-blogs {
        position: fixed;
        top: 100px;
        left: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        cursor: pointer;
        border: none;
        
        i {
            font-size: 25px;
            color: #3eaf7c
        }
    }


}
</style>
