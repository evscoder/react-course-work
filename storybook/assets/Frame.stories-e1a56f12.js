import{j as a}from"./jsx-runtime-94f6e698.js";import{D as y}from"./app-1c194ffc.js";import{r as c}from"./index-8db94870.js";import{c as x}from"./clsx.m-1229b3e0.js";import{u as S,a as A,P as E,s as w}from"./store-89f7bfb9.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const F="_frame_a0uv6_1",N="_frame__row_a0uv6_17",p={frame:F,frame__row:N},j="_shape_18gg7_1",$="_is-circle_18gg7_14",C="_is-triangle_18gg7_17",D="_is-dead_18gg7_20",T="_is-active_18gg7_23",d={shape:j,"is-circle":"_is-circle_18gg7_14",isCircle:$,"is-triangle":"_is-triangle_18gg7_17",isTriangle:C,"is-dead":"_is-dead_18gg7_20",isDead:D,"is-active":"_is-active_18gg7_23",isActive:T},n=({id:e,isActive:t})=>{const i=S(),r=c.useRef(null),l=()=>{const s=r.current,m=s==null?void 0:s.id.split("_"),h=+m[0],v=+m[1];i(A({row:h,col:v}))};return a.jsx("div",{ref:r,id:e,className:x(d.shape,t&&d.isActive,"shape"),onClick:l})};try{n.displayName="Shape",n.__docgenInfo={description:"",displayName:"Shape",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}}}catch{}const _=c.forwardRef(({isElements:e},t)=>a.jsx("div",{ref:t,className:p.frame,children:e.map((i,r)=>a.jsx("div",{className:p.frame__row,children:i.map((l,s)=>a.jsx(n,{id:`${r}_${s}`,isActive:!!e[r][s]},`${r}_${s}_shape`))},`${r}_frame_row`))}));try{_.displayName="Frame",_.__docgenInfo={description:"",displayName:"Frame",props:{isElements:{defaultValue:null,description:"",name:"isElements",required:!0,type:{name:"number[][]"}}}}}catch{}const R=({isArr:e})=>{const t=c.useRef(null),[i]=c.useState(e);return a.jsx(E,{store:w,children:a.jsx(_,{ref:t,isElements:i})})},z={title:"Example/Frame",component:R,decorators:[y],tags:["autodocs"],parameters:{},argTypes:{}},o={args:{isArr:[[0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1]]}};var g,u,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isArr: [[0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]]
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const B=["FrameStoriesCollection"];export{o as FrameStoriesCollection,B as __namedExportsOrder,z as default};
//# sourceMappingURL=Frame.stories-e1a56f12.js.map
