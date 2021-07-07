<template>
  <div class="app cm-padding-medium cm-text-center">
    <h2>v-scroll-auto</h2>
    <p class="cm-text-secondary">author: yujinpan - version: v{{ version }}</p>
    <el-divider></el-divider>
    <el-row class="cm-text-left" type="flex">
      <el-col :span="12">
        <Highlight :code="code" lang="xml" />
      </el-col>
      <el-col class="cm-text-left" :span="12">
        <div>
          <label>Default:</label>
          <ul class="cm-list-unstyled cm-padding-medium" v-scroll-auto>
            <li class="cm-margin-top-base" v-for="item in 5" :key="item">
              <el-button>{{ item }}</el-button>
            </li>
          </ul>
          <label>speed = 5, axis = x:</label>
          <ul
            class="cm-list-unstyled cm-flex cm-padding-large cm-border-base"
            v-scroll-auto:5.x
          >
            <li v-for="item in 10" :key="item">
              <el-button style="width: 200px;" type="primary">{{
                item
              }}</el-button>
            </li>
          </ul>
        </div>
        <el-divider></el-divider>
        <el-link
          type="primary"
          href="https://github.com/yujinpan/v-scroll-auto#attributes"
          >https://github.com/yujinpan/v-scroll-auto</el-link
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ScrollAuto from '@/index';

const version = require('../package').version;

export default {
  directives: {
    ScrollAuto
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
