(this.webpackJsonpewebsite=this.webpackJsonpewebsite||[]).push([[16],{258:function(e,t,l){},269:function(e,t,l){"use strict";l.r(t);var n=l(78),a=l(1),r=l.n(a),o=(l(258),l(81)),c=l(82),i=l(15),s=l(93),u=l.n(s),p=l(29),m=l.n(p),d=function(){return(d=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e){for(var t=e.url,l=e.allowFullScreen,n=e.position,a=e.display,o=e.height,c=e.width,i=e.overflow,s=e.styles,u=e.onLoad,p=e.onMouseOver,y=e.onMouseOut,f=e.scrolling,g=e.id,h=e.frameBorder,b=e.ariaHidden,w=e.sandbox,v=e.allow,E=e.className,O=e.title,j=e.ariaLabel,L=e.ariaLabelledby,k=e.name,N=e.target,S=e.loading,_=e.importance,q=e.referrerpolicy,A=e.allowpaymentrequest,M=e.src,P=m()({src:M||t,target:N||null,style:{position:n||null,display:a||"block",overflow:i||null},scrolling:f||null,allowpaymentrequest:A||null,importance:_||null,sandbox:w||null,loading:S||null,styles:s||null,name:k||null,className:E||null,referrerpolicy:q||null,title:O||null,allow:v||null,id:g||null,"aria-labelledby":L||null,"aria-hidden":b||null,"aria-label":j||null,width:c||null,height:o||null,onLoad:u||null,onMouseOver:p||null,onMouseOut:y||null}),T=Object.create(null),F=0,C=Object.keys(P);F<C.length;F++){var x=C[F];null!=P[x]&&(T[x]=P[x])}for(var D=0,G=Object.keys(T.style);D<G.length;D++){var J=G[D];null==T.style[J]&&delete T.style[J]}if(l)if("allow"in T){var U=T.allow.replace("fullscreen","");T.allow=("fullscreen "+U.trim()).trim()}else T.allow="fullscreen";return h>=0&&(T.style.hasOwnProperty("border")||(T.style.border=h)),r.a.createElement("iframe",d({},T))},f=l(80),g=l(5);t.default=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),l=t[0],s=t[1];return Object(a.useEffect)((function(){Object(i.a)("/news/lien-he-voi-cong-ty",{timeout:2e4}).then((function(e){s(e.data.news)})).catch((function(e){}))}),[]),r.a.createElement(o.a,null,r.a.createElement(f.a,{title:"Li\xean h\u1ec7",description:g.DESC_DEFAULT,url:g.APP_URL,image_url:g.LOGO_DEFAULT}),r.a.createElement(c.a,{data:[{name:"Trang ch\u1ee7",path:"/"},{name:"Li\xean h\u1ec7"}]}),r.a.createElement("section",null,u()(l.body)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(y,{width:"600",height:"450",frameBorder:"0",style:"border:0",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyAZqGStqXSlWXGI0lbz4Prqvd9VX6kJAjg &q=CT1+-+The+Pride+Condominium",allowFullScreen:!0})))}},80:function(e,t,l){"use strict";var n=l(1),a=l.n(n),r=l(86);t.a=function(e){var t=e.title,l=e.description,o=e.url,c=e.image_url;return Object(n.useEffect)((function(){console.log(document.title),console.log(t)}),[t]),a.a.createElement(r.a,{defer:!1,titleTemplate:"%s | M\xe1y th\u1ef1c ph\u1ea9m Vi\u1ec7t Nh\u1eadt - M\xe1y th\u1ef1c ph\u1ea9m s\u1ed1 1 Vi\u1ec7t Nam",meta:[{name:"description",property:"og:description",content:l},{property:"og:title",content:t},{property:"og:url",content:o},{property:"og:image",content:c},{property:"og:image:type",content:"image/png"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:image:src",content:c},{property:"twitter:title",content:t},{property:"twitter:description",content:l}]},a.a.createElement("title",null,t))}},82:function(e,t,l){"use strict";var n=l(1),a=l.n(n),r=l(77);l(83);t.a=function(e){var t=e.data;return a.a.createElement("p",{className:"product-category"},t.map((function(e,l){return l!==t.length-1?a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,{path:"".concat(e.path)},a.a.createElement("span",{className:"product-link-c"},"".concat(e.name))),a.a.createElement("span",{className:"product-path-divider"},">")):a.a.createElement("span",{className:"product-link-c",style:{fontWeight:"bold"}}," ",e.name)})))}},83:function(e,t,l){}}]);
//# sourceMappingURL=16.0aac1ee4.chunk.js.map