"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1670],{94394:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var l=d(n(67294)),r=d(n(45697)),a=d(n(94184)),o=d(n(47166)),u=d(n(50026)),c=d(n(35950)),s=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_.apply(this,arguments)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==i(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=o.default.bind(c.default),p={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=p;var b={text:r.default.string,textStyle:r.default.oneOf(Object.values(p)),isTruncated:r.default.bool,isDisabled:r.default.bool,icon:r.default.element,iconAlignment:r.default.oneOf(["center","top","inline"])},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},O=function(e){var t,n=e.text,i=e.textStyle,r=e.isTruncated,o=e.isDisabled,c=e.icon,d=e.iconAlignment,b=m(e,s),v=l.default.useContext(u.default),O=(0,a.default)(y("item-display",{"is-disabled":o},f({},"icon-".concat(d),c),v.className),b.className),g=y(["text",{"is-truncated":r},f({},"".concat(i),i===p.SECONDARY),f({},"".concat(i),i===p.ATTENTION),f({},"".concat(i),i===p.STRONG),{"strike-through":i===p.STRIKETHROUGH}]);c&&(t=l.default.createElement("div",{className:y("icon")},c));var S=l.default.createElement("span",null,n);return i===p.STRONG&&(S=l.default.createElement("strong",null,n)),l.default.createElement("div",_({},b,{className:O,"aria-disabled":o}),t,l.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:g},S))};O.propTypes=b,O.defaultProps=v;var g=O;t.default=g},41670:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(67294)),l=r(n(94394));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(l.default,{text:"Test Text",id:"ItemDisplay"})}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}}}]);