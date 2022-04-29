(this["webpackJsonpcamp-buddy-scoreboard"]=this["webpackJsonpcamp-buddy-scoreboard"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);var c=r(3),n=r.n(c),a=r(2),o=r(6),s=r(5),i=r(4),d=r(0),u=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).imgStyle={position:"fixed",top:"-14px",right:"-14px",border:"0",zIndex:"100"},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"https://github.com/dunste123/camp-buddy-scoreboard",rel:"noopener noreferrer",target:"_blank",children:Object(d.jsx)("img",{style:this.imgStyle,src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub"})})})}}]),r}(c.Component),b=(r(12),function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.text,r=e.click,c=e.active,n=void 0!==c&&c;return Object(d.jsx)("button",{className:n?"active":"",onClick:r,"data-v-fc267a5a":"",children:t})}}]),r}(c.Component)),l=(r(13),r(1)),j=r(7),h=Object(j.a)("indexes"),v=Object(j.a)("items"),m=Object(j.a)("storeKey"),f=function(){function e(t,r){Object(a.a)(this,e),Object.defineProperty(this,h,{writable:!0,value:{}}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object(l.a)(this,v)[v]=t,Object(l.a)(this,m)[m]=r,this._setIndexes(),this._loadScores()}return Object(o.a)(e,[{key:"buddies",get:function(){return Object(l.a)(this,v)[v]}},{key:"incrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t+1)}},{key:"decrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t-1)}},{key:"incrementExtraScore",value:function(e,t){var r=this.getExtraScore(e,t);this.setExtraScore(e,t,r+1)}},{key:"decrementExtraScore",value:function(e,t){var r=this.getExtraScore(e,t);this.setExtraScore(e,t,r-1)}},{key:"getScore",value:function(e){var t=Object(l.a)(this,h)[h][e.toLowerCase()];if("undefined"===typeof t)throw new Error("Missing buddy: ".concat(e));return Object(l.a)(this,v)[v][t].score}},{key:"getExtraScore",value:function(e,t){var r=Object(l.a)(this,h)[h][e.toLowerCase()];if("undefined"===typeof r)throw new Error("Missing buddy: ".concat(e));var c=Object(l.a)(this,v)[v][r].extra_scores,n=c.findIndex((function(e){return e.title===t}));return c[n].score}},{key:"setScore",value:function(e,t){var r=Object(l.a)(this,h)[h][e.toLowerCase()];"undefined"!==typeof r&&(Object(l.a)(this,v)[v][r].score=t,this._saveScores())}},{key:"setExtraScore",value:function(e,t,r){var c=Object(l.a)(this,h)[h][e.toLowerCase()];if("undefined"!==typeof c){var n=Object(l.a)(this,v)[v][c].extra_scores,a=n.findIndex((function(e){return e.title===t}));a<0||(n[a].score=r,this._saveScores())}}},{key:"resetScores",value:function(){localStorage.removeItem(Object(l.a)(this,m)[m])}},{key:"_setIndexes",value:function(){for(var e=0;e<Object(l.a)(this,v)[v].length;e++){var t=Object(l.a)(this,v)[v][e];Object(l.a)(this,h)[h][t.name.toLowerCase()]=e}}},{key:"_loadScores",value:function(){var e=localStorage.getItem(Object(l.a)(this,m)[m]);if(e)for(var t=JSON.parse(e),r=0,c=Object.keys(t);r<c.length;r++){var n=c[r];if(n.includes("__")){var a=n.split("__");this.setExtraScore(a[0],a[1],t[n])}else t.hasOwnProperty(n)&&this.setScore(n,t[n])}}},{key:"_saveScores",value:function(){var e={};Object(l.a)(this,v)[v].forEach((function(t){e[t.name.toLowerCase()]=t.score,t.extra_scores&&t.extra_scores.forEach((function(r){e["".concat(t.name.toLowerCase(),"__").concat(r.title)]=r.score}))}));var t=JSON.stringify(e);localStorage.setItem(Object(l.a)(this,m)[m],t)}}]),e}(),O=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.call(this,[{name:"Hiro",emoteId:"514293666853158913",score:0},{name:"Natsumi",emoteId:"514293667192766465",score:0},{name:"Hunter",emoteId:"514294078570102784",score:0},{name:"Yoichi",emoteId:"514293667595419663",score:0},{name:"Taiga",emoteId:"514293667507208193",score:0,extra_scores:[{title:"Top",score:0},{title:"Bottom",score:0}]}],"buddies")}return r}(f),S=(r(14),function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"_extraScores",value:function(e,t,r,c){var n=e.title,a=e.score;return Object(d.jsxs)("div",{className:"buddy","data-v-232c74d7":"",children:[Object(d.jsx)("h3",{"data-v-232c74d7":"",children:n}),Object(d.jsxs)("h4",{"data-v-232c74d7":"",children:["Score: ",a]}),Object(d.jsxs)("div",{className:"buttons","data-v-232c74d7":"",children:[Object(d.jsx)(b,{text:"+",click:function(){return r(n)},"data-v-232c74d7":""}),Object(d.jsx)(b,{text:"-",click:function(){return c(n)},"data-v-232c74d7":""})]})]},t)}},{key:"render",value:function(){var e=this,t=this.props,r=t.incrementScore,c=t.decrementScore,n=t.incExtraScore,a=t.decExtraScore,o=this.props.buddy,s=o.name,i=o.emoteId,u=o.score,l=o.extra_scores,j="https://cdn.discordapp.com/emojis/".concat(i,".png?v=1");return Object(d.jsxs)("div",{className:"buddy","data-v-232c74d7":"",children:[Object(d.jsx)("img",{src:j,alt:s,crossOrigin:"anonymous","data-v-232c74d7":""}),Object(d.jsx)("h1",{"data-v-232c74d7":"",children:s}),Object(d.jsxs)("h2",{"data-v-232c74d7":"",children:["Score: ",u]}),Object(d.jsxs)("div",{className:"buttons","data-v-232c74d7":"",children:[Object(d.jsx)(b,{text:"+",click:r,"data-v-232c74d7":""}),Object(d.jsx)(b,{text:"-",click:c,"data-v-232c74d7":""})]}),l?l.map((function(t,r){return e._extraScores(t,r,n,a)})):""]})}}]),r}(c.Component)),x=(r(15),function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(e){var c;return Object(a.a)(this,r),(c=t.call(this,e))._incrementScore=function(e){c._store.incrementScore(e),c.setState({})},c._decrementScore=function(e){c._store.decrementScore(e),c.setState({})},c._incExtraScore=function(e,t){c._store.incrementExtraScore(e,t),c.setState({})},c._decExtraScore=function(e,t){c._store.decrementExtraScore(e,t),c.setState({})},c.resetScores=function(){window.confirm("Hold up buddy\nThis will reset all your camper scores, are you sure?")&&(c._store.resetScores(),window.location.reload())},c._store=new O,c}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this._store.buddies;return Object(d.jsx)("div",{className:"buddies","data-v-94e4cb5b":"",children:t.map((function(t){return Object(d.jsx)(S,{buddy:t,className:"buddy",incrementScore:function(){return e._incrementScore(t.name)},decrementScore:function(){return e._decrementScore(t.name)},incExtraScore:function(r){return e._incExtraScore(t.name,r)},decExtraScore:function(r){return e._decExtraScore(t.name,r)},"data-v-94e4cb5b":""},t.emoteId)}))})}}]),r}(c.Component)),_=(r(16),function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.call(this,[{name:"Aiden",emoteId:"514293666936782850",score:0,extra_scores:[{title:"Top",score:0},{title:"Bottom",score:0}]},{name:"Goro",emoteId:"514293666861416466",score:0,extra_scores:[{title:"Top",score:0},{title:"Bottom",score:0}]}],"scoutmasters")}return r}(f)),p=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(e){var c;return Object(a.a)(this,r),(c=t.call(this,e))._incrementScore=function(e){c._store.incrementScore(e),c.setState({})},c._decrementScore=function(e){c._store.decrementScore(e),c.setState({})},c._incExtraScore=function(e,t){c._store.incrementExtraScore(e,t),c.setState({})},c._decExtraScore=function(e,t){c._store.decrementExtraScore(e,t),c.setState({})},c.resetScores=function(){window.confirm("Stop right there!\nThis will reset all your scoutmaster scores, are you sure?")&&(c._store.resetScores(),window.location.reload())},c._store=new _,c}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this._store.buddies;return Object(d.jsx)("div",{className:"buddies","data-v-e0238a95":"",children:t.map((function(t){return Object(d.jsx)(S,{buddy:t,className:"buddy",incrementScore:function(){return e._incrementScore(t.name)},decrementScore:function(){return e._decrementScore(t.name)},incExtraScore:function(r){return e._incExtraScore(t.name,r)},decExtraScore:function(r){return e._decExtraScore(t.name,r)},"data-v-e0238a95":""},t.emoteId)}))})}}]),r}(c.Component),y=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(e){var c,o;return Object(a.a)(this,r),(o=t.call(this,e))._current=null!==(c=localStorage.getItem("selected"))&&void 0!==c?c:"buddies",o._resetScores=function(){o._viewRef.current.resetScores()},o._setCurrent=function(e){o._current=e,localStorage.setItem("selected",e),o.setState({})},o._viewRef=n.a.createRef(),o}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"container","data-v-14b1e33d":"",children:[Object(d.jsx)(u,{"data-v-14b1e33d":""}),Object(d.jsxs)("div",{className:"selectbuttons","data-v-14b1e33d":"",children:[Object(d.jsx)("span",{"data-v-14b1e33d":"",children:"Select game:"}),Object(d.jsx)("button",{className:"buddies"===this._current?"active":"",onClick:function(){return e._setCurrent("buddies")},"data-v-14b1e33d":"",children:"Camp Buddy"}),Object(d.jsx)("button",{className:"scoutmasters"===this._current?"active":"",onClick:function(){return e._setCurrent("scoutmasters")},"data-v-14b1e33d":"",children:"Scoutmaster's season"})]}),"buddies"===this._current?Object(d.jsx)(x,{ref:this._viewRef,"data-v-14b1e33d":""}):Object(d.jsx)(p,{ref:this._viewRef,"data-v-14b1e33d":""}),Object(d.jsx)("div",{className:"reset","data-v-14b1e33d":"",children:Object(d.jsx)(b,{text:"Reset",click:this._resetScores,"data-v-14b1e33d":""})})]})}}]),r}(c.Component),g=r(9),k=document.getElementById("app");Object(g.createRoot)(k).render(Object(d.jsx)(y,{}))}},[[24,1,2]]]);
//# sourceMappingURL=main.faf5004b.chunk.js.map