goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29817 = arguments.length;
switch (G__29817) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29818 = (function (f,blockable,meta29819){
this.f = f;
this.blockable = blockable;
this.meta29819 = meta29819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29820,meta29819__$1){
var self__ = this;
var _29820__$1 = this;
return (new cljs.core.async.t_cljs$core$async29818(self__.f,self__.blockable,meta29819__$1));
}));

(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29820){
var self__ = this;
var _29820__$1 = this;
return self__.meta29819;
}));

(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29819","meta29819",-481839183,null)], null);
}));

(cljs.core.async.t_cljs$core$async29818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29818");

(cljs.core.async.t_cljs$core$async29818.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29818.
 */
cljs.core.async.__GT_t_cljs$core$async29818 = (function cljs$core$async$__GT_t_cljs$core$async29818(f__$1,blockable__$1,meta29819){
return (new cljs.core.async.t_cljs$core$async29818(f__$1,blockable__$1,meta29819));
});

}

return (new cljs.core.async.t_cljs$core$async29818(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29829 = arguments.length;
switch (G__29829) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29840 = arguments.length;
switch (G__29840) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__29850 = arguments.length;
switch (G__29850) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32567 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32567) : fn1.call(null,val_32567));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32567) : fn1.call(null,val_32567));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29859 = arguments.length;
switch (G__29859) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32580 = n;
var x_32581 = (0);
while(true){
if((x_32581 < n__4613__auto___32580)){
(a[x_32581] = x_32581);

var G__32582 = (x_32581 + (1));
x_32581 = G__32582;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29873 = (function (flag,meta29874){
this.flag = flag;
this.meta29874 = meta29874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29875,meta29874__$1){
var self__ = this;
var _29875__$1 = this;
return (new cljs.core.async.t_cljs$core$async29873(self__.flag,meta29874__$1));
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29875){
var self__ = this;
var _29875__$1 = this;
return self__.meta29874;
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29874","meta29874",-2009452239,null)], null);
}));

(cljs.core.async.t_cljs$core$async29873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29873");

(cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29873.
 */
cljs.core.async.__GT_t_cljs$core$async29873 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29873(flag__$1,meta29874){
return (new cljs.core.async.t_cljs$core$async29873(flag__$1,meta29874));
});

}

return (new cljs.core.async.t_cljs$core$async29873(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29899 = (function (flag,cb,meta29900){
this.flag = flag;
this.cb = cb;
this.meta29900 = meta29900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29901,meta29900__$1){
var self__ = this;
var _29901__$1 = this;
return (new cljs.core.async.t_cljs$core$async29899(self__.flag,self__.cb,meta29900__$1));
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29901){
var self__ = this;
var _29901__$1 = this;
return self__.meta29900;
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29900","meta29900",881546046,null)], null);
}));

(cljs.core.async.t_cljs$core$async29899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29899");

(cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29899.
 */
cljs.core.async.__GT_t_cljs$core$async29899 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29899(flag__$1,cb__$1,meta29900){
return (new cljs.core.async.t_cljs$core$async29899(flag__$1,cb__$1,meta29900));
});

}

return (new cljs.core.async.t_cljs$core$async29899(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29912_SHARP_){
var G__29916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29912_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29916) : fret.call(null,G__29916));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29913_SHARP_){
var G__29917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29913_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29917) : fret.call(null,G__29917));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32595 = (i + (1));
i = G__32595;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___32600 = arguments.length;
var i__4737__auto___32601 = (0);
while(true){
if((i__4737__auto___32601 < len__4736__auto___32600)){
args__4742__auto__.push((arguments[i__4737__auto___32601]));

var G__32602 = (i__4737__auto___32601 + (1));
i__4737__auto___32601 = G__32602;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29923){
var map__29924 = p__29923;
var map__29924__$1 = (((((!((map__29924 == null))))?(((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29924):map__29924);
var opts = map__29924__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29918){
var G__29919 = cljs.core.first(seq29918);
var seq29918__$1 = cljs.core.next(seq29918);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29919,seq29918__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__29933 = arguments.length;
switch (G__29933) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29715__auto___32625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_29990){
var state_val_29991 = (state_29990[(1)]);
if((state_val_29991 === (7))){
var inst_29983 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
var statearr_30000_32626 = state_29990__$1;
(statearr_30000_32626[(2)] = inst_29983);

(statearr_30000_32626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (1))){
var state_29990__$1 = state_29990;
var statearr_30001_32631 = state_29990__$1;
(statearr_30001_32631[(2)] = null);

(statearr_30001_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (4))){
var inst_29954 = (state_29990[(7)]);
var inst_29954__$1 = (state_29990[(2)]);
var inst_29960 = (inst_29954__$1 == null);
var state_29990__$1 = (function (){var statearr_30006 = state_29990;
(statearr_30006[(7)] = inst_29954__$1);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29960)){
var statearr_30007_32634 = state_29990__$1;
(statearr_30007_32634[(1)] = (5));

} else {
var statearr_30008_32635 = state_29990__$1;
(statearr_30008_32635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (13))){
var state_29990__$1 = state_29990;
var statearr_30015_32636 = state_29990__$1;
(statearr_30015_32636[(2)] = null);

(statearr_30015_32636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (6))){
var inst_29954 = (state_29990[(7)]);
var state_29990__$1 = state_29990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29990__$1,(11),to,inst_29954);
} else {
if((state_val_29991 === (3))){
var inst_29988 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29990__$1,inst_29988);
} else {
if((state_val_29991 === (12))){
var state_29990__$1 = state_29990;
var statearr_30019_32637 = state_29990__$1;
(statearr_30019_32637[(2)] = null);

(statearr_30019_32637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (2))){
var state_29990__$1 = state_29990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29990__$1,(4),from);
} else {
if((state_val_29991 === (11))){
var inst_29976 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
if(cljs.core.truth_(inst_29976)){
var statearr_30020_32638 = state_29990__$1;
(statearr_30020_32638[(1)] = (12));

} else {
var statearr_30021_32639 = state_29990__$1;
(statearr_30021_32639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (9))){
var state_29990__$1 = state_29990;
var statearr_30022_32640 = state_29990__$1;
(statearr_30022_32640[(2)] = null);

(statearr_30022_32640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (5))){
var state_29990__$1 = state_29990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30023_32641 = state_29990__$1;
(statearr_30023_32641[(1)] = (8));

} else {
var statearr_30024_32642 = state_29990__$1;
(statearr_30024_32642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (14))){
var inst_29981 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
var statearr_30025_32644 = state_29990__$1;
(statearr_30025_32644[(2)] = inst_29981);

(statearr_30025_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (10))){
var inst_29973 = (state_29990[(2)]);
var state_29990__$1 = state_29990;
var statearr_30027_32646 = state_29990__$1;
(statearr_30027_32646[(2)] = inst_29973);

(statearr_30027_32646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (8))){
var inst_29970 = cljs.core.async.close_BANG_(to);
var state_29990__$1 = state_29990;
var statearr_30029_32648 = state_29990__$1;
(statearr_30029_32648[(2)] = inst_29970);

(statearr_30029_32648[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_30030 = [null,null,null,null,null,null,null,null];
(statearr_30030[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_30030[(1)] = (1));

return statearr_30030;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_29990){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_29990);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30031){var ex__29612__auto__ = e30031;
var statearr_30032_32650 = state_29990;
(statearr_30032_32650[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_29990[(4)]))){
var statearr_30033_32651 = state_29990;
(statearr_30033_32651[(1)] = cljs.core.first((state_29990[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_29990;
state_29990 = G__32652;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_29990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_29990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30035 = f__29716__auto__();
(statearr_30035[(6)] = c__29715__auto___32625);

return statearr_30035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30038){
var vec__30039 = p__30038;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(1),null);
var job = vec__30039;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29715__auto___32658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30048){
var state_val_30049 = (state_30048[(1)]);
if((state_val_30049 === (1))){
var state_30048__$1 = state_30048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30048__$1,(2),res,v);
} else {
if((state_val_30049 === (2))){
var inst_30045 = (state_30048[(2)]);
var inst_30046 = cljs.core.async.close_BANG_(res);
var state_30048__$1 = (function (){var statearr_30051 = state_30048;
(statearr_30051[(7)] = inst_30045);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30048__$1,inst_30046);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1 = (function (state_30048){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30048);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30055){var ex__29612__auto__ = e30055;
var statearr_30056_32665 = state_30048;
(statearr_30056_32665[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30048[(4)]))){
var statearr_30057_32666 = state_30048;
(statearr_30057_32666[(1)] = cljs.core.first((state_30048[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32667 = state_30048;
state_30048 = G__32667;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = function(state_30048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1.call(this,state_30048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30062 = f__29716__auto__();
(statearr_30062[(6)] = c__29715__auto___32658);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30065){
var vec__30067 = p__30065;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30067,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30067,(1),null);
var job = vec__30067;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32672 = n;
var __32673 = (0);
while(true){
if((__32673 < n__4613__auto___32672)){
var G__30070_32674 = type;
var G__30070_32675__$1 = (((G__30070_32674 instanceof cljs.core.Keyword))?G__30070_32674.fqn:null);
switch (G__30070_32675__$1) {
case "compute":
var c__29715__auto___32679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32673,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = ((function (__32673,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function (state_30083){
var state_val_30084 = (state_30083[(1)]);
if((state_val_30084 === (1))){
var state_30083__$1 = state_30083;
var statearr_30085_32682 = state_30083__$1;
(statearr_30085_32682[(2)] = null);

(statearr_30085_32682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (2))){
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30083__$1,(4),jobs);
} else {
if((state_val_30084 === (3))){
var inst_30081 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30083__$1,inst_30081);
} else {
if((state_val_30084 === (4))){
var inst_30073 = (state_30083[(2)]);
var inst_30074 = process(inst_30073);
var state_30083__$1 = state_30083;
if(cljs.core.truth_(inst_30074)){
var statearr_30089_32686 = state_30083__$1;
(statearr_30089_32686[(1)] = (5));

} else {
var statearr_30090_32687 = state_30083__$1;
(statearr_30090_32687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (5))){
var state_30083__$1 = state_30083;
var statearr_30091_32689 = state_30083__$1;
(statearr_30091_32689[(2)] = null);

(statearr_30091_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (6))){
var state_30083__$1 = state_30083;
var statearr_30092_32690 = state_30083__$1;
(statearr_30092_32690[(2)] = null);

(statearr_30092_32690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30084 === (7))){
var inst_30079 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
var statearr_30094_32691 = state_30083__$1;
(statearr_30094_32691[(2)] = inst_30079);

(statearr_30094_32691[(1)] = (3));


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
});})(__32673,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
;
return ((function (__32673,switch__29608__auto__,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_30095 = [null,null,null,null,null,null,null];
(statearr_30095[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__);

(statearr_30095[(1)] = (1));

return statearr_30095;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1 = (function (state_30083){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30083);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30096){var ex__29612__auto__ = e30096;
var statearr_30097_32692 = state_30083;
(statearr_30097_32692[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30083[(4)]))){
var statearr_30098_32694 = state_30083;
(statearr_30098_32694[(1)] = cljs.core.first((state_30083[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_30083;
state_30083 = G__32699;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__;
})()
;})(__32673,switch__29608__auto__,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
})();
var state__29717__auto__ = (function (){var statearr_30104 = f__29716__auto__();
(statearr_30104[(6)] = c__29715__auto___32679);

return statearr_30104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
});})(__32673,c__29715__auto___32679,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
);


break;
case "async":
var c__29715__auto___32703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32673,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = ((function (__32673,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function (state_30127){
var state_val_30128 = (state_30127[(1)]);
if((state_val_30128 === (1))){
var state_30127__$1 = state_30127;
var statearr_30142_32704 = state_30127__$1;
(statearr_30142_32704[(2)] = null);

(statearr_30142_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (2))){
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30127__$1,(4),jobs);
} else {
if((state_val_30128 === (3))){
var inst_30123 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30127__$1,inst_30123);
} else {
if((state_val_30128 === (4))){
var inst_30113 = (state_30127[(2)]);
var inst_30115 = async(inst_30113);
var state_30127__$1 = state_30127;
if(cljs.core.truth_(inst_30115)){
var statearr_30152_32711 = state_30127__$1;
(statearr_30152_32711[(1)] = (5));

} else {
var statearr_30154_32712 = state_30127__$1;
(statearr_30154_32712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (5))){
var state_30127__$1 = state_30127;
var statearr_30159_32714 = state_30127__$1;
(statearr_30159_32714[(2)] = null);

(statearr_30159_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (6))){
var state_30127__$1 = state_30127;
var statearr_30164_32715 = state_30127__$1;
(statearr_30164_32715[(2)] = null);

(statearr_30164_32715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (7))){
var inst_30121 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30168_32721 = state_30127__$1;
(statearr_30168_32721[(2)] = inst_30121);

(statearr_30168_32721[(1)] = (3));


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
});})(__32673,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
;
return ((function (__32673,switch__29608__auto__,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_30176 = [null,null,null,null,null,null,null];
(statearr_30176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__);

(statearr_30176[(1)] = (1));

return statearr_30176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1 = (function (state_30127){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30127);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30177){var ex__29612__auto__ = e30177;
var statearr_30178_32727 = state_30127;
(statearr_30178_32727[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30127[(4)]))){
var statearr_30179_32731 = state_30127;
(statearr_30179_32731[(1)] = cljs.core.first((state_30127[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_30127;
state_30127 = G__32732;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = function(state_30127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1.call(this,state_30127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__;
})()
;})(__32673,switch__29608__auto__,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
})();
var state__29717__auto__ = (function (){var statearr_30180 = f__29716__auto__();
(statearr_30180[(6)] = c__29715__auto___32703);

return statearr_30180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
});})(__32673,c__29715__auto___32703,G__30070_32674,G__30070_32675__$1,n__4613__auto___32672,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30070_32675__$1)].join('')));

}

var G__32733 = (__32673 + (1));
__32673 = G__32733;
continue;
} else {
}
break;
}

var c__29715__auto___32737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (7))){
var inst_30202 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30213_32738 = state_30208__$1;
(statearr_30213_32738[(2)] = inst_30202);

(statearr_30213_32738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (1))){
var state_30208__$1 = state_30208;
var statearr_30214_32742 = state_30208__$1;
(statearr_30214_32742[(2)] = null);

(statearr_30214_32742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (4))){
var inst_30184 = (state_30208[(7)]);
var inst_30184__$1 = (state_30208[(2)]);
var inst_30185 = (inst_30184__$1 == null);
var state_30208__$1 = (function (){var statearr_30218 = state_30208;
(statearr_30218[(7)] = inst_30184__$1);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30185)){
var statearr_30219_32746 = state_30208__$1;
(statearr_30219_32746[(1)] = (5));

} else {
var statearr_30220_32747 = state_30208__$1;
(statearr_30220_32747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (6))){
var inst_30184 = (state_30208[(7)]);
var inst_30189 = (state_30208[(8)]);
var inst_30189__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30194 = [inst_30184,inst_30189__$1];
var inst_30195 = (new cljs.core.PersistentVector(null,2,(5),inst_30193,inst_30194,null));
var state_30208__$1 = (function (){var statearr_30221 = state_30208;
(statearr_30221[(8)] = inst_30189__$1);

return statearr_30221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30208__$1,(8),jobs,inst_30195);
} else {
if((state_val_30209 === (3))){
var inst_30204 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30208__$1,inst_30204);
} else {
if((state_val_30209 === (2))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30208__$1,(4),from);
} else {
if((state_val_30209 === (9))){
var inst_30199 = (state_30208[(2)]);
var state_30208__$1 = (function (){var statearr_30222 = state_30208;
(statearr_30222[(9)] = inst_30199);

return statearr_30222;
})();
var statearr_30223_32752 = state_30208__$1;
(statearr_30223_32752[(2)] = null);

(statearr_30223_32752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (5))){
var inst_30187 = cljs.core.async.close_BANG_(jobs);
var state_30208__$1 = state_30208;
var statearr_30224_32753 = state_30208__$1;
(statearr_30224_32753[(2)] = inst_30187);

(statearr_30224_32753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (8))){
var inst_30189 = (state_30208[(8)]);
var inst_30197 = (state_30208[(2)]);
var state_30208__$1 = (function (){var statearr_30225 = state_30208;
(statearr_30225[(10)] = inst_30197);

return statearr_30225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30208__$1,(9),results,inst_30189);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1 = (function (state_30208){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30208);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30227){var ex__29612__auto__ = e30227;
var statearr_30228_32769 = state_30208;
(statearr_30228_32769[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30208[(4)]))){
var statearr_30229_32770 = state_30208;
(statearr_30229_32770[(1)] = cljs.core.first((state_30208[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_30208;
state_30208 = G__32774;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30232 = f__29716__auto__();
(statearr_30232[(6)] = c__29715__auto___32737);

return statearr_30232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


var c__29715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30271){
var state_val_30272 = (state_30271[(1)]);
if((state_val_30272 === (7))){
var inst_30267 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30286_32779 = state_30271__$1;
(statearr_30286_32779[(2)] = inst_30267);

(statearr_30286_32779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (20))){
var state_30271__$1 = state_30271;
var statearr_30287_32786 = state_30271__$1;
(statearr_30287_32786[(2)] = null);

(statearr_30287_32786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (1))){
var state_30271__$1 = state_30271;
var statearr_30288_32787 = state_30271__$1;
(statearr_30288_32787[(2)] = null);

(statearr_30288_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (4))){
var inst_30235 = (state_30271[(7)]);
var inst_30235__$1 = (state_30271[(2)]);
var inst_30236 = (inst_30235__$1 == null);
var state_30271__$1 = (function (){var statearr_30290 = state_30271;
(statearr_30290[(7)] = inst_30235__$1);

return statearr_30290;
})();
if(cljs.core.truth_(inst_30236)){
var statearr_30291_32789 = state_30271__$1;
(statearr_30291_32789[(1)] = (5));

} else {
var statearr_30292_32790 = state_30271__$1;
(statearr_30292_32790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (15))){
var inst_30249 = (state_30271[(8)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30271__$1,(18),to,inst_30249);
} else {
if((state_val_30272 === (21))){
var inst_30262 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30296_32792 = state_30271__$1;
(statearr_30296_32792[(2)] = inst_30262);

(statearr_30296_32792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (13))){
var inst_30264 = (state_30271[(2)]);
var state_30271__$1 = (function (){var statearr_30297 = state_30271;
(statearr_30297[(9)] = inst_30264);

return statearr_30297;
})();
var statearr_30298_32793 = state_30271__$1;
(statearr_30298_32793[(2)] = null);

(statearr_30298_32793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (6))){
var inst_30235 = (state_30271[(7)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(11),inst_30235);
} else {
if((state_val_30272 === (17))){
var inst_30257 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
if(cljs.core.truth_(inst_30257)){
var statearr_30300_32795 = state_30271__$1;
(statearr_30300_32795[(1)] = (19));

} else {
var statearr_30301_32796 = state_30271__$1;
(statearr_30301_32796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (3))){
var inst_30269 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30271__$1,inst_30269);
} else {
if((state_val_30272 === (12))){
var inst_30246 = (state_30271[(10)]);
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(14),inst_30246);
} else {
if((state_val_30272 === (2))){
var state_30271__$1 = state_30271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30271__$1,(4),results);
} else {
if((state_val_30272 === (19))){
var state_30271__$1 = state_30271;
var statearr_30303_32801 = state_30271__$1;
(statearr_30303_32801[(2)] = null);

(statearr_30303_32801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (11))){
var inst_30246 = (state_30271[(2)]);
var state_30271__$1 = (function (){var statearr_30304 = state_30271;
(statearr_30304[(10)] = inst_30246);

return statearr_30304;
})();
var statearr_30305_32802 = state_30271__$1;
(statearr_30305_32802[(2)] = null);

(statearr_30305_32802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (9))){
var state_30271__$1 = state_30271;
var statearr_30306_32805 = state_30271__$1;
(statearr_30306_32805[(2)] = null);

(statearr_30306_32805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (5))){
var state_30271__$1 = state_30271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30309_32808 = state_30271__$1;
(statearr_30309_32808[(1)] = (8));

} else {
var statearr_30311_32809 = state_30271__$1;
(statearr_30311_32809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (14))){
var inst_30249 = (state_30271[(8)]);
var inst_30249__$1 = (state_30271[(2)]);
var inst_30250 = (inst_30249__$1 == null);
var inst_30251 = cljs.core.not(inst_30250);
var state_30271__$1 = (function (){var statearr_30313 = state_30271;
(statearr_30313[(8)] = inst_30249__$1);

return statearr_30313;
})();
if(inst_30251){
var statearr_30314_32810 = state_30271__$1;
(statearr_30314_32810[(1)] = (15));

} else {
var statearr_30315_32811 = state_30271__$1;
(statearr_30315_32811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (16))){
var state_30271__$1 = state_30271;
var statearr_30316_32826 = state_30271__$1;
(statearr_30316_32826[(2)] = false);

(statearr_30316_32826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (10))){
var inst_30243 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30317_32827 = state_30271__$1;
(statearr_30317_32827[(2)] = inst_30243);

(statearr_30317_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (18))){
var inst_30254 = (state_30271[(2)]);
var state_30271__$1 = state_30271;
var statearr_30318_32828 = state_30271__$1;
(statearr_30318_32828[(2)] = inst_30254);

(statearr_30318_32828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30272 === (8))){
var inst_30240 = cljs.core.async.close_BANG_(to);
var state_30271__$1 = state_30271;
var statearr_30320_32832 = state_30271__$1;
(statearr_30320_32832[(2)] = inst_30240);

(statearr_30320_32832[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_30324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__);

(statearr_30324[(1)] = (1));

return statearr_30324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1 = (function (state_30271){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30271);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30325){var ex__29612__auto__ = e30325;
var statearr_30326_32833 = state_30271;
(statearr_30326_32833[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30271[(4)]))){
var statearr_30327_32834 = state_30271;
(statearr_30327_32834[(1)] = cljs.core.first((state_30271[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_30271;
state_30271 = G__32835;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__ = function(state_30271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1.call(this,state_30271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30328 = f__29716__auto__();
(statearr_30328[(6)] = c__29715__auto__);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

return c__29715__auto__;
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
var G__30330 = arguments.length;
switch (G__30330) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30336 = arguments.length;
switch (G__30336) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30353 = arguments.length;
switch (G__30353) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29715__auto___32862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30385){
var state_val_30386 = (state_30385[(1)]);
if((state_val_30386 === (7))){
var inst_30381 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30389_32863 = state_30385__$1;
(statearr_30389_32863[(2)] = inst_30381);

(statearr_30389_32863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (1))){
var state_30385__$1 = state_30385;
var statearr_30402_32866 = state_30385__$1;
(statearr_30402_32866[(2)] = null);

(statearr_30402_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (4))){
var inst_30362 = (state_30385[(7)]);
var inst_30362__$1 = (state_30385[(2)]);
var inst_30363 = (inst_30362__$1 == null);
var state_30385__$1 = (function (){var statearr_30403 = state_30385;
(statearr_30403[(7)] = inst_30362__$1);

return statearr_30403;
})();
if(cljs.core.truth_(inst_30363)){
var statearr_30404_32867 = state_30385__$1;
(statearr_30404_32867[(1)] = (5));

} else {
var statearr_30405_32868 = state_30385__$1;
(statearr_30405_32868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (13))){
var state_30385__$1 = state_30385;
var statearr_30406_32869 = state_30385__$1;
(statearr_30406_32869[(2)] = null);

(statearr_30406_32869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (6))){
var inst_30362 = (state_30385[(7)]);
var inst_30368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30362) : p.call(null,inst_30362));
var state_30385__$1 = state_30385;
if(cljs.core.truth_(inst_30368)){
var statearr_30407_32870 = state_30385__$1;
(statearr_30407_32870[(1)] = (9));

} else {
var statearr_30408_32871 = state_30385__$1;
(statearr_30408_32871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (3))){
var inst_30383 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30385__$1,inst_30383);
} else {
if((state_val_30386 === (12))){
var state_30385__$1 = state_30385;
var statearr_30409_32872 = state_30385__$1;
(statearr_30409_32872[(2)] = null);

(statearr_30409_32872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (2))){
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30385__$1,(4),ch);
} else {
if((state_val_30386 === (11))){
var inst_30362 = (state_30385[(7)]);
var inst_30372 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30385__$1,(8),inst_30372,inst_30362);
} else {
if((state_val_30386 === (9))){
var state_30385__$1 = state_30385;
var statearr_30410_32873 = state_30385__$1;
(statearr_30410_32873[(2)] = tc);

(statearr_30410_32873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (5))){
var inst_30365 = cljs.core.async.close_BANG_(tc);
var inst_30366 = cljs.core.async.close_BANG_(fc);
var state_30385__$1 = (function (){var statearr_30411 = state_30385;
(statearr_30411[(8)] = inst_30365);

return statearr_30411;
})();
var statearr_30412_32874 = state_30385__$1;
(statearr_30412_32874[(2)] = inst_30366);

(statearr_30412_32874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (14))){
var inst_30379 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30413_32875 = state_30385__$1;
(statearr_30413_32875[(2)] = inst_30379);

(statearr_30413_32875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (10))){
var state_30385__$1 = state_30385;
var statearr_30414_32876 = state_30385__$1;
(statearr_30414_32876[(2)] = fc);

(statearr_30414_32876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (8))){
var inst_30374 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
if(cljs.core.truth_(inst_30374)){
var statearr_30415_32877 = state_30385__$1;
(statearr_30415_32877[(1)] = (12));

} else {
var statearr_30416_32878 = state_30385__$1;
(statearr_30416_32878[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_30385){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30385);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30434){var ex__29612__auto__ = e30434;
var statearr_30435_32879 = state_30385;
(statearr_30435_32879[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30385[(4)]))){
var statearr_30436_32880 = state_30385;
(statearr_30436_32880[(1)] = cljs.core.first((state_30385[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_30385;
state_30385 = G__32881;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_30385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_30385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30437 = f__29716__auto__();
(statearr_30437[(6)] = c__29715__auto___32862);

return statearr_30437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (7))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30465_32888 = state_30463__$1;
(statearr_30465_32888[(2)] = inst_30459);

(statearr_30465_32888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (1))){
var inst_30442 = init;
var inst_30443 = inst_30442;
var state_30463__$1 = (function (){var statearr_30469 = state_30463;
(statearr_30469[(7)] = inst_30443);

return statearr_30469;
})();
var statearr_30470_32889 = state_30463__$1;
(statearr_30470_32889[(2)] = null);

(statearr_30470_32889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (4))){
var inst_30446 = (state_30463[(8)]);
var inst_30446__$1 = (state_30463[(2)]);
var inst_30447 = (inst_30446__$1 == null);
var state_30463__$1 = (function (){var statearr_30471 = state_30463;
(statearr_30471[(8)] = inst_30446__$1);

return statearr_30471;
})();
if(cljs.core.truth_(inst_30447)){
var statearr_30472_32890 = state_30463__$1;
(statearr_30472_32890[(1)] = (5));

} else {
var statearr_30473_32891 = state_30463__$1;
(statearr_30473_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var inst_30446 = (state_30463[(8)]);
var inst_30443 = (state_30463[(7)]);
var inst_30450 = (state_30463[(9)]);
var inst_30450__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30443,inst_30446) : f.call(null,inst_30443,inst_30446));
var inst_30451 = cljs.core.reduced_QMARK_(inst_30450__$1);
var state_30463__$1 = (function (){var statearr_30498 = state_30463;
(statearr_30498[(9)] = inst_30450__$1);

return statearr_30498;
})();
if(inst_30451){
var statearr_30499_32895 = state_30463__$1;
(statearr_30499_32895[(1)] = (8));

} else {
var statearr_30501_32896 = state_30463__$1;
(statearr_30501_32896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (3))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (2))){
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30463__$1,(4),ch);
} else {
if((state_val_30464 === (9))){
var inst_30450 = (state_30463[(9)]);
var inst_30443 = inst_30450;
var state_30463__$1 = (function (){var statearr_30510 = state_30463;
(statearr_30510[(7)] = inst_30443);

return statearr_30510;
})();
var statearr_30511_32897 = state_30463__$1;
(statearr_30511_32897[(2)] = null);

(statearr_30511_32897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (5))){
var inst_30443 = (state_30463[(7)]);
var state_30463__$1 = state_30463;
var statearr_30522_32899 = state_30463__$1;
(statearr_30522_32899[(2)] = inst_30443);

(statearr_30522_32899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (10))){
var inst_30457 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30524_32903 = state_30463__$1;
(statearr_30524_32903[(2)] = inst_30457);

(statearr_30524_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (8))){
var inst_30450 = (state_30463[(9)]);
var inst_30453 = cljs.core.deref(inst_30450);
var state_30463__$1 = state_30463;
var statearr_30530_32904 = state_30463__$1;
(statearr_30530_32904[(2)] = inst_30453);

(statearr_30530_32904[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29609__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29609__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$reduce_$_state_machine__29609__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$reduce_$_state_machine__29609__auto____1 = (function (state_30463){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30463);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30533){var ex__29612__auto__ = e30533;
var statearr_30534_32905 = state_30463;
(statearr_30534_32905[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30463[(4)]))){
var statearr_30539_32907 = state_30463;
(statearr_30539_32907[(1)] = cljs.core.first((state_30463[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32909 = state_30463;
state_30463 = G__32909;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29609__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29609__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29609__auto____0;
cljs$core$async$reduce_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29609__auto____1;
return cljs$core$async$reduce_$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30541 = f__29716__auto__();
(statearr_30541[(6)] = c__29715__auto__);

return statearr_30541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

return c__29715__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30551){
var state_val_30552 = (state_30551[(1)]);
if((state_val_30552 === (1))){
var inst_30546 = cljs.core.async.reduce(f__$1,init,ch);
var state_30551__$1 = state_30551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30551__$1,(2),inst_30546);
} else {
if((state_val_30552 === (2))){
var inst_30548 = (state_30551[(2)]);
var inst_30549 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30548) : f__$1.call(null,inst_30548));
var state_30551__$1 = state_30551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30551__$1,inst_30549);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29609__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29609__auto____0 = (function (){
var statearr_30556 = [null,null,null,null,null,null,null];
(statearr_30556[(0)] = cljs$core$async$transduce_$_state_machine__29609__auto__);

(statearr_30556[(1)] = (1));

return statearr_30556;
});
var cljs$core$async$transduce_$_state_machine__29609__auto____1 = (function (state_30551){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30551);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30557){var ex__29612__auto__ = e30557;
var statearr_30558_32914 = state_30551;
(statearr_30558_32914[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30551[(4)]))){
var statearr_30559_32915 = state_30551;
(statearr_30559_32915[(1)] = cljs.core.first((state_30551[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32916 = state_30551;
state_30551 = G__32916;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29609__auto__ = function(state_30551){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29609__auto____1.call(this,state_30551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29609__auto____0;
cljs$core$async$transduce_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29609__auto____1;
return cljs$core$async$transduce_$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30560 = f__29716__auto__();
(statearr_30560[(6)] = c__29715__auto__);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

return c__29715__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30570 = arguments.length;
switch (G__30570) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30596){
var state_val_30597 = (state_30596[(1)]);
if((state_val_30597 === (7))){
var inst_30578 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30600_32920 = state_30596__$1;
(statearr_30600_32920[(2)] = inst_30578);

(statearr_30600_32920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (1))){
var inst_30572 = cljs.core.seq(coll);
var inst_30573 = inst_30572;
var state_30596__$1 = (function (){var statearr_30603 = state_30596;
(statearr_30603[(7)] = inst_30573);

return statearr_30603;
})();
var statearr_30604_32921 = state_30596__$1;
(statearr_30604_32921[(2)] = null);

(statearr_30604_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (4))){
var inst_30573 = (state_30596[(7)]);
var inst_30576 = cljs.core.first(inst_30573);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30596__$1,(7),ch,inst_30576);
} else {
if((state_val_30597 === (13))){
var inst_30590 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30608_32922 = state_30596__$1;
(statearr_30608_32922[(2)] = inst_30590);

(statearr_30608_32922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (6))){
var inst_30581 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
if(cljs.core.truth_(inst_30581)){
var statearr_30609_32923 = state_30596__$1;
(statearr_30609_32923[(1)] = (8));

} else {
var statearr_30610_32924 = state_30596__$1;
(statearr_30610_32924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (3))){
var inst_30594 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30596__$1,inst_30594);
} else {
if((state_val_30597 === (12))){
var state_30596__$1 = state_30596;
var statearr_30616_32931 = state_30596__$1;
(statearr_30616_32931[(2)] = null);

(statearr_30616_32931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (2))){
var inst_30573 = (state_30596[(7)]);
var state_30596__$1 = state_30596;
if(cljs.core.truth_(inst_30573)){
var statearr_30619_32932 = state_30596__$1;
(statearr_30619_32932[(1)] = (4));

} else {
var statearr_30621_32933 = state_30596__$1;
(statearr_30621_32933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (11))){
var inst_30587 = cljs.core.async.close_BANG_(ch);
var state_30596__$1 = state_30596;
var statearr_30622_32934 = state_30596__$1;
(statearr_30622_32934[(2)] = inst_30587);

(statearr_30622_32934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (9))){
var state_30596__$1 = state_30596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30623_32935 = state_30596__$1;
(statearr_30623_32935[(1)] = (11));

} else {
var statearr_30624_32936 = state_30596__$1;
(statearr_30624_32936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (5))){
var inst_30573 = (state_30596[(7)]);
var state_30596__$1 = state_30596;
var statearr_30625_32938 = state_30596__$1;
(statearr_30625_32938[(2)] = inst_30573);

(statearr_30625_32938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (10))){
var inst_30592 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30626_32939 = state_30596__$1;
(statearr_30626_32939[(2)] = inst_30592);

(statearr_30626_32939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (8))){
var inst_30573 = (state_30596[(7)]);
var inst_30583 = cljs.core.next(inst_30573);
var inst_30573__$1 = inst_30583;
var state_30596__$1 = (function (){var statearr_30628 = state_30596;
(statearr_30628[(7)] = inst_30573__$1);

return statearr_30628;
})();
var statearr_30630_32944 = state_30596__$1;
(statearr_30630_32944[(2)] = null);

(statearr_30630_32944[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_30666 = [null,null,null,null,null,null,null,null];
(statearr_30666[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_30666[(1)] = (1));

return statearr_30666;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_30596){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30596);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e30667){var ex__29612__auto__ = e30667;
var statearr_30668_32953 = state_30596;
(statearr_30668_32953[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30596[(4)]))){
var statearr_30669_32954 = state_30596;
(statearr_30669_32954[(1)] = cljs.core.first((state_30596[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32955 = state_30596;
state_30596 = G__32955;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_30596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_30596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_30671 = f__29716__auto__();
(statearr_30671[(6)] = c__29715__auto__);

return statearr_30671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

return c__29715__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30690 = arguments.length;
switch (G__30690) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32977 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32977(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32986 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32986(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32992 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32992(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32996 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32996(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30716 = (function (ch,cs,meta30717){
this.ch = ch;
this.cs = cs;
this.meta30717 = meta30717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30718,meta30717__$1){
var self__ = this;
var _30718__$1 = this;
return (new cljs.core.async.t_cljs$core$async30716(self__.ch,self__.cs,meta30717__$1));
}));

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30718){
var self__ = this;
var _30718__$1 = this;
return self__.meta30717;
}));

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30717","meta30717",-1154083078,null)], null);
}));

(cljs.core.async.t_cljs$core$async30716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30716");

(cljs.core.async.t_cljs$core$async30716.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30716.
 */
cljs.core.async.__GT_t_cljs$core$async30716 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30716(ch__$1,cs__$1,meta30717){
return (new cljs.core.async.t_cljs$core$async30716(ch__$1,cs__$1,meta30717));
});

}

return (new cljs.core.async.t_cljs$core$async30716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29715__auto___33005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_30880){
var state_val_30881 = (state_30880[(1)]);
if((state_val_30881 === (7))){
var inst_30869 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30882_33006 = state_30880__$1;
(statearr_30882_33006[(2)] = inst_30869);

(statearr_30882_33006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (20))){
var inst_30763 = (state_30880[(7)]);
var inst_30776 = cljs.core.first(inst_30763);
var inst_30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30776,(0),null);
var inst_30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30776,(1),null);
var state_30880__$1 = (function (){var statearr_30883 = state_30880;
(statearr_30883[(8)] = inst_30778);

return statearr_30883;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30884_33008 = state_30880__$1;
(statearr_30884_33008[(1)] = (22));

} else {
var statearr_30887_33012 = state_30880__$1;
(statearr_30887_33012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (27))){
var inst_30813 = (state_30880[(9)]);
var inst_30725 = (state_30880[(10)]);
var inst_30811 = (state_30880[(11)]);
var inst_30818 = (state_30880[(12)]);
var inst_30818__$1 = cljs.core._nth(inst_30811,inst_30813);
var inst_30819 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30818__$1,inst_30725,done);
var state_30880__$1 = (function (){var statearr_30890 = state_30880;
(statearr_30890[(12)] = inst_30818__$1);

return statearr_30890;
})();
if(cljs.core.truth_(inst_30819)){
var statearr_30891_33021 = state_30880__$1;
(statearr_30891_33021[(1)] = (30));

} else {
var statearr_30892_33022 = state_30880__$1;
(statearr_30892_33022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (1))){
var state_30880__$1 = state_30880;
var statearr_30904_33023 = state_30880__$1;
(statearr_30904_33023[(2)] = null);

(statearr_30904_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (24))){
var inst_30763 = (state_30880[(7)]);
var inst_30785 = (state_30880[(2)]);
var inst_30786 = cljs.core.next(inst_30763);
var inst_30734 = inst_30786;
var inst_30735 = null;
var inst_30736 = (0);
var inst_30737 = (0);
var state_30880__$1 = (function (){var statearr_30905 = state_30880;
(statearr_30905[(13)] = inst_30734);

(statearr_30905[(14)] = inst_30735);

(statearr_30905[(15)] = inst_30737);

(statearr_30905[(16)] = inst_30736);

(statearr_30905[(17)] = inst_30785);

return statearr_30905;
})();
var statearr_30906_33024 = state_30880__$1;
(statearr_30906_33024[(2)] = null);

(statearr_30906_33024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (39))){
var state_30880__$1 = state_30880;
var statearr_30921_33030 = state_30880__$1;
(statearr_30921_33030[(2)] = null);

(statearr_30921_33030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (4))){
var inst_30725 = (state_30880[(10)]);
var inst_30725__$1 = (state_30880[(2)]);
var inst_30726 = (inst_30725__$1 == null);
var state_30880__$1 = (function (){var statearr_30925 = state_30880;
(statearr_30925[(10)] = inst_30725__$1);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30726)){
var statearr_30930_33032 = state_30880__$1;
(statearr_30930_33032[(1)] = (5));

} else {
var statearr_30931_33033 = state_30880__$1;
(statearr_30931_33033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (15))){
var inst_30734 = (state_30880[(13)]);
var inst_30735 = (state_30880[(14)]);
var inst_30737 = (state_30880[(15)]);
var inst_30736 = (state_30880[(16)]);
var inst_30759 = (state_30880[(2)]);
var inst_30760 = (inst_30737 + (1));
var tmp30913 = inst_30734;
var tmp30914 = inst_30735;
var tmp30915 = inst_30736;
var inst_30734__$1 = tmp30913;
var inst_30735__$1 = tmp30914;
var inst_30736__$1 = tmp30915;
var inst_30737__$1 = inst_30760;
var state_30880__$1 = (function (){var statearr_30940 = state_30880;
(statearr_30940[(13)] = inst_30734__$1);

(statearr_30940[(14)] = inst_30735__$1);

(statearr_30940[(15)] = inst_30737__$1);

(statearr_30940[(16)] = inst_30736__$1);

(statearr_30940[(18)] = inst_30759);

return statearr_30940;
})();
var statearr_30941_33035 = state_30880__$1;
(statearr_30941_33035[(2)] = null);

(statearr_30941_33035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (21))){
var inst_30789 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30945_33036 = state_30880__$1;
(statearr_30945_33036[(2)] = inst_30789);

(statearr_30945_33036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (31))){
var inst_30818 = (state_30880[(12)]);
var inst_30822 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30818);
var state_30880__$1 = state_30880;
var statearr_30946_33041 = state_30880__$1;
(statearr_30946_33041[(2)] = inst_30822);

(statearr_30946_33041[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (32))){
var inst_30812 = (state_30880[(19)]);
var inst_30810 = (state_30880[(20)]);
var inst_30813 = (state_30880[(9)]);
var inst_30811 = (state_30880[(11)]);
var inst_30824 = (state_30880[(2)]);
var inst_30825 = (inst_30813 + (1));
var tmp30942 = inst_30812;
var tmp30943 = inst_30810;
var tmp30944 = inst_30811;
var inst_30810__$1 = tmp30943;
var inst_30811__$1 = tmp30944;
var inst_30812__$1 = tmp30942;
var inst_30813__$1 = inst_30825;
var state_30880__$1 = (function (){var statearr_30948 = state_30880;
(statearr_30948[(19)] = inst_30812__$1);

(statearr_30948[(21)] = inst_30824);

(statearr_30948[(20)] = inst_30810__$1);

(statearr_30948[(9)] = inst_30813__$1);

(statearr_30948[(11)] = inst_30811__$1);

return statearr_30948;
})();
var statearr_30950_33044 = state_30880__$1;
(statearr_30950_33044[(2)] = null);

(statearr_30950_33044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (40))){
var inst_30837 = (state_30880[(22)]);
var inst_30844 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30837);
var state_30880__$1 = state_30880;
var statearr_30951_33045 = state_30880__$1;
(statearr_30951_33045[(2)] = inst_30844);

(statearr_30951_33045[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (33))){
var inst_30828 = (state_30880[(23)]);
var inst_30830 = cljs.core.chunked_seq_QMARK_(inst_30828);
var state_30880__$1 = state_30880;
if(inst_30830){
var statearr_30952_33046 = state_30880__$1;
(statearr_30952_33046[(1)] = (36));

} else {
var statearr_30953_33047 = state_30880__$1;
(statearr_30953_33047[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (13))){
var inst_30750 = (state_30880[(24)]);
var inst_30753 = cljs.core.async.close_BANG_(inst_30750);
var state_30880__$1 = state_30880;
var statearr_30958_33048 = state_30880__$1;
(statearr_30958_33048[(2)] = inst_30753);

(statearr_30958_33048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (22))){
var inst_30778 = (state_30880[(8)]);
var inst_30782 = cljs.core.async.close_BANG_(inst_30778);
var state_30880__$1 = state_30880;
var statearr_30959_33049 = state_30880__$1;
(statearr_30959_33049[(2)] = inst_30782);

(statearr_30959_33049[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (36))){
var inst_30828 = (state_30880[(23)]);
var inst_30832 = cljs.core.chunk_first(inst_30828);
var inst_30833 = cljs.core.chunk_rest(inst_30828);
var inst_30834 = cljs.core.count(inst_30832);
var inst_30810 = inst_30833;
var inst_30811 = inst_30832;
var inst_30812 = inst_30834;
var inst_30813 = (0);
var state_30880__$1 = (function (){var statearr_30960 = state_30880;
(statearr_30960[(19)] = inst_30812);

(statearr_30960[(20)] = inst_30810);

(statearr_30960[(9)] = inst_30813);

(statearr_30960[(11)] = inst_30811);

return statearr_30960;
})();
var statearr_30961_33050 = state_30880__$1;
(statearr_30961_33050[(2)] = null);

(statearr_30961_33050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (41))){
var inst_30828 = (state_30880[(23)]);
var inst_30846 = (state_30880[(2)]);
var inst_30849 = cljs.core.next(inst_30828);
var inst_30810 = inst_30849;
var inst_30811 = null;
var inst_30812 = (0);
var inst_30813 = (0);
var state_30880__$1 = (function (){var statearr_30962 = state_30880;
(statearr_30962[(19)] = inst_30812);

(statearr_30962[(25)] = inst_30846);

(statearr_30962[(20)] = inst_30810);

(statearr_30962[(9)] = inst_30813);

(statearr_30962[(11)] = inst_30811);

return statearr_30962;
})();
var statearr_30963_33051 = state_30880__$1;
(statearr_30963_33051[(2)] = null);

(statearr_30963_33051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (43))){
var state_30880__$1 = state_30880;
var statearr_30968_33055 = state_30880__$1;
(statearr_30968_33055[(2)] = null);

(statearr_30968_33055[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (29))){
var inst_30857 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30969_33057 = state_30880__$1;
(statearr_30969_33057[(2)] = inst_30857);

(statearr_30969_33057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (44))){
var inst_30866 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30970 = state_30880;
(statearr_30970[(26)] = inst_30866);

return statearr_30970;
})();
var statearr_30971_33058 = state_30880__$1;
(statearr_30971_33058[(2)] = null);

(statearr_30971_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (6))){
var inst_30802 = (state_30880[(27)]);
var inst_30801 = cljs.core.deref(cs);
var inst_30802__$1 = cljs.core.keys(inst_30801);
var inst_30803 = cljs.core.count(inst_30802__$1);
var inst_30804 = cljs.core.reset_BANG_(dctr,inst_30803);
var inst_30809 = cljs.core.seq(inst_30802__$1);
var inst_30810 = inst_30809;
var inst_30811 = null;
var inst_30812 = (0);
var inst_30813 = (0);
var state_30880__$1 = (function (){var statearr_30973 = state_30880;
(statearr_30973[(27)] = inst_30802__$1);

(statearr_30973[(19)] = inst_30812);

(statearr_30973[(20)] = inst_30810);

(statearr_30973[(9)] = inst_30813);

(statearr_30973[(28)] = inst_30804);

(statearr_30973[(11)] = inst_30811);

return statearr_30973;
})();
var statearr_30974_33060 = state_30880__$1;
(statearr_30974_33060[(2)] = null);

(statearr_30974_33060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (28))){
var inst_30810 = (state_30880[(20)]);
var inst_30828 = (state_30880[(23)]);
var inst_30828__$1 = cljs.core.seq(inst_30810);
var state_30880__$1 = (function (){var statearr_30976 = state_30880;
(statearr_30976[(23)] = inst_30828__$1);

return statearr_30976;
})();
if(inst_30828__$1){
var statearr_30977_33062 = state_30880__$1;
(statearr_30977_33062[(1)] = (33));

} else {
var statearr_30978_33063 = state_30880__$1;
(statearr_30978_33063[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (25))){
var inst_30812 = (state_30880[(19)]);
var inst_30813 = (state_30880[(9)]);
var inst_30815 = (inst_30813 < inst_30812);
var inst_30816 = inst_30815;
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30816)){
var statearr_30983_33065 = state_30880__$1;
(statearr_30983_33065[(1)] = (27));

} else {
var statearr_30984_33066 = state_30880__$1;
(statearr_30984_33066[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (34))){
var state_30880__$1 = state_30880;
var statearr_30985_33067 = state_30880__$1;
(statearr_30985_33067[(2)] = null);

(statearr_30985_33067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (17))){
var state_30880__$1 = state_30880;
var statearr_30986_33069 = state_30880__$1;
(statearr_30986_33069[(2)] = null);

(statearr_30986_33069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (3))){
var inst_30871 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30880__$1,inst_30871);
} else {
if((state_val_30881 === (12))){
var inst_30796 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30987_33070 = state_30880__$1;
(statearr_30987_33070[(2)] = inst_30796);

(statearr_30987_33070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (2))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30880__$1,(4),ch);
} else {
if((state_val_30881 === (23))){
var state_30880__$1 = state_30880;
var statearr_30988_33071 = state_30880__$1;
(statearr_30988_33071[(2)] = null);

(statearr_30988_33071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (35))){
var inst_30855 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30989_33072 = state_30880__$1;
(statearr_30989_33072[(2)] = inst_30855);

(statearr_30989_33072[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (19))){
var inst_30763 = (state_30880[(7)]);
var inst_30767 = cljs.core.chunk_first(inst_30763);
var inst_30768 = cljs.core.chunk_rest(inst_30763);
var inst_30769 = cljs.core.count(inst_30767);
var inst_30734 = inst_30768;
var inst_30735 = inst_30767;
var inst_30736 = inst_30769;
var inst_30737 = (0);
var state_30880__$1 = (function (){var statearr_30991 = state_30880;
(statearr_30991[(13)] = inst_30734);

(statearr_30991[(14)] = inst_30735);

(statearr_30991[(15)] = inst_30737);

(statearr_30991[(16)] = inst_30736);

return statearr_30991;
})();
var statearr_30996_33081 = state_30880__$1;
(statearr_30996_33081[(2)] = null);

(statearr_30996_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (11))){
var inst_30734 = (state_30880[(13)]);
var inst_30763 = (state_30880[(7)]);
var inst_30763__$1 = cljs.core.seq(inst_30734);
var state_30880__$1 = (function (){var statearr_30997 = state_30880;
(statearr_30997[(7)] = inst_30763__$1);

return statearr_30997;
})();
if(inst_30763__$1){
var statearr_30998_33082 = state_30880__$1;
(statearr_30998_33082[(1)] = (16));

} else {
var statearr_30999_33083 = state_30880__$1;
(statearr_30999_33083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (9))){
var inst_30798 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_31000_33085 = state_30880__$1;
(statearr_31000_33085[(2)] = inst_30798);

(statearr_31000_33085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (5))){
var inst_30732 = cljs.core.deref(cs);
var inst_30733 = cljs.core.seq(inst_30732);
var inst_30734 = inst_30733;
var inst_30735 = null;
var inst_30736 = (0);
var inst_30737 = (0);
var state_30880__$1 = (function (){var statearr_31004 = state_30880;
(statearr_31004[(13)] = inst_30734);

(statearr_31004[(14)] = inst_30735);

(statearr_31004[(15)] = inst_30737);

(statearr_31004[(16)] = inst_30736);

return statearr_31004;
})();
var statearr_31009_33090 = state_30880__$1;
(statearr_31009_33090[(2)] = null);

(statearr_31009_33090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (14))){
var state_30880__$1 = state_30880;
var statearr_31010_33091 = state_30880__$1;
(statearr_31010_33091[(2)] = null);

(statearr_31010_33091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (45))){
var inst_30863 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_31012_33092 = state_30880__$1;
(statearr_31012_33092[(2)] = inst_30863);

(statearr_31012_33092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (26))){
var inst_30802 = (state_30880[(27)]);
var inst_30859 = (state_30880[(2)]);
var inst_30860 = cljs.core.seq(inst_30802);
var state_30880__$1 = (function (){var statearr_31015 = state_30880;
(statearr_31015[(29)] = inst_30859);

return statearr_31015;
})();
if(inst_30860){
var statearr_31022_33093 = state_30880__$1;
(statearr_31022_33093[(1)] = (42));

} else {
var statearr_31023_33094 = state_30880__$1;
(statearr_31023_33094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (16))){
var inst_30763 = (state_30880[(7)]);
var inst_30765 = cljs.core.chunked_seq_QMARK_(inst_30763);
var state_30880__$1 = state_30880;
if(inst_30765){
var statearr_31024_33095 = state_30880__$1;
(statearr_31024_33095[(1)] = (19));

} else {
var statearr_31025_33096 = state_30880__$1;
(statearr_31025_33096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (38))){
var inst_30852 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_31033_33102 = state_30880__$1;
(statearr_31033_33102[(2)] = inst_30852);

(statearr_31033_33102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (30))){
var state_30880__$1 = state_30880;
var statearr_31034_33103 = state_30880__$1;
(statearr_31034_33103[(2)] = null);

(statearr_31034_33103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (10))){
var inst_30735 = (state_30880[(14)]);
var inst_30737 = (state_30880[(15)]);
var inst_30749 = cljs.core._nth(inst_30735,inst_30737);
var inst_30750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30749,(0),null);
var inst_30751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30749,(1),null);
var state_30880__$1 = (function (){var statearr_31036 = state_30880;
(statearr_31036[(24)] = inst_30750);

return statearr_31036;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_31037_33104 = state_30880__$1;
(statearr_31037_33104[(1)] = (13));

} else {
var statearr_31038_33105 = state_30880__$1;
(statearr_31038_33105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (18))){
var inst_30794 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_31039_33106 = state_30880__$1;
(statearr_31039_33106[(2)] = inst_30794);

(statearr_31039_33106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (42))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30880__$1,(45),dchan);
} else {
if((state_val_30881 === (37))){
var inst_30837 = (state_30880[(22)]);
var inst_30828 = (state_30880[(23)]);
var inst_30725 = (state_30880[(10)]);
var inst_30837__$1 = cljs.core.first(inst_30828);
var inst_30841 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30837__$1,inst_30725,done);
var state_30880__$1 = (function (){var statearr_31052 = state_30880;
(statearr_31052[(22)] = inst_30837__$1);

return statearr_31052;
})();
if(cljs.core.truth_(inst_30841)){
var statearr_31053_33135 = state_30880__$1;
(statearr_31053_33135[(1)] = (39));

} else {
var statearr_31054_33136 = state_30880__$1;
(statearr_31054_33136[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (8))){
var inst_30737 = (state_30880[(15)]);
var inst_30736 = (state_30880[(16)]);
var inst_30739 = (inst_30737 < inst_30736);
var inst_30740 = inst_30739;
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30740)){
var statearr_31056_33140 = state_30880__$1;
(statearr_31056_33140[(1)] = (10));

} else {
var statearr_31057_33141 = state_30880__$1;
(statearr_31057_33141[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29609__auto__ = null;
var cljs$core$async$mult_$_state_machine__29609__auto____0 = (function (){
var statearr_31058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31058[(0)] = cljs$core$async$mult_$_state_machine__29609__auto__);

(statearr_31058[(1)] = (1));

return statearr_31058;
});
var cljs$core$async$mult_$_state_machine__29609__auto____1 = (function (state_30880){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_30880);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31059){var ex__29612__auto__ = e31059;
var statearr_31060_33143 = state_30880;
(statearr_31060_33143[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_30880[(4)]))){
var statearr_31061_33144 = state_30880;
(statearr_31061_33144[(1)] = cljs.core.first((state_30880[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33145 = state_30880;
state_30880 = G__33145;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29609__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29609__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29609__auto____0;
cljs$core$async$mult_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29609__auto____1;
return cljs$core$async$mult_$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31062 = f__29716__auto__();
(statearr_31062[(6)] = c__29715__auto___33005);

return statearr_31062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31064 = arguments.length;
switch (G__31064) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33158 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33158(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33161 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33161(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33162 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33162(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33163 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33163(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33164 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33164(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33173 = arguments.length;
var i__4737__auto___33174 = (0);
while(true){
if((i__4737__auto___33174 < len__4736__auto___33173)){
args__4742__auto__.push((arguments[i__4737__auto___33174]));

var G__33177 = (i__4737__auto___33174 + (1));
i__4737__auto___33174 = G__33177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31092){
var map__31094 = p__31092;
var map__31094__$1 = (((((!((map__31094 == null))))?(((((map__31094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31094):map__31094);
var opts = map__31094__$1;
var statearr_31097_33180 = state;
(statearr_31097_33180[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31098_33181 = state;
(statearr_31098_33181[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31099_33182 = state;
(statearr_31099_33182[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31088){
var G__31089 = cljs.core.first(seq31088);
var seq31088__$1 = cljs.core.next(seq31088);
var G__31090 = cljs.core.first(seq31088__$1);
var seq31088__$2 = cljs.core.next(seq31088__$1);
var G__31091 = cljs.core.first(seq31088__$2);
var seq31088__$3 = cljs.core.next(seq31088__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31089,G__31090,G__31091,seq31088__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31109 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31110){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31110 = meta31110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31111,meta31110__$1){
var self__ = this;
var _31111__$1 = this;
return (new cljs.core.async.t_cljs$core$async31109(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31110__$1));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31111){
var self__ = this;
var _31111__$1 = this;
return self__.meta31110;
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31110","meta31110",1790522093,null)], null);
}));

(cljs.core.async.t_cljs$core$async31109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31109");

(cljs.core.async.t_cljs$core$async31109.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31109.
 */
cljs.core.async.__GT_t_cljs$core$async31109 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31109(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31110){
return (new cljs.core.async.t_cljs$core$async31109(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31110));
});

}

return (new cljs.core.async.t_cljs$core$async31109(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29715__auto___33188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31141 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31232_33196 = state_31230__$1;
(statearr_31232_33196[(2)] = inst_31141);

(statearr_31232_33196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (20))){
var inst_31154 = (state_31230[(7)]);
var state_31230__$1 = state_31230;
var statearr_31233_33197 = state_31230__$1;
(statearr_31233_33197[(2)] = inst_31154);

(statearr_31233_33197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (27))){
var state_31230__$1 = state_31230;
var statearr_31234_33202 = state_31230__$1;
(statearr_31234_33202[(2)] = null);

(statearr_31234_33202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (1))){
var inst_31126 = (state_31230[(8)]);
var inst_31126__$1 = calc_state();
var inst_31129 = (inst_31126__$1 == null);
var inst_31130 = cljs.core.not(inst_31129);
var state_31230__$1 = (function (){var statearr_31235 = state_31230;
(statearr_31235[(8)] = inst_31126__$1);

return statearr_31235;
})();
if(inst_31130){
var statearr_31237_33206 = state_31230__$1;
(statearr_31237_33206[(1)] = (2));

} else {
var statearr_31238_33207 = state_31230__$1;
(statearr_31238_33207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (24))){
var inst_31187 = (state_31230[(9)]);
var inst_31201 = (state_31230[(10)]);
var inst_31178 = (state_31230[(11)]);
var inst_31201__$1 = (inst_31178.cljs$core$IFn$_invoke$arity$1 ? inst_31178.cljs$core$IFn$_invoke$arity$1(inst_31187) : inst_31178.call(null,inst_31187));
var state_31230__$1 = (function (){var statearr_31239 = state_31230;
(statearr_31239[(10)] = inst_31201__$1);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31201__$1)){
var statearr_31240_33213 = state_31230__$1;
(statearr_31240_33213[(1)] = (29));

} else {
var statearr_31241_33214 = state_31230__$1;
(statearr_31241_33214[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (4))){
var inst_31144 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31144)){
var statearr_31246_33215 = state_31230__$1;
(statearr_31246_33215[(1)] = (8));

} else {
var statearr_31247_33219 = state_31230__$1;
(statearr_31247_33219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (15))){
var inst_31172 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31172)){
var statearr_31249_33220 = state_31230__$1;
(statearr_31249_33220[(1)] = (19));

} else {
var statearr_31250_33221 = state_31230__$1;
(statearr_31250_33221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (21))){
var inst_31177 = (state_31230[(12)]);
var inst_31177__$1 = (state_31230[(2)]);
var inst_31178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31177__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31177__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31177__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31230__$1 = (function (){var statearr_31255 = state_31230;
(statearr_31255[(12)] = inst_31177__$1);

(statearr_31255[(13)] = inst_31179);

(statearr_31255[(11)] = inst_31178);

return statearr_31255;
})();
return cljs.core.async.ioc_alts_BANG_(state_31230__$1,(22),inst_31180);
} else {
if((state_val_31231 === (31))){
var inst_31212 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31212)){
var statearr_31259_33230 = state_31230__$1;
(statearr_31259_33230[(1)] = (32));

} else {
var statearr_31262_33232 = state_31230__$1;
(statearr_31262_33232[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (32))){
var inst_31186 = (state_31230[(14)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31230__$1,(35),out,inst_31186);
} else {
if((state_val_31231 === (33))){
var inst_31177 = (state_31230[(12)]);
var inst_31154 = inst_31177;
var state_31230__$1 = (function (){var statearr_31264 = state_31230;
(statearr_31264[(7)] = inst_31154);

return statearr_31264;
})();
var statearr_31265_33233 = state_31230__$1;
(statearr_31265_33233[(2)] = null);

(statearr_31265_33233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (13))){
var inst_31154 = (state_31230[(7)]);
var inst_31161 = inst_31154.cljs$lang$protocol_mask$partition0$;
var inst_31162 = (inst_31161 & (64));
var inst_31163 = inst_31154.cljs$core$ISeq$;
var inst_31164 = (cljs.core.PROTOCOL_SENTINEL === inst_31163);
var inst_31165 = ((inst_31162) || (inst_31164));
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31165)){
var statearr_31266_33237 = state_31230__$1;
(statearr_31266_33237[(1)] = (16));

} else {
var statearr_31267_33238 = state_31230__$1;
(statearr_31267_33238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (22))){
var inst_31187 = (state_31230[(9)]);
var inst_31186 = (state_31230[(14)]);
var inst_31185 = (state_31230[(2)]);
var inst_31186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31185,(0),null);
var inst_31187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31185,(1),null);
var inst_31188 = (inst_31186__$1 == null);
var inst_31189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31187__$1,change);
var inst_31190 = ((inst_31188) || (inst_31189));
var state_31230__$1 = (function (){var statearr_31273 = state_31230;
(statearr_31273[(9)] = inst_31187__$1);

(statearr_31273[(14)] = inst_31186__$1);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31190)){
var statearr_31274_33251 = state_31230__$1;
(statearr_31274_33251[(1)] = (23));

} else {
var statearr_31275_33252 = state_31230__$1;
(statearr_31275_33252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (36))){
var inst_31177 = (state_31230[(12)]);
var inst_31154 = inst_31177;
var state_31230__$1 = (function (){var statearr_31277 = state_31230;
(statearr_31277[(7)] = inst_31154);

return statearr_31277;
})();
var statearr_31278_33253 = state_31230__$1;
(statearr_31278_33253[(2)] = null);

(statearr_31278_33253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (29))){
var inst_31201 = (state_31230[(10)]);
var state_31230__$1 = state_31230;
var statearr_31279_33261 = state_31230__$1;
(statearr_31279_33261[(2)] = inst_31201);

(statearr_31279_33261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var state_31230__$1 = state_31230;
var statearr_31280_33264 = state_31230__$1;
(statearr_31280_33264[(2)] = false);

(statearr_31280_33264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (28))){
var inst_31197 = (state_31230[(2)]);
var inst_31198 = calc_state();
var inst_31154 = inst_31198;
var state_31230__$1 = (function (){var statearr_31281 = state_31230;
(statearr_31281[(15)] = inst_31197);

(statearr_31281[(7)] = inst_31154);

return statearr_31281;
})();
var statearr_31282_33268 = state_31230__$1;
(statearr_31282_33268[(2)] = null);

(statearr_31282_33268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (25))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31287_33269 = state_31230__$1;
(statearr_31287_33269[(2)] = inst_31226);

(statearr_31287_33269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (34))){
var inst_31224 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31293_33274 = state_31230__$1;
(statearr_31293_33274[(2)] = inst_31224);

(statearr_31293_33274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (17))){
var state_31230__$1 = state_31230;
var statearr_31296_33275 = state_31230__$1;
(statearr_31296_33275[(2)] = false);

(statearr_31296_33275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (3))){
var state_31230__$1 = state_31230;
var statearr_31305_33276 = state_31230__$1;
(statearr_31305_33276[(2)] = false);

(statearr_31305_33276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (12))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (2))){
var inst_31126 = (state_31230[(8)]);
var inst_31133 = inst_31126.cljs$lang$protocol_mask$partition0$;
var inst_31134 = (inst_31133 & (64));
var inst_31135 = inst_31126.cljs$core$ISeq$;
var inst_31136 = (cljs.core.PROTOCOL_SENTINEL === inst_31135);
var inst_31137 = ((inst_31134) || (inst_31136));
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31137)){
var statearr_31307_33283 = state_31230__$1;
(statearr_31307_33283[(1)] = (5));

} else {
var statearr_31308_33284 = state_31230__$1;
(statearr_31308_33284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (23))){
var inst_31186 = (state_31230[(14)]);
var inst_31192 = (inst_31186 == null);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31192)){
var statearr_31309_33285 = state_31230__$1;
(statearr_31309_33285[(1)] = (26));

} else {
var statearr_31310_33286 = state_31230__$1;
(statearr_31310_33286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (35))){
var inst_31215 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31215)){
var statearr_31311_33287 = state_31230__$1;
(statearr_31311_33287[(1)] = (36));

} else {
var statearr_31312_33288 = state_31230__$1;
(statearr_31312_33288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (19))){
var inst_31154 = (state_31230[(7)]);
var inst_31174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31154);
var state_31230__$1 = state_31230;
var statearr_31313_33289 = state_31230__$1;
(statearr_31313_33289[(2)] = inst_31174);

(statearr_31313_33289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (11))){
var inst_31154 = (state_31230[(7)]);
var inst_31158 = (inst_31154 == null);
var inst_31159 = cljs.core.not(inst_31158);
var state_31230__$1 = state_31230;
if(inst_31159){
var statearr_31315_33290 = state_31230__$1;
(statearr_31315_33290[(1)] = (13));

} else {
var statearr_31318_33291 = state_31230__$1;
(statearr_31318_33291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (9))){
var inst_31126 = (state_31230[(8)]);
var state_31230__$1 = state_31230;
var statearr_31321_33292 = state_31230__$1;
(statearr_31321_33292[(2)] = inst_31126);

(statearr_31321_33292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var state_31230__$1 = state_31230;
var statearr_31323_33293 = state_31230__$1;
(statearr_31323_33293[(2)] = true);

(statearr_31323_33293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (14))){
var state_31230__$1 = state_31230;
var statearr_31326_33294 = state_31230__$1;
(statearr_31326_33294[(2)] = false);

(statearr_31326_33294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (26))){
var inst_31187 = (state_31230[(9)]);
var inst_31194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31187);
var state_31230__$1 = state_31230;
var statearr_31327_33301 = state_31230__$1;
(statearr_31327_33301[(2)] = inst_31194);

(statearr_31327_33301[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (16))){
var state_31230__$1 = state_31230;
var statearr_31329_33302 = state_31230__$1;
(statearr_31329_33302[(2)] = true);

(statearr_31329_33302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (38))){
var inst_31220 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31339_33303 = state_31230__$1;
(statearr_31339_33303[(2)] = inst_31220);

(statearr_31339_33303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (30))){
var inst_31187 = (state_31230[(9)]);
var inst_31179 = (state_31230[(13)]);
var inst_31178 = (state_31230[(11)]);
var inst_31207 = cljs.core.empty_QMARK_(inst_31178);
var inst_31208 = (inst_31179.cljs$core$IFn$_invoke$arity$1 ? inst_31179.cljs$core$IFn$_invoke$arity$1(inst_31187) : inst_31179.call(null,inst_31187));
var inst_31209 = cljs.core.not(inst_31208);
var inst_31210 = ((inst_31207) && (inst_31209));
var state_31230__$1 = state_31230;
var statearr_31344_33304 = state_31230__$1;
(statearr_31344_33304[(2)] = inst_31210);

(statearr_31344_33304[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (10))){
var inst_31126 = (state_31230[(8)]);
var inst_31150 = (state_31230[(2)]);
var inst_31151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31150,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31150,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31150,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31154 = inst_31126;
var state_31230__$1 = (function (){var statearr_31345 = state_31230;
(statearr_31345[(16)] = inst_31153);

(statearr_31345[(17)] = inst_31151);

(statearr_31345[(18)] = inst_31152);

(statearr_31345[(7)] = inst_31154);

return statearr_31345;
})();
var statearr_31346_33305 = state_31230__$1;
(statearr_31346_33305[(2)] = null);

(statearr_31346_33305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (18))){
var inst_31169 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31347_33306 = state_31230__$1;
(statearr_31347_33306[(2)] = inst_31169);

(statearr_31347_33306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (37))){
var state_31230__$1 = state_31230;
var statearr_31351_33307 = state_31230__$1;
(statearr_31351_33307[(2)] = null);

(statearr_31351_33307[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (8))){
var inst_31126 = (state_31230[(8)]);
var inst_31146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31126);
var state_31230__$1 = state_31230;
var statearr_31356_33308 = state_31230__$1;
(statearr_31356_33308[(2)] = inst_31146);

(statearr_31356_33308[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29609__auto__ = null;
var cljs$core$async$mix_$_state_machine__29609__auto____0 = (function (){
var statearr_31358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31358[(0)] = cljs$core$async$mix_$_state_machine__29609__auto__);

(statearr_31358[(1)] = (1));

return statearr_31358;
});
var cljs$core$async$mix_$_state_machine__29609__auto____1 = (function (state_31230){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31365){var ex__29612__auto__ = e31365;
var statearr_31366_33310 = state_31230;
(statearr_31366_33310[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_31230[(4)]))){
var statearr_31367_33315 = state_31230;
(statearr_31367_33315[(1)] = cljs.core.first((state_31230[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33316 = state_31230;
state_31230 = G__33316;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29609__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29609__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29609__auto____0;
cljs$core$async$mix_$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29609__auto____1;
return cljs$core$async$mix_$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31368 = f__29716__auto__();
(statearr_31368[(6)] = c__29715__auto___33188);

return statearr_31368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33320 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33320(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33323 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33323(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33326 = (function() {
var G__33327 = null;
var G__33327__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33327__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33327 = function(p,v){
switch(arguments.length){
case 1:
return G__33327__1.call(this,p);
case 2:
return G__33327__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33327.cljs$core$IFn$_invoke$arity$1 = G__33327__1;
G__33327.cljs$core$IFn$_invoke$arity$2 = G__33327__2;
return G__33327;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31405 = arguments.length;
switch (G__31405) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33326(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33326(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31415 = arguments.length;
switch (G__31415) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31413_SHARP_){
if(cljs.core.truth_((p1__31413_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31413_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31413_SHARP_.call(null,topic)))){
return p1__31413_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31413_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31425 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31426){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31426 = meta31426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31427,meta31426__$1){
var self__ = this;
var _31427__$1 = this;
return (new cljs.core.async.t_cljs$core$async31425(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31426__$1));
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31427){
var self__ = this;
var _31427__$1 = this;
return self__.meta31426;
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31426","meta31426",2094766588,null)], null);
}));

(cljs.core.async.t_cljs$core$async31425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31425");

(cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31425.
 */
cljs.core.async.__GT_t_cljs$core$async31425 = (function cljs$core$async$__GT_t_cljs$core$async31425(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31426){
return (new cljs.core.async.t_cljs$core$async31425(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31426));
});

}

return (new cljs.core.async.t_cljs$core$async31425(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29715__auto___33356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_31512){
var state_val_31513 = (state_31512[(1)]);
if((state_val_31513 === (7))){
var inst_31508 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31518_33357 = state_31512__$1;
(statearr_31518_33357[(2)] = inst_31508);

(statearr_31518_33357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (20))){
var state_31512__$1 = state_31512;
var statearr_31519_33359 = state_31512__$1;
(statearr_31519_33359[(2)] = null);

(statearr_31519_33359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (1))){
var state_31512__$1 = state_31512;
var statearr_31520_33360 = state_31512__$1;
(statearr_31520_33360[(2)] = null);

(statearr_31520_33360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (24))){
var inst_31491 = (state_31512[(7)]);
var inst_31500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31491);
var state_31512__$1 = state_31512;
var statearr_31522_33362 = state_31512__$1;
(statearr_31522_33362[(2)] = inst_31500);

(statearr_31522_33362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (4))){
var inst_31443 = (state_31512[(8)]);
var inst_31443__$1 = (state_31512[(2)]);
var inst_31444 = (inst_31443__$1 == null);
var state_31512__$1 = (function (){var statearr_31523 = state_31512;
(statearr_31523[(8)] = inst_31443__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31444)){
var statearr_31524_33363 = state_31512__$1;
(statearr_31524_33363[(1)] = (5));

} else {
var statearr_31525_33364 = state_31512__$1;
(statearr_31525_33364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (15))){
var inst_31485 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31526_33365 = state_31512__$1;
(statearr_31526_33365[(2)] = inst_31485);

(statearr_31526_33365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (21))){
var inst_31505 = (state_31512[(2)]);
var state_31512__$1 = (function (){var statearr_31527 = state_31512;
(statearr_31527[(9)] = inst_31505);

return statearr_31527;
})();
var statearr_31528_33366 = state_31512__$1;
(statearr_31528_33366[(2)] = null);

(statearr_31528_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (13))){
var inst_31467 = (state_31512[(10)]);
var inst_31469 = cljs.core.chunked_seq_QMARK_(inst_31467);
var state_31512__$1 = state_31512;
if(inst_31469){
var statearr_31533_33368 = state_31512__$1;
(statearr_31533_33368[(1)] = (16));

} else {
var statearr_31534_33369 = state_31512__$1;
(statearr_31534_33369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (22))){
var inst_31497 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
if(cljs.core.truth_(inst_31497)){
var statearr_31540_33371 = state_31512__$1;
(statearr_31540_33371[(1)] = (23));

} else {
var statearr_31541_33372 = state_31512__$1;
(statearr_31541_33372[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (6))){
var inst_31491 = (state_31512[(7)]);
var inst_31493 = (state_31512[(11)]);
var inst_31443 = (state_31512[(8)]);
var inst_31491__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31443) : topic_fn.call(null,inst_31443));
var inst_31492 = cljs.core.deref(mults);
var inst_31493__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31492,inst_31491__$1);
var state_31512__$1 = (function (){var statearr_31542 = state_31512;
(statearr_31542[(7)] = inst_31491__$1);

(statearr_31542[(11)] = inst_31493__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31493__$1)){
var statearr_31543_33374 = state_31512__$1;
(statearr_31543_33374[(1)] = (19));

} else {
var statearr_31544_33375 = state_31512__$1;
(statearr_31544_33375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (25))){
var inst_31502 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31545_33376 = state_31512__$1;
(statearr_31545_33376[(2)] = inst_31502);

(statearr_31545_33376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (17))){
var inst_31467 = (state_31512[(10)]);
var inst_31476 = cljs.core.first(inst_31467);
var inst_31477 = cljs.core.async.muxch_STAR_(inst_31476);
var inst_31478 = cljs.core.async.close_BANG_(inst_31477);
var inst_31479 = cljs.core.next(inst_31467);
var inst_31453 = inst_31479;
var inst_31454 = null;
var inst_31455 = (0);
var inst_31456 = (0);
var state_31512__$1 = (function (){var statearr_31546 = state_31512;
(statearr_31546[(12)] = inst_31453);

(statearr_31546[(13)] = inst_31456);

(statearr_31546[(14)] = inst_31478);

(statearr_31546[(15)] = inst_31454);

(statearr_31546[(16)] = inst_31455);

return statearr_31546;
})();
var statearr_31547_33378 = state_31512__$1;
(statearr_31547_33378[(2)] = null);

(statearr_31547_33378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (3))){
var inst_31510 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31512__$1,inst_31510);
} else {
if((state_val_31513 === (12))){
var inst_31487 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31552_33380 = state_31512__$1;
(statearr_31552_33380[(2)] = inst_31487);

(statearr_31552_33380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (2))){
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31512__$1,(4),ch);
} else {
if((state_val_31513 === (23))){
var state_31512__$1 = state_31512;
var statearr_31554_33381 = state_31512__$1;
(statearr_31554_33381[(2)] = null);

(statearr_31554_33381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (19))){
var inst_31493 = (state_31512[(11)]);
var inst_31443 = (state_31512[(8)]);
var inst_31495 = cljs.core.async.muxch_STAR_(inst_31493);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31512__$1,(22),inst_31495,inst_31443);
} else {
if((state_val_31513 === (11))){
var inst_31453 = (state_31512[(12)]);
var inst_31467 = (state_31512[(10)]);
var inst_31467__$1 = cljs.core.seq(inst_31453);
var state_31512__$1 = (function (){var statearr_31563 = state_31512;
(statearr_31563[(10)] = inst_31467__$1);

return statearr_31563;
})();
if(inst_31467__$1){
var statearr_31564_33385 = state_31512__$1;
(statearr_31564_33385[(1)] = (13));

} else {
var statearr_31565_33386 = state_31512__$1;
(statearr_31565_33386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (9))){
var inst_31489 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31566_33388 = state_31512__$1;
(statearr_31566_33388[(2)] = inst_31489);

(statearr_31566_33388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (5))){
var inst_31450 = cljs.core.deref(mults);
var inst_31451 = cljs.core.vals(inst_31450);
var inst_31452 = cljs.core.seq(inst_31451);
var inst_31453 = inst_31452;
var inst_31454 = null;
var inst_31455 = (0);
var inst_31456 = (0);
var state_31512__$1 = (function (){var statearr_31571 = state_31512;
(statearr_31571[(12)] = inst_31453);

(statearr_31571[(13)] = inst_31456);

(statearr_31571[(15)] = inst_31454);

(statearr_31571[(16)] = inst_31455);

return statearr_31571;
})();
var statearr_31573_33393 = state_31512__$1;
(statearr_31573_33393[(2)] = null);

(statearr_31573_33393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (14))){
var state_31512__$1 = state_31512;
var statearr_31577_33395 = state_31512__$1;
(statearr_31577_33395[(2)] = null);

(statearr_31577_33395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (16))){
var inst_31467 = (state_31512[(10)]);
var inst_31471 = cljs.core.chunk_first(inst_31467);
var inst_31472 = cljs.core.chunk_rest(inst_31467);
var inst_31473 = cljs.core.count(inst_31471);
var inst_31453 = inst_31472;
var inst_31454 = inst_31471;
var inst_31455 = inst_31473;
var inst_31456 = (0);
var state_31512__$1 = (function (){var statearr_31580 = state_31512;
(statearr_31580[(12)] = inst_31453);

(statearr_31580[(13)] = inst_31456);

(statearr_31580[(15)] = inst_31454);

(statearr_31580[(16)] = inst_31455);

return statearr_31580;
})();
var statearr_31582_33405 = state_31512__$1;
(statearr_31582_33405[(2)] = null);

(statearr_31582_33405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (10))){
var inst_31453 = (state_31512[(12)]);
var inst_31456 = (state_31512[(13)]);
var inst_31454 = (state_31512[(15)]);
var inst_31455 = (state_31512[(16)]);
var inst_31461 = cljs.core._nth(inst_31454,inst_31456);
var inst_31462 = cljs.core.async.muxch_STAR_(inst_31461);
var inst_31463 = cljs.core.async.close_BANG_(inst_31462);
var inst_31464 = (inst_31456 + (1));
var tmp31574 = inst_31453;
var tmp31575 = inst_31454;
var tmp31576 = inst_31455;
var inst_31453__$1 = tmp31574;
var inst_31454__$1 = tmp31575;
var inst_31455__$1 = tmp31576;
var inst_31456__$1 = inst_31464;
var state_31512__$1 = (function (){var statearr_31589 = state_31512;
(statearr_31589[(12)] = inst_31453__$1);

(statearr_31589[(13)] = inst_31456__$1);

(statearr_31589[(15)] = inst_31454__$1);

(statearr_31589[(17)] = inst_31463);

(statearr_31589[(16)] = inst_31455__$1);

return statearr_31589;
})();
var statearr_31591_33413 = state_31512__$1;
(statearr_31591_33413[(2)] = null);

(statearr_31591_33413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (18))){
var inst_31482 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31592_33414 = state_31512__$1;
(statearr_31592_33414[(2)] = inst_31482);

(statearr_31592_33414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (8))){
var inst_31456 = (state_31512[(13)]);
var inst_31455 = (state_31512[(16)]);
var inst_31458 = (inst_31456 < inst_31455);
var inst_31459 = inst_31458;
var state_31512__$1 = state_31512;
if(cljs.core.truth_(inst_31459)){
var statearr_31593_33418 = state_31512__$1;
(statearr_31593_33418[(1)] = (10));

} else {
var statearr_31594_33419 = state_31512__$1;
(statearr_31594_33419[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_31596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31596[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_31596[(1)] = (1));

return statearr_31596;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_31512){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_31512);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31597){var ex__29612__auto__ = e31597;
var statearr_31598_33426 = state_31512;
(statearr_31598_33426[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_31512[(4)]))){
var statearr_31599_33432 = state_31512;
(statearr_31599_33432[(1)] = cljs.core.first((state_31512[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_31512;
state_31512 = G__33433;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31603 = f__29716__auto__();
(statearr_31603[(6)] = c__29715__auto___33356);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31605 = arguments.length;
switch (G__31605) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31611 = arguments.length;
switch (G__31611) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31613 = arguments.length;
switch (G__31613) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29715__auto___33475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_31666){
var state_val_31667 = (state_31666[(1)]);
if((state_val_31667 === (7))){
var state_31666__$1 = state_31666;
var statearr_31668_33477 = state_31666__$1;
(statearr_31668_33477[(2)] = null);

(statearr_31668_33477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (1))){
var state_31666__$1 = state_31666;
var statearr_31669_33484 = state_31666__$1;
(statearr_31669_33484[(2)] = null);

(statearr_31669_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (4))){
var inst_31618 = (state_31666[(7)]);
var inst_31617 = (state_31666[(8)]);
var inst_31620 = (inst_31618 < inst_31617);
var state_31666__$1 = state_31666;
if(cljs.core.truth_(inst_31620)){
var statearr_31670_33490 = state_31666__$1;
(statearr_31670_33490[(1)] = (6));

} else {
var statearr_31671_33492 = state_31666__$1;
(statearr_31671_33492[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (15))){
var inst_31650 = (state_31666[(9)]);
var inst_31655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31650);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31666__$1,(17),out,inst_31655);
} else {
if((state_val_31667 === (13))){
var inst_31650 = (state_31666[(9)]);
var inst_31650__$1 = (state_31666[(2)]);
var inst_31651 = cljs.core.some(cljs.core.nil_QMARK_,inst_31650__$1);
var state_31666__$1 = (function (){var statearr_31676 = state_31666;
(statearr_31676[(9)] = inst_31650__$1);

return statearr_31676;
})();
if(cljs.core.truth_(inst_31651)){
var statearr_31677_33509 = state_31666__$1;
(statearr_31677_33509[(1)] = (14));

} else {
var statearr_31678_33512 = state_31666__$1;
(statearr_31678_33512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (6))){
var state_31666__$1 = state_31666;
var statearr_31679_33518 = state_31666__$1;
(statearr_31679_33518[(2)] = null);

(statearr_31679_33518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (17))){
var inst_31658 = (state_31666[(2)]);
var state_31666__$1 = (function (){var statearr_31687 = state_31666;
(statearr_31687[(10)] = inst_31658);

return statearr_31687;
})();
var statearr_31692_33528 = state_31666__$1;
(statearr_31692_33528[(2)] = null);

(statearr_31692_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (3))){
var inst_31663 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31666__$1,inst_31663);
} else {
if((state_val_31667 === (12))){
var _ = (function (){var statearr_31693 = state_31666;
(statearr_31693[(4)] = cljs.core.rest((state_31666[(4)])));

return statearr_31693;
})();
var state_31666__$1 = state_31666;
var ex31686 = (state_31666__$1[(2)]);
var statearr_31694_33544 = state_31666__$1;
(statearr_31694_33544[(5)] = ex31686);


if((ex31686 instanceof Object)){
var statearr_31698_33547 = state_31666__$1;
(statearr_31698_33547[(1)] = (11));

(statearr_31698_33547[(5)] = null);

} else {
throw ex31686;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (2))){
var inst_31616 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31617 = cnt;
var inst_31618 = (0);
var state_31666__$1 = (function (){var statearr_31702 = state_31666;
(statearr_31702[(7)] = inst_31618);

(statearr_31702[(11)] = inst_31616);

(statearr_31702[(8)] = inst_31617);

return statearr_31702;
})();
var statearr_31703_33557 = state_31666__$1;
(statearr_31703_33557[(2)] = null);

(statearr_31703_33557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (11))){
var inst_31626 = (state_31666[(2)]);
var inst_31627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31666__$1 = (function (){var statearr_31708 = state_31666;
(statearr_31708[(12)] = inst_31626);

return statearr_31708;
})();
var statearr_31709_33569 = state_31666__$1;
(statearr_31709_33569[(2)] = inst_31627);

(statearr_31709_33569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (9))){
var inst_31618 = (state_31666[(7)]);
var _ = (function (){var statearr_31710 = state_31666;
(statearr_31710[(4)] = cljs.core.cons((12),(state_31666[(4)])));

return statearr_31710;
})();
var inst_31634 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31618) : chs__$1.call(null,inst_31618));
var inst_31636 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31618) : done.call(null,inst_31618));
var inst_31637 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31634,inst_31636);
var ___$1 = (function (){var statearr_31711 = state_31666;
(statearr_31711[(4)] = cljs.core.rest((state_31666[(4)])));

return statearr_31711;
})();
var state_31666__$1 = state_31666;
var statearr_31712_33587 = state_31666__$1;
(statearr_31712_33587[(2)] = inst_31637);

(statearr_31712_33587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (5))){
var inst_31648 = (state_31666[(2)]);
var state_31666__$1 = (function (){var statearr_31713 = state_31666;
(statearr_31713[(13)] = inst_31648);

return statearr_31713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31666__$1,(13),dchan);
} else {
if((state_val_31667 === (14))){
var inst_31653 = cljs.core.async.close_BANG_(out);
var state_31666__$1 = state_31666;
var statearr_31714_33588 = state_31666__$1;
(statearr_31714_33588[(2)] = inst_31653);

(statearr_31714_33588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (16))){
var inst_31661 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31715_33589 = state_31666__$1;
(statearr_31715_33589[(2)] = inst_31661);

(statearr_31715_33589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (10))){
var inst_31618 = (state_31666[(7)]);
var inst_31640 = (state_31666[(2)]);
var inst_31642 = (inst_31618 + (1));
var inst_31618__$1 = inst_31642;
var state_31666__$1 = (function (){var statearr_31716 = state_31666;
(statearr_31716[(7)] = inst_31618__$1);

(statearr_31716[(14)] = inst_31640);

return statearr_31716;
})();
var statearr_31717_33598 = state_31666__$1;
(statearr_31717_33598[(2)] = null);

(statearr_31717_33598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (8))){
var inst_31646 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31718_33603 = state_31666__$1;
(statearr_31718_33603[(2)] = inst_31646);

(statearr_31718_33603[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_31666){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_31666);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31723){var ex__29612__auto__ = e31723;
var statearr_31724_33608 = state_31666;
(statearr_31724_33608[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_31666[(4)]))){
var statearr_31726_33609 = state_31666;
(statearr_31726_33609[(1)] = cljs.core.first((state_31666[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33610 = state_31666;
state_31666 = G__33610;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_31666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_31666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31727 = f__29716__auto__();
(statearr_31727[(6)] = c__29715__auto___33475);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31731 = arguments.length;
switch (G__31731) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___33617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_31763){
var state_val_31764 = (state_31763[(1)]);
if((state_val_31764 === (7))){
var inst_31742 = (state_31763[(7)]);
var inst_31743 = (state_31763[(8)]);
var inst_31742__$1 = (state_31763[(2)]);
var inst_31743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31742__$1,(0),null);
var inst_31744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31742__$1,(1),null);
var inst_31745 = (inst_31743__$1 == null);
var state_31763__$1 = (function (){var statearr_31766 = state_31763;
(statearr_31766[(7)] = inst_31742__$1);

(statearr_31766[(9)] = inst_31744);

(statearr_31766[(8)] = inst_31743__$1);

return statearr_31766;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31767_33630 = state_31763__$1;
(statearr_31767_33630[(1)] = (8));

} else {
var statearr_31768_33631 = state_31763__$1;
(statearr_31768_33631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (1))){
var inst_31732 = cljs.core.vec(chs);
var inst_31733 = inst_31732;
var state_31763__$1 = (function (){var statearr_31771 = state_31763;
(statearr_31771[(10)] = inst_31733);

return statearr_31771;
})();
var statearr_31773_33632 = state_31763__$1;
(statearr_31773_33632[(2)] = null);

(statearr_31773_33632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (4))){
var inst_31733 = (state_31763[(10)]);
var state_31763__$1 = state_31763;
return cljs.core.async.ioc_alts_BANG_(state_31763__$1,(7),inst_31733);
} else {
if((state_val_31764 === (6))){
var inst_31759 = (state_31763[(2)]);
var state_31763__$1 = state_31763;
var statearr_31775_33633 = state_31763__$1;
(statearr_31775_33633[(2)] = inst_31759);

(statearr_31775_33633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (3))){
var inst_31761 = (state_31763[(2)]);
var state_31763__$1 = state_31763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31763__$1,inst_31761);
} else {
if((state_val_31764 === (2))){
var inst_31733 = (state_31763[(10)]);
var inst_31735 = cljs.core.count(inst_31733);
var inst_31736 = (inst_31735 > (0));
var state_31763__$1 = state_31763;
if(cljs.core.truth_(inst_31736)){
var statearr_31777_33642 = state_31763__$1;
(statearr_31777_33642[(1)] = (4));

} else {
var statearr_31778_33643 = state_31763__$1;
(statearr_31778_33643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (11))){
var inst_31733 = (state_31763[(10)]);
var inst_31752 = (state_31763[(2)]);
var tmp31776 = inst_31733;
var inst_31733__$1 = tmp31776;
var state_31763__$1 = (function (){var statearr_31779 = state_31763;
(statearr_31779[(10)] = inst_31733__$1);

(statearr_31779[(11)] = inst_31752);

return statearr_31779;
})();
var statearr_31782_33653 = state_31763__$1;
(statearr_31782_33653[(2)] = null);

(statearr_31782_33653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (9))){
var inst_31743 = (state_31763[(8)]);
var state_31763__$1 = state_31763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31763__$1,(11),out,inst_31743);
} else {
if((state_val_31764 === (5))){
var inst_31757 = cljs.core.async.close_BANG_(out);
var state_31763__$1 = state_31763;
var statearr_31785_33661 = state_31763__$1;
(statearr_31785_33661[(2)] = inst_31757);

(statearr_31785_33661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (10))){
var inst_31755 = (state_31763[(2)]);
var state_31763__$1 = state_31763;
var statearr_31787_33667 = state_31763__$1;
(statearr_31787_33667[(2)] = inst_31755);

(statearr_31787_33667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31764 === (8))){
var inst_31733 = (state_31763[(10)]);
var inst_31742 = (state_31763[(7)]);
var inst_31744 = (state_31763[(9)]);
var inst_31743 = (state_31763[(8)]);
var inst_31747 = (function (){var cs = inst_31733;
var vec__31738 = inst_31742;
var v = inst_31743;
var c = inst_31744;
return (function (p1__31729_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31729_SHARP_);
});
})();
var inst_31748 = cljs.core.filterv(inst_31747,inst_31733);
var inst_31733__$1 = inst_31748;
var state_31763__$1 = (function (){var statearr_31790 = state_31763;
(statearr_31790[(10)] = inst_31733__$1);

return statearr_31790;
})();
var statearr_31792_33694 = state_31763__$1;
(statearr_31792_33694[(2)] = null);

(statearr_31792_33694[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_31795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31795[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_31795[(1)] = (1));

return statearr_31795;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_31763){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_31763);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31796){var ex__29612__auto__ = e31796;
var statearr_31798_33695 = state_31763;
(statearr_31798_33695[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_31763[(4)]))){
var statearr_31801_33696 = state_31763;
(statearr_31801_33696[(1)] = cljs.core.first((state_31763[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33697 = state_31763;
state_31763 = G__33697;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_31763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_31763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31807 = f__29716__auto__();
(statearr_31807[(6)] = c__29715__auto___33617);

return statearr_31807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31818 = arguments.length;
switch (G__31818) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___33709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_31857){
var state_val_31858 = (state_31857[(1)]);
if((state_val_31858 === (7))){
var inst_31837 = (state_31857[(7)]);
var inst_31837__$1 = (state_31857[(2)]);
var inst_31838 = (inst_31837__$1 == null);
var inst_31839 = cljs.core.not(inst_31838);
var state_31857__$1 = (function (){var statearr_31861 = state_31857;
(statearr_31861[(7)] = inst_31837__$1);

return statearr_31861;
})();
if(inst_31839){
var statearr_31864_33710 = state_31857__$1;
(statearr_31864_33710[(1)] = (8));

} else {
var statearr_31865_33711 = state_31857__$1;
(statearr_31865_33711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (1))){
var inst_31832 = (0);
var state_31857__$1 = (function (){var statearr_31868 = state_31857;
(statearr_31868[(8)] = inst_31832);

return statearr_31868;
})();
var statearr_31869_33716 = state_31857__$1;
(statearr_31869_33716[(2)] = null);

(statearr_31869_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (4))){
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31857__$1,(7),ch);
} else {
if((state_val_31858 === (6))){
var inst_31851 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31872_33725 = state_31857__$1;
(statearr_31872_33725[(2)] = inst_31851);

(statearr_31872_33725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (3))){
var inst_31853 = (state_31857[(2)]);
var inst_31854 = cljs.core.async.close_BANG_(out);
var state_31857__$1 = (function (){var statearr_31875 = state_31857;
(statearr_31875[(9)] = inst_31853);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31857__$1,inst_31854);
} else {
if((state_val_31858 === (2))){
var inst_31832 = (state_31857[(8)]);
var inst_31834 = (inst_31832 < n);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31834)){
var statearr_31878_33740 = state_31857__$1;
(statearr_31878_33740[(1)] = (4));

} else {
var statearr_31881_33741 = state_31857__$1;
(statearr_31881_33741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (11))){
var inst_31832 = (state_31857[(8)]);
var inst_31843 = (state_31857[(2)]);
var inst_31844 = (inst_31832 + (1));
var inst_31832__$1 = inst_31844;
var state_31857__$1 = (function (){var statearr_31887 = state_31857;
(statearr_31887[(8)] = inst_31832__$1);

(statearr_31887[(10)] = inst_31843);

return statearr_31887;
})();
var statearr_31891_33745 = state_31857__$1;
(statearr_31891_33745[(2)] = null);

(statearr_31891_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (9))){
var state_31857__$1 = state_31857;
var statearr_31896_33746 = state_31857__$1;
(statearr_31896_33746[(2)] = null);

(statearr_31896_33746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (5))){
var state_31857__$1 = state_31857;
var statearr_31898_33747 = state_31857__$1;
(statearr_31898_33747[(2)] = null);

(statearr_31898_33747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (10))){
var inst_31848 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31902_33748 = state_31857__$1;
(statearr_31902_33748[(2)] = inst_31848);

(statearr_31902_33748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (8))){
var inst_31837 = (state_31857[(7)]);
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31857__$1,(11),out,inst_31837);
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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_31907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31907[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_31907[(1)] = (1));

return statearr_31907;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_31857){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_31857);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e31908){var ex__29612__auto__ = e31908;
var statearr_31910_33757 = state_31857;
(statearr_31910_33757[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_31857[(4)]))){
var statearr_31912_33759 = state_31857;
(statearr_31912_33759[(1)] = cljs.core.first((state_31857[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33763 = state_31857;
state_31857 = G__33763;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_31857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_31857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_31914 = f__29716__auto__();
(statearr_31914[(6)] = c__29715__auto___33709);

return statearr_31914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31927 = (function (f,ch,meta31928){
this.f = f;
this.ch = ch;
this.meta31928 = meta31928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31929,meta31928__$1){
var self__ = this;
var _31929__$1 = this;
return (new cljs.core.async.t_cljs$core$async31927(self__.f,self__.ch,meta31928__$1));
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31929){
var self__ = this;
var _31929__$1 = this;
return self__.meta31928;
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31943 = (function (f,ch,meta31928,_,fn1,meta31944){
this.f = f;
this.ch = ch;
this.meta31928 = meta31928;
this._ = _;
this.fn1 = fn1;
this.meta31944 = meta31944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31945,meta31944__$1){
var self__ = this;
var _31945__$1 = this;
return (new cljs.core.async.t_cljs$core$async31943(self__.f,self__.ch,self__.meta31928,self__._,self__.fn1,meta31944__$1));
}));

(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31945){
var self__ = this;
var _31945__$1 = this;
return self__.meta31944;
}));

(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31922_SHARP_){
var G__31956 = (((p1__31922_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31922_SHARP_) : self__.f.call(null,p1__31922_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31956) : f1.call(null,G__31956));
});
}));

(cljs.core.async.t_cljs$core$async31943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31928","meta31928",1651569455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31927","cljs.core.async/t_cljs$core$async31927",-1107956746,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31944","meta31944",697356050,null)], null);
}));

(cljs.core.async.t_cljs$core$async31943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31943");

(cljs.core.async.t_cljs$core$async31943.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31943.
 */
cljs.core.async.__GT_t_cljs$core$async31943 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31943(f__$1,ch__$1,meta31928__$1,___$2,fn1__$1,meta31944){
return (new cljs.core.async.t_cljs$core$async31943(f__$1,ch__$1,meta31928__$1,___$2,fn1__$1,meta31944));
});

}

return (new cljs.core.async.t_cljs$core$async31943(self__.f,self__.ch,self__.meta31928,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31979 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31979) : self__.f.call(null,G__31979));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31928","meta31928",1651569455,null)], null);
}));

(cljs.core.async.t_cljs$core$async31927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31927");

(cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31927.
 */
cljs.core.async.__GT_t_cljs$core$async31927 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31927(f__$1,ch__$1,meta31928){
return (new cljs.core.async.t_cljs$core$async31927(f__$1,ch__$1,meta31928));
});

}

return (new cljs.core.async.t_cljs$core$async31927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31989 = (function (f,ch,meta31990){
this.f = f;
this.ch = ch;
this.meta31990 = meta31990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31991,meta31990__$1){
var self__ = this;
var _31991__$1 = this;
return (new cljs.core.async.t_cljs$core$async31989(self__.f,self__.ch,meta31990__$1));
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31991){
var self__ = this;
var _31991__$1 = this;
return self__.meta31990;
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31990","meta31990",463485120,null)], null);
}));

(cljs.core.async.t_cljs$core$async31989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31989");

(cljs.core.async.t_cljs$core$async31989.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31989.
 */
cljs.core.async.__GT_t_cljs$core$async31989 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31989(f__$1,ch__$1,meta31990){
return (new cljs.core.async.t_cljs$core$async31989(f__$1,ch__$1,meta31990));
});

}

return (new cljs.core.async.t_cljs$core$async31989(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32012 = (function (p,ch,meta32013){
this.p = p;
this.ch = ch;
this.meta32013 = meta32013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32014,meta32013__$1){
var self__ = this;
var _32014__$1 = this;
return (new cljs.core.async.t_cljs$core$async32012(self__.p,self__.ch,meta32013__$1));
}));

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32014){
var self__ = this;
var _32014__$1 = this;
return self__.meta32013;
}));

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32013","meta32013",-771932135,null)], null);
}));

(cljs.core.async.t_cljs$core$async32012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32012");

(cljs.core.async.t_cljs$core$async32012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32012.
 */
cljs.core.async.__GT_t_cljs$core$async32012 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32012(p__$1,ch__$1,meta32013){
return (new cljs.core.async.t_cljs$core$async32012(p__$1,ch__$1,meta32013));
});

}

return (new cljs.core.async.t_cljs$core$async32012(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___33797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32072 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32078_33799 = state_32076__$1;
(statearr_32078_33799[(2)] = inst_32072);

(statearr_32078_33799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var state_32076__$1 = state_32076;
var statearr_32082_33800 = state_32076__$1;
(statearr_32082_33800[(2)] = null);

(statearr_32082_33800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var inst_32058 = (state_32076[(7)]);
var inst_32058__$1 = (state_32076[(2)]);
var inst_32059 = (inst_32058__$1 == null);
var state_32076__$1 = (function (){var statearr_32084 = state_32076;
(statearr_32084[(7)] = inst_32058__$1);

return statearr_32084;
})();
if(cljs.core.truth_(inst_32059)){
var statearr_32085_33801 = state_32076__$1;
(statearr_32085_33801[(1)] = (5));

} else {
var statearr_32086_33802 = state_32076__$1;
(statearr_32086_33802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (6))){
var inst_32058 = (state_32076[(7)]);
var inst_32063 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32058) : p.call(null,inst_32058));
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32063)){
var statearr_32087_33804 = state_32076__$1;
(statearr_32087_33804[(1)] = (8));

} else {
var statearr_32088_33805 = state_32076__$1;
(statearr_32088_33805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32074 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (2))){
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32076__$1,(4),ch);
} else {
if((state_val_32077 === (11))){
var inst_32066 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32089_33813 = state_32076__$1;
(statearr_32089_33813[(2)] = inst_32066);

(statearr_32089_33813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var state_32076__$1 = state_32076;
var statearr_32090_33814 = state_32076__$1;
(statearr_32090_33814[(2)] = null);

(statearr_32090_33814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (5))){
var inst_32061 = cljs.core.async.close_BANG_(out);
var state_32076__$1 = state_32076;
var statearr_32091_33815 = state_32076__$1;
(statearr_32091_33815[(2)] = inst_32061);

(statearr_32091_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_32069 = (state_32076[(2)]);
var state_32076__$1 = (function (){var statearr_32092 = state_32076;
(statearr_32092[(8)] = inst_32069);

return statearr_32092;
})();
var statearr_32093_33821 = state_32076__$1;
(statearr_32093_33821[(2)] = null);

(statearr_32093_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_32058 = (state_32076[(7)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32076__$1,(11),out,inst_32058);
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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_32095 = [null,null,null,null,null,null,null,null,null];
(statearr_32095[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_32095[(1)] = (1));

return statearr_32095;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_32076){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_32076);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e32096){var ex__29612__auto__ = e32096;
var statearr_32098_33839 = state_32076;
(statearr_32098_33839[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_32076[(4)]))){
var statearr_32100_33841 = state_32076;
(statearr_32100_33841[(1)] = cljs.core.first((state_32076[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33843 = state_32076;
state_32076 = G__33843;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_32102 = f__29716__auto__();
(statearr_32102[(6)] = c__29715__auto___33797);

return statearr_32102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32105 = arguments.length;
switch (G__32105) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_32172){
var state_val_32174 = (state_32172[(1)]);
if((state_val_32174 === (7))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32177_33869 = state_32172__$1;
(statearr_32177_33869[(2)] = inst_32168);

(statearr_32177_33869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (20))){
var inst_32138 = (state_32172[(7)]);
var inst_32149 = (state_32172[(2)]);
var inst_32150 = cljs.core.next(inst_32138);
var inst_32124 = inst_32150;
var inst_32125 = null;
var inst_32126 = (0);
var inst_32127 = (0);
var state_32172__$1 = (function (){var statearr_32178 = state_32172;
(statearr_32178[(8)] = inst_32149);

(statearr_32178[(9)] = inst_32127);

(statearr_32178[(10)] = inst_32124);

(statearr_32178[(11)] = inst_32126);

(statearr_32178[(12)] = inst_32125);

return statearr_32178;
})();
var statearr_32179_33882 = state_32172__$1;
(statearr_32179_33882[(2)] = null);

(statearr_32179_33882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (1))){
var state_32172__$1 = state_32172;
var statearr_32180_33887 = state_32172__$1;
(statearr_32180_33887[(2)] = null);

(statearr_32180_33887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (4))){
var inst_32110 = (state_32172[(13)]);
var inst_32110__$1 = (state_32172[(2)]);
var inst_32113 = (inst_32110__$1 == null);
var state_32172__$1 = (function (){var statearr_32182 = state_32172;
(statearr_32182[(13)] = inst_32110__$1);

return statearr_32182;
})();
if(cljs.core.truth_(inst_32113)){
var statearr_32183_33890 = state_32172__$1;
(statearr_32183_33890[(1)] = (5));

} else {
var statearr_32184_33892 = state_32172__$1;
(statearr_32184_33892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (15))){
var state_32172__$1 = state_32172;
var statearr_32189_33894 = state_32172__$1;
(statearr_32189_33894[(2)] = null);

(statearr_32189_33894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (21))){
var state_32172__$1 = state_32172;
var statearr_32190_33899 = state_32172__$1;
(statearr_32190_33899[(2)] = null);

(statearr_32190_33899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (13))){
var inst_32127 = (state_32172[(9)]);
var inst_32124 = (state_32172[(10)]);
var inst_32126 = (state_32172[(11)]);
var inst_32125 = (state_32172[(12)]);
var inst_32134 = (state_32172[(2)]);
var inst_32135 = (inst_32127 + (1));
var tmp32186 = inst_32124;
var tmp32187 = inst_32126;
var tmp32188 = inst_32125;
var inst_32124__$1 = tmp32186;
var inst_32125__$1 = tmp32188;
var inst_32126__$1 = tmp32187;
var inst_32127__$1 = inst_32135;
var state_32172__$1 = (function (){var statearr_32191 = state_32172;
(statearr_32191[(14)] = inst_32134);

(statearr_32191[(9)] = inst_32127__$1);

(statearr_32191[(10)] = inst_32124__$1);

(statearr_32191[(11)] = inst_32126__$1);

(statearr_32191[(12)] = inst_32125__$1);

return statearr_32191;
})();
var statearr_32192_33924 = state_32172__$1;
(statearr_32192_33924[(2)] = null);

(statearr_32192_33924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (22))){
var state_32172__$1 = state_32172;
var statearr_32196_33926 = state_32172__$1;
(statearr_32196_33926[(2)] = null);

(statearr_32196_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (6))){
var inst_32110 = (state_32172[(13)]);
var inst_32122 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32110) : f.call(null,inst_32110));
var inst_32123 = cljs.core.seq(inst_32122);
var inst_32124 = inst_32123;
var inst_32125 = null;
var inst_32126 = (0);
var inst_32127 = (0);
var state_32172__$1 = (function (){var statearr_32198 = state_32172;
(statearr_32198[(9)] = inst_32127);

(statearr_32198[(10)] = inst_32124);

(statearr_32198[(11)] = inst_32126);

(statearr_32198[(12)] = inst_32125);

return statearr_32198;
})();
var statearr_32199_33927 = state_32172__$1;
(statearr_32199_33927[(2)] = null);

(statearr_32199_33927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (17))){
var inst_32138 = (state_32172[(7)]);
var inst_32142 = cljs.core.chunk_first(inst_32138);
var inst_32143 = cljs.core.chunk_rest(inst_32138);
var inst_32144 = cljs.core.count(inst_32142);
var inst_32124 = inst_32143;
var inst_32125 = inst_32142;
var inst_32126 = inst_32144;
var inst_32127 = (0);
var state_32172__$1 = (function (){var statearr_32201 = state_32172;
(statearr_32201[(9)] = inst_32127);

(statearr_32201[(10)] = inst_32124);

(statearr_32201[(11)] = inst_32126);

(statearr_32201[(12)] = inst_32125);

return statearr_32201;
})();
var statearr_32203_33930 = state_32172__$1;
(statearr_32203_33930[(2)] = null);

(statearr_32203_33930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32172__$1,inst_32170);
} else {
if((state_val_32174 === (12))){
var inst_32158 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32207_33940 = state_32172__$1;
(statearr_32207_33940[(2)] = inst_32158);

(statearr_32207_33940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (2))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32172__$1,(4),in$);
} else {
if((state_val_32174 === (23))){
var inst_32166 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32209_33953 = state_32172__$1;
(statearr_32209_33953[(2)] = inst_32166);

(statearr_32209_33953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (19))){
var inst_32153 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32210_33956 = state_32172__$1;
(statearr_32210_33956[(2)] = inst_32153);

(statearr_32210_33956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (11))){
var inst_32138 = (state_32172[(7)]);
var inst_32124 = (state_32172[(10)]);
var inst_32138__$1 = cljs.core.seq(inst_32124);
var state_32172__$1 = (function (){var statearr_32211 = state_32172;
(statearr_32211[(7)] = inst_32138__$1);

return statearr_32211;
})();
if(inst_32138__$1){
var statearr_32212_33997 = state_32172__$1;
(statearr_32212_33997[(1)] = (14));

} else {
var statearr_32213_34004 = state_32172__$1;
(statearr_32213_34004[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (9))){
var inst_32160 = (state_32172[(2)]);
var inst_32161 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32172__$1 = (function (){var statearr_32215 = state_32172;
(statearr_32215[(15)] = inst_32160);

return statearr_32215;
})();
if(cljs.core.truth_(inst_32161)){
var statearr_32217_34020 = state_32172__$1;
(statearr_32217_34020[(1)] = (21));

} else {
var statearr_32218_34025 = state_32172__$1;
(statearr_32218_34025[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (5))){
var inst_32115 = cljs.core.async.close_BANG_(out);
var state_32172__$1 = state_32172;
var statearr_32220_34033 = state_32172__$1;
(statearr_32220_34033[(2)] = inst_32115);

(statearr_32220_34033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (14))){
var inst_32138 = (state_32172[(7)]);
var inst_32140 = cljs.core.chunked_seq_QMARK_(inst_32138);
var state_32172__$1 = state_32172;
if(inst_32140){
var statearr_32227_34038 = state_32172__$1;
(statearr_32227_34038[(1)] = (17));

} else {
var statearr_32232_34039 = state_32172__$1;
(statearr_32232_34039[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (16))){
var inst_32156 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32237_34046 = state_32172__$1;
(statearr_32237_34046[(2)] = inst_32156);

(statearr_32237_34046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (10))){
var inst_32127 = (state_32172[(9)]);
var inst_32125 = (state_32172[(12)]);
var inst_32132 = cljs.core._nth(inst_32125,inst_32127);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32172__$1,(13),out,inst_32132);
} else {
if((state_val_32174 === (18))){
var inst_32138 = (state_32172[(7)]);
var inst_32147 = cljs.core.first(inst_32138);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32172__$1,(20),out,inst_32147);
} else {
if((state_val_32174 === (8))){
var inst_32127 = (state_32172[(9)]);
var inst_32126 = (state_32172[(11)]);
var inst_32129 = (inst_32127 < inst_32126);
var inst_32130 = inst_32129;
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32130)){
var statearr_32238_34051 = state_32172__$1;
(statearr_32238_34051[(1)] = (10));

} else {
var statearr_32239_34053 = state_32172__$1;
(statearr_32239_34053[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____0 = (function (){
var statearr_32241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32241[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__);

(statearr_32241[(1)] = (1));

return statearr_32241;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____1 = (function (state_32172){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_32172);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e32242){var ex__29612__auto__ = e32242;
var statearr_32243_34058 = state_32172;
(statearr_32243_34058[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_32172[(4)]))){
var statearr_32244_34060 = state_32172;
(statearr_32244_34060[(1)] = cljs.core.first((state_32172[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34064 = state_32172;
state_32172 = G__34064;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29609__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_32247 = f__29716__auto__();
(statearr_32247[(6)] = c__29715__auto__);

return statearr_32247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));

return c__29715__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32251 = arguments.length;
switch (G__32251) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32253 = arguments.length;
switch (G__32253) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32262 = arguments.length;
switch (G__32262) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___34102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_32291){
var state_val_32292 = (state_32291[(1)]);
if((state_val_32292 === (7))){
var inst_32286 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32293_34104 = state_32291__$1;
(statearr_32293_34104[(2)] = inst_32286);

(statearr_32293_34104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (1))){
var inst_32266 = null;
var state_32291__$1 = (function (){var statearr_32294 = state_32291;
(statearr_32294[(7)] = inst_32266);

return statearr_32294;
})();
var statearr_32296_34109 = state_32291__$1;
(statearr_32296_34109[(2)] = null);

(statearr_32296_34109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (4))){
var inst_32269 = (state_32291[(8)]);
var inst_32269__$1 = (state_32291[(2)]);
var inst_32272 = (inst_32269__$1 == null);
var inst_32273 = cljs.core.not(inst_32272);
var state_32291__$1 = (function (){var statearr_32298 = state_32291;
(statearr_32298[(8)] = inst_32269__$1);

return statearr_32298;
})();
if(inst_32273){
var statearr_32300_34114 = state_32291__$1;
(statearr_32300_34114[(1)] = (5));

} else {
var statearr_32301_34115 = state_32291__$1;
(statearr_32301_34115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (6))){
var state_32291__$1 = state_32291;
var statearr_32302_34118 = state_32291__$1;
(statearr_32302_34118[(2)] = null);

(statearr_32302_34118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (3))){
var inst_32288 = (state_32291[(2)]);
var inst_32289 = cljs.core.async.close_BANG_(out);
var state_32291__$1 = (function (){var statearr_32305 = state_32291;
(statearr_32305[(9)] = inst_32288);

return statearr_32305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32291__$1,inst_32289);
} else {
if((state_val_32292 === (2))){
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32291__$1,(4),ch);
} else {
if((state_val_32292 === (11))){
var inst_32269 = (state_32291[(8)]);
var inst_32280 = (state_32291[(2)]);
var inst_32266 = inst_32269;
var state_32291__$1 = (function (){var statearr_32306 = state_32291;
(statearr_32306[(7)] = inst_32266);

(statearr_32306[(10)] = inst_32280);

return statearr_32306;
})();
var statearr_32307_34124 = state_32291__$1;
(statearr_32307_34124[(2)] = null);

(statearr_32307_34124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (9))){
var inst_32269 = (state_32291[(8)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32291__$1,(11),out,inst_32269);
} else {
if((state_val_32292 === (5))){
var inst_32269 = (state_32291[(8)]);
var inst_32266 = (state_32291[(7)]);
var inst_32275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32269,inst_32266);
var state_32291__$1 = state_32291;
if(inst_32275){
var statearr_32313_34131 = state_32291__$1;
(statearr_32313_34131[(1)] = (8));

} else {
var statearr_32314_34133 = state_32291__$1;
(statearr_32314_34133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (10))){
var inst_32283 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32315_34136 = state_32291__$1;
(statearr_32315_34136[(2)] = inst_32283);

(statearr_32315_34136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (8))){
var inst_32266 = (state_32291[(7)]);
var tmp32309 = inst_32266;
var inst_32266__$1 = tmp32309;
var state_32291__$1 = (function (){var statearr_32316 = state_32291;
(statearr_32316[(7)] = inst_32266__$1);

return statearr_32316;
})();
var statearr_32317_34138 = state_32291__$1;
(statearr_32317_34138[(2)] = null);

(statearr_32317_34138[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_32291){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_32291);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e32320){var ex__29612__auto__ = e32320;
var statearr_32321_34144 = state_32291;
(statearr_32321_34144[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_32291[(4)]))){
var statearr_32326_34145 = state_32291;
(statearr_32326_34145[(1)] = cljs.core.first((state_32291[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34148 = state_32291;
state_32291 = G__34148;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_32291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_32291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_32327 = f__29716__auto__();
(statearr_32327[(6)] = c__29715__auto___34102);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32329 = arguments.length;
switch (G__32329) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___34159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_32373){
var state_val_32374 = (state_32373[(1)]);
if((state_val_32374 === (7))){
var inst_32369 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32375_34163 = state_32373__$1;
(statearr_32375_34163[(2)] = inst_32369);

(statearr_32375_34163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (1))){
var inst_32334 = (new Array(n));
var inst_32335 = inst_32334;
var inst_32336 = (0);
var state_32373__$1 = (function (){var statearr_32376 = state_32373;
(statearr_32376[(7)] = inst_32335);

(statearr_32376[(8)] = inst_32336);

return statearr_32376;
})();
var statearr_32377_34164 = state_32373__$1;
(statearr_32377_34164[(2)] = null);

(statearr_32377_34164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (4))){
var inst_32339 = (state_32373[(9)]);
var inst_32339__$1 = (state_32373[(2)]);
var inst_32342 = (inst_32339__$1 == null);
var inst_32343 = cljs.core.not(inst_32342);
var state_32373__$1 = (function (){var statearr_32378 = state_32373;
(statearr_32378[(9)] = inst_32339__$1);

return statearr_32378;
})();
if(inst_32343){
var statearr_32379_34172 = state_32373__$1;
(statearr_32379_34172[(1)] = (5));

} else {
var statearr_32380_34173 = state_32373__$1;
(statearr_32380_34173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (15))){
var inst_32363 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32382_34181 = state_32373__$1;
(statearr_32382_34181[(2)] = inst_32363);

(statearr_32382_34181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (13))){
var state_32373__$1 = state_32373;
var statearr_32383_34185 = state_32373__$1;
(statearr_32383_34185[(2)] = null);

(statearr_32383_34185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (6))){
var inst_32336 = (state_32373[(8)]);
var inst_32359 = (inst_32336 > (0));
var state_32373__$1 = state_32373;
if(cljs.core.truth_(inst_32359)){
var statearr_32384_34188 = state_32373__$1;
(statearr_32384_34188[(1)] = (12));

} else {
var statearr_32386_34190 = state_32373__$1;
(statearr_32386_34190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (3))){
var inst_32371 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32373__$1,inst_32371);
} else {
if((state_val_32374 === (12))){
var inst_32335 = (state_32373[(7)]);
var inst_32361 = cljs.core.vec(inst_32335);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32373__$1,(15),out,inst_32361);
} else {
if((state_val_32374 === (2))){
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,(4),ch);
} else {
if((state_val_32374 === (11))){
var inst_32353 = (state_32373[(2)]);
var inst_32354 = (new Array(n));
var inst_32335 = inst_32354;
var inst_32336 = (0);
var state_32373__$1 = (function (){var statearr_32390 = state_32373;
(statearr_32390[(7)] = inst_32335);

(statearr_32390[(10)] = inst_32353);

(statearr_32390[(8)] = inst_32336);

return statearr_32390;
})();
var statearr_32391_34202 = state_32373__$1;
(statearr_32391_34202[(2)] = null);

(statearr_32391_34202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (9))){
var inst_32335 = (state_32373[(7)]);
var inst_32351 = cljs.core.vec(inst_32335);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32373__$1,(11),out,inst_32351);
} else {
if((state_val_32374 === (5))){
var inst_32335 = (state_32373[(7)]);
var inst_32336 = (state_32373[(8)]);
var inst_32346 = (state_32373[(11)]);
var inst_32339 = (state_32373[(9)]);
var inst_32345 = (inst_32335[inst_32336] = inst_32339);
var inst_32346__$1 = (inst_32336 + (1));
var inst_32347 = (inst_32346__$1 < n);
var state_32373__$1 = (function (){var statearr_32392 = state_32373;
(statearr_32392[(12)] = inst_32345);

(statearr_32392[(11)] = inst_32346__$1);

return statearr_32392;
})();
if(cljs.core.truth_(inst_32347)){
var statearr_32394_34211 = state_32373__$1;
(statearr_32394_34211[(1)] = (8));

} else {
var statearr_32395_34212 = state_32373__$1;
(statearr_32395_34212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (14))){
var inst_32366 = (state_32373[(2)]);
var inst_32367 = cljs.core.async.close_BANG_(out);
var state_32373__$1 = (function (){var statearr_32399 = state_32373;
(statearr_32399[(13)] = inst_32366);

return statearr_32399;
})();
var statearr_32400_34216 = state_32373__$1;
(statearr_32400_34216[(2)] = inst_32367);

(statearr_32400_34216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (10))){
var inst_32357 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32403_34217 = state_32373__$1;
(statearr_32403_34217[(2)] = inst_32357);

(statearr_32403_34217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (8))){
var inst_32335 = (state_32373[(7)]);
var inst_32346 = (state_32373[(11)]);
var tmp32396 = inst_32335;
var inst_32335__$1 = tmp32396;
var inst_32336 = inst_32346;
var state_32373__$1 = (function (){var statearr_32404 = state_32373;
(statearr_32404[(7)] = inst_32335__$1);

(statearr_32404[(8)] = inst_32336);

return statearr_32404;
})();
var statearr_32405_34222 = state_32373__$1;
(statearr_32405_34222[(2)] = null);

(statearr_32405_34222[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_32407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32407[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_32407[(1)] = (1));

return statearr_32407;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_32373){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_32373);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e32411){var ex__29612__auto__ = e32411;
var statearr_32412_34229 = state_32373;
(statearr_32412_34229[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_32373[(4)]))){
var statearr_32414_34231 = state_32373;
(statearr_32414_34231[(1)] = cljs.core.first((state_32373[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34232 = state_32373;
state_32373 = G__34232;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_32373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_32373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_32416 = f__29716__auto__();
(statearr_32416[(6)] = c__29715__auto___34159);

return statearr_32416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32423 = arguments.length;
switch (G__32423) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29715__auto___34241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29716__auto__ = (function (){var switch__29608__auto__ = (function (state_32468){
var state_val_32469 = (state_32468[(1)]);
if((state_val_32469 === (7))){
var inst_32464 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32470_34246 = state_32468__$1;
(statearr_32470_34246[(2)] = inst_32464);

(statearr_32470_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (1))){
var inst_32427 = [];
var inst_32428 = inst_32427;
var inst_32429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32468__$1 = (function (){var statearr_32471 = state_32468;
(statearr_32471[(7)] = inst_32428);

(statearr_32471[(8)] = inst_32429);

return statearr_32471;
})();
var statearr_32472_34249 = state_32468__$1;
(statearr_32472_34249[(2)] = null);

(statearr_32472_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (4))){
var inst_32432 = (state_32468[(9)]);
var inst_32432__$1 = (state_32468[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var inst_32434 = cljs.core.not(inst_32433);
var state_32468__$1 = (function (){var statearr_32473 = state_32468;
(statearr_32473[(9)] = inst_32432__$1);

return statearr_32473;
})();
if(inst_32434){
var statearr_32474_34254 = state_32468__$1;
(statearr_32474_34254[(1)] = (5));

} else {
var statearr_32475_34255 = state_32468__$1;
(statearr_32475_34255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (15))){
var inst_32458 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32476_34256 = state_32468__$1;
(statearr_32476_34256[(2)] = inst_32458);

(statearr_32476_34256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (13))){
var state_32468__$1 = state_32468;
var statearr_32478_34259 = state_32468__$1;
(statearr_32478_34259[(2)] = null);

(statearr_32478_34259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (6))){
var inst_32428 = (state_32468[(7)]);
var inst_32453 = inst_32428.length;
var inst_32454 = (inst_32453 > (0));
var state_32468__$1 = state_32468;
if(cljs.core.truth_(inst_32454)){
var statearr_32479_34261 = state_32468__$1;
(statearr_32479_34261[(1)] = (12));

} else {
var statearr_32481_34266 = state_32468__$1;
(statearr_32481_34266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (3))){
var inst_32466 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32468__$1,inst_32466);
} else {
if((state_val_32469 === (12))){
var inst_32428 = (state_32468[(7)]);
var inst_32456 = cljs.core.vec(inst_32428);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32468__$1,(15),out,inst_32456);
} else {
if((state_val_32469 === (2))){
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32468__$1,(4),ch);
} else {
if((state_val_32469 === (11))){
var inst_32436 = (state_32468[(10)]);
var inst_32432 = (state_32468[(9)]);
var inst_32446 = (state_32468[(2)]);
var inst_32447 = [];
var inst_32448 = inst_32447.push(inst_32432);
var inst_32428 = inst_32447;
var inst_32429 = inst_32436;
var state_32468__$1 = (function (){var statearr_32482 = state_32468;
(statearr_32482[(7)] = inst_32428);

(statearr_32482[(11)] = inst_32446);

(statearr_32482[(12)] = inst_32448);

(statearr_32482[(8)] = inst_32429);

return statearr_32482;
})();
var statearr_32483_34278 = state_32468__$1;
(statearr_32483_34278[(2)] = null);

(statearr_32483_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (9))){
var inst_32428 = (state_32468[(7)]);
var inst_32444 = cljs.core.vec(inst_32428);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32468__$1,(11),out,inst_32444);
} else {
if((state_val_32469 === (5))){
var inst_32436 = (state_32468[(10)]);
var inst_32432 = (state_32468[(9)]);
var inst_32429 = (state_32468[(8)]);
var inst_32436__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32432) : f.call(null,inst_32432));
var inst_32437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32436__$1,inst_32429);
var inst_32438 = cljs.core.keyword_identical_QMARK_(inst_32429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32439 = ((inst_32437) || (inst_32438));
var state_32468__$1 = (function (){var statearr_32486 = state_32468;
(statearr_32486[(10)] = inst_32436__$1);

return statearr_32486;
})();
if(cljs.core.truth_(inst_32439)){
var statearr_32487_34281 = state_32468__$1;
(statearr_32487_34281[(1)] = (8));

} else {
var statearr_32488_34282 = state_32468__$1;
(statearr_32488_34282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (14))){
var inst_32461 = (state_32468[(2)]);
var inst_32462 = cljs.core.async.close_BANG_(out);
var state_32468__$1 = (function (){var statearr_32490 = state_32468;
(statearr_32490[(13)] = inst_32461);

return statearr_32490;
})();
var statearr_32492_34284 = state_32468__$1;
(statearr_32492_34284[(2)] = inst_32462);

(statearr_32492_34284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (10))){
var inst_32451 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32497_34289 = state_32468__$1;
(statearr_32497_34289[(2)] = inst_32451);

(statearr_32497_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (8))){
var inst_32436 = (state_32468[(10)]);
var inst_32428 = (state_32468[(7)]);
var inst_32432 = (state_32468[(9)]);
var inst_32441 = inst_32428.push(inst_32432);
var tmp32489 = inst_32428;
var inst_32428__$1 = tmp32489;
var inst_32429 = inst_32436;
var state_32468__$1 = (function (){var statearr_32499 = state_32468;
(statearr_32499[(14)] = inst_32441);

(statearr_32499[(7)] = inst_32428__$1);

(statearr_32499[(8)] = inst_32429);

return statearr_32499;
})();
var statearr_32501_34296 = state_32468__$1;
(statearr_32501_34296[(2)] = null);

(statearr_32501_34296[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29609__auto__ = null;
var cljs$core$async$state_machine__29609__auto____0 = (function (){
var statearr_32503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32503[(0)] = cljs$core$async$state_machine__29609__auto__);

(statearr_32503[(1)] = (1));

return statearr_32503;
});
var cljs$core$async$state_machine__29609__auto____1 = (function (state_32468){
while(true){
var ret_value__29610__auto__ = (function (){try{while(true){
var result__29611__auto__ = switch__29608__auto__(state_32468);
if(cljs.core.keyword_identical_QMARK_(result__29611__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29611__auto__;
}
break;
}
}catch (e32505){var ex__29612__auto__ = e32505;
var statearr_32506_34297 = state_32468;
(statearr_32506_34297[(2)] = ex__29612__auto__);


if(cljs.core.seq((state_32468[(4)]))){
var statearr_32507_34298 = state_32468;
(statearr_32507_34298[(1)] = cljs.core.first((state_32468[(4)])));

} else {
throw ex__29612__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34300 = state_32468;
state_32468 = G__34300;
continue;
} else {
return ret_value__29610__auto__;
}
break;
}
});
cljs$core$async$state_machine__29609__auto__ = function(state_32468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29609__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29609__auto____1.call(this,state_32468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29609__auto____0;
cljs$core$async$state_machine__29609__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29609__auto____1;
return cljs$core$async$state_machine__29609__auto__;
})()
})();
var state__29717__auto__ = (function (){var statearr_32510 = f__29716__auto__();
(statearr_32510[(6)] = c__29715__auto___34241);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29717__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
