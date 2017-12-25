// Compiled by ClojureScript 1.9.946 {}
goog.provide('dashboard.ws');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('taoensso.sente');
goog.require('re_frame.core');
taoensso.timbre.set_level_BANG_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(typeof dashboard.ws.handle_event !== 'undefined'){
} else {
dashboard.ws.handle_event = (function (){var method_table__8665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8669__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dashboard.ws","handle-event"),((function (method_table__8665__auto__,prefer_table__8666__auto__,method_cache__8667__auto__,cached_hierarchy__8668__auto__,hierarchy__8669__auto__){
return (function (event,_){
return cljs.core.first.call(null,event);
});})(method_table__8665__auto__,prefer_table__8666__auto__,method_cache__8667__auto__,cached_hierarchy__8668__auto__,hierarchy__8669__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8669__auto__,method_table__8665__auto__,prefer_table__8666__auto__,method_cache__8667__auto__,cached_hierarchy__8668__auto__));
})();
}
cljs.core._add_method.call(null,dashboard.ws.handle_event,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__24291){
var vec__24292 = p__24291;
var type = cljs.core.nth.call(null,vec__24292,(0),null);
var vec__24295 = cljs.core.nth.call(null,vec__24292,(1),null);
var m0 = cljs.core.nth.call(null,vec__24295,(0),null);
var m1 = cljs.core.nth.call(null,vec__24295,(1),null);
var _ = cljs.core.nth.call(null,vec__24292,(2),null);
if(cljs.core.truth_(m1.call(null,new cljs.core.Keyword(null,"first-open?","first-open?",396686530)))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-board","register-board",209360990)], null));
} else {
return null;
}
}));
cljs.core._add_method.call(null,dashboard.ws.handle_event,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (event,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.ws","/tmp/form-init4946840489680476349.clj",31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handling event: %s",event], null);
}),null)),null,524696404);

if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.second.call(null,event)),new cljs.core.Keyword("board","state","board/state",-1931482701))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-board-state","set-board-state",750355546),cljs.core.get.call(null,cljs.core.second.call(null,cljs.core.second.call(null,event)),new cljs.core.Keyword(null,"state","state",-1988618099))], null));
} else {
return null;
}
}));
cljs.core._add_method.call(null,dashboard.ws.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (event,_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.ws","/tmp/form-init4946840489680476349.clj",37,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No handler for event found: %s",event], null);
}),null)),null,-1325173699);
}));

//# sourceMappingURL=ws.js.map?rel=1513171813219
