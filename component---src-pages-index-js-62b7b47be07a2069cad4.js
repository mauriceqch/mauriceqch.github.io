(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),c=a(157),o=a(195),s=a(200);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["maurice","quach","website"]}),r.a.createElement("div",{className:"d-flex flex-column text-center justify-content-center align-items-center pb-5",style:{height:"100%"}},r.a.createElement("h1",null,"Maurice Quach"),r.a.createElement("h2",null,"PhD Candidate at L2S, CNRS, CentraleSupelec"),r.a.createElement("h3",null,"Compression and Quality Assessment of Point Clouds"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("a",{href:"https://github.com/mauriceqch",style:{color:"black"}},r.a.createElement(o.a,{icon:s.a,size:"2x",className:"mr-2"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/maurice-quach",style:{color:"#0077B5"}},r.a.createElement(o.a,{icon:s.c,size:"2x",className:"mr-2"})),r.a.createElement("a",{href:"https://scholar.google.fr/citations?user=atvnc2MAAAAJ&hl=fr",style:{color:"#0077B5"}},r.a.createElement(o.a,{icon:s.b,size:"2x"})))))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(153);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{author:"Maurice Quach"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(164),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Maurice Quach website",description:"",author:"Maurice Quach"}}}}},159:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(151),l=a(205),u=a(203),d=a(204),m=function(e){var t=e.author;return i.a.createElement(l.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},i.a.createElement(u.a,null,i.a.createElement(l.a.Brand,{as:s.a,to:"/"},t),i.a.createElement(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(l.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(d.a,{className:"mr-auto"},i.a.createElement(d.a.Link,{as:s.a,to:"/publications"},"Publications")))))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""};var p=m,h=(a(162),a(163),function(e){var t=e.children;return i.a.createElement(s.b,{query:"811989370",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{author:e.site.siteMetadata.author}),i.a.createElement("div",{id:"layout-container",className:"container mt-4"},t))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-js-62b7b47be07a2069cad4.js.map