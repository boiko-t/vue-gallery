<template>
    <article id="app">
        <div class="content">
            <header id="galleryHeader">welcome to viseven <span class="highlighted">imagestock</span></header>
            <div id="galleryItemsWrapper">
                <gallery-item-preview
                  @launchPopup="launchPopup"
                  v-for="id in imagesIdCollection"
                  :key="id"
                  :id="id"></gallery-item-preview>
                <image-picker></image-picker>
            </div>
            <gallery-item-popup
                    :isActive="isItemPopupActive"
                    :image="itemPopupImage"
                    @closePopup="closePopup"></gallery-item-popup>
        </div>
    </article>
</template>

<script>
    import ImagePicker from './components/ImgPicker.vue'
    import GalleryItemPreview from './components/GalleryItemPreview.vue'
    import GalleryItemPopup from './components/GalleryItemPopup.vue'

    export default {
        name: 'gallery',
        components: {
            ImagePicker, GalleryItemPreview, GalleryItemPopup
        },
        data () {
            return {
                isItemPopupActive: false,
                itemPopupImage: {}
            }
        },
        computed: {
            imagesIdCollection() {
              return this.$store.getters.imagesIdCollection
            }
        },
        methods: {
            launchPopup(id){
                this.isItemPopupActive = true;
                this.itemPopupImage = this.$store.getters.imageById(id);
            },
            closePopup() {
                this.isItemPopupActive = false;
            },
            galleryPosition() {
                new Packery('#galleryItemsWrapper', {
                    itemSelector: '.image-wrapper',
                    gutter: 10,
                    horizontal: true
                });
            }
        },
        mounted() {
            this.galleryPosition();
        },
        updated() {
            this.galleryPosition();
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

    #galleryItemsWrapper {
        height: 660px;
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
        width: 100%;
        height: 100%;
    }
</style>
