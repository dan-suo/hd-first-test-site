// Plugins
import { registerPlugins } from '@/plugins'
import router from './plugins/router';
import pinia from './plugins/pinia';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(pinia);

app.mount('#app');
