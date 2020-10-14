(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"fgf/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));var m=a("wx14"),n=a("zLVn"),d=(a("q1tI"),a("7ljp")),c=a("LHWr"),l=(a("qKvR"),{}),r={_frontmatter:l},b=c.a;function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(d.mdx)(b,Object(m.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"The module that allows access to specialized commands\nwithin the application. Various application state can be\nmodified or queried here."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"var PhotoshopCore = require('photoshop').core;\n")),Object(d.mdx)("h2",{id:"index"},"Index"),Object(d.mdx)("h3",{id:"functions"},"Functions"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#calculatedialogsize"}),"calculateDialogSize")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#endmodaltoolstate"}),"endModalToolState")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#getactivetool"}),"getActiveTool")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#getmenucommandstate"}),"getMenuCommandState")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#getmenucommandtitle"}),"getMenuCommandTitle")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#performmenucommand"}),"performMenuCommand")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",Object(m.a)({parentName:"li"},{href:"photoshopcore.md#showalert"}),"showAlert"))),Object(d.mdx)("h2",{id:"functions-1"},"Functions"),Object(d.mdx)("h3",{id:"calculatedialogsize"},"calculateDialogSize"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"calculateDialogSize"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"preferredSize"),": object, ",Object(d.mdx)("inlineCode",{parentName:"p"},"identifier?"),": string, ",Object(d.mdx)("inlineCode",{parentName:"p"},"minimumSize?"),": object): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹object›")),Object(d.mdx)("p",null,"Returns the effective size of a dialog."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"var idealSize = { width: 200, height: 500 }\n{ width, height} = await PhotoshopCore.calculateDialogSize(idealSize)\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("p",null,"▪ ",Object(d.mdx)("strong",{parentName:"p"},"preferredSize"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"height")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"width")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")))),Object(d.mdx)("p",null,"▪",Object(d.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(d.mdx)("strong",{parentName:"p"},"identifier"),": ",Object(d.mdx)("em",{parentName:"p"},"string")),Object(d.mdx)("p",null,"▪",Object(d.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(d.mdx)("strong",{parentName:"p"},"minimumSize"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"height")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"width")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"endmodaltoolstate"},"endModalToolState"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"endModalToolState"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"commit"),": boolean): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(d.mdx)("p",null,"End the current modal tool editing state."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"// close the modal dialog, cancelling changes\nawait PhotoshopCore.endModalToolState(false)\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"commit")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"boolean")))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getactivetool"},"getActiveTool"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"getActiveTool"),"(): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹object›")),Object(d.mdx)("p",null,"Returns information about the active Photoshop tool."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"{ title } = await PhotoshopCore.getActiveTool()\n")),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getmenucommandstate"},"getMenuCommandState"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"getMenuCommandState"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"options"),": object): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹boolean›")),Object(d.mdx)("p",null,"Returns whether a command menu item is available for invoking."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"// can a Fill be performed?\nvar canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("p",null,"▪ ",Object(d.mdx)("strong",{parentName:"p"},"options"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"commandID")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"scheduling?")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("a",Object(m.a)({parentName:"td"},{href:"../interfaces/scheduling.md"}),"Scheduling"))))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"getmenucommandtitle"},"getMenuCommandTitle"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"getMenuCommandTitle"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"options"),": object): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹string›")),Object(d.mdx)("p",null,"Returns the localized menu title of the menu command item."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("p",null,"▪ ",Object(d.mdx)("strong",{parentName:"p"},"options"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"commandID?")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"menuID?")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"scheduling?")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("a",Object(m.a)({parentName:"td"},{href:"../interfaces/scheduling.md"}),"Scheduling"))))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"performmenucommand"},"performMenuCommand"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"performMenuCommand"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"options"),": object): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹boolean›")),Object(d.mdx)("p",null,"Invokes the menu command via its ",Object(d.mdx)("inlineCode",{parentName:"p"},"commandID"),". Returns false\non failure, or if the command is not available."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"// select all\nawait PhotoshopCore.performMenuCommand({ commandID: 1017 })\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("p",null,"▪ ",Object(d.mdx)("strong",{parentName:"p"},"options"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"commandID")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"number")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"scheduling?")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("a",Object(m.a)({parentName:"td"},{href:"../interfaces/scheduling.md"}),"Scheduling"))))),Object(d.mdx)("hr",null),Object(d.mdx)("h3",{id:"showalert"},"showAlert"),Object(d.mdx)("p",null,"▸ ",Object(d.mdx)("strong",{parentName:"p"},"showAlert"),"(",Object(d.mdx)("inlineCode",{parentName:"p"},"options"),": object): ",Object(d.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(d.mdx)("p",null,"Show a generic alert box to the user. 'OK' to dismiss."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(m.a)({parentName:"pre"},{className:"language-javascript"}),"// script has completed.\nawait PhotoshopCore.showAlert({ message: 'Operation successful'})\n")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Parameters:")),Object(d.mdx)("p",null,"▪ ",Object(d.mdx)("strong",{parentName:"p"},"options"),": ",Object(d.mdx)("em",{parentName:"p"},"object")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Name"),Object(d.mdx)("th",Object(m.a)({parentName:"tr"},{align:null}),"Type"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"message")),Object(d.mdx)("td",Object(m.a)({parentName:"tr"},{align:null}),"string")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-modules-photoshopcore-md-b91f2515331edf105f4f.js.map