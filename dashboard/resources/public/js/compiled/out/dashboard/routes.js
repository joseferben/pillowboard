// Compiled by ClojureScript 1.9.946 {}
goog.provide('dashboard.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('pushy.core');
dashboard.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 5, ["",new cljs.core.Keyword(null,"login","login",55217519),"login",new cljs.core.Keyword(null,"login","login",55217519),"register",new cljs.core.Keyword(null,"register","register",1968522516),"admin",new cljs.core.Keyword(null,"admin","admin",-1239101627),"dashboard/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"board","board",-1907017633)])], null)], null);
dashboard.routes.parse_url = (function dashboard$routes$parse_url(url){
return bidi.bidi.match_route.call(null,dashboard.routes.routes,url);
});
dashboard.routes.dispatch_route = (function dashboard$routes$dispatch_route(matched_route){
cljs.core.prn.call(null,matched_route);

var panel_name = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route);
var id = cljs.core.get_in.call(null,matched_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dashboard.routes","/tmp/form-init4946840489680476349.clj",20,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (panel_name,id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting panel:  %s",matched_route], null);
});})(panel_name,id))
,null)),null,-2108095311);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),panel_name,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
dashboard.routes.history = pushy.core.pushy.call(null,dashboard.routes.dispatch_route,dashboard.routes.parse_url);
dashboard.routes.url_for = cljs.core.partial.call(null,bidi.bidi.path_for,dashboard.routes.routes);
dashboard.routes.start_history_BANG_ = (function dashboard$routes$start_history_BANG_(){
return pushy.core.start_BANG_.call(null,dashboard.routes.history);
});
dashboard.routes.nav_BANG_ = (function dashboard$routes$nav_BANG_(url){
pushy.core.set_token_BANG_.call(null,dashboard.routes.history,url);

return false;
});

//# sourceMappingURL=routes.js.map?rel=1513171811703
