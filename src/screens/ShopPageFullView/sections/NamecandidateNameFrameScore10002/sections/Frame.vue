<template>
  <div class="main-div">
    <div class="frame">
      <div class="div-2">
        <div class="text-wrapper-2">Category</div>
        <img class="plus" alt="Plus" src="../../../../../../static/img/plus-1.svg" />
      </div>
      <div class="">
        <img class="search-icon-instance" src="../../../../../../static/img/search-icon-1.svg" />
        <input class="search-box" placeholder="Search by category" v-on:input="searchForField('category', $event.target.value)"/>
      </div>
      <div class="group-2">
        <div class="div-3" v-for="field in categories.data" :key="field.key">
          <input type="checkbox" class="rectangle-4" :id="field"
            @click="getProducts('category', field.id, field.title), selected = field" :checked="selected === field" />
          <div class="text-wrapper-4">{{ field.title }}</div>
        </div>
      </div>
    </div>
    <div class="frame-wrapper">
      <div class="frame-27">
        <div class="text-wrapper-8">Brand</div>
        <img class="plus-2" alt="Plus" src="../../../../../../static/img/plus.svg" />
      </div>
      <div class="">
        <img class="search-icon-instance sec-search-icon" src="../../../../../../static/img/search-icon-1.svg" />
        <input class="search-box" placeholder="Search by brand" v-on:input="searchForField('brand', $event.target.value)"/>
      </div>
      <div class="group-2">
        <div class="div-3" v-for="field in brands.data" :key="field.key">
          <input type="checkbox" class="rectangle-4" :id="field"  @click="getProducts('brand', field.id, field.title), selected = field"
            :checked="selected === field" />
          <div class="text-wrapper-4">{{ field.title }}</div>
        </div>
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
    },
    brands: {
      type: Object,
      default: {}
    },
    getProducts: {
      type: Function
    },
    searchForField:{
      type: Function
    }
  },
  methods: {

  },
  data() {
    return {
      selected: null
    }
  }
};
</script>

<style>
.main-div {
  display: flex;
  flex-direction: column;
}
.sec-search-icon{
  top:420px !important;
}
.frame-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
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

.frame {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.div-2 {
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

.search-box {
  background-color: #f3f3f3;
  border-radius: 50px;
  height: 38px;
  overflow: hidden;
  position: relative;
  width: 262px;
  border:none;
  padding-left: 35px;
}

.search-icon-instance {
  height: 16px !important;
  left: 12px !important;
  position: absolute !important;
  top: 46px;
  width: 15px !important;
  z-index: 2;
}

.frame .design-component-instance-node {
  height: 16px !important;
  width: 15px !important;
}

.text-wrapper-3 {
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

.group-2 {
  height: 288px;
  position: relative;
  width: 132px;
}

.rectangle-4 {
  border: 0.5px solid;
  border-color: #000000;
  height: 18px;
  position: relative;
  width: 18px;
}

.text-wrapper-4 {
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

.div-3 {
  align-items: center;
  display: inline-flex;
  gap: 6px;
  justify-content: center;
  left: 0;
  margin-top: 10px;
}
</style>