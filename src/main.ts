import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
import {Button, Card, Col, DatePicker, Icon, Menu, Row, Timeline} from 'ant-design-vue';

Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Timeline)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
