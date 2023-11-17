<template>
  <header class="header">
    <div class="text-wrapper-5">LOGO</div>
    <div class="frame-11">
      <img class="vector" alt="Vector" src="/img/vector-4.svg" />
      <div class="ellipse" />
      <div class="ellipse-2" />
    </div>
    <img class="favorite-4" alt="Favorite" src="/img/favorite.svg" />
    <img class="icon" alt="Icon" src="/img/icon.svg" />
    <img class="frame-12" alt="Frame" src="/img/frame-33566.svg" />
    <img class="line" alt="Line" src="/img/line.svg" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background-color: #ffffff;
  height: 98px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 375px;
}

.header .text-wrapper-5 {
  color: var(--text-color);
  font-family: var(--title-font-family);
  font-size: var(--title-font-size);
  font-style: var(--title-font-style);
  font-weight: var(--title-font-weight);
  height: 24px;
  left: 18px;
  letter-spacing: var(--title-letter-spacing);
  line-height: var(--title-line-height);
  position: absolute;
  top: 17px;
  white-space: nowrap;
}

.header .frame-11 {
  height: 24px;
  left: 333px;
  position: absolute;
  top: 18px;
  width: 24px;
}

.header .vector {
  height: 11px;
  left: 1px;
  position: absolute;
  top: 3px;
  width: 21px;
}

.header .ellipse {
  background-color: var(--text-color);
  border-radius: 1.4px;
  height: 3px;
  left: 10px;
  position: absolute;
  top: 17px;
  width: 3px;
}

.header .ellipse-2 {
  background-color: var(--text-color);
  border-radius: 1.4px;
  height: 3px;
  left: 17px;
  position: absolute;
  top: 17px;
  width: 3px;
}

.header .favorite-4 {
  height: 24px;
  left: 299px;
  position: absolute;
  top: 18px;
  width: 24px;
}

.header .icon {
  height: 24px;
  left: 265px;
  position: absolute;
  top: 18px;
  width: 24px;
}

.header .frame-12 {
  height: 24px;
  left: 18px;
  position: absolute;
  top: 57px;
  width: 24px;
}

.header .line {
  height: 1px;
  left: 0;
  position: absolute;
  top: 97px;
  width: 374px;
}
</style>
