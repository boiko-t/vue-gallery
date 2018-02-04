<template>
  <div id="popupWrapper" :class="{opened: isActive}" @click="closePopup">
    <article id="popup">
      <section class="image-wrapper">
        <img :src="image.src" :alt="image.id">
        <div  class="likes-wrapper">
          <div @click="dislikeImage"
               :class="{active: image.isDislikedByCurrentUser}"
               class="dislikes" >
            <div class="thumb-icon dislike-icon"></div>
            <span class="count">{{image.dislikesCount}}</span>
          </div>
          <div @click="likeImage"
               :class="{active: image.isLikedByCurrentUser}"
               class="likes">
            <div class="thumb-icon like-icon"></div>
            <span class="count">{{image.likesCount}}</span>
          </div>
        </div>
      </section>
      <section class="comments-wrapper">
        <h3 class="commentsCount">
          Comments: {{commentsCount}}
        </h3>
        <div class="comments">
          <div class="comment" v-for="comment in image.comments">
            <div class="info">
              <span class="author">By {{comment.author}}</span>
              <span class="date">{{new Date(comment.date).toLocaleString()}}</span>
            </div>
            <p class="text" v-html="comment.text"></p>
          </div>
        </div>
        <comment-sender :image-id="image.id"></comment-sender>
      </section>
      <div id="closePopup" @click="closePopup"></div>
    </article>
  </div>
</template>

<script>
  import CommentSender from './CommentSender.vue'

  export default {
    name: 'galleryItemPopup',
    components: {
      CommentSender
    },
    props: {
      isActive: {
        default: false,
        type: Boolean
      },
      image: {
        default: {},
        type: Object
      }
    },
    data () {
      return {
      }
    },
    computed: {
      commentsCount() {
        return this.image.comments?
          this.image.comments.length : 0;
      }
    },
    methods: {
      closePopup(e){
        if(e.target.id === 'popupWrapper' || e.target.id === 'closePopup')
          this.$emit('closePopup');
      },
      likeImage(){
          this.$store.dispatch('toggleLikeImage', this.image.id);
      },
      dislikeImage(){
          this.$store.dispatch('toggleDislikeImage', this.image.id);
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
    display: flex;
    position: relative;
    top: 95px;
    left: 105px;
    width: 810px;
    height: 595px;
    background: #fff;
  }

  #popupWrapper.opened {
    display: block;
  }

  .image-wrapper {
    width: 450px;

    img {
      height: 515px;
      width: 450px;
      object-fit: cover;
    }
  }

  .likes-wrapper {
    display: flex;
    background: #eff0ee;
    justify-content: flex-end;
    height: 65px;
    margin-top: -5px;
    box-sizing: border-box;

    .dislikes,
    .likes {
      position: relative;
      width: 60px;
      height: 65px;
      box-sizing: border-box;
      margin: -10px 5px 5px 0;
      padding: 20px 0;
      text-align: center;
      background: #e0e5e9;
      cursor: pointer;

      .thumb-icon {
        width: 26px;
        height: 25px;
        margin-left: 15px;
        background: url("/src/assets/images/likes-sprites.png") no-repeat;
      }

      .like-icon {
        background-position: -1px -30px;
      }

      .dislike-icon {
        background-position: -1px 0;
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

    .likes.active {
      background: $blue;
      margin-top: 0;

      .like-icon {
        background-position: -32px -30px;
      }

      .count {
        border-color: #fff;
      }

    }

    .dislikes.active {
      background: $red;
      margin-top: 0;

      .dislike-icon {
        background-position: -31px 0;
      }

      .count {
        border-color: #fff;
      }
    }
  }

  .comments-wrapper {
    padding: 35px 15px 20px 25px;
  }

  .commentsCount {
    font: 600 24px OpenSans;
    color: $medium-font-color;
  }

  .comments {
    width: 92%;
    height: 76%;
    padding-right: 10px;
    overflow-y: auto;
    box-sizing: border-box;
    font-family: OpenSans;

    .comment {
      margin: 5px 10px;

      .info {
        margin-bottom: 3px;
        display: flex;
        justify-content: space-between;
        color: $light-font-color;
        font-size: 11px;
      }

      .text {
        border: 1px solid $light-gray;
        border-radius: 2px;
        padding: 15px;
        color: $dark-font-color;
        font-size: 14px;
      }

      &::-webkit-scrollbar {
        width: 4px;
      }
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
