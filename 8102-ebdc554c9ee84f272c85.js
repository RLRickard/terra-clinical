"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8102],{99853:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o(67294)),l=a(o(45697)),u=a(o(47166)),r=a(o(50026)),c=a(o(88782));function a(e){return e&&e.__esModule?e:{default:e}}var i=u.default.bind(c.default),m={text:l.default.string,label:l.default.string},d=function(e){var t=e.text,o=e.label,l=n.default.useContext(r.default);return n.default.createElement("div",{className:i(["content-cell",l.className]),"data-cell-label":o},t)};d.contextType=r.default,d.propTypes=m;var f=d;t.default=f},18102:function(e,t,o){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(o(67294)),u=i(o(47166)),r=i(o(44132)),c=i(o(99853)),a=i(o(1453));function i(e){return e&&e.__esModule?e:{default:e}}function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function f(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,(u=l.key,r=void 0,r=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===n(r)?r:String(r)),l)}var u,r}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,l=C(e);if(t){var u=C(this).constructor;o=Reflect.construct(l,arguments,u)}else o=l.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,o)}}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var _=u.default.bind(a.default),b=[{id:"Column-0",text:"Column 0",width:100},{id:"Column-1",text:"Column 1"}],w=[{id:"Column-2",text:"Column 2"},{id:"Column-3",text:"Column 3"},{id:"Column-4",text:"Column 4"},{id:"Column-5",text:"Column 5"}],S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,o,n,u=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).state={collapsedSectionList:["Section-0","Section-2"]},t}return t=a,(o=[{key:"render",value:function(){var e=this,t={id:"Section-0",text:"Section 0",isCollapsible:!0,isCollapsed:this.state.collapsedSectionList.includes("Section-0"),rows:[]},o={id:"Section-1",text:"Section 1",isCollapsible:!0,isCollapsed:this.state.collapsedSectionList.includes("Section-1"),rows:[{id:"Section-1_Row-0",ariaLabel:"Section 1, Row 0",cells:[{columnId:"Column-0",component:l.default.createElement(c.default,{text:"Row-0, Column-0",label:"Section-1_Row-0_Column-0"})},{columnId:"Column-1",component:l.default.createElement(c.default,{text:"Row-0, Column-1",label:"Section-1_Row-0_Column-1"})},{columnId:"Column-2",component:l.default.createElement(c.default,{text:"Row-0, Column-2",label:"Section-1_Row-0_Column-2"})},{columnId:"Column-3",component:l.default.createElement(c.default,{text:"Row-0, Column-3",label:"Section-1_Row-0_Column-3"})},{columnId:"Column-4",component:l.default.createElement(c.default,{text:"Row-0, Column-4",label:"Section-1_Row-0_Column-4"})},{columnId:"Column-5",component:l.default.createElement(c.default,{text:"Row-0, Column-5",label:"Section-1_Row-0_Column-5"})}]}]},n={id:"Section-2",text:"Section 2",isCollapsible:!0,isCollapsed:this.state.collapsedSectionList.includes("Section-2"),rows:[{id:"Section-2_Row-0",ariaLabel:"Section 2, Row 0",cells:[{columnId:"Column-0",component:l.default.createElement(c.default,{text:"Row-0, Column-0",label:"Section-2_Row-0_Column-0"})},{columnId:"Column-1",component:l.default.createElement(c.default,{text:"Row-0, Column-1",label:"Section-2_Row-0_Column-1"})},{columnId:"Column-2",component:l.default.createElement(c.default,{text:"Row-0, Column-2",label:"Section-2_Row-0_Column-2"})},{columnId:"Column-3",component:l.default.createElement(c.default,{text:"Row-0, Column-3",label:"Section-2_Row-0_Column-3"})},{columnId:"Column-4",component:l.default.createElement(c.default,{text:"Row-0, Column-4",label:"Section-2_Row-0_Column-4"})},{columnId:"Column-5",component:l.default.createElement(c.default,{text:"Row-0, Column-5",label:"Section-2_Row-0_Column-5"})}]},{id:"Section-2_Row-1",ariaLabel:"Section 2, Row 1",cells:[{columnId:"Column-0",component:l.default.createElement(c.default,{text:"Row-1, Column-0",label:"Section-2_Row-1_Column-0"})},{columnId:"Column-1",component:l.default.createElement(c.default,{text:"Row-1, Column-1",label:"Section-2_Row-1_Column-1"})},{columnId:"Column-2",component:l.default.createElement(c.default,{text:"Row-1, Column-2",label:"Section-2_Row-1_Column-2"})},{columnId:"Column-3",component:l.default.createElement(c.default,{text:"Row-1, Column-3",label:"Section-2_Row-1_Column-3"})},{columnId:"Column-4",component:l.default.createElement(c.default,{text:"Row-1, Column-4",label:"Section-2_Row-1_Column-4"})},{columnId:"Column-5",component:l.default.createElement(c.default,{text:"Row-1, Column-5",label:"Section-2_Row-1_Column-5"})}]},{id:"Section-2_Row-2",ariaLabel:"Section 2, Row 2, this is meant to be decorative, like a divider row",isDecorative:!0,cells:[{columnId:"Column-0",component:l.default.createElement(c.default,{text:"~~~~~~~~~",label:"Section-2_Row-2_Column-0"})},{columnId:"Column-1",component:l.default.createElement(c.default,{text:"~~~~ This row is meant ~~~~",label:"Section-2_Row-2_Column-1"})},{columnId:"Column-2",component:l.default.createElement(c.default,{text:"~~~~ to be decorative-only ~~~~",label:"Section-2_Row-2_Column-2"})},{columnId:"Column-3",component:l.default.createElement(c.default,{text:"~~~~ and not highlighted ~~~~",label:"Section-2_Row-2_Column-3"})},{columnId:"Column-4",component:l.default.createElement(c.default,{text:"~~~~~~~~~~~~~~",label:"Section-2_Row-2_Column-4"})},{columnId:"Column-5",component:l.default.createElement(c.default,{text:"~~~~~~~~~~~~~~",label:"Section-2_Row-2_Column-5"})}]}]};return l.default.createElement("div",{id:"highlight-column-empty-sections-data-grid",className:_("content-wrapper")},l.default.createElement(r.default,{id:"highlight-column-example",columnHighlightId:"Column-3",pinnedColumns:b,overflowColumns:w,sections:[t,o,n],onRequestSectionCollapse:function(t){-1!==e.state.collapsedSectionList.findIndex((function(e){return t===e}))?e.setState((function(e){return{collapsedSectionList:e.collapsedSectionList.filter((function(e){return t!==e}))}})):e.setState((function(e){return{collapsedSectionList:[].concat(m(e.collapsedSectionList),[t])}}))},defaultColumnWidth:250,fill:!0}))}}])&&f(t.prototype,o),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.default.Component);t.default=S},1453:function(e,t,o){o.r(t),t.default={"content-wrapper":"ClinicalDataGridCommon-test-module__content-wrapper___gmfdx","content-overflow":"ClinicalDataGridCommon-test-module__content-overflow___zhfn8","spacer-right-medium":"ClinicalDataGridCommon-test-module__spacer-right-medium___ESRTu"}},88782:function(e,t,o){o.r(t),t.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___vJW4L","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+MEbA","content-cell":"ContentCellLayout__content-cell___nXBXw"}}}]);