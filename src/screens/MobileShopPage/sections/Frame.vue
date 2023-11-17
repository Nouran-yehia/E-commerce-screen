<template>
  <div class="frame-mob">
    <SimilarProducts />
    <SimilarProductsWrapper />
    <DivWrapper />
    <Div />
  </div>
</template>

<script>
import SimilarProducts from "./Frame/sections/SimilarProducts.vue";
import SimilarProductsWrapper from "./Frame/sections/SimilarProductsWrapper.vue";
import DivWrapper from "./Frame/sections/DivWrapper.vue";
import Div from "./Frame/sections/Div.vue";

export default {
  name: "Frame",
  components: {
    SimilarProducts,
    SimilarProductsWrapper,
    DivWrapper,
    Div,
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