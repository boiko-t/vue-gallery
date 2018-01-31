import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imagesCount: 0,
    images: []
  },

  mutations: {
    addImage(state, image){
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
    }
  },

  getters: {
    imagesIdCollection: state => {
      return state.images.map(i => i.id);
    },

    imageById: (state) => (id) => {
      return state.images.find(image => image.id === id)
    }
  }
})
