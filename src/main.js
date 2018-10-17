// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import "vuetify/dist/vuetify.min.css";
import Home from "./views/Home";
import Pets from "./views/Pets";
import Favorites from "./views/Favorites";
import Form from "./views/Form";
import store from "./store/store";

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites },
  { path: "/form", component: Form }
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store
});
