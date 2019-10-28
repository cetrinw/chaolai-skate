import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import {Button, Col, DatePicker, Row} from 'ant-design-vue';

Vue.use(Button,DatePicker,Row,Col);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
