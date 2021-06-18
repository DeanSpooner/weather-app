(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(14),n=c.n(r),i=(c(21),c(3)),o=c(0),d=function(e){var t=e.city,c=e.country,a=e.errorMessage;return a?Object(o.jsx)("h1",{children:a}):Object(o.jsx)("h1",{className:"location-details",children:"".concat(t,", ").concat(c)})};d.defaultProps={errorMessage:""};var u=d,j=(c(23),c(15)),l=c.n(j),m=c(4),f=c.n(m),b=function(e){var t=e.date,c=e.description,a=e.icon,s=e.temperature,r=e.onSelect;return Object(o.jsxs)("div",{className:"forecast-summary","data-testid":"forecast-summary",children:[Object(o.jsx)("div",{className:"forecast-summary__date",children:f()(t).format("ddd Do MMM")}),Object(o.jsx)("div",{className:"forecast-summary__icon","data-testid":"forecast-icon",children:Object(o.jsx)(l.a,{name:"owm",iconId:a})}),Object(o.jsxs)("div",{className:"forecast-summary__temperature",children:[s.max,"\xb0C"]}),Object(o.jsx)("div",{className:"forecast-summary__description",children:c}),Object(o.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"More details"})]})},h=(c(34),function(e){var t=e.forecasts,c=e.onForecastSelect;return Object(o.jsx)("div",{className:"forecast-summaries",children:t.map((function(e){return Object(o.jsx)(b,{date:e.date,description:e.description,icon:e.icon.toString(),temperature:e.temperature,onSelect:c},e.date)}))})}),p=(c(35),function(e){var t=e.forecast,c=t.date,a=t.temperature,s=t.humidity,r=t.wind;return Object(o.jsxs)("div",{className:"forecast-details","data-testid":"forecast-details",children:[Object(o.jsx)("div",{className:"forecast-details__date",children:f()(c).format("ddd Do MMM")}),Object(o.jsxs)("div",{className:"forecast-details__temperature",children:["Max temp: ".concat(a.max),"\xb0C"]}),Object(o.jsxs)("div",{className:"forecast-details__temperature",children:["Min temp: ".concat(a.min),"\xb0C"]}),Object(o.jsxs)("div",{className:"forecast-details__humidity","data-testid":"forecast-icon",children:["Humidity: ",s,"%"]}),Object(o.jsxs)("div",{className:"forecast-details__wind",children:["Wind speed: ",r.speed,"mph"]}),Object(o.jsxs)("div",{className:"forecast-details__direction",children:["Wind direction: ",r.direction.toUpperCase()]})]})}),O=function(e){var t=e.searchText,c=e.setSearchText,a=e.onSubmit;return Object(o.jsxs)("div",{className:"search-form",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:t}),Object(o.jsx)("button",{type:"submit",onClick:a,className:"search-form__button",children:"Search"})]})},x=c(16),v=c.n(x),y=function(e,t,c,a,s){var r="https://mcr-codes-weather-app.herokuapp.com/forecast";return e&&(r+="?city=".concat(e)),v.a.get(r).then((function(e){t(e.data.forecasts[0].date),c(e.data.forecasts),a(e.data.location),s()})).catch((function(e){var t=e.response.status;404===t&&(s("Currently only UK towns/cities. Is your spelling correct?"),console.error("Location is not valid",e)),500===t&&(s("Oops, server problems on our end, sorry! Try again later. :)"),console.error("Server error",e))}))},_=(c(54),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({city:"",country:""}),n=Object(i.a)(r,2),d=n[0],j=n[1],l=Object(a.useState)(0),m=Object(i.a)(l,2),f=m[0],b=m[1],x=c.find((function(e){return e.date===f})),v=Object(a.useState)(""),_=Object(i.a)(v,2),N=_[0],S=_[1],M=Object(a.useState)(""),g=Object(i.a)(M,2),w=g[0],C=g[1];return Object(a.useEffect)((function(){y(N,b,s,j,C)}),[]),Object(o.jsxs)("div",{className:"weather-app",children:[Object(o.jsx)(u,{city:d.city,country:d.country,errorMessage:w}),Object(o.jsx)(O,{searchText:N,setSearchText:S,onSubmit:function(){y(N,b,s,j,C)}}),!w&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{forecasts:c,onForecastSelect:function(e){b(e)}}),x&&Object(o.jsx)(p,{forecast:x})]})]})});n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5da04354.chunk.js.map