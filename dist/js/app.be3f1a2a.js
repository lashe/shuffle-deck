(function(t){function e(e){for(var i,a,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},o=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4ca98989"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"239f":function(t,e,n){},"4c7c":function(t,e,n){"use strict";n("239f")},"723d":function(t,e,n){"use strict";n("f461")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={class:"container"},o={style:{color:"red"}},a={style:{width:"100%"}},c=Object(i["d"])("tr",null,[Object(i["d"])("th",null,"Algorithm name"),Object(i["d"])("th",null,"Time Started"),Object(i["d"])("th",null,"Time ended"),Object(i["d"])("th",null,"Total time")],-1),s=Object(i["d"])("td",null,"JS Random",-1),l=Object(i["d"])("td",null,"Xorshift",-1);function u(t,e,n,u,d,m){var h=Object(i["t"])("Header"),b=Object(i["t"])("Button");return Object(i["m"])(),Object(i["c"])("div",r,[Object(i["d"])(h),Object(i["A"])(Object(i["d"])("input",{class:"input",onInput:e[1]||(e[1]=function(t){return m.clear()}),onChange:e[2]||(e[2]=function(t){return m.warn()}),type:"number",min:"0",max:"10000",placeholder:"number","onUpdate:modelValue":e[3]||(e[3]=function(t){return d.numRnds=t})},null,544),[[i["x"],d.numRnds]]),Object(i["A"])(Object(i["d"])("label",o,"please enter a valid number",512),[[i["y"],d.err]]),Object(i["A"])(Object(i["d"])("input",{class:"input",placeholder:"start time","onUpdate:modelValue":e[4]||(e[4]=function(t){return d.starttime=t}),readonly:""},null,512),[[i["x"],d.starttime]]),Object(i["A"])(Object(i["d"])("input",{class:"input",placeholder:"end time","onUpdate:modelValue":e[5]||(e[5]=function(t){return d.endtime=t}),readonly:""},null,512),[[i["x"],d.endtime]]),Object(i["A"])(Object(i["d"])("input",{class:"input",placeholder:"total time","onUpdate:modelValue":e[6]||(e[6]=function(t){return d.totaltime=t}),readonly:""},null,512),[[i["x"],d.totaltime]]),Object(i["d"])(b,{onClick:e[7]||(e[7]=function(t){return m.onClick()}),text:"JS Random",color:"green"}),Object(i["d"])(b,{onClick:e[8]||(e[8]=function(t){return m.onClick2()}),text:"Xorshift",color:"green"}),Object(i["d"])("table",a,[c,Object(i["d"])("tr",null,[s,Object(i["d"])("td",null,Object(i["v"])(d.starttime2),1),Object(i["d"])("td",null,Object(i["v"])(d.endtime2),1),Object(i["d"])("td",null,Object(i["v"])(d.totaltime2),1)]),Object(i["d"])("tr",null,[l,Object(i["d"])("td",null,Object(i["v"])(d.starttime3),1),Object(i["d"])("td",null,Object(i["v"])(d.endtime3),1),Object(i["d"])("td",null,Object(i["v"])(d.totaltime3),1)])])])}var d=Object(i["B"])("data-v-1751900d");Object(i["q"])("data-v-1751900d");var m={class:"header"};Object(i["n"])();var h=d((function(t,e,n,r,o,a){return Object(i["m"])(),Object(i["c"])("header",m,[Object(i["d"])("h1",null,Object(i["v"])(n.title),1)])})),b={name:"Header",props:{title:{type:String,default:"Shuffle Deck"}},components:{},methods:{onClick:function(){console.log("click")}}};n("723d");b.render=h,b.__scopeId="data-v-1751900d";var f=b;function p(t,e,n,r,o,a){return Object(i["m"])(),Object(i["c"])("button",{style:{background:n.color},class:"btn"},Object(i["v"])(n.text),5)}var O={name:"Button",props:{text:String,color:String},methods:{onClick:function(){console.log("click")}}};O.render=p;var j=O,v={name:"App",components:{Header:f,Button:j},data:function(){return{tasks:[],numRnds:"",starttime:"",endtime:"",totaltime:"",starttime2:"",endtime2:"",totaltime2:"",starttime3:"",endtime3:"",totaltime3:"",starttime4:"",endtime4:"",totaltime4:"",Rt:"",Rt2:"",err:!1,warning:!1}},methods:{onClick:function(){if(this.numRnds&&this.numRnds<=1e4){this.starttime||(this.starttime=(new Date).toISOString().substr(11,19),this.Rt=(new Date).getTime()),this.starttime2=(new Date).toISOString().substr(11,19);var t=performance.now();console.time("randomnum");for(var e=0;e<this.numRnds;e++){var n=Math.random();console.log(n)}var i=performance.now();this.endtime2=(new Date).toISOString().substr(11,19),console.timeEnd("randomnum"),this.totaltime2=i-t,this.endtime2&&this.endtime3&&(this.endtime=(new Date).toISOString().substr(11,19),this.Rt2=(new Date).getTime(),this.totaltime=this.totaltime2+this.totaltime3)}else this.err=!0},onClick2:function(){var t=n("48d8");if(this.numRnds&&this.numRnds<=1e4){this.starttime||(this.starttime=(new Date).toISOString().substr(11,19),this.Rt=(new Date).getTime());var e=performance.now();this.starttime3=(new Date).toISOString().substr(11,19),console.time("randomnum2");for(var i=0;i<this.numRnds;i++){var r=t.random();console.log(r)}var o=performance.now();this.endtime3=(new Date).toISOString().substr(11,19),console.timeEnd("randomnum2"),this.totaltime3=o-e,this.endtime2&&this.endtime3&&(this.endtime=(new Date).toISOString().substr(11,19),this.Rt2=(new Date).getTime(),this.totaltime=this.totaltime2+this.totaltime3)}else this.err=!0},clear:function(){this.err=!1},warn:function(){this.starttime&&!this.endtime&&(confirm("Test has not been completed. to continue test with current round value click cancel, to input new value click ok")?(this.starttime="",this.starttime2="",this.starttime3="",this.starttime4="",this.endtime="",this.endtime2="",this.endtime3="",this.endtime4="",this.totaltime="",this.totaltime2="",this.totaltime3="",this.totaltime4=""):this.confirm=!1),this.starttime&&this.endtime&&(this.starttime="",this.starttime2="",this.starttime3="",this.starttime4="",this.endtime="",this.endtime2="",this.endtime3="",this.endtime4="",this.totaltime="",this.totaltime2="",this.totaltime3="",this.totaltime4="")}}};n("4c7c");v.render=u;var g=v,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function y(t,e,n,r,o,a){return Object(i["m"])(),Object(i["c"])("h1",null,"Wagwan??")}var S=n("d4ec"),k=n("262e"),R=n("2caf"),x=n("9ab4"),D=n("ce1f"),T=function(t){Object(k["a"])(n,t);var e=Object(R["a"])(n);function n(){return Object(S["a"])(this,n),e.apply(this,arguments)}return n}(D["b"]);T=Object(x["a"])([Object(D["a"])({components:{}})],T);var C=T;C.render=y;var I=C,A=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=Object(w["a"])({history:Object(w["b"])("/"),routes:A}),_=P,E=n("5502"),M=Object(E["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["b"])(g).use(M).use(_).mount("#app")},f461:function(t,e,n){}});
//# sourceMappingURL=app.be3f1a2a.js.map