function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

___$insertStyle(".react-tabs__tab a {\n  cursor: pointer;\n}\n.react-tabs__tab.active a {\n  cursor: none;\n}\n\n.react-tabs__tab-panel--selected {\n  z-index: 1;\n}\n\n.Pane.vertical.Pane1 {\n  border-right: 1px solid #ddd;\n}\n\n.Resizer {\n  background: rgba(255, 255, 255, 0);\n  opacity: 0.2;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.Resizer:hover {\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n\n.Resizer.horizontal {\n  height: 11px;\n  margin: -5px 0;\n  border-top: 5px solid rgba(255, 255, 255, 0);\n  border-bottom: 5px solid rgba(255, 255, 255, 0);\n  cursor: row-resize;\n  width: 100%;\n}\n\n.Resizer.horizontal:hover {\n  border-top: 5px solid rgba(0, 0, 0, 0.5);\n  border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n}\n\n.Resizer.vertical {\n  width: 11px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n}\n\n.Resizer.vertical:hover {\n  border-left: 5px solid rgba(0, 0, 0, 0.5);\n  border-right: 5px solid rgba(0, 0, 0, 0.5);\n}\n\n.Resizer.disabled {\n  cursor: not-allowed;\n}\n\n.Resizer.disabled:hover {\n  border-color: transparent;\n}");

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_production_min = createCommonjsModule(function (module, exports) {
var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";
});

var react = createCommonjsModule(function (module) {

{
  module.exports = react_production_min;
}
});

/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var scheduler_production_min = createCommonjsModule(function (module, exports) {
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
});

var scheduler = createCommonjsModule(function (module) {

{
  module.exports = scheduler_production_min;
}
});

/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
var ra=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=objectAssign({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){scheduler.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Ac)));}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=scheduler.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}objectAssign(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=objectAssign({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=objectAssign({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=objectAssign({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=objectAssign({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=objectAssign({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=objectAssign({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=objectAssign({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=objectAssign({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=objectAssign({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=objectAssign({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=objectAssign({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=objectAssign({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c);}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return objectAssign({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
var Lf=null,Mf=null,Nf=scheduler.unstable_runWithPriority,Of=scheduler.unstable_scheduleCallback,Pf=scheduler.unstable_cancelCallback,Qf=scheduler.unstable_shouldYield,Rf=scheduler.unstable_requestPaint,Sf=scheduler.unstable_now,Tf=scheduler.unstable_getCurrentPriorityLevel,Uf=scheduler.unstable_ImmediatePriority,Vf=scheduler.unstable_UserBlockingPriority,Wf=scheduler.unstable_NormalPriority,Xf=scheduler.unstable_LowPriority,Yf=scheduler.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=objectAssign({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Fg=(new react.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=objectAssign({},e,{value:void 0});d=objectAssign({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=objectAssign({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;var createPortal=uk;
var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};var flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};var hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
var render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};var unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};var unstable_batchedUpdates=Wj;var unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};var version="17.0.1";

var reactDom_production_min = {
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	createPortal: createPortal,
	findDOMNode: findDOMNode,
	flushSync: flushSync,
	hydrate: hydrate,
	render: render,
	unmountComponentAtNode: unmountComponentAtNode,
	unstable_batchedUpdates: unstable_batchedUpdates,
	unstable_createPortal: unstable_createPortal,
	unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	version: version
};

var reactDom = createCommonjsModule(function (module) {

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = reactDom_production_min;
}
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// GENERATED DO NOT EDIT
var cssProperties = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "overflowScrolling",
  "MozOverflowScrolling",
  "WebkitOverflowScrolling",
  "MSOverflowScrolling",
  "OOverflowScrolling",
  "userSelect",
  "MozUserSelect",
  "WebkitUserSelect",
  "MSUserSelect",
  "OUserSelect"
];

var src = createCommonjsModule(function (module) {
module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (cssProperties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = propTypes.oneOfType([
  propTypes.arrayOf(module.exports),
  module.exports
]);
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    polyfill: polyfill
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Pane = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pane, _React$PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    _classCallCheck(this, Pane);

    return _super.apply(this, arguments);
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          split = _this$props.split,
          styleProps = _this$props.style,
          size = _this$props.size,
          eleRef = _this$props.eleRef;
      var classes = ['Pane', split, className];
      var style = {
        flex: 1,
        position: 'relative',
        outline: 'none'
      };

      if (size !== undefined) {
        if (split === 'vertical') {
          style.width = size;
        } else {
          style.height = size;
          style.display = 'flex';
        }

        style.flex = 'none';
      }

      style = Object.assign({}, style, styleProps || {});
      return /*#__PURE__*/react.createElement("div", {
        ref: eleRef,
        className: classes.join(' '),
        style: style
      }, children);
    }
  }]);

  return Pane;
}(react.PureComponent);

Pane.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  split: propTypes.oneOf(['vertical', 'horizontal']),
  style: src,
  eleRef: propTypes.func
};
Pane.defaultProps = {};

var RESIZER_DEFAULT_CLASSNAME = 'Resizer';

var Resizer = /*#__PURE__*/function (_React$Component) {
  _inherits(Resizer, _React$Component);

  var _super = _createSuper(Resizer);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _super.apply(this, arguments);
  }

  _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _onClick = _this$props.onClick,
          _onDoubleClick = _this$props.onDoubleClick,
          _onMouseDown = _this$props.onMouseDown,
          _onTouchEnd = _this$props.onTouchEnd,
          _onTouchStart = _this$props.onTouchStart,
          resizerClassName = _this$props.resizerClassName,
          split = _this$props.split,
          style = _this$props.style;
      var classes = [resizerClassName, split, className];
      return /*#__PURE__*/react.createElement("span", {
        role: "presentation",
        className: classes.join(' '),
        style: style,
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();

          _onTouchStart(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();

          _onTouchEnd(event);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();

            _onClick(event);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();

            _onDoubleClick(event);
          }
        }
      });
    }
  }]);

  return Resizer;
}(react.Component);

Resizer.propTypes = {
  className: propTypes.string.isRequired,
  onClick: propTypes.func,
  onDoubleClick: propTypes.func,
  onMouseDown: propTypes.func.isRequired,
  onTouchStart: propTypes.func.isRequired,
  onTouchEnd: propTypes.func.isRequired,
  split: propTypes.oneOf(['vertical', 'horizontal']),
  style: src,
  resizerClassName: propTypes.string.isRequired
};
Resizer.defaultProps = {
  resizerClassName: RESIZER_DEFAULT_CLASSNAME
};

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges(); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (typeof draggedSize === 'number') {
    var min = typeof minSize === 'number' ? minSize : 0;
    var max = typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }

  if (defaultSize !== undefined) {
    return defaultSize;
  }

  return minSize;
}

function removeNullChildren(children) {
  return react.Children.toArray(children).filter(function (c) {
    return c;
  });
}

var SplitPane = /*#__PURE__*/function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  var _super = _createSuper(SplitPane);

  function SplitPane(props) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _super.call(this, props);
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); // order of setting panel sizes.
    // 1. size
    // 2. getDefaultSize(defaultSize, minsize, maxSize)

    var size = props.size,
        defaultSize = props.defaultSize,
        minSize = props.minSize,
        maxSize = props.maxSize,
        primary = props.primary;
    var initialSize = size !== undefined ? size : getDefaultSize(defaultSize, minSize, maxSize, null);
    _this.state = {
      active: false,
      resized: false,
      pane1Size: primary === 'first' ? initialSize : undefined,
      pane2Size: primary === 'second' ? initialSize : undefined,
      // these are props that are needed in static functions. ie: gDSFP
      instanceProps: {
        size: size
      }
    };
    return _this;
  }

  _createClass(SplitPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove);
      this.setState(SplitPane.getSizeUpdate(this.props, this.state));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchStart(eventWithTouches);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      var _this$props = this.props,
          allowResize = _this$props.allowResize,
          onDragStarted = _this$props.onDragStarted,
          split = _this$props.split;

      if (allowResize) {
        unFocus(document, window);
        var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;

        if (typeof onDragStarted === 'function') {
          onDragStarted();
        }

        this.setState({
          active: true,
          position: position
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchMove(eventWithTouches);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      var _this$props2 = this.props,
          allowResize = _this$props2.allowResize,
          maxSize = _this$props2.maxSize,
          minSize = _this$props2.minSize,
          onChange = _this$props2.onChange,
          split = _this$props2.split,
          step = _this$props2.step;
      var _this$state = this.state,
          active = _this$state.active,
          position = _this$state.position;

      if (allowResize && active) {
        unFocus(document, window);
        var isPrimaryFirst = this.props.primary === 'first';
        var ref = isPrimaryFirst ? this.pane1 : this.pane2;
        var ref2 = isPrimaryFirst ? this.pane2 : this.pane1;

        if (ref) {
          var node = ref;
          var node2 = ref2;

          if (node.getBoundingClientRect) {
            var width = node.getBoundingClientRect().width;
            var height = node.getBoundingClientRect().height;
            var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
            var size = split === 'vertical' ? width : height;
            var positionDelta = position - current;

            if (step) {
              if (Math.abs(positionDelta) < step) {
                return;
              } // Integer division
              // eslint-disable-next-line no-bitwise


              positionDelta = ~~(positionDelta / step) * step;
            }

            var sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta;
            var pane1Order = parseInt(window.getComputedStyle(node).order);
            var pane2Order = parseInt(window.getComputedStyle(node2).order);

            if (pane1Order > pane2Order) {
              sizeDelta = -sizeDelta;
            }

            var newMaxSize = maxSize;

            if (maxSize !== undefined && maxSize <= 0) {
              var splitPane = this.splitPane;

              if (split === 'vertical') {
                newMaxSize = splitPane.getBoundingClientRect().width + maxSize;
              } else {
                newMaxSize = splitPane.getBoundingClientRect().height + maxSize;
              }
            }

            var newSize = size - sizeDelta;
            var newPosition = position - positionDelta;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (maxSize !== undefined && newSize > newMaxSize) {
              newSize = newMaxSize;
            } else {
              this.setState({
                position: newPosition,
                resized: true
              });
            }

            if (onChange) onChange(newSize);
            this.setState(_defineProperty({
              draggedSize: newSize
            }, isPrimaryFirst ? 'pane1Size' : 'pane2Size', newSize));
          }
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this$props3 = this.props,
          allowResize = _this$props3.allowResize,
          onDragFinished = _this$props3.onDragFinished;
      var _this$state2 = this.state,
          active = _this$state2.active,
          draggedSize = _this$state2.draggedSize;

      if (allowResize && active) {
        if (typeof onDragFinished === 'function') {
          onDragFinished(draggedSize);
        }

        this.setState({
          active: false
        });
      }
    } // we have to check values since gDSFP is called on every render and more in StrictMode

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          allowResize = _this$props4.allowResize,
          children = _this$props4.children,
          className = _this$props4.className,
          onResizerClick = _this$props4.onResizerClick,
          onResizerDoubleClick = _this$props4.onResizerDoubleClick,
          paneClassName = _this$props4.paneClassName,
          pane1ClassName = _this$props4.pane1ClassName,
          pane2ClassName = _this$props4.pane2ClassName,
          paneStyle = _this$props4.paneStyle,
          pane1StyleProps = _this$props4.pane1Style,
          pane2StyleProps = _this$props4.pane2Style,
          resizerClassName = _this$props4.resizerClassName,
          resizerStyle = _this$props4.resizerStyle,
          split = _this$props4.split,
          styleProps = _this$props4.style;
      var _this$state3 = this.state,
          pane1Size = _this$state3.pane1Size,
          pane2Size = _this$state3.pane2Size;
      var disabledClass = allowResize ? '' : 'disabled';
      var resizerClassNamesIncludingDefault = resizerClassName ? "".concat(resizerClassName, " ").concat(RESIZER_DEFAULT_CLASSNAME) : resizerClassName;
      var notNullChildren = removeNullChildren(children);

      var style = _objectSpread2({
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        MozUserSelect: 'text',
        WebkitUserSelect: 'text',
        msUserSelect: 'text',
        userSelect: 'text'
      }, styleProps);

      if (split === 'vertical') {
        Object.assign(style, {
          flexDirection: 'row',
          left: 0,
          right: 0
        });
      } else {
        Object.assign(style, {
          bottom: 0,
          flexDirection: 'column',
          minHeight: '100%',
          top: 0,
          width: '100%'
        });
      }

      var classes = ['SplitPane', className, split, disabledClass];

      var pane1Style = _objectSpread2({}, paneStyle, {}, pane1StyleProps);

      var pane2Style = _objectSpread2({}, paneStyle, {}, pane2StyleProps);

      var pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ');
      var pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ');
      return /*#__PURE__*/react.createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, /*#__PURE__*/react.createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), /*#__PURE__*/react.createElement(Resizer, {
        className: disabledClass,
        onClick: onResizerClick,
        onDoubleClick: onResizerDoubleClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onMouseUp,
        key: "resizer",
        resizerClassName: resizerClassNamesIncludingDefault,
        split: split,
        style: resizerStyle || {}
      }), /*#__PURE__*/react.createElement(Pane, {
        className: pane2Classes,
        key: "pane2",
        eleRef: function eleRef(node) {
          _this2.pane2 = node;
        },
        size: pane2Size,
        split: split,
        style: pane2Style
      }, notNullChildren[1]));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return SplitPane.getSizeUpdate(nextProps, prevState);
    }
  }, {
    key: "getSizeUpdate",
    value: function getSizeUpdate(props, state) {
      var newState = {};
      var instanceProps = state.instanceProps;

      if (instanceProps.size === props.size && props.size !== undefined) {
        return {};
      }

      var newSize = props.size !== undefined ? props.size : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);

      if (props.size !== undefined) {
        newState.draggedSize = newSize;
      }

      var isPanel1Primary = props.primary === 'first';
      newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
      newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;
      newState.instanceProps = {
        size: props.size
      };
      return newState;
    }
  }]);

  return SplitPane;
}(react.Component);

SplitPane.propTypes = {
  allowResize: propTypes.bool,
  children: propTypes.arrayOf(propTypes.node).isRequired,
  className: propTypes.string,
  primary: propTypes.oneOf(['first', 'second']),
  minSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  maxSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // eslint-disable-next-line react/no-unused-prop-types
  defaultSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  split: propTypes.oneOf(['vertical', 'horizontal']),
  onDragStarted: propTypes.func,
  onDragFinished: propTypes.func,
  onChange: propTypes.func,
  onResizerClick: propTypes.func,
  onResizerDoubleClick: propTypes.func,
  style: src,
  resizerStyle: src,
  paneClassName: propTypes.string,
  pane1ClassName: propTypes.string,
  pane2ClassName: propTypes.string,
  paneStyle: src,
  pane1Style: src,
  pane2Style: src,
  resizerClassName: propTypes.string,
  step: propTypes.number
};
SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: ''
};
polyfill(SplitPane);

function makeTypeChecker(tabsRole) {
  return function (element) {
    return !!element.type && element.type.tabsRole === tabsRole;
  };
}

var isTab = makeTypeChecker('Tab');
var isTabList = makeTypeChecker('TabList');
var isTabPanel = makeTypeChecker('TabPanel');

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

function deepMap(children, callback) {
  return react.Children.map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return /*#__PURE__*/react.cloneElement(child, _extends({}, child.props, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function deepForEach(children, callback) {
  return react.Children.forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function cx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}

function getTabsCount(children) {
  var tabCount = 0;
  deepForEach(children, function (child) {
    if (isTab(child)) tabCount++;
  });
  return tabCount;
}
function getPanelsCount(children) {
  var panelCount = 0;
  deepForEach(children, function (child) {
    if (isTabPanel(child)) panelCount++;
  });
  return panelCount;
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function isNode(node) {
  return node && 'getAttribute' in node;
} // Determine if a node from event.target is a Tab element


function isTabNode(node) {
  return isNode(node) && node.getAttribute('role') === 'tab';
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

function determineCanUseActiveElement(environment) {
  var env = environment || (typeof window !== 'undefined' ? window : undefined);

  try {
    canUseActiveElement = !!(typeof env !== 'undefined' && env.document && env.document.activeElement);
  } catch (e) {
    // Work around for IE bug when accessing document.activeElement in an iframe
    // Refer to the following resources:
    // http://stackoverflow.com/a/10982960/369687
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
    canUseActiveElement = false;
  }
}

var UncontrolledTabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTabs, _Component);

  function UncontrolledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.tabNodes = [];

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          disableUpDownKeys = _this$props.disableUpDownKeys;

      if (_this.isTabFromContainer(e.target)) {
        var index = _this.props.selectedIndex;
        var preventDefault = false;
        var useSelectedIndex = false;

        if (e.keyCode === 32 || e.keyCode === 13) {
          preventDefault = true;
          useSelectedIndex = false;

          _this.handleClick(e);
        }

        if (e.keyCode === 37 || !disableUpDownKeys && e.keyCode === 38) {
          // Select next tab to the left, validate if up arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getNextTab(index);
          } else {
            index = _this.getPrevTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 39 || !disableUpDownKeys && e.keyCode === 40) {
          // Select next tab to the right, validate if down arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getPrevTab(index);
          } else {
            index = _this.getNextTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 35) {
          // Select last tab (End key)
          index = _this.getLastTab();
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 36) {
          // Select first tab (Home key)
          index = _this.getFirstTab();
          preventDefault = true;
          useSelectedIndex = true;
        } // This prevents scrollbars from moving around


        if (preventDefault) {
          e.preventDefault();
        } // Only use the selected index in the state if we're not using the tabbed index


        if (useSelectedIndex) {
          _this.setSelected(index, e);
        }
      }
    };

    _this.handleClick = function (e) {
      var node = e.target;

      do {
        if (_this.isTabFromContainer(node)) {
          if (isTabDisabled(node)) {
            return;
          }

          var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);

          _this.setSelected(index, e);

          return;
        }
      } while ((node = node.parentNode) != null);
    };

    return _this;
  }

  var _proto = UncontrolledTabs.prototype;

  _proto.setSelected = function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;
    var _this$props2 = this.props,
        onSelect = _this$props2.onSelect,
        selectedIndex = _this$props2.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  };

  _proto.getNextTab = function getNextTab(index) {
    var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(this.getTab(_i))) {
        return _i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getPrevTab = function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = this.getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getFirstTab = function getFirstTab() {
    var count = this.getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getLastTab = function getLastTab() {
    var i = this.getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getTabsCount = function getTabsCount$1() {
    var children = this.props.children;
    return getTabsCount(children);
  };

  _proto.getPanelsCount = function getPanelsCount$1() {
    var children = this.props.children;
    return getPanelsCount(children);
  };

  _proto.getTab = function getTab(index) {
    return this.tabNodes["tabs-" + index];
  };

  _proto.getChildren = function getChildren() {
    var _this2 = this;

    var index = 0;
    var _this$props3 = this.props,
        children = _this$props3.children,
        disabledTabClassName = _this$props3.disabledTabClassName,
        focus = _this$props3.focus,
        forceRenderTabPanel = _this$props3.forceRenderTabPanel,
        selectedIndex = _this$props3.selectedIndex,
        selectedTabClassName = _this$props3.selectedTabClassName,
        selectedTabPanelClassName = _this$props3.selectedTabPanelClassName,
        environment = _this$props3.environment;
    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      this.tabIds.push(uuid());
      this.panelIds.push(uuid());
    } // Map children to dynamically setup refs


    return deepMap(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if (isTabList(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment);
        }

        if (canUseActiveElement) {
          wasTabFocused = react.Children.toArray(child.props.children).filter(isTab).some(function (tab, i) {
            var env = environment || (typeof window !== 'undefined' ? window : undefined);
            return env && env.document.activeElement === _this2.getTab(i);
          });
        }

        result = /*#__PURE__*/react.cloneElement(child, {
          children: deepMap(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                _this2.tabNodes[key] = node;
              },
              id: _this2.tabIds[listIndex],
              panelId: _this2.panelIds[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return /*#__PURE__*/react.cloneElement(tab, props);
          })
        });
      } else if (isTabPanel(child)) {
        var props = {
          id: _this2.panelIds[index],
          tabId: _this2.tabIds[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = /*#__PURE__*/react.cloneElement(child, props);
      }

      return result;
    });
  };

  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  _proto.isTabFromContainer = function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === this.node) return true;
      if (nodeAncestor.getAttribute('data-tabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  };

  _proto.render = function render() {
    var _this3 = this;

    // Delete all known props, so they don't get added to DOM
    var _this$props4 = this.props;
        _this$props4.children;
        var className = _this$props4.className;
        _this$props4.disabledTabClassName;
        var domRef = _this$props4.domRef;
        _this$props4.focus;
        _this$props4.forceRenderTabPanel;
        _this$props4.onSelect;
        _this$props4.selectedIndex;
        _this$props4.selectedTabClassName;
        _this$props4.selectedTabPanelClassName;
        _this$props4.environment;
        _this$props4.disableUpDownKeys;
        var attributes = _objectWithoutPropertiesLoose(_this$props4, ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName", "environment", "disableUpDownKeys"]);

    return /*#__PURE__*/react.createElement("div", _extends$1({}, attributes, {
      className: cx(className),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      ref: function ref(node) {
        _this3.node = node;
        if (domRef) domRef(node);
      },
      "data-tabs": true
    }), this.getChildren());
  };

  return UncontrolledTabs;
}(react.Component);

UncontrolledTabs.defaultProps = {
  className: 'react-tabs',
  focus: false
};
UncontrolledTabs.propTypes = {};

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }
var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;

var Tabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose$1(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSelected = function (index, last, event) {
      var onSelect = _this.props.onSelect;
      var mode = _this.state.mode; // Call change event handler

      if (typeof onSelect === 'function') {
        // Check if the change event handler cancels the tab change
        if (onSelect(index, last, event) === false) return;
      }

      var state = {
        // Set focus if the change was triggered from the keyboard
        focus: event.type === 'keydown'
      };

      if (mode === MODE_UNCONTROLLED) {
        // Update selected index
        state.selectedIndex = index;
      }

      _this.setState(state);
    };

    _this.state = Tabs.copyPropsToState(_this.props, {}, props.defaultFocus);
    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return Tabs.copyPropsToState(props, state);
  };

  Tabs.getModeFromProps = function getModeFromProps(props) {
    return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
  };

  // preserve the existing selectedIndex from state.
  // If the state has not selectedIndex, default to the defaultIndex or 0
  Tabs.copyPropsToState = function copyPropsToState(props, state, focus) {
    if (focus === void 0) {
      focus = false;
    }

    var newState = {
      focus: focus,
      mode: Tabs.getModeFromProps(props)
    };

    if (newState.mode === MODE_UNCONTROLLED) {
      var maxTabIndex = getTabsCount(props.children) - 1;
      var selectedIndex = null;

      if (state.selectedIndex != null) {
        selectedIndex = Math.min(state.selectedIndex, maxTabIndex);
      } else {
        selectedIndex = props.defaultIndex || 0;
      }

      newState.selectedIndex = selectedIndex;
    }

    return newState;
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children;
        _this$props.defaultIndex;
        _this$props.defaultFocus;
        var props = _objectWithoutPropertiesLoose$1(_this$props, ["children", "defaultIndex", "defaultFocus"]);

    var _this$state = this.state,
        focus = _this$state.focus,
        selectedIndex = _this$state.selectedIndex;
    props.focus = focus;
    props.onSelect = this.handleSelected;

    if (selectedIndex != null) {
      props.selectedIndex = selectedIndex;
    }

    return /*#__PURE__*/react.createElement(UncontrolledTabs, props, children);
  };

  return Tabs;
}(react.Component);

Tabs.defaultProps = {
  defaultFocus: false,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null,
  environment: null,
  disableUpDownKeys: false
};
Tabs.propTypes = {};
Tabs.tabsRole = 'Tabs';

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

var TabList = /*#__PURE__*/function (_Component) {
  _inheritsLoose$2(TabList, _Component);

  function TabList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["children", "className"]);

    return /*#__PURE__*/react.createElement("ul", _extends$2({}, attributes, {
      className: cx(className),
      role: "tablist"
    }), children);
  };

  return TabList;
}(react.Component);

TabList.defaultProps = {
  className: 'react-tabs__tab-list'
};
TabList.propTypes = {};
TabList.tabsRole = 'TabList';

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
var DEFAULT_CLASS = 'react-tabs__tab';

var Tab = /*#__PURE__*/function (_Component) {
  _inheritsLoose$3(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkFocus();
  };

  _proto.checkFocus = function checkFocus() {
    var _this$props = this.props,
        selected = _this$props.selected,
        focus = _this$props.focus;

    if (selected && focus) {
      this.node.focus();
    }
  };

  _proto.render = function render() {
    var _cx,
        _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        disabledClassName = _this$props2.disabledClassName;
        _this$props2.focus;
        var id = _this$props2.id,
        panelId = _this$props2.panelId,
        selected = _this$props2.selected,
        selectedClassName = _this$props2.selectedClassName,
        tabIndex = _this$props2.tabIndex,
        tabRef = _this$props2.tabRef,
        attributes = _objectWithoutPropertiesLoose$3(_this$props2, ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"]);

    return /*#__PURE__*/react.createElement("li", _extends$3({}, attributes, {
      className: cx(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
      ref: function ref(node) {
        _this.node = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: id,
      "aria-selected": selected ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : 'false',
      "aria-controls": panelId,
      tabIndex: tabIndex || (selected ? '0' : null)
    }), children);
  };

  return Tab;
}(react.Component);

Tab.defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};
Tab.propTypes = {};
Tab.tabsRole = 'Tab';

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }
var DEFAULT_CLASS$1 = 'react-tabs__tab-panel';

var TabPanel = /*#__PURE__*/function (_Component) {
  _inheritsLoose$4(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        forceRender = _this$props.forceRender,
        id = _this$props.id,
        selected = _this$props.selected,
        selectedClassName = _this$props.selectedClassName,
        tabId = _this$props.tabId,
        attributes = _objectWithoutPropertiesLoose$4(_this$props, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

    return /*#__PURE__*/react.createElement("div", _extends$4({}, attributes, {
      className: cx(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(react.Component);

TabPanel.defaultProps = {
  className: DEFAULT_CLASS$1,
  forceRender: false,
  selectedClassName: DEFAULT_CLASS$1 + "--selected"
};
TabPanel.propTypes = {};
TabPanel.tabsRole = 'TabPanel';

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign$1({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react.createElement(IconBase, __assign$1({
      attr: __assign$1({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react.createElement("svg", __assign$1({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign$1(__assign$1({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function GoChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"}}]})(props);
}function GoChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 10 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function TiMinus (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"}}]})(props);
}

var reactTable_production_min = createCommonjsModule(function (module, exports) {
!function(e,t){t(exports,react);}(commonjsGlobal,(function(e,t){function n(e,t,n,o,r,i,u){try{var l=e[i](u),s=l.value;}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(o,r);}function o(e){return function(){var t=this,o=arguments;return new Promise((function(r,i){var u=e.apply(t,o);function l(e){n(u,r,i,l,s,"next",e);}function s(e){n(u,r,i,l,s,"throw",e);}l(void 0);}))}}function r(){return (r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);}return e}).apply(this,arguments)}function i(e,t){if(null==e)return {};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===t?String:Number)(e)}(e,"string");return "symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},s=function(e){var t=e.value;return void 0===t?"":t},a=function(){return t.createElement(t.Fragment,null," ")},c={Cell:s,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,o=t.className;return e=r({},e,{},i(t,["style","className"])),n&&(e.style=e.style?r({},e.style||{},{},n||{}):n),o&&(e.className=e.className?e.className+" "+o:o),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,o){return function e(t,n,o){return "function"==typeof n?e({},n(t,o)):Array.isArray(n)?d.apply(void 0,[t].concat(n)):d(t,n)}(e,o,r({},t,{userProps:n}))}),{})}},p=function(e,t,n,o){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},g=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n);}))};function v(e,t,n,o){e.findIndex((function(e){return e.pluginName===n}));t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}));}));}function m(e,t){return "function"==typeof e?e(t):e}function h(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var y="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function w(e,n){var o=t.useRef(!1);y((function(){o.current&&e(),o.current=!0;}),n);}function R(e,t,n){return void 0===n&&(n={}),function(o,i){void 0===i&&(i={});var u="string"==typeof o?t[o]:o;if(void 0===u)throw console.info(t),new Error("Renderer Error ☝️");return b(u,r({},e,{column:t},n,{},i))}}function b(e,n){return function(e){return "function"==typeof e&&((t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent);var t;}(o=e)||"function"==typeof o||function(e){return "object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(o)?t.createElement(e,n):e;var o;}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return x(e=r({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function C(e){return G(e,"columns")}function x(e){var t=e.id,n=e.accessor,o=e.Header;if("string"==typeof n){t=t||n;var r=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var o,r="function"==typeof t?t:JSON.stringify(t),i=E.get(r)||function(){var e=function(e){return function e(t,n){void 0===n&&(n=[]);if(Array.isArray(t))for(var o=0;o<t.length;o+=1)e(t[o],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(W,".").replace(O,"").split(".")}(t);return E.set(r,e),e}();try{o=i.reduce((function(e,t){return e[t]}),e);}catch(e){}return void 0!==o?o:n}(e,r)};}if(!t&&"string"==typeof o&&o&&(t=o),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function P(e,t){if(!t)throw new Error;return Object.assign(e,r({Header:a,Footer:a},c,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function B(e,t,n){void 0===n&&(n=function(){return {}});for(var o=[],i=e,u=0,l=function(){return u++},s=function(){var e={headers:[]},u=[],s=i.some((function(e){return e.parent}));i.forEach((function(o){var i,a=[].concat(u).reverse()[0];if(s){if(o.parent)i=r({},o.parent,{originalId:o.parent.id,id:o.parent.id+"_"+l(),headers:[o]},n(o));else i=P(r({originalId:o.id+"_placeholder",id:o.id+"_placeholder_"+l(),placeholderOf:o,headers:[o]},n(o)),t);a&&a.originalId===i.originalId?a.headers.push(o):u.push(i);}e.headers.push(o);})),o.push(e),i=u;};i.length;)s();return o.reverse()}var E=new Map;function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=0;o<t.length;o+=1)if(void 0!==t[o])return t[o]}function F(e){if("function"==typeof e)return e}function G(e,t){var n=[];return function e(o){o.forEach((function(o){o[t]?e(o[t]):n.push(o);}));}(e),n}function A(e,t){var n=t.manualExpandedKey,o=t.expanded,r=t.expandSubRows,i=void 0===r||r,u=[];return e.forEach((function(e){return function e(t,r){void 0===r&&(r=!0),t.isExpanded=t.original&&t.original[n]||o[t.id],t.canExpand=t.subRows&&!!t.subRows.length,r&&u.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,i)}));}(e)})),u}function k(e,t,n){return F(e)||t[e]||n[e]||n.text}function H(e,t,n){return e?e(t,n):void 0===t}function T(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var z=null;var W=/\[/g,O=/\]/g;var M=function(e){return r({role:"table"},e)},j=function(e){return r({role:"rowgroup"},e)},N=function(e,t){var n=t.column;return r({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},D=function(e,t){var n=t.column;return r({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},L=function(e,t){return r({key:"headerGroup_"+t.index,role:"row"},e)},V=function(e,t){return r({key:"footerGroup_"+t.index},e)},_=function(e,t){return r({key:"row_"+t.row.id,role:"row"},e)},X=function(e,t){var n=t.cell;return r({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function q(){return {useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[M],getTableBodyProps:[j],getHeaderGroupProps:[L],getFooterGroupProps:[V],getHeaderProps:[N],getFooterProps:[D],getRowProps:[_],getCellProps:[X],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var K=function(e){e.getToggleHiddenProps=[U],e.getToggleHideAllColumnsProps=[$],e.stateReducers.push(J),e.useInstanceBeforeDimensions.push(Y),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.hiddenColumns])})),e.useInstance.push(Q);};K.pluginName="useColumnVisibility";var U=function(e,t){var n=t.column;return [e,{onChange:function(e){n.toggleHidden(!e.target.checked);},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},$=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked);},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function J(e,t,n,o){if(t.type===l.init)return r({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return r({},e,{hiddenColumns:o.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var i=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return r({},e,{hiddenColumns:i})}return t.type===l.setHiddenColumns?r({},e,{hiddenColumns:m(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?r({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?o.allColumns.map((function(e){return e.id})):[]}):void 0}function Y(e){var n=e.headers,o=e.state.hiddenColumns;t.useRef(!1).current;var r=0;n.forEach((function(e){return r+=function e(t,n){t.isVisible=n&&!o.includes(t.id);var r=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return r+=e(n,t.isVisible)})):r=t.isVisible?1:0,t.totalVisibleHeaderCount=r,r}(e,!0)}));}function Q(e){var n=e.columns,o=e.flatHeaders,r=e.dispatch,i=e.allColumns,u=e.getHooks,s=e.state.hiddenColumns,a=e.autoResetHiddenColumns,c=void 0===a||a,d=h(e),p=i.length===s.length,g=t.useCallback((function(e,t){return r({type:l.toggleHideColumn,columnId:e,value:t})}),[r]),v=t.useCallback((function(e){return r({type:l.setHiddenColumns,value:e})}),[r]),m=t.useCallback((function(e){return r({type:l.toggleHideAllColumns,value:e})}),[r]),y=f(u().getToggleHideAllColumnsProps,{instance:d()});o.forEach((function(e){e.toggleHidden=function(t){r({type:l.toggleHideColumn,columnId:e.id,value:t});},e.getToggleHiddenProps=f(u().getToggleHiddenProps,{instance:d(),column:e});}));var R=h(c);w((function(){R()&&r({type:l.resetHiddenColumns});}),[r,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:g,setHiddenColumns:v,toggleHideAllColumns:m,getToggleHideAllColumnsProps:y});}var Z={},ee={},te=function(e,t,n){return e},ne=function(e,t){return e.subRows||[]},oe=function(e,t,n){return ""+(n?[n.id,t].join("."):t)},re=function(e){return e};function ie(e){var t=e.initialState,n=void 0===t?Z:t,o=e.defaultColumn,u=void 0===o?ee:o,l=e.getSubRows,s=void 0===l?ne:l,a=e.getRowId,c=void 0===a?oe:a,d=e.stateReducer,f=void 0===d?te:d,p=e.useControlledState,g=void 0===p?re:p;return r({},i(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:u,getSubRows:s,getRowId:c,stateReducer:f,useControlledState:g})}function ue(e,t){void 0===t&&(t=0);var n=0,o=0,r=0,i=0;return e.forEach((function(e){var u=e.headers;if(e.totalLeft=t,u&&u.length){var l=ue(u,t),s=l[0],a=l[1],c=l[2],d=l[3];e.totalMinWidth=s,e.totalWidth=a,e.totalMaxWidth=c,e.totalFlexWidth=d;}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,o+=e.totalWidth,r+=e.totalMaxWidth,i+=e.totalFlexWidth);})),[n,o,r,i]}function le(e){var t=e.data,n=e.rows,o=e.flatRows,r=e.rowsById,i=e.column,u=e.getRowId,l=e.getSubRows,s=e.accessValueHooks,a=e.getInstance;t.forEach((function(e,c){return function e(n,c,d,f,g){void 0===d&&(d=0);var v=n,m=u(n,c,f),h=r[m];if(h)h.subRows&&h.originalSubRows.forEach((function(t,n){return e(t,n,d+1,h)}));else if((h={id:m,original:v,index:c,depth:d,cells:[{}]}).cells.map=T,h.cells.filter=T,h.cells.forEach=T,h.cells[0].getCellProps=T,h.values={},g.push(h),o.push(h),r[m]=h,h.originalSubRows=l(n,c),h.originalSubRows){var y=[];h.originalSubRows.forEach((function(t,n){return e(t,n,d+1,h,y)})),h.subRows=y;}i.accessor&&(h.values[i.id]=i.accessor(n,c,h,g,t)),h.values[i.id]=p(s,h.values[i.id],{row:h,column:i,instance:a()});}(e,c,0,void 0,n)}));}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var se=function(e){e.getToggleAllRowsExpandedProps=[ae],e.getToggleRowExpandedProps=[ce],e.stateReducers.push(de),e.useInstance.push(fe),e.prepareRow.push(pe);};se.pluginName="useExpanded";var ae=function(e,t){var n=t.instance;return [e,{onClick:function(e){n.toggleAllRowsExpanded();},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},ce=function(e,t){var n=t.row;return [e,{onClick:function(){n.toggleRowExpanded();},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function de(e,t,n,o){if(t.type===l.init)return r({expanded:{}},e);if(t.type===l.resetExpanded)return r({},e,{expanded:o.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var s=t.value,a=o.isAllRowsExpanded,c=o.rowsById;if(void 0!==s?s:!a){var d={};return Object.keys(c).forEach((function(e){d[e]=!0;})),r({},e,{expanded:d})}return r({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var f,p=t.id,g=t.value,v=e.expanded[p],m=void 0!==g?g:!v;if(!v&&m)return r({},e,{expanded:r({},e.expanded,(f={},f[p]=!0,f))});if(v&&!m){var h=e.expanded;h[p];return r({},e,{expanded:i(h,[p].map(u))})}return e}}function fe(e){var n=e.data,o=e.rows,r=e.rowsById,i=e.manualExpandedKey,u=void 0===i?"expanded":i,s=e.paginateExpandedRows,a=void 0===s||s,c=e.expandSubRows,d=void 0===c||c,p=e.autoResetExpanded,g=void 0===p||p,m=e.getHooks,y=e.plugins,R=e.state.expanded,b=e.dispatch;v(y,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var S=h(g),C=Boolean(Object.keys(r).length&&Object.keys(R).length);C&&Object.keys(r).some((function(e){return !R[e]}))&&(C=!1),w((function(){S()&&b({type:l.resetExpanded});}),[b,n]);var x=t.useCallback((function(e,t){b({type:l.toggleRowExpanded,id:e,value:t});}),[b]),P=t.useCallback((function(e){return b({type:l.toggleAllRowsExpanded,value:e})}),[b]),B=t.useMemo((function(){return a?A(o,{manualExpandedKey:u,expanded:R,expandSubRows:d}):o}),[a,o,u,R,d]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length);})),t}(R)}),[R]),I=h(e),F=f(m().getToggleAllRowsExpandedProps,{instance:I()});Object.assign(e,{preExpandedRows:o,expandedRows:B,rows:B,expandedDepth:E,isAllRowsExpanded:C,toggleRowExpanded:x,toggleAllRowsExpanded:P,getToggleAllRowsExpandedProps:F});}function pe(e,t){var n=t.instance.getHooks,o=t.instance;e.toggleRowExpanded=function(t){return o.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:o,row:e});}var ge=function(e,t,n){return e=e.filter((function(e){return t.some((function(t){var o=e.values[t];return String(o).toLowerCase().includes(String(n).toLowerCase())}))}))};ge.autoRemove=function(e){return !e};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return void 0===o||String(o).toLowerCase()===String(n).toLowerCase()}))}))};ve.autoRemove=function(e){return !e};var me=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return void 0===o||String(o)===String(n)}))}))};me.autoRemove=function(e){return !e};var he=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};he.autoRemove=function(e){return !e||!e.length};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return o&&o.length&&n.every((function(e){return o.includes(e)}))}))}))};ye.autoRemove=function(e){return !e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return o&&o.length&&n.some((function(e){return o.includes(e)}))}))}))};we.autoRemove=function(e){return !e||!e.length};var Re=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return n.includes(o)}))}))};Re.autoRemove=function(e){return !e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};be.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var Ce=function(e,t,n){var o=n||[],r=o[0],i=o[1];if((r="number"==typeof r?r:-1/0)>(i="number"==typeof i?i:1/0)){var u=r;r=i,i=u;}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=r&&n<=i}))}))};Ce.autoRemove=function(e){return !e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var xe=Object.freeze({__proto__:null,text:ge,exactText:ve,exactTextCase:me,includes:he,includesAll:ye,includesSome:we,includesValue:Re,exact:be,equals:Se,between:Ce});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Pe=function(e){e.stateReducers.push(Be),e.useInstance.push(Ee);};function Be(e,t,n,o){if(t.type===l.init)return r({filters:[]},e);if(t.type===l.resetFilters)return r({},e,{filters:o.initialState.filters||[]});if(t.type===l.setFilter){var i=t.columnId,u=t.filterValue,s=o.allColumns,a=o.filterTypes,c=s.find((function(e){return e.id===i}));if(!c)throw new Error("React-Table: Could not find a column with id: "+i);var d=k(c.filter,a||{},xe),f=e.filters.find((function(e){return e.id===i})),p=m(u,f&&f.value);return H(d.autoRemove,p,c)?r({},e,{filters:e.filters.filter((function(e){return e.id!==i}))}):r({},e,f?{filters:e.filters.map((function(e){return e.id===i?{id:i,value:p}:e}))}:{filters:[].concat(e.filters,[{id:i,value:p}])})}if(t.type===l.setAllFilters){var g=t.filters,v=o.allColumns,h=o.filterTypes;return r({},e,{filters:m(g,e.filters).filter((function(e){var t=v.find((function(t){return t.id===e.id}));return !H(k(t.filter,h||{},xe).autoRemove,e.value,t)}))})}}function Ee(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.rowsById,u=e.allColumns,s=e.filterTypes,a=e.manualFilters,c=e.defaultCanFilter,d=void 0!==c&&c,f=e.disableFilters,p=e.state.filters,g=e.dispatch,v=e.autoResetFilters,m=void 0===v||v,y=t.useCallback((function(e,t){g({type:l.setFilter,columnId:e,filterValue:t});}),[g]),R=t.useCallback((function(e){g({type:l.setAllFilters,filters:e});}),[g]);u.forEach((function(e){var t=e.id,n=e.accessor,o=e.defaultCanFilter,r=e.disableFilters;e.canFilter=n?I(!0!==r&&void 0,!0!==f&&void 0,!0):I(o,d,!1),e.setFilter=function(t){return y(e.id,t)};var i=p.find((function(e){return e.id===t}));e.filterValue=i&&i.value;}));var b=t.useMemo((function(){if(a||!p.length)return [o,r,i];var e=[],t={};return [function n(o,r){void 0===r&&(r=0);var i=o;return (i=p.reduce((function(e,t){var n=t.id,o=t.value,i=u.find((function(e){return e.id===n}));if(!i)return e;0===r&&(i.preFilteredRows=e);var l=k(i.filter,s||{},xe);return l?(i.filteredRows=l(e,[n],o),i.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+i.id+"."),e)}),o)).forEach((function(o){e.push(o),t[o.id]=o,o.subRows&&(o.subRows=o.subRows&&o.subRows.length>0?n(o.subRows,r+1):o.subRows);})),i}(o),e,t]}),[a,p,o,r,i,u,s]),S=b[0],C=b[1],x=b[2];t.useMemo((function(){u.filter((function(e){return !p.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=S,e.filteredRows=S;}));}),[S,p,u]);var P=h(m);w((function(){P()&&g({type:l.resetFilters});}),[g,a?null:n]),Object.assign(e,{preFilteredRows:o,preFilteredFlatRows:r,preFilteredRowsById:i,filteredRows:S,filteredFlatRows:C,filteredRowsById:x,rows:S,flatRows:C,rowsById:x,setFilter:y,setAllFilters:R});}Pe.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Ie=function(e){e.stateReducers.push(Fe),e.useInstance.push(Ge);};function Fe(e,t,n,o){if(t.type===l.resetGlobalFilter)return r({},e,{globalFilter:o.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var u=t.filterValue,s=o.userFilterTypes,a=k(o.globalFilter,s||{},xe),c=m(u,e.globalFilter);if(H(a.autoRemove,c)){e.globalFilter;return i(e,["globalFilter"])}return r({},e,{globalFilter:c})}}function Ge(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.rowsById,u=e.allColumns,s=e.filterTypes,a=e.globalFilter,c=e.manualGlobalFilter,d=e.state.globalFilter,f=e.dispatch,p=e.autoResetGlobalFilter,g=void 0===p||p,v=e.disableGlobalFilter,m=t.useCallback((function(e){f({type:l.setGlobalFilter,filterValue:e});}),[f]),y=t.useMemo((function(){if(c||void 0===d)return [o,r,i];var e=[],t={},n=k(a,s||{},xe);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),o;u.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=I(!0!==t&&void 0,!0!==v&&void 0,!0);}));var l=u.filter((function(e){return !0===e.canFilter}));return [function o(r){return (r=n(r,l.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?o(n.subRows):n.subRows;})),r}(o),e,t]}),[c,d,a,s,u,o,r,i,v]),R=y[0],b=y[1],S=y[2],C=h(g);w((function(){C()&&f({type:l.resetGlobalFilter});}),[f,c?null:n]),Object.assign(e,{preGlobalFilteredRows:o,preGlobalFilteredFlatRows:r,preGlobalFilteredRowsById:i,globalFilteredRows:R,globalFilteredFlatRows:b,globalFilteredRowsById:S,rows:R,flatRows:b,rowsById:S,setGlobalFilter:m,disableGlobalFilter:v});}function Ae(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Ie.pluginName="useGlobalFilter";var ke=Object.freeze({__proto__:null,sum:Ae,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e));})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e));})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e));})),t+".."+n},average:function(e){return Ae(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),He=[],Te={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var ze=function(e){e.getGroupByToggleProps=[We],e.stateReducers.push(Oe),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Me),e.useInstance.push(Ne),e.prepareRow.push(De);};ze.pluginName="useGroupBy";var We=function(e,t){var n=t.header;return [e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy();}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function Oe(e,t,n,o){if(t.type===l.init)return r({groupBy:[]},e);if(t.type===l.resetGroupBy)return r({},e,{groupBy:o.initialState.groupBy||[]});if(t.type===l.setGroupBy)return r({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var i=t.columnId,u=t.value,s=void 0!==u?u:!e.groupBy.includes(i);return r({},e,s?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter((function(e){return e!==i}))})}}function Me(e,t){var n=t.instance.state.groupBy,o=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),r=e.filter((function(e){return !n.includes(e.id)}));return (e=[].concat(o,r)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id);})),e}var je={};function Ne(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.rowsById,u=e.allColumns,s=e.flatHeaders,a=e.groupByFn,c=void 0===a?Le:a,d=e.manualGroupBy,p=e.aggregations,g=void 0===p?je:p,m=e.plugins,y=e.state.groupBy,R=e.dispatch,b=e.autoResetGroupBy,S=void 0===b||b,C=e.disableGroupBy,x=e.defaultCanGroupBy,P=e.getHooks;v(m,["useColumnOrder","useFilters"],"useGroupBy");var B=h(e);u.forEach((function(t){var n=t.accessor,o=t.defaultGroupBy,r=t.disableGroupBy;t.canGroupBy=n?I(t.canGroupBy,!0!==r&&void 0,!0!==C&&void 0,!0):I(t.canGroupBy,o,x,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell;}));var E=t.useCallback((function(e,t){R({type:l.toggleGroupBy,columnId:e,value:t});}),[R]),F=t.useCallback((function(e){R({type:l.setGroupBy,value:e});}),[R]);s.forEach((function(e){e.getGroupByToggleProps=f(P().getGroupByToggleProps,{instance:B(),header:e});}));var A=t.useMemo((function(){if(d||!y.length)return [o,r,i,He,Te,r,i];var e=y.filter((function(e){return u.find((function(t){return t.id===e}))})),t=[],n={},l=[],s={},a=[],f={},p=function o(r,i,d){if(void 0===i&&(i=0),i===e.length)return r;var p=e[i],v=c(r,p);return Object.entries(v).map((function(r,c){var v=r[0],m=r[1],h=p+":"+v,y=o(m,i+1,h=d?d+">"+h:h),w=i?G(m,"leafRows"):m,R=function(t,n,o){var r={};return u.forEach((function(i){if(e.includes(i.id))r[i.id]=n[0]?n[0].values[i.id]:null;else {var u="function"==typeof i.aggregate?i.aggregate:g[i.aggregate]||ke[i.aggregate];if(u){var l=n.map((function(e){return e.values[i.id]})),s=t.map((function(e){var t=e.values[i.id];if(!o&&i.aggregateValue){var n="function"==typeof i.aggregateValue?i.aggregateValue:g[i.aggregateValue]||ke[i.aggregateValue];if(!n)throw console.info({column:i}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,i);}return t}));r[i.id]=u(s,l);}else {if(i.aggregate)throw console.info({column:i}),new Error("React Table: Invalid column.aggregate option for column listed above");r[i.id]=null;}}})),r}(w,m,i),b={id:h,isGrouped:!0,groupByID:p,groupByVal:v,values:R,subRows:y,leafRows:w,depth:i,index:c};return y.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),s[e.id]=e):(a.push(e),f[e.id]=e);})),b}))}(o);return p.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),s[e.id]=e):(a.push(e),f[e.id]=e);})),[p,t,n,l,s,a,f]}),[d,y,o,r,i,u,g,c]),k=A[0],H=A[1],T=A[2],z=A[3],W=A[4],O=A[5],M=A[6],j=h(S);w((function(){j()&&R({type:l.resetGroupBy});}),[R,d?null:n]),Object.assign(e,{preGroupedRows:o,preGroupedFlatRow:r,preGroupedRowsById:i,groupedRows:k,groupedFlatRows:H,groupedRowsById:T,onlyGroupedFlatRows:z,onlyGroupedRowsById:W,nonGroupedFlatRows:O,nonGroupedRowsById:M,rows:k,flatRows:H,rowsById:T,toggleGroupBy:E,setGroupBy:F});}function De(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length);}));}function Le(e,t){return e.reduce((function(e,n,o){var r=""+n.values[t];return e[r]=Array.isArray(e[r])?e[r]:[],e[r].push(n),e}),{})}var Ve=/([0-9]+)/gm;function _e(e,t){return e===t?0:e>t?1:-1}function Xe(e,t){return e.values[t]}function qe(e){return "number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Ke=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var o=Xe(e,n),r=Xe(t,n);for(o=qe(o),r=qe(r),o=o.split(Ve).filter(Boolean),r=r.split(Ve).filter(Boolean);o.length&&r.length;){var i=o.shift(),u=r.shift(),l=parseInt(i,10),s=parseInt(u,10),a=[l,s].sort();if(isNaN(a[0])){if(i>u)return 1;if(u>i)return -1}else {if(isNaN(a[1]))return isNaN(l)?-1:1;if(l>s)return 1;if(s>l)return -1}}return o.length-r.length},datetime:function(e,t,n){var o=Xe(e,n),r=Xe(t,n);return _e(o=o.getTime(),r=r.getTime())},basic:function(e,t,n){return _e(Xe(e,n),Xe(t,n))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",c.sortType="alphanumeric",c.sortDescFirst=!1;var Ue=function(e){e.getSortByToggleProps=[$e],e.stateReducers.push(Je),e.useInstance.push(Ye);};Ue.pluginName="useSortBy";var $e=function(e,t){var n=t.instance,o=t.column,r=n.isMultiSortEvent,i=void 0===r?function(e){return e.shiftKey}:r;return [e,{onClick:o.canSort?function(e){e.persist(),o.toggleSortBy(void 0,!n.disableMultiSort&&i(e));}:void 0,style:{cursor:o.canSort?"pointer":void 0},title:o.canSort?"Toggle SortBy":void 0}]};function Je(e,t,n,o){if(t.type===l.init)return r({sortBy:[]},e);if(t.type===l.resetSortBy)return r({},e,{sortBy:o.initialState.sortBy||[]});if(t.type===l.clearSortBy)return r({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return r({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var i,u=t.columnId,s=t.desc,a=t.multi,c=o.allColumns,d=o.disableMultiSort,f=o.disableSortRemove,p=o.disableMultiRemove,g=o.maxMultiSortColCount,v=void 0===g?Number.MAX_SAFE_INTEGER:g,m=e.sortBy,h=c.find((function(e){return e.id===u})).sortDescFirst,y=m.find((function(e){return e.id===u})),w=m.findIndex((function(e){return e.id===u})),R=null!=s,b=[];return "toggle"!==(i=!d&&a?y?"toggle":"add":w!==m.length-1||1!==m.length?"replace":y?"toggle":"replace")||f||R||a&&p||!(y&&y.desc&&!h||!y.desc&&h)||(i="remove"),"replace"===i?b=[{id:u,desc:R?s:h}]:"add"===i?(b=[].concat(m,[{id:u,desc:R?s:h}])).splice(0,b.length-v):"toggle"===i?b=m.map((function(e){return e.id===u?r({},e,{desc:R?s:!y.desc}):e})):"remove"===i&&(b=m.filter((function(e){return e.id!==u}))),r({},e,{sortBy:b})}}function Ye(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.allColumns,u=e.orderByFn,s=void 0===u?Qe:u,a=e.sortTypes,c=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,g=e.flatHeaders,m=e.state.sortBy,y=e.dispatch,R=e.plugins,b=e.getHooks,S=e.autoResetSortBy,C=void 0===S||S;v(R,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var x=t.useCallback((function(e){y({type:l.setSortBy,sortBy:e});}),[y]),P=t.useCallback((function(e,t,n){y({type:l.toggleSortBy,columnId:e,desc:t,multi:n});}),[y]),B=h(e);g.forEach((function(e){var t=e.accessor,n=e.canSort,o=e.disableSortBy,r=e.id,i=t?I(!0!==o&&void 0,!0!==p&&void 0,!0):I(d,n,!1);e.canSort=i,e.canSort&&(e.toggleSortBy=function(t,n){return P(e.id,t,n)},e.clearSortBy=function(){y({type:l.clearSortBy,columnId:e.id});}),e.getSortByToggleProps=f(b().getSortByToggleProps,{instance:B(),column:e});var u=m.find((function(e){return e.id===r}));e.isSorted=!!u,e.sortedIndex=m.findIndex((function(e){return e.id===r})),e.isSortedDesc=e.isSorted?u.desc:void 0;}));var E=t.useMemo((function(){if(c||!m.length)return [o,r];var e=[],t=m.filter((function(e){return i.find((function(t){return t.id===e.id}))}));return [function n(o){var r=s(o,t.map((function(e){var t=i.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,o=F(n)||(a||{})[n]||Ke[n];if(!o)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return o(t,n,e.id,e.desc)}})),t.map((function(e){var t=i.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return r.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows));})),r}(o),e]}),[c,m,o,r,i,s,a]),G=E[0],A=E[1],k=h(C);w((function(){k()&&y({type:l.resetSortBy});}),[c?null:n]),Object.assign(e,{preSortedRows:o,preSortedFlatRows:r,sortedRows:G,sortedFlatRows:A,rows:G,flatRows:A,setSortBy:x,toggleSortBy:P});}function Qe(e,t,n){return [].concat(e).sort((function(e,o){for(var r=0;r<t.length;r+=1){var i=t[r],u=!1===n[r]||"desc"===n[r],l=i(e,o);if(0!==l)return u?-l:l}return n[0]?e.index-o.index:o.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var Ze=function(e){e.stateReducers.push(et),e.useInstance.push(tt);};function et(e,t,n,o){if(t.type===l.init)return r({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return r({},e,{pageIndex:o.initialState.pageIndex||0});if(t.type===l.gotoPage){var i=o.pageCount,u=o.page,s=m(t.pageIndex,e.pageIndex),a=!1;return s>e.pageIndex?a=-1===i?u.length>=e.pageSize:s<i:s<e.pageIndex&&(a=s>-1),a?r({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var c=t.pageSize,d=e.pageSize*e.pageIndex;return r({},e,{pageIndex:Math.floor(d/c),pageSize:c})}}function tt(e){var n=e.rows,o=e.autoResetPage,r=void 0===o||o,i=e.manualExpandedKey,u=void 0===i?"expanded":i,s=e.plugins,a=e.pageCount,c=e.paginateExpandedRows,d=void 0===c||c,f=e.expandSubRows,p=void 0===f||f,g=e.state,m=g.pageSize,y=g.pageIndex,R=g.expanded,b=g.globalFilter,S=g.filters,C=g.groupBy,x=g.sortBy,P=e.dispatch,B=e.data,E=e.manualPagination;v(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var I=h(r);w((function(){I()&&P({type:l.resetPage});}),[P,E?null:B,b,S,C,x]);var F=E?a:Math.ceil(n.length/m),G=t.useMemo((function(){return F>0?[].concat(new Array(F)).fill(null).map((function(e,t){return t})):[]}),[F]),k=t.useMemo((function(){var e;if(E)e=n;else {var t=m*y,o=t+m;e=n.slice(t,o);}return d?e:A(e,{manualExpandedKey:u,expanded:R,expandSubRows:p})}),[p,R,u,E,y,m,d,n]),H=y>0,T=-1===F?k.length>=m:y<F-1,z=t.useCallback((function(e){P({type:l.gotoPage,pageIndex:e});}),[P]),W=t.useCallback((function(){return z((function(e){return e-1}))}),[z]),O=t.useCallback((function(){return z((function(e){return e+1}))}),[z]),M=t.useCallback((function(e){P({type:l.setPageSize,pageSize:e});}),[P]);Object.assign(e,{pageOptions:G,pageCount:F,page:k,canPreviousPage:H,canNextPage:T,gotoPage:z,previousPage:W,nextPage:O,setPageSize:M});}Ze.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var nt=function(e){e.getPivotToggleProps=[rt],e.stateReducers.push(it),e.useInstanceAfterData.push(ut),e.allColumns.push(lt),e.accessValue.push(st),e.materializedColumns.push(at),e.materializedColumnsDeps.push(ct),e.visibleColumns.push(dt),e.visibleColumnsDeps.push(ft),e.useInstance.push(pt),e.prepareRow.push(gt);};nt.pluginName="usePivotColumns";var ot=[],rt=function(e,t){var n=t.header;return [e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot();}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function it(e,t,n,o){if(t.type===l.init)return r({pivotColumns:ot},e);if(t.type===l.resetPivot)return r({},e,{pivotColumns:o.initialState.pivotColumns||ot});if(t.type===l.togglePivot){var i=t.columnId,u=t.value,s=void 0!==u?u:!e.pivotColumns.includes(i);return r({},e,s?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==i}))})}}function ut(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id);}));}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set;})),e}function st(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function at(e,t){var n=t.instance,o=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var u=i.pivotColumns.map((function(e){return o.find((function(t){return t.id===e}))})).filter(Boolean),l=o.filter((function(e){return !e.isPivotSource&&!i.groupBy.includes(e.id)&&!i.pivotColumns.includes(e.id)})),s=C(function e(t,n,o){void 0===t&&(t=0),void 0===o&&(o=[]);var i=u[t];return i?Array.from(i.uniqueValues).sort().map((function(u){var l=r({},i,{Header:i.PivotHeader||"string"==typeof i.header?i.Header+": "+u:u,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+i.id+"."+u:i.id+"."+u,pivotValue:u});return l.columns=e(t+1,l,[].concat(o,[function(e){return e.values[i.id]===u}])),l})):l.map((function(e){return r({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,r){if(o.every((function(e){return e(r)})))return r.values[e.id]}})}))}());return [].concat(e,s)}function ct(e,t){var n=t.instance.state,o=n.pivotColumns,r=n.groupBy;return [].concat(e,[o,r])}function dt(e,t){var n=t.instance.state;return e=e.filter((function(e){return !e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return [].concat(e,[n.state.pivotColumns,n.state.groupBy])}function pt(e){var t=e.columns,n=e.allColumns,o=e.flatHeaders,r=e.getHooks,i=e.plugins,u=e.dispatch,s=e.autoResetPivot,a=void 0===s||s,c=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;v(i,["useGroupBy"],"usePivotColumns");var g=h(e);n.forEach((function(t){var n=t.accessor,o=t.defaultPivot,r=t.disablePivot;t.canPivot=n?I(t.canPivot,!0!==r&&void 0,!0!==d&&void 0,!0):I(t.canPivot,o,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell;}));o.forEach((function(e){e.getPivotToggleProps=f(r().getPivotToggleProps,{instance:g(),header:e});}));var m=h(a);w((function(){m()&&u({type:l.resetPivot});}),[u,c?null:t]),Object.assign(e,{togglePivot:function(e,t){u({type:l.togglePivot,columnId:e,value:t});}});}function gt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted;}));}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var vt=function(e){e.getToggleRowSelectedProps=[mt],e.getToggleAllRowsSelectedProps=[ht],e.getToggleAllPageRowsSelectedProps=[yt],e.stateReducers.push(wt),e.useInstance.push(Rt),e.prepareRow.push(bt);};vt.pluginName="useRowSelect";var mt=function(e,t){var n=t.instance,o=t.row,r=n.manualRowSelectedKey,i=void 0===r?"isSelected":r;return [e,{onChange:function(e){o.toggleRowSelected(e.target.checked);},style:{cursor:"pointer"},checked:!(!o.original||!o.original[i])||o.isSelected,title:"Toggle Row Selected",indeterminate:o.isSomeSelected}]},ht=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked);},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},yt=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked);},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function wt(e,t,n,o){if(t.type===l.init)return r({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return r({},e,{selectedRowIds:o.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var i=t.value,u=o.isAllRowsSelected,s=o.rowsById,a=o.nonGroupedRowsById,c=void 0===a?s:a,d=void 0!==i?i:!u,f=Object.assign({},e.selectedRowIds);return d?Object.keys(c).forEach((function(e){f[e]=!0;})):Object.keys(c).forEach((function(e){delete f[e];})),r({},e,{selectedRowIds:f})}if(t.type===l.toggleRowSelected){var p=t.id,g=t.value,v=o.rowsById,m=o.selectSubRows,h=void 0===m||m,y=o.getSubRows,w=e.selectedRowIds[p],R=void 0!==g?g:!w;if(w===R)return e;var b=r({},e.selectedRowIds);return function e(t){var n=v[t];if(n.isGrouped||(R?b[t]=!0:delete b[t]),h&&y(n))return y(n).forEach((function(t){return e(t.id)}))}(p),r({},e,{selectedRowIds:b})}if(t.type===l.toggleAllPageRowsSelected){var S=t.value,C=o.page,x=o.rowsById,P=o.selectSubRows,B=void 0===P||P,E=o.isAllPageRowsSelected,I=o.getSubRows,F=void 0!==S?S:!E,G=r({},e.selectedRowIds);return C.forEach((function(e){return function e(t){var n=x[t];if(n.isGrouped||(F?G[t]=!0:delete G[t]),B&&I(n))return I(n).forEach((function(t){return e(t.id)}))}(e.id)})),r({},e,{selectedRowIds:G})}return e}function Rt(e){var n=e.data,o=e.rows,r=e.getHooks,i=e.plugins,u=e.rowsById,s=e.nonGroupedRowsById,a=void 0===s?u:s,c=e.autoResetSelectedRows,d=void 0===c||c,p=e.state.selectedRowIds,g=e.selectSubRows,m=void 0===g||g,y=e.dispatch,R=e.page,b=e.getSubRows;v(i,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var S=t.useMemo((function(){var e=[];return o.forEach((function(t){var n=m?function e(t,n,o){if(n[t.id])return !0;var r=o(t);if(r&&r.length){var i=!0,u=!1;return r.forEach((function(t){u&&!i||(e(t,n,o)?u=!0:i=!1);})),!!i||!!u&&null}return !1}(t,p,b):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t);})),e}),[o,m,p,b]),C=Boolean(Object.keys(a).length&&Object.keys(p).length),x=C;C&&Object.keys(a).some((function(e){return !p[e]}))&&(C=!1),C||R&&R.length&&R.some((function(e){var t=e.id;return !p[t]}))&&(x=!1);var P=h(d);w((function(){P()&&y({type:l.resetSelectedRows});}),[y,n]);var B=t.useCallback((function(e){return y({type:l.toggleAllRowsSelected,value:e})}),[y]),E=t.useCallback((function(e){return y({type:l.toggleAllPageRowsSelected,value:e})}),[y]),I=t.useCallback((function(e,t){return y({type:l.toggleRowSelected,id:e,value:t})}),[y]),F=h(e),G=f(r().getToggleAllRowsSelectedProps,{instance:F()}),A=f(r().getToggleAllPageRowsSelectedProps,{instance:F()});Object.assign(e,{selectedFlatRows:S,isAllRowsSelected:C,isAllPageRowsSelected:x,toggleRowSelected:I,toggleAllRowsSelected:B,getToggleAllRowsSelectedProps:G,getToggleAllPageRowsSelectedProps:A,toggleAllPageRowsSelected:E});}function bt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e});}var St=function(e){return {}},Ct=function(e){return {}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var xt=function(e){e.stateReducers.push(Pt),e.useInstance.push(Bt),e.prepareRow.push(Et);};function Pt(e,t,n,o){var i=o.initialRowStateAccessor,u=void 0===i?St:i,s=o.initialCellStateAccessor,a=void 0===s?Ct:s,c=o.rowsById;if(t.type===l.init)return r({rowState:{}},e);if(t.type===l.resetRowState)return r({},e,{rowState:o.initialState.rowState||{}});if(t.type===l.setRowState){var d,f=t.rowId,p=t.value,g=void 0!==e.rowState[f]?e.rowState[f]:u(c[f]);return r({},e,{rowState:r({},e.rowState,(d={},d[f]=m(p,g),d))})}if(t.type===l.setCellState){var v,h,y,w,R,b=t.rowId,S=t.columnId,C=t.value,x=void 0!==e.rowState[b]?e.rowState[b]:u(c[b]),P=void 0!==(null==x?void 0:null==(v=x.cellState)?void 0:v[S])?x.cellState[S]:a(null==(h=c[b])?void 0:null==(y=h.cells)?void 0:y.find((function(e){return e.column.id===S})));return r({},e,{rowState:r({},e.rowState,(R={},R[b]=r({},x,{cellState:r({},x.cellState||{},(w={},w[S]=m(C,P),w))}),R))})}}function Bt(e){var n=e.autoResetRowState,o=void 0===n||n,r=e.data,i=e.dispatch,u=t.useCallback((function(e,t){return i({type:l.setRowState,rowId:e,value:t})}),[i]),s=t.useCallback((function(e,t,n){return i({type:l.setCellState,rowId:e,columnId:t,value:n})}),[i]),a=h(o);w((function(){a()&&i({type:l.resetRowState});}),[r]),Object.assign(e,{setRowState:u,setCellState:s});}function Et(e,t){var n=t.instance,o=n.initialRowStateAccessor,r=void 0===o?St:o,i=n.initialCellStateAccessor,u=void 0===i?Ct:i,l=n.state.rowState;e&&(e.state=void 0!==l[e.id]?l[e.id]:r(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:u(t),t.setState=function(o){return n.setCellState(e.id,t.column.id,o)};})));}xt.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var It=function(e){e.stateReducers.push(Ft),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Gt),e.useInstance.push(At);};function Ft(e,t,n,o){return t.type===l.init?r({columnOrder:[]},e):t.type===l.resetColumnOrder?r({},e,{columnOrder:o.initialState.columnOrder||[]}):t.type===l.setColumnOrder?r({},e,{columnOrder:m(t.columnOrder,e.columnOrder)}):void 0}function Gt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var o=[].concat(n),r=[].concat(e),i=[],u=function(){var e=o.shift(),t=r.findIndex((function(t){return t.id===e}));t>-1&&i.push(r.splice(t,1)[0]);};r.length&&o.length;)u();return [].concat(i,r)}function At(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n]);}It.pluginName="useColumnOrder",c.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var kt=function(e){e.getResizerProps=[Ht],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Tt),e.useInstance.push(Wt),e.useInstanceBeforeDimensions.push(zt);},Ht=function(e,t){var n=t.instance,o=t.header,r=n.dispatch,i=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0;}var o=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e);t.push(n);}(e),t}(t).map((function(e){return [e.id,e.totalWidth]})),i=n?Math.round(e.touches[0].clientX):e.clientX,u=function(e){r({type:l.columnResizing,clientX:e});},s=function(){return r({type:l.columnDoneResizing})},a={mouse:{moveEvent:"mousemove",moveHandler:function(e){return u(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",a.mouse.moveHandler),document.removeEventListener("mouseup",a.mouse.upHandler),s();}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),u(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(a.touch.moveEvent,a.touch.moveHandler),document.removeEventListener(a.touch.upEvent,a.touch.moveHandler),s();}}},c=n?a.touch:a.mouse,d=!!function(){if("boolean"==typeof z)return z;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t);}catch(t){e=!1;}return z=e}()&&{passive:!1};document.addEventListener(c.moveEvent,c.moveHandler,d),document.addEventListener(c.upEvent,c.upHandler,d),r({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:o,clientX:i});};return [e,{onMouseDown:function(e){return e.persist()||i(e,o)},onTouchStart:function(e){return e.persist()||i(e,o)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Tt(e,t){if(t.type===l.init)return r({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return r({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,o=t.columnId,i=t.columnWidth,u=t.headerIdWidths;return r({},e,{columnResizing:r({},e.columnResizing,{startX:n,headerIdWidths:u,columnWidth:i,isResizingColumn:o})})}if(t.type===l.columnResizing){var s=t.clientX,a=e.columnResizing,c=a.startX,d=a.columnWidth,f=a.headerIdWidths,p=(s-c)/d,g={};return (void 0===f?[]:f).forEach((function(e){var t=e[0],n=e[1];g[t]=Math.max(n+n*p,0);})),r({},e,{columnResizing:r({},e.columnResizing,{columnWidths:r({},e.columnResizing.columnWidths,{},g)})})}return t.type===l.columnDoneResizing?r({},e,{columnResizing:r({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}kt.pluginName="useResizeColumns";var zt=function(e){var t=e.flatHeaders,n=e.disableResizing,o=e.getHooks,r=e.state.columnResizing,i=h(e);t.forEach((function(e){var t=I(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=r.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=r.isResizingColumn===e.id,t&&(e.getResizerProps=f(o().getResizerProps,{instance:i(),header:e}));}));};function Wt(e){var n=e.plugins,o=e.dispatch,r=e.autoResetResize,i=void 0===r||r,u=e.columns;v(n,["useAbsoluteLayout"],"useResizeColumns");var s=h(i);w((function(){s()&&o({type:l.resetResize});}),[u]);var a=t.useCallback((function(){return o({type:l.resetResize})}),[o]);Object.assign(e,{resetResizing:a});}var Ot={position:"absolute",top:0},Mt=function(e){e.getTableBodyProps.push(jt),e.getRowProps.push(jt),e.getHeaderGroupProps.push(jt),e.getFooterGroupProps.push(jt),e.getHeaderProps.push((function(e,t){var n=t.column;return [e,{style:r({},Ot,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return [e,{style:r({},Ot,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return [e,{style:r({},Ot,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}));};Mt.pluginName="useAbsoluteLayout";var jt=function(e,t){return [e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Nt={display:"inline-block",boxSizing:"border-box"},Dt=function(e,t){return [e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Lt=function(e){e.getRowProps.push(Dt),e.getHeaderGroupProps.push(Dt),e.getFooterGroupProps.push(Dt),e.getHeaderProps.push((function(e,t){var n=t.column;return [e,{style:r({},Nt,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return [e,{style:r({},Nt,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return [e,{style:r({},Nt,{width:n.totalWidth+"px"})}]}));};function Vt(e){e.getTableProps.push(_t),e.getRowProps.push(Xt),e.getHeaderGroupProps.push(Xt),e.getFooterGroupProps.push(Xt),e.getHeaderProps.push(qt),e.getCellProps.push(Kt),e.getFooterProps.push(Ut);}Lt.pluginName="useBlockLayout",Vt.pluginName="useFlexLayout";var _t=function(e,t){return [e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Xt=function(e,t){return [e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},qt=function(e,t){var n=t.column;return [e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Kt=function(e,t){var n=t.cell;return [e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Ut=function(e,t){var n=t.column;return [e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function $t(e){e.stateReducers.push(Qt),e.getTableProps.push(Jt),e.getHeaderProps.push(Yt);}$t.pluginName="useGridLayout";var Jt=function(e,t){return [e,{style:{display:"grid",gridTemplateColumns:t.instance.state.gridLayout.columnWidths.map((function(e){return e})).join(" ")}}]},Yt=function(e,t){return [e,{id:"header-cell-"+t.column.id,style:{position:"sticky"}}]};function Qt(e,t,n,o){if("init"===t.type)return r({gridLayout:{columnWidths:o.columns.map((function(){return "auto"}))}},e);if("columnStartResizing"===t.type){var i=t.columnId,u=o.visibleColumns.findIndex((function(e){return e.id===i})),l=function(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}(i);return void 0!==l?r({},e,{gridLayout:r({},e.gridLayout,{columnId:i,columnIndex:u,startingWidth:l})}):e}if("columnResizing"===t.type){var s=e.gridLayout,a=s.columnIndex,c=s.startingWidth,d=s.columnWidths,f=c-(e.columnResizing.startX-t.clientX),p=[].concat(d);return p[a]=f+"px",r({},e,{gridLayout:r({},e.gridLayout,{columnWidths:p})})}}e._UNSTABLE_usePivotColumns=nt,e.actions=l,e.defaultColumn=c,e.defaultGroupByFn=Le,e.defaultOrderByFn=Qe,e.defaultRenderer=s,e.emptyRenderer=a,e.ensurePluginOrder=v,e.flexRender=b,e.functionalUpdate=m,e.loopHooks=g,e.makePropGetter=f,e.makeRenderer=R,e.reduceHooks=p,e.safeUseLayoutEffect=y,e.useAbsoluteLayout=Mt,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var r=t.useRef({}),i=h(e),u=h(n);return t.useCallback(function(){var e=o(regeneratorRuntime.mark((function e(){var t,n,l,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=s.length,n=new Array(t),l=0;l<t;l++)n[l]=s[l];return r.current.promise||(r.current.promise=new Promise((function(e,t){r.current.resolve=e,r.current.reject=t;}))),r.current.timeout&&clearTimeout(r.current.timeout),r.current.timeout=setTimeout(o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete r.current.timeout,e.prev=1,e.t0=r.current,e.next=5,i().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),r.current.reject(e.t2);case 12:return e.prev=12,delete r.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),u()),e.abrupt("return",r.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[i,u])},e.useBlockLayout=Lt,e.useColumnOrder=It,e.useExpanded=se,e.useFilters=Pe,e.useFlexLayout=Vt,e.useGetLatest=h,e.useGlobalFilter=Ie,e.useGridLayout=$t,e.useGroupBy=ze,e.useMountedLayoutEffect=w,e.usePagination=Ze,e.useResizeColumns=kt,e.useRowSelect=vt,e.useRowState=xt,e.useSortBy=Ue,e.useTable=function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];e=ie(e),o=[K].concat(o);var u=t.useRef({}),s=h(u.current);Object.assign(s(),r({},e,{plugins:o,hooks:q()})),o.filter(Boolean).forEach((function(e){e(s().hooks);}));var a=h(s().hooks);s().getHooks=a,delete s().hooks,Object.assign(s(),p(a().useOptions,ie(e)));var c=s(),d=c.data,v=c.columns,m=c.initialState,y=c.defaultColumn,w=c.getSubRows,b=c.getRowId,E=c.stateReducer,I=c.useControlledState,F=h(E),G=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action 👆");return [].concat(a().stateReducers,Array.isArray(F())?F():[F()]).reduce((function(n,o){return o(n,t,e,s())||n}),e)}),[a,F,s]),A=t.useReducer(G,void 0,(function(){return G(m,{type:l.init})})),k=A[0],H=A[1],T=p([].concat(a().useControlledState,[I]),k,{instance:s()});Object.assign(s(),{state:T,dispatch:H});var z=t.useMemo((function(){return S(p(a().columns,v,{instance:s()}))}),[a,s,v].concat(p(a().columnsDeps,[],{instance:s()})));s().columns=z;var W=t.useMemo((function(){return p(a().allColumns,C(z),{instance:s()}).map(x)}),[z,a,s].concat(p(a().allColumnsDeps,[],{instance:s()})));s().allColumns=W;var O=t.useMemo((function(){for(var e=[],t=[],n={},o=[].concat(W);o.length;){var r=o.shift();le({data:d,rows:e,flatRows:t,rowsById:n,column:r,getRowId:b,getSubRows:w,accessValueHooks:a().accessValue,getInstance:s});}return [e,t,n]}),[W,d,b,w,a,s]),M=O[0],j=O[1],N=O[2];Object.assign(s(),{rows:M,initialRows:[].concat(M),flatRows:j,rowsById:N}),g(a().useInstanceAfterData,s());var D=t.useMemo((function(){return p(a().visibleColumns,W,{instance:s()}).map((function(e){return P(e,y)}))}),[a,W,s,y].concat(p(a().visibleColumnsDeps,[],{instance:s()})));W=t.useMemo((function(){var e=[].concat(D);return W.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t);})),e}),[W,D]),s().allColumns=W;var L=t.useMemo((function(){return p(a().headerGroups,B(D,y),s())}),[a,D,y,s].concat(p(a().headerGroupsDeps,[],{instance:s()})));s().headerGroups=L;var V=t.useMemo((function(){return L.length?L[0].headers:[]}),[L]);s().headers=V,s().flatHeaders=L.reduce((function(e,t){return [].concat(e,t.headers)}),[]),g(a().useInstanceBeforeDimensions,s());var _=D.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");D=t.useMemo((function(){return D.filter((function(e){return e.isVisible}))}),[D,_]),s().visibleColumns=D;var X=ue(V),U=X[0],$=X[1],J=X[2];return s().totalColumnsMinWidth=U,s().totalColumnsWidth=$,s().totalColumnsMaxWidth=J,g(a().useInstance,s()),[].concat(s().flatHeaders,s().allColumns).forEach((function(e){e.render=R(s(),e),e.getHeaderProps=f(a().getHeaderProps,{instance:s(),column:e}),e.getFooterProps=f(a().getFooterProps,{instance:s(),column:e});})),s().headerGroups=t.useMemo((function(){return L.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(a().getHeaderGroupProps,{instance:s(),headerGroup:e,index:t}),e.getFooterGroupProps=f(a().getFooterGroupProps,{instance:s(),headerGroup:e,index:t}),!0)}))}),[L,s,a]),s().footerGroups=[].concat(s().headerGroups).reverse(),s().prepareRow=t.useCallback((function(e){e.getRowProps=f(a().getRowProps,{instance:s(),row:e}),e.allCells=W.map((function(t){var n=e.values[t.id],o={column:t,row:e,value:n};return o.getCellProps=f(a().getCellProps,{instance:s(),cell:o}),o.render=R(s(),t,{row:e,cell:o,value:n}),o})),e.cells=D.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),g(a().prepareRow,e,{instance:s()});}),[a,s,W,D]),s().getTableProps=f(a().getTableProps,{instance:s()}),s().getTableBodyProps=f(a().getTableBodyProps,{instance:s()}),g(a().useFinalInstance,s()),s()},Object.defineProperty(e,"__esModule",{value:!0});}));

});

var reactTable = createCommonjsModule(function (module) {
{
  module.exports = reactTable_production_min;
}
});

var asctime = function (duration) {
    var milliseconds = parseInt("" + (duration % 1000) / 100, 10), seconds = Math.floor((duration / 1000) % 60), minutes = Math.floor((duration / (1000 * 60)) % 60), hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var hours_ = hours < 10 ? '0' + hours : hours;
    var minutes_ = minutes < 10 ? '0' + minutes : minutes;
    var seconds_ = seconds < 10 ? '0' + seconds : seconds;
    return hours_ + ':' + minutes_ + ':' + seconds_ + '.' + milliseconds;
};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = toggleSelection();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

var Component = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(react);

var _copyToClipboard = _interopRequireDefault(copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
          _this$props2.text;
          _this$props2.onCopy;
          _this$props2.options;
          var children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});
});

var CopyToClipboard = Component.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;

// THIS FILE IS AUTO GENERATED
function HiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
}function HiClipboardCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"}}]})(props);
}

var Clippy = function (_a) {
    var value = _a.value, children = _a.children;
    var _b = react.useState(false), mouseOver = _b[0], setMouseOver = _b[1];
    var _c = react.useState(false), copied = _c[0], setCopied = _c[1];
    return (react.createElement("span", { onMouseOver: function () {
            if (!mouseOver) {
                setMouseOver(true);
            }
        }, onMouseLeave: function () {
            setMouseOver(false);
            setCopied(false);
        }, style: { display: 'flex', alignItems: 'center' } },
        children,
        mouseOver ? (react.createElement(lib, { text: value, onCopy: function () { return setCopied(true); } },
            react.createElement("a", { href: "#", onClick: function (e) {
                    e.preventDefault();
                }, style: { fontSize: '120%', paddingLeft: '0.2em' } }, copied ? (react.createElement(HiCheck, { style: { color: 'green', display: 'flex' } })) : (react.createElement(HiClipboardCopy, { style: { display: 'flex' } }))))) : (react.createElement("span", { style: { fontSize: '120%', width: '1.2em' } }))));
};

var AuditLogTable = function (_a) {
    var activities = _a.activities, decisions = _a.decisions;
    var columns = react.useMemo(function () { return [
        {
            Header: 'Activity Name',
            accessor: 'activityName',
            Cell: function (_a) {
                var value = _a.value;
                var baseUrl = (window.location.href.split('#')[0] + "/")
                    .replace(/\/+$/, '/')
                    .replace(/\/app\/tasklist\//, '/app/cockpit/');
                if (value.activityType === 'businessRuleTask' && decisions.has(value.id)) {
                    return react.createElement("a", { href: baseUrl + "#/decision-instance/" + decisions.get(value.id) }, value.activityName);
                }
                else if (value.activityType === 'callActivity' && value.calledProcessInstanceId && value.endTime) {
                    return (react.createElement("a", { href: baseUrl + "#/history/process-instance/" + value.calledProcessInstanceId }, value.activityName));
                }
                else if (value.activityType === 'callActivity' && value.calledProcessInstanceId) {
                    return (react.createElement("a", { href: baseUrl + "#/process-instance/" + value.calledProcessInstanceId + "/runtime" }, value.activityName));
                }
                return react.createElement(Clippy, { value: value.activityName }, value.activityName);
            },
        },
        {
            Header: 'Start Date',
            accessor: 'startDate',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'End Date',
            accessor: 'endDate',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Duration',
            accessor: 'duration',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Type',
            accessor: 'type',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'User',
            accessor: 'assignee',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Canceled',
            accessor: 'canceled',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
    ]; }, [activities, decisions]);
    var data = react.useMemo(function () {
        return activities.map(function (activity) {
            return {
                activityName: activity,
                startDate: activity.startTime.split('.')[0],
                endDate: activity.endTime ? activity.endTime.split('.')[0] : '',
                duration: activity.endTime
                    ? asctime(new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime())
                    : '',
                type: activity.activityType,
                assignee: activity.assignee,
                canceled: activity.canceled ? 'true' : 'false',
            };
        });
    }, [activities, decisions]);
    var tableInstance = reactTable.useTable({ columns: columns, data: data }, reactTable.useSortBy);
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, rows = tableInstance.rows, prepareRow = tableInstance.prepareRow;
    return (react.createElement("table", __assign({ className: "cam-table" }, getTableProps()),
        react.createElement("thead", null, headerGroups.map(function (headerGroup) { return (react.createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (
        /* @ts-ignore */
        react.createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render('Header'),
            react.createElement("span", { style: { position: 'absolute', fontSize: '125%' } }, 
            /* @ts-ignore */
            column.isSorted ? (
            /* @ts-ignore */
            column.isSortedDesc ? (react.createElement(GoChevronDown, { style: { color: '#155cb5' } })) : (react.createElement(GoChevronUp, { style: { color: '#155cb5' } }))) : (react.createElement(TiMinus, { style: { color: '#155cb5' } }))))); }))); })),
        react.createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
            prepareRow(row);
            return (react.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                return react.createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
};

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
});

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$5.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends$5.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}

var index_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    flatten: flatten,
    find: find,
    findIndex: findIndex,
    filter: filter,
    forEach: forEach,
    without: without,
    reduce: reduce,
    every: every,
    some: some,
    map: map,
    keys: keys,
    size: size,
    values: values,
    groupBy: groupBy,
    uniqueBy: uniqueBy,
    unionBy: unionBy,
    sortBy: sortBy,
    matchPattern: matchPattern,
    debounce: debounce,
    throttle: throttle,
    bind: bind,
    isUndefined: isUndefined,
    isDefined: isDefined,
    isNil: isNil,
    isArray: isArray,
    isObject: isObject,
    isNumber: isNumber,
    isFunction: isFunction,
    isString: isString,
    ensureArray: ensureArray,
    has: has,
    assign: assign,
    pick: pick,
    omit: omit,
    merge: merge
});

var DEFAULT_RENDER_PRIORITY = 1000;

/**
 * The base implementation of shape and connection renderers.
 *
 * @param {EventBus} eventBus
 * @param {number} [renderPriority=1000]
 */
function BaseRenderer(eventBus, renderPriority) {
  var self = this;

  renderPriority = renderPriority || DEFAULT_RENDER_PRIORITY;

  eventBus.on([ 'render.shape', 'render.connection' ], renderPriority, function(evt, context) {
    var type = evt.type,
        element = context.element,
        visuals = context.gfx;

    if (self.canRender(element)) {
      if (type === 'render.shape') {
        return self.drawShape(visuals, element);
      } else {
        return self.drawConnection(visuals, element);
      }
    }
  });

  eventBus.on([ 'render.getShapePath', 'render.getConnectionPath'], renderPriority, function(evt, element) {
    if (self.canRender(element)) {
      if (evt.type === 'render.getShapePath') {
        return self.getShapePath(element);
      } else {
        return self.getConnectionPath(element);
      }
    }
  });
}

/**
 * Should check whether *this* renderer can render
 * the element/connection.
 *
 * @param {element} element
 *
 * @returns {boolean}
 */
BaseRenderer.prototype.canRender = function() {};

/**
 * Provides the shape's snap svg element to be drawn on the `canvas`.
 *
 * @param {djs.Graphics} visuals
 * @param {Shape} shape
 *
 * @returns {Snap.svg} [returns a Snap.svg paper element ]
 */
BaseRenderer.prototype.drawShape = function() {};

/**
 * Provides the shape's snap svg element to be drawn on the `canvas`.
 *
 * @param {djs.Graphics} visuals
 * @param {Connection} connection
 *
 * @returns {Snap.svg} [returns a Snap.svg paper element ]
 */
BaseRenderer.prototype.drawConnection = function() {};

/**
 * Gets the SVG path of a shape that represents it's visual bounds.
 *
 * @param {Shape} shape
 *
 * @return {string} svg path
 */
BaseRenderer.prototype.getShapePath = function() {};

/**
 * Gets the SVG path of a connection that represents it's visual bounds.
 *
 * @param {Connection} connection
 *
 * @return {string} svg path
 */
BaseRenderer.prototype.getConnectionPath = function() {};

/**
 * Is an element of the given BPMN type?
 *
 * @param  {djs.model.Base|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return the business object for a given element.
 *
 * @param  {djs.model.Base|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

function isExpanded(element) {

  if (is(element, 'bpmn:CallActivity')) {
    return false;
  }

  if (is(element, 'bpmn:SubProcess')) {
    return getBusinessObject(element).di && !!getBusinessObject(element).di.isExpanded;
  }

  if (is(element, 'bpmn:Participant')) {
    return !!getBusinessObject(element).processRef;
  }

  return true;
}

function isEventSubProcess(element) {
  return element && !!getBusinessObject(element).triggeredByEvent;
}

function getLabelAttr(semantic) {
  if (
    is(semantic, 'bpmn:FlowElement') ||
    is(semantic, 'bpmn:Participant') ||
    is(semantic, 'bpmn:Lane') ||
    is(semantic, 'bpmn:SequenceFlow') ||
    is(semantic, 'bpmn:MessageFlow') ||
    is(semantic, 'bpmn:DataInput') ||
    is(semantic, 'bpmn:DataOutput')
  ) {
    return 'name';
  }

  if (is(semantic, 'bpmn:TextAnnotation')) {
    return 'text';
  }

  if (is(semantic, 'bpmn:Group')) {
    return 'categoryValueRef';
  }
}

function getCategoryValue(semantic) {
  var categoryValueRef = semantic['categoryValueRef'];

  if (!categoryValueRef) {
    return '';
  }


  return categoryValueRef.value || '';
}

function getLabel(element) {
  var semantic = element.businessObject,
      attr = getLabelAttr(semantic);

  if (attr) {

    if (attr === 'categoryValueRef') {

      return getCategoryValue(semantic);
    }

    return semantic[attr] || '';
  }
}

function ensureImported(element, target) {

  if (element.ownerDocument !== target.ownerDocument) {
    try {
      // may fail on webkit
      return target.ownerDocument.importNode(element, true);
    } catch (e) {
      // ignore
    }
  }

  return element;
}

/**
 * appendTo utility
 */

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}

/**
 * append utility
 */

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
function append(target, node) {
  appendTo(node, target);
  return target;
}

/**
 * attribute accessor utility
 */

var LENGTH_ATTR = 2;

var CSS_PROPERTIES = {
  'alignment-baseline': 1,
  'baseline-shift': 1,
  'clip': 1,
  'clip-path': 1,
  'clip-rule': 1,
  'color': 1,
  'color-interpolation': 1,
  'color-interpolation-filters': 1,
  'color-profile': 1,
  'color-rendering': 1,
  'cursor': 1,
  'direction': 1,
  'display': 1,
  'dominant-baseline': 1,
  'enable-background': 1,
  'fill': 1,
  'fill-opacity': 1,
  'fill-rule': 1,
  'filter': 1,
  'flood-color': 1,
  'flood-opacity': 1,
  'font': 1,
  'font-family': 1,
  'font-size': LENGTH_ATTR,
  'font-size-adjust': 1,
  'font-stretch': 1,
  'font-style': 1,
  'font-variant': 1,
  'font-weight': 1,
  'glyph-orientation-horizontal': 1,
  'glyph-orientation-vertical': 1,
  'image-rendering': 1,
  'kerning': 1,
  'letter-spacing': 1,
  'lighting-color': 1,
  'marker': 1,
  'marker-end': 1,
  'marker-mid': 1,
  'marker-start': 1,
  'mask': 1,
  'opacity': 1,
  'overflow': 1,
  'pointer-events': 1,
  'shape-rendering': 1,
  'stop-color': 1,
  'stop-opacity': 1,
  'stroke': 1,
  'stroke-dasharray': 1,
  'stroke-dashoffset': 1,
  'stroke-linecap': 1,
  'stroke-linejoin': 1,
  'stroke-miterlimit': 1,
  'stroke-opacity': 1,
  'stroke-width': LENGTH_ATTR,
  'text-anchor': 1,
  'text-decoration': 1,
  'text-rendering': 1,
  'unicode-bidi': 1,
  'visibility': 1,
  'word-spacing': 1,
  'writing-mode': 1
};


function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  var type = CSS_PROPERTIES[hyphenated];

  if (type) {
    // append pixel unit, unless present
    if (type === LENGTH_ATTR && typeof value === 'number') {
      value = String(value) + 'px';
    }

    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name;

  for (i = 0, name; (name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets raw attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
function attr(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
}

/**
 * Clear utility
 */
function index(arr, obj) {
  if (arr.indexOf) {
    return arr.indexOf(obj);
  }


  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
}

var re$1 = /\s+/;

var toString = Object.prototype.toString;

function defined(o) {
  return typeof o !== 'undefined';
}

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {

  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) {
    arr.push(name);
  }

  if (defined(this.el.className.baseVal)) {
    this.el.className.baseVal = arr.join(' ');
  } else {
    this.el.className = arr.join(' ');
  }

  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' === toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) {
    arr.splice(i, 1);
  }
  this.el.className.baseVal = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  // classList
  if (this.list) {
    if (defined(force)) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if (defined(force)) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re$1);
  if ('' === arr[0]) {
    arr.shift();
  }
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return (
    this.list ?
      this.list.contains(name) :
      !! ~index(this.array(), name)
  );
};

function remove(element) {
  var parent = element.parentNode;

  if (parent) {
    parent.removeChild(element);
  }

  return element;
}

/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}

var ns = {
  svg: 'http://www.w3.org/2000/svg'
};

/**
 * DOM parsing utility
 */

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function parse(svg) {

  var unwrap = false;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {
    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
    unwrap = true;
  }

  var parsed = parseDocument(svg);

  if (!unwrap) {
    return parsed;
  }

  var fragment = document.createDocumentFragment();

  var parent = parsed.firstChild;

  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }

  return fragment;
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}

/**
 * Create utility for SVG elements
 */


/**
 * Create a specific type from name or SVG markup.
 *
 * @param {String} name the name or markup of the element
 * @param {Object} [attrs] attributes to set on the element
 *
 * @returns {SVGElement}
 */
function create(name, attrs) {
  var element;

  if (name.charAt(0) === '<') {
    element = parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }

  if (attrs) {
    attr(element, attrs);
  }

  return element;
}

/**
 * Geometry helpers
 */

// fake node used to instantiate svg geometry elements
var node = create('svg');

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; (k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}

/**
 * Create matrix via args.
 *
 * @example
 *
 * createMatrix({ a: 1, b: 1 });
 * createMatrix();
 * createMatrix(1, 2, 0, 0, 30, 20);
 *
 * @return {SVGMatrix}
 */
function createMatrix(a, b, c, d, e, f) {
  var matrix = node.createSVGMatrix();

  switch (arguments.length) {
  case 0:
    return matrix;
  case 1:
    return extend(matrix, a);
  case 6:
    return extend(matrix, {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    });
  }
}

function createTransform(matrix) {
  if (matrix) {
    return node.createSVGTransformFromMatrix(matrix);
  } else {
    return node.createSVGTransform();
  }
}

/**
 * Serialization util
 */

var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;

var ENTITY_REPLACEMENT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '\''
};

function escape(str, pattern) {

  function replaceFn(match, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }

  return str.replace(pattern, replaceFn);
}

function serialize(node, output) {

  var i, len, attrMap, attrNode, childNodes;

  switch (node.nodeType) {
  // TEXT
  case 3:
    // replace special XML characters
    output.push(escape(node.textContent, TEXT_ENTITIES));
    break;

  // ELEMENT
  case 1:
    output.push('<', node.tagName);

    if (node.hasAttributes()) {
      attrMap = node.attributes;
      for (i = 0, len = attrMap.length; i < len; ++i) {
        attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '="', escape(attrNode.value, ATTR_ENTITIES), '"');
      }
    }

    if (node.hasChildNodes()) {
      output.push('>');
      childNodes = node.childNodes;
      for (i = 0, len = childNodes.length; i < len; ++i) {
        serialize(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
    break;

  // COMMENT
  case 8:
    output.push('<!--', escape(node.nodeValue, TEXT_ENTITIES), '-->');
    break;

  // CDATA
  case 4:
    output.push('<![CDATA[', node.nodeValue, ']]>');
    break;

  default:
    throw new Error('unable to handle node ' + node.nodeType);
  }

  return output;
}

/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */


function set(element, svg) {

  var parsed = parse(svg);

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  if (!isFragment(parsed)) {
    // extract <svg> from parsed document
    parsed = parsed.documentElement;
  }

  var nodes = slice(parsed.childNodes);

  // import + append each node
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }

}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function isFragment(node) {
  return node.nodeName === '#document-fragment';
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}


function slice(arr) {
  return Array.prototype.slice.call(arr);
}

/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  }

  return transform;
}


function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}

/**
 * Get or set the transforms on the given node.
 *
 * @param {SVGElement} node
 * @param  {SVGTransform|SVGMatrix|Array<SVGTransform|SVGMatrix>} [transforms]
 *
 * @return {SVGTransform} the consolidated transform
 */
function transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (transforms) {

    if (!Array.isArray(transforms)) {
      transforms = [ transforms ];
    }

    setTransforms(transformList, transforms);
  }

  return transformList.consolidate();
}

function componentsToPath(elements) {
  return elements.join(',').replace(/,?([A-z]),?/g, '$1');
}

function toSVGPoints(points) {
  var result = '';

  for (var i = 0, p; (p = points[i]); i++) {
    result += p.x + ',' + p.y + ' ';
  }

  return result;
}

function createLine(points, attrs) {

  var line = create('polyline');
  attr(line, { points: toSVGPoints(points) });

  if (attrs) {
    attr(line, attrs);
  }

  return line;
}

function updateLine(gfx, points) {
  attr(gfx, { points: toSVGPoints(points) });

  return gfx;
}

// element utils //////////////////////

/**
 * Checks if eventDefinition of the given element matches with semantic type.
 *
 * @return {boolean} true if element is of the given semantic type
 */
function isTypedEvent(event, eventDefinitionType, filter) {

  function matches(definition, filter) {
    return every(filter, function(val, key) {

      // we want a == conversion here, to be able to catch
      // undefined == false and friends
      /* jshint -W116 */
      return definition[key] == val;
    });
  }

  return some(event.eventDefinitions, function(definition) {
    return definition.$type === eventDefinitionType && matches(event, filter);
  });
}

function isThrowEvent(event) {
  return (event.$type === 'bpmn:IntermediateThrowEvent') || (event.$type === 'bpmn:EndEvent');
}

function isCollection(element) {
  var dataObject = element.dataObjectRef;

  return element.isCollection || (dataObject && dataObject.isCollection);
}

function getDi(element) {
  return element.businessObject.di;
}

function getSemantic(element) {
  return element.businessObject;
}


// color access //////////////////////

function getFillColor(element, defaultColor) {
  return getDi(element).get('bioc:fill') || defaultColor || 'white';
}

function getStrokeColor(element, defaultColor) {
  return getDi(element).get('bioc:stroke') || defaultColor || 'black';
}


// cropping path customizations //////////////////////

function getCirclePath(shape) {

  var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;

  var circlePath = [
    ['M', cx, cy],
    ['m', 0, -radius],
    ['a', radius, radius, 0, 1, 1, 0, 2 * radius],
    ['a', radius, radius, 0, 1, 1, 0, -2 * radius],
    ['z']
  ];

  return componentsToPath(circlePath);
}

function getRoundRectPath(shape, borderRadius) {

  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var roundRectPath = [
    ['M', x + borderRadius, y],
    ['l', width - borderRadius * 2, 0],
    ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius],
    ['l', 0, height - borderRadius * 2],
    ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius],
    ['l', borderRadius * 2 - width, 0],
    ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius],
    ['l', 0, borderRadius * 2 - height],
    ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius],
    ['z']
  ];

  return componentsToPath(roundRectPath);
}

function getDiamondPath(shape) {

  var width = shape.width,
      height = shape.height,
      x = shape.x,
      y = shape.y,
      halfWidth = width / 2,
      halfHeight = height / 2;

  var diamondPath = [
    ['M', x + halfWidth, y],
    ['l', halfWidth, halfHeight],
    ['l', -halfWidth, halfHeight],
    ['l', -halfWidth, -halfHeight],
    ['z']
  ];

  return componentsToPath(diamondPath);
}

function getRectPath(shape) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var rectPath = [
    ['M', x, y],
    ['l', width, 0],
    ['l', 0, height],
    ['l', -width, 0],
    ['z']
  ];

  return componentsToPath(rectPath);
}

/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr$1(el, name, val) {
  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * Whitespace regexp.
 */

var re$2 = /\s+/;

/**
 * toString reference.
 */

var toString$1 = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes$1(el) {
  return new ClassList$1(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList$1(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList$1.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList$1.prototype.remove = function (name) {
  if ('[object RegExp]' == toString$1.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList$1.prototype.removeMatching = function (re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList$1.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ('undefined' !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ('undefined' !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList$1.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re$2);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList$1.prototype.has = ClassList$1.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~indexof(this.array(), name);
};

/**
 * Remove all children from the given element.
 */
function clear$1(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest (element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE && currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matchesSelector(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matchesSelector(currentElem, selector) ? currentElem : null;
}

var bind$1 = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind$1 !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = function(el, type, fn, capture){
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};

var componentEvent = {
	bind: bind_1,
	unbind: unbind_1
};

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

function bind$1$1(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.bind(el, type, function (e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind$1(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.unbind(el, type, fn, capture);
}

var delegate = {
  bind: bind$1$1,
  unbind: unbind$1
};

/**
 * Expose `parse`.
 */

var domify = parse$1;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map$1 = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map$1.td =
map$1.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map$1.option =
map$1.optgroup = [1, '<select multiple="multiple">', '</select>'];

map$1.thead =
map$1.tbody =
map$1.colgroup =
map$1.caption =
map$1.tfoot = [1, '<table>', '</table>'];

map$1.polyline =
map$1.ellipse =
map$1.polygon =
map$1.circle =
map$1.text =
map$1.line =
map$1.path =
map$1.rect =
map$1.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse$1(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map$1[tag] || map$1._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove$1(el) {
  el.parentNode && el.parentNode.removeChild(el);
}

/**
 * @param {<SVGElement>} element
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 * @param {number} amount
 */
function transform$1(gfx, x, y, angle, amount) {
  var translate = createTransform();
  translate.setTranslate(x, y);

  var rotate = createTransform();
  rotate.setRotate(angle || 0, 0, 0);

  var scale = createTransform();
  scale.setScale(amount || 1, amount || 1);

  transform(gfx, [ translate, rotate, scale ]);
}


/**
 * @param {SVGElement} element
 * @param {number} x
 * @param {number} y
 */
function translate(gfx, x, y) {
  var translate = createTransform();
  translate.setTranslate(x, y);

  transform(gfx, translate);
}


/**
 * @param {SVGElement} element
 * @param {number} angle
 */
function rotate(gfx, angle) {
  var rotate = createTransform();
  rotate.setRotate(angle, 0, 0);

  transform(gfx, rotate);
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hat_1 = createCommonjsModule$1(function (module) {
var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};
});

/**
 * Create a new id generator / cache instance.
 *
 * You may optionally provide a seed that is used internally.
 *
 * @param {Seed} seed
 */

function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }

  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
/**
 * Generate a next id.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */

Ids.prototype.next = function (element) {
  return this._seed(element || true);
};
/**
 * Generate a next id with a given prefix.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */


Ids.prototype.nextPrefixed = function (prefix, element) {
  var id;

  do {
    id = prefix + this.next(true);
  } while (this.assigned(id)); // claim {prefix}{random}


  this.claim(id, element); // return

  return id;
};
/**
 * Manually claim an existing id.
 *
 * @param {String} id
 * @param {String} [element] element the id is claimed by
 */


Ids.prototype.claim = function (id, element) {
  this._seed.set(id, element || true);
};
/**
 * Returns true if the given id has already been assigned.
 *
 * @param  {String} id
 * @return {Boolean}
 */


Ids.prototype.assigned = function (id) {
  return this._seed.get(id) || false;
};
/**
 * Unclaim an id.
 *
 * @param  {String} id the id to unclaim
 */


Ids.prototype.unclaim = function (id) {
  delete this._seed.hats[id];
};
/**
 * Clear all claimed ids.
 */


Ids.prototype.clear = function () {
  var hats = this._seed.hats,
      id;

  for (id in hats) {
    this.unclaim(id);
  }
};

var RENDERER_IDS = new Ids();

var TASK_BORDER_RADIUS = 10;
var INNER_OUTER_DIST = 3;

var DEFAULT_FILL_OPACITY = .95,
    HIGH_FILL_OPACITY = .35;


function BpmnRenderer(
    config, eventBus, styles, pathMap,
    canvas, textRenderer, priority) {

  BaseRenderer.call(this, eventBus, priority);

  var defaultFillColor = config && config.defaultFillColor,
      defaultStrokeColor = config && config.defaultStrokeColor;

  var rendererId = RENDERER_IDS.next();

  var markers = {};

  var computeStyle = styles.computeStyle;

  function addMarker(id, options) {
    var attrs = assign({
      fill: 'black',
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeDasharray: 'none'
    }, options.attrs);

    var ref = options.ref || { x: 0, y: 0 };

    var scale = options.scale || 1;

    // fix for safari / chrome / firefox bug not correctly
    // resetting stroke dash array
    if (attrs.strokeDasharray === 'none') {
      attrs.strokeDasharray = [10000, 1];
    }

    var marker = create('marker');

    attr(options.element, attrs);

    append(marker, options.element);

    attr(marker, {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto'
    });

    var defs = query('defs', canvas._svg);

    if (!defs) {
      defs = create('defs');

      append(canvas._svg, defs);
    }

    append(defs, marker);

    markers[id] = marker;
  }

  function colorEscape(str) {

    // only allow characters and numbers
    return str.replace(/[^0-9a-zA-z]+/g, '_');
  }

  function marker(type, fill, stroke) {
    var id = type + '-' + colorEscape(fill) + '-' + colorEscape(stroke) + '-' + rendererId;

    if (!markers[id]) {
      createMarker(id, type, fill, stroke);
    }

    return 'url(#' + id + ')';
  }

  function createMarker(id, type, fill, stroke) {

    if (type === 'sequenceflow-end') {
      var sequenceflowEnd = create('path');
      attr(sequenceflowEnd, { d: 'M 1 5 L 11 10 L 1 15 Z' });

      addMarker(id, {
        element: sequenceflowEnd,
        ref: { x: 11, y: 10 },
        scale: 0.5,
        attrs: {
          fill: stroke,
          stroke: stroke
        }
      });
    }

    if (type === 'messageflow-start') {
      var messageflowStart = create('circle');
      attr(messageflowStart, { cx: 6, cy: 6, r: 3.5 });

      addMarker(id, {
        element: messageflowStart,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: { x: 6, y: 6 }
      });
    }

    if (type === 'messageflow-end') {
      var messageflowEnd = create('path');
      attr(messageflowEnd, { d: 'm 1 5 l 0 -3 l 7 3 l -7 3 z' });

      addMarker(id, {
        element: messageflowEnd,
        attrs: {
          fill: fill,
          stroke: stroke,
          strokeLinecap: 'butt'
        },
        ref: { x: 8.5, y: 5 }
      });
    }

    if (type === 'association-start') {
      var associationStart = create('path');
      attr(associationStart, { d: 'M 11 5 L 1 10 L 11 15' });

      addMarker(id, {
        element: associationStart,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: { x: 1, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'association-end') {
      var associationEnd = create('path');
      attr(associationEnd, { d: 'M 1 5 L 11 10 L 1 15' });

      addMarker(id, {
        element: associationEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: { x: 12, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'conditional-flow-marker') {
      var conditionalflowMarker = create('path');
      attr(conditionalflowMarker, { d: 'M 0 10 L 8 6 L 16 10 L 8 14 Z' });

      addMarker(id, {
        element: conditionalflowMarker,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: { x: -1, y: 10 },
        scale: 0.5
      });
    }

    if (type === 'conditional-default-flow-marker') {
      var conditionaldefaultflowMarker = create('path');
      attr(conditionaldefaultflowMarker, { d: 'M 6 4 L 10 16' });

      addMarker(id, {
        element: conditionaldefaultflowMarker,
        attrs: {
          stroke: stroke
        },
        ref: { x: 0, y: 10 },
        scale: 0.5
      });
    }
  }

  function drawCircle(parentGfx, width, height, offset, attrs) {

    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });

    if (attrs.fill === 'none') {
      delete attrs.fillOpacity;
    }

    var cx = width / 2,
        cy = height / 2;

    var circle = create('circle');
    attr(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4 - offset)
    });
    attr(circle, attrs);

    append(parentGfx, circle);

    return circle;
  }

  function drawRect(parentGfx, width, height, r, offset, attrs) {

    if (isObject(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;

    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });

    var rect = create('rect');
    attr(rect, {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r
    });
    attr(rect, attrs);

    append(parentGfx, rect);

    return rect;
  }

  function drawDiamond(parentGfx, width, height, attrs) {

    var x_2 = width / 2;
    var y_2 = height / 2;

    var points = [{ x: x_2, y: 0 }, { x: width, y: y_2 }, { x: x_2, y: height }, { x: 0, y: y_2 }];

    var pointsString = points.map(function(point) {
      return point.x + ',' + point.y;
    }).join(' ');

    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });

    var polygon = create('polygon');
    attr(polygon, {
      points: pointsString
    });
    attr(polygon, attrs);

    append(parentGfx, polygon);

    return polygon;
  }

  function drawLine(parentGfx, waypoints, attrs) {
    attrs = computeStyle(attrs, [ 'no-fill' ], {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'none'
    });

    var line = createLine(waypoints, attrs);

    append(parentGfx, line);

    return line;
  }

  function drawPath(parentGfx, d, attrs) {

    attrs = computeStyle(attrs, [ 'no-fill' ], {
      strokeWidth: 2,
      stroke: 'black'
    });

    var path = create('path');
    attr(path, { d: d });
    attr(path, attrs);

    append(parentGfx, path);

    return path;
  }

  function drawMarker(type, parentGfx, path, attrs) {
    return drawPath(parentGfx, path, assign({ 'data-marker': type }, attrs));
  }

  function as(type) {
    return function(parentGfx, element) {
      return handlers[type](parentGfx, element);
    };
  }

  function renderer(type) {
    return handlers[type];
  }

  function renderEventContent(element, parentGfx) {

    var event = getSemantic(element);
    var isThrowing = isThrowEvent(event);

    if (event.eventDefinitions && event.eventDefinitions.length>1) {
      if (event.parallelMultiple) {
        return renderer('bpmn:ParallelMultipleEventDefinition')(parentGfx, element, isThrowing);
      }
      else {
        return renderer('bpmn:MultipleEventDefinition')(parentGfx, element, isThrowing);
      }
    }

    if (isTypedEvent(event, 'bpmn:MessageEventDefinition')) {
      return renderer('bpmn:MessageEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:TimerEventDefinition')) {
      return renderer('bpmn:TimerEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:ConditionalEventDefinition')) {
      return renderer('bpmn:ConditionalEventDefinition')(parentGfx, element);
    }

    if (isTypedEvent(event, 'bpmn:SignalEventDefinition')) {
      return renderer('bpmn:SignalEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:EscalationEventDefinition')) {
      return renderer('bpmn:EscalationEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:LinkEventDefinition')) {
      return renderer('bpmn:LinkEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:ErrorEventDefinition')) {
      return renderer('bpmn:ErrorEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:CancelEventDefinition')) {
      return renderer('bpmn:CancelEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:CompensateEventDefinition')) {
      return renderer('bpmn:CompensateEventDefinition')(parentGfx, element, isThrowing);
    }

    if (isTypedEvent(event, 'bpmn:TerminateEventDefinition')) {
      return renderer('bpmn:TerminateEventDefinition')(parentGfx, element, isThrowing);
    }

    return null;
  }

  function renderLabel(parentGfx, label, options) {

    options = assign({
      size: {
        width: 100
      }
    }, options);

    var text = textRenderer.createText(label || '', options);

    classes(text).add('djs-label');

    append(parentGfx, text);

    return text;
  }

  function renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = getSemantic(element);

    return renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: getStrokeColor(element, defaultStrokeColor)
      }
    });
  }

  function renderExternalLabel(parentGfx, element) {

    var box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y
    };

    return renderLabel(parentGfx, getLabel(element), {
      box: box,
      fitBox: true,
      style: assign(
        {},
        textRenderer.getExternalStyle(),
        {
          fill: getStrokeColor(element, defaultStrokeColor)
        }
      )
    });
  }

  function renderLaneLabel(parentGfx, text, element) {
    var textBox = renderLabel(parentGfx, text, {
      box: {
        height: 30,
        width: element.height
      },
      align: 'center-middle',
      style: {
        fill: getStrokeColor(element, defaultStrokeColor)
      }
    });

    var top = -1 * element.height;

    transform$1(textBox, 0, -top, 270);
  }

  function createPathFromConnection(connection) {
    var waypoints = connection.waypoints;

    var pathData = 'm  ' + waypoints[0].x + ',' + waypoints[0].y;
    for (var i = 1; i < waypoints.length; i++) {
      pathData += 'L' + waypoints[i].x + ',' + waypoints[i].y + ' ';
    }
    return pathData;
  }

  var handlers = this.handlers = {
    'bpmn:Event': function(parentGfx, element, attrs) {

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawCircle(parentGfx, element.width, element.height, attrs);
    },
    'bpmn:StartEvent': function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      var semantic = getSemantic(element);

      if (!semantic.isInterrupting) {
        attrs = {
          strokeDasharray: '6',
          strokeLinecap: 'round',
          fill: getFillColor(element, defaultFillColor),
          stroke: getStrokeColor(element, defaultStrokeColor)
        };
      }

      var circle = renderer('bpmn:Event')(parentGfx, element, attrs);

      renderEventContent(element, parentGfx);

      return circle;
    },
    'bpmn:MessageEventDefinition': function(parentGfx, element, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MESSAGE', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.235,
          my: 0.315
        }
      });

      var fill = isThrowing ? getStrokeColor(element, defaultStrokeColor) : getFillColor(element, defaultFillColor);
      var stroke = isThrowing ? getFillColor(element, defaultFillColor) : getStrokeColor(element, defaultStrokeColor);

      var messagePath = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: stroke
      });

      return messagePath;
    },
    'bpmn:TimerEventDefinition': function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 0.2 * element.height, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var pathData = pathMap.getScaledPath('EVENT_TIMER_WH', {
        xScaleFactor: 0.75,
        yScaleFactor: 0.75,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.5,
          my: 0.5
        }
      });

      drawPath(parentGfx, pathData, {
        strokeWidth: 2,
        strokeLinecap: 'square',
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      for (var i = 0;i < 12; i++) {

        var linePathData = pathMap.getScaledPath('EVENT_TIMER_LINE', {
          xScaleFactor: 0.75,
          yScaleFactor: 0.75,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.5,
            my: 0.5
          }
        });

        var width = element.width / 2;
        var height = element.height / 2;

        drawPath(parentGfx, linePathData, {
          strokeWidth: 1,
          strokeLinecap: 'square',
          transform: 'rotate(' + (i * 30) + ',' + height + ',' + width + ')',
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
      }

      return circle;
    },
    'bpmn:EscalationEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ESCALATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:ConditionalEventDefinition': function(parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_CONDITIONAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.222
        }
      });

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:LinkEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_LINK', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.57,
          my: 0.263
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:ErrorEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ERROR', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.2,
          my: 0.722
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:CancelEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_CANCEL_45', {
        xScaleFactor: 1.0,
        yScaleFactor: 1.0,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.638,
          my: -0.055
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      var path = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });

      rotate(path, 45);

      return path;
    },
    'bpmn:CompensateEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.22,
          my: 0.5
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:SignalEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_SIGNAL', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:MultipleEventDefinition': function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MULTIPLE', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.222,
          my: 0.36
        }
      });

      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : 'none';

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill
      });
    },
    'bpmn:ParallelMultipleEventDefinition': function(parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_PARALLEL_MULTIPLE', {
        xScaleFactor: 1.2,
        yScaleFactor: 1.2,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.458,
          my: 0.194
        }
      });

      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(event, defaultStrokeColor),
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    'bpmn:EndEvent': function(parentGfx, element) {
      var circle = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 4,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      renderEventContent(element, parentGfx);

      return circle;
    },
    'bpmn:TerminateEventDefinition': function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 8, {
        strokeWidth: 4,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return circle;
    },
    'bpmn:IntermediateEvent': function(parentGfx, element) {
      var outer = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      /* inner */
      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, {
        strokeWidth: 1,
        fill: getFillColor(element, 'none'),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      renderEventContent(element, parentGfx);

      return outer;
    },
    'bpmn:IntermediateCatchEvent': as('bpmn:IntermediateEvent'),
    'bpmn:IntermediateThrowEvent': as('bpmn:IntermediateEvent'),

    'bpmn:Activity': function(parentGfx, element, attrs) {

      attrs = attrs || {};

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, attrs);
    },

    'bpmn:Task': function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);

      renderEmbeddedLabel(parentGfx, element, 'center-middle');
      attachTaskMarkers(parentGfx, element);

      return rect;
    },
    'bpmn:ServiceTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathDataBG = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 12,
          y: 18
        }
      });

      /* service bg */ drawPath(parentGfx, pathDataBG, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var fillPathData = pathMap.getScaledPath('TASK_TYPE_SERVICE_FILL', {
        abspos: {
          x: 17.2,
          y: 18
        }
      });

      /* service fill */ drawPath(parentGfx, fillPathData, {
        strokeWidth: 0,
        fill: getFillColor(element, defaultFillColor)
      });

      var pathData = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 17,
          y: 22
        }
      });

      /* service */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:UserTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var x = 15;
      var y = 12;

      var pathData = pathMap.getScaledPath('TASK_TYPE_USER_1', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user path */ drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var pathData2 = pathMap.getScaledPath('TASK_TYPE_USER_2', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user2 path */ drawPath(parentGfx, pathData2, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var pathData3 = pathMap.getScaledPath('TASK_TYPE_USER_3', {
        abspos: {
          x: x,
          y: y
        }
      });

      /* user3 path */ drawPath(parentGfx, pathData3, {
        strokeWidth: 0.5,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:ManualTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_MANUAL', {
        abspos: {
          x: 17,
          y: 15
        }
      });

      /* manual path */ drawPath(parentGfx, pathData, {
        strokeWidth: 0.5, // 0.25,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:SendTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: 21,
        containerHeight: 14,
        position: {
          mx: 0.285,
          my: 0.357
        }
      });

      /* send path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getFillColor(element, defaultFillColor)
      });

      return task;
    },
    'bpmn:ReceiveTask' : function(parentGfx, element) {
      var semantic = getSemantic(element);

      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData;

      if (semantic.instantiate) {
        drawCircle(parentGfx, 28, 28, 20 * 0.22, { strokeWidth: 1 });

        pathData = pathMap.getScaledPath('TASK_TYPE_INSTANTIATING_SEND', {
          abspos: {
            x: 7.77,
            y: 9.52
          }
        });
      } else {

        pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: 21,
          containerHeight: 14,
          position: {
            mx: 0.3,
            my: 0.4
          }
        });
      }

      /* receive path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:ScriptTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var pathData = pathMap.getScaledPath('TASK_TYPE_SCRIPT', {
        abspos: {
          x: 15,
          y: 20
        }
      });

      /* script path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:BusinessRuleTask': function(parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);

      var headerPathData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_HEADER', {
        abspos: {
          x: 8,
          y: 8
        }
      });

      var businessHeaderPath = drawPath(parentGfx, headerPathData);
      attr(businessHeaderPath, {
        strokeWidth: 1,
        fill: getFillColor(element, '#aaaaaa'),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var headerData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_MAIN', {
        abspos: {
          x: 8,
          y: 8
        }
      });

      var businessPath = drawPath(parentGfx, headerData);
      attr(businessPath, {
        strokeWidth: 1,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return task;
    },
    'bpmn:SubProcess': function(parentGfx, element, attrs) {
      attrs = assign({
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs);

      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);

      var expanded = isExpanded(element);

      if (isEventSubProcess(element)) {
        attr(rect, {
          strokeDasharray: '1,2'
        });
      }

      renderEmbeddedLabel(parentGfx, element, expanded ? 'center-top' : 'center-middle');

      if (expanded) {
        attachTaskMarkers(parentGfx, element);
      } else {
        attachTaskMarkers(parentGfx, element, ['SubProcessMarker']);
      }

      return rect;
    },
    'bpmn:AdHocSubProcess': function(parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element);
    },
    'bpmn:Transaction': function(parentGfx, element) {
      var outer = renderer('bpmn:SubProcess')(parentGfx, element);

      var innerAttrs = styles.style([ 'no-fill', 'no-events' ], {
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      /* inner path */ drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS - 2, INNER_OUTER_DIST, innerAttrs);

      return outer;
    },
    'bpmn:CallActivity': function(parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element, {
        strokeWidth: 5
      });
    },
    'bpmn:Participant': function(parentGfx, element) {

      var attrs = {
        fillOpacity: DEFAULT_FILL_OPACITY,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      var lane = renderer('bpmn:Lane')(parentGfx, element, attrs);

      var expandedPool = isExpanded(element);

      if (expandedPool) {
        drawLine(parentGfx, [
          { x: 30, y: 0 },
          { x: 30, y: element.height }
        ], {
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
        var text = getSemantic(element).name;
        renderLaneLabel(parentGfx, text, element);
      } else {

        // Collapsed pool draw text inline
        var text2 = getSemantic(element).name;
        renderLabel(parentGfx, text2, {
          box: element, align: 'center-middle',
          style: {
            fill: getStrokeColor(element, defaultStrokeColor)
          }
        });
      }

      var participantMultiplicity = !!(getSemantic(element).participantMultiplicity);

      if (participantMultiplicity) {
        renderer('ParticipantMultiplicityMarker')(parentGfx, element);
      }

      return lane;
    },
    'bpmn:Lane': function(parentGfx, element, attrs) {
      var rect = drawRect(parentGfx, element.width, element.height, 0, assign({
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: HIGH_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs));

      var semantic = getSemantic(element);

      if (semantic.$type === 'bpmn:Lane') {
        var text = semantic.name;
        renderLaneLabel(parentGfx, text, element);
      }

      return rect;
    },
    'bpmn:InclusiveGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      /* circle path */
      drawCircle(parentGfx, element.width, element.height, element.height * 0.24, {
        strokeWidth: 2.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:ExclusiveGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_EXCLUSIVE', {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.32,
          my: 0.3
        }
      });

      if ((getDi(element).isMarkerVisible)) {
        drawPath(parentGfx, pathData, {
          strokeWidth: 1,
          fill: getStrokeColor(element, defaultStrokeColor),
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
      }

      return diamond;
    },
    'bpmn:ComplexGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_COMPLEX', {
        xScaleFactor: 0.5,
        yScaleFactor:0.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.26
        }
      });

      /* complex path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:ParallelGateway': function(parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
        xScaleFactor: 0.6,
        yScaleFactor:0.6,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.2
        }
      });

      /* parallel path */ drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return diamond;
    },
    'bpmn:EventBasedGateway': function(parentGfx, element) {

      var semantic = getSemantic(element);

      var diamond = renderer('bpmn:Gateway')(parentGfx, element);

      /* outer circle path */ drawCircle(parentGfx, element.width, element.height, element.height * 0.20, {
        strokeWidth: 1,
        fill: 'none',
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var type = semantic.eventGatewayType;
      var instantiate = !!semantic.instantiate;

      function drawEvent() {

        var pathData = pathMap.getScaledPath('GATEWAY_EVENT_BASED', {
          xScaleFactor: 0.18,
          yScaleFactor: 0.18,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.36,
            my: 0.44
          }
        });

        var attrs = {
          strokeWidth: 2,
          fill: getFillColor(element, 'none'),
          stroke: getStrokeColor(element, defaultStrokeColor)
        };

        /* event path */ drawPath(parentGfx, pathData, attrs);
      }

      if (type === 'Parallel') {

        var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
          xScaleFactor: 0.4,
          yScaleFactor:0.4,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.474,
            my: 0.296
          }
        });

        var parallelPath = drawPath(parentGfx, pathData);
        attr(parallelPath, {
          strokeWidth: 1,
          fill: 'none'
        });
      } else if (type === 'Exclusive') {

        if (!instantiate) {
          var innerCircle = drawCircle(parentGfx, element.width, element.height, element.height * 0.26);
          attr(innerCircle, {
            strokeWidth: 1,
            fill: 'none',
            stroke: getStrokeColor(element, defaultStrokeColor)
          });
        }

        drawEvent();
      }


      return diamond;
    },
    'bpmn:Gateway': function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      return drawDiamond(parentGfx, element.width, element.height, attrs);
    },
    'bpmn:SequenceFlow': function(parentGfx, element) {
      var pathData = createPathFromConnection(element);

      var fill = getFillColor(element, defaultFillColor),
          stroke = getStrokeColor(element, defaultStrokeColor);

      var attrs = {
        strokeLinejoin: 'round',
        markerEnd: marker('sequenceflow-end', fill, stroke),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      var path = drawPath(parentGfx, pathData, attrs);

      var sequenceFlow = getSemantic(element);

      var source;

      if (element.source) {
        source = element.source.businessObject;

        // conditional flow marker
        if (sequenceFlow.conditionExpression && source.$instanceOf('bpmn:Activity')) {
          attr(path, {
            markerStart: marker('conditional-flow-marker', fill, stroke)
          });
        }

        // default marker
        if (source.default && (source.$instanceOf('bpmn:Gateway') || source.$instanceOf('bpmn:Activity')) &&
            source.default === sequenceFlow) {
          attr(path, {
            markerStart: marker('conditional-default-flow-marker', fill, stroke)
          });
        }
      }

      return path;
    },
    'bpmn:Association': function(parentGfx, element, attrs) {

      var semantic = getSemantic(element);

      var fill = getFillColor(element, defaultFillColor),
          stroke = getStrokeColor(element, defaultStrokeColor);

      attrs = assign({
        strokeDasharray: '0.5, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs || {});

      if (semantic.associationDirection === 'One' ||
          semantic.associationDirection === 'Both') {
        attrs.markerEnd = marker('association-end', fill, stroke);
      }

      if (semantic.associationDirection === 'Both') {
        attrs.markerStart = marker('association-start', fill, stroke);
      }

      return drawLine(parentGfx, element.waypoints, attrs);
    },
    'bpmn:DataInputAssociation': function(parentGfx, element) {
      var fill = getFillColor(element, defaultFillColor),
          stroke = getStrokeColor(element, defaultStrokeColor);

      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:DataOutputAssociation': function(parentGfx, element) {
      var fill = getFillColor(element, defaultFillColor),
          stroke = getStrokeColor(element, defaultStrokeColor);

      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:MessageFlow': function(parentGfx, element) {

      var semantic = getSemantic(element),
          di = getDi(element);

      var fill = getFillColor(element, defaultFillColor),
          stroke = getStrokeColor(element, defaultStrokeColor);

      var pathData = createPathFromConnection(element);

      var attrs = {
        markerEnd: marker('messageflow-end', fill, stroke),
        markerStart: marker('messageflow-start', fill, stroke),
        strokeDasharray: '10, 12',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.5px',
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      var path = drawPath(parentGfx, pathData, attrs);

      if (semantic.messageRef) {
        var midPoint = path.getPointAtLength(path.getTotalLength() / 2);

        var markerPathData = pathMap.getScaledPath('MESSAGE_FLOW_MARKER', {
          abspos: {
            x: midPoint.x,
            y: midPoint.y
          }
        });

        var messageAttrs = { strokeWidth: 1 };

        if (di.messageVisibleKind === 'initiating') {
          messageAttrs.fill = 'white';
          messageAttrs.stroke = 'black';
        } else {
          messageAttrs.fill = '#888';
          messageAttrs.stroke = 'white';
        }

        drawPath(parentGfx, markerPathData, messageAttrs);
      }

      return path;
    },
    'bpmn:DataObject': function(parentGfx, element) {
      var pathData = pathMap.getScaledPath('DATA_OBJECT_PATH', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.474,
          my: 0.296
        }
      });

      var elementObject = drawPath(parentGfx, pathData, {
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var semantic = getSemantic(element);

      if (isCollection(semantic)) {
        renderDataItemCollection(parentGfx, element);
      }

      return elementObject;
    },
    'bpmn:DataObjectReference': as('bpmn:DataObject'),
    'bpmn:DataInput': function(parentGfx, element) {

      var arrowPathData = pathMap.getRawPath('DATA_ARROW');

      // page
      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);

      /* input arrow path */ drawPath(parentGfx, arrowPathData, { strokeWidth: 1 });

      return elementObject;
    },
    'bpmn:DataOutput': function(parentGfx, element) {
      var arrowPathData = pathMap.getRawPath('DATA_ARROW');

      // page
      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);

      /* output arrow path */ drawPath(parentGfx, arrowPathData, {
        strokeWidth: 1,
        fill: 'black'
      });

      return elementObject;
    },
    'bpmn:DataStoreReference': function(parentGfx, element) {
      var DATA_STORE_PATH = pathMap.getScaledPath('DATA_STORE', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0,
          my: 0.133
        }
      });

      var elementStore = drawPath(parentGfx, DATA_STORE_PATH, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      return elementStore;
    },
    'bpmn:BoundaryEvent': function(parentGfx, element) {

      var semantic = getSemantic(element),
          cancel = semantic.cancelActivity;

      var attrs = {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };

      if (!cancel) {
        attrs.strokeDasharray = '6';
        attrs.strokeLinecap = 'round';
      }

      // apply fillOpacity
      var outerAttrs = assign({}, attrs, {
        fillOpacity: 1
      });

      // apply no-fill
      var innerAttrs = assign({}, attrs, {
        fill: 'none'
      });

      var outer = renderer('bpmn:Event')(parentGfx, element, outerAttrs);

      /* inner path */ drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, innerAttrs);

      renderEventContent(element, parentGfx);

      return outer;
    },
    'bpmn:Group': function(parentGfx, element) {

      var group = drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, {
        stroke: getStrokeColor(element, defaultStrokeColor),
        strokeWidth: 1,
        strokeDasharray: '8,3,1,3',
        fill: 'none',
        pointerEvents: 'none'
      });

      return group;
    },
    'label': function(parentGfx, element) {
      return renderExternalLabel(parentGfx, element);
    },
    'bpmn:TextAnnotation': function(parentGfx, element) {
      var style = {
        'fill': 'none',
        'stroke': 'none'
      };

      var textElement = drawRect(parentGfx, element.width, element.height, 0, 0, style);

      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });

      drawPath(parentGfx, textPathData, {
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      var text = getSemantic(element).text || '';
      renderLabel(parentGfx, text, {
        box: element,
        align: 'left-top',
        padding: 5,
        style: {
          fill: getStrokeColor(element, defaultStrokeColor)
        }
      });

      return textElement;
    },
    'ParticipantMultiplicityMarker': function(parentGfx, element) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2) / element.width),
          my: (element.height - 15) / element.height
        }
      });

      drawMarker('participant-multiplicity', parentGfx, markerPath, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'SubProcessMarker': function(parentGfx, element) {
      var markerRect = drawRect(parentGfx, 14, 14, 0, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });

      // Process marker is placed in the middle of the box
      // therefore fixed values can be used here
      translate(markerRect, element.width / 2 - 7.5, element.height - 20);

      var markerPath = pathMap.getScaledPath('MARKER_SUB_PROCESS', {
        xScaleFactor: 1.5,
        yScaleFactor: 1.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 - 7.5) / element.width,
          my: (element.height - 20) / element.height
        }
      });

      drawMarker('sub-process', parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'ParallelMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.parallel) / element.width),
          my: (element.height - 20) / element.height
        }
      });

      drawMarker('parallel', parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'SequentialMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_SEQUENTIAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.seq) / element.width),
          my: (element.height - 19) / element.height
        }
      });

      drawMarker('sequential', parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'CompensationMarker': function(parentGfx, element, position) {
      var markerMath = pathMap.getScaledPath('MARKER_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.compensation) / element.width),
          my: (element.height - 13) / element.height
        }
      });

      drawMarker('compensation', parentGfx, markerMath, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    'LoopMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_LOOP', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.loop) / element.width),
          my: (element.height - 7) / element.height
        }
      });

      drawMarker('loop', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor),
        strokeLinecap: 'round',
        strokeMiterlimit: 0.5
      });
    },
    'AdhocMarker': function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_ADHOC', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: ((element.width / 2 + position.adhoc) / element.width),
          my: (element.height - 15) / element.height
        }
      });

      drawMarker('adhoc', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    }
  };

  function attachTaskMarkers(parentGfx, element, taskMarkers) {
    var obj = getSemantic(element);

    var subprocess = taskMarkers && taskMarkers.indexOf('SubProcessMarker') !== -1;
    var position;

    if (subprocess) {
      position = {
        seq: -21,
        parallel: -22,
        compensation: -42,
        loop: -18,
        adhoc: 10
      };
    } else {
      position = {
        seq: -3,
        parallel: -6,
        compensation: -27,
        loop: 0,
        adhoc: 10
      };
    }

    forEach(taskMarkers, function(marker) {
      renderer(marker)(parentGfx, element, position);
    });

    if (obj.isForCompensation) {
      renderer('CompensationMarker')(parentGfx, element, position);
    }

    if (obj.$type === 'bpmn:AdHocSubProcess') {
      renderer('AdhocMarker')(parentGfx, element, position);
    }

    var loopCharacteristics = obj.loopCharacteristics,
        isSequential = loopCharacteristics && loopCharacteristics.isSequential;

    if (loopCharacteristics) {

      if (isSequential === undefined) {
        renderer('LoopMarker')(parentGfx, element, position);
      }

      if (isSequential === false) {
        renderer('ParallelMarker')(parentGfx, element, position);
      }

      if (isSequential === true) {
        renderer('SequentialMarker')(parentGfx, element, position);
      }
    }
  }

  function renderDataItemCollection(parentGfx, element) {

    var yPosition = (element.height - 18) / element.height;

    var pathData = pathMap.getScaledPath('DATA_OBJECT_COLLECTION_PATH', {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.33,
        my: yPosition
      }
    });

    /* collection path */ drawPath(parentGfx, pathData, {
      strokeWidth: 2
    });
  }


  // extension API, use at your own risk
  this._drawPath = drawPath;

}


inherits_browser(BpmnRenderer, BaseRenderer);

BpmnRenderer.$inject = [
  'config.bpmnRenderer',
  'eventBus',
  'styles',
  'pathMap',
  'canvas',
  'textRenderer'
];


BpmnRenderer.prototype.canRender = function(element) {
  return is(element, 'bpmn:BaseElement');
};

BpmnRenderer.prototype.drawShape = function(parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];

  /* jshint -W040 */
  return h(parentGfx, element);
};

BpmnRenderer.prototype.drawConnection = function(parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];

  /* jshint -W040 */
  return h(parentGfx, element);
};

BpmnRenderer.prototype.getShapePath = function(element) {

  if (is(element, 'bpmn:Event')) {
    return getCirclePath(element);
  }

  if (is(element, 'bpmn:Activity')) {
    return getRoundRectPath(element, TASK_BORDER_RADIUS);
  }

  if (is(element, 'bpmn:Gateway')) {
    return getDiamondPath(element);
  }

  return getRectPath(element);
};

var DEFAULT_BOX_PADDING = 0;

var DEFAULT_LABEL_SIZE = {
  width: 150,
  height: 50
};


function parseAlign(align) {

  var parts = align.split('-');

  return {
    horizontal: parts[0] || 'center',
    vertical: parts[1] || 'top'
  };
}

function parsePadding(padding) {

  if (isObject(padding)) {
    return assign({ top: 0, left: 0, right: 0, bottom: 0 }, padding);
  } else {
    return {
      top: padding,
      left: padding,
      right: padding,
      bottom: padding
    };
  }
}

function getTextBBox(text, fakeText) {

  fakeText.textContent = text;

  var textBBox;

  try {
    var bbox,
        emptyLine = text === '';

    // add dummy text, when line is empty to
    // determine correct height
    fakeText.textContent = emptyLine ? 'dummy' : text;

    textBBox = fakeText.getBBox();

    // take text rendering related horizontal
    // padding into account
    bbox = {
      width: textBBox.width + textBBox.x * 2,
      height: textBBox.height
    };

    if (emptyLine) {

      // correct width
      bbox.width = 0;
    }

    return bbox;
  } catch (e) {
    return { width: 0, height: 0 };
  }
}


/**
 * Layout the next line and return the layouted element.
 *
 * Alters the lines passed.
 *
 * @param  {Array<string>} lines
 * @return {Object} the line descriptor, an object { width, height, text }
 */
function layoutNext(lines, maxWidth, fakeText) {

  var originalLine = lines.shift(),
      fitLine = originalLine;

  var textBBox;

  for (;;) {
    textBBox = getTextBBox(fitLine, fakeText);

    textBBox.width = fitLine ? textBBox.width : 0;

    // try to fit
    if (fitLine === ' ' || fitLine === '' || textBBox.width < Math.round(maxWidth) || fitLine.length < 2) {
      return fit(lines, fitLine, originalLine, textBBox);
    }

    fitLine = shortenLine(fitLine, textBBox.width, maxWidth);
  }
}

function fit(lines, fitLine, originalLine, textBBox) {
  if (fitLine.length < originalLine.length) {
    var remainder = originalLine.slice(fitLine.length).trim();

    lines.unshift(remainder);
  }

  return {
    width: textBBox.width,
    height: textBBox.height,
    text: fitLine
  };
}

var SOFT_BREAK = '\u00AD';


/**
 * Shortens a line based on spacing and hyphens.
 * Returns the shortened result on success.
 *
 * @param  {string} line
 * @param  {number} maxLength the maximum characters of the string
 * @return {string} the shortened string
 */
function semanticShorten(line, maxLength) {

  var parts = line.split(/(\s|-|\u00AD)/g),
      part,
      shortenedParts = [],
      length = 0;

  // try to shorten via break chars
  if (parts.length > 1) {

    while ((part = parts.shift())) {
      if (part.length + length < maxLength) {
        shortenedParts.push(part);
        length += part.length;
      } else {

        // remove previous part, too if hyphen does not fit anymore
        if (part === '-' || part === SOFT_BREAK) {
          shortenedParts.pop();
        }

        break;
      }
    }
  }

  var last = shortenedParts[shortenedParts.length - 1];

  // translate trailing soft break to actual hyphen
  if (last && last === SOFT_BREAK) {
    shortenedParts[shortenedParts.length - 1] = '-';
  }

  return shortenedParts.join('');
}


function shortenLine(line, width, maxWidth) {
  var length = Math.max(line.length * (maxWidth / width), 1);

  // try to shorten semantically (i.e. based on spaces and hyphens)
  var shortenedLine = semanticShorten(line, length);

  if (!shortenedLine) {

    // force shorten by cutting the long word
    shortenedLine = line.slice(0, Math.max(Math.round(length - 1), 1));
  }

  return shortenedLine;
}


function getHelperSvg() {
  var helperSvg = document.getElementById('helper-svg');

  if (!helperSvg) {
    helperSvg = create('svg');

    attr(helperSvg, {
      id: 'helper-svg',
      width: 0,
      height: 0,
      style: 'visibility: hidden; position: fixed'
    });

    document.body.appendChild(helperSvg);
  }

  return helperSvg;
}


/**
 * Creates a new label utility
 *
 * @param {Object} config
 * @param {Dimensions} config.size
 * @param {number} config.padding
 * @param {Object} config.style
 * @param {string} config.align
 */
function Text(config) {

  this._config = assign({}, {
    size: DEFAULT_LABEL_SIZE,
    padding: DEFAULT_BOX_PADDING,
    style: {},
    align: 'center-top'
  }, config || {});
}

/**
 * Returns the layouted text as an SVG element.
 *
 * @param {string} text
 * @param {Object} options
 *
 * @return {SVGElement}
 */
Text.prototype.createText = function(text, options) {
  return this.layoutText(text, options).element;
};

/**
 * Returns a labels layouted dimensions.
 *
 * @param {string} text to layout
 * @param {Object} options
 *
 * @return {Dimensions}
 */
Text.prototype.getDimensions = function(text, options) {
  return this.layoutText(text, options).dimensions;
};

/**
 * Creates and returns a label and its bounding box.
 *
 * @method Text#createText
 *
 * @param {string} text the text to render on the label
 * @param {Object} options
 * @param {string} options.align how to align in the bounding box.
 *                               Any of { 'center-middle', 'center-top' },
 *                               defaults to 'center-top'.
 * @param {string} options.style style to be applied to the text
 * @param {boolean} options.fitBox indicates if box will be recalculated to
 *                                 fit text
 *
 * @return {Object} { element, dimensions }
 */
Text.prototype.layoutText = function(text, options) {
  var box = assign({}, this._config.size, options.box),
      style = assign({}, this._config.style, options.style),
      align = parseAlign(options.align || this._config.align),
      padding = parsePadding(options.padding !== undefined ? options.padding : this._config.padding),
      fitBox = options.fitBox || false;

  var lineHeight = getLineHeight(style);

  // we split text by lines and normalize
  // {soft break} + {line break} => { line break }
  var lines = text.split(/\u00AD?\r?\n/),
      layouted = [];

  var maxWidth = box.width - padding.left - padding.right;

  // ensure correct rendering by attaching helper text node to invisible SVG
  var helperText = create('text');
  attr(helperText, { x: 0, y: 0 });
  attr(helperText, style);

  var helperSvg = getHelperSvg();

  append(helperSvg, helperText);

  while (lines.length) {
    layouted.push(layoutNext(lines, maxWidth, helperText));
  }

  if (align.vertical === 'middle') {
    padding.top = padding.bottom = 0;
  }

  var totalHeight = reduce(layouted, function(sum, line, idx) {
    return sum + (lineHeight || line.height);
  }, 0) + padding.top + padding.bottom;

  var maxLineWidth = reduce(layouted, function(sum, line, idx) {
    return line.width > sum ? line.width : sum;
  }, 0);

  // the y position of the next line
  var y = padding.top;

  if (align.vertical === 'middle') {
    y += (box.height - totalHeight) / 2;
  }

  // magic number initial offset
  y -= (lineHeight || layouted[0].height) / 4;


  var textElement = create('text');

  attr(textElement, style);

  // layout each line taking into account that parent
  // shape might resize to fit text size
  forEach(layouted, function(line) {

    var x;

    y += (lineHeight || line.height);

    switch (align.horizontal) {
    case 'left':
      x = padding.left;
      break;

    case 'right':
      x = ((fitBox ? maxLineWidth : maxWidth)
        - padding.right - line.width);
      break;

    default:

      // aka center
      x = Math.max((((fitBox ? maxLineWidth : maxWidth)
        - line.width) / 2 + padding.left), 0);
    }

    var tspan = create('tspan');
    attr(tspan, { x: x, y: y });

    tspan.textContent = line.text;

    append(textElement, tspan);
  });

  remove(helperText);

  var dimensions = {
    width: maxLineWidth,
    height: totalHeight
  };

  return {
    dimensions: dimensions,
    element: textElement
  };
};


function getLineHeight(style) {
  if ('fontSize' in style && 'lineHeight' in style) {
    return style.lineHeight * parseInt(style.fontSize, 10);
  }
}

var DEFAULT_FONT_SIZE = 12;
var LINE_HEIGHT_RATIO = 1.2;

var MIN_TEXT_ANNOTATION_HEIGHT = 30;


function TextRenderer(config) {

  var defaultStyle = assign({
    fontFamily: 'Arial, sans-serif',
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'normal',
    lineHeight: LINE_HEIGHT_RATIO
  }, config && config.defaultStyle || {});

  var fontSize = parseInt(defaultStyle.fontSize, 10) - 1;

  var externalStyle = assign({}, defaultStyle, {
    fontSize: fontSize
  }, config && config.externalStyle || {});

  var textUtil = new Text({
    style: defaultStyle
  });

  /**
   * Get the new bounds of an externally rendered,
   * layouted label.
   *
   * @param  {Bounds} bounds
   * @param  {string} text
   *
   * @return {Bounds}
   */
  this.getExternalLabelBounds = function(bounds, text) {

    var layoutedDimensions = textUtil.getDimensions(text, {
      box: {
        width: 90,
        height: 30,
        x: bounds.width / 2 + bounds.x,
        y: bounds.height / 2 + bounds.y
      },
      style: externalStyle
    });

    // resize label shape to fit label text
    return {
      x: Math.round(bounds.x + bounds.width / 2 - layoutedDimensions.width / 2),
      y: Math.round(bounds.y),
      width: Math.ceil(layoutedDimensions.width),
      height: Math.ceil(layoutedDimensions.height)
    };

  };

  /**
   * Get the new bounds of text annotation.
   *
   * @param  {Bounds} bounds
   * @param  {string} text
   *
   * @return {Bounds}
   */
  this.getTextAnnotationBounds = function(bounds, text) {

    var layoutedDimensions = textUtil.getDimensions(text, {
      box: bounds,
      style: defaultStyle,
      align: 'left-top',
      padding: 5
    });

    return {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: Math.max(MIN_TEXT_ANNOTATION_HEIGHT, Math.round(layoutedDimensions.height))
    };
  };

  /**
   * Create a layouted text element.
   *
   * @param {string} text
   * @param {Object} [options]
   *
   * @return {SVGElement} rendered text
   */
  this.createText = function(text, options) {
    return textUtil.createText(text, options || {});
  };

  /**
   * Get default text style.
   */
  this.getDefaultStyle = function() {
    return defaultStyle;
  };

  /**
   * Get the external text style.
   */
  this.getExternalStyle = function() {
    return externalStyle;
  };

}

TextRenderer.$inject = [
  'config.textRenderer'
];

/**
 * Map containing SVG paths needed by BpmnRenderer.
 */

function PathMap() {

  /**
   * Contains a map of path elements
   *
   * <h1>Path definition</h1>
   * A parameterized path is defined like this:
   * <pre>
   * 'GATEWAY_PARALLEL': {
   *   d: 'm {mx},{my} {e.x0},0 0,{e.x1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' +
          '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
   *   height: 17.5,
   *   width:  17.5,
   *   heightElements: [2.5, 7.5],
   *   widthElements: [2.5, 7.5]
   * }
   * </pre>
   * <p>It's important to specify a correct <b>height and width</b> for the path as the scaling
   * is based on the ratio between the specified height and width in this object and the
   * height and width that is set as scale target (Note x,y coordinates will be scaled with
   * individual ratios).</p>
   * <p>The '<b>heightElements</b>' and '<b>widthElements</b>' array must contain the values that will be scaled.
   * The scaling is based on the computed ratios.
   * Coordinates on the y axis should be in the <b>heightElement</b>'s array, they will be scaled using
   * the computed ratio coefficient.
   * In the parameterized path the scaled values can be accessed through the 'e' object in {} brackets.
   *   <ul>
   *    <li>The values for the y axis can be accessed in the path string using {e.y0}, {e.y1}, ....</li>
   *    <li>The values for the x axis can be accessed in the path string using {e.x0}, {e.x1}, ....</li>
   *   </ul>
   *   The numbers x0, x1 respectively y0, y1, ... map to the corresponding array index.
   * </p>
   */
  this.pathMap = {
    'EVENT_MESSAGE': {
      d: 'm {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}',
      height: 36,
      width:  36,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'EVENT_SIGNAL': {
      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z',
      height: 36,
      width: 36,
      heightElements: [18],
      widthElements: [10, 20]
    },
    'EVENT_ESCALATION': {
      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z',
      height: 36,
      width: 36,
      heightElements: [20, 7],
      widthElements: [8]
    },
    'EVENT_CONDITIONAL': {
      d: 'M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z ' +
         'M {e.x2},{e.y3} l {e.x0},0 ' +
         'M {e.x2},{e.y4} l {e.x0},0 ' +
         'M {e.x2},{e.y5} l {e.x0},0 ' +
         'M {e.x2},{e.y6} l {e.x0},0 ' +
         'M {e.x2},{e.y7} l {e.x0},0 ' +
         'M {e.x2},{e.y8} l {e.x0},0 ',
      height: 36,
      width:  36,
      heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5],
      widthElements:  [10.5, 14.5, 12.5]
    },
    'EVENT_LINK': {
      d: 'm {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z',
      height: 36,
      width: 36,
      heightElements: [4.4375, 6.75, 7.8125],
      widthElements: [9.84375, 13.5]
    },
    'EVENT_ERROR': {
      d: 'm {mx},{my} {e.x0},-{e.y0} {e.x1},-{e.y1} {e.x2},{e.y2} {e.x3},-{e.y3} -{e.x4},{e.y4} -{e.x5},-{e.y5} z',
      height: 36,
      width: 36,
      heightElements: [0.023, 8.737, 8.151, 16.564, 10.591, 8.714],
      widthElements: [0.085, 6.672, 6.97, 4.273, 5.337, 6.636]
    },
    'EVENT_CANCEL_45': {
      d: 'm {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 ' +
        '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
      height: 36,
      width: 36,
      heightElements: [4.75, 8.5],
      widthElements: [4.75, 8.5]
    },
    'EVENT_COMPENSATION': {
      d: 'm {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z',
      height: 36,
      width: 36,
      heightElements: [6.5, 13, 0.4, 6.1],
      widthElements: [9, 9.3, 8.7]
    },
    'EVENT_TIMER_WH': {
      d: 'M {mx},{my} l {e.x0},-{e.y0} m -{e.x0},{e.y0} l {e.x1},{e.y1} ',
      height: 36,
      width:  36,
      heightElements: [10, 2],
      widthElements: [3, 7]
    },
    'EVENT_TIMER_LINE': {
      d:  'M {mx},{my} ' +
          'm {e.x0},{e.y0} l -{e.x1},{e.y1} ',
      height: 36,
      width:  36,
      heightElements: [10, 3],
      widthElements: [0, 0]
    },
    'EVENT_MULTIPLE': {
      d:'m {mx},{my} {e.x1},-{e.y0} {e.x1},{e.y0} -{e.x0},{e.y1} -{e.x2},0 z',
      height: 36,
      width:  36,
      heightElements: [6.28099, 12.56199],
      widthElements: [3.1405, 9.42149, 12.56198]
    },
    'EVENT_PARALLEL_MULTIPLE': {
      d:'m {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' +
        '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
      height: 36,
      width:  36,
      heightElements: [2.56228, 7.68683],
      widthElements: [2.56228, 7.68683]
    },
    'GATEWAY_EXCLUSIVE': {
      d:'m {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} ' +
                    '{e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} ' +
                    '{e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z',
      height: 17.5,
      width:  17.5,
      heightElements: [8.5, 6.5312, -6.5312, -8.5],
      widthElements:  [6.5, -6.5, 3, -3, 5, -5]
    },
    'GATEWAY_PARALLEL': {
      d:'m {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 ' +
        '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
      height: 30,
      width:  30,
      heightElements: [5, 12.5],
      widthElements: [5, 12.5]
    },
    'GATEWAY_EVENT_BASED': {
      d:'m {mx},{my} {e.x0},{e.y0} {e.x0},{e.y1} {e.x1},{e.y2} {e.x2},0 z',
      height: 11,
      width:  11,
      heightElements: [-6, 6, 12, -12],
      widthElements: [9, -3, -12]
    },
    'GATEWAY_COMPLEX': {
      d:'m {mx},{my} 0,{e.y0} -{e.x0},-{e.y1} -{e.x1},{e.y2} {e.x0},{e.y1} -{e.x2},0 0,{e.y3} ' +
        '{e.x2},0  -{e.x0},{e.y1} l {e.x1},{e.y2} {e.x0},-{e.y1} 0,{e.y0} {e.x3},0 0,-{e.y0} {e.x0},{e.y1} ' +
        '{e.x1},-{e.y2} -{e.x0},-{e.y1} {e.x2},0 0,-{e.y3} -{e.x2},0 {e.x0},-{e.y1} -{e.x1},-{e.y2} ' +
        '-{e.x0},{e.y1} 0,-{e.y0} -{e.x3},0 z',
      height: 17.125,
      width:  17.125,
      heightElements: [4.875, 3.4375, 2.125, 3],
      widthElements: [3.4375, 2.125, 4.875, 3]
    },
    'DATA_OBJECT_PATH': {
      d:'m 0,0 {e.x1},0 {e.x0},{e.y0} 0,{e.y1} -{e.x2},0 0,-{e.y2} {e.x1},0 0,{e.y0} {e.x0},0',
      height: 61,
      width:  51,
      heightElements: [10, 50, 60],
      widthElements: [10, 40, 50, 60]
    },
    'DATA_OBJECT_COLLECTION_PATH': {
      d: 'm{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'DATA_ARROW': {
      d:'m 5,9 9,0 0,-3 5,5 -5,5 0,-3 -9,0 z',
      height: 61,
      width:  51,
      heightElements: [],
      widthElements: []
    },
    'DATA_STORE': {
      d:'m  {mx},{my} ' +
        'l  0,{e.y2} ' +
        'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 ' +
        'l  0,-{e.y2} ' +
        'c -{e.x0},-{e.y1} -{e.x1},-{e.y1} -{e.x2},0' +
        'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 ' +
        'm  -{e.x2},{e.y0}' +
        'c  {e.x0},{e.y1} {e.x1},{e.y1} {e.x2},0' +
        'm  -{e.x2},{e.y0}' +
        'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0',
      height: 61,
      width:  61,
      heightElements: [7, 10, 45],
      widthElements:  [2, 58, 60]
    },
    'TEXT_ANNOTATION': {
      d: 'm {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0',
      height: 30,
      width: 10,
      heightElements: [30],
      widthElements: [10]
    },
    'MARKER_SUB_PROCESS': {
      d: 'm{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_PARALLEL': {
      d: 'm{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_SEQUENTIAL': {
      d: 'm{mx},{my} m 0,3 l 10,0 m -10,3 l 10,0 m -10,3 l 10,0',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_COMPENSATION': {
      d: 'm {mx},{my} 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z',
      height: 10,
      width: 21,
      heightElements: [],
      widthElements: []
    },
    'MARKER_LOOP': {
      d: 'm {mx},{my} c 3.526979,0 6.386161,-2.829858 6.386161,-6.320661 0,-3.490806 -2.859182,-6.320661 ' +
        '-6.386161,-6.320661 -3.526978,0 -6.38616,2.829855 -6.38616,6.320661 0,1.745402 ' +
        '0.714797,3.325567 1.870463,4.469381 0.577834,0.571908 1.265885,1.034728 2.029916,1.35457 ' +
        'l -0.718163,-3.909793 m 0.718163,3.909793 -3.885211,0.802902',
      height: 13.9,
      width: 13.7,
      heightElements: [],
      widthElements: []
    },
    'MARKER_ADHOC': {
      d: 'm {mx},{my} m 0.84461,2.64411 c 1.05533,-1.23780996 2.64337,-2.07882 4.29653,-1.97997996 2.05163,0.0805 ' +
        '3.85579,1.15803 5.76082,1.79107 1.06385,0.34139996 2.24454,0.1438 3.18759,-0.43767 0.61743,-0.33642 ' +
        '1.2775,-0.64078 1.7542,-1.17511 0,0.56023 0,1.12046 0,1.6807 -0.98706,0.96237996 -2.29792,1.62393996 ' +
        '-3.6918,1.66181996 -1.24459,0.0927 -2.46671,-0.2491 -3.59505,-0.74812 -1.35789,-0.55965 ' +
        '-2.75133,-1.33436996 -4.27027,-1.18121996 -1.37741,0.14601 -2.41842,1.13685996 -3.44288,1.96782996 z',
      height: 4,
      width: 15,
      heightElements: [],
      widthElements: []
    },
    'TASK_TYPE_SEND': {
      d: 'm {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}',
      height: 14,
      width:  21,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'TASK_TYPE_SCRIPT': {
      d: 'm {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 ' +
        'c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z ' +
        'm -7,-12 l 5,0 ' +
        'm -4.5,3 l 4.5,0 ' +
        'm -3,3 l 5,0' +
        'm -4,3 l 5,0',
      height: 15,
      width:  12.6,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'TASK_TYPE_USER_1': {
      d: 'm {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 ' +
        '-4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 ' +
        '0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 ' +
        'h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 z' +
        'm -8,6 l 0,5.5 m 11,0 l 0,-5'
    },
    'TASK_TYPE_USER_2': {
      d: 'm {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 ' +
        '-2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 '
    },
    'TASK_TYPE_USER_3': {
      d: 'm {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 ' +
        '4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 ' +
        '-4.20799998,3.36699999 -4.20699998,4.34799999 z'
    },
    'TASK_TYPE_MANUAL': {
      d: 'm {mx},{my} c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 ' +
        '-0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 ' +
        '0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 ' +
        '-1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 ' +
        '0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 ' +
        '-10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 ' +
        '2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 ' +
        '-0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 ' +
        '-1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 ' +
        '-0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 ' +
        '0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 ' +
        '-5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z'
    },
    'TASK_TYPE_INSTANTIATING_SEND': {
      d: 'm {mx},{my} l 0,8.4 l 12.6,0 l 0,-8.4 z l 6.3,3.6 l 6.3,-3.6'
    },
    'TASK_TYPE_SERVICE': {
      d: 'm {mx},{my} v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 ' +
        '0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 ' +
        '-1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 ' +
        'v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 ' +
        '-0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 ' +
        '-1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 ' +
        'h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 ' +
        '-0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 ' +
        'c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 ' +
        'l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 ' +
        '0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 ' +
        'c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z ' +
        'm 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 ' +
        '0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 ' +
        '0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z'
    },
    'TASK_TYPE_SERVICE_FILL': {
      d: 'm {mx},{my} c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 ' +
        '0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 ' +
        '0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z'
    },
    'TASK_TYPE_BUSINESS_RULE_HEADER': {
      d: 'm {mx},{my} 0,4 20,0 0,-4 z'
    },
    'TASK_TYPE_BUSINESS_RULE_MAIN': {
      d: 'm {mx},{my} 0,12 20,0 0,-12 z' +
        'm 0,8 l 20,0 ' +
        'm -13,-4 l 0,8'
    },
    'MESSAGE_FLOW_MARKER': {
      d: 'm {mx},{my} m -10.5 ,-7 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6'
    }
  };

  this.getRawPath = function getRawPath(pathId) {
    return this.pathMap[pathId].d;
  };

  /**
   * Scales the path to the given height and width.
   * <h1>Use case</h1>
   * <p>Use case is to scale the content of elements (event, gateways) based
   * on the element bounding box's size.
   * </p>
   * <h1>Why not transform</h1>
   * <p>Scaling a path with transform() will also scale the stroke and IE does not support
   * the option 'non-scaling-stroke' to prevent this.
   * Also there are use cases where only some parts of a path should be
   * scaled.</p>
   *
   * @param {string} pathId The ID of the path.
   * @param {Object} param <p>
   *   Example param object scales the path to 60% size of the container (data.width, data.height).
   *   <pre>
   *   {
   *     xScaleFactor: 0.6,
   *     yScaleFactor:0.6,
   *     containerWidth: data.width,
   *     containerHeight: data.height,
   *     position: {
   *       mx: 0.46,
   *       my: 0.2,
   *     }
   *   }
   *   </pre>
   *   <ul>
   *    <li>targetpathwidth = xScaleFactor * containerWidth</li>
   *    <li>targetpathheight = yScaleFactor * containerHeight</li>
   *    <li>Position is used to set the starting coordinate of the path. M is computed:
    *    <ul>
    *      <li>position.x * containerWidth</li>
    *      <li>position.y * containerHeight</li>
    *    </ul>
    *    Center of the container <pre> position: {
   *       mx: 0.5,
   *       my: 0.5,
   *     }</pre>
   *     Upper left corner of the container
   *     <pre> position: {
   *       mx: 0.0,
   *       my: 0.0,
   *     }</pre>
   *    </li>
   *   </ul>
   * </p>
   *
   */
  this.getScaledPath = function getScaledPath(pathId, param) {
    var rawPath = this.pathMap[pathId];

    // positioning
    // compute the start point of the path
    var mx, my;

    if (param.abspos) {
      mx = param.abspos.x;
      my = param.abspos.y;
    } else {
      mx = param.containerWidth * param.position.mx;
      my = param.containerHeight * param.position.my;
    }

    var coordinates = {}; // map for the scaled coordinates
    if (param.position) {

      // path
      var heightRatio = (param.containerHeight / rawPath.height) * param.yScaleFactor;
      var widthRatio = (param.containerWidth / rawPath.width) * param.xScaleFactor;


      // Apply height ratio
      for (var heightIndex = 0; heightIndex < rawPath.heightElements.length; heightIndex++) {
        coordinates['y' + heightIndex] = rawPath.heightElements[heightIndex] * heightRatio;
      }

      // Apply width ratio
      for (var widthIndex = 0; widthIndex < rawPath.widthElements.length; widthIndex++) {
        coordinates['x' + widthIndex] = rawPath.widthElements[widthIndex] * widthRatio;
      }
    }

    // Apply value to raw path
    var path = format$1(
      rawPath.d, {
        mx: mx,
        my: my,
        e: coordinates
      }
    );
    return path;
  };
}

// helpers //////////////////////

// copied from https://github.com/adobe-webplatform/Snap.svg/blob/master/src/svg.js
var tokenRegex = /\{([^}]+)\}/g,
    objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g; // matches .xxxxx or ["xxxxx"] to run over object properties

function replacer(all, key, obj) {
  var res = obj;
  key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc) {
    name = name || quotedName;
    if (res) {
      if (name in res) {
        res = res[name];
      }
      typeof res == 'function' && isFunc && (res = res());
    }
  });
  res = (res == null || res == obj ? all : res) + '';

  return res;
}

function format$1(str, obj) {
  return String(str).replace(tokenRegex, function(all, key) {
    return replacer(all, key, obj);
  });
}

var DrawModule = {
  __init__: [ 'bpmnRenderer' ],
  bpmnRenderer: [ 'type', BpmnRenderer ],
  textRenderer: [ 'type', TextRenderer ],
  pathMap: [ 'type', PathMap ]
};

/**
 * A simple translation stub to be used for multi-language support
 * in diagrams. Can be easily replaced with a more sophisticated
 * solution.
 *
 * @example
 *
 * // use it inside any diagram component by injecting `translate`.
 *
 * function MyService(translate) {
 *   alert(translate('HELLO {you}', { you: 'You!' }));
 * }
 *
 * @param {string} template to interpolate
 * @param {Object} [replacements] a map with substitutes
 *
 * @return {string} the translated string
 */
function translate$1(template, replacements) {

  replacements = replacements || {};

  return template.replace(/{([^}]+)}/g, function(_, key) {
    return replacements[key] || '{' + key + '}';
  });
}

var TranslateModule = {
  translate: [ 'value', translate$1 ]
};

var DEFAULT_LABEL_SIZE$1 = {
  width: 90,
  height: 20
};

var FLOW_LABEL_INDENT = 15;


/**
 * Returns true if the given semantic has an external label
 *
 * @param {BpmnElement} semantic
 * @return {boolean} true if has label
 */
function isLabelExternal(semantic) {
  return is(semantic, 'bpmn:Event') ||
         is(semantic, 'bpmn:Gateway') ||
         is(semantic, 'bpmn:DataStoreReference') ||
         is(semantic, 'bpmn:DataObjectReference') ||
         is(semantic, 'bpmn:DataInput') ||
         is(semantic, 'bpmn:DataOutput') ||
         is(semantic, 'bpmn:SequenceFlow') ||
         is(semantic, 'bpmn:MessageFlow') ||
         is(semantic, 'bpmn:Group');
}

/**
 * Get the position for sequence flow labels
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the label position
 */
function getFlowLabelPosition(waypoints) {

  // get the waypoints mid
  var mid = waypoints.length / 2 - 1;

  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];

  // get position
  var position = getWaypointsMid(waypoints);

  // calculate angle
  var angle = Math.atan((second.y - first.y) / (second.x - first.x));

  var x = position.x,
      y = position.y;

  if (Math.abs(angle) < Math.PI / 2) {
    y -= FLOW_LABEL_INDENT;
  } else {
    x += FLOW_LABEL_INDENT;
  }

  return { x: x, y: y };
}


/**
 * Get the middle of a number of waypoints
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the mid point
 */
function getWaypointsMid(waypoints) {

  var mid = waypoints.length / 2 - 1;

  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];

  return {
    x: first.x + (second.x - first.x) / 2,
    y: first.y + (second.y - first.y) / 2
  };
}


function getExternalLabelMid(element) {

  if (element.waypoints) {
    return getFlowLabelPosition(element.waypoints);
  } else if (is(element, 'bpmn:Group')) {
    return {
      x: element.x + element.width / 2,
      y: element.y + DEFAULT_LABEL_SIZE$1.height / 2
    };
  } else {
    return {
      x: element.x + element.width / 2,
      y: element.y + element.height + DEFAULT_LABEL_SIZE$1.height / 2
    };
  }
}


/**
 * Returns the bounds of an elements label, parsed from the elements DI or
 * generated from its bounds.
 *
 * @param {BpmnElement} semantic
 * @param {djs.model.Base} element
 */
function getExternalLabelBounds(semantic, element) {

  var mid,
      size,
      bounds,
      di = semantic.di,
      label = di.label;

  if (label && label.bounds) {
    bounds = label.bounds;

    size = {
      width: Math.max(DEFAULT_LABEL_SIZE$1.width, bounds.width),
      height: bounds.height
    };

    mid = {
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    };
  } else {

    mid = getExternalLabelMid(element);

    size = DEFAULT_LABEL_SIZE$1;
  }

  return assign({
    x: mid.x - size.width / 2,
    y: mid.y - size.height / 2
  }, size);
}

function roundPoint(point) {

  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}


/**
 * Get the mid of the given bounds or point.
 *
 * @param {Bounds|Point} bounds
 *
 * @return {Point}
 */
function getMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}

function elementToString(e) {
  if (!e) {
    return '<null>';
  }

  return '<' + e.$type + (e.id ? ' id="' + e.id : '') + '" />';
}

function elementData(semantic, attrs) {
  return assign({
    id: semantic.id,
    type: semantic.$type,
    businessObject: semantic
  }, attrs);
}

function getWaypoints(bo, source, target) {

  var waypoints = bo.di.waypoint;

  if (!waypoints || waypoints.length < 2) {
    return [ getMid(source), getMid(target) ];
  }

  return waypoints.map(function(p) {
    return { x: p.x, y: p.y };
  });
}

function notYetDrawn(translate, semantic, refSemantic, property) {
  return new Error(translate('element {element} referenced by {referenced}#{property} not yet drawn', {
    element: elementToString(refSemantic),
    referenced: elementToString(semantic),
    property: property
  }));
}


/**
 * An importer that adds bpmn elements to the canvas
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementFactory} elementFactory
 * @param {ElementRegistry} elementRegistry
 * @param {Function} translate
 * @param {TextRenderer} textRenderer
 */
function BpmnImporter(
    eventBus, canvas, elementFactory,
    elementRegistry, translate, textRenderer) {

  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementFactory = elementFactory;
  this._elementRegistry = elementRegistry;
  this._translate = translate;
  this._textRenderer = textRenderer;
}

BpmnImporter.$inject = [
  'eventBus',
  'canvas',
  'elementFactory',
  'elementRegistry',
  'translate',
  'textRenderer'
];


/**
 * Add bpmn element (semantic) to the canvas onto the
 * specified parent shape.
 */
BpmnImporter.prototype.add = function(semantic, parentElement) {

  var di = semantic.di,
      element,
      translate = this._translate,
      hidden;

  var parentIndex;

  // ROOT ELEMENT
  // handle the special case that we deal with a
  // invisible root element (process or collaboration)
  if (is(di, 'bpmndi:BPMNPlane')) {

    // add a virtual element (not being drawn)
    element = this._elementFactory.createRoot(elementData(semantic));

    this._canvas.setRootElement(element);
  }

  // SHAPE
  else if (is(di, 'bpmndi:BPMNShape')) {

    var collapsed = !isExpanded(semantic),
        isFrame = isFrameElement(semantic);
    hidden = parentElement && (parentElement.hidden || parentElement.collapsed);

    var bounds = semantic.di.bounds;

    element = this._elementFactory.createShape(elementData(semantic, {
      collapsed: collapsed,
      hidden: hidden,
      x: Math.round(bounds.x),
      y: Math.round(bounds.y),
      width: Math.round(bounds.width),
      height: Math.round(bounds.height),
      isFrame: isFrame
    }));

    if (is(semantic, 'bpmn:BoundaryEvent')) {
      this._attachBoundary(semantic, element);
    }

    // insert lanes behind other flow nodes (cf. #727)
    if (is(semantic, 'bpmn:Lane')) {
      parentIndex = 0;
    }

    if (is(semantic, 'bpmn:DataStoreReference')) {

      // check whether data store is inside our outside of its semantic parent
      if (!isPointInsideBBox(parentElement, getMid(bounds))) {
        parentElement = this._canvas.getRootElement();
      }
    }

    this._canvas.addShape(element, parentElement, parentIndex);
  }

  // CONNECTION
  else if (is(di, 'bpmndi:BPMNEdge')) {

    var source = this._getSource(semantic),
        target = this._getTarget(semantic);

    hidden = parentElement && (parentElement.hidden || parentElement.collapsed);

    element = this._elementFactory.createConnection(elementData(semantic, {
      hidden: hidden,
      source: source,
      target: target,
      waypoints: getWaypoints(semantic, source, target)
    }));

    if (is(semantic, 'bpmn:DataAssociation')) {

      // render always on top; this ensures DataAssociations
      // are rendered correctly across different "hacks" people
      // love to model such as cross participant / sub process
      // associations
      parentElement = null;
    }

    // insert sequence flows behind other flow nodes (cf. #727)
    if (is(semantic, 'bpmn:SequenceFlow')) {
      parentIndex = 0;
    }

    this._canvas.addConnection(element, parentElement, parentIndex);
  } else {
    throw new Error(translate('unknown di {di} for element {semantic}', {
      di: elementToString(di),
      semantic: elementToString(semantic)
    }));
  }

  // (optional) LABEL
  if (isLabelExternal(semantic) && getLabel(element)) {
    this.addLabel(semantic, element);
  }


  this._eventBus.fire('bpmnElement.added', { element: element });

  return element;
};


/**
 * Attach the boundary element to the given host
 *
 * @param {ModdleElement} boundarySemantic
 * @param {djs.model.Base} boundaryElement
 */
BpmnImporter.prototype._attachBoundary = function(boundarySemantic, boundaryElement) {
  var translate = this._translate;
  var hostSemantic = boundarySemantic.attachedToRef;

  if (!hostSemantic) {
    throw new Error(translate('missing {semantic}#attachedToRef', {
      semantic: elementToString(boundarySemantic)
    }));
  }

  var host = this._elementRegistry.get(hostSemantic.id),
      attachers = host && host.attachers;

  if (!host) {
    throw notYetDrawn(translate, boundarySemantic, hostSemantic, 'attachedToRef');
  }

  // wire element.host <> host.attachers
  boundaryElement.host = host;

  if (!attachers) {
    host.attachers = attachers = [];
  }

  if (attachers.indexOf(boundaryElement) === -1) {
    attachers.push(boundaryElement);
  }
};


/**
 * add label for an element
 */
BpmnImporter.prototype.addLabel = function(semantic, element) {
  var bounds,
      text,
      label;

  bounds = getExternalLabelBounds(semantic, element);

  text = getLabel(element);

  if (text) {

    // get corrected bounds from actual layouted text
    bounds = this._textRenderer.getExternalLabelBounds(bounds, text);
  }

  label = this._elementFactory.createLabel(elementData(semantic, {
    id: semantic.id + '_label',
    labelTarget: element,
    type: 'label',
    hidden: element.hidden || !getLabel(element),
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  }));

  return this._canvas.addShape(label, element.parent);
};

/**
 * Return the drawn connection end based on the given side.
 *
 * @throws {Error} if the end is not yet drawn
 */
BpmnImporter.prototype._getEnd = function(semantic, side) {

  var element,
      refSemantic,
      type = semantic.$type,
      translate = this._translate;

  refSemantic = semantic[side + 'Ref'];

  // handle mysterious isMany DataAssociation#sourceRef
  if (side === 'source' && type === 'bpmn:DataInputAssociation') {
    refSemantic = refSemantic && refSemantic[0];
  }

  // fix source / target for DataInputAssociation / DataOutputAssociation
  if (side === 'source' && type === 'bpmn:DataOutputAssociation' ||
      side === 'target' && type === 'bpmn:DataInputAssociation') {

    refSemantic = semantic.$parent;
  }

  element = refSemantic && this._getElement(refSemantic);

  if (element) {
    return element;
  }

  if (refSemantic) {
    throw notYetDrawn(translate, semantic, refSemantic, side + 'Ref');
  } else {
    throw new Error(translate('{semantic}#{side} Ref not specified', {
      semantic: elementToString(semantic),
      side: side
    }));
  }
};

BpmnImporter.prototype._getSource = function(semantic) {
  return this._getEnd(semantic, 'source');
};

BpmnImporter.prototype._getTarget = function(semantic) {
  return this._getEnd(semantic, 'target');
};


BpmnImporter.prototype._getElement = function(semantic) {
  return this._elementRegistry.get(semantic.id);
};


// helpers ////////////////////

function isPointInsideBBox(bbox, point) {
  var x = point.x,
      y = point.y;

  return x >= bbox.x &&
    x <= bbox.x + bbox.width &&
    y >= bbox.y &&
    y <= bbox.y + bbox.height;
}

function isFrameElement(semantic) {
  return is(semantic, 'bpmn:Group');
}

var ImportModule = {
  __depends__: [
    TranslateModule
  ],
  bpmnImporter: [ 'type', BpmnImporter ]
};

var CoreModule = {
  __depends__: [
    DrawModule,
    ImportModule
  ]
};

function getOriginal(event) {
  return event.originalEvent || event.srcEvent;
}


function toPoint(event) {

  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }

  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }

  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}

function isMac() {
  return (/mac/i).test(navigator.platform);
}

function isButton(event, button) {
  return (getOriginal(event) || event).button === button;
}

function isPrimaryButton(event) {

  // button === 0 -> left áka primary mouse button
  return isButton(event, 0);
}

function isAuxiliaryButton(event) {

  // button === 1 -> auxiliary áka wheel button
  return isButton(event, 1);
}

function hasPrimaryModifier(event) {
  var originalEvent = getOriginal(event) || event;

  if (!isPrimaryButton(event)) {
    return false;
  }

  // Use cmd as primary modifier key for mac OS
  if (isMac()) {
    return originalEvent.metaKey;
  } else {
    return originalEvent.ctrlKey;
  }
}


function hasSecondaryModifier(event) {
  var originalEvent = getOriginal(event) || event;

  return isPrimaryButton(event) && originalEvent.shiftKey;
}

function allowAll(event) { return true; }

function allowPrimaryAndAuxiliary(event) {
  return isPrimaryButton(event) || isAuxiliaryButton(event);
}

var LOW_PRIORITY = 500;


/**
 * A plugin that provides interaction events for diagram elements.
 *
 * It emits the following events:
 *
 *   * element.click
 *   * element.contextmenu
 *   * element.dblclick
 *   * element.hover
 *   * element.mousedown
 *   * element.mousemove
 *   * element.mouseup
 *   * element.out
 *
 * Each event is a tuple { element, gfx, originalEvent }.
 *
 * Canceling the event via Event#preventDefault()
 * prevents the original DOM operation.
 *
 * @param {EventBus} eventBus
 */
function InteractionEvents(eventBus, elementRegistry, styles) {

  var self = this;

  /**
   * Fire an interaction event.
   *
   * @param {string} type local event name, e.g. element.click.
   * @param {DOMEvent} event native event
   * @param {djs.model.Base} [element] the diagram element to emit the event on;
   *                                   defaults to the event target
   */
  function fire(type, event, element) {

    if (isIgnored(type, event)) {
      return;
    }

    var target, gfx, returnValue;

    if (!element) {
      target = event.delegateTarget || event.target;

      if (target) {
        gfx = target;
        element = elementRegistry.get(gfx);
      }
    } else {
      gfx = elementRegistry.getGraphics(element);
    }

    if (!gfx || !element) {
      return;
    }

    returnValue = eventBus.fire(type, {
      element: element,
      gfx: gfx,
      originalEvent: event
    });

    if (returnValue === false) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // TODO(nikku): document this
  var handlers = {};

  function mouseHandler(localEventName) {
    return handlers[localEventName];
  }

  function isIgnored(localEventName, event) {

    var filter = ignoredFilters[localEventName] || isPrimaryButton;

    // only react on left mouse button interactions
    // except for interaction events that are enabled
    // for secundary mouse button
    return !filter(event);
  }

  var bindings = {
    click: 'element.click',
    contextmenu: 'element.contextmenu',
    dblclick: 'element.dblclick',
    mousedown: 'element.mousedown',
    mousemove: 'element.mousemove',
    mouseover: 'element.hover',
    mouseout: 'element.out',
    mouseup: 'element.mouseup',
  };

  var ignoredFilters = {
    'element.contextmenu': allowAll,
    'element.mousedown': allowPrimaryAndAuxiliary,
    'element.mouseup': allowPrimaryAndAuxiliary,
    'element.click': allowPrimaryAndAuxiliary,
    'element.dblclick': allowPrimaryAndAuxiliary
  };


  // manual event trigger //////////

  /**
   * Trigger an interaction event (based on a native dom event)
   * on the target shape or connection.
   *
   * @param {string} eventName the name of the triggered DOM event
   * @param {MouseEvent} event
   * @param {djs.model.Base} targetElement
   */
  function triggerMouseEvent(eventName, event, targetElement) {

    // i.e. element.mousedown...
    var localEventName = bindings[eventName];

    if (!localEventName) {
      throw new Error('unmapped DOM event name <' + eventName + '>');
    }

    return fire(localEventName, event, targetElement);
  }


  var ELEMENT_SELECTOR = 'svg, .djs-element';

  // event handling ///////

  function registerEvent(node, event, localEvent, ignoredFilter) {

    var handler = handlers[localEvent] = function(event) {
      fire(localEvent, event);
    };

    if (ignoredFilter) {
      ignoredFilters[localEvent] = ignoredFilter;
    }

    handler.$delegate = delegate.bind(node, ELEMENT_SELECTOR, event, handler);
  }

  function unregisterEvent(node, event, localEvent) {

    var handler = mouseHandler(localEvent);

    if (!handler) {
      return;
    }

    delegate.unbind(node, event, handler.$delegate);
  }

  function registerEvents(svg) {
    forEach(bindings, function(val, key) {
      registerEvent(svg, key, val);
    });
  }

  function unregisterEvents(svg) {
    forEach(bindings, function(val, key) {
      unregisterEvent(svg, key, val);
    });
  }

  eventBus.on('canvas.destroy', function(event) {
    unregisterEvents(event.svg);
  });

  eventBus.on('canvas.init', function(event) {
    registerEvents(event.svg);
  });


  // hit box updating ////////////////

  eventBus.on([ 'shape.added', 'connection.added' ], function(event) {
    var element = event.element,
        gfx = event.gfx;

    eventBus.fire('interactionEvents.createHit', { element: element, gfx: gfx });
  });

  // Update djs-hit on change.
  // A low priortity is necessary, because djs-hit of labels has to be updated
  // after the label bounds have been updated in the renderer.
  eventBus.on([
    'shape.changed',
    'connection.changed'
  ], LOW_PRIORITY, function(event) {

    var element = event.element,
        gfx = event.gfx;

    eventBus.fire('interactionEvents.updateHit', { element: element, gfx: gfx });
  });

  eventBus.on('interactionEvents.createHit', LOW_PRIORITY, function(event) {
    var element = event.element,
        gfx = event.gfx;

    self.createDefaultHit(element, gfx);
  });

  eventBus.on('interactionEvents.updateHit', function(event) {
    var element = event.element,
        gfx = event.gfx;

    self.updateDefaultHit(element, gfx);
  });


  // hit styles ////////////

  var STROKE_HIT_STYLE = createHitStyle('djs-hit djs-hit-stroke');

  var CLICK_STROKE_HIT_STYLE = createHitStyle('djs-hit djs-hit-click-stroke');

  var ALL_HIT_STYLE = createHitStyle('djs-hit djs-hit-all');

  var HIT_TYPES = {
    'all': ALL_HIT_STYLE,
    'click-stroke': CLICK_STROKE_HIT_STYLE,
    'stroke': STROKE_HIT_STYLE
  };

  function createHitStyle(classNames, attrs) {

    attrs = assign({
      stroke: 'white',
      strokeWidth: 15
    }, attrs || {});

    return styles.cls(classNames, [ 'no-fill', 'no-border' ], attrs);
  }


  // style helpers ///////////////

  function applyStyle(hit, type) {

    var attrs = HIT_TYPES[type];

    if (!attrs) {
      throw new Error('invalid hit type <' + type + '>');
    }

    attr(hit, attrs);

    return hit;
  }

  function appendHit(gfx, hit) {
    append(gfx, hit);
  }


  // API

  /**
   * Remove hints on the given graphics.
   *
   * @param {SVGElement} gfx
   */
  this.removeHits = function(gfx) {
    var hits = all('.djs-hit', gfx);

    forEach(hits, remove);
  };

  /**
   * Create default hit for the given element.
   *
   * @param {djs.model.Base} element
   * @param {SVGElement} gfx
   *
   * @return {SVGElement} created hit
   */
  this.createDefaultHit = function(element, gfx) {
    var waypoints = element.waypoints,
        isFrame = element.isFrame,
        boxType;

    if (waypoints) {
      return this.createWaypointsHit(gfx, waypoints);
    } else {

      boxType = isFrame ? 'stroke' : 'all';

      return this.createBoxHit(gfx, boxType, {
        width: element.width,
        height: element.height
      });
    }
  };

  /**
   * Create hits for the given waypoints.
   *
   * @param {SVGElement} gfx
   * @param {Array<Point>} waypoints
   *
   * @return {SVGElement}
   */
  this.createWaypointsHit = function(gfx, waypoints) {

    var hit = createLine(waypoints);

    applyStyle(hit, 'stroke');

    appendHit(gfx, hit);

    return hit;
  };

  /**
   * Create hits for a box.
   *
   * @param {SVGElement} gfx
   * @param {string} hitType
   * @param {Object} attrs
   *
   * @return {SVGElement}
   */
  this.createBoxHit = function(gfx, type, attrs) {

    attrs = assign({
      x: 0,
      y: 0
    }, attrs);

    var hit = create('rect');

    applyStyle(hit, type);

    attr(hit, attrs);

    appendHit(gfx, hit);

    return hit;
  };

  /**
   * Update default hit of the element.
   *
   * @param  {djs.model.Base} element
   * @param  {SVGElement} gfx
   *
   * @return {SVGElement} updated hit
   */
  this.updateDefaultHit = function(element, gfx) {

    var hit = query('.djs-hit', gfx);

    if (!hit) {
      return;
    }

    if (element.waypoints) {
      updateLine(hit, element.waypoints);
    } else {
      attr(hit, {
        width: element.width,
        height: element.height
      });
    }

    return hit;
  };

  this.fire = fire;

  this.triggerMouseEvent = triggerMouseEvent;

  this.mouseHandler = mouseHandler;

  this.registerEvent = registerEvent;
  this.unregisterEvent = unregisterEvent;
}


InteractionEvents.$inject = [
  'eventBus',
  'elementRegistry',
  'styles'
];


/**
 * An event indicating that the mouse hovered over an element
 *
 * @event element.hover
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has left an element
 *
 * @event element.out
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has clicked an element
 *
 * @event element.click
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has double clicked an element
 *
 * @event element.dblclick
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has gone down on an element.
 *
 * @event element.mousedown
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the mouse has gone up on an element.
 *
 * @event element.mouseup
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

/**
 * An event indicating that the context menu action is triggered
 * via mouse or touch controls.
 *
 * @event element.contextmenu
 *
 * @type {Object}
 * @property {djs.model.Base} element
 * @property {SVGElement} gfx
 * @property {Event} originalEvent
 */

var InteractionEventsModule = {
  __init__: [ 'interactionEvents' ],
  interactionEvents: [ 'type', InteractionEvents ]
};

/**
 * Returns the surrounding bbox for all elements in
 * the array or the element primitive.
 *
 * @param {Array<djs.model.Shape>|djs.model.Shape} elements
 * @param {boolean} stopRecursion
 */
function getBBox(elements, stopRecursion) {

  stopRecursion = !!stopRecursion;
  if (!isArray(elements)) {
    elements = [elements];
  }

  var minX,
      minY,
      maxX,
      maxY;

  forEach(elements, function(element) {

    // If element is a connection the bbox must be computed first
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }

    var x = bbox.x,
        y = bbox.y,
        height = bbox.height || 0,
        width = bbox.width || 0;

    if (x < minX || minX === undefined) {
      minX = x;
    }
    if (y < minY || minY === undefined) {
      minY = y;
    }

    if ((x + width) > maxX || maxX === undefined) {
      maxX = x + width;
    }
    if ((y + height) > maxY || maxY === undefined) {
      maxY = y + height;
    }
  });

  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}


function getType(element) {

  if ('waypoints' in element) {
    return 'connection';
  }

  if ('x' in element) {
    return 'shape';
  }

  return 'root';
}

function isFrameElement$1(element) {

  return !!(element && element.isFrame);
}

var LOW_PRIORITY$1 = 500;


/**
 * @class
 *
 * A plugin that adds an outline to shapes and connections that may be activated and styled
 * via CSS classes.
 *
 * @param {EventBus} eventBus
 * @param {Styles} styles
 * @param {ElementRegistry} elementRegistry
 */
function Outline(eventBus, styles, elementRegistry) {

  this.offset = 6;

  var OUTLINE_STYLE = styles.cls('djs-outline', [ 'no-fill' ]);

  var self = this;

  function createOutline(gfx, bounds) {
    var outline = create('rect');

    attr(outline, assign({
      x: 10,
      y: 10,
      width: 100,
      height: 100
    }, OUTLINE_STYLE));

    append(gfx, outline);

    return outline;
  }

  // A low priortity is necessary, because outlines of labels have to be updated
  // after the label bounds have been updated in the renderer.
  eventBus.on([ 'shape.added', 'shape.changed' ], LOW_PRIORITY$1, function(event) {
    var element = event.element,
        gfx = event.gfx;

    var outline = query('.djs-outline', gfx);

    if (!outline) {
      outline = createOutline(gfx);
    }

    self.updateShapeOutline(outline, element);
  });

  eventBus.on([ 'connection.added', 'connection.changed' ], function(event) {
    var element = event.element,
        gfx = event.gfx;

    var outline = query('.djs-outline', gfx);

    if (!outline) {
      outline = createOutline(gfx);
    }

    self.updateConnectionOutline(outline, element);
  });
}


/**
 * Updates the outline of a shape respecting the dimension of the
 * element and an outline offset.
 *
 * @param  {SVGElement} outline
 * @param  {djs.model.Base} element
 */
Outline.prototype.updateShapeOutline = function(outline, element) {

  attr(outline, {
    x: -this.offset,
    y: -this.offset,
    width: element.width + this.offset * 2,
    height: element.height + this.offset * 2
  });

};


/**
 * Updates the outline of a connection respecting the bounding box of
 * the connection and an outline offset.
 *
 * @param  {SVGElement} outline
 * @param  {djs.model.Base} element
 */
Outline.prototype.updateConnectionOutline = function(outline, connection) {

  var bbox = getBBox(connection);

  attr(outline, {
    x: bbox.x - this.offset,
    y: bbox.y - this.offset,
    width: bbox.width + this.offset * 2,
    height: bbox.height + this.offset * 2
  });

};


Outline.$inject = ['eventBus', 'styles', 'elementRegistry'];

var OutlineModule = {
  __init__: [ 'outline' ],
  outline: [ 'type', Outline ]
};

/**
 * A service that offers the current selection in a diagram.
 * Offers the api to control the selection, too.
 *
 * @class
 *
 * @param {EventBus} eventBus the event bus
 */
function Selection(eventBus) {

  this._eventBus = eventBus;

  this._selectedElements = [];

  var self = this;

  eventBus.on([ 'shape.remove', 'connection.remove' ], function(e) {
    var element = e.element;
    self.deselect(element);
  });

  eventBus.on([ 'diagram.clear' ], function(e) {
    self.select(null);
  });
}

Selection.$inject = [ 'eventBus' ];


Selection.prototype.deselect = function(element) {
  var selectedElements = this._selectedElements;

  var idx = selectedElements.indexOf(element);

  if (idx !== -1) {
    var oldSelection = selectedElements.slice();

    selectedElements.splice(idx, 1);

    this._eventBus.fire('selection.changed', { oldSelection: oldSelection, newSelection: selectedElements });
  }
};


Selection.prototype.get = function() {
  return this._selectedElements;
};

Selection.prototype.isSelected = function(element) {
  return this._selectedElements.indexOf(element) !== -1;
};


/**
 * This method selects one or more elements on the diagram.
 *
 * By passing an additional add parameter you can decide whether or not the element(s)
 * should be added to the already existing selection or not.
 *
 * @method Selection#select
 *
 * @param  {Object|Object[]} elements element or array of elements to be selected
 * @param  {boolean} [add] whether the element(s) should be appended to the current selection, defaults to false
 */
Selection.prototype.select = function(elements, add) {
  var selectedElements = this._selectedElements,
      oldSelection = selectedElements.slice();

  if (!isArray(elements)) {
    elements = elements ? [ elements ] : [];
  }

  // selection may be cleared by passing an empty array or null
  // to the method
  if (add) {
    forEach(elements, function(element) {
      if (selectedElements.indexOf(element) !== -1) {

        // already selected
        return;
      } else {
        selectedElements.push(element);
      }
    });
  } else {
    this._selectedElements = selectedElements = elements.slice();
  }

  this._eventBus.fire('selection.changed', { oldSelection: oldSelection, newSelection: selectedElements });
};

var MARKER_HOVER = 'hover',
    MARKER_SELECTED = 'selected';


/**
 * A plugin that adds a visible selection UI to shapes and connections
 * by appending the <code>hover</code> and <code>selected</code> classes to them.
 *
 * @class
 *
 * Makes elements selectable, too.
 *
 * @param {EventBus} events
 * @param {SelectionService} selection
 * @param {Canvas} canvas
 */
function SelectionVisuals(events, canvas, selection, styles) {

  this._multiSelectionBox = null;

  function addMarker(e, cls) {
    canvas.addMarker(e, cls);
  }

  function removeMarker(e, cls) {
    canvas.removeMarker(e, cls);
  }

  events.on('element.hover', function(event) {
    addMarker(event.element, MARKER_HOVER);
  });

  events.on('element.out', function(event) {
    removeMarker(event.element, MARKER_HOVER);
  });

  events.on('selection.changed', function(event) {

    function deselect(s) {
      removeMarker(s, MARKER_SELECTED);
    }

    function select(s) {
      addMarker(s, MARKER_SELECTED);
    }

    var oldSelection = event.oldSelection,
        newSelection = event.newSelection;

    forEach(oldSelection, function(e) {
      if (newSelection.indexOf(e) === -1) {
        deselect(e);
      }
    });

    forEach(newSelection, function(e) {
      if (oldSelection.indexOf(e) === -1) {
        select(e);
      }
    });
  });
}

SelectionVisuals.$inject = [
  'eventBus',
  'canvas',
  'selection',
  'styles'
];

function SelectionBehavior(eventBus, selection, canvas, elementRegistry) {

  // Select elements on create
  eventBus.on('create.end', 500, function(event) {
    var context = event.context,
        canExecute = context.canExecute,
        elements = context.elements,
        hints = context.hints || {},
        autoSelect = hints.autoSelect;

    if (canExecute) {
      if (autoSelect === false) {

        // Select no elements
        return;
      }

      if (isArray(autoSelect)) {
        selection.select(autoSelect);
      } else {

        // Select all elements by default
        selection.select(elements.filter(isShown));
      }
    }
  });

  // Select connection targets on connect
  eventBus.on('connect.end', 500, function(event) {
    var context = event.context,
        canExecute = context.canExecute,
        hover = context.hover;

    if (canExecute && hover) {
      selection.select(hover);
    }
  });

  // Select shapes on move
  eventBus.on('shape.move.end', 500, function(event) {
    var previousSelection = event.previousSelection || [];

    var shape = elementRegistry.get(event.context.shape.id);

    // Always select main shape on move
    var isSelected = find(previousSelection, function(selectedShape) {
      return shape.id === selectedShape.id;
    });

    if (!isSelected) {
      selection.select(shape);
    }
  });

  // Select elements on click
  eventBus.on('element.click', function(event) {

    if (!isPrimaryButton(event)) {
      return;
    }

    var element = event.element;

    if (element === canvas.getRootElement()) {
      element = null;
    }

    var isSelected = selection.isSelected(element),
        isMultiSelect = selection.get().length > 1;

    // Add to selection if CTRL or SHIFT pressed
    var add = hasPrimaryModifier(event) || hasSecondaryModifier(event);

    if (isSelected && isMultiSelect) {
      if (add) {

        // Deselect element
        return selection.deselect(element);
      } else {

        // Select element only
        return selection.select(element);
      }
    } else if (!isSelected) {

      // Select element
      selection.select(element, add);
    } else {

      // Deselect element
      selection.deselect(element);
    }
  });
}

SelectionBehavior.$inject = [
  'eventBus',
  'selection',
  'canvas',
  'elementRegistry'
];


function isShown(element) {
  return !element.hidden;
}

var SelectionModule = {
  __init__: [ 'selectionVisuals', 'selectionBehavior' ],
  __depends__: [
    InteractionEventsModule,
    OutlineModule
  ],
  selection: [ 'type', Selection ],
  selectionVisuals: [ 'type', SelectionVisuals ],
  selectionBehavior: [ 'type', SelectionBehavior ]
};

/**
 * Util that provides unique IDs.
 *
 * @class djs.util.IdGenerator
 * @constructor
 * @memberOf djs.util
 *
 * The ids can be customized via a given prefix and contain a random value to avoid collisions.
 *
 * @param {string} prefix a prefix to prepend to generated ids (for better readability)
 */
function IdGenerator(prefix) {

  this._counter = 0;
  this._prefix = (prefix ? prefix + '-' : '') + Math.floor(Math.random() * 1000000000) + '-';
}

/**
 * Returns a next unique ID.
 *
 * @method djs.util.IdGenerator#next
 *
 * @returns {string} the id
 */
IdGenerator.prototype.next = function() {
  return this._prefix + (++this._counter);
};

// document wide unique overlay ids
var ids = new IdGenerator('ov');

var LOW_PRIORITY$2 = 500;


/**
 * A service that allows users to attach overlays to diagram elements.
 *
 * The overlay service will take care of overlay positioning during updates.
 *
 * @example
 *
 * // add a pink badge on the top left of the shape
 * overlays.add(someShape, {
 *   position: {
 *     top: -5,
 *     left: -5
 *   },
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 * // or add via shape id
 *
 * overlays.add('some-element-id', {
 *   position: {
 *     top: -5,
 *     left: -5
 *   }
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 * // or add with optional type
 *
 * overlays.add(someShape, 'badge', {
 *   position: {
 *     top: -5,
 *     left: -5
 *   }
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 *
 * // remove an overlay
 *
 * var id = overlays.add(...);
 * overlays.remove(id);
 *
 *
 * You may configure overlay defaults during tool by providing a `config` module
 * with `overlays.defaults` as an entry:
 *
 * {
 *   overlays: {
 *     defaults: {
 *       show: {
 *         minZoom: 0.7,
 *         maxZoom: 5.0
 *       },
 *       scale: {
 *         min: 1
 *       }
 *     }
 * }
 *
 * @param {Object} config
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementRegistry} elementRegistry
 */
function Overlays(config, eventBus, canvas, elementRegistry) {

  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementRegistry = elementRegistry;

  this._ids = ids;

  this._overlayDefaults = assign({

    // no show constraints
    show: null,

    // always scale
    scale: true
  }, config && config.defaults);

  /**
   * Mapping overlayId -> overlay
   */
  this._overlays = {};

  /**
   * Mapping elementId -> overlay container
   */
  this._overlayContainers = [];

  // root html element for all overlays
  this._overlayRoot = createRoot(canvas.getContainer());

  this._init();
}


Overlays.$inject = [
  'config.overlays',
  'eventBus',
  'canvas',
  'elementRegistry'
];


/**
 * Returns the overlay with the specified id or a list of overlays
 * for an element with a given type.
 *
 * @example
 *
 * // return the single overlay with the given id
 * overlays.get('some-id');
 *
 * // return all overlays for the shape
 * overlays.get({ element: someShape });
 *
 * // return all overlays on shape with type 'badge'
 * overlays.get({ element: someShape, type: 'badge' });
 *
 * // shape can also be specified as id
 * overlays.get({ element: 'element-id', type: 'badge' });
 *
 *
 * @param {Object} search
 * @param {string} [search.id]
 * @param {string|djs.model.Base} [search.element]
 * @param {string} [search.type]
 *
 * @return {Object|Array<Object>} the overlay(s)
 */
Overlays.prototype.get = function(search) {

  if (isString(search)) {
    search = { id: search };
  }

  if (isString(search.element)) {
    search.element = this._elementRegistry.get(search.element);
  }

  if (search.element) {
    var container = this._getOverlayContainer(search.element, true);

    // return a list of overlays when searching by element (+type)
    if (container) {
      return search.type ? filter(container.overlays, matchPattern({ type: search.type })) : container.overlays.slice();
    } else {
      return [];
    }
  } else
  if (search.type) {
    return filter(this._overlays, matchPattern({ type: search.type }));
  } else {

    // return single element when searching by id
    return search.id ? this._overlays[search.id] : null;
  }
};

/**
 * Adds a HTML overlay to an element.
 *
 * @param {string|djs.model.Base}   element   attach overlay to this shape
 * @param {string}                  [type]    optional type to assign to the overlay
 * @param {Object}                  overlay   the overlay configuration
 *
 * @param {string|DOMElement}       overlay.html                 html element to use as an overlay
 * @param {Object}                  [overlay.show]               show configuration
 * @param {number}                  [overlay.show.minZoom]       minimal zoom level to show the overlay
 * @param {number}                  [overlay.show.maxZoom]       maximum zoom level to show the overlay
 * @param {Object}                  overlay.position             where to attach the overlay
 * @param {number}                  [overlay.position.left]      relative to element bbox left attachment
 * @param {number}                  [overlay.position.top]       relative to element bbox top attachment
 * @param {number}                  [overlay.position.bottom]    relative to element bbox bottom attachment
 * @param {number}                  [overlay.position.right]     relative to element bbox right attachment
 * @param {boolean|Object}          [overlay.scale=true]         false to preserve the same size regardless of
 *                                                               diagram zoom
 * @param {number}                  [overlay.scale.min]
 * @param {number}                  [overlay.scale.max]
 *
 * @return {string}                 id that may be used to reference the overlay for update or removal
 */
Overlays.prototype.add = function(element, type, overlay) {

  if (isObject(type)) {
    overlay = type;
    type = null;
  }

  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  if (!overlay.position) {
    throw new Error('must specifiy overlay position');
  }

  if (!overlay.html) {
    throw new Error('must specifiy overlay html');
  }

  if (!element) {
    throw new Error('invalid element specified');
  }

  var id = this._ids.next();

  overlay = assign({}, this._overlayDefaults, overlay, {
    id: id,
    type: type,
    element: element,
    html: overlay.html
  });

  this._addOverlay(overlay);

  return id;
};


/**
 * Remove an overlay with the given id or all overlays matching the given filter.
 *
 * @see Overlays#get for filter options.
 *
 * @param {string} [id]
 * @param {Object} [filter]
 */
Overlays.prototype.remove = function(filter) {

  var overlays = this.get(filter) || [];

  if (!isArray(overlays)) {
    overlays = [ overlays ];
  }

  var self = this;

  forEach(overlays, function(overlay) {

    var container = self._getOverlayContainer(overlay.element, true);

    if (overlay) {
      remove$1(overlay.html);
      remove$1(overlay.htmlContainer);

      delete overlay.htmlContainer;
      delete overlay.element;

      delete self._overlays[overlay.id];
    }

    if (container) {
      var idx = container.overlays.indexOf(overlay);
      if (idx !== -1) {
        container.overlays.splice(idx, 1);
      }
    }
  });

};


Overlays.prototype.show = function() {
  setVisible(this._overlayRoot);
};


Overlays.prototype.hide = function() {
  setVisible(this._overlayRoot, false);
};

Overlays.prototype.clear = function() {
  this._overlays = {};

  this._overlayContainers = [];

  clear$1(this._overlayRoot);
};

Overlays.prototype._updateOverlayContainer = function(container) {
  var element = container.element,
      html = container.html;

  // update container left,top according to the elements x,y coordinates
  // this ensures we can attach child elements relative to this container

  var x = element.x,
      y = element.y;

  if (element.waypoints) {
    var bbox = getBBox(element);
    x = bbox.x;
    y = bbox.y;
  }

  setPosition(html, x, y);

  attr$1(container.html, 'data-container-id', element.id);
};


Overlays.prototype._updateOverlay = function(overlay) {

  var position = overlay.position,
      htmlContainer = overlay.htmlContainer,
      element = overlay.element;

  // update overlay html relative to shape because
  // it is already positioned on the element

  // update relative
  var left = position.left,
      top = position.top;

  if (position.right !== undefined) {

    var width;

    if (element.waypoints) {
      width = getBBox(element).width;
    } else {
      width = element.width;
    }

    left = position.right * -1 + width;
  }

  if (position.bottom !== undefined) {

    var height;

    if (element.waypoints) {
      height = getBBox(element).height;
    } else {
      height = element.height;
    }

    top = position.bottom * -1 + height;
  }

  setPosition(htmlContainer, left || 0, top || 0);
};


Overlays.prototype._createOverlayContainer = function(element) {
  var html = domify('<div class="djs-overlays" style="position: absolute" />');

  this._overlayRoot.appendChild(html);

  var container = {
    html: html,
    element: element,
    overlays: []
  };

  this._updateOverlayContainer(container);

  this._overlayContainers.push(container);

  return container;
};


Overlays.prototype._updateRoot = function(viewbox) {
  var scale = viewbox.scale || 1;

  var matrix = 'matrix(' +
  [
    scale,
    0,
    0,
    scale,
    -1 * viewbox.x * scale,
    -1 * viewbox.y * scale
  ].join(',') +
  ')';

  setTransform(this._overlayRoot, matrix);
};


Overlays.prototype._getOverlayContainer = function(element, raw) {
  var container = find(this._overlayContainers, function(c) {
    return c.element === element;
  });


  if (!container && !raw) {
    return this._createOverlayContainer(element);
  }

  return container;
};


Overlays.prototype._addOverlay = function(overlay) {

  var id = overlay.id,
      element = overlay.element,
      html = overlay.html,
      htmlContainer,
      overlayContainer;

  // unwrap jquery (for those who need it)
  if (html.get && html.constructor.prototype.jquery) {
    html = html.get(0);
  }

  // create proper html elements from
  // overlay HTML strings
  if (isString(html)) {
    html = domify(html);
  }

  overlayContainer = this._getOverlayContainer(element);

  htmlContainer = domify('<div class="djs-overlay" data-overlay-id="' + id + '" style="position: absolute">');

  htmlContainer.appendChild(html);

  if (overlay.type) {
    classes$1(htmlContainer).add('djs-overlay-' + overlay.type);
  }

  overlay.htmlContainer = htmlContainer;

  overlayContainer.overlays.push(overlay);
  overlayContainer.html.appendChild(htmlContainer);

  this._overlays[id] = overlay;

  this._updateOverlay(overlay);
  this._updateOverlayVisibilty(overlay, this._canvas.viewbox());
};


Overlays.prototype._updateOverlayVisibilty = function(overlay, viewbox) {
  var show = overlay.show,
      minZoom = show && show.minZoom,
      maxZoom = show && show.maxZoom,
      htmlContainer = overlay.htmlContainer,
      visible = true;

  if (show) {
    if (
      (isDefined(minZoom) && minZoom > viewbox.scale) ||
      (isDefined(maxZoom) && maxZoom < viewbox.scale)
    ) {
      visible = false;
    }

    setVisible(htmlContainer, visible);
  }

  this._updateOverlayScale(overlay, viewbox);
};


Overlays.prototype._updateOverlayScale = function(overlay, viewbox) {
  var shouldScale = overlay.scale,
      minScale,
      maxScale,
      htmlContainer = overlay.htmlContainer;

  var scale, transform = '';

  if (shouldScale !== true) {

    if (shouldScale === false) {
      minScale = 1;
      maxScale = 1;
    } else {
      minScale = shouldScale.min;
      maxScale = shouldScale.max;
    }

    if (isDefined(minScale) && viewbox.scale < minScale) {
      scale = (1 / viewbox.scale || 1) * minScale;
    }

    if (isDefined(maxScale) && viewbox.scale > maxScale) {
      scale = (1 / viewbox.scale || 1) * maxScale;
    }
  }

  if (isDefined(scale)) {
    transform = 'scale(' + scale + ',' + scale + ')';
  }

  setTransform(htmlContainer, transform);
};


Overlays.prototype._updateOverlaysVisibilty = function(viewbox) {

  var self = this;

  forEach(this._overlays, function(overlay) {
    self._updateOverlayVisibilty(overlay, viewbox);
  });
};


Overlays.prototype._init = function() {

  var eventBus = this._eventBus;

  var self = this;


  // scroll/zoom integration

  function updateViewbox(viewbox) {
    self._updateRoot(viewbox);
    self._updateOverlaysVisibilty(viewbox);

    self.show();
  }

  eventBus.on('canvas.viewbox.changing', function(event) {
    self.hide();
  });

  eventBus.on('canvas.viewbox.changed', function(event) {
    updateViewbox(event.viewbox);
  });


  // remove integration

  eventBus.on([ 'shape.remove', 'connection.remove' ], function(e) {
    var element = e.element;
    var overlays = self.get({ element: element });

    forEach(overlays, function(o) {
      self.remove(o.id);
    });

    var container = self._getOverlayContainer(element);

    if (container) {
      remove$1(container.html);
      var i = self._overlayContainers.indexOf(container);
      if (i !== -1) {
        self._overlayContainers.splice(i, 1);
      }
    }
  });


  // move integration

  eventBus.on('element.changed', LOW_PRIORITY$2, function(e) {
    var element = e.element;

    var container = self._getOverlayContainer(element, true);

    if (container) {
      forEach(container.overlays, function(overlay) {
        self._updateOverlay(overlay);
      });

      self._updateOverlayContainer(container);
    }
  });


  // marker integration, simply add them on the overlays as classes, too.

  eventBus.on('element.marker.update', function(e) {
    var container = self._getOverlayContainer(e.element, true);
    if (container) {
      classes$1(container.html)[e.add ? 'add' : 'remove'](e.marker);
    }
  });


  // clear overlays with diagram

  eventBus.on('diagram.clear', this.clear, this);
};



// helpers /////////////////////////////

function createRoot(parentNode) {
  var root = domify(
    '<div class="djs-overlay-container" style="position: absolute; width: 0; height: 0;" />'
  );

  parentNode.insertBefore(root, parentNode.firstChild);

  return root;
}

function setPosition(el, x, y) {
  assign(el.style, { left: x + 'px', top: y + 'px' });
}

function setVisible(el, visible) {
  el.style.display = visible === false ? 'none' : '';
}

function setTransform(el, transform) {

  el.style['transform-origin'] = 'top left';

  [ '', '-ms-', '-webkit-' ].forEach(function(prefix) {
    el.style[prefix + 'transform'] = transform;
  });
}

var OverlaysModule = {
  __init__: [ 'overlays' ],
  overlays: [ 'type', Overlays ]
};

var CLASS_PATTERN = /^class /;

function isClass(fn) {
  return CLASS_PATTERN.test(fn.toString());
}

function isArray$1(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function annotate() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length === 1 && isArray$1(args[0])) {
    args = args[0];
  }

  var fn = args.pop();

  fn.$inject = args;

  return fn;
}


// Current limitations:
// - can't put into "function arg" comments
// function /* (no parenthesis like this) */ (){}
// function abc( /* xx (no parenthesis like this) */ a, b) {}
//
// Just put the comment before function or inside:
// /* (((this is fine))) */ function(a, b) {}
// function abc(a) { /* (((this is fine))) */}
//
// - can't reliably auto-annotate constructor; we'll match the
// first constructor(...) pattern found which may be the one
// of a nested class, too.

var CONSTRUCTOR_ARGS = /constructor\s*[^(]*\(\s*([^)]*)\)/m;
var FN_ARGS = /^(?:async )?(?:function\s*)?[^(]*\(\s*([^)]*)\)/m;
var FN_ARG = /\/\*([^*]*)\*\//m;

function parseAnnotations(fn) {

  if (typeof fn !== 'function') {
    throw new Error('Cannot annotate "' + fn + '". Expected a function!');
  }

  var match = fn.toString().match(isClass(fn) ? CONSTRUCTOR_ARGS : FN_ARGS);

  // may parse class without constructor
  if (!match) {
    return [];
  }

  return match[1] && match[1].split(',').map(function(arg) {
    match = arg.match(FN_ARG);
    return match ? match[1].trim() : arg.trim();
  }) || [];
}

function Module() {
  var providers = [];

  this.factory = function(name, factory) {
    providers.push([name, 'factory', factory]);
    return this;
  };

  this.value = function(name, value) {
    providers.push([name, 'value', value]);
    return this;
  };

  this.type = function(name, type) {
    providers.push([name, 'type', type]);
    return this;
  };

  this.forEach = function(iterator) {
    providers.forEach(iterator);
  };

}

function Injector(modules, parent) {
  parent = parent || {
    get: function(name, strict) {
      currentlyResolving.push(name);

      if (strict === false) {
        return null;
      } else {
        throw error('No provider for "' + name + '"!');
      }
    }
  };

  var currentlyResolving = [];
  var providers = this._providers = Object.create(parent._providers || null);
  var instances = this._instances = Object.create(null);

  var self = instances.injector = this;

  var error = function(msg) {
    var stack = currentlyResolving.join(' -> ');
    currentlyResolving.length = 0;
    return new Error(stack ? msg + ' (Resolving: ' + stack + ')' : msg);
  };

  /**
   * Return a named service.
   *
   * @param {String} name
   * @param {Boolean} [strict=true] if false, resolve missing services to null
   *
   * @return {Object}
   */
  var get = function(name, strict) {
    if (!providers[name] && name.indexOf('.') !== -1) {
      var parts = name.split('.');
      var pivot = get(parts.shift());

      while (parts.length) {
        pivot = pivot[parts.shift()];
      }

      return pivot;
    }

    if (hasOwnProp(instances, name)) {
      return instances[name];
    }

    if (hasOwnProp(providers, name)) {
      if (currentlyResolving.indexOf(name) !== -1) {
        currentlyResolving.push(name);
        throw error('Cannot resolve circular dependency!');
      }

      currentlyResolving.push(name);
      instances[name] = providers[name][0](providers[name][1]);
      currentlyResolving.pop();

      return instances[name];
    }

    return parent.get(name, strict);
  };

  var fnDef = function(fn, locals) {

    if (typeof locals === 'undefined') {
      locals = {};
    }

    if (typeof fn !== 'function') {
      if (isArray$1(fn)) {
        fn = annotate(fn.slice());
      } else {
        throw new Error('Cannot invoke "' + fn + '". Expected a function!');
      }
    }

    var inject = fn.$inject || parseAnnotations(fn);
    var dependencies = inject.map(function(dep) {
      if (hasOwnProp(locals, dep)) {
        return locals[dep];
      } else {
        return get(dep);
      }
    });

    return {
      fn: fn,
      dependencies: dependencies
    };
  };

  var instantiate = function(Type) {
    var def = fnDef(Type);

    var fn = def.fn,
        dependencies = def.dependencies;

    // instantiate var args constructor
    var Constructor = Function.prototype.bind.apply(fn, [ null ].concat(dependencies));

    return new Constructor();
  };

  var invoke = function(func, context, locals) {
    var def = fnDef(func, locals);

    var fn = def.fn,
        dependencies = def.dependencies;

    return fn.apply(context, dependencies);
  };


  var createPrivateInjectorFactory = function(privateChildInjector) {
    return annotate(function(key) {
      return privateChildInjector.get(key);
    });
  };

  var createChild = function(modules, forceNewInstances) {
    if (forceNewInstances && forceNewInstances.length) {
      var fromParentModule = Object.create(null);
      var matchedScopes = Object.create(null);

      var privateInjectorsCache = [];
      var privateChildInjectors = [];
      var privateChildFactories = [];

      var provider;
      var cacheIdx;
      var privateChildInjector;
      var privateChildInjectorFactory;
      for (var name in providers) {
        provider = providers[name];

        if (forceNewInstances.indexOf(name) !== -1) {
          if (provider[2] === 'private') {
            cacheIdx = privateInjectorsCache.indexOf(provider[3]);
            if (cacheIdx === -1) {
              privateChildInjector = provider[3].createChild([], forceNewInstances);
              privateChildInjectorFactory = createPrivateInjectorFactory(privateChildInjector);
              privateInjectorsCache.push(provider[3]);
              privateChildInjectors.push(privateChildInjector);
              privateChildFactories.push(privateChildInjectorFactory);
              fromParentModule[name] = [privateChildInjectorFactory, name, 'private', privateChildInjector];
            } else {
              fromParentModule[name] = [privateChildFactories[cacheIdx], name, 'private', privateChildInjectors[cacheIdx]];
            }
          } else {
            fromParentModule[name] = [provider[2], provider[1]];
          }
          matchedScopes[name] = true;
        }

        if ((provider[2] === 'factory' || provider[2] === 'type') && provider[1].$scope) {
          /* jshint -W083 */
          forceNewInstances.forEach(function(scope) {
            if (provider[1].$scope.indexOf(scope) !== -1) {
              fromParentModule[name] = [provider[2], provider[1]];
              matchedScopes[scope] = true;
            }
          });
        }
      }

      forceNewInstances.forEach(function(scope) {
        if (!matchedScopes[scope]) {
          throw new Error('No provider for "' + scope + '". Cannot use provider from the parent!');
        }
      });

      modules.unshift(fromParentModule);
    }

    return new Injector(modules, self);
  };

  var factoryMap = {
    factory: invoke,
    type: instantiate,
    value: function(value) {
      return value;
    }
  };

  modules.forEach(function(module) {

    function arrayUnwrap(type, value) {
      if (type !== 'value' && isArray$1(value)) {
        value = annotate(value.slice());
      }

      return value;
    }

    // TODO(vojta): handle wrong inputs (modules)
    if (module instanceof Module) {
      module.forEach(function(provider) {
        var name = provider[0];
        var type = provider[1];
        var value = provider[2];

        providers[name] = [factoryMap[type], arrayUnwrap(type, value), type];
      });
    } else if (typeof module === 'object') {
      if (module.__exports__) {
        var clonedModule = Object.keys(module).reduce(function(m, key) {
          if (key.substring(0, 2) !== '__') {
            m[key] = module[key];
          }
          return m;
        }, Object.create(null));

        var privateInjector = new Injector((module.__modules__ || []).concat([clonedModule]), self);
        var getFromPrivateInjector = annotate(function(key) {
          return privateInjector.get(key);
        });
        module.__exports__.forEach(function(key) {
          providers[key] = [getFromPrivateInjector, key, 'private', privateInjector];
        });
      } else {
        Object.keys(module).forEach(function(name) {
          if (module[name][2] === 'private') {
            providers[name] = module[name];
            return;
          }

          var type = module[name][0];
          var value = module[name][1];

          providers[name] = [factoryMap[type], arrayUnwrap(type, value), type];
        });
      }
    }
  });

  // public API
  this.get = get;
  this.invoke = invoke;
  this.instantiate = instantiate;
  this.createChild = createChild;
}

// apply default renderer with lowest possible priority
// so that it only kicks in if noone else could render
var DEFAULT_RENDER_PRIORITY$1 = 1;

/**
 * The default renderer used for shapes and connections.
 *
 * @param {EventBus} eventBus
 * @param {Styles} styles
 */
function DefaultRenderer(eventBus, styles) {

  //
  BaseRenderer.call(this, eventBus, DEFAULT_RENDER_PRIORITY$1);

  this.CONNECTION_STYLE = styles.style([ 'no-fill' ], { strokeWidth: 5, stroke: 'fuchsia' });
  this.SHAPE_STYLE = styles.style({ fill: 'white', stroke: 'fuchsia', strokeWidth: 2 });
  this.FRAME_STYLE = styles.style([ 'no-fill' ], { stroke: 'fuchsia', strokeDasharray: 4, strokeWidth: 2 });
}

inherits_browser(DefaultRenderer, BaseRenderer);


DefaultRenderer.prototype.canRender = function() {
  return true;
};

DefaultRenderer.prototype.drawShape = function drawShape(visuals, element) {
  var rect = create('rect');

  attr(rect, {
    x: 0,
    y: 0,
    width: element.width || 0,
    height: element.height || 0
  });

  if (isFrameElement$1(element)) {
    attr(rect, this.FRAME_STYLE);
  } else {
    attr(rect, this.SHAPE_STYLE);
  }

  append(visuals, rect);

  return rect;
};

DefaultRenderer.prototype.drawConnection = function drawConnection(visuals, connection) {

  var line = createLine(connection.waypoints, this.CONNECTION_STYLE);
  append(visuals, line);

  return line;
};

DefaultRenderer.prototype.getShapePath = function getShapePath(shape) {

  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;

  var shapePath = [
    ['M', x, y],
    ['l', width, 0],
    ['l', 0, height],
    ['l', -width, 0],
    ['z']
  ];

  return componentsToPath(shapePath);
};

DefaultRenderer.prototype.getConnectionPath = function getConnectionPath(connection) {
  var waypoints = connection.waypoints;

  var idx, point, connectionPath = [];

  for (idx = 0; (point = waypoints[idx]); idx++) {

    // take invisible docking into account
    // when creating the path
    point = point.original || point;

    connectionPath.push([ idx === 0 ? 'M' : 'L', point.x, point.y ]);
  }

  return componentsToPath(connectionPath);
};


DefaultRenderer.$inject = [ 'eventBus', 'styles' ];

/**
 * A component that manages shape styles
 */
function Styles() {

  var defaultTraits = {

    'no-fill': {
      fill: 'none'
    },
    'no-border': {
      strokeOpacity: 0.0
    },
    'no-events': {
      pointerEvents: 'none'
    }
  };

  var self = this;

  /**
   * Builds a style definition from a className, a list of traits and an object of additional attributes.
   *
   * @param  {string} className
   * @param  {Array<string>} traits
   * @param  {Object} additionalAttrs
   *
   * @return {Object} the style defintion
   */
  this.cls = function(className, traits, additionalAttrs) {
    var attrs = this.style(traits, additionalAttrs);

    return assign(attrs, { 'class': className });
  };

  /**
   * Builds a style definition from a list of traits and an object of additional attributes.
   *
   * @param  {Array<string>} traits
   * @param  {Object} additionalAttrs
   *
   * @return {Object} the style defintion
   */
  this.style = function(traits, additionalAttrs) {

    if (!isArray(traits) && !additionalAttrs) {
      additionalAttrs = traits;
      traits = [];
    }

    var attrs = reduce(traits, function(attrs, t) {
      return assign(attrs, defaultTraits[t] || {});
    }, {});

    return additionalAttrs ? assign(attrs, additionalAttrs) : attrs;
  };

  this.computeStyle = function(custom, traits, defaultStyles) {
    if (!isArray(traits)) {
      defaultStyles = traits;
      traits = [];
    }

    return self.style(traits || [], assign({}, defaultStyles, custom || {}));
  };
}

var DrawModule$1 = {
  __init__: [ 'defaultRenderer' ],
  defaultRenderer: [ 'type', DefaultRenderer ],
  styles: [ 'type', Styles ]
};

/**
 * Failsafe remove an element from a collection
 *
 * @param  {Array<Object>} [collection]
 * @param  {Object} [element]
 *
 * @return {number} the previous index of the element
 */
function remove$2(collection, element) {

  if (!collection || !element) {
    return -1;
  }

  var idx = collection.indexOf(element);

  if (idx !== -1) {
    collection.splice(idx, 1);
  }

  return idx;
}

/**
 * Fail save add an element to the given connection, ensuring
 * it does not yet exist.
 *
 * @param {Array<Object>} collection
 * @param {Object} element
 * @param {number} idx
 */
function add(collection, element, idx) {

  if (!collection || !element) {
    return;
  }

  if (typeof idx !== 'number') {
    idx = -1;
  }

  var currentIdx = collection.indexOf(element);

  if (currentIdx !== -1) {

    if (currentIdx === idx) {

      // nothing to do, position has not changed
      return;
    } else {

      if (idx !== -1) {

        // remove from current position
        collection.splice(currentIdx, 1);
      } else {

        // already exists in collection
        return;
      }
    }
  }

  if (idx !== -1) {

    // insert at specified position
    collection.splice(idx, 0, element);
  } else {

    // push to end
    collection.push(element);
  }
}

function round(number, resolution) {
  return Math.round(number * resolution) / resolution;
}

function ensurePx(number) {
  return isNumber(number) ? number + 'px' : number;
}

/**
 * Creates a HTML container element for a SVG element with
 * the given configuration
 *
 * @param  {Object} options
 * @return {HTMLElement} the container element
 */
function createContainer(options) {

  options = assign({}, { width: '100%', height: '100%' }, options);

  var container = options.container || document.body;

  // create a <div> around the svg element with the respective size
  // this way we can always get the correct container size
  // (this is impossible for <svg> elements at the moment)
  var parent = document.createElement('div');
  parent.setAttribute('class', 'djs-container');

  assign(parent.style, {
    position: 'relative',
    overflow: 'hidden',
    width: ensurePx(options.width),
    height: ensurePx(options.height)
  });

  container.appendChild(parent);

  return parent;
}

function createGroup(parent, cls, childIndex) {
  var group = create('g');
  classes(group).add(cls);

  var index = childIndex !== undefined ? childIndex : parent.childNodes.length - 1;

  // must ensure second argument is node or _null_
  // cf. https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  parent.insertBefore(group, parent.childNodes[index] || null);

  return group;
}

var BASE_LAYER = 'base';


var REQUIRED_MODEL_ATTRS = {
  shape: [ 'x', 'y', 'width', 'height' ],
  connection: [ 'waypoints' ]
};

/**
 * The main drawing canvas.
 *
 * @class
 * @constructor
 *
 * @emits Canvas#canvas.init
 *
 * @param {Object} config
 * @param {EventBus} eventBus
 * @param {GraphicsFactory} graphicsFactory
 * @param {ElementRegistry} elementRegistry
 */
function Canvas(config, eventBus, graphicsFactory, elementRegistry) {

  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
  this._graphicsFactory = graphicsFactory;

  this._init(config || {});
}

Canvas.$inject = [
  'config.canvas',
  'eventBus',
  'graphicsFactory',
  'elementRegistry'
];


Canvas.prototype._init = function(config) {

  var eventBus = this._eventBus;

  // Creates a <svg> element that is wrapped into a <div>.
  // This way we are always able to correctly figure out the size of the svg element
  // by querying the parent node.
  //
  // (It is not possible to get the size of a svg element cross browser @ 2014-04-01)
  //
  // <div class="djs-container" style="width: {desired-width}, height: {desired-height}">
  //   <svg width="100%" height="100%">
  //    ...
  //   </svg>
  // </div>

  // html container
  var container = this._container = createContainer(config);

  var svg = this._svg = create('svg');
  attr(svg, { width: '100%', height: '100%' });

  append(container, svg);

  var viewport = this._viewport = createGroup(svg, 'viewport');

  this._layers = {};

  // debounce canvas.viewbox.changed events
  // for smoother diagram interaction
  if (config.deferUpdate !== false) {
    this._viewboxChanged = debounce(bind(this._viewboxChanged, this), 300);
  }

  eventBus.on('diagram.init', function() {

    /**
     * An event indicating that the canvas is ready to be drawn on.
     *
     * @memberOf Canvas
     *
     * @event canvas.init
     *
     * @type {Object}
     * @property {SVGElement} svg the created svg element
     * @property {SVGElement} viewport the direct parent of diagram elements and shapes
     */
    eventBus.fire('canvas.init', {
      svg: svg,
      viewport: viewport
    });

  }, this);

  // reset viewbox on shape changes to
  // recompute the viewbox
  eventBus.on([
    'shape.added',
    'connection.added',
    'shape.removed',
    'connection.removed',
    'elements.changed'
  ], function() {
    delete this._cachedViewbox;
  }, this);

  eventBus.on('diagram.destroy', 500, this._destroy, this);
  eventBus.on('diagram.clear', 500, this._clear, this);
};

Canvas.prototype._destroy = function(emit) {
  this._eventBus.fire('canvas.destroy', {
    svg: this._svg,
    viewport: this._viewport
  });

  var parent = this._container.parentNode;

  if (parent) {
    parent.removeChild(this._container);
  }

  delete this._svg;
  delete this._container;
  delete this._layers;
  delete this._rootElement;
  delete this._viewport;
};

Canvas.prototype._clear = function() {

  var self = this;

  var allElements = this._elementRegistry.getAll();

  // remove all elements
  allElements.forEach(function(element) {
    var type = getType(element);

    if (type === 'root') {
      self.setRootElement(null, true);
    } else {
      self._removeElement(element, type);
    }
  });

  // force recomputation of view box
  delete this._cachedViewbox;
};

/**
 * Returns the default layer on which
 * all elements are drawn.
 *
 * @returns {SVGElement}
 */
Canvas.prototype.getDefaultLayer = function() {
  return this.getLayer(BASE_LAYER, 0);
};

/**
 * Returns a layer that is used to draw elements
 * or annotations on it.
 *
 * Non-existing layers retrieved through this method
 * will be created. During creation, the optional index
 * may be used to create layers below or above existing layers.
 * A layer with a certain index is always created above all
 * existing layers with the same index.
 *
 * @param {string} name
 * @param {number} index
 *
 * @returns {SVGElement}
 */
Canvas.prototype.getLayer = function(name, index) {

  if (!name) {
    throw new Error('must specify a name');
  }

  var layer = this._layers[name];

  if (!layer) {
    layer = this._layers[name] = this._createLayer(name, index);
  }

  // throw an error if layer creation / retrival is
  // requested on different index
  if (typeof index !== 'undefined' && layer.index !== index) {
    throw new Error('layer <' + name + '> already created at index <' + index + '>');
  }

  return layer.group;
};

/**
 * Creates a given layer and returns it.
 *
 * @param {string} name
 * @param {number} [index=0]
 *
 * @return {Object} layer descriptor with { index, group: SVGGroup }
 */
Canvas.prototype._createLayer = function(name, index) {

  if (!index) {
    index = 0;
  }

  var childIndex = reduce(this._layers, function(childIndex, layer) {
    if (index >= layer.index) {
      childIndex++;
    }

    return childIndex;
  }, 0);

  return {
    group: createGroup(this._viewport, 'layer-' + name, childIndex),
    index: index
  };

};

/**
 * Returns the html element that encloses the
 * drawing canvas.
 *
 * @return {DOMNode}
 */
Canvas.prototype.getContainer = function() {
  return this._container;
};


// markers //////////////////////

Canvas.prototype._updateMarker = function(element, marker, add) {
  var container;

  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  // we need to access all
  container = this._elementRegistry._elements[element.id];

  if (!container) {
    return;
  }

  forEach([ container.gfx, container.secondaryGfx ], function(gfx) {
    if (gfx) {

      // invoke either addClass or removeClass based on mode
      if (add) {
        classes(gfx).add(marker);
      } else {
        classes(gfx).remove(marker);
      }
    }
  });

  /**
   * An event indicating that a marker has been updated for an element
   *
   * @event element.marker.update
   * @type {Object}
   * @property {djs.model.Element} element the shape
   * @property {Object} gfx the graphical representation of the shape
   * @property {string} marker
   * @property {boolean} add true if the marker was added, false if it got removed
   */
  this._eventBus.fire('element.marker.update', { element: element, gfx: container.gfx, marker: marker, add: !!add });
};


/**
 * Adds a marker to an element (basically a css class).
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @example
 * canvas.addMarker('foo', 'some-marker');
 *
 * var fooGfx = canvas.getGraphics('foo');
 *
 * fooGfx; // <g class="... some-marker"> ... </g>
 *
 * @param {string|djs.model.Base} element
 * @param {string} marker
 */
Canvas.prototype.addMarker = function(element, marker) {
  this._updateMarker(element, marker, true);
};


/**
 * Remove a marker from an element.
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.removeMarker = function(element, marker) {
  this._updateMarker(element, marker, false);
};

/**
 * Check the existence of a marker on element.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.hasMarker = function(element, marker) {
  if (!element.id) {
    element = this._elementRegistry.get(element);
  }

  var gfx = this.getGraphics(element);

  return classes(gfx).has(marker);
};

/**
 * Toggles a marker on an element.
 *
 * Fires the element.marker.update event, making it possible to
 * integrate extension into the marker life-cycle, too.
 *
 * @param  {string|djs.model.Base} element
 * @param  {string} marker
 */
Canvas.prototype.toggleMarker = function(element, marker) {
  if (this.hasMarker(element, marker)) {
    this.removeMarker(element, marker);
  } else {
    this.addMarker(element, marker);
  }
};

Canvas.prototype.getRootElement = function() {
  if (!this._rootElement) {
    this.setRootElement({ id: '__implicitroot', children: [] });
  }

  return this._rootElement;
};



// root element handling //////////////////////

/**
 * Sets a given element as the new root element for the canvas
 * and returns the new root element.
 *
 * @param {Object|djs.model.Root} element
 * @param {boolean} [override] whether to override the current root element, if any
 *
 * @return {Object|djs.model.Root} new root element
 */
Canvas.prototype.setRootElement = function(element, override) {

  if (element) {
    this._ensureValid('root', element);
  }

  var currentRoot = this._rootElement,
      elementRegistry = this._elementRegistry,
      eventBus = this._eventBus;

  if (currentRoot) {
    if (!override) {
      throw new Error('rootElement already set, need to specify override');
    }

    // simulate element remove event sequence
    eventBus.fire('root.remove', { element: currentRoot });
    eventBus.fire('root.removed', { element: currentRoot });

    elementRegistry.remove(currentRoot);
  }

  if (element) {
    var gfx = this.getDefaultLayer();

    // resemble element add event sequence
    eventBus.fire('root.add', { element: element });

    elementRegistry.add(element, gfx, this._svg);

    eventBus.fire('root.added', { element: element, gfx: gfx });
  }

  this._rootElement = element;

  return element;
};



// add functionality //////////////////////

Canvas.prototype._ensureValid = function(type, element) {
  if (!element.id) {
    throw new Error('element must have an id');
  }

  if (this._elementRegistry.get(element.id)) {
    throw new Error('element with id ' + element.id + ' already exists');
  }

  var requiredAttrs = REQUIRED_MODEL_ATTRS[type];

  var valid = every(requiredAttrs, function(attr) {
    return typeof element[attr] !== 'undefined';
  });

  if (!valid) {
    throw new Error(
      'must supply { ' + requiredAttrs.join(', ') + ' } with ' + type);
  }
};

Canvas.prototype._setParent = function(element, parent, parentIndex) {
  add(parent.children, element, parentIndex);
  element.parent = parent;
};

/**
 * Adds an element to the canvas.
 *
 * This wires the parent <-> child relationship between the element and
 * a explicitly specified parent or an implicit root element.
 *
 * During add it emits the events
 *
 *  * <{type}.add> (element, parent)
 *  * <{type}.added> (element, gfx)
 *
 * Extensions may hook into these events to perform their magic.
 *
 * @param {string} type
 * @param {Object|djs.model.Base} element
 * @param {Object|djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {Object|djs.model.Base} the added element
 */
Canvas.prototype._addElement = function(type, element, parent, parentIndex) {

  parent = parent || this.getRootElement();

  var eventBus = this._eventBus,
      graphicsFactory = this._graphicsFactory;

  this._ensureValid(type, element);

  eventBus.fire(type + '.add', { element: element, parent: parent });

  this._setParent(element, parent, parentIndex);

  // create graphics
  var gfx = graphicsFactory.create(type, element, parentIndex);

  this._elementRegistry.add(element, gfx);

  // update its visual
  graphicsFactory.update(type, element, gfx);

  eventBus.fire(type + '.added', { element: element, gfx: gfx });

  return element;
};

/**
 * Adds a shape to the canvas
 *
 * @param {Object|djs.model.Shape} shape to add to the diagram
 * @param {djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {djs.model.Shape} the added shape
 */
Canvas.prototype.addShape = function(shape, parent, parentIndex) {
  return this._addElement('shape', shape, parent, parentIndex);
};

/**
 * Adds a connection to the canvas
 *
 * @param {Object|djs.model.Connection} connection to add to the diagram
 * @param {djs.model.Base} [parent]
 * @param {number} [parentIndex]
 *
 * @return {djs.model.Connection} the added connection
 */
Canvas.prototype.addConnection = function(connection, parent, parentIndex) {
  return this._addElement('connection', connection, parent, parentIndex);
};


/**
 * Internal remove element
 */
Canvas.prototype._removeElement = function(element, type) {

  var elementRegistry = this._elementRegistry,
      graphicsFactory = this._graphicsFactory,
      eventBus = this._eventBus;

  element = elementRegistry.get(element.id || element);

  if (!element) {

    // element was removed already
    return;
  }

  eventBus.fire(type + '.remove', { element: element });

  graphicsFactory.remove(element);

  // unset parent <-> child relationship
  remove$2(element.parent && element.parent.children, element);
  element.parent = null;

  eventBus.fire(type + '.removed', { element: element });

  elementRegistry.remove(element);

  return element;
};


/**
 * Removes a shape from the canvas
 *
 * @param {string|djs.model.Shape} shape or shape id to be removed
 *
 * @return {djs.model.Shape} the removed shape
 */
Canvas.prototype.removeShape = function(shape) {

  /**
   * An event indicating that a shape is about to be removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event shape.remove
   * @type {Object}
   * @property {djs.model.Shape} element the shape descriptor
   * @property {Object} gfx the graphical representation of the shape
   */

  /**
   * An event indicating that a shape has been removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event shape.removed
   * @type {Object}
   * @property {djs.model.Shape} element the shape descriptor
   * @property {Object} gfx the graphical representation of the shape
   */
  return this._removeElement(shape, 'shape');
};


/**
 * Removes a connection from the canvas
 *
 * @param {string|djs.model.Connection} connection or connection id to be removed
 *
 * @return {djs.model.Connection} the removed connection
 */
Canvas.prototype.removeConnection = function(connection) {

  /**
   * An event indicating that a connection is about to be removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event connection.remove
   * @type {Object}
   * @property {djs.model.Connection} element the connection descriptor
   * @property {Object} gfx the graphical representation of the connection
   */

  /**
   * An event indicating that a connection has been removed from the canvas.
   *
   * @memberOf Canvas
   *
   * @event connection.removed
   * @type {Object}
   * @property {djs.model.Connection} element the connection descriptor
   * @property {Object} gfx the graphical representation of the connection
   */
  return this._removeElement(connection, 'connection');
};


/**
 * Return the graphical object underlaying a certain diagram element
 *
 * @param {string|djs.model.Base} element descriptor of the element
 * @param {boolean} [secondary=false] whether to return the secondary connected element
 *
 * @return {SVGElement}
 */
Canvas.prototype.getGraphics = function(element, secondary) {
  return this._elementRegistry.getGraphics(element, secondary);
};


/**
 * Perform a viewbox update via a given change function.
 *
 * @param {Function} changeFn
 */
Canvas.prototype._changeViewbox = function(changeFn) {

  // notify others of the upcoming viewbox change
  this._eventBus.fire('canvas.viewbox.changing');

  // perform actual change
  changeFn.apply(this);

  // reset the cached viewbox so that
  // a new get operation on viewbox or zoom
  // triggers a viewbox re-computation
  this._cachedViewbox = null;

  // notify others of the change; this step
  // may or may not be debounced
  this._viewboxChanged();
};

Canvas.prototype._viewboxChanged = function() {
  this._eventBus.fire('canvas.viewbox.changed', { viewbox: this.viewbox() });
};


/**
 * Gets or sets the view box of the canvas, i.e. the
 * area that is currently displayed.
 *
 * The getter may return a cached viewbox (if it is currently
 * changing). To force a recomputation, pass `false` as the first argument.
 *
 * @example
 *
 * canvas.viewbox({ x: 100, y: 100, width: 500, height: 500 })
 *
 * // sets the visible area of the diagram to (100|100) -> (600|100)
 * // and and scales it according to the diagram width
 *
 * var viewbox = canvas.viewbox(); // pass `false` to force recomputing the box.
 *
 * console.log(viewbox);
 * // {
 * //   inner: Dimensions,
 * //   outer: Dimensions,
 * //   scale,
 * //   x, y,
 * //   width, height
 * // }
 *
 * // if the current diagram is zoomed and scrolled, you may reset it to the
 * // default zoom via this method, too:
 *
 * var zoomedAndScrolledViewbox = canvas.viewbox();
 *
 * canvas.viewbox({
 *   x: 0,
 *   y: 0,
 *   width: zoomedAndScrolledViewbox.outer.width,
 *   height: zoomedAndScrolledViewbox.outer.height
 * });
 *
 * @param  {Object} [box] the new view box to set
 * @param  {number} box.x the top left X coordinate of the canvas visible in view box
 * @param  {number} box.y the top left Y coordinate of the canvas visible in view box
 * @param  {number} box.width the visible width
 * @param  {number} box.height
 *
 * @return {Object} the current view box
 */
Canvas.prototype.viewbox = function(box) {

  if (box === undefined && this._cachedViewbox) {
    return this._cachedViewbox;
  }

  var viewport = this._viewport,
      innerBox,
      outerBox = this.getSize(),
      matrix,
      transform$1,
      scale,
      x, y;

  if (!box) {

    // compute the inner box based on the
    // diagrams default layer. This allows us to exclude
    // external components, such as overlays
    innerBox = this.getDefaultLayer().getBBox();

    transform$1 = transform(viewport);
    matrix = transform$1 ? transform$1.matrix : createMatrix();
    scale = round(matrix.a, 1000);

    x = round(-matrix.e || 0, 1000);
    y = round(-matrix.f || 0, 1000);

    box = this._cachedViewbox = {
      x: x ? x / scale : 0,
      y: y ? y / scale : 0,
      width: outerBox.width / scale,
      height: outerBox.height / scale,
      scale: scale,
      inner: {
        width: innerBox.width,
        height: innerBox.height,
        x: innerBox.x,
        y: innerBox.y
      },
      outer: outerBox
    };

    return box;
  } else {

    this._changeViewbox(function() {
      scale = Math.min(outerBox.width / box.width, outerBox.height / box.height);

      var matrix = this._svg.createSVGMatrix()
        .scale(scale)
        .translate(-box.x, -box.y);

      transform(viewport, matrix);
    });
  }

  return box;
};


/**
 * Gets or sets the scroll of the canvas.
 *
 * @param {Object} [delta] the new scroll to apply.
 *
 * @param {number} [delta.dx]
 * @param {number} [delta.dy]
 */
Canvas.prototype.scroll = function(delta) {

  var node = this._viewport;
  var matrix = node.getCTM();

  if (delta) {
    this._changeViewbox(function() {
      delta = assign({ dx: 0, dy: 0 }, delta || {});

      matrix = this._svg.createSVGMatrix().translate(delta.dx, delta.dy).multiply(matrix);

      setCTM(node, matrix);
    });
  }

  return { x: matrix.e, y: matrix.f };
};


/**
 * Gets or sets the current zoom of the canvas, optionally zooming
 * to the specified position.
 *
 * The getter may return a cached zoom level. Call it with `false` as
 * the first argument to force recomputation of the current level.
 *
 * @param {string|number} [newScale] the new zoom level, either a number, i.e. 0.9,
 *                                   or `fit-viewport` to adjust the size to fit the current viewport
 * @param {string|Point} [center] the reference point { x: .., y: ..} to zoom to, 'auto' to zoom into mid or null
 *
 * @return {number} the current scale
 */
Canvas.prototype.zoom = function(newScale, center) {

  if (!newScale) {
    return this.viewbox(newScale).scale;
  }

  if (newScale === 'fit-viewport') {
    return this._fitViewport(center);
  }

  var outer,
      matrix;

  this._changeViewbox(function() {

    if (typeof center !== 'object') {
      outer = this.viewbox().outer;

      center = {
        x: outer.width / 2,
        y: outer.height / 2
      };
    }

    matrix = this._setZoom(newScale, center);
  });

  return round(matrix.a, 1000);
};

function setCTM(node, m) {
  var mstr = 'matrix(' + m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.e + ',' + m.f + ')';
  node.setAttribute('transform', mstr);
}

Canvas.prototype._fitViewport = function(center) {

  var vbox = this.viewbox(),
      outer = vbox.outer,
      inner = vbox.inner,
      newScale,
      newViewbox;

  // display the complete diagram without zooming in.
  // instead of relying on internal zoom, we perform a
  // hard reset on the canvas viewbox to realize this
  //
  // if diagram does not need to be zoomed in, we focus it around
  // the diagram origin instead

  if (inner.x >= 0 &&
      inner.y >= 0 &&
      inner.x + inner.width <= outer.width &&
      inner.y + inner.height <= outer.height &&
      !center) {

    newViewbox = {
      x: 0,
      y: 0,
      width: Math.max(inner.width + inner.x, outer.width),
      height: Math.max(inner.height + inner.y, outer.height)
    };
  } else {

    newScale = Math.min(1, outer.width / inner.width, outer.height / inner.height);
    newViewbox = {
      x: inner.x + (center ? inner.width / 2 - outer.width / newScale / 2 : 0),
      y: inner.y + (center ? inner.height / 2 - outer.height / newScale / 2 : 0),
      width: outer.width / newScale,
      height: outer.height / newScale
    };
  }

  this.viewbox(newViewbox);

  return this.viewbox(false).scale;
};


Canvas.prototype._setZoom = function(scale, center) {

  var svg = this._svg,
      viewport = this._viewport;

  var matrix = svg.createSVGMatrix();
  var point = svg.createSVGPoint();

  var centerPoint,
      originalPoint,
      currentMatrix,
      scaleMatrix,
      newMatrix;

  currentMatrix = viewport.getCTM();

  var currentScale = currentMatrix.a;

  if (center) {
    centerPoint = assign(point, center);

    // revert applied viewport transformations
    originalPoint = centerPoint.matrixTransform(currentMatrix.inverse());

    // create scale matrix
    scaleMatrix = matrix
      .translate(originalPoint.x, originalPoint.y)
      .scale(1 / currentScale * scale)
      .translate(-originalPoint.x, -originalPoint.y);

    newMatrix = currentMatrix.multiply(scaleMatrix);
  } else {
    newMatrix = matrix.scale(scale);
  }

  setCTM(this._viewport, newMatrix);

  return newMatrix;
};


/**
 * Returns the size of the canvas
 *
 * @return {Dimensions}
 */
Canvas.prototype.getSize = function() {
  return {
    width: this._container.clientWidth,
    height: this._container.clientHeight
  };
};


/**
 * Return the absolute bounding box for the given element
 *
 * The absolute bounding box may be used to display overlays in the
 * callers (browser) coordinate system rather than the zoomed in/out
 * canvas coordinates.
 *
 * @param  {ElementDescriptor} element
 * @return {Bounds} the absolute bounding box
 */
Canvas.prototype.getAbsoluteBBox = function(element) {
  var vbox = this.viewbox();
  var bbox;

  // connection
  // use svg bbox
  if (element.waypoints) {
    var gfx = this.getGraphics(element);

    bbox = gfx.getBBox();
  }

  // shapes
  // use data
  else {
    bbox = element;
  }

  var x = bbox.x * vbox.scale - vbox.x * vbox.scale;
  var y = bbox.y * vbox.scale - vbox.y * vbox.scale;

  var width = bbox.width * vbox.scale;
  var height = bbox.height * vbox.scale;

  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
};

/**
 * Fires an event in order other modules can react to the
 * canvas resizing
 */
Canvas.prototype.resized = function() {

  // force recomputation of view box
  delete this._cachedViewbox;

  this._eventBus.fire('canvas.resized');
};

var ELEMENT_ID = 'data-element-id';


/**
 * @class
 *
 * A registry that keeps track of all shapes in the diagram.
 */
function ElementRegistry(eventBus) {
  this._elements = {};

  this._eventBus = eventBus;
}

ElementRegistry.$inject = [ 'eventBus' ];

/**
 * Register a pair of (element, gfx, (secondaryGfx)).
 *
 * @param {djs.model.Base} element
 * @param {SVGElement} gfx
 * @param {SVGElement} [secondaryGfx] optional other element to register, too
 */
ElementRegistry.prototype.add = function(element, gfx, secondaryGfx) {

  var id = element.id;

  this._validateId(id);

  // associate dom node with element
  attr(gfx, ELEMENT_ID, id);

  if (secondaryGfx) {
    attr(secondaryGfx, ELEMENT_ID, id);
  }

  this._elements[id] = { element: element, gfx: gfx, secondaryGfx: secondaryGfx };
};

/**
 * Removes an element from the registry.
 *
 * @param {djs.model.Base} element
 */
ElementRegistry.prototype.remove = function(element) {
  var elements = this._elements,
      id = element.id || element,
      container = id && elements[id];

  if (container) {

    // unset element id on gfx
    attr(container.gfx, ELEMENT_ID, '');

    if (container.secondaryGfx) {
      attr(container.secondaryGfx, ELEMENT_ID, '');
    }

    delete elements[id];
  }
};

/**
 * Update the id of an element
 *
 * @param {djs.model.Base} element
 * @param {string} newId
 */
ElementRegistry.prototype.updateId = function(element, newId) {

  this._validateId(newId);

  if (typeof element === 'string') {
    element = this.get(element);
  }

  this._eventBus.fire('element.updateId', {
    element: element,
    newId: newId
  });

  var gfx = this.getGraphics(element),
      secondaryGfx = this.getGraphics(element, true);

  this.remove(element);

  element.id = newId;

  this.add(element, gfx, secondaryGfx);
};

/**
 * Return the model element for a given id or graphics.
 *
 * @example
 *
 * elementRegistry.get('SomeElementId_1');
 * elementRegistry.get(gfx);
 *
 *
 * @param {string|SVGElement} filter for selecting the element
 *
 * @return {djs.model.Base}
 */
ElementRegistry.prototype.get = function(filter) {
  var id;

  if (typeof filter === 'string') {
    id = filter;
  } else {
    id = filter && attr(filter, ELEMENT_ID);
  }

  var container = this._elements[id];
  return container && container.element;
};

/**
 * Return all elements that match a given filter function.
 *
 * @param {Function} fn
 *
 * @return {Array<djs.model.Base>}
 */
ElementRegistry.prototype.filter = function(fn) {

  var filtered = [];

  this.forEach(function(element, gfx) {
    if (fn(element, gfx)) {
      filtered.push(element);
    }
  });

  return filtered;
};

/**
 * Return the first element that satisfies the provided testing function.
 *
 * @param {Function} fn
 *
 * @return {djs.model.Base}
 */
ElementRegistry.prototype.find = function(fn) {
  var map = this._elements,
      keys = Object.keys(map);

  for (var i = 0; i < keys.length; i++) {
    var id = keys[i],
        container = map[id],
        element = container.element,
        gfx = container.gfx;

    if (fn(element, gfx)) {
      return element;
    }
  }
};

/**
 * Return all rendered model elements.
 *
 * @return {Array<djs.model.Base>}
 */
ElementRegistry.prototype.getAll = function() {
  return this.filter(function(e) { return e; });
};

/**
 * Iterate over all diagram elements.
 *
 * @param {Function} fn
 */
ElementRegistry.prototype.forEach = function(fn) {

  var map = this._elements;

  Object.keys(map).forEach(function(id) {
    var container = map[id],
        element = container.element,
        gfx = container.gfx;

    return fn(element, gfx);
  });
};

/**
 * Return the graphical representation of an element or its id.
 *
 * @example
 * elementRegistry.getGraphics('SomeElementId_1');
 * elementRegistry.getGraphics(rootElement); // <g ...>
 *
 * elementRegistry.getGraphics(rootElement, true); // <svg ...>
 *
 *
 * @param {string|djs.model.Base} filter
 * @param {boolean} [secondary=false] whether to return the secondary connected element
 *
 * @return {SVGElement}
 */
ElementRegistry.prototype.getGraphics = function(filter, secondary) {
  var id = filter.id || filter;

  var container = this._elements[id];
  return container && (secondary ? container.secondaryGfx : container.gfx);
};

/**
 * Validate the suitability of the given id and signals a problem
 * with an exception.
 *
 * @param {string} id
 *
 * @throws {Error} if id is empty or already assigned
 */
ElementRegistry.prototype._validateId = function(id) {
  if (!id) {
    throw new Error('element must have an id');
  }

  if (this._elements[id]) {
    throw new Error('element with id ' + id + ' already added');
  }
};

/**
 * An empty collection stub. Use {@link RefsCollection.extend} to extend a
 * collection with ref semantics.
 *
 * @class RefsCollection
 */

/**
 * Extends a collection with {@link Refs} aware methods
 *
 * @memberof RefsCollection
 * @static
 *
 * @param  {Array<Object>} collection
 * @param  {Refs} refs instance
 * @param  {Object} property represented by the collection
 * @param  {Object} target object the collection is attached to
 *
 * @return {RefsCollection<Object>} the extended array
 */
function extend$1(collection, refs, property, target) {

  var inverseProperty = property.inverse;

  /**
   * Removes the given element from the array and returns it.
   *
   * @method RefsCollection#remove
   *
   * @param {Object} element the element to remove
   */
  Object.defineProperty(collection, 'remove', {
    value: function(element) {
      var idx = this.indexOf(element);
      if (idx !== -1) {
        this.splice(idx, 1);

        // unset inverse
        refs.unset(element, inverseProperty, target);
      }

      return element;
    }
  });

  /**
   * Returns true if the collection contains the given element
   *
   * @method RefsCollection#contains
   *
   * @param {Object} element the element to check for
   */
  Object.defineProperty(collection, 'contains', {
    value: function(element) {
      return this.indexOf(element) !== -1;
    }
  });

  /**
   * Adds an element to the array, unless it exists already (set semantics).
   *
   * @method RefsCollection#add
   *
   * @param {Object} element the element to add
   * @param {Number} optional index to add element to
   *                 (possibly moving other elements around)
   */
  Object.defineProperty(collection, 'add', {
    value: function(element, idx) {

      var currentIdx = this.indexOf(element);

      if (typeof idx === 'undefined') {

        if (currentIdx !== -1) {
          // element already in collection (!)
          return;
        }

        // add to end of array, as no idx is specified
        idx = this.length;
      }

      // handle already in collection
      if (currentIdx !== -1) {

        // remove element from currentIdx
        this.splice(currentIdx, 1);
      }

      // add element at idx
      this.splice(idx, 0, element);

      if (currentIdx === -1) {
        // set inverse, unless element was
        // in collection already
        refs.set(element, inverseProperty, target);
      }
    }
  });

  // a simple marker, identifying this element
  // as being a refs collection
  Object.defineProperty(collection, '__refs_collection', {
    value: true
  });

  return collection;
}


function isExtended(collection) {
  return collection.__refs_collection === true;
}

var extend_1 = extend$1;

var isExtended_1 = isExtended;

var collection = {
	extend: extend_1,
	isExtended: isExtended_1
};

function hasOwnProperty$1(e, property) {
  return Object.prototype.hasOwnProperty.call(e, property.name || property);
}

function defineCollectionProperty(ref, property, target) {

  var collection$1 = collection.extend(target[property.name] || [], ref, property, target);

  Object.defineProperty(target, property.name, {
    enumerable: property.enumerable,
    value: collection$1
  });

  if (collection$1.length) {

    collection$1.forEach(function(o) {
      ref.set(o, property.inverse, target);
    });
  }
}


function defineProperty(ref, property, target) {

  var inverseProperty = property.inverse;

  var _value = target[property.name];

  Object.defineProperty(target, property.name, {
    configurable: property.configurable,
    enumerable: property.enumerable,

    get: function() {
      return _value;
    },

    set: function(value) {

      // return if we already performed all changes
      if (value === _value) {
        return;
      }

      var old = _value;

      // temporary set null
      _value = null;

      if (old) {
        ref.unset(old, inverseProperty, target);
      }

      // set new value
      _value = value;

      // set inverse value
      ref.set(_value, inverseProperty, target);
    }
  });

}

/**
 * Creates a new references object defining two inversly related
 * attribute descriptors a and b.
 *
 * <p>
 *   When bound to an object using {@link Refs#bind} the references
 *   get activated and ensure that add and remove operations are applied
 *   reversely, too.
 * </p>
 *
 * <p>
 *   For attributes represented as collections {@link Refs} provides the
 *   {@link RefsCollection#add}, {@link RefsCollection#remove} and {@link RefsCollection#contains} extensions
 *   that must be used to properly hook into the inverse change mechanism.
 * </p>
 *
 * @class Refs
 *
 * @classdesc A bi-directional reference between two attributes.
 *
 * @param {Refs.AttributeDescriptor} a property descriptor
 * @param {Refs.AttributeDescriptor} b property descriptor
 *
 * @example
 *
 * var refs = Refs({ name: 'wheels', collection: true, enumerable: true }, { name: 'car' });
 *
 * var car = { name: 'toyota' };
 * var wheels = [{ pos: 'front-left' }, { pos: 'front-right' }];
 *
 * refs.bind(car, 'wheels');
 *
 * car.wheels // []
 * car.wheels.add(wheels[0]);
 * car.wheels.add(wheels[1]);
 *
 * car.wheels // [{ pos: 'front-left' }, { pos: 'front-right' }]
 *
 * wheels[0].car // { name: 'toyota' };
 * car.wheels.remove(wheels[0]);
 *
 * wheels[0].car // undefined
 */
function Refs(a, b) {

  if (!(this instanceof Refs)) {
    return new Refs(a, b);
  }

  // link
  a.inverse = b;
  b.inverse = a;

  this.props = {};
  this.props[a.name] = a;
  this.props[b.name] = b;
}

/**
 * Binds one side of a bi-directional reference to a
 * target object.
 *
 * @memberOf Refs
 *
 * @param  {Object} target
 * @param  {String} property
 */
Refs.prototype.bind = function(target, property) {
  if (typeof property === 'string') {
    if (!this.props[property]) {
      throw new Error('no property <' + property + '> in ref');
    }
    property = this.props[property];
  }

  if (property.collection) {
    defineCollectionProperty(this, property, target);
  } else {
    defineProperty(this, property, target);
  }
};

Refs.prototype.ensureRefsCollection = function(target, property) {

  var collection$1 = target[property.name];

  if (!collection.isExtended(collection$1)) {
    defineCollectionProperty(this, property, target);
  }

  return collection$1;
};

Refs.prototype.ensureBound = function(target, property) {
  if (!hasOwnProperty$1(target, property)) {
    this.bind(target, property);
  }
};

Refs.prototype.unset = function(target, property, value) {

  if (target) {
    this.ensureBound(target, property);

    if (property.collection) {
      this.ensureRefsCollection(target, property).remove(value);
    } else {
      target[property.name] = undefined;
    }
  }
};

Refs.prototype.set = function(target, property, value) {

  if (target) {
    this.ensureBound(target, property);

    if (property.collection) {
      this.ensureRefsCollection(target, property).add(value);
    } else {
      target[property.name] = value;
    }
  }
};

var refs = Refs;

var objectRefs = refs;

var Collection = collection;
objectRefs.Collection = Collection;

var parentRefs = new objectRefs({ name: 'children', enumerable: true, collection: true }, { name: 'parent' }),
    labelRefs = new objectRefs({ name: 'labels', enumerable: true, collection: true }, { name: 'labelTarget' }),
    attacherRefs = new objectRefs({ name: 'attachers', collection: true }, { name: 'host' }),
    outgoingRefs = new objectRefs({ name: 'outgoing', collection: true }, { name: 'source' }),
    incomingRefs = new objectRefs({ name: 'incoming', collection: true }, { name: 'target' });

/**
 * @namespace djs.model
 */

/**
 * @memberOf djs.model
 */

/**
 * The basic graphical representation
 *
 * @class
 *
 * @abstract
 */
function Base() {

  /**
   * The object that backs up the shape
   *
   * @name Base#businessObject
   * @type Object
   */
  Object.defineProperty(this, 'businessObject', {
    writable: true
  });


  /**
   * Single label support, will mapped to multi label array
   *
   * @name Base#label
   * @type Object
   */
  Object.defineProperty(this, 'label', {
    get: function() {
      return this.labels[0];
    },
    set: function(newLabel) {

      var label = this.label,
          labels = this.labels;

      if (!newLabel && label) {
        labels.remove(label);
      } else {
        labels.add(newLabel, 0);
      }
    }
  });

  /**
   * The parent shape
   *
   * @name Base#parent
   * @type Shape
   */
  parentRefs.bind(this, 'parent');

  /**
   * The list of labels
   *
   * @name Base#labels
   * @type Label
   */
  labelRefs.bind(this, 'labels');

  /**
   * The list of outgoing connections
   *
   * @name Base#outgoing
   * @type Array<Connection>
   */
  outgoingRefs.bind(this, 'outgoing');

  /**
   * The list of incoming connections
   *
   * @name Base#incoming
   * @type Array<Connection>
   */
  incomingRefs.bind(this, 'incoming');
}


/**
 * A graphical object
 *
 * @class
 * @constructor
 *
 * @extends Base
 */
function Shape() {
  Base.call(this);

  /**
   * Indicates frame shapes
   *
   * @name Shape#isFrame
   * @type boolean
   */

  /**
   * The list of children
   *
   * @name Shape#children
   * @type Array<Base>
   */
  parentRefs.bind(this, 'children');

  /**
   * @name Shape#host
   * @type Shape
   */
  attacherRefs.bind(this, 'host');

  /**
   * @name Shape#attachers
   * @type Shape
   */
  attacherRefs.bind(this, 'attachers');
}

inherits_browser(Shape, Base);


/**
 * A root graphical object
 *
 * @class
 * @constructor
 *
 * @extends Shape
 */
function Root() {
  Shape.call(this);
}

inherits_browser(Root, Shape);


/**
 * A label for an element
 *
 * @class
 * @constructor
 *
 * @extends Shape
 */
function Label() {
  Shape.call(this);

  /**
   * The labeled element
   *
   * @name Label#labelTarget
   * @type Base
   */
  labelRefs.bind(this, 'labelTarget');
}

inherits_browser(Label, Shape);


/**
 * A connection between two elements
 *
 * @class
 * @constructor
 *
 * @extends Base
 */
function Connection() {
  Base.call(this);

  /**
   * The element this connection originates from
   *
   * @name Connection#source
   * @type Base
   */
  outgoingRefs.bind(this, 'source');

  /**
   * The element this connection points to
   *
   * @name Connection#target
   * @type Base
   */
  incomingRefs.bind(this, 'target');
}

inherits_browser(Connection, Base);


var types = {
  connection: Connection,
  shape: Shape,
  label: Label,
  root: Root
};

/**
 * Creates a new model element of the specified type
 *
 * @method create
 *
 * @example
 *
 * var shape1 = Model.create('shape', { x: 10, y: 10, width: 100, height: 100 });
 * var shape2 = Model.create('shape', { x: 210, y: 210, width: 100, height: 100 });
 *
 * var connection = Model.create('connection', { waypoints: [ { x: 110, y: 55 }, {x: 210, y: 55 } ] });
 *
 * @param  {string} type lower-cased model name
 * @param  {Object} attrs attributes to initialize the new model instance with
 *
 * @return {Base} the new model instance
 */
function create$1(type, attrs) {
  var Type = types[type];
  if (!Type) {
    throw new Error('unknown type: <' + type + '>');
  }
  return assign(new Type(), attrs);
}

/**
 * A factory for diagram-js shapes
 */
function ElementFactory() {
  this._uid = 12;
}


ElementFactory.prototype.createRoot = function(attrs) {
  return this.create('root', attrs);
};

ElementFactory.prototype.createLabel = function(attrs) {
  return this.create('label', attrs);
};

ElementFactory.prototype.createShape = function(attrs) {
  return this.create('shape', attrs);
};

ElementFactory.prototype.createConnection = function(attrs) {
  return this.create('connection', attrs);
};

/**
 * Create a model element with the given type and
 * a number of pre-set attributes.
 *
 * @param  {string} type
 * @param  {Object} attrs
 * @return {djs.model.Base} the newly created model instance
 */
ElementFactory.prototype.create = function(type, attrs) {

  attrs = assign({}, attrs || {});

  if (!attrs.id) {
    attrs.id = type + '_' + (this._uid++);
  }

  return create$1(type, attrs);
};

var FN_REF = '__fn';

var DEFAULT_PRIORITY = 1000;

var slice$1 = Array.prototype.slice;

/**
 * A general purpose event bus.
 *
 * This component is used to communicate across a diagram instance.
 * Other parts of a diagram can use it to listen to and broadcast events.
 *
 *
 * ## Registering for Events
 *
 * The event bus provides the {@link EventBus#on} and {@link EventBus#once}
 * methods to register for events. {@link EventBus#off} can be used to
 * remove event registrations. Listeners receive an instance of {@link Event}
 * as the first argument. It allows them to hook into the event execution.
 *
 * ```javascript
 *
 * // listen for event
 * eventBus.on('foo', function(event) {
 *
 *   // access event type
 *   event.type; // 'foo'
 *
 *   // stop propagation to other listeners
 *   event.stopPropagation();
 *
 *   // prevent event default
 *   event.preventDefault();
 * });
 *
 * // listen for event with custom payload
 * eventBus.on('bar', function(event, payload) {
 *   console.log(payload);
 * });
 *
 * // listen for event returning value
 * eventBus.on('foobar', function(event) {
 *
 *   // stop event propagation + prevent default
 *   return false;
 *
 *   // stop event propagation + return custom result
 *   return {
 *     complex: 'listening result'
 *   };
 * });
 *
 *
 * // listen with custom priority (default=1000, higher is better)
 * eventBus.on('priorityfoo', 1500, function(event) {
 *   console.log('invoked first!');
 * });
 *
 *
 * // listen for event and pass the context (`this`)
 * eventBus.on('foobar', function(event) {
 *   this.foo();
 * }, this);
 * ```
 *
 *
 * ## Emitting Events
 *
 * Events can be emitted via the event bus using {@link EventBus#fire}.
 *
 * ```javascript
 *
 * // false indicates that the default action
 * // was prevented by listeners
 * if (eventBus.fire('foo') === false) {
 *   console.log('default has been prevented!');
 * };
 *
 *
 * // custom args + return value listener
 * eventBus.on('sum', function(event, a, b) {
 *   return a + b;
 * });
 *
 * // you can pass custom arguments + retrieve result values.
 * var sum = eventBus.fire('sum', 1, 2);
 * console.log(sum); // 3
 * ```
 */
function EventBus() {
  this._listeners = {};

  // cleanup on destroy on lowest priority to allow
  // message passing until the bitter end
  this.on('diagram.destroy', 1, this._destroy, this);
}


/**
 * Register an event listener for events with the given name.
 *
 * The callback will be invoked with `event, ...additionalArguments`
 * that have been passed to {@link EventBus#fire}.
 *
 * Returning false from a listener will prevent the events default action
 * (if any is specified). To stop an event from being processed further in
 * other listeners execute {@link Event#stopPropagation}.
 *
 * Returning anything but `undefined` from a listener will stop the listener propagation.
 *
 * @param {string|Array<string>} events
 * @param {number} [priority=1000] the priority in which this listener is called, larger is higher
 * @param {Function} callback
 * @param {Object} [that] Pass context (`this`) to the callback
 */
EventBus.prototype.on = function(events, priority, callback, that) {

  events = isArray(events) ? events : [ events ];

  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (!isNumber(priority)) {
    throw new Error('priority must be a number');
  }

  var actualCallback = callback;

  if (that) {
    actualCallback = bind(callback, that);

    // make sure we remember and are able to remove
    // bound callbacks via {@link #off} using the original
    // callback
    actualCallback[FN_REF] = callback[FN_REF] || callback;
  }

  var self = this;

  events.forEach(function(e) {
    self._addListener(e, {
      priority: priority,
      callback: actualCallback,
      next: null
    });
  });
};


/**
 * Register an event listener that is executed only once.
 *
 * @param {string} event the event name to register for
 * @param {number} [priority=1000] the priority in which this listener is called, larger is higher
 * @param {Function} callback the callback to execute
 * @param {Object} [that] Pass context (`this`) to the callback
 */
EventBus.prototype.once = function(event, priority, callback, that) {
  var self = this;

  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (!isNumber(priority)) {
    throw new Error('priority must be a number');
  }

  function wrappedCallback() {
    wrappedCallback.__isTomb = true;

    var result = callback.apply(that, arguments);

    self.off(event, wrappedCallback);

    return result;
  }

  // make sure we remember and are able to remove
  // bound callbacks via {@link #off} using the original
  // callback
  wrappedCallback[FN_REF] = callback;

  this.on(event, priority, wrappedCallback);
};


/**
 * Removes event listeners by event and callback.
 *
 * If no callback is given, all listeners for a given event name are being removed.
 *
 * @param {string|Array<string>} events
 * @param {Function} [callback]
 */
EventBus.prototype.off = function(events, callback) {

  events = isArray(events) ? events : [ events ];

  var self = this;

  events.forEach(function(event) {
    self._removeListener(event, callback);
  });

};


/**
 * Create an EventBus event.
 *
 * @param {Object} data
 *
 * @return {Object} event, recognized by the eventBus
 */
EventBus.prototype.createEvent = function(data) {
  var event = new InternalEvent();

  event.init(data);

  return event;
};


/**
 * Fires a named event.
 *
 * @example
 *
 * // fire event by name
 * events.fire('foo');
 *
 * // fire event object with nested type
 * var event = { type: 'foo' };
 * events.fire(event);
 *
 * // fire event with explicit type
 * var event = { x: 10, y: 20 };
 * events.fire('element.moved', event);
 *
 * // pass additional arguments to the event
 * events.on('foo', function(event, bar) {
 *   alert(bar);
 * });
 *
 * events.fire({ type: 'foo' }, 'I am bar!');
 *
 * @param {string} [name] the optional event name
 * @param {Object} [event] the event object
 * @param {...Object} additional arguments to be passed to the callback functions
 *
 * @return {boolean} the events return value, if specified or false if the
 *                   default action was prevented by listeners
 */
EventBus.prototype.fire = function(type, data) {
  var event,
      firstListener,
      returnValue,
      args;

  args = slice$1.call(arguments);

  if (typeof type === 'object') {
    data = type;
    type = data.type;
  }

  if (!type) {
    throw new Error('no event type specified');
  }

  firstListener = this._listeners[type];

  if (!firstListener) {
    return;
  }

  // we make sure we fire instances of our home made
  // events here. We wrap them only once, though
  if (data instanceof InternalEvent) {

    // we are fine, we alread have an event
    event = data;
  } else {
    event = this.createEvent(data);
  }

  // ensure we pass the event as the first parameter
  args[0] = event;

  // original event type (in case we delegate)
  var originalType = event.type;

  // update event type before delegation
  if (type !== originalType) {
    event.type = type;
  }

  try {
    returnValue = this._invokeListeners(event, args, firstListener);
  } finally {

    // reset event type after delegation
    if (type !== originalType) {
      event.type = originalType;
    }
  }

  // set the return value to false if the event default
  // got prevented and no other return value exists
  if (returnValue === undefined && event.defaultPrevented) {
    returnValue = false;
  }

  return returnValue;
};


EventBus.prototype.handleError = function(error) {
  return this.fire('error', { error: error }) === false;
};


EventBus.prototype._destroy = function() {
  this._listeners = {};
};

EventBus.prototype._invokeListeners = function(event, args, listener) {

  var returnValue;

  while (listener) {

    // handle stopped propagation
    if (event.cancelBubble) {
      break;
    }

    returnValue = this._invokeListener(event, args, listener);

    listener = listener.next;
  }

  return returnValue;
};

EventBus.prototype._invokeListener = function(event, args, listener) {

  var returnValue;

  if (listener.callback.__isTomb) {
    return returnValue;
  }

  try {

    // returning false prevents the default action
    returnValue = invokeFunction(listener.callback, args);

    // stop propagation on return value
    if (returnValue !== undefined) {
      event.returnValue = returnValue;
      event.stopPropagation();
    }

    // prevent default on return false
    if (returnValue === false) {
      event.preventDefault();
    }
  } catch (e) {
    if (!this.handleError(e)) {
      console.error('unhandled error in event listener');
      console.error(e.stack);

      throw e;
    }
  }

  return returnValue;
};

/*
 * Add new listener with a certain priority to the list
 * of listeners (for the given event).
 *
 * The semantics of listener registration / listener execution are
 * first register, first serve: New listeners will always be inserted
 * after existing listeners with the same priority.
 *
 * Example: Inserting two listeners with priority 1000 and 1300
 *
 *    * before: [ 1500, 1500, 1000, 1000 ]
 *    * after: [ 1500, 1500, (new=1300), 1000, 1000, (new=1000) ]
 *
 * @param {string} event
 * @param {Object} listener { priority, callback }
 */
EventBus.prototype._addListener = function(event, newListener) {

  var listener = this._getListeners(event),
      previousListener;

  // no prior listeners
  if (!listener) {
    this._setListeners(event, newListener);

    return;
  }

  // ensure we order listeners by priority from
  // 0 (high) to n > 0 (low)
  while (listener) {

    if (listener.priority < newListener.priority) {

      newListener.next = listener;

      if (previousListener) {
        previousListener.next = newListener;
      } else {
        this._setListeners(event, newListener);
      }

      return;
    }

    previousListener = listener;
    listener = listener.next;
  }

  // add new listener to back
  previousListener.next = newListener;
};


EventBus.prototype._getListeners = function(name) {
  return this._listeners[name];
};

EventBus.prototype._setListeners = function(name, listener) {
  this._listeners[name] = listener;
};

EventBus.prototype._removeListener = function(event, callback) {

  var listener = this._getListeners(event),
      nextListener,
      previousListener,
      listenerCallback;

  if (!callback) {

    // clear listeners
    this._setListeners(event, null);

    return;
  }

  while (listener) {

    nextListener = listener.next;

    listenerCallback = listener.callback;

    if (listenerCallback === callback || listenerCallback[FN_REF] === callback) {
      if (previousListener) {
        previousListener.next = nextListener;
      } else {

        // new first listener
        this._setListeners(event, nextListener);
      }
    }

    previousListener = listener;
    listener = nextListener;
  }
};

/**
 * A event that is emitted via the event bus.
 */
function InternalEvent() { }

InternalEvent.prototype.stopPropagation = function() {
  this.cancelBubble = true;
};

InternalEvent.prototype.preventDefault = function() {
  this.defaultPrevented = true;
};

InternalEvent.prototype.init = function(data) {
  assign(this, data || {});
};


/**
 * Invoke function. Be fast...
 *
 * @param {Function} fn
 * @param {Array<Object>} args
 *
 * @return {Any}
 */
function invokeFunction(fn, args) {
  return fn.apply(null, args);
}

/**
 * SVGs for elements are generated by the {@link GraphicsFactory}.
 *
 * This utility gives quick access to the important semantic
 * parts of an element.
 */

/**
 * Returns the visual part of a diagram element
 *
 * @param {Snap<SVGElement>} gfx
 *
 * @return {Snap<SVGElement>}
 */
function getVisual(gfx) {
  return gfx.childNodes[0];
}

/**
 * Returns the children for a given diagram element.
 *
 * @param {Snap<SVGElement>} gfx
 * @return {Snap<SVGElement>}
 */
function getChildren(gfx) {
  return gfx.parentNode.childNodes[1];
}

/**
 * A factory that creates graphical elements
 *
 * @param {EventBus} eventBus
 * @param {ElementRegistry} elementRegistry
 */
function GraphicsFactory(eventBus, elementRegistry) {
  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
}

GraphicsFactory.$inject = [ 'eventBus' , 'elementRegistry' ];


GraphicsFactory.prototype._getChildrenContainer = function(element) {

  var gfx = this._elementRegistry.getGraphics(element);

  var childrenGfx;

  // root element
  if (!element.parent) {
    childrenGfx = gfx;
  } else {
    childrenGfx = getChildren(gfx);
    if (!childrenGfx) {
      childrenGfx = create('g');
      classes(childrenGfx).add('djs-children');

      append(gfx.parentNode, childrenGfx);
    }
  }

  return childrenGfx;
};

/**
 * Clears the graphical representation of the element and returns the
 * cleared visual (the <g class="djs-visual" /> element).
 */
GraphicsFactory.prototype._clear = function(gfx) {
  var visual = getVisual(gfx);

  clear$1(visual);

  return visual;
};

/**
 * Creates a gfx container for shapes and connections
 *
 * The layout is as follows:
 *
 * <g class="djs-group">
 *
 *   <!-- the gfx -->
 *   <g class="djs-element djs-(shape|connection|frame)">
 *     <g class="djs-visual">
 *       <!-- the renderer draws in here -->
 *     </g>
 *
 *     <!-- extensions (overlays, click box, ...) goes here
 *   </g>
 *
 *   <!-- the gfx child nodes -->
 *   <g class="djs-children"></g>
 * </g>
 *
 * @param {string} type the type of the element, i.e. shape | connection
 * @param {SVGElement} [childrenGfx]
 * @param {number} [parentIndex] position to create container in parent
 * @param {boolean} [isFrame] is frame element
 *
 * @return {SVGElement}
 */
GraphicsFactory.prototype._createContainer = function(
    type, childrenGfx, parentIndex, isFrame
) {
  var outerGfx = create('g');
  classes(outerGfx).add('djs-group');

  // insert node at position
  if (typeof parentIndex !== 'undefined') {
    prependTo(outerGfx, childrenGfx, childrenGfx.childNodes[parentIndex]);
  } else {
    append(childrenGfx, outerGfx);
  }

  var gfx = create('g');
  classes(gfx).add('djs-element');
  classes(gfx).add('djs-' + type);

  if (isFrame) {
    classes(gfx).add('djs-frame');
  }

  append(outerGfx, gfx);

  // create visual
  var visual = create('g');
  classes(visual).add('djs-visual');

  append(gfx, visual);

  return gfx;
};

GraphicsFactory.prototype.create = function(type, element, parentIndex) {
  var childrenGfx = this._getChildrenContainer(element.parent);
  return this._createContainer(type, childrenGfx, parentIndex, isFrameElement$1(element));
};

GraphicsFactory.prototype.updateContainments = function(elements) {

  var self = this,
      elementRegistry = this._elementRegistry,
      parents;

  parents = reduce(elements, function(map, e) {

    if (e.parent) {
      map[e.parent.id] = e.parent;
    }

    return map;
  }, {});

  // update all parents of changed and reorganized their children
  // in the correct order (as indicated in our model)
  forEach(parents, function(parent) {

    var children = parent.children;

    if (!children) {
      return;
    }

    var childrenGfx = self._getChildrenContainer(parent);

    forEach(children.slice().reverse(), function(child) {
      var childGfx = elementRegistry.getGraphics(child);

      prependTo(childGfx.parentNode, childrenGfx);
    });
  });
};

GraphicsFactory.prototype.drawShape = function(visual, element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.shape', { gfx: visual, element: element });
};

GraphicsFactory.prototype.getShapePath = function(element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.getShapePath', element);
};

GraphicsFactory.prototype.drawConnection = function(visual, element) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.connection', { gfx: visual, element: element });
};

GraphicsFactory.prototype.getConnectionPath = function(waypoints) {
  var eventBus = this._eventBus;

  return eventBus.fire('render.getConnectionPath', waypoints);
};

GraphicsFactory.prototype.update = function(type, element, gfx) {

  // do NOT update root element
  if (!element.parent) {
    return;
  }

  var visual = this._clear(gfx);

  // redraw
  if (type === 'shape') {
    this.drawShape(visual, element);

    // update positioning
    translate(gfx, element.x, element.y);
  } else
  if (type === 'connection') {
    this.drawConnection(visual, element);
  } else {
    throw new Error('unknown type: ' + type);
  }

  if (element.hidden) {
    attr(gfx, 'display', 'none');
  } else {
    attr(gfx, 'display', 'block');
  }
};

GraphicsFactory.prototype.remove = function(element) {
  var gfx = this._elementRegistry.getGraphics(element);

  // remove
  remove(gfx.parentNode);
};


// helpers //////////

function prependTo(newNode, parentNode, siblingNode) {
  var node = siblingNode || parentNode.firstChild;

  // do not prepend node to itself to prevent IE from crashing
  // https://github.com/bpmn-io/bpmn-js/issues/746
  if (newNode === node) {
    return;
  }

  parentNode.insertBefore(newNode, node);
}

var CoreModule$1 = {
  __depends__: [ DrawModule$1 ],
  __init__: [ 'canvas' ],
  canvas: [ 'type', Canvas ],
  elementRegistry: [ 'type', ElementRegistry ],
  elementFactory: [ 'type', ElementFactory ],
  eventBus: [ 'type', EventBus ],
  graphicsFactory: [ 'type', GraphicsFactory ]
};

/**
 * Bootstrap an injector from a list of modules, instantiating a number of default components
 *
 * @ignore
 * @param {Array<didi.Module>} bootstrapModules
 *
 * @return {didi.Injector} a injector to use to access the components
 */
function bootstrap(bootstrapModules) {

  var modules = [],
      components = [];

  function hasModule(m) {
    return modules.indexOf(m) >= 0;
  }

  function addModule(m) {
    modules.push(m);
  }

  function visit(m) {
    if (hasModule(m)) {
      return;
    }

    (m.__depends__ || []).forEach(visit);

    if (hasModule(m)) {
      return;
    }

    addModule(m);

    (m.__init__ || []).forEach(function(c) {
      components.push(c);
    });
  }

  bootstrapModules.forEach(visit);

  var injector = new Injector(modules);

  components.forEach(function(c) {

    try {

      // eagerly resolve component (fn or string)
      injector[typeof c === 'string' ? 'get' : 'invoke'](c);
    } catch (e) {
      console.error('Failed to instantiate component');
      console.error(e.stack);

      throw e;
    }
  });

  return injector;
}

/**
 * Creates an injector from passed options.
 *
 * @ignore
 * @param  {Object} options
 * @return {didi.Injector}
 */
function createInjector(options) {

  options = options || {};

  var configModule = {
    'config': ['value', options]
  };

  var modules = [ configModule, CoreModule$1 ].concat(options.modules || []);

  return bootstrap(modules);
}


/**
 * The main diagram-js entry point that bootstraps the diagram with the given
 * configuration.
 *
 * To register extensions with the diagram, pass them as Array<didi.Module> to the constructor.
 *
 * @class djs.Diagram
 * @memberOf djs
 * @constructor
 *
 * @example
 *
 * <caption>Creating a plug-in that logs whenever a shape is added to the canvas.</caption>
 *
 * // plug-in implemenentation
 * function MyLoggingPlugin(eventBus) {
 *   eventBus.on('shape.added', function(event) {
 *     console.log('shape ', event.shape, ' was added to the diagram');
 *   });
 * }
 *
 * // export as module
 * export default {
 *   __init__: [ 'myLoggingPlugin' ],
 *     myLoggingPlugin: [ 'type', MyLoggingPlugin ]
 * };
 *
 *
 * // instantiate the diagram with the new plug-in
 *
 * import MyLoggingModule from 'path-to-my-logging-plugin';
 *
 * var diagram = new Diagram({
 *   modules: [
 *     MyLoggingModule
 *   ]
 * });
 *
 * diagram.invoke([ 'canvas', function(canvas) {
 *   // add shape to drawing canvas
 *   canvas.addShape({ x: 10, y: 10 });
 * });
 *
 * // 'shape ... was added to the diagram' logged to console
 *
 * @param {Object} options
 * @param {Array<didi.Module>} [options.modules] external modules to instantiate with the diagram
 * @param {didi.Injector} [injector] an (optional) injector to bootstrap the diagram with
 */
function Diagram(options, injector) {

  // create injector unless explicitly specified
  this.injector = injector = injector || createInjector(options);

  // API

  /**
   * Resolves a diagram service
   *
   * @method Diagram#get
   *
   * @param {string} name the name of the diagram service to be retrieved
   * @param {boolean} [strict=true] if false, resolve missing services to null
   */
  this.get = injector.get;

  /**
   * Executes a function into which diagram services are injected
   *
   * @method Diagram#invoke
   *
   * @param {Function|Object[]} fn the function to resolve
   * @param {Object} locals a number of locals to use to resolve certain dependencies
   */
  this.invoke = injector.invoke;

  // init

  // indicate via event


  /**
   * An event indicating that all plug-ins are loaded.
   *
   * Use this event to fire other events to interested plug-ins
   *
   * @memberOf Diagram
   *
   * @event diagram.init
   *
   * @example
   *
   * eventBus.on('diagram.init', function() {
   *   eventBus.fire('my-custom-event', { foo: 'BAR' });
   * });
   *
   * @type {Object}
   */
  this.get('eventBus').fire('diagram.init');
}


/**
 * Destroys the diagram
 *
 * @method  Diagram#destroy
 */
Diagram.prototype.destroy = function() {
  this.get('eventBus').fire('diagram.destroy');
};

/**
 * Clear the diagram, removing all contents.
 */
Diagram.prototype.clear = function() {
  this.get('eventBus').fire('diagram.clear');
};

/**
 * Moddle base element.
 */
function Base$1() { }

Base$1.prototype.get = function(name) {
  return this.$model.properties.get(this, name);
};

Base$1.prototype.set = function(name, value) {
  this.$model.properties.set(this, name, value);
};

/**
 * A model element factory.
 *
 * @param {Moddle} model
 * @param {Properties} properties
 */
function Factory(model, properties) {
  this.model = model;
  this.properties = properties;
}


Factory.prototype.createType = function(descriptor) {

  var model = this.model;

  var props = this.properties,
      prototype = Object.create(Base$1.prototype);

  // initialize default values
  forEach(descriptor.properties, function(p) {
    if (!p.isMany && p.default !== undefined) {
      prototype[p.name] = p.default;
    }
  });

  props.defineModel(prototype, model);
  props.defineDescriptor(prototype, descriptor);

  var name = descriptor.ns.name;

  /**
   * The new type constructor
   */
  function ModdleElement(attrs) {
    props.define(this, '$type', { value: name, enumerable: true });
    props.define(this, '$attrs', { value: {} });
    props.define(this, '$parent', { writable: true });

    forEach(attrs, bind(function(val, key) {
      this.set(key, val);
    }, this));
  }

  ModdleElement.prototype = prototype;

  ModdleElement.hasType = prototype.$instanceOf = this.model.hasType;

  // static links
  props.defineModel(ModdleElement, model);
  props.defineDescriptor(ModdleElement, descriptor);

  return ModdleElement;
};

/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function(s) { return s; },
  Boolean: function(s) { return s === 'true'; },
  Integer: function(s) { return parseInt(s, 10); },
  Real: function(s) { return parseFloat(s, 10); }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName, prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
  // prefix + local name
  if (parts.length === 2) {
    localName = parts[1];
    prefix = parts[0];
  } else {
    throw new Error('expected <prefix:localName> or <localName>, got ' + name);
  }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/**
 * A utility to build element descriptors.
 */
function DescriptorBuilder(nameNs) {
  this.ns = nameNs;
  this.name = nameNs.name;
  this.allTypes = [];
  this.allTypesByName = {};
  this.properties = [];
  this.propertiesByName = {};
}


DescriptorBuilder.prototype.build = function() {
  return pick(this, [
    'ns',
    'name',
    'allTypes',
    'allTypesByName',
    'properties',
    'propertiesByName',
    'bodyProperty',
    'idProperty'
  ]);
};

/**
 * Add property at given index.
 *
 * @param {Object} p
 * @param {Number} [idx]
 * @param {Boolean} [validate=true]
 */
DescriptorBuilder.prototype.addProperty = function(p, idx, validate) {

  if (typeof idx === 'boolean') {
    validate = idx;
    idx = undefined;
  }

  this.addNamedProperty(p, validate !== false);

  var properties = this.properties;

  if (idx !== undefined) {
    properties.splice(idx, 0, p);
  } else {
    properties.push(p);
  }
};


DescriptorBuilder.prototype.replaceProperty = function(oldProperty, newProperty, replace) {
  var oldNameNs = oldProperty.ns;

  var props = this.properties,
      propertiesByName = this.propertiesByName,
      rename = oldProperty.name !== newProperty.name;

  if (oldProperty.isId) {
    if (!newProperty.isId) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be id property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    this.setIdProperty(newProperty, false);
  }

  if (oldProperty.isBody) {

    if (!newProperty.isBody) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be body property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    // TODO: Check compatibility
    this.setBodyProperty(newProperty, false);
  }

  // validate existence and get location of old property
  var idx = props.indexOf(oldProperty);
  if (idx === -1) {
    throw new Error('property <' + oldNameNs.name + '> not found in property list');
  }

  // remove old property
  props.splice(idx, 1);

  // replacing the named property is intentional
  //
  //  * validate only if this is a "rename" operation
  //  * add at specific index unless we "replace"
  //
  this.addProperty(newProperty, replace ? undefined : idx, rename);

  // make new property available under old name
  propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
};


DescriptorBuilder.prototype.redefineProperty = function(p, targetPropertyName, replace) {

  var nsPrefix = p.ns.prefix;
  var parts = targetPropertyName.split('#');

  var name = parseName(parts[0], nsPrefix);
  var attrName = parseName(parts[1], name.prefix).name;

  var redefinedProperty = this.propertiesByName[attrName];
  if (!redefinedProperty) {
    throw new Error('refined property <' + attrName + '> not found');
  } else {
    this.replaceProperty(redefinedProperty, p, replace);
  }

  delete p.redefines;
};

DescriptorBuilder.prototype.addNamedProperty = function(p, validate) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  if (validate) {
    this.assertNotDefined(p, ns.name);
    this.assertNotDefined(p, ns.localName);
  }

  propsByName[ns.name] = propsByName[ns.localName] = p;
};

DescriptorBuilder.prototype.removeNamedProperty = function(p) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  delete propsByName[ns.name];
  delete propsByName[ns.localName];
};

DescriptorBuilder.prototype.setBodyProperty = function(p, validate) {

  if (validate && this.bodyProperty) {
    throw new Error(
      'body property defined multiple times ' +
      '(<' + this.bodyProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.bodyProperty = p;
};

DescriptorBuilder.prototype.setIdProperty = function(p, validate) {

  if (validate && this.idProperty) {
    throw new Error(
      'id property defined multiple times ' +
      '(<' + this.idProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.idProperty = p;
};

DescriptorBuilder.prototype.assertNotDefined = function(p, name) {
  var propertyName = p.name,
      definedProperty = this.propertiesByName[propertyName];

  if (definedProperty) {
    throw new Error(
      'property <' + propertyName + '> already defined; ' +
      'override of <' + definedProperty.definedBy.ns.name + '#' + definedProperty.ns.name + '> by ' +
      '<' + p.definedBy.ns.name + '#' + p.ns.name + '> not allowed without redefines');
  }
};

DescriptorBuilder.prototype.hasProperty = function(name) {
  return this.propertiesByName[name];
};

DescriptorBuilder.prototype.addTrait = function(t, inherited) {

  var typesByName = this.allTypesByName,
      types = this.allTypes;

  var typeName = t.name;

  if (typeName in typesByName) {
    return;
  }

  forEach(t.properties, bind(function(p) {

    // clone property to allow extensions
    p = assign({}, p, {
      name: p.ns.localName,
      inherited: inherited
    });

    Object.defineProperty(p, 'definedBy', {
      value: t
    });

    var replaces = p.replaces,
        redefines = p.redefines;

    // add replace/redefine support
    if (replaces || redefines) {
      this.redefineProperty(p, replaces || redefines, replaces);
    } else {
      if (p.isBody) {
        this.setBodyProperty(p);
      }
      if (p.isId) {
        this.setIdProperty(p);
      }
      this.addProperty(p);
    }
  }, this));

  types.push(t);
  typesByName[typeName] = t;
};

/**
 * A registry of Moddle packages.
 *
 * @param {Array<Package>} packages
 * @param {Properties} properties
 */
function Registry(packages, properties) {
  this.packageMap = {};
  this.typeMap = {};

  this.packages = [];

  this.properties = properties;

  forEach(packages, bind(this.registerPackage, this));
}


Registry.prototype.getPackage = function(uriOrPrefix) {
  return this.packageMap[uriOrPrefix];
};

Registry.prototype.getPackages = function() {
  return this.packages;
};


Registry.prototype.registerPackage = function(pkg) {

  // copy package
  pkg = assign({}, pkg);

  var pkgMap = this.packageMap;

  ensureAvailable(pkgMap, pkg, 'prefix');
  ensureAvailable(pkgMap, pkg, 'uri');

  // register types
  forEach(pkg.types, bind(function(descriptor) {
    this.registerType(descriptor, pkg);
  }, this));

  pkgMap[pkg.uri] = pkgMap[pkg.prefix] = pkg;
  this.packages.push(pkg);
};


/**
 * Register a type from a specific package with us
 */
Registry.prototype.registerType = function(type, pkg) {

  type = assign({}, type, {
    superClass: (type.superClass || []).slice(),
    extends: (type.extends || []).slice(),
    properties: (type.properties || []).slice(),
    meta: assign((type.meta || {}))
  });

  var ns = parseName(type.name, pkg.prefix),
      name = ns.name,
      propertiesByName = {};

  // parse properties
  forEach(type.properties, bind(function(p) {

    // namespace property names
    var propertyNs = parseName(p.name, ns.prefix),
        propertyName = propertyNs.name;

    // namespace property types
    if (!isBuiltIn(p.type)) {
      p.type = parseName(p.type, propertyNs.prefix).name;
    }

    assign(p, {
      ns: propertyNs,
      name: propertyName
    });

    propertiesByName[propertyName] = p;
  }, this));

  // update ns + name
  assign(type, {
    ns: ns,
    name: name,
    propertiesByName: propertiesByName
  });

  forEach(type.extends, bind(function(extendsName) {
    var extended = this.typeMap[extendsName];

    extended.traits = extended.traits || [];
    extended.traits.push(name);
  }, this));

  // link to package
  this.definePackage(type, pkg);

  // register
  this.typeMap[name] = type;
};


/**
 * Traverse the type hierarchy from bottom to top,
 * calling iterator with (type, inherited) for all elements in
 * the inheritance chain.
 *
 * @param {Object} nsName
 * @param {Function} iterator
 * @param {Boolean} [trait=false]
 */
Registry.prototype.mapTypes = function(nsName, iterator, trait) {

  var type = isBuiltIn(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

  var self = this;

  /**
   * Traverse the selected trait.
   *
   * @param {String} cls
   */
  function traverseTrait(cls) {
    return traverseSuper(cls, true);
  }

  /**
   * Traverse the selected super type or trait
   *
   * @param {String} cls
   * @param {Boolean} [trait=false]
   */
  function traverseSuper(cls, trait) {
    var parentNs = parseName(cls, isBuiltIn(cls) ? '' : nsName.prefix);
    self.mapTypes(parentNs, iterator, trait);
  }

  if (!type) {
    throw new Error('unknown type <' + nsName.name + '>');
  }

  forEach(type.superClass, trait ? traverseTrait : traverseSuper);

  // call iterator with (type, inherited=!trait)
  iterator(type, !trait);

  forEach(type.traits, traverseTrait);
};


/**
 * Returns the effective descriptor for a type.
 *
 * @param  {String} type the namespaced name (ns:localName) of the type
 *
 * @return {Descriptor} the resulting effective descriptor
 */
Registry.prototype.getEffectiveDescriptor = function(name) {

  var nsName = parseName(name);

  var builder = new DescriptorBuilder(nsName);

  this.mapTypes(nsName, function(type, inherited) {
    builder.addTrait(type, inherited);
  });

  var descriptor = builder.build();

  // define package link
  this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

  return descriptor;
};


Registry.prototype.definePackage = function(target, pkg) {
  this.properties.define(target, '$pkg', { value: pkg });
};



///////// helpers ////////////////////////////

function ensureAvailable(packageMap, pkg, identifierKey) {

  var value = pkg[identifierKey];

  if (value in packageMap) {
    throw new Error('package with ' + identifierKey + ' <' + value + '> already defined');
  }
}

/**
 * A utility that gets and sets properties of model elements.
 *
 * @param {Model} model
 */
function Properties(model) {
  this.model = model;
}


/**
 * Sets a named property on the target element.
 * If the value is undefined, the property gets deleted.
 *
 * @param {Object} target
 * @param {String} name
 * @param {Object} value
 */
Properties.prototype.set = function(target, name, value) {

  var property = this.model.getPropertyDescriptor(target, name);

  var propertyName = property && property.name;

  if (isUndefined$1(value)) {
    // unset the property, if the specified value is undefined;
    // delete from $attrs (for extensions) or the target itself
    if (property) {
      delete target[propertyName];
    } else {
      delete target.$attrs[name];
    }
  } else {
    // set the property, defining well defined properties on the fly
    // or simply updating them in target.$attrs (for extensions)
    if (property) {
      if (propertyName in target) {
        target[propertyName] = value;
      } else {
        defineProperty$1(target, property, value);
      }
    } else {
      target.$attrs[name] = value;
    }
  }
};

/**
 * Returns the named property of the given element
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Object}
 */
Properties.prototype.get = function(target, name) {

  var property = this.model.getPropertyDescriptor(target, name);

  if (!property) {
    return target.$attrs[name];
  }

  var propertyName = property.name;

  // check if access to collection property and lazily initialize it
  if (!target[propertyName] && property.isMany) {
    defineProperty$1(target, property, []);
  }

  return target[propertyName];
};


/**
 * Define a property on the target element
 *
 * @param  {Object} target
 * @param  {String} name
 * @param  {Object} options
 */
Properties.prototype.define = function(target, name, options) {
  Object.defineProperty(target, name, options);
};


/**
 * Define the descriptor for an element
 */
Properties.prototype.defineDescriptor = function(target, descriptor) {
  this.define(target, '$descriptor', { value: descriptor });
};

/**
 * Define the model for an element
 */
Properties.prototype.defineModel = function(target, model) {
  this.define(target, '$model', { value: model });
};


function isUndefined$1(val) {
  return typeof val === 'undefined';
}

function defineProperty$1(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value: value,
    configurable: true
  });
}

//// Moddle implementation /////////////////////////////////////////////////

/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
function Moddle(packages) {

  this.properties = new Properties(this);

  this.factory = new Factory(this, this.properties);
  this.registry = new Registry(packages, this.properties);

  this.typeCache = {};
}


/**
 * Create an instance of the specified type.
 *
 * @method Moddle#create
 *
 * @example
 *
 * var foo = moddle.create('my:Foo');
 * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @param  {Object} attrs   a number of attributes to initialize the model instance with
 * @return {Object}         model instance
 */
Moddle.prototype.create = function(descriptor, attrs) {
  var Type = this.getType(descriptor);

  if (!Type) {
    throw new Error('unknown type <' + descriptor + '>');
  }

  return new Type(attrs);
};


/**
 * Returns the type representing a given descriptor
 *
 * @method Moddle#getType
 *
 * @example
 *
 * var Foo = moddle.getType('my:Foo');
 * var foo = new Foo({ 'id' : 'FOO_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @return {Object}         the type representing the descriptor
 */
Moddle.prototype.getType = function(descriptor) {

  var cache = this.typeCache;

  var name = isString(descriptor) ? descriptor : descriptor.ns.name;

  var type = cache[name];

  if (!type) {
    descriptor = this.registry.getEffectiveDescriptor(name);
    type = cache[name] = this.factory.createType(descriptor);
  }

  return type;
};


/**
 * Creates an any-element type to be used within model instances.
 *
 * This can be used to create custom elements that lie outside the meta-model.
 * The created element contains all the meta-data required to serialize it
 * as part of meta-model elements.
 *
 * @method Moddle#createAny
 *
 * @example
 *
 * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
 *   value: 'bar'
 * });
 *
 * var container = moddle.create('my:Container', 'http://my', {
 *   any: [ foo ]
 * });
 *
 * // go ahead and serialize the stuff
 *
 *
 * @param  {String} name  the name of the element
 * @param  {String} nsUri the namespace uri of the element
 * @param  {Object} [properties] a map of properties to initialize the instance with
 * @return {Object} the any type instance
 */
Moddle.prototype.createAny = function(name, nsUri, properties) {

  var nameNs = parseName(name);

  var element = {
    $type: name,
    $instanceOf: function(type) {
      return type === this.$type;
    }
  };

  var descriptor = {
    name: name,
    isGeneric: true,
    ns: {
      prefix: nameNs.prefix,
      localName: nameNs.localName,
      uri: nsUri
    }
  };

  this.properties.defineDescriptor(element, descriptor);
  this.properties.defineModel(element, this);
  this.properties.define(element, '$parent', { enumerable: false, writable: true });

  forEach(properties, function(a, key) {
    if (isObject(a) && a.value !== undefined) {
      element[a.name] = a.value;
    } else {
      element[key] = a;
    }
  });

  return element;
};

/**
 * Returns a registered package by uri or prefix
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackage = function(uriOrPrefix) {
  return this.registry.getPackage(uriOrPrefix);
};

/**
 * Returns a snapshot of all known packages
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackages = function() {
  return this.registry.getPackages();
};

/**
 * Returns the descriptor for an element
 */
Moddle.prototype.getElementDescriptor = function(element) {
  return element.$descriptor;
};

/**
 * Returns true if the given descriptor or instance
 * represents the given type.
 *
 * May be applied to this, if element is omitted.
 */
Moddle.prototype.hasType = function(element, type) {
  if (type === undefined) {
    type = element;
    element = this;
  }

  var descriptor = element.$model.getElementDescriptor(element);

  return (type in descriptor.allTypesByName);
};

/**
 * Returns the descriptor of an elements named property
 */
Moddle.prototype.getPropertyDescriptor = function(element, property) {
  return this.getElementDescriptor(element).propertiesByName[property];
};

/**
 * Returns a mapped type's descriptor
 */
Moddle.prototype.getTypeDescriptor = function(type) {
  return this.registry.typeMap[type];
};

var fromCharCode = String.fromCharCode;

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;

var ENTITY_MAPPING = {
  'amp': '&',
  'apos': '\'',
  'gt': '>',
  'lt': '<',
  'quot': '"'
};

// map UPPERCASE variants of supported special chars
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});


function replaceEntities(_, d, x, z) {

  // reserved names, i.e. &nbsp;
  if (z) {
    if (hasOwnProperty$2.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {

      // fall back to original value
      return '&' + z + ';';
    }
  }

  // decimal encoded char
  if (d) {
    return fromCharCode(d);
  }

  // hex encoded char
  return fromCharCode(parseInt(x, 16));
}


/**
 * A basic entity decoder that can decode a minimal
 * sub-set of reserved names (&amp;) as well as
 * hex (&#xaaf;) and decimal (&#1231;) encoded characters.
 *
 * @param {string} str
 *
 * @return {string} decoded string
 */
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf('&') !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }

  return s;
}

var XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';
var XSI_PREFIX = 'xsi';
var XSI_TYPE = 'xsi:type';

var NON_WHITESPACE_OUTSIDE_ROOT_NODE = 'non-whitespace outside of root node';

function error(msg) {
  return new Error(msg);
}

function missingNamespaceForPrefix(prefix) {
  return 'missing namespace for prefix <' + prefix + '>';
}

function getter(getFn) {
  return {
    'get': getFn,
    'enumerable': true
  };
}

function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}

function uriPrefix(prefix) {
  return prefix + '$uri';
}

function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {},
      uri,
      prefix;

  for (uri in nsUriToPrefix) {
    prefix = nsUriToPrefix[uri];
    nsMatrix[prefix] = prefix;
    nsMatrix[uriPrefix(prefix)] = uri;
  }

  return nsMatrix;
}

function noopGetContext() {
  return { 'line': 0, 'column': 0 };
}

function throwFunc(err) {
  throw err;
}

/**
 * Creates a new parser with the given options.
 *
 * @constructor
 *
 * @param  {!Object<string, ?>=} options
 */
function Parser(options) {

  if (!this) {
    return new Parser(options);
  }

  var proxy = options && options['proxy'];

  var onText,
      onOpenTag,
      onCloseTag,
      onCDATA,
      onError = throwFunc,
      onWarning,
      onComment,
      onQuestion,
      onAttention;

  var getContext = noopGetContext;

  /**
   * Do we need to parse the current elements attributes for namespaces?
   *
   * @type {boolean}
   */
  var maybeNS = false;

  /**
   * Do we process namespaces at all?
   *
   * @type {boolean}
   */
  var isNamespace = false;

  /**
   * The caught error returned on parse end
   *
   * @type {Error}
   */
  var returnError = null;

  /**
   * Should we stop parsing?
   *
   * @type {boolean}
   */
  var parseStop = false;

  /**
   * A map of { uri: prefix } used by the parser.
   *
   * This map will ensure we can normalize prefixes during processing;
   * for each uri, only one prefix will be exposed to the handlers.
   *
   * @type {!Object<string, string>}}
   */
  var nsUriToPrefix;

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleError(err) {
    if (!(err instanceof Error)) {
      err = error(err);
    }

    returnError = err;

    onError(err, getContext);
  }

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleWarning(err) {

    if (!onWarning) {
      return;
    }

    if (!(err instanceof Error)) {
      err = error(err);
    }

    onWarning(err, getContext);
  }

  /**
   * Register parse listener.
   *
   * @param  {string}   name
   * @param  {Function} cb
   *
   * @return {Parser}
   */
  this['on'] = function(name, cb) {

    if (typeof cb !== 'function') {
      throw error('required args <name, cb>');
    }

    switch (name) {
    case 'openTag': onOpenTag = cb; break;
    case 'text': onText = cb; break;
    case 'closeTag': onCloseTag = cb; break;
    case 'error': onError = cb; break;
    case 'warn': onWarning = cb; break;
    case 'cdata': onCDATA = cb; break;
    case 'attention': onAttention = cb; break; // <!XXXXX zzzz="eeee">
    case 'question': onQuestion = cb; break; // <? ....  ?>
    case 'comment': onComment = cb; break;
    default:
      throw error('unsupported event: ' + name);
    }

    return this;
  };

  /**
   * Set the namespace to prefix mapping.
   *
   * @example
   *
   * parser.ns({
   *   'http://foo': 'foo',
   *   'http://bar': 'bar'
   * });
   *
   * @param  {!Object<string, string>} nsMap
   *
   * @return {Parser}
   */
  this['ns'] = function(nsMap) {

    if (typeof nsMap === 'undefined') {
      nsMap = {};
    }

    if (typeof nsMap !== 'object') {
      throw error('required args <nsMap={}>');
    }

    var _nsUriToPrefix = {}, k;

    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }

    // FORCE default mapping for schema instance
    _nsUriToPrefix[XSI_URI] = XSI_PREFIX;

    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;

    return this;
  };

  /**
   * Parse xml string.
   *
   * @param  {string} xml
   *
   * @return {Error} returnError, if not thrown
   */
  this['parse'] = function(xml) {
    if (typeof xml !== 'string') {
      throw error('required args <xml=string>');
    }

    returnError = null;

    parse(xml);

    getContext = noopGetContext;
    parseStop = false;

    return returnError;
  };

  /**
   * Stop parsing.
   */
  this['stop'] = function() {
    parseStop = true;
  };

  /**
   * Parse string, invoking configured listeners on element.
   *
   * @param  {string} xml
   */
  function parse(xml) {
    var nsMatrixStack = isNamespace ? [] : null,
        nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null,
        _nsMatrix,
        nodeStack = [],
        anonymousNsCount = 0,
        tagStart = false,
        tagEnd = false,
        i = 0, j = 0,
        x, y, q, w, v,
        xmlns,
        elementName,
        _elementName,
        elementProxy
        ;

    var attrsString = '',
        attrsStart = 0,
        cachedAttrs // false = parsed with errors, null = needs parsing
        ;

    /**
     * Parse attributes on demand and returns the parsed attributes.
     *
     * Return semantics: (1) `false` on attribute parse error,
     * (2) object hash on extracted attrs.
     *
     * @return {boolean|Object}
     */
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }

      var nsUri,
          nsUriPrefix,
          nsName,
          defaultAlias = isNamespace && nsMatrix['xmlns'],
          attrList = isNamespace && maybeNS ? [] : null,
          i = attrsStart,
          s = attrsString,
          l = s.length,
          hasNewMatrix,
          newalias,
          value,
          alias,
          name,
          attrs = {},
          seenAttrs = {},
          skipAttr,
          w,
          j;

      parseAttr:
      for (; i < l; i++) {
        skipAttr = false;
        w = s.charCodeAt(i);

        if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE={ \f\n\r\t\v}
          continue;
        }

        // wait for non whitespace character
        if (w < 65 || w > 122 || (w > 90 && w < 97)) {
          if (w !== 95 && w !== 58) { // char 95"_" 58":"
            handleWarning('illegal first char attribute name');
            skipAttr = true;
          }
        }

        // parse attribute name
        for (j = i + 1; j < l; j++) {
          w = s.charCodeAt(j);

          if (
            w > 96 && w < 123 ||
            w > 64 && w < 91 ||
            w > 47 && w < 59 ||
            w === 46 || // '.'
            w === 45 || // '-'
            w === 95 // '_'
          ) {
            continue;
          }

          // unexpected whitespace
          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            handleWarning('missing attribute value');
            i = j;

            continue parseAttr;
          }

          // expected "="
          if (w === 61) { // "=" == 61
            break;
          }

          handleWarning('illegal attribute name char');
          skipAttr = true;
        }

        name = s.substring(i, j);

        if (name === 'xmlns:xmlns') {
          handleWarning('illegal declaration of xmlns');
          skipAttr = true;
        }

        w = s.charCodeAt(j + 1);

        if (w === 34) { // '"'
          j = s.indexOf('"', i = j + 2);

          if (j === -1) {
            j = s.indexOf('\'', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else if (w === 39) { // "'"
          j = s.indexOf('\'', i = j + 2);

          if (j === -1) {
            j = s.indexOf('"', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else {
          handleWarning('missing attribute value quotes');
          skipAttr = true;

          // skip to next space
          for (j = j + 1; j < l; j++) {
            w = s.charCodeAt(j + 1);

            if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
              break;
            }
          }

        }

        if (j === -1) {
          handleWarning('missing closing quotes');

          j = l;
          skipAttr = true;
        }

        if (!skipAttr) {
          value = s.substring(i, j);
        }

        i = j;

        // ensure SPACE follows attribute
        // skip illegal content otherwise
        // example a="b"c
        for (; j + 1 < l; j++) {
          w = s.charCodeAt(j + 1);

          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            break;
          }

          // FIRST ILLEGAL CHAR
          if (i === j) {
            handleWarning('illegal character after attribute end');
            skipAttr = true;
          }
        }

        // advance cursor to next attribute
        i = j + 1;

        if (skipAttr) {
          continue parseAttr;
        }

        // check attribute re-declaration
        if (name in seenAttrs) {
          handleWarning('attribute <' + name + '> already defined');
          continue;
        }

        seenAttrs[name] = true;

        if (!isNamespace) {
          attrs[name] = value;
          continue;
        }

        // try to extract namespace information
        if (maybeNS) {
          newalias = (
            name === 'xmlns'
              ? 'xmlns'
              : (name.charCodeAt(0) === 120 && name.substr(0, 6) === 'xmlns:')
                ? name.substr(6)
                : null
          );

          // handle xmlns(:alias) assignment
          if (newalias !== null) {
            nsUri = decodeEntities(value);
            nsUriPrefix = uriPrefix(newalias);

            alias = nsUriToPrefix[nsUri];

            if (!alias) {

              // no prefix defined or prefix collision
              if (
                (newalias === 'xmlns') ||
                (nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri)
              ) {

                // alocate free ns prefix
                do {
                  alias = 'ns' + (anonymousNsCount++);
                } while (typeof nsMatrix[alias] !== 'undefined');
              } else {
                alias = newalias;
              }

              nsUriToPrefix[nsUri] = alias;
            }

            if (nsMatrix[newalias] !== alias) {
              if (!hasNewMatrix) {
                nsMatrix = cloneNsMatrix(nsMatrix);
                hasNewMatrix = true;
              }

              nsMatrix[newalias] = alias;
              if (newalias === 'xmlns') {
                nsMatrix[uriPrefix(alias)] = nsUri;
                defaultAlias = alias;
              }

              nsMatrix[nsUriPrefix] = nsUri;
            }

            // expose xmlns(:asd)="..." in attributes
            attrs[name] = value;
            continue;
          }

          // collect attributes until all namespace
          // declarations are processed
          attrList.push(name, value);
          continue;

        } /** end if (maybeNs) */

        // handle attributes on element without
        // namespace declarations
        w = name.indexOf(':');
        if (w === -1) {
          attrs[name] = value;
          continue;
        }

        // normalize ns attribute name
        if (!(nsName = nsMatrix[name.substring(0, w)])) {
          handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
          continue;
        }

        name = defaultAlias === nsName
          ? name.substr(w + 1)
          : nsName + name.substr(w);

        // end: normalize ns attribute name

        // normalize xsi:type ns attribute value
        if (name === XSI_TYPE) {
          w = value.indexOf(':');

          if (w !== -1) {
            nsName = value.substring(0, w);

            // handle default prefixes, i.e. xs:String gracefully
            nsName = nsMatrix[nsName] || nsName;
            value = nsName + value.substring(w);
          } else {
            value = defaultAlias + ':' + value;
          }
        }

        // end: normalize xsi:type ns attribute value

        attrs[name] = value;
      }


      // handle deferred, possibly namespaced attributes
      if (maybeNS) {

        // normalize captured attributes
        for (i = 0, l = attrList.length; i < l; i++) {

          name = attrList[i++];
          value = attrList[i];

          w = name.indexOf(':');

          if (w !== -1) {

            // normalize ns attribute name
            if (!(nsName = nsMatrix[name.substring(0, w)])) {
              handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
              continue;
            }

            name = defaultAlias === nsName
              ? name.substr(w + 1)
              : nsName + name.substr(w);

            // end: normalize ns attribute name

            // normalize xsi:type ns attribute value
            if (name === XSI_TYPE) {
              w = value.indexOf(':');

              if (w !== -1) {
                nsName = value.substring(0, w);

                // handle default prefixes, i.e. xs:String gracefully
                nsName = nsMatrix[nsName] || nsName;
                value = nsName + value.substring(w);
              } else {
                value = defaultAlias + ':' + value;
              }
            }

            // end: normalize xsi:type ns attribute value
          }

          attrs[name] = value;
        }

        // end: normalize captured attributes
      }

      return cachedAttrs = attrs;
    }

    /**
     * Extract the parse context { line, column, part }
     * from the current parser position.
     *
     * @return {Object} parse context
     */
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;

      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match;
      var data;

      while (i >= startOfLine) {

        match = splitsRe.exec(xml);

        if (!match) {
          break;
        }

        // end of line = (break idx + break chars)
        endOfLine = match[0].length + match.index;

        if (endOfLine > i) {
          break;
        }

        // advance to next line
        line += 1;

        startOfLine = endOfLine;
      }

      // EOF errors
      if (i == -1) {
        column = endOfLine;
        data = xml.substring(j);
      } else

      // start errors
      if (j === 0) {
        data = xml.substring(j, i);
      }

      // other errors
      else {
        column = i - startOfLine;
        data = (j == -1 ? xml.substring(i) : xml.substring(i, j + 1));
      }

      return {
        'data': data,
        'line': line,
        'column': column
      };
    }

    getContext = getParseContext;


    if (proxy) {
      elementProxy = Object.create({}, {
        'name': getter(function() {
          return elementName;
        }),
        'originalName': getter(function() {
          return _elementName;
        }),
        'attrs': getter(getAttrs),
        'ns': getter(function() {
          return nsMatrix;
        })
      });
    }

    // actual parse logic
    while (j !== -1) {

      if (xml.charCodeAt(j) === 60) { // "<"
        i = j;
      } else {
        i = xml.indexOf('<', j);
      }

      // parse end
      if (i === -1) {
        if (nodeStack.length) {
          return handleError('unexpected end of file');
        }

        if (j === 0) {
          return handleError('missing start tag');
        }

        if (j < xml.length) {
          if (xml.substring(j).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
          }
        }

        return;
      }

      // parse text
      if (j !== i) {

        if (nodeStack.length) {
          if (onText) {
            onText(xml.substring(j, i), decodeEntities, getContext);

            if (parseStop) {
              return;
            }
          }
        } else {
          if (xml.substring(j, i).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);

            if (parseStop) {
              return;
            }
          }
        }
      }

      w = xml.charCodeAt(i+1);

      // parse comments + CDATA
      if (w === 33) { // "!"
        q = xml.charCodeAt(i+2);

        // CDATA section
        if (q === 91 && xml.substr(i + 3, 6) === 'CDATA[') { // 91 == "["
          j = xml.indexOf(']]>', i);
          if (j === -1) {
            return handleError('unclosed cdata');
          }

          if (onCDATA) {
            onCDATA(xml.substring(i + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }

        // comment
        if (q === 45 && xml.charCodeAt(i + 3) === 45) { // 45 == "-"
          j = xml.indexOf('-->', i);
          if (j === -1) {
            return handleError('unclosed comment');
          }


          if (onComment) {
            onComment(xml.substring(i + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }
      }

      // parse question <? ... ?>
      if (w === 63) { // "?"
        j = xml.indexOf('?>', i);
        if (j === -1) {
          return handleError('unclosed question');
        }

        if (onQuestion) {
          onQuestion(xml.substring(i, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }

        j += 2;
        continue;
      }

      // find matching closing tag for attention or standard tags
      // for that we must skip through attribute values
      // (enclosed in single or double quotes)
      for (x = i + 1; ; x++) {
        v = xml.charCodeAt(x);
        if (isNaN(v)) {
          j = -1;
          return handleError('unclosed tag');
        }

        // [10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"
        // skips the quoted string
        // (double quotes) does not appear in a literal enclosed by (double quotes)
        // (single quote) does not appear in a literal enclosed by (single quote)
        if (v === 34) { //  '"'
          q = xml.indexOf('"', x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 39) { // "'"
          q = xml.indexOf("'", x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 62) { // '>'
          j = x;
          break;
        }
      }


      // parse attention <! ...>
      // previously comment and CDATA have already been parsed
      if (w === 33) { // "!"

        if (onAttention) {
          onAttention(xml.substring(i, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }

        j += 1;
        continue;
      }

      // don't process attributes;
      // there are none
      cachedAttrs = {};

      // if (xml.charCodeAt(i+1) === 47) { // </...
      if (w === 47) { // </...
        tagStart = false;
        tagEnd = true;

        if (!nodeStack.length) {
          return handleError('missing open tag');
        }

        // verify open <-> close tag match
        x = elementName = nodeStack.pop();
        q = i + 2 + x.length;

        if (xml.substring(i + 2, q) !== x) {
          return handleError('closing tag mismatch');
        }

        // verify chars in close tag
        for (; q < j; q++) {
          w = xml.charCodeAt(q);

          if (w === 32 || (w > 8 && w < 14)) { // \f\n\r\t\v space
            continue;
          }

          return handleError('close tag');
        }

      } else {
        if (xml.charCodeAt(j - 1) === 47) { // .../>
          x = elementName = xml.substring(i + 1, j - 1);

          tagStart = true;
          tagEnd = true;

        } else {
          x = elementName = xml.substring(i + 1, j);

          tagStart = true;
          tagEnd = false;
        }

        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) { // char 95"_" 58":"
          return handleError('illegal first char nodeName');
        }

        for (q = 1, y = x.length; q < y; q++) {
          w = x.charCodeAt(q);

          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95 || w == 46) {
            continue;
          }

          if (w === 32 || (w < 14 && w > 8)) { // \f\n\r\t\v space
            elementName = x.substring(0, q);

            // maybe there are attributes
            cachedAttrs = null;
            break;
          }

          return handleError('invalid nodeName');
        }

        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }

      if (isNamespace) {

        _nsMatrix = nsMatrix;

        if (tagStart) {

          // remember old namespace
          // unless we're self-closing
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }

          if (cachedAttrs === null) {

            // quick check, whether there may be namespace
            // declarations on the node; if that is the case
            // we need to eagerly parse the node attributes
            if ((maybeNS = x.indexOf('xmlns', q) !== -1)) {
              attrsStart = q;
              attrsString = x;

              getAttrs();

              maybeNS = false;
            }
          }
        }

        _elementName = elementName;

        w = elementName.indexOf(':');
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];

          // prefix given; namespace must exist
          if (!xmlns) {
            return handleError('missing namespace on <' + _elementName + '>');
          }

          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix['xmlns'];

          // if no default namespace is defined,
          // we'll import the element as anonymous.
          //
          // it is up to users to correct that to the document defined
          // targetNamespace, or whatever their undersanding of the
          // XML spec mandates.
        }

        // adjust namespace prefixs as configured
        if (xmlns) {
          elementName = xmlns + ':' + elementName;
        }

      }

      if (tagStart) {
        attrsStart = q;
        attrsString = x;

        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }

          if (parseStop) {
            return;
          }
        }

      }

      if (tagEnd) {

        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);

          if (parseStop) {
            return;
          }
        }

        // restore old namespace
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }

      j += 1;
    }
  } /** end parse */

}

function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

var DEFAULT_NS_MAP = {
  'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
  'xml': 'http://www.w3.org/XML/1998/namespace'
};

var XSI_TYPE$1 = 'xsi:type';

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE$1;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function aliasToName(aliasNs, pkg) {

  if (!hasLowerCaseAlias(pkg)) {
    return aliasNs.name;
  }

  return aliasNs.prefix + ':' + capitalize(aliasNs.localName);
}

function prefixedToName(nameNs, pkg) {

  var name = nameNs.name,
      localName = nameNs.localName;

  var typePrefix = pkg.xml && pkg.xml.typePrefix;

  if (typePrefix && localName.indexOf(typePrefix) === 0) {
    return nameNs.prefix + ':' + localName.slice(typePrefix.length);
  } else {
    return name;
  }
}

function normalizeXsiTypeName(name, model) {

  var nameNs = parseName(name);
  var pkg = model.getPackage(nameNs.prefix);

  return prefixedToName(nameNs, pkg);
}

function error$1(message) {
  return new Error(message);
}

/**
 * Get the moddle descriptor for a given instance or type.
 *
 * @param  {ModdleElement|Function} element
 *
 * @return {Object} the moddle descriptor
 */
function getModdleDescriptor(element) {
  return element.$descriptor;
}


/**
 * A parse context.
 *
 * @class
 *
 * @param {Object} options
 * @param {ElementHandler} options.rootHandler the root handler for parsing a document
 * @param {boolean} [options.lax=false] whether or not to ignore invalid elements
 */
function Context(options) {

  /**
   * @property {ElementHandler} rootHandler
   */

  /**
   * @property {Boolean} lax
   */

  assign(this, options);

  this.elementsById = {};
  this.references = [];
  this.warnings = [];

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */
  this.addReference = function(reference) {
    this.references.push(reference);
  };

  /**
   * Add a processed element.
   *
   * @param {ModdleElement} element
   */
  this.addElement = function(element) {

    if (!element) {
      throw error$1('expected element');
    }

    var elementsById = this.elementsById;

    var descriptor = getModdleDescriptor(element);

    var idProperty = descriptor.idProperty,
        id;

    if (idProperty) {
      id = element.get(idProperty.name);

      if (id) {

        // for QName validation as per http://www.w3.org/TR/REC-xml/#NT-NameChar
        if (!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(id)) {
          throw new Error('illegal ID <' + id + '>');
        }

        if (elementsById[id]) {
          throw error$1('duplicate ID <' + id + '>');
        }

        elementsById[id] = element;
      }
    }
  };

  /**
   * Add an import warning.
   *
   * @param {Object} warning
   * @param {String} warning.message
   * @param {Error} [warning.error]
   */
  this.addWarning = function(warning) {
    this.warnings.push(warning);
  };
}

function BaseHandler() {}

BaseHandler.prototype.handleEnd = function() {};
BaseHandler.prototype.handleText = function() {};
BaseHandler.prototype.handleNode = function() {};


/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */
function NoopHandler() { }

NoopHandler.prototype = Object.create(BaseHandler.prototype);

NoopHandler.prototype.handleNode = function() {
  return this;
};

function BodyHandler() {}

BodyHandler.prototype = Object.create(BaseHandler.prototype);

BodyHandler.prototype.handleText = function(text) {
  this.body = (this.body || '') + text;
};

function ReferenceHandler(property, context) {
  this.property = property;
  this.context = context;
}

ReferenceHandler.prototype = Object.create(BodyHandler.prototype);

ReferenceHandler.prototype.handleNode = function(node) {

  if (this.element) {
    throw error$1('expected no sub nodes');
  } else {
    this.element = this.createReference(node);
  }

  return this;
};

ReferenceHandler.prototype.handleEnd = function() {
  this.element.id = this.body;
};

ReferenceHandler.prototype.createReference = function(node) {
  return {
    property: this.property.ns.name,
    id: ''
  };
};

function ValueHandler(propertyDesc, element) {
  this.element = element;
  this.propertyDesc = propertyDesc;
}

ValueHandler.prototype = Object.create(BodyHandler.prototype);

ValueHandler.prototype.handleEnd = function() {

  var value = this.body || '',
      element = this.element,
      propertyDesc = this.propertyDesc;

  value = coerceType(propertyDesc.type, value);

  if (propertyDesc.isMany) {
    element.get(propertyDesc.name).push(value);
  } else {
    element.set(propertyDesc.name, value);
  }
};


function BaseElementHandler() {}

BaseElementHandler.prototype = Object.create(BodyHandler.prototype);

BaseElementHandler.prototype.handleNode = function(node) {
  var parser = this,
      element = this.element;

  if (!element) {
    element = this.element = this.createElement(node);

    this.context.addElement(element);
  } else {
    parser = this.handleChild(node);
  }

  return parser;
};

/**
 * @class Reader.ElementHandler
 *
 */
function ElementHandler(model, typeName, context) {
  this.model = model;
  this.type = model.getType(typeName);
  this.context = context;
}

ElementHandler.prototype = Object.create(BaseElementHandler.prototype);

ElementHandler.prototype.addReference = function(reference) {
  this.context.addReference(reference);
};

ElementHandler.prototype.handleText = function(text) {

  var element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (!bodyProperty) {
    throw error$1('unexpected body text <' + text + '>');
  }

  BodyHandler.prototype.handleText.call(this, text);
};

ElementHandler.prototype.handleEnd = function() {

  var value = this.body,
      element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (bodyProperty && value !== undefined) {
    value = coerceType(bodyProperty.type, value);
    element.set(bodyProperty.name, value);
  }
};

/**
 * Create an instance of the model from the given node.
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.createElement = function(node) {
  var attributes = node.attributes,
      Type = this.type,
      descriptor = getModdleDescriptor(Type),
      context = this.context,
      instance = new Type({}),
      model = this.model,
      propNameNs;

  forEach(attributes, function(value, name) {

    var prop = descriptor.propertiesByName[name],
        values;

    if (prop && prop.isReference) {

      if (!prop.isMany) {
        context.addReference({
          element: instance,
          property: prop.ns.name,
          id: value
        });
      } else {

        // IDREFS: parse references as whitespace-separated list
        values = value.split(' ');

        forEach(values, function(v) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: v
          });
        });
      }

    } else {
      if (prop) {
        value = coerceType(prop.type, value);
      } else
      if (name !== 'xmlns') {
        propNameNs = parseName(name, descriptor.ns.prefix);

        // check whether attribute is defined in a well-known namespace
        // if that is the case we emit a warning to indicate potential misuse
        if (model.getPackage(propNameNs.prefix)) {

          context.addWarning({
            message: 'unknown attribute <' + name + '>',
            element: instance,
            property: name,
            value: value
          });
        }
      }

      instance.set(name, value);
    }
  });

  return instance;
};

ElementHandler.prototype.getPropertyForNode = function(node) {

  var name = node.name;
  var nameNs = parseName(name);

  var type = this.type,
      model = this.model,
      descriptor = getModdleDescriptor(type);

  var propertyName = nameNs.name,
      property = descriptor.propertiesByName[propertyName],
      elementTypeName,
      elementType;

  // search for properties by name first

  if (property && !property.isAttr) {

    if (serializeAsType(property)) {
      elementTypeName = node.attributes[XSI_TYPE$1];

      // xsi type is optional, if it does not exists the
      // default type is assumed
      if (elementTypeName) {

        // take possible type prefixes from XML
        // into account, i.e.: xsi:type="t{ActualType}"
        elementTypeName = normalizeXsiTypeName(elementTypeName, model);

        elementType = model.getType(elementTypeName);

        return assign({}, property, {
          effectiveType: getModdleDescriptor(elementType).name
        });
      }
    }

    // search for properties by name first
    return property;
  }

  var pkg = model.getPackage(nameNs.prefix);

  if (pkg) {
    elementTypeName = aliasToName(nameNs, pkg);
    elementType = model.getType(elementTypeName);

    // search for collection members later
    property = find(descriptor.properties, function(p) {
      return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
    });

    if (property) {
      return assign({}, property, {
        effectiveType: getModdleDescriptor(elementType).name
      });
    }
  } else {

    // parse unknown element (maybe extension)
    property = find(descriptor.properties, function(p) {
      return !p.isReference && !p.isAttribute && p.type === 'Element';
    });

    if (property) {
      return property;
    }
  }

  throw error$1('unrecognized element <' + nameNs.name + '>');
};

ElementHandler.prototype.toString = function() {
  return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
};

ElementHandler.prototype.valueHandler = function(propertyDesc, element) {
  return new ValueHandler(propertyDesc, element);
};

ElementHandler.prototype.referenceHandler = function(propertyDesc) {
  return new ReferenceHandler(propertyDesc, this.context);
};

ElementHandler.prototype.handler = function(type) {
  if (type === 'Element') {
    return new GenericElementHandler(this.model, type, this.context);
  } else {
    return new ElementHandler(this.model, type, this.context);
  }
};

/**
 * Handle the child element parsing
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.handleChild = function(node) {
  var propertyDesc, type, element, childHandler;

  propertyDesc = this.getPropertyForNode(node);
  element = this.element;

  type = propertyDesc.effectiveType || propertyDesc.type;

  if (isSimple(type)) {
    return this.valueHandler(propertyDesc, element);
  }

  if (propertyDesc.isReference) {
    childHandler = this.referenceHandler(propertyDesc).handleNode(node);
  } else {
    childHandler = this.handler(type).handleNode(node);
  }

  var newElement = childHandler.element;

  // child handles may decide to skip elements
  // by not returning anything
  if (newElement !== undefined) {

    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(newElement);
    } else {
      element.set(propertyDesc.name, newElement);
    }

    if (propertyDesc.isReference) {
      assign(newElement, {
        element: element
      });

      this.context.addReference(newElement);
    } else {

      // establish child -> parent relationship
      newElement.$parent = element;
    }
  }

  return childHandler;
};

/**
 * An element handler that performs special validation
 * to ensure the node it gets initialized with matches
 * the handlers type (namespace wise).
 *
 * @param {Moddle} model
 * @param {String} typeName
 * @param {Context} context
 */
function RootElementHandler(model, typeName, context) {
  ElementHandler.call(this, model, typeName, context);
}

RootElementHandler.prototype = Object.create(ElementHandler.prototype);

RootElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      nameNs = parseName(name),
      model = this.model,
      type = this.type,
      pkg = model.getPackage(nameNs.prefix),
      typeName = pkg && aliasToName(nameNs, pkg) || name;

  // verify the correct namespace if we parse
  // the first element in the handler tree
  //
  // this ensures we don't mistakenly import wrong namespace elements
  if (!type.hasType(typeName)) {
    throw error$1('unexpected element <' + node.originalName + '>');
  }

  return ElementHandler.prototype.createElement.call(this, node);
};


function GenericElementHandler(model, typeName, context) {
  this.model = model;
  this.context = context;
}

GenericElementHandler.prototype = Object.create(BaseElementHandler.prototype);

GenericElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      ns = parseName(name),
      prefix = ns.prefix,
      uri = node.ns[prefix + '$uri'],
      attributes = node.attributes;

  return this.model.createAny(name, uri, attributes);
};

GenericElementHandler.prototype.handleChild = function(node) {

  var handler = new GenericElementHandler(this.model, 'Element', this.context).handleNode(node),
      element = this.element;

  var newElement = handler.element,
      children;

  if (newElement !== undefined) {
    children = element.$children = element.$children || [];
    children.push(newElement);

    // establish child -> parent relationship
    newElement.$parent = element;
  }

  return handler;
};

GenericElementHandler.prototype.handleEnd = function() {
  if (this.body) {
    this.element.$body = this.body;
  }
};

/**
 * A reader for a meta-model
 *
 * @param {Object} options
 * @param {Model} options.model used to read xml files
 * @param {Boolean} options.lax whether to make parse errors warnings
 */
function Reader(options) {

  if (options instanceof Moddle) {
    options = {
      model: options
    };
  }

  assign(this, { lax: false }, options);
}

/**
 * The fromXML result.
 *
 * @typedef {Object} ParseResult
 *
 * @property {ModdleElement} rootElement
 * @property {Array<Object>} references
 * @property {Array<Error>} warnings
 * @property {Object} elementsById - a mapping containing each ID -> ModdleElement
 */

/**
 * The fromXML result.
 *
 * @typedef {Error} ParseError
 *
 * @property {Array<Error>} warnings
 */

/**
 * Parse the given XML into a moddle document tree.
 *
 * @param {String} xml
 * @param {ElementHandler|Object} options or rootHandler
 *
 * @returns {Promise<ParseResult, ParseError>}
 */
Reader.prototype.fromXML = function(xml, options, done) {

  var rootHandler = options.rootHandler;

  if (options instanceof ElementHandler) {

    // root handler passed via (xml, { rootHandler: ElementHandler }, ...)
    rootHandler = options;
    options = {};
  } else {
    if (typeof options === 'string') {

      // rootHandler passed via (xml, 'someString', ...)
      rootHandler = this.handler(options);
      options = {};
    } else if (typeof rootHandler === 'string') {

      // rootHandler passed via (xml, { rootHandler: 'someString' }, ...)
      rootHandler = this.handler(rootHandler);
    }
  }

  var model = this.model,
      lax = this.lax;

  var context = new Context(assign({}, options, { rootHandler: rootHandler })),
      parser = new Parser({ proxy: true }),
      stack = createStack();

  rootHandler.context = context;

  // push root handler
  stack.push(rootHandler);


  /**
   * Handle error.
   *
   * @param  {Error} err
   * @param  {Function} getContext
   * @param  {boolean} lax
   *
   * @return {boolean} true if handled
   */
  function handleError(err, getContext, lax) {

    var ctx = getContext();

    var line = ctx.line,
        column = ctx.column,
        data = ctx.data;

    // we receive the full context data here,
    // for elements trim down the information
    // to the tag name, only
    if (data.charAt(0) === '<' && data.indexOf(' ') !== -1) {
      data = data.slice(0, data.indexOf(' ')) + '>';
    }

    var message =
      'unparsable content ' + (data ? data + ' ' : '') + 'detected\n\t' +
        'line: ' + line + '\n\t' +
        'column: ' + column + '\n\t' +
        'nested error: ' + err.message;

    if (lax) {
      context.addWarning({
        message: message,
        error: err
      });

      return true;
    } else {
      throw error$1(message);
    }
  }

  function handleWarning(err, getContext) {

    // just like handling errors in <lax=true> mode
    return handleError(err, getContext, true);
  }

  /**
   * Resolve collected references on parse end.
   */
  function resolveReferences() {

    var elementsById = context.elementsById;
    var references = context.references;

    var i, r;

    for (i = 0; (r = references[i]); i++) {
      var element = r.element;
      var reference = elementsById[r.id];
      var property = getModdleDescriptor(element).propertiesByName[r.property];

      if (!reference) {
        context.addWarning({
          message: 'unresolved reference <' + r.id + '>',
          element: r.element,
          property: r.property,
          value: r.id
        });
      }

      if (property.isMany) {
        var collection = element.get(property.name),
            idx = collection.indexOf(r);

        // we replace an existing place holder (idx != -1) or
        // append to the collection instead
        if (idx === -1) {
          idx = collection.length;
        }

        if (!reference) {

          // remove unresolvable reference
          collection.splice(idx, 1);
        } else {

          // add or update reference in collection
          collection[idx] = reference;
        }
      } else {
        element.set(property.name, reference);
      }
    }
  }

  function handleClose() {
    stack.pop().handleEnd();
  }

  var PREAMBLE_START_PATTERN = /^<\?xml /i;

  var ENCODING_PATTERN = / encoding="([^"]+)"/i;

  var UTF_8_PATTERN = /^utf-8$/i;

  function handleQuestion(question) {

    if (!PREAMBLE_START_PATTERN.test(question)) {
      return;
    }

    var match = ENCODING_PATTERN.exec(question);
    var encoding = match && match[1];

    if (!encoding || UTF_8_PATTERN.test(encoding)) {
      return;
    }

    context.addWarning({
      message:
        'unsupported document encoding <' + encoding + '>, ' +
        'falling back to UTF-8'
    });
  }

  function handleOpen(node, getContext) {
    var handler = stack.peek();

    try {
      stack.push(handler.handleNode(node));
    } catch (err) {

      if (handleError(err, getContext, lax)) {
        stack.push(new NoopHandler());
      }
    }
  }

  function handleCData(text, getContext) {

    try {
      stack.peek().handleText(text);
    } catch (err) {
      handleWarning(err, getContext);
    }
  }

  function handleText(text, getContext) {

    // strip whitespace only nodes, i.e. before
    // <!CDATA[ ... ]> sections and in between tags
    text = text.trim();

    if (!text) {
      return;
    }

    handleCData(text, getContext);
  }

  var uriMap = model.getPackages().reduce(function(uriMap, p) {
    uriMap[p.uri] = p.prefix;

    return uriMap;
  }, {
    'http://www.w3.org/XML/1998/namespace': 'xml' // add default xml ns
  });
  parser
    .ns(uriMap)
    .on('openTag', function(obj, decodeStr, selfClosing, getContext) {

      // gracefully handle unparsable attributes (attrs=false)
      var attrs = obj.attrs || {};

      var decodedAttrs = Object.keys(attrs).reduce(function(d, key) {
        var value = decodeStr(attrs[key]);

        d[key] = value;

        return d;
      }, {});

      var node = {
        name: obj.name,
        originalName: obj.originalName,
        attributes: decodedAttrs,
        ns: obj.ns
      };

      handleOpen(node, getContext);
    })
    .on('question', handleQuestion)
    .on('closeTag', handleClose)
    .on('cdata', handleCData)
    .on('text', function(text, decodeEntities, getContext) {
      handleText(decodeEntities(text), getContext);
    })
    .on('error', handleError)
    .on('warn', handleWarning);

  // async XML parsing to make sure the execution environment
  // (node or brower) is kept responsive and that certain optimization
  // strategies can kick in.
  return new Promise(function(resolve, reject) {

    var err;

    try {
      parser.parse(xml);

      resolveReferences();
    } catch (e) {
      err = e;
    }

    var rootElement = rootHandler.element;

    if (!err && !rootElement) {
      err = error$1('failed to parse document as <' + rootHandler.type.$descriptor.name + '>');
    }

    var warnings = context.warnings;
    var references = context.references;
    var elementsById = context.elementsById;

    if (err) {
      err.warnings = warnings;

      return reject(err);
    } else {
      return resolve({
        rootElement: rootElement,
        elementsById: elementsById,
        references: references,
        warnings: warnings
      });
    }
  });
};

Reader.prototype.handler = function(name) {
  return new RootElementHandler(this.model, name);
};


// helpers //////////////////////////

function createStack() {
  var stack = [];

  Object.defineProperty(stack, 'peek', {
    value: function() {
      return this[this.length - 1];
    }
  });

  return stack;
}

var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';

var ESCAPE_ATTR_CHARS = /<|>|'|"|&|\n\r|\n/g;
var ESCAPE_CHARS = /<|>|&/g;


function Namespaces(parent) {

  var prefixMap = {};
  var uriMap = {};
  var used = {};

  var wellknown = [];
  var custom = [];

  // API

  this.byUri = function(uri) {
    return uriMap[uri] || (
      parent && parent.byUri(uri)
    );
  };

  this.add = function(ns, isWellknown) {

    uriMap[ns.uri] = ns;

    if (isWellknown) {
      wellknown.push(ns);
    } else {
      custom.push(ns);
    }

    this.mapPrefix(ns.prefix, ns.uri);
  };

  this.uriByPrefix = function(prefix) {
    return prefixMap[prefix || 'xmlns'];
  };

  this.mapPrefix = function(prefix, uri) {
    prefixMap[prefix || 'xmlns'] = uri;
  };

  this.getNSKey = function(ns) {
    return (ns.prefix !== undefined) ? (ns.uri + '|' + ns.prefix) : ns.uri;
  };

  this.logUsed = function(ns) {

    var uri = ns.uri;
    var nsKey = this.getNSKey(ns);

    used[nsKey] = this.byUri(uri);

    // Inform parent recursively about the usage of this NS
    if (parent) {
      parent.logUsed(ns);
    }
  };

  this.getUsed = function(ns) {

    function isUsed(ns) {
      var nsKey = self.getNSKey(ns);

      return used[nsKey];
    }

    var self = this;

    var allNs = [].concat(wellknown, custom);

    return allNs.filter(isUsed);
  };

}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function nameToAlias(name, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

function nsName(ns) {
  if (isString(ns)) {
    return ns;
  } else {
    return (ns.prefix ? ns.prefix + ':' : '') + ns.localName;
  }
}

function getNsAttrs(namespaces) {

  return map(namespaces.getUsed(), function(ns) {
    var name = 'xmlns' + (ns.prefix ? ':' + ns.prefix : '');
    return { name: name, value: ns.uri };
  });

}

function getElementNs(ns, descriptor) {
  if (descriptor.isGeneric) {
    return assign({ localName: descriptor.ns.localName }, ns);
  } else {
    return assign({ localName: nameToAlias(descriptor.ns.localName, descriptor.$pkg) }, ns);
  }
}

function getPropertyNs(ns, descriptor) {
  return assign({ localName: descriptor.ns.localName }, ns);
}

function getSerializableProperties(element) {
  var descriptor = element.$descriptor;

  return filter(descriptor.properties, function(p) {
    var name = p.name;

    if (p.isVirtual) {
      return false;
    }

    // do not serialize defaults
    if (!has(element, name)) {
      return false;
    }

    var value = element[name];

    // do not serialize default equals
    if (value === p.default) {
      return false;
    }

    // do not serialize null properties
    if (value === null) {
      return false;
    }

    return p.isMany ? value.length : true;
  });
}

var ESCAPE_ATTR_MAP = {
  '\n': '#10',
  '\n\r': '#10',
  '"': '#34',
  '\'': '#39',
  '<': '#60',
  '>': '#62',
  '&': '#38'
};

var ESCAPE_MAP = {
  '<': 'lt',
  '>': 'gt',
  '&': 'amp'
};

function escape$1(str, charPattern, replaceMap) {

  // ensure we are handling strings here
  str = isString(str) ? str : '' + str;

  return str.replace(charPattern, function(s) {
    return '&' + replaceMap[s] + ';';
  });
}

/**
 * Escape a string attribute to not contain any bad values (line breaks, '"', ...)
 *
 * @param {String} str the string to escape
 * @return {String} the escaped string
 */
function escapeAttr(str) {
  return escape$1(str, ESCAPE_ATTR_CHARS, ESCAPE_ATTR_MAP);
}

function escapeBody(str) {
  return escape$1(str, ESCAPE_CHARS, ESCAPE_MAP);
}

function filterAttributes(props) {
  return filter(props, function(p) { return p.isAttr; });
}

function filterContained(props) {
  return filter(props, function(p) { return !p.isAttr; });
}


function ReferenceSerializer(tagName) {
  this.tagName = tagName;
}

ReferenceSerializer.prototype.build = function(element) {
  this.element = element;
  return this;
};

ReferenceSerializer.prototype.serializeTo = function(writer) {
  writer
    .appendIndent()
    .append('<' + this.tagName + '>' + this.element.id + '</' + this.tagName + '>')
    .appendNewLine();
};

function BodySerializer() {}

BodySerializer.prototype.serializeValue =
BodySerializer.prototype.serializeTo = function(writer) {
  writer.append(
    this.escape
      ? escapeBody(this.value)
      : this.value
  );
};

BodySerializer.prototype.build = function(prop, value) {
  this.value = value;

  if (prop.type === 'String' && value.search(ESCAPE_CHARS) !== -1) {
    this.escape = true;
  }

  return this;
};

function ValueSerializer(tagName) {
  this.tagName = tagName;
}

inherits(ValueSerializer, BodySerializer);

ValueSerializer.prototype.serializeTo = function(writer) {

  writer
    .appendIndent()
    .append('<' + this.tagName + '>');

  this.serializeValue(writer);

  writer
    .append('</' + this.tagName + '>')
    .appendNewLine();
};

function ElementSerializer(parent, propertyDescriptor) {
  this.body = [];
  this.attrs = [];

  this.parent = parent;
  this.propertyDescriptor = propertyDescriptor;
}

ElementSerializer.prototype.build = function(element) {
  this.element = element;

  var elementDescriptor = element.$descriptor,
      propertyDescriptor = this.propertyDescriptor;

  var otherAttrs,
      properties;

  var isGeneric = elementDescriptor.isGeneric;

  if (isGeneric) {
    otherAttrs = this.parseGeneric(element);
  } else {
    otherAttrs = this.parseNsAttributes(element);
  }

  if (propertyDescriptor) {
    this.ns = this.nsPropertyTagName(propertyDescriptor);
  } else {
    this.ns = this.nsTagName(elementDescriptor);
  }

  // compute tag name
  this.tagName = this.addTagName(this.ns);

  if (!isGeneric) {
    properties = getSerializableProperties(element);

    this.parseAttributes(filterAttributes(properties));
    this.parseContainments(filterContained(properties));
  }

  this.parseGenericAttributes(element, otherAttrs);

  return this;
};

ElementSerializer.prototype.nsTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getElementNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.nsPropertyTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getPropertyNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === this.ns.uri;
};

/**
 * Get the actual ns attribute name for the given element.
 *
 * @param {Object} element
 * @param {Boolean} [element.inherited=false]
 *
 * @return {Object} nsName
 */
ElementSerializer.prototype.nsAttributeName = function(element) {

  var ns;

  if (isString(element)) {
    ns = parseName(element);
  } else {
    ns = element.ns;
  }

  // return just local name for inherited attributes
  if (element.inherited) {
    return { localName: ns.localName };
  }

  // parse + log effective ns
  var effectiveNs = this.logNamespaceUsed(ns);

  // LOG ACTUAL namespace use
  this.getNamespaces().logUsed(effectiveNs);

  // strip prefix if same namespace like parent
  if (this.isLocalNs(effectiveNs)) {
    return { localName: ns.localName };
  } else {
    return assign({ localName: ns.localName }, effectiveNs);
  }
};

ElementSerializer.prototype.parseGeneric = function(element) {

  var self = this,
      body = this.body;

  var attributes = [];

  forEach(element, function(val, key) {

    var nonNsAttr;

    if (key === '$body') {
      body.push(new BodySerializer().build({ type: 'String' }, val));
    } else
    if (key === '$children') {
      forEach(val, function(child) {
        body.push(new ElementSerializer(self).build(child));
      });
    } else
    if (key.indexOf('$') !== 0) {
      nonNsAttr = self.parseNsAttribute(element, key, val);

      if (nonNsAttr) {
        attributes.push({ name: key, value: val });
      }
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseNsAttribute = function(element, name, value) {
  var model = element.$model;

  var nameNs = parseName(name);

  var ns;

  // parse xmlns:foo="http://foo.bar"
  if (nameNs.prefix === 'xmlns') {
    ns = { prefix: nameNs.localName, uri: value };
  }

  // parse xmlns="http://foo.bar"
  if (!nameNs.prefix && nameNs.localName === 'xmlns') {
    ns = { uri: value };
  }

  if (!ns) {
    return {
      name: name,
      value: value
    };
  }

  if (model && model.getPackage(value)) {

    // register well known namespace
    this.logNamespace(ns, true, true);
  } else {

    // log custom namespace directly as used
    var actualNs = this.logNamespaceUsed(ns, true);

    this.getNamespaces().logUsed(actualNs);
  }
};


/**
 * Parse namespaces and return a list of left over generic attributes
 *
 * @param  {Object} element
 * @return {Array<Object>}
 */
ElementSerializer.prototype.parseNsAttributes = function(element, attrs) {
  var self = this;

  var genericAttrs = element.$attrs;

  var attributes = [];

  // parse namespace attributes first
  // and log them. push non namespace attributes to a list
  // and process them later
  forEach(genericAttrs, function(value, name) {

    var nonNsAttr = self.parseNsAttribute(element, name, value);

    if (nonNsAttr) {
      attributes.push(nonNsAttr);
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseGenericAttributes = function(element, attributes) {

  var self = this;

  forEach(attributes, function(attr) {

    // do not serialize xsi:type attribute
    // it is set manually based on the actual implementation type
    if (attr.name === XSI_TYPE$1) {
      return;
    }

    try {
      self.addAttribute(self.nsAttributeName(attr.name), attr.value);
    } catch (e) {
      console.warn(
        'missing namespace information for ',
        attr.name, '=', attr.value, 'on', element,
        e);
    }
  });
};

ElementSerializer.prototype.parseContainments = function(properties) {

  var self = this,
      body = this.body,
      element = this.element;

  forEach(properties, function(p) {
    var value = element.get(p.name),
        isReference = p.isReference,
        isMany = p.isMany;

    if (!isMany) {
      value = [ value ];
    }

    if (p.isBody) {
      body.push(new BodySerializer().build(p, value[0]));
    } else
    if (isSimple(p.type)) {
      forEach(value, function(v) {
        body.push(new ValueSerializer(self.addTagName(self.nsPropertyTagName(p))).build(p, v));
      });
    } else
    if (isReference) {
      forEach(value, function(v) {
        body.push(new ReferenceSerializer(self.addTagName(self.nsPropertyTagName(p))).build(v));
      });
    } else {

      // allow serialization via type
      // rather than element name
      var asType = serializeAsType(p),
          asProperty = serializeAsProperty(p);

      forEach(value, function(v) {
        var serializer;

        if (asType) {
          serializer = new TypeSerializer(self, p);
        } else
        if (asProperty) {
          serializer = new ElementSerializer(self, p);
        } else {
          serializer = new ElementSerializer(self);
        }

        body.push(serializer.build(v));
      });
    }
  });
};

ElementSerializer.prototype.getNamespaces = function(local) {

  var namespaces = this.namespaces,
      parent = this.parent,
      parentNamespaces;

  if (!namespaces) {
    parentNamespaces = parent && parent.getNamespaces();

    if (local || !parentNamespaces) {
      this.namespaces = namespaces = new Namespaces(parentNamespaces);
    } else {
      namespaces = parentNamespaces;
    }
  }

  return namespaces;
};

ElementSerializer.prototype.logNamespace = function(ns, wellknown, local) {
  var namespaces = this.getNamespaces(local);

  var nsUri = ns.uri,
      nsPrefix = ns.prefix;

  var existing = namespaces.byUri(nsUri);

  if (nsPrefix !== 'xml' && (!existing || local)) {
    namespaces.add(ns, wellknown);
  }

  namespaces.mapPrefix(nsPrefix, nsUri);

  return ns;
};

ElementSerializer.prototype.logNamespaceUsed = function(ns, local) {
  var element = this.element,
      model = element.$model,
      namespaces = this.getNamespaces(local);

  // ns may be
  //
  //   * prefix only
  //   * prefix:uri
  //   * localName only

  var prefix = ns.prefix,
      uri = ns.uri,
      newPrefix, idx,
      wellknownUri;

  // handle anonymous namespaces (elementForm=unqualified), cf. #23
  if (!prefix && !uri) {
    return { localName: ns.localName };
  }

  wellknownUri = DEFAULT_NS_MAP[prefix] || model && (model.getPackage(prefix) || {}).uri;

  uri = uri || wellknownUri || namespaces.uriByPrefix(prefix);

  if (!uri) {
    throw new Error('no namespace uri given for prefix <' + prefix + '>');
  }

  ns = namespaces.byUri(uri);

  if (!ns) {
    newPrefix = prefix;
    idx = 1;

    // find a prefix that is not mapped yet
    while (namespaces.uriByPrefix(newPrefix)) {
      newPrefix = prefix + '_' + idx++;
    }

    ns = this.logNamespace({ prefix: newPrefix, uri: uri }, wellknownUri === uri);
  }

  if (prefix) {
    namespaces.mapPrefix(prefix, uri);
  }

  return ns;
};

ElementSerializer.prototype.parseAttributes = function(properties) {
  var self = this,
      element = this.element;

  forEach(properties, function(p) {

    var value = element.get(p.name);

    if (p.isReference) {

      if (!p.isMany) {
        value = value.id;
      }
      else {
        var values = [];
        forEach(value, function(v) {
          values.push(v.id);
        });

        // IDREFS is a whitespace-separated list of references.
        value = values.join(' ');
      }

    }

    self.addAttribute(self.nsAttributeName(p), value);
  });
};

ElementSerializer.prototype.addTagName = function(nsTagName) {
  var actualNs = this.logNamespaceUsed(nsTagName);

  this.getNamespaces().logUsed(actualNs);

  return nsName(nsTagName);
};

ElementSerializer.prototype.addAttribute = function(name, value) {
  var attrs = this.attrs;

  if (isString(value)) {
    value = escapeAttr(value);
  }

  attrs.push({ name: name, value: value });
};

ElementSerializer.prototype.serializeAttributes = function(writer) {
  var attrs = this.attrs,
      namespaces = this.namespaces;

  if (namespaces) {
    attrs = getNsAttrs(namespaces).concat(attrs);
  }

  forEach(attrs, function(a) {
    writer
      .append(' ')
      .append(nsName(a.name)).append('="').append(a.value).append('"');
  });
};

ElementSerializer.prototype.serializeTo = function(writer) {
  var firstBody = this.body[0],
      indent = firstBody && firstBody.constructor !== BodySerializer;

  writer
    .appendIndent()
    .append('<' + this.tagName);

  this.serializeAttributes(writer);

  writer.append(firstBody ? '>' : ' />');

  if (firstBody) {

    if (indent) {
      writer
        .appendNewLine()
        .indent();
    }

    forEach(this.body, function(b) {
      b.serializeTo(writer);
    });

    if (indent) {
      writer
        .unindent()
        .appendIndent();
    }

    writer.append('</' + this.tagName + '>');
  }

  writer.appendNewLine();
};

/**
 * A serializer for types that handles serialization of data types
 */
function TypeSerializer(parent, propertyDescriptor) {
  ElementSerializer.call(this, parent, propertyDescriptor);
}

inherits(TypeSerializer, ElementSerializer);

TypeSerializer.prototype.parseNsAttributes = function(element) {

  // extracted attributes
  var attributes = ElementSerializer.prototype.parseNsAttributes.call(this, element);

  var descriptor = element.$descriptor;

  // only serialize xsi:type if necessary
  if (descriptor.name === this.propertyDescriptor.type) {
    return attributes;
  }

  var typeNs = this.typeNs = this.nsTagName(descriptor);
  this.getNamespaces().logUsed(this.typeNs);

  // add xsi:type attribute to represent the elements
  // actual type

  var pkg = element.$model.getPackage(typeNs.uri),
      typePrefix = (pkg.xml && pkg.xml.typePrefix) || '';

  this.addAttribute(
    this.nsAttributeName(XSI_TYPE$1),
    (typeNs.prefix ? typeNs.prefix + ':' : '') + typePrefix + descriptor.ns.localName
  );

  return attributes;
};

TypeSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === (this.typeNs || this.ns).uri;
};

function SavingWriter() {
  this.value = '';

  this.write = function(str) {
    this.value += str;
  };
}

function FormatingWriter(out, format) {

  var indent = [''];

  this.append = function(str) {
    out.write(str);

    return this;
  };

  this.appendNewLine = function() {
    if (format) {
      out.write('\n');
    }

    return this;
  };

  this.appendIndent = function() {
    if (format) {
      out.write(indent.join('  '));
    }

    return this;
  };

  this.indent = function() {
    indent.push('');
    return this;
  };

  this.unindent = function() {
    indent.pop();
    return this;
  };
}

/**
 * A writer for meta-model backed document trees
 *
 * @param {Object} options output options to pass into the writer
 */
function Writer(options) {

  options = assign({ format: false, preamble: true }, options || {});

  function toXML(tree, writer) {
    var internalWriter = writer || new SavingWriter();
    var formatingWriter = new FormatingWriter(internalWriter, options.format);

    if (options.preamble) {
      formatingWriter.append(XML_PREAMBLE);
    }

    new ElementSerializer().build(tree).serializeTo(formatingWriter);

    if (!writer) {
      return internalWriter.value;
    }
  }

  return {
    toXML: toXML
  };
}

/**
 * A sub class of {@link Moddle} with support for import and export of BPMN 2.0 xml files.
 *
 * @class BpmnModdle
 * @extends Moddle
 *
 * @param {Object|Array} packages to use for instantiating the model
 * @param {Object} [options] additional options to pass over
 */
function BpmnModdle(packages, options) {
  Moddle.call(this, packages, options);
}

BpmnModdle.prototype = Object.create(Moddle.prototype);

/**
 * The fromXML result.
 *
 * @typedef {Object} ParseResult
 *
 * @property {ModdleElement} rootElement
 * @property {Array<Object>} references
 * @property {Array<Error>} warnings
 * @property {Object} elementsById - a mapping containing each ID -> ModdleElement
 */

/**
 * The fromXML error.
 *
 * @typedef {Error} ParseError
 *
 * @property {Array<Error>} warnings
 */

/**
 * Instantiates a BPMN model tree from a given xml string.
 *
 * @param {String}   xmlStr
 * @param {String}   [typeName='bpmn:Definitions'] name of the root element
 * @param {Object}   [options]  options to pass to the underlying reader
 *
 * @returns {Promise<ParseResult, ParseError>}
 */
BpmnModdle.prototype.fromXML = function(xmlStr, typeName, options) {

  if (!isString(typeName)) {
    options = typeName;
    typeName = 'bpmn:Definitions';
  }

  var reader = new Reader(assign({ model: this, lax: true }, options));
  var rootHandler = reader.handler(typeName);

  return reader.fromXML(xmlStr, rootHandler);
};


/**
 * The toXML result.
 *
 * @typedef {Object} SerializationResult
 *
 * @property {String} xml
 */

/**
 * Serializes a BPMN 2.0 object tree to XML.
 *
 * @param {String}   element    the root element, typically an instance of `bpmn:Definitions`
 * @param {Object}   [options]  to pass to the underlying writer
 *
 * @returns {Promise<SerializationResult, Error>}
 */
BpmnModdle.prototype.toXML = function(element, options) {

  var writer = new Writer(options);

  return new Promise(function(resolve, reject) {
    try {
      var result = writer.toXML(element);

      return resolve({
        xml: result
      });
    } catch (err) {
      return reject(err);
    }
  });
};

var name = "BPMN20";
var uri = "http://www.omg.org/spec/BPMN/20100524/MODEL";
var prefix$1 = "bpmn";
var associations = [
];
var types$1 = [
	{
		name: "Interface",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "operations",
				type: "Operation",
				isMany: true
			},
			{
				name: "implementationRef",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Operation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "outMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "errorRef",
				type: "Error",
				isMany: true,
				isReference: true
			},
			{
				name: "implementationRef",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "EndPoint",
		superClass: [
			"RootElement"
		]
	},
	{
		name: "Auditing",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "GlobalTask",
		superClass: [
			"CallableElement"
		],
		properties: [
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			}
		]
	},
	{
		name: "Monitoring",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Performer",
		superClass: [
			"ResourceRole"
		]
	},
	{
		name: "Process",
		superClass: [
			"FlowElementsContainer",
			"CallableElement"
		],
		properties: [
			{
				name: "processType",
				type: "ProcessType",
				isAttr: true
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "laneSets",
				isMany: true,
				replaces: "FlowElementsContainer#laneSets",
				type: "LaneSet"
			},
			{
				name: "flowElements",
				isMany: true,
				replaces: "FlowElementsContainer#flowElements",
				type: "FlowElement"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "correlationSubscriptions",
				type: "CorrelationSubscription",
				isMany: true
			},
			{
				name: "supports",
				type: "Process",
				isMany: true,
				isReference: true
			},
			{
				name: "definitionalCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "isExecutable",
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "LaneSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "lanes",
				type: "Lane",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Lane",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "partitionElementRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "partitionElement",
				type: "BaseElement"
			},
			{
				name: "flowNodeRef",
				type: "FlowNode",
				isMany: true,
				isReference: true
			},
			{
				name: "childLaneSet",
				type: "LaneSet",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "GlobalManualTask",
		superClass: [
			"GlobalTask"
		]
	},
	{
		name: "ManualTask",
		superClass: [
			"Task"
		]
	},
	{
		name: "UserTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			},
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Rendering",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "HumanPerformer",
		superClass: [
			"Performer"
		]
	},
	{
		name: "PotentialOwner",
		superClass: [
			"HumanPerformer"
		]
	},
	{
		name: "GlobalUserTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			}
		]
	},
	{
		name: "Gateway",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "gatewayDirection",
				type: "GatewayDirection",
				"default": "Unspecified",
				isAttr: true
			}
		]
	},
	{
		name: "EventBasedGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "eventGatewayType",
				type: "EventBasedGatewayType",
				isAttr: true,
				"default": "Exclusive"
			}
		]
	},
	{
		name: "ComplexGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "activationCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParallelGateway",
		superClass: [
			"Gateway"
		]
	},
	{
		name: "RootElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Relationship",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "direction",
				type: "RelationshipDirection",
				isAttr: true
			},
			{
				name: "source",
				isMany: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "target",
				isMany: true,
				isReference: true,
				type: "Element"
			}
		]
	},
	{
		name: "BaseElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				type: "String",
				isId: true
			},
			{
				name: "documentation",
				type: "Documentation",
				isMany: true
			},
			{
				name: "extensionDefinitions",
				type: "ExtensionDefinition",
				isMany: true,
				isReference: true
			},
			{
				name: "extensionElements",
				type: "ExtensionElements"
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "mustUnderstand",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "definition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "extensionAttributeDefinitions",
				type: "ExtensionAttributeDefinition",
				isMany: true
			}
		]
	},
	{
		name: "ExtensionAttributeDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "isReference",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "extensionDefinition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionElements",
		properties: [
			{
				name: "valueRef",
				isAttr: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "values",
				type: "Element",
				isMany: true
			},
			{
				name: "extensionAttributeDefinition",
				type: "ExtensionAttributeDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Documentation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "text",
				type: "String",
				isBody: true
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Event",
		isAbstract: true,
		superClass: [
			"FlowNode",
			"InteractionNode"
		],
		properties: [
			{
				name: "properties",
				type: "Property",
				isMany: true
			}
		]
	},
	{
		name: "IntermediateCatchEvent",
		superClass: [
			"CatchEvent"
		]
	},
	{
		name: "IntermediateThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "EndEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "StartEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "isInterrupting",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "ThrowEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "inputSet",
				type: "InputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CatchEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "parallelMultiple",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "outputSet",
				type: "OutputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "BoundaryEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "cancelActivity",
				"default": true,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "attachedToRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "EventDefinition",
		isAbstract: true,
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CancelEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "ErrorEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "errorRef",
				type: "Error",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TerminateEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "EscalationEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "escalationRef",
				type: "Escalation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Escalation",
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "escalationCode",
				isAttr: true,
				type: "String"
			}
		],
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CompensateEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "waitForCompletion",
				isAttr: true,
				type: "Boolean",
				"default": true
			},
			{
				name: "activityRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TimerEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "timeDate",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeCycle",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeDuration",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "LinkEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "target",
				type: "LinkEventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "source",
				type: "LinkEventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConditionalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "condition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "SignalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "signalRef",
				type: "Signal",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Signal",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ImplicitThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "DataState",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ItemAwareElement",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "itemSubjectRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "dataState",
				type: "DataState"
			}
		]
	},
	{
		name: "DataAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "sourceRef",
				type: "ItemAwareElement",
				isMany: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "transformation",
				type: "FormalExpression",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "assignment",
				type: "Assignment",
				isMany: true
			}
		]
	},
	{
		name: "DataInput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "inputSetRef",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "inputSetWithOptional",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "inputSetWithWhileExecuting",
				type: "InputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "DataOutput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "outputSetRef",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outputSetWithOptional",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outputSetWithWhileExecuting",
				type: "OutputSet",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "InputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "dataInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "outputSetRefs",
				type: "OutputSet",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "OutputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inputSetRefs",
				type: "InputSet",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Property",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "DataInputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "DataOutputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "InputOutputSpecification",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "inputSets",
				type: "InputSet",
				isMany: true
			},
			{
				name: "outputSets",
				type: "OutputSet",
				isMany: true
			}
		]
	},
	{
		name: "DataObject",
		superClass: [
			"FlowElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "InputOutputBinding",
		properties: [
			{
				name: "inputDataRef",
				type: "InputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "outputDataRef",
				type: "OutputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Assignment",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "from",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "to",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "DataStore",
		superClass: [
			"RootElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "capacity",
				isAttr: true,
				type: "Integer"
			},
			{
				name: "isUnlimited",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "DataStoreReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataStoreRef",
				type: "DataStore",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "DataObjectReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataObjectRef",
				type: "DataObject",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConversationLink",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ConversationAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CallConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "calledCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "Conversation",
		superClass: [
			"ConversationNode"
		]
	},
	{
		name: "SubConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "conversationNodes",
				type: "ConversationNode",
				isMany: true
			}
		]
	},
	{
		name: "ConversationNode",
		isAbstract: true,
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "messageFlowRefs",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			}
		]
	},
	{
		name: "GlobalConversation",
		superClass: [
			"Collaboration"
		]
	},
	{
		name: "PartnerEntity",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "PartnerRole",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationProperty",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "correlationPropertyRetrievalExpression",
				type: "CorrelationPropertyRetrievalExpression",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Error",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "errorCode",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "CorrelationKey",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Expression",
		superClass: [
			"BaseElement"
		],
		isAbstract: false,
		properties: [
			{
				name: "body",
				isBody: true,
				type: "String"
			}
		]
	},
	{
		name: "FormalExpression",
		superClass: [
			"Expression"
		],
		properties: [
			{
				name: "language",
				isAttr: true,
				type: "String"
			},
			{
				name: "evaluatesToTypeRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Message",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "itemRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ItemDefinition",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "itemKind",
				type: "ItemKind",
				isAttr: true
			},
			{
				name: "structureRef",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "import",
				type: "Import",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "SequenceFlow",
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "isImmediate",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "conditionExpression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "sourceRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElementsContainer",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "laneSets",
				type: "LaneSet",
				isMany: true
			},
			{
				name: "flowElements",
				type: "FlowElement",
				isMany: true
			}
		]
	},
	{
		name: "CallableElement",
		isAbstract: true,
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "supportedInterfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "ioBinding",
				type: "InputOutputBinding",
				isMany: true,
				xml: {
					serialize: "property"
				}
			}
		]
	},
	{
		name: "FlowNode",
		isAbstract: true,
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "incoming",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "outgoing",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "lanes",
				type: "Lane",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyRetrievalExpression",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "messagePath",
				type: "FormalExpression"
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyBinding",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataPath",
				type: "FormalExpression"
			},
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Resource",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "resourceParameters",
				type: "ResourceParameter",
				isMany: true
			}
		]
	},
	{
		name: "ResourceParameter",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isRequired",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationSubscription",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationKeyRef",
				type: "CorrelationKey",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationPropertyBinding",
				type: "CorrelationPropertyBinding",
				isMany: true
			}
		]
	},
	{
		name: "MessageFlow",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageFlowAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InteractionNode",
		isAbstract: true,
		properties: [
			{
				name: "incomingConversationLinks",
				type: "ConversationLink",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "outgoingConversationLinks",
				type: "ConversationLink",
				isMany: true,
				isVirtual: true,
				isReference: true
			}
		]
	},
	{
		name: "Participant",
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "interfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "participantMultiplicity",
				type: "ParticipantMultiplicity"
			},
			{
				name: "endPointRefs",
				type: "EndPoint",
				isMany: true,
				isReference: true
			},
			{
				name: "processRef",
				type: "Process",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantMultiplicity",
		properties: [
			{
				name: "minimum",
				"default": 0,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "maximum",
				"default": 1,
				isAttr: true,
				type: "Integer"
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Collaboration",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participants",
				type: "Participant",
				isMany: true
			},
			{
				name: "messageFlows",
				type: "MessageFlow",
				isMany: true
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "conversations",
				type: "ConversationNode",
				isMany: true
			},
			{
				name: "conversationAssociations",
				type: "ConversationAssociation"
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			},
			{
				name: "messageFlowAssociations",
				type: "MessageFlowAssociation",
				isMany: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "choreographyRef",
				type: "Choreography",
				isMany: true,
				isReference: true
			},
			{
				name: "conversationLinks",
				type: "ConversationLink",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyActivity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "loopType",
				type: "ChoreographyLoopType",
				"default": "None",
				isAttr: true
			}
		]
	},
	{
		name: "CallChoreography",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "calledChoreographyRef",
				type: "Choreography",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "SubChoreography",
		superClass: [
			"ChoreographyActivity",
			"FlowElementsContainer"
		],
		properties: [
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyTask",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "messageFlowRef",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Choreography",
		superClass: [
			"Collaboration",
			"FlowElementsContainer"
		]
	},
	{
		name: "GlobalChoreographyTask",
		superClass: [
			"Choreography"
		],
		properties: [
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TextAnnotation",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "text",
				type: "String"
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Group",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Association",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "associationDirection",
				type: "AssociationDirection",
				isAttr: true
			},
			{
				name: "sourceRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Category",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "categoryValue",
				type: "CategoryValue",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Artifact",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "CategoryValue",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "categorizedFlowElements",
				type: "FlowElement",
				isMany: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "value",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Activity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "isForCompensation",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "boundaryEventRefs",
				type: "BoundaryEvent",
				isMany: true,
				isReference: true
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "startQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "completionQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "loopCharacteristics",
				type: "LoopCharacteristics"
			}
		]
	},
	{
		name: "ServiceTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "SubProcess",
		superClass: [
			"Activity",
			"FlowElementsContainer",
			"InteractionNode"
		],
		properties: [
			{
				name: "triggeredByEvent",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "LoopCharacteristics",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "MultiInstanceLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "isSequential",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "behavior",
				type: "MultiInstanceBehavior",
				"default": "All",
				isAttr: true
			},
			{
				name: "loopCardinality",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopDataInputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "loopDataOutputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "inputDataItem",
				type: "DataInput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "outputDataItem",
				type: "DataOutput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "complexBehaviorDefinition",
				type: "ComplexBehaviorDefinition",
				isMany: true
			},
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "oneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "noneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "StandardLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "testBefore",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "loopCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopMaximum",
				type: "Integer",
				isAttr: true
			}
		]
	},
	{
		name: "CallActivity",
		superClass: [
			"Activity"
		],
		properties: [
			{
				name: "calledElement",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "Task",
		superClass: [
			"Activity",
			"InteractionNode"
		]
	},
	{
		name: "SendTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ReceiveTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ScriptTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "scriptFormat",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				type: "String"
			}
		]
	},
	{
		name: "BusinessRuleTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "AdHocSubProcess",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "ordering",
				type: "AdHocOrdering",
				isAttr: true
			},
			{
				name: "cancelRemainingInstances",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "Transaction",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "protocol",
				isAttr: true,
				type: "String"
			},
			{
				name: "method",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalScriptTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "scriptLanguage",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalBusinessRuleTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ComplexBehaviorDefinition",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "condition",
				type: "FormalExpression"
			},
			{
				name: "event",
				type: "ImplicitThrowEvent"
			}
		]
	},
	{
		name: "ResourceRole",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "resourceRef",
				type: "Resource",
				isReference: true
			},
			{
				name: "resourceParameterBindings",
				type: "ResourceParameterBinding",
				isMany: true
			},
			{
				name: "resourceAssignmentExpression",
				type: "ResourceAssignmentExpression"
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ResourceParameterBinding",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "parameterRef",
				type: "ResourceParameter",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "ResourceAssignmentExpression",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Import",
		properties: [
			{
				name: "importType",
				isAttr: true,
				type: "String"
			},
			{
				name: "location",
				isAttr: true,
				type: "String"
			},
			{
				name: "namespace",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Definitions",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "targetNamespace",
				isAttr: true,
				type: "String"
			},
			{
				name: "expressionLanguage",
				"default": "http://www.w3.org/1999/XPath",
				isAttr: true,
				type: "String"
			},
			{
				name: "typeLanguage",
				"default": "http://www.w3.org/2001/XMLSchema",
				isAttr: true,
				type: "String"
			},
			{
				name: "imports",
				type: "Import",
				isMany: true
			},
			{
				name: "extensions",
				type: "Extension",
				isMany: true
			},
			{
				name: "rootElements",
				type: "RootElement",
				isMany: true
			},
			{
				name: "diagrams",
				isMany: true,
				type: "bpmndi:BPMNDiagram"
			},
			{
				name: "exporter",
				isAttr: true,
				type: "String"
			},
			{
				name: "relationships",
				type: "Relationship",
				isMany: true
			},
			{
				name: "exporterVersion",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations = [
	{
		name: "ProcessType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Public"
			},
			{
				name: "Private"
			}
		]
	},
	{
		name: "GatewayDirection",
		literalValues: [
			{
				name: "Unspecified"
			},
			{
				name: "Converging"
			},
			{
				name: "Diverging"
			},
			{
				name: "Mixed"
			}
		]
	},
	{
		name: "EventBasedGatewayType",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Exclusive"
			}
		]
	},
	{
		name: "RelationshipDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Forward"
			},
			{
				name: "Backward"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "ItemKind",
		literalValues: [
			{
				name: "Physical"
			},
			{
				name: "Information"
			}
		]
	},
	{
		name: "ChoreographyLoopType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Standard"
			},
			{
				name: "MultiInstanceSequential"
			},
			{
				name: "MultiInstanceParallel"
			}
		]
	},
	{
		name: "AssociationDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "MultiInstanceBehavior",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "All"
			},
			{
				name: "Complex"
			}
		]
	},
	{
		name: "AdHocOrdering",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Sequential"
			}
		]
	}
];
var xml = {
	tagAlias: "lowerCase",
	typePrefix: "t"
};
var BpmnPackage = {
	name: name,
	uri: uri,
	prefix: prefix$1,
	associations: associations,
	types: types$1,
	enumerations: enumerations,
	xml: xml
};

var name$1 = "BPMNDI";
var uri$1 = "http://www.omg.org/spec/BPMN/20100524/DI";
var prefix$1$1 = "bpmndi";
var types$1$1 = [
	{
		name: "BPMNDiagram",
		properties: [
			{
				name: "plane",
				type: "BPMNPlane",
				redefines: "di:Diagram#rootElement"
			},
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isMany: true
			}
		],
		superClass: [
			"di:Diagram"
		]
	},
	{
		name: "BPMNPlane",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			}
		],
		superClass: [
			"di:Plane"
		]
	},
	{
		name: "BPMNShape",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "isHorizontal",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isExpanded",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isMarkerVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "isMessageVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participantBandKind",
				type: "ParticipantBandKind",
				isAttr: true
			},
			{
				name: "choreographyActivityShape",
				type: "BPMNShape",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"di:LabeledShape"
		]
	},
	{
		name: "BPMNEdge",
		properties: [
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "sourceElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#source"
			},
			{
				name: "targetElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#target"
			},
			{
				name: "messageVisibleKind",
				type: "MessageVisibleKind",
				isAttr: true,
				"default": "initiating"
			}
		],
		superClass: [
			"di:LabeledEdge"
		]
	},
	{
		name: "BPMNLabel",
		properties: [
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isAttr: true,
				isReference: true,
				redefines: "di:DiagramElement#style"
			}
		],
		superClass: [
			"di:Label"
		]
	},
	{
		name: "BPMNLabelStyle",
		properties: [
			{
				name: "font",
				type: "dc:Font"
			}
		],
		superClass: [
			"di:Style"
		]
	}
];
var enumerations$1 = [
	{
		name: "ParticipantBandKind",
		literalValues: [
			{
				name: "top_initiating"
			},
			{
				name: "middle_initiating"
			},
			{
				name: "bottom_initiating"
			},
			{
				name: "top_non_initiating"
			},
			{
				name: "middle_non_initiating"
			},
			{
				name: "bottom_non_initiating"
			}
		]
	},
	{
		name: "MessageVisibleKind",
		literalValues: [
			{
				name: "initiating"
			},
			{
				name: "non_initiating"
			}
		]
	}
];
var associations$1 = [
];
var BpmnDiPackage = {
	name: name$1,
	uri: uri$1,
	prefix: prefix$1$1,
	types: types$1$1,
	enumerations: enumerations$1,
	associations: associations$1
};

var name$2 = "DC";
var uri$2 = "http://www.omg.org/spec/DD/20100524/DC";
var prefix$2 = "dc";
var types$2 = [
	{
		name: "Boolean"
	},
	{
		name: "Integer"
	},
	{
		name: "Real"
	},
	{
		name: "String"
	},
	{
		name: "Font",
		properties: [
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "size",
				type: "Real",
				isAttr: true
			},
			{
				name: "isBold",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isItalic",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isUnderline",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isStrikeThrough",
				type: "Boolean",
				isAttr: true
			}
		]
	},
	{
		name: "Point",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			}
		]
	},
	{
		name: "Bounds",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "width",
				type: "Real",
				isAttr: true
			},
			{
				name: "height",
				type: "Real",
				isAttr: true
			}
		]
	}
];
var associations$2 = [
];
var DcPackage = {
	name: name$2,
	uri: uri$2,
	prefix: prefix$2,
	types: types$2,
	associations: associations$2
};

var name$3 = "DI";
var uri$3 = "http://www.omg.org/spec/DD/20100524/DI";
var prefix$3 = "di";
var types$3 = [
	{
		name: "DiagramElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			},
			{
				name: "extension",
				type: "Extension"
			},
			{
				name: "owningDiagram",
				type: "Diagram",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "owningElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "modelElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "style",
				type: "Style",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "ownedElement",
				type: "DiagramElement",
				isReadOnly: true,
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Node",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		]
	},
	{
		name: "Edge",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		],
		properties: [
			{
				name: "source",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "target",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "waypoint",
				isUnique: false,
				isMany: true,
				type: "dc:Point",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "Diagram",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			},
			{
				name: "rootElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "documentation",
				isAttr: true,
				type: "String"
			},
			{
				name: "resolution",
				isAttr: true,
				type: "Real"
			},
			{
				name: "ownedStyle",
				type: "Style",
				isReadOnly: true,
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Shape",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Plane",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "planeElement",
				type: "DiagramElement",
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true
			}
		]
	},
	{
		name: "LabeledEdge",
		isAbstract: true,
		superClass: [
			"Edge"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "LabeledShape",
		isAbstract: true,
		superClass: [
			"Shape"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true,
				isVirtual: true
			}
		]
	},
	{
		name: "Label",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Style",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				isId: true,
				type: "String"
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "values",
				isMany: true,
				type: "Element"
			}
		]
	}
];
var associations$3 = [
];
var xml$1 = {
	tagAlias: "lowerCase"
};
var DiPackage = {
	name: name$3,
	uri: uri$3,
	prefix: prefix$3,
	types: types$3,
	associations: associations$3,
	xml: xml$1
};

var name$4 = "bpmn.io colors for BPMN";
var uri$4 = "http://bpmn.io/schema/bpmn/biocolor/1.0";
var prefix$4 = "bioc";
var types$4 = [
	{
		name: "ColoredShape",
		"extends": [
			"bpmndi:BPMNShape"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ColoredEdge",
		"extends": [
			"bpmndi:BPMNEdge"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations$2 = [
];
var associations$4 = [
];
var BiocPackage = {
	name: name$4,
	uri: uri$4,
	prefix: prefix$4,
	types: types$4,
	enumerations: enumerations$2,
	associations: associations$4
};

var packages = {
  bpmn: BpmnPackage,
  bpmndi: BpmnDiPackage,
  dc: DcPackage,
  di: DiPackage,
  bioc: BiocPackage
};

function simple(additionalPackages, options) {
  var pks = assign({}, packages, additionalPackages);

  return new BpmnModdle(pks, options);
}

var diRefs = new objectRefs(
  { name: 'bpmnElement', enumerable: true },
  { name: 'di', configurable: true }
);

/**
 * Returns true if an element has the given meta-model type
 *
 * @param  {ModdleElement}  element
 * @param  {string}         type
 *
 * @return {boolean}
 */
function is$1(element, type) {
  return element.$instanceOf(type);
}


/**
 * Find a suitable display candidate for definitions where the DI does not
 * correctly specify one.
 */
function findDisplayCandidate(definitions) {
  return find(definitions.rootElements, function(e) {
    return is$1(e, 'bpmn:Process') || is$1(e, 'bpmn:Collaboration');
  });
}


function BpmnTreeWalker(handler, translate) {

  // list of containers already walked
  var handledElements = {};

  // list of elements to handle deferred to ensure
  // prerequisites are drawn
  var deferred = [];

  // Helpers //////////////////////

  function contextual(fn, ctx) {
    return function(e) {
      fn(e, ctx);
    };
  }

  function handled(element) {
    handledElements[element.id] = element;
  }

  function isHandled(element) {
    return handledElements[element.id];
  }

  function visit(element, ctx) {

    var gfx = element.gfx;

    // avoid multiple rendering of elements
    if (gfx) {
      throw new Error(
        translate('already rendered {element}', { element: elementToString(element) })
      );
    }

    // call handler
    return handler.element(element, ctx);
  }

  function visitRoot(element, diagram) {
    return handler.root(element, diagram);
  }

  function visitIfDi(element, ctx) {

    try {
      var gfx = element.di && visit(element, ctx);

      handled(element);

      return gfx;
    } catch (e) {
      logError(e.message, { element: element, error: e });

      console.error(translate('failed to import {element}', { element: elementToString(element) }));
      console.error(e);
    }
  }

  function logError(message, context) {
    handler.error(message, context);
  }

  // DI handling //////////////////////

  function registerDi(di) {
    var bpmnElement = di.bpmnElement;

    if (bpmnElement) {
      if (bpmnElement.di) {
        logError(
          translate('multiple DI elements defined for {element}', {
            element: elementToString(bpmnElement)
          }),
          { element: bpmnElement }
        );
      } else {
        diRefs.bind(bpmnElement, 'di');
        bpmnElement.di = di;
      }
    } else {
      logError(
        translate('no bpmnElement referenced in {element}', {
          element: elementToString(di)
        }),
        { element: di }
      );
    }
  }

  function handleDiagram(diagram) {
    handlePlane(diagram.plane);
  }

  function handlePlane(plane) {
    registerDi(plane);

    forEach(plane.planeElement, handlePlaneElement);
  }

  function handlePlaneElement(planeElement) {
    registerDi(planeElement);
  }


  // Semantic handling //////////////////////

  /**
   * Handle definitions and return the rendered diagram (if any)
   *
   * @param {ModdleElement} definitions to walk and import
   * @param {ModdleElement} [diagram] specific diagram to import and display
   *
   * @throws {Error} if no diagram to display could be found
   */
  function handleDefinitions(definitions, diagram) {

    // make sure we walk the correct bpmnElement

    var diagrams = definitions.diagrams;

    if (diagram && diagrams.indexOf(diagram) === -1) {
      throw new Error(translate('diagram not part of bpmn:Definitions'));
    }

    if (!diagram && diagrams && diagrams.length) {
      diagram = diagrams[0];
    }

    // no diagram -> nothing to import
    if (!diagram) {
      throw new Error(translate('no diagram to display'));
    }

    // load DI from selected diagram only
    handleDiagram(diagram);


    var plane = diagram.plane;

    if (!plane) {
      throw new Error(translate(
        'no plane for {element}',
        { element: elementToString(diagram) }
      ));
    }

    var rootElement = plane.bpmnElement;

    // ensure we default to a suitable display candidate (process or collaboration),
    // even if non is specified in DI
    if (!rootElement) {
      rootElement = findDisplayCandidate(definitions);

      if (!rootElement) {
        throw new Error(translate('no process or collaboration to display'));
      } else {

        logError(
          translate('correcting missing bpmnElement on {plane} to {rootElement}', {
            plane: elementToString(plane),
            rootElement: elementToString(rootElement)
          })
        );

        // correct DI on the fly
        plane.bpmnElement = rootElement;
        registerDi(plane);
      }
    }


    var ctx = visitRoot(rootElement, plane);

    if (is$1(rootElement, 'bpmn:Process')) {
      handleProcess(rootElement, ctx);
    } else if (is$1(rootElement, 'bpmn:Collaboration')) {
      handleCollaboration(rootElement);

      // force drawing of everything not yet drawn that is part of the target DI
      handleUnhandledProcesses(definitions.rootElements, ctx);
    } else {
      throw new Error(
        translate('unsupported bpmnElement for {plane}: {rootElement}', {
          plane: elementToString(plane),
          rootElement: elementToString(rootElement)
        })
      );
    }

    // handle all deferred elements
    handleDeferred();
  }

  function handleDeferred() {

    var fn;

    // drain deferred until empty
    while (deferred.length) {
      fn = deferred.shift();

      fn();
    }
  }

  function handleProcess(process, context) {
    handleFlowElementsContainer(process, context);
    handleIoSpecification(process.ioSpecification, context);

    handleArtifacts(process.artifacts, context);

    // log process handled
    handled(process);
  }

  function handleUnhandledProcesses(rootElements, ctx) {

    // walk through all processes that have not yet been drawn and draw them
    // if they contain lanes with DI information.
    // we do this to pass the free-floating lane test cases in the MIWG test suite
    var processes = filter(rootElements, function(e) {
      return !isHandled(e) && is$1(e, 'bpmn:Process') && e.laneSets;
    });

    processes.forEach(contextual(handleProcess, ctx));
  }

  function handleMessageFlow(messageFlow, context) {
    visitIfDi(messageFlow, context);
  }

  function handleMessageFlows(messageFlows, context) {
    forEach(messageFlows, contextual(handleMessageFlow, context));
  }

  function handleDataAssociation(association, context) {
    visitIfDi(association, context);
  }

  function handleDataInput(dataInput, context) {
    visitIfDi(dataInput, context);
  }

  function handleDataOutput(dataOutput, context) {
    visitIfDi(dataOutput, context);
  }

  function handleArtifact(artifact, context) {

    // bpmn:TextAnnotation
    // bpmn:Group
    // bpmn:Association

    visitIfDi(artifact, context);
  }

  function handleArtifacts(artifacts, context) {

    forEach(artifacts, function(e) {
      if (is$1(e, 'bpmn:Association')) {
        deferred.push(function() {
          handleArtifact(e, context);
        });
      } else {
        handleArtifact(e, context);
      }
    });
  }

  function handleIoSpecification(ioSpecification, context) {

    if (!ioSpecification) {
      return;
    }

    forEach(ioSpecification.dataInputs, contextual(handleDataInput, context));
    forEach(ioSpecification.dataOutputs, contextual(handleDataOutput, context));
  }

  function handleSubProcess(subProcess, context) {
    handleFlowElementsContainer(subProcess, context);
    handleArtifacts(subProcess.artifacts, context);
  }

  function handleFlowNode(flowNode, context) {
    var childCtx = visitIfDi(flowNode, context);

    if (is$1(flowNode, 'bpmn:SubProcess')) {
      handleSubProcess(flowNode, childCtx || context);
    }

    if (is$1(flowNode, 'bpmn:Activity')) {
      handleIoSpecification(flowNode.ioSpecification, context);
    }

    // defer handling of associations
    // affected types:
    //
    //   * bpmn:Activity
    //   * bpmn:ThrowEvent
    //   * bpmn:CatchEvent
    //
    deferred.push(function() {
      forEach(flowNode.dataInputAssociations, contextual(handleDataAssociation, context));
      forEach(flowNode.dataOutputAssociations, contextual(handleDataAssociation, context));
    });
  }

  function handleSequenceFlow(sequenceFlow, context) {
    visitIfDi(sequenceFlow, context);
  }

  function handleDataElement(dataObject, context) {
    visitIfDi(dataObject, context);
  }

  function handleLane(lane, context) {

    deferred.push(function() {

      var newContext = visitIfDi(lane, context);

      if (lane.childLaneSet) {
        handleLaneSet(lane.childLaneSet, newContext || context);
      }

      wireFlowNodeRefs(lane);
    });
  }

  function handleLaneSet(laneSet, context) {
    forEach(laneSet.lanes, contextual(handleLane, context));
  }

  function handleLaneSets(laneSets, context) {
    forEach(laneSets, contextual(handleLaneSet, context));
  }

  function handleFlowElementsContainer(container, context) {
    handleFlowElements(container.flowElements, context);

    if (container.laneSets) {
      handleLaneSets(container.laneSets, context);
    }
  }

  function handleFlowElements(flowElements, context) {
    forEach(flowElements, function(e) {
      if (is$1(e, 'bpmn:SequenceFlow')) {
        deferred.push(function() {
          handleSequenceFlow(e, context);
        });
      } else if (is$1(e, 'bpmn:BoundaryEvent')) {
        deferred.unshift(function() {
          handleFlowNode(e, context);
        });
      } else if (is$1(e, 'bpmn:FlowNode')) {
        handleFlowNode(e, context);
      } else if (is$1(e, 'bpmn:DataObject')) ; else if (is$1(e, 'bpmn:DataStoreReference')) {
        handleDataElement(e, context);
      } else if (is$1(e, 'bpmn:DataObjectReference')) {
        handleDataElement(e, context);
      } else {
        logError(
          translate('unrecognized flowElement {element} in context {context}', {
            element: elementToString(e),
            context: (context ? elementToString(context.businessObject) : 'null')
          }),
          { element: e, context: context }
        );
      }
    });
  }

  function handleParticipant(participant, context) {
    var newCtx = visitIfDi(participant, context);

    var process = participant.processRef;
    if (process) {
      handleProcess(process, newCtx || context);
    }
  }

  function handleCollaboration(collaboration) {

    forEach(collaboration.participants, contextual(handleParticipant));

    handleArtifacts(collaboration.artifacts);

    // handle message flows latest in the process
    deferred.push(function() {
      handleMessageFlows(collaboration.messageFlows);
    });
  }


  function wireFlowNodeRefs(lane) {

    // wire the virtual flowNodeRefs <-> relationship
    forEach(lane.flowNodeRef, function(flowNode) {
      var lanes = flowNode.get('lanes');

      if (lanes) {
        lanes.push(lane);
      }
    });
  }

  // API //////////////////////

  return {
    handleDeferred: handleDeferred,
    handleDefinitions: handleDefinitions,
    handleSubProcess: handleSubProcess,
    registerDi: registerDi
  };
}

/**
 * The importBpmnDiagram result.
 *
 * @typedef {Object} ImportBPMNDiagramResult
 *
 * @property {Array<string>} warnings
 */

/**
* The importBpmnDiagram error.
*
* @typedef {Error} ImportBPMNDiagramError
*
* @property {Array<string>} warnings
*/

/**
 * Import the definitions into a diagram.
 *
 * Errors and warnings are reported through the specified callback.
 *
 * @param  {djs.Diagram} diagram
 * @param  {ModdleElement<Definitions>} definitions
 * @param  {ModdleElement<BPMNDiagram>} [bpmnDiagram] the diagram to be rendered
 * (if not provided, the first one will be rendered)
 *
 * Returns {Promise<ImportBPMNDiagramResult, ImportBPMNDiagramError>}
 */
function importBpmnDiagram(diagram, definitions, bpmnDiagram) {

  var importer,
      eventBus,
      translate;

  var error,
      warnings = [];

  /**
   * Walk the diagram semantically, importing (=drawing)
   * all elements you encounter.
   *
   * @param {ModdleElement<Definitions>} definitions
   * @param {ModdleElement<BPMNDiagram>} bpmnDiagram
   */
  function render(definitions, bpmnDiagram) {

    var visitor = {

      root: function(element) {
        return importer.add(element);
      },

      element: function(element, parentShape) {
        return importer.add(element, parentShape);
      },

      error: function(message, context) {
        warnings.push({ message: message, context: context });
      }
    };

    var walker = new BpmnTreeWalker(visitor, translate);

    // traverse BPMN 2.0 document model,
    // starting at definitions
    walker.handleDefinitions(definitions, bpmnDiagram);
  }

  return new Promise(function(resolve, reject) {
    try {
      importer = diagram.get('bpmnImporter');
      eventBus = diagram.get('eventBus');
      translate = diagram.get('translate');

      eventBus.fire('import.render.start', { definitions: definitions });

      render(definitions, bpmnDiagram);

      eventBus.fire('import.render.complete', {
        error: error,
        warnings: warnings
      });

      return resolve({ warnings: warnings });
    } catch (e) {

      e.warnings = warnings;
      return reject(e);
    }
  });
}

// TODO(nikku): remove with future bpmn-js version

/**
 * Wraps APIs to check:
 *
 * 1) If a callback is passed -> Warn users about callback deprecation.
 * 2) If Promise class is implemented in current environment.
 *
 * @private
 */
function wrapForCompatibility(api) {

  return function() {

    if (!window.Promise) {
      throw new Error('Promises is not supported in this environment. Please polyfill Promise.');
    }

    var argLen = arguments.length;
    if (argLen >= 1 && isFunction(arguments[argLen - 1])) {

      var callback = arguments[argLen - 1];

      console.warn(new Error(
        'Passing callbacks to ' + api.name + ' is deprecated and will be removed in a future major release. ' +
        'Please switch to promises: https://bpmn.io/l/moving-to-promises.html'
      ));

      var argsWithoutCallback = Array.prototype.slice.call(arguments, 0, -1);

      api.apply(this, argsWithoutCallback).then(function(result) {

        var firstKey = Object.keys(result)[0];

        // The APIs we are wrapping all resolve a single item depending on the API.
        // For instance, importXML resolves { warnings } and saveXML returns { xml }.
        // That's why we can call the callback with the first item of result.
        return callback(null, result[firstKey]);

        // Passing a second paramter instead of catch because we don't want to
        // catch errors thrown by callback().
      }, function(err) {

        return callback(err, err.warnings);
      });
    } else {

      return api.apply(this, arguments);
    }
  };
}

/**
 * This file must not be changed or exchanged.
 *
 * @see http://bpmn.io/license for more information.
 */


// inlined ../../resources/logo.svg
var BPMNIO_LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.02 5.57" width="53" height="21" style="vertical-align:middle"><path fill="currentColor" d="M1.88.92v.14c0 .41-.13.68-.4.8.33.14.46.44.46.86v.33c0 .61-.33.95-.95.95H0V0h.95c.65 0 .93.3.93.92zM.63.57v1.06h.24c.24 0 .38-.1.38-.43V.98c0-.28-.1-.4-.32-.4zm0 1.63v1.22h.36c.2 0 .32-.1.32-.39v-.35c0-.37-.12-.48-.4-.48H.63zM4.18.99v.52c0 .64-.31.98-.94.98h-.3V4h-.62V0h.92c.63 0 .94.35.94.99zM2.94.57v1.35h.3c.2 0 .3-.09.3-.37v-.6c0-.29-.1-.38-.3-.38h-.3zm2.89 2.27L6.25 0h.88v4h-.6V1.12L6.1 3.99h-.6l-.46-2.82v2.82h-.55V0h.87zM8.14 1.1V4h-.56V0h.79L9 2.4V0h.56v4h-.64zm2.49 2.29v.6h-.6v-.6zM12.12 1c0-.63.33-1 .95-1 .61 0 .95.37.95 1v2.04c0 .64-.34 1-.95 1-.62 0-.95-.37-.95-1zm.62 2.08c0 .28.13.39.33.39s.32-.1.32-.4V.98c0-.29-.12-.4-.32-.4s-.33.11-.33.4z"/><path fill="currentColor" d="M0 4.53h14.02v1.04H0zM11.08 0h.63v.62h-.63zm.63 4V1h-.63v2.98z"/></svg>';

var BPMNIO_IMG = BPMNIO_LOGO_SVG;

function css(attrs) {
  return attrs.join(';');
}

var LINK_STYLES = css([
  'color: #404040'
]);

var LIGHTBOX_STYLES = css([
  'z-index: 1001',
  'position: fixed',
  'top: 0',
  'left: 0',
  'right: 0',
  'bottom: 0'
]);

var BACKDROP_STYLES = css([
  'width: 100%',
  'height: 100%',
  'background: rgba(40,40,40,0.2)'
]);

var NOTICE_STYLES = css([
  'position: absolute',
  'left: 50%',
  'top: 40%',
  'transform: translate(-50%)',
  'width: 260px',
  'padding: 10px',
  'background: white',
  'box-shadow: 0 1px 4px rgba(0,0,0,0.3)',
  'font-family: Helvetica, Arial, sans-serif',
  'font-size: 14px',
  'display: flex',
  'line-height: 1.3'
]);

var LIGHTBOX_MARKUP =
  '<div class="bjs-powered-by-lightbox" style="' + LIGHTBOX_STYLES + '">' +
    '<div class="backdrop" style="' + BACKDROP_STYLES + '"></div>' +
    '<div class="notice" style="' + NOTICE_STYLES + '">' +
      '<a href="https://bpmn.io" target="_blank" rel="noopener" style="margin: 15px 20px 15px 10px; align-self: center;' + LINK_STYLES + '">' +
        BPMNIO_IMG +
      '</a>' +
      '<span>' +
        'Web-based tooling for BPMN, DMN and CMMN diagrams ' +
        'powered by <a href="https://bpmn.io" target="_blank" rel="noopener">bpmn.io</a>.' +
      '</span>' +
    '</div>' +
  '</div>';


var lightbox;

function open() {

  if (!lightbox) {
    lightbox = domify(LIGHTBOX_MARKUP);

    delegate.bind(lightbox, '.backdrop', 'click', function(event) {
      document.body.removeChild(lightbox);
    });
  }

  document.body.appendChild(lightbox);
}

/**
 * The code in the <project-logo></project-logo> area
 * must not be changed.
 *
 * @see http://bpmn.io/license for more information.
 */

/**
 * A base viewer for BPMN 2.0 diagrams.
 *
 * Have a look at {@link Viewer}, {@link NavigatedViewer} or {@link Modeler} for
 * bundles that include actual features.
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {string|number} [options.width] the width of the viewer
 * @param {string|number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */
function BaseViewer(options) {

  options = assign({}, DEFAULT_OPTIONS, options);

  this._moddle = this._createModdle(options);

  this._container = this._createContainer(options);

  /* <project-logo> */

  addProjectLogo(this._container);

  /* </project-logo> */

  this._init(this._container, this._moddle, options);
}

inherits_browser(BaseViewer, Diagram);

/**
* The importXML result.
*
* @typedef {Object} ImportXMLResult
*
* @property {Array<string>} warnings
*/

/**
* The importXML error.
*
* @typedef {Error} ImportXMLError
*
* @property {Array<string>} warnings
*/

/**
 * Parse and render a BPMN 2.0 diagram.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During import the viewer will fire life-cycle events:
 *
 *   * import.parse.start (about to read model from xml)
 *   * import.parse.complete (model read; may have worked or not)
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *   * import.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {string} xml the BPMN 2.0 xml
 * @param {ModdleElement<BPMNDiagram>|string} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
 *
 * Returns {Promise<ImportXMLResult, ImportXMLError>}
 */
BaseViewer.prototype.importXML = wrapForCompatibility(function importXML(xml, bpmnDiagram) {

  var self = this;

  function ParseCompleteEvent(data) {

    var event = self.get('eventBus').createEvent(data);

    // TODO(nikku): remove with future bpmn-js version
    Object.defineProperty(event, 'context', {
      enumerable: true,
      get: function() {

        console.warn(new Error(
          'import.parse.complete <context> is deprecated ' +
          'and will be removed in future library versions'
        ));

        return {
          warnings: data.warnings,
          references: data.references,
          elementsById: data.elementsById
        };
      }
    });

    return event;
  }

  return new Promise(function(resolve, reject) {

    // hook in pre-parse listeners +
    // allow xml manipulation
    xml = self._emit('import.parse.start', { xml: xml }) || xml;

    self._moddle.fromXML(xml, 'bpmn:Definitions').then(function(result) {
      var definitions = result.rootElement;
      var references = result.references;
      var parseWarnings = result.warnings;
      var elementsById = result.elementsById;

      // hook in post parse listeners +
      // allow definitions manipulation
      definitions = self._emit('import.parse.complete', ParseCompleteEvent({
        error: null,
        definitions: definitions,
        elementsById: elementsById,
        references: references,
        warnings: parseWarnings
      })) || definitions;

      self.importDefinitions(definitions, bpmnDiagram).then(function(result) {
        var allWarnings = [].concat(parseWarnings, result.warnings || []);

        self._emit('import.done', { error: null, warnings: allWarnings });

        return resolve({ warnings: allWarnings });
      }).catch(function(err) {
        var allWarnings = [].concat(parseWarnings, err.warnings || []);

        self._emit('import.done', { error: err, warnings: allWarnings });

        return reject(addWarningsToError(err, allWarnings));
      });
    }).catch(function(err) {

      self._emit('import.parse.complete', {
        error: err
      });

      err = checkValidationError(err);

      self._emit('import.done', { error: err, warnings: err.warnings });

      return reject(err);
    });
  });
});

/**
* The importDefinitions result.
*
* @typedef {Object} ImportDefinitionsResult
*
* @property {Array<string>} warnings
*/

/**
* The importDefinitions error.
*
* @typedef {Error} ImportDefinitionsError
*
* @property {Array<string>} warnings
*/

/**
 * Import parsed definitions and render a BPMN 2.0 diagram.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During import the viewer will fire life-cycle events:
 *
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {ModdleElement<Definitions>} definitions parsed BPMN 2.0 definitions
 * @param {ModdleElement<BPMNDiagram>|string} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
 *
 * Returns {Promise<ImportDefinitionsResult, ImportDefinitionsError>}
 */
BaseViewer.prototype.importDefinitions = wrapForCompatibility(function importDefinitions(definitions, bpmnDiagram) {

  var self = this;

  return new Promise(function(resolve, reject) {

    self._setDefinitions(definitions);

    self.open(bpmnDiagram).then(function(result) {

      var warnings = result.warnings;

      return resolve({ warnings: warnings });
    }).catch(function(err) {

      return reject(err);
    });
  });
});

/**
 * The open result.
 *
 * @typedef {Object} OpenResult
 *
 * @property {Array<string>} warnings
 */

/**
* The open error.
*
* @typedef {Error} OpenError
*
* @property {Array<string>} warnings
*/

/**
 * Open diagram of previously imported XML.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During switch the viewer will fire life-cycle events:
 *
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {string|ModdleElement<BPMNDiagram>} [bpmnDiagramOrId] id or the diagram to open
 *
 * Returns {Promise<OpenResult, OpenError>}
 */
BaseViewer.prototype.open = wrapForCompatibility(function open(bpmnDiagramOrId) {

  var definitions = this._definitions;
  var bpmnDiagram = bpmnDiagramOrId;

  var self = this;

  return new Promise(function(resolve, reject) {
    if (!definitions) {
      var err1 = new Error('no XML imported');

      return reject(addWarningsToError(err1, []));
    }

    if (typeof bpmnDiagramOrId === 'string') {
      bpmnDiagram = findBPMNDiagram(definitions, bpmnDiagramOrId);

      if (!bpmnDiagram) {
        var err2 = new Error('BPMNDiagram <' + bpmnDiagramOrId + '> not found');

        return reject(addWarningsToError(err2, []));
      }
    }

    // clear existing rendered diagram
    // catch synchronous exceptions during #clear()
    try {
      self.clear();
    } catch (error) {

      return reject(addWarningsToError(error, []));
    }

    // perform graphical import
    importBpmnDiagram(self, definitions, bpmnDiagram).then(function(result) {

      var warnings = result.warnings;

      return resolve({ warnings: warnings });
    }).catch(function(err) {

      return reject(err);
    });
  });
});

/**
 * The saveXML result.
 *
 * @typedef {Object} SaveXMLResult
 *
 * @property {string} xml
 */

/**
 * Export the currently displayed BPMN 2.0 diagram as
 * a BPMN 2.0 XML document.
 *
 * ## Life-Cycle Events
 *
 * During XML saving the viewer will fire life-cycle events:
 *
 *   * saveXML.start (before serialization)
 *   * saveXML.serialized (after xml generation)
 *   * saveXML.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {Object} [options] export options
 * @param {boolean} [options.format=false] output formatted XML
 * @param {boolean} [options.preamble=true] output preamble
 *
 * Returns {Promise<SaveXMLResult, Error>}
 */
BaseViewer.prototype.saveXML = wrapForCompatibility(function saveXML(options) {

  options = options || {};

  var self = this;

  var definitions = this._definitions;

  return new Promise(function(resolve, reject) {

    if (!definitions) {
      var err = new Error('no definitions loaded');

      return reject(err);
    }

    // allow to fiddle around with definitions
    definitions = self._emit('saveXML.start', {
      definitions: definitions
    }) || definitions;

    self._moddle.toXML(definitions, options).then(function(result) {

      var xml = result.xml;

      try {
        xml = self._emit('saveXML.serialized', {
          error: null,
          xml: xml
        }) || xml;

        self._emit('saveXML.done', {
          error: null,
          xml: xml
        });
      } catch (e) {
        console.error('error in saveXML life-cycle listener', e);
      }

      return resolve({ xml: xml });
    }).catch(function(err) {

      return reject(err);
    });
  });
});

/**
 * The saveSVG result.
 *
 * @typedef {Object} SaveSVGResult
 *
 * @property {string} svg
 */

/**
 * Export the currently displayed BPMN 2.0 diagram as
 * an SVG image.
 *
 * ## Life-Cycle Events
 *
 * During SVG saving the viewer will fire life-cycle events:
 *
 *   * saveSVG.start (before serialization)
 *   * saveSVG.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {Object} [options]
 *
 * Returns {Promise<SaveSVGResult, Error>}
 */
BaseViewer.prototype.saveSVG = wrapForCompatibility(function saveSVG(options) {

  var self = this;

  return new Promise(function(resolve, reject) {

    self._emit('saveSVG.start');

    var svg, err;

    try {
      var canvas = self.get('canvas');

      var contentNode = canvas.getDefaultLayer(),
          defsNode = query('defs', canvas._svg);

      var contents = innerSVG(contentNode),
          defs = defsNode ? '<defs>' + innerSVG(defsNode) + '</defs>' : '';

      var bbox = contentNode.getBBox();

      svg =
        '<?xml version="1.0" encoding="utf-8"?>\n' +
        '<!-- created with bpmn-js / http://bpmn.io -->\n' +
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
             'width="' + bbox.width + '" height="' + bbox.height + '" ' +
             'viewBox="' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '" version="1.1">' +
          defs + contents +
        '</svg>';
    } catch (e) {
      err = e;
    }

    self._emit('saveSVG.done', {
      error: err,
      svg: svg
    });

    if (!err) {
      return resolve({ svg: svg });
    }

    return reject(err);
  });
});

/**
 * Get a named diagram service.
 *
 * @example
 *
 * var elementRegistry = viewer.get('elementRegistry');
 * var startEventShape = elementRegistry.get('StartEvent_1');
 *
 * @param {string} name
 *
 * @return {Object} diagram service instance
 *
 * @method BaseViewer#get
 */

/**
 * Invoke a function in the context of this viewer.
 *
 * @example
 *
 * viewer.invoke(function(elementRegistry) {
 *   var startEventShape = elementRegistry.get('StartEvent_1');
 * });
 *
 * @param {Function} fn to be invoked
 *
 * @return {Object} the functions return value
 *
 * @method BaseViewer#invoke
 */


BaseViewer.prototype._setDefinitions = function(definitions) {
  this._definitions = definitions;
};

BaseViewer.prototype.getModules = function() {
  return this._modules;
};

/**
 * Remove all drawn elements from the viewer.
 *
 * After calling this method the viewer can still
 * be reused for opening another diagram.
 *
 * @method BaseViewer#clear
 */
BaseViewer.prototype.clear = function() {
  if (!this.getDefinitions()) {

    // no diagram to clear
    return;
  }

  // remove businessObject#di binding
  //
  // this is necessary, as we establish the bindings
  // in the BpmnTreeWalker (and assume none are given
  // on reimport)
  this.get('elementRegistry').forEach(function(element) {
    var bo = element.businessObject;

    if (bo && bo.di) {
      delete bo.di;
    }
  });

  // remove drawn elements
  Diagram.prototype.clear.call(this);
};

/**
 * Destroy the viewer instance and remove all its
 * remainders from the document tree.
 */
BaseViewer.prototype.destroy = function() {

  // diagram destroy
  Diagram.prototype.destroy.call(this);

  // dom detach
  remove$1(this._container);
};

/**
 * Register an event listener
 *
 * Remove a previously added listener via {@link #off(event, callback)}.
 *
 * @param {string} event
 * @param {number} [priority]
 * @param {Function} callback
 * @param {Object} [that]
 */
BaseViewer.prototype.on = function(event, priority, callback, target) {
  return this.get('eventBus').on(event, priority, callback, target);
};

/**
 * De-register an event listener
 *
 * @param {string} event
 * @param {Function} callback
 */
BaseViewer.prototype.off = function(event, callback) {
  this.get('eventBus').off(event, callback);
};

BaseViewer.prototype.attachTo = function(parentNode) {

  if (!parentNode) {
    throw new Error('parentNode required');
  }

  // ensure we detach from the
  // previous, old parent
  this.detach();

  // unwrap jQuery if provided
  if (parentNode.get && parentNode.constructor.prototype.jquery) {
    parentNode = parentNode.get(0);
  }

  if (typeof parentNode === 'string') {
    parentNode = query(parentNode);
  }

  parentNode.appendChild(this._container);

  this._emit('attach', {});

  this.get('canvas').resized();
};

BaseViewer.prototype.getDefinitions = function() {
  return this._definitions;
};

BaseViewer.prototype.detach = function() {

  var container = this._container,
      parentNode = container.parentNode;

  if (!parentNode) {
    return;
  }

  this._emit('detach', {});

  parentNode.removeChild(container);
};

BaseViewer.prototype._init = function(container, moddle, options) {

  var baseModules = options.modules || this.getModules(),
      additionalModules = options.additionalModules || [],
      staticModules = [
        {
          bpmnjs: [ 'value', this ],
          moddle: [ 'value', moddle ]
        }
      ];

  var diagramModules = [].concat(staticModules, baseModules, additionalModules);

  var diagramOptions = assign(omit(options, [ 'additionalModules' ]), {
    canvas: assign({}, options.canvas, { container: container }),
    modules: diagramModules
  });

  // invoke diagram constructor
  Diagram.call(this, diagramOptions);

  if (options && options.container) {
    this.attachTo(options.container);
  }
};

/**
 * Emit an event on the underlying {@link EventBus}
 *
 * @param  {string} type
 * @param  {Object} event
 *
 * @return {Object} event processing result (if any)
 */
BaseViewer.prototype._emit = function(type, event) {
  return this.get('eventBus').fire(type, event);
};

BaseViewer.prototype._createContainer = function(options) {

  var container = domify('<div class="bjs-container"></div>');

  assign(container.style, {
    width: ensureUnit(options.width),
    height: ensureUnit(options.height),
    position: options.position
  });

  return container;
};

BaseViewer.prototype._createModdle = function(options) {
  var moddleOptions = assign({}, this._moddleExtensions, options.moddleExtensions);

  return new simple(moddleOptions);
};

BaseViewer.prototype._modules = [];

// helpers ///////////////

function addWarningsToError(err, warningsAry) {
  err.warnings = warningsAry;
  return err;
}

function checkValidationError(err) {

  // check if we can help the user by indicating wrong BPMN 2.0 xml
  // (in case he or the exporting tool did not get that right)

  var pattern = /unparsable content <([^>]+)> detected([\s\S]*)$/;
  var match = pattern.exec(err.message);

  if (match) {
    err.message =
      'unparsable content <' + match[1] + '> detected; ' +
      'this may indicate an invalid BPMN 2.0 diagram file' + match[2];
  }

  return err;
}

var DEFAULT_OPTIONS = {
  width: '100%',
  height: '100%',
  position: 'relative'
};


/**
 * Ensure the passed argument is a proper unit (defaulting to px)
 */
function ensureUnit(val) {
  return val + (isNumber(val) ? 'px' : '');
}


/**
 * Find BPMNDiagram in definitions by ID
 *
 * @param {ModdleElement<Definitions>} definitions
 * @param {string} diagramId
 *
 * @return {ModdleElement<BPMNDiagram>|null}
 */
function findBPMNDiagram(definitions, diagramId) {
  if (!diagramId) {
    return null;
  }

  return find(definitions.diagrams, function(element) {
    return element.id === diagramId;
  }) || null;
}

/**
 * Adds the project logo to the diagram container as
 * required by the bpmn.io license.
 *
 * @see http://bpmn.io/license
 *
 * @param {Element} container
 */
function addProjectLogo(container) {
  var img = BPMNIO_IMG;

  var linkMarkup =
    '<a href="http://bpmn.io" ' +
       'target="_blank" ' +
       'class="bjs-powered-by" ' +
       'title="Powered by bpmn.io" ' +
       'style="position: absolute; bottom: 15px; right: 15px; z-index: 100; ' + LINK_STYLES + '">' +
      img +
    '</a>';

  var linkElement = domify(linkMarkup);

  container.appendChild(linkElement);

  componentEvent.bind(linkElement, 'click', function(event) {
    open();

    event.preventDefault();
  });
}

/* </project-logo> */

/**
 * A viewer for BPMN 2.0 diagrams.
 *
 * Have a look at {@link NavigatedViewer} or {@link Modeler} for bundles that include
 * additional features.
 *
 *
 * ## Extending the Viewer
 *
 * In order to extend the viewer pass extension modules to bootstrap via the
 * `additionalModules` option. An extension module is an object that exposes
 * named services.
 *
 * The following example depicts the integration of a simple
 * logging component that integrates with interaction events:
 *
 *
 * ```javascript
 *
 * // logging component
 * function InteractionLogger(eventBus) {
 *   eventBus.on('element.hover', function(event) {
 *     console.log()
 *   })
 * }
 *
 * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
 *
 * // extension module
 * var extensionModule = {
 *   __init__: [ 'interactionLogger' ],
 *   interactionLogger: [ 'type', InteractionLogger ]
 * };
 *
 * // extend the viewer
 * var bpmnViewer = new Viewer({ additionalModules: [ extensionModule ] });
 * bpmnViewer.importXML(...);
 * ```
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {string|number} [options.width] the width of the viewer
 * @param {string|number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */
function Viewer(options) {
  BaseViewer.call(this, options);
}

inherits_browser(Viewer, BaseViewer);

// modules the viewer is composed of
Viewer.prototype._modules = [
  CoreModule,
  TranslateModule,
  SelectionModule,
  OverlaysModule
];

// default moddle extensions the viewer is composed of
Viewer.prototype._moddleExtensions = {};

/**
 * Returns true if event was triggered with any modifier
 * @param {KeyboardEvent} event
 */
function hasModifier(event) {
  return (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey);
}

/**
 * @param {KeyboardEvent} event
 */
function isCmd(event) {

  // ensure we don't react to AltGr
  // (mapped to CTRL + ALT)
  if (event.altKey) {
    return false;
  }

  return event.ctrlKey || event.metaKey;
}

/**
 * Checks if key pressed is one of provided keys.
 *
 * @param {string|Array<string>} keys
 * @param {KeyboardEvent} event
 */
function isKey(keys, event) {
  keys = isArray(keys) ? keys : [ keys ];

  return keys.indexOf(event.key) !== -1 || keys.indexOf(event.keyCode) !== -1;
}

/**
 * @param {KeyboardEvent} event
 */
function isShift(event) {
  return event.shiftKey;
}

var KEYDOWN_EVENT = 'keyboard.keydown',
    KEYUP_EVENT = 'keyboard.keyup';

var DEFAULT_PRIORITY$1 = 1000;


/**
 * A keyboard abstraction that may be activated and
 * deactivated by users at will, consuming key events
 * and triggering diagram actions.
 *
 * For keys pressed down, keyboard fires `keyboard.keydown` event.
 * The event context contains one field which is `KeyboardEvent` event.
 *
 * The implementation fires the following key events that allow
 * other components to hook into key handling:
 *
 *  - keyboard.bind
 *  - keyboard.unbind
 *  - keyboard.init
 *  - keyboard.destroy
 *
 * All events contain one field which is node.
 *
 * A default binding for the keyboard may be specified via the
 * `keyboard.bindTo` configuration option.
 *
 * @param {Config} config
 * @param {EventBus} eventBus
 */
function Keyboard(config, eventBus) {
  var self = this;

  this._config = config || {};
  this._eventBus = eventBus;

  this._keydownHandler = this._keydownHandler.bind(this);
  this._keyupHandler = this._keyupHandler.bind(this);

  // properly clean dom registrations
  eventBus.on('diagram.destroy', function() {
    self._fire('destroy');

    self.unbind();
  });

  eventBus.on('diagram.init', function() {
    self._fire('init');
  });

  eventBus.on('attach', function() {
    if (config && config.bindTo) {
      self.bind(config.bindTo);
    }
  });

  eventBus.on('detach', function() {
    self.unbind();
  });
}

Keyboard.$inject = [
  'config.keyboard',
  'eventBus'
];

Keyboard.prototype._keydownHandler = function(event) {
  this._keyHandler(event, KEYDOWN_EVENT);
};

Keyboard.prototype._keyupHandler = function(event) {
  this._keyHandler(event, KEYUP_EVENT);
};

Keyboard.prototype._keyHandler = function(event, type) {
  var target = event.target,
      eventBusResult;

  if (isInput(target)) {
    return;
  }

  var context = {
    keyEvent: event
  };

  eventBusResult = this._eventBus.fire(type || KEYDOWN_EVENT, context);

  if (eventBusResult) {
    event.preventDefault();
  }
};

Keyboard.prototype.bind = function(node) {

  // make sure that the keyboard is only bound once to the DOM
  this.unbind();

  this._node = node;

  // bind key events
  componentEvent.bind(node, 'keydown', this._keydownHandler, true);
  componentEvent.bind(node, 'keyup', this._keyupHandler, true);

  this._fire('bind');
};

Keyboard.prototype.getBinding = function() {
  return this._node;
};

Keyboard.prototype.unbind = function() {
  var node = this._node;

  if (node) {
    this._fire('unbind');

    // unbind key events
    componentEvent.unbind(node, 'keydown', this._keydownHandler, true);
    componentEvent.unbind(node, 'keyup', this._keyupHandler, true);
  }

  this._node = null;
};

Keyboard.prototype._fire = function(event) {
  this._eventBus.fire('keyboard.' + event, { node: this._node });
};

/**
 * Add a listener function that is notified with `KeyboardEvent` whenever
 * the keyboard is bound and the user presses a key. If no priority is
 * provided, the default value of 1000 is used.
 *
 * @param {number} [priority]
 * @param {Function} listener
 * @param {string} type
 */
Keyboard.prototype.addListener = function(priority, listener, type) {
  if (isFunction(priority)) {
    type = listener;
    listener = priority;
    priority = DEFAULT_PRIORITY$1;
  }

  this._eventBus.on(type || KEYDOWN_EVENT, priority, listener);
};

Keyboard.prototype.removeListener = function(listener, type) {
  this._eventBus.off(type || KEYDOWN_EVENT, listener);
};

Keyboard.prototype.hasModifier = hasModifier;
Keyboard.prototype.isCmd = isCmd;
Keyboard.prototype.isShift = isShift;
Keyboard.prototype.isKey = isKey;



// helpers ///////

function isInput(target) {
  return target && (matchesSelector(target, 'input, textarea') || target.contentEditable === 'true');
}

var LOW_PRIORITY$3 = 500;

var KEYCODE_C = 67;
var KEYCODE_V = 86;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;

var KEYS_COPY = ['c', 'C', KEYCODE_C ];
var KEYS_PASTE = [ 'v', 'V', KEYCODE_V ];
var KEYS_REDO = [ 'y', 'Y', KEYCODE_Y ];
var KEYS_UNDO = [ 'z', 'Z', KEYCODE_Z ];


/**
 * Adds default keyboard bindings.
 *
 * This does not pull in any features will bind only actions that
 * have previously been registered against the editorActions component.
 *
 * @param {EventBus} eventBus
 * @param {Keyboard} keyboard
 */
function KeyboardBindings(eventBus, keyboard) {

  var self = this;

  eventBus.on('editorActions.init', LOW_PRIORITY$3, function(event) {

    var editorActions = event.editorActions;

    self.registerBindings(keyboard, editorActions);
  });
}

KeyboardBindings.$inject = [
  'eventBus',
  'keyboard'
];


/**
 * Register available keyboard bindings.
 *
 * @param {Keyboard} keyboard
 * @param {EditorActions} editorActions
 */
KeyboardBindings.prototype.registerBindings = function(keyboard, editorActions) {

  /**
   * Add keyboard binding if respective editor action
   * is registered.
   *
   * @param {string} action name
   * @param {Function} fn that implements the key binding
   */
  function addListener(action, fn) {

    if (editorActions.isRegistered(action)) {
      keyboard.addListener(fn);
    }
  }


  // undo
  // (CTRL|CMD) + Z
  addListener('undo', function(context) {

    var event = context.keyEvent;

    if (isCmd(event) && !isShift(event) && isKey(KEYS_UNDO, event)) {
      editorActions.trigger('undo');

      return true;
    }
  });

  // redo
  // CTRL + Y
  // CMD + SHIFT + Z
  addListener('redo', function(context) {

    var event = context.keyEvent;

    if (isCmd(event) && (isKey(KEYS_REDO, event) || (isKey(KEYS_UNDO, event) && isShift(event)))) {
      editorActions.trigger('redo');

      return true;
    }
  });

  // copy
  // CTRL/CMD + C
  addListener('copy', function(context) {

    var event = context.keyEvent;

    if (isCmd(event) && isKey(KEYS_COPY, event)) {
      editorActions.trigger('copy');

      return true;
    }
  });

  // paste
  // CTRL/CMD + V
  addListener('paste', function(context) {

    var event = context.keyEvent;

    if (isCmd(event) && isKey(KEYS_PASTE, event)) {
      editorActions.trigger('paste');

      return true;
    }
  });

  // zoom in one step
  // CTRL/CMD + +
  addListener('stepZoom', function(context) {

    var event = context.keyEvent;

    // quirk: it has to be triggered by `=` as well to work on international keyboard layout
    // cf: https://github.com/bpmn-io/bpmn-js/issues/1362#issuecomment-722989754
    if (isKey([ '+', 'Add', '=' ], event) && isCmd(event)) {
      editorActions.trigger('stepZoom', { value: 1 });

      return true;
    }
  });

  // zoom out one step
  // CTRL + -
  addListener('stepZoom', function(context) {

    var event = context.keyEvent;

    if (isKey([ '-', 'Subtract' ], event) && isCmd(event)) {
      editorActions.trigger('stepZoom', { value: -1 });

      return true;
    }
  });

  // zoom to the default level
  // CTRL + 0
  addListener('zoom', function(context) {

    var event = context.keyEvent;

    if (isKey('0', event) && isCmd(event)) {
      editorActions.trigger('zoom', { value: 1 });

      return true;
    }
  });

  // delete selected element
  // DEL
  addListener('removeSelection', function(context) {

    var event = context.keyEvent;

    if (isKey(['Backspace', 'Delete', 'Del' ], event)) {
      editorActions.trigger('removeSelection');

      return true;
    }
  });
};

var KeyboardModule = {
  __init__: [ 'keyboard', 'keyboardBindings' ],
  keyboard: [ 'type', Keyboard ],
  keyboardBindings: [ 'type', KeyboardBindings ]
};

var DEFAULT_CONFIG = {
  moveSpeed: 50,
  moveSpeedAccelerated: 200
};


/**
 * A feature that allows users to move the canvas using the keyboard.
 *
 * @param {Object} config
 * @param {number} [config.moveSpeed=50]
 * @param {number} [config.moveSpeedAccelerated=200]
 * @param {Keyboard} keyboard
 * @param {Canvas} canvas
 */
function KeyboardMove(
    config,
    keyboard,
    canvas
) {

  var self = this;

  this._config = assign({}, DEFAULT_CONFIG, config || {});

  keyboard.addListener(arrowsListener);


  function arrowsListener(context) {

    var event = context.keyEvent,
        config = self._config;

    if (!keyboard.isCmd(event)) {
      return;
    }

    if (keyboard.isKey([
      'ArrowLeft', 'Left',
      'ArrowUp', 'Up',
      'ArrowDown', 'Down',
      'ArrowRight', 'Right'
    ], event)) {

      var speed = (
        keyboard.isShift(event) ?
          config.moveSpeedAccelerated :
          config.moveSpeed
      );

      var direction;

      switch (event.key) {
      case 'ArrowLeft':
      case 'Left':
        direction = 'left';
        break;
      case 'ArrowUp':
      case 'Up':
        direction = 'up';
        break;
      case 'ArrowRight':
      case 'Right':
        direction = 'right';
        break;
      case 'ArrowDown':
      case 'Down':
        direction = 'down';
        break;
      }

      self.moveCanvas({
        speed: speed,
        direction: direction
      });

      return true;
    }
  }

  this.moveCanvas = function(opts) {

    var dx = 0,
        dy = 0,
        speed = opts.speed;

    var actualSpeed = speed / Math.min(Math.sqrt(canvas.viewbox().scale), 1);

    switch (opts.direction) {
    case 'left': // Left
      dx = actualSpeed;
      break;
    case 'up': // Up
      dy = actualSpeed;
      break;
    case 'right': // Right
      dx = -actualSpeed;
      break;
    case 'down': // Down
      dy = -actualSpeed;
      break;
    }

    canvas.scroll({
      dx: dx,
      dy: dy
    });
  };

}


KeyboardMove.$inject = [
  'config.keyboardMove',
  'keyboard',
  'canvas'
];

var KeyboardMoveModule = {
  __depends__: [
    KeyboardModule
  ],
  __init__: [ 'keyboardMove' ],
  keyboardMove: [ 'type', KeyboardMove ]
};

var CURSOR_CLS_PATTERN = /^djs-cursor-.*$/;


function set$1(mode) {
  var classes = classes$1(document.body);

  classes.removeMatching(CURSOR_CLS_PATTERN);

  if (mode) {
    classes.add('djs-cursor-' + mode);
  }
}

function unset() {
  set$1(null);
}

var TRAP_PRIORITY = 5000;

/**
 * Installs a click trap that prevents a ghost click following a dragging operation.
 *
 * @return {Function} a function to immediately remove the installed trap.
 */
function install(eventBus, eventName) {

  eventName = eventName || 'element.click';

  function trap() {
    return false;
  }

  eventBus.once(eventName, TRAP_PRIORITY, trap);

  return function() {
    eventBus.off(eventName, trap);
  };
}

function delta(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

var THRESHOLD = 15;


/**
 * Move the canvas via mouse.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function MoveCanvas(eventBus, canvas) {

  var context;


  // listen for move on element mouse down;
  // allow others to hook into the event before us though
  // (dragging / element moving will do this)
  eventBus.on('element.mousedown', 500, function(e) {
    return handleStart(e.originalEvent);
  });


  function handleMove(event) {

    var start = context.start,
        button = context.button,
        position = toPoint(event),
        delta$1 = delta(position, start);

    if (!context.dragging && length(delta$1) > THRESHOLD) {
      context.dragging = true;

      if (button === 0) {
        install(eventBus);
      }

      set$1('grab');
    }

    if (context.dragging) {

      var lastPosition = context.last || context.start;

      delta$1 = delta(position, lastPosition);

      canvas.scroll({
        dx: delta$1.x,
        dy: delta$1.y
      });

      context.last = position;
    }

    // prevent select
    event.preventDefault();
  }


  function handleEnd(event) {
    componentEvent.unbind(document, 'mousemove', handleMove);
    componentEvent.unbind(document, 'mouseup', handleEnd);

    context = null;

    unset();
  }

  function handleStart(event) {

    // event is already handled by '.djs-draggable'
    if (closest(event.target, '.djs-draggable')) {
      return;
    }

    var button = event.button;

    // reject right mouse button or modifier key
    if (button >= 2 || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    context = {
      button: button,
      start: toPoint(event)
    };

    componentEvent.bind(document, 'mousemove', handleMove);
    componentEvent.bind(document, 'mouseup', handleEnd);

    // we've handled the event
    return true;
  }

  this.isActive = function() {
    return !!context;
  };

}


MoveCanvas.$inject = [
  'eventBus',
  'canvas'
];



// helpers ///////

function length(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

var MoveCanvasModule = {
  __init__: [ 'moveCanvas' ],
  moveCanvas: [ 'type', MoveCanvas ]
};

/**
 * Get the logarithm of x with base 10
 * @param  {Integer} value
 */
function log10(x) {
  return Math.log(x) / Math.log(10);
}

/**
 * Get step size for given range and number of steps.
 *
 * @param {Object} range
 * @param {number} range.min
 * @param {number} range.max
 */
function getStepSize(range, steps) {

  var minLinearRange = log10(range.min),
      maxLinearRange = log10(range.max);

  var absoluteLinearRange = Math.abs(minLinearRange) + Math.abs(maxLinearRange);

  return absoluteLinearRange / steps;
}

function cap(range, scale) {
  return Math.max(range.min, Math.min(range.max, scale));
}

var sign = Math.sign || function(n) {
  return n >= 0 ? 1 : -1;
};

var RANGE = { min: 0.2, max: 4 },
    NUM_STEPS = 10;

var DELTA_THRESHOLD = 0.1;

var DEFAULT_SCALE = 0.75;

/**
 * An implementation of zooming and scrolling within the
 * {@link Canvas} via the mouse wheel.
 *
 * Mouse wheel zooming / scrolling may be disabled using
 * the {@link toggle(enabled)} method.
 *
 * @param {Object} [config]
 * @param {boolean} [config.enabled=true] default enabled state
 * @param {number} [config.scale=.75] scroll sensivity
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function ZoomScroll(config, eventBus, canvas) {

  config = config || {};

  this._enabled = false;

  this._canvas = canvas;
  this._container = canvas._container;

  this._handleWheel = bind(this._handleWheel, this);

  this._totalDelta = 0;
  this._scale = config.scale || DEFAULT_SCALE;

  var self = this;

  eventBus.on('canvas.init', function(e) {
    self._init(config.enabled !== false);
  });
}

ZoomScroll.$inject = [
  'config.zoomScroll',
  'eventBus',
  'canvas'
];

ZoomScroll.prototype.scroll = function scroll(delta) {
  this._canvas.scroll(delta);
};


ZoomScroll.prototype.reset = function reset() {
  this._canvas.zoom('fit-viewport');
};

/**
 * Zoom depending on delta.
 *
 * @param {number} delta
 * @param {Object} position
 */
ZoomScroll.prototype.zoom = function zoom(delta, position) {

  // zoom with half the step size of stepZoom
  var stepSize = getStepSize(RANGE, NUM_STEPS * 2);

  // add until threshold reached
  this._totalDelta += delta;

  if (Math.abs(this._totalDelta) > DELTA_THRESHOLD) {
    this._zoom(delta, position, stepSize);

    // reset
    this._totalDelta = 0;
  }
};


ZoomScroll.prototype._handleWheel = function handleWheel(event) {

  // event is already handled by '.djs-scrollable'
  if (closest(event.target, '.djs-scrollable', true)) {
    return;
  }

  var element = this._container;

  event.preventDefault();

  // pinch to zoom is mapped to wheel + ctrlKey = true
  // in modern browsers (!)

  var isZoom = event.ctrlKey;

  var isHorizontalScroll = event.shiftKey;

  var factor = -1 * this._scale,
      delta;

  if (isZoom) {
    factor *= event.deltaMode === 0 ? 0.020 : 0.32;
  } else {
    factor *= event.deltaMode === 0 ? 1.0 : 16.0;
  }

  if (isZoom) {
    var elementRect = element.getBoundingClientRect();

    var offset = {
      x: event.clientX - elementRect.left,
      y: event.clientY - elementRect.top
    };

    delta = (
      Math.sqrt(
        Math.pow(event.deltaY, 2) +
        Math.pow(event.deltaX, 2)
      ) * sign(event.deltaY) * factor
    );

    // zoom in relative to diagram {x,y} coordinates
    this.zoom(delta, offset);
  } else {

    if (isHorizontalScroll) {
      delta = {
        dx: factor * event.deltaY,
        dy: 0
      };
    } else {
      delta = {
        dx: factor * event.deltaX,
        dy: factor * event.deltaY
      };
    }

    this.scroll(delta);
  }
};

/**
 * Zoom with fixed step size.
 *
 * @param {number} delta - Zoom delta (1 for zooming in, -1 for out).
 * @param {Object} position
 */
ZoomScroll.prototype.stepZoom = function stepZoom(delta, position) {

  var stepSize = getStepSize(RANGE, NUM_STEPS);

  this._zoom(delta, position, stepSize);
};


/**
 * Zoom in/out given a step size.
 *
 * @param {number} delta
 * @param {Object} position
 * @param {number} stepSize
 */
ZoomScroll.prototype._zoom = function(delta, position, stepSize) {
  var canvas = this._canvas;

  var direction = delta > 0 ? 1 : -1;

  var currentLinearZoomLevel = log10(canvas.zoom());

  // snap to a proximate zoom step
  var newLinearZoomLevel = Math.round(currentLinearZoomLevel / stepSize) * stepSize;

  // increase or decrease one zoom step in the given direction
  newLinearZoomLevel += stepSize * direction;

  // calculate the absolute logarithmic zoom level based on the linear zoom level
  // (e.g. 2 for an absolute x2 zoom)
  var newLogZoomLevel = Math.pow(10, newLinearZoomLevel);

  canvas.zoom(cap(RANGE, newLogZoomLevel), position);
};


/**
 * Toggle the zoom scroll ability via mouse wheel.
 *
 * @param  {boolean} [newEnabled] new enabled state
 */
ZoomScroll.prototype.toggle = function toggle(newEnabled) {

  var element = this._container;
  var handleWheel = this._handleWheel;

  var oldEnabled = this._enabled;

  if (typeof newEnabled === 'undefined') {
    newEnabled = !oldEnabled;
  }

  // only react on actual changes
  if (oldEnabled !== newEnabled) {

    // add or remove wheel listener based on
    // changed enabled state
    componentEvent[newEnabled ? 'bind' : 'unbind'](element, 'wheel', handleWheel, false);
  }

  this._enabled = newEnabled;

  return newEnabled;
};


ZoomScroll.prototype._init = function(newEnabled) {
  this.toggle(newEnabled);
};

var ZoomScrollModule = {
  __init__: [ 'zoomScroll' ],
  zoomScroll: [ 'type', ZoomScroll ]
};

/**
 * A viewer that includes mouse navigation facilities
 *
 * @param {Object} options
 */
function NavigatedViewer(options) {
  Viewer.call(this, options);
}

inherits_browser(NavigatedViewer, Viewer);


NavigatedViewer.prototype._navigationModules = [
  KeyboardMoveModule,
  MoveCanvasModule,
  ZoomScrollModule
];

NavigatedViewer.prototype._modules = [].concat(
  Viewer.prototype._modules,
  NavigatedViewer.prototype._navigationModules
);

var require$$0 = /*@__PURE__*/getAugmentedNamespace(index_esm);

var isFunction$1 = require$$0.isFunction,
    isObject$1 = require$$0.isObject,
    some$1 = require$$0.some;

var WILDCARD = '*';


function CamundaModdleExtension(eventBus) {

  var self = this;

  eventBus.on('moddleCopy.canCopyProperty', function(context) {
    var property = context.property,
        parent = context.parent;

    return self.canCopyProperty(property, parent);
  });
}

CamundaModdleExtension.$inject = [ 'eventBus' ];

/**
 * Check wether to disallow copying property.
 */
CamundaModdleExtension.prototype.canCopyProperty = function(property, parent) {

  // (1) check wether property is allowed in parent
  if (isObject$1(property) && !isAllowedInParent(property, parent)) {

    return false;
  }

  // (2) check more complex scenarios

  if (is$2(property, 'camunda:InputOutput') && !this.canHostInputOutput(parent)) {
    return false;
  }

  if (isAny(property, [ 'camunda:Connector', 'camunda:Field' ]) && !this.canHostConnector(parent)) {
    return false;
  }

  if (is$2(property, 'camunda:In') && !this.canHostIn(parent)) {
    return false;
  }
};

CamundaModdleExtension.prototype.canHostInputOutput = function(parent) {

  // allowed in camunda:Connector
  var connector = getParent(parent, 'camunda:Connector');

  if (connector) {
    return true;
  }

  // special rules inside bpmn:FlowNode
  var flowNode = getParent(parent, 'bpmn:FlowNode');

  if (!flowNode) {
    return false;
  }

  if (isAny(flowNode, [ 'bpmn:StartEvent', 'bpmn:Gateway', 'bpmn:BoundaryEvent' ])) {
    return false;
  }

  if (is$2(flowNode, 'bpmn:SubProcess') && flowNode.get('triggeredByEvent')) {
    return false;
  }

  return true;
};

CamundaModdleExtension.prototype.canHostConnector = function(parent) {

  var serviceTaskLike = getParent(parent, 'camunda:ServiceTaskLike');

  if (is$2(serviceTaskLike, 'bpmn:MessageEventDefinition')) {

    // only allow on throw and end events
    return (
      getParent(parent, 'bpmn:IntermediateThrowEvent') ||
      getParent(parent, 'bpmn:EndEvent')
    );
  }

  return true;
};

CamundaModdleExtension.prototype.canHostIn = function(parent) {

  var callActivity = getParent(parent, 'bpmn:CallActivity');

  if (callActivity) {
    return true;
  }

  var signalEventDefinition = getParent(parent, 'bpmn:SignalEventDefinition');

  if (signalEventDefinition) {

    // only allow on throw and end events
    return (
      getParent(parent, 'bpmn:IntermediateThrowEvent') ||
      getParent(parent, 'bpmn:EndEvent')
    );
  }

  return true;
};

var extension = CamundaModdleExtension;

// helpers //////////

function is$2(element, type) {
  return element && isFunction$1(element.$instanceOf) && element.$instanceOf(type);
}

function isAny(element, types) {
  return some$1(types, function(t) {
    return is$2(element, t);
  });
}

function getParent(element, type) {
  if (!type) {
    return element.$parent;
  }

  if (is$2(element, type)) {
    return element;
  }

  if (!element.$parent) {
    return;
  }

  return getParent(element.$parent, type);
}

function isAllowedInParent(property, parent) {

  // (1) find property descriptor
  var descriptor = property.$type && property.$model.getTypeDescriptor(property.$type);

  var allowedIn = descriptor && descriptor.meta && descriptor.meta.allowedIn;

  if (!allowedIn || isWildcard(allowedIn)) {
    return true;
  }

  // (2) check wether property has parent of allowed type
  return some$1(allowedIn, function(type) {
    return getParent(parent, type);
  });
}

function isWildcard(allowedIn) {
  return allowedIn.indexOf(WILDCARD) !== -1;
}

var lib$1 = {
  __init__: [ 'camundaModdleExtension' ],
  camundaModdleExtension: [ 'type', extension ]
};

var name$5 = "Camunda";
var uri$5 = "http://camunda.org/schema/1.0/bpmn";
var prefix$5 = "camunda";
var xml$2 = {
	tagAlias: "lowerCase"
};
var associations$5 = [
];
var types$5 = [
	{
		name: "Definitions",
		isAbstract: true,
		"extends": [
			"bpmn:Definitions"
		],
		properties: [
			{
				name: "diagramRelationId",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "InOutBinding",
		superClass: [
			"Element"
		],
		isAbstract: true,
		properties: [
			{
				name: "source",
				isAttr: true,
				type: "String"
			},
			{
				name: "sourceExpression",
				isAttr: true,
				type: "String"
			},
			{
				name: "target",
				isAttr: true,
				type: "String"
			},
			{
				name: "businessKey",
				isAttr: true,
				type: "String"
			},
			{
				name: "local",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "variables",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "In",
		superClass: [
			"InOutBinding"
		],
		meta: {
			allowedIn: [
				"bpmn:CallActivity",
				"bpmn:SignalEventDefinition"
			]
		}
	},
	{
		name: "Out",
		superClass: [
			"InOutBinding"
		],
		meta: {
			allowedIn: [
				"bpmn:CallActivity"
			]
		}
	},
	{
		name: "AsyncCapable",
		isAbstract: true,
		"extends": [
			"bpmn:Activity",
			"bpmn:Gateway",
			"bpmn:Event"
		],
		properties: [
			{
				name: "async",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "asyncBefore",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "asyncAfter",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "exclusive",
				isAttr: true,
				type: "Boolean",
				"default": true
			}
		]
	},
	{
		name: "JobPriorized",
		isAbstract: true,
		"extends": [
			"bpmn:Process",
			"camunda:AsyncCapable"
		],
		properties: [
			{
				name: "jobPriority",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "SignalEventDefinition",
		isAbstract: true,
		"extends": [
			"bpmn:SignalEventDefinition"
		],
		properties: [
			{
				name: "async",
				isAttr: true,
				type: "Boolean",
				"default": false
			}
		]
	},
	{
		name: "ErrorEventDefinition",
		isAbstract: true,
		"extends": [
			"bpmn:ErrorEventDefinition"
		],
		properties: [
			{
				name: "errorCodeVariable",
				isAttr: true,
				type: "String"
			},
			{
				name: "errorMessageVariable",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Error",
		isAbstract: true,
		"extends": [
			"bpmn:Error"
		],
		properties: [
			{
				name: "camunda:errorMessage",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "PotentialStarter",
		superClass: [
			"Element"
		],
		properties: [
			{
				name: "resourceAssignmentExpression",
				type: "bpmn:ResourceAssignmentExpression"
			}
		]
	},
	{
		name: "FormSupported",
		isAbstract: true,
		"extends": [
			"bpmn:StartEvent",
			"bpmn:UserTask"
		],
		properties: [
			{
				name: "formHandlerClass",
				isAttr: true,
				type: "String"
			},
			{
				name: "formKey",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "TemplateSupported",
		isAbstract: true,
		"extends": [
			"bpmn:Process",
			"bpmn:FlowElement"
		],
		properties: [
			{
				name: "modelerTemplate",
				isAttr: true,
				type: "String"
			},
			{
				name: "modelerTemplateVersion",
				isAttr: true,
				type: "Integer"
			}
		]
	},
	{
		name: "Initiator",
		isAbstract: true,
		"extends": [
			"bpmn:StartEvent"
		],
		properties: [
			{
				name: "initiator",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ScriptTask",
		isAbstract: true,
		"extends": [
			"bpmn:ScriptTask"
		],
		properties: [
			{
				name: "resultVariable",
				isAttr: true,
				type: "String"
			},
			{
				name: "resource",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Process",
		isAbstract: true,
		"extends": [
			"bpmn:Process"
		],
		properties: [
			{
				name: "candidateStarterGroups",
				isAttr: true,
				type: "String"
			},
			{
				name: "candidateStarterUsers",
				isAttr: true,
				type: "String"
			},
			{
				name: "versionTag",
				isAttr: true,
				type: "String"
			},
			{
				name: "historyTimeToLive",
				isAttr: true,
				type: "String"
			},
			{
				name: "isStartableInTasklist",
				isAttr: true,
				type: "Boolean",
				"default": true
			}
		]
	},
	{
		name: "EscalationEventDefinition",
		isAbstract: true,
		"extends": [
			"bpmn:EscalationEventDefinition"
		],
		properties: [
			{
				name: "escalationCodeVariable",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "FormalExpression",
		isAbstract: true,
		"extends": [
			"bpmn:FormalExpression"
		],
		properties: [
			{
				name: "resource",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Assignable",
		"extends": [
			"bpmn:UserTask"
		],
		properties: [
			{
				name: "assignee",
				isAttr: true,
				type: "String"
			},
			{
				name: "candidateUsers",
				isAttr: true,
				type: "String"
			},
			{
				name: "candidateGroups",
				isAttr: true,
				type: "String"
			},
			{
				name: "dueDate",
				isAttr: true,
				type: "String"
			},
			{
				name: "followUpDate",
				isAttr: true,
				type: "String"
			},
			{
				name: "priority",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "CallActivity",
		"extends": [
			"bpmn:CallActivity"
		],
		properties: [
			{
				name: "calledElementBinding",
				isAttr: true,
				type: "String",
				"default": "latest"
			},
			{
				name: "calledElementVersion",
				isAttr: true,
				type: "String"
			},
			{
				name: "calledElementVersionTag",
				isAttr: true,
				type: "String"
			},
			{
				name: "calledElementTenantId",
				isAttr: true,
				type: "String"
			},
			{
				name: "caseRef",
				isAttr: true,
				type: "String"
			},
			{
				name: "caseBinding",
				isAttr: true,
				type: "String",
				"default": "latest"
			},
			{
				name: "caseVersion",
				isAttr: true,
				type: "String"
			},
			{
				name: "caseTenantId",
				isAttr: true,
				type: "String"
			},
			{
				name: "variableMappingClass",
				isAttr: true,
				type: "String"
			},
			{
				name: "variableMappingDelegateExpression",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ServiceTaskLike",
		"extends": [
			"bpmn:ServiceTask",
			"bpmn:BusinessRuleTask",
			"bpmn:SendTask",
			"bpmn:MessageEventDefinition"
		],
		properties: [
			{
				name: "expression",
				isAttr: true,
				type: "String"
			},
			{
				name: "class",
				isAttr: true,
				type: "String"
			},
			{
				name: "delegateExpression",
				isAttr: true,
				type: "String"
			},
			{
				name: "resultVariable",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "DmnCapable",
		"extends": [
			"bpmn:BusinessRuleTask"
		],
		properties: [
			{
				name: "decisionRef",
				isAttr: true,
				type: "String"
			},
			{
				name: "decisionRefBinding",
				isAttr: true,
				type: "String",
				"default": "latest"
			},
			{
				name: "decisionRefVersion",
				isAttr: true,
				type: "String"
			},
			{
				name: "mapDecisionResult",
				isAttr: true,
				type: "String",
				"default": "resultList"
			},
			{
				name: "decisionRefTenantId",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ExternalCapable",
		"extends": [
			"camunda:ServiceTaskLike"
		],
		properties: [
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "topic",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "TaskPriorized",
		"extends": [
			"bpmn:Process",
			"camunda:ExternalCapable"
		],
		properties: [
			{
				name: "taskPriority",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Properties",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"*"
			]
		},
		properties: [
			{
				name: "values",
				type: "Property",
				isMany: true
			}
		]
	},
	{
		name: "Property",
		superClass: [
			"Element"
		],
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true
			},
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "value",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "Connector",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"camunda:ServiceTaskLike"
			]
		},
		properties: [
			{
				name: "inputOutput",
				type: "InputOutput"
			},
			{
				name: "connectorId",
				type: "String"
			}
		]
	},
	{
		name: "InputOutput",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"bpmn:FlowNode",
				"camunda:Connector"
			]
		},
		properties: [
			{
				name: "inputOutput",
				type: "InputOutput"
			},
			{
				name: "connectorId",
				type: "String"
			},
			{
				name: "inputParameters",
				isMany: true,
				type: "InputParameter"
			},
			{
				name: "outputParameters",
				isMany: true,
				type: "OutputParameter"
			}
		]
	},
	{
		name: "InputOutputParameter",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "value",
				isBody: true,
				type: "String"
			},
			{
				name: "definition",
				type: "InputOutputParameterDefinition"
			}
		]
	},
	{
		name: "InputOutputParameterDefinition",
		isAbstract: true
	},
	{
		name: "List",
		superClass: [
			"InputOutputParameterDefinition"
		],
		properties: [
			{
				name: "items",
				isMany: true,
				type: "InputOutputParameterDefinition"
			}
		]
	},
	{
		name: "Map",
		superClass: [
			"InputOutputParameterDefinition"
		],
		properties: [
			{
				name: "entries",
				isMany: true,
				type: "Entry"
			}
		]
	},
	{
		name: "Entry",
		properties: [
			{
				name: "key",
				isAttr: true,
				type: "String"
			},
			{
				name: "value",
				isBody: true,
				type: "String"
			},
			{
				name: "definition",
				type: "InputOutputParameterDefinition"
			}
		]
	},
	{
		name: "Value",
		superClass: [
			"InputOutputParameterDefinition"
		],
		properties: [
			{
				name: "id",
				isAttr: true,
				type: "String"
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "value",
				isBody: true,
				type: "String"
			}
		]
	},
	{
		name: "Script",
		superClass: [
			"InputOutputParameterDefinition"
		],
		properties: [
			{
				name: "scriptFormat",
				isAttr: true,
				type: "String"
			},
			{
				name: "resource",
				isAttr: true,
				type: "String"
			},
			{
				name: "value",
				isBody: true,
				type: "String"
			}
		]
	},
	{
		name: "Field",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"camunda:ServiceTaskLike",
				"camunda:ExecutionListener",
				"camunda:TaskListener"
			]
		},
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "expression",
				type: "String"
			},
			{
				name: "stringValue",
				isAttr: true,
				type: "String"
			},
			{
				name: "string",
				type: "String"
			}
		]
	},
	{
		name: "InputParameter",
		superClass: [
			"InputOutputParameter"
		]
	},
	{
		name: "OutputParameter",
		superClass: [
			"InputOutputParameter"
		]
	},
	{
		name: "Collectable",
		isAbstract: true,
		"extends": [
			"bpmn:MultiInstanceLoopCharacteristics"
		],
		superClass: [
			"camunda:AsyncCapable"
		],
		properties: [
			{
				name: "collection",
				isAttr: true,
				type: "String"
			},
			{
				name: "elementVariable",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "FailedJobRetryTimeCycle",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"camunda:AsyncCapable",
				"bpmn:MultiInstanceLoopCharacteristics"
			]
		},
		properties: [
			{
				name: "body",
				isBody: true,
				type: "String"
			}
		]
	},
	{
		name: "ExecutionListener",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"bpmn:Task",
				"bpmn:ServiceTask",
				"bpmn:UserTask",
				"bpmn:BusinessRuleTask",
				"bpmn:ScriptTask",
				"bpmn:ReceiveTask",
				"bpmn:ManualTask",
				"bpmn:ExclusiveGateway",
				"bpmn:SequenceFlow",
				"bpmn:ParallelGateway",
				"bpmn:InclusiveGateway",
				"bpmn:EventBasedGateway",
				"bpmn:StartEvent",
				"bpmn:IntermediateCatchEvent",
				"bpmn:IntermediateThrowEvent",
				"bpmn:EndEvent",
				"bpmn:BoundaryEvent",
				"bpmn:CallActivity",
				"bpmn:SubProcess",
				"bpmn:Process"
			]
		},
		properties: [
			{
				name: "expression",
				isAttr: true,
				type: "String"
			},
			{
				name: "class",
				isAttr: true,
				type: "String"
			},
			{
				name: "delegateExpression",
				isAttr: true,
				type: "String"
			},
			{
				name: "event",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				type: "Script"
			},
			{
				name: "fields",
				type: "Field",
				isMany: true
			}
		]
	},
	{
		name: "TaskListener",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"bpmn:UserTask"
			]
		},
		properties: [
			{
				name: "expression",
				isAttr: true,
				type: "String"
			},
			{
				name: "class",
				isAttr: true,
				type: "String"
			},
			{
				name: "delegateExpression",
				isAttr: true,
				type: "String"
			},
			{
				name: "event",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				type: "Script"
			},
			{
				name: "fields",
				type: "Field",
				isMany: true
			},
			{
				name: "id",
				type: "String",
				isAttr: true
			},
			{
				name: "eventDefinitions",
				type: "bpmn:TimerEventDefinition",
				isMany: true
			}
		]
	},
	{
		name: "FormProperty",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"bpmn:StartEvent",
				"bpmn:UserTask"
			]
		},
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true
			},
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "type",
				type: "String",
				isAttr: true
			},
			{
				name: "required",
				type: "String",
				isAttr: true
			},
			{
				name: "readable",
				type: "String",
				isAttr: true
			},
			{
				name: "writable",
				type: "String",
				isAttr: true
			},
			{
				name: "variable",
				type: "String",
				isAttr: true
			},
			{
				name: "expression",
				type: "String",
				isAttr: true
			},
			{
				name: "datePattern",
				type: "String",
				isAttr: true
			},
			{
				name: "default",
				type: "String",
				isAttr: true
			},
			{
				name: "values",
				type: "Value",
				isMany: true
			}
		]
	},
	{
		name: "FormData",
		superClass: [
			"Element"
		],
		meta: {
			allowedIn: [
				"bpmn:StartEvent",
				"bpmn:UserTask"
			]
		},
		properties: [
			{
				name: "fields",
				type: "FormField",
				isMany: true
			},
			{
				name: "businessKey",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "FormField",
		superClass: [
			"Element"
		],
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true
			},
			{
				name: "label",
				type: "String",
				isAttr: true
			},
			{
				name: "type",
				type: "String",
				isAttr: true
			},
			{
				name: "datePattern",
				type: "String",
				isAttr: true
			},
			{
				name: "defaultValue",
				type: "String",
				isAttr: true
			},
			{
				name: "properties",
				type: "Properties"
			},
			{
				name: "validation",
				type: "Validation"
			},
			{
				name: "values",
				type: "Value",
				isMany: true
			}
		]
	},
	{
		name: "Validation",
		superClass: [
			"Element"
		],
		properties: [
			{
				name: "constraints",
				type: "Constraint",
				isMany: true
			}
		]
	},
	{
		name: "Constraint",
		superClass: [
			"Element"
		],
		properties: [
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "config",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "ConditionalEventDefinition",
		isAbstract: true,
		"extends": [
			"bpmn:ConditionalEventDefinition"
		],
		properties: [
			{
				name: "variableName",
				isAttr: true,
				type: "String"
			},
			{
				name: "variableEvents",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var emumerations = [
];
var camundaModdle = {
	name: name$5,
	uri: uri$5,
	prefix: prefix$5,
	xml: xml$2,
	associations: associations$5,
	types: types$5,
	emumerations: emumerations
};

// document wide unique tooltip ids
var ids$1 = new IdGenerator('tt');


function createRoot$1(parentNode) {
  var root = domify(
    '<div class="djs-tooltip-container" style="position: absolute; width: 0; height: 0;" />'
  );

  parentNode.insertBefore(root, parentNode.firstChild);

  return root;
}


function setPosition$1(el, x, y) {
  assign(el.style, { left: x + 'px', top: y + 'px' });
}

function setVisible$1(el, visible) {
  el.style.display = visible === false ? 'none' : '';
}


var tooltipClass = 'djs-tooltip',
    tooltipSelector = '.' + tooltipClass;

/**
 * A service that allows users to render tool tips on the diagram.
 *
 * The tooltip service will take care of updating the tooltip positioning
 * during navigation + zooming.
 *
 * @example
 *
 * ```javascript
 *
 * // add a pink badge on the top left of the shape
 * tooltips.add({
 *   position: {
 *     x: 50,
 *     y: 100
 *   },
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>'
 * });
 *
 * // or with optional life span
 * tooltips.add({
 *   position: {
 *     top: -5,
 *     left: -5
 *   },
 *   html: '<div style="width: 10px; background: fuchsia; color: white;">0</div>',
 *   ttl: 2000
 * });
 *
 * // remove a tool tip
 * var id = tooltips.add(...);
 * tooltips.remove(id);
 * ```
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
function Tooltips(eventBus, canvas) {

  this._eventBus = eventBus;
  this._canvas = canvas;

  this._ids = ids$1;

  this._tooltipDefaults = {
    show: {
      minZoom: 0.7,
      maxZoom: 5.0
    }
  };

  /**
   * Mapping tooltipId -> tooltip
   */
  this._tooltips = {};

  // root html element for all tooltips
  this._tooltipRoot = createRoot$1(canvas.getContainer());


  var self = this;

  delegate.bind(this._tooltipRoot, tooltipSelector, 'mousedown', function(event) {
    event.stopPropagation();
  });

  delegate.bind(this._tooltipRoot, tooltipSelector, 'mouseover', function(event) {
    self.trigger('mouseover', event);
  });

  delegate.bind(this._tooltipRoot, tooltipSelector, 'mouseout', function(event) {
    self.trigger('mouseout', event);
  });

  this._init();
}


Tooltips.$inject = [ 'eventBus', 'canvas' ];


/**
 * Adds a HTML tooltip to the diagram
 *
 * @param {Object}               tooltip   the tooltip configuration
 *
 * @param {string|DOMElement}    tooltip.html                 html element to use as an tooltip
 * @param {Object}               [tooltip.show]               show configuration
 * @param {number}               [tooltip.show.minZoom]       minimal zoom level to show the tooltip
 * @param {number}               [tooltip.show.maxZoom]       maximum zoom level to show the tooltip
 * @param {Object}               tooltip.position             where to attach the tooltip
 * @param {number}               [tooltip.position.left]      relative to element bbox left attachment
 * @param {number}               [tooltip.position.top]       relative to element bbox top attachment
 * @param {number}               [tooltip.position.bottom]    relative to element bbox bottom attachment
 * @param {number}               [tooltip.position.right]     relative to element bbox right attachment
 * @param {number}               [tooltip.timeout=-1]
 *
 * @return {string}              id that may be used to reference the tooltip for update or removal
 */
Tooltips.prototype.add = function(tooltip) {

  if (!tooltip.position) {
    throw new Error('must specifiy tooltip position');
  }

  if (!tooltip.html) {
    throw new Error('must specifiy tooltip html');
  }

  var id = this._ids.next();

  tooltip = assign({}, this._tooltipDefaults, tooltip, {
    id: id
  });

  this._addTooltip(tooltip);

  if (tooltip.timeout) {
    this.setTimeout(tooltip);
  }

  return id;
};

Tooltips.prototype.trigger = function(action, event) {

  var node = event.delegateTarget || event.target;

  var tooltip = this.get(attr$1(node, 'data-tooltip-id'));

  if (!tooltip) {
    return;
  }

  if (action === 'mouseover' && tooltip.timeout) {
    this.clearTimeout(tooltip);
  }

  if (action === 'mouseout' && tooltip.timeout) {

    // cut timeout after mouse out
    tooltip.timeout = 1000;

    this.setTimeout(tooltip);
  }
};

/**
 * Get a tooltip with the given id
 *
 * @param {string} id
 */
Tooltips.prototype.get = function(id) {

  if (typeof id !== 'string') {
    id = id.id;
  }

  return this._tooltips[id];
};

Tooltips.prototype.clearTimeout = function(tooltip) {

  tooltip = this.get(tooltip);

  if (!tooltip) {
    return;
  }

  var removeTimer = tooltip.removeTimer;

  if (removeTimer) {
    clearTimeout(removeTimer);
    tooltip.removeTimer = null;
  }
};

Tooltips.prototype.setTimeout = function(tooltip) {

  tooltip = this.get(tooltip);

  if (!tooltip) {
    return;
  }

  this.clearTimeout(tooltip);

  var self = this;

  tooltip.removeTimer = setTimeout(function() {
    self.remove(tooltip);
  }, tooltip.timeout);
};

/**
 * Remove an tooltip with the given id
 *
 * @param {string} id
 */
Tooltips.prototype.remove = function(id) {

  var tooltip = this.get(id);

  if (tooltip) {
    remove$1(tooltip.html);
    remove$1(tooltip.htmlContainer);

    delete tooltip.htmlContainer;

    delete this._tooltips[tooltip.id];
  }
};


Tooltips.prototype.show = function() {
  setVisible$1(this._tooltipRoot);
};


Tooltips.prototype.hide = function() {
  setVisible$1(this._tooltipRoot, false);
};


Tooltips.prototype._updateRoot = function(viewbox) {
  var a = viewbox.scale || 1;
  var d = viewbox.scale || 1;

  var matrix = 'matrix(' + a + ',0,0,' + d + ',' + (-1 * viewbox.x * a) + ',' + (-1 * viewbox.y * d) + ')';

  this._tooltipRoot.style.transform = matrix;
  this._tooltipRoot.style['-ms-transform'] = matrix;
};


Tooltips.prototype._addTooltip = function(tooltip) {

  var id = tooltip.id,
      html = tooltip.html,
      htmlContainer,
      tooltipRoot = this._tooltipRoot;

  // unwrap jquery (for those who need it)
  if (html.get && html.constructor.prototype.jquery) {
    html = html.get(0);
  }

  // create proper html elements from
  // tooltip HTML strings
  if (isString(html)) {
    html = domify(html);
  }

  htmlContainer = domify('<div data-tooltip-id="' + id + '" class="' + tooltipClass + '" style="position: absolute">');

  htmlContainer.appendChild(html);

  if (tooltip.type) {
    classes$1(htmlContainer).add('djs-tooltip-' + tooltip.type);
  }

  if (tooltip.className) {
    classes$1(htmlContainer).add(tooltip.className);
  }

  tooltip.htmlContainer = htmlContainer;

  tooltipRoot.appendChild(htmlContainer);

  this._tooltips[id] = tooltip;

  this._updateTooltip(tooltip);
};


Tooltips.prototype._updateTooltip = function(tooltip) {

  var position = tooltip.position,
      htmlContainer = tooltip.htmlContainer;

  // update overlay html based on tooltip x, y

  setPosition$1(htmlContainer, position.x, position.y);
};


Tooltips.prototype._updateTooltipVisibilty = function(viewbox) {

  forEach(this._tooltips, function(tooltip) {
    var show = tooltip.show,
        htmlContainer = tooltip.htmlContainer,
        visible = true;

    if (show) {
      if (show.minZoom > viewbox.scale ||
          show.maxZoom < viewbox.scale) {
        visible = false;
      }

      setVisible$1(htmlContainer, visible);
    }
  });
};

Tooltips.prototype._init = function() {

  var self = this;

  // scroll/zoom integration

  function updateViewbox(viewbox) {
    self._updateRoot(viewbox);
    self._updateTooltipVisibilty(viewbox);

    self.show();
  }

  this._eventBus.on('canvas.viewbox.changing', function(event) {
    self.hide();
  });

  this._eventBus.on('canvas.viewbox.changed', function(event) {
    updateViewbox(event.viewbox);
  });
};

var tooltips = {
  __init__: [ 'tooltips' ],
  tooltips: [ 'type', Tooltips ]
};

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202.4325 202.34125' height='202.34125' width='202.4325' xml:space='preserve' version='1.1' id='svg2'%3e%3cmetadata id='metadata8'%3e%3crdf:RDF%3e%3ccc:Work rdf:about=''%3e%3cdc:format%3eimage/svg%2bxml%3c/dc:format%3e%3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cdefs id='defs6'%3e%3cclipPath id='clipPath16' clipPathUnits='userSpaceOnUse'%3e%3cpath id='path18' d='m 0%2c161.873 161.946%2c0 L 161.946%2c0 0%2c0 0%2c161.873 Z' /%3e%3c/clipPath%3e%3c/defs%3e%3cg transform='matrix(1.25%2c0%2c0%2c-1.25%2c0%2c202.34125)' id='g10'%3e%3cg id='g12'%3e%3cg clip-path='url(%23clipPath16)' id='g14'%3e%3cg transform='translate(52.4477%2c88.1268)' id='g20'%3e%3cpath id='path22' style='fill:black%3bfill-opacity:1%3bfill-rule:nonzero%3bstroke:none' d='m 0%2c0 c 0%2c7.6 6.179%2c13.779 13.77%2c13.779 7.6%2c0 13.779%2c-6.179 13.779%2c-13.779 0%2c-2.769 -2.238%2c-5.007 -4.998%2c-5.007 -2.761%2c0 -4.999%2c2.238 -4.999%2c5.007 0%2c2.078 -1.695%2c3.765 -3.782%2c3.765 C 11.693%2c3.765 9.997%2c2.078 9.997%2c0 9.997%2c-2.769 7.76%2c-5.007 4.999%2c-5.007 2.238%2c-5.007 0%2c-2.769 0%2c0 m 57.05%2c-23.153 c 0%2c-2.771 -2.237%2c-5.007 -4.998%2c-5.007 l -46.378%2c0 c -2.761%2c0 -4.999%2c2.236 -4.999%2c5.007 0%2c2.769 2.238%2c5.007 4.999%2c5.007 l 46.378%2c0 c 2.761%2c0 4.998%2c-2.238 4.998%2c-5.007 M 35.379%2c-2.805 c -1.545%2c2.291 -0.941%2c5.398 1.35%2c6.943 l 11.594%2c7.83 c 2.273%2c1.58 5.398%2c0.941 6.943%2c-1.332 1.545%2c-2.29 0.941%2c-5.398 -1.35%2c-6.943 l -11.594%2c-7.83 c -0.852%2c-0.586 -1.829%2c-0.87 -2.788%2c-0.87 -1.607%2c0 -3.187%2c0.781 -4.155%2c2.202 m 31.748%2c-30.786 c 0%2c-0.945 -0.376%2c-1.852 -1.045%2c-2.522 l -8.617%2c-8.617 c -0.669%2c-0.668 -1.576%2c-1.045 -2.523%2c-1.045 l -52.833%2c0 c -0.947%2c0 -1.854%2c0.377 -2.523%2c1.045 l -8.617%2c8.617 c -0.669%2c0.67 -1.045%2c1.577 -1.045%2c2.522 l 0%2c52.799 c 0%2c0.947 0.376%2c1.854 1.045%2c2.522 l 8.617%2c8.619 c 0.669%2c0.668 1.576%2c1.044 2.523%2c1.044 l 52.833%2c0 c 0.947%2c0 1.854%2c-0.376 2.523%2c-1.044 l 8.617%2c-8.619 c 0.669%2c-0.668 1.045%2c-1.575 1.045%2c-2.522 l 0%2c-52.799 z m 7.334%2c61.086 -11.25%2c11.25 c -1.705%2c1.705 -4.018%2c2.663 -6.428%2c2.663 l -56.523%2c0 c -2.412%2c0 -4.725%2c-0.959 -6.43%2c-2.665 L -17.412%2c27.494 c -1.704%2c-1.705 -2.661%2c-4.016 -2.661%2c-6.427 l 0%2c-56.515 c 0%2c-2.411 0.958%2c-4.725 2.663%2c-6.428 l 11.25%2c-11.25 c 1.705%2c-1.705 4.017%2c-2.662 6.428%2c-2.662 l 56.515%2c0 c 2.41%2c0 4.723%2c0.957 6.428%2c2.662 l 11.25%2c11.25 c 1.705%2c1.703 2.663%2c4.017 2.663%2c6.428 l 0%2c56.514 c 0%2c2.412 -0.958%2c4.724 -2.663%2c6.429' /%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

var RobotTaskRenderer = /** @class */ (function () {
    function RobotTaskRenderer(eventBus, bpmnRenderer) {
        this.$inject = [];
        this.eventBus = eventBus;
        this.bpmnRenderer = bpmnRenderer;
        BaseRenderer.call(this, eventBus, 1500);
    }
    RobotTaskRenderer.prototype.canRender = function (element) {
        return is(element, 'bpmn:ServiceTask') && element.id.match(/robot/i);
    };
    RobotTaskRenderer.prototype.drawShape = function (parent, element) {
        this.bpmnRenderer.handlers['bpmn:Task'](parent, element);
        var gfx = create('image', {
            x: -1,
            y: -1,
            width: 32,
            height: 32,
            href: img,
        });
        append(parent, gfx);
        return gfx;
    };
    return RobotTaskRenderer;
}());
var factory = function (eventBus, bpmnRenderer) {
    var instance = new RobotTaskRenderer(eventBus, bpmnRenderer);
    inherits_browser(instance, BaseRenderer);
    instance.$inject = ['eventBus', 'bpmnRenderer'];
    return instance;
};

var RobotModule = {
    __init__: ['RobotTaskRenderer'],
    RobotTaskRenderer: ['type', factory],
};

var DEFAULT_ATTRS = {
  fill: 'none',
  stroke: 'black',
  strokeWidth: 2
};

/**
 * @typedef {Object} Point
 *
 * @param {number} point.x
 * @param {number} point.y
 */

/**
 * Create SVG curve.
 *
 * @param {Array<Point>} points
 * @param {Object} [attrs]
 */
function createCurve(points, attrs = {}) {
  var path = create('path');

  var data = getData(points);

  attr(path, assign({}, DEFAULT_ATTRS, attrs, {
    d: data
  }));

  return path;
}

function getData(points) {
  var segments = getSegments(points);

  if (segments.length === 1) {
    return getSingleSegmentData(segments[0]);
  }

  var startSegment = segments.shift();

  return [
    moveTo(startSegment.start),
    quadraticCurve(startSegment.controlPoint, startSegment.end)
  ].concat(map(segments, function(segment) {
    return sameCurve(segment.controlPoint, segment.end);
  })).join(' ');
}

function getSingleSegmentData(segment) {
  var { start, controlPoint, end } = segment;

  return [
    moveTo(start),
    quadraticCurve(controlPoint, end)
  ].join(' ');
}

function getSegments(points) {
  if (points.length === 2) {
    return [
      {
        start: points[0],
        controlPoint: getMid$1(points[0], points[1]),
        end: points[1]
      }
    ];
  }

  if (points.length === 3) {
    return [
      {
        start: points[0],
        controlPoint: points[1],
        end: points[2]
      }
    ];
  }

  return [ getStartSegment(points) ]
    .concat(getMiddleSegments(points))
    .concat([ getEndSegment(points) ]);
}

function getStartSegment(points) {
  return {
    start: points[0],
    controlPoint: points[1],
    end: getMid$1(points[1], points[2])
  };
}

function getMiddleSegments(points) {
  var segments = [];

  for (var i = 1; i < points.length - 3; i++) {
    segments.push({
      start: getMid$1(points[ i ], points[ i + 1 ]),
      controlPoint: points[ i + 1 ],
      end: getMid$1(points[ i + 1 ], points[ i + 2 ])
    });
  }

  return segments;
}

function getEndSegment(points) {
  return {
    start: getMid$1(points[points.length - 3], points[points.length - 2]),
    controlPoint: points[points.length - 2],
    end: points[points.length - 1]
  };
}

function moveTo(a) {
  return [ 'M', a.x, a.y ].join(' ');
}

function quadraticCurve(a, b) {
  return [ 'Q', a.x, a.y, b.x, b.y ].join(' ');
}

function sameCurve(a, b) {
  return [ 'S', a.x, a.y, b.x, b.y ].join(' ');
}

function getMid$1(a, b) {
  return {
    x: Math.round((a.x + b.x) / 2),
    y: Math.round((a.y + b.y) / 2)
  };
}

var FILL = '#52B415';
var getConnections = function (activities, elementRegistry) {
    var _a, _b;
    var validActivity = new Map();
    var startTimesById = new Map();
    var endTimesById = new Map();
    var connectionDenyList = new Set();
    for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
        var activity = activities_1[_i];
        if (activity.endTime && !activity.canceled) {
            validActivity.set(activity.activityId, true);
        }
        if (endTimesById.has(activity.activityId)) {
            var endTimes = (_a = endTimesById.get(activity.activityId)) !== null && _a !== void 0 ? _a : [];
            endTimes.push(activity.endTime || 'Z');
        }
        else {
            endTimesById.set(activity.activityId, [activity.endTime || 'Z']);
        }
        if (startTimesById.has(activity.activityId)) {
            var startTimes = (_b = startTimesById.get(activity.activityId)) !== null && _b !== void 0 ? _b : [];
            startTimes.push(activity.startTime || 'Z');
        }
        else {
            startTimesById.set(activity.activityId, [activity.startTime || 'Z']);
        }
    }
    var elementById = new Map(map(activities, function (activity) {
        var _a, _b;
        var element = elementRegistry.get(activity.activityId);
        // Side effect! Populate connectionDenyList for gateways by sorting outgoing
        // paths in ascending order by their target activity start time and list everything
        // but the first ones in deny list to prevent coloring them as active.
        if (activity.activityType === 'exclusiveGateway' && element.outgoing.length) {
            var activeConnections = [];
            var myEndTimes = endTimesById.get(activity.activityId) || [];
            var _loop_1 = function (idx) {
                var myEndTime = myEndTimes[idx];
                element.outgoing.sort(function (a, b) {
                    var _a, _b;
                    var startTimesA = startTimesById.get(a.target.id) || [];
                    var startTimesB = startTimesById.get(b.target.id) || [];
                    var startA = (_a = startTimesA === null || startTimesA === void 0 ? void 0 : startTimesA[idx]) !== null && _a !== void 0 ? _a : 'Z';
                    var startB = (_b = startTimesB === null || startTimesB === void 0 ? void 0 : startTimesB[idx]) !== null && _b !== void 0 ? _b : 'Z';
                    return startTimesA.length <= idx
                        ? 1
                        : startTimesB.length <= idx
                            ? -1
                            : startA < myEndTime
                                ? 1
                                : startB < myEndTime
                                    ? -1
                                    : startA > startB
                                        ? 1
                                        : startA < startB
                                            ? -1
                                            : 0;
                });
                activeConnections.push(element.outgoing[0].id);
            };
            for (var idx = 0; idx < myEndTimes.length; idx++) {
                _loop_1(idx);
            }
            for (var _i = 0, _c = element.outgoing; _i < _c.length; _i++) {
                var connection = _c[_i];
                if (!activeConnections.includes(connection.id) &&
                    ((_b = (_a = connection) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.type) !== 'bpmn:ParallelGateway') {
                    connectionDenyList.add(connection.id);
                }
            }
        }
        return [activity.activityId, element];
    }));
    var getActivityConnections = function (activityId) {
        var _a;
        var current = elementById.get(activityId);
        var currentEndTimes = (_a = endTimesById.get(activityId)) !== null && _a !== void 0 ? _a : [];
        if (current && validActivity.get(activityId)) {
            var incoming = filter(current.incoming, function (connection) {
                var _a;
                if (connectionDenyList.has(connection.id)) {
                    return false;
                }
                var incomingEndTimes = validActivity.get(connection.source.id)
                    ? (_a = endTimesById.get(connection.source.id)) !== null && _a !== void 0 ? _a : [] : [];
                return incomingEndTimes.reduce(function (acc, iET) {
                    return acc || currentEndTimes.reduce(function (acc_, cET) { return acc_ || iET <= cET; }, false);
                }, false);
            });
            var outgoing = filter(current.outgoing, function (connection) {
                var _a;
                if (connectionDenyList.has(connection.id)) {
                    return false;
                }
                var outgoingEndTimes = (_a = endTimesById.get(connection.target.id)) !== null && _a !== void 0 ? _a : [];
                return outgoingEndTimes.reduce(function (acc, oET) {
                    return acc || currentEndTimes.reduce(function (acc_, cET) { return acc_ || oET >= cET; }, false);
                }, false);
            });
            return __spreadArrays(incoming, outgoing);
        }
        else {
            return [];
        }
    };
    var connections = [];
    forEach(Array.from(elementById.keys()), function (activityId) {
        connections = uniqueBy('id', __spreadArrays(connections, getActivityConnections(activityId)));
    });
    return connections;
};
var getMid$2 = function (shape) {
    return {
        x: shape.x + shape.width / 2,
        y: shape.y + shape.height / 2,
    };
};
var notDottedTypes = ['bpmn:SubProcess'];
var getDottedConnections = function (connections) {
    var dottedConnections = [];
    connections.forEach(function (connection) {
        var target = connection.target;
        connections.forEach(function (c) {
            var source = c.source;
            if (source === target && !notDottedTypes.includes(source.type)) {
                dottedConnections.push({
                    waypoints: [connection.waypoints[connection.waypoints.length - 1], getMid$2(target), c.waypoints[0]],
                });
            }
        });
    });
    return dottedConnections;
};
var renderSequenceFlow = function (viewer, activities) {
    var registry = viewer.get('elementRegistry');
    var canvas = viewer.get('canvas');
    var layer = canvas.getLayer('processInstance', 1);
    var connections = getConnections(activities !== null && activities !== void 0 ? activities : [], registry);
    var paths = [];
    var defs = query('defs', canvas._svg);
    if (!defs) {
        defs = create('defs');
        append(canvas._svg, defs);
    }
    var marker = create('marker');
    var path = create('path');
    attr(marker, {
        id: 'arrow',
        viewBox: '0 0 10 10',
        refX: 7,
        refY: 5,
        markerWidth: 4,
        markerHeight: 4,
        orient: 'auto-start-reverse',
    });
    attr(path, {
        d: 'M 0 0 L 10 5 L 0 10 z',
        fill: FILL,
        stroke: 'blue',
        strokeWidth: 0,
    });
    append(marker, path);
    append(defs, marker);
    paths.push(marker);
    for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
        var connection = connections_1[_i];
        var curve = createCurve(connection.waypoints, {
            markerEnd: 'url(#arrow)',
            stroke: FILL,
            strokeWidth: 4,
        });
        append(layer, curve);
        paths.push(curve);
    }
    var connections_ = getDottedConnections(connections);
    for (var _a = 0, connections_2 = connections_; _a < connections_2.length; _a++) {
        var connection = connections_2[_a];
        var curve = createCurve(connection.waypoints, {
            strokeDasharray: '1 8',
            strokeLinecap: 'round',
            stroke: FILL,
            strokeWidth: 4,
        });
        append(layer, curve);
        paths.push(curve);
    }
    return paths;
};
var clearSequenceFlow = function (nodes) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        remove(node);
    }
};

___$insertStyle(".toggle-history-view-button {\n  background: #ffffff;\n  border-radius: 1px;\n  border: 1px solid #cccccc;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin-bottom: 15px;\n  align-items: center;\n  justify-content: center;\n}\n.toggle-history-view-button:hover {\n  background: #e6e6e6;\n}");

// THIS FILE IS AUTO GENERATED
function FaHistory (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"}}]})(props);
}

var ToggleHistoryViewButton = function (_a) {
    var onToggleHistoryView = _a.onToggleHistoryView, initial = _a.initial;
    var _b = react.useState(!!initial), showHistoryView = _b[0], setShowHistoryView = _b[1];
    react.useEffect(function () {
        onToggleHistoryView(showHistoryView);
    }, [showHistoryView]);
    return (react.createElement("button", { className: "toggle-history-view-button", title: !showHistoryView ? 'Show history view' : 'Show runtime view', "aria-label": !showHistoryView ? 'Show history view' : 'Show runtime view', onClick: function () { return setShowHistoryView(!showHistoryView); } },
        react.createElement(FaHistory, { style: { opacity: !showHistoryView ? '0.33' : '1.0', fontSize: '133%' } })));
};

___$insertStyle(".toggle-sequence-flow-button {\n  background: #ffffff;\n  border-radius: 1px;\n  border: 1px solid #cccccc;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin-bottom: 15px;\n  align-items: center;\n  justify-content: center;\n}\n.toggle-sequence-flow-button:hover {\n  background: #e6e6e6;\n}");

// THIS FILE IS AUTO GENERATED
function GiStrikingArrows (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M136.564 31.01l239.67 149.595c-12.418 21.234-20.756 28.302-45.027 46.936l156.3-26.33-85.603-125.474c4.936 24.85 8.85 38.5.75 60.49L136.568 31.01h-.004zM21.524 42.75l83.13 325.893c-21.017 5.232-30.98 3.262-58.875-3.96l124.046 113.45 13.426-166.844c-10.836 23.322-15.94 37.197-34.342 46.82L21.523 42.75zm64.353.215l252.2 353.16c-23.285 16.947-36.38 19.583-73.83 24.9l200.66 71.74L407.7 286.944c-2.477 33.743-2.313 53.14-20.37 74.09L85.877 42.965z"}}]})(props);
}

var ToggleSequenceFlowButton = function (_a) {
    var onToggleSequenceFlow = _a.onToggleSequenceFlow;
    var _b = react.useState(false), showSequenceFlow = _b[0], setShowSequenceFlow = _b[1];
    react.useEffect(function () {
        onToggleSequenceFlow(showSequenceFlow);
    }, [showSequenceFlow]);
    return (react.createElement("button", { className: "toggle-sequence-flow-button", title: !showSequenceFlow ? 'Show sequence flow' : 'Hide sequence flow', "aria-label": !showSequenceFlow ? 'Show sequence flow' : 'Hide sequence flow', onClick: function () { return setShowSequenceFlow(!showSequenceFlow); } },
        react.createElement(GiStrikingArrows, { style: { opacity: !showSequenceFlow ? '0.33' : '1.0', fontSize: '133%' } })));
};

var BPMNViewer = function (diagram) { return __awaiter(void 0, void 0, void 0, function () {
    var model;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                model = new NavigatedViewer({
                    additionalModules: [lib$1, RobotModule, tooltips],
                    moddleExtensions: {
                        camunda: camundaModdle,
                    },
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.importXML(diagram)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, model];
        }
    });
}); };
var renderActivities = function (viewer, activities) {
    var counter = {};
    for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
        var activity = activities_1[_i];
        var id = activity.activityId;
        counter[id] = counter[id] ? counter[id] + 1 : 1;
    }
    var seen = {};
    var overlays = viewer.get('overlays');
    for (var _a = 0, activities_2 = activities; _a < activities_2.length; _a++) {
        var activity = activities_2[_a];
        var id = activity.activityId;
        if (seen[id]) {
            continue;
        }
        else {
            seen[id] = true;
        }
        var overlay = document.createElement('span');
        overlay.innerText = "" + counter[id];
        overlay.className = 'badge';
        overlay.style.cssText = "\n   background: lightgray;\n   border: 1px solid #143d52;\n   color: #143d52;\n ";
        overlays.add(id.split('#')[0], {
            position: {
                bottom: 17,
                right: 10,
            },
            html: overlay,
        });
    }
};
var BPMN = function (_a) {
    var activities = _a.activities, className = _a.className, diagramXML = _a.diagramXML, style = _a.style, showRuntimeToggle = _a.showRuntimeToggle;
    var ref = react.useRef(null);
    react.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var viewer, canvas, buttons, sequenceFlow_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BPMNViewer(diagramXML)];
                    case 1:
                        viewer = _a.sent();
                        if (ref.current !== null) {
                            ref.current.innerHTML = '';
                            viewer.attachTo(ref.current);
                            canvas = viewer.get('canvas');
                            canvas.zoom('fit-viewport');
                            renderActivities(viewer, activities !== null && activities !== void 0 ? activities : []);
                            buttons = document.createElement('div');
                            buttons.style.cssText = "\n          position: absolute;\n          right: 15px;\n          top: 15px;\n        ";
                            viewer._container.appendChild(buttons);
                            sequenceFlow_1 = [];
                            reactDom.render(react.createElement(react.StrictMode, null,
                                react.createElement(ToggleSequenceFlowButton, { onToggleSequenceFlow: function (value) {
                                        if (value) {
                                            sequenceFlow_1 = renderSequenceFlow(viewer, activities !== null && activities !== void 0 ? activities : []);
                                        }
                                        else {
                                            clearSequenceFlow(sequenceFlow_1);
                                        }
                                    } }),
                                showRuntimeToggle ? (react.createElement(ToggleHistoryViewButton, { onToggleHistoryView: function (value) {
                                        if (!value) {
                                            window.location.href =
                                                window.location.href.split('#')[0] +
                                                    window.location.hash.split('?')[0].replace(/^#\/history\/process-instance/, '#/process-instance');
                                        }
                                    }, initial: true })) : null), buttons);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [diagramXML]);
    return react.createElement("div", { className: className, ref: ref, style: style });
};

var BreadcrumbsPanel = function (_a) {
    var processDefinitionId = _a.processDefinitionId, processDefinitionName = _a.processDefinitionName, processInstanceId = _a.processInstanceId;
    return (react.createElement("div", { className: "breadcrumbs-panel", "cam-breadcrumbs-panel": "" },
        react.createElement("ul", { className: "cam-breadcrumb" },
            react.createElement("li", null,
                react.createElement("a", { className: "text", href: "#/" }, "Dashboard")),
            react.createElement("li", null,
                react.createElement("span", { className: "divider" }, "\u00BB"),
                react.createElement("a", { className: "text", href: "#/processes/" }, "Processes")),
            react.createElement("li", null,
                react.createElement("span", { className: "divider" }, "\u00BB"),
                react.createElement("a", { className: "text", href: "#/process-definition/" + processDefinitionId + "/runtime" }, processDefinitionName),
                ' ',
                ": ",
                processInstanceId,
                " : History"))));
};

var Container = function (_a) {
    var children = _a.children;
    return (react.createElement("div", { className: "ctn-fixed-view" },
        react.createElement("div", { className: "ctn-content-container" }, children)));
};

var HistoryTable = function (_a) {
    var instances = _a.instances;
    var columns = react.useMemo(function () { return [
        {
            Header: 'State',
            accessor: 'state',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Instance ID',
            Cell: function (_a) {
                var value = _a.value;
                return (react.createElement(Clippy, { value: value },
                    react.createElement("a", { href: "#/history/process-instance/" + value }, value)));
            },
            accessor: 'id',
        },
        {
            Header: 'Start Time',
            accessor: 'startTime',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'End Time',
            accessor: 'endTime',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Business Key',
            accessor: 'businessKey',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
    ]; }, []);
    var data = react.useMemo(function () {
        return instances.map(function (instance) {
            return {
                state: instance.state,
                id: instance.id,
                businessKey: instance.businessKey,
                startTime: instance.startTime.split('.')[0],
                endTime: instance.endTime ? instance.endTime.split('.')[0] : '',
            };
        });
    }, []);
    var tableInstance = reactTable.useTable({ columns: columns, data: data }, reactTable.useSortBy);
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, rows = tableInstance.rows, prepareRow = tableInstance.prepareRow;
    return (react.createElement("table", __assign({ className: "cam-table" }, getTableProps()),
        react.createElement("thead", null, headerGroups.map(function (headerGroup) { return (react.createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (
        /* @ts-ignore */
        react.createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render('Header'),
            react.createElement("span", { style: { position: 'absolute', fontSize: '125%' } }, 
            /* @ts-ignore */
            column.isSorted ? (
            /* @ts-ignore */
            column.isSortedDesc ? (react.createElement(GoChevronDown, { style: { color: '#155cb5' } })) : (react.createElement(GoChevronUp, { style: { color: '#155cb5' } }))) : (react.createElement(TiMinus, { style: { color: '#155cb5' } }))))); }))); })),
        react.createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
            prepareRow(row);
            return (react.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                return react.createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
};

var APIContext = react.createContext({
    adminApi: '',
    baseApi: '',
    CSRFToken: '',
    engineApi: '',
    engine: '',
    tasklistApi: '',
});

var Page = function (_a) {
    var version = _a.version, api = _a.api, children = _a.children;
    return (react.createElement(APIContext.Provider, { value: api },
        react.createElement("div", { className: "ctn-main", style: version.match(/^7\.14.*/)
                ? {}
                : {
                    top: '0px',
                    bottom: '0px',
                } }, children)));
};

___$insertStyle(".ReactModal__Html--open,\n.ReactModal__Body--open {\n  overflow: hidden;\n  /* prevents background page from scrolling when the modal is open */\n}\n\n.ReactModal__Overlay {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ReactModal__Content {\n  background: white;\n  width: 50rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100vh - 2rem);\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);\n  overflow-y: auto;\n  position: relative;\n}\n\n.modal-close-btn {\n  cursor: pointer;\n  top: 1.5rem;\n  right: 1.5rem;\n  position: absolute;\n  width: 3rem;\n  height: 3rem;\n}");

var u=react.createContext({});function l(){var e=react.useContext(u).token,t=react.useCallback(function(t){return e('"'===t||"'"===t?"quotation":"punctuation",t)},[e]);return {token:e,char:t}}function c(e,t,r){return void 0===r&&(r="span"),l().token(e,t,r)}var i=function(e,t,r){return t+"["+r+"]"},s={fontFamily:'Menlo, Monaco, "Courier New", monospace',fontFeatureSettings:'"liga" 0, "calt" 0',lineHeight:"1.5em",whiteSpace:"pre",margin:0},m={styles:{root:Object.assign({},s,{backgroundColor:"#1e2024"}),attribute:{color:"#ef415a"},unquotedAttribute:{color:"#d1d3d7"},string:{color:"#57bedf"},nil:{color:"#f2851e"},number:{color:"#f2851e"},boolean:{color:"#f2851e"},punctuation:{color:"#d1d3d7"}}};Object.assign({},s,{backgroundColor:"#f8f8f8"}),Object.assign({},s,{backgroundColor:"#2c2d25"}),Object.assign({},s,{backgroundColor:"#23241e"}),Object.assign({},s,{backgroundColor:"#212121"}),Object.assign({},s,{backgroundColor:"#fff"});var f=["string","number","object","boolean"],d=function(e){return f.includes(typeof e)},v=function(t){var n=t.value,a=t.theme,o=t.nodeWrapper,l=t.itemKeyGenerator,c=t.sortKeys,p=void 0!==c&&c,s=t.quoteAttributes,f=void 0===s||s,d=react.useMemo(function(){return function(t){return function(n,a,o){void 0===o&&(o="span");var u=t.styles?t.styles[n]:void 0,l=t.classes?t.classes[n]:void 0;return Boolean(u||l)?react.createElement(o,{style:u,className:l},a):react.createElement(react.Fragment,null,a)}}(a?"__esModule"in(t=a)?t.default:t:m);var t;},[a]),v=!0===p?K:p,b=l||i,g=react.useMemo(function(){return {token:d,getItemKey:b,quoteAttributes:f,nodeWrapper:o,sortKeys:v}},[d,b,f,o,v]);return react.createElement(u.Provider,{value:g},d("root",h({value:n,path:"",depth:1,nodeWrapper:o}),"pre"))};function h(t){var r=t.value,n=t.path,a=t.depth,o=t.nodeWrapper,u=function(t,r){return o?react.createElement(o,{path:n,type:r},t):t};if(null===r)return u(react.createElement(W$1,null),"nil");if(Array.isArray(r))return u(react.createElement(E$1,{value:r,path:n,depth:a}),"array");switch(typeof r){case"string":return u(react.createElement(b,{value:r,path:n,depth:a}),"string");case"number":return u(react.createElement(g,{value:r,path:n,depth:a}),"number");case"boolean":return u(react.createElement(y$1,{value:r,path:n,depth:a}),"boolean");case"object":return u(react.createElement(k,{value:r,path:n,depth:a}),"object");default:throw new Error("Unhandled type "+typeof r)}}function b(t){var r=t.value,n=l().char,a=A(r).slice(1,-1);return c("string",react.createElement(react.Fragment,null,n('"'),a,n('"')))}function g(e){return c("number",e.value)}function y$1(e){return c("boolean",e.value?"true":"false")}function E$1(t){var r=t.value,a=t.path,c=t.depth,i=l(),p=i.token,s=i.char,m=react.useContext(u),f=m.getItemKey,v=m.nodeWrapper,b=r.length;return p("array",0===b?react.createElement(react.Fragment,null,s("["),s("]")):react.createElement(react.Fragment,null,s("["),"\n"+C(c),r.map(function(t,r){var n=f(t,a,r),u=r===b-1;return react.createElement(react.Fragment,{key:n},d(t)?h({value:t,path:n,depth:c+1,nodeWrapper:v}):react.createElement(react.Fragment,null,"<",typeof t,"&rt;"),u?"\n"+C(c-1):react.createElement(react.Fragment,null,s(","),"\n"+C(c)))}),s("]")))}function k(t){var r=t.value,a=t.path,c=t.depth,i=react.useContext(u),p=i.nodeWrapper,s=i.sortKeys,m=l(),f=m.token,v=m.char,h=r,b=Object.keys(h),g=s?b.sort(function(e,t){return s(e,t,h)}):b,y=g.length,E=y-1;return f("object",0===y?react.createElement(react.Fragment,null,v("{"),v("}")):react.createElement(react.Fragment,null,v("{"),"\n",g.map(function(t,r){var n=h[t],u=a?a+"."+t:t;return d(n)?react.createElement(react.Fragment,{key:u},react.createElement(j,{attribute:t,value:n,depth:c,path:u,nodeWrapper:p,isLastKey:r===E})):null}),C(c-1),v("}")))}function F$1(t){var r,a=t.value,o=react.useContext(u).quoteAttributes,c=l(),i=c.token,p=c.char,s=A(a).slice(1,-1);return r=o||s.includes('"')?i("attribute",react.createElement(react.Fragment,null,p('"'),s,p('"'))):i("unquotedAttribute",s),react.createElement(react.Fragment,null,r,p(":")," ")}function j(t){var r=t.attribute,n=t.value,a=t.path,u=t.depth,c=t.isLastKey,i=t.nodeWrapper,p=l().char,s=react.createElement(react.Fragment,{key:a},C(u),react.createElement(F$1,{value:r}),h({value:n,path:a,depth:u+1,nodeWrapper:i}),c?"\n":react.createElement(react.Fragment,null,p(","),"\n"));return i?react.createElement(i,{type:"attributePair",path:a},s):s}function W$1(){return c("nil","null")}function A(e){return JSON.stringify(e)}function C(e){return "  ".repeat(e)}function K(e,t){return e.localeCompare(t)}

var __shared__ = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.sharedRoot = void 0;
exports.sharedRoot = {
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontFeatureSettings: '"liga" 0, "calt" 0',
    lineHeight: '1.5em',
    whiteSpace: 'pre',
    margin: 0
};
});

var github = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports["default"] = {
    styles: {
        root: Object.assign({}, __shared__.sharedRoot, { backgroundColor: '#f8f8f8' }),
        attribute: { color: '#333' },
        unquotedAttribute: { color: '#333' },
        string: { color: '#de1044' },
        nil: { color: '#008080' },
        number: { color: '#008080' },
        boolean: { color: '#008080' },
        punctuation: { color: '#333' }
    }
};
});

var github$1 = /*@__PURE__*/getDefaultExportFromCjs(github);

var tabbable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];
});

var handleBlur_1 = handleBlur;
var handleFocus_1 = handleFocus;
var markForFocusLater_1 = markForFocusLater;
var returnFocus_1 = returnFocus;
var popWithoutFocus_1 = popWithoutFocus;
var setupScopedFocus_1 = setupScopedFocus;
var teardownScopedFocus_1 = teardownScopedFocus;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

var focusManager = /*#__PURE__*/Object.defineProperty({
	handleBlur: handleBlur_1,
	handleFocus: handleFocus_1,
	markForFocusLater: markForFocusLater_1,
	returnFocus: returnFocus_1,
	popWithoutFocus: popWithoutFocus_1,
	setupScopedFocus: setupScopedFocus_1,
	teardownScopedFocus: teardownScopedFocus_1
}, '__esModule', {value: true});

var scopeTab_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var warning = function() {};

var warning_1 = warning;

/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

var exenv = createCommonjsModule(function (module) {
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

var safeHTMLElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;



var _exenv2 = _interopRequireDefault(exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;
});

var assertNodeList_1 = assertNodeList;
var setElement_1 = setElement;
var validateElement_1 = validateElement;
var hide_1 = hide;
var show_1 = show;
var documentNotReadyOrSSRTesting_1 = documentNotReadyOrSSRTesting;
var resetForTesting_1 = resetForTesting;



var _warning2 = _interopRequireDefault$1(warning_1);



function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

var ariaAppHider = /*#__PURE__*/Object.defineProperty({
	assertNodeList: assertNodeList_1,
	setElement: setElement_1,
	validateElement: validateElement_1,
	hide: hide_1,
	show: show_1,
	documentNotReadyOrSSRTesting: documentNotReadyOrSSRTesting_1,
	resetForTesting: resetForTesting_1
}, '__esModule', {value: true});

var classList = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
});

var portalOpenInstances_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];
});

var _portalOpenInstances2 = _interopRequireDefault$2(portalOpenInstances_1);

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

var ModalPortal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();





var _propTypes2 = _interopRequireDefault(propTypes);



var focusManager$1 = _interopRequireWildcard(focusManager);



var _scopeTab2 = _interopRequireDefault(scopeTab_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var classList$1 = _interopRequireWildcard(classList);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList$1.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider$1.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager$1.returnFocus(_this.props.preventScroll);
          focusManager$1.teardownScopedFocus();
        } else {
          focusManager$1.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager$1.setupScopedFocus(_this.node);
          focusManager$1.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList$1.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider$1.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];
});

var _reactLifecyclesCompat = /*@__PURE__*/getAugmentedNamespace(reactLifecyclesCompat_es);

var Modal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _reactDom2 = _interopRequireDefault(reactDom);



var _propTypes2 = _interopRequireDefault(propTypes);



var _ModalPortal2 = _interopRequireDefault(ModalPortal_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider$1.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;
});

var lib$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _Modal2 = _interopRequireDefault(Modal_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];
});

var ReactModal = /*@__PURE__*/getDefaultExportFromCjs(lib$2);

var headers = function (api) {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': api.CSRFToken,
    };
};
var get$1 = function (api, path, params) { return __awaiter(void 0, void 0, void 0, function () {
    var query, res, _a, _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                // XXX: Workaround a possible bug where engine api has been parsed wrong
                if (api.engine.match(/\/#\//)) {
                    api.engine = api.engine.split('/#/')[0].replace(/.*\//g, '');
                    api.engineApi = api.baseApi + '/engine/' + api.engine;
                }
                query = new URLSearchParams(params || {}).toString();
                if (!query) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch("" + api.engineApi + path + "?" + query, {
                        method: 'get',
                        headers: headers(api),
                    })];
            case 1:
                _a = _h.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, fetch("" + api.engineApi + path, {
                    method: 'get',
                    headers: headers(api),
                })];
            case 3:
                _a = _h.sent();
                _h.label = 4;
            case 4:
                res = _a;
                if (!(res.status === 200 && res.headers.get('Content-Type') === 'application/json')) return [3 /*break*/, 6];
                return [4 /*yield*/, res.json()];
            case 5: return [2 /*return*/, _h.sent()];
            case 6:
                if (!(res.headers.get('Content-Type') === 'application/json')) return [3 /*break*/, 8];
                _c = (_b = console).debug;
                _d = [res.status, path];
                return [4 /*yield*/, res.json()];
            case 7:
                _c.apply(_b, _d.concat([_h.sent()]));
                return [3 /*break*/, 10];
            case 8:
                _f = (_e = console).debug;
                _g = [res.status, path];
                return [4 /*yield*/, res.text()];
            case 9:
                _f.apply(_e, _g.concat([_h.sent()]));
                _h.label = 10;
            case 10: return [2 /*return*/, []];
        }
    });
}); };

// https://github.com/reactjs/react-modal/issues/283
ReactModal.defaultStyles = {};
var Modal = function (_a) {
    var title = _a.title, label = _a.label, variable = _a.variable;
    var _b = react.useState(variable.value), value = _b[0], setValue = _b[1];
    var api = react.useContext(APIContext);
    var _c = react.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    return (react.createElement(react.Fragment, null,
        react.createElement("button", { className: "btn btn-link", style: {
                padding: 0,
                margin: 0,
                border: 0,
            }, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(variable.type !== 'Json')) return [3 /*break*/, 1];
                            setIsOpen(true);
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, get$1(api, "/history/variable-instance/" + variable.id, { deserializeValue: 'false' })];
                        case 2:
                            data = _a.sent();
                            setValue(JSON.parse(data.value));
                            setIsOpen(true);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); } }, label),
        react.createElement(ReactModal, { className: "modal-dialog", isOpen: isOpen, style: {
                content: {},
                overlay: {
                    zIndex: 2000,
                },
            } },
            react.createElement("div", { className: "modal-content", style: {
                    display: 'flex',
                    flexDirection: 'column',
                } },
                react.createElement("div", { className: "modal-header" },
                    react.createElement("h3", null,
                        "Inspect \"",
                        title,
                        "\" variable")),
                react.createElement("div", { className: "modal-body" },
                    react.createElement(Clippy, { value: JSON.stringify(value) },
                        react.createElement("strong", null, "Value")),
                    react.createElement(v, { value: value, theme: github$1 })),
                react.createElement("div", { className: "model-footer", style: {
                        height: '4em',
                        paddingRight: '1em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    } },
                    react.createElement("button", { onClick: function () { return setIsOpen(false); }, className: "btn btn-default" }, "Close"))))));
};
var VariablesTable = function (_a) {
    var instance = _a.instance, activities = _a.activities, variables = _a.variables;
    var api = react.useContext(APIContext);
    var columns = react.useMemo(function () { return [
        {
            Header: 'Name',
            accessor: 'name',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value);
            },
        },
        {
            Header: 'Type',
            accessor: 'type',
        },
        {
            Header: 'Value',
            accessor: 'value',
            Cell: function (_a) {
                var data = _a.data, row = _a.row, value = _a.value;
                var raw = data[row.index];
                switch (raw.type) {
                    case 'Object':
                        return react.createElement(Modal, { title: "" + raw.name, label: "View", variable: raw });
                    case 'File':
                        return (react.createElement(Clippy, { value: "" + window.location.origin + api.engineApi + "/history/variable-instance/" + raw.id + "/data" },
                            react.createElement("a", { href: api.engineApi + "/history/variable-instance/" + raw.id + "/data" }, "Download")));
                    case 'Json':
                        return react.createElement(Modal, { title: "" + raw.name, label: "View", variable: raw });
                    default:
                        return (react.createElement(Clippy, { value: typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value) }, typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)));
                }
            },
        },
        {
            Header: 'Scope',
            accessor: 'scope',
        },
        {
            Header: 'Created',
            accessor: 'createTime',
            Cell: function (_a) {
                var value = _a.value;
                return react.createElement(Clippy, { value: value }, value.split('.')[0]);
            },
        },
    ]; }, []);
    var data = react.useMemo(function () {
        return variables
            .filter(function (variable) {
            return variable.activityInstanceId === instance.id ||
                !!(activities.has(variable.activityInstanceId) && activities.get(variable.activityInstanceId).activityName);
        })
            .map(function (variable) {
            return __assign(__assign({}, variable), { scope: variable.activityInstanceId === instance.id
                    ? instance.processDefinitionName
                    : activities === null || activities === void 0 ? void 0 : activities.get(variable.activityInstanceId).activityName });
        });
    }, [instance, variables, activities]);
    var tableInstance = reactTable.useTable({ columns: columns, data: data }, reactTable.useSortBy);
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, rows = tableInstance.rows, prepareRow = tableInstance.prepareRow;
    return (react.createElement("table", __assign({ className: "cam-table" }, getTableProps()),
        react.createElement("thead", null, headerGroups.map(function (headerGroup) { return (react.createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (
        /* @ts-ignore */
        react.createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render('Header'),
            react.createElement("span", { style: { position: 'absolute', fontSize: '125%' } }, 
            /* @ts-ignore */
            column.isSorted ? (
            /* @ts-ignore */
            column.isSortedDesc ? (react.createElement(GoChevronDown, { style: { color: '#155cb5' } })) : (react.createElement(GoChevronUp, { style: { color: '#155cb5' } }))) : (react.createElement(TiMinus, { style: { color: '#155cb5' } }))))); }))); })),
        react.createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
            prepareRow(row);
            return (react.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                return react.createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
};

var instanceRouteHistory = [
    {
        id: 'definitionTabHistoricInstances',
        pluginPoint: 'cockpit.processDefinition.runtime.tab',
        properties: {
            label: 'History',
        },
        render: function (node, _a) {
            var api = _a.api, processDefinitionId = _a.processDefinitionId;
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var definition, instances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, get$1(api, "/process-definition/" + processDefinitionId)];
                        case 1:
                            definition = _a.sent();
                            return [4 /*yield*/, get$1(api, '/history/process-instance', {
                                    processDefinitionKey: definition.key,
                                    // finished: true,
                                    sortBy: 'endTime',
                                    sortOrder: 'desc',
                                    maxResults: '100',
                                })];
                        case 2:
                            instances = _a.sent();
                            reactDom.render(react.createElement(react.StrictMode, null,
                                react.createElement(HistoryTable, { instances: instances })), node);
                            return [2 /*return*/];
                    }
                });
            }); })();
        },
    },
    {
        id: 'instanceDiagramHistoricToggle',
        pluginPoint: 'cockpit.processInstance.diagram.plugin',
        render: function (viewer) {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                var buttons;
                return __generator(this, function (_a) {
                    buttons = document.createElement('div');
                    buttons.style.cssText = "\n          position: absolute;\n          right: 15px;\n          top: 60px;\n        ";
                    viewer._container.appendChild(buttons);
                    reactDom.render(react.createElement(react.StrictMode, null,
                        react.createElement(ToggleHistoryViewButton, { onToggleHistoryView: function (value) {
                                if (value) {
                                    window.location.href =
                                        window.location.href.split('#')[0] +
                                            window.location.hash
                                                .split('?')[0]
                                                .replace(/^#\/process-instance/, '#/history/process-instance')
                                                .replace(/\/runtime/, '/');
                                }
                            }, initial: false })), buttons);
                    return [2 /*return*/];
                });
            }); })();
        },
    },
    {
        id: 'instanceRouteHistory',
        pluginPoint: 'cockpit.route',
        properties: {
            path: '/history/process-instance/:id',
            label: '/history',
        },
        render: function (node, _a) {
            var _b, _c;
            var api = _a.api;
            var hash = (_c = (_b = window === null || window === void 0 ? void 0 : window.location) === null || _b === void 0 ? void 0 : _b.hash) !== null && _c !== void 0 ? _c : '';
            var match = hash.match(/\/history\/process-instance\/([^\/]*)/);
            var processInstanceId = match ? match[1] : null;
            if (processInstanceId) {
                (function () { return __awaiter(void 0, void 0, void 0, function () {
                    var instance, _a, version, diagram, activities, variables, decisions, decisionByActivity, activityById;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, get$1(api, "/history/process-instance/" + processInstanceId)];
                            case 1:
                                instance = _b.sent();
                                return [4 /*yield*/, Promise.all([
                                        get$1(api, "/version"),
                                        get$1(api, "/process-definition/" + instance.processDefinitionId + "/xml"),
                                        get$1(api, '/history/activity-instance', { processInstanceId: processInstanceId }),
                                        get$1(api, '/history/variable-instance', { processInstanceId: processInstanceId }),
                                        get$1(api, '/history/decision-instance', { processInstanceId: processInstanceId }),
                                    ])];
                            case 2:
                                _a = _b.sent(), version = _a[0].version, diagram = _a[1], activities = _a[2], variables = _a[3], decisions = _a[4];
                                decisionByActivity = new Map(decisions.map(function (decision) { return [decision.activityInstanceId, decision.id]; }));
                                activityById = new Map(activities.map(function (activity) { return [activity.id, activity]; }));
                                activities.sort(function (a, b) {
                                    a = a.endTime ? new Date(a.endTime) : new Date();
                                    b = b.endTime ? new Date(b.endTime) : new Date();
                                    if (a > b) {
                                        return -1;
                                    }
                                    if (a < b) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                variables.sort(function (a, b) {
                                    a = a.name;
                                    b = b.name;
                                    if (a > b) {
                                        return 1;
                                    }
                                    if (a < b) {
                                        return -1;
                                    }
                                    return 0;
                                });
                                reactDom.render(react.createElement(react.StrictMode, null,
                                    react.createElement(Page, { version: version ? version : '7.15.0', api: api },
                                        react.createElement(BreadcrumbsPanel, { processDefinitionId: instance.processDefinitionId, processDefinitionName: instance.processDefinitionName, processInstanceId: processInstanceId }),
                                        react.createElement(Container, null,
                                            react.createElement(SplitPane, { split: "vertical", size: 200 },
                                                react.createElement("div", { className: "ctn-column" },
                                                    react.createElement("dl", { className: "process-information" },
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.id }, "Instance ID:")),
                                                        react.createElement("dd", null, instance.id),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.businessKey || 'null' }, "Business Key:")),
                                                        react.createElement("dd", null, instance.businessKey || 'null'),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.processDefinitionVersion }, "Definition Version:")),
                                                        react.createElement("dd", null, instance.processDefinitionVersion),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.processdefinitionid }, "Definition ID:")),
                                                        react.createElement("dd", null, instance.processDefinitionId),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.processDefinitionKey }, "Definition Key:")),
                                                        react.createElement("dd", null, instance.processDefinitionKey),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.processDefinitionName }, "Definition Name:")),
                                                        react.createElement("dd", null, instance.processDefinitionName),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.tenantId || 'null' }, "Tenant ID:")),
                                                        react.createElement("dd", null, instance.tenantId || 'null'),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.superProcessInstanceId }, "Super Process instance ID:")),
                                                        react.createElement("dd", null, (instance.superProcessInstanceId && (react.createElement("a", { href: "#/history/process-instance/" + instance.superProcessInstanceId }, instance.superProcessInstanceId))) ||
                                                            'null'),
                                                        react.createElement("dt", null,
                                                            react.createElement(Clippy, { value: instance.state }, "State")),
                                                        react.createElement("dd", null, instance.state))),
                                                react.createElement(SplitPane, { split: "horizontal", size: 300 },
                                                    react.createElement(BPMN, { activities: activities, diagramXML: diagram.bpmn20Xml, className: "ctn-content", style: { width: '100%' }, showRuntimeToggle: instance.state === 'ACTIVE' }),
                                                    react.createElement(Tabs, { className: "ctn-row ctn-content-bottom ctn-tabbed", selectedTabClassName: "active" },
                                                        react.createElement(TabList, { className: "nav nav-tabs" },
                                                            react.createElement(Tab, null,
                                                                react.createElement("a", null, "Audit Log")),
                                                            react.createElement(Tab, null,
                                                                react.createElement("a", null, "Variables"))),
                                                        react.createElement(TabPanel, { className: "ctn-tabbed-content ctn-scroll" },
                                                            react.createElement(AuditLogTable, { activities: activities, decisions: decisionByActivity })),
                                                        react.createElement(TabPanel, { className: "ctn-tabbed-content ctn-scroll" },
                                                            react.createElement(VariablesTable, { instance: instance, activities: activityById, variables: variables })),
                                                        react.createElement(TabPanel, null))))))), node);
                                return [2 /*return*/];
                        }
                    });
                }); })();
            }
        },
    },
];

export default instanceRouteHistory;
