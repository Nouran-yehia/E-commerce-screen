<template>
  <div class="overlap">
    <div class="frame-38">
      <div class="frame-39" v-for="field in filter">
        <div class="title">{{ field.name }}</div>
        <img class="icon-close" alt="Icon close" src="../../../../static/img/icon-close.svg" />
      </div>
    </div>
    <div class="rectangle-9" />
    <div class="items-number">
      <img class="line-2" alt="Line" src="../../../../static/img/line-7.svg" />
      <div class="text-wrapper-22">{{ total }} Items</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Overlap",
  props: {
    total : {
      type: Number,
      default: {}
    },
    filter:{
      type: Array,
      default: []
    }
  },
};
</script>

<style>
.items-number {
  display: flex;
  margin-left: auto
}

.overlap {
  height: 32px;
  left: 492px;
  position: absolute;
  top: 239px;
  width: calc(88% - 492px);
  display: flex;
  min-width: 135px;
}

.overlap .frame-38 {
  align-items: flex-start;
  display: flex;
  gap: 5px;
  left: 0;
  position: absolute;
  top: 0;
}

.overlap .frame-39 {
  align-items: center;
  background-color: var(--fields);
  border-radius: 5px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  padding: 5px 12px;
  position: relative;
}

.overlap .title {
  color: var(--text);
  font-family: var(--h6-font-family);
  font-size: var(--h6-font-size);
  font-style: var(--h6-font-style);
  font-weight: var(--h6-font-weight);
  letter-spacing: var(--h6-letter-spacing);
  line-height: var(--h6-line-height);
  position: relative;
  text-align: center;
  width: fit-content;
}

.overlap .icon-close {
  height: 22px;
  position: relative;
  width: 22px;
}

.overlap .ellipse-3 {
  background-color: #f0d755;
  border-radius: 7.5px;
  height: 15px;
  position: relative;
  width: 15px;
}

.overlap .text-wrapper-21 {
  color: #000000;
  font-family: var(--h6-font-family);
  font-size: var(--h6-font-size);
  font-style: var(--h6-font-style);
  font-weight: var(--h6-font-weight);
  letter-spacing: var(--h6-letter-spacing);
  line-height: var(--h6-line-height);
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.overlap .ellipse-4 {
  background-color: #78a3d5;
  border-radius: 7.5px;
  height: 15px;
  position: relative;
  width: 15px;
}

.overlap .rectangle-9 {
  background-color: #ffffff;
  height: 32px;
  left: 69px;
  top: 0;
  width: 79px;
}

.overlap .text-wrapper-22 {
  color: #1b1c1e;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: relative;
  text-align: right;
  top: 7px;
  width: 63px;
}

.overlap .line-2 {
  height: 32px;
  position: relative;
  top: 0;
  width: 1px;
  margin-right: 7px;
}
</style>
