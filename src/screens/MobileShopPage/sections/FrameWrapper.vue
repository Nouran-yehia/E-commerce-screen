<template>
  <div class="frame-wrapper-1">
    <div class="frame-13">
      <div class="frame-14">
        <img class="filter" alt="Filter" src="../../../../static/img/filter.svg" />
        <div class="text-wrapper-6">Filter</div>
      </div>
      <div class="group">
        <div class="text-wrapper-7">405 Items</div>
        <img class="line-2" alt="Line" src="../../../../static/img/line-7.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrameWrapper",
};
</script>

<style>
.frame-wrapper-1 {
  align-items: center;
  display: flex;
  gap: 150px;
  left: 22px;
  position: absolute;
  top: 136px;
  width: 330px;
}

.frame-wrapper-1 .frame-13 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.frame-wrapper-1 .frame-14 {
  align-items: center;
  display: flex;
  gap: 8px;
  position: relative;
  width: 67px;
}

.frame-wrapper-1 .filter {
  height: 24px;
  position: relative;
  width: 24px;
}

.frame-wrapper-1 .text-wrapper-6 {
  color: #1b1c1e;
  font-family: var(--display-1-font-family);
  font-size: var(--display-1-font-size);
  font-style: var(--display-1-font-style);
  font-weight: var(--display-1-font-weight);
  letter-spacing: var(--display-1-letter-spacing);
  line-height: var(--display-1-line-height);
  margin-right: -41px;
  position: relative;
  width: 76px;
}

.frame-wrapper-1 .group {
  height: 16px;
  margin-right: -2px;
  position: relative;
  width: 72px;
}

.frame-wrapper-1 .text-wrapper-7 {
  color: #1b1c1e;
  font-family: var(--h6-font-family);
  font-size: var(--h6-font-size);
  font-style: var(--h6-font-style);
  font-weight: var(--h6-font-weight);
  left: 6px;
  letter-spacing: var(--h6-letter-spacing);
  line-height: var(--h6-line-height);
  position: absolute;
  text-align: right;
  top: 0;
  width: 64px;
}

.frame-wrapper-1 .line-2 {
  height: 14px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1px;
}
</style>
