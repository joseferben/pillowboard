// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16514 = arguments.length;
switch (G__16514) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16515 = (function (f,blockable,meta16516){
this.f = f;
this.blockable = blockable;
this.meta16516 = meta16516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16517,meta16516__$1){
var self__ = this;
var _16517__$1 = this;
return (new cljs.core.async.t_cljs$core$async16515(self__.f,self__.blockable,meta16516__$1));
});

cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16517){
var self__ = this;
var _16517__$1 = this;
return self__.meta16516;
});

cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16516","meta16516",739733041,null)], null);
});

cljs.core.async.t_cljs$core$async16515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16515";

cljs.core.async.t_cljs$core$async16515.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async16515");
});

cljs.core.async.__GT_t_cljs$core$async16515 = (function cljs$core$async$__GT_t_cljs$core$async16515(f__$1,blockable__$1,meta16516){
return (new cljs.core.async.t_cljs$core$async16515(f__$1,blockable__$1,meta16516));
});

}

return (new cljs.core.async.t_cljs$core$async16515(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16521 = arguments.length;
switch (G__16521) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16524 = arguments.length;
switch (G__16524) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16527 = arguments.length;
switch (G__16527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16529 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16529);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16529,ret){
return (function (){
return fn1.call(null,val_16529);
});})(val_16529,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16531 = arguments.length;
switch (G__16531) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8655__auto___16533 = n;
var x_16534 = (0);
while(true){
if((x_16534 < n__8655__auto___16533)){
(a[x_16534] = (0));

var G__16535 = (x_16534 + (1));
x_16534 = G__16535;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16536 = (i + (1));
i = G__16536;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async16537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16537 = (function (flag,meta16538){
this.flag = flag;
this.meta16538 = meta16538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16539,meta16538__$1){
var self__ = this;
var _16539__$1 = this;
return (new cljs.core.async.t_cljs$core$async16537(self__.flag,meta16538__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16539){
var self__ = this;
var _16539__$1 = this;
return self__.meta16538;
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16538","meta16538",414587055,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16537";

cljs.core.async.t_cljs$core$async16537.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async16537");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16537 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16537(flag__$1,meta16538){
return (new cljs.core.async.t_cljs$core$async16537(flag__$1,meta16538));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16537(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16540 = (function (flag,cb,meta16541){
this.flag = flag;
this.cb = cb;
this.meta16541 = meta16541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16542,meta16541__$1){
var self__ = this;
var _16542__$1 = this;
return (new cljs.core.async.t_cljs$core$async16540(self__.flag,self__.cb,meta16541__$1));
});

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16542){
var self__ = this;
var _16542__$1 = this;
return self__.meta16541;
});

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16541","meta16541",-1806785122,null)], null);
});

cljs.core.async.t_cljs$core$async16540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16540";

cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async16540");
});

cljs.core.async.__GT_t_cljs$core$async16540 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16540(flag__$1,cb__$1,meta16541){
return (new cljs.core.async.t_cljs$core$async16540(flag__$1,cb__$1,meta16541));
});

}

return (new cljs.core.async.t_cljs$core$async16540(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16544_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7610__auto__ = wport;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16545 = (i + (1));
i = G__16545;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7610__auto__ = ret;
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__7598__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7598__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7598__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___16551 = arguments.length;
var i__8890__auto___16552 = (0);
while(true){
if((i__8890__auto___16552 < len__8889__auto___16551)){
args__8896__auto__.push((arguments[i__8890__auto___16552]));

var G__16553 = (i__8890__auto___16552 + (1));
i__8890__auto___16552 = G__16553;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((1) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8897__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16548){
var map__16549 = p__16548;
var map__16549__$1 = ((((!((map__16549 == null)))?((((map__16549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16549):map__16549);
var opts = map__16549__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16546){
var G__16547 = cljs.core.first.call(null,seq16546);
var seq16546__$1 = cljs.core.next.call(null,seq16546);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16547,seq16546__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16555 = arguments.length;
switch (G__16555) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16454__auto___16601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___16601){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___16601){
return (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (7))){
var inst_16575 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16581_16602 = state_16579__$1;
(statearr_16581_16602[(2)] = inst_16575);

(statearr_16581_16602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (1))){
var state_16579__$1 = state_16579;
var statearr_16582_16603 = state_16579__$1;
(statearr_16582_16603[(2)] = null);

(statearr_16582_16603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (4))){
var inst_16558 = (state_16579[(7)]);
var inst_16558__$1 = (state_16579[(2)]);
var inst_16559 = (inst_16558__$1 == null);
var state_16579__$1 = (function (){var statearr_16583 = state_16579;
(statearr_16583[(7)] = inst_16558__$1);

return statearr_16583;
})();
if(cljs.core.truth_(inst_16559)){
var statearr_16584_16604 = state_16579__$1;
(statearr_16584_16604[(1)] = (5));

} else {
var statearr_16585_16605 = state_16579__$1;
(statearr_16585_16605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (13))){
var state_16579__$1 = state_16579;
var statearr_16586_16606 = state_16579__$1;
(statearr_16586_16606[(2)] = null);

(statearr_16586_16606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (6))){
var inst_16558 = (state_16579[(7)]);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16579__$1,(11),to,inst_16558);
} else {
if((state_val_16580 === (3))){
var inst_16577 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16579__$1,inst_16577);
} else {
if((state_val_16580 === (12))){
var state_16579__$1 = state_16579;
var statearr_16587_16607 = state_16579__$1;
(statearr_16587_16607[(2)] = null);

(statearr_16587_16607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (2))){
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16579__$1,(4),from);
} else {
if((state_val_16580 === (11))){
var inst_16568 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
if(cljs.core.truth_(inst_16568)){
var statearr_16588_16608 = state_16579__$1;
(statearr_16588_16608[(1)] = (12));

} else {
var statearr_16589_16609 = state_16579__$1;
(statearr_16589_16609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (9))){
var state_16579__$1 = state_16579;
var statearr_16590_16610 = state_16579__$1;
(statearr_16590_16610[(2)] = null);

(statearr_16590_16610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (5))){
var state_16579__$1 = state_16579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16591_16611 = state_16579__$1;
(statearr_16591_16611[(1)] = (8));

} else {
var statearr_16592_16612 = state_16579__$1;
(statearr_16592_16612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (14))){
var inst_16573 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16593_16613 = state_16579__$1;
(statearr_16593_16613[(2)] = inst_16573);

(statearr_16593_16613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (10))){
var inst_16565 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16594_16614 = state_16579__$1;
(statearr_16594_16614[(2)] = inst_16565);

(statearr_16594_16614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (8))){
var inst_16562 = cljs.core.async.close_BANG_.call(null,to);
var state_16579__$1 = state_16579;
var statearr_16595_16615 = state_16579__$1;
(statearr_16595_16615[(2)] = inst_16562);

(statearr_16595_16615[(1)] = (10));


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
});})(c__16454__auto___16601))
;
return ((function (switch__16364__auto__,c__16454__auto___16601){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_16596 = [null,null,null,null,null,null,null,null];
(statearr_16596[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_16596[(1)] = (1));

return statearr_16596;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_16579){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16597){if((e16597 instanceof Object)){
var ex__16368__auto__ = e16597;
var statearr_16598_16616 = state_16579;
(statearr_16598_16616[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16617 = state_16579;
state_16579 = G__16617;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___16601))
})();
var state__16456__auto__ = (function (){var statearr_16599 = f__16455__auto__.call(null);
(statearr_16599[(6)] = c__16454__auto___16601);

return statearr_16599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___16601))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16618){
var vec__16619 = p__16618;
var v = cljs.core.nth.call(null,vec__16619,(0),null);
var p = cljs.core.nth.call(null,vec__16619,(1),null);
var job = vec__16619;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16454__auto___16790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results){
return (function (state_16626){
var state_val_16627 = (state_16626[(1)]);
if((state_val_16627 === (1))){
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16626__$1,(2),res,v);
} else {
if((state_val_16627 === (2))){
var inst_16623 = (state_16626[(2)]);
var inst_16624 = cljs.core.async.close_BANG_.call(null,res);
var state_16626__$1 = (function (){var statearr_16628 = state_16626;
(statearr_16628[(7)] = inst_16623);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16626__$1,inst_16624);
} else {
return null;
}
}
});})(c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results))
;
return ((function (switch__16364__auto__,c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_16629 = [null,null,null,null,null,null,null,null];
(statearr_16629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__);

(statearr_16629[(1)] = (1));

return statearr_16629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1 = (function (state_16626){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16630){if((e16630 instanceof Object)){
var ex__16368__auto__ = e16630;
var statearr_16631_16791 = state_16626;
(statearr_16631_16791[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16792 = state_16626;
state_16626 = G__16792;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = function(state_16626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1.call(this,state_16626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results))
})();
var state__16456__auto__ = (function (){var statearr_16632 = f__16455__auto__.call(null);
(statearr_16632[(6)] = c__16454__auto___16790);

return statearr_16632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___16790,res,vec__16619,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16633){
var vec__16634 = p__16633;
var v = cljs.core.nth.call(null,vec__16634,(0),null);
var p = cljs.core.nth.call(null,vec__16634,(1),null);
var job = vec__16634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8655__auto___16793 = n;
var __16794 = (0);
while(true){
if((__16794 < n__8655__auto___16793)){
var G__16637_16795 = type;
var G__16637_16796__$1 = (((G__16637_16795 instanceof cljs.core.Keyword))?G__16637_16795.fqn:null);
switch (G__16637_16796__$1) {
case "compute":
var c__16454__auto___16798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16794,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (__16794,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function (state_16650){
var state_val_16651 = (state_16650[(1)]);
if((state_val_16651 === (1))){
var state_16650__$1 = state_16650;
var statearr_16652_16799 = state_16650__$1;
(statearr_16652_16799[(2)] = null);

(statearr_16652_16799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16651 === (2))){
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16650__$1,(4),jobs);
} else {
if((state_val_16651 === (3))){
var inst_16648 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16650__$1,inst_16648);
} else {
if((state_val_16651 === (4))){
var inst_16640 = (state_16650[(2)]);
var inst_16641 = process.call(null,inst_16640);
var state_16650__$1 = state_16650;
if(cljs.core.truth_(inst_16641)){
var statearr_16653_16800 = state_16650__$1;
(statearr_16653_16800[(1)] = (5));

} else {
var statearr_16654_16801 = state_16650__$1;
(statearr_16654_16801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16651 === (5))){
var state_16650__$1 = state_16650;
var statearr_16655_16802 = state_16650__$1;
(statearr_16655_16802[(2)] = null);

(statearr_16655_16802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16651 === (6))){
var state_16650__$1 = state_16650;
var statearr_16656_16803 = state_16650__$1;
(statearr_16656_16803[(2)] = null);

(statearr_16656_16803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16651 === (7))){
var inst_16646 = (state_16650[(2)]);
var state_16650__$1 = state_16650;
var statearr_16657_16804 = state_16650__$1;
(statearr_16657_16804[(2)] = inst_16646);

(statearr_16657_16804[(1)] = (3));


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
});})(__16794,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
;
return ((function (__16794,switch__16364__auto__,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_16658 = [null,null,null,null,null,null,null];
(statearr_16658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__);

(statearr_16658[(1)] = (1));

return statearr_16658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1 = (function (state_16650){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16659){if((e16659 instanceof Object)){
var ex__16368__auto__ = e16659;
var statearr_16660_16805 = state_16650;
(statearr_16660_16805[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16806 = state_16650;
state_16650 = G__16806;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = function(state_16650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1.call(this,state_16650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__;
})()
;})(__16794,switch__16364__auto__,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
})();
var state__16456__auto__ = (function (){var statearr_16661 = f__16455__auto__.call(null);
(statearr_16661[(6)] = c__16454__auto___16798);

return statearr_16661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(__16794,c__16454__auto___16798,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
);


break;
case "async":
var c__16454__auto___16807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16794,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (__16794,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function (state_16674){
var state_val_16675 = (state_16674[(1)]);
if((state_val_16675 === (1))){
var state_16674__$1 = state_16674;
var statearr_16676_16808 = state_16674__$1;
(statearr_16676_16808[(2)] = null);

(statearr_16676_16808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16675 === (2))){
var state_16674__$1 = state_16674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16674__$1,(4),jobs);
} else {
if((state_val_16675 === (3))){
var inst_16672 = (state_16674[(2)]);
var state_16674__$1 = state_16674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16674__$1,inst_16672);
} else {
if((state_val_16675 === (4))){
var inst_16664 = (state_16674[(2)]);
var inst_16665 = async.call(null,inst_16664);
var state_16674__$1 = state_16674;
if(cljs.core.truth_(inst_16665)){
var statearr_16677_16809 = state_16674__$1;
(statearr_16677_16809[(1)] = (5));

} else {
var statearr_16678_16810 = state_16674__$1;
(statearr_16678_16810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16675 === (5))){
var state_16674__$1 = state_16674;
var statearr_16679_16811 = state_16674__$1;
(statearr_16679_16811[(2)] = null);

(statearr_16679_16811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16675 === (6))){
var state_16674__$1 = state_16674;
var statearr_16680_16812 = state_16674__$1;
(statearr_16680_16812[(2)] = null);

(statearr_16680_16812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16675 === (7))){
var inst_16670 = (state_16674[(2)]);
var state_16674__$1 = state_16674;
var statearr_16681_16813 = state_16674__$1;
(statearr_16681_16813[(2)] = inst_16670);

(statearr_16681_16813[(1)] = (3));


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
});})(__16794,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
;
return ((function (__16794,switch__16364__auto__,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_16682 = [null,null,null,null,null,null,null];
(statearr_16682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__);

(statearr_16682[(1)] = (1));

return statearr_16682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1 = (function (state_16674){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16683){if((e16683 instanceof Object)){
var ex__16368__auto__ = e16683;
var statearr_16684_16814 = state_16674;
(statearr_16684_16814[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16815 = state_16674;
state_16674 = G__16815;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = function(state_16674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1.call(this,state_16674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__;
})()
;})(__16794,switch__16364__auto__,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
})();
var state__16456__auto__ = (function (){var statearr_16685 = f__16455__auto__.call(null);
(statearr_16685[(6)] = c__16454__auto___16807);

return statearr_16685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(__16794,c__16454__auto___16807,G__16637_16795,G__16637_16796__$1,n__8655__auto___16793,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16637_16796__$1)].join('')));

}

var G__16816 = (__16794 + (1));
__16794 = G__16816;
continue;
} else {
}
break;
}

var c__16454__auto___16817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___16817,jobs,results,process,async){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___16817,jobs,results,process,async){
return (function (state_16707){
var state_val_16708 = (state_16707[(1)]);
if((state_val_16708 === (1))){
var state_16707__$1 = state_16707;
var statearr_16709_16818 = state_16707__$1;
(statearr_16709_16818[(2)] = null);

(statearr_16709_16818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (2))){
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16707__$1,(4),from);
} else {
if((state_val_16708 === (3))){
var inst_16705 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16707__$1,inst_16705);
} else {
if((state_val_16708 === (4))){
var inst_16688 = (state_16707[(7)]);
var inst_16688__$1 = (state_16707[(2)]);
var inst_16689 = (inst_16688__$1 == null);
var state_16707__$1 = (function (){var statearr_16710 = state_16707;
(statearr_16710[(7)] = inst_16688__$1);

return statearr_16710;
})();
if(cljs.core.truth_(inst_16689)){
var statearr_16711_16819 = state_16707__$1;
(statearr_16711_16819[(1)] = (5));

} else {
var statearr_16712_16820 = state_16707__$1;
(statearr_16712_16820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (5))){
var inst_16691 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16707__$1 = state_16707;
var statearr_16713_16821 = state_16707__$1;
(statearr_16713_16821[(2)] = inst_16691);

(statearr_16713_16821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (6))){
var inst_16688 = (state_16707[(7)]);
var inst_16693 = (state_16707[(8)]);
var inst_16693__$1 = cljs.core.async.chan.call(null,(1));
var inst_16694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16695 = [inst_16688,inst_16693__$1];
var inst_16696 = (new cljs.core.PersistentVector(null,2,(5),inst_16694,inst_16695,null));
var state_16707__$1 = (function (){var statearr_16714 = state_16707;
(statearr_16714[(8)] = inst_16693__$1);

return statearr_16714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16707__$1,(8),jobs,inst_16696);
} else {
if((state_val_16708 === (7))){
var inst_16703 = (state_16707[(2)]);
var state_16707__$1 = state_16707;
var statearr_16715_16822 = state_16707__$1;
(statearr_16715_16822[(2)] = inst_16703);

(statearr_16715_16822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16708 === (8))){
var inst_16693 = (state_16707[(8)]);
var inst_16698 = (state_16707[(2)]);
var state_16707__$1 = (function (){var statearr_16716 = state_16707;
(statearr_16716[(9)] = inst_16698);

return statearr_16716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16707__$1,(9),results,inst_16693);
} else {
if((state_val_16708 === (9))){
var inst_16700 = (state_16707[(2)]);
var state_16707__$1 = (function (){var statearr_16717 = state_16707;
(statearr_16717[(10)] = inst_16700);

return statearr_16717;
})();
var statearr_16718_16823 = state_16707__$1;
(statearr_16718_16823[(2)] = null);

(statearr_16718_16823[(1)] = (2));


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
});})(c__16454__auto___16817,jobs,results,process,async))
;
return ((function (switch__16364__auto__,c__16454__auto___16817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_16719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__);

(statearr_16719[(1)] = (1));

return statearr_16719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1 = (function (state_16707){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16720){if((e16720 instanceof Object)){
var ex__16368__auto__ = e16720;
var statearr_16721_16824 = state_16707;
(statearr_16721_16824[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16825 = state_16707;
state_16707 = G__16825;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = function(state_16707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1.call(this,state_16707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___16817,jobs,results,process,async))
})();
var state__16456__auto__ = (function (){var statearr_16722 = f__16455__auto__.call(null);
(statearr_16722[(6)] = c__16454__auto___16817);

return statearr_16722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___16817,jobs,results,process,async))
);


var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,jobs,results,process,async){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,jobs,results,process,async){
return (function (state_16760){
var state_val_16761 = (state_16760[(1)]);
if((state_val_16761 === (7))){
var inst_16756 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16762_16826 = state_16760__$1;
(statearr_16762_16826[(2)] = inst_16756);

(statearr_16762_16826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (20))){
var state_16760__$1 = state_16760;
var statearr_16763_16827 = state_16760__$1;
(statearr_16763_16827[(2)] = null);

(statearr_16763_16827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (1))){
var state_16760__$1 = state_16760;
var statearr_16764_16828 = state_16760__$1;
(statearr_16764_16828[(2)] = null);

(statearr_16764_16828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (4))){
var inst_16725 = (state_16760[(7)]);
var inst_16725__$1 = (state_16760[(2)]);
var inst_16726 = (inst_16725__$1 == null);
var state_16760__$1 = (function (){var statearr_16765 = state_16760;
(statearr_16765[(7)] = inst_16725__$1);

return statearr_16765;
})();
if(cljs.core.truth_(inst_16726)){
var statearr_16766_16829 = state_16760__$1;
(statearr_16766_16829[(1)] = (5));

} else {
var statearr_16767_16830 = state_16760__$1;
(statearr_16767_16830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (15))){
var inst_16738 = (state_16760[(8)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16760__$1,(18),to,inst_16738);
} else {
if((state_val_16761 === (21))){
var inst_16751 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16768_16831 = state_16760__$1;
(statearr_16768_16831[(2)] = inst_16751);

(statearr_16768_16831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (13))){
var inst_16753 = (state_16760[(2)]);
var state_16760__$1 = (function (){var statearr_16769 = state_16760;
(statearr_16769[(9)] = inst_16753);

return statearr_16769;
})();
var statearr_16770_16832 = state_16760__$1;
(statearr_16770_16832[(2)] = null);

(statearr_16770_16832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (6))){
var inst_16725 = (state_16760[(7)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16760__$1,(11),inst_16725);
} else {
if((state_val_16761 === (17))){
var inst_16746 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16746)){
var statearr_16771_16833 = state_16760__$1;
(statearr_16771_16833[(1)] = (19));

} else {
var statearr_16772_16834 = state_16760__$1;
(statearr_16772_16834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (3))){
var inst_16758 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16760__$1,inst_16758);
} else {
if((state_val_16761 === (12))){
var inst_16735 = (state_16760[(10)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16760__$1,(14),inst_16735);
} else {
if((state_val_16761 === (2))){
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16760__$1,(4),results);
} else {
if((state_val_16761 === (19))){
var state_16760__$1 = state_16760;
var statearr_16773_16835 = state_16760__$1;
(statearr_16773_16835[(2)] = null);

(statearr_16773_16835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (11))){
var inst_16735 = (state_16760[(2)]);
var state_16760__$1 = (function (){var statearr_16774 = state_16760;
(statearr_16774[(10)] = inst_16735);

return statearr_16774;
})();
var statearr_16775_16836 = state_16760__$1;
(statearr_16775_16836[(2)] = null);

(statearr_16775_16836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (9))){
var state_16760__$1 = state_16760;
var statearr_16776_16837 = state_16760__$1;
(statearr_16776_16837[(2)] = null);

(statearr_16776_16837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (5))){
var state_16760__$1 = state_16760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16777_16838 = state_16760__$1;
(statearr_16777_16838[(1)] = (8));

} else {
var statearr_16778_16839 = state_16760__$1;
(statearr_16778_16839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (14))){
var inst_16740 = (state_16760[(11)]);
var inst_16738 = (state_16760[(8)]);
var inst_16738__$1 = (state_16760[(2)]);
var inst_16739 = (inst_16738__$1 == null);
var inst_16740__$1 = cljs.core.not.call(null,inst_16739);
var state_16760__$1 = (function (){var statearr_16779 = state_16760;
(statearr_16779[(11)] = inst_16740__$1);

(statearr_16779[(8)] = inst_16738__$1);

return statearr_16779;
})();
if(inst_16740__$1){
var statearr_16780_16840 = state_16760__$1;
(statearr_16780_16840[(1)] = (15));

} else {
var statearr_16781_16841 = state_16760__$1;
(statearr_16781_16841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (16))){
var inst_16740 = (state_16760[(11)]);
var state_16760__$1 = state_16760;
var statearr_16782_16842 = state_16760__$1;
(statearr_16782_16842[(2)] = inst_16740);

(statearr_16782_16842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (10))){
var inst_16732 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16783_16843 = state_16760__$1;
(statearr_16783_16843[(2)] = inst_16732);

(statearr_16783_16843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (18))){
var inst_16743 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16784_16844 = state_16760__$1;
(statearr_16784_16844[(2)] = inst_16743);

(statearr_16784_16844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (8))){
var inst_16729 = cljs.core.async.close_BANG_.call(null,to);
var state_16760__$1 = state_16760;
var statearr_16785_16845 = state_16760__$1;
(statearr_16785_16845[(2)] = inst_16729);

(statearr_16785_16845[(1)] = (10));


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
});})(c__16454__auto__,jobs,results,process,async))
;
return ((function (switch__16364__auto__,c__16454__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_16786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__);

(statearr_16786[(1)] = (1));

return statearr_16786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1 = (function (state_16760){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16787){if((e16787 instanceof Object)){
var ex__16368__auto__ = e16787;
var statearr_16788_16846 = state_16760;
(statearr_16788_16846[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16847 = state_16760;
state_16760 = G__16847;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__ = function(state_16760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1.call(this,state_16760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,jobs,results,process,async))
})();
var state__16456__auto__ = (function (){var statearr_16789 = f__16455__auto__.call(null);
(statearr_16789[(6)] = c__16454__auto__);

return statearr_16789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,jobs,results,process,async))
);

return c__16454__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16849 = arguments.length;
switch (G__16849) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16852 = arguments.length;
switch (G__16852) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16855 = arguments.length;
switch (G__16855) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16454__auto___16904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___16904,tc,fc){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___16904,tc,fc){
return (function (state_16881){
var state_val_16882 = (state_16881[(1)]);
if((state_val_16882 === (7))){
var inst_16877 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16883_16905 = state_16881__$1;
(statearr_16883_16905[(2)] = inst_16877);

(statearr_16883_16905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (1))){
var state_16881__$1 = state_16881;
var statearr_16884_16906 = state_16881__$1;
(statearr_16884_16906[(2)] = null);

(statearr_16884_16906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (4))){
var inst_16858 = (state_16881[(7)]);
var inst_16858__$1 = (state_16881[(2)]);
var inst_16859 = (inst_16858__$1 == null);
var state_16881__$1 = (function (){var statearr_16885 = state_16881;
(statearr_16885[(7)] = inst_16858__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16859)){
var statearr_16886_16907 = state_16881__$1;
(statearr_16886_16907[(1)] = (5));

} else {
var statearr_16887_16908 = state_16881__$1;
(statearr_16887_16908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (13))){
var state_16881__$1 = state_16881;
var statearr_16888_16909 = state_16881__$1;
(statearr_16888_16909[(2)] = null);

(statearr_16888_16909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (6))){
var inst_16858 = (state_16881[(7)]);
var inst_16864 = p.call(null,inst_16858);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16864)){
var statearr_16889_16910 = state_16881__$1;
(statearr_16889_16910[(1)] = (9));

} else {
var statearr_16890_16911 = state_16881__$1;
(statearr_16890_16911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (3))){
var inst_16879 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16881__$1,inst_16879);
} else {
if((state_val_16882 === (12))){
var state_16881__$1 = state_16881;
var statearr_16891_16912 = state_16881__$1;
(statearr_16891_16912[(2)] = null);

(statearr_16891_16912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (2))){
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16881__$1,(4),ch);
} else {
if((state_val_16882 === (11))){
var inst_16858 = (state_16881[(7)]);
var inst_16868 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16881__$1,(8),inst_16868,inst_16858);
} else {
if((state_val_16882 === (9))){
var state_16881__$1 = state_16881;
var statearr_16892_16913 = state_16881__$1;
(statearr_16892_16913[(2)] = tc);

(statearr_16892_16913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (5))){
var inst_16861 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16862 = cljs.core.async.close_BANG_.call(null,fc);
var state_16881__$1 = (function (){var statearr_16893 = state_16881;
(statearr_16893[(8)] = inst_16861);

return statearr_16893;
})();
var statearr_16894_16914 = state_16881__$1;
(statearr_16894_16914[(2)] = inst_16862);

(statearr_16894_16914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (14))){
var inst_16875 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16895_16915 = state_16881__$1;
(statearr_16895_16915[(2)] = inst_16875);

(statearr_16895_16915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (10))){
var state_16881__$1 = state_16881;
var statearr_16896_16916 = state_16881__$1;
(statearr_16896_16916[(2)] = fc);

(statearr_16896_16916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (8))){
var inst_16870 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16870)){
var statearr_16897_16917 = state_16881__$1;
(statearr_16897_16917[(1)] = (12));

} else {
var statearr_16898_16918 = state_16881__$1;
(statearr_16898_16918[(1)] = (13));

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
});})(c__16454__auto___16904,tc,fc))
;
return ((function (switch__16364__auto__,c__16454__auto___16904,tc,fc){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_16899 = [null,null,null,null,null,null,null,null,null];
(statearr_16899[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_16899[(1)] = (1));

return statearr_16899;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_16881){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16900){if((e16900 instanceof Object)){
var ex__16368__auto__ = e16900;
var statearr_16901_16919 = state_16881;
(statearr_16901_16919[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16920 = state_16881;
state_16881 = G__16920;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_16881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_16881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___16904,tc,fc))
})();
var state__16456__auto__ = (function (){var statearr_16902 = f__16455__auto__.call(null);
(statearr_16902[(6)] = c__16454__auto___16904);

return statearr_16902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___16904,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__){
return (function (state_16941){
var state_val_16942 = (state_16941[(1)]);
if((state_val_16942 === (7))){
var inst_16937 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16943_16961 = state_16941__$1;
(statearr_16943_16961[(2)] = inst_16937);

(statearr_16943_16961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (1))){
var inst_16921 = init;
var state_16941__$1 = (function (){var statearr_16944 = state_16941;
(statearr_16944[(7)] = inst_16921);

return statearr_16944;
})();
var statearr_16945_16962 = state_16941__$1;
(statearr_16945_16962[(2)] = null);

(statearr_16945_16962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (4))){
var inst_16924 = (state_16941[(8)]);
var inst_16924__$1 = (state_16941[(2)]);
var inst_16925 = (inst_16924__$1 == null);
var state_16941__$1 = (function (){var statearr_16946 = state_16941;
(statearr_16946[(8)] = inst_16924__$1);

return statearr_16946;
})();
if(cljs.core.truth_(inst_16925)){
var statearr_16947_16963 = state_16941__$1;
(statearr_16947_16963[(1)] = (5));

} else {
var statearr_16948_16964 = state_16941__$1;
(statearr_16948_16964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (6))){
var inst_16928 = (state_16941[(9)]);
var inst_16924 = (state_16941[(8)]);
var inst_16921 = (state_16941[(7)]);
var inst_16928__$1 = f.call(null,inst_16921,inst_16924);
var inst_16929 = cljs.core.reduced_QMARK_.call(null,inst_16928__$1);
var state_16941__$1 = (function (){var statearr_16949 = state_16941;
(statearr_16949[(9)] = inst_16928__$1);

return statearr_16949;
})();
if(inst_16929){
var statearr_16950_16965 = state_16941__$1;
(statearr_16950_16965[(1)] = (8));

} else {
var statearr_16951_16966 = state_16941__$1;
(statearr_16951_16966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (3))){
var inst_16939 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16941__$1,inst_16939);
} else {
if((state_val_16942 === (2))){
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16941__$1,(4),ch);
} else {
if((state_val_16942 === (9))){
var inst_16928 = (state_16941[(9)]);
var inst_16921 = inst_16928;
var state_16941__$1 = (function (){var statearr_16952 = state_16941;
(statearr_16952[(7)] = inst_16921);

return statearr_16952;
})();
var statearr_16953_16967 = state_16941__$1;
(statearr_16953_16967[(2)] = null);

(statearr_16953_16967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (5))){
var inst_16921 = (state_16941[(7)]);
var state_16941__$1 = state_16941;
var statearr_16954_16968 = state_16941__$1;
(statearr_16954_16968[(2)] = inst_16921);

(statearr_16954_16968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (10))){
var inst_16935 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16955_16969 = state_16941__$1;
(statearr_16955_16969[(2)] = inst_16935);

(statearr_16955_16969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (8))){
var inst_16928 = (state_16941[(9)]);
var inst_16931 = cljs.core.deref.call(null,inst_16928);
var state_16941__$1 = state_16941;
var statearr_16956_16970 = state_16941__$1;
(statearr_16956_16970[(2)] = inst_16931);

(statearr_16956_16970[(1)] = (10));


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
});})(c__16454__auto__))
;
return ((function (switch__16364__auto__,c__16454__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16365__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16365__auto____0 = (function (){
var statearr_16957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16957[(0)] = cljs$core$async$reduce_$_state_machine__16365__auto__);

(statearr_16957[(1)] = (1));

return statearr_16957;
});
var cljs$core$async$reduce_$_state_machine__16365__auto____1 = (function (state_16941){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16958){if((e16958 instanceof Object)){
var ex__16368__auto__ = e16958;
var statearr_16959_16971 = state_16941;
(statearr_16959_16971[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16972 = state_16941;
state_16941 = G__16972;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16365__auto__ = function(state_16941){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16365__auto____1.call(this,state_16941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16365__auto____0;
cljs$core$async$reduce_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16365__auto____1;
return cljs$core$async$reduce_$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__))
})();
var state__16456__auto__ = (function (){var statearr_16960 = f__16455__auto__.call(null);
(statearr_16960[(6)] = c__16454__auto__);

return statearr_16960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__))
);

return c__16454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__,f__$1){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__,f__$1){
return (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (1))){
var inst_16973 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(2),inst_16973);
} else {
if((state_val_16979 === (2))){
var inst_16975 = (state_16978[(2)]);
var inst_16976 = f__$1.call(null,inst_16975);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16978__$1,inst_16976);
} else {
return null;
}
}
});})(c__16454__auto__,f__$1))
;
return ((function (switch__16364__auto__,c__16454__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16365__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16365__auto____0 = (function (){
var statearr_16980 = [null,null,null,null,null,null,null];
(statearr_16980[(0)] = cljs$core$async$transduce_$_state_machine__16365__auto__);

(statearr_16980[(1)] = (1));

return statearr_16980;
});
var cljs$core$async$transduce_$_state_machine__16365__auto____1 = (function (state_16978){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_16978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e16981){if((e16981 instanceof Object)){
var ex__16368__auto__ = e16981;
var statearr_16982_16984 = state_16978;
(statearr_16982_16984[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16985 = state_16978;
state_16978 = G__16985;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16365__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16365__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16365__auto____0;
cljs$core$async$transduce_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16365__auto____1;
return cljs$core$async$transduce_$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__,f__$1))
})();
var state__16456__auto__ = (function (){var statearr_16983 = f__16455__auto__.call(null);
(statearr_16983[(6)] = c__16454__auto__);

return statearr_16983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__,f__$1))
);

return c__16454__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16987 = arguments.length;
switch (G__16987) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__){
return (function (state_17012){
var state_val_17013 = (state_17012[(1)]);
if((state_val_17013 === (7))){
var inst_16994 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17014_17035 = state_17012__$1;
(statearr_17014_17035[(2)] = inst_16994);

(statearr_17014_17035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (1))){
var inst_16988 = cljs.core.seq.call(null,coll);
var inst_16989 = inst_16988;
var state_17012__$1 = (function (){var statearr_17015 = state_17012;
(statearr_17015[(7)] = inst_16989);

return statearr_17015;
})();
var statearr_17016_17036 = state_17012__$1;
(statearr_17016_17036[(2)] = null);

(statearr_17016_17036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (4))){
var inst_16989 = (state_17012[(7)]);
var inst_16992 = cljs.core.first.call(null,inst_16989);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(7),ch,inst_16992);
} else {
if((state_val_17013 === (13))){
var inst_17006 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17017_17037 = state_17012__$1;
(statearr_17017_17037[(2)] = inst_17006);

(statearr_17017_17037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (6))){
var inst_16997 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16997)){
var statearr_17018_17038 = state_17012__$1;
(statearr_17018_17038[(1)] = (8));

} else {
var statearr_17019_17039 = state_17012__$1;
(statearr_17019_17039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (3))){
var inst_17010 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else {
if((state_val_17013 === (12))){
var state_17012__$1 = state_17012;
var statearr_17020_17040 = state_17012__$1;
(statearr_17020_17040[(2)] = null);

(statearr_17020_17040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (2))){
var inst_16989 = (state_17012[(7)]);
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16989)){
var statearr_17021_17041 = state_17012__$1;
(statearr_17021_17041[(1)] = (4));

} else {
var statearr_17022_17042 = state_17012__$1;
(statearr_17022_17042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (11))){
var inst_17003 = cljs.core.async.close_BANG_.call(null,ch);
var state_17012__$1 = state_17012;
var statearr_17023_17043 = state_17012__$1;
(statearr_17023_17043[(2)] = inst_17003);

(statearr_17023_17043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (9))){
var state_17012__$1 = state_17012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17024_17044 = state_17012__$1;
(statearr_17024_17044[(1)] = (11));

} else {
var statearr_17025_17045 = state_17012__$1;
(statearr_17025_17045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (5))){
var inst_16989 = (state_17012[(7)]);
var state_17012__$1 = state_17012;
var statearr_17026_17046 = state_17012__$1;
(statearr_17026_17046[(2)] = inst_16989);

(statearr_17026_17046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (10))){
var inst_17008 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17027_17047 = state_17012__$1;
(statearr_17027_17047[(2)] = inst_17008);

(statearr_17027_17047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (8))){
var inst_16989 = (state_17012[(7)]);
var inst_16999 = cljs.core.next.call(null,inst_16989);
var inst_16989__$1 = inst_16999;
var state_17012__$1 = (function (){var statearr_17028 = state_17012;
(statearr_17028[(7)] = inst_16989__$1);

return statearr_17028;
})();
var statearr_17029_17048 = state_17012__$1;
(statearr_17029_17048[(2)] = null);

(statearr_17029_17048[(1)] = (2));


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
});})(c__16454__auto__))
;
return ((function (switch__16364__auto__,c__16454__auto__){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17030 = [null,null,null,null,null,null,null,null];
(statearr_17030[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17030[(1)] = (1));

return statearr_17030;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17012){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17031){if((e17031 instanceof Object)){
var ex__16368__auto__ = e17031;
var statearr_17032_17049 = state_17012;
(statearr_17032_17049[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17050 = state_17012;
state_17012 = G__17050;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__))
})();
var state__16456__auto__ = (function (){var statearr_17033 = f__16455__auto__.call(null);
(statearr_17033[(6)] = c__16454__auto__);

return statearr_17033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__))
);

return c__16454__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8343__auto__ = (((_ == null))?null:_);
var m__8344__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,_);
} else {
var m__8344__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8344__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,ch);
} else {
var m__8344__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m);
} else {
var m__8344__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17051 = (function (ch,cs,meta17052){
this.ch = ch;
this.cs = cs;
this.meta17052 = meta17052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17053,meta17052__$1){
var self__ = this;
var _17053__$1 = this;
return (new cljs.core.async.t_cljs$core$async17051(self__.ch,self__.cs,meta17052__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17053){
var self__ = this;
var _17053__$1 = this;
return self__.meta17052;
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17052","meta17052",-1083951495,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17051";

cljs.core.async.t_cljs$core$async17051.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17051");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17051 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17051(ch__$1,cs__$1,meta17052){
return (new cljs.core.async.t_cljs$core$async17051(ch__$1,cs__$1,meta17052));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17051(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16454__auto___17273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17273,cs,m,dchan,dctr,done){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17273,cs,m,dchan,dctr,done){
return (function (state_17188){
var state_val_17189 = (state_17188[(1)]);
if((state_val_17189 === (7))){
var inst_17184 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17190_17274 = state_17188__$1;
(statearr_17190_17274[(2)] = inst_17184);

(statearr_17190_17274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (20))){
var inst_17087 = (state_17188[(7)]);
var inst_17099 = cljs.core.first.call(null,inst_17087);
var inst_17100 = cljs.core.nth.call(null,inst_17099,(0),null);
var inst_17101 = cljs.core.nth.call(null,inst_17099,(1),null);
var state_17188__$1 = (function (){var statearr_17191 = state_17188;
(statearr_17191[(8)] = inst_17100);

return statearr_17191;
})();
if(cljs.core.truth_(inst_17101)){
var statearr_17192_17275 = state_17188__$1;
(statearr_17192_17275[(1)] = (22));

} else {
var statearr_17193_17276 = state_17188__$1;
(statearr_17193_17276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (27))){
var inst_17131 = (state_17188[(9)]);
var inst_17056 = (state_17188[(10)]);
var inst_17129 = (state_17188[(11)]);
var inst_17136 = (state_17188[(12)]);
var inst_17136__$1 = cljs.core._nth.call(null,inst_17129,inst_17131);
var inst_17137 = cljs.core.async.put_BANG_.call(null,inst_17136__$1,inst_17056,done);
var state_17188__$1 = (function (){var statearr_17194 = state_17188;
(statearr_17194[(12)] = inst_17136__$1);

return statearr_17194;
})();
if(cljs.core.truth_(inst_17137)){
var statearr_17195_17277 = state_17188__$1;
(statearr_17195_17277[(1)] = (30));

} else {
var statearr_17196_17278 = state_17188__$1;
(statearr_17196_17278[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (1))){
var state_17188__$1 = state_17188;
var statearr_17197_17279 = state_17188__$1;
(statearr_17197_17279[(2)] = null);

(statearr_17197_17279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (24))){
var inst_17087 = (state_17188[(7)]);
var inst_17106 = (state_17188[(2)]);
var inst_17107 = cljs.core.next.call(null,inst_17087);
var inst_17065 = inst_17107;
var inst_17066 = null;
var inst_17067 = (0);
var inst_17068 = (0);
var state_17188__$1 = (function (){var statearr_17198 = state_17188;
(statearr_17198[(13)] = inst_17066);

(statearr_17198[(14)] = inst_17068);

(statearr_17198[(15)] = inst_17067);

(statearr_17198[(16)] = inst_17065);

(statearr_17198[(17)] = inst_17106);

return statearr_17198;
})();
var statearr_17199_17280 = state_17188__$1;
(statearr_17199_17280[(2)] = null);

(statearr_17199_17280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (39))){
var state_17188__$1 = state_17188;
var statearr_17203_17281 = state_17188__$1;
(statearr_17203_17281[(2)] = null);

(statearr_17203_17281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (4))){
var inst_17056 = (state_17188[(10)]);
var inst_17056__$1 = (state_17188[(2)]);
var inst_17057 = (inst_17056__$1 == null);
var state_17188__$1 = (function (){var statearr_17204 = state_17188;
(statearr_17204[(10)] = inst_17056__$1);

return statearr_17204;
})();
if(cljs.core.truth_(inst_17057)){
var statearr_17205_17282 = state_17188__$1;
(statearr_17205_17282[(1)] = (5));

} else {
var statearr_17206_17283 = state_17188__$1;
(statearr_17206_17283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (15))){
var inst_17066 = (state_17188[(13)]);
var inst_17068 = (state_17188[(14)]);
var inst_17067 = (state_17188[(15)]);
var inst_17065 = (state_17188[(16)]);
var inst_17083 = (state_17188[(2)]);
var inst_17084 = (inst_17068 + (1));
var tmp17200 = inst_17066;
var tmp17201 = inst_17067;
var tmp17202 = inst_17065;
var inst_17065__$1 = tmp17202;
var inst_17066__$1 = tmp17200;
var inst_17067__$1 = tmp17201;
var inst_17068__$1 = inst_17084;
var state_17188__$1 = (function (){var statearr_17207 = state_17188;
(statearr_17207[(18)] = inst_17083);

(statearr_17207[(13)] = inst_17066__$1);

(statearr_17207[(14)] = inst_17068__$1);

(statearr_17207[(15)] = inst_17067__$1);

(statearr_17207[(16)] = inst_17065__$1);

return statearr_17207;
})();
var statearr_17208_17284 = state_17188__$1;
(statearr_17208_17284[(2)] = null);

(statearr_17208_17284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (21))){
var inst_17110 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17212_17285 = state_17188__$1;
(statearr_17212_17285[(2)] = inst_17110);

(statearr_17212_17285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (31))){
var inst_17136 = (state_17188[(12)]);
var inst_17140 = done.call(null,null);
var inst_17141 = cljs.core.async.untap_STAR_.call(null,m,inst_17136);
var state_17188__$1 = (function (){var statearr_17213 = state_17188;
(statearr_17213[(19)] = inst_17140);

return statearr_17213;
})();
var statearr_17214_17286 = state_17188__$1;
(statearr_17214_17286[(2)] = inst_17141);

(statearr_17214_17286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (32))){
var inst_17131 = (state_17188[(9)]);
var inst_17130 = (state_17188[(20)]);
var inst_17129 = (state_17188[(11)]);
var inst_17128 = (state_17188[(21)]);
var inst_17143 = (state_17188[(2)]);
var inst_17144 = (inst_17131 + (1));
var tmp17209 = inst_17130;
var tmp17210 = inst_17129;
var tmp17211 = inst_17128;
var inst_17128__$1 = tmp17211;
var inst_17129__$1 = tmp17210;
var inst_17130__$1 = tmp17209;
var inst_17131__$1 = inst_17144;
var state_17188__$1 = (function (){var statearr_17215 = state_17188;
(statearr_17215[(9)] = inst_17131__$1);

(statearr_17215[(20)] = inst_17130__$1);

(statearr_17215[(11)] = inst_17129__$1);

(statearr_17215[(21)] = inst_17128__$1);

(statearr_17215[(22)] = inst_17143);

return statearr_17215;
})();
var statearr_17216_17287 = state_17188__$1;
(statearr_17216_17287[(2)] = null);

(statearr_17216_17287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (40))){
var inst_17156 = (state_17188[(23)]);
var inst_17160 = done.call(null,null);
var inst_17161 = cljs.core.async.untap_STAR_.call(null,m,inst_17156);
var state_17188__$1 = (function (){var statearr_17217 = state_17188;
(statearr_17217[(24)] = inst_17160);

return statearr_17217;
})();
var statearr_17218_17288 = state_17188__$1;
(statearr_17218_17288[(2)] = inst_17161);

(statearr_17218_17288[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (33))){
var inst_17147 = (state_17188[(25)]);
var inst_17149 = cljs.core.chunked_seq_QMARK_.call(null,inst_17147);
var state_17188__$1 = state_17188;
if(inst_17149){
var statearr_17219_17289 = state_17188__$1;
(statearr_17219_17289[(1)] = (36));

} else {
var statearr_17220_17290 = state_17188__$1;
(statearr_17220_17290[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (13))){
var inst_17077 = (state_17188[(26)]);
var inst_17080 = cljs.core.async.close_BANG_.call(null,inst_17077);
var state_17188__$1 = state_17188;
var statearr_17221_17291 = state_17188__$1;
(statearr_17221_17291[(2)] = inst_17080);

(statearr_17221_17291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (22))){
var inst_17100 = (state_17188[(8)]);
var inst_17103 = cljs.core.async.close_BANG_.call(null,inst_17100);
var state_17188__$1 = state_17188;
var statearr_17222_17292 = state_17188__$1;
(statearr_17222_17292[(2)] = inst_17103);

(statearr_17222_17292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (36))){
var inst_17147 = (state_17188[(25)]);
var inst_17151 = cljs.core.chunk_first.call(null,inst_17147);
var inst_17152 = cljs.core.chunk_rest.call(null,inst_17147);
var inst_17153 = cljs.core.count.call(null,inst_17151);
var inst_17128 = inst_17152;
var inst_17129 = inst_17151;
var inst_17130 = inst_17153;
var inst_17131 = (0);
var state_17188__$1 = (function (){var statearr_17223 = state_17188;
(statearr_17223[(9)] = inst_17131);

(statearr_17223[(20)] = inst_17130);

(statearr_17223[(11)] = inst_17129);

(statearr_17223[(21)] = inst_17128);

return statearr_17223;
})();
var statearr_17224_17293 = state_17188__$1;
(statearr_17224_17293[(2)] = null);

(statearr_17224_17293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (41))){
var inst_17147 = (state_17188[(25)]);
var inst_17163 = (state_17188[(2)]);
var inst_17164 = cljs.core.next.call(null,inst_17147);
var inst_17128 = inst_17164;
var inst_17129 = null;
var inst_17130 = (0);
var inst_17131 = (0);
var state_17188__$1 = (function (){var statearr_17225 = state_17188;
(statearr_17225[(9)] = inst_17131);

(statearr_17225[(20)] = inst_17130);

(statearr_17225[(27)] = inst_17163);

(statearr_17225[(11)] = inst_17129);

(statearr_17225[(21)] = inst_17128);

return statearr_17225;
})();
var statearr_17226_17294 = state_17188__$1;
(statearr_17226_17294[(2)] = null);

(statearr_17226_17294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (43))){
var state_17188__$1 = state_17188;
var statearr_17227_17295 = state_17188__$1;
(statearr_17227_17295[(2)] = null);

(statearr_17227_17295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (29))){
var inst_17172 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17228_17296 = state_17188__$1;
(statearr_17228_17296[(2)] = inst_17172);

(statearr_17228_17296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (44))){
var inst_17181 = (state_17188[(2)]);
var state_17188__$1 = (function (){var statearr_17229 = state_17188;
(statearr_17229[(28)] = inst_17181);

return statearr_17229;
})();
var statearr_17230_17297 = state_17188__$1;
(statearr_17230_17297[(2)] = null);

(statearr_17230_17297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (6))){
var inst_17120 = (state_17188[(29)]);
var inst_17119 = cljs.core.deref.call(null,cs);
var inst_17120__$1 = cljs.core.keys.call(null,inst_17119);
var inst_17121 = cljs.core.count.call(null,inst_17120__$1);
var inst_17122 = cljs.core.reset_BANG_.call(null,dctr,inst_17121);
var inst_17127 = cljs.core.seq.call(null,inst_17120__$1);
var inst_17128 = inst_17127;
var inst_17129 = null;
var inst_17130 = (0);
var inst_17131 = (0);
var state_17188__$1 = (function (){var statearr_17231 = state_17188;
(statearr_17231[(29)] = inst_17120__$1);

(statearr_17231[(9)] = inst_17131);

(statearr_17231[(20)] = inst_17130);

(statearr_17231[(11)] = inst_17129);

(statearr_17231[(21)] = inst_17128);

(statearr_17231[(30)] = inst_17122);

return statearr_17231;
})();
var statearr_17232_17298 = state_17188__$1;
(statearr_17232_17298[(2)] = null);

(statearr_17232_17298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (28))){
var inst_17147 = (state_17188[(25)]);
var inst_17128 = (state_17188[(21)]);
var inst_17147__$1 = cljs.core.seq.call(null,inst_17128);
var state_17188__$1 = (function (){var statearr_17233 = state_17188;
(statearr_17233[(25)] = inst_17147__$1);

return statearr_17233;
})();
if(inst_17147__$1){
var statearr_17234_17299 = state_17188__$1;
(statearr_17234_17299[(1)] = (33));

} else {
var statearr_17235_17300 = state_17188__$1;
(statearr_17235_17300[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (25))){
var inst_17131 = (state_17188[(9)]);
var inst_17130 = (state_17188[(20)]);
var inst_17133 = (inst_17131 < inst_17130);
var inst_17134 = inst_17133;
var state_17188__$1 = state_17188;
if(cljs.core.truth_(inst_17134)){
var statearr_17236_17301 = state_17188__$1;
(statearr_17236_17301[(1)] = (27));

} else {
var statearr_17237_17302 = state_17188__$1;
(statearr_17237_17302[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (34))){
var state_17188__$1 = state_17188;
var statearr_17238_17303 = state_17188__$1;
(statearr_17238_17303[(2)] = null);

(statearr_17238_17303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (17))){
var state_17188__$1 = state_17188;
var statearr_17239_17304 = state_17188__$1;
(statearr_17239_17304[(2)] = null);

(statearr_17239_17304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (3))){
var inst_17186 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17188__$1,inst_17186);
} else {
if((state_val_17189 === (12))){
var inst_17115 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17240_17305 = state_17188__$1;
(statearr_17240_17305[(2)] = inst_17115);

(statearr_17240_17305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (2))){
var state_17188__$1 = state_17188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17188__$1,(4),ch);
} else {
if((state_val_17189 === (23))){
var state_17188__$1 = state_17188;
var statearr_17241_17306 = state_17188__$1;
(statearr_17241_17306[(2)] = null);

(statearr_17241_17306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (35))){
var inst_17170 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17242_17307 = state_17188__$1;
(statearr_17242_17307[(2)] = inst_17170);

(statearr_17242_17307[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (19))){
var inst_17087 = (state_17188[(7)]);
var inst_17091 = cljs.core.chunk_first.call(null,inst_17087);
var inst_17092 = cljs.core.chunk_rest.call(null,inst_17087);
var inst_17093 = cljs.core.count.call(null,inst_17091);
var inst_17065 = inst_17092;
var inst_17066 = inst_17091;
var inst_17067 = inst_17093;
var inst_17068 = (0);
var state_17188__$1 = (function (){var statearr_17243 = state_17188;
(statearr_17243[(13)] = inst_17066);

(statearr_17243[(14)] = inst_17068);

(statearr_17243[(15)] = inst_17067);

(statearr_17243[(16)] = inst_17065);

return statearr_17243;
})();
var statearr_17244_17308 = state_17188__$1;
(statearr_17244_17308[(2)] = null);

(statearr_17244_17308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (11))){
var inst_17087 = (state_17188[(7)]);
var inst_17065 = (state_17188[(16)]);
var inst_17087__$1 = cljs.core.seq.call(null,inst_17065);
var state_17188__$1 = (function (){var statearr_17245 = state_17188;
(statearr_17245[(7)] = inst_17087__$1);

return statearr_17245;
})();
if(inst_17087__$1){
var statearr_17246_17309 = state_17188__$1;
(statearr_17246_17309[(1)] = (16));

} else {
var statearr_17247_17310 = state_17188__$1;
(statearr_17247_17310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (9))){
var inst_17117 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17248_17311 = state_17188__$1;
(statearr_17248_17311[(2)] = inst_17117);

(statearr_17248_17311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (5))){
var inst_17063 = cljs.core.deref.call(null,cs);
var inst_17064 = cljs.core.seq.call(null,inst_17063);
var inst_17065 = inst_17064;
var inst_17066 = null;
var inst_17067 = (0);
var inst_17068 = (0);
var state_17188__$1 = (function (){var statearr_17249 = state_17188;
(statearr_17249[(13)] = inst_17066);

(statearr_17249[(14)] = inst_17068);

(statearr_17249[(15)] = inst_17067);

(statearr_17249[(16)] = inst_17065);

return statearr_17249;
})();
var statearr_17250_17312 = state_17188__$1;
(statearr_17250_17312[(2)] = null);

(statearr_17250_17312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (14))){
var state_17188__$1 = state_17188;
var statearr_17251_17313 = state_17188__$1;
(statearr_17251_17313[(2)] = null);

(statearr_17251_17313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (45))){
var inst_17178 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17252_17314 = state_17188__$1;
(statearr_17252_17314[(2)] = inst_17178);

(statearr_17252_17314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (26))){
var inst_17120 = (state_17188[(29)]);
var inst_17174 = (state_17188[(2)]);
var inst_17175 = cljs.core.seq.call(null,inst_17120);
var state_17188__$1 = (function (){var statearr_17253 = state_17188;
(statearr_17253[(31)] = inst_17174);

return statearr_17253;
})();
if(inst_17175){
var statearr_17254_17315 = state_17188__$1;
(statearr_17254_17315[(1)] = (42));

} else {
var statearr_17255_17316 = state_17188__$1;
(statearr_17255_17316[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (16))){
var inst_17087 = (state_17188[(7)]);
var inst_17089 = cljs.core.chunked_seq_QMARK_.call(null,inst_17087);
var state_17188__$1 = state_17188;
if(inst_17089){
var statearr_17256_17317 = state_17188__$1;
(statearr_17256_17317[(1)] = (19));

} else {
var statearr_17257_17318 = state_17188__$1;
(statearr_17257_17318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (38))){
var inst_17167 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17258_17319 = state_17188__$1;
(statearr_17258_17319[(2)] = inst_17167);

(statearr_17258_17319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (30))){
var state_17188__$1 = state_17188;
var statearr_17259_17320 = state_17188__$1;
(statearr_17259_17320[(2)] = null);

(statearr_17259_17320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (10))){
var inst_17066 = (state_17188[(13)]);
var inst_17068 = (state_17188[(14)]);
var inst_17076 = cljs.core._nth.call(null,inst_17066,inst_17068);
var inst_17077 = cljs.core.nth.call(null,inst_17076,(0),null);
var inst_17078 = cljs.core.nth.call(null,inst_17076,(1),null);
var state_17188__$1 = (function (){var statearr_17260 = state_17188;
(statearr_17260[(26)] = inst_17077);

return statearr_17260;
})();
if(cljs.core.truth_(inst_17078)){
var statearr_17261_17321 = state_17188__$1;
(statearr_17261_17321[(1)] = (13));

} else {
var statearr_17262_17322 = state_17188__$1;
(statearr_17262_17322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (18))){
var inst_17113 = (state_17188[(2)]);
var state_17188__$1 = state_17188;
var statearr_17263_17323 = state_17188__$1;
(statearr_17263_17323[(2)] = inst_17113);

(statearr_17263_17323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (42))){
var state_17188__$1 = state_17188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17188__$1,(45),dchan);
} else {
if((state_val_17189 === (37))){
var inst_17147 = (state_17188[(25)]);
var inst_17156 = (state_17188[(23)]);
var inst_17056 = (state_17188[(10)]);
var inst_17156__$1 = cljs.core.first.call(null,inst_17147);
var inst_17157 = cljs.core.async.put_BANG_.call(null,inst_17156__$1,inst_17056,done);
var state_17188__$1 = (function (){var statearr_17264 = state_17188;
(statearr_17264[(23)] = inst_17156__$1);

return statearr_17264;
})();
if(cljs.core.truth_(inst_17157)){
var statearr_17265_17324 = state_17188__$1;
(statearr_17265_17324[(1)] = (39));

} else {
var statearr_17266_17325 = state_17188__$1;
(statearr_17266_17325[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17189 === (8))){
var inst_17068 = (state_17188[(14)]);
var inst_17067 = (state_17188[(15)]);
var inst_17070 = (inst_17068 < inst_17067);
var inst_17071 = inst_17070;
var state_17188__$1 = state_17188;
if(cljs.core.truth_(inst_17071)){
var statearr_17267_17326 = state_17188__$1;
(statearr_17267_17326[(1)] = (10));

} else {
var statearr_17268_17327 = state_17188__$1;
(statearr_17268_17327[(1)] = (11));

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
});})(c__16454__auto___17273,cs,m,dchan,dctr,done))
;
return ((function (switch__16364__auto__,c__16454__auto___17273,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16365__auto__ = null;
var cljs$core$async$mult_$_state_machine__16365__auto____0 = (function (){
var statearr_17269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17269[(0)] = cljs$core$async$mult_$_state_machine__16365__auto__);

(statearr_17269[(1)] = (1));

return statearr_17269;
});
var cljs$core$async$mult_$_state_machine__16365__auto____1 = (function (state_17188){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17270){if((e17270 instanceof Object)){
var ex__16368__auto__ = e17270;
var statearr_17271_17328 = state_17188;
(statearr_17271_17328[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17329 = state_17188;
state_17188 = G__17329;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16365__auto__ = function(state_17188){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16365__auto____1.call(this,state_17188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16365__auto____0;
cljs$core$async$mult_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16365__auto____1;
return cljs$core$async$mult_$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17273,cs,m,dchan,dctr,done))
})();
var state__16456__auto__ = (function (){var statearr_17272 = f__16455__auto__.call(null);
(statearr_17272[(6)] = c__16454__auto___17273);

return statearr_17272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17273,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17331 = arguments.length;
switch (G__17331) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,ch);
} else {
var m__8344__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,ch);
} else {
var m__8344__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m);
} else {
var m__8344__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,state_map);
} else {
var m__8344__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8343__auto__ = (((m == null))?null:m);
var m__8344__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,m,mode);
} else {
var m__8344__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8896__auto__ = [];
var len__8889__auto___17343 = arguments.length;
var i__8890__auto___17344 = (0);
while(true){
if((i__8890__auto___17344 < len__8889__auto___17343)){
args__8896__auto__.push((arguments[i__8890__auto___17344]));

var G__17345 = (i__8890__auto___17344 + (1));
i__8890__auto___17344 = G__17345;
continue;
} else {
}
break;
}

var argseq__8897__auto__ = ((((3) < args__8896__auto__.length))?(new cljs.core.IndexedSeq(args__8896__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8897__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17337){
var map__17338 = p__17337;
var map__17338__$1 = ((((!((map__17338 == null)))?((((map__17338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17338):map__17338);
var opts = map__17338__$1;
var statearr_17340_17346 = state;
(statearr_17340_17346[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__17338,map__17338__$1,opts){
return (function (val){
var statearr_17341_17347 = state;
(statearr_17341_17347[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17338,map__17338__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_17342_17348 = state;
(statearr_17342_17348[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17333){
var G__17334 = cljs.core.first.call(null,seq17333);
var seq17333__$1 = cljs.core.next.call(null,seq17333);
var G__17335 = cljs.core.first.call(null,seq17333__$1);
var seq17333__$2 = cljs.core.next.call(null,seq17333__$1);
var G__17336 = cljs.core.first.call(null,seq17333__$2);
var seq17333__$3 = cljs.core.next.call(null,seq17333__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17334,G__17335,G__17336,seq17333__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17349 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17350){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17350 = meta17350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17351,meta17350__$1){
var self__ = this;
var _17351__$1 = this;
return (new cljs.core.async.t_cljs$core$async17349(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17350__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17351){
var self__ = this;
var _17351__$1 = this;
return self__.meta17350;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17350","meta17350",-1579198439,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17349";

cljs.core.async.t_cljs$core$async17349.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17349");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17349 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17349(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17350){
return (new cljs.core.async.t_cljs$core$async17349(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17350));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17349(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16454__auto___17513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17453){
var state_val_17454 = (state_17453[(1)]);
if((state_val_17454 === (7))){
var inst_17368 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17455_17514 = state_17453__$1;
(statearr_17455_17514[(2)] = inst_17368);

(statearr_17455_17514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (20))){
var inst_17380 = (state_17453[(7)]);
var state_17453__$1 = state_17453;
var statearr_17456_17515 = state_17453__$1;
(statearr_17456_17515[(2)] = inst_17380);

(statearr_17456_17515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (27))){
var state_17453__$1 = state_17453;
var statearr_17457_17516 = state_17453__$1;
(statearr_17457_17516[(2)] = null);

(statearr_17457_17516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (1))){
var inst_17355 = (state_17453[(8)]);
var inst_17355__$1 = calc_state.call(null);
var inst_17357 = (inst_17355__$1 == null);
var inst_17358 = cljs.core.not.call(null,inst_17357);
var state_17453__$1 = (function (){var statearr_17458 = state_17453;
(statearr_17458[(8)] = inst_17355__$1);

return statearr_17458;
})();
if(inst_17358){
var statearr_17459_17517 = state_17453__$1;
(statearr_17459_17517[(1)] = (2));

} else {
var statearr_17460_17518 = state_17453__$1;
(statearr_17460_17518[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (24))){
var inst_17404 = (state_17453[(9)]);
var inst_17427 = (state_17453[(10)]);
var inst_17413 = (state_17453[(11)]);
var inst_17427__$1 = inst_17404.call(null,inst_17413);
var state_17453__$1 = (function (){var statearr_17461 = state_17453;
(statearr_17461[(10)] = inst_17427__$1);

return statearr_17461;
})();
if(cljs.core.truth_(inst_17427__$1)){
var statearr_17462_17519 = state_17453__$1;
(statearr_17462_17519[(1)] = (29));

} else {
var statearr_17463_17520 = state_17453__$1;
(statearr_17463_17520[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (4))){
var inst_17371 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17371)){
var statearr_17464_17521 = state_17453__$1;
(statearr_17464_17521[(1)] = (8));

} else {
var statearr_17465_17522 = state_17453__$1;
(statearr_17465_17522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (15))){
var inst_17398 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17398)){
var statearr_17466_17523 = state_17453__$1;
(statearr_17466_17523[(1)] = (19));

} else {
var statearr_17467_17524 = state_17453__$1;
(statearr_17467_17524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (21))){
var inst_17403 = (state_17453[(12)]);
var inst_17403__$1 = (state_17453[(2)]);
var inst_17404 = cljs.core.get.call(null,inst_17403__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17405 = cljs.core.get.call(null,inst_17403__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17406 = cljs.core.get.call(null,inst_17403__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17453__$1 = (function (){var statearr_17468 = state_17453;
(statearr_17468[(9)] = inst_17404);

(statearr_17468[(12)] = inst_17403__$1);

(statearr_17468[(13)] = inst_17405);

return statearr_17468;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17453__$1,(22),inst_17406);
} else {
if((state_val_17454 === (31))){
var inst_17435 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17435)){
var statearr_17469_17525 = state_17453__$1;
(statearr_17469_17525[(1)] = (32));

} else {
var statearr_17470_17526 = state_17453__$1;
(statearr_17470_17526[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (32))){
var inst_17412 = (state_17453[(14)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17453__$1,(35),out,inst_17412);
} else {
if((state_val_17454 === (33))){
var inst_17403 = (state_17453[(12)]);
var inst_17380 = inst_17403;
var state_17453__$1 = (function (){var statearr_17471 = state_17453;
(statearr_17471[(7)] = inst_17380);

return statearr_17471;
})();
var statearr_17472_17527 = state_17453__$1;
(statearr_17472_17527[(2)] = null);

(statearr_17472_17527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (13))){
var inst_17380 = (state_17453[(7)]);
var inst_17387 = inst_17380.cljs$lang$protocol_mask$partition0$;
var inst_17388 = (inst_17387 & (64));
var inst_17389 = inst_17380.cljs$core$ISeq$;
var inst_17390 = (cljs.core.PROTOCOL_SENTINEL === inst_17389);
var inst_17391 = (inst_17388) || (inst_17390);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17391)){
var statearr_17473_17528 = state_17453__$1;
(statearr_17473_17528[(1)] = (16));

} else {
var statearr_17474_17529 = state_17453__$1;
(statearr_17474_17529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (22))){
var inst_17413 = (state_17453[(11)]);
var inst_17412 = (state_17453[(14)]);
var inst_17411 = (state_17453[(2)]);
var inst_17412__$1 = cljs.core.nth.call(null,inst_17411,(0),null);
var inst_17413__$1 = cljs.core.nth.call(null,inst_17411,(1),null);
var inst_17414 = (inst_17412__$1 == null);
var inst_17415 = cljs.core._EQ_.call(null,inst_17413__$1,change);
var inst_17416 = (inst_17414) || (inst_17415);
var state_17453__$1 = (function (){var statearr_17475 = state_17453;
(statearr_17475[(11)] = inst_17413__$1);

(statearr_17475[(14)] = inst_17412__$1);

return statearr_17475;
})();
if(cljs.core.truth_(inst_17416)){
var statearr_17476_17530 = state_17453__$1;
(statearr_17476_17530[(1)] = (23));

} else {
var statearr_17477_17531 = state_17453__$1;
(statearr_17477_17531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (36))){
var inst_17403 = (state_17453[(12)]);
var inst_17380 = inst_17403;
var state_17453__$1 = (function (){var statearr_17478 = state_17453;
(statearr_17478[(7)] = inst_17380);

return statearr_17478;
})();
var statearr_17479_17532 = state_17453__$1;
(statearr_17479_17532[(2)] = null);

(statearr_17479_17532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (29))){
var inst_17427 = (state_17453[(10)]);
var state_17453__$1 = state_17453;
var statearr_17480_17533 = state_17453__$1;
(statearr_17480_17533[(2)] = inst_17427);

(statearr_17480_17533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (6))){
var state_17453__$1 = state_17453;
var statearr_17481_17534 = state_17453__$1;
(statearr_17481_17534[(2)] = false);

(statearr_17481_17534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (28))){
var inst_17423 = (state_17453[(2)]);
var inst_17424 = calc_state.call(null);
var inst_17380 = inst_17424;
var state_17453__$1 = (function (){var statearr_17482 = state_17453;
(statearr_17482[(15)] = inst_17423);

(statearr_17482[(7)] = inst_17380);

return statearr_17482;
})();
var statearr_17483_17535 = state_17453__$1;
(statearr_17483_17535[(2)] = null);

(statearr_17483_17535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (25))){
var inst_17449 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17484_17536 = state_17453__$1;
(statearr_17484_17536[(2)] = inst_17449);

(statearr_17484_17536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (34))){
var inst_17447 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17485_17537 = state_17453__$1;
(statearr_17485_17537[(2)] = inst_17447);

(statearr_17485_17537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (17))){
var state_17453__$1 = state_17453;
var statearr_17486_17538 = state_17453__$1;
(statearr_17486_17538[(2)] = false);

(statearr_17486_17538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (3))){
var state_17453__$1 = state_17453;
var statearr_17487_17539 = state_17453__$1;
(statearr_17487_17539[(2)] = false);

(statearr_17487_17539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (12))){
var inst_17451 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17453__$1,inst_17451);
} else {
if((state_val_17454 === (2))){
var inst_17355 = (state_17453[(8)]);
var inst_17360 = inst_17355.cljs$lang$protocol_mask$partition0$;
var inst_17361 = (inst_17360 & (64));
var inst_17362 = inst_17355.cljs$core$ISeq$;
var inst_17363 = (cljs.core.PROTOCOL_SENTINEL === inst_17362);
var inst_17364 = (inst_17361) || (inst_17363);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17364)){
var statearr_17488_17540 = state_17453__$1;
(statearr_17488_17540[(1)] = (5));

} else {
var statearr_17489_17541 = state_17453__$1;
(statearr_17489_17541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (23))){
var inst_17412 = (state_17453[(14)]);
var inst_17418 = (inst_17412 == null);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17418)){
var statearr_17490_17542 = state_17453__$1;
(statearr_17490_17542[(1)] = (26));

} else {
var statearr_17491_17543 = state_17453__$1;
(statearr_17491_17543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (35))){
var inst_17438 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
if(cljs.core.truth_(inst_17438)){
var statearr_17492_17544 = state_17453__$1;
(statearr_17492_17544[(1)] = (36));

} else {
var statearr_17493_17545 = state_17453__$1;
(statearr_17493_17545[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (19))){
var inst_17380 = (state_17453[(7)]);
var inst_17400 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17380);
var state_17453__$1 = state_17453;
var statearr_17494_17546 = state_17453__$1;
(statearr_17494_17546[(2)] = inst_17400);

(statearr_17494_17546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (11))){
var inst_17380 = (state_17453[(7)]);
var inst_17384 = (inst_17380 == null);
var inst_17385 = cljs.core.not.call(null,inst_17384);
var state_17453__$1 = state_17453;
if(inst_17385){
var statearr_17495_17547 = state_17453__$1;
(statearr_17495_17547[(1)] = (13));

} else {
var statearr_17496_17548 = state_17453__$1;
(statearr_17496_17548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (9))){
var inst_17355 = (state_17453[(8)]);
var state_17453__$1 = state_17453;
var statearr_17497_17549 = state_17453__$1;
(statearr_17497_17549[(2)] = inst_17355);

(statearr_17497_17549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (5))){
var state_17453__$1 = state_17453;
var statearr_17498_17550 = state_17453__$1;
(statearr_17498_17550[(2)] = true);

(statearr_17498_17550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (14))){
var state_17453__$1 = state_17453;
var statearr_17499_17551 = state_17453__$1;
(statearr_17499_17551[(2)] = false);

(statearr_17499_17551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (26))){
var inst_17413 = (state_17453[(11)]);
var inst_17420 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17413);
var state_17453__$1 = state_17453;
var statearr_17500_17552 = state_17453__$1;
(statearr_17500_17552[(2)] = inst_17420);

(statearr_17500_17552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (16))){
var state_17453__$1 = state_17453;
var statearr_17501_17553 = state_17453__$1;
(statearr_17501_17553[(2)] = true);

(statearr_17501_17553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (38))){
var inst_17443 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17502_17554 = state_17453__$1;
(statearr_17502_17554[(2)] = inst_17443);

(statearr_17502_17554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (30))){
var inst_17404 = (state_17453[(9)]);
var inst_17413 = (state_17453[(11)]);
var inst_17405 = (state_17453[(13)]);
var inst_17430 = cljs.core.empty_QMARK_.call(null,inst_17404);
var inst_17431 = inst_17405.call(null,inst_17413);
var inst_17432 = cljs.core.not.call(null,inst_17431);
var inst_17433 = (inst_17430) && (inst_17432);
var state_17453__$1 = state_17453;
var statearr_17503_17555 = state_17453__$1;
(statearr_17503_17555[(2)] = inst_17433);

(statearr_17503_17555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (10))){
var inst_17355 = (state_17453[(8)]);
var inst_17376 = (state_17453[(2)]);
var inst_17377 = cljs.core.get.call(null,inst_17376,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17378 = cljs.core.get.call(null,inst_17376,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17379 = cljs.core.get.call(null,inst_17376,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17380 = inst_17355;
var state_17453__$1 = (function (){var statearr_17504 = state_17453;
(statearr_17504[(16)] = inst_17379);

(statearr_17504[(17)] = inst_17377);

(statearr_17504[(18)] = inst_17378);

(statearr_17504[(7)] = inst_17380);

return statearr_17504;
})();
var statearr_17505_17556 = state_17453__$1;
(statearr_17505_17556[(2)] = null);

(statearr_17505_17556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (18))){
var inst_17395 = (state_17453[(2)]);
var state_17453__$1 = state_17453;
var statearr_17506_17557 = state_17453__$1;
(statearr_17506_17557[(2)] = inst_17395);

(statearr_17506_17557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (37))){
var state_17453__$1 = state_17453;
var statearr_17507_17558 = state_17453__$1;
(statearr_17507_17558[(2)] = null);

(statearr_17507_17558[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17454 === (8))){
var inst_17355 = (state_17453[(8)]);
var inst_17373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17355);
var state_17453__$1 = state_17453;
var statearr_17508_17559 = state_17453__$1;
(statearr_17508_17559[(2)] = inst_17373);

(statearr_17508_17559[(1)] = (10));


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
});})(c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16364__auto__,c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16365__auto__ = null;
var cljs$core$async$mix_$_state_machine__16365__auto____0 = (function (){
var statearr_17509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17509[(0)] = cljs$core$async$mix_$_state_machine__16365__auto__);

(statearr_17509[(1)] = (1));

return statearr_17509;
});
var cljs$core$async$mix_$_state_machine__16365__auto____1 = (function (state_17453){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17510){if((e17510 instanceof Object)){
var ex__16368__auto__ = e17510;
var statearr_17511_17560 = state_17453;
(statearr_17511_17560[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17561 = state_17453;
state_17453 = G__17561;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16365__auto__ = function(state_17453){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16365__auto____1.call(this,state_17453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16365__auto____0;
cljs$core$async$mix_$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16365__auto____1;
return cljs$core$async$mix_$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16456__auto__ = (function (){var statearr_17512 = f__16455__auto__.call(null);
(statearr_17512[(6)] = c__16454__auto___17513);

return statearr_17512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8343__auto__ = (((p == null))?null:p);
var m__8344__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8344__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8343__auto__ = (((p == null))?null:p);
var m__8344__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,p,v,ch);
} else {
var m__8344__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17563 = arguments.length;
switch (G__17563) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8343__auto__ = (((p == null))?null:p);
var m__8344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,p);
} else {
var m__8344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8343__auto__ = (((p == null))?null:p);
var m__8344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8343__auto__)]);
if(!((m__8344__auto__ == null))){
return m__8344__auto__.call(null,p,v);
} else {
var m__8344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8344__auto____$1 == null))){
return m__8344__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17567 = arguments.length;
switch (G__17567) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7610__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7610__auto__)){
return or__7610__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7610__auto__,mults){
return (function (p1__17565_SHARP_){
if(cljs.core.truth_(p1__17565_SHARP_.call(null,topic))){
return p1__17565_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17565_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7610__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17568 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17569){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17569 = meta17569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17570,meta17569__$1){
var self__ = this;
var _17570__$1 = this;
return (new cljs.core.async.t_cljs$core$async17568(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17569__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17570){
var self__ = this;
var _17570__$1 = this;
return self__.meta17569;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17569","meta17569",1388677410,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17568";

cljs.core.async.t_cljs$core$async17568.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17568");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17568 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17568(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17569){
return (new cljs.core.async.t_cljs$core$async17568(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17569));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17568(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16454__auto___17688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17688,mults,ensure_mult,p){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17688,mults,ensure_mult,p){
return (function (state_17642){
var state_val_17643 = (state_17642[(1)]);
if((state_val_17643 === (7))){
var inst_17638 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17644_17689 = state_17642__$1;
(statearr_17644_17689[(2)] = inst_17638);

(statearr_17644_17689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (20))){
var state_17642__$1 = state_17642;
var statearr_17645_17690 = state_17642__$1;
(statearr_17645_17690[(2)] = null);

(statearr_17645_17690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (1))){
var state_17642__$1 = state_17642;
var statearr_17646_17691 = state_17642__$1;
(statearr_17646_17691[(2)] = null);

(statearr_17646_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (24))){
var inst_17621 = (state_17642[(7)]);
var inst_17630 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17621);
var state_17642__$1 = state_17642;
var statearr_17647_17692 = state_17642__$1;
(statearr_17647_17692[(2)] = inst_17630);

(statearr_17647_17692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (4))){
var inst_17573 = (state_17642[(8)]);
var inst_17573__$1 = (state_17642[(2)]);
var inst_17574 = (inst_17573__$1 == null);
var state_17642__$1 = (function (){var statearr_17648 = state_17642;
(statearr_17648[(8)] = inst_17573__$1);

return statearr_17648;
})();
if(cljs.core.truth_(inst_17574)){
var statearr_17649_17693 = state_17642__$1;
(statearr_17649_17693[(1)] = (5));

} else {
var statearr_17650_17694 = state_17642__$1;
(statearr_17650_17694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (15))){
var inst_17615 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17651_17695 = state_17642__$1;
(statearr_17651_17695[(2)] = inst_17615);

(statearr_17651_17695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (21))){
var inst_17635 = (state_17642[(2)]);
var state_17642__$1 = (function (){var statearr_17652 = state_17642;
(statearr_17652[(9)] = inst_17635);

return statearr_17652;
})();
var statearr_17653_17696 = state_17642__$1;
(statearr_17653_17696[(2)] = null);

(statearr_17653_17696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (13))){
var inst_17597 = (state_17642[(10)]);
var inst_17599 = cljs.core.chunked_seq_QMARK_.call(null,inst_17597);
var state_17642__$1 = state_17642;
if(inst_17599){
var statearr_17654_17697 = state_17642__$1;
(statearr_17654_17697[(1)] = (16));

} else {
var statearr_17655_17698 = state_17642__$1;
(statearr_17655_17698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (22))){
var inst_17627 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
if(cljs.core.truth_(inst_17627)){
var statearr_17656_17699 = state_17642__$1;
(statearr_17656_17699[(1)] = (23));

} else {
var statearr_17657_17700 = state_17642__$1;
(statearr_17657_17700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (6))){
var inst_17623 = (state_17642[(11)]);
var inst_17573 = (state_17642[(8)]);
var inst_17621 = (state_17642[(7)]);
var inst_17621__$1 = topic_fn.call(null,inst_17573);
var inst_17622 = cljs.core.deref.call(null,mults);
var inst_17623__$1 = cljs.core.get.call(null,inst_17622,inst_17621__$1);
var state_17642__$1 = (function (){var statearr_17658 = state_17642;
(statearr_17658[(11)] = inst_17623__$1);

(statearr_17658[(7)] = inst_17621__$1);

return statearr_17658;
})();
if(cljs.core.truth_(inst_17623__$1)){
var statearr_17659_17701 = state_17642__$1;
(statearr_17659_17701[(1)] = (19));

} else {
var statearr_17660_17702 = state_17642__$1;
(statearr_17660_17702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (25))){
var inst_17632 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17661_17703 = state_17642__$1;
(statearr_17661_17703[(2)] = inst_17632);

(statearr_17661_17703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (17))){
var inst_17597 = (state_17642[(10)]);
var inst_17606 = cljs.core.first.call(null,inst_17597);
var inst_17607 = cljs.core.async.muxch_STAR_.call(null,inst_17606);
var inst_17608 = cljs.core.async.close_BANG_.call(null,inst_17607);
var inst_17609 = cljs.core.next.call(null,inst_17597);
var inst_17583 = inst_17609;
var inst_17584 = null;
var inst_17585 = (0);
var inst_17586 = (0);
var state_17642__$1 = (function (){var statearr_17662 = state_17642;
(statearr_17662[(12)] = inst_17584);

(statearr_17662[(13)] = inst_17586);

(statearr_17662[(14)] = inst_17583);

(statearr_17662[(15)] = inst_17585);

(statearr_17662[(16)] = inst_17608);

return statearr_17662;
})();
var statearr_17663_17704 = state_17642__$1;
(statearr_17663_17704[(2)] = null);

(statearr_17663_17704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (3))){
var inst_17640 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17642__$1,inst_17640);
} else {
if((state_val_17643 === (12))){
var inst_17617 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17664_17705 = state_17642__$1;
(statearr_17664_17705[(2)] = inst_17617);

(statearr_17664_17705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (2))){
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17642__$1,(4),ch);
} else {
if((state_val_17643 === (23))){
var state_17642__$1 = state_17642;
var statearr_17665_17706 = state_17642__$1;
(statearr_17665_17706[(2)] = null);

(statearr_17665_17706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (19))){
var inst_17623 = (state_17642[(11)]);
var inst_17573 = (state_17642[(8)]);
var inst_17625 = cljs.core.async.muxch_STAR_.call(null,inst_17623);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17642__$1,(22),inst_17625,inst_17573);
} else {
if((state_val_17643 === (11))){
var inst_17583 = (state_17642[(14)]);
var inst_17597 = (state_17642[(10)]);
var inst_17597__$1 = cljs.core.seq.call(null,inst_17583);
var state_17642__$1 = (function (){var statearr_17666 = state_17642;
(statearr_17666[(10)] = inst_17597__$1);

return statearr_17666;
})();
if(inst_17597__$1){
var statearr_17667_17707 = state_17642__$1;
(statearr_17667_17707[(1)] = (13));

} else {
var statearr_17668_17708 = state_17642__$1;
(statearr_17668_17708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (9))){
var inst_17619 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17669_17709 = state_17642__$1;
(statearr_17669_17709[(2)] = inst_17619);

(statearr_17669_17709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (5))){
var inst_17580 = cljs.core.deref.call(null,mults);
var inst_17581 = cljs.core.vals.call(null,inst_17580);
var inst_17582 = cljs.core.seq.call(null,inst_17581);
var inst_17583 = inst_17582;
var inst_17584 = null;
var inst_17585 = (0);
var inst_17586 = (0);
var state_17642__$1 = (function (){var statearr_17670 = state_17642;
(statearr_17670[(12)] = inst_17584);

(statearr_17670[(13)] = inst_17586);

(statearr_17670[(14)] = inst_17583);

(statearr_17670[(15)] = inst_17585);

return statearr_17670;
})();
var statearr_17671_17710 = state_17642__$1;
(statearr_17671_17710[(2)] = null);

(statearr_17671_17710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (14))){
var state_17642__$1 = state_17642;
var statearr_17675_17711 = state_17642__$1;
(statearr_17675_17711[(2)] = null);

(statearr_17675_17711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (16))){
var inst_17597 = (state_17642[(10)]);
var inst_17601 = cljs.core.chunk_first.call(null,inst_17597);
var inst_17602 = cljs.core.chunk_rest.call(null,inst_17597);
var inst_17603 = cljs.core.count.call(null,inst_17601);
var inst_17583 = inst_17602;
var inst_17584 = inst_17601;
var inst_17585 = inst_17603;
var inst_17586 = (0);
var state_17642__$1 = (function (){var statearr_17676 = state_17642;
(statearr_17676[(12)] = inst_17584);

(statearr_17676[(13)] = inst_17586);

(statearr_17676[(14)] = inst_17583);

(statearr_17676[(15)] = inst_17585);

return statearr_17676;
})();
var statearr_17677_17712 = state_17642__$1;
(statearr_17677_17712[(2)] = null);

(statearr_17677_17712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (10))){
var inst_17584 = (state_17642[(12)]);
var inst_17586 = (state_17642[(13)]);
var inst_17583 = (state_17642[(14)]);
var inst_17585 = (state_17642[(15)]);
var inst_17591 = cljs.core._nth.call(null,inst_17584,inst_17586);
var inst_17592 = cljs.core.async.muxch_STAR_.call(null,inst_17591);
var inst_17593 = cljs.core.async.close_BANG_.call(null,inst_17592);
var inst_17594 = (inst_17586 + (1));
var tmp17672 = inst_17584;
var tmp17673 = inst_17583;
var tmp17674 = inst_17585;
var inst_17583__$1 = tmp17673;
var inst_17584__$1 = tmp17672;
var inst_17585__$1 = tmp17674;
var inst_17586__$1 = inst_17594;
var state_17642__$1 = (function (){var statearr_17678 = state_17642;
(statearr_17678[(17)] = inst_17593);

(statearr_17678[(12)] = inst_17584__$1);

(statearr_17678[(13)] = inst_17586__$1);

(statearr_17678[(14)] = inst_17583__$1);

(statearr_17678[(15)] = inst_17585__$1);

return statearr_17678;
})();
var statearr_17679_17713 = state_17642__$1;
(statearr_17679_17713[(2)] = null);

(statearr_17679_17713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (18))){
var inst_17612 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17680_17714 = state_17642__$1;
(statearr_17680_17714[(2)] = inst_17612);

(statearr_17680_17714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (8))){
var inst_17586 = (state_17642[(13)]);
var inst_17585 = (state_17642[(15)]);
var inst_17588 = (inst_17586 < inst_17585);
var inst_17589 = inst_17588;
var state_17642__$1 = state_17642;
if(cljs.core.truth_(inst_17589)){
var statearr_17681_17715 = state_17642__$1;
(statearr_17681_17715[(1)] = (10));

} else {
var statearr_17682_17716 = state_17642__$1;
(statearr_17682_17716[(1)] = (11));

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
});})(c__16454__auto___17688,mults,ensure_mult,p))
;
return ((function (switch__16364__auto__,c__16454__auto___17688,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17683[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17683[(1)] = (1));

return statearr_17683;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17642){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17684){if((e17684 instanceof Object)){
var ex__16368__auto__ = e17684;
var statearr_17685_17717 = state_17642;
(statearr_17685_17717[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17718 = state_17642;
state_17642 = G__17718;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17688,mults,ensure_mult,p))
})();
var state__16456__auto__ = (function (){var statearr_17686 = f__16455__auto__.call(null);
(statearr_17686[(6)] = c__16454__auto___17688);

return statearr_17686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17688,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17720 = arguments.length;
switch (G__17720) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17723 = arguments.length;
switch (G__17723) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17726 = arguments.length;
switch (G__17726) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16454__auto___17793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17765){
var state_val_17766 = (state_17765[(1)]);
if((state_val_17766 === (7))){
var state_17765__$1 = state_17765;
var statearr_17767_17794 = state_17765__$1;
(statearr_17767_17794[(2)] = null);

(statearr_17767_17794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (1))){
var state_17765__$1 = state_17765;
var statearr_17768_17795 = state_17765__$1;
(statearr_17768_17795[(2)] = null);

(statearr_17768_17795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (4))){
var inst_17729 = (state_17765[(7)]);
var inst_17731 = (inst_17729 < cnt);
var state_17765__$1 = state_17765;
if(cljs.core.truth_(inst_17731)){
var statearr_17769_17796 = state_17765__$1;
(statearr_17769_17796[(1)] = (6));

} else {
var statearr_17770_17797 = state_17765__$1;
(statearr_17770_17797[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (15))){
var inst_17761 = (state_17765[(2)]);
var state_17765__$1 = state_17765;
var statearr_17771_17798 = state_17765__$1;
(statearr_17771_17798[(2)] = inst_17761);

(statearr_17771_17798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (13))){
var inst_17754 = cljs.core.async.close_BANG_.call(null,out);
var state_17765__$1 = state_17765;
var statearr_17772_17799 = state_17765__$1;
(statearr_17772_17799[(2)] = inst_17754);

(statearr_17772_17799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (6))){
var state_17765__$1 = state_17765;
var statearr_17773_17800 = state_17765__$1;
(statearr_17773_17800[(2)] = null);

(statearr_17773_17800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (3))){
var inst_17763 = (state_17765[(2)]);
var state_17765__$1 = state_17765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17765__$1,inst_17763);
} else {
if((state_val_17766 === (12))){
var inst_17751 = (state_17765[(8)]);
var inst_17751__$1 = (state_17765[(2)]);
var inst_17752 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17751__$1);
var state_17765__$1 = (function (){var statearr_17774 = state_17765;
(statearr_17774[(8)] = inst_17751__$1);

return statearr_17774;
})();
if(cljs.core.truth_(inst_17752)){
var statearr_17775_17801 = state_17765__$1;
(statearr_17775_17801[(1)] = (13));

} else {
var statearr_17776_17802 = state_17765__$1;
(statearr_17776_17802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (2))){
var inst_17728 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17729 = (0);
var state_17765__$1 = (function (){var statearr_17777 = state_17765;
(statearr_17777[(9)] = inst_17728);

(statearr_17777[(7)] = inst_17729);

return statearr_17777;
})();
var statearr_17778_17803 = state_17765__$1;
(statearr_17778_17803[(2)] = null);

(statearr_17778_17803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (11))){
var inst_17729 = (state_17765[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17765,(10),Object,null,(9));
var inst_17738 = chs__$1.call(null,inst_17729);
var inst_17739 = done.call(null,inst_17729);
var inst_17740 = cljs.core.async.take_BANG_.call(null,inst_17738,inst_17739);
var state_17765__$1 = state_17765;
var statearr_17779_17804 = state_17765__$1;
(statearr_17779_17804[(2)] = inst_17740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (9))){
var inst_17729 = (state_17765[(7)]);
var inst_17742 = (state_17765[(2)]);
var inst_17743 = (inst_17729 + (1));
var inst_17729__$1 = inst_17743;
var state_17765__$1 = (function (){var statearr_17780 = state_17765;
(statearr_17780[(7)] = inst_17729__$1);

(statearr_17780[(10)] = inst_17742);

return statearr_17780;
})();
var statearr_17781_17805 = state_17765__$1;
(statearr_17781_17805[(2)] = null);

(statearr_17781_17805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (5))){
var inst_17749 = (state_17765[(2)]);
var state_17765__$1 = (function (){var statearr_17782 = state_17765;
(statearr_17782[(11)] = inst_17749);

return statearr_17782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17765__$1,(12),dchan);
} else {
if((state_val_17766 === (14))){
var inst_17751 = (state_17765[(8)]);
var inst_17756 = cljs.core.apply.call(null,f,inst_17751);
var state_17765__$1 = state_17765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17765__$1,(16),out,inst_17756);
} else {
if((state_val_17766 === (16))){
var inst_17758 = (state_17765[(2)]);
var state_17765__$1 = (function (){var statearr_17783 = state_17765;
(statearr_17783[(12)] = inst_17758);

return statearr_17783;
})();
var statearr_17784_17806 = state_17765__$1;
(statearr_17784_17806[(2)] = null);

(statearr_17784_17806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (10))){
var inst_17733 = (state_17765[(2)]);
var inst_17734 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17765__$1 = (function (){var statearr_17785 = state_17765;
(statearr_17785[(13)] = inst_17733);

return statearr_17785;
})();
var statearr_17786_17807 = state_17765__$1;
(statearr_17786_17807[(2)] = inst_17734);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17766 === (8))){
var inst_17747 = (state_17765[(2)]);
var state_17765__$1 = state_17765;
var statearr_17787_17808 = state_17765__$1;
(statearr_17787_17808[(2)] = inst_17747);

(statearr_17787_17808[(1)] = (5));


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
});})(c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16364__auto__,c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17788[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17788[(1)] = (1));

return statearr_17788;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17765){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17789){if((e17789 instanceof Object)){
var ex__16368__auto__ = e17789;
var statearr_17790_17809 = state_17765;
(statearr_17790_17809[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17810 = state_17765;
state_17765 = G__17810;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16456__auto__ = (function (){var statearr_17791 = f__16455__auto__.call(null);
(statearr_17791[(6)] = c__16454__auto___17793);

return statearr_17791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17793,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17813 = arguments.length;
switch (G__17813) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___17867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17867,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17867,out){
return (function (state_17845){
var state_val_17846 = (state_17845[(1)]);
if((state_val_17846 === (7))){
var inst_17824 = (state_17845[(7)]);
var inst_17825 = (state_17845[(8)]);
var inst_17824__$1 = (state_17845[(2)]);
var inst_17825__$1 = cljs.core.nth.call(null,inst_17824__$1,(0),null);
var inst_17826 = cljs.core.nth.call(null,inst_17824__$1,(1),null);
var inst_17827 = (inst_17825__$1 == null);
var state_17845__$1 = (function (){var statearr_17847 = state_17845;
(statearr_17847[(7)] = inst_17824__$1);

(statearr_17847[(9)] = inst_17826);

(statearr_17847[(8)] = inst_17825__$1);

return statearr_17847;
})();
if(cljs.core.truth_(inst_17827)){
var statearr_17848_17868 = state_17845__$1;
(statearr_17848_17868[(1)] = (8));

} else {
var statearr_17849_17869 = state_17845__$1;
(statearr_17849_17869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (1))){
var inst_17814 = cljs.core.vec.call(null,chs);
var inst_17815 = inst_17814;
var state_17845__$1 = (function (){var statearr_17850 = state_17845;
(statearr_17850[(10)] = inst_17815);

return statearr_17850;
})();
var statearr_17851_17870 = state_17845__$1;
(statearr_17851_17870[(2)] = null);

(statearr_17851_17870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (4))){
var inst_17815 = (state_17845[(10)]);
var state_17845__$1 = state_17845;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17845__$1,(7),inst_17815);
} else {
if((state_val_17846 === (6))){
var inst_17841 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17852_17871 = state_17845__$1;
(statearr_17852_17871[(2)] = inst_17841);

(statearr_17852_17871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (3))){
var inst_17843 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17845__$1,inst_17843);
} else {
if((state_val_17846 === (2))){
var inst_17815 = (state_17845[(10)]);
var inst_17817 = cljs.core.count.call(null,inst_17815);
var inst_17818 = (inst_17817 > (0));
var state_17845__$1 = state_17845;
if(cljs.core.truth_(inst_17818)){
var statearr_17854_17872 = state_17845__$1;
(statearr_17854_17872[(1)] = (4));

} else {
var statearr_17855_17873 = state_17845__$1;
(statearr_17855_17873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (11))){
var inst_17815 = (state_17845[(10)]);
var inst_17834 = (state_17845[(2)]);
var tmp17853 = inst_17815;
var inst_17815__$1 = tmp17853;
var state_17845__$1 = (function (){var statearr_17856 = state_17845;
(statearr_17856[(11)] = inst_17834);

(statearr_17856[(10)] = inst_17815__$1);

return statearr_17856;
})();
var statearr_17857_17874 = state_17845__$1;
(statearr_17857_17874[(2)] = null);

(statearr_17857_17874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (9))){
var inst_17825 = (state_17845[(8)]);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17845__$1,(11),out,inst_17825);
} else {
if((state_val_17846 === (5))){
var inst_17839 = cljs.core.async.close_BANG_.call(null,out);
var state_17845__$1 = state_17845;
var statearr_17858_17875 = state_17845__$1;
(statearr_17858_17875[(2)] = inst_17839);

(statearr_17858_17875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (10))){
var inst_17837 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17859_17876 = state_17845__$1;
(statearr_17859_17876[(2)] = inst_17837);

(statearr_17859_17876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (8))){
var inst_17824 = (state_17845[(7)]);
var inst_17826 = (state_17845[(9)]);
var inst_17825 = (state_17845[(8)]);
var inst_17815 = (state_17845[(10)]);
var inst_17829 = (function (){var cs = inst_17815;
var vec__17820 = inst_17824;
var v = inst_17825;
var c = inst_17826;
return ((function (cs,vec__17820,v,c,inst_17824,inst_17826,inst_17825,inst_17815,state_val_17846,c__16454__auto___17867,out){
return (function (p1__17811_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17811_SHARP_);
});
;})(cs,vec__17820,v,c,inst_17824,inst_17826,inst_17825,inst_17815,state_val_17846,c__16454__auto___17867,out))
})();
var inst_17830 = cljs.core.filterv.call(null,inst_17829,inst_17815);
var inst_17815__$1 = inst_17830;
var state_17845__$1 = (function (){var statearr_17860 = state_17845;
(statearr_17860[(10)] = inst_17815__$1);

return statearr_17860;
})();
var statearr_17861_17877 = state_17845__$1;
(statearr_17861_17877[(2)] = null);

(statearr_17861_17877[(1)] = (2));


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
});})(c__16454__auto___17867,out))
;
return ((function (switch__16364__auto__,c__16454__auto___17867,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17862[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17862[(1)] = (1));

return statearr_17862;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17845){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17863){if((e17863 instanceof Object)){
var ex__16368__auto__ = e17863;
var statearr_17864_17878 = state_17845;
(statearr_17864_17878[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17879 = state_17845;
state_17845 = G__17879;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17867,out))
})();
var state__16456__auto__ = (function (){var statearr_17865 = f__16455__auto__.call(null);
(statearr_17865[(6)] = c__16454__auto___17867);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17867,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17881 = arguments.length;
switch (G__17881) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___17926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17926,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17926,out){
return (function (state_17905){
var state_val_17906 = (state_17905[(1)]);
if((state_val_17906 === (7))){
var inst_17887 = (state_17905[(7)]);
var inst_17887__$1 = (state_17905[(2)]);
var inst_17888 = (inst_17887__$1 == null);
var inst_17889 = cljs.core.not.call(null,inst_17888);
var state_17905__$1 = (function (){var statearr_17907 = state_17905;
(statearr_17907[(7)] = inst_17887__$1);

return statearr_17907;
})();
if(inst_17889){
var statearr_17908_17927 = state_17905__$1;
(statearr_17908_17927[(1)] = (8));

} else {
var statearr_17909_17928 = state_17905__$1;
(statearr_17909_17928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (1))){
var inst_17882 = (0);
var state_17905__$1 = (function (){var statearr_17910 = state_17905;
(statearr_17910[(8)] = inst_17882);

return statearr_17910;
})();
var statearr_17911_17929 = state_17905__$1;
(statearr_17911_17929[(2)] = null);

(statearr_17911_17929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (4))){
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17905__$1,(7),ch);
} else {
if((state_val_17906 === (6))){
var inst_17900 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17912_17930 = state_17905__$1;
(statearr_17912_17930[(2)] = inst_17900);

(statearr_17912_17930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (3))){
var inst_17902 = (state_17905[(2)]);
var inst_17903 = cljs.core.async.close_BANG_.call(null,out);
var state_17905__$1 = (function (){var statearr_17913 = state_17905;
(statearr_17913[(9)] = inst_17902);

return statearr_17913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17905__$1,inst_17903);
} else {
if((state_val_17906 === (2))){
var inst_17882 = (state_17905[(8)]);
var inst_17884 = (inst_17882 < n);
var state_17905__$1 = state_17905;
if(cljs.core.truth_(inst_17884)){
var statearr_17914_17931 = state_17905__$1;
(statearr_17914_17931[(1)] = (4));

} else {
var statearr_17915_17932 = state_17905__$1;
(statearr_17915_17932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (11))){
var inst_17882 = (state_17905[(8)]);
var inst_17892 = (state_17905[(2)]);
var inst_17893 = (inst_17882 + (1));
var inst_17882__$1 = inst_17893;
var state_17905__$1 = (function (){var statearr_17916 = state_17905;
(statearr_17916[(8)] = inst_17882__$1);

(statearr_17916[(10)] = inst_17892);

return statearr_17916;
})();
var statearr_17917_17933 = state_17905__$1;
(statearr_17917_17933[(2)] = null);

(statearr_17917_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (9))){
var state_17905__$1 = state_17905;
var statearr_17918_17934 = state_17905__$1;
(statearr_17918_17934[(2)] = null);

(statearr_17918_17934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (5))){
var state_17905__$1 = state_17905;
var statearr_17919_17935 = state_17905__$1;
(statearr_17919_17935[(2)] = null);

(statearr_17919_17935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (10))){
var inst_17897 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17920_17936 = state_17905__$1;
(statearr_17920_17936[(2)] = inst_17897);

(statearr_17920_17936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (8))){
var inst_17887 = (state_17905[(7)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17905__$1,(11),out,inst_17887);
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
});})(c__16454__auto___17926,out))
;
return ((function (switch__16364__auto__,c__16454__auto___17926,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17921[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17921[(1)] = (1));

return statearr_17921;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17905){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17922){if((e17922 instanceof Object)){
var ex__16368__auto__ = e17922;
var statearr_17923_17937 = state_17905;
(statearr_17923_17937[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17938 = state_17905;
state_17905 = G__17938;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17926,out))
})();
var state__16456__auto__ = (function (){var statearr_17924 = f__16455__auto__.call(null);
(statearr_17924[(6)] = c__16454__auto___17926);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17926,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17940 = (function (f,ch,meta17941){
this.f = f;
this.ch = ch;
this.meta17941 = meta17941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17942,meta17941__$1){
var self__ = this;
var _17942__$1 = this;
return (new cljs.core.async.t_cljs$core$async17940(self__.f,self__.ch,meta17941__$1));
});

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17942){
var self__ = this;
var _17942__$1 = this;
return self__.meta17941;
});

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17943 = (function (f,ch,meta17941,_,fn1,meta17944){
this.f = f;
this.ch = ch;
this.meta17941 = meta17941;
this._ = _;
this.fn1 = fn1;
this.meta17944 = meta17944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17945,meta17944__$1){
var self__ = this;
var _17945__$1 = this;
return (new cljs.core.async.t_cljs$core$async17943(self__.f,self__.ch,self__.meta17941,self__._,self__.fn1,meta17944__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17945){
var self__ = this;
var _17945__$1 = this;
return self__.meta17944;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17939_SHARP_){
return f1.call(null,(((p1__17939_SHARP_ == null))?null:self__.f.call(null,p1__17939_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17941","meta17941",-1635519280,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17940","cljs.core.async/t_cljs$core$async17940",1379833406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17944","meta17944",1978616984,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17943";

cljs.core.async.t_cljs$core$async17943.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17943");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17943 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17943(f__$1,ch__$1,meta17941__$1,___$2,fn1__$1,meta17944){
return (new cljs.core.async.t_cljs$core$async17943(f__$1,ch__$1,meta17941__$1,___$2,fn1__$1,meta17944));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17943(self__.f,self__.ch,self__.meta17941,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7598__auto__ = ret;
if(cljs.core.truth_(and__7598__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7598__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17941","meta17941",-1635519280,null)], null);
});

cljs.core.async.t_cljs$core$async17940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17940";

cljs.core.async.t_cljs$core$async17940.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17940");
});

cljs.core.async.__GT_t_cljs$core$async17940 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17940(f__$1,ch__$1,meta17941){
return (new cljs.core.async.t_cljs$core$async17940(f__$1,ch__$1,meta17941));
});

}

return (new cljs.core.async.t_cljs$core$async17940(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17946 = (function (f,ch,meta17947){
this.f = f;
this.ch = ch;
this.meta17947 = meta17947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17948,meta17947__$1){
var self__ = this;
var _17948__$1 = this;
return (new cljs.core.async.t_cljs$core$async17946(self__.f,self__.ch,meta17947__$1));
});

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17948){
var self__ = this;
var _17948__$1 = this;
return self__.meta17947;
});

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17947","meta17947",592687087,null)], null);
});

cljs.core.async.t_cljs$core$async17946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17946";

cljs.core.async.t_cljs$core$async17946.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17946");
});

cljs.core.async.__GT_t_cljs$core$async17946 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17946(f__$1,ch__$1,meta17947){
return (new cljs.core.async.t_cljs$core$async17946(f__$1,ch__$1,meta17947));
});

}

return (new cljs.core.async.t_cljs$core$async17946(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17949 = (function (p,ch,meta17950){
this.p = p;
this.ch = ch;
this.meta17950 = meta17950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17951,meta17950__$1){
var self__ = this;
var _17951__$1 = this;
return (new cljs.core.async.t_cljs$core$async17949(self__.p,self__.ch,meta17950__$1));
});

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17951){
var self__ = this;
var _17951__$1 = this;
return self__.meta17950;
});

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17950","meta17950",-563300094,null)], null);
});

cljs.core.async.t_cljs$core$async17949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17949";

cljs.core.async.t_cljs$core$async17949.cljs$lang$ctorPrWriter = (function (this__8281__auto__,writer__8282__auto__,opt__8283__auto__){
return cljs.core._write.call(null,writer__8282__auto__,"cljs.core.async/t_cljs$core$async17949");
});

cljs.core.async.__GT_t_cljs$core$async17949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17949(p__$1,ch__$1,meta17950){
return (new cljs.core.async.t_cljs$core$async17949(p__$1,ch__$1,meta17950));
});

}

return (new cljs.core.async.t_cljs$core$async17949(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17953 = arguments.length;
switch (G__17953) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___17993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___17993,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___17993,out){
return (function (state_17974){
var state_val_17975 = (state_17974[(1)]);
if((state_val_17975 === (7))){
var inst_17970 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17976_17994 = state_17974__$1;
(statearr_17976_17994[(2)] = inst_17970);

(statearr_17976_17994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (1))){
var state_17974__$1 = state_17974;
var statearr_17977_17995 = state_17974__$1;
(statearr_17977_17995[(2)] = null);

(statearr_17977_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (4))){
var inst_17956 = (state_17974[(7)]);
var inst_17956__$1 = (state_17974[(2)]);
var inst_17957 = (inst_17956__$1 == null);
var state_17974__$1 = (function (){var statearr_17978 = state_17974;
(statearr_17978[(7)] = inst_17956__$1);

return statearr_17978;
})();
if(cljs.core.truth_(inst_17957)){
var statearr_17979_17996 = state_17974__$1;
(statearr_17979_17996[(1)] = (5));

} else {
var statearr_17980_17997 = state_17974__$1;
(statearr_17980_17997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (6))){
var inst_17956 = (state_17974[(7)]);
var inst_17961 = p.call(null,inst_17956);
var state_17974__$1 = state_17974;
if(cljs.core.truth_(inst_17961)){
var statearr_17981_17998 = state_17974__$1;
(statearr_17981_17998[(1)] = (8));

} else {
var statearr_17982_17999 = state_17974__$1;
(statearr_17982_17999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (3))){
var inst_17972 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17974__$1,inst_17972);
} else {
if((state_val_17975 === (2))){
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17974__$1,(4),ch);
} else {
if((state_val_17975 === (11))){
var inst_17964 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17983_18000 = state_17974__$1;
(statearr_17983_18000[(2)] = inst_17964);

(statearr_17983_18000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (9))){
var state_17974__$1 = state_17974;
var statearr_17984_18001 = state_17974__$1;
(statearr_17984_18001[(2)] = null);

(statearr_17984_18001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (5))){
var inst_17959 = cljs.core.async.close_BANG_.call(null,out);
var state_17974__$1 = state_17974;
var statearr_17985_18002 = state_17974__$1;
(statearr_17985_18002[(2)] = inst_17959);

(statearr_17985_18002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (10))){
var inst_17967 = (state_17974[(2)]);
var state_17974__$1 = (function (){var statearr_17986 = state_17974;
(statearr_17986[(8)] = inst_17967);

return statearr_17986;
})();
var statearr_17987_18003 = state_17974__$1;
(statearr_17987_18003[(2)] = null);

(statearr_17987_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (8))){
var inst_17956 = (state_17974[(7)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17974__$1,(11),out,inst_17956);
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
});})(c__16454__auto___17993,out))
;
return ((function (switch__16364__auto__,c__16454__auto___17993,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_17988 = [null,null,null,null,null,null,null,null,null];
(statearr_17988[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_17988[(1)] = (1));

return statearr_17988;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_17974){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_17974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e17989){if((e17989 instanceof Object)){
var ex__16368__auto__ = e17989;
var statearr_17990_18004 = state_17974;
(statearr_17990_18004[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18005 = state_17974;
state_17974 = G__18005;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_17974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_17974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___17993,out))
})();
var state__16456__auto__ = (function (){var statearr_17991 = f__16455__auto__.call(null);
(statearr_17991[(6)] = c__16454__auto___17993);

return statearr_17991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___17993,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18007 = arguments.length;
switch (G__18007) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto__){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto__){
return (function (state_18070){
var state_val_18071 = (state_18070[(1)]);
if((state_val_18071 === (7))){
var inst_18066 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18072_18110 = state_18070__$1;
(statearr_18072_18110[(2)] = inst_18066);

(statearr_18072_18110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (20))){
var inst_18036 = (state_18070[(7)]);
var inst_18047 = (state_18070[(2)]);
var inst_18048 = cljs.core.next.call(null,inst_18036);
var inst_18022 = inst_18048;
var inst_18023 = null;
var inst_18024 = (0);
var inst_18025 = (0);
var state_18070__$1 = (function (){var statearr_18073 = state_18070;
(statearr_18073[(8)] = inst_18047);

(statearr_18073[(9)] = inst_18022);

(statearr_18073[(10)] = inst_18023);

(statearr_18073[(11)] = inst_18024);

(statearr_18073[(12)] = inst_18025);

return statearr_18073;
})();
var statearr_18074_18111 = state_18070__$1;
(statearr_18074_18111[(2)] = null);

(statearr_18074_18111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (1))){
var state_18070__$1 = state_18070;
var statearr_18075_18112 = state_18070__$1;
(statearr_18075_18112[(2)] = null);

(statearr_18075_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (4))){
var inst_18011 = (state_18070[(13)]);
var inst_18011__$1 = (state_18070[(2)]);
var inst_18012 = (inst_18011__$1 == null);
var state_18070__$1 = (function (){var statearr_18076 = state_18070;
(statearr_18076[(13)] = inst_18011__$1);

return statearr_18076;
})();
if(cljs.core.truth_(inst_18012)){
var statearr_18077_18113 = state_18070__$1;
(statearr_18077_18113[(1)] = (5));

} else {
var statearr_18078_18114 = state_18070__$1;
(statearr_18078_18114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (15))){
var state_18070__$1 = state_18070;
var statearr_18082_18115 = state_18070__$1;
(statearr_18082_18115[(2)] = null);

(statearr_18082_18115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (21))){
var state_18070__$1 = state_18070;
var statearr_18083_18116 = state_18070__$1;
(statearr_18083_18116[(2)] = null);

(statearr_18083_18116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (13))){
var inst_18022 = (state_18070[(9)]);
var inst_18023 = (state_18070[(10)]);
var inst_18024 = (state_18070[(11)]);
var inst_18025 = (state_18070[(12)]);
var inst_18032 = (state_18070[(2)]);
var inst_18033 = (inst_18025 + (1));
var tmp18079 = inst_18022;
var tmp18080 = inst_18023;
var tmp18081 = inst_18024;
var inst_18022__$1 = tmp18079;
var inst_18023__$1 = tmp18080;
var inst_18024__$1 = tmp18081;
var inst_18025__$1 = inst_18033;
var state_18070__$1 = (function (){var statearr_18084 = state_18070;
(statearr_18084[(9)] = inst_18022__$1);

(statearr_18084[(10)] = inst_18023__$1);

(statearr_18084[(11)] = inst_18024__$1);

(statearr_18084[(12)] = inst_18025__$1);

(statearr_18084[(14)] = inst_18032);

return statearr_18084;
})();
var statearr_18085_18117 = state_18070__$1;
(statearr_18085_18117[(2)] = null);

(statearr_18085_18117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (22))){
var state_18070__$1 = state_18070;
var statearr_18086_18118 = state_18070__$1;
(statearr_18086_18118[(2)] = null);

(statearr_18086_18118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (6))){
var inst_18011 = (state_18070[(13)]);
var inst_18020 = f.call(null,inst_18011);
var inst_18021 = cljs.core.seq.call(null,inst_18020);
var inst_18022 = inst_18021;
var inst_18023 = null;
var inst_18024 = (0);
var inst_18025 = (0);
var state_18070__$1 = (function (){var statearr_18087 = state_18070;
(statearr_18087[(9)] = inst_18022);

(statearr_18087[(10)] = inst_18023);

(statearr_18087[(11)] = inst_18024);

(statearr_18087[(12)] = inst_18025);

return statearr_18087;
})();
var statearr_18088_18119 = state_18070__$1;
(statearr_18088_18119[(2)] = null);

(statearr_18088_18119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (17))){
var inst_18036 = (state_18070[(7)]);
var inst_18040 = cljs.core.chunk_first.call(null,inst_18036);
var inst_18041 = cljs.core.chunk_rest.call(null,inst_18036);
var inst_18042 = cljs.core.count.call(null,inst_18040);
var inst_18022 = inst_18041;
var inst_18023 = inst_18040;
var inst_18024 = inst_18042;
var inst_18025 = (0);
var state_18070__$1 = (function (){var statearr_18089 = state_18070;
(statearr_18089[(9)] = inst_18022);

(statearr_18089[(10)] = inst_18023);

(statearr_18089[(11)] = inst_18024);

(statearr_18089[(12)] = inst_18025);

return statearr_18089;
})();
var statearr_18090_18120 = state_18070__$1;
(statearr_18090_18120[(2)] = null);

(statearr_18090_18120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (3))){
var inst_18068 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18070__$1,inst_18068);
} else {
if((state_val_18071 === (12))){
var inst_18056 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18091_18121 = state_18070__$1;
(statearr_18091_18121[(2)] = inst_18056);

(statearr_18091_18121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (2))){
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18070__$1,(4),in$);
} else {
if((state_val_18071 === (23))){
var inst_18064 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18092_18122 = state_18070__$1;
(statearr_18092_18122[(2)] = inst_18064);

(statearr_18092_18122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (19))){
var inst_18051 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18093_18123 = state_18070__$1;
(statearr_18093_18123[(2)] = inst_18051);

(statearr_18093_18123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (11))){
var inst_18022 = (state_18070[(9)]);
var inst_18036 = (state_18070[(7)]);
var inst_18036__$1 = cljs.core.seq.call(null,inst_18022);
var state_18070__$1 = (function (){var statearr_18094 = state_18070;
(statearr_18094[(7)] = inst_18036__$1);

return statearr_18094;
})();
if(inst_18036__$1){
var statearr_18095_18124 = state_18070__$1;
(statearr_18095_18124[(1)] = (14));

} else {
var statearr_18096_18125 = state_18070__$1;
(statearr_18096_18125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (9))){
var inst_18058 = (state_18070[(2)]);
var inst_18059 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18070__$1 = (function (){var statearr_18097 = state_18070;
(statearr_18097[(15)] = inst_18058);

return statearr_18097;
})();
if(cljs.core.truth_(inst_18059)){
var statearr_18098_18126 = state_18070__$1;
(statearr_18098_18126[(1)] = (21));

} else {
var statearr_18099_18127 = state_18070__$1;
(statearr_18099_18127[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (5))){
var inst_18014 = cljs.core.async.close_BANG_.call(null,out);
var state_18070__$1 = state_18070;
var statearr_18100_18128 = state_18070__$1;
(statearr_18100_18128[(2)] = inst_18014);

(statearr_18100_18128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (14))){
var inst_18036 = (state_18070[(7)]);
var inst_18038 = cljs.core.chunked_seq_QMARK_.call(null,inst_18036);
var state_18070__$1 = state_18070;
if(inst_18038){
var statearr_18101_18129 = state_18070__$1;
(statearr_18101_18129[(1)] = (17));

} else {
var statearr_18102_18130 = state_18070__$1;
(statearr_18102_18130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (16))){
var inst_18054 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18103_18131 = state_18070__$1;
(statearr_18103_18131[(2)] = inst_18054);

(statearr_18103_18131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (10))){
var inst_18023 = (state_18070[(10)]);
var inst_18025 = (state_18070[(12)]);
var inst_18030 = cljs.core._nth.call(null,inst_18023,inst_18025);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18070__$1,(13),out,inst_18030);
} else {
if((state_val_18071 === (18))){
var inst_18036 = (state_18070[(7)]);
var inst_18045 = cljs.core.first.call(null,inst_18036);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18070__$1,(20),out,inst_18045);
} else {
if((state_val_18071 === (8))){
var inst_18024 = (state_18070[(11)]);
var inst_18025 = (state_18070[(12)]);
var inst_18027 = (inst_18025 < inst_18024);
var inst_18028 = inst_18027;
var state_18070__$1 = state_18070;
if(cljs.core.truth_(inst_18028)){
var statearr_18104_18132 = state_18070__$1;
(statearr_18104_18132[(1)] = (10));

} else {
var statearr_18105_18133 = state_18070__$1;
(statearr_18105_18133[(1)] = (11));

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
});})(c__16454__auto__))
;
return ((function (switch__16364__auto__,c__16454__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____0 = (function (){
var statearr_18106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18106[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__);

(statearr_18106[(1)] = (1));

return statearr_18106;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____1 = (function (state_18070){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_18070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e18107){if((e18107 instanceof Object)){
var ex__16368__auto__ = e18107;
var statearr_18108_18134 = state_18070;
(statearr_18108_18134[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18135 = state_18070;
state_18070 = G__18135;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__ = function(state_18070){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____1.call(this,state_18070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16365__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto__))
})();
var state__16456__auto__ = (function (){var statearr_18109 = f__16455__auto__.call(null);
(statearr_18109[(6)] = c__16454__auto__);

return statearr_18109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto__))
);

return c__16454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18137 = arguments.length;
switch (G__18137) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18140 = arguments.length;
switch (G__18140) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18143 = arguments.length;
switch (G__18143) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___18190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___18190,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___18190,out){
return (function (state_18167){
var state_val_18168 = (state_18167[(1)]);
if((state_val_18168 === (7))){
var inst_18162 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18169_18191 = state_18167__$1;
(statearr_18169_18191[(2)] = inst_18162);

(statearr_18169_18191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (1))){
var inst_18144 = null;
var state_18167__$1 = (function (){var statearr_18170 = state_18167;
(statearr_18170[(7)] = inst_18144);

return statearr_18170;
})();
var statearr_18171_18192 = state_18167__$1;
(statearr_18171_18192[(2)] = null);

(statearr_18171_18192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (4))){
var inst_18147 = (state_18167[(8)]);
var inst_18147__$1 = (state_18167[(2)]);
var inst_18148 = (inst_18147__$1 == null);
var inst_18149 = cljs.core.not.call(null,inst_18148);
var state_18167__$1 = (function (){var statearr_18172 = state_18167;
(statearr_18172[(8)] = inst_18147__$1);

return statearr_18172;
})();
if(inst_18149){
var statearr_18173_18193 = state_18167__$1;
(statearr_18173_18193[(1)] = (5));

} else {
var statearr_18174_18194 = state_18167__$1;
(statearr_18174_18194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (6))){
var state_18167__$1 = state_18167;
var statearr_18175_18195 = state_18167__$1;
(statearr_18175_18195[(2)] = null);

(statearr_18175_18195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (3))){
var inst_18164 = (state_18167[(2)]);
var inst_18165 = cljs.core.async.close_BANG_.call(null,out);
var state_18167__$1 = (function (){var statearr_18176 = state_18167;
(statearr_18176[(9)] = inst_18164);

return statearr_18176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18167__$1,inst_18165);
} else {
if((state_val_18168 === (2))){
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18167__$1,(4),ch);
} else {
if((state_val_18168 === (11))){
var inst_18147 = (state_18167[(8)]);
var inst_18156 = (state_18167[(2)]);
var inst_18144 = inst_18147;
var state_18167__$1 = (function (){var statearr_18177 = state_18167;
(statearr_18177[(10)] = inst_18156);

(statearr_18177[(7)] = inst_18144);

return statearr_18177;
})();
var statearr_18178_18196 = state_18167__$1;
(statearr_18178_18196[(2)] = null);

(statearr_18178_18196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (9))){
var inst_18147 = (state_18167[(8)]);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18167__$1,(11),out,inst_18147);
} else {
if((state_val_18168 === (5))){
var inst_18144 = (state_18167[(7)]);
var inst_18147 = (state_18167[(8)]);
var inst_18151 = cljs.core._EQ_.call(null,inst_18147,inst_18144);
var state_18167__$1 = state_18167;
if(inst_18151){
var statearr_18180_18197 = state_18167__$1;
(statearr_18180_18197[(1)] = (8));

} else {
var statearr_18181_18198 = state_18167__$1;
(statearr_18181_18198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (10))){
var inst_18159 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18182_18199 = state_18167__$1;
(statearr_18182_18199[(2)] = inst_18159);

(statearr_18182_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (8))){
var inst_18144 = (state_18167[(7)]);
var tmp18179 = inst_18144;
var inst_18144__$1 = tmp18179;
var state_18167__$1 = (function (){var statearr_18183 = state_18167;
(statearr_18183[(7)] = inst_18144__$1);

return statearr_18183;
})();
var statearr_18184_18200 = state_18167__$1;
(statearr_18184_18200[(2)] = null);

(statearr_18184_18200[(1)] = (2));


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
});})(c__16454__auto___18190,out))
;
return ((function (switch__16364__auto__,c__16454__auto___18190,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_18185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18185[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_18185[(1)] = (1));

return statearr_18185;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_18167){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_18167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e18186){if((e18186 instanceof Object)){
var ex__16368__auto__ = e18186;
var statearr_18187_18201 = state_18167;
(statearr_18187_18201[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18202 = state_18167;
state_18167 = G__18202;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_18167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_18167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___18190,out))
})();
var state__16456__auto__ = (function (){var statearr_18188 = f__16455__auto__.call(null);
(statearr_18188[(6)] = c__16454__auto___18190);

return statearr_18188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___18190,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18204 = arguments.length;
switch (G__18204) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___18270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___18270,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___18270,out){
return (function (state_18242){
var state_val_18243 = (state_18242[(1)]);
if((state_val_18243 === (7))){
var inst_18238 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
var statearr_18244_18271 = state_18242__$1;
(statearr_18244_18271[(2)] = inst_18238);

(statearr_18244_18271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (1))){
var inst_18205 = (new Array(n));
var inst_18206 = inst_18205;
var inst_18207 = (0);
var state_18242__$1 = (function (){var statearr_18245 = state_18242;
(statearr_18245[(7)] = inst_18207);

(statearr_18245[(8)] = inst_18206);

return statearr_18245;
})();
var statearr_18246_18272 = state_18242__$1;
(statearr_18246_18272[(2)] = null);

(statearr_18246_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (4))){
var inst_18210 = (state_18242[(9)]);
var inst_18210__$1 = (state_18242[(2)]);
var inst_18211 = (inst_18210__$1 == null);
var inst_18212 = cljs.core.not.call(null,inst_18211);
var state_18242__$1 = (function (){var statearr_18247 = state_18242;
(statearr_18247[(9)] = inst_18210__$1);

return statearr_18247;
})();
if(inst_18212){
var statearr_18248_18273 = state_18242__$1;
(statearr_18248_18273[(1)] = (5));

} else {
var statearr_18249_18274 = state_18242__$1;
(statearr_18249_18274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (15))){
var inst_18232 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
var statearr_18250_18275 = state_18242__$1;
(statearr_18250_18275[(2)] = inst_18232);

(statearr_18250_18275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (13))){
var state_18242__$1 = state_18242;
var statearr_18251_18276 = state_18242__$1;
(statearr_18251_18276[(2)] = null);

(statearr_18251_18276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (6))){
var inst_18207 = (state_18242[(7)]);
var inst_18228 = (inst_18207 > (0));
var state_18242__$1 = state_18242;
if(cljs.core.truth_(inst_18228)){
var statearr_18252_18277 = state_18242__$1;
(statearr_18252_18277[(1)] = (12));

} else {
var statearr_18253_18278 = state_18242__$1;
(statearr_18253_18278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (3))){
var inst_18240 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18242__$1,inst_18240);
} else {
if((state_val_18243 === (12))){
var inst_18206 = (state_18242[(8)]);
var inst_18230 = cljs.core.vec.call(null,inst_18206);
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18242__$1,(15),out,inst_18230);
} else {
if((state_val_18243 === (2))){
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18242__$1,(4),ch);
} else {
if((state_val_18243 === (11))){
var inst_18222 = (state_18242[(2)]);
var inst_18223 = (new Array(n));
var inst_18206 = inst_18223;
var inst_18207 = (0);
var state_18242__$1 = (function (){var statearr_18254 = state_18242;
(statearr_18254[(7)] = inst_18207);

(statearr_18254[(8)] = inst_18206);

(statearr_18254[(10)] = inst_18222);

return statearr_18254;
})();
var statearr_18255_18279 = state_18242__$1;
(statearr_18255_18279[(2)] = null);

(statearr_18255_18279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (9))){
var inst_18206 = (state_18242[(8)]);
var inst_18220 = cljs.core.vec.call(null,inst_18206);
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18242__$1,(11),out,inst_18220);
} else {
if((state_val_18243 === (5))){
var inst_18207 = (state_18242[(7)]);
var inst_18206 = (state_18242[(8)]);
var inst_18210 = (state_18242[(9)]);
var inst_18215 = (state_18242[(11)]);
var inst_18214 = (inst_18206[inst_18207] = inst_18210);
var inst_18215__$1 = (inst_18207 + (1));
var inst_18216 = (inst_18215__$1 < n);
var state_18242__$1 = (function (){var statearr_18256 = state_18242;
(statearr_18256[(12)] = inst_18214);

(statearr_18256[(11)] = inst_18215__$1);

return statearr_18256;
})();
if(cljs.core.truth_(inst_18216)){
var statearr_18257_18280 = state_18242__$1;
(statearr_18257_18280[(1)] = (8));

} else {
var statearr_18258_18281 = state_18242__$1;
(statearr_18258_18281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (14))){
var inst_18235 = (state_18242[(2)]);
var inst_18236 = cljs.core.async.close_BANG_.call(null,out);
var state_18242__$1 = (function (){var statearr_18260 = state_18242;
(statearr_18260[(13)] = inst_18235);

return statearr_18260;
})();
var statearr_18261_18282 = state_18242__$1;
(statearr_18261_18282[(2)] = inst_18236);

(statearr_18261_18282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (10))){
var inst_18226 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
var statearr_18262_18283 = state_18242__$1;
(statearr_18262_18283[(2)] = inst_18226);

(statearr_18262_18283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (8))){
var inst_18206 = (state_18242[(8)]);
var inst_18215 = (state_18242[(11)]);
var tmp18259 = inst_18206;
var inst_18206__$1 = tmp18259;
var inst_18207 = inst_18215;
var state_18242__$1 = (function (){var statearr_18263 = state_18242;
(statearr_18263[(7)] = inst_18207);

(statearr_18263[(8)] = inst_18206__$1);

return statearr_18263;
})();
var statearr_18264_18284 = state_18242__$1;
(statearr_18264_18284[(2)] = null);

(statearr_18264_18284[(1)] = (2));


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
});})(c__16454__auto___18270,out))
;
return ((function (switch__16364__auto__,c__16454__auto___18270,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_18265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18265[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_18265[(1)] = (1));

return statearr_18265;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_18242){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_18242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e18266){if((e18266 instanceof Object)){
var ex__16368__auto__ = e18266;
var statearr_18267_18285 = state_18242;
(statearr_18267_18285[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18286 = state_18242;
state_18242 = G__18286;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_18242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_18242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___18270,out))
})();
var state__16456__auto__ = (function (){var statearr_18268 = f__16455__auto__.call(null);
(statearr_18268[(6)] = c__16454__auto___18270);

return statearr_18268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___18270,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18288 = arguments.length;
switch (G__18288) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16454__auto___18358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16454__auto___18358,out){
return (function (){
var f__16455__auto__ = (function (){var switch__16364__auto__ = ((function (c__16454__auto___18358,out){
return (function (state_18330){
var state_val_18331 = (state_18330[(1)]);
if((state_val_18331 === (7))){
var inst_18326 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18332_18359 = state_18330__$1;
(statearr_18332_18359[(2)] = inst_18326);

(statearr_18332_18359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (1))){
var inst_18289 = [];
var inst_18290 = inst_18289;
var inst_18291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18330__$1 = (function (){var statearr_18333 = state_18330;
(statearr_18333[(7)] = inst_18291);

(statearr_18333[(8)] = inst_18290);

return statearr_18333;
})();
var statearr_18334_18360 = state_18330__$1;
(statearr_18334_18360[(2)] = null);

(statearr_18334_18360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (4))){
var inst_18294 = (state_18330[(9)]);
var inst_18294__$1 = (state_18330[(2)]);
var inst_18295 = (inst_18294__$1 == null);
var inst_18296 = cljs.core.not.call(null,inst_18295);
var state_18330__$1 = (function (){var statearr_18335 = state_18330;
(statearr_18335[(9)] = inst_18294__$1);

return statearr_18335;
})();
if(inst_18296){
var statearr_18336_18361 = state_18330__$1;
(statearr_18336_18361[(1)] = (5));

} else {
var statearr_18337_18362 = state_18330__$1;
(statearr_18337_18362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (15))){
var inst_18320 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18338_18363 = state_18330__$1;
(statearr_18338_18363[(2)] = inst_18320);

(statearr_18338_18363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (13))){
var state_18330__$1 = state_18330;
var statearr_18339_18364 = state_18330__$1;
(statearr_18339_18364[(2)] = null);

(statearr_18339_18364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (6))){
var inst_18290 = (state_18330[(8)]);
var inst_18315 = inst_18290.length;
var inst_18316 = (inst_18315 > (0));
var state_18330__$1 = state_18330;
if(cljs.core.truth_(inst_18316)){
var statearr_18340_18365 = state_18330__$1;
(statearr_18340_18365[(1)] = (12));

} else {
var statearr_18341_18366 = state_18330__$1;
(statearr_18341_18366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (3))){
var inst_18328 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18330__$1,inst_18328);
} else {
if((state_val_18331 === (12))){
var inst_18290 = (state_18330[(8)]);
var inst_18318 = cljs.core.vec.call(null,inst_18290);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18330__$1,(15),out,inst_18318);
} else {
if((state_val_18331 === (2))){
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18330__$1,(4),ch);
} else {
if((state_val_18331 === (11))){
var inst_18298 = (state_18330[(10)]);
var inst_18294 = (state_18330[(9)]);
var inst_18308 = (state_18330[(2)]);
var inst_18309 = [];
var inst_18310 = inst_18309.push(inst_18294);
var inst_18290 = inst_18309;
var inst_18291 = inst_18298;
var state_18330__$1 = (function (){var statearr_18342 = state_18330;
(statearr_18342[(11)] = inst_18308);

(statearr_18342[(7)] = inst_18291);

(statearr_18342[(8)] = inst_18290);

(statearr_18342[(12)] = inst_18310);

return statearr_18342;
})();
var statearr_18343_18367 = state_18330__$1;
(statearr_18343_18367[(2)] = null);

(statearr_18343_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (9))){
var inst_18290 = (state_18330[(8)]);
var inst_18306 = cljs.core.vec.call(null,inst_18290);
var state_18330__$1 = state_18330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18330__$1,(11),out,inst_18306);
} else {
if((state_val_18331 === (5))){
var inst_18298 = (state_18330[(10)]);
var inst_18291 = (state_18330[(7)]);
var inst_18294 = (state_18330[(9)]);
var inst_18298__$1 = f.call(null,inst_18294);
var inst_18299 = cljs.core._EQ_.call(null,inst_18298__$1,inst_18291);
var inst_18300 = cljs.core.keyword_identical_QMARK_.call(null,inst_18291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18301 = (inst_18299) || (inst_18300);
var state_18330__$1 = (function (){var statearr_18344 = state_18330;
(statearr_18344[(10)] = inst_18298__$1);

return statearr_18344;
})();
if(cljs.core.truth_(inst_18301)){
var statearr_18345_18368 = state_18330__$1;
(statearr_18345_18368[(1)] = (8));

} else {
var statearr_18346_18369 = state_18330__$1;
(statearr_18346_18369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (14))){
var inst_18323 = (state_18330[(2)]);
var inst_18324 = cljs.core.async.close_BANG_.call(null,out);
var state_18330__$1 = (function (){var statearr_18348 = state_18330;
(statearr_18348[(13)] = inst_18323);

return statearr_18348;
})();
var statearr_18349_18370 = state_18330__$1;
(statearr_18349_18370[(2)] = inst_18324);

(statearr_18349_18370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (10))){
var inst_18313 = (state_18330[(2)]);
var state_18330__$1 = state_18330;
var statearr_18350_18371 = state_18330__$1;
(statearr_18350_18371[(2)] = inst_18313);

(statearr_18350_18371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18331 === (8))){
var inst_18298 = (state_18330[(10)]);
var inst_18290 = (state_18330[(8)]);
var inst_18294 = (state_18330[(9)]);
var inst_18303 = inst_18290.push(inst_18294);
var tmp18347 = inst_18290;
var inst_18290__$1 = tmp18347;
var inst_18291 = inst_18298;
var state_18330__$1 = (function (){var statearr_18351 = state_18330;
(statearr_18351[(7)] = inst_18291);

(statearr_18351[(8)] = inst_18290__$1);

(statearr_18351[(14)] = inst_18303);

return statearr_18351;
})();
var statearr_18352_18372 = state_18330__$1;
(statearr_18352_18372[(2)] = null);

(statearr_18352_18372[(1)] = (2));


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
});})(c__16454__auto___18358,out))
;
return ((function (switch__16364__auto__,c__16454__auto___18358,out){
return (function() {
var cljs$core$async$state_machine__16365__auto__ = null;
var cljs$core$async$state_machine__16365__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = cljs$core$async$state_machine__16365__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var cljs$core$async$state_machine__16365__auto____1 = (function (state_18330){
while(true){
var ret_value__16366__auto__ = (function (){try{while(true){
var result__16367__auto__ = switch__16364__auto__.call(null,state_18330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16367__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__16368__auto__ = e18354;
var statearr_18355_18373 = state_18330;
(statearr_18355_18373[(5)] = ex__16368__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18374 = state_18330;
state_18330 = G__18374;
continue;
} else {
return ret_value__16366__auto__;
}
break;
}
});
cljs$core$async$state_machine__16365__auto__ = function(state_18330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16365__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16365__auto____1.call(this,state_18330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16365__auto____0;
cljs$core$async$state_machine__16365__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16365__auto____1;
return cljs$core$async$state_machine__16365__auto__;
})()
;})(switch__16364__auto__,c__16454__auto___18358,out))
})();
var state__16456__auto__ = (function (){var statearr_18356 = f__16455__auto__.call(null);
(statearr_18356[(6)] = c__16454__auto___18358);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16456__auto__);
});})(c__16454__auto___18358,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513171807650
