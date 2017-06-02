webpackJsonp([0],{85:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LOAD_POSTS_REQUEST="LOAD_POSTS_REQUEST",t.LOAD_POSTS_SUCCESS="LOAD_POSTS_SUCCESS",t.LOAD_POSTS_FAILURE="LOAD_POSTS_FAILURE",t.LOAD_POST_REQUEST="LOAD_POST_REQUEST",t.LOAD_POST_SUCCESS="LOAD_POST_SUCCESS",t.LOAD_POST_FAILURE="LOAD_POST_FAILURE"},110:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case l.LOAD_POST_REQUEST:return i({},e,{isLoading:!0,error:null});case l.LOAD_POST_SUCCESS:return i({},e,{title:t.payload.title,content:t.payload.content,lastFetched:t.meta.lastFetched,isLoading:!1});case l.LOAD_POST_FAILURE:return i({},e,{error:t.payload});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectCurrentPost=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.default=n;var a=r(85),l=o(a),u={lastFetched:null,isLoading:!1,error:null,title:"",content:""};t.selectCurrentPost=function(e){return e.currentPost}},111:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case l.LOAD_POSTS_REQUEST:return i({},e,{isLoading:!0,error:null});case l.LOAD_POSTS_SUCCESS:return i({},e,{data:t.payload,lastFetched:t.meta.lastFetched,isLoading:!1});case l.LOAD_POSTS_FAILURE:return i({},e,{error:t.payload});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPosts=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.default=n;var a=r(85),l=o(a),u={data:[],lastFetched:null,isLoading:!1,error:null};t.selectPosts=function(e){return e.posts}},175:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=n;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=r(6),a=(o(i),r(84)),l=o(a),u=r(34),s=n(l.default,{title:"Guessing Game"}),c=n("div",{},void 0,n("input",{placeholder:"Your Guess...",maxlength:"3",autofocus:!0}),n("button",{},void 0,"Submit")),f=function(){return n("div",{},void 0,s,n("h1",{className:(0,u.css)(d.header)},void 0,"Guessing Game"),n("p",{className:(0,u.css)(d.lead)},void 0,"This is the guessing game project for FullStack Academy Foundations"),c)},d=u.StyleSheet.create({header:{fontSize:28,lineHeight:"1.2",margin:"0 0 1rem"},lead:{fontSize:18,lineHeight:"1.5",margin:"0 0 1rem",color:"#555"},body:{fontSize:"1rem",lineHeight:"1.5",margin:"0 0 1rem",color:"#555"}});t.default=f},176:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=n;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=r(167),a=r(6),l=(o(a),r(102)),u=r(295),s=r(34),c=r(84),f=o(c),d=r(175),v=o(d),p=r(110),S={fetch:function(e){var t=e.dispatch,r=e.params.slug;return t((0,u.loadPost)(r))}},_=function(e){return(0,p.selectCurrentPost)(e)},y=n(v.default,{}),h=function(e){var t=e.title,r=e.content,o=e.isLoading,i=e.error;return i?y:n("div",{},void 0,n(f.default,{title:t}),o&&n("div",{},void 0,n("h2",{className:(0,s.css)(m.loading)},void 0,"Loading....")),!o&&n("div",{},void 0,n("h2",{className:(0,s.css)(m.title)},void 0,t),n("p",{className:(0,s.css)(m.content)},void 0,r)))},m=s.StyleSheet.create({content:{fontSize:"1rem",lineHeight:"1.5",margin:"1rem 0",color:"#555"},title:{fontSize:28,margin:"0 auto 1.5rem",color:"#000"},loading:{fontSize:28,margin:"0 auto 1.5rem",color:"#b7b7b7"}});t.default=(0,i.provideHooks)(S)((0,l.connect)(_)(h))},177:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=n;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=r(167),a=r(6),l=(o(a),r(297)),u=r(102),s=r(298),c=o(s),f=r(34),d=r(84),v=o(d),p=r(111),S={fetch:function(e){var t=e.dispatch;return t((0,l.loadPosts)())}},_=function(e){return{posts:(0,p.selectPosts)(e)}},y=n(v.default,{title:"Posts"}),h=function(e){var t=e.posts;return n("div",{className:(0,f.css)(m.root)},void 0,y,t.isLoading&&n("div",{},void 0,n("h2",{className:(0,f.css)(m.title)},void 0,"Loading....")),!t.isLoading&&t.data.map(function(e,t){return n(c.default,{post:e},e.id)}))};h.PropTypes={posts:a.PropTypes.array.isRequired};var m=f.StyleSheet.create({root:{maxWidth:500},title:{fontSize:28,margin:"0 auto 1.5rem",color:"#b7b7b7"}});t.default=(0,i.provideHooks)(S)((0,u.connect)(_)(h))},289:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=n;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=r(6),a=(o(i),r(84)),l=(o(a),r(34)),u=function(){return n("div",{},void 0,n("h2",{className:(0,l.css)(s.header)},void 0,"Guessing Game"),n("p",{className:(0,l.css)(s.lead)},void 0,"This is the guessing game project for FullStack Academy Foundations"))},s=l.StyleSheet.create({header:{fontSize:28,lineHeight:"1.2",margin:"0 0 1rem"},lead:{fontSize:18,lineHeight:"1.5",margin:"0 0 1rem",color:"#555"},body:{fontSize:"1rem",lineHeight:"1.5",margin:"0 0 1rem",color:"#555"}});t.default=u},290:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(289),i=o(n);t.default=i.default},294:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(175),i=o(n);t.default={path:"*",component:i.default}},295:function(e,t,r){"use strict";function o(e){return function(t,r,o){var i=o.axios,a=r().sourceRequest,l=a.protocol,u=a.host;return t({type:n.LOAD_POST_REQUEST}),i.get(l+"://"+u+"/api/v0/posts/"+e).then(function(e){t({type:n.LOAD_POST_SUCCESS,payload:e.data,meta:{lastFetched:Date.now()}})}).catch(function(e){console.error("Error in reducer that handles "+n.LOAD_POST_SUCCESS+": ",e),t({type:n.LOAD_POST_FAILURE,payload:e,error:!0})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadPost=o;var n=r(85)},296:function(e,t,r){"use strict";function o(e){return{path:"post/:slug",getComponents:function(t,o){r.e(0,function(t){var i=r(176).default,a=r(110).default;(0,n.injectAsyncReducer)(e,"currentPost",a),o(null,i)})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=r(112)},297:function(e,t,r){"use strict";function o(){return function(e,t,r){var o=r.axios,i=t().sourceRequest,a=i.protocol,l=i.host;return e({type:n.LOAD_POSTS_REQUEST}),o.get(a+"://"+l+"/api/v0/posts").then(function(t){e({type:n.LOAD_POSTS_SUCCESS,payload:t.data,meta:{lastFetched:Date.now()}})}).catch(function(t){console.error("Error in reducer that handles "+n.LOAD_POSTS_SUCCESS+": ",t),e({type:n.LOAD_POSTS_FAILURE,payload:t,error:!0})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadPosts=o;var n=r(85)},298:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=n;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),i=r(6),a=(o(i),r(246)),l=r(34),u=function(e){var t=e.post;return n("div",{className:(0,l.css)(s.root)},void 0,n("h3",{},void 0,n(a.Link,{to:"/post/"+t.slug,className:(0,l.css)(s.title)},void 0," ",t.title," ")))},s=l.StyleSheet.create({root:{margin:"0 auto 1.5rem"},title:{fontSize:28,textDecoration:"none",lineHeight:"1.2",margin:"0 0 1.5rem",color:"#000",transition:".3s opacity ease",":hover":{opacity:.5}}});t.default=u},299:function(e,t,r){"use strict";function o(e){return{path:"posts",getComponents:function(t,o){r.e(0,function(t){var i=r(177).default,a=r(111).default;(0,n.injectAsyncReducer)(e,"posts",a),o(null,i)})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=r(112)}});