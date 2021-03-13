goog.provide('app.main');
app.main.mount = (function app$main$mount(){
if(cljs.core.truth_(document.getElementById("cljs-demo"))){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"cljs here"], null),document.getElementById("cljs-demo"));
} else {
return null;
}
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App reloaded!"], 0));

return app.main.mount();
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App loaded!"], 0));

return app.main.mount();
});

//# sourceMappingURL=app.main.js.map
