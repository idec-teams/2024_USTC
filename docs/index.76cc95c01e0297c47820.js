"use strict";(self.webpackChunk_2024_ustc=self.webpackChunk_2024_ustc||[]).push([["index"],{6683:(t,e,s)=>{const n={mark:"welcome",text1:[{subtitle:"Abstract",text:"The synthesis yield of sakuranetin, a compound with extensive medical applications and potential, is constrained by the condensation reaction mediated by chalcone synthase. In recent years, directed evolution has emerged as a promising approach for enhancing protein performance; however, traditional directed evolution techniques encounter challenges in high-throughput screening. By integrating rational design and protein structure analysis, we have modified chalcone synthase and the naringenin sensors TtgR transcriptional repressors. We selected Vibrio natriegens as the host organism due to its superior growth rate and exceptional protein expression capabilities, successfully establishing sensor engineering within this framework. Additionally, codon optimization has been employed to enhance protein expression. This study aims to develop synthetic platforms for naringenin and sakuranetin. Furthermore, we have made preliminary advancements in the development of biosensors capable of endogenous detection, thereby facilitating directed evolution pathways for substances that are difficult to detect, thus highlighting the significant potential of V. natriegens and biosensor technology."}],title3:[{mark:"test1"}]};var i=s(9946),a=(s(756),s(8835)),r=s(4692);(0,a.A)(n),new i.A(n).$mount({target:document.body}),r("#welcome").replaceWith('<div id="welcome"><div class="scroll-message">滚动条不在顶部时的文字</div><div class="scroll-message">滚动条不在顶部时的文字</div><div class="scroll-message">滚动条不在顶部时的文字</div></div>'),r(document).ready((function(){0===r(window).scrollTop()?r(".scroll-message").removeClass("blur-fade-out").addClass("clear-fade-in"):r(".scroll-message").removeClass("clear-fade-in").addClass("blur-fade-out"),r(window).on("scroll",(function(){0===r(window).scrollTop()?r(".scroll-message").removeClass("blur-fade-out").addClass("clear-fade-in"):r(".scroll-message").removeClass("clear-fade-in").addClass("blur-fade-out")}))}))},9946:(t,e,s)=>{s.d(e,{A:()=>u});var n=s(898);class i extends((0,n.vt)([{t:"div",a:{class:"table-container"}},[{t:"div",a:{class:"table"}},{n:"list",t:1}]])){}class a extends((0,n.vt)([{t:"div",a:{class:[["table-title ",""],[["dif"]]]},e:[{l:"click",m:"scroll"}]},[["title"]]])){}var r=s(4692);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function o(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function c(t,e,s){return e&&o(t.prototype,e),s&&o(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var n=s.call(t,e||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}const u=c((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=new i;return r(".textbox-container").find("h1, h2").each((function(){var t=r(this).attr("id");t&&(r(this).is("h1")?e.list.push(new a({$data:{title:t,dif:"title"},$methods:{scroll:function(t){var e=t.state.$data.title.replace(/ /g,"\\ "),s=r("#"+e);r("html, body").animate({scrollTop:s.offset().top},800)}}})):r(this).is("h2")&&e.list.push(new a({$data:{title:t},$methods:{scroll:function(t){var e=t.state.$data.title.replace(/ /g,"\\ "),s=r("#"+e);r("html, body").animate({scrollTop:s.offset().top},800)}}})))})),e}))},756:(t,e,s)=>{var n=s(4692);n(document).ready((function(){n(document).on("scroll",(function(){var t=n(this).scrollTop(),e=n(window).height();n(".text h1, .text h2").each((function(){var e=n(this).position().top,s=n(this).parent(".text").outerHeight();if(t>=e-40&&t<e+s){var i=n(this).attr("id").trim(),a=n(".table .table-title").filter((function(){return n(this).text().trim()===i}));n(".table .table-title").removeClass("enlarged"),a.addClass("enlarged")}})),n(".text").each((function(){var s=n(this).offset().top;(s+n(this).outerHeight()<t||s>t+e)&&n(this).find("h1, h2").each((function(){var t=n(this).attr("id").trim();n(".table .table-title").filter((function(){return n(this).text().trim()===t})).removeClass("enlarged")}))}))})),n(".table-title").hover((function(){n(this).css("color","red")}),(function(){n(this).css("color","black")}))}))},8835:(t,e,s)=>{s.d(e,{A:()=>_});var n=s(3997),i=s(898);class a extends((0,i.vt)([{t:0},[{t:"ol"},[["text"]],{n:"ollist",t:1}],[{t:"br"}]])){}class r extends((0,i.vt)([{t:"li"},[["text"]],{n:"list",t:1}])){}class l extends((0,i.vt)([{t:0},[{t:"pre"},[["text"]],{n:"list",t:1}],[{t:"br"}]])){}class o extends((0,i.vt)([{t:0},[{t:"div",a:{class:"img",id:[0,[["image_name"]]]}},[{t:"img",a:{src:[0,[["src"]]]}}],[{t:"br"}],[{t:"p"},[["text"]],{n:"list",t:1}]],[{t:"br"}]])){}class c extends((0,i.vt)([{t:"h1",a:{id:[0,[["id"]]]}},[["title"]],{n:"list",t:1}])){}class d extends((0,i.vt)([{t:0},[{t:"h2",a:{id:[0,[["id"]]]}},[["subtitle"]],{n:"list",t:1}],[{t:"br"}]])){}class u extends((0,i.vt)([{t:0},[{t:"div",a:{class:"mark",id:[0,[["mark"]]]}}],[{t:"br"}]])){}class f extends((0,i.vt)([{t:"div",a:{class:"textbox-container"}},{n:"list",t:1}])){}class h extends((0,i.vt)([{t:0},[{t:"ul"},[["text"]],{n:"ullist",t:1}],[{t:"br"}]])){}class v extends((0,i.vt)([{t:"em"},[["text"]]])){}class p extends((0,i.vt)([{t:0},[["text"]]])){}class m extends((0,i.vt)([{t:"span",a:{class:[0,[["style"]]]}},[["text"]]])){}class x extends((0,i.vt)([{t:"strong"},[["text"]]])){}class b extends((0,i.vt)([{t:"a",a:{class:"citation",href:[0,[["href"]]]}},[{t:"sup"},"[",[["text"]],"]"]])){}class g extends((0,i.vt)([{t:"sub"},[["text"]]])){}class y extends((0,i.vt)([{t:"sup"},[["text"]]])){}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=s){var n,i,a,r,l=[],o=!0,c=!1;try{if(a=(s=s.call(t)).next,0===e){if(Object(s)!==s)return;o=!1}else for(;!(o=(n=a.call(s)).done)&&(l.push(n.value),l.length!==e);o=!0);}catch(t){c=!0,i=t}finally{try{if(!o&&null!=s.return&&(r=s.return(),Object(r)!==r))return}finally{if(c)throw i}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var s={}.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?$(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=Array(e);s<e;s++)n[s]=t[s];return n}function k(t,e,s){t.forEach((function(t){t.strong?s.list.push(new x({$data:{text:t.strong}})):t.em?s.list.push(new v({$data:{text:t.em}})):t.span?s.list.push(new m({$data:{text:t.span}})):t.sup?s.list.push(new y({$data:{text:t.sup}})):t.sub?s.list.push(new g({$data:{text:t.sub}})):t.citation?s.list.push(new b({$data:{text:t.citation.text,href:t.citation.href}})):s.list.push(new p({$data:{text:t.text}}))})),e.push(s)}const _=function(t){for(var e=new f,s=function(){var t=w(v[i],2),s=t[0],f=t[1];if("mark"===s)e.list.push(new u({$data:{mark:f}}));else{var p=new n.A({});f.forEach((function(t){var e=void 0!==t.mark,s=!e&&void 0!==t.src,n=!e&&!s&&void 0!==t.ollist,i=!n&&!e&&!s&&void 0!==t.ullist;if(!(i||e||s||n)){if(t.title)if("string"==typeof t.title)p.textlist.push(new c({$data:{title:t.title,id:t.title}}));else{var f="";t.title.forEach((function(t){for(var e=0,s=Object.entries(t);e<s.length;e++){var n=w(s[e],2),i=(n[0],n[1]);f+=i}}));var v=new c({$data:{id:f}});k(t.title,p.textlist,v)}if(t.subtitle)if("string"==typeof t.subtitle)p.textlist.push(new d({$data:{subtitle:t.subtitle,id:t.subtitle}}));else{var m="";t.subtitle.forEach((function(t){for(var e=0,s=Object.entries(t);e<s.length;e++){var n=w(s[e],2),i=(n[0],n[1]);m+=i}}));var x=new d({$data:{id:m}});k(t.subtitle,p.textlist,x)}if(t.text)if("string"==typeof t.text)p.textlist.push(new l({$data:{text:t.text}}));else{for(var b=0,g=Object.entries(t.text);b<g.length;b++){var y=w(g[b],2);y[0];y[1]}var $=new l;k(t.text,p.textlist,$)}}else if(s)if("string"==typeof t.text)p.textlist.push(new o({$data:{text:t.text,image_name:t.image_name,src:t.src}}));else{var _=new o({$data:{image_name:t.image_name,src:t.src}});k(t.text,p.textlist,_)}else if(n){var j=new a;t.ollist.forEach((function(t){if("string"==typeof t.text)j.ollist.push(new r({$data:{text:t.text}}));else{var e=new r;k(t.text,j.ollist,e)}})),p.textlist.push(j)}else if(i){var C=new h;t.ullist.forEach((function(t){if("string"==typeof t.text)C.ullist.push(new r({$data:{text:t.text}}));else{var e=new r;k(t.text,C.ullist,e)}})),p.textlist.push(C)}else e&&p.textlist.push(new u({$data:{mark:t.mark}}))})),e.list.push(p)}},i=0,v=Object.entries(t);i<v.length;i++)s();e.$mount({target:document.body})}},3997:(t,e,s)=>{s.d(e,{A:()=>i});var n=s(898);class i extends((0,n.vt)([{t:"div",a:{class:"container"}},[{t:"div",a:{class:"textbox"}},[{t:"div",a:{class:"text"}},{n:"textlist",t:1}]]])){}}},t=>{t.O(0,["vendors-node_modules_ef-core_src_ef-core_js","vendors-node_modules_jquery_dist_jquery_js"],(()=>{return e=6683,t(t.s=e);var e}));t.O()}]);