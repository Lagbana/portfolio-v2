(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,a){e.exports=a.p+"static/media/avatar.0ffeb044.png"},184:function(e,t,a){e.exports=a.p+"static/media/vogi.b9bc9e4b.png"},185:function(e,t,a){e.exports=a.p+"static/media/portfolio.c0769dfd.png"},186:function(e,t,a){e.exports=a.p+"static/media/travelbook.cb670a2c.PNG"},187:function(e,t,a){e.exports=a.p+"static/media/good-samaritan.eb2da3a7.PNG"},188:function(e,t,a){e.exports=a.p+"static/media/hr-manager.f84b3170.PNG"},189:function(e,t,a){e.exports=a.p+"static/media/covid-19.a79fbfae.PNG"},190:function(e,t,a){e.exports=a.p+"static/media/weatherdashboard.fd4cc270.PNG"},191:function(e,t,a){e.exports=a.p+"static/media/work-scheduler.f9c3b6c2.png"},198:function(e,t,a){e.exports=a(391)},203:function(e,t,a){},204:function(e,t,a){},259:function(e,t,a){},268:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),l=a.n(o),c=(a(203),a(68)),i=(a(106),a(204),a(392)),s=a(120),m=a.n(s),d=a(161),u=a(8),g=a(197),p=a(127),h=Object(r.createContext)({color:"",menuColor:"",backgroundColor:"",headerColor:"",buttonColor:"",iconColor:""});function f(){var e=Object(r.useState)([0,0]),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(r.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}function b(e,t){switch(t.type){case"dark":return[].concat(Object(p.a)(e),[{color:"#ffffff",menuColor:"orange",backgroundColor:"#353452",headerColor:"orange",buttonColor:"#FD4F64",iconColor:"#ffffff"}]);case"light":return[].concat(Object(p.a)(e),[{color:"#000000",menuColor:"#000000",backgroundColor:"#F9F9FF",headerColor:"#121212",buttonColor:"#FD4F64",iconColor:"#2593FC"}]);default:return e}}var v=function(e){e.value;var t=Object(g.a)(e,["value"]),a=Object(r.useReducer)(b,[{color:"#ffffff",menuColor:"orange",backgroundColor:"#353452",headerColor:"orange",buttonColor:"#FD4F64",iconColor:"#ffffff"}]),o=Object(u.a)(a,2),l=o[0],c=o[1];return n.a.createElement(h.Provider,Object.assign({value:[l,c]},t))},y=function(){return Object(r.useContext)(h)},w=a(56),E=a(403),k=a(398),C=a(28),S=a(29),j=a(126);var x=function(e){var t=e.icon,a=e.size,r=e.name,o=e.ml,l=e.backgroundColor,c=e.mr,i=e.mt,s=e.px,m=e.htmlType,d=e.handleClick,u={textAlign:"center",marginTop:i,paddingLeft:s,paddingRight:s,marginLeft:o,marginRight:c,display:"block",color:"#ffffff",backgroundColor:l,fontWeight:600,border:"none"};return n.a.createElement(j.a,{shape:"round",size:a,htmlType:m,style:u,onClick:d},t," \xa0 ",n.a.createElement("span",null,r))};a(259);function L(e){var t=e.src,a=e.alt,r=e.onClick;return n.a.createElement("div",{className:"img-block"},n.a.createElement("img",{src:t,alt:a,onClick:r}))}var z=a(163),O=a.n(z),F=a(95),I=a.n(F),B=i.a.Sider;var T=function(){var e=y(),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)("1"),i=Object(u.a)(l,2),s=i[0],g=i[1],p=Object(r.useState)(!0),h=Object(u.a)(p,2),f=h[0],b=h[1];function v(){return(v=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(t),!1!==f){e.next=6;break}return e.next=4,o({type:"dark"});case 4:e.next=8;break;case 6:return e.next=8,o({type:"light"});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=a[a.length-1].backgroundColor,z=a[a.length-1].buttonColor,F=a[a.length-1].menuColor;return n.a.createElement(B,{breakpoint:"lg",collapsedWidth:"0",style:{height:"100vh",position:"fixed",zIndex:99,flex:"0 0 200px",maxWidth:"200px",minWidth:"200px",width:"200px",left:0,textAlign:"center",fontDisplay:"swap",backgroundColor:j}},n.a.createElement(L,{src:O.a,alt:"Larry Agbana Profile Image",onClick:function(){w.animateScroll.scrollToTop()}}),n.a.createElement("div",{style:{marginBottom:"1vw"}},n.a.createElement(E.a,{checkedChildren:"dark",unCheckedChildren:"light",defaultChecked:!0,size:"default",onClick:function(e){return v.apply(this,arguments)}})),n.a.createElement(c.a,null,n.a.createElement(k.a,{style:{backgroundColor:j},mode:"inline",selectedKeys:[s]},n.a.createElement(k.a.Item,{key:"1"},n.a.createElement(w.Link,{activeClass:"active",to:"/about",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){return g("1")},style:{color:F,fontWeight:600,fontSize:"1rem"}},"About")),n.a.createElement(k.a.Item,{key:"2"},n.a.createElement(w.Link,{activeClass:"active",to:"/projects",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){return g("2")},style:{color:F,fontWeight:600,fontSize:"1rem"}},"Projects")),n.a.createElement(k.a.Item,{key:"3"},n.a.createElement(w.Link,{activeClass:"active",to:"/skills",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){return g("3")},style:{color:F,fontWeight:600,fontSize:"1rem"}},"Skills")),n.a.createElement(k.a.Item,{key:"4"},n.a.createElement(w.Link,{activeClass:"active",to:"/education",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){return g("4")},style:{color:F,fontWeight:600,fontSize:"1rem"}},"Education")),n.a.createElement(k.a.Item,{key:"6"},n.a.createElement(w.Link,{activeClass:"active",to:"/contact",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){return g("6")},style:{color:F,fontWeight:600,fontSize:"1rem"}},"Contact")))),n.a.createElement(c.a,null,n.a.createElement(c.b,{to:I.a,target:"_blank"},n.a.createElement(x,{name:"Resume",size:"large",ml:"auto",mr:"auto",mt:"3vw",px:"2rem",backgroundColor:z,icon:n.a.createElement(C.a,{icon:S.d})}))))},R=(a(268),a(67)),A=a(393),_=i.a.Content;function W(e){var t,a,r=e.id,o=y(),l=Object(u.a)(o,2),c=l[0],i=(l[1],c[c.length-1].backgroundColor),s=c[c.length-1].color,m=c[c.length-1].buttonColor,d=c[c.length-1].headerColor,g=c[c.length-1].iconColor,p=f(),h=Object(u.a)(p,2),b=h[0];h[1];768===b?(t="2vw 2vw 2vw 15vw",a="90vh"):1024===b?(t="2vw 2vw 2vw 7vw",a="72.5vh"):b<768?(t="2vw 2vw 2vw 15vw",a="100vh"):(t="2vw 2vw 2vw 10vw",a="80vh");var v=768===b||b<768?"0rem":"8rem";return n.a.createElement("section",{id:r,style:{color:s,backgroundColor:i,padding:t,minHeight:a}},n.a.createElement(_,null,n.a.createElement("div",{className:"aboutContainer"},n.a.createElement("div",{style:{marginLeft:v}},n.a.createElement("header",null,n.a.createElement("h1",{style:{color:d}},"Larry Agbana")),n.a.createElement("h3",{style:{color:d}},"Full Stack Web Developer"),n.a.createElement("address",null,n.a.createElement("h5",{style:{color:d}},"Ottawa, ON \xb7 (416) 274-9499 \xb7 larryagbana@gmail.com")),n.a.createElement("p",null,"A full stack software developer that strives to balance technical excellence with flawless user experience in order to create products people love and use. I believe in writing clean modular code and have embraced test driven and agile development to collaborate effectively while building reliable, scalable, and maintainable applications.",n.a.createElement("br",null),n.a.createElement("br",null),"When I am not working or learning something new you might find me running down a soccer pitch somewhere in Ottawa or doing some amateur farming (ask me about my kale \ud83d\ude09). ",n.a.createElement("br",null)," ",n.a.createElement("br",null),"Explore my projects and feel free to reach out for collaboration or recruiting. Thanks for visiting!"),n.a.createElement("div",{className:"iconsDiv"},n.a.createElement(A.a,{direction:"vertical",align:"center"},n.a.createElement(A.a,{size:40,align:"start"},n.a.createElement("a",{href:"https://github.com/Lagbana",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(C.a,{icon:R.a,className:"icon",color:g})),n.a.createElement("a",{href:"https://www.linkedin.com/in/larryagbana/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(C.a,{icon:R.b,className:"icon",color:g})),n.a.createElement("a",{href:"https://calendar.google.com/calendar?cid=bGFycnlhZ2JhbmFAZ21haWwuY29t",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(C.a,{icon:S.a,className:"icon",color:g})),n.a.createElement("a",{href:"mailto:larryagbana@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(C.a,{icon:S.b,className:"icon",color:g}))),n.a.createElement("a",{href:"https://www.larryagbana.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(x,{name:"Zoom me!",size:"large",ml:"auto",mr:"auto",mt:"1.5rem",px:"1.5rem",backgroundColor:m,handleClick:function(){window.open("https://zoom.us/j/4731778118?pwd=dVJYSGRaVjl1WHVPeUdjMW1OZE0zdz09","_blank","noopener","noreferrer")}},"Zoom me!"))))))))}var P=a(69),D=a(41),M=a(396),N=a(397),H=a(404);function V(e){var t=e.id,a=y(),r=Object(u.a)(a,2),o=r[0],l=(r[1],o[o.length-1].backgroundColor),c=o[o.length-1].headerColor,i=f(),s=Object(u.a)(i,1)[0],m={section:{backgroundColor:l,padding:768===s?"2vw 2vw 2vw 5vw":1024===s?"2vw 2vw 2vw 16vw":s<768?"2vw 2vw 2vw 2vw":"2vw 2vw 2vw 15vw",color:"black"},mobileCardBody:{marginLeft:"0.5rem",marginTop:"0.5rem"},tabletCardBody:{marginLeft:"2rem",marginTop:"2rem"},cardBody:{marginLeft:"1rem",marginTop:"3rem"},title:{color:c,fontFamily:"Poppins",textAlign:"left",marginLeft:"1.5rem",fontSize:"2.5em"},underline:{border:"0rem",height:"0.2rem",width:"5rem",marginLeft:"1.5rem",backgroundColor:c}},d=768===s?m.tabletCardBody:s<768?m.mobileCardBody:m.cardBody;return n.a.createElement("section",{className:"site-layout-background mainview",id:t,style:m.section},n.a.createElement("div",{style:{paddingLeft:"4.5vw"}},n.a.createElement("header",null,n.a.createElement("h2",{style:m.title}," Skills "),n.a.createElement("hr",{style:m.underline})),n.a.createElement(P.a,{style:d},n.a.createElement(D.a,{xs:24,sm:24,md:24,lg:11,xl:11},n.a.createElement(M.a,{title:"Frontend",bodyStyle:{border:"none"},style:{backgroundColor:"#F0FFFF",borderRadius:"10px"},headStyle:{border:"none",fontSize:22}},n.a.createElement(P.a,null,[{skill:"JavaScript",icon:"devicon-javascript-plain colored"},{skill:"TypeScript",icon:"devicon-typescript-plain colored"},{skill:"React",icon:"devicon-react-original colored"},{skill:"Webpack",icon:"devicon-webpack-plain colored"},{skill:"jQuery",icon:"devicon-jquery-plain-wordmark colored"},{skill:"HTML5",icon:"devicon-html5-plain colored"},{skill:"CSS3",icon:"devicon-css3-plain colored"},{skill:"Bootstrap",icon:"devicon-bootstrap-plain colored"},{skill:"Handlebars",icon:"devicon-handlebars-plain colored"}].map((function(e){return n.a.createElement(D.a,{xs:12,sm:12,md:8,lg:12,xl:6},n.a.createElement(M.a,{bordered:!1,style:{backgroundColor:"#F0FFFF"}},n.a.createElement("i",{style:{color:e.color,fontSize:"30px"},class:e.icon}),n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"16px"}},e.skill)))}))))),n.a.createElement(D.a,{lg:1,xl:1}),n.a.createElement(D.a,{xs:24,sm:24,md:24,lg:11,xl:11},n.a.createElement(M.a,{title:"Backend",bodyStyle:{border:"none"},style:{borderRadius:"10px",marginTop:s>991?0:10,backgroundColor:"#F0FFFF"},headStyle:{border:"none",fontSize:22}},n.a.createElement(P.a,null,[{skill:"Node.js",color:"",icon:"devicon-nodejs-plain colored"},{skill:"Express",color:"#303030",icon:"devicon-express-original"},{skill:"MongoDB",color:"",icon:"devicon-mongodb-plain colored"},{skill:"MySQL",color:"",icon:"devicon-mysql-plain colored"},{skill:"Sequelize",color:"",icon:"devicon-sequelize-plain colored"},{skill:"Python",color:"",icon:"devicon-python-plain colored"},{skill:"TypeScript",color:"",icon:"devicon-typescript-plain colored"},{skill:"Heroku",color:"",icon:"devicon-heroku-original colored"},{skill:"Travis CI",color:"",icon:"devicon-travis-plain colored"}].map((function(e){return n.a.createElement(D.a,{xs:12,sm:12,md:8,lg:12,xl:6},n.a.createElement(M.a,{bordered:!1,style:{backgroundColor:"#F0FFFF"}},n.a.createElement("i",{style:{color:e.color,fontSize:"30px"},class:e.icon}),n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"16px"}},e.skill)))}))))),n.a.createElement(D.a,{xs:24,sm:24,md:24,lg:23,xl:23},n.a.createElement(M.a,{title:"Concepts",bodyStyle:{border:"none"},style:{backgroundColor:"#F0FFFF",marginTop:20,borderRadius:"10px"},headStyle:{border:"none",fontSize:22}},n.a.createElement(P.a,null,n.a.createElement(D.a,{xs:24,sm:24,md:24,lg:24,xl:24},n.a.createElement(N.b,null,["RESTful APIs","Continuous Integration and deployment","Data Structues and Algorithms","Test driven development","Mobile-first design","Progressive Web Applications (PWA)","MVC Framework"].map((function(e,t){return n.a.createElement(A.a,{key:t},n.a.createElement(H.a,{color:"#f50",style:{fontSize:"1rem",marginBottom:"0.5rem",color:"white"}},e))}))))))))))}var J=a(128),G=a(173),q=a.n(G);var Z=function(){var e=y(),t=Object(u.a)(e,2),a=t[0],o=(t[1],a[a.length-1].menuColor),l=a[a.length-1].buttonColor,c=Object(r.useState)(window.innerWidth),i=Object(u.a)(c,2),s=i[0],m=i[1];Object(r.useEffect)((function(){var e=function(){return m(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var d=768===s?"3.5rem":s<768?"2.5rem":"3.5rem",g=768===s?-65:s<768?-40:-100,p={color:{color:o},icon:{marginRight:"1.5rem",fontSize:"3vh"}},h=[{source:n.a.createElement("a",{href:"mailto:larryagbana@gmail.com",target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:S.c,style:p.icon}),"larryagbana@gmail.com")},{source:n.a.createElement("a",{href:"https://www.linkedin.com/in/larryagbana/",target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:R.b,style:p.icon}),"larryagbana.com/linkedin")},{source:n.a.createElement("a",{href:"https://github.com/Lagbana",target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:R.a,style:p.icon}),"larryagbana.com/github")},{source:n.a.createElement("a",{href:"https://zoom.us/j/4731778118?pwd=dVJYSGRaVjl1WHVPeUdjMW1OZE0zdz09",target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:S.f,style:p.icon}),"larryagbana.com/zoom")},{source:n.a.createElement("a",{href:I.a,target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:S.d,style:p.icon}),"larryagbana.com/resume")},{source:n.a.createElement("a",{href:"https://calendar.google.com/calendar?cid=bGFycnlhZ2JhbmFAZ21haWwuY29t",target:"_blank",rel:"noopener noreferrer",style:p.color},n.a.createElement(C.a,{icon:S.a,style:p.icon}),"larryagbana.com/calendar")}];return n.a.createElement(A.a,{direction:"vertical"},n.a.createElement("div",null,n.a.createElement("h2",{style:{color:l,fontWeight:650,fontSize:"1.60rem",marginTop:g}},"Let's connect!")),n.a.createElement(N.b,{itemLayout:"horizontal",split:!1,dataSource:h,renderItem:function(e){return n.a.createElement(N.b.Item,{style:{height:d}},e.source)}}))},Q=a(399),U=a(395),Y=a(400),X=Q.a.TextArea;function K(e){var t=e.id,a=y(),r=Object(u.a)(a,2),o=r[0],l=(r[1],o[o.length-1].backgroundColor),c=o[o.length-1].buttonColor,i=o[o.length-1].headerColor,s=f(),m=Object(u.a)(s,1)[0],d=768===m?"2vw 2vw 2vw 5vw":m<768?"2vw 2vw 2vw 2vw":"2vw 2vw 2vw 15vw",g=U.a.useForm(),p=Object(u.a)(g,1)[0],h={labelCol:{span:8},wrapperCol:{span:16}},b={mainContent:{paddingLeft:"4.5vw",paddingRight:"0.5vw"},title:{color:i,fontFamily:"Poppins",textAlign:"left",marginLeft:"1.5rem",fontSize:"2.5em"},underline:{border:"0rem",height:"0.2rem",width:"5rem",marginLeft:"1.5rem",backgroundColor:i},mobileTextarea:{borderRadius:"1.5rem",height:"20vh",width:"80vw",minWidth:"80vw"},textarea:{borderRadius:"1.5rem",height:"20vh",width:"40vw",minWidth:"40vw"},inputs:{borderRadius:"1.5rem",height:"3.5rem",width:"40vw"},mobileInputs:{width:"80vw",borderRadius:"1rem",height:"2.5rem",marginLeft:"auto",marginRight:"auto"},mobileContactBody:{marginLeft:"0rem",marginTop:"2rem"},contactBody:{marginLeft:"2rem",marginTop:"4.5rem"},mobileFormSpacing:{marginLeft:"0rem"},formSpacing:{marginLeft:"8rem"},label:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"},button:{paddingLeft:"2rem",paddingRight:"2rem",backgroundColor:c,color:"#ffffff",fontWeight:600,border:"none"}},v=768===m||m<768?"vertical":"horizontal",w=768===m||m<768?b.mobileInputs:b.inputs,E=768===m||m<768?b.mobileTextarea:b.textarea,k=768===m||m<768?b.mobileContactBody:b.contactBody,C=768===m||m<768?b.mobileFormSpacing:b.formSpacing;return n.a.createElement("section",{id:t,style:{backgroundColor:l,color:"white",padding:d,minHeight:"100vh"}},n.a.createElement("div",{style:b.mainContent},n.a.createElement("header",null,n.a.createElement("h2",{style:b.title}," Get In Touch "),n.a.createElement("hr",{style:b.underline})),n.a.createElement(A.a,{direction:v,style:k},n.a.createElement(Z,null),n.a.createElement(A.a,{style:C},n.a.createElement(U.a,Object.assign({},h,{name:"contact form",initialValues:{userName:"",email:"",subject:"",message:""},form:p,onFinish:function(e){q.a.post("/email",e).then((function(e){var t;p.resetFields(),t="success",Y.a[t]({message:"New Message",description:"Thanks for connecting, I'll respond within 24 hours \ud83d\ude00",duration:6.5})}))},onFinishFailed:function(e){console.log("Failed:",e)}}),n.a.createElement(U.a.Item,{rules:[{required:!0,message:"Please enter your name"}],name:"userName"},n.a.createElement(Q.a,{placeholder:"Your name",size:"large",style:w})),n.a.createElement(U.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your email!"}]},n.a.createElement(Q.a,{placeholder:"Email address",size:"large",style:w})),n.a.createElement(U.a.Item,{name:"subject"},n.a.createElement(Q.a,{placeholder:"Subject",size:"large",style:w})),n.a.createElement(U.a.Item,{name:"message"},n.a.createElement(X,{placeholder:"Send me a message and I will respond within 24 hours",size:"large",style:E})),n.a.createElement(U.a.Item,{wrapperCol:Object(J.a)(Object(J.a)({},h.wrapperCol),{},{offset:8})},n.a.createElement(j.a,{style:b.button,shape:"round",size:"large",htmlType:"submit"},"Send Message")))))))}var $=a(402);function ee(e){var t,a,r=e.id,o=y(),l=Object(u.a)(o,2),c=l[0],i=(l[1],c[c.length-1].backgroundColor),s=c[c.length-1].headerColor,m=f(),d=Object(u.a)(m,2),g=d[0];d[1];768===g?(t="2vw 2vw 2vw 5vw",a="4vw"):1024===g?(t="2vw 2vw 2vw 16vw",a="2vw"):t=g<768?"2vw 2vw 2vw 2vw":"2vw 2vw 2vw 15vw";var p={section:{backgroundColor:i,padding:t,color:"black"},tabletCard:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"2rem",borderRadius:"1rem"},mobileCard:{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"2rem",borderRadius:"1rem"},card:{width:"95%",marginTop:"3rem",borderRadius:"1rem"},mobileCardBody:{marginLeft:"0.5rem",marginTop:"0.5rem"},tabletCardBody:{marginLeft:"2rem",marginTop:"2rem"},cardBody:{marginLeft:"1rem",marginTop:"1rem"},tabletExperience:{marginLeft:"1.5rem"},mobileExperience:{marginLeft:"0.25rem"},experience:{marginLeft:"3rem"},tabletSubtitle:{fontSize:"2.5vh",fontWeight:600},mobileSubtitle:{fontSize:"3vh",fontWeight:700},subtitle:{fontSize:"1.1vw",fontWeight:700},mobileIcons:{fontSize:"6vw"},tabletIcons:{fontSize:a},icons:{fontSize:"3.5vh"},tabletDate:{fontSize:"2vh",color:"grey"},mobileDate:{fontSize:"2.5vh",color:"grey"},date:{fontSize:"1vw",color:"grey"},tabletContent:{fontSize:"2vh"},mobileContent:{fontSize:"2.5vh"},content:{fontSize:"1vw"},title:{color:s,fontFamily:"Poppins",textAlign:"left",marginLeft:"1.5rem",fontSize:"2.5em"},underline:{border:"0rem",height:"0.2rem",width:"5rem",marginLeft:"1.5rem",backgroundColor:s}},h=768===g?p.tabletCard:g<768?p.mobileCard:p.card,b=768===g?p.tabletCardBody:g<768?p.mobileCardBody:p.cardBody,v=768===g||1024===g?p.tabletIcons:g<768?p.mobileIcons:p.icons,w=768===g?p.tabletDate:g<768?p.mobileDate:p.date,E=768===g?p.tabletSubtitle:g<768?p.mobileSubtitle:p.subtitle,k=768===g?p.tabletExperience:g<768?p.mobileExperience:p.Experience,j=768===g?p.tabletContent:g<768?p.mobileContent:p.content;return n.a.createElement("section",{className:"site-layout-background mainview",id:r,style:p.section},n.a.createElement("div",{style:{paddingLeft:"4.5vw"}},n.a.createElement("header",null,n.a.createElement("h2",{style:p.title}," Education "),n.a.createElement("hr",{style:p.underline})),n.a.createElement(M.a,{style:h},n.a.createElement("div",{style:b},n.a.createElement($.a,null,n.a.createElement($.a.Item,{dot:n.a.createElement(C.a,{icon:S.e,style:v}),color:"red"},n.a.createElement("div",{style:k},n.a.createElement("h4",{style:w},"July 2020"),n.a.createElement("h3",{style:E},"Full Stack Web Development Bootcamp - Carleton University (A+ average)"),n.a.createElement("p",{style:j},"An intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, React, jQuery, Heroku, Node.js, Express, MySQL, MongoDB, Handlebars.js, ejs, REST, Agile, and other web development concepts."))),n.a.createElement($.a.Item,{dot:n.a.createElement(C.a,{icon:S.e,style:v}),color:"red"},n.a.createElement("div",{style:k},n.a.createElement("h4",{style:w},"December 2019"),n.a.createElement("h3",{style:E},"MBA (Data Science Specialization) - Carleton University (A- average)"),n.a.createElement("p",{style:j},"Business degree with a specialization in applied data science as it relates to the creation of business value. Learned to conduct visual analysis with Tableau, and PowerBI, and machine learning with Python, R, and SAS."))),n.a.createElement($.a.Item,{style:{paddingBottom:"0rem"},dot:n.a.createElement(C.a,{icon:S.e,style:v}),color:"red"},n.a.createElement("div",{style:k},n.a.createElement("h4",{style:w},"April 2014"),n.a.createElement("h3",{style:E},"B.A. Economics (Mathematics Minor) - Carleton University"),n.a.createElement("p",{style:j},"Closely studied an array of economics and mathematical topics spanning macro economics, micro economics, labor economics, linear algebra, calculus, and discrete structures."))))))))}var te=a(401),ae=a(394);a(389);var re=function(e){var t,a=e.onClose,r=e.isVisible,o=e.projectName,l=e.projectContent,c=e.projectImage,i=e.projectVideo,s=e.techStack,m=e.deployed,d=e.github,g=y(),p=Object(u.a)(g,2),h=p[0],b=(p[1],h[h.length-1].backgroundColor),v=h[h.length-1].color,w={drawer:{backgroundColor:b,color:v,fontSize:"1rem"},header:{display:"block",marginBottom:"24px",fontSize:"40px",lineHeight:1.5715,color:h[h.length-1].headerColor},subHeaders:{display:"block",marginBottom:"16px",color:v,fontSize:"20px",lineHeight:1.5715},content:{marginBottom:"1.5rem"},button:{borderRadius:"10px",backgroundColor:"#1e90ff",margin:"0.5em",color:"#ffffff",marginTop:"1rem",marginBottom:"0",border:"none"},demo:{}},E=f(),k=Object(u.a)(E,1)[0];switch(!0){case k<768:t="85%";break;case k>=768&&k<1024:t="75%";break;case 1024===k:t="60%";break;default:t="52%"}var C=""===i?n.a.createElement("a",{href:i},n.a.createElement("img",{src:c,alt:"demo for project titled: ".concat(o),width:"100%"})):n.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:c,alt:"demo for project titled: ".concat(o),width:"100%"}));return n.a.createElement(te.a,{width:t,placement:"right",closable:!1,onClose:a,visible:r,bodyStyle:w.drawer},n.a.createElement("p",{style:w.header},o),n.a.createElement("p",{style:w.subHeaders},"Description"),n.a.createElement(P.a,null,n.a.createElement(D.a,{span:24,style:w.content},l),n.a.createElement(D.a,{span:24,style:w.content},n.a.createElement(D.a,{span:24},n.a.createElement("p",{style:w.subHeaders},"Links")),n.a.createElement(A.a,null,n.a.createElement("a",{href:d,alt:"link to github repository",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(j.a,{style:w.button,size:"default"},"GitHub Repo"))),n.a.createElement(A.a,null,n.a.createElement("a",{href:m,alt:"link to project for project titled: ".concat(o),target:"_blank",rel:"noopener noreferrer"},n.a.createElement(j.a,{style:w.button,size:"default"},"View App")))),n.a.createElement(D.a,{span:24},n.a.createElement(D.a,{span:24},n.a.createElement("p",{style:w.subHeaders},"Tech Stack")),s.map((function(e,t){return n.a.createElement(A.a,{key:t},n.a.createElement(H.a,{color:"#f50"},e))})))),n.a.createElement(ae.a,null),n.a.createElement("p",{style:w.subHeaders},"Demo"),n.a.createElement(P.a,null,n.a.createElement(D.a,{span:24,style:w.demo},C)))},ne=(a(390),a(184)),oe=a.n(ne),le=a(185),ce=a.n(le),ie=a(186),se=a.n(ie),me=a(187),de=a.n(me),ue=a(188),ge=a.n(ue),pe=a(189),he=a.n(pe),fe=a(190),be=a.n(fe),ve=a(191),ye=a.n(ve),we=[{source:oe.a,techStack:["React","Node.js","Express","MongoDB","Mongoose","Ant Design","GitHub API","SendGrid API"],description:"vogi webiste",deployed:"https://www.vogi.ca/",github:"https://github.com/Lagbana/vogi",demoImage:"https://content.screencast.com/users/Larry2846/folders/Default/media/33d02635-dc52-4cf4-bf09-64d22faefde2/LWR_Recording.png",demoVideo:"https://www.screencast.com/t/aQ4JjiD8Bsy5",title:"vogi",content:"A project management app that provides a user friendly dashboard where users can create projects, add project features, and track project completion progress by integrating GitHub API."},{source:ce.a,techStack:["React","Node.js","Express","Ant Design"],description:"Portfolio - Larry Agbana",deployed:"https://www.larryagbana.com/",github:"https://github.com/Lagbana/portfolio-v2",demoImage:"https://lh3.googleusercontent.com/d/16oREkhk4Fs9ABiNePbfM0NZAnfS0PULF=s720?authuser=0",demoVideo:"",title:"React Portfolio",content:"Current portfolio built with React. The user experience has been crafted to enable easy connection via various channels, viewing project details, and choosing the preferred color theme."},{source:se.a,techStack:["JavaScript","Node.js","Express","MySQL","Sequelize","Passport","HTML","Semantic UI","CSS"],description:"travel book website",deployed:"https://www.travel-book.ca/",github:"https://github.com/Lagbana/travel-book",demoImage:"https://lh3.googleusercontent.com/d/13EEnhBZcCUc4kCqyLbhWRcMIVB9ejm57=s720?authuser=0",demoVideo:"",title:"travelbook",content:"A traveler dedicated social media and blogging platform. Users have to signup and once authenticated able to create, read, update, and delete posts."},{source:he.a,techStack:["JavaScript","HTML","CSS","Bootstrap"],description:"covid-19 tracker website",deployed:"https://lagbana.github.io/covid19-tracker/",github:"https://github.com/Lagbana/covid19-tracker",demoImage:"https://lh3.googleusercontent.com/d/1ikh1xcgMiQVKguZPLMgtRATvlO1TQJvY=s520?authuser=0",demoVideo:"",title:"COVID-19 Tracker",content:"An app that provides Covid-19 related information. It displays API sourced reported COVID-19 data and visualization, and curated related news from the NYT API."},{source:de.a,techStack:["JavaScript","Node.js","Express","MySQL","Sequelize","HTML","Bootstrap"],description:"good samaritan website",deployed:"https://serene-mountain-91633.herokuapp.com/",github:"https://github.com/Lagbana/good-samaritan",demoImage:"https://content.screencast.com/users/Larry2846/folders/Default/media/a8dc19ed-2f5d-4d62-a778-7c0c61ebd101/LWR_Recording.png",demoVideo:"https://www.screencast.com/t/ZhLVJ61Aevrc",title:"good samaritan",content:n.a.createElement("p",null,n.a.createElement("strong",null,"Hackathon entry")," for"," ",n.a.createElement("a",{href:"https://ru-hacks.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover",target:"_blank",rel:"noopener noreferrer"},"ruHacks")," ","in the opioid misuse harm reduction category. The app works by alerting nearby trained emergency response volunteers to act before paramedics arrive to an overdose situation.")},{source:ge.a,techStack:["Node.js","MySQL","CommandLine"],description:"human resources manager CLI",deployed:"https://www.screencast.com/users/Larry2846/folders/Default/media/2e02e390-7527-4503-809d-f70499325212",github:"https://github.com/Lagbana/employee-tracker",demoImage:"https://content.screencast.com/users/Larry2846/folders/Default/media/3103a3cd-02bb-4061-91d1-feeee9b1db9a/LWR_Recording.png",demoVideo:"https://www.screencast.com/users/Larry2846/folders/Default/media/2e02e390-7527-4503-809d-f70499325212",title:"Human Resources Manager CLI",content:"A command-line interface content management system that supports human resources administrative functions."},{source:be.a,techStack:["JavaScript","HTML","CSS","Bootstrap"],description:"Weather Dashboard",deployed:"https://lagbana.github.io/weather-dashboard/",github:"https://github.com/Lagbana/weather-dashboard",demoImage:"https://lh3.googleusercontent.com/d/1VGY9Y75gB6idXIAp8c07xd8tSTaLmtAG=s720?authuser=0",demoVideo:"",title:"Weather Dashboard",content:"Find today's and the 5-day weather forecast of a searched city. Data fetched from the openweather API."},{source:ye.a,techStack:["jQuery","HTML","CSS","Bootstrap"],description:"Work day scheduler app",deployed:"https://lagbana.github.io/workday-scheduler/",github:"https://github.com/Lagbana/workday-scheduler",demoImage:"https://lh3.googleusercontent.com/d/1aZxy0ctRnvq5Rew-EuLML5Pc_acE_cV7=s720?authuser=0",demoVideo:"",title:"Workday Scheduler",content:"A 9am - 5pm Scheduler; input agenda and click save. Hours are color coded for past, current, and future time."}];function Ee(e){var t,a,o,l,c,i=e.id,s=Object(r.useState)(we),m=Object(u.a)(s,2),d=m[0],g=m[1],p=y(),h=Object(u.a)(p,2),b=h[0],v=(h[1],b[b.length-1].backgroundColor),w=b[b.length-1].color,E=b[b.length-1].headerColor,k=b[b.length-1].buttonColor,C=f(),S=Object(u.a)(C,1)[0],x=Object(r.useState)(!1),L=Object(u.a)(x,2),z=L[0],O=L[1],F=Object(r.useState)(""),I=Object(u.a)(F,2),B=I[0],T=I[1],R=Object(r.useState)(""),_=Object(u.a)(R,2),W=_[0],H=_[1],V=Object(r.useState)(""),J=Object(u.a)(V,2),G=J[0],q=J[1],Z=Object(r.useState)(""),Q=Object(u.a)(Z,2),U=Q[0],Y=Q[1],X=Object(r.useState)(""),K=Object(u.a)(X,2),$=K[0],ee=K[1],te=Object(r.useState)(""),ae=Object(u.a)(te,2),ne=ae[0],oe=ae[1],le=Object(r.useState)([]),ce=Object(u.a)(le,2),ie=ce[0],se=ce[1];768===S?(t="2vw 2vw 2vw 2vw",a="default",o="30rem",l="default",c=24):1024===S?(t="2vw 2vw 2vw 16vw",a="default",o="30rem",l="small",c=12):S<=700?(t="2vw 2vw 2vw 2vw",a="small",o="26.5rem",l="default",c=12):(t="2vw 2vw 2vw 15vw",a="small",o="26.5rem",l="default",c=12);var me={projectStyle:{backgroundColor:v,color:w,padding:t,minHeight:"100vh"},titleUnderline:{border:"0rem",height:"0.2rem",width:"5rem",marginLeft:"1.5rem",backgroundColor:E},button:{borderRadius:"10px",backgroundColor:k,color:"#ffffff",marginTop:"1rem",marginBottom:"0"},sortButton:{backgroundColor:"#1e90ff",margin:"0.5em",color:"#ffffff",fontWeight:600,border:"none"}};return n.a.createElement("section",{id:i,style:me.projectStyle},n.a.createElement("div",{className:"projectsContainer"},n.a.createElement("div",{style:{marginBottom:"2rem",marginLeft:"auto",marginRight:"auto"}},n.a.createElement("h2",{style:{fontFamily:"Poppins",color:E,textAlign:"left",marginLeft:"1.5rem",fontSize:"2.5em"}},"Projects"),n.a.createElement("hr",{style:me.titleUnderline})),n.a.createElement(P.a,{style:{marginBottom:"0.5em",marginLeft:"2.5em"}},["Everything","JavaScript","React","Node.js","Express","MySQL","MongoDB","jQuery","CommandLine"].map((function(e,t){return n.a.createElement(A.a,{key:t},n.a.createElement(j.a,{onClick:function(){return function(e){if("Everything"===e)return g(we);var t=we.filter((function(t){return t.techStack.includes(e)}));return g(t)}(e)},style:me.sortButton},e))}))),n.a.createElement(N.b,{size:a,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:3,xxl:3},pagination:{showSizeChanger:!0,pageSizeOptions:["3","6"],pageSize:"6"},dataSource:d,renderItem:function(e){return n.a.createElement(N.b.Item,null,n.a.createElement(M.a,{bordered:!1,hoverable:!0,key:e.title,title:e.title,style:{backgroundColor:"#ffffff",height:{cardHeight:o},borderRadius:"1rem"},cover:n.a.createElement("img",{alt:e.description,src:e.source,style:{width:"99%",marginLeft:"auto",marginRight:"auto"}})},n.a.createElement(P.a,null,n.a.createElement(D.a,{span:24},e.content)),n.a.createElement(P.a,null,n.a.createElement(D.a,{span:c},n.a.createElement("a",{href:e.deployed,alt:e.description,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(j.a,{style:me.button,size:l},"Website"))),n.a.createElement(D.a,{span:c},n.a.createElement(j.a,{onClick:function(){return function(e){T(e.title),se(e.techStack),H(e.content),ee(e.deployed),oe(e.github),q(e.demoImage),Y(e.demoVideo),O(!0)}(e)},style:me.button,size:l},"Expand Details")))))}}),n.a.createElement(re,{onClose:function(){O(!1)},isVisible:z,projectName:B,projectContent:W,projectImage:G,projectVideo:U,techStack:ie,deployed:$,github:ne})))}var ke=i.a.Content;var Ce=function(){return n.a.createElement(v,null,n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(T,null)),n.a.createElement(ke,null,n.a.createElement(W,{id:"/about"}),n.a.createElement(Ee,{id:"/projects"}),n.a.createElement(V,{id:"/skills"}),n.a.createElement(ee,{id:"/education"}),n.a.createElement(K,{id:"/contact"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=a(192);a.n(Se).a.load({google:{families:["Poppins:100,200,400,500","sans-serif"]}}),window.location.host.includes("localhost")||(window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_script="edge.fullstory.com/s/fs.js",window._fs_org="WAZXV",window._fs_namespace="FS"((function(e,t,a,r,n,o,l,c){a in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((l=e[a]=function(e,t,a){l.q?l.q.push([e,t,a]):l._api(e,t,a)}).q=[],(o=t.createElement(r)).async=1,o.crossOrigin="anonymous",o.src="https://"+window._fs_script,(c=t.getElementsByTagName(r)[0]).parentNode.insertBefore(o,c),l.identify=function(e,t,a){l(n,{uid:e},a),t&&l(n,t,a)},l.setUserVars=function(e,t){l(n,e,t)},l.event=function(e,t,a){l("event",{n:e,p:t},a)},l.anonymize=function(){l.identify(!1)},l.shutdown=function(){l("rec",!1)},l.restart=function(){l("rec",!0)},l.log=function(e,t){l("log",[e,t])},l.consent=function(e){l("consent",!arguments.length||e)},l.identifyAccount=function(e,t){o="account",(t=t||{}).acctId=e,l(o,t)},l.clearUserCookie=function(){},l._w={},c="XMLHttpRequest",l._w[c]=e[c],c="fetch",l._w[c]=e[c],e[c]&&(e[c]=function(){return l._w[c].apply(this,arguments)}),l._v="1.2.0")}))(window,document,window._fs_namespace,"script","user")),l.a.render(n.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a.p+"static/media/LarryAgbana-2020.4272eb8a.pdf"}},[[198,1,2]]]);
//# sourceMappingURL=main.04763ef4.chunk.js.map