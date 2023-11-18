<template>
  <div class="pagination-mob">
    <div class="icon-color-wrapper">
      <img class="icon-color" alt="Icon color" src="../../../../static/img/icon-color.svg" />
    </div>
    <div class="button" v-for="index in pagination.last_page">
      <div class="overlap-group-3" v-if="pagination.current_page == index">
        <div class="text-wrapper-8">{{ index }}</div>
      </div>
      <div class="overlap-8" v-else>
        <div class="text-wrapper-9">{{ index }}</div>
      </div>
    </div>
    <div class="group-2">
      <img class="icon-color-2" alt="Icon color" src="../../../../static/img/icon-color-1.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>

<style>
.pagination-mob {
  align-items: flex-end;
  display: inline-flex;
  gap: 6.5px;
  left: 95px;
  position: relative;
  margin-top: 25px;
}

.pagination-mob .icon-color-wrapper {
  border: 0.79px solid;
  border-color: var(--shapes);
  border-radius: 3.17px;
  height: 31.72px;
  position: relative;
  transform: rotate(-180deg);
  width: 31.72px;
}

.pagination-mob .icon-color {
  height: 8px;
  left: 13px;
  position: absolute;
  top: 11px;
  transform: rotate(180deg);
  width: 4px;
}

.pagination-mob .button {
  height: 31.72px;
  position: relative;
  width: 33.72px;
}

.pagination-mob .overlap-group-3 {
  background-color: #1b1c1e;
  border-radius: 3.17px;
  height: 32px;
  position: relative;
  width: 32px;
}

.pagination-mob .text-wrapper-8 {
  color: var(--white);
  font-family: var(--h6-font-family);
  font-size: var(--h6-font-size);
  font-style: var(--h6-font-style);
  font-weight: var(--h6-font-weight);
  left: 12px;
  letter-spacing: var(--h6-letter-spacing);
  line-height: var(--h6-line-height);
  position: absolute;
  top: 9px;
}

.pagination-mob .overlap-8 {
  border: 0.79px solid;
  border-color: var(--shapes);
  border-radius: 3.17px;
  height: 32px;
  position: relative;
  width: 32px;
}

.pagination-mob .text-wrapper-9 {
  color: #1b1c1e;
  font-family: var(--h6-font-family);
  font-size: var(--h6-font-size);
  font-style: var(--h6-font-style);
  font-weight: var(--h6-font-weight);
  left: 11px;
  letter-spacing: var(--h6-letter-spacing);
  line-height: var(--h6-line-height);
  position: absolute;
  top: 8px;
}

.pagination-mob .group-2 {
  border: 0.79px solid;
  border-color: var(--shapes);
  border-radius: 3.17px;
  height: 31.72px;
  position: relative;
  width: 31.72px;
}

.pagination-mob .icon-color-2 {
  height: 8px;
  left: 13px;
  position: absolute;
  top: 11px;
  width: 4px;
}
</style>
