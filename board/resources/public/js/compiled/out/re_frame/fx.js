// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__21182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21183 = null;
var count__21184 = (0);
var i__21185 = (0);
while(true){
if((i__21185 < count__21184)){
var vec__21186 = cljs.core._nth.call(null,chunk__21183,i__21185);
var effect_key = cljs.core.nth.call(null,vec__21186,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21186,(1),null);
var temp__5276__auto___21192 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5276__auto___21192)){
var effect_fn_21193 = temp__5276__auto___21192;
effect_fn_21193.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__21194 = seq__21182;
var G__21195 = chunk__21183;
var G__21196 = count__21184;
var G__21197 = (i__21185 + (1));
seq__21182 = G__21194;
chunk__21183 = G__21195;
count__21184 = G__21196;
i__21185 = G__21197;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__21182);
if(temp__5278__auto__){
var seq__21182__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21182__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__21182__$1);
var G__21198 = cljs.core.chunk_rest.call(null,seq__21182__$1);
var G__21199 = c__8541__auto__;
var G__21200 = cljs.core.count.call(null,c__8541__auto__);
var G__21201 = (0);
seq__21182 = G__21198;
chunk__21183 = G__21199;
count__21184 = G__21200;
i__21185 = G__21201;
continue;
} else {
var vec__21189 = cljs.core.first.call(null,seq__21182__$1);
var effect_key = cljs.core.nth.call(null,vec__21189,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21189,(1),null);
var temp__5276__auto___21202 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5276__auto___21202)){
var effect_fn_21203 = temp__5276__auto___21202;
effect_fn_21203.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__21204 = cljs.core.next.call(null,seq__21182__$1);
var G__21205 = null;
var G__21206 = (0);
var G__21207 = (0);
seq__21182 = G__21204;
chunk__21183 = G__21205;
count__21184 = G__21206;
i__21185 = G__21207;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__21208 = cljs.core.seq.call(null,value);
var chunk__21209 = null;
var count__21210 = (0);
var i__21211 = (0);
while(true){
if((i__21211 < count__21210)){
var map__21212 = cljs.core._nth.call(null,chunk__21209,i__21211);
var map__21212__$1 = ((((!((map__21212 == null)))?((((map__21212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21212):map__21212);
var effect = map__21212__$1;
var ms = cljs.core.get.call(null,map__21212__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21212__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21208,chunk__21209,count__21210,i__21211,map__21212,map__21212__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21208,chunk__21209,count__21210,i__21211,map__21212,map__21212__$1,effect,ms,dispatch))
,ms);
}

var G__21216 = seq__21208;
var G__21217 = chunk__21209;
var G__21218 = count__21210;
var G__21219 = (i__21211 + (1));
seq__21208 = G__21216;
chunk__21209 = G__21217;
count__21210 = G__21218;
i__21211 = G__21219;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__21208);
if(temp__5278__auto__){
var seq__21208__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21208__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__21208__$1);
var G__21220 = cljs.core.chunk_rest.call(null,seq__21208__$1);
var G__21221 = c__8541__auto__;
var G__21222 = cljs.core.count.call(null,c__8541__auto__);
var G__21223 = (0);
seq__21208 = G__21220;
chunk__21209 = G__21221;
count__21210 = G__21222;
i__21211 = G__21223;
continue;
} else {
var map__21214 = cljs.core.first.call(null,seq__21208__$1);
var map__21214__$1 = ((((!((map__21214 == null)))?((((map__21214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21214):map__21214);
var effect = map__21214__$1;
var ms = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21214__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21208,chunk__21209,count__21210,i__21211,map__21214,map__21214__$1,effect,ms,dispatch,seq__21208__$1,temp__5278__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21208,chunk__21209,count__21210,i__21211,map__21214,map__21214__$1,effect,ms,dispatch,seq__21208__$1,temp__5278__auto__))
,ms);
}

var G__21224 = cljs.core.next.call(null,seq__21208__$1);
var G__21225 = null;
var G__21226 = (0);
var G__21227 = (0);
seq__21208 = G__21224;
chunk__21209 = G__21225;
count__21210 = G__21226;
i__21211 = G__21227;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__21228 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21229 = null;
var count__21230 = (0);
var i__21231 = (0);
while(true){
if((i__21231 < count__21230)){
var event = cljs.core._nth.call(null,chunk__21229,i__21231);
re_frame.router.dispatch.call(null,event);

var G__21232 = seq__21228;
var G__21233 = chunk__21229;
var G__21234 = count__21230;
var G__21235 = (i__21231 + (1));
seq__21228 = G__21232;
chunk__21229 = G__21233;
count__21230 = G__21234;
i__21231 = G__21235;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__21228);
if(temp__5278__auto__){
var seq__21228__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21228__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__21228__$1);
var G__21236 = cljs.core.chunk_rest.call(null,seq__21228__$1);
var G__21237 = c__8541__auto__;
var G__21238 = cljs.core.count.call(null,c__8541__auto__);
var G__21239 = (0);
seq__21228 = G__21236;
chunk__21229 = G__21237;
count__21230 = G__21238;
i__21231 = G__21239;
continue;
} else {
var event = cljs.core.first.call(null,seq__21228__$1);
re_frame.router.dispatch.call(null,event);

var G__21240 = cljs.core.next.call(null,seq__21228__$1);
var G__21241 = null;
var G__21242 = (0);
var G__21243 = (0);
seq__21228 = G__21240;
chunk__21229 = G__21241;
count__21230 = G__21242;
i__21231 = G__21243;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__21244 = cljs.core.seq.call(null,value);
var chunk__21245 = null;
var count__21246 = (0);
var i__21247 = (0);
while(true){
if((i__21247 < count__21246)){
var event = cljs.core._nth.call(null,chunk__21245,i__21247);
clear_event.call(null,event);

var G__21248 = seq__21244;
var G__21249 = chunk__21245;
var G__21250 = count__21246;
var G__21251 = (i__21247 + (1));
seq__21244 = G__21248;
chunk__21245 = G__21249;
count__21246 = G__21250;
i__21247 = G__21251;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__21244);
if(temp__5278__auto__){
var seq__21244__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21244__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__21244__$1);
var G__21252 = cljs.core.chunk_rest.call(null,seq__21244__$1);
var G__21253 = c__8541__auto__;
var G__21254 = cljs.core.count.call(null,c__8541__auto__);
var G__21255 = (0);
seq__21244 = G__21252;
chunk__21245 = G__21253;
count__21246 = G__21254;
i__21247 = G__21255;
continue;
} else {
var event = cljs.core.first.call(null,seq__21244__$1);
clear_event.call(null,event);

var G__21256 = cljs.core.next.call(null,seq__21244__$1);
var G__21257 = null;
var G__21258 = (0);
var G__21259 = (0);
seq__21244 = G__21256;
chunk__21245 = G__21257;
count__21246 = G__21258;
i__21247 = G__21259;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1513171809731
