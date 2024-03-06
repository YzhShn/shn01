import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 引入ui组件库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import './assets/css/reset.css'




Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
