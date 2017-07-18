import Vue from 'vue';
import Router from 'vue-router';
import Slider from '../views/Slider';
import ImageZoom from '../views/ImageZoom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/slider',
      name: 'slider',
      component: Slider,
    },
    {
      path: '/image_zoom',
      name: 'image_zoom',
      component: ImageZoom,
    },
  ],
});
