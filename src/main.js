import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAIYym1XIBYBSyotM5d86gvxfqbb7Jx7yw",
    libraries: "places",
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
