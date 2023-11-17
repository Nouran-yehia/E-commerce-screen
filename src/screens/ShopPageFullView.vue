<template>
  <MainFullScreen v-if="!isMobile" :products='this.products' :categories='this.categories' :brands='this.brands' />
  <MainMobile v-else :products='this.products' :categories='this.categories' :brands='this.brands' />
</template>
<script>
import MainFullScreen from "./ShopPageFullView/sections/MainFullPage.vue";
import MainMobile from "./MobileShopPage/sections/MainMobile.vue";
import data from "../shares/axios/getData.js"

export default {
  name: "ShopPageFullView",
  components: {
    MainFullScreen,
    MainMobile
  },
  data() {
    return {
      isMobile: true,
      categories: [],
      products: [],
      brands: []
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    data.getData("api/v1/products").then(response => { this.products = response });
    data.getData("api/v1/categories").then(response => { this.categories = response });
    data.getData("api/v1/brands").then(response => { this.brands = response });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 650;
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
}
</script>

