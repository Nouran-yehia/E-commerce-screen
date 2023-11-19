<template>
  <div class="shop-page-full-view">
    <div class="div-11">
      <Group />
      <Overlap v-if="products.pagination" :total="products.pagination.total" :filter="filter"/>
      <div class="text-wrapper-26">Dining Room Tables</div>
      <ProductListing :products="products" :filter="filter" :getProducts="getProducts"/>
      <OverlapWrapper :getProducts="getProducts"/>
      <SideSection :categories="categories" :brands="brands" :getProducts="getProducts" :searchForField="searchForField" />
    </div>
  </div>
</template>
<script>
import Group from "./Group.vue";
import ProductListing from "./ProductListing.vue";
import SideSection from "./SideSection.vue";
import Overlap from "./Overlap.vue";
import OverlapWrapper from "./OverlapWrapper.vue";
export default {
  name: "MainFullPage",
  components: {
    Group,
    ProductListing,
    SideSection,
    Overlap,
    OverlapWrapper,
  },
  props: {
    products : {
      type: Object,
      default: {}
    },
    categories : {
      type: Object,
      default: {}
    },
    brands : {
      type: Object,
      default: {}
    },
    getProducts: {
      type: Function
    },
    searchForField: {
      type: Function
    },
    filter:{
      type: Array,
      default: []
    }
  },
};
</script>
<style>
.shop-page-full-view {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 99%;
}

.shop-page-full-view .div-11 {
  background-color: #ffffff;
  position: relative;
  width: 100%;
}

.shop-page-full-view .text-wrapper-26 {
  color: #222222;
  font-family: var(--title-font-family);
  font-size: var(--title-font-size);
  font-style: var(--title-font-style);
  font-weight: var(--title-font-weight);
  left: 50px;
  letter-spacing: var(--title-letter-spacing);
  line-height: var(--title-line-height);
  position: absolute;
  top: 184px;
  width: 183px;
}
</style>