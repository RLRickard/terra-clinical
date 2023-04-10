"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9334],{78670:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(l(67294)),i=h(l(45697)),a=h(l(94184)),n=h(l(47166)),o=h(l(50026)),u=h(l(46510)),s=h(l(88897)),d=h(l(65735)),c=h(l(15056)),f=h(l(15601)),m=h(l(24619)),_=h(l(76810)),v=h(l(33028)),p=["eventId","result","interpretation","isUnverified","hideUnit"];function h(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var y=n.default.bind(v.default),O={eventId:i.default.string,result:m.default,interpretation:f.default,isUnverified:i.default.bool,hideUnit:i.default.bool},w={critical:r.default.createElement(u.default,{className:y("icon-interpretation")}),"critical-high":r.default.createElement(u.default,{className:y("icon-interpretation")}),"critical-low":r.default.createElement(u.default,{className:y("icon-interpretation")}),positive:r.default.createElement(u.default,{className:y("icon-interpretation")}),abnormal:r.default.createElement(c.default,{className:y("icon-interpretation")}),high:r.default.createElement(s.default,{className:y("icon-interpretation")}),low:r.default.createElement(d.default,{className:y("icon-interpretation")})},P={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},j=function(e){e.eventId;var t=e.result,l=e.interpretation,i=e.isUnverified,n=e.hideUnit,u=g(e,p),s=null==t?void 0:t.value,d=r.default.useContext(o.default),c=(0,a.default)(y("value",!i&&P[l],{unverified:i},d.className),u.className),f=y(["unit",{"unit-hidden":n},d.className]);return s?r.default.createElement(r.default.Fragment,null,r.default.createElement("span",b({},u,{className:c}),l&&!i&&w[l],t.value),t.unit?r.default.createElement("span",{className:f},t.unit):null):r.default.createElement(_.default,null)};j.propTypes=O;var I=j;t.default=I},76810:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(l(67294)),i=f(l(45697)),a=l(25387),n=f(l(94184)),o=f(l(47166)),u=f(l(50026)),s=f(l(51331)),d=f(l(1095)),c=["intl"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},m.apply(this,arguments)}function _(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var v=o.default.bind(d.default),p={intl:i.default.shape({formatMessage:i.default.func}).isRequired},h=function(e){var t=e.intl,l=_(e,c),i=r.default.useContext(u.default),a=(0,n.default)(v("system-error",i.className),l.className);return r.default.createElement("span",m({},l,{className:a}),r.default.createElement(s.default,{className:v("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};h.propTypes=p;var b=(0,a.injectIntl)(h);t.default=b},15601:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=((r=l(45697))&&r.__esModule?r:{default:r}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=i},24619:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=l(45697))&&r.__esModule?r:{default:r};var a=i.default.shape({value:i.default.oneOfType([i.default.string,i.default.arrayOf(i.default.string)]),unit:i.default.string});t.default=a},73666:function(e,t){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=i(i({},n),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var u=i(i({},n),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=u;var s=i(i({},n),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=s;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=i(i({},n),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:i({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var _={diastolic:i({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=_;var v={id:"111",systolic:i({},c),diastolic:i({},f)};t.DefaultBloodPressureResult=v;var p={id:"111",systolic:i(i({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var h={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=h;var b={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=b;var g={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=g;var y={id:"111",systolic:i(i({},c),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:i(i({},f),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=y;var O={id:"111",systolic:i(i({},c),{},{interpretation:"critical"}),diastolic:i(i({},f),{},{interpretation:"low"})};t.MixedBPResultValue=O;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var w={id:"111",systolic:i(i({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:i(i({},f),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=w;var P={id:"111",systolic:i(i({},c),{},{isModified:!1,hasComment:!1}),diastolic:i(i({},f),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=P;var j=n;t.default=j},59334:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(67294)),i=n(l(78670)),a=l(73666);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(i.default,{eventId:a.BadData.eventId,clinicalresult:a.BadData.clinicalresult})}},75974:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconAbnormal-module__orion-fusion-theme___58Q6V","clinical-lowlight-theme":"IconAbnormal-module__clinical-lowlight-theme___sy9J7",IconAbnormal:"IconAbnormal-module__IconAbnormal___IYFg3"}},83664:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},30877:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconHigh-module__orion-fusion-theme___tsKn-","clinical-lowlight-theme":"IconHigh-module__clinical-lowlight-theme___Q-Gwm",IconHigh:"IconHigh-module__IconHigh___clk1d"}},8539:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"IconLow-module__orion-fusion-theme___QSU2f","clinical-lowlight-theme":"IconLow-module__clinical-lowlight-theme___+TaJF",IconLow:"IconLow-module__IconLow___RTZvM"}},33028:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Observation-module__clinical-lowlight-theme___wg9nC","orion-fusion-theme":"Observation-module__orion-fusion-theme___dpCx0",value:"Observation-module__value___uE5lL","icon-interpretation":"Observation-module__icon-interpretation___iM7hx",abnormal:"Observation-module__abnormal___w2Vlu",critical:"Observation-module__critical___ULR44",high:"Observation-module__high___5jz5m",low:"Observation-module__low___hiXRV",positive:"Observation-module__positive___eZ24Y",unverified:"Observation-module__unverified___5JRot",unit:"Observation-module__unit___WcNqV","unit-hidden":"Observation-module__unit-hidden___Fs-fM"}},1095:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"OtherTemplates-module__clinical-lowlight-theme___SpZFV","orion-fusion-theme":"OtherTemplates-module__orion-fusion-theme___nhvwY","entered-in-error":"OtherTemplates-module__entered-in-error___Flt+J","no-data":"OtherTemplates-module__no-data___8CGDO","numeric-overflow":"OtherTemplates-module__numeric-overflow___j1-ma","system-error":"OtherTemplates-module__system-error___H-5sS","icon-error":"OtherTemplates-module__icon-error___+mcYt",truncated:"OtherTemplates-module__truncated___CaXog"}},15056:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),i=s(l(94184)),a=s(l(47166)),n=s(l(50026)),o=s(l(99139)),u=s(l(75974));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),l=r.default.useContext(n.default),a=(0,i.default)(c("IconAbnormal",l.className),e.className);return r.default.createElement(o.default,d({},t,{className:a}),r.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};f.displayName="IconAbnormal",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},46510:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),i=s(l(94184)),a=s(l(47166)),n=s(l(50026)),o=s(l(99139)),u=s(l(83664));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),l=r.default.useContext(n.default),a=(0,i.default)(c("IconCritical",l.className),e.className);return r.default.createElement(o.default,d({},t,{className:a}),r.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),r.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};f.displayName="IconCritical",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},88897:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),i=s(l(94184)),a=s(l(47166)),n=s(l(50026)),o=s(l(99139)),u=s(l(30877));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),l=r.default.useContext(n.default),a=(0,i.default)(c("IconHigh",l.className),e.className);return r.default.createElement(o.default,d({},t,{className:a}),r.default.createElement("path",{fill:"#B53203",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};f.displayName="IconHigh",f.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m},65735:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(l(67294)),i=s(l(94184)),a=s(l(47166)),n=s(l(50026)),o=s(l(99139)),u=s(l(8539));function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}var c=a.default.bind(u.default),f=function(e){var t=d({},e),l=r.default.useContext(n.default),a=(0,i.default)(c("IconLow",l.className),e.className);return r.default.createElement(o.default,d({},t,{className:a}),r.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};f.displayName="IconLow",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=f;t.default=m}}]);