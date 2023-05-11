"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9570],{94394:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var a=m(n(67294)),i=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=n(25387),c=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(c.default),b={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=b;var g={text:i.default.string,textStyle:i.default.oneOf(Object.values(b)),isTruncated:i.default.bool,isDisabled:i.default.bool,icon:i.default.element,iconAlignment:i.default.oneOf(["center","top","inline"]),textStyleMeaning:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired},x={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n=e.text,l=e.textStyle,i=e.isTruncated,o=e.isDisabled,s=e.icon,c=e.iconAlignment,m=e.textStyleMeaning,g=e.intl,x=y(e,d),v=a.default.useContext(u.default),S=(0,r.default)(p("item-display",{"is-disabled":o},_({},"icon-".concat(c),s),v.className),x.className),T=p(["text",{"is-truncated":i},_({},"".concat(l),l===b.SECONDARY),_({},"".concat(l),l===b.ATTENTION),_({},"".concat(l),l===b.STRONG),{"strike-through":l===b.STRIKETHROUGH}]);o&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),s&&(t=a.default.createElement("div",{className:p("icon")},s));var h,O=a.default.createElement("span",null,n);return l===b.STRONG&&(O=a.default.createElement("strong",null,n)),m?h="".concat(m,", ").concat(n,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningEnd"},{textStyleMeaning:m})):l===b.STRIKETHROUGH&&(h="".concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethrough"}),", ").concat(n,", ").concat(g.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethroughEnd"}))),a.default.createElement("div",f({},x,{className:S,"aria-disabled":o}),t,h?a.default.createElement("span",{"aria-label":h},a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:T,"aria-hidden":"true"},n)):a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:T},O))};v.propTypes=g,v.defaultProps=x;var S=(0,s.injectIntl)(v);t.default=S},19570:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(97160)),i=u(n(47166)),r=u(n(94394)),o=u(n(49948));function u(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(o.default),c=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{text:"Test Text",icon:l.default.createElement(a.default,null),id:"Default"}),l.default.createElement(r.default,{text:"Test Text",icon:l.default.createElement(a.default,null),id:"Larger",className:s("text-larger")}),l.default.createElement(r.default,{text:"Test Text",icon:l.default.createElement(a.default,null),id:"Smaller",className:s("text-smaller")}))};t.default=c},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},49948:function(e,t,n){n.r(t),t.default={"content-wrapper":"ItemDisplayCommon-test-module__content-wrapper___fevoj","text-larger":"ItemDisplayCommon-test-module__text-larger___Hqfxc","text-smaller":"ItemDisplayCommon-test-module__text-smaller___Eo8Y6"}}}]);