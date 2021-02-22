(function(e){function t(t){for(var r,a,o=t[0],s=t[1],u=t[2],p=0,v=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(v.length)v.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={main:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/v-auto-scroll/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;l.push(["a429","chunk-vendors"]),n()})({"1bec":function(e,t,n){},"48e7":function(e,t,n){},5302:function(e,t,n){"use strict";n("48e7")},7867:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div>\n    <label>Default:</label>\n    <ul class="cm-list-unstyled cm-padding-medium" v-auto-scroll>\n      <li class="cm-margin-top-base" v-for="item in 5" :key="item">\n        <el-button>{{ item }}</el-button>\n      </li>\n    </ul>\n    <label>speed = 5, axis = x:</label>\n    <ul\n      class="cm-list-unstyled cm-flex cm-padding-large cm-border-base"\n      v-auto-scroll:5.x\n    >\n      <li v-for="item in 10" :key="item">\n        <el-button style="width: 200px;" type="primary">{{\n          item\n        }}</el-button>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport { AutoScroll } from \'@/index\';\n\nexport default {\n  directives: {\n    AutoScroll\n  },\n  data() {\n    return {\n    };\n  }\n};\n<\/script>'},9224:function(e){e.exports=JSON.parse('{"name":"v-auto-scroll","version":"1.1.0","author":"yujinpan","module":"lib/index.js","typings":"types/index.d.ts","files":["lib","types","README.md"],"scripts":{"serve":"vue-cli-service serve","build":"cross-env NODE_ENV=production rollupx && eslint --fix types/**/*.d.ts","build:example":"vue-cli-service build","lint":"vue-cli-service lint","start":"npm run serve","test":"karma start test/unit/karma.config.js"},"peerDependencies":{"core-js":"^3.x","vue":"^2.x"},"dependencies":{},"devDependencies":{"@types/jasmine":"^3.6.0","@vue/cli-plugin-babel":"^4.5.9","@vue/cli-plugin-eslint":"^4.5.9","@vue/cli-plugin-typescript":"^4.5.9","@vue/cli-service":"^4.5.9","@vue/eslint-config-prettier":"^4.0.1","@vue/eslint-config-typescript":"^4.0.0","@yujinpan/common-modules":"^1.2.4","babel-eslint":"^10.0.1","babel-plugin-component":"^1.1.1","core-js":"^3.8.3","cross-env":"^5.2.0","dotenv":"^8.0.0","element-ui":"^2.x","eslint":"^5.16.0","eslint-plugin-prettier":"^3.1.0","eslint-plugin-vue":"^5.0.0","highlight-vue":"^1.0.0","jasmine-core":"^3.6.0","karma":"^5.2.3","karma-chrome-launcher":"^3.1.0","karma-jasmine":"^4.0.1","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","node-sass":"^4.12.0","rollupx":"^1.1.8","sass-loader":"^7.1.0","typescript":"~3.9.3","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.12","webpack":"^4.44.2"},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions"],"bugs":{"url":"https://github.com/yujinpan/v-auto-scroll/issues"},"homepage":"https://github.com/yujinpan/v-auto-scroll#readme","license":"MIT","repository":{"type":"git","url":"git+ssh://git@github.com/yujinpan/v-auto-scroll.git"}}')},a429:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app cm-padding-medium cm-text-center"},[n("h2",[e._v("v-auto-scroll")]),n("p",{staticClass:"cm-text-secondary"},[e._v("author: yujinpan - version: v"+e._s(e.version))]),n("el-divider"),n("el-row",{staticClass:"cm-text-left",attrs:{type:"flex"}},[n("el-col",{attrs:{span:12}},[n("Highlight",{attrs:{code:e.code,lang:"xml"}})],1),n("el-col",{staticClass:"cm-text-left",attrs:{span:12}},[n("div",[n("label",[e._v("Default:")]),n("ul",{directives:[{name:"auto-scroll",rawName:"v-auto-scroll"}],staticClass:"cm-list-unstyled cm-padding-medium"},e._l(5,(function(t){return n("li",{key:t,staticClass:"cm-margin-top-base"},[n("el-button",[e._v(e._s(t))])],1)})),0),n("label",[e._v("speed = 5, axis = x:")]),n("ul",{directives:[{name:"auto-scroll",rawName:"v-auto-scroll:5.x",arg:"5",modifiers:{x:!0}}],staticClass:"cm-list-unstyled cm-flex cm-padding-large cm-border-base"},e._l(10,(function(t){return n("li",{key:t},[n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"}},[e._v(e._s(t))])],1)})),0)]),n("el-divider"),n("el-link",{attrs:{type:"primary",href:"https://github.com/yujinpan/v-auto-scroll#attributes"}},[e._v("https://github.com/yujinpan/v-auto-scroll")])],1)],1)],1)},l=[],a=(n("99af"),n("4160"),n("a630"),n("3ca3"),n("159b"),{inserted:function(e,t){var n=t.value,r=t.modifiers,i=t.arg,l=n?e.querySelector(n):e;if(l.children.length>1){l.style.overflow="hidden";var a=r.x,o="string"===typeof i?+i:1,p=function(e){return u(l,0,-e)};a&&(p=function(e){return u(l,-e,0)});var v=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;p(0);var r=c(l,l.children[0]),i=r.vertical,u=r.horizontal,v=c(l,l.children[1]),d=v.vertical,m=v.horizontal,f=d,b=i;if(a&&(f=m,b=u),0===t&&(b=0),n&&(b+=n),f){var g=l.__auto_scroll__=s(f,p,(function(t){l.removeEventListener("mouseenter",g.stop),l.removeEventListener("mouseleave",g.start),g=null;var n=l.firstChild;n.remove(),l.append(n),e(1,t)}),b,o);l.addEventListener("mouseenter",g.stop),l.addEventListener("mouseleave",g.start)}};requestAnimationFrame((function(){return v(0)}))}},unbind:function(e,t){var n=t.value,r=(t.modifiers,t.arg,n?e.querySelector(n):e);if(r&&r.__auto_scroll__){var i=r.__auto_scroll__;i.stop(),r.removeEventListener("mouseenter",i.stop),r.removeEventListener("mouseleave",i.start),delete r.__auto_scroll__}}}),o=a;function s(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=i,o=function i(){r=0,t(a),a>=e?n(a-e):(a+=l,r=requestAnimationFrame(i))};return o(),{stop:function(){cancelAnimationFrame(r),r=0},start:function(){0===r&&(r=requestAnimationFrame(o))}}}function u(e,t,n){var r="translate(".concat(t,"px, ").concat(n,"px)");Array.from(e.children).forEach((function(e){return e.style.transform=r}))}function c(e,t){var n=e.getBoundingClientRect(),r=n.top,i=n.left,l=t.getBoundingClientRect(),a=l.top,o=l.left;return{vertical:Math.abs(r-a),horizontal:Math.abs(i-o)}}o.install=function(e){e.directive("auto-scroll",o)};var p=o,v=n("9224").version,d={directives:{AutoScroll:p},data:function(){return{version:v,code:n("7867").default}}},m=d,f=(n("5302"),n("2877")),b=Object(f["a"])(m,i,l,!1,null,"e51aa920",null),g=b.exports,y=n("5c96"),h=n.n(y);n("0fae");r["default"].use(h.a);n("1bec");var _=n("5b25");n("efe0");r["default"].use(_["a"]),r["default"].config.productionTip=!1,new r["default"]({el:"#app",render:function(e){return e(g)}})}});