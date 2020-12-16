(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),o=(n(0),n(250)),a={title:"Service and Application Initialization"},p={unversionedId:"upgrade-to-v2/service-and-app-initialization",id:"upgrade-to-v2/service-and-app-initialization",isDocsHomePage:!1,title:"Service and Application Initialization",description:"FoalTS offers two ways to initialize the application: by the boot methods of the services or with the AppController.init method.",source:"@site/docs/upgrade-to-v2/service-and-app-initialization.md",slug:"/upgrade-to-v2/service-and-app-initialization",permalink:"/docs/upgrade-to-v2/service-and-app-initialization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/service-and-app-initialization.md",version:"current"},c=[{value:"New features",id:"new-features",children:[{value:"The <code>IAppController</code> interface",id:"the-iappcontroller-interface",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"FoalTS offers two ways to initialize the application: by the ",Object(o.b)("inlineCode",{parentName:"p"},"boot")," methods of the services or with the ",Object(o.b)("inlineCode",{parentName:"p"},"AppController.init")," method."),Object(o.b)("p",null,"Previously we had to call ",Object(o.b)("inlineCode",{parentName:"p"},"ServicesManager.boot")," and use the ",Object(o.b)("inlineCode",{parentName:"p"},"createAndInitApp")," function. This is no longer necessary. FoalTS will call the ",Object(o.b)("inlineCode",{parentName:"p"},"boot")," and ",Object(o.b)("inlineCode",{parentName:"p"},"init")," methods if they exist when the application is launched. Therefore, the ",Object(o.b)("inlineCode",{parentName:"p"},"createAndInitApp")," function no longer exists (use ",Object(o.b)("inlineCode",{parentName:"p"},"createApp")," instead)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"boot")," methods are called before ",Object(o.b)("inlineCode",{parentName:"p"},"AppController.init"),".")),Object(o.b)("h2",{id:"new-features"},"New features"),Object(o.b)("h3",{id:"the-iappcontroller-interface"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"IAppController")," interface"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AppController")," can implement the ",Object(o.b)("inlineCode",{parentName:"p"},"IAppController")," interface. In this way, we make sure that the optional methods ",Object(o.b)("inlineCode",{parentName:"p"},"init")," and ",Object(o.b)("inlineCode",{parentName:"p"},"handleError")," are correctly implemented as well as the ",Object(o.b)("inlineCode",{parentName:"p"},"subControllers")," property."))}d.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||s[b]||o;return n?i.a.createElement(f,p(p({ref:t},l),{},{components:n})):i.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);