export default `<template>
  <div>
    <ul class="cm-list-unstyled cm-padding-medium" v-auto-scroll>
      <li class="cm-margin-top-base" v-for="item in 5" :key="item">
        <el-button>{{ item }}</el-button>
      </li>
    </ul>
    <ul
      class="cm-list-unstyled cm-flex cm-padding-large cm-border-base"
      v-auto-scroll:5.x
    >
      <li v-for="item in 10" :key="item">
        <el-button style="width: 200px;" type="primary">{{
          item
        }}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { AutoScroll } from '@/index';

export default {
  directives: {
    AutoScroll
  },
  data() {
    return {
    };
  }
};
</script>`;
