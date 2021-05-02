(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{279:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(364)),s={title:"include/sleepy_discord/zlib_compression.h"},o={unversionedId:"reference/Files/zlib__compression_8h",id:"reference/Files/zlib__compression_8h",isDocsHomePage:!1,title:"include/sleepy_discord/zlib_compression.h",description:"Namespaces",source:"@site/docs/reference/Files/zlib__compression_8h.md",slug:"/reference/Files/zlib__compression_8h",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/zlib_compression.cpp",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8cpp"},next:{title:"SleepyDiscord",permalink:"/sleepy-discord/docs/reference/Namespaces/namespace_sleepy_discord"}},c=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Types",id:"types",children:[]},{value:"Defines",id:"defines",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"using DefaultCompression",id:"using-defaultcompression",children:[]}]},{value:"Macro Documentation",id:"macro-documentation",children:[{value:"define SLEEPY_DEFAULT_COMPRESSION",id:"define-sleepy_default_compression",children:[]}]},{value:"Source code",id:"source-code",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(i.b)("h2",{id:"classes"},"Classes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"struct"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_output_queue"},"SleepyDiscord::OutputQueue")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"class"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_z_lib_compression"},"SleepyDiscord::ZLibCompression")))))),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"using ZLibCompression"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/zlib__compression_8h#using-defaultcompression"},"DefaultCompression")))))),Object(i.b)("h2",{id:"defines"},"Defines"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"/docs/reference/Files/zlib__compression_8h#define-sleepy_default_compression"},"SLEEPY_DEFAULT_COMPRESSION")))))),Object(i.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(i.b)("h3",{id:"using-defaultcompression"},"using DefaultCompression"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::DefaultCompression = typedef ZLibCompression;\n")),Object(i.b)("h2",{id:"macro-documentation"},"Macro Documentation"),Object(i.b)("h3",{id:"define-sleepy_default_compression"},"define SLEEPY_DEFAULT_COMPRESSION"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"#define SLEEPY_DEFAULT_COMPRESSION ZLibCompression\n")),Object(i.b)("h2",{id:"source-code"},"Source code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "generic_compression.h"\n#ifdef EXISTENT_ZLIB\n    #include "zlib.h"\n#elif defined(EXISTENT_ZLIB_NG)\n    #include "zlib-ng/zlib-ng.h"\n#endif\n#include <array>\n#include <forward_list>\n#include <string>\n#include <mutex>\n\nnamespace SleepyDiscord {\n    //This Queue is basicly a single linked list with the back and size stored\n    //Needed for storing the output before copying it over into one string\n    struct OutputQueue {\n        constexpr static size_t chunkSize = 16 * 1024;\n        using Data = std::array<char, chunkSize>;\n        using Buffer = std::pair<Data, std::size_t>;\n\n        using Queue = std::forward_list<Buffer>;\n        using Iterator = std::forward_list<Buffer>::iterator;\n        using ConstIterator = std::forward_list<Buffer>::const_iterator;\n\n        Queue queue; //needed when output is larger then buffer\n        Iterator _back = queue.before_begin(); //both back and size would require looking for them\n        Queue::size_type _size = 0; //to avoid looking for size, we store it. Same goes for back\n\n        ~OutputQueue() = default;\n\n        bool empty() const { return queue.empty(); }\n\n        //allocates more memory\n        template<class... Args>\n        Iterator emplace_back(Args&&... args) {\n            Iterator result = queue.emplace_after(_back, std::forward<Args>(args)...);\n            if (_back != result) { //if did anything\n                _back = result;\n                _size += 1;\n            }\n            return result;\n        }\n\n        Buffer& front() {\n            return queue.front();\n        }\n        Buffer& back() {\n            return *_back;\n        }\n\n        Iterator begin() noexcept {\n            return queue.begin();\n        }\n        Iterator end() noexcept {\n            return queue.end();\n        }\n\n        ConstIterator begin() const noexcept {\n            return queue.begin();\n        }\n        ConstIterator end() const noexcept {\n            return queue.end();\n        }\n\n        Queue::size_type size() const noexcept {\n            return _size;\n        }\n\n        void resize(Queue::size_type count) {\n            queue.resize(count);\n            _size = 0;\n            //linear time complexity but count is usally 1\n            for (Iterator it = begin(); it != end(); ++it) {\n                _size += 1;\n                _back = it;\n            }\n        }\n    };\n\n#ifdef EXISTENT_ZLIB\n    namespace ZLib {\n        using Stream = z_stream;\n        using Btye = Bytef;\n        using ConstByte = z_const Bytef;\n        inline int inflateInitStream(Stream* stream) { return inflateInit(stream); }\n        inline int inflateEndStream(Stream* stream) { return inflateEnd(stream); }\n        inline int inflateResetStream(Stream* stream) { return inflateReset(stream); }\n        inline int inflateStream(Stream* stream, int mode) { return inflate(stream, mode); }\n    }\n#elif defined(EXISTENT_ZLIB_NG)\n    namespace ZLib {\n        using Stream = zng_stream;\n        using Btye = uint8_t;\n        using ConstByte = const uint8_t;\n        inline int inflateInitStream(Stream* stream) { return zng_inflateInit(stream); }\n        inline int inflateEndStream(Stream* stream) { return zng_inflateEnd(stream); }\n        inline int inflateResetStream(Stream* stream) { return zng_inflateReset(stream); }\n        inline int inflateStream(Stream* stream, int mode) { return zng_inflate(stream, mode); }\n    }\n#endif\n\n    class ZLibCompression : public GenericCompression {\n    public:\n        using Output = OutputQueue;\n\n        ZLibCompression();\n\n        ~ZLibCompression() {\n            ZLib::inflateEndStream(&stream);\n        }\n\n        ZLib::Stream stream;\n        int statusCode;\n\n        Output output;\n        std::mutex mutex; //only allow one thread to uncompress\n\n        void uncompress(const std::string& compressed) override;\n        void getOutput(std::string& uncompressedOut) override;\n\n        inline void resetStream() override {\n            ZLib::inflateResetStream(&stream);\n        }\n\n        inline bool streamEnded() override {\n            return statusCode == Z_STREAM_END;\n        }\n    };\n\n    using DefaultCompression = ZLibCompression;\n#define SLEEPY_DEFAULT_COMPRESSION ZLibCompression\n}\n')),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  2 May 2021 at 04:58:06 UTC"))}u.isMDXComponent=!0},364:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);