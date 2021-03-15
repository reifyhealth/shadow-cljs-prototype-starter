goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35481__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35482__i = 0, G__35482__a = new Array(arguments.length -  0);
while (G__35482__i < G__35482__a.length) {G__35482__a[G__35482__i] = arguments[G__35482__i + 0]; ++G__35482__i;}
  args = new cljs.core.IndexedSeq(G__35482__a,0,null);
} 
return G__35481__delegate.call(this,args);};
G__35481.cljs$lang$maxFixedArity = 0;
G__35481.cljs$lang$applyTo = (function (arglist__35483){
var args = cljs.core.seq(arglist__35483);
return G__35481__delegate(args);
});
G__35481.cljs$core$IFn$_invoke$arity$variadic = G__35481__delegate;
return G__35481;
})()
);

(o.error = (function() { 
var G__35484__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35485__i = 0, G__35485__a = new Array(arguments.length -  0);
while (G__35485__i < G__35485__a.length) {G__35485__a[G__35485__i] = arguments[G__35485__i + 0]; ++G__35485__i;}
  args = new cljs.core.IndexedSeq(G__35485__a,0,null);
} 
return G__35484__delegate.call(this,args);};
G__35484.cljs$lang$maxFixedArity = 0;
G__35484.cljs$lang$applyTo = (function (arglist__35487){
var args = cljs.core.seq(arglist__35487);
return G__35484__delegate(args);
});
G__35484.cljs$core$IFn$_invoke$arity$variadic = G__35484__delegate;
return G__35484;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
