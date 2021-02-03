<template>
  <div class="app cm-padding-medium cm-text-center">
    <h2>v-auto-scroll</h2>
    <p class="cm-text-secondary">author: yujinpan - version: v{{ version }}</p>
    <el-divider></el-divider>
    <el-row class="cm-text-left" type="flex">
      <el-col :span="12">
        <Highlight :code="code" lang="xml" />
      </el-col>
      <el-col class="cm-text-left" :span="12">
        <div>
          <label>Function 1:</label>
          <HelloWorld />
        </div>
        <el-divider></el-divider>
        <el-link
          type="primary"
          href="https://github.com/yujinpan/v-auto-scroll#attributes"
          >https://github.com/yujinpan/v-auto-scroll</el-link
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from '../dist';
import '@/element-ui.ts';

const version = require('../package').version;

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      version,
      code: require('./template/example1').default
    };
  }
};
</script>

<style lang="scss" scoped>
@import './styles/common-variables';

.app {
  .el-col {
    padding: $spacing-medium;
    border-right: $--border-base;
    &:last-of-type {
      border-right: 0;
    }
  }
}
</style>
