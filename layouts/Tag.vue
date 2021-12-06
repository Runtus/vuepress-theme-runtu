<template>
    <div class="Tag">
        <Sidebar />
        <div class="archive-title">
            #{{this.$currentTag ? this.$currentTag.key : ''}}
        </div>
        <div class="time-line">
            <div class="text-node" v-for="item in (this.$pagination ? this.$pagination.pages : [])" :key="item.key">
                <div class="archive-metaInfo">
                    <span class="time" @click="turnPage(item.path)">
                        {{YMDFormat(item.frontmatter ? item.frontmatter.date : '', '/')}}
                    </span>
                    <span class="title" @click="turnPage(item.path)">
                        {{item.frontmatter ? item.frontmatter.title : ''}}
                    </span>
                </div>
                <div class="archive-tag">
                    <i class="fas fa-tag" />
                    <span>
                        {{item.frontmatter ? item.frontmatter.tags : ''}}
                    </span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import { YMDFormat } from '@theme/helpers/timeFormat.js'
import Sidebar from '@theme/components/Sidebar'
import Footer from '@theme/components/Footer'

export default defineComponent({
    components: { Sidebar, Footer },
    setup() {
        const instance = getCurrentInstance().proxy;

        const turnPage = (href) => {
            instance.$router.push({path: href})
        }

        return {
            YMDFormat, turnPage
        }
    },
})



</script>

<style lang="stylus" scoped>
@require "../styles/variables.styl"

.archive-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 7rem;
    padding-top: 2rem;

}

.time-line {
    margin-top: 2rem;
    margin-left: 8rem;
    border-left: 0.1rem dashed #999;
    padding-left: 2rem;

    .text-node {
        margin-top: 32px;
        
        .archive-metaInfo {

            .time {
                cursor: pointer;
                color: $gray-500;
                font-size: 0.9rem;
                position: relative;

                &::before {
                    box-sizing: border-box;
                    position: absolute;
                    content: '';
                    width: 12px;
                    height: 8px;
                    left: calc(-2rem - 7px);
                    top: 2px;
                    border-radius: 4px;
                    background-color: #999;
                }
            }

            .title {
                cursor: pointer;
                margin-left: 16px;
                font-size: 1.2rem;
                font-weight: 500;
                color: $blue-500;
            }


        }

        .archive-tag {
            margin-top: 8px;

            i {
                font-size: 0.8rem;
                color: $gray-600;
            }

            span {
                display: inline-block;
                box-sizing: border-box;
                font-size: 0.9rem;
                background-color: $gray-600;
                color: white;
                padding: 2px 8px;
                border-radius: 10px;
            }
        }
    }
}
</style>