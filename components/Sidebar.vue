<template>
    <aside :class="`sidebar  ${status_open}`" :style="{height: imageHeight + 'px'}">
        <div class="iconTitle">

        </div>
        <div class="navLinksBox">
            <NavLinks :display="'column'" />
        </div>

        <div class="controlBtn" @click="turnStatus">
            <i class="fas fa-bars" />
        </div>
    </aside>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue-demi'
import NavLinks from '@theme/components/NavLinks'
import { onWindowSizeChange } from '@theme/helpers/vueUtils'

export default defineComponent({
    components: { NavLinks },
    setup() {
        const imageHeight = ref()
        const status_open = ref()

        onMounted(() => {
            imageHeight.value = window.innerHeight
            onWindowSizeChange((meta) => {
                console.log(meta.height)
                imageHeight.value = meta.height
            }, 300)

            // sidebar cache
            status_open.value = localStorage.getItem('sidebar') || 'open'
            

        })

        const turnStatus = () => {
            const cache = localStorage.getItem('sidebar')
            if(cache === 'open') {
                status_open.value = 'close'
                localStorage.setItem('sidebar', 'close')
            } else if (cache === 'close') {
                status_open.value = 'open'
                localStorage.setItem('sidebar', 'open')
            } else {
                status_open.value = 'close'
                localStorage.setItem('sidebar', 'close')
            }
        }

        return {
            imageHeight, status_open, turnStatus
        }
    },
})
</script>


<style lang="stylus" scoped>
@require "../styles/variables.styl"

.sidebar {
    position: fixed;
    width: 84px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8)
    z-index: 100;
    transition:  all 0.3s;


    .iconTitle {
        height: 100px;
    }

    .controlBtn {
        position: absolute;
        top: 10px;
        left: calc(100% + 10px);
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;

        i {
            color: rgba(255, 255, 255, 0.8);
            transition: all 0.3s;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
            
            i {
                color: $gray-50;
            }
        }
    }

}

.open {
    left: 0;
}

.close {
    left: -84px;
}
</style>