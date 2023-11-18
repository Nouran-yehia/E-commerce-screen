import Vue from "vue";
import ShopPageView from "./screens/ShopPageView.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(
    ShopPageView
    )
}).$mount("#app");