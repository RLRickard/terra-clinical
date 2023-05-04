"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8989],{94394:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var a=f(n(67294)),i=f(n(45697)),r=f(n(94184)),o=f(n(47166)),u=f(n(50026)),c=f(n(29270)),d=n(25387),s=f(n(35950)),m=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","meaning","intl"];function f(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=o.default.bind(s.default),T={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=T;var b={text:i.default.string,textStyle:i.default.oneOf(Object.values(T)),isTruncated:i.default.bool,isDisabled:i.default.bool,icon:i.default.element,iconAlignment:i.default.oneOf(["center","top","inline"]),meaning:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired},x={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n=e.text,l=e.textStyle,i=e.isTruncated,o=e.isDisabled,d=e.icon,s=e.iconAlignment,f=e.meaning,b=e.intl,x=y(e,m),v=a.default.useContext(u.default),E=(0,r.default)(g("item-display",{"is-disabled":o},p({},"icon-".concat(s),d),v.className),x.className),O=g(["text",{"is-truncated":i},p({},"".concat(l),l===T.SECONDARY),p({},"".concat(l),l===T.ATTENTION),p({},"".concat(l),l===T.STRONG),{"strike-through":l===T.STRIKETHROUGH}]);d&&(t=a.default.createElement("div",{className:g("icon")},d));var h=null,I=null;return f?(h=a.default.createElement(c.default,{text:"".concat(f,":")}),I=a.default.createElement(c.default,{text:b.formatMessage({id:"Terra.item-display.meaningEnd"},{meaning:f})})):l===T.STRIKETHROUGH&&(h=a.default.createElement(c.default,{text:b.formatMessage({id:"Terra.item-display.meaningStrikethrough"})}),I=a.default.createElement(c.default,{text:b.formatMessage({id:"Terra.item-display.meaningStrikethroughEnd"})})),a.default.createElement("div",_({},x,{className:E,"aria-disabled":o}),t,a.default.createElement("span",{role:"text"},h,a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O},n),I?a.default.createElement(c.default,{text:","}):null,I))};v.propTypes=b,v.defaultProps=x;var E=(0,d.injectIntl)(v);t.default=E},28989:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(97160)),i=u(n(47166)),r=u(n(94394)),o=u(n(49948));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default),d="Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text";t.default=function(){return l.default.createElement("div",{className:c("content-wrapper")},l.default.createElement(r.default,{text:"Center / default - ".concat(d),icon:l.default.createElement(a.default,null),id:"test-icon-center"}),l.default.createElement("br",null),l.default.createElement(r.default,{text:"Top - ".concat(d),icon:l.default.createElement(a.default,null),id:"test-icon-top",iconAlignment:"top"}),l.default.createElement("br",null),l.default.createElement(r.default,{text:"Inline - ".concat(d),icon:l.default.createElement(a.default,null),id:"test-icon-inline",iconAlignment:"inline"}))}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},49948:function(e,t,n){n.r(t),t.default={"content-wrapper":"ItemDisplayCommon-test-module__content-wrapper___fevoj","text-larger":"ItemDisplayCommon-test-module__text-larger___Hqfxc","text-smaller":"ItemDisplayCommon-test-module__text-smaller___Eo8Y6"}}}]);