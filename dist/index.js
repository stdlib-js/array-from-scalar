"use strict";var l=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=l(function(L,o){
var n=require('@stdlib/assert-is-number/dist').isPrimitive,c=require('@stdlib/assert-is-complex-like/dist'),f=require('@stdlib/array-base-assert-is-accessor-array/dist'),p=require('@stdlib/array-base-accessor-setter/dist'),g=require('@stdlib/array-base-setter/dist'),q=require('@stdlib/array-zeros/dist'),m=require('@stdlib/complex-dtype/dist'),u=require('@stdlib/array-defaults/dist'),_=u.get("dtypes.real_floating_point"),d=u.get("dtypes.complex_floating_point");function x(i){var r,t,s,e,a;return r=n(i),arguments.length<2?r?e=_:c(i)?(e=m(i),e===null&&(e=d)):e="generic":e=arguments[1],t=q(1,e),/^complex/.test(e)&&r?a=[i,0]:a=i,f(t)?s=p(e):s=g(e),s(t,0,a),t}o.exports=x
});var y=v();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
