<template>
  <div class="overlap-wrapper">
    <div class="overlap-32">
      <div class="group-4">
        <div class="overlap-group-8" @click="getProducts()">
          <div class="text-wrapper-23">Hide Filters</div>
        </div>
      </div>
      <img class="filter" alt="Filter" src="../../../../static/img/filter.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OverlapWrapper",
  props: {
    getProducts: {
      type: Function
    }
  }
};
</script>

<style>
.overlap-wrapper {
  height: 32px;
  left: 321px;
  position: absolute;
  top: 239px;
  width: 157px;
}

.overlap-wrapper .overlap-32 {
  height: 32px;
  position: relative;
  width: 159px;
}

.overlap-wrapper .group-4 {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 159px;
}

.overlap-wrapper .overlap-group-8 {
  border: 1px solid;
  border-color: #666666;
  border-radius: 4px;
  height: 32px;
  position: relative;
  width: 157px;
  cursor: pointer;
}

.overlap-wrapper .text-wrapper-23 {
  color: #1b1c1e;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 43px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  top: 7px;
  width: 76px;
}

.overlap-wrapper .filter {
  height: 24px;
  left: 10px;
  position: absolute;
  top: 4px;
  width: 24px;
}
</style>
