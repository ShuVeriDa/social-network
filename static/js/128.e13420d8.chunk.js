"use strict";(self.webpackChunkpatientway=self.webpackChunkpatientway||[]).push([[128],{4128:function(t,s,e){e.r(s),e.d(s,{default:function(){return $},withRouter:function(){return T}});var n=e(1413),r=e(5671),i=e(3144),u=e(136),o=e(5716),a=e(2791),c={},l=e(5987),p={descriptionBlock:"ProfileInfo_descriptionBlock__LQgdt"},d=e(9496),f=e(885),h=e(184),j=["updateStatus"],x=function(t){var s=t.updateStatus,e=(0,l.Z)(t,j),n=(0,a.useState)(!1),r=(0,f.Z)(n,2),i=r[0],u=r[1],o=(0,a.useState)(e.status),c=(0,f.Z)(o,2),d=c[0],x=c[1];(0,a.useEffect)((function(){x(e.status)}),[e.status]);return(0,h.jsxs)("div",{className:p.profileInfo,children:[!i&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){u(!0)},children:e.status||"----"})}),i&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onBlur:function(){u(!1),s(d)},autoFocus:!0,onChange:function(t){x(t.currentTarget.value)}})})]})},m=["profile","status","updateStatus"],v=function(t){var s=t.profile,e=t.status,n=t.updateStatus;(0,l.Z)(t,m);return s?(0,h.jsx)("div",{className:p.profileInfo,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:s.photos.large,alt:""}),(0,h.jsx)(x,{status:e,updateStatus:n})]})}):(0,h.jsx)(d.p,{})},g=e(6407),P=e(2982),S="MyPosts_postsBlock__M6bQg",Z="MyPosts_posts__mqw0J",k={item:"Post_item__KiR7K"},C=function(t){return(0,h.jsx)("div",{className:k.posts,children:(0,h.jsxs)("div",{className:k.item,children:[(0,h.jsx)("img",{src:"https://image.shutterstock.com/image-vector/fashion-silhouette-hipster-style-vector-260nw-161463836.jpg",alt:""}),t.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["Like: ",t.likesCount]})})]})})},_=e(6139),w=e(704),A=e(3079),b=e(8041),y=a.memo((function(t){var s=(0,P.Z)(t.posts).reverse().map((function(t){return(0,h.jsx)(C,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(I,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,h.jsx)("div",{className:Z,children:s})]})})),N=(0,A.D)(10),I=(0,w.Z)({form:"ProfileAddNewPostFrom"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(_.Z,{name:"newPostText",component:b.Kx,validate:[A.C,N],placeholder:"Post message"})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"AddPost"})})]})})),D=e(8687),M=(0,D.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){return t((0,g.Pi)(s))}}}))(y),U=function(t){var s=Object.assign({},t);return(0,h.jsxs)("div",{className:c.content,children:[(0,h.jsx)(v,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,h.jsx)(M,{})]})},B=e(6871),F=e(2932),K=e(7781),R=function(t){(0,u.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.userId||this.props.authorizedUserId;this.props.getUserProfileAC(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,h.jsx)(U,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component),T=function(t){return function(s){var e=(0,B.UO)();return(0,h.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:e}))}},$=(0,K.qC)((0,D.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileAC:g.Y5,getStatus:g.lR,updateStatus:g.Nf}),T,F.D)(R)},2932:function(t,s,e){e.d(s,{D:function(){return l}});var n=e(1413),r=e(5987),i=e(6871),u=(e(2791),e(8687)),o=e(184),a=["isAuth"],c=function(t){return{isAuth:t.auth.isAuth}};function l(t){return(0,u.$j)(c)((function(s){var e=s.isAuth,u=(0,r.Z)(s,a);return e?(0,o.jsx)(t,(0,n.Z)({},u)):(0,o.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=128.e13420d8.chunk.js.map