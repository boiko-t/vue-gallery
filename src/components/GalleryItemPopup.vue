<template>
  <div id="popupWrapper" :class="{active: isActive}">
    <article id="popup">
      <section class="image-wrapper">
        <img :src="image.src" :alt="image.id">
        <div class="dislikes">
          <img src="/src/assets/images/dislike-icon.png" alt="dislike">
          <span class="count">{{image.likesCount}}</span>
        </div>
        <div class="likes">
          <img src="/src/assets/images/like-icon.png" alt="like">
          <span class="count">{{image.dislikesCount}}</span>
        </div>
      </section>
      <section class="comments-wrapper">

      </section>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/style/main.scss';

  #popupWrapper {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85);
    display: none;
  }

  #popup {
    width: 810px;
    height: 595px;
    background: #fff;
  }

  .active {
    display: block;
  }

  img {
    width: 500px;
    height: 500px;
  }


</style>
