(window["webpackJsonpthinking-in-react"]=window["webpackJsonpthinking-in-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),l=(n(15),n(4)),i=n(5),s=n(9),d=n(6),h=n(1),u=n(8),m=(n(16),function(e){var t=e.searchString,n=e.searchStringHandleChange,a=e.showOnlyStocked,r=e.showOnlyStockedHandleChange;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"search-input"},"What product are you looking for?"),c.a.createElement("input",{type:"text",id:"search_input",onChange:n,value:t})),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"only_show_stocked_checkbox",onChange:r,checked:a}),c.a.createElement("label",{htmlFor:"only_show_stocked_checkbox"},"Only show products in stock")))}),g=[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}],k=n(7),p=function(e){var t=e.filteredProductData,n=Object(k.a)(new Set(t.map((function(e){return e.category}))));return c.a.createElement("div",null,n.map((function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("h2",null,e),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{scope:"col"},"Price"))),c.a.createElement("tbody",null,t.filter((function(t){return t.category===e})).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:e.stocked?"":"out-of-stock"},e.name),c.a.createElement("td",null,e.price))})))))})))};function y(e,t,n){return e.filter((function(e){return(!n||n&&e.stocked)&&e.name.toUpperCase().includes(t.toUpperCase())}))}var E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={searchString:"",showOnlyStocked:!1},n.searchStringHandleChange=n.searchStringHandleChange.bind(Object(h.a)(n)),n.showOnlyStockedHandleChange=n.showOnlyStockedHandleChange.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"searchStringHandleChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"showOnlyStockedHandleChange",value:function(e){this.setState({showOnlyStocked:e.target.checked})}},{key:"render",value:function(){var e=this.state,t=e.showOnlyStocked,n=e.searchString;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(m,{searchString:n,searchStringHandleChange:this.searchStringHandleChange,showOnlyStocked:t,showOnlyStockedHandleChange:this.showOnlyStockedHandleChange})),c.a.createElement("div",null,c.a.createElement(p,{filteredProductData:y(g,n,t)})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.e7c77e65.chunk.js.map