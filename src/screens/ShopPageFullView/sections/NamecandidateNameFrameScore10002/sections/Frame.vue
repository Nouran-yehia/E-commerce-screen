<template>
  <div class="frame">
    <div class="div-2">
      <div class="text-wrapper-2">Category</div>
      <img class="plus" alt="Plus" src="../../../../../../static/img/plus-1.svg" />
    </div>
    <div class="search-box">
      <img class="search-icon-instance" src="../../../../../../static/img/search-icon-1.svg" />
      <div class="text-wrapper-3">Search by category</div>
    </div>
    <div class="group-2">
      <div class="div-3" v-for="field in categories.data" :key="field.key">
        <input type="checkbox" class="rectangle-4" :id="field"
       @click="selected = field"
       :checked="selected === field" />
        <div class="text-wrapper-4">{{ field.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Frame",
  props: {
    categories: {
      type: Object,
      default: {}
    }
  },
  data(){
    return {
      selected: null
    }
  }
};
</script>

<style>
.frame {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.frame .div-2 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 262px;
}

.frame .text-wrapper-2 {
  color: #000000;
  font-family: var(--h2-font-family);
  font-size: var(--h2-font-size);
  font-style: var(--h2-font-style);
  font-weight: var(--h2-font-weight);
  letter-spacing: var(--h2-letter-spacing);
  line-height: var(--h2-line-height);
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame .plus {
  height: 12px;
  position: relative;
  width: 12px;
}

.frame .search-box {
  background-color: #f3f3f3;
  border-radius: 50px;
  height: 38px;
  overflow: hidden;
  position: relative;
  width: 262px;
}

.frame .search-icon-instance {
  height: 16px !important;
  left: 12px !important;
  position: absolute !important;
  top: 11px !important;
  width: 15px !important;
}

.frame .design-component-instance-node {
  height: 16px !important;
  width: 15px !important;
}

.frame .text-wrapper-3 {
  color: var(--text-color);
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 40px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  top: 11px;
  white-space: nowrap;
  width: 139px;
}

.frame .group-2 {
  height: 288px;
  position: relative;
  width: 132px;
}

.frame .rectangle {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 18px;
}

.frame .rectangle-2 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 18px;
}

.frame .rectangle-3 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 90px;
  width: 18px;
}

.frame .div-3 {
  align-items: center;
  display: inline-flex;
  gap: 6px;
  justify-content: center;
  left: 0;
  margin-top: 10px;
}

.frame .rectangle-4 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  position: relative;
  width: 18px;
}

.frame .text-wrapper-4 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  margin-top: -0.5px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.frame .div-4 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 120px;
}

.frame .div-5 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 150px;
}

.frame .div-6 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 180px;
}

.frame .div-7 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 210px;
}

.frame .div-8 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 240px;
}

.frame .div-9 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 270px;
}

.frame .text-wrapper-5 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 28px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  text-align: center;
  top: 32px;
}

.frame .text-wrapper-6 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 28px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  text-align: center;
  top: 62px;
}

.frame .text-wrapper-7 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 26px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  text-align: center;
  top: 92px;
}
</style>