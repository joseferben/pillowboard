// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__60405__delegate = function (x){
if(cljs.core.truth_(dashboard.core.main)){
return cljs.core.apply.call(null,dashboard.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dashboard.core/main' is missing");
}
};
var G__60405 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__60406__i = 0, G__60406__a = new Array(arguments.length -  0);
while (G__60406__i < G__60406__a.length) {G__60406__a[G__60406__i] = arguments[G__60406__i + 0]; ++G__60406__i;}
  x = new cljs.core.IndexedSeq(G__60406__a,0,null);
} 
return G__60405__delegate.call(this,x);};
G__60405.cljs$lang$maxFixedArity = 0;
G__60405.cljs$lang$applyTo = (function (arglist__60407){
var x = cljs.core.seq(arglist__60407);
return G__60405__delegate(x);
});
G__60405.cljs$core$IFn$_invoke$arity$variadic = G__60405__delegate;
return G__60405;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1513172448391
