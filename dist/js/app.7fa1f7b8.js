(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0134":function(t,e){},"039a":function(t,e,a){"use strict";a("7174")},"1a92":function(t,e,a){"use strict";var n=a("2bb9"),r=a.n(n);e["default"]=r.a},"26a2":function(t,e,a){"use strict";a("869e")},"2bb9":function(t,e){},"2d43":function(t,e,a){},"3a9d":function(t,e,a){"use strict";a("2d43")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o={data:function(){return{}}},s=o,l=a("2877"),u=Object(l["a"])(s,r,i,!1,null,null,null),c=u.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-container",attrs:{id:"whole"}},[a("nav",[a("ul",{attrs:{id:"navUL"}},[a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/Login",exact:""}},[t._v("Login")])],1)])]),a("div",{staticClass:"float-child left"},[a("h1",[t._v("Welcome Back!")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.pressed(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),a("br"),a("button",{attrs:{type:"submit"}},[t._v("Login")])])]),a("div",{staticClass:"float-child right"},[a("div",[a("h2",[t._v("New Here?")]),a("p",[t._v("Whether you’re a student looking for some help or a teacher who’s looking to share your passion, join our team today!")]),a("button",{on:{click:function(e){return t.goSignup()}}},[t._v("Sign Up Now!")])])])])},m=[],f=a("1da1"),v=(a("96cf"),a("5319"),a("ac1f"),a("2591")),h={apiKey:"AIzaSyBt-QaZyQbowodRDfyajw_B2h5ETdRBjSo",authDomain:"bt3103finalproject.firebaseapp.com",projectId:"bt3103finalproject",storageBucket:"bt3103finalproject.appspot.com",messagingSenderId:"62503805863",appId:"1:62503805863:web:14de8cad7c846dea1fcc82",measurementId:"G-833MWN8XKC"},g=v["a"].initializeApp(h),b=g,y={components:{},data:function(){return{myStyle:{backgroundColor:"#E0E0E0"},email:"",password:""}},methods:{pressed:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.auth().signInWithEmailAndPassword(t.email,t.password);case 3:a=e.sent,console.log(a),t.$router.replace({name:"home"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},goSignup:function(){this.$router.push({path:"/signup"})}}},w=y,x=(a("039a"),Object(l["a"])(w,d,m,!1,null,null,null)),_=x.exports,C=a("57da"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.pressed(e)}}},[a("br"),a("br"),a("div",{staticClass:"imagePreviewWrapper",style:{"background-image":"url("+t.previewImage+")"},on:{click:t.selectImage}}),a("input",{attrs:{type:"file",accept:"image/*",src:"previewImage"},on:{change:t.selectImage}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"user",placeholder:"User Name"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],attrs:{type:"text",id:"fname",placeholder:"First Name"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],attrs:{type:"text",id:"lname",placeholder:"Last Name"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"em",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"pw",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"radio",id:"one",value:"Student"},domProps:{checked:t._q(t.type,"Student")},on:{change:function(e){t.type="Student"}}}),a("label",{attrs:{for:"one"}},[t._v("Student")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"radio",id:"two",value:"Teacher"},domProps:{checked:t._q(t.type,"Teacher")},on:{change:function(e){t.type="Teacher"}}}),a("label",{attrs:{for:"two"}},[t._v("Teacher")]),a("br"),a("br"),a("button",{attrs:{type:"submit"},on:{click:t.register}},[t._v("Create Account")])])])},k=[],I={data:function(){return{username:"",firstname:"",lastname:"",email:"",password:"",type:"",uid:"",previewImage:"https://firebasestorage.googleapis.com/v0/b/bt3103finalproject.appspot.com/o/images%2FScreenshot%202021-03-27%20at%201.38.35%20PM.png?alt=media&token=ae751660-76cc-47c5-a305-543d2f06a1ae"}},components:{},methods:{register:function(t){var e=this;b.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){var a=t.user;e.uid=a.uid,b.firestore().collection("users").doc(a.uid).set({username:e.username,firstName:e.firstname,lastName:e.lastname,email:e.email}),e.uploadMetadata(e.previewImage),e.$router.replace({name:"home"})}),(function(t){alert(t.message)})),t.preventDefault()},selectImage:function(t){var e=this,a=t.target.files[0],n=new FileReader;n.readAsDataURL(a),n.onload=function(t){e.previewImage=t.target.result}},uploadMetadata:function(t){var e=b.storage().ref();e.child("images/"+this.uid).putString(t,"data_url")}}},L=I,U=(a("d0bc"),Object(l["a"])(L,S,k,!1,null,"43351144",null)),O=U.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-container",attrs:{id:"whole"}},[a("nav",[a("ul",{attrs:{id:"navUL"}},[a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/Login",exact:""}},[t._v("Login")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/SignUp",exact:""}},[t._v("SignUp")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/ContactUs",exact:""}},[t._v("Contact Us")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/FAQ",exact:""}},[t._v("FAQ")])],1)])]),a("div",{attrs:{id:"title"}},[t._v("Contact Us!")]),a("br"),a("br"),a("br"),a("form",{attrs:{id:"inputs"}},[a("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.inputname,expression:"inputname",modifiers:{lazy:!0,trim:!0}}],attrs:{placeholder:"Name",type:"text",name:"inputname"},domProps:{value:t.inputname},on:{change:function(e){t.inputname=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.inputemail,expression:"inputemail",modifiers:{lazy:!0,trim:!0}}],attrs:{placeholder:"Email",type:"email",name:"inputemail"},domProps:{value:t.inputemail},on:{change:function(e){t.inputemail=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),a("br"),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.inputmsg,expression:"inputmsg",modifiers:{lazy:!0,trim:!0}}],attrs:{id:"msgbox",placeholder:"Message",name:"inputmsg",rows:"5",cols:"40"},domProps:{value:t.inputmsg},on:{change:function(e){t.inputmsg=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),a("br"),a("br"),a("div",{attrs:{id:"b"}},[a("button",{attrs:{type:"submit",value:"Submit"},on:{click:function(e){return t.complete(t.inputname,t.inputemail,t.inputmsg)}}},[t._v(" Submit ")])])])])},P=[],T={components:{},data:function(){return{inputname:"",inputemail:"",inputmsg:""}},methods:{complete:function(t,e,a){""==t||""==e||""==a?alert("Incomplete submission, please fill in all fields"):alert("Your response has been submitted")}}},N=T,A=(a("3a9d"),Object(l["a"])(N,j,P,!1,null,null,null)),E=A.exports,$=a("d2c1"),z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{"font-size":"50px","text-align":"center",color:"#C6C6C6"}},[t._v("CLASSY AND FABULOUS TUTORS")]),a("div",{attrs:{id:"classImg"}},[a("p",{staticClass:"imgTxt"},[t._v("View Student Applications")])]),a("div",{attrs:{id:"scheduleContainer"}},[a("p",{staticClass:"imgTxt"},[t._v("View Your Schedule")])])])}],M=(a("94c7"),{}),q=Object(l["a"])(M,z,F,!1,null,null,null),D=q.exports,Q=[{path:"/",name:"home",component:C["default"]},{path:"/login",component:_},{path:"/signup",name:"signup",component:O},{path:"/contactus",component:E},{path:"/faq",component:$["default"]},{path:"/homeTutor",component:D}],W=a("bc3a"),R=a.n(W);n["a"].config.productionTip=!1,n["a"].prototype.$axios=R.a,n["a"].use(p["a"]),n["a"].component("home",C["default"]),n["a"].component("login",_),n["a"].component("SignUp",O);var B=new p["a"]({routes:Q,mode:"history",props:!0});new n["a"]({render:function(t){return t(c)},router:B}).$mount("#app")},"57da":function(t,e,a){"use strict";var n=a("822a"),r=a("e732"),i=(a("8b71"),a("2877")),o=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},6144:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-container",attrs:{id:"whole"}},[a("nav",[a("ul",{attrs:{id:"navUL"}},[a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/Login",exact:""}},[t._v("Login")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/SignUp",exact:""}},[t._v("SignUp")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/ContactUs",exact:""}},[t._v("Contact Us")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/FAQ",exact:""}},[t._v("FAQ")])],1)])]),a("div",{attrs:{id:"title"}},[t._v("Frequently Asked Questions")]),t._m(0),a("div",{staticClass:"float-child right"},[a("div",[a("p",[t._v("Other burning questions unanswered?")]),a("router-link",{attrs:{id:"contactlink",to:"/ContactUs",exact:""}},[t._v("Click here to contact us now!")])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"questions"}},[a("h3",{attrs:{id:"q"}},[t._v("How does this platform work?")]),a("p",{attrs:{id:"a"}},[t._v(" Classy Tutors serves as a platform for Tutors and Students to connect easily, allowing for easy communication between both parties. Students can scroll through the profiles of Tutors and find the best suited tutor for them. Our site also allows students to review the tutors, allowing future students to find tutors better suited for them. ")]),a("h3",{attrs:{id:"q"}},[t._v("Do we make payment for lessons through this site?")]),a("p",{attrs:{id:"a"}},[t._v(" At the moment, Classy Tutors are not accepting any payment through this site. In the future, we are looking into offering more functions for our users. ")])])}]},7174:function(t,e,a){},"822a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",[a("ul",{attrs:{id:"navUL"}},[a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/Login",exact:""}},[t._v("Login")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/SignUp",exact:""}},[t._v("SignUp")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/ContactUs",exact:""}},[t._v("Contact Us")])],1),a("li",{attrs:{id:"navLI"}},[a("router-link",{attrs:{to:"/FAQ",exact:""}},[t._v("FAQ")])],1)])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",[a("div",{staticClass:"imageContainer"},[a("img",{attrs:{id:"tutorImg"}}),a("p",{attrs:{id:"aboutUs"}},[t._v("About Us")])]),a("div",{staticStyle:{color:"#C6C6C6","text-align":"center"}},[a("p",{staticStyle:{"font-size":"50px","text-decoration":"underline"}},[t._v("Who We Are")]),a("p",{staticStyle:{"font-size":"30px"}},[t._v("Classy & Fabulous Tutors is a tuition matching platform allowing for centralised tuition sourcing.")]),a("p",[t._v(" ... ")])]),a("div",[a("p",{staticStyle:{"text-align":"center",color:"#C6C6C6","font-size":"50px","text-decoration":"underline"}},[t._v("Our Students/Tutors Testimonials")]),a("div",{staticStyle:{position:"absolute",left:"100px",width:"1200px"}},[a("img",{staticStyle:{width:"120px",height:"120px",position:"relative",float:"left"},attrs:{src:"https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip"}}),a("p",{staticStyle:{"font-size":"20px",position:"relative",top:"20px",left:"20px",color:"#C6C6C6"}},[t._v(' "Mr McDonald has helped my grades improve from a C5 to an A1 over the span of 3 months! Thank you Classy & Fabulous tutors for connecting us!" '),a("br"),t._v(" - Bean, 2021 ")])]),a("div",{staticStyle:{position:"absolute",left:"100px",top:"1150px",width:"1200px"}},[a("img",{staticStyle:{width:"120px",height:"120px",position:"relative",float:"left"},attrs:{src:"https://d21xzygesx9h0w.cloudfront.net/TUTOROO-connects-you-with-Shailly,-English-tutor-in-Singapore-5ec7c8032a1f3"}}),a("p",{staticStyle:{"font-size":"20px",position:"relative",top:"20px",left:"20px",color:"#C6C6C6"}},[t._v(' "With Classy & Fabulous tutors, I\'m now able to earn a stable stream of income from tutoring. The platform is easy to use and helps me stay organised with the multiple tutoring sessions I have so that I can better manage my time. Thank you Classy & Fabulous tutors!" '),a("br"),t._v(" - Shailly, 2021 ")])])])])}]},"869e":function(t,e,a){},"88d7":function(t,e,a){},"8b71":function(t,e,a){"use strict";a("88d7")},"94c7":function(t,e,a){"use strict";a("a680")},a680:function(t,e,a){},b7e3:function(t,e,a){},d0bc:function(t,e,a){"use strict";a("b7e3")},d2c1:function(t,e,a){"use strict";var n=a("6144"),r=a("1a92"),i=(a("26a2"),a("2877")),o=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e732:function(t,e,a){"use strict";var n=a("0134"),r=a.n(n);e["default"]=r.a}});
//# sourceMappingURL=app.7fa1f7b8.js.map