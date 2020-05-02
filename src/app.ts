import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
Vue.config.productionTip = false;

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import App from "./components/App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
