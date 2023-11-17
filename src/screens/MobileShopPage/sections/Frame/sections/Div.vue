<template>
  <div class="div">
    <div class="frame-9">
      <div class="overlap-6">
        <div class="fav-6">
          <div class="overlap-group-2">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
      </div>
      <div class="frame-10">
        <p class="subheading-4">Lorem ipsum dolor sit a..</p>
        <div class="body-6">150$</div>
      </div>
    </div>
    <div class="frame-9">
      <div class="overlap-7">
        <div class="fav-6">
          <div class="overlap-group-2">
            <img class="favorite-3" alt="Favorite" src="../../../../../../static/img/favorite-1.svg" />
          </div>
        </div>
      </div>
      <div class="frame-10">
        <div class="subheading-4">Black Purse</div>
        <div class="body-6">15$</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Div",
};
</script>

<style>
.div {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.div .frame-9 {
  height: 243.99px;
  position: relative;
  width: 158px;
}

.div .overlap-6 {
  background-image: url(../../../../../../static/img/mask-group-6.png);
  background-size: 100% 100%;
  height: 188px;
  left: -1px;
  position: absolute;
  top: 0;
  width: 157px;
}

.div .fav-6 {
  height: 24px;
  left: 128px;
  overflow: hidden;
  position: relative;
  top: 9px;
  width: 24px;
}

.div .overlap-group-2 {
  background-color: #ffffff;
  border-radius: 40px;
  height: 24px;
  left: 1px;
  position: relative;
  width: 23px;
}

.div .favorite-3 {
  height: 13px;
  left: 4px;
  position: absolute;
  top: 6px;
  width: 15px;
}

.div .frame-10 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  left: 0;
  position: absolute;
  top: 199px;
}

.div .subheading-4 {
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

.div .body-6 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 28px;
}

.div .overlap-7 {
  background-image: url(../../../../../../static/img/mask-group-7.png);
  background-size: 100% 100%;
  height: 188px;
  left: -1px;
  position: absolute;
  top: 0;
  width: 157px;
}
</style>
