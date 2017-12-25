// Compiled by ClojureScript 1.9.946 {}
goog.provide('dashboard.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dashboard.ws');
goog.require('dashboard.db');
goog.require('dashboard.routes');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('re_frame.core');
/**
 * Given `uri` and two callbacks `on-success` and `on-failure` returns an effect
 *   Optionally provide `db` as last argument for authenticated requests.
 */
dashboard.events.fetch = (function dashboard$events$fetch(var_args){
var G__24301 = arguments.length;
switch (G__24301) {
case 3:
return dashboard.events.fetch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dashboard.events.fetch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dashboard.events.fetch.cljs$core$IFn$_invoke$arity$3 = (function (uri,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null)], null);
});

dashboard.events.fetch.cljs$core$IFn$_invoke$arity$4 = (function (uri,on_success,on_failure,p__24302){
var map__24303 = p__24302;
var map__24303__$1 = ((((!((map__24303 == null)))?((((map__24303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24303):map__24303);
var token = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return cljs.core.assoc_in.call(null,dashboard.events.fetch.call(null,uri,on_success,on_failure),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"headers","headers",-835030129)], null),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null));
});

dashboard.events.fetch.cljs$lang$maxFixedArity = 4;

/**
 * Given `uri` and two callbacks `on-success` and `on-failure` returns an effect
 *   Optionally provide `db` as last argument for authenticated requests.
 */
dashboard.events.post = (function dashboard$events$post(var_args){
var G__24307 = arguments.length;
switch (G__24307) {
case 4:
return dashboard.events.post.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dashboard.events.post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dashboard.events.post.cljs$core$IFn$_invoke$arity$4 = (function (uri,data,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_failure], null)], null)], null);
});

dashboard.events.post.cljs$core$IFn$_invoke$arity$5 = (function (uri,data,on_success,on_failure,p__24308){
var map__24309 = p__24308;
var map__24309__$1 = ((((!((map__24309 == null)))?((((map__24309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);
var token = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return cljs.core.assoc_in.call(null,dashboard.events.post.call(null,uri,data,on_success,on_failure),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"headers","headers",-835030129)], null),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null));
});

dashboard.events.post.cljs$lang$maxFixedArity = 5;

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-page","set-page",1750905514),cljs.core.PersistentVector.EMPTY,(function (p__24312,p__24313){
var map__24314 = p__24312;
var map__24314__$1 = ((((!((map__24314 == null)))?((((map__24314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24314):map__24314);
var db = cljs.core.get.call(null,map__24314__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24315 = p__24313;
var _ = cljs.core.nth.call(null,vec__24315,(0),null);
var page = cljs.core.nth.call(null,vec__24315,(1),null);
return cljs.core.merge.call(null,((cljs.core._EQ_.call(null,page.call(null,new cljs.core.Keyword(null,"page","page",849072397)),new cljs.core.Keyword(null,"admin","admin",-1239101627)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-dashboards","fetch-dashboards",283595981)], null)], null):((cljs.core._EQ_.call(null,page.call(null,new cljs.core.Keyword(null,"page","page",849072397)),new cljs.core.Keyword(null,"board","board",-1907017633)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-ws","open-ws",-1136908894),page.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active","active",1895962068),page)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fill-in","fill-in",1073972718),cljs.core.PersistentVector.EMPTY,(function (db,p__24319){
var vec__24320 = p__24319;
var _ = cljs.core.nth.call(null,vec__24320,(0),null);
var value = cljs.core.nth.call(null,vec__24320,(1),null);
var form = cljs.core.nth.call(null,vec__24320,(2),null);
var field = cljs.core.nth.call(null,vec__24320,(3),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),form,field], null),value);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login","login",55217519),(function (p__24323,p__24324){
var map__24325 = p__24323;
var map__24325__$1 = ((((!((map__24325 == null)))?((((map__24325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24325):map__24325);
var db = cljs.core.get.call(null,map__24325__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24326 = p__24324;
var _ = cljs.core.nth.call(null,vec__24326,(0),null);
var evt = cljs.core.nth.call(null,vec__24326,(1),null);
var email = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null));
var password = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null));
return dashboard.events.post.call(null,"/api/sessions",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"s-login","s-login",-1914373747),new cljs.core.Keyword(null,"f-login","f-login",1461520049));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"s-login","s-login",-1914373747),(function (p__24330,p__24331){
var map__24332 = p__24330;
var map__24332__$1 = ((((!((map__24332 == null)))?((((map__24332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24332):map__24332);
var db = cljs.core.get.call(null,map__24332__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24333 = p__24331;
var _ = cljs.core.nth.call(null,vec__24333,(0),null);
var map__24336 = cljs.core.nth.call(null,vec__24333,(1),null);
var map__24336__$1 = ((((!((map__24336 == null)))?((((map__24336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);
var auth_token = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",71,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__24332,map__24332__$1,db,vec__24333,_,map__24336,map__24336__$1,auth_token){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Successfully logged in."], null);
});})(map__24332,map__24332__$1,db,vec__24333,_,map__24336,map__24336__$1,auth_token))
,null)),null,1039714003);

dashboard.routes.nav_BANG_.call(null,"/admin");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"email","email",1415816706)], null))),new cljs.core.Keyword(null,"form","form",-1624062471)),new cljs.core.Keyword(null,"token","token",-1211463215),auth_token)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"f-login","f-login",1461520049),cljs.core.PersistentVector.EMPTY,(function (db,p__24339){
var vec__24340 = p__24339;
var _ = cljs.core.nth.call(null,vec__24340,(0),null);
var response = cljs.core.nth.call(null,vec__24340,(1),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",82,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24340,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to login: %s",response], null);
});})(vec__24340,_,response))
,null)),null,-235633365);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"register","register",1968522516),(function (p__24343,p__24344){
var map__24345 = p__24343;
var map__24345__$1 = ((((!((map__24345 == null)))?((((map__24345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24345):map__24345);
var db = cljs.core.get.call(null,map__24345__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24346 = p__24344;
var _ = cljs.core.nth.call(null,vec__24346,(0),null);
var evt = cljs.core.nth.call(null,vec__24346,(1),null);
var email = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword(null,"email","email",1415816706)], null));
var password = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword(null,"password","password",417022471)], null));
return dashboard.events.post.call(null,"/api/users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"s-register","s-register",-61380957),new cljs.core.Keyword(null,"f-register","f-register",-1692154583));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"s-register","s-register",-61380957),(function (p__24350,p__24351){
var map__24352 = p__24350;
var map__24352__$1 = ((((!((map__24352 == null)))?((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);
var db = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24353 = p__24351;
var _ = cljs.core.nth.call(null,vec__24353,(0),null);
var map__24356 = cljs.core.nth.call(null,vec__24353,(1),null);
var map__24356__$1 = ((((!((map__24356 == null)))?((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var auth_token = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",94,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__24352,map__24352__$1,db,vec__24353,_,map__24356,map__24356__$1,auth_token){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Successfully registered."], null);
});})(map__24352,map__24352__$1,db,vec__24353,_,map__24356,map__24356__$1,auth_token))
,null)),null,194793486);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"form","form",-1624062471)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"f-register","f-register",-1692154583),cljs.core.PersistentVector.EMPTY,(function (db,p__24359){
var vec__24360 = p__24359;
var _ = cljs.core.nth.call(null,vec__24360,(0),null);
var response = cljs.core.nth.call(null,vec__24360,(1),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",102,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24360,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to register: %s",response], null);
});})(vec__24360,_,response))
,null)),null,834345328);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"add-dashboard","add-dashboard",847870423),(function (p__24363,p__24364){
var map__24365 = p__24363;
var map__24365__$1 = ((((!((map__24365 == null)))?((((map__24365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24365):map__24365);
var db = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24366 = p__24364;
var _ = cljs.core.nth.call(null,vec__24366,(0),null);
var evt = cljs.core.nth.call(null,vec__24366,(1),null);
var name = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"to-add","to-add",-570877202),new cljs.core.Keyword(null,"name","name",1843675177)], null));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",108,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (name,map__24365,map__24365__$1,db,vec__24366,_,evt){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Addding dashboard: %s",name], null);
});})(name,map__24365,map__24365__$1,db,vec__24366,_,evt))
,null)),null,-254044243);

return dashboard.events.post.call(null,"/api/dashboards",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"s-add-dashboard","s-add-dashboard",568323944),new cljs.core.Keyword(null,"f-add-dashboard","f-add-dashboard",1178156224),db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"s-add-dashboard","s-add-dashboard",568323944),(function (p__24370,p__24371){
var map__24372 = p__24370;
var map__24372__$1 = ((((!((map__24372 == null)))?((((map__24372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24372):map__24372);
var db = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24373 = p__24371;
var _ = cljs.core.nth.call(null,vec__24373,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24373,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",114,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__24372,map__24372__$1,db,vec__24373,_,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Successfully added dashboard."], null);
});})(map__24372,map__24372__$1,db,vec__24373,_,___$1))
,null)),null,353697617);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"form","form",-1624062471)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"admin","admin",-1239101627)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"f-add-dashboard","f-add-dashboard",1178156224),cljs.core.PersistentVector.EMPTY,(function (db,p__24377){
var vec__24378 = p__24377;
var _ = cljs.core.nth.call(null,vec__24378,(0),null);
var response = cljs.core.nth.call(null,vec__24378,(1),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",122,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24378,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to add dashboard: %s",response], null);
});})(vec__24378,_,response))
,null)),null,1563027370);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),cljs.core.PersistentVector.EMPTY,(function (p__24381,_){
var map__24382 = p__24381;
var map__24382__$1 = ((((!((map__24382 == null)))?((((map__24382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24382):map__24382);
var db = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,dashboard.db.default_db,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-dashboards","fetch-dashboards",283595981),(function (p__24384,p__24385){
var map__24386 = p__24384;
var map__24386__$1 = ((((!((map__24386 == null)))?((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var db = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24387 = p__24385;
var evt = cljs.core.nth.call(null,vec__24387,(0),null);
var id = cljs.core.nth.call(null,vec__24387,(1),null);
return dashboard.events.fetch.call(null,"/api/dashboards/",new cljs.core.Keyword(null,"s-fetch-dashboards","s-fetch-dashboards",1416597553),new cljs.core.Keyword(null,"f-fetch-dashboards","f-fetch-dashboards",1200984772),db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"s-fetch-dashboards","s-fetch-dashboards",1416597553),cljs.core.PersistentVector.EMPTY,(function (db,p__24391){
var vec__24392 = p__24391;
var _ = cljs.core.nth.call(null,vec__24392,(0),null);
var response = cljs.core.nth.call(null,vec__24392,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dashboards","dashboards",440381511),response.call(null,new cljs.core.Keyword(null,"dashboards","dashboards",440381511)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"f-fetch-dashboards","f-fetch-dashboards",1200984772),cljs.core.PersistentVector.EMPTY,(function (db,p__24395){
var vec__24396 = p__24395;
var _ = cljs.core.nth.call(null,vec__24396,(0),null);
var response = cljs.core.nth.call(null,vec__24396,(1),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",145,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24396,_,response){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed request: %s",response], null);
});})(vec__24396,_,response))
,null)),null,1289502374);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"open-ws","open-ws",-1136908894),cljs.core.PersistentVector.EMPTY,(function (db,p__24399){
var vec__24400 = p__24399;
var _ = cljs.core.nth.call(null,vec__24400,(0),null);
var board_id = cljs.core.nth.call(null,vec__24400,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dashboard.events","/tmp/form-init4946840489680476349.clj",151,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24400,_,board_id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Opening ws for board: %s",board_id], null);
});})(vec__24400,_,board_id))
,null)),null,-97266409);

var map__24403 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
var map__24403__$1 = ((((!((map__24403 == null)))?((((map__24403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24403):map__24403);
var chsk = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var c__16454__auto___24469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id){
return (function (state_24443){
var state_val_24444 = (state_24443[(1)]);
if((state_val_24444 === (7))){
var inst_24409 = (state_24443[(7)]);
var inst_24409__$1 = (state_24443[(2)]);
var inst_24411 = (inst_24409__$1 == null);
var inst_24412 = cljs.core.not.call(null,inst_24411);
var state_24443__$1 = (function (){var statearr_24445 = state_24443;
(statearr_24445[(7)] = inst_24409__$1);

return statearr_24445;
})();
if(inst_24412){
var statearr_24446_24470 = state_24443__$1;
(statearr_24446_24470[(1)] = (8));

} else {
var statearr_24447_24471 = state_24443__$1;
(statearr_24447_24471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (1))){
var state_24443__$1 = state_24443;
var statearr_24448_24472 = state_24443__$1;
(statearr_24448_24472[(2)] = null);

(statearr_24448_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (4))){
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24443__$1,(7),ch_recv);
} else {
if((state_val_24444 === (15))){
var inst_24409 = (state_24443[(7)]);
var state_24443__$1 = state_24443;
var statearr_24449_24473 = state_24443__$1;
(statearr_24449_24473[(2)] = inst_24409);

(statearr_24449_24473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (13))){
var inst_24422 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24450_24474 = state_24443__$1;
(statearr_24450_24474[(2)] = inst_24422);

(statearr_24450_24474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (6))){
var inst_24439 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
var statearr_24451_24475 = state_24443__$1;
(statearr_24451_24475[(2)] = inst_24439);

(statearr_24451_24475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (3))){
var inst_24441 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24443__$1,inst_24441);
} else {
if((state_val_24444 === (12))){
var state_24443__$1 = state_24443;
var statearr_24452_24476 = state_24443__$1;
(statearr_24452_24476[(2)] = false);

(statearr_24452_24476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (2))){
var state_24443__$1 = state_24443;
var statearr_24453_24477 = state_24443__$1;
(statearr_24453_24477[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (11))){
var state_24443__$1 = state_24443;
var statearr_24455_24478 = state_24443__$1;
(statearr_24455_24478[(2)] = true);

(statearr_24455_24478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (9))){
var state_24443__$1 = state_24443;
var statearr_24456_24479 = state_24443__$1;
(statearr_24456_24479[(2)] = false);

(statearr_24456_24479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (5))){
var state_24443__$1 = state_24443;
var statearr_24457_24480 = state_24443__$1;
(statearr_24457_24480[(2)] = null);

(statearr_24457_24480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (14))){
var inst_24409 = (state_24443[(7)]);
var inst_24427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24409);
var state_24443__$1 = state_24443;
var statearr_24458_24481 = state_24443__$1;
(statearr_24458_24481[(2)] = inst_24427);

(statearr_24458_24481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (16))){
var inst_24430 = (state_24443[(2)]);
var inst_24431 = cljs.core.get.call(null,inst_24430,new cljs.core.Keyword(null,"event","event",301435442));
var inst_24432 = (function (){var map__24407 = inst_24430;
var ev_msg = inst_24431;
return ((function (map__24407,ev_msg,inst_24430,inst_24431,state_val_24444,c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reiceved event: %s",ev_msg], null);
});
;})(map__24407,ev_msg,inst_24430,inst_24431,state_val_24444,c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id))
})();
var inst_24433 = (new cljs.core.Delay(inst_24432,null));
var inst_24434 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_24433,null,-851120125);
var inst_24435 = dashboard.ws.handle_event.call(null,inst_24431,send_fn);
var state_24443__$1 = (function (){var statearr_24459 = state_24443;
(statearr_24459[(8)] = inst_24435);

(statearr_24459[(9)] = inst_24434);

return statearr_24459;
})();
var statearr_24460_24482 = state_24443__$1;
(statearr_24460_24482[(2)] = null);

(statearr_24460_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (10))){
var inst_24425 = (state_24443[(2)]);
var state_24443__$1 = state_24443;
if(cljs.core.truth_(inst_24425)){
var statearr_24461_24483 = state_24443__$1;
(statearr_24461_24483[(1)] = (14));

} else {
var statearr_24462_24484 = state_24443__$1;
(statearr_24462_24484[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24444 === (8))){
var inst_24409 = (state_24443[(7)]);
var inst_24414 = inst_24409.cljs$lang$protocol_mask$partition0$;
var inst_24415 = (inst_24414 & (64));
var inst_24416 = inst_24409.cljs$core$ISeq$;
var inst_24417 = (cljs.core.PROTOCOL_SENTINEL === inst_24416);
var inst_24418 = (inst_24415) || (inst_24417);
var state_24443__$1 = state_24443;
if(cljs.core.truth_(inst_24418)){
var statearr_24463_24485 = state_24443__$1;
(statearr_24463_24485[(1)] = (11));

} else {
var statearr_24464_24486 = state_24443__$1;
(statearr_24464_24486[(1)] = (12));

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
});})(c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id))
;
return ((function (switch__16364__auto__,c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id){
return (function() {
var dashboard$events$state_machine__16365__auto__ = null;
var dashboard$events$state_machine__16365__auto____0 = (function (){
var statearr_24465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24465[(0)] = dashboard$events$state_machine__16365__auto__);

(statearr_24465[(1)] = (1));

return statearr_24465;
});
var dashboard$events$state_machine__16365__auto____1 = (function (state_24443){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_24443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e24466){if((e24466 instanceof Object)){
var ex__16368__auto__ = e24466;
var statearr_24467_24487 = state_24443;
(statearr_24467_24487[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24488 = state_24443;
state_24443 = G__24488;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
dashboard$events$state_machine__16365__auto__ = function(state_24443){
switch(arguments.length){
case 0:
return dashboard$events$state_machine__16365__auto____0.call(this);
case 1:
return dashboard$events$state_machine__16365__auto____1.call(this,state_24443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dashboard$events$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = dashboard$events$state_machine__16365__auto____0;
dashboard$events$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = dashboard$events$state_machine__16365__auto____1;
return dashboard$events$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id))
})();
var state__16456__auto__ = (function (){var statearr_24468 = f__16455__auto__.call(null);
(statearr_24468[(6)] = c__16454__auto___24469);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___24469,map__24403,map__24403__$1,chsk,ch_recv,send_fn,state,vec__24400,_,board_id))
);


return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk),new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982),ch_recv),new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779),send_fn),new cljs.core.Keyword(null,"chsk-state","chsk-state",1020217391),state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"register-board","register-board",209360990),cljs.core.PersistentVector.EMPTY,(function (db,p__24489){
var vec__24490 = p__24489;
var _ = cljs.core.nth.call(null,vec__24490,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__24490,(1),null);
var board_id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",172,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (board_id,vec__24490,_,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Registering board with id: %s",board_id], null);
});})(board_id,vec__24490,_,___$1))
,null)),null,-1975983316);

db.call(null,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","register-board","board/register-board",241297788),board_id], null),(20000));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-board-state","set-board-state",750355546),cljs.core.PersistentVector.EMPTY,(function (db,p__24493){
var vec__24494 = p__24493;
var _ = cljs.core.nth.call(null,vec__24494,(0),null);
var state = cljs.core.nth.call(null,vec__24494,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dashboard.events","/tmp/form-init4946840489680476349.clj",180,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__24494,_,state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updating board state to: %s",state], null);
});})(vec__24494,_,state))
,null)),null,120813892);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"board-state","board-state",1654825192),state);
}));

//# sourceMappingURL=events.js.map?rel=1513171813319
