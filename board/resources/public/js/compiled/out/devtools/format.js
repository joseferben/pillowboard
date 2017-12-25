// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8343__auto__ = (((value == null))?null:value);
var m__8344__auto__ = (devtools.format._header[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,value);
} else {
var m__8344__auto____$1 = (devtools.format._header["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8343__auto__ = (((value == null))?null:value);
var m__8344__auto__ = (devtools.format._has_body[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,value);
} else {
var m__8344__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8343__auto__ = (((value == null))?null:value);
var m__8344__auto__ = (devtools.format._body[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,value);
} else {
var m__8344__auto____$1 = (devtools.format._body["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24534 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24534["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24535 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24535["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24536 = temp__5276__auto____$2;
return (o24536["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24537 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24537["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24538 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24538["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24539 = temp__5276__auto____$2;
return (o24539["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24540 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24540["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24541 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24541["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24542 = temp__5276__auto____$2;
return (o24542["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24543 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24543["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24544 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24544["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24545 = temp__5276__auto____$2;
return (o24545["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24546 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24546["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24547 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24547["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24548 = temp__5276__auto____$2;
return (o24548["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24549 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24549["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24550 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24550["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24551 = temp__5276__auto____$2;
return (o24551["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o24552 = temp__5276__auto__;
var temp__5276__auto____$1 = (o24552["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o24553 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o24553["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o24554 = temp__5276__auto____$2;
return (o24554["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24556 = arguments.length;
var i__8890__auto___24557 = (0);
while(true){
if((i__8890__auto___24557 < len__8889__auto___24556)){
args__8896__auto__.push((arguments[i__8890__auto___24557]));

var G__24558 = (i__8890__auto___24557 + (1));
i__8890__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq24555){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24555));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24560 = arguments.length;
var i__8890__auto___24561 = (0);
while(true){
if((i__8890__auto___24561 < len__8889__auto___24560)){
args__8896__auto__.push((arguments[i__8890__auto___24561]));

var G__24562 = (i__8890__auto___24561 + (1));
i__8890__auto___24561 = G__24562;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq24559){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24559));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24564 = arguments.length;
var i__8890__auto___24565 = (0);
while(true){
if((i__8890__auto___24565 < len__8889__auto___24564)){
args__8896__auto__.push((arguments[i__8890__auto___24565]));

var G__24566 = (i__8890__auto___24565 + (1));
i__8890__auto___24565 = G__24566;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq24563){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24563));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24568 = arguments.length;
var i__8890__auto___24569 = (0);
while(true){
if((i__8890__auto___24569 < len__8889__auto___24568)){
args__8896__auto__.push((arguments[i__8890__auto___24569]));

var G__24570 = (i__8890__auto___24569 + (1));
i__8890__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24567){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24567));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24572 = arguments.length;
var i__8890__auto___24573 = (0);
while(true){
if((i__8890__auto___24573 < len__8889__auto___24572)){
args__8896__auto__.push((arguments[i__8890__auto___24573]));

var G__24574 = (i__8890__auto___24573 + (1));
i__8890__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq24571){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24571));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24576 = arguments.length;
var i__8890__auto___24577 = (0);
while(true){
if((i__8890__auto___24577 < len__8889__auto___24576)){
args__8896__auto__.push((arguments[i__8890__auto___24577]));

var G__24578 = (i__8890__auto___24577 + (1));
i__8890__auto___24577 = G__24578;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq24575){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24575));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24580 = arguments.length;
var i__8890__auto___24581 = (0);
while(true){
if((i__8890__auto___24581 < len__8889__auto___24580)){
args__8896__auto__.push((arguments[i__8890__auto___24581]));

var G__24582 = (i__8890__auto___24581 + (1));
i__8890__auto___24581 = G__24582;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq24579){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24579));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24590 = arguments.length;
var i__8890__auto___24591 = (0);
while(true){
if((i__8890__auto___24591 < len__8889__auto___24590)){
args__8896__auto__.push((arguments[i__8890__auto___24591]));

var G__24592 = (i__8890__auto___24591 + (1));
i__8890__auto___24591 = G__24592;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24586){
var vec__24587 = p__24586;
var state_override = cljs.core.nth.call(null,vec__24587,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__24587,state_override){
return (function (p1__24583_SHARP_){
return cljs.core.merge.call(null,p1__24583_SHARP_,state_override);
});})(vec__24587,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq24584){
var G__24585 = cljs.core.first.call(null,seq24584);
var seq24584__$1 = cljs.core.next.call(null,seq24584);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__24585,seq24584__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24594 = arguments.length;
var i__8890__auto___24595 = (0);
while(true){
if((i__8890__auto___24595 < len__8889__auto___24594)){
args__8896__auto__.push((arguments[i__8890__auto___24595]));

var G__24596 = (i__8890__auto___24595 + (1));
i__8890__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((0) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8897__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq24593){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24593));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24599 = arguments.length;
var i__8890__auto___24600 = (0);
while(true){
if((i__8890__auto___24600 < len__8889__auto___24599)){
args__8896__auto__.push((arguments[i__8890__auto___24600]));

var G__24601 = (i__8890__auto___24600 + (1));
i__8890__auto___24600 = G__24601;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24597){
var G__24598 = cljs.core.first.call(null,seq24597);
var seq24597__$1 = cljs.core.next.call(null,seq24597);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__24598,seq24597__$1);
});


//# sourceMappingURL=format.js.map?rel=1513171813500
