"use strict";(self.webpackChunkpooltogether=self.webpackChunkpooltogether||[]).push([[699],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5703:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],d={},o=void 0,s={unversionedId:"reference/contracts/TsunamiDrawCalculator",id:"reference/contracts/TsunamiDrawCalculator",isDocsHomePage:!1,title:"TsunamiDrawCalculator",description:"Functions",source:"@site/docs/reference/contracts/TsunamiDrawCalculator.md",sourceDirName:"reference/contracts",slug:"/reference/contracts/TsunamiDrawCalculator",permalink:"/protocol/reference/contracts/TsunamiDrawCalculator",editUrl:"https://github.com/pooltogether/v4-docs/tree/main/docs/reference/contracts/TsunamiDrawCalculator.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ticket",permalink:"/protocol/reference/contracts/Ticket"},next:{title:"YieldSourcePrizePool",permalink:"/protocol/reference/contracts/YieldSourcePrizePool"}},p=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"calculate",id:"calculate",children:[]},{value:"setDrawSettings",id:"setdrawsettings",children:[]},{value:"setClaimableDraw",id:"setclaimabledraw",children:[]},{value:"getDrawSettings",id:"getdrawsettings",children:[]},{value:"manager",id:"manager",children:[]},{value:"setManager",id:"setmanager",children:[]},{value:"owner",id:"owner",children:[]},{value:"renounceOwnership",id:"renounceownership",children:[]},{value:"transferOwnership",id:"transferownership",children:[]}]},{value:"Events",id:"events",children:[{value:"ManagerTransferred",id:"managertransferred",children:[]},{value:"OwnershipTransferred",id:"ownershiptransferred",children:[]},{value:"DrawSettingsSet",id:"drawsettingsset",children:[]},{value:"Initialized",id:"initialized",children:[]},{value:"ClaimableDrawSet",id:"claimabledrawset",children:[]}]}],c={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n    contract ITicket _ticket,\n    address _drawSettingsManager,\n    contract ClaimableDraw _claimableDraw\n  ) public\n")),(0,l.kt)("p",null,"Initializer sets the initial parameters"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_ticket")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ITicket"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ticket associated with this DrawCalculator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_drawSettingsManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address of the DrawSettingsManager. Can be different from the contract owner.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_claimableDraw")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ClaimableDraw"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ClaimableDraw associated with this DrawCalculator")))),(0,l.kt)("h3",{id:"calculate"},"calculate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function calculate(\n    address _user,\n    struct DrawLib.Draw[] _draws,\n    bytes _pickIndicesForDraws\n  ) external returns (uint96[])\n")),(0,l.kt)("p",null,"Calulates the prize amount for a user for Multiple Draws. Typically called by a ClaimableDraw."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_user")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User for which to calcualte prize amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_draws")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct DrawLib.Draw[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"draw array for which to calculate prize amounts for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pickIndicesForDraws")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The encoded pick indices for all Draws. Expected to be just indices of winning claims. Populated values must be less than totalUserPicks.")))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"An")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of amount of prizes awardable")))),(0,l.kt)("h3",{id:"setdrawsettings"},"setDrawSettings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setDrawSettings(\n    uint32 _drawId,\n    struct DrawLib.DrawSettings _drawSettings\n  ) external returns (bool success)\n")),(0,l.kt)("p",null,"Sets DrawSettings for a draw id. only callable by the owner or manager"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_drawId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the Draw")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_drawSettings")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct DrawLib.DrawSettings"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The DrawSettings to set")))),(0,l.kt)("h3",{id:"setclaimabledraw"},"setClaimableDraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setClaimableDraw(\n    contract ClaimableDraw _claimableDraw\n  ) external returns (contract ClaimableDraw)\n")),(0,l.kt)("p",null,"Sets DrawSettings for a draw id. only callable by the owner or manager"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_claimableDraw")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ClaimableDraw"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of the ClaimableDraw to update with the updated DrawSettings")))),(0,l.kt)("h3",{id:"getdrawsettings"},"getDrawSettings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getDrawSettings(\n    uint32 _drawId\n  ) external returns (struct DrawLib.DrawSettings)\n")),(0,l.kt)("p",null,"Gets the DrawSettings for a draw id"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_drawId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the Draw")))),(0,l.kt)("h3",{id:"manager"},"manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function manager(\n  ) public returns (address)\n")),(0,l.kt)("p",null,"Gets current _manager."),(0,l.kt)("p",null,"Returns current _manager address.1"),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Current")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"_manager address.")))),(0,l.kt)("h3",{id:"setmanager"},"setManager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setManager(\n    address _newManager\n  ) public returns (bool)\n")),(0,l.kt)("p",null,"Set or change of manager."),(0,l.kt)("p",null,"Throws if called by any account other than the owner."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_newManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"New _manager address.")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"to indicate if the operation was successful or not.")))),(0,l.kt)("h3",{id:"owner"},"owner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function owner(\n  ) public returns (address)\n")),(0,l.kt)("p",null,"Returns the address of the current owner."),(0,l.kt)("h3",{id:"renounceownership"},"renounceOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function renounceOwnership(\n  ) public\n")),(0,l.kt)("p",null,"Leaves the contract without owner. It will not be possible to call\n",(0,l.kt)("inlineCode",{parentName:"p"},"onlyOwner")," functions anymore. Can only be called by the current owner.\nNOTE: Renouncing ownership will leave the contract without an owner,\nthereby removing any functionality that is only available to the owner."),(0,l.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferOwnership(\n  ) public\n")),(0,l.kt)("p",null,"Transfers ownership of the contract to a new account (",(0,l.kt)("inlineCode",{parentName:"p"},"newOwner"),").\nCan only be called by the current owner."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"managertransferred"},"ManagerTransferred"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ManagerTransferred(\n    address newManager\n  )\n")),(0,l.kt)("p",null,"Emitted when _manager has been changed."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"new _manager address.")))),(0,l.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event OwnershipTransferred(\n  )\n")),(0,l.kt)("h3",{id:"drawsettingsset"},"DrawSettingsSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event DrawSettingsSet(\n  )\n")),(0,l.kt)("p",null,"Emitted when the DrawParams are set/updated"),(0,l.kt)("h3",{id:"initialized"},"Initialized"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Initialized(\n  )\n")),(0,l.kt)("p",null,"Emitted when the contract is initialized"),(0,l.kt)("h3",{id:"claimabledrawset"},"ClaimableDrawSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ClaimableDrawSet(\n  )\n")),(0,l.kt)("p",null,"Emitted when the claimableDraw is set/updated"))}m.isMDXComponent=!0}}]);