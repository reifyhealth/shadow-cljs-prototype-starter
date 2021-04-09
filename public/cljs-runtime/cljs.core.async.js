goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28633 = arguments.length;
switch (G__28633) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28638 = (function (f,blockable,meta28639){
this.f = f;
this.blockable = blockable;
this.meta28639 = meta28639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28640,meta28639__$1){
var self__ = this;
var _28640__$1 = this;
return (new cljs.core.async.t_cljs$core$async28638(self__.f,self__.blockable,meta28639__$1));
}));

(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28640){
var self__ = this;
var _28640__$1 = this;
return self__.meta28639;
}));

(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28639","meta28639",-1292380538,null)], null);
}));

(cljs.core.async.t_cljs$core$async28638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28638");

(cljs.core.async.t_cljs$core$async28638.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28638.
 */
cljs.core.async.__GT_t_cljs$core$async28638 = (function cljs$core$async$__GT_t_cljs$core$async28638(f__$1,blockable__$1,meta28639){
return (new cljs.core.async.t_cljs$core$async28638(f__$1,blockable__$1,meta28639));
});

}

return (new cljs.core.async.t_cljs$core$async28638(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28683 = arguments.length;
switch (G__28683) {
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
var G__28696 = arguments.length;
switch (G__28696) {
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
var G__28715 = arguments.length;
switch (G__28715) {
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
var val_31328 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31328) : fn1.call(null,val_31328));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31328) : fn1.call(null,val_31328));
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
var G__28728 = arguments.length;
switch (G__28728) {
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
var n__4648__auto___31330 = n;
var x_31331 = (0);
while(true){
if((x_31331 < n__4648__auto___31330)){
(a[x_31331] = x_31331);

var G__31332 = (x_31331 + (1));
x_31331 = G__31332;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28736 = (function (flag,meta28737){
this.flag = flag;
this.meta28737 = meta28737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28738,meta28737__$1){
var self__ = this;
var _28738__$1 = this;
return (new cljs.core.async.t_cljs$core$async28736(self__.flag,meta28737__$1));
}));

(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28738){
var self__ = this;
var _28738__$1 = this;
return self__.meta28737;
}));

(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28737","meta28737",512446568,null)], null);
}));

(cljs.core.async.t_cljs$core$async28736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28736");

(cljs.core.async.t_cljs$core$async28736.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28736.
 */
cljs.core.async.__GT_t_cljs$core$async28736 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28736(flag__$1,meta28737){
return (new cljs.core.async.t_cljs$core$async28736(flag__$1,meta28737));
});

}

return (new cljs.core.async.t_cljs$core$async28736(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28750 = (function (flag,cb,meta28751){
this.flag = flag;
this.cb = cb;
this.meta28751 = meta28751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28752,meta28751__$1){
var self__ = this;
var _28752__$1 = this;
return (new cljs.core.async.t_cljs$core$async28750(self__.flag,self__.cb,meta28751__$1));
}));

(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28752){
var self__ = this;
var _28752__$1 = this;
return self__.meta28751;
}));

(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28751","meta28751",-150561567,null)], null);
}));

(cljs.core.async.t_cljs$core$async28750.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28750");

(cljs.core.async.t_cljs$core$async28750.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async28750");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28750.
 */
cljs.core.async.__GT_t_cljs$core$async28750 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28750(flag__$1,cb__$1,meta28751){
return (new cljs.core.async.t_cljs$core$async28750(flag__$1,cb__$1,meta28751));
});

}

return (new cljs.core.async.t_cljs$core$async28750(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28763_SHARP_){
var G__28768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28763_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28768) : fret.call(null,G__28768));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28764_SHARP_){
var G__28769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28764_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28769) : fret.call(null,G__28769));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31348 = (i + (1));
i = G__31348;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
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
var args__4777__auto__ = [];
var len__4771__auto___31349 = arguments.length;
var i__4772__auto___31350 = (0);
while(true){
if((i__4772__auto___31350 < len__4771__auto___31349)){
args__4777__auto__.push((arguments[i__4772__auto___31350]));

var G__31363 = (i__4772__auto___31350 + (1));
i__4772__auto___31350 = G__31363;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28772){
var map__28774 = p__28772;
var map__28774__$1 = cljs.core.__destructure_map(map__28774);
var opts = map__28774__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28770){
var G__28771 = cljs.core.first(seq28770);
var seq28770__$1 = cljs.core.next(seq28770);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28771,seq28770__$1);
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
var G__28785 = arguments.length;
switch (G__28785) {
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
var c__28567__auto___31378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_28815){
var state_val_28816 = (state_28815[(1)]);
if((state_val_28816 === (7))){
var inst_28811 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28817_31379 = state_28815__$1;
(statearr_28817_31379[(2)] = inst_28811);

(statearr_28817_31379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (1))){
var state_28815__$1 = state_28815;
var statearr_28818_31380 = state_28815__$1;
(statearr_28818_31380[(2)] = null);

(statearr_28818_31380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (4))){
var inst_28791 = (state_28815[(7)]);
var inst_28791__$1 = (state_28815[(2)]);
var inst_28792 = (inst_28791__$1 == null);
var state_28815__$1 = (function (){var statearr_28819 = state_28815;
(statearr_28819[(7)] = inst_28791__$1);

return statearr_28819;
})();
if(cljs.core.truth_(inst_28792)){
var statearr_28820_31381 = state_28815__$1;
(statearr_28820_31381[(1)] = (5));

} else {
var statearr_28821_31382 = state_28815__$1;
(statearr_28821_31382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (13))){
var state_28815__$1 = state_28815;
var statearr_28822_31383 = state_28815__$1;
(statearr_28822_31383[(2)] = null);

(statearr_28822_31383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (6))){
var inst_28791 = (state_28815[(7)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28815__$1,(11),to,inst_28791);
} else {
if((state_val_28816 === (3))){
var inst_28813 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28815__$1,inst_28813);
} else {
if((state_val_28816 === (12))){
var state_28815__$1 = state_28815;
var statearr_28823_31385 = state_28815__$1;
(statearr_28823_31385[(2)] = null);

(statearr_28823_31385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (2))){
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28815__$1,(4),from);
} else {
if((state_val_28816 === (11))){
var inst_28804 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
if(cljs.core.truth_(inst_28804)){
var statearr_28826_31386 = state_28815__$1;
(statearr_28826_31386[(1)] = (12));

} else {
var statearr_28827_31387 = state_28815__$1;
(statearr_28827_31387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (9))){
var state_28815__$1 = state_28815;
var statearr_28828_31388 = state_28815__$1;
(statearr_28828_31388[(2)] = null);

(statearr_28828_31388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (5))){
var state_28815__$1 = state_28815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28829_31389 = state_28815__$1;
(statearr_28829_31389[(1)] = (8));

} else {
var statearr_28830_31390 = state_28815__$1;
(statearr_28830_31390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (14))){
var inst_28809 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28832_31391 = state_28815__$1;
(statearr_28832_31391[(2)] = inst_28809);

(statearr_28832_31391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (10))){
var inst_28801 = (state_28815[(2)]);
var state_28815__$1 = state_28815;
var statearr_28833_31392 = state_28815__$1;
(statearr_28833_31392[(2)] = inst_28801);

(statearr_28833_31392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28816 === (8))){
var inst_28798 = cljs.core.async.close_BANG_(to);
var state_28815__$1 = state_28815;
var statearr_28834_31394 = state_28815__$1;
(statearr_28834_31394[(2)] = inst_28798);

(statearr_28834_31394[(1)] = (10));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_28835 = [null,null,null,null,null,null,null,null];
(statearr_28835[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_28835[(1)] = (1));

return statearr_28835;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_28815){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_28815);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e28836){var ex__28365__auto__ = e28836;
var statearr_28837_31397 = state_28815;
(statearr_28837_31397[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_28815[(4)]))){
var statearr_28838_31398 = state_28815;
(statearr_28838_31398[(1)] = cljs.core.first((state_28815[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31399 = state_28815;
state_28815 = G__31399;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_28815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_28815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_28839 = f__28568__auto__();
(statearr_28839[(6)] = c__28567__auto___31378);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var process = (function (p__28840){
var vec__28841 = p__28840;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(1),null);
var job = vec__28841;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28567__auto___31402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_28848){
var state_val_28849 = (state_28848[(1)]);
if((state_val_28849 === (1))){
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28848__$1,(2),res,v);
} else {
if((state_val_28849 === (2))){
var inst_28845 = (state_28848[(2)]);
var inst_28846 = cljs.core.async.close_BANG_(res);
var state_28848__$1 = (function (){var statearr_28850 = state_28848;
(statearr_28850[(7)] = inst_28845);

return statearr_28850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28848__$1,inst_28846);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_28854 = [null,null,null,null,null,null,null,null];
(statearr_28854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__);

(statearr_28854[(1)] = (1));

return statearr_28854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1 = (function (state_28848){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_28848);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e28856){var ex__28365__auto__ = e28856;
var statearr_28857_31403 = state_28848;
(statearr_28857_31403[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_28848[(4)]))){
var statearr_28858_31404 = state_28848;
(statearr_28858_31404[(1)] = cljs.core.first((state_28848[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31406 = state_28848;
state_28848 = G__31406;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = function(state_28848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1.call(this,state_28848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_28860 = f__28568__auto__();
(statearr_28860[(6)] = c__28567__auto___31402);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28861){
var vec__28862 = p__28861;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(1),null);
var job = vec__28862;
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
var n__4648__auto___31408 = n;
var __31409 = (0);
while(true){
if((__31409 < n__4648__auto___31408)){
var G__28865_31410 = type;
var G__28865_31411__$1 = (((G__28865_31410 instanceof cljs.core.Keyword))?G__28865_31410.fqn:null);
switch (G__28865_31411__$1) {
case "compute":
var c__28567__auto___31414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31409,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = ((function (__31409,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function (state_28878){
var state_val_28879 = (state_28878[(1)]);
if((state_val_28879 === (1))){
var state_28878__$1 = state_28878;
var statearr_28880_31417 = state_28878__$1;
(statearr_28880_31417[(2)] = null);

(statearr_28880_31417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (2))){
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28878__$1,(4),jobs);
} else {
if((state_val_28879 === (3))){
var inst_28876 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28878__$1,inst_28876);
} else {
if((state_val_28879 === (4))){
var inst_28868 = (state_28878[(2)]);
var inst_28869 = process(inst_28868);
var state_28878__$1 = state_28878;
if(cljs.core.truth_(inst_28869)){
var statearr_28881_31420 = state_28878__$1;
(statearr_28881_31420[(1)] = (5));

} else {
var statearr_28883_31421 = state_28878__$1;
(statearr_28883_31421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (5))){
var state_28878__$1 = state_28878;
var statearr_28884_31422 = state_28878__$1;
(statearr_28884_31422[(2)] = null);

(statearr_28884_31422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (6))){
var state_28878__$1 = state_28878;
var statearr_28885_31423 = state_28878__$1;
(statearr_28885_31423[(2)] = null);

(statearr_28885_31423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28879 === (7))){
var inst_28874 = (state_28878[(2)]);
var state_28878__$1 = state_28878;
var statearr_28886_31431 = state_28878__$1;
(statearr_28886_31431[(2)] = inst_28874);

(statearr_28886_31431[(1)] = (3));


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
});})(__31409,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
;
return ((function (__31409,switch__28361__auto__,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1 = (function (state_28878){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_28878);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e28888){var ex__28365__auto__ = e28888;
var statearr_28889_31436 = state_28878;
(statearr_28889_31436[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_28878[(4)]))){
var statearr_28890_31437 = state_28878;
(statearr_28890_31437[(1)] = cljs.core.first((state_28878[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31439 = state_28878;
state_28878 = G__31439;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = function(state_28878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1.call(this,state_28878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__;
})()
;})(__31409,switch__28361__auto__,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
})();
var state__28569__auto__ = (function (){var statearr_28891 = f__28568__auto__();
(statearr_28891[(6)] = c__28567__auto___31414);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
});})(__31409,c__28567__auto___31414,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
);


break;
case "async":
var c__28567__auto___31440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31409,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = ((function (__31409,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function (state_28904){
var state_val_28905 = (state_28904[(1)]);
if((state_val_28905 === (1))){
var state_28904__$1 = state_28904;
var statearr_28906_31442 = state_28904__$1;
(statearr_28906_31442[(2)] = null);

(statearr_28906_31442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (2))){
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28904__$1,(4),jobs);
} else {
if((state_val_28905 === (3))){
var inst_28902 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28904__$1,inst_28902);
} else {
if((state_val_28905 === (4))){
var inst_28894 = (state_28904[(2)]);
var inst_28895 = async(inst_28894);
var state_28904__$1 = state_28904;
if(cljs.core.truth_(inst_28895)){
var statearr_28908_31445 = state_28904__$1;
(statearr_28908_31445[(1)] = (5));

} else {
var statearr_28909_31446 = state_28904__$1;
(statearr_28909_31446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (5))){
var state_28904__$1 = state_28904;
var statearr_28910_31447 = state_28904__$1;
(statearr_28910_31447[(2)] = null);

(statearr_28910_31447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (6))){
var state_28904__$1 = state_28904;
var statearr_28911_31448 = state_28904__$1;
(statearr_28911_31448[(2)] = null);

(statearr_28911_31448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (7))){
var inst_28900 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28912_31450 = state_28904__$1;
(statearr_28912_31450[(2)] = inst_28900);

(statearr_28912_31450[(1)] = (3));


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
});})(__31409,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
;
return ((function (__31409,switch__28361__auto__,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_28913 = [null,null,null,null,null,null,null];
(statearr_28913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__);

(statearr_28913[(1)] = (1));

return statearr_28913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1 = (function (state_28904){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_28904);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e28914){var ex__28365__auto__ = e28914;
var statearr_28917_31451 = state_28904;
(statearr_28917_31451[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_28904[(4)]))){
var statearr_28922_31456 = state_28904;
(statearr_28922_31456[(1)] = cljs.core.first((state_28904[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_28904;
state_28904 = G__31458;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__;
})()
;})(__31409,switch__28361__auto__,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
})();
var state__28569__auto__ = (function (){var statearr_28923 = f__28568__auto__();
(statearr_28923[(6)] = c__28567__auto___31440);

return statearr_28923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
});})(__31409,c__28567__auto___31440,G__28865_31410,G__28865_31411__$1,n__4648__auto___31408,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28865_31411__$1)].join('')));

}

var G__31464 = (__31409 + (1));
__31409 = G__31464;
continue;
} else {
}
break;
}

var c__28567__auto___31465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_28951){
var state_val_28952 = (state_28951[(1)]);
if((state_val_28952 === (7))){
var inst_28947 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28953_31469 = state_28951__$1;
(statearr_28953_31469[(2)] = inst_28947);

(statearr_28953_31469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (1))){
var state_28951__$1 = state_28951;
var statearr_28959_31470 = state_28951__$1;
(statearr_28959_31470[(2)] = null);

(statearr_28959_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (4))){
var inst_28930 = (state_28951[(7)]);
var inst_28930__$1 = (state_28951[(2)]);
var inst_28931 = (inst_28930__$1 == null);
var state_28951__$1 = (function (){var statearr_28969 = state_28951;
(statearr_28969[(7)] = inst_28930__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28931)){
var statearr_28976_31471 = state_28951__$1;
(statearr_28976_31471[(1)] = (5));

} else {
var statearr_28978_31472 = state_28951__$1;
(statearr_28978_31472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (6))){
var inst_28935 = (state_28951[(8)]);
var inst_28930 = (state_28951[(7)]);
var inst_28935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28939 = [inst_28930,inst_28935__$1];
var inst_28940 = (new cljs.core.PersistentVector(null,2,(5),inst_28938,inst_28939,null));
var state_28951__$1 = (function (){var statearr_28993 = state_28951;
(statearr_28993[(8)] = inst_28935__$1);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28951__$1,(8),jobs,inst_28940);
} else {
if((state_val_28952 === (3))){
var inst_28949 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28951__$1,inst_28949);
} else {
if((state_val_28952 === (2))){
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28951__$1,(4),from);
} else {
if((state_val_28952 === (9))){
var inst_28944 = (state_28951[(2)]);
var state_28951__$1 = (function (){var statearr_29005 = state_28951;
(statearr_29005[(9)] = inst_28944);

return statearr_29005;
})();
var statearr_29010_31474 = state_28951__$1;
(statearr_29010_31474[(2)] = null);

(statearr_29010_31474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (5))){
var inst_28933 = cljs.core.async.close_BANG_(jobs);
var state_28951__$1 = state_28951;
var statearr_29013_31476 = state_28951__$1;
(statearr_29013_31476[(2)] = inst_28933);

(statearr_29013_31476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (8))){
var inst_28935 = (state_28951[(8)]);
var inst_28942 = (state_28951[(2)]);
var state_28951__$1 = (function (){var statearr_29014 = state_28951;
(statearr_29014[(10)] = inst_28942);

return statearr_29014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28951__$1,(9),results,inst_28935);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_29017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__);

(statearr_29017[(1)] = (1));

return statearr_29017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1 = (function (state_28951){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_28951);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29018){var ex__28365__auto__ = e29018;
var statearr_29020_31486 = state_28951;
(statearr_29020_31486[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_28951[(4)]))){
var statearr_29023_31487 = state_28951;
(statearr_29023_31487[(1)] = cljs.core.first((state_28951[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31488 = state_28951;
state_28951 = G__31488;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = function(state_28951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1.call(this,state_28951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29024 = f__28568__auto__();
(statearr_29024[(6)] = c__28567__auto___31465);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (7))){
var inst_29063 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29072_31494 = state_29067__$1;
(statearr_29072_31494[(2)] = inst_29063);

(statearr_29072_31494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (20))){
var state_29067__$1 = state_29067;
var statearr_29073_31495 = state_29067__$1;
(statearr_29073_31495[(2)] = null);

(statearr_29073_31495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (1))){
var state_29067__$1 = state_29067;
var statearr_29076_31496 = state_29067__$1;
(statearr_29076_31496[(2)] = null);

(statearr_29076_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (4))){
var inst_29029 = (state_29067[(7)]);
var inst_29029__$1 = (state_29067[(2)]);
var inst_29031 = (inst_29029__$1 == null);
var state_29067__$1 = (function (){var statearr_29078 = state_29067;
(statearr_29078[(7)] = inst_29029__$1);

return statearr_29078;
})();
if(cljs.core.truth_(inst_29031)){
var statearr_29079_31499 = state_29067__$1;
(statearr_29079_31499[(1)] = (5));

} else {
var statearr_29080_31500 = state_29067__$1;
(statearr_29080_31500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (15))){
var inst_29044 = (state_29067[(8)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29067__$1,(18),to,inst_29044);
} else {
if((state_val_29068 === (21))){
var inst_29058 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29081_31505 = state_29067__$1;
(statearr_29081_31505[(2)] = inst_29058);

(statearr_29081_31505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (13))){
var inst_29060 = (state_29067[(2)]);
var state_29067__$1 = (function (){var statearr_29083 = state_29067;
(statearr_29083[(9)] = inst_29060);

return statearr_29083;
})();
var statearr_29087_31511 = state_29067__$1;
(statearr_29087_31511[(2)] = null);

(statearr_29087_31511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (6))){
var inst_29029 = (state_29067[(7)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29067__$1,(11),inst_29029);
} else {
if((state_val_29068 === (17))){
var inst_29053 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
if(cljs.core.truth_(inst_29053)){
var statearr_29090_31516 = state_29067__$1;
(statearr_29090_31516[(1)] = (19));

} else {
var statearr_29091_31517 = state_29067__$1;
(statearr_29091_31517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (3))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29067__$1,inst_29065);
} else {
if((state_val_29068 === (12))){
var inst_29041 = (state_29067[(10)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29067__$1,(14),inst_29041);
} else {
if((state_val_29068 === (2))){
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29067__$1,(4),results);
} else {
if((state_val_29068 === (19))){
var state_29067__$1 = state_29067;
var statearr_29092_31518 = state_29067__$1;
(statearr_29092_31518[(2)] = null);

(statearr_29092_31518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (11))){
var inst_29041 = (state_29067[(2)]);
var state_29067__$1 = (function (){var statearr_29095 = state_29067;
(statearr_29095[(10)] = inst_29041);

return statearr_29095;
})();
var statearr_29096_31519 = state_29067__$1;
(statearr_29096_31519[(2)] = null);

(statearr_29096_31519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (9))){
var state_29067__$1 = state_29067;
var statearr_29097_31520 = state_29067__$1;
(statearr_29097_31520[(2)] = null);

(statearr_29097_31520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (5))){
var state_29067__$1 = state_29067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29100_31522 = state_29067__$1;
(statearr_29100_31522[(1)] = (8));

} else {
var statearr_29101_31523 = state_29067__$1;
(statearr_29101_31523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (14))){
var inst_29044 = (state_29067[(8)]);
var inst_29044__$1 = (state_29067[(2)]);
var inst_29046 = (inst_29044__$1 == null);
var inst_29047 = cljs.core.not(inst_29046);
var state_29067__$1 = (function (){var statearr_29105 = state_29067;
(statearr_29105[(8)] = inst_29044__$1);

return statearr_29105;
})();
if(inst_29047){
var statearr_29106_31533 = state_29067__$1;
(statearr_29106_31533[(1)] = (15));

} else {
var statearr_29109_31534 = state_29067__$1;
(statearr_29109_31534[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (16))){
var state_29067__$1 = state_29067;
var statearr_29110_31535 = state_29067__$1;
(statearr_29110_31535[(2)] = false);

(statearr_29110_31535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (10))){
var inst_29038 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29111_31536 = state_29067__$1;
(statearr_29111_31536[(2)] = inst_29038);

(statearr_29111_31536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (18))){
var inst_29050 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29113_31540 = state_29067__$1;
(statearr_29113_31540[(2)] = inst_29050);

(statearr_29113_31540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (8))){
var inst_29035 = cljs.core.async.close_BANG_(to);
var state_29067__$1 = state_29067;
var statearr_29116_31541 = state_29067__$1;
(statearr_29116_31541[(2)] = inst_29035);

(statearr_29116_31541[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_29118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__);

(statearr_29118[(1)] = (1));

return statearr_29118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1 = (function (state_29067){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29067);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29120){var ex__28365__auto__ = e29120;
var statearr_29121_31547 = state_29067;
(statearr_29121_31547[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29067[(4)]))){
var statearr_29122_31548 = state_29067;
(statearr_29122_31548[(1)] = cljs.core.first((state_29067[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31552 = state_29067;
state_29067 = G__31552;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29126 = f__28568__auto__();
(statearr_29126[(6)] = c__28567__auto__);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
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
var G__29131 = arguments.length;
switch (G__29131) {
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
var G__29133 = arguments.length;
switch (G__29133) {
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
var G__29139 = arguments.length;
switch (G__29139) {
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
var c__28567__auto___31577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (7))){
var inst_29167 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29173_31579 = state_29171__$1;
(statearr_29173_31579[(2)] = inst_29167);

(statearr_29173_31579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (1))){
var state_29171__$1 = state_29171;
var statearr_29178_31580 = state_29171__$1;
(statearr_29178_31580[(2)] = null);

(statearr_29178_31580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (4))){
var inst_29147 = (state_29171[(7)]);
var inst_29147__$1 = (state_29171[(2)]);
var inst_29148 = (inst_29147__$1 == null);
var state_29171__$1 = (function (){var statearr_29179 = state_29171;
(statearr_29179[(7)] = inst_29147__$1);

return statearr_29179;
})();
if(cljs.core.truth_(inst_29148)){
var statearr_29180_31582 = state_29171__$1;
(statearr_29180_31582[(1)] = (5));

} else {
var statearr_29182_31583 = state_29171__$1;
(statearr_29182_31583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (13))){
var state_29171__$1 = state_29171;
var statearr_29183_31584 = state_29171__$1;
(statearr_29183_31584[(2)] = null);

(statearr_29183_31584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (6))){
var inst_29147 = (state_29171[(7)]);
var inst_29154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29147) : p.call(null,inst_29147));
var state_29171__$1 = state_29171;
if(cljs.core.truth_(inst_29154)){
var statearr_29186_31585 = state_29171__$1;
(statearr_29186_31585[(1)] = (9));

} else {
var statearr_29187_31586 = state_29171__$1;
(statearr_29187_31586[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (3))){
var inst_29169 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29171__$1,inst_29169);
} else {
if((state_val_29172 === (12))){
var state_29171__$1 = state_29171;
var statearr_29191_31587 = state_29171__$1;
(statearr_29191_31587[(2)] = null);

(statearr_29191_31587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (2))){
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29171__$1,(4),ch);
} else {
if((state_val_29172 === (11))){
var inst_29147 = (state_29171[(7)]);
var inst_29158 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29171__$1,(8),inst_29158,inst_29147);
} else {
if((state_val_29172 === (9))){
var state_29171__$1 = state_29171;
var statearr_29204_31588 = state_29171__$1;
(statearr_29204_31588[(2)] = tc);

(statearr_29204_31588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (5))){
var inst_29151 = cljs.core.async.close_BANG_(tc);
var inst_29152 = cljs.core.async.close_BANG_(fc);
var state_29171__$1 = (function (){var statearr_29209 = state_29171;
(statearr_29209[(8)] = inst_29151);

return statearr_29209;
})();
var statearr_29210_31610 = state_29171__$1;
(statearr_29210_31610[(2)] = inst_29152);

(statearr_29210_31610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (14))){
var inst_29165 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29212_31638 = state_29171__$1;
(statearr_29212_31638[(2)] = inst_29165);

(statearr_29212_31638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (10))){
var state_29171__$1 = state_29171;
var statearr_29213_31639 = state_29171__$1;
(statearr_29213_31639[(2)] = fc);

(statearr_29213_31639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (8))){
var inst_29160 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
if(cljs.core.truth_(inst_29160)){
var statearr_29214_31640 = state_29171__$1;
(statearr_29214_31640[(1)] = (12));

} else {
var statearr_29215_31641 = state_29171__$1;
(statearr_29215_31641[(1)] = (13));

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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_29218 = [null,null,null,null,null,null,null,null,null];
(statearr_29218[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_29218[(1)] = (1));

return statearr_29218;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_29171){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29171);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29222){var ex__28365__auto__ = e29222;
var statearr_29224_31648 = state_29171;
(statearr_29224_31648[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29171[(4)]))){
var statearr_29225_31649 = state_29171;
(statearr_29225_31649[(1)] = cljs.core.first((state_29171[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31650 = state_29171;
state_29171 = G__31650;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29229 = f__28568__auto__();
(statearr_29229[(6)] = c__28567__auto___31577);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29255){
var state_val_29256 = (state_29255[(1)]);
if((state_val_29256 === (7))){
var inst_29251 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29257_31657 = state_29255__$1;
(statearr_29257_31657[(2)] = inst_29251);

(statearr_29257_31657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (1))){
var inst_29233 = init;
var inst_29234 = inst_29233;
var state_29255__$1 = (function (){var statearr_29261 = state_29255;
(statearr_29261[(7)] = inst_29234);

return statearr_29261;
})();
var statearr_29262_31658 = state_29255__$1;
(statearr_29262_31658[(2)] = null);

(statearr_29262_31658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (4))){
var inst_29237 = (state_29255[(8)]);
var inst_29237__$1 = (state_29255[(2)]);
var inst_29238 = (inst_29237__$1 == null);
var state_29255__$1 = (function (){var statearr_29266 = state_29255;
(statearr_29266[(8)] = inst_29237__$1);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29238)){
var statearr_29267_31659 = state_29255__$1;
(statearr_29267_31659[(1)] = (5));

} else {
var statearr_29269_31660 = state_29255__$1;
(statearr_29269_31660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (6))){
var inst_29242 = (state_29255[(9)]);
var inst_29234 = (state_29255[(7)]);
var inst_29237 = (state_29255[(8)]);
var inst_29242__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29234,inst_29237) : f.call(null,inst_29234,inst_29237));
var inst_29243 = cljs.core.reduced_QMARK_(inst_29242__$1);
var state_29255__$1 = (function (){var statearr_29273 = state_29255;
(statearr_29273[(9)] = inst_29242__$1);

return statearr_29273;
})();
if(inst_29243){
var statearr_29274_31676 = state_29255__$1;
(statearr_29274_31676[(1)] = (8));

} else {
var statearr_29276_31677 = state_29255__$1;
(statearr_29276_31677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (3))){
var inst_29253 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29255__$1,inst_29253);
} else {
if((state_val_29256 === (2))){
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29255__$1,(4),ch);
} else {
if((state_val_29256 === (9))){
var inst_29242 = (state_29255[(9)]);
var inst_29234 = inst_29242;
var state_29255__$1 = (function (){var statearr_29278 = state_29255;
(statearr_29278[(7)] = inst_29234);

return statearr_29278;
})();
var statearr_29279_31698 = state_29255__$1;
(statearr_29279_31698[(2)] = null);

(statearr_29279_31698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (5))){
var inst_29234 = (state_29255[(7)]);
var state_29255__$1 = state_29255;
var statearr_29280_31699 = state_29255__$1;
(statearr_29280_31699[(2)] = inst_29234);

(statearr_29280_31699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (10))){
var inst_29249 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29281_31709 = state_29255__$1;
(statearr_29281_31709[(2)] = inst_29249);

(statearr_29281_31709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (8))){
var inst_29242 = (state_29255[(9)]);
var inst_29245 = cljs.core.deref(inst_29242);
var state_29255__$1 = state_29255;
var statearr_29284_31717 = state_29255__$1;
(statearr_29284_31717[(2)] = inst_29245);

(statearr_29284_31717[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28362__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28362__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29288[(0)] = cljs$core$async$reduce_$_state_machine__28362__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var cljs$core$async$reduce_$_state_machine__28362__auto____1 = (function (state_29255){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29255);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29292){var ex__28365__auto__ = e29292;
var statearr_29293_31718 = state_29255;
(statearr_29293_31718[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29255[(4)]))){
var statearr_29296_31719 = state_29255;
(statearr_29296_31719[(1)] = cljs.core.first((state_29255[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_29255;
state_29255 = G__31722;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28362__auto__ = function(state_29255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28362__auto____1.call(this,state_29255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28362__auto____0;
cljs$core$async$reduce_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28362__auto____1;
return cljs$core$async$reduce_$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29302 = f__28568__auto__();
(statearr_29302[(6)] = c__28567__auto__);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29317){
var state_val_29318 = (state_29317[(1)]);
if((state_val_29318 === (1))){
var inst_29312 = cljs.core.async.reduce(f__$1,init,ch);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29317__$1,(2),inst_29312);
} else {
if((state_val_29318 === (2))){
var inst_29314 = (state_29317[(2)]);
var inst_29315 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29314) : f__$1.call(null,inst_29314));
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29317__$1,inst_29315);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28362__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28362__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null];
(statearr_29327[(0)] = cljs$core$async$transduce_$_state_machine__28362__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var cljs$core$async$transduce_$_state_machine__28362__auto____1 = (function (state_29317){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29317);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29328){var ex__28365__auto__ = e29328;
var statearr_29330_31735 = state_29317;
(statearr_29330_31735[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29317[(4)]))){
var statearr_29331_31736 = state_29317;
(statearr_29331_31736[(1)] = cljs.core.first((state_29317[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31737 = state_29317;
state_29317 = G__31737;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28362__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28362__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28362__auto____0;
cljs$core$async$transduce_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28362__auto____1;
return cljs$core$async$transduce_$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29336 = f__28568__auto__();
(statearr_29336[(6)] = c__28567__auto__);

return statearr_29336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
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
var G__29355 = arguments.length;
switch (G__29355) {
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
var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29366 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29387_31742 = state_29384__$1;
(statearr_29387_31742[(2)] = inst_29366);

(statearr_29387_31742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var inst_29359 = cljs.core.seq(coll);
var inst_29360 = inst_29359;
var state_29384__$1 = (function (){var statearr_29389 = state_29384;
(statearr_29389[(7)] = inst_29360);

return statearr_29389;
})();
var statearr_29390_31743 = state_29384__$1;
(statearr_29390_31743[(2)] = null);

(statearr_29390_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var inst_29360 = (state_29384[(7)]);
var inst_29364 = cljs.core.first(inst_29360);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29384__$1,(7),ch,inst_29364);
} else {
if((state_val_29385 === (13))){
var inst_29378 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29402_31745 = state_29384__$1;
(statearr_29402_31745[(2)] = inst_29378);

(statearr_29402_31745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29369 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29369)){
var statearr_29403_31746 = state_29384__$1;
(statearr_29403_31746[(1)] = (8));

} else {
var statearr_29404_31747 = state_29384__$1;
(statearr_29404_31747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (12))){
var state_29384__$1 = state_29384;
var statearr_29405_31748 = state_29384__$1;
(statearr_29405_31748[(2)] = null);

(statearr_29405_31748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var inst_29360 = (state_29384[(7)]);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29360)){
var statearr_29406_31749 = state_29384__$1;
(statearr_29406_31749[(1)] = (4));

} else {
var statearr_29407_31754 = state_29384__$1;
(statearr_29407_31754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (11))){
var inst_29375 = cljs.core.async.close_BANG_(ch);
var state_29384__$1 = state_29384;
var statearr_29408_31756 = state_29384__$1;
(statearr_29408_31756[(2)] = inst_29375);

(statearr_29408_31756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var state_29384__$1 = state_29384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29409_31757 = state_29384__$1;
(statearr_29409_31757[(1)] = (11));

} else {
var statearr_29410_31758 = state_29384__$1;
(statearr_29410_31758[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29360 = (state_29384[(7)]);
var state_29384__$1 = state_29384;
var statearr_29415_31759 = state_29384__$1;
(statearr_29415_31759[(2)] = inst_29360);

(statearr_29415_31759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29417_31760 = state_29384__$1;
(statearr_29417_31760[(2)] = inst_29380);

(statearr_29417_31760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29360 = (state_29384[(7)]);
var inst_29371 = cljs.core.next(inst_29360);
var inst_29360__$1 = inst_29371;
var state_29384__$1 = (function (){var statearr_29418 = state_29384;
(statearr_29418[(7)] = inst_29360__$1);

return statearr_29418;
})();
var statearr_29420_31769 = state_29384__$1;
(statearr_29420_31769[(2)] = null);

(statearr_29420_31769[(1)] = (2));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_29429 = [null,null,null,null,null,null,null,null];
(statearr_29429[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_29429[(1)] = (1));

return statearr_29429;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_29384){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29384);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29436){var ex__28365__auto__ = e29436;
var statearr_29437_31771 = state_29384;
(statearr_29437_31771[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29384[(4)]))){
var statearr_29438_31772 = state_29384;
(statearr_29438_31772[(1)] = cljs.core.first((state_29384[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31773 = state_29384;
state_29384 = G__31773;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29439 = f__28568__auto__();
(statearr_29439[(6)] = c__28567__auto__);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
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
var G__29441 = arguments.length;
switch (G__29441) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31779 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31779(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31798 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31798(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31806 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31806(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31811 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31811(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29486 = (function (ch,cs,meta29487){
this.ch = ch;
this.cs = cs;
this.meta29487 = meta29487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29488,meta29487__$1){
var self__ = this;
var _29488__$1 = this;
return (new cljs.core.async.t_cljs$core$async29486(self__.ch,self__.cs,meta29487__$1));
}));

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29488){
var self__ = this;
var _29488__$1 = this;
return self__.meta29487;
}));

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29487","meta29487",1684984506,null)], null);
}));

(cljs.core.async.t_cljs$core$async29486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29486");

(cljs.core.async.t_cljs$core$async29486.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29486.
 */
cljs.core.async.__GT_t_cljs$core$async29486 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29486(ch__$1,cs__$1,meta29487){
return (new cljs.core.async.t_cljs$core$async29486(ch__$1,cs__$1,meta29487));
});

}

return (new cljs.core.async.t_cljs$core$async29486(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28567__auto___31813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_29687){
var state_val_29688 = (state_29687[(1)]);
if((state_val_29688 === (7))){
var inst_29679 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29703_31814 = state_29687__$1;
(statearr_29703_31814[(2)] = inst_29679);

(statearr_29703_31814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (20))){
var inst_29562 = (state_29687[(7)]);
var inst_29574 = cljs.core.first(inst_29562);
var inst_29575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29574,(0),null);
var inst_29576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29574,(1),null);
var state_29687__$1 = (function (){var statearr_29704 = state_29687;
(statearr_29704[(8)] = inst_29575);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29576)){
var statearr_29709_31821 = state_29687__$1;
(statearr_29709_31821[(1)] = (22));

} else {
var statearr_29715_31822 = state_29687__$1;
(statearr_29715_31822[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (27))){
var inst_29613 = (state_29687[(9)]);
var inst_29605 = (state_29687[(10)]);
var inst_29531 = (state_29687[(11)]);
var inst_29607 = (state_29687[(12)]);
var inst_29613__$1 = cljs.core._nth(inst_29605,inst_29607);
var inst_29614 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29613__$1,inst_29531,done);
var state_29687__$1 = (function (){var statearr_29726 = state_29687;
(statearr_29726[(9)] = inst_29613__$1);

return statearr_29726;
})();
if(cljs.core.truth_(inst_29614)){
var statearr_29728_31828 = state_29687__$1;
(statearr_29728_31828[(1)] = (30));

} else {
var statearr_29733_31829 = state_29687__$1;
(statearr_29733_31829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (1))){
var state_29687__$1 = state_29687;
var statearr_29734_31830 = state_29687__$1;
(statearr_29734_31830[(2)] = null);

(statearr_29734_31830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (24))){
var inst_29562 = (state_29687[(7)]);
var inst_29581 = (state_29687[(2)]);
var inst_29582 = cljs.core.next(inst_29562);
var inst_29540 = inst_29582;
var inst_29541 = null;
var inst_29542 = (0);
var inst_29543 = (0);
var state_29687__$1 = (function (){var statearr_29735 = state_29687;
(statearr_29735[(13)] = inst_29542);

(statearr_29735[(14)] = inst_29543);

(statearr_29735[(15)] = inst_29581);

(statearr_29735[(16)] = inst_29540);

(statearr_29735[(17)] = inst_29541);

return statearr_29735;
})();
var statearr_29740_31831 = state_29687__$1;
(statearr_29740_31831[(2)] = null);

(statearr_29740_31831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (39))){
var state_29687__$1 = state_29687;
var statearr_29756_31832 = state_29687__$1;
(statearr_29756_31832[(2)] = null);

(statearr_29756_31832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (4))){
var inst_29531 = (state_29687[(11)]);
var inst_29531__$1 = (state_29687[(2)]);
var inst_29532 = (inst_29531__$1 == null);
var state_29687__$1 = (function (){var statearr_29762 = state_29687;
(statearr_29762[(11)] = inst_29531__$1);

return statearr_29762;
})();
if(cljs.core.truth_(inst_29532)){
var statearr_29763_31833 = state_29687__$1;
(statearr_29763_31833[(1)] = (5));

} else {
var statearr_29765_31834 = state_29687__$1;
(statearr_29765_31834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (15))){
var inst_29542 = (state_29687[(13)]);
var inst_29543 = (state_29687[(14)]);
var inst_29540 = (state_29687[(16)]);
var inst_29541 = (state_29687[(17)]);
var inst_29558 = (state_29687[(2)]);
var inst_29559 = (inst_29543 + (1));
var tmp29746 = inst_29542;
var tmp29747 = inst_29540;
var tmp29748 = inst_29541;
var inst_29540__$1 = tmp29747;
var inst_29541__$1 = tmp29748;
var inst_29542__$1 = tmp29746;
var inst_29543__$1 = inst_29559;
var state_29687__$1 = (function (){var statearr_29772 = state_29687;
(statearr_29772[(18)] = inst_29558);

(statearr_29772[(13)] = inst_29542__$1);

(statearr_29772[(14)] = inst_29543__$1);

(statearr_29772[(16)] = inst_29540__$1);

(statearr_29772[(17)] = inst_29541__$1);

return statearr_29772;
})();
var statearr_29773_31835 = state_29687__$1;
(statearr_29773_31835[(2)] = null);

(statearr_29773_31835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (21))){
var inst_29586 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29778_31836 = state_29687__$1;
(statearr_29778_31836[(2)] = inst_29586);

(statearr_29778_31836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (31))){
var inst_29613 = (state_29687[(9)]);
var inst_29618 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29613);
var state_29687__$1 = state_29687;
var statearr_29780_31841 = state_29687__$1;
(statearr_29780_31841[(2)] = inst_29618);

(statearr_29780_31841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (32))){
var inst_29605 = (state_29687[(10)]);
var inst_29604 = (state_29687[(19)]);
var inst_29606 = (state_29687[(20)]);
var inst_29607 = (state_29687[(12)]);
var inst_29620 = (state_29687[(2)]);
var inst_29625 = (inst_29607 + (1));
var tmp29775 = inst_29605;
var tmp29776 = inst_29604;
var tmp29777 = inst_29606;
var inst_29604__$1 = tmp29776;
var inst_29605__$1 = tmp29775;
var inst_29606__$1 = tmp29777;
var inst_29607__$1 = inst_29625;
var state_29687__$1 = (function (){var statearr_29783 = state_29687;
(statearr_29783[(10)] = inst_29605__$1);

(statearr_29783[(19)] = inst_29604__$1);

(statearr_29783[(21)] = inst_29620);

(statearr_29783[(20)] = inst_29606__$1);

(statearr_29783[(12)] = inst_29607__$1);

return statearr_29783;
})();
var statearr_29786_31842 = state_29687__$1;
(statearr_29786_31842[(2)] = null);

(statearr_29786_31842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (40))){
var inst_29645 = (state_29687[(22)]);
var inst_29653 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29645);
var state_29687__$1 = state_29687;
var statearr_29787_31843 = state_29687__$1;
(statearr_29787_31843[(2)] = inst_29653);

(statearr_29787_31843[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (33))){
var inst_29628 = (state_29687[(23)]);
var inst_29631 = cljs.core.chunked_seq_QMARK_(inst_29628);
var state_29687__$1 = state_29687;
if(inst_29631){
var statearr_29789_31848 = state_29687__$1;
(statearr_29789_31848[(1)] = (36));

} else {
var statearr_29790_31851 = state_29687__$1;
(statearr_29790_31851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (13))){
var inst_29552 = (state_29687[(24)]);
var inst_29555 = cljs.core.async.close_BANG_(inst_29552);
var state_29687__$1 = state_29687;
var statearr_29791_31852 = state_29687__$1;
(statearr_29791_31852[(2)] = inst_29555);

(statearr_29791_31852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (22))){
var inst_29575 = (state_29687[(8)]);
var inst_29578 = cljs.core.async.close_BANG_(inst_29575);
var state_29687__$1 = state_29687;
var statearr_29792_31855 = state_29687__$1;
(statearr_29792_31855[(2)] = inst_29578);

(statearr_29792_31855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (36))){
var inst_29628 = (state_29687[(23)]);
var inst_29637 = cljs.core.chunk_first(inst_29628);
var inst_29638 = cljs.core.chunk_rest(inst_29628);
var inst_29640 = cljs.core.count(inst_29637);
var inst_29604 = inst_29638;
var inst_29605 = inst_29637;
var inst_29606 = inst_29640;
var inst_29607 = (0);
var state_29687__$1 = (function (){var statearr_29793 = state_29687;
(statearr_29793[(10)] = inst_29605);

(statearr_29793[(19)] = inst_29604);

(statearr_29793[(20)] = inst_29606);

(statearr_29793[(12)] = inst_29607);

return statearr_29793;
})();
var statearr_29794_31857 = state_29687__$1;
(statearr_29794_31857[(2)] = null);

(statearr_29794_31857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (41))){
var inst_29628 = (state_29687[(23)]);
var inst_29655 = (state_29687[(2)]);
var inst_29657 = cljs.core.next(inst_29628);
var inst_29604 = inst_29657;
var inst_29605 = null;
var inst_29606 = (0);
var inst_29607 = (0);
var state_29687__$1 = (function (){var statearr_29799 = state_29687;
(statearr_29799[(10)] = inst_29605);

(statearr_29799[(19)] = inst_29604);

(statearr_29799[(25)] = inst_29655);

(statearr_29799[(20)] = inst_29606);

(statearr_29799[(12)] = inst_29607);

return statearr_29799;
})();
var statearr_29802_31859 = state_29687__$1;
(statearr_29802_31859[(2)] = null);

(statearr_29802_31859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (43))){
var state_29687__$1 = state_29687;
var statearr_29804_31865 = state_29687__$1;
(statearr_29804_31865[(2)] = null);

(statearr_29804_31865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (29))){
var inst_29666 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29811_31866 = state_29687__$1;
(statearr_29811_31866[(2)] = inst_29666);

(statearr_29811_31866[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (44))){
var inst_29676 = (state_29687[(2)]);
var state_29687__$1 = (function (){var statearr_29817 = state_29687;
(statearr_29817[(26)] = inst_29676);

return statearr_29817;
})();
var statearr_29818_31867 = state_29687__$1;
(statearr_29818_31867[(2)] = null);

(statearr_29818_31867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (6))){
var inst_29596 = (state_29687[(27)]);
var inst_29595 = cljs.core.deref(cs);
var inst_29596__$1 = cljs.core.keys(inst_29595);
var inst_29597 = cljs.core.count(inst_29596__$1);
var inst_29598 = cljs.core.reset_BANG_(dctr,inst_29597);
var inst_29603 = cljs.core.seq(inst_29596__$1);
var inst_29604 = inst_29603;
var inst_29605 = null;
var inst_29606 = (0);
var inst_29607 = (0);
var state_29687__$1 = (function (){var statearr_29826 = state_29687;
(statearr_29826[(10)] = inst_29605);

(statearr_29826[(19)] = inst_29604);

(statearr_29826[(27)] = inst_29596__$1);

(statearr_29826[(28)] = inst_29598);

(statearr_29826[(20)] = inst_29606);

(statearr_29826[(12)] = inst_29607);

return statearr_29826;
})();
var statearr_29827_31869 = state_29687__$1;
(statearr_29827_31869[(2)] = null);

(statearr_29827_31869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (28))){
var inst_29604 = (state_29687[(19)]);
var inst_29628 = (state_29687[(23)]);
var inst_29628__$1 = cljs.core.seq(inst_29604);
var state_29687__$1 = (function (){var statearr_29830 = state_29687;
(statearr_29830[(23)] = inst_29628__$1);

return statearr_29830;
})();
if(inst_29628__$1){
var statearr_29831_31871 = state_29687__$1;
(statearr_29831_31871[(1)] = (33));

} else {
var statearr_29833_31872 = state_29687__$1;
(statearr_29833_31872[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (25))){
var inst_29606 = (state_29687[(20)]);
var inst_29607 = (state_29687[(12)]);
var inst_29609 = (inst_29607 < inst_29606);
var inst_29610 = inst_29609;
var state_29687__$1 = state_29687;
if(cljs.core.truth_(inst_29610)){
var statearr_29835_31876 = state_29687__$1;
(statearr_29835_31876[(1)] = (27));

} else {
var statearr_29838_31877 = state_29687__$1;
(statearr_29838_31877[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (34))){
var state_29687__$1 = state_29687;
var statearr_29839_31878 = state_29687__$1;
(statearr_29839_31878[(2)] = null);

(statearr_29839_31878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (17))){
var state_29687__$1 = state_29687;
var statearr_29841_31880 = state_29687__$1;
(statearr_29841_31880[(2)] = null);

(statearr_29841_31880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (3))){
var inst_29681 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29687__$1,inst_29681);
} else {
if((state_val_29688 === (12))){
var inst_29591 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29842_31882 = state_29687__$1;
(statearr_29842_31882[(2)] = inst_29591);

(statearr_29842_31882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (2))){
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29687__$1,(4),ch);
} else {
if((state_val_29688 === (23))){
var state_29687__$1 = state_29687;
var statearr_29848_31883 = state_29687__$1;
(statearr_29848_31883[(2)] = null);

(statearr_29848_31883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (35))){
var inst_29664 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29858_31884 = state_29687__$1;
(statearr_29858_31884[(2)] = inst_29664);

(statearr_29858_31884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (19))){
var inst_29562 = (state_29687[(7)]);
var inst_29566 = cljs.core.chunk_first(inst_29562);
var inst_29567 = cljs.core.chunk_rest(inst_29562);
var inst_29568 = cljs.core.count(inst_29566);
var inst_29540 = inst_29567;
var inst_29541 = inst_29566;
var inst_29542 = inst_29568;
var inst_29543 = (0);
var state_29687__$1 = (function (){var statearr_29860 = state_29687;
(statearr_29860[(13)] = inst_29542);

(statearr_29860[(14)] = inst_29543);

(statearr_29860[(16)] = inst_29540);

(statearr_29860[(17)] = inst_29541);

return statearr_29860;
})();
var statearr_29862_31905 = state_29687__$1;
(statearr_29862_31905[(2)] = null);

(statearr_29862_31905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (11))){
var inst_29562 = (state_29687[(7)]);
var inst_29540 = (state_29687[(16)]);
var inst_29562__$1 = cljs.core.seq(inst_29540);
var state_29687__$1 = (function (){var statearr_29866 = state_29687;
(statearr_29866[(7)] = inst_29562__$1);

return statearr_29866;
})();
if(inst_29562__$1){
var statearr_29867_31907 = state_29687__$1;
(statearr_29867_31907[(1)] = (16));

} else {
var statearr_29868_31908 = state_29687__$1;
(statearr_29868_31908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (9))){
var inst_29593 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29871_31909 = state_29687__$1;
(statearr_29871_31909[(2)] = inst_29593);

(statearr_29871_31909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (5))){
var inst_29538 = cljs.core.deref(cs);
var inst_29539 = cljs.core.seq(inst_29538);
var inst_29540 = inst_29539;
var inst_29541 = null;
var inst_29542 = (0);
var inst_29543 = (0);
var state_29687__$1 = (function (){var statearr_29873 = state_29687;
(statearr_29873[(13)] = inst_29542);

(statearr_29873[(14)] = inst_29543);

(statearr_29873[(16)] = inst_29540);

(statearr_29873[(17)] = inst_29541);

return statearr_29873;
})();
var statearr_29874_31915 = state_29687__$1;
(statearr_29874_31915[(2)] = null);

(statearr_29874_31915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (14))){
var state_29687__$1 = state_29687;
var statearr_29875_31917 = state_29687__$1;
(statearr_29875_31917[(2)] = null);

(statearr_29875_31917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (45))){
var inst_29673 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29876_31918 = state_29687__$1;
(statearr_29876_31918[(2)] = inst_29673);

(statearr_29876_31918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (26))){
var inst_29596 = (state_29687[(27)]);
var inst_29669 = (state_29687[(2)]);
var inst_29670 = cljs.core.seq(inst_29596);
var state_29687__$1 = (function (){var statearr_29877 = state_29687;
(statearr_29877[(29)] = inst_29669);

return statearr_29877;
})();
if(inst_29670){
var statearr_29878_31919 = state_29687__$1;
(statearr_29878_31919[(1)] = (42));

} else {
var statearr_29879_31920 = state_29687__$1;
(statearr_29879_31920[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (16))){
var inst_29562 = (state_29687[(7)]);
var inst_29564 = cljs.core.chunked_seq_QMARK_(inst_29562);
var state_29687__$1 = state_29687;
if(inst_29564){
var statearr_29884_31921 = state_29687__$1;
(statearr_29884_31921[(1)] = (19));

} else {
var statearr_29885_31922 = state_29687__$1;
(statearr_29885_31922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (38))){
var inst_29661 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29886_31927 = state_29687__$1;
(statearr_29886_31927[(2)] = inst_29661);

(statearr_29886_31927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (30))){
var state_29687__$1 = state_29687;
var statearr_29888_31928 = state_29687__$1;
(statearr_29888_31928[(2)] = null);

(statearr_29888_31928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (10))){
var inst_29543 = (state_29687[(14)]);
var inst_29541 = (state_29687[(17)]);
var inst_29551 = cljs.core._nth(inst_29541,inst_29543);
var inst_29552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29551,(0),null);
var inst_29553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29551,(1),null);
var state_29687__$1 = (function (){var statearr_29891 = state_29687;
(statearr_29891[(24)] = inst_29552);

return statearr_29891;
})();
if(cljs.core.truth_(inst_29553)){
var statearr_29893_31929 = state_29687__$1;
(statearr_29893_31929[(1)] = (13));

} else {
var statearr_29895_31930 = state_29687__$1;
(statearr_29895_31930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (18))){
var inst_29589 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
var statearr_29896_31931 = state_29687__$1;
(statearr_29896_31931[(2)] = inst_29589);

(statearr_29896_31931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (42))){
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29687__$1,(45),dchan);
} else {
if((state_val_29688 === (37))){
var inst_29628 = (state_29687[(23)]);
var inst_29531 = (state_29687[(11)]);
var inst_29645 = (state_29687[(22)]);
var inst_29645__$1 = cljs.core.first(inst_29628);
var inst_29650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29645__$1,inst_29531,done);
var state_29687__$1 = (function (){var statearr_29897 = state_29687;
(statearr_29897[(22)] = inst_29645__$1);

return statearr_29897;
})();
if(cljs.core.truth_(inst_29650)){
var statearr_29898_31941 = state_29687__$1;
(statearr_29898_31941[(1)] = (39));

} else {
var statearr_29899_31942 = state_29687__$1;
(statearr_29899_31942[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29688 === (8))){
var inst_29542 = (state_29687[(13)]);
var inst_29543 = (state_29687[(14)]);
var inst_29545 = (inst_29543 < inst_29542);
var inst_29546 = inst_29545;
var state_29687__$1 = state_29687;
if(cljs.core.truth_(inst_29546)){
var statearr_29901_31943 = state_29687__$1;
(statearr_29901_31943[(1)] = (10));

} else {
var statearr_29903_31944 = state_29687__$1;
(statearr_29903_31944[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28362__auto__ = null;
var cljs$core$async$mult_$_state_machine__28362__auto____0 = (function (){
var statearr_29905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29905[(0)] = cljs$core$async$mult_$_state_machine__28362__auto__);

(statearr_29905[(1)] = (1));

return statearr_29905;
});
var cljs$core$async$mult_$_state_machine__28362__auto____1 = (function (state_29687){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_29687);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e29906){var ex__28365__auto__ = e29906;
var statearr_29907_31948 = state_29687;
(statearr_29907_31948[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_29687[(4)]))){
var statearr_29909_31949 = state_29687;
(statearr_29909_31949[(1)] = cljs.core.first((state_29687[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31950 = state_29687;
state_29687 = G__31950;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28362__auto__ = function(state_29687){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28362__auto____1.call(this,state_29687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28362__auto____0;
cljs$core$async$mult_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28362__auto____1;
return cljs$core$async$mult_$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_29912 = f__28568__auto__();
(statearr_29912[(6)] = c__28567__auto___31813);

return statearr_29912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var G__29915 = arguments.length;
switch (G__29915) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_31952 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_31952(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31953 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_31953(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31954 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31954(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31957 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_31957(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31966 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31966(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31967 = arguments.length;
var i__4772__auto___31968 = (0);
while(true){
if((i__4772__auto___31968 < len__4771__auto___31967)){
args__4777__auto__.push((arguments[i__4772__auto___31968]));

var G__31969 = (i__4772__auto___31968 + (1));
i__4772__auto___31968 = G__31969;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29958){
var map__29959 = p__29958;
var map__29959__$1 = cljs.core.__destructure_map(map__29959);
var opts = map__29959__$1;
var statearr_29962_31981 = state;
(statearr_29962_31981[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29972_31982 = state;
(statearr_29972_31982[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29973_31983 = state;
(statearr_29973_31983[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29951){
var G__29952 = cljs.core.first(seq29951);
var seq29951__$1 = cljs.core.next(seq29951);
var G__29953 = cljs.core.first(seq29951__$1);
var seq29951__$2 = cljs.core.next(seq29951__$1);
var G__29954 = cljs.core.first(seq29951__$2);
var seq29951__$3 = cljs.core.next(seq29951__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29952,G__29953,G__29954,seq29951__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29980 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29981){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29981 = meta29981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29982,meta29981__$1){
var self__ = this;
var _29982__$1 = this;
return (new cljs.core.async.t_cljs$core$async29980(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29981__$1));
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29982){
var self__ = this;
var _29982__$1 = this;
return self__.meta29981;
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29981","meta29981",1055724073,null)], null);
}));

(cljs.core.async.t_cljs$core$async29980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29980");

(cljs.core.async.t_cljs$core$async29980.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async29980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29980.
 */
cljs.core.async.__GT_t_cljs$core$async29980 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29980(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29981){
return (new cljs.core.async.t_cljs$core$async29980(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29981));
});

}

return (new cljs.core.async.t_cljs$core$async29980(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28567__auto___32036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30071){
var state_val_30072 = (state_30071[(1)]);
if((state_val_30072 === (7))){
var inst_30067 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
var statearr_30073_32037 = state_30071__$1;
(statearr_30073_32037[(2)] = inst_30067);

(statearr_30073_32037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (20))){
var inst_30061 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
var statearr_30075_32038 = state_30071__$1;
(statearr_30075_32038[(2)] = inst_30061);

(statearr_30075_32038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (1))){
var inst_30007 = calc_state();
var inst_30008 = cljs.core.__destructure_map(inst_30007);
var inst_30009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30008,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30008,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30008,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30012 = inst_30007;
var state_30071__$1 = (function (){var statearr_30079 = state_30071;
(statearr_30079[(7)] = inst_30011);

(statearr_30079[(8)] = inst_30010);

(statearr_30079[(9)] = inst_30012);

(statearr_30079[(10)] = inst_30009);

return statearr_30079;
})();
var statearr_30080_32039 = state_30071__$1;
(statearr_30080_32039[(2)] = null);

(statearr_30080_32039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (4))){
var inst_30025 = (state_30071[(11)]);
var inst_30024 = (state_30071[(12)]);
var inst_30023 = (state_30071[(2)]);
var inst_30024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30023,(0),null);
var inst_30025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30023,(1),null);
var inst_30027 = (inst_30024__$1 == null);
var inst_30028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30025__$1,change);
var inst_30029 = ((inst_30027) || (inst_30028));
var state_30071__$1 = (function (){var statearr_30086 = state_30071;
(statearr_30086[(11)] = inst_30025__$1);

(statearr_30086[(12)] = inst_30024__$1);

return statearr_30086;
})();
if(cljs.core.truth_(inst_30029)){
var statearr_30087_32043 = state_30071__$1;
(statearr_30087_32043[(1)] = (5));

} else {
var statearr_30088_32044 = state_30071__$1;
(statearr_30088_32044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (15))){
var inst_30015 = (state_30071[(13)]);
var inst_30012 = inst_30015;
var state_30071__$1 = (function (){var statearr_30095 = state_30071;
(statearr_30095[(9)] = inst_30012);

return statearr_30095;
})();
var statearr_30096_32045 = state_30071__$1;
(statearr_30096_32045[(2)] = null);

(statearr_30096_32045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (13))){
var inst_30053 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
if(cljs.core.truth_(inst_30053)){
var statearr_30097_32046 = state_30071__$1;
(statearr_30097_32046[(1)] = (14));

} else {
var statearr_30100_32047 = state_30071__$1;
(statearr_30100_32047[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (6))){
var inst_30045 = (state_30071[(14)]);
var inst_30016 = (state_30071[(15)]);
var inst_30025 = (state_30071[(11)]);
var inst_30045__$1 = (inst_30016.cljs$core$IFn$_invoke$arity$1 ? inst_30016.cljs$core$IFn$_invoke$arity$1(inst_30025) : inst_30016.call(null,inst_30025));
var state_30071__$1 = (function (){var statearr_30102 = state_30071;
(statearr_30102[(14)] = inst_30045__$1);

return statearr_30102;
})();
if(cljs.core.truth_(inst_30045__$1)){
var statearr_30103_32052 = state_30071__$1;
(statearr_30103_32052[(1)] = (11));

} else {
var statearr_30104_32053 = state_30071__$1;
(statearr_30104_32053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (17))){
var inst_30056 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
if(cljs.core.truth_(inst_30056)){
var statearr_30105_32057 = state_30071__$1;
(statearr_30105_32057[(1)] = (18));

} else {
var statearr_30106_32058 = state_30071__$1;
(statearr_30106_32058[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (3))){
var inst_30069 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30071__$1,inst_30069);
} else {
if((state_val_30072 === (12))){
var inst_30016 = (state_30071[(15)]);
var inst_30025 = (state_30071[(11)]);
var inst_30017 = (state_30071[(16)]);
var inst_30048 = cljs.core.empty_QMARK_(inst_30016);
var inst_30049 = (inst_30017.cljs$core$IFn$_invoke$arity$1 ? inst_30017.cljs$core$IFn$_invoke$arity$1(inst_30025) : inst_30017.call(null,inst_30025));
var inst_30050 = cljs.core.not(inst_30049);
var inst_30051 = ((inst_30048) && (inst_30050));
var state_30071__$1 = state_30071;
var statearr_30108_32089 = state_30071__$1;
(statearr_30108_32089[(2)] = inst_30051);

(statearr_30108_32089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (2))){
var inst_30015 = (state_30071[(13)]);
var inst_30012 = (state_30071[(9)]);
var inst_30015__$1 = cljs.core.__destructure_map(inst_30012);
var inst_30016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30071__$1 = (function (){var statearr_30110 = state_30071;
(statearr_30110[(13)] = inst_30015__$1);

(statearr_30110[(15)] = inst_30016);

(statearr_30110[(16)] = inst_30017);

return statearr_30110;
})();
return cljs.core.async.ioc_alts_BANG_(state_30071__$1,(4),inst_30018);
} else {
if((state_val_30072 === (19))){
var state_30071__$1 = state_30071;
var statearr_30111_32090 = state_30071__$1;
(statearr_30111_32090[(2)] = null);

(statearr_30111_32090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (11))){
var inst_30045 = (state_30071[(14)]);
var state_30071__$1 = state_30071;
var statearr_30112_32091 = state_30071__$1;
(statearr_30112_32091[(2)] = inst_30045);

(statearr_30112_32091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (9))){
var state_30071__$1 = state_30071;
var statearr_30117_32092 = state_30071__$1;
(statearr_30117_32092[(2)] = null);

(statearr_30117_32092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (5))){
var inst_30024 = (state_30071[(12)]);
var inst_30031 = (inst_30024 == null);
var state_30071__$1 = state_30071;
if(cljs.core.truth_(inst_30031)){
var statearr_30118_32093 = state_30071__$1;
(statearr_30118_32093[(1)] = (8));

} else {
var statearr_30120_32094 = state_30071__$1;
(statearr_30120_32094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (14))){
var inst_30024 = (state_30071[(12)]);
var state_30071__$1 = state_30071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30071__$1,(17),out,inst_30024);
} else {
if((state_val_30072 === (16))){
var inst_30065 = (state_30071[(2)]);
var state_30071__$1 = state_30071;
var statearr_30138_32098 = state_30071__$1;
(statearr_30138_32098[(2)] = inst_30065);

(statearr_30138_32098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (10))){
var inst_30038 = (state_30071[(2)]);
var inst_30041 = calc_state();
var inst_30012 = inst_30041;
var state_30071__$1 = (function (){var statearr_30139 = state_30071;
(statearr_30139[(17)] = inst_30038);

(statearr_30139[(9)] = inst_30012);

return statearr_30139;
})();
var statearr_30140_32099 = state_30071__$1;
(statearr_30140_32099[(2)] = null);

(statearr_30140_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (18))){
var inst_30015 = (state_30071[(13)]);
var inst_30012 = inst_30015;
var state_30071__$1 = (function (){var statearr_30141 = state_30071;
(statearr_30141[(9)] = inst_30012);

return statearr_30141;
})();
var statearr_30142_32103 = state_30071__$1;
(statearr_30142_32103[(2)] = null);

(statearr_30142_32103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (8))){
var inst_30025 = (state_30071[(11)]);
var inst_30033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30025);
var state_30071__$1 = state_30071;
var statearr_30143_32104 = state_30071__$1;
(statearr_30143_32104[(2)] = inst_30033);

(statearr_30143_32104[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28362__auto__ = null;
var cljs$core$async$mix_$_state_machine__28362__auto____0 = (function (){
var statearr_30146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30146[(0)] = cljs$core$async$mix_$_state_machine__28362__auto__);

(statearr_30146[(1)] = (1));

return statearr_30146;
});
var cljs$core$async$mix_$_state_machine__28362__auto____1 = (function (state_30071){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30071);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30150){var ex__28365__auto__ = e30150;
var statearr_30151_32106 = state_30071;
(statearr_30151_32106[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30071[(4)]))){
var statearr_30152_32107 = state_30071;
(statearr_30152_32107[(1)] = cljs.core.first((state_30071[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32156 = state_30071;
state_30071 = G__32156;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28362__auto__ = function(state_30071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28362__auto____1.call(this,state_30071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28362__auto____0;
cljs$core$async$mix_$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28362__auto____1;
return cljs$core$async$mix_$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30153 = f__28568__auto__();
(statearr_30153[(6)] = c__28567__auto___32036);

return statearr_30153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32160 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32160(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32164 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32164(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32179 = (function() {
var G__32180 = null;
var G__32180__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32180__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32180 = function(p,v){
switch(arguments.length){
case 1:
return G__32180__1.call(this,p);
case 2:
return G__32180__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32180.cljs$core$IFn$_invoke$arity$1 = G__32180__1;
G__32180.cljs$core$IFn$_invoke$arity$2 = G__32180__2;
return G__32180;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30181 = arguments.length;
switch (G__30181) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32179(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32179(p,v);
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
var G__30190 = arguments.length;
switch (G__30190) {
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
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30187_SHARP_){
if(cljs.core.truth_((p1__30187_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30187_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30187_SHARP_.call(null,topic)))){
return p1__30187_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30187_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30203 = meta30203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30204,meta30203__$1){
var self__ = this;
var _30204__$1 = this;
return (new cljs.core.async.t_cljs$core$async30202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30203__$1));
}));

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30204){
var self__ = this;
var _30204__$1 = this;
return self__.meta30203;
}));

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30203","meta30203",242735663,null)], null);
}));

(cljs.core.async.t_cljs$core$async30202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30202");

(cljs.core.async.t_cljs$core$async30202.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30202.
 */
cljs.core.async.__GT_t_cljs$core$async30202 = (function cljs$core$async$__GT_t_cljs$core$async30202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30203){
return (new cljs.core.async.t_cljs$core$async30202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30203));
});

}

return (new cljs.core.async.t_cljs$core$async30202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28567__auto___32210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30302){
var state_val_30303 = (state_30302[(1)]);
if((state_val_30303 === (7))){
var inst_30296 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30304_32213 = state_30302__$1;
(statearr_30304_32213[(2)] = inst_30296);

(statearr_30304_32213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (20))){
var state_30302__$1 = state_30302;
var statearr_30305_32215 = state_30302__$1;
(statearr_30305_32215[(2)] = null);

(statearr_30305_32215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (1))){
var state_30302__$1 = state_30302;
var statearr_30306_32234 = state_30302__$1;
(statearr_30306_32234[(2)] = null);

(statearr_30306_32234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (24))){
var inst_30277 = (state_30302[(7)]);
var inst_30288 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30277);
var state_30302__$1 = state_30302;
var statearr_30307_32235 = state_30302__$1;
(statearr_30307_32235[(2)] = inst_30288);

(statearr_30307_32235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (4))){
var inst_30229 = (state_30302[(8)]);
var inst_30229__$1 = (state_30302[(2)]);
var inst_30230 = (inst_30229__$1 == null);
var state_30302__$1 = (function (){var statearr_30308 = state_30302;
(statearr_30308[(8)] = inst_30229__$1);

return statearr_30308;
})();
if(cljs.core.truth_(inst_30230)){
var statearr_30309_32237 = state_30302__$1;
(statearr_30309_32237[(1)] = (5));

} else {
var statearr_30310_32238 = state_30302__$1;
(statearr_30310_32238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (15))){
var inst_30271 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30311_32239 = state_30302__$1;
(statearr_30311_32239[(2)] = inst_30271);

(statearr_30311_32239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (21))){
var inst_30293 = (state_30302[(2)]);
var state_30302__$1 = (function (){var statearr_30312 = state_30302;
(statearr_30312[(9)] = inst_30293);

return statearr_30312;
})();
var statearr_30313_32241 = state_30302__$1;
(statearr_30313_32241[(2)] = null);

(statearr_30313_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (13))){
var inst_30253 = (state_30302[(10)]);
var inst_30255 = cljs.core.chunked_seq_QMARK_(inst_30253);
var state_30302__$1 = state_30302;
if(inst_30255){
var statearr_30314_32242 = state_30302__$1;
(statearr_30314_32242[(1)] = (16));

} else {
var statearr_30315_32243 = state_30302__$1;
(statearr_30315_32243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (22))){
var inst_30285 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
if(cljs.core.truth_(inst_30285)){
var statearr_30316_32244 = state_30302__$1;
(statearr_30316_32244[(1)] = (23));

} else {
var statearr_30317_32245 = state_30302__$1;
(statearr_30317_32245[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (6))){
var inst_30277 = (state_30302[(7)]);
var inst_30279 = (state_30302[(11)]);
var inst_30229 = (state_30302[(8)]);
var inst_30277__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30229) : topic_fn.call(null,inst_30229));
var inst_30278 = cljs.core.deref(mults);
var inst_30279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30278,inst_30277__$1);
var state_30302__$1 = (function (){var statearr_30318 = state_30302;
(statearr_30318[(7)] = inst_30277__$1);

(statearr_30318[(11)] = inst_30279__$1);

return statearr_30318;
})();
if(cljs.core.truth_(inst_30279__$1)){
var statearr_30319_32246 = state_30302__$1;
(statearr_30319_32246[(1)] = (19));

} else {
var statearr_30326_32247 = state_30302__$1;
(statearr_30326_32247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (25))){
var inst_30290 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30327_32250 = state_30302__$1;
(statearr_30327_32250[(2)] = inst_30290);

(statearr_30327_32250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (17))){
var inst_30253 = (state_30302[(10)]);
var inst_30262 = cljs.core.first(inst_30253);
var inst_30263 = cljs.core.async.muxch_STAR_(inst_30262);
var inst_30264 = cljs.core.async.close_BANG_(inst_30263);
var inst_30265 = cljs.core.next(inst_30253);
var inst_30239 = inst_30265;
var inst_30240 = null;
var inst_30241 = (0);
var inst_30242 = (0);
var state_30302__$1 = (function (){var statearr_30328 = state_30302;
(statearr_30328[(12)] = inst_30242);

(statearr_30328[(13)] = inst_30240);

(statearr_30328[(14)] = inst_30239);

(statearr_30328[(15)] = inst_30264);

(statearr_30328[(16)] = inst_30241);

return statearr_30328;
})();
var statearr_30329_32251 = state_30302__$1;
(statearr_30329_32251[(2)] = null);

(statearr_30329_32251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (3))){
var inst_30298 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30302__$1,inst_30298);
} else {
if((state_val_30303 === (12))){
var inst_30273 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30330_32252 = state_30302__$1;
(statearr_30330_32252[(2)] = inst_30273);

(statearr_30330_32252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (2))){
var state_30302__$1 = state_30302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30302__$1,(4),ch);
} else {
if((state_val_30303 === (23))){
var state_30302__$1 = state_30302;
var statearr_30331_32281 = state_30302__$1;
(statearr_30331_32281[(2)] = null);

(statearr_30331_32281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (19))){
var inst_30279 = (state_30302[(11)]);
var inst_30229 = (state_30302[(8)]);
var inst_30283 = cljs.core.async.muxch_STAR_(inst_30279);
var state_30302__$1 = state_30302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30302__$1,(22),inst_30283,inst_30229);
} else {
if((state_val_30303 === (11))){
var inst_30253 = (state_30302[(10)]);
var inst_30239 = (state_30302[(14)]);
var inst_30253__$1 = cljs.core.seq(inst_30239);
var state_30302__$1 = (function (){var statearr_30332 = state_30302;
(statearr_30332[(10)] = inst_30253__$1);

return statearr_30332;
})();
if(inst_30253__$1){
var statearr_30333_32289 = state_30302__$1;
(statearr_30333_32289[(1)] = (13));

} else {
var statearr_30334_32290 = state_30302__$1;
(statearr_30334_32290[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (9))){
var inst_30275 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30335_32295 = state_30302__$1;
(statearr_30335_32295[(2)] = inst_30275);

(statearr_30335_32295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (5))){
var inst_30236 = cljs.core.deref(mults);
var inst_30237 = cljs.core.vals(inst_30236);
var inst_30238 = cljs.core.seq(inst_30237);
var inst_30239 = inst_30238;
var inst_30240 = null;
var inst_30241 = (0);
var inst_30242 = (0);
var state_30302__$1 = (function (){var statearr_30336 = state_30302;
(statearr_30336[(12)] = inst_30242);

(statearr_30336[(13)] = inst_30240);

(statearr_30336[(14)] = inst_30239);

(statearr_30336[(16)] = inst_30241);

return statearr_30336;
})();
var statearr_30337_32299 = state_30302__$1;
(statearr_30337_32299[(2)] = null);

(statearr_30337_32299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (14))){
var state_30302__$1 = state_30302;
var statearr_30341_32301 = state_30302__$1;
(statearr_30341_32301[(2)] = null);

(statearr_30341_32301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (16))){
var inst_30253 = (state_30302[(10)]);
var inst_30257 = cljs.core.chunk_first(inst_30253);
var inst_30258 = cljs.core.chunk_rest(inst_30253);
var inst_30259 = cljs.core.count(inst_30257);
var inst_30239 = inst_30258;
var inst_30240 = inst_30257;
var inst_30241 = inst_30259;
var inst_30242 = (0);
var state_30302__$1 = (function (){var statearr_30342 = state_30302;
(statearr_30342[(12)] = inst_30242);

(statearr_30342[(13)] = inst_30240);

(statearr_30342[(14)] = inst_30239);

(statearr_30342[(16)] = inst_30241);

return statearr_30342;
})();
var statearr_30365_32304 = state_30302__$1;
(statearr_30365_32304[(2)] = null);

(statearr_30365_32304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (10))){
var inst_30242 = (state_30302[(12)]);
var inst_30240 = (state_30302[(13)]);
var inst_30239 = (state_30302[(14)]);
var inst_30241 = (state_30302[(16)]);
var inst_30247 = cljs.core._nth(inst_30240,inst_30242);
var inst_30248 = cljs.core.async.muxch_STAR_(inst_30247);
var inst_30249 = cljs.core.async.close_BANG_(inst_30248);
var inst_30250 = (inst_30242 + (1));
var tmp30338 = inst_30240;
var tmp30339 = inst_30239;
var tmp30340 = inst_30241;
var inst_30239__$1 = tmp30339;
var inst_30240__$1 = tmp30338;
var inst_30241__$1 = tmp30340;
var inst_30242__$1 = inst_30250;
var state_30302__$1 = (function (){var statearr_30369 = state_30302;
(statearr_30369[(12)] = inst_30242__$1);

(statearr_30369[(13)] = inst_30240__$1);

(statearr_30369[(17)] = inst_30249);

(statearr_30369[(14)] = inst_30239__$1);

(statearr_30369[(16)] = inst_30241__$1);

return statearr_30369;
})();
var statearr_30370_32317 = state_30302__$1;
(statearr_30370_32317[(2)] = null);

(statearr_30370_32317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (18))){
var inst_30268 = (state_30302[(2)]);
var state_30302__$1 = state_30302;
var statearr_30371_32319 = state_30302__$1;
(statearr_30371_32319[(2)] = inst_30268);

(statearr_30371_32319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30303 === (8))){
var inst_30242 = (state_30302[(12)]);
var inst_30241 = (state_30302[(16)]);
var inst_30244 = (inst_30242 < inst_30241);
var inst_30245 = inst_30244;
var state_30302__$1 = state_30302;
if(cljs.core.truth_(inst_30245)){
var statearr_30372_32322 = state_30302__$1;
(statearr_30372_32322[(1)] = (10));

} else {
var statearr_30373_32323 = state_30302__$1;
(statearr_30373_32323[(1)] = (11));

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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_30374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30374[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_30374[(1)] = (1));

return statearr_30374;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_30302){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30302);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30375){var ex__28365__auto__ = e30375;
var statearr_30377_32387 = state_30302;
(statearr_30377_32387[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30302[(4)]))){
var statearr_30378_32395 = state_30302;
(statearr_30378_32395[(1)] = cljs.core.first((state_30302[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32397 = state_30302;
state_30302 = G__32397;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_30302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_30302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30379 = f__28568__auto__();
(statearr_30379[(6)] = c__28567__auto___32210);

return statearr_30379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var G__30386 = arguments.length;
switch (G__30386) {
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
var G__30399 = arguments.length;
switch (G__30399) {
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
var G__30413 = arguments.length;
switch (G__30413) {
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
var c__28567__auto___32439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (7))){
var state_30489__$1 = state_30489;
var statearr_30494_32446 = state_30489__$1;
(statearr_30494_32446[(2)] = null);

(statearr_30494_32446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (1))){
var state_30489__$1 = state_30489;
var statearr_30495_32448 = state_30489__$1;
(statearr_30495_32448[(2)] = null);

(statearr_30495_32448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30430 = (state_30489[(7)]);
var inst_30431 = (state_30489[(8)]);
var inst_30433 = (inst_30431 < inst_30430);
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30433)){
var statearr_30496_32457 = state_30489__$1;
(statearr_30496_32457[(1)] = (6));

} else {
var statearr_30497_32458 = state_30489__$1;
(statearr_30497_32458[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (15))){
var inst_30472 = (state_30489[(9)]);
var inst_30479 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30472);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(17),out,inst_30479);
} else {
if((state_val_30490 === (13))){
var inst_30472 = (state_30489[(9)]);
var inst_30472__$1 = (state_30489[(2)]);
var inst_30474 = cljs.core.some(cljs.core.nil_QMARK_,inst_30472__$1);
var state_30489__$1 = (function (){var statearr_30504 = state_30489;
(statearr_30504[(9)] = inst_30472__$1);

return statearr_30504;
})();
if(cljs.core.truth_(inst_30474)){
var statearr_30508_32468 = state_30489__$1;
(statearr_30508_32468[(1)] = (14));

} else {
var statearr_30509_32469 = state_30489__$1;
(statearr_30509_32469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (6))){
var state_30489__$1 = state_30489;
var statearr_30513_32470 = state_30489__$1;
(statearr_30513_32470[(2)] = null);

(statearr_30513_32470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (17))){
var inst_30481 = (state_30489[(2)]);
var state_30489__$1 = (function (){var statearr_30518 = state_30489;
(statearr_30518[(10)] = inst_30481);

return statearr_30518;
})();
var statearr_30522_32477 = state_30489__$1;
(statearr_30522_32477[(2)] = null);

(statearr_30522_32477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (3))){
var inst_30486 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30489__$1,inst_30486);
} else {
if((state_val_30490 === (12))){
var _ = (function (){var statearr_30524 = state_30489;
(statearr_30524[(4)] = cljs.core.rest((state_30489[(4)])));

return statearr_30524;
})();
var state_30489__$1 = state_30489;
var ex30517 = (state_30489__$1[(2)]);
var statearr_30525_32479 = state_30489__$1;
(statearr_30525_32479[(5)] = ex30517);


if((ex30517 instanceof Object)){
var statearr_30526_32480 = state_30489__$1;
(statearr_30526_32480[(1)] = (11));

(statearr_30526_32480[(5)] = null);

} else {
throw ex30517;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (2))){
var inst_30429 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30430 = cnt;
var inst_30431 = (0);
var state_30489__$1 = (function (){var statearr_30528 = state_30489;
(statearr_30528[(7)] = inst_30430);

(statearr_30528[(11)] = inst_30429);

(statearr_30528[(8)] = inst_30431);

return statearr_30528;
})();
var statearr_30529_32499 = state_30489__$1;
(statearr_30529_32499[(2)] = null);

(statearr_30529_32499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (11))){
var inst_30451 = (state_30489[(2)]);
var inst_30452 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30489__$1 = (function (){var statearr_30531 = state_30489;
(statearr_30531[(12)] = inst_30451);

return statearr_30531;
})();
var statearr_30532_32502 = state_30489__$1;
(statearr_30532_32502[(2)] = inst_30452);

(statearr_30532_32502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (9))){
var inst_30431 = (state_30489[(8)]);
var _ = (function (){var statearr_30533 = state_30489;
(statearr_30533[(4)] = cljs.core.cons((12),(state_30489[(4)])));

return statearr_30533;
})();
var inst_30458 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30431) : chs__$1.call(null,inst_30431));
var inst_30459 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30431) : done.call(null,inst_30431));
var inst_30460 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30458,inst_30459);
var ___$1 = (function (){var statearr_30534 = state_30489;
(statearr_30534[(4)] = cljs.core.rest((state_30489[(4)])));

return statearr_30534;
})();
var state_30489__$1 = state_30489;
var statearr_30535_32514 = state_30489__$1;
(statearr_30535_32514[(2)] = inst_30460);

(statearr_30535_32514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (5))){
var inst_30470 = (state_30489[(2)]);
var state_30489__$1 = (function (){var statearr_30536 = state_30489;
(statearr_30536[(13)] = inst_30470);

return statearr_30536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30489__$1,(13),dchan);
} else {
if((state_val_30490 === (14))){
var inst_30476 = cljs.core.async.close_BANG_(out);
var state_30489__$1 = state_30489;
var statearr_30537_32516 = state_30489__$1;
(statearr_30537_32516[(2)] = inst_30476);

(statearr_30537_32516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (16))){
var inst_30484 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30538_32519 = state_30489__$1;
(statearr_30538_32519[(2)] = inst_30484);

(statearr_30538_32519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (10))){
var inst_30431 = (state_30489[(8)]);
var inst_30463 = (state_30489[(2)]);
var inst_30464 = (inst_30431 + (1));
var inst_30431__$1 = inst_30464;
var state_30489__$1 = (function (){var statearr_30539 = state_30489;
(statearr_30539[(14)] = inst_30463);

(statearr_30539[(8)] = inst_30431__$1);

return statearr_30539;
})();
var statearr_30540_32520 = state_30489__$1;
(statearr_30540_32520[(2)] = null);

(statearr_30540_32520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30468 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30541_32522 = state_30489__$1;
(statearr_30541_32522[(2)] = inst_30468);

(statearr_30541_32522[(1)] = (5));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_30542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30542[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_30542[(1)] = (1));

return statearr_30542;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_30489){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30489);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30543){var ex__28365__auto__ = e30543;
var statearr_30544_32527 = state_30489;
(statearr_30544_32527[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30489[(4)]))){
var statearr_30545_32528 = state_30489;
(statearr_30545_32528[(1)] = cljs.core.first((state_30489[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_30489;
state_30489 = G__32533;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30546 = f__28568__auto__();
(statearr_30546[(6)] = c__28567__auto___32439);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var G__30549 = arguments.length;
switch (G__30549) {
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
var c__28567__auto___32539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30569 = (state_30590[(7)]);
var inst_30568 = (state_30590[(8)]);
var inst_30568__$1 = (state_30590[(2)]);
var inst_30569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30568__$1,(0),null);
var inst_30570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30568__$1,(1),null);
var inst_30571 = (inst_30569__$1 == null);
var state_30590__$1 = (function (){var statearr_30610 = state_30590;
(statearr_30610[(7)] = inst_30569__$1);

(statearr_30610[(9)] = inst_30570);

(statearr_30610[(8)] = inst_30568__$1);

return statearr_30610;
})();
if(cljs.core.truth_(inst_30571)){
var statearr_30611_32584 = state_30590__$1;
(statearr_30611_32584[(1)] = (8));

} else {
var statearr_30612_32585 = state_30590__$1;
(statearr_30612_32585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var inst_30558 = cljs.core.vec(chs);
var inst_30559 = inst_30558;
var state_30590__$1 = (function (){var statearr_30613 = state_30590;
(statearr_30613[(10)] = inst_30559);

return statearr_30613;
})();
var statearr_30614_32590 = state_30590__$1;
(statearr_30614_32590[(2)] = null);

(statearr_30614_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var inst_30559 = (state_30590[(10)]);
var state_30590__$1 = state_30590;
return cljs.core.async.ioc_alts_BANG_(state_30590__$1,(7),inst_30559);
} else {
if((state_val_30591 === (6))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30615_32592 = state_30590__$1;
(statearr_30615_32592[(2)] = inst_30586);

(statearr_30615_32592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (2))){
var inst_30559 = (state_30590[(10)]);
var inst_30561 = cljs.core.count(inst_30559);
var inst_30562 = (inst_30561 > (0));
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30562)){
var statearr_30617_32593 = state_30590__$1;
(statearr_30617_32593[(1)] = (4));

} else {
var statearr_30618_32594 = state_30590__$1;
(statearr_30618_32594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (11))){
var inst_30559 = (state_30590[(10)]);
var inst_30579 = (state_30590[(2)]);
var tmp30616 = inst_30559;
var inst_30559__$1 = tmp30616;
var state_30590__$1 = (function (){var statearr_30619 = state_30590;
(statearr_30619[(11)] = inst_30579);

(statearr_30619[(10)] = inst_30559__$1);

return statearr_30619;
})();
var statearr_30620_32597 = state_30590__$1;
(statearr_30620_32597[(2)] = null);

(statearr_30620_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (9))){
var inst_30569 = (state_30590[(7)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30590__$1,(11),out,inst_30569);
} else {
if((state_val_30591 === (5))){
var inst_30584 = cljs.core.async.close_BANG_(out);
var state_30590__$1 = state_30590;
var statearr_30628_32598 = state_30590__$1;
(statearr_30628_32598[(2)] = inst_30584);

(statearr_30628_32598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (10))){
var inst_30582 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30629_32599 = state_30590__$1;
(statearr_30629_32599[(2)] = inst_30582);

(statearr_30629_32599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (8))){
var inst_30569 = (state_30590[(7)]);
var inst_30570 = (state_30590[(9)]);
var inst_30559 = (state_30590[(10)]);
var inst_30568 = (state_30590[(8)]);
var inst_30574 = (function (){var cs = inst_30559;
var vec__30564 = inst_30568;
var v = inst_30569;
var c = inst_30570;
return (function (p1__30547_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30547_SHARP_);
});
})();
var inst_30575 = cljs.core.filterv(inst_30574,inst_30559);
var inst_30559__$1 = inst_30575;
var state_30590__$1 = (function (){var statearr_30630 = state_30590;
(statearr_30630[(10)] = inst_30559__$1);

return statearr_30630;
})();
var statearr_30631_32608 = state_30590__$1;
(statearr_30631_32608[(2)] = null);

(statearr_30631_32608[(1)] = (2));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_30634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30634[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_30634[(1)] = (1));

return statearr_30634;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_30590){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30590);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30635){var ex__28365__auto__ = e30635;
var statearr_30636_32618 = state_30590;
(statearr_30636_32618[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30590[(4)]))){
var statearr_30637_32621 = state_30590;
(statearr_30637_32621[(1)] = cljs.core.first((state_30590[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_30590;
state_30590 = G__32644;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30639 = f__28568__auto__();
(statearr_30639[(6)] = c__28567__auto___32539);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
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
var G__30642 = arguments.length;
switch (G__30642) {
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
var c__28567__auto___32656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30666){
var state_val_30667 = (state_30666[(1)]);
if((state_val_30667 === (7))){
var inst_30648 = (state_30666[(7)]);
var inst_30648__$1 = (state_30666[(2)]);
var inst_30649 = (inst_30648__$1 == null);
var inst_30650 = cljs.core.not(inst_30649);
var state_30666__$1 = (function (){var statearr_30668 = state_30666;
(statearr_30668[(7)] = inst_30648__$1);

return statearr_30668;
})();
if(inst_30650){
var statearr_30669_32661 = state_30666__$1;
(statearr_30669_32661[(1)] = (8));

} else {
var statearr_30670_32662 = state_30666__$1;
(statearr_30670_32662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (1))){
var inst_30643 = (0);
var state_30666__$1 = (function (){var statearr_30671 = state_30666;
(statearr_30671[(8)] = inst_30643);

return statearr_30671;
})();
var statearr_30672_32663 = state_30666__$1;
(statearr_30672_32663[(2)] = null);

(statearr_30672_32663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (4))){
var state_30666__$1 = state_30666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30666__$1,(7),ch);
} else {
if((state_val_30667 === (6))){
var inst_30661 = (state_30666[(2)]);
var state_30666__$1 = state_30666;
var statearr_30673_32664 = state_30666__$1;
(statearr_30673_32664[(2)] = inst_30661);

(statearr_30673_32664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (3))){
var inst_30663 = (state_30666[(2)]);
var inst_30664 = cljs.core.async.close_BANG_(out);
var state_30666__$1 = (function (){var statearr_30674 = state_30666;
(statearr_30674[(9)] = inst_30663);

return statearr_30674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30666__$1,inst_30664);
} else {
if((state_val_30667 === (2))){
var inst_30643 = (state_30666[(8)]);
var inst_30645 = (inst_30643 < n);
var state_30666__$1 = state_30666;
if(cljs.core.truth_(inst_30645)){
var statearr_30675_32668 = state_30666__$1;
(statearr_30675_32668[(1)] = (4));

} else {
var statearr_30676_32670 = state_30666__$1;
(statearr_30676_32670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (11))){
var inst_30643 = (state_30666[(8)]);
var inst_30653 = (state_30666[(2)]);
var inst_30654 = (inst_30643 + (1));
var inst_30643__$1 = inst_30654;
var state_30666__$1 = (function (){var statearr_30678 = state_30666;
(statearr_30678[(8)] = inst_30643__$1);

(statearr_30678[(10)] = inst_30653);

return statearr_30678;
})();
var statearr_30679_32672 = state_30666__$1;
(statearr_30679_32672[(2)] = null);

(statearr_30679_32672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (9))){
var state_30666__$1 = state_30666;
var statearr_30680_32675 = state_30666__$1;
(statearr_30680_32675[(2)] = null);

(statearr_30680_32675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (5))){
var state_30666__$1 = state_30666;
var statearr_30681_32677 = state_30666__$1;
(statearr_30681_32677[(2)] = null);

(statearr_30681_32677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (10))){
var inst_30658 = (state_30666[(2)]);
var state_30666__$1 = state_30666;
var statearr_30682_32678 = state_30666__$1;
(statearr_30682_32678[(2)] = inst_30658);

(statearr_30682_32678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30667 === (8))){
var inst_30648 = (state_30666[(7)]);
var state_30666__$1 = state_30666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30666__$1,(11),out,inst_30648);
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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_30683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30683[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_30683[(1)] = (1));

return statearr_30683;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_30666){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30666);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30684){var ex__28365__auto__ = e30684;
var statearr_30685_32694 = state_30666;
(statearr_30685_32694[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30666[(4)]))){
var statearr_30686_32695 = state_30666;
(statearr_30686_32695[(1)] = cljs.core.first((state_30666[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32696 = state_30666;
state_30666 = G__32696;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_30666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_30666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30687 = f__28568__auto__();
(statearr_30687[(6)] = c__28567__auto___32656);

return statearr_30687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30690 = (function (f,ch,meta30691){
this.f = f;
this.ch = ch;
this.meta30691 = meta30691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30692,meta30691__$1){
var self__ = this;
var _30692__$1 = this;
return (new cljs.core.async.t_cljs$core$async30690(self__.f,self__.ch,meta30691__$1));
}));

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30692){
var self__ = this;
var _30692__$1 = this;
return self__.meta30691;
}));

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30695 = (function (f,ch,meta30691,_,fn1,meta30696){
this.f = f;
this.ch = ch;
this.meta30691 = meta30691;
this._ = _;
this.fn1 = fn1;
this.meta30696 = meta30696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30697,meta30696__$1){
var self__ = this;
var _30697__$1 = this;
return (new cljs.core.async.t_cljs$core$async30695(self__.f,self__.ch,self__.meta30691,self__._,self__.fn1,meta30696__$1));
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30697){
var self__ = this;
var _30697__$1 = this;
return self__.meta30696;
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30688_SHARP_){
var G__30698 = (((p1__30688_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30688_SHARP_) : self__.f.call(null,p1__30688_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30698) : f1.call(null,G__30698));
});
}));

(cljs.core.async.t_cljs$core$async30695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30691","meta30691",-1475039162,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30690","cljs.core.async/t_cljs$core$async30690",1990653180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30696","meta30696",-718425746,null)], null);
}));

(cljs.core.async.t_cljs$core$async30695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30695");

(cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30695.
 */
cljs.core.async.__GT_t_cljs$core$async30695 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30695(f__$1,ch__$1,meta30691__$1,___$2,fn1__$1,meta30696){
return (new cljs.core.async.t_cljs$core$async30695(f__$1,ch__$1,meta30691__$1,___$2,fn1__$1,meta30696));
});

}

return (new cljs.core.async.t_cljs$core$async30695(self__.f,self__.ch,self__.meta30691,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30701 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30701) : self__.f.call(null,G__30701));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30691","meta30691",-1475039162,null)], null);
}));

(cljs.core.async.t_cljs$core$async30690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30690");

(cljs.core.async.t_cljs$core$async30690.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30690.
 */
cljs.core.async.__GT_t_cljs$core$async30690 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30690(f__$1,ch__$1,meta30691){
return (new cljs.core.async.t_cljs$core$async30690(f__$1,ch__$1,meta30691));
});

}

return (new cljs.core.async.t_cljs$core$async30690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30703 = (function (f,ch,meta30704){
this.f = f;
this.ch = ch;
this.meta30704 = meta30704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30705,meta30704__$1){
var self__ = this;
var _30705__$1 = this;
return (new cljs.core.async.t_cljs$core$async30703(self__.f,self__.ch,meta30704__$1));
}));

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30705){
var self__ = this;
var _30705__$1 = this;
return self__.meta30704;
}));

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30704","meta30704",614299279,null)], null);
}));

(cljs.core.async.t_cljs$core$async30703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30703");

(cljs.core.async.t_cljs$core$async30703.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30703.
 */
cljs.core.async.__GT_t_cljs$core$async30703 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30703(f__$1,ch__$1,meta30704){
return (new cljs.core.async.t_cljs$core$async30703(f__$1,ch__$1,meta30704));
});

}

return (new cljs.core.async.t_cljs$core$async30703(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30707 = (function (p,ch,meta30708){
this.p = p;
this.ch = ch;
this.meta30708 = meta30708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30709,meta30708__$1){
var self__ = this;
var _30709__$1 = this;
return (new cljs.core.async.t_cljs$core$async30707(self__.p,self__.ch,meta30708__$1));
}));

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30709){
var self__ = this;
var _30709__$1 = this;
return self__.meta30708;
}));

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30708","meta30708",1804482368,null)], null);
}));

(cljs.core.async.t_cljs$core$async30707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30707");

(cljs.core.async.t_cljs$core$async30707.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30707.
 */
cljs.core.async.__GT_t_cljs$core$async30707 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30707(p__$1,ch__$1,meta30708){
return (new cljs.core.async.t_cljs$core$async30707(p__$1,ch__$1,meta30708));
});

}

return (new cljs.core.async.t_cljs$core$async30707(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30717 = arguments.length;
switch (G__30717) {
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
var c__28567__auto___32923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (7))){
var inst_30736 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30743_32925 = state_30740__$1;
(statearr_30743_32925[(2)] = inst_30736);

(statearr_30743_32925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (1))){
var state_30740__$1 = state_30740;
var statearr_30744_32926 = state_30740__$1;
(statearr_30744_32926[(2)] = null);

(statearr_30744_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (4))){
var inst_30722 = (state_30740[(7)]);
var inst_30722__$1 = (state_30740[(2)]);
var inst_30723 = (inst_30722__$1 == null);
var state_30740__$1 = (function (){var statearr_30745 = state_30740;
(statearr_30745[(7)] = inst_30722__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30723)){
var statearr_30746_32929 = state_30740__$1;
(statearr_30746_32929[(1)] = (5));

} else {
var statearr_30747_32931 = state_30740__$1;
(statearr_30747_32931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (6))){
var inst_30722 = (state_30740[(7)]);
var inst_30727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30722) : p.call(null,inst_30722));
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30727)){
var statearr_30748_32934 = state_30740__$1;
(statearr_30748_32934[(1)] = (8));

} else {
var statearr_30749_32935 = state_30740__$1;
(statearr_30749_32935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (3))){
var inst_30738 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30740__$1,inst_30738);
} else {
if((state_val_30741 === (2))){
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30740__$1,(4),ch);
} else {
if((state_val_30741 === (11))){
var inst_30730 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30752_32944 = state_30740__$1;
(statearr_30752_32944[(2)] = inst_30730);

(statearr_30752_32944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (9))){
var state_30740__$1 = state_30740;
var statearr_30753_32945 = state_30740__$1;
(statearr_30753_32945[(2)] = null);

(statearr_30753_32945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (5))){
var inst_30725 = cljs.core.async.close_BANG_(out);
var state_30740__$1 = state_30740;
var statearr_30754_32952 = state_30740__$1;
(statearr_30754_32952[(2)] = inst_30725);

(statearr_30754_32952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (10))){
var inst_30733 = (state_30740[(2)]);
var state_30740__$1 = (function (){var statearr_30755 = state_30740;
(statearr_30755[(8)] = inst_30733);

return statearr_30755;
})();
var statearr_30756_32953 = state_30740__$1;
(statearr_30756_32953[(2)] = null);

(statearr_30756_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (8))){
var inst_30722 = (state_30740[(7)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30740__$1,(11),out,inst_30722);
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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_30760 = [null,null,null,null,null,null,null,null,null];
(statearr_30760[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_30760[(1)] = (1));

return statearr_30760;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_30740){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30740);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30761){var ex__28365__auto__ = e30761;
var statearr_30762_32976 = state_30740;
(statearr_30762_32976[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30740[(4)]))){
var statearr_30763_32978 = state_30740;
(statearr_30763_32978[(1)] = cljs.core.first((state_30740[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32985 = state_30740;
state_30740 = G__32985;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30766 = f__28568__auto__();
(statearr_30766[(6)] = c__28567__auto___32923);

return statearr_30766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30772 = arguments.length;
switch (G__30772) {
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
var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_30857){
var state_val_30858 = (state_30857[(1)]);
if((state_val_30858 === (7))){
var inst_30852 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30861_32990 = state_30857__$1;
(statearr_30861_32990[(2)] = inst_30852);

(statearr_30861_32990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (20))){
var inst_30819 = (state_30857[(7)]);
var inst_30833 = (state_30857[(2)]);
var inst_30834 = cljs.core.next(inst_30819);
var inst_30805 = inst_30834;
var inst_30806 = null;
var inst_30807 = (0);
var inst_30808 = (0);
var state_30857__$1 = (function (){var statearr_30867 = state_30857;
(statearr_30867[(8)] = inst_30808);

(statearr_30867[(9)] = inst_30833);

(statearr_30867[(10)] = inst_30806);

(statearr_30867[(11)] = inst_30807);

(statearr_30867[(12)] = inst_30805);

return statearr_30867;
})();
var statearr_30868_32993 = state_30857__$1;
(statearr_30868_32993[(2)] = null);

(statearr_30868_32993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (1))){
var state_30857__$1 = state_30857;
var statearr_30869_33000 = state_30857__$1;
(statearr_30869_33000[(2)] = null);

(statearr_30869_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (4))){
var inst_30792 = (state_30857[(13)]);
var inst_30792__$1 = (state_30857[(2)]);
var inst_30793 = (inst_30792__$1 == null);
var state_30857__$1 = (function (){var statearr_30872 = state_30857;
(statearr_30872[(13)] = inst_30792__$1);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30793)){
var statearr_30873_33011 = state_30857__$1;
(statearr_30873_33011[(1)] = (5));

} else {
var statearr_30878_33014 = state_30857__$1;
(statearr_30878_33014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (15))){
var state_30857__$1 = state_30857;
var statearr_30885_33083 = state_30857__$1;
(statearr_30885_33083[(2)] = null);

(statearr_30885_33083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (21))){
var state_30857__$1 = state_30857;
var statearr_30886_33091 = state_30857__$1;
(statearr_30886_33091[(2)] = null);

(statearr_30886_33091[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (13))){
var inst_30808 = (state_30857[(8)]);
var inst_30806 = (state_30857[(10)]);
var inst_30807 = (state_30857[(11)]);
var inst_30805 = (state_30857[(12)]);
var inst_30815 = (state_30857[(2)]);
var inst_30816 = (inst_30808 + (1));
var tmp30882 = inst_30806;
var tmp30883 = inst_30807;
var tmp30884 = inst_30805;
var inst_30805__$1 = tmp30884;
var inst_30806__$1 = tmp30882;
var inst_30807__$1 = tmp30883;
var inst_30808__$1 = inst_30816;
var state_30857__$1 = (function (){var statearr_30887 = state_30857;
(statearr_30887[(8)] = inst_30808__$1);

(statearr_30887[(10)] = inst_30806__$1);

(statearr_30887[(14)] = inst_30815);

(statearr_30887[(11)] = inst_30807__$1);

(statearr_30887[(12)] = inst_30805__$1);

return statearr_30887;
})();
var statearr_30888_33099 = state_30857__$1;
(statearr_30888_33099[(2)] = null);

(statearr_30888_33099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (22))){
var state_30857__$1 = state_30857;
var statearr_30889_33104 = state_30857__$1;
(statearr_30889_33104[(2)] = null);

(statearr_30889_33104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (6))){
var inst_30792 = (state_30857[(13)]);
var inst_30803 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30792) : f.call(null,inst_30792));
var inst_30804 = cljs.core.seq(inst_30803);
var inst_30805 = inst_30804;
var inst_30806 = null;
var inst_30807 = (0);
var inst_30808 = (0);
var state_30857__$1 = (function (){var statearr_30890 = state_30857;
(statearr_30890[(8)] = inst_30808);

(statearr_30890[(10)] = inst_30806);

(statearr_30890[(11)] = inst_30807);

(statearr_30890[(12)] = inst_30805);

return statearr_30890;
})();
var statearr_30893_33115 = state_30857__$1;
(statearr_30893_33115[(2)] = null);

(statearr_30893_33115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (17))){
var inst_30819 = (state_30857[(7)]);
var inst_30825 = cljs.core.chunk_first(inst_30819);
var inst_30826 = cljs.core.chunk_rest(inst_30819);
var inst_30828 = cljs.core.count(inst_30825);
var inst_30805 = inst_30826;
var inst_30806 = inst_30825;
var inst_30807 = inst_30828;
var inst_30808 = (0);
var state_30857__$1 = (function (){var statearr_30894 = state_30857;
(statearr_30894[(8)] = inst_30808);

(statearr_30894[(10)] = inst_30806);

(statearr_30894[(11)] = inst_30807);

(statearr_30894[(12)] = inst_30805);

return statearr_30894;
})();
var statearr_30895_33123 = state_30857__$1;
(statearr_30895_33123[(2)] = null);

(statearr_30895_33123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (3))){
var inst_30854 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30857__$1,inst_30854);
} else {
if((state_val_30858 === (12))){
var inst_30842 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30899_33126 = state_30857__$1;
(statearr_30899_33126[(2)] = inst_30842);

(statearr_30899_33126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (2))){
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30857__$1,(4),in$);
} else {
if((state_val_30858 === (23))){
var inst_30850 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30901_33131 = state_30857__$1;
(statearr_30901_33131[(2)] = inst_30850);

(statearr_30901_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (19))){
var inst_30837 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30903_33133 = state_30857__$1;
(statearr_30903_33133[(2)] = inst_30837);

(statearr_30903_33133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (11))){
var inst_30819 = (state_30857[(7)]);
var inst_30805 = (state_30857[(12)]);
var inst_30819__$1 = cljs.core.seq(inst_30805);
var state_30857__$1 = (function (){var statearr_30906 = state_30857;
(statearr_30906[(7)] = inst_30819__$1);

return statearr_30906;
})();
if(inst_30819__$1){
var statearr_30909_33134 = state_30857__$1;
(statearr_30909_33134[(1)] = (14));

} else {
var statearr_30910_33135 = state_30857__$1;
(statearr_30910_33135[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (9))){
var inst_30844 = (state_30857[(2)]);
var inst_30845 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30857__$1 = (function (){var statearr_30911 = state_30857;
(statearr_30911[(15)] = inst_30844);

return statearr_30911;
})();
if(cljs.core.truth_(inst_30845)){
var statearr_30912_33150 = state_30857__$1;
(statearr_30912_33150[(1)] = (21));

} else {
var statearr_30913_33151 = state_30857__$1;
(statearr_30913_33151[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (5))){
var inst_30796 = cljs.core.async.close_BANG_(out);
var state_30857__$1 = state_30857;
var statearr_30915_33152 = state_30857__$1;
(statearr_30915_33152[(2)] = inst_30796);

(statearr_30915_33152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (14))){
var inst_30819 = (state_30857[(7)]);
var inst_30822 = cljs.core.chunked_seq_QMARK_(inst_30819);
var state_30857__$1 = state_30857;
if(inst_30822){
var statearr_30925_33153 = state_30857__$1;
(statearr_30925_33153[(1)] = (17));

} else {
var statearr_30927_33156 = state_30857__$1;
(statearr_30927_33156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (16))){
var inst_30840 = (state_30857[(2)]);
var state_30857__$1 = state_30857;
var statearr_30928_33157 = state_30857__$1;
(statearr_30928_33157[(2)] = inst_30840);

(statearr_30928_33157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30858 === (10))){
var inst_30808 = (state_30857[(8)]);
var inst_30806 = (state_30857[(10)]);
var inst_30813 = cljs.core._nth(inst_30806,inst_30808);
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30857__$1,(13),out,inst_30813);
} else {
if((state_val_30858 === (18))){
var inst_30819 = (state_30857[(7)]);
var inst_30831 = cljs.core.first(inst_30819);
var state_30857__$1 = state_30857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30857__$1,(20),out,inst_30831);
} else {
if((state_val_30858 === (8))){
var inst_30808 = (state_30857[(8)]);
var inst_30807 = (state_30857[(11)]);
var inst_30810 = (inst_30808 < inst_30807);
var inst_30811 = inst_30810;
var state_30857__$1 = state_30857;
if(cljs.core.truth_(inst_30811)){
var statearr_30933_33163 = state_30857__$1;
(statearr_30933_33163[(1)] = (10));

} else {
var statearr_30934_33164 = state_30857__$1;
(statearr_30934_33164[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30936[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____1 = (function (state_30857){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_30857);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e30938){var ex__28365__auto__ = e30938;
var statearr_30939_33166 = state_30857;
(statearr_30939_33166[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_30857[(4)]))){
var statearr_30940_33167 = state_30857;
(statearr_30940_33167[(1)] = cljs.core.first((state_30857[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33168 = state_30857;
state_30857 = G__33168;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__ = function(state_30857){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____1.call(this,state_30857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28362__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_30943 = f__28568__auto__();
(statearr_30943[(6)] = c__28567__auto__);

return statearr_30943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30947 = arguments.length;
switch (G__30947) {
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
var G__30994 = arguments.length;
switch (G__30994) {
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
var G__31004 = arguments.length;
switch (G__31004) {
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
var c__28567__auto___33193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_31032){
var state_val_31033 = (state_31032[(1)]);
if((state_val_31033 === (7))){
var inst_31027 = (state_31032[(2)]);
var state_31032__$1 = state_31032;
var statearr_31042_33195 = state_31032__$1;
(statearr_31042_33195[(2)] = inst_31027);

(statearr_31042_33195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (1))){
var inst_31009 = null;
var state_31032__$1 = (function (){var statearr_31047 = state_31032;
(statearr_31047[(7)] = inst_31009);

return statearr_31047;
})();
var statearr_31048_33196 = state_31032__$1;
(statearr_31048_33196[(2)] = null);

(statearr_31048_33196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (4))){
var inst_31012 = (state_31032[(8)]);
var inst_31012__$1 = (state_31032[(2)]);
var inst_31013 = (inst_31012__$1 == null);
var inst_31014 = cljs.core.not(inst_31013);
var state_31032__$1 = (function (){var statearr_31050 = state_31032;
(statearr_31050[(8)] = inst_31012__$1);

return statearr_31050;
})();
if(inst_31014){
var statearr_31051_33198 = state_31032__$1;
(statearr_31051_33198[(1)] = (5));

} else {
var statearr_31052_33200 = state_31032__$1;
(statearr_31052_33200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (6))){
var state_31032__$1 = state_31032;
var statearr_31056_33201 = state_31032__$1;
(statearr_31056_33201[(2)] = null);

(statearr_31056_33201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (3))){
var inst_31029 = (state_31032[(2)]);
var inst_31030 = cljs.core.async.close_BANG_(out);
var state_31032__$1 = (function (){var statearr_31066 = state_31032;
(statearr_31066[(9)] = inst_31029);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31032__$1,inst_31030);
} else {
if((state_val_31033 === (2))){
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31032__$1,(4),ch);
} else {
if((state_val_31033 === (11))){
var inst_31012 = (state_31032[(8)]);
var inst_31021 = (state_31032[(2)]);
var inst_31009 = inst_31012;
var state_31032__$1 = (function (){var statearr_31075 = state_31032;
(statearr_31075[(10)] = inst_31021);

(statearr_31075[(7)] = inst_31009);

return statearr_31075;
})();
var statearr_31080_33202 = state_31032__$1;
(statearr_31080_33202[(2)] = null);

(statearr_31080_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (9))){
var inst_31012 = (state_31032[(8)]);
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31032__$1,(11),out,inst_31012);
} else {
if((state_val_31033 === (5))){
var inst_31012 = (state_31032[(8)]);
var inst_31009 = (state_31032[(7)]);
var inst_31016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31012,inst_31009);
var state_31032__$1 = state_31032;
if(inst_31016){
var statearr_31082_33203 = state_31032__$1;
(statearr_31082_33203[(1)] = (8));

} else {
var statearr_31083_33237 = state_31032__$1;
(statearr_31083_33237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (10))){
var inst_31024 = (state_31032[(2)]);
var state_31032__$1 = state_31032;
var statearr_31084_33239 = state_31032__$1;
(statearr_31084_33239[(2)] = inst_31024);

(statearr_31084_33239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (8))){
var inst_31009 = (state_31032[(7)]);
var tmp31081 = inst_31009;
var inst_31009__$1 = tmp31081;
var state_31032__$1 = (function (){var statearr_31085 = state_31032;
(statearr_31085[(7)] = inst_31009__$1);

return statearr_31085;
})();
var statearr_31086_33243 = state_31032__$1;
(statearr_31086_33243[(2)] = null);

(statearr_31086_33243[(1)] = (2));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_31089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31089[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_31089[(1)] = (1));

return statearr_31089;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_31032){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_31032);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e31092){var ex__28365__auto__ = e31092;
var statearr_31094_33248 = state_31032;
(statearr_31094_33248[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_31032[(4)]))){
var statearr_31095_33249 = state_31032;
(statearr_31095_33249[(1)] = cljs.core.first((state_31032[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33252 = state_31032;
state_31032 = G__33252;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_31032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_31032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_31096 = f__28568__auto__();
(statearr_31096[(6)] = c__28567__auto___33193);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31120 = arguments.length;
switch (G__31120) {
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
var c__28567__auto___33266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (7))){
var inst_31158 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31164_33281 = state_31162__$1;
(statearr_31164_33281[(2)] = inst_31158);

(statearr_31164_33281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (1))){
var inst_31125 = (new Array(n));
var inst_31126 = inst_31125;
var inst_31127 = (0);
var state_31162__$1 = (function (){var statearr_31165 = state_31162;
(statearr_31165[(7)] = inst_31127);

(statearr_31165[(8)] = inst_31126);

return statearr_31165;
})();
var statearr_31166_33287 = state_31162__$1;
(statearr_31166_33287[(2)] = null);

(statearr_31166_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (4))){
var inst_31130 = (state_31162[(9)]);
var inst_31130__$1 = (state_31162[(2)]);
var inst_31131 = (inst_31130__$1 == null);
var inst_31132 = cljs.core.not(inst_31131);
var state_31162__$1 = (function (){var statearr_31167 = state_31162;
(statearr_31167[(9)] = inst_31130__$1);

return statearr_31167;
})();
if(inst_31132){
var statearr_31168_33288 = state_31162__$1;
(statearr_31168_33288[(1)] = (5));

} else {
var statearr_31169_33293 = state_31162__$1;
(statearr_31169_33293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (15))){
var inst_31152 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31171_33295 = state_31162__$1;
(statearr_31171_33295[(2)] = inst_31152);

(statearr_31171_33295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (13))){
var state_31162__$1 = state_31162;
var statearr_31175_33300 = state_31162__$1;
(statearr_31175_33300[(2)] = null);

(statearr_31175_33300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (6))){
var inst_31127 = (state_31162[(7)]);
var inst_31148 = (inst_31127 > (0));
var state_31162__$1 = state_31162;
if(cljs.core.truth_(inst_31148)){
var statearr_31176_33312 = state_31162__$1;
(statearr_31176_33312[(1)] = (12));

} else {
var statearr_31177_33313 = state_31162__$1;
(statearr_31177_33313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (3))){
var inst_31160 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31162__$1,inst_31160);
} else {
if((state_val_31163 === (12))){
var inst_31126 = (state_31162[(8)]);
var inst_31150 = cljs.core.vec(inst_31126);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31162__$1,(15),out,inst_31150);
} else {
if((state_val_31163 === (2))){
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31162__$1,(4),ch);
} else {
if((state_val_31163 === (11))){
var inst_31142 = (state_31162[(2)]);
var inst_31143 = (new Array(n));
var inst_31126 = inst_31143;
var inst_31127 = (0);
var state_31162__$1 = (function (){var statearr_31184 = state_31162;
(statearr_31184[(7)] = inst_31127);

(statearr_31184[(8)] = inst_31126);

(statearr_31184[(10)] = inst_31142);

return statearr_31184;
})();
var statearr_31185_33334 = state_31162__$1;
(statearr_31185_33334[(2)] = null);

(statearr_31185_33334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (9))){
var inst_31126 = (state_31162[(8)]);
var inst_31140 = cljs.core.vec(inst_31126);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31162__$1,(11),out,inst_31140);
} else {
if((state_val_31163 === (5))){
var inst_31127 = (state_31162[(7)]);
var inst_31135 = (state_31162[(11)]);
var inst_31130 = (state_31162[(9)]);
var inst_31126 = (state_31162[(8)]);
var inst_31134 = (inst_31126[inst_31127] = inst_31130);
var inst_31135__$1 = (inst_31127 + (1));
var inst_31136 = (inst_31135__$1 < n);
var state_31162__$1 = (function (){var statearr_31192 = state_31162;
(statearr_31192[(11)] = inst_31135__$1);

(statearr_31192[(12)] = inst_31134);

return statearr_31192;
})();
if(cljs.core.truth_(inst_31136)){
var statearr_31193_33356 = state_31162__$1;
(statearr_31193_33356[(1)] = (8));

} else {
var statearr_31195_33362 = state_31162__$1;
(statearr_31195_33362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (14))){
var inst_31155 = (state_31162[(2)]);
var inst_31156 = cljs.core.async.close_BANG_(out);
var state_31162__$1 = (function (){var statearr_31197 = state_31162;
(statearr_31197[(13)] = inst_31155);

return statearr_31197;
})();
var statearr_31198_33374 = state_31162__$1;
(statearr_31198_33374[(2)] = inst_31156);

(statearr_31198_33374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (10))){
var inst_31146 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31199_33377 = state_31162__$1;
(statearr_31199_33377[(2)] = inst_31146);

(statearr_31199_33377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (8))){
var inst_31135 = (state_31162[(11)]);
var inst_31126 = (state_31162[(8)]);
var tmp31196 = inst_31126;
var inst_31126__$1 = tmp31196;
var inst_31127 = inst_31135;
var state_31162__$1 = (function (){var statearr_31200 = state_31162;
(statearr_31200[(7)] = inst_31127);

(statearr_31200[(8)] = inst_31126__$1);

return statearr_31200;
})();
var statearr_31202_33396 = state_31162__$1;
(statearr_31202_33396[(2)] = null);

(statearr_31202_33396[(1)] = (2));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_31162){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_31162);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e31207){var ex__28365__auto__ = e31207;
var statearr_31208_33405 = state_31162;
(statearr_31208_33405[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_31162[(4)]))){
var statearr_31209_33406 = state_31162;
(statearr_31209_33406[(1)] = cljs.core.first((state_31162[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33407 = state_31162;
state_31162 = G__33407;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_31210 = f__28568__auto__();
(statearr_31210[(6)] = c__28567__auto___33266);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31217 = arguments.length;
switch (G__31217) {
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
var c__28567__auto___33413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_31260){
var state_val_31263 = (state_31260[(1)]);
if((state_val_31263 === (7))){
var inst_31256 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31264_33418 = state_31260__$1;
(statearr_31264_33418[(2)] = inst_31256);

(statearr_31264_33418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (1))){
var inst_31219 = [];
var inst_31220 = inst_31219;
var inst_31221 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31260__$1 = (function (){var statearr_31266 = state_31260;
(statearr_31266[(7)] = inst_31220);

(statearr_31266[(8)] = inst_31221);

return statearr_31266;
})();
var statearr_31267_33420 = state_31260__$1;
(statearr_31267_33420[(2)] = null);

(statearr_31267_33420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (4))){
var inst_31224 = (state_31260[(9)]);
var inst_31224__$1 = (state_31260[(2)]);
var inst_31225 = (inst_31224__$1 == null);
var inst_31226 = cljs.core.not(inst_31225);
var state_31260__$1 = (function (){var statearr_31268 = state_31260;
(statearr_31268[(9)] = inst_31224__$1);

return statearr_31268;
})();
if(inst_31226){
var statearr_31275_33421 = state_31260__$1;
(statearr_31275_33421[(1)] = (5));

} else {
var statearr_31276_33423 = state_31260__$1;
(statearr_31276_33423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (15))){
var inst_31250 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31277_33424 = state_31260__$1;
(statearr_31277_33424[(2)] = inst_31250);

(statearr_31277_33424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (13))){
var state_31260__$1 = state_31260;
var statearr_31278_33427 = state_31260__$1;
(statearr_31278_33427[(2)] = null);

(statearr_31278_33427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (6))){
var inst_31220 = (state_31260[(7)]);
var inst_31245 = inst_31220.length;
var inst_31246 = (inst_31245 > (0));
var state_31260__$1 = state_31260;
if(cljs.core.truth_(inst_31246)){
var statearr_31283_33430 = state_31260__$1;
(statearr_31283_33430[(1)] = (12));

} else {
var statearr_31284_33431 = state_31260__$1;
(statearr_31284_33431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (3))){
var inst_31258 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31260__$1,inst_31258);
} else {
if((state_val_31263 === (12))){
var inst_31220 = (state_31260[(7)]);
var inst_31248 = cljs.core.vec(inst_31220);
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31260__$1,(15),out,inst_31248);
} else {
if((state_val_31263 === (2))){
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31260__$1,(4),ch);
} else {
if((state_val_31263 === (11))){
var inst_31228 = (state_31260[(10)]);
var inst_31224 = (state_31260[(9)]);
var inst_31238 = (state_31260[(2)]);
var inst_31239 = [];
var inst_31240 = inst_31239.push(inst_31224);
var inst_31220 = inst_31239;
var inst_31221 = inst_31228;
var state_31260__$1 = (function (){var statearr_31288 = state_31260;
(statearr_31288[(7)] = inst_31220);

(statearr_31288[(11)] = inst_31240);

(statearr_31288[(8)] = inst_31221);

(statearr_31288[(12)] = inst_31238);

return statearr_31288;
})();
var statearr_31289_33440 = state_31260__$1;
(statearr_31289_33440[(2)] = null);

(statearr_31289_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (9))){
var inst_31220 = (state_31260[(7)]);
var inst_31236 = cljs.core.vec(inst_31220);
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31260__$1,(11),out,inst_31236);
} else {
if((state_val_31263 === (5))){
var inst_31228 = (state_31260[(10)]);
var inst_31224 = (state_31260[(9)]);
var inst_31221 = (state_31260[(8)]);
var inst_31228__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31224) : f.call(null,inst_31224));
var inst_31229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31228__$1,inst_31221);
var inst_31230 = cljs.core.keyword_identical_QMARK_(inst_31221,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31231 = ((inst_31229) || (inst_31230));
var state_31260__$1 = (function (){var statearr_31292 = state_31260;
(statearr_31292[(10)] = inst_31228__$1);

return statearr_31292;
})();
if(cljs.core.truth_(inst_31231)){
var statearr_31293_33441 = state_31260__$1;
(statearr_31293_33441[(1)] = (8));

} else {
var statearr_31294_33442 = state_31260__$1;
(statearr_31294_33442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (14))){
var inst_31253 = (state_31260[(2)]);
var inst_31254 = cljs.core.async.close_BANG_(out);
var state_31260__$1 = (function (){var statearr_31296 = state_31260;
(statearr_31296[(13)] = inst_31253);

return statearr_31296;
})();
var statearr_31297_33445 = state_31260__$1;
(statearr_31297_33445[(2)] = inst_31254);

(statearr_31297_33445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (10))){
var inst_31243 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31298_33446 = state_31260__$1;
(statearr_31298_33446[(2)] = inst_31243);

(statearr_31298_33446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (8))){
var inst_31220 = (state_31260[(7)]);
var inst_31228 = (state_31260[(10)]);
var inst_31224 = (state_31260[(9)]);
var inst_31233 = inst_31220.push(inst_31224);
var tmp31295 = inst_31220;
var inst_31220__$1 = tmp31295;
var inst_31221 = inst_31228;
var state_31260__$1 = (function (){var statearr_31299 = state_31260;
(statearr_31299[(7)] = inst_31220__$1);

(statearr_31299[(8)] = inst_31221);

(statearr_31299[(14)] = inst_31233);

return statearr_31299;
})();
var statearr_31300_33447 = state_31260__$1;
(statearr_31300_33447[(2)] = null);

(statearr_31300_33447[(1)] = (2));


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
var cljs$core$async$state_machine__28362__auto__ = null;
var cljs$core$async$state_machine__28362__auto____0 = (function (){
var statearr_31301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31301[(0)] = cljs$core$async$state_machine__28362__auto__);

(statearr_31301[(1)] = (1));

return statearr_31301;
});
var cljs$core$async$state_machine__28362__auto____1 = (function (state_31260){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_31260);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e31302){var ex__28365__auto__ = e31302;
var statearr_31303_33454 = state_31260;
(statearr_31303_33454[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_31260[(4)]))){
var statearr_31305_33455 = state_31260;
(statearr_31305_33455[(1)] = cljs.core.first((state_31260[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33456 = state_31260;
state_31260 = G__33456;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
cljs$core$async$state_machine__28362__auto__ = function(state_31260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28362__auto____1.call(this,state_31260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28362__auto____0;
cljs$core$async$state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28362__auto____1;
return cljs$core$async$state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_31308 = f__28568__auto__();
(statearr_31308[(6)] = c__28567__auto___33413);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
