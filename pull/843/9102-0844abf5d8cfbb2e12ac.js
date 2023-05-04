"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9102],{94394:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var a=m(n(67294)),l=m(n(45697)),r=m(n(94184)),o=m(n(47166)),u=m(n(50026)),s=n(25387),c=m(n(35950)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","meaning","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(c.default),g={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=g;var b={text:l.default.string,textStyle:l.default.oneOf(Object.values(g)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"]),meaning:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},h={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n,i=e.text,l=e.textStyle,o=e.isTruncated,s=e.isDisabled,c=e.icon,m=e.iconAlignment,b=e.meaning,h=e.intl,v=y(e,d),O=a.default.useContext(u.default),S=(0,r.default)(p("item-display",{"is-disabled":s},_({},"icon-".concat(m),c),O.className),v.className),x=p(["text",{"is-truncated":o},_({},"".concat(l),l===g.SECONDARY),_({},"".concat(l),l===g.ATTENTION),_({},"".concat(l),l===g.STRONG),{"strike-through":l===g.STRIKETHROUGH}]);return c&&(t=a.default.createElement("div",{className:p("icon")},c)),b?n="".concat(b,": ").concat(i,", ").concat(h.formatMessage({id:"Terra.item-display.meaningEnd"},{meaning:b})):l===g.STRIKETHROUGH&&(n="".concat(h.formatMessage({id:"Terra.item-display.meaningStrikethrough"}),": ").concat(i,", ").concat(h.formatMessage({id:"Terra.item-display.meaningStrikethroughEnd"}))),a.default.createElement("div",f({},v,{className:S,"aria-disabled":s}),t,n?a.default.createElement("span",{"aria-label":n},a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:x,"aria-hidden":"true"},i)):a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:x},i))};v.propTypes=b,v.defaultProps=h;var O=(0,s.injectIntl)(v);t.default=O},29102:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(67294)),a=l(n(94394));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(){return i.default.createElement("div",null,i.default.createElement(a.default,{text:"test text",textStyle:"attention",id:"test-display-attention-meaning",meaning:"Important"}),i.default.createElement(a.default,{text:"test text (default meaning)",textStyle:"strikeThrough",id:"test-display-strike-through-default"}),i.default.createElement(a.default,{text:"test text",textStyle:"strikeThrough",id:"test-display-strike-through-meaning",meaning:"Update"}))};t.default=r},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);