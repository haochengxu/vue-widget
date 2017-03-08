<template>
  <div class="vw-slider">
    <span @click="prev" class="prev"><</span>
    <span @click="next" class="next">></span>
    <div class="container" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      shiftDistance: 0,
      items: [],
      activeIndex: 0,
    };
  },
  methods: {
    prev() {
      if (this.shiftDistance === 0) {
        this.shiftDistance = -600;
      } else {
        this.shiftDistance = this.shiftDistance + 200;
      }
    },
    next() {
      if (this.shiftDistance === -600) {
        this.shiftDistance = 0;
      } else {
        this.shiftDistance = this.shiftDistance - 200;
      }
    },
    updateItems() {
      this.items = this.$children.filters(item => item.$options.name === 'SliderItem');
    },
    translateItem() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },
  },
  created() {},
};
</script>

<style>
.vw-slider {
  position: relative;
  width: 220px;
}
.vw-slider .container{
  height: 150px;
  margin: 0 10px;
  overflow: hidden;
  position: relative;
  width: 200px;
}
/*.vw-slider ul {
  height: 200px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 800px;
  transition: left 1s;
}
.vw-slider ul .slider-item{
  background-color: gray;
  float: left;
  height: 140px;
  width: 200px;
}*/
.vw-slider .prev {
  display: block;
  height: 140px;
  left: 0px;
  position: absolute;
}
.vw-slider .next {
  display: block;
  height: 140px;
  right: 0px;
  position: absolute;
}
</style>
