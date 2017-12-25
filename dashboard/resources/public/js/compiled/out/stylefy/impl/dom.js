// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('garden.stylesheet');
stylefy.impl.dom.styles_in_use = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = new cljs.core.Keyword(null,"#_stylefy-styles_","#_stylefy-styles_",-1230236272);
stylefy.impl.dom.stylefy_constant_node_id = new cljs.core.Keyword(null,"#_stylefy-constant-styles_","#_stylefy-constant-styles_",1798573471);
stylefy.impl.dom.dom_needs_update_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
return cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),style_hash);
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node,node_constant){
var styles_in_css = cljs.core.map.call(null,(function (style_hash){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)));
var keyframes_in_css = cljs.core.map.call(null,((function (styles_in_css){
return (function (keyframes){
return garden.core.css.call(null,keyframes);
});})(styles_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css){
return (function (properties){
return garden.core.css.call(null,properties);
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_classes_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (class_definition){
return garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(class_definition))].join('')),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(class_definition)], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_.call(null,node_constant,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_classes_in_use)));

return dommy.core.set_text_BANG_.call(null,node,cljs.core.apply.call(null,cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__21083_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__21083_SHARP_,cljs.core.assoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__21083_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144),true)]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.request_dom_update = (function stylefy$impl$dom$request_dom_update(){
return window.requestAnimationFrame(stylefy.impl.dom.continuously_update_styles_in_dom_BANG_);
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
var node = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_node_id));
var node_constant = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_constant_node_id));
if(cljs.core.truth_((function (){var and__7598__auto__ = node;
if(cljs.core.truth_(and__7598__auto__)){
return node_constant;
} else {
return and__7598__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_.call(null,node,node_constant);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,false);

return stylefy.impl.dom.mark_styles_added_in_dom_BANG_.call(null);
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
} else {
return null;
}
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.continuously_update_styles_in_dom_BANG_ = (function stylefy$impl$dom$continuously_update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
} else {
}

return stylefy.impl.dom.request_dom_update.call(null);
});
stylefy.impl.dom.init_dom_update = (function stylefy$impl$dom$init_dom_update(){
return stylefy.impl.dom.continuously_update_styles_in_dom_BANG_.call(null);
});
stylefy.impl.dom.filter_style_props = (function stylefy$impl$dom$filter_style_props(props){
return cljs.core.apply.call(null,cljs.core.dissoc,props,cljs.core.filter.call(null,cljs.core.namespace,cljs.core.keys.call(null,props)));
});
stylefy.impl.dom.convert_stylefy_vendors_to_garden = (function stylefy$impl$dom$convert_stylefy_vendors_to_garden(props){
var temp__5278__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5278__auto__)){
var vendors = temp__5278__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.dom.convert_stylefy_modes_garden = (function stylefy$impl$dom$convert_stylefy_modes_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.call(null,((function (modes){
return (function (p1__21084_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21084_SHARP_)].join('')),p1__21084_SHARP_.call(null,modes)], null);
});})(modes))
,cljs.core.keys.call(null,modes));
});
stylefy.impl.dom.convert_base_style = (function stylefy$impl$dom$convert_base_style(p__21085,options){
var map__21086 = p__21085;
var map__21086__$1 = ((((!((map__21086 == null)))?((((map__21086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21086):map__21086);
var style = map__21086__$1;
var props = cljs.core.get.call(null,map__21086__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__21086__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_props = stylefy.impl.dom.filter_style_props.call(null,props);
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,props);
var garden_options = (function (){var or__7610__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes));
return css_class;
});
stylefy.impl.dom.convert_media_queries = (function stylefy$impl$dom$convert_media_queries(p__21088,options){
var map__21089 = p__21088;
var map__21089__$1 = ((((!((map__21089 == null)))?((((map__21089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21089):map__21089);
var style = map__21089__$1;
var props = cljs.core.get.call(null,map__21089__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__21089__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_media_queries = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
var css_media_queries = cljs.core.map.call(null,((function (class_selector,stylefy_media_queries,map__21089,map__21089__$1,style,props,hash){
return (function (media_query){
var media_query_props = cljs.core.get.call(null,stylefy_media_queries,media_query);
var style_props = stylefy.impl.dom.filter_style_props.call(null,media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,media_query_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,media_query_props);
var garden_options = (function (){var or__7610__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.call(null,garden_options,garden.stylesheet.at_media.call(null,media_query,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes)));
});})(class_selector,stylefy_media_queries,map__21089,map__21089__$1,style,props,hash))
,cljs.core.keys.call(null,stylefy_media_queries));
return cljs.core.apply.call(null,cljs.core.str,css_media_queries);
});
stylefy.impl.dom.convert_supports_rules = (function stylefy$impl$dom$convert_supports_rules(p__21091,options){
var map__21092 = p__21091;
var map__21092__$1 = ((((!((map__21092 == null)))?((((map__21092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21092):map__21092);
var style = map__21092__$1;
var props = cljs.core.get.call(null,map__21092__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__21092__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_supports = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
var css_supports = cljs.core.map.call(null,((function (class_selector,stylefy_supports,map__21092,map__21092__$1,style,props,hash){
return (function (supports_selector){
var supports_props = cljs.core.get.call(null,stylefy_supports,supports_selector);
var style_props = stylefy.impl.dom.filter_style_props.call(null,supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,style_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,supports_props);
var garden_options = (function (){var or__7610__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.dom.convert_media_queries.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.call(null,garden_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(class_selector,stylefy_supports,map__21092,map__21092__$1,style,props,hash))
,cljs.core.keys.call(null,stylefy_supports));
return cljs.core.apply.call(null,cljs.core.str,css_supports);
});
/**
 * Options are sent directly to Garden
 */
stylefy.impl.dom.style__GT_css = (function stylefy$impl$dom$style__GT_css(var_args){
var G__21095 = arguments.length;
switch (G__21095) {
case 1:
return stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.dom.style__GT_css.call(null,style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__21096,options){
var map__21097 = p__21096;
var map__21097__$1 = ((((!((map__21097 == null)))?((((map__21097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21097):map__21097);
var style = map__21097__$1;
var props = cljs.core.get.call(null,map__21097__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__21097__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.dom.convert_base_style.call(null,style,options);
var css_media_queries = stylefy.impl.dom.convert_media_queries.call(null,style,options);
var css_supports = stylefy.impl.dom.convert_supports_rules.call(null,style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.dom.style__GT_css.cljs$lang$maxFixedArity = 2;

/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__21100){
var map__21101 = p__21100;
var map__21101__$1 = ((((!((map__21101 == null)))?((((map__21101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21101):map__21101);
var style = map__21101__$1;
var props = cljs.core.get.call(null,map__21101__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__21101__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.dom.style__GT_css.call(null,style);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,cljs.core.assoc.call(null,props,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css));

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21105 = arguments.length;
var i__8890__auto___21106 = (0);
while(true){
if((i__8890__auto___21106 < len__8889__auto___21105)){
args__8896__auto__.push((arguments[i__8890__auto___21106]));

var G__21107 = (i__8890__auto___21106 + (1));
i__8890__auto___21106 = G__21107;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.call(null,garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq21103){
var G__21104 = cljs.core.first.call(null,seq21103);
var seq21103__$1 = cljs.core.next.call(null,seq21103);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__21104,seq21103__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_class_definition;
});

//# sourceMappingURL=dom.js.map?rel=1513171809600
