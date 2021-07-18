import { createApp } from 'vue';
import router from '@/router/index';
import store from '@/store/index';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
