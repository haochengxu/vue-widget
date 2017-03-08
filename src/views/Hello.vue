<template>
  <div class="hello">
    <slider>
      <slider-item v-for="i in 4"> {{i}}</slider-item>
    </slider>
  </div>
</template>

<script>
import Slider from '../components/slider/Slider';
import SliderItem from '../components/slider/SliderItem';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    Slider,
    SliderItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
