<template>
  <div class="vw-slider">
    <span @click="prev" class="prev"><</span>
    <span @click="next" class="next">></span>
    <div class="container" >
      <ul v-bind:style="{left: shiftDistance + 'px'}">
        <li class="tl" v-for="item in 4">
          <span class="item-no">{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shiftDistance: 0,
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
  },
};
</script>

<style>
.vw-slider {
  position: relative;
  width: 220px;
}
.vw-slider .container{
  margin: 0 10px;
  overflow: hidden;
  position: relative;
  width: 200px;
}
.vw-slider ul {
  height: 200px;
  list-style: none;
  margin: 0 15px;
  padding: 0;
  position: relative;
  width: 800px;
}
.vw-slider ul li{
  float: left;
  height: 140px;
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
