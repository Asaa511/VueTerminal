import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: null, // 当前登录的用户
  },
  getters: {
    currentUser: state => state.currentUser,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    setCurrentUser({ commit }, user) {
      commit('setCurrentUser', user);
    },
  },
});

export default store;
