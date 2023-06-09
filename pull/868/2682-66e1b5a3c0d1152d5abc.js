/*! For license information please see 2682-66e1b5a3c0d1152d5abc.js.LICENSE.txt */
(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[2682],{49271:function(e,t,n){"use strict";var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),u=n(21538),s=a(n(33864)),f=a(n(23399)),d=n(51051),p=a(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),v={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),m=(0,l.default)(p,2),v=m[0],y=m[1],g=(0,o.useState)(!1),O=(0,l.default)(g,2),w=O[0],E=O[1],j=o.default.useContext(u.ThemeContext),x=void 0!==a,P=function(){E(!w),v&&y(!v)},S=function(){y(!v),w&&E(!w)},T=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",j.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},x&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":w}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(f.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(f.default,{className:_("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:_("css")},a),v&&o.default.createElement("div",{className:_("code")},n))))};y.propTypes=v,y.defaultProps={isExpanded:!1};var g=y;t.Z=g},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},12922:function(e,t,n){"use strict";n.r(t),t.default={icon:"Icon-module__icon___96oUM","is-bidi":"Icon-module__is-bidi___k13my","tui-Icon":"Icon-module__tui-Icon___eEy+o","is-spin":"Icon-module__is-spin___59PT0"}},87192:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___BsBuf","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___n0b1d",IconCritical:"IconCritical-module__IconCritical___V66s+"}},17691:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"IconPharmacyReject-module__orion-fusion-theme___lByH6","clinical-lowlight-theme":"IconPharmacyReject-module__clinical-lowlight-theme___jsCq8",IconPharmacyReject:"IconPharmacyReject-module__IconPharmacyReject___ASyFL"}},33864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},31438:function(e,t,n){"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),l=s(n(47892)),o=s(n(65872)),i=s(n(43032)),c=s(n(12922)),u=["isBidi","isSpin","children","height","width","ariaLabel","a11yLabel","focusable"];function s(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=i.default.bind(c.default),v={isBidi:l.default.bool,isSpin:l.default.bool,children:l.default.node,height:l.default.string,width:l.default.string,a11yLabel:l.default.string,ariaLabel:l.default.string,focusable:l.default.string},h=function(e){var t,n=e.isBidi,a=e.isSpin,l=e.children,i=e.height,c=e.width,s=e.ariaLabel,v=e.a11yLabel,h=e.focusable,b=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(e,u)),y=(0,o.default)(_("tui-Icon","icon",{"is-bidi":n},{"is-spin":a}),b.className);return v||s?(t=r.default.createElement("title",{},v||s),s&&console.warn("`ariaLabel` prop has been renamed to `a11yLabel`. please update all the refernces of ariaLabel prop to a11yLabel.")):(Object.keys(b).forEach((function(e){(e.includes("aria")||"title"===e||"role"===e)&&delete b[e]})),b.role="presentation"),b.height=i,b.width=c,b.focusable=h,r.default.createElement("svg",f({},b,{className:y}),t,l)};h.propTypes=v,h.defaultProps={isBidi:!1,isSpin:!1,children:null,height:"1em",width:"1em",focusable:"false"};var b=h;t.default=b},21413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(65872)),l=u(n(43032)),o=u(n(18553)),i=u(n(31438)),c=u(n(87192));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var f=l.default.bind(c.default),d=function(e){var t=s({},e),n=a.default.useContext(o.default),l=(0,r.default)(f("IconCritical",n.className),e.className);return a.default.createElement(i.default,s({},t,{className:l}),a.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),a.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};d.displayName="IconCritical",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var p=d;t.default=p},94330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(31438));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M48 22.7L37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};i.displayName="IconGlasses",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=i;t.default=c},52947:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(65872)),l=u(n(43032)),o=u(n(18553)),i=u(n(31438)),c=u(n(17691));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var f=l.default.bind(c.default),d=function(e){var t=s({},e),n=a.default.useContext(o.default),l=(0,r.default)(f("IconPharmacyReject",n.className),e.className);return a.default.createElement(i.default,s({},t,{className:l}),a.default.createElement("path",{fill:"#E50000",d:"M36 22c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-9 12c0-5 4-9 9-9 1.9 0 3.7.6 5.2 1.7L28.7 39.2C27.6 37.7 27 35.9 27 34zm9 9c-1.9 0-3.7-.6-5.2-1.7l12.5-12.5c1 1.5 1.7 3.3 1.7 5.2 0 5-4 9-9 9z"}),a.default.createElement("path",{d:"M.4 4.5c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0L15 12.6H8.6L.4 4.5zm22 29.3c0-3.2 1.1-6.1 2.9-8.4H23v3h-3v-3h-3v-3h3v-3h3v3h3v2.2c2.5-2.6 6-4.3 9.9-4.3V15H7.1v7.6c0 6.3 5.1 11.4 11.4 11.4h3.9v-.2z"}))};d.displayName="IconPharmacyReject",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var p=d;t.default=p},77005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(31438));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M.6 7.2c-.8-.8-.8-2.1 0-2.9L2 3c.8-.8 2-.8 2.8 0l15 15h-8.5L.6 7.2zM48 21v10c0 8.3-6.7 15-15 15h-8c-8.3 0-15-6.7-15-15V21h38zM35 31h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z"}))};i.displayName="IconPharmacyReview",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=i;t.default=c},43032:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},65872:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},2594:function(e,t,n){"use strict";var a=n(24044);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,l,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return n.PropTypes=n,n}},47892:function(e,t,n){e.exports=n(2594)()},24044:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18553:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.themeContextShape=t.default=void 0;var r=a(n(67294)),l=a(n(47892)),o=r.default.createContext({}),i=l.default.shape({className:l.default.string});t.themeContextShape=i;var c=o;t.default=c}}]);