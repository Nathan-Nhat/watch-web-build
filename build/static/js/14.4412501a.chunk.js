(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[14,15],{100:function(e,t,a){"use strict";function c(e){var t,a,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=c(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=c(e))&&(n&&(n+=" "),n+=t);return n}},116:function(e,t,a){},117:function(e,t,a){e.exports=a.p+"static/media/empty-cart.66ff55e9.png"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"TableCell",(function(){return g})),a.d(t,"default",(function(){return E}));var c=a(1),n=a.n(c),l=(a(116),a(28)),r=a(100),i=a(79),o=a(77),m=a(86),s=a(82),u=a(81),h=a(117),p=a.n(h),d=a(80),g=function(e){var t=e.className,a=e.children,c=e.align;return n.a.createElement("td",{className:Object(r.a)(t,"tc","center"===c&&"tc-center","left"===c&&"tc-left","right"===c&&"tc-right")},a)};function E(){var e=Object(l.d)((function(e){return e.cartReducer})),t=Object(l.c)(),a=Object(c.useMemo)((function(){return e.reduce((function(e,t){return e+t.amount*t.sale_price}),0)}),[e]);return Object(c.useEffect)((function(){}),[]),n.a.createElement(u.a,null,n.a.createElement(d.a,{title:"Gi\u1ecf h\xe0ng"}),n.a.createElement(s.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:"Gi\u1ecf h\xe0ng"}]}),n.a.createElement("div",{className:"cart-container"},n.a.createElement("div",{className:"cart-title"},"Gi\u1ecf h\xe0ng"),n.a.createElement("hr",{className:"cart-divider"}),0===e.length?n.a.createElement("div",{className:"cart-image-container"},n.a.createElement("img",{src:p.a,className:"cart-image"}),n.a.createElement("p",null,"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong gi\u1ecf h\xe0ng!")):n.a.createElement("div",null,n.a.createElement("div",{className:"cart-container-desktop"},n.a.createElement("table",{className:"cart-table"},n.a.createElement("tr",null,n.a.createElement(g,{align:"center",className:"cart-table-head"},"\u1ea2nh s\u1ea3n ph\u1ea9m"),n.a.createElement(g,{align:"center",className:"cart-table-head"},"T\xean s\u1ea3n ph\u1ea9m"),n.a.createElement(g,{align:"center",className:"cart-table-head"},"\u0110\u01a1n gi\xe1"),n.a.createElement(g,{align:"center",className:"cart-table-head"},"S\u1ed1 l\u01b0\u1ee3ng"),n.a.createElement(g,{align:"center",className:"cart-table-head"},"Th\xe0nh ti\u1ec1n"),n.a.createElement(g,{align:"center",className:"cart-table-head"},"X\xf3a")),e.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement(g,{align:"center"},n.a.createElement(o.a,{path:"/product/".concat(e.product_id)},n.a.createElement("img",{style:{width:"5em",height:"5em"},src:e.url_image_main}))),n.a.createElement(g,{align:"left"},e.name),n.a.createElement(g,{align:"center"},Number(e.sale_price).toLocaleString("en")),n.a.createElement(g,{align:"center"},n.a.createElement("button",{className:"cart-button-add",onClick:function(){var a=Number(e.amount)+1;t(Object(i.c)({product_id:e.product_id,amount:a}))}},"+"),n.a.createElement("input",{className:"cart-input-amount",type:"number",value:e.amount,onChange:function(a){Number(a.target.value)<=0||t(Object(i.c)({product_id:e.product_id,amount:Number(a.target.value)}))}}),n.a.createElement("button",{className:"cart-button-add",onClick:function(){var a=Number(e.amount)-1;a<=0||t(Object(i.c)({product_id:e.product_id,amount:a}))}},"-")),n.a.createElement(g,{align:"center"},Number(e.amount*e.sale_price).toLocaleString("en")),n.a.createElement(g,{align:"center"},n.a.createElement("div",{className:"cart-button-delete",onClick:function(){t(Object(i.q)({product_id:e.product_id}))}},n.a.createElement("i",{className:"far fa-trash-alt"}))))}))),n.a.createElement("div",{className:"cart-table-price-container"},n.a.createElement(o.a,{path:"/"},n.a.createElement("div",{className:"cart-button-more"},"Xem th\xeam m\u1eb7t h\xe0ng")),n.a.createElement("div",{style:{flexGrow:1}}),n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement(g,{align:"left"},"T\u1ea1m t\xednh"),n.a.createElement(g,{align:"right",className:"cart-price"},"".concat(Number(a).toLocaleString("en"),"\u0111"))),n.a.createElement("tr",null,n.a.createElement(g,{align:"left"},"T\u1ed5ng ti\u1ec1n thanh to\xe1n"),n.a.createElement(g,{align:"right",className:"cart-price"},"".concat(Number(a).toLocaleString("en"),"\u0111")))),n.a.createElement(o.a,{path:"/thanh-toan"},n.a.createElement("div",{className:"cart-button-more btn-checkout"},"Thanh to\xe1n"))))),n.a.createElement("div",{className:"cart-container-mobile"},e.map((function(e,a){return n.a.createElement("div",{key:a,style:{padding:"0.5em"}},n.a.createElement("div",{className:"cart-element-mobile"},n.a.createElement(m.a,{data:{product_id:e.product_id,price:e.price,sale_price:e.sale_price,url_image_main:e.url_image_main,name:e.name}}),n.a.createElement("div",{className:"cart-element-right"},n.a.createElement("div",null,n.a.createElement("button",{className:"cart-button-add",onClick:function(){var a=Number(e.amount)+1;t(Object(i.c)({product_id:e.product_id,amount:a}))}},"+"),n.a.createElement("input",{className:"cart-input-amount",type:"number",value:e.amount,onChange:function(a){Number(a.target.value)<=0||t(Object(i.c)({product_id:e.product_id,amount:Number(a.target.value)}))}}),n.a.createElement("button",{className:"cart-button-add",onClick:function(){var a=Number(e.amount)-1;a<=0||t(Object(i.c)({product_id:e.product_id,amount:a}))}},"-")),n.a.createElement("div",{className:"cart-button-delete delete-mobile",onClick:function(){t(Object(i.q)({product_id:e.product_id}))}},n.a.createElement("i",{className:"far fa-trash-alt"})," X\xf3a"))),n.a.createElement("hr",{className:"cart-divider card-main"}))})),n.a.createElement("div",{style:{textAlign:"center"}},"T\u1ed5ng ti\u1ec1n thanh to\xe1n"),n.a.createElement("div",{style:{textAlign:"center",marginTop:"0.5em",marginBottom:"0.5em"},className:"cart-price"},"".concat(Number(a).toLocaleString("en"),"\u0111")),n.a.createElement(o.a,{path:"/thanh-toan"},n.a.createElement("div",{className:"cart-button-more btn-checkout"},"Thanh to\xe1n")),n.a.createElement(o.a,{path:"/"},n.a.createElement("div",{className:"cart-button-more-mobile"},"Xem th\xeam m\u1eb7t h\xe0ng"))))))}},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=(a(254),a(81)),r=a(82),i=a(31),o=a(5),m=a(78),s=(a(255),a(15)),u=a(77),h=a(28),p=a(79),d=a(4),g=function(e){var t=new RegExp("<[^>]*script");return!e.match(t)||(console.log("Match!!!!!!!!"),!1)},E=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)([]),E=Object(m.a)(r,2),f=E[0],b=E[1],N=Object(c.useState)(!1),k=Object(m.a)(N,2),v=k[0],y=k[1],_=Object(c.useState)([]),j=Object(m.a)(_,2),x=j[0],C=j[1],w=Object(h.c)(),T=Object(c.useState)({name:"",phone_number_1:"",phone_number_2:"",city:1,district:1,ward:1,address:"",vat_required:0,tax_number:"",company_name:"",company_address:"",payment_method:0,ship_method:0,time_ship:0}),O=Object(m.a)(T,2),S=O[0],L=O[1],q=Object(c.useState)({name:{isError:!1,message:""},phone:{isError:!1,message:""},address:{isError:!1,message:""},tax_number:{isError:!1,message:""},company_name:{isError:!1,message:""},company_address:{isError:!1,message:""}}),F=Object(m.a)(q,2),A=F[0],R=F[1],V=Object(d.f)();Object(c.useEffect)((function(){Object(s.a)("/location/city",{timeout:2e4}).then((function(e){l(e.data.list)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){0!==S.city&&(C([]),Object(s.a)("/location/city/".concat(S.city,"/district"),{timeout:2e4}).then((function(e){b(e.data.list)})).catch((function(e){console.log(e)})))}),[S.city]),Object(c.useEffect)((function(){0!==S.district&&Object(s.a)("/location/district/".concat(S.district,"/ward"),{timeout:2e4}).then((function(e){C(e.data.list)})).catch((function(e){console.log(e)}))}),[S.district]);var z=function(e){var t=e.target.name,a=e.target.value;L(Object(o.a)({},S,Object(i.a)({},t,a)))},G=Object(h.d)((function(e){return e.cartReducer}));return n.a.createElement("section",null,n.a.createElement("p",{className:"checkout-left-title-info"},n.a.createElement("i",{className:"fas fa-map-marker-alt checkout-left-icon"}),"Th\xf4ng tin mua h\xe0ng"),n.a.createElement("div",{className:"checkout-left-body-info"},n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"H\u1ecd v\xe0 t\xean (*)"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("input",{className:"checkout-left-input",placeholder:"Nh\u1eadp h\u1ecd v\xe0 t\xean",type:"text",name:"name",value:S.name,onChange:z}),A.name.isError?n.a.createElement("p",{className:"checkout-left-error"},A.name.message):null)),n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i (*)"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("div",{className:"checkout-left-phone-container"},n.a.createElement("input",{className:"checkout-left-input inline-input",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",type:"number",name:"phone_number_1",value:S.phone_number_1,onChange:z}),n.a.createElement("input",{className:"checkout-left-input inline-input",placeholder:"S\u1ed1 kh\xe1c (T\xf9y ch\u1ecdn)",type:"number",name:"phone_number_2",value:S.phone_number_2,onChange:z})),A.phone.isError?n.a.createElement("p",{className:"checkout-left-error"},A.phone.message):null)),n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"T\u1ec9nh/Tp"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("select",{className:"checkout-left-input select-input",name:"city",onChange:z,value:S.city},n.a.createElement("option",{value:1},"Ch\u1ecdn t\u1ec9nh/th\xe0nh ph\u1ed1"),a.map((function(e,t){return 1===e.id?null:n.a.createElement("option",{value:e.id,key:t}," ",e.name)}))))),n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"Qu\u1eadn/Huy\u1ec7n"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("select",{className:"checkout-left-input select-input",name:"district",onChange:z,value:S.district},n.a.createElement("option",{value:1},"Ch\u1ecdn qu\u1eadn/huy\u1ec7n"),f.map((function(e,t){return 1===e.id?null:n.a.createElement("option",{value:e.id,key:t}," ",e.name)}))))),n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"Ph\u01b0\u1eddng/X\xe3"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("select",{className:"checkout-left-input select-input",name:"ward",onChange:z,value:S.ward},n.a.createElement("option",{value:1},"Ch\u1ecdn ph\u01b0\u1eddng/x\xe3"),x.map((function(e,t){return 1===e.id?null:n.a.createElement("option",{value:e.id,key:t}," ",e.name)}))))),n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"\u0110\u1ecba ch\u1ec9"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("textarea",{className:"checkout-left-input text-area-input",type:"text",placeholder:"Nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 \u0111\u1ecba ch\u1ec9, s\u1ed1 nh\xe0, ph\u01b0\u1eddng/x\xe3,...",name:"address",value:S.address,onChange:z}),A.address.isError?n.a.createElement("p",{className:"checkout-left-error"},A.address.message):null)),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"center"}},n.a.createElement("input",{type:"checkbox",className:"checkout-left-input-checkbox",id:"check-out-left-checkbox-1",placeholder:"Nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 \u0111\u1ecba ch\u1ec9, s\u1ed1 nh\xe0, ph\u01b0\u1eddng/x\xe3,...",name:"vat_required",value:S.vat_required,onChange:function(e){var t=e.target.name,a=e.target.checked?1:0;L(Object(o.a)({},S,Object(i.a)({},t,a)))}}),n.a.createElement("label",{htmlFor:"check-out-left-checkbox-1",className:"checkout-left-body-checkbox"},"Y\xeau c\u1ea7u VIETNHAT xu\u1ea5t h\xf3a \u0111\u01a1n VAT cho c\xf4ng ty ho\u1eb7c t\u1ed5 ch\u1ee9c")),S.vat_required?n.a.createElement("div",null,n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"M\xe3 s\u1ed1 thu\u1ebf"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("input",{className:"checkout-left-input",placeholder:"Nh\u1eadp m\xe3 s\u1ed1 thu\u1ebf",name:"tax_number",value:S.tax_number,onChange:z}),A.tax_number.isError?n.a.createElement("p",{className:"checkout-left-error"},A.tax_number.message):null)),n.a.createElement("div",null,n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"T\xean c\xf4ng ty"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("input",{className:"checkout-left-input",placeholder:"Nh\u1eadp t\xean c\xf4ng ty tr\xean h\xf3a \u0111\u01a1n",name:"company_name",value:S.company_name,onChange:z}),A.company_name.isError?n.a.createElement("p",{className:"checkout-left-error"},A.company_name.message):null))),n.a.createElement("div",null,n.a.createElement("div",{className:"checkout-left-input-container input-mobile-available"},n.a.createElement("p",{className:"checkout-left-title"},"\u0110\u1ecba ch\u1ec9"),n.a.createElement("div",{className:"checkout-left-input-wrapper"},n.a.createElement("input",{className:"checkout-left-input",placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 c\xf4ng ty",name:"company_address",value:S.company_address,onChange:z}),A.company_address.isError?n.a.createElement("p",{className:"checkout-left-error"},A.company_address.message):null)))):null),n.a.createElement("p",{className:"checkout-left-title-info",style:{marginTop:"1em"}},n.a.createElement("i",{className:"far fa-credit-card",style:{marginRight:"0.5em",color:"var(--second-bg-color)",fontSize:"1.2em"}}),"Ch\u1ecdn h\xecnh th\u1ee9c thanh to\xe1n"),n.a.createElement("div",{className:"checkout-left-body-info",style:{padding:"2em",paddingBottom:"1em"}},n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"payment-method-1",name:"payment_method",value:0,onChange:z,checked:0===Number(S.payment_method)}),n.a.createElement("label",{htmlFor:"payment-method-1",className:"checkout-left-body-checkbox"},"Giao h\xe0ng v\xe0 thu ti\u1ec1n t\u1ea1i nh\xe0")),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"payment-method-2",name:"payment_method",value:1,onChange:z,checked:1===Number(S.payment_method)}),n.a.createElement("label",{htmlFor:"payment-method-2",className:"checkout-left-body-checkbox"},"Nh\u1eadn h\xe0ng v\xe0 thanh to\xe1n tr\u1ef1c ti\u1ebfp t\u1ea1i c\u1eeda h\xe0ng"))),n.a.createElement("p",{className:"checkout-left-title-info",style:{marginTop:"1em"}},n.a.createElement("i",{className:"fa fa-truck",style:{marginRight:"0.5em",color:"var(--second-bg-color)",fontSize:"1.2em"}}),"Ch\u1ecdn h\xecnh th\u1ee9c v\u1eadn chuy\u1ec3n"),n.a.createElement("div",{className:"checkout-left-body-info",style:{padding:"2em",paddingTop:"1em",paddingBottom:"1em"}},n.a.createElement("p",null,"C\xe1ch th\u1ee9c v\u1eadn chuy\u1ec3n:"),n.a.createElement("div",{style:{paddingLeft:"1em"}},n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"ship-method-1",name:"ship_method",value:0,onChange:z,checked:0===Number(S.ship_method)}),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"ship-method-1",className:"checkout-left-body-checkbox"},"V\u1eadn chuy\u1ec3n mi\u1ec5n ph\xed"),n.a.createElement("div",{style:{fontWeight:"bold",paddingLeft:"0.5em",paddingTop:"0.5em"}},"N\u1ed9i th\xe0nh H\xe0 N\u1ed9i d\u01b0\u1edbi 10km"))),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"ship-method-2",name:"ship_method",value:1,onChange:z,checked:1===Number(S.ship_method)}),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"ship-method-2",className:"checkout-left-body-checkbox"},"V\u1eadn chuy\u1ec3n c\xf3 ph\xed"),n.a.createElement("div",{style:{fontWeight:"bold",paddingLeft:"0.5em",paddingTop:"0.5em"}},"T\u1eeb Km th\u1ee9 10 tr\u1edf \u0111i v\u1eadn chuy\u1ec3n 13.000 \u0111\u1ed3ng/km"))),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"ship-method-3",name:"ship_method",value:2,onChange:z,checked:2===Number(S.ship_method)}),n.a.createElement("label",{htmlFor:"ship-method-3",className:"checkout-left-body-checkbox"},"Qu\xfd kh\xe1ch nh\u1eadn h\xe0ng t\u1ea1i VIETNHAT")),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"ship-method-4",name:"ship_method",value:3,onChange:z,checked:3===Number(S.ship_method)}),n.a.createElement("label",{htmlFor:"ship-method-4",className:"checkout-left-body-checkbox"},"Mu\u1ed1n th\u1ecfa thu\u1eadn v\u1edbi VIETNHAT"))),n.a.createElement("p",null,"Th\u1eddi gian giao h\xe0ng:"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"time-ship-1",name:"time_ship",value:0,onChange:z,checked:0===Number(S.time_ship)}),n.a.createElement("label",{htmlFor:"time-ship-1",className:"checkout-left-body-checkbox"},"B\u1ea5t k\xec")),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"time-ship-2",name:"time_ship",value:1,onChange:z,checked:1===Number(S.time_ship)}),n.a.createElement("label",{htmlFor:"time-ship-2",className:"checkout-left-body-checkbox"},"Trong gi\u1edd h\xe0nh ch\xednh")),n.a.createElement("div",{className:"checkout-left-input-container",style:{justifyContent:"flex-start"}},n.a.createElement("input",{type:"radio",className:"checkout-left-input-checkbox",id:"time-ship-3",name:"time_ship",value:2,onChange:z,checked:2===Number(S.time_ship)}),n.a.createElement("label",{htmlFor:"time-ship-3",className:"checkout-left-body-checkbox"},"Ngo\xe0i gi\u1edd h\xe0nh ch\xednh")))),n.a.createElement("div",{className:"checkout-right-total-left"},v?null:n.a.createElement(u.a,{path:"/cart"},n.a.createElement("p",{className:"checkout-right-total-left-more"},"Quay v\u1ec1 gi\u1ecf h\xe0ng")),n.a.createElement("button",{className:"checkout-left-button",onClick:function(){if(0===G.length)return alert("Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o trong gi\u1ecf h\xe0ng. Tr\u1edf v\u1ec1 xem th\xeam s\u1ea3n ph\u1ea9m"),void V.push("/");if(""===S.name)return R(Object(o.a)({},A,{name:{isError:!0,message:"You need to fill in this field"}})),void window.scrollTo(0,0);if(""===S.phone_number_1&&""===S.phone_number_2)return R(Object(o.a)({},A,{phone:{isError:!0,message:"You need to fill at least 1 phone number"}})),void window.scrollTo(0,0);if(!g(S.name))return R(Object(o.a)({},A,{name:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);if(!g(S.phone_number_1)||!g(S.phone_number_2))return R(Object(o.a)({},A,{name:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);if(!g(S.address))return R(Object(o.a)({},A,{address:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);if(!g(S.tax_number))return R(Object(o.a)({},A,{tax_number:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);if(!g(S.company_name))return R(Object(o.a)({},A,{company_name:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);if(!g(S.company_address))return R(Object(o.a)({},A,{company_address:{isError:!0,message:"Chu\u1ed7i kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t!"}})),void window.scrollTo(0,0);var e={name:S.name,phone_number_1:S.phone_number_1,phone_number_2:S.phone_number_2,city_id:S.city,district_id:S.district,ward_id:S.ward,address:S.address,vat_required:S.vat_required,tax_number:S.tax_number,company_name:S.company_name,company_address:S.company_address,payment_method:S.payment_method,ship_method:S.ship_method,time_ship:S.time_ship,list_orders:G.map((function(e){return{product_id:e.product_id,quantity:e.amount}}))};y(!0),Object(s.b)("/order",e,{timeout:2e4}).then((function(e){console.log(e),y(!1),w(Object(p.j)({order_id:e.data.order_id}))})).catch((function(e){y(!1),alert("Error when sending request! Please try again")}))},disabled:!!v},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-shopping-cart",style:{marginRight:"0.5em"}}),v?"\u0110ang g\u1eedi \u0111\u01a1n h\xe0ng...":"\u0110\u1eb7t h\xe0ng"))))},f=(a(256),a(144)),b=a(101),N=function(){var e=Object(h.d)((function(e){return e.cartReducer})),t=Object(c.useMemo)((function(){return e.reduce((function(e,t){return e+t.amount*t.sale_price}),0)}),[e]),a=Object(c.useMemo)((function(){return e.reduce((function(e,t){return e+t.amount}),0)}),[e]);return n.a.createElement("div",{className:"checkout-right-container-root"},n.a.createElement("p",{className:"checkout-left-title-info"},n.a.createElement("i",{className:"fa fa-shopping-cart checkout-left-icon"}),"\u0110\u01a1n h\xe0ng (".concat(a," s\u1ea3n ph\u1ea9m)")),n.a.createElement("div",{className:"checkout-right-body"},n.a.createElement("table",{className:"checkout-right-table"},n.a.createElement("tr",{style:{borderBottom:"1px solid black"}},n.a.createElement(f.TableCell,{align:"left",className:"checkout-right-cell cell-header"},"S\u1ea3n ph\u1ea9m"),n.a.createElement(f.TableCell,{align:"center",className:"checkout-right-cell cell-header"},"S\u1ed1 l\u01b0\u1ee3ng"),n.a.createElement(f.TableCell,{align:"center",className:"checkout-right-cell cell-header checkout-right-mobile"},"\u0110\u01a1n gi\xe1"),n.a.createElement(f.TableCell,{align:"center",className:"checkout-right-cell cell-header total-price-element"},"Th\xe0nh ti\u1ec1n")),e.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement(f.TableCell,{align:"center",className:"checkout-right-cell"},n.a.createElement(u.a,{path:"/product/".concat(e.product_id)},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("img",{style:{width:"4em",height:"4em"},src:e.url_image_main}),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("span",{className:"checkout-right-name"},e.name))))),n.a.createElement(f.TableCell,{align:"center",className:"checkout-right-cell"},e.amount),n.a.createElement(f.TableCell,{className:"checkout-right-cell checkout-right-mobile",align:"center"},n.a.createElement("div",null,n.a.createElement("div",{style:{fontSize:"1.05em"}},"".concat(Number(e.sale_price).toLocaleString("en"),"\u0111")),n.a.createElement("div",{style:{fontSize:"1.05em",textDecoration:"line-through"}},"".concat(Number(e.price).toLocaleString("en"),"\u0111")))),n.a.createElement(f.TableCell,{className:"checkout-right-cell total-price-element",align:"center"},"".concat(Number(e.amount*e.sale_price).toLocaleString("en"),"\u0111")))})))),n.a.createElement("div",{className:"checkout-right-total"},n.a.createElement("div",{className:"checkout-right-total-right"},n.a.createElement("div",{className:"checkout-right-total-right-row"},n.a.createElement("span",{className:"checkout-right-total-right-row-title"},"T\u1ea1m t\xednh:"),n.a.createElement("span",{className:"checkout-right-total-right-row-body"},"".concat(Number(t).toLocaleString("vi"),"\u0111"))),n.a.createElement("div",{className:"checkout-right-total-right-row"},n.a.createElement("span",{className:"checkout-right-total-right-row-title"},"Ph\xed v\u1eadn chuy\u1ec3n:"),n.a.createElement("span",{className:"checkout-right-total-right-row-body"},"Li\xean h\u1ec7")),n.a.createElement(b.a,null),n.a.createElement("div",{className:"checkout-right-total-right-row",style:{fontWeight:"bold",fontSize:"1em"}},n.a.createElement("span",{className:"checkout-right-total-right-row-title"},"T\u1ed5ng ti\u1ec1n:"),n.a.createElement("span",{className:"checkout-right-total-right-row-body",style:{color:"var(--third-bg-color)"}},"".concat(Number(t).toLocaleString("vi"),"\u0111"))))))},k=a(80);t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(k.a,{title:"Thanh to\xe1n"}),n.a.createElement(r.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:"Gi\u1ecf h\xe0ng",path:"/cart"},{name:"Thanh to\xe1n"}]}),n.a.createElement("section",{className:"checkout-container"},n.a.createElement("div",{className:"checkout-right-container checkout-1"},n.a.createElement(N,null)),n.a.createElement("div",{className:"checkout-left-container"},n.a.createElement(E,null)),n.a.createElement("div",{className:"checkout-right-container checkout-2"},n.a.createElement(N,null))))}},80:function(e,t,a){"use strict";var c=a(1),n=a.n(c),l=a(87);a(84);t.a=function(e){var t={title:e.title,description:"\u0110i\u1ec7n m\xe1y Vi\u1ec7t Nh\u1eadt chuy\xean kinh doanh m\xe1y th\u1ef1c ph\u1ea9m, thi\u1ebft b\u1ecb nh\xe0 b\u1ebfp, m\xe1y n\u1ea5y ph\u1edf, m\xe1y v\u1eb7t l\xf4ng g\xe0, v\u1ecbt,... v\u1edbi ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t v\xe0 phong c\xe1ch ph\u1ee5c v\u1ee5 chuy\xean nghi\u1ec7p!",url:"https://dienmayvietnhat.com/",image:"https://shopadmin.s3-ap-southeast-1.amazonaws.com/logo/Logo-share.png"};return n.a.createElement(l.a,{title:t.title,meta:[{name:"description",property:"og:description",content:t.description},{property:"og:title",content:t.title},{property:"og:url",content:t.url},{property:"og:image",content:t.image},{property:"og:image:type",content:"image/png"},{property:"twitter:image:src",content:t.image},{property:"twitter:title",content:t.title},{property:"twitter:description",content:t.description}]})}},82:function(e,t,a){"use strict";var c=a(1),n=a.n(c),l=a(77);a(83);t.a=function(e){var t=e.data;return n.a.createElement("p",{className:"product-category"},t.map((function(e,a){return a!==t.length-1?n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{path:"".concat(e.path)},n.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),n.a.createElement("span",{className:"product-path-divider"},">")):n.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,t,a){}}]);
//# sourceMappingURL=14.4412501a.chunk.js.map