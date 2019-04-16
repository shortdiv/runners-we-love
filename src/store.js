import Vue from 'vue'
import Vuex from 'vuex'
import netlifyIdentity from "netlify-identity-widget"
var firebase = require("firebase");

Vue.use(Vuex)

const config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
  storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
};

firebase.initializeApp(config);
export const db = firebase.database();

export default new Vuex.Store({
  state: {
    currentUser: getSavedState("auth.currentUser"),
    loggedIn: false,
    runners: [],
    runnerColumns: ['Name', 'Age', 'Sex', 'Country', 'Official Time', 'Likes'],
  },
  mutations: {
    SET_CURRENT_USER(state, value) {
      state.currentUser = value;
      saveState("auth.currentUser", value);
    },
    SET_RUNNERS(state, value) {
      state.runners = value
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.currentUser;
    }
  },
  actions: {
    getRunners({commit}) {
      db.ref().on(
        "value",
        snapshot => {
          commit("SET_RUNNERS", snapshot.val());
        },
        err => {
          console.log(err);
        }
      )
    },
    incrementLike({commit}, val) {
      const t = db.ref(val.idx)
      val.currentLikes++
      t.update({ Likes: val.currentLikes })
    },
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
