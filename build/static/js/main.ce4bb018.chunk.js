(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",buttonBlock:"Affairs_buttonBlock__n76Ka",button:"Affairs_button__3YaQm",buttonClick:"Affairs_buttonClick__13Pi8"}},,function(e,t,n){e.exports={greeting:"Greeting_greeting__21ydZ",error:"Greeting_error__1uvQ8",input:"Greeting_input__2kXLu",errorInput:"Greeting_errorInput__2Khas",count:"Greeting_count__2ZvGI",add:"Greeting_add__2r_VE"}},,,function(e,t,n){e.exports={message:"Message_message__8WR15",name:"Message_name__Tzmp0",content:"Message_content__Ltxgc",time:"Message_time__HOFTG",text:"Message_text__2fXBO"}},function(e,t,n){e.exports={link:"Header_link__1oUIl",header:"Header_header__1amup",block:"Header_block__3dX0N"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,t,n){e.exports={affair:"Affair_affair__3skNw",name:"Affair_name__wrv2c",priority:"Affair_priority__1jVve"}},,,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X",input:"HW4_input__2DViA"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),s=n.n(c),i=(n(35),n(28)),o=n.n(i),j=n(7),l=n(2),u=n(0);var b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var d=function(){return Object(u.jsx)("div",{children:"Junior"})},h=n(11),x=n.n(h);var O=function(e){return Object(u.jsxs)("div",{className:x.a.message,children:[Object(u.jsx)("img",{src:e.avatar}),Object(u.jsxs)("div",{className:x.a.text,children:[Object(u.jsx)("p",{className:x.a.name,children:Object(u.jsx)("b",{children:e.name})}),Object(u.jsx)("p",{className:x.a.content,children:e.message}),Object(u.jsx)("p",{className:x.a.time,children:e.time})]})]})};var m=function(){var e="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",t="Some Name",n="some text",r="22:00";return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(O,{avatar:e,name:t,message:n,time:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},f=n(5),_=n(17),p=n.n(_);var v=function(e){return Object(u.jsxs)("div",{className:p.a.affair,children:[Object(u.jsx)("div",{className:p.a.name,children:e.affair.name}),Object(u.jsx)("div",{className:p.a.priority,children:e.affair.priority}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},k=n(6),g=n.n(k);var N=function(e){var t=e.data.map((function(t){return Object(u.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:g.a.someClass,children:[t,Object(u.jsxs)("div",{className:g.a.buttonBlock,children:[Object(u.jsx)("button",{className:"all"===e.filter?g.a.buttonClick:g.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:"high"===e.filter?g.a.buttonClick:g.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:"middle"===e.filter?g.a.buttonClick:g.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:"low"===e.filter?g.a.buttonClick:g.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(r.useState)(C),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(f.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"==e.priority})):"low"===t?e.filter((function(e){return"low"==e.priority})):"middle"===t?e.filter((function(e){return"middle"==e.priority})):e}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(N,{filter:i,data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},w=n(30),S=n(8),A=n.n(S),I=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter,i=a?A.a.errorInput:A.a.input;return Object(u.jsxs)("div",{className:A.a.greeting,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(u.jsx)("div",{className:A.a.error,children:a})]}),Object(u.jsx)("button",{className:A.a.add,disabled:!!a,onClick:r,children:"add"}),Object(u.jsx)("div",{className:A.a.count,children:c})]})},T=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(f.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(f.a)(o,2),l=j[0],b=j[1],d=function(){n(s),alert("Hello  ".concat(s,"!")),i("")},h=t.length;return Object(u.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("Name is require"))},addUser:d,error:l,totalUsers:h,onEnter:function(e){"Enter"===e.key&&s&&(d(),i(""))}})},E=n(44);var H=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};a([].concat(Object(w.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},B=n(9),G=n(10),W=n(15),F=n.n(W),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(F.a.input," ").concat(c?F.a.errorInput:F.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(u.jsx)("span",{className:j,children:c})]})},U=n(20),X=n.n(U),J=n(21),K=n.n(J),P=function(e){var t=e.red,n=e.className,r=Object(G.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(u.jsx)("button",Object(B.a)({className:a},r))},Z=n(22),L=n.n(Z),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:L.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(f.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:X.a.column,children:[Object(u.jsx)(M,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(M,{className:X.a.blue}),Object(u.jsx)(P,{children:"default"}),Object(u.jsx)(P,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(P,{disabled:!0,children:"disabled"}),Object(u.jsx)(R,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(R,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var q=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(y,{}),Object(u.jsx)(H,{}),Object(u.jsx)(V,{})]})};var z=function(){return Object(u.jsx)("div",{children:"Junior +"})},Q="/pre-junior",Y="/junior",D="/junior-plus";var $=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(l.a,{to:Q})}}),Object(u.jsx)(l.b,{path:Q,render:function(){return Object(u.jsx)(q,{})}}),Object(u.jsx)(l.b,{path:Y,render:function(){return Object(u.jsx)(d,{})}}),Object(u.jsx)(l.b,{path:D,render:function(){return Object(u.jsx)(z,{})}}),"// add routes",Object(u.jsx)(l.b,{render:function(){return Object(u.jsx)(b,{})}})]})})},ee=n(12),te=n.n(ee);var ne=function(){return Object(u.jsxs)("div",{className:te.a.header,children:[Object(u.jsx)(j.b,{className:te.a.link,to:Q,children:"pre junior"}),Object(u.jsx)(j.b,{className:te.a.link,to:Y,children:"junior"}),Object(u.jsx)(j.b,{className:te.a.link,to:D,children:"junior +"}),Object(u.jsx)("div",{className:te.a.block})]})};var re=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(ne,{}),Object(u.jsx)($,{})]})})};var ae=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(re,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(ae,{}),Object(u.jsx)(m,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.ce4bb018.chunk.js.map