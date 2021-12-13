import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import routes from './route'
Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueRouter)
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
