(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),c=a.n(r),l=a(15),o=a.n(l),s=a(18),u=a(7),m=a(8),d=a(11),h=a(9),p=a(10),v=a(2),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={country:""},a.onInputChange=a.onInputChange.bind(Object(v.a)(a)),a.onFormSubmit=a.onFormSubmit.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onInputChange",value:function(e){this.setState({country:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.callMeWhenSubmitted(this.state.country)}},{key:"render",value:function(){return i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("input",{type:"text",placeholder:"Search for a country...",value:this.state.country,onChange:this.onInputChange})))}}]),t}(i.a.Component),f=a(19),E=a.n(f),b=a(16),k=(a(59),function(e){var t=e.country;return i.a.createElement("div",{className:"ui card country-class"},i.a.createElement(b.b,{to:{pathname:"".concat(t.name),name:t.name,flag:t.flag,nativeName:t.nativeName,population:t.population,region:t.region,subregion:t.subregion,capital:t.capital,topLevelDomain:t.topLevelDomain,currencies:t.currencies,languages:t.languages,borders:t.borders}},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:t.flag,alt:t.name}))),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.name),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,i.a.createElement("strong",null,"Population:")," ",t.population),i.a.createElement("p",null,i.a.createElement("strong",null,"Region:")," ",t.region),i.a.createElement("p",null,i.a.createElement("strong",null,"Capital:")," ",t.capital))))}),N=function(e){var t=e.countries,a=e.region;if(""!==a){var n=t.filter(function(e){return a===e.region}).map(function(e){return i.a.createElement(k,{key:e.name,country:e})});return i.a.createElement("div",{className:"ui centered link cards"},n)}var r=t.map(function(e){return i.a.createElement(k,{key:e.name,country:e})});return i.a.createElement("div",{className:"ui centered link cards"},r)},y=(a(64),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).goBack=a.goBack.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this.props.location.currencies.map(function(e){return i.a.createElement("div",{className:"info-list-item",key:e.name},e.name)}),t=this.props.location.languages.map(function(e){return i.a.createElement("div",{className:"item info-list-item",key:e.name},e.name)}),a=this.props.location.borders.map(function(e){return i.a.createElement("div",{className:"info-list-item",key:e},e)});return i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eight wide column"},i.a.createElement("img",{src:this.props.location.flag,alt:this.props.location.name})),i.a.createElement("div",{className:"eight wide column info-area"},i.a.createElement("div",{className:"info-item"},i.a.createElement("h1",null,this.props.location.name)),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Native name:")," ",this.props.location.nativeName),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Population:")," ",this.props.location.population),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Region:")," ",this.props.location.region),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Subregion:")," ",this.props.location.subregion),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Capital:")," ",this.props.location.capital),i.a.createElement("div",{className:"info-item"},i.a.createElement("strong",null,"Top Level Domain:")," ",this.props.location.topLevelDomain),i.a.createElement("div",{className:"info-item list"},i.a.createElement("strong",null,"Currency:")," ",e),i.a.createElement("div",{className:"info-item list"},i.a.createElement("strong",null,"Languages:")," ",t),i.a.createElement("div",{className:"info-item list"},i.a.createElement("strong",null,"Border Countries:")," ",a))),i.a.createElement("div",{className:"ui row"},i.a.createElement("button",{className:"ui button",onClick:this.goBack},"Go Back")))}}]),t}(i.a.Component)),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onClickLight=a.onClickLight.bind(Object(v.a)(a)),a.onClickDark=a.onClickDark.bind(Object(v.a)(a)),a.handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){this.props.callMeWhenClicked(e)}},{key:"onClickLight",value:function(e){e.preventDefault(),this.handleClick("light")}},{key:"onClickDark",value:function(e){e.preventDefault(),this.handleClick("dark")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui buttons"},i.a.createElement("button",{className:"ui button",onClick:this.onClickLight},"Light"),i.a.createElement("div",{className:"or"}),i.a.createElement("button",{className:"ui button",onClick:this.onClickDark},"Dark"))}}]),t}(i.a.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={region:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){this.props.onClicking(e)}},{key:"handleChange",value:function(e){var t=e.target.value;e.preventDefault(),this.setState({region:e.target.value}),this.handleSubmit(t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("select",{name:"items",multiple:"",className:"ui fluid dropdown",onChange:this.handleChange,value:this.state.region},i.a.createElement("option",{value:""},"Filter by Region"),i.a.createElement("option",{value:"Africa"},"Africa"),i.a.createElement("option",{value:"Americas"},"Americas"),i.a.createElement("option",{value:"Asia"},"Asia"),i.a.createElement("option",{value:"Europe"},"Europe"),i.a.createElement("option",{value:"Oceania"},"Oceania")))}}]),t}(i.a.Component),j=(a(65),a(12)),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={countries:[],selectedCountry:null,mode:null,region:""},a.onCountrySubmit=function(){var e=Object(s.a)(o.a.mark(function e(t){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://restcountries.eu/rest/v2/name/".concat(t),e.next=3,E.a.get(n);case 3:i=e.sent,a.setState({countries:i.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.checkMode=function(e){a.setState({mode:e},function(){console.log("MODE:",a.state.mode)})},a.filterByRegion=function(e){a.setState({region:e},function(){console.log("region:",this.state.region)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://restcountries.eu/rest/v2/all",e.next=3,E.a.get("https://restcountries.eu/rest/v2/all");case 3:t=e.sent,this.setState({countries:t.data}),this.setState({mode:"light"});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement(b.a,null,i.a.createElement("div",{className:"light"===this.state.mode?"light-mode":"dark-mode"},i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"ui two column centered grid"},i.a.createElement("div",{className:"two column centered row"},i.a.createElement("div",{className:"column"},i.a.createElement("h1",null,"Where in the World?")),i.a.createElement("div",{className:"column",style:{textAlign:"right"}},i.a.createElement(C,{callMeWhenClicked:this.checkMode}))),i.a.createElement("div",{className:"row middle aligned"},i.a.createElement("div",{className:"ten wide column"},i.a.createElement(g,{callMeWhenSubmitted:this.onCountrySubmit})),i.a.createElement("div",{className:"six wide column"},i.a.createElement(O,{onClicking:this.filterByRegion}))),i.a.createElement(j.c,null,i.a.createElement(j.a,{exact:!0,path:"/where-in-the-world-react-app/",render:function(t){return i.a.createElement(N,Object.assign({countries:e.state.countries,region:e.state.region},t))}}),i.a.createElement(j.a,{path:"/where-in-the-world-react-app/:id",render:function(t){return i.a.createElement(y,Object.assign({countries:e.state.countries},t))}}))))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(w,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9143e175.chunk.js.map