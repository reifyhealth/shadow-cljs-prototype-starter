goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36551){
var map__36552 = p__36551;
var map__36552__$1 = (((((!((map__36552 == null))))?(((((map__36552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36552):map__36552);
var m = map__36552__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36555_36764 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36556_36765 = null;
var count__36557_36766 = (0);
var i__36558_36767 = (0);
while(true){
if((i__36558_36767 < count__36557_36766)){
var f_36768 = chunk__36556_36765.cljs$core$IIndexed$_nth$arity$2(null,i__36558_36767);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36768], 0));


var G__36773 = seq__36555_36764;
var G__36774 = chunk__36556_36765;
var G__36775 = count__36557_36766;
var G__36776 = (i__36558_36767 + (1));
seq__36555_36764 = G__36773;
chunk__36556_36765 = G__36774;
count__36557_36766 = G__36775;
i__36558_36767 = G__36776;
continue;
} else {
var temp__5735__auto___36777 = cljs.core.seq(seq__36555_36764);
if(temp__5735__auto___36777){
var seq__36555_36778__$1 = temp__5735__auto___36777;
if(cljs.core.chunked_seq_QMARK_(seq__36555_36778__$1)){
var c__4556__auto___36779 = cljs.core.chunk_first(seq__36555_36778__$1);
var G__36781 = cljs.core.chunk_rest(seq__36555_36778__$1);
var G__36782 = c__4556__auto___36779;
var G__36783 = cljs.core.count(c__4556__auto___36779);
var G__36784 = (0);
seq__36555_36764 = G__36781;
chunk__36556_36765 = G__36782;
count__36557_36766 = G__36783;
i__36558_36767 = G__36784;
continue;
} else {
var f_36785 = cljs.core.first(seq__36555_36778__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36785], 0));


var G__36786 = cljs.core.next(seq__36555_36778__$1);
var G__36787 = null;
var G__36788 = (0);
var G__36789 = (0);
seq__36555_36764 = G__36786;
chunk__36556_36765 = G__36787;
count__36557_36766 = G__36788;
i__36558_36767 = G__36789;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36790 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36790], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36790)))?cljs.core.second(arglists_36790):arglists_36790)], 0));
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
var seq__36562_36793 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36563_36794 = null;
var count__36564_36795 = (0);
var i__36565_36796 = (0);
while(true){
if((i__36565_36796 < count__36564_36795)){
var vec__36579_36797 = chunk__36563_36794.cljs$core$IIndexed$_nth$arity$2(null,i__36565_36796);
var name_36798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579_36797,(0),null);
var map__36582_36799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36579_36797,(1),null);
var map__36582_36800__$1 = (((((!((map__36582_36799 == null))))?(((((map__36582_36799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582_36799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36582_36799):map__36582_36799);
var doc_36801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582_36800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582_36800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36798], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36802], 0));

if(cljs.core.truth_(doc_36801)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36801], 0));
} else {
}


var G__36807 = seq__36562_36793;
var G__36808 = chunk__36563_36794;
var G__36809 = count__36564_36795;
var G__36810 = (i__36565_36796 + (1));
seq__36562_36793 = G__36807;
chunk__36563_36794 = G__36808;
count__36564_36795 = G__36809;
i__36565_36796 = G__36810;
continue;
} else {
var temp__5735__auto___36811 = cljs.core.seq(seq__36562_36793);
if(temp__5735__auto___36811){
var seq__36562_36812__$1 = temp__5735__auto___36811;
if(cljs.core.chunked_seq_QMARK_(seq__36562_36812__$1)){
var c__4556__auto___36814 = cljs.core.chunk_first(seq__36562_36812__$1);
var G__36815 = cljs.core.chunk_rest(seq__36562_36812__$1);
var G__36816 = c__4556__auto___36814;
var G__36817 = cljs.core.count(c__4556__auto___36814);
var G__36818 = (0);
seq__36562_36793 = G__36815;
chunk__36563_36794 = G__36816;
count__36564_36795 = G__36817;
i__36565_36796 = G__36818;
continue;
} else {
var vec__36584_36819 = cljs.core.first(seq__36562_36812__$1);
var name_36820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36584_36819,(0),null);
var map__36587_36821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36584_36819,(1),null);
var map__36587_36822__$1 = (((((!((map__36587_36821 == null))))?(((((map__36587_36821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36587_36821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36587_36821):map__36587_36821);
var doc_36823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587_36822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587_36822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36820], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36824], 0));

if(cljs.core.truth_(doc_36823)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36823], 0));
} else {
}


var G__36826 = cljs.core.next(seq__36562_36812__$1);
var G__36827 = null;
var G__36828 = (0);
var G__36829 = (0);
seq__36562_36793 = G__36826;
chunk__36563_36794 = G__36827;
count__36564_36795 = G__36828;
i__36565_36796 = G__36829;
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

var seq__36589 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36590 = null;
var count__36591 = (0);
var i__36592 = (0);
while(true){
if((i__36592 < count__36591)){
var role = chunk__36590.cljs$core$IIndexed$_nth$arity$2(null,i__36592);
var temp__5735__auto___36830__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36830__$1)){
var spec_36831 = temp__5735__auto___36830__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36831)], 0));
} else {
}


var G__36832 = seq__36589;
var G__36833 = chunk__36590;
var G__36834 = count__36591;
var G__36835 = (i__36592 + (1));
seq__36589 = G__36832;
chunk__36590 = G__36833;
count__36591 = G__36834;
i__36592 = G__36835;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36589);
if(temp__5735__auto____$1){
var seq__36589__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36589__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36589__$1);
var G__36836 = cljs.core.chunk_rest(seq__36589__$1);
var G__36837 = c__4556__auto__;
var G__36838 = cljs.core.count(c__4556__auto__);
var G__36839 = (0);
seq__36589 = G__36836;
chunk__36590 = G__36837;
count__36591 = G__36838;
i__36592 = G__36839;
continue;
} else {
var role = cljs.core.first(seq__36589__$1);
var temp__5735__auto___36840__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36840__$2)){
var spec_36841 = temp__5735__auto___36840__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36841)], 0));
} else {
}


var G__36842 = cljs.core.next(seq__36589__$1);
var G__36843 = null;
var G__36844 = (0);
var G__36845 = (0);
seq__36589 = G__36842;
chunk__36590 = G__36843;
count__36591 = G__36844;
i__36592 = G__36845;
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
var G__36849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36850 = cljs.core.ex_cause(t);
via = G__36849;
t = G__36850;
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
var map__36600 = datafied_throwable;
var map__36600__$1 = (((((!((map__36600 == null))))?(((((map__36600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36600):map__36600);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36600__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36600__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36600__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36601 = cljs.core.last(via);
var map__36601__$1 = (((((!((map__36601 == null))))?(((((map__36601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36601):map__36601);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36601__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36601__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36602 = data;
var map__36602__$1 = (((((!((map__36602 == null))))?(((((map__36602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36602):map__36602);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36602__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36602__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36602__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36603 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36603__$1 = (((((!((map__36603 == null))))?(((((map__36603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36603):map__36603);
var top_data = map__36603__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36625 = phase;
var G__36625__$1 = (((G__36625 instanceof cljs.core.Keyword))?G__36625.fqn:null);
switch (G__36625__$1) {
case "read-source":
var map__36626 = data;
var map__36626__$1 = (((((!((map__36626 == null))))?(((((map__36626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36626):map__36626);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36626__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36635 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36635__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36635,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36635);
var G__36635__$2 = (cljs.core.truth_((function (){var fexpr__36636 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36636.cljs$core$IFn$_invoke$arity$1 ? fexpr__36636.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36636.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36635__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36635__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36635__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36635__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36637 = top_data;
var G__36637__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36637,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36637);
var G__36637__$2 = (cljs.core.truth_((function (){var fexpr__36638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36638.cljs$core$IFn$_invoke$arity$1 ? fexpr__36638.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36638.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36637__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36637__$1);
var G__36637__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36637__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36637__$2);
var G__36637__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36637__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36637__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36637__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36637__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36639 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(3),null);
var G__36642 = top_data;
var G__36642__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36642,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36642);
var G__36642__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36642__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36642__$1);
var G__36642__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36642__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36642__$2);
var G__36642__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36642__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36642__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36642__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36642__$4;
}

break;
case "execution":
var vec__36657 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36599_SHARP_){
var or__4126__auto__ = (p1__36599_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36661 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36661.cljs$core$IFn$_invoke$arity$1 ? fexpr__36661.cljs$core$IFn$_invoke$arity$1(p1__36599_SHARP_) : fexpr__36661.call(null,p1__36599_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36662 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36662__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36662,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36662);
var G__36662__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36662__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36662__$1);
var G__36662__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36662__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36662__$2);
var G__36662__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36662__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36662__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36662__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36662__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36625__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36689){
var map__36690 = p__36689;
var map__36690__$1 = (((((!((map__36690 == null))))?(((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36690):map__36690);
var triage_data = map__36690__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36690__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36710 = phase;
var G__36710__$1 = (((G__36710 instanceof cljs.core.Keyword))?G__36710.fqn:null);
switch (G__36710__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36714 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36715 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36716 = loc;
var G__36717 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36718_36875 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36719_36876 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36720_36877 = true;
var _STAR_print_fn_STAR__temp_val__36721_36878 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36720_36877);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36721_36878);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36687_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36687_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36719_36876);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36718_36875);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36714,G__36715,G__36716,G__36717) : format.call(null,G__36714,G__36715,G__36716,G__36717));

break;
case "macroexpansion":
var G__36730 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36731 = cause_type;
var G__36732 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36733 = loc;
var G__36734 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36730,G__36731,G__36732,G__36733,G__36734) : format.call(null,G__36730,G__36731,G__36732,G__36733,G__36734));

break;
case "compile-syntax-check":
var G__36735 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36736 = cause_type;
var G__36737 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36738 = loc;
var G__36739 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36735,G__36736,G__36737,G__36738,G__36739) : format.call(null,G__36735,G__36736,G__36737,G__36738,G__36739));

break;
case "compilation":
var G__36740 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36741 = cause_type;
var G__36742 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36743 = loc;
var G__36744 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36740,G__36741,G__36742,G__36743,G__36744) : format.call(null,G__36740,G__36741,G__36742,G__36743,G__36744));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36749 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36750 = symbol;
var G__36751 = loc;
var G__36752 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36753_36880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36754_36881 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36755_36882 = true;
var _STAR_print_fn_STAR__temp_val__36756_36883 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36755_36882);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36756_36883);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36688_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36688_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36754_36881);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36753_36880);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36749,G__36750,G__36751,G__36752) : format.call(null,G__36749,G__36750,G__36751,G__36752));
} else {
var G__36757 = "Execution error%s at %s(%s).\n%s\n";
var G__36758 = cause_type;
var G__36759 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36760 = loc;
var G__36761 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36757,G__36758,G__36759,G__36760,G__36761) : format.call(null,G__36757,G__36758,G__36759,G__36760,G__36761));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36710__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
