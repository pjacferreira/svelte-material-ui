import{K as t,S as e,i as n,s as r,_ as i,L as l,M as o,e as a,a as c,b as u,f as s,c as f,d,N as p,k as m,l as g,r as h,O as b,$ as y,P as v,Q as _,u as O,v as E,U as I,V as w,W as $,a3 as j,X as x,Y as L,Z as P,z as S}from"./client.ffb66db4.js";import{p as k}from"./prefixFilter.73eb3417.js";t(".mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var C=function(t,e){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function R(t,e){function n(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var H=function(){return(H=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function A(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,l=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}return o}function D(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(A(arguments[e]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),M=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,D(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new F({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}(),z={ROOT:"mdc-form-field"},T={LABEL_SELECTOR:".mdc-form-field > label"},U=function(t){function e(n){var r=t.call(this,H({},e.defaultAdapter,n))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return R(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return z},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},e}(F),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return R(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"input",{get:function(){return this.input_},set:function(t){this.input_=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label_",{get:function(){var t=U.strings.LABEL_SELECTOR;return this.root_.querySelector(t)},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new U({activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()},deregisterInteractionHandler:function(e,n){t.label_&&t.label_.removeEventListener(e,n)},registerInteractionHandler:function(e,n){t.label_&&t.label_.addEventListener(e,n)}})},e}(M);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const W=t=>({}),q=t=>({});function V(t){let e,n,r,w,$,j,x,L,P,S;const C=t[9].default,R=i(C,t,t[8],null),H=t[9].label,A=i(H,t,t[8],q);let D=[{for:t[3]},l(k(t[7],"label$"),["use"])],F={};for(let t=0;t<D.length;t+=1)F=o(F,D[t]);let M=[{class:$="\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "},l(t[7],["use","class","alignEnd","inputId","label$"])],z={};for(let t=0;t<M.length;t+=1)z=o(z,M[t]);return{c(){e=a("div"),R&&R.c(),n=c(),r=a("label"),A&&A.c(),this.h()},l(t){e=u(t,"DIV",{class:!0});var i=s(e);R&&R.l(i),n=f(i),r=u(i,"LABEL",{for:!0});var l=s(r);A&&A.l(l),l.forEach(d),i.forEach(d),this.h()},h(){p(r,F),p(e,z)},m(i,l){m(i,e,l),R&&R.m(e,null),g(e,n),g(e,r),A&&A.m(r,null),t[10](e),L=!0,P||(S=[h(w=b.call(null,r,t[4])),h(j=b.call(null,e,t[0])),h(x=t[6].call(null,e))],P=!0)},p(t,[n]){R&&R.p&&256&n&&y(R,C,t,t[8],n,null,null),A&&A.p&&256&n&&y(A,H,t,t[8],n,W,q),p(r,F=v(D,[(!L||8&n)&&{for:t[3]},128&n&&l(k(t[7],"label$"),["use"])])),w&&_(w.update)&&16&n&&w.update.call(null,t[4]),p(e,z=v(M,[(!L||6&n&&$!==($="\n    mdc-form-field\n    "+t[1]+"\n    "+("end"===t[2]?"mdc-form-field--align-end":"")+"\n  "))&&{class:$},128&n&&l(t[7],["use","class","alignEnd","inputId","label$"])])),j&&_(j.update)&&1&n&&j.update.call(null,t[0])},i(t){L||(O(R,t),O(A,t),L=!0)},o(t){E(R,t),E(A,t),L=!1},d(n){n&&d(e),R&&R.d(n),A&&A.d(n),t[10](null),P=!1,I(S)}}}let K=0;function N(t,e,n){let{$$slots:r={},$$scope:i}=e;const l=w($());let a,c,{use:u=[]}=e,{class:s=""}=e,{align:f="start"}=e,{inputId:d="SMUI-form-field-"+K++}=e,{label$use:p=[]}=e;return j("SMUI:form-field",(()=>c)),j("SMUI:generic:input:props",{id:d}),x((()=>{c=new B(a)})),L((()=>{c&&c.destroy()})),t.$$set=t=>{n(7,e=o(o({},e),P(t))),"use"in t&&n(0,u=t.use),"class"in t&&n(1,s=t.class),"align"in t&&n(2,f=t.align),"inputId"in t&&n(3,d=t.inputId),"label$use"in t&&n(4,p=t.label$use),"$$scope"in t&&n(8,i=t.$$scope)},e=P(e),[u,s,f,d,p,a,l,e,i,r,function(t){S[t?"unshift":"push"]((()=>{a=t,n(5,a)}))}]}class Q extends e{constructor(t){super(),n(this,t,N,V,r,{use:0,class:1,align:2,inputId:3,label$use:4})}}export{Q as F};
