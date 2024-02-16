"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[1933],{22679:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(85893),o=t(11151);const s={title:"2018-10-30 conda-forge meeting",sidebar_position:1e3},r="2018-10-30 conda-forge meeting",c={id:"orga/minutes/2018-10-30",title:"2018-10-30 conda-forge meeting",description:"Pinned Items",source:"@site/docs/orga/minutes/2018-10-30.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2018-10-30",permalink:"/docs/orga/minutes/2018-10-30",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1e3,frontMatter:{title:"2018-10-30 conda-forge meeting",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"2018-10-02 conda-forge meeting",permalink:"/docs/orga/minutes/2018-10-02"},next:{title:"2018-11-13 conda-forge meeting",permalink:"/docs/orga/minutes/2018-11-13"}},l={},a=[];function d(n){const e={a:"a",del:"del",h1:"h1",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{id:"conda-forge-meeting"})}),"\n",(0,i.jsx)(e.h1,{id:"2018-10-30-conda-forge-meeting",children:"2018-10-30 conda-forge meeting"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Pinned Items"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Zoom instructions: ",(0,i.jsx)(e.a,{href:"https://paper.dropbox.com/doc/How-to-connect-to-zoom-odl94oveHyiRv6UqTtZE5",children:"+How to connect to zoom"})]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"New items"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["migrate r-base to ",(0,i.jsx)(e.strong,{children:"x.x"})," and ",(0,i.jsx)(e.strong,{children:"noarch: generic"}),", see ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/r-base-feedstock/pull/60",children:"https://github.com/conda-forge/r-base-feedstock/pull/60"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Nobody in the meeting really knows anything about this. Follow up with Isuru, Ray, \u2026?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Previous items"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Compiler rebuild status\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"python done for both compiler stacks"}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.del,{children:"pending: openblas (numeric stack currently held up)"})}),"\n",(0,i.jsx)(e.li,{children:"Qt: try to build on Azure?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["New approach to reducing CI load ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/647",children:"https://github.com/conda-forge/conda-forge.github.io/issues/647"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Might be possible to not be totally insecure with work. But nobody is volunteering to do that work right now. :)"}),"\n",(0,i.jsx)(e.li,{children:"Pushing PR builds to a staging channel might be a nice UX improvement so you can test anyway."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Copying packages to gcc7 label ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/issues/892",children:"https://github.com/conda-forge/conda-smithy/issues/892"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"MPI metapackage"}),"\n",(0,i.jsx)(e.li,{children:"Just wait for new conda 3.6 with strict channel priority, and then add main label to those builds"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Mergify = auto-merge version bump PRs when CIs pass?\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-maintenance/issues/49",children:"https://github.com/conda-forge/conda-forge-maintenance/issues/49"})}),"\n",(0,i.jsx)(e.li,{children:"Worry about bot not detecting dependency changes"}),"\n",(0,i.jsx)(e.li,{children:"Definitely opt-in only at first"}),"\n",(0,i.jsx)(e.li,{children:"One possibility: only after an approved review (so you can say \u201cmerge assuming CIs pass\u201d)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Add overlinking error flag by default?"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);