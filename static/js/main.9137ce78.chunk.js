(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",buttonBlock:"Affairs_buttonBlock__n76Ka",button:"Affairs_button__3YaQm",buttonClick:"Affairs_buttonClick__13Pi8"}},,function(e,t,n){e.exports={greeting:"Greeting_greeting__21ydZ",error:"Greeting_error__1uvQ8",input:"Greeting_input__2kXLu",errorInput:"Greeting_errorInput__2Khas",count:"Greeting_count__2ZvGI",add:"Greeting_add__2r_VE"}},function(e,t,n){e.exports={message:"Message_message__8WR15",name:"Message_name__Tzmp0",content:"Message_content__Ltxgc",time:"Message_time__HOFTG",text:"Message_text__2fXBO"}},function(e,t,n){e.exports={link:"Header_link__1oUIl",header:"Header_header__1amup",block:"Header_block__3dX0N"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,t,n){e.exports={affair:"Affair_affair__3skNw",name:"Affair_name__wrv2c",priority:"Affair_priority__1jVve"}},,,function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X",input:"HW4_input__2DViA"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),i=(n(35),n(28)),o=n.n(i),j=n(9),l=n(2),u=n(0);var b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},d=n(3),h=n(4),O=n(5),x=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(O.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(u.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))},m=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=Object(O.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),a&&a(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(h.a)({type:"radio",name:t,checked:e===r,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:o})},f=["x","y","z"];var p=function(){var e=Object(r.useState)(f[1]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(x,{options:f,value:n,onChangeOption:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{name:"radio",options:f,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=n(15),v=n.n(_),g=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(v.a.error," ").concat(i||""),l="".concat(v.a.input," ").concat(a?v.a.errorInput:v.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},o)),a&&Object(u.jsx)("span",{className:j,children:a})]})},k=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(d.a)(s,2),o=i[0],j=i[1],l=c||{},b=l.children,x=l.onDoubleClick,m=l.className,f=Object(O.a)(l,["children","onDoubleClick","className"]),p="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",m);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(g,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(u.jsx)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),x&&x(e)},className:p},f),{},{children:b||a.value}))})},C=n(20),N=n.n(C),y=function(e){var t=e.red,n=e.className,r=Object(O.a)(e,["red","className"]),c="".concat(t?N.a.red:N.a.default," ").concat(n);return Object(u.jsx)("button",Object(h.a)({className:c},r))};function S(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function w(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}S("test",{x:"A",y:1});w("test",{x:"",y:0});var A=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(k,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(y,{onClick:function(){S("editable-span-value",n)},children:"save"}),Object(u.jsx)(y,{onClick:function(){c(w("editable-span-value",""))},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var I=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(A,{}),Object(u.jsx)(p,{})]})},T=n(11),E=n.n(T);var B=function(e){return Object(u.jsxs)("div",{className:E.a.message,children:[Object(u.jsx)("img",{src:e.avatar}),Object(u.jsxs)("div",{className:E.a.text,children:[Object(u.jsx)("p",{className:E.a.name,children:Object(u.jsx)("b",{children:e.name})}),Object(u.jsx)("p",{className:E.a.content,children:e.message}),Object(u.jsx)("p",{className:E.a.time,children:e.time})]})]})};var F=function(){var e="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",t="Some Name",n="some text",r="22:00";return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(B,{avatar:e,name:t,message:n,time:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},H=n(17),G=n.n(H);var P=function(e){return Object(u.jsxs)("div",{className:G.a.affair,children:[Object(u.jsx)("div",{className:G.a.name,children:e.affair.name}),Object(u.jsx)("div",{className:G.a.priority,children:e.affair.priority}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},W=n(8),J=n.n(W);var M=function(e){var t=e.data.map((function(t){return Object(u.jsx)(P,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:J.a.someClass,children:[t,Object(u.jsxs)("div",{className:J.a.buttonBlock,children:[Object(u.jsx)("button",{className:"all"===e.filter?J.a.buttonClick:J.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:"high"===e.filter?J.a.buttonClick:J.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:"middle"===e.filter?J.a.buttonClick:J.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:"low"===e.filter?J.a.buttonClick:J.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})]})},U=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var X=function(){var e=Object(r.useState)(U),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(d.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"==e.priority})):"low"===t?e.filter((function(e){return"low"==e.priority})):"middle"===t?e.filter((function(e){return"middle"==e.priority})):e}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(M,{filter:i,data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},K=n(30),D=n(10),Z=n.n(D),z=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onEnter,i=c?Z.a.errorInput:Z.a.input;return Object(u.jsxs)("div",{className:Z.a.greeting,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(u.jsx)("div",{className:Z.a.error,children:c})]}),Object(u.jsx)("button",{className:Z.a.add,disabled:!!c,onClick:r,children:"add"}),Object(u.jsx)("div",{className:Z.a.count,children:a})]})},L=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(d.a)(o,2),l=j[0],b=j[1],h=function(){n(s),alert("Hello  ".concat(s,"!")),i("")},O=t.length;return Object(u.jsx)(z,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("Name is require"))},addUser:h,error:l,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&(h(),i(""))}})},R=n(44);var V=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(L,{users:n,addUserCallback:function(e){var t={_id:Object(R.a)(),name:e};c([].concat(Object(K.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},q=n(21),Q=n.n(q),Y=n(22),$=n.n(Y),ee=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat($.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(u.jsx)("span",{className:$.a.spanClassName,children:c})]})};var te=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(d.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:Q.a.column,children:[Object(u.jsx)(g,{value:n,onChangeText:c,onEnter:s,error:a}),Object(u.jsx)(g,{className:Q.a.blue}),Object(u.jsx)(y,{children:"default"}),Object(u.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(y,{disabled:!0,children:"disabled"}),Object(u.jsx)(ee,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(ee,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ne=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(F,{}),Object(u.jsx)(X,{}),Object(u.jsx)(V,{}),Object(u.jsx)(te,{})]})};var re=function(){return Object(u.jsx)("div",{children:"Junior +"})},ce="/pre-junior",ae="/junior",se="/junior-plus";var ie=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(l.a,{to:ce})}}),Object(u.jsx)(l.b,{path:ce,render:function(){return Object(u.jsx)(ne,{})}}),Object(u.jsx)(l.b,{path:ae,render:function(){return Object(u.jsx)(I,{})}}),Object(u.jsx)(l.b,{path:se,render:function(){return Object(u.jsx)(re,{})}}),"// add routes",Object(u.jsx)(l.b,{render:function(){return Object(u.jsx)(b,{})}})]})})},oe=n(12),je=n.n(oe);var le=function(){return Object(u.jsxs)("div",{className:je.a.header,children:[Object(u.jsx)(j.b,{className:je.a.link,to:ce,children:"pre junior"}),Object(u.jsx)(j.b,{className:je.a.link,to:ae,children:"junior"}),Object(u.jsx)(j.b,{className:je.a.link,to:se,children:"junior +"}),Object(u.jsx)("div",{className:je.a.block})]})};var ue=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(le,{}),Object(u.jsx)(ie,{})]})})};var be=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsxs)(c.a.StrictMode,{children:[Object(u.jsx)(be,{}),Object(u.jsx)(F,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.9137ce78.chunk.js.map