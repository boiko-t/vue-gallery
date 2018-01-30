<template>
    <article id="app">
        <div class="content">
            <header id="galleryHeader">welcome to viseven <span class="highlighted">imagestock</span></header>
            <image-picker></image-picker>
        </div>
    </article>
</template>

<script>
    import ImagePicker from './components/ImgPicker.vue'

    export default {
        name: 'gallery',
        components: {
            ImagePicker
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import 'assets/style/main.scss';

    #app {
        width: 1024px;
        height: 768px;
        padding: 20px 20px 40px 20px;
        box-sizing: border-box;
        background: #f0f3f6;

    }

    #galleryHeader {
        margin: 0 0 15px 5px;
        color: #8499a7;
        font: 800 24px OpenSans;
        text-transform: uppercase;

        .highlighted {
            color: $blue;
        }
    }

    .content {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .test {
        width: 1500px;
        height: 100px;
        border: 2px red solid;
        margin: 5px;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 7px;
    }

    ::-webkit-scrollbar-track {
        background: #d1dae3;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-button {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        background: $blue;
        border-radius: 10px;
    }
</style>
