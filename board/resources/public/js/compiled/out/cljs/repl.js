// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59633){
var map__59634 = p__59633;
var map__59634__$1 = ((((!((map__59634 == null)))?((((map__59634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59634):map__59634);
var m = map__59634__$1;
var n = cljs.core.get.call(null,map__59634__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59636_59658 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59637_59659 = null;
var count__59638_59660 = (0);
var i__59639_59661 = (0);
while(true){
if((i__59639_59661 < count__59638_59660)){
var f_59662 = cljs.core._nth.call(null,chunk__59637_59659,i__59639_59661);
cljs.core.println.call(null,"  ",f_59662);

var G__59663 = seq__59636_59658;
var G__59664 = chunk__59637_59659;
var G__59665 = count__59638_59660;
var G__59666 = (i__59639_59661 + (1));
seq__59636_59658 = G__59663;
chunk__59637_59659 = G__59664;
count__59638_59660 = G__59665;
i__59639_59661 = G__59666;
continue;
} else {
var temp__5278__auto___59667 = cljs.core.seq.call(null,seq__59636_59658);
if(temp__5278__auto___59667){
var seq__59636_59668__$1 = temp__5278__auto___59667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59636_59668__$1)){
var c__34825__auto___59669 = cljs.core.chunk_first.call(null,seq__59636_59668__$1);
var G__59670 = cljs.core.chunk_rest.call(null,seq__59636_59668__$1);
var G__59671 = c__34825__auto___59669;
var G__59672 = cljs.core.count.call(null,c__34825__auto___59669);
var G__59673 = (0);
seq__59636_59658 = G__59670;
chunk__59637_59659 = G__59671;
count__59638_59660 = G__59672;
i__59639_59661 = G__59673;
continue;
} else {
var f_59674 = cljs.core.first.call(null,seq__59636_59668__$1);
cljs.core.println.call(null,"  ",f_59674);

var G__59675 = cljs.core.next.call(null,seq__59636_59668__$1);
var G__59676 = null;
var G__59677 = (0);
var G__59678 = (0);
seq__59636_59658 = G__59675;
chunk__59637_59659 = G__59676;
count__59638_59660 = G__59677;
i__59639_59661 = G__59678;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59679 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__33894__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__33894__auto__)){
return or__33894__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59679);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59679)))?cljs.core.second.call(null,arglists_59679):arglists_59679));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59640_59680 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59641_59681 = null;
var count__59642_59682 = (0);
var i__59643_59683 = (0);
while(true){
if((i__59643_59683 < count__59642_59682)){
var vec__59644_59684 = cljs.core._nth.call(null,chunk__59641_59681,i__59643_59683);
var name_59685 = cljs.core.nth.call(null,vec__59644_59684,(0),null);
var map__59647_59686 = cljs.core.nth.call(null,vec__59644_59684,(1),null);
var map__59647_59687__$1 = ((((!((map__59647_59686 == null)))?((((map__59647_59686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59647_59686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59647_59686):map__59647_59686);
var doc_59688 = cljs.core.get.call(null,map__59647_59687__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59689 = cljs.core.get.call(null,map__59647_59687__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59685);

cljs.core.println.call(null," ",arglists_59689);

if(cljs.core.truth_(doc_59688)){
cljs.core.println.call(null," ",doc_59688);
} else {
}

var G__59690 = seq__59640_59680;
var G__59691 = chunk__59641_59681;
var G__59692 = count__59642_59682;
var G__59693 = (i__59643_59683 + (1));
seq__59640_59680 = G__59690;
chunk__59641_59681 = G__59691;
count__59642_59682 = G__59692;
i__59643_59683 = G__59693;
continue;
} else {
var temp__5278__auto___59694 = cljs.core.seq.call(null,seq__59640_59680);
if(temp__5278__auto___59694){
var seq__59640_59695__$1 = temp__5278__auto___59694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59640_59695__$1)){
var c__34825__auto___59696 = cljs.core.chunk_first.call(null,seq__59640_59695__$1);
var G__59697 = cljs.core.chunk_rest.call(null,seq__59640_59695__$1);
var G__59698 = c__34825__auto___59696;
var G__59699 = cljs.core.count.call(null,c__34825__auto___59696);
var G__59700 = (0);
seq__59640_59680 = G__59697;
chunk__59641_59681 = G__59698;
count__59642_59682 = G__59699;
i__59643_59683 = G__59700;
continue;
} else {
var vec__59649_59701 = cljs.core.first.call(null,seq__59640_59695__$1);
var name_59702 = cljs.core.nth.call(null,vec__59649_59701,(0),null);
var map__59652_59703 = cljs.core.nth.call(null,vec__59649_59701,(1),null);
var map__59652_59704__$1 = ((((!((map__59652_59703 == null)))?((((map__59652_59703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59652_59703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59652_59703):map__59652_59703);
var doc_59705 = cljs.core.get.call(null,map__59652_59704__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59706 = cljs.core.get.call(null,map__59652_59704__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59702);

cljs.core.println.call(null," ",arglists_59706);

if(cljs.core.truth_(doc_59705)){
cljs.core.println.call(null," ",doc_59705);
} else {
}

var G__59707 = cljs.core.next.call(null,seq__59640_59695__$1);
var G__59708 = null;
var G__59709 = (0);
var G__59710 = (0);
seq__59640_59680 = G__59707;
chunk__59641_59681 = G__59708;
count__59642_59682 = G__59709;
i__59643_59683 = G__59710;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__59654 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59655 = null;
var count__59656 = (0);
var i__59657 = (0);
while(true){
if((i__59657 < count__59656)){
var role = cljs.core._nth.call(null,chunk__59655,i__59657);
var temp__5278__auto___59711__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___59711__$1)){
var spec_59712 = temp__5278__auto___59711__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59712));
} else {
}

var G__59713 = seq__59654;
var G__59714 = chunk__59655;
var G__59715 = count__59656;
var G__59716 = (i__59657 + (1));
seq__59654 = G__59713;
chunk__59655 = G__59714;
count__59656 = G__59715;
i__59657 = G__59716;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__59654);
if(temp__5278__auto____$1){
var seq__59654__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59654__$1)){
var c__34825__auto__ = cljs.core.chunk_first.call(null,seq__59654__$1);
var G__59717 = cljs.core.chunk_rest.call(null,seq__59654__$1);
var G__59718 = c__34825__auto__;
var G__59719 = cljs.core.count.call(null,c__34825__auto__);
var G__59720 = (0);
seq__59654 = G__59717;
chunk__59655 = G__59718;
count__59656 = G__59719;
i__59657 = G__59720;
continue;
} else {
var role = cljs.core.first.call(null,seq__59654__$1);
var temp__5278__auto___59721__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___59721__$2)){
var spec_59722 = temp__5278__auto___59721__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59722));
} else {
}

var G__59723 = cljs.core.next.call(null,seq__59654__$1);
var G__59724 = null;
var G__59725 = (0);
var G__59726 = (0);
seq__59654 = G__59723;
chunk__59655 = G__59724;
count__59656 = G__59725;
i__59657 = G__59726;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1513172447764
