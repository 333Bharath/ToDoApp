(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{18:function(e,t,n){e.exports={toDoItem:"ToDoItem_toDoItem__3DQSZ",slider:"ToDoItem_slider__1Sh6i",left:"ToDoItem_left__3XgXJ",middle:"ToDoItem_middle__1ij5S",right:"ToDoItem_right__cVkhF"}},24:function(e,t,n){e.exports={Button:"Button_Button__fnOQZ",Success:"Button_Success__2IxE7",Danger:"Button_Danger__2smj_"}},25:function(e,t,n){e.exports={todo:"ToDo_todo__2mE2u"}},26:function(e,t,n){e.exports={toDoList:"ToDoList_toDoList__19U00"}},32:function(e,t,n){e.exports={auth:"Auth_auth__2IeyV"}},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(10),s=n.n(i),r=(n(41),n(42),n(22)),a=n(33),l=n(17),u=n(25),d=n.n(u),j=n(24),b=n.n(j),m=n(2),h=function(e){return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)("button",{className:[b.a.Button,b.a[e.btnType]].join(" "),onClick:e.onButtonHandler,children:e.children})})},O=n(26),x=n.n(O),f=n(18),_=n.n(f),v=n(68),p=n(70),g=n(69),D=function(e){return Object(m.jsxs)("div",{className:_.a.toDoItem,children:[Object(m.jsx)("div",{className:_.a.left,children:Object(m.jsx)(v.a,{children:Object(m.jsx)(p.a,{control:Object(m.jsx)(g.a,{checked:e.completed,onChange:e.markCompleted,value:"",color:""})})})}),Object(m.jsx)("div",{className:_.a.middle,children:e.children}),Object(m.jsx)("div",{className:_.a.right,children:Object(m.jsx)(h,{onButtonHandler:e.onRemoveItems,btnType:"Danger",children:"Delete"})})]})},I=void 0,C=function(e){return console.log(e.toDoItems),Object(m.jsx)("div",{className:x.a.toDoList,children:e.toDoItems.map((function(t,n){return Object(m.jsx)(D,{completed:t.isCompleted,onRemoveItems:e.onRemoveItems.bind(I,t.id),markCompleted:e.markComplete.bind(I,t.id,n),children:t.value},t.id)}))})},T=function(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),i=n[0],s=n[1],u=Object(o.useState)([]),j=Object(l.a)(u,2),b=j[0],O=j[1],x=Object(o.useCallback)((function(e,t){var n=b.filter((function(t){return t.id===e}));if(!1===n[0].isCompleted){console.log("clicked",e);var o=b.slice(),c=Object(r.a)(Object(r.a)({},n[0]),{},{isCompleted:!0});o[t]=Object(r.a)({},c),O(o)}}),[O,b]);return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:d.a.todo,children:[Object(m.jsx)("h1",{children:"TODO APP"}),Object(m.jsx)("input",{value:i,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("div",{style:{margin:"auto",width:"10%"},children:Object(m.jsx)(h,{onButtonHandler:function(){if(0!==i.length){var e=[];e.push({id:i,value:i,isCompleted:!1}),O((function(t){return[].concat(Object(a.a)(t),e)})),s("")}},btnType:"Success",children:"ADD"})}),Object(m.jsx)(C,{toDoItems:b,onRemoveItems:function(e){var t=b.filter((function(t){return t.id!==e}));O(t)},markComplete:x})]})})},B=c.a.createContext({isAuth:!1,login:function(){}}),S=function(e){var t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(m.jsx)(B.Provider,{value:{isAuth:c,login:function(){i(!0)}},children:e.children})},k=n(32),N=n.n(k),F=function(e){var t=Object(o.useContext)(B);return Object(m.jsxs)("div",{className:N.a.auth,children:[Object(m.jsx)("h2",{children:"You are not authenticated!"}),Object(m.jsx)("p",{children:"Please log in to continue."}),Object(m.jsx)(h,{btnType:"Success",onButtonHandler:function(){t.login()},children:"LogIn"})]})};var y=function(){var e=Object(o.useContext)(B),t=Object(m.jsx)(F,{});return e.isAuth&&(t=Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(T,{}),";"]})})),t},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{children:Object(m.jsx)(y,{})})}),document.getElementById("root")),A()}},[[48,1,2]]]);
//# sourceMappingURL=main.0a3fc661.chunk.js.map