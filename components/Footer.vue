<template>
    <footer>
        <div class="line-1">
            <!-- TODO 设置 -->
            Copyrights © {{this.$themeConfig.footer.date}} {{this.$themeConfig.footer.author}}
        </div>
        <a href="https://beian.miit.gov.cn/" target="_blank">
            <p>{{this.$themeConfig.footer.ICP}}</p>
        </a>
    </footer>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="stylus" scoped>
@require '../styles/variables.styl'
footer {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-top: 1px solid $gray-200;

    .line-1 {
        margin-bottom: 10px;
        color: $gray-600;
        font-weight: 500;
        font-size: 1.1rem;
    }
}
</style>