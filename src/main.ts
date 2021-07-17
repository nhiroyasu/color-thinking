import { createApp } from 'vue';
import router from '@/router/index';
import store from '@/store/index';
import App from './App.vue';
import 'bootstrap';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
