// Compiled by ClojureScript 1.9.946 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__23306 = x;
var ev_id = cljs.core.nth.call(null,vec__23306,(0),null);
var _ = cljs.core.nth.call(null,vec__23306,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5278__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var errs = temp__5278__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5276__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var errs = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__7598__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__7598__auto__){
var and__7598__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__7598__auto____$1){
var map__23313 = x;
var map__23313__$1 = ((((!((map__23313 == null)))?((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23313):map__23313);
var ch_recv = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__7598__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__7598__auto____$2){
var and__7598__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__7598__auto____$3){
var and__7598__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__7598__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__7598__auto____$4;
}
} else {
return and__7598__auto____$3;
}
} else {
return and__7598__auto____$2;
}
} else {
return and__7598__auto____$1;
}
} else {
return and__7598__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__7598__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__7598__auto__){
var and__7598__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__7598__auto____$1){
var map__23319 = x;
var map__23319__$1 = ((((!((map__23319 == null)))?((((map__23319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23319):map__23319);
var ch_recv = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__7598__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__7598__auto____$2){
var and__7598__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__7598__auto____$3){
var and__7598__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__7598__auto____$4){
var and__7598__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__7598__auto____$5){
var and__7598__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__7598__auto____$6){
var and__7598__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__7598__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__7598__auto____$7;
}
} else {
return and__7598__auto____$6;
}
} else {
return and__7598__auto____$5;
}
} else {
return and__7598__auto____$4;
}
} else {
return and__7598__auto____$3;
}
} else {
return and__7598__auto____$2;
}
} else {
return and__7598__auto____$1;
}
} else {
return and__7598__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__23321){
var map__23322 = p__23321;
var map__23322__$1 = ((((!((map__23322 == null)))?((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23322):map__23322);
var ev_msg = map__23322__$1;
var event = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__23324 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__23324,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__23324,(1),null);
var valid_event = vec__23324;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__23324,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__23322,map__23322__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__23324,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__23322,map__23322__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,548328944);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e23330){var t = e23330;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4946840489680476349.clj",208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1166268986);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__23327 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__23327,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23327,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__23327,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__23327,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,494054553);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__23332 = arguments.length;
switch (G__23332) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",224,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,-1675029090);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",234,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,904160791);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__23334_SHARP_){
if(!((p1__23334_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__23334_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__23334_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__23334_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__23334_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23335){if((e23335 instanceof Error)){
var e = e23335;
return e;
} else {
throw e23335;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__23334#] (satisfies? interfaces/IPacker p1__23334#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___23625 = arguments.length;
var i__8890__auto___23626 = (0);
while(true){
if((i__8890__auto___23626 < len__8889__auto___23625)){
args__8896__auto__.push((arguments[i__8890__auto___23626]));

var G__23627 = (i__8890__auto___23626 + (1));
i__8890__auto___23626 = G__23627;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__23340){
var vec__23341 = p__23340;
var map__23344 = cljs.core.nth.call(null,vec__23341,(0),null);
var map__23344__$1 = ((((!((map__23344 == null)))?((((map__23344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23344):map__23344);
var recv_buf_or_n = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__7610__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var or__7610__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__7610__auto____$1)){
return or__7610__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23346){if((e23346 instanceof Error)){
var e = e23346;
return e;
} else {
throw e23346;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23347){if((e23347 instanceof Error)){
var e = e23347;
return e;
} else {
throw e23347;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_23628 = (function (){try{if(((function (vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__23337_SHARP_){
if(!((p1__23337_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__23337_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__23337_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__23337_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__23337_SHARP_);
}
});})(vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23348){if((e23348 instanceof Error)){
var e = e23348;
return e;
} else {
throw e23348;

}
}})();
if((e_23628 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__23337#] (satisfies? interfaces/IServerChanAdapter p1__23337#)) web-server-ch-adapter)",web_server_ch_adapter,e_23628,null);
}

var max_ms_23629 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_23629)){
throw cljs.core.ex_info.call(null,[":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_23629)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_23629], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__7610__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__23630 = null;
var G__23630__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__23350 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__23350,(0),null);
var _udt = cljs.core.nth.call(null,vec__23350,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__23630__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__23630 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__23630__3.call(this,conn_type,uid,client_id);
case 4:
return G__23630__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23630.cljs$core$IFn$_invoke$arity$3 = G__23630__3;
G__23630.cljs$core$IFn$_invoke$arity$4 = G__23630__4;
return G__23630;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23353){if((e23353 instanceof Error)){
var e = e23353;
return e;
} else {
throw e23353;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__23354){
var map__23355 = p__23354;
var map__23355__$1 = ((((!((map__23355 == null)))?((((map__23355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23355):map__23355);
var old_m = map__23355__$1;
var ws = cljs.core.get.call(null,map__23355__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__23355__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__23355__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__23357 = conn_type;
var G__23357__$1 = (((G__23357 instanceof cljs.core.Keyword))?G__23357.fqn:null);
switch (G__23357__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23357__$1)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23358){if((e23358 instanceof Error)){
var e = e23358;
return e;
} else {
throw e23358;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__23359){
var map__23360 = p__23359;
var map__23360__$1 = ((((!((map__23360 == null)))?((((map__23360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23360):map__23360);
var old_m = map__23360__$1;
var ws = cljs.core.get.call(null,map__23360__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__23360__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__23360__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax__$1,uid):cljs.core.disj.call(null,ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__23632__delegate = function (user_id,ev,p__23362){
var vec__23363 = p__23362;
var map__23366 = cljs.core.nth.call(null,vec__23363,(0),null);
var map__23366__$1 = ((((!((map__23366 == null)))?((((map__23366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23366):map__23366);
var opts = map__23366__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__23366__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_23633 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __23634 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",405,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_23633,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_23633,ev], null);
});})(uid_23633,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1842510584);
var __23635__$1 = (cljs.core.truth_(uid_23633)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __23636__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_23637 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__23638 = ((function (uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__5278__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__23368 = cljs.core.get.call(null,m,uid_23633);
var ___$3 = cljs.core.nth.call(null,vec__23368,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__23368,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_23637)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_23633),cljs.core.get.call(null,m,uid_23633));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__5278__auto__)){
var pulled = temp__5278__auto__;
var vec__23371 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__23371,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__23371,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__23371,buffered_evs,ev_uuids,pulled,temp__5278__auto__,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__23371,buffered_evs,ev_uuids,pulled,temp__5278__auto__,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1222581736);

var G__23374 = conn_type;
var G__23374__$1 = (((G__23374 instanceof cljs.core.Keyword))?G__23374.fqn:null);
switch (G__23374__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_23633,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_23633,buffered_evs_ppstr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23374__$1)].join('')));

}
} else {
return null;
}
});})(uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4946840489680476349.clj",452,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_23633], null);
});})(uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1736878036);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__23375_23640 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_23633], null))));
var chunk__23376_23641 = null;
var count__23377_23642 = (0);
var i__23378_23643 = (0);
while(true){
if((i__23378_23643 < count__23377_23642)){
var vec__23379_23644 = cljs.core._nth.call(null,chunk__23376_23641,i__23378_23643);
var _QMARK_sch_23645 = cljs.core.nth.call(null,vec__23379_23644,(0),null);
var _udt_23646 = cljs.core.nth.call(null,vec__23379_23644,(1),null);
var temp__5278__auto___23647 = _QMARK_sch_23645;
if(cljs.core.truth_(temp__5278__auto___23647)){
var sch_23648 = temp__5278__auto___23647;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_23648);
} else {
}

var G__23649 = seq__23375_23640;
var G__23650 = chunk__23376_23641;
var G__23651 = count__23377_23642;
var G__23652 = (i__23378_23643 + (1));
seq__23375_23640 = G__23649;
chunk__23376_23641 = G__23650;
count__23377_23642 = G__23651;
i__23378_23643 = G__23652;
continue;
} else {
var temp__5278__auto___23653 = cljs.core.seq.call(null,seq__23375_23640);
if(temp__5278__auto___23653){
var seq__23375_23654__$1 = temp__5278__auto___23653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23375_23654__$1)){
var c__8541__auto___23655 = cljs.core.chunk_first.call(null,seq__23375_23654__$1);
var G__23656 = cljs.core.chunk_rest.call(null,seq__23375_23654__$1);
var G__23657 = c__8541__auto___23655;
var G__23658 = cljs.core.count.call(null,c__8541__auto___23655);
var G__23659 = (0);
seq__23375_23640 = G__23656;
chunk__23376_23641 = G__23657;
count__23377_23642 = G__23658;
i__23378_23643 = G__23659;
continue;
} else {
var vec__23382_23660 = cljs.core.first.call(null,seq__23375_23654__$1);
var _QMARK_sch_23661 = cljs.core.nth.call(null,vec__23382_23660,(0),null);
var _udt_23662 = cljs.core.nth.call(null,vec__23382_23660,(1),null);
var temp__5278__auto___23663__$1 = _QMARK_sch_23661;
if(cljs.core.truth_(temp__5278__auto___23663__$1)){
var sch_23664 = temp__5278__auto___23663__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_23664);
} else {
}

var G__23665 = cljs.core.next.call(null,seq__23375_23654__$1);
var G__23666 = null;
var G__23667 = (0);
var G__23668 = (0);
seq__23375_23640 = G__23665;
chunk__23376_23641 = G__23666;
count__23377_23642 = G__23667;
i__23378_23643 = G__23668;
continue;
}
} else {
}
}
break;
}

var seq__23385_23669 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_23633], null))));
var chunk__23386_23670 = null;
var count__23387_23671 = (0);
var i__23388_23672 = (0);
while(true){
if((i__23388_23672 < count__23387_23671)){
var vec__23389_23673 = cljs.core._nth.call(null,chunk__23386_23670,i__23388_23672);
var _QMARK_sch_23674 = cljs.core.nth.call(null,vec__23389_23673,(0),null);
var _udt_23675 = cljs.core.nth.call(null,vec__23389_23673,(1),null);
var temp__5278__auto___23676 = _QMARK_sch_23674;
if(cljs.core.truth_(temp__5278__auto___23676)){
var sch_23677 = temp__5278__auto___23676;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_23677);
} else {
}

var G__23678 = seq__23385_23669;
var G__23679 = chunk__23386_23670;
var G__23680 = count__23387_23671;
var G__23681 = (i__23388_23672 + (1));
seq__23385_23669 = G__23678;
chunk__23386_23670 = G__23679;
count__23387_23671 = G__23680;
i__23388_23672 = G__23681;
continue;
} else {
var temp__5278__auto___23682 = cljs.core.seq.call(null,seq__23385_23669);
if(temp__5278__auto___23682){
var seq__23385_23683__$1 = temp__5278__auto___23682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23385_23683__$1)){
var c__8541__auto___23684 = cljs.core.chunk_first.call(null,seq__23385_23683__$1);
var G__23685 = cljs.core.chunk_rest.call(null,seq__23385_23683__$1);
var G__23686 = c__8541__auto___23684;
var G__23687 = cljs.core.count.call(null,c__8541__auto___23684);
var G__23688 = (0);
seq__23385_23669 = G__23685;
chunk__23386_23670 = G__23686;
count__23387_23671 = G__23687;
i__23388_23672 = G__23688;
continue;
} else {
var vec__23392_23689 = cljs.core.first.call(null,seq__23385_23683__$1);
var _QMARK_sch_23690 = cljs.core.nth.call(null,vec__23392_23689,(0),null);
var _udt_23691 = cljs.core.nth.call(null,vec__23392_23689,(1),null);
var temp__5278__auto___23692__$1 = _QMARK_sch_23690;
if(cljs.core.truth_(temp__5278__auto___23692__$1)){
var sch_23693 = temp__5278__auto___23692__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_23693);
} else {
}

var G__23694 = cljs.core.next.call(null,seq__23385_23683__$1);
var G__23695 = null;
var G__23696 = (0);
var G__23697 = (0);
seq__23385_23669 = G__23694;
chunk__23386_23670 = G__23695;
count__23387_23671 = G__23696;
i__23388_23672 = G__23697;
continue;
}
} else {
}
}
break;
}
} else {
var seq__23395_23698 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__23396_23699 = null;
var count__23397_23700 = (0);
var i__23398_23701 = (0);
while(true){
if((i__23398_23701 < count__23397_23700)){
var conn_type_23702 = cljs.core._nth.call(null,chunk__23396_23699,i__23398_23701);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_23702,uid_23633], null),((function (seq__23395_23698,chunk__23396_23699,count__23397_23700,i__23398_23701,conn_type_23702,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_23637])], null);
} else {
var vec__23399 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__23399,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__23399,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_23637)], null);
}
});})(seq__23395_23698,chunk__23396_23699,count__23397_23700,i__23398_23701,conn_type_23702,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__23703 = seq__23395_23698;
var G__23704 = chunk__23396_23699;
var G__23705 = count__23397_23700;
var G__23706 = (i__23398_23701 + (1));
seq__23395_23698 = G__23703;
chunk__23396_23699 = G__23704;
count__23397_23700 = G__23705;
i__23398_23701 = G__23706;
continue;
} else {
var temp__5278__auto___23707 = cljs.core.seq.call(null,seq__23395_23698);
if(temp__5278__auto___23707){
var seq__23395_23708__$1 = temp__5278__auto___23707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23395_23708__$1)){
var c__8541__auto___23709 = cljs.core.chunk_first.call(null,seq__23395_23708__$1);
var G__23710 = cljs.core.chunk_rest.call(null,seq__23395_23708__$1);
var G__23711 = c__8541__auto___23709;
var G__23712 = cljs.core.count.call(null,c__8541__auto___23709);
var G__23713 = (0);
seq__23395_23698 = G__23710;
chunk__23396_23699 = G__23711;
count__23397_23700 = G__23712;
i__23398_23701 = G__23713;
continue;
} else {
var conn_type_23714 = cljs.core.first.call(null,seq__23395_23708__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_23714,uid_23633], null),((function (seq__23395_23698,chunk__23396_23699,count__23397_23700,i__23398_23701,conn_type_23714,seq__23395_23708__$1,temp__5278__auto___23707,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_23637])], null);
} else {
var vec__23402 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__23402,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__23402,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_23637)], null);
}
});})(seq__23395_23698,chunk__23396_23699,count__23397_23700,i__23398_23701,conn_type_23714,seq__23395_23708__$1,temp__5278__auto___23707,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__23715 = cljs.core.next.call(null,seq__23395_23708__$1);
var G__23716 = null;
var G__23717 = (0);
var G__23718 = (0);
seq__23395_23698 = G__23715;
chunk__23396_23699 = G__23716;
count__23397_23700 = G__23717;
i__23398_23701 = G__23718;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_23719 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_23720 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__16454__auto___23721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23409){
var state_val_23410 = (state_23409[(1)]);
if((state_val_23410 === (1))){
var state_23409__$1 = state_23409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23409__$1,(2),ws_timeout_23719);
} else {
if((state_val_23410 === (2))){
var inst_23406 = (state_23409[(2)]);
var inst_23407 = flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_23409__$1 = (function (){var statearr_23411 = state_23409;
(statearr_23411[(7)] = inst_23406);

return statearr_23411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23409__$1,inst_23407);
} else {
return null;
}
}
});})(c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23412 = [null,null,null,null,null,null,null,null];
(statearr_23412[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23412[(1)] = (1));

return statearr_23412;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23409){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23413){if((e23413 instanceof Object)){
var ex__16368__auto__ = e23413;
var statearr_23414_23722 = state_23409;
(statearr_23414_23722[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23723 = state_23409;
state_23409 = G__23723;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23409){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23415 = f__16455__auto__.call(null);
(statearr_23415[(6)] = c__16454__auto___23721);

return statearr_23415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___23721,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__16454__auto___23724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (1))){
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23420__$1,(2),ajax_timeout_23720);
} else {
if((state_val_23421 === (2))){
var inst_23417 = (state_23420[(2)]);
var inst_23418 = flush_buffer_BANG__23638.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_23420__$1 = (function (){var statearr_23422 = state_23420;
(statearr_23422[(7)] = inst_23417);

return statearr_23422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
return null;
}
}
});})(c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23423 = [null,null,null,null,null,null,null,null];
(statearr_23423[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23423[(1)] = (1));

return statearr_23423;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23420){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23424){if((e23424 instanceof Object)){
var ex__16368__auto__ = e23424;
var statearr_23425_23725 = state_23420;
(statearr_23425_23725[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23726 = state_23420;
state_23420 = G__23726;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23426 = f__16455__auto__.call(null);
(statearr_23426[(6)] = c__16454__auto___23724);

return statearr_23426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___23724,ws_timeout_23719,ajax_timeout_23720,uid_23633,__23634,__23635__$1,__23636__$2,ev_uuid_23637,flush_buffer_BANG__23638,vec__23363,map__23366,map__23366__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__23632 = function (user_id,ev,var_args){
var p__23362 = null;
if (arguments.length > 2) {
var G__23727__i = 0, G__23727__a = new Array(arguments.length -  2);
while (G__23727__i < G__23727__a.length) {G__23727__a[G__23727__i] = arguments[G__23727__i + 2]; ++G__23727__i;}
  p__23362 = new cljs.core.IndexedSeq(G__23727__a,0,null);
} 
return G__23632__delegate.call(this,user_id,ev,p__23362);};
G__23632.cljs$lang$maxFixedArity = 2;
G__23632.cljs$lang$applyTo = (function (arglist__23728){
var user_id = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var ev = cljs.core.first(arglist__23728);
var p__23362 = cljs.core.rest(arglist__23728);
return G__23632__delegate(user_id,ev,p__23362);
});
G__23632.cljs$core$IFn$_invoke$arity$variadic = G__23632__delegate;
return G__23632;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__23427 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__23427,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__23427,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",521,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,444261707);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5278__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5278__auto__)){
var ms = temp__5278__auto__;
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23435){
var state_val_23436 = (state_23435[(1)]);
if((state_val_23436 === (1))){
var inst_23430 = cljs.core.async.timeout.call(null,ms);
var state_23435__$1 = state_23435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23435__$1,(2),inst_23430);
} else {
if((state_val_23436 === (2))){
var inst_23432 = (state_23435[(2)]);
var inst_23433 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_23435__$1 = (function (){var statearr_23437 = state_23435;
(statearr_23437[(7)] = inst_23432);

return statearr_23437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23435__$1,inst_23433);
} else {
return null;
}
}
});})(c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23438 = [null,null,null,null,null,null,null,null];
(statearr_23438[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23438[(1)] = (1));

return statearr_23438;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23435){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23439){if((e23439 instanceof Object)){
var ex__16368__auto__ = e23439;
var statearr_23440_23729 = state_23435;
(statearr_23440_23729[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23730 = state_23435;
state_23435 = G__23730;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23435){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23441 = f__16455__auto__.call(null);
(statearr_23441[(6)] = c__16454__auto__);

return statearr_23441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,ms,temp__5278__auto__,params,ppstr,client_id,vec__23427,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__16454__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1638747462);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",577,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1963813489);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,802544100);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__5278__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5278__auto__)){
var ms = temp__5278__auto__;
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23477){
var state_val_23478 = (state_23477[(1)]);
if((state_val_23478 === (7))){
var inst_23473 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23479_23731 = state_23477__$1;
(statearr_23479_23731[(2)] = inst_23473);

(statearr_23479_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (1))){
var inst_23442 = udt_open;
var state_23477__$1 = (function (){var statearr_23480 = state_23477;
(statearr_23480[(7)] = inst_23442);

return statearr_23480;
})();
var statearr_23481_23732 = state_23477__$1;
(statearr_23481_23732[(2)] = null);

(statearr_23481_23732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (4))){
var inst_23451 = (state_23477[(8)]);
var inst_23446 = (state_23477[(2)]);
var inst_23447 = cljs.core.deref.call(null,conns_);
var inst_23448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23449 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_23450 = (new cljs.core.PersistentVector(null,3,(5),inst_23448,inst_23449,null));
var inst_23451__$1 = cljs.core.get_in.call(null,inst_23447,inst_23450);
var state_23477__$1 = (function (){var statearr_23482 = state_23477;
(statearr_23482[(8)] = inst_23451__$1);

(statearr_23482[(9)] = inst_23446);

return statearr_23482;
})();
if(cljs.core.truth_(inst_23451__$1)){
var statearr_23483_23733 = state_23477__$1;
(statearr_23483_23733[(1)] = (5));

} else {
var statearr_23484_23734 = state_23477__$1;
(statearr_23484_23734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (13))){
var inst_23457 = (state_23477[(10)]);
var inst_23466 = (state_23477[(2)]);
var inst_23442 = inst_23457;
var state_23477__$1 = (function (){var statearr_23485 = state_23477;
(statearr_23485[(7)] = inst_23442);

(statearr_23485[(11)] = inst_23466);

return statearr_23485;
})();
var statearr_23486_23735 = state_23477__$1;
(statearr_23486_23735[(2)] = null);

(statearr_23486_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (6))){
var state_23477__$1 = state_23477;
var statearr_23487_23736 = state_23477__$1;
(statearr_23487_23736[(2)] = null);

(statearr_23487_23736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (3))){
var inst_23475 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23477__$1,inst_23475);
} else {
if((state_val_23478 === (12))){
var state_23477__$1 = state_23477;
var statearr_23488_23737 = state_23477__$1;
(statearr_23488_23737[(2)] = null);

(statearr_23488_23737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (2))){
var inst_23444 = cljs.core.async.timeout.call(null,ms);
var state_23477__$1 = state_23477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23477__$1,(4),inst_23444);
} else {
if((state_val_23478 === (11))){
var inst_23462 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_23463 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_23462);
var state_23477__$1 = state_23477;
var statearr_23489_23738 = state_23477__$1;
(statearr_23489_23738[(2)] = inst_23463);

(statearr_23489_23738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (9))){
var state_23477__$1 = state_23477;
var statearr_23490_23739 = state_23477__$1;
(statearr_23490_23739[(2)] = null);

(statearr_23490_23739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (5))){
var inst_23451 = (state_23477[(8)]);
var inst_23456 = cljs.core.nth.call(null,inst_23451,(0),null);
var inst_23457 = cljs.core.nth.call(null,inst_23451,(1),null);
var inst_23458 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_23477__$1 = (function (){var statearr_23491 = state_23477;
(statearr_23491[(10)] = inst_23457);

(statearr_23491[(12)] = inst_23456);

return statearr_23491;
})();
if(cljs.core.truth_(inst_23458)){
var statearr_23492_23740 = state_23477__$1;
(statearr_23492_23740[(1)] = (8));

} else {
var statearr_23493_23741 = state_23477__$1;
(statearr_23493_23741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (10))){
var inst_23470 = (state_23477[(2)]);
var state_23477__$1 = state_23477;
var statearr_23494_23742 = state_23477__$1;
(statearr_23494_23742[(2)] = inst_23470);

(statearr_23494_23742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23478 === (8))){
var inst_23442 = (state_23477[(7)]);
var inst_23457 = (state_23477[(10)]);
var inst_23460 = cljs.core._EQ_.call(null,inst_23457,inst_23442);
var state_23477__$1 = state_23477;
if(inst_23460){
var statearr_23495_23743 = state_23477__$1;
(statearr_23495_23743[(1)] = (11));

} else {
var statearr_23496_23744 = state_23477__$1;
(statearr_23496_23744[(1)] = (12));

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
});})(c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23497[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23497[(1)] = (1));

return statearr_23497;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23477){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23498){if((e23498 instanceof Object)){
var ex__16368__auto__ = e23498;
var statearr_23499_23745 = state_23477;
(statearr_23499_23745[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23746 = state_23477;
state_23477 = G__23746;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23477){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23500 = f__16455__auto__.call(null);
(statearr_23500[(6)] = c__16454__auto__);

return statearr_23500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__16454__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-478463759);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__7610__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__5278__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5278__auto__)){
var ms = temp__5278__auto__;
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23526){
var state_val_23527 = (state_23526[(1)]);
if((state_val_23527 === (1))){
var inst_23501 = cljs.core.async.timeout.call(null,ms);
var state_23526__$1 = state_23526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23526__$1,(2),inst_23501);
} else {
if((state_val_23527 === (2))){
var inst_23508 = (state_23526[(7)]);
var inst_23503 = (state_23526[(2)]);
var inst_23504 = cljs.core.deref.call(null,conns_);
var inst_23505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23506 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_23507 = (new cljs.core.PersistentVector(null,3,(5),inst_23505,inst_23506,null));
var inst_23508__$1 = cljs.core.get_in.call(null,inst_23504,inst_23507);
var state_23526__$1 = (function (){var statearr_23528 = state_23526;
(statearr_23528[(8)] = inst_23503);

(statearr_23528[(7)] = inst_23508__$1);

return statearr_23528;
})();
if(cljs.core.truth_(inst_23508__$1)){
var statearr_23529_23747 = state_23526__$1;
(statearr_23529_23747[(1)] = (3));

} else {
var statearr_23530_23748 = state_23526__$1;
(statearr_23530_23748[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (3))){
var inst_23508 = (state_23526[(7)]);
var inst_23513 = cljs.core.nth.call(null,inst_23508,(0),null);
var inst_23514 = cljs.core.nth.call(null,inst_23508,(1),null);
var inst_23515 = cljs.core._EQ_.call(null,inst_23514,udt_open);
var state_23526__$1 = (function (){var statearr_23531 = state_23526;
(statearr_23531[(9)] = inst_23513);

return statearr_23531;
})();
if(inst_23515){
var statearr_23532_23749 = state_23526__$1;
(statearr_23532_23749[(1)] = (6));

} else {
var statearr_23533_23750 = state_23526__$1;
(statearr_23533_23750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (4))){
var state_23526__$1 = state_23526;
var statearr_23534_23751 = state_23526__$1;
(statearr_23534_23751[(2)] = null);

(statearr_23534_23751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (5))){
var inst_23524 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23526__$1,inst_23524);
} else {
if((state_val_23527 === (6))){
var inst_23517 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_23518 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_23517);
var state_23526__$1 = state_23526;
var statearr_23535_23752 = state_23526__$1;
(statearr_23535_23752[(2)] = inst_23518);

(statearr_23535_23752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (7))){
var state_23526__$1 = state_23526;
var statearr_23536_23753 = state_23526__$1;
(statearr_23536_23753[(2)] = null);

(statearr_23536_23753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (8))){
var inst_23521 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
var statearr_23537_23754 = state_23526__$1;
(statearr_23537_23754[(2)] = inst_23521);

(statearr_23537_23754[(1)] = (5));


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
});})(c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23538[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23538[(1)] = (1));

return statearr_23538;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23526){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23539){if((e23539 instanceof Object)){
var ex__16368__auto__ = e23539;
var statearr_23540_23755 = state_23526;
(statearr_23540_23755[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23756 = state_23526;
state_23526 = G__23756;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23526){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23541 = f__16455__auto__.call(null);
(statearr_23541[(6)] = c__16454__auto__);

return statearr_23541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,ms,temp__5278__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__16454__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__23542 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__23542,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__23542,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__23542,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",645,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__23542,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__23542,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-813786972);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__23542,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",654,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,378006569);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_23596){
var state_val_23597 = (state_23596[(1)]);
if((state_val_23597 === (7))){
var state_23596__$1 = state_23596;
var statearr_23598_23757 = state_23596__$1;
(statearr_23598_23757[(2)] = null);

(statearr_23598_23757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (1))){
var inst_23545 = cljs.core.async.timeout.call(null,(5000));
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23596__$1,(2),inst_23545);
} else {
if((state_val_23597 === (4))){
var state_23596__$1 = state_23596;
var statearr_23599_23758 = state_23596__$1;
(statearr_23599_23758[(2)] = null);

(statearr_23599_23758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (13))){
var state_23596__$1 = state_23596;
var statearr_23600_23759 = state_23596__$1;
(statearr_23600_23759[(2)] = null);

(statearr_23600_23759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (6))){
var inst_23556 = (state_23596[(7)]);
var inst_23573 = (state_23596[(8)]);
var inst_23555 = (state_23596[(9)]);
var inst_23557 = (state_23596[(10)]);
var inst_23568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23569 = [conn_type,uid,client_id];
var inst_23570 = (new cljs.core.PersistentVector(null,3,(5),inst_23568,inst_23569,null));
var inst_23572 = (function (){var vec__23548 = inst_23555;
var __QMARK_sch = inst_23556;
var udt_t1 = inst_23557;
return ((function (vec__23548,__QMARK_sch,udt_t1,inst_23556,inst_23573,inst_23555,inst_23557,inst_23568,inst_23569,inst_23570,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__23571){
var vec__23601 = p__23571;
var _sch = cljs.core.nth.call(null,vec__23601,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__23601,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__23548,__QMARK_sch,udt_t1,inst_23556,inst_23573,inst_23555,inst_23557,inst_23568,inst_23569,inst_23570,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_23573__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_23570,inst_23572);
var state_23596__$1 = (function (){var statearr_23604 = state_23596;
(statearr_23604[(8)] = inst_23573__$1);

return statearr_23604;
})();
if(cljs.core.truth_(inst_23573__$1)){
var statearr_23605_23760 = state_23596__$1;
(statearr_23605_23760[(1)] = (9));

} else {
var statearr_23606_23761 = state_23596__$1;
(statearr_23606_23761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (3))){
var inst_23556 = (state_23596[(7)]);
var inst_23555 = (state_23596[(9)]);
var inst_23557 = (state_23596[(10)]);
var inst_23560 = (function (){var vec__23548 = inst_23555;
var __QMARK_sch = inst_23556;
var udt_t1 = inst_23557;
return ((function (vec__23548,__QMARK_sch,udt_t1,inst_23556,inst_23555,inst_23557,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__23548,__QMARK_sch,udt_t1,inst_23556,inst_23555,inst_23557,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_23561 = (new cljs.core.Delay(inst_23560,null));
var inst_23562 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4946840489680476349.clj",668,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_23561,null,194240889);
var state_23596__$1 = state_23596;
var statearr_23607_23762 = state_23596__$1;
(statearr_23607_23762[(2)] = inst_23562);

(statearr_23607_23762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (12))){
var inst_23582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23583 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_23584 = (new cljs.core.PersistentVector(null,2,(5),inst_23582,inst_23583,null));
var inst_23585 = receive_event_msg_BANG_.call(null,inst_23584);
var state_23596__$1 = state_23596;
var statearr_23608_23763 = state_23596__$1;
(statearr_23608_23763[(2)] = inst_23585);

(statearr_23608_23763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (2))){
var inst_23555 = (state_23596[(9)]);
var inst_23547 = (state_23596[(2)]);
var inst_23551 = cljs.core.deref.call(null,conns_);
var inst_23552 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23553 = [conn_type,uid,client_id];
var inst_23554 = (new cljs.core.PersistentVector(null,3,(5),inst_23552,inst_23553,null));
var inst_23555__$1 = cljs.core.get_in.call(null,inst_23551,inst_23554);
var inst_23556 = cljs.core.nth.call(null,inst_23555__$1,(0),null);
var inst_23557 = cljs.core.nth.call(null,inst_23555__$1,(1),null);
var inst_23558 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_23596__$1 = (function (){var statearr_23609 = state_23596;
(statearr_23609[(11)] = inst_23547);

(statearr_23609[(7)] = inst_23556);

(statearr_23609[(9)] = inst_23555__$1);

(statearr_23609[(10)] = inst_23557);

return statearr_23609;
})();
if(cljs.core.truth_(inst_23558)){
var statearr_23610_23764 = state_23596__$1;
(statearr_23610_23764[(1)] = (3));

} else {
var statearr_23611_23765 = state_23596__$1;
(statearr_23611_23765[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (11))){
var inst_23591 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23612_23766 = state_23596__$1;
(statearr_23612_23766[(2)] = inst_23591);

(statearr_23612_23766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (9))){
var inst_23556 = (state_23596[(7)]);
var inst_23573 = (state_23596[(8)]);
var inst_23555 = (state_23596[(9)]);
var inst_23557 = (state_23596[(10)]);
var inst_23575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23576 = [conn_type,uid];
var inst_23577 = (new cljs.core.PersistentVector(null,2,(5),inst_23575,inst_23576,null));
var inst_23578 = (function (){var vec__23548 = inst_23555;
var __QMARK_sch = inst_23556;
var udt_t1 = inst_23557;
var disconnect_QMARK_ = inst_23573;
return ((function (vec__23548,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_23556,inst_23573,inst_23555,inst_23557,inst_23575,inst_23576,inst_23577,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__23548,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_23556,inst_23573,inst_23555,inst_23557,inst_23575,inst_23576,inst_23577,state_val_23597,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_23579 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_23577,inst_23578);
var inst_23580 = upd_connected_uid_BANG_.call(null,uid);
var state_23596__$1 = (function (){var statearr_23613 = state_23596;
(statearr_23613[(12)] = inst_23579);

return statearr_23613;
})();
if(cljs.core.truth_(inst_23580)){
var statearr_23614_23767 = state_23596__$1;
(statearr_23614_23767[(1)] = (12));

} else {
var statearr_23615_23768 = state_23596__$1;
(statearr_23615_23768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (5))){
var inst_23557 = (state_23596[(10)]);
var inst_23565 = (state_23596[(2)]);
var inst_23566 = cljs.core._EQ_.call(null,inst_23557,udt_close);
var state_23596__$1 = (function (){var statearr_23616 = state_23596;
(statearr_23616[(13)] = inst_23565);

return statearr_23616;
})();
if(inst_23566){
var statearr_23617_23769 = state_23596__$1;
(statearr_23617_23769[(1)] = (6));

} else {
var statearr_23618_23770 = state_23596__$1;
(statearr_23618_23770[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (14))){
var inst_23588 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23619_23771 = state_23596__$1;
(statearr_23619_23771[(2)] = inst_23588);

(statearr_23619_23771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (10))){
var state_23596__$1 = state_23596;
var statearr_23620_23772 = state_23596__$1;
(statearr_23620_23772[(2)] = null);

(statearr_23620_23772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23597 === (8))){
var inst_23594 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23596__$1,inst_23594);
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
});})(c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__16364__auto__,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_23621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23621[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_23621[(1)] = (1));

return statearr_23621;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23596){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23622){if((e23622 instanceof Object)){
var ex__16368__auto__ = e23622;
var statearr_23623_23773 = state_23596;
(statearr_23623_23773[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23774 = state_23596;
state_23596 = G__23774;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23596){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__16456__auto__ = (function (){var statearr_23624 = f__16455__auto__.call(null);
(statearr_23624[(6)] = c__16454__auto__);

return statearr_23624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__16454__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",690,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1261892517);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__23341,map__23344,map__23344__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq23338){
var G__23339 = cljs.core.first.call(null,seq23338);
var seq23338__$1 = cljs.core.next.call(null,seq23338);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23339,seq23338__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",696,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,459845077);

var seq__23775 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__23776 = null;
var count__23777 = (0);
var i__23778 = (0);
while(true){
if((i__23778 < count__23777)){
var vec__23779 = cljs.core._nth.call(null,chunk__23776,i__23778);
var client_id = cljs.core.nth.call(null,vec__23779,(0),null);
var vec__23782 = cljs.core.nth.call(null,vec__23779,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__23782,(0),null);
var _udt = cljs.core.nth.call(null,vec__23782,(1),null);
var temp__5278__auto___23791 = _QMARK_sch;
if(cljs.core.truth_(temp__5278__auto___23791)){
var sch_23792 = temp__5278__auto___23791;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_23792,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__23793 = seq__23775;
var G__23794 = chunk__23776;
var G__23795 = count__23777;
var G__23796 = (i__23778 + (1));
seq__23775 = G__23793;
chunk__23776 = G__23794;
count__23777 = G__23795;
i__23778 = G__23796;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__23775);
if(temp__5278__auto__){
var seq__23775__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23775__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__23775__$1);
var G__23797 = cljs.core.chunk_rest.call(null,seq__23775__$1);
var G__23798 = c__8541__auto__;
var G__23799 = cljs.core.count.call(null,c__8541__auto__);
var G__23800 = (0);
seq__23775 = G__23797;
chunk__23776 = G__23798;
count__23777 = G__23799;
i__23778 = G__23800;
continue;
} else {
var vec__23785 = cljs.core.first.call(null,seq__23775__$1);
var client_id = cljs.core.nth.call(null,vec__23785,(0),null);
var vec__23788 = cljs.core.nth.call(null,vec__23785,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__23788,(0),null);
var _udt = cljs.core.nth.call(null,vec__23788,(1),null);
var temp__5278__auto___23801__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5278__auto___23801__$1)){
var sch_23802 = temp__5278__auto___23801__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_23802,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__23803 = cljs.core.next.call(null,seq__23775__$1);
var G__23804 = null;
var G__23805 = (0);
var G__23806 = (0);
seq__23775 = G__23803;
chunk__23776 = G__23804;
count__23777 = G__23805;
i__23778 = G__23806;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,2129148456);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_23853){
var state_val_23854 = (state_23853[(1)]);
if((state_val_23854 === (7))){
var inst_23815 = (state_23853[(7)]);
var inst_23808 = (state_23853[(8)]);
var inst_23809 = (state_23853[(9)]);
var inst_23825 = (function (){var n = inst_23808;
var client_ids_satisfied = inst_23809;
var _QMARK_pulled = inst_23815;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_23815,inst_23808,inst_23809,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__23824){
var vec__23855 = p__23824;
var _QMARK_sch = cljs.core.nth.call(null,vec__23855,(0),null);
var _udt = cljs.core.nth.call(null,vec__23855,(1),null);
var sent_QMARK_ = (function (){var temp__5278__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5278__auto__)){
var sch = temp__5278__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_23815,inst_23808,inst_23809,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_23826 = cljs.core.PersistentHashSet.EMPTY;
var inst_23827 = cljs.core.reduce_kv.call(null,inst_23825,inst_23826,inst_23815);
var state_23853__$1 = state_23853;
var statearr_23858_23888 = state_23853__$1;
(statearr_23858_23888[(2)] = inst_23827);

(statearr_23858_23888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (1))){
var inst_23807 = cljs.core.PersistentHashSet.EMPTY;
var inst_23808 = (0);
var inst_23809 = inst_23807;
var state_23853__$1 = (function (){var statearr_23859 = state_23853;
(statearr_23859[(8)] = inst_23808);

(statearr_23859[(9)] = inst_23809);

return statearr_23859;
})();
var statearr_23860_23889 = state_23853__$1;
(statearr_23860_23889[(2)] = null);

(statearr_23860_23889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (4))){
var state_23853__$1 = state_23853;
var statearr_23861_23890 = state_23853__$1;
(statearr_23861_23890[(2)] = true);

(statearr_23861_23890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (15))){
var inst_23846 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23862_23891 = state_23853__$1;
(statearr_23862_23891[(2)] = inst_23846);

(statearr_23862_23891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (13))){
var inst_23832 = (state_23853[(10)]);
var inst_23837 = cljs.core.rand_int.call(null,inst_23832);
var inst_23838 = (inst_23832 + inst_23837);
var inst_23839 = cljs.core.async.timeout.call(null,inst_23838);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23853__$1,(16),inst_23839);
} else {
if((state_val_23854 === (6))){
var inst_23815 = (state_23853[(7)]);
var inst_23822 = (state_23853[(2)]);
var state_23853__$1 = (function (){var statearr_23863 = state_23853;
(statearr_23863[(11)] = inst_23822);

return statearr_23863;
})();
if(cljs.core.truth_(inst_23815)){
var statearr_23864_23892 = state_23853__$1;
(statearr_23864_23892[(1)] = (7));

} else {
var statearr_23865_23893 = state_23853__$1;
(statearr_23865_23893[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (3))){
var inst_23851 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23853__$1,inst_23851);
} else {
if((state_val_23854 === (12))){
var inst_23849 = (state_23853[(2)]);
var state_23853__$1 = state_23853;
var statearr_23866_23894 = state_23853__$1;
(statearr_23866_23894[(2)] = inst_23849);

(statearr_23866_23894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (2))){
var inst_23815 = (state_23853[(7)]);
var inst_23808 = (state_23853[(8)]);
var inst_23809 = (state_23853[(9)]);
var inst_23811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23812 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_23813 = (new cljs.core.PersistentVector(null,2,(5),inst_23811,inst_23812,null));
var inst_23814 = (function (){var n = inst_23808;
var client_ids_satisfied = inst_23809;
return ((function (n,client_ids_satisfied,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__23867 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__23867,(0),null);
var udt = cljs.core.nth.call(null,vec__23867,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_23815__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_23813,inst_23814);
var inst_23816 = (function (){var n = inst_23808;
var client_ids_satisfied = inst_23809;
var _QMARK_pulled = inst_23815__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,inst_23814,inst_23815__$1,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__7610__auto__ = (x == null);
if(or__7610__auto__){
return or__7610__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_23815,inst_23808,inst_23809,inst_23811,inst_23812,inst_23813,inst_23814,inst_23815__$1,state_val_23854,c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_23817 = inst_23816.call(null,inst_23815__$1);
var state_23853__$1 = (function (){var statearr_23870 = state_23853;
(statearr_23870[(7)] = inst_23815__$1);

return statearr_23870;
})();
if(cljs.core.truth_(inst_23817)){
var statearr_23871_23895 = state_23853__$1;
(statearr_23871_23895[(1)] = (4));

} else {
var statearr_23872_23896 = state_23853__$1;
(statearr_23872_23896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (11))){
var state_23853__$1 = state_23853;
var statearr_23873_23897 = state_23853__$1;
(statearr_23873_23897[(2)] = null);

(statearr_23873_23897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (9))){
var inst_23832 = (state_23853[(10)]);
var inst_23808 = (state_23853[(8)]);
var inst_23809 = (state_23853[(9)]);
var inst_23830 = (state_23853[(2)]);
var inst_23831 = cljs.core.into.call(null,inst_23809,inst_23830);
var inst_23832__$1 = cljs.core.get.call(null,ms_backoffs,inst_23808);
var state_23853__$1 = (function (){var statearr_23874 = state_23853;
(statearr_23874[(10)] = inst_23832__$1);

(statearr_23874[(12)] = inst_23831);

return statearr_23874;
})();
if(cljs.core.truth_(inst_23832__$1)){
var statearr_23875_23898 = state_23853__$1;
(statearr_23875_23898[(1)] = (10));

} else {
var statearr_23876_23899 = state_23853__$1;
(statearr_23876_23899[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (5))){
var inst_23815 = (state_23853[(7)]);
var inst_23820 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_23815,null,null);
var state_23853__$1 = state_23853;
var statearr_23877_23900 = state_23853__$1;
(statearr_23877_23900[(2)] = inst_23820);

(statearr_23877_23900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (14))){
var state_23853__$1 = state_23853;
var statearr_23878_23901 = state_23853__$1;
(statearr_23878_23901[(2)] = null);

(statearr_23878_23901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (16))){
var inst_23808 = (state_23853[(8)]);
var inst_23831 = (state_23853[(12)]);
var inst_23841 = (state_23853[(2)]);
var inst_23842 = (inst_23808 + (1));
var inst_23808__$1 = inst_23842;
var inst_23809 = inst_23831;
var state_23853__$1 = (function (){var statearr_23879 = state_23853;
(statearr_23879[(13)] = inst_23841);

(statearr_23879[(8)] = inst_23808__$1);

(statearr_23879[(9)] = inst_23809);

return statearr_23879;
})();
var statearr_23880_23902 = state_23853__$1;
(statearr_23880_23902[(2)] = null);

(statearr_23880_23902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (10))){
var inst_23831 = (state_23853[(12)]);
var inst_23834 = cljs.core.complement.call(null,inst_23831);
var inst_23835 = taoensso.encore.rsome.call(null,inst_23834,client_ids_unsatisfied);
var state_23853__$1 = state_23853;
if(cljs.core.truth_(inst_23835)){
var statearr_23881_23903 = state_23853__$1;
(statearr_23881_23903[(1)] = (13));

} else {
var statearr_23882_23904 = state_23853__$1;
(statearr_23882_23904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23854 === (8))){
var state_23853__$1 = state_23853;
var statearr_23883_23905 = state_23853__$1;
(statearr_23883_23905[(2)] = null);

(statearr_23883_23905[(1)] = (9));


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
});})(c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__16364__auto__,c__16454__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____0 = (function (){
var statearr_23884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23884[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__);

(statearr_23884[(1)] = (1));

return statearr_23884;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____1 = (function (state_23853){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e23885){if((e23885 instanceof Object)){
var ex__16368__auto__ = e23885;
var statearr_23886_23906 = state_23853;
(statearr_23886_23906[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23907 = state_23853;
state_23853 = G__23907;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__ = function(state_23853){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____1.call(this,state_23853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__16456__auto__ = (function (){var statearr_23887 = f__16455__auto__.call(null);
(statearr_23887[(6)] = c__16454__auto__);

return statearr_23887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__16454__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__8343__auto__ = (((chsk == null))?null:chsk);
var m__8344__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,chsk);
} else {
var m__8344__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__8343__auto__ = (((chsk == null))?null:chsk);
var m__8344__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,chsk,reason);
} else {
var m__8344__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__8343__auto__ = (((chsk == null))?null:chsk);
var m__8344__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,chsk);
} else {
var m__8344__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__8343__auto__ = (((chsk == null))?null:chsk);
var m__8344__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,chsk,ev,opts);
} else {
var m__8344__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__23909 = arguments.length;
switch (G__23909) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",783,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-293191432);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",788,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-2100456544);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join('')),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5278__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto__)){
var cb_uuid = temp__5278__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5278__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__5278__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__23911 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__23911,(0),null);
var new_state = cljs.core.nth.call(null,vec__23911,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_23916 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23914){if((e23914 instanceof Error)){
var e = e23914;
return e;
} else {
throw e23914;

}
}})();
if((e_23916 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(map? state)",state,e_23916,null);
}

var e_23917 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23915){if((e23915 instanceof Error)){
var e = e23915;
return e;
} else {
throw e23915;

}
}})();
if((e_23917 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_23917,null);
}

if(cljs.core.truth_((function (){var or__7610__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_23922 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23918){if((e23918 instanceof Error)){
var e = e23918;
return e;
} else {
throw e23918;

}
}})();
if((e_23922 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_23922,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__23919 = ev;
var ev_id = cljs.core.nth.call(null,vec__23919,(0),null);
var _ = cljs.core.nth.call(null,vec__23919,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__23919,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname.call(null,ev_id)),".cb"].join('')),reply], null));
});
;})(vec__23919,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",868,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1954062304);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__23923 = cljs.core.seq.call(null,buffered_evs);
var chunk__23924 = null;
var count__23925 = (0);
var i__23926 = (0);
while(true){
if((i__23926 < count__23925)){
var ev = cljs.core._nth.call(null,chunk__23924,i__23926);
taoensso.sente.assert_event.call(null,ev);

var vec__23927_23933 = ev;
var id_23934 = cljs.core.nth.call(null,vec__23927_23933,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_23934),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23935 = seq__23923;
var G__23936 = chunk__23924;
var G__23937 = count__23925;
var G__23938 = (i__23926 + (1));
seq__23923 = G__23935;
chunk__23924 = G__23936;
count__23925 = G__23937;
i__23926 = G__23938;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__23923);
if(temp__5278__auto__){
var seq__23923__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23923__$1)){
var c__8541__auto__ = cljs.core.chunk_first.call(null,seq__23923__$1);
var G__23939 = cljs.core.chunk_rest.call(null,seq__23923__$1);
var G__23940 = c__8541__auto__;
var G__23941 = cljs.core.count.call(null,c__8541__auto__);
var G__23942 = (0);
seq__23923 = G__23939;
chunk__23924 = G__23940;
count__23925 = G__23941;
i__23926 = G__23942;
continue;
} else {
var ev = cljs.core.first.call(null,seq__23923__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__23930_23943 = ev;
var id_23944 = cljs.core.nth.call(null,vec__23930_23943,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_23944),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__23945 = cljs.core.next.call(null,seq__23923__$1);
var G__23946 = null;
var G__23947 = (0);
var G__23948 = (0);
seq__23923 = G__23945;
chunk__23924 = G__23946;
count__23925 = G__23947;
i__23926 = G__23948;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__7598__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__7598__auto__){
var vec__23952 = x;
var x1 = cljs.core.nth.call(null,vec__23952,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__7598__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_23966 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23956){if((e23956 instanceof Error)){
var e = e23956;
return e;
} else {
throw e23956;

}
}})();
if((e_23966 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_23966,null);
}

var e_23967 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23957){if((e23957 instanceof Error)){
var e = e23957;
return e;
} else {
throw e23957;

}
}})();
if((e_23967 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_23967,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1458382801);

var vec__23958 = clj;
var _ = cljs.core.nth.call(null,vec__23958,(0),null);
var vec__23961 = cljs.core.nth.call(null,vec__23958,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__23961,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__23961,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__23961,(2),null);
var map__23964 = chsk;
var map__23964__$1 = ((((!((map__23964 == null)))?((((map__23964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23964):map__23964);
var chs = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__23958,_,vec__23961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__23964,map__23964__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__23958,_,vec__23961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__23964,map__23964__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-1744120807);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__23958,_,vec__23961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__23964,map__23964__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__23955_SHARP_){
return cljs.core.merge.call(null,p1__23955_SHARP_,new_state);
});})(vec__23958,_,vec__23961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__23964,map__23964__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e23968){var e = e23968;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k23975,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__23979 = k23975;
var G__23979__$1 = (((G__23979 instanceof cljs.core.Keyword))?G__23979.fqn:null);
switch (G__23979__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23975,else__8301__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23974){
var self__ = this;
var G__23974__$1 = this;
return (new cljs.core.RecordIter((0),G__23974__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23976,other23977){
var self__ = this;
var this23976__$1 = this;
return (!((other23977 == null))) && ((this23976__$1.constructor === other23977.constructor)) && (cljs.core._EQ_.call(null,this23976__$1.client_id,other23977.client_id)) && (cljs.core._EQ_.call(null,this23976__$1.chs,other23977.chs)) && (cljs.core._EQ_.call(null,this23976__$1.params,other23977.params)) && (cljs.core._EQ_.call(null,this23976__$1.packer,other23977.packer)) && (cljs.core._EQ_.call(null,this23976__$1.url,other23977.url)) && (cljs.core._EQ_.call(null,this23976__$1.ws_kalive_ms,other23977.ws_kalive_ms)) && (cljs.core._EQ_.call(null,this23976__$1.state_,other23977.state_)) && (cljs.core._EQ_.call(null,this23976__$1.instance_handle_,other23977.instance_handle_)) && (cljs.core._EQ_.call(null,this23976__$1.retry_count_,other23977.retry_count_)) && (cljs.core._EQ_.call(null,this23976__$1.ever_opened_QMARK__,other23977.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this23976__$1.backoff_ms_fn,other23977.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this23976__$1.cbs_waiting_,other23977.cbs_waiting_)) && (cljs.core._EQ_.call(null,this23976__$1.socket_,other23977.socket_)) && (cljs.core._EQ_.call(null,this23976__$1.udt_last_comms_,other23977.udt_last_comms_)) && (cljs.core._EQ_.call(null,this23976__$1.__extmap,other23977.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__23974){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__23980 = cljs.core.keyword_identical_QMARK_;
var expr__23981 = k__8306__auto__;
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__23981))){
return (new taoensso.sente.ChWebSocket(G__23974,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__23974,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__23974,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__23974,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__23974,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__23974,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__23974,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__23974,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__23974,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__23974,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__23974,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__23974,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__23974,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23980.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__23981))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__23974,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__23974),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__23974){
var self__ = this;
var this__8297__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__23974,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__23969_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__23969_SHARP_,reason);
});})(chsk__$1))
);

var temp__5278__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5278__auto__)){
var s = temp__5278__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__23983 = opts;
var map__23983__$1 = ((((!((map__23983 == null)))?((((map__23983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23983):map__23983);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__23983__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__5278__auto___24062 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto___24062)){
var cb_uuid_24063 = temp__5278__auto___24062;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_24063], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e23985){if((e23985 instanceof Error)){
var e = e23985;
return e;
} else {
throw e23985;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5278__auto___24064__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5278__auto___24064__$1)){
var timeout_ms_24065 = temp__5278__auto___24064__$1;
var c__16454__auto___24066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (1))){
var inst_23986 = cljs.core.async.timeout.call(null,timeout_ms_24065);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(2),inst_23986);
} else {
if((state_val_23997 === (2))){
var inst_23989 = (state_23996[(7)]);
var inst_23988 = (state_23996[(2)]);
var inst_23989__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_23996__$1 = (function (){var statearr_23998 = state_23996;
(statearr_23998[(8)] = inst_23988);

(statearr_23998[(7)] = inst_23989__$1);

return statearr_23998;
})();
if(cljs.core.truth_(inst_23989__$1)){
var statearr_23999_24067 = state_23996__$1;
(statearr_23999_24067[(1)] = (3));

} else {
var statearr_24000_24068 = state_23996__$1;
(statearr_24000_24068[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (3))){
var inst_23989 = (state_23996[(7)]);
var inst_23991 = inst_23989.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_23996__$1 = state_23996;
var statearr_24001_24069 = state_23996__$1;
(statearr_24001_24069[(2)] = inst_23991);

(statearr_24001_24069[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (4))){
var state_23996__$1 = state_23996;
var statearr_24002_24070 = state_23996__$1;
(statearr_24002_24070[(2)] = null);

(statearr_24002_24070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var inst_23994 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
return null;
}
}
}
}
}
});})(c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__16364__auto__,c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_24003 = [null,null,null,null,null,null,null,null,null];
(statearr_24003[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_24003[(1)] = (1));

return statearr_24003;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_23996){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e24004){if((e24004 instanceof Object)){
var ex__16368__auto__ = e24004;
var statearr_24005_24071 = state_23996;
(statearr_24005_24071[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24072 = state_23996;
state_23996 = G__24072;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__16456__auto__ = (function (){var statearr_24006 = f__16455__auto__.call(null);
(statearr_24006[(6)] = c__16454__auto___24066);

return statearr_24006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___24066,timeout_ms_24065,temp__5278__auto___24064__$1,cb_uuid_24063,temp__5278__auto___24062,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e24007){var e = e24007;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",986,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__23983,map__23983__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-36716276);

var temp__5278__auto___24073 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto___24073)){
var cb_uuid_24074 = temp__5278__auto___24073;
var cb_fn_STAR__24075 = (function (){var or__7610__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_24074);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24008){if((e24008 instanceof Error)){
var e__$1 = e24008;
return e__$1;
} else {
throw e24008;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__24075.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5278__auto__ = (function (){var or__7610__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var or__7610__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__7610__auto____$1)){
return or__7610__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var WebSocket = temp__5278__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5278__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1011,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null,1735385221);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (p1__23970_SHARP_){
return cljs.core.assoc.call(null,p1__23970_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e24009){var e = e24009;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1025,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null,528864550);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__24010 = _QMARK_socket;
(G__24010["onerror"] = ((function (G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1035,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e24011){var _ = e24011;
return ws_ev;
}})()], null);
});})(G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null,-1324434994);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (p1__23971_SHARP_){
return cljs.core.assoc.call(null,p1__23971_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);
});})(G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);

(G__24010["onmessage"] = ((function (G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__24012 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__24012,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__24012,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__7610__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var or__7610__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__7610__auto____$1)){
return or__7610__auto____$1;
} else {
var temp__5276__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5276__auto__)){
var cb_uuid = temp__5276__auto__;
var temp__5276__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5276__auto____$1)){
var cb_fn = temp__5276__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1071,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5276__auto____$1,cb_uuid,temp__5276__auto__,or__7610__auto____$1,or__7610__auto__,ppstr,vec__24012,clj,_QMARK_cb_uuid,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5276__auto____$1,cb_uuid,temp__5276__auto__,or__7610__auto____$1,or__7610__auto__,ppstr,vec__24012,clj,_QMARK_cb_uuid,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null,-406331911);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);

(G__24010["onclose"] = ((function (G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null,-2082496028);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (p1__23972_SHARP_){
return cljs.core.assoc.call(null,p1__23972_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1){
return (function (p1__23973_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__23973_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__24010,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
);

return G__24010;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5278__auto__,chsk__$1))
;
var temp__5278__auto___24076__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5278__auto___24076__$1)){
var ms_24077 = temp__5278__auto___24076__$1;
var c__16454__auto___24078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1){
return (function (state_24042){
var state_val_24043 = (state_24042[(1)]);
if((state_val_24043 === (7))){
var inst_24038 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24044_24079 = state_24042__$1;
(statearr_24044_24079[(2)] = inst_24038);

(statearr_24044_24079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (1))){
var state_24042__$1 = state_24042;
var statearr_24045_24080 = state_24042__$1;
(statearr_24045_24080[(2)] = null);

(statearr_24045_24080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (4))){
var inst_24019 = (state_24042[(2)]);
var inst_24020 = have_handle_QMARK_.call(null);
var state_24042__$1 = (function (){var statearr_24046 = state_24042;
(statearr_24046[(7)] = inst_24019);

return statearr_24046;
})();
if(cljs.core.truth_(inst_24020)){
var statearr_24047_24081 = state_24042__$1;
(statearr_24047_24081[(1)] = (5));

} else {
var statearr_24048_24082 = state_24042__$1;
(statearr_24048_24082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (6))){
var state_24042__$1 = state_24042;
var statearr_24049_24083 = state_24042__$1;
(statearr_24049_24083[(2)] = null);

(statearr_24049_24083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (3))){
var inst_24040 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24042__$1,inst_24040);
} else {
if((state_val_24043 === (2))){
var inst_24016 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_24017 = cljs.core.async.timeout.call(null,ms_24077);
var state_24042__$1 = (function (){var statearr_24050 = state_24042;
(statearr_24050[(8)] = inst_24016);

return statearr_24050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24042__$1,(4),inst_24017);
} else {
if((state_val_24043 === (9))){
var state_24042__$1 = state_24042;
var statearr_24051_24084 = state_24042__$1;
(statearr_24051_24084[(2)] = null);

(statearr_24051_24084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (5))){
var inst_24016 = (state_24042[(8)]);
var inst_24022 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_24023 = cljs.core._EQ_.call(null,inst_24016,inst_24022);
var state_24042__$1 = state_24042;
if(inst_24023){
var statearr_24052_24085 = state_24042__$1;
(statearr_24052_24085[(1)] = (8));

} else {
var statearr_24053_24086 = state_24042__$1;
(statearr_24053_24086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (10))){
var inst_24034 = (state_24042[(2)]);
var state_24042__$1 = (function (){var statearr_24054 = state_24042;
(statearr_24054[(9)] = inst_24034);

return statearr_24054;
})();
var statearr_24055_24087 = state_24042__$1;
(statearr_24055_24087[(2)] = null);

(statearr_24055_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (8))){
var inst_24025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24026 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_24027 = (new cljs.core.PersistentVector(null,1,(5),inst_24025,inst_24026,null));
var inst_24028 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_24029 = [true];
var inst_24030 = cljs.core.PersistentHashMap.fromArrays(inst_24028,inst_24029);
var inst_24031 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_24027,inst_24030);
var state_24042__$1 = state_24042;
var statearr_24056_24088 = state_24042__$1;
(statearr_24056_24088[(2)] = inst_24031);

(statearr_24056_24088[(1)] = (10));


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
});})(c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1))
;
return ((function (switch__16364__auto__,c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__16365__auto__ = null;
var taoensso$sente$state_machine__16365__auto____0 = (function (){
var statearr_24057 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24057[(0)] = taoensso$sente$state_machine__16365__auto__);

(statearr_24057[(1)] = (1));

return statearr_24057;
});
var taoensso$sente$state_machine__16365__auto____1 = (function (state_24042){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_24042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object)){
var ex__16368__auto__ = e24058;
var statearr_24059_24089 = state_24042;
(statearr_24059_24089[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24090 = state_24042;
state_24042 = G__24090;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$state_machine__16365__auto__ = function(state_24042){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__16365__auto____1.call(this,state_24042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__16365__auto____0;
taoensso$sente$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__16365__auto____1;
return taoensso$sente$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1))
})();
var state__16456__auto__ = (function (){var statearr_24060 = f__16455__auto__.call(null);
(statearr_24060[(6)] = c__16454__auto___24078);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___24078,ms_24077,temp__5278__auto___24076__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5278__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__23978){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__23978),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__23978),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__23978,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639))),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k24098,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__24102 = k24098;
var G__24102__$1 = (((G__24102 instanceof cljs.core.Keyword))?G__24102.fqn:null);
switch (G__24102__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24098,else__8301__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24097){
var self__ = this;
var G__24097__$1 = this;
return (new cljs.core.RecordIter((0),G__24097__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24099,other24100){
var self__ = this;
var this24099__$1 = this;
return (!((other24100 == null))) && ((this24099__$1.constructor === other24100.constructor)) && (cljs.core._EQ_.call(null,this24099__$1.client_id,other24100.client_id)) && (cljs.core._EQ_.call(null,this24099__$1.chs,other24100.chs)) && (cljs.core._EQ_.call(null,this24099__$1.params,other24100.params)) && (cljs.core._EQ_.call(null,this24099__$1.packer,other24100.packer)) && (cljs.core._EQ_.call(null,this24099__$1.url,other24100.url)) && (cljs.core._EQ_.call(null,this24099__$1.state_,other24100.state_)) && (cljs.core._EQ_.call(null,this24099__$1.instance_handle_,other24100.instance_handle_)) && (cljs.core._EQ_.call(null,this24099__$1.ever_opened_QMARK__,other24100.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this24099__$1.backoff_ms_fn,other24100.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this24099__$1.ajax_opts,other24100.ajax_opts)) && (cljs.core._EQ_.call(null,this24099__$1.curr_xhr_,other24100.curr_xhr_)) && (cljs.core._EQ_.call(null,this24099__$1.__extmap,other24100.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__24097){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__24103 = cljs.core.keyword_identical_QMARK_;
var expr__24104 = k__8306__auto__;
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(G__24097,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__24097,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__24097,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__24097,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__24097,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__24097,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__24097,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__24097,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__24097,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__24097,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24103.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__24104))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__24097,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__24097),null));
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
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__24097){
var self__ = this;
var this__8297__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__24097,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__24091_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__24091_SHARP_,reason);
});})(chsk__$1))
);

var temp__5278__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__5278__auto__)){
var x = temp__5278__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__24106 = opts;
var map__24106__$1 = ((((!((map__24106 == null)))?((((map__24106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106):map__24106);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__7610__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var or__7610__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__7610__auto____$1)){
return or__7610__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__24108){
var map__24109 = p__24108;
var map__24109__$1 = ((((!((map__24109 == null)))?((((map__24109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24109):map__24109);
var _QMARK_error = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__24092_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__24092_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__24111 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__24111,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24111,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1213,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__24111,resp_clj,___$1,map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__24111,resp_clj,___$1,map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1406148827);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__24111,resp_clj,___$1,map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__24093_SHARP_){
return cljs.core.assoc.call(null,p1__24093_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__24111,resp_clj,___$1,map__24109,map__24109__$1,_QMARK_error,_QMARK_content,csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__24106,map__24106__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1808428466);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-204987875);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__24094_SHARP_){
return cljs.core.assoc.call(null,p1__24094_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__7610__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__24114){
var map__24115 = p__24114;
var map__24115__$1 = ((((!((map__24115 == null)))?((((map__24115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24115):map__24115);
var _QMARK_error = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__24115,map__24115__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__24095_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__24095_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__24115,map__24115__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__24117 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__24117,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__24117,clj,handshake_QMARK_,map__24115,map__24115__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__24096_SHARP_){
return cljs.core.assoc.call(null,p1__24096_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__24117,clj,handshake_QMARK_,map__24115,map__24115__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__7610__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__24101){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__24101),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__24101),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24101,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696))),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k24122,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__24126 = k24122;
var G__24126__$1 = (((G__24126 instanceof cljs.core.Keyword))?G__24126.fqn:null);
switch (G__24126__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24122,else__8301__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24121){
var self__ = this;
var G__24121__$1 = this;
return (new cljs.core.RecordIter((0),G__24121__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24123,other24124){
var self__ = this;
var this24123__$1 = this;
return (!((other24124 == null))) && ((this24123__$1.constructor === other24124.constructor)) && (cljs.core._EQ_.call(null,this24123__$1.ws_chsk_opts,other24124.ws_chsk_opts)) && (cljs.core._EQ_.call(null,this24123__$1.ajax_chsk_opts,other24124.ajax_chsk_opts)) && (cljs.core._EQ_.call(null,this24123__$1.state_,other24124.state_)) && (cljs.core._EQ_.call(null,this24123__$1.impl_,other24124.impl_)) && (cljs.core._EQ_.call(null,this24123__$1.__extmap,other24124.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__24121){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__24127 = cljs.core.keyword_identical_QMARK_;
var expr__24128 = k__8306__auto__;
if(cljs.core.truth_(pred__24127.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__24128))){
return (new taoensso.sente.ChAutoSocket(G__24121,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24127.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__24128))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__24121,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24127.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__24128))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__24121,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24127.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__24128))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__24121,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__24121),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__24121){
var self__ = this;
var this__8297__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__24121,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5278__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5278__auto__)){
var impl = temp__5278__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5278__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5278__auto__)){
var impl = temp__5278__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5276__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5276__auto__)){
var impl = temp__5276__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__24130 = opts;
var map__24130__$1 = ((((!((map__24130 == null)))?((((map__24130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24130):map__24130);
var _QMARK_cb = cljs.core.get.call(null,map__24130__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___24133 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___24133,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5278__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5278__auto__)){
var impl = temp__5278__auto__;
var temp__5278__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5278__auto____$1)){
var ever_opened_QMARK__ = temp__5278__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___24133,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1359,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5278__auto____$1,impl,temp__5278__auto__,downgraded_QMARK___24133,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5278__auto____$1,impl,temp__5278__auto__,downgraded_QMARK___24133,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,634862043);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___24133,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__7610__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__24125){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__24125),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__24125),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__24125),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__24125),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24125,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179))),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__24134 = protocol;
var G__24134__$1 = (((G__24134 instanceof cljs.core.Keyword))?G__24134.fqn:null);
switch (G__24134__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24135){if((e24135 instanceof Error)){
var e = e24135;
return e;
} else {
throw e24135;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__24136 = type;
var G__24136__$1 = (((G__24136 instanceof cljs.core.Keyword))?G__24136.fqn:null);
switch (G__24136__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__24137 = protocol__$2;
switch (G__24137) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24137)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24136__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24158 = arguments.length;
var i__8890__auto___24159 = (0);
while(true){
if((i__8890__auto___24159 < len__8889__auto___24158)){
args__8896__auto__.push((arguments[i__8890__auto___24159]));

var G__24160 = (i__8890__auto___24159 + (1));
i__8890__auto___24159 = G__24160;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__24143){
var vec__24144 = p__24143;
var map__24147 = cljs.core.nth.call(null,vec__24144,(0),null);
var map__24147__$1 = ((((!((map__24147 == null)))?((((map__24147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24147):map__24147);
var opts = map__24147__$1;
var ajax_opts = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__7610__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__24147__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__24144,(1),null);
var e_24161 = (function (){try{if(((function (vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24149){if((e24149 instanceof Error)){
var e = e24149;
return e;
} else {
throw e24149;

}
}})();
if((e_24161 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_24161,null);
}

var e_24162 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24150){if((e24150 instanceof Error)){
var e = e24150;
return e;
} else {
throw e24150;

}
}})();
if((e_24162 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_24162,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1624122882);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1425,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1821493772);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__24151 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__7610__auto__ = path;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5276__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__7610__auto__ = protocol;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
var or__7610__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__7610__auto____$1)){
return or__7610__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__7610__auto__ = host;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__24151,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__24151,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__24151,ws_url,ajax_url,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__24151,ws_url,ajax_url,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__24154 = type;
var G__24154__$1 = (((G__24154 instanceof cljs.core.Keyword))?G__24154.fqn:null);
switch (G__24154__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24154__$1)].join('')));

}
})());
var temp__5276__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5276__auto__)){
var chsk = temp__5276__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5276__auto__,packer__$1,vec__24151,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__24155 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__24155,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__24155,(1),null);
var ev__$1 = vec__24155;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5276__auto__,packer__$1,vec__24151,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1513,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5276__auto__,packer__$1,vec__24151,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5276__auto__,packer__$1,vec__24151,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__24144,map__24147,map__24147__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1296714592);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq24141){
var G__24142 = cljs.core.first.call(null,seq24141);
var seq24141__$1 = cljs.core.next.call(null,seq24141);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24142,seq24141__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__24164 = opts;
var map__24164__$1 = ((((!((map__24164 == null)))?((((map__24164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24164):map__24164);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__16454__auto___24241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_24211){
var state_val_24212 = (state_24211[(1)]);
if((state_val_24212 === (7))){
var inst_24207 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24213_24242 = state_24211__$1;
(statearr_24213_24242[(2)] = inst_24207);

(statearr_24213_24242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (1))){
var state_24211__$1 = state_24211;
var statearr_24214_24243 = state_24211__$1;
(statearr_24214_24243[(2)] = null);

(statearr_24214_24243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (4))){
var inst_24177 = (state_24211[(7)]);
var inst_24174 = (state_24211[(8)]);
var inst_24176 = (state_24211[(9)]);
var inst_24174__$1 = (state_24211[(2)]);
var inst_24175 = cljs.core.nth.call(null,inst_24174__$1,(0),null);
var inst_24176__$1 = cljs.core.nth.call(null,inst_24174__$1,(1),null);
var inst_24177__$1 = cljs.core._EQ_.call(null,inst_24176__$1,ch_ctrl);
var state_24211__$1 = (function (){var statearr_24215 = state_24211;
(statearr_24215[(7)] = inst_24177__$1);

(statearr_24215[(8)] = inst_24174__$1);

(statearr_24215[(10)] = inst_24175);

(statearr_24215[(9)] = inst_24176__$1);

return statearr_24215;
})();
if(inst_24177__$1){
var statearr_24216_24244 = state_24211__$1;
(statearr_24216_24244[(1)] = (5));

} else {
var statearr_24217_24245 = state_24211__$1;
(statearr_24217_24245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (15))){
var inst_24175 = (state_24211[(10)]);
var state_24211__$1 = state_24211;
var statearr_24218_24246 = state_24211__$1;
(statearr_24218_24246[(2)] = inst_24175);

(statearr_24218_24246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (13))){
var inst_24193 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24219_24247 = state_24211__$1;
(statearr_24219_24247[(2)] = inst_24193);

(statearr_24219_24247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (6))){
var inst_24175 = (state_24211[(10)]);
var inst_24182 = (inst_24175 == null);
var inst_24183 = cljs.core.not.call(null,inst_24182);
var state_24211__$1 = state_24211;
if(inst_24183){
var statearr_24220_24248 = state_24211__$1;
(statearr_24220_24248[(1)] = (8));

} else {
var statearr_24221_24249 = state_24211__$1;
(statearr_24221_24249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (3))){
var inst_24209 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24211__$1,inst_24209);
} else {
if((state_val_24212 === (12))){
var state_24211__$1 = state_24211;
var statearr_24222_24250 = state_24211__$1;
(statearr_24222_24250[(2)] = false);

(statearr_24222_24250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (2))){
var inst_24170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24171 = [ch_recv,ch_ctrl];
var inst_24172 = (new cljs.core.PersistentVector(null,2,(5),inst_24170,inst_24171,null));
var state_24211__$1 = state_24211;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24211__$1,(4),inst_24172);
} else {
if((state_val_24212 === (11))){
var state_24211__$1 = state_24211;
var statearr_24223_24251 = state_24211__$1;
(statearr_24223_24251[(2)] = true);

(statearr_24223_24251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (9))){
var state_24211__$1 = state_24211;
var statearr_24224_24252 = state_24211__$1;
(statearr_24224_24252[(2)] = false);

(statearr_24224_24252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (5))){
var state_24211__$1 = state_24211;
var statearr_24225_24253 = state_24211__$1;
(statearr_24225_24253[(2)] = null);

(statearr_24225_24253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (14))){
var inst_24175 = (state_24211[(10)]);
var inst_24198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24175);
var state_24211__$1 = state_24211;
var statearr_24226_24254 = state_24211__$1;
(statearr_24226_24254[(2)] = inst_24198);

(statearr_24226_24254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (16))){
var inst_24177 = (state_24211[(7)]);
var inst_24174 = (state_24211[(8)]);
var inst_24175 = (state_24211[(10)]);
var inst_24176 = (state_24211[(9)]);
var inst_24201 = (state_24211[(2)]);
var inst_24202 = cljs.core.get.call(null,inst_24201,new cljs.core.Keyword(null,"event","event",301435442));
var inst_24203 = (function (){var vec__24167 = inst_24174;
var v = inst_24175;
var p = inst_24176;
var stop_QMARK_ = inst_24177;
var map__24180 = inst_24201;
var event_msg = inst_24201;
var event = inst_24202;
return ((function (vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-820796386);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24229){if((e24229 instanceof Error)){
var e = e24229;
return e;
} else {
throw e24229;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24230){if((e24230 instanceof Error)){
var e = e24230;
return e;
} else {
throw e24230;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e24227){if((e24227 instanceof Error)){
var e1 = e24227;
try{var temp__5276__auto__ = error_handler;
if(cljs.core.truth_(temp__5276__auto__)){
var eh = temp__5276__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1549,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5276__auto__,e1,vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5276__auto__,e1,vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-439981955);
}
}catch (e24228){if((e24228 instanceof Error)){
var e2 = e24228;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4946840489680476349.clj",1550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-498367125);
} else {
throw e24228;

}
}} else {
throw e24227;

}
}});
;})(vec__24167,v,p,stop_QMARK_,map__24180,event_msg,event,inst_24177,inst_24174,inst_24175,inst_24176,inst_24201,inst_24202,state_val_24212,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_24204 = execute1.call(null,inst_24203);
var state_24211__$1 = (function (){var statearr_24231 = state_24211;
(statearr_24231[(11)] = inst_24204);

return statearr_24231;
})();
var statearr_24232_24255 = state_24211__$1;
(statearr_24232_24255[(2)] = null);

(statearr_24232_24255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (10))){
var inst_24196 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24196)){
var statearr_24233_24256 = state_24211__$1;
(statearr_24233_24256[(1)] = (14));

} else {
var statearr_24234_24257 = state_24211__$1;
(statearr_24234_24257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (8))){
var inst_24175 = (state_24211[(10)]);
var inst_24185 = inst_24175.cljs$lang$protocol_mask$partition0$;
var inst_24186 = (inst_24185 & (64));
var inst_24187 = inst_24175.cljs$core$ISeq$;
var inst_24188 = (cljs.core.PROTOCOL_SENTINEL === inst_24187);
var inst_24189 = (inst_24186) || (inst_24188);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24189)){
var statearr_24235_24258 = state_24211__$1;
(statearr_24235_24258[(1)] = (11));

} else {
var statearr_24236_24259 = state_24211__$1;
(statearr_24236_24259[(1)] = (12));

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
});})(c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__16364__auto__,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____0 = (function (){
var statearr_24237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24237[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__);

(statearr_24237[(1)] = (1));

return statearr_24237;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____1 = (function (state_24211){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_24211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e24238){if((e24238 instanceof Object)){
var ex__16368__auto__ = e24238;
var statearr_24239_24260 = state_24211;
(statearr_24239_24260[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24261 = state_24211;
state_24211 = G__24261;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__ = function(state_24211){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____1.call(this,state_24211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__16456__auto__ = (function (){var statearr_24240 = f__16455__auto__.call(null);
(statearr_24240[(6)] = c__16454__auto___24241);

return statearr_24240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___24241,map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__24164,map__24164__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24271 = arguments.length;
var i__8890__auto___24272 = (0);
while(true){
if((i__8890__auto___24272 < len__8889__auto___24271)){
args__8896__auto__.push((arguments[i__8890__auto___24272]));

var G__24273 = (i__8890__auto___24272 + (1));
i__8890__auto___24272 = G__24273;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((2) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8897__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__24265){
var vec__24266 = p__24265;
var map__24269 = cljs.core.nth.call(null,vec__24266,(0),null);
var map__24269__$1 = ((((!((map__24269 == null)))?((((map__24269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24269):map__24269);
var opts = map__24269__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__24269__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq24262){
var G__24263 = cljs.core.first.call(null,seq24262);
var seq24262__$1 = cljs.core.next.call(null,seq24262);
var G__24264 = cljs.core.first.call(null,seq24262__$1);
var seq24262__$2 = cljs.core.next.call(null,seq24262__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24263,G__24264,seq24262__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___24283 = arguments.length;
var i__8890__auto___24284 = (0);
while(true){
if((i__8890__auto___24284 < len__8889__auto___24283)){
args__8896__auto__.push((arguments[i__8890__auto___24284]));

var G__24285 = (i__8890__auto___24284 + (1));
i__8890__auto___24284 = G__24285;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((2) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8897__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__24277){
var vec__24278 = p__24277;
var map__24281 = cljs.core.nth.call(null,vec__24278,(0),null);
var map__24281__$1 = ((((!((map__24281 == null)))?((((map__24281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);
var opts = map__24281__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq24274){
var G__24275 = cljs.core.first.call(null,seq24274);
var seq24274__$1 = cljs.core.next.call(null,seq24274);
var G__24276 = cljs.core.first.call(null,seq24274__$1);
var seq24274__$2 = cljs.core.next.call(null,seq24274__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24275,G__24276,seq24274__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__24286,websocket_QMARK_){
var map__24287 = p__24286;
var map__24287__$1 = ((((!((map__24287 == null)))?((((map__24287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24287):map__24287);
var location = map__24287__$1;
var protocol = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7610__auto__ = path;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1513171813138
