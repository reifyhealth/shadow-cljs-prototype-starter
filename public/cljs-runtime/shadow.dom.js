goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33322 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33322(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33323 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33323(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32550 = coll;
var G__32551 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32550,G__32551) : shadow.dom.lazy_native_coll_seq.call(null,G__32550,G__32551));
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
var G__32558 = arguments.length;
switch (G__32558) {
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
var G__32565 = arguments.length;
switch (G__32565) {
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
var G__32569 = arguments.length;
switch (G__32569) {
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
var G__32571 = arguments.length;
switch (G__32571) {
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
var G__32575 = arguments.length;
switch (G__32575) {
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
var G__32582 = arguments.length;
switch (G__32582) {
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
}catch (e32587){if((e32587 instanceof Object)){
var e = e32587;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32587;

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
var seq__32589 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32590 = null;
var count__32591 = (0);
var i__32592 = (0);
while(true){
if((i__32592 < count__32591)){
var el = chunk__32590.cljs$core$IIndexed$_nth$arity$2(null,i__32592);
var handler_33367__$1 = ((function (seq__32589,chunk__32590,count__32591,i__32592,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32589,chunk__32590,count__32591,i__32592,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33367__$1);


var G__33368 = seq__32589;
var G__33369 = chunk__32590;
var G__33370 = count__32591;
var G__33371 = (i__32592 + (1));
seq__32589 = G__33368;
chunk__32590 = G__33369;
count__32591 = G__33370;
i__32592 = G__33371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32589);
if(temp__5735__auto__){
var seq__32589__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32589__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32589__$1);
var G__33374 = cljs.core.chunk_rest(seq__32589__$1);
var G__33375 = c__4556__auto__;
var G__33376 = cljs.core.count(c__4556__auto__);
var G__33377 = (0);
seq__32589 = G__33374;
chunk__32590 = G__33375;
count__32591 = G__33376;
i__32592 = G__33377;
continue;
} else {
var el = cljs.core.first(seq__32589__$1);
var handler_33379__$1 = ((function (seq__32589,chunk__32590,count__32591,i__32592,el,seq__32589__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32589,chunk__32590,count__32591,i__32592,el,seq__32589__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33379__$1);


var G__33382 = cljs.core.next(seq__32589__$1);
var G__33383 = null;
var G__33384 = (0);
var G__33385 = (0);
seq__32589 = G__33382;
chunk__32590 = G__33383;
count__32591 = G__33384;
i__32592 = G__33385;
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var seq__32617 = cljs.core.seq(events);
var chunk__32618 = null;
var count__32619 = (0);
var i__32620 = (0);
while(true){
if((i__32620 < count__32619)){
var vec__32627 = chunk__32618.cljs$core$IIndexed$_nth$arity$2(null,i__32620);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32627,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33395 = seq__32617;
var G__33396 = chunk__32618;
var G__33397 = count__32619;
var G__33398 = (i__32620 + (1));
seq__32617 = G__33395;
chunk__32618 = G__33396;
count__32619 = G__33397;
i__32620 = G__33398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32617);
if(temp__5735__auto__){
var seq__32617__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32617__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32617__$1);
var G__33400 = cljs.core.chunk_rest(seq__32617__$1);
var G__33401 = c__4556__auto__;
var G__33402 = cljs.core.count(c__4556__auto__);
var G__33403 = (0);
seq__32617 = G__33400;
chunk__32618 = G__33401;
count__32619 = G__33402;
i__32620 = G__33403;
continue;
} else {
var vec__32631 = cljs.core.first(seq__32617__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32631,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33411 = cljs.core.next(seq__32617__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32617 = G__33411;
chunk__32618 = G__33412;
count__32619 = G__33413;
i__32620 = G__33414;
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
var seq__32635 = cljs.core.seq(styles);
var chunk__32636 = null;
var count__32637 = (0);
var i__32638 = (0);
while(true){
if((i__32638 < count__32637)){
var vec__32651 = chunk__32636.cljs$core$IIndexed$_nth$arity$2(null,i__32638);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33417 = seq__32635;
var G__33418 = chunk__32636;
var G__33419 = count__32637;
var G__33420 = (i__32638 + (1));
seq__32635 = G__33417;
chunk__32636 = G__33418;
count__32637 = G__33419;
i__32638 = G__33420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32635);
if(temp__5735__auto__){
var seq__32635__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32635__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32635__$1);
var G__33423 = cljs.core.chunk_rest(seq__32635__$1);
var G__33424 = c__4556__auto__;
var G__33425 = cljs.core.count(c__4556__auto__);
var G__33426 = (0);
seq__32635 = G__33423;
chunk__32636 = G__33424;
count__32637 = G__33425;
i__32638 = G__33426;
continue;
} else {
var vec__32663 = cljs.core.first(seq__32635__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33429 = cljs.core.next(seq__32635__$1);
var G__33430 = null;
var G__33431 = (0);
var G__33432 = (0);
seq__32635 = G__33429;
chunk__32636 = G__33430;
count__32637 = G__33431;
i__32638 = G__33432;
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
var G__32670_33433 = key;
var G__32670_33434__$1 = (((G__32670_33433 instanceof cljs.core.Keyword))?G__32670_33433.fqn:null);
switch (G__32670_33434__$1) {
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
var ks_33439 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33439,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33439,"aria-");
}
})())){
el.setAttribute(ks_33439,value);
} else {
(el[ks_33439] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32700){
var map__32702 = p__32700;
var map__32702__$1 = (((((!((map__32702 == null))))?(((((map__32702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32702):map__32702);
var props = map__32702__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32702__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32704 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32704,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32704,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32704,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32708 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32708,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32708;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32710 = arguments.length;
switch (G__32710) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32712){
var vec__32713 = p__32712;
var seq__32714 = cljs.core.seq(vec__32713);
var first__32715 = cljs.core.first(seq__32714);
var seq__32714__$1 = cljs.core.next(seq__32714);
var nn = first__32715;
var first__32715__$1 = cljs.core.first(seq__32714__$1);
var seq__32714__$2 = cljs.core.next(seq__32714__$1);
var np = first__32715__$1;
var nc = seq__32714__$2;
var node = vec__32713;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32719 = nn;
var G__32720 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32719,G__32720) : create_fn.call(null,G__32719,G__32720));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32723 = nn;
var G__32724 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32723,G__32724) : create_fn.call(null,G__32723,G__32724));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32727 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(1),null);
var seq__32731_33475 = cljs.core.seq(node_children);
var chunk__32732_33476 = null;
var count__32733_33477 = (0);
var i__32734_33478 = (0);
while(true){
if((i__32734_33478 < count__32733_33477)){
var child_struct_33479 = chunk__32732_33476.cljs$core$IIndexed$_nth$arity$2(null,i__32734_33478);
var children_33480 = shadow.dom.dom_node(child_struct_33479);
if(cljs.core.seq_QMARK_(children_33480)){
var seq__32767_33485 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33480));
var chunk__32769_33486 = null;
var count__32770_33487 = (0);
var i__32771_33488 = (0);
while(true){
if((i__32771_33488 < count__32770_33487)){
var child_33489 = chunk__32769_33486.cljs$core$IIndexed$_nth$arity$2(null,i__32771_33488);
if(cljs.core.truth_(child_33489)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33489);


var G__33491 = seq__32767_33485;
var G__33492 = chunk__32769_33486;
var G__33493 = count__32770_33487;
var G__33494 = (i__32771_33488 + (1));
seq__32767_33485 = G__33491;
chunk__32769_33486 = G__33492;
count__32770_33487 = G__33493;
i__32771_33488 = G__33494;
continue;
} else {
var G__33495 = seq__32767_33485;
var G__33496 = chunk__32769_33486;
var G__33497 = count__32770_33487;
var G__33498 = (i__32771_33488 + (1));
seq__32767_33485 = G__33495;
chunk__32769_33486 = G__33496;
count__32770_33487 = G__33497;
i__32771_33488 = G__33498;
continue;
}
} else {
var temp__5735__auto___33500 = cljs.core.seq(seq__32767_33485);
if(temp__5735__auto___33500){
var seq__32767_33501__$1 = temp__5735__auto___33500;
if(cljs.core.chunked_seq_QMARK_(seq__32767_33501__$1)){
var c__4556__auto___33503 = cljs.core.chunk_first(seq__32767_33501__$1);
var G__33504 = cljs.core.chunk_rest(seq__32767_33501__$1);
var G__33505 = c__4556__auto___33503;
var G__33506 = cljs.core.count(c__4556__auto___33503);
var G__33507 = (0);
seq__32767_33485 = G__33504;
chunk__32769_33486 = G__33505;
count__32770_33487 = G__33506;
i__32771_33488 = G__33507;
continue;
} else {
var child_33512 = cljs.core.first(seq__32767_33501__$1);
if(cljs.core.truth_(child_33512)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33512);


var G__33514 = cljs.core.next(seq__32767_33501__$1);
var G__33515 = null;
var G__33516 = (0);
var G__33517 = (0);
seq__32767_33485 = G__33514;
chunk__32769_33486 = G__33515;
count__32770_33487 = G__33516;
i__32771_33488 = G__33517;
continue;
} else {
var G__33519 = cljs.core.next(seq__32767_33501__$1);
var G__33520 = null;
var G__33521 = (0);
var G__33522 = (0);
seq__32767_33485 = G__33519;
chunk__32769_33486 = G__33520;
count__32770_33487 = G__33521;
i__32771_33488 = G__33522;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33480);
}


var G__33523 = seq__32731_33475;
var G__33524 = chunk__32732_33476;
var G__33525 = count__32733_33477;
var G__33526 = (i__32734_33478 + (1));
seq__32731_33475 = G__33523;
chunk__32732_33476 = G__33524;
count__32733_33477 = G__33525;
i__32734_33478 = G__33526;
continue;
} else {
var temp__5735__auto___33527 = cljs.core.seq(seq__32731_33475);
if(temp__5735__auto___33527){
var seq__32731_33528__$1 = temp__5735__auto___33527;
if(cljs.core.chunked_seq_QMARK_(seq__32731_33528__$1)){
var c__4556__auto___33529 = cljs.core.chunk_first(seq__32731_33528__$1);
var G__33530 = cljs.core.chunk_rest(seq__32731_33528__$1);
var G__33531 = c__4556__auto___33529;
var G__33532 = cljs.core.count(c__4556__auto___33529);
var G__33533 = (0);
seq__32731_33475 = G__33530;
chunk__32732_33476 = G__33531;
count__32733_33477 = G__33532;
i__32734_33478 = G__33533;
continue;
} else {
var child_struct_33535 = cljs.core.first(seq__32731_33528__$1);
var children_33537 = shadow.dom.dom_node(child_struct_33535);
if(cljs.core.seq_QMARK_(children_33537)){
var seq__32801_33538 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33537));
var chunk__32803_33539 = null;
var count__32804_33540 = (0);
var i__32805_33541 = (0);
while(true){
if((i__32805_33541 < count__32804_33540)){
var child_33543 = chunk__32803_33539.cljs$core$IIndexed$_nth$arity$2(null,i__32805_33541);
if(cljs.core.truth_(child_33543)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33543);


var G__33544 = seq__32801_33538;
var G__33545 = chunk__32803_33539;
var G__33546 = count__32804_33540;
var G__33547 = (i__32805_33541 + (1));
seq__32801_33538 = G__33544;
chunk__32803_33539 = G__33545;
count__32804_33540 = G__33546;
i__32805_33541 = G__33547;
continue;
} else {
var G__33552 = seq__32801_33538;
var G__33553 = chunk__32803_33539;
var G__33554 = count__32804_33540;
var G__33555 = (i__32805_33541 + (1));
seq__32801_33538 = G__33552;
chunk__32803_33539 = G__33553;
count__32804_33540 = G__33554;
i__32805_33541 = G__33555;
continue;
}
} else {
var temp__5735__auto___33556__$1 = cljs.core.seq(seq__32801_33538);
if(temp__5735__auto___33556__$1){
var seq__32801_33557__$1 = temp__5735__auto___33556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32801_33557__$1)){
var c__4556__auto___33558 = cljs.core.chunk_first(seq__32801_33557__$1);
var G__33559 = cljs.core.chunk_rest(seq__32801_33557__$1);
var G__33560 = c__4556__auto___33558;
var G__33561 = cljs.core.count(c__4556__auto___33558);
var G__33562 = (0);
seq__32801_33538 = G__33559;
chunk__32803_33539 = G__33560;
count__32804_33540 = G__33561;
i__32805_33541 = G__33562;
continue;
} else {
var child_33563 = cljs.core.first(seq__32801_33557__$1);
if(cljs.core.truth_(child_33563)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33563);


var G__33566 = cljs.core.next(seq__32801_33557__$1);
var G__33567 = null;
var G__33568 = (0);
var G__33569 = (0);
seq__32801_33538 = G__33566;
chunk__32803_33539 = G__33567;
count__32804_33540 = G__33568;
i__32805_33541 = G__33569;
continue;
} else {
var G__33570 = cljs.core.next(seq__32801_33557__$1);
var G__33571 = null;
var G__33572 = (0);
var G__33573 = (0);
seq__32801_33538 = G__33570;
chunk__32803_33539 = G__33571;
count__32804_33540 = G__33572;
i__32805_33541 = G__33573;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33537);
}


var G__33574 = cljs.core.next(seq__32731_33528__$1);
var G__33575 = null;
var G__33576 = (0);
var G__33577 = (0);
seq__32731_33475 = G__33574;
chunk__32732_33476 = G__33575;
count__32733_33477 = G__33576;
i__32734_33478 = G__33577;
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
var seq__32826 = cljs.core.seq(node);
var chunk__32827 = null;
var count__32828 = (0);
var i__32829 = (0);
while(true){
if((i__32829 < count__32828)){
var n = chunk__32827.cljs$core$IIndexed$_nth$arity$2(null,i__32829);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33587 = seq__32826;
var G__33588 = chunk__32827;
var G__33589 = count__32828;
var G__33590 = (i__32829 + (1));
seq__32826 = G__33587;
chunk__32827 = G__33588;
count__32828 = G__33589;
i__32829 = G__33590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32826);
if(temp__5735__auto__){
var seq__32826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32826__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32826__$1);
var G__33591 = cljs.core.chunk_rest(seq__32826__$1);
var G__33592 = c__4556__auto__;
var G__33593 = cljs.core.count(c__4556__auto__);
var G__33594 = (0);
seq__32826 = G__33591;
chunk__32827 = G__33592;
count__32828 = G__33593;
i__32829 = G__33594;
continue;
} else {
var n = cljs.core.first(seq__32826__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33595 = cljs.core.next(seq__32826__$1);
var G__33596 = null;
var G__33597 = (0);
var G__33598 = (0);
seq__32826 = G__33595;
chunk__32827 = G__33596;
count__32828 = G__33597;
i__32829 = G__33598;
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
var G__32837 = arguments.length;
switch (G__32837) {
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
var G__32843 = arguments.length;
switch (G__32843) {
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
var G__32850 = arguments.length;
switch (G__32850) {
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
var len__4736__auto___33643 = arguments.length;
var i__4737__auto___33644 = (0);
while(true){
if((i__4737__auto___33644 < len__4736__auto___33643)){
args__4742__auto__.push((arguments[i__4737__auto___33644]));

var G__33645 = (i__4737__auto___33644 + (1));
i__4737__auto___33644 = G__33645;
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
var seq__32868_33654 = cljs.core.seq(nodes);
var chunk__32869_33655 = null;
var count__32870_33656 = (0);
var i__32871_33657 = (0);
while(true){
if((i__32871_33657 < count__32870_33656)){
var node_33660 = chunk__32869_33655.cljs$core$IIndexed$_nth$arity$2(null,i__32871_33657);
fragment.appendChild(shadow.dom._to_dom(node_33660));


var G__33661 = seq__32868_33654;
var G__33662 = chunk__32869_33655;
var G__33663 = count__32870_33656;
var G__33664 = (i__32871_33657 + (1));
seq__32868_33654 = G__33661;
chunk__32869_33655 = G__33662;
count__32870_33656 = G__33663;
i__32871_33657 = G__33664;
continue;
} else {
var temp__5735__auto___33666 = cljs.core.seq(seq__32868_33654);
if(temp__5735__auto___33666){
var seq__32868_33667__$1 = temp__5735__auto___33666;
if(cljs.core.chunked_seq_QMARK_(seq__32868_33667__$1)){
var c__4556__auto___33668 = cljs.core.chunk_first(seq__32868_33667__$1);
var G__33669 = cljs.core.chunk_rest(seq__32868_33667__$1);
var G__33670 = c__4556__auto___33668;
var G__33671 = cljs.core.count(c__4556__auto___33668);
var G__33672 = (0);
seq__32868_33654 = G__33669;
chunk__32869_33655 = G__33670;
count__32870_33656 = G__33671;
i__32871_33657 = G__33672;
continue;
} else {
var node_33673 = cljs.core.first(seq__32868_33667__$1);
fragment.appendChild(shadow.dom._to_dom(node_33673));


var G__33674 = cljs.core.next(seq__32868_33667__$1);
var G__33675 = null;
var G__33676 = (0);
var G__33677 = (0);
seq__32868_33654 = G__33674;
chunk__32869_33655 = G__33675;
count__32870_33656 = G__33676;
i__32871_33657 = G__33677;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32867){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32867));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32883_33689 = cljs.core.seq(scripts);
var chunk__32884_33690 = null;
var count__32885_33691 = (0);
var i__32886_33692 = (0);
while(true){
if((i__32886_33692 < count__32885_33691)){
var vec__32902_33693 = chunk__32884_33690.cljs$core$IIndexed$_nth$arity$2(null,i__32886_33692);
var script_tag_33694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32902_33693,(0),null);
var script_body_33695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32902_33693,(1),null);
eval(script_body_33695);


var G__33698 = seq__32883_33689;
var G__33699 = chunk__32884_33690;
var G__33700 = count__32885_33691;
var G__33701 = (i__32886_33692 + (1));
seq__32883_33689 = G__33698;
chunk__32884_33690 = G__33699;
count__32885_33691 = G__33700;
i__32886_33692 = G__33701;
continue;
} else {
var temp__5735__auto___33702 = cljs.core.seq(seq__32883_33689);
if(temp__5735__auto___33702){
var seq__32883_33703__$1 = temp__5735__auto___33702;
if(cljs.core.chunked_seq_QMARK_(seq__32883_33703__$1)){
var c__4556__auto___33704 = cljs.core.chunk_first(seq__32883_33703__$1);
var G__33705 = cljs.core.chunk_rest(seq__32883_33703__$1);
var G__33706 = c__4556__auto___33704;
var G__33707 = cljs.core.count(c__4556__auto___33704);
var G__33708 = (0);
seq__32883_33689 = G__33705;
chunk__32884_33690 = G__33706;
count__32885_33691 = G__33707;
i__32886_33692 = G__33708;
continue;
} else {
var vec__32908_33709 = cljs.core.first(seq__32883_33703__$1);
var script_tag_33710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908_33709,(0),null);
var script_body_33711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908_33709,(1),null);
eval(script_body_33711);


var G__33712 = cljs.core.next(seq__32883_33703__$1);
var G__33713 = null;
var G__33714 = (0);
var G__33715 = (0);
seq__32883_33689 = G__33712;
chunk__32884_33690 = G__33713;
count__32885_33691 = G__33714;
i__32886_33692 = G__33715;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32911){
var vec__32912 = p__32911;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(1),null);
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
var G__32926 = arguments.length;
switch (G__32926) {
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
var seq__32938 = cljs.core.seq(style_keys);
var chunk__32939 = null;
var count__32940 = (0);
var i__32941 = (0);
while(true){
if((i__32941 < count__32940)){
var it = chunk__32939.cljs$core$IIndexed$_nth$arity$2(null,i__32941);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33730 = seq__32938;
var G__33731 = chunk__32939;
var G__33732 = count__32940;
var G__33733 = (i__32941 + (1));
seq__32938 = G__33730;
chunk__32939 = G__33731;
count__32940 = G__33732;
i__32941 = G__33733;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32938);
if(temp__5735__auto__){
var seq__32938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32938__$1);
var G__33735 = cljs.core.chunk_rest(seq__32938__$1);
var G__33736 = c__4556__auto__;
var G__33737 = cljs.core.count(c__4556__auto__);
var G__33738 = (0);
seq__32938 = G__33735;
chunk__32939 = G__33736;
count__32940 = G__33737;
i__32941 = G__33738;
continue;
} else {
var it = cljs.core.first(seq__32938__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33743 = cljs.core.next(seq__32938__$1);
var G__33744 = null;
var G__33745 = (0);
var G__33746 = (0);
seq__32938 = G__33743;
chunk__32939 = G__33744;
count__32940 = G__33745;
i__32941 = G__33746;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32952,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32956 = k32952;
var G__32956__$1 = (((G__32956 instanceof cljs.core.Keyword))?G__32956.fqn:null);
switch (G__32956__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32952,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32957){
var vec__32958 = p__32957;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32958,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32958,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32951){
var self__ = this;
var G__32951__$1 = this;
return (new cljs.core.RecordIter((0),G__32951__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32953,other32954){
var self__ = this;
var this32953__$1 = this;
return (((!((other32954 == null)))) && ((this32953__$1.constructor === other32954.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32953__$1.x,other32954.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32953__$1.y,other32954.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32953__$1.__extmap,other32954.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32951){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32985 = cljs.core.keyword_identical_QMARK_;
var expr__32986 = k__4388__auto__;
if(cljs.core.truth_((pred__32985.cljs$core$IFn$_invoke$arity$2 ? pred__32985.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32986) : pred__32985.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32986)))){
return (new shadow.dom.Coordinate(G__32951,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32985.cljs$core$IFn$_invoke$arity$2 ? pred__32985.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32986) : pred__32985.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32986)))){
return (new shadow.dom.Coordinate(self__.x,G__32951,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32951),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32951){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32951,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32955){
var extmap__4419__auto__ = (function (){var G__32989 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32955,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32989);
} else {
return G__32989;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32955),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32955),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33001,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33007 = k33001;
var G__33007__$1 = (((G__33007 instanceof cljs.core.Keyword))?G__33007.fqn:null);
switch (G__33007__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33001,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33008){
var vec__33009 = p__33008;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33000){
var self__ = this;
var G__33000__$1 = this;
return (new cljs.core.RecordIter((0),G__33000__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33002,other33003){
var self__ = this;
var this33002__$1 = this;
return (((!((other33003 == null)))) && ((this33002__$1.constructor === other33003.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33002__$1.w,other33003.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33002__$1.h,other33003.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33002__$1.__extmap,other33003.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33000){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33023 = cljs.core.keyword_identical_QMARK_;
var expr__33024 = k__4388__auto__;
if(cljs.core.truth_((pred__33023.cljs$core$IFn$_invoke$arity$2 ? pred__33023.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33024) : pred__33023.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33024)))){
return (new shadow.dom.Size(G__33000,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33023.cljs$core$IFn$_invoke$arity$2 ? pred__33023.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33024) : pred__33023.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33024)))){
return (new shadow.dom.Size(self__.w,G__33000,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33000),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33000){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33000,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33004){
var extmap__4419__auto__ = (function (){var G__33034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33004,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33004)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33034);
} else {
return G__33034;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33004),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33004),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__33835 = (i + (1));
var G__33836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33835;
ret = G__33836;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33050){
var vec__33051 = p__33050;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33055 = arguments.length;
switch (G__33055) {
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
var G__33849 = ps;
var G__33850 = (i + (1));
el__$1 = G__33849;
i = G__33850;
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
var vec__33116 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33123_33854 = cljs.core.seq(props);
var chunk__33126_33855 = null;
var count__33127_33856 = (0);
var i__33128_33857 = (0);
while(true){
if((i__33128_33857 < count__33127_33856)){
var vec__33147_33859 = chunk__33126_33855.cljs$core$IIndexed$_nth$arity$2(null,i__33128_33857);
var k_33860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147_33859,(0),null);
var v_33861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147_33859,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33860);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33860),v_33861);


var G__33863 = seq__33123_33854;
var G__33864 = chunk__33126_33855;
var G__33865 = count__33127_33856;
var G__33866 = (i__33128_33857 + (1));
seq__33123_33854 = G__33863;
chunk__33126_33855 = G__33864;
count__33127_33856 = G__33865;
i__33128_33857 = G__33866;
continue;
} else {
var temp__5735__auto___33867 = cljs.core.seq(seq__33123_33854);
if(temp__5735__auto___33867){
var seq__33123_33868__$1 = temp__5735__auto___33867;
if(cljs.core.chunked_seq_QMARK_(seq__33123_33868__$1)){
var c__4556__auto___33869 = cljs.core.chunk_first(seq__33123_33868__$1);
var G__33870 = cljs.core.chunk_rest(seq__33123_33868__$1);
var G__33871 = c__4556__auto___33869;
var G__33872 = cljs.core.count(c__4556__auto___33869);
var G__33873 = (0);
seq__33123_33854 = G__33870;
chunk__33126_33855 = G__33871;
count__33127_33856 = G__33872;
i__33128_33857 = G__33873;
continue;
} else {
var vec__33150_33874 = cljs.core.first(seq__33123_33868__$1);
var k_33875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33150_33874,(0),null);
var v_33876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33150_33874,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33875);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33875),v_33876);


var G__33877 = cljs.core.next(seq__33123_33868__$1);
var G__33878 = null;
var G__33879 = (0);
var G__33880 = (0);
seq__33123_33854 = G__33877;
chunk__33126_33855 = G__33878;
count__33127_33856 = G__33879;
i__33128_33857 = G__33880;
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
var vec__33156 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33156,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33156,(1),null);
var seq__33159_33898 = cljs.core.seq(node_children);
var chunk__33161_33899 = null;
var count__33162_33900 = (0);
var i__33163_33901 = (0);
while(true){
if((i__33163_33901 < count__33162_33900)){
var child_struct_33904 = chunk__33161_33899.cljs$core$IIndexed$_nth$arity$2(null,i__33163_33901);
if((!((child_struct_33904 == null)))){
if(typeof child_struct_33904 === 'string'){
var text_33905 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33905),child_struct_33904].join(''));
} else {
var children_33907 = shadow.dom.svg_node(child_struct_33904);
if(cljs.core.seq_QMARK_(children_33907)){
var seq__33188_33908 = cljs.core.seq(children_33907);
var chunk__33190_33909 = null;
var count__33191_33910 = (0);
var i__33192_33911 = (0);
while(true){
if((i__33192_33911 < count__33191_33910)){
var child_33912 = chunk__33190_33909.cljs$core$IIndexed$_nth$arity$2(null,i__33192_33911);
if(cljs.core.truth_(child_33912)){
node.appendChild(child_33912);


var G__33914 = seq__33188_33908;
var G__33915 = chunk__33190_33909;
var G__33916 = count__33191_33910;
var G__33917 = (i__33192_33911 + (1));
seq__33188_33908 = G__33914;
chunk__33190_33909 = G__33915;
count__33191_33910 = G__33916;
i__33192_33911 = G__33917;
continue;
} else {
var G__33944 = seq__33188_33908;
var G__33945 = chunk__33190_33909;
var G__33946 = count__33191_33910;
var G__33947 = (i__33192_33911 + (1));
seq__33188_33908 = G__33944;
chunk__33190_33909 = G__33945;
count__33191_33910 = G__33946;
i__33192_33911 = G__33947;
continue;
}
} else {
var temp__5735__auto___33949 = cljs.core.seq(seq__33188_33908);
if(temp__5735__auto___33949){
var seq__33188_33951__$1 = temp__5735__auto___33949;
if(cljs.core.chunked_seq_QMARK_(seq__33188_33951__$1)){
var c__4556__auto___33955 = cljs.core.chunk_first(seq__33188_33951__$1);
var G__33956 = cljs.core.chunk_rest(seq__33188_33951__$1);
var G__33957 = c__4556__auto___33955;
var G__33958 = cljs.core.count(c__4556__auto___33955);
var G__33959 = (0);
seq__33188_33908 = G__33956;
chunk__33190_33909 = G__33957;
count__33191_33910 = G__33958;
i__33192_33911 = G__33959;
continue;
} else {
var child_33961 = cljs.core.first(seq__33188_33951__$1);
if(cljs.core.truth_(child_33961)){
node.appendChild(child_33961);


var G__33962 = cljs.core.next(seq__33188_33951__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33188_33908 = G__33962;
chunk__33190_33909 = G__33963;
count__33191_33910 = G__33964;
i__33192_33911 = G__33965;
continue;
} else {
var G__33966 = cljs.core.next(seq__33188_33951__$1);
var G__33967 = null;
var G__33968 = (0);
var G__33969 = (0);
seq__33188_33908 = G__33966;
chunk__33190_33909 = G__33967;
count__33191_33910 = G__33968;
i__33192_33911 = G__33969;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33907);
}
}


var G__33971 = seq__33159_33898;
var G__33972 = chunk__33161_33899;
var G__33973 = count__33162_33900;
var G__33974 = (i__33163_33901 + (1));
seq__33159_33898 = G__33971;
chunk__33161_33899 = G__33972;
count__33162_33900 = G__33973;
i__33163_33901 = G__33974;
continue;
} else {
var G__33975 = seq__33159_33898;
var G__33976 = chunk__33161_33899;
var G__33977 = count__33162_33900;
var G__33978 = (i__33163_33901 + (1));
seq__33159_33898 = G__33975;
chunk__33161_33899 = G__33976;
count__33162_33900 = G__33977;
i__33163_33901 = G__33978;
continue;
}
} else {
var temp__5735__auto___33979 = cljs.core.seq(seq__33159_33898);
if(temp__5735__auto___33979){
var seq__33159_33980__$1 = temp__5735__auto___33979;
if(cljs.core.chunked_seq_QMARK_(seq__33159_33980__$1)){
var c__4556__auto___33982 = cljs.core.chunk_first(seq__33159_33980__$1);
var G__33983 = cljs.core.chunk_rest(seq__33159_33980__$1);
var G__33984 = c__4556__auto___33982;
var G__33985 = cljs.core.count(c__4556__auto___33982);
var G__33986 = (0);
seq__33159_33898 = G__33983;
chunk__33161_33899 = G__33984;
count__33162_33900 = G__33985;
i__33163_33901 = G__33986;
continue;
} else {
var child_struct_33987 = cljs.core.first(seq__33159_33980__$1);
if((!((child_struct_33987 == null)))){
if(typeof child_struct_33987 === 'string'){
var text_33989 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33989),child_struct_33987].join(''));
} else {
var children_33992 = shadow.dom.svg_node(child_struct_33987);
if(cljs.core.seq_QMARK_(children_33992)){
var seq__33205_33993 = cljs.core.seq(children_33992);
var chunk__33207_33994 = null;
var count__33208_33995 = (0);
var i__33209_33996 = (0);
while(true){
if((i__33209_33996 < count__33208_33995)){
var child_33997 = chunk__33207_33994.cljs$core$IIndexed$_nth$arity$2(null,i__33209_33996);
if(cljs.core.truth_(child_33997)){
node.appendChild(child_33997);


var G__33998 = seq__33205_33993;
var G__33999 = chunk__33207_33994;
var G__34000 = count__33208_33995;
var G__34001 = (i__33209_33996 + (1));
seq__33205_33993 = G__33998;
chunk__33207_33994 = G__33999;
count__33208_33995 = G__34000;
i__33209_33996 = G__34001;
continue;
} else {
var G__34002 = seq__33205_33993;
var G__34003 = chunk__33207_33994;
var G__34004 = count__33208_33995;
var G__34005 = (i__33209_33996 + (1));
seq__33205_33993 = G__34002;
chunk__33207_33994 = G__34003;
count__33208_33995 = G__34004;
i__33209_33996 = G__34005;
continue;
}
} else {
var temp__5735__auto___34014__$1 = cljs.core.seq(seq__33205_33993);
if(temp__5735__auto___34014__$1){
var seq__33205_34018__$1 = temp__5735__auto___34014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33205_34018__$1)){
var c__4556__auto___34020 = cljs.core.chunk_first(seq__33205_34018__$1);
var G__34021 = cljs.core.chunk_rest(seq__33205_34018__$1);
var G__34022 = c__4556__auto___34020;
var G__34023 = cljs.core.count(c__4556__auto___34020);
var G__34024 = (0);
seq__33205_33993 = G__34021;
chunk__33207_33994 = G__34022;
count__33208_33995 = G__34023;
i__33209_33996 = G__34024;
continue;
} else {
var child_34026 = cljs.core.first(seq__33205_34018__$1);
if(cljs.core.truth_(child_34026)){
node.appendChild(child_34026);


var G__34027 = cljs.core.next(seq__33205_34018__$1);
var G__34028 = null;
var G__34029 = (0);
var G__34030 = (0);
seq__33205_33993 = G__34027;
chunk__33207_33994 = G__34028;
count__33208_33995 = G__34029;
i__33209_33996 = G__34030;
continue;
} else {
var G__34031 = cljs.core.next(seq__33205_34018__$1);
var G__34032 = null;
var G__34033 = (0);
var G__34034 = (0);
seq__33205_33993 = G__34031;
chunk__33207_33994 = G__34032;
count__33208_33995 = G__34033;
i__33209_33996 = G__34034;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33992);
}
}


var G__34035 = cljs.core.next(seq__33159_33980__$1);
var G__34036 = null;
var G__34037 = (0);
var G__34038 = (0);
seq__33159_33898 = G__34035;
chunk__33161_33899 = G__34036;
count__33162_33900 = G__34037;
i__33163_33901 = G__34038;
continue;
} else {
var G__34041 = cljs.core.next(seq__33159_33980__$1);
var G__34042 = null;
var G__34043 = (0);
var G__34044 = (0);
seq__33159_33898 = G__34041;
chunk__33161_33899 = G__34042;
count__33162_33900 = G__34043;
i__33163_33901 = G__34044;
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
var len__4736__auto___34051 = arguments.length;
var i__4737__auto___34052 = (0);
while(true){
if((i__4737__auto___34052 < len__4736__auto___34051)){
args__4742__auto__.push((arguments[i__4737__auto___34052]));

var G__34053 = (i__4737__auto___34052 + (1));
i__4737__auto___34052 = G__34053;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33268){
var G__33269 = cljs.core.first(seq33268);
var seq33268__$1 = cljs.core.next(seq33268);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33269,seq33268__$1);
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
var G__33281 = arguments.length;
switch (G__33281) {
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
var c__29669__auto___34083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_33286){
var state_val_33287 = (state_33286[(1)]);
if((state_val_33287 === (1))){
var state_33286__$1 = state_33286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33286__$1,(2),once_or_cleanup);
} else {
if((state_val_33287 === (2))){
var inst_33283 = (state_33286[(2)]);
var inst_33284 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33286__$1 = (function (){var statearr_33288 = state_33286;
(statearr_33288[(7)] = inst_33283);

return statearr_33288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33286__$1,inst_33284);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29566__auto__ = null;
var shadow$dom$state_machine__29566__auto____0 = (function (){
var statearr_33289 = [null,null,null,null,null,null,null,null];
(statearr_33289[(0)] = shadow$dom$state_machine__29566__auto__);

(statearr_33289[(1)] = (1));

return statearr_33289;
});
var shadow$dom$state_machine__29566__auto____1 = (function (state_33286){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_33286);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e33290){var ex__29569__auto__ = e33290;
var statearr_33291_34092 = state_33286;
(statearr_33291_34092[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_33286[(4)]))){
var statearr_33292_34093 = state_33286;
(statearr_33292_34093[(1)] = cljs.core.first((state_33286[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_33286;
state_33286 = G__34095;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
shadow$dom$state_machine__29566__auto__ = function(state_33286){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29566__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29566__auto____1.call(this,state_33286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29566__auto____0;
shadow$dom$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29566__auto____1;
return shadow$dom$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_33293 = f__29670__auto__();
(statearr_33293[(6)] = c__29669__auto___34083);

return statearr_33293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
