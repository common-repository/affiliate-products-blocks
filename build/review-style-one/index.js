(()=>{var e,t={690:(e,t,a)=>{"use strict";const r=window.wp.blocks,l=JSON.parse('{"apiVersion":2,"name":"afpb/review-style-one","version":"0.1.0","title":"Review #1","category":"affiliaterg","description":"Product full review","supports":{"html":false,"anchor":true},"attributes":{"uniqueId":{"type":"string"},"boxBorder":{"type":"object","default":{"width":"1px","style":"solid","color":"#d7b837"}},"boxBorderRadius":{"type":"number","default":5},"boxBg":{"type":"string","default":"#ffffff"},"showBadge":{"type":"boolean","default":true},"badgeText":{"type":"string","default":"FEATURED"},"badgeColor":{"type":"string","default":"#ffffff"},"badgeBg":{"type":"string","default":"#d7b837"},"showRating":{"type":"boolean","default":true},"rating":{"type":"number","default":5},"title":{"type":"string"},"titleTag":{"type":"string","default":"h2"},"titleColor":{"type":"string","default":"#333333"},"description":{"type":"string"},"descriptionColor":{"type":"string","default":"#333333"},"url":{"type":"string"},"id":{"type":"number"},"alt":{"type":"string"},"photoReversePosition":{"type":"boolean","default":false},"propsConsBorder":{"type":"object","default":{"width":"1px","style":"solid","color":"#d7b837"}},"propsConsBorderRadius":{"type":"number","default":5},"propsConsBg":{"type":"string","default":"#ffffff"},"propsList":{"type":"string"},"propsListColor":{"type":"string","default":"#333333"},"propsIconColor":{"type":"string","default":"#027000"},"consList":{"type":"string"},"consListColor":{"type":"string","default":"#333333"},"consIconColor":{"type":"string","default":"#a5001a"},"btnLabel":{"type":"string","default":"Buy Now"},"btnLink":{"type":"string","default":"#"},"newTabTarget":{"type":"boolean","default":false},"color":{"type":"string","default":"#ffffff"},"bgColor":{"type":"string","default":"#d59215"},"hoverColor":{"type":"string","default":"#ffffff"},"hoverBgColor":{"type":"string","default":"#000000"},"border":{"type":"object","default":{"width":"0px","style":"solid","color":"#d59215"}},"hoverBorderColor":{"type":"string","default":"#d59215"},"borderRadius":{"type":"number","default":5}},"textdomain":"affiliaterg","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.wp.element,n=window.wp.i18n;var i=a(503),c=a.n(i);const s=window.wp.blockEditor,d=window.wp.components,{__}=wp.i18n,f=[{name:__("Black","affiliaterg"),color:"#333333"},{name:__("White","affiliaterg"),color:"#ffffff"},{name:__("Red","affiliaterg"),color:"#a5001a"},{name:__("Green","affiliaterg"),color:"#027000"},{name:__("Light Violet","affiliaterg"),color:"#90b1f5"},{name:__("Yellow","affiliaterg"),color:"#d7b837"}],{Fragment:p}=wp.element;(0,r.registerBlockType)(l,{icon:{src:"analytics",foreground:"#d59215"},edit:function(e){let{attributes:t,setAttributes:a,clientId:r}=e;const{uniqueId:l,boxBorder:i,boxBorderRadius:u,boxBg:b,showBadge:m,badgeText:_,badgeColor:g,badgeBg:v,showRating:y,rating:h,title:C,titleTag:E,titleColor:w,description:N,descriptionColor:O,url:R,id:P,alt:B,photoReversePosition:x,propsConsBorder:k,propsConsBorderRadius:T,propsConsBg:$,propsList:j,propsListColor:L,propsIconColor:S,consList:I,consListColor:A,consIconColor:H,btnLabel:M,btnLink:D,newTabTarget:G,color:U,bgColor:W,hoverColor:q,hoverBgColor:F,border:V,hoverBorderColor:Y,borderRadius:J}=t;return a({uniqueId:r.slice(0,8)}),(0,o.createElement)(p,null,(0,o.createElement)("style",null,`.afpb__btn_${l}:hover{ color: ${q} !important; background-color: ${F} !important; border-color: ${Y} !important; }`,`#afpb__props_${l} li:before{ color: ${S} !important;}`,`#afpb__cons_${l} li:before{ color: ${H} !important;}`),(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Product Info Box","affiliaterg"),initialOpen:!1},(0,o.createElement)(d.__experimentalBorderControl,{colors:f,label:(0,n.__)("Border","affiliaterg"),onChange:e=>a({boxBorder:e}),value:i,withSlider:!0}),(0,o.createElement)("div",{className:"afpb__divider"}),(0,o.createElement)(d.RangeControl,{label:(0,n.__)("Border Radius","affiliaterg"),value:u,onChange:e=>a({boxBorderRadius:e}),min:0,max:100}),(0,o.createElement)("div",{className:"afpb__divider"}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Background Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:b,onChange:e=>a({boxBg:e}),colors:f,clearable:!1})),(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Product Ribbon","affiliaterg"),initialOpen:!1},(0,o.createElement)(d.ToggleControl,{label:(0,n.__)("Show Ribbon","affiliaterg"),checked:m,onChange:()=>a({showBadge:!m})}),(0,o.createElement)("div",{className:"afpb__divider"}),m&&(0,o.createElement)(p,null,(0,o.createElement)(d.TextControl,{label:(0,n.__)("Ribbon Text","affiliaterg"),onChange:e=>a({badgeText:e}),value:_,placeholder:(0,n.__)("Ribbon Text","affiliaterg")}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:g,onChange:e=>a({badgeColor:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Background","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:v,onChange:e=>a({badgeBg:e}),colors:f,clearable:!1}))),(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Product Content","affiliaterg"),initialOpen:!1},(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Product Title","affiliaterg")),(0,o.createElement)(d.SelectControl,{label:(0,n.__)("Tittle Tag","affiliaterg"),options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"}],onChange:e=>{a({titleTag:e})},value:E}),(0,o.createElement)("div",{className:"afpb__divider"}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:w,onChange:e=>a({titleColor:e}),colors:f,clearable:!1}),(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Product Description","affiliaterg")),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:O,onChange:e=>a({descriptionColor:e}),colors:f,clearable:!1}),(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Product Photo","affiliaterg")),(0,o.createElement)(d.ToggleControl,{label:(0,n.__)("Change Image Position","affiliaterg"),checked:x,onChange:()=>a({photoReversePosition:!x})})),(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Product Rating","affiliaterg"),initialOpen:!1},(0,o.createElement)(d.ToggleControl,{label:(0,n.__)("Show Rating","affiliaterg"),checked:y,onChange:()=>a({showRating:!y})}),y&&(0,o.createElement)(d.RangeControl,{label:(0,n.__)("Set Rating Value","affiliaterg"),value:h,onChange:e=>a({rating:e}),min:0,max:5,step:.1})),(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Props and Cons","affiliaterg"),initialOpen:!1},(0,o.createElement)(d.__experimentalBorderControl,{colors:f,label:(0,n.__)("Container Border","affiliaterg"),onChange:e=>a({propsConsBorder:e}),value:k,withSlider:!0}),(0,o.createElement)("div",{className:"afpb__divider"}),(0,o.createElement)(d.RangeControl,{label:(0,n.__)("Border Radius","affiliaterg"),value:T,onChange:e=>a({propsConsBorderRadius:e}),min:0,max:100}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Background Color","affiliaterg")),(0,o.createElement)(d.ColorPalette,{value:$,onChange:e=>a({propsConsBg:e}),colors:f,clearable:!1}),(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Props","affiliaterg")),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Icon Color","affiliaterg")),(0,o.createElement)(d.ColorPalette,{value:S,onChange:e=>a({propsIconColor:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("List Color","affiliaterg")),(0,o.createElement)(d.ColorPalette,{value:L,onChange:e=>a({propsListColor:e}),colors:f,clearable:!1}),(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Cons","affiliaterg")),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Icon Color","affiliaterg")),(0,o.createElement)(d.ColorPalette,{value:H,onChange:e=>a({consIconColor:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("List Color","affiliaterg")),(0,o.createElement)(d.ColorPalette,{value:A,onChange:e=>a({consListColor:e}),colors:f,clearable:!1})),(0,o.createElement)(d.PanelBody,{title:(0,n.__)("Button Settings","affiliaterg"),initialOpen:!1},(0,o.createElement)(d.TextControl,{label:(0,n.__)("Label","affiliaterg"),onChange:e=>a({btnLabel:e}),value:M}),(0,o.createElement)(d.TextControl,{label:(0,n.__)("Link","affiliaterg"),onChange:e=>a({btnLink:e}),value:D}),(0,o.createElement)(d.ToggleControl,{label:(0,n.__)("Open in new tab","affiliaterg"),checked:G,onChange:()=>a({newTabTarget:!G})}),(0,o.createElement)("div",{className:"afpb__divider_bar"},(0,n.__)("Button Style","affiliaterg")),(0,o.createElement)(d.__experimentalBorderControl,{colors:f,label:(0,n.__)("Border","affiliaterg"),onChange:e=>a({border:e}),value:V,withSlider:!0}),(0,o.createElement)("div",{className:"afpb__divider"}),(0,o.createElement)(d.RangeControl,{label:(0,n.__)("Border Radius","affiliaterg"),value:J,onChange:e=>a({borderRadius:e}),min:0,max:100}),(0,o.createElement)("div",{className:"afpb__tabs_panel"},(0,o.createElement)(d.TabPanel,{activeClass:"active-tab",tabs:[{name:"normal",title:(0,n.__)("Normal","afpb-blocks"),className:"afpb__tab"},{name:"hover",title:(0,n.__)("Hover","afpb-blocks"),className:"afpb__tab"}]},(e=>"normal"===e.name?(0,o.createElement)(p,null,(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Text Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:U,onChange:e=>a({color:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Background Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:W,onChange:e=>a({bgColor:e}),colors:f,clearable:!1})):(0,o.createElement)(p,null,(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Text Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:q,onChange:e=>a({hoverColor:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Background Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:F,onChange:e=>a({hoverBgColor:e}),colors:f,clearable:!1}),(0,o.createElement)("p",{className:"afpb__label"},(0,n.__)("Border Color","afpb-blocks")),(0,o.createElement)(d.ColorPalette,{value:Y,onChange:e=>a({hoverBorderColor:e}),colors:f,clearable:!1}))))))),P&&(0,o.createElement)(s.BlockControls,null,(0,o.createElement)(d.ToolbarGroup,null,(0,o.createElement)(s.MediaUploadCheck,null,(0,o.createElement)(s.MediaUpload,{onSelect:e=>a({url:e.url,alt:e.alt,id:e.id}),allowedTypes:["image"],value:P,render:e=>{let{open:t}=e;return(0,o.createElement)(d.ToolbarButton,{label:(0,n.__)("Edit Image","affiliaterg"),onClick:t,icon:"edit"})}})))),(0,o.createElement)("div",(0,s.useBlockProps)(),m&&(0,o.createElement)("div",{className:"afpb__badge",style:{color:g,backgroundColor:v}},_),(0,o.createElement)("div",{className:"afpb__product_info "+(x?"afpb__product_info--reverse":""),style:{border:`${i.width} ${i.style} ${i.color}`,borderRadius:`${u}px`,backgroundColor:b}},(0,o.createElement)("div",{className:"product_photo"},R?(0,o.createElement)("img",{src:R,alt:B,className:`wp-image-${P}`}):(0,o.createElement)(s.MediaPlaceholder,{onSelect:e=>a({url:e.url,alt:e.alt,id:e.id}),onFilesPreUpload:e=>a({url:e.url,alt:e.alt,id:e.id}),onSelectURL:!1,allowedTypes:["image"],labels:{title:(0,n.__)("Add Product Image","affiliaterg")}})),(0,o.createElement)("div",{className:"product_content"},(0,o.createElement)(s.RichText,{tagName:E,value:C,onChange:e=>a({title:e}),className:"title_tag",placeholder:(0,n.__)("Product Title..","affiliaterg"),style:{color:w}}),y&&(0,o.createElement)("div",{className:"product_rating"},(0,o.createElement)("span",{className:"rating_value"},h),(0,o.createElement)(c(),{total:5,rating:h,interactive:!1})),(0,o.createElement)("div",{className:"product_description",style:{color:O}},(0,o.createElement)(s.RichText,{tagName:"p",value:N,multiline:"p",onChange:e=>a({description:e}),placeholder:(0,n.__)("Product Description..","affiliaterg")})))),(0,o.createElement)("div",{className:"afpb__props_cons",style:{backgroundColor:$,border:`${k.width} ${k.style} ${k.color}`,borderRadius:`${T}px`}},(0,o.createElement)("div",{className:"afpb__props_box"},(0,o.createElement)("div",{className:"afpb__icon",style:{border:`${k.width} ${k.style} ${k.color}`}},(0,o.createElement)("i",{className:"fa-solid fa-thumbs-up",style:{color:S}})),(0,o.createElement)("div",{className:"afpb__props_list",id:`afpb__props_${l}`,style:{color:L}},(0,o.createElement)(s.RichText,{tagName:"ul",multiline:"li",value:j,onChange:e=>a({propsList:e}),placeholder:(0,n.__)("add props..","affiliaterg")}))),(0,o.createElement)("div",{className:"afpb__cons_box"},(0,o.createElement)("div",{className:"afpb__icon",style:{border:`${k.width} ${k.style} ${k.color}`}},(0,o.createElement)("i",{className:"fa-solid fa-thumbs-down",style:{color:H}})),(0,o.createElement)("div",{className:"afpb__cons_list",id:`afpb__cons_${l}`,style:{color:A}},(0,o.createElement)(s.RichText,{tagName:"ul",multiline:"li",value:I,onChange:e=>a({consList:e}),placeholder:(0,n.__)("add cons..","affiliaterg")})))),(0,o.createElement)("a",{href:D,target:G?"_blank":"_self",rel:G?"noopener noreferrer":"noopener",className:`afpb__btn afpb__btn_${l}`,style:{color:U,backgroundColor:W,border:`${V.width} ${V.style} ${V.color}`,borderRadius:`${J}px`}},M)))},save:function(e){let{attributes:t}=e;const{uniqueId:a,boxBorder:r,boxBorderRadius:l,boxBg:n,showBadge:i,badgeText:c,badgeColor:d,badgeBg:f,showRating:p,rating:u,title:b,titleTag:m,titleColor:_,description:g,descriptionColor:v,url:y,id:h,alt:C,photoReversePosition:E,propsConsBorder:w,propsConsBorderRadius:N,propsConsBg:O,propsList:R,propsListColor:P,propsIconColor:B,consList:x,consListColor:k,consIconColor:T,btnLabel:$,btnLink:j,newTabTarget:L,color:S,bgColor:I,border:A,borderRadius:H}=t;return(0,o.createElement)("div",s.useBlockProps.save(),i&&(0,o.createElement)("div",{className:"afpb__badge",style:{color:d,backgroundColor:f}},c),(0,o.createElement)("div",{className:"afpb__product_info "+(E?"afpb__product_info--reverse":""),style:{border:`${r.width} ${r.style} ${r.color}`,borderRadius:`${l}px`,backgroundColor:n}},(0,o.createElement)("div",{className:"product_photo"},y&&(0,o.createElement)("img",{src:y,alt:C,className:`wp-image-${h}`})),(0,o.createElement)("div",{className:"product_content"},(0,o.createElement)(s.RichText.Content,{tagName:m,value:b,className:"title_tag",style:{color:_}}),p&&(0,o.createElement)("div",{className:"product_rating"},(0,o.createElement)("span",{className:"rating_value"},u),(0,o.createElement)("div",{className:"review-rating","data-rate-value":u})),(0,o.createElement)("div",{className:"product_description",style:{color:v}},(0,o.createElement)(s.RichText.Content,{tagName:"p",value:g,multiline:"p"})))),(0,o.createElement)("div",{className:"afpb__props_cons",style:{backgroundColor:O,border:`${w.width} ${w.style} ${w.color}`,borderRadius:`${N}px`}},(0,o.createElement)("div",{className:"afpb__props_box"},(0,o.createElement)("div",{className:"afpb__icon",style:{border:`${w.width} ${w.style} ${w.color}`}},(0,o.createElement)("i",{className:"fa-solid fa-thumbs-up",style:{color:B}})),(0,o.createElement)("div",{className:"afpb__props_list",id:`afpb__props_${a}`,style:{color:P}},(0,o.createElement)(s.RichText.Content,{tagName:"ul",multiline:"li",value:R}))),(0,o.createElement)("div",{className:"afpb__cons_box"},(0,o.createElement)("div",{className:"afpb__icon",style:{border:`${w.width} ${w.style} ${w.color}`}},(0,o.createElement)("i",{className:"fa-solid fa-thumbs-down",style:{color:T}})),(0,o.createElement)("div",{className:"afpb__cons_list",id:`afpb__cons_${a}`,style:{color:k}},(0,o.createElement)(s.RichText.Content,{tagName:"ul",multiline:"li",value:x})))),(0,o.createElement)("a",{href:j,target:L?"_blank":"_self",rel:L?"noopener noreferrer":"noopener",className:`afpb__btn afpb__btn_${a}`,style:{color:S,backgroundColor:I,border:`${A.width} ${A.style} ${A.color}`,borderRadius:`${H}px`}},$))}})},703:(e,t,a)=>{"use strict";var r=a(414);function l(){}function o(){}o.resetWarningCache=l,e.exports=function(){function e(e,t,a,l,o,n){if(n!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:l};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},503:(e,t,a)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}e=a.nmd(e),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Star",{enumerable:!0,get:function(){return s.default}}),t.default=v;var l,o,n,i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(l,n,i):l[n]=e[n]}return l.default=e,a&&a.set(e,l),l}(a(196)),c=f(a(697)),s=f(a(610)),d=["total","interactive","children","rating","onRate","onRating","onCancelRate"];function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){_(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function v(e){var t,a,r=this,l=e.total,o=e.interactive,n=e.children,c=e.rating,f=e.onRate,p=e.onRating,b=e.onCancelRate,_=function(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}(e,d),v=(t=(0,i.useState)({rating:e.rating,isRating:!1}),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,l,o=[],_n=!0,n=!1;try{for(a=a.call(e);!(_n=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){n=!0,l=e}finally{try{_n||null==a.return||a.return()}finally{if(n)throw l}}return o}}(t,a)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=v[0],h=v[1],C=y.rating,E=y.isRating,w=(0,i.useRef)(C),N=i.Children.toArray(n);function O(e){h((function(t){return m(m({},t),e)}))}function R(e,t){O({rating:e,isRating:!0}),p&&p(m(m({},t),{},{rating:e}))}function P(e,t){O({rating:e,isRating:!1}),w.current=e,f&&f(m(m({},t),{},{rating:e}))}(0,i.useEffect)((function(){O({rating:c})}),[c]);var B=Array.from(Array(l),(function(e,t){var a={isActive:!E&&C-t>=1,willBeActive:E&&t<C,isActiveHalf:!E&&C-t>=.5&&C-t<1,isDisabled:!o};return i.default.createElement("div",{key:"star-".concat(t),onClick:o?P.bind(r,t+1):null,onMouseOver:o?R.bind(r,t+1):null},N.length?i.default.cloneElement(N[t%N.length],a):i.default.createElement(s.default,a))}));return i.default.createElement("div",u({className:"react-rater"},o?{onMouseOut:function(){O({rating:w.current,isRating:!1}),b&&b({rating:C})}}:{},_),B)}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(v,"useState{[state, setState]({\n    rating: props.rating,\n    isRating: false\n  })}\nuseRef{lastRating}\nuseEffect{}"),v.propTypes={total:c.default.number,rating:c.default.number,interactive:c.default.bool,children:c.default.any,onRate:c.default.func,onRating:c.default.func,onCancelRate:c.default.func},v.defaultProps={total:5,rating:0,interactive:!0},(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(v,"Rater","/Users/simon/Develop/personal/react-rater/src/index.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},610:(e,t,a)=>{"use strict";e=a.nmd(e),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=n(a(196)),o=n(a(697));function n(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c=function(e){var t=Object.assign({},e),a={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},r=Object.keys(a).filter((function(a){return delete t[a],e[a]})).map((function(e){return a[e]})).join(" ");return l.default.createElement("div",i({className:"react-rater-star ".concat(r)},t),"★")};c.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},c.propTypes={isActive:o.default.bool,isActiveHalf:o.default.bool,willBeActive:o.default.bool,isDisabled:o.default.bool};var s,d,f=c,p=f;t.default=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"Star","/Users/simon/Develop/personal/react-rater/src/star.js"),s.register(f,"default","/Users/simon/Develop/personal/react-rater/src/star.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},196:e=>{"use strict";e.exports=window.React}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var o=a[e]={id:e,loaded:!1,exports:{}};return t[e](o,o.exports,r),o.loaded=!0,o.exports}r.m=t,e=[],r.O=(t,a,l,o)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){for(var[a,l,o]=e[d],i=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<n&&(n=o));if(i){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,l,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={846:0,405:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var l,o,[n,i,c]=a,s=0;if(n.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var d=c(r)}for(t&&t(a);s<n.length;s++)o=n[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},a=globalThis.webpackChunkboilerplate=globalThis.webpackChunkboilerplate||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=r.O(void 0,[405],(()=>r(690)));l=r.O(l)})();