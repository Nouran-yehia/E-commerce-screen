<template>
  <div class="frame-wrapper">
    <div class="frame-27">
      <div class="text-wrapper-8">Brand</div>
      <img class="plus-2" alt="Plus" src="../../../../../../static/img/plus.svg" />
    </div>
    <div class="search-box-2">
      <img
      class="search-icon-2"
      src="../../../../../../static/img/search-icon-1.svg"
      />      <div class="text-wrapper-9">Search by brand</div>
    </div>
    <div class="group-2">
      <div class="div-3" v-for="field in brands.data" :key="field.key">
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
  name: "FrameWrapper",
  props: {
    brands: {
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
.frame-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
}
.rectangle-4 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  position: relative;
  width: 18px;
}
.div-3{
  align-items: center;
  display: inline-flex;
  gap: 6px;
  justify-content: center;
  left: 0;
  margin-top: 10px;
}
.frame-wrapper .frame-27 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 262px;
}

.frame-wrapper .text-wrapper-8 {
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

.frame-wrapper .plus-2 {
  height: 12px;
  position: relative;
  width: 12px;
}

.frame-wrapper .search-box-2 {
  background-color: #f3f3f3;
  border-radius: 50px;
  height: 38px;
  overflow: hidden;
  position: relative;
  width: 262px;
}

.frame-wrapper .search-icon-2 {
  height: 16px !important;
  left: 12px !important;
  position: absolute !important;
  top: 11px !important;
  width: 15px !important;
}

.frame-wrapper .search-icon-3 {
  height: 16px !important;
  width: 15px !important;
}

.frame-wrapper .text-wrapper-9 {
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

.frame-wrapper .frame-28 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

.frame-wrapper .group-3 {
  height: 288px;
  margin-right: -6px;
  position: relative;
  width: 152px;
}

.frame-wrapper .rectangle-5 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 18px;
}

.frame-wrapper .rectangle-6 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 18px;
}

.frame-wrapper .rectangle-7 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  left: 0;
  position: absolute;
  top: 90px;
  width: 18px;
}

.frame-wrapper .frame-29 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
}

.frame-wrapper .check-wrapper {
  background-color: var(--black);
  border-color: var(--black);
  height: 18px;
  position: relative;
  width: 18px;
}

.frame-wrapper .check {
  height: 15px;
  left: 1px;
  position: absolute;
  top: 2px;
  width: 15px;
}

.frame-wrapper .text-wrapper-10 {
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

.frame-wrapper .frame-30 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 120px;
}

.frame-wrapper .rectangle-8 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  position: relative;
  width: 18px;
}

.frame-wrapper .frame-31 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 150px;
}

.frame-wrapper .frame-32 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 180px;
}

.frame-wrapper .frame-33 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 210px;
}

.frame-wrapper .frame-34 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 240px;
}

.frame-wrapper .frame-35 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 270px;
}

.frame-wrapper .text-wrapper-11 {
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
  top: 31px;
}

.frame-wrapper .text-wrapper-12 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 27px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  text-align: center;
  top: 61px;
}

.frame-wrapper .text-wrapper-13 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 27px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  text-align: center;
  top: 91px;
}

.frame-wrapper .text-wrapper-14 {
  color: #000000;
  font-family: var(--display-1-font-family);
  font-size: var(--display-1-font-size);
  font-style: var(--display-1-font-style);
  font-weight: var(--display-1-font-weight);
  letter-spacing: var(--display-1-letter-spacing);
  line-height: var(--display-1-line-height);
  position: relative;
  text-align: center;
  width: fit-content;
}
</style>