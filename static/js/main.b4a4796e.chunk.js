(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{168:function(e,t,c){},169:function(e,t,c){},499:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),r=c(6),s=c.n(r),a=(c(168),c.p,c(169),c(518)),i=c(521),l=c(46),j=c(5),u=Object(a.a)((function(e){return console.log(e),{menuBox:{display:"flex",flexDirection:"column",height:e.spacing(0),width:e.spacing(11)},menuText:{color:e.palette.text.secondary}}})),d=function(){var e=u();return Object(j.jsx)("div",{children:Object(j.jsxs)(i.a,{open:!0,className:e.menuBox,BackdropProps:{invisible:!0},children:[Object(j.jsx)(l.b,{to:"/",children:"Home"}),Object(j.jsx)(l.b,{to:"/Weather",children:"Weather"})]})})},x=c(13),b=(c(175),c(159)),p=c.n(b),h=Object(a.a)((function(e){return console.log(e),{weatherBox:{display:"flex",flexDirection:"column",overflow:"scroll"}}})),O=function(){var e=Object(o.useState)(),t=Object(x.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(),s=Object(x.a)(r,2),a=s[0],i=s[1],l=Object(o.useState)([]),u=Object(x.a)(l,2),d=u[0],b=u[1],O=h();return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),i(e.coords.longitude)})),Object(o.useEffect)((function(){p.a.getForecast("default",c,a).then((function(e){b(e.data.properties.periods),console.log(e.data.properties.periods)})).catch((function(e){return console.log(e)}))}),[c,a]),Object(j.jsx)("div",{className:O.weatherBox,children:d.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.icon}),Object(j.jsx)("br",{}),e.name,Object(j.jsx)("br",{}),"Temperature : ",e.temperature,Object(j.jsx)("br",{}),"Short Forcast : ",e.shortForecast,Object(j.jsx)("br",{}),"Forcast : ",e.detailedForecast]},e.number)}))})},f=c(3),m=(c(198),function(){return Object(j.jsx)("div",{children:"Home!!"})}),g=Object(a.a)((function(e){return console.log(e),{appBox:{display:"flex",flexDirection:"row",width:e.spacing(100),position:"relative",left:e.spacing(10),overflow:"scroll"},displayBox:{overflow:"scroll"},menuBox:{display:"flex",flexDirection:"column",height:e.spacing(0),width:e.spacing(15)},menuText:{color:e.palette.text.secondary}}})),v=function(){var e=g();return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:e.appBox,children:[Object(j.jsx)("div",{className:e.menuBox,children:Object(j.jsx)(d,{})}),Object(j.jsxs)(f.c,{className:e.displayBox,children:[Object(j.jsx)(f.a,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(f.a,{path:"/Weather",element:Object(j.jsx)(O,{})})]})]})})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[499,1,2]]]);
//# sourceMappingURL=main.b4a4796e.chunk.js.map