(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[9],{110:function(e,a,t){},111:function(e,a,t){},124:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(28),l=t(84),i=(t(81),t(77)),m=(t(78),t(33),t(110),t(239),t(5),t(142)),o=(m.a,t(111),t(92));a.a=function(){var e=Object(r.d)((function(e){return e.prefetchDataReducer.hot_product})).map((function(e,a){return c.a.createElement("div",{key:a,className:"home-product-sale-element"},c.a.createElement(l.a,{data:e}))}));return c.a.createElement("div",{className:"home-product-sale-container"},c.a.createElement("div",{className:"home-product-sale-title"},c.a.createElement(i.a,{path:"/khuyen-mai"},c.a.createElement("span",{className:"home-product-sale-text-title"},"Khuy\u1ebfn m\xe3i \u0111\u1eb7c bi\u1ec7t")),c.a.createElement("div",{style:{flexGrow:1}})),c.a.createElement("div",{className:"home-product-sale-body"},c.a.createElement(o.a,{data:e,isFixed:!1,numDesktop:5,numMedium:4,numMobile:2,isInterval:!0})))}},143:function(e,a,t){e.exports=t.p+"static/media/Banner-middle.b8e1040b.jpg"},144:function(e,a,t){e.exports=t.p+"static/media/Banner-middle-2.b41fa90c.jpg"},236:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){e.exports=t.p+"static/media/Banner-vertical.42aa55ea.jpg"},240:function(e,a,t){},241:function(e,a,t){},242:function(e,a,t){e.exports=t.p+"static/media/Banner-rectangle.0f1f5d3b.jpg"},243:function(e,a,t){e.exports=t.p+"static/media/banner-rectangle-2.87db3c08.jpg"},244:function(e,a,t){},266:function(e,a,t){"use strict";t.r(a);var n=t(6),c=t(78),r=t(1),l=t.n(r),i=(t(236),t(98)),m=t(28),o=t(148),s=t(79),u=t(92),d=t(77),p=t(81),E=t(15),h=(t(237),t(84)),g=t(238),v=t.n(g),f=function(e){var a=e.category,t=e.index,n=a.list_product.map((function(e,a){return l.a.createElement("div",{key:a,className:"home-category-element"},l.a.createElement(h.a,{data:e}))}));return l.a.createElement(l.a.Fragment,null,0!==a.list_product.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home-category-title"},l.a.createElement(d.a,{path:"/p/".concat(a.path)},l.a.createElement("div",{className:"home-category-title-text",style:{backgroundColor:"var(--main-bg-color)"}},a.name.toUpperCase())),l.a.createElement("div",{style:{flexGrow:1}}),a.child_category.map((function(e,a){return l.a.createElement(d.a,{path:"/c/".concat(e.path),key:a},l.a.createElement("div",{className:"home-category-child"},e.name))}))),l.a.createElement("div",{className:"home-category-body-product-desktop"},0===t||5===t?l.a.createElement("div",null,l.a.createElement(d.a,{path:"/p/".concat(a.path)},l.a.createElement("div",{className:"home-category-banner",style:{backgroundImage:"url(".concat(a.banner,")")}},l.a.createElement("div",{className:"home-category-inner-text"}))),l.a.createElement("div",{style:{paddingTop:"1em"}},l.a.createElement(u.a,{data:n,numMobile:2,numMedium:3,numDesktop:5}))):l.a.createElement("div",{className:"home-category-product-container"},l.a.createElement("div",{className:"home-category-product-element"},l.a.createElement("div",{className:"home-category-banner-left-container"},l.a.createElement(d.a,{path:"/p/".concat(a.path)},l.a.createElement("div",{style:{backgroundImage:"url(".concat(1===t?v.a:"https://bizweb.dktcdn.net/100/374/880/themes/748270/assets/banner_doc_1.jpg?1591756297405",")")},className:"home-category-banner-left"},l.a.createElement("div",{className:"home-category-text-inner"})))),n))),l.a.createElement("div",{className:"home-category-mobile"},l.a.createElement(d.a,{path:"/p/".concat(a.path)},l.a.createElement("div",{className:"home-category-banner",style:{backgroundImage:"url(".concat(a.banner,")")}},l.a.createElement("div",{className:"home-category-inner-text"}))),l.a.createElement("div",{style:{paddingTop:"0.5em"}},l.a.createElement(u.a,{data:n,numMobile:2.5,numMedium:3,numDesktop:5})))):null)},N=t(124),b=(t(240),t(241),function(e){var a=e.data;return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("div",{className:"news-card-image",style:{backgroundImage:"url(".concat(a.image,")")}},l.a.createElement("div",{className:"news-card-inner-text"},"1")),l.a.createElement("h3",null,l.a.createElement(d.a,{path:"/tin-tuc/".concat(a.path),className:"news-card-title"},a.title)),l.a.createElement("div",{style:{opacity:.7,marginBottom:"1em"}},a.summary),l.a.createElement("div",{style:{flexGrow:1}}),l.a.createElement(d.a,{path:"/tin-tuc/".concat(a.path)},l.a.createElement("span",{className:"news-card-more"},"\u0110\u1eccC TI\u1ebeP ",l.a.createElement("i",{className:"fas fa-caret-right"}))))}),y=t(4),_=function(){var e=Object(r.useState)({list:[]}),a=Object(c.a)(e,2),t=a[0],i=a[1],m=Object(y.f)();Object(r.useEffect)((function(){Object(E.a)("/news?page=1&item_per_page=3&type_news=0",{timeout:2e4}).then((function(e){return i(Object(n.a)({},t,{list:e.data.list}))}))}),[]);var o=t.list.map((function(e,a){return l.a.createElement("div",{style:{padding:"0.5em"}},l.a.createElement(b,{data:e}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"home-news-title"},l.a.createElement(d.a,{path:"/tin-tuc"},l.a.createElement("div",{className:"home-news-title-text",style:{backgroundColor:"var(--main-bg-color)"}},"TIN T\u1ee8C"))),l.a.createElement("section",{className:"home-news-container-mobile"},l.a.createElement(u.a,{data:o,numDesktop:3,numMedium:2,numMobile:1})),l.a.createElement("section",{className:"home-news-button-container"},l.a.createElement("button",{className:"home-news-button",onClick:function(){m.push("/tin-tuc")}},"Xem th\xeam")))},k=t(242),w=t.n(k),j=t(243),O=t.n(j),x=t(143),T=t.n(x),C=t(144),D=t.n(C),I=t(95),M=(t(244),function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement(p.a,null,l.a.createElement("section",{className:"home-header-wrapper"},l.a.createElement("div",{className:"home-navigation"},l.a.createElement(I.a,{animation:!0,width:"100%",height:"18em",extraStyle:{}})),l.a.createElement("div",{className:"home-slide-container"},l.a.createElement("div",{className:"home-skeleton-slide-container"},l.a.createElement("div",{className:"home-skeleton-slide-element"},l.a.createElement(I.a,{animation:!0,width:"100%",height:"100%"})))),l.a.createElement("div",{className:"home-side"},l.a.createElement(I.a,{animation:!0,width:"100%",height:"49%"}),l.a.createElement(I.a,{animation:!0,width:"100%",height:"49%"}))),l.a.createElement("section",{className:"home-slider-nav"},l.a.createElement(I.a,{animation:!0,width:"100%",height:"7em"}))),l.a.createElement(p.a,null,l.a.createElement("section",{className:"home-banner-image-container"},l.a.createElement("div",{className:"home-skeleton-middle-container"},l.a.createElement("div",{className:"home-skeleton-middle-element"},l.a.createElement(I.a,{height:"100%",width:"100%",animation:!0}))),l.a.createElement("div",{className:"home-skeleton-middle-container"},l.a.createElement("div",{className:"home-skeleton-middle-element"},l.a.createElement(I.a,{height:"100%",width:"100%",animation:!0}))))))}),L=t(80),F=t(5),S=t(96);a.default=Object(m.b)((function(e){return{data:e.categoryDataReducer}}))((function(){var e=Object(m.c)(),a=Object(m.d)((function(e){return e.prefetchDataReducer.navigation})),t=Object(r.useState)([]),h=Object(c.a)(t,2),g=h[0],v=h[1],b=Object(r.useState)({isLoading:!0,list:[]}),k=Object(c.a)(b,2),j=k[0],x=k[1],C=Object(y.f)();Object(r.useEffect)((function(){return e(Object(s.h)()),Object(E.a)("/banner",{timeout:2e4}).then((function(e){var a=e.data.list.map((function(e){return{url:e.image_url,path:e.name}}));v(a)})).catch((function(e){return console.log(e)})),Object(E.a)("/category/detail",{timeout:2e4}).then((function(e){x(Object(n.a)({},j,{isLoading:!1,list:e.data.list}))})).catch((function(e){return console.log(e)})),function(){e(Object(s.b)())}}),[]);var I=a.map((function(e,a){return l.a.createElement("div",{className:"home-slider-nav-element",key:a},l.a.createElement(d.a,{path:"/p/".concat(e.path)},l.a.createElement("div",{className:"home-slider-nav-wrapper"},l.a.createElement("div",{className:"home-slider-nav-icon-container",style:{backgroundImage:"url(".concat(e.icon,")")}},l.a.createElement("div",{className:"home-slider-inner-text"})),l.a.createElement("div",{className:"home-slider-nav-name"},e.name))))})),R=Object(r.useRef)(null);return console.log(R),l.a.createElement("div",{ref:R},l.a.createElement(L.a,{title:"Trang ch\u1ee7",image_url:F.LOGO_DEFAULT,url:F.APP_URL,description:F.DESC_DEFAULT}),l.a.createElement(S.a,{ref:R.current}),j.isLoading?l.a.createElement(M,null):l.a.createElement("div",{className:"home-container"},l.a.createElement(p.a,null,l.a.createElement("section",{className:"home-header-wrapper"},l.a.createElement("div",{className:"home-navigation"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"home-slide-container"},l.a.createElement(i.a,{data:g,aspect_ratio:2.5,timeout:1e4})),l.a.createElement("div",{className:"home-side"},l.a.createElement("div",{className:"home-side-wrapper side-1",style:{backgroundImage:"url(".concat(w.a,")")},onClick:function(){C.push("/khuyen-mai")}},l.a.createElement("div",{className:"home-side-ripple"})),l.a.createElement("div",{className:"home-side-wrapper side-2",style:{backgroundImage:"url(".concat(O.a,")")},onClick:function(){C.push("/khuyen-mai")}},l.a.createElement("div",{className:"home-side-ripple"})))),l.a.createElement("section",{className:"home-slider-nav"},l.a.createElement("div",{className:"home-slider-body"},l.a.createElement(u.a,{data:I,isFixed:!1,numDesktop:6,numMedium:4,numMobile:2,isInterval:!0})))),l.a.createElement(p.a,null,l.a.createElement("section",{className:"home-banner-image-container"},l.a.createElement(d.a,{path:"/gioi-thieu/gioi-thieu-ve-cong-ty",className:"home-banner-image"},l.a.createElement("img",{style:{width:"100%"},src:T.a})),l.a.createElement(d.a,{path:"/ho-tro",className:"home-banner-image"},l.a.createElement("img",{style:{width:"100%"},src:D.a})))),l.a.createElement("section",{className:"home-product-sale"},l.a.createElement(p.a,null,l.a.createElement(N.a,null))),l.a.createElement("section",null,l.a.createElement(p.a,null,j.list.map((function(e,a){return a>1&&5!=a?null:l.a.createElement("div",{key:a,style:{marginTop:"2em"}},l.a.createElement(f,{category:e,index:a}))})))),l.a.createElement("section",null,l.a.createElement(p.a,null,l.a.createElement(_,null)))))}))},80:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(86);a.a=function(e){var a=e.title,t=e.description,l=e.url,i=e.image_url;return Object(n.useEffect)((function(){console.log(document.title),console.log(a)}),[a]),c.a.createElement(r.a,{defer:!1,titleTemplate:"%s | M\xe1y th\u1ef1c ph\u1ea9m Vi\u1ec7t Nh\u1eadt - M\xe1y th\u1ef1c ph\u1ea9m s\u1ed1 1 Vi\u1ec7t Nam",meta:[{name:"description",property:"og:description",content:t},{property:"og:title",content:a},{property:"og:url",content:l},{property:"og:image",content:i},{property:"og:image:type",content:"image/png"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image:src",content:i},{property:"twitter:title",content:a},{property:"twitter:description",content:t}]},c.a.createElement("title",null,a))}},84:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=(t(88),t(77)),l=t(79),i=t(28),m=t(4);a.a=function(e){var a=e.data,t=Object(i.c)();Object(m.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-card-container"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-image-container",style:{backgroundImage:"url(".concat(a.url_image_main,")")}},c.a.createElement("div",{className:"product-card-inner-text"},"Hello"),-1===a.price?null:c.a.createElement("div",{className:"product-card-toCard",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(l.a)({product_id:a.product_id,amount:1,price:a.price,sale_price:a.sale_price,url_image_main:a.url_image_main,name:a.name})),t(Object(l.i)())}},c.a.createElement("span",null,"Th\xeam v\xe0o gi\u1ecf h\xe0ng")),c.a.createElement("div",{className:"product-card-preview",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(l.l)({images:{url_image_main:a.url_image_main,url_image_1:a.url_image_1,url_image_2:a.url_image_2,url_image_3:a.url_image_3,url_image_4:a.url_image_4},details:{product_id:a.product_id,name:a.name,price:a.price,sale_price:a.sale_price,description_sale:a.description_sale,url_image_main:a.url_image_main}}))}},c.a.createElement("i",{className:"fas fa-eye"})),a.price!==a.sale_price&&-1!==a.price?c.a.createElement("div",{className:"product-card-sale-percent"},c.a.createElement("span",{className:"product-card-sale-span"},"".concat((100-a.sale_price/a.price*100).toFixed(),"%"))):null)),c.a.createElement("div",{className:"product-card-detail"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-name"},a.name)),c.a.createElement("div",{className:"product-card-price-container"},c.a.createElement("div",null,c.a.createElement("div",{className:"product-card-price"},a.price!==a.sale_price&&-1!==a.price?"".concat(Number(a.price).toLocaleString("en"),"\u0111"):""),c.a.createElement("div",{className:"product-card-sale_price"},-1===a.price?"Li\xean h\u1ec7":"".concat(Number(a.sale_price).toLocaleString("en"),"\u0111")))))))}},88:function(e,a,t){},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(78),c=t(1),r=t.n(c),l=(t(99),t(4));function i(e){var a=e.data,t=e.aspect_ratio,i=e.timeout,m=Object(c.useState)(0),o=Object(n.a)(m,2),s=o[0],u=o[1],d=Object(c.useRef)(null),p=Object(l.f)();return Object(c.useEffect)((function(){return d.current=setTimeout((function(){s===a.length-1?u(0):u((function(e){return e+1}))}),i),function(){return clearTimeout(d.current)}}),[s]),r.a.createElement("div",{className:"slide-container"},r.a.createElement("div",{className:"slide-slides-images",style:{marginLeft:"".concat(100*-s,"%")}},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"slide-image"},r.a.createElement("div",{className:"slide-image-element",style:{backgroundImage:"url(".concat(e.url,")"),paddingTop:"".concat(100/t,"%")},onClick:function(){p.push("/p/".concat(e.path))}},r.a.createElement("div",{className:"slide-text-inner"},"1")))}))),r.a.createElement("div",{className:"slide-slides-arrow-container left-arrow",onClick:function(){d.current&&clearTimeout(d.current),u(0===s?a.length-1:function(e){return e-1})}},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{className:"slide-slides-arrow-container right-arrow",onClick:function(){d.current&&clearTimeout(d.current),s===a.length-1?u(0):u((function(e){return e+1}))}},r.a.createElement("i",{className:"fas fa-chevron-right"})))}},99:function(e,a,t){}}]);
//# sourceMappingURL=9.a2353ba0.chunk.js.map