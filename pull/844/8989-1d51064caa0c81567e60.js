"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8989],{94394:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=d(n(67294)),a=d(n(45697)),r=d(n(94184)),o=d(n(47166)),u=d(n(50026)),c=d(n(35950)),s=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(c.default),y={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=y;var b={text:a.default.string,textStyle:a.default.oneOf(Object.values(y)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"])},T={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},g=function(e){var t,n=e.text,l=e.textStyle,a=e.isTruncated,o=e.isDisabled,c=e.icon,d=e.iconAlignment,b=_(e,s),T=i.default.useContext(u.default),g=(0,r.default)(p("item-display",{"is-disabled":o},f({},"icon-".concat(d),c),T.className),b.className),v=p(["text",{"is-truncated":a},f({},"".concat(l),l===y.SECONDARY),f({},"".concat(l),l===y.ATTENTION),f({},"".concat(l),l===y.STRONG),{"strike-through":l===y.STRIKETHROUGH}]);c&&(t=i.default.createElement("div",{className:p("icon")},c));var x=i.default.createElement("span",null,n);return l===y.STRONG&&(x=i.default.createElement("strong",null,n)),i.default.createElement("div",m({},b,{className:g,"aria-disabled":o}),t,i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:v},x))};g.propTypes=b,g.defaultProps=T;var v=g;t.default=v},28989:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),i=u(n(97160)),a=u(n(47166)),r=u(n(94394)),o=u(n(49948));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(o.default),s="Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text";t.default=function(){return l.default.createElement("div",{className:c("content-wrapper")},l.default.createElement(r.default,{text:"Center / default - ".concat(s),icon:l.default.createElement(i.default,null),id:"test-icon-center"}),l.default.createElement("br",null),l.default.createElement(r.default,{text:"Top - ".concat(s),icon:l.default.createElement(i.default,null),id:"test-icon-top",iconAlignment:"top"}),l.default.createElement("br",null),l.default.createElement(r.default,{text:"Inline - ".concat(s),icon:l.default.createElement(i.default,null),id:"test-icon-inline",iconAlignment:"inline"}))}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},49948:function(e,t,n){n.r(t),t.default={"content-wrapper":"ItemDisplayCommon-test-module__content-wrapper___fevoj","text-larger":"ItemDisplayCommon-test-module__text-larger___Hqfxc","text-smaller":"ItemDisplayCommon-test-module__text-smaller___Eo8Y6"}}}]);