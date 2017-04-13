<template>
  <div class="vw-slider">
    <span @click="prev" class="prev"><</span>
    <span @click="next" class="next">></span>
    <div class="container" :style="{height: height}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      default: '300px',
    },
  },
  data() {
    return {
      shiftDistance: 0,
      items: [],
      activeIndex: 0,
    };
  },
  methods: {
    prev() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex < 0) {
        this.activeIndex = this.items.length - 1;
      }
      this.translateItem();
    },
    next() {
      this.activeIndex = this.activeIndex + 1;
      if (this.activeIndex > this.items.length - 1) {
        this.activeIndex = 0;
      }
      this.translateItem();
    },
    updateItems() {
      // console.log(this.$children);
      this.items = this.$children.filter(item => item.$options.name === 'SliderItem');
    },
    translateItem() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },
  },
  mounted() {
    this.updateItems();
    this.translateItem();
  },
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
