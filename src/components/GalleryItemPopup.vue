<template>
  <div id="popupWrapper" :class="{active: isActive}">
    <article id="popup">
      <section class="image-wrapper">
        <img :src="image.src" :alt="image.id">
        <div class="likes-wrapper">
          <div class="dislikes">
            <img src="/src/assets/images/dislike-icon.png" alt="dislike">
            <span class="count">{{image.likesCount}}</span>
          </div>
          <div class="likes">
            <img src="/src/assets/images/like-icon.png" alt="like">
            <span class="count">{{image.dislikesCount}}</span>
          </div>
        </div>
      </section>
      <section class="comments-wrapper">
      </section>
      <div id="closePopup" @click="closePopup"></div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'galleryItemPopup',
    props: ['isActive', 'image'],
    data () {
      return {
      }
    },
    methods: {
      closePopup(){
        this.$emit('closePopup');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/style/main.scss';

  #popupWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: none;
  }

  #popup {
    @extend %gallery-element-style;
    position: relative;
    top: 95px;
    left: 105px;
    width: 810px;
    height: 595px;
    background: #fff;
  }

  #popupWrapper.active {
    display: block;
  }

  .image-wrapper {
    width: 450px;

    img {
      height: 515px;
      object-fit: cover;
    }
  }

  .likes-wrapper {
    display: flex;
  }

  .dislikes,
  .likes {
    position: relative;
    width: 60px;
    height: 65px;
    box-sizing: border-box;
    padding: 20px 0;
    text-align: center;

    img {
      width: 26px;
      height: 25px;
    }

    .count {
      position: absolute;
      top: 10px;
      left: 35px;
      font: 600 11px OpenSans;
      background: #fff;
      color: $deep-blue;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid $gray;
      text-align: center;
    }
  }

  #closePopup {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: url('/src/assets/images/close-icon.png');
    cursor: pointer;
  }

</style>
