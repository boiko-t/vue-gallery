<template>
    <div>
      <img :src="image.src" :alt="image.id">
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
</style>
