# v-auto-scroll

v-auto-scroll description

## Usage

### Install

```
npm install --save v-auto-scroll
```

### Require element-ui

If your project does not use element-ui,
you need to introduce a separate element-ui package, like this:

```js
import 'v-auto-scroll/lib/element-ui';
```

### Global registration

```js
import Vue from 'vue';
import Component from 'v-auto-scroll';

Vue.use(Component);
```

### In-component registration

```js
import Component from 'v-auto-scroll';

export default {
  components: {
    Component
  }
};
```

### Complete example

```xml
<template>
  <div></div>
</template>

<script>
export default {};
</script>
```
