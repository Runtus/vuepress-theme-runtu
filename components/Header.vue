<template>
    <header class="runtu-header">
        <div class="runtu-intro">
            <img src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/vuepress/avatar.png" alt="avatar">
            <!-- TODO 博客名称配置 -->
            <span>Runtus</span>
        </div>
        <!-- TODO 选项配置，不过这个可以放在后面自定义 -->
    </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup(props, ctx) {
        
    },
})
</script>

<style lang="stylus" scoped>
.runtu-header {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: white;
    display: flex;
    height: 80px;
    align-content: center;
    padding-left: 24px;

    .runtu-intro {

        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }

        span {
            margin-left: 12px;
            font-size: 20px;
        }
    }
}
</style>