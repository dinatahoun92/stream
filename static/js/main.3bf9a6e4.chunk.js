(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(239)},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),i=a.n(c),o=a(13),s=a(104),u=a(7),l=a(8),m=a(10),p=a(9),d=a(11),h=a(245),b=a(244),f=a(18),E=a.n(f),y=a(17),v=a(31),g=a(105),O=a.n(g).a.create({baseURL:" http://localhost:3001"}),S=a(106),j=a.n(S)()(),N=function(e){return function(){var t=Object(v.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("https://my-api-1992.herokuapp.com/streams/".concat(e));case 2:n=t.sent,a({type:"FETCH_STREAM",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=a(241),I=a(240),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.onSubmit(e)},a.renderInput=function(e){var t=e.input,n=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),a.renderError(c))},a.renderTextArea=function(e){var t=e.input,n=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,n),r.a.createElement("textarea",Object.assign({},t,{autoComplete:"off"})),a.renderError(c))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit.bind(this))},r.a.createElement(k.a,{name:"title",component:this.renderInput,label:"enter title"}),r.a.createElement(k.a,{name:"youtube",component:this.renderInput,label:"enter youtube link"}),r.a.createElement(k.a,{name:"description",component:this.renderTextArea,label:"enter description"}),r.a.createElement("button",{type:"submit",className:"ui button primary"},"submit"))}}]),t}(n.Component),C=Object(I.a)({form:"StreamForm",validate:function(e){var t={};return e.title||(t.title="you must enter a title"),e.description||(t.description="you must enter a description"),e.youtube||(t.youtube="you must enter a youtube link"),t}})(w),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.createStream(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"create stream"),r.a.createElement(C,{onSubmit:this.onSubmit}))}}]),t}(n.Component),A=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(a,n){var r,c,i;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,c=n().auth.userName,t.next=4,O.post("https://my-api-1992.herokuapp.com/streams",Object(y.a)({},e,{userId:r,userName:c}));case 4:i=t.sent,a({type:"CREATE_STREAM",payload:i.data}),j.push("/");case 7:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}})(x),T=function(e){return i.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active",onClick:e.onDismiss},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},_=a(242),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).renderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ui negative button",onClick:function(){return a.props.deleteStream(a.props.match.params.id)}},"delete"),r.a.createElement(_.a,{to:"/",className:"ui  button"},"cancel"))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream \n    ".concat(this.props.stream.title," ?"):"Are you sure you want to delete the stream?"}},{key:"render",value:function(){return r.a.createElement(T,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return j.push("/")}})}}]),t}(n.Component),M=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,deleteStream:function(e){return function(){var t=Object(v.a)(E.a.mark(function t(a){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.delete("https://my-api-1992.herokuapp.com/streams/".concat(e));case 2:t.sent,a({type:"DELETE_STREAM",payload:e}),j.push("/");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(R),D=a(37),U=a.n(D),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.editStream(a.props.match.params.id,e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit stream"),r.a.createElement(C,{initialValues:U.a.pick(this.props.stream,"title","description","youtube"),onSubmit:this.onSubmit}))}}]),t}(n.Component),F=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,editStream:function(e,t){return function(){var a=Object(v.a)(E.a.mark(function a(n){var r;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.patch("https://my-api-1992.herokuapp.com/streams/".concat(e),t);case 2:r=a.sent,n({type:"EDIT_STREAM",payload:r.data}),j.push("https://my-api-1992.herokuapp.com/streams/".concat(e));case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(B),L=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){return e.userId===this.props.currentUserId?r.a.createElement("div",{className:"btns"},r.a.createElement(_.a,{to:"/streams/".concat(e.id),className:"ui button icon teal"},r.a.createElement("i",{className:"eye icon"})),r.a.createElement(_.a,{to:"/streams/edit/".concat(e.id),className:"ui button icon primary"},r.a.createElement("i",{className:"pencil alternate icon"})),r.a.createElement(_.a,{to:"/streams/delete/".concat(e.id),className:"ui button icon negative"},r.a.createElement("i",{className:"trash alternat icon"}))):r.a.createElement("div",{className:"btns"},r.a.createElement(_.a,{to:"/streams/".concat(e.id),className:"ui button icon teal"},r.a.createElement("i",{className:"eye icon"})))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(_.a,{to:"/streams/new",className:"ui button primary"},"create stream"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement(_.a,{to:"/streams/".concat(t.id),style:{color:"#333",cursor:"pointer",letterSpacing:"1px",padding:"10px 0",display:"block",textTransform:"capitalize"}},t.title)),r.a.createElement("td",null,t.userName),r.a.createElement("td",null,e.renderAdmin(t)))})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.isSignedIn?r.a.createElement("h3",{style:{marginBottom:"-30px"}},"Hello ",this.props.isSignedIn?this.props.userName:""):r.a.createElement("h3",null,"Hello ",this.props.isSignedIn?this.props.userName:""),this.renderCreate(),r.a.createElement("table",{className:"ui striped table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Created By"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.renderList())))}}]),t}(r.a.Component),G=Object(o.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn,userName:e.auth.userName}},{fetchStreams:function(){return function(){var e=Object(v.a)(E.a.mark(function e(t,a){var n,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.userId,r=a().auth.userName,e.next=4,O.get("https://my-api-1992.herokuapp.com/streams",n,r);case 4:c=e.sent,t({type:"FETCH_STREAMS",payload:c.data});case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}})(L),H=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e)}},{key:"youtubeLink",value:function(){var e=this.props.stream.youtube.replace("https://www.youtube.com/watch?v=","");return"https://www.youtube.com/embed/"+(e=e.replace("https://youtu.be/",""))}},{key:"render",value:function(){return this.props.stream?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{color:"#252525",letterSpacing:"1px",paddingBottom:"20px"}},this.props.stream.title),r.a.createElement("iframe",{width:"700",height:"400",src:this.youtubeLink(),frameBorder:"0",style:{display:"block",margin:"auto"},allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("p",{style:{fontSize:"16px",paddingTop:"20px",letterSpacing:"1px"}},this.props.stream.description)):r.a.createElement("div",null)}}]),t}(n.Component),q=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N})(H),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"724422573620-qtrn7qf5bral4q08fihlg1sman636cpa.apps.googleusercontent.com",scope:"email"}).then(function(){a.auth=window.gapi.auth2.getAuthInstance(),a.onAthChange(a.auth.isSignedIn.get()),a.auth.isSignedIn.listen(a.onAthChange)})})},a.onAthChange=function(e){e?(a.props.signIn(a.auth.currentUser.get().getId()),a.props.signInUser(a.auth.currentUser.get().getBasicProfile().ig)):a.props.signOut()},a.onSignInClick=function(){a.auth.signIn()},a.onSignOutClick=function(){a.auth.signOut()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderAuthButton",value:function(){return!1===this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"sign in"):this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"sign out"):null}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(n.Component),z=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}},signInUser:function(e){return{type:"SIGN_IN_USER",payload:e}}})(P),J=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui hugh  inverted menu",style:{borderRadius:0}},r.a.createElement("div",{className:"ui container"},r.a.createElement(_.a,{className:"item",to:"/",style:{fontSize:"20px"}},"Youtube Notes"),r.a.createElement("div",{className:"right menu"},r.a.createElement("div",{className:"item"},r.a.createElement(z,null)))))}}]),t}(n.Component),V=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui hugh  inverted menu",style:{borderRadius:0,position:"fixed",bottom:0,left:0,width:"100%"}},r.a.createElement("div",{className:"ui container"},r.a.createElement("p",{style:{color:"#fff",textAlign:"center",paddingTop:"10px",display:"block",width:"100%",letterSpacing:"1px"}},"All rights reserved Dina Tahoun \xa9 2019")))}}]),t}(n.Component),X=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{history:j},r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement("div",{className:"ui container",style:{paddingBottom:"70px"}},r.a.createElement("switch",null,r.a.createElement(b.a,{exact:!0,path:"/",component:G}),r.a.createElement(b.a,{exact:!0,path:"/streams/new",component:A}),r.a.createElement(b.a,{exact:!0,path:"/streams/edit/:id",component:F}),r.a.createElement(b.a,{path:"/streams/delete/:id",component:M}),r.a.createElement(b.a,{exact:!0,path:"/streams/:id",component:q}))),r.a.createElement(V,null)))}}]),t}(n.Component),K=a(6),Y=a(243),Q={isSignedIn:null,userId:null},W=a(30),Z=Object(K.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(y.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(y.a)({},e,{isSignedIn:!1,userId:null});case"SIGN_IN_USER":return Object(y.a)({},e,{userName:t.payload});default:return e}},form:Y.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(y.a)({},e,U.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(y.a)({},e,Object(W.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return U.a.omit(e,t.payload);default:return e}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ee=Object(K.e)(Z,$(Object(K.a)(s.a)));i.a.render(r.a.createElement(o.a,{store:ee},r.a.createElement(X,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.3bf9a6e4.chunk.js.map