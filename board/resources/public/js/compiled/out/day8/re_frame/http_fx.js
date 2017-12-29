// Compiled by ClojureScript 1.9.946 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__24499){
var vec__24500 = p__24499;
var success_QMARK_ = cljs.core.nth.call(null,vec__24500,(0),null);
var response = cljs.core.nth.call(null,vec__24500,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__24505){
var map__24506 = p__24505;
var map__24506__$1 = ((((!((map__24506 == null)))?((((map__24506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24506):map__24506);
var request = map__24506__$1;
var on_success = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__24506,map__24506__$1,request,on_success,on_failure){
return (function (p1__24503_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__24503_SHARP_));
});})(api,map__24506,map__24506__$1,request,on_success,on_failure))
,((function (api,map__24506,map__24506__$1,request,on_success,on_failure){
return (function (p1__24504_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__24504_SHARP_));
});})(api,map__24506,map__24506__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__24508 = cljs.core.seq.call(null,seq_request_maps);
var chunk__24509 = null;
var count__24510 = (0);
var i__24511 = (0);
while(true){
if((i__24511 < count__24510)){
var request__$1 = cljs.core._nth.call(null,chunk__24509,i__24511);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__24512 = seq__24508;
var G__24513 = chunk__24509;
var G__24514 = count__24510;
var G__24515 = (i__24511 + (1));
seq__24508 = G__24512;
chunk__24509 = G__24513;
count__24510 = G__24514;
i__24511 = G__24515;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__24508);
if(temp__5278__auto__){
var seq__24508__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24508__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__24508__$1);
var G__24516 = cljs.core.chunk_rest.call(null,seq__24508__$1);
var G__24517 = c__8541__auto__;
var G__24518 = cljs.core.count.call(null,c__8541__auto__);
var G__24519 = (0);
seq__24508 = G__24516;
chunk__24509 = G__24517;
count__24510 = G__24518;
i__24511 = G__24519;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__24508__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__24520 = cljs.core.next.call(null,seq__24508__$1);
var G__24521 = null;
var G__24522 = (0);
var G__24523 = (0);
seq__24508 = G__24520;
chunk__24509 = G__24521;
count__24510 = G__24522;
i__24511 = G__24523;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1513171813341
