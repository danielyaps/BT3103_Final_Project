import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

//register globally
import Home from './components/Home'
import Login from './components/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('home', Home)
Vue.component('login', Login)

const myRouter = new VueRouter({
  routes: Routes,
  mode:'history', 
  props: true
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
