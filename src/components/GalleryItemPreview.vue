<template>
    <div class="image-wrapper">
        <img :src="image.src" :alt="image.id"/>
        <div class="info-block">
            <div class="comment">
                <img src="/src/assets/images/comment-icon.png" alt="comment">
                <span class="count">{{}}</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'galleryItem',
        props: ['id'],
        data () {
            return {
              image: this.$store.getters.imageById(this.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/main.scss';

    .image-wrapper {
        display: inline-block;
    }
</style>
