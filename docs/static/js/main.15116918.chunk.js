(this["webpackJsonpcamp-buddy-scoreboard"]=this["webpackJsonpcamp-buddy-scoreboard"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),o=a.n(c),s=a(2),i=a(3),u=a(5),d=a(4),l=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).imgStyle={position:"fixed",top:"-14px",right:"-14px",border:"0",zIndex:"100"},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("a",{href:"https://github.com/dunste123/camp-buddy-scoreboard",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{style:this.imgStyle,src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub"})))}}]),a}(r.Component),f=a(1),m=a(6),v=function(){function e(){Object(s.a)(this,e),Object.defineProperty(this,h,{writable:!0,value:{}}),Object.defineProperty(this,b,{writable:!0,value:[{name:"Hiro",emoteId:"514293666853158913",score:0},{name:"Natsumi",emoteId:"514293667192766465",score:0},{name:"Hunter",emoteId:"514294078570102784",score:0},{name:"Yoichi",emoteId:"514293667595419663",score:0},{name:"Taiga",emoteId:"514293667507208193",score:0,extra_scores:[{title:"Top",score:0},{title:"Bottom",score:0}]}]}),this._checkKeitaro(),this._setIndexes(),this._loadScores()}return Object(i.a)(e,[{key:"incrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t+1)}},{key:"decrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t-1)}},{key:"incrementExtraScore",value:function(e,t){var a=this.getExtraScore(e,t);this.setExtraScore(e,t,a+1)}},{key:"decrementExtraScore",value:function(e,t){var a=this.getExtraScore(e,t);this.setExtraScore(e,t,a-1)}},{key:"getScore",value:function(e){var t=Object(f.a)(this,h)[h][e.toLowerCase()];if("undefined"===typeof t)throw new Error("Missing buddy: ".concat(e));return Object(f.a)(this,b)[b][t].score}},{key:"getExtraScore",value:function(e,t){var a=Object(f.a)(this,h)[h][e.toLowerCase()];if("undefined"===typeof a)throw new Error("Missing buddy: ".concat(e));var r=Object(f.a)(this,b)[b][a].extra_scores,n=r.findIndex((function(e){return e.title===t}));return r[n].score}},{key:"setScore",value:function(e,t){var a=Object(f.a)(this,h)[h][e.toLowerCase()];"undefined"!==typeof a&&(Object(f.a)(this,b)[b][a].score=t,this._saveScores())}},{key:"setExtraScore",value:function(e,t,a){var r=Object(f.a)(this,h)[h][e.toLowerCase()];if("undefined"!==typeof r){var n=Object(f.a)(this,b)[b][r].extra_scores,c=n.findIndex((function(e){return e.title===t}));c<0||(n[c].score=a,this._saveScores())}}},{key:"resetScores",value:function(){localStorage.removeItem("buddies")}},{key:"_checkKeitaro",value:function(){"true"===localStorage.getItem("keitaro")&&Object(f.a)(this,b)[b].unshift({name:"Keitaro",emoteId:"514293667041771531",score:0})}},{key:"_setIndexes",value:function(){for(var e=0;e<Object(f.a)(this,b)[b].length;e++){var t=Object(f.a)(this,b)[b][e];Object(f.a)(this,h)[h][t.name.toLowerCase()]=e}}},{key:"_loadScores",value:function(){var e=localStorage.getItem("buddies");if(e)for(var t=JSON.parse(e),a=0,r=Object.keys(t);a<r.length;a++){var n=r[a];if(console.log(n),n.includes("__")){var c=n.split("__");this.setExtraScore(c[0],c[1],t[n])}else t.hasOwnProperty(n)&&this.setScore(n,t[n])}}},{key:"_saveScores",value:function(){var e={};Object(f.a)(this,b)[b].forEach((function(t){e[t.name.toLowerCase()]=t.score,t.extra_scores&&t.extra_scores.forEach((function(a){e["".concat(t.name.toLowerCase(),"__").concat(a.title)]=a.score}))}));var t=JSON.stringify(e);localStorage.setItem("buddies",t)}},{key:"buddies",get:function(){return Object(f.a)(this,b)[b]}}]),e}(),h=Object(m.a)("indexes"),b=Object(m.a)("buddies"),S=(a(14),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.click;return(n.a.createElement("button",{onClick:a,"data-v-281af3b9":""},t))}}]),a}(r.Component)),p=(a(15),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"_extraScores",value:function(e,t,a,r){var c=e.title,o=e.score;return(n.a.createElement("div",{className:"buddy",key:t,"data-v-a14f5a02":""},n.a.createElement("h3",{"data-v-a14f5a02":""},c),n.a.createElement("h4",{"data-v-a14f5a02":""},"Score: ",o),n.a.createElement("div",{className:"buttons","data-v-a14f5a02":""},n.a.createElement(S,{text:"+",click:function(){return a(c)},"data-v-a14f5a02":""}),n.a.createElement(S,{text:"-",click:function(){return r(c)},"data-v-a14f5a02":""}))))}},{key:"render",value:function(){var e=this,t=this.props,a=t.incrementScore,r=t.decrementScore,c=t.incExtraScore,o=t.decExtraScore,s=this.props.buddy,i=s.name,u=s.emoteId,d=s.score,l=s.extra_scores,f="https://cdn.discordapp.com/emojis/".concat(u,".png?v=1");return n.a.createElement("div",{className:"buddy","data-v-a14f5a02":""},n.a.createElement("img",{src:f,alt:i,crossOrigin:"anonymous","data-v-a14f5a02":""}),n.a.createElement("h1",{"data-v-a14f5a02":""},i),n.a.createElement("h2",{"data-v-a14f5a02":""},"Score: ",d),n.a.createElement("div",{className:"buttons","data-v-a14f5a02":""},n.a.createElement(S,{text:"+",click:a,"data-v-a14f5a02":""}),n.a.createElement(S,{text:"-",click:r,"data-v-a14f5a02":""})),l?l.map((function(t,a){return e._extraScores(t,a,c,o)})):"")}}]),a}(r.Component)),y=(a(16),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e))._incrementScore=function(e){r._store.incrementScore(e),r.setState({})},r._decrementScore=function(e){r._store.decrementScore(e),r.setState({})},r._incExtraScore=function(e,t){r._store.incrementExtraScore(e,t),r.setState({})},r._decExtraScore=function(e,t){r._store.decrementExtraScore(e,t),r.setState({})},r._resetScores=function(){window.confirm("Hold up buddy\nThis will reset all your scores, are you sure?")&&(r._store.resetScores(),window.location.reload())},r._store=new v,r}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this._store.buddies;return n.a.createElement("div",{className:"container","data-v-958f6f56":""},n.a.createElement(l,{"data-v-958f6f56":""}),n.a.createElement("div",{className:"buddies","data-v-958f6f56":""},t.map((function(t){return n.a.createElement(p,{buddy:t,key:t.emoteId,className:"buddy",incrementScore:function(){return e._incrementScore(t.name)},decrementScore:function(){return e._decrementScore(t.name)},incExtraScore:function(a){return e._incExtraScore(t.name,a)},decExtraScore:function(a){return e._decExtraScore(t.name,a)},"data-v-958f6f56":""})}))),n.a.createElement("div",{className:"reset","data-v-958f6f56":""},n.a.createElement(S,{text:"Reset",click:this._resetScores,"data-v-958f6f56":""})))}}]),a}(r.Component));o.a.render(n.a.createElement(y,null),document.getElementById("app"))}],[[9,1,2]]]);
//# sourceMappingURL=main.15116918.chunk.js.map