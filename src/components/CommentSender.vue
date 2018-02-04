<template>
  <div id="commentSenderWrapper">
    <input type="text"
           name="author"
           id="author"
           v-model="commentAuthor"
           placeholder="Type your name here...">
    <div class="commentTextWrapper">
      <textarea name="commentText"
                id="commentText"
                cols="35" rows="2"
                v-model="commentText"
                placeholder="Write your comment here..."
                @keyup.ctrl.enter="sendComment"></textarea>
      <button id="sendCommentButton"
              @click="sendComment"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commentSender',
    props: ['imageId'],
    data () {
      return {
        commentAuthor: "",
        commentText: ""
      }
    },
    methods: {
      sendComment() {
        this.commentText = this.commentText.replace(/(\n)/g, '<br/>');
        this.$store.commit('addComment', {
          id: this.imageId,
          commentAuthor: this.commentAuthor,
          commentText: this.commentText
        });
        this.commentAuthor = "";
        this.commentText = "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/style/main.scss';

  #commentSenderWrapper {
    width: 88%;
    padding: 5px;
    box-sizing: border-box;

    .commentTextWrapper {
      display: flex;
    }

    #author,
    .commentTextWrapper {
      width: 100%;
    }

    #author,
    #commentText,
    #sendCommentButton {
      box-sizing: border-box;
      outline: none;
    }

    #commentText,
    #sendCommentButton {
      border-radius: 2px;
    }

    #author,
    #commentText {
      color: $light-font-color;
      font: 400 14px OpenSans;
      border: 2px solid #f0f3f6;
      padding: 5px 10px;
    }

    #author {
      border-width: 0 0 2px 0;
      margin-bottom: 10px;
    }

    #commentText {
      border-right-width: 0;

      &::-webkit-scrollbar {
        width: 5px;
      }
    }

    #sendCommentButton {
      width: 50px;
      height: 52px;
      background: $blue url('/src/assets/images/send-icon.png') 50% 40% no-repeat;
    }

    ::placeholder {
      color: $light-font-color;
      opacity: 1;
    }
  }

</style>
