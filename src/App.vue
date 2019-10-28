<template>
    <div class="main">
        <div class="navs">
            navs 导航菜单
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="footer">
            copyright by fox!
        </div>
    </div>
</template>

<style scoped>
    .navs , .footer{
        text-align: center;
        padding: .5em 0
    }
    .navs{
        border-bottom: 1px solid black;
    }

    .footer{
        border-top: 1px solid black;
    }

</style>