<template>
  <div class="shop-page-full-view" v-if="!isMobile()">
    <div class="div-11">
      <Group />
      <Overlap />
      <div class="text-wrapper-26">Dining Room Tables</div>
      <NamecandidateNameFrameScore10001 />
      <OverlapWrapper />
      <NamecandidateNameFrameScore10002 />
      <Pagination />
    </div>
  </div>
  <!-- <div class="shop-page" v-else>
    <div class="div-3">
      <Breadcrumb />
      <Header />
      <Frame />
      <FrameWrapper />
      <MobilePagination />
    </div>
  </div> -->
</template>

<script>
// For full view 
import Group from "./ShopPageFullView/sections/Group.vue";
import NamecandidateNameFrameScore10001 from "./ShopPageFullView/sections/NamecandidateNameFrameScore10001.vue";
import NamecandidateNameFrameScore10002 from "./ShopPageFullView/sections/NamecandidateNameFrameScore10002.vue";
import Overlap from "./ShopPageFullView/sections/Overlap.vue";
import OverlapWrapper from "./ShopPageFullView/sections/OverlapWrapper.vue";
import Pagination from "./ShopPageFullView/sections/Pagination.vue";
// For mobile view
import Breadcrumb from "./ShopPage/sections/Breadcrumb.vue";
import Frame from "./ShopPage/sections/Frame.vue";
import FrameWrapper from "./ShopPage/sections/FrameWrapper.vue";
import Header from "./ShopPage/sections/Header.vue";
import MobilePagination from "./ShopPage/sections/Pagination.vue";

export default {
  name: "ShopPageFullView",
  components: {
    Group,
    NamecandidateNameFrameScore10001,
    NamecandidateNameFrameScore10002,
    Overlap,
    OverlapWrapper,
    Pagination,
    Breadcrumb,
    Frame,
    FrameWrapper,
    Header,
    MobilePagination
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
};

</script>

<style>
.shop-page-full-view {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.shop-page-full-view .div-11 {
  background-color: #ffffff;
  height: 3747px;
  position: relative;
  width: 1440px;
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