<template>
    <article id="app">
        <div class="content">
            <header id="galleryHeader">welcome to viseven <span class="highlighted">imagestock</span></header>
            <div class="images-wrapper">
                <img v-for="item in images" :src="item" alt="">
                <image-picker @addUploadedImage="addUploadedImage"></image-picker>
            </div>
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
            return {
                images: []
            }
        },
        methods: {
            addUploadedImage: function(image){
                this.images.push(image);
            }
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

    img {
        width: 100px;
        height: 100px;
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
