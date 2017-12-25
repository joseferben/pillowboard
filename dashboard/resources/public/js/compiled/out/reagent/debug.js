// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11042__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11043__i = 0, G__11043__a = new Array(arguments.length -  0);
while (G__11043__i < G__11043__a.length) {G__11043__a[G__11043__i] = arguments[G__11043__i + 0]; ++G__11043__i;}
  args = new cljs.core.IndexedSeq(G__11043__a,0,null);
} 
return G__11042__delegate.call(this,args);};
G__11042.cljs$lang$maxFixedArity = 0;
G__11042.cljs$lang$applyTo = (function (arglist__11044){
var args = cljs.core.seq(arglist__11044);
return G__11042__delegate(args);
});
G__11042.cljs$core$IFn$_invoke$arity$variadic = G__11042__delegate;
return G__11042;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11045__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11046__i = 0, G__11046__a = new Array(arguments.length -  0);
while (G__11046__i < G__11046__a.length) {G__11046__a[G__11046__i] = arguments[G__11046__i + 0]; ++G__11046__i;}
  args = new cljs.core.IndexedSeq(G__11046__a,0,null);
} 
return G__11045__delegate.call(this,args);};
G__11045.cljs$lang$maxFixedArity = 0;
G__11045.cljs$lang$applyTo = (function (arglist__11047){
var args = cljs.core.seq(arglist__11047);
return G__11045__delegate(args);
});
G__11045.cljs$core$IFn$_invoke$arity$variadic = G__11045__delegate;
return G__11045;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1513171800643
