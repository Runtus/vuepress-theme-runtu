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
        <div class="footer">
            <span>
                ～～～～到底部啦～～～～
            </span>
        </div>
        <button class="return-blogs" @click="returnBack">
            <i class="fas fa-arrow-left" />
        </button>
    </div> 
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted } from 'vue-demi'
import { YMDFormat } from '@theme/helpers/timeFormat'
import hljs from 'highlight.js'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy

        const returnBack = () => {
            instance.$router.go(-1)
        }

        onMounted(() => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        })

        return { YMDFormat, returnBack }
    },
})
</script>

<style scoped lang="stylus">
@require "../styles/variables"
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
        z-index: 1;
        
        i {
            font-size: 25px;
            color: #3eaf7c
        }
    }
    
    .footer {
        display: flex;
        // border: 1px solid black
        justify-content: center;
        margin-top: 36px;

        span {
            opacity: 0.7;
            font-size: 1.1rem;
            color: $gray-600;
            font-weight: 500;
            transition: 0.2s easa;

            &:hover {
                opacity: 1;
            }
        }

        
    }
}

@media screen and (max-width: 600px) {
    .runtu-blog-content {
        width: 80%;

        .return-blogs  {
            left: 12px;
            top: 72px;
            width: 30px;
            height: 30px;

            i {
                font-size: 16px;
            }
        }
    }    
}
</style>
