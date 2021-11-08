<template>
    <div class="runtu-self-intro">
        <div class="avatar">
            <img alt="avatar" :src="render.avatar" />
        </div>
        <span class="title">
            {{render.name}}
        </span>
        <span class="desc">
            {{render.description}}
        </span>
        <div class="links-render" v-for="item in render.links" :key="item.title">
            <!-- <img :src="item.icon" alt="icon">
            <a :href="item.href" target="_blank">{{item.title}}</a> -->
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, onMounted } from 'vue-demi'

export default defineComponent({
    setup() {
        const instance = getCurrentInstance().proxy
        
        const render = computed(() => ({
            avatar: instance.$themeConfig.authorInfo.avatar,
            name: instance.$themeConfig.authorInfo.name,
            description: instance.$themeConfig.authorInfo.description,
            links: [...(instance.$themeConfig.authorInfo.links || [])]
        }))

        return {
            render
        }
    },
})
</script>


<style lang="stylus" scoped>
.runtu-self-intro {
    width: 200px;
    display: flex;
    flex-direction: column;
    color: #222831;

    .title {
        margin-top: 16px;
        font-size: 24px;
        font-weight: 500;
    }
    
    .desc {
        margin-top: 8px;
    }

    .avatar {
        width: 110px;
        height: 110px;
        border-radius: 55px;
        border: 1px solid #cecfd1;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50px;
        }
    }
}
</style>