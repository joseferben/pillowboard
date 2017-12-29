// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__34565__auto__,writer__34566__auto__,opt__34567__auto__){
return cljs.core._write.call(null,writer__34566__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58838 = arguments.length;
var i__35174__auto___58839 = (0);
while(true){
if((i__35174__auto___58839 < len__35173__auto___58838)){
args__35180__auto__.push((arguments[i__35174__auto___58839]));

var G__58840 = (i__35174__auto___58839 + (1));
i__35174__auto___58839 = G__58840;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq58837){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58837));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58842 = arguments.length;
var i__35174__auto___58843 = (0);
while(true){
if((i__35174__auto___58843 < len__35173__auto___58842)){
args__35180__auto__.push((arguments[i__35174__auto___58843]));

var G__58844 = (i__35174__auto___58843 + (1));
i__35174__auto___58843 = G__58844;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq58841){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58841));
});

var g_QMARK__58845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_58846 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58845){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__58845))
,null));
var mkg_58847 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58845,g_58846){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__58845,g_58846))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__58845,g_58846,mkg_58847){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__58845).call(null,x);
});})(g_QMARK__58845,g_58846,mkg_58847))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__58845,g_58846,mkg_58847){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_58847).call(null,gfn);
});})(g_QMARK__58845,g_58846,mkg_58847))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__58845,g_58846,mkg_58847){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_58846).call(null,generator);
});})(g_QMARK__58845,g_58846,mkg_58847))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35276__auto___58867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35276__auto___58867){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58868 = arguments.length;
var i__35174__auto___58869 = (0);
while(true){
if((i__35174__auto___58869 < len__35173__auto___58868)){
args__35180__auto__.push((arguments[i__35174__auto___58869]));

var G__58870 = (i__35174__auto___58869 + (1));
i__35174__auto___58869 = G__58870;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58867))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58867),args);
});})(g__35276__auto___58867))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35276__auto___58867){
return (function (seq58848){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58848));
});})(g__35276__auto___58867))
;


var g__35276__auto___58871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35276__auto___58871){
return (function cljs$spec$gen$alpha$list(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58872 = arguments.length;
var i__35174__auto___58873 = (0);
while(true){
if((i__35174__auto___58873 < len__35173__auto___58872)){
args__35180__auto__.push((arguments[i__35174__auto___58873]));

var G__58874 = (i__35174__auto___58873 + (1));
i__35174__auto___58873 = G__58874;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58871))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58871),args);
});})(g__35276__auto___58871))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35276__auto___58871){
return (function (seq58849){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58849));
});})(g__35276__auto___58871))
;


var g__35276__auto___58875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35276__auto___58875){
return (function cljs$spec$gen$alpha$map(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58876 = arguments.length;
var i__35174__auto___58877 = (0);
while(true){
if((i__35174__auto___58877 < len__35173__auto___58876)){
args__35180__auto__.push((arguments[i__35174__auto___58877]));

var G__58878 = (i__35174__auto___58877 + (1));
i__35174__auto___58877 = G__58878;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58875))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58875),args);
});})(g__35276__auto___58875))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35276__auto___58875){
return (function (seq58850){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58850));
});})(g__35276__auto___58875))
;


var g__35276__auto___58879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35276__auto___58879){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58880 = arguments.length;
var i__35174__auto___58881 = (0);
while(true){
if((i__35174__auto___58881 < len__35173__auto___58880)){
args__35180__auto__.push((arguments[i__35174__auto___58881]));

var G__58882 = (i__35174__auto___58881 + (1));
i__35174__auto___58881 = G__58882;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58879))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58879),args);
});})(g__35276__auto___58879))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35276__auto___58879){
return (function (seq58851){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58851));
});})(g__35276__auto___58879))
;


var g__35276__auto___58883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35276__auto___58883){
return (function cljs$spec$gen$alpha$set(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58884 = arguments.length;
var i__35174__auto___58885 = (0);
while(true){
if((i__35174__auto___58885 < len__35173__auto___58884)){
args__35180__auto__.push((arguments[i__35174__auto___58885]));

var G__58886 = (i__35174__auto___58885 + (1));
i__35174__auto___58885 = G__58886;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58883))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58883),args);
});})(g__35276__auto___58883))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35276__auto___58883){
return (function (seq58852){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58852));
});})(g__35276__auto___58883))
;


var g__35276__auto___58887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35276__auto___58887){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58888 = arguments.length;
var i__35174__auto___58889 = (0);
while(true){
if((i__35174__auto___58889 < len__35173__auto___58888)){
args__35180__auto__.push((arguments[i__35174__auto___58889]));

var G__58890 = (i__35174__auto___58889 + (1));
i__35174__auto___58889 = G__58890;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58887))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58887),args);
});})(g__35276__auto___58887))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35276__auto___58887){
return (function (seq58853){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58853));
});})(g__35276__auto___58887))
;


var g__35276__auto___58891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35276__auto___58891){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58892 = arguments.length;
var i__35174__auto___58893 = (0);
while(true){
if((i__35174__auto___58893 < len__35173__auto___58892)){
args__35180__auto__.push((arguments[i__35174__auto___58893]));

var G__58894 = (i__35174__auto___58893 + (1));
i__35174__auto___58893 = G__58894;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58891))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58891),args);
});})(g__35276__auto___58891))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35276__auto___58891){
return (function (seq58854){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58854));
});})(g__35276__auto___58891))
;


var g__35276__auto___58895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35276__auto___58895){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58896 = arguments.length;
var i__35174__auto___58897 = (0);
while(true){
if((i__35174__auto___58897 < len__35173__auto___58896)){
args__35180__auto__.push((arguments[i__35174__auto___58897]));

var G__58898 = (i__35174__auto___58897 + (1));
i__35174__auto___58897 = G__58898;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58895))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58895),args);
});})(g__35276__auto___58895))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35276__auto___58895){
return (function (seq58855){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58855));
});})(g__35276__auto___58895))
;


var g__35276__auto___58899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35276__auto___58899){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58900 = arguments.length;
var i__35174__auto___58901 = (0);
while(true){
if((i__35174__auto___58901 < len__35173__auto___58900)){
args__35180__auto__.push((arguments[i__35174__auto___58901]));

var G__58902 = (i__35174__auto___58901 + (1));
i__35174__auto___58901 = G__58902;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58899))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58899),args);
});})(g__35276__auto___58899))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35276__auto___58899){
return (function (seq58856){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58856));
});})(g__35276__auto___58899))
;


var g__35276__auto___58903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35276__auto___58903){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58904 = arguments.length;
var i__35174__auto___58905 = (0);
while(true){
if((i__35174__auto___58905 < len__35173__auto___58904)){
args__35180__auto__.push((arguments[i__35174__auto___58905]));

var G__58906 = (i__35174__auto___58905 + (1));
i__35174__auto___58905 = G__58906;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58903))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58903),args);
});})(g__35276__auto___58903))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35276__auto___58903){
return (function (seq58857){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58857));
});})(g__35276__auto___58903))
;


var g__35276__auto___58907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35276__auto___58907){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58908 = arguments.length;
var i__35174__auto___58909 = (0);
while(true){
if((i__35174__auto___58909 < len__35173__auto___58908)){
args__35180__auto__.push((arguments[i__35174__auto___58909]));

var G__58910 = (i__35174__auto___58909 + (1));
i__35174__auto___58909 = G__58910;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58907))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58907),args);
});})(g__35276__auto___58907))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35276__auto___58907){
return (function (seq58858){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58858));
});})(g__35276__auto___58907))
;


var g__35276__auto___58911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35276__auto___58911){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58912 = arguments.length;
var i__35174__auto___58913 = (0);
while(true){
if((i__35174__auto___58913 < len__35173__auto___58912)){
args__35180__auto__.push((arguments[i__35174__auto___58913]));

var G__58914 = (i__35174__auto___58913 + (1));
i__35174__auto___58913 = G__58914;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58911))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58911),args);
});})(g__35276__auto___58911))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35276__auto___58911){
return (function (seq58859){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58859));
});})(g__35276__auto___58911))
;


var g__35276__auto___58915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35276__auto___58915){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58916 = arguments.length;
var i__35174__auto___58917 = (0);
while(true){
if((i__35174__auto___58917 < len__35173__auto___58916)){
args__35180__auto__.push((arguments[i__35174__auto___58917]));

var G__58918 = (i__35174__auto___58917 + (1));
i__35174__auto___58917 = G__58918;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58915))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58915),args);
});})(g__35276__auto___58915))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35276__auto___58915){
return (function (seq58860){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58860));
});})(g__35276__auto___58915))
;


var g__35276__auto___58919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35276__auto___58919){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58920 = arguments.length;
var i__35174__auto___58921 = (0);
while(true){
if((i__35174__auto___58921 < len__35173__auto___58920)){
args__35180__auto__.push((arguments[i__35174__auto___58921]));

var G__58922 = (i__35174__auto___58921 + (1));
i__35174__auto___58921 = G__58922;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58919))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58919),args);
});})(g__35276__auto___58919))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35276__auto___58919){
return (function (seq58861){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58861));
});})(g__35276__auto___58919))
;


var g__35276__auto___58923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35276__auto___58923){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58924 = arguments.length;
var i__35174__auto___58925 = (0);
while(true){
if((i__35174__auto___58925 < len__35173__auto___58924)){
args__35180__auto__.push((arguments[i__35174__auto___58925]));

var G__58926 = (i__35174__auto___58925 + (1));
i__35174__auto___58925 = G__58926;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58923))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58923),args);
});})(g__35276__auto___58923))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35276__auto___58923){
return (function (seq58862){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58862));
});})(g__35276__auto___58923))
;


var g__35276__auto___58927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35276__auto___58927){
return (function cljs$spec$gen$alpha$return(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58928 = arguments.length;
var i__35174__auto___58929 = (0);
while(true){
if((i__35174__auto___58929 < len__35173__auto___58928)){
args__35180__auto__.push((arguments[i__35174__auto___58929]));

var G__58930 = (i__35174__auto___58929 + (1));
i__35174__auto___58929 = G__58930;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58927))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58927),args);
});})(g__35276__auto___58927))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35276__auto___58927){
return (function (seq58863){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58863));
});})(g__35276__auto___58927))
;


var g__35276__auto___58931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35276__auto___58931){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58932 = arguments.length;
var i__35174__auto___58933 = (0);
while(true){
if((i__35174__auto___58933 < len__35173__auto___58932)){
args__35180__auto__.push((arguments[i__35174__auto___58933]));

var G__58934 = (i__35174__auto___58933 + (1));
i__35174__auto___58933 = G__58934;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58931))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58931),args);
});})(g__35276__auto___58931))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35276__auto___58931){
return (function (seq58864){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58864));
});})(g__35276__auto___58931))
;


var g__35276__auto___58935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35276__auto___58935){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58936 = arguments.length;
var i__35174__auto___58937 = (0);
while(true){
if((i__35174__auto___58937 < len__35173__auto___58936)){
args__35180__auto__.push((arguments[i__35174__auto___58937]));

var G__58938 = (i__35174__auto___58937 + (1));
i__35174__auto___58937 = G__58938;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58935))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58935),args);
});})(g__35276__auto___58935))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35276__auto___58935){
return (function (seq58865){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58865));
});})(g__35276__auto___58935))
;


var g__35276__auto___58939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35276__auto___58939){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58940 = arguments.length;
var i__35174__auto___58941 = (0);
while(true){
if((i__35174__auto___58941 < len__35173__auto___58940)){
args__35180__auto__.push((arguments[i__35174__auto___58941]));

var G__58942 = (i__35174__auto___58941 + (1));
i__35174__auto___58941 = G__58942;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35276__auto___58939))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35276__auto___58939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35276__auto___58939),args);
});})(g__35276__auto___58939))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35276__auto___58939){
return (function (seq58866){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58866));
});})(g__35276__auto___58939))
;

var g__35289__auto___58964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35289__auto___58964){
return (function cljs$spec$gen$alpha$any(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58965 = arguments.length;
var i__35174__auto___58966 = (0);
while(true){
if((i__35174__auto___58966 < len__35173__auto___58965)){
args__35180__auto__.push((arguments[i__35174__auto___58966]));

var G__58967 = (i__35174__auto___58966 + (1));
i__35174__auto___58966 = G__58967;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58964))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58964){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58964);
});})(g__35289__auto___58964))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35289__auto___58964){
return (function (seq58943){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58943));
});})(g__35289__auto___58964))
;


var g__35289__auto___58968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35289__auto___58968){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58969 = arguments.length;
var i__35174__auto___58970 = (0);
while(true){
if((i__35174__auto___58970 < len__35173__auto___58969)){
args__35180__auto__.push((arguments[i__35174__auto___58970]));

var G__58971 = (i__35174__auto___58970 + (1));
i__35174__auto___58970 = G__58971;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58968))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58968){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58968);
});})(g__35289__auto___58968))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35289__auto___58968){
return (function (seq58944){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58944));
});})(g__35289__auto___58968))
;


var g__35289__auto___58972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35289__auto___58972){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58973 = arguments.length;
var i__35174__auto___58974 = (0);
while(true){
if((i__35174__auto___58974 < len__35173__auto___58973)){
args__35180__auto__.push((arguments[i__35174__auto___58974]));

var G__58975 = (i__35174__auto___58974 + (1));
i__35174__auto___58974 = G__58975;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58972))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58972){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58972);
});})(g__35289__auto___58972))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35289__auto___58972){
return (function (seq58945){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58945));
});})(g__35289__auto___58972))
;


var g__35289__auto___58976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35289__auto___58976){
return (function cljs$spec$gen$alpha$char(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58977 = arguments.length;
var i__35174__auto___58978 = (0);
while(true){
if((i__35174__auto___58978 < len__35173__auto___58977)){
args__35180__auto__.push((arguments[i__35174__auto___58978]));

var G__58979 = (i__35174__auto___58978 + (1));
i__35174__auto___58978 = G__58979;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58976))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58976){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58976);
});})(g__35289__auto___58976))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35289__auto___58976){
return (function (seq58946){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58946));
});})(g__35289__auto___58976))
;


var g__35289__auto___58980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35289__auto___58980){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58981 = arguments.length;
var i__35174__auto___58982 = (0);
while(true){
if((i__35174__auto___58982 < len__35173__auto___58981)){
args__35180__auto__.push((arguments[i__35174__auto___58982]));

var G__58983 = (i__35174__auto___58982 + (1));
i__35174__auto___58982 = G__58983;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58980))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58980){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58980);
});})(g__35289__auto___58980))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35289__auto___58980){
return (function (seq58947){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58947));
});})(g__35289__auto___58980))
;


var g__35289__auto___58984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35289__auto___58984){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58985 = arguments.length;
var i__35174__auto___58986 = (0);
while(true){
if((i__35174__auto___58986 < len__35173__auto___58985)){
args__35180__auto__.push((arguments[i__35174__auto___58986]));

var G__58987 = (i__35174__auto___58986 + (1));
i__35174__auto___58986 = G__58987;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58984))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58984){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58984);
});})(g__35289__auto___58984))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35289__auto___58984){
return (function (seq58948){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58948));
});})(g__35289__auto___58984))
;


var g__35289__auto___58988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35289__auto___58988){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58989 = arguments.length;
var i__35174__auto___58990 = (0);
while(true){
if((i__35174__auto___58990 < len__35173__auto___58989)){
args__35180__auto__.push((arguments[i__35174__auto___58990]));

var G__58991 = (i__35174__auto___58990 + (1));
i__35174__auto___58990 = G__58991;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58988))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58988){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58988);
});})(g__35289__auto___58988))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35289__auto___58988){
return (function (seq58949){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58949));
});})(g__35289__auto___58988))
;


var g__35289__auto___58992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35289__auto___58992){
return (function cljs$spec$gen$alpha$double(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58993 = arguments.length;
var i__35174__auto___58994 = (0);
while(true){
if((i__35174__auto___58994 < len__35173__auto___58993)){
args__35180__auto__.push((arguments[i__35174__auto___58994]));

var G__58995 = (i__35174__auto___58994 + (1));
i__35174__auto___58994 = G__58995;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58992))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58992){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58992);
});})(g__35289__auto___58992))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35289__auto___58992){
return (function (seq58950){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58950));
});})(g__35289__auto___58992))
;


var g__35289__auto___58996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35289__auto___58996){
return (function cljs$spec$gen$alpha$int(var_args){
var args__35180__auto__ = [];
var len__35173__auto___58997 = arguments.length;
var i__35174__auto___58998 = (0);
while(true){
if((i__35174__auto___58998 < len__35173__auto___58997)){
args__35180__auto__.push((arguments[i__35174__auto___58998]));

var G__58999 = (i__35174__auto___58998 + (1));
i__35174__auto___58998 = G__58999;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___58996))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___58996){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___58996);
});})(g__35289__auto___58996))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35289__auto___58996){
return (function (seq58951){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58951));
});})(g__35289__auto___58996))
;


var g__35289__auto___59000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35289__auto___59000){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59001 = arguments.length;
var i__35174__auto___59002 = (0);
while(true){
if((i__35174__auto___59002 < len__35173__auto___59001)){
args__35180__auto__.push((arguments[i__35174__auto___59002]));

var G__59003 = (i__35174__auto___59002 + (1));
i__35174__auto___59002 = G__59003;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59000))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59000){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59000);
});})(g__35289__auto___59000))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35289__auto___59000){
return (function (seq58952){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58952));
});})(g__35289__auto___59000))
;


var g__35289__auto___59004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35289__auto___59004){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59005 = arguments.length;
var i__35174__auto___59006 = (0);
while(true){
if((i__35174__auto___59006 < len__35173__auto___59005)){
args__35180__auto__.push((arguments[i__35174__auto___59006]));

var G__59007 = (i__35174__auto___59006 + (1));
i__35174__auto___59006 = G__59007;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59004))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59004){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59004);
});})(g__35289__auto___59004))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35289__auto___59004){
return (function (seq58953){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58953));
});})(g__35289__auto___59004))
;


var g__35289__auto___59008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35289__auto___59008){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59009 = arguments.length;
var i__35174__auto___59010 = (0);
while(true){
if((i__35174__auto___59010 < len__35173__auto___59009)){
args__35180__auto__.push((arguments[i__35174__auto___59010]));

var G__59011 = (i__35174__auto___59010 + (1));
i__35174__auto___59010 = G__59011;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59008))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59008){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59008);
});})(g__35289__auto___59008))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35289__auto___59008){
return (function (seq58954){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58954));
});})(g__35289__auto___59008))
;


var g__35289__auto___59012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35289__auto___59012){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59013 = arguments.length;
var i__35174__auto___59014 = (0);
while(true){
if((i__35174__auto___59014 < len__35173__auto___59013)){
args__35180__auto__.push((arguments[i__35174__auto___59014]));

var G__59015 = (i__35174__auto___59014 + (1));
i__35174__auto___59014 = G__59015;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59012))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59012){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59012);
});})(g__35289__auto___59012))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35289__auto___59012){
return (function (seq58955){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58955));
});})(g__35289__auto___59012))
;


var g__35289__auto___59016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35289__auto___59016){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59017 = arguments.length;
var i__35174__auto___59018 = (0);
while(true){
if((i__35174__auto___59018 < len__35173__auto___59017)){
args__35180__auto__.push((arguments[i__35174__auto___59018]));

var G__59019 = (i__35174__auto___59018 + (1));
i__35174__auto___59018 = G__59019;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59016))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59016){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59016);
});})(g__35289__auto___59016))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35289__auto___59016){
return (function (seq58956){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58956));
});})(g__35289__auto___59016))
;


var g__35289__auto___59020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35289__auto___59020){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59021 = arguments.length;
var i__35174__auto___59022 = (0);
while(true){
if((i__35174__auto___59022 < len__35173__auto___59021)){
args__35180__auto__.push((arguments[i__35174__auto___59022]));

var G__59023 = (i__35174__auto___59022 + (1));
i__35174__auto___59022 = G__59023;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59020))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59020){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59020);
});})(g__35289__auto___59020))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35289__auto___59020){
return (function (seq58957){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58957));
});})(g__35289__auto___59020))
;


var g__35289__auto___59024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35289__auto___59024){
return (function cljs$spec$gen$alpha$string(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59025 = arguments.length;
var i__35174__auto___59026 = (0);
while(true){
if((i__35174__auto___59026 < len__35173__auto___59025)){
args__35180__auto__.push((arguments[i__35174__auto___59026]));

var G__59027 = (i__35174__auto___59026 + (1));
i__35174__auto___59026 = G__59027;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59024))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59024){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59024);
});})(g__35289__auto___59024))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35289__auto___59024){
return (function (seq58958){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58958));
});})(g__35289__auto___59024))
;


var g__35289__auto___59028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35289__auto___59028){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59029 = arguments.length;
var i__35174__auto___59030 = (0);
while(true){
if((i__35174__auto___59030 < len__35173__auto___59029)){
args__35180__auto__.push((arguments[i__35174__auto___59030]));

var G__59031 = (i__35174__auto___59030 + (1));
i__35174__auto___59030 = G__59031;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59028))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59028){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59028);
});})(g__35289__auto___59028))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35289__auto___59028){
return (function (seq58959){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58959));
});})(g__35289__auto___59028))
;


var g__35289__auto___59032 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35289__auto___59032){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59033 = arguments.length;
var i__35174__auto___59034 = (0);
while(true){
if((i__35174__auto___59034 < len__35173__auto___59033)){
args__35180__auto__.push((arguments[i__35174__auto___59034]));

var G__59035 = (i__35174__auto___59034 + (1));
i__35174__auto___59034 = G__59035;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59032))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59032){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59032);
});})(g__35289__auto___59032))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35289__auto___59032){
return (function (seq58960){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58960));
});})(g__35289__auto___59032))
;


var g__35289__auto___59036 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35289__auto___59036){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59037 = arguments.length;
var i__35174__auto___59038 = (0);
while(true){
if((i__35174__auto___59038 < len__35173__auto___59037)){
args__35180__auto__.push((arguments[i__35174__auto___59038]));

var G__59039 = (i__35174__auto___59038 + (1));
i__35174__auto___59038 = G__59039;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59036))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59036){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59036);
});})(g__35289__auto___59036))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35289__auto___59036){
return (function (seq58961){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58961));
});})(g__35289__auto___59036))
;


var g__35289__auto___59040 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35289__auto___59040){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59041 = arguments.length;
var i__35174__auto___59042 = (0);
while(true){
if((i__35174__auto___59042 < len__35173__auto___59041)){
args__35180__auto__.push((arguments[i__35174__auto___59042]));

var G__59043 = (i__35174__auto___59042 + (1));
i__35174__auto___59042 = G__59043;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59040))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59040){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59040);
});})(g__35289__auto___59040))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35289__auto___59040){
return (function (seq58962){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58962));
});})(g__35289__auto___59040))
;


var g__35289__auto___59044 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35289__auto___59044){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59045 = arguments.length;
var i__35174__auto___59046 = (0);
while(true){
if((i__35174__auto___59046 < len__35173__auto___59045)){
args__35180__auto__.push((arguments[i__35174__auto___59046]));

var G__59047 = (i__35174__auto___59046 + (1));
i__35174__auto___59046 = G__59047;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});})(g__35289__auto___59044))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35289__auto___59044){
return (function (args){
return cljs.core.deref.call(null,g__35289__auto___59044);
});})(g__35289__auto___59044))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35289__auto___59044){
return (function (seq58963){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58963));
});})(g__35289__auto___59044))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__35180__auto__ = [];
var len__35173__auto___59050 = arguments.length;
var i__35174__auto___59051 = (0);
while(true){
if((i__35174__auto___59051 < len__35173__auto___59050)){
args__35180__auto__.push((arguments[i__35174__auto___59051]));

var G__59052 = (i__35174__auto___59051 + (1));
i__35174__auto___59051 = G__59052;
continue;
} else {
}
break;
}

var argseq__35181__auto__ = ((((0) < args__35180__auto__.length))?(new cljs.core.IndexedSeq(args__35180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35181__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__59048_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__59048_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq59049){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59049));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__59053_SHARP_){
return (new Date(p1__59053_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1513172446654
