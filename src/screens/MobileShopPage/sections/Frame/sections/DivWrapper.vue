<template>
  <div class="div-wrapper">
    <div class="frame-7">
      <div class="overlap-4">
        <div class="fav-4">
          <div class="img-wrapper">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
      </div>
      <div class="frame-8">
        <p class="subheading-3">Lorem ipsum dolor sit a..</p>
        <div class="body-5">150$</div>
      </div>
    </div>
    <div class="frame-7">
      <div class="overlap-5">
        <div class="fav-5">
          <div class="img-wrapper">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
      </div>
      <div class="frame-8">
        <div class="subheading-3">Black Purse</div>
        <div class="body-5">15$</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivWrapper",
};
</script>

<style>
.div-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.div-wrapper .frame-7 {
  height: 243.99px;
  position: relative;
  width: 158px;
}

.div-wrapper .overlap-4 {
  background-image: url(../../../../../../static/img/mask-group-4.png);
  background-size: 100% 100%;
  height: 188px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 157px;
}

.div-wrapper .fav-4 {
  height: 24px;
  left: 127px;
  overflow: hidden;
  position: relative;
  top: 8px;
  width: 24px;
}

.div-wrapper .img-wrapper {
  background-color: #ffffff;
  border-radius: 40px;
  height: 24px;
  left: 1px;
  position: relative;
  width: 23px;
}

.div-wrapper .favorite-2 {
  height: 13px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 15px;
}

.div-wrapper .frame-8 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  left: 0;
  position: absolute;
  top: 199px;
}

.div-wrapper .subheading-3 {
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

.div-wrapper .body-5 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 28px;
}

.div-wrapper .overlap-5 {
  background-image: url(../../../../../../static/img/mask-group-5.png);
  background-size: 100% 100%;
  height: 188px;
  left: 0;
  position: absolute;
  top: 0;
  width: 157px;
}

.div-wrapper .fav-5 {
  height: 24px;
  left: 127px;
  overflow: hidden;
  position: relative;
  top: 9px;
  width: 24px;
}
</style>
