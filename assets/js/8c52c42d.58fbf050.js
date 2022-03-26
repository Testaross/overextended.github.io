"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[763],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),v=o,y=d["".concat(u,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return v}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/SetMetadata",id:"ox_inventory/Functions/Server/Inventory/SetMetadata",title:"SetMetadata",description:"Sets metadata on the specified slot.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/SetMetadata.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/SetMetadata",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetMetadata",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/SetMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SetDurability",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetDurability"},next:{title:"SwapSlots",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SwapSlots"}},s={},p=[],d={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets metadata on the specified slot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- slot: number\n-- metadata: table\nox_inventory:SetMetadata(inv, slot, metadata)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n\nlocal water = ox_inventory:Search(source, 1, 'water')\nfor k, v in pairs(water) do\n    print('\\n______________'..'\\n- index '..k)\n    print(v.name, 'slot: '..v.slot, 'metadata: '..json.encode(v.metadata))\n    water = v\nend\nwater.metadata.type = 'clean'\nox_inventory:SetMetadata(source, water.slot, water.metadata)\nprint(('modified %sx water in slot %s with new metadata'):format(water.count, water.slot))\n")))}v.isMDXComponent=!0}}]);