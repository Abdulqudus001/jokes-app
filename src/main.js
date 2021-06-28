import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from '@/plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueToast, {
  position: 'top-right',
});

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
