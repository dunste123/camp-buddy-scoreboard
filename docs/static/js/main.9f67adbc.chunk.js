(this["webpackJsonpcamp-buddy-scoreboard"]=this["webpackJsonpcamp-buddy-scoreboard"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),o=a.n(c),i=a(2),s=a(3),u=a(5),d=a(4),l=a(6),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).imgStyle={position:"fixed",top:"-14px",right:"-14px",border:"0",zIndex:"100"},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("a",{href:"https://github.com/dunste123/camp-buddy-scoreboard",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{style:this.imgStyle,src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub"})))}}]),t}(r.Component),b=a(1),h=a(7),v=function(){function e(){Object(i.a)(this,e),Object.defineProperty(this,f,{writable:!0,value:{}}),Object.defineProperty(this,p,{writable:!0,value:[{name:"Hiro",emoteId:"514293666853158913",score:0},{name:"Natsumi",emoteId:"514293667192766465",score:0},{name:"Hunter",emoteId:"514294078570102784",score:0},{name:"Yoichi",emoteId:"514293667595419663",score:0},{name:"Taiga",emoteId:"514293667507208193",score:0}]}),this._checkKeitaro(),this._setIndexes(),this._loadScores()}return Object(s.a)(e,[{key:"incrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t+1)}},{key:"decrementScore",value:function(e){var t=this.getScore(e);this.setScore(e,t-1)}},{key:"getScore",value:function(e){var t=Object(b.a)(this,f)[f][e.toLowerCase()];if("undefined"===typeof t)throw new Error("Missing buddy: ".concat(e));return Object(b.a)(this,p)[p][t].score}},{key:"setScore",value:function(e,t){var a=Object(b.a)(this,f)[f][e.toLowerCase()];"undefined"!==typeof a&&(Object(b.a)(this,p)[p][a].score=t,this._saveScores())}},{key:"resetScores",value:function(){localStorage.removeItem("buddies")}},{key:"_checkKeitaro",value:function(){"true"===localStorage.getItem("keitaro")&&Object(b.a)(this,p)[p].unshift({name:"Keitaro",emoteId:"514293667041771531",score:0})}},{key:"_setIndexes",value:function(){for(var e=0;e<Object(b.a)(this,p)[p].length;e++){var t=Object(b.a)(this,p)[p][e];Object(b.a)(this,f)[f][t.name.toLowerCase()]=e}}},{key:"_loadScores",value:function(){var e=localStorage.getItem("buddies");if(e)for(var t=JSON.parse(e),a=0,r=Object.keys(t);a<r.length;a++){var n=r[a];console.log(n),t.hasOwnProperty(n)&&this.setScore(n,t[n])}}},{key:"_saveScores",value:function(){var e={};Object(b.a)(this,p)[p].forEach((function(t){e[t.name.toLowerCase()]=t.score}));var t=JSON.stringify(e);localStorage.setItem("buddies",t)}},{key:"buddies",get:function(){return Object(b.a)(this,p)[p]}}]),e}(),f=Object(h.a)("indexes"),p=Object(h.a)("buddies"),y=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.click,r=e.noMargin?"no-margin":"";return n.a.createElement("button",{className:r,onClick:a,"data-v-c358ee00":""},t)}}]),t}(r.Component)),O=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.incrementScore,a=e.decrementScore,r=this.props.buddy,c=r.name,o=r.emoteId,i=r.score,s="https://cdn.discordapp.com/emojis/".concat(o,".png?v=1");return n.a.createElement("div",{className:"buddy","data-v-aaeec360":""},n.a.createElement("img",{src:s,alt:c,crossOrigin:"anonymous","data-v-aaeec360":""}),n.a.createElement("h1",{"data-v-aaeec360":""},c),n.a.createElement("h2",{"data-v-aaeec360":""},"Score: ",i),n.a.createElement("div",{className:"buttons","data-v-aaeec360":""},n.a.createElement(y,{text:"+",click:t,"data-v-aaeec360":""}),n.a.createElement(y,{text:"-",click:a,"data-v-aaeec360":""})))}}]),t}(r.Component)),j=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e)))._incrementScore=function(e){a._store.incrementScore(e),a.setState({})},a._decrementScore=function(e){a._store.decrementScore(e),a.setState({})},a._resetScores=function(){window.confirm("Hold up buddy\nThis will reset all your scores, are you sure?")&&(a._store.resetScores(),window.location.reload())},a._store=new v,a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this._store.buddies;return n.a.createElement("div",{className:"container","data-v-17e5a8e9":""},n.a.createElement(m,{"data-v-17e5a8e9":""}),n.a.createElement("div",{className:"buddies","data-v-17e5a8e9":""},t.map((function(t){return n.a.createElement(O,{buddy:t,key:t.emoteId,className:"buddy",incrementScore:function(){return e._incrementScore(t.name)},decrementScore:function(){return e._decrementScore(t.name)},"data-v-17e5a8e9":""})}))),n.a.createElement("div",{className:"reset","data-v-17e5a8e9":""},n.a.createElement(y,{noMargin:!0,text:"Reset",click:this._resetScores,"data-v-17e5a8e9":""})))}}]),t}(r.Component));o.a.render(n.a.createElement(j,null),document.getElementById("app"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9f67adbc.chunk.js.map