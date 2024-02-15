// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.2.0-esm/index.mjs";var l=n.get("dtypes.real_floating_point"),o=n.get("dtypes.complex_floating_point");function a(n){var a,p,j,c;return a=s(n),arguments.length<2?a?j=l:e(n)?null===(j=m(n))&&(j=o):j="generic":j=arguments[1],p=d(1,j),c=/^complex/.test(j)&&a?[n,0]:n,(t(p)?r(j):i(j))(p,0,c),p}export{a as default};
//# sourceMappingURL=index.mjs.map
