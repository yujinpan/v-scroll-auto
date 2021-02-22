import AutoScroll from './directives/auto-scroll';
import { VueConstructor } from 'vue';

// @ts-ignore
AutoScroll.install = (Vue: VueConstructor) => {
  Vue.directive('auto-scroll', AutoScroll);
};

export default AutoScroll;
