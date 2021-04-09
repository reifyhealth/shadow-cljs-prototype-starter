goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_33641 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.object._id[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.object._id["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_33641(this$);
}
});

var shadow$object$IObject$_type$dyn_33653 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.object._type[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.object._type["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_33653(this$);
}
});

var shadow$object$IObject$_data$dyn_33654 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.object._data[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.object._data["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_33654(this$);
}
});

var shadow$object$IObject$_update$dyn_33655 = (function (this$,update_fn){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.object._update[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4464__auto__.call(null,this$,update_fn));
} else {
var m__4461__auto__ = (shadow.object._update["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4461__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_33655(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_33656 = (function (this$,cause){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4464__auto__.call(null,this$,cause));
} else {
var m__4461__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4461__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_33656(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4160__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__33677 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__33677;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32750_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__32750_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32769_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__32769_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__32775){
var map__32780 = p__32775;
var map__32780__$1 = cljs.core.__destructure_map(map__32780);
var oref = map__32780__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32780__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__32799 = arguments.length;
switch (G__32799) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32789_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__32789_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__33702 = parent;
dom = G__33702;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33710 = arguments.length;
var i__4772__auto___33711 = (0);
while(true){
if((i__4772__auto___33711 < len__4771__auto___33710)){
args__4777__auto__.push((arguments[i__4772__auto___33711]));

var G__33712 = (i__4772__auto___33711 + (1));
i__4772__auto___33711 = G__33712;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__32871 = cljs.core.seq(reactions_to_trigger);
var chunk__32872 = null;
var count__32873 = (0);
var i__32874 = (0);
while(true){
if((i__32874 < count__32873)){
var rfn = chunk__32872.cljs$core$IIndexed$_nth$arity$2(null,i__32874);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__33716 = seq__32871;
var G__33717 = chunk__32872;
var G__33718 = count__32873;
var G__33719 = (i__32874 + (1));
seq__32871 = G__33716;
chunk__32872 = G__33717;
count__32873 = G__33718;
i__32874 = G__33719;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__32871);
if(temp__5735__auto____$1){
var seq__32871__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32871__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32871__$1);
var G__33720 = cljs.core.chunk_rest(seq__32871__$1);
var G__33721 = c__4591__auto__;
var G__33722 = cljs.core.count(c__4591__auto__);
var G__33723 = (0);
seq__32871 = G__33720;
chunk__32872 = G__33721;
count__32873 = G__33722;
i__32874 = G__33723;
continue;
} else {
var rfn = cljs.core.first(seq__32871__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__33724 = cljs.core.next(seq__32871__$1);
var G__33725 = null;
var G__33726 = (0);
var G__33727 = (0);
seq__32871 = G__33724;
chunk__32872 = G__33725;
count__32873 = G__33726;
i__32874 = G__33727;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq32853){
var G__32854 = cljs.core.first(seq32853);
var seq32853__$1 = cljs.core.next(seq32853);
var G__32855 = cljs.core.first(seq32853__$1);
var seq32853__$2 = cljs.core.next(seq32853__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32854,G__32855,seq32853__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__32919_33738 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__32920_33739 = null;
var count__32921_33740 = (0);
var i__32922_33741 = (0);
while(true){
if((i__32922_33741 < count__32921_33740)){
var child_33743 = chunk__32920_33739.cljs$core$IIndexed$_nth$arity$2(null,i__32922_33741);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_33743,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_33743,ev,notify_fn));


var G__33744 = seq__32919_33738;
var G__33745 = chunk__32920_33739;
var G__33746 = count__32921_33740;
var G__33747 = (i__32922_33741 + (1));
seq__32919_33738 = G__33744;
chunk__32920_33739 = G__33745;
count__32921_33740 = G__33746;
i__32922_33741 = G__33747;
continue;
} else {
var temp__5735__auto___33748 = cljs.core.seq(seq__32919_33738);
if(temp__5735__auto___33748){
var seq__32919_33749__$1 = temp__5735__auto___33748;
if(cljs.core.chunked_seq_QMARK_(seq__32919_33749__$1)){
var c__4591__auto___33750 = cljs.core.chunk_first(seq__32919_33749__$1);
var G__33751 = cljs.core.chunk_rest(seq__32919_33749__$1);
var G__33752 = c__4591__auto___33750;
var G__33753 = cljs.core.count(c__4591__auto___33750);
var G__33754 = (0);
seq__32919_33738 = G__33751;
chunk__32920_33739 = G__33752;
count__32921_33740 = G__33753;
i__32922_33741 = G__33754;
continue;
} else {
var child_33755 = cljs.core.first(seq__32919_33749__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_33755,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_33755,ev,notify_fn));


var G__33757 = cljs.core.next(seq__32919_33749__$1);
var G__33758 = null;
var G__33759 = (0);
var G__33760 = (0);
seq__32919_33738 = G__33757;
chunk__32920_33739 = G__33758;
count__32921_33740 = G__33759;
i__32922_33741 = G__33760;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33761 = arguments.length;
var i__4772__auto___33762 = (0);
while(true){
if((i__4772__auto___33762 < len__4771__auto___33761)){
args__4777__auto__.push((arguments[i__4772__auto___33762]));

var G__33763 = (i__4772__auto___33762 + (1));
i__4772__auto___33762 = G__33763;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq32937){
var G__32938 = cljs.core.first(seq32937);
var seq32937__$1 = cljs.core.next(seq32937);
var G__32939 = cljs.core.first(seq32937__$1);
var seq32937__$2 = cljs.core.next(seq32937__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32938,G__32939,seq32937__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33800 = arguments.length;
var i__4772__auto___33801 = (0);
while(true){
if((i__4772__auto___33801 < len__4771__auto___33800)){
args__4777__auto__.push((arguments[i__4772__auto___33801]));

var G__33806 = (i__4772__auto___33801 + (1));
i__4772__auto___33801 = G__33806;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__33807 = shadow.object.get_parent(current);
current = G__33807;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq32956){
var G__32957 = cljs.core.first(seq32956);
var seq32956__$1 = cljs.core.next(seq32956);
var G__32958 = cljs.core.first(seq32956__$1);
var seq32956__$2 = cljs.core.next(seq32956__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32957,G__32958,seq32956__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33808 = arguments.length;
var i__4772__auto___33809 = (0);
while(true){
if((i__4772__auto___33809 < len__4771__auto___33808)){
args__4777__auto__.push((arguments[i__4772__auto___33809]));

var G__33810 = (i__4772__auto___33809 + (1));
i__4772__auto___33809 = G__33810;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq32987){
var G__32988 = cljs.core.first(seq32987);
var seq32987__$1 = cljs.core.next(seq32987);
var G__32989 = cljs.core.first(seq32987__$1);
var seq32987__$2 = cljs.core.next(seq32987__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32988,G__32989,seq32987__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__33068 = this$;
var G__33069 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__33068,G__33069) : custom_remove.call(null,G__33068,G__33069));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__33082 = arguments.length;
switch (G__33082) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__33085 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__33086 = null;
var count__33087 = (0);
var i__33088 = (0);
while(true){
if((i__33088 < count__33087)){
var vec__33128 = chunk__33086.cljs$core$IIndexed$_nth$arity$2(null,i__33088);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33128,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33128,(1),null);
var ev_def = vec__33128;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_33827__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__33085,chunk__33086,count__33087,i__33088,vec__33128,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__33085,chunk__33086,count__33087,i__33088,vec__33128,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__33085,chunk__33086,count__33087,i__33088,handler_33827__$1,vec__33128,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_33827__$1.cljs$core$IFn$_invoke$arity$3 ? handler_33827__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_33827__$1.call(null,oref,e,el));
});})(seq__33085,chunk__33086,count__33087,i__33088,handler_33827__$1,vec__33128,ev,handler,ev_def))
);


var G__33828 = seq__33085;
var G__33829 = chunk__33086;
var G__33830 = count__33087;
var G__33831 = (i__33088 + (1));
seq__33085 = G__33828;
chunk__33086 = G__33829;
count__33087 = G__33830;
i__33088 = G__33831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33085);
if(temp__5735__auto__){
var seq__33085__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33085__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33085__$1);
var G__33832 = cljs.core.chunk_rest(seq__33085__$1);
var G__33833 = c__4591__auto__;
var G__33834 = cljs.core.count(c__4591__auto__);
var G__33835 = (0);
seq__33085 = G__33832;
chunk__33086 = G__33833;
count__33087 = G__33834;
i__33088 = G__33835;
continue;
} else {
var vec__33137 = cljs.core.first(seq__33085__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(1),null);
var ev_def = vec__33137;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_33836__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__33085,chunk__33086,count__33087,i__33088,vec__33137,ev,handler,ev_def,seq__33085__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__33085,chunk__33086,count__33087,i__33088,vec__33137,ev,handler,ev_def,seq__33085__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__33085,chunk__33086,count__33087,i__33088,handler_33836__$1,vec__33137,ev,handler,ev_def,seq__33085__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_33836__$1.cljs$core$IFn$_invoke$arity$3 ? handler_33836__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_33836__$1.call(null,oref,e,el));
});})(seq__33085,chunk__33086,count__33087,i__33088,handler_33836__$1,vec__33137,ev,handler,ev_def,seq__33085__$1,temp__5735__auto__))
);


var G__33838 = cljs.core.next(seq__33085__$1);
var G__33839 = null;
var G__33840 = (0);
var G__33841 = (0);
seq__33085 = G__33838;
chunk__33086 = G__33839;
count__33087 = G__33840;
i__33088 = G__33841;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__33146){
var vec__33147 = p__33146;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = event;
if(cljs.core.truth_(and__4149__auto__)){
return handler;
} else {
return and__4149__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33872 = arguments.length;
var i__4772__auto___33873 = (0);
while(true){
if((i__4772__auto___33873 < len__4771__auto___33872)){
args__4777__auto__.push((arguments[i__4772__auto___33873]));

var G__33877 = (i__4772__auto___33873 + (1));
i__4772__auto___33873 = G__33877;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e33159){if((e33159 instanceof Object)){
var e = e33159;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e33159;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq33154){
var G__33155 = cljs.core.first(seq33154);
var seq33154__$1 = cljs.core.next(seq33154);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33155,seq33154__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__33162 = arguments.length;
switch (G__33162) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__33165 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__33165) : shadow.dom.build.call(null,G__33165));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k33170,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__33175 = k33170;
var G__33175__$1 = (((G__33175 instanceof cljs.core.Keyword))?G__33175.fqn:null);
switch (G__33175__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33170,else__4418__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__33176){
var vec__33177 = p__33176;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33177,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33177,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.object.Watch{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33169){
var self__ = this;
var G__33169__$1 = this;
return (new cljs.core.RecordIter((0),G__33169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33171,other33172){
var self__ = this;
var this33171__$1 = this;
return (((!((other33172 == null)))) && ((this33171__$1.constructor === other33172.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33171__$1.key,other33172.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33171__$1.handler,other33172.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33171__$1.__extmap,other33172.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__33169){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__33187 = cljs.core.keyword_identical_QMARK_;
var expr__33188 = k__4423__auto__;
if(cljs.core.truth_((pred__33187.cljs$core$IFn$_invoke$arity$2 ? pred__33187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__33188) : pred__33187.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__33188)))){
return (new shadow.object.Watch(G__33169,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33187.cljs$core$IFn$_invoke$arity$2 ? pred__33187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__33188) : pred__33187.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__33188)))){
return (new shadow.object.Watch(self__.key,G__33169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__33169),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__33169){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__33169,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__33174){
var extmap__4454__auto__ = (function (){var G__33194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33174,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__33174)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33194);
} else {
return G__33194;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__33174),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__33174),null,cljs.core.not_empty(extmap__4454__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__33197_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__33197_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__33220 = cljs.core.seq(self__.watches);
var chunk__33221 = null;
var count__33222 = (0);
var i__33223 = (0);
while(true){
if((i__33223 < count__33222)){
var map__33233 = chunk__33221.cljs$core$IIndexed$_nth$arity$2(null,i__33223);
var map__33233__$1 = cljs.core.__destructure_map(map__33233);
var watch = map__33233__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33233__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33233__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__33929 = seq__33220;
var G__33930 = chunk__33221;
var G__33931 = count__33222;
var G__33932 = (i__33223 + (1));
seq__33220 = G__33929;
chunk__33221 = G__33930;
count__33222 = G__33931;
i__33223 = G__33932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33220);
if(temp__5735__auto__){
var seq__33220__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33220__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33220__$1);
var G__33933 = cljs.core.chunk_rest(seq__33220__$1);
var G__33934 = c__4591__auto__;
var G__33935 = cljs.core.count(c__4591__auto__);
var G__33936 = (0);
seq__33220 = G__33933;
chunk__33221 = G__33934;
count__33222 = G__33935;
i__33223 = G__33936;
continue;
} else {
var map__33240 = cljs.core.first(seq__33220__$1);
var map__33240__$1 = cljs.core.__destructure_map(map__33240);
var watch = map__33240__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33240__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33240__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__33938 = cljs.core.next(seq__33220__$1);
var G__33939 = null;
var G__33940 = (0);
var G__33941 = (0);
seq__33220 = G__33938;
chunk__33221 = G__33939;
count__33222 = G__33940;
i__33223 = G__33941;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__33244_33942 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__33245_33943 = null;
var count__33246_33944 = (0);
var i__33247_33945 = (0);
while(true){
if((i__33247_33945 < count__33246_33944)){
var child_33946 = chunk__33245_33943.cljs$core$IIndexed$_nth$arity$2(null,i__33247_33945);
shadow.object._destroy_BANG_(child_33946,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__33947 = seq__33244_33942;
var G__33948 = chunk__33245_33943;
var G__33949 = count__33246_33944;
var G__33950 = (i__33247_33945 + (1));
seq__33244_33942 = G__33947;
chunk__33245_33943 = G__33948;
count__33246_33944 = G__33949;
i__33247_33945 = G__33950;
continue;
} else {
var temp__5735__auto___33951 = cljs.core.seq(seq__33244_33942);
if(temp__5735__auto___33951){
var seq__33244_33952__$1 = temp__5735__auto___33951;
if(cljs.core.chunked_seq_QMARK_(seq__33244_33952__$1)){
var c__4591__auto___33953 = cljs.core.chunk_first(seq__33244_33952__$1);
var G__33954 = cljs.core.chunk_rest(seq__33244_33952__$1);
var G__33955 = c__4591__auto___33953;
var G__33956 = cljs.core.count(c__4591__auto___33953);
var G__33957 = (0);
seq__33244_33942 = G__33954;
chunk__33245_33943 = G__33955;
count__33246_33944 = G__33956;
i__33247_33945 = G__33957;
continue;
} else {
var child_33958 = cljs.core.first(seq__33244_33952__$1);
shadow.object._destroy_BANG_(child_33958,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__33959 = cljs.core.next(seq__33244_33952__$1);
var G__33960 = null;
var G__33961 = (0);
var G__33962 = (0);
seq__33244_33942 = G__33959;
chunk__33245_33943 = G__33960;
count__33246_33944 = G__33961;
i__33247_33945 = G__33962;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_33963 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_33963 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_33963);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__33307 = arguments.length;
switch (G__33307) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__33361 = arguments.length;
switch (G__33361) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34003 = arguments.length;
var i__4772__auto___34005 = (0);
while(true){
if((i__4772__auto___34005 < len__4771__auto___34003)){
args__4777__auto__.push((arguments[i__4772__auto___34005]));

var G__34006 = (i__4772__auto___34005 + (1));
i__4772__auto___34005 = G__34006;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_34023 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___34024 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___34024)){
var dom_34025 = temp__5733__auto___34024;
shadow.dom.set_data(dom_34025,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_34025,dom_events_34023);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_34025], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_34025], 0));
} else {
var temp__5735__auto___34026 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___34026)){
var dom_fn_34027 = temp__5735__auto___34026;
var dom_34028 = (function (){var G__33432 = (dom_fn_34027.cljs$core$IFn$_invoke$arity$2 ? dom_fn_34027.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_34027.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__33432) : shadow.dom.build.call(null,G__33432));
})();
shadow.dom.set_data(dom_34028,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_34028], 0));

shadow.object.bind_dom_events(oref,dom_34028,dom_events_34023);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_34028], 0));
} else {
}
}

var temp__5735__auto___34038 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___34038)){
var watches_34041 = temp__5735__auto___34038;
var seq__33433_34042 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_34041));
var chunk__33434_34043 = null;
var count__33435_34044 = (0);
var i__33436_34045 = (0);
while(true){
if((i__33436_34045 < count__33435_34044)){
var vec__33451_34047 = chunk__33434_34043.cljs$core$IIndexed$_nth$arity$2(null,i__33436_34045);
var attr_34048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451_34047,(0),null);
var handler_34049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451_34047,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_34048,((function (seq__33433_34042,chunk__33434_34043,count__33435_34044,i__33436_34045,vec__33451_34047,attr_34048,handler_34049,watches_34041,temp__5735__auto___34038,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_34049.cljs$core$IFn$_invoke$arity$3 ? handler_34049.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_34049.call(null,oref,old,new$));
});})(seq__33433_34042,chunk__33434_34043,count__33435_34044,i__33436_34045,vec__33451_34047,attr_34048,handler_34049,watches_34041,temp__5735__auto___34038,oid,parent,result_chan,odef,obj,oref))
);


var G__34050 = seq__33433_34042;
var G__34051 = chunk__33434_34043;
var G__34052 = count__33435_34044;
var G__34053 = (i__33436_34045 + (1));
seq__33433_34042 = G__34050;
chunk__33434_34043 = G__34051;
count__33435_34044 = G__34052;
i__33436_34045 = G__34053;
continue;
} else {
var temp__5735__auto___34054__$1 = cljs.core.seq(seq__33433_34042);
if(temp__5735__auto___34054__$1){
var seq__33433_34055__$1 = temp__5735__auto___34054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33433_34055__$1)){
var c__4591__auto___34056 = cljs.core.chunk_first(seq__33433_34055__$1);
var G__34057 = cljs.core.chunk_rest(seq__33433_34055__$1);
var G__34058 = c__4591__auto___34056;
var G__34059 = cljs.core.count(c__4591__auto___34056);
var G__34060 = (0);
seq__33433_34042 = G__34057;
chunk__33434_34043 = G__34058;
count__33435_34044 = G__34059;
i__33436_34045 = G__34060;
continue;
} else {
var vec__33457_34061 = cljs.core.first(seq__33433_34055__$1);
var attr_34062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33457_34061,(0),null);
var handler_34063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33457_34061,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_34062,((function (seq__33433_34042,chunk__33434_34043,count__33435_34044,i__33436_34045,vec__33457_34061,attr_34062,handler_34063,seq__33433_34055__$1,temp__5735__auto___34054__$1,watches_34041,temp__5735__auto___34038,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_34063.cljs$core$IFn$_invoke$arity$3 ? handler_34063.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_34063.call(null,oref,old,new$));
});})(seq__33433_34042,chunk__33434_34043,count__33435_34044,i__33436_34045,vec__33457_34061,attr_34062,handler_34063,seq__33433_34055__$1,temp__5735__auto___34054__$1,watches_34041,temp__5735__auto___34038,oid,parent,result_chan,odef,obj,oref))
);


var G__34072 = cljs.core.next(seq__33433_34055__$1);
var G__34073 = null;
var G__34074 = (0);
var G__34075 = (0);
seq__33433_34042 = G__34072;
chunk__33434_34043 = G__34073;
count__33435_34044 = G__34074;
i__33436_34045 = G__34075;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq33415){
var G__33416 = cljs.core.first(seq33415);
var seq33415__$1 = cljs.core.next(seq33415);
var G__33417 = cljs.core.first(seq33415__$1);
var seq33415__$2 = cljs.core.next(seq33415__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33416,G__33417,seq33415__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__33464 = arguments.length;
switch (G__33464) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__33462_SHARP_){
var G__33465 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__33462_SHARP_) : node_gen.call(null,p1__33462_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__33465) : shadow.dom.build.call(null,G__33465));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__33483_34129 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__33485_34130 = null;
var count__33486_34131 = (0);
var i__33487_34132 = (0);
while(true){
if((i__33487_34132 < count__33486_34131)){
var obj_34139 = chunk__33485_34130.cljs$core$IIndexed$_nth$arity$2(null,i__33487_34132);
var obj_34140__$1 = shadow.object.get_from_dom(obj_34139);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_34140__$1);


var G__34143 = seq__33483_34129;
var G__34144 = chunk__33485_34130;
var G__34145 = count__33486_34131;
var G__34146 = (i__33487_34132 + (1));
seq__33483_34129 = G__34143;
chunk__33485_34130 = G__34144;
count__33486_34131 = G__34145;
i__33487_34132 = G__34146;
continue;
} else {
var temp__5735__auto___34147 = cljs.core.seq(seq__33483_34129);
if(temp__5735__auto___34147){
var seq__33483_34149__$1 = temp__5735__auto___34147;
if(cljs.core.chunked_seq_QMARK_(seq__33483_34149__$1)){
var c__4591__auto___34150 = cljs.core.chunk_first(seq__33483_34149__$1);
var G__34155 = cljs.core.chunk_rest(seq__33483_34149__$1);
var G__34156 = c__4591__auto___34150;
var G__34157 = cljs.core.count(c__4591__auto___34150);
var G__34158 = (0);
seq__33483_34129 = G__34155;
chunk__33485_34130 = G__34156;
count__33486_34131 = G__34157;
i__33487_34132 = G__34158;
continue;
} else {
var obj_34159 = cljs.core.first(seq__33483_34149__$1);
var obj_34160__$1 = shadow.object.get_from_dom(obj_34159);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_34160__$1);


var G__34164 = cljs.core.next(seq__33483_34149__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__33483_34129 = G__34164;
chunk__33485_34130 = G__34165;
count__33486_34131 = G__34166;
i__33487_34132 = G__34167;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__33502 = arguments.length;
switch (G__33502) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__33494_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__33494_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__33528){
var vec__33529 = p__33528;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__33547_34182 = cljs.core.seq((function (){var G__33562 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__33562) : coll_transform.call(null,G__33562));
})());
var chunk__33548_34183 = null;
var count__33549_34184 = (0);
var i__33550_34185 = (0);
while(true){
if((i__33550_34185 < count__33549_34184)){
var item_34187 = chunk__33548_34183.cljs$core$IIndexed$_nth$arity$2(null,i__33550_34185);
shadow.object.dom_enter(coll_dom,make_item_fn(item_34187));


var G__34193 = seq__33547_34182;
var G__34194 = chunk__33548_34183;
var G__34195 = count__33549_34184;
var G__34196 = (i__33550_34185 + (1));
seq__33547_34182 = G__34193;
chunk__33548_34183 = G__34194;
count__33549_34184 = G__34195;
i__33550_34185 = G__34196;
continue;
} else {
var temp__5735__auto___34197 = cljs.core.seq(seq__33547_34182);
if(temp__5735__auto___34197){
var seq__33547_34198__$1 = temp__5735__auto___34197;
if(cljs.core.chunked_seq_QMARK_(seq__33547_34198__$1)){
var c__4591__auto___34207 = cljs.core.chunk_first(seq__33547_34198__$1);
var G__34208 = cljs.core.chunk_rest(seq__33547_34198__$1);
var G__34209 = c__4591__auto___34207;
var G__34210 = cljs.core.count(c__4591__auto___34207);
var G__34211 = (0);
seq__33547_34182 = G__34208;
chunk__33548_34183 = G__34209;
count__33549_34184 = G__34210;
i__33550_34185 = G__34211;
continue;
} else {
var item_34212 = cljs.core.first(seq__33547_34198__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_34212));


var G__34217 = cljs.core.next(seq__33547_34198__$1);
var G__34218 = null;
var G__34219 = (0);
var G__34220 = (0);
seq__33547_34182 = G__34217;
chunk__33548_34183 = G__34218;
count__33549_34184 = G__34219;
i__33550_34185 = G__34220;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4252__auto__ = count_new;
var y__4253__auto__ = count_children;
return ((x__4252__auto__ < y__4253__auto__) ? x__4252__auto__ : y__4253__auto__);
})();
var n__4648__auto___34223 = count_children__$1;
var idx_34224 = (0);
while(true){
if((idx_34224 < n__4648__auto___34223)){
var cn_34225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_34224);
var cc_34226 = shadow.object.get_from_dom(cn_34225);
var ckey_34227 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_34226);
var cval_34228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_34226,item_key);
var vec__33566_34229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_34224);
var nkey_34230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566_34229,(0),null);
var nval_34231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566_34229,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_34227,nkey_34230)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_34228,nval_34231)))){
} else {
var new_obj_34233 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_34230,nval_34231], null));
shadow.dom.replace_node(cn_34225,new_obj_34233);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_34226);

shadow.object.notify_tree_BANG_(new_obj_34233,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__34235 = (idx_34224 + (1));
idx_34224 = G__34235;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__33572_34236 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__33573_34237 = null;
var count__33574_34238 = (0);
var i__33575_34239 = (0);
while(true){
if((i__33575_34239 < count__33574_34238)){
var item_34242 = chunk__33573_34237.cljs$core$IIndexed$_nth$arity$2(null,i__33575_34239);
shadow.object.dom_enter(coll_dom,make_item_fn(item_34242));


var G__34245 = seq__33572_34236;
var G__34247 = chunk__33573_34237;
var G__34248 = count__33574_34238;
var G__34249 = (i__33575_34239 + (1));
seq__33572_34236 = G__34245;
chunk__33573_34237 = G__34247;
count__33574_34238 = G__34248;
i__33575_34239 = G__34249;
continue;
} else {
var temp__5735__auto___34252 = cljs.core.seq(seq__33572_34236);
if(temp__5735__auto___34252){
var seq__33572_34253__$1 = temp__5735__auto___34252;
if(cljs.core.chunked_seq_QMARK_(seq__33572_34253__$1)){
var c__4591__auto___34255 = cljs.core.chunk_first(seq__33572_34253__$1);
var G__34256 = cljs.core.chunk_rest(seq__33572_34253__$1);
var G__34257 = c__4591__auto___34255;
var G__34258 = cljs.core.count(c__4591__auto___34255);
var G__34259 = (0);
seq__33572_34236 = G__34256;
chunk__33573_34237 = G__34257;
count__33574_34238 = G__34258;
i__33575_34239 = G__34259;
continue;
} else {
var item_34260 = cljs.core.first(seq__33572_34253__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_34260));


var G__34264 = cljs.core.next(seq__33572_34253__$1);
var G__34265 = null;
var G__34266 = (0);
var G__34267 = (0);
seq__33572_34236 = G__34264;
chunk__33573_34237 = G__34265;
count__33574_34238 = G__34266;
i__33575_34239 = G__34267;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4149__auto__ = key;
if(cljs.core.truth_(and__4149__auto__)){
return path;
} else {
return and__4149__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__33586 = "inspect!";
var G__33587 = shadow.object._id(oref);
var G__33588 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__33589 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__33586,G__33587,G__33588,G__33589) : shadow.object.info.call(null,G__33586,G__33587,G__33588,G__33589));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__33593_34271 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__33594_34272 = null;
var count__33595_34273 = (0);
var i__33596_34274 = (0);
while(true){
if((i__33596_34274 < count__33595_34273)){
var vec__33623_34275 = chunk__33594_34272.cljs$core$IIndexed$_nth$arity$2(null,i__33596_34274);
var id_34276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34275,(0),null);
var oref_34277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34275,(1),null);
var G__33626_34281 = "dump";
var G__33627_34282 = id_34276;
var G__33628_34283 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_34277)], 0));
var G__33629_34284 = cljs.core.deref(shadow.object._data(oref_34277));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__33626_34281,G__33627_34282,G__33628_34283,G__33629_34284) : shadow.object.info.call(null,G__33626_34281,G__33627_34282,G__33628_34283,G__33629_34284));


var G__34285 = seq__33593_34271;
var G__34286 = chunk__33594_34272;
var G__34287 = count__33595_34273;
var G__34288 = (i__33596_34274 + (1));
seq__33593_34271 = G__34285;
chunk__33594_34272 = G__34286;
count__33595_34273 = G__34287;
i__33596_34274 = G__34288;
continue;
} else {
var temp__5735__auto___34289 = cljs.core.seq(seq__33593_34271);
if(temp__5735__auto___34289){
var seq__33593_34290__$1 = temp__5735__auto___34289;
if(cljs.core.chunked_seq_QMARK_(seq__33593_34290__$1)){
var c__4591__auto___34292 = cljs.core.chunk_first(seq__33593_34290__$1);
var G__34293 = cljs.core.chunk_rest(seq__33593_34290__$1);
var G__34294 = c__4591__auto___34292;
var G__34295 = cljs.core.count(c__4591__auto___34292);
var G__34296 = (0);
seq__33593_34271 = G__34293;
chunk__33594_34272 = G__34294;
count__33595_34273 = G__34295;
i__33596_34274 = G__34296;
continue;
} else {
var vec__33630_34297 = cljs.core.first(seq__33593_34290__$1);
var id_34298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33630_34297,(0),null);
var oref_34299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33630_34297,(1),null);
var G__33633_34300 = "dump";
var G__33634_34301 = id_34298;
var G__33635_34302 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_34299)], 0));
var G__33636_34303 = cljs.core.deref(shadow.object._data(oref_34299));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__33633_34300,G__33634_34301,G__33635_34302,G__33636_34303) : shadow.object.info.call(null,G__33633_34300,G__33634_34301,G__33635_34302,G__33636_34303));


var G__34304 = cljs.core.next(seq__33593_34290__$1);
var G__34305 = null;
var G__34306 = (0);
var G__34307 = (0);
seq__33593_34271 = G__34304;
chunk__33594_34272 = G__34305;
count__33595_34273 = G__34306;
i__33596_34274 = G__34307;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
