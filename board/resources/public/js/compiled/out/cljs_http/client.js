// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7598__auto__ = v;
if(cljs.core.truth_(and__7598__auto__)){
return (v > (0));
} else {
return and__7598__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__21634_SHARP_,p2__21633_SHARP_){
var vec__21635 = clojure.string.split.call(null,p2__21633_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__21635,(0),null);
var v = cljs.core.nth.call(null,vec__21635,(1),null);
return cljs.core.assoc.call(null,p1__21634_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__21638_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__21638_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__21639){
var vec__21640 = p__21639;
var k = cljs.core.nth.call(null,vec__21640,(0),null);
var v = cljs.core.nth.call(null,vec__21640,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__21643_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21643_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7598__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__7598__auto__){
var and__7598__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__7598__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7598__auto____$1;
}
} else {
return and__7598__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__21644_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21644_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21651 = arguments.length;
var i__8890__auto___21652 = (0);
while(true){
if((i__8890__auto___21652 < len__8889__auto___21651)){
args__8896__auto__.push((arguments[i__8890__auto___21652]));

var G__21653 = (i__8890__auto___21652 + (1));
i__8890__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21647){
var vec__21648 = p__21647;
var default_headers = cljs.core.nth.call(null,vec__21648,(0),null);
return ((function (vec__21648,default_headers){
return (function (request){
var temp__5276__auto__ = (function (){var or__7610__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var default_headers__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__21648,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq21645){
var G__21646 = cljs.core.first.call(null,seq21645);
var seq21645__$1 = cljs.core.next.call(null,seq21645);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__21646,seq21645__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21660 = arguments.length;
var i__8890__auto___21661 = (0);
while(true){
if((i__8890__auto___21661 < len__8889__auto___21660)){
args__8896__auto__.push((arguments[i__8890__auto___21661]));

var G__21662 = (i__8890__auto___21661 + (1));
i__8890__auto___21661 = G__21662;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21656){
var vec__21657 = p__21656;
var accept = cljs.core.nth.call(null,vec__21657,(0),null);
return ((function (vec__21657,accept){
return (function (request){
var temp__5276__auto__ = (function (){var or__7610__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var accept__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__21657,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq21654){
var G__21655 = cljs.core.first.call(null,seq21654);
var seq21654__$1 = cljs.core.next.call(null,seq21654);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__21655,seq21654__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21669 = arguments.length;
var i__8890__auto___21670 = (0);
while(true){
if((i__8890__auto___21670 < len__8889__auto___21669)){
args__8896__auto__.push((arguments[i__8890__auto___21670]));

var G__21671 = (i__8890__auto___21670 + (1));
i__8890__auto___21670 = G__21671;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21665){
var vec__21666 = p__21665;
var content_type = cljs.core.nth.call(null,vec__21666,(0),null);
return ((function (vec__21666,content_type){
return (function (request){
var temp__5276__auto__ = (function (){var or__7610__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var content_type__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__21666,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq21663){
var G__21664 = cljs.core.first.call(null,seq21663);
var seq21663__$1 = cljs.core.next.call(null,seq21663);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__21664,seq21663__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var map__21672 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21672__$1 = ((((!((map__21672 == null)))?((((map__21672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21672):map__21672);
var encoding = cljs.core.get.call(null,map__21672__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__21672__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__21676 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21676__$1 = ((((!((map__21676 == null)))?((((map__21676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21676):map__21676);
var decoding = cljs.core.get.call(null,map__21676__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__21676__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__21676,map__21676__$1,decoding,decoding_opts){
return (function (p1__21674_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__21674_SHARP_,decoding,decoding_opts);
});})(map__21676,map__21676__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__21676,map__21676__$1,decoding,decoding_opts,transit_decode){
return (function (p1__21675_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21675_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__21676,map__21676__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__21678_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21678_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__21679){
var map__21680 = p__21679;
var map__21680__$1 = ((((!((map__21680 == null)))?((((map__21680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21680):map__21680);
var req = map__21680__$1;
var query_params = cljs.core.get.call(null,map__21680__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__21682){
var map__21683 = p__21682;
var map__21683__$1 = ((((!((map__21683 == null)))?((((map__21683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21683):map__21683);
var request = map__21683__$1;
var form_params = cljs.core.get.call(null,map__21683__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__21683__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__21683__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__7598__auto__ = form_params;
if(cljs.core.truth_(and__7598__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7598__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__21685_21695 = cljs.core.seq.call(null,params);
var chunk__21686_21696 = null;
var count__21687_21697 = (0);
var i__21688_21698 = (0);
while(true){
if((i__21688_21698 < count__21687_21697)){
var vec__21689_21699 = cljs.core._nth.call(null,chunk__21686_21696,i__21688_21698);
var k_21700 = cljs.core.nth.call(null,vec__21689_21699,(0),null);
var v_21701 = cljs.core.nth.call(null,vec__21689_21699,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21701)){
form_data.append(cljs.core.name.call(null,k_21700),cljs.core.first.call(null,v_21701),cljs.core.second.call(null,v_21701));
} else {
form_data.append(cljs.core.name.call(null,k_21700),v_21701);
}

var G__21702 = seq__21685_21695;
var G__21703 = chunk__21686_21696;
var G__21704 = count__21687_21697;
var G__21705 = (i__21688_21698 + (1));
seq__21685_21695 = G__21702;
chunk__21686_21696 = G__21703;
count__21687_21697 = G__21704;
i__21688_21698 = G__21705;
continue;
} else {
var temp__5278__auto___21706 = cljs.core.seq.call(null,seq__21685_21695);
if(temp__5278__auto___21706){
var seq__21685_21707__$1 = temp__5278__auto___21706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21685_21707__$1)){
var c__8541__auto___21708 = cljs.core.chunk_first.call(null,seq__21685_21707__$1);
var G__21709 = cljs.core.chunk_rest.call(null,seq__21685_21707__$1);
var G__21710 = c__8541__auto___21708;
var G__21711 = cljs.core.count.call(null,c__8541__auto___21708);
var G__21712 = (0);
seq__21685_21695 = G__21709;
chunk__21686_21696 = G__21710;
count__21687_21697 = G__21711;
i__21688_21698 = G__21712;
continue;
} else {
var vec__21692_21713 = cljs.core.first.call(null,seq__21685_21707__$1);
var k_21714 = cljs.core.nth.call(null,vec__21692_21713,(0),null);
var v_21715 = cljs.core.nth.call(null,vec__21692_21713,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21715)){
form_data.append(cljs.core.name.call(null,k_21714),cljs.core.first.call(null,v_21715),cljs.core.second.call(null,v_21715));
} else {
form_data.append(cljs.core.name.call(null,k_21714),v_21715);
}

var G__21716 = cljs.core.next.call(null,seq__21685_21707__$1);
var G__21717 = null;
var G__21718 = (0);
var G__21719 = (0);
seq__21685_21695 = G__21716;
chunk__21686_21696 = G__21717;
count__21687_21697 = G__21718;
i__21688_21698 = G__21719;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__21720){
var map__21721 = p__21720;
var map__21721__$1 = ((((!((map__21721 == null)))?((((map__21721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21721):map__21721);
var request = map__21721__$1;
var multipart_params = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__7598__auto__ = multipart_params;
if(cljs.core.truth_(and__7598__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7598__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var m = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__21723_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__21723_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__21725){
var map__21726 = p__21725;
var map__21726__$1 = ((((!((map__21726 == null)))?((((map__21726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21726):map__21726);
var req = map__21726__$1;
var query_params = cljs.core.get.call(null,map__21726__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5276__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5276__auto__,map__21726,map__21726__$1,req,query_params){
return (function (p1__21724_SHARP_){
return cljs.core.merge.call(null,p1__21724_SHARP_,query_params);
});})(spec,temp__5276__auto__,map__21726,map__21726__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21734 = arguments.length;
var i__8890__auto___21735 = (0);
while(true){
if((i__8890__auto___21735 < len__8889__auto___21734)){
args__8896__auto__.push((arguments[i__8890__auto___21735]));

var G__21736 = (i__8890__auto___21735 + (1));
i__8890__auto___21735 = G__21736;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21730){
var vec__21731 = p__21730;
var credentials = cljs.core.nth.call(null,vec__21731,(0),null);
return ((function (vec__21731,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7610__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__21731,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq21728){
var G__21729 = cljs.core.first.call(null,seq21728);
var seq21728__$1 = cljs.core.next.call(null,seq21728);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__21729,seq21728__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var oauth_token = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var custom_channel = temp__5276__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21743 = arguments.length;
var i__8890__auto___21744 = (0);
while(true){
if((i__8890__auto___21744 < len__8889__auto___21743)){
args__8896__auto__.push((arguments[i__8890__auto___21744]));

var G__21745 = (i__8890__auto___21744 + (1));
i__8890__auto___21744 = G__21745;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21739){
var vec__21740 = p__21739;
var req = cljs.core.nth.call(null,vec__21740,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq21737){
var G__21738 = cljs.core.first.call(null,seq21737);
var seq21737__$1 = cljs.core.next.call(null,seq21737);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__21738,seq21737__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21752 = arguments.length;
var i__8890__auto___21753 = (0);
while(true){
if((i__8890__auto___21753 < len__8889__auto___21752)){
args__8896__auto__.push((arguments[i__8890__auto___21753]));

var G__21754 = (i__8890__auto___21753 + (1));
i__8890__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21748){
var vec__21749 = p__21748;
var req = cljs.core.nth.call(null,vec__21749,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq21746){
var G__21747 = cljs.core.first.call(null,seq21746);
var seq21746__$1 = cljs.core.next.call(null,seq21746);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__21747,seq21746__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21761 = arguments.length;
var i__8890__auto___21762 = (0);
while(true){
if((i__8890__auto___21762 < len__8889__auto___21761)){
args__8896__auto__.push((arguments[i__8890__auto___21762]));

var G__21763 = (i__8890__auto___21762 + (1));
i__8890__auto___21762 = G__21763;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21757){
var vec__21758 = p__21757;
var req = cljs.core.nth.call(null,vec__21758,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq21755){
var G__21756 = cljs.core.first.call(null,seq21755);
var seq21755__$1 = cljs.core.next.call(null,seq21755);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__21756,seq21755__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21770 = arguments.length;
var i__8890__auto___21771 = (0);
while(true){
if((i__8890__auto___21771 < len__8889__auto___21770)){
args__8896__auto__.push((arguments[i__8890__auto___21771]));

var G__21772 = (i__8890__auto___21771 + (1));
i__8890__auto___21771 = G__21772;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21766){
var vec__21767 = p__21766;
var req = cljs.core.nth.call(null,vec__21767,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq21764){
var G__21765 = cljs.core.first.call(null,seq21764);
var seq21764__$1 = cljs.core.next.call(null,seq21764);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__21765,seq21764__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21779 = arguments.length;
var i__8890__auto___21780 = (0);
while(true){
if((i__8890__auto___21780 < len__8889__auto___21779)){
args__8896__auto__.push((arguments[i__8890__auto___21780]));

var G__21781 = (i__8890__auto___21780 + (1));
i__8890__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21775){
var vec__21776 = p__21775;
var req = cljs.core.nth.call(null,vec__21776,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq21773){
var G__21774 = cljs.core.first.call(null,seq21773);
var seq21773__$1 = cljs.core.next.call(null,seq21773);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__21774,seq21773__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21788 = arguments.length;
var i__8890__auto___21789 = (0);
while(true){
if((i__8890__auto___21789 < len__8889__auto___21788)){
args__8896__auto__.push((arguments[i__8890__auto___21789]));

var G__21790 = (i__8890__auto___21789 + (1));
i__8890__auto___21789 = G__21790;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21784){
var vec__21785 = p__21784;
var req = cljs.core.nth.call(null,vec__21785,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq21782){
var G__21783 = cljs.core.first.call(null,seq21782);
var seq21782__$1 = cljs.core.next.call(null,seq21782);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__21783,seq21782__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21797 = arguments.length;
var i__8890__auto___21798 = (0);
while(true){
if((i__8890__auto___21798 < len__8889__auto___21797)){
args__8896__auto__.push((arguments[i__8890__auto___21798]));

var G__21799 = (i__8890__auto___21798 + (1));
i__8890__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21793){
var vec__21794 = p__21793;
var req = cljs.core.nth.call(null,vec__21794,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq21791){
var G__21792 = cljs.core.first.call(null,seq21791);
var seq21791__$1 = cljs.core.next.call(null,seq21791);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__21792,seq21791__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21806 = arguments.length;
var i__8890__auto___21807 = (0);
while(true){
if((i__8890__auto___21807 < len__8889__auto___21806)){
args__8896__auto__.push((arguments[i__8890__auto___21807]));

var G__21808 = (i__8890__auto___21807 + (1));
i__8890__auto___21807 = G__21808;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21802){
var vec__21803 = p__21802;
var req = cljs.core.nth.call(null,vec__21803,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq21800){
var G__21801 = cljs.core.first.call(null,seq21800);
var seq21800__$1 = cljs.core.next.call(null,seq21800);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__21801,seq21800__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8896__auto__ = [];
var len__8889__auto___21815 = arguments.length;
var i__8890__auto___21816 = (0);
while(true){
if((i__8890__auto___21816 < len__8889__auto___21815)){
args__8896__auto__.push((arguments[i__8890__auto___21816]));

var G__21817 = (i__8890__auto___21816 + (1));
i__8890__auto___21816 = G__21817;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21811){
var vec__21812 = p__21811;
var req = cljs.core.nth.call(null,vec__21812,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq21809){
var G__21810 = cljs.core.first.call(null,seq21809);
var seq21809__$1 = cljs.core.next.call(null,seq21809);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__21810,seq21809__$1);
});


//# sourceMappingURL=client.js.map?rel=1513171810051
