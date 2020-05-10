(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(123)),o=n(125),c={title:"Usage"},l={id:"usage",title:"Usage",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs\\usage.mdx",permalink:"/react-reparenting/docs/usage",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/usage.mdx",sidebar:"docs",previous:{title:"Installation \ud83d\udce6",permalink:"/react-reparenting/docs/installation"},next:{title:"Reparentable",permalink:"/react-reparenting/docs/reparentable"}},b=[{value:"Define your App",id:"define-your-app",children:[]},{value:"Send the children",id:"send-the-children",children:[]},{value:"Choose your tool",id:"choose-your-tool",children:[]},{value:"React Native",id:"react-native",children:[]}],p={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The key points to be followed to implement reparenting are explained below."),Object(i.b)("h2",{id:"define-your-app"},"Define your App"),Object(i.b)("p",null,"In each implementation you have to define mainly 3 things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What are the ",Object(i.b)("inlineCode",{parentName:"li"},"Child")," components that can be transferred."),Object(i.b)("li",{parentName:"ul"},"What are the ",Object(i.b)("inlineCode",{parentName:"li"},"Parent")," components that can hold these children."),Object(i.b)("li",{parentName:"ul"},"What are the components that will ",Object(i.b)("inlineCode",{parentName:"li"},"trigger")," reparenting.")),Object(i.b)("p",null,"Parent components will need some small setup, child components won't need it. Any component can be used as a child, however it is your responsibility to provide them with unique ",Object(i.b)("inlineCode",{parentName:"p"},"keys")," ",Object(i.b)("em",{parentName:"p"},"(don't use ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318"}),"indexes as keys"),")"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that a component can also have multiple roles."))),Object(i.b)("h2",{id:"send-the-children"},"Send the children"),Object(i.b)("p",null,"This package offers more than one tool to manage reparenting, in each of them the procedure is always the same:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Call a ",Object(i.b)("inlineCode",{parentName:"li"},"send")," method with the reparenting information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Re-render")," the components with the transferred Children in their new Parents.")),Object(i.b)("div",{align:"center"},Object(i.b)("img",{src:Object(o.a)("images/code.png"),width:"60%"})),Object(i.b)("br",null),Object(i.b)("p",null,"That's all, the transferred components will not be re-mounted and will maintain its internal state."),Object(i.b)("p",null,"By default the send method will also find and transfer ",Object(i.b)("inlineCode",{parentName:"p"},"DOM nodes"),". This option can be disabled so that you can manually send the nodes ",Object(i.b)("em",{parentName:"p"},"(for example with drag and drop)"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that the send method should only be called before re-rendering."))),Object(i.b)("h2",{id:"choose-your-tool"},"Choose your tool"),Object(i.b)("p",null,"Choose the right tool for you, they are all independent of each other:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I just want things to work")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Use a custom parent (recommended)")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./reparentable"}),Object(i.b)("strong",{parentName:"a"},"guide"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I need more flexibility")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Use a custom parent")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./parent"}),Object(i.b)("strong",{parentName:"a"},"guide"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Use your class component")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./createparent"}),Object(i.b)("strong",{parentName:"a"},"guide"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Use your function component (limited to ReactDOM for now)")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./useparent"}),Object(i.b)("strong",{parentName:"a"},"guide")))))),Object(i.b)("h2",{id:"react-native"},"React Native"),Object(i.b)("p",null,"The default configuration is designed to work with ReactDOM. If you want to try implementing React-reparenting with other renderers, you can disable the ",Object(i.b)("inlineCode",{parentName:"p"},"DOM nodes transfer")," in the send method (since it wouldn't work without a DOM), and transfer manually the nodes you are working with. You can even try to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./renderer"}),"instruct")," the package to manage the types of nodes you are working with, in order to automate the process as happens with ReactDOM."))}s.isMDXComponent=!0},122:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.a.createElement(u,c({ref:t},b,{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(122);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);