(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[3],{294:function(e,s,a){e.exports={dialog:"DialogItem_dialog__3Z_F4"}},295:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1m8l5",dialogItem:"Dialogs_dialogItem__2voCW",active:"Dialogs_active__FM7xN",messages:"Dialogs_messages__2d788"}},296:function(e,s,a){e.exports={message:"Message_message__1Xw4e"}},300:function(e,s,a){"use strict";a.r(s);var t=a(11),i=a(8),n=a(94),c=a(123),o=a(21),g=a(294),d=a.n(g),r=a(0),l=function(e){var s="/dialogs/"+e.id;return Object(r.jsxs)("div",{className:d.a.dialog+" "+d.a.active,children:[Object(r.jsx)("img",{src:e.src,alt:""}),Object(r.jsxs)(o.b,{to:s,children:[e.name," "]})]})},m=(a(1),a(295)),j=a.n(m),u=a(296),b=a.n(u),x=function(e){return Object(r.jsx)("div",{className:b.a.message,children:e.message})},_=a(125),O=a(124),f=a(41),p=a(40),h=Object(p.a)(30),v=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(O.a,{component:f.b,name:"newMessageText",validate:[p.b,h],placeholder:"Add message"}),Object(r.jsx)("button",{children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})})),M=function(e){var s=e.dialogs.map((function(e){return Object(r.jsx)(l,{name:e.name,id:e.id,src:e.photo},e.id)})),a=e.messages.map((function(e){return Object(r.jsx)(x,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:j.a.dialogs,children:[Object(r.jsx)("div",{className:j.a.dialogItem,children:s}),Object(r.jsx)("div",{className:j.a.messages,children:a}),Object(r.jsx)(v,{onSubmit:function(s){e.sentMessage(s.newMessageText)}})]})};s.default=Object(i.d)(Object(t.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sentMessage:function(s){e(Object(c.a)(s))}}})),n.a)(M)}}]);
//# sourceMappingURL=3.86bffef1.chunk.js.map