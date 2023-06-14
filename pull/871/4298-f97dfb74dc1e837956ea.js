"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4298],{73666:function(e,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!==i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.UnverifiedResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.SingleResultValue=t.NoDataResult=t.MixedBPResultValue=t.ExtraDisplaysBloodPressureResult=t.EnteredInErrorSysBPResult=t.EnteredInErrorResult=t.EnteredInErrorDiaBPResult=t.DefaultSystolicResult=t.DefaultResultWithNoEventId=t.DefaultDiastolicResult=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultBloodPressureResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DecoratedResult=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.BadData=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var l={eventId:"111",result:{value:"12345.678",unit:"mL"}},a=s(s({},l),{},{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=a;var n=s(s({},l),{},{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=n;var u=s(s({},l),{},{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=u;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=s(s({},l),{},{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var m={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=m;var c={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=c;var f={systolic:s({},m)};t.DefaultBloodPressureSystolicResultWithNoId=f;var v={diastolic:s({},c)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var y={id:"111",systolic:s({},m),diastolic:s({},c)};t.DefaultBloodPressureResult=y;var p={id:"111",systolic:s(s({},m),{},{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:s(s({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=p;var D={id:"111",systolic:s(s({},m),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:s(s({},c),{},{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=D;var g={id:"111",systolic:s(s({},m),{},{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:s(s({},c),{},{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=g;var R={id:"111",systolic:s(s({},m),{},{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:s(s({},c),{},{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=R;var P={id:"111",systolic:s(s({},m),{},{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:s(s({},c),{},{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=P;var b={id:"111",systolic:s(s({},m),{},{interpretation:"critical"}),diastolic:s(s({},c),{},{interpretation:"low"})};t.MixedBPResultValue=b;t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var h={id:"111",systolic:s(s({},m),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:s(s({},c),{},{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=h;var B={id:"111",systolic:s(s({},m),{},{isModified:!1,hasComment:!1}),diastolic:s(s({},c),{},{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=B;var H=l;t.default=H},52275:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(i(67294)),s=l(i(38056)),o=l(i(73666));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(s.default,{resultData:o.default,hasResultError:!0})}}}]);