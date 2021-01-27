goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37012,p__37013){
var map__37014 = p__37012;
var map__37014__$1 = (((((!((map__37014 == null))))?(((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37014):map__37014);
var svc = map__37014__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37015 = p__37013;
var map__37015__$1 = (((((!((map__37015 == null))))?(((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37015):map__37015);
var msg = map__37015__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37015__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37015__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37015__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37015__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37023,p__37024){
var map__37025 = p__37023;
var map__37025__$1 = (((((!((map__37025 == null))))?(((((map__37025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37025):map__37025);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37027 = p__37024;
var map__37027__$1 = (((((!((map__37027 == null))))?(((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37027):map__37027);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37035,p__37036){
var map__37038 = p__37035;
var map__37038__$1 = (((((!((map__37038 == null))))?(((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37038):map__37038);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37039 = p__37036;
var map__37039__$1 = (((((!((map__37039 == null))))?(((((map__37039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37039):map__37039);
var msg = map__37039__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37039__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37047,tid){
var map__37048 = p__37047;
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
var seq__37056 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37057 = null;
var count__37058 = (0);
var i__37059 = (0);
while(true){
if((i__37059 < count__37058)){
var vec__37073 = chunk__37057.cljs$core$IIndexed$_nth$arity$2(null,i__37059);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37092 = seq__37056;
var G__37093 = chunk__37057;
var G__37094 = count__37058;
var G__37095 = (i__37059 + (1));
seq__37056 = G__37092;
chunk__37057 = G__37093;
count__37058 = G__37094;
i__37059 = G__37095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37056);
if(temp__5735__auto__){
var seq__37056__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37056__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37056__$1);
var G__37096 = cljs.core.chunk_rest(seq__37056__$1);
var G__37097 = c__4556__auto__;
var G__37098 = cljs.core.count(c__4556__auto__);
var G__37099 = (0);
seq__37056 = G__37096;
chunk__37057 = G__37097;
count__37058 = G__37098;
i__37059 = G__37099;
continue;
} else {
var vec__37078 = cljs.core.first(seq__37056__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37102 = cljs.core.next(seq__37056__$1);
var G__37103 = null;
var G__37104 = (0);
var G__37105 = (0);
seq__37056 = G__37102;
chunk__37057 = G__37103;
count__37058 = G__37104;
i__37059 = G__37105;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37052_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37052_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37053_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37053_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37054_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37054_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37055_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37055_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37084){
var map__37085 = p__37084;
var map__37085__$1 = (((((!((map__37085 == null))))?(((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37085):map__37085);
var svc = map__37085__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
