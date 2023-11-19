<template>
  <MainFullScreen v-if="!isMobile" :products='this.products' :categories='this.categories' :brands='this.brands' :filter="filter" :getProducts="this.getProducts" :searchForField="searchForField"/>
  <MainMobile v-else :products='this.products' :categories='this.categories' :brands='this.brands' :filter="filter" :getProducts="this.getProducts" :searchForField="searchForField"/>
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
      allBrands:{},
      allCategories:{},
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
    getProducts(filter_attr, id, name, page) {
      this.filter= [];
      if(filter_attr){
        this.filter.push({
          attr: filter_attr,
          id,
          name
        })
      }
      data.getData("api/v1/products", filter_attr === 'category' ? {
        "filter[categories]": id, page
      } : filter_attr === 'brand' ? {
        "filter[brands]": id, page
      } : {page}).then(response => { this.products = response });
    },
    getCategories() {
      data.getData("api/v1/categories").then(response => { this.categories = response; this.allCategories = response.data});
    },
    getBrands() {
      data.getData("api/v1/brands").then(response => { this.brands = response; this.allBrands = response.data });
    },
    searchForField(field, search){
      if(field === 'category'){
       this.categories.data = this.allCategories.filter(category => category.title.toLowerCase().includes(search.toLowerCase()))
      }else if (field === 'brand'){
        this.brands.data = this.allBrands.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase()))
      }
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
}
</script>

