"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3626],{3201:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(47166)),o=i(r(341)),u=i(r(84769));function i(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(u.default),c=n.default.createElement("p",null,"A Detail List Item"),f=n.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),s=n.default.createElement("p",null," A sample accessory container "),d=function(){return n.default.createElement(o.default,{title:"Header",secondaryTitles:["secondaryTitle1","secondaryTitle2"],subtitles:["subtitle1","subTitle2"],graph:n.default.createElement("div",{className:l("graph-content")},"This is where any visualizations would go"),accessory:s,details:[n.default.createElement(o.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},n.default.createElement(o.default.DetailListItem,{item:c}),n.default.createElement(o.default.DetailListItem,{item:c}),n.default.createElement(o.default.DetailListItem,{item:f}),n.default.createElement(o.default.DetailListItem,{item:c}),n.default.createElement(o.default.DetailListItem,{item:c}))],footer:"Footer Text",id:"DetailView",isSmallerTitles:!1})};t.default=d},84769:function(e,t,r){r.r(t),t.default={"graph-content":"DetailViewCommon-test-module__graph-content___sz7I3"}},23234:function(e,t,r){r.r(t),r.d(t,{v1:function(){return v},v3:function(){return E},v4:function(){return I},v5:function(){return T}});var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}for(var u=[],i=0;i<256;++i)u.push((i+256).toString(16).substr(1));var l,c,f=function(e,t){var r=t||0;return(u[e[r+0]]+u[e[r+1]]+u[e[r+2]]+u[e[r+3]]+"-"+u[e[r+4]]+u[e[r+5]]+"-"+u[e[r+6]]+u[e[r+7]]+"-"+u[e[r+8]]+u[e[r+9]]+"-"+u[e[r+10]]+u[e[r+11]]+u[e[r+12]]+u[e[r+13]]+u[e[r+14]]+u[e[r+15]]).toLowerCase()},s=0,d=0;var v=function(e,t,r){var n=t&&r||0,a=t||new Array(16),u=(e=e||{}).node||l,i=void 0!==e.clockseq?e.clockseq:c;if(null==u||null==i){var v=e.random||(e.rng||o)();null==u&&(u=l=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==i&&(i=c=16383&(v[6]<<8|v[7]))}var p=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:d+1,h=p-s+(m-d)/1e4;if(h<0&&void 0===e.clockseq&&(i=i+1&16383),(h<0||p>s)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,d=m,c=i;var y=(1e4*(268435455&(p+=122192928e5))+m)%4294967296;a[n++]=y>>>24&255,a[n++]=y>>>16&255,a[n++]=y>>>8&255,a[n++]=255&y;var g=p/4294967296*1e4&268435455;a[n++]=g>>>8&255,a[n++]=255&g,a[n++]=g>>>24&15|16,a[n++]=g>>>16&255,a[n++]=i>>>8|128,a[n++]=255&i;for(var w=0;w<6;++w)a[n+w]=u[w];return t||f(a)};function p(e,t,r){function n(e,n,a,o){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=function(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){t.push(parseInt(e,16))})),t}(n)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(n)||16!==n.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var u=r(n.concat(e));if(u[6]=15&u[6]|t,u[8]=63&u[8]|128,a){o=o||0;for(var i=0;i<16;++i)a[o+i]=u[i];return a}return f(u)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function m(e){return 14+(e+64>>>9<<4)+1}function h(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function y(e,t,r,n,a,o){return h((u=h(h(t,e),h(n,o)))<<(i=a)|u>>>32-i,r);var u,i}function g(e,t,r,n,a,o,u){return y(t&r|~t&n,e,t,a,o,u)}function w(e,t,r,n,a,o,u){return y(t&n|r&~n,e,t,a,o,u)}function b(e,t,r,n,a,o,u){return y(t^r^n,e,t,a,o,u)}function A(e,t,r,n,a,o,u){return y(r^(t|~n),e,t,a,o,u)}var C=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",a=0;a<r;a+=8){var o=e[a>>5]>>>a%32&255,u=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);t.push(u)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[m(t)-1]=t;for(var r=1732584193,n=-271733879,a=-1732584194,o=271733878,u=0;u<e.length;u+=16){var i=r,l=n,c=a,f=o;r=g(r,n,a,o,e[u],7,-680876936),o=g(o,r,n,a,e[u+1],12,-389564586),a=g(a,o,r,n,e[u+2],17,606105819),n=g(n,a,o,r,e[u+3],22,-1044525330),r=g(r,n,a,o,e[u+4],7,-176418897),o=g(o,r,n,a,e[u+5],12,1200080426),a=g(a,o,r,n,e[u+6],17,-1473231341),n=g(n,a,o,r,e[u+7],22,-45705983),r=g(r,n,a,o,e[u+8],7,1770035416),o=g(o,r,n,a,e[u+9],12,-1958414417),a=g(a,o,r,n,e[u+10],17,-42063),n=g(n,a,o,r,e[u+11],22,-1990404162),r=g(r,n,a,o,e[u+12],7,1804603682),o=g(o,r,n,a,e[u+13],12,-40341101),a=g(a,o,r,n,e[u+14],17,-1502002290),r=w(r,n=g(n,a,o,r,e[u+15],22,1236535329),a,o,e[u+1],5,-165796510),o=w(o,r,n,a,e[u+6],9,-1069501632),a=w(a,o,r,n,e[u+11],14,643717713),n=w(n,a,o,r,e[u],20,-373897302),r=w(r,n,a,o,e[u+5],5,-701558691),o=w(o,r,n,a,e[u+10],9,38016083),a=w(a,o,r,n,e[u+15],14,-660478335),n=w(n,a,o,r,e[u+4],20,-405537848),r=w(r,n,a,o,e[u+9],5,568446438),o=w(o,r,n,a,e[u+14],9,-1019803690),a=w(a,o,r,n,e[u+3],14,-187363961),n=w(n,a,o,r,e[u+8],20,1163531501),r=w(r,n,a,o,e[u+13],5,-1444681467),o=w(o,r,n,a,e[u+2],9,-51403784),a=w(a,o,r,n,e[u+7],14,1735328473),r=b(r,n=w(n,a,o,r,e[u+12],20,-1926607734),a,o,e[u+5],4,-378558),o=b(o,r,n,a,e[u+8],11,-2022574463),a=b(a,o,r,n,e[u+11],16,1839030562),n=b(n,a,o,r,e[u+14],23,-35309556),r=b(r,n,a,o,e[u+1],4,-1530992060),o=b(o,r,n,a,e[u+4],11,1272893353),a=b(a,o,r,n,e[u+7],16,-155497632),n=b(n,a,o,r,e[u+10],23,-1094730640),r=b(r,n,a,o,e[u+13],4,681279174),o=b(o,r,n,a,e[u],11,-358537222),a=b(a,o,r,n,e[u+3],16,-722521979),n=b(n,a,o,r,e[u+6],23,76029189),r=b(r,n,a,o,e[u+9],4,-640364487),o=b(o,r,n,a,e[u+12],11,-421815835),a=b(a,o,r,n,e[u+15],16,530742520),r=A(r,n=b(n,a,o,r,e[u+2],23,-995338651),a,o,e[u],6,-198630844),o=A(o,r,n,a,e[u+7],10,1126891415),a=A(a,o,r,n,e[u+14],15,-1416354905),n=A(n,a,o,r,e[u+5],21,-57434055),r=A(r,n,a,o,e[u+12],6,1700485571),o=A(o,r,n,a,e[u+3],10,-1894986606),a=A(a,o,r,n,e[u+10],15,-1051523),n=A(n,a,o,r,e[u+1],21,-2054922799),r=A(r,n,a,o,e[u+8],6,1873313359),o=A(o,r,n,a,e[u+15],10,-30611744),a=A(a,o,r,n,e[u+6],15,-1560198380),n=A(n,a,o,r,e[u+13],21,1309151649),r=A(r,n,a,o,e[u+4],6,-145523070),o=A(o,r,n,a,e[u+11],10,-1120210379),a=A(a,o,r,n,e[u+2],15,718787259),n=A(n,a,o,r,e[u+9],21,-343485551),r=h(r,i),n=h(n,l),a=h(a,c),o=h(o,f)}return[r,n,a,o]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(m(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))},E=p("v3",48,C);var I=function(e,t,r){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return f(n)};function D(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function L(e,t){return e<<t|e>>>32-t}var _=function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var a=0;a<n.length;++a)e.push(n.charCodeAt(a))}e.push(128);for(var o=e.length/4+2,u=Math.ceil(o/16),i=new Array(u),l=0;l<u;++l){for(var c=new Uint32Array(16),f=0;f<16;++f)c[f]=e[64*l+4*f]<<24|e[64*l+4*f+1]<<16|e[64*l+4*f+2]<<8|e[64*l+4*f+3];i[l]=c}i[u-1][14]=8*(e.length-1)/Math.pow(2,32),i[u-1][14]=Math.floor(i[u-1][14]),i[u-1][15]=8*(e.length-1)&4294967295;for(var s=0;s<u;++s){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=i[s][v];for(var p=16;p<80;++p)d[p]=L(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var m=r[0],h=r[1],y=r[2],g=r[3],w=r[4],b=0;b<80;++b){var A=Math.floor(b/20),C=L(m,5)+D(A,h,y,g)+w+t[A]+d[b]>>>0;w=g,g=y,y=L(h,30)>>>0,h=m,m=C}r[0]=r[0]+m>>>0,r[1]=r[1]+h>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+g>>>0,r[4]=r[4]+w>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]},T=p("v5",80,_)}}]);