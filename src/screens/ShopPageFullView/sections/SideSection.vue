<template>
  <div class="namecandidate-name-frame-score-1000-2">
    <Frame :categories="categories" :brands="brands" :getProducts="this.getProducts" :searchForField="searchForField"/>
    <img class="line-3" alt="Line" src="../../../../static/img/line-13.svg" />
  </div>
</template>
<script>
import Frame from "./NamecandidateNameFrameScore10002/sections/Frame.vue";

export default {
  name: "SideSection",
  components: {
    Frame
  },
  props: {
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
    filter:{
      type: Array,
      default: ()=>([])
    },
    searchForField:{
      type: Function
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