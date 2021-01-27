goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36552){
var map__36553 = p__36552;
var map__36553__$1 = (((((!((map__36553 == null))))?(((((map__36553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36553):map__36553);
var m = map__36553__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36553__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36557_36767 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36558_36768 = null;
var count__36559_36769 = (0);
var i__36560_36770 = (0);
while(true){
if((i__36560_36770 < count__36559_36769)){
var f_36771 = chunk__36558_36768.cljs$core$IIndexed$_nth$arity$2(null,i__36560_36770);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36771], 0));


var G__36772 = seq__36557_36767;
var G__36773 = chunk__36558_36768;
var G__36774 = count__36559_36769;
var G__36775 = (i__36560_36770 + (1));
seq__36557_36767 = G__36772;
chunk__36558_36768 = G__36773;
count__36559_36769 = G__36774;
i__36560_36770 = G__36775;
continue;
} else {
var temp__5735__auto___36776 = cljs.core.seq(seq__36557_36767);
if(temp__5735__auto___36776){
var seq__36557_36777__$1 = temp__5735__auto___36776;
if(cljs.core.chunked_seq_QMARK_(seq__36557_36777__$1)){
var c__4556__auto___36778 = cljs.core.chunk_first(seq__36557_36777__$1);
var G__36779 = cljs.core.chunk_rest(seq__36557_36777__$1);
var G__36780 = c__4556__auto___36778;
var G__36781 = cljs.core.count(c__4556__auto___36778);
var G__36782 = (0);
seq__36557_36767 = G__36779;
chunk__36558_36768 = G__36780;
count__36559_36769 = G__36781;
i__36560_36770 = G__36782;
continue;
} else {
var f_36783 = cljs.core.first(seq__36557_36777__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36783], 0));


var G__36784 = cljs.core.next(seq__36557_36777__$1);
var G__36785 = null;
var G__36786 = (0);
var G__36787 = (0);
seq__36557_36767 = G__36784;
chunk__36558_36768 = G__36785;
count__36559_36769 = G__36786;
i__36560_36770 = G__36787;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36788 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36788], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36788)))?cljs.core.second(arglists_36788):arglists_36788)], 0));
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
var seq__36565_36793 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36566_36794 = null;
var count__36567_36795 = (0);
var i__36568_36796 = (0);
while(true){
if((i__36568_36796 < count__36567_36795)){
var vec__36579_36798 = chunk__36566_36794.cljs$core$IIndexed$_nth$arity$2(null,i__36568_36796);
var name_36799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579_36798,(0),null);
var map__36582_36800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579_36798,(1),null);
var map__36582_36801__$1 = (((((!((map__36582_36800 == null))))?(((((map__36582_36800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582_36800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36582_36800):map__36582_36800);
var doc_36802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582_36801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582_36801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36799], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36803], 0));

if(cljs.core.truth_(doc_36802)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36802], 0));
} else {
}


var G__36804 = seq__36565_36793;
var G__36805 = chunk__36566_36794;
var G__36806 = count__36567_36795;
var G__36807 = (i__36568_36796 + (1));
seq__36565_36793 = G__36804;
chunk__36566_36794 = G__36805;
count__36567_36795 = G__36806;
i__36568_36796 = G__36807;
continue;
} else {
var temp__5735__auto___36808 = cljs.core.seq(seq__36565_36793);
if(temp__5735__auto___36808){
var seq__36565_36810__$1 = temp__5735__auto___36808;
if(cljs.core.chunked_seq_QMARK_(seq__36565_36810__$1)){
var c__4556__auto___36811 = cljs.core.chunk_first(seq__36565_36810__$1);
var G__36812 = cljs.core.chunk_rest(seq__36565_36810__$1);
var G__36813 = c__4556__auto___36811;
var G__36814 = cljs.core.count(c__4556__auto___36811);
var G__36815 = (0);
seq__36565_36793 = G__36812;
chunk__36566_36794 = G__36813;
count__36567_36795 = G__36814;
i__36568_36796 = G__36815;
continue;
} else {
var vec__36586_36816 = cljs.core.first(seq__36565_36810__$1);
var name_36817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36586_36816,(0),null);
var map__36589_36818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36586_36816,(1),null);
var map__36589_36819__$1 = (((((!((map__36589_36818 == null))))?(((((map__36589_36818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589_36818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36589_36818):map__36589_36818);
var doc_36820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589_36819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589_36819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36817], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36821], 0));

if(cljs.core.truth_(doc_36820)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36820], 0));
} else {
}


var G__36827 = cljs.core.next(seq__36565_36810__$1);
var G__36828 = null;
var G__36829 = (0);
var G__36830 = (0);
seq__36565_36793 = G__36827;
chunk__36566_36794 = G__36828;
count__36567_36795 = G__36829;
i__36568_36796 = G__36830;
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

var seq__36592 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36593 = null;
var count__36594 = (0);
var i__36595 = (0);
while(true){
if((i__36595 < count__36594)){
var role = chunk__36593.cljs$core$IIndexed$_nth$arity$2(null,i__36595);
var temp__5735__auto___36831__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36831__$1)){
var spec_36832 = temp__5735__auto___36831__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36832)], 0));
} else {
}


var G__36833 = seq__36592;
var G__36834 = chunk__36593;
var G__36835 = count__36594;
var G__36836 = (i__36595 + (1));
seq__36592 = G__36833;
chunk__36593 = G__36834;
count__36594 = G__36835;
i__36595 = G__36836;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36592);
if(temp__5735__auto____$1){
var seq__36592__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36592__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36592__$1);
var G__36837 = cljs.core.chunk_rest(seq__36592__$1);
var G__36838 = c__4556__auto__;
var G__36839 = cljs.core.count(c__4556__auto__);
var G__36840 = (0);
seq__36592 = G__36837;
chunk__36593 = G__36838;
count__36594 = G__36839;
i__36595 = G__36840;
continue;
} else {
var role = cljs.core.first(seq__36592__$1);
var temp__5735__auto___36841__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36841__$2)){
var spec_36842 = temp__5735__auto___36841__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36842)], 0));
} else {
}


var G__36843 = cljs.core.next(seq__36592__$1);
var G__36844 = null;
var G__36845 = (0);
var G__36846 = (0);
seq__36592 = G__36843;
chunk__36593 = G__36844;
count__36594 = G__36845;
i__36595 = G__36846;
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
var G__36847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36848 = cljs.core.ex_cause(t);
via = G__36847;
t = G__36848;
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
var map__36617 = datafied_throwable;
var map__36617__$1 = (((((!((map__36617 == null))))?(((((map__36617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36617):map__36617);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36617__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36617__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36617__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36618 = cljs.core.last(via);
var map__36618__$1 = (((((!((map__36618 == null))))?(((((map__36618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36618):map__36618);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36618__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36618__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36619 = data;
var map__36619__$1 = (((((!((map__36619 == null))))?(((((map__36619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36619):map__36619);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36619__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36619__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36619__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36620 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36620__$1 = (((((!((map__36620 == null))))?(((((map__36620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36620):map__36620);
var top_data = map__36620__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36637 = phase;
var G__36637__$1 = (((G__36637 instanceof cljs.core.Keyword))?G__36637.fqn:null);
switch (G__36637__$1) {
case "read-source":
var map__36647 = data;
var map__36647__$1 = (((((!((map__36647 == null))))?(((((map__36647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36647):map__36647);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36647__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36647__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36649 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36649__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36649,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36649);
var G__36649__$2 = (cljs.core.truth_((function (){var fexpr__36654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36654.cljs$core$IFn$_invoke$arity$1 ? fexpr__36654.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36654.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36649__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36649__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36649__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36660 = top_data;
var G__36660__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36660,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36660);
var G__36660__$2 = (cljs.core.truth_((function (){var fexpr__36667 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36667.cljs$core$IFn$_invoke$arity$1 ? fexpr__36667.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36667.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36660__$1);
var G__36660__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36660__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36660__$2);
var G__36660__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36660__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36660__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36660__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36660__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36677 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36677,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36677,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36677,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36677,(3),null);
var G__36680 = top_data;
var G__36680__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36680);
var G__36680__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36680__$1);
var G__36680__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36680__$2);
var G__36680__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36680__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36680__$4;
}

break;
case "execution":
var vec__36688 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36688,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36616_SHARP_){
var or__4126__auto__ = (p1__36616_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36696 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36696.cljs$core$IFn$_invoke$arity$1 ? fexpr__36696.cljs$core$IFn$_invoke$arity$1(p1__36616_SHARP_) : fexpr__36696.call(null,p1__36616_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36704 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36704__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36704);
var G__36704__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36704__$1);
var G__36704__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36704__$2);
var G__36704__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36704__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36704__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36637__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36722){
var map__36723 = p__36722;
var map__36723__$1 = (((((!((map__36723 == null))))?(((((map__36723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36723):map__36723);
var triage_data = map__36723__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36723__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36726 = phase;
var G__36726__$1 = (((G__36726 instanceof cljs.core.Keyword))?G__36726.fqn:null);
switch (G__36726__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36727 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36728 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36729 = loc;
var G__36730 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36732_36870 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36733_36871 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36734_36872 = true;
var _STAR_print_fn_STAR__temp_val__36735_36873 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36734_36872);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36735_36873);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36720_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36720_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36733_36871);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36732_36870);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36727,G__36728,G__36729,G__36730) : format.call(null,G__36727,G__36728,G__36729,G__36730));

break;
case "macroexpansion":
var G__36736 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36737 = cause_type;
var G__36738 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36739 = loc;
var G__36740 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36736,G__36737,G__36738,G__36739,G__36740) : format.call(null,G__36736,G__36737,G__36738,G__36739,G__36740));

break;
case "compile-syntax-check":
var G__36741 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36742 = cause_type;
var G__36743 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36744 = loc;
var G__36745 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36741,G__36742,G__36743,G__36744,G__36745) : format.call(null,G__36741,G__36742,G__36743,G__36744,G__36745));

break;
case "compilation":
var G__36746 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36747 = cause_type;
var G__36748 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36749 = loc;
var G__36750 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36746,G__36747,G__36748,G__36749,G__36750) : format.call(null,G__36746,G__36747,G__36748,G__36749,G__36750));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36751 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36752 = symbol;
var G__36753 = loc;
var G__36754 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36755_36880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36756_36881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36757_36882 = true;
var _STAR_print_fn_STAR__temp_val__36758_36883 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36757_36882);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36758_36883);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36721_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36756_36881);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36755_36880);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36751,G__36752,G__36753,G__36754) : format.call(null,G__36751,G__36752,G__36753,G__36754));
} else {
var G__36760 = "Execution error%s at %s(%s).\n%s\n";
var G__36761 = cause_type;
var G__36762 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36763 = loc;
var G__36764 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36760,G__36761,G__36762,G__36763,G__36764) : format.call(null,G__36760,G__36761,G__36762,G__36763,G__36764));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36726__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
