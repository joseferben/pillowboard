// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___26519 = arguments.length;
var i__8890__auto___26520 = (0);
while(true){
if((i__8890__auto___26520 < len__8889__auto___26519)){
args__8896__auto__.push((arguments[i__8890__auto___26520]));

var G__26521 = (i__8890__auto___26520 + (1));
i__8890__auto___26520 = G__26521;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__26514){
var vec__26515 = p__26514;
var context = cljs.core.nth.call(null,vec__26515,(0),null);
var footer = cljs.core.nth.call(null,vec__26515,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__7610__auto__ = e.message;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e26518){var e__$1 = e26518;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq26512){
var G__26513 = cljs.core.first.call(null,seq26512);
var seq26512__$1 = cljs.core.next.call(null,seq26512);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26513,seq26512__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1513171815355
