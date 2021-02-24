(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{151:function(e,s,n){"use strict";n.r(s),n.d(s,"frontMatter",(function(){return o})),n.d(s,"metadata",(function(){return a})),n.d(s,"toc",(function(){return i})),n.d(s,"default",(function(){return p}));var t=n(3),c=n(7),r=(n(0),n(307)),o={title:"SleepyDiscord::GenericSession"},a={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_session",id:"reference/Classes/class_sleepy_discord_1_1_generic_session",isDocsHomePage:!1,title:"SleepyDiscord::GenericSession",description:"Inherited by SleepyDiscord::CustomSession",source:"@site/docs/reference/Classes/class_sleepy_discord_1_1_generic_session.md",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_session",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_session",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::GenericScheduleHandler",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler"},next:{title:"SleepyDiscord::GenericUDPClient",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_u_d_p_client"}},i=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"using ResponseCallback",id:"using-responsecallback",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function setUrl",id:"function-seturl",children:[]},{value:"function setBody",id:"function-setbody",children:[]},{value:"function setHeader",id:"function-setheader",children:[]},{value:"function setMultipart",id:"function-setmultipart",children:[]},{value:"function setResponseCallback",id:"function-setresponsecallback",children:[]},{value:"function request",id:"function-request",children:[]}]},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"function getMethodName",id:"function-getmethodname",children:[]}]}],l={toc:i};function p(e){var s=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,n,{components:s,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Inherited by ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session"},"SleepyDiscord::CPRSession"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session"},"SleepyDiscord::CustomSession")),Object(r.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(r.b)("h3",{id:"using-responsecallback"},"using ResponseCallback"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::GenericSession::ResponseCallback =  std::function<void(Response)>;\n")),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)("h3",{id:"function-seturl"},"function setUrl"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void setUrl(\n    const std::string & url\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-seturl"},"SleepyDiscord::CPRSession::setUrl"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-seturl"},"SleepyDiscord::CustomSession::setUrl")),Object(r.b)("h3",{id:"function-setbody"},"function setBody"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void setBody(\n    const std::string * jsonParameters\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-setbody"},"SleepyDiscord::CPRSession::setBody"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-setbody"},"SleepyDiscord::CustomSession::setBody")),Object(r.b)("h3",{id:"function-setheader"},"function setHeader"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void setHeader(\n    const std::vector< HeaderPair > & header\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-setheader"},"SleepyDiscord::CustomSession::setHeader"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-setheader"},"SleepyDiscord::CPRSession::setHeader")),Object(r.b)("h3",{id:"function-setmultipart"},"function setMultipart"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void setMultipart(\n    const std::vector< Part > & parts\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-setmultipart"},"SleepyDiscord::CPRSession::setMultipart"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-setmultipart"},"SleepyDiscord::CustomSession::setMultipart")),Object(r.b)("h3",{id:"function-setresponsecallback"},"function setResponseCallback"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void setResponseCallback(\n    const ResponseCallback & callback\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-setresponsecallback"},"SleepyDiscord::CPRSession::setResponseCallback"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-setresponsecallback"},"SleepyDiscord::CustomSession::setResponseCallback")),Object(r.b)("h3",{id:"function-request"},"function request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"virtual Response request(\n    RequestMethod method\n) =0\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session#function-request"},"SleepyDiscord::CPRSession::request"),", ",Object(r.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_session#function-request"},"SleepyDiscord::CustomSession::request")),Object(r.b)("h2",{id:"protected-functions-documentation"},"Protected Functions Documentation"),Object(r.b)("h3",{id:"function-getmethodname"},"function getMethodName"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"const char * getMethodName(\n    const RequestMethod & method\n)\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"Updated on 24 February 2021 at 15:10:03 UTC"))}p.isMDXComponent=!0},307:function(e,s,n){"use strict";n.d(s,"a",(function(){return u})),n.d(s,"b",(function(){return _}));var t=n(0),c=n.n(t);function r(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function o(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?o(Object(n),!0).forEach((function(s){r(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function i(e,s){if(null==e)return{};var n,t,c=function(e,s){if(null==e)return{};var n,t,c={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||(c[n]=e[n]);return c}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var s=c.a.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):a(a({},s),e)),n},u=function(e){var s=p(e.components);return c.a.createElement(l.Provider,{value:s},e.children)},d={inlineCode:"code",wrapper:function(e){var s=e.children;return c.a.createElement(c.a.Fragment,{},s)}},b=c.a.forwardRef((function(e,s){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=t,_=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?c.a.createElement(_,a(a({ref:s},l),{},{components:n})):c.a.createElement(_,a({ref:s},l))}));function _(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=b;var a={};for(var i in s)hasOwnProperty.call(s,i)&&(a[i]=s[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var l=2;l<r;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);