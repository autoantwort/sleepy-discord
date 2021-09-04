(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(383)),l={title:"SleepyDiscord::WebSocketMessage"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_web_socket_message",id:"reference/Classes/struct_sleepy_discord_1_1_web_socket_message",isDocsHomePage:!1,title:"SleepyDiscord::WebSocketMessage",description:"Public Types Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_web_socket_message.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_web_socket_message",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_web_socket_message",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::WebHookParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_web_hook_params"},next:{title:"SleepyDiscord::Webhook",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_webhook"}},i=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"enum OPCode",id:"enum-opcode",children:[]},{value:"using OPCodeType",id:"using-opcodetype",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable opCode",id:"variable-opcode",children:[]},{value:"variable payload",id:"variable-payload",children:[]},{value:"variable lifetime",id:"variable-lifetime",children:[]}]}],b={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(c.b)("h3",{id:"enum-opcode"},"enum OPCode"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Enumerator"),Object(c.b)("th",{parentName:"tr",align:null},"Value"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"continuation"),Object(c.b)("td",{parentName:"tr",align:null},"0x0"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"text"),Object(c.b)("td",{parentName:"tr",align:null},"0x1"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"binary"),Object(c.b)("td",{parentName:"tr",align:null},"0x2"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"close"),Object(c.b)("td",{parentName:"tr",align:null},"0x8"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"ping"),Object(c.b)("td",{parentName:"tr",align:null},"0x9"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"pong"),Object(c.b)("td",{parentName:"tr",align:null},"0xA"),Object(c.b)("td",{parentName:"tr",align:null})))),Object(c.b)("h3",{id:"using-opcodetype"},"using OPCodeType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::WebSocketMessage::OPCodeType =  OPCode;\n")),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-opcode"},"variable opCode"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"OPCodeType opCode = text;\n")),Object(c.b)("h3",{id:"variable-payload"},"variable payload"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"const std::string & payload;\n")),Object(c.b)("h3",{id:"variable-lifetime"},"variable lifetime"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::shared_ptr< void > lifetime;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  4 September 2021 at 02:04:50 UTC"))}p.isMDXComponent=!0},383:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);