import Vue from 'vue'
import Vuex from 'vuex'
import netlifyIdentity from "netlify-identity-widget"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: getSavedState("auth.currentUser"),
    loggedIn: false,
    runnerColumns: ['Name', 'Age', 'M/F', 'Country', 'Official Time'],
  },
  mutations: {
    SET_CURRENT_USER(state, value) {
      state.currentUser = value;
      saveState("auth.currentUser", value);
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.currentUser;
    }
  },
  actions: {
    initializeIdentity({commit}, val) {
      netlifyIdentity.init({
        container: val
      })
      netlifyIdentity.open("signup")
      netlifyIdentity.on("init", user => console.log(user))
    },
    identityLogout({commit}) {
      return new Promise((resolve, reject) => {
        netlifyIdentity
          .logout()
          .then(res => {
            resolve(res);
            commit("SET_CURRENT_USER", null);
          })
          .catch(error => {
            reject(error);
            console.log("Could not log out", error);
          });
      })
    }
  }
})

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
