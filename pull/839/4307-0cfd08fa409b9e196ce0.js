"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4307],{78670:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=h(r(67294)),i=h(r(45697)),a=h(r(94184)),n=h(r(47166)),o=h(r(50026)),u=h(r(46510)),s=h(r(88897)),d=h(r(65735)),c=h(r(15056)),f=h(r(15601)),m=h(r(24619)),_=h(r(76810)),v=h(r(33028)),p=["eventId","result","interpretation","isUnverified","hideUnit"];function h(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var y=n.default.bind(v.default),O={eventId:i.default.string,result:m.default,interpretation:f.default,isUnverified:i.default.bool,hideUnit:i.default.bool},w={critical:l.default.createElement(u.default,{className:y("icon-interpretation")}),"critical-high":l.default.createElement(u.default,{className:y("icon-interpretation")}),"critical-low":l.default.createElement(u.default,{className:y("icon-interpretation")}),positive:l.default.createElement(u.default,{className:y("icon-interpretation")}),abnormal:l.default.createElement(c.default,{className:y("icon-interpretation")}),high:l.default.createElement(s.default,{className:y("icon-interpretation")}),low:l.default.createElement(d.default,{className:y("icon-interpretation")})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},j=function(e){e.eventId;var t=e.result,r=e.interpretation,i=e.isUnverified,n=e.hideUnit,u=g(e,p),s=null==t?void 0:t.value,d=l.default.useContext(o.default),c=(0,a.default)(y("value",!i&&P[r],{unverified:i},d.className),u.className),f=y(["unit",{"unit-hidden":n},d.className]);return s?l.default.createElement(l.default.Fragment,null,l.default.createElement("span",b({},u,{className:c}),r&&!i&&w[r],t.value),t.unit?l.default.createElement("span",{className:f},t.unit):null):l.default.createElement(_.default,null)};j.propTypes=O;var I=j;t.default=I},76810:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(r(67294)),i=f(r(45697)),a=r(25387),n=f(r(94184)),o=f(r(47166)),u=f(r(50026)),s=f(r(51331)),d=f(r(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},m.apply(this,arguments)}function _(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var v=o.default.bind(d.default),p={intl:i.default.shape({formatMessage:i.default.func}).isRequired},h=function(e){var t=e.intl,r=_(e,c),i=l.default.useContext(u.default),a=(0,n.default)(v("system-error",i.className),r.className);return l.default.createElement("span",m({},r,{className:a}),l.default.createElement(s.default,{className:v("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};h.propTypes=p;var b=(0,a.injectIntl)(h);t.default=b},15601:function(e,t,r){var l;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=((l=r(45697))&&l.__esModule?l:{default:l}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=i},24619:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i=(l=r(45697))&&l.__esModule?l:{default:l};var a=i.default.shape({value:i.default.oneOfType([i.default.string,i.default.arrayOf(i.default.string)]),unit:i.default.string});t.default=a},73666:function(e,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var i=l.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=i(i({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var u=i(i({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=u;var s=i(i({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=s;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=i(i({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:i({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var _={diastolic:i({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=_;var v={id:"111",systolic:i({},c),diastolic:i({},f)};t.DefaultBloodPressureResult=v;var p={id:"111",systolic:i(i({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var h={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=h;var b={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=b;var g={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=g;var y={id:"111",systolic:i(i({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:i(i({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=y;var O={id:"111",systolic:i(i({},c),{},{interpretation:"critical"}),diastolic:i(i({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var w={id:"111",systolic:i(i({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=w;var P={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1}),diastolic:i(i({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var j=n;t.default=j},34307:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(67294)),i=n(r(78670)),a=n(r(73666));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(i.default,{eventId:a.default.eventId,result:a.default.result})}},75974:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},83664:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},30877:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},8539:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},33028:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}},15056:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(r(67294)),i=s(r(94184)),a=s(r(47166)),n=s(r(50026)),o=s(r(99139)),u=s(r(75974));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),r=l.default.useContext(n.default),a=(0,i.default)(c("IconAbnormal",r.className),e.className);return l.default.createElement(o.default,d({},t,{className:a}),l.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},46510:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(r(67294)),i=s(r(94184)),a=s(r(47166)),n=s(r(50026)),o=s(r(99139)),u=s(r(83664));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),r=l.default.useContext(n.default),a=(0,i.default)(c("IconCritical",r.className),e.className);return l.default.createElement(o.default,d({},t,{className:a}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},88897:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(r(67294)),i=s(r(94184)),a=s(r(47166)),n=s(r(50026)),o=s(r(99139)),u=s(r(30877));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),r=l.default.useContext(n.default),a=(0,i.default)(c("IconHigh",r.className),e.className);return l.default.createElement(o.default,d({},t,{className:a}),l.default.createElement("path",{fill:"#B53203",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},65735:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(r(67294)),i=s(r(94184)),a=s(r(47166)),n=s(r(50026)),o=s(r(99139)),u=s(r(8539));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),r=l.default.useContext(n.default),a=(0,i.default)(c("IconLow",r.className),e.className);return l.default.createElement(o.default,d({},t,{className:a}),l.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m}}]);