<template>
  <div class="pagination" v-if="products.length">
    <div class="icon-color-wrapper">
      <img class="icon-color" alt="Icon color" src="../../../../static/img/icon-color-1.svg" />
    </div>
    <button class="button" v-for="index in pagination.last_page" @click="onClick(index)">
      <div class="overlap-group-9" v-if = "pagination.current_page == index" >
        <div class="text-wrapper-24">{{ index }}</div>
      </div>
      <div class="div-10" v-else >
        <div class="text-wrapper-25">{{ index }}</div>
      </div>
    </button>
    <div class="div-10">
      <img class="icon-color-2" alt="Icon color" src="../../../../static/img/icon-color.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    pagination : {
      type: Object,
      default: {}
    },
    products: {
      type: Array,
      default: []
    },
    filter: {
      type: Array,
      default: ()=>([])
    },
    getProducts: {
      type: Function
    }
  },
  methods: {
    onClick(page){
      if(this.filter.length){
        this.getProducts(this.filter[0].attr, this.filter[0].id, this.filter[0].name, page)
      }else{
        this.getProducts(null,null,null,page)
      }
    }
  }
};
</script>

<style>
.pagination {
  align-items: flex-end;
  display: inline-flex;
  gap: 8px;
  left: calc(55% - 288px);
  position: absolute;
  margin: auto;
  margin-top: 40px;
}

.pagination .icon-color-wrapper {
  border: 1px solid;
  border-color: var(--shapes);
  border-radius: 4px;
  height: 40px;
  position: relative;
  transform: rotate(-180deg);
  width: 40px;
}

.pagination .icon-color {
  height: 10px;
  left: 16px;
  position: absolute;
  top: 14px;
  transform: rotate(180deg);
  width: 6px;
}

.pagination .button {
  all: unset;
  box-sizing: border-box;
  height: 40px;
  position: relative;
  width: 42px;
  cursor: pointer;
}

.pagination .overlap-group-9 {
  background-color: #1b1c1e;
  border-radius: 4px;
  height: 40px;
  position: relative;
  width: 40px;
}

.pagination .text-wrapper-24 {
  color: #ffffff;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 15px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  top: 11px;
}

.pagination .div-10 {
  border: 1px solid;
  border-color: var(--shapes);
  border-radius: 4px;
  height: 40px;
  position: relative;
  width: 40px;
}

.pagination .text-wrapper-25 {
  color: #1b1c1e;
  font-family: var(--display-2-font-family);
  font-size: var(--display-2-font-size);
  font-style: var(--display-2-font-style);
  font-weight: var(--display-2-font-weight);
  left: 14px;
  letter-spacing: var(--display-2-letter-spacing);
  line-height: var(--display-2-line-height);
  position: absolute;
  top: 10px;
}

.pagination .icon-color-2 {
  height: 10px;
  left: 16px;
  position: absolute;
  top: 14px;
  width: 6px;
}
</style>
