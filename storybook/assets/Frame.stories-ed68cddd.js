import{j as r}from"./jsx-runtime-94f6e698.js";import{D as u}from"./app-74eb2f46.js";import{r as i}from"./index-8db94870.js";import{c as f}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";const h="_frame_n362r_1",y={frame:h},x="_shape_9oh1u_2",l={shape:x,"is-circle":"_is-circle_9oh1u_15","is-triangle":"_is-triangle_9oh1u_18","is-dead":"_is-dead_9oh1u_21","is-active":"_is-active_9oh1u_24"},c=({id:e,isActive:s})=>{const t=i.useRef(null);return r.jsx("td",{ref:t,id:e,className:f(l.shape,s&&l["is-active"])})};try{c.displayName="Shape",c.__docgenInfo={description:"",displayName:"Shape",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}}}catch{}const m=i.forwardRef(({isElements:e},s)=>r.jsx("table",{ref:s,className:y.frame,children:r.jsx("tbody",{children:e.map((t,a)=>r.jsx("tr",{children:t.map((E,n)=>r.jsx(c,{id:`${a}_${n}`,isActive:!!e[a][n]},`${a}_${n}_shape`))},`${a}_frame_row`))})}));try{m.displayName="Frame",m.__docgenInfo={description:"",displayName:"Frame",props:{isElements:{defaultValue:null,description:"",name:"isElements",required:!0,type:{name:"number[][]"}}}}}catch{}const g=({isArr:e})=>{const s=i.useRef(null),[t]=i.useState(e);return r.jsx(m,{ref:s,isElements:t})},N={title:"Example/Frame",component:g,decorators:[u],tags:["autodocs"],parameters:{},argTypes:{}},o={args:{isArr:[[0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1]]}};var p,d,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isArr: [[0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]]
  }
}`,...(_=(d=o.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};const $=["FrameStoriesCollection"];export{o as FrameStoriesCollection,$ as __namedExportsOrder,N as default};
//# sourceMappingURL=Frame.stories-ed68cddd.js.map
