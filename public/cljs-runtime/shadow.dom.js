goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32366 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_32366(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32370 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_32370(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31534 = coll;
var G__31535 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31534,G__31535) : shadow.dom.lazy_native_coll_seq.call(null,G__31534,G__31535));
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
var G__31543 = arguments.length;
switch (G__31543) {
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
var G__31545 = arguments.length;
switch (G__31545) {
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
var G__31547 = arguments.length;
switch (G__31547) {
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
var G__31550 = arguments.length;
switch (G__31550) {
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
var G__31560 = arguments.length;
switch (G__31560) {
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
var G__31583 = arguments.length;
switch (G__31583) {
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
}catch (e31595){if((e31595 instanceof Object)){
var e = e31595;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31595;

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
var seq__31603 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31604 = null;
var count__31605 = (0);
var i__31606 = (0);
while(true){
if((i__31606 < count__31605)){
var el = chunk__31604.cljs$core$IIndexed$_nth$arity$2(null,i__31606);
var handler_32535__$1 = ((function (seq__31603,chunk__31604,count__31605,i__31606,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31603,chunk__31604,count__31605,i__31606,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32535__$1);


var G__32537 = seq__31603;
var G__32538 = chunk__31604;
var G__32539 = count__31605;
var G__32540 = (i__31606 + (1));
seq__31603 = G__32537;
chunk__31604 = G__32538;
count__31605 = G__32539;
i__31606 = G__32540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31603);
if(temp__5735__auto__){
var seq__31603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31603__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31603__$1);
var G__32541 = cljs.core.chunk_rest(seq__31603__$1);
var G__32542 = c__4556__auto__;
var G__32543 = cljs.core.count(c__4556__auto__);
var G__32544 = (0);
seq__31603 = G__32541;
chunk__31604 = G__32542;
count__31605 = G__32543;
i__31606 = G__32544;
continue;
} else {
var el = cljs.core.first(seq__31603__$1);
var handler_32545__$1 = ((function (seq__31603,chunk__31604,count__31605,i__31606,el,seq__31603__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31603,chunk__31604,count__31605,i__31606,el,seq__31603__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32545__$1);


var G__32621 = cljs.core.next(seq__31603__$1);
var G__32623 = null;
var G__32624 = (0);
var G__32625 = (0);
seq__31603 = G__32621;
chunk__31604 = G__32623;
count__31605 = G__32624;
i__31606 = G__32625;
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
var G__31616 = arguments.length;
switch (G__31616) {
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
var seq__31622 = cljs.core.seq(events);
var chunk__31623 = null;
var count__31624 = (0);
var i__31625 = (0);
while(true){
if((i__31625 < count__31624)){
var vec__31634 = chunk__31623.cljs$core$IIndexed$_nth$arity$2(null,i__31625);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31634,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32654 = seq__31622;
var G__32655 = chunk__31623;
var G__32656 = count__31624;
var G__32657 = (i__31625 + (1));
seq__31622 = G__32654;
chunk__31623 = G__32655;
count__31624 = G__32656;
i__31625 = G__32657;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31622);
if(temp__5735__auto__){
var seq__31622__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31622__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31622__$1);
var G__32659 = cljs.core.chunk_rest(seq__31622__$1);
var G__32660 = c__4556__auto__;
var G__32661 = cljs.core.count(c__4556__auto__);
var G__32662 = (0);
seq__31622 = G__32659;
chunk__31623 = G__32660;
count__31624 = G__32661;
i__31625 = G__32662;
continue;
} else {
var vec__31637 = cljs.core.first(seq__31622__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32664 = cljs.core.next(seq__31622__$1);
var G__32665 = null;
var G__32666 = (0);
var G__32667 = (0);
seq__31622 = G__32664;
chunk__31623 = G__32665;
count__31624 = G__32666;
i__31625 = G__32667;
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
var seq__31642 = cljs.core.seq(styles);
var chunk__31643 = null;
var count__31644 = (0);
var i__31645 = (0);
while(true){
if((i__31645 < count__31644)){
var vec__31655 = chunk__31643.cljs$core$IIndexed$_nth$arity$2(null,i__31645);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31655,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32668 = seq__31642;
var G__32669 = chunk__31643;
var G__32670 = count__31644;
var G__32671 = (i__31645 + (1));
seq__31642 = G__32668;
chunk__31643 = G__32669;
count__31644 = G__32670;
i__31645 = G__32671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31642);
if(temp__5735__auto__){
var seq__31642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31642__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31642__$1);
var G__32672 = cljs.core.chunk_rest(seq__31642__$1);
var G__32673 = c__4556__auto__;
var G__32674 = cljs.core.count(c__4556__auto__);
var G__32675 = (0);
seq__31642 = G__32672;
chunk__31643 = G__32673;
count__31644 = G__32674;
i__31645 = G__32675;
continue;
} else {
var vec__31658 = cljs.core.first(seq__31642__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32676 = cljs.core.next(seq__31642__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__31642 = G__32676;
chunk__31643 = G__32677;
count__31644 = G__32678;
i__31645 = G__32679;
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
var G__31661_32680 = key;
var G__31661_32681__$1 = (((G__31661_32680 instanceof cljs.core.Keyword))?G__31661_32680.fqn:null);
switch (G__31661_32681__$1) {
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
var ks_32702 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_32702,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_32702,"aria-");
}
})())){
el.setAttribute(ks_32702,value);
} else {
(el[ks_32702] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31664){
var map__31665 = p__31664;
var map__31665__$1 = (((((!((map__31665 == null))))?(((((map__31665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31665):map__31665);
var props = map__31665__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31665__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31667 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31671 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31671,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31671;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31678 = arguments.length;
switch (G__31678) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31701){
var vec__31702 = p__31701;
var seq__31703 = cljs.core.seq(vec__31702);
var first__31704 = cljs.core.first(seq__31703);
var seq__31703__$1 = cljs.core.next(seq__31703);
var nn = first__31704;
var first__31704__$1 = cljs.core.first(seq__31703__$1);
var seq__31703__$2 = cljs.core.next(seq__31703__$1);
var np = first__31704__$1;
var nc = seq__31703__$2;
var node = vec__31702;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31707 = nn;
var G__31708 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31707,G__31708) : create_fn.call(null,G__31707,G__31708));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31709 = nn;
var G__31710 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31709,G__31710) : create_fn.call(null,G__31709,G__31710));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31716 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31716,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31716,(1),null);
var seq__31720_32764 = cljs.core.seq(node_children);
var chunk__31721_32765 = null;
var count__31722_32766 = (0);
var i__31723_32767 = (0);
while(true){
if((i__31723_32767 < count__31722_32766)){
var child_struct_32769 = chunk__31721_32765.cljs$core$IIndexed$_nth$arity$2(null,i__31723_32767);
var children_32770 = shadow.dom.dom_node(child_struct_32769);
if(cljs.core.seq_QMARK_(children_32770)){
var seq__31758_32771 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32770));
var chunk__31760_32772 = null;
var count__31761_32773 = (0);
var i__31762_32774 = (0);
while(true){
if((i__31762_32774 < count__31761_32773)){
var child_32778 = chunk__31760_32772.cljs$core$IIndexed$_nth$arity$2(null,i__31762_32774);
if(cljs.core.truth_(child_32778)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32778);


var G__32780 = seq__31758_32771;
var G__32781 = chunk__31760_32772;
var G__32782 = count__31761_32773;
var G__32783 = (i__31762_32774 + (1));
seq__31758_32771 = G__32780;
chunk__31760_32772 = G__32781;
count__31761_32773 = G__32782;
i__31762_32774 = G__32783;
continue;
} else {
var G__32787 = seq__31758_32771;
var G__32788 = chunk__31760_32772;
var G__32789 = count__31761_32773;
var G__32790 = (i__31762_32774 + (1));
seq__31758_32771 = G__32787;
chunk__31760_32772 = G__32788;
count__31761_32773 = G__32789;
i__31762_32774 = G__32790;
continue;
}
} else {
var temp__5735__auto___32791 = cljs.core.seq(seq__31758_32771);
if(temp__5735__auto___32791){
var seq__31758_32792__$1 = temp__5735__auto___32791;
if(cljs.core.chunked_seq_QMARK_(seq__31758_32792__$1)){
var c__4556__auto___32793 = cljs.core.chunk_first(seq__31758_32792__$1);
var G__32795 = cljs.core.chunk_rest(seq__31758_32792__$1);
var G__32796 = c__4556__auto___32793;
var G__32797 = cljs.core.count(c__4556__auto___32793);
var G__32798 = (0);
seq__31758_32771 = G__32795;
chunk__31760_32772 = G__32796;
count__31761_32773 = G__32797;
i__31762_32774 = G__32798;
continue;
} else {
var child_32799 = cljs.core.first(seq__31758_32792__$1);
if(cljs.core.truth_(child_32799)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32799);


var G__32801 = cljs.core.next(seq__31758_32792__$1);
var G__32802 = null;
var G__32803 = (0);
var G__32804 = (0);
seq__31758_32771 = G__32801;
chunk__31760_32772 = G__32802;
count__31761_32773 = G__32803;
i__31762_32774 = G__32804;
continue;
} else {
var G__32807 = cljs.core.next(seq__31758_32792__$1);
var G__32808 = null;
var G__32809 = (0);
var G__32810 = (0);
seq__31758_32771 = G__32807;
chunk__31760_32772 = G__32808;
count__31761_32773 = G__32809;
i__31762_32774 = G__32810;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32770);
}


var G__32814 = seq__31720_32764;
var G__32815 = chunk__31721_32765;
var G__32816 = count__31722_32766;
var G__32817 = (i__31723_32767 + (1));
seq__31720_32764 = G__32814;
chunk__31721_32765 = G__32815;
count__31722_32766 = G__32816;
i__31723_32767 = G__32817;
continue;
} else {
var temp__5735__auto___32818 = cljs.core.seq(seq__31720_32764);
if(temp__5735__auto___32818){
var seq__31720_32820__$1 = temp__5735__auto___32818;
if(cljs.core.chunked_seq_QMARK_(seq__31720_32820__$1)){
var c__4556__auto___32821 = cljs.core.chunk_first(seq__31720_32820__$1);
var G__32822 = cljs.core.chunk_rest(seq__31720_32820__$1);
var G__32823 = c__4556__auto___32821;
var G__32824 = cljs.core.count(c__4556__auto___32821);
var G__32825 = (0);
seq__31720_32764 = G__32822;
chunk__31721_32765 = G__32823;
count__31722_32766 = G__32824;
i__31723_32767 = G__32825;
continue;
} else {
var child_struct_32827 = cljs.core.first(seq__31720_32820__$1);
var children_32828 = shadow.dom.dom_node(child_struct_32827);
if(cljs.core.seq_QMARK_(children_32828)){
var seq__31770_32829 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32828));
var chunk__31772_32830 = null;
var count__31773_32831 = (0);
var i__31774_32832 = (0);
while(true){
if((i__31774_32832 < count__31773_32831)){
var child_32835 = chunk__31772_32830.cljs$core$IIndexed$_nth$arity$2(null,i__31774_32832);
if(cljs.core.truth_(child_32835)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32835);


var G__32838 = seq__31770_32829;
var G__32839 = chunk__31772_32830;
var G__32840 = count__31773_32831;
var G__32841 = (i__31774_32832 + (1));
seq__31770_32829 = G__32838;
chunk__31772_32830 = G__32839;
count__31773_32831 = G__32840;
i__31774_32832 = G__32841;
continue;
} else {
var G__32843 = seq__31770_32829;
var G__32844 = chunk__31772_32830;
var G__32845 = count__31773_32831;
var G__32846 = (i__31774_32832 + (1));
seq__31770_32829 = G__32843;
chunk__31772_32830 = G__32844;
count__31773_32831 = G__32845;
i__31774_32832 = G__32846;
continue;
}
} else {
var temp__5735__auto___32847__$1 = cljs.core.seq(seq__31770_32829);
if(temp__5735__auto___32847__$1){
var seq__31770_32848__$1 = temp__5735__auto___32847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31770_32848__$1)){
var c__4556__auto___32849 = cljs.core.chunk_first(seq__31770_32848__$1);
var G__32851 = cljs.core.chunk_rest(seq__31770_32848__$1);
var G__32852 = c__4556__auto___32849;
var G__32853 = cljs.core.count(c__4556__auto___32849);
var G__32854 = (0);
seq__31770_32829 = G__32851;
chunk__31772_32830 = G__32852;
count__31773_32831 = G__32853;
i__31774_32832 = G__32854;
continue;
} else {
var child_32856 = cljs.core.first(seq__31770_32848__$1);
if(cljs.core.truth_(child_32856)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32856);


var G__32857 = cljs.core.next(seq__31770_32848__$1);
var G__32858 = null;
var G__32859 = (0);
var G__32860 = (0);
seq__31770_32829 = G__32857;
chunk__31772_32830 = G__32858;
count__31773_32831 = G__32859;
i__31774_32832 = G__32860;
continue;
} else {
var G__32861 = cljs.core.next(seq__31770_32848__$1);
var G__32862 = null;
var G__32863 = (0);
var G__32864 = (0);
seq__31770_32829 = G__32861;
chunk__31772_32830 = G__32862;
count__31773_32831 = G__32863;
i__31774_32832 = G__32864;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32828);
}


var G__32865 = cljs.core.next(seq__31720_32820__$1);
var G__32866 = null;
var G__32867 = (0);
var G__32868 = (0);
seq__31720_32764 = G__32865;
chunk__31721_32765 = G__32866;
count__31722_32766 = G__32867;
i__31723_32767 = G__32868;
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
var seq__31793 = cljs.core.seq(node);
var chunk__31794 = null;
var count__31795 = (0);
var i__31796 = (0);
while(true){
if((i__31796 < count__31795)){
var n = chunk__31794.cljs$core$IIndexed$_nth$arity$2(null,i__31796);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32870 = seq__31793;
var G__32871 = chunk__31794;
var G__32872 = count__31795;
var G__32873 = (i__31796 + (1));
seq__31793 = G__32870;
chunk__31794 = G__32871;
count__31795 = G__32872;
i__31796 = G__32873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31793);
if(temp__5735__auto__){
var seq__31793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31793__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31793__$1);
var G__32878 = cljs.core.chunk_rest(seq__31793__$1);
var G__32879 = c__4556__auto__;
var G__32880 = cljs.core.count(c__4556__auto__);
var G__32881 = (0);
seq__31793 = G__32878;
chunk__31794 = G__32879;
count__31795 = G__32880;
i__31796 = G__32881;
continue;
} else {
var n = cljs.core.first(seq__31793__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32883 = cljs.core.next(seq__31793__$1);
var G__32884 = null;
var G__32885 = (0);
var G__32886 = (0);
seq__31793 = G__32883;
chunk__31794 = G__32884;
count__31795 = G__32885;
i__31796 = G__32886;
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
var G__31809 = arguments.length;
switch (G__31809) {
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
var G__31814 = arguments.length;
switch (G__31814) {
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
var G__31824 = arguments.length;
switch (G__31824) {
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
var len__4736__auto___32935 = arguments.length;
var i__4737__auto___32937 = (0);
while(true){
if((i__4737__auto___32937 < len__4736__auto___32935)){
args__4742__auto__.push((arguments[i__4737__auto___32937]));

var G__32938 = (i__4737__auto___32937 + (1));
i__4737__auto___32937 = G__32938;
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
var seq__31841_32940 = cljs.core.seq(nodes);
var chunk__31842_32941 = null;
var count__31843_32942 = (0);
var i__31844_32943 = (0);
while(true){
if((i__31844_32943 < count__31843_32942)){
var node_32946 = chunk__31842_32941.cljs$core$IIndexed$_nth$arity$2(null,i__31844_32943);
fragment.appendChild(shadow.dom._to_dom(node_32946));


var G__32948 = seq__31841_32940;
var G__32949 = chunk__31842_32941;
var G__32950 = count__31843_32942;
var G__32951 = (i__31844_32943 + (1));
seq__31841_32940 = G__32948;
chunk__31842_32941 = G__32949;
count__31843_32942 = G__32950;
i__31844_32943 = G__32951;
continue;
} else {
var temp__5735__auto___32952 = cljs.core.seq(seq__31841_32940);
if(temp__5735__auto___32952){
var seq__31841_32955__$1 = temp__5735__auto___32952;
if(cljs.core.chunked_seq_QMARK_(seq__31841_32955__$1)){
var c__4556__auto___32956 = cljs.core.chunk_first(seq__31841_32955__$1);
var G__32958 = cljs.core.chunk_rest(seq__31841_32955__$1);
var G__32959 = c__4556__auto___32956;
var G__32960 = cljs.core.count(c__4556__auto___32956);
var G__32961 = (0);
seq__31841_32940 = G__32958;
chunk__31842_32941 = G__32959;
count__31843_32942 = G__32960;
i__31844_32943 = G__32961;
continue;
} else {
var node_32962 = cljs.core.first(seq__31841_32955__$1);
fragment.appendChild(shadow.dom._to_dom(node_32962));


var G__32964 = cljs.core.next(seq__31841_32955__$1);
var G__32965 = null;
var G__32966 = (0);
var G__32967 = (0);
seq__31841_32940 = G__32964;
chunk__31842_32941 = G__32965;
count__31843_32942 = G__32966;
i__31844_32943 = G__32967;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31833){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31833));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31859_32972 = cljs.core.seq(scripts);
var chunk__31860_32973 = null;
var count__31861_32974 = (0);
var i__31862_32975 = (0);
while(true){
if((i__31862_32975 < count__31861_32974)){
var vec__31885_32977 = chunk__31860_32973.cljs$core$IIndexed$_nth$arity$2(null,i__31862_32975);
var script_tag_32978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31885_32977,(0),null);
var script_body_32979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31885_32977,(1),null);
eval(script_body_32979);


var G__32983 = seq__31859_32972;
var G__32984 = chunk__31860_32973;
var G__32985 = count__31861_32974;
var G__32986 = (i__31862_32975 + (1));
seq__31859_32972 = G__32983;
chunk__31860_32973 = G__32984;
count__31861_32974 = G__32985;
i__31862_32975 = G__32986;
continue;
} else {
var temp__5735__auto___32992 = cljs.core.seq(seq__31859_32972);
if(temp__5735__auto___32992){
var seq__31859_32994__$1 = temp__5735__auto___32992;
if(cljs.core.chunked_seq_QMARK_(seq__31859_32994__$1)){
var c__4556__auto___32996 = cljs.core.chunk_first(seq__31859_32994__$1);
var G__32997 = cljs.core.chunk_rest(seq__31859_32994__$1);
var G__32998 = c__4556__auto___32996;
var G__32999 = cljs.core.count(c__4556__auto___32996);
var G__33000 = (0);
seq__31859_32972 = G__32997;
chunk__31860_32973 = G__32998;
count__31861_32974 = G__32999;
i__31862_32975 = G__33000;
continue;
} else {
var vec__31892_33004 = cljs.core.first(seq__31859_32994__$1);
var script_tag_33005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31892_33004,(0),null);
var script_body_33006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31892_33004,(1),null);
eval(script_body_33006);


var G__33007 = cljs.core.next(seq__31859_32994__$1);
var G__33008 = null;
var G__33009 = (0);
var G__33010 = (0);
seq__31859_32972 = G__33007;
chunk__31860_32973 = G__33008;
count__31861_32974 = G__33009;
i__31862_32975 = G__33010;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31895){
var vec__31896 = p__31895;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896,(1),null);
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
var G__31912 = arguments.length;
switch (G__31912) {
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
var seq__31914 = cljs.core.seq(style_keys);
var chunk__31915 = null;
var count__31916 = (0);
var i__31917 = (0);
while(true){
if((i__31917 < count__31916)){
var it = chunk__31915.cljs$core$IIndexed$_nth$arity$2(null,i__31917);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33056 = seq__31914;
var G__33057 = chunk__31915;
var G__33058 = count__31916;
var G__33059 = (i__31917 + (1));
seq__31914 = G__33056;
chunk__31915 = G__33057;
count__31916 = G__33058;
i__31917 = G__33059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31914);
if(temp__5735__auto__){
var seq__31914__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31914__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31914__$1);
var G__33060 = cljs.core.chunk_rest(seq__31914__$1);
var G__33061 = c__4556__auto__;
var G__33062 = cljs.core.count(c__4556__auto__);
var G__33063 = (0);
seq__31914 = G__33060;
chunk__31915 = G__33061;
count__31916 = G__33062;
i__31917 = G__33063;
continue;
} else {
var it = cljs.core.first(seq__31914__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33064 = cljs.core.next(seq__31914__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__31914 = G__33064;
chunk__31915 = G__33065;
count__31916 = G__33066;
i__31917 = G__33067;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31926,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31938 = k31926;
var G__31938__$1 = (((G__31938 instanceof cljs.core.Keyword))?G__31938.fqn:null);
switch (G__31938__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31926,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__31939){
var vec__31944 = p__31939;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31944,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31944,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31925){
var self__ = this;
var G__31925__$1 = this;
return (new cljs.core.RecordIter((0),G__31925__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31927,other31928){
var self__ = this;
var this31927__$1 = this;
return (((!((other31928 == null)))) && ((this31927__$1.constructor === other31928.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31927__$1.x,other31928.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31927__$1.y,other31928.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31927__$1.__extmap,other31928.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31925){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31952 = cljs.core.keyword_identical_QMARK_;
var expr__31953 = k__4388__auto__;
if(cljs.core.truth_((pred__31952.cljs$core$IFn$_invoke$arity$2 ? pred__31952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31953) : pred__31952.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31953)))){
return (new shadow.dom.Coordinate(G__31925,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31952.cljs$core$IFn$_invoke$arity$2 ? pred__31952.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31953) : pred__31952.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31953)))){
return (new shadow.dom.Coordinate(self__.x,G__31925,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__31925),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31925){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31925,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31929){
var extmap__4419__auto__ = (function (){var G__31967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31929,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31929)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31967);
} else {
return G__31967;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31929),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31929),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31989,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31994 = k31989;
var G__31994__$1 = (((G__31994 instanceof cljs.core.Keyword))?G__31994.fqn:null);
switch (G__31994__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31989,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__31996){
var vec__31997 = p__31996;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31997,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31997,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31988){
var self__ = this;
var G__31988__$1 = this;
return (new cljs.core.RecordIter((0),G__31988__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31990,other31991){
var self__ = this;
var this31990__$1 = this;
return (((!((other31991 == null)))) && ((this31990__$1.constructor === other31991.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31990__$1.w,other31991.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31990__$1.h,other31991.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31990__$1.__extmap,other31991.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31988){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32062 = cljs.core.keyword_identical_QMARK_;
var expr__32063 = k__4388__auto__;
if(cljs.core.truth_((pred__32062.cljs$core$IFn$_invoke$arity$2 ? pred__32062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32063) : pred__32062.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32063)))){
return (new shadow.dom.Size(G__31988,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32062.cljs$core$IFn$_invoke$arity$2 ? pred__32062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32063) : pred__32062.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32063)))){
return (new shadow.dom.Size(self__.w,G__31988,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__31988),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31988){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31988,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31992){
var extmap__4419__auto__ = (function (){var G__32074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31992,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31992)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32074);
} else {
return G__32074;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31992),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31992),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__33270 = (i + (1));
var G__33271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33270;
ret = G__33271;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32094){
var vec__32098 = p__32094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32098,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32103 = arguments.length;
switch (G__32103) {
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
var G__33281 = ps;
var G__33282 = (i + (1));
el__$1 = G__33281;
i = G__33282;
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
var vec__32157 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32157,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32157,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32157,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32160_33283 = cljs.core.seq(props);
var chunk__32161_33284 = null;
var count__32162_33285 = (0);
var i__32163_33286 = (0);
while(true){
if((i__32163_33286 < count__32162_33285)){
var vec__32171_33287 = chunk__32161_33284.cljs$core$IIndexed$_nth$arity$2(null,i__32163_33286);
var k_33288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171_33287,(0),null);
var v_33289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171_33287,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33288);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33288),v_33289);


var G__33290 = seq__32160_33283;
var G__33291 = chunk__32161_33284;
var G__33292 = count__32162_33285;
var G__33293 = (i__32163_33286 + (1));
seq__32160_33283 = G__33290;
chunk__32161_33284 = G__33291;
count__32162_33285 = G__33292;
i__32163_33286 = G__33293;
continue;
} else {
var temp__5735__auto___33294 = cljs.core.seq(seq__32160_33283);
if(temp__5735__auto___33294){
var seq__32160_33295__$1 = temp__5735__auto___33294;
if(cljs.core.chunked_seq_QMARK_(seq__32160_33295__$1)){
var c__4556__auto___33296 = cljs.core.chunk_first(seq__32160_33295__$1);
var G__33298 = cljs.core.chunk_rest(seq__32160_33295__$1);
var G__33299 = c__4556__auto___33296;
var G__33300 = cljs.core.count(c__4556__auto___33296);
var G__33301 = (0);
seq__32160_33283 = G__33298;
chunk__32161_33284 = G__33299;
count__32162_33285 = G__33300;
i__32163_33286 = G__33301;
continue;
} else {
var vec__32179_33304 = cljs.core.first(seq__32160_33295__$1);
var k_33305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32179_33304,(0),null);
var v_33306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32179_33304,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33305);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33305),v_33306);


var G__33311 = cljs.core.next(seq__32160_33295__$1);
var G__33312 = null;
var G__33313 = (0);
var G__33314 = (0);
seq__32160_33283 = G__33311;
chunk__32161_33284 = G__33312;
count__32162_33285 = G__33313;
i__32163_33286 = G__33314;
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
var vec__32199 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(1),null);
var seq__32202_33318 = cljs.core.seq(node_children);
var chunk__32204_33319 = null;
var count__32205_33320 = (0);
var i__32206_33321 = (0);
while(true){
if((i__32206_33321 < count__32205_33320)){
var child_struct_33323 = chunk__32204_33319.cljs$core$IIndexed$_nth$arity$2(null,i__32206_33321);
if((!((child_struct_33323 == null)))){
if(typeof child_struct_33323 === 'string'){
var text_33324 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33324),child_struct_33323].join(''));
} else {
var children_33329 = shadow.dom.svg_node(child_struct_33323);
if(cljs.core.seq_QMARK_(children_33329)){
var seq__32242_33330 = cljs.core.seq(children_33329);
var chunk__32244_33331 = null;
var count__32245_33332 = (0);
var i__32246_33333 = (0);
while(true){
if((i__32246_33333 < count__32245_33332)){
var child_33334 = chunk__32244_33331.cljs$core$IIndexed$_nth$arity$2(null,i__32246_33333);
if(cljs.core.truth_(child_33334)){
node.appendChild(child_33334);


var G__33335 = seq__32242_33330;
var G__33336 = chunk__32244_33331;
var G__33337 = count__32245_33332;
var G__33338 = (i__32246_33333 + (1));
seq__32242_33330 = G__33335;
chunk__32244_33331 = G__33336;
count__32245_33332 = G__33337;
i__32246_33333 = G__33338;
continue;
} else {
var G__33372 = seq__32242_33330;
var G__33373 = chunk__32244_33331;
var G__33374 = count__32245_33332;
var G__33375 = (i__32246_33333 + (1));
seq__32242_33330 = G__33372;
chunk__32244_33331 = G__33373;
count__32245_33332 = G__33374;
i__32246_33333 = G__33375;
continue;
}
} else {
var temp__5735__auto___33378 = cljs.core.seq(seq__32242_33330);
if(temp__5735__auto___33378){
var seq__32242_33380__$1 = temp__5735__auto___33378;
if(cljs.core.chunked_seq_QMARK_(seq__32242_33380__$1)){
var c__4556__auto___33381 = cljs.core.chunk_first(seq__32242_33380__$1);
var G__33383 = cljs.core.chunk_rest(seq__32242_33380__$1);
var G__33384 = c__4556__auto___33381;
var G__33385 = cljs.core.count(c__4556__auto___33381);
var G__33386 = (0);
seq__32242_33330 = G__33383;
chunk__32244_33331 = G__33384;
count__32245_33332 = G__33385;
i__32246_33333 = G__33386;
continue;
} else {
var child_33389 = cljs.core.first(seq__32242_33380__$1);
if(cljs.core.truth_(child_33389)){
node.appendChild(child_33389);


var G__33391 = cljs.core.next(seq__32242_33380__$1);
var G__33392 = null;
var G__33393 = (0);
var G__33394 = (0);
seq__32242_33330 = G__33391;
chunk__32244_33331 = G__33392;
count__32245_33332 = G__33393;
i__32246_33333 = G__33394;
continue;
} else {
var G__33398 = cljs.core.next(seq__32242_33380__$1);
var G__33399 = null;
var G__33400 = (0);
var G__33401 = (0);
seq__32242_33330 = G__33398;
chunk__32244_33331 = G__33399;
count__32245_33332 = G__33400;
i__32246_33333 = G__33401;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33329);
}
}


var G__33403 = seq__32202_33318;
var G__33404 = chunk__32204_33319;
var G__33405 = count__32205_33320;
var G__33406 = (i__32206_33321 + (1));
seq__32202_33318 = G__33403;
chunk__32204_33319 = G__33404;
count__32205_33320 = G__33405;
i__32206_33321 = G__33406;
continue;
} else {
var G__33407 = seq__32202_33318;
var G__33408 = chunk__32204_33319;
var G__33409 = count__32205_33320;
var G__33410 = (i__32206_33321 + (1));
seq__32202_33318 = G__33407;
chunk__32204_33319 = G__33408;
count__32205_33320 = G__33409;
i__32206_33321 = G__33410;
continue;
}
} else {
var temp__5735__auto___33412 = cljs.core.seq(seq__32202_33318);
if(temp__5735__auto___33412){
var seq__32202_33413__$1 = temp__5735__auto___33412;
if(cljs.core.chunked_seq_QMARK_(seq__32202_33413__$1)){
var c__4556__auto___33414 = cljs.core.chunk_first(seq__32202_33413__$1);
var G__33415 = cljs.core.chunk_rest(seq__32202_33413__$1);
var G__33416 = c__4556__auto___33414;
var G__33417 = cljs.core.count(c__4556__auto___33414);
var G__33418 = (0);
seq__32202_33318 = G__33415;
chunk__32204_33319 = G__33416;
count__32205_33320 = G__33417;
i__32206_33321 = G__33418;
continue;
} else {
var child_struct_33419 = cljs.core.first(seq__32202_33413__$1);
if((!((child_struct_33419 == null)))){
if(typeof child_struct_33419 === 'string'){
var text_33420 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33420),child_struct_33419].join(''));
} else {
var children_33421 = shadow.dom.svg_node(child_struct_33419);
if(cljs.core.seq_QMARK_(children_33421)){
var seq__32279_33423 = cljs.core.seq(children_33421);
var chunk__32281_33424 = null;
var count__32282_33425 = (0);
var i__32283_33426 = (0);
while(true){
if((i__32283_33426 < count__32282_33425)){
var child_33432 = chunk__32281_33424.cljs$core$IIndexed$_nth$arity$2(null,i__32283_33426);
if(cljs.core.truth_(child_33432)){
node.appendChild(child_33432);


var G__33433 = seq__32279_33423;
var G__33434 = chunk__32281_33424;
var G__33435 = count__32282_33425;
var G__33436 = (i__32283_33426 + (1));
seq__32279_33423 = G__33433;
chunk__32281_33424 = G__33434;
count__32282_33425 = G__33435;
i__32283_33426 = G__33436;
continue;
} else {
var G__33437 = seq__32279_33423;
var G__33438 = chunk__32281_33424;
var G__33439 = count__32282_33425;
var G__33440 = (i__32283_33426 + (1));
seq__32279_33423 = G__33437;
chunk__32281_33424 = G__33438;
count__32282_33425 = G__33439;
i__32283_33426 = G__33440;
continue;
}
} else {
var temp__5735__auto___33444__$1 = cljs.core.seq(seq__32279_33423);
if(temp__5735__auto___33444__$1){
var seq__32279_33446__$1 = temp__5735__auto___33444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32279_33446__$1)){
var c__4556__auto___33448 = cljs.core.chunk_first(seq__32279_33446__$1);
var G__33451 = cljs.core.chunk_rest(seq__32279_33446__$1);
var G__33452 = c__4556__auto___33448;
var G__33453 = cljs.core.count(c__4556__auto___33448);
var G__33454 = (0);
seq__32279_33423 = G__33451;
chunk__32281_33424 = G__33452;
count__32282_33425 = G__33453;
i__32283_33426 = G__33454;
continue;
} else {
var child_33456 = cljs.core.first(seq__32279_33446__$1);
if(cljs.core.truth_(child_33456)){
node.appendChild(child_33456);


var G__33457 = cljs.core.next(seq__32279_33446__$1);
var G__33458 = null;
var G__33459 = (0);
var G__33460 = (0);
seq__32279_33423 = G__33457;
chunk__32281_33424 = G__33458;
count__32282_33425 = G__33459;
i__32283_33426 = G__33460;
continue;
} else {
var G__33462 = cljs.core.next(seq__32279_33446__$1);
var G__33463 = null;
var G__33464 = (0);
var G__33465 = (0);
seq__32279_33423 = G__33462;
chunk__32281_33424 = G__33463;
count__32282_33425 = G__33464;
i__32283_33426 = G__33465;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33421);
}
}


var G__33468 = cljs.core.next(seq__32202_33413__$1);
var G__33469 = null;
var G__33470 = (0);
var G__33471 = (0);
seq__32202_33318 = G__33468;
chunk__32204_33319 = G__33469;
count__32205_33320 = G__33470;
i__32206_33321 = G__33471;
continue;
} else {
var G__33474 = cljs.core.next(seq__32202_33413__$1);
var G__33475 = null;
var G__33476 = (0);
var G__33477 = (0);
seq__32202_33318 = G__33474;
chunk__32204_33319 = G__33475;
count__32205_33320 = G__33476;
i__32206_33321 = G__33477;
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
var len__4736__auto___33482 = arguments.length;
var i__4737__auto___33483 = (0);
while(true){
if((i__4737__auto___33483 < len__4736__auto___33482)){
args__4742__auto__.push((arguments[i__4737__auto___33483]));

var G__33485 = (i__4737__auto___33483 + (1));
i__4737__auto___33483 = G__33485;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32302){
var G__32303 = cljs.core.first(seq32302);
var seq32302__$1 = cljs.core.next(seq32302);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32303,seq32302__$1);
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
var G__32314 = arguments.length;
switch (G__32314) {
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
var c__28542__auto___33514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_32336){
var state_val_32337 = (state_32336[(1)]);
if((state_val_32337 === (1))){
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32336__$1,(2),once_or_cleanup);
} else {
if((state_val_32337 === (2))){
var inst_32333 = (state_32336[(2)]);
var inst_32334 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32336__$1 = (function (){var statearr_32344 = state_32336;
(statearr_32344[(7)] = inst_32333);

return statearr_32344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32336__$1,inst_32334);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28385__auto__ = null;
var shadow$dom$state_machine__28385__auto____0 = (function (){
var statearr_32349 = [null,null,null,null,null,null,null,null];
(statearr_32349[(0)] = shadow$dom$state_machine__28385__auto__);

(statearr_32349[(1)] = (1));

return statearr_32349;
});
var shadow$dom$state_machine__28385__auto____1 = (function (state_32336){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_32336);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e32350){var ex__28388__auto__ = e32350;
var statearr_32353_33531 = state_32336;
(statearr_32353_33531[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_32336[(4)]))){
var statearr_32355_33535 = state_32336;
(statearr_32355_33535[(1)] = cljs.core.first((state_32336[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33537 = state_32336;
state_32336 = G__33537;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
shadow$dom$state_machine__28385__auto__ = function(state_32336){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28385__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28385__auto____1.call(this,state_32336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28385__auto____0;
shadow$dom$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28385__auto____1;
return shadow$dom$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_32356 = f__28543__auto__();
(statearr_32356[(6)] = c__28542__auto___33514);

return statearr_32356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
