(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[9],{110:function(e,a,t){},111:function(e,a,t){},124:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(28),i=t(85),l=(t(81),t(77)),m=(t(78),t(33),t(110),t(238),t(6),t(141)),o=(m.a,t(111),t(93));a.a=function(){var e=Object(r.d)((function(e){return e.prefetchDataReducer.hot_product})).map((function(e,a){return c.a.createElement("div",{key:a,className:"home-product-sale-element"},c.a.createElement(i.a,{data:e}))}));return c.a.createElement("div",{className:"home-product-sale-container"},c.a.createElement("div",{className:"home-product-sale-title"},c.a.createElement(l.a,{path:"/khuyen-mai"},c.a.createElement("span",{className:"home-product-sale-text-title"},"Khuy\u1ebfn m\xe3i \u0111\u1eb7c bi\u1ec7t")),c.a.createElement("div",{style:{flexGrow:1}})),c.a.createElement("div",{className:"home-product-sale-body"},c.a.createElement(o.a,{data:e,isFixed:!1,numDesktop:5,numMedium:4,numMobile:2,isInterval:!0})))}},142:function(e,a,t){e.exports=t.p+"static/media/Banner-middle.b8e1040b.jpg"},143:function(e,a,t){e.exports=t.p+"static/media/Banner-middle-2.b41fa90c.jpg"},235:function(e,a,t){},236:function(e,a,t){},237:function(e,a,t){e.exports=t.p+"static/media/Banner-vertical.42aa55ea.jpg"},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){e.exports=t.p+"static/media/Banner-rectangle.0f1f5d3b.jpg"},242:function(e,a,t){e.exports=t.p+"static/media/banner-rectangle-2.87db3c08.jpg"},243:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var n=t(5),c=t(78),r=t(1),i=t.n(r),l=(t(235),t(98)),m=t(28),o=t(147),s=t(79),u=t(93),d=t(77),p=t(81),h=t(15),E=(t(236),t(85)),g=t(237),v=t.n(g),f=function(e){var a=e.category,t=e.index,n=a.list_product.map((function(e,a){return i.a.createElement("div",{key:a,className:"home-category-element"},i.a.createElement(E.a,{data:e}))}));return i.a.createElement(i.a.Fragment,null,0!==a.list_product.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home-category-title"},i.a.createElement(d.a,{path:"/p/".concat(a.path)},i.a.createElement("div",{className:"home-category-title-text",style:{backgroundColor:"var(--main-bg-color)"}},a.name.toUpperCase())),i.a.createElement("div",{style:{flexGrow:1}}),a.child_category.map((function(e,a){return i.a.createElement(d.a,{path:"/c/".concat(e.path),key:a},i.a.createElement("div",{className:"home-category-child"},e.name))}))),i.a.createElement("div",{className:"home-category-body-product-desktop"},0===t||5===t?i.a.createElement("div",null,i.a.createElement(d.a,{path:"/p/".concat(a.path)},i.a.createElement("div",{className:"home-category-banner",style:{backgroundImage:"url(".concat(a.banner,")")}},i.a.createElement("div",{className:"home-category-inner-text"}))),i.a.createElement("div",{style:{paddingTop:"1em"}},i.a.createElement(u.a,{data:n,numMobile:2,numMedium:3,numDesktop:5}))):i.a.createElement("div",{className:"home-category-product-container"},i.a.createElement("div",{className:"home-category-product-element"},i.a.createElement("div",{className:"home-category-banner-left-container"},i.a.createElement(d.a,{path:"/p/".concat(a.path)},i.a.createElement("div",{style:{backgroundImage:"url(".concat(1===t?v.a:"https://bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_doc_1.jpg?1591756297405",")")},className:"home-category-banner-left"},i.a.createElement("div",{className:"home-category-text-inner"})))),n))),i.a.createElement("div",{className:"home-category-mobile"},i.a.createElement(d.a,{path:"/p/".concat(a.path)},i.a.createElement("div",{className:"home-category-banner",style:{backgroundImage:"url(".concat(a.banner,")")}},i.a.createElement("div",{className:"home-category-inner-text"}))),i.a.createElement("div",{style:{paddingTop:"0.5em"}},i.a.createElement(u.a,{data:n,numMobile:2.5,numMedium:3,numDesktop:5})))):null)},N=t(124),b=(t(239),t(240),function(e){var a=e.data;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("div",{className:"news-card-image",style:{backgroundImage:"url(".concat(a.image,")")}},i.a.createElement("div",{className:"news-card-inner-text"},"1")),i.a.createElement("h3",null,i.a.createElement(d.a,{path:"/tin-tuc/".concat(a.path),className:"news-card-title"},a.title)),i.a.createElement("div",{style:{opacity:.7,marginBottom:"1em"}},a.summary),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(d.a,{path:"/tin-tuc/".concat(a.path)},i.a.createElement("span",{className:"news-card-more"},"\u0110\u1eccC TI\u1ebeP ",i.a.createElement("i",{className:"fas fa-caret-right"}))))}),y=t(4),_=function(){var e=Object(r.useState)({list:[]}),a=Object(c.a)(e,2),t=a[0],l=a[1],m=Object(y.f)();Object(r.useEffect)((function(){Object(h.a)("/news?page=1&item_per_page=3&type_news=0",{timeout:2e4}).then((function(e){return l(Object(n.a)({},t,{list:e.data.list}))}))}),[]);var o=t.list.map((function(e,a){return i.a.createElement("div",{style:{padding:"0.5em"}},i.a.createElement(b,{data:e}))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"home-news-title"},i.a.createElement(d.a,{path:"/tin-tuc"},i.a.createElement("div",{className:"home-news-title-text",style:{backgroundColor:"var(--main-bg-color)"}},"TIN T\u1ee8C"))),i.a.createElement("section",{className:"home-news-container-mobile"},i.a.createElement(u.a,{data:o,numDesktop:3,numMedium:2,numMobile:1})),i.a.createElement("section",{className:"home-news-button-container"},i.a.createElement("button",{className:"home-news-button",onClick:function(){m.push("/tin-tuc")}},"Xem th\xeam")))},k=t(241),w=t.n(k),j=t(242),O=t.n(j),x=t(142),C=t.n(x),I=t(143),T=t.n(I),D=t(95),M=(t(243),function(){return i.a.createElement("div",{className:"home-container"},i.a.createElement(p.a,null,i.a.createElement("section",{className:"home-header-wrapper"},i.a.createElement("div",{className:"home-navigation"},i.a.createElement(D.a,{animation:!0,width:"100%",height:"18em",extraStyle:{}})),i.a.createElement("div",{className:"home-slide-container"},i.a.createElement("div",{className:"home-skeleton-slide-container"},i.a.createElement("div",{className:"home-skeleton-slide-element"},i.a.createElement(D.a,{animation:!0,width:"100%",height:"100%"})))),i.a.createElement("div",{className:"home-side"},i.a.createElement(D.a,{animation:!0,width:"100%",height:"49%"}),i.a.createElement(D.a,{animation:!0,width:"100%",height:"49%"}))),i.a.createElement("section",{className:"home-slider-nav"},i.a.createElement(D.a,{animation:!0,width:"100%",height:"7em"}))),i.a.createElement(p.a,null,i.a.createElement("section",{className:"home-banner-image-container"},i.a.createElement("div",{className:"home-skeleton-middle-container"},i.a.createElement("div",{className:"home-skeleton-middle-element"},i.a.createElement(D.a,{height:"100%",width:"100%",animation:!0}))),i.a.createElement("div",{className:"home-skeleton-middle-container"},i.a.createElement("div",{className:"home-skeleton-middle-element"},i.a.createElement(D.a,{height:"100%",width:"100%",animation:!0}))))))}),F=t(80);a.default=Object(m.b)((function(e){return{data:e.categoryDataReducer}}))((function(){var e=Object(m.c)(),a=Object(m.d)((function(e){return e.prefetchDataReducer.navigation})),t=Object(r.useState)([]),E=Object(c.a)(t,2),g=E[0],v=E[1],b=Object(r.useState)({isLoading:!0,list:[]}),k=Object(c.a)(b,2),j=k[0],x=k[1],I=Object(y.f)();Object(r.useEffect)((function(){return e(Object(s.h)()),Object(h.a)("/banner",{timeout:2e4}).then((function(e){var a=e.data.list.map((function(e){return{url:e.image_url,path:e.name}}));v(a)})).catch((function(e){return console.log(e)})),Object(h.a)("/category/detail",{timeout:2e4}).then((function(e){x(Object(n.a)({},j,{isLoading:!1,list:e.data.list}))})).catch((function(e){return console.log(e)})),function(){e(Object(s.b)())}}),[]);var D=a.map((function(e,a){return i.a.createElement("div",{className:"home-slider-nav-element",key:a},i.a.createElement(d.a,{path:"/p/".concat(e.path)},i.a.createElement("div",{className:"home-slider-nav-wrapper"},i.a.createElement("div",{className:"home-slider-nav-icon-container",style:{backgroundImage:"url(".concat(e.icon,")")}},i.a.createElement("div",{className:"home-slider-inner-text"})),i.a.createElement("div",{className:"home-slider-nav-name"},e.name))))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{title:"\u0110i\xean m\xe1y VI\u1ec6T NH\u1eacT - Chuy\xean cung c\u1ea5p m\xe1y th\u1ef1c ph\u1ea9m s\u1ed1 1 Vi\u1ec7t Nam"}),j.isLoading?i.a.createElement(M,null):i.a.createElement("div",{className:"home-container"},i.a.createElement(p.a,null,i.a.createElement("section",{className:"home-header-wrapper"},i.a.createElement("div",{className:"home-navigation"},i.a.createElement(o.a,null)),i.a.createElement("div",{className:"home-slide-container"},i.a.createElement(l.a,{data:g,aspect_ratio:2.5,timeout:1e4})),i.a.createElement("div",{className:"home-side"},i.a.createElement("div",{className:"home-side-wrapper side-1",style:{backgroundImage:"url(".concat(w.a,")")},onClick:function(){I.push("/khuyen-mai")}},i.a.createElement("div",{className:"home-side-ripple"})),i.a.createElement("div",{className:"home-side-wrapper side-2",style:{backgroundImage:"url(".concat(O.a,")")},onClick:function(){I.push("/khuyen-mai")}},i.a.createElement("div",{className:"home-side-ripple"})))),i.a.createElement("section",{className:"home-slider-nav"},i.a.createElement("div",{className:"home-slider-body"},i.a.createElement(u.a,{data:D,isFixed:!1,numDesktop:6,numMedium:4,numMobile:2,isInterval:!0})))),i.a.createElement(p.a,null,i.a.createElement("section",{className:"home-banner-image-container"},i.a.createElement(d.a,{path:"/gioi-thieu/gioi-thieu-ve-cong-ty",className:"home-banner-image"},i.a.createElement("img",{style:{width:"100%"},src:C.a})),i.a.createElement(d.a,{path:"/ho-tro",className:"home-banner-image"},i.a.createElement("img",{style:{width:"100%"},src:T.a})))),i.a.createElement("section",{className:"home-product-sale"},i.a.createElement(p.a,null,i.a.createElement(N.a,null))),i.a.createElement("section",null,i.a.createElement(p.a,null,j.list.map((function(e,a){return a>1&&5!=a?null:i.a.createElement("div",{key:a,style:{marginTop:"2em"}},i.a.createElement(f,{category:e,index:a}))})))),i.a.createElement("section",null,i.a.createElement(p.a,null,i.a.createElement(_,null)))))}))},80:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(87);t(84);a.a=function(e){var a={title:e.title,description:"\u0110i\u1ec7n m\xe1y Vi\u1ec7t Nh\u1eadt chuy\xean kinh doanh m\xe1y th\u1ef1c ph\u1ea9m, thi\u1ebft b\u1ecb nh\xe0 b\u1ebfp, m\xe1y n\u1ea5y ph\u1edf, m\xe1y v\u1eb7t l\xf4ng g\xe0, v\u1ecbt,... v\u1edbi ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\xe0 phong c\xe1ch ph\u1ee5c v\u1ee5 chuy\xean nghi\u1ec7p!",url:"https://dienmayvietnhat.com/",image:"https://shopadmin.s3-ap-southeast-1.amazonaws.com/logo/Logo-share.png"};return c.a.createElement(r.a,{title:a.title,meta:[{name:"description",property:"og:description",content:a.description},{property:"og:title",content:a.title},{property:"og:url",content:a.url},{property:"og:image",content:a.image},{property:"og:image:type",content:"image/png"},{property:"twitter:image:src",content:a.image},{property:"twitter:title",content:a.title},{property:"twitter:description",content:a.description}]})}},85:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=(t(89),t(77)),i=t(79),l=t(28),m=t(4);a.a=function(e){var a=e.data,t=Object(l.c)();Object(m.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-card-container"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-image-container",style:{backgroundImage:"url(".concat(a.url_image_main,")")}},c.a.createElement("div",{className:"product-card-inner-text"},"Hello"),-1===a.price?null:c.a.createElement("div",{className:"product-card-toCard",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(i.a)({product_id:a.product_id,amount:1,price:a.price,sale_price:a.sale_price,url_image_main:a.url_image_main,name:a.name})),t(Object(i.i)())}},c.a.createElement("span",null,"Th\xeam v\xe0o gi\u1ecf h\xe0ng")),c.a.createElement("div",{className:"product-card-preview",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(i.l)({images:{url_image_main:a.url_image_main,url_image_1:a.url_image_1,url_image_2:a.url_image_2,url_image_3:a.url_image_3,url_image_4:a.url_image_4},details:{product_id:a.product_id,name:a.name,price:a.price,sale_price:a.sale_price,description_sale:a.description_sale,url_image_main:a.url_image_main}}))}},c.a.createElement("i",{className:"fas fa-eye"})),a.price!==a.sale_price&&-1!==a.price?c.a.createElement("div",{className:"product-card-sale-percent"},c.a.createElement("span",{className:"product-card-sale-span"},"".concat((100-a.sale_price/a.price*100).toFixed(),"%"))):null)),c.a.createElement("div",{className:"product-card-detail"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-name"},a.name)),c.a.createElement("div",{className:"product-card-price-container"},c.a.createElement("div",null,c.a.createElement("div",{className:"product-card-price"},a.price!==a.sale_price&&-1!==a.price?"".concat(Number(a.price).toLocaleString("en"),"\u0111"):""),c.a.createElement("div",{className:"product-card-sale_price"},-1===a.price?"Li\xean h\u1ec7":"".concat(Number(a.sale_price).toLocaleString("en"),"\u0111")))))))}},89:function(e,a,t){},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(78),c=t(1),r=t.n(c),i=(t(99),t(4));function l(e){var a=e.data,t=e.aspect_ratio,l=e.timeout,m=Object(c.useState)(0),o=Object(n.a)(m,2),s=o[0],u=o[1],d=Object(c.useRef)(null),p=Object(i.f)();return Object(c.useEffect)((function(){return d.current=setTimeout((function(){s===a.length-1?u(0):u((function(e){return e+1}))}),l),function(){return clearTimeout(d.current)}}),[s]),r.a.createElement("div",{className:"slide-container"},r.a.createElement("div",{className:"slide-slides-images",style:{marginLeft:"".concat(100*-s,"%")}},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"slide-image"},r.a.createElement("div",{className:"slide-image-element",style:{backgroundImage:"url(".concat(e.url,")"),paddingTop:"".concat(100/t,"%")},onClick:function(){p.push("/p/".concat(e.path))}},r.a.createElement("div",{className:"slide-text-inner"},"1")))}))),r.a.createElement("div",{className:"slide-slides-arrow-container left-arrow",onClick:function(){d.current&&clearTimeout(d.current),u(0===s?a.length-1:function(e){return e-1})}},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{className:"slide-slides-arrow-container right-arrow",onClick:function(){d.current&&clearTimeout(d.current),s===a.length-1?u(0):u((function(e){return e+1}))}},r.a.createElement("i",{className:"fas fa-chevron-right"})))}},99:function(e,a,t){}}]);
//# sourceMappingURL=9.53bbb05d.chunk.js.map