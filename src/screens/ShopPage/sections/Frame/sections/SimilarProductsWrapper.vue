<template>
  <div class="similar-products-wrapper">
    <div class="frame-5">
      <div class="fav-wrapper">
        <div class="fav-2">
          <div class="favorite-wrapper">
            <img class="img" alt="Favorite" src="/img/favorite-3.svg" />
          </div>
        </div>
      </div>
      <div class="frame-6">
        <p class="subheading-2">Lorem ipsum dolor sit a..</p>
        <div class="body-4">150$</div>
      </div>
    </div>
    <div class="frame-5">
      <div class="overlap-3">
        <div class="fav-3">
          <div class="favorite-wrapper">
            <img class="img" alt="Favorite" src="/img/favorite-4.svg" />
          </div>
        </div>
      </div>
      <div class="frame-6">
        <div class="subheading-2">Black Purse</div>
        <div class="body-4">15$</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarProductsWrapper",
};
</script>

<style>
.similar-products-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.similar-products-wrapper .frame-5 {
  height: 243.99px;
  position: relative;
  width: 158px;
}

.similar-products-wrapper .fav-wrapper {
  background-image: url(../../../../../../static/img/mask-group-2.png);
  background-size: 100% 100%;
  height: 188px;
  left: -1px;
  position: absolute;
  top: 1px;
  width: 157px;
}

.similar-products-wrapper .fav-2 {
  height: 24px;
  left: 128px;
  overflow: hidden;
  position: relative;
  top: 8px;
  width: 24px;
}

.similar-products-wrapper .favorite-wrapper {
  background-color: #ffffff;
  border-radius: 40px;
  height: 24px;
  left: 1px;
  position: relative;
  width: 23px;
}

.similar-products-wrapper .img {
  height: 13px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 15px;
}

.similar-products-wrapper .frame-6 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  left: 0;
  position: absolute;
  top: 199px;
}

.similar-products-wrapper .subheading-2 {
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

.similar-products-wrapper .body-4 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 28px;
}

.similar-products-wrapper .overlap-3 {
  background-image: url(../../../../../../static/img/mask-group-3.png);
  background-size: 100% 100%;
  height: 188px;
  left: 0;
  position: absolute;
  top: 0;
  width: 157px;
}

.similar-products-wrapper .fav-3 {
  height: 24px;
  left: 127px;
  overflow: hidden;
  position: relative;
  top: 9px;
  width: 24px;
}
</style>
