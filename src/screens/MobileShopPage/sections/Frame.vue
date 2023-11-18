<template>
  <div class="frame-mob">
    <SimilarProducts :products="products"/>
  </div>
</template>
<script>
import SimilarProducts from "./Frame/sections/SimilarProducts.vue";
export default {
  name: "Frame",
  components: {
    SimilarProducts
  },
  props: {
    products: {
      type: Object,
      default: {}
    }
  },
};
</script>
<style>
.frame-mob {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  left: 25px;
  position: absolute;
  top: 171px;
}
</style>