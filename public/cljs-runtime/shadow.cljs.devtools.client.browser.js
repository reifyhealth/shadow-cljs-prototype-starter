goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37586 = arguments.length;
var i__4737__auto___37587 = (0);
while(true){
if((i__4737__auto___37587 < len__4736__auto___37586)){
args__4742__auto__.push((arguments[i__4737__auto___37587]));

var G__37588 = (i__4737__auto___37587 + (1));
i__4737__auto___37587 = G__37588;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37363){
var G__37364 = cljs.core.first(seq37363);
var seq37363__$1 = cljs.core.next(seq37363);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37364,seq37363__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37366 = cljs.core.seq(sources);
var chunk__37367 = null;
var count__37368 = (0);
var i__37369 = (0);
while(true){
if((i__37369 < count__37368)){
var map__37376 = chunk__37367.cljs$core$IIndexed$_nth$arity$2(null,i__37369);
var map__37376__$1 = (((((!((map__37376 == null))))?(((((map__37376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37376):map__37376);
var src = map__37376__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37378){var e_37604 = e37378;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37604);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37604.message)].join('')));
}

var G__37605 = seq__37366;
var G__37606 = chunk__37367;
var G__37607 = count__37368;
var G__37608 = (i__37369 + (1));
seq__37366 = G__37605;
chunk__37367 = G__37606;
count__37368 = G__37607;
i__37369 = G__37608;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37366);
if(temp__5735__auto__){
var seq__37366__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37366__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37366__$1);
var G__37609 = cljs.core.chunk_rest(seq__37366__$1);
var G__37610 = c__4556__auto__;
var G__37611 = cljs.core.count(c__4556__auto__);
var G__37612 = (0);
seq__37366 = G__37609;
chunk__37367 = G__37610;
count__37368 = G__37611;
i__37369 = G__37612;
continue;
} else {
var map__37379 = cljs.core.first(seq__37366__$1);
var map__37379__$1 = (((((!((map__37379 == null))))?(((((map__37379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37379):map__37379);
var src = map__37379__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37381){var e_37613 = e37381;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37613);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37613.message)].join('')));
}

var G__37614 = cljs.core.next(seq__37366__$1);
var G__37615 = null;
var G__37616 = (0);
var G__37617 = (0);
seq__37366 = G__37614;
chunk__37367 = G__37615;
count__37368 = G__37616;
i__37369 = G__37617;
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
var require_str_37618 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37618);


var G__37619 = seq__37385;
var G__37620 = chunk__37386;
var G__37621 = count__37387;
var G__37622 = (i__37388 + (1));
seq__37385 = G__37619;
chunk__37386 = G__37620;
count__37387 = G__37621;
i__37388 = G__37622;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37385);
if(temp__5735__auto__){
var seq__37385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37385__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37385__$1);
var G__37623 = cljs.core.chunk_rest(seq__37385__$1);
var G__37624 = c__4556__auto__;
var G__37625 = cljs.core.count(c__4556__auto__);
var G__37626 = (0);
seq__37385 = G__37623;
chunk__37386 = G__37624;
count__37387 = G__37625;
i__37388 = G__37626;
continue;
} else {
var js_ns = cljs.core.first(seq__37385__$1);
var require_str_37627 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37627);


var G__37628 = cljs.core.next(seq__37385__$1);
var G__37629 = null;
var G__37630 = (0);
var G__37631 = (0);
seq__37385 = G__37628;
chunk__37386 = G__37629;
count__37387 = G__37630;
i__37388 = G__37631;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37391){
var map__37392 = p__37391;
var map__37392__$1 = (((((!((map__37392 == null))))?(((((map__37392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37392):map__37392);
var msg = map__37392__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37392__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37392__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37394(s__37395){
return (new cljs.core.LazySeq(null,(function (){
var s__37395__$1 = s__37395;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37395__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37400 = cljs.core.first(xs__6292__auto__);
var map__37400__$1 = (((((!((map__37400 == null))))?(((((map__37400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37400):map__37400);
var src = map__37400__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37400__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37400__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37395__$1,map__37400,map__37400__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37392,map__37392__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37394_$_iter__37396(s__37397){
return (new cljs.core.LazySeq(null,((function (s__37395__$1,map__37400,map__37400__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37392,map__37392__$1,msg,info,reload_info){
return (function (){
var s__37397__$1 = s__37397;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37397__$1);
if(temp__5735__auto____$1){
var s__37397__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37397__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37397__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37399 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37398 = (0);
while(true){
if((i__37398 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37398);
cljs.core.chunk_append(b__37399,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37632 = (i__37398 + (1));
i__37398 = G__37632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37399),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37394_$_iter__37396(cljs.core.chunk_rest(s__37397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37399),null);
}
} else {
var warning = cljs.core.first(s__37397__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37394_$_iter__37396(cljs.core.rest(s__37397__$2)));
}
} else {
return null;
}
break;
}
});})(s__37395__$1,map__37400,map__37400__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37392,map__37392__$1,msg,info,reload_info))
,null,null));
});})(s__37395__$1,map__37400,map__37400__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37392,map__37392__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37394(cljs.core.rest(s__37395__$1)));
} else {
var G__37633 = cljs.core.rest(s__37395__$1);
s__37395__$1 = G__37633;
continue;
}
} else {
var G__37634 = cljs.core.rest(s__37395__$1);
s__37395__$1 = G__37634;
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
var seq__37402_37635 = cljs.core.seq(warnings);
var chunk__37403_37636 = null;
var count__37404_37637 = (0);
var i__37405_37638 = (0);
while(true){
if((i__37405_37638 < count__37404_37637)){
var map__37412_37639 = chunk__37403_37636.cljs$core$IIndexed$_nth$arity$2(null,i__37405_37638);
var map__37412_37640__$1 = (((((!((map__37412_37639 == null))))?(((((map__37412_37639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412_37639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37412_37639):map__37412_37639);
var w_37641 = map__37412_37640__$1;
var msg_37642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37640__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37640__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37640__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412_37640__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37645)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37643),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37644),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37642__$1)].join(''));


var G__37646 = seq__37402_37635;
var G__37647 = chunk__37403_37636;
var G__37648 = count__37404_37637;
var G__37649 = (i__37405_37638 + (1));
seq__37402_37635 = G__37646;
chunk__37403_37636 = G__37647;
count__37404_37637 = G__37648;
i__37405_37638 = G__37649;
continue;
} else {
var temp__5735__auto___37650 = cljs.core.seq(seq__37402_37635);
if(temp__5735__auto___37650){
var seq__37402_37651__$1 = temp__5735__auto___37650;
if(cljs.core.chunked_seq_QMARK_(seq__37402_37651__$1)){
var c__4556__auto___37652 = cljs.core.chunk_first(seq__37402_37651__$1);
var G__37653 = cljs.core.chunk_rest(seq__37402_37651__$1);
var G__37654 = c__4556__auto___37652;
var G__37655 = cljs.core.count(c__4556__auto___37652);
var G__37656 = (0);
seq__37402_37635 = G__37653;
chunk__37403_37636 = G__37654;
count__37404_37637 = G__37655;
i__37405_37638 = G__37656;
continue;
} else {
var map__37414_37657 = cljs.core.first(seq__37402_37651__$1);
var map__37414_37658__$1 = (((((!((map__37414_37657 == null))))?(((((map__37414_37657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37414_37657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37414_37657):map__37414_37657);
var w_37659 = map__37414_37658__$1;
var msg_37660__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37414_37658__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37414_37658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37414_37658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37414_37658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37663)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37661),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37662),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37660__$1)].join(''));


var G__37677 = cljs.core.next(seq__37402_37651__$1);
var G__37678 = null;
var G__37679 = (0);
var G__37680 = (0);
seq__37402_37635 = G__37677;
chunk__37403_37636 = G__37678;
count__37404_37637 = G__37679;
i__37405_37638 = G__37680;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37390_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37390_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var seq__37474_37685 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37478_37686 = null;
var count__37479_37687 = (0);
var i__37480_37688 = (0);
while(true){
if((i__37480_37688 < count__37479_37687)){
var node_37689 = chunk__37478_37686.cljs$core$IIndexed$_nth$arity$2(null,i__37480_37688);
if(cljs.core.not(node_37689.shadow$old)){
var path_match_37690 = shadow.cljs.devtools.client.browser.match_paths(node_37689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37690)){
var new_link_37691 = (function (){var G__37505 = node_37689.cloneNode(true);
G__37505.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37690),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37505;
})();
(node_37689.shadow$old = true);

(new_link_37691.onload = ((function (seq__37474_37685,chunk__37478_37686,count__37479_37687,i__37480_37688,seq__37419,chunk__37421,count__37422,i__37423,new_link_37691,path_match_37690,node_37689,path,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37689);
});})(seq__37474_37685,chunk__37478_37686,count__37479_37687,i__37480_37688,seq__37419,chunk__37421,count__37422,i__37423,new_link_37691,path_match_37690,node_37689,path,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37690], 0));

goog.dom.insertSiblingAfter(new_link_37691,node_37689);


var G__37692 = seq__37474_37685;
var G__37693 = chunk__37478_37686;
var G__37694 = count__37479_37687;
var G__37695 = (i__37480_37688 + (1));
seq__37474_37685 = G__37692;
chunk__37478_37686 = G__37693;
count__37479_37687 = G__37694;
i__37480_37688 = G__37695;
continue;
} else {
var G__37697 = seq__37474_37685;
var G__37698 = chunk__37478_37686;
var G__37699 = count__37479_37687;
var G__37700 = (i__37480_37688 + (1));
seq__37474_37685 = G__37697;
chunk__37478_37686 = G__37698;
count__37479_37687 = G__37699;
i__37480_37688 = G__37700;
continue;
}
} else {
var G__37701 = seq__37474_37685;
var G__37702 = chunk__37478_37686;
var G__37703 = count__37479_37687;
var G__37704 = (i__37480_37688 + (1));
seq__37474_37685 = G__37701;
chunk__37478_37686 = G__37702;
count__37479_37687 = G__37703;
i__37480_37688 = G__37704;
continue;
}
} else {
var temp__5735__auto___37705 = cljs.core.seq(seq__37474_37685);
if(temp__5735__auto___37705){
var seq__37474_37706__$1 = temp__5735__auto___37705;
if(cljs.core.chunked_seq_QMARK_(seq__37474_37706__$1)){
var c__4556__auto___37707 = cljs.core.chunk_first(seq__37474_37706__$1);
var G__37708 = cljs.core.chunk_rest(seq__37474_37706__$1);
var G__37709 = c__4556__auto___37707;
var G__37710 = cljs.core.count(c__4556__auto___37707);
var G__37711 = (0);
seq__37474_37685 = G__37708;
chunk__37478_37686 = G__37709;
count__37479_37687 = G__37710;
i__37480_37688 = G__37711;
continue;
} else {
var node_37712 = cljs.core.first(seq__37474_37706__$1);
if(cljs.core.not(node_37712.shadow$old)){
var path_match_37713 = shadow.cljs.devtools.client.browser.match_paths(node_37712.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37713)){
var new_link_37714 = (function (){var G__37507 = node_37712.cloneNode(true);
G__37507.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37713),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37507;
})();
(node_37712.shadow$old = true);

(new_link_37714.onload = ((function (seq__37474_37685,chunk__37478_37686,count__37479_37687,i__37480_37688,seq__37419,chunk__37421,count__37422,i__37423,new_link_37714,path_match_37713,node_37712,seq__37474_37706__$1,temp__5735__auto___37705,path,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37712);
});})(seq__37474_37685,chunk__37478_37686,count__37479_37687,i__37480_37688,seq__37419,chunk__37421,count__37422,i__37423,new_link_37714,path_match_37713,node_37712,seq__37474_37706__$1,temp__5735__auto___37705,path,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37713], 0));

goog.dom.insertSiblingAfter(new_link_37714,node_37712);


var G__37718 = cljs.core.next(seq__37474_37706__$1);
var G__37719 = null;
var G__37720 = (0);
var G__37721 = (0);
seq__37474_37685 = G__37718;
chunk__37478_37686 = G__37719;
count__37479_37687 = G__37720;
i__37480_37688 = G__37721;
continue;
} else {
var G__37722 = cljs.core.next(seq__37474_37706__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__37474_37685 = G__37722;
chunk__37478_37686 = G__37723;
count__37479_37687 = G__37724;
i__37480_37688 = G__37725;
continue;
}
} else {
var G__37726 = cljs.core.next(seq__37474_37706__$1);
var G__37727 = null;
var G__37728 = (0);
var G__37729 = (0);
seq__37474_37685 = G__37726;
chunk__37478_37686 = G__37727;
count__37479_37687 = G__37728;
i__37480_37688 = G__37729;
continue;
}
}
} else {
}
}
break;
}


var G__37730 = seq__37419;
var G__37731 = chunk__37421;
var G__37732 = count__37422;
var G__37733 = (i__37423 + (1));
seq__37419 = G__37730;
chunk__37421 = G__37731;
count__37422 = G__37732;
i__37423 = G__37733;
continue;
} else {
var G__37734 = seq__37419;
var G__37735 = chunk__37421;
var G__37736 = count__37422;
var G__37737 = (i__37423 + (1));
seq__37419 = G__37734;
chunk__37421 = G__37735;
count__37422 = G__37736;
i__37423 = G__37737;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37419);
if(temp__5735__auto__){
var seq__37419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37419__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37419__$1);
var G__37738 = cljs.core.chunk_rest(seq__37419__$1);
var G__37739 = c__4556__auto__;
var G__37740 = cljs.core.count(c__4556__auto__);
var G__37741 = (0);
seq__37419 = G__37738;
chunk__37421 = G__37739;
count__37422 = G__37740;
i__37423 = G__37741;
continue;
} else {
var path = cljs.core.first(seq__37419__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37513_37742 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37517_37743 = null;
var count__37518_37744 = (0);
var i__37519_37745 = (0);
while(true){
if((i__37519_37745 < count__37518_37744)){
var node_37746 = chunk__37517_37743.cljs$core$IIndexed$_nth$arity$2(null,i__37519_37745);
if(cljs.core.not(node_37746.shadow$old)){
var path_match_37747 = shadow.cljs.devtools.client.browser.match_paths(node_37746.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37747)){
var new_link_37748 = (function (){var G__37525 = node_37746.cloneNode(true);
G__37525.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37747),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37525;
})();
(node_37746.shadow$old = true);

(new_link_37748.onload = ((function (seq__37513_37742,chunk__37517_37743,count__37518_37744,i__37519_37745,seq__37419,chunk__37421,count__37422,i__37423,new_link_37748,path_match_37747,node_37746,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37746);
});})(seq__37513_37742,chunk__37517_37743,count__37518_37744,i__37519_37745,seq__37419,chunk__37421,count__37422,i__37423,new_link_37748,path_match_37747,node_37746,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37747], 0));

goog.dom.insertSiblingAfter(new_link_37748,node_37746);


var G__37753 = seq__37513_37742;
var G__37754 = chunk__37517_37743;
var G__37755 = count__37518_37744;
var G__37756 = (i__37519_37745 + (1));
seq__37513_37742 = G__37753;
chunk__37517_37743 = G__37754;
count__37518_37744 = G__37755;
i__37519_37745 = G__37756;
continue;
} else {
var G__37757 = seq__37513_37742;
var G__37758 = chunk__37517_37743;
var G__37759 = count__37518_37744;
var G__37760 = (i__37519_37745 + (1));
seq__37513_37742 = G__37757;
chunk__37517_37743 = G__37758;
count__37518_37744 = G__37759;
i__37519_37745 = G__37760;
continue;
}
} else {
var G__37761 = seq__37513_37742;
var G__37762 = chunk__37517_37743;
var G__37763 = count__37518_37744;
var G__37764 = (i__37519_37745 + (1));
seq__37513_37742 = G__37761;
chunk__37517_37743 = G__37762;
count__37518_37744 = G__37763;
i__37519_37745 = G__37764;
continue;
}
} else {
var temp__5735__auto___37765__$1 = cljs.core.seq(seq__37513_37742);
if(temp__5735__auto___37765__$1){
var seq__37513_37766__$1 = temp__5735__auto___37765__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37513_37766__$1)){
var c__4556__auto___37767 = cljs.core.chunk_first(seq__37513_37766__$1);
var G__37768 = cljs.core.chunk_rest(seq__37513_37766__$1);
var G__37769 = c__4556__auto___37767;
var G__37770 = cljs.core.count(c__4556__auto___37767);
var G__37771 = (0);
seq__37513_37742 = G__37768;
chunk__37517_37743 = G__37769;
count__37518_37744 = G__37770;
i__37519_37745 = G__37771;
continue;
} else {
var node_37772 = cljs.core.first(seq__37513_37766__$1);
if(cljs.core.not(node_37772.shadow$old)){
var path_match_37773 = shadow.cljs.devtools.client.browser.match_paths(node_37772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37773)){
var new_link_37774 = (function (){var G__37528 = node_37772.cloneNode(true);
G__37528.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37528;
})();
(node_37772.shadow$old = true);

(new_link_37774.onload = ((function (seq__37513_37742,chunk__37517_37743,count__37518_37744,i__37519_37745,seq__37419,chunk__37421,count__37422,i__37423,new_link_37774,path_match_37773,node_37772,seq__37513_37766__$1,temp__5735__auto___37765__$1,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37772);
});})(seq__37513_37742,chunk__37517_37743,count__37518_37744,i__37519_37745,seq__37419,chunk__37421,count__37422,i__37423,new_link_37774,path_match_37773,node_37772,seq__37513_37766__$1,temp__5735__auto___37765__$1,path,seq__37419__$1,temp__5735__auto__,map__37417,map__37417__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37773], 0));

goog.dom.insertSiblingAfter(new_link_37774,node_37772);


var G__37776 = cljs.core.next(seq__37513_37766__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__37513_37742 = G__37776;
chunk__37517_37743 = G__37777;
count__37518_37744 = G__37778;
i__37519_37745 = G__37779;
continue;
} else {
var G__37780 = cljs.core.next(seq__37513_37766__$1);
var G__37781 = null;
var G__37782 = (0);
var G__37783 = (0);
seq__37513_37742 = G__37780;
chunk__37517_37743 = G__37781;
count__37518_37744 = G__37782;
i__37519_37745 = G__37783;
continue;
}
} else {
var G__37784 = cljs.core.next(seq__37513_37766__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37513_37742 = G__37784;
chunk__37517_37743 = G__37785;
count__37518_37744 = G__37786;
i__37519_37745 = G__37787;
continue;
}
}
} else {
}
}
break;
}


var G__37788 = cljs.core.next(seq__37419__$1);
var G__37789 = null;
var G__37790 = (0);
var G__37791 = (0);
seq__37419 = G__37788;
chunk__37421 = G__37789;
count__37422 = G__37790;
i__37423 = G__37791;
continue;
} else {
var G__37792 = cljs.core.next(seq__37419__$1);
var G__37793 = null;
var G__37794 = (0);
var G__37795 = (0);
seq__37419 = G__37792;
chunk__37421 = G__37793;
count__37422 = G__37794;
i__37423 = G__37795;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37529){
var map__37530 = p__37529;
var map__37530__$1 = (((((!((map__37530 == null))))?(((((map__37530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37530):map__37530);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37530__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37536){
var map__37537 = p__37536;
var map__37537__$1 = (((((!((map__37537 == null))))?(((((map__37537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37537):map__37537);
var _ = map__37537__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37539,done,error){
var map__37542 = p__37539;
var map__37542__$1 = (((((!((map__37542 == null))))?(((((map__37542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37542):map__37542);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37542__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37544,done,error){
var map__37545 = p__37544;
var map__37545__$1 = (((((!((map__37545 == null))))?(((((map__37545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37545):map__37545);
var msg = map__37545__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37547){
var map__37548 = p__37547;
var map__37548__$1 = (((((!((map__37548 == null))))?(((((map__37548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37548):map__37548);
var src = map__37548__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37548__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37551 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37551) : done.call(null,G__37551));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37555){
var map__37556 = p__37555;
var map__37556__$1 = (((((!((map__37556 == null))))?(((((map__37556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37556):map__37556);
var msg__$1 = map__37556__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37558){var ex = e37558;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37565){
var map__37566 = p__37565;
var map__37566__$1 = (((((!((map__37566 == null))))?(((((map__37566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37566):map__37566);
var env = map__37566__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37568){
var map__37574 = p__37568;
var map__37574__$1 = (((((!((map__37574 == null))))?(((((map__37574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37574):map__37574);
var msg = map__37574__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37578){
var map__37579 = p__37578;
var map__37579__$1 = (((((!((map__37579 == null))))?(((((map__37579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37579):map__37579);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37581){
var map__37582 = p__37581;
var map__37582__$1 = (((((!((map__37582 == null))))?(((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37582):map__37582);
var svc = map__37582__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37582__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
