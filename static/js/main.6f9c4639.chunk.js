(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,s,t){},27:function(e,s,t){},47:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(16),n=t.n(a),i=(t(24),t(6)),r=t(7),l=t(9),j=t(8),o=t(13),d=t(17),h=t.n(d),b=(t(27),t(18)),m=t(5),O=t.n(m),u=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,c=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"cobweb",color:["#ff0000"],bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:t})}),Object(u.jsx)(O.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[c,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(u.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("div",{className:"twelve columns",children:Object(u.jsx)("ul",{className:"social-links",children:e})})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:s})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[c,Object(u.jsx)("br",{}),a," ",n,", ",i]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:l})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:j,className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(c.Component),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(u.jsx)("em",{children:s.name})]},s.name)})),n=this.props.data.skills2.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(u.jsx)("em",{children:s.name})]},s.name)})),i=this.props.data.skills3.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:s}),Object(u.jsxs)("div",{className:"bars",children:[Object(u.jsx)("h2",{children:Object(u.jsx)("span",{children:"Language"})}),Object(u.jsx)("ul",{className:"skills",children:a}),Object(u.jsx)("h2",{children:Object(u.jsx)("span",{children:"Tools"})}),Object(u.jsx)("ul",{className:"skills",children:n}),Object(u.jsx)("h2",{children:Object(u.jsx)("span",{children:"Design"})}),Object(u.jsx)("ul",{className:"skills",children:i})]})]})]})})]})}}]),t}(c.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:i})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"eight columns",children:[Object(u.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submit",children:"Submit"}),Object(u.jsx)("span",{id:"image-loader",children:Object(u.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(u.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(u.jsxs)("div",{id:"message-success",children:[Object(u.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(u.jsx)("br",{})]})]})}),Object(u.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(u.jsx)("aside",{className:"four columns footer-widgets",children:Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Address and Phone"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{}),s," ",Object(u.jsx)("br",{}),t,", ",c," ",a,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:n})]})]})})})]})]})}}]),t}(c.Component),g=t(19),w=t.n(g),k=0,y=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns portfolio-item",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(w.a,{alt:e.title,src:s}),Object(u.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},k++)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"Check Out Some of My Works."}),Object(u.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(c.Component),C=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.resume}),Object(u.jsx)(y,{data:this.state.resumeData.portfolio}),Object(u.jsx)(N,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(c.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(C,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.6f9c4639.chunk.js.map