// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'
import Vuex from 'vuex'


Vue.prototype.$axios = axios
import CxltToastr from 'cxlt-vue2-toastr'
import headerLogin from '@/components/common/HeaderLogin'
import header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Alarm from '@/components/Alarm'
import AlarmDetail from '@/components/AlarmDetail'
import Table from '@/components/common/Table'
var toastrConfigs = {
    position: 'top right',
    timeOut: 2000,
}
Vue.use(CxltToastr, toastrConfigs)
Vue.component("headerLogin",headerLogin);
Vue.component("header-view",header);
Vue.component("footer-view",Footer);
Vue.component("alarm-view",Alarm);
Vue.component("AlarmDetail-view",AlarmDetail);
Vue.component("table-view",Table);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Qi5AthdE9qmY8XtzN7f5iZri2IztigdY'
})

Vue.config.productionTip = false

/*
router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }

  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' });
  } else {
    next();
  };
});

 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
