<template>
  <div class="similar-products">
    <div class="frame-2">
      <div class="overlap">
        <div class="fav">
          <div class="overlap-group">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
      </div>
      <div class="frame-3">
        <p class="subheading">Lorem ipsum dolor sit a..</p>
        <div class="body">150$</div>
      </div>
    </div>
    <div class="frame-2">
      <div class="overlap-2">
        <div class="overlap-group-wrapper">
          <div class="overlap-group">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
        <div class="div-wrapper-2">
          <div class="text-wrapper">-79 %</div>
        </div>
      </div>
      <div class="frame-3">
        <div class="subheading">Black Purse</div>
        <div class="frame-4">
          <div class="body-2">15$</div>
          <div class="body-3">15$</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarProducts",
};
</script>

<style>
.similar-products {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.similar-products .frame-2 {
  height: 243.99px;
  position: relative;
  width: 158px;
}

.similar-products .overlap {
  background-image: url(../../../../../../static/img/mask-group.png);
  background-size: 100% 100%;
  height: 188px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 157px;
}

.similar-products .fav {
  height: 24px;
  left: 127px;
  overflow: hidden;
  position: relative;
  top: 8px;
  width: 24px;
}

.similar-products .overlap-group {
  background-color: #ffffff;
  border-radius: 40px;
  height: 24px;
  left: 1px;
  position: relative;
  width: 23px;
}

.similar-products .favorite {
  height: 13px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 15px;
}

.similar-products .frame-3 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  left: 0;
  position: absolute;
  top: 199px;
}

.similar-products .subheading {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 158px;
}

.similar-products .body {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 28px;
}

.similar-products .overlap-2 {
  background-image: url(../../../../../../static/img/mask-group-1.png);
  background-size: 100% 100%;
  height: 188px;
  left: 0;
  position: absolute;
  top: 0;
  width: 157px;
}

.similar-products .overlap-group-wrapper {
  height: 24px;
  left: 127px;
  overflow: hidden;
  position: absolute;
  top: 9px;
  width: 24px;
}

.similar-products .div-wrapper-2 {
  align-items: flex-start;
  background-color: #ffffff;
  display: inline-flex;
  gap: 10px;
  left: 0;
  padding: 4px 6px;
  position: absolute;
  top: 10px;
}

.similar-products .text-wrapper {
  color: var(--warning);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.similar-products .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 2px;
  position: relative;
}

.similar-products .body-2 {
  color: #c30023;
  font-family: var(--h4-font-family);
  font-size: var(--h4-font-size);
  font-style: var(--h4-font-style);
  font-weight: var(--h4-font-weight);
  letter-spacing: var(--h4-letter-spacing);
  line-height: var(--h4-line-height);
  margin-top: -1px;
  position: relative;
  width: 28px;
}

.similar-products .body-3 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-decoration: line-through;
  width: 28px;
}
</style>
