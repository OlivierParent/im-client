(this["webpackJsonpim-client"]=this["webpackJsonpim-client"]||[]).push([[0],{152:function(e,t,a){e.exports=a.p+"static/media/glTF.ce019e05.glb"},155:function(e,t,a){e.exports=a(334)},333:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(45),l=a.n(o),c=a(8),i=a(18),u=a(20),s=a(105),m=a(9),g=function(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),o=(a[0],a[1]),l=Object(r.useState)(65280),i=Object(m.a)(l,2),s=i[0],g=i[1];return Object(c.f)((function(){})),n.a.createElement("group",{onClick:function(){return g(16711680)},onDoubleClick:function(){return g(255)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)}},n.a.createElement("mesh",null,n.a.createElement("boxBufferGeometry",{args:[1,.5,.01]}),n.a.createElement("meshMatcapMaterial",{color:s})),n.a.createElement(u.g,{color:"white",fontSize:.2,position:[0,0,.01]},"Click Me!"))},h=a(0),p=a(35),f=function(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(r.useState)(!1),s=Object(m.a)(i,2),g=s[0],f=s[1],b=Object(r.useState)(16711680),E=Object(m.a)(b,2),d=E[0],O=E[1],j=Object(p.b)({opacity:o?1:.5,scale:o?[1.5,1.25]:[1,1],rotation:g?[h.MathUtils.degToRad(-90),0,0]:[0,0,0]}),y=j.opacity,L=j.rotation,v=j.scale;return Object(c.f)((function(){})),n.a.createElement(p.a.group,Object.assign({},e,{onClick:function(){return f(!g)},onDoubleClick:function(){return O(d>>8)},onPointerOut:function(){return l(!1)},onPointerOver:function(){return l(!0)},rotation:L}),n.a.createElement(p.a.mesh,{scale:v},n.a.createElement("planeBufferGeometry",{args:[1,.5]}),n.a.createElement(p.a.meshMatcapMaterial,{opacity:y,color:d,transparent:!0})),n.a.createElement(u.g,{color:"white",fontSize:.2,position:[0,0,.01]},"Click Me!"))},b=a(2),E=a(6),d=function(){function e(t){Object(b.a)(this,e),this.radius=t}return Object(E.a)(e,[{key:"getCoordinates",value:function(e){var t=h.MathUtils.degToRad(e);return{x:Math.cos(t)*this.radius,y:Math.sin(t)*this.radius}}}]),e}(),O=function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),i=h.MathUtils.degToRad(90);return Object(c.f)((function(){var e=new Date;a.current.rotation.z=h.MathUtils.degToRad(-6*e.getSeconds()),o.current.rotation.z=h.MathUtils.degToRad(-6*e.getMinutes()),l.current.rotation.z=h.MathUtils.degToRad(-30*(e.getHours()+e.getMinutes()/60))})),n.a.createElement("group",{ref:t},n.a.createElement("group",null,n.a.createElement(u.g,{color:"black",position:[0,-.25,.01]},"Arteveldehogeschool"),Array(12).fill(null).map((function(e,t){var a=30*t+90,r=new d(.75).getCoordinates(a),o=r.x,l=r.y;return n.a.createElement(u.g,{color:"black",position:[o,l,.01]},(12-t).toString())}))),n.a.createElement("group",Object.assign({},e,{rotation:[0,0,i]}),n.a.createElement("mesh",{receiveShadow:!0},n.a.createElement("circleBufferGeometry",{args:[1.2,36]}),n.a.createElement("meshStandardMaterial",{opacity:.25,transparent:!0})),n.a.createElement("group",{position:[0,0,.1]},n.a.createElement("group",{ref:l},n.a.createElement("mesh",{castShadow:!0,position:[.3,0,0]},n.a.createElement("boxBufferGeometry",{args:[.6,.06,.06]}),n.a.createElement("meshStandardMaterial",null))),n.a.createElement("group",{ref:o},n.a.createElement("mesh",{castShadow:!0,position:[.4,0,0]},n.a.createElement("boxBufferGeometry",{args:[.8,.04,.04]}),n.a.createElement("meshStandardMaterial",null))),n.a.createElement("group",{ref:a},n.a.createElement("mesh",{castShadow:!0,position:[.5,0,0]},n.a.createElement("boxBufferGeometry",{args:[1,.02,.02]}),n.a.createElement("meshStandardMaterial",{color:13421568})))),Array(60).fill(null).map((function(e,t){var a=h.MathUtils.degToRad(6*t);return n.a.createElement("group",{key:t,rotation:[0,0,a]},n.a.createElement("mesh",{position:[1,0,0]},n.a.createElement("boxBufferGeometry",{args:[t%5?.15:.25,t%5?.01:.03,.015]}),n.a.createElement("meshStandardMaterial",{color:0===t?255:t%5?16777215:16711680,metalness:.1,opacity:.5,roughness:.6,transparent:!0})))})),n.a.createElement("mesh",{castShadow:!0,rotation:[h.MathUtils.degToRad(-90),0,0]},n.a.createElement("cylinderBufferGeometry",{args:[.1,.05,.1,36]}),n.a.createElement("meshStandardMaterial",null))))},j=function(e){var t=["#f00","#ff0","#0f0","#0ff","#00f","#f0f"],a=t[Math.floor(Math.random()*t.length)],o=Object(r.useRef)(),l=Object(r.useState)(!0),c=Object(m.a)(l,2),i=c[0],u=c[1],s=Object(p.b)({opacity:i?.9:.5}).opacity,g=Object(p.b)({position:i?[0,0,0]:[4*(2*Math.random()-1),4*(2*Math.random()-1),0]}).position;return console.log(g),n.a.createElement(p.a.mesh,Object.assign({},e,{onClick:function(){return u(!i)},position:g}),n.a.createElement("boxBufferGeometry",{args:[1,1,1]}),n.a.createElement(p.a.meshMatcapMaterial,{color:a,opacity:s,ref:o,transparent:!0}))},y=function(e){var t=[{color:"green",label:"0",ref:Object(r.useRef)(),value:0},{color:"white",label:"10",ref:Object(r.useRef)(),value:1e3},{color:"white",label:"20",ref:Object(r.useRef)(),value:2e3},{color:"white",label:"30",ref:Object(r.useRef)(),value:3e3},{color:"white",label:"40",ref:Object(r.useRef)(),value:4e3},{color:"white",label:"50",ref:Object(r.useRef)(),value:5e3},{color:"orange",label:"60",ref:Object(r.useRef)(),value:6e3},{color:"red",label:"70",ref:Object(r.useRef)(),value:7e3},{color:"red",label:"80",ref:Object(r.useRef)(),value:8e3}],a=270/(t.length-1),o=h.MathUtils.degToRad(-135),l=1e3*(t.length-1),i=270/l,s=Object(r.useRef)(),m=0,g=0,p=60;return Object(c.f)((function(){g<=0?p=60:l<=g&&(p=-250),g+=p,m=h.MathUtils.degToRad(-i*g),s.current.rotation.z=m,t.forEach((function(e,t){e.ref.current.children[0].material.color.setColorName(e.value<=g?"blue":e.color)}))})),n.a.createElement("group",Object.assign({},e,{rotation:[0,0,o]}),n.a.createElement(u.b,{args:[1.2,62],position:[0,0,0],receiveShadow:!0},n.a.createElement("meshStandardMaterial",{opacity:.25,transparent:!0})),t.map((function(e,t){return n.a.createElement("group",{key:t,ref:e.ref,rotation:[0,0,h.MathUtils.degToRad(-a*t)]},n.a.createElement(u.a,{args:[.25,.05,.02],position:[1,0,.01]},n.a.createElement("meshStandardMaterial",{color:e.color,metalness:.1,opacity:.5,roughness:.6,transparent:!0})))})),n.a.createElement("group",{position:[0,0,.05]},n.a.createElement("group",{ref:s},n.a.createElement("group",{rotation:[0,0,h.MathUtils.degToRad(-90)]},n.a.createElement(u.c,{args:[.03,1,4],castShadow:!0,position:[0,.5,0]},n.a.createElement("meshStandardMaterial",{color:"orange",metalness:.1,roughness:.6})))),n.a.createElement(u.d,{args:[.1,.05,.1,36],castShadow:!0,rotation:[h.MathUtils.degToRad(-90),0,0]},n.a.createElement("meshStandardMaterial",null))))},L=a(152),v=a.n(L),S=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(u.h)(v.a,!0),i=Object(r.useRef)();return Object(c.f)((function(){i.current.rotation.y+=.025*(a?1:-1)})),n.a.createElement("primitive",{ref:i,object:l.scene,onClick:function(){return o(!a)},position:[0,0,0]})},M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ambientLight",{intensity:.1}),n.a.createElement("directionalLight",{castShadow:!0,color:16777215,intensity:1,position:[2,2,1]}),n.a.createElement("hemisphereLight",null),n.a.createElement("pointLight",{color:16737792,intensity:.5,position:[0,0,4]}),n.a.createElement("spotLight",{color:16773120,position:[0,4,4],intensity:1}))},C=function(){var e=Object(c.h)(),t=Object(c.h)(),a=Object(c.h)(),r=Object(c.h)(),o=Object(i.c)("Show helpers",{group:"Light Helpers",type:"boolean",value:!0}),l=Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),u=Object(i.c)("Color",{group:"Point Light",type:"color",value:"#ffcc77"}),s=Object(i.c)("Position XZ",{group:"Point Light",type:"xypad",distance:5,value:{x:-4,y:-4}}),m=Object(i.c)("Color",{group:"Spot Light",type:"color",value:"#ffcc77"});return n.a.createElement(n.a.Fragment,null,n.a.createElement("ambientLight",{intensity:l}),n.a.createElement("directionalLight",{castShadow:!0,color:16777215,intensity:1,position:[2,2,1],ref:e}),n.a.createElement("hemisphereLight",{ref:t}),n.a.createElement("pointLight",{color:u,intensity:.5,position:[s.x,0,s.y],ref:a}),n.a.createElement("spotLight",{color:m,position:[0,4,4],intensity:1,ref:r}),o&&n.a.createElement(n.a.Fragment,null,e.current&&n.a.createElement("directionalLightHelper",{args:[e.current,.5]}),t.current&&n.a.createElement("hemisphereLightHelper",{args:[t.current,.5]}),a.current&&n.a.createElement("pointLightHelper",{args:[a.current,.5]}),r.current&&n.a.createElement("spotLightHelper",{args:[r.current]})))},R=function(){return n.a.createElement("group",null,n.a.createElement("ambientLight",{intensity:.1}),n.a.createElement("directionalLight",{color:"hsl(0, 0%, 70%)",intensity:.4,position:[0,2,4]}),n.a.createElement("directionalLight",{color:"hsl(210, 100%, 70%)",position:[-4,0,0]}),n.a.createElement("directionalLight",{color:"hsl(30, 100%, 70%)",position:[4,0,0]}),"s")},x=function(){var e=Object(c.h)(),t=Object(c.h)(),a=Object(c.h)(),r=Object(i.c)("Show helpers",{group:"Light Helpers",type:"boolean",value:!0}),o=Object(i.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),l=Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),u=Object(i.c)("Color",{group:"Front Light",type:"color",value:"hsl(0, 0%, 70%)"}),s=Object(i.c)("Intensity",{group:"Front Light",type:"number",value:.4,min:0,max:1}),m=Object(i.c)("Color",{group:"Left Light",type:"color",value:"hsl(210, 100%, 70%)"}),g=Object(i.c)("Intensity",{group:"Left Light",type:"number",value:1,min:0,max:1}),h=Object(i.c)("Color",{group:"Right Light",type:"color",value:"hsl(30, 100%, 70%)"}),p=Object(i.c)("Intensity",{group:"Right Light",type:"number",value:1,min:0,max:1});return n.a.createElement("group",null,n.a.createElement("ambientLight",{color:o,intensity:l}),n.a.createElement("directionalLight",{color:u,intensity:s,position:[0,2,4],ref:e}),n.a.createElement("directionalLight",{color:m,intensity:g,position:[-4,0,0],ref:t}),n.a.createElement("directionalLight",{color:h,intensity:p,position:[4,0,0],ref:a}),r&&n.a.createElement(n.a.Fragment,null,e.current&&n.a.createElement("directionalLightHelper",{args:[e.current,.5]}),t.current&&n.a.createElement("directionalLightHelper",{args:[t.current,.5]}),a.current&&n.a.createElement("directionalLightHelper",{args:[a.current,.5]})))},T=function(){return n.a.createElement("group",null,n.a.createElement("ambientLight",{intensity:.1}),n.a.createElement("spotLight",{color:"hsl(0, 0%, 70%)",position:[4,2,-4]}),n.a.createElement("spotLight",{color:"hsl(210, 100%, 70%)",position:[-4,2,4]}),n.a.createElement("spotLight",{color:"hsl(30, 100%, 70%)",position:[4,2,4]}))},w=function(){var e=Object(c.h)(),t=Object(c.h)(),a=Object(c.h)(),r=Object(i.c)("Show helpers",{group:"Light Helpers",type:"boolean",value:!0}),o=Object(i.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),l=Object(i.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),u=Object(i.c)("Color",{group:"Back Light",type:"color",value:"hsl(0, 0%, 70%)"}),s=Object(i.c)("Color",{group:"Fill Light",type:"color",value:"hsl(210, 100%, 70%)"}),m=Object(i.c)("Color",{group:"Key Light",type:"color",value:"hsl(30, 100%, 70%)"});return n.a.createElement("group",null,n.a.createElement("ambientLight",{color:o,intensity:l}),n.a.createElement("spotLight",{color:u,position:[4,2,-4],ref:e}),n.a.createElement("spotLight",{color:s,position:[-4,2,4],ref:t}),n.a.createElement("spotLight",{color:m,position:[4,2,4],ref:a}),r&&n.a.createElement(n.a.Fragment,null,e.current&&n.a.createElement("spotLightHelper",{args:[e.current]}),t.current&&n.a.createElement("spotLightHelper",{args:[t.current]}),a.current&&n.a.createElement("spotLightHelper",{args:[a.current]})))},G=a(52),k=a.n(G),z=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(!1),i=Object(m.a)(l,2),s=i[0],g=i[1],h=Object(u.h)(k.a,!0),p=h.nodes,f=h.materials,b=Object(r.useRef)();return Object(c.f)((function(){b.current.rotation.x+=.025*(s?1:0)*(a?1:-1),b.current.rotation.y+=.025*(s?1:0)*(a?1:-1),b.current.rotation.z+=.025*(s?1:0)*(a?1:-1)})),n.a.createElement("group",{ref:b,onClick:function(){return o(!a)},onDoubleClick:function(){return g(!s)}},n.a.createElement("mesh",{geometry:p.Suzanne.geometry,material:f.Paars}))},B=function(){var e=Object(u.h)(k.a,!0).nodes,t=Object(u.j)(2),a=Object(u.i)("6E5137_E8CA90_271912_B99C74",1024),r=Object(m.a)(a,1)[0];return n.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},n.a.createElement("meshMatcapMaterial",{matcap:r}))},H=function(){var e=Object(u.h)(k.a,!0).nodes,t=Object(u.j)(2);return n.a.createElement("mesh",{geometry:e.Suzanne.geometry,ref:t},n.a.createElement("meshStandardMaterial",null))},U=function(e){return n.a.createElement("group",e,n.a.createElement("mesh",null,n.a.createElement("boxBufferGeometry",{args:[1,1,1].map((function(e){return 1.5*e*.01}))}),n.a.createElement("meshMatcapMaterial",{color:16777215})),Array(3).fill(null).map((function(e,t){return n.a.createElement("group",{position:[0,0,0].map((function(e,a){return t===a?.52:e}))},n.a.createElement("mesh",null,n.a.createElement("boxBufferGeometry",{args:[1,1,1].map((function(e,a){return e*(t===a?1:.01)}))}),n.a.createElement("meshMatcapMaterial",{color:16711680>>8*t})),n.a.createElement("mesh",{position:[0,0,0].map((function(e,a){return t===a?.53:e}))},n.a.createElement("sphereBufferGeometry",{args:[.02,32,32]}),n.a.createElement("meshMatcapMaterial",{color:16777215})))})))},F=function(){var e=["None","Button","Button (React Spring)","Clock","Cube","Cube (positioned)","Gauge","GlTransmissionFormat","Suzanne (default)","Suzanne (MatCap Texture)","Suzanne (Normal Texture)","Suzanne (Standard Material)","Tripod"],t=["None","Demo","Demo + Gui","Studio Lighting","Studio Lighting + GUI","Three Point Lighting","Three Point Lighting + GUI"],a=Object(i.c)("Effect",{type:"boolean",value:!1}),o=Object(i.c)("Statistics",{type:"boolean",value:!1}),l=Object(i.c)("Axes Helper",{type:"boolean",value:!0}),c=Object(i.c)("Grid Helper",{type:"boolean",value:!0}),m=Object(i.c)("Lighting",{type:"select",value:t[3],items:t}),h=Object(i.c)("Component",{type:"select",value:e[11],items:e});function p(e){return m===e}function b(e){return h===e}return n.a.createElement(n.a.Fragment,null,n.a.createElement("group",null,n.a.createElement(u.e,{enablePan:!0,enableRotate:!0,enableZoom:!0}),o&&n.a.createElement(u.f,null),l&&n.a.createElement("axesHelper",null),c&&n.a.createElement("gridHelper",{args:[10,10,16777215,3355443]})),a&&n.a.createElement(s.b,null,n.a.createElement(s.a,{height:500,luminanceThreshold:0,luminanceSmoothing:.9})),p("Demo")&&n.a.createElement(M,null),p("Demo + Gui")&&n.a.createElement(C,null),p("Studio Lighting")&&n.a.createElement(R,null),p("Studio Lighting + GUI")&&n.a.createElement(x,null),p("Three Point Lighting")&&n.a.createElement(T,null),p("Three Point Lighting + GUI")&&n.a.createElement(w,null),b("Button")&&n.a.createElement(g,null),b("Button (React Spring)")&&n.a.createElement(f,null),b("Clock")&&n.a.createElement(O,null),b("Cube")&&n.a.createElement(j,null),b("Cube (positioned)")&&n.a.createElement(j,{position:[1,1,1],rotation:[.5,.5,.5]}),b("Gauge")&&n.a.createElement(y,null),n.a.createElement(r.Suspense,{fallback:null},b("GlTransmissionFormat")&&n.a.createElement(S,null),b("Suzanne (default)")&&n.a.createElement(z,null),b("Suzanne (MatCap Texture)")&&n.a.createElement(B,null),b("Suzanne (Normal Texture)")&&n.a.createElement(B,null),b("Suzanne (Standard Material)")&&n.a.createElement(H,null)),b("Tripod")&&n.a.createElement(U,null))},P=(a(333),function(){return n.a.createElement(i.b,null,n.a.createElement(c.a,{invalidateFrameloop:!1,shadowMap:!0},n.a.createElement(F,null)),n.a.createElement(i.a,{title:"Controls"}))});l.a.render(n.a.createElement(P,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/suzanne.fdd60495.glb"}},[[155,1,2]]]);
//# sourceMappingURL=main.64fd87b0.chunk.js.map