import Vue from "vue";
import ShopPageFullView from "./screens/ShopPageFullView.vue";
import VueMobileDetection from "vue-mobile-detection";

Vue.config.productionTip = false;

new Vue({
  render: h => h(
    ShopPageFullView
    )
}).$mount("#app");