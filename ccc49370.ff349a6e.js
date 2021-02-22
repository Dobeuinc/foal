(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{257:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(269),c=t(274),o=t(266);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(273),m=t(289),d=t(281);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,o=a.metadata,u=o.title,v=o.description,g=o.nextItem,E=o.prevItem,p=o.editUrl,b=n.hide_table_of_contents;return r.a.createElement(l.a,{title:u,description:v,wrapperClassName:"blog-wrapper"},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:o,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d.a,null),"Edit this page")),(g||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:g,prevItem:E}))),!b&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:a.toc})))))}},274:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(260),c=t(259),o=t(23),i=t(266),s=t(275),m=t(267),d=t(57),u=t.n(d),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,d,g,E=e.children,p=e.frontMatter,b=e.metadata,f=e.truncated,h=e.isBlogPostPage,_=void 0!==h&&h,N=b.date,w=b.permalink,k=b.tags,y=b.readingTime,x=p.author,C=p.title,I=p.image,O=p.keywords,B=p.author_url||p.authorURL,j=p.author_title||p.authorTitle,S=p.author_image_url||p.authorImageURL,L=Object(m.a)(I,{absolute:!0}),M="https://foalts.org"+w;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),I&&r.a.createElement("meta",{property:"og:image",content:L}),I&&r.a.createElement("meta",{name:"twitter:image",content:L}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C})),r.a.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],d=v[parseInt(t[1],10)-1],g=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},_?C:r.a.createElement(i.a,{to:w},C)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:u.a.blogPostDate},d," ",g,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},S&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:B,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:S,alt:x})),r.a.createElement("div",{className:"avatar__intro"},x&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:B,target:"_blank",rel:"noreferrer noopener"},x)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:s.a},E)),_&&r.a.createElement("section",null,r.a.createElement("br",null),r.a.createElement("div",{className:u.a.center},"Share this article on"),r.a.createElement("div",{className:u.a.shareBtnsContainer},r.a.createElement("a",{className:u.a.twitterShareBtn,href:"http://twitter.com/share?text="+C+" @FoalTs&url="+M+"&hashtags=NodeJS,TypeScript,JavaScript,webdev,webdevelopment",target:"_blank"}),r.a.createElement("a",{className:u.a.linkedinShareBtn,href:"https://www.linkedin.com/sharing/share-offsite/?url="+M,target:"_blank"}),r.a.createElement("a",{className:u.a.facebookShareBtn,href:"https://www.facebook.com/sharer/sharer.php?u="+M,target:"_blank"})),r.a.createElement("div",{className:u.a.center},r.a.createElement("br",null),"Stay up to date with the ",r.a.createElement(i.a,{to:"/newsletter"},"newsletter"),".")),(k.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:b.permalink,"aria-label":"Read more about "+C},r.a.createElement("strong",null,"Read More"))))))}},281:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),o=t(260),i=t(60),s=t.n(i);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(o.a)(s.a.iconEdit,a)},t),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},289:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(260);var c=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,o=!1,i=document.getElementsByClassName(e);r<i.length&&!o;){var s=i[r],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(a),s.classList.add(a),c(s),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o=t(59),i=t.n(o);function s(){_bsa.init("custom","CEBI553Y","placement:foaltsorg",{target:"#carbon-js",template:'\n      <div id="carbonads">\n        <span\n          ><span class="carbon-wrap"\n            ><a\n              href="##statlink##"\n              class="carbon-img"\n              target="_blank"\n              rel="noopener sponsored"\n              ><img\n                src="##smallImage##"\n                alt="ads via Carbon"\n                border="0"\n                height="100"\n                width="130"\n                style="max-width: 130px" /></a\n            ><a\n              href="##statlink##"\n              class="carbon-text"\n              target="_blank"\n              rel="noopener sponsored"\n              >##description##</a\n            ></span\n          ><a\n            href="##ad_via_link##"\n            class="carbon-poweredby"\n            target="_blank"\n            rel="noopener sponsored"\n            >ads via Carbon</a\n          ></span\n        >\n      </div>\n      \n      '})}var m=!0;var d="table-of-contents__link";function u(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(u,{isChild:!0,toc:e.children}))}))):null}var v=!1;a.a=function(e){var a=e.toc,t=function(){return"undefined"!=typeof window&&window.document.body.clientWidth>996};return Object(n.useEffect)((function(){t()&&!v&&(v=!0,setTimeout((function(){return v=!1}),1e3),"undefined"!=typeof _bsa&&_bsa&&(console.log("Loading ad"),s(),m||s(),m=!1))}),["undefined"!=typeof window?window.location.href:""]),c(d,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(u,{toc:a}),t()&&r.a.createElement("div",{id:"carbon-js"}))}}}]);