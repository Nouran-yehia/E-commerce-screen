<template>
  <div class="namecandidate-name-frame-score-1000-2">
    <Frame :categories="categories"/>
    <img class="line-3" alt="Line" src="../../../../static/img/line-13.svg" />
    <FrameWrapper :brands="brands" />
    <img class="line-4" alt="Line" src="../../../../static/img/line-13.svg" />
  </div>
</template>
<script>
import Frame from "./NamecandidateNameFrameScore10002/sections/Frame.vue";
import FrameWrapper from "./NamecandidateNameFrameScore10002/sections/FrameWrapper.vue";

export default {
  name: "SideSection",
  components: {
    Frame,
    FrameWrapper,
  },
  props: {
    categories : {
      type: Object,
      default: {}
    },
    brands : {
      type: Object,
      default: {}
    }
  },
};
</script>

<style>

.namecandidate-name-frame-score-1000-2 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  left: 36px;
  position: absolute;
  top: 285px;
}

.namecandidate-name-frame-score-1000-2 .line-3 {
  height: 1px;
  position: relative;
  width: 262px;
}

.namecandidate-name-frame-score-1000-2 .line-4 {
  height: 1px;
  margin-bottom: -0.5px;
  position: relative;
  width: 262px;
}
</style>