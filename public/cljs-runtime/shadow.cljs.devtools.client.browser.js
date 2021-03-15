goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35913 = arguments.length;
var i__4737__auto___35914 = (0);
while(true){
if((i__4737__auto___35914 < len__4736__auto___35913)){
args__4742__auto__.push((arguments[i__4737__auto___35914]));

var G__35915 = (i__4737__auto___35914 + (1));
i__4737__auto___35914 = G__35915;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35677){
var G__35678 = cljs.core.first(seq35677);
var seq35677__$1 = cljs.core.next(seq35677);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35678,seq35677__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35682 = cljs.core.seq(sources);
var chunk__35683 = null;
var count__35684 = (0);
var i__35685 = (0);
while(true){
if((i__35685 < count__35684)){
var map__35697 = chunk__35683.cljs$core$IIndexed$_nth$arity$2(null,i__35685);
var map__35697__$1 = (((((!((map__35697 == null))))?(((((map__35697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35697):map__35697);
var src = map__35697__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35697__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35697__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35697__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35697__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35699){var e_35916 = e35699;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35916);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35916.message)].join('')));
}

var G__35917 = seq__35682;
var G__35918 = chunk__35683;
var G__35919 = count__35684;
var G__35920 = (i__35685 + (1));
seq__35682 = G__35917;
chunk__35683 = G__35918;
count__35684 = G__35919;
i__35685 = G__35920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35682);
if(temp__5735__auto__){
var seq__35682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35682__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35682__$1);
var G__35921 = cljs.core.chunk_rest(seq__35682__$1);
var G__35922 = c__4556__auto__;
var G__35923 = cljs.core.count(c__4556__auto__);
var G__35924 = (0);
seq__35682 = G__35921;
chunk__35683 = G__35922;
count__35684 = G__35923;
i__35685 = G__35924;
continue;
} else {
var map__35700 = cljs.core.first(seq__35682__$1);
var map__35700__$1 = (((((!((map__35700 == null))))?(((((map__35700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35700):map__35700);
var src = map__35700__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35700__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35700__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35700__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35704){var e_35925 = e35704;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35925);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35925.message)].join('')));
}

var G__35926 = cljs.core.next(seq__35682__$1);
var G__35927 = null;
var G__35928 = (0);
var G__35929 = (0);
seq__35682 = G__35926;
chunk__35683 = G__35927;
count__35684 = G__35928;
i__35685 = G__35929;
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
var seq__35705 = cljs.core.seq(js_requires);
var chunk__35706 = null;
var count__35707 = (0);
var i__35708 = (0);
while(true){
if((i__35708 < count__35707)){
var js_ns = chunk__35706.cljs$core$IIndexed$_nth$arity$2(null,i__35708);
var require_str_35930 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35930);


var G__35931 = seq__35705;
var G__35932 = chunk__35706;
var G__35933 = count__35707;
var G__35934 = (i__35708 + (1));
seq__35705 = G__35931;
chunk__35706 = G__35932;
count__35707 = G__35933;
i__35708 = G__35934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35705);
if(temp__5735__auto__){
var seq__35705__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35705__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35705__$1);
var G__35935 = cljs.core.chunk_rest(seq__35705__$1);
var G__35936 = c__4556__auto__;
var G__35937 = cljs.core.count(c__4556__auto__);
var G__35938 = (0);
seq__35705 = G__35935;
chunk__35706 = G__35936;
count__35707 = G__35937;
i__35708 = G__35938;
continue;
} else {
var js_ns = cljs.core.first(seq__35705__$1);
var require_str_35939 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35939);


var G__35940 = cljs.core.next(seq__35705__$1);
var G__35941 = null;
var G__35942 = (0);
var G__35943 = (0);
seq__35705 = G__35940;
chunk__35706 = G__35941;
count__35707 = G__35942;
i__35708 = G__35943;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35712){
var map__35713 = p__35712;
var map__35713__$1 = (((((!((map__35713 == null))))?(((((map__35713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35713):map__35713);
var msg = map__35713__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35715(s__35716){
return (new cljs.core.LazySeq(null,(function (){
var s__35716__$1 = s__35716;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35716__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35721 = cljs.core.first(xs__6292__auto__);
var map__35721__$1 = (((((!((map__35721 == null))))?(((((map__35721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35721):map__35721);
var src = map__35721__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35716__$1,map__35721,map__35721__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35713,map__35713__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35715_$_iter__35717(s__35718){
return (new cljs.core.LazySeq(null,((function (s__35716__$1,map__35721,map__35721__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35713,map__35713__$1,msg,info,reload_info){
return (function (){
var s__35718__$1 = s__35718;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35718__$1);
if(temp__5735__auto____$1){
var s__35718__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35718__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35718__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35720 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35719 = (0);
while(true){
if((i__35719 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35719);
cljs.core.chunk_append(b__35720,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35944 = (i__35719 + (1));
i__35719 = G__35944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35720),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35715_$_iter__35717(cljs.core.chunk_rest(s__35718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35720),null);
}
} else {
var warning = cljs.core.first(s__35718__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35715_$_iter__35717(cljs.core.rest(s__35718__$2)));
}
} else {
return null;
}
break;
}
});})(s__35716__$1,map__35721,map__35721__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35713,map__35713__$1,msg,info,reload_info))
,null,null));
});})(s__35716__$1,map__35721,map__35721__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35713,map__35713__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35715(cljs.core.rest(s__35716__$1)));
} else {
var G__35947 = cljs.core.rest(s__35716__$1);
s__35716__$1 = G__35947;
continue;
}
} else {
var G__35948 = cljs.core.rest(s__35716__$1);
s__35716__$1 = G__35948;
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
var seq__35724_35949 = cljs.core.seq(warnings);
var chunk__35725_35950 = null;
var count__35726_35951 = (0);
var i__35727_35952 = (0);
while(true){
if((i__35727_35952 < count__35726_35951)){
var map__35734_35953 = chunk__35725_35950.cljs$core$IIndexed$_nth$arity$2(null,i__35727_35952);
var map__35734_35954__$1 = (((((!((map__35734_35953 == null))))?(((((map__35734_35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35734_35953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35734_35953):map__35734_35953);
var w_35955 = map__35734_35954__$1;
var msg_35956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734_35954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734_35954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734_35954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734_35954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35956__$1)].join(''));


var G__35960 = seq__35724_35949;
var G__35961 = chunk__35725_35950;
var G__35962 = count__35726_35951;
var G__35963 = (i__35727_35952 + (1));
seq__35724_35949 = G__35960;
chunk__35725_35950 = G__35961;
count__35726_35951 = G__35962;
i__35727_35952 = G__35963;
continue;
} else {
var temp__5735__auto___35964 = cljs.core.seq(seq__35724_35949);
if(temp__5735__auto___35964){
var seq__35724_35965__$1 = temp__5735__auto___35964;
if(cljs.core.chunked_seq_QMARK_(seq__35724_35965__$1)){
var c__4556__auto___35966 = cljs.core.chunk_first(seq__35724_35965__$1);
var G__35967 = cljs.core.chunk_rest(seq__35724_35965__$1);
var G__35968 = c__4556__auto___35966;
var G__35969 = cljs.core.count(c__4556__auto___35966);
var G__35970 = (0);
seq__35724_35949 = G__35967;
chunk__35725_35950 = G__35968;
count__35726_35951 = G__35969;
i__35727_35952 = G__35970;
continue;
} else {
var map__35736_35971 = cljs.core.first(seq__35724_35965__$1);
var map__35736_35972__$1 = (((((!((map__35736_35971 == null))))?(((((map__35736_35971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35736_35971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35736_35971):map__35736_35971);
var w_35973 = map__35736_35972__$1;
var msg_35974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736_35972__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736_35972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736_35972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736_35972__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35977)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35975),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35976),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35974__$1)].join(''));


var G__35982 = cljs.core.next(seq__35724_35965__$1);
var G__35983 = null;
var G__35984 = (0);
var G__35985 = (0);
seq__35724_35949 = G__35982;
chunk__35725_35950 = G__35983;
count__35726_35951 = G__35984;
i__35727_35952 = G__35985;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35711_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35711_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35738){
var map__35739 = p__35738;
var map__35739__$1 = (((((!((map__35739 == null))))?(((((map__35739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35739):map__35739);
var msg = map__35739__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35739__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35741 = cljs.core.seq(updates);
var chunk__35743 = null;
var count__35744 = (0);
var i__35745 = (0);
while(true){
if((i__35745 < count__35744)){
var path = chunk__35743.cljs$core$IIndexed$_nth$arity$2(null,i__35745);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35816_35990 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35820_35991 = null;
var count__35821_35992 = (0);
var i__35822_35993 = (0);
while(true){
if((i__35822_35993 < count__35821_35992)){
var node_35994 = chunk__35820_35991.cljs$core$IIndexed$_nth$arity$2(null,i__35822_35993);
if(cljs.core.not(node_35994.shadow$old)){
var path_match_35995 = shadow.cljs.devtools.client.browser.match_paths(node_35994.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35995)){
var new_link_35996 = (function (){var G__35833 = node_35994.cloneNode(true);
G__35833.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35995),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35833;
})();
(node_35994.shadow$old = true);

(new_link_35996.onload = ((function (seq__35816_35990,chunk__35820_35991,count__35821_35992,i__35822_35993,seq__35741,chunk__35743,count__35744,i__35745,new_link_35996,path_match_35995,node_35994,path,map__35739,map__35739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35994);
});})(seq__35816_35990,chunk__35820_35991,count__35821_35992,i__35822_35993,seq__35741,chunk__35743,count__35744,i__35745,new_link_35996,path_match_35995,node_35994,path,map__35739,map__35739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35995], 0));

goog.dom.insertSiblingAfter(new_link_35996,node_35994);


var G__35997 = seq__35816_35990;
var G__35998 = chunk__35820_35991;
var G__35999 = count__35821_35992;
var G__36000 = (i__35822_35993 + (1));
seq__35816_35990 = G__35997;
chunk__35820_35991 = G__35998;
count__35821_35992 = G__35999;
i__35822_35993 = G__36000;
continue;
} else {
var G__36001 = seq__35816_35990;
var G__36002 = chunk__35820_35991;
var G__36003 = count__35821_35992;
var G__36004 = (i__35822_35993 + (1));
seq__35816_35990 = G__36001;
chunk__35820_35991 = G__36002;
count__35821_35992 = G__36003;
i__35822_35993 = G__36004;
continue;
}
} else {
var G__36005 = seq__35816_35990;
var G__36006 = chunk__35820_35991;
var G__36007 = count__35821_35992;
var G__36008 = (i__35822_35993 + (1));
seq__35816_35990 = G__36005;
chunk__35820_35991 = G__36006;
count__35821_35992 = G__36007;
i__35822_35993 = G__36008;
continue;
}
} else {
var temp__5735__auto___36009 = cljs.core.seq(seq__35816_35990);
if(temp__5735__auto___36009){
var seq__35816_36010__$1 = temp__5735__auto___36009;
if(cljs.core.chunked_seq_QMARK_(seq__35816_36010__$1)){
var c__4556__auto___36011 = cljs.core.chunk_first(seq__35816_36010__$1);
var G__36012 = cljs.core.chunk_rest(seq__35816_36010__$1);
var G__36013 = c__4556__auto___36011;
var G__36014 = cljs.core.count(c__4556__auto___36011);
var G__36015 = (0);
seq__35816_35990 = G__36012;
chunk__35820_35991 = G__36013;
count__35821_35992 = G__36014;
i__35822_35993 = G__36015;
continue;
} else {
var node_36016 = cljs.core.first(seq__35816_36010__$1);
if(cljs.core.not(node_36016.shadow$old)){
var path_match_36017 = shadow.cljs.devtools.client.browser.match_paths(node_36016.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36017)){
var new_link_36018 = (function (){var G__35835 = node_36016.cloneNode(true);
G__35835.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36017),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35835;
})();
(node_36016.shadow$old = true);

(new_link_36018.onload = ((function (seq__35816_35990,chunk__35820_35991,count__35821_35992,i__35822_35993,seq__35741,chunk__35743,count__35744,i__35745,new_link_36018,path_match_36017,node_36016,seq__35816_36010__$1,temp__5735__auto___36009,path,map__35739,map__35739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36016);
});})(seq__35816_35990,chunk__35820_35991,count__35821_35992,i__35822_35993,seq__35741,chunk__35743,count__35744,i__35745,new_link_36018,path_match_36017,node_36016,seq__35816_36010__$1,temp__5735__auto___36009,path,map__35739,map__35739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36017], 0));

goog.dom.insertSiblingAfter(new_link_36018,node_36016);


var G__36021 = cljs.core.next(seq__35816_36010__$1);
var G__36022 = null;
var G__36023 = (0);
var G__36024 = (0);
seq__35816_35990 = G__36021;
chunk__35820_35991 = G__36022;
count__35821_35992 = G__36023;
i__35822_35993 = G__36024;
continue;
} else {
var G__36027 = cljs.core.next(seq__35816_36010__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35816_35990 = G__36027;
chunk__35820_35991 = G__36028;
count__35821_35992 = G__36029;
i__35822_35993 = G__36030;
continue;
}
} else {
var G__36031 = cljs.core.next(seq__35816_36010__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35816_35990 = G__36031;
chunk__35820_35991 = G__36032;
count__35821_35992 = G__36033;
i__35822_35993 = G__36034;
continue;
}
}
} else {
}
}
break;
}


var G__36035 = seq__35741;
var G__36036 = chunk__35743;
var G__36037 = count__35744;
var G__36038 = (i__35745 + (1));
seq__35741 = G__36035;
chunk__35743 = G__36036;
count__35744 = G__36037;
i__35745 = G__36038;
continue;
} else {
var G__36039 = seq__35741;
var G__36040 = chunk__35743;
var G__36041 = count__35744;
var G__36042 = (i__35745 + (1));
seq__35741 = G__36039;
chunk__35743 = G__36040;
count__35744 = G__36041;
i__35745 = G__36042;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35741);
if(temp__5735__auto__){
var seq__35741__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35741__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35741__$1);
var G__36043 = cljs.core.chunk_rest(seq__35741__$1);
var G__36044 = c__4556__auto__;
var G__36045 = cljs.core.count(c__4556__auto__);
var G__36046 = (0);
seq__35741 = G__36043;
chunk__35743 = G__36044;
count__35744 = G__36045;
i__35745 = G__36046;
continue;
} else {
var path = cljs.core.first(seq__35741__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35838_36047 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35842_36048 = null;
var count__35843_36049 = (0);
var i__35844_36050 = (0);
while(true){
if((i__35844_36050 < count__35843_36049)){
var node_36051 = chunk__35842_36048.cljs$core$IIndexed$_nth$arity$2(null,i__35844_36050);
if(cljs.core.not(node_36051.shadow$old)){
var path_match_36052 = shadow.cljs.devtools.client.browser.match_paths(node_36051.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36052)){
var new_link_36053 = (function (){var G__35850 = node_36051.cloneNode(true);
G__35850.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36052),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35850;
})();
(node_36051.shadow$old = true);

(new_link_36053.onload = ((function (seq__35838_36047,chunk__35842_36048,count__35843_36049,i__35844_36050,seq__35741,chunk__35743,count__35744,i__35745,new_link_36053,path_match_36052,node_36051,path,seq__35741__$1,temp__5735__auto__,map__35739,map__35739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36051);
});})(seq__35838_36047,chunk__35842_36048,count__35843_36049,i__35844_36050,seq__35741,chunk__35743,count__35744,i__35745,new_link_36053,path_match_36052,node_36051,path,seq__35741__$1,temp__5735__auto__,map__35739,map__35739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36052], 0));

goog.dom.insertSiblingAfter(new_link_36053,node_36051);


var G__36054 = seq__35838_36047;
var G__36055 = chunk__35842_36048;
var G__36056 = count__35843_36049;
var G__36057 = (i__35844_36050 + (1));
seq__35838_36047 = G__36054;
chunk__35842_36048 = G__36055;
count__35843_36049 = G__36056;
i__35844_36050 = G__36057;
continue;
} else {
var G__36058 = seq__35838_36047;
var G__36059 = chunk__35842_36048;
var G__36060 = count__35843_36049;
var G__36061 = (i__35844_36050 + (1));
seq__35838_36047 = G__36058;
chunk__35842_36048 = G__36059;
count__35843_36049 = G__36060;
i__35844_36050 = G__36061;
continue;
}
} else {
var G__36062 = seq__35838_36047;
var G__36063 = chunk__35842_36048;
var G__36064 = count__35843_36049;
var G__36065 = (i__35844_36050 + (1));
seq__35838_36047 = G__36062;
chunk__35842_36048 = G__36063;
count__35843_36049 = G__36064;
i__35844_36050 = G__36065;
continue;
}
} else {
var temp__5735__auto___36066__$1 = cljs.core.seq(seq__35838_36047);
if(temp__5735__auto___36066__$1){
var seq__35838_36067__$1 = temp__5735__auto___36066__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35838_36067__$1)){
var c__4556__auto___36068 = cljs.core.chunk_first(seq__35838_36067__$1);
var G__36069 = cljs.core.chunk_rest(seq__35838_36067__$1);
var G__36070 = c__4556__auto___36068;
var G__36071 = cljs.core.count(c__4556__auto___36068);
var G__36072 = (0);
seq__35838_36047 = G__36069;
chunk__35842_36048 = G__36070;
count__35843_36049 = G__36071;
i__35844_36050 = G__36072;
continue;
} else {
var node_36073 = cljs.core.first(seq__35838_36067__$1);
if(cljs.core.not(node_36073.shadow$old)){
var path_match_36074 = shadow.cljs.devtools.client.browser.match_paths(node_36073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36074)){
var new_link_36079 = (function (){var G__35856 = node_36073.cloneNode(true);
G__35856.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35856;
})();
(node_36073.shadow$old = true);

(new_link_36079.onload = ((function (seq__35838_36047,chunk__35842_36048,count__35843_36049,i__35844_36050,seq__35741,chunk__35743,count__35744,i__35745,new_link_36079,path_match_36074,node_36073,seq__35838_36067__$1,temp__5735__auto___36066__$1,path,seq__35741__$1,temp__5735__auto__,map__35739,map__35739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36073);
});})(seq__35838_36047,chunk__35842_36048,count__35843_36049,i__35844_36050,seq__35741,chunk__35743,count__35744,i__35745,new_link_36079,path_match_36074,node_36073,seq__35838_36067__$1,temp__5735__auto___36066__$1,path,seq__35741__$1,temp__5735__auto__,map__35739,map__35739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36074], 0));

goog.dom.insertSiblingAfter(new_link_36079,node_36073);


var G__36080 = cljs.core.next(seq__35838_36067__$1);
var G__36081 = null;
var G__36082 = (0);
var G__36083 = (0);
seq__35838_36047 = G__36080;
chunk__35842_36048 = G__36081;
count__35843_36049 = G__36082;
i__35844_36050 = G__36083;
continue;
} else {
var G__36084 = cljs.core.next(seq__35838_36067__$1);
var G__36085 = null;
var G__36086 = (0);
var G__36087 = (0);
seq__35838_36047 = G__36084;
chunk__35842_36048 = G__36085;
count__35843_36049 = G__36086;
i__35844_36050 = G__36087;
continue;
}
} else {
var G__36088 = cljs.core.next(seq__35838_36067__$1);
var G__36089 = null;
var G__36090 = (0);
var G__36091 = (0);
seq__35838_36047 = G__36088;
chunk__35842_36048 = G__36089;
count__35843_36049 = G__36090;
i__35844_36050 = G__36091;
continue;
}
}
} else {
}
}
break;
}


var G__36092 = cljs.core.next(seq__35741__$1);
var G__36093 = null;
var G__36094 = (0);
var G__36095 = (0);
seq__35741 = G__36092;
chunk__35743 = G__36093;
count__35744 = G__36094;
i__35745 = G__36095;
continue;
} else {
var G__36096 = cljs.core.next(seq__35741__$1);
var G__36097 = null;
var G__36098 = (0);
var G__36099 = (0);
seq__35741 = G__36096;
chunk__35743 = G__36097;
count__35744 = G__36098;
i__35745 = G__36099;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35859){
var map__35860 = p__35859;
var map__35860__$1 = (((((!((map__35860 == null))))?(((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35860):map__35860);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35874){
var map__35875 = p__35874;
var map__35875__$1 = (((((!((map__35875 == null))))?(((((map__35875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35875):map__35875);
var _ = map__35875__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35875__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35877,done,error){
var map__35880 = p__35877;
var map__35880__$1 = (((((!((map__35880 == null))))?(((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35880):map__35880);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35887,done,error){
var map__35888 = p__35887;
var map__35888__$1 = (((((!((map__35888 == null))))?(((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35888):map__35888);
var msg = map__35888__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35890){
var map__35891 = p__35890;
var map__35891__$1 = (((((!((map__35891 == null))))?(((((map__35891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35891):map__35891);
var src = map__35891__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35891__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35893 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35893) : done.call(null,G__35893));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35894){
var map__35895 = p__35894;
var map__35895__$1 = (((((!((map__35895 == null))))?(((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35895):map__35895);
var msg__$1 = map__35895__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35897){var ex = e35897;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35899){
var map__35900 = p__35899;
var map__35900__$1 = (((((!((map__35900 == null))))?(((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35900):map__35900);
var env = map__35900__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35902){
var map__35903 = p__35902;
var map__35903__$1 = (((((!((map__35903 == null))))?(((((map__35903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35903):map__35903);
var msg = map__35903__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35907){
var map__35908 = p__35907;
var map__35908__$1 = (((((!((map__35908 == null))))?(((((map__35908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35908):map__35908);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35910){
var map__35911 = p__35910;
var map__35911__$1 = (((((!((map__35911 == null))))?(((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35911):map__35911);
var svc = map__35911__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
