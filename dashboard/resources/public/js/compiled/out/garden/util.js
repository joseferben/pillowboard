// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13595 = arguments.length;
var i__8890__auto___13596 = (0);
while(true){
if((i__8890__auto___13596 < len__8889__auto___13595)){
args__8896__auto__.push((arguments[i__8890__auto___13596]));

var G__13597 = (i__8890__auto___13596 + (1));
i__8890__auto___13596 = G__13597;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq13593){
var G__13594 = cljs.core.first.call(null,seq13593);
var seq13593__$1 = cljs.core.next.call(null,seq13593);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__13594,seq13593__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__8343__auto__ = (((this$ == null))?null:this$);
var m__8344__auto__ = (garden.util.to_str[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,this$);
} else {
var m__8344__auto____$1 = (garden.util.to_str["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13599 = arguments.length;
var i__8890__auto___13600 = (0);
while(true){
if((i__8890__auto___13600 < len__8889__auto___13599)){
args__8896__auto__.push((arguments[i__8890__auto___13600]));

var G__13601 = (i__8890__auto___13600 + (1));
i__8890__auto___13600 = G__13601;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq13598){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13598));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13608 = arguments.length;
var i__8890__auto___13609 = (0);
while(true){
if((i__8890__auto___13609 < len__8889__auto___13608)){
args__8896__auto__.push((arguments[i__8890__auto___13609]));

var G__13610 = (i__8890__auto___13609 + (1));
i__8890__auto___13609 = G__13610;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__13604){
var vec__13605 = p__13604;
var radix = cljs.core.nth.call(null,vec__13605,(0),null);
var radix__$1 = (function (){var or__7610__auto__ = radix;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq13602){
var G__13603 = cljs.core.first.call(null,seq13602);
var seq13602__$1 = cljs.core.next.call(null,seq13602);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__13603,seq13602__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13617 = arguments.length;
var i__8890__auto___13618 = (0);
while(true){
if((i__8890__auto___13618 < len__8889__auto___13617)){
args__8896__auto__.push((arguments[i__8890__auto___13618]));

var G__13619 = (i__8890__auto___13618 + (1));
i__8890__auto___13618 = G__13619;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__13613){
var vec__13614 = p__13613;
var radix = cljs.core.nth.call(null,vec__13614,(0),null);
var radix__$1 = (function (){var or__7610__auto__ = radix;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq13611){
var G__13612 = cljs.core.first.call(null,seq13611);
var seq13611__$1 = cljs.core.next.call(null,seq13611);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__13612,seq13611__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__8492__auto__ = (function garden$util$comma_join_$_iter__13620(s__13621){
return (new cljs.core.LazySeq(null,(function (){
var s__13621__$1 = s__13621;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__13621__$1);
if(temp__5278__auto__){
var s__13621__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13621__$2)){
var c__8490__auto__ = cljs.core.chunk_first.call(null,s__13621__$2);
var size__8491__auto__ = cljs.core.count.call(null,c__8490__auto__);
var b__13623 = cljs.core.chunk_buffer.call(null,size__8491__auto__);
if((function (){var i__13622 = (0);
while(true){
if((i__13622 < size__8491__auto__)){
var x = cljs.core._nth.call(null,c__8490__auto__,i__13622);
cljs.core.chunk_append.call(null,b__13623,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__13624 = (i__13622 + (1));
i__13622 = G__13624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13623),garden$util$comma_join_$_iter__13620.call(null,cljs.core.chunk_rest.call(null,s__13621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13623),null);
}
} else {
var x = cljs.core.first.call(null,s__13621__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__13620.call(null,cljs.core.rest.call(null,s__13621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8492__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__7598__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__7598__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__7598__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__7598__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__7598__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__7598__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__7969__auto__ = a;
var y__7970__auto__ = b;
return ((x__7969__auto__ < y__7970__auto__) ? x__7969__auto__ : y__7970__auto__);
})();
var top = (function (){var x__7962__auto__ = a;
var y__7963__auto__ = b;
return ((x__7962__auto__ > y__7963__auto__) ? x__7962__auto__ : y__7963__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__13625 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__13625,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__13625,(1),null);
var x__7962__auto__ = a__$1;
var y__7963__auto__ = (function (){var x__7969__auto__ = b__$1;
var y__7970__auto__ = n;
return ((x__7969__auto__ < y__7970__auto__) ? x__7969__auto__ : y__7970__auto__);
})();
return ((x__7962__auto__ > y__7963__auto__) ? x__7962__auto__ : y__7963__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13631 = arguments.length;
var i__8890__auto___13632 = (0);
while(true){
if((i__8890__auto___13632 < len__8889__auto___13631)){
args__8896__auto__.push((arguments[i__8890__auto___13632]));

var G__13633 = (i__8890__auto___13632 + (1));
i__8890__auto___13632 = G__13633;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((2) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8897__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq13628){
var G__13629 = cljs.core.first.call(null,seq13628);
var seq13628__$1 = cljs.core.next.call(null,seq13628);
var G__13630 = cljs.core.first.call(null,seq13628__$1);
var seq13628__$2 = cljs.core.next.call(null,seq13628__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__13629,G__13630,seq13628__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__8896__auto__ = [];
var len__8889__auto___13635 = arguments.length;
var i__8890__auto___13636 = (0);
while(true){
if((i__8890__auto___13636 < len__8889__auto___13635)){
args__8896__auto__.push((arguments[i__8890__auto___13636]));

var G__13637 = (i__8890__auto___13636 + (1));
i__8890__auto___13636 = G__13637;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5276__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5276__auto__){
var rst = temp__5276__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__13638 = (i - (1));
var G__13639 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__13638;
v_seqs__$2 = G__13639;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq13634){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13634));
});


//# sourceMappingURL=util.js.map?rel=1513171804156
