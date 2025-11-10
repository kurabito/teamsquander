import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

// createApp(App).mount('#app')

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');

const setVhVariable = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

setVhVariable();
window.addEventListener("resize", setVhVariable);