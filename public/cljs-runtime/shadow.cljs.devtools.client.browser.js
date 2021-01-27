goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37580 = arguments.length;
var i__4737__auto___37581 = (0);
while(true){
if((i__4737__auto___37581 < len__4736__auto___37580)){
args__4742__auto__.push((arguments[i__4737__auto___37581]));

var G__37583 = (i__4737__auto___37581 + (1));
i__4737__auto___37581 = G__37583;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37357){
var G__37358 = cljs.core.first(seq37357);
var seq37357__$1 = cljs.core.next(seq37357);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37358,seq37357__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37360 = cljs.core.seq(sources);
var chunk__37361 = null;
var count__37362 = (0);
var i__37363 = (0);
while(true){
if((i__37363 < count__37362)){
var map__37378 = chunk__37361.cljs$core$IIndexed$_nth$arity$2(null,i__37363);
var map__37378__$1 = (((((!((map__37378 == null))))?(((((map__37378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37378):map__37378);
var src = map__37378__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37378__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37378__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37378__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37378__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37380){var e_37594 = e37380;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37594);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37594.message)].join('')));
}

var G__37595 = seq__37360;
var G__37596 = chunk__37361;
var G__37597 = count__37362;
var G__37598 = (i__37363 + (1));
seq__37360 = G__37595;
chunk__37361 = G__37596;
count__37362 = G__37597;
i__37363 = G__37598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37360);
if(temp__5735__auto__){
var seq__37360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37360__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37360__$1);
var G__37599 = cljs.core.chunk_rest(seq__37360__$1);
var G__37600 = c__4556__auto__;
var G__37601 = cljs.core.count(c__4556__auto__);
var G__37602 = (0);
seq__37360 = G__37599;
chunk__37361 = G__37600;
count__37362 = G__37601;
i__37363 = G__37602;
continue;
} else {
var map__37381 = cljs.core.first(seq__37360__$1);
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
}catch (e37384){var e_37603 = e37384;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37603);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37603.message)].join('')));
}

var G__37607 = cljs.core.next(seq__37360__$1);
var G__37608 = null;
var G__37609 = (0);
var G__37610 = (0);
seq__37360 = G__37607;
chunk__37361 = G__37608;
count__37362 = G__37609;
i__37363 = G__37610;
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
var seq__37385 = cljs.core.seq(js_requires);
var chunk__37386 = null;
var count__37387 = (0);
var i__37388 = (0);
while(true){
if((i__37388 < count__37387)){
var js_ns = chunk__37386.cljs$core$IIndexed$_nth$arity$2(null,i__37388);
var require_str_37611 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37611);


var G__37612 = seq__37385;
var G__37613 = chunk__37386;
var G__37614 = count__37387;
var G__37615 = (i__37388 + (1));
seq__37385 = G__37612;
chunk__37386 = G__37613;
count__37387 = G__37614;
i__37388 = G__37615;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37385);
if(temp__5735__auto__){
var seq__37385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37385__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37385__$1);
var G__37616 = cljs.core.chunk_rest(seq__37385__$1);
var G__37617 = c__4556__auto__;
var G__37618 = cljs.core.count(c__4556__auto__);
var G__37619 = (0);
seq__37385 = G__37616;
chunk__37386 = G__37617;
count__37387 = G__37618;
i__37388 = G__37619;
continue;
} else {
var js_ns = cljs.core.first(seq__37385__$1);
var require_str_37620 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37620);


var G__37621 = cljs.core.next(seq__37385__$1);
var G__37622 = null;
var G__37623 = (0);
var G__37624 = (0);
seq__37385 = G__37621;
chunk__37386 = G__37622;
count__37387 = G__37623;
i__37388 = G__37624;
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

var G__37630 = (i__37397 + (1));
i__37397 = G__37630;
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
var G__37631 = cljs.core.rest(s__37394__$1);
s__37394__$1 = G__37631;
continue;
}
} else {
var G__37632 = cljs.core.rest(s__37394__$1);
s__37394__$1 = G__37632;
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
var seq__37402_37633 = cljs.core.seq(warnings);
var chunk__37403_37634 = null;
var count__37404_37635 = (0);
var i__37405_37636 = (0);
while(true){
if((i__37405_37636 < count__37404_37635)){
var map__37410_37637 = chunk__37403_37634.cljs$core$IIndexed$_nth$arity$2(null,i__37405_37636);
var map__37410_37638__$1 = (((((!((map__37410_37637 == null))))?(((((map__37410_37637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37410_37637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37410_37637):map__37410_37637);
var w_37639 = map__37410_37638__$1;
var msg_37640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410_37638__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410_37638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410_37638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410_37638__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37643)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37641),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37642),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37640__$1)].join(''));


var G__37646 = seq__37402_37633;
var G__37647 = chunk__37403_37634;
var G__37648 = count__37404_37635;
var G__37649 = (i__37405_37636 + (1));
seq__37402_37633 = G__37646;
chunk__37403_37634 = G__37647;
count__37404_37635 = G__37648;
i__37405_37636 = G__37649;
continue;
} else {
var temp__5735__auto___37650 = cljs.core.seq(seq__37402_37633);
if(temp__5735__auto___37650){
var seq__37402_37651__$1 = temp__5735__auto___37650;
if(cljs.core.chunked_seq_QMARK_(seq__37402_37651__$1)){
var c__4556__auto___37652 = cljs.core.chunk_first(seq__37402_37651__$1);
var G__37653 = cljs.core.chunk_rest(seq__37402_37651__$1);
var G__37654 = c__4556__auto___37652;
var G__37655 = cljs.core.count(c__4556__auto___37652);
var G__37656 = (0);
seq__37402_37633 = G__37653;
chunk__37403_37634 = G__37654;
count__37404_37635 = G__37655;
i__37405_37636 = G__37656;
continue;
} else {
var map__37412_37657 = cljs.core.first(seq__37402_37651__$1);
var map__37412_37658__$1 = (((((!((map__37412_37657 == null))))?(((((map__37412_37657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412_37657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37412_37657):map__37412_37657);
var w_37659 = map__37412_37658__$1;
var msg_37660__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37658__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37663)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37661),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37662),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37660__$1)].join(''));


var G__37666 = cljs.core.next(seq__37402_37651__$1);
var G__37667 = null;
var G__37668 = (0);
var G__37669 = (0);
seq__37402_37633 = G__37666;
chunk__37403_37634 = G__37667;
count__37404_37635 = G__37668;
i__37405_37636 = G__37669;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37389_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37389_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37416){
var map__37417 = p__37416;
var map__37417__$1 = (((((!((map__37417 == null))))?(((((map__37417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37417):map__37417);
var msg = map__37417__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37419 = cljs.core.seq(updates);
var chunk__37421 = null;
var count__37422 = (0);
var i__37423 = (0);
while(true){
if((i__37423 < count__37422)){
var path = chunk__37421.cljs$core$IIndexed$_nth$arity$2(null,i__37423);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37463_37671 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37467_37672 = null;
var count__37468_37673 = (0);
var i__37469_37674 = (0);
while(true){
if((i__37469_37674 < count__37468_37673)){
var node_37675 = chunk__37467_37672.cljs$core$IIndexed$_nth$arity$2(null,i__37469_37674);
if(cljs.core.not(node_37675.shadow$old)){
var path_match_37683 = shadow.cljs.devtools.client.browser.match_paths(node_37675.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37683)){
var new_link_37684 = (function (){var G__37487 = node_37675.cloneNode(true);
G__37487.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37683),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37487;
})();
(node_37675.shadow$old = true);

(new_link_37684.onload = ((function (seq__37463_37671,chunk__37467_37672,count__37468_37673,i__37469_37674,seq__37419,chunk__37421,count__37422,i__37423,new_link_37684,path_match_37683,node_37675,path,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37675);
});})(seq__37463_37671,chunk__37467_37672,count__37468_37673,i__37469_37674,seq__37419,chunk__37421,count__37422,i__37423,new_link_37684,path_match_37683,node_37675,path,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37683], 0));

goog.dom.insertSiblingAfter(new_link_37684,node_37675);


var G__37687 = seq__37463_37671;
var G__37688 = chunk__37467_37672;
var G__37689 = count__37468_37673;
var G__37690 = (i__37469_37674 + (1));
seq__37463_37671 = G__37687;
chunk__37467_37672 = G__37688;
count__37468_37673 = G__37689;
i__37469_37674 = G__37690;
continue;
} else {
var G__37691 = seq__37463_37671;
var G__37692 = chunk__37467_37672;
var G__37693 = count__37468_37673;
var G__37694 = (i__37469_37674 + (1));
seq__37463_37671 = G__37691;
chunk__37467_37672 = G__37692;
count__37468_37673 = G__37693;
i__37469_37674 = G__37694;
continue;
}
} else {
var G__37695 = seq__37463_37671;
var G__37696 = chunk__37467_37672;
var G__37697 = count__37468_37673;
var G__37698 = (i__37469_37674 + (1));
seq__37463_37671 = G__37695;
chunk__37467_37672 = G__37696;
count__37468_37673 = G__37697;
i__37469_37674 = G__37698;
continue;
}
} else {
var temp__5735__auto___37699 = cljs.core.seq(seq__37463_37671);
if(temp__5735__auto___37699){
var seq__37463_37700__$1 = temp__5735__auto___37699;
if(cljs.core.chunked_seq_QMARK_(seq__37463_37700__$1)){
var c__4556__auto___37701 = cljs.core.chunk_first(seq__37463_37700__$1);
var G__37702 = cljs.core.chunk_rest(seq__37463_37700__$1);
var G__37703 = c__4556__auto___37701;
var G__37704 = cljs.core.count(c__4556__auto___37701);
var G__37705 = (0);
seq__37463_37671 = G__37702;
chunk__37467_37672 = G__37703;
count__37468_37673 = G__37704;
i__37469_37674 = G__37705;
continue;
} else {
var node_37706 = cljs.core.first(seq__37463_37700__$1);
if(cljs.core.not(node_37706.shadow$old)){
var path_match_37707 = shadow.cljs.devtools.client.browser.match_paths(node_37706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37707)){
var new_link_37708 = (function (){var G__37492 = node_37706.cloneNode(true);
G__37492.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37492;
})();
(node_37706.shadow$old = true);

(new_link_37708.onload = ((function (seq__37463_37671,chunk__37467_37672,count__37468_37673,i__37469_37674,seq__37419,chunk__37421,count__37422,i__37423,new_link_37708,path_match_37707,node_37706,seq__37463_37700__$1,temp__5735__auto___37699,path,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37706);
});})(seq__37463_37671,chunk__37467_37672,count__37468_37673,i__37469_37674,seq__37419,chunk__37421,count__37422,i__37423,new_link_37708,path_match_37707,node_37706,seq__37463_37700__$1,temp__5735__auto___37699,path,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37707], 0));

goog.dom.insertSiblingAfter(new_link_37708,node_37706);


var G__37709 = cljs.core.next(seq__37463_37700__$1);
var G__37710 = null;
var G__37711 = (0);
var G__37712 = (0);
seq__37463_37671 = G__37709;
chunk__37467_37672 = G__37710;
count__37468_37673 = G__37711;
i__37469_37674 = G__37712;
continue;
} else {
var G__37713 = cljs.core.next(seq__37463_37700__$1);
var G__37714 = null;
var G__37715 = (0);
var G__37716 = (0);
seq__37463_37671 = G__37713;
chunk__37467_37672 = G__37714;
count__37468_37673 = G__37715;
i__37469_37674 = G__37716;
continue;
}
} else {
var G__37717 = cljs.core.next(seq__37463_37700__$1);
var G__37718 = null;
var G__37719 = (0);
var G__37720 = (0);
seq__37463_37671 = G__37717;
chunk__37467_37672 = G__37718;
count__37468_37673 = G__37719;
i__37469_37674 = G__37720;
continue;
}
}
} else {
}
}
break;
}


var G__37721 = seq__37419;
var G__37722 = chunk__37421;
var G__37723 = count__37422;
var G__37724 = (i__37423 + (1));
seq__37419 = G__37721;
chunk__37421 = G__37722;
count__37422 = G__37723;
i__37423 = G__37724;
continue;
} else {
var G__37725 = seq__37419;
var G__37726 = chunk__37421;
var G__37727 = count__37422;
var G__37728 = (i__37423 + (1));
seq__37419 = G__37725;
chunk__37421 = G__37726;
count__37422 = G__37727;
i__37423 = G__37728;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37419);
if(temp__5735__auto__){
var seq__37419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37419__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37419__$1);
var G__37729 = cljs.core.chunk_rest(seq__37419__$1);
var G__37730 = c__4556__auto__;
var G__37731 = cljs.core.count(c__4556__auto__);
var G__37732 = (0);
seq__37419 = G__37729;
chunk__37421 = G__37730;
count__37422 = G__37731;
i__37423 = G__37732;
continue;
} else {
var path = cljs.core.first(seq__37419__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37498_37733 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37502_37734 = null;
var count__37503_37735 = (0);
var i__37504_37736 = (0);
while(true){
if((i__37504_37736 < count__37503_37735)){
var node_37737 = chunk__37502_37734.cljs$core$IIndexed$_nth$arity$2(null,i__37504_37736);
if(cljs.core.not(node_37737.shadow$old)){
var path_match_37738 = shadow.cljs.devtools.client.browser.match_paths(node_37737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37738)){
var new_link_37739 = (function (){var G__37510 = node_37737.cloneNode(true);
G__37510.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37510;
})();
(node_37737.shadow$old = true);

(new_link_37739.onload = ((function (seq__37498_37733,chunk__37502_37734,count__37503_37735,i__37504_37736,seq__37419,chunk__37421,count__37422,i__37423,new_link_37739,path_match_37738,node_37737,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37737);
});})(seq__37498_37733,chunk__37502_37734,count__37503_37735,i__37504_37736,seq__37419,chunk__37421,count__37422,i__37423,new_link_37739,path_match_37738,node_37737,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37738], 0));

goog.dom.insertSiblingAfter(new_link_37739,node_37737);


var G__37740 = seq__37498_37733;
var G__37741 = chunk__37502_37734;
var G__37742 = count__37503_37735;
var G__37743 = (i__37504_37736 + (1));
seq__37498_37733 = G__37740;
chunk__37502_37734 = G__37741;
count__37503_37735 = G__37742;
i__37504_37736 = G__37743;
continue;
} else {
var G__37744 = seq__37498_37733;
var G__37745 = chunk__37502_37734;
var G__37746 = count__37503_37735;
var G__37747 = (i__37504_37736 + (1));
seq__37498_37733 = G__37744;
chunk__37502_37734 = G__37745;
count__37503_37735 = G__37746;
i__37504_37736 = G__37747;
continue;
}
} else {
var G__37748 = seq__37498_37733;
var G__37749 = chunk__37502_37734;
var G__37750 = count__37503_37735;
var G__37751 = (i__37504_37736 + (1));
seq__37498_37733 = G__37748;
chunk__37502_37734 = G__37749;
count__37503_37735 = G__37750;
i__37504_37736 = G__37751;
continue;
}
} else {
var temp__5735__auto___37752__$1 = cljs.core.seq(seq__37498_37733);
if(temp__5735__auto___37752__$1){
var seq__37498_37753__$1 = temp__5735__auto___37752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37498_37753__$1)){
var c__4556__auto___37754 = cljs.core.chunk_first(seq__37498_37753__$1);
var G__37755 = cljs.core.chunk_rest(seq__37498_37753__$1);
var G__37756 = c__4556__auto___37754;
var G__37757 = cljs.core.count(c__4556__auto___37754);
var G__37758 = (0);
seq__37498_37733 = G__37755;
chunk__37502_37734 = G__37756;
count__37503_37735 = G__37757;
i__37504_37736 = G__37758;
continue;
} else {
var node_37759 = cljs.core.first(seq__37498_37753__$1);
if(cljs.core.not(node_37759.shadow$old)){
var path_match_37760 = shadow.cljs.devtools.client.browser.match_paths(node_37759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37760)){
var new_link_37761 = (function (){var G__37517 = node_37759.cloneNode(true);
G__37517.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37760),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37517;
})();
(node_37759.shadow$old = true);

(new_link_37761.onload = ((function (seq__37498_37733,chunk__37502_37734,count__37503_37735,i__37504_37736,seq__37419,chunk__37421,count__37422,i__37423,new_link_37761,path_match_37760,node_37759,seq__37498_37753__$1,temp__5735__auto___37752__$1,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37759);
});})(seq__37498_37733,chunk__37502_37734,count__37503_37735,i__37504_37736,seq__37419,chunk__37421,count__37422,i__37423,new_link_37761,path_match_37760,node_37759,seq__37498_37753__$1,temp__5735__auto___37752__$1,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37760], 0));

goog.dom.insertSiblingAfter(new_link_37761,node_37759);


var G__37762 = cljs.core.next(seq__37498_37753__$1);
var G__37763 = null;
var G__37764 = (0);
var G__37765 = (0);
seq__37498_37733 = G__37762;
chunk__37502_37734 = G__37763;
count__37503_37735 = G__37764;
i__37504_37736 = G__37765;
continue;
} else {
var G__37766 = cljs.core.next(seq__37498_37753__$1);
var G__37767 = null;
var G__37768 = (0);
var G__37769 = (0);
seq__37498_37733 = G__37766;
chunk__37502_37734 = G__37767;
count__37503_37735 = G__37768;
i__37504_37736 = G__37769;
continue;
}
} else {
var G__37770 = cljs.core.next(seq__37498_37753__$1);
var G__37771 = null;
var G__37772 = (0);
var G__37773 = (0);
seq__37498_37733 = G__37770;
chunk__37502_37734 = G__37771;
count__37503_37735 = G__37772;
i__37504_37736 = G__37773;
continue;
}
}
} else {
}
}
break;
}


var G__37774 = cljs.core.next(seq__37419__$1);
var G__37775 = null;
var G__37776 = (0);
var G__37777 = (0);
seq__37419 = G__37774;
chunk__37421 = G__37775;
count__37422 = G__37776;
i__37423 = G__37777;
continue;
} else {
var G__37778 = cljs.core.next(seq__37419__$1);
var G__37779 = null;
var G__37780 = (0);
var G__37781 = (0);
seq__37419 = G__37778;
chunk__37421 = G__37779;
count__37422 = G__37780;
i__37423 = G__37781;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37533){
var map__37534 = p__37533;
var map__37534__$1 = (((((!((map__37534 == null))))?(((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37534):map__37534);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37542){
var map__37543 = p__37542;
var map__37543__$1 = (((((!((map__37543 == null))))?(((((map__37543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37543):map__37543);
var _ = map__37543__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37543__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37545,done,error){
var map__37546 = p__37545;
var map__37546__$1 = (((((!((map__37546 == null))))?(((((map__37546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37546):map__37546);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37548,done,error){
var map__37549 = p__37548;
var map__37549__$1 = (((((!((map__37549 == null))))?(((((map__37549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37549):map__37549);
var msg = map__37549__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37553){
var map__37554 = p__37553;
var map__37554__$1 = (((((!((map__37554 == null))))?(((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37554):map__37554);
var src = map__37554__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37556 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37556) : done.call(null,G__37556));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37557){
var map__37558 = p__37557;
var map__37558__$1 = (((((!((map__37558 == null))))?(((((map__37558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37558):map__37558);
var msg__$1 = map__37558__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37558__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37560){var ex = e37560;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37561){
var map__37562 = p__37561;
var map__37562__$1 = (((((!((map__37562 == null))))?(((((map__37562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37562):map__37562);
var env = map__37562__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37562__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37570){
var map__37571 = p__37570;
var map__37571__$1 = (((((!((map__37571 == null))))?(((((map__37571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37571):map__37571);
var msg = map__37571__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37571__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37573){
var map__37574 = p__37573;
var map__37574__$1 = (((((!((map__37574 == null))))?(((((map__37574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37574):map__37574);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37576){
var map__37577 = p__37576;
var map__37577__$1 = (((((!((map__37577 == null))))?(((((map__37577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37577):map__37577);
var svc = map__37577__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37577__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
