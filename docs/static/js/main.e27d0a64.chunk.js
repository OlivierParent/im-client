(this["webpackJsonpim-client"]=this["webpackJsonpim-client"]||[]).push([[0],{116:function(e,t){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(27),o=a.n(l),c=a(8),i=a(33),m=a(73),s=a.n(m),u=a(3),h=a(7),f=function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,null,[{key:"toRadians",value:function(e){return Math.PI/180*e}}]),e}(),p=function(e){var t=[{color:"green",label:"0"},{color:"white",label:"10"},{color:"white",label:"20"},{color:"white",label:"30"},{color:"white",label:"40"},{color:"orange",label:"50"},{color:"red",label:"60"},{color:"red",label:"70"}],a=270/(t.length-1),l=Object(n.useRef)(),o=40,i=0,m=0;return Object(c.e)((function(){i<=0?o=40:1e3*(t.length-1)<=i&&(o=-200),i+=o,m=f.toRadians(-135-270/(1e3*(t.length-1))*i),l.current.rotation.z=m})),r.a.createElement("mesh",e,t.map((function(e,t){var n=f.toRadians(-135-a*t);return r.a.createElement("mesh",{rotation:[0,0,n]},r.a.createElement("mesh",{position:[1,0,0]},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.25,.05,.05]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:e.color,metalness:.1,opacity:.5,roughness:.6,transparent:!0})))})),r.a.createElement("mesh",{position:[0,0,.1]},r.a.createElement("mesh",{ref:l},r.a.createElement("mesh",{position:[.5,0,0]},r.a.createElement("boxBufferGeometry",{args:[1,.05,.05],attach:"geometry"}),r.a.createElement("meshStandardMaterial",{attach:"material",metalness:.1,opacity:1,roughness:.6,transparent:!0}))),r.a.createElement("mesh",null,r.a.createElement("mesh",{rotation:[f.toRadians(90),0,0]},r.a.createElement("cylinderBufferGeometry",{args:[.1,.1,.05,32],attach:"geometry"}),r.a.createElement("meshStandardMaterial",{attach:"material",opacity:1,transparent:!0})))),r.a.createElement("mesh",{position:[0,0,-.1],rotation:[f.toRadians(90),0,0]},r.a.createElement("cylinderBufferGeometry",{args:[1.2,1.2,.05,64],attach:"geometry"}),r.a.createElement("meshStandardMaterial",{attach:"material",opacity:.25,transparent:!0})))},E=(a(9),a(76),function(){var e=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:.9}),r.a.createElement("directionalLight",{ref:e,position:[10,10,5],intensity:1}),";",r.a.createElement("pointLight",{intensity:1.12,position:[0,0,0]}))}),d=(a(83),a(129),function(){s()("http://localhost:".concat(3001));return r.a.createElement(c.a,null,r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement(i.a,{enablePan:!0,enableZoom:!0,enableRotate:!0}))});o.a.render(r.a.createElement(d,null),document.getElementById("root"))},76:function(e,t,a){e.exports=a.p+"static/media/glTF.ce019e05.glb"},83:function(e,t,a){e.exports=a.p+"static/media/suzanne.fdd60495.glb"},87:function(e,t,a){e.exports=a(130)}},[[87,1,2]]]);
//# sourceMappingURL=main.e27d0a64.chunk.js.map