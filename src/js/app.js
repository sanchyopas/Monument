import * as functions from './modules/baseFunctions.js';

functions.isWebp();

import "./modules/menu.js"

import Swiper from "swiper";
import {Navigation, Pagination, Scrollbar, Thumbs, EffectFade} from "swiper/modules";

const worksSlider = new Swiper('.works-slider', {
  modules: [Navigation, EffectFade],
  direction: 'horizontal',
  /*effect: 'fade',
  fade: {
    crossFade: true,
  },*/
  autoHeight: true,
  slidesPerView: 3.5,
  spaceBetween: 20,

  navigation: {
    nextEl: '.works-next',
    prevEl: '.works-prev',
  },
});
