(this.webpackJsonpmozerpol=this.webpackJsonpmozerpol||[]).push([[0],{26:function(t,e,n){t.exports=n(55)},31:function(t,e,n){},35:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),s=n.n(c),r=(n(31),n(18)),i=n(19),l=n(24),u=n(20),h=n(25),p=n(21),d=n.n(p),m=(n(35),n(57)),f=n(58),g=n(6),v=n.n(g);n(52),n(53);var E="https://home.stasbar.com",x=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={text:"Enter post here"},n.getPosts=function(){v.a.get("".concat(E,"/posts")).then((function(t){var e=t.data;n.setState({posts:e})}))},n.handleChange=function(t,e){n.setState({text:t})},n.createPost=function(){v.a.post("".concat(E,"/posts"),{content:n.state.text}).then((function(t){console.log(t)})).then((function(){return n.getPosts()}))},n.deletePost=function(t){v.a.delete("".concat(E,"/posts/").concat(t)).then((function(t){console.log(t)})).then((function(){return n.getPosts()}))},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var t=this,e=this.state.posts;return o.a.createElement("div",{className:"App",style:{paddingLeft:"20%",paddingRight:"20%",paddingBottom:"100px",paddingTop:"40px"}},o.a.createElement("h1",null,"Posts"),e&&e.map((function(e){return o.a.createElement(m.a,null,o.a.createElement(m.a.Header,null,"Post #",e.id,o.a.createElement(f.a,{variant:"link",onClick:function(){return t.deletePost(e.id)}},"Delete")),o.a.createElement(m.a.Body,null,o.a.createElement(m.a.Text,null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content}}))))})),o.a.createElement("h1",null,"Create post"),o.a.createElement(d.a,{style:{minHeight:"200px"},text:this.state.text,onChange:this.handleChange}),o.a.createElement(f.a,{onClick:this.createPost},"Create"))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);s.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.636111c0.chunk.js.map