// jscs:disable
!function t(e,n,o){function l(i,a){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(r)return r(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return l(n?n:t)},u,u.exports,t,e,n,o)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<o.length;i++)l(o[i]);return l}({1:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["",""],["",""]),r=t("./lib/hyperhtml"),i=o(r),a=t("./controllers/todo"),c=o(a),s=t("./models/storage"),u=o(s),d=t("./views/header"),f=o(d),p=t("./views/main"),h=o(p),m=t("./views/footer"),v=o(m),b=i.default.bind(document.querySelector(".todoapp")),y=i.default.wire(),g=i.default.wire(),k=i.default.wire();c.default.init(u.default,function(t){b(l,[(0,f.default)(y,t),(0,h.default)(g,t),(0,v.default)(k,t)])}),c.default.update()},{"./controllers/todo":2,"./lib/hyperhtml":3,"./models/storage":4,"./views/footer":6,"./views/header":7,"./views/main":8}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("../models/todo"),l=function(t){return t&&t.__esModule?t:{default:t}}(o),r={ENTER_KEY:13,ESC_KEY:27,init:function(t,e){var n=this;this.items=t.get(),this.update=function(){var o=r.hash(),l=n.items;"all"!==o&&(l=l.filter("active"===o?function(t){return!t.completed}:function(t){return t.completed})),e(l),t.set(n.items)},window.onhashchange=this.update},clear:function(){r.items=r.items.filter(function(t){return!t.completed}),r.update()},complete:function(t){var e=t.target.closest("li").dataset.index,n=r.items[e];n.completed=!n.completed,r.update()},create:function(t){var e=t.target,n=e.value.trim();t.keyCode===r.ENTER_KEY&&n.length&&(r.items.push((0,l.default)(n)),e.value="",r.update())},destroy:function(t){var e=t.target.closest("li").dataset.index;r.items.splice(e,1),r.update()},edit:function(t){if("blur"===t.type||t.keyCode===r.ENTER_KEY){var e=t.target.value.trim();if(e.length){var n=t.target.closest("li").dataset.index;r.items[n].title=e,r.update()}else"blur"===t.type?r.destroy(t):t.target.blur()}},hash:function(){var t=location.hash.slice(2);return"completed"!==t&&"active"!==t?"all":t},todosLeft:function(){return r.items.filter(function(t){return!t.completed}).length},todosSize:function(){return r.items.length},toggleAll:function(t){r.items.forEach(function(e){e.completed=t.target.checked}),r.update()}};n.default=r},{"../models/todo":5}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){function t(t){return x in this&&this[x].s===t?k.apply(this,arguments):w.apply(this,arguments)}function e(t,e){for(var n,o=E?N:C,l=E?d(t.attributes):T.call(t.attributes),i=0,a=l.length;i<a;i++)n=l[i],n.value===o&&e.push(r(t,E?t.getAttributeNode(_.shift()):n))}function n(t,o){for(var r,c,s=T.call(t.childNodes),u=s.length,d=0;d<u;d++)switch(r=s[d],r.nodeType){case 1:e(r,o),n(r,o);break;case 8:r.textContent===N&&(1===u?(o.push(l(t)),t.removeChild(r)):!(d<1||1===s[d-1].nodeType)||d+1!==u&&1!==s[d+1].nodeType?(c=t.ownerDocument.createTextNode(""),o.push(a(c)),t.replaceChild(c,r)):o.push(i(r)));break;case 3:"STYLE"===t.nodeName&&r.textContent===C&&o.push(a(t))}}function l(t){return function e(n){switch(void 0===n?"undefined":o(n)){case"string":t.innerHTML=n;break;case"number":case"boolean":t.textContent=n;break;default:if(Array.isArray(n))if(1===n.length)e(n[0]);else if("string"==typeof n[0])e(n.join(""));else{var l=s(t.childNodes,n);-1<l&&v(t,n,l)}else f(t,n)}}}function r(t,e){var n,o=e.name,l="on"===o.slice(0,2),r=o in t&&!O.test(o);return r&&t.removeAttribute(o),r?function(e){n!==e&&(n=e,t[o]=l&&"handleEvent"in e?e.handleEvent.bind(e):e)}:function(t){n!==t&&(e.value=n=t)}}function i(t){var e=document.createDocumentFragment(),n=[];return function l(r){var i,a=t.parentNode;switch(void 0===r?"undefined":o(r)){case"string":case"number":case"boolean":p(n,0),u(e,r),n=T.call(e.childNodes),a.insertBefore(e,t);break;default:Array.isArray(r)?0===r.length?(p(n,0),n=[]):"string"==typeof r[0]?l(r.join("")):-1<(i=s(n,r))&&(p(n,i),r=r.slice(i),c(e,r),a.insertBefore(e,t),n.push.apply(n,r)):(p(n,0),n=11===r.nodeType?T.call(r.childNodes):[r],a.insertBefore(r,t))}}}function a(t){var e;return function(n){e!==n&&(t.textContent=e=n)}}function c(t,e){for(var n=0,o=e.length;n<o;n++)t.appendChild(e[n])}function s(t,e){for(var n=0,o=t.length,l=e.length;n<o;){if(!(n<l&&t[n]===e[n]))return n;n++}return n===l?-1:n}function u(t,e){var n=t.ownerDocument.createElement("template"),o=E&&!("content"in n)&&/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(e);n.innerHTML=o?"<table>"+e+"</table>":e,o&&(n={childNodes:n.querySelectorAll(RegExp.$1)}),c(t,T.call((n.content||n).childNodes))}function d(t){for(var e=[],n=t.length;n--;e[n]={name:t[n].name,value:t[n].value});return e}function f(t,e){switch(e.nodeType){case 1:var n=t.childNodes;if(0<n.length&&n[0]===e){p(n,1);break}h(t,e);break;case 11:-1<s(t.childNodes,e.childNodes)&&h(t,e);break;case 3:t.textContent=e.textContent}}function p(t,e){for(var n,o=t.length;e<o--;)n=t[o],n.parentNode.removeChild(n)}function h(t,e){t.textContent="",t.appendChild(e)}function m(t){for(var e,n=[],o=t.childNodes,l=0,r=o.length;l<r;l++)e=o[l],(1===e.nodeType||0<S.call(e.textContent).length)&&n.push(e);return r=n.length,r<2?(e=r<1?t:n[0],function(){return e}):function(){return n}}function v(t,e,n){var o=t.ownerDocument.createDocumentFragment();0<n?(p(t.childNodes,n),c(o,e.slice(n)),t.appendChild(o)):(c(o,e),h(t,o))}function b(e){var n,o,l,r,i,a;return function(s){return a!==s&&(i=!0,a=s,l=document.createDocumentFragment(),o="svg"===e?document.createElementNS("http://www.w3.org/2000/svg","svg"):l,r=t.bind(o)),r.apply(null,arguments),i&&(i=!1,"svg"===e&&c(l,T.call(o.childNodes)),n=m(l)),n()}}function y(t,e,n){return t[e]||(t[e]=b(n))}function g(t,e){var n=A.get(t)||(A.set(t,n={}),n),o=e.indexOf(":");return o<0?y(n,e,e):y(n,e.slice(o+1),e.slice(0,o)||"html")}function k(){for(var t=1,e=arguments.length,n=this[x].u;t<e;t++)n[t-1](arguments[t]);return this}function w(t){var e=[],o=t.join(C);return E?(_=[],p(this.childNodes,0),u(this,o.replace(M,j))):1===this.nodeType?this.innerHTML=o:u(this,o),n(this,e),this[x]={s:t,u:e},k.apply(this,arguments)}t.wire=function(t,e){return arguments.length<1?b("html"):null==t?b(e||"html"):g(t,e||"html")};var _,O=/^style$/i,x="_hyper_html: ",N=x+(Math.random()*new Date|0)+";",C="<!--"+N+"-->",E=function(t){return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(document.createElement("p")),M=E&&new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+C+"\\2","g"),j=E&&function(t,e,n){return _.push(e.slice(1,-1)),e+n+N+n},S=x.trim||function(){return this.replace(/^\s+|\s+$/g,"")},T=[].slice,A=("undefined"==typeof WeakMap?"undefined":o(WeakMap))===(void 0===A?"undefined":o(A))?{get:function(t){return t[x]},set:function(t,e){Object.defineProperty(t,x,{configurable:!0,value:e})}}:new WeakMap;return t}();n.default=l},{}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o="todos-hyperHTML";n.default={get:function(){return JSON.parse(localStorage.getItem(o)||"[]")},set:function(t){return localStorage.setItem(o,JSON.stringify(t))}}},{}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=0;n.default=function(t){return{title:t,id:o++,completed:!1}}},{}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n\t<footer class="footer" style="','">\n\t\t<span class="todo-count">\n\t\t\t<strong> '," </strong> item",' left\n\t\t</span>\n\t\t<ul class="filters">\n\t\t\t<li><a class="','" href="#/">All</a></li>\n\t\t\t<li><a class="','" href="#/active">Active</a></li>\n\t\t\t<li><a class="','" href="#/completed">Completed</a></li>\n\t\t</ul>\n\t\t<button\n\t\t\tclass="clear-completed"\n\t\t\tonclick="','"\n\t\t\tstyle="','"\n\t\t>Clear completed</button>\n\t</footer>'],['\n\t<footer class="footer" style="','">\n\t\t<span class="todo-count">\n\t\t\t<strong> '," </strong> item",' left\n\t\t</span>\n\t\t<ul class="filters">\n\t\t\t<li><a class="','" href="#/">All</a></li>\n\t\t\t<li><a class="','" href="#/active">Active</a></li>\n\t\t\t<li><a class="','" href="#/completed">Completed</a></li>\n\t\t</ul>\n\t\t<button\n\t\t\tclass="clear-completed"\n\t\t\tonclick="','"\n\t\t\tstyle="','"\n\t\t>Clear completed</button>\n\t</footer>']),l=t("../controllers/todo"),r=function(t){return t&&t.__esModule?t:{default:t}}(l),i=function(t,e){return t===e?"selected":""};n.default=function(t,e){var n=r.default.todosSize(),l=r.default.todosLeft(),a=r.default.hash();return t(o,n?"":"display:none",l,~-l?"s":"",i(a,"all"),i(a,"active"),i(a,"completed"),r.default.clear,l<n?"":"display:none")}},{"../controllers/todo":2}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n\t<header class="header">\n\t\t<h1>todos</h1>\n\t\t<input\n\t\t\tonkeypress="','"\n\t\t\tclass="new-todo"\n\t\t\tplaceholder="What needs to be done?"\n\t\t\tautofocus>\n\t</header>'],['\n\t<header class="header">\n\t\t<h1>todos</h1>\n\t\t<input\n\t\t\tonkeypress="','"\n\t\t\tclass="new-todo"\n\t\t\tplaceholder="What needs to be done?"\n\t\t\tautofocus>\n\t</header>']),l=t("../controllers/todo"),r=function(t){return t&&t.__esModule?t:{default:t}}(l);n.default=function(t,e){return t(o,r.default.create)}},{"../controllers/todo":2}],8:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function r(){var t=this.closest("li");t.classList.add("editing"),t.querySelector(".edit").focus()}function i(t){this.closest("li").classList.remove("editing"),f.default.edit(t)}Object.defineProperty(n,"__esModule",{value:!0});var a=l(['\n\t<section class="main" style="','">\n\t\t<input\n\t\t\tclass="toggle-all"\n\t\t\ttype="checkbox"\n\t\t\tonclick="','"\n\t\t\tchecked="','">\n\t\t<label for="toggle-all">Mark all as complete</label>\n\t\t<ul class="todo-list">',"</ul>\n\t</section>"],['\n\t<section class="main" style="','">\n\t\t<input\n\t\t\tclass="toggle-all"\n\t\t\tid="toggle-all"\n\t\t\ttype="checkbox"\n\t\t\tonclick="','"\n\t\t\tchecked="','">\n\t\t<label for="toggle-all">Mark all as complete</label>\n\t\t<ul class="todo-list">',"</ul>\n\t</section>"]),c=l(['\n\t\t\t<li\n\t\t\t\tdata-index="','"\n\t\t\t\tclass="','"\n\t\t\t>\n\t\t\t\t<div class="view">\n\t\t\t\t\t<input\n\t\t\t\t\t\tclass="toggle"\n\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\tchecked="','"\n\t\t\t\t\t\tonclick="','">\n\t\t\t\t\t<label ondblclick="','">\n\t\t\t\t\t\t','\n\t\t\t\t\t</label>\n\t\t\t\t\t<button class="destroy" onclick="','"></button>\n\t\t\t\t</div>\n\t\t\t\t<input\n\t\t\t\t\tclass="edit"\n\t\t\t\t\tvalue="','"\n\t\t\t\t\tonblur="','"\n\t\t\t\t\tonkeypress="','"\n\t\t\t\t\tonkeydown="','">\n\t\t\t</li>\n\t'],['\n\t\t\t<li\n\t\t\t\tdata-index="','"\n\t\t\t\tclass="','"\n\t\t\t>\n\t\t\t\t<div class="view">\n\t\t\t\t\t<input\n\t\t\t\t\t\tclass="toggle"\n\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\tchecked="','"\n\t\t\t\t\t\tonclick="','">\n\t\t\t\t\t<label ondblclick="','">\n\t\t\t\t\t\t','\n\t\t\t\t\t</label>\n\t\t\t\t\t<button class="destroy" onclick="','"></button>\n\t\t\t\t</div>\n\t\t\t\t<input\n\t\t\t\t\tclass="edit"\n\t\t\t\t\tvalue="','"\n\t\t\t\t\tonblur="','"\n\t\t\t\t\tonkeypress="','"\n\t\t\t\t\tonkeydown="','">\n\t\t\t</li>\n\t']),s=t("../lib/hyperhtml"),u=o(s),d=t("../controllers/todo"),f=o(d);n.default=function(t,e){return t(a,e.length?"":"display:none",f.default.toggleAll,e.every(function(t){return t.completed}),e.map(function(t){return u.default.wire(t)(c,f.default.items.indexOf(t),t.completed?"completed":"",t.completed,f.default.complete,r,t.title,f.default.destroy,t.title,i,f.default.edit,function(e){if (e.keyCode===f.default.ESC_KEY){(this.value=t.title,this.blur())} if (e.keyCode===f.default.ENTER_KEY){this.blur()}})}))}},{"../controllers/todo":2,"../lib/hyperhtml":3}]},{},[1]);
