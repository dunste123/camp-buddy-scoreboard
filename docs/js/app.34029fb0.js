(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"201a":function(e,t,n){"use strict";var r=n("6564"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"buddies"},e._l(e.buddies,(function(t,r){return n("div",{key:r,staticClass:"buddy"},[n("Buddy",{model:{value:e.buddies[r],callback:function(t){e.$set(e.buddies,r,t)},expression:"buddies[key]"}})],1)})),0),n("div",{staticClass:"reset"},[n("BuddyButton",{attrs:{action:e.resetScores,text:"Reset"}})],1)])},u=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("b0c0"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"https://cdn.discordapp.com/emojis/"+e.emoteId+".png?v=1",alt:e.name}}),n("h1",[e._v(e._s(e.name))]),n("h2",[e._v("Score: "+e._s(e.score))]),n("div",{staticClass:"buttons"},[n("BuddyButton",{attrs:{text:"+",action:e.incScore}}),n("BuddyButton",{attrs:{text:"-",action:e.decScore}})],1)])}),c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:function(t){return t.preventDefault(),e.action(t)}}},[e._v(e._s(e.text))])},s=[],d={name:"BuddyButton",props:{action:{type:Function,required:!0},text:{type:String,required:!0}}},l=d,f=(n("201a"),n("2877")),p=Object(f["a"])(l,i,s,!1,null,"34591800",null),m=p.exports,v={name:"Buddy",components:{BuddyButton:m},props:{value:{type:Object,required:!0}},methods:{incScore:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.value.score=this.score+t},decScore:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.value.score=this.score-t}},computed:{emoteId:function(){return this.value.emoteId},name:function(){return this.value.name},score:function(){return this.value.score}}},b=v,h=(n("de92"),Object(f["a"])(b,a,c,!1,null,"52b60e97",null)),y=h.exports,g={name:"app",components:{BuddyButton:m,Buddy:y},data:function(){return{buddies:[{name:"Hiro",emoteId:"514293666853158913",score:0},{name:"Natsumi",emoteId:"514293667192766465",score:0},{name:"Hunter",emoteId:"514294078570102784",score:0},{name:"Yoichi",emoteId:"514293667595419663",score:0},{name:"Taiga",emoteId:"514293667507208193",score:0}]}},mounted:function(){localStorage.getItem("buddies")&&this.unmapScores()},watch:{buddies:{handler:function(){localStorage.setItem("buddies",this.mapScores())},deep:!0}},methods:{mapScores:function(){var e={};return this.buddies.forEach((function(t){e[t.name.toLowerCase()]=t.score})),JSON.stringify(e)},unmapScores:function(){var e=this,t=JSON.parse(localStorage.getItem("buddies"));Object.keys(t).forEach((function(n){var r=!0,o=!1,u=void 0;try{for(var a,c=e.buddies[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var i=a.value;i.name.toLowerCase()===n&&(i.score=t[n])}}catch(s){o=!0,u=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}}))},resetScores:function(){localStorage.removeItem("buddies"),window.location.reload()}}},S=g,_=(n("8509"),Object(f["a"])(S,o,u,!1,null,"159b659e",null)),O=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},6564:function(e,t,n){},8509:function(e,t,n){"use strict";var r=n("863f"),o=n.n(r);o.a},"863f":function(e,t,n){},de92:function(e,t,n){"use strict";var r=n("ea76"),o=n.n(r);o.a},ea76:function(e,t,n){}});