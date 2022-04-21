<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="test1">
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
    </div>
    <div class="test2"></div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'

export default {
    name: 'App',
    components: {
        // HelloWorld
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
