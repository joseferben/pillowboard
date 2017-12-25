// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
return ["_stylefy_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,cljs.core.dissoc.call(null,style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432))))].join('');
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__22994){
var map__22995 = p__22994;
var map__22995__$1 = ((((!((map__22995 == null)))?((((map__22995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22995):map__22995);
var style = map__22995__$1;
var props = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__22997 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__22998 = null;
var count__22999 = (0);
var i__23000 = (0);
while(true){
if((i__23000 < count__22999)){
var sub_style = cljs.core._nth.call(null,chunk__22998,i__23000);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));

var G__23001 = seq__22997;
var G__23002 = chunk__22998;
var G__23003 = count__22999;
var G__23004 = (i__23000 + (1));
seq__22997 = G__23001;
chunk__22998 = G__23002;
count__22999 = G__23003;
i__23000 = G__23004;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__22997);
if(temp__5278__auto__){
var seq__22997__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22997__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__22997__$1);
var G__23005 = cljs.core.chunk_rest.call(null,seq__22997__$1);
var G__23006 = c__8541__auto__;
var G__23007 = cljs.core.count.call(null,c__8541__auto__);
var G__23008 = (0);
seq__22997 = G__23005;
chunk__22998 = G__23006;
count__22999 = G__23007;
i__23000 = G__23008;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__22997__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));

var G__23009 = cljs.core.next.call(null,seq__22997__$1);
var G__23010 = null;
var G__23011 = (0);
var G__23012 = (0);
seq__22997 = G__23009;
chunk__22998 = G__23010;
count__22999 = G__23011;
i__23000 = G__23012;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var contains_media_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null));
var contains_feature_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var contains_modes_not_excluded_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,excluded_modes),cljs.core.keys.call(null,new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style)))));
var return_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",cljs.core.conj.call(null,with_classes,style_hash))], null);
if(cljs.core.truth_(stylefy.impl.dom.style_in_dom_QMARK_.call(null,style_hash))){
return return_map;
} else {
if((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_modes_not_excluded_QMARK_)){
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null));
} else {
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use);

if(cljs.core.empty_QMARK_.call(null,style)){
return null;
} else {
var with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
if(((with_classes == null)) || ((cljs.core.vector_QMARK_.call(null,with_classes)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes))].join('')),"\n","(or (nil? with-classes) (and (vector? with-classes) (every? string? with-classes)))"].join('')));
}

var style_hash = stylefy.impl.styles.hash_style.call(null,style);
var already_created = stylefy.impl.dom.style_by_hash.call(null,style_hash);
if(cljs.core.truth_(already_created)){
} else {
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
}

return stylefy.impl.styles.style_return_value.call(null,style,style_hash,options);
}
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_.call(null,resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_style))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__8896__auto__ = [];
var len__8889__auto___23017 = arguments.length;
var i__8890__auto___23018 = (0);
while(true){
if((i__8890__auto___23018 < len__8889__auto___23017)){
args__8896__auto__.push((arguments[i__8890__auto___23018]));

var G__23019 = (i__8890__auto___23018 + (1));
i__8890__auto___23018 = G__23019;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__23013_SHARP_,p2__23014_SHARP_){
return cljs.core.get_in.call(null,p1__23013_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__23014_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq23015){
var G__23016 = cljs.core.first.call(null,seq23015);
var seq23015__$1 = cljs.core.next.call(null,seq23015);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic(G__23016,seq23015__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_23024__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__23020_23025 = cljs.core.seq.call(null,styles_23024__$1);
var chunk__23021_23026 = null;
var count__23022_23027 = (0);
var i__23023_23028 = (0);
while(true){
if((i__23023_23028 < count__23022_23027)){
var style_23029 = cljs.core._nth.call(null,chunk__23021_23026,i__23023_23028);
stylefy.impl.styles.use_style_BANG_.call(null,style_23029,cljs.core.PersistentArrayMap.EMPTY);

var temp__5278__auto___23030 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_23029));
if(cljs.core.truth_(temp__5278__auto___23030)){
var sub_styles_23031 = temp__5278__auto___23030;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_23031);
} else {
}

var G__23032 = seq__23020_23025;
var G__23033 = chunk__23021_23026;
var G__23034 = count__23022_23027;
var G__23035 = (i__23023_23028 + (1));
seq__23020_23025 = G__23032;
chunk__23021_23026 = G__23033;
count__23022_23027 = G__23034;
i__23023_23028 = G__23035;
continue;
} else {
var temp__5278__auto___23036 = cljs.core.seq.call(null,seq__23020_23025);
if(temp__5278__auto___23036){
var seq__23020_23037__$1 = temp__5278__auto___23036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23020_23037__$1)){
var c__8541__auto___23038 = cljs.core.chunk_first.call(null,seq__23020_23037__$1);
var G__23039 = cljs.core.chunk_rest.call(null,seq__23020_23037__$1);
var G__23040 = c__8541__auto___23038;
var G__23041 = cljs.core.count.call(null,c__8541__auto___23038);
var G__23042 = (0);
seq__23020_23025 = G__23039;
chunk__23021_23026 = G__23040;
count__23022_23027 = G__23041;
i__23023_23028 = G__23042;
continue;
} else {
var style_23043 = cljs.core.first.call(null,seq__23020_23037__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_23043,cljs.core.PersistentArrayMap.EMPTY);

var temp__5278__auto___23044__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_23043));
if(cljs.core.truth_(temp__5278__auto___23044__$1)){
var sub_styles_23045 = temp__5278__auto___23044__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_23045);
} else {
}

var G__23046 = cljs.core.next.call(null,seq__23020_23037__$1);
var G__23047 = null;
var G__23048 = (0);
var G__23049 = (0);
seq__23020_23025 = G__23046;
chunk__23021_23026 = G__23047;
count__23022_23027 = G__23048;
i__23023_23028 = G__23049;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
});

//# sourceMappingURL=styles.js.map?rel=1513171811748
