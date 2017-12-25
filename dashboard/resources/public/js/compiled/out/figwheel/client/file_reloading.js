// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__33894__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__33894__auto__){
return or__33894__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__33894__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
var or__33894__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__33894__auto____$1)){
return or__33894__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__58166_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__58166_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__58167 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__58168 = null;
var count__58169 = (0);
var i__58170 = (0);
while(true){
if((i__58170 < count__58169)){
var n = cljs.core._nth.call(null,chunk__58168,i__58170);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58171 = seq__58167;
var G__58172 = chunk__58168;
var G__58173 = count__58169;
var G__58174 = (i__58170 + (1));
seq__58167 = G__58171;
chunk__58168 = G__58172;
count__58169 = G__58173;
i__58170 = G__58174;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__58167);
if(temp__5278__auto__){
var seq__58167__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58167__$1)){
var c__34825__auto__ = cljs.core.chunk_first.call(null,seq__58167__$1);
var G__58175 = cljs.core.chunk_rest.call(null,seq__58167__$1);
var G__58176 = c__34825__auto__;
var G__58177 = cljs.core.count.call(null,c__34825__auto__);
var G__58178 = (0);
seq__58167 = G__58175;
chunk__58168 = G__58176;
count__58169 = G__58177;
i__58170 = G__58178;
continue;
} else {
var n = cljs.core.first.call(null,seq__58167__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__58179 = cljs.core.next.call(null,seq__58167__$1);
var G__58180 = null;
var G__58181 = (0);
var G__58182 = (0);
seq__58167 = G__58179;
chunk__58168 = G__58180;
count__58169 = G__58181;
i__58170 = G__58182;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__58183){
var vec__58184 = p__58183;
var _ = cljs.core.nth.call(null,vec__58184,(0),null);
var v = cljs.core.nth.call(null,vec__58184,(1),null);
var and__33882__auto__ = v;
if(cljs.core.truth_(and__33882__auto__)){
return v.call(null,dep);
} else {
return and__33882__auto__;
}
}),cljs.core.filter.call(null,(function (p__58187){
var vec__58188 = p__58187;
var k = cljs.core.nth.call(null,vec__58188,(0),null);
var v = cljs.core.nth.call(null,vec__58188,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__58200_58208 = cljs.core.seq.call(null,deps);
var chunk__58201_58209 = null;
var count__58202_58210 = (0);
var i__58203_58211 = (0);
while(true){
if((i__58203_58211 < count__58202_58210)){
var dep_58212 = cljs.core._nth.call(null,chunk__58201_58209,i__58203_58211);
if(cljs.core.truth_((function (){var and__33882__auto__ = dep_58212;
if(cljs.core.truth_(and__33882__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_58212));
} else {
return and__33882__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_58212,(depth + (1)),state);
} else {
}

var G__58213 = seq__58200_58208;
var G__58214 = chunk__58201_58209;
var G__58215 = count__58202_58210;
var G__58216 = (i__58203_58211 + (1));
seq__58200_58208 = G__58213;
chunk__58201_58209 = G__58214;
count__58202_58210 = G__58215;
i__58203_58211 = G__58216;
continue;
} else {
var temp__5278__auto___58217 = cljs.core.seq.call(null,seq__58200_58208);
if(temp__5278__auto___58217){
var seq__58200_58218__$1 = temp__5278__auto___58217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58200_58218__$1)){
var c__34825__auto___58219 = cljs.core.chunk_first.call(null,seq__58200_58218__$1);
var G__58220 = cljs.core.chunk_rest.call(null,seq__58200_58218__$1);
var G__58221 = c__34825__auto___58219;
var G__58222 = cljs.core.count.call(null,c__34825__auto___58219);
var G__58223 = (0);
seq__58200_58208 = G__58220;
chunk__58201_58209 = G__58221;
count__58202_58210 = G__58222;
i__58203_58211 = G__58223;
continue;
} else {
var dep_58224 = cljs.core.first.call(null,seq__58200_58218__$1);
if(cljs.core.truth_((function (){var and__33882__auto__ = dep_58224;
if(cljs.core.truth_(and__33882__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_58224));
} else {
return and__33882__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_58224,(depth + (1)),state);
} else {
}

var G__58225 = cljs.core.next.call(null,seq__58200_58218__$1);
var G__58226 = null;
var G__58227 = (0);
var G__58228 = (0);
seq__58200_58208 = G__58225;
chunk__58201_58209 = G__58226;
count__58202_58210 = G__58227;
i__58203_58211 = G__58228;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__58204){
var vec__58205 = p__58204;
var seq__58206 = cljs.core.seq.call(null,vec__58205);
var first__58207 = cljs.core.first.call(null,seq__58206);
var seq__58206__$1 = cljs.core.next.call(null,seq__58206);
var x = first__58207;
var xs = seq__58206__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__58205,seq__58206,first__58207,seq__58206__$1,x,xs,get_deps__$1){
return (function (p1__58191_SHARP_){
return clojure.set.difference.call(null,p1__58191_SHARP_,x);
});})(vec__58205,seq__58206,first__58207,seq__58206__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__58229 = cljs.core.seq.call(null,provides);
var chunk__58230 = null;
var count__58231 = (0);
var i__58232 = (0);
while(true){
if((i__58232 < count__58231)){
var prov = cljs.core._nth.call(null,chunk__58230,i__58232);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58233_58241 = cljs.core.seq.call(null,requires);
var chunk__58234_58242 = null;
var count__58235_58243 = (0);
var i__58236_58244 = (0);
while(true){
if((i__58236_58244 < count__58235_58243)){
var req_58245 = cljs.core._nth.call(null,chunk__58234_58242,i__58236_58244);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58245,prov);

var G__58246 = seq__58233_58241;
var G__58247 = chunk__58234_58242;
var G__58248 = count__58235_58243;
var G__58249 = (i__58236_58244 + (1));
seq__58233_58241 = G__58246;
chunk__58234_58242 = G__58247;
count__58235_58243 = G__58248;
i__58236_58244 = G__58249;
continue;
} else {
var temp__5278__auto___58250 = cljs.core.seq.call(null,seq__58233_58241);
if(temp__5278__auto___58250){
var seq__58233_58251__$1 = temp__5278__auto___58250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58233_58251__$1)){
var c__34825__auto___58252 = cljs.core.chunk_first.call(null,seq__58233_58251__$1);
var G__58253 = cljs.core.chunk_rest.call(null,seq__58233_58251__$1);
var G__58254 = c__34825__auto___58252;
var G__58255 = cljs.core.count.call(null,c__34825__auto___58252);
var G__58256 = (0);
seq__58233_58241 = G__58253;
chunk__58234_58242 = G__58254;
count__58235_58243 = G__58255;
i__58236_58244 = G__58256;
continue;
} else {
var req_58257 = cljs.core.first.call(null,seq__58233_58251__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58257,prov);

var G__58258 = cljs.core.next.call(null,seq__58233_58251__$1);
var G__58259 = null;
var G__58260 = (0);
var G__58261 = (0);
seq__58233_58241 = G__58258;
chunk__58234_58242 = G__58259;
count__58235_58243 = G__58260;
i__58236_58244 = G__58261;
continue;
}
} else {
}
}
break;
}

var G__58262 = seq__58229;
var G__58263 = chunk__58230;
var G__58264 = count__58231;
var G__58265 = (i__58232 + (1));
seq__58229 = G__58262;
chunk__58230 = G__58263;
count__58231 = G__58264;
i__58232 = G__58265;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__58229);
if(temp__5278__auto__){
var seq__58229__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58229__$1)){
var c__34825__auto__ = cljs.core.chunk_first.call(null,seq__58229__$1);
var G__58266 = cljs.core.chunk_rest.call(null,seq__58229__$1);
var G__58267 = c__34825__auto__;
var G__58268 = cljs.core.count.call(null,c__34825__auto__);
var G__58269 = (0);
seq__58229 = G__58266;
chunk__58230 = G__58267;
count__58231 = G__58268;
i__58232 = G__58269;
continue;
} else {
var prov = cljs.core.first.call(null,seq__58229__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58237_58270 = cljs.core.seq.call(null,requires);
var chunk__58238_58271 = null;
var count__58239_58272 = (0);
var i__58240_58273 = (0);
while(true){
if((i__58240_58273 < count__58239_58272)){
var req_58274 = cljs.core._nth.call(null,chunk__58238_58271,i__58240_58273);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58274,prov);

var G__58275 = seq__58237_58270;
var G__58276 = chunk__58238_58271;
var G__58277 = count__58239_58272;
var G__58278 = (i__58240_58273 + (1));
seq__58237_58270 = G__58275;
chunk__58238_58271 = G__58276;
count__58239_58272 = G__58277;
i__58240_58273 = G__58278;
continue;
} else {
var temp__5278__auto___58279__$1 = cljs.core.seq.call(null,seq__58237_58270);
if(temp__5278__auto___58279__$1){
var seq__58237_58280__$1 = temp__5278__auto___58279__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58237_58280__$1)){
var c__34825__auto___58281 = cljs.core.chunk_first.call(null,seq__58237_58280__$1);
var G__58282 = cljs.core.chunk_rest.call(null,seq__58237_58280__$1);
var G__58283 = c__34825__auto___58281;
var G__58284 = cljs.core.count.call(null,c__34825__auto___58281);
var G__58285 = (0);
seq__58237_58270 = G__58282;
chunk__58238_58271 = G__58283;
count__58239_58272 = G__58284;
i__58240_58273 = G__58285;
continue;
} else {
var req_58286 = cljs.core.first.call(null,seq__58237_58280__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58286,prov);

var G__58287 = cljs.core.next.call(null,seq__58237_58280__$1);
var G__58288 = null;
var G__58289 = (0);
var G__58290 = (0);
seq__58237_58270 = G__58287;
chunk__58238_58271 = G__58288;
count__58239_58272 = G__58289;
i__58240_58273 = G__58290;
continue;
}
} else {
}
}
break;
}

var G__58291 = cljs.core.next.call(null,seq__58229__$1);
var G__58292 = null;
var G__58293 = (0);
var G__58294 = (0);
seq__58229 = G__58291;
chunk__58230 = G__58292;
count__58231 = G__58293;
i__58232 = G__58294;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__58295_58299 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__58296_58300 = null;
var count__58297_58301 = (0);
var i__58298_58302 = (0);
while(true){
if((i__58298_58302 < count__58297_58301)){
var ns_58303 = cljs.core._nth.call(null,chunk__58296_58300,i__58298_58302);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58303);

var G__58304 = seq__58295_58299;
var G__58305 = chunk__58296_58300;
var G__58306 = count__58297_58301;
var G__58307 = (i__58298_58302 + (1));
seq__58295_58299 = G__58304;
chunk__58296_58300 = G__58305;
count__58297_58301 = G__58306;
i__58298_58302 = G__58307;
continue;
} else {
var temp__5278__auto___58308 = cljs.core.seq.call(null,seq__58295_58299);
if(temp__5278__auto___58308){
var seq__58295_58309__$1 = temp__5278__auto___58308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58295_58309__$1)){
var c__34825__auto___58310 = cljs.core.chunk_first.call(null,seq__58295_58309__$1);
var G__58311 = cljs.core.chunk_rest.call(null,seq__58295_58309__$1);
var G__58312 = c__34825__auto___58310;
var G__58313 = cljs.core.count.call(null,c__34825__auto___58310);
var G__58314 = (0);
seq__58295_58299 = G__58311;
chunk__58296_58300 = G__58312;
count__58297_58301 = G__58313;
i__58298_58302 = G__58314;
continue;
} else {
var ns_58315 = cljs.core.first.call(null,seq__58295_58309__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58315);

var G__58316 = cljs.core.next.call(null,seq__58295_58309__$1);
var G__58317 = null;
var G__58318 = (0);
var G__58319 = (0);
seq__58295_58299 = G__58316;
chunk__58296_58300 = G__58317;
count__58297_58301 = G__58318;
i__58298_58302 = G__58319;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__33894__auto__ = goog.require__;
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__58320__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__58320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58321__i = 0, G__58321__a = new Array(arguments.length -  0);
while (G__58321__i < G__58321__a.length) {G__58321__a[G__58321__i] = arguments[G__58321__i + 0]; ++G__58321__i;}
  args = new cljs.core.IndexedSeq(G__58321__a,0,null);
} 
return G__58320__delegate.call(this,args);};
G__58320.cljs$lang$maxFixedArity = 0;
G__58320.cljs$lang$applyTo = (function (arglist__58322){
var args = cljs.core.seq(arglist__58322);
return G__58320__delegate(args);
});
G__58320.cljs$core$IFn$_invoke$arity$variadic = G__58320__delegate;
return G__58320;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__58323_SHARP_,p2__58324_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58323_SHARP_)].join('')),p2__58324_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__58325_SHARP_,p2__58326_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58325_SHARP_)].join(''),p2__58326_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__58327 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__58327.addCallback(((function (G__58327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__58327))
);

G__58327.addErrback(((function (G__58327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__58327))
);

return G__58327;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e58328){if((e58328 instanceof Error)){
var e = e58328;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58328;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e58329){if((e58329 instanceof Error)){
var e = e58329;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58329;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__58330 = cljs.core._EQ_;
var expr__58331 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__58330.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__58331))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__58330.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__58331))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__58330.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__58331))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__58330,expr__58331){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__58330,expr__58331))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__58333,callback){
var map__58334 = p__58333;
var map__58334__$1 = ((((!((map__58334 == null)))?((((map__58334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58334):map__58334);
var file_msg = map__58334__$1;
var request_url = cljs.core.get.call(null,map__58334__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__33894__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__58334,map__58334__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__58334,map__58334__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto__){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto__){
return (function (state_58374){
var state_val_58375 = (state_58374[(1)]);
if((state_val_58375 === (7))){
var inst_58370 = (state_58374[(2)]);
var state_58374__$1 = state_58374;
var statearr_58376_58403 = state_58374__$1;
(statearr_58376_58403[(2)] = inst_58370);

(statearr_58376_58403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (1))){
var state_58374__$1 = state_58374;
var statearr_58377_58404 = state_58374__$1;
(statearr_58377_58404[(2)] = null);

(statearr_58377_58404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (4))){
var inst_58338 = (state_58374[(7)]);
var inst_58338__$1 = (state_58374[(2)]);
var state_58374__$1 = (function (){var statearr_58378 = state_58374;
(statearr_58378[(7)] = inst_58338__$1);

return statearr_58378;
})();
if(cljs.core.truth_(inst_58338__$1)){
var statearr_58379_58405 = state_58374__$1;
(statearr_58379_58405[(1)] = (5));

} else {
var statearr_58380_58406 = state_58374__$1;
(statearr_58380_58406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (15))){
var inst_58352 = (state_58374[(8)]);
var inst_58355 = (state_58374[(9)]);
var inst_58357 = inst_58355.call(null,inst_58352);
var state_58374__$1 = state_58374;
var statearr_58381_58407 = state_58374__$1;
(statearr_58381_58407[(2)] = inst_58357);

(statearr_58381_58407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (13))){
var inst_58364 = (state_58374[(2)]);
var state_58374__$1 = state_58374;
var statearr_58382_58408 = state_58374__$1;
(statearr_58382_58408[(2)] = inst_58364);

(statearr_58382_58408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (6))){
var state_58374__$1 = state_58374;
var statearr_58383_58409 = state_58374__$1;
(statearr_58383_58409[(2)] = null);

(statearr_58383_58409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (17))){
var inst_58361 = (state_58374[(2)]);
var state_58374__$1 = state_58374;
var statearr_58384_58410 = state_58374__$1;
(statearr_58384_58410[(2)] = inst_58361);

(statearr_58384_58410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (3))){
var inst_58372 = (state_58374[(2)]);
var state_58374__$1 = state_58374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58374__$1,inst_58372);
} else {
if((state_val_58375 === (12))){
var state_58374__$1 = state_58374;
var statearr_58385_58411 = state_58374__$1;
(statearr_58385_58411[(2)] = null);

(statearr_58385_58411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (2))){
var state_58374__$1 = state_58374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58374__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_58375 === (11))){
var inst_58343 = (state_58374[(10)]);
var inst_58350 = figwheel.client.file_reloading.blocking_load.call(null,inst_58343);
var state_58374__$1 = state_58374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58374__$1,(14),inst_58350);
} else {
if((state_val_58375 === (9))){
var inst_58343 = (state_58374[(10)]);
var state_58374__$1 = state_58374;
if(cljs.core.truth_(inst_58343)){
var statearr_58386_58412 = state_58374__$1;
(statearr_58386_58412[(1)] = (11));

} else {
var statearr_58387_58413 = state_58374__$1;
(statearr_58387_58413[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (5))){
var inst_58344 = (state_58374[(11)]);
var inst_58338 = (state_58374[(7)]);
var inst_58343 = cljs.core.nth.call(null,inst_58338,(0),null);
var inst_58344__$1 = cljs.core.nth.call(null,inst_58338,(1),null);
var state_58374__$1 = (function (){var statearr_58388 = state_58374;
(statearr_58388[(11)] = inst_58344__$1);

(statearr_58388[(10)] = inst_58343);

return statearr_58388;
})();
if(cljs.core.truth_(inst_58344__$1)){
var statearr_58389_58414 = state_58374__$1;
(statearr_58389_58414[(1)] = (8));

} else {
var statearr_58390_58415 = state_58374__$1;
(statearr_58390_58415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (14))){
var inst_58355 = (state_58374[(9)]);
var inst_58343 = (state_58374[(10)]);
var inst_58352 = (state_58374[(2)]);
var inst_58353 = console.log("Loading!",inst_58343);
var inst_58354 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_58355__$1 = cljs.core.get.call(null,inst_58354,inst_58343);
var state_58374__$1 = (function (){var statearr_58391 = state_58374;
(statearr_58391[(8)] = inst_58352);

(statearr_58391[(12)] = inst_58353);

(statearr_58391[(9)] = inst_58355__$1);

return statearr_58391;
})();
if(cljs.core.truth_(inst_58355__$1)){
var statearr_58392_58416 = state_58374__$1;
(statearr_58392_58416[(1)] = (15));

} else {
var statearr_58393_58417 = state_58374__$1;
(statearr_58393_58417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (16))){
var inst_58352 = (state_58374[(8)]);
var inst_58359 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_58352);
var state_58374__$1 = state_58374;
var statearr_58394_58418 = state_58374__$1;
(statearr_58394_58418[(2)] = inst_58359);

(statearr_58394_58418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (10))){
var inst_58366 = (state_58374[(2)]);
var state_58374__$1 = (function (){var statearr_58395 = state_58374;
(statearr_58395[(13)] = inst_58366);

return statearr_58395;
})();
var statearr_58396_58419 = state_58374__$1;
(statearr_58396_58419[(2)] = null);

(statearr_58396_58419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (8))){
var inst_58344 = (state_58374[(11)]);
var inst_58346 = console.log("Evaling!",inst_58344);
var inst_58347 = eval(inst_58344);
var state_58374__$1 = (function (){var statearr_58397 = state_58374;
(statearr_58397[(14)] = inst_58346);

return statearr_58397;
})();
var statearr_58398_58420 = state_58374__$1;
(statearr_58398_58420[(2)] = inst_58347);

(statearr_58398_58420[(1)] = (10));


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
});})(c__37619__auto__))
;
return ((function (switch__37596__auto__,c__37619__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37597__auto__ = null;
var figwheel$client$file_reloading$state_machine__37597__auto____0 = (function (){
var statearr_58399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58399[(0)] = figwheel$client$file_reloading$state_machine__37597__auto__);

(statearr_58399[(1)] = (1));

return statearr_58399;
});
var figwheel$client$file_reloading$state_machine__37597__auto____1 = (function (state_58374){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_58374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e58400){if((e58400 instanceof Object)){
var ex__37600__auto__ = e58400;
var statearr_58401_58421 = state_58374;
(statearr_58401_58421[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58422 = state_58374;
state_58374 = G__58422;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37597__auto__ = function(state_58374){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37597__auto____1.call(this,state_58374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37597__auto____0;
figwheel$client$file_reloading$state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37597__auto____1;
return figwheel$client$file_reloading$state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto__))
})();
var state__37621__auto__ = (function (){var statearr_58402 = f__37620__auto__.call(null);
(statearr_58402[(6)] = c__37619__auto__);

return statearr_58402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto__))
);

return c__37619__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__58424 = arguments.length;
switch (G__58424) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__58426,callback){
var map__58427 = p__58426;
var map__58427__$1 = ((((!((map__58427 == null)))?((((map__58427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58427):map__58427);
var file_msg = map__58427__$1;
var namespace = cljs.core.get.call(null,map__58427__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__58427,map__58427__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__58427,map__58427__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__58429){
var map__58430 = p__58429;
var map__58430__$1 = ((((!((map__58430 == null)))?((((map__58430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58430):map__58430);
var file_msg = map__58430__$1;
var namespace = cljs.core.get.call(null,map__58430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__58432){
var map__58433 = p__58432;
var map__58433__$1 = ((((!((map__58433 == null)))?((((map__58433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58433):map__58433);
var file_msg = map__58433__$1;
var namespace = cljs.core.get.call(null,map__58433__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__33882__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__33882__auto__){
var or__33894__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
var or__33894__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33894__auto____$1)){
return or__33894__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__33882__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__58435,callback){
var map__58436 = p__58435;
var map__58436__$1 = ((((!((map__58436 == null)))?((((map__58436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58436):map__58436);
var file_msg = map__58436__$1;
var request_url = cljs.core.get.call(null,map__58436__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__58436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37619__auto___58486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto___58486,out){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto___58486,out){
return (function (state_58471){
var state_val_58472 = (state_58471[(1)]);
if((state_val_58472 === (1))){
var inst_58445 = cljs.core.seq.call(null,files);
var inst_58446 = cljs.core.first.call(null,inst_58445);
var inst_58447 = cljs.core.next.call(null,inst_58445);
var inst_58448 = files;
var state_58471__$1 = (function (){var statearr_58473 = state_58471;
(statearr_58473[(7)] = inst_58448);

(statearr_58473[(8)] = inst_58446);

(statearr_58473[(9)] = inst_58447);

return statearr_58473;
})();
var statearr_58474_58487 = state_58471__$1;
(statearr_58474_58487[(2)] = null);

(statearr_58474_58487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58472 === (2))){
var inst_58454 = (state_58471[(10)]);
var inst_58448 = (state_58471[(7)]);
var inst_58453 = cljs.core.seq.call(null,inst_58448);
var inst_58454__$1 = cljs.core.first.call(null,inst_58453);
var inst_58455 = cljs.core.next.call(null,inst_58453);
var inst_58456 = (inst_58454__$1 == null);
var inst_58457 = cljs.core.not.call(null,inst_58456);
var state_58471__$1 = (function (){var statearr_58475 = state_58471;
(statearr_58475[(10)] = inst_58454__$1);

(statearr_58475[(11)] = inst_58455);

return statearr_58475;
})();
if(inst_58457){
var statearr_58476_58488 = state_58471__$1;
(statearr_58476_58488[(1)] = (4));

} else {
var statearr_58477_58489 = state_58471__$1;
(statearr_58477_58489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58472 === (3))){
var inst_58469 = (state_58471[(2)]);
var state_58471__$1 = state_58471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58471__$1,inst_58469);
} else {
if((state_val_58472 === (4))){
var inst_58454 = (state_58471[(10)]);
var inst_58459 = figwheel.client.file_reloading.reload_js_file.call(null,inst_58454);
var state_58471__$1 = state_58471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58471__$1,(7),inst_58459);
} else {
if((state_val_58472 === (5))){
var inst_58465 = cljs.core.async.close_BANG_.call(null,out);
var state_58471__$1 = state_58471;
var statearr_58478_58490 = state_58471__$1;
(statearr_58478_58490[(2)] = inst_58465);

(statearr_58478_58490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58472 === (6))){
var inst_58467 = (state_58471[(2)]);
var state_58471__$1 = state_58471;
var statearr_58479_58491 = state_58471__$1;
(statearr_58479_58491[(2)] = inst_58467);

(statearr_58479_58491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58472 === (7))){
var inst_58455 = (state_58471[(11)]);
var inst_58461 = (state_58471[(2)]);
var inst_58462 = cljs.core.async.put_BANG_.call(null,out,inst_58461);
var inst_58448 = inst_58455;
var state_58471__$1 = (function (){var statearr_58480 = state_58471;
(statearr_58480[(7)] = inst_58448);

(statearr_58480[(12)] = inst_58462);

return statearr_58480;
})();
var statearr_58481_58492 = state_58471__$1;
(statearr_58481_58492[(2)] = null);

(statearr_58481_58492[(1)] = (2));


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
});})(c__37619__auto___58486,out))
;
return ((function (switch__37596__auto__,c__37619__auto___58486,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____0 = (function (){
var statearr_58482 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58482[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__);

(statearr_58482[(1)] = (1));

return statearr_58482;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____1 = (function (state_58471){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_58471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e58483){if((e58483 instanceof Object)){
var ex__37600__auto__ = e58483;
var statearr_58484_58493 = state_58471;
(statearr_58484_58493[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58494 = state_58471;
state_58471 = G__58494;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__ = function(state_58471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____1.call(this,state_58471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto___58486,out))
})();
var state__37621__auto__ = (function (){var statearr_58485 = f__37620__auto__.call(null);
(statearr_58485[(6)] = c__37619__auto___58486);

return statearr_58485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto___58486,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__58495,opts){
var map__58496 = p__58495;
var map__58496__$1 = ((((!((map__58496 == null)))?((((map__58496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58496):map__58496);
var eval_body = cljs.core.get.call(null,map__58496__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__58496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__33882__auto__ = eval_body;
if(cljs.core.truth_(and__33882__auto__)){
return typeof eval_body === 'string';
} else {
return and__33882__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e58498){var e = e58498;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__58499_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58499_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__58500){
var vec__58501 = p__58500;
var k = cljs.core.nth.call(null,vec__58501,(0),null);
var v = cljs.core.nth.call(null,vec__58501,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__58504){
var vec__58505 = p__58504;
var k = cljs.core.nth.call(null,vec__58505,(0),null);
var v = cljs.core.nth.call(null,vec__58505,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__58511,p__58512){
var map__58513 = p__58511;
var map__58513__$1 = ((((!((map__58513 == null)))?((((map__58513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58513):map__58513);
var opts = map__58513__$1;
var before_jsload = cljs.core.get.call(null,map__58513__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58513__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58513__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58514 = p__58512;
var map__58514__$1 = ((((!((map__58514 == null)))?((((map__58514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58514):map__58514);
var msg = map__58514__$1;
var files = cljs.core.get.call(null,map__58514__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58514__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58514__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37620__auto__ = (function (){var switch__37596__auto__ = ((function (c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58668){
var state_val_58669 = (state_58668[(1)]);
if((state_val_58669 === (7))){
var inst_58528 = (state_58668[(7)]);
var inst_58531 = (state_58668[(8)]);
var inst_58529 = (state_58668[(9)]);
var inst_58530 = (state_58668[(10)]);
var inst_58536 = cljs.core._nth.call(null,inst_58529,inst_58531);
var inst_58537 = figwheel.client.file_reloading.eval_body.call(null,inst_58536,opts);
var inst_58538 = (inst_58531 + (1));
var tmp58670 = inst_58528;
var tmp58671 = inst_58529;
var tmp58672 = inst_58530;
var inst_58528__$1 = tmp58670;
var inst_58529__$1 = tmp58671;
var inst_58530__$1 = tmp58672;
var inst_58531__$1 = inst_58538;
var state_58668__$1 = (function (){var statearr_58673 = state_58668;
(statearr_58673[(7)] = inst_58528__$1);

(statearr_58673[(8)] = inst_58531__$1);

(statearr_58673[(9)] = inst_58529__$1);

(statearr_58673[(10)] = inst_58530__$1);

(statearr_58673[(11)] = inst_58537);

return statearr_58673;
})();
var statearr_58674_58757 = state_58668__$1;
(statearr_58674_58757[(2)] = null);

(statearr_58674_58757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (20))){
var inst_58571 = (state_58668[(12)]);
var inst_58579 = figwheel.client.file_reloading.sort_files.call(null,inst_58571);
var state_58668__$1 = state_58668;
var statearr_58675_58758 = state_58668__$1;
(statearr_58675_58758[(2)] = inst_58579);

(statearr_58675_58758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (27))){
var state_58668__$1 = state_58668;
var statearr_58676_58759 = state_58668__$1;
(statearr_58676_58759[(2)] = null);

(statearr_58676_58759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (1))){
var inst_58520 = (state_58668[(13)]);
var inst_58517 = before_jsload.call(null,files);
var inst_58518 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58519 = (function (){return ((function (inst_58520,inst_58517,inst_58518,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58508_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58508_SHARP_);
});
;})(inst_58520,inst_58517,inst_58518,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58520__$1 = cljs.core.filter.call(null,inst_58519,files);
var inst_58521 = cljs.core.not_empty.call(null,inst_58520__$1);
var state_58668__$1 = (function (){var statearr_58677 = state_58668;
(statearr_58677[(13)] = inst_58520__$1);

(statearr_58677[(14)] = inst_58517);

(statearr_58677[(15)] = inst_58518);

return statearr_58677;
})();
if(cljs.core.truth_(inst_58521)){
var statearr_58678_58760 = state_58668__$1;
(statearr_58678_58760[(1)] = (2));

} else {
var statearr_58679_58761 = state_58668__$1;
(statearr_58679_58761[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (24))){
var state_58668__$1 = state_58668;
var statearr_58680_58762 = state_58668__$1;
(statearr_58680_58762[(2)] = null);

(statearr_58680_58762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (39))){
var inst_58621 = (state_58668[(16)]);
var state_58668__$1 = state_58668;
var statearr_58681_58763 = state_58668__$1;
(statearr_58681_58763[(2)] = inst_58621);

(statearr_58681_58763[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (46))){
var inst_58663 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58682_58764 = state_58668__$1;
(statearr_58682_58764[(2)] = inst_58663);

(statearr_58682_58764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (4))){
var inst_58565 = (state_58668[(2)]);
var inst_58566 = cljs.core.List.EMPTY;
var inst_58567 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58566);
var inst_58568 = (function (){return ((function (inst_58565,inst_58566,inst_58567,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58509_SHARP_){
var and__33882__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58509_SHARP_);
if(cljs.core.truth_(and__33882__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58509_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__58509_SHARP_)));
} else {
return and__33882__auto__;
}
});
;})(inst_58565,inst_58566,inst_58567,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58569 = cljs.core.filter.call(null,inst_58568,files);
var inst_58570 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58571 = cljs.core.concat.call(null,inst_58569,inst_58570);
var state_58668__$1 = (function (){var statearr_58683 = state_58668;
(statearr_58683[(17)] = inst_58567);

(statearr_58683[(12)] = inst_58571);

(statearr_58683[(18)] = inst_58565);

return statearr_58683;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58684_58765 = state_58668__$1;
(statearr_58684_58765[(1)] = (16));

} else {
var statearr_58685_58766 = state_58668__$1;
(statearr_58685_58766[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (15))){
var inst_58555 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58686_58767 = state_58668__$1;
(statearr_58686_58767[(2)] = inst_58555);

(statearr_58686_58767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (21))){
var inst_58581 = (state_58668[(19)]);
var inst_58581__$1 = (state_58668[(2)]);
var inst_58582 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58581__$1);
var state_58668__$1 = (function (){var statearr_58687 = state_58668;
(statearr_58687[(19)] = inst_58581__$1);

return statearr_58687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58668__$1,(22),inst_58582);
} else {
if((state_val_58669 === (31))){
var inst_58666 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58668__$1,inst_58666);
} else {
if((state_val_58669 === (32))){
var inst_58621 = (state_58668[(16)]);
var inst_58626 = inst_58621.cljs$lang$protocol_mask$partition0$;
var inst_58627 = (inst_58626 & (64));
var inst_58628 = inst_58621.cljs$core$ISeq$;
var inst_58629 = (cljs.core.PROTOCOL_SENTINEL === inst_58628);
var inst_58630 = (inst_58627) || (inst_58629);
var state_58668__$1 = state_58668;
if(cljs.core.truth_(inst_58630)){
var statearr_58688_58768 = state_58668__$1;
(statearr_58688_58768[(1)] = (35));

} else {
var statearr_58689_58769 = state_58668__$1;
(statearr_58689_58769[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (40))){
var inst_58643 = (state_58668[(20)]);
var inst_58642 = (state_58668[(2)]);
var inst_58643__$1 = cljs.core.get.call(null,inst_58642,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58644 = cljs.core.get.call(null,inst_58642,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58645 = cljs.core.not_empty.call(null,inst_58643__$1);
var state_58668__$1 = (function (){var statearr_58690 = state_58668;
(statearr_58690[(21)] = inst_58644);

(statearr_58690[(20)] = inst_58643__$1);

return statearr_58690;
})();
if(cljs.core.truth_(inst_58645)){
var statearr_58691_58770 = state_58668__$1;
(statearr_58691_58770[(1)] = (41));

} else {
var statearr_58692_58771 = state_58668__$1;
(statearr_58692_58771[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (33))){
var state_58668__$1 = state_58668;
var statearr_58693_58772 = state_58668__$1;
(statearr_58693_58772[(2)] = false);

(statearr_58693_58772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (13))){
var inst_58541 = (state_58668[(22)]);
var inst_58545 = cljs.core.chunk_first.call(null,inst_58541);
var inst_58546 = cljs.core.chunk_rest.call(null,inst_58541);
var inst_58547 = cljs.core.count.call(null,inst_58545);
var inst_58528 = inst_58546;
var inst_58529 = inst_58545;
var inst_58530 = inst_58547;
var inst_58531 = (0);
var state_58668__$1 = (function (){var statearr_58694 = state_58668;
(statearr_58694[(7)] = inst_58528);

(statearr_58694[(8)] = inst_58531);

(statearr_58694[(9)] = inst_58529);

(statearr_58694[(10)] = inst_58530);

return statearr_58694;
})();
var statearr_58695_58773 = state_58668__$1;
(statearr_58695_58773[(2)] = null);

(statearr_58695_58773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (22))){
var inst_58589 = (state_58668[(23)]);
var inst_58581 = (state_58668[(19)]);
var inst_58585 = (state_58668[(24)]);
var inst_58584 = (state_58668[(25)]);
var inst_58584__$1 = (state_58668[(2)]);
var inst_58585__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58584__$1);
var inst_58586 = (function (){var all_files = inst_58581;
var res_SINGLEQUOTE_ = inst_58584__$1;
var res = inst_58585__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58589,inst_58581,inst_58585,inst_58584,inst_58584__$1,inst_58585__$1,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58510_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__58510_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58589,inst_58581,inst_58585,inst_58584,inst_58584__$1,inst_58585__$1,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58587 = cljs.core.filter.call(null,inst_58586,inst_58584__$1);
var inst_58588 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58588);
var inst_58590 = cljs.core.not_empty.call(null,inst_58589__$1);
var state_58668__$1 = (function (){var statearr_58696 = state_58668;
(statearr_58696[(26)] = inst_58587);

(statearr_58696[(23)] = inst_58589__$1);

(statearr_58696[(24)] = inst_58585__$1);

(statearr_58696[(25)] = inst_58584__$1);

return statearr_58696;
})();
if(cljs.core.truth_(inst_58590)){
var statearr_58697_58774 = state_58668__$1;
(statearr_58697_58774[(1)] = (23));

} else {
var statearr_58698_58775 = state_58668__$1;
(statearr_58698_58775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (36))){
var state_58668__$1 = state_58668;
var statearr_58699_58776 = state_58668__$1;
(statearr_58699_58776[(2)] = false);

(statearr_58699_58776[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (41))){
var inst_58643 = (state_58668[(20)]);
var inst_58647 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58648 = cljs.core.map.call(null,inst_58647,inst_58643);
var inst_58649 = cljs.core.pr_str.call(null,inst_58648);
var inst_58650 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58649)].join('');
var inst_58651 = figwheel.client.utils.log.call(null,inst_58650);
var state_58668__$1 = state_58668;
var statearr_58700_58777 = state_58668__$1;
(statearr_58700_58777[(2)] = inst_58651);

(statearr_58700_58777[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (43))){
var inst_58644 = (state_58668[(21)]);
var inst_58654 = (state_58668[(2)]);
var inst_58655 = cljs.core.not_empty.call(null,inst_58644);
var state_58668__$1 = (function (){var statearr_58701 = state_58668;
(statearr_58701[(27)] = inst_58654);

return statearr_58701;
})();
if(cljs.core.truth_(inst_58655)){
var statearr_58702_58778 = state_58668__$1;
(statearr_58702_58778[(1)] = (44));

} else {
var statearr_58703_58779 = state_58668__$1;
(statearr_58703_58779[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (29))){
var inst_58587 = (state_58668[(26)]);
var inst_58589 = (state_58668[(23)]);
var inst_58581 = (state_58668[(19)]);
var inst_58585 = (state_58668[(24)]);
var inst_58584 = (state_58668[(25)]);
var inst_58621 = (state_58668[(16)]);
var inst_58617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58620 = (function (){var all_files = inst_58581;
var res_SINGLEQUOTE_ = inst_58584;
var res = inst_58585;
var files_not_loaded = inst_58587;
var dependencies_that_loaded = inst_58589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58621,inst_58617,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58619){
var map__58704 = p__58619;
var map__58704__$1 = ((((!((map__58704 == null)))?((((map__58704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58704):map__58704);
var namespace = cljs.core.get.call(null,map__58704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58621,inst_58617,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58621__$1 = cljs.core.group_by.call(null,inst_58620,inst_58587);
var inst_58623 = (inst_58621__$1 == null);
var inst_58624 = cljs.core.not.call(null,inst_58623);
var state_58668__$1 = (function (){var statearr_58706 = state_58668;
(statearr_58706[(28)] = inst_58617);

(statearr_58706[(16)] = inst_58621__$1);

return statearr_58706;
})();
if(inst_58624){
var statearr_58707_58780 = state_58668__$1;
(statearr_58707_58780[(1)] = (32));

} else {
var statearr_58708_58781 = state_58668__$1;
(statearr_58708_58781[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (44))){
var inst_58644 = (state_58668[(21)]);
var inst_58657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58644);
var inst_58658 = cljs.core.pr_str.call(null,inst_58657);
var inst_58659 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58658)].join('');
var inst_58660 = figwheel.client.utils.log.call(null,inst_58659);
var state_58668__$1 = state_58668;
var statearr_58709_58782 = state_58668__$1;
(statearr_58709_58782[(2)] = inst_58660);

(statearr_58709_58782[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (6))){
var inst_58562 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58710_58783 = state_58668__$1;
(statearr_58710_58783[(2)] = inst_58562);

(statearr_58710_58783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (28))){
var inst_58587 = (state_58668[(26)]);
var inst_58614 = (state_58668[(2)]);
var inst_58615 = cljs.core.not_empty.call(null,inst_58587);
var state_58668__$1 = (function (){var statearr_58711 = state_58668;
(statearr_58711[(29)] = inst_58614);

return statearr_58711;
})();
if(cljs.core.truth_(inst_58615)){
var statearr_58712_58784 = state_58668__$1;
(statearr_58712_58784[(1)] = (29));

} else {
var statearr_58713_58785 = state_58668__$1;
(statearr_58713_58785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (25))){
var inst_58585 = (state_58668[(24)]);
var inst_58601 = (state_58668[(2)]);
var inst_58602 = cljs.core.not_empty.call(null,inst_58585);
var state_58668__$1 = (function (){var statearr_58714 = state_58668;
(statearr_58714[(30)] = inst_58601);

return statearr_58714;
})();
if(cljs.core.truth_(inst_58602)){
var statearr_58715_58786 = state_58668__$1;
(statearr_58715_58786[(1)] = (26));

} else {
var statearr_58716_58787 = state_58668__$1;
(statearr_58716_58787[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (34))){
var inst_58637 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
if(cljs.core.truth_(inst_58637)){
var statearr_58717_58788 = state_58668__$1;
(statearr_58717_58788[(1)] = (38));

} else {
var statearr_58718_58789 = state_58668__$1;
(statearr_58718_58789[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (17))){
var state_58668__$1 = state_58668;
var statearr_58719_58790 = state_58668__$1;
(statearr_58719_58790[(2)] = recompile_dependents);

(statearr_58719_58790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (3))){
var state_58668__$1 = state_58668;
var statearr_58720_58791 = state_58668__$1;
(statearr_58720_58791[(2)] = null);

(statearr_58720_58791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (12))){
var inst_58558 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58721_58792 = state_58668__$1;
(statearr_58721_58792[(2)] = inst_58558);

(statearr_58721_58792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (2))){
var inst_58520 = (state_58668[(13)]);
var inst_58527 = cljs.core.seq.call(null,inst_58520);
var inst_58528 = inst_58527;
var inst_58529 = null;
var inst_58530 = (0);
var inst_58531 = (0);
var state_58668__$1 = (function (){var statearr_58722 = state_58668;
(statearr_58722[(7)] = inst_58528);

(statearr_58722[(8)] = inst_58531);

(statearr_58722[(9)] = inst_58529);

(statearr_58722[(10)] = inst_58530);

return statearr_58722;
})();
var statearr_58723_58793 = state_58668__$1;
(statearr_58723_58793[(2)] = null);

(statearr_58723_58793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (23))){
var inst_58587 = (state_58668[(26)]);
var inst_58589 = (state_58668[(23)]);
var inst_58581 = (state_58668[(19)]);
var inst_58585 = (state_58668[(24)]);
var inst_58584 = (state_58668[(25)]);
var inst_58592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58594 = (function (){var all_files = inst_58581;
var res_SINGLEQUOTE_ = inst_58584;
var res = inst_58585;
var files_not_loaded = inst_58587;
var dependencies_that_loaded = inst_58589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58592,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58593){
var map__58724 = p__58593;
var map__58724__$1 = ((((!((map__58724 == null)))?((((map__58724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58724):map__58724);
var request_url = cljs.core.get.call(null,map__58724__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58592,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58595 = cljs.core.reverse.call(null,inst_58589);
var inst_58596 = cljs.core.map.call(null,inst_58594,inst_58595);
var inst_58597 = cljs.core.pr_str.call(null,inst_58596);
var inst_58598 = figwheel.client.utils.log.call(null,inst_58597);
var state_58668__$1 = (function (){var statearr_58726 = state_58668;
(statearr_58726[(31)] = inst_58592);

return statearr_58726;
})();
var statearr_58727_58794 = state_58668__$1;
(statearr_58727_58794[(2)] = inst_58598);

(statearr_58727_58794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (35))){
var state_58668__$1 = state_58668;
var statearr_58728_58795 = state_58668__$1;
(statearr_58728_58795[(2)] = true);

(statearr_58728_58795[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (19))){
var inst_58571 = (state_58668[(12)]);
var inst_58577 = figwheel.client.file_reloading.expand_files.call(null,inst_58571);
var state_58668__$1 = state_58668;
var statearr_58729_58796 = state_58668__$1;
(statearr_58729_58796[(2)] = inst_58577);

(statearr_58729_58796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (11))){
var state_58668__$1 = state_58668;
var statearr_58730_58797 = state_58668__$1;
(statearr_58730_58797[(2)] = null);

(statearr_58730_58797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (9))){
var inst_58560 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58731_58798 = state_58668__$1;
(statearr_58731_58798[(2)] = inst_58560);

(statearr_58731_58798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (5))){
var inst_58531 = (state_58668[(8)]);
var inst_58530 = (state_58668[(10)]);
var inst_58533 = (inst_58531 < inst_58530);
var inst_58534 = inst_58533;
var state_58668__$1 = state_58668;
if(cljs.core.truth_(inst_58534)){
var statearr_58732_58799 = state_58668__$1;
(statearr_58732_58799[(1)] = (7));

} else {
var statearr_58733_58800 = state_58668__$1;
(statearr_58733_58800[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (14))){
var inst_58541 = (state_58668[(22)]);
var inst_58550 = cljs.core.first.call(null,inst_58541);
var inst_58551 = figwheel.client.file_reloading.eval_body.call(null,inst_58550,opts);
var inst_58552 = cljs.core.next.call(null,inst_58541);
var inst_58528 = inst_58552;
var inst_58529 = null;
var inst_58530 = (0);
var inst_58531 = (0);
var state_58668__$1 = (function (){var statearr_58734 = state_58668;
(statearr_58734[(7)] = inst_58528);

(statearr_58734[(32)] = inst_58551);

(statearr_58734[(8)] = inst_58531);

(statearr_58734[(9)] = inst_58529);

(statearr_58734[(10)] = inst_58530);

return statearr_58734;
})();
var statearr_58735_58801 = state_58668__$1;
(statearr_58735_58801[(2)] = null);

(statearr_58735_58801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (45))){
var state_58668__$1 = state_58668;
var statearr_58736_58802 = state_58668__$1;
(statearr_58736_58802[(2)] = null);

(statearr_58736_58802[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (26))){
var inst_58587 = (state_58668[(26)]);
var inst_58589 = (state_58668[(23)]);
var inst_58581 = (state_58668[(19)]);
var inst_58585 = (state_58668[(24)]);
var inst_58584 = (state_58668[(25)]);
var inst_58604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58606 = (function (){var all_files = inst_58581;
var res_SINGLEQUOTE_ = inst_58584;
var res = inst_58585;
var files_not_loaded = inst_58587;
var dependencies_that_loaded = inst_58589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58604,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58605){
var map__58737 = p__58605;
var map__58737__$1 = ((((!((map__58737 == null)))?((((map__58737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58737):map__58737);
var namespace = cljs.core.get.call(null,map__58737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58604,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58607 = cljs.core.map.call(null,inst_58606,inst_58585);
var inst_58608 = cljs.core.pr_str.call(null,inst_58607);
var inst_58609 = figwheel.client.utils.log.call(null,inst_58608);
var inst_58610 = (function (){var all_files = inst_58581;
var res_SINGLEQUOTE_ = inst_58584;
var res = inst_58585;
var files_not_loaded = inst_58587;
var dependencies_that_loaded = inst_58589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58604,inst_58606,inst_58607,inst_58608,inst_58609,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58587,inst_58589,inst_58581,inst_58585,inst_58584,inst_58604,inst_58606,inst_58607,inst_58608,inst_58609,state_val_58669,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58611 = setTimeout(inst_58610,(10));
var state_58668__$1 = (function (){var statearr_58739 = state_58668;
(statearr_58739[(33)] = inst_58604);

(statearr_58739[(34)] = inst_58609);

return statearr_58739;
})();
var statearr_58740_58803 = state_58668__$1;
(statearr_58740_58803[(2)] = inst_58611);

(statearr_58740_58803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (16))){
var state_58668__$1 = state_58668;
var statearr_58741_58804 = state_58668__$1;
(statearr_58741_58804[(2)] = reload_dependents);

(statearr_58741_58804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (38))){
var inst_58621 = (state_58668[(16)]);
var inst_58639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58621);
var state_58668__$1 = state_58668;
var statearr_58742_58805 = state_58668__$1;
(statearr_58742_58805[(2)] = inst_58639);

(statearr_58742_58805[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (30))){
var state_58668__$1 = state_58668;
var statearr_58743_58806 = state_58668__$1;
(statearr_58743_58806[(2)] = null);

(statearr_58743_58806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (10))){
var inst_58541 = (state_58668[(22)]);
var inst_58543 = cljs.core.chunked_seq_QMARK_.call(null,inst_58541);
var state_58668__$1 = state_58668;
if(inst_58543){
var statearr_58744_58807 = state_58668__$1;
(statearr_58744_58807[(1)] = (13));

} else {
var statearr_58745_58808 = state_58668__$1;
(statearr_58745_58808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (18))){
var inst_58575 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
if(cljs.core.truth_(inst_58575)){
var statearr_58746_58809 = state_58668__$1;
(statearr_58746_58809[(1)] = (19));

} else {
var statearr_58747_58810 = state_58668__$1;
(statearr_58747_58810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (42))){
var state_58668__$1 = state_58668;
var statearr_58748_58811 = state_58668__$1;
(statearr_58748_58811[(2)] = null);

(statearr_58748_58811[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (37))){
var inst_58634 = (state_58668[(2)]);
var state_58668__$1 = state_58668;
var statearr_58749_58812 = state_58668__$1;
(statearr_58749_58812[(2)] = inst_58634);

(statearr_58749_58812[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58669 === (8))){
var inst_58541 = (state_58668[(22)]);
var inst_58528 = (state_58668[(7)]);
var inst_58541__$1 = cljs.core.seq.call(null,inst_58528);
var state_58668__$1 = (function (){var statearr_58750 = state_58668;
(statearr_58750[(22)] = inst_58541__$1);

return statearr_58750;
})();
if(inst_58541__$1){
var statearr_58751_58813 = state_58668__$1;
(statearr_58751_58813[(1)] = (10));

} else {
var statearr_58752_58814 = state_58668__$1;
(statearr_58752_58814[(1)] = (11));

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
});})(c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37596__auto__,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____0 = (function (){
var statearr_58753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58753[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__);

(statearr_58753[(1)] = (1));

return statearr_58753;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____1 = (function (state_58668){
while(true){
var ret_value__37598__auto__ = (function (){try{while(true){
var result__37599__auto__ = switch__37596__auto__.call(null,state_58668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37599__auto__;
}
break;
}
}catch (e58754){if((e58754 instanceof Object)){
var ex__37600__auto__ = e58754;
var statearr_58755_58815 = state_58668;
(statearr_58755_58815[(5)] = ex__37600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58816 = state_58668;
state_58668 = G__58816;
continue;
} else {
return ret_value__37598__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__ = function(state_58668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____1.call(this,state_58668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37597__auto__;
})()
;})(switch__37596__auto__,c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37621__auto__ = (function (){var statearr_58756 = f__37620__auto__.call(null);
(statearr_58756[(6)] = c__37619__auto__);

return statearr_58756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37621__auto__);
});})(c__37619__auto__,map__58513,map__58513__$1,opts,before_jsload,on_jsload,reload_dependents,map__58514,map__58514__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37619__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58819,link){
var map__58820 = p__58819;
var map__58820__$1 = ((((!((map__58820 == null)))?((((map__58820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58820):map__58820);
var file = cljs.core.get.call(null,map__58820__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__58820,map__58820__$1,file){
return (function (p1__58817_SHARP_,p2__58818_SHARP_){
if(cljs.core._EQ_.call(null,p1__58817_SHARP_,p2__58818_SHARP_)){
return p1__58817_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__58820,map__58820__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58823){
var map__58824 = p__58823;
var map__58824__$1 = ((((!((map__58824 == null)))?((((map__58824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58824):map__58824);
var match_length = cljs.core.get.call(null,map__58824__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58824__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58822_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58822_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58826_SHARP_,p2__58827_SHARP_){
return cljs.core.assoc.call(null,p1__58826_SHARP_,cljs.core.get.call(null,p2__58827_SHARP_,key),p2__58827_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_58828 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_58828);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_58828);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58829,p__58830){
var map__58831 = p__58829;
var map__58831__$1 = ((((!((map__58831 == null)))?((((map__58831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58831):map__58831);
var on_cssload = cljs.core.get.call(null,map__58831__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__58832 = p__58830;
var map__58832__$1 = ((((!((map__58832 == null)))?((((map__58832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58832):map__58832);
var files_msg = map__58832__$1;
var files = cljs.core.get.call(null,map__58832__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513172446374
