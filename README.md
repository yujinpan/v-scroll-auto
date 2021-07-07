# v-scroll-auto

Scroll auto for list.

## Usage

### Install

```
npm install --save v-scroll-auto
```

### Global registration

```js
import Vue from "vue";
import ScrollAuto from "v-scroll-auto";

Vue.use(ScrollAuto);
```

### In-component registration

```js
import ScrollAuto from "v-scroll-auto";

export default {
  directives: {
    ScrollAuto
  }
};
```

### Directive Attrs

- `value` - target element, example: `<div v-scroll-auto='ul'><ul>...</ul></div>`
- modifier `x` - use x axis, example: `<ul v-scroll-auto.x>...</ul>`
- argument - speed, example: `<ul v-scroll-auto:10></ul>`

### Complete example

```vue
<template>
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
        <el-button style="width: 200px;" type="primary">{{ item }}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ScrollAuto } from "v-scroll-auto";

export default {
  directives: {
    ScrollAuto
  }
};
</script>
```
