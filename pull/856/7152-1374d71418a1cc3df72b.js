"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7152],{96735:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=f(t(67294)),u=f(t(45697)),i=f(t(94184)),r=f(t(47166)),n=f(t(50026)),d=f(t(60778)),c=["label","textValue","childOfDescriptionList","children"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,a,u=function(e,l){if(null==e)return{};var t,a,u={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||(u[t]=e[t]);return u}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var p=r.default.bind(d.default),m={label:u.default.string.isRequired,textValue:u.default.string,childOfDescriptionList:u.default.bool,children:u.default.node},b={textValue:"",children:void 0,childOfDescriptionList:!1},_=function(e){var l,t=e.label,u=e.textValue,r=e.childOfDescriptionList,d=e.children,f=o(e,c),m=a.default.useContext(n.default),b=(0,i.default)(p("label-value-view",m.className),f.className);u||d?u&&(l=a.default.createElement("div",{className:p("value")},u)):l=a.default.createElement("div",{className:p("value")},"--");var _=a.default.createElement(a.default.Fragment,null,a.default.createElement("dt",{className:p("label")},t),a.default.createElement("dd",{className:p("value-wrapper")},l,d));return r?a.default.createElement(a.default.Fragment,null,_):a.default.createElement("dl",s({},f,{className:b}),_)};_.propTypes=m,_.defaultProps=b;var v=_;l.default=v},7152:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(67294)),u=n(t(47166)),i=n(t(96735)),r=n(t(74621));function n(e){return e&&e.__esModule?e:{default:e}}var d=u.default.bind(r.default),c=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"LabelValueView returned as a term and a definition (childOfDescriptionList='true'):"),a.default.createElement("dl",null,a.default.createElement(i.default,{label:"Collected By",textValue:"Noah Brown",childOfDescriptionList:!0}),a.default.createElement(i.default,{label:"Date",textValue:"12/12/12 00:00AM",childOfDescriptionList:!0}),a.default.createElement(i.default,{label:"Blood Pressure",textValue:"110/60 mmHg",childOfDescriptionList:!0}),a.default.createElement(i.default,{label:"Temperature",textValue:"97 F",childOfDescriptionList:!0}),a.default.createElement(i.default,{label:"Heart Rate",textValue:"80 BPM",childOfDescriptionList:!0})),a.default.createElement("h3",null,"LabelValueView returned as a description list (childOfDescriptionList='false'):"),a.default.createElement(i.default,{label:"Collected By",textValue:"Noah Brown",childOfDescriptionList:!1}),a.default.createElement(i.default,{label:"Date",textValue:"12/12/12 00:00AM",childOfDescriptionList:!1}),a.default.createElement("h3",null,"LabelValueView returned as a description list (childOfDescriptionList is not given - will take the default value false):"),a.default.createElement(i.default,{label:"Blood Pressure",textValue:"110/60 mmHg"}),a.default.createElement(i.default,{label:"Temperature",textValue:"97 F"}),a.default.createElement(i.default,{label:"Heart Rate",textValue:"80 BPM"}),a.default.createElement("h3",null,"Applied max-width of 200px to show word wrapping:"),a.default.createElement("div",{className:d("labelvalueview-wrapper")},a.default.createElement(i.default,{id:"LongLabelValueView",label:"supercalifragilisticexpialidocious",textValue:"supercalifragilisticexpialidocious"})))};l.default=c},60778:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}},74621:function(e,l,t){t.r(l),l.default={"labelvalueview-wrapper":"TextValueLabelValueView-test-module__labelvalueview-wrapper___k063E"}}}]);