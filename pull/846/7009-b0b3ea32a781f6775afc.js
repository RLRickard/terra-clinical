"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7009],{25156:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),a=c(n(45697)),o=c(n(94184)),u=c(n(47166)),d=c(n(50026)),i=c(n(52146)),f=["children","title","startContent","endContent","isSubheader"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=u.default.bind(i.default),b={children:a.default.element,startContent:a.default.element,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool},h=function(e){var t,n=e.children,l=e.title,a=e.startContent,u=e.endContent,i=e.isSubheader,c=m(e,f),s=(0,r.useContext)(d.default);l&&(t=r.default.createElement("div",{className:p("title-container")},r.default.createElement("h1",{className:p("title")},l)));var b=r.default.Children.map(n,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([p("flex-collapse"),n.props.className])})})),h=(0,o.default)([p(["flex-header",{subheader:i},s.className]),c.className]);return r.default.createElement("header",_({},c,{className:h}),a&&r.default.createElement("div",{className:p("flex-end")},a),r.default.createElement("div",{className:p("flex-fill")},t),b,u&&r.default.createElement("div",{className:p("flex-end")},u))};h.propTypes=b,h.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1};var y=h;t.default=y},17009:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),r=u(n(47166)),a=u(n(25156)),o=u(n(25291));function u(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),i=l.default.createElement("div",{id:"headerTest--content",className:d("content")});t.default=function(){return l.default.createElement(a.default,{title:"Header with content on the right",endContent:i})}},52146:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___hZ9Up","orion-fusion-theme":"Header-module__orion-fusion-theme___th1sQ","flex-header":"Header-module__flex-header___DJY9t","flex-collapse":"Header-module__flex-collapse___Zc2tf",subheader:"Header-module__subheader___2qUoS","flex-fill":"Header-module__flex-fill___xS4HD","flex-end":"Header-module__flex-end___2UUdn","title-container":"Header-module__title-container___ib4uQ",title:"Header-module__title___tenT9"}},25291:function(e,t,n){n.r(t),t.default={"start-content":"ClinicalHeaderCommon-test-module__start-content___kRlCG","end-content":"ClinicalHeaderCommon-test-module__end-content___Ew5yR",content:"ClinicalHeaderCommon-test-module__content___uUeND"}}}]);