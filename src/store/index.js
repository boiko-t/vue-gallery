import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imagesCount: 8,
    images: [
      {
        id: 0,
        src: './src/assets/images/test/picture1.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 5,
        dislikesCount: 8,
        isLikedByCurrentUser: true,
        isDislikedByCurrentUser: false
      },
      {
        id: 1,
        src: './src/assets/images/test/picture2.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 33,
        dislikesCount: 15,
        isLikedByCurrentUser: true,
        isDislikedByCurrentUser: false
      },
      {
        id: 2,
        src: './src/assets/images/test/picture3.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 55,
        dislikesCount: 60,
        isLikedByCurrentUser: false,
        isDislikedByCurrentUser: true
      },
      {
        id: 3,
        src: './src/assets/images/test/picture4.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 11,
        dislikesCount: 2,
        isLikedByCurrentUser: true,
        isDislikedByCurrentUser: false
      },
      {
        id: 4,
        src: './src/assets/images/test/picture5.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 34,
        dislikesCount: 11,
        isLikedByCurrentUser: false,
        isDislikedByCurrentUser: true
      },
      {
        id: 5,
        src: './src/assets/images/test/picture6.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 35,
        dislikesCount: 16,
        isLikedByCurrentUser: true,
        isDislikedByCurrentUser: false
      },
      {
        id: 6,
        src: './src/assets/images/test/picture7.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 10,
        dislikesCount: 4,
        isLikedByCurrentUser: true,
        isDislikedByCurrentUser: false
      },
      {
        id: 7,
        src: './src/assets/images/test/picture8.jpg',
        comments: [
          {
            author: 'Jane',
            text: 'This is my new awesome comment!',
            date: Date.now()
          }
        ],
        likesCount: 15,
        dislikesCount: 21,
        isLikedByCurrentUser: false,
        isDislikedByCurrentUser: false
      }
    ]
  },

  mutations: {
    addImage(state, image) {
      state.images.push({
        id: state.imagesCount,
        src: image,
        comments: [],
        likesCount: 0,
        dislikesCount: 0,
        isLikedByCurrentUser: false,
        isDislikedByCurrentUser: false
      });

      state.imagesCount++;
    },
    updateLikesCount(state, parameters) {
      this.state.images[parameters.id].likesCount += parameters.value;
      this.state.images[parameters.id].isLikedByCurrentUser = parameters.value > 0;
    },
    updateDislikesCount(state, parameters) {
      this.state.images[parameters.id].dislikesCount += parameters.value;
      this.state.images[parameters.id].isDislikedByCurrentUser = parameters.value > 0;
    },
    addComment(state, parameters) {
      this.state.images[parameters.id].comments.push({
        author: parameters.commentAuthor,
        text: parameters.commentText,
        date: Date.now()
      });
    }
  },

  getters: {
    imagesIdCollection: state => {
      return state.images.map(i => i.id);
    },

    imageById: (state) => (id) => {
      return state.images.find(image => image.id === id)
    }
  },

  actions: {
    toggleLikeImage(store, id) {
      let likeUpdateValue = this.state.images[id].isLikedByCurrentUser ?
        -1 : 1;
      let dislikeUpdateValue = this.state.images[id].isDislikedByCurrentUser ?
        -1 : 0;
      this.commit('updateLikesCount', {
        id: id,
        value: likeUpdateValue
      });
      this.commit('updateDislikesCount', {
        id: id,
        value: dislikeUpdateValue
      });
    },
    toggleDislikeImage(store, id) {
      let likeUpdateValue = this.state.images[id].isLikedByCurrentUser ?
        -1 : 0;
      let dislikeUpdateValue = this.state.images[id].isDislikedByCurrentUser ?
        -1 : 1;
      this.commit('updateLikesCount', {
        id: id,
        value: likeUpdateValue
      });
      this.commit('updateDislikesCount', {
        id: id,
        value: dislikeUpdateValue
      });
    }
  }
})
