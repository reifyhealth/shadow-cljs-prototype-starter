goog.provide('app.main');
var module$node_modules$picasso_pkg$components$index=shadow.js.require("module$node_modules$picasso_pkg$components$index", {});
app.main.app = (function app$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-xl","div.padding-xl",-1427905391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"ClojureScript!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$picasso_pkg$components$index.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return module$node_modules$picasso_pkg$components$index.message.info(({"content": "Boom!", "icon": reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.margin-right-sm","span.margin-right-sm",81283355),"\uD83D\uDCA5"], null))}));
})], null),"Click me"], null)], null);
});
app.main.mount = (function app$main$mount(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.app], null),document.getElementById("app"));
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
