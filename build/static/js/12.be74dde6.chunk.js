(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[12],{112:function(e,t,a){"use strict";var n=a(6),c=a(78),l=a(1),r=a.n(l),i=(a(113),a(87));t.a=function(e){var t=e.container_ref,a=e.product_id,o=e.path,s=Object(l.useState)({isLoading:!0,list:[]}),m=Object(c.a)(s,2),u=m[0],d=m[1],p=function(e,t){t.scrollIntoView({behavior:"smooth",block:"start"})},E=Object(l.useState)(!0),f=Object(c.a)(E,2),v=f[0],h=f[1];return Object(l.useEffect)((function(){if(d(Object(n.a)({},u,{isLoading:!0})),null!==t.current){var e=setTimeout((function(){var e=t.current,a=Array.from(e.querySelectorAll("h2, h3")),n=0,c=0,l=a.map((function(e,t){return"H2"===e.tagName?(n+=1,c=0,r.a.createElement("p",{className:"toc-h2",onClick:function(t){return p(0,e)}},n+". "+e.textContent)):(c+=1,r.a.createElement("div",{className:"toc-h3",onClick:function(t){return p(0,e)}},n+"."+c+". "+e.textContent))}));d({isLoading:!1,list:l})}),1e3);return function(){clearTimeout(e)}}}),[a,o]),r.a.createElement("div",{className:"table-of-content-container"},r.a.createElement("div",{className:"toc-title"},r.a.createElement("i",{className:"fas fa-list-ol"}),r.a.createElement("span",null,"N\u1ed9i dung"),r.a.createElement("div",{className:"toc-right-btn-container",onClick:function(){return h(!v)},style:{transform:v?"rotate(0deg)":"rotate(-90deg)"}},r.a.createElement("i",{className:"fas fa-chevron-down icon-right"}))),u.isLoading?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"1em"}},r.a.createElement(i.a,null)):v?r.a.createElement("div",{className:"toc-detail"},r.a.createElement("hr",{className:"detail-head-divider"}),u.list):null)}},113:function(e,t,a){},122:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=(a(123),a(82),a(107)),r=a(81),i=(a(28),a(85),a(90));t.a=function(e){var t=e.children;return c.a.createElement(r.a,null,c.a.createElement("section",{className:"template-news-container"},c.a.createElement(o,null),c.a.createElement("div",{className:"template-news-left"},t)))};var o=function(){return c.a.createElement("div",{className:"template-news-right"},c.a.createElement("h3",{className:"template-new-left-title"},"Danh m\u1ee5c"),c.a.createElement("div",{className:"template-new-left-menu"},c.a.createElement(l.a,null)),c.a.createElement("div",{style:{marginTop:"3em"}},c.a.createElement(i.a,null)))}},123:function(e,t,a){},252:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(78),l=a(1),r=a.n(l),i=a(81),o=a(15),s=a(4),m=a(93),u=a.n(m),d=a(82),p=(a(252),a(112)),E=a(122),f=a(80),v=a(5);t.default=function(){var e=Object(s.h)().news_tag,t=Object(s.g)(),a=t.pathname.split("/")[1],m="tin-tuc"===a?0:"ho-tro"===a?2:1;console.log(m);var h=Object(l.useState)({isLoading:!0,id:0,title:"",body:"",date_created:"",list_related:[]}),g=Object(c.a)(h,2),b=g[0],y=g[1],N=Object(l.useRef)(null);return Object(l.useEffect)((function(){Object(o.a)("/news/".concat(e),{timeout:2e4}).then((function(e){y(Object(n.a)({},b,{isLoading:!1,id:e.data.news.id,title:e.data.news.title,body:e.data.news.body,date_created:e.data.news.date_created,list_related:e.data.list_relate}))}))}),[a,e]),r.a.createElement(r.a.Fragment,null,b.isLoading?null:r.a.createElement(f.a,{title:b.title,url:v.APP_URL,image_url:v.LOGO_DEFAULT,description:v.DESC_DEFAULT}),r.a.createElement(i.a,null,r.a.createElement(d.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:0===m?"Tin t\u1ee9c":1===m?"Gi\u1edbi thi\u1ec7u":"H\u1ed7 tr\u1ee3",path:0===m?"/tin-tuc":1===m?"/gioi-thieu":"/ho-tro"},{name:b.title}]})),r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"var(--second-bg-color)"}},b.title),r.a.createElement(p.a,{container_ref:N,path:t.pathname}),r.a.createElement("div",{className:"ck-content",ref:N},u()(b.body)))))}},80:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=a(86);t.a=function(e){var t=e.title,a=e.description,r=e.url,i=e.image_url;return Object(n.useEffect)((function(){console.log(document.title),console.log(t)}),[t]),c.a.createElement(l.a,{defer:!1,titleTemplate:"%s | M\xe1y th\u1ef1c ph\u1ea9m Vi\u1ec7t Nh\u1eadt - M\xe1y th\u1ef1c ph\u1ea9m s\u1ed1 1 Vi\u1ec7t Nam",meta:[{name:"description",property:"og:description",content:a},{property:"og:title",content:t},{property:"og:url",content:r},{property:"og:image",content:i},{property:"og:image:type",content:"image/png"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image:src",content:i},{property:"twitter:title",content:t},{property:"twitter:description",content:a}]},c.a.createElement("title",null,t))}},82:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=a(77);a(83);t.a=function(e){var t=e.data;return c.a.createElement("p",{className:"product-category"},t.map((function(e,a){return a!==t.length-1?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:"".concat(e.path)},c.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),c.a.createElement("span",{className:"product-path-divider"},">")):c.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,t,a){},87:function(e,t,a){"use strict";var n=a(1),c=a.n(n);a(89);t.a=function(){return c.a.createElement("div",{className:"loadingio-spinner-spinner-13x20mihomeg"},c.a.createElement("div",{className:"ldio-s0h8lnu9hzj"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}},89:function(e,t,a){},90:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=a(85),r=a(28);a(91);t.a=function(){var e=Object(r.d)((function(e){return e.prefetchDataReducer.hot_product}));return c.a.createElement("section",null,c.a.createElement("h3",{className:"hot-product-nav-left-product"},"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"),c.a.createElement("div",{className:"hot-product-nav-product-container"},e.map((function(e,t){return t>4?null:c.a.createElement("div",{style:{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"0.5em"}},c.a.createElement(l.a,{data:e}))}))))}},91:function(e,t,a){}}]);
//# sourceMappingURL=12.be74dde6.chunk.js.map