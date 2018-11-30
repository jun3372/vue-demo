<template>
<div class="app-wrapper">
    <div class="main-container">
        <section class="app-main">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'layout'
};
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
}

.main-container {
    min-height: 100vh;
    transition: margin-left 0.28s;
    margin-left: 256px;
    background-color: #f0f2f5;
}
</style>
