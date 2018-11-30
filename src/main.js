import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from '@/configs/router';
import axios from '@/configs/axios';
import '@/configs/mock'

Vue.use(ElementUI);

Vue.config.productionTip = false

//
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
