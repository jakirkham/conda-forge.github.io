"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[5216],{78928:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(85893),a=i(11151);const s={title:"2016-05-09 Exceptional meeting regarding build customization",sidebar_position:1e3},o="2016-05-09 Exceptional meeting regarding build customization",r={id:"orga/minutes/2016-05-09",title:"2016-05-09 Exceptional meeting regarding build customization",description:"14:00 UTC",source:"@site/docs/orga/minutes/2016-05-09.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2016-05-09",permalink:"/docs/orga/minutes/2016-05-09",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1e3,frontMatter:{title:"2016-05-09 Exceptional meeting regarding build customization",sidebar_position:1e3},sidebar:"defaultSidebar",previous:{title:"2016-04-29",permalink:"/docs/orga/minutes/2016-04-29"},next:{title:"2016-05-13",permalink:"/docs/orga/minutes/2016-05-13"}},l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",u:"u",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"exceptional-meeting-regarding-build-customization"})}),"\n",(0,t.jsx)(n.h1,{id:"2016-05-09-exceptional-meeting-regarding-build-customization",children:"2016-05-09 Exceptional meeting regarding build customization"}),"\n",(0,t.jsx)(n.p,{children:"14:00 UTC"}),"\n",(0,t.jsx)(n.p,{children:"Hangout link: ???"}),"\n",(0,t.jsx)(n.p,{children:"Attendees: Michael Sarahan, Ray Donnelly, Kale Franz, Michael Grant, Ullrich Koethe, Stuart Berg, Phil Elson, Mark Wiebe"}),"\n",(0,t.jsx)(n.p,{children:"Agenda/Minutes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Version parameterization:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"*   MichaelS:  proposing to have dependency resolution become part of meta.yaml  rendering.  May require extra (3rd) jinja rendering pass.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Need to know dependencies before Jinja templates can be fully expressed (main issue in #747)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Phil: not good, because you can\x19t differentiate between a manual entry of a value, and a templated entry of a value."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"    *   Don\x19t know which ones are important for build string\n\n            *   Build strings only matter when we have a build matrix; there to disambiguate\n*   MichaelS proposes manual specification of entries in build string\n*   Ullrich: if build strings just disambiguate, why not use hash?\n\n                    *   MichaelS: hash fine, but needs to be reproducible.\n\n    *   Heart of issue is that matrix build tools need some way to understand what parameterizes the build matrix.\n\n            *   MichaelS  offered that no matter what solution we settle on, there will be  something readily inspectable.  Maybe this can feed into automatically  creating the build string.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If recipe-local config.yaml is needed, Kale asks why not include it directly in meta.yaml\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"*   Not  sure what use case necessitates recipe-local config.yaml (global one is  agreed upon by all).  MichaelS OK with meta.yaml modifications if need  be.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Phil points out that global config.yaml might still need code changes for new versions of, say, Python.\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"*   MichaelS  says no, there\x19s surely ways we can express things like \n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"latest 2  versions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["just question of how to technically achieve.\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:" *   Ray:  filter things out of global config.yaml when they are not used in a  recipe (so that matrix dimensions are not needlessly added)\n\n         *   Ullrich:  However, one must be careful to not filter out indirect dependencies  that are not explicitly named in meta.yaml, but were intentionally added  to config.yaml. (example: meta.yaml lists h5py as a requirement, and  config.yaml restricts the indirect hdf5 dependency to a particular  variant of the hdf5 package). It is safer to err on the \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"too much\nside."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Build environment specification:\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"*   Conda-build 848 has \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"bootstrap\nenvironment: user creates an env, that env is captured as build requirements for another recipe."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"            *   Phil: this ruins reproducibility, since it depends on the setup of the user\x19s system at build time.\n\n                    *   Stuart: we\x19re already not reproducible, and this bootstrap doesn\x19t make things worse.\n        *   MichaelS:  if this is used to hard-pin build-time dependencies, it may actually  help reproducibility.  Hard-pinnning at build time is orthogonal to this  PR, but may be easier to achieve with it.\n        *   Ullrich:  if the contents of the build environment are recorded in index.json,  one can recreate the bootstrap environment at any time (or equivalently,  create config.yaml from that information), subject to the degree of  accuracy of the recorded data (e.g. are the source channels recorded, or  only version numbers and build strings?)\n\n            *   MichaelS,  Kale concerned that people may include too many unnecessary packages in  build requirements this way, out of carelessness or ignorance\n\n                    *   Ullrich: not a big deal - runtime dependencies are what really matter.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compiler customization:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"*   Mark: 848 is OK, but how does it address compiler and build flags?\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.u,{children:(0,t.jsx)(n.a,{href:"https://github.com/conda/conda/issues/1959",children:"Conda 1959"})}),"  is example of build flags.  Uses bat/sh script at beginning of  bld.bat/build.sh.  Similar to Mark\x19s effort.  Don\x19t like having to add  that extra shell script, though - want native support"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"    *   MichaelS  offered integration with conda-build, when use cases are better  understood.  Some kind of hook to call standardized setup script.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ullrich:  The important aspect is that it should be easy for the conda-build user  to specify which setup script to use. Having specialized build packages  installed in a bootstrap environment seems to be an easy solution (e.g.  \x18conda create -n my_bootstrap_env visual-studio-build=12.0\x19 or \x18conda  create -n my_bootstrap_env visual-studio-build=12.0.debug\x19)"}),"\n",(0,t.jsx)(n.li,{children:"Ullrich points out that these packages also need to exclude use with other packages, as they are not compatible"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mark: would like to create easy to use instance of ",(0,t.jsx)(n.u,{children:(0,t.jsx)(n.a,{href:"http://vfxplatform.com/",children:"http://vfxplatform.com/"})})," using conda.  Wants to be in the loop as we get that functionality worked out."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ullrich: Critical requirements for the final solution (whatever it will be):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"    *   Build dependency customization must be possible for _any_  package, although it would be OK if it were a bit more complicated for  the less common situations. It is crucial to support two cases:\n\n            *   Customize _indirect _dependencies not specified in meta.yaml.\n*   Narrow dependencies listed in meta.yaml (e.g. \x18python 3.*\x19 => \x18python 3.5.*\x19).\n\n    *   Run  requirements must be specialized during the build such that version  resolution will only select compatible variants, even if active channels  offer newer, yet incompatible variants (right now I usually use \x18-c  ukoethe --override-channels\x19, but this is a pain).\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);