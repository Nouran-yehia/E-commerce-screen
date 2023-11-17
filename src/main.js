import Vue from "vue";
import ShopPageFullView from "./screens/ShopPageFullView.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(
    ShopPageFullView
    )
}).$mount("#app");