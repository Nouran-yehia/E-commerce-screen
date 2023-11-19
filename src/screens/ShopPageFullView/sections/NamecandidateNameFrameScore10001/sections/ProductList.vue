<template>
  <div>
    <div class="product-list-wrapper">
      <div class="frame-6" v-for="field in products.data" :key="field.key">
        <img :src="field.default_variant.image" class="product-img" v-if="field.default_variant.image"/>
        <img src="../../../../../../static/img/7387030e5a5600726e5309496353969a_t.jpeg" class="product-img" v-else/>
        <div class="overlap-4">
          <div class="fav-3">
            <div class="img-wrapper">
              <img class="favorite-2" alt="Favorite" src="../../../../../../static/img/favorite-27.svg" />
            </div>
          </div>
        </div>
        <div class="frame-7">
          <div class="frame-8">
            <p class="subheading-2">{{ field.default_variant.title }}</p>
            <div class="body-4">{{ field.default_variant.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <Pagination v-if="products.data" :products="products.data" :pagination="products.pagination" :filter="filter" :getProducts="getProducts"/>
  </div>
</template>
<script>
import Pagination from "../../Pagination.vue";
export default {
  name: "ProductList",
  components: {
    Pagination
  },
  props: {
    products: {
      type: Object,
      default: {}
    },
    filter : {
      type: Array,
      default: ()=>{[]}
    },
    getProducts: {
      type: Function
    }
  }
};
</script>

<style>
.product-img{
  width:100%;
  height: 75%;
}
.product-list {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 24px;
  position: relative;
}

.product-list .frame-2 {
  height: 383.6px;
  position: relative;
  width: 248.41px;
}

.product-list .overlap-group {
  background-size: 100% 100%;
  height: 296px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 247px;
}

.product-list .fav {
  height: 38px;
  left: 201px;
  overflow: hidden;
  position: relative;
  top: 13px;
  width: 38px;
}

.product-list .favorite-wrapper {
  background-color: var(--white);
  border-radius: 62.89px;
  height: 38px;
  left: 2px;
  position: relative;
  width: 36px;
}

.product-list .favorite {
  height: 21px;
  left: 6px;
  position: absolute;
  top: 9px;
  width: 24px;
}

.product-list .frame-3 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  left: 0;
  position: absolute;
  top: 313px;
}

.product-list .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 3px;
  position: relative;
}

.product-list .subheading {
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

.product-list .body {
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

.product-list .overlap-2 {
  background-size: 100% 100%;
  height: 296px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-list .overlap-group-wrapper {
  height: 38px;
  left: 200px;
  overflow: hidden;
  position: absolute;
  top: 14px;
  width: 38px;
}

.product-list .div-wrapper-2 {
  align-items: flex-start;
  background-color: #ffffff;
  display: inline-flex;
  gap: 14.55px;
  left: 0;
  padding: 6px 12px;
  position: absolute;
  top: 18px;
}

.product-list .text-wrapper {
  color: #c30023;
  font-family: var(--h2-font-family);
  font-size: var(--h2-font-size);
  font-style: var(--h2-font-style);
  font-weight: var(--h2-font-weight);
  letter-spacing: var(--h2-letter-spacing);
  line-height: var(--h2-line-height);
  margin-top: -1.45px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.product-list .frame-5 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.product-list .body-2 {
  color: var(--warning);
  font-family: var(--button-text-font-family);
  font-size: var(--button-text-font-size);
  font-style: var(--button-text-font-style);
  font-weight: var(--button-text-font-weight);
  letter-spacing: var(--button-text-letter-spacing);
  line-height: var(--button-text-line-height);
  margin-top: -1px;
  position: relative;
  width: 44.02px;
}

.product-list .body-3 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-decoration: line-through;
  width: 44.02px;
}

.product-list .fav-wrapper {
  background-image: url(../../../../../../static/img/mask-group-29.png);
  background-size: 100% 100%;
  height: 296px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 247px;
}

.product-list .fav-2 {
  height: 38px;
  left: 200px;
  overflow: hidden;
  position: relative;
  top: 13px;
  width: 38px;
}

.product-list .overlap-3 {
  background-size: 100% 100%;
  height: 296px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 247px;
}
</style>
