import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { Icon } from 'leaflet';
import { Auth0Plugin } from './auth';
import { domain, clientId } from '../auth_config.json';

import L from 'leaflet'

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl
})
delete L.Icon.Default.prototype._getIconUrl



Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    }
});

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  
  render: h => h(App)
}).$mount('#app')
