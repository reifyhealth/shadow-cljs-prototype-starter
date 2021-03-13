goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37594 = arguments.length;
var i__4737__auto___37595 = (0);
while(true){
if((i__4737__auto___37595 < len__4736__auto___37594)){
args__4742__auto__.push((arguments[i__4737__auto___37595]));

var G__37596 = (i__4737__auto___37595 + (1));
i__4737__auto___37595 = G__37596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37355){
var G__37356 = cljs.core.first(seq37355);
var seq37355__$1 = cljs.core.next(seq37355);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37356,seq37355__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37359 = cljs.core.seq(sources);
var chunk__37360 = null;
var count__37361 = (0);
var i__37362 = (0);
while(true){
if((i__37362 < count__37361)){
var map__37371 = chunk__37360.cljs$core$IIndexed$_nth$arity$2(null,i__37362);
var map__37371__$1 = (((((!((map__37371 == null))))?(((((map__37371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37371):map__37371);
var src = map__37371__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37380){var e_37600 = e37380;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37600);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37600.message)].join('')));
}

var G__37601 = seq__37359;
var G__37602 = chunk__37360;
var G__37603 = count__37361;
var G__37604 = (i__37362 + (1));
seq__37359 = G__37601;
chunk__37360 = G__37602;
count__37361 = G__37603;
i__37362 = G__37604;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37359);
if(temp__5735__auto__){
var seq__37359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37359__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37359__$1);
var G__37605 = cljs.core.chunk_rest(seq__37359__$1);
var G__37606 = c__4556__auto__;
var G__37607 = cljs.core.count(c__4556__auto__);
var G__37608 = (0);
seq__37359 = G__37605;
chunk__37360 = G__37606;
count__37361 = G__37607;
i__37362 = G__37608;
continue;
} else {
var map__37381 = cljs.core.first(seq__37359__$1);
var map__37381__$1 = (((((!((map__37381 == null))))?(((((map__37381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37381):map__37381);
var src = map__37381__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37383){var e_37609 = e37383;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37609);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37609.message)].join('')));
}

var G__37610 = cljs.core.next(seq__37359__$1);
var G__37611 = null;
var G__37612 = (0);
var G__37613 = (0);
seq__37359 = G__37610;
chunk__37360 = G__37611;
count__37361 = G__37612;
i__37362 = G__37613;
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
var seq__37384 = cljs.core.seq(js_requires);
var chunk__37385 = null;
var count__37386 = (0);
var i__37387 = (0);
while(true){
if((i__37387 < count__37386)){
var js_ns = chunk__37385.cljs$core$IIndexed$_nth$arity$2(null,i__37387);
var require_str_37620 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37620);


var G__37621 = seq__37384;
var G__37622 = chunk__37385;
var G__37623 = count__37386;
var G__37624 = (i__37387 + (1));
seq__37384 = G__37621;
chunk__37385 = G__37622;
count__37386 = G__37623;
i__37387 = G__37624;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37384);
if(temp__5735__auto__){
var seq__37384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37384__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37384__$1);
var G__37625 = cljs.core.chunk_rest(seq__37384__$1);
var G__37626 = c__4556__auto__;
var G__37627 = cljs.core.count(c__4556__auto__);
var G__37628 = (0);
seq__37384 = G__37625;
chunk__37385 = G__37626;
count__37386 = G__37627;
i__37387 = G__37628;
continue;
} else {
var js_ns = cljs.core.first(seq__37384__$1);
var require_str_37629 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37629);


var G__37630 = cljs.core.next(seq__37384__$1);
var G__37631 = null;
var G__37632 = (0);
var G__37633 = (0);
seq__37384 = G__37630;
chunk__37385 = G__37631;
count__37386 = G__37632;
i__37387 = G__37633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37390){
var map__37391 = p__37390;
var map__37391__$1 = (((((!((map__37391 == null))))?(((((map__37391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37391):map__37391);
var msg = map__37391__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37391__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37391__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37393(s__37394){
return (new cljs.core.LazySeq(null,(function (){
var s__37394__$1 = s__37394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37394__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37399 = cljs.core.first(xs__6292__auto__);
var map__37399__$1 = (((((!((map__37399 == null))))?(((((map__37399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37399):map__37399);
var src = map__37399__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37399__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37399__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37394__$1,map__37399,map__37399__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37391,map__37391__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37393_$_iter__37395(s__37396){
return (new cljs.core.LazySeq(null,((function (s__37394__$1,map__37399,map__37399__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37391,map__37391__$1,msg,info,reload_info){
return (function (){
var s__37396__$1 = s__37396;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37396__$1);
if(temp__5735__auto____$1){
var s__37396__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37396__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37396__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37398 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37397 = (0);
while(true){
if((i__37397 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37397);
cljs.core.chunk_append(b__37398,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37641 = (i__37397 + (1));
i__37397 = G__37641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37398),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37393_$_iter__37395(cljs.core.chunk_rest(s__37396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37398),null);
}
} else {
var warning = cljs.core.first(s__37396__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37393_$_iter__37395(cljs.core.rest(s__37396__$2)));
}
} else {
return null;
}
break;
}
});})(s__37394__$1,map__37399,map__37399__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37391,map__37391__$1,msg,info,reload_info))
,null,null));
});})(s__37394__$1,map__37399,map__37399__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37391,map__37391__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37393(cljs.core.rest(s__37394__$1)));
} else {
var G__37642 = cljs.core.rest(s__37394__$1);
s__37394__$1 = G__37642;
continue;
}
} else {
var G__37643 = cljs.core.rest(s__37394__$1);
s__37394__$1 = G__37643;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37401_37644 = cljs.core.seq(warnings);
var chunk__37402_37645 = null;
var count__37403_37646 = (0);
var i__37404_37647 = (0);
while(true){
if((i__37404_37647 < count__37403_37646)){
var map__37409_37648 = chunk__37402_37645.cljs$core$IIndexed$_nth$arity$2(null,i__37404_37647);
var map__37409_37649__$1 = (((((!((map__37409_37648 == null))))?(((((map__37409_37648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409_37648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37409_37648):map__37409_37648);
var w_37650 = map__37409_37649__$1;
var msg_37651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409_37649__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409_37649__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409_37649__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409_37649__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37654)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37652),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37653),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37651__$1)].join(''));


var G__37656 = seq__37401_37644;
var G__37657 = chunk__37402_37645;
var G__37658 = count__37403_37646;
var G__37659 = (i__37404_37647 + (1));
seq__37401_37644 = G__37656;
chunk__37402_37645 = G__37657;
count__37403_37646 = G__37658;
i__37404_37647 = G__37659;
continue;
} else {
var temp__5735__auto___37660 = cljs.core.seq(seq__37401_37644);
if(temp__5735__auto___37660){
var seq__37401_37661__$1 = temp__5735__auto___37660;
if(cljs.core.chunked_seq_QMARK_(seq__37401_37661__$1)){
var c__4556__auto___37662 = cljs.core.chunk_first(seq__37401_37661__$1);
var G__37663 = cljs.core.chunk_rest(seq__37401_37661__$1);
var G__37664 = c__4556__auto___37662;
var G__37665 = cljs.core.count(c__4556__auto___37662);
var G__37666 = (0);
seq__37401_37644 = G__37663;
chunk__37402_37645 = G__37664;
count__37403_37646 = G__37665;
i__37404_37647 = G__37666;
continue;
} else {
var map__37413_37667 = cljs.core.first(seq__37401_37661__$1);
var map__37413_37668__$1 = (((((!((map__37413_37667 == null))))?(((((map__37413_37667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37413_37667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37413_37667):map__37413_37667);
var w_37669 = map__37413_37668__$1;
var msg_37670__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413_37668__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413_37668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413_37668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413_37668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37673)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37671),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37672),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37670__$1)].join(''));


var G__37676 = cljs.core.next(seq__37401_37661__$1);
var G__37677 = null;
var G__37678 = (0);
var G__37679 = (0);
seq__37401_37644 = G__37676;
chunk__37402_37645 = G__37677;
count__37403_37646 = G__37678;
i__37404_37647 = G__37679;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37388_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37388_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37420){
var map__37421 = p__37420;
var map__37421__$1 = (((((!((map__37421 == null))))?(((((map__37421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37421):map__37421);
var msg = map__37421__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37423 = cljs.core.seq(updates);
var chunk__37425 = null;
var count__37426 = (0);
var i__37427 = (0);
while(true){
if((i__37427 < count__37426)){
var path = chunk__37425.cljs$core$IIndexed$_nth$arity$2(null,i__37427);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37461_37680 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37465_37681 = null;
var count__37466_37682 = (0);
var i__37467_37683 = (0);
while(true){
if((i__37467_37683 < count__37466_37682)){
var node_37684 = chunk__37465_37681.cljs$core$IIndexed$_nth$arity$2(null,i__37467_37683);
if(cljs.core.not(node_37684.shadow$old)){
var path_match_37685 = shadow.cljs.devtools.client.browser.match_paths(node_37684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37685)){
var new_link_37686 = (function (){var G__37489 = node_37684.cloneNode(true);
G__37489.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37489;
})();
(node_37684.shadow$old = true);

(new_link_37686.onload = ((function (seq__37461_37680,chunk__37465_37681,count__37466_37682,i__37467_37683,seq__37423,chunk__37425,count__37426,i__37427,new_link_37686,path_match_37685,node_37684,path,map__37421,map__37421__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37684);
});})(seq__37461_37680,chunk__37465_37681,count__37466_37682,i__37467_37683,seq__37423,chunk__37425,count__37426,i__37427,new_link_37686,path_match_37685,node_37684,path,map__37421,map__37421__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37685], 0));

goog.dom.insertSiblingAfter(new_link_37686,node_37684);


var G__37687 = seq__37461_37680;
var G__37688 = chunk__37465_37681;
var G__37689 = count__37466_37682;
var G__37690 = (i__37467_37683 + (1));
seq__37461_37680 = G__37687;
chunk__37465_37681 = G__37688;
count__37466_37682 = G__37689;
i__37467_37683 = G__37690;
continue;
} else {
var G__37691 = seq__37461_37680;
var G__37692 = chunk__37465_37681;
var G__37693 = count__37466_37682;
var G__37694 = (i__37467_37683 + (1));
seq__37461_37680 = G__37691;
chunk__37465_37681 = G__37692;
count__37466_37682 = G__37693;
i__37467_37683 = G__37694;
continue;
}
} else {
var G__37695 = seq__37461_37680;
var G__37696 = chunk__37465_37681;
var G__37697 = count__37466_37682;
var G__37698 = (i__37467_37683 + (1));
seq__37461_37680 = G__37695;
chunk__37465_37681 = G__37696;
count__37466_37682 = G__37697;
i__37467_37683 = G__37698;
continue;
}
} else {
var temp__5735__auto___37705 = cljs.core.seq(seq__37461_37680);
if(temp__5735__auto___37705){
var seq__37461_37706__$1 = temp__5735__auto___37705;
if(cljs.core.chunked_seq_QMARK_(seq__37461_37706__$1)){
var c__4556__auto___37707 = cljs.core.chunk_first(seq__37461_37706__$1);
var G__37708 = cljs.core.chunk_rest(seq__37461_37706__$1);
var G__37709 = c__4556__auto___37707;
var G__37710 = cljs.core.count(c__4556__auto___37707);
var G__37711 = (0);
seq__37461_37680 = G__37708;
chunk__37465_37681 = G__37709;
count__37466_37682 = G__37710;
i__37467_37683 = G__37711;
continue;
} else {
var node_37712 = cljs.core.first(seq__37461_37706__$1);
if(cljs.core.not(node_37712.shadow$old)){
var path_match_37713 = shadow.cljs.devtools.client.browser.match_paths(node_37712.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37713)){
var new_link_37714 = (function (){var G__37504 = node_37712.cloneNode(true);
G__37504.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37713),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37504;
})();
(node_37712.shadow$old = true);

(new_link_37714.onload = ((function (seq__37461_37680,chunk__37465_37681,count__37466_37682,i__37467_37683,seq__37423,chunk__37425,count__37426,i__37427,new_link_37714,path_match_37713,node_37712,seq__37461_37706__$1,temp__5735__auto___37705,path,map__37421,map__37421__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37712);
});})(seq__37461_37680,chunk__37465_37681,count__37466_37682,i__37467_37683,seq__37423,chunk__37425,count__37426,i__37427,new_link_37714,path_match_37713,node_37712,seq__37461_37706__$1,temp__5735__auto___37705,path,map__37421,map__37421__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37713], 0));

goog.dom.insertSiblingAfter(new_link_37714,node_37712);


var G__37715 = cljs.core.next(seq__37461_37706__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37461_37680 = G__37715;
chunk__37465_37681 = G__37716;
count__37466_37682 = G__37717;
i__37467_37683 = G__37718;
continue;
} else {
var G__37719 = cljs.core.next(seq__37461_37706__$1);
var G__37720 = null;
var G__37721 = (0);
var G__37722 = (0);
seq__37461_37680 = G__37719;
chunk__37465_37681 = G__37720;
count__37466_37682 = G__37721;
i__37467_37683 = G__37722;
continue;
}
} else {
var G__37723 = cljs.core.next(seq__37461_37706__$1);
var G__37724 = null;
var G__37725 = (0);
var G__37726 = (0);
seq__37461_37680 = G__37723;
chunk__37465_37681 = G__37724;
count__37466_37682 = G__37725;
i__37467_37683 = G__37726;
continue;
}
}
} else {
}
}
break;
}


var G__37727 = seq__37423;
var G__37728 = chunk__37425;
var G__37729 = count__37426;
var G__37730 = (i__37427 + (1));
seq__37423 = G__37727;
chunk__37425 = G__37728;
count__37426 = G__37729;
i__37427 = G__37730;
continue;
} else {
var G__37731 = seq__37423;
var G__37732 = chunk__37425;
var G__37733 = count__37426;
var G__37734 = (i__37427 + (1));
seq__37423 = G__37731;
chunk__37425 = G__37732;
count__37426 = G__37733;
i__37427 = G__37734;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37423);
if(temp__5735__auto__){
var seq__37423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37423__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37423__$1);
var G__37735 = cljs.core.chunk_rest(seq__37423__$1);
var G__37736 = c__4556__auto__;
var G__37737 = cljs.core.count(c__4556__auto__);
var G__37738 = (0);
seq__37423 = G__37735;
chunk__37425 = G__37736;
count__37426 = G__37737;
i__37427 = G__37738;
continue;
} else {
var path = cljs.core.first(seq__37423__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37510_37739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37514_37740 = null;
var count__37515_37741 = (0);
var i__37516_37742 = (0);
while(true){
if((i__37516_37742 < count__37515_37741)){
var node_37743 = chunk__37514_37740.cljs$core$IIndexed$_nth$arity$2(null,i__37516_37742);
if(cljs.core.not(node_37743.shadow$old)){
var path_match_37744 = shadow.cljs.devtools.client.browser.match_paths(node_37743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37744)){
var new_link_37745 = (function (){var G__37528 = node_37743.cloneNode(true);
G__37528.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37744),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37528;
})();
(node_37743.shadow$old = true);

(new_link_37745.onload = ((function (seq__37510_37739,chunk__37514_37740,count__37515_37741,i__37516_37742,seq__37423,chunk__37425,count__37426,i__37427,new_link_37745,path_match_37744,node_37743,path,seq__37423__$1,temp__5735__auto__,map__37421,map__37421__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37743);
});})(seq__37510_37739,chunk__37514_37740,count__37515_37741,i__37516_37742,seq__37423,chunk__37425,count__37426,i__37427,new_link_37745,path_match_37744,node_37743,path,seq__37423__$1,temp__5735__auto__,map__37421,map__37421__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37744], 0));

goog.dom.insertSiblingAfter(new_link_37745,node_37743);


var G__37746 = seq__37510_37739;
var G__37747 = chunk__37514_37740;
var G__37748 = count__37515_37741;
var G__37749 = (i__37516_37742 + (1));
seq__37510_37739 = G__37746;
chunk__37514_37740 = G__37747;
count__37515_37741 = G__37748;
i__37516_37742 = G__37749;
continue;
} else {
var G__37750 = seq__37510_37739;
var G__37751 = chunk__37514_37740;
var G__37752 = count__37515_37741;
var G__37753 = (i__37516_37742 + (1));
seq__37510_37739 = G__37750;
chunk__37514_37740 = G__37751;
count__37515_37741 = G__37752;
i__37516_37742 = G__37753;
continue;
}
} else {
var G__37754 = seq__37510_37739;
var G__37755 = chunk__37514_37740;
var G__37756 = count__37515_37741;
var G__37757 = (i__37516_37742 + (1));
seq__37510_37739 = G__37754;
chunk__37514_37740 = G__37755;
count__37515_37741 = G__37756;
i__37516_37742 = G__37757;
continue;
}
} else {
var temp__5735__auto___37758__$1 = cljs.core.seq(seq__37510_37739);
if(temp__5735__auto___37758__$1){
var seq__37510_37759__$1 = temp__5735__auto___37758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37510_37759__$1)){
var c__4556__auto___37760 = cljs.core.chunk_first(seq__37510_37759__$1);
var G__37761 = cljs.core.chunk_rest(seq__37510_37759__$1);
var G__37762 = c__4556__auto___37760;
var G__37763 = cljs.core.count(c__4556__auto___37760);
var G__37764 = (0);
seq__37510_37739 = G__37761;
chunk__37514_37740 = G__37762;
count__37515_37741 = G__37763;
i__37516_37742 = G__37764;
continue;
} else {
var node_37765 = cljs.core.first(seq__37510_37759__$1);
if(cljs.core.not(node_37765.shadow$old)){
var path_match_37766 = shadow.cljs.devtools.client.browser.match_paths(node_37765.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37766)){
var new_link_37767 = (function (){var G__37529 = node_37765.cloneNode(true);
G__37529.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37766),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37529;
})();
(node_37765.shadow$old = true);

(new_link_37767.onload = ((function (seq__37510_37739,chunk__37514_37740,count__37515_37741,i__37516_37742,seq__37423,chunk__37425,count__37426,i__37427,new_link_37767,path_match_37766,node_37765,seq__37510_37759__$1,temp__5735__auto___37758__$1,path,seq__37423__$1,temp__5735__auto__,map__37421,map__37421__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37765);
});})(seq__37510_37739,chunk__37514_37740,count__37515_37741,i__37516_37742,seq__37423,chunk__37425,count__37426,i__37427,new_link_37767,path_match_37766,node_37765,seq__37510_37759__$1,temp__5735__auto___37758__$1,path,seq__37423__$1,temp__5735__auto__,map__37421,map__37421__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37766], 0));

goog.dom.insertSiblingAfter(new_link_37767,node_37765);


var G__37776 = cljs.core.next(seq__37510_37759__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__37510_37739 = G__37776;
chunk__37514_37740 = G__37777;
count__37515_37741 = G__37778;
i__37516_37742 = G__37779;
continue;
} else {
var G__37780 = cljs.core.next(seq__37510_37759__$1);
var G__37781 = null;
var G__37782 = (0);
var G__37783 = (0);
seq__37510_37739 = G__37780;
chunk__37514_37740 = G__37781;
count__37515_37741 = G__37782;
i__37516_37742 = G__37783;
continue;
}
} else {
var G__37784 = cljs.core.next(seq__37510_37759__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37510_37739 = G__37784;
chunk__37514_37740 = G__37785;
count__37515_37741 = G__37786;
i__37516_37742 = G__37787;
continue;
}
}
} else {
}
}
break;
}


var G__37788 = cljs.core.next(seq__37423__$1);
var G__37789 = null;
var G__37790 = (0);
var G__37791 = (0);
seq__37423 = G__37788;
chunk__37425 = G__37789;
count__37426 = G__37790;
i__37427 = G__37791;
continue;
} else {
var G__37792 = cljs.core.next(seq__37423__$1);
var G__37793 = null;
var G__37794 = (0);
var G__37795 = (0);
seq__37423 = G__37792;
chunk__37425 = G__37793;
count__37426 = G__37794;
i__37427 = G__37795;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37530){
var map__37531 = p__37530;
var map__37531__$1 = (((((!((map__37531 == null))))?(((((map__37531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37531):map__37531);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37531__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37548){
var map__37549 = p__37548;
var map__37549__$1 = (((((!((map__37549 == null))))?(((((map__37549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37549):map__37549);
var _ = map__37549__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37553,done,error){
var map__37554 = p__37553;
var map__37554__$1 = (((((!((map__37554 == null))))?(((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37554):map__37554);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37556,done,error){
var map__37557 = p__37556;
var map__37557__$1 = (((((!((map__37557 == null))))?(((((map__37557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37557):map__37557);
var msg = map__37557__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37557__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37557__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37557__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37559){
var map__37560 = p__37559;
var map__37560__$1 = (((((!((map__37560 == null))))?(((((map__37560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37560):map__37560);
var src = map__37560__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37560__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37562 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37562) : done.call(null,G__37562));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37563){
var map__37564 = p__37563;
var map__37564__$1 = (((((!((map__37564 == null))))?(((((map__37564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37564):map__37564);
var msg__$1 = map__37564__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37566){var ex = e37566;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37567){
var map__37568 = p__37567;
var map__37568__$1 = (((((!((map__37568 == null))))?(((((map__37568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37568):map__37568);
var env = map__37568__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37574){
var map__37575 = p__37574;
var map__37575__$1 = (((((!((map__37575 == null))))?(((((map__37575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37575):map__37575);
var msg = map__37575__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37583){
var map__37584 = p__37583;
var map__37584__$1 = (((((!((map__37584 == null))))?(((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37584):map__37584);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37586){
var map__37587 = p__37586;
var map__37587__$1 = (((((!((map__37587 == null))))?(((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37587):map__37587);
var svc = map__37587__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
