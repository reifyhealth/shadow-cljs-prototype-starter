goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32415 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32415(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32422 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32422(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31395 = coll;
var G__31396 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31395,G__31396) : shadow.dom.lazy_native_coll_seq.call(null,G__31395,G__31396));
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
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
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
var G__31415 = arguments.length;
switch (G__31415) {
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
var G__31419 = arguments.length;
switch (G__31419) {
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
var G__31433 = arguments.length;
switch (G__31433) {
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
var G__31435 = arguments.length;
switch (G__31435) {
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
var G__31444 = arguments.length;
switch (G__31444) {
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
var G__31460 = arguments.length;
switch (G__31460) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31473){if((e31473 instanceof Object)){
var e = e31473;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31473;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31482 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31483 = null;
var count__31484 = (0);
var i__31485 = (0);
while(true){
if((i__31485 < count__31484)){
var el = chunk__31483.cljs$core$IIndexed$_nth$arity$2(null,i__31485);
var handler_32548__$1 = ((function (seq__31482,chunk__31483,count__31484,i__31485,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31482,chunk__31483,count__31484,i__31485,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32548__$1);


var G__32550 = seq__31482;
var G__32551 = chunk__31483;
var G__32552 = count__31484;
var G__32553 = (i__31485 + (1));
seq__31482 = G__32550;
chunk__31483 = G__32551;
count__31484 = G__32552;
i__31485 = G__32553;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31482);
if(temp__5735__auto__){
var seq__31482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31482__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31482__$1);
var G__32558 = cljs.core.chunk_rest(seq__31482__$1);
var G__32559 = c__4591__auto__;
var G__32560 = cljs.core.count(c__4591__auto__);
var G__32561 = (0);
seq__31482 = G__32558;
chunk__31483 = G__32559;
count__31484 = G__32560;
i__31485 = G__32561;
continue;
} else {
var el = cljs.core.first(seq__31482__$1);
var handler_32562__$1 = ((function (seq__31482,chunk__31483,count__31484,i__31485,el,seq__31482__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31482,chunk__31483,count__31484,i__31485,el,seq__31482__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32562__$1);


var G__32563 = cljs.core.next(seq__31482__$1);
var G__32564 = null;
var G__32565 = (0);
var G__32566 = (0);
seq__31482 = G__32563;
chunk__31483 = G__32564;
count__31484 = G__32565;
i__31485 = G__32566;
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
var G__31515 = arguments.length;
switch (G__31515) {
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
var seq__31526 = cljs.core.seq(events);
var chunk__31527 = null;
var count__31528 = (0);
var i__31529 = (0);
while(true){
if((i__31529 < count__31528)){
var vec__31543 = chunk__31527.cljs$core$IIndexed$_nth$arity$2(null,i__31529);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31543,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32572 = seq__31526;
var G__32573 = chunk__31527;
var G__32574 = count__31528;
var G__32575 = (i__31529 + (1));
seq__31526 = G__32572;
chunk__31527 = G__32573;
count__31528 = G__32574;
i__31529 = G__32575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31526);
if(temp__5735__auto__){
var seq__31526__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31526__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31526__$1);
var G__32576 = cljs.core.chunk_rest(seq__31526__$1);
var G__32577 = c__4591__auto__;
var G__32578 = cljs.core.count(c__4591__auto__);
var G__32579 = (0);
seq__31526 = G__32576;
chunk__31527 = G__32577;
count__31528 = G__32578;
i__31529 = G__32579;
continue;
} else {
var vec__31549 = cljs.core.first(seq__31526__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32580 = cljs.core.next(seq__31526__$1);
var G__32581 = null;
var G__32582 = (0);
var G__32583 = (0);
seq__31526 = G__32580;
chunk__31527 = G__32581;
count__31528 = G__32582;
i__31529 = G__32583;
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
var seq__31556 = cljs.core.seq(styles);
var chunk__31557 = null;
var count__31558 = (0);
var i__31559 = (0);
while(true){
if((i__31559 < count__31558)){
var vec__31569 = chunk__31557.cljs$core$IIndexed$_nth$arity$2(null,i__31559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31569,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32586 = seq__31556;
var G__32587 = chunk__31557;
var G__32588 = count__31558;
var G__32589 = (i__31559 + (1));
seq__31556 = G__32586;
chunk__31557 = G__32587;
count__31558 = G__32588;
i__31559 = G__32589;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31556);
if(temp__5735__auto__){
var seq__31556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31556__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31556__$1);
var G__32634 = cljs.core.chunk_rest(seq__31556__$1);
var G__32635 = c__4591__auto__;
var G__32636 = cljs.core.count(c__4591__auto__);
var G__32637 = (0);
seq__31556 = G__32634;
chunk__31557 = G__32635;
count__31558 = G__32636;
i__31559 = G__32637;
continue;
} else {
var vec__31574 = cljs.core.first(seq__31556__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31574,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32640 = cljs.core.next(seq__31556__$1);
var G__32641 = null;
var G__32642 = (0);
var G__32643 = (0);
seq__31556 = G__32640;
chunk__31557 = G__32641;
count__31558 = G__32642;
i__31559 = G__32643;
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
var G__31578_32645 = key;
var G__31578_32646__$1 = (((G__31578_32645 instanceof cljs.core.Keyword))?G__31578_32645.fqn:null);
switch (G__31578_32646__$1) {
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
var ks_32659 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_32659,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_32659,"aria-");
}
})())){
el.setAttribute(ks_32659,value);
} else {
(el[ks_32659] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31601){
var map__31602 = p__31601;
var map__31602__$1 = cljs.core.__destructure_map(map__31602);
var props = map__31602__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31602__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31603 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31603,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31603,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31603,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31606 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31606,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31606;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31608 = arguments.length;
switch (G__31608) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31611){
var vec__31612 = p__31611;
var seq__31613 = cljs.core.seq(vec__31612);
var first__31614 = cljs.core.first(seq__31613);
var seq__31613__$1 = cljs.core.next(seq__31613);
var nn = first__31614;
var first__31614__$1 = cljs.core.first(seq__31613__$1);
var seq__31613__$2 = cljs.core.next(seq__31613__$1);
var np = first__31614__$1;
var nc = seq__31613__$2;
var node = vec__31612;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31615 = nn;
var G__31616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31615,G__31616) : create_fn.call(null,G__31615,G__31616));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31617 = nn;
var G__31618 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31617,G__31618) : create_fn.call(null,G__31617,G__31618));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31619 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(1),null);
var seq__31622_32703 = cljs.core.seq(node_children);
var chunk__31623_32704 = null;
var count__31624_32705 = (0);
var i__31625_32706 = (0);
while(true){
if((i__31625_32706 < count__31624_32705)){
var child_struct_32708 = chunk__31623_32704.cljs$core$IIndexed$_nth$arity$2(null,i__31625_32706);
var children_32710 = shadow.dom.dom_node(child_struct_32708);
if(cljs.core.seq_QMARK_(children_32710)){
var seq__31651_32711 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32710));
var chunk__31653_32712 = null;
var count__31654_32713 = (0);
var i__31655_32714 = (0);
while(true){
if((i__31655_32714 < count__31654_32713)){
var child_32717 = chunk__31653_32712.cljs$core$IIndexed$_nth$arity$2(null,i__31655_32714);
if(cljs.core.truth_(child_32717)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32717);


var G__32718 = seq__31651_32711;
var G__32719 = chunk__31653_32712;
var G__32720 = count__31654_32713;
var G__32721 = (i__31655_32714 + (1));
seq__31651_32711 = G__32718;
chunk__31653_32712 = G__32719;
count__31654_32713 = G__32720;
i__31655_32714 = G__32721;
continue;
} else {
var G__32722 = seq__31651_32711;
var G__32723 = chunk__31653_32712;
var G__32724 = count__31654_32713;
var G__32725 = (i__31655_32714 + (1));
seq__31651_32711 = G__32722;
chunk__31653_32712 = G__32723;
count__31654_32713 = G__32724;
i__31655_32714 = G__32725;
continue;
}
} else {
var temp__5735__auto___32726 = cljs.core.seq(seq__31651_32711);
if(temp__5735__auto___32726){
var seq__31651_32727__$1 = temp__5735__auto___32726;
if(cljs.core.chunked_seq_QMARK_(seq__31651_32727__$1)){
var c__4591__auto___32730 = cljs.core.chunk_first(seq__31651_32727__$1);
var G__32731 = cljs.core.chunk_rest(seq__31651_32727__$1);
var G__32732 = c__4591__auto___32730;
var G__32733 = cljs.core.count(c__4591__auto___32730);
var G__32734 = (0);
seq__31651_32711 = G__32731;
chunk__31653_32712 = G__32732;
count__31654_32713 = G__32733;
i__31655_32714 = G__32734;
continue;
} else {
var child_32736 = cljs.core.first(seq__31651_32727__$1);
if(cljs.core.truth_(child_32736)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32736);


var G__32737 = cljs.core.next(seq__31651_32727__$1);
var G__32738 = null;
var G__32739 = (0);
var G__32740 = (0);
seq__31651_32711 = G__32737;
chunk__31653_32712 = G__32738;
count__31654_32713 = G__32739;
i__31655_32714 = G__32740;
continue;
} else {
var G__32741 = cljs.core.next(seq__31651_32727__$1);
var G__32742 = null;
var G__32743 = (0);
var G__32744 = (0);
seq__31651_32711 = G__32741;
chunk__31653_32712 = G__32742;
count__31654_32713 = G__32743;
i__31655_32714 = G__32744;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32710);
}


var G__32785 = seq__31622_32703;
var G__32786 = chunk__31623_32704;
var G__32787 = count__31624_32705;
var G__32788 = (i__31625_32706 + (1));
seq__31622_32703 = G__32785;
chunk__31623_32704 = G__32786;
count__31624_32705 = G__32787;
i__31625_32706 = G__32788;
continue;
} else {
var temp__5735__auto___32790 = cljs.core.seq(seq__31622_32703);
if(temp__5735__auto___32790){
var seq__31622_32791__$1 = temp__5735__auto___32790;
if(cljs.core.chunked_seq_QMARK_(seq__31622_32791__$1)){
var c__4591__auto___32794 = cljs.core.chunk_first(seq__31622_32791__$1);
var G__32795 = cljs.core.chunk_rest(seq__31622_32791__$1);
var G__32796 = c__4591__auto___32794;
var G__32797 = cljs.core.count(c__4591__auto___32794);
var G__32798 = (0);
seq__31622_32703 = G__32795;
chunk__31623_32704 = G__32796;
count__31624_32705 = G__32797;
i__31625_32706 = G__32798;
continue;
} else {
var child_struct_32800 = cljs.core.first(seq__31622_32791__$1);
var children_32801 = shadow.dom.dom_node(child_struct_32800);
if(cljs.core.seq_QMARK_(children_32801)){
var seq__31670_32802 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32801));
var chunk__31672_32803 = null;
var count__31673_32804 = (0);
var i__31674_32805 = (0);
while(true){
if((i__31674_32805 < count__31673_32804)){
var child_32806 = chunk__31672_32803.cljs$core$IIndexed$_nth$arity$2(null,i__31674_32805);
if(cljs.core.truth_(child_32806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32806);


var G__32807 = seq__31670_32802;
var G__32808 = chunk__31672_32803;
var G__32809 = count__31673_32804;
var G__32810 = (i__31674_32805 + (1));
seq__31670_32802 = G__32807;
chunk__31672_32803 = G__32808;
count__31673_32804 = G__32809;
i__31674_32805 = G__32810;
continue;
} else {
var G__32811 = seq__31670_32802;
var G__32812 = chunk__31672_32803;
var G__32813 = count__31673_32804;
var G__32814 = (i__31674_32805 + (1));
seq__31670_32802 = G__32811;
chunk__31672_32803 = G__32812;
count__31673_32804 = G__32813;
i__31674_32805 = G__32814;
continue;
}
} else {
var temp__5735__auto___32815__$1 = cljs.core.seq(seq__31670_32802);
if(temp__5735__auto___32815__$1){
var seq__31670_32818__$1 = temp__5735__auto___32815__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31670_32818__$1)){
var c__4591__auto___32819 = cljs.core.chunk_first(seq__31670_32818__$1);
var G__32820 = cljs.core.chunk_rest(seq__31670_32818__$1);
var G__32821 = c__4591__auto___32819;
var G__32822 = cljs.core.count(c__4591__auto___32819);
var G__32823 = (0);
seq__31670_32802 = G__32820;
chunk__31672_32803 = G__32821;
count__31673_32804 = G__32822;
i__31674_32805 = G__32823;
continue;
} else {
var child_32824 = cljs.core.first(seq__31670_32818__$1);
if(cljs.core.truth_(child_32824)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32824);


var G__32826 = cljs.core.next(seq__31670_32818__$1);
var G__32827 = null;
var G__32828 = (0);
var G__32829 = (0);
seq__31670_32802 = G__32826;
chunk__31672_32803 = G__32827;
count__31673_32804 = G__32828;
i__31674_32805 = G__32829;
continue;
} else {
var G__32832 = cljs.core.next(seq__31670_32818__$1);
var G__32833 = null;
var G__32834 = (0);
var G__32835 = (0);
seq__31670_32802 = G__32832;
chunk__31672_32803 = G__32833;
count__31673_32804 = G__32834;
i__31674_32805 = G__32835;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32801);
}


var G__32839 = cljs.core.next(seq__31622_32791__$1);
var G__32840 = null;
var G__32841 = (0);
var G__32842 = (0);
seq__31622_32703 = G__32839;
chunk__31623_32704 = G__32840;
count__31624_32705 = G__32841;
i__31625_32706 = G__32842;
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
var seq__31712 = cljs.core.seq(node);
var chunk__31713 = null;
var count__31714 = (0);
var i__31715 = (0);
while(true){
if((i__31715 < count__31714)){
var n = chunk__31713.cljs$core$IIndexed$_nth$arity$2(null,i__31715);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32875 = seq__31712;
var G__32876 = chunk__31713;
var G__32877 = count__31714;
var G__32878 = (i__31715 + (1));
seq__31712 = G__32875;
chunk__31713 = G__32876;
count__31714 = G__32877;
i__31715 = G__32878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31712);
if(temp__5735__auto__){
var seq__31712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31712__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31712__$1);
var G__32879 = cljs.core.chunk_rest(seq__31712__$1);
var G__32880 = c__4591__auto__;
var G__32881 = cljs.core.count(c__4591__auto__);
var G__32882 = (0);
seq__31712 = G__32879;
chunk__31713 = G__32880;
count__31714 = G__32881;
i__31715 = G__32882;
continue;
} else {
var n = cljs.core.first(seq__31712__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32915 = cljs.core.next(seq__31712__$1);
var G__32916 = null;
var G__32917 = (0);
var G__32918 = (0);
seq__31712 = G__32915;
chunk__31713 = G__32916;
count__31714 = G__32917;
i__31715 = G__32918;
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
var G__31726 = arguments.length;
switch (G__31726) {
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
var G__31731 = arguments.length;
switch (G__31731) {
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
var G__31734 = arguments.length;
switch (G__31734) {
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
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
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
var args__4777__auto__ = [];
var len__4771__auto___32959 = arguments.length;
var i__4772__auto___32960 = (0);
while(true){
if((i__4772__auto___32960 < len__4771__auto___32959)){
args__4777__auto__.push((arguments[i__4772__auto___32960]));

var G__32965 = (i__4772__auto___32960 + (1));
i__4772__auto___32960 = G__32965;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31762_32967 = cljs.core.seq(nodes);
var chunk__31763_32968 = null;
var count__31764_32969 = (0);
var i__31765_32970 = (0);
while(true){
if((i__31765_32970 < count__31764_32969)){
var node_32994 = chunk__31763_32968.cljs$core$IIndexed$_nth$arity$2(null,i__31765_32970);
fragment.appendChild(shadow.dom._to_dom(node_32994));


var G__32996 = seq__31762_32967;
var G__32997 = chunk__31763_32968;
var G__32998 = count__31764_32969;
var G__32999 = (i__31765_32970 + (1));
seq__31762_32967 = G__32996;
chunk__31763_32968 = G__32997;
count__31764_32969 = G__32998;
i__31765_32970 = G__32999;
continue;
} else {
var temp__5735__auto___33001 = cljs.core.seq(seq__31762_32967);
if(temp__5735__auto___33001){
var seq__31762_33002__$1 = temp__5735__auto___33001;
if(cljs.core.chunked_seq_QMARK_(seq__31762_33002__$1)){
var c__4591__auto___33004 = cljs.core.chunk_first(seq__31762_33002__$1);
var G__33005 = cljs.core.chunk_rest(seq__31762_33002__$1);
var G__33006 = c__4591__auto___33004;
var G__33007 = cljs.core.count(c__4591__auto___33004);
var G__33008 = (0);
seq__31762_32967 = G__33005;
chunk__31763_32968 = G__33006;
count__31764_32969 = G__33007;
i__31765_32970 = G__33008;
continue;
} else {
var node_33013 = cljs.core.first(seq__31762_33002__$1);
fragment.appendChild(shadow.dom._to_dom(node_33013));


var G__33015 = cljs.core.next(seq__31762_33002__$1);
var G__33016 = null;
var G__33017 = (0);
var G__33018 = (0);
seq__31762_32967 = G__33015;
chunk__31763_32968 = G__33016;
count__31764_32969 = G__33017;
i__31765_32970 = G__33018;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31761){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31761));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31783_33026 = cljs.core.seq(scripts);
var chunk__31784_33027 = null;
var count__31785_33028 = (0);
var i__31786_33029 = (0);
while(true){
if((i__31786_33029 < count__31785_33028)){
var vec__31795_33032 = chunk__31784_33027.cljs$core$IIndexed$_nth$arity$2(null,i__31786_33029);
var script_tag_33033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795_33032,(0),null);
var script_body_33034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795_33032,(1),null);
eval(script_body_33034);


var G__33039 = seq__31783_33026;
var G__33040 = chunk__31784_33027;
var G__33041 = count__31785_33028;
var G__33042 = (i__31786_33029 + (1));
seq__31783_33026 = G__33039;
chunk__31784_33027 = G__33040;
count__31785_33028 = G__33041;
i__31786_33029 = G__33042;
continue;
} else {
var temp__5735__auto___33043 = cljs.core.seq(seq__31783_33026);
if(temp__5735__auto___33043){
var seq__31783_33046__$1 = temp__5735__auto___33043;
if(cljs.core.chunked_seq_QMARK_(seq__31783_33046__$1)){
var c__4591__auto___33047 = cljs.core.chunk_first(seq__31783_33046__$1);
var G__33048 = cljs.core.chunk_rest(seq__31783_33046__$1);
var G__33049 = c__4591__auto___33047;
var G__33050 = cljs.core.count(c__4591__auto___33047);
var G__33051 = (0);
seq__31783_33026 = G__33048;
chunk__31784_33027 = G__33049;
count__31785_33028 = G__33050;
i__31786_33029 = G__33051;
continue;
} else {
var vec__31800_33052 = cljs.core.first(seq__31783_33046__$1);
var script_tag_33053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31800_33052,(0),null);
var script_body_33054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31800_33052,(1),null);
eval(script_body_33054);


var G__33057 = cljs.core.next(seq__31783_33046__$1);
var G__33058 = null;
var G__33059 = (0);
var G__33060 = (0);
seq__31783_33026 = G__33057;
chunk__31784_33027 = G__33058;
count__31785_33028 = G__33059;
i__31786_33029 = G__33060;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31807){
var vec__31808 = p__31807;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31808,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31808,(1),null);
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
var G__31816 = arguments.length;
switch (G__31816) {
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
var seq__31837 = cljs.core.seq(style_keys);
var chunk__31838 = null;
var count__31839 = (0);
var i__31840 = (0);
while(true){
if((i__31840 < count__31839)){
var it = chunk__31838.cljs$core$IIndexed$_nth$arity$2(null,i__31840);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33095 = seq__31837;
var G__33096 = chunk__31838;
var G__33097 = count__31839;
var G__33098 = (i__31840 + (1));
seq__31837 = G__33095;
chunk__31838 = G__33096;
count__31839 = G__33097;
i__31840 = G__33098;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31837);
if(temp__5735__auto__){
var seq__31837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31837__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31837__$1);
var G__33100 = cljs.core.chunk_rest(seq__31837__$1);
var G__33101 = c__4591__auto__;
var G__33102 = cljs.core.count(c__4591__auto__);
var G__33103 = (0);
seq__31837 = G__33100;
chunk__31838 = G__33101;
count__31839 = G__33102;
i__31840 = G__33103;
continue;
} else {
var it = cljs.core.first(seq__31837__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33106 = cljs.core.next(seq__31837__$1);
var G__33107 = null;
var G__33108 = (0);
var G__33109 = (0);
seq__31837 = G__33106;
chunk__31838 = G__33107;
count__31839 = G__33108;
i__31840 = G__33109;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k31847,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__31858 = k31847;
var G__31858__$1 = (((G__31858 instanceof cljs.core.Keyword))?G__31858.fqn:null);
switch (G__31858__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31847,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__31860){
var vec__31861 = p__31860;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31861,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31861,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31846){
var self__ = this;
var G__31846__$1 = this;
return (new cljs.core.RecordIter((0),G__31846__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31849,other31850){
var self__ = this;
var this31849__$1 = this;
return (((!((other31850 == null)))) && ((this31849__$1.constructor === other31850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.x,other31850.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.y,other31850.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.__extmap,other31850.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__31846){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__31873 = cljs.core.keyword_identical_QMARK_;
var expr__31874 = k__4423__auto__;
if(cljs.core.truth_((pred__31873.cljs$core$IFn$_invoke$arity$2 ? pred__31873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31874) : pred__31873.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31874)))){
return (new shadow.dom.Coordinate(G__31846,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31873.cljs$core$IFn$_invoke$arity$2 ? pred__31873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31874) : pred__31873.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31874)))){
return (new shadow.dom.Coordinate(self__.x,G__31846,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__31846),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__31846){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31846,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31854){
var extmap__4454__auto__ = (function (){var G__31885 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31854,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31885);
} else {
return G__31885;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31854),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31854),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k31901,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__31906 = k31901;
var G__31906__$1 = (((G__31906 instanceof cljs.core.Keyword))?G__31906.fqn:null);
switch (G__31906__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31901,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__31910){
var vec__31911 = p__31910;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31911,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31911,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31900){
var self__ = this;
var G__31900__$1 = this;
return (new cljs.core.RecordIter((0),G__31900__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31902,other31903){
var self__ = this;
var this31902__$1 = this;
return (((!((other31903 == null)))) && ((this31902__$1.constructor === other31903.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31902__$1.w,other31903.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31902__$1.h,other31903.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31902__$1.__extmap,other31903.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__31900){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__31934 = cljs.core.keyword_identical_QMARK_;
var expr__31935 = k__4423__auto__;
if(cljs.core.truth_((pred__31934.cljs$core$IFn$_invoke$arity$2 ? pred__31934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31935) : pred__31934.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__31935)))){
return (new shadow.dom.Size(G__31900,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31934.cljs$core$IFn$_invoke$arity$2 ? pred__31934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31935) : pred__31934.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__31935)))){
return (new shadow.dom.Size(self__.w,G__31900,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__31900),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__31900){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31900,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31904){
var extmap__4454__auto__ = (function (){var G__31956 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31904,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31904)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31956);
} else {
return G__31956;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31904),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31904),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__33230 = (i + (1));
var G__33231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33230;
ret = G__33231;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31975){
var vec__31976 = p__31975;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
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
var G__33250 = ps;
var G__33251 = (i + (1));
el__$1 = G__33250;
i = G__33251;
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
var vec__32040 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32048_33253 = cljs.core.seq(props);
var chunk__32049_33254 = null;
var count__32050_33255 = (0);
var i__32051_33256 = (0);
while(true){
if((i__32051_33256 < count__32050_33255)){
var vec__32095_33257 = chunk__32049_33254.cljs$core$IIndexed$_nth$arity$2(null,i__32051_33256);
var k_33258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095_33257,(0),null);
var v_33259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32095_33257,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33258);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33258),v_33259);


var G__33261 = seq__32048_33253;
var G__33262 = chunk__32049_33254;
var G__33263 = count__32050_33255;
var G__33264 = (i__32051_33256 + (1));
seq__32048_33253 = G__33261;
chunk__32049_33254 = G__33262;
count__32050_33255 = G__33263;
i__32051_33256 = G__33264;
continue;
} else {
var temp__5735__auto___33265 = cljs.core.seq(seq__32048_33253);
if(temp__5735__auto___33265){
var seq__32048_33267__$1 = temp__5735__auto___33265;
if(cljs.core.chunked_seq_QMARK_(seq__32048_33267__$1)){
var c__4591__auto___33268 = cljs.core.chunk_first(seq__32048_33267__$1);
var G__33269 = cljs.core.chunk_rest(seq__32048_33267__$1);
var G__33270 = c__4591__auto___33268;
var G__33271 = cljs.core.count(c__4591__auto___33268);
var G__33272 = (0);
seq__32048_33253 = G__33269;
chunk__32049_33254 = G__33270;
count__32050_33255 = G__33271;
i__32051_33256 = G__33272;
continue;
} else {
var vec__32100_33278 = cljs.core.first(seq__32048_33267__$1);
var k_33279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32100_33278,(0),null);
var v_33280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32100_33278,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33279);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33279),v_33280);


var G__33283 = cljs.core.next(seq__32048_33267__$1);
var G__33284 = null;
var G__33285 = (0);
var G__33286 = (0);
seq__32048_33253 = G__33283;
chunk__32049_33254 = G__33284;
count__32050_33255 = G__33285;
i__32051_33256 = G__33286;
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
var vec__32109 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(1),null);
var seq__32112_33289 = cljs.core.seq(node_children);
var chunk__32114_33290 = null;
var count__32115_33291 = (0);
var i__32116_33292 = (0);
while(true){
if((i__32116_33292 < count__32115_33291)){
var child_struct_33294 = chunk__32114_33290.cljs$core$IIndexed$_nth$arity$2(null,i__32116_33292);
if((!((child_struct_33294 == null)))){
if(typeof child_struct_33294 === 'string'){
var text_33296 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33296),child_struct_33294].join(''));
} else {
var children_33299 = shadow.dom.svg_node(child_struct_33294);
if(cljs.core.seq_QMARK_(children_33299)){
var seq__32200_33301 = cljs.core.seq(children_33299);
var chunk__32202_33302 = null;
var count__32203_33303 = (0);
var i__32204_33304 = (0);
while(true){
if((i__32204_33304 < count__32203_33303)){
var child_33306 = chunk__32202_33302.cljs$core$IIndexed$_nth$arity$2(null,i__32204_33304);
if(cljs.core.truth_(child_33306)){
node.appendChild(child_33306);


var G__33308 = seq__32200_33301;
var G__33309 = chunk__32202_33302;
var G__33310 = count__32203_33303;
var G__33311 = (i__32204_33304 + (1));
seq__32200_33301 = G__33308;
chunk__32202_33302 = G__33309;
count__32203_33303 = G__33310;
i__32204_33304 = G__33311;
continue;
} else {
var G__33314 = seq__32200_33301;
var G__33315 = chunk__32202_33302;
var G__33316 = count__32203_33303;
var G__33317 = (i__32204_33304 + (1));
seq__32200_33301 = G__33314;
chunk__32202_33302 = G__33315;
count__32203_33303 = G__33316;
i__32204_33304 = G__33317;
continue;
}
} else {
var temp__5735__auto___33318 = cljs.core.seq(seq__32200_33301);
if(temp__5735__auto___33318){
var seq__32200_33319__$1 = temp__5735__auto___33318;
if(cljs.core.chunked_seq_QMARK_(seq__32200_33319__$1)){
var c__4591__auto___33320 = cljs.core.chunk_first(seq__32200_33319__$1);
var G__33321 = cljs.core.chunk_rest(seq__32200_33319__$1);
var G__33322 = c__4591__auto___33320;
var G__33323 = cljs.core.count(c__4591__auto___33320);
var G__33324 = (0);
seq__32200_33301 = G__33321;
chunk__32202_33302 = G__33322;
count__32203_33303 = G__33323;
i__32204_33304 = G__33324;
continue;
} else {
var child_33325 = cljs.core.first(seq__32200_33319__$1);
if(cljs.core.truth_(child_33325)){
node.appendChild(child_33325);


var G__33326 = cljs.core.next(seq__32200_33319__$1);
var G__33327 = null;
var G__33328 = (0);
var G__33329 = (0);
seq__32200_33301 = G__33326;
chunk__32202_33302 = G__33327;
count__32203_33303 = G__33328;
i__32204_33304 = G__33329;
continue;
} else {
var G__33330 = cljs.core.next(seq__32200_33319__$1);
var G__33331 = null;
var G__33332 = (0);
var G__33333 = (0);
seq__32200_33301 = G__33330;
chunk__32202_33302 = G__33331;
count__32203_33303 = G__33332;
i__32204_33304 = G__33333;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33299);
}
}


var G__33335 = seq__32112_33289;
var G__33336 = chunk__32114_33290;
var G__33337 = count__32115_33291;
var G__33338 = (i__32116_33292 + (1));
seq__32112_33289 = G__33335;
chunk__32114_33290 = G__33336;
count__32115_33291 = G__33337;
i__32116_33292 = G__33338;
continue;
} else {
var G__33339 = seq__32112_33289;
var G__33340 = chunk__32114_33290;
var G__33341 = count__32115_33291;
var G__33342 = (i__32116_33292 + (1));
seq__32112_33289 = G__33339;
chunk__32114_33290 = G__33340;
count__32115_33291 = G__33341;
i__32116_33292 = G__33342;
continue;
}
} else {
var temp__5735__auto___33343 = cljs.core.seq(seq__32112_33289);
if(temp__5735__auto___33343){
var seq__32112_33344__$1 = temp__5735__auto___33343;
if(cljs.core.chunked_seq_QMARK_(seq__32112_33344__$1)){
var c__4591__auto___33346 = cljs.core.chunk_first(seq__32112_33344__$1);
var G__33347 = cljs.core.chunk_rest(seq__32112_33344__$1);
var G__33348 = c__4591__auto___33346;
var G__33349 = cljs.core.count(c__4591__auto___33346);
var G__33350 = (0);
seq__32112_33289 = G__33347;
chunk__32114_33290 = G__33348;
count__32115_33291 = G__33349;
i__32116_33292 = G__33350;
continue;
} else {
var child_struct_33352 = cljs.core.first(seq__32112_33344__$1);
if((!((child_struct_33352 == null)))){
if(typeof child_struct_33352 === 'string'){
var text_33353 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33353),child_struct_33352].join(''));
} else {
var children_33355 = shadow.dom.svg_node(child_struct_33352);
if(cljs.core.seq_QMARK_(children_33355)){
var seq__32217_33357 = cljs.core.seq(children_33355);
var chunk__32219_33358 = null;
var count__32220_33359 = (0);
var i__32221_33360 = (0);
while(true){
if((i__32221_33360 < count__32220_33359)){
var child_33365 = chunk__32219_33358.cljs$core$IIndexed$_nth$arity$2(null,i__32221_33360);
if(cljs.core.truth_(child_33365)){
node.appendChild(child_33365);


var G__33366 = seq__32217_33357;
var G__33367 = chunk__32219_33358;
var G__33368 = count__32220_33359;
var G__33369 = (i__32221_33360 + (1));
seq__32217_33357 = G__33366;
chunk__32219_33358 = G__33367;
count__32220_33359 = G__33368;
i__32221_33360 = G__33369;
continue;
} else {
var G__33370 = seq__32217_33357;
var G__33371 = chunk__32219_33358;
var G__33372 = count__32220_33359;
var G__33373 = (i__32221_33360 + (1));
seq__32217_33357 = G__33370;
chunk__32219_33358 = G__33371;
count__32220_33359 = G__33372;
i__32221_33360 = G__33373;
continue;
}
} else {
var temp__5735__auto___33375__$1 = cljs.core.seq(seq__32217_33357);
if(temp__5735__auto___33375__$1){
var seq__32217_33376__$1 = temp__5735__auto___33375__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32217_33376__$1)){
var c__4591__auto___33378 = cljs.core.chunk_first(seq__32217_33376__$1);
var G__33382 = cljs.core.chunk_rest(seq__32217_33376__$1);
var G__33383 = c__4591__auto___33378;
var G__33384 = cljs.core.count(c__4591__auto___33378);
var G__33385 = (0);
seq__32217_33357 = G__33382;
chunk__32219_33358 = G__33383;
count__32220_33359 = G__33384;
i__32221_33360 = G__33385;
continue;
} else {
var child_33386 = cljs.core.first(seq__32217_33376__$1);
if(cljs.core.truth_(child_33386)){
node.appendChild(child_33386);


var G__33388 = cljs.core.next(seq__32217_33376__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__32217_33357 = G__33388;
chunk__32219_33358 = G__33389;
count__32220_33359 = G__33390;
i__32221_33360 = G__33391;
continue;
} else {
var G__33392 = cljs.core.next(seq__32217_33376__$1);
var G__33393 = null;
var G__33394 = (0);
var G__33395 = (0);
seq__32217_33357 = G__33392;
chunk__32219_33358 = G__33393;
count__32220_33359 = G__33394;
i__32221_33360 = G__33395;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33355);
}
}


var G__33397 = cljs.core.next(seq__32112_33344__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__32112_33289 = G__33397;
chunk__32114_33290 = G__33398;
count__32115_33291 = G__33399;
i__32116_33292 = G__33400;
continue;
} else {
var G__33401 = cljs.core.next(seq__32112_33344__$1);
var G__33402 = null;
var G__33403 = (0);
var G__33404 = (0);
seq__32112_33289 = G__33401;
chunk__32114_33290 = G__33402;
count__32115_33291 = G__33403;
i__32116_33292 = G__33404;
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
var args__4777__auto__ = [];
var len__4771__auto___33409 = arguments.length;
var i__4772__auto___33410 = (0);
while(true){
if((i__4772__auto___33410 < len__4771__auto___33409)){
args__4777__auto__.push((arguments[i__4772__auto___33410]));

var G__33412 = (i__4772__auto___33410 + (1));
i__4772__auto___33410 = G__33412;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32266){
var G__32267 = cljs.core.first(seq32266);
var seq32266__$1 = cljs.core.next(seq32266);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32267,seq32266__$1);
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
var G__32308 = arguments.length;
switch (G__32308) {
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

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__28567__auto___33419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_32341){
var state_val_32342 = (state_32341[(1)]);
if((state_val_32342 === (1))){
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32341__$1,(2),once_or_cleanup);
} else {
if((state_val_32342 === (2))){
var inst_32338 = (state_32341[(2)]);
var inst_32339 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32341__$1 = (function (){var statearr_32351 = state_32341;
(statearr_32351[(7)] = inst_32338);

return statearr_32351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32341__$1,inst_32339);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28362__auto__ = null;
var shadow$dom$state_machine__28362__auto____0 = (function (){
var statearr_32352 = [null,null,null,null,null,null,null,null];
(statearr_32352[(0)] = shadow$dom$state_machine__28362__auto__);

(statearr_32352[(1)] = (1));

return statearr_32352;
});
var shadow$dom$state_machine__28362__auto____1 = (function (state_32341){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_32341);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e32372){var ex__28365__auto__ = e32372;
var statearr_32375_33425 = state_32341;
(statearr_32375_33425[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_32341[(4)]))){
var statearr_32377_33426 = state_32341;
(statearr_32377_33426[(1)] = cljs.core.first((state_32341[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_32341;
state_32341 = G__33429;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
shadow$dom$state_machine__28362__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28362__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28362__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28362__auto____0;
shadow$dom$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28362__auto____1;
return shadow$dom$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_32399 = f__28568__auto__();
(statearr_32399[(6)] = c__28567__auto___33419);

return statearr_32399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
