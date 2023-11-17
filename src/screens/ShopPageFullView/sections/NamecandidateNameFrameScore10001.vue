<template>
  <div class="namecandidate-name-frame-score-1000-1">
    <ProductList />
    <ProductListWrapper />
    <DivWrapper />
    <Div />
    <SectionComponentNode />
    <NamecandidateNameProductListScore10001 />
    <NamecandidateNameProductListScore10002 />
    <NamecandidateNameProductListScore10003 />
  </div>
</template>

<script>
import ProductList from "./NamecandidateNameFrameScore10001/sections/ProductList.vue";
import ProductListWrapper from "./NamecandidateNameFrameScore10001/sections/ProductListWrapper.vue";
import DivWrapper from "./NamecandidateNameFrameScore10001/sections/DivWrapper.vue";
import Div from "./NamecandidateNameFrameScore10001/sections/Div.vue";
import SectionComponentNode from "./NamecandidateNameFrameScore10001/sections/SectionComponentNode.vue";
import NamecandidateNameProductListScore10001 from "./NamecandidateNameFrameScore10001/sections/NamecandidateNameProductListScore10001.vue";
import NamecandidateNameProductListScore10002 from "./NamecandidateNameFrameScore10001/sections/NamecandidateNameProductListScore10002.vue";
import NamecandidateNameProductListScore10003 from "./NamecandidateNameFrameScore10001/sections/NamecandidateNameProductListScore10003.vue";

export default {
  name: "NamecandidateNameFrameScore10001",
  components: {
    ProductList,
    ProductListWrapper,
    DivWrapper,
    Div,
    SectionComponentNode,
    NamecandidateNameProductListScore10001,
    NamecandidateNameProductListScore10002,
    NamecandidateNameProductListScore10003,
  },
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
</style>