"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=u(function(o,i){
var s=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/fft-base-fftpack-generic-cffti/dist'),f=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function n(e){var r,t;return r=e[0],t=f(e[1]),c(t,q(r),s(r,0),v(r)),r}i.exports=n
});var d=a();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
