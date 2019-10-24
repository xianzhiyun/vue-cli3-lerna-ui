import Vue from 'vue'
import App from './App'
import router from './router'
import Ui from '@/ui'
import ElementUI from 'element-ui';
import '@vt/theme/src/index.less'
import '@/assets/icon/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Ui)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

