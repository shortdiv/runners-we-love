import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ApolloClient from "apollo-boost"
Vue.config.productionTip = false

const apolloProvider = new ApolloClient({
  // You should use an absolute URL here
  uri: "/.netlify/functions/fauna-graphql"
})

new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
