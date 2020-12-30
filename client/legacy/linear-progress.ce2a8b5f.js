import { X as styleInject, Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, a3 as exclude, a4 as assign, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, a7 as onMount, a8 as onDestroy, a9 as exclude_internal_props, aa as useActions, g as element, f as space, k as claim_element, l as children, h as detach_dev, j as claim_space, o as attr_dev, p as add_location, ab as set_attributes, r as insert_dev, u as append_dev, A as action_destroyer, ac as _slicedToArray, ad as get_spread_update, ae as is_function, v as noop, af as run_all, L as binding_callbacks, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, ag as Button_1, t as text, x as create_component, q as query_selector_all, m as claim_text, y as claim_component, z as mount_component, B as _slicedToArray$1, C as transition_in, D as transition_out, E as destroy_component, M as bind, N as add_flush_callback } from './client.6af0488b.js';
import { C as Checkbox } from './Checkbox.83ec3b41.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './FormField.6294fc9f.js';

var css_248z = "@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}to{transform:translateX(200.61106%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}to{transform:scaleX(.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}to{transform:translateX(160.27778%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);transform:scaleX(.72796)}to{transform:scaleX(.08)}}@keyframes buffering{to{transform:translateX(-10px)}}@keyframes primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-83.67142%)}to{transform:translateX(-200.61106%)}}@keyframes secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(-37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(-84.38617%)}to{transform:translateX(-160.27778%)}}@keyframes buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);overflow:hidden;transition:opacity .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;height:100%;animation:none}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;background-repeat:repeat-x;background-size:10px 4px;animation:buffering .25s linear infinite}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:primary-indeterminate-translate 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:primary-indeterminate-scale 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:secondary-indeterminate-translate 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:secondary-indeterminate-scale 2s linear infinite}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:buffering-reverse .25s linear infinite}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}.mdc-linear-progress__buffering-dots{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}";
styleInject(css_248z);

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

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

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
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

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
 */

var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

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
 */
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = (standard in el.style);
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}

/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
var cssClasses = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed'
};
var strings = {
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar'
};

/**
 * @license
 * Copyright 2017 Google Inc.
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
 */

var MDCLinearProgressFoundation =
/** @class */
function (_super) {
  __extends(MDCLinearProgressFoundation, _super);

  function MDCLinearProgressFoundation(adapter) {
    return _super.call(this, _assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        getBuffer: function getBuffer() {
          return null;
        },
        getPrimaryBar: function getPrimaryBar() {
          return null;
        },
        hasClass: function hasClass() {
          return false;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setStyle: function setStyle() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgressFoundation.prototype.init = function () {
    this.isDeterminate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
    this.isReversed_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
    this.progress_ = 0;
  };

  MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
    this.isDeterminate_ = isDeterminate;

    if (this.isDeterminate_) {
      this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
    } else {
      this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  };

  MDCLinearProgressFoundation.prototype.setProgress = function (value) {
    this.progress_ = value;

    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
    this.isReversed_ = isReversed;

    if (this.isReversed_) {
      this.adapter_.addClass(cssClasses.REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
    }
  };

  MDCLinearProgressFoundation.prototype.open = function () {
    this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.close = function () {
    this.adapter_.addClass(cssClasses.CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
    if (!el) {
      return;
    }

    var value = "scaleX(" + scaleValue + ")";
    this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
  };

  return MDCLinearProgressFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2017 Google Inc.
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
 */

var MDCLinearProgress =
/** @class */
function (_super) {
  __extends(MDCLinearProgress, _super);

  function MDCLinearProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLinearProgress.attachTo = function (root) {
    return new MDCLinearProgress(root);
  };

  Object.defineProperty(MDCLinearProgress.prototype, "determinate", {
    set: function set(value) {
      this.foundation_.setDeterminate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "progress", {
    set: function set(value) {
      this.foundation_.setProgress(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "buffer", {
    set: function set(value) {
      this.foundation_.setBuffer(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "reverse", {
    set: function set(value) {
      this.foundation_.setReverse(value);
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgress.prototype.open = function () {
    this.foundation_.open();
  };

  MDCLinearProgress.prototype.close = function () {
    this.foundation_.close();
  };

  MDCLinearProgress.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      getBuffer: function getBuffer() {
        return _this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR);
      },
      getPrimaryBar: function getPrimaryBar() {
        return _this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setStyle: function setStyle(el, styleProperty, value) {
        return el.style.setProperty(styleProperty, value);
      }
    };
    return new MDCLinearProgressFoundation(adapter);
  };

  return MDCLinearProgress;
}(MDCComponent);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/linear-progress/LinearProgress.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var t0;
  var div1;
  var t1;
  var div2;
  var span0;
  var t2;
  var div3;
  var span1;
  var div4_class_value;
  var useActions_action;
  var forwardEvents_action;
  var mounted;
  var dispose;
  var div4_levels = [{
    class: div4_class_value = "\n    mdc-linear-progress\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*indeterminate*/
    ctx[2] ? "mdc-linear-progress--indeterminate" : "") + "\n    " + (
    /*reversed*/
    ctx[3] ? "mdc-linear-progress--reversed" : "") + "\n    " + (
    /*closed*/
    ctx[4] ? "mdc-linear-progress--closed" : "") + "\n  "
  }, {
    role: "progressbar"
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "indeterminate", "reversed", "closed", "progress"])];
  var div4_data = {};

  for (var i = 0; i < div4_levels.length; i += 1) {
    div4_data = assign(div4_data, div4_levels[i]);
  }

  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      span0 = element("span");
      t2 = space();
      div3 = element("div");
      span1 = element("span");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        role: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      span0 = claim_element(div2_nodes, "SPAN", {
        class: true
      });
      children(span0).forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      span1 = claim_element(div3_nodes, "SPAN", {
        class: true
      });
      children(span1).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-linear-progress__buffering-dots");
      add_location(div0, file, 14, 2, 410);
      attr_dev(div1, "class", "mdc-linear-progress__buffer");
      add_location(div1, file, 15, 2, 468);
      attr_dev(span0, "class", "mdc-linear-progress__bar-inner");
      add_location(span0, file, 17, 4, 594);
      attr_dev(div2, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
      add_location(div2, file, 16, 2, 518);
      attr_dev(span1, "class", "mdc-linear-progress__bar-inner");
      add_location(span1, file, 20, 4, 736);
      attr_dev(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
      add_location(div3, file, 19, 2, 658);
      set_attributes(div4, div4_data);
      add_location(div4, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div4, t0);
      append_dev(div4, div1);
      append_dev(div4, t1);
      append_dev(div4, div2);
      append_dev(div2, span0);
      append_dev(div4, t2);
      append_dev(div4, div3);
      append_dev(div3, span1);
      /*div4_binding*/

      ctx[11](div4);

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, div4,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[6].call(null, div4))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(div4, div4_data = get_spread_update(div4_levels, [dirty &
      /*className, indeterminate, reversed, closed*/
      30 && div4_class_value !== (div4_class_value = "\n    mdc-linear-progress\n    " +
      /*className*/
      ctx[1] + "\n    " + (
      /*indeterminate*/
      ctx[2] ? "mdc-linear-progress--indeterminate" : "") + "\n    " + (
      /*reversed*/
      ctx[3] ? "mdc-linear-progress--reversed" : "") + "\n    " + (
      /*closed*/
      ctx[4] ? "mdc-linear-progress--closed" : "") + "\n  ") && {
        class: div4_class_value
      }, {
        role: "progressbar"
      }, dirty &
      /*$$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "indeterminate", "reversed", "closed", "progress"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      /*div4_binding*/

      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("LinearProgress", slots, []);
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$indetermina = _$$props4.indeterminate,
      indeterminate = _$$props4$indetermina === void 0 ? false : _$$props4$indetermina;
  var _$$props5 = $$props,
      _$$props5$reversed = _$$props5.reversed,
      reversed = _$$props5$reversed === void 0 ? false : _$$props5$reversed;
  var _$$props6 = $$props,
      _$$props6$closed = _$$props6.closed,
      closed = _$$props6$closed === void 0 ? false : _$$props6$closed;
  var _$$props7 = $$props,
      _$$props7$progress = _$$props7.progress,
      progress = _$$props7$progress === void 0 ? 0 : _$$props7$progress;
  var _$$props8 = $$props,
      _$$props8$buffer = _$$props8.buffer,
      buffer = _$$props8$buffer === void 0 ? null : _$$props8$buffer;
  var element;
  var linearProgress;
  onMount(function () {
    $$invalidate(10, linearProgress = new MDCLinearProgress(element));
  });
  onDestroy(function () {
    linearProgress && linearProgress.destroy();
  });

  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(5, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("indeterminate" in $$new_props) $$invalidate(2, indeterminate = $$new_props.indeterminate);
    if ("reversed" in $$new_props) $$invalidate(3, reversed = $$new_props.reversed);
    if ("closed" in $$new_props) $$invalidate(4, closed = $$new_props.closed);
    if ("progress" in $$new_props) $$invalidate(8, progress = $$new_props.progress);
    if ("buffer" in $$new_props) $$invalidate(9, buffer = $$new_props.buffer);
  };

  $$self.$capture_state = function () {
    return {
      MDCLinearProgress: MDCLinearProgress,
      onMount: onMount,
      onDestroy: onDestroy,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      indeterminate: indeterminate,
      reversed: reversed,
      closed: closed,
      progress: progress,
      buffer: buffer,
      element: element,
      linearProgress: linearProgress
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("indeterminate" in $$props) $$invalidate(2, indeterminate = $$new_props.indeterminate);
    if ("reversed" in $$props) $$invalidate(3, reversed = $$new_props.reversed);
    if ("closed" in $$props) $$invalidate(4, closed = $$new_props.closed);
    if ("progress" in $$props) $$invalidate(8, progress = $$new_props.progress);
    if ("buffer" in $$props) $$invalidate(9, buffer = $$new_props.buffer);
    if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
    if ("linearProgress" in $$props) $$invalidate(10, linearProgress = $$new_props.linearProgress);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*linearProgress, indeterminate*/
    1028) {
       if (linearProgress) {
        $$invalidate(10, linearProgress.determinate = !indeterminate, linearProgress);
      }
    }

    if ($$self.$$.dirty &
    /*linearProgress, progress*/
    1280) {
       if (linearProgress) {
        $$invalidate(10, linearProgress.progress = progress, linearProgress);
      }
    }

    if ($$self.$$.dirty &
    /*linearProgress, buffer*/
    1536) {
       if (linearProgress) {
        $$invalidate(10, linearProgress.buffer = buffer, linearProgress);
      }
    }

    if ($$self.$$.dirty &
    /*linearProgress, reversed*/
    1032) {
       if (linearProgress) {
        $$invalidate(10, linearProgress.reverse = reversed, linearProgress);
      }
    }

    if ($$self.$$.dirty &
    /*linearProgress, closed*/
    1040) {
       if (linearProgress) {
        if (closed) {
          linearProgress.close();
        } else {
          linearProgress.open();
        }
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, className, indeterminate, reversed, closed, element, forwardEvents, $$props, progress, buffer, linearProgress, div4_binding];
}

var LinearProgress = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(LinearProgress, _SvelteComponentDev);

  var _super = _createSuper(LinearProgress);

  function LinearProgress(options) {
    var _this;

    _classCallCheck(this, LinearProgress);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      indeterminate: 2,
      reversed: 3,
      closed: 4,
      progress: 8,
      buffer: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "LinearProgress",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(LinearProgress, [{
    key: "use",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "indeterminate",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "reversed",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "closed",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "progress",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "buffer",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return LinearProgress;
}(SvelteComponentDev);

var css_248z$1 = ".my-colored-bar .mdc-linear-progress__bar-inner{background-color:#4caf50}.my-colored-bar .mdc-linear-progress__buffering-dots{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23c8e6c9'/%3E%3C/svg%3E\")}.my-colored-bar .mdc-linear-progress__buffer{background-color:#c8e6c9}";
styleInject(css_248z$1);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/demo/linear-progress.svelte"; // (13:4) <Button on:click={reset}>

function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Reset");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Reset");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(13:4) <Button on:click={reset}>",
    ctx: ctx
  });
  return block;
} // (17:6) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Closed");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Closed");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file$1, 16, 6, 280);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot.name,
    type: "slot",
    source: "(17:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (15:4) <FormField>


function create_default_slot(ctx) {
  var checkbox;
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[3].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*closed*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*closed*/
    ctx[1];
  }

  checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty &
      /*closed*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*closed*/
        ctx[1];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(15:4) <FormField>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var linearprogress0;
  var t3;
  var br;
  var t4;
  var button;
  var t5;
  var formfield;
  var t6;
  var div1;
  var t7;
  var linearprogress1;
  var t8;
  var div2;
  var t9;
  var linearprogress2;
  var t10;
  var div3;
  var t11;
  var linearprogress3;
  var t12;
  var div4;
  var t13;
  var linearprogress4;
  var t14;
  var div5;
  var t15;
  var linearprogress5;
  var current;
  linearprogress0 = new LinearProgress({
    props: {
      progress:
      /*progress*/
      ctx[0],
      closed:
      /*closed*/
      ctx[1]
    },
    $$inline: true
  });
  button = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click",
  /*reset*/
  ctx[2]);
  formfield = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  linearprogress1 = new LinearProgress({
    props: {
      progress: 0.5,
      buffer: 0.75
    },
    $$inline: true
  });
  linearprogress2 = new LinearProgress({
    props: {
      indeterminate: true
    },
    $$inline: true
  });
  linearprogress3 = new LinearProgress({
    props: {
      progress: 0.5,
      reversed: true
    },
    $$inline: true
  });
  linearprogress4 = new LinearProgress({
    props: {
      progress: 0.5,
      buffer: 0.75,
      reversed: true
    },
    $$inline: true
  });
  linearprogress5 = new LinearProgress({
    props: {
      class: "my-colored-bar",
      progress: 0.5,
      buffer: 0.75
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Linear Progress");
      t2 = space();
      div0 = element("div");
      create_component(linearprogress0.$$.fragment);
      t3 = space();
      br = element("br");
      t4 = space();
      create_component(button.$$.fragment);
      t5 = space();
      create_component(formfield.$$.fragment);
      t6 = space();
      div1 = element("div");
      t7 = text("Buffered:\n\n    ");
      create_component(linearprogress1.$$.fragment);
      t8 = space();
      div2 = element("div");
      t9 = text("Indeterminate:\n\n    ");
      create_component(linearprogress2.$$.fragment);
      t10 = space();
      div3 = element("div");
      t11 = text("Reversed:\n\n    ");
      create_component(linearprogress3.$$.fragment);
      t12 = space();
      div4 = element("div");
      t13 = text("Reversed Buffered:\n\n    ");
      create_component(linearprogress4.$$.fragment);
      t14 = space();
      div5 = element("div");
      t15 = text("Colored (using Sass mixins):\n\n    ");
      create_component(linearprogress5.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1et0h80\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Linear Progress");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(linearprogress0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      br = claim_element(div0_nodes, "BR", {});
      t4 = claim_space(div0_nodes);
      claim_component(button.$$.fragment, div0_nodes);
      t5 = claim_space(div0_nodes);
      claim_component(formfield.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Buffered:\n\n    ");
      claim_component(linearprogress1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "Indeterminate:\n\n    ");
      claim_component(linearprogress2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t11 = claim_text(div3_nodes, "Reversed:\n\n    ");
      claim_component(linearprogress3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t13 = claim_text(div4_nodes, "Reversed Buffered:\n\n    ");
      claim_component(linearprogress4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {});
      var div5_nodes = children(div5);
      t15 = claim_text(div5_nodes, "Colored (using Sass mixins):\n\n    ");
      claim_component(linearprogress5.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Linear Progress - SMUI";
      add_location(h2, file$1, 5, 2, 82);
      add_location(br, file$1, 10, 4, 164);
      add_location(div0, file$1, 7, 2, 110);
      add_location(div1, file$1, 20, 2, 342);
      add_location(div2, file$1, 26, 2, 425);
      add_location(div3, file$1, 32, 2, 500);
      add_location(div4, file$1, 38, 2, 579);
      add_location(div5, file$1, 44, 2, 680);
      add_location(section, file$1, 4, 0, 70);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(linearprogress0, div0, null);
      append_dev(div0, t3);
      append_dev(div0, br);
      append_dev(div0, t4);
      mount_component(button, div0, null);
      append_dev(div0, t5);
      mount_component(formfield, div0, null);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(linearprogress1, div1, null);
      append_dev(section, t8);
      append_dev(section, div2);
      append_dev(div2, t9);
      mount_component(linearprogress2, div2, null);
      append_dev(section, t10);
      append_dev(section, div3);
      append_dev(div3, t11);
      mount_component(linearprogress3, div3, null);
      append_dev(section, t12);
      append_dev(section, div4);
      append_dev(div4, t13);
      mount_component(linearprogress4, div4, null);
      append_dev(section, t14);
      append_dev(section, div5);
      append_dev(div5, t15);
      mount_component(linearprogress5, div5, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var linearprogress0_changes = {};
      if (dirty &
      /*progress*/
      1) linearprogress0_changes.progress =
      /*progress*/
      ctx[0];
      if (dirty &
      /*closed*/
      2) linearprogress0_changes.closed =
      /*closed*/
      ctx[1];
      linearprogress0.$set(linearprogress0_changes);
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      32) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
      var formfield_changes = {};

      if (dirty &
      /*$$scope, closed*/
      34) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(linearprogress0.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(formfield.$$.fragment, local);
      transition_in(linearprogress1.$$.fragment, local);
      transition_in(linearprogress2.$$.fragment, local);
      transition_in(linearprogress3.$$.fragment, local);
      transition_in(linearprogress4.$$.fragment, local);
      transition_in(linearprogress5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linearprogress0.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(formfield.$$.fragment, local);
      transition_out(linearprogress1.$$.fragment, local);
      transition_out(linearprogress2.$$.fragment, local);
      transition_out(linearprogress3.$$.fragment, local);
      transition_out(linearprogress4.$$.fragment, local);
      transition_out(linearprogress5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(linearprogress0);
      destroy_component(button);
      destroy_component(formfield);
      destroy_component(linearprogress1);
      destroy_component(linearprogress2);
      destroy_component(linearprogress3);
      destroy_component(linearprogress4);
      destroy_component(linearprogress5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Linear_progress", slots, []);
  var progress = 0;
  var closed = false;
  var timer;
  onMount(reset);
  onDestroy(function () {
    clearInterval(timer);
  });

  function reset() {
    $$invalidate(0, progress = 0);
    $$invalidate(1, closed = false);
    clearInterval(timer);
    timer = setInterval(function () {
      $$invalidate(0, progress += 0.01);

      if (progress >= 1) {
        $$invalidate(0, progress = 1);
        $$invalidate(1, closed = true);
        clearInterval(timer);
      }
    }, 100);
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Linear_progress> was created with unknown prop '".concat(key, "'"));
  });

  function checkbox_checked_binding(value) {
    closed = value;
    $$invalidate(1, closed);
  }

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      LinearProgress: LinearProgress,
      Checkbox: Checkbox,
      FormField: FormField,
      Button: Button_1,
      progress: progress,
      closed: closed,
      timer: timer,
      reset: reset
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("progress" in $$props) $$invalidate(0, progress = $$props.progress);
    if ("closed" in $$props) $$invalidate(1, closed = $$props.closed);
    if ("timer" in $$props) timer = $$props.timer;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [progress, closed, reset, checkbox_checked_binding];
}

var Linear_progress = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Linear_progress, _SvelteComponentDev);

  var _super = _createSuper$1(Linear_progress);

  function Linear_progress(options) {
    var _this;

    _classCallCheck$1(this, Linear_progress);

    _this = _super.call(this, options);
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Linear_progress",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Linear_progress;
}(SvelteComponentDev);

export default Linear_progress;
