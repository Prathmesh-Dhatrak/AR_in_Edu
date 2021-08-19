import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import 'jquery';
import 'bootstrap';
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);
createApp(App).use(router).mount('#app')

