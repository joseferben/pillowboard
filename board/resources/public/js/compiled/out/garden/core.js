// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21074 = arguments.length;
var i__8890__auto___21075 = (0);
while(true){
if((i__8890__auto___21075 < len__8889__auto___21074)){
args__8896__auto__.push((arguments[i__8890__auto___21075]));

var G__21076 = (i__8890__auto___21075 + (1));
i__8890__auto___21075 = G__21076;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq21073){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21073));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21078 = arguments.length;
var i__8890__auto___21079 = (0);
while(true){
if((i__8890__auto___21079 < len__8889__auto___21078)){
args__8896__auto__.push((arguments[i__8890__auto___21079]));

var G__21080 = (i__8890__auto___21079 + (1));
i__8890__auto___21079 = G__21080;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq21077){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21077));
});


//# sourceMappingURL=core.js.map?rel=1513171809550
