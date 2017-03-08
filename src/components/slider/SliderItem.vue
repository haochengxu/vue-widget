<template>
  <div class="vw-slider-item"
    :style="{
      msTransform: `translateX(${ translate }px) scale(${ scale })`,
      webkitTransform: `translateX(${ translate }px) scale(${ scale })`,
      transform: `translateX(${ translate }px) scale(${ scale })`
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SliderItem',
    data() {
      return {
        translate: 0,
        scale: 1,
      };
    },
    methods: {
      translateItem() {},
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
  }
</style>
