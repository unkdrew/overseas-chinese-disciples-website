(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(189),i=a(184),c=function(e){var t=e.gathering;return r.a.createElement("div",null,r.a.createElement(i.a,{to:t.frontmatter.path},t.frontmatter.title," (",t.frontmatter.date,")"))};a.d(t,"pageQuery",function(){return o});t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=t.filter(function(e){return!!e.node.frontmatter.date}).filter(function(e){return e.node.frontmatter.addToIndex}).filter(function(e){return new Date<Date.parse(e.node.frontmatter.date)}).map(function(e){return r.a.createElement("li",{key:e.node.id},r.a.createElement(c,{key:e.node.id,gathering:e.node}))}),n=t.filter(function(e){return!!e.node.frontmatter.date}).filter(function(e){return e.node.frontmatter.addToIndex}).filter(function(e){return new Date>Date.parse(e.node.frontmatter.date)}).map(function(e){return r.a.createElement("li",{key:e.node.id},r.a.createElement(c,{key:e.node.id,gathering:e.node}))});return r.a.createElement(l.a,{fullMenu:!0},r.a.createElement("article",{id:"main"},r.a.createElement("header",null,r.a.createElement("h2",null,"Gatherings")),r.a.createElement("section",{className:"wrapper style5"},r.a.createElement("div",{className:"inner"},r.a.createElement("h3",null,"Upcoming Gatherings"),r.a.createElement("ul",null,a),r.a.createElement("hr",null),r.a.createElement("h3",null,"Previous Gatherings"),r.a.createElement("ul",null,n)))))};var o="3557155356"},184:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=a(57),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.navigate});a(185);var u=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},185:function(e,t,a){var n;e.exports=(n=a(187))&&n.default||n},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Overseas Chinese Homecoming Gathering"}}}}},187:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=a(82),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},188:function(e,t){e.exports={siteTitle:"Overseas Chinese Homecoming Gathering",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0abab5",manifestThemeColor:"#0abab5",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/overseas-chinese-homecoming-gathering-website",heading:"Overseas Chinese Homecoming Gathering",subHeading:"It’s the fullness of time, overseas Chinese come home!",socialLinks:[{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/"}]}},189:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(186),i=a(0),c=a.n(i),o=a(12),u=a.n(o),m=a(190),s=a.n(m),d=a(184),f=(a(191),a(35),a(188)),h=a.n(f);function E(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("ul",{className:"icons"},h.a.socialLinks.map(function(e){var t=e.icon,a=e.name,n=e.url;return c.a.createElement("li",{key:n},c.a.createElement("a",{href:n,className:"icon brands "+t},c.a.createElement("span",{className:"label"},a)))})),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"&copy North American Chinese Homecoming Gathering Servant Team (NACC)"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}a(120),a(121);var p=a(29);function g(e){var t=e.onMenuToggle,a=void 0===t?function(){}:t;return c.a.createElement("nav",{id:"nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"special"},c.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),a()},className:"menuToggle"},c.a.createElement("span",null,"Menu")),c.a.createElement("div",{id:"menu"},c.a.createElement(p.Location,null,function(e){var t=e.location.pathname.includes("zh-Hans")?"/zh-Hans":"/";return c.a.createElement("select",{id:"langSelect",value:t,onChange:function(e){e.preventDefault(),Object(d.c)(document.getElementById("langSelect").value)}},c.a.createElement("option",{key:"en",value:"/"},"English"),c.a.createElement("option",{key:"zh-Hans",value:"/zh-Hans"},"简体中文"))}),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.a,{to:"/",className:"col-6"},"Home")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/about",className:"col-6"},"About Us")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/gatherings",className:"col-6"},"Gatherings")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/sharings",className:"col-6"},"Sharings")),c.a.createElement("li",null,c.a.createElement(d.a,{to:"/giving",className:"col-6"},"Giving")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.flickr.com/photos/182245855@N04/albums",target:"_blank",rel:"noopener noreferrer",className:"col-6"},"Gallery")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live",target:"_blank",rel:"noopener noreferrer",className:"col-6"},"Live Stream"))),c.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),a()},href:"#menu"},"")))))}function v(e){var t=e.fullMenu,a=Object(i.useState)(!1),n=a[0],r=a[1];return c.a.createElement("header",{id:"header",className:t?"":"alt"},c.a.createElement("h1",null,c.a.createElement(d.a,{to:"/"},"OCHG")),c.a.createElement("div",{className:n?"is-menu-visible":" "},c.a.createElement(g,{onMenuToggle:function(){return r(!n)}})))}var b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props,t=e.children,a=e.fullMenu,n=this.state.isPreloaded;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},c.a.createElement("div",{id:"page-wrapper"},c.a.createElement(v,{fullMenu:a}),t,c.a.createElement(E,null))))},data:l})},t}(i.Component);b.propTypes={children:u.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-gatherings-js-8f865d3ddc4260c12a74.js.map