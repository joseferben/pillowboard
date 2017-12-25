// Compiled by ClojureScript 1.9.946 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__7610__auto__ = elem.textContent;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__19551 = arguments.length;
switch (G__19551) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5276__auto__ = elem.classList;
if(cljs.core.truth_(temp__5276__auto__)){
var class_list = temp__5276__auto__;
return class_list.contains(c__$1);
} else {
var temp__5278__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5278__auto__)){
var class_name = temp__5278__auto__;
var temp__5278__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5278__auto____$1)){
var i = temp__5278__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__19554 = arguments.length;
switch (G__19554) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__19558 = arguments.length;
switch (G__19558) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__19556_SHARP_){
return !((p1__19556_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19572 = arguments.length;
var i__8890__auto___19573 = (0);
while(true){
if((i__8890__auto___19573 < len__8889__auto___19572)){
args__8896__auto__.push((arguments[i__8890__auto___19573]));

var G__19574 = (i__8890__auto___19573 + (1));
i__8890__auto___19573 = G__19574;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__19562_19575 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19563_19576 = null;
var count__19564_19577 = (0);
var i__19565_19578 = (0);
while(true){
if((i__19565_19578 < count__19564_19577)){
var vec__19566_19579 = cljs.core._nth.call(null,chunk__19563_19576,i__19565_19578);
var k_19580 = cljs.core.nth.call(null,vec__19566_19579,(0),null);
var v_19581 = cljs.core.nth.call(null,vec__19566_19579,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19580),v_19581);

var G__19582 = seq__19562_19575;
var G__19583 = chunk__19563_19576;
var G__19584 = count__19564_19577;
var G__19585 = (i__19565_19578 + (1));
seq__19562_19575 = G__19582;
chunk__19563_19576 = G__19583;
count__19564_19577 = G__19584;
i__19565_19578 = G__19585;
continue;
} else {
var temp__5278__auto___19586 = cljs.core.seq.call(null,seq__19562_19575);
if(temp__5278__auto___19586){
var seq__19562_19587__$1 = temp__5278__auto___19586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19562_19587__$1)){
var c__8541__auto___19588 = cljs.core.chunk_first.call(null,seq__19562_19587__$1);
var G__19589 = cljs.core.chunk_rest.call(null,seq__19562_19587__$1);
var G__19590 = c__8541__auto___19588;
var G__19591 = cljs.core.count.call(null,c__8541__auto___19588);
var G__19592 = (0);
seq__19562_19575 = G__19589;
chunk__19563_19576 = G__19590;
count__19564_19577 = G__19591;
i__19565_19578 = G__19592;
continue;
} else {
var vec__19569_19593 = cljs.core.first.call(null,seq__19562_19587__$1);
var k_19594 = cljs.core.nth.call(null,vec__19569_19593,(0),null);
var v_19595 = cljs.core.nth.call(null,vec__19569_19593,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_19594),v_19595);

var G__19596 = cljs.core.next.call(null,seq__19562_19587__$1);
var G__19597 = null;
var G__19598 = (0);
var G__19599 = (0);
seq__19562_19575 = G__19596;
chunk__19563_19576 = G__19597;
count__19564_19577 = G__19598;
i__19565_19578 = G__19599;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq19560){
var G__19561 = cljs.core.first.call(null,seq19560);
var seq19560__$1 = cljs.core.next.call(null,seq19560);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19561,seq19560__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19606 = arguments.length;
var i__8890__auto___19607 = (0);
while(true){
if((i__8890__auto___19607 < len__8889__auto___19606)){
args__8896__auto__.push((arguments[i__8890__auto___19607]));

var G__19608 = (i__8890__auto___19607 + (1));
i__8890__auto___19607 = G__19608;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__19602_19609 = cljs.core.seq.call(null,keywords);
var chunk__19603_19610 = null;
var count__19604_19611 = (0);
var i__19605_19612 = (0);
while(true){
if((i__19605_19612 < count__19604_19611)){
var kw_19613 = cljs.core._nth.call(null,chunk__19603_19610,i__19605_19612);
style.removeProperty(dommy.utils.as_str.call(null,kw_19613));

var G__19614 = seq__19602_19609;
var G__19615 = chunk__19603_19610;
var G__19616 = count__19604_19611;
var G__19617 = (i__19605_19612 + (1));
seq__19602_19609 = G__19614;
chunk__19603_19610 = G__19615;
count__19604_19611 = G__19616;
i__19605_19612 = G__19617;
continue;
} else {
var temp__5278__auto___19618 = cljs.core.seq.call(null,seq__19602_19609);
if(temp__5278__auto___19618){
var seq__19602_19619__$1 = temp__5278__auto___19618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19602_19619__$1)){
var c__8541__auto___19620 = cljs.core.chunk_first.call(null,seq__19602_19619__$1);
var G__19621 = cljs.core.chunk_rest.call(null,seq__19602_19619__$1);
var G__19622 = c__8541__auto___19620;
var G__19623 = cljs.core.count.call(null,c__8541__auto___19620);
var G__19624 = (0);
seq__19602_19609 = G__19621;
chunk__19603_19610 = G__19622;
count__19604_19611 = G__19623;
i__19605_19612 = G__19624;
continue;
} else {
var kw_19625 = cljs.core.first.call(null,seq__19602_19619__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_19625));

var G__19626 = cljs.core.next.call(null,seq__19602_19619__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__19602_19609 = G__19626;
chunk__19603_19610 = G__19627;
count__19604_19611 = G__19628;
i__19605_19612 = G__19629;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq19600){
var G__19601 = cljs.core.first.call(null,seq19600);
var seq19600__$1 = cljs.core.next.call(null,seq19600);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19601,seq19600__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19642 = arguments.length;
var i__8890__auto___19643 = (0);
while(true){
if((i__8890__auto___19643 < len__8889__auto___19642)){
args__8896__auto__.push((arguments[i__8890__auto___19643]));

var G__19644 = (i__8890__auto___19643 + (1));
i__8890__auto___19643 = G__19644;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__19632_19645 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__19633_19646 = null;
var count__19634_19647 = (0);
var i__19635_19648 = (0);
while(true){
if((i__19635_19648 < count__19634_19647)){
var vec__19636_19649 = cljs.core._nth.call(null,chunk__19633_19646,i__19635_19648);
var k_19650 = cljs.core.nth.call(null,vec__19636_19649,(0),null);
var v_19651 = cljs.core.nth.call(null,vec__19636_19649,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19650,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_19651),"px"].join(''));

var G__19652 = seq__19632_19645;
var G__19653 = chunk__19633_19646;
var G__19654 = count__19634_19647;
var G__19655 = (i__19635_19648 + (1));
seq__19632_19645 = G__19652;
chunk__19633_19646 = G__19653;
count__19634_19647 = G__19654;
i__19635_19648 = G__19655;
continue;
} else {
var temp__5278__auto___19656 = cljs.core.seq.call(null,seq__19632_19645);
if(temp__5278__auto___19656){
var seq__19632_19657__$1 = temp__5278__auto___19656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19632_19657__$1)){
var c__8541__auto___19658 = cljs.core.chunk_first.call(null,seq__19632_19657__$1);
var G__19659 = cljs.core.chunk_rest.call(null,seq__19632_19657__$1);
var G__19660 = c__8541__auto___19658;
var G__19661 = cljs.core.count.call(null,c__8541__auto___19658);
var G__19662 = (0);
seq__19632_19645 = G__19659;
chunk__19633_19646 = G__19660;
count__19634_19647 = G__19661;
i__19635_19648 = G__19662;
continue;
} else {
var vec__19639_19663 = cljs.core.first.call(null,seq__19632_19657__$1);
var k_19664 = cljs.core.nth.call(null,vec__19639_19663,(0),null);
var v_19665 = cljs.core.nth.call(null,vec__19639_19663,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_19664,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_19665),"px"].join(''));

var G__19666 = cljs.core.next.call(null,seq__19632_19657__$1);
var G__19667 = null;
var G__19668 = (0);
var G__19669 = (0);
seq__19632_19645 = G__19666;
chunk__19633_19646 = G__19667;
count__19634_19647 = G__19668;
i__19635_19648 = G__19669;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq19630){
var G__19631 = cljs.core.first.call(null,seq19630);
var seq19630__$1 = cljs.core.next.call(null,seq19630);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19631,seq19630__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__19675 = arguments.length;
switch (G__19675) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19689 = arguments.length;
var i__8890__auto___19690 = (0);
while(true){
if((i__8890__auto___19690 < len__8889__auto___19689)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19690]));

var G__19691 = (i__8890__auto___19690 + (1));
i__8890__auto___19690 = G__19691;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8913__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__19676 = elem;
(G__19676[k__$1] = v);

return G__19676;
} else {
var G__19677 = elem;
G__19677.setAttribute(k__$1,v);

return G__19677;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__19678_19692 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__19679_19693 = null;
var count__19680_19694 = (0);
var i__19681_19695 = (0);
while(true){
if((i__19681_19695 < count__19680_19694)){
var vec__19682_19696 = cljs.core._nth.call(null,chunk__19679_19693,i__19681_19695);
var k_19697__$1 = cljs.core.nth.call(null,vec__19682_19696,(0),null);
var v_19698__$1 = cljs.core.nth.call(null,vec__19682_19696,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_19697__$1,v_19698__$1);

var G__19699 = seq__19678_19692;
var G__19700 = chunk__19679_19693;
var G__19701 = count__19680_19694;
var G__19702 = (i__19681_19695 + (1));
seq__19678_19692 = G__19699;
chunk__19679_19693 = G__19700;
count__19680_19694 = G__19701;
i__19681_19695 = G__19702;
continue;
} else {
var temp__5278__auto___19703 = cljs.core.seq.call(null,seq__19678_19692);
if(temp__5278__auto___19703){
var seq__19678_19704__$1 = temp__5278__auto___19703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19678_19704__$1)){
var c__8541__auto___19705 = cljs.core.chunk_first.call(null,seq__19678_19704__$1);
var G__19706 = cljs.core.chunk_rest.call(null,seq__19678_19704__$1);
var G__19707 = c__8541__auto___19705;
var G__19708 = cljs.core.count.call(null,c__8541__auto___19705);
var G__19709 = (0);
seq__19678_19692 = G__19706;
chunk__19679_19693 = G__19707;
count__19680_19694 = G__19708;
i__19681_19695 = G__19709;
continue;
} else {
var vec__19685_19710 = cljs.core.first.call(null,seq__19678_19704__$1);
var k_19711__$1 = cljs.core.nth.call(null,vec__19685_19710,(0),null);
var v_19712__$1 = cljs.core.nth.call(null,vec__19685_19710,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_19711__$1,v_19712__$1);

var G__19713 = cljs.core.next.call(null,seq__19678_19704__$1);
var G__19714 = null;
var G__19715 = (0);
var G__19716 = (0);
seq__19678_19692 = G__19713;
chunk__19679_19693 = G__19714;
count__19680_19694 = G__19715;
i__19681_19695 = G__19716;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq19671){
var G__19672 = cljs.core.first.call(null,seq19671);
var seq19671__$1 = cljs.core.next.call(null,seq19671);
var G__19673 = cljs.core.first.call(null,seq19671__$1);
var seq19671__$2 = cljs.core.next.call(null,seq19671__$1);
var G__19674 = cljs.core.first.call(null,seq19671__$2);
var seq19671__$3 = cljs.core.next.call(null,seq19671__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19672,G__19673,G__19674,seq19671__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__19721 = arguments.length;
switch (G__19721) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19727 = arguments.length;
var i__8890__auto___19728 = (0);
while(true){
if((i__8890__auto___19728 < len__8889__auto___19727)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19728]));

var G__19729 = (i__8890__auto___19728 + (1));
i__8890__auto___19728 = G__19729;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8913__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_19730__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_19730__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_19730__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__19722_19731 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__19723_19732 = null;
var count__19724_19733 = (0);
var i__19725_19734 = (0);
while(true){
if((i__19725_19734 < count__19724_19733)){
var k_19735__$1 = cljs.core._nth.call(null,chunk__19723_19732,i__19725_19734);
dommy.core.remove_attr_BANG_.call(null,elem,k_19735__$1);

var G__19736 = seq__19722_19731;
var G__19737 = chunk__19723_19732;
var G__19738 = count__19724_19733;
var G__19739 = (i__19725_19734 + (1));
seq__19722_19731 = G__19736;
chunk__19723_19732 = G__19737;
count__19724_19733 = G__19738;
i__19725_19734 = G__19739;
continue;
} else {
var temp__5278__auto___19740 = cljs.core.seq.call(null,seq__19722_19731);
if(temp__5278__auto___19740){
var seq__19722_19741__$1 = temp__5278__auto___19740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19722_19741__$1)){
var c__8541__auto___19742 = cljs.core.chunk_first.call(null,seq__19722_19741__$1);
var G__19743 = cljs.core.chunk_rest.call(null,seq__19722_19741__$1);
var G__19744 = c__8541__auto___19742;
var G__19745 = cljs.core.count.call(null,c__8541__auto___19742);
var G__19746 = (0);
seq__19722_19731 = G__19743;
chunk__19723_19732 = G__19744;
count__19724_19733 = G__19745;
i__19725_19734 = G__19746;
continue;
} else {
var k_19747__$1 = cljs.core.first.call(null,seq__19722_19741__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_19747__$1);

var G__19748 = cljs.core.next.call(null,seq__19722_19741__$1);
var G__19749 = null;
var G__19750 = (0);
var G__19751 = (0);
seq__19722_19731 = G__19748;
chunk__19723_19732 = G__19749;
count__19724_19733 = G__19750;
i__19725_19734 = G__19751;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq19718){
var G__19719 = cljs.core.first.call(null,seq19718);
var seq19718__$1 = cljs.core.next.call(null,seq19718);
var G__19720 = cljs.core.first.call(null,seq19718__$1);
var seq19718__$2 = cljs.core.next.call(null,seq19718__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19719,G__19720,seq19718__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__19753 = arguments.length;
switch (G__19753) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__19759 = arguments.length;
switch (G__19759) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19773 = arguments.length;
var i__8890__auto___19774 = (0);
while(true){
if((i__8890__auto___19774 < len__8889__auto___19773)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19774]));

var G__19775 = (i__8890__auto___19774 + (1));
i__8890__auto___19774 = G__19775;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8913__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5276__auto___19776 = elem.classList;
if(cljs.core.truth_(temp__5276__auto___19776)){
var class_list_19777 = temp__5276__auto___19776;
var seq__19760_19778 = cljs.core.seq.call(null,classes__$1);
var chunk__19761_19779 = null;
var count__19762_19780 = (0);
var i__19763_19781 = (0);
while(true){
if((i__19763_19781 < count__19762_19780)){
var c_19782 = cljs.core._nth.call(null,chunk__19761_19779,i__19763_19781);
class_list_19777.add(c_19782);

var G__19783 = seq__19760_19778;
var G__19784 = chunk__19761_19779;
var G__19785 = count__19762_19780;
var G__19786 = (i__19763_19781 + (1));
seq__19760_19778 = G__19783;
chunk__19761_19779 = G__19784;
count__19762_19780 = G__19785;
i__19763_19781 = G__19786;
continue;
} else {
var temp__5278__auto___19787 = cljs.core.seq.call(null,seq__19760_19778);
if(temp__5278__auto___19787){
var seq__19760_19788__$1 = temp__5278__auto___19787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19760_19788__$1)){
var c__8541__auto___19789 = cljs.core.chunk_first.call(null,seq__19760_19788__$1);
var G__19790 = cljs.core.chunk_rest.call(null,seq__19760_19788__$1);
var G__19791 = c__8541__auto___19789;
var G__19792 = cljs.core.count.call(null,c__8541__auto___19789);
var G__19793 = (0);
seq__19760_19778 = G__19790;
chunk__19761_19779 = G__19791;
count__19762_19780 = G__19792;
i__19763_19781 = G__19793;
continue;
} else {
var c_19794 = cljs.core.first.call(null,seq__19760_19788__$1);
class_list_19777.add(c_19794);

var G__19795 = cljs.core.next.call(null,seq__19760_19788__$1);
var G__19796 = null;
var G__19797 = (0);
var G__19798 = (0);
seq__19760_19778 = G__19795;
chunk__19761_19779 = G__19796;
count__19762_19780 = G__19797;
i__19763_19781 = G__19798;
continue;
}
} else {
}
}
break;
}
} else {
var seq__19764_19799 = cljs.core.seq.call(null,classes__$1);
var chunk__19765_19800 = null;
var count__19766_19801 = (0);
var i__19767_19802 = (0);
while(true){
if((i__19767_19802 < count__19766_19801)){
var c_19803 = cljs.core._nth.call(null,chunk__19765_19800,i__19767_19802);
var class_name_19804 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_19804,c_19803))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_19804 === ""))?c_19803:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_19804)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_19803)].join('')));
}

var G__19805 = seq__19764_19799;
var G__19806 = chunk__19765_19800;
var G__19807 = count__19766_19801;
var G__19808 = (i__19767_19802 + (1));
seq__19764_19799 = G__19805;
chunk__19765_19800 = G__19806;
count__19766_19801 = G__19807;
i__19767_19802 = G__19808;
continue;
} else {
var temp__5278__auto___19809 = cljs.core.seq.call(null,seq__19764_19799);
if(temp__5278__auto___19809){
var seq__19764_19810__$1 = temp__5278__auto___19809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19764_19810__$1)){
var c__8541__auto___19811 = cljs.core.chunk_first.call(null,seq__19764_19810__$1);
var G__19812 = cljs.core.chunk_rest.call(null,seq__19764_19810__$1);
var G__19813 = c__8541__auto___19811;
var G__19814 = cljs.core.count.call(null,c__8541__auto___19811);
var G__19815 = (0);
seq__19764_19799 = G__19812;
chunk__19765_19800 = G__19813;
count__19766_19801 = G__19814;
i__19767_19802 = G__19815;
continue;
} else {
var c_19816 = cljs.core.first.call(null,seq__19764_19810__$1);
var class_name_19817 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_19817,c_19816))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_19817 === ""))?c_19816:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_19817)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_19816)].join('')));
}

var G__19818 = cljs.core.next.call(null,seq__19764_19810__$1);
var G__19819 = null;
var G__19820 = (0);
var G__19821 = (0);
seq__19764_19799 = G__19818;
chunk__19765_19800 = G__19819;
count__19766_19801 = G__19820;
i__19767_19802 = G__19821;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__19768_19822 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__19769_19823 = null;
var count__19770_19824 = (0);
var i__19771_19825 = (0);
while(true){
if((i__19771_19825 < count__19770_19824)){
var c_19826 = cljs.core._nth.call(null,chunk__19769_19823,i__19771_19825);
dommy.core.add_class_BANG_.call(null,elem,c_19826);

var G__19827 = seq__19768_19822;
var G__19828 = chunk__19769_19823;
var G__19829 = count__19770_19824;
var G__19830 = (i__19771_19825 + (1));
seq__19768_19822 = G__19827;
chunk__19769_19823 = G__19828;
count__19770_19824 = G__19829;
i__19771_19825 = G__19830;
continue;
} else {
var temp__5278__auto___19831 = cljs.core.seq.call(null,seq__19768_19822);
if(temp__5278__auto___19831){
var seq__19768_19832__$1 = temp__5278__auto___19831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19768_19832__$1)){
var c__8541__auto___19833 = cljs.core.chunk_first.call(null,seq__19768_19832__$1);
var G__19834 = cljs.core.chunk_rest.call(null,seq__19768_19832__$1);
var G__19835 = c__8541__auto___19833;
var G__19836 = cljs.core.count.call(null,c__8541__auto___19833);
var G__19837 = (0);
seq__19768_19822 = G__19834;
chunk__19769_19823 = G__19835;
count__19770_19824 = G__19836;
i__19771_19825 = G__19837;
continue;
} else {
var c_19838 = cljs.core.first.call(null,seq__19768_19832__$1);
dommy.core.add_class_BANG_.call(null,elem,c_19838);

var G__19839 = cljs.core.next.call(null,seq__19768_19832__$1);
var G__19840 = null;
var G__19841 = (0);
var G__19842 = (0);
seq__19768_19822 = G__19839;
chunk__19769_19823 = G__19840;
count__19770_19824 = G__19841;
i__19771_19825 = G__19842;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq19756){
var G__19757 = cljs.core.first.call(null,seq19756);
var seq19756__$1 = cljs.core.next.call(null,seq19756);
var G__19758 = cljs.core.first.call(null,seq19756__$1);
var seq19756__$2 = cljs.core.next.call(null,seq19756__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19757,G__19758,seq19756__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__19847 = arguments.length;
switch (G__19847) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19853 = arguments.length;
var i__8890__auto___19854 = (0);
while(true){
if((i__8890__auto___19854 < len__8889__auto___19853)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19854]));

var G__19855 = (i__8890__auto___19854 + (1));
i__8890__auto___19854 = G__19855;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8913__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5276__auto___19856 = elem.classList;
if(cljs.core.truth_(temp__5276__auto___19856)){
var class_list_19857 = temp__5276__auto___19856;
class_list_19857.remove(c__$1);
} else {
var class_name_19858 = dommy.core.class$.call(null,elem);
var new_class_name_19859 = dommy.utils.remove_class_str.call(null,class_name_19858,c__$1);
if((class_name_19858 === new_class_name_19859)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_19859);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__19848 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__19849 = null;
var count__19850 = (0);
var i__19851 = (0);
while(true){
if((i__19851 < count__19850)){
var c = cljs.core._nth.call(null,chunk__19849,i__19851);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__19860 = seq__19848;
var G__19861 = chunk__19849;
var G__19862 = count__19850;
var G__19863 = (i__19851 + (1));
seq__19848 = G__19860;
chunk__19849 = G__19861;
count__19850 = G__19862;
i__19851 = G__19863;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__19848);
if(temp__5278__auto__){
var seq__19848__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19848__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__19848__$1);
var G__19864 = cljs.core.chunk_rest.call(null,seq__19848__$1);
var G__19865 = c__8541__auto__;
var G__19866 = cljs.core.count.call(null,c__8541__auto__);
var G__19867 = (0);
seq__19848 = G__19864;
chunk__19849 = G__19865;
count__19850 = G__19866;
i__19851 = G__19867;
continue;
} else {
var c = cljs.core.first.call(null,seq__19848__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__19868 = cljs.core.next.call(null,seq__19848__$1);
var G__19869 = null;
var G__19870 = (0);
var G__19871 = (0);
seq__19848 = G__19868;
chunk__19849 = G__19869;
count__19850 = G__19870;
i__19851 = G__19871;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq19844){
var G__19845 = cljs.core.first.call(null,seq19844);
var seq19844__$1 = cljs.core.next.call(null,seq19844);
var G__19846 = cljs.core.first.call(null,seq19844__$1);
var seq19844__$2 = cljs.core.next.call(null,seq19844__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19845,G__19846,seq19844__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__19873 = arguments.length;
switch (G__19873) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5276__auto___19875 = elem.classList;
if(cljs.core.truth_(temp__5276__auto___19875)){
var class_list_19876 = temp__5276__auto___19875;
class_list_19876.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__19878 = arguments.length;
switch (G__19878) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__19881 = arguments.length;
switch (G__19881) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__19887 = arguments.length;
switch (G__19887) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19894 = arguments.length;
var i__8890__auto___19895 = (0);
while(true){
if((i__8890__auto___19895 < len__8889__auto___19894)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19895]));

var G__19896 = (i__8890__auto___19895 + (1));
i__8890__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8913__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__19888 = parent;
G__19888.appendChild(child);

return G__19888;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__19889_19897 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__19890_19898 = null;
var count__19891_19899 = (0);
var i__19892_19900 = (0);
while(true){
if((i__19892_19900 < count__19891_19899)){
var c_19901 = cljs.core._nth.call(null,chunk__19890_19898,i__19892_19900);
dommy.core.append_BANG_.call(null,parent,c_19901);

var G__19902 = seq__19889_19897;
var G__19903 = chunk__19890_19898;
var G__19904 = count__19891_19899;
var G__19905 = (i__19892_19900 + (1));
seq__19889_19897 = G__19902;
chunk__19890_19898 = G__19903;
count__19891_19899 = G__19904;
i__19892_19900 = G__19905;
continue;
} else {
var temp__5278__auto___19906 = cljs.core.seq.call(null,seq__19889_19897);
if(temp__5278__auto___19906){
var seq__19889_19907__$1 = temp__5278__auto___19906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19889_19907__$1)){
var c__8541__auto___19908 = cljs.core.chunk_first.call(null,seq__19889_19907__$1);
var G__19909 = cljs.core.chunk_rest.call(null,seq__19889_19907__$1);
var G__19910 = c__8541__auto___19908;
var G__19911 = cljs.core.count.call(null,c__8541__auto___19908);
var G__19912 = (0);
seq__19889_19897 = G__19909;
chunk__19890_19898 = G__19910;
count__19891_19899 = G__19911;
i__19892_19900 = G__19912;
continue;
} else {
var c_19913 = cljs.core.first.call(null,seq__19889_19907__$1);
dommy.core.append_BANG_.call(null,parent,c_19913);

var G__19914 = cljs.core.next.call(null,seq__19889_19907__$1);
var G__19915 = null;
var G__19916 = (0);
var G__19917 = (0);
seq__19889_19897 = G__19914;
chunk__19890_19898 = G__19915;
count__19891_19899 = G__19916;
i__19892_19900 = G__19917;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq19884){
var G__19885 = cljs.core.first.call(null,seq19884);
var seq19884__$1 = cljs.core.next.call(null,seq19884);
var G__19886 = cljs.core.first.call(null,seq19884__$1);
var seq19884__$2 = cljs.core.next.call(null,seq19884__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19885,G__19886,seq19884__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__19922 = arguments.length;
switch (G__19922) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8912__auto__ = [];
var len__8889__auto___19929 = arguments.length;
var i__8890__auto___19930 = (0);
while(true){
if((i__8890__auto___19930 < len__8889__auto___19929)){
args_arr__8912__auto__.push((arguments[i__8890__auto___19930]));

var G__19931 = (i__8890__auto___19930 + (1));
i__8890__auto___19930 = G__19931;
continue;
} else {
}
break;
}

var argseq__8913__auto__ = (new cljs.core.IndexedSeq(args_arr__8912__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8913__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__19923 = parent;
G__19923.insertBefore(child,parent.firstChild);

return G__19923;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__19924_19932 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__19925_19933 = null;
var count__19926_19934 = (0);
var i__19927_19935 = (0);
while(true){
if((i__19927_19935 < count__19926_19934)){
var c_19936 = cljs.core._nth.call(null,chunk__19925_19933,i__19927_19935);
dommy.core.prepend_BANG_.call(null,parent,c_19936);

var G__19937 = seq__19924_19932;
var G__19938 = chunk__19925_19933;
var G__19939 = count__19926_19934;
var G__19940 = (i__19927_19935 + (1));
seq__19924_19932 = G__19937;
chunk__19925_19933 = G__19938;
count__19926_19934 = G__19939;
i__19927_19935 = G__19940;
continue;
} else {
var temp__5278__auto___19941 = cljs.core.seq.call(null,seq__19924_19932);
if(temp__5278__auto___19941){
var seq__19924_19942__$1 = temp__5278__auto___19941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19924_19942__$1)){
var c__8541__auto___19943 = cljs.core.chunk_first.call(null,seq__19924_19942__$1);
var G__19944 = cljs.core.chunk_rest.call(null,seq__19924_19942__$1);
var G__19945 = c__8541__auto___19943;
var G__19946 = cljs.core.count.call(null,c__8541__auto___19943);
var G__19947 = (0);
seq__19924_19932 = G__19944;
chunk__19925_19933 = G__19945;
count__19926_19934 = G__19946;
i__19927_19935 = G__19947;
continue;
} else {
var c_19948 = cljs.core.first.call(null,seq__19924_19942__$1);
dommy.core.prepend_BANG_.call(null,parent,c_19948);

var G__19949 = cljs.core.next.call(null,seq__19924_19942__$1);
var G__19950 = null;
var G__19951 = (0);
var G__19952 = (0);
seq__19924_19932 = G__19949;
chunk__19925_19933 = G__19950;
count__19926_19934 = G__19951;
i__19927_19935 = G__19952;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq19919){
var G__19920 = cljs.core.first.call(null,seq19919);
var seq19919__$1 = cljs.core.next.call(null,seq19919);
var G__19921 = cljs.core.first.call(null,seq19919__$1);
var seq19919__$2 = cljs.core.next.call(null,seq19919__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19920,G__19921,seq19919__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5276__auto___19953 = other.nextSibling;
if(cljs.core.truth_(temp__5276__auto___19953)){
var next_19954 = temp__5276__auto___19953;
dommy.core.insert_before_BANG_.call(null,elem,next_19954);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__19956 = arguments.length;
switch (G__19956) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__19957 = p;
G__19957.removeChild(elem);

return G__19957;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19959){
var vec__19960 = p__19959;
var special_mouse_event = cljs.core.nth.call(null,vec__19960,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__19960,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__19960,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__19960,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__7610__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__7598__auto__ = related_target;
if(cljs.core.truth_(and__7598__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__7598__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__19960,special_mouse_event,real_mouse_event))
});})(vec__19960,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__7598__auto__ = selected_target;
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__7598__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__7610__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___19966 = arguments.length;
var i__8890__auto___19967 = (0);
while(true){
if((i__8890__auto___19967 < len__8889__auto___19966)){
args__8896__auto__.push((arguments[i__8890__auto___19967]));

var G__19968 = (i__8890__auto___19967 + (1));
i__8890__auto___19967 = G__19968;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((2) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8897__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq19963){
var G__19964 = cljs.core.first.call(null,seq19963);
var seq19963__$1 = cljs.core.next.call(null,seq19963);
var G__19965 = cljs.core.first.call(null,seq19963__$1);
var seq19963__$2 = cljs.core.next.call(null,seq19963__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19964,G__19965,seq19963__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___20008 = arguments.length;
var i__8890__auto___20009 = (0);
while(true){
if((i__8890__auto___20009 < len__8889__auto___20008)){
args__8896__auto__.push((arguments[i__8890__auto___20009]));

var G__20010 = (i__8890__auto___20009 + (1));
i__8890__auto___20009 = G__20010;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__19971_20011 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20012 = cljs.core.nth.call(null,vec__19971_20011,(0),null);
var selector_20013 = cljs.core.nth.call(null,vec__19971_20011,(1),null);
var seq__19974_20014 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__19981_20015 = null;
var count__19982_20016 = (0);
var i__19983_20017 = (0);
while(true){
if((i__19983_20017 < count__19982_20016)){
var vec__19990_20018 = cljs.core._nth.call(null,chunk__19981_20015,i__19983_20017);
var orig_type_20019 = cljs.core.nth.call(null,vec__19990_20018,(0),null);
var f_20020 = cljs.core.nth.call(null,vec__19990_20018,(1),null);
var seq__19984_20021 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20019,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_20019,cljs.core.identity])));
var chunk__19986_20022 = null;
var count__19987_20023 = (0);
var i__19988_20024 = (0);
while(true){
if((i__19988_20024 < count__19987_20023)){
var vec__19993_20025 = cljs.core._nth.call(null,chunk__19986_20022,i__19988_20024);
var actual_type_20026 = cljs.core.nth.call(null,vec__19993_20025,(0),null);
var factory_20027 = cljs.core.nth.call(null,vec__19993_20025,(1),null);
var canonical_f_20028 = (cljs.core.truth_(selector_20013)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20012,selector_20013):cljs.core.identity).call(null,factory_20027.call(null,f_20020));
dommy.core.update_event_listeners_BANG_.call(null,elem_20012,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20013,actual_type_20026,f_20020], null),canonical_f_20028);

if(cljs.core.truth_(elem_20012.addEventListener)){
elem_20012.addEventListener(cljs.core.name.call(null,actual_type_20026),canonical_f_20028);
} else {
elem_20012.attachEvent(cljs.core.name.call(null,actual_type_20026),canonical_f_20028);
}

var G__20029 = seq__19984_20021;
var G__20030 = chunk__19986_20022;
var G__20031 = count__19987_20023;
var G__20032 = (i__19988_20024 + (1));
seq__19984_20021 = G__20029;
chunk__19986_20022 = G__20030;
count__19987_20023 = G__20031;
i__19988_20024 = G__20032;
continue;
} else {
var temp__5278__auto___20033 = cljs.core.seq.call(null,seq__19984_20021);
if(temp__5278__auto___20033){
var seq__19984_20034__$1 = temp__5278__auto___20033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19984_20034__$1)){
var c__8541__auto___20035 = cljs.core.chunk_first.call(null,seq__19984_20034__$1);
var G__20036 = cljs.core.chunk_rest.call(null,seq__19984_20034__$1);
var G__20037 = c__8541__auto___20035;
var G__20038 = cljs.core.count.call(null,c__8541__auto___20035);
var G__20039 = (0);
seq__19984_20021 = G__20036;
chunk__19986_20022 = G__20037;
count__19987_20023 = G__20038;
i__19988_20024 = G__20039;
continue;
} else {
var vec__19996_20040 = cljs.core.first.call(null,seq__19984_20034__$1);
var actual_type_20041 = cljs.core.nth.call(null,vec__19996_20040,(0),null);
var factory_20042 = cljs.core.nth.call(null,vec__19996_20040,(1),null);
var canonical_f_20043 = (cljs.core.truth_(selector_20013)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20012,selector_20013):cljs.core.identity).call(null,factory_20042.call(null,f_20020));
dommy.core.update_event_listeners_BANG_.call(null,elem_20012,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20013,actual_type_20041,f_20020], null),canonical_f_20043);

if(cljs.core.truth_(elem_20012.addEventListener)){
elem_20012.addEventListener(cljs.core.name.call(null,actual_type_20041),canonical_f_20043);
} else {
elem_20012.attachEvent(cljs.core.name.call(null,actual_type_20041),canonical_f_20043);
}

var G__20044 = cljs.core.next.call(null,seq__19984_20034__$1);
var G__20045 = null;
var G__20046 = (0);
var G__20047 = (0);
seq__19984_20021 = G__20044;
chunk__19986_20022 = G__20045;
count__19987_20023 = G__20046;
i__19988_20024 = G__20047;
continue;
}
} else {
}
}
break;
}

var G__20048 = seq__19974_20014;
var G__20049 = chunk__19981_20015;
var G__20050 = count__19982_20016;
var G__20051 = (i__19983_20017 + (1));
seq__19974_20014 = G__20048;
chunk__19981_20015 = G__20049;
count__19982_20016 = G__20050;
i__19983_20017 = G__20051;
continue;
} else {
var temp__5278__auto___20052 = cljs.core.seq.call(null,seq__19974_20014);
if(temp__5278__auto___20052){
var seq__19974_20053__$1 = temp__5278__auto___20052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19974_20053__$1)){
var c__8541__auto___20054 = cljs.core.chunk_first.call(null,seq__19974_20053__$1);
var G__20055 = cljs.core.chunk_rest.call(null,seq__19974_20053__$1);
var G__20056 = c__8541__auto___20054;
var G__20057 = cljs.core.count.call(null,c__8541__auto___20054);
var G__20058 = (0);
seq__19974_20014 = G__20055;
chunk__19981_20015 = G__20056;
count__19982_20016 = G__20057;
i__19983_20017 = G__20058;
continue;
} else {
var vec__19999_20059 = cljs.core.first.call(null,seq__19974_20053__$1);
var orig_type_20060 = cljs.core.nth.call(null,vec__19999_20059,(0),null);
var f_20061 = cljs.core.nth.call(null,vec__19999_20059,(1),null);
var seq__19975_20062 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20060,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_20060,cljs.core.identity])));
var chunk__19977_20063 = null;
var count__19978_20064 = (0);
var i__19979_20065 = (0);
while(true){
if((i__19979_20065 < count__19978_20064)){
var vec__20002_20066 = cljs.core._nth.call(null,chunk__19977_20063,i__19979_20065);
var actual_type_20067 = cljs.core.nth.call(null,vec__20002_20066,(0),null);
var factory_20068 = cljs.core.nth.call(null,vec__20002_20066,(1),null);
var canonical_f_20069 = (cljs.core.truth_(selector_20013)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20012,selector_20013):cljs.core.identity).call(null,factory_20068.call(null,f_20061));
dommy.core.update_event_listeners_BANG_.call(null,elem_20012,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20013,actual_type_20067,f_20061], null),canonical_f_20069);

if(cljs.core.truth_(elem_20012.addEventListener)){
elem_20012.addEventListener(cljs.core.name.call(null,actual_type_20067),canonical_f_20069);
} else {
elem_20012.attachEvent(cljs.core.name.call(null,actual_type_20067),canonical_f_20069);
}

var G__20070 = seq__19975_20062;
var G__20071 = chunk__19977_20063;
var G__20072 = count__19978_20064;
var G__20073 = (i__19979_20065 + (1));
seq__19975_20062 = G__20070;
chunk__19977_20063 = G__20071;
count__19978_20064 = G__20072;
i__19979_20065 = G__20073;
continue;
} else {
var temp__5278__auto___20074__$1 = cljs.core.seq.call(null,seq__19975_20062);
if(temp__5278__auto___20074__$1){
var seq__19975_20075__$1 = temp__5278__auto___20074__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19975_20075__$1)){
var c__8541__auto___20076 = cljs.core.chunk_first.call(null,seq__19975_20075__$1);
var G__20077 = cljs.core.chunk_rest.call(null,seq__19975_20075__$1);
var G__20078 = c__8541__auto___20076;
var G__20079 = cljs.core.count.call(null,c__8541__auto___20076);
var G__20080 = (0);
seq__19975_20062 = G__20077;
chunk__19977_20063 = G__20078;
count__19978_20064 = G__20079;
i__19979_20065 = G__20080;
continue;
} else {
var vec__20005_20081 = cljs.core.first.call(null,seq__19975_20075__$1);
var actual_type_20082 = cljs.core.nth.call(null,vec__20005_20081,(0),null);
var factory_20083 = cljs.core.nth.call(null,vec__20005_20081,(1),null);
var canonical_f_20084 = (cljs.core.truth_(selector_20013)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20012,selector_20013):cljs.core.identity).call(null,factory_20083.call(null,f_20061));
dommy.core.update_event_listeners_BANG_.call(null,elem_20012,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20013,actual_type_20082,f_20061], null),canonical_f_20084);

if(cljs.core.truth_(elem_20012.addEventListener)){
elem_20012.addEventListener(cljs.core.name.call(null,actual_type_20082),canonical_f_20084);
} else {
elem_20012.attachEvent(cljs.core.name.call(null,actual_type_20082),canonical_f_20084);
}

var G__20085 = cljs.core.next.call(null,seq__19975_20075__$1);
var G__20086 = null;
var G__20087 = (0);
var G__20088 = (0);
seq__19975_20062 = G__20085;
chunk__19977_20063 = G__20086;
count__19978_20064 = G__20087;
i__19979_20065 = G__20088;
continue;
}
} else {
}
}
break;
}

var G__20089 = cljs.core.next.call(null,seq__19974_20053__$1);
var G__20090 = null;
var G__20091 = (0);
var G__20092 = (0);
seq__19974_20014 = G__20089;
chunk__19981_20015 = G__20090;
count__19982_20016 = G__20091;
i__19983_20017 = G__20092;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq19969){
var G__19970 = cljs.core.first.call(null,seq19969);
var seq19969__$1 = cljs.core.next.call(null,seq19969);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19970,seq19969__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___20132 = arguments.length;
var i__8890__auto___20133 = (0);
while(true){
if((i__8890__auto___20133 < len__8889__auto___20132)){
args__8896__auto__.push((arguments[i__8890__auto___20133]));

var G__20134 = (i__8890__auto___20133 + (1));
i__8890__auto___20133 = G__20134;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__20095_20135 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20136 = cljs.core.nth.call(null,vec__20095_20135,(0),null);
var selector_20137 = cljs.core.nth.call(null,vec__20095_20135,(1),null);
var seq__20098_20138 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20105_20139 = null;
var count__20106_20140 = (0);
var i__20107_20141 = (0);
while(true){
if((i__20107_20141 < count__20106_20140)){
var vec__20114_20142 = cljs.core._nth.call(null,chunk__20105_20139,i__20107_20141);
var orig_type_20143 = cljs.core.nth.call(null,vec__20114_20142,(0),null);
var f_20144 = cljs.core.nth.call(null,vec__20114_20142,(1),null);
var seq__20108_20145 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20143,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_20143,cljs.core.identity])));
var chunk__20110_20146 = null;
var count__20111_20147 = (0);
var i__20112_20148 = (0);
while(true){
if((i__20112_20148 < count__20111_20147)){
var vec__20117_20149 = cljs.core._nth.call(null,chunk__20110_20146,i__20112_20148);
var actual_type_20150 = cljs.core.nth.call(null,vec__20117_20149,(0),null);
var __20151 = cljs.core.nth.call(null,vec__20117_20149,(1),null);
var keys_20152 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20137,actual_type_20150,f_20144], null);
var canonical_f_20153 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20136),keys_20152);
dommy.core.update_event_listeners_BANG_.call(null,elem_20136,dommy.utils.dissoc_in,keys_20152);

if(cljs.core.truth_(elem_20136.removeEventListener)){
elem_20136.removeEventListener(cljs.core.name.call(null,actual_type_20150),canonical_f_20153);
} else {
elem_20136.detachEvent(cljs.core.name.call(null,actual_type_20150),canonical_f_20153);
}

var G__20154 = seq__20108_20145;
var G__20155 = chunk__20110_20146;
var G__20156 = count__20111_20147;
var G__20157 = (i__20112_20148 + (1));
seq__20108_20145 = G__20154;
chunk__20110_20146 = G__20155;
count__20111_20147 = G__20156;
i__20112_20148 = G__20157;
continue;
} else {
var temp__5278__auto___20158 = cljs.core.seq.call(null,seq__20108_20145);
if(temp__5278__auto___20158){
var seq__20108_20159__$1 = temp__5278__auto___20158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20108_20159__$1)){
var c__8541__auto___20160 = cljs.core.chunk_first.call(null,seq__20108_20159__$1);
var G__20161 = cljs.core.chunk_rest.call(null,seq__20108_20159__$1);
var G__20162 = c__8541__auto___20160;
var G__20163 = cljs.core.count.call(null,c__8541__auto___20160);
var G__20164 = (0);
seq__20108_20145 = G__20161;
chunk__20110_20146 = G__20162;
count__20111_20147 = G__20163;
i__20112_20148 = G__20164;
continue;
} else {
var vec__20120_20165 = cljs.core.first.call(null,seq__20108_20159__$1);
var actual_type_20166 = cljs.core.nth.call(null,vec__20120_20165,(0),null);
var __20167 = cljs.core.nth.call(null,vec__20120_20165,(1),null);
var keys_20168 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20137,actual_type_20166,f_20144], null);
var canonical_f_20169 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20136),keys_20168);
dommy.core.update_event_listeners_BANG_.call(null,elem_20136,dommy.utils.dissoc_in,keys_20168);

if(cljs.core.truth_(elem_20136.removeEventListener)){
elem_20136.removeEventListener(cljs.core.name.call(null,actual_type_20166),canonical_f_20169);
} else {
elem_20136.detachEvent(cljs.core.name.call(null,actual_type_20166),canonical_f_20169);
}

var G__20170 = cljs.core.next.call(null,seq__20108_20159__$1);
var G__20171 = null;
var G__20172 = (0);
var G__20173 = (0);
seq__20108_20145 = G__20170;
chunk__20110_20146 = G__20171;
count__20111_20147 = G__20172;
i__20112_20148 = G__20173;
continue;
}
} else {
}
}
break;
}

var G__20174 = seq__20098_20138;
var G__20175 = chunk__20105_20139;
var G__20176 = count__20106_20140;
var G__20177 = (i__20107_20141 + (1));
seq__20098_20138 = G__20174;
chunk__20105_20139 = G__20175;
count__20106_20140 = G__20176;
i__20107_20141 = G__20177;
continue;
} else {
var temp__5278__auto___20178 = cljs.core.seq.call(null,seq__20098_20138);
if(temp__5278__auto___20178){
var seq__20098_20179__$1 = temp__5278__auto___20178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20098_20179__$1)){
var c__8541__auto___20180 = cljs.core.chunk_first.call(null,seq__20098_20179__$1);
var G__20181 = cljs.core.chunk_rest.call(null,seq__20098_20179__$1);
var G__20182 = c__8541__auto___20180;
var G__20183 = cljs.core.count.call(null,c__8541__auto___20180);
var G__20184 = (0);
seq__20098_20138 = G__20181;
chunk__20105_20139 = G__20182;
count__20106_20140 = G__20183;
i__20107_20141 = G__20184;
continue;
} else {
var vec__20123_20185 = cljs.core.first.call(null,seq__20098_20179__$1);
var orig_type_20186 = cljs.core.nth.call(null,vec__20123_20185,(0),null);
var f_20187 = cljs.core.nth.call(null,vec__20123_20185,(1),null);
var seq__20099_20188 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20186,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_20186,cljs.core.identity])));
var chunk__20101_20189 = null;
var count__20102_20190 = (0);
var i__20103_20191 = (0);
while(true){
if((i__20103_20191 < count__20102_20190)){
var vec__20126_20192 = cljs.core._nth.call(null,chunk__20101_20189,i__20103_20191);
var actual_type_20193 = cljs.core.nth.call(null,vec__20126_20192,(0),null);
var __20194 = cljs.core.nth.call(null,vec__20126_20192,(1),null);
var keys_20195 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20137,actual_type_20193,f_20187], null);
var canonical_f_20196 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20136),keys_20195);
dommy.core.update_event_listeners_BANG_.call(null,elem_20136,dommy.utils.dissoc_in,keys_20195);

if(cljs.core.truth_(elem_20136.removeEventListener)){
elem_20136.removeEventListener(cljs.core.name.call(null,actual_type_20193),canonical_f_20196);
} else {
elem_20136.detachEvent(cljs.core.name.call(null,actual_type_20193),canonical_f_20196);
}

var G__20197 = seq__20099_20188;
var G__20198 = chunk__20101_20189;
var G__20199 = count__20102_20190;
var G__20200 = (i__20103_20191 + (1));
seq__20099_20188 = G__20197;
chunk__20101_20189 = G__20198;
count__20102_20190 = G__20199;
i__20103_20191 = G__20200;
continue;
} else {
var temp__5278__auto___20201__$1 = cljs.core.seq.call(null,seq__20099_20188);
if(temp__5278__auto___20201__$1){
var seq__20099_20202__$1 = temp__5278__auto___20201__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20099_20202__$1)){
var c__8541__auto___20203 = cljs.core.chunk_first.call(null,seq__20099_20202__$1);
var G__20204 = cljs.core.chunk_rest.call(null,seq__20099_20202__$1);
var G__20205 = c__8541__auto___20203;
var G__20206 = cljs.core.count.call(null,c__8541__auto___20203);
var G__20207 = (0);
seq__20099_20188 = G__20204;
chunk__20101_20189 = G__20205;
count__20102_20190 = G__20206;
i__20103_20191 = G__20207;
continue;
} else {
var vec__20129_20208 = cljs.core.first.call(null,seq__20099_20202__$1);
var actual_type_20209 = cljs.core.nth.call(null,vec__20129_20208,(0),null);
var __20210 = cljs.core.nth.call(null,vec__20129_20208,(1),null);
var keys_20211 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20137,actual_type_20209,f_20187], null);
var canonical_f_20212 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20136),keys_20211);
dommy.core.update_event_listeners_BANG_.call(null,elem_20136,dommy.utils.dissoc_in,keys_20211);

if(cljs.core.truth_(elem_20136.removeEventListener)){
elem_20136.removeEventListener(cljs.core.name.call(null,actual_type_20209),canonical_f_20212);
} else {
elem_20136.detachEvent(cljs.core.name.call(null,actual_type_20209),canonical_f_20212);
}

var G__20213 = cljs.core.next.call(null,seq__20099_20202__$1);
var G__20214 = null;
var G__20215 = (0);
var G__20216 = (0);
seq__20099_20188 = G__20213;
chunk__20101_20189 = G__20214;
count__20102_20190 = G__20215;
i__20103_20191 = G__20216;
continue;
}
} else {
}
}
break;
}

var G__20217 = cljs.core.next.call(null,seq__20098_20179__$1);
var G__20218 = null;
var G__20219 = (0);
var G__20220 = (0);
seq__20098_20138 = G__20217;
chunk__20105_20139 = G__20218;
count__20106_20140 = G__20219;
i__20107_20141 = G__20220;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq20093){
var G__20094 = cljs.core.first.call(null,seq20093);
var seq20093__$1 = cljs.core.next.call(null,seq20093);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20094,seq20093__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___20236 = arguments.length;
var i__8890__auto___20237 = (0);
while(true){
if((i__8890__auto___20237 < len__8889__auto___20236)){
args__8896__auto__.push((arguments[i__8890__auto___20237]));

var G__20238 = (i__8890__auto___20237 + (1));
i__8890__auto___20237 = G__20238;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__20223_20239 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20240 = cljs.core.nth.call(null,vec__20223_20239,(0),null);
var selector_20241 = cljs.core.nth.call(null,vec__20223_20239,(1),null);
var seq__20226_20242 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20227_20243 = null;
var count__20228_20244 = (0);
var i__20229_20245 = (0);
while(true){
if((i__20229_20245 < count__20228_20244)){
var vec__20230_20246 = cljs.core._nth.call(null,chunk__20227_20243,i__20229_20245);
var type_20247 = cljs.core.nth.call(null,vec__20230_20246,(0),null);
var f_20248 = cljs.core.nth.call(null,vec__20230_20246,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20247,((function (seq__20226_20242,chunk__20227_20243,count__20228_20244,i__20229_20245,vec__20230_20246,type_20247,f_20248,vec__20223_20239,elem_20240,selector_20241){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20247,dommy$core$this_fn);

return f_20248.call(null,e);
});})(seq__20226_20242,chunk__20227_20243,count__20228_20244,i__20229_20245,vec__20230_20246,type_20247,f_20248,vec__20223_20239,elem_20240,selector_20241))
);

var G__20249 = seq__20226_20242;
var G__20250 = chunk__20227_20243;
var G__20251 = count__20228_20244;
var G__20252 = (i__20229_20245 + (1));
seq__20226_20242 = G__20249;
chunk__20227_20243 = G__20250;
count__20228_20244 = G__20251;
i__20229_20245 = G__20252;
continue;
} else {
var temp__5278__auto___20253 = cljs.core.seq.call(null,seq__20226_20242);
if(temp__5278__auto___20253){
var seq__20226_20254__$1 = temp__5278__auto___20253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20226_20254__$1)){
var c__8541__auto___20255 = cljs.core.chunk_first.call(null,seq__20226_20254__$1);
var G__20256 = cljs.core.chunk_rest.call(null,seq__20226_20254__$1);
var G__20257 = c__8541__auto___20255;
var G__20258 = cljs.core.count.call(null,c__8541__auto___20255);
var G__20259 = (0);
seq__20226_20242 = G__20256;
chunk__20227_20243 = G__20257;
count__20228_20244 = G__20258;
i__20229_20245 = G__20259;
continue;
} else {
var vec__20233_20260 = cljs.core.first.call(null,seq__20226_20254__$1);
var type_20261 = cljs.core.nth.call(null,vec__20233_20260,(0),null);
var f_20262 = cljs.core.nth.call(null,vec__20233_20260,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20261,((function (seq__20226_20242,chunk__20227_20243,count__20228_20244,i__20229_20245,vec__20233_20260,type_20261,f_20262,seq__20226_20254__$1,temp__5278__auto___20253,vec__20223_20239,elem_20240,selector_20241){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20261,dommy$core$this_fn);

return f_20262.call(null,e);
});})(seq__20226_20242,chunk__20227_20243,count__20228_20244,i__20229_20245,vec__20233_20260,type_20261,f_20262,seq__20226_20254__$1,temp__5278__auto___20253,vec__20223_20239,elem_20240,selector_20241))
);

var G__20263 = cljs.core.next.call(null,seq__20226_20254__$1);
var G__20264 = null;
var G__20265 = (0);
var G__20266 = (0);
seq__20226_20242 = G__20263;
chunk__20227_20243 = G__20264;
count__20228_20244 = G__20265;
i__20229_20245 = G__20266;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq20221){
var G__20222 = cljs.core.first.call(null,seq20221);
var seq20221__$1 = cljs.core.next.call(null,seq20221);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20222,seq20221__$1);
});


//# sourceMappingURL=core.js.map?rel=1513171808874
