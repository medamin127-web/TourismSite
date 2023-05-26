import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueSwal from 'vue-swal'
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import VueLocalStorage from 'vue-localstorage';
import VueSweetalert2 from 'vue-sweetalert2';
import Raters from 'vue-rate-it';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
Vue.use(VueSweetalert2,options);
Vue.component('heart-rating', Raters.HeartRating);
Vue.component('star-rating', Raters.StarRating);
Vue.component('image-rating', Raters.ImageRating);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from 'jquery';
import './assets/css/select2.css'
import './assets/css/helpers.css'
import './assets/css/owl.carousel.min.css'
import './assets/fonts/flaticon/font/flaticon.css'
import './assets/css/animate.css'

import './assets/fonts/fontawesome/css/font-awesome.min.css'
import  './assets/fonts/ionicons/css/ionicons.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faStar } from '@fortawesome/free-solid-svg-icons'

import "@babel/polyfill";
import "mutationobserver-shim";



import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'




library.add(faSpinner, faStar)
Vue.component('icons', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


library.add(faUserSecret)
library.add(faSpinner, faStar)

Vue.component('icons', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = window.jQuery = jQuery;
Vue.use(datePicker);

import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
window.Swal = swal;
Vue.use(VueSwal);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLocalStorage)
Vue.use(DatePickerPlugin);
Vue.use(AutoCompletePlugin);


const base = axios.create({
  baseURL: "http://localhost:8088"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
