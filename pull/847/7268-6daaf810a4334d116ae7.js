"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7268],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(67294)),i=f(n(45697)),l=n(25387),r=f(n(94184)),o=f(n(47166)),u=f(n(50026)),s=f(n(97309)),c=f(n(94394)),d=f(n(80918)),m=["text","isTruncated","isDisabled","intl"];function f(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(d.default),b={text:i.default.string,isTruncated:i.default.bool,isDisabled:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired},g=function(e){var t=e.text,n=e.isTruncated,i=e.isDisabled,l=e.intl,o=y(e,m),d=a.default.useContext(u.default),f=(0,r.default)(p("item-comment",d.className),o.className),b=i?l.formatMessage({id:"Terra.itemDisplay.disabledComment"}):l.formatMessage({id:"Terra.itemDisplay.comment"});return a.default.createElement(c.default,_({text:t,isTruncated:n,isDisabled:i,icon:a.default.createElement(s.default,{a11yLabel:b,className:p("inline-icon")})},o,{className:f}))};g.propTypes=b,g.defaultProps={text:"",isTruncated:!1};var v=(0,l.injectIntl)(g);t.default=v},94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=m(n(67294)),l=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=n(25387),c=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(c.default),b={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=b;var g={text:l.default.string,textStyle:l.default.oneOf(Object.values(b)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"]),textStyleMeaning:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n,a=e.text,l=e.textStyle,o=e.isTruncated,s=e.isDisabled,c=e.icon,m=e.iconAlignment,g=e.textStyleMeaning,v=e.intl,h=y(e,d),O=i.default.useContext(u.default),x=(0,r.default)(p("item-display",{"is-disabled":s},_({},"icon-".concat(m),c),O.className),h.className),S=p(["text",{"is-truncated":o},_({},"".concat(l),l===b.SECONDARY),_({},"".concat(l),l===b.ATTENTION),_({},"".concat(l),l===b.STRONG),{"strike-through":l===b.STRIKETHROUGH}]);return s&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),c&&(t=i.default.createElement("div",{className:p("icon")},c)),g?n="".concat(g,", ").concat(a,", ").concat(v.formatMessage({id:"Terra.item-display.textStyleMeaningEnd"},{textStyleMeaning:g})):l===b.STRIKETHROUGH&&(n="".concat(v.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethrough"}),", ").concat(a,", ").concat(v.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethroughEnd"}))),i.default.createElement("div",f({},h,{className:x,"aria-disabled":s}),t,n?i.default.createElement("span",{"aria-label":n},i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S,"aria-hidden":"true"},a)):i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:S},a))};h.propTypes=g,h.defaultProps=v;var O=(0,s.injectIntl)(h);t.default=O},47268:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(6696));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(i.default,{text:"test comment",id:"ItemComment"})}},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};o.displayName="IconComment",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u}}]);