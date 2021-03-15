goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35247,p__35248){
var map__35249 = p__35247;
var map__35249__$1 = (((((!((map__35249 == null))))?(((((map__35249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35249):map__35249);
var svc = map__35249__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35250 = p__35248;
var map__35250__$1 = (((((!((map__35250 == null))))?(((((map__35250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35250):map__35250);
var msg = map__35250__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35250__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35250__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35250__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35250__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35260,p__35261){
var map__35263 = p__35260;
var map__35263__$1 = (((((!((map__35263 == null))))?(((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35263):map__35263);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35264 = p__35261;
var map__35264__$1 = (((((!((map__35264 == null))))?(((((map__35264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35264):map__35264);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35264__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35272,p__35273){
var map__35275 = p__35272;
var map__35275__$1 = (((((!((map__35275 == null))))?(((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35275):map__35275);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35276 = p__35273;
var map__35276__$1 = (((((!((map__35276 == null))))?(((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35276):map__35276);
var msg = map__35276__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35276__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35283,tid){
var map__35284 = p__35283;
var map__35284__$1 = (((((!((map__35284 == null))))?(((((map__35284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35284):map__35284);
var svc = map__35284__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35284__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35298 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35299 = null;
var count__35300 = (0);
var i__35301 = (0);
while(true){
if((i__35301 < count__35300)){
var vec__35312 = chunk__35299.cljs$core$IIndexed$_nth$arity$2(null,i__35301);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35325 = seq__35298;
var G__35326 = chunk__35299;
var G__35327 = count__35300;
var G__35328 = (i__35301 + (1));
seq__35298 = G__35325;
chunk__35299 = G__35326;
count__35300 = G__35327;
i__35301 = G__35328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35298);
if(temp__5735__auto__){
var seq__35298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35298__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35298__$1);
var G__35329 = cljs.core.chunk_rest(seq__35298__$1);
var G__35330 = c__4556__auto__;
var G__35331 = cljs.core.count(c__4556__auto__);
var G__35332 = (0);
seq__35298 = G__35329;
chunk__35299 = G__35330;
count__35300 = G__35331;
i__35301 = G__35332;
continue;
} else {
var vec__35315 = cljs.core.first(seq__35298__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35315,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35315,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35333 = cljs.core.next(seq__35298__$1);
var G__35334 = null;
var G__35335 = (0);
var G__35336 = (0);
seq__35298 = G__35333;
chunk__35299 = G__35334;
count__35300 = G__35335;
i__35301 = G__35336;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35286_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35286_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35287_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35287_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35288_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35288_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35289_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35289_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35321){
var map__35322 = p__35321;
var map__35322__$1 = (((((!((map__35322 == null))))?(((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35322):map__35322);
var svc = map__35322__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
