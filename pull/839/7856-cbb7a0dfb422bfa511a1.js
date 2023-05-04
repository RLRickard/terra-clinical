"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7856],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),o=m(n(94184)),l=m(n(47166)),i=m(n(50026)),c=m(n(97309)),s=m(n(94394)),u=m(n(80918)),d=["text","isTruncated"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=l.default.bind(u.default),p={text:r.default.string,isTruncated:r.default.bool},v=function(e){var t=e.text,n=e.isTruncated,r=f(e,d),l=a.default.useContext(i.default),u=(0,o.default)(y("item-comment",l.className),r.className);return a.default.createElement(s.default,_({text:t,isTruncated:n,icon:a.default.createElement(c.default,{className:y("inline-icon")})},r,{className:u}))};v.propTypes=p,v.defaultProps={text:"",isTruncated:!1};var b=v;t.default=b},94394:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var r=_(n(67294)),o=_(n(45697)),l=_(n(94184)),i=_(n(47166)),c=_(n(50026)),s=_(n(29270)),u=n(25387),d=_(n(35950)),m=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","meaning","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=i.default.bind(d.default),b={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=b;var g={text:o.default.string,textStyle:o.default.oneOf(Object.values(b)),isTruncated:o.default.bool,isDisabled:o.default.bool,icon:o.default.element,iconAlignment:o.default.oneOf(["center","top","inline"]),meaning:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired},O={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},h=function(e){var t,n=e.text,a=e.textStyle,o=e.isTruncated,i=e.isDisabled,u=e.icon,d=e.iconAlignment,_=e.meaning,g=e.intl,O=p(e,m),h=r.default.useContext(c.default),T=(0,l.default)(v("item-display",{"is-disabled":i},y({},"icon-".concat(d),u),h.className),O.className),w=v(["text",{"is-truncated":o},y({},"".concat(a),a===b.SECONDARY),y({},"".concat(a),a===b.ATTENTION),y({},"".concat(a),a===b.STRONG),{"strike-through":a===b.STRIKETHROUGH}]);u&&(t=r.default.createElement("div",{className:v("icon")},u));var I=null,E=null;return _?(I=r.default.createElement(s.default,{text:"".concat(_,":")}),E=r.default.createElement(s.default,{text:g.formatMessage({id:"Terra.item-display.meaningEnd"},{meaning:_})})):a===b.STRIKETHROUGH&&(I=r.default.createElement(s.default,{text:g.formatMessage({id:"Terra.item-display.meaningStrikethrough"})}),E=r.default.createElement(s.default,{text:g.formatMessage({id:"Terra.item-display.meaningStrikethroughEnd"})})),r.default.createElement("div",f({},O,{className:T,"aria-disabled":i}),t,r.default.createElement("span",{role:"text"},I,r.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:w},n),E?r.default.createElement(s.default,{text:","}):null,E))};h.propTypes=g,h.defaultProps=O;var T=(0,u.injectIntl)(h);t.default=T},37856:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextEmphasisTypes=t.Layouts=t.AccessoryAlignments=void 0;var a=m(n(67294)),r=m(n(45697)),o=m(n(94184)),l=m(n(47166)),i=m(n(50026)),c=m(n(94394)),s=m(n(6696)),u=m(n(70901)),d=["layout","textEmphasis","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"];function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=l.default.bind(u.default),p={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"};t.Layouts=p;var v={DEFAULT:"default",START:"start"};t.TextEmphasisTypes=v;var b={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"};t.AccessoryAlignments=b;var g={layout:r.default.oneOf(["oneColumn","twoColumns"]),textEmphasis:r.default.oneOf(["default","start"]),isTruncated:r.default.bool,accessoryAlignment:r.default.oneOf(["alignTop","alignCenter"]),startAccessory:r.default.node,reserveStartAccessorySpace:r.default.bool,endAccessory:r.default.node,displays:r.default.arrayOf(r.default.element),comment:r.default.node,refCallback:r.default.func},O={layout:p.ONE_COLUMN,textEmphasis:v.DEFAULT,isTruncated:!1,accessoryAlignment:b.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},h=function(e,t,n,r){var o;if(e||t){var l=y("accessory","".concat(r,"-accessory"),{"accessory-align-center":n===b.ALIGN_CENTER},{"accessory-align-top":n===b.ALIGN_TOP});o=a.default.createElement("div",{className:l},e)}return o},T=function(e,t){var n="content-primary-size",a="content-primary-color";return e>0&&(n="content-secondary-size"),(2===t&&1===e||e>=2)&&(a="content-secondary-color"),[n,a]},w=function(e,t,n,a){var r;return r=a===v.START?function(e,t,n){return 1===n?["content-secondary-size","content-secondary-color"]:T(e,t)}(e,t,n):T(e,t),["content"].concat(r)},I=function(e,t,n){if(null!=e&&e.length){for(var r=[],o=e.slice(0,8),l=t===p.TWO_COLUMNS?2:1;o.length;)r.push(o.splice(0,l));return a.default.createElement("div",{className:y("row-container")},r.map((function(e,t){var o=function(e,t,n,r){var o=t;return a.default.createElement("div",{className:y("row"),key:o},e.map((function(e,o){var l=o,i=w(t,n,o,r);return a.default.createElement("div",{className:y(i),key:l},e)})))}(e,t,r.length,n);return o})))}},E=function(e){var t=e.layout,n=e.textEmphasis,r=e.isTruncated,l=e.accessoryAlignment,c=e.startAccessory,s=e.reserveStartAccessorySpace,u=e.endAccessory,m=e.displays,v=e.comment,b=e.refCallback,g=f(e,d),O=a.default.useContext(i.default),T=(0,o.default)(y("item-view",{"is-truncated":r},{"one-column":t===p.ONE_COLUMN},{"two-columns":t===p.TWO_COLUMNS},O.className),g.className);return a.default.createElement("div",_({},g,{className:T,ref:b}),h(c,s,l,"start"),a.default.createElement("div",{className:y("body")},I(m,t,n),v),h(u,!1,l,"end"))};E.propTypes=g,E.defaultProps=O,E.Display=c.default,E.Comment=s.default;var N=E;t.default=N},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},70901:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___XR3+f","orion-fusion-theme":"ItemView-module__orion-fusion-theme___XKzHL","item-view":"ItemView-module__item-view___2xlIP",accessory:"ItemView-module__accessory___PvuEA","start-accessory":"ItemView-module__start-accessory___XlRLU","end-accessory":"ItemView-module__end-accessory___d5XtL","accessory-align-top":"ItemView-module__accessory-align-top___+M66a","accessory-align-center":"ItemView-module__accessory-align-center___2zYD3",body:"ItemView-module__body___sK4Q9",row:"ItemView-module__row___uFTYs",content:"ItemView-module__content___6aCtZ","is-truncated":"ItemView-module__is-truncated___bmqU7","one-column":"ItemView-module__one-column___Kd1v8","row-container":"ItemView-module__row-container___AbNG-","two-columns":"ItemView-module__two-columns___JSHlK","content-primary-color":"ItemView-module__content-primary-color___-3mpu","content-primary-size":"ItemView-module__content-primary-size___TysDs","content-secondary-color":"ItemView-module__content-secondary-color___mYi7V","content-secondary-size":"ItemView-module__content-secondary-size___cQqN8"}}}]);