(this["webpackJsonppie-website"]=this["webpackJsonppie-website"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(7),o=n.n(a),c=(n(12),n(2)),l=n(3),r=n(5),u=n(4),d=(n(13),n(14),n(0)),p=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).isValidEmail=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},i.submitRequest=function(e,t,n,s,a,o,c){e.preventDefault(),i.isValidEmail(n.value)?(t.value="",n.value="",s.value="",a.value="",o.value="",c.value="",i.props.showPageFxn(e,"SubmittedJoinPage")):(window.alert("You must enter a valid email"),n.focus())},i.state={},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"JoinPage",children:[Object(d.jsx)("p",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"JoinPageTopText",children:"Join Partners In Excellence"}),Object(d.jsxs)("form",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"JoinForm",type:"submit",onSubmit:function(t){return e.submitRequest(t,document.getElementById("JoinName"),document.getElementById("JoinEmail"),document.getElementById("JoinPhoneNumber"),document.getElementById("JoinDescription"),document.getElementById("JoinWebsiteUrl"),document.getElementById("JoinMentorContact"))},children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{id:"JoinName",name:"JoinName",type:"text",placeholder:"John Doe",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{id:"JoinEmail",name:"JoinEmail",type:"text",placeholder:"johndoe@email.com",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Phone Number (optional):"}),Object(d.jsx)("input",{id:"JoinPhoneNumber",name:"JoinPhoneNumber",type:"tel",placeholder:"555-555-5555",pattern:"^[0-9(). \\-]+$",title:"Invalid Phone Number",style:this.props.applyStylesFxn(24,"Nunito Sans")}),Object(d.jsx)("label",{children:"Description:"}),Object(d.jsx)("textarea",{id:"JoinDescription",name:"JoinDescription",type:"text",placeholder:"Please provide a description of you or your company and how you would contribute to the PIE. Users will be able to see this description...",cols:"4",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Website URL:"}),Object(d.jsx)("input",{id:"JoinWebsiteUrl",name:"JoinWebsiteUrl",type:"text",placeholder:"www.mysite.com",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Mentor Contact (Optional):"}),Object(d.jsx)("input",{id:"JoinMentorContact",name:"JoinMentorContact",type:"text",placeholder:"johndoe@email.com, 555-555-5555, etc",style:this.props.applyStylesFxn(24,"Nunito Sans")}),Object(d.jsx)("input",{style:this.props.applyStylesFxn(24,"Nunito Sans"),type:"submit",id:"submitRequest"})]})]})}}]),n}(i.Component),m=(n(16),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"LandingPage",children:[Object(d.jsx)("p",{style:this.props.applyStylesFxn(48,"Nunito Sans"),children:"Welcome To Partners In Excellence, but you can call us PIE. PIE is a collaborative effort between people who have any disability and supportive partners who strive to make their community inclusive for all. PIE was created by the Adaptive Sports & Fitness Program and the Office of Services for Students with Disabilities at the University of Michigan. Through the use of our growing number of Partners, we strive to improve Accessibility for everyone."}),Object(d.jsx)("button",{className:"viewPartners",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"PartnersPage")},children:"VIEW OUR PARTNERS"})]})}}]),n}(i.Component)),h=(n(17),[{name:"Michigan Marching Band",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",websiteUrl:"https://www.michiganmarchingband.com/",imgSrc:"https://images.squarespace-cdn.com/content/v1/5acd35095cfd7920789ec760/1591734027921-79LSZES0QBA85FXMF5SP/ke17ZwdGBToddI8pDm48kMnHRrpWSlSCB9XabjgyantZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz4FkPJA585QYBg9EjPvRpkIxxB_SdP_xzqtxyFDizV5aadH9FfX0OATazAJGndjd8/addison-hymer.JPG"},{name:"Michigan SSD",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",websiteUrl:"https://ssd.umich.edu/",imgSrc:"https://ssd.umich.edu/files/ssd/styles/crop_640x480/public/m_jump.jpg?itok=YkvT74bL"},{name:"University Of Michigan Adaptive Sports",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",websiteUrl:"https://ssd.umich.edu/",imgSrc:"https://uploads-ssl.webflow.com/5fa06d1f7a2d25ef7aca7f29/5fa070ce347530d860a7cedc_IMG_2668.jpeg"},{name:"Jane Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",websiteUrl:"https://www.google.com/",imgSrc:"https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=6&m=1129638608&s=612x612&w=0&h=8OhKQCq_elLsW_PAWA4n8pzQy3mlkf5a_ztp2Nbv8Y8="},{name:"Jill Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",websiteUrl:"https://www.google.com/",imgSrc:"https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"}]),b=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).shortenedDescription=function(e,t){return t.length<120?t+"...":t.length<220?t.substring(0,t.length)+"...":e.length<25?t.substring(0,210)+"...":t.substring(0,110)+"..."},i.showSidePanel=function(e,t){e.preventDefault(),i.setState({showSidePanel:!0,sidePanelPartner:t})},i.closePanel=function(e){e.preventDefault(),i.setState({showSidePanel:!1})},i.removeSearchItem=function(e,t){e.preventDefault(),t.value="",i.setState({searchTerm:""})},i.submitQuestion=function(e,t){e.preventDefault(),console.log(t.value),i.setState({searchTerm:t.value})},i.state={showSidePanel:!1,selectedIdx:0,searchTerm:"",sidePanelPartner:{}},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"PartnersPage",children:[Object(d.jsxs)("div",{className:"PartnersPageContent",children:[Object(d.jsxs)("div",{className:"SearchContainer",children:[Object(d.jsx)("button",{className:"SearchButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){return e.submitQuestion(t,document.getElementById("SearchPartner"))},children:"Search"}),Object(d.jsxs)("div",{className:"SearchBarContainer",children:[Object(d.jsx)("form",{type:"submit",onSubmit:function(t){return e.submitQuestion(t,document.getElementById("SearchPartner"))},children:Object(d.jsx)("input",{id:"SearchPartner",name:"SearchPartner",type:"text",placeholder:"Search...",style:this.props.applyStylesFxn(24,"Nunito Sans")})}),Object(d.jsx)("button",{className:"SearchClose",onClick:function(t){return e.removeSearchItem(t,document.getElementById("SearchPartner"))},children:"X"})]})]}),Object(d.jsx)("div",{className:"PartnersPageList",children:h.filter((function(t){return!e.state.searchTerm.length||t.name.toLowerCase().includes(e.state.searchTerm.toLowerCase())})).map((function(t,n){return n%2===0?Object(d.jsxs)("button",{className:"PartnerComponent Left",onClick:function(n){return e.showSidePanel(n,t)},children:[Object(d.jsx)("img",{className:"PartnerImage",src:t.imgSrc,alt:"PIE Partner"}),Object(d.jsxs)("div",{className:"PartnerInfo",children:[Object(d.jsx)("p",{style:e.props.applyStylesFxn(48,"IBM Plex Sans Condensed"),className:"PartnerName",children:t.name}),Object(d.jsx)("p",{style:e.props.applyStylesFxn(24,"Nunito Sans"),className:"PartnerDescription",children:e.shortenedDescription(t.name,t.description)})]})]},n):Object(d.jsxs)("button",{style:e.props.applyStylesFxn(24,"Nunito Sans"),className:"PartnerComponent Right",onClick:function(n){return e.showSidePanel(n,t)},children:[Object(d.jsxs)("div",{className:"PartnerInfo",children:[Object(d.jsx)("p",{style:e.props.applyStylesFxn(48,"IBM Plex Sans Condensed"),className:"PartnerName",children:t.name}),Object(d.jsx)("p",{style:e.props.applyStylesFxn(24,"Nunito Sans"),className:"PartnerDescription",children:e.shortenedDescription(t.name,t.description)})]}),Object(d.jsx)("img",{className:"PartnerImage",src:t.imgSrc,alt:"PIE Partner"})]},n)}))})]}),this.state.showSidePanel?Object(d.jsxs)("div",{id:"PartnerSidePanel",children:[Object(d.jsx)("button",{id:"PartnerSideClose",onClick:this.closePanel,children:"X"}),Object(d.jsx)("img",{id:"PartnerSideImage",src:this.state.sidePanelPartner.imgSrc,alt:"PIE Partner"}),Object(d.jsxs)("div",{id:"PartnerSideInfo",children:[Object(d.jsx)("p",{style:this.props.applyStylesFxn(48,"IBM Plex Sans Condensed"),id:"PartnerSideName",children:this.state.sidePanelPartner.name}),Object(d.jsx)("p",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"PartnerSideDescription",children:this.state.sidePanelPartner.description}),Object(d.jsx)("a",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"PartnerSideViewWebsite",href:this.state.sidePanelPartner.websiteUrl,target:"_blank",children:"View Website"})]})]}):Object(d.jsx)("div",{})]})}}]),n}(i.Component),y=(n(18),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).isValidEmail=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},i.submitQuestion=function(e,t,n,s,a){e.preventDefault(),i.isValidEmail(n.value)?(t.value="",n.value="",s.value="",a.value="",i.props.showPageFxn(e,"SubmittedContactUsPage")):(window.alert("You must enter a valid email"),n.focus())},i.state={},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"ContactPage",children:[Object(d.jsx)("p",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"QuestionsText",children:"Questions? We would love to hear them."}),Object(d.jsxs)("form",{style:this.props.applyStylesFxn(24,"Nunito Sans"),id:"ContactForm",type:"submit",onSubmit:function(t){return e.submitQuestion(t,document.getElementById("ContactName"),document.getElementById("ContactEmail"),document.getElementById("ContactPhoneNumber"),document.getElementById("ContactDescription"))},children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{id:"ContactName",name:"ContactName",type:"text",placeholder:"John Doe",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{id:"ContactEmail",name:"ContactEmail",type:"text",placeholder:"johndoe@email.com",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("label",{children:"Phone Number (optional):"}),Object(d.jsx)("input",{id:"ContactPhoneNumber",name:"ContactPhoneNumber",type:"tel",placeholder:"555-555-5555",pattern:"^[0-9(). \\-]+$",title:"Invalid Phone Number",style:this.props.applyStylesFxn(24,"Nunito Sans")}),Object(d.jsx)("label",{children:"Comment or Question:"}),Object(d.jsx)("textarea",{id:"ContactDescription",name:"ContactDescription",type:"text",placeholder:"Comment or question...",cols:"4",style:this.props.applyStylesFxn(24,"Nunito Sans"),required:!0}),Object(d.jsx)("input",{style:this.props.applyStylesFxn(24,"Nunito Sans"),type:"submit",id:"submitQuestion"})]})]})}}]),n}(i.Component)),j=(n(19),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Header",children:[Object(d.jsxs)("button",{className:"homePage",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"LandingPage")},children:[Object(d.jsx)("img",{className:"michiganLogo",src:"https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/Block_M-Hex.png",alt:"University of Michigan Logo"}),Object(d.jsx)("h1",{className:"title",children:"|"}),Object(d.jsx)("h1",{className:"title",children:"PIE"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"partnersButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"PartnersPage")},children:"Our Partners"}),Object(d.jsx)("button",{className:"contactButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"ContactPage")},children:"Contact Us"})]}),Object(d.jsx)("div",{className:"joinWrapper",children:Object(d.jsx)("button",{className:"joinButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"JoinPage")},children:"Join PIE"})})]})}}]),n}(i.Component)),x=(n(20),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"SubmittedJoinPage",children:[Object(d.jsx)("h1",{style:this.props.applyStylesFxn(40,"Nunito Sans"),children:"Thank you for your interest in becoming a piece of the PIE!"}),Object(d.jsx)("p",{style:this.props.applyStylesFxn(24,"Nunito Sans"),children:"Your form has been submitted. We will be in touch with you as soon as we can!"}),Object(d.jsx)("button",{className:"OKButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"LandingPage")},children:"OK"})]})}}]),n}(i.Component)),g=(n(21),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"SubmittedContactUsPage",children:[Object(d.jsx)("h1",{style:this.props.applyStylesFxn(40,"Nunito Sans"),children:"Thank you for your interest in PIE!"}),Object(d.jsx)("p",{style:this.props.applyStylesFxn(24,"Nunito Sans"),children:"We have received your contact information. We will be in touch with you as soon as we can!"}),Object(d.jsx)("button",{className:"OKButton",style:this.props.applyStylesFxn(24,"Nunito Sans"),onClick:function(t){e.props.showPageFxn(t,"LandingPage")},children:"OK"})]})}}]),n}(i.Component)),S=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).applyStyles=function(e,t){return{"font-family":i.state.isDyslexicFont?"OpenDyslexic2":t,"font-size":i.state.fontMultiplier*e+"px"}},i.minimizeAccessibility=function(e){e.preventDefault(),console.log("minimizing access menu"),i.setState({minimizedAccessMenu:!0})},i.componentDidMount=function(){window.scrollTo(0,0)},i.showPage=function(e,t){e.preventDefault(),console.log("switching to "+t),i.setState({curPage:t}),window.scrollTo(0,0)},i.showAccessibilityMenu=function(e){console.log("open accessibility menu"),e.preventDefault(),i.setState({showAccessMenu:!0,minimizedAccessMenu:!1})},i.hideAccessibilityMenu=function(e){console.log("hide accessibility menu"),e.preventDefault(),i.setState({showAccessMenu:!1})},i.increaseFont=function(e){e.preventDefault(),console.log("+font"),i.state.fontLevel>=4?i.setState({fontMultiplier:1,fontLevel:1}):i.setState({fontMultiplier:.15+i.state.fontMultiplier,fontLevel:1+i.state.fontLevel})},i.toggleDyslexic=function(e){e.preventDefault(),console.log("toggle dyslexic"),i.setState({isDyslexicFont:!i.state.isDyslexicFont})},i.state={counter:0,curPage:"LandingPage",showAccessMenu:!1,minimizedAccessMenu:!1,isDyslexicFont:!1,fontMultiplier:1,fontLevel:1},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:this.state.isDyslexicFont?"App dyslexic":"App notDyslexic",children:[Object(d.jsx)(j,{showPageFxn:this.showPage,applyStylesFxn:this.applyStyles}),Object(d.jsx)("div",{id:"pageContent",children:function(){switch(e.state.curPage){case"LandingPage":return Object(d.jsx)(m,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles});case"PartnersPage":return Object(d.jsx)(b,{applyStylesFxn:e.applyStyles});case"JoinPage":return Object(d.jsx)(p,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles});case"ContactPage":return Object(d.jsx)(y,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles});case"SubmittedJoinPage":return Object(d.jsx)(x,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles});case"SubmittedContactUsPage":return Object(d.jsx)(g,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles});default:return Object(d.jsx)(m,{showPageFxn:e.showPage,applyStylesFxn:e.applyStyles})}}()}),this.state.showAccessMenu?Object(d.jsxs)("div",{id:"accessibilityContent",children:[Object(d.jsx)("div",{id:"accessibilityText",style:{"font-family":this.state.isDyslexicFont?"OpenDyslexic2":"Nunito Sans"},children:"Accessibility Menu"}),Object(d.jsxs)("div",{id:"accessibilityBtnSection",children:[Object(d.jsxs)("button",{className:"accessibilityBtn",id:"increaseFontBtn",style:{"font-family":this.state.isDyslexicFont?"OpenDyslexic2":"Nunito Sans"},onClick:this.increaseFont,children:["Increase Font",Object(d.jsxs)("div",{className:"toggleContainer",children:[Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":1===this.state.fontLevel?"#131516":"#c4c4c4"}}),Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":2===this.state.fontLevel?"#131516":"#c4c4c4"}}),Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":3===this.state.fontLevel?"#131516":"#c4c4c4"}}),Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":4===this.state.fontLevel?"#131516":"#c4c4c4"}})]})]}),Object(d.jsxs)("button",{className:"accessibilityBtn",id:"dyslexiaFont",onClick:this.toggleDyslexic,children:["Dyslexic Font",Object(d.jsxs)("div",{className:"toggleContainer",children:[Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":this.state.isDyslexicFont?"#c4c4c4":"#131516"}}),Object(d.jsx)("div",{className:"toggleIndicator",style:{"background-color":this.state.isDyslexicFont?"#131516":"#c4c4c4"}})]})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{id:"hideAccessBtn",style:{"font-family":this.state.isDyslexicFont?"OpenDyslexic2":"Nunito Sans"},onClick:this.hideAccessibilityMenu,children:"Close"})})]}):Object(d.jsx)("div",{id:"closedAccessibilityContent",children:this.state.minimizedAccessMenu?Object(d.jsx)("div",{children:Object(d.jsx)("button",{id:"showAccessBtnSmall",style:{"font-family":this.state.isDyslexicFont?"OpenDyslexic2":"Nunito Sans"},onClick:this.showAccessibilityMenu,children:"Accessibility Menu"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{id:"showAccessBtnLarge",style:{"font-family":this.state.isDyslexicFont?"OpenDyslexic2":"Nunito Sans"},onClick:this.showAccessibilityMenu,children:"Accessibility Menu"}),Object(d.jsx)("button",{id:"minimizeAccessButton",onClick:this.minimizeAccessibility,children:"-"})]})})]})}}]),n}(i.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};n.p;o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),f()}],[[22,1,2]]]);
//# sourceMappingURL=main.a950608b.chunk.js.map