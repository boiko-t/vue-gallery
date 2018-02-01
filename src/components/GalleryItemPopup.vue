<template>
  <div :class="{active: isActive}">

  </div>
</template>

<script>
  export default {
    name: 'imagePicker',
    props: ['isActive', 'imageId'],
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
