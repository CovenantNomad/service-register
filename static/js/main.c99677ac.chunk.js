(this["webpackJsonpservice-register"]=this["webpackJsonpservice-register"]||[]).push([[0],{59:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(1),c=t.n(i),o=t(30),s=t.n(o),l=t(4),a=t(22),j=t(8),d=t(5),b=t(7);function u(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  display:flex;\n  justify-content: center;\n"]);return u=function(){return e},e}function f(){var e=Object(l.a)(["\n  display:flex;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 900;\n"]);return f=function(){return e},e}function x(){var e=Object(l.a)([""]);return x=function(){return e},e}function O(){var e=Object(l.a)(["\n  font-size: 32px;\n  font-weight: 900;\n  display: flex;\n  justify-content: center;\n  margin: 12px 0;\n"]);return O=function(){return e},e}function h(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 24px 12px;\n"]);return h=function(){return e},e}function m(){var e=Object(l.a)(["\n  background-color: black;\n  /* box-sizing: border-box; */\n  width: 90%;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #fff;\n  margin-bottom: 12px;\n"]);return m=function(){return e},e}var g=d.b.div(m()),v=d.b.div(h()),p=d.b.div(O()),y=d.b.div(x()),z=d.b.div(f()),S=d.b.div(u()),w=function(e){var n=e.title,t=e.openFunction,c=Object(i.useState)("00"),o=Object(b.a)(c,2),s=o[0],l=o[1],a=Object(i.useState)("00"),j=Object(b.a)(a,2),d=j[0],u=j[1],f=Object(i.useState)("00"),x=Object(b.a)(f,2),O=x[0],h=x[1],m=Object(i.useState)("00"),w=Object(b.a)(m,2),k=w[0],D=w[1],T=Object(i.useRef)();return Object(i.useEffect)((function(){!function(){var e=new Date("Jan 19, 2021 20:00:00").getTime();T=setInterval((function(){var n=(new Date).getTime(),r=e-n,i=Math.floor(r/864e5),c=Math.floor(r%864e5/36e5),o=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3);r<0?(clearInterval(T),t(!0)):(l(i),u(c),h(o),D(s))}),1e3)}()})),Object(r.jsxs)(g,{children:[Object(r.jsxs)(p,{children:[n," \uc2e0\uccad\uae4c\uc9c0"]}),Object(r.jsxs)(v,{children:[Object(r.jsxs)(y,{children:[Object(r.jsx)(z,{children:s}),Object(r.jsx)(S,{children:"\uc77c"})]}),Object(r.jsxs)(y,{children:[Object(r.jsx)(z,{children:d}),Object(r.jsx)(S,{children:"\uc2dc\uac04"})]}),Object(r.jsxs)(y,{children:[Object(r.jsx)(z,{children:O}),Object(r.jsx)(S,{children:"\ubd84"})]}),Object(r.jsxs)(y,{children:[Object(r.jsx)(z,{children:k}),Object(r.jsx)(S,{children:"\ucd08"})]})]})]})},k=t(16),D=t(42);function T(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n  width: 90%;\n  text-decoration: none;\n  background: #fff;\n  border: 2px #228be6 solid;\n  &:hover {\n    border: 2px red solid;\n  }\n  /* &:active {\n    background: #1c7ed6;\n    border: 2px #fff solid;\n  } */\n  \n"]);return T=function(){return e},e}var W=Object(d.b)(a.b)(T());var F=function(e){var n=e.children,t=Object(D.a)(e,["children"]);return Object(r.jsx)(W,Object(k.a)(Object(k.a)({},t),{},{children:n}))};function I(){var e=Object(l.a)(["\n  flex: 1;\n"]);return I=function(){return e},e}function C(){var e=Object(l.a)(["\n  margin-right: 1rem;\n  flex: 1;\n"]);return C=function(){return e},e}function M(){var e=Object(l.a)(["\n  margin-right: 1rem;\n  flex: 1;\n"]);return M=function(){return e},e}function q(){var e=Object(l.a)(["\n  display: flex;\n  color: black;\n  margin-bottom: 1rem;\n"]);return q=function(){return e},e}function B(){var e=Object(l.a)(["\n  padding-bottom: 1rem;\n  color: black;\n"]);return B=function(){return e},e}function L(){var e=Object(l.a)(["\n  flex: 3;\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 0.75rem;\n"]);return L=function(){return e},e}function A(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  border: 2px #228be6 solid;\n  background: #228be6;\n  padding: 1rem 0;\n"]);return A=function(){return e},e}var N=function(e){var n=e.days,t=e.title,i=e.time,c=e.open,o=e.remaining,s=e.linkTo,l=new Date;l.setDate(l.getDate()+(function(e){return"\uc218\uc694\uc77c"===e?3:"\uae08\uc694\uc77c"===e?5:"\uc77c\uc694\uc77c"===e?0:void 0}(n)+7-l.getDay())%7);return Object(r.jsxs)(F,{to:s,style:{margin:"20px 0"},onClick:function(e){c||e.preventDefault()},children:[Object(r.jsxs)(P,{children:[Object(r.jsxs)("div",{style:{fontSize:24,fontWeight:700},children:[l.getMonth()+1,"\uc6d4"]}),Object(r.jsxs)("div",{style:{fontSize:24,fontWeight:700},children:[l.getDate(),"\uc77c"]}),Object(r.jsx)("div",{style:{fontSize:12},children:n})]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(E,{children:Object(r.jsx)("div",{style:{fontSize:24,fontWeight:700},children:t})}),i.length<2?Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:i[0]}),Object(r.jsx)(K,{children:c?Object(r.jsx)(r.Fragment,{children:c&&0===o?Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\uc644\ub8cc"}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"#F97878"},children:"\uc2e0\uccad\uac00\ub2a5"})}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\ub300\uae30"})}),Object(r.jsxs)(R,{children:[o,"\uba85/70\uba85"]})]}):Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:i[0]}),Object(r.jsx)(K,{children:c?Object(r.jsx)(r.Fragment,{children:c&&0===o?Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\uc644\ub8cc"}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"#F97878"},children:"\uc2e0\uccad\uac00\ub2a5"})}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\ub300\uae30"})}),Object(r.jsxs)(R,{children:[o,"\uba85/70\uba85"]})]}),Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:i[1]}),Object(r.jsx)(K,{children:c?Object(r.jsx)(r.Fragment,{children:c&&0===o?Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\uc644\ub8cc"}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"#F97878"},children:"\uc2e0\uccad\uac00\ub2a5"})}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\ub300\uae30"})}),Object(r.jsxs)(R,{children:[o,"\uba85/70\uba85"]})]}),Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:i[2]}),Object(r.jsx)(K,{children:c?Object(r.jsx)(r.Fragment,{children:c&&0===o?Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\uc644\ub8cc"}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"#F97878"},children:"\uc2e0\uccad\uac00\ub2a5"})}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\ub300\uae30"})}),Object(r.jsxs)(R,{children:[o,"\uba85/70\uba85"]})]}),Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:i[3]}),Object(r.jsx)(K,{children:c?Object(r.jsx)(r.Fragment,{children:c&&0===o?Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\uc644\ub8cc"}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"#F97878"},children:"\uc2e0\uccad\uac00\ub2a5"})}):Object(r.jsx)("text",{style:{fontSize:16,fontWeight:400,color:"black"},children:"\uc2e0\uccad\ub300\uae30"})}),Object(r.jsxs)(R,{children:[o,"\uba85/70\uba85"]})]})]})]})]})},P=d.b.div(A()),J=d.b.div(L()),E=d.b.div(B()),G=d.b.div(q()),H=d.b.div(M()),K=d.b.div(C()),R=d.b.div(I()),V=c.a.memo(N);function Y(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0 2rem;\n  font-size: 1rem;\n  font-weight: 400;\n"]);return Y=function(){return e},e}function Q(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0 0;\n  font-size: 2.25rem;\n  font-weight: 700;\n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return X=function(){return e},e}var _=d.b.div(X()),U=d.b.div(Q()),Z=d.b.div(Y()),$=function(){var e=Object(i.useState)(!0),n=Object(b.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)(!0),s=Object(b.a)(o,2),l=s[0],a=(s[1],Object(i.useState)(!1)),j=Object(b.a)(a,2),d=j[0],u=(j[1],Object(i.useState)(70)),f=Object(b.a)(u,2),x=f[0];f[1];return Object(r.jsxs)(_,{children:[Object(r.jsx)(U,{children:"\ud654\uc591\uad50\ud68c \uc608\ubc30\uc2e0\uccad \ud398\uc774\uc9c0"}),Object(r.jsxs)(Z,{children:[Object(r.jsx)("div",{children:"\uc544\ubc84\uc9c0\uaed8\uc11c\ub294 \uc790\uae30\uc5d0\uac8c \uc774\ub807\uac8c \uc608\ubc30\ud558\ub294 \uc790\ub4e4\uc744 \ucc3e\uc73c\uc2dc\ub290\ub2c8\ub77c"}),Object(r.jsx)("div",{children:"(\uc694 4:23)"})]}),Object(r.jsx)(w,{title:"\uc218\uc694\uc608\ubc30",openFunction:c}),Object(r.jsx)(V,{days:"\uc218\uc694\uc77c",title:"\uc218\uc694\uc608\ubc30",time:["\uc800\ub1417\uc2dc30\ubd84"],open:t,remaining:x,linkTo:"/service-register/wednesday"}),Object(r.jsx)(V,{days:"\uae08\uc694\uc77c",title:"\uae08\uc694\uc131\ub839\uc9d1\ud68c",time:["\uc800\ub1418\uc2dc00\ubd84"],open:l,remaining:x,linkTo:"/service-register/friday"}),Object(r.jsx)(V,{days:"\uc77c\uc694\uc77c",title:"\uc8fc\uc77c\uc608\ubc30",time:["\uc624\uc8048\uc2dc00\ubd84","\uc624\uc8049\uc2dc30\ubd84","\uc624\uc80411\uc2dc00\ubd84","\uc624\ud6c44\uc2dc00\ubd84"],open:d,remaining:x,linkTo:"/service-register/sunday"})]})},ee=function(){return Object(r.jsx)("div",{children:"SundayService"})},ne=t(31),te=t(29);t(60);te.a.apps.length||te.a.initializeApp({apiKey:"AIzaSyC_zPsCedkhv-YQrKh9zXyp2zP9tyoNThk",authDomain:"service-register-f8d0a.firebaseapp.com",projectId:"service-register-f8d0a",storageBucket:"service-register-f8d0a.appspot.com",messagingSenderId:"502302131642",appId:"1:502302131642:web:7e707b31f50cc1030d0983"});var re=te.a,ie=te.a.firestore(),ce=t(41),oe=t.n(ce);function se(){var e=Object(l.a)(["\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n"]);return se=function(){return e},e}function le(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #fff;\n  margin-right: 1rem;\n  padding: 0.5rem\n"]);return le=function(){return e},e}function ae(){var e=Object(l.a)(["\n  z-index: 5;\n  width: 100%;\n  max-width: 585px;\n  height: 50px;\n  background-color: #228be6;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e8e8e8;\n"]);return ae=function(){return e},e}var je=d.b.div(ae()),de=Object(d.b)(a.b)(le()),be=d.b.div(se()),ue=function(){return Object(r.jsxs)(je,{children:[Object(r.jsx)(de,{to:"/service-register",children:Object(r.jsx)(oe.a,{fontSize:"small"})}),Object(r.jsx)(be,{children:"ANOINTING HWAYANG"})]})};function fe(){var e=Object(l.a)(["\n  width: 100%;\n  padding: 0.75rem;\n  margin: 0.75rem 0;\n  color: #fff;\n  background-color: #228be6;\n  border: 2px solid #228be6;\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  font-size: 1rem;\n  font-weight: 600;\n"]);return fe=function(){return e},e}function xe(){var e=Object(l.a)(["\n  width: 100%;\n  border-radius: 6px;\n  border: 2px solid #228be6;\n  padding: 0.75rem;\n  outline: none;\n  font-size: 1rem;\n  box-sizing: border-box;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(l.a)(["\n  width: 100%;\n  margin-bottom: 0.4rem;\n  font-size: 1rem;\n  color: #222;\n"]);return Oe=function(){return e},e}function he(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n"]);return he=function(){return e},e}function me(){var e=Object(l.a)(["\n  padding: 1rem;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n"]);return me=function(){return e},e}function ge(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 1.5rem 0 0;\n  font-size: 2rem;\n  font-weight: 700;\n"]);return ge=function(){return e},e}function ve(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return ve=function(){return e},e}var pe=d.b.div(ve()),ye=d.b.div(ge()),ze=d.b.form(me()),Se=d.b.div(he()),we=d.b.label(Oe()),ke=d.b.input(xe()),De=d.b.button(fe()),Te=function(){var e=Object(i.useState)(!1),n=Object(b.a)(e,2),t=n[0],c=n[1],o=Object(ne.a)(),s=o.register,l=o.handleSubmit,a=o.errors,d=Object(j.f)(),u="20210120wed",f=re.firestore.FieldValue.increment(1),x=ie.collection(u).doc("--stats--"),O=ie.collection(u).doc(),h=ie.batch(),m=new Date;return m.setDate(m.getDate()+(10-m.getDay())%7),Object(r.jsxs)(pe,{children:[Object(r.jsx)(ue,{}),Object(r.jsxs)(ye,{children:[m.getMonth()+1,"\uc6d4 ",m.getDate(),"\uc77c \uc218\uc694\uc608\ubc30 \uc2e0\uccad"]}),Object(r.jsxs)(ze,{onSubmit:l((function(e){var n=Object(k.a)(Object(k.a)({},e),{},{submitTime:new Date});return ie.runTransaction((function(e){return e.get(x).then((function(e){if(!(e.data().storyCount<20))return c(!0),d.push({pathname:"/service-register/result",state:{result:!1,detail:n}}),Promise.reject("\uc2e4\ud328");h.set(O,n),h.set(x,{storyCount:f},{merge:!0}),h.commit()}))})).then((function(){d.push({pathname:"/service-register/result",state:{result:!1,detail:n}}),console.log("\uc131\uacf5"),c(!0)})).catch((function(e){console.log(e)}))})),style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)(Se,{children:[Object(r.jsx)(we,{children:"\uc774\ub984"}),Object(r.jsx)(ke,{name:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:s({required:!0})}),a.name&&Object(r.jsx)("div",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsxs)(Se,{children:[Object(r.jsx)(we,{children:"\uc9c1\ubd84"}),Object(r.jsx)(ke,{name:"position",placeholder:"\uc7a5\ub85c/\uad8c\uc0ac/\uc9d1\uc0ac/\uc131\ub3c4/\uccad\ub144/\ud559\uc0dd",ref:s({required:!0})}),a.position&&Object(r.jsx)("div",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc9c1\ubd84\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsxs)(Se,{children:[Object(r.jsx)(we,{children:"\uc18c\uc18d"}),Object(r.jsx)(ke,{name:"division",placeholder:"\ub0a8\uc120\uad50\ud68c/\uc5ec\uc120\uad50\ud68c/\uc2dc\ub2c8\uc5b4/\uccad\uc7a5\ub144/\uc601\ucee4\ud50c/\uc778\ud130\uce58",ref:s({required:!0})}),a.division&&Object(r.jsx)("div",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc18c\uc18d\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsx)(Se,{children:Object(r.jsx)(De,{type:"submit",disabled:t,children:"\uc608\ubc30\uc2e0\uccad\ud558\uae30"})})]})]})};function We(){var e=Object(l.a)(["\n  width: 100%;\n  padding: 0.75rem;\n  margin: 0.75rem 0;\n  color: #fff;\n  background-color: #228be6;\n  border: 2px solid #228be6;\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  font-size: 1rem;\n  font-weight: 600;\n"]);return We=function(){return e},e}function Fe(){var e=Object(l.a)(["\n  width: 100%;\n  border-radius: 6px;\n  border: 2px solid #228be6;\n  padding: 0.75rem;\n  outline: none;\n  font-size: 1rem;\n  box-sizing: border-box;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  width: 100%;\n  margin-bottom: 0.4rem;\n  font-size: 1rem;\n  color: #222;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n"]);return Ce=function(){return e},e}function Me(){var e=Object(l.a)(["\n  padding: 1rem;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n"]);return Me=function(){return e},e}function qe(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 1.5rem 0 0;\n  font-size: 2rem;\n  font-weight: 700;\n"]);return qe=function(){return e},e}function Be(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Be=function(){return e},e}var Le=d.b.div(Be()),Ae=d.b.div(qe()),Ne=d.b.form(Me()),Pe=d.b.div(Ce()),Je=d.b.label(Ie()),Ee=d.b.input(Fe()),Ge=d.b.button(We()),He=function(e){var n=Object(i.useState)(!1),t=Object(b.a)(n,2),c=t[0],o=t[1],s=Object(ne.a)(),l=s.register,a=s.handleSubmit,j=s.errors;console.log(e);var d="20210122fri",u=re.firestore.FieldValue.increment(1),f=ie.collection(d).doc("--stats--"),x=ie.collection(d).doc(),O=ie.batch(),h=new Date;return h.setDate(h.getDate()+(12-h.getDay())%7),Object(r.jsxs)(Le,{children:[Object(r.jsx)(ue,{}),Object(r.jsxs)(Ae,{children:[h.getMonth()+1,"\uc6d4 ",h.getDate(),"\uc77c \uae08\uc694\uc131\ub839\uc9d1\ud68c \uc2e0\uccad"]}),Object(r.jsxs)(Ne,{onSubmit:a((function(e){var n=Object(k.a)(Object(k.a)({},e),{},{submitTime:new Date});return ie.runTransaction((function(e){return e.get(f).then((function(e){return e.data().storyCount<20?(O.set(x,n),O.set(f,{storyCount:u},{merge:!0}),O.commit(),n):(o(!0),alert("\uc2e0\uccad\uc778\uc6d0\uc774 \ub118\uc5b4 \ub9c8\uac10\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),Promise.reject("\uc2e4\ud328"))}))})).then((function(){alert("\uc608\ubc30\uc2e0\uccad\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4"),o(!0)})).catch((function(e){console.log(e)}))})),style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)(Pe,{children:[Object(r.jsx)(Je,{children:"\uc774\ub984"}),Object(r.jsx)(Ee,{name:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",ref:l({required:!0})}),j.name&&Object(r.jsx)("text",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsxs)(Pe,{children:[Object(r.jsx)(Je,{children:"\uc9c1\ubd84"}),Object(r.jsx)(Ee,{name:"position",placeholder:"\uc7a5\ub85c/\uad8c\uc0ac/\uc9d1\uc0ac/\uc131\ub3c4/\uccad\ub144/\ud559\uc0dd",ref:l({required:!0})}),j.position&&Object(r.jsx)("text",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc9c1\ubd84\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsxs)(Pe,{children:[Object(r.jsx)(Je,{children:"\uc18c\uc18d"}),Object(r.jsx)(Ee,{name:"division",placeholder:"\ub0a8\uc120\uad50\ud68c/\uc5ec\uc120\uad50\ud68c/\uc2dc\ub2c8\uc5b4/\uccad\uc7a5\ub144/\uc601\ucee4\ud50c/\uc778\ud130\uce58",ref:l({required:!0})}),j.division&&Object(r.jsx)("text",{style:{color:"red",marginTop:5,marginLeft:5},children:"\uc18c\uc18d\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),Object(r.jsx)(Pe,{children:Object(r.jsx)(Ge,{type:"submit",disabled:c,children:"\uc608\ubc30\uc2e0\uccad\ud558\uae30"})})]})]})};function Ke(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ke=function(){return e},e}function Re(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Re=function(){return e},e}var Ve=window.innerHeight,Ye=d.b.div(Re()),Qe=d.b.div(Ke()),Xe=function(){var e=Object(j.g)().state;return Object(r.jsxs)(Ye,{children:[Object(r.jsx)(ue,{}),Object(r.jsxs)(Qe,{style:{height:Ve},children:[e.result?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:[e.detail.name," ",e.detail.position,"\ub2d8 "]}),Object(r.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"2rem",color:"blue"},children:"\uc608\ubc30\uc2e0\uccad\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)("div",{children:"\ub9ce\uc740 \uc740\ud61c \ubc1b\uc73c\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:[e.detail.name," ",e.detail.position,"\ub2d8"]}),Object(r.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"2rem",color:"blue"},children:"\uc8c4\uc1a1\ud569\ub2c8\ub2e4."}),Object(r.jsx)("div",{children:"\uc608\ubc30\uc2e0\uccad\uc774 \ub9c8\uac10\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]}),Object(r.jsx)(F,{to:"/service-register",style:{textDecoration:"none",color:"#222",display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem",borderRadius:6,marginTop:"1.5rem"},children:"\ucc98\uc74c\ud654\uba74\uc73c\ub85c"})]})]})};function _e(){var e=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return _e=function(){return e},e}var Ue=d.b.div(_e()),Ze=function(){var e=Object(i.useState)([]),n=Object(b.a)(e,2),t=(n[0],n[1]);return Object(r.jsxs)(Ue,{children:[Object(r.jsx)("div",{children:"\uc2e0\uccad\uc790\ud655\uc778\ud654\uba74"}),Object(r.jsx)("button",{onClick:function(){ie.collection("20210120wed").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(k.a)({id:e.id},e.data())}));t(n)}))},title:"\uba85\ub2e8\ud655\uc778"})]})};function $e(){var e=Object(l.a)(["\n    width: 100%;\n    max-width: 585px;\n    display: flex;\n    flex-direction: column;\n  "]);return $e=function(){return e},e}function en(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: scroll;\n  "]);return en=function(){return e},e}function nn(){var e=Object(l.a)(["\n  body {\n    margin: 0;\n    padding: 0; \n    box-sizing: border-box;\n  }\n"]);return nn=function(){return e},e}var tn=Object(d.a)(nn()),rn=d.b.div(en()),cn=d.b.div($e()),on=function(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(tn,{}),Object(r.jsx)(rn,{children:Object(r.jsx)(cn,{children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/service-register/wednesday",component:Te}),Object(r.jsx)(j.a,{exact:!0,path:"/service-register/friday",component:He}),Object(r.jsx)(j.a,{exact:!0,path:"/service-register/sunday",component:ee}),Object(r.jsx)(j.a,{exact:!0,path:"/service-register/result",component:Xe}),Object(r.jsx)(j.a,{exact:!0,path:"/service-register/reservation",component:Ze}),Object(r.jsx)(j.a,{exact:!0,path:"/service-register",component:$})]})})})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(on,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.c99677ac.chunk.js.map