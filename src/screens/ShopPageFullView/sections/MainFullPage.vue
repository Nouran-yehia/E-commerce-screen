<template>
    <div class="shop-page-full-view">
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
</template>
<script>
import Group from "./Group.vue";
import NamecandidateNameFrameScore10001 from "./NamecandidateNameFrameScore10001.vue";
import NamecandidateNameFrameScore10002 from "./NamecandidateNameFrameScore10002.vue";
import Overlap from "./Overlap.vue";
import OverlapWrapper from "./OverlapWrapper.vue";
import Pagination from "./Pagination.vue";
export default {
  name: "MainFullPage",
  components: {
    Group,
    NamecandidateNameFrameScore10001,
    NamecandidateNameFrameScore10002,
    Overlap,
    OverlapWrapper,
    Pagination
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