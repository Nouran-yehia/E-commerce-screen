<template>
  <div class="namecandidate-name-frame-score-1000-1">
    <ProductList :products="products" :filter="filter" :getProducts="getProducts"/>
  </div>
</template>
<script>
import ProductList from "./NamecandidateNameFrameScore10001/sections/ProductList.vue";
export default {
  name: "ProductListing",
  components: {
    ProductList
  },
  props: {
    products : {
      type: Object,
      default: {}
    },
    filter : {
      type: Array,
      default: []
    },
    getProducts: {
      type: Function
    }
  }
};
</script>
<style>
.namecandidate-name-frame-score-1000-1 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
  left: 321px;
  position: absolute;
  top: 285px;
}
.product-list-wrapper {
  align-items: flex-start;
    display: flex;
    gap: 24px;
    position: relative;
    width: 96%;
    flex-direction: row;
    flex-wrap: wrap;
}

.product-list-wrapper .frame-6 {
  height: 383.6px;
  position: relative;
  width: 248.41px;
}

.product-list-wrapper .overlap-4 {
  background-size: 100% 100%;
  height: 296px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 247px;
}

.product-list-wrapper .fav-3 {
  height: 38px;
  left: 200px;
  overflow: hidden;
  position: relative;
  top: 13px;
  width: 38px;
}

.product-list-wrapper .img-wrapper {
  background-color: var(--white);
  border-radius: 62.89px;
  height: 38px;
  left: 2px;
  position: relative;
  width: 36px;
}

.product-list-wrapper .favorite-2 {
  height: 21px;
  left: 6px;
  position: absolute;
  top: 9px;
  width: 24px;
}

.product-list-wrapper .frame-7 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  left: 0;
  position: absolute;
  top: 313px;
}

.product-list-wrapper .frame-8 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 3px;
  position: relative;
}

.product-list-wrapper .subheading-2 {
  color: var(--text-color);
  font-family: var(--display-3-font-family);
  font-size: var(--display-3-font-size);
  font-style: var(--display-3-font-style);
  font-weight: var(--display-3-font-weight);
  letter-spacing: var(--display-3-letter-spacing);
  line-height: var(--display-3-line-height);
  margin-top: -1px;
  position: relative;
  width: 248.41px;
}

.product-list-wrapper .body-4 {
  color: var(--text-color);
  font-family: var(--button-text-font-family);
  font-size: var(--button-text-font-size);
  font-style: var(--button-text-font-style);
  font-weight: var(--button-text-font-weight);
  letter-spacing: var(--button-text-letter-spacing);
  line-height: var(--button-text-line-height);
  position: relative;
  width: 44.02px;
}

.product-list-wrapper .overlap-5 {
  background-size: 100% 100%;
  height: 296px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 247px;
}

.product-list-wrapper .fav-4 {
  height: 38px;
  left: 201px;
  overflow: hidden;
  position: relative;
  top: 13px;
  width: 38px;
}

.product-list-wrapper .overlap-6 {
  background-size: 100% 100%;
  height: 296px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-list-wrapper .fav-5 {
  height: 38px;
  left: 200px;
  overflow: hidden;
  position: relative;
  top: 14px;
  width: 38px;
}

.product-list-wrapper .overlap-7 {
  background-size: 100% 100%;
  height: 296px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 247px;
}
</style>