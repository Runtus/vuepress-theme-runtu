<template>
    <div class="runtu-button" @click="onClickTurn">
        <div v-if="dire === 'right'" class="runtu-nextpage">
            Next
            <i class="fas fa-chevron-right"></i>
        </div>
        <div v-else class="runtu-prepage">
            <i class="fas fa-chevron-left"></i>
            Left
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
    setup() {
        
    },
    props: ['dire', 'onClickTurn']
})
</script>

<style lang="stylus" scoped>
.runtu-button {
    div {
        cursor: pointer;
        padding-left: 4px;
        padding-right: 4px;
        width: 60px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #8c8c8c;
        
        i {
            color: #d9d9d9;
        }
    }
}
</style>
