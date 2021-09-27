"use strict";(self.webpackChunkpooltogether=self.webpackChunkpooltogether||[]).push([[238],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=d(r),k=a,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(u,l(l({ref:e},s),{},{components:r})):n.createElement(u,l({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5060:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],p={},o=void 0,d={unversionedId:"reference/contracts/PrizeSplitStrategy",id:"reference/contracts/PrizeSplitStrategy",isDocsHomePage:!1,title:"PrizeSplitStrategy",description:"Functions",source:"@site/docs/reference/contracts/PrizeSplitStrategy.md",sourceDirName:"reference/contracts",slug:"/reference/contracts/PrizeSplitStrategy",permalink:"/protocol/reference/contracts/PrizeSplitStrategy",editUrl:"https://github.com/pooltogether/v4-docs/tree/main/docs/reference/contracts/PrizeSplitStrategy.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"DrawHistory",permalink:"/protocol/reference/contracts/DrawHistory"},next:{title:"Ticket",permalink:"/protocol/reference/contracts/Ticket"}},s=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"distribute",id:"distribute",children:[]},{value:"prizeSplits",id:"prizesplits",children:[]},{value:"prizeSplit",id:"prizesplit",children:[]},{value:"setPrizeSplits",id:"setprizesplits",children:[]},{value:"setPrizeSplit",id:"setprizesplit",children:[]},{value:"owner",id:"owner",children:[]},{value:"renounceOwnership",id:"renounceownership",children:[]},{value:"transferOwnership",id:"transferownership",children:[]}]},{value:"Events",id:"events",children:[{value:"Distributed",id:"distributed",children:[]},{value:"PrizeSplitAwarded",id:"prizesplitawarded",children:[]},{value:"PrizeSplitSet",id:"prizesplitset",children:[]},{value:"PrizeSplitRemoved",id:"prizesplitremoved",children:[]},{value:"OwnershipTransferred",id:"ownershiptransferred",children:[]}]}],m={toc:s};function c(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n    contract IPrizePool _prizePool\n  ) external\n")),(0,i.kt)("p",null,"Initialize the PrizeSplitStrategy smart contract."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_prizePool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IPrizePool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PrizePool contract address")))),(0,i.kt)("h3",{id:"distribute"},"distribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function distribute(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"Capture the award balance and distribute to prize splits."),(0,i.kt)("p",null,"   Capture the award balance and award tokens using the linked PrizePool."),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Total")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"prize amount captured via prizePool.captureAwardBalance()")))),(0,i.kt)("h3",{id:"prizesplits"},"prizeSplits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prizeSplits(\n  ) external returns (struct PrizeSplit.PrizeSplitConfig[])\n")),(0,i.kt)("p",null,"Read all prize splits configs."),(0,i.kt)("p",null,"Read all PrizeSplitConfig structs stored in _prizeSplits."),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_prizeSplits")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of PrizeSplitConfig structs")))),(0,i.kt)("h3",{id:"prizesplit"},"prizeSplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prizeSplit(\n    uint256 prizeSplitIndex\n  ) external returns (struct PrizeSplit.PrizeSplitConfig)\n")),(0,i.kt)("p",null,"Read prize split config from active PrizeSplits."),(0,i.kt)("p",null,"Read PrizeSplitConfig struct from _prizeSplits array."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prizeSplitIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Index position of PrizeSplitConfig")))),(0,i.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PrizeSplitConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Single prize split config")))),(0,i.kt)("h3",{id:"setprizesplits"},"setPrizeSplits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPrizeSplits(\n    struct PrizeSplit.PrizeSplitConfig[] newPrizeSplits\n  ) external\n")),(0,i.kt)("p",null,"Set and remove prize split(s) configs."),(0,i.kt)("p",null,"Set and remove prize split configs by passing a new PrizeSplitConfig structs array. Will remove existing PrizeSplitConfig(s) if passed array length is less than existing _prizeSplits length."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newPrizeSplits")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct PrizeSplit.PrizeSplitConfig[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of PrizeSplitConfig structs")))),(0,i.kt)("h3",{id:"setprizesplit"},"setPrizeSplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setPrizeSplit(\n    struct PrizeSplit.PrizeSplitConfig prizeStrategySplit,\n    uint8 prizeSplitIndex\n  ) external\n")),(0,i.kt)("p",null,"Updates a previously set prize split config."),(0,i.kt)("p",null,"Updates a prize split config by passing a new PrizeSplitConfig struct and current index position. Limited to contract owner."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prizeStrategySplit")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct PrizeSplit.PrizeSplitConfig"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PrizeSplitConfig config struct")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prizeSplitIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Index position of PrizeSplitConfig to update")))),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function owner(\n  ) public returns (address)\n")),(0,i.kt)("p",null,"Returns the address of the current owner."),(0,i.kt)("h3",{id:"renounceownership"},"renounceOwnership"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function renounceOwnership(\n  ) public\n")),(0,i.kt)("p",null,"Leaves the contract without owner. It will not be possible to call\n",(0,i.kt)("inlineCode",{parentName:"p"},"onlyOwner")," functions anymore. Can only be called by the current owner.\nNOTE: Renouncing ownership will leave the contract without an owner,\nthereby removing any functionality that is only available to the owner."),(0,i.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferOwnership(\n  ) public\n")),(0,i.kt)("p",null,"Transfers ownership of the contract to a new account (",(0,i.kt)("inlineCode",{parentName:"p"},"newOwner"),").\nCan only be called by the current owner."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"distributed"},"Distributed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Distributed(\n    uint256 totalPrizeCaptured\n  )\n")),(0,i.kt)("p",null,"Emit when a strategy captures award amount from PrizePool."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"totalPrizeCaptured")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total prize captured from PrizePool")))),(0,i.kt)("h3",{id:"prizesplitawarded"},"PrizeSplitAwarded"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PrizeSplitAwarded(\n    address user,\n    uint256 prizeAwarded,\n    contract IControlledToken token\n  )\n")),(0,i.kt)("p",null,"Emit when an individual prize split is awarded."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"User address being awarded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prizeAwarded")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Token prize amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"contract IControlledToken"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Token awarded address")))),(0,i.kt)("h3",{id:"prizesplitset"},"PrizeSplitSet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PrizeSplitSet(\n    address target,\n    uint16 percentage,\n    uint8 token,\n    uint256 index\n  )\n")),(0,i.kt)("p",null,"Emitted when a PrizeSplitConfig config is added or updated."),(0,i.kt)("p",null,"Emitted when aPrizeSplitConfig config is added or updated in setPrizeSplits or setPrizeSplit."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address of prize split recipient")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"percentage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Percentage of prize split. Must be between 0 and 1000 for single decimal precision")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Index (0 or 1) of token in the prizePool.tokens mapping")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Index of prize split in the prizeSplts array")))),(0,i.kt)("h3",{id:"prizesplitremoved"},"PrizeSplitRemoved"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event PrizeSplitRemoved(\n    uint256 target\n  )\n")),(0,i.kt)("p",null,"Emitted when a PrizeSplitConfig config is removed."),(0,i.kt)("p",null,"Emitted when a PrizeSplitConfig config is removed from the _prizeSplits array."),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Index of a previously active prize split config")))),(0,i.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event OwnershipTransferred(\n  )\n")))}c.isMDXComponent=!0}}]);