(function(t){function a(a){for(var e,r,l=a[0],o=a[1],c=a[2],f=0,d=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"1f4f":function(t,a,s){t.exports=s.p+"img/contact.757f621e.svg"},2745:function(t,a,s){},"31aa":function(t,a,s){},"330f":function(t,a,s){"use strict";var e=s("31aa"),i=s.n(e);i.a},"385e":function(t,a,s){t.exports=s.p+"img/vue1.276d8c36.jpg"},"4e36":function(t,a,s){t.exports=s.p+"img/TNA.18d520f6.jpg"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app","data-spy":"scroll","data-offset":"50"}},[s("navbar"),s("mobNav"),s("top"),s("mainCont"),s("contactMe")],1)},n=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-navbar",{attrs:{type:"dark",variant:"dark"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#about"}},[t._v("About")]),s("b-nav-item",{attrs:{href:"#skills"}},[t._v("Skills")]),s("b-nav-item",{attrs:{href:"#projects"}},[t._v("Projects")]),s("b-nav-item",{attrs:{href:"#contact"}},[t._v("Contact")])],1)],1)],1)},l=[],o={mounted:function(){var t=document.querySelector(".bg-dark"),a=t.offsetTop;window.document.onscroll=function(){window.scrollY>a?(t.classList.add("sticky"),document.body.style.paddingTop=t.offsetHeight+"px"):(t.classList.remove("sticky"),document.body.style.paddingTop=0)}}},c=o,u=(s("c770"),s("2877")),f=Object(u["a"])(c,r,l,!1,null,"9683be68",null),d=f.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrap",attrs:{id:"about"}},[e("b-jumbotron",[e("h1",[t._v("Hi!")]),e("h3",[t._v("I'm "),e("span",{staticClass:"highlight"},[t._v("Hamza")])]),e("h1",[e("span",{staticClass:"highlight"},[t._v("A front-end ")]),t._v(" web developer")]),e("h4",[t._v(" As a person who loves solving problems and technology, coding is the most "),e("span",{staticClass:"highlight"},[t._v("fun and challenging")]),t._v(" thing I do, and building stuff used by many people is one of my goals as it makes me proud. ")]),e("a",{attrs:{href:"#skills"}},[e("b-button",{attrs:{variant:"outline-primary"}},[t._v("Know More "),e("i",{staticClass:"fas fa-arrow-down"})])],1)]),e("img",{attrs:{src:s("91ad")}})],1),t._m(0)])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://www.linkedin.com/in/hamza-zaitoun-b88280102/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin fa-2x"})]),s("a",{attrs:{href:"https://github.com/DevClick-Hz",target:"_blank"}},[s("i",{staticClass:"fab fa-github-square fa-2x"})])])}],h={name:"top"},m=h,b=(s("94d9"),Object(u["a"])(m,p,v,!1,null,"c9849490",null)),g=b.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap"},[t._m(0),s("div",{staticClass:"pro-row",attrs:{id:"projects"}},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:3e3,indicators:"",controls:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":t.img1}},[s("div",{staticClass:"pro-desc"},[s("div",{staticClass:"pro-txt"},[s("h3",[t._v("Electronic-X")]),s("p",[t._v("An e-commerce website")]),s("p",[t._v("Vue-Vuex-CSS-Bootstrap-vue")]),s("p",[t._v("*Note*: I'm still working on this project")])]),s("div",{staticClass:"btns"},[s("a",{attrs:{href:"https://electrnoic-x.firebaseapp.com/"}},[s("button",[s("i",{staticClass:"fas fa-globe-europe"}),t._v(" visit website ")])]),s("a",{attrs:{href:"https://github.com/DevClick-Hz/Electronic-X"}},[s("button",[s("i",{staticClass:"fas fa-code"}),t._v(" Watch Code")])])])])]),s("b-carousel-slide",{attrs:{"img-src":t.img2}},[s("div",{staticClass:"pro-desc"},[s("div",{staticClass:"pro-txt"},[s("h3",[t._v("TNA")]),s("p",[t._v(" TNA is a website use NYT API to display Top NewYork Times articles ")]),s("p",[t._v("Vue-APIs-SCSS")])]),s("div",{staticClass:"btns"},[s("a",{attrs:{href:"https://top-nyt-articles.firebaseapp.com/"}},[s("button",[s("i",{staticClass:"fas fa-globe-europe"}),t._v(" visit website ")])]),s("a",{attrs:{href:"https://github.com/DevClick-Hz/TNA"}},[s("button",[s("i",{staticClass:"fas fa-code"}),t._v(" Watch Code")])])])])])],1),t._m(1),s("h1",{staticClass:"pro-word"},[t._v("Projects")])],1)])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"skill-row",attrs:{id:"skills"}},[e("div",{staticClass:"skill-img"},[e("img",{attrs:{src:s("fcb9")}})]),e("div",{staticClass:"skill-card"},[e("p",[t._v(" I'm a "),e("span",{staticClass:"highlight"},[t._v("self-taught")]),t._v(" front-end web developer. I usually learn the same skill from multiple "),e("span",{staticClass:"highlight"},[t._v(" famous and trusted")]),t._v(" online academies such as Codecademy, Freecodecamp, Udacity, and LinkedIn Learning to make sure I get the most of what I'm learning. I also read articles daily on many websites such as medium and Vue developers to stay "),e("span",{staticClass:"highlight"},[t._v("updated with the latest technology")]),t._v(" in the web development. I'm a "),e("span",{staticClass:"highlight"},[t._v("fast learner")]),t._v(" and within less than 8 months I was able to learn the following skills: "),e("span",{staticClass:"highlight2"},[t._v("HTML5")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("CSS3")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("JavaScript")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("Bootstrap4")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("Vuejs")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("Sass")]),t._v(" | "),e("span",{staticClass:"highlight2"},[t._v("Git")])])]),e("h1",{staticClass:"skill-word"},[t._v("SKILLS")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pro-img"},[e("img",{attrs:{src:s("6eed"),alt:""}})])}],w={data:function(){return{slide:0,sliding:null,img1:s("385e"),img2:s("4e36")}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},y=w,k=(s("c721"),s("f14d"),Object(u["a"])(y,_,C,!1,null,"ddb6cffa",null)),x=k.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contact"}},[e("h1",[t._v("Reach out to me")]),e("div",{staticClass:"wrap"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:s("1f4f")}}),e("h5",[t._v("zaytoun.hamza@hotmail.com")]),e("h5",[e("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Sweden")])]),e("div",{staticClass:"info"},[e("h2",[t._v("Like what you see? Send me an email...")]),e("form",{attrs:{name:"contact",method:"POST","data-netlify":"true"}},[e("div",{staticClass:"name-form"},[e("input",{attrs:{type:"text",name:"name",required:""}}),e("label",{staticClass:"label-name",attrs:{for:"name"}},[e("span",{staticClass:"content-name"},[t._v("Name")])])]),e("div",{staticClass:"email-form"},[e("input",{attrs:{type:"email",name:"email",required:""}}),e("label",{staticClass:"label-email",attrs:{for:"email"}},[e("span",{staticClass:"content-email"},[t._v("Email")])])]),e("p",[t._v("Message")]),e("textarea"),e("button",{staticClass:"sub-btn",attrs:{type:"submit"}},[t._v(" Submit "),e("i",{staticClass:"fas fa-paper-plane"})])])])])])}],O={},E=O,T=(s("c475"),Object(u["a"])(E,S,j,!1,null,"fc70e1b8",null)),I=T.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mob-nav"},[s("a",{staticClass:"nav-link",attrs:{href:"#about"}},[s("i",{staticClass:"fas fa-user"}),s("p",[t._v("About")])]),s("a",{staticClass:"nav-link",attrs:{href:"#skills"}},[s("i",{staticClass:"fas fa-cogs"}),s("p",[t._v("Skills")])]),s("a",{staticClass:"nav-link",attrs:{href:"#projects"}},[s("i",{staticClass:"far fa-window-restore"}),s("p",[t._v("Projects")])]),s("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[s("i",{staticClass:"fas fa-envelope"}),s("p",[t._v("Contact")])])])}],A=(s("330f"),{}),N=Object(u["a"])(A,P,$,!1,null,"8cdeb856",null),M=N.exports,z={components:{navbar:d,top:g,mainCont:x,contactMe:I,mobNav:M}},L=z,H=(s("5c0b"),Object(u["a"])(L,i,n,!1,null,null,null)),V=H.exports,q=s("8c4f");e["default"].use(q["a"]);var D=[],J=new q["a"]({mode:"history",base:"/",routes:D}),Y=J,B=s("5f5b");s("f9e3"),s("2dd8");e["default"].use(B["a"]),e["default"].config.productionTip=!1,new e["default"]({router:Y,render:function(t){return t(V)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var e=s("9c0c"),i=s.n(e);i.a},"6eed":function(t,a,s){t.exports=s.p+"img/projects.1e8ef79d.svg"},"83a7":function(t,a,s){},"91ad":function(t,a,s){t.exports=s.p+"img/me.efe715ce.svg"},"94d9":function(t,a,s){"use strict";var e=s("e6f3"),i=s.n(e);i.a},"9c0c":function(t,a,s){},"9c69":function(t,a,s){},a249:function(t,a,s){},c475:function(t,a,s){"use strict";var e=s("a249"),i=s.n(e);i.a},c721:function(t,a,s){"use strict";var e=s("83a7"),i=s.n(e);i.a},c770:function(t,a,s){"use strict";var e=s("9c69"),i=s.n(e);i.a},e6f3:function(t,a,s){},f14d:function(t,a,s){"use strict";var e=s("2745"),i=s.n(e);i.a},fcb9:function(t,a,s){t.exports=s.p+"img/skills.1b9172de.svg"}});
//# sourceMappingURL=app.de460a06.js.map