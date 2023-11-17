<template>
  <div class="breadcrumb">
    <div class="breadcrumbs">
      <div class="breadcrumb-wrapper">
        <div class="div-2">
          <div class="page-menu">
            <div class="text-wrapper-2">Home</div>
          </div>
          <div class="separator">
            <div class="text-wrapper-3">/</div>
          </div>
          <div class="page-menu">
            <div class="text-wrapper-2">Furniture</div>
          </div>
          <div class="separator">
            <div class="text-wrapper-3">/</div>
          </div>
          <div class="page-menu">
            <div class="text-wrapper-4">Dining Room Tables</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style>
.breadcrumb {
  height: 28px;
  left: 0;
  position: absolute;
  top: 98px;
  width: 375px;
}

.breadcrumb .breadcrumbs {
  background-color: #ffffff;
  height: 28px;
}

.breadcrumb .breadcrumb-wrapper {
  background-color: #ffffff;
  height: 28px;
  width: 375px;
}

.breadcrumb .div-2 {
  align-items: center;
  display: inline-flex;
  left: 18px;
  position: relative;
  top: 1px;
}

.breadcrumb .page-menu {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  justify-content: center;
  padding: 3.6px 7.2px;
  position: relative;
}

.breadcrumb .text-wrapper-2 {
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

.breadcrumb .separator {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 3.6px 7.2px;
  position: relative;
  width: 8px;
}

.breadcrumb .text-wrapper-3 {
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

.breadcrumb .text-wrapper-4 {
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
</style>
