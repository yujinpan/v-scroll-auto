import ScrollAuto from './directives/scroll-auto';
import { VueConstructor } from 'vue';

// @ts-ignore
ScrollAuto.install = (Vue: VueConstructor) => {
  Vue.directive('scroll-auto', ScrollAuto);
};

export default ScrollAuto;
