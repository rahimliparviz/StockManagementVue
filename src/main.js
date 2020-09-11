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


Vue.config.productionTip = false;



//Global variables
Vue.prototype.$agent = agent
Vue.prototype.$swal = swal
Vue.prototype.$notification=notification
window.baseUrl = window.location.origin;

 // Sweet Alert start


 const Toast = swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 3000,
   timerProgressBar: true,
   onOpen: (toast) => {
     toast.addEventListener('mouseenter', swal.stopTimer)
     toast.addEventListener('mouseleave', swal.resumeTimer)
   }
 });

 window.Toast = Toast;

//Global components
Vue.component("sidebar", sideBar);
Vue.component("topbar", topBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
