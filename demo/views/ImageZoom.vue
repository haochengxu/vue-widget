<template>
  <div class="image-container">
      <image-zoom :img-url="imgUrl1" ></image-zoom>
      <image-zoom :img-url="imgUrl2" ></image-zoom>
  </div>
</template>


<script>
import ImageZoom from '@/components/ImageZoom';

export default {
  data() {
    return {
      imgUrl1: 'static/images/pic1.jpg',
      imgUrl2: 'static/images/pic2.jpg',
    };
  },
  components: {
    ImageZoom
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
</style>
