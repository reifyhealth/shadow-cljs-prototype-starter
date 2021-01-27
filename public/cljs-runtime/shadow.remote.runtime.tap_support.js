goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37009,p__37010){
var map__37011 = p__37009;
var map__37011__$1 = (((((!((map__37011 == null))))?(((((map__37011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37011):map__37011);
var svc = map__37011__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37012 = p__37010;
var map__37012__$1 = (((((!((map__37012 == null))))?(((((map__37012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37012):map__37012);
var msg = map__37012__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37012__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37012__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37012__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37012__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37024,p__37025){
var map__37026 = p__37024;
var map__37026__$1 = (((((!((map__37026 == null))))?(((((map__37026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37026):map__37026);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37027 = p__37025;
var map__37027__$1 = (((((!((map__37027 == null))))?(((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37027):map__37027);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37036,p__37037){
var map__37038 = p__37036;
var map__37038__$1 = (((((!((map__37038 == null))))?(((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37038):map__37038);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37039 = p__37037;
var map__37039__$1 = (((((!((map__37039 == null))))?(((((map__37039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37039):map__37039);
var msg = map__37039__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37039__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37046,tid){
var map__37048 = p__37046;
var map__37048__$1 = (((((!((map__37048 == null))))?(((((map__37048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37048):map__37048);
var svc = map__37048__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37055 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37056 = null;
var count__37057 = (0);
var i__37058 = (0);
while(true){
if((i__37058 < count__37057)){
var vec__37072 = chunk__37056.cljs$core$IIndexed$_nth$arity$2(null,i__37058);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37087 = seq__37055;
var G__37088 = chunk__37056;
var G__37089 = count__37057;
var G__37090 = (i__37058 + (1));
seq__37055 = G__37087;
chunk__37056 = G__37088;
count__37057 = G__37089;
i__37058 = G__37090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37055);
if(temp__5735__auto__){
var seq__37055__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37055__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37055__$1);
var G__37091 = cljs.core.chunk_rest(seq__37055__$1);
var G__37092 = c__4556__auto__;
var G__37093 = cljs.core.count(c__4556__auto__);
var G__37094 = (0);
seq__37055 = G__37091;
chunk__37056 = G__37092;
count__37057 = G__37093;
i__37058 = G__37094;
continue;
} else {
var vec__37077 = cljs.core.first(seq__37055__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37095 = cljs.core.next(seq__37055__$1);
var G__37096 = null;
var G__37097 = (0);
var G__37098 = (0);
seq__37055 = G__37095;
chunk__37056 = G__37096;
count__37057 = G__37097;
i__37058 = G__37098;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37051_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37051_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37052_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37052_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37053_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37053_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37054_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37054_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37083){
var map__37084 = p__37083;
var map__37084__$1 = (((((!((map__37084 == null))))?(((((map__37084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37084):map__37084);
var svc = map__37084__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
