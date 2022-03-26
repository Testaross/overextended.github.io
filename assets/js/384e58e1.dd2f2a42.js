"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2597],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),v=o,f=m["".concat(u,".").concat(v)]||m[v]||l[v]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8546:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return v}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},u=void 0,s={unversionedId:"ox_inventory/Functions/Server/Inventory/CanSwapItem",id:"ox_inventory/Functions/Server/Inventory/CanSwapItem",title:"CanSwapItem",description:"Returns true if the item swap is possible based on inventory weight.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CanSwapItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CanCarryItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem"},next:{title:"ClearInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ClearInventory"}},p={},l=[],m={toc:l};function v(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns true if the item swap is possible based on inventory weight."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- firstItem: string\n-- firstItemCount: number\n-- testItem: string\n-- testItemCount: number\nexports.ox_inventory:CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount)\n")))}v.isMDXComponent=!0}}]);