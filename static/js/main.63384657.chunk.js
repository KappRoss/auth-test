(this["webpackJsonpauth-test"]=this["webpackJsonpauth-test"]||[]).push([[0],{27:function(e,t,n){e.exports={AuthPage:"authPage_AuthPage__2WZrl"}},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),i=n(16),r=n.n(i),a=(n(38),n(39),n(13)),u=n(3),o=n(26),j=n(27),d=n.n(j),l=n(11),h="AUTH_LOG_IN",b="AUTH_SIGN_UP",O="ADMIN_AUTH",g="AUTH_ERROR",p="LOG_OUT",m=(Math.random(),Math.random(),n(1)),x=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,adminLogin:e.auth.adminLogin,adminPassword:e.auth.adminPassword,isAdmin:e.auth.isAdmin,error:e.auth.error,success:e.auth.success}}),{auth:function(e,t,n,s){return function(c,i){(s&&n&&c({type:O}),n)?1===i().auth.users.filter((function(n){return n.userName===e&&n.userPass===t})).length?c({type:h}):c({type:g}):c(function(e,t){return{type:b,login:e,password:t}}(e,t))}},logOut:function(){return function(e){e({type:p})}}})((function(e){var t=e.adminLogin,n=e.adminPassword,c=e.auth,i=e.isAuth,r=e.isAdmin,a=e.error,u=e.success,j=e.logOut,l=Object(s.useState)(""),h=Object(o.a)(l,2),b=h[0],O=h[1],g=Object(s.useState)(""),p=Object(o.a)(g,2),x=p[0],f=p[1];return Object(m.jsx)("div",{className:d.a.AuthPage,children:i?Object(m.jsxs)("div",{children:["You are log in as ",r?Object(m.jsx)("span",{children:"'ADMIN'"}):Object(m.jsx)("span",{children:"'USER'"}),Object(m.jsx)("button",{onClick:j,children:"Log out"})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Auth Page"}),Object(m.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"login",children:"Your Email/Nick"}),Object(m.jsx)("input",{type:"text",id:"login",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Your password"}),Object(m.jsx)("input",{type:"password",id:"password",value:x,onChange:function(e){return f(e.target.value)}}),a?Object(m.jsx)("span",{style:{color:"red"},children:"Wrong pass or login"}):null]})]}),Object(m.jsx)("button",{onClick:function(){c(b,x,!0,b===t&&x===n)},children:"Log in"}),Object(m.jsx)("button",{onClick:function(){return c(b,x,!1,!1)},children:"Sign up"}),u?Object(m.jsx)("span",{children:"Sign up success! Now log in!"}):null]})})})),f=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"InfoPage"})})},A=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"AdminPage"})})},v=Object(l.b)((function(e){return{isAdmin:e.auth.isAdmin}}))((function(e){var t=e.isAdmin;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"navMenu",children:[Object(m.jsx)("div",{children:Object(m.jsx)(a.b,{to:"/",children:"Auth "})}),Object(m.jsx)("div",{children:Object(m.jsx)(a.b,{to:"/info-page",children:"Info page"})}),Object(m.jsx)("div",{children:t?Object(m.jsx)(a.b,{to:"/admin-page",children:"Admin page"}):null})]}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/info-page",component:f}),Object(m.jsx)(u.a,{exact:!0,path:"/admin-page",component:A}),Object(m.jsx)(u.a,{exact:!0,path:"/",component:x})]})]})})),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))},w=n(29),P=n(8),N=n(12),S=n(9),E={isAuth:!1,token:null,users:[{userName:"k@mail.ru",userPass:"1234"},{userName:"test@mail.ua",userPass:"1234"}],adminLogin:"admin",adminPassword:"admin",isAdmin:!1,error:!1,success:!1};var L=n(33),y=n(31),T=n(32),I=n.n(T),k=n(25),U=Object(P.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(S.a)(Object(S.a)({},e),{},{isAdmin:!0,isAuth:!0});case h:return Object(S.a)(Object(S.a)({},e),{},{isAuth:!0,error:!1});case b:return Object(S.a)(Object(S.a)({},e),{},{users:[].concat(Object(N.a)(e.users),[{userName:t.login,userPass:t.password}]),success:!0});case g:return Object(S.a)(Object(S.a)({},e),{},{error:!0});case p:return Object(S.a)(Object(S.a)({},e),{},{isAuth:!1,success:!1,isAdmin:!1});default:return e}}}),C={key:"root",storage:I.a,whitelist:["auth"]},D=Object(k.a)(C,U),F=Object(L.a)(),M=Object(P.e)(D,Object(P.d)(Object(P.a)(F,y.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),R=Object(k.b)(M);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(l.a,{store:M,children:Object(m.jsx)(w.a,{persistor:R,loading:null,children:Object(m.jsx)(a.a,{children:Object(m.jsx)(v,{})})})})}),document.getElementById("root")),_()}},[[48,1,2]]]);
//# sourceMappingURL=main.63384657.chunk.js.map