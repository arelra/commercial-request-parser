import{r as p,j as r,a as l,T as v,b as q,c as f,d as m,R as x,e as N,f as T}from"./vendor.f28711ae.js";const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}};O();const P=t=>t.length<=80?t:t.substring(0,76)+"...",C=t=>t.length>=10?t.slice(0,9).concat("..."):t,d=(t,s,i)=>Object.keys(t).sort((n,e)=>n.localeCompare(e)).reduce((n,e)=>{const a=t[e];return i?n[e]=typeof a=="string"||Array.isArray(a)?"":a:s?n[e]=typeof a=="string"?P(a):Array.isArray(a)?C(a):a:n[e]=a,n},{}),h=t=>{const s=t.substring(t.indexOf("?")+1);return decodeURIComponent(s).split("&").map(decodeURIComponent)},g=t=>{const s=decodeURIComponent(t);return console.log(s),s.split("&").reduce((n,e)=>{const[a,o]=e.split("=");return o.includes(",")?n[a]=o.split(","):n[a]=o,n},{})},y=(t,s,i)=>{t&&t[s]&&(t[s]=i(t[s]))},b=(t,s,i)=>{let n={};return h(t).forEach(e=>{var o;const a=e.indexOf("=");if(e.startsWith("embed_config")){const u=JSON.parse(e.substring(a+1));y((o=u==null?void 0:u.adsConfig)==null?void 0:o.adTagParameters,"cust_params",c=>d(g(c),s,i)),y(u==null?void 0:u.adsConfig,"adTagParameters",c=>d(c,s,i)),n.embed_config=d(u,s,i)}else n[e.substring(0,a)]=e.substring(a+1)}),n=d(n,s,i),JSON.stringify(n,null,2)},_=(t,s,i)=>{let n={};return h(t).forEach(e=>{const a=e.indexOf("=");if(e.startsWith("cust_params")){const o=e.indexOf("="),u=e.substring(o+1);n.cust_params=d(g(u),s,i)}else n[e.substring(0,a)]=e.substring(a+1)}),n=d(n,s,i),JSON.stringify(n,null,2)};function S(t){t.preventDefault();const s=[...t.target.elements].filter(c=>c.id==="request-1")[0].value,i=[...t.target.elements].filter(c=>c.id==="request-2")[0].value,n=[...t.target.elements].filter(c=>c.id==="radio_truncate_values")[0].checked,e=[...t.target.elements].filter(c=>c.id==="radio_ignore_values")[0].checked,a=[...t.target.elements].filter(c=>c.id==="radio_type_youtube")[0].checked;let o="",u="";return s&&s.trim().length>0&&(o=a?b(s,n,e):_(s,n,e)),i&&i.trim().length>0&&(u=a?b(i,n,e):_(i,n,e)),[o,u]}function w({setParsed:t}){const[s,i]=p.exports.useState("");return r("div",{id:"controls-container",children:l("form",{id:"form",onSubmit:e=>{e==null||e.preventDefault(),t(S(e))},children:[l("div",{className:"request-container",children:[r("div",{children:"1"}),r("textarea",{className:"request",id:"request-1",rows:"1",cols:"50"})]}),l("div",{className:"request-container",children:[r("div",{children:"2"}),r("textarea",{className:"request",id:"request-2",rows:"1",cols:"50"})]}),l("div",{id:"controls",children:[r("input",{type:"radio",id:"radio_type_youtube",name:"radio_request_type",value:"radio_type_youtube",defaultChecked:!0}),l("label",{htmlFor:"radio_type_youtube",children:["YouTube embed request ",r("span",{className:"light",children:"(e.g. https://www.youtube.com/embed/3LtcTkRMI1w?embed_config...)"})]}),r("br",{}),r("input",{type:"radio",id:"radio_type_page_targeting",name:"radio_request_type",value:"radio_type_page_targeting"}),l("label",{htmlFor:"radio_type_page_targeting",children:["GAM Page Targeting ",r("span",{className:"light",children:"(e.g. https://securepubads.g.doubleclick.net/gampad/ads?...)"})]}),r("br",{}),r("input",{type:"checkbox",id:"radio_truncate_values",name:"radio_truncate_values",value:"radio_truncate_values",defaultChecked:!0}),r("label",{htmlFor:"radio_truncate",children:"Truncate long values"}),r("br",{}),r("input",{type:"checkbox",id:"radio_ignore_values",name:"radio_ignore_values",value:"radio_ignore_values",defaultChecked:!0}),r("label",{htmlFor:"radio_truncate",children:"Ignore values"}),r("br",{}),l("div",{id:"parse-button-container",children:[r("button",{type:"submit",children:"Parse"}),s&&r("span",{id:"error",children:s})]})]})]})})}function I({parsed:[t,s]}){return r("div",{className:"output-container",children:l(v,{children:[l(q,{children:[r(f,{children:"Parsed 1"}),r(f,{children:"Parsed 2"}),r(f,{children:"Diff"})]}),r(m,{children:l("div",{className:"output-request-container",children:[r("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:t,children:t}),r("div",{class:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(t)},children:"\u{1F4CB}"})]})}),r(m,{children:l("div",{className:"output-request-container",children:[r("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:s}),r("div",{class:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(s)},children:"\u{1F4CB}"})]})}),r(m,{children:r("div",{className:"diff-container",children:r(x,{oldValue:t,newValue:s,splitView:!0,showDiffOnly:!0,leftTitle:"Unmatched lines in 2",rightTitle:"Unmatched lines in 1",codeFoldMessageRenderer:i=>l("div",{className:"no-diff-msg",children:["Expand ",i," lines (no diff) ..."]})})})})]})})}function R(){const[t,s]=p.exports.useState([]);return l("div",{className:"app",children:[r("header",{children:"YouTube & GAM Request Differ"}),r(w,{setParsed:s}),r(I,{parsed:t})]})}N.render(r(T.StrictMode,{children:r(R,{})}),document.getElementById("root"));