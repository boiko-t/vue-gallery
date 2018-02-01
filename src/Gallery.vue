<template>
    <article id="app">
        <div class="content">
            <header id="galleryHeader">welcome to viseven <span class="highlighted">imagestock</span></header>
            <div class="images-wrapper">
                <gallery-item-preview v-for="id in imagesIdCollection" :key="id" :id="id"></gallery-item-preview>
                <image-picker></image-picker>
            </div>
        </div>
    </article>
</template>

<script>
    import ImagePicker from './components/ImgPicker.vue'
    import GalleryItemPreview from './components/GalleryItemPreview.vue'

    export default {
        name: 'gallery',
        components: {
            ImagePicker, GalleryItemPreview
        },
        data () {
            return {}
        },
        computed: {
            imagesIdCollection() {
              return this.$store.getters.imagesIdCollection
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
        width: 300px;
        height: 300px;
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
