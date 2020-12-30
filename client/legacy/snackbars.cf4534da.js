import { X as styleInject, Y as _inherits, Z as _getPrototypeOf, $ as _possibleConstructorReturn, a0 as _classCallCheck, i as init, s as safe_not_equal, a1 as _assertThisInitialized, e as dispatch_dev, a2 as _createClass, S as SvelteComponentDev, ah as create_slot, a4 as assign, a3 as exclude, w as validate_slots, a5 as forwardEventsBuilder, a6 as get_current_component, ai as setContext, a7 as onMount, a8 as onDestroy, a9 as exclude_internal_props, aa as useActions, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, u as append_dev, A as action_destroyer, ao as listen_dev, ac as _slicedToArray, aj as update_slot, ad as get_spread_update, ae as is_function, C as transition_in, D as transition_out, af as run_all, L as binding_callbacks, av as classAdderBuilder, aw as Div, aG as tick, ax as Label, ag as Button_1, K as IconButton, x as create_component, y as claim_component, z as mount_component, au as get_spread_object, E as destroy_component, O as empty, P as group_outros, Q as check_outros, f as space, j as claim_space, V as validate_each_argument, W as destroy_each, t as text, m as claim_text, U as set_data_dev, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, q as query_selector_all, o as attr_dev, B as _slicedToArray$1, M as bind, N as add_flush_callback } from './client.6af0488b.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import { T as Textfield } from './Textfield.a33aa5a3.js';
import './NotchedOutline.51c2ad8b.js';

var css_248z = ".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:hsla(0,0%,100%,.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width:344px),(max-width:480px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:4px}.mdc-snackbar--closing,.mdc-snackbar--open,.mdc-snackbar--opening{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__actions[dir=rtl],[dir=rtl] .mdc-snackbar__actions{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action:after,.mdc-snackbar__action:before{background-color:#bb86fc}.mdc-snackbar__action:hover:before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss img,.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl],[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0;margin-right:8px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}";
styleInject(css_248z);

/**
 * @license
 * Copyright 2018 Google Inc.
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
  CLOSING: 'mdc-snackbar--closing',
  OPEN: 'mdc-snackbar--open',
  OPENING: 'mdc-snackbar--opening'
};
var strings = {
  ACTION_SELECTOR: '.mdc-snackbar__action',
  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
  CLOSED_EVENT: 'MDCSnackbar:closed',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  OPENED_EVENT: 'MDCSnackbar:opened',
  OPENING_EVENT: 'MDCSnackbar:opening',
  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',
  SURFACE_SELECTOR: '.mdc-snackbar__surface'
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
};

/**
 * @license
 * Copyright 2018 Google Inc.
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
var ARIA_LIVE_DELAY_MS = numbers.ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = strings.ARIA_LIVE_LABEL_TEXT_ATTR;

function announce(ariaEl, labelEl) {
  if (labelEl === void 0) {
    labelEl = ariaEl;
  }

  var priority = ariaEl.getAttribute('aria-live'); // Trim text to ignore `&nbsp;` (see below).
  // textContent is only null if the node is a document, DOCTYPE, or notation.

  var labelText = labelEl.textContent.trim();

  if (!labelText || !priority) {
    return;
  } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


  ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
  // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
  // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
  // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
  // so screen readers won't announce the second message unless we first clear `textContent`.
  //
  // We have to clear the label text two different ways to make it work in all browsers and screen readers:
  //
  //   1. `textContent = ''` is required for IE11 + JAWS
  //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
  //
  // All other browser/screen reader combinations support both methods.
  //
  // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
  // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
  //
  // This technique has been tested in:
  //
  //   * JAWS 2019:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * NVDA 2018:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * ChromeVox 53

  labelEl.textContent = '';
  labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>'; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
  // CSS generated content is normally announced by screen readers
  // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
  // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

  labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
  setTimeout(function () {
    // Allow screen readers to announce changes to the DOM again.
    ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

    labelEl.textContent = labelText;
  }, ARIA_LIVE_DELAY_MS);
}

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
 * Copyright 2018 Google Inc.
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

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google Inc.
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
var OPENING = cssClasses.OPENING,
    OPEN = cssClasses.OPEN,
    CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION,
    REASON_DISMISS = strings.REASON_DISMISS;

var MDCSnackbarFoundation =
/** @class */
function (_super) {
  __extends(MDCSnackbarFoundation, _super);

  function MDCSnackbarFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.autoDismissTimer_ = 0;
    _this.autoDismissTimeoutMs_ = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape_ = true;
    return _this;
  }

  Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        announce: function announce() {
          return undefined;
        },
        notifyClosed: function notifyClosed() {
          return undefined;
        },
        notifyClosing: function notifyClosing() {
          return undefined;
        },
        notifyOpened: function notifyOpened() {
          return undefined;
        },
        notifyOpening: function notifyOpening() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbarFoundation.prototype.destroy = function () {
    this.clearAutoDismissTimer_();
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = 0;
    this.adapter_.removeClass(OPENING);
    this.adapter_.removeClass(OPEN);
    this.adapter_.removeClass(CLOSING);
  };

  MDCSnackbarFoundation.prototype.open = function () {
    var _this = this;

    this.clearAutoDismissTimer_();
    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.removeClass(CLOSING);
    this.adapter_.addClass(OPENING);
    this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(OPEN);

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.notifyOpened();

        _this.autoDismissTimer_ = setTimeout(function () {
          _this.close(REASON_DISMISS);
        }, _this.getTimeoutMs());
      }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbarFoundation.prototype.close = function (reason) {
    var _this = this;

    if (reason === void 0) {
      reason = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
      return;
    }

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    this.clearAutoDismissTimer_();
    this.isOpen_ = false;
    this.adapter_.notifyClosing(reason);
    this.adapter_.addClass(cssClasses.CLOSING);
    this.adapter_.removeClass(cssClasses.OPEN);
    this.adapter_.removeClass(cssClasses.OPENING);
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(reason);
    }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };

  MDCSnackbarFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
    return this.autoDismissTimeoutMs_;
  };

  MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
    // Use shorter variable names to make the code more readable
    var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;

    if (timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs_ = timeoutMs;
    } else {
      throw new Error("timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + ", but got '" + timeoutMs + "'");
    }
  };

  MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
    return this.closeOnEscape_;
  };

  MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
    this.closeOnEscape_ = closeOnEscape;
  };

  MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
    var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };

  MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
    this.close(REASON_ACTION);
  };

  MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
    this.close(REASON_DISMISS);
  };

  MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
    clearTimeout(this.autoDismissTimer_);
    this.autoDismissTimer_ = 0;
  };

  MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(cssClasses.OPENING);
    this.adapter_.removeClass(cssClasses.CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  return MDCSnackbarFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2018 Google Inc.
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
var SURFACE_SELECTOR = strings.SURFACE_SELECTOR,
    LABEL_SELECTOR = strings.LABEL_SELECTOR,
    ACTION_SELECTOR = strings.ACTION_SELECTOR,
    DISMISS_SELECTOR = strings.DISMISS_SELECTOR,
    OPENING_EVENT = strings.OPENING_EVENT,
    OPENED_EVENT = strings.OPENED_EVENT,
    CLOSING_EVENT = strings.CLOSING_EVENT,
    CLOSED_EVENT = strings.CLOSED_EVENT;

var MDCSnackbar =
/** @class */
function (_super) {
  __extends(MDCSnackbar, _super);

  function MDCSnackbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSnackbar.attachTo = function (root) {
    return new MDCSnackbar(root);
  };

  MDCSnackbar.prototype.initialize = function (announcerFactory) {
    if (announcerFactory === void 0) {
      announcerFactory = function announcerFactory() {
        return announce;
      };
    }

    this.announce_ = announcerFactory();
  };

  MDCSnackbar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
    this.labelEl_ = this.root_.querySelector(LABEL_SELECTOR);
    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.handleSurfaceClick_ = function (evt) {
      var target = evt.target;

      if (_this.isActionButton_(target)) {
        _this.foundation_.handleActionButtonClick(evt);
      } else if (_this.isActionIcon_(target)) {
        _this.foundation_.handleActionIconClick(evt);
      }
    };

    this.registerKeyDownHandler_(this.handleKeyDown_);
    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.deregisterKeyDownHandler_(this.handleKeyDown_);
    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.open = function () {
    this.foundation_.open();
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbar.prototype.close = function (reason) {
    if (reason === void 0) {
      reason = '';
    }

    this.foundation_.close(reason);
  };

  MDCSnackbar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      announce: function announce() {
        return _this.announce_(_this.labelEl_);
      },
      notifyClosed: function notifyClosed(reason) {
        return _this.emit(CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyClosing: function notifyClosing(reason) {
        return _this.emit(CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyOpened: function notifyOpened() {
        return _this.emit(OPENED_EVENT, {});
      },
      notifyOpening: function notifyOpening() {
        return _this.emit(OPENING_EVENT, {});
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      }
    };
    return new MDCSnackbarFoundation(adapter);
  };

  Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
    get: function get() {
      return this.foundation_.getTimeoutMs();
    },
    set: function set(timeoutMs) {
      this.foundation_.setTimeoutMs(timeoutMs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
    get: function get() {
      return this.foundation_.getCloseOnEscape();
    },
    set: function set(closeOnEscape) {
      this.foundation_.setCloseOnEscape(closeOnEscape);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
    get: function get() {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "labelText", {
    get: function get() {
      // This property only returns null if the node is a document, DOCTYPE, or notation.
      // On Element nodes, it always returns a string.
      return this.labelEl_.textContent;
    },
    set: function set(labelText) {
      this.labelEl_.textContent = labelText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
    get: function get() {
      return this.actionEl_.textContent;
    },
    set: function set(actionButtonText) {
      this.actionEl_.textContent = actionButtonText;
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbar.prototype.registerKeyDownHandler_ = function (handler) {
    this.listen('keydown', handler);
  };

  MDCSnackbar.prototype.deregisterKeyDownHandler_ = function (handler) {
    this.unlisten('keydown', handler);
  };

  MDCSnackbar.prototype.registerSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.addEventListener('click', handler);
  };

  MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.removeEventListener('click', handler);
  };

  MDCSnackbar.prototype.isActionButton_ = function (target) {
    return Boolean(closest(target, ACTION_SELECTOR));
  };

  MDCSnackbar.prototype.isActionIcon_ = function (target) {
    return Boolean(closest(target, DISMISS_SELECTOR));
  };

  return MDCSnackbar;
}(MDCComponent);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "../packages/snackbar/Snackbar.svelte";

function create_fragment(ctx) {
  var div1;
  var div0;
  var div0_class_value;
  var useActions_action;
  var div1_class_value;
  var useActions_action_1;
  var forwardEvents_action;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[20].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[19], null);
  var div0_levels = [{
    class: div0_class_value = "mdc-snackbar__surface " +
    /*surface$class*/
    ctx[4]
  }, prefixFilter(
  /*$$props*/
  ctx[9], "surface$")];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var div1_levels = [{
    class: div1_class_value = "\n    mdc-snackbar\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*variant*/
    ctx[2] === "stacked" ? "mdc-snackbar--stacked" : "") + "\n    " + (
    /*leading*/
    ctx[3] ? "mdc-snackbar--leading" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[9], ["use", "class", "variant", "leading", "surface$"])];
  var div1_data = {};

  for (var _i = 0; _i < div1_levels.length; _i += 1) {
    div1_data = assign(div1_data, div1_levels[_i]);
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div0, div0_data);
      add_location(div0, file, 13, 2, 340);
      set_attributes(div1, div1_data);
      add_location(div1, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }
      /*div1_binding*/


      ctx[21](div1);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(useActions_action = useActions.call(null, div0,
        /*surface$use*/
        ctx[5])), action_destroyer(useActions_action_1 = useActions.call(null, div1,
        /*use*/
        ctx[0])), action_destroyer(forwardEvents_action =
        /*forwardEvents*/
        ctx[7].call(null, div1)), listen_dev(div1, "MDCSnackbar:closed",
        /*handleClosed*/
        ctx[8], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        524288) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[19], dirty, null, null);
        }
      }

      set_attributes(div0, div0_data = get_spread_update(div0_levels, [(!current || dirty &
      /*surface$class*/
      16 && div0_class_value !== (div0_class_value = "mdc-snackbar__surface " +
      /*surface$class*/
      ctx[4])) && {
        class: div0_class_value
      }, dirty &
      /*$$props*/
      512 && prefixFilter(
      /*$$props*/
      ctx[9], "surface$")]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*surface$use*/
      32) useActions_action.update.call(null,
      /*surface$use*/
      ctx[5]);
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [(!current || dirty &
      /*className, variant, leading*/
      14 && div1_class_value !== (div1_class_value = "\n    mdc-snackbar\n    " +
      /*className*/
      ctx[1] + "\n    " + (
      /*variant*/
      ctx[2] === "stacked" ? "mdc-snackbar--stacked" : "") + "\n    " + (
      /*leading*/
      ctx[3] ? "mdc-snackbar--leading" : "") + "\n  ")) && {
        class: div1_class_value
      }, dirty &
      /*$$props*/
      512 && exclude(
      /*$$props*/
      ctx[9], ["use", "class", "variant", "leading", "surface$"])]));
      if (useActions_action_1 && is_function(useActions_action_1.update) && dirty &
      /*use*/
      1) useActions_action_1.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      /*div1_binding*/

      ctx[21](null);
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

var waiting = Promise.resolve();

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Snackbar", slots, ['default']);
  var forwardEvents = forwardEventsBuilder(get_current_component(), ["MDCSnackbar:opening", "MDCSnackbar:opened", "MDCSnackbar:closing", "MDCSnackbar:closed"]);

  var uninitializedValue = function uninitializedValue() {};

  var _$$props2 = $$props,
      _$$props2$use = _$$props2.use,
      use = _$$props2$use === void 0 ? [] : _$$props2$use;
  var _$$props3 = $$props,
      _$$props3$class = _$$props3.class,
      className = _$$props3$class === void 0 ? "" : _$$props3$class;
  var _$$props4 = $$props,
      _$$props4$variant = _$$props4.variant,
      variant = _$$props4$variant === void 0 ? "" : _$$props4$variant;
  var _$$props5 = $$props,
      _$$props5$leading = _$$props5.leading,
      leading = _$$props5$leading === void 0 ? false : _$$props5$leading;
  var _$$props6 = $$props,
      _$$props6$timeoutMs = _$$props6.timeoutMs,
      timeoutMs = _$$props6$timeoutMs === void 0 ? 5000 : _$$props6$timeoutMs;
  var _$$props7 = $$props,
      _$$props7$closeOnEsca = _$$props7.closeOnEscape,
      closeOnEscape = _$$props7$closeOnEsca === void 0 ? true : _$$props7$closeOnEsca;
  var _$$props8 = $$props,
      _$$props8$labelText = _$$props8.labelText,
      labelText = _$$props8$labelText === void 0 ? uninitializedValue : _$$props8$labelText;
  var _$$props9 = $$props,
      _$$props9$actionButto = _$$props9.actionButtonText,
      actionButtonText = _$$props9$actionButto === void 0 ? uninitializedValue : _$$props9$actionButto;
  var _$$props10 = $$props,
      _$$props10$surface$cl = _$$props10.surface$class,
      surface$class = _$$props10$surface$cl === void 0 ? "" : _$$props10$surface$cl;
  var _$$props11 = $$props,
      _$$props11$surface$us = _$$props11.surface$use,
      surface$use = _$$props11$surface$us === void 0 ? [] : _$$props11$surface$us;
  var element;
  var snackbar;
  var closeResolve;
  var closePromise = new Promise(function (resolve) {
    return closeResolve = resolve;
  });
  setContext("SMUI:button:context", "snackbar");
  setContext("SMUI:icon-button:context", "snackbar");
  setContext("SMUI:label:context", "snackbar");
  onMount(function () {
    $$invalidate(18, snackbar = new MDCSnackbar(element));
  });
  onDestroy(function () {
    snackbar && snackbar.destroy();
  });

  function handleClosed() {
    closeResolve();
    closePromise = new Promise(function (resolve) {
      return closeResolve = resolve;
    });
  }

  function open() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    waiting = waiting.then(function () {
      var _snackbar;

      (_snackbar = snackbar).open.apply(_snackbar, args);

      return closePromise;
    });
  }

  function forceOpen() {
    var _snackbar2;

    return (_snackbar2 = snackbar).open.apply(_snackbar2, arguments);
  }

  function close() {
    var _snackbar3;

    return (_snackbar3 = snackbar).close.apply(_snackbar3, arguments);
  }

  function isOpen() {
    return snackbar.isOpen;
  }

  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(6, element);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("leading" in $$new_props) $$invalidate(3, leading = $$new_props.leading);
    if ("timeoutMs" in $$new_props) $$invalidate(10, timeoutMs = $$new_props.timeoutMs);
    if ("closeOnEscape" in $$new_props) $$invalidate(11, closeOnEscape = $$new_props.closeOnEscape);
    if ("labelText" in $$new_props) $$invalidate(12, labelText = $$new_props.labelText);
    if ("actionButtonText" in $$new_props) $$invalidate(13, actionButtonText = $$new_props.actionButtonText);
    if ("surface$class" in $$new_props) $$invalidate(4, surface$class = $$new_props.surface$class);
    if ("surface$use" in $$new_props) $$invalidate(5, surface$use = $$new_props.surface$use);
    if ("$$scope" in $$new_props) $$invalidate(19, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      waiting: waiting,
      MDCSnackbar: MDCSnackbar,
      onMount: onMount,
      onDestroy: onDestroy,
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      prefixFilter: prefixFilter,
      useActions: useActions,
      forwardEvents: forwardEvents,
      uninitializedValue: uninitializedValue,
      use: use,
      className: className,
      variant: variant,
      leading: leading,
      timeoutMs: timeoutMs,
      closeOnEscape: closeOnEscape,
      labelText: labelText,
      actionButtonText: actionButtonText,
      surface$class: surface$class,
      surface$use: surface$use,
      element: element,
      snackbar: snackbar,
      closeResolve: closeResolve,
      closePromise: closePromise,
      handleClosed: handleClosed,
      open: open,
      forceOpen: forceOpen,
      close: close,
      isOpen: isOpen
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(9, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
    if ("leading" in $$props) $$invalidate(3, leading = $$new_props.leading);
    if ("timeoutMs" in $$props) $$invalidate(10, timeoutMs = $$new_props.timeoutMs);
    if ("closeOnEscape" in $$props) $$invalidate(11, closeOnEscape = $$new_props.closeOnEscape);
    if ("labelText" in $$props) $$invalidate(12, labelText = $$new_props.labelText);
    if ("actionButtonText" in $$props) $$invalidate(13, actionButtonText = $$new_props.actionButtonText);
    if ("surface$class" in $$props) $$invalidate(4, surface$class = $$new_props.surface$class);
    if ("surface$use" in $$props) $$invalidate(5, surface$use = $$new_props.surface$use);
    if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
    if ("snackbar" in $$props) $$invalidate(18, snackbar = $$new_props.snackbar);
    if ("closeResolve" in $$props) closeResolve = $$new_props.closeResolve;
    if ("closePromise" in $$props) closePromise = $$new_props.closePromise;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*snackbar, timeoutMs*/
    263168) {
       if (snackbar && snackbar.timeoutMs !== timeoutMs) {
        $$invalidate(18, snackbar.timeoutMs = timeoutMs, snackbar);
      }
    }

    if ($$self.$$.dirty &
    /*snackbar, closeOnEscape*/
    264192) {
       if (snackbar && snackbar.closeOnEscape !== closeOnEscape) {
        $$invalidate(18, snackbar.closeOnEscape = closeOnEscape, snackbar);
      }
    }

    if ($$self.$$.dirty &
    /*snackbar, labelText*/
    266240) {
       if (snackbar && labelText !== uninitializedValue && snackbar.labelText !== labelText) {
        $$invalidate(18, snackbar.labelText = labelText, snackbar);
      }
    }

    if ($$self.$$.dirty &
    /*snackbar, actionButtonText*/
    270336) {
       if (snackbar && actionButtonText !== uninitializedValue && snackbar.actionButtonText !== actionButtonText) {
        $$invalidate(18, snackbar.actionButtonText = actionButtonText, snackbar);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [use, className, variant, leading, surface$class, surface$use, element, forwardEvents, handleClosed, $$props, timeoutMs, closeOnEscape, labelText, actionButtonText, open, forceOpen, close, isOpen, snackbar, $$scope, slots, div1_binding];
}

var Snackbar = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Snackbar, _SvelteComponentDev);

  var _super = _createSuper(Snackbar);

  function Snackbar(options) {
    var _this;

    _classCallCheck(this, Snackbar);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2,
      leading: 3,
      timeoutMs: 10,
      closeOnEscape: 11,
      labelText: 12,
      actionButtonText: 13,
      surface$class: 4,
      surface$use: 5,
      open: 14,
      forceOpen: 15,
      close: 16,
      isOpen: 17
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Snackbar",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Snackbar, [{
    key: "use",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leading",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "timeoutMs",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "closeOnEscape",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "labelText",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "actionButtonText",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "surface$class",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "surface$use",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "open",
    get: function get() {
      return this.$$.ctx[14];
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "forceOpen",
    get: function get() {
      return this.$$.ctx[15];
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "close",
    get: function get() {
      return this.$$.ctx[16];
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.$$.ctx[17];
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Snackbar;
}(SvelteComponentDev);

var Actions = classAdderBuilder({
  class: 'mdc-snackbar__actions',
  component: Div,
  contexts: {}
});

var css_248z$1 = ".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:hsla(0,0%,100%,.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width:344px),(max-width:480px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:4px}.mdc-snackbar--closing,.mdc-snackbar--open,.mdc-snackbar--opening{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__actions[dir=rtl],[dir=rtl] .mdc-snackbar__actions{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action:after,.mdc-snackbar__action:before{background-color:#bb86fc}.mdc-snackbar__action:hover:before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss img,.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl],[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0;margin-right:8px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:after,.mdc-button:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button--color-secondary:not(:disabled){color:#676778;color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#676778;border-color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button,.smui-button__group>.smui-button__group-item>.mdc-button{margin-left:0;margin-right:0}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised{border-radius:4px;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised.mdc-button--dense,.smui-button__group>.smui-button__group-item>.mdc-button--raised.mdc-button--dense{border-radius:4px}.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded:after,.mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button:after,.mdc-icon-button:before{background-color:#000}.mdc-icon-button:hover:before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}";
styleInject(css_248z$1);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
} // (1:0) {#if config}


function create_if_block(ctx) {
  var snackbar;
  var current;
  var snackbar_spread_levels = [{
    labelText:
    /*config*/
    ctx[1].label
  },
  /*config*/
  ctx[1] &&
  /*config*/
  ctx[1].props || {}, prefixFilter(
  /*$$props*/
  ctx[3], "snackbar$")];
  var snackbar_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < snackbar_spread_levels.length; i += 1) {
    snackbar_props = assign(snackbar_props, snackbar_spread_levels[i]);
  }

  snackbar = new Snackbar({
    props: snackbar_props,
    $$inline: true
  });
  /*snackbar_binding*/

  ctx[9](snackbar);
  snackbar.$on("MDCSnackbar:closed",
  /*handleClosed*/
  ctx[2]);
  var block = {
    c: function create() {
      create_component(snackbar.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(snackbar.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(snackbar, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var snackbar_changes = dirty &
      /*config, prefixFilter, $$props*/
      10 ? get_spread_update(snackbar_spread_levels, [dirty &
      /*config*/
      2 && {
        labelText:
        /*config*/
        ctx[1].label
      }, dirty &
      /*config*/
      2 && get_spread_object(
      /*config*/
      ctx[1] &&
      /*config*/
      ctx[1].props || {}), dirty &
      /*prefixFilter, $$props*/
      8 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[3], "snackbar$"))]) : {};

      if (dirty &
      /*$$scope, config, $$props*/
      8202) {
        snackbar_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar.$set(snackbar_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(snackbar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(snackbar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      /*snackbar_binding*/
      ctx[9](null);
      destroy_component(snackbar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if config}",
    ctx: ctx
  });
  return block;
} // (12:4) {#if config.actions || config.dismissButton}


function create_if_block_1(ctx) {
  var actions;
  var current;
  actions = new Actions({
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
  var block = {
    c: function create() {
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var actions_changes = {};

      if (dirty &
      /*$$scope, config, $$props*/
      8202) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(12:4) {#if config.actions || config.dismissButton}",
    ctx: ctx
  });
  return block;
} // (14:8) {#if config.actions}


function create_if_block_3(ctx) {
  var each_1_anchor;
  var current;
  var each_value =
  /*config*/
  ctx[1].actions;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*prefixFilter, $$props, config*/
      10) {
        each_value =
        /*config*/
        ctx[1].actions;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(14:8) {#if config.actions}",
    ctx: ctx
  });
  return block;
} // (16:12) <Button               on:click={e => action.onClick && action.onClick(e)}               {...prefixFilter($$props, 'action$')}             >


function create_default_slot_3(ctx) {
  var t_value =
  /*action*/
  ctx[10].text + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*config*/
      2 && t_value !== (t_value =
      /*action*/
      ctx[10].text + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(16:12) <Button               on:click={e => action.onClick && action.onClick(e)}               {...prefixFilter($$props, 'action$')}             >",
    ctx: ctx
  });
  return block;
} // (15:10) {#each config.actions as action}


function create_each_block(ctx) {
  var button;
  var current;
  var button_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[3], "action$")];

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler*/
      (_ctx = ctx)[7].apply(_ctx, [
      /*action*/
      ctx[10]].concat(args))
    );
  }

  var button_props = {
    $$slots: {
      default: [create_default_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < button_spread_levels.length; i += 1) {
    button_props = assign(button_props, button_spread_levels[i]);
  }

  button = new Button_1({
    props: button_props,
    $$inline: true
  });
  button.$on("click", click_handler);
  var block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var button_changes = dirty &
      /*prefixFilter, $$props*/
      8 ? get_spread_update(button_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[3], "action$"))]) : {};

      if (dirty &
      /*$$scope, config*/
      8194) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(15:10) {#each config.actions as action}",
    ctx: ctx
  });
  return block;
} // (22:8) {#if config.dismissButton}


function create_if_block_2(ctx) {
  var iconbutton;
  var current;
  var iconbutton_spread_levels = [{
    title:
    /*config*/
    ctx[1].dismissTitle || "Dismiss"
  }, prefixFilter(
  /*$$props*/
  ctx[3], "dismiss$")];
  var iconbutton_props = {
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < iconbutton_spread_levels.length; i += 1) {
    iconbutton_props = assign(iconbutton_props, iconbutton_spread_levels[i]);
  }

  iconbutton = new IconButton({
    props: iconbutton_props,
    $$inline: true
  });
  iconbutton.$on("click",
  /*click_handler_1*/
  ctx[8]);
  var block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = dirty &
      /*config, prefixFilter, $$props*/
      10 ? get_spread_update(iconbutton_spread_levels, [dirty &
      /*config*/
      2 && {
        title:
        /*config*/
        ctx[1].dismissTitle || "Dismiss"
      }, dirty &
      /*prefixFilter, $$props*/
      8 && get_spread_object(prefixFilter(
      /*$$props*/
      ctx[3], "dismiss$"))]) : {};

      if (dirty &
      /*$$scope, config*/
      8194) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(22:8) {#if config.dismissButton}",
    ctx: ctx
  });
  return block;
} // (23:10) <IconButton             on:click={e => config.onDismiss && config.onDismiss(e)}             title="{config.dismissTitle || 'Dismiss'}"             {...prefixFilter($$props, 'dismiss$')}           >


function create_default_slot_2(ctx) {
  var t_value = (
  /*config*/
  ctx[1].dismissText || "close") + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*config*/
      2 && t_value !== (t_value = (
      /*config*/
      ctx[1].dismissText || "close") + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(23:10) <IconButton             on:click={e => config.onDismiss && config.onDismiss(e)}             title=\\\"{config.dismissTitle || 'Dismiss'}\\\"             {...prefixFilter($$props, 'dismiss$')}           >",
    ctx: ctx
  });
  return block;
} // (13:6) <Actions>


function create_default_slot_1(ctx) {
  var t;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*config*/
  ctx[1].actions && create_if_block_3(ctx);
  var if_block1 =
  /*config*/
  ctx[1].dismissButton && create_if_block_2(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*config*/
      ctx[1].actions) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*config*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*config*/
      ctx[1].dismissButton) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*config*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(13:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (2:2) <Snackbar     bind:this={component}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props || {})}     {...prefixFilter($$props, 'snackbar$')}   >


function create_default_slot(ctx) {
  var label;
  var t;
  var if_block_anchor;
  var current;
  var label_spread_levels = [prefixFilter(
  /*$$props*/
  ctx[3], "label$")];
  var label_props = {};

  for (var i = 0; i < label_spread_levels.length; i += 1) {
    label_props = assign(label_props, label_spread_levels[i]);
  }

  label = new Label({
    props: label_props,
    $$inline: true
  });
  var if_block = (
  /*config*/
  ctx[1].actions ||
  /*config*/
  ctx[1].dismissButton) && create_if_block_1(ctx);
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = dirty &
      /*prefixFilter, $$props*/
      8 ? get_spread_update(label_spread_levels, [get_spread_object(prefixFilter(
      /*$$props*/
      ctx[3], "label$"))]) : {};
      label.$set(label_changes);

      if (
      /*config*/
      ctx[1].actions ||
      /*config*/
      ctx[1].dismissButton) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*config*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(2:2) <Snackbar     bind:this={component}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props || {})}     {...prefixFilter($$props, 'snackbar$')}   >",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*config*/
  ctx[1] && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*config*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*config*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Kitchen", slots, []);
  var snackbars = [];
  var component;
  var config = null;
  var waiting = false;

  function handleClosed(e) {
    if (config.onClose) {
      config.onClose(e);
    }

    snackbars.splice(0, 1);
    $$invalidate(5, snackbars);
    $$invalidate(1, config = null);
  }

  function push(config) {
    snackbars.push(config);
    $$invalidate(5, snackbars);
  }

  var click_handler = function click_handler(action, e) {
    return action.onClick && action.onClick(e);
  };

  var click_handler_1 = function click_handler_1(e) {
    return config.onDismiss && config.onDismiss(e);
  };

  function snackbar_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      component = $$value;
      $$invalidate(0, component);
    });
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };

  $$self.$capture_state = function () {
    return {
      tick: tick,
      Label: Label,
      Button: Button_1,
      IconButton: IconButton,
      prefixFilter: prefixFilter,
      Snackbar: Snackbar,
      Actions: Actions,
      snackbars: snackbars,
      component: component,
      config: config,
      waiting: waiting,
      handleClosed: handleClosed,
      push: push
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
    if ("snackbars" in $$props) $$invalidate(5, snackbars = $$new_props.snackbars);
    if ("component" in $$props) $$invalidate(0, component = $$new_props.component);
    if ("config" in $$props) $$invalidate(1, config = $$new_props.config);
    if ("waiting" in $$props) $$invalidate(6, waiting = $$new_props.waiting);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*snackbars, config*/
    34) {
       if (snackbars.length && !config) {
        $$invalidate(1, config = snackbars[0]);
        $$invalidate(6, waiting = true);
      }
    }

    if ($$self.$$.dirty &
    /*component, waiting*/
    65) {
       if (component && waiting && !component.isOpen()) {
        component.open();
        $$invalidate(6, waiting = false);
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [component, config, handleClosed, $$props, push, snackbars, waiting, click_handler, click_handler_1, snackbar_binding];
}

var Kitchen = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Kitchen, _SvelteComponentDev);

  var _super = _createSuper$1(Kitchen);

  function Kitchen(options) {
    var _this;

    _classCallCheck(this, Kitchen);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      push: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kitchen",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Kitchen, [{
    key: "push",
    get: function get() {
      return this.$$.ctx[4];
    },
    set: function set(value) {
      throw new Error("<Kitchen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Kitchen;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/demo/snackbars.svelte"; // (10:6) <Label>

function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a snackbar.");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(10:6) <Label>",
    ctx: ctx
  });
  return block;
} // (9:4) <Snackbar bind:this={mySnackbar}>


function create_default_slot_27(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(9:4) <Snackbar bind:this={mySnackbar}>",
    ctx: ctx
  });
  return block;
} // (14:6) <Label>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a snackbar.");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(14:6) <Label>",
    ctx: ctx
  });
  return block;
} // (16:8) <IconButton class="material-icons" title="Dismiss">


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("close");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "close");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(16:8) <IconButton class=\\\"material-icons\\\" title=\\\"Dismiss\\\">",
    ctx: ctx
  });
  return block;
} // (15:6) <Actions>


function create_default_slot_24(ctx) {
  var iconbutton;
  var current;
  iconbutton = new IconButton({
    props: {
      class: "material-icons",
      title: "Dismiss",
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(15:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (13:4) <Snackbar bind:this={mySnackbarB}>


function create_default_slot_23(ctx) {
  var label;
  var t;
  var actions;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var actions_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(13:4) <Snackbar bind:this={mySnackbarB}>",
    ctx: ctx
  });
  return block;
} // (20:47) <Label>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_22.name,
    type: "slot",
    source: "(20:47) <Label>",
    ctx: ctx
  });
  return block;
} // (20:4) <Button on:click={() => mySnackbar.open()}>


function create_default_slot_21(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(20:4) <Button on:click={() => mySnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (21:48) <Label>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar With Dismiss");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar With Dismiss");
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(21:48) <Label>",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => mySnackbarB.open()}>


function create_default_slot_19(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => mySnackbarB.open()}>",
    ctx: ctx
  });
  return block;
} // (28:6) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a leading snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a leading snackbar.");
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(28:6) <Label>",
    ctx: ctx
  });
  return block;
} // (30:8) <Button>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(30:8) <Button>",
    ctx: ctx
  });
  return block;
} // (29:6) <Actions>


function create_default_slot_16(ctx) {
  var button;
  var current;
  button = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(29:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (27:4) <Snackbar leading bind:this={leadingSnackbar} on:MDCSnackbar:closed={handleClosedLeading}>


function create_default_slot_15(ctx) {
  var label;
  var t;
  var actions;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var actions_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(27:4) <Snackbar leading bind:this={leadingSnackbar} on:MDCSnackbar:closed={handleClosedLeading}>",
    ctx: ctx
  });
  return block;
} // (34:52) <Label>


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(34:52) <Label>",
    ctx: ctx
  });
  return block;
} // (34:4) <Button on:click={() => leadingSnackbar.open()}>


function create_default_slot_13(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(34:4) <Button on:click={() => leadingSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (43:6) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a stacked snackbar. Use it when you have really long text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a stacked snackbar. Use it when you have really long text.");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(43:6) <Label>",
    ctx: ctx
  });
  return block;
} // (45:8) <Button on:click={() => stackedAction = 'Something'}>


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Something");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Something");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(45:8) <Button on:click={() => stackedAction = 'Something'}>",
    ctx: ctx
  });
  return block;
} // (46:8) <Button on:click={() => stackedAction = 'Another'}>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(46:8) <Button on:click={() => stackedAction = 'Another'}>",
    ctx: ctx
  });
  return block;
} // (47:8) <IconButton on:click={() => stackedAction = 'Dismissed'} class="material-icons" title="Dismiss">


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("close");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "close");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(47:8) <IconButton on:click={() => stackedAction = 'Dismissed'} class=\\\"material-icons\\\" title=\\\"Dismiss\\\">",
    ctx: ctx
  });
  return block;
} // (44:6) <Actions>


function create_default_slot_8(ctx) {
  var button0;
  var t0;
  var button1;
  var t1;
  var iconbutton;
  var current;
  button0 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_3*/
  ctx[21]);
  button1 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_4*/
  ctx[22]);
  iconbutton = new IconButton({
    props: {
      class: "material-icons",
      title: "Dismiss",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton.$on("click",
  /*click_handler_5*/
  ctx[23]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(iconbutton.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var iconbutton_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(44:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (42:4) <Snackbar variant="stacked" bind:this={stackedSnackbar} on:MDCSnackbar:closed={handleClosedStacked}>


function create_default_slot_7(ctx) {
  var label;
  var t;
  var actions;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      t = space();
      create_component(actions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var actions_changes = {};

      if (dirty &
      /*$$scope, stackedAction*/
      1073741888) {
        actions_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      if (detaching) detach_dev(t);
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(42:4) <Snackbar variant=\\\"stacked\\\" bind:this={stackedSnackbar} on:MDCSnackbar:closed={handleClosedStacked}>",
    ctx: ctx
  });
  return block;
} // (51:52) <Label>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(51:52) <Label>",
    ctx: ctx
  });
  return block;
} // (51:4) <Button on:click={() => stackedSnackbar.open()}>


function create_default_slot_5(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(51:4) <Button on:click={() => stackedSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (60:4) <Snackbar bind:this={dynSnackbar} labelText={dynText}>


function create_default_slot_4(ctx) {
  var label;
  var current;
  label = new Label({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(60:4) <Snackbar bind:this={dynSnackbar} labelText={dynText}>",
    ctx: ctx
  });
  return block;
} // (66:63) <Label>


function create_default_slot_3$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_3$1.name,
    type: "slot",
    source: "(66:63) <Label>",
    ctx: ctx
  });
  return block;
} // (66:4) <Button on:click={() => dynSnackbar && dynSnackbar.open()}>


function create_default_slot_2$1(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_3$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(66:4) <Button on:click={() => dynSnackbar && dynSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (74:37) <Label>


function create_default_slot_1$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Push Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Push Snackbar");
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
    id: create_default_slot_1$1.name,
    type: "slot",
    source: "(74:37) <Label>",
    ctx: ctx
  });
  return block;
} // (74:4) <Button on:click={pushToKitchen}>


function create_default_slot$1(ctx) {
  var label;
  var current;
  label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(74:4) <Button on:click={pushToKitchen}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var snackbar0;
  var t3;
  var snackbar1;
  var t4;
  var button0;
  var t5;
  var button1;
  var t6;
  var div1;
  var t7;
  var snackbar2;
  var t8;
  var button2;
  var t9;
  var pre0;
  var t10;
  var t11;
  var t12;
  var div2;
  var t13;
  var snackbar3;
  var t14;
  var button3;
  var t15;
  var pre1;
  var t16;
  var t17;
  var t18;
  var pre2;
  var t19;
  var t20;
  var t21;
  var div3;
  var t22;
  var br;
  var t23;
  var snackbar4;
  var t24;
  var textfield;
  var updating_value;
  var t25;
  var button4;
  var t26;
  var div4;
  var t27;
  var kitchen_1;
  var t28;
  var button5;
  var t29;
  var pre3;
  var t30;
  var t31;
  var t32;
  var pre4;
  var t33;
  var t34;
  var current;
  var snackbar0_props = {
    $$slots: {
      default: [create_default_slot_27]
    },
    $$scope: {
      ctx: ctx
    }
  };
  snackbar0 = new Snackbar({
    props: snackbar0_props,
    $$inline: true
  });
  /*snackbar0_binding*/

  ctx[15](snackbar0);
  var snackbar1_props = {
    $$slots: {
      default: [create_default_slot_23]
    },
    $$scope: {
      ctx: ctx
    }
  };
  snackbar1 = new Snackbar({
    props: snackbar1_props,
    $$inline: true
  });
  /*snackbar1_binding*/

  ctx[16](snackbar1);
  button0 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[17]);
  button1 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[18]);
  var snackbar2_props = {
    leading: true,
    $$slots: {
      default: [create_default_slot_15]
    },
    $$scope: {
      ctx: ctx
    }
  };
  snackbar2 = new Snackbar({
    props: snackbar2_props,
    $$inline: true
  });
  /*snackbar2_binding*/

  ctx[19](snackbar2);
  snackbar2.$on("MDCSnackbar:closed",
  /*handleClosedLeading*/
  ctx[12]);
  button2 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[20]);
  var snackbar3_props = {
    variant: "stacked",
    $$slots: {
      default: [create_default_slot_7]
    },
    $$scope: {
      ctx: ctx
    }
  };
  snackbar3 = new Snackbar({
    props: snackbar3_props,
    $$inline: true
  });
  /*snackbar3_binding*/

  ctx[24](snackbar3);
  snackbar3.$on("MDCSnackbar:closed",
  /*handleClosedStacked*/
  ctx[13]);
  button3 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_6*/
  ctx[25]);
  var snackbar4_props = {
    labelText:
    /*dynText*/
    ctx[8],
    $$slots: {
      default: [create_default_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };
  snackbar4 = new Snackbar({
    props: snackbar4_props,
    $$inline: true
  });
  /*snackbar4_binding*/

  ctx[26](snackbar4);

  function textfield_value_binding(value) {
    /*textfield_value_binding*/
    ctx[27].call(null, value);
  }

  var textfield_props = {
    label: "Dynamic Text",
    input$required: true
  };

  if (
  /*dynText*/
  ctx[8] !== void 0) {
    textfield_props.value =
    /*dynText*/
    ctx[8];
  }

  textfield = new Textfield({
    props: textfield_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield, "value", textfield_value_binding);
  });
  button4 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot_2$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*click_handler_7*/
  ctx[28]);
  var kitchen_1_props = {
    dismiss$class: "material-icons"
  };
  kitchen_1 = new Kitchen({
    props: kitchen_1_props,
    $$inline: true
  });
  /*kitchen_1_binding*/

  ctx[29](kitchen_1);
  button5 = new Button_1({
    props: {
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*pushToKitchen*/
  ctx[14]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Snackbars");
      t2 = space();
      div0 = element("div");
      create_component(snackbar0.$$.fragment);
      t3 = space();
      create_component(snackbar1.$$.fragment);
      t4 = space();
      create_component(button0.$$.fragment);
      t5 = space();
      create_component(button1.$$.fragment);
      t6 = space();
      div1 = element("div");
      t7 = text("Leading with Action:\n\n    ");
      create_component(snackbar2.$$.fragment);
      t8 = space();
      create_component(button2.$$.fragment);
      t9 = space();
      pre0 = element("pre");
      t10 = text("Closed Reason: ");
      t11 = text(
      /*leadingReason*/
      ctx[3]);
      t12 = space();
      div2 = element("div");
      t13 = text("Stacked with Action:\n\n    ");
      create_component(snackbar3.$$.fragment);
      t14 = space();
      create_component(button3.$$.fragment);
      t15 = space();
      pre1 = element("pre");
      t16 = text("Closed Reason: ");
      t17 = text(
      /*stackedReason*/
      ctx[5]);
      t18 = space();
      pre2 = element("pre");
      t19 = text("Action: ");
      t20 = text(
      /*stackedAction*/
      ctx[6]);
      t21 = space();
      div3 = element("div");
      t22 = text("Using dynamic text: ");
      br = element("br");
      t23 = space();
      create_component(snackbar4.$$.fragment);
      t24 = space();
      create_component(textfield.$$.fragment);
      t25 = space();
      create_component(button4.$$.fragment);
      t26 = space();
      div4 = element("div");
      t27 = text("The \"Kitchen\" Snackbar generator:\n\n    ");
      create_component(kitchen_1.$$.fragment);
      t28 = space();
      create_component(button5.$$.fragment);
      t29 = space();
      pre3 = element("pre");
      t30 = text("Closed Reason: ");
      t31 = text(
      /*kitchenReason*/
      ctx[10]);
      t32 = space();
      pre4 = element("pre");
      t33 = text("Action: ");
      t34 = text(
      /*kitchenAction*/
      ctx[11]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1f44djc\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Snackbars");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(snackbar0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(snackbar1.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(button0.$$.fragment, div0_nodes);
      t5 = claim_space(div0_nodes);
      claim_component(button1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Leading with Action:\n\n    ");
      claim_component(snackbar2.$$.fragment, div1_nodes);
      t8 = claim_space(div1_nodes);
      claim_component(button2.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t10 = claim_text(pre0_nodes, "Closed Reason: ");
      t11 = claim_text(pre0_nodes,
      /*leadingReason*/
      ctx[3]);
      pre0_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "Stacked with Action:\n\n    ");
      claim_component(snackbar3.$$.fragment, div2_nodes);
      t14 = claim_space(div2_nodes);
      claim_component(button3.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t16 = claim_text(pre1_nodes, "Closed Reason: ");
      t17 = claim_text(pre1_nodes,
      /*stackedReason*/
      ctx[5]);
      pre1_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t19 = claim_text(pre2_nodes, "Action: ");
      t20 = claim_text(pre2_nodes,
      /*stackedAction*/
      ctx[6]);
      pre2_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t22 = claim_text(div3_nodes, "Using dynamic text: ");
      br = claim_element(div3_nodes, "BR", {});
      t23 = claim_space(div3_nodes);
      claim_component(snackbar4.$$.fragment, div3_nodes);
      t24 = claim_space(div3_nodes);
      claim_component(textfield.$$.fragment, div3_nodes);
      t25 = claim_space(div3_nodes);
      claim_component(button4.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {});
      var div4_nodes = children(div4);
      t27 = claim_text(div4_nodes, "The \"Kitchen\" Snackbar generator:\n\n    ");
      claim_component(kitchen_1.$$.fragment, div4_nodes);
      t28 = claim_space(div4_nodes);
      claim_component(button5.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t29 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre3_nodes = children(pre3);
      t30 = claim_text(pre3_nodes, "Closed Reason: ");
      t31 = claim_text(pre3_nodes,
      /*kitchenReason*/
      ctx[10]);
      pre3_nodes.forEach(detach_dev);
      t32 = claim_space(section_nodes);
      pre4 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre4_nodes = children(pre4);
      t33 = claim_text(pre4_nodes, "Action: ");
      t34 = claim_text(pre4_nodes,
      /*kitchenAction*/
      ctx[11]);
      pre4_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Snackbars - SMUI";
      add_location(h2, file$1, 5, 2, 76);
      add_location(div0, file$1, 7, 2, 98);
      add_location(div1, file$1, 23, 2, 604);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$1, 36, 2, 964);
      add_location(div2, file$1, 38, 2, 1024);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$1, 53, 2, 1680);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file$1, 54, 2, 1739);
      add_location(br, file$1, 57, 24, 1822);
      add_location(div3, file$1, 56, 2, 1792);
      add_location(div4, file$1, 68, 2, 2117);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file$1, 76, 2, 2317);
      attr_dev(pre4, "class", "status");
      add_location(pre4, file$1, 77, 2, 2376);
      add_location(section, file$1, 4, 0, 64);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(snackbar0, div0, null);
      append_dev(div0, t3);
      mount_component(snackbar1, div0, null);
      append_dev(div0, t4);
      mount_component(button0, div0, null);
      append_dev(div0, t5);
      mount_component(button1, div0, null);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(snackbar2, div1, null);
      append_dev(div1, t8);
      mount_component(button2, div1, null);
      append_dev(section, t9);
      append_dev(section, pre0);
      append_dev(pre0, t10);
      append_dev(pre0, t11);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      mount_component(snackbar3, div2, null);
      append_dev(div2, t14);
      mount_component(button3, div2, null);
      append_dev(section, t15);
      append_dev(section, pre1);
      append_dev(pre1, t16);
      append_dev(pre1, t17);
      append_dev(section, t18);
      append_dev(section, pre2);
      append_dev(pre2, t19);
      append_dev(pre2, t20);
      append_dev(section, t21);
      append_dev(section, div3);
      append_dev(div3, t22);
      append_dev(div3, br);
      append_dev(div3, t23);
      mount_component(snackbar4, div3, null);
      append_dev(div3, t24);
      mount_component(textfield, div3, null);
      append_dev(div3, t25);
      mount_component(button4, div3, null);
      append_dev(section, t26);
      append_dev(section, div4);
      append_dev(div4, t27);
      mount_component(kitchen_1, div4, null);
      append_dev(div4, t28);
      mount_component(button5, div4, null);
      append_dev(section, t29);
      append_dev(section, pre3);
      append_dev(pre3, t30);
      append_dev(pre3, t31);
      append_dev(section, t32);
      append_dev(section, pre4);
      append_dev(pre4, t33);
      append_dev(pre4, t34);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var snackbar0_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        snackbar0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar0.$set(snackbar0_changes);
      var snackbar1_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        snackbar1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar1.$set(snackbar1_changes);
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var snackbar2_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        snackbar2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar2.$set(snackbar2_changes);
      var button2_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      if (!current || dirty &
      /*leadingReason*/
      8) set_data_dev(t11,
      /*leadingReason*/
      ctx[3]);
      var snackbar3_changes = {};

      if (dirty &
      /*$$scope, stackedAction*/
      1073741888) {
        snackbar3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar3.$set(snackbar3_changes);
      var button3_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button3.$set(button3_changes);
      if (!current || dirty &
      /*stackedReason*/
      32) set_data_dev(t17,
      /*stackedReason*/
      ctx[5]);
      if (!current || dirty &
      /*stackedAction*/
      64) set_data_dev(t20,
      /*stackedAction*/
      ctx[6]);
      var snackbar4_changes = {};
      if (dirty &
      /*dynText*/
      256) snackbar4_changes.labelText =
      /*dynText*/
      ctx[8];

      if (dirty &
      /*$$scope*/
      1073741824) {
        snackbar4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      snackbar4.$set(snackbar4_changes);
      var textfield_changes = {};

      if (!updating_value && dirty &
      /*dynText*/
      256) {
        updating_value = true;
        textfield_changes.value =
        /*dynText*/
        ctx[8];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      textfield.$set(textfield_changes);
      var button4_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button4.$set(button4_changes);
      var kitchen_1_changes = {};
      kitchen_1.$set(kitchen_1_changes);
      var button5_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
      if (!current || dirty &
      /*kitchenReason*/
      1024) set_data_dev(t31,
      /*kitchenReason*/
      ctx[10]);
      if (!current || dirty &
      /*kitchenAction*/
      2048) set_data_dev(t34,
      /*kitchenAction*/
      ctx[11]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(snackbar0.$$.fragment, local);
      transition_in(snackbar1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(snackbar2.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(snackbar3.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(snackbar4.$$.fragment, local);
      transition_in(textfield.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(kitchen_1.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(snackbar0.$$.fragment, local);
      transition_out(snackbar1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(snackbar2.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(snackbar3.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(snackbar4.$$.fragment, local);
      transition_out(textfield.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(kitchen_1.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      /*snackbar0_binding*/

      ctx[15](null);
      destroy_component(snackbar0);
      /*snackbar1_binding*/

      ctx[16](null);
      destroy_component(snackbar1);
      destroy_component(button0);
      destroy_component(button1);
      /*snackbar2_binding*/

      ctx[19](null);
      destroy_component(snackbar2);
      destroy_component(button2);
      /*snackbar3_binding*/

      ctx[24](null);
      destroy_component(snackbar3);
      destroy_component(button3);
      /*snackbar4_binding*/

      ctx[26](null);
      destroy_component(snackbar4);
      destroy_component(textfield);
      destroy_component(button4);
      /*kitchen_1_binding*/

      ctx[29](null);
      destroy_component(kitchen_1);
      destroy_component(button5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Snackbars", slots, []);
  var mySnackbar;
  var mySnackbarB;
  var leadingSnackbar;
  var leadingReason = "nothing yet";
  var stackedSnackbar;
  var stackedReason = "nothing yet";
  var stackedAction = "nothing yet";
  var dynSnackbar;
  var dynText = "This is a snackbar with dynamic text.";
  var kitchen;
  var kitchenReason = "nothing yet";
  var kitchenAction = "nothing yet";

  function handleClosedLeading(e) {
    $$invalidate(3, leadingReason = e.detail.reason);
  }

  function handleClosedStacked(e) {
    $$invalidate(5, stackedReason = e.detail.reason);
  }

  function pushToKitchen() {
    kitchen.push({
      props: {
        variant: "stacked"
      },
      label: "This is a snackbar generated by the kitchen.",
      actions: [{
        onClick: function onClick() {
          return $$invalidate(11, kitchenAction = "Something");
        },
        text: "Something"
      }, {
        onClick: function onClick() {
          return $$invalidate(11, kitchenAction = "Another");
        },
        text: "Another"
      }],
      dismissButton: true,
      onDismiss: function onDismiss() {
        return $$invalidate(11, kitchenAction = "Dismissed");
      },
      onClose: function onClose(e) {
        $$invalidate(10, kitchenReason = e.detail.reason);
      }
    });
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Snackbars> was created with unknown prop '".concat(key, "'"));
  });

  function snackbar0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      mySnackbar = $$value;
      $$invalidate(0, mySnackbar);
    });
  }

  function snackbar1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      mySnackbarB = $$value;
      $$invalidate(1, mySnackbarB);
    });
  }

  var click_handler = function click_handler() {
    return mySnackbar.open();
  };

  var click_handler_1 = function click_handler_1() {
    return mySnackbarB.open();
  };

  function snackbar2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      leadingSnackbar = $$value;
      $$invalidate(2, leadingSnackbar);
    });
  }

  var click_handler_2 = function click_handler_2() {
    return leadingSnackbar.open();
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(6, stackedAction = "Something");
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(6, stackedAction = "Another");
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate(6, stackedAction = "Dismissed");
  };

  function snackbar3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      stackedSnackbar = $$value;
      $$invalidate(4, stackedSnackbar);
    });
  }

  var click_handler_6 = function click_handler_6() {
    return stackedSnackbar.open();
  };

  function snackbar4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      dynSnackbar = $$value;
      $$invalidate(7, dynSnackbar);
    });
  }

  function textfield_value_binding(value) {
    dynText = value;
    $$invalidate(8, dynText);
  }

  var click_handler_7 = function click_handler_7() {
    return dynSnackbar && dynSnackbar.open();
  };

  function kitchen_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      kitchen = $$value;
      $$invalidate(9, kitchen);
    });
  }

  $$self.$capture_state = function () {
    return {
      Snackbar: Snackbar,
      Actions: Actions,
      Label: Label,
      Kitchen: Kitchen,
      Button: Button_1,
      IconButton: IconButton,
      Textfield: Textfield,
      mySnackbar: mySnackbar,
      mySnackbarB: mySnackbarB,
      leadingSnackbar: leadingSnackbar,
      leadingReason: leadingReason,
      stackedSnackbar: stackedSnackbar,
      stackedReason: stackedReason,
      stackedAction: stackedAction,
      dynSnackbar: dynSnackbar,
      dynText: dynText,
      kitchen: kitchen,
      kitchenReason: kitchenReason,
      kitchenAction: kitchenAction,
      handleClosedLeading: handleClosedLeading,
      handleClosedStacked: handleClosedStacked,
      pushToKitchen: pushToKitchen
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("mySnackbar" in $$props) $$invalidate(0, mySnackbar = $$props.mySnackbar);
    if ("mySnackbarB" in $$props) $$invalidate(1, mySnackbarB = $$props.mySnackbarB);
    if ("leadingSnackbar" in $$props) $$invalidate(2, leadingSnackbar = $$props.leadingSnackbar);
    if ("leadingReason" in $$props) $$invalidate(3, leadingReason = $$props.leadingReason);
    if ("stackedSnackbar" in $$props) $$invalidate(4, stackedSnackbar = $$props.stackedSnackbar);
    if ("stackedReason" in $$props) $$invalidate(5, stackedReason = $$props.stackedReason);
    if ("stackedAction" in $$props) $$invalidate(6, stackedAction = $$props.stackedAction);
    if ("dynSnackbar" in $$props) $$invalidate(7, dynSnackbar = $$props.dynSnackbar);
    if ("dynText" in $$props) $$invalidate(8, dynText = $$props.dynText);
    if ("kitchen" in $$props) $$invalidate(9, kitchen = $$props.kitchen);
    if ("kitchenReason" in $$props) $$invalidate(10, kitchenReason = $$props.kitchenReason);
    if ("kitchenAction" in $$props) $$invalidate(11, kitchenAction = $$props.kitchenAction);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [mySnackbar, mySnackbarB, leadingSnackbar, leadingReason, stackedSnackbar, stackedReason, stackedAction, dynSnackbar, dynText, kitchen, kitchenReason, kitchenAction, handleClosedLeading, handleClosedStacked, pushToKitchen, snackbar0_binding, snackbar1_binding, click_handler, click_handler_1, snackbar2_binding, click_handler_2, click_handler_3, click_handler_4, click_handler_5, snackbar3_binding, click_handler_6, snackbar4_binding, textfield_value_binding, click_handler_7, kitchen_1_binding];
}

var Snackbars = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Snackbars, _SvelteComponentDev);

  var _super = _createSuper$2(Snackbars);

  function Snackbars(options) {
    var _this;

    _classCallCheck$1(this, Snackbars);

    _this = _super.call(this, options);
    init(_assertThisInitialized$1(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Snackbars",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Snackbars;
}(SvelteComponentDev);

export default Snackbars;
