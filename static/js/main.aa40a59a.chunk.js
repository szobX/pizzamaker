(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/tomato.93558262.svg"},21:function(e,a,t){e.exports=t.p+"static/media/becon.f43caed9.svg"},22:function(e,a,t){e.exports=t.p+"static/media/mushroom.b4262e03.svg"},23:function(e,a,t){e.exports=t.p+"static/media/base.546b631b.svg"},27:function(e,a,t){e.exports=t(44)},32:function(e,a,t){},33:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),i=t.n(r),o=(t(32),t(25)),c=t(5),l=t(6),m=t(8),d=t(7),p=t(9),u=(t(33),t(34),t(35),t(15)),z=function(e){return s.a.createElement("div",{className:"col-lg-8 order-md-1 h-100 "},s.a.createElement("h3",{className:""},"Twoja Pizza:"),s.a.createElement("div",{className:"d-flex px-5 "},s.a.createElement("div",{className:"row card-list flex-wrap "},s.a.createElement("div",{className:"cardss  "},s.a.createElement("img",{src:e.PizzaBase,className:"img-fluid",alt:"base"})),Object.keys(e.composition).map(function(a,t){for(var n=[],r=0;r<e.composition[a];r++)n.push(s.a.createElement("div",{key:a+"i"+r,className:"cardss  "},s.a.createElement("img",{src:e.components[a].img,className:"img-fluid",alt:"base"})));return n}))))},h=function(e){return s.a.createElement("li",{className:"list-group-item align-items-center"},s.a.createElement("div",{className:"d-flex p-3 border align-items-center"},s.a.createElement("h4",null,e.name),s.a.createElement("em",{className:"px-2"},e.price,".z\u0142"),s.a.createElement("button",{className:"btn btn-success  align-content-end",disabled:10===e.quantify,onClick:e.handleClick.bind(void 0,!0,e.keyname,e.price)},"+"),s.a.createElement("span",{className:"align-content-center counter"},e.quantify),s.a.createElement("button",{className:"btn btn-danger  align-content-end\t",disabled:0===e.quantify,onClick:e.handleClick.bind(void 0,!1,e.keyname,e.price)},"-")))},b=function(e){var a=e.components,t=e.composition,n=e.howMany<3||null,r=Object.keys(e.components).map(function(n,r){return s.a.createElement(h,{handleClick:e.handleClick,key:n,keyname:n,name:a[n].name,price:a[n].price,quantify:t[n]})});return s.a.createElement("div",{className:"col-lg-4 order-md-2 border "},s.a.createElement("div",{className:"d-inline-block mx-2 my-2"},s.a.createElement("span",{className:"badge badge-dark mx-2"},"Aktualna kwota: ",e.costs+e.basicPrice,"  z\u0142"),s.a.createElement("button",{onClick:e.reset,className:"btn btn-warning"},"Reset")),r,s.a.createElement("div",{className:"p-4"},n&&s.a.createElement("p",{className:"text-center text-warning"},"Musisz wybra\u0107 przynamniej 3 sk\u0142adniki!"),s.a.createElement("button",{disabled:n,"data-toggle":"modal","data-target":"#form",className:"btn btn-primary btn-lg btn-block"}," Zam\xf3w")))},E=t(20),v=t.n(E),f=t(21),g=t.n(f),y=t(22),N=t.n(y),k=t(23),w=t.n(k),C={tomato:{id:1,price:1.2,name:"pomidor",img:v.a},mushroom:{id:2,price:1.6,name:"pieczarki",img:N.a},becon:{id:3,price:2.1,name:"becon",img:g.a}},j=w.a,O=C,x=t(11),P=t(16),L=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",addres:"",phone:"",where:"pickup"},t.orderClick=function(){t.props.createOrder(t.state)},t.handleChange=function(e){var a=e.target.name;e.target.type;t.setState(Object(x.a)({},a,e.target.value))},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.composition,a=this.props.price;return s.a.createElement("div",{id:"form",className:"modal",tabIndex:"-1",role:"dialog"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Twoje zam\xf3wienie numer 3443"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("div",{className:"bg-light"},s.a.createElement("h3",null,"Sk\u0142adniki:"),s.a.createElement("ul",{className:"",style:{padding:"0"}},Object.keys(e).map(function(a){if(e[a]>0)return s.a.createElement("li",{key:a,className:"list-group-item"}," ",a," - ",e[a])}))),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("div",null,s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{onClick:this.handleChange,name:"where",id:"radio_0",type:"radio",className:"custom-control-input",value:"pickup",checked:"pickup"===this.state.where}),s.a.createElement("label",{htmlFor:"radio_0",className:"custom-control-label"},"odbi\xf3r osobisty")),s.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},s.a.createElement("input",{onClick:this.handleChange,name:"where",id:"radio_1",type:"radio",className:"custom-control-input",value:"delivery",checked:"delivery"===this.state.where}),s.a.createElement("label",{htmlFor:"radio_1",className:"custom-control-label"},"dow\xf3z pod adres")))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null),s.a.createElement("input",{id:"name",onChange:this.handleChange,name:"name",placeholder:"imi\u0119 i nazwisko ",type:"text",className:"form-control",value:this.state.name})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null),s.a.createElement("input",{id:"phone",onChange:this.handleChange,value:this.state.phone,name:"phone",placeholder:"nr telefonu",type:"text",className:"form-control"})),"delivery"===this.state.where?s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null),s.a.createElement("input",{value:this.state.addres,onChange:this.handleChange,id:"addres",name:"addres",placeholder:"adres",type:"text",className:"form-control"})):null,s.a.createElement("div",{className:"modal-footer"},s.a.createElement("span",{className:"badge badge-dark mx-2"}," kwota: ",a,"  z\u0142"),s.a.createElement(P.a,{to:"/pizzamaker",onClick:this.orderClick,"data-dismiss":"modal",className:"btn btn-success"},"Zam\xf3w"),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Zamknij")))))))}}]),a}(n.Component),M=t(13),I=t.n(M),S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).state={pizzaComponents:Object(u.a)({},O),pizzaComposition:{},basicprice:4,costs:0,howManyComp:0},t.createOrder=function(e){var a=e,n=new Date;a.orderId=n.getFullYear().toString()+""+n.valueOf().toString().slice(9,11)+Math.floor(40*Math.random()),a.cost=t.state.costs,a.components=t.state.pizzaComposition,t.props.addPizza(a),setTimeout(I()({icon:"success",text:"".concat(a.name," Twoje zam\xf3wienie nr: ").concat(a.orderId," zosta\u0142o z\u0142o\u017cone czas oczekiwanie na ten moment to 45 minut")}),500),t.createEmptyPizza()},t.restartPizza=function(){I()("Czy napewno chcesz zresetowa\u0107 pizze?",{buttons:{catch:{text:"TAK",value:"yes"},defeat:!1}}).then(function(e){switch(e){case"yes":I()("Resetuje pizze"),t.createEmptyPizza()}})},t.createEmptyPizza=function(){var e=t.createNewPizza();t.setState({pizzaComposition:e,costs:0,howManyComp:0})},t.handleClick=function(e,a,n){var s=Object(u.a)({},t.state.pizzaComposition),r=t.state.costs,i=t.state.howManyComp;Object.keys(s).forEach(function(o){o===a&&e&&(s[o]++,r=Math.round(100*(r+n))/100,i++),o!==a||e||(s[o]--,r=Math.round(100*(r-n))/100,i--),t.setState(function(e){return{pizzaComposition:s,costs:r,howManyComp:i}})})},t.fillNewPizza=function(){var e={},a=null;Object.keys(t.props.pizzaList).forEach(function(n){t.props.pizzaList[n].orderId===t.props.id.params.id.toString()&&(e=t.props.pizzaList[n].components,console.log(e),a=t.props.pizzaList[n].costs)}),t.setState({pizzaComposition:e,costs:a,howManyComp:5})},t.createNewPizza=function(){for(var e={},a=Object.keys(t.state.pizzaComponents),n=0;n<a.length;n++)e[a[n]]=0;return e},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.exist&&this.fillNewPizza(),this.createEmptyPizza()}},{key:"render",value:function(){return s.a.createElement("div",{className:"row no-gutters h-100"},s.a.createElement(z,{PizzaBase:j,components:this.state.pizzaComponents,composition:this.state.pizzaComposition}),s.a.createElement(b,{handleClick:this.handleClick,components:this.state.pizzaComponents,composition:this.state.pizzaComposition,reset:this.restartPizza,basicPrice:this.state.basicprice,costs:this.state.costs,howMany:this.state.howManyComp}),s.a.createElement(L,{composition:this.state.pizzaComposition,price:this.state.costs+this.state.basicprice,createOrder:this.createOrder}))}}]),a}(n.Component),T=(t(42),function(e){var a=e.components;return s.a.createElement("div",{className:"col-lg-3 card py-2 pizza-item"},s.a.createElement("h5",null," zam\xf3wienie nr:",e.orderId),Object.keys(a).map(function(e){if(a[e]>0)return s.a.createElement("li",{className:"list-group-item"}," ",e," - ",a[e])}),s.a.createElement(P.a,{to:"/pizzamaker/"+e.orderId,className:"btn btn-success py-2"},"zam\xf3w "))}),A=function(e){console.log(e.pizzaList);var a=e.pizzaList.map(function(e){return s.a.createElement(T,Object.assign({},e,{key:e.orderId+6*Math.random()}))});return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row text-center  py-4"},a))},D=t(45),q=function(){return s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark "},s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement(D.a,{className:"navbar-brand",to:"/pizzamaker",activeClassName:"disabled"},"Kreator Pizzy"),s.a.createElement(D.a,{className:"navbar-brand",to:"/pizzalist",activeClassName:"disabled"},"Lista pizz"))))},B=function(){return s.a.createElement("footer",null,"Created By @ Patyk Szober")},_=function(e){return s.a.createElement("div",{className:""},s.a.createElement(q,null),e.children,s.a.createElement(B,null))},F=t(46),Z=t(26),J=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).state={pizzaList:[{address:"Pozna\u0144ska 22",cost:6.8,name:"Patryk Test",orderId:"20190433",phone:"4343234234",where:"delivery",components:{becon:0,mushroom:2,tomato:3}},{address:"nowot 2",cost:18.9,name:"Patryk Test",orderId:"20190411",phone:"4343234234",where:"delivery",components:{becon:1,mushroom:2,tomato:5}}]},t.addPizzaList=function(e){var a=[].concat(Object(o.a)(t.state.pizzaList),[e]);t.setState({pizzaList:a})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(F.a,null,s.a.createElement("div",null,s.a.createElement(_,{pizzaList:this.pizzaList},s.a.createElement(Z.a,{path:"/pizzamaker",exact:!0,render:function(a){return s.a.createElement(S,{pizzaList:e.state.pizzaList,addPizza:e.addPizzaList})}}),s.a.createElement(Z.a,{path:"/pizzamaker/:id",render:function(a){return s.a.createElement(S,{exist:!0,id:a.match,pizzaList:e.state.pizzaList,addPizza:e.addPizzaList})}}),s.a.createElement(Z.a,{path:"/pizzalist",render:function(a){return s.a.createElement(A,{pizzaList:e.state.pizzaList})}}))))}}]),a}(n.Component);i.a.render(s.a.createElement(J,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.aa40a59a.chunk.js.map