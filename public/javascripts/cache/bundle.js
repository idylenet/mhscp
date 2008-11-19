/* --------- /javascripts/jquery-1.2.6.js --------- */ 

(function(){var _jQuery=window.jQuery,_$=window.$;var jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context);};var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,isSimple=/^.[^:#\[\.]*$/,undefined;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this;}
if(typeof selector=="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1])
selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem){if(elem.id!=match[3])
return jQuery().find(selector);return jQuery(elem);}
selector=[];}}else
return jQuery(context).find(selector);}else if(jQuery.isFunction(selector))
return jQuery(document)[jQuery.fn.ready?"ready":"load"](selector);return this.setArray(jQuery.makeArray(selector));},jquery:"1.2.6",size:function(){return this.length;},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num];},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){var ret=-1;return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this);},attr:function(name,value,type){var options=name;if(name.constructor==String)
if(value===undefined)
return this[0]&&jQuery[type||"attr"](this[0],name);else{options={};options[name]=value;}
return this.each(function(i){for(name in options)
jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key=='width'||key=='height')&&parseFloat(value)<0)
value=undefined;return this.attr(key,value,"curCSS");},text:function(text){if(typeof text!="object"&&text!=null)
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)
ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0])
jQuery(html,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){var elem=this;while(elem.firstChild)
elem=elem.firstChild;return elem;}).append(this);return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1)
this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1)
this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem);});return this.pushStack(/[^+>] [^+>]/.test(selector)||selector.indexOf("..")>-1?jQuery.unique(elems):elems);},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement("div");container.appendChild(clone);return jQuery.clean([container.innerHTML])[0];}else
return this.cloneNode(true);});var clone=ret.find("*").andSelf().each(function(){if(this[expando]!=undefined)
this[expando]=null;});if(events===true)
this.find("*").andSelf().each(function(i){if(this.nodeType==3)
return;var events=jQuery.data(this,"events");for(var type in events)
for(var handler in events[type])
jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data);});return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,this));},not:function(selector){if(selector.constructor==String)
if(isSimple.test(selector))
return this.pushStack(jQuery.multiFilter(selector,this,true));else
selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector;});},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector=='string'?jQuery(selector):jQuery.makeArray(selector))));},is:function(selector){return!!selector&&jQuery.multiFilter(selector,this).length>0;},hasClass:function(selector){return this.is("."+selector);},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0)
return null;for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&&!option.attributes.value.specified?option.text:option.value;if(one)
return value;values.push(value);}}
return values;}else
return(this[0].value||"").replace(/\r/g,"");}
return undefined;}
if(value.constructor==Number)
value+='';return this.each(function(){if(this.nodeType!=1)
return;if(value.constructor==Array&&/radio|checkbox/.test(this.type))
this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0);else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0);});if(!values.length)
this.selectedIndex=-1;}else
this.value=value;});},html:function(value){return value==undefined?(this[0]?this[0].innerHTML:null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length)
data=jQuery.data(this[0],key);return data===undefined&&parts[1]?this.data(parts[0]):data;}else
return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},domManip:function(args,table,reverse,callback){var clone=this.length>1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse)
elems.reverse();}
var obj=this;if(table&&jQuery.nodeName(this,"table")&&jQuery.nodeName(elems[0],"tr"))
obj=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"));var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,"script"))
scripts=scripts.add(elem);else{if(elem.nodeType==1)
scripts=scripts.add(jQuery("script",elem).remove());callback.call(obj,elem);}});scripts.each(evalScript);});}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,elem){if(elem.src)
jQuery.ajax({url:elem.src,async:false,dataType:"script"});else
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");if(elem.parentNode)
elem.parentNode.removeChild(elem);}
function now(){return+new Date;}
jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!="object"&&typeof target!="function")
target={};if(length==i){target=this;--i;}
for(;i<length;i++)
if((options=arguments[i])!=null)
for(var name in options){var src=target[name],copy=options[name];if(target===copy)
continue;if(deep&&copy&&typeof copy=="object"&&!copy.nodeType)
target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy);else if(copy!==undefined)
target[name]=copy;}
return target;};var expando="jQuery"+now(),uuid=0,windowData={},exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)
window.jQuery=_jQuery;return jQuery;},isFunction:function(fn){return!!fn&&typeof fn!="string"&&!fn.nodeName&&fn.constructor!=Array&&/^[\s[]?function/.test(fn+"");},isXMLDoc:function(elem){return elem.documentElement&&!elem.body||elem.tagName&&elem.ownerDocument&&!elem.ownerDocument.body;},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.browser.msie)
script.text=data;else
script.appendChild(document.createTextNode(data));head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase();},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)
id=elem[expando]=++uuid;if(name&&!jQuery.cache[id])
jQuery.cache[id]={};if(data!==undefined)
jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id])
break;if(!name)
jQuery.removeData(elem);}}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)
elem.removeAttribute(expando);}
delete jQuery.cache[id];}},each:function(object,callback,args){var name,i=0,length=object.length;if(args){if(length==undefined){for(name in object)
if(callback.apply(object[name],args)===false)
break;}else
for(;i<length;)
if(callback.apply(object[i++],args)===false)
break;}else{if(length==undefined){for(name in object)
if(callback.call(object[name],name,object[name])===false)
break;}else
for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}
return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))
value=value.call(elem,i);return value&&value.constructor==Number&&type=="curCSS"&&!exclude.test(name)?value+"px":value;},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className))
elem.className+=(elem.className?" ":"")+className;});},remove:function(elem,classNames){if(elem.nodeType==1)
elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(" "):"";},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options)
elem.style[name]=old[name];},css:function(elem,name,force){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;});val-=Math.round(padding+border);}
if(jQuery(elem).is(":visible"))
getWH();else
jQuery.swap(elem,props,getWH);return Math.max(0,val);}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style;function color(elem){if(!jQuery.browser.safari)
return false;var ret=defaultView.getComputedStyle(elem,null);return!ret||ret.getPropertyValue("color")=="";}
if(name=="opacity"&&jQuery.browser.msie){ret=jQuery.attr(style,"opacity");return ret==""?"1":ret;}
if(jQuery.browser.opera&&name=="display"){var save=style.outline;style.outline="0 solid black";style.outline=save;}
if(name.match(/float/i))
name=styleFloat;if(!force&&style&&style[name])
ret=style[name];else if(defaultView.getComputedStyle){if(name.match(/float/i))
name="float";name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle&&!color(elem))
ret=computedStyle.getPropertyValue(name);else{var swap=[],stack=[],a=elem,i=0;for(;a&&color(a);a=a.parentNode)
stack.unshift(a);for(;i<stack.length;i++)
if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display="block";}
ret=name=="display"&&swap[stack.length-1]!=null?"none":(computedStyle&&computedStyle.getPropertyValue(name))||"";for(i=0;i<swap.length;i++)
if(swap[i]!=null)
stack[i].style.display=swap[i];}
if(name=="opacity"&&ret=="")
ret="1";}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=ret||0;ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}
return ret;},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement=='undefined')
context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;jQuery.each(elems,function(i,elem){if(!elem)
return;if(elem.constructor==Number)
elem+='';if(typeof elem=="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement("div");var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)
div=div.lastChild;if(jQuery.browser.msie){var tbody=!tags.indexOf("<table")&&tags.indexOf("<tbody")<0?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&tags.indexOf("<tbody")<0?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)
if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)
tbody[j].parentNode.removeChild(tbody[j]);if(/^\s/.test(elem))
div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);}
elem=jQuery.makeArray(div.childNodes);}
if(elem.length===0&&(!jQuery.nodeName(elem,"form")&&!jQuery.nodeName(elem,"select")))
return;if(elem[0]==undefined||jQuery.nodeName(elem,"form")||elem.options)
ret.push(elem);else
ret=jQuery.merge(ret,elem);});return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)
return undefined;var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined,msie=jQuery.browser.msie;name=notxml&&jQuery.props[name]||name;if(elem.tagName){var special=/href|src|style/.test(name);if(name=="selected"&&jQuery.browser.safari)
elem.parentNode.selectedIndex;if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode)
throw"type property can't be changed";elem[name]=value;}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name))
return elem.getAttributeNode(name).nodeValue;return elem[name];}
if(msie&&notxml&&name=="style")
return jQuery.attr(elem.style,"cssText",value);if(set)
elem.setAttribute(name,""+value);var attr=msie&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
if(msie&&name=="opacity"){if(set){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+
(parseInt(value)+''=="NaN"?"":"alpha(opacity="+value*100+")");}
return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+'':"";}
name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(set)
elem[name]=value;return elem[name];},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},makeArray:function(array){var ret=[];if(array!=null){var i=array.length;if(i==null||array.split||array.setInterval||array.call)
ret[0]=array;else
while(i)
ret[--i]=array[i];}
return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++)
if(array[i]===elem)
return i;return-1;},merge:function(first,second){var i=0,elem,pos=first.length;if(jQuery.browser.msie){while(elem=second[i++])
if(elem.nodeType!=8)
first[pos++]=elem;}else
while(elem=second[i++])
first[pos++]=elem;return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}
return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++)
if(!inv!=!callback(elems[i],i))
ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!=null)
ret[ret.length]=value;}
return ret.concat.apply([],ret);}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode=="CSS1Compat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing"}});jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,"parentNode");},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string")
ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret));};});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i<length;i++)
jQuery(args[i])[original](this);});};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1)
this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?"remove":"add"](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery("*",this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)
this.parentNode.removeChild(this);}},empty:function(){jQuery(">*",this).remove();while(this.firstChild)
this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&&document.body["client"+name]||jQuery.browser.safari&&window["inner"+name]||document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(Math.max(document.body["scroll"+name],document.documentElement["scroll"+name]),Math.max(document.body["offset"+name],document.documentElement["offset"+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+"px");};});function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;}var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2]);},"#":function(a,i,m){return a.getAttribute("id")==m[2];},":":{lt:function(a,i,m){return i<m[3]-0;},gt:function(a,i,m){return i>m[3]-0;},nth:function(a,i,m){return m[3]-0==i;},eq:function(a,i,m){return m[3]-0==i;},first:function(a,i){return i==0;},last:function(a,i,m,r){return i==r.length-1;},even:function(a,i){return i%2==0;},odd:function(a,i){return i%2;},"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]==a;},"last-child":function(a){return jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a;},"only-child":function(a){return!jQuery.nth(a.parentNode.lastChild,2,"previousSibling");},parent:function(a){return a.firstChild;},empty:function(a){return!a.firstChild;},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||"").indexOf(m[3])>=0;},visible:function(a){return"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden";},hidden:function(a){return"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden";},enabled:function(a){return!a.disabled;},disabled:function(a){return a.disabled;},checked:function(a){return a.checked;},selected:function(a){return a.selected||jQuery.attr(a,"selected");},text:function(a){return"text"==a.type;},radio:function(a){return"radio"==a.type;},checkbox:function(a){return"checkbox"==a.type;},file:function(a){return"file"==a.type;},password:function(a){return"password"==a.type;},submit:function(a){return"submit"==a.type;},image:function(a){return"image"==a.type;},reset:function(a){return"reset"==a.type;},button:function(a){return"button"==a.type||jQuery.nodeName(a,"button");},input:function(a){return/input|select|textarea|button/i.test(a.nodeName);},has:function(a,i,m){return jQuery.find(m[3],a).length;},header:function(a){return/h\d/i.test(a.nodeName);},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length;}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&&expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,"");cur=not?elems=f.r:jQuery.merge(cur,f.r);}
return cur;},find:function(t,context){if(typeof t!="string")
return[t];if(context&&context.nodeType!=1&&context.nodeType!=9)
return[];context=context||document;var ret=[context],done=[],last,nodeName;while(t&&last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false,re=quickChild,m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++)
for(var c=ret[i].firstChild;c;c=c.nextSibling)
if(c.nodeType==1&&(nodeName=="*"||c.nodeName.toUpperCase()==nodeName))
r.push(c);ret=r;t=t.replace(re,"");if(t.indexOf(" ")==0)continue;foundToken=true;}else{re=/^([>+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j<rl;j++){var n=m=="~"||m=="+"?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling)
if(n.nodeType==1){var id=jQuery.data(n);if(m=="~"&&merge[id])break;if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m=="~")merge[id]=true;r.push(n);}
if(m=="+")break;}}
ret=r;t=jQuery.trim(t.replace(re,""));foundToken=true;}}
if(t&&!foundToken){if(!t.indexOf(",")){if(context==ret[0])ret.shift();done=jQuery.merge(done,ret);r=ret=[context];t=" "+t.substr(1,t.length);}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]];}else{re2=quickClass;m=re2.exec(t);}
m[2]=m[2].replace(/\\/g,"");var elem=ret[ret.length-1];if(m[1]=="#"&&elem&&elem.getElementById&&!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&&oid&&typeof oid.id=="string"&&oid.id!=m[2])
oid=jQuery('[@id="'+m[2]+'"]',elem)[0];ret=r=oid&&(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[];}else{for(var i=0;ret[i];i++){var tag=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];if(tag=="*"&&ret[i].nodeName.toLowerCase()=="object")
tag="param";r=jQuery.merge(r,ret[i].getElementsByTagName(tag));}
if(m[1]==".")
r=jQuery.classFilter(r,m[2]);if(m[1]=="#"){var tmp=[];for(var i=0;r[i];i++)
if(r[i].getAttribute("id")==m[2]){tmp=[r[i]];break;}
r=tmp;}
ret=r;}
t=t.replace(re2,"");}}
if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t);}}
if(t)
ret=[];if(ret&&context==ret[0])
ret.shift();done=jQuery.merge(done,ret);return done;},classFilter:function(r,m,not){m=" "+m+" ";var tmp=[];for(var i=0;r[i];i++){var pass=(" "+r[i].className+" ").indexOf(m)>=0;if(!not&&pass||not&&!pass)
tmp.push(r[i]);}
return tmp;},filter:function(t,r,not){var last;while(t&&t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,"");break;}}
if(!m)
break;if(m[1]==":"&&m[2]=="not")
r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3]);else if(m[1]==".")
r=jQuery.classFilter(r,m[2],not);else if(m[1]=="["){var tmp=[],type=m[3];for(var i=0,rl=r.length;i<rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2]))
z=jQuery.attr(a,m[2])||'';if((type==""&&!!z||type=="="&&z==m[5]||type=="!="&&z!=m[5]||type=="^="&&z&&!z.indexOf(m[5])||type=="$="&&z.substr(z.length-m[5].length)==m[5]||(type=="*="||type=="~=")&&z.indexOf(m[5])>=0)^not)
tmp.push(a);}
r=tmp;}else if(m[1]==":"&&m[2]=="nth-child"){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]=="even"&&"2n"||m[3]=="odd"&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i<rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling)
if(n.nodeType==1)
n.nodeIndex=c++;merge[id]=true;}
var add=false;if(first==0){if(node.nodeIndex==last)
add=true;}else if((node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0)
add=true;if(add^not)
tmp.push(node);}
r=tmp;}else{var fn=jQuery.expr[m[1]];if(typeof fn=="object")
fn=fn[m[2]];if(typeof fn=="string")
fn=eval("false||function(a,i){return "+fn+";}");r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r);},not);}}
return{r:r,t:t};},dir:function(elem,dir){var matched=[],cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1)
matched.push(cur);cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])
if(cur.nodeType==1&&++num==result)
break;return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=elem)
r.push(n);}
return r;}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)
return;if(jQuery.browser.msie&&elem.setInterval)
elem=window;if(!handler.guid)
handler.guid=this.guid++;if(data!=undefined){var fn=handler;handler=this.proxy(fn,function(){return fn.apply(this,arguments);});handler.data=data;}
var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){if(typeof jQuery!="undefined"&&!jQuery.event.triggered)
return jQuery.event.handle.apply(arguments.callee.elem,arguments);});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener)
elem.addEventListener(type,handle,false);else if(elem.attachEvent)
elem.attachEvent("on"+type,handle);}}
handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)
return;var events=jQuery.data(elem,"events"),ret,index;if(events){if(types==undefined||(typeof types=="string"&&types.charAt(0)=="."))
for(var type in events)
this.remove(elem,type+(types||""));else{if(types.type){handler=types.handler;types=types.type;}
jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];if(events[type]){if(handler)
delete events[type][handler.guid];else
for(handler in events[type])
if(!parts[1]||events[type][handler].type==parts[1])
delete events[type][handler];for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener)
elem.removeEventListener(type,jQuery.data(elem,"handle"),false);else if(elem.detachEvent)
elem.detachEvent("on"+type,jQuery.data(elem,"handle"));}
ret=null;delete events[type];}}});}
for(ret in events)break;if(!ret){var handle=jQuery.data(elem,"handle");if(handle)handle.elem=null;jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle");}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data);if(type.indexOf("!")>=0){type=type.slice(0,-1);var exclusive=true;}
if(!elem){if(this.global[type])
jQuery("*").add([window,document]).trigger(type,data);}else{if(elem.nodeType==3||elem.nodeType==8)
return undefined;var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event){data.unshift({type:type,target:elem,preventDefault:function(){},stopPropagation:function(){},timeStamp:now()});data[0][expando]=true;}
data[0].type=type;if(exclusive)
data[0].exclusive=true;var handle=jQuery.data(elem,"handle");if(handle)
val=handle.apply(elem,data);if((!fn||(jQuery.nodeName(elem,'a')&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false)
val=false;if(event)
data.shift();if(extra&&jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined)
val=ret;}
if(fn&&donative!==false&&val!==false&&!(jQuery.nodeName(elem,'a')&&type=="click")){this.triggered=true;try{elem[type]();}catch(e){}}
this.triggered=false;}
return val;},handle:function(event){var val,ret,namespace,all,handlers;event=arguments[0]=jQuery.event.fix(event||window.event);namespace=event.type.split(".");event.type=namespace[0];namespace=namespace[1];all=!namespace&&!event.exclusive;handlers=(jQuery.data(this,"events")||{})[event.type];for(var j in handlers){var handler=handlers[j];if(all||handler.type==namespace){event.handler=handler;event.data=handler.data;ret=handler.apply(this,arguments);if(val!==false)
val=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}
return val;},fix:function(event){if(event[expando]==true)
return event;var originalEvent=event;event={originalEvent:originalEvent};var props="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view wheelDelta which".split(" ");for(var i=props.length;i;i--)
event[props[i]]=originalEvent[props[i]];event[expando]=true;event.preventDefault=function(){if(originalEvent.preventDefault)
originalEvent.preventDefault();originalEvent.returnValue=false;};event.stopPropagation=function(){if(originalEvent.stopPropagation)
originalEvent.stopPropagation();originalEvent.cancelBubble=true;};event.timeStamp=event.timeStamp||now();if(!event.target)
event.target=event.srcElement||document;if(event.target.nodeType==3)
event.target=event.target.parentNode;if(!event.relatedTarget&&event.fromElement)
event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode))
event.which=event.charCode||event.keyCode;if(!event.metaKey&&event.ctrlKey)
event.metaKey=event.ctrlKey;if(!event.which&&event.button)
event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));return event;},proxy:function(fn,proxy){proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;return proxy;},special:{ready:{setup:function(){bindReady();return;},teardown:function(){return;}},mouseenter:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseenter";return jQuery.event.handle.apply(this,arguments);}},mouseleave:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseleave";return jQuery.event.handle.apply(this,arguments);}}}};jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data);});},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);return(fn||data).apply(this,arguments);});return this.each(function(){jQuery.event.add(this,type,one,fn&&data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn);});},triggerHandler:function(type,data,fn){return this[0]&&jQuery.event.trigger(type,data,this[0],false,fn);},toggle:function(fn){var args=arguments,i=1;while(i<args.length)
jQuery.event.proxy(fn,args[i++]);return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;event.preventDefault();return args[this.lastToggle++].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.bind('mouseenter',fnOver).bind('mouseleave',fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)
fn.call(document,jQuery);else
jQuery.readyList.push(function(){return fn.call(this,jQuery);});return this;}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document);});jQuery.readyList=null;}
jQuery(document).triggerHandler("ready");}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener&&!jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",jQuery.ready,false);if(jQuery.browser.msie&&window==top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();if(jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",function(){if(jQuery.isReady)return;for(var i=0;i<document.styleSheets.length;i++)
if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}
jQuery.ready();},false);if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}
if(numStyles===undefined)
numStyles=jQuery("style, link[rel=stylesheet]").length;if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();}
jQuery.event.add(window,"load",jQuery.ready);}
jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,change,select,"+"submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&&parent!=elem)try{parent=parent.parentNode;}catch(error){parent=elem;}
return parent==elem;};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind();});jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!='string')
return this._load(url);var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
callback=callback||function(){};var type="GET";if(params)
if(jQuery.isFunction(params)){callback=params;params=null;}else{params=jQuery.param(params);type="POST";}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified")
self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText);self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=now();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:true,async:true,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!="string")
s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre))
s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";}else if(!s.data||!s.data.match(jsre))
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json";}
if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data)
s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head)
head.removeChild(script);};}
if(s.dataType=="script"&&s.cache==null)
s.cache=false;if(s.cache===false&&type=="GET"){var ts=now();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");}
if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null;}
if(s.global&&!jQuery.active++)
jQuery.event.trigger("ajaxStart");var remote=/^(?:\w+:)?\/\/([^\/?#]+)/;if(s.dataType=="script"&&type=="GET"&&remote.test(s.url)&&remote.exec(s.url)[1]!=location.host){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset)
script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();head.removeChild(script);}};}
head.appendChild(script);return undefined;}
var requestDone=false;var xhr=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(s.username)
xhr.open(type,s.url,s.async,s.username,s.password);else
xhr.open(type,s.url,s.async);try{if(s.data)
xhr.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)
xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend&&s.beforeSend(xhr,s)===false){s.global&&jQuery.active--;xhr.abort();return false;}
if(s.global)
jQuery.event.trigger("ajaxSend",[xhr,s]);var onreadystatechange=function(isTimeout){if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null;}
status=isTimeout=="timeout"&&"timeout"||!jQuery.httpSuccess(xhr)&&"error"||s.ifModified&&jQuery.httpNotModified(xhr,s.url)&&"notmodified"||"success";if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s.dataFilter);}catch(e){status="parsererror";}}
if(status=="success"){var modRes;try{modRes=xhr.getResponseHeader("Last-Modified");}catch(e){}
if(s.ifModified&&modRes)
jQuery.lastModified[s.url]=modRes;if(!jsonp)
success();}else
jQuery.handleError(s,xhr,status);complete();if(s.async)
xhr=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0)
setTimeout(function(){if(xhr){xhr.abort();if(!requestDone)
onreadystatechange("timeout");}},s.timeout);}
try{xhr.send(s.data);}catch(e){jQuery.handleError(s,xhr,null,e);}
if(!s.async)
onreadystatechange();function success(){if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xhr,s]);}
function complete(){if(s.complete)
s.complete(xhr,status);if(s.global)
jQuery.event.trigger("ajaxComplete",[xhr,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");}
return xhr;},handleError:function(s,xhr,status,e){if(s.error)s.error(xhr,status,e);if(s.global)
jQuery.event.trigger("ajaxError",[xhr,s,e]);},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}
return false;},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");return xhr.status==304||xhrRes==jQuery.lastModified[url]||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}
return false;},httpData:function(xhr,type,filter){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.tagName=="parsererror")
throw"parsererror";if(filter)
data=filter(data,type);if(type=="script")
jQuery.globalEval(data);if(type=="json")
data=eval("("+data+")");return data;},param:function(a){var s=[];if(a.constructor==Array||a.jquery)
jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value));});else
for(var j in a)
if(a[j]&&a[j].constructor==Array)
jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+"="+encodeURIComponent(this));});else
s.push(encodeURIComponent(j)+"="+encodeURIComponent(jQuery.isFunction(a[j])?a[j]():a[j]));return s.join("&").replace(/%20/g,"+");}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:"show",width:"show",opacity:"show"},speed,callback):this.filter(":hidden").each(function(){this.style.display=this.oldblock||"";if(jQuery.css(this,"display")=="none"){var elem=jQuery("<"+this.tagName+" />").appendTo("body");this.style.display=elem.css("display");if(this.style.display=="none")
this.style.display="block";elem.remove();}}).end();},hide:function(speed,callback){return speed?this.animate({height:"hide",width:"hide",opacity:"hide"},speed,callback):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display");this.style.display="none";}).end();},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]();});},slideDown:function(speed,callback){return this.animate({height:"show"},speed,callback);},slideUp:function(speed,callback){return this.animate({height:"hide"},speed,callback);},slideToggle:function(speed,callback){return this.animate({height:"toggle"},speed,callback);},fadeIn:function(speed,callback){return this.animate({opacity:"show"},speed,callback);},fadeOut:function(speed,callback){return this.animate({opacity:"hide"},speed,callback);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){if(this.nodeType!=1)
return false;var opt=jQuery.extend({},optall),p,hidden=jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)
return opt.complete.call(this);if(p=="height"||p=="width"){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}
if(opt.overflow!=null)
this.style.overflow="hidden";opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))
e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1])
end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},queue:function(type,fn){if(jQuery.isFunction(type)||(type&&type.constructor==Array)){fn=type;type="fx";}
if(!type||(typeof type=="string"&&!fn))
return queue(this[0],type);return this.each(function(){if(fn.constructor==Array)
queue(this,type,fn);else{queue(this,type).push(fn);if(queue(this,type).length==1)
fn.call(this);}});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)
this.queue([]);this.each(function(){for(var i=timers.length-1;i>=0;i--)
if(timers[i].elem==this){if(gotoEnd)
timers[i](true);timers.splice(i,1);}});if(!gotoEnd)
this.dequeue();return this;}});var queue=function(elem,type,array){if(elem){type=type||"fx";var q=jQuery.data(elem,type+"queue");if(!q||array)
q=jQuery.data(elem,type+"queue",jQuery.makeArray(array));}
return q;};jQuery.fn.dequeue=function(type){type=type||"fx";return this.each(function(){var q=queue(this,type);q.shift();if(q.length)
q[0].call(this);});};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&speed.constructor==Object?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&easing.constructor!=Function&&easing};opt.duration=(opt.duration&&opt.duration.constructor==Number?opt.duration:jQuery.fx.speeds[opt.duration])||jQuery.fx.speeds.def;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)
jQuery(this).dequeue();if(jQuery.isFunction(opt.old))
opt.old.call(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)
options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)
this.options.step.call(this.elem,this.now,this);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop=="height"||this.prop=="width")
this.elem.style.display="block";},cur:function(force){if(this.elem[this.prop]!=null&&this.elem.style[this.prop]==null)
return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++)
if(!timers[i]())
timers.splice(i--,1);if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop=="width"||this.prop=="height")
this.elem.style[this.prop]="1px";jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now();if(gotoEnd||t>this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)
if(this.options.curAnim[i]!==true)
done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")
this.elem.style.display="block";}
if(this.options.hide)
this.elem.style.display="none";if(this.options.hide||this.options.show)
for(var p in this.options.curAnim)
jQuery.attr(this.elem.style,p,this.options.orig[p]);}
if(done)
this.options.complete.call(this.elem);return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,def:400},step:{scrollLeft:function(fx){fx.elem.scrollLeft=fx.now;},scrollTop:function(fx){fx.elem.scrollTop=fx.now;},opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now);},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit;}}});jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),css=jQuery.curCSS,fixed=css(elem,"position")=="fixed";if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop);}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2)
border(offsetParent);if(!fixed&&css(offsetParent,"position")=="fixed")
fixed=true;offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent;}
while(parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(css(parent,"display")))
add(-parent.scrollLeft,-parent.scrollTop);if(mozilla&&css(parent,"overflow")!="visible")
border(parent);parent=parent.parentNode;}
if((safari2&&(fixed||css(offsetChild,"position")=="absolute"))||(mozilla&&css(offsetChild,"position")!="absolute"))
add(-doc.body.offsetLeft,-doc.body.offsetTop);if(fixed)
add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));}
results={top:top,left:left};}
function border(elem){add(jQuery.curCSS(elem,"borderLeftWidth",true),jQuery.curCSS(elem,"borderTopWidth",true));}
function add(l,t){left+=parseInt(l,10)||0;top+=parseInt(t,10)||0;}
return results;};jQuery.fn.extend({position:function(){var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return jQuery(offsetParent);}});jQuery.each(['Left','Top'],function(i,name){var method='scroll'+name;jQuery.fn[method]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val;}):this[0]==window||this[0]==document?self[i?'pageYOffset':'pageXOffset']||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method];};});jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom";jQuery.fn["inner"+name]=function(){return this[name.toLowerCase()]()+
num(this,"padding"+tl)+
num(this,"padding"+br);};jQuery.fn["outer"+name]=function(margin){return this["inner"+name]()+
num(this,"border"+tl+"Width")+
num(this,"border"+br+"Width")+
(margin?num(this,"margin"+tl)+num(this,"margin"+br):0);};});})();/* --------- /javascripts/jrails.js --------- */ 

(function($){$().ajaxSend(function(a,xhr,s){xhr.setRequestHeader("Accept","text/javascript, text/html, application/xml, text/xml, */*");});})(jQuery);(function($){$.extend({fieldEvent:function(el,obs){var field=el[0]||el,e='change';if(field.type=='radio'||field.type=='checkbox')e='click';else if(obs&&field.type=='text'||field.type=='textarea')e='keyup';return e;}});$.fn.extend({delayedObserver:function(delay,callback){var el=$(this);if(typeof window.delayedObserverStack=='undefined')window.delayedObserverStack=[];if(typeof window.delayedObserverCallback=='undefined'){window.delayedObserverCallback=function(stackPos){observed=window.delayedObserverStack[stackPos];if(observed.timer)clearTimeout(observed.timer);observed.timer=setTimeout(function(){observed.timer=null;observed.callback(observed.obj,observed.obj.formVal());},observed.delay*1000);observed.oldVal=observed.obj.formVal();}}
window.delayedObserverStack.push({obj:el,timer:null,delay:delay,oldVal:el.formVal(),callback:callback});var stackPos=window.delayedObserverStack.length-1;if(el[0].tagName=='FORM'){$(':input',el).each(function(){var field=$(this);field.bind($.fieldEvent(field,delay),function(){observed=window.delayedObserverStack[stackPos];if(observed.obj.formVal()==observed.obj.oldVal)return;else window.delayedObserverCallback(stackPos);});});}else{el.bind($.fieldEvent(el,delay),function(){observed=window.delayedObserverStack[stackPos];if(observed.obj.formVal()==observed.obj.oldVal)return;else window.delayedObserverCallback(stackPos);});};},formVal:function(){var el=this[0];if(el.tagName=='FORM')return this.serialize();if(el.type=='checkbox'||self.type=='radio')return this.filter('input:checked').val()||'';else return this.val();}});})(jQuery);(function($){$.fn.fadeToggle=function(speed,easing,callback){return this.animate({opacity:'toggle'},speed,easing,callback);};$.fn.extend({visualEffect:function(o){return this.effect(o);},Appear:function(speed,callback){return this.fadeIn(speed,callback);},BlindDown:function(speed,callback){this.show('blind',{direction:'vertical'},speed,callback);return this;},BlindUp:function(speed,callback){this.hide('blind',{direction:'vertical'},speed,callback);return this;},BlindRight:function(speed,callback){this.show('blind',{direction:'horizontal'},speed,callback);return this;},BlindLeft:function(speed,callback){this.hide('blind',{direction:'horizontal'},speed,callback);return this;},DropOut:function(speed,callback){this.hide('drop',{direction:'down'},speed,callback);return this;},DropIn:function(speed,callback){this.show('drop',{direction:'up'},speed,callback);return this;},Fade:function(speed,callback){return this.fadeOut(speed,callback);},Fold:function(speed,callback){this.hide('fold',{},speed,callback);return this;},FoldOut:function(speed,callback){this.show('fold',{},speed,callback);return this;},Grow:function(speed,callback){this.show('scale',{},speed,callback);return this;},Highlight:function(speed,callback){this.show('highlight',{},speed,callback);return this;},Puff:function(speed,callback){this.hide('puff',{},speed,callback);return this;},Pulsate:function(speed,callback){this.show('pulsate',{},speed,callback);return this;},Shake:function(speed,callback){this.show('shake',{},speed,callback);return this;},Shrink:function(speed,callback){this.hide('scale',{},speed,callback);return this;},Squish:function(speed,callback){this.hide('scale',{origin:['top','left']},speed,callback);return this;},SlideUp:function(speed,callback){this.hide('slide',{direction:'up'},speed,callback);return this;},SlideDown:function(speed,callback){this.show('slide',{direction:'up'},speed,callback);return this;},SwitchOff:function(speed,callback){this.hide('clip',{},speed,callback);return this;},SwitchOn:function(speed,callback){this.show('clip',{},speed,callback);return this;}});})(jQuery);/* --------- /javascripts/jquery.dimensions.js --------- */ 

(function($){$.dimensions={version:'1.2'};$.each(['Height','Width'],function(i,name){$.fn['inner'+name]=function(){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';return this.is(':visible')?this[0]['client'+name]:num(this,name.toLowerCase())+num(this,'padding'+torl)+num(this,'padding'+borr);};$.fn['outer'+name]=function(options){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';options=$.extend({margin:false},options||{});var val=this.is(':visible')?this[0]['offset'+name]:num(this,name.toLowerCase())
+num(this,'border'+torl+'Width')+num(this,'border'+borr+'Width')
+num(this,'padding'+torl)+num(this,'padding'+borr);return val+(options.margin?(num(this,'margin'+torl)+num(this,'margin'+borr)):0);};});$.each(['Left','Top'],function(i,name){$.fn['scroll'+name]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(name=='Left'?val:$(window)['scrollLeft'](),name=='Top'?val:$(window)['scrollTop']()):this['scroll'+name]=val;}):this[0]==window||this[0]==document?self[(name=='Left'?'pageXOffset':'pageYOffset')]||$.boxModel&&document.documentElement['scroll'+name]||document.body['scroll'+name]:this[0]['scroll'+name];};});$.fn.extend({position:function(){var left=0,top=0,elem=this[0],offset,parentOffset,offsetParent,results;if(elem){offsetParent=this.offsetParent();offset=this.offset();parentOffset=offsetParent.offset();offset.top-=num(elem,'marginTop');offset.left-=num(elem,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&$.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return $(offsetParent);}});function num(el,prop){return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;};})(jQuery);/* --------- /javascripts/jquery.color.js --------- */ 

(function(jQuery){jQuery.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','color','outlineColor'],function(i,attr){jQuery.fx.step[attr]=function(fx){if(fx.state==0){fx.start=getColor(fx.elem,attr);fx.end=getRGB(fx.end);}
fx.elem.style[attr]="rgb("+[Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2]),255),0)].join(",")+")";}});function getRGB(color){var result;if(color&&color.constructor==Array&&color.length==3)
return color;if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
return[parseInt(result[1]),parseInt(result[2]),parseInt(result[3])];if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];return colors[jQuery.trim(color).toLowerCase()];}
function getColor(elem,attr){var color;do{color=jQuery.curCSS(elem,attr);if(color!=''&&color!='transparent'||jQuery.nodeName(elem,"body"))
break;attr="backgroundColor";}while(elem=elem.parentNode);return getRGB(color);};var colors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};})(jQuery);/* --------- /javascripts/jquery.ahover.js --------- */ 

(function($){$.extend({ahover:{version:1.0,defaults:{toggleSpeed:75,toggleEffect:'both',hoverEffect:null,moveSpeed:250,easing:'swing',className:'ahover'},effects:{'width':{width:0},'height':{height:0},'both':{width:0,height:0}}}});$.fn.extend({ahover:function(options){var options=$.extend({},$.ahover.defaults,options);var effect=((typeof options.toggleEffect=='string')?$.ahover.effects[options.toggleEffect]:options.toggleEffect);var parent=this.offsetParent();return this.hover(function(e){var over=$(this);var overSize={width:over.outerWidth(),height:over.outerHeight()};var overOffset=over.offset();var parentOffset=parent.offset();var under=$('div.'+options.className,parent).stop();var created=(under.length==0);if(created){under=$('<div>&nbsp;</div>').addClass(options.className).appendTo(parent).css(overSize);}
var underOffset={left:overOffset.left-parentOffset.left-
(under.outerWidth()-under.width())/2,top:overOffset.top-parentOffset.top-
(under.outerHeight()-under.height())/2}
if(created){under.css(underOffset).css(effect).animate(overSize,{queue:false,duration:options.toggleSpeed,easing:options.easing});}
else{var underCSS=$.extend({},overSize,underOffset);under.animate(underCSS,{queue:false,duration:options.moveSpeed,easing:options.easing});}
if($.isFunction(options.hoverEffect)){under.queue(options.hoverEffect);}},function(e){$('div.'+options.className,parent).animate(effect,{queue:false,duration:options.toggleSpeed,easing:options.easing,complete:function(){$(this).remove();}});});}});})(jQuery);/* --------- /javascripts/jquery.tablesorter.min.js --------- */ 
/* FILE READ ERROR! *//* --------- /javascripts/jquery.blockUI.js --------- */ 

﻿;(function($){if(/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery)||/^1.1/.test($.fn.jquery)){alert('blockUI requires jQuery v1.2.3 or later!  You are using v'+$.fn.jquery);return;}
$.blockUI=function(opts){install(window,opts);};$.unblockUI=function(opts){remove(window,opts);};$.fn.block=function(opts){return this.each(function(){if($.css(this,'position')=='static')
this.style.position='relative';if($.browser.msie)
this.style.zoom=1;install(this,opts);});};$.fn.unblock=function(opts){return this.each(function(){remove(this,opts);});};$.blockUI.version=2.09;$.blockUI.defaults={message:'<h2>Please wait...</h2>',css:{padding:0,margin:0,width:'30%',top:'40%',left:'35%',textAlign:'center',color:'#000',border:'3px solid #aaa',backgroundColor:'#fff',cursor:'wait'},overlayCSS:{backgroundColor:'#000',opacity:'0.6'},baseZ:1000,centerX:true,centerY:true,allowBodyStretch:true,constrainTabKey:true,fadeOut:400,focusInput:true,applyPlatformOpacityRules:true,onUnblock:null,quirksmodeOffsetHack:4};var ie6=$.browser.msie&&/MSIE 6.0/.test(navigator.userAgent);var pageBlock=null;var pageBlockEls=[];function install(el,opts){var full=(el==window);var msg=opts&&opts.message!==undefined?opts.message:undefined;opts=$.extend({},$.blockUI.defaults,opts||{});opts.overlayCSS=$.extend({},$.blockUI.defaults.overlayCSS,opts.overlayCSS||{});var css=$.extend({},$.blockUI.defaults.css,opts.css||{});msg=msg===undefined?opts.message:msg;if(full&&pageBlock)
remove(window,{fadeOut:0});if(msg&&typeof msg!='string'&&(msg.parentNode||msg.jquery)){var node=msg.jquery?msg[0]:msg;var data={};$(el).data('blockUI.history',data);data.el=node;data.parent=node.parentNode;data.display=node.style.display;data.position=node.style.position;data.parent.removeChild(node);}
var z=opts.baseZ;var lyr1=($.browser.msie)?$('<iframe class="blockUI" style="z-index:'+z+++';border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="javascript:false;"></iframe>'):$('<div class="blockUI" style="display:none"></div>');var lyr2=$('<div class="blockUI blockOverlay" style="z-index:'+z+++';cursor:wait;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');var lyr3=full?$('<div class="blockUI blockMsg blockPage" style="z-index:'+z+';position:fixed"></div>'):$('<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>');if(msg)
lyr3.css(css);if(!opts.applyPlatformOpacityRules||!($.browser.mozilla&&/Linux/.test(navigator.platform)))
lyr2.css(opts.overlayCSS);lyr2.css('position',full?'fixed':'absolute');if($.browser.msie)
lyr1.css('opacity','0.0');$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full?'body':el);var expr=$.browser.msie&&(!$.boxModel||$('object,embed',full?null:el).length>0);if(ie6||expr){if(full&&opts.allowBodyStretch&&$.boxModel)
$('html,body').css('height','100%');if((ie6||!$.boxModel)&&!full){var t=sz(el,'borderTopWidth'),l=sz(el,'borderLeftWidth');var fixT=t?'(0 - '+t+')':0;var fixL=l?'(0 - '+l+')':0;}
$.each([lyr1,lyr2,lyr3],function(i,o){var s=o[0].style;s.position='absolute';if(i<2){full?s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"'):s.setExpression('height','this.parentNode.offsetHeight + "px"');full?s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):s.setExpression('width','this.parentNode.offsetWidth + "px"');if(fixL)s.setExpression('left',fixL);if(fixT)s.setExpression('top',fixT);}
else if(opts.centerY){if(full)s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');s.marginTop=0;}});}
lyr3.append(msg).show();if(msg&&(msg.jquery||msg.nodeType))
$(msg).show();bind(1,el,opts);if(full){pageBlock=lyr3[0];pageBlockEls=$(':input:enabled:visible',pageBlock);if(opts.focusInput)
setTimeout(focus,20);}
else
center(lyr3[0],opts.centerX,opts.centerY);};function remove(el,opts){var full=el==window;var data=$(el).data('blockUI.history');opts=$.extend({},$.blockUI.defaults,opts||{});bind(0,el,opts);var els=full?$('body').children().filter('.blockUI'):$('.blockUI',el);if(full)
pageBlock=pageBlockEls=null;if(opts.fadeOut){els.fadeOut(opts.fadeOut);setTimeout(function(){reset(els,data,opts,el);},opts.fadeOut);}
else
reset(els,data,opts,el);};function reset(els,data,opts,el){els.each(function(i,o){if(this.parentNode)
this.parentNode.removeChild(this);});if(data&&data.el){data.el.style.display=data.display;data.el.style.position=data.position;data.parent.appendChild(data.el);$(data.el).removeData('blockUI.history');}
if(typeof opts.onUnblock=='function')
opts.onUnblock(el,opts);};function bind(b,el,opts){var full=el==window,$el=$(el);if(!b&&(full&&!pageBlock||!full&&!$el.data('blockUI.isBlocked')))
return;if(!full)
$el.data('blockUI.isBlocked',b);var events='mousedown mouseup keydown keypress click';b?$(document).bind(events,opts,handler):$(document).unbind(events,handler);};function handler(e){if(e.keyCode&&e.keyCode==9){if(pageBlock&&e.data.constrainTabKey){var els=pageBlockEls;var fwd=!e.shiftKey&&e.target==els[els.length-1];var back=e.shiftKey&&e.target==els[0];if(fwd||back){setTimeout(function(){focus(back)},10);return false;}}}
if($(e.target).parents('div.blockMsg').length>0)
return true;return $(e.target).parents().children().filter('div.blockUI').length==0;};function focus(back){if(!pageBlockEls)
return;var e=pageBlockEls[back===true?pageBlockEls.length-1:0];if(e)
e.focus();};function center(el,x,y){var p=el.parentNode,s=el.style;var l=((p.offsetWidth-el.offsetWidth)/2)-sz(p,'borderLeftWidth');var t=((p.offsetHeight-el.offsetHeight)/2)-sz(p,'borderTopWidth');if(x)s.left=l>0?(l+'px'):'0';if(y)s.top=t>0?(t+'px'):'0';};function sz(el,p){return parseInt($.css(el,p))||0;};})(jQuery);/* --------- /javascripts/jquery.ajaxmanager.js --------- */ 

(function($){$.extend({manageAjax:function(o){o=$.extend({manageType:'normal',maxReq:0,blockSameRequest:false,global:true},o);return new $.ajaxManager(o);},ajaxManager:function(o){this.opt=o;this.queue=[];}});$.extend($.ajaxManager.prototype,{add:function(o){var quLen=this.queue.length,s=this.opt,q=this.queue,self=this,i,j;var cD=(o.data&&typeof o.data!="string")?$.param(o.data):o.data;if(s.blockSameRequest){var toPrevent=false;for(i=0;i<quLen;i++){if(q[i]&&q[i].data===cD&&q[i].url===o.url&&q[i].type===o.type){toPrevent=true;break;}}
if(toPrevent){return false;}}
q[quLen]={fnError:o.error,fnSuccess:o.success,fnComplete:o.complete,fnAbort:o.abort,error:[],success:[],complete:[],done:false,queued:false,data:cD,url:o.url,type:o.type,xhr:null};o.error=function(){if(q[quLen]){q[quLen].error=arguments;}};o.success=function(){if(q[quLen]){q[quLen].success=arguments;}};o.abort=function(){if(q[quLen]){q[quLen].abort=arguments;}};function startCallbacks(num){if(q[num].fnError){q[num].fnError.apply($,q[num].error);}
if(q[num].fnSuccess){q[num].fnSuccess.apply($,q[num].success);}
if(q[num].fnComplete){q[num].fnComplete.apply($,q[num].complete);}
self.abort(num,true);}
o.complete=function(){if(!q[quLen]){return;}
q[quLen].complete=arguments;q[quLen].done=true;switch(s.manageType){case'sync':if(quLen===0||!q[quLen-1]){var curQLen=q.length;for(i=quLen;i<curQLen;i++){if(q[i]){if(q[i].done){startCallbacks(i);}
else{break;}}}}
break;case'queue':if(quLen===0||!q[quLen-1]){var curQLen=q.length;for(i=0,j=0;i<curQLen;i++){if(q[i]&&q[i].queued){q[i].xhr=jQuery.ajax(q[i].xhr);q[i].queued=false;break;}}}
startCallbacks(quLen);break;case'abortOld':startCallbacks(quLen);for(i=quLen;i>=0;i--){if(q[i]){self.abort(i);}}
break;default:startCallbacks(quLen);break;}};if(s.maxReq){if(s.manageType!='queue'){for(i=quLen,j=0;i>=0;i--){if(j>=s.maxReq){this.abort(i);}
if(q[i]){j++;}}}
else{for(i=0,j=0;i<=quLen&&!q[quLen].queued;i++){if(q[i]&&!q[i].queued)
j++;if(j>s.maxReq)
q[quLen].queued=true;}}}
q[quLen].xhr=(q[quLen].queued)?o:jQuery.ajax(o);return quLen;},cleanUp:function(){this.queue=[];},abort:function(num,completed){var qLen=this.queue.length,s=this.opt,q=this.queue,self=this,i;function del(num){if(!q[num]){return;}
(!completed&&q[num].fnAbort)&&q[num].fnAbort.apply($,[num]);if(!q[num]){return;}
if(q[num].xhr){if(typeof q[num].xhr.abort!='undefined'){q[num].xhr.abort();}
if(typeof q[num].xhr.close!='undefined'){q[num].xhr.close();}
q[num].xhr=null;}
if(s.global&&$.active&&!--$.active){$.event.trigger("ajaxStop");}
q[num]=null;}
if(!num&&num!==0){for(i=0;i<qLen;i++){del(i);}
this.cleanUp();}
else{del(num);var allowCleaning=true;for(i=qLen;i>=0;i--){if(q[i]){allowCleaning=false;break;}}
if(allowCleaning){this.cleanUp();}}}});})(jQuery);/* --------- /javascripts/jquery.flydom.js --------- */ 

jQuery.fn.createAppend=function(element,attrs,content)
{if(attrs==undefined&&element.constructor==Array){for(var i=0;i<element.length;i+=3){jQuery(this).createAppend(element[i],element[i+1]||{},element[i+2]||[]);}
return this;}
var parentElement=this[0];if(jQuery.browser.msie&&element=='input'&&attrs.type){var element=document.createElement('<'+element+' type="'+attrs.type+'" />');}else{var element=document.createElement(element);};if(parentElement.nodeName.toLowerCase()=='table'&&element.nodeName.toLowerCase()=='tr'){if(parentElement&&parentElement.getElementsByTagName('tbody')[0]){var tbody=parentElement.getElementsByTagName('tbody')[0];}else{var tbody=parentElement.appendChild(document.createElement('tbody'));};var element=tbody.appendChild(element);}else{var element=parentElement.appendChild(element);};element=__FlyDOM_parseAttrs(element,attrs);if(typeof content=='object'&&content!=null){for(var i=0;i<content.length;i=i+3){jQuery(element).createAppend(content[i],content[i+1]||{},content[i+2]||[]);};}else if(content!=null){element=__FlyDOM_setText(element,content);};return jQuery(element);}
jQuery.fn.createPrepend=function(element,attrs,content)
{if(attrs==undefined&&element.constructor==Array){for(var i=0;i<element.length;i+=3){jQuery(this).createPrepend(element[i],element[i+1]||{},element[i+2]||[]);}
return this;}
var element=document.createElement(element);if(this[0].hasChildNodes()==false){var element=this[0].appendChild(element);};element=__FlyDOM_parseAttrs(element,attrs);if(typeof content=='object'&&content!=null){for(var i=0;i<content.length;i=i+3){jQuery(element).createAppend(content[i],content[i+1]||{},content[i+2]||[]);};}else if(content!=null){element=__FlyDOM_setText(element,content);};if(this[0].hasChildNodes()==true){var element=this[0].insertBefore(element,this[0].firstChild);};return jQuery(element);}
jQuery.fn.tplAppend=function(json,tpl)
{if(json.constructor!=Array){json=[json];};if(json.length==0){return false;};for(var i=0;i<json.length;i++){var results=tpl.apply(json[i]);for(var j=0;j<results.length;j=j+3){jQuery(this).createAppend(results[j],results[j+1],results[j+2]);};};return this;}
jQuery.fn.tplPrepend=function(json,tpl){var self=this[0];if(json.constructor!=Array){json=[json];};if(json.length==0){return false;};var div=document.createElement('div');for(var i=0;i<json.length;i++){var results=tpl.apply(json[i]);for(var j=0;j<results.length;j=j+3){jQuery(div).createAppend(results[j],results[j+1],results[j+2]);};};for(i=div.childNodes.length-1;i>=0;i--){if(jQuery.browser.msie&&self.nodeName.toLowerCase()=='table'&&div.childNodes[i].nodeName.toLowerCase()=='tr'){if(self.getElementsByTagName('tbody')[0]){var tbodyElement=self.getElementsByTagName('tbody')[0];tbodyElement.insertBefore(div.childNodes[i],tbodyElement.firstChild);}else{var tbodyElement=self.insertBefore(document.createElement('tbody'),self.firstChild);tbodyElement.appendChild(tbodyElement.appendChild(div.childNodes[i]));};}else{self.insertBefore(div.childNodes[i],self.firstChild);};};return this;};String.prototype.toCamelCase=function()
{var self=this;var special={'class':'className','colspan':'colSpan','rowspan':'rowSpan','for':'htmlFor','httpequiv':'httpEquiv','alink':'aLink','vlink':'vLink','bgcolor':'bgColor','acceptcharset':'acceptCharset','selectedindex':'selectedIndex','tabindex':'tabIndex','selected':'defaultSelected','checked':'defaultChecked','value':'defaultValue','accesskey':'accessKey','noshade':'noShade','datetime':'dateTime','usemap':'useMap','lowsrc':'lowSrc','longdesc':'longDesc','ismap':'isMap','codebase':'codeBase','codetype':'codeType','valuetype':'valueType','nohref':'noHref','thead':'tHead','tfoot':'tFoot','cellpadding':'cellPadding','cellspacing':'cellSpacing','charoff':'chOff','valign':'vAlign','frameborder':'frameBorder','marginheight':'marginHeight','marginwidth':'marginWidth','noresize':'noResize'};if(special[self]!=''&&typeof special[self]!='undefined'){return special[self];}
if(self.indexOf('-')>0){var parts=self.split('-');self=parts[0];for(i=1;i<parts.length;i++){self+=parts[i].substr(0,1).toUpperCase()+parts[i].substr(1).toLowerCase();};};return self;};String.prototype.trim=function()
{return this.replace(/^\s+|\s+$/g,'');};__FlyDOM_parseAttrs=function(element,attrs)
{for(attr in attrs){var attrName=attr;var attrValue=attrs[attr];switch(attrName){case'style':if(typeof attrValue=='string'){var params=attrValue.split(';');for(var i=0;i<params.length;i++){if(params[i].trim()!=''){var styleName=params[i].split(':')[0].trim();var styleValue=params[i].split(':')[1].trim();styleName=styleName.toCamelCase();if(styleName!=''){element.style[styleName]=styleValue;};};};}else if(typeof attrValue=='object'){for(styleName in attrValue){var styleNameCamel=styleName.toCamelCase();if(styleName.trim()!=''){element.style[styleNameCamel]=attrValue[styleName];};};};break;default:if(attrName.substr(0,2)=='on'){var event=attrName.substr(2);attrValue=(typeof attrValue!='function')?eval('f = function() { '+attrValue+'}'):attrValue;jQuery(element).bind(event,attrValue);}else{element[attrName.toCamelCase()]=attrValue;}};};return element;};__FlyDOM_setText=function(element,content)
{var isHtml=/(<\S[^><]*>)|(&.+;)/g;if(content.match(isHtml)!=null&&element.tagName.toUpperCase()!='TEXTAREA'){element.innerHTML=content;}else{var textNode=document.createTextNode(content);element.appendChild(textNode);};return element;};/* --------- /javascripts/jquery.template.js --------- */ 

(function($){$.template=function(html,options){return new $.template.instance(html,options);};$.template.instance=function(html,options){if(options&&options['regx'])options.regx=this.regx[options.regx];this.options=$.extend({compile:false,regx:this.regx.standard},options||{});this.html=html;if(this.options.compile){this.compile();}
this.isTemplate=true;};$.template.regx=$.template.instance.prototype.regx={jsp:/\$\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,ext:/\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,jtemplates:/\{\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}\}/g};$.template.regx.standard=$.template.regx.jsp;$.template.helpers=$.template.instance.prototype.helpers={substr:function(value,start,length){return String(value).substr(start,length);}};$.extend($.template.instance.prototype,{apply:function(values){if(this.options.compile){return this.compiled(values);}else{var tpl=this;var fm=this.helpers;var fn=function(m,name,format,args){if(format){if(format.substr(0,5)=="this."){return tpl.call(format.substr(5),values[name],values);}else{if(args){var re=/^\s*['"](.*)["']\s*$/;args=args.split(',');for(var i=0,len=args.length;i<len;i++){args[i]=args[i].replace(re,"$1");}
args=[values[name]].concat(args);}else{args=[values[name]];}
return fm[format].apply(fm,args);}}else{return values[name]!==undefined?values[name]:"";}};return this.html.replace(this.options.regx,fn);}},compile:function(){var sep=$.browser.mozilla?"+":",";var fm=this.helpers;var fn=function(m,name,format,args){if(format){args=args?','+args:"";if(format.substr(0,5)!="this."){format="fm."+format+'(';}else{format='this.call("'+format.substr(5)+'", ';args=", values";}}else{args='';format="(values['"+name+"'] == undefined ? '' : ";}
return"'"+sep+format+"values['"+name+"']"+args+")"+sep+"'";};var body;if($.browser.mozilla){body="this.compiled = function(values){ return '"+
this.html.replace(/\\/g,'\\\\').replace(/(\r\n|\n)/g,'\\n').replace(/'/g,"\\'").replace(this.options.regx,fn)+"';};";}else{body=["this.compiled = function(values){ return ['"];body.push(this.html.replace(/\\/g,'\\\\').replace(/(\r\n|\n)/g,'\\n').replace(/'/g,"\\'").replace(this.options.regx,fn));body.push("'].join('');};");body=body.join('');}
eval(body);return this;}});var $_old={domManip:$.fn.domManip,text:$.fn.text,html:$.fn.html};$.fn.domManip=function(args,table,reverse,callback){if(args[0].isTemplate){args[0]=args[0].apply(args[1]);delete args[1];}
var r=$_old.domManip.apply(this,arguments);return r;};$.fn.html=function(value,o){if(value&&value.isTemplate)var value=value.apply(o);var r=$_old.html.apply(this,[value]);return r;};$.fn.text=function(value,o){if(value&&value.isTemplate)var value=value.apply(o);var r=$_old.text.apply(this,[value]);return r;};})(jQuery);/* --------- /javascripts/jquery.form.js --------- */ 
;(function($){$.fn.ajaxSubmit=function(options){if(!this.length){log('ajaxSubmit: skipping submit process - no element selected');return this;}
if(typeof options=='function')
options={success:options};options=$.extend({url:this.attr('action')||window.location.toString(),type:this.attr('method')||'GET'},options||{});var veto={};this.trigger('form-pre-serialize',[this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');return this;}
var a=this.formToArray(options.semantic);if(options.data){options.extraData=options.data;for(var n in options.data){if(options.data[n]instanceof Array){for(var k in options.data[n])
a.push({name:n,value:options.data[n][k]})}
else
a.push({name:n,value:options.data[n]});}}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){log('ajaxSubmit: submit aborted via beforeSubmit callback');return this;}
this.trigger('form-submit-validate',[a,this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-submit-validate trigger');return this;}
var q=$.param(a);if(options.type.toUpperCase()=='GET'){options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;options.data=null;}
else
options.data=q;var $form=this,callbacks=[];if(options.resetForm)callbacks.push(function(){$form.resetForm();});if(options.clearForm)callbacks.push(function(){$form.clearForm();});if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){$(options.target).html(data).each(oldSuccess,arguments);});}
else if(options.success)
callbacks.push(options.success);options.success=function(data,status){for(var i=0,max=callbacks.length;i<max;i++)
callbacks[i].apply(options,[data,status,$form]);};var files=$('input:file',this).fieldValue();var found=false;for(var j=0;j<files.length;j++)
if(files[j])
found=true;if(options.iframe||found){if($.browser.safari&&options.closeKeepAlive)
$.get(options.closeKeepAlive,fileUpload);else
fileUpload();}
else
$.ajax(options);this.trigger('form-submit-notify',[this,options]);return this;function fileUpload(){var form=$form[0];if($(':input[@name=submit]',form).length){alert('Error: Form elements must not be named "submit".');return;}
var opts=$.extend({},$.ajaxSettings,options);var s=jQuery.extend(true,{},$.extend(true,{},$.ajaxSettings),opts);var id='jqFormIO'+(new Date().getTime());var $io=$('<iframe id="'+id+'" name="'+id+'" />');var io=$io[0];if($.browser.msie||$.browser.opera)
io.src='javascript:false;document.write("");';$io.css({position:'absolute',top:'-1000px',left:'-1000px'});var xhr={aborted:0,responseText:null,responseXML:null,status:0,statusText:'n/a',getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;$io.attr('src','about:blank');}};var g=opts.global;if(g&&!$.active++)$.event.trigger("ajaxStart");if(g)$.event.trigger("ajaxSend",[xhr,opts]);if(s.beforeSend&&s.beforeSend(xhr,s)===false){s.global&&jQuery.active--;return;}
if(xhr.aborted)
return;var cbInvoked=0;var timedOut=0;var sub=form.clk;if(sub){var n=sub.name;if(n&&!sub.disabled){options.extraData=options.extraData||{};options.extraData[n]=sub.value;if(sub.type=="image"){options.extraData[name+'.x']=form.clk_x;options.extraData[name+'.y']=form.clk_y;}}}
setTimeout(function(){var t=$form.attr('target'),a=$form.attr('action');$form.attr({target:id,method:'POST',action:opts.url});if(!options.skipEncodingOverride){$form.attr({encoding:'multipart/form-data',enctype:'multipart/form-data'});}
if(opts.timeout)
setTimeout(function(){timedOut=true;cb();},opts.timeout);var extraInputs=[];try{if(options.extraData)
for(var n in options.extraData)
extraInputs.push($('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />').appendTo(form)[0]);$io.appendTo('body');io.attachEvent?io.attachEvent('onload',cb):io.addEventListener('load',cb,false);form.submit();}
finally{$form.attr('action',a);t?$form.attr('target',t):$form.removeAttr('target');$(extraInputs).remove();}},10);function cb(){if(cbInvoked++)return;io.detachEvent?io.detachEvent('onload',cb):io.removeEventListener('load',cb,false);var operaHack=0;var ok=true;try{if(timedOut)throw'timeout';var data,doc;doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document;if(doc.body==null&&!operaHack&&$.browser.opera){operaHack=1;cbInvoked--;setTimeout(cb,100);return;}
xhr.responseText=doc.body?doc.body.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;xhr.getResponseHeader=function(header){var headers={'content-type':opts.dataType};return headers[header];};if(opts.dataType=='json'||opts.dataType=='script'){var ta=doc.getElementsByTagName('textarea')[0];xhr.responseText=ta?ta.value:xhr.responseText;}
else if(opts.dataType=='xml'&&!xhr.responseXML&&xhr.responseText!=null){xhr.responseXML=toXml(xhr.responseText);}
data=$.httpData(xhr,opts.dataType);}
catch(e){ok=false;$.handleError(opts,xhr,'error',e);}
if(ok){opts.success(data,'success');if(g)$.event.trigger("ajaxSuccess",[xhr,opts]);}
if(g)$.event.trigger("ajaxComplete",[xhr,opts]);if(g&&!--$.active)$.event.trigger("ajaxStop");if(opts.complete)opts.complete(xhr,ok?'success':'error');setTimeout(function(){$io.remove();xhr.responseXML=null;},100);};function toXml(s,doc){if(window.ActiveXObject){doc=new ActiveXObject('Microsoft.XMLDOM');doc.async='false';doc.loadXML(s);}
else
doc=(new DOMParser()).parseFromString(s,'text/xml');return(doc&&doc.documentElement&&doc.documentElement.tagName!='parsererror')?doc:null;};};};$.fn.ajaxForm=function(options){return this.ajaxFormUnbind().bind('submit.form-plugin',function(){$(this).ajaxSubmit(options);return false;}).each(function(){$(":submit,input:image",this).bind('click.form-plugin',function(e){var form=this.form;form.clk=this;if(this.type=='image'){if(e.offsetX!=undefined){form.clk_x=e.offsetX;form.clk_y=e.offsetY;}else if(typeof $.fn.offset=='function'){var offset=$(this).offset();form.clk_x=e.pageX-offset.left;form.clk_y=e.pageY-offset.top;}else{form.clk_x=e.pageX-this.offsetLeft;form.clk_y=e.pageY-this.offsetTop;}}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null;},10);});});};$.fn.ajaxFormUnbind=function(){this.unbind('submit.form-plugin');return this.each(function(){$(":submit,input:image",this).unbind('click.form-plugin');});};$.fn.formToArray=function(semantic){var a=[];if(this.length==0)return a;var form=this[0];var els=semantic?form.getElementsByTagName('*'):form.elements;if(!els)return a;for(var i=0,max=els.length;i<max;i++){var el=els[i];var n=el.name;if(!n)continue;if(semantic&&form.clk&&el.type=="image"){if(!el.disabled&&form.clk==el)
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});continue;}
var v=$.fieldValue(el,true);if(v&&v.constructor==Array){for(var j=0,jmax=v.length;j<jmax;j++)
a.push({name:n,value:v[j]});}
else if(v!==null&&typeof v!='undefined')
a.push({name:n,value:v});}
if(!semantic&&form.clk){var inputs=form.getElementsByTagName("input");for(var i=0,max=inputs.length;i<max;i++){var input=inputs[i];var n=input.name;if(n&&!input.disabled&&input.type=="image"&&form.clk==input)
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}}
return a;};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic));};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n)return;var v=$.fieldValue(this,successful);if(v&&v.constructor==Array){for(var i=0,max=v.length;i<max;i++)
a.push({name:n,value:v[i]});}
else if(v!==null&&typeof v!='undefined')
a.push({name:this.name,value:v});});return $.param(a);};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length))
continue;v.constructor==Array?$.merge(val,v):val.push(v);}
return val;};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(typeof successful=='undefined')successful=true;if(successful&&(!n||el.disabled||t=='reset'||t=='button'||(t=='checkbox'||t=='radio')&&!el.checked||(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||tag=='select'&&el.selectedIndex==-1))
return null;if(tag=='select'){var index=el.selectedIndex;if(index<0)return null;var a=[],ops=el.options;var one=(t=='select-one');var max=(one?index+1:ops.length);for(var i=(one?index:0);i<max;i++){var op=ops[i];if(op.selected){var v=$.browser.msie&&!(op.attributes['value'].specified)?op.text:op.value;if(one)return v;a.push(v);}}
return a;}
return el.value;};$.fn.clearForm=function(){return this.each(function(){$('input,select,textarea',this).clearFields();});};$.fn.clearFields=$.fn.clearInputs=function(){return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(t=='text'||t=='password'||tag=='textarea')
this.value='';else if(t=='checkbox'||t=='radio')
this.checked=false;else if(tag=='select')
this.selectedIndex=-1;});};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType))
this.reset();});};$.fn.enable=function(b){if(b==undefined)b=true;return this.each(function(){this.disabled=!b});};$.fn.selected=function(select){if(select==undefined)select=true;return this.each(function(){var t=this.type;if(t=='checkbox'||t=='radio')
this.checked=select;else if(this.tagName.toLowerCase()=='option'){var $sel=$(this).parent('select');if(select&&$sel[0]&&$sel[0].type=='select-one'){$sel.find('option').selected(false);}
this.selected=select;}});};function log(){if($.fn.ajaxSubmit.debug&&window.console&&window.console.log)
window.console.log('[jquery.form] '+Array.prototype.join.call(arguments,''));};})(jQuery);/* --------- /javascripts/superfish.js --------- */ 
;(function($){$.fn.superfish=function(op){var sf=$.fn.superfish,c=sf.c,$arrow=$(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),over=function(){var $$=$(this),menu=getMenu($$);clearTimeout(menu.sfTimer);$$.showSuperfishUl().siblings().hideSuperfishUl();},out=function(){var $$=$(this),menu=getMenu($$),o=sf.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=($.inArray($$[0],o.$path)>-1);$$.hideSuperfishUl();if(o.$path.length&&$$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}},o.delay);},getMenu=function($menu){var menu=$menu.parents(['ul.',c.menuClass,':first'].join(''))[0];sf.op=sf.o[menu.serial];return menu;},addArrow=function($a){$a.addClass(c.anchorClass).append($arrow.clone());};return this.each(function(){var s=this.serial=sf.o.length;var o=$.extend({},sf.defaults,op);o.$path=$('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass);});sf.o[s]=sf.op=o;$('li:has(ul)',this)[($.fn.hoverIntent&&!o.disableHI)?'hoverIntent':'hover'](over,out).each(function(){if(o.autoArrows)addArrow($('>a:first-child',this));}).not('.'+c.bcClass).hideSuperfishUl();var $a=$('a',this);$a.each(function(i){var $li=$a.eq(i).parents('li');$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});});o.onInit.call(this);}).each(function(){var menuClasses=[c.menuClass];if(sf.op.dropShadows&&!($.browser.msie&&$.browser.version<7))menuClasses.push(c.shadowClass);$(this).addClass(menuClasses.join(' '));});};var sf=$.fn.superfish;sf.o=[];sf.op={};sf.IE7fix=function(){var o=sf.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined)
this.toggleClass(sf.c.shadowClass+'-off');};sf.c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',arrowClass:'sf-sub-indicator',shadowClass:'sf-shadow'};sf.defaults={hoverClass:'sfHover',pathClass:'overideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},speed:'normal',autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=sf.op,not=(o.retainPath===true)?o.$path:'';o.retainPath=false;var $ul=$(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility','hidden');o.onHide.call($ul);return this;},showSuperfishUl:function(){var o=sf.op,sh=sf.c.shadowClass+'-off',$ul=this.addClass(o.hoverClass).find('>ul:hidden').css('visibility','visible');sf.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){sf.IE7fix.call($ul);o.onShow.call($ul);});return this;}});})(jQuery);/* --------- /javascripts/application.js --------- */ 

$(document).ready(function()
{$('.menu').superfish({delay:1000,animation:{opacity:'show'},speed:'fast',autoArrows:true,dropShadows:false,pathClass:'current'})
$('.remote-form').click(function(){launchFormInBlockUI($(this).attr('href'));return false})
$('#messages .close').click(function(){$(this).parent().fadeOut(1000)})
$('table').tablesorter()})
function launchFormInBlockUI(formLink)
{var result=$.get(formLink,function(data){var close=$('<a href="#" class="close">Close</a>').click(function(){$.unblockUI()})
var block=$('<div class="block-window"></div>').append(close).append(data)
$.blockUI({message:block})})}
var Utils=function(){}
Utils.parseJson=function(data){return eval('('+data+')')}/* --------- /javascripts/meters.js --------- */ 

var Meter=function(id,colorSet,dataType,numRows,minValue,maxValue,defaultValue){this.init(id,colorSet,dataType,numRows,minValue,maxValue,defaultValue)}
$.extend(Meter.prototype,{meterClass:'meter',labelClass:'meter-label',clearClass:'meter-clear',init:function(id,colorSet,dataType,numRows,minValue,maxValue,defaultValue){this.id=id
this.labelId=id+'_label'
this.numRows=numRows
this.colorSet=colorSet
this.minValue=minValue
this.maxValue=maxValue
this.value=defaultValue
this.dataType=dataType
this.table=$('<table></table>').addClass(this.meterClass).attr('id',this.id)
this.label=$('<div></div>').addClass(this.labelClass).attr('id',this.labelId)
this.built=false
this.debug=false
return this},_applyLabel:function(){highRow=$(this.table.find('td')[((this.numRows-1)-this.highRow)])
this.label.html(String(this.value))
highRow.append(this.label)},update:function(value){value=parseInt(value)
if(this.value>this.maxValue){throw RangeError('Error updating: new value is greater than meter high value: (new/high) ('+value+'/'+this.maxValue+')')}
if(!isNaN(value))this.value=value
var html=this.updateTable()
return html;},updateTable:function(){if(!this.built)
this._build()
try{populateWith=this._buildColorationArray()
popLength=populateWith.length
if((populateWith.length!=(this.table.find('td')).length)){throw Error('Error updating meter '+meter.id+': Color set population length is different from meter table length! (set/table): ')}
this.table.find("td").each(function(i){var t=$(this)
t.attr("class",null)
t.addClass(populateWith[popLength-(i+1)])})}catch(e){if(typeof e==RangeError){console.log('ERROR BUILDING METER: '+e.message+': actual value is '+ratioTotal)}else{console.log('ERROR BUILDING METER ('+e.class+'): '+e.message)}
console.log(e.stack)}
this._applyLabel()
return this.table},toHtml:function(){return this.update()},toJson:function(){return{id:this.id,numRows:this.numRows,colorSet:this.colorSet,minValue:this.minValue,maxValue:this.maxValue,value:this.value,built:this.built}},_build:function(){if(this.built)
return this.toHtml()
var tr=$('<tr></tr>')
var td=$('<td></td>')
var tick=td.clone().addClass('tick')
for(var i=0;i<this.numRows;i++)
{var row=tr.clone().append(td.clone())
this.table.prepend(row)}
this.built=true
return this.table},_buildColorationArray:function(){var ratioTotal=0.0;var spread=(this.maxValue-this.minValue)
var meterCounter=this.minValue
var currentValue=this.value
var populateWith=[]
var stepSize=spread/this.numRows
var colorSet=this.colorSet
colorLoop:for(var i=0;i<colorSet.length;i++){var set=colorSet[i]
var howMany=this.numRows*set.ratio
var colorLowVal=spread*ratioTotal
ratioTotal+=set.ratio
var colorHighVal=spread*ratioTotal
if(this.debug)console.log('Meter color range values: l => h: '+colorLowVal+' => '+colorHighVal+', c: '+set.class)
if(ratioTotal>1){throw RangeError("Meter color ratios sum exceeds 1.0")}
colorRowsLoop:for(var h=0;h<=howMany;h++){var barminValue=colorLowVal+(stepSize*h)
var barmaxValue=colorLowVal+(stepSize*(h+1))
meterCounter+=stepSize
this.highRow=populateWith.length
populateWith.push(set.class)
if(this.debug)console.log('Populating: l=>h: '+barminValue+' => '+barmaxValue+', v: '+currentValue+', mc: '+meterCounter)
if(currentValue<=meterCounter){for(var p=populateWith.length;p<this.numRows;p++){populateWith.push(this.clearClass)}
ratioTotal=1;break colorLoop;}}}
if(ratioTotal.toFixed(1)!=1.0){throw RangeError("Total meter color ratios not equal to 1.0, is: "+ratioTotal)}
return populateWith}});/* --------- /javascripts/device.js --------- */ 

var LoadError=Error("Failed to load device data")
var Device=function(id,dbId){this.init(id,dbId)}
$.extend(Device.prototype,{init:function(id,dbId){this.id=id
this.dbId=dbId
this.data=null
return this},load:function(callback){var device=this
$.ajax({url:this.url('json'),success:function(data){device.data=Utils.parseJson(data);if((typeof callback)=='function'){callback(device);}}})
return this.data},render:function(){if(this.data==null){this.load(this._populate)}else{this._populate(this)}},_populate:function(theDevice){devEl=$('#'+theDevice.id)
data=theDevice.data
device=data.device
registers=data.data_registers
if(devEl.length==0){}else{devEl.find('.name').html(device.name)
devEl.find('.desc').html(device.desc)
data_regs_el=devEl.find('.data_registers')
for(register in registers){regEl=$('<div class="data_register"></div>')}}},url:function(format){var url='/devices/'+this.dbId
if(format!=null)url+='.'+format
return url}});/* --------- /javascripts/data_register.js --------- */ 

var DataRegister=function(id,dbId){this.init(id,dbId)}
$.extend(DataRegister.prototype,{init:function(){},render:function(){}})
