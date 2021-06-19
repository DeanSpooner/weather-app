(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(15),n=c.n(r),o=(c(21),c(3)),i=(c(22),c(0)),d=function(e){var t=e.city,c=e.country,a=e.errorMessage;return a?Object(i.jsx)("h1",{children:a}):Object(i.jsx)("h1",{className:"location-details",children:"".concat(t,", ").concat(c)})};d.defaultProps={errorMessage:""};var u=d,j=(c(24),c(4)),m=c.n(j),l=c(5),f=c.n(l),b=function(e){var t=e.date,c=e.description,a=e.icon,s=e.temperature,r=e.onSelect;return Object(i.jsxs)("div",{className:"forecast-summary","data-testid":"forecast-summary",children:[Object(i.jsx)("div",{className:"forecast-summary__date",children:f()(t).format("ddd Do MMM")}),Object(i.jsx)("div",{className:"forecast-summary__icon","data-testid":"forecast-icon",children:Object(i.jsx)(m.a,{name:"owm",iconId:a})}),Object(i.jsx)("div",{className:"forecast-summary__description",children:c}),Object(i.jsxs)("div",{className:"forecast-summary__temperature",children:[s.max,"\xb0C"]}),Object(i.jsx)("button",{type:"button",className:"forecase-summary__button",onClick:function(){return r(t)},children:"More"})]})},p=(c(35),function(e){var t=e.forecasts,c=e.onForecastSelect;return Object(i.jsx)("div",{className:"forecast-summaries",children:t.map((function(e){return Object(i.jsx)(b,{date:e.date,description:e.description,icon:e.icon.toString(),temperature:e.temperature,onSelect:c},e.date)}))})}),h=(c(36),function(e){var t=e.forecast,c=t.date,a=t.temperature,s=t.humidity,r=t.wind;return Object(i.jsxs)("div",{className:"forecast-details","data-testid":"forecast-details",children:[Object(i.jsx)("div",{className:"forecast-details__date",children:f()(c).format("dddd Do MMMM yyyy")}),Object(i.jsxs)("div",{className:"forecast-details__temperature",children:["Max temp: ".concat(a.max),"\xb0C"]}),Object(i.jsxs)("div",{className:"forecast-details__temperature",children:["Min temp: ".concat(a.min),"\xb0C"]}),Object(i.jsxs)("div",{className:"forecast-details__humidity",children:["Humidity: ",s,"%"]}),Object(i.jsxs)("div",{className:"forecast-details__wind",children:[Object(i.jsx)(m.a,{name:"owm",iconId:"957"}),": ",r.speed,"mph"," ",r.direction.toUpperCase()]})]})}),O=(c(37),c.p+"static/media/magnifier.1d92f967.png"),x=function(e){var t=e.searchText,c=e.setSearchText,a=e.onSubmit;return Object(i.jsxs)("div",{className:"search-form",children:[Object(i.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?a():null},value:t,className:"search-form__input"}),Object(i.jsx)("button",{type:"submit",onClick:a,className:"search-form__button",children:Object(i.jsx)("img",{src:O,alt:"magnifier"})})]})},y=(c(38),function(){return Object(i.jsx)("div",{className:"credits",children:Object(i.jsx)("a",{href:"https://github.com/deanspooner",target:"__blank",children:"Weather App by Dean Spooner"})})}),v=c(16),_=c.n(v),N=function(e,t,c,a,s){var r="https://mcr-codes-weather-app.herokuapp.com/forecast";return e&&(r+="?city=".concat(e)),_.a.get(r).then((function(e){t(e.data.forecasts[0].date),c(e.data.forecasts),a(e.data.location),s()})).catch((function(e){var t=e.response.status;404===t&&(s("Currently only UK towns/cities. Is your spelling correct?"),console.error("Location is not valid",e)),500===t&&(s("Oops, server problems on our end, sorry! Try again later. :)"),console.error("Server error",e))}))},g=(c(57),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({city:"",country:""}),n=Object(o.a)(r,2),d=n[0],j=n[1],m=Object(a.useState)(0),l=Object(o.a)(m,2),f=l[0],b=l[1],O=c.find((function(e){return e.date===f})),v=Object(a.useState)(""),_=Object(o.a)(v,2),g=_[0],S=_[1],M=Object(a.useState)(""),w=Object(o.a)(M,2),C=w[0],k=w[1];return Object(a.useEffect)((function(){N(g,b,s,j,k)}),[]),Object(i.jsxs)("div",{className:"weather-app",children:[Object(i.jsx)(u,{city:d.city,country:d.country,errorMessage:C}),Object(i.jsx)(x,{searchText:g,setSearchText:S,onSubmit:function(){N(g,b,s,j,k)}}),!C&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{forecasts:c,onForecastSelect:function(e){b(e)}}),O&&Object(i.jsx)(h,{forecast:O})]}),Object(i.jsx)(y,{})]})});n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ed711d08.chunk.js.map