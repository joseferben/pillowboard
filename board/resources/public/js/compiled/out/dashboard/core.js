// Compiled by ClojureScript 1.9.946 {}
goog.provide('dashboard.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('taoensso.timbre');
goog.require('dashboard.routes');
goog.require('dashboard.events');
goog.require('dashboard.subs');
goog.require('dashboard.views');
goog.require('devtools.core');
devtools.core.install_BANG_.call(null);
cljs.core.enable_console_print_BANG_.call(null);
taoensso.timbre.set_level_BANG_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.core","/tmp/form-init7983358340211471839.clj",17,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ClojureScript appears to have loaded correctly."], null);
}),null)),null,-819673084);
dashboard.routes.start_history_BANG_.call(null);
dashboard.core.main = (function dashboard$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.views.app], null),document.getElementById("app"));
});
goog.exportSymbol('dashboard.core.main', dashboard.core.main);

//# sourceMappingURL=core.js.map?rel=1513172445980
