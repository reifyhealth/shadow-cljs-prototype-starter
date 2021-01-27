goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33480 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33480(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33482 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33482(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32659 = coll;
var G__32660 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32659,G__32660) : shadow.dom.lazy_native_coll_seq.call(null,G__32659,G__32660));
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
var G__32674 = arguments.length;
switch (G__32674) {
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
var G__32683 = arguments.length;
switch (G__32683) {
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
var G__32688 = arguments.length;
switch (G__32688) {
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
var G__32690 = arguments.length;
switch (G__32690) {
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
var G__32693 = arguments.length;
switch (G__32693) {
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
var G__32699 = arguments.length;
switch (G__32699) {
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
}catch (e32712){if((e32712 instanceof Object)){
var e = e32712;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32712;

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
var seq__32724 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32725 = null;
var count__32726 = (0);
var i__32727 = (0);
while(true){
if((i__32727 < count__32726)){
var el = chunk__32725.cljs$core$IIndexed$_nth$arity$2(null,i__32727);
var handler_33511__$1 = ((function (seq__32724,chunk__32725,count__32726,i__32727,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32724,chunk__32725,count__32726,i__32727,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33511__$1);


var G__33514 = seq__32724;
var G__33515 = chunk__32725;
var G__33516 = count__32726;
var G__33517 = (i__32727 + (1));
seq__32724 = G__33514;
chunk__32725 = G__33515;
count__32726 = G__33516;
i__32727 = G__33517;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32724);
if(temp__5735__auto__){
var seq__32724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32724__$1);
var G__33519 = cljs.core.chunk_rest(seq__32724__$1);
var G__33520 = c__4556__auto__;
var G__33521 = cljs.core.count(c__4556__auto__);
var G__33522 = (0);
seq__32724 = G__33519;
chunk__32725 = G__33520;
count__32726 = G__33521;
i__32727 = G__33522;
continue;
} else {
var el = cljs.core.first(seq__32724__$1);
var handler_33524__$1 = ((function (seq__32724,chunk__32725,count__32726,i__32727,el,seq__32724__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32724,chunk__32725,count__32726,i__32727,el,seq__32724__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33524__$1);


var G__33525 = cljs.core.next(seq__32724__$1);
var G__33526 = null;
var G__33527 = (0);
var G__33528 = (0);
seq__32724 = G__33525;
chunk__32725 = G__33526;
count__32726 = G__33527;
i__32727 = G__33528;
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
var G__32733 = arguments.length;
switch (G__32733) {
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
var seq__32745 = cljs.core.seq(events);
var chunk__32746 = null;
var count__32747 = (0);
var i__32748 = (0);
while(true){
if((i__32748 < count__32747)){
var vec__32764 = chunk__32746.cljs$core$IIndexed$_nth$arity$2(null,i__32748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33536 = seq__32745;
var G__33537 = chunk__32746;
var G__33538 = count__32747;
var G__33539 = (i__32748 + (1));
seq__32745 = G__33536;
chunk__32746 = G__33537;
count__32747 = G__33538;
i__32748 = G__33539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32745);
if(temp__5735__auto__){
var seq__32745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32745__$1);
var G__33540 = cljs.core.chunk_rest(seq__32745__$1);
var G__33541 = c__4556__auto__;
var G__33542 = cljs.core.count(c__4556__auto__);
var G__33543 = (0);
seq__32745 = G__33540;
chunk__32746 = G__33541;
count__32747 = G__33542;
i__32748 = G__33543;
continue;
} else {
var vec__32768 = cljs.core.first(seq__32745__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33545 = cljs.core.next(seq__32745__$1);
var G__33546 = null;
var G__33547 = (0);
var G__33548 = (0);
seq__32745 = G__33545;
chunk__32746 = G__33546;
count__32747 = G__33547;
i__32748 = G__33548;
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
var seq__32774 = cljs.core.seq(styles);
var chunk__32775 = null;
var count__32776 = (0);
var i__32777 = (0);
while(true){
if((i__32777 < count__32776)){
var vec__32791 = chunk__32775.cljs$core$IIndexed$_nth$arity$2(null,i__32777);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33553 = seq__32774;
var G__33554 = chunk__32775;
var G__33555 = count__32776;
var G__33556 = (i__32777 + (1));
seq__32774 = G__33553;
chunk__32775 = G__33554;
count__32776 = G__33555;
i__32777 = G__33556;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32774);
if(temp__5735__auto__){
var seq__32774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32774__$1);
var G__33558 = cljs.core.chunk_rest(seq__32774__$1);
var G__33559 = c__4556__auto__;
var G__33560 = cljs.core.count(c__4556__auto__);
var G__33561 = (0);
seq__32774 = G__33558;
chunk__32775 = G__33559;
count__32776 = G__33560;
i__32777 = G__33561;
continue;
} else {
var vec__32797 = cljs.core.first(seq__32774__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33563 = cljs.core.next(seq__32774__$1);
var G__33564 = null;
var G__33565 = (0);
var G__33566 = (0);
seq__32774 = G__33563;
chunk__32775 = G__33564;
count__32776 = G__33565;
i__32777 = G__33566;
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
var G__32805_33567 = key;
var G__32805_33568__$1 = (((G__32805_33567 instanceof cljs.core.Keyword))?G__32805_33567.fqn:null);
switch (G__32805_33568__$1) {
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
var ks_33584 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33584,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33584,"aria-");
}
})())){
el.setAttribute(ks_33584,value);
} else {
(el[ks_33584] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32823){
var map__32824 = p__32823;
var map__32824__$1 = (((((!((map__32824 == null))))?(((((map__32824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32824):map__32824);
var props = map__32824__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32824__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32828 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32832 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32832,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32832;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32835 = arguments.length;
switch (G__32835) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32837){
var vec__32839 = p__32837;
var seq__32840 = cljs.core.seq(vec__32839);
var first__32841 = cljs.core.first(seq__32840);
var seq__32840__$1 = cljs.core.next(seq__32840);
var nn = first__32841;
var first__32841__$1 = cljs.core.first(seq__32840__$1);
var seq__32840__$2 = cljs.core.next(seq__32840__$1);
var np = first__32841__$1;
var nc = seq__32840__$2;
var node = vec__32839;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32844 = nn;
var G__32845 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32844,G__32845) : create_fn.call(null,G__32844,G__32845));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32847 = nn;
var G__32848 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32847,G__32848) : create_fn.call(null,G__32847,G__32848));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32852 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32852,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32852,(1),null);
var seq__32856_33622 = cljs.core.seq(node_children);
var chunk__32857_33623 = null;
var count__32858_33624 = (0);
var i__32859_33625 = (0);
while(true){
if((i__32859_33625 < count__32858_33624)){
var child_struct_33629 = chunk__32857_33623.cljs$core$IIndexed$_nth$arity$2(null,i__32859_33625);
var children_33630 = shadow.dom.dom_node(child_struct_33629);
if(cljs.core.seq_QMARK_(children_33630)){
var seq__32897_33631 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33630));
var chunk__32899_33632 = null;
var count__32900_33633 = (0);
var i__32901_33634 = (0);
while(true){
if((i__32901_33634 < count__32900_33633)){
var child_33635 = chunk__32899_33632.cljs$core$IIndexed$_nth$arity$2(null,i__32901_33634);
if(cljs.core.truth_(child_33635)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33635);


var G__33637 = seq__32897_33631;
var G__33638 = chunk__32899_33632;
var G__33639 = count__32900_33633;
var G__33640 = (i__32901_33634 + (1));
seq__32897_33631 = G__33637;
chunk__32899_33632 = G__33638;
count__32900_33633 = G__33639;
i__32901_33634 = G__33640;
continue;
} else {
var G__33641 = seq__32897_33631;
var G__33642 = chunk__32899_33632;
var G__33643 = count__32900_33633;
var G__33644 = (i__32901_33634 + (1));
seq__32897_33631 = G__33641;
chunk__32899_33632 = G__33642;
count__32900_33633 = G__33643;
i__32901_33634 = G__33644;
continue;
}
} else {
var temp__5735__auto___33648 = cljs.core.seq(seq__32897_33631);
if(temp__5735__auto___33648){
var seq__32897_33651__$1 = temp__5735__auto___33648;
if(cljs.core.chunked_seq_QMARK_(seq__32897_33651__$1)){
var c__4556__auto___33652 = cljs.core.chunk_first(seq__32897_33651__$1);
var G__33653 = cljs.core.chunk_rest(seq__32897_33651__$1);
var G__33654 = c__4556__auto___33652;
var G__33655 = cljs.core.count(c__4556__auto___33652);
var G__33656 = (0);
seq__32897_33631 = G__33653;
chunk__32899_33632 = G__33654;
count__32900_33633 = G__33655;
i__32901_33634 = G__33656;
continue;
} else {
var child_33657 = cljs.core.first(seq__32897_33651__$1);
if(cljs.core.truth_(child_33657)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33657);


var G__33658 = cljs.core.next(seq__32897_33651__$1);
var G__33659 = null;
var G__33660 = (0);
var G__33661 = (0);
seq__32897_33631 = G__33658;
chunk__32899_33632 = G__33659;
count__32900_33633 = G__33660;
i__32901_33634 = G__33661;
continue;
} else {
var G__33662 = cljs.core.next(seq__32897_33651__$1);
var G__33663 = null;
var G__33664 = (0);
var G__33665 = (0);
seq__32897_33631 = G__33662;
chunk__32899_33632 = G__33663;
count__32900_33633 = G__33664;
i__32901_33634 = G__33665;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33630);
}


var G__33669 = seq__32856_33622;
var G__33670 = chunk__32857_33623;
var G__33671 = count__32858_33624;
var G__33672 = (i__32859_33625 + (1));
seq__32856_33622 = G__33669;
chunk__32857_33623 = G__33670;
count__32858_33624 = G__33671;
i__32859_33625 = G__33672;
continue;
} else {
var temp__5735__auto___33674 = cljs.core.seq(seq__32856_33622);
if(temp__5735__auto___33674){
var seq__32856_33677__$1 = temp__5735__auto___33674;
if(cljs.core.chunked_seq_QMARK_(seq__32856_33677__$1)){
var c__4556__auto___33678 = cljs.core.chunk_first(seq__32856_33677__$1);
var G__33679 = cljs.core.chunk_rest(seq__32856_33677__$1);
var G__33680 = c__4556__auto___33678;
var G__33681 = cljs.core.count(c__4556__auto___33678);
var G__33682 = (0);
seq__32856_33622 = G__33679;
chunk__32857_33623 = G__33680;
count__32858_33624 = G__33681;
i__32859_33625 = G__33682;
continue;
} else {
var child_struct_33684 = cljs.core.first(seq__32856_33677__$1);
var children_33685 = shadow.dom.dom_node(child_struct_33684);
if(cljs.core.seq_QMARK_(children_33685)){
var seq__32912_33690 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33685));
var chunk__32914_33691 = null;
var count__32915_33692 = (0);
var i__32916_33693 = (0);
while(true){
if((i__32916_33693 < count__32915_33692)){
var child_33695 = chunk__32914_33691.cljs$core$IIndexed$_nth$arity$2(null,i__32916_33693);
if(cljs.core.truth_(child_33695)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33695);


var G__33698 = seq__32912_33690;
var G__33699 = chunk__32914_33691;
var G__33700 = count__32915_33692;
var G__33701 = (i__32916_33693 + (1));
seq__32912_33690 = G__33698;
chunk__32914_33691 = G__33699;
count__32915_33692 = G__33700;
i__32916_33693 = G__33701;
continue;
} else {
var G__33702 = seq__32912_33690;
var G__33703 = chunk__32914_33691;
var G__33704 = count__32915_33692;
var G__33705 = (i__32916_33693 + (1));
seq__32912_33690 = G__33702;
chunk__32914_33691 = G__33703;
count__32915_33692 = G__33704;
i__32916_33693 = G__33705;
continue;
}
} else {
var temp__5735__auto___33710__$1 = cljs.core.seq(seq__32912_33690);
if(temp__5735__auto___33710__$1){
var seq__32912_33712__$1 = temp__5735__auto___33710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32912_33712__$1)){
var c__4556__auto___33713 = cljs.core.chunk_first(seq__32912_33712__$1);
var G__33714 = cljs.core.chunk_rest(seq__32912_33712__$1);
var G__33715 = c__4556__auto___33713;
var G__33716 = cljs.core.count(c__4556__auto___33713);
var G__33717 = (0);
seq__32912_33690 = G__33714;
chunk__32914_33691 = G__33715;
count__32915_33692 = G__33716;
i__32916_33693 = G__33717;
continue;
} else {
var child_33718 = cljs.core.first(seq__32912_33712__$1);
if(cljs.core.truth_(child_33718)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33718);


var G__33719 = cljs.core.next(seq__32912_33712__$1);
var G__33720 = null;
var G__33721 = (0);
var G__33722 = (0);
seq__32912_33690 = G__33719;
chunk__32914_33691 = G__33720;
count__32915_33692 = G__33721;
i__32916_33693 = G__33722;
continue;
} else {
var G__33724 = cljs.core.next(seq__32912_33712__$1);
var G__33725 = null;
var G__33726 = (0);
var G__33727 = (0);
seq__32912_33690 = G__33724;
chunk__32914_33691 = G__33725;
count__32915_33692 = G__33726;
i__32916_33693 = G__33727;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33685);
}


var G__33729 = cljs.core.next(seq__32856_33677__$1);
var G__33730 = null;
var G__33731 = (0);
var G__33732 = (0);
seq__32856_33622 = G__33729;
chunk__32857_33623 = G__33730;
count__32858_33624 = G__33731;
i__32859_33625 = G__33732;
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
var seq__32963 = cljs.core.seq(node);
var chunk__32964 = null;
var count__32965 = (0);
var i__32966 = (0);
while(true){
if((i__32966 < count__32965)){
var n = chunk__32964.cljs$core$IIndexed$_nth$arity$2(null,i__32966);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33745 = seq__32963;
var G__33746 = chunk__32964;
var G__33747 = count__32965;
var G__33748 = (i__32966 + (1));
seq__32963 = G__33745;
chunk__32964 = G__33746;
count__32965 = G__33747;
i__32966 = G__33748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32963);
if(temp__5735__auto__){
var seq__32963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32963__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32963__$1);
var G__33753 = cljs.core.chunk_rest(seq__32963__$1);
var G__33754 = c__4556__auto__;
var G__33755 = cljs.core.count(c__4556__auto__);
var G__33756 = (0);
seq__32963 = G__33753;
chunk__32964 = G__33754;
count__32965 = G__33755;
i__32966 = G__33756;
continue;
} else {
var n = cljs.core.first(seq__32963__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33761 = cljs.core.next(seq__32963__$1);
var G__33762 = null;
var G__33763 = (0);
var G__33764 = (0);
seq__32963 = G__33761;
chunk__32964 = G__33762;
count__32965 = G__33763;
i__32966 = G__33764;
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
var G__32979 = arguments.length;
switch (G__32979) {
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
var G__32986 = arguments.length;
switch (G__32986) {
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
var G__32994 = arguments.length;
switch (G__32994) {
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
var len__4736__auto___33787 = arguments.length;
var i__4737__auto___33788 = (0);
while(true){
if((i__4737__auto___33788 < len__4736__auto___33787)){
args__4742__auto__.push((arguments[i__4737__auto___33788]));

var G__33789 = (i__4737__auto___33788 + (1));
i__4737__auto___33788 = G__33789;
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
var seq__33004_33790 = cljs.core.seq(nodes);
var chunk__33005_33791 = null;
var count__33006_33792 = (0);
var i__33007_33793 = (0);
while(true){
if((i__33007_33793 < count__33006_33792)){
var node_33794 = chunk__33005_33791.cljs$core$IIndexed$_nth$arity$2(null,i__33007_33793);
fragment.appendChild(shadow.dom._to_dom(node_33794));


var G__33795 = seq__33004_33790;
var G__33796 = chunk__33005_33791;
var G__33797 = count__33006_33792;
var G__33798 = (i__33007_33793 + (1));
seq__33004_33790 = G__33795;
chunk__33005_33791 = G__33796;
count__33006_33792 = G__33797;
i__33007_33793 = G__33798;
continue;
} else {
var temp__5735__auto___33800 = cljs.core.seq(seq__33004_33790);
if(temp__5735__auto___33800){
var seq__33004_33801__$1 = temp__5735__auto___33800;
if(cljs.core.chunked_seq_QMARK_(seq__33004_33801__$1)){
var c__4556__auto___33803 = cljs.core.chunk_first(seq__33004_33801__$1);
var G__33804 = cljs.core.chunk_rest(seq__33004_33801__$1);
var G__33805 = c__4556__auto___33803;
var G__33806 = cljs.core.count(c__4556__auto___33803);
var G__33807 = (0);
seq__33004_33790 = G__33804;
chunk__33005_33791 = G__33805;
count__33006_33792 = G__33806;
i__33007_33793 = G__33807;
continue;
} else {
var node_33810 = cljs.core.first(seq__33004_33801__$1);
fragment.appendChild(shadow.dom._to_dom(node_33810));


var G__33813 = cljs.core.next(seq__33004_33801__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33004_33790 = G__33813;
chunk__33005_33791 = G__33814;
count__33006_33792 = G__33815;
i__33007_33793 = G__33816;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33000){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33000));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33028_33817 = cljs.core.seq(scripts);
var chunk__33029_33818 = null;
var count__33030_33819 = (0);
var i__33031_33820 = (0);
while(true){
if((i__33031_33820 < count__33030_33819)){
var vec__33051_33821 = chunk__33029_33818.cljs$core$IIndexed$_nth$arity$2(null,i__33031_33820);
var script_tag_33822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051_33821,(0),null);
var script_body_33823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051_33821,(1),null);
eval(script_body_33823);


var G__33824 = seq__33028_33817;
var G__33825 = chunk__33029_33818;
var G__33826 = count__33030_33819;
var G__33827 = (i__33031_33820 + (1));
seq__33028_33817 = G__33824;
chunk__33029_33818 = G__33825;
count__33030_33819 = G__33826;
i__33031_33820 = G__33827;
continue;
} else {
var temp__5735__auto___33828 = cljs.core.seq(seq__33028_33817);
if(temp__5735__auto___33828){
var seq__33028_33833__$1 = temp__5735__auto___33828;
if(cljs.core.chunked_seq_QMARK_(seq__33028_33833__$1)){
var c__4556__auto___33834 = cljs.core.chunk_first(seq__33028_33833__$1);
var G__33835 = cljs.core.chunk_rest(seq__33028_33833__$1);
var G__33836 = c__4556__auto___33834;
var G__33837 = cljs.core.count(c__4556__auto___33834);
var G__33838 = (0);
seq__33028_33817 = G__33835;
chunk__33029_33818 = G__33836;
count__33030_33819 = G__33837;
i__33031_33820 = G__33838;
continue;
} else {
var vec__33075_33839 = cljs.core.first(seq__33028_33833__$1);
var script_tag_33840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075_33839,(0),null);
var script_body_33841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075_33839,(1),null);
eval(script_body_33841);


var G__33843 = cljs.core.next(seq__33028_33833__$1);
var G__33844 = null;
var G__33845 = (0);
var G__33846 = (0);
seq__33028_33817 = G__33843;
chunk__33029_33818 = G__33844;
count__33030_33819 = G__33845;
i__33031_33820 = G__33846;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33079){
var vec__33080 = p__33079;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080,(1),null);
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
var G__33092 = arguments.length;
switch (G__33092) {
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
var seq__33098 = cljs.core.seq(style_keys);
var chunk__33099 = null;
var count__33100 = (0);
var i__33101 = (0);
while(true){
if((i__33101 < count__33100)){
var it = chunk__33099.cljs$core$IIndexed$_nth$arity$2(null,i__33101);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33875 = seq__33098;
var G__33876 = chunk__33099;
var G__33877 = count__33100;
var G__33878 = (i__33101 + (1));
seq__33098 = G__33875;
chunk__33099 = G__33876;
count__33100 = G__33877;
i__33101 = G__33878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33098);
if(temp__5735__auto__){
var seq__33098__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33098__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33098__$1);
var G__33880 = cljs.core.chunk_rest(seq__33098__$1);
var G__33881 = c__4556__auto__;
var G__33882 = cljs.core.count(c__4556__auto__);
var G__33883 = (0);
seq__33098 = G__33880;
chunk__33099 = G__33881;
count__33100 = G__33882;
i__33101 = G__33883;
continue;
} else {
var it = cljs.core.first(seq__33098__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33884 = cljs.core.next(seq__33098__$1);
var G__33885 = null;
var G__33886 = (0);
var G__33887 = (0);
seq__33098 = G__33884;
chunk__33099 = G__33885;
count__33100 = G__33886;
i__33101 = G__33887;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33107,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33116 = k33107;
var G__33116__$1 = (((G__33116 instanceof cljs.core.Keyword))?G__33116.fqn:null);
switch (G__33116__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33107,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33131){
var vec__33132 = p__33131;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33106){
var self__ = this;
var G__33106__$1 = this;
return (new cljs.core.RecordIter((0),G__33106__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33108,other33109){
var self__ = this;
var this33108__$1 = this;
return (((!((other33109 == null)))) && ((this33108__$1.constructor === other33109.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33108__$1.x,other33109.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33108__$1.y,other33109.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33108__$1.__extmap,other33109.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33106){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33163 = cljs.core.keyword_identical_QMARK_;
var expr__33164 = k__4388__auto__;
if(cljs.core.truth_((pred__33163.cljs$core$IFn$_invoke$arity$2 ? pred__33163.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33164) : pred__33163.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33164)))){
return (new shadow.dom.Coordinate(G__33106,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33163.cljs$core$IFn$_invoke$arity$2 ? pred__33163.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33164) : pred__33163.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33164)))){
return (new shadow.dom.Coordinate(self__.x,G__33106,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33106),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33106){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33106,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33112){
var extmap__4419__auto__ = (function (){var G__33183 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33112,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33112)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33183);
} else {
return G__33183;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33112),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33112),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33201,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33221 = k33201;
var G__33221__$1 = (((G__33221 instanceof cljs.core.Keyword))?G__33221.fqn:null);
switch (G__33221__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33201,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33229){
var vec__33230 = p__33229;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33230,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33230,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33200){
var self__ = this;
var G__33200__$1 = this;
return (new cljs.core.RecordIter((0),G__33200__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33202,other33203){
var self__ = this;
var this33202__$1 = this;
return (((!((other33203 == null)))) && ((this33202__$1.constructor === other33203.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33202__$1.w,other33203.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33202__$1.h,other33203.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33202__$1.__extmap,other33203.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33200){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33250 = cljs.core.keyword_identical_QMARK_;
var expr__33251 = k__4388__auto__;
if(cljs.core.truth_((pred__33250.cljs$core$IFn$_invoke$arity$2 ? pred__33250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33251) : pred__33250.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33251)))){
return (new shadow.dom.Size(G__33200,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33250.cljs$core$IFn$_invoke$arity$2 ? pred__33250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33251) : pred__33250.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33251)))){
return (new shadow.dom.Size(self__.w,G__33200,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33200),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33200){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33200,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33205){
var extmap__4419__auto__ = (function (){var G__33258 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33205,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33205)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33258);
} else {
return G__33258;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33205),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33205),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__33985 = (i + (1));
var G__33986 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33985;
ret = G__33986;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33278){
var vec__33279 = p__33278;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33279,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33279,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33288 = arguments.length;
switch (G__33288) {
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
var G__34006 = ps;
var G__34007 = (i + (1));
el__$1 = G__34006;
i = G__34007;
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
var vec__33315 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33315,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33315,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33315,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33322_34023 = cljs.core.seq(props);
var chunk__33323_34024 = null;
var count__33324_34025 = (0);
var i__33325_34026 = (0);
while(true){
if((i__33325_34026 < count__33324_34025)){
var vec__33337_34027 = chunk__33323_34024.cljs$core$IIndexed$_nth$arity$2(null,i__33325_34026);
var k_34028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_34027,(0),null);
var v_34029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_34027,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34028);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34028),v_34029);


var G__34032 = seq__33322_34023;
var G__34033 = chunk__33323_34024;
var G__34034 = count__33324_34025;
var G__34035 = (i__33325_34026 + (1));
seq__33322_34023 = G__34032;
chunk__33323_34024 = G__34033;
count__33324_34025 = G__34034;
i__33325_34026 = G__34035;
continue;
} else {
var temp__5735__auto___34036 = cljs.core.seq(seq__33322_34023);
if(temp__5735__auto___34036){
var seq__33322_34041__$1 = temp__5735__auto___34036;
if(cljs.core.chunked_seq_QMARK_(seq__33322_34041__$1)){
var c__4556__auto___34042 = cljs.core.chunk_first(seq__33322_34041__$1);
var G__34043 = cljs.core.chunk_rest(seq__33322_34041__$1);
var G__34044 = c__4556__auto___34042;
var G__34045 = cljs.core.count(c__4556__auto___34042);
var G__34046 = (0);
seq__33322_34023 = G__34043;
chunk__33323_34024 = G__34044;
count__33324_34025 = G__34045;
i__33325_34026 = G__34046;
continue;
} else {
var vec__33343_34048 = cljs.core.first(seq__33322_34041__$1);
var k_34049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33343_34048,(0),null);
var v_34050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33343_34048,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34049);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34049),v_34050);


var G__34053 = cljs.core.next(seq__33322_34041__$1);
var G__34054 = null;
var G__34055 = (0);
var G__34056 = (0);
seq__33322_34023 = G__34053;
chunk__33323_34024 = G__34054;
count__33324_34025 = G__34055;
i__33325_34026 = G__34056;
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
var vec__33354 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
var seq__33359_34064 = cljs.core.seq(node_children);
var chunk__33361_34065 = null;
var count__33362_34066 = (0);
var i__33363_34067 = (0);
while(true){
if((i__33363_34067 < count__33362_34066)){
var child_struct_34070 = chunk__33361_34065.cljs$core$IIndexed$_nth$arity$2(null,i__33363_34067);
if((!((child_struct_34070 == null)))){
if(typeof child_struct_34070 === 'string'){
var text_34071 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34071),child_struct_34070].join(''));
} else {
var children_34073 = shadow.dom.svg_node(child_struct_34070);
if(cljs.core.seq_QMARK_(children_34073)){
var seq__33416_34074 = cljs.core.seq(children_34073);
var chunk__33418_34075 = null;
var count__33419_34076 = (0);
var i__33420_34077 = (0);
while(true){
if((i__33420_34077 < count__33419_34076)){
var child_34079 = chunk__33418_34075.cljs$core$IIndexed$_nth$arity$2(null,i__33420_34077);
if(cljs.core.truth_(child_34079)){
node.appendChild(child_34079);


var G__34081 = seq__33416_34074;
var G__34082 = chunk__33418_34075;
var G__34083 = count__33419_34076;
var G__34084 = (i__33420_34077 + (1));
seq__33416_34074 = G__34081;
chunk__33418_34075 = G__34082;
count__33419_34076 = G__34083;
i__33420_34077 = G__34084;
continue;
} else {
var G__34086 = seq__33416_34074;
var G__34087 = chunk__33418_34075;
var G__34088 = count__33419_34076;
var G__34089 = (i__33420_34077 + (1));
seq__33416_34074 = G__34086;
chunk__33418_34075 = G__34087;
count__33419_34076 = G__34088;
i__33420_34077 = G__34089;
continue;
}
} else {
var temp__5735__auto___34114 = cljs.core.seq(seq__33416_34074);
if(temp__5735__auto___34114){
var seq__33416_34115__$1 = temp__5735__auto___34114;
if(cljs.core.chunked_seq_QMARK_(seq__33416_34115__$1)){
var c__4556__auto___34117 = cljs.core.chunk_first(seq__33416_34115__$1);
var G__34118 = cljs.core.chunk_rest(seq__33416_34115__$1);
var G__34119 = c__4556__auto___34117;
var G__34120 = cljs.core.count(c__4556__auto___34117);
var G__34121 = (0);
seq__33416_34074 = G__34118;
chunk__33418_34075 = G__34119;
count__33419_34076 = G__34120;
i__33420_34077 = G__34121;
continue;
} else {
var child_34125 = cljs.core.first(seq__33416_34115__$1);
if(cljs.core.truth_(child_34125)){
node.appendChild(child_34125);


var G__34126 = cljs.core.next(seq__33416_34115__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__33416_34074 = G__34126;
chunk__33418_34075 = G__34127;
count__33419_34076 = G__34128;
i__33420_34077 = G__34129;
continue;
} else {
var G__34130 = cljs.core.next(seq__33416_34115__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__33416_34074 = G__34130;
chunk__33418_34075 = G__34131;
count__33419_34076 = G__34132;
i__33420_34077 = G__34133;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34073);
}
}


var G__34134 = seq__33359_34064;
var G__34135 = chunk__33361_34065;
var G__34136 = count__33362_34066;
var G__34137 = (i__33363_34067 + (1));
seq__33359_34064 = G__34134;
chunk__33361_34065 = G__34135;
count__33362_34066 = G__34136;
i__33363_34067 = G__34137;
continue;
} else {
var G__34138 = seq__33359_34064;
var G__34139 = chunk__33361_34065;
var G__34140 = count__33362_34066;
var G__34141 = (i__33363_34067 + (1));
seq__33359_34064 = G__34138;
chunk__33361_34065 = G__34139;
count__33362_34066 = G__34140;
i__33363_34067 = G__34141;
continue;
}
} else {
var temp__5735__auto___34145 = cljs.core.seq(seq__33359_34064);
if(temp__5735__auto___34145){
var seq__33359_34149__$1 = temp__5735__auto___34145;
if(cljs.core.chunked_seq_QMARK_(seq__33359_34149__$1)){
var c__4556__auto___34150 = cljs.core.chunk_first(seq__33359_34149__$1);
var G__34151 = cljs.core.chunk_rest(seq__33359_34149__$1);
var G__34152 = c__4556__auto___34150;
var G__34153 = cljs.core.count(c__4556__auto___34150);
var G__34154 = (0);
seq__33359_34064 = G__34151;
chunk__33361_34065 = G__34152;
count__33362_34066 = G__34153;
i__33363_34067 = G__34154;
continue;
} else {
var child_struct_34155 = cljs.core.first(seq__33359_34149__$1);
if((!((child_struct_34155 == null)))){
if(typeof child_struct_34155 === 'string'){
var text_34160 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34160),child_struct_34155].join(''));
} else {
var children_34161 = shadow.dom.svg_node(child_struct_34155);
if(cljs.core.seq_QMARK_(children_34161)){
var seq__33428_34162 = cljs.core.seq(children_34161);
var chunk__33430_34163 = null;
var count__33431_34164 = (0);
var i__33432_34165 = (0);
while(true){
if((i__33432_34165 < count__33431_34164)){
var child_34166 = chunk__33430_34163.cljs$core$IIndexed$_nth$arity$2(null,i__33432_34165);
if(cljs.core.truth_(child_34166)){
node.appendChild(child_34166);


var G__34169 = seq__33428_34162;
var G__34170 = chunk__33430_34163;
var G__34171 = count__33431_34164;
var G__34172 = (i__33432_34165 + (1));
seq__33428_34162 = G__34169;
chunk__33430_34163 = G__34170;
count__33431_34164 = G__34171;
i__33432_34165 = G__34172;
continue;
} else {
var G__34175 = seq__33428_34162;
var G__34176 = chunk__33430_34163;
var G__34177 = count__33431_34164;
var G__34178 = (i__33432_34165 + (1));
seq__33428_34162 = G__34175;
chunk__33430_34163 = G__34176;
count__33431_34164 = G__34177;
i__33432_34165 = G__34178;
continue;
}
} else {
var temp__5735__auto___34182__$1 = cljs.core.seq(seq__33428_34162);
if(temp__5735__auto___34182__$1){
var seq__33428_34183__$1 = temp__5735__auto___34182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33428_34183__$1)){
var c__4556__auto___34184 = cljs.core.chunk_first(seq__33428_34183__$1);
var G__34185 = cljs.core.chunk_rest(seq__33428_34183__$1);
var G__34186 = c__4556__auto___34184;
var G__34187 = cljs.core.count(c__4556__auto___34184);
var G__34188 = (0);
seq__33428_34162 = G__34185;
chunk__33430_34163 = G__34186;
count__33431_34164 = G__34187;
i__33432_34165 = G__34188;
continue;
} else {
var child_34193 = cljs.core.first(seq__33428_34183__$1);
if(cljs.core.truth_(child_34193)){
node.appendChild(child_34193);


var G__34194 = cljs.core.next(seq__33428_34183__$1);
var G__34195 = null;
var G__34196 = (0);
var G__34197 = (0);
seq__33428_34162 = G__34194;
chunk__33430_34163 = G__34195;
count__33431_34164 = G__34196;
i__33432_34165 = G__34197;
continue;
} else {
var G__34199 = cljs.core.next(seq__33428_34183__$1);
var G__34200 = null;
var G__34201 = (0);
var G__34202 = (0);
seq__33428_34162 = G__34199;
chunk__33430_34163 = G__34200;
count__33431_34164 = G__34201;
i__33432_34165 = G__34202;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34161);
}
}


var G__34204 = cljs.core.next(seq__33359_34149__$1);
var G__34205 = null;
var G__34206 = (0);
var G__34207 = (0);
seq__33359_34064 = G__34204;
chunk__33361_34065 = G__34205;
count__33362_34066 = G__34206;
i__33363_34067 = G__34207;
continue;
} else {
var G__34208 = cljs.core.next(seq__33359_34149__$1);
var G__34209 = null;
var G__34210 = (0);
var G__34211 = (0);
seq__33359_34064 = G__34208;
chunk__33361_34065 = G__34209;
count__33362_34066 = G__34210;
i__33363_34067 = G__34211;
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
var len__4736__auto___34217 = arguments.length;
var i__4737__auto___34218 = (0);
while(true){
if((i__4737__auto___34218 < len__4736__auto___34217)){
args__4742__auto__.push((arguments[i__4737__auto___34218]));

var G__34219 = (i__4737__auto___34218 + (1));
i__4737__auto___34218 = G__34219;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33435){
var G__33436 = cljs.core.first(seq33435);
var seq33435__$1 = cljs.core.next(seq33435);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33436,seq33435__$1);
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
var G__33445 = arguments.length;
switch (G__33445) {
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
var c__29730__auto___34240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_33457){
var state_val_33458 = (state_33457[(1)]);
if((state_val_33458 === (1))){
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33457__$1,(2),once_or_cleanup);
} else {
if((state_val_33458 === (2))){
var inst_33454 = (state_33457[(2)]);
var inst_33455 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33457__$1 = (function (){var statearr_33463 = state_33457;
(statearr_33463[(7)] = inst_33454);

return statearr_33463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33457__$1,inst_33455);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29612__auto__ = null;
var shadow$dom$state_machine__29612__auto____0 = (function (){
var statearr_33465 = [null,null,null,null,null,null,null,null];
(statearr_33465[(0)] = shadow$dom$state_machine__29612__auto__);

(statearr_33465[(1)] = (1));

return statearr_33465;
});
var shadow$dom$state_machine__29612__auto____1 = (function (state_33457){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_33457);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e33466){var ex__29615__auto__ = e33466;
var statearr_33468_34243 = state_33457;
(statearr_33468_34243[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_33457[(4)]))){
var statearr_33469_34244 = state_33457;
(statearr_33469_34244[(1)] = cljs.core.first((state_33457[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34246 = state_33457;
state_33457 = G__34246;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
shadow$dom$state_machine__29612__auto__ = function(state_33457){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29612__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29612__auto____1.call(this,state_33457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29612__auto____0;
shadow$dom$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29612__auto____1;
return shadow$dom$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_33471 = f__29731__auto__();
(statearr_33471[(6)] = c__29730__auto___34240);

return statearr_33471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
