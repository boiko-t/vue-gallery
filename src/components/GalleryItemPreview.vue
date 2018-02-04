<template>
    <section @click="launchPopup" class="gallery-item" :class="orientation">
        <img :src="image.src" :alt="image.id"/>
        <div class="info-block">
            <div class="info-item comment">
                <img src="/src/assets/images/comment-icon.png" alt="comment">
                <span class="count">{{commentsCount}}</span>
            </div>
            <div class="likes-wrapper">
              <div class="info-item dislikes">
                <div class="thumb-icon dislike-icon"></div>
                <span class="count">{{image.dislikesCount}}</span>
              </div>
              <div class="info-item likes">
                <div class="thumb-icon like-icon"></div>
                <span class="count">{{image.likesCount}}</span>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'galleryItemPreview',
        props: ['id'],
        data () {
            return {
              image: this.$store.getters.imageById(this.id),
              orientation: ""
            }
        },
        computed: {
            commentsCount() {
              return this.image.comments.length;
            }
        },
        methods: {
          launchPopup() {
            this.$emit('launchPopup', this.id);
          }
        },
        created() {
          let orientation = "";
          let image = new Image();
          image.src = this.image.src;

          image.onload = () => {
            if(image.width / image.height <= 0.85){
              orientation = 'portrait';
            }else if(image.width / image.height >= 1.35){
              orientation = 'landscape';
            }else {
              orientation = 'square';
            }

            this.orientation = orientation;
            setTimeout(()=>this.$emit('placeItems'), 0)
          }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/main.scss';

    .gallery-item.portrait {
      width: 236px;
      height: 410px;
    }

    .gallery-item.landscape {
      width: 482px;
      height: 200px;
    }

    .gallery-item.square {
      width: 236px;
      height: 200px;
    }

    .gallery-item {
      @extend %gallery-element-style;
      width: 236px;
      height: 200px;
      overflow: hidden;

      img {
        object-fit: cover;
      }

      &:hover .info-block {
        transform: translateY(-100%);
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
        transition: transform 0.7s;

        .thumb-icon {
          width: 26px;
          height: 25px;
          background: url("/src/assets/images/likes-sprites.png") no-repeat;
        }

        .like-icon {
          background-position: -2px -30px;
        }

        .dislike-icon {
          background-position: -1px 0;
        }

        .info-item {
          position: relative;
          margin: 0 10px;
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
