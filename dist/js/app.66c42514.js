(function(e){function t(t){for(var n,a,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)a=s[c],i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={1:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;o.push([2,0]),r()})({"+EN/":function(e,t,r){},2:function(e,t,r){e.exports=r("Vtdi")},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var n=r("Kw5r"),i=r("vDqi"),o=r.n(i),a={},s=o.a.create(a);s.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),s.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["default"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-header",{staticClass:"sw-header",attrs:{height:"64px"}},[r("a",{staticClass:"sw-brand",attrs:{href:"/"}},[e._v("swifty.demo")]),this.$store.state.token?r("a",{staticClass:"sw-logout",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[e._v("Log Out")]):e._e()]),r("el-main",[r("router-view")],1)],1)},l=[],p={methods:{logOut:function(){this.$store.commit("clearToken"),this.$router.push({name:"signin"})}}},c=p,f=r("KHd+"),d=Object(f["a"])(c,u,l,!1,null,null,null),m=d.exports,h=r("XJYT"),_=r.n(h),g=(r("+EN/"),r("jE9Z")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign"},[r("el-card",{staticClass:"sign-card"},[r("el-tabs",{model:{value:e.activeTabName,callback:function(t){e.activeTabName=t},expression:"activeTabName"}},[r("el-tab-pane",{attrs:{label:"Sign Up",name:"signup"}},[r("sign-up-form")],1),r("el-tab-pane",{attrs:{label:"Sign In",name:"signin"}},[r("sign-in-form")],1)],1)],1)],1)},v=[],y=(r("f3/d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-up"},[r("el-form",{ref:"signUpForm",attrs:{"label-width":"170px","label-position":"left",model:e.form,rules:e.rules},nativeOn:{submit:function(t){t.preventDefault(),e.submitForm()}}},[r("el-form-item",{attrs:{label:"Auth URL",prop:"auth_endpoint"}},[r("el-input",{attrs:{placeholder:"Auth function URL",type:"text"},model:{value:e.auth_endpoint,callback:function(t){e.auth_endpoint=t},expression:"auth_endpoint"}})],1),r("el-form-item",{attrs:{label:"Profile Function URL",prop:"profile_endpoint"}},[r("el-input",{attrs:{placeholder:"Profile management URL",type:"text"},model:{value:e.profile_endpoint,callback:function(t){e.profile_endpoint=t},expression:"profile_endpoint"}})],1),r("el-form-item",{attrs:{label:"Picture Function URL",prop:"picture_endpoint"}},[r("el-input",{attrs:{placeholder:"Picture management URL",type:"text"},model:{value:e.picture_endpoint,callback:function(t){e.picture_endpoint=t},expression:"picture_endpoint"}})],1),r("el-form-item",{attrs:{label:"Your email",prop:"email"}},[r("el-input",{attrs:{placeholder:"Email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"City",prop:"city"}},[r("el-input",{attrs:{placeholder:"City",type:"text"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("div",{staticClass:"sw-form-actions"},[r("button",{staticStyle:{display:"none"},attrs:{type:"submit"}}),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("Sign Up")])],1)],1)],1)}),P=[],$={axios:o.a,auth_func_url:null,profile_func_url:null,picture_func_url:null,signUp:function(e,t){return this.axios.post(this.auth_func_url+"/signup?userid="+e+"&password="+t)},signIn:function(e,t){return this.axios.post(this.auth_func_url+"/signin?userid="+e+"&password="+t)},createProfile:function(e){return this.axios.post(this.profile_func_url,e)},getProfile:function(){return this.axios.get(this.profile_func_url)},updateProfile:function(e){return this.axios.put(this.profile_func_url,e)},getPicture:function(){return this.axios.get(this.picture_func_url)},uploadPicture:function(e){return this.axios.put(this.picture_func_url,e)},deletePicture:function(){return this.axios.delete(this.picture_func_url)}};localStorage.getItem("token")&&($.axios.defaults.headers.common["Authorization"]="Bearer: "+localStorage.getItem("token")),localStorage.getItem("auth_func_url")&&($.auth_func_url=localStorage.getItem("auth_func_url")),localStorage.getItem("profile_func_url")&&($.profile_func_url=localStorage.getItem("profile_func_url")),localStorage.getItem("picture_func_url")&&($.picture_func_url=localStorage.getItem("picture_func_url"));var x={data:function(){return{form:{auth_endpoint:null,profile_endpoint:null,picture_endpoint:null,email:null,city:null,password:null},rules:{auth_endpoint:[{required:!0,message:"Please enter your auth url",trigger:"blur"}],profile_endpoint:[{required:!0,message:"Please enter your profile function url",trigger:"blur"}],picture_endpoint:[{required:!0,message:"Please enter your picture function url",trigger:"blur"}],email:[{required:!0,message:"Please enter your email",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"}]}}},computed:{auth_endpoint:{get:function(){return this.$store.state.auth_endpoint},set:function(e){this.form.auth_endpoint=e,this.$store.commit("updateAuthEndpoint",e)}},profile_endpoint:{get:function(){return this.$store.state.profile_endpoint},set:function(e){this.form.profile_endpoint=e,this.$store.commit("updateProfileEndpoint",e)}},picture_endpoint:{get:function(){return this.$store.state.picture_endpoint},set:function(e){this.form.picture_endpoint=e,this.$store.commit("updatePictureEndpoint",e)}}},created:function(){this.form.auth_endpoint=this.auth_endpoint,this.form.profile_endpoint=this.profile_endpoint,this.form.picture_endpoint=this.picture_endpoint},methods:{submitForm:function(){var e=this;this.$refs["signUpForm"].validate(function(t){t&&e.$store.dispatch("signUp",e.form).then(function(){return e.$store.dispatch("signIn",e.form)}).then(function(t){return"error"in t.data?(e.$notify.error({title:"SignIn Error",message:t.data.error}),Promise.reject()):(e.$store.commit("updateToken",t.data.token),e.$store.dispatch("createProfile",{email:e.form.email,city:e.form.city}))}).then(function(t){e.$router.push({name:"profile"})})})}}},w=x,k=Object(f["a"])(w,y,P,!1,null,null,null),U=k.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-in"},[r("el-form",{ref:"signInForm",attrs:{"label-width":"170px","label-position":"left",model:e.form,rules:e.rules},nativeOn:{submit:function(t){t.preventDefault(),e.submitForm()}}},[r("el-form-item",{attrs:{label:"Auth URL",prop:"auth_endpoint"}},[r("el-input",{attrs:{placeholder:"Auth function URL",type:"text"},model:{value:e.auth_endpoint,callback:function(t){e.auth_endpoint=t},expression:"auth_endpoint"}})],1),r("el-form-item",{attrs:{label:"Profile Function URL",prop:"profile_endpoint"}},[r("el-input",{attrs:{placeholder:"Profile management URL",type:"text"},model:{value:e.profile_endpoint,callback:function(t){e.profile_endpoint=t},expression:"profile_endpoint"}})],1),r("el-form-item",{attrs:{label:"Picture Function URL",prop:"picture_endpoint"}},[r("el-input",{attrs:{placeholder:"Picture management URL",type:"text"},model:{value:e.picture_endpoint,callback:function(t){e.picture_endpoint=t},expression:"picture_endpoint"}})],1),r("el-form-item",{attrs:{label:"Your email",prop:"email"}},[r("el-input",{attrs:{placeholder:"Email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("div",{staticClass:"sw-form-actions"},[r("button",{staticStyle:{display:"none"},attrs:{type:"submit"}}),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("Sign In")])],1)],1)],1)},F=[],E={data:function(){return{form:{auth_endpoint:null,profile_endpoint:null,picture_endpoint:null,email:null,password:null},rules:{auth_endpoint:[{required:!0,message:"Please enter your auth url",trigger:"blur"}],profile_endpoint:[{required:!0,message:"Please enter your profile function url",trigger:"blur"}],picture_endpoint:[{required:!0,message:"Please enter your picture function url",trigger:"blur"}],email:[{required:!0,message:"Please enter your email",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"}]}}},created:function(){this.form.auth_endpoint=this.auth_endpoint,this.form.profile_endpoint=this.profile_endpoint,this.form.picture_endpoint=this.picture_endpoint},computed:{auth_endpoint:{get:function(){return this.$store.state.auth_endpoint},set:function(e){this.form.auth_endpoint=e,this.$store.commit("updateAuthEndpoint",e)}},profile_endpoint:{get:function(){return this.$store.state.profile_endpoint},set:function(e){this.form.profile_endpoint=e,this.$store.commit("updateProfileEndpoint",e)}},picture_endpoint:{get:function(){return this.$store.state.picture_endpoint},set:function(e){this.form.picture_endpoint=e,this.$store.commit("updatePictureEndpoint",e)}}},methods:{submitForm:function(){var e=this;this.$refs["signInForm"].validate(function(t){t&&e.$store.dispatch("signIn",e.form).then(function(t){"error"in t.data?e.$notify.error({title:"Error",message:t.data.error}):(e.$notify.success({title:"Success",message:"SignIn successful"}),e.$store.commit("updateToken",t.data.token),e.$router.push({name:"profile"}))})})}}},O=E,j=Object(f["a"])(O,S,F,!1,null,null,null),L=j.exports,R={components:{SignUpForm:U,SignInForm:L},computed:{activeTabName:{get:function(){return"home"===this.$route.name?"signup":this.$route.name},set:function(e){this.$router.push({name:e})}}}},C=R,I=Object(f["a"])(C,b,v,!1,null,null,null),A=I.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"profile"},[r("el-row",[r("el-col",[r("h2",{staticClass:"header"},[e._v("Profile Management")]),r("profile-form")],1)],1)],1)},q=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"signUpForm",attrs:{"label-width":"170px","label-position":"left",model:e.form},nativeOn:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("el-form-item",{attrs:{label:"User email"}},[r("el-input",{attrs:{placeholder:"Email",type:"text"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"City"}},[r("el-input",{attrs:{placeholder:"City",type:"text"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),r("el-form-item",{attrs:{label:"Auth URL"}},[r("el-input",{attrs:{placeholder:"Auth function URL",type:"text",disabled:""},model:{value:e.$store.state.auth_endpoint,callback:function(t){e.$set(e.$store.state,"auth_endpoint",t)},expression:"$store.state.auth_endpoint"}})],1),r("el-form-item",{attrs:{label:"Profile Function URL"}},[r("el-input",{attrs:{placeholder:"Profile management URL",type:"text",disabled:""},model:{value:e.$store.state.profile_endpoint,callback:function(t){e.$set(e.$store.state,"profile_endpoint",t)},expression:"$store.state.profile_endpoint"}})],1),r("el-form-item",{attrs:{label:"Picture Function URL"}},[r("el-input",{attrs:{placeholder:"Picture management URL",type:"text",disabled:""},model:{value:e.$store.state.picture_endpoint,callback:function(t){e.$set(e.$store.state,"picture_endpoint",t)},expression:"$store.state.picture_endpoint"}})],1),r("el-form-item",{attrs:{label:"Picture"}},[r("el-upload",{staticClass:"picture-uploader",attrs:{action:"",accept:"image/*","http-request":e.handlerPictureUpload,"show-file-list":!1,"on-success":e.handlePictureSuccess,"before-upload":e.beforePictureUpload}},[e.user_image?r("img",{staticClass:"picture",attrs:{src:e.user_image}}):r("i",{staticClass:"el-icon-plus picture-uploader-icon"})])],1),r("div",{staticClass:"sw-form-actions"},[r("button",{staticStyle:{display:"none"},attrs:{type:"submit"}}),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("Update profile")])],1)],1)},B=[],D=(r("pIFo"),{data:function(){return{form:{email:null,city:null},user_image:null}},created:function(){this.fetchProfile(),this.fetchPicture()},methods:{fetchProfile:function(){var e=this;return this.$store.dispatch("getProfile").then(function(t){e.form.email=t.data.email,e.form.city=t.data.city})},fetchPicture:function(){var e=this;return this.$store.dispatch("getPicture").then(function(t){e.user_image="data:image/jpeg;base64,"+t.data.img})},submitForm:function(){var e=this;return this.$store.dispatch("updateProfile",{email:this.form.email,city:this.form.city}).then(function(t){e.$notify.success({title:"Success",message:"Profile updated"})})},handlerPictureUpload:function(e){var t=this,r=e.file;this.$store.dispatch("deletePicture").finally(function(){var e=new FileReader;e.readAsDataURL(r),e.onload=function(){t.$store.dispatch("uploadPicture",e.result.replace(/^data:image\/(.+);base64,/,"")).then(function(r){t.user_image=e.result})},e.onerror=function(e){console.log("Error: ",e)}})},handlePictureSuccess:function(e,t){this.user_image=URL.createObjectURL(t.raw)},beforePictureUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("Picture size can not exceed 2MB!"),t}}}),M=D,N=Object(f["a"])(M,z,B,!1,null,null,null),J=N.exports,V={components:{ProfileForm:J},created:function(){null===this.$store.state.token&&this.$router.push({name:"signin"})}},Y=V,K=Object(f["a"])(Y,T,q,!1,null,null,null),H=K.exports;n["default"].use(g["a"]);var X=new g["a"]({routes:[{path:"/",name:"home",component:A},{path:"/signin",name:"signin",component:A},{path:"/signup",name:"signup",component:A},{path:"/profile",name:"profile",component:H}]}),Z=r("L2JU"),G=r("DkTT");n["default"].use(Z["a"]);var Q=new Z["a"].Store({plugins:[Object(G["a"])()],state:{token:null,auth_endpoint:null,profile_endpoint:null,picture_endpoint:null},mutations:{updateToken:function(e,t){e.token=t},updateAuthEndpoint:function(e,t){e.auth_endpoint=t},updateProfileEndpoint:function(e,t){e.profile_endpoint=t},updatePictureEndpoint:function(e,t){e.picture_endpoint=t},clearToken:function(e){e.token=null}},actions:{signUp:function(e,t){var r=e.state,n=t.email,i=t.password;return o.a.post(r.auth_endpoint+"/signup?userid="+n+"&password="+i)},signIn:function(e,t){var r=e.state,n=t.email,i=t.password;return o.a.post(r.auth_endpoint+"/signin?userid="+n+"&password="+i)},createProfile:function(e,t){var r=e.state;return o.a.post(r.profile_endpoint,t,{headers:{Authorization:"Bearer "+r.token}})},getProfile:function(e){var t=e.state;return o.a.get(t.profile_endpoint,{headers:{Authorization:"Bearer "+t.token}})},updateProfile:function(e,t){var r=e.state;return o.a.put(r.profile_endpoint,t,{headers:{Authorization:"Bearer "+r.token}})},getPicture:function(e){var t=e.state;return o.a.get(t.picture_endpoint,{headers:{Authorization:"Bearer "+t.token}})},uploadPicture:function(e,t){var r=e.state;return o.a.post(r.picture_endpoint,t,{headers:{Authorization:"Bearer "+r.token,"Content-Type":"application/json"}})},deletePicture:function(e){var t=e.state;return o.a.delete(t.picture_endpoint,{headers:{Authorization:"Bearer "+t.token}})}}});n["default"].use(_.a),n["default"].config.productionTip=!1,new n["default"]({router:X,store:Q,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.66c42514.js.map