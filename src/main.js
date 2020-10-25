import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/sass/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as firebase from "firebase";
import CoreuiVue from "@coreui/vue";
// Registering single directives
import { CEmitRootEvent } from "@coreui/vue";
Vue.use(CoreuiVue);
// globally
Vue.directive("c-emit-root-event", CEmitRootEvent);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDz8LYA6Mc6BX4DA6Xvzjjk3vi3K9AdiXM",
  authDomain: "fashionaddict.firebaseapp.com",
  databaseURL: "https://fashionaddict.firebaseio.com",
  projectId: "fashionaddict",
  storageBucket: "fashionaddict.appspot.com",
  messagingSenderId: "781812968482",
  appId: "1:781812968482:web:9d687a87ddc8bf189f2e7b",
  measurementId: "G-6KH4NR48B4"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
