import{f as x,P as j,_ as b,j as s,S as m}from"./index-CojMY8IJ.js";import{A as g}from"./AdminSidebar-D5z5T3CT.js";import{L as e}from"./Charts-CvbZXJB7.js";import{g as C}from"./features-Bu0MAu08.js";import"./index-C4fDMG-i.js";const{last12Months:o}=C(),S=()=>{const{user:n}=x(t=>t.userReducer),{isLoading:l,data:r,error:c,isError:a}=j(n==null?void 0:n._id),i=(r==null?void 0:r.charts.products)||[],h=(r==null?void 0:r.charts.users)||[],d=(r==null?void 0:r.charts.revenue)||[],u=(r==null?void 0:r.charts.discount)||[];if(a){const t=c;b.error(t.data.message)}return s.jsxs("div",{className:"admin-container",children:[s.jsx(g,{}),s.jsxs("main",{className:"chart-container",children:[s.jsx("h1",{children:"Line Charts"}),l?s.jsx(m,{length:15}):s.jsxs(s.Fragment,{children:[s.jsxs("section",{children:[s.jsx(e,{data:h,label:"Users",borderColor:"rgb(53, 162, 255)",labels:o,backgroundColor:"rgba(53, 162, 255, 0.5)"}),s.jsx("h2",{children:"Active Users"})]}),s.jsxs("section",{children:[s.jsx(e,{data:i,backgroundColor:"hsla(269,80%,40%,0.4)",borderColor:"hsl(269,80%,40%)",labels:o,label:"Products"}),s.jsx("h2",{children:"Total Products (SKU)"})]}),s.jsxs("section",{children:[s.jsx(e,{data:d,backgroundColor:"hsla(129,80%,40%,0.4)",borderColor:"hsl(129,80%,40%)",label:"Revenue",labels:o}),s.jsx("h2",{children:"Total Revenue "})]}),s.jsxs("section",{children:[s.jsx(e,{data:u,backgroundColor:"hsla(29,80%,40%,0.4)",borderColor:"hsl(29,80%,40%)",label:"Discount",labels:o}),s.jsx("h2",{children:"Discount Allotted "})]})]})]})]})};export{S as default};
