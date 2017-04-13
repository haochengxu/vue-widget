<template>
  <div class="vw-slider-item"
    :style="{
      msTransform: `translateX(${ translate }px)`,
      webkitTransform: `translateX(${ translate }px)`,
      transform: `translateX(${ translate }px)`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SliderItem',
    props: {
      // translate: Number,
    },
    data() {
      window.console.log(this.$parent);
      return {
        translate: 0,
        // parentWidth: this.$parent.$el.offsetWidth,
      };
    },
    methods: {
      translateItem(index, activeIndex) {
        if (index === activeIndex) {
          this.translate = 0;
        } else {
          this.translate = (index - activeIndex) * this.$parent.$el.offsetWidth;
        }
      },
    },
  };
</script>

<style>
  .vw-slider-item {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    transition: ease-in-out 0.6s;
  }
</style>
