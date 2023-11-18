<template>
  <MainFullScreen v-if="!isMobile" :products='this.products' :categories='this.categories' :brands='this.brands' :filter="filter"/>
  <MainMobile v-else :products='this.products' :categories='this.categories' :brands='this.brands' />
</template>
<script>
import MainFullScreen from "./ShopPageFullView/sections/MainFullPage.vue";
import MainMobile from "./MobileShopPage/sections/MainMobile.vue";
import data from "../shares/axios/getData.js"

export default {
  name: "ShopPageView",
  components: {
    MainFullScreen,
    MainMobile
  },
  data() {
    return {
      isMobile: true,
      categories: {},
      products: {},
      brands: {},
      filter:[]
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    this.getCategories();
    this.getBrands();
    this.getProducts();
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 650;
    },
    getProducts(filter_attr, id, name) {
      if(filter_attr){
        this.filter = this.filter.filter(x=>x.attr !== filter_attr);
        this.filter.push({
          attr: filter_attr,
          id,
          name
        })
      }
      data.getData("api/v1/products", filter_attr === 'category' ? {
        "filter[categories]": id
      } : filter_attr === 'brands' ? {
        "filter[brands]": id
      } : {}).then(response => { this.products = response });
    },
    getCategories() {
      data.getData("api/v1/categories").then(response => { this.categories = response });
    },
    getBrands() {
      data.getData("api/v1/brands").then(response => { this.brands = response });
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
}
</script>

