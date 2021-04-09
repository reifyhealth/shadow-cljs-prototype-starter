goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35467 = arguments.length;
var i__4772__auto___35468 = (0);
while(true){
if((i__4772__auto___35468 < len__4771__auto___35467)){
args__4777__auto__.push((arguments[i__4772__auto___35468]));

var G__35469 = (i__4772__auto___35468 + (1));
i__4772__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35289){
var G__35290 = cljs.core.first(seq35289);
var seq35289__$1 = cljs.core.next(seq35289);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35290,seq35289__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35291 = cljs.core.seq(sources);
var chunk__35292 = null;
var count__35293 = (0);
var i__35294 = (0);
while(true){
if((i__35294 < count__35293)){
var map__35303 = chunk__35292.cljs$core$IIndexed$_nth$arity$2(null,i__35294);
var map__35303__$1 = cljs.core.__destructure_map(map__35303);
var src = map__35303__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35303__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35303__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35303__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35304){var e_35476 = e35304;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35476);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35476.message)].join('')));
}

var G__35477 = seq__35291;
var G__35478 = chunk__35292;
var G__35479 = count__35293;
var G__35480 = (i__35294 + (1));
seq__35291 = G__35477;
chunk__35292 = G__35478;
count__35293 = G__35479;
i__35294 = G__35480;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35291);
if(temp__5735__auto__){
var seq__35291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35291__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35291__$1);
var G__35481 = cljs.core.chunk_rest(seq__35291__$1);
var G__35482 = c__4591__auto__;
var G__35483 = cljs.core.count(c__4591__auto__);
var G__35484 = (0);
seq__35291 = G__35481;
chunk__35292 = G__35482;
count__35293 = G__35483;
i__35294 = G__35484;
continue;
} else {
var map__35305 = cljs.core.first(seq__35291__$1);
var map__35305__$1 = cljs.core.__destructure_map(map__35305);
var src = map__35305__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35306){var e_35485 = e35306;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35485);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35485.message)].join('')));
}

var G__35486 = cljs.core.next(seq__35291__$1);
var G__35487 = null;
var G__35488 = (0);
var G__35489 = (0);
seq__35291 = G__35486;
chunk__35292 = G__35487;
count__35293 = G__35488;
i__35294 = G__35489;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35308 = cljs.core.seq(js_requires);
var chunk__35309 = null;
var count__35310 = (0);
var i__35311 = (0);
while(true){
if((i__35311 < count__35310)){
var js_ns = chunk__35309.cljs$core$IIndexed$_nth$arity$2(null,i__35311);
var require_str_35493 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35493);


var G__35494 = seq__35308;
var G__35495 = chunk__35309;
var G__35496 = count__35310;
var G__35497 = (i__35311 + (1));
seq__35308 = G__35494;
chunk__35309 = G__35495;
count__35310 = G__35496;
i__35311 = G__35497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35308);
if(temp__5735__auto__){
var seq__35308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35308__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35308__$1);
var G__35498 = cljs.core.chunk_rest(seq__35308__$1);
var G__35499 = c__4591__auto__;
var G__35500 = cljs.core.count(c__4591__auto__);
var G__35501 = (0);
seq__35308 = G__35498;
chunk__35309 = G__35499;
count__35310 = G__35500;
i__35311 = G__35501;
continue;
} else {
var js_ns = cljs.core.first(seq__35308__$1);
var require_str_35502 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35502);


var G__35503 = cljs.core.next(seq__35308__$1);
var G__35504 = null;
var G__35505 = (0);
var G__35506 = (0);
seq__35308 = G__35503;
chunk__35309 = G__35504;
count__35310 = G__35505;
i__35311 = G__35506;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35313){
var map__35314 = p__35313;
var map__35314__$1 = cljs.core.__destructure_map(map__35314);
var msg = map__35314__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35315(s__35316){
return (new cljs.core.LazySeq(null,(function (){
var s__35316__$1 = s__35316;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35316__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35321 = cljs.core.first(xs__6292__auto__);
var map__35321__$1 = cljs.core.__destructure_map(map__35321);
var src = map__35321__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__35316__$1,map__35321,map__35321__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35314,map__35314__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35315_$_iter__35317(s__35318){
return (new cljs.core.LazySeq(null,((function (s__35316__$1,map__35321,map__35321__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35314,map__35314__$1,msg,info,reload_info){
return (function (){
var s__35318__$1 = s__35318;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35318__$1);
if(temp__5735__auto____$1){
var s__35318__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35318__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__35318__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__35320 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__35319 = (0);
while(true){
if((i__35319 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__35319);
cljs.core.chunk_append(b__35320,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35507 = (i__35319 + (1));
i__35319 = G__35507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35320),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35315_$_iter__35317(cljs.core.chunk_rest(s__35318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35320),null);
}
} else {
var warning = cljs.core.first(s__35318__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35315_$_iter__35317(cljs.core.rest(s__35318__$2)));
}
} else {
return null;
}
break;
}
});})(s__35316__$1,map__35321,map__35321__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35314,map__35314__$1,msg,info,reload_info))
,null,null));
});})(s__35316__$1,map__35321,map__35321__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35314,map__35314__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35315(cljs.core.rest(s__35316__$1)));
} else {
var G__35508 = cljs.core.rest(s__35316__$1);
s__35316__$1 = G__35508;
continue;
}
} else {
var G__35509 = cljs.core.rest(s__35316__$1);
s__35316__$1 = G__35509;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35322_35510 = cljs.core.seq(warnings);
var chunk__35323_35511 = null;
var count__35324_35512 = (0);
var i__35325_35513 = (0);
while(true){
if((i__35325_35513 < count__35324_35512)){
var map__35328_35514 = chunk__35323_35511.cljs$core$IIndexed$_nth$arity$2(null,i__35325_35513);
var map__35328_35515__$1 = cljs.core.__destructure_map(map__35328_35514);
var w_35516 = map__35328_35515__$1;
var msg_35517__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328_35515__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328_35515__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328_35515__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328_35515__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35520)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35518),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35519),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35517__$1)].join(''));


var G__35521 = seq__35322_35510;
var G__35522 = chunk__35323_35511;
var G__35523 = count__35324_35512;
var G__35524 = (i__35325_35513 + (1));
seq__35322_35510 = G__35521;
chunk__35323_35511 = G__35522;
count__35324_35512 = G__35523;
i__35325_35513 = G__35524;
continue;
} else {
var temp__5735__auto___35525 = cljs.core.seq(seq__35322_35510);
if(temp__5735__auto___35525){
var seq__35322_35526__$1 = temp__5735__auto___35525;
if(cljs.core.chunked_seq_QMARK_(seq__35322_35526__$1)){
var c__4591__auto___35527 = cljs.core.chunk_first(seq__35322_35526__$1);
var G__35528 = cljs.core.chunk_rest(seq__35322_35526__$1);
var G__35529 = c__4591__auto___35527;
var G__35530 = cljs.core.count(c__4591__auto___35527);
var G__35531 = (0);
seq__35322_35510 = G__35528;
chunk__35323_35511 = G__35529;
count__35324_35512 = G__35530;
i__35325_35513 = G__35531;
continue;
} else {
var map__35329_35537 = cljs.core.first(seq__35322_35526__$1);
var map__35329_35538__$1 = cljs.core.__destructure_map(map__35329_35537);
var w_35539 = map__35329_35538__$1;
var msg_35540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329_35538__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329_35538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329_35538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329_35538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35543)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35541),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35542),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35540__$1)].join(''));


var G__35544 = cljs.core.next(seq__35322_35526__$1);
var G__35545 = null;
var G__35546 = (0);
var G__35547 = (0);
seq__35322_35510 = G__35544;
chunk__35323_35511 = G__35545;
count__35324_35512 = G__35546;
i__35325_35513 = G__35547;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35312_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35312_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35332){
var map__35333 = p__35332;
var map__35333__$1 = cljs.core.__destructure_map(map__35333);
var msg = map__35333__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35334 = cljs.core.seq(updates);
var chunk__35336 = null;
var count__35337 = (0);
var i__35338 = (0);
while(true){
if((i__35338 < count__35337)){
var path = chunk__35336.cljs$core$IIndexed$_nth$arity$2(null,i__35338);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35374_35550 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35378_35551 = null;
var count__35379_35552 = (0);
var i__35380_35553 = (0);
while(true){
if((i__35380_35553 < count__35379_35552)){
var node_35554 = chunk__35378_35551.cljs$core$IIndexed$_nth$arity$2(null,i__35380_35553);
if(cljs.core.not(node_35554.shadow$old)){
var path_match_35555 = shadow.cljs.devtools.client.browser.match_paths(node_35554.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35555)){
var new_link_35556 = (function (){var G__35386 = node_35554.cloneNode(true);
G__35386.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35555),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35386;
})();
(node_35554.shadow$old = true);

(new_link_35556.onload = ((function (seq__35374_35550,chunk__35378_35551,count__35379_35552,i__35380_35553,seq__35334,chunk__35336,count__35337,i__35338,new_link_35556,path_match_35555,node_35554,path,map__35333,map__35333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35554);
});})(seq__35374_35550,chunk__35378_35551,count__35379_35552,i__35380_35553,seq__35334,chunk__35336,count__35337,i__35338,new_link_35556,path_match_35555,node_35554,path,map__35333,map__35333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35555], 0));

goog.dom.insertSiblingAfter(new_link_35556,node_35554);


var G__35557 = seq__35374_35550;
var G__35558 = chunk__35378_35551;
var G__35559 = count__35379_35552;
var G__35560 = (i__35380_35553 + (1));
seq__35374_35550 = G__35557;
chunk__35378_35551 = G__35558;
count__35379_35552 = G__35559;
i__35380_35553 = G__35560;
continue;
} else {
var G__35561 = seq__35374_35550;
var G__35562 = chunk__35378_35551;
var G__35563 = count__35379_35552;
var G__35564 = (i__35380_35553 + (1));
seq__35374_35550 = G__35561;
chunk__35378_35551 = G__35562;
count__35379_35552 = G__35563;
i__35380_35553 = G__35564;
continue;
}
} else {
var G__35565 = seq__35374_35550;
var G__35566 = chunk__35378_35551;
var G__35567 = count__35379_35552;
var G__35568 = (i__35380_35553 + (1));
seq__35374_35550 = G__35565;
chunk__35378_35551 = G__35566;
count__35379_35552 = G__35567;
i__35380_35553 = G__35568;
continue;
}
} else {
var temp__5735__auto___35569 = cljs.core.seq(seq__35374_35550);
if(temp__5735__auto___35569){
var seq__35374_35570__$1 = temp__5735__auto___35569;
if(cljs.core.chunked_seq_QMARK_(seq__35374_35570__$1)){
var c__4591__auto___35571 = cljs.core.chunk_first(seq__35374_35570__$1);
var G__35572 = cljs.core.chunk_rest(seq__35374_35570__$1);
var G__35573 = c__4591__auto___35571;
var G__35574 = cljs.core.count(c__4591__auto___35571);
var G__35575 = (0);
seq__35374_35550 = G__35572;
chunk__35378_35551 = G__35573;
count__35379_35552 = G__35574;
i__35380_35553 = G__35575;
continue;
} else {
var node_35578 = cljs.core.first(seq__35374_35570__$1);
if(cljs.core.not(node_35578.shadow$old)){
var path_match_35579 = shadow.cljs.devtools.client.browser.match_paths(node_35578.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35579)){
var new_link_35580 = (function (){var G__35387 = node_35578.cloneNode(true);
G__35387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35579),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35387;
})();
(node_35578.shadow$old = true);

(new_link_35580.onload = ((function (seq__35374_35550,chunk__35378_35551,count__35379_35552,i__35380_35553,seq__35334,chunk__35336,count__35337,i__35338,new_link_35580,path_match_35579,node_35578,seq__35374_35570__$1,temp__5735__auto___35569,path,map__35333,map__35333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35578);
});})(seq__35374_35550,chunk__35378_35551,count__35379_35552,i__35380_35553,seq__35334,chunk__35336,count__35337,i__35338,new_link_35580,path_match_35579,node_35578,seq__35374_35570__$1,temp__5735__auto___35569,path,map__35333,map__35333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35579], 0));

goog.dom.insertSiblingAfter(new_link_35580,node_35578);


var G__35581 = cljs.core.next(seq__35374_35570__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__35374_35550 = G__35581;
chunk__35378_35551 = G__35582;
count__35379_35552 = G__35583;
i__35380_35553 = G__35584;
continue;
} else {
var G__35585 = cljs.core.next(seq__35374_35570__$1);
var G__35586 = null;
var G__35587 = (0);
var G__35588 = (0);
seq__35374_35550 = G__35585;
chunk__35378_35551 = G__35586;
count__35379_35552 = G__35587;
i__35380_35553 = G__35588;
continue;
}
} else {
var G__35589 = cljs.core.next(seq__35374_35570__$1);
var G__35590 = null;
var G__35591 = (0);
var G__35592 = (0);
seq__35374_35550 = G__35589;
chunk__35378_35551 = G__35590;
count__35379_35552 = G__35591;
i__35380_35553 = G__35592;
continue;
}
}
} else {
}
}
break;
}


var G__35594 = seq__35334;
var G__35595 = chunk__35336;
var G__35596 = count__35337;
var G__35597 = (i__35338 + (1));
seq__35334 = G__35594;
chunk__35336 = G__35595;
count__35337 = G__35596;
i__35338 = G__35597;
continue;
} else {
var G__35598 = seq__35334;
var G__35599 = chunk__35336;
var G__35600 = count__35337;
var G__35601 = (i__35338 + (1));
seq__35334 = G__35598;
chunk__35336 = G__35599;
count__35337 = G__35600;
i__35338 = G__35601;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35334);
if(temp__5735__auto__){
var seq__35334__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35334__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35334__$1);
var G__35602 = cljs.core.chunk_rest(seq__35334__$1);
var G__35603 = c__4591__auto__;
var G__35604 = cljs.core.count(c__4591__auto__);
var G__35605 = (0);
seq__35334 = G__35602;
chunk__35336 = G__35603;
count__35337 = G__35604;
i__35338 = G__35605;
continue;
} else {
var path = cljs.core.first(seq__35334__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35388_35606 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35392_35607 = null;
var count__35393_35608 = (0);
var i__35394_35609 = (0);
while(true){
if((i__35394_35609 < count__35393_35608)){
var node_35611 = chunk__35392_35607.cljs$core$IIndexed$_nth$arity$2(null,i__35394_35609);
if(cljs.core.not(node_35611.shadow$old)){
var path_match_35612 = shadow.cljs.devtools.client.browser.match_paths(node_35611.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35612)){
var new_link_35613 = (function (){var G__35409 = node_35611.cloneNode(true);
G__35409.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35612),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35409;
})();
(node_35611.shadow$old = true);

(new_link_35613.onload = ((function (seq__35388_35606,chunk__35392_35607,count__35393_35608,i__35394_35609,seq__35334,chunk__35336,count__35337,i__35338,new_link_35613,path_match_35612,node_35611,path,seq__35334__$1,temp__5735__auto__,map__35333,map__35333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35611);
});})(seq__35388_35606,chunk__35392_35607,count__35393_35608,i__35394_35609,seq__35334,chunk__35336,count__35337,i__35338,new_link_35613,path_match_35612,node_35611,path,seq__35334__$1,temp__5735__auto__,map__35333,map__35333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35612], 0));

goog.dom.insertSiblingAfter(new_link_35613,node_35611);


var G__35619 = seq__35388_35606;
var G__35620 = chunk__35392_35607;
var G__35621 = count__35393_35608;
var G__35622 = (i__35394_35609 + (1));
seq__35388_35606 = G__35619;
chunk__35392_35607 = G__35620;
count__35393_35608 = G__35621;
i__35394_35609 = G__35622;
continue;
} else {
var G__35623 = seq__35388_35606;
var G__35624 = chunk__35392_35607;
var G__35625 = count__35393_35608;
var G__35626 = (i__35394_35609 + (1));
seq__35388_35606 = G__35623;
chunk__35392_35607 = G__35624;
count__35393_35608 = G__35625;
i__35394_35609 = G__35626;
continue;
}
} else {
var G__35627 = seq__35388_35606;
var G__35628 = chunk__35392_35607;
var G__35629 = count__35393_35608;
var G__35630 = (i__35394_35609 + (1));
seq__35388_35606 = G__35627;
chunk__35392_35607 = G__35628;
count__35393_35608 = G__35629;
i__35394_35609 = G__35630;
continue;
}
} else {
var temp__5735__auto___35631__$1 = cljs.core.seq(seq__35388_35606);
if(temp__5735__auto___35631__$1){
var seq__35388_35632__$1 = temp__5735__auto___35631__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35388_35632__$1)){
var c__4591__auto___35633 = cljs.core.chunk_first(seq__35388_35632__$1);
var G__35634 = cljs.core.chunk_rest(seq__35388_35632__$1);
var G__35635 = c__4591__auto___35633;
var G__35636 = cljs.core.count(c__4591__auto___35633);
var G__35637 = (0);
seq__35388_35606 = G__35634;
chunk__35392_35607 = G__35635;
count__35393_35608 = G__35636;
i__35394_35609 = G__35637;
continue;
} else {
var node_35638 = cljs.core.first(seq__35388_35632__$1);
if(cljs.core.not(node_35638.shadow$old)){
var path_match_35639 = shadow.cljs.devtools.client.browser.match_paths(node_35638.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35639)){
var new_link_35640 = (function (){var G__35417 = node_35638.cloneNode(true);
G__35417.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35639),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35417;
})();
(node_35638.shadow$old = true);

(new_link_35640.onload = ((function (seq__35388_35606,chunk__35392_35607,count__35393_35608,i__35394_35609,seq__35334,chunk__35336,count__35337,i__35338,new_link_35640,path_match_35639,node_35638,seq__35388_35632__$1,temp__5735__auto___35631__$1,path,seq__35334__$1,temp__5735__auto__,map__35333,map__35333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35638);
});})(seq__35388_35606,chunk__35392_35607,count__35393_35608,i__35394_35609,seq__35334,chunk__35336,count__35337,i__35338,new_link_35640,path_match_35639,node_35638,seq__35388_35632__$1,temp__5735__auto___35631__$1,path,seq__35334__$1,temp__5735__auto__,map__35333,map__35333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35639], 0));

goog.dom.insertSiblingAfter(new_link_35640,node_35638);


var G__35644 = cljs.core.next(seq__35388_35632__$1);
var G__35645 = null;
var G__35646 = (0);
var G__35647 = (0);
seq__35388_35606 = G__35644;
chunk__35392_35607 = G__35645;
count__35393_35608 = G__35646;
i__35394_35609 = G__35647;
continue;
} else {
var G__35648 = cljs.core.next(seq__35388_35632__$1);
var G__35649 = null;
var G__35650 = (0);
var G__35651 = (0);
seq__35388_35606 = G__35648;
chunk__35392_35607 = G__35649;
count__35393_35608 = G__35650;
i__35394_35609 = G__35651;
continue;
}
} else {
var G__35652 = cljs.core.next(seq__35388_35632__$1);
var G__35653 = null;
var G__35654 = (0);
var G__35655 = (0);
seq__35388_35606 = G__35652;
chunk__35392_35607 = G__35653;
count__35393_35608 = G__35654;
i__35394_35609 = G__35655;
continue;
}
}
} else {
}
}
break;
}


var G__35656 = cljs.core.next(seq__35334__$1);
var G__35657 = null;
var G__35658 = (0);
var G__35659 = (0);
seq__35334 = G__35656;
chunk__35336 = G__35657;
count__35337 = G__35658;
i__35338 = G__35659;
continue;
} else {
var G__35660 = cljs.core.next(seq__35334__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35334 = G__35660;
chunk__35336 = G__35661;
count__35337 = G__35662;
i__35338 = G__35663;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35429){
var map__35430 = p__35429;
var map__35430__$1 = cljs.core.__destructure_map(map__35430);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35430__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35439){
var map__35440 = p__35439;
var map__35440__$1 = cljs.core.__destructure_map(map__35440);
var _ = map__35440__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35441,done,error){
var map__35442 = p__35441;
var map__35442__$1 = cljs.core.__destructure_map(map__35442);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35442__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35443,done,error){
var map__35444 = p__35443;
var map__35444__$1 = cljs.core.__destructure_map(map__35444);
var msg = map__35444__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35444__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35444__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35444__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35445){
var map__35446 = p__35445;
var map__35446__$1 = cljs.core.__destructure_map(map__35446);
var src = map__35446__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35447 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35447) : done.call(null,G__35447));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35450){
var map__35451 = p__35450;
var map__35451__$1 = cljs.core.__destructure_map(map__35451);
var msg__$1 = map__35451__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35452){var ex = e35452;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35453){
var map__35454 = p__35453;
var map__35454__$1 = cljs.core.__destructure_map(map__35454);
var env = map__35454__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35455){
var map__35456 = p__35455;
var map__35456__$1 = cljs.core.__destructure_map(map__35456);
var msg = map__35456__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35456__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35463){
var map__35464 = p__35463;
var map__35464__$1 = cljs.core.__destructure_map(map__35464);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35465){
var map__35466 = p__35465;
var map__35466__$1 = cljs.core.__destructure_map(map__35466);
var svc = map__35466__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
