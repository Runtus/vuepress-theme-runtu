<template>
    <div class="runtu-half-content">
       <span class="runtu-title">
           {{order.name}}
       </span>
       <div class="runtu-render">
           <div v-for="item in order.render" :key="item.name" class="runtu-render-item" @click="onHref(item.href)">
                <img v-if="item.avatar" :src="item.avatar" alt="avatar" />
                <span>{{item.name}}</span>
           </div>
       </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted } from 'vue-demi'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy

        const order = computed(() => {
            const temp = instance.$page.path
            const order = instance.$themeConfig.topBarConfig.find(item => item.route === temp)
            if(order.friends) {
                order.render = [...order.friends]
                delete order.friends
            }
            else if(temp === '/archive') {
                // const meta = instance.$tags._metaMap;
                // let array = []
                // for(let [key, value] of Object.entries(meta)){
                //     array.push({
                //         name: key,
                //         href: value.path
                //     })
                // }
                // order.render = [...array]
            }
            return order
        })

        // const onHref = ref()

        // const onHref = (url) => {
        //     const a = document.createElement('a')
        //     a.href = url;
        //     a.click();
        //     a.remove();
        // }


        return {
            order, onHref
        }
    },
})

// 由于SSR渲染的缘故，涉及到DOM操作的函数都在外部声明
function onHref(url){
    const a = document.createElement('a')
    a.href = url;
    a.click();
    a.remove();
}
</script>

<style lang="stylus" scoped>
.runtu-half-content {
    padding: 60px 20px;
    width: 50%;
    display: flex;
    flex-direction: column;

    .runtu-title {
        line-height: 1.7;
        color: #403e3e;
        font-size: 30px;
        font-weight: 500;
    }

    .runtu-render {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;

        .runtu-render-item {
            cursor: pointer;
            min-width: 150px;
            height: 80px;
            background-color: rgba(6,129,208,.1);
            margin-right: 20px;
            margin-top: 20px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color, 0.2s;

            &:hover {
                background-color: rgba(6,129,208,.2);
            }

            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin-right: 20px
            }
            
        }
    }

    
}
</style>