"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8989],{94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var i=m(n(67294)),l=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),c=n(25387),s=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=o.default.bind(s.default),g={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=g;var b={text:l.default.string,textStyle:l.default.oneOf(Object.values(g)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"]),textStyleMeaning:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},T={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},x=function(e){var t,n,a=e.text,l=e.textStyle,o=e.isTruncated,c=e.isDisabled,s=e.icon,m=e.iconAlignment,b=e.textStyleMeaning,T=e.intl,x=p(e,d),v=i.default.useContext(u.default),S=(0,r.default)(y("item-display",{"is-disabled":c},_({},"icon-".concat(m),s),v.className),x.className),h=y(["text",{"is-truncated":o},_({},"".concat(l),l===g.SECONDARY),_({},"".concat(l),l===g.ATTENTION),_({},"".concat(l),l===g.STRONG),{"strike-through":l===g.STRIKETHROUGH}]);return c&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),s&&(t=i.default.createElement("div",{className:y("icon")},s)),b?n="".concat(b,", ").concat(a,", ").concat(T.formatMessage({id:"Terra.item-display.textStyleMeaningEnd"},{textStyleMeaning:b})):l===g.STRIKETHROUGH&&(n="".concat(T.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethrough"}),", ").concat(a,", ").concat(T.formatMessage({id:"Terra.item-display.textStyleMeaningStrikethroughEnd"}))),i.default.createElement("div",f({},x,{className:S,"aria-disabled":c}),t,n?i.default.createElement("span",{"aria-label":n},i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:h,"aria-hidden":"true"},a)):i.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:h},a))};x.propTypes=b,x.defaultProps=T;var v=(0,c.injectIntl)(x);t.default=v},28989:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),i=u(n(97160)),l=u(n(47166)),r=u(n(94394)),o=u(n(49948));function u(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(o.default),s="Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text";t.default=function(){return a.default.createElement("div",{className:c("content-wrapper")},a.default.createElement(r.default,{text:"Center / default - ".concat(s),icon:a.default.createElement(i.default,null),id:"test-icon-center"}),a.default.createElement("br",null),a.default.createElement(r.default,{text:"Top - ".concat(s),icon:a.default.createElement(i.default,null),id:"test-icon-top",iconAlignment:"top"}),a.default.createElement("br",null),a.default.createElement(r.default,{text:"Inline - ".concat(s),icon:a.default.createElement(i.default,null),id:"test-icon-inline",iconAlignment:"inline"}))}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},49948:function(e,t,n){n.r(t),t.default={"content-wrapper":"ItemDisplayCommon-test-module__content-wrapper___fevoj","text-larger":"ItemDisplayCommon-test-module__text-larger___Hqfxc","text-smaller":"ItemDisplayCommon-test-module__text-smaller___Eo8Y6"}}}]);