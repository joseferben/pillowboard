// Compiled by ClojureScript 1.9.946 {}
goog.provide('dashboard.grid');
goog.require('cljs.core');
goog.require('dashboard.styles.core');
goog.require('dashboard.charts.core');
goog.require('taoensso.timbre');
goog.require('stylefy.core');
taoensso.timbre.set_level_BANG_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(typeof dashboard.grid.chart_type !== 'undefined'){
} else {
dashboard.grid.chart_type = (function (){var method_table__8665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8669__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dashboard.grid","chart-type"),new cljs.core.Keyword(null,"chart-type","chart-type",-175692715),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8669__auto__,method_table__8665__auto__,prefer_table__8666__auto__,method_cache__8667__auto__,cached_hierarchy__8668__auto__));
})();
}
cljs.core._add_method.call(null,dashboard.grid.chart_type,new cljs.core.Keyword(null,"linechart","linechart",1794515475),(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),data.call(null,new cljs.core.Keyword(null,"key","key",-1516042587))], null),stylefy.core.use_style.call(null,dashboard.styles.core.card_style)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),stylefy.core.use_style.call(null,dashboard.styles.core.card_content_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart","div.chart",-1429873426),stylefy.core.use_style.call(null,dashboard.styles.core.component_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.charts.core.line_chart_comp,data], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,dashboard.grid.chart_type,new cljs.core.Keyword(null,"areachart","areachart",363937501),(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),data.call(null,new cljs.core.Keyword(null,"key","key",-1516042587))], null),stylefy.core.use_style.call(null,dashboard.styles.core.card_style)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),stylefy.core.use_style.call(null,dashboard.styles.core.card_content_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart","div.chart",-1429873426),stylefy.core.use_style.call(null,dashboard.styles.core.component_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.charts.core.area_chart_comp,data], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,dashboard.grid.chart_type,new cljs.core.Keyword(null,"scatterchart","scatterchart",1995579171),(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart","div.chart",-1429873426),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),data.call(null,new cljs.core.Keyword(null,"key","key",-1516042587))], null),stylefy.core.use_style.call(null,cljs.core.merge.call(null,dashboard.styles.core.component_style))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.charts.core.scatter_chart_comp,data], null)], null);
}));
dashboard.grid.render_charts = (function dashboard$grid$render_charts(charts){
return cljs.core.doall.call(null,cljs.core.map.call(null,dashboard.grid.chart_type,charts));
});
dashboard.grid.main = (function dashboard$grid$main(p__23070){
var map__23071 = p__23070;
var map__23071__$1 = ((((!((map__23071 == null)))?((((map__23071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23071):map__23071);
var charts = cljs.core.get.call(null,map__23071__$1,new cljs.core.Keyword(null,"charts","charts",555258811));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dashboard.grid","/tmp/form-init4946840489680476349.clj",35,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__23071,map__23071__$1,charts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rendering state: %s",charts], null);
});})(map__23071,map__23071__$1,charts))
,null)),null,-2040955055);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),stylefy.core.use_style.call(null,cljs.core.merge.call(null,dashboard.styles.core.grid_wrapper,dashboard.styles.core.component_style)),dashboard.grid.render_charts.call(null,charts)], null);
});

//# sourceMappingURL=grid.js.map?rel=1513171811790
