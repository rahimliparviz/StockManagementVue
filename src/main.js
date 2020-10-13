import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import sideBar from "./components/layout/sideBar.vue";
import topBar from "./components/layout/topBar.vue";
import agent from "./api/agent"
import swal from "sweetalert2"
import notification from './helpers/Notification'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))


Vue.config.productionTip = false;


//Global variables
Vue.prototype.$api_url = process.env.VUE_APP_API_URL
Vue.prototype.$agent = agent
Vue.prototype.$swal = swal
Vue.prototype.$notification = notification
window.baseUrl = window.location.origin;

// Sweet Alert start



Vue.use(require('vue-moment'));

//Global components
Vue.component("sidebar", sideBar);
Vue.component("topbar", topBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
