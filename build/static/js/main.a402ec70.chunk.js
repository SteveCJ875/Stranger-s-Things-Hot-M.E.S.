(this.webpackJsonpStrangers_Things=this.webpackJsonpStrangers_Things||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(43),a=n(34),s=n(11),c=n(3),o=n(0),i=n(9),l=n.n(i),u=n(100),p=n(103),j=n(105),d=(Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),function(){return Object(c.jsx)(p.a,{position:"absolute",style:{background:"#008080"},children:Object(c.jsx)(j.a,{children:"Stanger Things"})})}),b=n(30),h=n(12),x=n.n(h),f=n(15),O=(n(68),n(109)),g=n(106),m=n(110),v=n(107),y="https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT",w=function(){return localStorage.getItem("auth-token")},k=function(e){localStorage.setItem("auth-token",e)};function S(){var e={"Content-Type":"application/json"};return w()&&(e.Authorization="Bearer ".concat(w())),e}var C=function(){var e=Object(f.a)(x.a.mark((function e(t,n){var r,a,s,c,o,i,l=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>2&&void 0!==l[2]&&l[2],a="".concat(y,"/users")+(r?"/register":"/login"),e.next=4,fetch(a,{method:"POST",headers:S(),body:JSON.stringify({user:{username:t,password:n}})});case 4:return s=e.sent,e.next=7,s.json();case 7:if(c=e.sent,o=c.error,i=c.data,!o){e.next=12;break}throw Error(o.message);case 12:return i&&i.token&&k(i.token),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(x.a.mark((function e(t,n,r){var a,s,c,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:t,headers:S()},r&&(a.body=JSON.stringify(r)),e.next=4,fetch("".concat(y).concat(n),a);case 4:return s=e.sent,e.next=7,s.json();case 7:if(c=e.sent,o=c.error,i=c.data,!o){e.next=12;break}throw Error(o.message);case 12:return i&&i.token&&k(i.token),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(e){var t,n=e.addNewPost,r=e._id,a=e.setEditablePost,i=e.updatePost,l=Object(o.useState)(""),u=Object(s.a)(l,2),p=u[0],j=u[1],d=Object(o.useState)(""),h=Object(s.a)(d,2),y=h[0],w=h[1],k=Object(o.useState)(""),S=Object(s.a)(k,2),C=S[0],T=S[1],E=Object(o.useState)(""),L=Object(s.a)(E,2),N=L[0],R=L[1],D=Object(o.useState)(!1),I=Object(s.a)(D,2),_=I[0],B=I[1];Object(o.useEffect)((function(){j(e.title||""),w(e.description||""),T(e.price||""),R(e.location||""),B(e.willDeliver||!1)}),[r]);var A=Object(o.useState)(!1),U=Object(s.a)(A,2),G=U[0],H=U[1];return Object(c.jsx)("div",{style:{paddingBottom:"2000px",bottom:"500px"},children:Object(c.jsxs)("form",{className:"post-form",style:{gridTemplateColumns:"repeat2 1fr",maxWidth:"200px",gap:"8px",bottom:"500px"},onSubmit:function(){var e=Object(f.a)(x.a.mark((function e(t){var s,c,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==p.length){e.next=4;break}return H(!0),e.abrupt("return");case 4:if(s={post:{title:p,description:y,price:C,willDeliver:_}},N.length>0&&(s.post.location=N),e.prev=6,!r){e.next=15;break}return e.next=10,P("PATCH","/posts/".concat(r),s);case 10:c=e.sent,i(c.post),a({}),e.next=20;break;case 15:return e.next=17,P("POST","/posts",s);case 17:o=e.sent,n(o.post),j(""),w(""),T(""),R(""),B(!1);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}(),children:[r?Object(c.jsx)("h3",{children:"Update Your Post"}):Object(c.jsx)("h3",{children:"Create Post"}),Object(c.jsx)(O.a,{type:"text",value:p,placeholder:"Title here",onChange:function(e){j(e.target.value)}}),G&&0===p.length?Object(c.jsx)("h3",{style:{color:"red"},children:"You need a title"}):null,Object(c.jsx)(g.a,(t={"aria-label":"minimum height",rowsMin:3,placeholder:"Minimum 3 rows",type:"text",value:y},Object(b.a)(t,"placeholder","Description here"),Object(b.a)(t,"onChange",(function(e){w(e.target.value)})),t)),Object(c.jsx)(O.a,{type:"text",value:C,placeholder:"Price here",onChange:function(e){T(e.target.value)}}),Object(c.jsx)(O.a,{type:"text",value:N,placeholder:"location here",onChange:function(e){R(e.target.value)}}),Object(c.jsx)(m.a,{checked:_,inputProps:{"aria-label":"primary checkbox"},onChange:function(){B(!_)}}),Object(c.jsx)(v.a,{type:"onSubmit",children:"Post"})]})})},E=function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],i=e.wantsToReply,l=e.setReply;console.log(e);var u=function(){var t=Object(f.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(e.wantsToReply,"this comes from props to comment component"),console.log(e),a={message:{content:r}},t.next=6,P("POST","/posts/".concat(i,"/messages"),a);case 6:l("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("form",{onSubmit:u,children:Object(c.jsx)(O.a,{type:"text",value:r,placeholder:"comment here",onChange:function(e){a(e.target.value)}})}),Object(c.jsx)(v.a,{type:"submit",onClick:u,children:"Send"})]})},L=function(e){var t=e.messageList;return console.log(t,"this is props"),Object(c.jsx)("div",{className:"message",children:t.map((function(e,t){return console.log("mes",e),Object(c.jsxs)("div",{className:"message-card",children:[Object(c.jsxs)("h1",{children:[" from : ",e.fromUser.username]}),Object(c.jsx)("p",{children:e.content})]},t)}))})},N=function(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1],l=e.postList,u=e.setPostList;return Object(c.jsxs)("div",{className:"post-list",style:{display:"grid",gap:"8px",gridColumn:1,gridRow:2,overflowY:"scroll",padding:"8px"},children:[Object(c.jsx)("h3",{children:" Posts Are Here!"}),l.map((function(e,t){return Object(c.jsxs)("div",{className:"post",style:{border:e.isAuthor?"5px solid gold":"1px solid brown",overflow:"scroll"},children:[Object(c.jsxs)("h5",{children:[e.title," (",e.location,") [",e.createdAt,"]"]}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("div",{children:r===e._id?Object(c.jsx)(E,{wantsToReply:r,setReply:i}):null}),Object(c.jsxs)("div",{children:[e.isAuthor?Object(c.jsxs)("div",{children:[Object(c.jsxs)(v.a,{variant:"contained",color:"primary",id:e._id,onClick:Object(f.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hey",e._id),t.next=3,P("DELETE","/posts/".concat(e._id));case 3:u(Object(a.a)(l));case 4:case"end":return t.stop()}}),t)}))),children:[" ","DELETE"]}),Object(c.jsx)(v.a,{onClick:function(){setEditablePost(e)},children:" Edit"})]}):Object(c.jsx)(v.a,{variant:"contained",style:{background:"#B1B9B9"},onClick:function(){var t=Object(f.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e._id),i(e._id);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"reply"}),Object(c.jsx)(L,{messageList:e.messages})]})]},t)}))]})},R=n(108),D=function(e){var t=e.setIsLoggedIn,n=Object(o.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1],l=Object(o.useState)(""),u=Object(s.a)(l,2),p=u[0],j=u[1],d=Object(o.useState)(null),b=Object(s.a)(d,2),h=b[0],g=b[1];return Object(c.jsx)(R.a,{fixed:!0,children:Object(c.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(c.jsx)("h3",{children:"Register or Log In"}),h?Object(c.jsx)("h5",{className:"error",children:h}):null,Object(c.jsx)(O.a,{type:"text",value:a,onChange:function(e){return i(e.target.value)},placeholder:"username"}),Object(c.jsx)("br",{}),Object(c.jsx)(O.a,{type:"password",value:p,onChange:function(e){return j(e.target.value)},placeholder:"password"}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(a,p,!0);case 3:e.sent,t(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:"Register"}),Object(c.jsx)(v.a,{variant:"contained",onClick:function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(a,p);case 3:e.sent,t(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:"Log In"})]})]})})},I=function(){var e=Object(o.useState)(!!w()),t=Object(s.a)(e,2),n=t[0],i=t[1],l=Object(o.useState)([]),u=Object(s.a)(l,2),p=u[0],j=u[1],b=Object(o.useState)(""),h=Object(s.a)(b,2),x=h[0],f=h[1],O=Object(o.useState)(!1),g=Object(s.a)(O,2),y=g[0],k=g[1],S=Object(o.useState)(!1),C=Object(s.a)(S,2),E=C[0],L=C[1],R=Object(o.useState)([]),I=Object(s.a)(R,2),_=I[0],B=I[1],A=Object(o.useState)({}),U=Object(s.a)(A,2),G=U[0],H=U[1];return Object(o.useEffect)((function(){n?P("get","/users/me").then((function(e){var t=e.messages;B(t)})).catch(console.error):B([])}),[n]),Object(o.useEffect)((function(){P("GET","/posts").then((function(e){console.log("first data",e);var t=e.posts;j(t)})).catch(console.error)}),[n]),Object(c.jsxs)("div",{className:"app",style:{display:"grid",gridTemplateColumns:"1fr 360px",gridTemplateRows:"auto 1fr"},children:[Object(c.jsx)(d,{style:{position:"sticky",gridRow:1,gridColumn:"1 / 6",marginBottom:"12px",background:"#000",color:"#fff",padding:"8px"}}),Object(c.jsx)("div",{children:n?Object(c.jsxs)("div",{style:{},children:[Object(c.jsx)("h3",{children:"Thanks for logging in!"}),Object(c.jsx)(v.a,{style:{width:"5rem",height:"5rem"},onClick:function(){localStorage.removeItem("auth-token"),i(!1)},children:"LOG OUT"})]}):Object(c.jsx)(D,{setIsLoggedIn:i})}),Object(c.jsx)("input",{style:{top:"80px",position:"relative",height:"20px",width:"200px"},type:"text",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Search Here"}),Object(c.jsxs)("label",{style:{height:"40px"},children:["Recent Post Only",Object(c.jsx)(m.a,{checked:y,inputProps:{"aria-label":"primary checkbox"},onChange:function(){k(!y)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)(N,{postList:p.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())})).filter((function(e){return!y||Date.parse(e.createdAt)+144e5>=Date.now()})).reverse(),setPostList:j}),n?Object(c.jsx)(T,Object(r.a)(Object(r.a)({addNewPost:function(e){j([].concat(Object(a.a)(p),[e]))},updatePost:function(e){var t=p.findIndex((function(t){return t._id===e._id}));if(t>-1){var n=Object(a.a)(p);n[t]=e,j(n)}}},G),{},{setEditablePost:H})):null,Object(c.jsxs)("div",{className:"personal-messages",style:{position:"fixed",bottom:"12px",right:"12px"},children:[E?Object(c.jsx)("div",{className:"personal-message-list",style:{padding:"12px",overflowY:"scroll",background:"#ddf",marginBottom:"12px",boxShadow:"0 2px 4px -2px black",borderRadius:"4px",fontFamily:"sans-serif"},children:_.map((function(e,t){return Object(c.jsxs)("p",{children:["On ",e.post.title,", ",e.fromUser.username," says:"," ",e.content]},t)}))}):null,Object(c.jsx)("div",{className:"personal-message-list-toggle",style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",maxHeight:"480px"},children:Object(c.jsx)("span",{className:"material-icons",style:{padding:"6px",borderRadius:"50%",background:"#f88",color:"#fff"},onClick:function(){return L(!E)},children:"mail"})})]})]})};l.a.render(Object(c.jsx)(I,{}),document.getElementById("app"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a402ec70.chunk.js.map