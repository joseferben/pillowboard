// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19426 = arguments.length;
var i__8890__auto___19427 = (0);
while(true){
if((i__8890__auto___19427 < len__8889__auto___19426)){
args__8896__auto__.push((arguments[i__8890__auto___19427]));

var G__19428 = (i__8890__auto___19427 + (1));
i__8890__auto___19427 = G__19428;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__19429__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__19429 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__19430__i = 0, G__19430__a = new Array(arguments.length -  0);
while (G__19430__i < G__19430__a.length) {G__19430__a[G__19430__i] = arguments[G__19430__i + 0]; ++G__19430__i;}
  children = new cljs.core.IndexedSeq(G__19430__a,0,null);
} 
return G__19429__delegate.call(this,children);};
G__19429.cljs$lang$maxFixedArity = 0;
G__19429.cljs$lang$applyTo = (function (arglist__19431){
var children = cljs.core.seq(arglist__19431);
return G__19429__delegate(children);
});
G__19429.cljs$core$IFn$_invoke$arity$variadic = G__19429__delegate;
return G__19429;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq19424){
var G__19425 = cljs.core.first.call(null,seq19424);
var seq19424__$1 = cljs.core.next.call(null,seq19424);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__19425,seq19424__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__19432__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__19432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19433__i = 0, G__19433__a = new Array(arguments.length -  0);
while (G__19433__i < G__19433__a.length) {G__19433__a[G__19433__i] = arguments[G__19433__i + 0]; ++G__19433__i;}
  args = new cljs.core.IndexedSeq(G__19433__a,0,null);
} 
return G__19432__delegate.call(this,args);};
G__19432.cljs$lang$maxFixedArity = 0;
G__19432.cljs$lang$applyTo = (function (arglist__19434){
var args = cljs.core.seq(arglist__19434);
return G__19432__delegate(args);
});
G__19432.cljs$core$IFn$_invoke$arity$variadic = G__19432__delegate;
return G__19432;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19436 = arguments.length;
var i__8890__auto___19437 = (0);
while(true){
if((i__8890__auto___19437 < len__8889__auto___19436)){
args__8896__auto__.push((arguments[i__8890__auto___19437]));

var G__19438 = (i__8890__auto___19437 + (1));
i__8890__auto___19437 = G__19438;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq19435){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19435));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__19442 = arguments.length;
switch (G__19442) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19444 = arguments.length;
var i__8890__auto___19445 = (0);
while(true){
if((i__8890__auto___19445 < len__8889__auto___19444)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19445]));

var G__19446 = (i__8890__auto___19445 + (1));
i__8890__auto___19445 = G__19446;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8913__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq19440){
var G__19441 = cljs.core.first.call(null,seq19440);
var seq19440__$1 = cljs.core.next.call(null,seq19440);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__19441,seq19440__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19449 = arguments.length;
var i__8890__auto___19450 = (0);
while(true){
if((i__8890__auto___19450 < len__8889__auto___19449)){
args__8896__auto__.push((arguments[i__8890__auto___19450]));

var G__19451 = (i__8890__auto___19450 + (1));
i__8890__auto___19450 = G__19451;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq19447){
var G__19448 = cljs.core.first.call(null,seq19447);
var seq19447__$1 = cljs.core.next.call(null,seq19447);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__19448,seq19447__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19454 = arguments.length;
var i__8890__auto___19455 = (0);
while(true){
if((i__8890__auto___19455 < len__8889__auto___19454)){
args__8896__auto__.push((arguments[i__8890__auto___19455]));

var G__19456 = (i__8890__auto___19455 + (1));
i__8890__auto___19455 = G__19456;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq19452){
var G__19453 = cljs.core.first.call(null,seq19452);
var seq19452__$1 = cljs.core.next.call(null,seq19452);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__19453,seq19452__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1513171808646
