(this["webpackJsonpbare-minimum-text-marker-example"]=this["webpackJsonpbare-minimum-text-marker-example"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"name":"Sol","symbol":"\u2609","location":{"x":0,"y":0,"z":0}},{"name":"Alpha Centauri","location":{"x":3.0406055032713555,"y":3.124617167938985,"z":-0.032950376278679055}},{"name":"40 Eridani","location":{"x":4.61436968235002,"y":-12.052966267965312,"z":-10.160349340372164}},{"name":"Procyon","location":{"x":6.167357614519523,"y":-9.244139601807452,"z":2.54353751238766}},{"name":"61 Cygni","location":{"x":-11.199379013073603,"y":1.50369889079294,"z":-1.1672186459077056}},{"name":"Tau Ceti","location":{"x":-0.3822404917116123,"y":-3.3240666228395703,"z":-11.425855144514129}},{"name":"Eta Cassiopeiae","location":{"x":-15.962127661230992,"y":-10.234061309873697,"z":-1.749113299840843}},{"name":"36 Ophiuchi","location":{"x":0.5556965911385073,"y":19.282499713434706,"z":2.4054343848256856}},{"name":"Luyten\'s Star","location":{"x":6.515968422386186,"y":-10.282128106809802,"z":2.1992946854884936}},{"name":"Sigma Draconis","location":{"x":-17.126343064147203,"y":-3.4660673496955794,"z":6.962023268499823}}]')},14:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),i=a.n(n),o=a(11),c=a.n(o),r=a(9),l=a(7),s=a(1),m=a(13),d=a(8),x=a(12),u=function(e){var t=e.x,a=e.y,o=e.color,c=e.fontFamily,r=e.gap,m=e.i,d=e.id,x=e.label,u=e.opacity,f=e.pointer,h=e.size,y=e.transforms,b=e.yOffset,p=Object(n.useRef)();u||(u=1),h||(h=16),f||(f="\u2022"),r||(r=h/2),b||(b=h/3);var j=Object(n.useState)(!1),O=Object(s.a)(j,2),g=O[0],v=O[1];Object(n.useEffect)((function(){var e,t,a,n=p.current.viewportElement.querySelectorAll("text:last-child"),i=p.current.getBBox(),o=Object(l.a)(n);try{for(o.s();!(e=o.n()).done;){var c=e.value;if(p.current===c)return void v(!0);var r=c.getBBox();if(0!=c.getAttribute("opacity")&&(t=i).x<(a=r).x+a.width&&t.x+t.width>a.x&&t.y<a.y+a.height&&t.y+t.height>a.y)return void v(!1)}}catch(s){o.e(s)}finally{o.f()}v(!0)}),[t,a]);var w=y.tx(t),z=y.ty(a)+b;return i.a.createElement("g",{fill:o,fontSize:h,fontFamily:c,id:"".concat(d,"-").concat(m)},i.a.createElement("text",{x:w,y:z,textAnchor:"middle","data-text-marker-pointer":!0},f),i.a.createElement("text",{x:w+r,y:z,ref:p,opacity:g?u:0,textAnchor:"left","data-text-marker-label":!0},x))},f={textMarker:function(e,t){var a=e.size,n=e.color,o=e.opacity,c=e.id,r=e.label,l=e.pointer,s=e.fontFamily,m=e.yOffset;return e.x.map((function(d,x){return i.a.createElement(u,{x:d,y:e.y[x],color:n,fontFamily:s,i:x,id:c,label:r,opacity:o,pointer:l,size:a,transforms:t,yOffset:m,key:"".concat(c,"-").concat(x)})}))}},h=a(2),y={cubeRange:20,cubeZoffset:0,dataXoffset:0,dataYoffset:0,dataZoffset:.25,paperXrange:window.innerWidth,paperYrange:window.innerHeight},b={paper:!1,xyPlane:!1,sceneEdges:{color:"#607D8B",opacity:1},crossLines:!1},p={paper:!1,xyPlane:!1,sceneEdges:!1,crossLines:!1};var j=function(){var e,t=Object(n.useState)(2),a=Object(s.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(0),u=Object(s.a)(c,2),j=u[0],O=u[1],g=Object(n.useState)(0),v=Object(s.a)(g,2),w=v[0],z=v[1],k={camTx:0,camTy:0,camTz:0,cubeRx:j,cubeRy:0,cubeRz:w,camZoom:i,canvasToViewRatio:300,defaultCamZoffset:5,defaultCamOrientation:"z-forward-x-right"},E=[Object(d.a)(k,y,b,[]).data[0]],S=Object(l.a)(x);try{for(S.s();!(e=S.n()).done;){var C=e.value,R=Object(d.a)(k,y,p,[{type:"points",x:[C.location.x],y:[C.location.y],z:[C.location.z]}]).data;E.push(Object(r.a)(Object(r.a)({},R[0]),{},{label:C.name,id:C.name,pointer:C.symbol?C.symbol:null,type:"textMarker",opacity:1,size:16,yOffset:"\u2609"!==C.symbol?16/2.8:4,color:"white"}))}}catch(T){S.e(T)}finally{S.f()}return Object(h.jsxs)("div",{style:{width:"100%",height:window.innerHeight},onWheel:function(e){var t=i+e.deltaY/100;t>0&&o(t)},onMouseMove:function(e){z(-e.clientX/3),O(e.clientY/3)},children:[Object(h.jsxs)("div",{class:"intro",children:[Object(h.jsxs)("p",{children:["This is a demo application of the"," ",Object(h.jsx)("a",{href:"https://www.npmjs.com/package/bare-minimum-text-marker",children:"bare-minimum-text-marker"})," ","plugin for"," ",Object(h.jsx)("a",{href:"https://github.com/mithi/bare-minimum-2d",children:"bare-minimum-2d"})," ","and"," ",Object(h.jsx)("a",{href:"https://github.com/mithi/bare-minimum-3d",children:"3d"}),"."]}),Object(h.jsx)("p",{children:"It allows you to place a text next to a point. The component makes sure that text does not overlap."}),Object(h.jsx)("p",{children:"This demo visualises the stellar neigborhood of the sun (\u2609)."}),Object(h.jsxs)("p",{children:["Data extracted from"," ",Object(h.jsx)("a",{href:"https://www.wikidata.org/",children:"wikidata"})," ",Object(h.jsxs)("small",{children:["(",Object(h.jsx)("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/",children:"CC0 License"}),")"]})]})]}),Object(h.jsx)(m.a,{container:{color:"black",opacity:"black",xRange:1e3,yRange:2e3},data:E,plugins:[f]})]})};c.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.34544a95.chunk.js.map