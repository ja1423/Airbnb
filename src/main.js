import { createApp } from 'vue';

import { router } from './router.js';
import { store } from './store/store.js';

import './assets/styles/main.scss';
import './assets/styles/setup/_typography.scss';
import rootCmp from './root-cmp.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import VueClickAway from 'vue3-click-away';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import moment from 'moment';

moment().format();
const app = createApp(rootCmp);
app.config.globalProperties.window = window
app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(VCalendar, {});
app.use(VueClickAway);
app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app');
