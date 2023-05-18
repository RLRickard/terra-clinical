"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3201],{72638:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),a=s(l(45697)),i=s(l(47166)),n=s(l(40669)),o=s(l(2498)),u=["title","children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f=i.default.bind(n.default),m={title:a.default.string,children:a.default.oneOfType([a.default.objectOf(o.default),a.default.arrayOf(a.default.objectOf(o.default))])},p={title:void 0,children:void 0},y=function(e){var t,l=e.title,a=e.children,i=c(e,u);return l&&(t=r.default.createElement("div",{className:f("title")},l)),r.default.createElement("div",d({},i,{"data-terra-clincial-detail-list":!0,className:i.className}),t,r.default.createElement("div",{className:f("list")},a))};y.propTypes=m,y.defaultProps=p;var _=y;t.default=_},2498:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(67294)),a=u(l(45697)),i=u(l(47166)),n=u(l(95432)),o=["item"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=i.default.bind(n.default),f={item:a.default.element.isRequired},m=function(e){var t=e.item,l=d(e,o),a=c(["detail-list-item",l.className]);return r.default.createElement("div",s({},l,{className:a}),t)};m.propTypes=f,m.defaultProps={};var p=m;t.default=p},341:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(l(67294)),i=m(l(45697)),n=m(l(94184)),o=m(l(47166)),u=m(l(50026)),s=m(l(28682)),d=m(l(72638)),c=m(l(2498)),f=["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles"];function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function y(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var b=o.default.bind(s.default),v={title:i.default.string,secondaryTitles:i.default.arrayOf(i.default.string),subtitles:i.default.arrayOf(i.default.string),accessory:i.default.element,graph:i.default.element,details:i.default.arrayOf(i.default.element),footer:i.default.string,isDivided:i.default.bool,isSmallerTitles:i.default.bool},O={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1},g=function(e){var t=e.title,l=e.secondaryTitles,r=e.subtitles,i=e.accessory,o=e.graph,s=e.details,d=e.footer,c=e.isDivided,m=e.isSmallerTitles,v=_(e,f),O=a.default.useContext(u.default),g=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?p(Object(l),!0).forEach((function(t){y(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},v);g.className=(0,n.default)(b("detail-view",O.className),g.className);var h=t?a.default.createElement("h1",{className:b("primary-text")},t):null,w=l.map((function(e,t){return a.default.createElement("div",{className:b("secondary-text"),key:"".concat(t)},e)})),j=r.map((function(e,t){return a.default.createElement("div",{className:b("subtitle"),key:"".concat(t)},e)})),D=i?a.default.createElement("div",{className:b("accessory")},i):null,E=d?a.default.createElement("div",{className:b("footer-text")},d):null,P=null,S=[];if(c){P=a.default.createElement("hr",{className:b("divider")});for(var T=0;T<s.length;T+=1)S.push(s[T]),S.push(P)}else S=s;return a.default.createElement("div",g,a.default.createElement("div",{className:b("titles-section",{"titles-smaller":m})},h,w,j,D),o&&P,o,P,S,E)};g.propTypes=v,g.defaultProps=O,g.DetailList=d.default,g.DetailListItem=c.default;var h=g;t.default=h},3201:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(l(67294)),a=o(l(47166)),i=o(l(341)),n=o(l(84769));function o(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(n.default),s=r.default.createElement("p",null,"A Detail List Item"),d=r.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),c=r.default.createElement("p",null," A sample accessory container "),f=function(){return r.default.createElement(i.default,{title:"Header",secondaryTitles:["secondaryTitle1","secondaryTitle2"],subtitles:["subtitle1","subTitle2"],graph:r.default.createElement("div",{className:u("graph-content")},"This is where any visualizations would go"),accessory:c,details:[r.default.createElement(i.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},r.default.createElement(i.default.DetailListItem,{item:s}),r.default.createElement(i.default.DetailListItem,{item:s}),r.default.createElement(i.default.DetailListItem,{item:d}),r.default.createElement(i.default.DetailListItem,{item:s}),r.default.createElement(i.default.DetailListItem,{item:s}))],footer:"Footer Text",id:"DetailView",isSmallerTitles:!1})};t.default=f},40669:function(e,t,l){l.r(t),t.default={title:"DetailList-module__title___wkMGW",list:"DetailList-module__list___35o8Y"}},95432:function(e,t,l){l.r(t),t.default={"detail-list-item":"DetailListItem-module__detail-list-item___ygD4J"}},28682:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"DetailView-module__clinical-lowlight-theme___8vm1b","orion-fusion-theme":"DetailView-module__orion-fusion-theme___gkJtC","detail-view":"DetailView-module__detail-view___F11-B","titles-section":"DetailView-module__titles-section___4h3-V","primary-text":"DetailView-module__primary-text___VwmOM","secondary-text":"DetailView-module__secondary-text___aojSa",subtitle:"DetailView-module__subtitle___KV9og",accessory:"DetailView-module__accessory___M9mYi","titles-smaller":"DetailView-module__titles-smaller___mIIZE","footer-text":"DetailView-module__footer-text___x1pJv",divider:"DetailView-module__divider___Q6tXm"}},84769:function(e,t,l){l.r(t),t.default={"graph-content":"DetailViewCommon-test-module__graph-content___sz7I3"}}}]);