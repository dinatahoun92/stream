(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(48),i=n.n(c),o=n(13),s=n(104),u=n(7),l=n(8),m=n(10),p=n(9),d=n(11),h=n(245),b=n(244),f=n(18),E=n.n(f),y=n(17),v=n(31),g=n(105),O=n.n(g).a.create({baseURL:" http://localhost:3001"}),j=n(106),S=n.n(j)()(),N=function(e){return function(){var t=Object(v.a)(E.a.mark(function t(n){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},I=n(241),w=n(240),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){n.props.onSubmit(e)},n.renderInput=function(e){var t=e.input,a=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(c))},n.renderTextArea=function(e){var t=e.input,a=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("textarea",Object.assign({},t,{autoComplete:"off"})),n.renderError(c))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit.bind(this))},r.a.createElement(I.a,{name:"title",component:this.renderInput,label:"enter title"}),r.a.createElement(I.a,{name:"youtube",component:this.renderInput,label:"enter youtube link"}),r.a.createElement(I.a,{name:"description",component:this.renderTextArea,label:"enter description"}),r.a.createElement("button",{type:"submit",className:"ui button primary"},"submit"))}}]),t}(a.Component),C=Object(w.a)({form:"StreamForm",validate:function(e){var t={};return e.title||(t.title="you must enter a title"),e.description||(t.description="you must enter a description"),e.youtube||(t.youtube="you must enter a youtube link"),t}})(k),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"create stream"),r.a.createElement(C,{onSubmit:this.onSubmit}))}}]),t}(a.Component),A=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(n,a){var r,c,i;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,c=a().auth.userName,t.next=4,O.post("/streams",Object(y.a)({},e,{userId:r,userName:c}));case 4:i=t.sent,n({type:"CREATE_STREAM",payload:i.data});case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}})(x),T=function(e){return i.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active",onClick:e.onDismiss},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},_=n(242),R=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).renderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ui negative button",onClick:function(){return n.props.deleteStream(n.props.match.params.id)}},"delete"),r.a.createElement(_.a,{to:"/",className:"ui  button"},"cancel"))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream \n    ".concat(this.props.stream.title," ?"):"Are you sure you want to delete the stream?"}},{key:"render",value:function(){return r.a.createElement(T,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return S.push("/")}})}}]),t}(a.Component),M=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,deleteStream:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.delete("/streams/".concat(e));case 2:t.sent,n({type:"DELETE_STREAM",payload:e}),S.push("/");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(R),D=n(37),U=n.n(D),B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit stream"),r.a.createElement(C,{initialValues:U.a.pick(this.props.stream,"title","description","youtube"),onSubmit:this.onSubmit}))}}]),t}(a.Component),F=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,editStream:function(e,t){return function(){var n=Object(v.a)(E.a.mark(function n(a){var r;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),S.push("/streams/".concat(e));case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(B),L=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){return e.userId===this.props.currentUserId?r.a.createElement("div",{className:"btns"},r.a.createElement(_.a,{to:"/streams/".concat(e.id),className:"ui button icon teal"},r.a.createElement("i",{className:"eye icon"})),r.a.createElement(_.a,{to:"/streams/edit/".concat(e.id),className:"ui button icon primary"},r.a.createElement("i",{className:"pencil alternate icon"})),r.a.createElement(_.a,{to:"/streams/delete/".concat(e.id),className:"ui button icon negative"},r.a.createElement("i",{className:"trash alternat icon"}))):r.a.createElement("div",{className:"btns"},r.a.createElement(_.a,{to:"/streams/".concat(e.id),className:"ui button icon teal"},r.a.createElement("i",{className:"eye icon"})))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(_.a,{to:"/streams/new",className:"ui button primary"},"create stream"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement(_.a,{to:"/streams/".concat(t.id),style:{color:"#333",cursor:"pointer",letterSpacing:"1px",padding:"10px 0",display:"block",textTransform:"capitalize"}},t.title)),r.a.createElement("td",null,t.userName),r.a.createElement("td",null,e.renderAdmin(t)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{style:{marginBottom:"-30px"}},"Hello ",this.props.isSignedIn?this.props.userName:""),this.renderCreate(),r.a.createElement("table",{className:"ui striped table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Created By"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.renderList())))}}]),t}(r.a.Component),G=Object(o.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn,userName:e.auth.userName}},{fetchStreams:function(){return function(){var e=Object(v.a)(E.a.mark(function e(t,n){var a,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.userId,r=n().auth.userName,e.next=4,O.get("/streams",a,r);case 4:c=e.sent,t({type:"FETCH_STREAMS",payload:c.data});case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}})(L),H=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e)}},{key:"youtubeLink",value:function(){var e=this.props.stream.youtube.replace("https://www.youtube.com/watch?v=","");return"https://www.youtube.com/embed/"+(e=e.replace("https://youtu.be/",""))}},{key:"render",value:function(){return this.props.stream?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{color:"#252525",letterSpacing:"1px",paddingBottom:"20px"}},this.props.stream.title),r.a.createElement("iframe",{width:"700",height:"400",src:this.youtubeLink(),frameBorder:"0",style:{display:"block",margin:"auto"},allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("p",{style:{fontSize:"16px",paddingTop:"20px",letterSpacing:"1px"}},this.props.stream.description)):r.a.createElement("div",null,"loading")}}]),t}(a.Component),q=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N})(H),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"724422573620-qtrn7qf5bral4q08fihlg1sman636cpa.apps.googleusercontent.com",scope:"email"}).then(function(){n.auth=window.gapi.auth2.getAuthInstance(),n.onAthChange(n.auth.isSignedIn.get()),n.auth.isSignedIn.listen(n.onAthChange)})})},n.onAthChange=function(e){e?(n.props.signIn(n.auth.currentUser.get().getId()),n.props.signInUser(n.auth.currentUser.get().getBasicProfile().ig)):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderAuthButton",value:function(){return!1===this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"sign in"):this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"sign out"):null}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(a.Component),z=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}},signInUser:function(e){return{type:"SIGN_IN_USER",payload:e}}})(P),J=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui hugh  inverted menu",style:{borderRadius:0}},r.a.createElement("div",{className:"ui container"},r.a.createElement(_.a,{className:"item",to:"/",style:{fontSize:"20px"}},"Youtube Notes"),r.a.createElement("div",{className:"right menu"},r.a.createElement("div",{className:"item"},r.a.createElement(z,null)))))}}]),t}(a.Component),V=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui hugh  inverted menu",style:{borderRadius:0,position:"fixed",bottom:0,left:0,width:"100%"}},r.a.createElement("div",{className:"ui container"},r.a.createElement("p",{style:{color:"#fff",textAlign:"center",paddingTop:"10px",display:"block",width:"100%",letterSpacing:"1px"}},"All rights reserved Dina Tahoun \xa9 2019")))}}]),t}(a.Component),X=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{history:S},r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement("div",{className:"ui container",style:{paddingBottom:"70px"}},r.a.createElement(b.a,{exact:!0,path:"/",component:G}),r.a.createElement(b.a,{exact:!0,path:"/streams/new",component:A}),r.a.createElement(b.a,{exact:!0,path:"/streams/edit/:id",component:F}),r.a.createElement(b.a,{path:"/streams/delete/:id",component:M}),r.a.createElement(b.a,{exact:!0,path:"/streams/:id",component:q})),r.a.createElement(V,null)))}}]),t}(a.Component),K=n(6),Y=n(243),Q={isSignedIn:null,userId:null},W=n(30),Z=Object(K.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(y.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(y.a)({},e,{isSignedIn:!1,userId:null});case"SIGN_IN_USER":return Object(y.a)({},e,{userName:t.payload});default:return e}},form:Y.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(y.a)({},e,U.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(y.a)({},e,Object(W.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return U.a.omit(e,t.payload);default:return e}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ee=Object(K.e)(Z,$(Object(K.a)(s.a)));i.a.render(r.a.createElement(o.a,{store:ee},r.a.createElement(X,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.d7f7fa6a.chunk.js.map