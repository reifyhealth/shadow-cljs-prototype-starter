goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34778){
var map__34779 = p__34778;
var map__34779__$1 = (((((!((map__34779 == null))))?(((((map__34779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34779):map__34779);
var m = map__34779__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34783_34992 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34784_34993 = null;
var count__34785_34994 = (0);
var i__34786_34995 = (0);
while(true){
if((i__34786_34995 < count__34785_34994)){
var f_34996 = chunk__34784_34993.cljs$core$IIndexed$_nth$arity$2(null,i__34786_34995);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34996], 0));


var G__34997 = seq__34783_34992;
var G__34998 = chunk__34784_34993;
var G__34999 = count__34785_34994;
var G__35000 = (i__34786_34995 + (1));
seq__34783_34992 = G__34997;
chunk__34784_34993 = G__34998;
count__34785_34994 = G__34999;
i__34786_34995 = G__35000;
continue;
} else {
var temp__5735__auto___35002 = cljs.core.seq(seq__34783_34992);
if(temp__5735__auto___35002){
var seq__34783_35003__$1 = temp__5735__auto___35002;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35003__$1)){
var c__4556__auto___35004 = cljs.core.chunk_first(seq__34783_35003__$1);
var G__35005 = cljs.core.chunk_rest(seq__34783_35003__$1);
var G__35006 = c__4556__auto___35004;
var G__35007 = cljs.core.count(c__4556__auto___35004);
var G__35008 = (0);
seq__34783_34992 = G__35005;
chunk__34784_34993 = G__35006;
count__34785_34994 = G__35007;
i__34786_34995 = G__35008;
continue;
} else {
var f_35009 = cljs.core.first(seq__34783_35003__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35009], 0));


var G__35010 = cljs.core.next(seq__34783_35003__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34783_34992 = G__35010;
chunk__34784_34993 = G__35011;
count__34785_34994 = G__35012;
i__34786_34995 = G__35013;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35014 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35014], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35014)))?cljs.core.second(arglists_35014):arglists_35014)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34791_35016 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34792_35017 = null;
var count__34793_35018 = (0);
var i__34794_35019 = (0);
while(true){
if((i__34794_35019 < count__34793_35018)){
var vec__34807_35020 = chunk__34792_35017.cljs$core$IIndexed$_nth$arity$2(null,i__34794_35019);
var name_35021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35020,(0),null);
var map__34810_35022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35020,(1),null);
var map__34810_35023__$1 = (((((!((map__34810_35022 == null))))?(((((map__34810_35022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810_35022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34810_35022):map__34810_35022);
var doc_35024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810_35023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810_35023__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35021], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35025], 0));

if(cljs.core.truth_(doc_35024)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35024], 0));
} else {
}


var G__35027 = seq__34791_35016;
var G__35028 = chunk__34792_35017;
var G__35029 = count__34793_35018;
var G__35030 = (i__34794_35019 + (1));
seq__34791_35016 = G__35027;
chunk__34792_35017 = G__35028;
count__34793_35018 = G__35029;
i__34794_35019 = G__35030;
continue;
} else {
var temp__5735__auto___35031 = cljs.core.seq(seq__34791_35016);
if(temp__5735__auto___35031){
var seq__34791_35032__$1 = temp__5735__auto___35031;
if(cljs.core.chunked_seq_QMARK_(seq__34791_35032__$1)){
var c__4556__auto___35033 = cljs.core.chunk_first(seq__34791_35032__$1);
var G__35034 = cljs.core.chunk_rest(seq__34791_35032__$1);
var G__35035 = c__4556__auto___35033;
var G__35036 = cljs.core.count(c__4556__auto___35033);
var G__35037 = (0);
seq__34791_35016 = G__35034;
chunk__34792_35017 = G__35035;
count__34793_35018 = G__35036;
i__34794_35019 = G__35037;
continue;
} else {
var vec__34812_35040 = cljs.core.first(seq__34791_35032__$1);
var name_35041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812_35040,(0),null);
var map__34815_35042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812_35040,(1),null);
var map__34815_35043__$1 = (((((!((map__34815_35042 == null))))?(((((map__34815_35042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34815_35042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34815_35042):map__34815_35042);
var doc_35044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34815_35043__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34815_35043__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35041], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35047], 0));

if(cljs.core.truth_(doc_35044)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35044], 0));
} else {
}


var G__35049 = cljs.core.next(seq__34791_35032__$1);
var G__35050 = null;
var G__35051 = (0);
var G__35052 = (0);
seq__34791_35016 = G__35049;
chunk__34792_35017 = G__35050;
count__34793_35018 = G__35051;
i__34794_35019 = G__35052;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34817 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34818 = null;
var count__34819 = (0);
var i__34820 = (0);
while(true){
if((i__34820 < count__34819)){
var role = chunk__34818.cljs$core$IIndexed$_nth$arity$2(null,i__34820);
var temp__5735__auto___35054__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35054__$1)){
var spec_35055 = temp__5735__auto___35054__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35055)], 0));
} else {
}


var G__35056 = seq__34817;
var G__35057 = chunk__34818;
var G__35058 = count__34819;
var G__35059 = (i__34820 + (1));
seq__34817 = G__35056;
chunk__34818 = G__35057;
count__34819 = G__35058;
i__34820 = G__35059;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34817);
if(temp__5735__auto____$1){
var seq__34817__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34817__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34817__$1);
var G__35061 = cljs.core.chunk_rest(seq__34817__$1);
var G__35062 = c__4556__auto__;
var G__35063 = cljs.core.count(c__4556__auto__);
var G__35064 = (0);
seq__34817 = G__35061;
chunk__34818 = G__35062;
count__34819 = G__35063;
i__34820 = G__35064;
continue;
} else {
var role = cljs.core.first(seq__34817__$1);
var temp__5735__auto___35065__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35065__$2)){
var spec_35066 = temp__5735__auto___35065__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35066)], 0));
} else {
}


var G__35067 = cljs.core.next(seq__34817__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__34817 = G__35067;
chunk__34818 = G__35068;
count__34819 = G__35069;
i__34820 = G__35070;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35076 = cljs.core.ex_cause(t);
via = G__35075;
t = G__35076;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34828 = datafied_throwable;
var map__34828__$1 = (((((!((map__34828 == null))))?(((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34828):map__34828);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34828__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34828__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34828__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34829 = cljs.core.last(via);
var map__34829__$1 = (((((!((map__34829 == null))))?(((((map__34829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34829):map__34829);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34829__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34829__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34829__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34830 = data;
var map__34830__$1 = (((((!((map__34830 == null))))?(((((map__34830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34830):map__34830);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34830__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34830__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34830__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34831 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34831__$1 = (((((!((map__34831 == null))))?(((((map__34831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34831):map__34831);
var top_data = map__34831__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34831__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34836 = phase;
var G__34836__$1 = (((G__34836 instanceof cljs.core.Keyword))?G__34836.fqn:null);
switch (G__34836__$1) {
case "read-source":
var map__34837 = data;
var map__34837__$1 = (((((!((map__34837 == null))))?(((((map__34837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34837):map__34837);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34837__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34837__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34856 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34856__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34856);
var G__34856__$2 = (cljs.core.truth_((function (){var fexpr__34857 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34857.cljs$core$IFn$_invoke$arity$1 ? fexpr__34857.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34857.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34856__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34856__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34858 = top_data;
var G__34858__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34858);
var G__34858__$2 = (cljs.core.truth_((function (){var fexpr__34859 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34859.cljs$core$IFn$_invoke$arity$1 ? fexpr__34859.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34859.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34858__$1);
var G__34858__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34858__$2);
var G__34858__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34858__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34858__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(3),null);
var G__34870 = top_data;
var G__34870__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34870);
var G__34870__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34870__$1);
var G__34870__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34870__$2);
var G__34870__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34870__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34870__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34870__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34870__$4;
}

break;
case "execution":
var vec__34878 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34827_SHARP_){
var or__4126__auto__ = (p1__34827_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34889.cljs$core$IFn$_invoke$arity$1 ? fexpr__34889.cljs$core$IFn$_invoke$arity$1(p1__34827_SHARP_) : fexpr__34889.call(null,p1__34827_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34894 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34894__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34894,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34894);
var G__34894__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34894__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34894__$1);
var G__34894__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34894__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34894__$2);
var G__34894__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34894__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34894__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34894__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34894__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34836__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34924){
var map__34925 = p__34924;
var map__34925__$1 = (((((!((map__34925 == null))))?(((((map__34925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34925):map__34925);
var triage_data = map__34925__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34925__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34945 = phase;
var G__34945__$1 = (((G__34945 instanceof cljs.core.Keyword))?G__34945.fqn:null);
switch (G__34945__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34950 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34951 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34952 = loc;
var G__34953 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34954_35091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34955_35092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34956_35093 = true;
var _STAR_print_fn_STAR__temp_val__34957_35094 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34956_35093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34957_35094);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34915_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34915_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34955_35092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34954_35091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34950,G__34951,G__34952,G__34953) : format.call(null,G__34950,G__34951,G__34952,G__34953));

break;
case "macroexpansion":
var G__34962 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34963 = cause_type;
var G__34964 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34965 = loc;
var G__34966 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34962,G__34963,G__34964,G__34965,G__34966) : format.call(null,G__34962,G__34963,G__34964,G__34965,G__34966));

break;
case "compile-syntax-check":
var G__34967 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34968 = cause_type;
var G__34969 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34970 = loc;
var G__34971 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34967,G__34968,G__34969,G__34970,G__34971) : format.call(null,G__34967,G__34968,G__34969,G__34970,G__34971));

break;
case "compilation":
var G__34972 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34973 = cause_type;
var G__34974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34975 = loc;
var G__34976 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34972,G__34973,G__34974,G__34975,G__34976) : format.call(null,G__34972,G__34973,G__34974,G__34975,G__34976));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34978 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34979 = symbol;
var G__34980 = loc;
var G__34981 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34982_35103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34983_35104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34984_35105 = true;
var _STAR_print_fn_STAR__temp_val__34985_35106 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34984_35105);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34985_35106);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34920_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34920_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34983_35104);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34982_35103);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34978,G__34979,G__34980,G__34981) : format.call(null,G__34978,G__34979,G__34980,G__34981));
} else {
var G__34986 = "Execution error%s at %s(%s).\n%s\n";
var G__34987 = cause_type;
var G__34988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34989 = loc;
var G__34990 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34986,G__34987,G__34988,G__34989,G__34990) : format.call(null,G__34986,G__34987,G__34988,G__34989,G__34990));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34945__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
