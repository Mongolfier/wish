import{j as g}from"./jsx-runtime-u17CrQMm.js";const h="_button_1h009_1",y="_primary_1h009_39",_="_secondary_1h009_57",v="_ghost_1h009_75",b="_sm_1h009_95",S="_md_1h009_105",f="_lg_1h009_115",o={button:h,primary:y,secondary:_,ghost:v,sm:b,md:S,lg:f};function c({variant:i="primary",size:l="md",children:m,className:d,...u}){const p=[o.button,o[i],o[l],d].filter(Boolean).join(" ");return g.jsx("button",{className:p,...u,children:m})}c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const z={title:"Components/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["sm","md","lg"]}}},e={args:{children:"Button",variant:"primary"}},r={args:{children:"Button",variant:"secondary"}},a={args:{children:"Button",variant:"ghost"}},s={args:{children:"Small",size:"sm"}},t={args:{children:"Large",size:"lg"}},n={args:{children:"Disabled",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    size: 'lg'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const x=["Primary","Secondary","Ghost","Small","Large","Disabled"];export{n as Disabled,a as Ghost,t as Large,e as Primary,r as Secondary,s as Small,x as __namedExportsOrder,z as default};
