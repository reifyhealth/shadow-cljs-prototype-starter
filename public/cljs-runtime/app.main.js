goog.provide('app.main');
var module$node_modules$antd$lib$index=shadow.js.require("module$node_modules$antd$lib$index", {});
/**
 * Your super awesome prototype here!
 */
app.main.app = (function app$main$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-xl","div.padding-xl",-1427905391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.margin-bottom-md","img.margin-bottom-md",1446793083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"picasso-logo-with-tag.svg",new cljs.core.Keyword(null,"width","width",-384071477),(180)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Build something useful and unique!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$antd$lib$index.Space,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$antd$lib$index.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return module$node_modules$antd$lib$index.message.info(({"content": "Boom!", "icon": reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.margin-right-sm","span.margin-right-sm",81283355),"\uD83D\uDCA5"], null))}));
})], null),"Click me"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://picasso-sprints.herokuapp.com/frontend"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.padding-sm","span.padding-sm",314186982),"Front-end Zen"], null)], null)], null)], null);
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
