goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33358 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33358(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33361 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33361(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32574 = coll;
var G__32575 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32574,G__32575) : shadow.dom.lazy_native_coll_seq.call(null,G__32574,G__32575));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32587 = arguments.length;
switch (G__32587) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32594 = arguments.length;
switch (G__32594) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32599 = arguments.length;
switch (G__32599) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32645 = arguments.length;
switch (G__32645) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32653){if((e32653 instanceof Object)){
var e = e32653;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32653;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32659 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32660 = null;
var count__32661 = (0);
var i__32662 = (0);
while(true){
if((i__32662 < count__32661)){
var el = chunk__32660.cljs$core$IIndexed$_nth$arity$2(null,i__32662);
var handler_33394__$1 = ((function (seq__32659,chunk__32660,count__32661,i__32662,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32659,chunk__32660,count__32661,i__32662,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33394__$1);


var G__33396 = seq__32659;
var G__33397 = chunk__32660;
var G__33398 = count__32661;
var G__33399 = (i__32662 + (1));
seq__32659 = G__33396;
chunk__32660 = G__33397;
count__32661 = G__33398;
i__32662 = G__33399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32659);
if(temp__5735__auto__){
var seq__32659__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32659__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32659__$1);
var G__33400 = cljs.core.chunk_rest(seq__32659__$1);
var G__33401 = c__4556__auto__;
var G__33402 = cljs.core.count(c__4556__auto__);
var G__33403 = (0);
seq__32659 = G__33400;
chunk__32660 = G__33401;
count__32661 = G__33402;
i__32662 = G__33403;
continue;
} else {
var el = cljs.core.first(seq__32659__$1);
var handler_33404__$1 = ((function (seq__32659,chunk__32660,count__32661,i__32662,el,seq__32659__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32659,chunk__32660,count__32661,i__32662,el,seq__32659__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33404__$1);


var G__33406 = cljs.core.next(seq__32659__$1);
var G__33407 = null;
var G__33408 = (0);
var G__33409 = (0);
seq__32659 = G__33406;
chunk__32660 = G__33407;
count__32661 = G__33408;
i__32662 = G__33409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32685 = arguments.length;
switch (G__32685) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32695 = cljs.core.seq(events);
var chunk__32696 = null;
var count__32697 = (0);
var i__32698 = (0);
while(true){
if((i__32698 < count__32697)){
var vec__32708 = chunk__32696.cljs$core$IIndexed$_nth$arity$2(null,i__32698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32708,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33422 = seq__32695;
var G__33423 = chunk__32696;
var G__33424 = count__32697;
var G__33425 = (i__32698 + (1));
seq__32695 = G__33422;
chunk__32696 = G__33423;
count__32697 = G__33424;
i__32698 = G__33425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32695);
if(temp__5735__auto__){
var seq__32695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32695__$1);
var G__33428 = cljs.core.chunk_rest(seq__32695__$1);
var G__33429 = c__4556__auto__;
var G__33430 = cljs.core.count(c__4556__auto__);
var G__33431 = (0);
seq__32695 = G__33428;
chunk__32696 = G__33429;
count__32697 = G__33430;
i__32698 = G__33431;
continue;
} else {
var vec__32716 = cljs.core.first(seq__32695__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32716,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33435 = cljs.core.next(seq__32695__$1);
var G__33436 = null;
var G__33437 = (0);
var G__33438 = (0);
seq__32695 = G__33435;
chunk__32696 = G__33436;
count__32697 = G__33437;
i__32698 = G__33438;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32723 = cljs.core.seq(styles);
var chunk__32724 = null;
var count__32725 = (0);
var i__32726 = (0);
while(true){
if((i__32726 < count__32725)){
var vec__32743 = chunk__32724.cljs$core$IIndexed$_nth$arity$2(null,i__32726);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32743,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33443 = seq__32723;
var G__33444 = chunk__32724;
var G__33445 = count__32725;
var G__33446 = (i__32726 + (1));
seq__32723 = G__33443;
chunk__32724 = G__33444;
count__32725 = G__33445;
i__32726 = G__33446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32723);
if(temp__5735__auto__){
var seq__32723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32723__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32723__$1);
var G__33450 = cljs.core.chunk_rest(seq__32723__$1);
var G__33451 = c__4556__auto__;
var G__33452 = cljs.core.count(c__4556__auto__);
var G__33453 = (0);
seq__32723 = G__33450;
chunk__32724 = G__33451;
count__32725 = G__33452;
i__32726 = G__33453;
continue;
} else {
var vec__32748 = cljs.core.first(seq__32723__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33455 = cljs.core.next(seq__32723__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__32723 = G__33455;
chunk__32724 = G__33456;
count__32725 = G__33457;
i__32726 = G__33458;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32754_33460 = key;
var G__32754_33461__$1 = (((G__32754_33460 instanceof cljs.core.Keyword))?G__32754_33460.fqn:null);
switch (G__32754_33461__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33467 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33467,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33467,"aria-");
}
})())){
el.setAttribute(ks_33467,value);
} else {
(el[ks_33467] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32771){
var map__32772 = p__32771;
var map__32772__$1 = (((((!((map__32772 == null))))?(((((map__32772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32772):map__32772);
var props = map__32772__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32772__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32775 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32785 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32785,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32785;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32791 = arguments.length;
switch (G__32791) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32797){
var vec__32798 = p__32797;
var seq__32799 = cljs.core.seq(vec__32798);
var first__32800 = cljs.core.first(seq__32799);
var seq__32799__$1 = cljs.core.next(seq__32799);
var nn = first__32800;
var first__32800__$1 = cljs.core.first(seq__32799__$1);
var seq__32799__$2 = cljs.core.next(seq__32799__$1);
var np = first__32800__$1;
var nc = seq__32799__$2;
var node = vec__32798;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32803 = nn;
var G__32804 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32803,G__32804) : create_fn.call(null,G__32803,G__32804));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32806 = nn;
var G__32807 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32806,G__32807) : create_fn.call(null,G__32806,G__32807));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32812 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32812,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32812,(1),null);
var seq__32815_33485 = cljs.core.seq(node_children);
var chunk__32816_33486 = null;
var count__32817_33487 = (0);
var i__32818_33488 = (0);
while(true){
if((i__32818_33488 < count__32817_33487)){
var child_struct_33489 = chunk__32816_33486.cljs$core$IIndexed$_nth$arity$2(null,i__32818_33488);
var children_33491 = shadow.dom.dom_node(child_struct_33489);
if(cljs.core.seq_QMARK_(children_33491)){
var seq__32843_33493 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33491));
var chunk__32845_33494 = null;
var count__32846_33495 = (0);
var i__32847_33496 = (0);
while(true){
if((i__32847_33496 < count__32846_33495)){
var child_33497 = chunk__32845_33494.cljs$core$IIndexed$_nth$arity$2(null,i__32847_33496);
if(cljs.core.truth_(child_33497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33497);


var G__33498 = seq__32843_33493;
var G__33499 = chunk__32845_33494;
var G__33500 = count__32846_33495;
var G__33501 = (i__32847_33496 + (1));
seq__32843_33493 = G__33498;
chunk__32845_33494 = G__33499;
count__32846_33495 = G__33500;
i__32847_33496 = G__33501;
continue;
} else {
var G__33505 = seq__32843_33493;
var G__33506 = chunk__32845_33494;
var G__33507 = count__32846_33495;
var G__33508 = (i__32847_33496 + (1));
seq__32843_33493 = G__33505;
chunk__32845_33494 = G__33506;
count__32846_33495 = G__33507;
i__32847_33496 = G__33508;
continue;
}
} else {
var temp__5735__auto___33510 = cljs.core.seq(seq__32843_33493);
if(temp__5735__auto___33510){
var seq__32843_33511__$1 = temp__5735__auto___33510;
if(cljs.core.chunked_seq_QMARK_(seq__32843_33511__$1)){
var c__4556__auto___33513 = cljs.core.chunk_first(seq__32843_33511__$1);
var G__33514 = cljs.core.chunk_rest(seq__32843_33511__$1);
var G__33515 = c__4556__auto___33513;
var G__33516 = cljs.core.count(c__4556__auto___33513);
var G__33517 = (0);
seq__32843_33493 = G__33514;
chunk__32845_33494 = G__33515;
count__32846_33495 = G__33516;
i__32847_33496 = G__33517;
continue;
} else {
var child_33519 = cljs.core.first(seq__32843_33511__$1);
if(cljs.core.truth_(child_33519)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33519);


var G__33520 = cljs.core.next(seq__32843_33511__$1);
var G__33521 = null;
var G__33522 = (0);
var G__33523 = (0);
seq__32843_33493 = G__33520;
chunk__32845_33494 = G__33521;
count__32846_33495 = G__33522;
i__32847_33496 = G__33523;
continue;
} else {
var G__33524 = cljs.core.next(seq__32843_33511__$1);
var G__33525 = null;
var G__33526 = (0);
var G__33527 = (0);
seq__32843_33493 = G__33524;
chunk__32845_33494 = G__33525;
count__32846_33495 = G__33526;
i__32847_33496 = G__33527;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33491);
}


var G__33529 = seq__32815_33485;
var G__33530 = chunk__32816_33486;
var G__33531 = count__32817_33487;
var G__33532 = (i__32818_33488 + (1));
seq__32815_33485 = G__33529;
chunk__32816_33486 = G__33530;
count__32817_33487 = G__33531;
i__32818_33488 = G__33532;
continue;
} else {
var temp__5735__auto___33537 = cljs.core.seq(seq__32815_33485);
if(temp__5735__auto___33537){
var seq__32815_33538__$1 = temp__5735__auto___33537;
if(cljs.core.chunked_seq_QMARK_(seq__32815_33538__$1)){
var c__4556__auto___33539 = cljs.core.chunk_first(seq__32815_33538__$1);
var G__33540 = cljs.core.chunk_rest(seq__32815_33538__$1);
var G__33541 = c__4556__auto___33539;
var G__33542 = cljs.core.count(c__4556__auto___33539);
var G__33543 = (0);
seq__32815_33485 = G__33540;
chunk__32816_33486 = G__33541;
count__32817_33487 = G__33542;
i__32818_33488 = G__33543;
continue;
} else {
var child_struct_33545 = cljs.core.first(seq__32815_33538__$1);
var children_33546 = shadow.dom.dom_node(child_struct_33545);
if(cljs.core.seq_QMARK_(children_33546)){
var seq__32856_33548 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33546));
var chunk__32858_33549 = null;
var count__32859_33550 = (0);
var i__32860_33551 = (0);
while(true){
if((i__32860_33551 < count__32859_33550)){
var child_33552 = chunk__32858_33549.cljs$core$IIndexed$_nth$arity$2(null,i__32860_33551);
if(cljs.core.truth_(child_33552)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33552);


var G__33553 = seq__32856_33548;
var G__33554 = chunk__32858_33549;
var G__33555 = count__32859_33550;
var G__33556 = (i__32860_33551 + (1));
seq__32856_33548 = G__33553;
chunk__32858_33549 = G__33554;
count__32859_33550 = G__33555;
i__32860_33551 = G__33556;
continue;
} else {
var G__33558 = seq__32856_33548;
var G__33559 = chunk__32858_33549;
var G__33560 = count__32859_33550;
var G__33561 = (i__32860_33551 + (1));
seq__32856_33548 = G__33558;
chunk__32858_33549 = G__33559;
count__32859_33550 = G__33560;
i__32860_33551 = G__33561;
continue;
}
} else {
var temp__5735__auto___33562__$1 = cljs.core.seq(seq__32856_33548);
if(temp__5735__auto___33562__$1){
var seq__32856_33563__$1 = temp__5735__auto___33562__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32856_33563__$1)){
var c__4556__auto___33564 = cljs.core.chunk_first(seq__32856_33563__$1);
var G__33565 = cljs.core.chunk_rest(seq__32856_33563__$1);
var G__33566 = c__4556__auto___33564;
var G__33567 = cljs.core.count(c__4556__auto___33564);
var G__33568 = (0);
seq__32856_33548 = G__33565;
chunk__32858_33549 = G__33566;
count__32859_33550 = G__33567;
i__32860_33551 = G__33568;
continue;
} else {
var child_33570 = cljs.core.first(seq__32856_33563__$1);
if(cljs.core.truth_(child_33570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33570);


var G__33571 = cljs.core.next(seq__32856_33563__$1);
var G__33572 = null;
var G__33573 = (0);
var G__33574 = (0);
seq__32856_33548 = G__33571;
chunk__32858_33549 = G__33572;
count__32859_33550 = G__33573;
i__32860_33551 = G__33574;
continue;
} else {
var G__33575 = cljs.core.next(seq__32856_33563__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__32856_33548 = G__33575;
chunk__32858_33549 = G__33576;
count__32859_33550 = G__33577;
i__32860_33551 = G__33578;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33546);
}


var G__33579 = cljs.core.next(seq__32815_33538__$1);
var G__33580 = null;
var G__33581 = (0);
var G__33582 = (0);
seq__32815_33485 = G__33579;
chunk__32816_33486 = G__33580;
count__32817_33487 = G__33581;
i__32818_33488 = G__33582;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32884 = cljs.core.seq(node);
var chunk__32885 = null;
var count__32886 = (0);
var i__32887 = (0);
while(true){
if((i__32887 < count__32886)){
var n = chunk__32885.cljs$core$IIndexed$_nth$arity$2(null,i__32887);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33590 = seq__32884;
var G__33591 = chunk__32885;
var G__33592 = count__32886;
var G__33593 = (i__32887 + (1));
seq__32884 = G__33590;
chunk__32885 = G__33591;
count__32886 = G__33592;
i__32887 = G__33593;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32884);
if(temp__5735__auto__){
var seq__32884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32884__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32884__$1);
var G__33594 = cljs.core.chunk_rest(seq__32884__$1);
var G__33595 = c__4556__auto__;
var G__33596 = cljs.core.count(c__4556__auto__);
var G__33597 = (0);
seq__32884 = G__33594;
chunk__32885 = G__33595;
count__32886 = G__33596;
i__32887 = G__33597;
continue;
} else {
var n = cljs.core.first(seq__32884__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33599 = cljs.core.next(seq__32884__$1);
var G__33600 = null;
var G__33601 = (0);
var G__33602 = (0);
seq__32884 = G__33599;
chunk__32885 = G__33600;
count__32886 = G__33601;
i__32887 = G__33602;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32902 = arguments.length;
switch (G__32902) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32908 = arguments.length;
switch (G__32908) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32919 = arguments.length;
switch (G__32919) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33634 = arguments.length;
var i__4737__auto___33635 = (0);
while(true){
if((i__4737__auto___33635 < len__4736__auto___33634)){
args__4742__auto__.push((arguments[i__4737__auto___33635]));

var G__33636 = (i__4737__auto___33635 + (1));
i__4737__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32940_33644 = cljs.core.seq(nodes);
var chunk__32941_33645 = null;
var count__32942_33646 = (0);
var i__32943_33647 = (0);
while(true){
if((i__32943_33647 < count__32942_33646)){
var node_33648 = chunk__32941_33645.cljs$core$IIndexed$_nth$arity$2(null,i__32943_33647);
fragment.appendChild(shadow.dom._to_dom(node_33648));


var G__33649 = seq__32940_33644;
var G__33650 = chunk__32941_33645;
var G__33651 = count__32942_33646;
var G__33652 = (i__32943_33647 + (1));
seq__32940_33644 = G__33649;
chunk__32941_33645 = G__33650;
count__32942_33646 = G__33651;
i__32943_33647 = G__33652;
continue;
} else {
var temp__5735__auto___33654 = cljs.core.seq(seq__32940_33644);
if(temp__5735__auto___33654){
var seq__32940_33655__$1 = temp__5735__auto___33654;
if(cljs.core.chunked_seq_QMARK_(seq__32940_33655__$1)){
var c__4556__auto___33656 = cljs.core.chunk_first(seq__32940_33655__$1);
var G__33657 = cljs.core.chunk_rest(seq__32940_33655__$1);
var G__33658 = c__4556__auto___33656;
var G__33659 = cljs.core.count(c__4556__auto___33656);
var G__33660 = (0);
seq__32940_33644 = G__33657;
chunk__32941_33645 = G__33658;
count__32942_33646 = G__33659;
i__32943_33647 = G__33660;
continue;
} else {
var node_33662 = cljs.core.first(seq__32940_33655__$1);
fragment.appendChild(shadow.dom._to_dom(node_33662));


var G__33663 = cljs.core.next(seq__32940_33655__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__32940_33644 = G__33663;
chunk__32941_33645 = G__33664;
count__32942_33646 = G__33665;
i__32943_33647 = G__33666;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32937){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32937));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32958_33669 = cljs.core.seq(scripts);
var chunk__32959_33670 = null;
var count__32960_33671 = (0);
var i__32961_33672 = (0);
while(true){
if((i__32961_33672 < count__32960_33671)){
var vec__32974_33673 = chunk__32959_33670.cljs$core$IIndexed$_nth$arity$2(null,i__32961_33672);
var script_tag_33674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32974_33673,(0),null);
var script_body_33675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32974_33673,(1),null);
eval(script_body_33675);


var G__33676 = seq__32958_33669;
var G__33677 = chunk__32959_33670;
var G__33678 = count__32960_33671;
var G__33679 = (i__32961_33672 + (1));
seq__32958_33669 = G__33676;
chunk__32959_33670 = G__33677;
count__32960_33671 = G__33678;
i__32961_33672 = G__33679;
continue;
} else {
var temp__5735__auto___33680 = cljs.core.seq(seq__32958_33669);
if(temp__5735__auto___33680){
var seq__32958_33681__$1 = temp__5735__auto___33680;
if(cljs.core.chunked_seq_QMARK_(seq__32958_33681__$1)){
var c__4556__auto___33682 = cljs.core.chunk_first(seq__32958_33681__$1);
var G__33683 = cljs.core.chunk_rest(seq__32958_33681__$1);
var G__33684 = c__4556__auto___33682;
var G__33685 = cljs.core.count(c__4556__auto___33682);
var G__33686 = (0);
seq__32958_33669 = G__33683;
chunk__32959_33670 = G__33684;
count__32960_33671 = G__33685;
i__32961_33672 = G__33686;
continue;
} else {
var vec__32979_33687 = cljs.core.first(seq__32958_33681__$1);
var script_tag_33688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979_33687,(0),null);
var script_body_33689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32979_33687,(1),null);
eval(script_body_33689);


var G__33690 = cljs.core.next(seq__32958_33681__$1);
var G__33691 = null;
var G__33692 = (0);
var G__33693 = (0);
seq__32958_33669 = G__33690;
chunk__32959_33670 = G__33691;
count__32960_33671 = G__33692;
i__32961_33672 = G__33693;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32982){
var vec__32983 = p__32982;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32983,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32983,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33000 = arguments.length;
switch (G__33000) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33013 = cljs.core.seq(style_keys);
var chunk__33014 = null;
var count__33015 = (0);
var i__33016 = (0);
while(true){
if((i__33016 < count__33015)){
var it = chunk__33014.cljs$core$IIndexed$_nth$arity$2(null,i__33016);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33712 = seq__33013;
var G__33713 = chunk__33014;
var G__33714 = count__33015;
var G__33715 = (i__33016 + (1));
seq__33013 = G__33712;
chunk__33014 = G__33713;
count__33015 = G__33714;
i__33016 = G__33715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33013);
if(temp__5735__auto__){
var seq__33013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33013__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33013__$1);
var G__33717 = cljs.core.chunk_rest(seq__33013__$1);
var G__33718 = c__4556__auto__;
var G__33719 = cljs.core.count(c__4556__auto__);
var G__33720 = (0);
seq__33013 = G__33717;
chunk__33014 = G__33718;
count__33015 = G__33719;
i__33016 = G__33720;
continue;
} else {
var it = cljs.core.first(seq__33013__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33721 = cljs.core.next(seq__33013__$1);
var G__33722 = null;
var G__33723 = (0);
var G__33724 = (0);
seq__33013 = G__33721;
chunk__33014 = G__33722;
count__33015 = G__33723;
i__33016 = G__33724;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33026,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33034 = k33026;
var G__33034__$1 = (((G__33034 instanceof cljs.core.Keyword))?G__33034.fqn:null);
switch (G__33034__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33026,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33037){
var vec__33038 = p__33037;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33025){
var self__ = this;
var G__33025__$1 = this;
return (new cljs.core.RecordIter((0),G__33025__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33027,other33028){
var self__ = this;
var this33027__$1 = this;
return (((!((other33028 == null)))) && ((this33027__$1.constructor === other33028.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33027__$1.x,other33028.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33027__$1.y,other33028.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33027__$1.__extmap,other33028.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33025){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33052 = cljs.core.keyword_identical_QMARK_;
var expr__33053 = k__4388__auto__;
if(cljs.core.truth_((pred__33052.cljs$core$IFn$_invoke$arity$2 ? pred__33052.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33053) : pred__33052.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33053)))){
return (new shadow.dom.Coordinate(G__33025,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33052.cljs$core$IFn$_invoke$arity$2 ? pred__33052.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33053) : pred__33052.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33053)))){
return (new shadow.dom.Coordinate(self__.x,G__33025,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33025),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33025){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33025,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33029){
var extmap__4419__auto__ = (function (){var G__33061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33029,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33061);
} else {
return G__33061;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33029),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33029),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33074,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33084 = k33074;
var G__33084__$1 = (((G__33084 instanceof cljs.core.Keyword))?G__33084.fqn:null);
switch (G__33084__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33074,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33086){
var vec__33087 = p__33086;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33073){
var self__ = this;
var G__33073__$1 = this;
return (new cljs.core.RecordIter((0),G__33073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33075,other33076){
var self__ = this;
var this33075__$1 = this;
return (((!((other33076 == null)))) && ((this33075__$1.constructor === other33076.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33075__$1.w,other33076.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33075__$1.h,other33076.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33075__$1.__extmap,other33076.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33073){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33137 = cljs.core.keyword_identical_QMARK_;
var expr__33138 = k__4388__auto__;
if(cljs.core.truth_((pred__33137.cljs$core$IFn$_invoke$arity$2 ? pred__33137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33138) : pred__33137.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33138)))){
return (new shadow.dom.Size(G__33073,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33137.cljs$core$IFn$_invoke$arity$2 ? pred__33137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33138) : pred__33137.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33138)))){
return (new shadow.dom.Size(self__.w,G__33073,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33073),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33073){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33073,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33077){
var extmap__4419__auto__ = (function (){var G__33152 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33077,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33077)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33152);
} else {
return G__33152;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33077),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33077),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33811 = (i + (1));
var G__33812 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33811;
ret = G__33812;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33169){
var vec__33170 = p__33169;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33170,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33179 = arguments.length;
switch (G__33179) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33834 = ps;
var G__33835 = (i + (1));
el__$1 = G__33834;
i = G__33835;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33193,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33198_33852 = cljs.core.seq(props);
var chunk__33199_33853 = null;
var count__33200_33854 = (0);
var i__33201_33855 = (0);
while(true){
if((i__33201_33855 < count__33200_33854)){
var vec__33216_33856 = chunk__33199_33853.cljs$core$IIndexed$_nth$arity$2(null,i__33201_33855);
var k_33857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33216_33856,(0),null);
var v_33858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33216_33856,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33857);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33857),v_33858);


var G__33865 = seq__33198_33852;
var G__33866 = chunk__33199_33853;
var G__33867 = count__33200_33854;
var G__33868 = (i__33201_33855 + (1));
seq__33198_33852 = G__33865;
chunk__33199_33853 = G__33866;
count__33200_33854 = G__33867;
i__33201_33855 = G__33868;
continue;
} else {
var temp__5735__auto___33870 = cljs.core.seq(seq__33198_33852);
if(temp__5735__auto___33870){
var seq__33198_33871__$1 = temp__5735__auto___33870;
if(cljs.core.chunked_seq_QMARK_(seq__33198_33871__$1)){
var c__4556__auto___33872 = cljs.core.chunk_first(seq__33198_33871__$1);
var G__33873 = cljs.core.chunk_rest(seq__33198_33871__$1);
var G__33874 = c__4556__auto___33872;
var G__33875 = cljs.core.count(c__4556__auto___33872);
var G__33876 = (0);
seq__33198_33852 = G__33873;
chunk__33199_33853 = G__33874;
count__33200_33854 = G__33875;
i__33201_33855 = G__33876;
continue;
} else {
var vec__33225_33877 = cljs.core.first(seq__33198_33871__$1);
var k_33878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33225_33877,(0),null);
var v_33879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33225_33877,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33878);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33878),v_33879);


var G__33883 = cljs.core.next(seq__33198_33871__$1);
var G__33884 = null;
var G__33885 = (0);
var G__33886 = (0);
seq__33198_33852 = G__33883;
chunk__33199_33853 = G__33884;
count__33200_33854 = G__33885;
i__33201_33855 = G__33886;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33234 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(1),null);
var seq__33239_33895 = cljs.core.seq(node_children);
var chunk__33241_33896 = null;
var count__33242_33897 = (0);
var i__33243_33898 = (0);
while(true){
if((i__33243_33898 < count__33242_33897)){
var child_struct_33900 = chunk__33241_33896.cljs$core$IIndexed$_nth$arity$2(null,i__33243_33898);
if((!((child_struct_33900 == null)))){
if(typeof child_struct_33900 === 'string'){
var text_33901 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33901),child_struct_33900].join(''));
} else {
var children_33902 = shadow.dom.svg_node(child_struct_33900);
if(cljs.core.seq_QMARK_(children_33902)){
var seq__33277_33904 = cljs.core.seq(children_33902);
var chunk__33279_33905 = null;
var count__33280_33906 = (0);
var i__33281_33907 = (0);
while(true){
if((i__33281_33907 < count__33280_33906)){
var child_33908 = chunk__33279_33905.cljs$core$IIndexed$_nth$arity$2(null,i__33281_33907);
if(cljs.core.truth_(child_33908)){
node.appendChild(child_33908);


var G__33913 = seq__33277_33904;
var G__33914 = chunk__33279_33905;
var G__33915 = count__33280_33906;
var G__33916 = (i__33281_33907 + (1));
seq__33277_33904 = G__33913;
chunk__33279_33905 = G__33914;
count__33280_33906 = G__33915;
i__33281_33907 = G__33916;
continue;
} else {
var G__33917 = seq__33277_33904;
var G__33918 = chunk__33279_33905;
var G__33919 = count__33280_33906;
var G__33920 = (i__33281_33907 + (1));
seq__33277_33904 = G__33917;
chunk__33279_33905 = G__33918;
count__33280_33906 = G__33919;
i__33281_33907 = G__33920;
continue;
}
} else {
var temp__5735__auto___33921 = cljs.core.seq(seq__33277_33904);
if(temp__5735__auto___33921){
var seq__33277_33928__$1 = temp__5735__auto___33921;
if(cljs.core.chunked_seq_QMARK_(seq__33277_33928__$1)){
var c__4556__auto___33929 = cljs.core.chunk_first(seq__33277_33928__$1);
var G__33931 = cljs.core.chunk_rest(seq__33277_33928__$1);
var G__33932 = c__4556__auto___33929;
var G__33933 = cljs.core.count(c__4556__auto___33929);
var G__33934 = (0);
seq__33277_33904 = G__33931;
chunk__33279_33905 = G__33932;
count__33280_33906 = G__33933;
i__33281_33907 = G__33934;
continue;
} else {
var child_33935 = cljs.core.first(seq__33277_33928__$1);
if(cljs.core.truth_(child_33935)){
node.appendChild(child_33935);


var G__33936 = cljs.core.next(seq__33277_33928__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33277_33904 = G__33936;
chunk__33279_33905 = G__33937;
count__33280_33906 = G__33938;
i__33281_33907 = G__33939;
continue;
} else {
var G__33941 = cljs.core.next(seq__33277_33928__$1);
var G__33942 = null;
var G__33943 = (0);
var G__33944 = (0);
seq__33277_33904 = G__33941;
chunk__33279_33905 = G__33942;
count__33280_33906 = G__33943;
i__33281_33907 = G__33944;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33902);
}
}


var G__33945 = seq__33239_33895;
var G__33946 = chunk__33241_33896;
var G__33947 = count__33242_33897;
var G__33948 = (i__33243_33898 + (1));
seq__33239_33895 = G__33945;
chunk__33241_33896 = G__33946;
count__33242_33897 = G__33947;
i__33243_33898 = G__33948;
continue;
} else {
var G__33949 = seq__33239_33895;
var G__33950 = chunk__33241_33896;
var G__33951 = count__33242_33897;
var G__33952 = (i__33243_33898 + (1));
seq__33239_33895 = G__33949;
chunk__33241_33896 = G__33950;
count__33242_33897 = G__33951;
i__33243_33898 = G__33952;
continue;
}
} else {
var temp__5735__auto___33954 = cljs.core.seq(seq__33239_33895);
if(temp__5735__auto___33954){
var seq__33239_33955__$1 = temp__5735__auto___33954;
if(cljs.core.chunked_seq_QMARK_(seq__33239_33955__$1)){
var c__4556__auto___33957 = cljs.core.chunk_first(seq__33239_33955__$1);
var G__33958 = cljs.core.chunk_rest(seq__33239_33955__$1);
var G__33959 = c__4556__auto___33957;
var G__33960 = cljs.core.count(c__4556__auto___33957);
var G__33961 = (0);
seq__33239_33895 = G__33958;
chunk__33241_33896 = G__33959;
count__33242_33897 = G__33960;
i__33243_33898 = G__33961;
continue;
} else {
var child_struct_33966 = cljs.core.first(seq__33239_33955__$1);
if((!((child_struct_33966 == null)))){
if(typeof child_struct_33966 === 'string'){
var text_33967 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33967),child_struct_33966].join(''));
} else {
var children_33968 = shadow.dom.svg_node(child_struct_33966);
if(cljs.core.seq_QMARK_(children_33968)){
var seq__33295_33970 = cljs.core.seq(children_33968);
var chunk__33297_33971 = null;
var count__33298_33972 = (0);
var i__33299_33973 = (0);
while(true){
if((i__33299_33973 < count__33298_33972)){
var child_33974 = chunk__33297_33971.cljs$core$IIndexed$_nth$arity$2(null,i__33299_33973);
if(cljs.core.truth_(child_33974)){
node.appendChild(child_33974);


var G__33976 = seq__33295_33970;
var G__33977 = chunk__33297_33971;
var G__33978 = count__33298_33972;
var G__33979 = (i__33299_33973 + (1));
seq__33295_33970 = G__33976;
chunk__33297_33971 = G__33977;
count__33298_33972 = G__33978;
i__33299_33973 = G__33979;
continue;
} else {
var G__33983 = seq__33295_33970;
var G__33984 = chunk__33297_33971;
var G__33985 = count__33298_33972;
var G__33986 = (i__33299_33973 + (1));
seq__33295_33970 = G__33983;
chunk__33297_33971 = G__33984;
count__33298_33972 = G__33985;
i__33299_33973 = G__33986;
continue;
}
} else {
var temp__5735__auto___33988__$1 = cljs.core.seq(seq__33295_33970);
if(temp__5735__auto___33988__$1){
var seq__33295_33991__$1 = temp__5735__auto___33988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33295_33991__$1)){
var c__4556__auto___33992 = cljs.core.chunk_first(seq__33295_33991__$1);
var G__33993 = cljs.core.chunk_rest(seq__33295_33991__$1);
var G__33994 = c__4556__auto___33992;
var G__33995 = cljs.core.count(c__4556__auto___33992);
var G__33996 = (0);
seq__33295_33970 = G__33993;
chunk__33297_33971 = G__33994;
count__33298_33972 = G__33995;
i__33299_33973 = G__33996;
continue;
} else {
var child_33998 = cljs.core.first(seq__33295_33991__$1);
if(cljs.core.truth_(child_33998)){
node.appendChild(child_33998);


var G__34007 = cljs.core.next(seq__33295_33991__$1);
var G__34008 = null;
var G__34009 = (0);
var G__34010 = (0);
seq__33295_33970 = G__34007;
chunk__33297_33971 = G__34008;
count__33298_33972 = G__34009;
i__33299_33973 = G__34010;
continue;
} else {
var G__34013 = cljs.core.next(seq__33295_33991__$1);
var G__34014 = null;
var G__34015 = (0);
var G__34016 = (0);
seq__33295_33970 = G__34013;
chunk__33297_33971 = G__34014;
count__33298_33972 = G__34015;
i__33299_33973 = G__34016;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33968);
}
}


var G__34019 = cljs.core.next(seq__33239_33955__$1);
var G__34021 = null;
var G__34022 = (0);
var G__34023 = (0);
seq__33239_33895 = G__34019;
chunk__33241_33896 = G__34021;
count__33242_33897 = G__34022;
i__33243_33898 = G__34023;
continue;
} else {
var G__34026 = cljs.core.next(seq__33239_33955__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33239_33895 = G__34026;
chunk__33241_33896 = G__34027;
count__33242_33897 = G__34028;
i__33243_33898 = G__34029;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34054 = arguments.length;
var i__4737__auto___34055 = (0);
while(true){
if((i__4737__auto___34055 < len__4736__auto___34054)){
args__4742__auto__.push((arguments[i__4737__auto___34055]));

var G__34056 = (i__4737__auto___34055 + (1));
i__4737__auto___34055 = G__34056;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33313){
var G__33314 = cljs.core.first(seq33313);
var seq33313__$1 = cljs.core.next(seq33313);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33314,seq33313__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33322 = arguments.length;
switch (G__33322) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29715__auto___34078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_33336){
var state_val_33337 = (state_33336[(1)]);
if((state_val_33337 === (1))){
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33336__$1,(2),once_or_cleanup);
} else {
if((state_val_33337 === (2))){
var inst_33333 = (state_33336[(2)]);
var inst_33334 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33336__$1 = (function (){var statearr_33344 = state_33336;
(statearr_33344[(7)] = inst_33333);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33336__$1,inst_33334);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29609__auto__ = null;
var shadow$dom$state_machine__29609__auto____0 = (function (){
var statearr_33346 = [null,null,null,null,null,null,null,null];
(statearr_33346[(0)] = shadow$dom$state_machine__29609__auto__);

(statearr_33346[(1)] = (1));

return statearr_33346;
});
var shadow$dom$state_machine__29609__auto____1 = (function (state_33336){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_33336);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e33347){var ex__29612__auto__ = e33347;
var statearr_33348_34090 = state_33336;
(statearr_33348_34090[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_33336[(4)]))){
var statearr_33349_34091 = state_33336;
(statearr_33349_34091[(1)] = cljs.core.first((state_33336[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34092 = state_33336;
state_33336 = G__34092;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
shadow$dom$state_machine__29609__auto__ = function(state_33336){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29609__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29609__auto____1.call(this,state_33336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29609__auto____0;
shadow$dom$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29609__auto____1;
return shadow$dom$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_33354 = f__29716__auto__();
(statearr_33354[(6)] = c__29715__auto___34078);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
