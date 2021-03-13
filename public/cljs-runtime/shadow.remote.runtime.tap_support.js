goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37014,p__37015){
var map__37019 = p__37014;
var map__37019__$1 = (((((!((map__37019 == null))))?(((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019):map__37019);
var svc = map__37019__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37021 = p__37015;
var map__37021__$1 = (((((!((map__37021 == null))))?(((((map__37021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37021):map__37021);
var msg = map__37021__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37021__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37031,p__37032){
var map__37033 = p__37031;
var map__37033__$1 = (((((!((map__37033 == null))))?(((((map__37033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37033):map__37033);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37033__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37034 = p__37032;
var map__37034__$1 = (((((!((map__37034 == null))))?(((((map__37034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37034):map__37034);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37041,p__37042){
var map__37043 = p__37041;
var map__37043__$1 = (((((!((map__37043 == null))))?(((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37043):map__37043);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37044 = p__37042;
var map__37044__$1 = (((((!((map__37044 == null))))?(((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37044):map__37044);
var msg = map__37044__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37044__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37049,tid){
var map__37050 = p__37049;
var map__37050__$1 = (((((!((map__37050 == null))))?(((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37050):map__37050);
var svc = map__37050__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37050__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37063 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37064 = null;
var count__37065 = (0);
var i__37066 = (0);
while(true){
if((i__37066 < count__37065)){
var vec__37078 = chunk__37064.cljs$core$IIndexed$_nth$arity$2(null,i__37066);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37094 = seq__37063;
var G__37095 = chunk__37064;
var G__37096 = count__37065;
var G__37097 = (i__37066 + (1));
seq__37063 = G__37094;
chunk__37064 = G__37095;
count__37065 = G__37096;
i__37066 = G__37097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37063);
if(temp__5735__auto__){
var seq__37063__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37063__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37063__$1);
var G__37101 = cljs.core.chunk_rest(seq__37063__$1);
var G__37102 = c__4556__auto__;
var G__37103 = cljs.core.count(c__4556__auto__);
var G__37104 = (0);
seq__37063 = G__37101;
chunk__37064 = G__37102;
count__37065 = G__37103;
i__37066 = G__37104;
continue;
} else {
var vec__37081 = cljs.core.first(seq__37063__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37081,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37105 = cljs.core.next(seq__37063__$1);
var G__37106 = null;
var G__37107 = (0);
var G__37108 = (0);
seq__37063 = G__37105;
chunk__37064 = G__37106;
count__37065 = G__37107;
i__37066 = G__37108;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37058_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37058_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37059_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37059_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37060_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37060_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37061_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37061_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37087){
var map__37088 = p__37087;
var map__37088__$1 = (((((!((map__37088 == null))))?(((((map__37088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37088):map__37088);
var svc = map__37088__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37088__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37088__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
