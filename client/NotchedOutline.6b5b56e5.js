import{S as t,i as n,s as e,E as o,k as r,F as i,v as a,G as s,u,d as c,V as l,W as f,a2 as d,X as p,Y as h,M as y,Z as _,z as v,_ as m,L as E,e as g,b,f as C,N as L,r as O,O as A,$ as P,P as I,Q as N,U as w,n as T,j as D,a as H,c as $,l as S}from"./client.ffb66db4.js";
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
***************************************************************************** */var j=function(t,n){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function W(t,n){function e(){this.constructor=t}j(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var R=function(){return(R=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function k(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function B(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(k(arguments[n]));return t}
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
 */var F=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),V=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,B(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new F({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),x={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},M=function(t){function n(e){var o=t.call(this,R({},n.defaultAdapter,e))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return W(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.getWidth=function(){return this.adapter_.getWidth()},n.prototype.shake=function(t){var e=n.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.float=function(t){var e=n.cssClasses,o=e.LABEL_FLOAT_ABOVE,r=e.LABEL_SHAKE;t?this.adapter_.addClass(o):(this.adapter_.removeClass(o),this.adapter_.removeClass(r))},n.prototype.handleShakeAnimationEnd_=function(){var t=n.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},n}(F),G=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return W(n,t),n.attachTo=function(t){return new n(t)},n.prototype.shake=function(t){this.foundation_.shake(t)},n.prototype.float=function(t){this.foundation_.float(t)},n.prototype.getWidth=function(){return this.foundation_.getWidth()},n.prototype.getDefaultFoundation=function(){var t=this;return new M({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},getWidth:function(){return t.root_.scrollWidth},registerInteractionHandler:function(n,e){return t.listen(n,e)},deregisterInteractionHandler:function(n,e){return t.unlisten(n,e)}})},n}(V);
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
 */function U(t){let n,e,o,i,s,l,f;const d=t[12].default,p=m(d,t,t[11],null);let h=[{class:e="mdc-floating-label "+t[1]},t[2]||t[6]&&t[6].id?{for:t[2]||t[6]&&t[6].id}:{},E(t[7],["use","class","for","wrapped"])],_={};for(let t=0;t<h.length;t+=1)_=y(_,h[t]);return{c(){n=g("label"),p&&p.c(),this.h()},l(t){n=b(t,"LABEL",{class:!0});var e=C(n);p&&p.l(e),e.forEach(c),this.h()},h(){L(n,_)},m(e,a){r(e,n,a),p&&p.m(n,null),t[14](n),s=!0,l||(f=[O(o=A.call(null,n,t[0])),O(i=t[5].call(null,n))],l=!0)},p(t,r){p&&p.p&&2048&r&&P(p,d,t,t[11],r,null,null),L(n,_=I(h,[(!s||2&r&&e!==(e="mdc-floating-label "+t[1]))&&{class:e},4&r&&(t[2]||t[6]&&t[6].id?{for:t[2]||t[6]&&t[6].id}:{}),128&r&&E(t[7],["use","class","for","wrapped"])])),o&&N(o.update)&&1&r&&o.update.call(null,t[0])},i(t){s||(u(p,t),s=!0)},o(t){a(p,t),s=!1},d(e){e&&c(n),p&&p.d(e),t[14](null),l=!1,w(f)}}}function K(t){let n,e,o,i,s,l,f;const d=t[12].default,p=m(d,t,t[11],null);let h=[{class:e="mdc-floating-label "+t[1]},E(t[7],["use","class","wrapped"])],_={};for(let t=0;t<h.length;t+=1)_=y(_,h[t]);return{c(){n=g("span"),p&&p.c(),this.h()},l(t){n=b(t,"SPAN",{class:!0});var e=C(n);p&&p.l(e),e.forEach(c),this.h()},h(){L(n,_)},m(e,a){r(e,n,a),p&&p.m(n,null),t[13](n),s=!0,l||(f=[O(o=A.call(null,n,t[0])),O(i=t[5].call(null,n))],l=!0)},p(t,r){p&&p.p&&2048&r&&P(p,d,t,t[11],r,null,null),L(n,_=I(h,[(!s||2&r&&e!==(e="mdc-floating-label "+t[1]))&&{class:e},128&r&&E(t[7],["use","class","wrapped"])])),o&&N(o.update)&&1&r&&o.update.call(null,t[0])},i(t){s||(u(p,t),s=!0)},o(t){a(p,t),s=!1},d(e){e&&c(n),p&&p.d(e),t[13](null),l=!1,w(f)}}}function z(t){let n,e,l,f;const d=[K,U],p=[];function h(t,n){return t[3]?0:1}return n=h(t),e=p[n]=d[n](t),{c(){e.c(),l=o()},l(t){e.l(t),l=o()},m(t,e){p[n].m(t,e),r(t,l,e),f=!0},p(t,[o]){let r=n;n=h(t),n===r?p[n].p(t,o):(i(),a(p[r],1,1,(()=>{p[r]=null})),s(),e=p[n],e?e.p(t,o):(e=p[n]=d[n](t),e.c()),u(e,1),e.m(l.parentNode,l))},i(t){f||(u(e),f=!0)},o(t){a(e),f=!1},d(t){p[n].d(t),t&&c(l)}}}function q(t,n,e){let{$$slots:o={},$$scope:r}=n;const i=l(f());let a,s,{use:u=[]}=n,{class:c=""}=n,{for:m=""}=n,{wrapped:E=!1}=n,g=d("SMUI:generic:input:props")||{};return p((()=>{s=new G(a)})),h((()=>{s&&s.destroy()})),t.$$set=t=>{e(7,n=y(y({},n),_(t))),"use"in t&&e(0,u=t.use),"class"in t&&e(1,c=t.class),"for"in t&&e(2,m=t.for),"wrapped"in t&&e(3,E=t.wrapped),"$$scope"in t&&e(11,r=t.$$scope)},n=_(n),[u,c,m,E,a,i,g,n,function(t,...n){return s.shake(t,...n)},function(t,...n){return s.float(t,...n)},function(...t){return s.getWidth(...t)},r,o,function(t){v[t?"unshift":"push"]((()=>{a=t,e(4,a)}))},function(t){v[t?"unshift":"push"]((()=>{a=t,e(4,a)}))}]}class Q extends t{constructor(t){super(),n(this,t,q,z,e,{use:0,class:1,for:2,wrapped:3,shake:8,float:9,getWidth:10})}get shake(){return this.$$.ctx[8]}get float(){return this.$$.ctx[9]}get getWidth(){return this.$$.ctx[10]}}
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
***************************************************************************** */var X=function(t,n){return(X=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function Y(t,n){function e(){this.constructor=t}X(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var Z=function(){return(Z=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function J(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function tt(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(J(arguments[n]));return t}
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
 */var nt=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),et=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,tt(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new nt({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),ot={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},rt=function(t){function n(e){var o=t.call(this,Z({},n.defaultAdapter,e))||this;return o.transitionEndHandler_=function(t){return o.handleTransitionEnd(t)},o}return Y(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return ot},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.activate=function(){this.adapter_.removeClass(ot.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(ot.LINE_RIPPLE_ACTIVE)},n.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},n.prototype.deactivate=function(){this.adapter_.addClass(ot.LINE_RIPPLE_DEACTIVATING)},n.prototype.handleTransitionEnd=function(t){var n=this.adapter_.hasClass(ot.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&n&&(this.adapter_.removeClass(ot.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(ot.LINE_RIPPLE_DEACTIVATING))},n}(nt),it=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Y(n,t),n.attachTo=function(t){return new n(t)},n.prototype.activate=function(){this.foundation_.activate()},n.prototype.deactivate=function(){this.foundation_.deactivate()},n.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new rt({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},hasClass:function(n){return t.root_.classList.contains(n)},setStyle:function(n,e){return t.root_.style.setProperty(n,e)},registerEventHandler:function(n,e){return t.listen(n,e)},deregisterEventHandler:function(n,e){return t.unlisten(n,e)}})},n}(et);
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
 */function at(t){let n,e,o,i,a,s,u=[{class:e="\n    mdc-line-ripple\n    "+t[1]+"\n    "+(t[2]?"mdc-line-ripple--active":"")+"\n  "},E(t[5],["use","class","active"])],l={};for(let t=0;t<u.length;t+=1)l=y(l,u[t]);return{c(){n=g("div"),this.h()},l(t){n=b(t,"DIV",{class:!0}),C(n).forEach(c),this.h()},h(){L(n,l)},m(e,u){r(e,n,u),t[9](n),a||(s=[O(o=A.call(null,n,t[0])),O(i=t[4].call(null,n))],a=!0)},p(t,[r]){L(n,l=I(u,[6&r&&e!==(e="\n    mdc-line-ripple\n    "+t[1]+"\n    "+(t[2]?"mdc-line-ripple--active":"")+"\n  ")&&{class:e},32&r&&E(t[5],["use","class","active"])])),o&&N(o.update)&&1&r&&o.update.call(null,t[0])},i:T,o:T,d(e){e&&c(n),t[9](null),a=!1,w(s)}}}function st(t,n,e){const o=l(f());let r,i,{use:a=[]}=n,{class:s=""}=n,{active:u=!1}=n;return p((()=>{i=new it(r)})),h((()=>{i&&i.destroy()})),t.$$set=t=>{e(5,n=y(y({},n),_(t))),"use"in t&&e(0,a=t.use),"class"in t&&e(1,s=t.class),"active"in t&&e(2,u=t.active)},n=_(n),[a,s,u,r,o,n,function(...t){return i.activate(...t)},function(...t){return i.deactivate(...t)},function(t,...n){return i.setRippleCenter(t,...n)},function(t){v[t?"unshift":"push"]((()=>{r=t,e(3,r)}))}]}class ut extends t{constructor(t){super(),n(this,t,st,at,e,{use:0,class:1,active:2,activate:6,deactivate:7,setRippleCenter:8})}get activate(){return this.$$.ctx[6]}get deactivate(){return this.$$.ctx[7]}get setRippleCenter(){return this.$$.ctx[8]}}
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
***************************************************************************** */var ct=function(t,n){return(ct=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function lt(t,n){function e(){this.constructor=t}ct(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var ft=function(){return(ft=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function dt(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return a}function pt(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(dt(arguments[n]));return t}
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
 */var ht=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),yt=function(){function t(t,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];this.root_=t,this.initialize.apply(this,pt(e)),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new ht({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n,e){this.root_.addEventListener(t,n,e)},t.prototype.unlisten=function(t,n,e){this.root_.removeEventListener(t,n,e)},t.prototype.emit=function(t,n,e){var o;void 0===e&&(e=!1),"function"==typeof CustomEvent?o=new CustomEvent(t,{bubbles:e,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,!1,n),this.root_.dispatchEvent(o)},t}(),_t={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},vt=function(t){function n(e){var o=t.call(this,ft({},n.defaultAdapter,e))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return lt(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return _t},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.getWidth=function(){return this.adapter_.getWidth()},n.prototype.shake=function(t){var e=n.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.float=function(t){var e=n.cssClasses,o=e.LABEL_FLOAT_ABOVE,r=e.LABEL_SHAKE;t?this.adapter_.addClass(o):(this.adapter_.removeClass(o),this.adapter_.removeClass(r))},n.prototype.handleShakeAnimationEnd_=function(){var t=n.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},n}(ht),mt={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Et={NOTCH_ELEMENT_PADDING:8},gt={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},bt=function(t){function n(e){return t.call(this,ft({},n.defaultAdapter,e))||this}return lt(n,t),Object.defineProperty(n,"strings",{get:function(){return mt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return gt},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return Et},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),n.prototype.notch=function(t){var e=n.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Et.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(e)},n.prototype.closeNotch=function(){var t=n.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},n}(ht),Ct=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return lt(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(mt.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+vt.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(gt.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root_.classList.add(gt.NO_LABEL)},n.prototype.notch=function(t){this.foundation_.notch(t)},n.prototype.closeNotch=function(){this.foundation_.closeNotch()},n.prototype.getDefaultFoundation=function(){var t=this;return new bt({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},setNotchWidthProperty:function(n){return t.notchElement_.style.setProperty("width",n+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}})},n}(yt);
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
 */function Lt(t){let n,e;const o=t[10].default,i=m(o,t,t[9],null);return{c(){n=g("div"),i&&i.c(),this.h()},l(t){n=b(t,"DIV",{class:!0});var e=C(n);i&&i.l(e),e.forEach(c),this.h()},h(){D(n,"class","mdc-notched-outline__notch")},m(t,o){r(t,n,o),i&&i.m(n,null),e=!0},p(t,n){i&&i.p&&512&n&&P(i,o,t,t[9],n,null,null)},i(t){e||(u(i,t),e=!0)},o(t){a(i,t),e=!1},d(t){t&&c(n),i&&i.d(t)}}}function Ot(t){let n,e,o,l,f,d,p,h,_,v,m,P=!t[3]&&Lt(t),T=[{class:d="\n    mdc-notched-outline\n    "+t[1]+"\n    "+(t[2]?"mdc-notched-outline--notched":"")+"\n    "+(t[3]?"mdc-notched-outline--no-label":"")+"\n  "},E(t[6],["use","class","notched","noLabel"])],j={};for(let t=0;t<T.length;t+=1)j=y(j,T[t]);return{c(){n=g("div"),e=g("div"),o=H(),P&&P.c(),l=H(),f=g("div"),this.h()},l(t){n=b(t,"DIV",{class:!0});var r=C(n);e=b(r,"DIV",{class:!0}),C(e).forEach(c),o=$(r),P&&P.l(r),l=$(r),f=b(r,"DIV",{class:!0}),C(f).forEach(c),r.forEach(c),this.h()},h(){D(e,"class","mdc-notched-outline__leading"),D(f,"class","mdc-notched-outline__trailing"),L(n,j)},m(i,a){r(i,n,a),S(n,e),S(n,o),P&&P.m(n,null),S(n,l),S(n,f),t[11](n),_=!0,v||(m=[O(p=A.call(null,n,t[0])),O(h=t[5].call(null,n))],v=!0)},p(t,[e]){t[3]?P&&(i(),a(P,1,1,(()=>{P=null})),s()):P?(P.p(t,e),8&e&&u(P,1)):(P=Lt(t),P.c(),u(P,1),P.m(n,l)),L(n,j=I(T,[(!_||14&e&&d!==(d="\n    mdc-notched-outline\n    "+t[1]+"\n    "+(t[2]?"mdc-notched-outline--notched":"")+"\n    "+(t[3]?"mdc-notched-outline--no-label":"")+"\n  "))&&{class:d},64&e&&E(t[6],["use","class","notched","noLabel"])])),p&&N(p.update)&&1&e&&p.update.call(null,t[0])},i(t){_||(u(P),_=!0)},o(t){a(P),_=!1},d(e){e&&c(n),P&&P.d(),t[11](null),v=!1,w(m)}}}function At(t,n,e){let{$$slots:o={},$$scope:r}=n;const i=l(f());let a,s,{use:u=[]}=n,{class:c=""}=n,{notched:d=!1}=n,{noLabel:m=!1}=n;return p((()=>{s=new Ct(a)})),h((()=>{s&&s.destroy()})),t.$$set=t=>{e(6,n=y(y({},n),_(t))),"use"in t&&e(0,u=t.use),"class"in t&&e(1,c=t.class),"notched"in t&&e(2,d=t.notched),"noLabel"in t&&e(3,m=t.noLabel),"$$scope"in t&&e(9,r=t.$$scope)},n=_(n),[u,c,d,m,a,i,n,function(t,...n){return s.notch(t,...n)},function(...t){return s.closeNotch(...t)},r,o,function(t){v[t?"unshift":"push"]((()=>{a=t,e(4,a)}))}]}class Pt extends t{constructor(t){super(),n(this,t,At,Ot,e,{use:0,class:1,notched:2,noLabel:3,notch:7,closeNotch:8})}get notch(){return this.$$.ctx[7]}get closeNotch(){return this.$$.ctx[8]}}export{Q as F,ut as L,Pt as N};
