"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3287],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),v=o,f=m["".concat(u,".").concat(v)]||m[v]||p[v]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return v}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},u=void 0,s={unversionedId:"ox_inventory/Functions/Server/Inventory/RemoveItem",id:"ox_inventory/Functions/Server/Inventory/RemoveItem",title:"RemoveItem",description:"Removes the specified item from the specified inventory.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/RemoveItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/RemoveItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/RemoveItem",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/RemoveItem.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RegisterStash",permalink:"/docs/ox_inventory/Functions/Server/Inventory/RegisterStash"},next:{title:"ReturnInventory",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ReturnInventory"}},l={},p=[],m={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes the specified item from the specified inventory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or table\n-- item: table or string\n-- count: number\n-- metadata: table or string (optional)\n-- slot: number (optional)\nexports.ox_inventory:RemoveItem(inv, item, count, metadata, slot)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Removes 1 water from the inventory\nexports.ox_inventory:RemoveItem(source, 'water', 1)\n")))}v.isMDXComponent=!0}}]);