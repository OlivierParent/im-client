(this["webpackJsonpx-reality"]=this["webpackJsonpx-reality"]||[]).push([[0],{408:function(e,t,r){},409:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r(1),o=r(50),i=r.n(o),a=r(10),s=r(15),j=r(9),l=r(45),u=r(0),b=r(11),O=r(132),h=r.p+"static/media/animation.07175b80.glb",p=function(){var e=Object(b.k)(h,!0),t=e.animations,r=e.scene,o=Object(n.useRef)(),i=new u.AnimationMixer;return Object(n.useEffect)((function(){o.current&&i.clipAction(t[0],o.current).play()}),[]),Object(a.g)((function(e,t){i.update(t)})),Object(c.jsx)("primitive",{object:r,ref:o})},g=function(e){var t=Object(n.useState)(!1),r=Object(j.a)(t,2),o=(r[0],r[1]),i=Object(n.useState)(65280),s=Object(j.a)(i,2),l=s[0],u=s[1];return Object(a.g)((function(){})),Object(c.jsxs)("group",{onClick:function(){return u(16711680)},onDoubleClick:function(){return u(255)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)},children:[Object(c.jsxs)("mesh",{children:[Object(c.jsx)("boxBufferGeometry",{args:[1,.5,.01]}),Object(c.jsx)("meshMatcapMaterial",{color:l})]}),Object(c.jsx)(b.j,{color:"white",fontSize:.2,position:[0,0,.01],children:"Click Me!"})]})},d=r(12),f=r(28),x=function(e){var t=Object(n.useState)(!1),r=Object(j.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(!1),l=Object(j.a)(s,2),O=l[0],h=l[1],p=Object(n.useState)(16711680),g=Object(j.a)(p,2),x=g[0],m=g[1],y=Object(f.c)({opacity:o?1:.5,scale:o?[1.5,1.25]:[1,1],rotation:O?[u.MathUtils.degToRad(-90),0,0]:[0,0,0]}),S=y.opacity,v=y.rotation,L=y.scale;return Object(a.g)((function(){})),Object(c.jsxs)(f.a.group,Object(d.a)(Object(d.a)({},e),{},{onClick:function(){return h(!O)},onDoubleClick:function(){return m(x>>8)},onPointerOut:function(){return i(!1)},onPointerOver:function(){return i(!0)},rotation:v,children:[Object(c.jsxs)(f.a.mesh,{scale:L,children:[Object(c.jsx)("planeBufferGeometry",{args:[1,.5]}),Object(c.jsx)(f.a.meshMatcapMaterial,{opacity:S,color:x,transparent:!0})]}),Object(c.jsx)(b.j,{color:"white",fontSize:.2,position:[0,0,.01],children:"Click Me!"})]}))},m=r(3),y=r(7),S=r(33),v=r(57),L=Object(v.a)("radius"),M=Object(v.a)("angle"),w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(m.a)(this,e),Object.defineProperty(this,L,{writable:!0,value:1}),Object.defineProperty(this,M,{writable:!0,value:0}),Object(S.a)(this,L)[L]=t}return Object(y.a)(e,[{key:"getCoordinates",value:function(e){return this.angle=e,{x:Math.cos(this.angle)*Object(S.a)(this,L)[L],y:Math.sin(this.angle)*Object(S.a)(this,L)[L]}}},{key:"angle",get:function(){return Object(S.a)(this,M)[M]},set:function(e){Object(S.a)(this,M)[M]=u.MathUtils.degToRad(e)}}]),e}(),R=Object(v.a)("number"),C=Object(v.a)("postfix"),k=Object(v.a)("zeros"),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(m.a)(this,e),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),this.number=t,Object(S.a)(this,C)[C]=c,Object(S.a)(this,k)[k]=r}return Object(y.a)(e,[{key:"toString",value:function(){return this.number+Object(S.a)(this,C)[C]}},{key:"zeroFill",value:function(e){for(;e.length<Object(S.a)(this,k)[k];)e="0".concat(e);return e}},{key:"number",get:function(){return this.zeroFill(Object(S.a)(this,R)[R])},set:function(e){Object(S.a)(this,R)[R]=Math.floor(e).toString()}}]),e}();function G(e){return!(e%5)}var z=function(e){var t=.02,r=16764006,o=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)(),j=Object(n.useRef)(),l=u.MathUtils.degToRad(90);return Object(a.g)((function(){var e=new Date;i.current&&(i.current.rotation.z=u.MathUtils.degToRad(-30*(e.getHours()+e.getMinutes()/60))),s.current&&(s.current.rotation.z=u.MathUtils.degToRad(-6*e.getMinutes())),j.current&&(j.current.rotation.z=u.MathUtils.degToRad(-6*e.getSeconds()))})),Object(c.jsxs)("group",Object(d.a)(Object(d.a)({ref:o},e),{},{children:[Object(c.jsxs)("group",{children:[Object(c.jsx)(b.j,{color:"black",position:[0,-.25,.01],children:"Arteveldehogeschool"}),Array(12).fill(null).map((function(e,t){var n=30*t+90,o=new w(.75).getCoordinates(n),i=o.x,a=o.y;return Object(c.jsx)(b.j,{color:r,position:[i,a,.01],scale:[1.2,1.2,1],children:(12-t).toString()})}))]}),Object(c.jsxs)("group",{rotation:[0,0,l],children:[Object(c.jsxs)("mesh",{receiveShadow:!0,children:[Object(c.jsx)("circleBufferGeometry",{args:[1,60]}),Object(c.jsx)("meshStandardMaterial",{opacity:.25,transparent:!0})]}),Object(c.jsxs)("group",{position:[0,0,.01],children:[Object(c.jsx)("group",{position:[0,0,.01],ref:i,children:Object(c.jsxs)("mesh",{castShadow:!0,position:[.3,0,0],children:[Object(c.jsx)("boxBufferGeometry",{args:[.6,.06,t]}),Object(c.jsx)("meshStandardMaterial",{})]})}),Object(c.jsx)("group",{position:[0,0,.04],ref:s,children:Object(c.jsxs)("mesh",{castShadow:!0,position:[.35,0,0],children:[Object(c.jsx)("boxBufferGeometry",{args:[.7,.04,t]}),Object(c.jsx)("meshStandardMaterial",{})]})}),Object(c.jsx)("group",{position:[0,0,.06+.01],ref:j,children:Object(c.jsxs)("mesh",{castShadow:!0,position:[.4,0,0],children:[Object(c.jsx)("boxBufferGeometry",{args:[.8,.02,t]}),Object(c.jsx)("meshStandardMaterial",{color:r})]})})]}),Array(60).fill(null).map((function(e,t){var r=u.MathUtils.degToRad(6*t);return Object(c.jsx)("group",{rotation:[0,0,r],position:[0,0,.005],children:Object(c.jsxs)("mesh",{position:[.95-(G(t)?.1-.01:.08)/2,0,0],children:[Object(c.jsx)("boxBufferGeometry",{args:[G(t)?.1:.08,G(t)?.02:.01,.01]}),Object(c.jsx)("meshStandardMaterial",{color:0===t?255:G(t)?16711680:16777215})]})},t)})),Object(c.jsxs)("mesh",{castShadow:!0,rotation:[-90,0,0].map((function(e){return u.MathUtils.degToRad(e)})),position:[0,0,.05],children:[Object(c.jsx)("cylinderBufferGeometry",{args:[.1,.05,.1,36]}),Object(c.jsx)("meshStandardMaterial",{})]})]})]}))},U=function(e){var t=Object(n.useRef)();return Object(a.g)((function(){var e=new Date,r=new T(e.getHours(),2),c=new T(e.getMinutes(),2),n=new T(e.getSeconds(),2);t.current.text="".concat(r,":").concat(c,":").concat(n)})),Object(c.jsx)(b.j,Object(d.a)({fontSize:2,ref:t},e))},B=function(e){var t=["#f00","#ff0","#0f0","#0ff","#00f","#f0f"],r=t[Math.floor(Math.random()*t.length)],o=Object(n.useRef)(),i=Object(n.useState)(!0),a=Object(j.a)(i,2),s=a[0],l=a[1],u=Object(f.c)({opacity:s?.9:.5}).opacity,b=Object(f.c)({position:s?[0,0,0]:[4,4,0].map((function(e){return(2*Math.random()-1)*e}))}).position;return Object(c.jsxs)(f.a.mesh,Object(d.a)(Object(d.a)({},e),{},{onClick:function(){return l(!s)},position:b,children:[Object(c.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(c.jsx)(f.a.meshMatcapMaterial,{color:r,opacity:u,ref:o,transparent:!0})]}))},I=function(e){return Object(c.jsx)(b.g,Object(d.a)(Object(d.a)({args:[10,10],rotation:[u.MathUtils.degToRad(-90),0,0]},e),{},{children:Object(c.jsx)("meshStandardMaterial",{})}))},P=function(e){var t=[{color:"green",label:"0",ref:Object(n.useRef)(),value:0},{color:"white",label:"10",ref:Object(n.useRef)(),value:1e3},{color:"white",label:"20",ref:Object(n.useRef)(),value:2e3},{color:"white",label:"30",ref:Object(n.useRef)(),value:3e3},{color:"white",label:"40",ref:Object(n.useRef)(),value:4e3},{color:"white",label:"50",ref:Object(n.useRef)(),value:5e3},{color:"orange",label:"60",ref:Object(n.useRef)(),value:6e3},{color:"red",label:"70",ref:Object(n.useRef)(),value:7e3},{color:"red",label:"80",ref:Object(n.useRef)(),value:8e3}],r=270/(t.length-1),o=u.MathUtils.degToRad(-135),i=1e3*(t.length-1),s=270/i,j=Object(n.useRef)(),l=0,O=0,h=60;return Object(a.g)((function(){O<=0?h=60:i<=O&&(h=-250),O+=h,l=u.MathUtils.degToRad(-s*O),j.current.rotation.z=l,t.forEach((function(e){e.ref.current.children[0].material.color.setColorName(e.value<=O?"blue":e.color)}))})),Object(c.jsxs)("group",Object(d.a)(Object(d.a)({},e),{},{rotation:[0,0,o],children:[Object(c.jsx)(b.b,{args:[1.2,62],position:[0,0,0],receiveShadow:!0,children:Object(c.jsx)("meshStandardMaterial",{opacity:.25,transparent:!0})}),t.map((function(e,t){return Object(c.jsx)("group",{ref:e.ref,rotation:[0,0,-r*t].map((function(e){return u.MathUtils.degToRad(e)})),children:Object(c.jsx)(b.a,{args:[.25,.05,.02],position:[1,0,.01],children:Object(c.jsx)("meshStandardMaterial",{color:e.color,metalness:.1,opacity:.5,roughness:.6,transparent:!0})})},t)})),Object(c.jsxs)("group",{position:[0,0,.05],children:[Object(c.jsx)("group",{ref:j,children:Object(c.jsx)("group",{rotation:[0,0,-90].map((function(e){return u.MathUtils.degToRad(e)})),children:Object(c.jsx)(b.c,{args:[.03,1,4],castShadow:!0,position:[0,.5,0],children:Object(c.jsx)("meshStandardMaterial",{color:"orange",metalness:.1,roughness:.6})})})}),Object(c.jsx)(b.d,{args:[.1,.05,.1,36],castShadow:!0,rotation:[-90,0,0].map((function(e){return u.MathUtils.degToRad(e)})),children:Object(c.jsx)("meshStandardMaterial",{})})]})]}))},A=r.p+"static/media/UV_Grid_Sm.8ab40f71.jpg",H=function(){var e=Object(b.o)(A,!0);return e.offset=new u.Vector2(0,0),e.repeat=new u.Vector2(1,1),Object(c.jsxs)("mesh",{children:[Object(c.jsx)("planeBufferGeometry",{args:[1,1,1]}),Object(c.jsx)("meshStandardMaterial",{center:!0,map:e,side:u.DoubleSide})]})},F=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ambientLight",{intensity:.1}),Object(c.jsx)("directionalLight",{castShadow:!0,color:16777215,intensity:1,position:[2,2,1]}),Object(c.jsx)("hemisphereLight",{}),Object(c.jsx)("pointLight",{castShadow:!0,color:16737792,intensity:.5,position:[0,0,4]}),Object(c.jsx)("spotLight",{castShadow:!0,color:16773120,position:[0,4,4],intensity:1})]})},D=function(){var e=Object(a.i)(),t=Object(a.i)(),r=Object(a.i)(),o=Object(n.useRef)(),i=Object(a.j)().scene,j=new u.Object3D;i.add(j);var l=Object(s.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),b=(Object(s.c)("Color",{group:"Ambient Light",type:"color",value:"#ffffff"}),Object(s.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1})),O=Object(s.c)("Color",{group:"Directional Light",type:"color",value:"#ffffff"}),h=Object(s.c)("Intensity",{group:"Directional Light",type:"number",value:1,min:0,max:1}),p=Object(s.c)("Color",{group:"Point Light",type:"color",value:"#ffcc77"}),g=Object(s.c)("Intensity",{group:"Point Light",type:"number",value:.5,min:0,max:20}),d=Object(s.c)("Position XZ",{group:"Point Light",type:"xypad",distance:5,value:{x:-4,y:-4}}),f=Object(s.c)("Color",{group:"Spot Light",type:"color"}),x=Object(s.c)("Intensity",{group:"Spot Light",type:"number",value:1,min:0,max:20}),m=Object(s.c)("Position XZ",{group:"Spot Light",type:"xypad",distance:5,value:{x:0,y:0}});return Object(a.g)((function(){j.translateX(m.x),j.translateZ(m.y),o.current&&o.current.update()})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ambientLight",{intensity:b}),Object(c.jsx)("directionalLight",{castShadow:!0,color:O,intensity:h,position:[4,4,1],ref:e}),Object(c.jsx)("pointLight",{castShadow:!0,color:p,intensity:g,position:[d.x,1,d.y],ref:t}),Object(c.jsx)("spotLight",{castShadow:!0,color:f,position:[0,4,4],intensity:x,ref:r,target:j,penumbra:.5,angle:u.MathUtils.degToRad(30)}),l&&Object(c.jsxs)(c.Fragment,{children:[e.current&&Object(c.jsx)("directionalLightHelper",{args:[e.current,.5,O]}),t.current&&Object(c.jsx)("pointLightHelper",{args:[t.current,.5,p]}),r.current&&Object(c.jsx)("spotLightHelper",{args:[r.current,f],ref:o})]})]})},E=function(){return Object(c.jsxs)("group",{children:[Object(c.jsx)("ambientLight",{intensity:.1}),Object(c.jsx)("directionalLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.4,position:[0,2,4]}),Object(c.jsx)("directionalLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",position:[-4,0,0]}),Object(c.jsx)("directionalLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",position:[4,0,0]}),"s"]})},_=function(){var e=Object(a.i)(),t=Object(a.i)(),r=Object(a.i)(),n=Object(s.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),o=Object(s.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),i=Object(s.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),j=Object(s.c)("Color",{group:"Front Light",type:"color",value:"hsl(0, 0%, 70%)"}),l=Object(s.c)("Intensity",{group:"Front Light",type:"number",value:.4,min:0,max:2}),u=Object(s.c)("Color",{group:"Left Light",type:"color",value:"hsl(210, 100%, 70%)"}),b=Object(s.c)("Intensity",{group:"Left Light",type:"number",value:1,min:0,max:2}),O=Object(s.c)("Color",{group:"Right Light",type:"color",value:"hsl(30, 100%, 70%)"}),h=Object(s.c)("Intensity",{group:"Right Light",type:"number",value:1,min:0,max:2});return Object(c.jsxs)("group",{children:[Object(c.jsx)("ambientLight",{color:o,intensity:i}),Object(c.jsx)("directionalLight",{castShadow:!0,color:j,intensity:l,position:[0,2,4],ref:e}),Object(c.jsx)("directionalLight",{castShadow:!0,color:u,intensity:b,position:[-4,0,0],ref:t}),Object(c.jsx)("directionalLight",{castShadow:!0,color:O,intensity:h,position:[4,0,0],ref:r}),n&&Object(c.jsxs)(c.Fragment,{children:[e.current&&Object(c.jsx)("directionalLightHelper",{args:[e.current,.5,j]}),t.current&&Object(c.jsx)("directionalLightHelper",{args:[t.current,.5,u]}),r.current&&Object(c.jsx)("directionalLightHelper",{args:[r.current,.5,O]})]})]})},N=function(){return Object(c.jsxs)("group",{children:[Object(c.jsx)("ambientLight",{intensity:.1}),Object(c.jsx)("spotLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",position:[4,2,-4]}),Object(c.jsx)("spotLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",position:[-4,2,4]}),Object(c.jsx)("spotLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",position:[4,2,4]})]})},W=function(){var e=Object(a.i)(),t=Object(a.i)(),r=Object(a.i)(),n=Object(s.c)("Light helpers",{group:"Helpers",type:"boolean",value:!0}),o=Object(s.c)("Color",{group:"Ambient Light",type:"color",value:"hsl(0, 0%, 100%)"}),i=Object(s.c)("Intensity",{group:"Ambient Light",type:"number",value:.1,min:0,max:1}),j=Object(s.c)("Color",{group:"Back Light",type:"color",value:"hsl(0, 0%, 70%)"}),l=Object(s.c)("Intensity",{group:"Back Light",type:"number",value:1,min:0,max:2}),u=Object(s.c)("Color",{group:"Fill Light",type:"color",value:"hsl(210, 100%, 70%)"}),b=Object(s.c)("Intensity",{group:"Fill Light",type:"number",value:.75,min:0,max:2}),O=Object(s.c)("Color",{group:"Key Light",type:"color",value:"hsl(30, 100%, 70%)"}),h=Object(s.c)("Intensity",{group:"Key Light",type:"number",value:1,min:0,max:2});return Object(c.jsxs)("group",{children:[Object(c.jsx)("ambientLight",{color:o,intensity:i}),Object(c.jsx)("spotLight",{castShadow:!0,color:j,intensity:l,position:[4,2,-4],ref:e}),Object(c.jsx)("spotLight",{castShadow:!0,color:u,intensity:b,position:[-4,2,4],ref:t}),Object(c.jsx)("spotLight",{castShadow:!0,color:O,intensity:h,position:[4,2,4],ref:r}),n&&Object(c.jsxs)(c.Fragment,{children:[e.current&&Object(c.jsx)("spotLightHelper",{args:[e.current,j]}),t.current&&Object(c.jsx)("spotLightHelper",{args:[t.current,u]}),r.current&&Object(c.jsx)("spotLightHelper",{args:[r.current,O]})]})]})},Z=r.p+"static/media/gltf-logo.d3501fc2.glb",V=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),r=t[0],o=t[1],i=Object(b.k)(Z,!0),s=Object(n.useRef)();return Object(a.g)((function(){s.current.rotation.y+=.025*(r?1:-1)})),Object(c.jsx)("primitive",{object:i.scene,onClick:function(){return o(!r)},position:[0,0,0],ref:s})},X=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),r=t[0],o=t[1],i=Object(b.k)(Z,!0),s=Object(n.useRef)(),l=Object(n.useRef)();return Object(a.g)((function(){s.current&&(s.current.rotation.x+=.025*(r?1:-1)),l.current&&(l.current.rotation.y+=.025*(r?1:-1))})),Object(c.jsxs)("group",{onClick:function(){return o(!r)},children:[Object(c.jsx)("primitive",{object:i.scene,position:[-1,-1,0],ref:s}),Object(c.jsx)("primitive",{object:i.scene.clone(!0),position:[1,1,0],ref:l})]})},J=r(101),K=r(192),q=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=new K.Manager("http://localhost:".concat(3001)).socket("/");return r.on("connect",(function(){console.log("Socket connected: ",r.connected)})),r.on("disconnect",(function(){console.log("Socket disconnected")})),Object(n.useEffect)((function(){r.on("telemetry",(function(r){var c=new T(r.distance,6," km"),n=new T(r.speed,3," km/u");e.current&&(e.current.text=c),t.current&&(t.current.text=n)}))})),Object(c.jsxs)(J.b,{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",position:[-3,0,0],size:[6,0,0],children:[Object(c.jsx)(J.a,{children:Object(c.jsx)(b.j,{color:"hsl(210, 100%, 70%)",fontSize:1,ref:e,text:"Socket.IO"})}),Object(c.jsx)(J.a,{children:Object(c.jsx)(b.j,{color:"hsl(30, 100%, 70%)",fontSize:1,ref:t,text:"Socket.IO"})})]})},Q=r(412),Y=function(e){var t=Object(n.useState)(!0),r=Object(j.a)(t,2),o=r[0],i=r[1],a=Object(b.l)("80CA23_B7EE37_D5FA4C_A3E434",1024),s=Object(j.a)(a,1)[0],l=Object(f.c)({config:{duration:200,easing:Q.a},delay:100,from:{opacity:o?.5:1,position:o?[0,0,0]:[0,0,-2]},to:[{opacity:o?1:.5},{opacity:o?.5:1},{opacity:o?1:.5,position:o?[0,0,-2]:[0,0,0]}]}),O=l.opacity,h=l.position;return Object(c.jsxs)("group",Object(d.a)(Object(d.a)({},e),{},{children:[Object(c.jsxs)("mesh",{onClick:function(){return i(!o)},children:[Object(c.jsx)("ringBufferGeometry",{args:[1.1,1.9,72,8,u.MathUtils.degToRad(90),u.MathUtils.degToRad(350)]}),Object(c.jsx)(f.a.meshMatcapMaterial,{matcap:s,opacity:O,side:u.DoubleSide,transparent:!0})]}),Object(c.jsxs)(f.a.mesh,{position:h,children:[Object(c.jsx)("torusBufferGeometry",{args:[1.5,.5,72,32,u.MathUtils.degToRad(360)]}),Object(c.jsx)("meshMatcapMaterial",{matcap:s,opacity:.25,transparent:!0})]})]}))},$=r(193),ee=function(e){var t=Object(n.useState)(!0),r=Object(j.a)(t,2),o=r[0],i=r[1],a=Object(b.l)("80CA23_B7EE37_D5FA4C_A3E434",1024),s=Object(j.a)(a,1)[0];return Object(c.jsxs)("group",Object(d.a)(Object(d.a)({},e),{},{children:[Object(c.jsxs)("mesh",{onClick:function(){return i(!o)},children:[Object(c.jsx)($.Spring,{config:f.b.wobbly,delay:100,from:{thetaLength:o?10:350},to:{thetaLength:o?350:10},children:function(e){return Object(c.jsx)("ringBufferGeometry",{args:[1.1,1.9,72,8,u.MathUtils.degToRad(90),u.MathUtils.degToRad(e.thetaLength)]})}}),Object(c.jsx)("meshMatcapMaterial",{matcap:s,opacity:1,side:u.DoubleSide,transparent:!0})]}),Object(c.jsxs)("mesh",{children:[Object(c.jsx)("torusBufferGeometry",{args:[1.5,.5,36,72,u.MathUtils.degToRad(360)]}),Object(c.jsx)("meshMatcapMaterial",{matcap:s,opacity:.25,transparent:!0})]})]}))},te=r.p+"static/media/suzanne.a6e83718.glb",re=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(!1),s=Object(j.a)(i,2),l=s[0],u=s[1],O=Object(b.k)(te,!0),h=O.nodes,p=O.materials,g=Object(n.useRef)(),d=.025;return Object(a.g)((function(){g.current&&(g.current.rotation.x+=d*(l?1:0)*(r?1:-1),g.current.rotation.y+=d*(l?1:0)*(r?1:-1),g.current.rotation.z+=d*(l?1:0)*(r?1:-1))})),Object(c.jsx)("group",{ref:g,onClick:function(){return o(!r)},onDoubleClick:function(){return u(!l)},children:Object(c.jsx)("mesh",{geometry:h.Suzanne.geometry,material:p.Paars})})},ce=function(){var e=Object(b.k)(te,!0).nodes,t=Object(b.n)(2),r=Object(b.l)("6E5137_E8CA90_271912_B99C74",1024),n=Object(j.a)(r,1)[0];return Object(c.jsx)("mesh",{geometry:e.Suzanne.geometry,ref:t,children:Object(c.jsx)("meshMatcapMaterial",{matcap:n})})},ne=function(){var e=Object(b.k)(te,!0).nodes,t=Object(b.n)(2),r=Object(b.m)(8,{anisotropy:8,offset:[0,0],repeat:[10,10]}),n=Object(j.a)(r,1)[0];return Object(c.jsx)("mesh",{geometry:e.Suzanne.geometry,ref:t,children:Object(c.jsx)("meshStandardMaterial",{normalMap:n})})},oe=function(){var e=Object(b.k)(te,!0).nodes,t=Object(b.n)(2);return Object(c.jsx)("mesh",{geometry:e.Suzanne.geometry,ref:t,children:Object(c.jsx)("meshStandardMaterial",{})})},ie=function(){var e=Object(b.k)(te,!0).nodes,t=Object(b.n)(2);return Object(c.jsx)("mesh",{geometry:e.Suzanne.geometry,ref:t,children:Object(c.jsx)("meshToonMaterial",{})})},ae=function(e){var t=.01;return Object(c.jsxs)("group",Object(d.a)(Object(d.a)({},e),{},{children:[Object(c.jsxs)("mesh",{children:[Object(c.jsx)("boxBufferGeometry",{args:[1,1,1].map((function(e){return 1.5*e*t}))}),Object(c.jsx)("meshMatcapMaterial",{color:16777215})]}),Array(3).fill(null).map((function(e,r){return Object(c.jsxs)("group",{position:[0,0,0].map((function(e,t){return r===t?.52:e})),children:[Object(c.jsxs)("mesh",{children:[Object(c.jsx)("boxBufferGeometry",{args:[1,1,1].map((function(e,c){return e*(r===c?1:t)}))}),Object(c.jsx)("meshMatcapMaterial",{color:16711680>>8*r})]}),Object(c.jsxs)("mesh",{position:[0,0,0].map((function(e,t){return r===t?.53:e})),children:[Object(c.jsx)("sphereBufferGeometry",{args:[.02,32,32]}),Object(c.jsx)("meshMatcapMaterial",{color:16777215})]})]})}))]}))},se=function(){var e=Object(l.c)(),t=Object(j.a)(e,2),r=(t[0],t[1]);return Object(c.jsx)(b.j,{color:"hsl(210, 100%, 70%)",fontSize:1,onClick:function(){var e="/router";console.log("Route: ",e),r(e)},text:"Wouter"})},je=function(){var e=Object(l.c)(),t=Object(j.a)(e,2),r=(t[0],t[1]);return Object(c.jsx)(b.j,{color:"hsl(210, 100%, 70%)",fontSize:1,onClick:function(){var e="/wouter";console.log("Route: ",e),r(e)},position:[0,2,0],text:"Path Router"})},le=function(){var e=Object(l.c)(),t=Object(j.a)(e,2),r=(t[0],t[1]);return Object(c.jsx)(b.j,{color:"hsl(210, 100%, 70%)",fontSize:1,onClick:function(){var e="/router";console.log("Route: ",e),r(e)},position:[0,-2,0],text:"Path Wouter"})},ue=function(){var e=["None","Animation","Button","Button (React Spring)","Clock (analogue)","Clock (digital)","Cube (positioned)","Cube","Face","Gauge","Image","Logo","Logo (double)","Socket (Socket.IO 3.0)","Spring","Spring (Props)","Suzanne (default)","Suzanne (MatCap Texture)","Suzanne (Normal Texture)","Suzanne (Standard Material)","Suzanne (Toon Material)","Tripod","Wouter (router)"],t=["None","Demo","Demo + GUI","Studio Lighting","Studio Lighting + GUI","Three Point Lighting","Three Point Lighting + GUI"],r=Object(s.c)("Fly Controls",{group:"General",type:"boolean",value:!1}),o=Object(s.c)("Orbit Controls",{group:"General",type:"boolean",value:!1}),i=Object(s.c)("PointerLock Controls",{group:"General",type:"boolean",value:!1}),a=Object(s.c)("Effect",{group:"General",type:"boolean",value:!1}),j=Object(s.c)("Statistics",{group:"General",type:"boolean",value:!1}),h=Object(s.c)("Component",{group:"General",type:"select",value:e[16],items:e}),d=Object(s.c)("Lighting",{group:"General",type:"select",value:t[3],items:t}),f=Object(s.c)("Axes Helper",{group:"Helpers",type:"boolean",value:!1}),m=Object(s.c)("Grid Helper",{group:"Helpers",type:"boolean",value:!1});function y(e){return d===e}function S(e){return h===e}return Object(c.jsxs)(l.b,{children:[Object(c.jsxs)(c.Fragment,{children:[r&&Object(c.jsx)(b.e,{autoForward:!0,dragToLook:!0,movementSpeed:1,rollSpeed:.005}),o&&Object(c.jsx)(b.f,{enablePan:!0,enableRotate:!0,enableZoom:!0}),i&&Object(c.jsx)(b.h,{}),j&&Object(c.jsx)(b.i,{}),f&&Object(c.jsx)("axesHelper",{}),m&&Object(c.jsx)("gridHelper",{args:[10,10,16777215,3355443]})]}),a&&Object(c.jsx)(O.b,{children:Object(c.jsx)(O.a,{height:500,luminanceThreshold:0,luminanceSmoothing:.9})}),y("Demo")&&Object(c.jsx)(F,{}),y("Demo + GUI")&&Object(c.jsx)(D,{}),y("Studio Lighting")&&Object(c.jsx)(E,{}),y("Studio Lighting + GUI")&&Object(c.jsx)(_,{}),y("Three Point Lighting")&&Object(c.jsx)(N,{}),y("Three Point Lighting + GUI")&&Object(c.jsx)(W,{}),S("Button")&&Object(c.jsx)(g,{}),S("Button (React Spring)")&&Object(c.jsx)(x,{}),S("Clock (analogue)")&&Object(c.jsx)(z,{}),S("Clock (digital)")&&Object(c.jsx)(U,{}),S("Cube")&&Object(c.jsx)(B,{}),S("Cube (positioned)")&&Object(c.jsx)(B,{position:[1,1,1],rotation:[45,45,45].map((function(e){return u.MathUtils.degToRad(e)}))}),S("Face")&&Object(c.jsx)(I,{}),S("Gauge")&&Object(c.jsx)(P,{}),S("Socket (Socket.IO 3.0)")&&Object(c.jsx)(q,{}),Object(c.jsxs)(n.Suspense,{fallback:null,children:[S("Animation")&&Object(c.jsx)(p,{}),S("Logo")&&Object(c.jsx)(V,{}),S("Logo (double)")&&Object(c.jsx)(X,{}),S("Image")&&Object(c.jsx)(H,{}),S("Spring")&&Object(c.jsx)(Y,{}),S("Spring (Props)")&&Object(c.jsx)(ee,{}),S("Suzanne (default)")&&Object(c.jsx)(re,{}),S("Suzanne (MatCap Texture)")&&Object(c.jsx)(ce,{}),S("Suzanne (Normal Texture)")&&Object(c.jsx)(ne,{}),S("Suzanne (Standard Material)")&&Object(c.jsx)(oe,{}),S("Suzanne (Toon Material)")&&Object(c.jsx)(ie,{})]}),S("Tripod")&&Object(c.jsx)(ae,{}),S("Wouter (router)")&&Object(c.jsx)(se,{}),Object(c.jsx)(l.a,{component:je,path:"/router"}),Object(c.jsx)(l.a,{component:le,path:"/wouter"})]})},be=(r(408),function(){return Object(c.jsxs)(s.b,{children:[Object(c.jsx)(a.a,{invalidateFrameloop:!1,shadowMap:!0,children:Object(c.jsx)(ue,{})}),Object(c.jsx)(s.a,{title:"Controls"})]})});i.a.render(Object(c.jsx)(be,{}),document.getElementById("root"))}},[[409,1,2]]]);
//# sourceMappingURL=main.2e5e2c57.chunk.js.map