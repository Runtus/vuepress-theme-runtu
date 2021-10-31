<template>
    <div class="runtu-about-layout">
        <Header />
        <div class="runtu-about-body">
            <SideImage />
            <div class="runtu-about-content">
                <section>
                    <Content />
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import Header from '@theme/components/Header'
import SideImage from '@theme/components/about/sidebarImage'

export default defineComponent({
    components: { Header, SideImage },
    setup() {
        
    },
})

</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
