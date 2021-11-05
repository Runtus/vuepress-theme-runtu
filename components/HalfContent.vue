<template>
    <div class="runtu-half-content">
       <span class="runtu-title">
           {{order.name}}
       </span>
       <div class="runtu-render">
           <div v-for="item in order.render" :key="item.name" class="runtu-render-item">
                =
           </div>
       </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted } from 'vue-demi'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy
        let render, title

        const order = computed(() => {
            const temp = instance.$page.path
            const order = instance.$themeConfig.topBarConfig.find(item => item.route === temp)
            if(order.friends) {
                order.render = [...order.friends]
                delete order.friends
            }
            else if(temp === '/archive') {
                const meta = instance.$frontmatterKey._metaMap;
                let array = []
                for(let [key, value] of Object.entries(meta)){
                    array.push({
                        name: key,
                        href: value.path
                    })
                }
                order.render = [...array]
            }
            return order
        })

        return {
            order
        }
    },
})
</script>

<style lang="stylus" scoped>
.runtu-half-content {
    display: flex;
    justify-content: left;
}
</style>