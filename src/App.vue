<template>
    <div class="main">
        <div class="navs">
            <a-menu mode="horizontal" theme="dark">
                <a-menu-item>
                    <router-link to="/home">HOME</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/team">TEAM</router-link>
                </a-menu-item>
                <a-menu-item>
                    PHOTO
                </a-menu-item>
                <a-menu-item>
                    TARGET
                </a-menu-item>
            </a-menu>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="footer">
            copyright by fox!
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .footer {
        border-top: 1px solid black;
        text-align: center;
    }
    .navs{
        align-items: center;
    }
    .navs .ant-menu.ant-menu-horizontal.ant-menu-root.ant-menu-dark{
        font-size: 25px;
        text-align: center;
    }
    .navs .ant-menu.ant-menu-item{
        min-width:25px
    }
</style>