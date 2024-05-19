import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

const app = createApp(App);

app.use(ElementUI);
app.mount('#app');
