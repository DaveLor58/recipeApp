(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(6),a=c.n(r),s=(c(12),c(4)),o=c.n(s),p=c(7),u=c(2),l=c(5),j=c.n(l),h=c(0),b=function(e){var t=e.title,c=e.calories,n=e.image,i=e.ingredients;return Object(h.jsxs)("div",{className:j.a.recipe,children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("ol",{children:i.map((function(e){return Object(h.jsx)("li",{children:e.text})}))}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("img",{className:j.a.image,src:n,alt:""})]})},d=(c(15),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(u.a)(r,2),s=a[0],l=a[1],j=Object(n.useState)("chicken"),d=Object(u.a)(j,2),m=d[0],f=d[1];Object(n.useEffect)((function(){x()}),[m]);var x=function(){var e=Object(p.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("71a5cd26","&app_key=").concat("79b22a4302e32e026d90fcc8449a1829"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(s),l("")},className:"search-form",children:[Object(h.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)},style:{width:"370px",height:"2em"},placeholder:"Type Recipe Here"}),Object(h.jsx)("button",{className:"search-button",type:"submit",style:{height:"50px",cursor:"pointer"},children:"Search"})]}),Object(h.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(h.jsx)(b,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),m()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__1DA6n",image:"recipe_image__SITmq"}}},[[16,1,2]]]);
//# sourceMappingURL=main.cc16eed6.chunk.js.map