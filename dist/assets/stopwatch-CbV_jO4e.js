import{r as c,j as t}from"./index-CojMY8IJ.js";import{A as l}from"./AdminSidebar-D5z5T3CT.js";import"./index-C4fDMG-i.js";const d=n=>{const e=Math.floor(n/3600),r=Math.floor(n%3600/60),a=n%60,o=e.toString().padStart(2,"0"),s=r.toString().padStart(2,"0"),i=a.toString().padStart(2,"0");return`${o}:${s}:${i}`},p=()=>{const[n,e]=c.useState(0),[r,a]=c.useState(!1),o=()=>{e(0),a(!1)};return c.useEffect(()=>{let s;return r&&(s=setInterval(()=>{e(i=>i+1)},1e3)),()=>{clearInterval(s)}},[r]),t.jsxs("div",{className:"admin-container",children:[t.jsx(l,{}),t.jsxs("main",{className:"dashboard-app-container",children:[t.jsx("h1",{children:"Stopwatch"}),t.jsx("section",{children:t.jsxs("div",{className:"stopwatch",children:[t.jsx("h2",{children:d(n)}),t.jsx("button",{onClick:()=>a(s=>!s),children:r?"Stop":"Start"}),t.jsx("button",{onClick:o,children:"Reset"})]})})]})]})};export{p as default};
