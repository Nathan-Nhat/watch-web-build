(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[17],{264:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(6),c=a(78),r=a(1),l=a.n(r),i=a(15),o=(a(146),a(84)),m=a(82),u=a(104),d=a(103),s=(a(77),a(105)),g=a(87),p=a(81),E=a(90),h=a(106),f=a(80),v=a(5),b=function(e){var t=e.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"child-category-right"},l.a.createElement("div",{className:"child-category-title-container"},l.a.createElement("div",{className:"child-category-title"},"Khuy\u1ebfn m\u1ea1i \u0111\u1eb7c bi\u1ec7t"),l.a.createElement("div",{style:{flexGrow:1}})),t.isLoadingProduct?l.a.createElement("div",{className:"child-category-loading-container"},l.a.createElement("div",{className:"child-category-loading-wrapper"},l.a.createElement(g.a,null))):0===t.listProduct.length?l.a.createElement(s.a,null):l.a.createElement("div",{className:"child-category-element-container"},t.listProduct.map((function(e,t){return l.a.createElement("div",{className:"child-category-element",key:t},l.a.createElement(o.a,{data:e}))})))))};function y(){var e=Object(r.useState)({isLoading:!0,isLoadingProduct:!0,listProduct:[]}),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){o(Object(n.a)({},a,{isLoadingProduct:!0})),Object(i.a)("/all_product?page=1&item_per_page=16&order=is_hot,desc",{timeout:2e4}).then((function(e){return o(Object(n.a)({},a,{listProduct:e.data.list,isLoading:!1,isLoadingProduct:!1}))})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(p.a,null,l.a.createElement(f.a,{title:"S\u1ea3n ph\u1ea9m HOT",description:v.DESC_DEFAULT,image_url:v.LOGO_DEFAULT,url:v.APP_URL}),l.a.createElement(l.a.Fragment,null,a.isLoading?l.a.createElement(h.a,null):l.a.createElement(d.a,{routeTemplate:l.a.createElement(m.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:"S\u1ea3n ph\u1ea9m m\u1edbi"}]}),leftComponent:l.a.createElement("div",{style:{marginRight:"1em",marginTop:"1em"}},l.a.createElement(u.a,{type:0}),l.a.createElement(E.a,null)),rightComponent:l.a.createElement(b,{state:a})})))}},90:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(85),l=a(28);a(91);t.a=function(){var e=Object(l.d)((function(e){return e.prefetchDataReducer.hot_product}));return c.a.createElement("section",null,c.a.createElement("h3",{className:"hot-product-nav-left-product"},"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"),c.a.createElement("div",{className:"hot-product-nav-product-container"},e.map((function(e,t){return t>4?null:c.a.createElement("div",{style:{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"0.5em"}},c.a.createElement(r.a,{data:e}))}))))}},91:function(e,t,a){}}]);
//# sourceMappingURL=17.e3f4ea6d.chunk.js.map