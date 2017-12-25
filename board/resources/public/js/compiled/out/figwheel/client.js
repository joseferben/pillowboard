// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e59921){if((e59921 instanceof Error)){
var e = e59921;
return "Error: Unable to stringify";
} else {
throw e59921;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__59924 = arguments.length;
switch (G__59924) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__59922_SHARP_){
if(typeof p1__59922_SHARP_ === 'string'){
return p1__59922_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__59922_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59927 = arguments.length;
var i__35174__auto___59928 = (0);
while(true){
if((i__35174__auto___59928 < len__35173__auto___59927)){
args__35180__auto__.push((arguments[i__35174__auto___59928]));

var G__59929 = (i__35174__auto___59928 + (1));
i__35174__auto___59928 = G__59929;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq59926){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59926));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59931 = arguments.length;
var i__35174__auto___59932 = (0);
while(true){
if((i__35174__auto___59932 < len__35173__auto___59931)){
args__35180__auto__.push((arguments[i__35174__auto___59932]));

var G__59933 = (i__35174__auto___59932 + (1));
i__35174__auto___59932 = G__59933;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq59930){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59930));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__59934){
var map__59935 = p__59934;
var map__59935__$1 = ((((!((map__59935 == null)))?((((map__59935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59935):map__59935);
var message = cljs.core.get.call(null,map__59935__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__59935__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__33894__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__33882__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__33882__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__33882__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37619__auto___60014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto___60014,ch){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto___60014,ch){
return (function (state_59986){
var state_val_59987 = (state_59986[(1)]);
if((state_val_59987 === (7))){
var inst_59982 = (state_59986[(2)]);
var state_59986__$1 = state_59986;
var statearr_59988_60015 = state_59986__$1;
(statearr_59988_60015[(2)] = inst_59982);

(statearr_59988_60015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (1))){
var state_59986__$1 = state_59986;
var statearr_59989_60016 = state_59986__$1;
(statearr_59989_60016[(2)] = null);

(statearr_59989_60016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (4))){
var inst_59939 = (state_59986[(7)]);
var inst_59939__$1 = (state_59986[(2)]);
var state_59986__$1 = (function (){var statearr_59990 = state_59986;
(statearr_59990[(7)] = inst_59939__$1);

return statearr_59990;
})();
if(cljs.core.truth_(inst_59939__$1)){
var statearr_59991_60017 = state_59986__$1;
(statearr_59991_60017[(1)] = (5));

} else {
var statearr_59992_60018 = state_59986__$1;
(statearr_59992_60018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (15))){
var inst_59946 = (state_59986[(8)]);
var inst_59961 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59946);
var inst_59962 = cljs.core.first.call(null,inst_59961);
var inst_59963 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59962);
var inst_59964 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59963)].join('');
var inst_59965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59964);
var state_59986__$1 = state_59986;
var statearr_59993_60019 = state_59986__$1;
(statearr_59993_60019[(2)] = inst_59965);

(statearr_59993_60019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (13))){
var inst_59970 = (state_59986[(2)]);
var state_59986__$1 = state_59986;
var statearr_59994_60020 = state_59986__$1;
(statearr_59994_60020[(2)] = inst_59970);

(statearr_59994_60020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (6))){
var state_59986__$1 = state_59986;
var statearr_59995_60021 = state_59986__$1;
(statearr_59995_60021[(2)] = null);

(statearr_59995_60021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (17))){
var inst_59968 = (state_59986[(2)]);
var state_59986__$1 = state_59986;
var statearr_59996_60022 = state_59986__$1;
(statearr_59996_60022[(2)] = inst_59968);

(statearr_59996_60022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (3))){
var inst_59984 = (state_59986[(2)]);
var state_59986__$1 = state_59986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59986__$1,inst_59984);
} else {
if((state_val_59987 === (12))){
var inst_59945 = (state_59986[(9)]);
var inst_59959 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59945,opts);
var state_59986__$1 = state_59986;
if(cljs.core.truth_(inst_59959)){
var statearr_59997_60023 = state_59986__$1;
(statearr_59997_60023[(1)] = (15));

} else {
var statearr_59998_60024 = state_59986__$1;
(statearr_59998_60024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (2))){
var state_59986__$1 = state_59986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59986__$1,(4),ch);
} else {
if((state_val_59987 === (11))){
var inst_59946 = (state_59986[(8)]);
var inst_59951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59952 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59946);
var inst_59953 = cljs.core.async.timeout.call(null,(1000));
var inst_59954 = [inst_59952,inst_59953];
var inst_59955 = (new cljs.core.PersistentVector(null,2,(5),inst_59951,inst_59954,null));
var state_59986__$1 = state_59986;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59986__$1,(14),inst_59955);
} else {
if((state_val_59987 === (9))){
var inst_59946 = (state_59986[(8)]);
var inst_59972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59973 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59946);
var inst_59974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59973);
var inst_59975 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59974)].join('');
var inst_59976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59975);
var state_59986__$1 = (function (){var statearr_59999 = state_59986;
(statearr_59999[(10)] = inst_59972);

return statearr_59999;
})();
var statearr_60000_60025 = state_59986__$1;
(statearr_60000_60025[(2)] = inst_59976);

(statearr_60000_60025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (5))){
var inst_59939 = (state_59986[(7)]);
var inst_59941 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59942 = (new cljs.core.PersistentArrayMap(null,2,inst_59941,null));
var inst_59943 = (new cljs.core.PersistentHashSet(null,inst_59942,null));
var inst_59944 = figwheel.client.focus_msgs.call(null,inst_59943,inst_59939);
var inst_59945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59944);
var inst_59946 = cljs.core.first.call(null,inst_59944);
var inst_59947 = figwheel.client.autoload_QMARK_.call(null);
var state_59986__$1 = (function (){var statearr_60001 = state_59986;
(statearr_60001[(9)] = inst_59945);

(statearr_60001[(8)] = inst_59946);

return statearr_60001;
})();
if(cljs.core.truth_(inst_59947)){
var statearr_60002_60026 = state_59986__$1;
(statearr_60002_60026[(1)] = (8));

} else {
var statearr_60003_60027 = state_59986__$1;
(statearr_60003_60027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (14))){
var inst_59957 = (state_59986[(2)]);
var state_59986__$1 = state_59986;
var statearr_60004_60028 = state_59986__$1;
(statearr_60004_60028[(2)] = inst_59957);

(statearr_60004_60028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (16))){
var state_59986__$1 = state_59986;
var statearr_60005_60029 = state_59986__$1;
(statearr_60005_60029[(2)] = null);

(statearr_60005_60029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (10))){
var inst_59978 = (state_59986[(2)]);
var state_59986__$1 = (function (){var statearr_60006 = state_59986;
(statearr_60006[(11)] = inst_59978);

return statearr_60006;
})();
var statearr_60007_60030 = state_59986__$1;
(statearr_60007_60030[(2)] = null);

(statearr_60007_60030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59987 === (8))){
var inst_59945 = (state_59986[(9)]);
var inst_59949 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59945,opts);
var state_59986__$1 = state_59986;
if(cljs.core.truth_(inst_59949)){
var statearr_60008_60031 = state_59986__$1;
(statearr_60008_60031[(1)] = (11));

} else {
var statearr_60009_60032 = state_59986__$1;
(statearr_60009_60032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37619__auto___60014,ch))
;
return ((function (switch__37596__auto__,c__37619__auto___60014,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____0 = (function (){
var statearr_60010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60010[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__);

(statearr_60010[(1)] = (1));

return statearr_60010;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____1 = (function (state_59986){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_59986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e60011){if((e60011 instanceof Object)){
var ex__37600__auto__ = e60011;
var statearr_60012_60033 = state_59986;
(statearr_60012_60033[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60034 = state_59986;
state_59986 = G__60034;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__ = function(state_59986){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____1.call(this,state_59986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37597__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto___60014,ch))
})();
var state__37621__auto__ = (function (){var statearr_60013 = f__37620__auto__.call(null);
(statearr_60013[(6)] = c__37619__auto___60014);

return statearr_60013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto___60014,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60035_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60035_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_60037 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60037){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e60036){if((e60036 instanceof Error)){
var e = e60036;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60037], null));
} else {
var e = e60036;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_60037))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60038){
var map__60039 = p__60038;
var map__60039__$1 = ((((!((map__60039 == null)))?((((map__60039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60039):map__60039);
var opts = map__60039__$1;
var build_id = cljs.core.get.call(null,map__60039__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60039,map__60039__$1,opts,build_id){
return (function (p__60041){
var vec__60042 = p__60041;
var seq__60043 = cljs.core.seq.call(null,vec__60042);
var first__60044 = cljs.core.first.call(null,seq__60043);
var seq__60043__$1 = cljs.core.next.call(null,seq__60043);
var map__60045 = first__60044;
var map__60045__$1 = ((((!((map__60045 == null)))?((((map__60045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60045):map__60045);
var msg = map__60045__$1;
var msg_name = cljs.core.get.call(null,map__60045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60043__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60042,seq__60043,first__60044,seq__60043__$1,map__60045,map__60045__$1,msg,msg_name,_,map__60039,map__60039__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60042,seq__60043,first__60044,seq__60043__$1,map__60045,map__60045__$1,msg,msg_name,_,map__60039,map__60039__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60039,map__60039__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60047){
var vec__60048 = p__60047;
var seq__60049 = cljs.core.seq.call(null,vec__60048);
var first__60050 = cljs.core.first.call(null,seq__60049);
var seq__60049__$1 = cljs.core.next.call(null,seq__60049);
var map__60051 = first__60050;
var map__60051__$1 = ((((!((map__60051 == null)))?((((map__60051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60051):map__60051);
var msg = map__60051__$1;
var msg_name = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60049__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60053){
var map__60054 = p__60053;
var map__60054__$1 = ((((!((map__60054 == null)))?((((map__60054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60054):map__60054);
var on_compile_warning = cljs.core.get.call(null,map__60054__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60054__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60054,map__60054__$1,on_compile_warning,on_compile_fail){
return (function (p__60056){
var vec__60057 = p__60056;
var seq__60058 = cljs.core.seq.call(null,vec__60057);
var first__60059 = cljs.core.first.call(null,seq__60058);
var seq__60058__$1 = cljs.core.next.call(null,seq__60058);
var map__60060 = first__60059;
var map__60060__$1 = ((((!((map__60060 == null)))?((((map__60060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60060):map__60060);
var msg = map__60060__$1;
var msg_name = cljs.core.get.call(null,map__60060__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60058__$1;
var pred__60062 = cljs.core._EQ_;
var expr__60063 = msg_name;
if(cljs.core.truth_(pred__60062.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60063))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60062.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60063))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60054,map__60054__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto__,msg_hist,msg_names,msg){
return (function (state_60152){
var state_val_60153 = (state_60152[(1)]);
if((state_val_60153 === (7))){
var inst_60072 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60072)){
var statearr_60154_60201 = state_60152__$1;
(statearr_60154_60201[(1)] = (8));

} else {
var statearr_60155_60202 = state_60152__$1;
(statearr_60155_60202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (20))){
var inst_60146 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60156_60203 = state_60152__$1;
(statearr_60156_60203[(2)] = inst_60146);

(statearr_60156_60203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (27))){
var inst_60142 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60157_60204 = state_60152__$1;
(statearr_60157_60204[(2)] = inst_60142);

(statearr_60157_60204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (1))){
var inst_60065 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60065)){
var statearr_60158_60205 = state_60152__$1;
(statearr_60158_60205[(1)] = (2));

} else {
var statearr_60159_60206 = state_60152__$1;
(statearr_60159_60206[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (24))){
var inst_60144 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60160_60207 = state_60152__$1;
(statearr_60160_60207[(2)] = inst_60144);

(statearr_60160_60207[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (4))){
var inst_60150 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60152__$1,inst_60150);
} else {
if((state_val_60153 === (15))){
var inst_60148 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60161_60208 = state_60152__$1;
(statearr_60161_60208[(2)] = inst_60148);

(statearr_60161_60208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (21))){
var inst_60101 = (state_60152[(2)]);
var inst_60102 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60103 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60102);
var state_60152__$1 = (function (){var statearr_60162 = state_60152;
(statearr_60162[(7)] = inst_60101);

return statearr_60162;
})();
var statearr_60163_60209 = state_60152__$1;
(statearr_60163_60209[(2)] = inst_60103);

(statearr_60163_60209[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (31))){
var inst_60131 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60131)){
var statearr_60164_60210 = state_60152__$1;
(statearr_60164_60210[(1)] = (34));

} else {
var statearr_60165_60211 = state_60152__$1;
(statearr_60165_60211[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (32))){
var inst_60140 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60166_60212 = state_60152__$1;
(statearr_60166_60212[(2)] = inst_60140);

(statearr_60166_60212[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (33))){
var inst_60127 = (state_60152[(2)]);
var inst_60128 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60129 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60128);
var state_60152__$1 = (function (){var statearr_60167 = state_60152;
(statearr_60167[(8)] = inst_60127);

return statearr_60167;
})();
var statearr_60168_60213 = state_60152__$1;
(statearr_60168_60213[(2)] = inst_60129);

(statearr_60168_60213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (13))){
var inst_60086 = figwheel.client.heads_up.clear.call(null);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(16),inst_60086);
} else {
if((state_val_60153 === (22))){
var inst_60107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60108 = figwheel.client.heads_up.append_warning_message.call(null,inst_60107);
var state_60152__$1 = state_60152;
var statearr_60169_60214 = state_60152__$1;
(statearr_60169_60214[(2)] = inst_60108);

(statearr_60169_60214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (36))){
var inst_60138 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60170_60215 = state_60152__$1;
(statearr_60170_60215[(2)] = inst_60138);

(statearr_60170_60215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (29))){
var inst_60118 = (state_60152[(2)]);
var inst_60119 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60120 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60119);
var state_60152__$1 = (function (){var statearr_60171 = state_60152;
(statearr_60171[(9)] = inst_60118);

return statearr_60171;
})();
var statearr_60172_60216 = state_60152__$1;
(statearr_60172_60216[(2)] = inst_60120);

(statearr_60172_60216[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (6))){
var inst_60067 = (state_60152[(10)]);
var state_60152__$1 = state_60152;
var statearr_60173_60217 = state_60152__$1;
(statearr_60173_60217[(2)] = inst_60067);

(statearr_60173_60217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (28))){
var inst_60114 = (state_60152[(2)]);
var inst_60115 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60116 = figwheel.client.heads_up.display_warning.call(null,inst_60115);
var state_60152__$1 = (function (){var statearr_60174 = state_60152;
(statearr_60174[(11)] = inst_60114);

return statearr_60174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(29),inst_60116);
} else {
if((state_val_60153 === (25))){
var inst_60112 = figwheel.client.heads_up.clear.call(null);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(28),inst_60112);
} else {
if((state_val_60153 === (34))){
var inst_60133 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(37),inst_60133);
} else {
if((state_val_60153 === (17))){
var inst_60092 = (state_60152[(2)]);
var inst_60093 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60094 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60093);
var state_60152__$1 = (function (){var statearr_60175 = state_60152;
(statearr_60175[(12)] = inst_60092);

return statearr_60175;
})();
var statearr_60176_60218 = state_60152__$1;
(statearr_60176_60218[(2)] = inst_60094);

(statearr_60176_60218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (3))){
var inst_60084 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60084)){
var statearr_60177_60219 = state_60152__$1;
(statearr_60177_60219[(1)] = (13));

} else {
var statearr_60178_60220 = state_60152__$1;
(statearr_60178_60220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (12))){
var inst_60080 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60179_60221 = state_60152__$1;
(statearr_60179_60221[(2)] = inst_60080);

(statearr_60179_60221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (2))){
var inst_60067 = (state_60152[(10)]);
var inst_60067__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60152__$1 = (function (){var statearr_60180 = state_60152;
(statearr_60180[(10)] = inst_60067__$1);

return statearr_60180;
})();
if(cljs.core.truth_(inst_60067__$1)){
var statearr_60181_60222 = state_60152__$1;
(statearr_60181_60222[(1)] = (5));

} else {
var statearr_60182_60223 = state_60152__$1;
(statearr_60182_60223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (23))){
var inst_60110 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60110)){
var statearr_60183_60224 = state_60152__$1;
(statearr_60183_60224[(1)] = (25));

} else {
var statearr_60184_60225 = state_60152__$1;
(statearr_60184_60225[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (35))){
var state_60152__$1 = state_60152;
var statearr_60185_60226 = state_60152__$1;
(statearr_60185_60226[(2)] = null);

(statearr_60185_60226[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (19))){
var inst_60105 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60105)){
var statearr_60186_60227 = state_60152__$1;
(statearr_60186_60227[(1)] = (22));

} else {
var statearr_60187_60228 = state_60152__$1;
(statearr_60187_60228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (11))){
var inst_60076 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60188_60229 = state_60152__$1;
(statearr_60188_60229[(2)] = inst_60076);

(statearr_60188_60229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (9))){
var inst_60078 = figwheel.client.heads_up.clear.call(null);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(12),inst_60078);
} else {
if((state_val_60153 === (5))){
var inst_60069 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60152__$1 = state_60152;
var statearr_60189_60230 = state_60152__$1;
(statearr_60189_60230[(2)] = inst_60069);

(statearr_60189_60230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (14))){
var inst_60096 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60096)){
var statearr_60190_60231 = state_60152__$1;
(statearr_60190_60231[(1)] = (18));

} else {
var statearr_60191_60232 = state_60152__$1;
(statearr_60191_60232[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (26))){
var inst_60122 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60122)){
var statearr_60192_60233 = state_60152__$1;
(statearr_60192_60233[(1)] = (30));

} else {
var statearr_60193_60234 = state_60152__$1;
(statearr_60193_60234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (16))){
var inst_60088 = (state_60152[(2)]);
var inst_60089 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60090 = figwheel.client.heads_up.display_exception.call(null,inst_60089);
var state_60152__$1 = (function (){var statearr_60194 = state_60152;
(statearr_60194[(13)] = inst_60088);

return statearr_60194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(17),inst_60090);
} else {
if((state_val_60153 === (30))){
var inst_60124 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60125 = figwheel.client.heads_up.display_warning.call(null,inst_60124);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(33),inst_60125);
} else {
if((state_val_60153 === (10))){
var inst_60082 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60195_60235 = state_60152__$1;
(statearr_60195_60235[(2)] = inst_60082);

(statearr_60195_60235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (18))){
var inst_60098 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60099 = figwheel.client.heads_up.display_exception.call(null,inst_60098);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(21),inst_60099);
} else {
if((state_val_60153 === (37))){
var inst_60135 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60196_60236 = state_60152__$1;
(statearr_60196_60236[(2)] = inst_60135);

(statearr_60196_60236[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (8))){
var inst_60074 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(11),inst_60074);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37619__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37596__auto__,c__37619__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____0 = (function (){
var statearr_60197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60197[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__);

(statearr_60197[(1)] = (1));

return statearr_60197;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____1 = (function (state_60152){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_60152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e60198){if((e60198 instanceof Object)){
var ex__37600__auto__ = e60198;
var statearr_60199_60237 = state_60152;
(statearr_60199_60237[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60238 = state_60152;
state_60152 = G__60238;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__ = function(state_60152){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____1.call(this,state_60152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto__,msg_hist,msg_names,msg))
})();
var state__37621__auto__ = (function (){var statearr_60200 = f__37620__auto__.call(null);
(statearr_60200[(6)] = c__37619__auto__);

return statearr_60200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto__,msg_hist,msg_names,msg))
);

return c__37619__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37619__auto___60267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto___60267,ch){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto___60267,ch){
return (function (state_60253){
var state_val_60254 = (state_60253[(1)]);
if((state_val_60254 === (1))){
var state_60253__$1 = state_60253;
var statearr_60255_60268 = state_60253__$1;
(statearr_60255_60268[(2)] = null);

(statearr_60255_60268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60254 === (2))){
var state_60253__$1 = state_60253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60253__$1,(4),ch);
} else {
if((state_val_60254 === (3))){
var inst_60251 = (state_60253[(2)]);
var state_60253__$1 = state_60253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60253__$1,inst_60251);
} else {
if((state_val_60254 === (4))){
var inst_60241 = (state_60253[(7)]);
var inst_60241__$1 = (state_60253[(2)]);
var state_60253__$1 = (function (){var statearr_60256 = state_60253;
(statearr_60256[(7)] = inst_60241__$1);

return statearr_60256;
})();
if(cljs.core.truth_(inst_60241__$1)){
var statearr_60257_60269 = state_60253__$1;
(statearr_60257_60269[(1)] = (5));

} else {
var statearr_60258_60270 = state_60253__$1;
(statearr_60258_60270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60254 === (5))){
var inst_60241 = (state_60253[(7)]);
var inst_60243 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60241);
var state_60253__$1 = state_60253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60253__$1,(8),inst_60243);
} else {
if((state_val_60254 === (6))){
var state_60253__$1 = state_60253;
var statearr_60259_60271 = state_60253__$1;
(statearr_60259_60271[(2)] = null);

(statearr_60259_60271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60254 === (7))){
var inst_60249 = (state_60253[(2)]);
var state_60253__$1 = state_60253;
var statearr_60260_60272 = state_60253__$1;
(statearr_60260_60272[(2)] = inst_60249);

(statearr_60260_60272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60254 === (8))){
var inst_60245 = (state_60253[(2)]);
var state_60253__$1 = (function (){var statearr_60261 = state_60253;
(statearr_60261[(8)] = inst_60245);

return statearr_60261;
})();
var statearr_60262_60273 = state_60253__$1;
(statearr_60262_60273[(2)] = null);

(statearr_60262_60273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__37619__auto___60267,ch))
;
return ((function (switch__37596__auto__,c__37619__auto___60267,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37597__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37597__auto____0 = (function (){
var statearr_60263 = [null,null,null,null,null,null,null,null,null];
(statearr_60263[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37597__auto__);

(statearr_60263[(1)] = (1));

return statearr_60263;
});
var figwheel$client$heads_up_plugin_$_state_machine__37597__auto____1 = (function (state_60253){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_60253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e60264){if((e60264 instanceof Object)){
var ex__37600__auto__ = e60264;
var statearr_60265_60274 = state_60253;
(statearr_60265_60274[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60275 = state_60253;
state_60253 = G__60275;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37597__auto__ = function(state_60253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37597__auto____1.call(this,state_60253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37597__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37597__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto___60267,ch))
})();
var state__37621__auto__ = (function (){var statearr_60266 = f__37620__auto__.call(null);
(statearr_60266[(6)] = c__37619__auto___60267);

return statearr_60266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto___60267,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto__){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto__){
return (function (state_60281){
var state_val_60282 = (state_60281[(1)]);
if((state_val_60282 === (1))){
var inst_60276 = cljs.core.async.timeout.call(null,(3000));
var state_60281__$1 = state_60281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60281__$1,(2),inst_60276);
} else {
if((state_val_60282 === (2))){
var inst_60278 = (state_60281[(2)]);
var inst_60279 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60281__$1 = (function (){var statearr_60283 = state_60281;
(statearr_60283[(7)] = inst_60278);

return statearr_60283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60281__$1,inst_60279);
} else {
return null;
}
}
});})(c__37619__auto__))
;
return ((function (switch__37596__auto__,c__37619__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____0 = (function (){
var statearr_60284 = [null,null,null,null,null,null,null,null];
(statearr_60284[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__);

(statearr_60284[(1)] = (1));

return statearr_60284;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____1 = (function (state_60281){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_60281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e60285){if((e60285 instanceof Object)){
var ex__37600__auto__ = e60285;
var statearr_60286_60288 = state_60281;
(statearr_60286_60288[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60289 = state_60281;
state_60281 = G__60289;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__ = function(state_60281){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____1.call(this,state_60281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37597__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto__))
})();
var state__37621__auto__ = (function (){var statearr_60287 = f__37620__auto__.call(null);
(statearr_60287[(6)] = c__37619__auto__);

return statearr_60287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto__))
);

return c__37619__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto__,figwheel_version,temp__5278__auto__){
return (function (state_60296){
var state_val_60297 = (state_60296[(1)]);
if((state_val_60297 === (1))){
var inst_60290 = cljs.core.async.timeout.call(null,(2000));
var state_60296__$1 = state_60296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60296__$1,(2),inst_60290);
} else {
if((state_val_60297 === (2))){
var inst_60292 = (state_60296[(2)]);
var inst_60293 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_60294 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60293);
var state_60296__$1 = (function (){var statearr_60298 = state_60296;
(statearr_60298[(7)] = inst_60292);

return statearr_60298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60296__$1,inst_60294);
} else {
return null;
}
}
});})(c__37619__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__37596__auto__,c__37619__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____0 = (function (){
var statearr_60299 = [null,null,null,null,null,null,null,null];
(statearr_60299[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__);

(statearr_60299[(1)] = (1));

return statearr_60299;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____1 = (function (state_60296){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_60296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e60300){if((e60300 instanceof Object)){
var ex__37600__auto__ = e60300;
var statearr_60301_60303 = state_60296;
(statearr_60301_60303[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60304 = state_60296;
state_60296 = G__60304;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__ = function(state_60296){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____1.call(this,state_60296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto__,figwheel_version,temp__5278__auto__))
})();
var state__37621__auto__ = (function (){var statearr_60302 = f__37620__auto__.call(null);
(statearr_60302[(6)] = c__37619__auto__);

return statearr_60302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto__,figwheel_version,temp__5278__auto__))
);

return c__37619__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60305){
var map__60306 = p__60305;
var map__60306__$1 = ((((!((map__60306 == null)))?((((map__60306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60306):map__60306);
var file = cljs.core.get.call(null,map__60306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60306__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60306__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60308 = "";
var G__60308__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60308),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__60308);
var G__60308__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60308__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60308__$1);
if(cljs.core.truth_((function (){var and__33882__auto__ = line;
if(cljs.core.truth_(and__33882__auto__)){
return column;
} else {
return and__33882__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60308__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__60308__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60309){
var map__60310 = p__60309;
var map__60310__$1 = ((((!((map__60310 == null)))?((((map__60310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60310):map__60310);
var ed = map__60310__$1;
var formatted_exception = cljs.core.get.call(null,map__60310__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__60310__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60310__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__60312_60316 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__60313_60317 = null;
var count__60314_60318 = (0);
var i__60315_60319 = (0);
while(true){
if((i__60315_60319 < count__60314_60318)){
var msg_60320 = cljs.core._nth.call(null,chunk__60313_60317,i__60315_60319);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60320);

var G__60321 = seq__60312_60316;
var G__60322 = chunk__60313_60317;
var G__60323 = count__60314_60318;
var G__60324 = (i__60315_60319 + (1));
seq__60312_60316 = G__60321;
chunk__60313_60317 = G__60322;
count__60314_60318 = G__60323;
i__60315_60319 = G__60324;
continue;
} else {
var temp__5278__auto___60325 = cljs.core.seq.call(null,seq__60312_60316);
if(temp__5278__auto___60325){
var seq__60312_60326__$1 = temp__5278__auto___60325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60312_60326__$1)){
var c__34825__auto___60327 = cljs.core.chunk_first.call(null,seq__60312_60326__$1);
var G__60328 = cljs.core.chunk_rest.call(null,seq__60312_60326__$1);
var G__60329 = c__34825__auto___60327;
var G__60330 = cljs.core.count.call(null,c__34825__auto___60327);
var G__60331 = (0);
seq__60312_60316 = G__60328;
chunk__60313_60317 = G__60329;
count__60314_60318 = G__60330;
i__60315_60319 = G__60331;
continue;
} else {
var msg_60332 = cljs.core.first.call(null,seq__60312_60326__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_60332);

var G__60333 = cljs.core.next.call(null,seq__60312_60326__$1);
var G__60334 = null;
var G__60335 = (0);
var G__60336 = (0);
seq__60312_60316 = G__60333;
chunk__60313_60317 = G__60334;
count__60314_60318 = G__60335;
i__60315_60319 = G__60336;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60337){
var map__60338 = p__60337;
var map__60338__$1 = ((((!((map__60338 == null)))?((((map__60338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60338):map__60338);
var w = map__60338__$1;
var message = cljs.core.get.call(null,map__60338__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__33882__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__33882__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__33882__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__60340 = cljs.core.seq.call(null,plugins);
var chunk__60341 = null;
var count__60342 = (0);
var i__60343 = (0);
while(true){
if((i__60343 < count__60342)){
var vec__60344 = cljs.core._nth.call(null,chunk__60341,i__60343);
var k = cljs.core.nth.call(null,vec__60344,(0),null);
var plugin = cljs.core.nth.call(null,vec__60344,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60350 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60340,chunk__60341,count__60342,i__60343,pl_60350,vec__60344,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60350.call(null,msg_hist);
});})(seq__60340,chunk__60341,count__60342,i__60343,pl_60350,vec__60344,k,plugin))
);
} else {
}

var G__60351 = seq__60340;
var G__60352 = chunk__60341;
var G__60353 = count__60342;
var G__60354 = (i__60343 + (1));
seq__60340 = G__60351;
chunk__60341 = G__60352;
count__60342 = G__60353;
i__60343 = G__60354;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__60340);
if(temp__5278__auto__){
var seq__60340__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60340__$1)){
var c__34825__auto__ = cljs.core.chunk_first.call(null,seq__60340__$1);
var G__60355 = cljs.core.chunk_rest.call(null,seq__60340__$1);
var G__60356 = c__34825__auto__;
var G__60357 = cljs.core.count.call(null,c__34825__auto__);
var G__60358 = (0);
seq__60340 = G__60355;
chunk__60341 = G__60356;
count__60342 = G__60357;
i__60343 = G__60358;
continue;
} else {
var vec__60347 = cljs.core.first.call(null,seq__60340__$1);
var k = cljs.core.nth.call(null,vec__60347,(0),null);
var plugin = cljs.core.nth.call(null,vec__60347,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60359 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60340,chunk__60341,count__60342,i__60343,pl_60359,vec__60347,k,plugin,seq__60340__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60359.call(null,msg_hist);
});})(seq__60340,chunk__60341,count__60342,i__60343,pl_60359,vec__60347,k,plugin,seq__60340__$1,temp__5278__auto__))
);
} else {
}

var G__60360 = cljs.core.next.call(null,seq__60340__$1);
var G__60361 = null;
var G__60362 = (0);
var G__60363 = (0);
seq__60340 = G__60360;
chunk__60341 = G__60361;
count__60342 = G__60362;
i__60343 = G__60363;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__60365 = arguments.length;
switch (G__60365) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__60366_60371 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60367_60372 = null;
var count__60368_60373 = (0);
var i__60369_60374 = (0);
while(true){
if((i__60369_60374 < count__60368_60373)){
var msg_60375 = cljs.core._nth.call(null,chunk__60367_60372,i__60369_60374);
figwheel.client.socket.handle_incoming_message.call(null,msg_60375);

var G__60376 = seq__60366_60371;
var G__60377 = chunk__60367_60372;
var G__60378 = count__60368_60373;
var G__60379 = (i__60369_60374 + (1));
seq__60366_60371 = G__60376;
chunk__60367_60372 = G__60377;
count__60368_60373 = G__60378;
i__60369_60374 = G__60379;
continue;
} else {
var temp__5278__auto___60380 = cljs.core.seq.call(null,seq__60366_60371);
if(temp__5278__auto___60380){
var seq__60366_60381__$1 = temp__5278__auto___60380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60366_60381__$1)){
var c__34825__auto___60382 = cljs.core.chunk_first.call(null,seq__60366_60381__$1);
var G__60383 = cljs.core.chunk_rest.call(null,seq__60366_60381__$1);
var G__60384 = c__34825__auto___60382;
var G__60385 = cljs.core.count.call(null,c__34825__auto___60382);
var G__60386 = (0);
seq__60366_60371 = G__60383;
chunk__60367_60372 = G__60384;
count__60368_60373 = G__60385;
i__60369_60374 = G__60386;
continue;
} else {
var msg_60387 = cljs.core.first.call(null,seq__60366_60381__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60387);

var G__60388 = cljs.core.next.call(null,seq__60366_60381__$1);
var G__60389 = null;
var G__60390 = (0);
var G__60391 = (0);
seq__60366_60371 = G__60388;
chunk__60367_60372 = G__60389;
count__60368_60373 = G__60390;
i__60369_60374 = G__60391;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__35180__auto__ = [];
var len__35173__auto___60396 = arguments.length;
var i__35174__auto___60397 = (0);
while(true){
if((i__35174__auto___60397 < len__35173__auto___60396)){
args__35180__auto__.push((arguments[i__35174__auto___60397]));

var G__60398 = (i__35174__auto___60397 + (1));
i__35174__auto___60397 = G__60398;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__60393){
var map__60394 = p__60393;
var map__60394__$1 = ((((!((map__60394 == null)))?((((map__60394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60394):map__60394);
var opts = map__60394__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq60392){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60392));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e60399){if((e60399 instanceof Error)){
var e = e60399;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e60399;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__60400){
var map__60401 = p__60400;
var map__60401__$1 = ((((!((map__60401 == null)))?((((map__60401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60401):map__60401);
var msg_name = cljs.core.get.call(null,map__60401__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513172448353
