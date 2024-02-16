"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[1232],{72191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(85893),o=t(11151);const a={authors:["cj-wright"],tags:["conda-forge"]},r="The API Territory and Version Number Map",s={permalink:"/blog/2020/10/02/versions",editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/main/blog/2020-10-02-versions.md",source:"@site/blog/2020-10-02-versions.md",title:"The API Territory and Version Number Map",description:"tl;dr Depending on specific version numbers of underlying libraries may",date:"2020-10-02T00:00:00.000Z",formattedDate:"October 2, 2020",tags:[{label:"conda-forge",permalink:"/blog/tags/conda-forge"}],readingTime:6.915,hasTruncateMarker:!0,authors:[{name:"Christopher J. 'CJ' Wright",title:"Member of conda-forge/core",url:"https://github.com/cj-wright",imageURL:"https://github.com/cj-wright.png",key:"cj-wright"}],frontMatter:{authors:["cj-wright"],tags:["conda-forge"]},unlisted:!1,prevItem:{title:"macOS ARM builds on conda-forge",permalink:"/blog/2020/10/29/macos-arm64"},nextItem:{title:"R 4.0 Migration Retrospective",permalink:"/blog/2020/07/11/r-4"}},c={authorsImageUrls:[void 0]},d=[{value:"What Constitutes a Good Version Number",id:"what-constitutes-a-good-version-number",level:2},{value:"Version Numbers and API Pinning",id:"version-numbers-and-api-pinning",level:2},{value:"A Potential Path Forward",id:"a-potential-path-forward",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"tl;dr Depending on specific version numbers of underlying libraries may\nbe too inaccurate and cause headaches as upstream libraries evolve and\nchange. A more detailed approach is needed. In this post I outline\ncurrent and potential work on a path towards a more complete inspection\nof requirements based on APIs and dynamic pinning of libraries."}),"\n",(0,i.jsx)(n.h2,{id:"what-constitutes-a-good-version-number",children:"What Constitutes a Good Version Number"}),"\n",(0,i.jsx)(n.p,{children:"Version numbers should constitute a set that has the following\nproperties"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The set must be unbounded"}),"\n",(0,i.jsx)(n.li,{children:"The set must be orderable (maybe)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['Of course sets that meet these requirements might not convey a lot of\ninformation about the software they represent other than if two things\nare equivalent and their comparative ages. Note that the requirement to\nbe orderable may not be needed, but is generally useful when considering\nthe idea of an "upgrade" since it provides a clear delineation between\nolder and newer packages. In many cases, the structure of the version\nnumber provides additional information. For some projects the version\nnumber includes the date of the release, often using ',(0,i.jsx)(n.a,{href:"https://calver.org/",children:"cal\nver"}),". Many projects use ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"semantic\nversioning"}),", which attempts to encode information\nabout the underlying source code's API in the version number."]}),"\n",(0,i.jsx)(n.h2,{id:"version-numbers-and-api-pinning",children:"Version Numbers and API Pinning"}),"\n",(0,i.jsx)(n.p,{children:"One of the most important places where version numbers are specified is\nduring the pinning of APIs. Source code often requires specific APIs\nfrom the libraries it uses. This requires a pin specifying which\nversions of the underlying libraries can be used. The package manager\nthen uses these pins to make certain a compatible environment is\ncreated."}),"\n",(0,i.jsxs)(n.p,{children:["However, these pins (or even the lack of pins) produce problems.\nFirstly, the pins are a one-time, local statement about the current and\nfuture, global ecosystem of packages. For instance a pin of ",(0,i.jsx)(n.code,{children:"scipy"})," to\nthe current major version number may not hold up over time, newer\nversions of ",(0,i.jsx)(n.code,{children:"scipy"})," may break the API while not changing the major\nversion number. Similarly the lack of pin for ",(0,i.jsx)(n.code,{children:"scipy"})," could be false as\nthe API breaks. Even pins that establish firm upper and lower bounds may\nbe false as new versions of the pinned library restore the missing API.\nThese issues are particularly problematic for dependency systems that\ntie the pins to a particular version of the source code, requiring a new\nversion to be created to update the pins. Conda-Forge is able to avoid\nsome of these issues via ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-repodata-patches-feedstock",children:"repodata\npatching"}),",\ndynamically updating a package's stated requirements. Overall this\nprocess is fraught, as each package depends on different portions of a\nlibrary's API, a version bump that breaks one package may leave others\nunscathed."]}),"\n",(0,i.jsx)(n.h2,{id:"a-potential-path-forward",children:"A Potential Path Forward"}),"\n",(0,i.jsxs)(n.p,{children:["All of the above issues are caused by the confusion of ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation",children:"the map for the\nterritory"}),".\nThe map, in this case the version number of a library, can not\naccurately represent the territory, the API itself. To fix this issue we\nneed a more accurate description of the territory. Achieving this will\nnot be easy, but I think there is an approach that gets close enough to\nlimit the number of errors."]}),"\n",(0,i.jsx)(n.p,{children:"We need a programmatic way to check if a particular library, for a\nparticular version, provides the required API. I think this can be\nachieved iteratively, with each step providing additional clarity and\ndifficulty of implementation. Note that in the steps below, I'm using\npython packaging as an example, but I imagine that these steps are\ngeneral enough to apply to other languages and ecosystems."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Determine which libraries are requirements of the code, this is\nprovided by tools like\n",(0,i.jsx)(n.a,{href:"https://github.com/ericdill/depfinder",children:"depfinder"})," and are starting\nto be integrated into the Conda-Forge bot systems (although they are\nstill highly experimental and being worked on)."]}),"\n",(0,i.jsxs)(n.li,{children:["Determine if the a version of the library provides the needed\nmodules. This could be accomplished by using depfinder to find the\nimports and use the mapping provided by\n",(0,i.jsx)(n.a,{href:"https://github.com/regro/libcfgraph/tree/master/import_maps",children:"libcfgraph"}),"\nbetween the import names and the versions of packages that ship\nthose imports."]}),"\n",(0,i.jsx)(n.li,{children:"Determine if an imported module provides the symbols being imported.\nThis would require a listing of all the symbols in a given python\nmodule, including top level scoped variables, function names, class\nnames, methods, etc."}),"\n",(0,i.jsx)(n.li,{children:"For callables determine if the used call signature matches the\nmethod or function definition."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/ericdill/depfinder",children:"depfinder"})," project has made\nsignificant advances along this path, providing an easy to use tool to\nextract accurate import and package requirement data from source code.\nDepfinder even has cases to handle imports that are within code blocks\nthat might make the requirement optional or use the python standard\nlibrary. Future work on depfinder, including using more accurate maps\nbetween imports and package names and providing metadata on package\nrequirements that are collectively exhaustive (for instance imports of\n",(0,i.jsx)(n.code,{children:"pyqt4"})," vs. ",(0,i.jsx)(n.code,{children:"pyqt5"})," in a ",(0,i.jsx)(n.code,{children:"try: except:"})," block), will provide even more\naccurate information on requirements."]}),"\n",(0,i.jsx)(n.p,{children:"At each one of the above stages we can provide significant value to\nusers, maintainers and source code authors by helping them to keep their\nrequirements consistent and warning when there are conflicts.\nConda-Forge can update its repodata as new versions of imported\nlibraries are created, to properly represent if that version is API\ncompatible with it's downstream consumers. Additionally the tables that\nlist all the symbols and call signatures can be provided to 3rd party\nconsumers that may want to patch their own metadata or check if a piece\nof source code is self consistent in its requirements. This will also\nhelp with the loosening of pins, creating more solvable environments for\nConda-Forge and other packaging ecosystems. Furthermore, as this tooling\nmatures and becomes more accurate it can be incorporated into the\nConda-Forge bot systems to automatically update dependencies during\nversion bumps and repodata patches, helping reduce maintenance burden."}),"\n",(0,i.jsx)(n.p,{children:"Tools built from the symbol table can also have impacts far beyond\nConda-Forge. For instance, the symbol tables could allow source code\nauthors to have a line by line inspection of their code, revealing which\nlines force the use of older or newer versions of dependencies. This\ncould enable large scale migrations of source code with surgical\nprecision, enabling developers to extract and re-write the few lines of\ncode preventing the use of a new version of a library."}),"\n",(0,i.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,i.jsx)(n.p,{children:"There are some important caveats to this approach that need to be kept\nin mind."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"All of this work is aimed at understanding the API of a given\nlibrary, this approach can not provide insight into the code inside\nof the API, or if changes there impact downstream consumers. For\ninstance, version updates that fix bugs and security flaws in\nlibrary code may not change the API at all. From this tooling's\nperspective there is no reason to upgrade since the API is not\ndifferent. Of course there is a strong reason to upgrade in this\ncase, since buggy or vulnerable libraries could be a huge headache\nand liability for downstream code and should be removed as quickly\nas possible."}),"\n",(0,i.jsx)(n.li,{children:"Some features may depend on broader adoption by the community. For\ninstance, this approach would benefit greatly from python type\nhints, since the API could be constrained down to the expected\ntypes. Such type constraints would provide much more accuracy to the\nAPI version range as any changes could be detected. However, type\nhints may not be adopted in the python community at a high enough\nrate to truly be useful for this application."}),"\n",(0,i.jsx)(n.li,{children:"Source code is fundamentally flexible. There may be knots of code\nthat even this approach could not cut through, especially as\nmultiple languages and runtime module loading come into the picture.\nMy personal hope would be that the code recognizes when these\nsituations occur, provides its best guess of what is going on, and\nprovides sufficient metadata to users so that they understand the\ndecreased accuracy of the results. Fundamentally the tooling can\nonly provide very educated guesses and context to users, who then\nneed to go figure out what is actually going on inside the code."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Version number based pins are imprecise representations of API\ncompatibility. More accurate representations based on source code\ninspection would make the Conda-Forge ecosystem more robust and flexible\nwhile reducing maintenance burden. Some of the path to achieving this is\nbuilt, and near future steps can be achieved with current tooling and\ndatabases."})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);