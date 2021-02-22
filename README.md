# v-auto-scroll

v-auto-scroll description

## Usage

### Install

```
npm install --save v-auto-scroll
```

### Global registration

```js
import Vue from "vue";
import AutoScroll from "v-auto-scroll";

Vue.use(AutoScroll);
```

### In-component registration

```js
import AutoScroll from "v-auto-scroll";

export default {
  directives: {
    AutoScroll
  }
};
```

### Directive Attrs

- `value` - target element, example: `<div v-auto-scroll='ul'><ul>...</ul></div>`
- modifier `x` - use x axis, example: `<ul v-auto-scroll.x>...</ul>`
- argument - speed, example: `<ul v-auto-scroll:10></ul>`

### Complete example

```vue
<template>
  <div>
    <label>Default:</label>
    <ul class="cm-list-unstyled cm-padding-medium" v-auto-scroll>
      <li class="cm-margin-top-base" v-for="item in 5" :key="item">
        <el-button>{{ item }}</el-button>
      </li>
    </ul>
    <label>speed = 5, axis = x:</label>
    <ul
      class="cm-list-unstyled cm-flex cm-padding-large cm-border-base"
      v-auto-scroll:5.x
    >
      <li v-for="item in 10" :key="item">
        <el-button style="width: 200px;" type="primary">{{ item }}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { AutoScroll } from "v-auto-scroll";

export default {
  directives: {
    AutoScroll
  }
};
</script>
```
