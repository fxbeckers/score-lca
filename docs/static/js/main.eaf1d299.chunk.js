(this.webpackJsonpscore=this.webpackJsonpscore||[]).push([[0],{98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(32),i=n(62),c=n(13),s=n(150),o=n(145),u=n(146),j=n(141),d=n(144),b=n(154),h=n(155),x=n(140),f=n(156),O=n(157),v=n(158),p=n(159),m=n(151),g=n(149),S=n(143),y=n(48),C=n(2),T=function(e){var t=e.children;return Object(C.jsx)(s.a,{display:"flex",justifyContent:"space-between",p:1,children:t})},k=function(e){var t=e.field,n=e.label,a=e.options;return Object(C.jsx)(y.a,{name:t,defaultValue:"",rules:{required:!0},render:function(e){var t=e.field,l=e.fieldState.error;return Object(C.jsx)(T,{children:Object(C.jsxs)(o.a,{fullWidth:!0,error:!!l,children:[Object(C.jsx)(u.a,{children:n}),Object(C.jsx)(j.a,{value:t.value,onChange:function(e){return t.onChange(e.target.value)},label:n,children:a.map((function(e){return Object(C.jsx)(d.a,{value:e.value,children:e.label},e.value)}))}),l?Object(C.jsx)(b.a,{children:null===l||void 0===l?void 0:l.message}):null]})})}})},w=function(e){var t=e.field,n=e.label;return Object(C.jsx)(y.a,{name:t,defaultValue:"",rules:{required:!0},render:function(e){var t=e.field,a=e.fieldState.error;return Object(C.jsx)(T,{children:Object(C.jsx)(h.a,{fullWidth:!0,InputLabelProps:{shrink:!0},label:n,type:"number",variant:"outlined",value:t.value,onChange:function(e){return t.onChange(e.target.value)},error:!!a,helperText:null===a||void 0===a?void 0:a.message})})}})};var F=function(){var e=Object(y.c)({defaultValues:{age:"",lmt:"",pts:"",satt:""}}),t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],o=n[1];return Object(C.jsxs)(l.a.Fragment,{children:[Object(C.jsx)(x.a,{}),Object(C.jsx)(f.a,{position:"static",children:Object(C.jsx)(O.a,{children:Object(C.jsx)(v.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"THABUS"})})}),Object(C.jsx)(y.b,Object(i.a)(Object(i.a)({},e),{},{children:Object(C.jsx)("form",{noValidate:!0,onSubmit:e.handleSubmit((function(e){var t=-3.967-.082*e.age+.321*e.pts+.154*e.satt+.846*e.lmt,n=1/(1+Math.pow(2.71828,-t)),a=Math.round(100*n);o(a)})),children:Object(C.jsx)(p.a,{component:"main",maxWidth:"sm",sx:{mb:4},children:Object(C.jsxs)(m.a,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[Object(C.jsx)(w,{field:"age",label:"Age"}),Object(C.jsx)(w,{field:"pts",label:"Posterior Tibial Slope"}),Object(C.jsx)(w,{field:"satt",label:"Static Anterior Tibial Translation"}),Object(C.jsx)(k,{field:"lmt",label:"Lateral Meniscus Tear",options:[{label:"Yes",value:1},{label:"No",value:0}]}),Object(C.jsxs)(T,{children:[Object(C.jsx)(g.a,{type:"submit",variant:"contained",children:"Calcute Graft Rupture Risk"}),Object(C.jsx)(g.a,{color:"error",onClick:function(){e.reset(),o(null)},variant:"contained",children:"Reset"})]}),Object(C.jsx)(T,{children:r?Object(C.jsxs)(s.a,{display:"flex",flexDirection:"column",gap:"8px",children:[Object(C.jsx)(h.a,{label:"Risk",variant:"outlined",value:"".concat(r,"%"),InputProps:{readOnly:!0,style:{fontWeight:"bold",fontSize:26},fullWidth:!0}}),Object(C.jsx)(S.a,{severity:"info",children:Object(C.jsx)(v.a,{variant:"h5",component:"h5",children:"Blablabla post op"})})]}):null})]})})})}))]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),r(e),i(e)}))};n(98);r.render(Object(C.jsx)(a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root")),P()}},[[99,1,2]]]);
//# sourceMappingURL=main.eaf1d299.chunk.js.map