// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x26224_26225 = value;
x26224_26225.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x26227_26228 = value;
x26227_26228.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x26230_26231 = value;
x26230_26231.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__7598__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7598__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26238 = arguments.length;
var i__8890__auto___26239 = (0);
while(true){
if((i__8890__auto___26239 < len__8889__auto___26238)){
args__8896__auto__.push((arguments[i__8890__auto___26239]));

var G__26240 = (i__8890__auto___26239 + (1));
i__8890__auto___26239 = G__26240;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__26234_26241 = cljs.core.seq.call(null,items);
var chunk__26235_26242 = null;
var count__26236_26243 = (0);
var i__26237_26244 = (0);
while(true){
if((i__26237_26244 < count__26236_26243)){
var item_26245 = cljs.core._nth.call(null,chunk__26235_26242,i__26237_26244);
if(!((item_26245 == null))){
if(cljs.core.coll_QMARK_.call(null,item_26245)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_26245)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_26245));
}
} else {
}

var G__26246 = seq__26234_26241;
var G__26247 = chunk__26235_26242;
var G__26248 = count__26236_26243;
var G__26249 = (i__26237_26244 + (1));
seq__26234_26241 = G__26246;
chunk__26235_26242 = G__26247;
count__26236_26243 = G__26248;
i__26237_26244 = G__26249;
continue;
} else {
var temp__5278__auto___26250 = cljs.core.seq.call(null,seq__26234_26241);
if(temp__5278__auto___26250){
var seq__26234_26251__$1 = temp__5278__auto___26250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26234_26251__$1)){
var c__8541__auto___26252 = cljs.core.chunk_first.call(null,seq__26234_26251__$1);
var G__26253 = cljs.core.chunk_rest.call(null,seq__26234_26251__$1);
var G__26254 = c__8541__auto___26252;
var G__26255 = cljs.core.count.call(null,c__8541__auto___26252);
var G__26256 = (0);
seq__26234_26241 = G__26253;
chunk__26235_26242 = G__26254;
count__26236_26243 = G__26255;
i__26237_26244 = G__26256;
continue;
} else {
var item_26257 = cljs.core.first.call(null,seq__26234_26251__$1);
if(!((item_26257 == null))){
if(cljs.core.coll_QMARK_.call(null,item_26257)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_26257)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_26257));
}
} else {
}

var G__26258 = cljs.core.next.call(null,seq__26234_26251__$1);
var G__26259 = null;
var G__26260 = (0);
var G__26261 = (0);
seq__26234_26241 = G__26258;
chunk__26235_26242 = G__26259;
count__26236_26243 = G__26260;
i__26237_26244 = G__26261;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq26233){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26233));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26269 = arguments.length;
var i__8890__auto___26270 = (0);
while(true){
if((i__8890__auto___26270 < len__8889__auto___26269)){
args__8896__auto__.push((arguments[i__8890__auto___26270]));

var G__26271 = (i__8890__auto___26270 + (1));
i__8890__auto___26270 = G__26271;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((2) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8897__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__26265_26272 = cljs.core.seq.call(null,children);
var chunk__26266_26273 = null;
var count__26267_26274 = (0);
var i__26268_26275 = (0);
while(true){
if((i__26268_26275 < count__26267_26274)){
var child_26276 = cljs.core._nth.call(null,chunk__26266_26273,i__26268_26275);
if(!((child_26276 == null))){
if(cljs.core.coll_QMARK_.call(null,child_26276)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_26276))));
} else {
var temp__5276__auto___26277 = devtools.formatters.helpers.pref.call(null,child_26276);
if(cljs.core.truth_(temp__5276__auto___26277)){
var child_value_26278 = temp__5276__auto___26277;
template.push(child_value_26278);
} else {
}
}
} else {
}

var G__26279 = seq__26265_26272;
var G__26280 = chunk__26266_26273;
var G__26281 = count__26267_26274;
var G__26282 = (i__26268_26275 + (1));
seq__26265_26272 = G__26279;
chunk__26266_26273 = G__26280;
count__26267_26274 = G__26281;
i__26268_26275 = G__26282;
continue;
} else {
var temp__5278__auto___26283 = cljs.core.seq.call(null,seq__26265_26272);
if(temp__5278__auto___26283){
var seq__26265_26284__$1 = temp__5278__auto___26283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26265_26284__$1)){
var c__8541__auto___26285 = cljs.core.chunk_first.call(null,seq__26265_26284__$1);
var G__26286 = cljs.core.chunk_rest.call(null,seq__26265_26284__$1);
var G__26287 = c__8541__auto___26285;
var G__26288 = cljs.core.count.call(null,c__8541__auto___26285);
var G__26289 = (0);
seq__26265_26272 = G__26286;
chunk__26266_26273 = G__26287;
count__26267_26274 = G__26288;
i__26268_26275 = G__26289;
continue;
} else {
var child_26290 = cljs.core.first.call(null,seq__26265_26284__$1);
if(!((child_26290 == null))){
if(cljs.core.coll_QMARK_.call(null,child_26290)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_26290))));
} else {
var temp__5276__auto___26291 = devtools.formatters.helpers.pref.call(null,child_26290);
if(cljs.core.truth_(temp__5276__auto___26291)){
var child_value_26292 = temp__5276__auto___26291;
template.push(child_value_26292);
} else {
}
}
} else {
}

var G__26293 = cljs.core.next.call(null,seq__26265_26284__$1);
var G__26294 = null;
var G__26295 = (0);
var G__26296 = (0);
seq__26265_26272 = G__26293;
chunk__26266_26273 = G__26294;
count__26267_26274 = G__26295;
i__26268_26275 = G__26296;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq26262){
var G__26263 = cljs.core.first.call(null,seq26262);
var seq26262__$1 = cljs.core.next.call(null,seq26262);
var G__26264 = cljs.core.first.call(null,seq26262__$1);
var seq26262__$2 = cljs.core.next.call(null,seq26262__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__26263,G__26264,seq26262__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26299 = arguments.length;
var i__8890__auto___26300 = (0);
while(true){
if((i__8890__auto___26300 < len__8889__auto___26299)){
args__8896__auto__.push((arguments[i__8890__auto___26300]));

var G__26301 = (i__8890__auto___26300 + (1));
i__8890__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq26297){
var G__26298 = cljs.core.first.call(null,seq26297);
var seq26297__$1 = cljs.core.next.call(null,seq26297);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26298,seq26297__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26304 = arguments.length;
var i__8890__auto___26305 = (0);
while(true){
if((i__8890__auto___26305 < len__8889__auto___26304)){
args__8896__auto__.push((arguments[i__8890__auto___26305]));

var G__26306 = (i__8890__auto___26305 + (1));
i__8890__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq26302){
var G__26303 = cljs.core.first.call(null,seq26302);
var seq26302__$1 = cljs.core.next.call(null,seq26302);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26303,seq26302__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__26308 = arguments.length;
switch (G__26308) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj26310 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7610__auto__ = start_index;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return (0);
}
})()};
return obj26310;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26318 = arguments.length;
var i__8890__auto___26319 = (0);
while(true){
if((i__8890__auto___26319 < len__8889__auto___26318)){
args__8896__auto__.push((arguments[i__8890__auto___26319]));

var G__26320 = (i__8890__auto___26319 + (1));
i__8890__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__26314){
var vec__26315 = p__26314;
var state_override_fn = cljs.core.nth.call(null,vec__26315,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq26312){
var G__26313 = cljs.core.first.call(null,seq26312);
var seq26312__$1 = cljs.core.next.call(null,seq26312);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__26313,seq26312__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_26321 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_26321;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__26322 = name;
switch (G__26322) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__26324 = tag;
var html_tag = cljs.core.nth.call(null,vec__26324,(0),null);
var style = cljs.core.nth.call(null,vec__26324,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_26327 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_26327;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_26328 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_26329 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_26329;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_26328;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__26330 = initial_value;
var G__26331 = value.call(null);
initial_value = G__26330;
value = G__26331;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__26332 = initial_value;
var G__26333 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__26332;
value = G__26333;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__26334 = initial_value;
var G__26335 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__26334;
value = G__26335;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1513171815178
