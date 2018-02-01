<template>
    <div class="image-wrapper">
        <img :src="image.src" :alt="image.id"/>
        <div class="info-block">
            <div class="info-item comment">
                <img src="/src/assets/images/comment-icon.png" alt="comment">
                <span class="count">{{commentsCount}}</span>
            </div>
            <div class="likes-wrapper">
              <div class="info-item dislikes">
                <img src="/src/assets/images/dislike-icon.png" alt="comment">
                <span class="count">{{image.likesCount}}</span>
              </div>
              <div class="info-item likes">
                <img src="/src/assets/images/like-icon.png" alt="comment">
                <span class="count">{{image.dislikesCount}}</span>
              </div>
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
        },
        computed: {
            commentsCount() {
              return this.image.comments.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/main.scss';

    .image-wrapper {
      @extend %gallery-element-style;
      display: inline-block;
      height: 300px;
      overflow: hidden;

      &:hover .info-block {
        transform: translateY(-100%);
        transiton: transform 1s;
      }

      .info-block {
        height: 60px;
        padding: 0 10px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0 0 3px 3px;
        transform: translateY(0);

        .info-item {
          position: relative;
          margin: 0 10px;
        }

        img {
          width: 26px;
          height: 25px;
        }

        .dislikes,
        .likes {
          display: inline-block;
        }

        .count {
          position: absolute;
          top: -10px;
          left: 18px;
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
    }
</style>
