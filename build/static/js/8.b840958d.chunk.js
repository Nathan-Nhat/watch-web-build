(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[8],{103:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=(a(118),a(98)),i=a(28);t.a=function(e){var t=e.routeTemplate,a=e.leftComponent,n=e.rightComponent,l=function(e){for(var t=[],a=0;a<e.length;a++)e[a].banner&&t.push({url:e[a].banner,path:e[a].path});return t}(Object(i.d)((function(e){return e.prefetchDataReducer.navigation})));return c.a.createElement("div",{className:"category-container-root"},c.a.createElement(r.a,{data:l,aspect_ratio:3.5,timeout:1e4}),t,c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"category-left"},a),c.a.createElement("div",{className:"category-right"},n)))}},104:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(31),c=a(4),r=a(78),i=a(1),l=a.n(i),o=(a(119),a(101)),m=a(125),s=function(e){var t=e.focusTag,a=e.type;return l.a.createElement("div",{className:"filter-component-menu"},l.a.createElement("div",{className:"filter-component-menu-title"},"DANH M\u1ee4C S\u1ea2N PH\u1ea8M"),l.a.createElement("div",{className:"filter-component-menu-body"},l.a.createElement(m.a,{focusTag:t,type:a})))};t.b=function(e){var t=e.onFilterChange,a=e.focusTag,m=e.type,u=Object(i.useState)({is_new:0,is_hot:0,price_from:0,price_to:999999999}),p=Object(r.a)(u,2),d=p[0],g=p[1],E=function(e){var t=e.target.name,a=null;a="is_hot"===t|"is_new"===t?e.target.checked?1:0:e.target.value,g(Object(c.a)({},d,Object(n.a)({},t,a)))};return l.a.createElement("div",{className:"filter-component-container"},l.a.createElement(s,{focusTag:a,type:m}),l.a.createElement("div",{className:"filter-component-title-container"},l.a.createElement("i",{className:"fas fa-filter"}),l.a.createElement("span",{className:"filter-component-title"},"B\u1ed8 L\u1eccC T\xccM KI\u1ebeM")),l.a.createElement("div",{className:"filter-component-type-container"},l.a.createElement("div",null,"Lo\u1ea1i s\u1ea3n ph\u1ea9m"),l.a.createElement("div",{className:"filter-component-checkbox"},l.a.createElement("input",{type:"checkbox",className:"filter-component-checkbox-1",name:"is_new",checked:d.is_new,onChange:E})," ",l.a.createElement("span",null,"S\u1ea3n ph\u1ea9m m\u1edbi")),l.a.createElement("div",{className:"filter-component-checkbox"},l.a.createElement("input",{type:"checkbox",className:"filter-component-checkbox-1",name:"is_hot",checked:d.is_hot,onChange:E})," ",l.a.createElement("span",null,"S\u1ea3n ph\u1ea9m b\xe1n ch\u1ea1y"))),l.a.createElement("div",{className:"filter-component-price-container"},l.a.createElement("div",null,"Kho\u1ea3ng gi\xe1"),l.a.createElement("div",{className:"filter-component-input"},l.a.createElement("div",null,l.a.createElement("input",{type:"number",name:"price_from",onChange:E,value:d.price_from})),l.a.createElement("span",{className:"filter-component-input-divider"},"~"),l.a.createElement("div",null,l.a.createElement("input",{type:"number",name:"price_to",onChange:E,value:d.price_to})))),l.a.createElement(o.a,null),l.a.createElement("button",{className:"filter-component-button",onClick:function(){d.price_from>d.price_to||0===d.price_to?alert("Invalid price range"):t(d)}},"\xc1p d\u1ee5ng"),l.a.createElement("button",{className:"filter-component-button",onClick:function(){g({is_new:0,is_hot:0,price_from:0,price_to:999999999}),t({is_new:0,is_hot:0,price_from:0,price_to:999999999})}},"\u0110\u1eb7t l\u1ea1i"))}},105:function(e,t,a){"use strict";var n=a(1),c=a.n(n);a(120);t.a=function(){return c.a.createElement("div",{className:"no-product-container"},"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong danh m\u1ee5c n\xe0y.")}},106:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(95);a(121),a(81);t.a=function(e){e.routeTemplate,e.leftComponent,e.rightComponent;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"category-slide-skeleton-container"},c.a.createElement("div",{className:"category-slide-skeleton-element"},c.a.createElement(r.a,{animation:!0,width:"100%",height:"100%"}))),c.a.createElement(r.a,{animation:!0,width:"100%",height:"3em",extraStyle:{marginTop:"1em",marginBottom:"1em"}}),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"category-left"},c.a.createElement("div",{style:{width:"95%",height:"300px",marginTop:"1em"}},c.a.createElement(r.a,{width:"100%",height:"100%",animation:!0}))),c.a.createElement("div",{className:"category-right"},c.a.createElement("div",{style:{width:"100%",height:"1000px",marginTop:"1em"}},c.a.createElement(r.a,{width:"100%",height:"100%",animation:!0})))))}},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},250:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(4),c=a(78),r=a(1),i=a.n(r),l=(a(250),a(103)),o=a(104),m=a(5),s=a(15),u=a(85),p=a(82),d=a(105),g=a(88),E=a(81),h=a(93),f=a(91),v=a(77),_=a(106),y=a(80),N=function(e){var t=e.state,a=e.order,n=e.onOrderChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"parent-category-right"},i.a.createElement("div",{className:"parent-category-title-container"},i.a.createElement("div",{className:"parent-category-title"},t.category.name.toUpperCase()),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement("div",{className:"parent-category-select-container"},i.a.createElement("span",{style:{fontSize:"0.9em"}},"S\u1eafp x\u1ebfp : "),i.a.createElement("select",{value:a,className:"parent-category-select",onChange:n,name:"order"},i.a.createElement("option",{disabled:!0,value:"",className:"parent-category-option"},"Th\u1ee9 t\u1ef1"),i.a.createElement("option",{value:"name,asc"},"T\xean A -> Z"),i.a.createElement("option",{value:"price,desc"},"T\xean Z -> A"),i.a.createElement("option",{value:"sale_price,asc"},"Gi\xe1 t\u0103ng d\u1ea7n"),i.a.createElement("option",{value:"sale_price,desc"},"Gi\xe1 gi\u1ea3m d\u1ea7n")))),t.isLoadingProduct?i.a.createElement("div",{className:"parent-category-loading-container"},i.a.createElement("div",{className:"parent-category-loading-wrapper"},i.a.createElement(g.a,null))):0===t.listProduct.length?i.a.createElement(d.a,null):i.a.createElement("div",{className:"parent-category-element-container"},t.listProduct.map((function(e,t){return i.a.createElement("div",{className:"parent-category-element",key:t},i.a.createElement(u.a,{data:e}))})))))},b=function(e){var t=e.state;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"parent-category-right"},i.a.createElement("div",{className:"parent-category-title-container"},i.a.createElement("div",{className:"parent-category-title"},t.category.name.toUpperCase())),i.a.createElement("div",null,t.category.child_category.map((function(e,t){var a=e.list_summary_product.map((function(e,t){return i.a.createElement("div",{className:"parent-category-2-element"},i.a.createElement("div",{className:"parent-category-2-wrapper"},i.a.createElement(u.a,{data:e})))}));return i.a.createElement("div",{key:t},i.a.createElement("div",{className:"parent-category-2-title-container"},i.a.createElement("div",{className:"parent-category-2-title"},i.a.createElement(v.a,{path:"/c/".concat(e.path)},i.a.createElement("span",{className:"parent-category-2-text"},e.name)))),i.a.createElement("div",{className:"parent-category-2-body"},i.a.createElement(h.a,{data:a,numMobile:2.5,numMedium:3,numDesktop:4})))})))))};function w(){var e=Object(m.h)().tag,t=Object(r.useState)({isLoading:!0,isLoadingProduct:!0,category:{id:0,name:"",path:"",child_category:[]},listProduct:[]}),a=Object(c.a)(t,2),u=a[0],d=a[1],g=Object(r.useState)({order:"name,asc",is_new:0,is_hot:0,price_from:0,price_to:999999999,item_per_page:30,page:1}),h=Object(c.a)(g,2),v=h[0],w=h[1];Object(r.useEffect)((function(){d(Object(n.a)({},u,{isLoadingProduct:!0})),Object(s.a)("/product_category?category_tag=".concat(e,"&item_per_page=").concat(v.item_per_page,"&page=").concat(v.page,"&order=").concat(v.order,"&is_new=").concat(v.is_new,"&is_hot=").concat(v.is_hot,"&price_from=").concat(v.price_from,"&price_to=").concat(v.price_to),{timeout:2e4}).then((function(e){d(Object(n.a)({},u,{listProduct:e.data.list,isLoadingProduct:!1,isLoading:!1,category:{id:e.data.category.id,name:e.data.category.name,path:e.data.category.path,child_category:e.data.category.child_category}}))})).catch((function(e){return console.log(e)}))}),[v,e]);return i.a.createElement(E.a,null,i.a.createElement(i.a.Fragment,null,u.isLoading?i.a.createElement(_.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{title:u.category.name}),i.a.createElement(l.a,{routeTemplate:i.a.createElement(p.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:u.category.name}]}),leftComponent:0!==u.category.child_category.length?i.a.createElement("div",{style:{marginRight:"1em",marginTop:"1em"}},i.a.createElement(o.a,{focusTag:e,type:0}),i.a.createElement(f.a,null)):i.a.createElement("div",null,i.a.createElement(o.b,{filter:v,onFilterChange:function(e){w(Object(n.a)({},v,{is_new:e.is_new,is_hot:e.is_hot,price_from:e.price_from,price_to:e.price_to}))},focusTag:e,type:0})),rightComponent:0!==u.category.child_category.length?i.a.createElement(b,{state:u}):i.a.createElement(N,{state:u,order:v.order,onOrderChange:function(e){w(Object(n.a)({},v,{order:e.target.value}))}})}))))}},80:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(87);a(84);t.a=function(e){var t={title:e.title,description:"\u0110i\u1ec7n m\xe1y Vi\u1ec7t Nh\u1eadt chuy\xean kinh doanh m\xe1y th\u1ef1c ph\u1ea9m, thi\u1ebft b\u1ecb nh\xe0 b\u1ebfp, m\xe1y n\u1ea5y ph\u1edf, m\xe1y v\u1eb7t l\xf4ng g\xe0, v\u1ecbt,... v\u1edbi ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\xe0 phong c\xe1ch ph\u1ee5c v\u1ee5 chuy\xean nghi\u1ec7p!",url:"https://dienmayvietnhat.com/",image:"https://shopadmin.s3-ap-southeast-1.amazonaws.com/logo/Logo-share.png"};return c.a.createElement(r.a,{title:t.title,meta:[{name:"description",property:"og:description",content:t.description},{property:"og:title",content:t.title},{property:"og:url",content:t.url},{property:"og:image",content:t.image},{property:"og:image:type",content:"image/png"},{property:"twitter:image:src",content:t.image},{property:"twitter:title",content:t.title},{property:"twitter:description",content:t.description},{property:"twitter:card",content:"summary_large_image"}]})}},82:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(77);a(83);t.a=function(e){var t=e.data;return c.a.createElement("p",{className:"product-category"},t.map((function(e,a){return a!==t.length-1?c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{path:"".concat(e.path)},c.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),c.a.createElement("span",{className:"product-path-divider"},">")):c.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,t,a){},85:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=(a(89),a(77)),i=a(79),l=a(28),o=a(5);t.a=function(e){var t=e.data,a=Object(l.c)();Object(o.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-card-container"},c.a.createElement(r.a,{path:"/product/".concat(t.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-image-container",style:{backgroundImage:"url(".concat(t.url_image_main,")")}},c.a.createElement("div",{className:"product-card-inner-text"},"Hello"),-1===t.price?null:c.a.createElement("div",{className:"product-card-toCard",onClick:function(e){e.stopPropagation(),e.preventDefault(),a(Object(i.a)({product_id:t.product_id,amount:1,price:t.price,sale_price:t.sale_price,url_image_main:t.url_image_main,name:t.name})),a(Object(i.i)())}},c.a.createElement("span",null,"Th\xeam v\xe0o gi\u1ecf h\xe0ng")),c.a.createElement("div",{className:"product-card-preview",onClick:function(e){e.stopPropagation(),e.preventDefault(),a(Object(i.l)({images:{url_image_main:t.url_image_main,url_image_1:t.url_image_1,url_image_2:t.url_image_2,url_image_3:t.url_image_3,url_image_4:t.url_image_4},details:{product_id:t.product_id,name:t.name,price:t.price,sale_price:t.sale_price,description_sale:t.description_sale,url_image_main:t.url_image_main}}))}},c.a.createElement("i",{className:"fas fa-eye"})),t.price!==t.sale_price&&-1!==t.price?c.a.createElement("div",{className:"product-card-sale-percent"},c.a.createElement("span",{className:"product-card-sale-span"},"".concat((100-t.sale_price/t.price*100).toFixed(),"%"))):null)),c.a.createElement("div",{className:"product-card-detail"},c.a.createElement(r.a,{path:"/product/".concat(t.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-name"},t.name)),c.a.createElement("div",{className:"product-card-price-container"},c.a.createElement("div",null,c.a.createElement("div",{className:"product-card-price"},t.price!==t.sale_price&&-1!==t.price?"".concat(Number(t.price).toLocaleString("en"),"\u0111"):""),c.a.createElement("div",{className:"product-card-sale_price"},-1===t.price?"Li\xean h\u1ec7":"".concat(Number(t.sale_price).toLocaleString("en"),"\u0111")))))))}},88:function(e,t,a){"use strict";var n=a(1),c=a.n(n);a(90);t.a=function(){return c.a.createElement("div",{className:"loadingio-spinner-spinner-13x20mihomeg"},c.a.createElement("div",{className:"ldio-s0h8lnu9hzj"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(86),i=a(28);a(92);t.a=function(){var e=Object(i.d)((function(e){return e.prefetchDataReducer.hot_product}));return c.a.createElement("section",null,c.a.createElement("h3",{className:"hot-product-nav-left-product"},"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"),c.a.createElement("div",{className:"hot-product-nav-product-container"},e.map((function(e,t){return t>4?null:c.a.createElement("div",{style:{borderBottom:"1px solid rgba(0,0,0,0.1)",padding:"0.5em"}},c.a.createElement(r.a,{data:e}))}))))}},92:function(e,t,a){},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(78),c=a(1),r=a.n(c),i=(a(99),a(5));function l(e){var t=e.data,a=e.aspect_ratio,l=e.timeout,o=Object(c.useState)(0),m=Object(n.a)(o,2),s=m[0],u=m[1],p=Object(c.useRef)(null),d=Object(i.f)();return Object(c.useEffect)((function(){return p.current=setTimeout((function(){s===t.length-1?u(0):u((function(e){return e+1}))}),l),function(){return clearTimeout(p.current)}}),[s]),r.a.createElement("div",{className:"slide-container"},r.a.createElement("div",{className:"slide-slides-images",style:{marginLeft:"".concat(100*-s,"%")}},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slide-image"},r.a.createElement("div",{className:"slide-image-element",style:{backgroundImage:"url(".concat(e.url,")"),paddingTop:"".concat(100/a,"%")},onClick:function(){d.push("/p/".concat(e.path))}},r.a.createElement("div",{className:"slide-text-inner"},"1")))}))),r.a.createElement("div",{className:"slide-slides-arrow-container left-arrow",onClick:function(){p.current&&clearTimeout(p.current),u(0===s?t.length-1:function(e){return e-1})}},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{className:"slide-slides-arrow-container right-arrow",onClick:function(){p.current&&clearTimeout(p.current),s===t.length-1?u(0):u((function(e){return e+1}))}},r.a.createElement("i",{className:"fas fa-chevron-right"})))}},99:function(e,t,a){}}]);
//# sourceMappingURL=8.b840958d.chunk.js.map