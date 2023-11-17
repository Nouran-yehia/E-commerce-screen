<template>
  <div class="group">
    <div class="navbar-wrapper">
      <div class="navbar">
        <div class="text-wrapper-15">Grocery</div>
        <div class="text-wrapper-15">Electronics</div>
        <div class="text-wrapper-15">Clothing</div>
        <div class="text-wrapper-15">Furniture</div>
        <div class="text-wrapper-15">Toys &amp; Video games</div>
        <div class="text-wrapper-15">Baby</div>
        <div class="text-wrapper-15">Beauty</div>
        <div class="text-wrapper-15">Personal Care</div>
        <div class="text-wrapper-15">Pets</div>
        <div class="text-wrapper-15">Sports</div>
        <div class="text-wrapper-15">Stationery</div>
        <div class="text-wrapper-15">Brands</div>
      </div>
    </div>
    <header class="header">
      <div class="text-wrapper-16">LOGO</div>
      <div class="frame-36">
        <div class="frame-37">
          <img class="img-2" alt="Icon" src="../../../../static/img/icon.svg" />
          <div class="text-wrapper-17">Account</div>
        </div>
        <div class="frame-37">
          <img class="img-2" alt="Favorite" src="../../../../static/img/favorite-32.svg" />
          <div class="text-wrapper-17">Wishlist</div>
        </div>
        <div class="frame-37">
          <div class="img-2">
            <img class="vector" alt="Vector" src="../../../../static/img/vector-4.svg" />
            <div class="ellipse" />
            <div class="ellipse-2" />
          </div>
          <div class="text-wrapper-17">Cart</div>
        </div>
      </div>
    </header>
    <div class="breadcrumb">
      <div class="breadcrumb-2">
        <div class="page-menu">
          <div class="text-wrapper-18">Home</div>
        </div>
        <div class="separator">
          <div class="text-wrapper-19">/</div>
        </div>
        <div class="page-menu">
          <div class="text-wrapper-18">Furniture</div>
        </div>
        <div class="separator">
          <div class="text-wrapper-19">/</div>
        </div>
        <div class="page-menu">
          <div class="text-wrapper-20">Dining Room Tables</div>
        </div>
      </div>
      <img class="line" alt="Line" src="../../../../static/img/line.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group",
};
</script>

<style>
.group {
  height: 155px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group .navbar-wrapper {
  background-color: var(--button-text);
  height: 45px;
  left: 0;
  position: absolute;
  top: 70px;
  width: 1440px;
}

.group .navbar {
  align-items: center;
  display: inline-flex;
  gap: 40px;
  justify-content: center;
  left: 152px;
  position: relative;
  top: 14px;
}

.group .text-wrapper-15 {
  color: #000000;
  font-family: var(--display-1-font-family);
  font-size: var(--display-1-font-size);
  font-style: var(--display-1-font-style);
  font-weight: var(--display-1-font-weight);
  letter-spacing: var(--display-1-letter-spacing);
  line-height: var(--display-1-line-height);
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.group .header {
  background-color: #ffffff;
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group .text-wrapper-16 {
  color: var(--text-color);
  font-family: "Lato", Helvetica;
  font-size: 25px;
  font-weight: 700;
  height: 30px;
  left: 50px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 19px;
  white-space: nowrap;
}

.group .frame-36 {
  align-items: flex-start;
  display: inline-flex;
  gap: 22px;
  left: 1134px;
  position: absolute;
  top: 23px;
}

.group .frame-37 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  position: relative;
}

.group .img-2 {
  height: 24px;
  position: relative;
  width: 24px;
}

.group .text-wrapper-17 {
  color: #000000;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: relative;
  width: fit-content;
}

.group .vector {
  height: 11px;
  left: 1px;
  position: absolute;
  top: 3px;
  width: 21px;
}

.group .ellipse {
  background-color: var(--text-color);
  border-radius: 1.4px;
  height: 3px;
  left: 10px;
  position: absolute;
  top: 17px;
  width: 3px;
}

.group .ellipse-2 {
  background-color: var(--text-color);
  border-radius: 1.4px;
  height: 3px;
  left: 17px;
  position: absolute;
  top: 17px;
  width: 3px;
}

.group .breadcrumb {
  background-color: #ffffff;
  height: 40px;
  left: 0;
  position: absolute;
  top: 115px;
  width: 1440px;
}

.group .breadcrumb-2 {
  align-items: center;
  display: inline-flex;
  left: 50px;
  position: absolute;
  top: 7px;
}

.group .page-menu {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  justify-content: center;
  padding: 3.6px 7.2px;
  position: relative;
}

.group .text-wrapper-18 {
  color: #1b1c1e;
  font-family: var(--h5-font-family);
  font-size: var(--h5-font-size);
  font-style: var(--h5-font-style);
  font-weight: var(--h5-font-weight);
  letter-spacing: var(--h5-letter-spacing);
  line-height: var(--h5-line-height);
  margin-top: -0.9px;
  position: relative;
  width: fit-content;
}

.group .separator {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 3.6px 7.2px;
  position: relative;
  width: 8px;
}

.group .text-wrapper-19 {
  color: var(--shapes);
  font-family: "Open Sans", Helvetica;
  font-size: 12.6px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18.9px;
  margin-left: -5.7px;
  margin-right: -5.7px;
  margin-top: -0.9px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.group .text-wrapper-20 {
  color: var(--shapes);
  font-family: var(--h5-font-family);
  font-size: var(--h5-font-size);
  font-style: var(--h5-font-style);
  font-weight: var(--h5-font-weight);
  letter-spacing: var(--h5-letter-spacing);
  line-height: var(--h5-line-height);
  margin-top: -0.9px;
  position: relative;
  width: fit-content;
}

.group .line {
  height: 1px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 1436px;
}
</style>
