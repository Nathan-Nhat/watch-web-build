(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[13],{114:function(e,t,a){"use strict";var n=a(1),c=a.n(n);a(77),a(115);t.a=function(e){var t=e.totalPage,a=e.currentPage,n=e.handlePage,r=function(e){for(var t=[],a=0;a<e;a++)t.push(a+1);return t}(t);return console.log(a),c.a.createElement("div",null,0===t?null:c.a.createElement("div",{className:"paginate-container"},c.a.createElement("div",{className:1!==Number(a)?"paginate-element":"paginate-element paginate-inactive",onClick:function(){n(Number(a)-1)}},"\xab"),r.map((function(e){return c.a.createElement("div",{className:"paginate-element",style:{backgroundColor:e==a?"var(--main-bg-color)":"white",color:e==a?"white":"black"},key:e,onClick:function(){n(e)}},e)})),c.a.createElement("div",{className:Number(a)!==t?"paginate-element":"paginate-element paginate-inactive",onClick:function(){n(Number(a)+1)}},"\xbb")))}},115:function(e,t,a){},122:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=(a(123),a(82),a(107)),l=a(81),i=(a(28),a(86),a(91));t.a=function(e){var t=e.children;return c.a.createElement(l.a,null,c.a.createElement("section",{className:"template-news-container"},c.a.createElement(o,null),c.a.createElement("div",{className:"template-news-left"},t)))};var o=function(){return c.a.createElement("div",{className:"template-news-right"},c.a.createElement("h3",{className:"template-new-left-title"},"Danh m\u1ee5c"),c.a.createElement("div",{className:"template-new-left-menu"},c.a.createElement(r.a,null)),c.a.createElement("div",{style:{marginTop:"3em"}},c.a.createElement(i.a,null)))}},123:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(78),r=a(1),l=a.n(r),i=(a(252),a(81)),o=a(82),m=a(122),s=a(15),p=a(4),u=a(114),g=(a(253),a(77)),d=function(e){var t=e.item,a=e.path;return l.a.createElement("div",{className:"news-card-all-container"},l.a.createElement("div",{className:"news-card-all-left"},l.a.createElement("div",{className:"news-card-all-image",style:{backgroundImage:"url(".concat(t.image,")")}},l.a.createElement("div",{className:"news-card-all-inner-text"},"1"))),l.a.createElement("div",{className:"news-card-all-right"},l.a.createElement(g.a,{path:"".concat(a,"/").concat(t.path)},l.a.createElement("h3",{style:{margin:0,marginTop:"0.5em",marginBottom:"0.5em"}},t.title)),l.a.createElement("p",{className:"news-card-all-date"},l.a.createElement("i",{className:"far fa-calendar-alt"}),l.a.createElement("span",null,new Date(t.date_created).toLocaleDateString())),l.a.createElement("p",null,t.summary),l.a.createElement(g.a,{path:"".concat(a,"/").concat(t.path)},l.a.createElement("span",{className:"news-card-all-button"},"\u0110\u1ecdc ti\u1ebfp  ",l.a.createElement("i",{className:"fas fa-caret-right"})))))},h=a(80);t.default=function(){var e=Object(p.g)(),t=new URLSearchParams(e.search),a="/tin-tuc"===e.pathname?0:"/ho-tro"===e.pathname?2:1,g=t.get("page"),E=Object(p.f)(),f=Object(r.useState)({isLoading:!0,list:[],page:g||1,item_per_page:10,total:0,total_page:0}),v=Object(c.a)(f,2),y=v[0],N=v[1];Object(r.useEffect)((function(){Object(s.a)("/news?page=".concat(y.page,"&item_per_page=").concat(y.item_per_page,"&type_news=").concat(a),{timeout:2e4}).then((function(e){return N(Object(n.a)({},y,{isLoading:!1,list:e.data.list,page:e.data.page,item_per_page:e.data.item_per_page,total:e.data.total,total_page:e.data.total_page}))}))}),[g,e.pathname]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{title:0===a?"Tin t\u1ee9c":1===a?"Gi\u1edbi thi\u1ec7u":"H\u1ed7 tr\u1ee3"}),l.a.createElement(i.a,null,l.a.createElement(o.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:0===a?"Tin t\u1ee9c":1===a?"Gi\u1edbi thi\u1ec7u":"H\u1ed7 tr\u1ee3"}]})),l.a.createElement(m.a,null,l.a.createElement("section",null,l.a.createElement("h2",null,0===a?"Tin t\u1ee9c":1===a?"Gi\u1edbi thi\u1ec7u":"H\u1ed7 Tr\u1ee3"),l.a.createElement("section",null,y.list.map((function(t,a){return l.a.createElement(d,{item:t,key:a,path:e.pathname})}))),l.a.createElement("div",{style:{marginTop:"2em"}},l.a.createElement(u.a,{totalPage:y.total_page,currentPage:y.page,handlePage:function(e){window.scrollTo(0,0);var t=0===a?"/tin-tuc":1===a?"/gioi-thieu":"/ho-tro";E.push("".concat(t,"?page=").concat(e))}})))))}},80:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(87);a(84);t.a=function(e){var t={title:e.title,description:"\u0110i\u1ec7n m\xe1y Vi\u1ec7t Nh\u1eadt chuy\xean kinh doanh m\xe1y th\u1ef1c ph\u1ea9m, thi\u1ebft b\u1ecb nh\xe0 b\u1ebfp, m\xe1y n\u1ea5y ph\u1edf, m\xe1y v\u1eb7t l\xf4ng g\xe0, v\u1ecbt,... v\u1edbi ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\xe0 phong c\xe1ch ph\u1ee5c v\u1ee5 chuy\xean nghi\u1ec7p!",url:"https://dienmayvietnhat.com/",image:"https://shopadmin.s3-ap-southeast-1.amazonaws.com/logo/Logo-share.png"};return c.a.createElement(r.a,{title:t.title,meta:[{name:"description",property:"og:description",content:t.description},{property:"og:title",content:t.title},{property:"og:url",content:t.url},{property:"og:image",content:t.image},{property:"og:image:type",content:"image/png"},{property:"twitter:image:src",content:t.image},{property:"twitter:title",content:t.title},{property:"twitter:description",content:t.description}]})}},82:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(77);a(83);t.a=function(e){var t=e.data;return c.a.createElement("p",{className:"product-category"},t.map((function(e,a){return a!==t.length-1?c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{path:"".concat(e.path)},c.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),c.a.createElement("span",{className:"product-path-divider"},">")):c.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,t,a){},91:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(86),l=a(28);a(92);t.a=function(){var e=Object(l.d)((function(e){return e.prefetchDataReducer.hot_product}));return c.a.createElement("section",null,c.a.createElement("h3",{className:"hot-product-nav-left-product"},"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"),c.a.createElement("div",{className:"hot-product-nav-product-container"},e.map((function(e,t){return t>4?null:c.a.createElement("div",{style:{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"0.5em"}},c.a.createElement(r.a,{data:e}))}))))}},92:function(e,t,a){}}]);
//# sourceMappingURL=13.67cbc7d4.chunk.js.map