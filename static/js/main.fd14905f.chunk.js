(window["webpackJsonpreact-demo-project-board"]=window["webpackJsonpreact-demo-project-board"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(22),c=n(62),i=n(63),u=n(67),l=n(64),d=n(68),s=n(6),m=777,f=function(e){return{type:"ADD_COLUMN",id:m++,text:e}},p=function(e){return{type:"REMOVE_COLUMN",id:e}},O=function(e){return{type:"TOGGLE_COLUMN_INPUT",id:e}},g=function(e){return{type:"ADD_ITEM_TO_COLUMN",transfer:e.transfer||!1,item:e}},b=function(e){return{type:"MOVE_ITEM",dragIndex:e.dragIndex,hoverIndex:e.hoverIndex,columnId:e.columnId}},v=n(36),E=n(5);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={latestId:2,columns:[_({id:0,name:"Todo"}),_({id:1,name:"Done"})]};function _(e){var t=e.id,n=e.name;return{id:t,name:n,items:"Todo"===n?[{id:0,title:"Read a Book",columnId:0,timeAdded:(new Date).toDateString()},{id:1,title:"Build a House",columnId:0,timeAdded:(new Date).toDateString()},{id:2,title:"Create new Card",columnId:0,timeAdded:(new Date).toDateString()}]:[],completed:!1,showAddCardInput:!1}}var I=function(e,t){switch(t.type){case"ADD_COLUMN":return h({},e,{columns:[].concat(Object(v.a)(e.columns),[{latestId:0,id:t.id,name:t.text,items:[],completed:!1,showAddCardInput:!1}])});case"REMOVE_COLUMN":return h({},e,{columns:e.columns.filter((function(e){return e.id!==t.id}))});case"TOGGLE_COLUMN_INPUT":return h({},e,{columns:e.columns.map((function(e){return e.id===t.id&&(e.showAddCardInput=!e.showAddCardInput),e}))});case"ADD_ITEM_TO_COLUMN":var n=e.latestId+1;return h({},e,{latestId:t.transfer?e.latestId:n,columns:e.columns.map((function(e){return e.id===t.item.columnId&&(e.items=[{id:t.transfer?t.item.id:n,title:t.item.title,columnId:t.item.columnId,timeAdded:(new Date).toDateString()}].concat(Object(v.a)(e.items))),e}))});case"REMOVE_ITEM_FROM_COLUMN":return h({},e,{columns:e.columns.map((function(e){return e.id===t.info.columnId&&(e.items=e.items.filter((function(e){return e.id!==t.info.itemId}))),e}))});case"MOVE_ITEM":return h({},e,{columns:e.columns.map((function(e){if(e.id===t.columnId){var n=t.dragIndex,r=t.hoverIndex,o=e.items[n];o&&(e.items[n]=e.items[r],e.items[r]=o)}return e}))});default:return e}};var w=o.a.createContext(null),D=n(4);n(162);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({index:e.index},e.item)}},x={hover:function(e,t,n){if(!n)return null;var r=t.getItem().index,o=e.index;if(r!==o){var c=Object(a.findDOMNode)(n).getBoundingClientRect(),i=(c.bottom-c.top)/2,u=t.getClientOffset().y-c.top;if(!(r<o&&u<i))if(!(r>o&&u>i))t.getItem().columnId===e.item.columnId&&(e.moveCard(r,o),t.getItem().index=o)}}},P=Object(D.DropTarget)("Card",x,(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(D.DragSource)("Card",C,(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))((function(e){var t=e.isDragging;return(0,e.connectDragSource)((0,e.connectDropTarget)(o.a.createElement("div",{style:{opacity:t?.2:1,cursor:"move"}},o.a.createElement("div",{className:"card",tabIndex:"1"},o.a.createElement("div",null,o.a.createElement("div",{className:"card__label"},e.item.title),o.a.createElement("span",{className:"card__meta"},o.a.createElement("a",{className:"card__meta__link",href:e.item.id},"#",e.item.id)," ",e.item.timeAdded))))))}))),M=(n(163),function(e){var t=e.column,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useContext)(w);return o.a.createElement("div",{className:"note__form"},o.a.createElement("textarea",{className:"note__form__textarea",name:"cardTitle",value:c,onChange:function(e){return function(e){i(e.target.value)}(e)},placeholder:"Enter a note",style:{minHeight:76}}),o.a.createElement("div",{className:"button__group"},o.a.createElement("button",{className:"button button--primary",onClick:function(){return e=t.id,u(g({columnId:e,title:c})),void i("");var e}},"Add"),o.a.createElement("button",{className:"button button--neutral",onClick:function(){return e=t.id,void u(O(e));var e}},"Close")))});n(164);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k={drop:function(e,t){var n,r=t.getItem(),o=e.dispatch;return r.columnId!==e.column.id&&(o({type:"REMOVE_ITEM_FROM_COLUMN",id:(n={columnId:r.columnId,itemId:r.id,transfer:!0}).columnId,transfer:n.transfer||!1,info:n}),o(g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{columnId:e.column.id,transfer:!0})))),{column:e.column}}};var S=Object(D.DropTarget)("Card",k,(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))((function(e){var t=e.connectDropTarget,n=e.column,r=e.dispatch,a=function(e,t){r(b({dragIndex:e,hoverIndex:t,columnId:n.id}))},c=n.items.map((function(e,t){return o.a.createElement(P,{key:e.id,item:e,index:t,moveCard:a})}));return t(o.a.createElement("div",{className:"column",tabIndex:"9"},o.a.createElement("div",{style:{maxWidth:325},key:n.id},o.a.createElement("div",{className:"column__panel"},o.a.createElement("div",{className:"column__panel__header"},o.a.createElement("span",{className:"column__panel__label"},o.a.createElement("span",{className:"column__panel__label--text"},n.items.length))," ",n.name),o.a.createElement("div",{className:"column__panel--left"},o.a.createElement("div",{className:"icon",onClick:function(){return e=n.id,void r(O(e));var e}},"+"),o.a.createElement("div",{className:"icon",onClick:function(){return p(n.id)}},"\xb7\xb7\xb7"))),o.a.createElement("div",{style:{minHeight:500}},n.showAddCardInput&&o.a.createElement(M,{column:n}),c))))}));n(165);var A=function(){var e=function(e,t,n){var o;o=e&&localStorage[e]&&JSON.parse(localStorage[e])||n;var a=Object(r.useReducer)(t,o),c=Object(s.a)(a,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i))}),[i]),[i,u]}("boardState",I,j),t=Object(s.a)(e,2),n=t[0],a=t[1],c=n.columns.map((function(e){return o.a.createElement(S,{key:e.id,dispatch:a,column:e})}));return o.a.createElement(w.Provider,{value:a},o.a.createElement("div",{className:"board-container"},c,o.a.createElement("div",{className:"column column--dashed"},o.a.createElement("div",{className:"column__placeholder"},o.a.createElement("button",{className:"button button--primary button--bold",onClick:function(){a(f("random stuff"))}},"+ Add column")))))},L=n(66),U=n.n(L),R=(n(188),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{padding:12}},o.a.createElement(A,null))}}]),t}(r.Component)),V=Object(D.DragDropContext)(U.a)(R),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(189);Object(a.render)(o.a.createElement(V,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/app-project-boards",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/app-project-boards","/service-worker.js");B?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):W(e)}))}}()},69:function(e,t,n){e.exports=n(190)}},[[69,1,2]]]);
//# sourceMappingURL=main.fd14905f.chunk.js.map