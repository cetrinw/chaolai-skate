<template>
    <div class="home" v-loading="loading" align="center">
        <Row align="top" flex>
            <img src="../assets/home_top.png">
            <h3>朝来板场</h3>
            <p>IN LAIGUANGYING</p>
            <p class="slogan">WECLOME TO CHAOLAI SKATEBOARD PARK</p>
        </Row>
        <Row>
            <router-link to="/about">About</router-link>
        </Row>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {}
    }
</script>
