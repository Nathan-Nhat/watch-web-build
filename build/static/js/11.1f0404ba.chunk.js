(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[11],{110:function(e,a,t){},111:function(e,a,t){},114:function(e,a,t){"use strict";var n=t(1),c=t.n(n);t(77),t(115);a.a=function(e){var a=e.totalPage,t=e.currentPage,n=e.handlePage,r=function(e){for(var a=[],t=0;t<e;t++)a.push(t+1);return a}(a);return console.log(t),c.a.createElement("div",null,0===a?null:c.a.createElement("div",{className:"paginate-container"},c.a.createElement("div",{className:1!==Number(t)?"paginate-element":"paginate-element paginate-inactive",onClick:function(){n(Number(t)-1)}},"\xab"),r.map((function(e){return c.a.createElement("div",{className:"paginate-element",style:{backgroundColor:e==t?"var(--main-bg-color)":"white",color:e==t?"white":"black"},key:e,onClick:function(){n(e)}},e)})),c.a.createElement("div",{className:Number(t)!==a?"paginate-element":"paginate-element paginate-inactive",onClick:function(){n(Number(t)+1)}},"\xbb")))}},115:function(e,a,t){},124:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(28),i=t(85),l=(t(81),t(77)),o=(t(78),t(33),t(110),t(238),t(6),t(141)),m=(o.a,t(111),t(93));a.a=function(){var e=Object(r.d)((function(e){return e.prefetchDataReducer.hot_product})).map((function(e,a){return c.a.createElement("div",{key:a,className:"home-product-sale-element"},c.a.createElement(i.a,{data:e}))}));return c.a.createElement("div",{className:"home-product-sale-container"},c.a.createElement("div",{className:"home-product-sale-title"},c.a.createElement(l.a,{path:"/khuyen-mai"},c.a.createElement("span",{className:"home-product-sale-text-title"},"Khuy\u1ebfn m\xe3i \u0111\u1eb7c bi\u1ec7t")),c.a.createElement("div",{style:{flexGrow:1}})),c.a.createElement("div",{className:"home-product-sale-body"},c.a.createElement(m.a,{data:e,isFixed:!1,numDesktop:5,numMedium:4,numMobile:2,isInterval:!0})))}},249:function(e,a,t){},259:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(4),c=t(78),r=t(1),i=t.n(r),l=t(81),o=t(82),m=(t(124),t(5)),u=t(15),s=t(88),p=t(85),d=(t(249),t(114)),g=t(80);function v(){var e=Object(m.g)(),a=new URLSearchParams(e.search),t=a.get("query"),v=a.get("page"),h=Object(m.f)(),E=Object(r.useState)((function(){return{isLoading:!0,page:v,item_per_page:16,total:0,total_page:0,list:[]}})),_=Object(c.a)(E,2),f=_[0],N=_[1];Object(r.useEffect)((function(){N(Object(n.a)({},f,{isLoading:!0})),Object(u.a)("/all_product?query=".concat(t,"&page=").concat(v,"&item_per_page=").concat(f.item_per_page,"&order=is_hot,desc"),{timeout:2e4}).then((function(e){return N(Object(n.a)({},f,{isLoading:!1,item_per_page:e.data.item_per_page,page:e.data.page,total:e.data.total,total_page:e.data.total_page,list:e.data.list}))}))}),[t,v]);return i.a.createElement(l.a,null,i.a.createElement(g.a,{title:"T\xecm ki\u1ebfm : ".concat(t)}),f.isLoading?i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(s.a,null)):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:"T\xecm ki\u1ebfm"}]}),i.a.createElement("h2",null,"C\xf3 ".concat(f.total,' k\u1ebft qu\u1ea3 t\xecm ki\u1ebfm ph\xf9 h\u1ee3p v\u1edbi "').concat(t,'"')),i.a.createElement("div",{className:"search-product-container"},f.list.map((function(e,a){return i.a.createElement("div",{key:a,className:"search-product-element"},i.a.createElement(p.a,{data:e}))}))),i.a.createElement(d.a,{totalPage:f.total_page,currentPage:v,handlePage:function(e){window.scrollTo(0,0),h.push("/search?query=".concat(t,"&page=").concat(e))}})))}},80:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(87);t(84);a.a=function(e){var a={title:e.title,description:"\u0110i\u1ec7n m\xe1y Vi\u1ec7t Nh\u1eadt chuy\xean kinh doanh m\xe1y th\u1ef1c ph\u1ea9m, thi\u1ebft b\u1ecb nh\xe0 b\u1ebfp, m\xe1y n\u1ea5y ph\u1edf, m\xe1y v\u1eb7t l\xf4ng g\xe0, v\u1ecbt,... v\u1edbi ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\xe0 phong c\xe1ch ph\u1ee5c v\u1ee5 chuy\xean nghi\u1ec7p!",url:"https://dienmayvietnhat.com/",image:"https://shopadmin.s3-ap-southeast-1.amazonaws.com/logo/Logo-share.png"};return c.a.createElement(r.a,{title:a.title,meta:[{name:"description",property:"og:description",content:a.description},{property:"og:title",content:a.title},{property:"og:url",content:a.url},{property:"og:image",content:a.image},{property:"og:image:type",content:"image/png"},{property:"twitter:image:src",content:a.image},{property:"twitter:title",content:a.title},{property:"twitter:description",content:a.description}]})}},82:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=t(77);t(83);a.a=function(e){var a=e.data;return c.a.createElement("p",{className:"product-category"},a.map((function(e,t){return t!==a.length-1?c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{path:"".concat(e.path)},c.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),c.a.createElement("span",{className:"product-path-divider"},">")):c.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,a,t){},85:function(e,a,t){"use strict";var n=t(1),c=t.n(n),r=(t(89),t(77)),i=t(79),l=t(28),o=t(5);a.a=function(e){var a=e.data,t=Object(l.c)();Object(o.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-card-container"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-image-container",style:{backgroundImage:"url(".concat(a.url_image_main,")")}},c.a.createElement("div",{className:"product-card-inner-text"},"Hello"),-1===a.price?null:c.a.createElement("div",{className:"product-card-toCard",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(i.a)({product_id:a.product_id,amount:1,price:a.price,sale_price:a.sale_price,url_image_main:a.url_image_main,name:a.name})),t(Object(i.i)())}},c.a.createElement("span",null,"Th\xeam v\xe0o gi\u1ecf h\xe0ng")),c.a.createElement("div",{className:"product-card-preview",onClick:function(e){e.stopPropagation(),e.preventDefault(),t(Object(i.l)({images:{url_image_main:a.url_image_main,url_image_1:a.url_image_1,url_image_2:a.url_image_2,url_image_3:a.url_image_3,url_image_4:a.url_image_4},details:{product_id:a.product_id,name:a.name,price:a.price,sale_price:a.sale_price,description_sale:a.description_sale,url_image_main:a.url_image_main}}))}},c.a.createElement("i",{className:"fas fa-eye"})),a.price!==a.sale_price&&-1!==a.price?c.a.createElement("div",{className:"product-card-sale-percent"},c.a.createElement("span",{className:"product-card-sale-span"},"".concat((100-a.sale_price/a.price*100).toFixed(),"%"))):null)),c.a.createElement("div",{className:"product-card-detail"},c.a.createElement(r.a,{path:"/product/".concat(a.product_id),className:"product-card-link"},c.a.createElement("div",{className:"product-card-name"},a.name)),c.a.createElement("div",{className:"product-card-price-container"},c.a.createElement("div",null,c.a.createElement("div",{className:"product-card-price"},a.price!==a.sale_price&&-1!==a.price?"".concat(Number(a.price).toLocaleString("en"),"\u0111"):""),c.a.createElement("div",{className:"product-card-sale_price"},-1===a.price?"Li\xean h\u1ec7":"".concat(Number(a.sale_price).toLocaleString("en"),"\u0111")))))))}},88:function(e,a,t){"use strict";var n=t(1),c=t.n(n);t(90);a.a=function(){return c.a.createElement("div",{className:"loadingio-spinner-spinner-13x20mihomeg"},c.a.createElement("div",{className:"ldio-s0h8lnu9hzj"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}},89:function(e,a,t){},90:function(e,a,t){}}]);
//# sourceMappingURL=11.1f0404ba.chunk.js.map