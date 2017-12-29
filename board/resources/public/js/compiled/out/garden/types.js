// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.types');
goog.require('cljs.core');

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k13562,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__13566 = k13562;
var G__13566__$1 = (((G__13566 instanceof cljs.core.Keyword))?G__13566.fqn:null);
switch (G__13566__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13562,else__8301__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#garden.types.CSSUnit{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13561){
var self__ = this;
var G__13561__$1 = this;
return (new cljs.core.RecordIter((0),G__13561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13563,other13564){
var self__ = this;
var this13563__$1 = this;
return (!((other13564 == null))) && ((this13563__$1.constructor === other13564.constructor)) && (cljs.core._EQ_.call(null,this13563__$1.unit,other13564.unit)) && (cljs.core._EQ_.call(null,this13563__$1.magnitude,other13564.magnitude)) && (cljs.core._EQ_.call(null,this13563__$1.__extmap,other13564.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__13561){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__13567 = cljs.core.keyword_identical_QMARK_;
var expr__13568 = k__8306__auto__;
if(cljs.core.truth_(pred__13567.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__13568))){
return (new garden.types.CSSUnit(G__13561,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13567.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__13568))){
return (new garden.types.CSSUnit(self__.unit,G__13561,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__13561),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__13561){
var self__ = this;
var this__8297__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__13561,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__13565){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__13565),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__13565),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__13565,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k13572,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__13576 = k13572;
var G__13576__$1 = (((G__13576 instanceof cljs.core.Keyword))?G__13576.fqn:null);
switch (G__13576__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13572,else__8301__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#garden.types.CSSFunction{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13571){
var self__ = this;
var G__13571__$1 = this;
return (new cljs.core.RecordIter((0),G__13571__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13573,other13574){
var self__ = this;
var this13573__$1 = this;
return (!((other13574 == null))) && ((this13573__$1.constructor === other13574.constructor)) && (cljs.core._EQ_.call(null,this13573__$1.function,other13574.function)) && (cljs.core._EQ_.call(null,this13573__$1.args,other13574.args)) && (cljs.core._EQ_.call(null,this13573__$1.__extmap,other13574.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__13571){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__13577 = cljs.core.keyword_identical_QMARK_;
var expr__13578 = k__8306__auto__;
if(cljs.core.truth_(pred__13577.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__13578))){
return (new garden.types.CSSFunction(G__13571,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13577.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__13578))){
return (new garden.types.CSSFunction(self__.function$,G__13571,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__13571),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__13571){
var self__ = this;
var this__8297__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__13571,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__13575){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__13575),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__13575),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__13575,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8298__auto__,k__8299__auto__){
var self__ = this;
var this__8298__auto____$1 = this;
return this__8298__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8299__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8300__auto__,k13582,else__8301__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
var G__13586 = k13582;
var G__13586__$1 = (((G__13586 instanceof cljs.core.Keyword))?G__13586.fqn:null);
switch (G__13586__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13582,else__8301__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8312__auto__,writer__8313__auto__,opts__8314__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
var pr_pair__8315__auto__ = ((function (this__8312__auto____$1){
return (function (keyval__8316__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,cljs.core.pr_writer,""," ","",opts__8314__auto__,keyval__8316__auto__);
});})(this__8312__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8313__auto__,pr_pair__8315__auto__,"#garden.types.CSSAtRule{",", ","}",opts__8314__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13581){
var self__ = this;
var G__13581__$1 = this;
return (new cljs.core.RecordIter((0),G__13581__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8296__auto__){
var self__ = this;
var this__8296__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8293__auto__){
var self__ = this;
var this__8293__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8302__auto__){
var self__ = this;
var this__8302__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8294__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
var h__8066__auto__ = self__.__hash;
if(!((h__8066__auto__ == null))){
return h__8066__auto__;
} else {
var h__8066__auto____$1 = ((function (h__8066__auto__,this__8294__auto____$1){
return (function (coll__8295__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__8295__auto__));
});})(h__8066__auto__,this__8294__auto____$1))
.call(null,this__8294__auto____$1);
self__.__hash = h__8066__auto____$1;

return h__8066__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13583,other13584){
var self__ = this;
var this13583__$1 = this;
return (!((other13584 == null))) && ((this13583__$1.constructor === other13584.constructor)) && (cljs.core._EQ_.call(null,this13583__$1.identifier,other13584.identifier)) && (cljs.core._EQ_.call(null,this13583__$1.value,other13584.value)) && (cljs.core._EQ_.call(null,this13583__$1.__extmap,other13584.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8307__auto__,k__8308__auto__){
var self__ = this;
var this__8307__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__8308__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8307__auto____$1),self__.__meta),k__8308__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8308__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8305__auto__,k__8306__auto__,G__13581){
var self__ = this;
var this__8305__auto____$1 = this;
var pred__13587 = cljs.core.keyword_identical_QMARK_;
var expr__13588 = k__8306__auto__;
if(cljs.core.truth_(pred__13587.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__13588))){
return (new garden.types.CSSAtRule(G__13581,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13587.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__13588))){
return (new garden.types.CSSAtRule(self__.identifier,G__13581,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8306__auto__,G__13581),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8310__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8297__auto__,G__13581){
var self__ = this;
var this__8297__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__13581,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8303__auto__,entry__8304__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8304__auto__)){
return this__8303__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8304__auto__,(0)),cljs.core._nth.call(null,entry__8304__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8303__auto____$1,entry__8304__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__8336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__8336__auto__,writer__8337__auto__){
return cljs.core._write.call(null,writer__8337__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__13585){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__13585),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13585),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__13585,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map?rel=1513171804100
