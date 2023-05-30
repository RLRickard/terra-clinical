"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7442],{49271:function(e,t,l){var a=l(64836),n=l(18698);t.Z=void 0;var r=a(l(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697)),u=a(l(47166)),d=l(21538),c=a(l(33864)),s=a(l(23399)),m=l(51051),p=a(l(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var b=u.default.bind(p.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,l=e.exampleSrc,a=e.exampleCssSrc,n=e.title,o=e.description,u=e.isExpanded,p=(0,i.useState)(u),f=(0,r.default)(p,2),x=f[0],_=f[1],h=(0,i.useState)(!1),w=(0,r.default)(h,2),g=w[0],O=w[1],V=i.default.useContext(d.ThemeContext),E=void 0!==a,N=function(){O(!g),x&&_(!x)},j=function(){_(!x),g&&O(!g)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:b("template",V.className)},i.default.createElement("div",{className:b("header")},n&&i.default.createElement("h2",{className:b("title")},n)),i.default.createElement("div",{className:b("content")},o&&i.default.createElement("div",{className:b("description")},o),t),i.default.createElement("div",{className:b("footer")},l?i.default.createElement("div",{className:b("button-container")},E&&i.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:b("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(s.default,{className:b("chevron")})),i.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":x}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:b("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(s.default,{className:b("chevron")}))):null,i.default.createElement("div",null,g&&i.default.createElement("div",{className:b("css")},a),x&&i.default.createElement("div",{className:b("code")},l))))};_.propTypes=x,_.defaultProps={isExpanded:!1};var h=_;t.Z=h},28608:function(e,t,l){l.r(t),l.d(t,{default:function(){return Q}});var a=l(67294),n=l(81254),r=l(86469),i=l(85978),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c={};function s(e){var t=e.components,l=d(e,o);return(0,n.mdx)("wrapper",u({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n\nconst LabelValueViewText = () => (\n  <div>\n    <dl>\n      <LabelValueView label="Collected By" textValue="Noah Brown" childOfDescriptionList="true" />\n    </dl>\n    <dl>\n      <LabelValueView label="Date" textValue="12/12/12 00:00AM" childOfDescriptionList="true" />\n    </dl>\n    <dl>\n      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" childOfDescriptionList="true" />\n    </dl>\n    <dl>\n      <LabelValueView label="Temperature" textValue="97 F" childOfDescriptionList="true" />\n    </dl>\n    <dl>\n      <LabelValueView label="Heart Rate" textValue="80 BPM" childOfDescriptionList="true" />\n    </dl>\n  </div>\n);\n\nexport default LabelValueViewText;\n\n')))}s.isMDXComponent=!0;var m=l(49271),p=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.createElement(m.Z,{title:t||"Label Value View Text Term And Def",description:l,example:a.createElement(i.Z,null),exampleSrc:a.createElement(s,null),isExpanded:n})},f=l(94524),b=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},x.apply(this,arguments)}function v(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var y={};function _(e){var t=e.components,l=v(e,b);return(0,n.mdx)("wrapper",x({},y,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\n\nconst LabelValueViewText = () => (\n  <div>\n    <LabelValueView label=\"Label\" textValue=\"Sample Text as Value\" />\n  </div>\n);\n\nexport default LabelValueViewText;\n\n")))}_.isMDXComponent=!0;var h=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.createElement(m.Z,{title:t||"Label Value View Text Definition List",description:l,example:a.createElement(f.Z,null),exampleSrc:a.createElement(_,null),isExpanded:n})},w=l(4362),g=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},O.apply(this,arguments)}function V(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var E={};function N(e){var t=e.components,l=V(e,g);return(0,n.mdx)("wrapper",O({},E,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNode = () => (\n  <div>\n    <LabelValueView label=\"Alert\">\n      <div className={cx('container')}>\n        <div className={cx('icon')}>\n          <IconCritical />\n        </div>\n        <div className={cx('text')}>\n          Critical Alert: Blood Pressure is high.\n        </div>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNode;\n\n")))}N.isMDXComponent=!0;var j=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},T.apply(this,arguments)}function L(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var C={};function D(e){var t=e.components,l=L(e,j);return(0,n.mdx)("wrapper",T({},C,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .label-value-view-content {\n    border: 1px solid #d3d4d5;\n    border-radius: 5px;\n    padding: 0 20px;\n    width: 280px;\n  }\n\n  .container {\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.4285714285714286;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // VERY IMPORTANT FOR IE10\n  }\n\n  .icon {\n    flex: 0 0 auto;\n    overflow: hidden;\n    padding-right: 0.357142857142857rem;\n  }\n\n  .text {\n    color: #c00;\n    flex: 1 1 auto;\n    font-weight: 700;\n    min-width: 10px; // Need min-width, as IE10 will completely squish display\n  }\n}\n\n")))}D.isMDXComponent=!0;var P=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.createElement(m.Z,{title:t||"Label Value View Node",description:l,example:a.createElement(w.Z,null),exampleCssSrc:a.createElement(D,null),exampleSrc:a.createElement(N,null),isExpanded:n})},S=l(87325),M=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},I.apply(this,arguments)}function k(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var R={};function B(e){var t=e.components,l=k(e,M);return(0,n.mdx)("wrapper",I({},R,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport classNames from 'classnames/bind';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNodeCustom = () => (\n  <div>\n    <LabelValueView label=\"Daily Feeds\">\n      <div className={cx('label-value-view-content')}>\n        <h3>Critical Alert: Covid-19 Outbreak</h3>\n        <p>Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff.</p>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNodeCustom;\n\n")))}B.isMDXComponent=!0;var Z=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.createElement(m.Z,{title:t||"Label Value View Node Custom",description:l,example:a.createElement(S.Z,null),exampleCssSrc:a.createElement(D,null),exampleSrc:a.createElement(B,null),isExpanded:n})},X=l(78530),A=["components"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},F.apply(this,arguments)}function q(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var W={},H="wrapper";function z(e){var t=e.components,l=q(e,A);return(0,n.mdx)(H,F({},W,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(X.ZP,{mdxType:"PropsTable"},(0,n.mdx)(X.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The label of the LabelValueView."))),(0,n.mdx)(X.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"textValue"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The text to be displayed underneath the label with the provided styling."))),(0,n.mdx)(X.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(X.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(X.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(X.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(X.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Child component(s) to display underneath the label.")))))}z.isMDXComponent=!0;var G=["components"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},K.apply(this,arguments)}function Y(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var U={},J="wrapper";function Q(e){var t=e.components,l=Y(e,G);return(0,n.mdx)(J,K({},U,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-clinical-label-value-view"},"Terra Clinical Label Value View"),(0,n.mdx)("p",null,"The label value view component displays a label and the associated value or list of values underneath the label."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-label-value-view"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import LabelValueView from 'terra-clinical-label-value-view';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(p,{title:"Label Value View with a Text Input (as a term and definition)",mdxType:"LabelValueViewTextTermAndDef"}),(0,n.mdx)(h,{title:"Label Value View with a Text Input (as a description list)",mdxType:"LabelValueViewTextDefinitionList"}),(0,n.mdx)(P,{title:"Label Value View with a Node Input",mdxType:"LabelValueViewNode"}),(0,n.mdx)(Z,{title:"Label Value View with a Node Input (Custom)",mdxType:"LabelValueViewNodeCustom"}),(0,n.mdx)("h2",{id:"label-value-view-props"},"Label Value View Props"),(0,n.mdx)(z,{mdxType:"LabelValueViewPropsTable"}))}Q.isMDXComponent=!0},86469:function(e,t,l){l.d(t,{C:function(){return r}});var a=l(67294),n=l(22863),r=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view",name:"terra-clinical-label-value-view",version:"3.28.0",url:t})}},96735:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(67294)),n=c(l(45697)),r=c(l(94184)),i=c(l(47166)),o=c(l(50026)),u=c(l(60778)),d=["label","textValue","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=i.default.bind(u.default),f={label:n.default.string.isRequired,textValue:n.default.string,children:n.default.node},b={textValue:"",children:void 0},x=function(e){var t,l=e.label,n=e.textValue,i=e.children,u=m(e,d),c=a.default.useContext(o.default),f=(0,r.default)(p("label-value-view",c.className),u.className);n||i?n&&(t=a.default.createElement("div",{className:p("value")},n)):t=a.default.createElement("div",{className:p("value")},"--");var b=a.default.createElement(a.default.Fragment,null,a.default.createElement("dt",{className:p("label")},l),a.default.createElement("dd",{className:p("value-wrapper")},t,i));return"true"===u.childOfDescriptionList?a.default.createElement(a.default.Fragment,null,b):a.default.createElement("dl",s({},u,{className:f}),b)};x.propTypes=f,x.defaultProps=b;var v=x;t.default=v},4362:function(e,t,l){t.Z=void 0;var a=u(l(67294)),n=u(l(47166)),r=u(l(46510)),i=u(l(96735)),o=u(l(11381));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),c=function(){return a.default.createElement("div",null,a.default.createElement(i.default,{label:"Alert"},a.default.createElement("div",{className:d("container")},a.default.createElement("div",{className:d("icon")},a.default.createElement(r.default,null)),a.default.createElement("div",{className:d("text")},"Critical Alert: Blood Pressure is high."))))};t.Z=c},87325:function(e,t,l){t.Z=void 0;var a=o(l(67294)),n=o(l(96735)),r=o(l(47166)),i=o(l(11381));function o(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),d=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{label:"Daily Feeds"},a.default.createElement("div",{className:u("label-value-view-content")},a.default.createElement("h3",null,"Critical Alert: Covid-19 Outbreak"),a.default.createElement("p",null,"Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff."))))};t.Z=d},94524:function(e,t,l){t.Z=void 0;var a=r(l(67294)),n=r(l(96735));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{label:"Label",textValue:"Sample Text as Value"}))};t.Z=i},85978:function(e,t,l){t.Z=void 0;var a=r(l(67294)),n=r(l(96735));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement("dl",null,a.default.createElement(n.default,{label:"Collected By",textValue:"Noah Brown",childOfDescriptionList:"true"})),a.default.createElement("dl",null,a.default.createElement(n.default,{label:"Date",textValue:"12/12/12 00:00AM",childOfDescriptionList:"true"})),a.default.createElement("dl",null,a.default.createElement(n.default,{label:"Blood Pressure",textValue:"110/60 mmHg",childOfDescriptionList:"true"})),a.default.createElement("dl",null,a.default.createElement(n.default,{label:"Temperature",textValue:"97 F",childOfDescriptionList:"true"})),a.default.createElement("dl",null,a.default.createElement(n.default,{label:"Heart Rate",textValue:"80 BPM",childOfDescriptionList:"true"})))};t.Z=i},53560:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},83664:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},60778:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}},11381:function(e,t,l){l.r(t),t.default={"label-value-view-content":"LabelValueView-module__label-value-view-content___ILNb9",container:"LabelValueView-module__container___foRHq",icon:"LabelValueView-module__icon___uxNrS",text:"LabelValueView-module__text___WujZ-"}},33864:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),n=r(l(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(n.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u},46510:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),n=d(l(94184)),r=d(l(47166)),i=d(l(50026)),o=d(l(99139)),u=d(l(83664));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}var s=r.default.bind(u.default),m=function(e){var t=c({},e),l=a.default.useContext(i.default),r=(0,n.default)(s("IconCritical",l.className),e.className);return a.default.createElement(o.default,c({},t,{className:r}),a.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),a.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};m.displayName="IconCritical",m.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var p=m;t.default=p}}]);