function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}var t,s,n,r,a,i,o,l,c,u,h,p,d,m,f,g,b={},k=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=Array.isArray;function E(e,t){for(var s in t)e[s]=t[s];return e}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function S(e,t,s){var n,r,a,i={};for(a in t)"key"==a?n=t[a]:"ref"==a?r=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?c.call(arguments,2):s),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===i[a]&&(i[a]=e.defaultProps[a]);return C(e,i,n,r,null)}function C(e,t,s,n,r){var a={type:e,props:t,key:s,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++h:r};return null==r&&null!=u.vnode&&u.vnode(a),a}function $(){return{current:null}}function N(e){return e.children}function I(e,t){this.props=e,this.context=t}function R(e,t){if(null==t)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null;for(var s;t<e.__k.length;t++)if(null!=(s=e.__k[t])&&null!=s.__e)return s.__e;return"function"==typeof e.type?R(e):null}function _(e){(!e.__d&&(e.__d=!0)&&p.push(e)&&!x.__r++||d!==u.debounceRendering)&&((d=u.debounceRendering)||m)(x)}function x(){var e,t,s,n,r,a,i,o,l;for(p.sort(f);e=p.shift();)e.__d&&(t=p.length,n=void 0,r=void 0,a=void 0,o=(i=(s=e).__v).__e,(l=s.__P)&&(n=[],r=[],(a=E({},i)).__v=i.__v+1,P(l,i,a,s.__n,void 0!==l.ownerSVGElement,null!=i.__h?[o]:null,n,null==o?R(i):o,i.__h,r),B(n,i,r),i.__e!=o&&function e(t){var s,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,s=0;s<t.__k.length;s++)if(null!=(n=t.__k[s])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return e(t)}}(i)),p.length>t&&p.sort(f));x.__r=0}function T(e,t,s,n,r,a,i,o,l,c,u){var h,p,d,m,f,g,v,E,y,S=0,$=n&&n.__k||k,I=$.length,_=I,x=t.length;for(s.__k=[],h=0;h<x;h++)null!=(m=s.__k[h]=null==(m=t[h])||"boolean"==typeof m||"function"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?C(null,m,null,null,m):w(m)?C(N,{children:m},null,null,null):m.__b>0?C(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)?(m.__=s,m.__b=s.__b+1,-1===(E=function(e,t,s,n){var r=e.key,a=e.type,i=s-1,o=s+1,l=t[s];if(null===l||l&&r==l.key&&a===l.type)return s;if(n>(null!=l?1:0))for(;i>=0||o<t.length;){if(i>=0){if((l=t[i])&&r==l.key&&a===l.type)return i;i--}if(o<t.length){if((l=t[o])&&r==l.key&&a===l.type)return o;o++}}return -1}(m,$,v=h+S,_))?d=b:(d=$[E]||b,$[E]=void 0,_--),P(e,m,d,r,a,i,o,l,c,u),f=m.__e,(p=m.ref)&&d.ref!=p&&(d.ref&&H(d.ref,null,m),u.push(p,m.__c||f,m)),null!=f&&(null==g&&(g=f),(y=d===b||null===d.__v)?-1==E&&S--:E!==v&&(E===v+1?S++:E>v?_>x-v?S+=E-v:S--:S=E<v&&E==v-1?E-v:0),v=h+S,"function"!=typeof m.type||E===v&&d.__k!==m.__k?"function"!=typeof m.type&&(E!==v||y)?l=D(e,f,l):void 0!==m.__d?(l=m.__d,m.__d=void 0):l=f.nextSibling:l=function e(t,s,n){for(var r,a=t.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=t,s="function"==typeof r.type?e(r,s,n):D(n,r.__e,s));return s}(m,l,e),"function"==typeof s.type&&(s.__d=l))):(d=$[h])&&null==d.key&&d.__e&&(d.__e==l&&(l=R(d)),j(d,d,!1),$[h]=null);for(s.__e=g,h=I;h--;)null!=$[h]&&("function"==typeof s.type&&null!=$[h].__e&&$[h].__e==s.__d&&(s.__d=$[h].__e.nextSibling),j($[h],$[h]))}function D(e,t,s){return null==s||s.parentNode!==e?e.insertBefore(t,null):t==s&&null!=t.parentNode||e.insertBefore(t,s),t.nextSibling}function O(e,t,s){"-"===t[0]?e.setProperty(t,null==s?"":s):e[t]=null==s?"":"number"!=typeof s||v.test(t)?s:s+"px"}function A(e,t,s,n,r){var a;e:if("style"===t){if("string"==typeof s)e.style.cssText=s;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)s&&t in s||O(e.style,t,"");if(s)for(t in s)n&&s[t]===n[t]||O(e.style,t,s[t])}}else if("o"===t[0]&&"n"===t[1])a=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase() in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=s,s?n||e.addEventListener(t,a?M:L,a):e.removeEventListener(t,a?M:L,a);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==s?"":s;break e}catch(e){}"function"==typeof s||(null==s||!1===s&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,s))}}function L(e){return this.l[e.type+!1](u.event?u.event(e):e)}function M(e){return this.l[e.type+!0](u.event?u.event(e):e)}function P(e,t,s,n,r,a,i,o,l,h){var p,d,m,f,g,k,v,S,C,$,_,x,D,O,L,M=t.type;if(void 0!==t.constructor)return null;null!=s.__h&&(l=s.__h,o=t.__e=s.__e,t.__h=null,a=[o]),(p=u.__b)&&p(t);e:if("function"==typeof M)try{if(S=t.props,C=(p=M.contextType)&&n[p.__c],$=p?C?C.props.value:p.__:n,s.__c?v=(d=t.__c=s.__c).__=d.__E:("prototype"in M&&M.prototype.render?t.__c=d=new M(S,$):(t.__c=d=new I(S,$),d.constructor=M,d.render=U),C&&C.sub(d),d.props=S,d.state||(d.state={}),d.context=$,d.__n=n,m=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=E({},d.__s)),E(d.__s,M.getDerivedStateFromProps(S,d.__s))),f=d.props,g=d.state,d.__v=t,m)null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==M.getDerivedStateFromProps&&S!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(S,$),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(S,d.__s,$)||t.__v===s.__v)){for(t.__v!==s.__v&&(d.props=S,d.state=d.__s,d.__d=!1),t.__e=s.__e,t.__k=s.__k,t.__k.forEach(function(e){e&&(e.__=t)}),_=0;_<d._sb.length;_++)d.__h.push(d._sb[_]);d._sb=[],d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(S,d.__s,$),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(f,g,k)})}if(d.context=$,d.props=S,d.__P=e,d.__e=!1,x=u.__r,D=0,"prototype"in M&&M.prototype.render){for(d.state=d.__s,d.__d=!1,x&&x(t),p=d.render(d.props,d.state,d.context),O=0;O<d._sb.length;O++)d.__h.push(d._sb[O]);d._sb=[]}else do d.__d=!1,x&&x(t),p=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++D<25)d.state=d.__s,null!=d.getChildContext&&(n=E(E({},n),d.getChildContext())),m||null==d.getSnapshotBeforeUpdate||(k=d.getSnapshotBeforeUpdate(f,g)),T(e,w(L=null!=p&&p.type===N&&null==p.key?p.props.children:p)?L:[L],t,s,n,r,a,i,o,l,h),d.base=t.__e,t.__h=null,d.__h.length&&i.push(d),v&&(d.__E=d.__=null)}catch(e){t.__v=null,(l||null!=a)&&(t.__e=o,t.__h=!!l,a[a.indexOf(o)]=null),u.__e(e,t,s)}else null==a&&t.__v===s.__v?(t.__k=s.__k,t.__e=s.__e):t.__e=function(e,t,s,n,r,a,i,o,l){var u,h,p,d=s.props,m=t.props,f=t.type,g=0;if("svg"===f&&(r=!0),null!=a){for(;g<a.length;g++)if((u=a[g])&&"setAttribute"in u==!!f&&(f?u.localName===f:3===u.nodeType)){e=u,a[g]=null;break}}if(null==e){if(null===f)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),a=null,o=!1}if(null===f)d===m||o&&e.data===m||(e.data=m);else{if(a=a&&c.call(e.childNodes),h=(d=s.props||b).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!o){if(null!=a)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,s,n,r){var a;for(a in s)"children"===a||"key"===a||a in t||A(e,a,null,s[a],n);for(a in t)r&&"function"!=typeof t[a]||"children"===a||"key"===a||"value"===a||"checked"===a||s[a]===t[a]||A(e,a,t[a],s[a],n)}(e,m,d,r,o),p)t.__k=[];else if(T(e,w(g=t.props.children)?g:[g],t,s,n,r&&"foreignObject"!==f,a,i,a?a[0]:s.__k&&R(s,0),o,l),null!=a)for(g=a.length;g--;)null!=a[g]&&y(a[g]);o||("value"in m&&void 0!==(g=m.value)&&(g!==e.value||"progress"===f&&!g||"option"===f&&g!==d.value)&&A(e,"value",g,d.value,!1),"checked"in m&&void 0!==(g=m.checked)&&g!==e.checked&&A(e,"checked",g,d.checked,!1))}return e}(s.__e,t,s,n,r,a,i,l,h);(p=u.diffed)&&p(t)}function B(e,t,s){for(var n=0;n<s.length;n++)H(s[n],s[++n],s[++n]);u.__c&&u.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){u.__e(e,t.__v)}})}function H(e,t,s){try{"function"==typeof e?e(t):e.current=t}catch(e){u.__e(e,s)}}function j(e,t,s){var n,r;if(u.unmount&&u.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||H(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){u.__e(e,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&j(n[r],t,s||"function"!=typeof e.type);s||null==e.__e||y(e.__e),e.__=e.__e=e.__d=void 0}function U(e,t,s){return this.constructor(e,s)}c=k.slice,u={__e:function(e,t,s,n){for(var r,a,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&null!=a.getDerivedStateFromError&&(r.setState(a.getDerivedStateFromError(e)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,n||{}),i=r.__d),i)return r.__E=r}catch(t){e=t}throw e}},h=0,I.prototype.setState=function(e,t){var s;s=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=E({},this.state),"function"==typeof e&&(e=e(E({},s),this.props)),e&&E(s,e),null!=e&&this.__v&&(t&&this._sb.push(t),_(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_(this))},I.prototype.render=N,p=[],m="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(e,t){return e.__v.__b-t.__v.__b},x.__r=0,g=0;var W=function(e,t,s,n){var r;t[0]=0;for(var a=1;a<t.length;a++){var i=t[a++],o=t[a]?(t[0]|=i?1:2,s[t[a++]]):t[++a];3===i?n[0]=o:4===i?n[1]=Object.assign(n[1]||{},o):5===i?(n[1]=n[1]||{})[t[++a]]=o:6===i?n[1][t[++a]]+=o+"":i?(r=e.apply(o,W(e,o,s,["",null])),n.push(r),o[0]?t[0]|=2:(t[a-2]=0,t[a]=r)):n.push(o)}return n},F=new Map,K={};e(K,"State",()=>et),e(K,"regexp",()=>e3),e(K,"stringToArray",()=>e6),e(K,"Options",()=>te),e(K,"options",()=>ts),e(K,"MultiToken",()=>tn),e(K,"createTokenClass",()=>tr),e(K,"multi",()=>tc),e(K,"reset",()=>tf),e(K,"registerTokenPlugin",()=>tg),e(K,"registerPlugin",()=>tb),e(K,"registerCustomProtocol",()=>tk),e(K,"init",()=>tv),e(K,"tokenize",()=>tw),e(K,"find",()=>tE),e(K,"test",()=>ty);const G=(e,t)=>{for(let s in t)e[s]=t[s];return e},V="numeric",z="ascii",q="alpha",Q="asciinumeric",J="alphanumeric",Y="domain",X="emoji",Z="whitespace";function ee(e,t,s){for(let n in t[V]&&(t[Q]=!0,t[J]=!0),t[z]&&(t[Q]=!0,t[q]=!0),t[Q]&&(t[J]=!0),t[q]&&(t[J]=!0),t[J]&&(t[Y]=!0),t[X]&&(t[Y]=!0),t){let t=(n in s||(s[n]=[]),s[n]);0>t.indexOf(e)&&t.push(e)}}function et(e){void 0===e&&(e=null),this.j={},this.jr=[],this.jd=null,this.t=e}et.groups={},et.prototype={accepts(){return!!this.t},go(e){let t=this.j[e];if(t)return t;for(let t=0;t<this.jr.length;t++){let s=this.jr[t][0],n=this.jr[t][1];if(n&&s.test(e))return n}return this.jd},has(e,t){return void 0===t&&(t=!1),t?e in this.j:!!this.go(e)},ta(e,t,s,n){for(let r=0;r<e.length;r++)this.tt(e[r],t,s,n)},tr(e,t,s,n){let r;return n=n||et.groups,t&&t.j?r=t:(r=new et(t),s&&n&&ee(t,s,n)),this.jr.push([e,r]),r},ts(e,t,s,n){let r=this,a=e.length;if(!a)return r;for(let t=0;t<a-1;t++)r=r.tt(e[t]);return r.tt(e[a-1],t,s,n)},tt(e,t,s,n){if(n=n||et.groups,t&&t.j)return this.j[e]=t,t;let r,a=this.go(e);return a?(G((r=new et).j,a.j),r.jr.push.apply(r.jr,a.jr),r.jd=a.jd,r.t=a.t):r=new et,t&&(n&&(r.t&&"string"==typeof r.t?ee(t,G(function(e,t){let s={};for(let n in t)t[n].indexOf(e)>=0&&(s[n]=!0);return s}(r.t,n),s),n):s&&ee(t,s,n)),r.t=t),this.j[e]=r,r}};const es=(e,t,s,n,r)=>e.ta(t,s,n,r),en=(e,t,s,n,r)=>e.tr(t,s,n,r),er=(e,t,s,n,r)=>e.ts(t,s,n,r),ea=(e,t,s,n,r)=>e.tt(t,s,n,r),ei="WORD",eo="UWORD",el="LOCALHOST",ec="UTLD",eu="SCHEME",eh="SLASH_SCHEME",ep="OPENBRACE",ed="CLOSEBRACE",em="OPENBRACKET",ef="CLOSEBRACKET",eg="OPENPAREN",eb="CLOSEPAREN",ek="OPENANGLEBRACKET",ev="CLOSEANGLEBRACKET",ew="FULLWIDTHLEFTPAREN",eE="FULLWIDTHRIGHTPAREN",ey="LEFTCORNERBRACKET",eS="RIGHTCORNERBRACKET",eC="LEFTWHITECORNERBRACKET",e$="RIGHTWHITECORNERBRACKET",eN="FULLWIDTHLESSTHAN",eI="FULLWIDTHGREATERTHAN",eR="AMPERSAND",e_="APOSTROPHE",ex="ASTERISK",eT="BACKSLASH",eD="BACKTICK",eO="CARET",eA="COLON",eL="COMMA",eM="DOLLAR",eP="EQUALS",eB="EXCLAMATION",eH="HYPHEN",ej="PERCENT",eU="PIPE",eW="PLUS",eF="POUND",eK="QUERY",eG="QUOTE",eV="SEMI",ez="SLASH",eq="TILDE",eQ="UNDERSCORE",eJ="EMOJI";var eY=/*#__PURE__*/Object.freeze({__proto__:null,WORD:ei,UWORD:eo,LOCALHOST:el,TLD:"TLD",UTLD:ec,SCHEME:eu,SLASH_SCHEME:eh,NUM:"NUM",WS:"WS",NL:"NL",OPENBRACE:ep,CLOSEBRACE:ed,OPENBRACKET:em,CLOSEBRACKET:ef,OPENPAREN:eg,CLOSEPAREN:eb,OPENANGLEBRACKET:ek,CLOSEANGLEBRACKET:ev,FULLWIDTHLEFTPAREN:ew,FULLWIDTHRIGHTPAREN:eE,LEFTCORNERBRACKET:ey,RIGHTCORNERBRACKET:eS,LEFTWHITECORNERBRACKET:eC,RIGHTWHITECORNERBRACKET:e$,FULLWIDTHLESSTHAN:eN,FULLWIDTHGREATERTHAN:eI,AMPERSAND:eR,APOSTROPHE:e_,ASTERISK:ex,AT:"AT",BACKSLASH:eT,BACKTICK:eD,CARET:eO,COLON:eA,COMMA:eL,DOLLAR:eM,DOT:"DOT",EQUALS:eP,EXCLAMATION:eB,HYPHEN:eH,PERCENT:ej,PIPE:eU,PLUS:eW,POUND:eF,QUERY:eK,QUOTE:eG,SEMI:eV,SLASH:ez,TILDE:eq,UNDERSCORE:eQ,EMOJI:eJ,SYM:"SYM"});const eX=/[a-z]/,eZ=/\p{L}/u,e0=/\p{Emoji}/u,e1=/\d/,e2=/\s/;var e3=/*#__PURE__*/Object.freeze({__proto__:null,ASCII_LETTER:eX,LETTER:eZ,EMOJI:e0,EMOJI_VARIATION:/\ufe0f/,DIGIT:e1,SPACE:e2});let e4=null,e5=null;function e6(e){let t=[],s=e.length,n=0;for(;n<s;){let r,a=e.charCodeAt(n),i=a<55296||a>56319||n+1===s||(r=e.charCodeAt(n+1))<56320||r>57343?e[n]:e.slice(n,n+2);t.push(i),n+=i.length}return t}function e7(e,t,s,n,r){let a;let i=t.length;for(let s=0;s<i-1;s++){let i=t[s];e.j[i]?a=e.j[i]:((a=new et(n)).jr=r.slice(),e.j[i]=a),e=a}return(a=new et(s)).jr=r.slice(),e.j[t[i-1]]=a,a}function e9(e){let t=[],s=[],n=0;for(;n<e.length;){let r=0;for(;"0123456789".indexOf(e[n+r])>=0;)r++;if(r>0){t.push(s.join(""));for(let t=parseInt(e.substring(n,n+r),10);t>0;t--)s.pop();n+=r}else s.push(e[n]),n++}return t}const e8={defaultProtocol:"http",events:null,format:tt,formatHref:tt,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function te(e,t){void 0===t&&(t=null);let s=G({},e8);e&&(s=G(s,e instanceof te?e.o:e));let n=s.ignoreTags,r=[];for(let e=0;e<n.length;e++)r.push(n[e].toUpperCase());this.o=s,t&&(this.defaultRender=t),this.ignoreTags=r}function tt(e){return e}te.prototype={o:e8,ignoreTags:[],defaultRender:e=>e,check(e){return this.get("validate",e.toString(),e)},get(e,t,s){let n=null!=t,r=this.o[e];return r&&("object"==typeof r?"function"==typeof(r=s.t in r?r[s.t]:e8[e])&&n&&(r=r(t,s)):"function"==typeof r&&n&&(r=r(t,s.t,s))),r},getObj(e,t,s){let n=this.o[e];return"function"==typeof n&&null!=t&&(n=n(t,s.t,s)),n},render(e){let t=e.render(this);return(this.get("render",null,e)||this.defaultRender)(t,e.t,e)}};var ts=/*#__PURE__*/Object.freeze({__proto__:null,defaults:e8,Options:te,assign:G});function tn(e,t){this.t="token",this.v=e,this.tk=t}function tr(e,t){class s extends tn{constructor(t,s){super(t,s),this.t=e}}for(let e in t)s.prototype[e]=t[e];return s.t=e,s}tn.prototype={isLink:!1,toString(){return this.v},toHref(e){return this.toString()},toFormattedString(e){let t=this.toString(),s=e.get("truncate",t,this),n=e.get("format",t,this);return s&&n.length>s?n.substring(0,s)+"…":n},toFormattedHref(e){return e.get("formatHref",this.toHref(e.get("defaultProtocol")),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(e){return void 0===e&&(e=e8.defaultProtocol),{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(e){return{type:this.t,value:this.toFormattedString(e),isLink:this.isLink,href:this.toFormattedHref(e),start:this.startIndex(),end:this.endIndex()}},validate(e){return e.get("validate",this.toString(),this)},render(e){let t=this.toHref(e.get("defaultProtocol")),s=e.get("formatHref",t,this),n=e.get("tagName",t,this),r=this.toFormattedString(e),a={},i=e.get("className",t,this),o=e.get("target",t,this),l=e.get("rel",t,this),c=e.getObj("attributes",t,this),u=e.getObj("events",t,this);return a.href=s,i&&(a.class=i),o&&(a.target=o),l&&(a.rel=l),c&&G(a,c),{tagName:n,attributes:a,content:r,eventListeners:u}}};const ta=tr("email",{isLink:!0,toHref(){return"mailto:"+this.toString()}}),ti=tr("text"),to=tr("nl"),tl=tr("url",{isLink:!0,toHref(e){return void 0===e&&(e=e8.defaultProtocol),this.hasProtocol()?this.v:`${e}://${this.v}`},hasProtocol(){let e=this.tk;return e.length>=2&&e[0].t!==el&&e[1].t===eA}});var tc=/*#__PURE__*/Object.freeze({__proto__:null,MultiToken:tn,Base:tn,createTokenClass:tr,Email:ta,Text:ti,Nl:to,Url:tl});const tu=e=>new et(e);function th(e,t,s){let n=s[0].s,r=s[s.length-1].e;return new e(t.slice(n,r),s)}const tp="undefined"!=typeof console&&console&&console.warn||(()=>{}),td="until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",tm={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function tf(){et.groups={},tm.scanner=null,tm.parser=null,tm.tokenQueue=[],tm.pluginQueue=[],tm.customSchemes=[],tm.initialized=!1}function tg(e,t){if("function"!=typeof t)throw Error(`linkifyjs: Invalid token plugin ${t} (expects function)`);for(let s=0;s<tm.tokenQueue.length;s++)if(e===tm.tokenQueue[s][0]){tp(`linkifyjs: token plugin "${e}" already registered - will be overwritten`),tm.tokenQueue[s]=[e,t];return}tm.tokenQueue.push([e,t]),tm.initialized&&tp(`linkifyjs: already initialized - will not register token plugin "${e}" ${td}`)}function tb(e,t){if("function"!=typeof t)throw Error(`linkifyjs: Invalid plugin ${t} (expects function)`);for(let s=0;s<tm.pluginQueue.length;s++)if(e===tm.pluginQueue[s][0]){tp(`linkifyjs: plugin "${e}" already registered - will be overwritten`),tm.pluginQueue[s]=[e,t];return}tm.pluginQueue.push([e,t]),tm.initialized&&tp(`linkifyjs: already initialized - will not register plugin "${e}" ${td}`)}function tk(e,t){if(void 0===t&&(t=!1),tm.initialized&&tp(`linkifyjs: already initialized - will not register custom scheme "${e}" ${td}`),!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);tm.customSchemes.push([e,t])}function tv(){tm.scanner=function(e){void 0===e&&(e=[]);let t={};et.groups=t;let s=new et;null==e4&&(e4=e9("aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2")),null==e5&&(e5=e9("ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2")),ea(s,"'",e_),ea(s,"{",ep),ea(s,"}",ed),ea(s,"[",em),ea(s,"]",ef),ea(s,"(",eg),ea(s,")",eb),ea(s,"<",ek),ea(s,">",ev),ea(s,"（",ew),ea(s,"）",eE),ea(s,"「",ey),ea(s,"」",eS),ea(s,"『",eC),ea(s,"』",e$),ea(s,"＜",eN),ea(s,"＞",eI),ea(s,"&",eR),ea(s,"*",ex),ea(s,"@","AT"),ea(s,"`",eD),ea(s,"^",eO),ea(s,":",eA),ea(s,",",eL),ea(s,"$",eM),ea(s,".","DOT"),ea(s,"=",eP),ea(s,"!",eB),ea(s,"-",eH),ea(s,"%",ej),ea(s,"|",eU),ea(s,"+",eW),ea(s,"#",eF),ea(s,"?",eK),ea(s,'"',eG),ea(s,"/",ez),ea(s,";",eV),ea(s,"~",eq),ea(s,"_",eQ),ea(s,"\\",eT);let n=en(s,e1,"NUM",{[V]:!0});en(n,e1,n);let r=en(s,eX,ei,{[z]:!0});en(r,eX,r);let a=en(s,eZ,eo,{[q]:!0});en(a,eX),en(a,eZ,a);let i=en(s,e2,"WS",{[Z]:!0});ea(s,"\n","NL",{[Z]:!0}),ea(i,"\n"),en(i,e2,i);let o=en(s,e0,eJ,{[X]:!0});en(o,e0,o),ea(o,"️",o),en(ea(o,"‍"),e0,o);let l=[[eX,r]],c=[[eX,null],[eZ,a]];for(let e=0;e<e4.length;e++)e7(s,e4[e],"TLD",ei,l);for(let e=0;e<e5.length;e++)e7(s,e5[e],ec,eo,c);ee("TLD",{tld:!0,ascii:!0},t),ee(ec,{utld:!0,alpha:!0},t),e7(s,"file",eu,ei,l),e7(s,"mailto",eu,ei,l),e7(s,"http",eh,ei,l),e7(s,"https",eh,ei,l),e7(s,"ftp",eh,ei,l),e7(s,"ftps",eh,ei,l),ee(eu,{scheme:!0,ascii:!0},t),ee(eh,{slashscheme:!0,ascii:!0},t),e=e.sort((e,t)=>e[0]>t[0]?1:-1);for(let t=0;t<e.length;t++){let n=e[t][0],r=e[t][1]?{scheme:!0}:{slashscheme:!0};n.indexOf("-")>=0?r[Y]=!0:eX.test(n)?e1.test(n)?r[Q]=!0:r[z]=!0:r[V]=!0,er(s,n,n,r)}return er(s,"localhost",el,{ascii:!0}),s.jd=new et("SYM"),{start:s,tokens:G({groups:t},eY)}}(tm.customSchemes);for(let e=0;e<tm.tokenQueue.length;e++)tm.tokenQueue[e][1]({scanner:tm.scanner});tm.parser=function(e){let{groups:t}=e,s=t.domain.concat([eR,ex,"AT",eT,eD,eO,eM,eP,eH,"NUM",ej,eU,eW,eF,ez,"SYM",eq,eQ]),n=[e_,eA,eL,"DOT",eB,eK,eG,eV,ek,ev,ep,ed,ef,em,eg,eb,ew,eE,ey,eS,eC,e$,eN,eI],r=[eR,e_,ex,eT,eD,eO,eM,eP,eH,ep,ed,ej,eU,eW,eF,eK,ez,"SYM",eq,eQ],a=tu(),i=ea(a,eq);es(i,r,i),es(i,t.domain,i);let o=tu(),l=tu(),c=tu();es(a,t.domain,o),es(a,t.scheme,l),es(a,t.slashscheme,c),es(o,r,i),es(o,t.domain,o);let u=ea(o,"AT");ea(i,"AT",u),ea(l,"AT",u),ea(c,"AT",u);let h=ea(i,"DOT");es(h,r,i),es(h,t.domain,i);let p=tu();es(u,t.domain,p),es(p,t.domain,p);let d=ea(p,"DOT");es(d,t.domain,p);let m=tu(ta);es(d,t.tld,m),es(d,t.utld,m),ea(u,el,m);let f=ea(p,eH);es(f,t.domain,p),es(m,t.domain,p),ea(m,"DOT",d),ea(m,eH,f),es(ea(m,eA),t.numeric,ta);let g=ea(o,eH),b=ea(o,"DOT");es(g,t.domain,o),es(b,r,i),es(b,t.domain,o);let k=tu(tl);es(b,t.tld,k),es(b,t.utld,k),es(k,t.domain,o),es(k,r,i),ea(k,"DOT",b),ea(k,eH,g),ea(k,"AT",u);let v=ea(k,eA),w=tu(tl);es(v,t.numeric,w);let E=tu(tl),y=tu();es(E,s,E),es(E,n,y),es(y,s,E),es(y,n,y),ea(k,ez,E),ea(w,ez,E);let S=ea(l,eA),C=ea(c,eA),$=ea(C,ez),N=ea($,ez);es(l,t.domain,o),ea(l,"DOT",b),ea(l,eH,g),es(c,t.domain,o),ea(c,"DOT",b),ea(c,eH,g),es(S,t.domain,E),ea(S,ez,E),es(N,t.domain,E),es(N,s,E),ea(N,ez,E);let I=[[ep,ed],[em,ef],[eg,eb],[ek,ev],[ew,eE],[ey,eS],[eC,e$],[eN,eI]];for(let e=0;e<I.length;e++){let[t,r]=I[e],a=ea(E,t);ea(y,t,a),ea(a,r,E);let i=tu(tl);es(a,s,i);let o=tu();es(a,n),es(i,s,i),es(i,n,o),es(o,s,i),es(o,n,o),ea(i,r,E),ea(o,r,E)}return ea(a,el,k),ea(a,"NL",to),{start:a,tokens:eY}}(tm.scanner.tokens);for(let e=0;e<tm.pluginQueue.length;e++)tm.pluginQueue[e][1]({scanner:tm.scanner,parser:tm.parser});tm.initialized=!0}function tw(e){return tm.initialized||tv(),function(e,t,s){let n=s.length,r=0,a=[],i=[];for(;r<n;){let o=e,l=null,c=null,u=0,h=null,p=-1;for(;r<n&&!(l=o.go(s[r].t));)i.push(s[r++]);for(;r<n&&(c=l||o.go(s[r].t));)l=null,(o=c).accepts()?(p=0,h=o):p>=0&&p++,r++,u++;if(p<0)(r-=u)<n&&(i.push(s[r]),r++);else{i.length>0&&(a.push(th(ti,t,i)),i=[]),r-=p,u-=p;let e=h.t,n=s.slice(r-u,r);a.push(th(e,t,n))}}return i.length>0&&a.push(th(ti,t,i)),a}(tm.parser.start,e,function(e,t){let s=e6(t.replace(/[A-Z]/g,e=>e.toLowerCase())),n=s.length,r=[],a=0,i=0;for(;i<n;){let o=e,l=null,c=0,u=null,h=-1,p=-1;for(;i<n&&(l=o.go(s[i]));)(o=l).accepts()?(h=0,p=0,u=o):h>=0&&(h+=s[i].length,p++),c+=s[i].length,a+=s[i].length,i++;a-=h,i-=p,c-=h,r.push({t:u.t,v:t.slice(a-c,a),s:a-c,e:a})}return r}(tm.scanner.start,e))}function tE(e,t,s){if(void 0===t&&(t=null),void 0===s&&(s=null),t&&"object"==typeof t){if(s)throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);s=t,t=null}let n=new te(s),r=tw(e),a=[];for(let e=0;e<r.length;e++){let s=r[e];s.isLink&&(!t||s.t===t)&&n.check(s)&&a.push(s.toFormattedObject(n))}return a}function ty(e,t){void 0===t&&(t=null);let s=tw(e);return 1===s.length&&s[0].isLink&&(!t||s[0].t===t)}const tS=(function(e){var t=F.get(this);return t||(t=new Map,F.set(this,t)),(t=W(this,t.get(e)||(t.set(e,t=function(e){for(var t,s,n=1,r="",a="",i=[0],o=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===n&&(e||r)?(i.push(3,e,r),n=2):2===n&&"..."===r&&e?i.push(4,e,0):2===n&&r&&!e?i.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(i.push(n,0,r,s),n=6),e&&(i.push(n,e,0,s),n=6)),r=""},l=0;l<e.length;l++){l&&(1===n&&o(),o(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===n?"<"===t?(o(),i=[i],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:a?t===a?a="":r+=t:'"'===t||"'"===t?a=t:">"===t?(o(),n=1):n&&("="===t?(n=5,s=r,r=""):"/"===t&&(n<5||">"===e[l][c+1])?(o(),3===n&&(i=i[0]),n=i,(i=i[0]).push(2,0,n),n=0):" "===t||"	"===t||"\n"===t||"\r"===t?(o(),n=2):r+=t),3===n&&"!--"===r&&(n=4,i=i[0])}return o(),i}(e)),t),arguments,[])).length>1?t:t[0]}).bind(S),tC="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t$={"~":"owner","&":"admin","@":"operator","%":"halfop","+":"voice"},tN={"~":"q","&":"a","@":"o","%":"h","+":"v"},tI={";":"\\:"," ":"\\s","\\":"\\\\","\r":"\\r","\n":"\\n"},tR=Object.fromEntries(Object.entries(tI).map(([e,t])=>[t,e]));function t_(e){let t={};return e.split(";").forEach(e=>{if(!e)return;let s=e.split("=",2),n=s[0],r=null;2===s.length&&(r=s[1].replace(/\\[:s\\rn]/g,e=>tR[e])).endsWith("\\")&&(r=r.slice(0,r.length-1)),t[n]=r}),t}function tx(e){let t=[];for(let s in e){if(void 0===e[s]||null===e[s]){t.push(s);continue}let n=String(e[s]).replace(/[; \\\r\n]/g,e=>tI[e]);t.push(s+"="+n)}return t.join(";")}function tT(e){let t=null,s=e.indexOf("@");s>0&&(t=e.slice(s+1),e=e.slice(0,s));let n=null;return(s=e.indexOf("!"))>0&&(n=e.slice(s+1),e=e.slice(0,s)),{name:e,user:n,host:t}}function tD(e){e.endsWith("\r\n")&&(e=e.slice(0,e.length-2));let t={tags:{},prefix:null,command:null,params:[]};if(e.startsWith("@")){let s=e.indexOf(" ");if(s<0)throw Error("expected a space after tags");t.tags=t_(e.slice(1,s)),e=e.slice(s+1)}if(e.startsWith(":")){let s=e.indexOf(" ");if(s<0)throw Error("expected a space after prefix");t.prefix=tT(e.slice(1,s)),e=e.slice(s+1)}let s=e.indexOf(" ");if(s<0)return t.command=e,t;for(t.command=e.slice(0,s),e=e.slice(s+1);;){if(e.startsWith(":")){t.params.push(e.slice(1));break}if((s=e.indexOf(" "))<0){t.params.push(e);break}t.params.push(e.slice(0,s)),e=e.slice(s+1)}return t}function tO(e){let t="";if(e.tags&&Object.keys(e.tags).length>0&&(t+="@"+tx(e.tags)+" "),e.prefix){var s;let n;t+=":"+(n=(s=e.prefix).name,s.user&&(n+="!"+s.user),s.host&&(n+="@"+s.host),n)+" "}if(t+=e.command,e.params&&e.params.length>0){for(let s=0;s<e.params.length-1;s++)t+=" "+e.params[s];let s=String(e.params[e.params.length-1]);0===s.length||s.startsWith(":")||s.indexOf(" ")>=0?t+=" :"+s:t+=" "+s}return t}function tA(e,t="~&@%+"){let s;for(s=0;s<e.length&&!(0>t.indexOf(e[s]));s++);return{prefix:e.slice(0,s),name:e.slice(s)}}const tL=(()=>{try{return RegExp(/^[\p{L}0-9]$/,"u")}catch(e){return RegExp(/^[a-zA-Z0-9]$/,"u")}})(),tM=new RegExp(/^\s$/);function tP(e){switch(e){case"-":case"_":case"|":return!1;default:return!tL.test(e)}}function tB(e){if(e>="400"&&e<="568")return!0;switch(e){case"902":case"904":case"905":case"906":case"907":case"734":case"FAIL":return!0;default:return!1}}function tH(e){let t=e.getUTCFullYear().toString().padStart(4,"0"),s=(e.getUTCMonth()+1).toString().padStart(2,"0"),n=e.getUTCDate().toString().padStart(2,"0"),r=e.getUTCHours().toString().padStart(2,"0"),a=e.getUTCMinutes().toString().padStart(2,"0"),i=e.getUTCSeconds().toString().padStart(2,"0"),o=e.getUTCMilliseconds().toString().padStart(3,"0");return`${t}-${s}-${n}T${r}:${a}:${i}.${o}Z`}function tj(e){let t;if("PRIVMSG"!==e.command&&"NOTICE"!==e.command)return null;let s=e.params[1];if(!s.startsWith("\x01"))return null;(s=s.slice(1)).endsWith("\x01")&&(s=s.slice(0,-1));let n=s.indexOf(" ");return(t=n>=0?{command:s.slice(0,n),param:s.slice(n+1)}:{command:s,param:""}).command=t.command.toUpperCase(),t}class tU{raw=new Map;parse(e){e.forEach(e=>{if(e.startsWith("-")){let t=e.slice(1);this.raw.delete(t.toUpperCase());return}let t=e.indexOf("="),s=e,n="";t>=0&&(s=e.slice(0,t),n=e.slice(t+1).replace(/\\x[0-9A-Z]{2}/gi,e=>String.fromCharCode(parseInt(e.slice(2),16)))),s=s.toUpperCase(),this.raw.set(s,n)})}caseMapping(){let e=this.raw.get("CASEMAPPING");return e?tW.byName(e)||(console.error("Unsupported case-mapping '"+e+"', falling back to RFC 1459"),tW.RFC1459):tW.RFC1459}monitor(){if(!this.raw.has("MONITOR"))return 0;let e=this.raw.get("MONITOR");return""===e?1/0:parseInt(e,10)}whox(){return this.raw.has("WHOX")}prefix(){return this.raw.get("PREFIX")||""}chanTypes(){return this.raw.get("CHANTYPES")||"#&+!"}statusMsg(){return this.raw.get("STATUSMSG")}network(){return this.raw.get("NETWORK")}chatHistory(){if(!this.raw.has("CHATHISTORY"))return 0;let e=parseInt(this.raw.get("CHATHISTORY"),10);return e<=0?1/0:e}bouncerNetID(){return this.raw.get("BOUNCER_NETID")}chanModes(){let e=["beI","k","l","imnst"];if(!this.raw.has("CHANMODES"))return e;let t=this.raw.get("CHANMODES").split(",");return 4!==t.length?(console.error("Invalid CHANMODES: ",this.raw.get("CHANMODES")),e):t}bot(){return this.raw.get("BOT")}userLen(){return this.raw.has("USERLEN")?parseInt(this.raw.get("USERLEN"),10):20}hostLen(){return this.raw.has("HOSTLEN")?parseInt(this.raw.get("HOSTLEN"),10):63}lineLen(){return this.raw.has("LINELEN")?parseInt(this.raw.get("LINELEN"),10):512}filehost(){return this.raw.get("SOJU.IM/FILEHOST")}}const tW={ASCII(e){let t="";for(let s=0;s<e.length;s++){let n=e[s];"A"<=n&&n<="Z"&&(n=n.toLowerCase()),t+=n}return t},RFC1459(e){let t="";for(let s=0;s<e.length;s++){let n=e[s];"A"<=n&&n<="Z"?n=n.toLowerCase():"{"===n?n="[":"}"===n?n="]":"\\"===n?n="|":"~"===n&&(n="^"),t+=n}return t},RFC1459Strict(e){let t="";for(let s=0;s<e.length;s++){let n=e[s];"A"<=n&&n<="Z"?n=n.toLowerCase():"{"===n?n="[":"}"===n?n="]":"\\"===n&&(n="|"),t+=n}return t},byName(e){switch(e){case"ascii":return tW.ASCII;case"rfc1459":return tW.RFC1459;case"rfc1459-strict":return tW.RFC1459Strict}return null}};function tF(e,t){let s;return(s={next:()=>{let{value:s,done:n}=e.next();return n?{done:!0}:{value:t(s),done:!1}}})[Symbol.iterator]=()=>s,s}class tK{caseMap=null;map=null;constructor(e,t){if(e instanceof tK&&(e.caseMap===t||!t))this.caseMap=e.caseMap,this.map=new Map(e.map);else{if(!t)throw Error("Missing case-mapping when creating CaseMapMap");if(this.caseMap=t,this.map=new Map,e)for(let[t,s]of e)this.set(t,s)}}get size(){return this.map.size}has(e){return this.map.has(this.caseMap(e))}get(e){let t=this.map.get(this.caseMap(e));if(t)return t.value}set(e,t){this.map.set(this.caseMap(e),{key:e,value:t})}delete(e){this.map.delete(this.caseMap(e))}entries(){return tF(this.map.values(),e=>[e.key,e.value])}keys(){return tF(this.map.values(),e=>e.key)}values(){return tF(this.map.values(),e=>e.value)}[Symbol.iterator](){return this.entries()}}function tG(e){if("("!==e[0])throw Error("malformed ISUPPORT PREFIX value: expected opening parenthesis");let t=e.indexOf(")");if(t<0)throw Error("malformed ISUPPORT PREFIX value: expected closing parenthesis");let s=e.length-t-1,n=[];for(let r=0;r<s;r++){let s=e[r+1],a=e[t+r+1];n.push({mode:s,prefix:a})}return n}function tV(e,t){let s=e.batch;for(;s;){if(s.type===t)return s;s=s.parent}return null}function tz(e,t){return!!e&&e!==t&&"realname"!==e.toLowerCase()&&"unknown"!==e.toLowerCase()&&"fullname"!==e.toLowerCase()}function tq(e){let t,s;if(!e.startsWith("irc://")&&!e.startsWith("ircs://"))return null;let n=(e=e.slice(e.indexOf(":")+3)).indexOf("/");n<0?(t=e,e=""):(t=e.slice(0,n),e=e.slice(n+1));let r=t;if((n=t.indexOf("@"))>=0&&(r=t.slice(n+1)),(n=e.indexOf("?"))>=0&&(e=e.slice(0,n)),(n=e.indexOf(","))>=0){let t=e.slice(n+1).split(",");e=e.slice(0,n),t.indexOf("isuser")>=0?s="user":t.indexOf("ischannel")>=0&&(s="channel")}let a=decodeURIComponent(e);return s||(s=a.startsWith("#")?"channel":"user"),{host:r,enttype:s,entity:a}}function tQ({host:e,enttype:t,entity:s}={}){let n="irc://"+(e=e||"")+"/"+encodeURIComponent(s=s||"");return t&&(n+=",is"+t),n}class tJ{available=new Map;enabled=new Set;addAvailable(e){e.split(" ").forEach(e=>{let t=e.indexOf("="),s=e,n="";t>=0&&(s=e.slice(0,t),n=e.slice(t+1)),this.available.set(s.toLowerCase(),n)})}parse(e){if("CAP"!==e.command)return;let t=e.params[1],s=e.params.slice(2);switch(t){case"LS":this.addAvailable(s[s.length-1]);break;case"NEW":this.addAvailable(s[0]);break;case"DEL":s[0].split(" ").forEach(e=>{e=e.toLowerCase(),this.available.delete(e),this.enabled.delete(e)});break;case"ACK":s[0].split(" ").forEach(e=>{(e=e.toLowerCase()).startsWith("-")?this.enabled.delete(e.slice(1)):this.enabled.add(e)})}}requestAvailable(e){return 0===(e=e.filter(e=>this.available.has(e)&&!this.enabled.has(e))).length?null:{command:"CAP",params:["REQ",e.join(" ")]}}}const tY=["account-notify","away-notify","batch","chghost","echo-message","extended-join","extended-monitor","invite-notify","labeled-response","message-tags","multi-prefix","sasl","server-time","setname","draft/account-registration","draft/chathistory","draft/extended-monitor","draft/read-marker","soju.im/bouncer-networks"],tX={channel:"c",username:"u",hostname:"h",server:"s",nick:"n",flags:"f",account:"a",realname:"r"},tZ={name:"*"};let t0=0,t1=0;class t2 extends Error{constructor(e){super(e.params.length>0?e.params[e.params.length-1]:`unknown error (${e.command})`),this.msg=e}}class t3{n=0;constructor(e,t){this.base=e,this.max=t}reset(){this.n=0}next(){if(0===this.n)return this.n=1,0;let e=this.n*this.base;return e>this.max?e=this.max:this.n*=2,e}}class t4 extends EventTarget{static Status={DISCONNECTED:"disconnected",CONNECTING:"connecting",REGISTERING:"registering",REGISTERED:"registered"};status=t4.Status.DISCONNECTED;serverPrefix=tZ;nick=null;supportsCap=!1;caps=new tJ;isupport=new tU;ws=null;params={url:null,username:null,realname:null,nick:null,pass:null,saslPlain:null,saslExternal:!1,saslOauthBearer:null,bouncerNetwork:null,ping:0,eventPlayback:!0};debug=!1;batches=new Map;autoReconnect=!0;reconnectTimeoutID=null;reconnectBackoff=new t3(1e4,6e5);lastReconnectDate=new Date(0);pingIntervalID=null;pendingCmds={WHO:Promise.resolve(null),CHATHISTORY:Promise.resolve(null)};cm=tW.RFC1459;monitored=new tK(null,tW.RFC1459);pendingLists=new tK(null,tW.RFC1459);whoxQueries=new Map;constructor(e){super(),this.handleOnline=this.handleOnline.bind(this),this.params={...this.params,...e},this.reconnect()}reconnect(){let e=this.autoReconnect;this.disconnect(),this.autoReconnect=e,console.log("Connecting to "+this.params.url),this.setStatus(t4.Status.CONNECTING),this.lastReconnectDate=new Date;try{this.ws=new WebSocket(this.params.url)}catch(e){console.error("Failed to create connection:",e),setTimeout(()=>{this.dispatchError(Error("Failed to create connection",{cause:e})),this.setStatus(t4.Status.DISCONNECTED)},0);return}this.ws.addEventListener("open",this.handleOpen.bind(this)),this.ws.addEventListener("message",e=>{try{this.handleMessage(e)}catch(e){this.dispatchError(e),this.disconnect()}}),this.ws.addEventListener("close",e=>{if(console.log("Connection closed (code: "+e.code+")"),1e3!==e.code&&1001!==e.code&&this.dispatchError(Error("Connection error")),this.ws=null,this.setStatus(t4.Status.DISCONNECTED),this.nick=null,this.serverPrefix=tZ,this.caps=new tJ,this.batches=new Map,Object.keys(this.pendingCmds).forEach(e=>{this.pendingCmds[e]=Promise.resolve(null)}),this.isupport=new tU,this.monitored=new tK(null,tW.RFC1459),this.autoReconnect){if(window.addEventListener("online",this.handleOnline),navigator.onLine){let e=this.reconnectBackoff.next();new Date().getTime()-this.lastReconnectDate.getTime()<1e4&&(e=Math.max(e,1e4)),console.info("Reconnecting to server in "+e/1e3+" seconds"),clearTimeout(this.reconnectTimeoutID),this.reconnectTimeoutID=setTimeout(()=>{this.reconnect()},e)}else console.info("Waiting for network to go back online")}})}disconnect(){this.autoReconnect=!1,clearTimeout(this.reconnectTimeoutID),this.reconnectTimeoutID=null,window.removeEventListener("online",this.handleOnline),this.setPingInterval(0),this.ws&&this.ws.close(1e3)}setStatus(e){this.status!==e&&(this.status=e,this.dispatchEvent(new CustomEvent("status")))}dispatchError(e){this.dispatchEvent(new CustomEvent("error",{detail:e}))}handleOnline(){window.removeEventListener("online",this.handleOnline),this.autoReconnect&&this.status===t4.Status.DISCONNECTED&&this.reconnect()}handleOpen(){console.log("Connection opened"),this.setStatus(t4.Status.REGISTERING),this.reconnectBackoff.reset(),this.setPingInterval(this.params.ping),this.nick=this.params.nick,this.send({command:"CAP",params:["LS","302"]}),this.params.pass&&this.send({command:"PASS",params:[this.params.pass]}),this.send({command:"NICK",params:[this.nick]}),this.send({command:"USER",params:[this.params.username,"0","*",this.params.realname]})}pushPendingList(e,t){let s=this.pendingLists.get(e);s||(s=[],this.pendingLists.set(e,s)),s.push(t)}endPendingList(e,t){t.list=this.pendingLists.get(e)||[],this.pendingLists.delete(e)}handleMessage(e){if("string"!=typeof e.data){console.error("Received unsupported data type:",e.data),this.ws.close(1003);return}let t=e.data;this.debug&&console.debug("Received:",t);let s=tD(t);s.prefix||(s.prefix=this.serverPrefix),s.tags||(s.tags={});let n=null;s.tags.batch&&(n=this.batches.get(s.tags.batch))&&(s.batch=n);let r=null;switch(s.command){case"001":if(this.params.saslPlain&&!this.supportsCap){this.dispatchError(Error("Server doesn't support SASL PLAIN")),this.disconnect();return}s.prefix&&(this.serverPrefix=s.prefix),this.nick=s.params[0],console.log("Registration complete"),this.setStatus(t4.Status.REGISTERED);break;case"005":let a=this.isupport.monitor(),i=s.params.slice(1,-1);this.isupport.parse(i),this.updateCaseMapping();let o=this.isupport.monitor();if(0===a&&this.monitored.size>0&&o>0){let e=Array.from(this.monitored.keys()).slice(0,o);this.send({command:"MONITOR",params:["+",e.join(",")]})}break;case"376":case"422":this.isupport.raw.has("CASEMAPPING")||this.updateCaseMapping();break;case"CAP":this.handleCap(s);break;case"AUTHENTICATE":let l=s.params[0];"+"!==l&&(this.dispatchError(Error("Expected an empty challenge, got: "+l)),this.send({command:"AUTHENTICATE",params:["*"]}));break;case"900":console.log("Logged in");break;case"901":console.log("Logged out");break;case"353":this.pushPendingList("NAMES "+s.params[2],s);break;case"366":this.endPendingList("NAMES "+s.params[1],s);break;case"311":case"312":case"313":case"317":case"319":this.pushPendingList("WHOIS "+s.params[1],s);break;case"318":this.endPendingList("WHOIS "+s.params[1],s);break;case"352":case"354":this.pushPendingList("WHO",s);break;case"315":this.endPendingList("WHO",s);break;case"PING":this.send({command:"PONG",params:[s.params[0]]});break;case"NICK":let c=s.params[0];this.isMyNick(s.prefix.name)&&(this.nick=c);break;case"BATCH":let u=s.params[0].startsWith("+"),h=s.params[0].slice(1);if(u){let e={name:h,type:s.params[1],params:s.params.slice(2),tags:s.tags,parent:n};this.batches.set(h,e)}else r=h;break;case"ERROR":this.dispatchError(new t2(s)),this.disconnect();break;case"464":case"432":case"433":case"436":case"437":case"463":case"465":this.dispatchError(new t2(s)),this.status!==t4.Status.REGISTERED&&this.disconnect();break;case"FAIL":if(this.status===t4.Status.REGISTERED)break;"BOUNCER"===s.params[0]&&"BIND"===s.params[2]&&(this.dispatchError(Error("Failed to bind to bouncer network",{cause:new t2(s)})),this.disconnect()),"ACCOUNT_REQUIRED"===s.params[1]&&(this.dispatchError(new t2(s)),this.disconnect())}this.dispatchEvent(new CustomEvent("message",{detail:{message:s,batch:n}})),r&&this.batches.delete(r)}authenticate(e,t){let s;if(!this.supportsSASL(e))throw Error(`${e} authentication not supported by the server`);switch(console.log(`Starting SASL ${e} authentication`),e){case"PLAIN":s="\0"+t.username+"\0"+t.password;break;case"EXTERNAL":s="";break;case"OAUTHBEARER":s="n,,\x01auth=Bearer "+t.token+"\x01\x01";break;default:throw Error(`Unknown authentication mechanism '${e}'`)}let n=this.roundtrip({command:"AUTHENTICATE",params:[e]},e=>{switch(e.command){case"903":return!0;case"902":case"904":case"905":case"906":case"907":throw new t2(e)}});for(let e of function(e){let t=function(e){if(!window.TextEncoder)return btoa(e);let t=new TextEncoder().encode(e),s=t.length%3,n="";for(let e=0;e<t.length-s;e+=3){let s=(t[e]<<16)+(t[e+1]<<8)+t[e+2];n+=tC[s>>18&63],n+=tC[s>>12&63],n+=tC[s>>6&63],n+=tC[63&s]}if(1===s){let e=t[t.length-1];n+=tC[e>>2],n+=tC[e<<4&63],n+="=="}else if(2===s){let e=(t[t.length-2]<<8)+t[t.length-1];n+=tC[e>>10],n+=tC[e>>4&63],n+=tC[e<<2&63],n+="="}return n}(e),s=[];for(let e=0;e<=t.length;e+=400){let n=t.substring(e,e+400);s.push({command:"AUTHENTICATE",params:[n||"+"]})}return s}(s))this.send(e);return n}who(e,t){let s=[e],n="",r="";t&&this.isupport.whox()&&(n="t",t.fields&&t.fields.forEach(e=>{if(!tX[e])throw Error(`Unknown WHOX field ${e}`);n+=tX[e]}),r=String(t1%1e3),t1++,s.push(`%${n},${r}`),this.whoxQueries.set(r,n));let a={command:"WHO",params:s},i=[],o=this.pendingCmds.WHO.then(()=>this.roundtrip(a,t=>{switch(t.command){case"352":t.internal=!0,i.push(this.parseWhoReply(t));break;case"354":if(t.params.length!==n.length+1||t.params[1]!==r)break;t.internal=!0,i.push(this.parseWhoReply(t));break;case"315":if(t.params[1]===e)return t.internal=!0,i}}).finally(()=>{this.whoxQueries.delete(r)}));return this.pendingCmds.WHO=o.catch(()=>{}),o}parseWhoReply(e){switch(e.command){case"352":let t=e.params[e.params.length-1];return{username:e.params[2],hostname:e.params[3],server:e.params[4],nick:e.params[5],flags:e.params[6],realname:t.slice(t.indexOf(" ")+1)};case"354":let s=e.params[1],n=this.whoxQueries.get(s);if(!n)throw Error("Unknown WHOX token: "+s);let r={},a=0;return Object.keys(tX).forEach(t=>{!(0>n.indexOf(tX[t]))&&(r[t]=e.params[2+a],a++)}),"0"===r.account&&(r.account=null),r;default:throw Error("Not a WHO reply: "+e.command)}}whois(e){let t=this.cm(e);return this.roundtrip({command:"WHOIS",params:[e]},e=>{let s;switch(e.command){case"318":if(s=e.params[1],this.cm(s)===t){let t={};return e.list.forEach(e=>{t[e.command]=e}),t}break;case"401":if(s=e.params[1],this.cm(s)===t)throw new t2(e)}})}supportsSASL(e){let t=this.caps.available.get("sasl");return void 0!==t&&t.split(",").includes(e)}checkAccountRegistrationCap(e){let t=this.caps.available.get("draft/account-registration");return void 0!==t&&t.split(",").includes(e)}requestCaps(){let e=[].concat(tY);this.params.bouncerNetwork||e.push("soju.im/bouncer-networks-notify"),this.params.eventPlayback&&e.push("draft/event-playback");let t=this.caps.requestAvailable(e);t&&this.send(t)}handleCap(e){this.caps.parse(e);let t=e.params[1],s=e.params.slice(2);switch(t){case"LS":if(this.supportsCap=!0,"*"===s[0])break;if(console.log("Available server caps:",this.caps.available),this.requestCaps(),this.status!==t4.Status.REGISTERED){if(this.caps.available.has("sasl")){let e;this.params.saslPlain?e=this.authenticate("PLAIN",this.params.saslPlain):this.params.saslExternal?e=this.authenticate("EXTERNAL"):this.params.saslOauthBearer&&(e=this.authenticate("OAUTHBEARER",this.params.saslOauthBearer)),(e||Promise.resolve()).catch(e=>{this.dispatchError(e),this.disconnect()})}this.caps.available.has("soju.im/bouncer-networks")&&this.params.bouncerNetwork&&this.send({command:"BOUNCER",params:["BIND",this.params.bouncerNetwork]}),this.send({command:"CAP",params:["END"]})}break;case"NEW":console.log("Server added available caps:",s[0]),this.requestCaps();break;case"DEL":console.log("Server removed available caps:",s[0]);break;case"ACK":console.log("Server ack'ed caps:",s[0]);break;case"NAK":console.log("Server nak'ed caps:",s[0]),this.status!==t4.Status.REGISTERED&&this.send({command:"CAP",params:["END"]})}}send(e){if(!this.ws)throw Error("Failed to send IRC message "+e.command+": socket is closed");let t=tO(e);this.ws.send(t),this.debug&&console.debug("Sent:",t)}updateCaseMapping(){this.cm=this.isupport.caseMapping(),this.pendingLists=new tK(this.pendingLists,this.cm),this.monitored=new tK(this.monitored,this.cm)}isServer(e){return"*"===e||this.cm(e)===this.cm(this.serverPrefix.name)}isMyNick(e){return this.cm(e)===this.cm(this.nick)}isChannel(e){return this.isupport.chanTypes().indexOf(e[0])>=0}isNick(e){return!this.isServer(e)&&!this.isChannel(e)&&!e.startsWith("$")}setPingInterval(e){clearInterval(this.pingIntervalID),this.pingIntervalID=null,e<=0||(this.pingIntervalID=setInterval(()=>{this.ws&&this.send({command:"PING",params:["gamja"]})},1e3*e))}roundtrip(e,t){let s,n=e.command;return this.caps.enabled.has("labeled-response")&&(s=String(++t0),e.tags={...e.tags,label:s}),new Promise((r,a)=>{let i;let o=e=>{let o,l=e.detail.message,c=function(e){if(e.tags.label)return e.tags.label;let t=e.batch;for(;t;){if(t.tags.label)return t.tags.label;t=t.parent}return null}(l);if(c&&c!==s)return;let u=!1;switch(l.command){case"FAIL":u=l.params[0]===n;break;case"400":case"421":case"461":case"263":u=l.params[1]===n}if(u){i(),a(new t2(l));return}try{o=t(l)}catch(e){i(),a(e)}o&&(i(),r(o))},l=()=>{this.status===t4.Status.DISCONNECTED&&(i(),a(Error("Connection closed")))};i=()=>{this.removeEventListener("message",o),this.removeEventListener("status",l)},this.addEventListener("message",o,{capture:!0}),this.addEventListener("status",l),this.send(e)})}join(e,t){let s=[e];return t&&s.push(t),this.roundtrip({command:"JOIN",params:s},t=>{switch(t.command){case"403":case"405":case"475":case"474":case"471":case"473":if(this.cm(t.params[1])===this.cm(e))throw new t2(t);break;case"JOIN":if(this.isMyNick(t.prefix.name)&&this.cm(t.params[0])===this.cm(e))return!0}})}fetchBatch(e,t){let s=null,n=[];return this.roundtrip(e,e=>{if(s){let t=e.batch;for(;t;){if(t.name===s){n.push(e);break}t=t.parent}}if("BATCH"!==e.command)return;let r=e.params[0].startsWith("+"),a=e.params[0].slice(1);if(r&&e.params[1]===t){s=a;return}if(!r&&a===s)return{...this.batches.get(a),messages:n}})}roundtripChatHistory(e){let t=this.pendingCmds.CHATHISTORY.then(()=>this.fetchBatch({command:"CHATHISTORY",params:e},"chathistory").then(e=>e.messages));return this.pendingCmds.CHATHISTORY=t.catch(()=>{}),t}async fetchHistoryBefore(e,t,s){let n=Math.min(s,this.isupport.chatHistory()),r=await this.roundtripChatHistory(["BEFORE",e,"timestamp="+t,n]);return{messages:r,more:r.length>=n}}async fetchHistoryBetween(e,t,s,n){let r=Math.min(n,this.isupport.chatHistory()),a=["AFTER",e,"timestamp="+t.time,r],i=await this.roundtripChatHistory(a);if((n-=i.length)<=0)throw Error("Cannot fetch all chat history: too many messages");return i.length>=r?(t={...t,time:i[i.length-1].tags.time},await this.fetchHistoryBetween(e,t,s,n)):{messages:i}}async fetchHistoryTargets(e,t){return(await this.fetchBatch({command:"CHATHISTORY",params:["TARGETS","timestamp="+e,"timestamp="+t,1e3]},"draft/chathistory-targets")).messages.map(e=>(console.assert("CHATHISTORY"===e.command&&"TARGETS"===e.params[0]),{name:e.params[1],latestMessage:e.params[2]}))}async listBouncerNetworks(){let e=await this.fetchBatch({command:"BOUNCER",params:["LISTNETWORKS"]},"soju.im/bouncer-networks"),t=new Map;for(let s of e.messages){console.assert("BOUNCER"===s.command&&"NETWORK"===s.params[0]);let e=s.params[1],n=t_(s.params[2]);t.set(e,n)}return t}monitor(e){!this.monitored.has(e)&&(this.monitored.set(e,!0),this.monitored.size+1>this.isupport.monitor()||this.send({command:"MONITOR",params:["+",e]}))}unmonitor(e){this.monitored.has(e)&&(this.monitored.delete(e),0>=this.isupport.monitor()||this.send({command:"MONITOR",params:["-",e]}))}createBouncerNetwork(e){let t={command:"BOUNCER",params:["ADDNETWORK",tx(e)]};return this.roundtrip(t,e=>{if("BOUNCER"===e.command&&"ADDNETWORK"===e.params[0])return e.params[1]})}registerAccount(e,t){return this.roundtrip({command:"REGISTER",params:["*",e||"*",t]},e=>{if("REGISTER"===e.command)return{verificationRequired:"VERIFICATION_REQUIRED"===e.params[0],account:e.params[1],message:e.params[2]}})}verifyAccount(e,t){return this.roundtrip({command:"VERIFY",params:[e,t]},e=>{if("VERIFY"===e.command)return{message:e.params[2]}})}supportsReadMarker(){return this.caps.enabled.has("draft/read-marker")}fetchReadMarker(e){this.send({command:"MARKREAD",params:[e]})}setReadMarker(e,t){this.send({command:"MARKREAD",params:[e,"timestamp="+t]})}}function t5(e){let t=[];for(let s in e)t.push(encodeURIComponent(s)+"="+encodeURIComponent(e[s]));return t.join("&")}async function t6(e){let t;try{if(!(t=await fetch(e+"/.well-known/oauth-authorization-server")).ok)throw Error(`HTTP error: ${t.status} ${t.statusText}`)}catch(s){if(console.warn("OAuth 2.0 server doesn't support Authorization Server Metadata (retrying with OpenID Connect Discovery): ",s),!(t=await fetch(e+"/.well-known/openid-configuration")).ok)throw Error(`HTTP error: ${t.status} ${t.statusText}`)}let s=await t.json();if(!s.issuer)throw Error("Missing issuer in response");if(!s.authorization_endpoint||!s.token_endpoint)throw Error("Missing authorization_endpoint in response");if(!s.response_types_supported.includes("code"))throw Error("Server doesn't support authorization code response type");return s}function t7(e,t){let s={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"};return t&&(s.Authorization="Basic "+btoa(encodeURIComponent(e)+":"+encodeURIComponent(t))),s}async function t9({serverMetadata:e,redirectUri:t,code:s,clientId:n,clientSecret:r}){let a={grant_type:"authorization_code",code:s,redirect_uri:t};r||(a.client_id=n);let i=await fetch(e.token_endpoint,{method:"POST",headers:t7(n,r),body:t5(a)});if(!i.ok)throw Error(`HTTP error: ${i.status} ${i.statusText}`);if((a=await i.json()).error)throw Error("Authentication failed: "+(a.error_description||a.error));return a}async function t8({serverMetadata:e,token:t,clientId:s,clientSecret:n}){let r=await fetch(e.introspection_endpoint,{method:"POST",headers:t7(s,n),body:t5({token:t})});if(!r.ok)throw Error(`HTTP error: ${r.status} ${r.statusText}`);let a=await r.json();if(!a.active)throw Error("Expired token");return a}K.options.defaults.defaultProtocol="https",K.registerCustomProtocol("irc"),K.registerCustomProtocol("ircs"),K.registerCustomProtocol("geo",!0);const se=K.createTokenClass("ircChannel",{isLink:!0,toHref(){return"irc:///"+this.v}});function st(e,t){let s=K.find(e),n=[],r=0;s.forEach(s=>{if(!s.isLink)return;let a=e.substring(r,s.start);n.push(a),n.push(tS`
			<a
				href=${s.href}
				target="_blank"
				rel="noreferrer noopener"
				onClick=${t}
			>${s.value}</a>
		`),r=s.end});let a=e.substring(r);return n.push(a),n}function ss(e){return e>="0"&&e<="9"}function sn(e){if(e.length<6)return!1;for(let t=0;t<6;t++){let s=e[t].toUpperCase();if(!(s>="0"&&s<="9"||s>="A"&&s<="F"))return!1}return!0}function sr(e){let t="";for(let s=0;s<e.length;s++){let n=e[s];switch(n){case"\x02":case"\x1d":case"\x1f":case"\x1e":case"\x11":case"\x16":case"\x0f":break;case"\x03":if(!ss(e[s+1]))break;ss(e[++s+1])&&s++,","===e[s+1]&&ss(e[s+2])&&ss(e[(s+=2)+1])&&s++;break;case"\x04":if(!sn(e.slice(s+1)))break;","===e[(s+=6)+1]&&sn(e.slice(s+2))&&(s+=7);break;default:t+=n}}return t}K.registerPlugin("ircChannel",({scanner:e,parser:t})=>{let{POUND:s,UNDERSCORE:n,DOT:r,HYPHEN:a}=e.tokens,{alphanumeric:i}=e.tokens.groups,o=t.start.tt(s),l=new K.State(se),c=l.tt(r);o.ta(i,l),o.tt(s,l),o.tt(n,l),o.tt(r,c),o.tt(a,l),l.ta(i,l),l.tt(s,l),l.tt(n,l),l.tt(a,l),c.ta(i,l)});const sa={SERVER:"server",CHANNEL:"channel",NICK:"nick"},si=t4.Status,so={NONE:"",MESSAGE:"message",HIGHLIGHT:"highlight",compare(e,t){let s={[so.NONE]:0,[so.MESSAGE]:1,[so.HIGHLIGHT]:2};return s[e]-s[t]},union:(e,t)=>so.compare(e,t)>0?e:t},sl={DELIVERED:"delivered",READ:"read"},sc={FOLD:"fold",HIDE:"hide"},su=(s={__c:t="__cC"+g++,__:"settings",Consumer:function(e,t){return e.children(t)},Provider:function(e){var s,n;return this.getChildContext||(s=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&s.some(function(e){e.__e=!0,_(e)})},this.sub=function(e){s.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){s.splice(s.indexOf(e),1),t&&t.call(e)}}),e.children}}).Provider.__=s.Consumer.contextType=s;function sh(e){switch(e.type){case sa.SERVER:return tQ();case sa.CHANNEL:return tQ({entity:e.name});case sa.NICK:return tQ({entity:e.name,enttype:"user"})}throw Error("Unknown buffer type: "+e.type)}function sp(e,t){let s=sh(e);return t.tags.msgid?s+"?msgid="+encodeURIComponent(t.tags.msgid):s+"?timestamp="+encodeURIComponent(t.tags.time)}function sd(e,t){let s=e.name;return t&&t.name&&t.name!==t.host?t.name:s||(t?t.name||t.host||"server":e.isBouncer?"bouncer":"server")}function sm(e){if(!e.tags.time)throw Error("Missing time message tag");return{time:e.tags.time}}function sf(e,t){if(!t)return!1;if(!e)return!0;if(!e.time||!t.time)throw Error("Missing receipt time");return e.time<=t.time}function sg(e,t){if(!t)return!1;if(!e.tags.time)throw Error("Missing time message tag");if(!t.time)throw Error("Missing receipt time");return e.tags.time<=t.time}function sb(e,t){let s;if(s="function"==typeof t?t(e,e):t,e!==s&&s)return{...e,...s}}function sk(e){return e.type===sa.SERVER}function sv(e){return e.type===sa.CHANNEL}function sw(e,t){let s=0;for(;s<e.length&&e[s]===t;++s);return e.substring(s)}function sE(e,t){if(e.server!==t.server)return e.server>t.server?1:-1;if(sk(e)!==sk(t))return sk(t)?1:-1;if(sv(e)&&sv(t)){let s=sw(e.name,e.name[0]),n=sw(t.name,t.name[0]),r=s.localeCompare(n);if(0!==r)return r}return e.name.localeCompare(t.name)}let sy=0,sS=0,sC=0;const s$={create:()=>({servers:new Map,buffers:new Map,activeBuffer:null,bouncerNetworks:new Map,settings:{secondsInTimestamps:!0,bufferEvents:sc.FOLD}}),updateServer(e,t,s){let n=e.servers.get(t);if(!n)return;let r=sb(n,s);if(!r)return;let a=new Map(e.servers);return a.set(t,r),{servers:a}},updateBuffer(e,t,s){let n=s$.getBuffer(e,t);if(!n)return;let r=sb(n,s);if(!r)return;let a=new Map(e.buffers);return a.set(n.id,r),{buffers:a}},getActiveServerID(e){let t=e.buffers.get(e.activeBuffer);return t?t.server:null},getBuffer(e,t){switch(typeof t){case"number":return e.buffers.get(t);case"object":if(t.id)return e.buffers.get(t.id);let s=t.server,n=t.name;s||(s=s$.getActiveServerID(e)),n||(n="*");let r=tW.RFC1459,a=e.servers.get(s);a&&(r=a.cm);let i=r(n);for(let t of e.buffers.values())if(t.server===s&&r(t.name)===i)return t;return null;default:throw Error("Invalid buffer ID type: "+typeof t)}},createServer(e){let t=++sy,s=new Map(e.servers);return s.set(t,{id:t,name:null,status:si.DISCONNECTED,cm:tW.RFC1459,users:new tK(null,tW.RFC1459),account:null,supportsSASLPlain:!1,supportsAccountRegistration:!1,reliableUserAccounts:!1,statusMsg:null,isBouncer:!1,bouncerNetID:null}),[t,{servers:s}]},createBuffer(e,t,s,n){let r,a=s$.getBuffer(e,{server:s,name:t});if(a)return[a.id,null];let i=++sS;r="*"===t?sa.SERVER:n.isChannel(t)?sa.CHANNEL:sa.NICK;let o=Array.from(e.buffers.values());return o.push({id:i,name:t,type:r,server:s,serverInfo:null,joined:!1,topic:null,hasInitialWho:!1,members:new tK(null,n.cm),messages:[],unread:so.NONE,prevReadReceipt:null}),[i,{buffers:new Map((o=o.sort(sE)).map(e=>[e.id,e]))}]},storeBouncerNetwork(e,t,s){let n=new Map(e.bouncerNetworks);return n.set(t,{...n.get(t),...s}),{bouncerNetworks:n}},deleteBouncerNetwork(e,t){let s=new Map(e.bouncerNetworks);return s.delete(t),{bouncerNetworks:s}},handleMessage(e,t,s,n){let r,a,i,o,l;function c(t){return s$.updateServer(e,s,t)}function u(t,n){return s$.updateBuffer(e,{server:s,name:t},n)}function h(e,t){return c(s=>{let n=new tK(s.users),r=sb(n.get(e),t);if(r)return n.set(e,r),{users:n}})}if(!tV(t,"chathistory"))switch(t.command){case"004":return u("*",{serverInfo:{name:t.params[1],version:t.params[2]}});case"005":return l=new Map(e.buffers),e.buffers.forEach(e=>{if(e.server!==s)return;let t=new tK(e.members,n.cm);l.set(e.id,{...e,members:t})}),{buffers:l,...c(e=>({name:n.isupport.network(),cm:n.cm,users:new tK(e.users,n.cm),reliableUserAccounts:n.isupport.monitor()>0&&n.isupport.whox(),statusMsg:n.isupport.statusMsg(),bouncerNetID:n.isupport.bouncerNetID()}))};case"CAP":return c({supportsSASLPlain:n.supportsSASL("PLAIN"),supportsAccountRegistration:n.caps.enabled.has("draft/account-registration"),isBouncer:n.caps.enabled.has("soju.im/bouncer-networks")});case"900":return c({account:t.params[2]});case"901":return c({account:null});case"REGISTER":case"VERIFY":if("SUCCESS"===t.params[0])return c({account:t.params[1]});break;case"331":return u(a=t.params[1],{topic:null});case"332":return u(a=t.params[1],{topic:t.params[2]});case"333":break;case"366":return u(a=t.params[1],e=>{let s=new tK(null,e.members.caseMap);return t.list.forEach(e=>{e.params[3].split(" ").forEach(e=>{let t=tA(e);s.set(t.name,t.prefix)})}),{members:s}});case"315":if(r=t.params[1],0===t.list.length&&!n.isChannel(r)&&0>r.indexOf("*"))return h(r,e=>({offline:!0}));return c(e=>{let s=new tK(e.users);for(let e of t.list){let t=n.parseWhoReply(e);if(void 0!==t.flags){t.away=t.flags.indexOf("G")>=0,t.operator=t.flags.indexOf("*")>=0;let e=n.isupport.bot();e&&(t.bot=t.flags.indexOf(e)>=0),delete t.flags}t.offline=!1,s.set(t.nick,t)}return{users:s}});case"JOIN":if(a=t.params[0],n.isMyNick(t.prefix.name)){let[t,r]=s$.createBuffer(e,a,s,n);e={...e,...r}}return o=u(a,e=>{let s=new tK(e.members);return s.set(t.prefix.name,""),{members:s,joined:e.joined||n.isMyNick(t.prefix.name)}}),e={...e,...o},i={nick:t.prefix.name,offline:!1},t.prefix.user&&(i.username=t.prefix.user),t.prefix.host&&(i.hostname=t.prefix.host),t.params.length>2&&(i.account=t.params[1],"*"===i.account&&(i.account=null),i.realname=t.params[2]),o=h(t.prefix.name,i),e={...e,...o};case"PART":return u(a=t.params[0],e=>{let s=new tK(e.members);return s.delete(t.prefix.name),{members:s,joined:e.joined&&!n.isMyNick(t.prefix.name)}});case"KICK":a=t.params[0];let p=t.params[1];return u(a,e=>{let t=new tK(e.members);return t.delete(p),{members:t,joined:e.joined&&!n.isMyNick(p)}});case"QUIT":return l=new Map(e.buffers),e.buffers.forEach(e=>{if(e.server!==s||!e.members.has(t.prefix.name))return;let n=new tK(e.members);n.delete(t.prefix.name),l.set(e.id,{...e,members:n})}),e={...e,buffers:l},o=h(t.prefix.name,e=>{if(e)return{offline:!0}}),e={...e,...o};case"NICK":let d=t.params[0];return l=new Map(e.buffers),e.buffers.forEach(e=>{if(e.server!==s||!e.members.has(t.prefix.name))return;let n=new tK(e.members);n.set(d,n.get(t.prefix.name)),n.delete(t.prefix.name),l.set(e.id,{...e,members:n})}),e={...e,buffers:l},o=c(e=>{let s=new tK(e.users),n=s.get(t.prefix.name);if(n)return s.set(d,n),s.delete(t.prefix.name),{users:s}}),e={...e,...o};case"SETNAME":return h(t.prefix.name,{realname:t.params[0]});case"CHGHOST":return h(t.prefix.name,{username:t.params[0],hostname:t.params[1]});case"ACCOUNT":let m=t.params[0];return"*"===m&&(m=null),h(t.prefix.name,{account:m});case"AWAY":let f=t.params[0];return h(t.prefix.name,{away:!!f});case"TOPIC":return u(a=t.params[0],{topic:t.params[1]});case"MODE":if(r=t.params[0],!n.isChannel(r))return;let g=new Map(tG(n.isupport.prefix()).map(e=>[e.mode,e.prefix]));return u(r,e=>{let s=new tK(e.members);return!function(e,t,s){let[n,r,a,i]=t.chanModes(),o=t.prefix(),l=new Map;if(Array.from(n).forEach(e=>l.set(e,"A")),Array.from(r).forEach(e=>l.set(e,"B")),Array.from(a).forEach(e=>l.set(e,"C")),Array.from(i).forEach(e=>l.set(e,"D")),tG(o).forEach(e=>l.set(e.mode,"B")),"MODE"!==e.command)throw Error("Expected a MODE message");let c=e.params[1],u=e.params.slice(2),h=null,p=0;for(let e=0;e<c.length;e++){if("+"===c[e]||"-"===c[e]){h=c[e];continue}if(!h)throw Error("malformed mode string: missing plus/minus");let t=c[e],n="+"===h,r=l.get(t);if(!r)continue;let a=null;("A"===r||"B"===r||"C"===r&&n)&&(a=u[p],p++),s(t,n,a)}}(t,n.isupport,(e,t,r)=>{if(g.has(e)){var a;let i,o=s.get(r),l=g.get(e);s.set(r,(a=o,i=new Map(tG(n.isupport.prefix()).map((e,t)=>[e.prefix,t])),t?0>a.indexOf(l)&&(a+=l,a=Array.from(a).sort((e,t)=>i.get(e)-i.get(t)).join("")):a=a.replace(l,""),a))}}),{members:s}});case"730":case"731":for(let s of t.params[1].split(",")){let n=h(tT(s).name,{offline:"731"===t.command});e={...e,...n}}return e}},addMessage:(e,t,s)=>(sC++,t.key=sC,s$.updateBuffer(e,s,e=>({messages:function(e,t){if(0===e.length)return[t];if(!tV(t,"chathistory")||e[e.length-1].tags.time<=t.tags.time)return e.concat(t);let s=-1;for(let n=0;n<e.length;n++){let r=e[n];if(t.tags.time<r.tags.time){s=n;break}}return console.assert(s>=0,""),(e=[...e]).splice(s,0,t),e}(e.messages,t)})))};class sN{constructor(e){this.k="gamja_"+e}load(){let e=localStorage.getItem(this.k);return e?JSON.parse(e):null}put(e){e?localStorage.setItem(this.k,JSON.stringify(e)):localStorage.removeItem(this.k)}}const sI=new sN("autoconnect"),sR=new sN("naggedProtocolHandler"),s_=new sN("settings");class sx{raw=new sN("buffers");m=null;constructor(){let e,t=this.raw.load();this.m=new Map(Object.entries(t||{}));let s=this.save.bind(this);this.save=(e=null,(...t)=>{clearTimeout(e),e=setTimeout(()=>{e=null,s(...t)},500)}),document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&s()})}key(e){return JSON.stringify({name:e.name.toLowerCase(),server:{bouncerNetwork:e.server.bouncerNetwork}})}save(){this.m.size>0?this.raw.put(Object.fromEntries(this.m)):this.raw.put(null)}get(e){return this.m.get(this.key(e))}put(e){let t=this.key(e),s=!this.m.has(t),n=this.m.get(t)||{},r=n.unread||so.NONE;void 0!==e.unread&&e.unread!==n.unread&&(r=e.unread,s=!0);let a={...n.receipts};e.receipts&&(Object.keys(e.receipts).forEach(t=>{(!a[t]||a[t].time<e.receipts[t].time)&&(a[t]=e.receipts[t],s=!0)}),a[sl.DELIVERED]<a[sl.READ]&&(a[sl.DELIVERED]=a[sl.READ],s=!0));let i=n.closed||!1;return void 0!==e.closed&&e.closed!==n.closed&&(i=e.closed,s=!0),!!s&&(this.m.set(this.key(e),{name:e.name,unread:r,receipts:a,closed:i,server:{bouncerNetwork:e.server.bouncerNetwork}}),this.save(),!0)}delete(e){this.m.delete(this.key(e)),this.save()}list(e){let t=new Set,s=[];for(let n of this.m.values())n.server.bouncerNetwork===e.bouncerNetwork&&(t.has(n.name)||(s.push(n),t.add(n.name)));return s}clear(e){if(e)for(let t of this.list(e))this.m.delete(this.key(t));else this.m=new Map;this.save()}}function sT(e){if(!this.props.value)return null;let t=t$[this.props.value[0]]||"";return tS`
		<span class="membership ${t}" title=${t}>
			${this.props.value}
		</span>
	`}function sD(e){let t;e.user&&tz(e.user.realname,e.nick)&&(t=sr(e.user.realname));let s=function(e){let t=5381;for(let s=0;s<e.length;s++)t=(t<<5)+t+e.charCodeAt(s)>>>0;return t}(e.nick)%16+1;return tS`
		<a
			href=${tQ({entity:e.nick})}
			title=${t}
			class="nick nick-${s}"
			onClick=${function(t){t.preventDefault(),e.onClick()}}
		>${e.nick}</a>
	`}function sO({date:e,url:t,showSeconds:s}){if(!e){let e="--:--";return s&&(e+=":--"),tS`<spam class="timestamp">${e}</span>`}let n=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0"),a=`${n}:${r}`;return s&&(a+=":"+e.getSeconds().toString().padStart(2,"0")),tS`
		<a
			href=${t}
			class="timestamp"
			title=${e.toLocaleString()}
			onClick=${e=>e.preventDefault()}
		>
			${a}
		</a>
	`}function sA(e){return tS`
		<${su.Consumer}>
			${t=>tS`
				<${sO} ...${e} showSeconds=${t.secondsInTimestamps}/>
			`}
		</>
	`}function sL(e){switch(e.command){case"JOIN":case"PART":case"QUIT":case"NICK":return!0}return!1}class sM extends I{shouldComponentUpdate(e){return this.props.message!==e.message}render(){let e,t,s,n,r=this.props.message,a=this.props.buffer,i=this.props.server,o=this.props.onNickClick,l=this.props.onChannelClick,c=this.props.onVerifyClick;function u(e){return tS`
				<${sD}
					nick=${e}
					user=${i.users.get(e)}
					onClick=${()=>o(e)}
				/>
			`}let h="";switch(r.command){case"NOTICE":case"PRIVMSG":s=r.params[0];let p=r.params[1],d=tj(r);if(d)"ACTION"===d.command?(h="me-tell",e=tS`* ${u(r.prefix.name)} ${st(sr(d.param),l)}`):e=tS`
						${u(r.prefix.name)} has sent a CTCP command: ${d.command} ${d.param}
					`;else{h="talk";let t="<",s=">";"NOTICE"===r.command&&(t=s="-"),e=tS`${t}${u(r.prefix.name)}${s} ${st(sr(p),l)}`}let m=i.statusMsg;if(s!==a.name&&m){let t=tA(s,m);t.name===a.name&&(e=[tS`(<${sT} value=${t.prefix}/>)`," ",e])}r.tags["+draft/channel-context"]&&(e=tS`<em>(only visible to you)</em> ${e}`),r.isHighlight&&(h+=" highlight");break;case"JOIN":e=tS`
				${u(r.prefix.name)} has joined
			`;break;case"PART":e=tS`
				${u(r.prefix.name)} has left
			`;break;case"QUIT":e=tS`
				${u(r.prefix.name)} has quit
			`;break;case"NICK":let f=r.params[0];e=tS`
				${u(r.prefix.name)} is now known as ${u(f)}
			`;break;case"KICK":e=tS`
				${u(r.params[1])} was kicked by ${u(r.prefix.name)} (${r.params.slice(2)})
			`;break;case"MODE":s=r.params[0];let g=r.params[1],b=tS`${u(r.prefix.name)}`;if(a.type===sa.CHANNEL&&2===g.length&&i.cm(a.name)===i.cm(s)){let t,s,n=g[0],a=g[1],i=r.params[2];switch(a){case"b":t="+"===n?"added":"removed",e=tS`${b} has ${t} a ban on ${i}`;break;case"e":t="+"===n?"added":"removed",e=tS`${b} has ${t} a ban exemption on ${i}`;break;case"l":e="+"===n?tS`${b} has set the channel user limit to ${i}`:tS`${b} has unset the channel user limit`;break;case"i":t="+"===n?"marked":"unmarked",e=tS`${b} has ${t} as invite-only`;break;case"m":t="+"===n?"marked":"unmarked",e=tS`${b} has ${t} as moderated`;break;case"s":t="+"===n?"marked":"unmarked",e=tS`${b} has ${t} as secret`;break;case"t":t="+"===n?"locked":"unlocked",e=tS`${b} has ${t} the channel topic`;break;case"n":t="+"===n?"allowed":"denied",e=tS`${b} has ${t} external messages to this channel`}if(e)break;for(let e in tN)if(tN[e]===a){s=t$[e];break}if(s&&i){e=tS`
						${b} has ${"+"===n?"granted":"revoked"} ${s} privileges ${"+"===n?"to":"from"} ${u(i)}
					`;break}}e=tS`
				${b} sets mode ${r.params.slice(1).join(" ")}
			`,i.cm(a.name)!==i.cm(s)&&(e=tS`${e} on ${s}`);break;case"TOPIC":let k=r.params[1];e=tS`
				${u(r.prefix.name)} changed the topic to: ${st(sr(k),l)}
			`;break;case"INVITE":t=r.params[0];let v=r.params[1];a.type===sa.SERVER?(h="talk",e=tS`
					You have been invited to ${tS`
				<a href=${tQ({entity:v})} onClick=${l}>
					${v}
				</a>
			`} by ${u(r.prefix.name)}
				`):e=tS`
					${u(r.prefix.name)} has invited ${u(t)} to the channel
				`;break;case"001":let w=r.params[0];e=tS`Connected to server, your nickname is ${w}`;break;case"341":t=r.params[1],e=tS`${u(t)} has been invited to the channel`;break;case"372":h="motd",e=st(sr(r.params[1]),l);break;case"900":n=r.params[2],e=tS`You are now authenticated as ${n}`;break;case"901":e=tS`You are now unauthenticated`;break;case"REGISTER":n=r.params[1];let E=r.params[2];switch(r.params[0]){case"SUCCESS":e=tS`A new account has been created, you are now authenticated as ${n}`;break;case"VERIFICATION_REQUIRED":e=tS`A new account has been created, but you need to <a href="#" onClick=${function(e){e.preventDefault(),c(n,E)}}>verify it</a>: ${st(E)}`}break;case"VERIFY":n=r.params[1],e=tS`The new account has been verified, you are now authenticated as ${n}`;break;case"221":let y=r.params[1];e=y?tS`Your user mode is ${y}`:tS`You have no user mode`;break;case"324":e=tS`Channel mode is ${r.params.slice(2).join(" ")}`;break;case"329":let S=new Date(1e3*parseInt(r.params[2],10));e=tS`Channel was created on ${S.toLocaleString()}`;break;case"730":e=tS`${u(a.name)} is online`;break;case"731":e=tS`${u(a.name)} is offline`;break;default:tB(r.command)&&"422"!==r.command&&(h="error"),e=tS`${r.command} ${st(r.params.join(" "))}`}return e?tS`
			<div class="logline ${h}" data-key=${r.key}>
				<${sA} date=${new Date(r.tags.time)} url=${sp(a,r)}/>
				${" "}
				${e}
			</div>
		`:null}}class sP extends I{shouldComponentUpdate(e){return this.props.messages[0]!==e.messages[0]||this.props.messages[this.props.messages.length-1]!==e.messages[e.messages.length-1]}render(){let e=this.props.messages,t=this.props.buffer,s=this.props.server,n=this.props.onNickClick;function r(e){return tS`
				<${sD}
					nick=${e}
					user=${s.users.get(e)}
					onClick=${()=>n(e)}
				/>
			`}let a={JOIN:[],PART:[],QUIT:[],NICK:[]};e.forEach(e=>{a[e.command].push(e)});let i=!0,o=[];["JOIN","PART","QUIT"].forEach(e=>{let t;if(0===a[e].length)return;let s=new Set(a[e].map(e=>e.prefix.name)),n=s.size>1;switch(e){case"JOIN":t=n?"have joined":"has joined";break;case"PART":t=n?"have left":"has left";break;case"QUIT":t=n?"have quit":"has quit"}i?i=!1:o.push(", "),o.push(function(e,t){if(0===e.length)return null;if(1===e.length)return t(e[0]);let s=e.slice(0,e.length-1).map((e,s)=>0===s?t(e):[", ",t(e)]);return s.push(" and "),s.push(t(e[e.length-1])),s}([...s],r)),o.push(" "+t)}),a.NICK.forEach(e=>{i?i=!1:o.push(", ");let t=e.params[0];o.push(tS`
				${r(e.prefix.name)} is now known as ${r(t)}
			`)});let l=e[e.length-1],c=new Date(e[0].tags.time),u=new Date(l.tags.time),h=tS`
			<${sA} date=${c} url=${sp(t,e[0])}/>
		`;return u-c>6e3&&(h=[h," — ",tS`
					<${sA} date=${u} url=${sp(t,l)}/>
				`]),tS`
			<div class="logline" data-key=${e[0].key}>
				${h}
				${" "}
				${o}
			</div>
		`}}let sB=!1;if(window.Notification&&(sB=!0,"default"===Notification.permission))try{new Notification("")}catch(e){"TypeError"===e.name&&(sB=!1)}class sH extends I{state={nag:!1};constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.state.nag=this.shouldNag()}shouldNag(){return sB&&"default"===Notification.permission}handleClick(e){e.preventDefault(),Notification.requestPermission(e=>{this.setState({nag:this.shouldNag()})})}render(){return this.state.nag?tS`
			<div class="logline">
				<${sA}/>
				${" "}
				<a href="#" onClick=${this.handleClick}>Turn on desktop notifications</a> to get notified about new messages
			</div>
		`:null}}class sj extends I{state={nag:!0};constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.state.nag=!sR.load()}handleClick(e){e.preventDefault();let t=window.location.origin+window.location.pathname+"?open=%s";try{navigator.registerProtocolHandler("irc",t),navigator.registerProtocolHandler("ircs",t)}catch(e){console.error("Failed to register protocol handler: ",e)}sR.put(!0),this.setState({nag:!1})}render(){if(!navigator.registerProtocolHandler||!this.state.nag)return null;let e=this.props.bouncerName||"this bouncer";return tS`
			<div class="logline">
				<${sA}/>
				${" "}
				<a href="#" onClick=${this.handleClick}>Register our protocol handler</a> to open IRC links with ${e}
			</div>
		`}}function sU({server:e,onAuthClick:t,onRegisterClick:s}){let n="an account on this server";e.name&&(n="a "+e.name+" account");let r=[tS`
		You are unauthenticated on this server,
		${" "}
		<a href="#" onClick=${function(e){e.preventDefault(),t()}}>login</a>
		${" "}
	`];return e.supportsAccountRegistration?r.push(tS`or <a href="#" onClick=${function(e){e.preventDefault(),s()}}>register</a> ${n}`):r.push(tS`if you have ${n}`),tS`
		<div class="logline">
			<${sA}/> ${r}
		</div>
	`}class sW extends I{constructor(e){super(e)}shouldComponentUpdate(e){return this.props.date.getTime()!==e.date.getTime()}render(){let e=this.props.date.toLocaleDateString([],{year:"numeric",month:"2-digit",day:"2-digit"});return tS`
			<div class="separator date-separator">
				${e}
			</div>
		`}}function sF(e){return tS`<div class="separator unread-separator">New messages</div>`}class sK extends I{shouldComponentUpdate(e){return this.props.buffer!==e.buffer||this.props.settings!==e.settings}render(){let e=this.props.buffer;if(!e)return null;let t=this.props.server,s=this.props.settings,n=t.name,r=[];e.type===sa.SERVER&&r.push(tS`<${sH}/>`),e.type===sa.SERVER&&t.isBouncer&&!t.bouncerNetID&&r.push(tS`<${sj} bouncerName=${n}/>`),e.type===sa.SERVER&&t.status===si.REGISTERED&&t.supportsSASLPlain&&!t.account&&r.push(tS`
				<${sU}
					server=${t}
					onAuthClick=${this.props.onAuthClick}
					onRegisterClick=${this.props.onRegisterClick}
				/>
			`);let a=this.props.onChannelClick,i=this.props.onNickClick,o=this.props.onVerifyClick;function l(s){return tS`
				<${sM}
					key=${"msg-"+s.key}
					message=${s}
					buffer=${e}
					server=${t}
					onChannelClick=${a}
					onNickClick=${i}
					onVerifyClick=${o}
				/>
			`}function c(s){let n=new Map,r=[];for(let e of s){let t=!0;switch(e.command){case"PART":case"QUIT":n.delete(e.prefix.name);break;case"NICK":let s=n.get(e.prefix.name);if(!s){e={...e},n.set(e.params[0],e);break}s.params=e.params,n.delete(e.prefix.name),n.set(e.params[0],s),t=!1}t&&r.push(e)}s=r;let a=new Map,o=[];return(s.forEach((e,t)=>{("PART"===e.command||"QUIT"===e.command)&&a.set(e.prefix.name,t),"JOIN"===e.command&&a.has(e.prefix.name)?(o[a.get(e.prefix.name)]=!1,a.delete(e.prefix.name),o.push(!1)):"NICK"===e.command&&e.prefix.name===e.params[0]?o.push(!1):o.push(!0)}),0===(s=s.filter((e,t)=>o[t])).length)?null:1===s.length?l(s[0]):tS`
				<${sP}
					key=${"fold-"+s[0].key+"-"+s[s.length-1].key}
					messages=${s}
					buffer=${e}
					server=${t}
					onNickClick=${i}
				/>
			`}let u=!1,h=new Date,p=[],d=null;return e.messages.forEach(t=>{var n;let a=[];if(s.bufferEvents===sc.HIDE&&sL(t))return;if("730"===t.command||"731"===t.command){let e=!d||t.command===d;if(d=t.command,e)return}u||e.type===sa.SERVER||sg(t,e.prevReadReceipt)||(a.push(tS`<${sF} key="unread"/>`),u=!0);let i=new Date(t.tags.time);if(((n=h).getFullYear()!==i.getFullYear()||n.getMonth()!==i.getMonth()||n.getDate()!==i.getDate())&&a.push(tS`<${sW} key=${"date-"+i} date=${i}/>`),h=i,a.length>0&&(r.push(c(p)),r.push(a),p=[]),s.bufferEvents===sc.FOLD&&sL(t)){p.push(t);return}p.length>0&&(r.push(c(p)),p=[]),r.push(l(t))}),r.push(c(p)),tS`
			<div class="logline-list">
				${r}
			</div>
		`}}function sG(e){let t;let s=e.buffer.name;e.buffer.type===sa.SERVER&&(s=sd(e.server,e.bouncerNetwork));let n=["type-"+e.buffer.type];switch(e.active&&n.push("active"),e.buffer.unread!==so.NONE&&n.push("unread-"+e.buffer.unread),e.buffer.type){case sa.SERVER:let r=e.server.status===si.DISCONNECTED;e.bouncerNetwork&&e.bouncerNetwork.error&&(r=!0),r&&n.push("error");break;case sa.NICK:let a=e.server.users.get(s);a&&tz(a.realname,s)&&(t=sr(a.realname))}return tS`
		<li class="${n.join(" ")}">
			<a
				href=${sh(e.buffer)}
				title=${t}
				onClick=${function(t){t.preventDefault(),e.onClick()}}
				onMouseDown=${function(t){1===t.button&&(t.preventDefault(),e.onClose())}}
			>${s}</a>
		</li>
	`}function sV(e){let t=Array.from(e.buffers.values()).map(t=>{let s=e.servers.get(t.server),n=null;return s.bouncerNetID&&(n=e.bouncerNetworks.get(s.bouncerNetID)),tS`
			<${sG}
				key=${t.id}
				buffer=${t}
				server=${s}
				bouncerNetwork=${n}
				onClick=${()=>e.onBufferClick(t)}
				onClose=${()=>e.onBufferClose(t)}
				active=${e.activeBuffer===t.id}
			/>
		`});return tS`<ul>${t}</ul>`}const sz={HERE:"here",GONE:"gone",OFFLINE:"offline"};function sq(e){let t={[sz.HERE]:"User is online",[sz.GONE]:"User is away",[sz.OFFLINE]:"User is offline"}[e.status];return tS`<span class="status status-${e.status}" title=${t}>●</span>`}function sQ(e){let t=e.server.status===si.REGISTERED;e.bouncerNetwork&&(t=t&&"connected"===e.bouncerNetwork.state);let s=null,n=[];switch(e.buffer.type){case sa.SERVER:switch(e.server.status){case si.DISCONNECTED:s="Disconnected";break;case si.CONNECTING:s="Connecting...";break;case si.REGISTERING:s="Logging in...";break;case si.REGISTERED:if(e.bouncerNetwork)switch(e.bouncerNetwork.state){case"disconnected":s="Bouncer disconnected from network",e.bouncerNetwork.error&&(s+=": "+e.bouncerNetwork.error);break;case"connecting":s="Bouncer connecting to network...";break;case"connected":s=`Connected to ${e.bouncerNetwork.host||"network"}`}else if(e.buffer.serverInfo){let t=e.buffer.serverInfo;s=`Connected to ${t.name}`}else s="Connected"}let r=tS`
			<button
				key="join"
				onClick=${e.onJoin}
			>Join channel</button>
		`,a=tS`
			<button
				key="reconect"
				onClick=${e.onReconnect}
			>Reconnect</button>
		`,i=tS`
			<button
				key="settings"
				onClick="${e.onOpenSettings}"
			>Settings</button>
		`;e.server.isBouncer?e.server.bouncerNetID?(t&&n.push(r),e.server.status===si.REGISTERED&&n.push(tS`
						<button
							key="manage"
							onClick=${e.onManageNetwork}
						>Manage network</button>
					`)):(t?n.push(tS`
						<button
							key="add"
							onClick=${e.onAddNetwork}
						>Add network</button>
					`):e.server.status===si.DISCONNECTED&&n.push(a),n.push(i)):(t?n.push(r):e.server.status===si.DISCONNECTED&&n.push(a),n.push(i));break;case sa.CHANNEL:e.buffer.topic&&(s=st(sr(e.buffer.topic),e.onChannelClick)),e.buffer.joined?n.push(tS`
				<button
					key="part"
					class="danger"
					onClick=${e.onClose}
				>Leave</button>
			`):(t&&n.push(tS`
					<button
						key="join"
						onClick=${e.onJoin}
					>Join</button>
				`),n.push(tS`
				<button
					key="part"
					class="danger"
					onClick=${e.onClose}
				>Close</button>
			`));break;case sa.NICK:if(e.user){let t=sz.HERE;e.user.offline?t=sz.OFFLINE:e.user.away&&(t=sz.GONE);let n=e.buffer.name;tz(e.user.realname,e.buffer.name)&&(n=sr(e.user.realname||""));let r=[];if(e.user.username&&e.user.hostname&&r.push(`${e.user.username}@${e.user.hostname}`),e.user.account){let t,s=`This user is verified and has logged in to the server with the account ${e.user.account}.`;t=e.user.account===e.buffer.name?"authenticated":`authenticated as ${e.user.account}`,r.push(tS`<abbr title=${s}>${t}</abbr>`)}else e.server.reliableUserAccounts&&r.push(tS`<abbr title=${"This user has not been verified and is not logged in."}>unauthenticated</abbr>`);e.user.operator&&r.push(tS`<abbr title=${"This user is a server operator, they have administrator privileges."}>server operator</abbr>`),e.user.bot&&r.push(tS`<abbr title=${"This user is an automated bot."}>bot</abbr>`),(r=r.map((e,t)=>0===t?e:[", ",e])).length>0&&(r=["(",r,")"]),s=tS`<${sq} status=${t}/> ${n} ${r}`}n=tS`
			<button
				key="close"
				class="danger"
				onClick=${e.onClose}
			>Close</button>
		`}let o=e.buffer.name;return e.buffer.type===sa.SERVER&&(o=sd(e.server,e.bouncerNetwork)),tS`
		<div class="title">${o}</div>
		${s?tS`<div class="description">${s}</div>`:null}
		<div class="actions">${n}</div>
	`}class sJ extends I{constructor(e){super(e),this.handleClick=this.handleClick.bind(this)}shouldComponentUpdate(e){return this.props.nick!==e.nick||this.props.membership!==e.membership||this.props.user!==e.user}handleClick(e){e.preventDefault(),this.props.onClick()}render(){let e;let t=this.props.user,s=["nick"];if(t){let n="";t.username&&t.hostname&&(n=`${t.username}@${t.hostname}`),tz(t.realname,this.props.nick)?(e=sr(t.realname),n&&(e=`${e} (${n})`)):e=n,t.account&&(e+=`
Authenticated as ${t.account}`),t.away&&(s.push("away"),e+="\nAway")}return tS`
			<li>
				<a
					href=${tQ({entity:this.props.nick,enttype:"user"})}
					class=${s.join(" ")}
					title=${e}
					onClick=${this.handleClick}
				>
					<${sT} value=${this.props.membership}/>
					${this.props.nick}
				</a>
			</li>
		`}}function sY(e,t){let[s,n]=e,[r,a]=t,i=["~","&","@","%","+"],o=i.indexOf(n[0]),l=i.indexOf(a[0]);return(o<0&&(o=i.length),l<0&&(l=i.length),o!==l)?o-l:s.localeCompare(r)}class sX extends I{shouldComponentUpdate(e){return this.props.members!==e.members||this.props.users!==e.users}render(){return tS`
			<ul>
				${Array.from(this.props.members).sort(sY).map(([e,t])=>tS`
					<${sJ}
						key=${e}
						nick=${e}
						membership=${t}
						user=${this.props.users.get(e)}
						onClick=${()=>this.props.onNickClick(e)}
					/>
				`)}
			</ul>
		`}}class sZ extends I{state={url:"",pass:"",nick:"",password:"",rememberMe:!1,username:"",realname:"",autojoin:!0};nickInput=$();constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),e.params&&(this.state={...this.state,url:e.params.url||"",nick:e.params.nick||"",rememberMe:e.params.autoconnect||!1,username:e.params.username||"",realname:e.params.realname||""})}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){if(e.preventDefault(),this.props.connecting)return;let t={url:this.state.url,pass:this.state.pass,nick:this.state.nick,autoconnect:this.state.rememberMe,username:this.state.username,realname:this.state.realname,saslPlain:null,autojoin:[]};this.state.password?t.saslPlain={username:t.username||t.nick,password:this.state.password}:"external"===this.props.auth?t.saslExternal=!0:"oauth2"===this.props.auth&&(t.saslOauthBearer=this.props.params.saslOauthBearer),this.state.autojoin&&(t.autojoin=this.props.params.autojoin||[]),this.props.onSubmit(t)}componentDidMount(){this.nickInput.current&&this.nickInput.current.focus()}render(){let e=this.props.connecting,t=null;this.props.params&&this.props.params.url||(t=tS`
				<label>
					Server URL:<br/>
					<input
						type="text"
						name="url"
						value=${this.state.url}
						disabled=${e}
						inputmode="url"
					/>
				</label>
				<br/><br/>
			`);let s=null;this.props.connecting?s=tS`
				<p>Connecting...</p>
			`:this.props.error&&(s=tS`
				<p class="error-text">${st(this.props.error)}</p>
			`);let n=null;"disabled"!==this.props.auth&&"external"!==this.props.auth&&"oauth2"!==this.props.auth&&(n=tS`
				<label>
					Password:<br/>
					<input
						type="password"
						name="password"
						value=${this.state.password}
						disabled=${e}
						required=${"mandatory"===this.props.auth}
						placeholder=${"mandatory"!==this.props.auth?"(optional)":""}
					/>
				</label>
				<br/><br/>
			`);let r=null,a=this.props.params.autojoin||[];if(a.length>0){let e=a.length>1?"s":"";r=tS`
				<label>
					<input
						type="checkbox"
						name="autojoin"
						checked=${this.state.autojoin}
					/>
					Auto-join channel${e} <strong>${a.join(", ")}</strong>
				</label>
				<br/><br/>
			`}return tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<h2>Connect to IRC</h2>

				<label>
					Nickname:<br/>
					<input
						type="username"
						name="nick"
						value=${this.state.nick}
						disabled=${e}
						ref=${this.nickInput}
						required
						autofocus
					/>
				</label>
				<br/><br/>

				${n}

				${r}

				<label>
					<input
						type="checkbox"
						name="rememberMe"
						checked=${this.state.rememberMe}
						disabled=${e}
					/>
					Remember me
				</label>
				<br/><br/>

				<details>
					<summary role="button">Advanced options</summary>

					<br/>

					${t}

					<label>
						Username:<br/>
						<input
							type="username"
							name="username"
							value=${this.state.username}
							disabled=${e}
							placeholder="Same as nickname"
						/>
					</label>
					<br/><br/>

					<label>
						Real name:<br/>
						<input
							type="text"
							name="realname"
							value=${this.state.realname}
							disabled=${e}
							placeholder="Same as nickname"
						/>
					</label>
					<br/><br/>

					<label>
						Server password:<br/>
						<input
							type="password"
							name="pass"
							value=${this.state.pass}
							disabled=${e}
							placeholder="None"
						/>
					</label>
					<br/><br/>
				</details>

				<br/>
				<button disabled=${e}>Connect</button>

				${s}
			</form>
		`}}class s0 extends I{state={channel:"#"};constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),e.channel&&(this.state.channel=e.channel)}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){e.preventDefault();let t={channel:this.state.channel};this.props.onSubmit(t)}render(){return tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					Channel:<br/>
					<input type="text" name="channel" value=${this.state.channel} autofocus required/>
				</label>
				<br/>

				<br/>
				<button>Join</button>
			</form>
		`}}function s1(e,t,s){let n=Array.from(e.values()),r=n.findIndex(e=>e.id===t);return r<0?null:(r=(r+n.length+s)%n.length,n[r])}const s2=[{key:"h",altKey:!0,description:"Mark all messages as read",execute:e=>{e.setState(t=>{let s=new Map;return t.buffers.forEach(t=>{s.set(t.id,{...t,unread:so.NONE,prevReadReceipt:null});let n={};if(t.messages.length>0){let e=t.messages[t.messages.length-1];n[sl.READ]=sm(e)}let r=e.clients.get(t.server);e.bufferStore.put({name:t.name,server:r.params,unread:so.NONE,receipts:n})}),{buffers:s}},()=>{e.updateDocumentTitle()})}},{key:"a",altKey:!0,description:"Jump to next buffer with activity",execute:e=>{let t=null,s=null;for(let n of e.state.buffers.values())t||n.type!==sa.SERVER||(t=n),n.unread!==so.NONE&&(!s||so.compare(n.unread,s.unread)>0)&&(s=n);s||(s=t),s&&e.switchBuffer(s)}},{key:"ArrowUp",altKey:!0,description:"Jump to the previous buffer",execute:e=>{let t=s1(e.state.buffers,e.state.activeBuffer,-1);t&&e.switchBuffer(t)}},{key:"ArrowDown",altKey:!0,description:"Jump to the next buffer",execute:e=>{let t=s1(e.state.buffers,e.state.activeBuffer,1);t&&e.switchBuffer(t)}},{key:"k",ctrlKey:!0,description:"Switch to a buffer",execute:e=>{e.openDialog("switch")}}];function s3(e){let t=e.state.buffers.get(e.state.activeBuffer);if(!t)throw Error("Not connected to server");return e.clients.get(t.server)}function s4(e){let t=e.state.buffers.get(e.state.activeBuffer);if(!t||t.type!==sa.CHANNEL)throw Error("Not in a channel");return t.name}async function s5(e,t,s){let n=t[0];if(!n)throw Error("Missing nick");let r=s4(e),a=s3(e),i=(await a.whois(n))["311"].params,o=i[2],l=i[3];a.send({command:"MODE",params:[r,s,`*!${o}@${l}`]})}function s6(e){let t=e.state.buffers.get(e.state.activeBuffer);t&&t.type!==sa.SERVER&&e.setBufferState({server:t.server},e=>({unread:so.union(e.unread,so.MESSAGE)}))}const s7={name:"join",usage:"<name> [password]",description:"Join a channel",execute:(e,t)=>{let s=t[0];if(!s)throw Error("Missing channel name");t.length>1?e.open(s,null,t[1]):e.open(s)}},s9={name:"kick",usage:"<nick> [comment]",description:"Remove a user from the channel",execute:(e,t)=>{let s=t[0],n=[s4(e),s];t.length>1&&n.push(t.slice(1).join(" ")),s3(e).send({command:"KICK",params:n})}},s8={name:"ban",usage:"[nick]",description:"Ban a user from the channel, or display the current ban list",execute:(e,t)=>{if(0!==t.length)return s5(e,t,"+b");{let t=s4(e);s3(e).send({command:"MODE",params:[t,"+b"]})}}};function ne(e,t,s){let n=t[0];if(!n)throw Error("Missing nick");let r=s4(e);s3(e).send({command:"MODE",params:[r,s,n]})}var nt=new Map([{name:"away",usage:"[message]",description:"Set away message",execute:(e,t)=>{let s=[];t.length&&s.push(t.join(" ")),s3(e).send({command:"AWAY",params:s})}},s8,{name:"buffer",usage:"<name>",description:"Switch to a buffer",execute:(e,t)=>{let s=t[0];for(let t of e.state.buffers.values())if(t.name===s){e.switchBuffer(t);return}throw Error("Unknown buffer")}},{name:"close",description:"Close the current buffer",execute:(e,t)=>{let s=e.state.buffers.get(e.state.activeBuffer);if(!s||s.type===sa.SERVER)throw Error("Not in a user or channel buffer");e.close(s.id)}},{name:"deop",usage:"<nick>",description:"Remove operator status for a user on this channel",execute:(e,t)=>ne(e,t,"-o")},{name:"devoice",usage:"<nick>",description:"Remove voiced status for a user on this channel",execute:(e,t)=>ne(e,t,"-v")},{name:"disconnect",description:"Disconnect from the server",execute:(e,t)=>{e.disconnect()}},{name:"help",description:"Show help menu",execute:(e,t)=>{e.openHelp()}},{name:"invite",usage:"<nick>",description:"Invite a user to the channel",execute:(e,t)=>{let s=t[0];if(!s)throw Error("Missing nick");let n=s4(e);s3(e).send({command:"INVITE",params:[s,n]})}},{...s7,name:"j"},s7,s9,{name:"kickban",usage:"<target>",description:"Ban a user and removes them from the channel",execute:(e,t)=>{s9.execute(e,t),s8.execute(e,t)}},{name:"lusers",usage:"[<mask> [<target>]]",description:"Request user statistics about the network",execute:(e,t)=>{s3(e).send({command:"LUSERS",params:t}),s6(e)}},{name:"me",usage:"<action>",description:"Send an action message to the current buffer",execute:(e,t)=>{let s=t.join(" "),n=function(e){let t=e.state.buffers.get(e.state.activeBuffer);if(!t)throw Error("Not in a buffer");return t.name}(e),r=`\x01ACTION ${s}\x01`;e.privmsg(n,r)}},{name:"mode",usage:"[target] [modes] [mode args...]",description:"Query or change a channel or user mode",execute:(e,t)=>{let s=t[0];(!s||s.startsWith("+")||s.startsWith("-"))&&(t=[s4(e),...t]),s3(e).send({command:"MODE",params:t})}},{name:"motd",usage:"[server]",description:"Get the Message Of The Day",execute:(e,t)=>{s3(e).send({command:"MOTD",params:t}),s6(e)}},{name:"msg",usage:"<target> <message>",description:"Send a message to a nickname or a channel",execute:(e,t)=>{let s=t[0],n=t.slice(1).join(" ");s3(e).send({command:"PRIVMSG",params:[s,n]})}},{name:"nick",usage:"<nick>",description:"Change current nickname",execute:(e,t)=>{let s=t[0];s3(e).send({command:"NICK",params:[s]})}},{name:"notice",usage:"<target> <message>",description:"Send a notice to a nickname or a channel",execute:(e,t)=>{let s=t[0],n=t.slice(1).join(" ");s3(e).send({command:"NOTICE",params:[s,n]})}},{name:"op",usage:"<nick>",description:"Give a user operator status on this channel",execute:(e,t)=>ne(e,t,"+o")},{name:"part",usage:"[reason]",description:"Leave a channel",execute:(e,t)=>{let s=t.join(" "),n=[s4(e)];s&&n.push(s),s3(e).send({command:"PART",params:n})}},{name:"query",usage:"<nick> [message]",description:"Open a buffer to send messages to a nickname",execute:(e,t)=>{let s=t[0];if(!s)throw Error("Missing nickname");if(e.open(s),t.length>1){let n=t.slice(1).join(" ");e.privmsg(s,n)}}},{name:"quiet",usage:"[nick]",description:"Quiet a user in the channel, or display the current quiet list",execute:(e,t)=>{if(0!==t.length)return s5(e,t,"+q");s3(e).send({command:"MODE",params:[s4(e),"+q"]})}},{name:"quit",description:"Quit",execute:(e,t)=>{e.close({name:"*"})}},{name:"quote",usage:"<command>",description:"Send a raw IRC command to the server",execute:(e,t)=>{let s;try{s=tD(t.join(" "))}catch(e){throw Error("Failed to parse IRC command: "+e.message)}s3(e).send(s)}},{name:"reconnect",description:"Reconnect to the server",execute:(e,t)=>{e.reconnect()}},{name:"setname",usage:"<realname>",description:"Change current realname",execute:(e,t)=>{let s=t.join(" "),n=s3(e);if(!n.caps.enabled.has("setname"))throw Error("Server doesn't support changing the realname");n.send({command:"SETNAME",params:[s]})}},{name:"stats",usage:"<query> [server]",description:"Request server statistics",execute:(e,t)=>{let s=t[0];if(!s)throw Error("Missing query");let n=[s];t.length>1&&n.push(t.slice(1).join(" ")),s3(e).send({command:"STATS",params:n}),s6(e)}},{name:"topic",usage:"<topic>",description:"Change the topic of the current channel",execute:(e,t)=>{let s=[s4(e)];t.length>0&&s.push(t.join(" ")),s3(e).send({command:"TOPIC",params:s})}},{name:"unban",usage:"<nick>",description:"Remove a user from the ban list",execute:(e,t)=>s5(e,t,"-b")},{name:"unquiet",usage:"<nick>",description:"Remove a user from the quiet list",execute:(e,t)=>s5(e,t,"-q")},{name:"voice",usage:"<nick>",description:"Give a user voiced status on this channel",execute:(e,t)=>ne(e,t,"+v")},{name:"who",usage:"<mask>",description:"Retrieve a list of users",execute:(e,t)=>{s3(e).send({command:"WHO",params:t}),s6(e)}},{name:"whois",usage:"<nick>",description:"Retrieve information about a user",execute:(e,t)=>{let s=t[0];if(!s)throw Error("Missing nick");s3(e).send({command:"WHOIS",params:[s]}),s6(e)}},{name:"whowas",usage:"<nick> [count]",description:"Retrieve information about an offline user",execute:(e,t)=>{if(t.length<1)throw Error("Missing nick");s3(e).send({command:"WHOWAS",params:t}),s6(e)}},{name:"list",usage:"[filter]",description:"Retrieve a list of channels from a network",execute:(e,t)=>{s3(e).send({command:"LIST",params:t}),s6(e)}}].map(e=>[e.name,e]));function ns(){let e=s2.map(e=>{let t=[];return e.ctrlKey&&t.push("Ctrl"),e.altKey&&t.push("Alt"),t.push(e.key),t=t.map((e,t)=>tS`
				${t>0?"+":null}
				<kbd>${e}</kbd>
			`),tS`
			<dt>${t}</dt>
			<dd>${e.description}</dd>
		`});return e.push(tS`
		<dt><kbd>Tab</kbd></dt>
		<dd>Automatically complete nickname or channel</dd>
	`),window.matchMedia("(pointer: none)").matches||e.push(tS`
			<dt><strong>Middle mouse click</strong></dt>
			<dd>Close buffer</dd>
		`),tS`<dl>${e}</dl>`}function nn(){let e=Object.keys(nt).map(e=>{let t=nt[e],s=[tS`<strong>/${e}</strong>`];return t.usage&&s.push(" "+t.usage),tS`
			<dt><code>${s}</code></dt>
			<dd>${t.description}</dd>
		`});return tS`<dl>${e}</dl>`}function nr(){return tS`
		<h3>Key bindings</h3>
		<${ns}/>

		<h3>Commands</h3>
		<${nn}/>
	`}const na={name:"",host:"",port:6697,nickname:"",username:"",realname:"",pass:""};class ni extends I{prevParams=null;state={...na,autojoin:!0};constructor(e){super(e),this.prevParams={...na},this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),e.params&&Object.keys(na).forEach(t=>{void 0!==e.params[t]&&(this.state[t]=e.params[t],this.prevParams[t]=e.params[t])})}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){e.preventDefault();let t={};Object.keys(na).forEach(e=>{(this.props.isNew||this.prevParams[e]!==this.state[e])&&(this.props.isNew&&na[e]===this.state[e]||(t[e]=this.state[e]))});let s=this.state.autojoin?this.props.autojoin:null;this.props.onSubmit(t,s)}render(){let e=null;this.props.isNew||(e=tS`
				<button type="button" class="danger" onClick=${()=>this.props.onRemove()}>
					Remove network
				</button>
			`);let t=null;return this.props.autojoin&&(t=tS`
				<label>
					<input
						type="checkbox"
						name="autojoin"
						checked=${this.state.autojoin}
					/>
					Auto-join channel <strong>${this.props.autojoin}</strong>
				</label>
				<br/><br/>
			`),tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					Hostname:<br/>
					<input type="text" name="host" value=${this.state.host} autofocus required/>
				</label>
				<br/><br/>

				${t}

				<details>
					<summary role="button">Advanced options</summary>

					<br/>

					<label>
						Port:<br/>
						<input type="number" name="port" value=${this.state.port}/>
					</label>
					<br/><br/>

					<label>
						Network name:<br/>
						<input type="text" name="name" value=${this.state.name}/>
					</label>
					<br/><br/>

					<label>
						Nickname:<br/>
						<input type="username" name="nickname" value=${this.state.nickname}/>
					</label>
					<br/><br/>

					<label>
						Username:<br/>
						<input type="username" name="username" value=${this.state.username}/>
					</label>
					<br/><br/>

					<label>
						Real name:<br/>
						<input type="text" name="realname" value=${this.state.realname}/>
					</label>
					<br/><br/>

					<label>
						Server password:<br/>
						<input type="password" name="pass" value=${this.state.pass} placeholder="None"/>
					</label>
					<br/>
				</details>

				<br/>
				${e}
				${" "}
				<button>
					${this.props.isNew?"Add network":"Save network"}
				</button>
			</form>
		`}}class no extends I{state={username:"",password:""};constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),e.username&&(this.state.username=e.username)}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){e.preventDefault(),this.props.onSubmit(this.state.username,this.state.password)}render(){return tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					Username:<br/>
					<input type="username" name="username" value=${this.state.username} required/>
				</label>
				<br/><br/>

				<label>
					Password:<br/>
					<input type="password" name="password" value=${this.state.password} required autofocus/>
				</label>
				<br/><br/>

				<button>Login</button>
			</form>
		`}}class nl extends I{state={email:"",password:""};constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){e.preventDefault(),this.props.onSubmit(this.state.email,this.state.password)}render(){return tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					E-mail:<br/>
					<input
						type="email"
						name="email"
						value=${this.state.email}
						required=${this.props.emailRequired}
						placeholder=${this.props.emailRequired?null:"(optional)"}
						autofocus
					/>
				</label>
				<br/><br/>

				<label>
					Password:<br/>
					<input type="password" name="password" value=${this.state.password} required/>
				</label>
				<br/><br/>

				<button>Register</button>
			</form>
		`}}class nc extends I{state={code:""};constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s})}handleSubmit(e){e.preventDefault(),this.props.onSubmit(this.state.code)}render(){return tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<p>Your account <strong>${this.props.account}</strong> has been created, but a verification code is required to complete the registration.</p>

				<p>${st(this.props.message)}</p>

				<label>
					Verification code:<br/>
					<input type="text" name="code" value=${this.state.code} required autofocus autocomplete="off"/>
				</label>
				<br/><br/>

				<button>Verify account</button>
			</form>
		`}}class nu extends I{state={};constructor(e){super(e),this.state.secondsInTimestamps=e.settings.secondsInTimestamps,this.state.bufferEvents=e.settings.bufferEvents,this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleInput(e){let t=e.target,s="checkbox"===t.type?t.checked:t.value;this.setState({[t.name]:s},()=>{this.props.onChange(this.state)})}handleSubmit(e){e.preventDefault(),this.props.onClose()}registerProtocol(){let e=window.location.origin+window.location.pathname+"?open=%s";try{navigator.registerProtocolHandler("irc",e),navigator.registerProtocolHandler("ircs",e)}catch(e){console.error("Failed to register protocol handler: ",e)}}render(){let e=null;return this.props.showProtocolHandler&&(e=tS`
				<div class="protocol-handler">
					<div class="left">
						Set gamja as your default IRC client for this browser.
						IRC links will be automatically opened here.
					</div>
					<div class="right">
						<button type="button" onClick=${()=>this.registerProtocol()}>
							Enable
						</button>
					</div>
				</div>
				<br/><br/>
			`),tS`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					<input
						type="checkbox"
						name="secondsInTimestamps"
						checked=${this.state.secondsInTimestamps}
					/>
					Show seconds in time indicator
				</label>
				<br/><br/>

				<label>
					<input
						type="radio"
						name="bufferEvents"
						value="fold"
						checked=${"fold"===this.state.bufferEvents}
					/>
					Show and fold chat events
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name="bufferEvents"
						value="expand"
						checked=${"expand"===this.state.bufferEvents}
					/>
					Show and expand chat events
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name="bufferEvents"
						value="hide"
						checked=${"hide"===this.state.bufferEvents}
					/>
					Hide chat events
				</label>
				<br/><br/>

				${e}

				<button type="button" class="danger" onClick=${()=>this.props.onDisconnect()}>
					Disconnect
				</button>
				<button>
					Close
				</button>
			</form>
		`}}class nh extends I{constructor(e){super(e),this.handleClick=this.handleClick.bind(this)}handleClick(e){e.preventDefault(),this.props.onClick()}render(){let e=this.props.selected?"selected":"";return tS`
			<li>
				<a
					href=${sh(this.props.buffer)}
					class=${e}
					onClick=${this.handleClick}
				>
					<span class="server">
						${sd(this.props.server,this.props.bouncerNetwork)}
					</span>
					${this.props.buffer.name}
				</a>
			</li>
		`}}function np(e,t){return e.toLowerCase().includes(t)?1:0}class nd extends I{state={query:"",selected:0};constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}getSuggestions(){let e=this.state.query.toLowerCase(),t=[],s=new Map;for(let n of this.props.buffers.values()){if(n.type===sa.SERVER)continue;let r=0;if(""!==e){let t=this.props.servers.get(n.server);if(!(r=function(e,t,s){let n=2*np(e.name,s);switch(e.type){case sa.CHANNEL:n+=np(e.topic||"",s);break;case sa.NICK:let r=t.users.get(e.name);r&&r.realname&&tz(r.realname,e.name)&&(n+=np(r.realname,s))}return n}(n,t,e)))continue}s.set(n.id,r),t.push(n)}return t.sort((e,t)=>s.get(t.id)-s.get(e.id)),t.slice(0,20)}handleInput(e){let t=e.target;this.setState({[t.name]:t.value})}handleSubmit(e){e.preventDefault(),this.props.onSubmit(this.getSuggestions()[this.state.selected])}handleKeyUp(e){switch(e.key){case"ArrowUp":e.stopPropagation(),this.move(-1);break;case"ArrowDown":e.stopPropagation(),this.move(1)}}move(e){let t=this.getSuggestions().length;this.setState(s=>({selected:(s.selected+e+t)%t}))}render(){let e=this.getSuggestions().map((e,t)=>{let s=this.props.servers.get(e.server),n=null;return s.bouncerNetID&&(n=this.props.bouncerNetworks.get(s.bouncerNetID)),tS`
				<${nh}
					buffer=${e}
					server=${s}
					bouncerNetwork=${n}
					selected=${this.state.selected===t}
					onClick=${()=>this.props.onSubmit(e)}
				/>
			`});return tS`
			<form
				onInput=${this.handleInput}
				onSubmit=${this.handleSubmit}
				onKeyUp=${this.handleKeyUp}
			>
				<input
					type="search"
					name="query"
					value=${this.state.query}
					placeholder="Filter"
					autocomplete="off"
					autofocus
				/>
				<ul class="switcher-list">
					${e}
				</ul>
			</form>
		`}}class nm extends I{state={text:""};textInput=$();lastAutocomplete=null;constructor(e){super(e),this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.handleInputKeyDown=this.handleInputKeyDown.bind(this),this.handleInputPaste=this.handleInputPaste.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleWindowKeyDown=this.handleWindowKeyDown.bind(this),this.handleWindowPaste=this.handleWindowPaste.bind(this)}handleInput(e){this.setState({[e.target.name]:e.target.value}),this.props.readOnly&&"text"===e.target.name&&!e.target.value&&e.target.blur()}handleSubmit(e){e.preventDefault(),this.props.onSubmit(this.state.text),this.setState({text:""})}handleInputKeyDown(e){let t,s=e.target;if(!this.props.autocomplete||"Tab"!==e.key||s.selectionStart!==s.selectionEnd)return;e.preventDefault();let n=s.selectionStart,r=this.state.text;if(this.lastAutocomplete&&this.lastAutocomplete.text===r&&this.lastAutocomplete.carretPos===n)t=this.lastAutocomplete;else{let e,a;for(this.lastAutocomplete=null,e=n-1;e>=0&&" "!==r[e];e--);for(e++,a=n;a<r.length&&" "!==r[a];a++);let i=r.slice(e,a);if(!i)return;let o=this.props.autocomplete(i);if(0===o.length)return;t={text:r,carretPos:s.selectionStart,prefix:r.slice(0,e),suffix:r.slice(a),replacements:o,replIndex:-1}}let a=t.replacements.length;e.shiftKey?t.replIndex--:t.replIndex++,t.replIndex=(t.replIndex+a)%a;let i=t.replacements[t.replIndex];t.prefix||t.suffix||(i.startsWith("/")?i+=" ":i+=": "),t.text=t.prefix+i+t.suffix,t.carretPos=t.prefix.length+i.length,s.value=t.text,s.selectionStart=t.carretPos,s.selectionEnd=s.selectionStart,this.lastAutocomplete=t,this.setState({text:t.text})}canUploadFiles(){let e=this.props.client;return e&&e.isupport.filehost()&&!this.props.readOnly}async uploadFile(e){var t;let s,n,r=this.props.client,a=r.isupport.filehost();if(r.params.saslPlain){let e=r.params.saslPlain;n="Basic "+btoa(e.username+":"+e.password)}else r.params.saslOauthBearer&&(n="Bearer "+r.params.saslOauthBearer.token);let i={"Content-Length":e.size,"Content-Disposition":(s=encodeURIComponent(t=e.name))===t?'attachment; filename="'+t+'"':"attachment; filename*=UTF-8''"+s};e.type&&(i["Content-Type"]=e.type),n&&(i.Authorization=n);let o=await fetch(a,{method:"POST",body:e,headers:i,credentials:"include"});if(!o.ok)throw Error(`HTTP request failed (${o.status})`);let l=o.headers.get("Location");if(!l)throw Error("filehost response missing Location header field");return new URL(l,a)}async uploadFileList(e){let t=[];for(let s of e)t.push(this.uploadFile(s));let s=await Promise.all(t);this.setState(e=>e.text?{text:e.text+" "+s.join(" ")}:{text:s.join(" ")})}async handleInputPaste(e){0!==e.clipboardData.files.length&&this.canUploadFiles()&&(e.preventDefault(),e.stopImmediatePropagation(),await this.uploadFileList(e.clipboardData.files))}handleDragOver(e){if(0!==e.dataTransfer.items.length&&this.canUploadFiles()){for(let t of e.dataTransfer.items)if("file"!==t.kind)return;e.preventDefault()}}async handleDrop(e){0!==e.dataTransfer.files.length&&this.canUploadFiles()&&(e.preventDefault(),e.stopImmediatePropagation(),await this.uploadFileList(e.dataTransfer.files))}handleWindowKeyDown(e){if(document.activeElement&&document.activeElement!==document.body)switch(document.activeElement.tagName.toLowerCase()){case"section":case"a":break;default:return}e.altKey||e.ctrlKey||e.metaKey||1!=[...e.key].length||this.state.text||this.props.readOnly||this.props.commandOnly&&"/"!==e.key||(e.preventDefault(),this.setState({text:e.key},()=>{this.focus()}))}handleWindowPaste(e){if(document.activeElement!==document.body&&"SECTION"!==document.activeElement.tagName||this.props.readOnly||!this.textInput.current)return;if(e.clipboardData.files.length>0){this.handleInputPaste(e);return}let t=e.clipboardData.getData("text");e.preventDefault(),e.stopImmediatePropagation(),this.textInput.current.focus(),this.textInput.current.setRangeText(t,void 0,void 0,"end"),this.setState({text:this.textInput.current.value})}componentDidMount(){window.addEventListener("keydown",this.handleWindowKeyDown),window.addEventListener("paste",this.handleWindowPaste)}componentWillUnmount(){window.removeEventListener("keydown",this.handleWindowKeyDown),window.removeEventListener("paste",this.handleWindowPaste)}focus(){this.textInput.current&&(document.activeElement.blur(),this.textInput.current.focus())}render(){let e="";this.props.readOnly&&!this.state.text&&(e="read-only");let t="Type a message";return this.props.commandOnly&&(t="Type a command (see /help)"),tS`
			<form
				id="composer"
				class=${e}
				onInput=${this.handleInput}
				onSubmit=${this.handleSubmit}
			>
				<input
					type="text"
					name="text"
					ref=${this.textInput}
					value=${this.state.text}
					autocomplete="off"
					placeholder=${t}
					enterkeyhint="send"
					onKeyDown=${this.handleInputKeyDown}
					onPaste=${this.handleInputPaste}
					onDragOver=${this.handleDragOver}
					onDrop=${this.handleDrop}
					maxlength=${this.props.maxLen}
				/>
			</form>
		`}}let nf=new Map;class ng extends I{constructor(e){super(e),this.handleScroll=this.handleScroll.bind(this)}isAtBottom(){let e=this.props.target.current;return 10>=Math.abs(e.scrollHeight-e.clientHeight-e.scrollTop)}saveScrollPosition(e){let t=this.props.target.current,s=t.querySelectorAll(this.props.stickTo),n=null;if(!this.isAtBottom())for(let e=0;e<s.length;e++){let r=s[e];if(r.offsetTop>=t.scrollTop+t.offsetTop){n=r.dataset.key;break}}nf.set(e,n)}restoreScrollPosition(){let e=this.props.target.current;if(!e.firstChild)return;let t=nf.get(this.props.scrollKey);if(t){let s=e.querySelector('[data-key="'+t+'"]');s&&s.scrollIntoView()}else e.firstChild.scrollIntoView({block:"end"});0===e.scrollTop&&this.props.onScrollTop()}handleScroll(){0===this.props.target.current.scrollTop&&this.props.onScrollTop()}componentDidMount(){this.restoreScrollPosition(),this.props.target.current.addEventListener("scroll",this.handleScroll)}getSnapshotBeforeUpdate(e){(this.props.scrollKey!==e.scrollKey||this.props.children!==e.children)&&this.saveScrollPosition(e.scrollKey)}componentDidUpdate(e){this.props.target.current&&this.restoreScrollPosition()}componentWillUnmount(){this.props.target.current.removeEventListener("scroll",this.handleScroll),this.saveScrollPosition(this.props.scrollKey)}render(){return this.props.children}}class nb extends I{body=$();constructor(e){super(e),this.handleCloseClick=this.handleCloseClick.bind(this),this.handleBackdropClick=this.handleBackdropClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}dismiss(){this.props.onDismiss()}handleCloseClick(e){e.preventDefault(),this.dismiss()}handleBackdropClick(e){"dialog"===e.target.className&&this.dismiss()}handleKeyDown(e){"Escape"===e.key&&this.dismiss()}componentDidMount(){window.addEventListener("keydown",this.handleKeyDown);let e=this.body.current.querySelector("input[autofocus]");e&&e.focus()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyDown)}render(){return tS`
			<div class="dialog" onClick=${this.handleBackdropClick}>
				<div class="dialog-body" ref=${this.body}>
					<div class="dialog-header">
						<h2>${this.props.title}</h2>
						<button class="dialog-close" onClick=${this.handleCloseClick}>×</button>
					</div>
					${this.props.children}
				</div>
			</div>
		`}}const nk={server:{}},nv=fetch("./config.json").then(e=>e.ok?e.json():(404!==e.status&&console.error("Failed to fetch config: HTTP error:",e.status,e.statusText),{})).catch(e=>(console.error("Failed to fetch config:",e),{})).then(e=>({...nk,...e}));function nw(e,t){return e&&e.receipts?e.receipts[sl.READ]:null}let nE=0;class ny extends I{state={...s$.create(),connectParams:{url:null,pass:null,username:null,realname:null,nick:null,saslPlain:null,saslExternal:!1,autoconnect:!1,autojoin:[],ping:0},connectForm:!0,loading:!0,dialog:null,dialogData:null,error:null,openPanels:{bufferList:!1,memberList:!1}};debug=!function(){try{return!0}catch(e){return!1}}();config={...nk};clients=new Map;endOfHistory=new Map;receipts=new Map;buffer=$();composer=$();switchToChannel=null;autoOpenURL=null;messageNotifications=new Set;baseTitle=null;lastFocusPingDate=null;constructor(e){super(e),this.handleConnectSubmit=this.handleConnectSubmit.bind(this),this.handleJoinSubmit=this.handleJoinSubmit.bind(this),this.handleBufferListClick=this.handleBufferListClick.bind(this),this.handleBufferListClose=this.handleBufferListClose.bind(this),this.toggleBufferList=this.toggleBufferList.bind(this),this.toggleMemberList=this.toggleMemberList.bind(this),this.handleComposerSubmit=this.handleComposerSubmit.bind(this),this.handleChannelClick=this.handleChannelClick.bind(this),this.handleNickClick=this.handleNickClick.bind(this),this.autocomplete=this.autocomplete.bind(this),this.handleBufferScrollTop=this.handleBufferScrollTop.bind(this),this.dismissDialog=this.dismissDialog.bind(this),this.handleAddNetworkClick=this.handleAddNetworkClick.bind(this),this.handleNetworkSubmit=this.handleNetworkSubmit.bind(this),this.handleNetworkRemove=this.handleNetworkRemove.bind(this),this.handleDismissError=this.handleDismissError.bind(this),this.handleAuthSubmit=this.handleAuthSubmit.bind(this),this.handleRegisterSubmit=this.handleRegisterSubmit.bind(this),this.handleVerifyClick=this.handleVerifyClick.bind(this),this.handleVerifySubmit=this.handleVerifySubmit.bind(this),this.handleOpenSettingsClick=this.handleOpenSettingsClick.bind(this),this.handleSettingsChange=this.handleSettingsChange.bind(this),this.handleSettingsDisconnect=this.handleSettingsDisconnect.bind(this),this.handleSwitchSubmit=this.handleSwitchSubmit.bind(this),this.handleWindowFocus=this.handleWindowFocus.bind(this),this.state.settings={...this.state.settings,...s_.load()},this.bufferStore=new sx,nv.then(e=>(this.handleConfig(e),e))}async handleConfig(e){let t,s,n={...this.state.connectParams};"string"==typeof e.server.url&&(n.url=e.server.url),Array.isArray(e.server.autojoin)?n.autojoin=e.server.autojoin:"string"==typeof e.server.autojoin&&(n.autojoin=[e.server.autojoin]),"string"==typeof e.server.nick&&(n.nick=e.server.nick),"boolean"==typeof e.server.autoconnect&&(n.autoconnect=e.server.autoconnect),"external"===e.server.auth&&(n.saslExternal=!0),"number"==typeof e.server.ping&&(n.ping=e.server.ping),n.autoconnect&&"mandatory"===e.server.auth&&(console.error('Error in config.json: cannot set server.autoconnect = true and server.auth = "mandatory"'),n.autoconnect=!1),"oauth2"!==e.server.auth||e.oauth2&&e.oauth2.url&&e.oauth2.client_id||(console.error('Error in config.json: server.auth = "oauth2" requires oauth2 settings'),e.server.auth=null);let r=sI.load();r&&(n={...n,...r,autoconnect:!0,autojoin:[]});let a=[],i=(t=window.location.search.substring(1),s={},t.split("&").forEach(e=>{if(!e)return;let t=e.split("=");s[decodeURIComponent(t[0])]=decodeURIComponent(t[1]||"")}),s);if("string"!=typeof i.server||n.url&&i.server||(n.url=i.server,e.server.auth=null),"string"==typeof i.nick&&(n.nick=i.nick),"string"==typeof i.channels&&(a=i.channels.split(",")),"string"==typeof i.open&&(this.autoOpenURL=tq(i.open)),"1"===i.debug&&(this.debug=!0),window.location.hash&&(a=window.location.hash.split(",")),this.config=e,!n.nick&&n.autoconnect&&(n.nick="user-*"),n.nick&&n.nick.includes("*")){let e=Math.random().toString(36).substr(2,7);n.nick=n.nick.replace("*",e)}if("oauth2"===e.server.auth&&!n.saslOauthBearer){let e;if(i.error){console.error("OAuth 2.0 authorization failed: ",i.error),this.showError("Authentication failed: "+(i.error_description||i.error));return}if(!i.code){this.redirectOauth2Authorize();return}let t=new URL(window.location.toString());t.searchParams.delete("code"),t.searchParams.delete("state"),window.history.replaceState(null,"",t.toString());try{e=await this.exchangeOauth2Code(i.code)}catch(e){this.showError(e);return}n.saslOauthBearer=e,e.username&&!n.nick&&(n.nick=e.username)}a.length>0&&(n.autoconnect?this.autoOpenURL={host:"",entity:a[0]}:n.autojoin=a),this.setState({loading:!1,connectParams:n}),n.autoconnect&&(this.setState({connectForm:!1}),this.connect(n))}async redirectOauth2Authorize(){let e;try{e=await t6(this.config.oauth2.url)}catch(e){console.error("Failed to fetch OAuth 2.0 server metadata:",e),this.showError("Failed to fetch OAuth 2.0 server metadata");return}!function({serverMetadata:e,clientId:t,redirectUri:s,scope:n}){let r={response_type:"code",client_id:t,redirect_uri:s};n&&(r.scope=n),window.location.assign(e.authorization_endpoint+"?"+t5(r))}({serverMetadata:e,clientId:this.config.oauth2.client_id,redirectUri:window.location.toString(),scope:this.config.oauth2.scope})}async exchangeOauth2Code(e){let t=await t6(this.config.oauth2.url),s=new URL(window.location.toString());s.searchParams.delete("code"),s.searchParams.delete("state");let n=(await t9({serverMetadata:t,redirectUri:s.toString(),code:e,clientId:this.config.oauth2.client_id,clientSecret:this.config.oauth2.client_secret})).access_token,r=null;if(t.introspection_endpoint)try{(r=(await t8({serverMetadata:t,token:n,clientId:this.config.oauth2.client_id,clientSecret:this.config.oauth2.client_secret})).username)||console.warn("Username missing from OAuth 2.0 token introspection response")}catch(e){console.warn("Failed to introspect OAuth 2.0 token:",e)}return{token:n,username:r}}showError(e){let t;if(console.error("App error: ",e),e instanceof Error){let s=[];for(;e;)s.push(e.message),e=e.cause;t=s.join(": ")}else t=String(e);return this.setState({error:t}),++nE}dismissError(e){e&&e!==nE||this.setState({error:null})}handleDismissError(e){e.preventDefault(),this.dismissError()}setServerState(e,t,s){this.setState(s=>s$.updateServer(s,e,t),s)}setBufferState(e,t,s){this.setState(s=>s$.updateBuffer(s,e,t),s)}syncBufferUnread(e,t){let s=this.clients.get(e),n=this.bufferStore.get({name:t,server:s.params});s.caps.enabled.has("draft/chathistory")&&n&&this.setBufferState({server:e,name:t},{unread:n.unread},()=>{this.updateDocumentTitle()}),this.bufferStore.put({name:t,server:s.params,closed:!1})}createBuffer(e,t){let s=this.clients.get(e),n=null,r=!1;return this.setState(a=>{let i;return[n,i]=s$.createBuffer(a,t,e,s),r=!!i,i}),r&&this.syncBufferUnread(e,t),n}sendReadReceipt(e,t){if(!e.supportsReadMarker())return;let s=t.receipts[sl.READ];"*"!==t.name&&s&&e.setReadMarker(t.name,s.time)}switchBuffer(e){let t;this.setState(s=>{if(!(t=s$.getBuffer(s,e)))return;let n=this.clients.get(t.server),r=nw(this.bufferStore.get({name:t.name,server:n.params}),sl.READ),a=s$.updateBuffer(s,t.id,{prevReadReceipt:r});return{activeBuffer:t.id,...a}},()=>{if(!t)return;this.buffer.current&&this.buffer.current.focus();let e=this.state.servers.get(t.server);t.type!==sa.NICK||e.users.has(t.name)||this.whoUserBuffer(t.name,t.server),t.type!==sa.CHANNEL||t.hasInitialWho||this.whoChannelBuffer(t.name,t.server),this.updateDocumentTitle()}),this.markBufferAsRead(e)}markBufferAsRead(e){let t;this.setState(s=>{if(t=s$.getBuffer(s,e))return s$.updateBuffer(s,t.id,{unread:so.NONE})},()=>{if(!t)return;let e=this.clients.get(t.server);for(let s of this.messageNotifications)e.cm(s.data.bufferName)===e.cm(t.name)&&s.close();if(t.messages.length>0){let s=t.messages[t.messages.length-1],n={name:t.name,server:e.params,unread:so.NONE,receipts:{[sl.READ]:sm(s)}};this.bufferStore.put(n)&&this.sendReadReceipt(e,n)}this.updateDocumentTitle()})}updateDocumentTitle(){let e,t,s=s$.getBuffer(this.state,this.state.activeBuffer);s&&(e=this.state.servers.get(s.server)),e.bouncerNetID&&(t=this.state.bouncerNetworks.get(e.bouncerNetID));let n=0;for(let e of this.state.buffers.values())so.compare(e.unread,so.HIGHLIGHT)>=0&&n++;let r=[];s&&s.type!==sa.SERVER&&r.push(s.name),t&&r.push(sd(e,t)),r.push(this.baseTitle);let a="";n>0&&(a=`(${n}) `),a+=r.join(" · "),document.title=a}prepareChatMessage(e,t){if(void 0===t.isHighlight){let s=this.clients.get(e);t.isHighlight=function(e,t,s){if("PRIVMSG"!==e.command&&"NOTICE"!==e.command||(t=s(t),e.prefix&&s(e.prefix.name)===t))return!1;let n=s(e.params[1]);for(;;){let e=n.indexOf(t);if(e<0)return!1;let s="\0",r="\0";if(e>0&&(s=n[e-1]),e+t.length<n.length&&(r=n[e+t.length]),tP(s)&&tP(r)&&!function(e){for(let t=e.length-1;t>=0;t--)if(tM.test(e[t])){e=e.slice(t);break}let t=e.indexOf("://");if(t<=0)return!1;let s=e[t-1];switch(s){case"+":case"-":case".":return!0;default:return tL.test(s)}}(n.slice(0,e)))return!0;n=n.slice(e+t.length)}}(t,s.nick,s.cm)||("PRIVMSG"===t.command||"NOTICE"===t.command)&&t.params[0].startsWith("$")}t.tags||(t.tags={}),t.tags.time||(t.tags.time=tH(new Date))}addChatMessage(e,t,s){this.prepareChatMessage(e,s);let n={server:e,name:t};this.setState(e=>s$.addMessage(e,s,n))}handleChatMessage(e,t,s){let n=this.clients.get(e);this.prepareChatMessage(e,s);let r=this.bufferStore.get({name:t,server:n.params}),a=nw(r,sl.DELIVERED),i=nw(r,sl.READ),o=sg(s,a),l=sg(s,i);n.isMyNick(s.prefix.name)&&(l=!0);let c=so.NONE;if(("PRIVMSG"===s.command||"NOTICE"===s.command)&&!l){let r,a=s.params[0],i=s.params[1];if(s.isHighlight?(c=so.HIGHLIGHT,r="highlight"):n.isMyNick(a)?(c=so.HIGHLIGHT,r="private message"):c=so.MESSAGE,c===so.HIGHLIGHT&&!o&&!tj(s)){let a="New "+r+" from "+s.prefix.name;n.isChannel(t)&&(a+=" in "+t);let o=function(e,t){if(!window.Notification||"granted"!==Notification.permission)return null;try{return new Notification(e,t)}catch(e){return console.error("Failed to show notification: ",e),null}}(a,{body:sr(i),requireInteraction:!0,tag:"msg,server="+e+",from="+s.prefix.name+",to="+t,data:{bufferName:t,message:s}});o&&(o.addEventListener("click",()=>{this.switchBuffer({server:e,name:t})}),o.addEventListener("close",()=>{this.messageNotifications.delete(o)}),this.messageNotifications.add(o))}}if("INVITE"===s.command&&n.isMyNick(s.params[0])){c=so.HIGHLIGHT;let r=s.params[1],a=new Notification("Invitation to "+r,{body:s.prefix.name+" has invited you to "+r,requireInteraction:!0,tag:"invite,server="+e+",from="+s.prefix.name+",channel="+r,actions:[{action:"accept",title:"Accept"}]});a&&a.addEventListener("click",a=>{if("accept"===a.action){let a={name:t,server:n.params,receipts:{[sl.READ]:sm(s)}};this.bufferStore.put(a)&&this.sendReadReceipt(n,a),this.open(r,e)}else this.switchBuffer({server:e,name:t})})}(!n.isMyNick(s.prefix.name)||n.isMyNick(t))&&"PART"!==s.command&&"QUIT"!==s.comand&&"730"!==s.command&&"731"!==s.command&&this.createBuffer(e,t);let u={server:e,name:t};this.setState(e=>s$.addMessage(e,s,u)),this.setBufferState(u,e=>{let t=e.unread,r=e.prevReadReceipt,a={[sl.DELIVERED]:sm(s)};this.state.activeBuffer===e.id&&document.hasFocus()?a[sl.READ]=sm(s):t=so.union(t,c),n.isMyNick(s.prefix.name)&&!sg(s,r)&&(r=sm(s));let i={name:e.name,server:n.params,unread:t,receipts:a};return this.bufferStore.put(i)&&this.sendReadReceipt(n,i),{unread:t,prevReadReceipt:r}},()=>{c===so.HIGHLIGHT&&this.updateDocumentTitle()})}connect(e){var t;let s,n,r;e={...this.state.connectParams,...e};let a=null;this.setState(e=>{let t;return[a,t]=s$.createServer(e),t}),this.setState({connectParams:e});let i=new t4({...(t=e,s=window.location.host||"localhost:8080",n="wss:","https:"!==window.location.protocol&&(n="ws:"),r=window.location.pathname||"/",window.location.host||(r="/"),(t={...t}).url||(t.url=n+"//"+s+r+"socket"),t.url.startsWith("/")&&(t.url=n+"//"+s+t.url),0>t.url.indexOf("://")&&(t.url=n+"//"+t.url),t.username||(t.username=t.nick),t.realname||(t.realname=t.nick),t),eventPlayback:this.state.settings.bufferEvents!==sc.HIDE});i.debug=this.debug,this.clients.set(a,i),this.setServerState(a,{status:i.status});let o=null;i.addEventListener("status",()=>{switch(this.setServerState(a,{status:i.status}),i.status){case t4.Status.DISCONNECTED:this.setServerState(a,{account:null}),this.setState(e=>{let t=new Map(e.buffers);return e.buffers.forEach(e=>{e.server===a&&t.set(e.id,{...e,joined:!1})}),{buffers:t}});break;case t4.Status.REGISTERED:this.setState({connectForm:!1}),o&&this.dismissError(o)}}),i.addEventListener("message",e=>{this.handleMessage(a,e.detail.message)}),i.addEventListener("error",e=>{o=this.showError(e.detail)}),this.createBuffer(a,"*"),this.state.activeBuffer||this.switchBuffer({server:a,name:"*"}),e.autojoin.length>0&&(this.switchToChannel=e.autojoin[0])}disconnect(e){e||(e=s$.getActiveServerID(this.state));let t=this.clients.get(e);t&&(this.clients.delete(e),t.disconnect())}reconnect(e){e||(e=s$.getActiveServerID(this.state));let t=this.clients.get(e);t&&t.reconnect()}serverFromBouncerNetwork(e){for(let[t,s]of this.clients)if(s.params.bouncerNetwork===e)return t;return null}routeMessage(e,t){let s,n,r,a=this.clients.get(e),i=tV(t,"chathistory");if(t.internal)return[];switch(t.command){case"MODE":if(s=t.params[0],a.isChannel(s))return[s];return["*"];case"NOTICE":case"PRIVMSG":if(s=t.params[0],a.isMyNick(s)){if(a.cm(t.prefix.name)===a.cm(a.serverPrefix.name))s="*";else{let n=t.tags["+draft/channel-context"];s=n&&a.isChannel(n)&&s$.getBuffer(this.state,{server:e,name:n})?n:t.prefix.name}}let o=a.isupport.statusMsg();if(o){let e=tA(s,o);a.isChannel(e.name)&&(s=e.name)}let l=!0;if("PRIVMSG"!==t.command)l=!1;else{let e=tj(t);e&&"ACTION"!==e.command&&(l=!1)}return l||s$.getBuffer(this.state,{server:e,name:s})||(s="*"),[s];case"JOIN":if(n=t.params[0],!a.isMyNick(t.prefix.name))return[n];return[];case"PART":case"KICK":case"TOPIC":return[n=t.params[0]];case"QUIT":return r=[],i?r.push(i.params[0]):this.state.buffers.forEach(s=>{s.server===e&&s.members.has(t.prefix.name)&&r.push(s.name)}),r;case"NICK":let c=t.params[0];return r=[],i?r.push(i.params[0]):(this.state.buffers.forEach(s=>{s.server===e&&s.members.has(t.prefix.name)&&r.push(s.name)}),a.isMyNick(c)&&r.push("*")),r;case"INVITE":let u=n=t.params[1];return s$.getBuffer(this.state,{server:e,name:n})||(u="*"),[u];case"324":case"329":case"346":case"347":case"348":case"349":case"367":case"368":case"728":case"729":return[n=t.params[1]];case"341":return[n=t.params[2]];case"730":case"731":let h=t.params[1].split(",");for(let e of(r=[],h)){let t=tT(e);r.push(t.name)}return r;case"002":case"004":case"005":case"376":case"422":case"301":case"331":case"332":case"333":case"353":case"366":case"903":case"328":case"AWAY":case"SETNAME":case"CHGHOST":case"ACCOUNT":case"CAP":case"AUTHENTICATE":case"PING":case"PONG":case"BATCH":case"TAGMSG":case"CHATHISTORY":case"ACK":case"BOUNCER":case"MARKREAD":return[];default:return["*"]}}handleMessage(e,t){let s,n,r,a=this.clients.get(e);if(tV(t,"chathistory"))return;let i=this.routeMessage(e,t);switch(this.setState(s=>s$.handleMessage(s,t,e,a)),t.command){case"001":this.fetchBacklog(e);break;case"376":case"422":let o=[];for(let t of this.bufferStore.list(a.params))if("*"!==t.name&&!t.closed){if(a.isChannel(t.name)){if(a.caps.enabled.has("soju.im/bouncer-networks"))continue;o.push(t.name)}else this.createBuffer(e,t.name),this.whoUserBuffer(t.name,e)}let l=this.state.servers.get(e).bouncerNetID,c=null;l&&(c=this.state.bouncerNetworks.get(l)),c&&"connected"!==c.state||(o=o.concat(a.params.autojoin),a.params.autojoin=[]),o.length>0&&a.send({command:"JOIN",params:[o.join(",")]});let u=c?c.host:"";this.autoOpenURL&&u===this.autoOpenURL.host&&(this.openURL(this.autoOpenURL),this.autoOpenURL=null);break;case"JOIN":n=t.params[0],a.isMyNick(t.prefix.name)&&this.syncBufferUnread(e,n),n===this.switchToChannel&&(this.switchBuffer({server:e,name:n}),this.switchToChannel=null);break;case"BOUNCER":if("NETWORK"!==t.params[0]||a.isupport.bouncerNetID())break;let h=t.params[1],p=null;"*"!==t.params[2]&&(p=t_(t.params[2]));let d=!1;this.setState(e=>p?(d=!e.bouncerNetworks.has(h),s$.storeBouncerNetwork(e,h,p)):s$.deleteBouncerNetwork(e,h),()=>{if(p)d&&this.connect({...a.params,bouncerNetwork:h});else{let e=this.serverFromBouncerNetwork(h);e&&this.close({server:e,name:"*"})}if(p&&"connected"===p.state){let e=this.serverFromBouncerNetwork(h),t=this.clients.get(e);t&&t.status===t4.Status.REGISTERED&&t.params.autojoin&&t.params.autojoin.length>0&&(t.send({command:"JOIN",params:[t.params.autojoin.join(",")]}),t.params.autojoin=[])}});break;case"BATCH":if(!t.params[0].startsWith("-"))break;let m=t.params[0].slice(1),f=a.batches.get(m);if(!f||"soju.im/bouncer-networks"!==f.type)break;this.autoOpenURL&&this.autoOpenURL.host&&!this.findBouncerNetIDByHost(this.autoOpenURL.host)&&(this.openURL(this.autoOpenURL),this.autoOpenURL=null);break;case"MARKREAD":s=t.params[0];let g=t.params[1];if("*"===g||!g.startsWith("timestamp="))break;let b={time:g.replace("timestamp=","")};if(sf(b,nw(this.bufferStore.get({name:s,server:a.params}),sl.READ)))break;for(let e of this.messageNotifications)a.cm(e.data.bufferName)===a.cm(s)&&sg(e.data.message,b)&&e.close();let k=!0;this.setBufferState({server:e,name:s},e=>{k=!1,r=so.NONE;for(let t=e.messages.length-1;t>=0;t--){let s=e.messages[t];if("PRIVMSG"===s.command||"NOTICE"===s.command){if(sg(s,b))break;if(s.isHighlight||a.isMyNick(e.name)){r=so.HIGHLIGHT;break}r=so.MESSAGE}}return{unread:r}},()=>{this.bufferStore.put({name:s,server:a.params,unread:r,closed:k,receipts:{[sl.READ]:b}}),this.updateDocumentTitle()});break;default:if(tB(t.command)&&"422"!==t.command){let e=t.params[t.params.length-1];this.showError(e)}}i.forEach(s=>{this.handleChatMessage(e,s,t)})}async fetchBacklog(e){let t=this.clients.get(e);if(!t.caps.enabled.has("draft/chathistory")||t.caps.enabled.has("soju.im/bouncer-networks")&&!t.params.bouncerNetwork)return;let s=function(e,t,s){let n=e.list(t),r=null;for(let e of n){if("*"===e.name)continue;let t=nw(e,s);sf(r,t)&&(r=t)}return r}(this.bufferStore,t.params,sl.DELIVERED);if(!s)return;let n=tH(new Date);(await t.fetchHistoryTargets(n,s.time)).forEach(async r=>{let a,i=s,o=nw(this.bufferStore.get({name:r.name,server:t.params}),sl.READ);sf(i,o)&&(i=o);let l=s$.getBuffer(this.state,{server:e,name:r.name});l&&l.messages.length>0&&(i=sm(l.messages[l.messages.length-1])),t.supportsReadMarker()&&t.isNick(r.name)&&t.fetchReadMarker(r.name);try{a=await t.fetchHistoryBetween(r.name,i,{time:n},4e3)}catch(e){console.error("Failed to fetch backlog for '"+r.name+"': ",e),this.showError("Failed to fetch backlog for '"+r.name+"'");return}for(let t of a.messages)for(let s of this.routeMessage(e,t))this.handleChatMessage(e,s,t)})}handleConnectSubmit(e){this.dismissError(),e.autoconnect?sI.put(e):sI.put(null);let t=this.state.buffers.get(this.state.activeBuffer);t&&this.close(t.server),this.connect(e)}handleChannelClick(e){this.openURL(e.target.href)&&e.preventDefault()}findBouncerNetIDByHost(e){for(let[t,s]of this.state.bouncerNetworks)if(s.host===e)return t;return null}openURL(e){var t;let s,n,r,a;if("string"==typeof e&&(e=tq(e)),!e)return!1;let{host:i,port:o}=(n=t=e.host,r=null,(a=t.lastIndexOf(":"))>0&&!t.endsWith("]")&&(n=t.slice(0,a),r=parseInt(t.slice(a+1),10)),n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,n.length-1)),{host:n,port:r});if(e.host){let t=this.findBouncerNetIDByHost(i);if(!t){let t=this.clients.values().next().value;if(!t||!t.caps.enabled.has("soju.im/bouncer-networks"))return!1;let s={host:i};return"number"==typeof o&&(s.port=o),this.openDialog("network",{params:s,autojoin:e.entity}),!0}for(let[e,n]of this.state.servers)if(n.bouncerNetID===t){s=e;break}}else s=s$.getActiveServerID(this.state);if(!s)return!1;let l=s$.getBuffer(this.state,{server:s,name:e.entity||"*"});return l?this.switchBuffer(l.id):this.openDialog("join",{server:s,channel:e.entity}),!0}handleNickClick(e){this.open(e)}whoUserBuffer(e,t){let s=this.clients.get(t);s.who(e,{fields:["flags","hostname","nick","realname","username","account"]}),s.monitor(e),s.supportsReadMarker()&&s.fetchReadMarker(e)}async whoChannelBuffer(e,t){let s=this.clients.get(t);this.setBufferState({name:e,server:t},{hasInitialWho:!0});let n=!1;try{await s.who(e,{fields:["flags","hostname","nick","realname","username","account"]}),n=!0}finally{this.setBufferState({name:e,server:t},{hasInitialWho:n})}}open(e,t,s){t||(t=s$.getActiveServerID(this.state));let n=this.clients.get(t);n.isServer(e)?this.switchBuffer({server:t}):n.isChannel(e)?(this.switchToChannel=e,n.join(e,s).catch(e=>{this.showError(e)})):(this.whoUserBuffer(e,t),this.createBuffer(t,e),this.switchBuffer({server:t,name:e}))}close(e){let t=s$.getBuffer(this.state,e);if(!t)return;let s=this.clients.get(t.server);switch(t.type){case sa.SERVER:this.setState(e=>{let s=new Map(e.buffers);for(let[n,r]of e.buffers)r.server===t.server&&s.delete(n);let n=e.activeBuffer;return n&&e.buffers.get(n).server===t.server&&(n=s.size>0?s.keys().next().value:null),{buffers:s,activeBuffer:n}});let n=s&&!s.params.bouncerNetwork&&s.caps.enabled.has("soju.im/bouncer-networks"),r=this.state.servers.keys().next().value===t.server;if(this.disconnect(t.server),this.setState(e=>{let s=new Map(e.servers);s.delete(t.server);let n=e.connectForm;return 0===s.size&&(n=!0),{servers:s,connectForm:n}}),n){for(let e of this.clients.keys())this.close({server:e,name:"*"});this.bufferStore.clear()}else this.bufferStore.clear(s.params);r&&sI.put(null);break;case sa.CHANNEL:t.joined&&s.send({command:"PART",params:[t.name]});case sa.NICK:this.state.activeBuffer===t.id&&this.switchBuffer({name:"*"}),this.setState(e=>{let s=new Map(e.buffers);return s.delete(t.id),{buffers:s}}),s.unmonitor(t.name),this.bufferStore.put({name:t.name,server:s.params,closed:!0})}}disconnectAll(){this.close(this.state.buffers.keys().next().value)}executeCommand(e){let t=e.split(" "),s=t[0].toLowerCase().slice(1),n=t.slice(1),r=nt.get(s);if(!r){this.showError(`Unknown command "${s}" (run "/help" to get a command list)`);return}try{r.execute(this,n)}catch(e){console.error(`Failed to execute command "${s}":`,e),this.showError(e.message)}}privmsg(e,t){if("*"===e){this.showError("Cannot send message in server buffer");return}let s=s$.getActiveServerID(this.state),n=this.clients.get(s),r={command:"PRIVMSG",params:[e,t]};n.send(r),n.caps.enabled.has("echo-message")||(r.prefix={name:n.nick},this.handleChatMessage(s,e,r))}handleComposerSubmit(e){if(!e)return;if(e.startsWith("//"))e=e.slice(1);else if(e.startsWith("/")){this.executeCommand(e);return}let t=this.state.buffers.get(this.state.activeBuffer);t&&this.privmsg(t.name,e)}handleBufferListClick(e){this.switchBuffer(e),this.closeBufferList()}handleBufferListClose(e){this.close(e),this.closeBufferList()}toggleBufferList(){this.setState(e=>({openPanels:{...e.openPanels,bufferList:!e.openPanels.bufferList}}))}toggleMemberList(){this.setState(e=>({openPanels:{...e.openPanels,memberList:!e.openPanels.memberList}}))}closeBufferList(){this.setState(e=>({openPanels:{...e.openPanels,bufferList:!1}}))}closeMemberList(){this.setState(e=>({openPanels:{...e.openPanels,memberList:!1}}))}handleJoinClick(e){switch(e.type){case sa.SERVER:this.openDialog("join",{server:e.server});break;case sa.CHANNEL:this.clients.get(e.server).send({command:"JOIN",params:[e.name]})}}handleJoinSubmit(e){this.open(e.channel,this.state.dialogData.server),this.dismissDialog()}autocomplete(e){function t(e,t){t=t.toLowerCase();let s=[];for(let n of e)n.toLowerCase().startsWith(t)&&s.push(n);return s}if(e.startsWith("/"))return t([...nt.keys()],e.slice(1)).map(e=>"/"+e);if(e.startsWith("#")){let s=[];for(let e of this.state.buffers.values())e.name.startsWith("#")&&s.push(e.name);return t(s,e)}let s=this.state.buffers.get(this.state.activeBuffer);return s&&s.members?t(s.members.keys(),e):[]}openHelp(){this.openDialog("help")}async handleBufferScrollTop(){let e,t=this.state.buffers.get(this.state.activeBuffer);if(!t||t.type===sa.SERVER)return;let s=this.clients.get(t.server);if(!s||!s.caps.enabled.has("draft/chathistory")||!s.caps.enabled.has("server-time")||this.endOfHistory.get(t.id))return;e=t.messages.length>0?t.messages[0].tags.time:tH(new Date),this.endOfHistory.set(t.id,!0);let n=100;s.caps.enabled.has("draft/event-playback")&&(n=200);let r=await s.fetchHistoryBefore(t.name,e,n);if(this.endOfHistory.set(t.id,!r.more),r.messages.length>0){let e=r.messages[r.messages.length-1],n={[sl.DELIVERED]:sm(e)};this.state.activeBuffer===t.id&&(n[sl.READ]=sm(e));let a={name:t.name,server:s.params,receipts:n};this.bufferStore.put(a)&&this.sendReadReceipt(s,a),this.setBufferState(t,({prevReadReceipt:t})=>(sg(e,t)||(t=sm(e)),{prevReadReceipt:t}))}for(let e of r.messages)this.addChatMessage(t.server,t.name,e)}openDialog(e,t){this.setState({dialog:e,dialogData:t})}dismissDialog(){this.setState({dialog:null,dialogData:null})}setDialogLoading(e){let t=e=>{this.setState(t=>({dialogData:{...t.dialogData,loading:e}}))};t(!0),e.finally(()=>t(!1))}handleAuthClick(e){let t=this.clients.get(e);this.openDialog("auth",{username:t.nick})}handleAuthSubmit(e,t){let s=s$.getActiveServerID(this.state),n=this.clients.get(s),r=n.authenticate("PLAIN",{username:e,password:t}).then(()=>{if(this.dismissDialog(),n!==this.clients.values().next().value)return;let s=sI.load();s&&(console.log("Saving SASL PLAIN credentials"),s={...s,saslPlain:{username:e,password:t}},sI.put(s))});this.setDialogLoading(r)}handleRegisterClick(e){let t=this.clients.get(e).checkAccountRegistrationCap("email-required");this.openDialog("register",{emailRequired:t})}handleRegisterSubmit(e,t){let s=s$.getActiveServerID(this.state),n=this.clients.get(s),r=n.registerAccount(e,t).then(e=>{if(this.dismissDialog(),e.verificationRequired&&this.handleVerifyClick(e.account,e.message),n!==this.clients.values().next().value)return;let s=sI.load();s&&(console.log("Saving account registration credentials"),s={...s,saslPlain:{username:e.account,password:t}},sI.put(s))});this.setDialogLoading(r)}handleVerifyClick(e,t){this.openDialog("verify",{account:e,message:t})}handleVerifySubmit(e){let t=s$.getActiveServerID(this.state),s=this.clients.get(t).verifyAccount(this.state.dialogData.account,e).then(()=>{this.dismissDialog()});this.setDialogLoading(s)}handleAddNetworkClick(){this.openDialog("network")}handleManageNetworkClick(e){let t=this.state.servers.get(e).bouncerNetID,s=this.state.bouncerNetworks.get(t);this.openDialog("network",{id:t,params:s})}async handleNetworkSubmit(e,t){let s=this.clients.values().next().value;if(this.dismissDialog(),this.state.dialogData&&this.state.dialogData.id){if(0===Object.keys(e).length)return;s.send({command:"BOUNCER",params:["CHANGENETWORK",this.state.dialogData.id,tx(e)]})}else{e={...e,tls:"1"};let n=await s.createBouncerNetwork(e);if(!t)return;let r=this.serverFromBouncerNetwork(n);this.clients.get(r).params.autojoin=[t],this.switchToChannel=t}}handleNetworkRemove(){this.clients.values().next().value.send({command:"BOUNCER",params:["DELNETWORK",this.state.dialogData.id]}),this.dismissDialog()}handleOpenSettingsClick(){let e=!1;for(let[t,s]of this.clients)if(s.caps.enabled.has("soju.im/bouncer-networks")){e=!0;break}this.openDialog("settings",{showProtocolHandler:e})}handleSettingsChange(e){s_.put(e),this.setState({settings:e})}handleSettingsDisconnect(){this.dismissDialog(),this.disconnectAll()}handleSwitchSubmit(e){this.dismissDialog(),e&&this.switchBuffer(e)}handleWindowFocus(){this.state.activeBuffer&&this.markBufferAsRead(this.state.activeBuffer);let e=new Date;if(!(this.lastFocusPingDate&&e.getTime()-this.lastFocusPingDate.getTime()<15e3))for(let t of(this.lastFocusPingDate=e,this.clients.values()))t.send({command:"PING",params:["gamja"]})}componentDidMount(){var e;let t;this.baseTitle=document.title,e=this,t={},s2.forEach(e=>{t[e.key]||(t[e.key]=[]),t[e.key].push(e)}),window.addEventListener("keydown",s=>{let n=t[s.key];n&&1===(n=n.filter(e=>!!e.altKey===s.altKey&&!!e.ctrlKey===s.ctrlKey)).length&&(s.preventDefault(),n[0].execute(e))}),window.addEventListener("focus",this.handleWindowFocus)}componentWillUnmount(){document.title=this.baseTitle,window.removeEventListener("focus",this.handleWindowFocus)}render(){let e,t;if(this.state.loading){let e=null;return this.state.error&&(e=tS`<form><p class="error-text">${this.state.error}</p></form>`),tS`<section id="connect">${e}</section>`}let s=null,n=null,r=null;if(this.state.buffers.get(this.state.activeBuffer)){s=this.state.buffers.get(this.state.activeBuffer);let e=(n=this.state.servers.get(s.server)).bouncerNetID;e&&(r=this.state.bouncerNetworks.get(e))}let a=null;if(s&&(a=this.clients.get(s.server)),this.state.connectForm){let e=n?n.status:si.DISCONNECTED,t=e===si.CONNECTING||e===si.REGISTERING;return tS`
				<section id="connect">
					<${sZ}
						error=${this.state.error}
						params=${this.state.connectParams}
						auth=${this.config.server.auth}
						connecting=${t}
						onSubmit=${this.handleConnectSubmit}
					/>
				</section>
			`}let i=null;if(s){let e=null;s.type===sa.NICK&&(e=n.users.get(s.name)),i=tS`
				<section id="buffer-header">
					<${sQ}
						buffer=${s}
						server=${n}
						user=${e}
						bouncerNetwork=${r}
						onChannelClick=${this.handleChannelClick}
						onClose=${()=>this.close(s)}
						onJoin=${()=>this.handleJoinClick(s)}
						onReconnect=${()=>this.reconnect()}
						onAddNetwork=${this.handleAddNetworkClick}
						onManageNetwork=${()=>this.handleManageNetworkClick(s.server)}
						onOpenSettings=${this.handleOpenSettingsClick}
					/>
				</section>
			`}let o=null;s&&s.type===sa.CHANNEL&&(o=tS`
				<section
						id="member-list"
						class=${this.state.openPanels.memberList?"expand":""}
				>
					<button
						class="expander"
						onClick=${this.toggleMemberList}
					>
						<span></span>
						<span></span>
					</button>
					<section>
						<section id="member-list-header">
							${s.members.size} users
						</section>
						<${sX}
							members=${s.members}
							users=${n.users}
							onNickClick=${this.handleNickClick}
						/>
					</section>
				</section>
			`);let l=null,c=this.state.dialogData||{};switch(this.state.dialog){case"network":let u=!c.id;l=tS`
				<${nb} title=${u?"Add network":"Edit network"} onDismiss=${this.dismissDialog}>
					<${ni}
						onSubmit=${this.handleNetworkSubmit}
						onRemove=${this.handleNetworkRemove}
						params=${c.params}
						autojoin=${c.autojoin}
						isNew=${u}
					/>
				</>
			`;break;case"help":l=tS`
				<${nb} title="Help" onDismiss=${this.dismissDialog}>
					<${nr}/>
				</>
			`;break;case"join":l=tS`
				<${nb} title="Join channel" onDismiss=${this.dismissDialog}>
					<${s0} channel=${c.channel} onSubmit=${this.handleJoinSubmit}/>
				</>
			`;break;case"auth":e=c.loading?tS`<p>Logging in…</p>`:tS`
					<${no} username=${c.username} onSubmit=${this.handleAuthSubmit}/>
				`,l=tS`
				<${nb} title="Login to ${sd(n,r)}" onDismiss=${this.dismissDialog}>
					${e}
				</>
			`;break;case"register":e=c.loading?tS`<p>Creating account…</p>`:tS`
					<${nl} emailRequired=${c.emailRequired} onSubmit=${this.handleRegisterSubmit}/>
				`,l=tS`
				<${nb} title="Register a new ${sd(n,r)} account" onDismiss=${this.dismissDialog}>
					${e}
				</>
			`;break;case"verify":e=c.loading?tS`<p>Verifying account…</p>`:tS`
					<${nc} account=${c.account} message=${c.message} onSubmit=${this.handleVerifySubmit}/>
				`,l=tS`
				<${nb} title="Verify ${sd(n,r)} account" onDismiss=${this.dismissDialog}>
					${e}
				</>
			`;break;case"settings":l=tS`
				<${nb} title="Settings" onDismiss=${this.dismissDialog}>
					<${nu}
						settings=${this.state.settings}
						showProtocolHandler=${c.showProtocolHandler}
						onChange=${this.handleSettingsChange}
						onDisconnect=${this.handleSettingsDisconnect}
						onClose=${this.dismissDialog}
					/>
				</>
			`;break;case"switch":l=tS`
				<${nb} title="Switch to a channel or user" onDismiss=${this.dismissDialog}>
					<${nd}
						buffers=${this.state.buffers}
						servers=${this.state.servers}
						bouncerNetworks=${this.state.bouncerNetworks}
						onSubmit=${this.handleSwitchSubmit}/>
				</>
			`}let h=null;this.state.error&&(h=tS`
				<div id="error-msg">
					${this.state.error}
					${" "}
					<button onClick=${this.handleDismissError}>×</button>
				</div>
			`);let p=!1;n&&n.status!==si.REGISTERED&&(p=!0);let d=!1;if(s&&s.type===sa.SERVER)d=!0;else if(s){var m,f,g;let e,n=this.clients.get(s.server);m=n.isupport,f=n.nick,g=s.name,e=tO({prefix:{name:f,user:"_".repeat(m.userLen()),host:"_".repeat(m.hostLen())},command:"PRIVMSG",params:[g,""]})+"\r\n",t=m.lineLen()-e.length}let b=tS`
			<section
					id="buffer-list"
					class=${this.state.openPanels.bufferList?"expand":""}
			>
				<${sV}
					buffers=${this.state.buffers}
					servers=${this.state.servers}
					bouncerNetworks=${this.state.bouncerNetworks}
					activeBuffer=${this.state.activeBuffer}
					onBufferClick=${this.handleBufferListClick}
					onBufferClose=${this.handleBufferListClose}
				/>
				<button
					class="expander"
					onClick=${this.toggleBufferList}
				>
					<span></span>
					<span></span>
				</button>
			</section>
			${i}
			<${ng}
				target=${this.buffer}
				stickTo=".logline"
				scrollKey=${this.state.activeBuffer}
				onScrollTop=${this.handleBufferScrollTop}
			>
				<section id="buffer" ref=${this.buffer} tabindex="-1">
					<${sK}
						buffer=${s}
						server=${n}
						settings=${this.state.settings}
						onChannelClick=${this.handleChannelClick}
						onNickClick=${this.handleNickClick}
						onAuthClick=${()=>this.handleAuthClick(s.server)}
						onRegisterClick=${()=>this.handleRegisterClick(s.server)}
						onVerifyClick=${this.handleVerifyClick}
					/>
				</section>
			</>
			${o}
			<${nm}
				ref=${this.composer}
				client=${a}
				readOnly=${p}
				onSubmit=${this.handleComposerSubmit}
				autocomplete=${this.autocomplete}
				commandOnly=${d}
				maxLen=${t}
			/>
			${l}
			${h}
		`;return tS`
			<${su.Provider} value=${this.state.settings}>
				${b}
			</>
		`}}n=tS`<${ny}/>`,r=document.body,u.__&&u.__(n,r),i=a&&a.__k||r.__k,o=[],l=[],P(r,n=(a||r).__k=S(N,null,[n]),i||b,b,void 0!==r.ownerSVGElement,a?[a]:i?null:r.firstChild?c.call(r.childNodes):null,o,a||(i?i.__e:r.firstChild),!1,l),B(o,n,l);
//# sourceMappingURL=index.c8e052b6.js.map
