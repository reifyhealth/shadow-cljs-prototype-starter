goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29814 = arguments.length;
switch (G__29814) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29816 = (function (f,blockable,meta29817){
this.f = f;
this.blockable = blockable;
this.meta29817 = meta29817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29818,meta29817__$1){
var self__ = this;
var _29818__$1 = this;
return (new cljs.core.async.t_cljs$core$async29816(self__.f,self__.blockable,meta29817__$1));
}));

(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29818){
var self__ = this;
var _29818__$1 = this;
return self__.meta29817;
}));

(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29817","meta29817",-532919526,null)], null);
}));

(cljs.core.async.t_cljs$core$async29816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29816");

(cljs.core.async.t_cljs$core$async29816.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29816.
 */
cljs.core.async.__GT_t_cljs$core$async29816 = (function cljs$core$async$__GT_t_cljs$core$async29816(f__$1,blockable__$1,meta29817){
return (new cljs.core.async.t_cljs$core$async29816(f__$1,blockable__$1,meta29817));
});

}

return (new cljs.core.async.t_cljs$core$async29816(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29845 = arguments.length;
switch (G__29845) {
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
var G__29847 = arguments.length;
switch (G__29847) {
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
var G__29858 = arguments.length;
switch (G__29858) {
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
var val_32673 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32673) : fn1.call(null,val_32673));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32673) : fn1.call(null,val_32673));
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
var G__29869 = arguments.length;
switch (G__29869) {
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
var n__4613__auto___32684 = n;
var x_32685 = (0);
while(true){
if((x_32685 < n__4613__auto___32684)){
(a[x_32685] = x_32685);

var G__32686 = (x_32685 + (1));
x_32685 = G__32686;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29888 = (function (flag,meta29889){
this.flag = flag;
this.meta29889 = meta29889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29890,meta29889__$1){
var self__ = this;
var _29890__$1 = this;
return (new cljs.core.async.t_cljs$core$async29888(self__.flag,meta29889__$1));
}));

(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29890){
var self__ = this;
var _29890__$1 = this;
return self__.meta29889;
}));

(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29889","meta29889",-694031117,null)], null);
}));

(cljs.core.async.t_cljs$core$async29888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29888");

(cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29888.
 */
cljs.core.async.__GT_t_cljs$core$async29888 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29888(flag__$1,meta29889){
return (new cljs.core.async.t_cljs$core$async29888(flag__$1,meta29889));
});

}

return (new cljs.core.async.t_cljs$core$async29888(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29920 = (function (flag,cb,meta29921){
this.flag = flag;
this.cb = cb;
this.meta29921 = meta29921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29922,meta29921__$1){
var self__ = this;
var _29922__$1 = this;
return (new cljs.core.async.t_cljs$core$async29920(self__.flag,self__.cb,meta29921__$1));
}));

(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29922){
var self__ = this;
var _29922__$1 = this;
return self__.meta29921;
}));

(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29921","meta29921",964960564,null)], null);
}));

(cljs.core.async.t_cljs$core$async29920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29920");

(cljs.core.async.t_cljs$core$async29920.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29920.
 */
cljs.core.async.__GT_t_cljs$core$async29920 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29920(flag__$1,cb__$1,meta29921){
return (new cljs.core.async.t_cljs$core$async29920(flag__$1,cb__$1,meta29921));
});

}

return (new cljs.core.async.t_cljs$core$async29920(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29934_SHARP_){
var G__29937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29934_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29937) : fret.call(null,G__29937));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29935_SHARP_){
var G__29939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29935_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29939) : fret.call(null,G__29939));
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
var G__32697 = (i + (1));
i = G__32697;
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
var len__4736__auto___32700 = arguments.length;
var i__4737__auto___32701 = (0);
while(true){
if((i__4737__auto___32701 < len__4736__auto___32700)){
args__4742__auto__.push((arguments[i__4737__auto___32701]));

var G__32702 = (i__4737__auto___32701 + (1));
i__4737__auto___32701 = G__32702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29957){
var map__29959 = p__29957;
var map__29959__$1 = (((((!((map__29959 == null))))?(((((map__29959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29959):map__29959);
var opts = map__29959__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29946){
var G__29947 = cljs.core.first(seq29946);
var seq29946__$1 = cljs.core.next(seq29946);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29947,seq29946__$1);
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
var G__29973 = arguments.length;
switch (G__29973) {
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
var c__29730__auto___32717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30031){
var state_val_30035 = (state_30031[(1)]);
if((state_val_30035 === (7))){
var inst_30024 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30036_32718 = state_30031__$1;
(statearr_30036_32718[(2)] = inst_30024);

(statearr_30036_32718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (1))){
var state_30031__$1 = state_30031;
var statearr_30038_32719 = state_30031__$1;
(statearr_30038_32719[(2)] = null);

(statearr_30038_32719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (4))){
var inst_30001 = (state_30031[(7)]);
var inst_30001__$1 = (state_30031[(2)]);
var inst_30004 = (inst_30001__$1 == null);
var state_30031__$1 = (function (){var statearr_30040 = state_30031;
(statearr_30040[(7)] = inst_30001__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_30004)){
var statearr_30041_32720 = state_30031__$1;
(statearr_30041_32720[(1)] = (5));

} else {
var statearr_30042_32723 = state_30031__$1;
(statearr_30042_32723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (13))){
var state_30031__$1 = state_30031;
var statearr_30051_32728 = state_30031__$1;
(statearr_30051_32728[(2)] = null);

(statearr_30051_32728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (6))){
var inst_30001 = (state_30031[(7)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30031__$1,(11),to,inst_30001);
} else {
if((state_val_30035 === (3))){
var inst_30029 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30031__$1,inst_30029);
} else {
if((state_val_30035 === (12))){
var state_30031__$1 = state_30031;
var statearr_30056_32729 = state_30031__$1;
(statearr_30056_32729[(2)] = null);

(statearr_30056_32729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (2))){
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30031__$1,(4),from);
} else {
if((state_val_30035 === (11))){
var inst_30017 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
if(cljs.core.truth_(inst_30017)){
var statearr_30061_32730 = state_30031__$1;
(statearr_30061_32730[(1)] = (12));

} else {
var statearr_30063_32732 = state_30031__$1;
(statearr_30063_32732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (9))){
var state_30031__$1 = state_30031;
var statearr_30064_32734 = state_30031__$1;
(statearr_30064_32734[(2)] = null);

(statearr_30064_32734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (5))){
var state_30031__$1 = state_30031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30068_32738 = state_30031__$1;
(statearr_30068_32738[(1)] = (8));

} else {
var statearr_30069_32739 = state_30031__$1;
(statearr_30069_32739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (14))){
var inst_30022 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30070_32740 = state_30031__$1;
(statearr_30070_32740[(2)] = inst_30022);

(statearr_30070_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (10))){
var inst_30013 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30075_32741 = state_30031__$1;
(statearr_30075_32741[(2)] = inst_30013);

(statearr_30075_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30035 === (8))){
var inst_30010 = cljs.core.async.close_BANG_(to);
var state_30031__$1 = state_30031;
var statearr_30077_32742 = state_30031__$1;
(statearr_30077_32742[(2)] = inst_30010);

(statearr_30077_32742[(1)] = (10));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_30079 = [null,null,null,null,null,null,null,null];
(statearr_30079[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_30079[(1)] = (1));

return statearr_30079;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_30031){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30031);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30080){var ex__29615__auto__ = e30080;
var statearr_30081_32749 = state_30031;
(statearr_30081_32749[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30031[(4)]))){
var statearr_30083_32750 = state_30031;
(statearr_30083_32750[(1)] = cljs.core.first((state_30031[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32754 = state_30031;
state_30031 = G__32754;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_30031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_30031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30085 = f__29731__auto__();
(statearr_30085[(6)] = c__29730__auto___32717);

return statearr_30085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var process = (function (p__30092){
var vec__30093 = p__30092;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(1),null);
var job = vec__30093;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29730__auto___32763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30100){
var state_val_30101 = (state_30100[(1)]);
if((state_val_30101 === (1))){
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30100__$1,(2),res,v);
} else {
if((state_val_30101 === (2))){
var inst_30097 = (state_30100[(2)]);
var inst_30098 = cljs.core.async.close_BANG_(res);
var state_30100__$1 = (function (){var statearr_30106 = state_30100;
(statearr_30106[(7)] = inst_30097);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30100__$1,inst_30098);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1 = (function (state_30100){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30100);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30111){var ex__29615__auto__ = e30111;
var statearr_30112_32771 = state_30100;
(statearr_30112_32771[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30100[(4)]))){
var statearr_30114_32772 = state_30100;
(statearr_30114_32772[(1)] = cljs.core.first((state_30100[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32773 = state_30100;
state_30100 = G__32773;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = function(state_30100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1.call(this,state_30100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30115 = f__29731__auto__();
(statearr_30115[(6)] = c__29730__auto___32763);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30119){
var vec__30120 = p__30119;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(1),null);
var job = vec__30120;
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
var n__4613__auto___32781 = n;
var __32782 = (0);
while(true){
if((__32782 < n__4613__auto___32781)){
var G__30125_32783 = type;
var G__30125_32784__$1 = (((G__30125_32783 instanceof cljs.core.Keyword))?G__30125_32783.fqn:null);
switch (G__30125_32784__$1) {
case "compute":
var c__29730__auto___32786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32782,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = ((function (__32782,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function (state_30143){
var state_val_30144 = (state_30143[(1)]);
if((state_val_30144 === (1))){
var state_30143__$1 = state_30143;
var statearr_30145_32790 = state_30143__$1;
(statearr_30145_32790[(2)] = null);

(statearr_30145_32790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (2))){
var state_30143__$1 = state_30143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30143__$1,(4),jobs);
} else {
if((state_val_30144 === (3))){
var inst_30141 = (state_30143[(2)]);
var state_30143__$1 = state_30143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30143__$1,inst_30141);
} else {
if((state_val_30144 === (4))){
var inst_30131 = (state_30143[(2)]);
var inst_30134 = process(inst_30131);
var state_30143__$1 = state_30143;
if(cljs.core.truth_(inst_30134)){
var statearr_30158_32794 = state_30143__$1;
(statearr_30158_32794[(1)] = (5));

} else {
var statearr_30160_32795 = state_30143__$1;
(statearr_30160_32795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (5))){
var state_30143__$1 = state_30143;
var statearr_30180_32796 = state_30143__$1;
(statearr_30180_32796[(2)] = null);

(statearr_30180_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (6))){
var state_30143__$1 = state_30143;
var statearr_30182_32800 = state_30143__$1;
(statearr_30182_32800[(2)] = null);

(statearr_30182_32800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (7))){
var inst_30139 = (state_30143[(2)]);
var state_30143__$1 = state_30143;
var statearr_30190_32803 = state_30143__$1;
(statearr_30190_32803[(2)] = inst_30139);

(statearr_30190_32803[(1)] = (3));


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
});})(__32782,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
;
return ((function (__32782,switch__29611__auto__,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_30198 = [null,null,null,null,null,null,null];
(statearr_30198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__);

(statearr_30198[(1)] = (1));

return statearr_30198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1 = (function (state_30143){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30143);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30206){var ex__29615__auto__ = e30206;
var statearr_30208_32804 = state_30143;
(statearr_30208_32804[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30143[(4)]))){
var statearr_30211_32806 = state_30143;
(statearr_30211_32806[(1)] = cljs.core.first((state_30143[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32807 = state_30143;
state_30143 = G__32807;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = function(state_30143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1.call(this,state_30143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__;
})()
;})(__32782,switch__29611__auto__,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
})();
var state__29732__auto__ = (function (){var statearr_30221 = f__29731__auto__();
(statearr_30221[(6)] = c__29730__auto___32786);

return statearr_30221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
});})(__32782,c__29730__auto___32786,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
);


break;
case "async":
var c__29730__auto___32808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32782,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = ((function (__32782,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function (state_30241){
var state_val_30242 = (state_30241[(1)]);
if((state_val_30242 === (1))){
var state_30241__$1 = state_30241;
var statearr_30244_32809 = state_30241__$1;
(statearr_30244_32809[(2)] = null);

(statearr_30244_32809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (2))){
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30241__$1,(4),jobs);
} else {
if((state_val_30242 === (3))){
var inst_30238 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30241__$1,inst_30238);
} else {
if((state_val_30242 === (4))){
var inst_30230 = (state_30241[(2)]);
var inst_30231 = async(inst_30230);
var state_30241__$1 = state_30241;
if(cljs.core.truth_(inst_30231)){
var statearr_30245_32810 = state_30241__$1;
(statearr_30245_32810[(1)] = (5));

} else {
var statearr_30246_32811 = state_30241__$1;
(statearr_30246_32811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (5))){
var state_30241__$1 = state_30241;
var statearr_30248_32812 = state_30241__$1;
(statearr_30248_32812[(2)] = null);

(statearr_30248_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (6))){
var state_30241__$1 = state_30241;
var statearr_30250_32813 = state_30241__$1;
(statearr_30250_32813[(2)] = null);

(statearr_30250_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (7))){
var inst_30236 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30252_32814 = state_30241__$1;
(statearr_30252_32814[(2)] = inst_30236);

(statearr_30252_32814[(1)] = (3));


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
});})(__32782,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
;
return ((function (__32782,switch__29611__auto__,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_30255 = [null,null,null,null,null,null,null];
(statearr_30255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__);

(statearr_30255[(1)] = (1));

return statearr_30255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1 = (function (state_30241){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30241);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30257){var ex__29615__auto__ = e30257;
var statearr_30258_32816 = state_30241;
(statearr_30258_32816[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30241[(4)]))){
var statearr_30259_32817 = state_30241;
(statearr_30259_32817[(1)] = cljs.core.first((state_30241[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32818 = state_30241;
state_30241 = G__32818;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = function(state_30241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1.call(this,state_30241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__;
})()
;})(__32782,switch__29611__auto__,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
})();
var state__29732__auto__ = (function (){var statearr_30261 = f__29731__auto__();
(statearr_30261[(6)] = c__29730__auto___32808);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
});})(__32782,c__29730__auto___32808,G__30125_32783,G__30125_32784__$1,n__4613__auto___32781,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30125_32784__$1)].join('')));

}

var G__32819 = (__32782 + (1));
__32782 = G__32819;
continue;
} else {
}
break;
}

var c__29730__auto___32820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30285){
var state_val_30287 = (state_30285[(1)]);
if((state_val_30287 === (7))){
var inst_30280 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
var statearr_30289_32821 = state_30285__$1;
(statearr_30289_32821[(2)] = inst_30280);

(statearr_30289_32821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (1))){
var state_30285__$1 = state_30285;
var statearr_30290_32822 = state_30285__$1;
(statearr_30290_32822[(2)] = null);

(statearr_30290_32822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (4))){
var inst_30264 = (state_30285[(7)]);
var inst_30264__$1 = (state_30285[(2)]);
var inst_30265 = (inst_30264__$1 == null);
var state_30285__$1 = (function (){var statearr_30291 = state_30285;
(statearr_30291[(7)] = inst_30264__$1);

return statearr_30291;
})();
if(cljs.core.truth_(inst_30265)){
var statearr_30292_32826 = state_30285__$1;
(statearr_30292_32826[(1)] = (5));

} else {
var statearr_30293_32827 = state_30285__$1;
(statearr_30293_32827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (6))){
var inst_30269 = (state_30285[(8)]);
var inst_30264 = (state_30285[(7)]);
var inst_30269__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30272 = [inst_30264,inst_30269__$1];
var inst_30273 = (new cljs.core.PersistentVector(null,2,(5),inst_30270,inst_30272,null));
var state_30285__$1 = (function (){var statearr_30294 = state_30285;
(statearr_30294[(8)] = inst_30269__$1);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30285__$1,(8),jobs,inst_30273);
} else {
if((state_val_30287 === (3))){
var inst_30282 = (state_30285[(2)]);
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30285__$1,inst_30282);
} else {
if((state_val_30287 === (2))){
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30285__$1,(4),from);
} else {
if((state_val_30287 === (9))){
var inst_30277 = (state_30285[(2)]);
var state_30285__$1 = (function (){var statearr_30296 = state_30285;
(statearr_30296[(9)] = inst_30277);

return statearr_30296;
})();
var statearr_30297_32833 = state_30285__$1;
(statearr_30297_32833[(2)] = null);

(statearr_30297_32833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (5))){
var inst_30267 = cljs.core.async.close_BANG_(jobs);
var state_30285__$1 = state_30285;
var statearr_30298_32836 = state_30285__$1;
(statearr_30298_32836[(2)] = inst_30267);

(statearr_30298_32836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (8))){
var inst_30269 = (state_30285[(8)]);
var inst_30275 = (state_30285[(2)]);
var state_30285__$1 = (function (){var statearr_30300 = state_30285;
(statearr_30300[(10)] = inst_30275);

return statearr_30300;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30285__$1,(9),results,inst_30269);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1 = (function (state_30285){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30285);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30305){var ex__29615__auto__ = e30305;
var statearr_30306_32838 = state_30285;
(statearr_30306_32838[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30285[(4)]))){
var statearr_30307_32842 = state_30285;
(statearr_30307_32842[(1)] = cljs.core.first((state_30285[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32843 = state_30285;
state_30285 = G__32843;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = function(state_30285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1.call(this,state_30285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30308 = f__29731__auto__();
(statearr_30308[(6)] = c__29730__auto___32820);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


var c__29730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30350){
var state_val_30351 = (state_30350[(1)]);
if((state_val_30351 === (7))){
var inst_30346 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30354_32849 = state_30350__$1;
(statearr_30354_32849[(2)] = inst_30346);

(statearr_30354_32849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (20))){
var state_30350__$1 = state_30350;
var statearr_30358_32851 = state_30350__$1;
(statearr_30358_32851[(2)] = null);

(statearr_30358_32851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (1))){
var state_30350__$1 = state_30350;
var statearr_30359_32855 = state_30350__$1;
(statearr_30359_32855[(2)] = null);

(statearr_30359_32855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (4))){
var inst_30312 = (state_30350[(7)]);
var inst_30312__$1 = (state_30350[(2)]);
var inst_30313 = (inst_30312__$1 == null);
var state_30350__$1 = (function (){var statearr_30360 = state_30350;
(statearr_30360[(7)] = inst_30312__$1);

return statearr_30360;
})();
if(cljs.core.truth_(inst_30313)){
var statearr_30361_32866 = state_30350__$1;
(statearr_30361_32866[(1)] = (5));

} else {
var statearr_30362_32867 = state_30350__$1;
(statearr_30362_32867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (15))){
var inst_30328 = (state_30350[(8)]);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30350__$1,(18),to,inst_30328);
} else {
if((state_val_30351 === (21))){
var inst_30341 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30364_32868 = state_30350__$1;
(statearr_30364_32868[(2)] = inst_30341);

(statearr_30364_32868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (13))){
var inst_30343 = (state_30350[(2)]);
var state_30350__$1 = (function (){var statearr_30368 = state_30350;
(statearr_30368[(9)] = inst_30343);

return statearr_30368;
})();
var statearr_30369_32869 = state_30350__$1;
(statearr_30369_32869[(2)] = null);

(statearr_30369_32869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (6))){
var inst_30312 = (state_30350[(7)]);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30350__$1,(11),inst_30312);
} else {
if((state_val_30351 === (17))){
var inst_30336 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
if(cljs.core.truth_(inst_30336)){
var statearr_30370_32870 = state_30350__$1;
(statearr_30370_32870[(1)] = (19));

} else {
var statearr_30371_32871 = state_30350__$1;
(statearr_30371_32871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (3))){
var inst_30348 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30350__$1,inst_30348);
} else {
if((state_val_30351 === (12))){
var inst_30324 = (state_30350[(10)]);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30350__$1,(14),inst_30324);
} else {
if((state_val_30351 === (2))){
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30350__$1,(4),results);
} else {
if((state_val_30351 === (19))){
var state_30350__$1 = state_30350;
var statearr_30372_32872 = state_30350__$1;
(statearr_30372_32872[(2)] = null);

(statearr_30372_32872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (11))){
var inst_30324 = (state_30350[(2)]);
var state_30350__$1 = (function (){var statearr_30373 = state_30350;
(statearr_30373[(10)] = inst_30324);

return statearr_30373;
})();
var statearr_30375_32873 = state_30350__$1;
(statearr_30375_32873[(2)] = null);

(statearr_30375_32873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (9))){
var state_30350__$1 = state_30350;
var statearr_30378_32874 = state_30350__$1;
(statearr_30378_32874[(2)] = null);

(statearr_30378_32874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (5))){
var state_30350__$1 = state_30350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30379_32875 = state_30350__$1;
(statearr_30379_32875[(1)] = (8));

} else {
var statearr_30380_32876 = state_30350__$1;
(statearr_30380_32876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (14))){
var inst_30328 = (state_30350[(8)]);
var inst_30328__$1 = (state_30350[(2)]);
var inst_30329 = (inst_30328__$1 == null);
var inst_30330 = cljs.core.not(inst_30329);
var state_30350__$1 = (function (){var statearr_30382 = state_30350;
(statearr_30382[(8)] = inst_30328__$1);

return statearr_30382;
})();
if(inst_30330){
var statearr_30383_32884 = state_30350__$1;
(statearr_30383_32884[(1)] = (15));

} else {
var statearr_30384_32886 = state_30350__$1;
(statearr_30384_32886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (16))){
var state_30350__$1 = state_30350;
var statearr_30385_32887 = state_30350__$1;
(statearr_30385_32887[(2)] = false);

(statearr_30385_32887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (10))){
var inst_30320 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30389_32894 = state_30350__$1;
(statearr_30389_32894[(2)] = inst_30320);

(statearr_30389_32894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (18))){
var inst_30333 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30390_32895 = state_30350__$1;
(statearr_30390_32895[(2)] = inst_30333);

(statearr_30390_32895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (8))){
var inst_30316 = cljs.core.async.close_BANG_(to);
var state_30350__$1 = state_30350;
var statearr_30391_32896 = state_30350__$1;
(statearr_30391_32896[(2)] = inst_30316);

(statearr_30391_32896[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_30392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__);

(statearr_30392[(1)] = (1));

return statearr_30392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1 = (function (state_30350){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30350);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30396){var ex__29615__auto__ = e30396;
var statearr_30397_32903 = state_30350;
(statearr_30397_32903[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30350[(4)]))){
var statearr_30398_32904 = state_30350;
(statearr_30398_32904[(1)] = cljs.core.first((state_30350[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_30350;
state_30350 = G__32905;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__ = function(state_30350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1.call(this,state_30350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30399 = f__29731__auto__();
(statearr_30399[(6)] = c__29730__auto__);

return statearr_30399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

return c__29730__auto__;
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
var G__30401 = arguments.length;
switch (G__30401) {
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
var G__30406 = arguments.length;
switch (G__30406) {
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
var G__30415 = arguments.length;
switch (G__30415) {
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
var c__29730__auto___32923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (7))){
var inst_30437 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30443_32925 = state_30441__$1;
(statearr_30443_32925[(2)] = inst_30437);

(statearr_30443_32925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (1))){
var state_30441__$1 = state_30441;
var statearr_30444_32926 = state_30441__$1;
(statearr_30444_32926[(2)] = null);

(statearr_30444_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (4))){
var inst_30418 = (state_30441[(7)]);
var inst_30418__$1 = (state_30441[(2)]);
var inst_30419 = (inst_30418__$1 == null);
var state_30441__$1 = (function (){var statearr_30445 = state_30441;
(statearr_30445[(7)] = inst_30418__$1);

return statearr_30445;
})();
if(cljs.core.truth_(inst_30419)){
var statearr_30449_32931 = state_30441__$1;
(statearr_30449_32931[(1)] = (5));

} else {
var statearr_30450_32932 = state_30441__$1;
(statearr_30450_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (13))){
var state_30441__$1 = state_30441;
var statearr_30451_32936 = state_30441__$1;
(statearr_30451_32936[(2)] = null);

(statearr_30451_32936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (6))){
var inst_30418 = (state_30441[(7)]);
var inst_30424 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30418) : p.call(null,inst_30418));
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30424)){
var statearr_30454_32940 = state_30441__$1;
(statearr_30454_32940[(1)] = (9));

} else {
var statearr_30456_32941 = state_30441__$1;
(statearr_30456_32941[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (3))){
var inst_30439 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30441__$1,inst_30439);
} else {
if((state_val_30442 === (12))){
var state_30441__$1 = state_30441;
var statearr_30458_32942 = state_30441__$1;
(statearr_30458_32942[(2)] = null);

(statearr_30458_32942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (2))){
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30441__$1,(4),ch);
} else {
if((state_val_30442 === (11))){
var inst_30418 = (state_30441[(7)]);
var inst_30428 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30441__$1,(8),inst_30428,inst_30418);
} else {
if((state_val_30442 === (9))){
var state_30441__$1 = state_30441;
var statearr_30462_32946 = state_30441__$1;
(statearr_30462_32946[(2)] = tc);

(statearr_30462_32946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (5))){
var inst_30421 = cljs.core.async.close_BANG_(tc);
var inst_30422 = cljs.core.async.close_BANG_(fc);
var state_30441__$1 = (function (){var statearr_30465 = state_30441;
(statearr_30465[(8)] = inst_30421);

return statearr_30465;
})();
var statearr_30467_32947 = state_30441__$1;
(statearr_30467_32947[(2)] = inst_30422);

(statearr_30467_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (14))){
var inst_30435 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30471_32948 = state_30441__$1;
(statearr_30471_32948[(2)] = inst_30435);

(statearr_30471_32948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (10))){
var state_30441__$1 = state_30441;
var statearr_30472_32949 = state_30441__$1;
(statearr_30472_32949[(2)] = fc);

(statearr_30472_32949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (8))){
var inst_30430 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30430)){
var statearr_30473_32951 = state_30441__$1;
(statearr_30473_32951[(1)] = (12));

} else {
var statearr_30474_32955 = state_30441__$1;
(statearr_30474_32955[(1)] = (13));

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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_30479 = [null,null,null,null,null,null,null,null,null];
(statearr_30479[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_30479[(1)] = (1));

return statearr_30479;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_30441){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30441);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30481){var ex__29615__auto__ = e30481;
var statearr_30482_32967 = state_30441;
(statearr_30482_32967[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30441[(4)]))){
var statearr_30483_32968 = state_30441;
(statearr_30483_32968[(1)] = cljs.core.first((state_30441[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32969 = state_30441;
state_30441 = G__32969;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30493 = f__29731__auto__();
(statearr_30493[(6)] = c__29730__auto___32923);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var c__29730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (7))){
var inst_30532 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30541_32970 = state_30537__$1;
(statearr_30541_32970[(2)] = inst_30532);

(statearr_30541_32970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (1))){
var inst_30501 = init;
var inst_30503 = inst_30501;
var state_30537__$1 = (function (){var statearr_30546 = state_30537;
(statearr_30546[(7)] = inst_30503);

return statearr_30546;
})();
var statearr_30547_32971 = state_30537__$1;
(statearr_30547_32971[(2)] = null);

(statearr_30547_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (4))){
var inst_30510 = (state_30537[(8)]);
var inst_30510__$1 = (state_30537[(2)]);
var inst_30511 = (inst_30510__$1 == null);
var state_30537__$1 = (function (){var statearr_30553 = state_30537;
(statearr_30553[(8)] = inst_30510__$1);

return statearr_30553;
})();
if(cljs.core.truth_(inst_30511)){
var statearr_30557_32972 = state_30537__$1;
(statearr_30557_32972[(1)] = (5));

} else {
var statearr_30558_32975 = state_30537__$1;
(statearr_30558_32975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (6))){
var inst_30503 = (state_30537[(7)]);
var inst_30514 = (state_30537[(9)]);
var inst_30510 = (state_30537[(8)]);
var inst_30514__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30503,inst_30510) : f.call(null,inst_30503,inst_30510));
var inst_30517 = cljs.core.reduced_QMARK_(inst_30514__$1);
var state_30537__$1 = (function (){var statearr_30560 = state_30537;
(statearr_30560[(9)] = inst_30514__$1);

return statearr_30560;
})();
if(inst_30517){
var statearr_30563_32977 = state_30537__$1;
(statearr_30563_32977[(1)] = (8));

} else {
var statearr_30565_32978 = state_30537__$1;
(statearr_30565_32978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (3))){
var inst_30534 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30537__$1,inst_30534);
} else {
if((state_val_30538 === (2))){
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30537__$1,(4),ch);
} else {
if((state_val_30538 === (9))){
var inst_30514 = (state_30537[(9)]);
var inst_30503 = inst_30514;
var state_30537__$1 = (function (){var statearr_30571 = state_30537;
(statearr_30571[(7)] = inst_30503);

return statearr_30571;
})();
var statearr_30572_32980 = state_30537__$1;
(statearr_30572_32980[(2)] = null);

(statearr_30572_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (5))){
var inst_30503 = (state_30537[(7)]);
var state_30537__$1 = state_30537;
var statearr_30574_32982 = state_30537__$1;
(statearr_30574_32982[(2)] = inst_30503);

(statearr_30574_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (10))){
var inst_30528 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30575_32983 = state_30537__$1;
(statearr_30575_32983[(2)] = inst_30528);

(statearr_30575_32983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (8))){
var inst_30514 = (state_30537[(9)]);
var inst_30523 = cljs.core.deref(inst_30514);
var state_30537__$1 = state_30537;
var statearr_30576_32985 = state_30537__$1;
(statearr_30576_32985[(2)] = inst_30523);

(statearr_30576_32985[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29612__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29612__auto____0 = (function (){
var statearr_30579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30579[(0)] = cljs$core$async$reduce_$_state_machine__29612__auto__);

(statearr_30579[(1)] = (1));

return statearr_30579;
});
var cljs$core$async$reduce_$_state_machine__29612__auto____1 = (function (state_30537){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30537);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30580){var ex__29615__auto__ = e30580;
var statearr_30581_32987 = state_30537;
(statearr_30581_32987[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30537[(4)]))){
var statearr_30604_32988 = state_30537;
(statearr_30604_32988[(1)] = cljs.core.first((state_30537[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32989 = state_30537;
state_30537 = G__32989;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29612__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29612__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29612__auto____0;
cljs$core$async$reduce_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29612__auto____1;
return cljs$core$async$reduce_$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30608 = f__29731__auto__();
(statearr_30608[(6)] = c__29730__auto__);

return statearr_30608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

return c__29730__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30621){
var state_val_30622 = (state_30621[(1)]);
if((state_val_30622 === (1))){
var inst_30616 = cljs.core.async.reduce(f__$1,init,ch);
var state_30621__$1 = state_30621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30621__$1,(2),inst_30616);
} else {
if((state_val_30622 === (2))){
var inst_30618 = (state_30621[(2)]);
var inst_30619 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30618) : f__$1.call(null,inst_30618));
var state_30621__$1 = state_30621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30621__$1,inst_30619);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29612__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29612__auto____0 = (function (){
var statearr_30624 = [null,null,null,null,null,null,null];
(statearr_30624[(0)] = cljs$core$async$transduce_$_state_machine__29612__auto__);

(statearr_30624[(1)] = (1));

return statearr_30624;
});
var cljs$core$async$transduce_$_state_machine__29612__auto____1 = (function (state_30621){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30621);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30625){var ex__29615__auto__ = e30625;
var statearr_30628_32991 = state_30621;
(statearr_30628_32991[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30621[(4)]))){
var statearr_30629_32993 = state_30621;
(statearr_30629_32993[(1)] = cljs.core.first((state_30621[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32995 = state_30621;
state_30621 = G__32995;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29612__auto__ = function(state_30621){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29612__auto____1.call(this,state_30621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29612__auto____0;
cljs$core$async$transduce_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29612__auto____1;
return cljs$core$async$transduce_$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30636 = f__29731__auto__();
(statearr_30636[(6)] = c__29730__auto__);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

return c__29730__auto__;
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
var G__30640 = arguments.length;
switch (G__30640) {
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
var c__29730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30684){
var state_val_30686 = (state_30684[(1)]);
if((state_val_30686 === (7))){
var inst_30660 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30698_33009 = state_30684__$1;
(statearr_30698_33009[(2)] = inst_30660);

(statearr_30698_33009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (1))){
var inst_30653 = cljs.core.seq(coll);
var inst_30654 = inst_30653;
var state_30684__$1 = (function (){var statearr_30712 = state_30684;
(statearr_30712[(7)] = inst_30654);

return statearr_30712;
})();
var statearr_30719_33010 = state_30684__$1;
(statearr_30719_33010[(2)] = null);

(statearr_30719_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (4))){
var inst_30654 = (state_30684[(7)]);
var inst_30658 = cljs.core.first(inst_30654);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30684__$1,(7),ch,inst_30658);
} else {
if((state_val_30686 === (13))){
var inst_30677 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30736_33012 = state_30684__$1;
(statearr_30736_33012[(2)] = inst_30677);

(statearr_30736_33012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (6))){
var inst_30663 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
if(cljs.core.truth_(inst_30663)){
var statearr_30738_33014 = state_30684__$1;
(statearr_30738_33014[(1)] = (8));

} else {
var statearr_30745_33015 = state_30684__$1;
(statearr_30745_33015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (3))){
var inst_30681 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30684__$1,inst_30681);
} else {
if((state_val_30686 === (12))){
var state_30684__$1 = state_30684;
var statearr_30750_33017 = state_30684__$1;
(statearr_30750_33017[(2)] = null);

(statearr_30750_33017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (2))){
var inst_30654 = (state_30684[(7)]);
var state_30684__$1 = state_30684;
if(cljs.core.truth_(inst_30654)){
var statearr_30751_33018 = state_30684__$1;
(statearr_30751_33018[(1)] = (4));

} else {
var statearr_30755_33019 = state_30684__$1;
(statearr_30755_33019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (11))){
var inst_30674 = cljs.core.async.close_BANG_(ch);
var state_30684__$1 = state_30684;
var statearr_30756_33020 = state_30684__$1;
(statearr_30756_33020[(2)] = inst_30674);

(statearr_30756_33020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (9))){
var state_30684__$1 = state_30684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30757_33026 = state_30684__$1;
(statearr_30757_33026[(1)] = (11));

} else {
var statearr_30758_33027 = state_30684__$1;
(statearr_30758_33027[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (5))){
var inst_30654 = (state_30684[(7)]);
var state_30684__$1 = state_30684;
var statearr_30759_33032 = state_30684__$1;
(statearr_30759_33032[(2)] = inst_30654);

(statearr_30759_33032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (10))){
var inst_30679 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30760_33036 = state_30684__$1;
(statearr_30760_33036[(2)] = inst_30679);

(statearr_30760_33036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (8))){
var inst_30654 = (state_30684[(7)]);
var inst_30669 = cljs.core.next(inst_30654);
var inst_30654__$1 = inst_30669;
var state_30684__$1 = (function (){var statearr_30761 = state_30684;
(statearr_30761[(7)] = inst_30654__$1);

return statearr_30761;
})();
var statearr_30762_33037 = state_30684__$1;
(statearr_30762_33037[(2)] = null);

(statearr_30762_33037[(1)] = (2));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_30763 = [null,null,null,null,null,null,null,null];
(statearr_30763[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_30763[(1)] = (1));

return statearr_30763;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_30684){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30684);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e30764){var ex__29615__auto__ = e30764;
var statearr_30765_33046 = state_30684;
(statearr_30765_33046[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30684[(4)]))){
var statearr_30766_33050 = state_30684;
(statearr_30766_33050[(1)] = cljs.core.first((state_30684[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33074 = state_30684;
state_30684 = G__33074;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_30684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_30684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_30767 = f__29731__auto__();
(statearr_30767[(6)] = c__29730__auto__);

return statearr_30767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

return c__29730__auto__;
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
var G__30771 = arguments.length;
switch (G__30771) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33084 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33084(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33090 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33090(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33093 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33093(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33097 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33097(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30792 = (function (ch,cs,meta30793){
this.ch = ch;
this.cs = cs;
this.meta30793 = meta30793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30794,meta30793__$1){
var self__ = this;
var _30794__$1 = this;
return (new cljs.core.async.t_cljs$core$async30792(self__.ch,self__.cs,meta30793__$1));
}));

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30794){
var self__ = this;
var _30794__$1 = this;
return self__.meta30793;
}));

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30792.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30793","meta30793",1437842446,null)], null);
}));

(cljs.core.async.t_cljs$core$async30792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30792");

(cljs.core.async.t_cljs$core$async30792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30792.
 */
cljs.core.async.__GT_t_cljs$core$async30792 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30792(ch__$1,cs__$1,meta30793){
return (new cljs.core.async.t_cljs$core$async30792(ch__$1,cs__$1,meta30793));
});

}

return (new cljs.core.async.t_cljs$core$async30792(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29730__auto___33102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_30939){
var state_val_30940 = (state_30939[(1)]);
if((state_val_30940 === (7))){
var inst_30931 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30941_33103 = state_30939__$1;
(statearr_30941_33103[(2)] = inst_30931);

(statearr_30941_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (20))){
var inst_30832 = (state_30939[(7)]);
var inst_30847 = cljs.core.first(inst_30832);
var inst_30848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30847,(0),null);
var inst_30849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30847,(1),null);
var state_30939__$1 = (function (){var statearr_30942 = state_30939;
(statearr_30942[(8)] = inst_30848);

return statearr_30942;
})();
if(cljs.core.truth_(inst_30849)){
var statearr_30943_33104 = state_30939__$1;
(statearr_30943_33104[(1)] = (22));

} else {
var statearr_30944_33105 = state_30939__$1;
(statearr_30944_33105[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (27))){
var inst_30879 = (state_30939[(9)]);
var inst_30884 = (state_30939[(10)]);
var inst_30798 = (state_30939[(11)]);
var inst_30877 = (state_30939[(12)]);
var inst_30884__$1 = cljs.core._nth(inst_30877,inst_30879);
var inst_30885 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30884__$1,inst_30798,done);
var state_30939__$1 = (function (){var statearr_30949 = state_30939;
(statearr_30949[(10)] = inst_30884__$1);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30885)){
var statearr_30950_33110 = state_30939__$1;
(statearr_30950_33110[(1)] = (30));

} else {
var statearr_30951_33111 = state_30939__$1;
(statearr_30951_33111[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (1))){
var state_30939__$1 = state_30939;
var statearr_30952_33113 = state_30939__$1;
(statearr_30952_33113[(2)] = null);

(statearr_30952_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (24))){
var inst_30832 = (state_30939[(7)]);
var inst_30854 = (state_30939[(2)]);
var inst_30855 = cljs.core.next(inst_30832);
var inst_30807 = inst_30855;
var inst_30808 = null;
var inst_30809 = (0);
var inst_30810 = (0);
var state_30939__$1 = (function (){var statearr_30954 = state_30939;
(statearr_30954[(13)] = inst_30808);

(statearr_30954[(14)] = inst_30810);

(statearr_30954[(15)] = inst_30807);

(statearr_30954[(16)] = inst_30809);

(statearr_30954[(17)] = inst_30854);

return statearr_30954;
})();
var statearr_30955_33114 = state_30939__$1;
(statearr_30955_33114[(2)] = null);

(statearr_30955_33114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (39))){
var state_30939__$1 = state_30939;
var statearr_30960_33115 = state_30939__$1;
(statearr_30960_33115[(2)] = null);

(statearr_30960_33115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (4))){
var inst_30798 = (state_30939[(11)]);
var inst_30798__$1 = (state_30939[(2)]);
var inst_30799 = (inst_30798__$1 == null);
var state_30939__$1 = (function (){var statearr_30961 = state_30939;
(statearr_30961[(11)] = inst_30798__$1);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30799)){
var statearr_30962_33121 = state_30939__$1;
(statearr_30962_33121[(1)] = (5));

} else {
var statearr_30967_33122 = state_30939__$1;
(statearr_30967_33122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (15))){
var inst_30808 = (state_30939[(13)]);
var inst_30810 = (state_30939[(14)]);
var inst_30807 = (state_30939[(15)]);
var inst_30809 = (state_30939[(16)]);
var inst_30828 = (state_30939[(2)]);
var inst_30829 = (inst_30810 + (1));
var tmp30957 = inst_30808;
var tmp30958 = inst_30807;
var tmp30959 = inst_30809;
var inst_30807__$1 = tmp30958;
var inst_30808__$1 = tmp30957;
var inst_30809__$1 = tmp30959;
var inst_30810__$1 = inst_30829;
var state_30939__$1 = (function (){var statearr_30968 = state_30939;
(statearr_30968[(13)] = inst_30808__$1);

(statearr_30968[(14)] = inst_30810__$1);

(statearr_30968[(18)] = inst_30828);

(statearr_30968[(15)] = inst_30807__$1);

(statearr_30968[(16)] = inst_30809__$1);

return statearr_30968;
})();
var statearr_30969_33135 = state_30939__$1;
(statearr_30969_33135[(2)] = null);

(statearr_30969_33135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (21))){
var inst_30858 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30973_33136 = state_30939__$1;
(statearr_30973_33136[(2)] = inst_30858);

(statearr_30973_33136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (31))){
var inst_30884 = (state_30939[(10)]);
var inst_30888 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30884);
var state_30939__$1 = state_30939;
var statearr_30974_33137 = state_30939__$1;
(statearr_30974_33137[(2)] = inst_30888);

(statearr_30974_33137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (32))){
var inst_30879 = (state_30939[(9)]);
var inst_30876 = (state_30939[(19)]);
var inst_30878 = (state_30939[(20)]);
var inst_30877 = (state_30939[(12)]);
var inst_30890 = (state_30939[(2)]);
var inst_30891 = (inst_30879 + (1));
var tmp30970 = inst_30876;
var tmp30971 = inst_30878;
var tmp30972 = inst_30877;
var inst_30876__$1 = tmp30970;
var inst_30877__$1 = tmp30972;
var inst_30878__$1 = tmp30971;
var inst_30879__$1 = inst_30891;
var state_30939__$1 = (function (){var statearr_30975 = state_30939;
(statearr_30975[(9)] = inst_30879__$1);

(statearr_30975[(21)] = inst_30890);

(statearr_30975[(19)] = inst_30876__$1);

(statearr_30975[(20)] = inst_30878__$1);

(statearr_30975[(12)] = inst_30877__$1);

return statearr_30975;
})();
var statearr_30977_33143 = state_30939__$1;
(statearr_30977_33143[(2)] = null);

(statearr_30977_33143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (40))){
var inst_30903 = (state_30939[(22)]);
var inst_30907 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30903);
var state_30939__$1 = state_30939;
var statearr_30982_33144 = state_30939__$1;
(statearr_30982_33144[(2)] = inst_30907);

(statearr_30982_33144[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (33))){
var inst_30894 = (state_30939[(23)]);
var inst_30896 = cljs.core.chunked_seq_QMARK_(inst_30894);
var state_30939__$1 = state_30939;
if(inst_30896){
var statearr_30983_33145 = state_30939__$1;
(statearr_30983_33145[(1)] = (36));

} else {
var statearr_30984_33146 = state_30939__$1;
(statearr_30984_33146[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (13))){
var inst_30822 = (state_30939[(24)]);
var inst_30825 = cljs.core.async.close_BANG_(inst_30822);
var state_30939__$1 = state_30939;
var statearr_30986_33147 = state_30939__$1;
(statearr_30986_33147[(2)] = inst_30825);

(statearr_30986_33147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (22))){
var inst_30848 = (state_30939[(8)]);
var inst_30851 = cljs.core.async.close_BANG_(inst_30848);
var state_30939__$1 = state_30939;
var statearr_30987_33149 = state_30939__$1;
(statearr_30987_33149[(2)] = inst_30851);

(statearr_30987_33149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (36))){
var inst_30894 = (state_30939[(23)]);
var inst_30898 = cljs.core.chunk_first(inst_30894);
var inst_30899 = cljs.core.chunk_rest(inst_30894);
var inst_30900 = cljs.core.count(inst_30898);
var inst_30876 = inst_30899;
var inst_30877 = inst_30898;
var inst_30878 = inst_30900;
var inst_30879 = (0);
var state_30939__$1 = (function (){var statearr_30988 = state_30939;
(statearr_30988[(9)] = inst_30879);

(statearr_30988[(19)] = inst_30876);

(statearr_30988[(20)] = inst_30878);

(statearr_30988[(12)] = inst_30877);

return statearr_30988;
})();
var statearr_30989_33152 = state_30939__$1;
(statearr_30989_33152[(2)] = null);

(statearr_30989_33152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (41))){
var inst_30894 = (state_30939[(23)]);
var inst_30909 = (state_30939[(2)]);
var inst_30910 = cljs.core.next(inst_30894);
var inst_30876 = inst_30910;
var inst_30877 = null;
var inst_30878 = (0);
var inst_30879 = (0);
var state_30939__$1 = (function (){var statearr_30994 = state_30939;
(statearr_30994[(9)] = inst_30879);

(statearr_30994[(19)] = inst_30876);

(statearr_30994[(20)] = inst_30878);

(statearr_30994[(25)] = inst_30909);

(statearr_30994[(12)] = inst_30877);

return statearr_30994;
})();
var statearr_31001_33153 = state_30939__$1;
(statearr_31001_33153[(2)] = null);

(statearr_31001_33153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (43))){
var state_30939__$1 = state_30939;
var statearr_31002_33156 = state_30939__$1;
(statearr_31002_33156[(2)] = null);

(statearr_31002_33156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (29))){
var inst_30918 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31009_33161 = state_30939__$1;
(statearr_31009_33161[(2)] = inst_30918);

(statearr_31009_33161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (44))){
var inst_30928 = (state_30939[(2)]);
var state_30939__$1 = (function (){var statearr_31010 = state_30939;
(statearr_31010[(26)] = inst_30928);

return statearr_31010;
})();
var statearr_31011_33166 = state_30939__$1;
(statearr_31011_33166[(2)] = null);

(statearr_31011_33166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (6))){
var inst_30868 = (state_30939[(27)]);
var inst_30867 = cljs.core.deref(cs);
var inst_30868__$1 = cljs.core.keys(inst_30867);
var inst_30869 = cljs.core.count(inst_30868__$1);
var inst_30870 = cljs.core.reset_BANG_(dctr,inst_30869);
var inst_30875 = cljs.core.seq(inst_30868__$1);
var inst_30876 = inst_30875;
var inst_30877 = null;
var inst_30878 = (0);
var inst_30879 = (0);
var state_30939__$1 = (function (){var statearr_31012 = state_30939;
(statearr_31012[(9)] = inst_30879);

(statearr_31012[(19)] = inst_30876);

(statearr_31012[(20)] = inst_30878);

(statearr_31012[(27)] = inst_30868__$1);

(statearr_31012[(28)] = inst_30870);

(statearr_31012[(12)] = inst_30877);

return statearr_31012;
})();
var statearr_31013_33167 = state_30939__$1;
(statearr_31013_33167[(2)] = null);

(statearr_31013_33167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (28))){
var inst_30876 = (state_30939[(19)]);
var inst_30894 = (state_30939[(23)]);
var inst_30894__$1 = cljs.core.seq(inst_30876);
var state_30939__$1 = (function (){var statearr_31015 = state_30939;
(statearr_31015[(23)] = inst_30894__$1);

return statearr_31015;
})();
if(inst_30894__$1){
var statearr_31016_33168 = state_30939__$1;
(statearr_31016_33168[(1)] = (33));

} else {
var statearr_31017_33171 = state_30939__$1;
(statearr_31017_33171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (25))){
var inst_30879 = (state_30939[(9)]);
var inst_30878 = (state_30939[(20)]);
var inst_30881 = (inst_30879 < inst_30878);
var inst_30882 = inst_30881;
var state_30939__$1 = state_30939;
if(cljs.core.truth_(inst_30882)){
var statearr_31018_33174 = state_30939__$1;
(statearr_31018_33174[(1)] = (27));

} else {
var statearr_31019_33175 = state_30939__$1;
(statearr_31019_33175[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (34))){
var state_30939__$1 = state_30939;
var statearr_31020_33177 = state_30939__$1;
(statearr_31020_33177[(2)] = null);

(statearr_31020_33177[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (17))){
var state_30939__$1 = state_30939;
var statearr_31022_33178 = state_30939__$1;
(statearr_31022_33178[(2)] = null);

(statearr_31022_33178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (3))){
var inst_30933 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30939__$1,inst_30933);
} else {
if((state_val_30940 === (12))){
var inst_30863 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31036_33182 = state_30939__$1;
(statearr_31036_33182[(2)] = inst_30863);

(statearr_31036_33182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (2))){
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30939__$1,(4),ch);
} else {
if((state_val_30940 === (23))){
var state_30939__$1 = state_30939;
var statearr_31037_33184 = state_30939__$1;
(statearr_31037_33184[(2)] = null);

(statearr_31037_33184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (35))){
var inst_30916 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31038_33185 = state_30939__$1;
(statearr_31038_33185[(2)] = inst_30916);

(statearr_31038_33185[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (19))){
var inst_30832 = (state_30939[(7)]);
var inst_30839 = cljs.core.chunk_first(inst_30832);
var inst_30840 = cljs.core.chunk_rest(inst_30832);
var inst_30841 = cljs.core.count(inst_30839);
var inst_30807 = inst_30840;
var inst_30808 = inst_30839;
var inst_30809 = inst_30841;
var inst_30810 = (0);
var state_30939__$1 = (function (){var statearr_31040 = state_30939;
(statearr_31040[(13)] = inst_30808);

(statearr_31040[(14)] = inst_30810);

(statearr_31040[(15)] = inst_30807);

(statearr_31040[(16)] = inst_30809);

return statearr_31040;
})();
var statearr_31041_33186 = state_30939__$1;
(statearr_31041_33186[(2)] = null);

(statearr_31041_33186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (11))){
var inst_30832 = (state_30939[(7)]);
var inst_30807 = (state_30939[(15)]);
var inst_30832__$1 = cljs.core.seq(inst_30807);
var state_30939__$1 = (function (){var statearr_31042 = state_30939;
(statearr_31042[(7)] = inst_30832__$1);

return statearr_31042;
})();
if(inst_30832__$1){
var statearr_31043_33192 = state_30939__$1;
(statearr_31043_33192[(1)] = (16));

} else {
var statearr_31044_33193 = state_30939__$1;
(statearr_31044_33193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (9))){
var inst_30865 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31045_33194 = state_30939__$1;
(statearr_31045_33194[(2)] = inst_30865);

(statearr_31045_33194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (5))){
var inst_30805 = cljs.core.deref(cs);
var inst_30806 = cljs.core.seq(inst_30805);
var inst_30807 = inst_30806;
var inst_30808 = null;
var inst_30809 = (0);
var inst_30810 = (0);
var state_30939__$1 = (function (){var statearr_31046 = state_30939;
(statearr_31046[(13)] = inst_30808);

(statearr_31046[(14)] = inst_30810);

(statearr_31046[(15)] = inst_30807);

(statearr_31046[(16)] = inst_30809);

return statearr_31046;
})();
var statearr_31047_33207 = state_30939__$1;
(statearr_31047_33207[(2)] = null);

(statearr_31047_33207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (14))){
var state_30939__$1 = state_30939;
var statearr_31048_33211 = state_30939__$1;
(statearr_31048_33211[(2)] = null);

(statearr_31048_33211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (45))){
var inst_30925 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31049_33213 = state_30939__$1;
(statearr_31049_33213[(2)] = inst_30925);

(statearr_31049_33213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (26))){
var inst_30868 = (state_30939[(27)]);
var inst_30920 = (state_30939[(2)]);
var inst_30921 = cljs.core.seq(inst_30868);
var state_30939__$1 = (function (){var statearr_31050 = state_30939;
(statearr_31050[(29)] = inst_30920);

return statearr_31050;
})();
if(inst_30921){
var statearr_31051_33219 = state_30939__$1;
(statearr_31051_33219[(1)] = (42));

} else {
var statearr_31052_33220 = state_30939__$1;
(statearr_31052_33220[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (16))){
var inst_30832 = (state_30939[(7)]);
var inst_30837 = cljs.core.chunked_seq_QMARK_(inst_30832);
var state_30939__$1 = state_30939;
if(inst_30837){
var statearr_31054_33226 = state_30939__$1;
(statearr_31054_33226[(1)] = (19));

} else {
var statearr_31055_33227 = state_30939__$1;
(statearr_31055_33227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (38))){
var inst_30913 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31058_33228 = state_30939__$1;
(statearr_31058_33228[(2)] = inst_30913);

(statearr_31058_33228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (30))){
var state_30939__$1 = state_30939;
var statearr_31061_33233 = state_30939__$1;
(statearr_31061_33233[(2)] = null);

(statearr_31061_33233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (10))){
var inst_30808 = (state_30939[(13)]);
var inst_30810 = (state_30939[(14)]);
var inst_30818 = cljs.core._nth(inst_30808,inst_30810);
var inst_30822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30818,(0),null);
var inst_30823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30818,(1),null);
var state_30939__$1 = (function (){var statearr_31063 = state_30939;
(statearr_31063[(24)] = inst_30822);

return statearr_31063;
})();
if(cljs.core.truth_(inst_30823)){
var statearr_31067_33236 = state_30939__$1;
(statearr_31067_33236[(1)] = (13));

} else {
var statearr_31068_33237 = state_30939__$1;
(statearr_31068_33237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (18))){
var inst_30861 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31073_33238 = state_30939__$1;
(statearr_31073_33238[(2)] = inst_30861);

(statearr_31073_33238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (42))){
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30939__$1,(45),dchan);
} else {
if((state_val_30940 === (37))){
var inst_30894 = (state_30939[(23)]);
var inst_30798 = (state_30939[(11)]);
var inst_30903 = (state_30939[(22)]);
var inst_30903__$1 = cljs.core.first(inst_30894);
var inst_30904 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30903__$1,inst_30798,done);
var state_30939__$1 = (function (){var statearr_31076 = state_30939;
(statearr_31076[(22)] = inst_30903__$1);

return statearr_31076;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_31077_33239 = state_30939__$1;
(statearr_31077_33239[(1)] = (39));

} else {
var statearr_31078_33240 = state_30939__$1;
(statearr_31078_33240[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30940 === (8))){
var inst_30810 = (state_30939[(14)]);
var inst_30809 = (state_30939[(16)]);
var inst_30812 = (inst_30810 < inst_30809);
var inst_30813 = inst_30812;
var state_30939__$1 = state_30939;
if(cljs.core.truth_(inst_30813)){
var statearr_31081_33242 = state_30939__$1;
(statearr_31081_33242[(1)] = (10));

} else {
var statearr_31083_33243 = state_30939__$1;
(statearr_31083_33243[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29612__auto__ = null;
var cljs$core$async$mult_$_state_machine__29612__auto____0 = (function (){
var statearr_31087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31087[(0)] = cljs$core$async$mult_$_state_machine__29612__auto__);

(statearr_31087[(1)] = (1));

return statearr_31087;
});
var cljs$core$async$mult_$_state_machine__29612__auto____1 = (function (state_30939){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_30939);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e31089){var ex__29615__auto__ = e31089;
var statearr_31093_33245 = state_30939;
(statearr_31093_33245[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_30939[(4)]))){
var statearr_31094_33246 = state_30939;
(statearr_31094_33246[(1)] = cljs.core.first((state_30939[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_30939;
state_30939 = G__33249;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29612__auto__ = function(state_30939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29612__auto____1.call(this,state_30939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29612__auto____0;
cljs$core$async$mult_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29612__auto____1;
return cljs$core$async$mult_$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_31107 = f__29731__auto__();
(statearr_31107[(6)] = c__29730__auto___33102);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var G__31114 = arguments.length;
switch (G__31114) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33255 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33255(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33256 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33256(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33259 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33259(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33260 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33260(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33263 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33263(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33264 = arguments.length;
var i__4737__auto___33265 = (0);
while(true){
if((i__4737__auto___33265 < len__4736__auto___33264)){
args__4742__auto__.push((arguments[i__4737__auto___33265]));

var G__33266 = (i__4737__auto___33265 + (1));
i__4737__auto___33265 = G__33266;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31164){
var map__31165 = p__31164;
var map__31165__$1 = (((((!((map__31165 == null))))?(((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31165):map__31165);
var opts = map__31165__$1;
var statearr_31168_33267 = state;
(statearr_31168_33267[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31172_33268 = state;
(statearr_31172_33268[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31173_33269 = state;
(statearr_31173_33269[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31156){
var G__31157 = cljs.core.first(seq31156);
var seq31156__$1 = cljs.core.next(seq31156);
var G__31158 = cljs.core.first(seq31156__$1);
var seq31156__$2 = cljs.core.next(seq31156__$1);
var G__31159 = cljs.core.first(seq31156__$2);
var seq31156__$3 = cljs.core.next(seq31156__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31157,G__31158,G__31159,seq31156__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31191 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31192){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31192 = meta31192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31193,meta31192__$1){
var self__ = this;
var _31193__$1 = this;
return (new cljs.core.async.t_cljs$core$async31191(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31192__$1));
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31193){
var self__ = this;
var _31193__$1 = this;
return self__.meta31192;
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31191.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31192","meta31192",665551849,null)], null);
}));

(cljs.core.async.t_cljs$core$async31191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31191");

(cljs.core.async.t_cljs$core$async31191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31191.
 */
cljs.core.async.__GT_t_cljs$core$async31191 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31191(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31192){
return (new cljs.core.async.t_cljs$core$async31191(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31192));
});

}

return (new cljs.core.async.t_cljs$core$async31191(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29730__auto___33299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (7))){
var inst_31223 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31311_33300 = state_31309__$1;
(statearr_31311_33300[(2)] = inst_31223);

(statearr_31311_33300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (20))){
var inst_31235 = (state_31309[(7)]);
var state_31309__$1 = state_31309;
var statearr_31312_33301 = state_31309__$1;
(statearr_31312_33301[(2)] = inst_31235);

(statearr_31312_33301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (27))){
var state_31309__$1 = state_31309;
var statearr_31317_33302 = state_31309__$1;
(statearr_31317_33302[(2)] = null);

(statearr_31317_33302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (1))){
var inst_31206 = (state_31309[(8)]);
var inst_31206__$1 = calc_state();
var inst_31208 = (inst_31206__$1 == null);
var inst_31209 = cljs.core.not(inst_31208);
var state_31309__$1 = (function (){var statearr_31319 = state_31309;
(statearr_31319[(8)] = inst_31206__$1);

return statearr_31319;
})();
if(inst_31209){
var statearr_31320_33303 = state_31309__$1;
(statearr_31320_33303[(1)] = (2));

} else {
var statearr_31321_33304 = state_31309__$1;
(statearr_31321_33304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (24))){
var inst_31259 = (state_31309[(9)]);
var inst_31282 = (state_31309[(10)]);
var inst_31268 = (state_31309[(11)]);
var inst_31282__$1 = (inst_31259.cljs$core$IFn$_invoke$arity$1 ? inst_31259.cljs$core$IFn$_invoke$arity$1(inst_31268) : inst_31259.call(null,inst_31268));
var state_31309__$1 = (function (){var statearr_31323 = state_31309;
(statearr_31323[(10)] = inst_31282__$1);

return statearr_31323;
})();
if(cljs.core.truth_(inst_31282__$1)){
var statearr_31325_33305 = state_31309__$1;
(statearr_31325_33305[(1)] = (29));

} else {
var statearr_31326_33306 = state_31309__$1;
(statearr_31326_33306[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (4))){
var inst_31226 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31226)){
var statearr_31327_33307 = state_31309__$1;
(statearr_31327_33307[(1)] = (8));

} else {
var statearr_31328_33308 = state_31309__$1;
(statearr_31328_33308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (15))){
var inst_31253 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31253)){
var statearr_31329_33309 = state_31309__$1;
(statearr_31329_33309[(1)] = (19));

} else {
var statearr_31330_33310 = state_31309__$1;
(statearr_31330_33310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (21))){
var inst_31258 = (state_31309[(12)]);
var inst_31258__$1 = (state_31309[(2)]);
var inst_31259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31258__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31258__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31258__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31309__$1 = (function (){var statearr_31331 = state_31309;
(statearr_31331[(12)] = inst_31258__$1);

(statearr_31331[(9)] = inst_31259);

(statearr_31331[(13)] = inst_31260);

return statearr_31331;
})();
return cljs.core.async.ioc_alts_BANG_(state_31309__$1,(22),inst_31261);
} else {
if((state_val_31310 === (31))){
var inst_31290 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31290)){
var statearr_31332_33320 = state_31309__$1;
(statearr_31332_33320[(1)] = (32));

} else {
var statearr_31333_33321 = state_31309__$1;
(statearr_31333_33321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (32))){
var inst_31267 = (state_31309[(14)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31309__$1,(35),out,inst_31267);
} else {
if((state_val_31310 === (33))){
var inst_31258 = (state_31309[(12)]);
var inst_31235 = inst_31258;
var state_31309__$1 = (function (){var statearr_31335 = state_31309;
(statearr_31335[(7)] = inst_31235);

return statearr_31335;
})();
var statearr_31336_33329 = state_31309__$1;
(statearr_31336_33329[(2)] = null);

(statearr_31336_33329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (13))){
var inst_31235 = (state_31309[(7)]);
var inst_31242 = inst_31235.cljs$lang$protocol_mask$partition0$;
var inst_31243 = (inst_31242 & (64));
var inst_31244 = inst_31235.cljs$core$ISeq$;
var inst_31245 = (cljs.core.PROTOCOL_SENTINEL === inst_31244);
var inst_31246 = ((inst_31243) || (inst_31245));
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31246)){
var statearr_31337_33330 = state_31309__$1;
(statearr_31337_33330[(1)] = (16));

} else {
var statearr_31338_33331 = state_31309__$1;
(statearr_31338_33331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (22))){
var inst_31267 = (state_31309[(14)]);
var inst_31268 = (state_31309[(11)]);
var inst_31266 = (state_31309[(2)]);
var inst_31267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31266,(0),null);
var inst_31268__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31266,(1),null);
var inst_31269 = (inst_31267__$1 == null);
var inst_31270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31268__$1,change);
var inst_31271 = ((inst_31269) || (inst_31270));
var state_31309__$1 = (function (){var statearr_31340 = state_31309;
(statearr_31340[(14)] = inst_31267__$1);

(statearr_31340[(11)] = inst_31268__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31341_33335 = state_31309__$1;
(statearr_31341_33335[(1)] = (23));

} else {
var statearr_31342_33336 = state_31309__$1;
(statearr_31342_33336[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (36))){
var inst_31258 = (state_31309[(12)]);
var inst_31235 = inst_31258;
var state_31309__$1 = (function (){var statearr_31343 = state_31309;
(statearr_31343[(7)] = inst_31235);

return statearr_31343;
})();
var statearr_31344_33340 = state_31309__$1;
(statearr_31344_33340[(2)] = null);

(statearr_31344_33340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (29))){
var inst_31282 = (state_31309[(10)]);
var state_31309__$1 = state_31309;
var statearr_31345_33341 = state_31309__$1;
(statearr_31345_33341[(2)] = inst_31282);

(statearr_31345_33341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (6))){
var state_31309__$1 = state_31309;
var statearr_31346_33342 = state_31309__$1;
(statearr_31346_33342[(2)] = false);

(statearr_31346_33342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (28))){
var inst_31278 = (state_31309[(2)]);
var inst_31279 = calc_state();
var inst_31235 = inst_31279;
var state_31309__$1 = (function (){var statearr_31347 = state_31309;
(statearr_31347[(15)] = inst_31278);

(statearr_31347[(7)] = inst_31235);

return statearr_31347;
})();
var statearr_31354_33346 = state_31309__$1;
(statearr_31354_33346[(2)] = null);

(statearr_31354_33346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (25))){
var inst_31305 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31355_33347 = state_31309__$1;
(statearr_31355_33347[(2)] = inst_31305);

(statearr_31355_33347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (34))){
var inst_31303 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31360_33348 = state_31309__$1;
(statearr_31360_33348[(2)] = inst_31303);

(statearr_31360_33348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (17))){
var state_31309__$1 = state_31309;
var statearr_31361_33349 = state_31309__$1;
(statearr_31361_33349[(2)] = false);

(statearr_31361_33349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (3))){
var state_31309__$1 = state_31309;
var statearr_31362_33351 = state_31309__$1;
(statearr_31362_33351[(2)] = false);

(statearr_31362_33351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (12))){
var inst_31307 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31309__$1,inst_31307);
} else {
if((state_val_31310 === (2))){
var inst_31206 = (state_31309[(8)]);
var inst_31215 = inst_31206.cljs$lang$protocol_mask$partition0$;
var inst_31216 = (inst_31215 & (64));
var inst_31217 = inst_31206.cljs$core$ISeq$;
var inst_31218 = (cljs.core.PROTOCOL_SENTINEL === inst_31217);
var inst_31219 = ((inst_31216) || (inst_31218));
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31219)){
var statearr_31366_33352 = state_31309__$1;
(statearr_31366_33352[(1)] = (5));

} else {
var statearr_31367_33353 = state_31309__$1;
(statearr_31367_33353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (23))){
var inst_31267 = (state_31309[(14)]);
var inst_31273 = (inst_31267 == null);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31273)){
var statearr_31373_33357 = state_31309__$1;
(statearr_31373_33357[(1)] = (26));

} else {
var statearr_31378_33358 = state_31309__$1;
(statearr_31378_33358[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (35))){
var inst_31293 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31293)){
var statearr_31380_33365 = state_31309__$1;
(statearr_31380_33365[(1)] = (36));

} else {
var statearr_31381_33366 = state_31309__$1;
(statearr_31381_33366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (19))){
var inst_31235 = (state_31309[(7)]);
var inst_31255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31235);
var state_31309__$1 = state_31309;
var statearr_31385_33367 = state_31309__$1;
(statearr_31385_33367[(2)] = inst_31255);

(statearr_31385_33367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (11))){
var inst_31235 = (state_31309[(7)]);
var inst_31239 = (inst_31235 == null);
var inst_31240 = cljs.core.not(inst_31239);
var state_31309__$1 = state_31309;
if(inst_31240){
var statearr_31386_33374 = state_31309__$1;
(statearr_31386_33374[(1)] = (13));

} else {
var statearr_31387_33375 = state_31309__$1;
(statearr_31387_33375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (9))){
var inst_31206 = (state_31309[(8)]);
var state_31309__$1 = state_31309;
var statearr_31388_33379 = state_31309__$1;
(statearr_31388_33379[(2)] = inst_31206);

(statearr_31388_33379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (5))){
var state_31309__$1 = state_31309;
var statearr_31389_33383 = state_31309__$1;
(statearr_31389_33383[(2)] = true);

(statearr_31389_33383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (14))){
var state_31309__$1 = state_31309;
var statearr_31390_33384 = state_31309__$1;
(statearr_31390_33384[(2)] = false);

(statearr_31390_33384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (26))){
var inst_31268 = (state_31309[(11)]);
var inst_31275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31268);
var state_31309__$1 = state_31309;
var statearr_31391_33386 = state_31309__$1;
(statearr_31391_33386[(2)] = inst_31275);

(statearr_31391_33386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (16))){
var state_31309__$1 = state_31309;
var statearr_31392_33389 = state_31309__$1;
(statearr_31392_33389[(2)] = true);

(statearr_31392_33389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (38))){
var inst_31298 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31393_33390 = state_31309__$1;
(statearr_31393_33390[(2)] = inst_31298);

(statearr_31393_33390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (30))){
var inst_31259 = (state_31309[(9)]);
var inst_31268 = (state_31309[(11)]);
var inst_31260 = (state_31309[(13)]);
var inst_31285 = cljs.core.empty_QMARK_(inst_31259);
var inst_31286 = (inst_31260.cljs$core$IFn$_invoke$arity$1 ? inst_31260.cljs$core$IFn$_invoke$arity$1(inst_31268) : inst_31260.call(null,inst_31268));
var inst_31287 = cljs.core.not(inst_31286);
var inst_31288 = ((inst_31285) && (inst_31287));
var state_31309__$1 = state_31309;
var statearr_31394_33393 = state_31309__$1;
(statearr_31394_33393[(2)] = inst_31288);

(statearr_31394_33393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (10))){
var inst_31206 = (state_31309[(8)]);
var inst_31231 = (state_31309[(2)]);
var inst_31232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31231,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31231,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31235 = inst_31206;
var state_31309__$1 = (function (){var statearr_31396 = state_31309;
(statearr_31396[(16)] = inst_31232);

(statearr_31396[(17)] = inst_31234);

(statearr_31396[(7)] = inst_31235);

(statearr_31396[(18)] = inst_31233);

return statearr_31396;
})();
var statearr_31397_33404 = state_31309__$1;
(statearr_31397_33404[(2)] = null);

(statearr_31397_33404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (18))){
var inst_31250 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31400_33406 = state_31309__$1;
(statearr_31400_33406[(2)] = inst_31250);

(statearr_31400_33406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (37))){
var state_31309__$1 = state_31309;
var statearr_31411_33407 = state_31309__$1;
(statearr_31411_33407[(2)] = null);

(statearr_31411_33407[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (8))){
var inst_31206 = (state_31309[(8)]);
var inst_31228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31206);
var state_31309__$1 = state_31309;
var statearr_31412_33408 = state_31309__$1;
(statearr_31412_33408[(2)] = inst_31228);

(statearr_31412_33408[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29612__auto__ = null;
var cljs$core$async$mix_$_state_machine__29612__auto____0 = (function (){
var statearr_31417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31417[(0)] = cljs$core$async$mix_$_state_machine__29612__auto__);

(statearr_31417[(1)] = (1));

return statearr_31417;
});
var cljs$core$async$mix_$_state_machine__29612__auto____1 = (function (state_31309){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_31309);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e31418){var ex__29615__auto__ = e31418;
var statearr_31419_33413 = state_31309;
(statearr_31419_33413[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_31309[(4)]))){
var statearr_31420_33414 = state_31309;
(statearr_31420_33414[(1)] = cljs.core.first((state_31309[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_31309;
state_31309 = G__33415;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29612__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29612__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29612__auto____0;
cljs$core$async$mix_$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29612__auto____1;
return cljs$core$async$mix_$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_31421 = f__29731__auto__();
(statearr_31421[(6)] = c__29730__auto___33299);

return statearr_31421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33422 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33422(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33423 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33423(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33424 = (function() {
var G__33425 = null;
var G__33425__1 = (function (p){
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
var G__33425__2 = (function (p,v){
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
G__33425 = function(p,v){
switch(arguments.length){
case 1:
return G__33425__1.call(this,p);
case 2:
return G__33425__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33425.cljs$core$IFn$_invoke$arity$1 = G__33425__1;
G__33425.cljs$core$IFn$_invoke$arity$2 = G__33425__2;
return G__33425;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31440 = arguments.length;
switch (G__31440) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33424(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33424(p,v);
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
var G__31447 = arguments.length;
switch (G__31447) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31441_SHARP_){
if(cljs.core.truth_((p1__31441_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31441_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31441_SHARP_.call(null,topic)))){
return p1__31441_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31441_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31453 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31454){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31454 = meta31454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31455,meta31454__$1){
var self__ = this;
var _31455__$1 = this;
return (new cljs.core.async.t_cljs$core$async31453(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31454__$1));
}));

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31455){
var self__ = this;
var _31455__$1 = this;
return self__.meta31454;
}));

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31454","meta31454",1937104211,null)], null);
}));

(cljs.core.async.t_cljs$core$async31453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31453");

(cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31453.
 */
cljs.core.async.__GT_t_cljs$core$async31453 = (function cljs$core$async$__GT_t_cljs$core$async31453(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31454){
return (new cljs.core.async.t_cljs$core$async31453(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31454));
});

}

return (new cljs.core.async.t_cljs$core$async31453(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29730__auto___33437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_31554){
var state_val_31555 = (state_31554[(1)]);
if((state_val_31555 === (7))){
var inst_31550 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31561_33438 = state_31554__$1;
(statearr_31561_33438[(2)] = inst_31550);

(statearr_31561_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (20))){
var state_31554__$1 = state_31554;
var statearr_31562_33439 = state_31554__$1;
(statearr_31562_33439[(2)] = null);

(statearr_31562_33439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (1))){
var state_31554__$1 = state_31554;
var statearr_31563_33440 = state_31554__$1;
(statearr_31563_33440[(2)] = null);

(statearr_31563_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (24))){
var inst_31528 = (state_31554[(7)]);
var inst_31538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31528);
var state_31554__$1 = state_31554;
var statearr_31564_33441 = state_31554__$1;
(statearr_31564_33441[(2)] = inst_31538);

(statearr_31564_33441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (4))){
var inst_31477 = (state_31554[(8)]);
var inst_31477__$1 = (state_31554[(2)]);
var inst_31478 = (inst_31477__$1 == null);
var state_31554__$1 = (function (){var statearr_31565 = state_31554;
(statearr_31565[(8)] = inst_31477__$1);

return statearr_31565;
})();
if(cljs.core.truth_(inst_31478)){
var statearr_31568_33443 = state_31554__$1;
(statearr_31568_33443[(1)] = (5));

} else {
var statearr_31569_33444 = state_31554__$1;
(statearr_31569_33444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (15))){
var inst_31522 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31570_33446 = state_31554__$1;
(statearr_31570_33446[(2)] = inst_31522);

(statearr_31570_33446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (21))){
var inst_31545 = (state_31554[(2)]);
var state_31554__$1 = (function (){var statearr_31573 = state_31554;
(statearr_31573[(9)] = inst_31545);

return statearr_31573;
})();
var statearr_31576_33448 = state_31554__$1;
(statearr_31576_33448[(2)] = null);

(statearr_31576_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (13))){
var inst_31501 = (state_31554[(10)]);
var inst_31503 = cljs.core.chunked_seq_QMARK_(inst_31501);
var state_31554__$1 = state_31554;
if(inst_31503){
var statearr_31577_33449 = state_31554__$1;
(statearr_31577_33449[(1)] = (16));

} else {
var statearr_31578_33450 = state_31554__$1;
(statearr_31578_33450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (22))){
var inst_31535 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31535)){
var statearr_31582_33451 = state_31554__$1;
(statearr_31582_33451[(1)] = (23));

} else {
var statearr_31583_33452 = state_31554__$1;
(statearr_31583_33452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (6))){
var inst_31528 = (state_31554[(7)]);
var inst_31531 = (state_31554[(11)]);
var inst_31477 = (state_31554[(8)]);
var inst_31528__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31477) : topic_fn.call(null,inst_31477));
var inst_31530 = cljs.core.deref(mults);
var inst_31531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31530,inst_31528__$1);
var state_31554__$1 = (function (){var statearr_31586 = state_31554;
(statearr_31586[(7)] = inst_31528__$1);

(statearr_31586[(11)] = inst_31531__$1);

return statearr_31586;
})();
if(cljs.core.truth_(inst_31531__$1)){
var statearr_31588_33459 = state_31554__$1;
(statearr_31588_33459[(1)] = (19));

} else {
var statearr_31589_33460 = state_31554__$1;
(statearr_31589_33460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (25))){
var inst_31540 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31592_33462 = state_31554__$1;
(statearr_31592_33462[(2)] = inst_31540);

(statearr_31592_33462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (17))){
var inst_31501 = (state_31554[(10)]);
var inst_31511 = cljs.core.first(inst_31501);
var inst_31513 = cljs.core.async.muxch_STAR_(inst_31511);
var inst_31514 = cljs.core.async.close_BANG_(inst_31513);
var inst_31516 = cljs.core.next(inst_31501);
var inst_31487 = inst_31516;
var inst_31488 = null;
var inst_31489 = (0);
var inst_31490 = (0);
var state_31554__$1 = (function (){var statearr_31599 = state_31554;
(statearr_31599[(12)] = inst_31487);

(statearr_31599[(13)] = inst_31490);

(statearr_31599[(14)] = inst_31489);

(statearr_31599[(15)] = inst_31488);

(statearr_31599[(16)] = inst_31514);

return statearr_31599;
})();
var statearr_31601_33467 = state_31554__$1;
(statearr_31601_33467[(2)] = null);

(statearr_31601_33467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (3))){
var inst_31552 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31554__$1,inst_31552);
} else {
if((state_val_31555 === (12))){
var inst_31524 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31604_33470 = state_31554__$1;
(statearr_31604_33470[(2)] = inst_31524);

(statearr_31604_33470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (2))){
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31554__$1,(4),ch);
} else {
if((state_val_31555 === (23))){
var state_31554__$1 = state_31554;
var statearr_31608_33472 = state_31554__$1;
(statearr_31608_33472[(2)] = null);

(statearr_31608_33472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (19))){
var inst_31531 = (state_31554[(11)]);
var inst_31477 = (state_31554[(8)]);
var inst_31533 = cljs.core.async.muxch_STAR_(inst_31531);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31554__$1,(22),inst_31533,inst_31477);
} else {
if((state_val_31555 === (11))){
var inst_31501 = (state_31554[(10)]);
var inst_31487 = (state_31554[(12)]);
var inst_31501__$1 = cljs.core.seq(inst_31487);
var state_31554__$1 = (function (){var statearr_31610 = state_31554;
(statearr_31610[(10)] = inst_31501__$1);

return statearr_31610;
})();
if(inst_31501__$1){
var statearr_31615_33473 = state_31554__$1;
(statearr_31615_33473[(1)] = (13));

} else {
var statearr_31616_33474 = state_31554__$1;
(statearr_31616_33474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (9))){
var inst_31526 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31617_33475 = state_31554__$1;
(statearr_31617_33475[(2)] = inst_31526);

(statearr_31617_33475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (5))){
var inst_31484 = cljs.core.deref(mults);
var inst_31485 = cljs.core.vals(inst_31484);
var inst_31486 = cljs.core.seq(inst_31485);
var inst_31487 = inst_31486;
var inst_31488 = null;
var inst_31489 = (0);
var inst_31490 = (0);
var state_31554__$1 = (function (){var statearr_31620 = state_31554;
(statearr_31620[(12)] = inst_31487);

(statearr_31620[(13)] = inst_31490);

(statearr_31620[(14)] = inst_31489);

(statearr_31620[(15)] = inst_31488);

return statearr_31620;
})();
var statearr_31622_33476 = state_31554__$1;
(statearr_31622_33476[(2)] = null);

(statearr_31622_33476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (14))){
var state_31554__$1 = state_31554;
var statearr_31628_33477 = state_31554__$1;
(statearr_31628_33477[(2)] = null);

(statearr_31628_33477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (16))){
var inst_31501 = (state_31554[(10)]);
var inst_31506 = cljs.core.chunk_first(inst_31501);
var inst_31507 = cljs.core.chunk_rest(inst_31501);
var inst_31508 = cljs.core.count(inst_31506);
var inst_31487 = inst_31507;
var inst_31488 = inst_31506;
var inst_31489 = inst_31508;
var inst_31490 = (0);
var state_31554__$1 = (function (){var statearr_31631 = state_31554;
(statearr_31631[(12)] = inst_31487);

(statearr_31631[(13)] = inst_31490);

(statearr_31631[(14)] = inst_31489);

(statearr_31631[(15)] = inst_31488);

return statearr_31631;
})();
var statearr_31632_33479 = state_31554__$1;
(statearr_31632_33479[(2)] = null);

(statearr_31632_33479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (10))){
var inst_31487 = (state_31554[(12)]);
var inst_31490 = (state_31554[(13)]);
var inst_31489 = (state_31554[(14)]);
var inst_31488 = (state_31554[(15)]);
var inst_31495 = cljs.core._nth(inst_31488,inst_31490);
var inst_31496 = cljs.core.async.muxch_STAR_(inst_31495);
var inst_31497 = cljs.core.async.close_BANG_(inst_31496);
var inst_31498 = (inst_31490 + (1));
var tmp31623 = inst_31487;
var tmp31624 = inst_31489;
var tmp31625 = inst_31488;
var inst_31487__$1 = tmp31623;
var inst_31488__$1 = tmp31625;
var inst_31489__$1 = tmp31624;
var inst_31490__$1 = inst_31498;
var state_31554__$1 = (function (){var statearr_31636 = state_31554;
(statearr_31636[(12)] = inst_31487__$1);

(statearr_31636[(13)] = inst_31490__$1);

(statearr_31636[(14)] = inst_31489__$1);

(statearr_31636[(17)] = inst_31497);

(statearr_31636[(15)] = inst_31488__$1);

return statearr_31636;
})();
var statearr_31638_33483 = state_31554__$1;
(statearr_31638_33483[(2)] = null);

(statearr_31638_33483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (18))){
var inst_31519 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31639_33484 = state_31554__$1;
(statearr_31639_33484[(2)] = inst_31519);

(statearr_31639_33484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (8))){
var inst_31490 = (state_31554[(13)]);
var inst_31489 = (state_31554[(14)]);
var inst_31492 = (inst_31490 < inst_31489);
var inst_31493 = inst_31492;
var state_31554__$1 = state_31554;
if(cljs.core.truth_(inst_31493)){
var statearr_31642_33485 = state_31554__$1;
(statearr_31642_33485[(1)] = (10));

} else {
var statearr_31643_33487 = state_31554__$1;
(statearr_31643_33487[(1)] = (11));

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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_31646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31646[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_31646[(1)] = (1));

return statearr_31646;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_31554){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_31554);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e31650){var ex__29615__auto__ = e31650;
var statearr_31652_33489 = state_31554;
(statearr_31652_33489[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_31554[(4)]))){
var statearr_31654_33491 = state_31554;
(statearr_31654_33491[(1)] = cljs.core.first((state_31554[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33492 = state_31554;
state_31554 = G__33492;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_31554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_31554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_31656 = f__29731__auto__();
(statearr_31656[(6)] = c__29730__auto___33437);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var G__31662 = arguments.length;
switch (G__31662) {
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
var G__31671 = arguments.length;
switch (G__31671) {
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
var G__31683 = arguments.length;
switch (G__31683) {
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
var c__29730__auto___33501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_31756){
var state_val_31758 = (state_31756[(1)]);
if((state_val_31758 === (7))){
var state_31756__$1 = state_31756;
var statearr_31765_33503 = state_31756__$1;
(statearr_31765_33503[(2)] = null);

(statearr_31765_33503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (1))){
var state_31756__$1 = state_31756;
var statearr_31766_33504 = state_31756__$1;
(statearr_31766_33504[(2)] = null);

(statearr_31766_33504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (4))){
var inst_31699 = (state_31756[(7)]);
var inst_31700 = (state_31756[(8)]);
var inst_31702 = (inst_31700 < inst_31699);
var state_31756__$1 = state_31756;
if(cljs.core.truth_(inst_31702)){
var statearr_31768_33506 = state_31756__$1;
(statearr_31768_33506[(1)] = (6));

} else {
var statearr_31769_33507 = state_31756__$1;
(statearr_31769_33507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (15))){
var inst_31737 = (state_31756[(9)]);
var inst_31743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31737);
var state_31756__$1 = state_31756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31756__$1,(17),out,inst_31743);
} else {
if((state_val_31758 === (13))){
var inst_31737 = (state_31756[(9)]);
var inst_31737__$1 = (state_31756[(2)]);
var inst_31739 = cljs.core.some(cljs.core.nil_QMARK_,inst_31737__$1);
var state_31756__$1 = (function (){var statearr_31778 = state_31756;
(statearr_31778[(9)] = inst_31737__$1);

return statearr_31778;
})();
if(cljs.core.truth_(inst_31739)){
var statearr_31779_33512 = state_31756__$1;
(statearr_31779_33512[(1)] = (14));

} else {
var statearr_31781_33513 = state_31756__$1;
(statearr_31781_33513[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (6))){
var state_31756__$1 = state_31756;
var statearr_31782_33518 = state_31756__$1;
(statearr_31782_33518[(2)] = null);

(statearr_31782_33518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (17))){
var inst_31748 = (state_31756[(2)]);
var state_31756__$1 = (function (){var statearr_31793 = state_31756;
(statearr_31793[(10)] = inst_31748);

return statearr_31793;
})();
var statearr_31794_33523 = state_31756__$1;
(statearr_31794_33523[(2)] = null);

(statearr_31794_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (3))){
var inst_31753 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31756__$1,inst_31753);
} else {
if((state_val_31758 === (12))){
var _ = (function (){var statearr_31796 = state_31756;
(statearr_31796[(4)] = cljs.core.rest((state_31756[(4)])));

return statearr_31796;
})();
var state_31756__$1 = state_31756;
var ex31789 = (state_31756__$1[(2)]);
var statearr_31797_33529 = state_31756__$1;
(statearr_31797_33529[(5)] = ex31789);


if((ex31789 instanceof Object)){
var statearr_31799_33531 = state_31756__$1;
(statearr_31799_33531[(1)] = (11));

(statearr_31799_33531[(5)] = null);

} else {
throw ex31789;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (2))){
var inst_31698 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31699 = cnt;
var inst_31700 = (0);
var state_31756__$1 = (function (){var statearr_31805 = state_31756;
(statearr_31805[(7)] = inst_31699);

(statearr_31805[(8)] = inst_31700);

(statearr_31805[(11)] = inst_31698);

return statearr_31805;
})();
var statearr_31806_33532 = state_31756__$1;
(statearr_31806_33532[(2)] = null);

(statearr_31806_33532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (11))){
var inst_31712 = (state_31756[(2)]);
var inst_31717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31756__$1 = (function (){var statearr_31807 = state_31756;
(statearr_31807[(12)] = inst_31712);

return statearr_31807;
})();
var statearr_31808_33533 = state_31756__$1;
(statearr_31808_33533[(2)] = inst_31717);

(statearr_31808_33533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (9))){
var inst_31700 = (state_31756[(8)]);
var _ = (function (){var statearr_31809 = state_31756;
(statearr_31809[(4)] = cljs.core.cons((12),(state_31756[(4)])));

return statearr_31809;
})();
var inst_31723 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31700) : chs__$1.call(null,inst_31700));
var inst_31724 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31700) : done.call(null,inst_31700));
var inst_31725 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31723,inst_31724);
var ___$1 = (function (){var statearr_31810 = state_31756;
(statearr_31810[(4)] = cljs.core.rest((state_31756[(4)])));

return statearr_31810;
})();
var state_31756__$1 = state_31756;
var statearr_31815_33544 = state_31756__$1;
(statearr_31815_33544[(2)] = inst_31725);

(statearr_31815_33544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (5))){
var inst_31735 = (state_31756[(2)]);
var state_31756__$1 = (function (){var statearr_31820 = state_31756;
(statearr_31820[(13)] = inst_31735);

return statearr_31820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31756__$1,(13),dchan);
} else {
if((state_val_31758 === (14))){
var inst_31741 = cljs.core.async.close_BANG_(out);
var state_31756__$1 = state_31756;
var statearr_31825_33550 = state_31756__$1;
(statearr_31825_33550[(2)] = inst_31741);

(statearr_31825_33550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (16))){
var inst_31751 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
var statearr_31826_33552 = state_31756__$1;
(statearr_31826_33552[(2)] = inst_31751);

(statearr_31826_33552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (10))){
var inst_31700 = (state_31756[(8)]);
var inst_31728 = (state_31756[(2)]);
var inst_31729 = (inst_31700 + (1));
var inst_31700__$1 = inst_31729;
var state_31756__$1 = (function (){var statearr_31829 = state_31756;
(statearr_31829[(8)] = inst_31700__$1);

(statearr_31829[(14)] = inst_31728);

return statearr_31829;
})();
var statearr_31831_33557 = state_31756__$1;
(statearr_31831_33557[(2)] = null);

(statearr_31831_33557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (8))){
var inst_31733 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
var statearr_31832_33562 = state_31756__$1;
(statearr_31832_33562[(2)] = inst_31733);

(statearr_31832_33562[(1)] = (5));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_31840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31840[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_31840[(1)] = (1));

return statearr_31840;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_31756){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_31756);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e31841){var ex__29615__auto__ = e31841;
var statearr_31842_33570 = state_31756;
(statearr_31842_33570[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_31756[(4)]))){
var statearr_31843_33571 = state_31756;
(statearr_31843_33571[(1)] = cljs.core.first((state_31756[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33576 = state_31756;
state_31756 = G__33576;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_31756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_31756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_31844 = f__29731__auto__();
(statearr_31844[(6)] = c__29730__auto___33501);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var G__31848 = arguments.length;
switch (G__31848) {
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
var c__29730__auto___33589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_31900){
var state_val_31901 = (state_31900[(1)]);
if((state_val_31901 === (7))){
var inst_31878 = (state_31900[(7)]);
var inst_31877 = (state_31900[(8)]);
var inst_31877__$1 = (state_31900[(2)]);
var inst_31878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31877__$1,(0),null);
var inst_31879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31877__$1,(1),null);
var inst_31880 = (inst_31878__$1 == null);
var state_31900__$1 = (function (){var statearr_31905 = state_31900;
(statearr_31905[(9)] = inst_31879);

(statearr_31905[(7)] = inst_31878__$1);

(statearr_31905[(8)] = inst_31877__$1);

return statearr_31905;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31906_33598 = state_31900__$1;
(statearr_31906_33598[(1)] = (8));

} else {
var statearr_31909_33599 = state_31900__$1;
(statearr_31909_33599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (1))){
var inst_31865 = cljs.core.vec(chs);
var inst_31867 = inst_31865;
var state_31900__$1 = (function (){var statearr_31910 = state_31900;
(statearr_31910[(10)] = inst_31867);

return statearr_31910;
})();
var statearr_31911_33600 = state_31900__$1;
(statearr_31911_33600[(2)] = null);

(statearr_31911_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (4))){
var inst_31867 = (state_31900[(10)]);
var state_31900__$1 = state_31900;
return cljs.core.async.ioc_alts_BANG_(state_31900__$1,(7),inst_31867);
} else {
if((state_val_31901 === (6))){
var inst_31896 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31919_33601 = state_31900__$1;
(statearr_31919_33601[(2)] = inst_31896);

(statearr_31919_33601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (3))){
var inst_31898 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31900__$1,inst_31898);
} else {
if((state_val_31901 === (2))){
var inst_31867 = (state_31900[(10)]);
var inst_31869 = cljs.core.count(inst_31867);
var inst_31870 = (inst_31869 > (0));
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31870)){
var statearr_31927_33602 = state_31900__$1;
(statearr_31927_33602[(1)] = (4));

} else {
var statearr_31928_33603 = state_31900__$1;
(statearr_31928_33603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (11))){
var inst_31867 = (state_31900[(10)]);
var inst_31889 = (state_31900[(2)]);
var tmp31920 = inst_31867;
var inst_31867__$1 = tmp31920;
var state_31900__$1 = (function (){var statearr_31930 = state_31900;
(statearr_31930[(11)] = inst_31889);

(statearr_31930[(10)] = inst_31867__$1);

return statearr_31930;
})();
var statearr_31931_33606 = state_31900__$1;
(statearr_31931_33606[(2)] = null);

(statearr_31931_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (9))){
var inst_31878 = (state_31900[(7)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31900__$1,(11),out,inst_31878);
} else {
if((state_val_31901 === (5))){
var inst_31894 = cljs.core.async.close_BANG_(out);
var state_31900__$1 = state_31900;
var statearr_31934_33607 = state_31900__$1;
(statearr_31934_33607[(2)] = inst_31894);

(statearr_31934_33607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (10))){
var inst_31892 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31941_33608 = state_31900__$1;
(statearr_31941_33608[(2)] = inst_31892);

(statearr_31941_33608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (8))){
var inst_31879 = (state_31900[(9)]);
var inst_31878 = (state_31900[(7)]);
var inst_31867 = (state_31900[(10)]);
var inst_31877 = (state_31900[(8)]);
var inst_31883 = (function (){var cs = inst_31867;
var vec__31873 = inst_31877;
var v = inst_31878;
var c = inst_31879;
return (function (p1__31845_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31845_SHARP_);
});
})();
var inst_31885 = cljs.core.filterv(inst_31883,inst_31867);
var inst_31867__$1 = inst_31885;
var state_31900__$1 = (function (){var statearr_31944 = state_31900;
(statearr_31944[(10)] = inst_31867__$1);

return statearr_31944;
})();
var statearr_31946_33613 = state_31900__$1;
(statearr_31946_33613[(2)] = null);

(statearr_31946_33613[(1)] = (2));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_31900){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_31900);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e31956){var ex__29615__auto__ = e31956;
var statearr_31957_33621 = state_31900;
(statearr_31957_33621[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_31900[(4)]))){
var statearr_31959_33626 = state_31900;
(statearr_31959_33626[(1)] = cljs.core.first((state_31900[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33673 = state_31900;
state_31900 = G__33673;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_31963 = f__29731__auto__();
(statearr_31963[(6)] = c__29730__auto___33589);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
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
var G__31973 = arguments.length;
switch (G__31973) {
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
var c__29730__auto___33711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32004){
var state_val_32005 = (state_32004[(1)]);
if((state_val_32005 === (7))){
var inst_31986 = (state_32004[(7)]);
var inst_31986__$1 = (state_32004[(2)]);
var inst_31987 = (inst_31986__$1 == null);
var inst_31988 = cljs.core.not(inst_31987);
var state_32004__$1 = (function (){var statearr_32011 = state_32004;
(statearr_32011[(7)] = inst_31986__$1);

return statearr_32011;
})();
if(inst_31988){
var statearr_32012_33723 = state_32004__$1;
(statearr_32012_33723[(1)] = (8));

} else {
var statearr_32014_33728 = state_32004__$1;
(statearr_32014_33728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (1))){
var inst_31981 = (0);
var state_32004__$1 = (function (){var statearr_32017 = state_32004;
(statearr_32017[(8)] = inst_31981);

return statearr_32017;
})();
var statearr_32018_33735 = state_32004__$1;
(statearr_32018_33735[(2)] = null);

(statearr_32018_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (4))){
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32004__$1,(7),ch);
} else {
if((state_val_32005 === (6))){
var inst_31999 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32021_33752 = state_32004__$1;
(statearr_32021_33752[(2)] = inst_31999);

(statearr_32021_33752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (3))){
var inst_32001 = (state_32004[(2)]);
var inst_32002 = cljs.core.async.close_BANG_(out);
var state_32004__$1 = (function (){var statearr_32023 = state_32004;
(statearr_32023[(9)] = inst_32001);

return statearr_32023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32004__$1,inst_32002);
} else {
if((state_val_32005 === (2))){
var inst_31981 = (state_32004[(8)]);
var inst_31983 = (inst_31981 < n);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31983)){
var statearr_32026_33772 = state_32004__$1;
(statearr_32026_33772[(1)] = (4));

} else {
var statearr_32027_33774 = state_32004__$1;
(statearr_32027_33774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (11))){
var inst_31981 = (state_32004[(8)]);
var inst_31991 = (state_32004[(2)]);
var inst_31992 = (inst_31981 + (1));
var inst_31981__$1 = inst_31992;
var state_32004__$1 = (function (){var statearr_32028 = state_32004;
(statearr_32028[(10)] = inst_31991);

(statearr_32028[(8)] = inst_31981__$1);

return statearr_32028;
})();
var statearr_32029_33776 = state_32004__$1;
(statearr_32029_33776[(2)] = null);

(statearr_32029_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (9))){
var state_32004__$1 = state_32004;
var statearr_32030_33777 = state_32004__$1;
(statearr_32030_33777[(2)] = null);

(statearr_32030_33777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (5))){
var state_32004__$1 = state_32004;
var statearr_32033_33783 = state_32004__$1;
(statearr_32033_33783[(2)] = null);

(statearr_32033_33783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (10))){
var inst_31996 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32035_33786 = state_32004__$1;
(statearr_32035_33786[(2)] = inst_31996);

(statearr_32035_33786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (8))){
var inst_31986 = (state_32004[(7)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32004__$1,(11),out,inst_31986);
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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_32040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32040[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_32040[(1)] = (1));

return statearr_32040;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_32004){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32004);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32043){var ex__29615__auto__ = e32043;
var statearr_32044_33799 = state_32004;
(statearr_32044_33799[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32004[(4)]))){
var statearr_32045_33802 = state_32004;
(statearr_32045_33802[(1)] = cljs.core.first((state_32004[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_32004;
state_32004 = G__33808;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_32004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_32004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32048 = f__29731__auto__();
(statearr_32048[(6)] = c__29730__auto___33711);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32054 = (function (f,ch,meta32055){
this.f = f;
this.ch = ch;
this.meta32055 = meta32055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32056,meta32055__$1){
var self__ = this;
var _32056__$1 = this;
return (new cljs.core.async.t_cljs$core$async32054(self__.f,self__.ch,meta32055__$1));
}));

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32056){
var self__ = this;
var _32056__$1 = this;
return self__.meta32055;
}));

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32067 = (function (f,ch,meta32055,_,fn1,meta32068){
this.f = f;
this.ch = ch;
this.meta32055 = meta32055;
this._ = _;
this.fn1 = fn1;
this.meta32068 = meta32068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32069,meta32068__$1){
var self__ = this;
var _32069__$1 = this;
return (new cljs.core.async.t_cljs$core$async32067(self__.f,self__.ch,self__.meta32055,self__._,self__.fn1,meta32068__$1));
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32069){
var self__ = this;
var _32069__$1 = this;
return self__.meta32068;
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32053_SHARP_){
var G__32090 = (((p1__32053_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32053_SHARP_) : self__.f.call(null,p1__32053_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32090) : f1.call(null,G__32090));
});
}));

(cljs.core.async.t_cljs$core$async32067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32055","meta32055",-1839847234,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32054","cljs.core.async/t_cljs$core$async32054",-401276198,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32068","meta32068",623551609,null)], null);
}));

(cljs.core.async.t_cljs$core$async32067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32067");

(cljs.core.async.t_cljs$core$async32067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32067.
 */
cljs.core.async.__GT_t_cljs$core$async32067 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32067(f__$1,ch__$1,meta32055__$1,___$2,fn1__$1,meta32068){
return (new cljs.core.async.t_cljs$core$async32067(f__$1,ch__$1,meta32055__$1,___$2,fn1__$1,meta32068));
});

}

return (new cljs.core.async.t_cljs$core$async32067(self__.f,self__.ch,self__.meta32055,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32094 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32094) : self__.f.call(null,G__32094));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32055","meta32055",-1839847234,null)], null);
}));

(cljs.core.async.t_cljs$core$async32054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32054");

(cljs.core.async.t_cljs$core$async32054.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32054.
 */
cljs.core.async.__GT_t_cljs$core$async32054 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32054(f__$1,ch__$1,meta32055){
return (new cljs.core.async.t_cljs$core$async32054(f__$1,ch__$1,meta32055));
});

}

return (new cljs.core.async.t_cljs$core$async32054(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32104 = (function (f,ch,meta32105){
this.f = f;
this.ch = ch;
this.meta32105 = meta32105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32106,meta32105__$1){
var self__ = this;
var _32106__$1 = this;
return (new cljs.core.async.t_cljs$core$async32104(self__.f,self__.ch,meta32105__$1));
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32106){
var self__ = this;
var _32106__$1 = this;
return self__.meta32105;
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32105","meta32105",171609721,null)], null);
}));

(cljs.core.async.t_cljs$core$async32104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32104");

(cljs.core.async.t_cljs$core$async32104.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32104.
 */
cljs.core.async.__GT_t_cljs$core$async32104 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32104(f__$1,ch__$1,meta32105){
return (new cljs.core.async.t_cljs$core$async32104(f__$1,ch__$1,meta32105));
});

}

return (new cljs.core.async.t_cljs$core$async32104(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32112 = (function (p,ch,meta32113){
this.p = p;
this.ch = ch;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32114,meta32113__$1){
var self__ = this;
var _32114__$1 = this;
return (new cljs.core.async.t_cljs$core$async32112(self__.p,self__.ch,meta32113__$1));
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32114){
var self__ = this;
var _32114__$1 = this;
return self__.meta32113;
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32113","meta32113",950322692,null)], null);
}));

(cljs.core.async.t_cljs$core$async32112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32112");

(cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32112.
 */
cljs.core.async.__GT_t_cljs$core$async32112 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32112(p__$1,ch__$1,meta32113){
return (new cljs.core.async.t_cljs$core$async32112(p__$1,ch__$1,meta32113));
});

}

return (new cljs.core.async.t_cljs$core$async32112(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32135 = arguments.length;
switch (G__32135) {
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
var c__29730__auto___33928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32157){
var state_val_32158 = (state_32157[(1)]);
if((state_val_32158 === (7))){
var inst_32153 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
var statearr_32159_33934 = state_32157__$1;
(statearr_32159_33934[(2)] = inst_32153);

(statearr_32159_33934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (1))){
var state_32157__$1 = state_32157;
var statearr_32160_33937 = state_32157__$1;
(statearr_32160_33937[(2)] = null);

(statearr_32160_33937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (4))){
var inst_32139 = (state_32157[(7)]);
var inst_32139__$1 = (state_32157[(2)]);
var inst_32140 = (inst_32139__$1 == null);
var state_32157__$1 = (function (){var statearr_32161 = state_32157;
(statearr_32161[(7)] = inst_32139__$1);

return statearr_32161;
})();
if(cljs.core.truth_(inst_32140)){
var statearr_32162_33942 = state_32157__$1;
(statearr_32162_33942[(1)] = (5));

} else {
var statearr_32163_33943 = state_32157__$1;
(statearr_32163_33943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (6))){
var inst_32139 = (state_32157[(7)]);
var inst_32144 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32139) : p.call(null,inst_32139));
var state_32157__$1 = state_32157;
if(cljs.core.truth_(inst_32144)){
var statearr_32165_33949 = state_32157__$1;
(statearr_32165_33949[(1)] = (8));

} else {
var statearr_32166_33951 = state_32157__$1;
(statearr_32166_33951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (3))){
var inst_32155 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32157__$1,inst_32155);
} else {
if((state_val_32158 === (2))){
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32157__$1,(4),ch);
} else {
if((state_val_32158 === (11))){
var inst_32147 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
var statearr_32169_33954 = state_32157__$1;
(statearr_32169_33954[(2)] = inst_32147);

(statearr_32169_33954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (9))){
var state_32157__$1 = state_32157;
var statearr_32171_33956 = state_32157__$1;
(statearr_32171_33956[(2)] = null);

(statearr_32171_33956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (5))){
var inst_32142 = cljs.core.async.close_BANG_(out);
var state_32157__$1 = state_32157;
var statearr_32173_33959 = state_32157__$1;
(statearr_32173_33959[(2)] = inst_32142);

(statearr_32173_33959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (10))){
var inst_32150 = (state_32157[(2)]);
var state_32157__$1 = (function (){var statearr_32176 = state_32157;
(statearr_32176[(8)] = inst_32150);

return statearr_32176;
})();
var statearr_32177_33962 = state_32157__$1;
(statearr_32177_33962[(2)] = null);

(statearr_32177_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (8))){
var inst_32139 = (state_32157[(7)]);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32157__$1,(11),out,inst_32139);
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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_32157){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32157);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32182){var ex__29615__auto__ = e32182;
var statearr_32183_33971 = state_32157;
(statearr_32183_33971[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32157[(4)]))){
var statearr_32186_33973 = state_32157;
(statearr_32186_33973[(1)] = cljs.core.first((state_32157[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_32157;
state_32157 = G__33975;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32190 = f__29731__auto__();
(statearr_32190[(6)] = c__29730__auto___33928);

return statearr_32190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32193 = arguments.length;
switch (G__32193) {
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
var c__29730__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32275){
var state_val_32276 = (state_32275[(1)]);
if((state_val_32276 === (7))){
var inst_32271 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32278_33981 = state_32275__$1;
(statearr_32278_33981[(2)] = inst_32271);

(statearr_32278_33981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (20))){
var inst_32241 = (state_32275[(7)]);
var inst_32252 = (state_32275[(2)]);
var inst_32253 = cljs.core.next(inst_32241);
var inst_32227 = inst_32253;
var inst_32228 = null;
var inst_32229 = (0);
var inst_32230 = (0);
var state_32275__$1 = (function (){var statearr_32280 = state_32275;
(statearr_32280[(8)] = inst_32229);

(statearr_32280[(9)] = inst_32228);

(statearr_32280[(10)] = inst_32227);

(statearr_32280[(11)] = inst_32252);

(statearr_32280[(12)] = inst_32230);

return statearr_32280;
})();
var statearr_32281_33982 = state_32275__$1;
(statearr_32281_33982[(2)] = null);

(statearr_32281_33982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (1))){
var state_32275__$1 = state_32275;
var statearr_32282_33984 = state_32275__$1;
(statearr_32282_33984[(2)] = null);

(statearr_32282_33984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (4))){
var inst_32210 = (state_32275[(13)]);
var inst_32210__$1 = (state_32275[(2)]);
var inst_32211 = (inst_32210__$1 == null);
var state_32275__$1 = (function (){var statearr_32283 = state_32275;
(statearr_32283[(13)] = inst_32210__$1);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32211)){
var statearr_32284_33987 = state_32275__$1;
(statearr_32284_33987[(1)] = (5));

} else {
var statearr_32285_33988 = state_32275__$1;
(statearr_32285_33988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (15))){
var state_32275__$1 = state_32275;
var statearr_32290_33989 = state_32275__$1;
(statearr_32290_33989[(2)] = null);

(statearr_32290_33989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (21))){
var state_32275__$1 = state_32275;
var statearr_32291_33991 = state_32275__$1;
(statearr_32291_33991[(2)] = null);

(statearr_32291_33991[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (13))){
var inst_32229 = (state_32275[(8)]);
var inst_32228 = (state_32275[(9)]);
var inst_32227 = (state_32275[(10)]);
var inst_32230 = (state_32275[(12)]);
var inst_32237 = (state_32275[(2)]);
var inst_32238 = (inst_32230 + (1));
var tmp32286 = inst_32229;
var tmp32287 = inst_32228;
var tmp32288 = inst_32227;
var inst_32227__$1 = tmp32288;
var inst_32228__$1 = tmp32287;
var inst_32229__$1 = tmp32286;
var inst_32230__$1 = inst_32238;
var state_32275__$1 = (function (){var statearr_32301 = state_32275;
(statearr_32301[(8)] = inst_32229__$1);

(statearr_32301[(14)] = inst_32237);

(statearr_32301[(9)] = inst_32228__$1);

(statearr_32301[(10)] = inst_32227__$1);

(statearr_32301[(12)] = inst_32230__$1);

return statearr_32301;
})();
var statearr_32304_33999 = state_32275__$1;
(statearr_32304_33999[(2)] = null);

(statearr_32304_33999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (22))){
var state_32275__$1 = state_32275;
var statearr_32305_34001 = state_32275__$1;
(statearr_32305_34001[(2)] = null);

(statearr_32305_34001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (6))){
var inst_32210 = (state_32275[(13)]);
var inst_32225 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32210) : f.call(null,inst_32210));
var inst_32226 = cljs.core.seq(inst_32225);
var inst_32227 = inst_32226;
var inst_32228 = null;
var inst_32229 = (0);
var inst_32230 = (0);
var state_32275__$1 = (function (){var statearr_32306 = state_32275;
(statearr_32306[(8)] = inst_32229);

(statearr_32306[(9)] = inst_32228);

(statearr_32306[(10)] = inst_32227);

(statearr_32306[(12)] = inst_32230);

return statearr_32306;
})();
var statearr_32307_34060 = state_32275__$1;
(statearr_32307_34060[(2)] = null);

(statearr_32307_34060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (17))){
var inst_32241 = (state_32275[(7)]);
var inst_32245 = cljs.core.chunk_first(inst_32241);
var inst_32246 = cljs.core.chunk_rest(inst_32241);
var inst_32247 = cljs.core.count(inst_32245);
var inst_32227 = inst_32246;
var inst_32228 = inst_32245;
var inst_32229 = inst_32247;
var inst_32230 = (0);
var state_32275__$1 = (function (){var statearr_32308 = state_32275;
(statearr_32308[(8)] = inst_32229);

(statearr_32308[(9)] = inst_32228);

(statearr_32308[(10)] = inst_32227);

(statearr_32308[(12)] = inst_32230);

return statearr_32308;
})();
var statearr_32309_34069 = state_32275__$1;
(statearr_32309_34069[(2)] = null);

(statearr_32309_34069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (3))){
var inst_32273 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32275__$1,inst_32273);
} else {
if((state_val_32276 === (12))){
var inst_32261 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32311_34078 = state_32275__$1;
(statearr_32311_34078[(2)] = inst_32261);

(statearr_32311_34078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (2))){
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32275__$1,(4),in$);
} else {
if((state_val_32276 === (23))){
var inst_32269 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32313_34091 = state_32275__$1;
(statearr_32313_34091[(2)] = inst_32269);

(statearr_32313_34091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (19))){
var inst_32256 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32315_34097 = state_32275__$1;
(statearr_32315_34097[(2)] = inst_32256);

(statearr_32315_34097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (11))){
var inst_32227 = (state_32275[(10)]);
var inst_32241 = (state_32275[(7)]);
var inst_32241__$1 = cljs.core.seq(inst_32227);
var state_32275__$1 = (function (){var statearr_32316 = state_32275;
(statearr_32316[(7)] = inst_32241__$1);

return statearr_32316;
})();
if(inst_32241__$1){
var statearr_32317_34100 = state_32275__$1;
(statearr_32317_34100[(1)] = (14));

} else {
var statearr_32318_34101 = state_32275__$1;
(statearr_32318_34101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (9))){
var inst_32263 = (state_32275[(2)]);
var inst_32264 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32275__$1 = (function (){var statearr_32319 = state_32275;
(statearr_32319[(15)] = inst_32263);

return statearr_32319;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32320_34110 = state_32275__$1;
(statearr_32320_34110[(1)] = (21));

} else {
var statearr_32321_34112 = state_32275__$1;
(statearr_32321_34112[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (5))){
var inst_32217 = cljs.core.async.close_BANG_(out);
var state_32275__$1 = state_32275;
var statearr_32322_34113 = state_32275__$1;
(statearr_32322_34113[(2)] = inst_32217);

(statearr_32322_34113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (14))){
var inst_32241 = (state_32275[(7)]);
var inst_32243 = cljs.core.chunked_seq_QMARK_(inst_32241);
var state_32275__$1 = state_32275;
if(inst_32243){
var statearr_32323_34116 = state_32275__$1;
(statearr_32323_34116[(1)] = (17));

} else {
var statearr_32324_34122 = state_32275__$1;
(statearr_32324_34122[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (16))){
var inst_32259 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32327_34123 = state_32275__$1;
(statearr_32327_34123[(2)] = inst_32259);

(statearr_32327_34123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (10))){
var inst_32228 = (state_32275[(9)]);
var inst_32230 = (state_32275[(12)]);
var inst_32235 = cljs.core._nth(inst_32228,inst_32230);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32275__$1,(13),out,inst_32235);
} else {
if((state_val_32276 === (18))){
var inst_32241 = (state_32275[(7)]);
var inst_32250 = cljs.core.first(inst_32241);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32275__$1,(20),out,inst_32250);
} else {
if((state_val_32276 === (8))){
var inst_32229 = (state_32275[(8)]);
var inst_32230 = (state_32275[(12)]);
var inst_32232 = (inst_32230 < inst_32229);
var inst_32233 = inst_32232;
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32233)){
var statearr_32330_34168 = state_32275__$1;
(statearr_32330_34168[(1)] = (10));

} else {
var statearr_32331_34174 = state_32275__$1;
(statearr_32331_34174[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____0 = (function (){
var statearr_32332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32332[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__);

(statearr_32332[(1)] = (1));

return statearr_32332;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____1 = (function (state_32275){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32275);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32333){var ex__29615__auto__ = e32333;
var statearr_32334_34198 = state_32275;
(statearr_32334_34198[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32275[(4)]))){
var statearr_32335_34203 = state_32275;
(statearr_32335_34203[(1)] = cljs.core.first((state_32275[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34212 = state_32275;
state_32275 = G__34212;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__ = function(state_32275){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____1.call(this,state_32275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29612__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32337 = f__29731__auto__();
(statearr_32337[(6)] = c__29730__auto__);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));

return c__29730__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32342 = arguments.length;
switch (G__32342) {
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
var G__32346 = arguments.length;
switch (G__32346) {
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
var G__32352 = arguments.length;
switch (G__32352) {
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
var c__29730__auto___34228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32379){
var state_val_32380 = (state_32379[(1)]);
if((state_val_32380 === (7))){
var inst_32374 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32384_34231 = state_32379__$1;
(statearr_32384_34231[(2)] = inst_32374);

(statearr_32384_34231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (1))){
var inst_32356 = null;
var state_32379__$1 = (function (){var statearr_32385 = state_32379;
(statearr_32385[(7)] = inst_32356);

return statearr_32385;
})();
var statearr_32386_34237 = state_32379__$1;
(statearr_32386_34237[(2)] = null);

(statearr_32386_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (4))){
var inst_32359 = (state_32379[(8)]);
var inst_32359__$1 = (state_32379[(2)]);
var inst_32360 = (inst_32359__$1 == null);
var inst_32361 = cljs.core.not(inst_32360);
var state_32379__$1 = (function (){var statearr_32388 = state_32379;
(statearr_32388[(8)] = inst_32359__$1);

return statearr_32388;
})();
if(inst_32361){
var statearr_32389_34247 = state_32379__$1;
(statearr_32389_34247[(1)] = (5));

} else {
var statearr_32390_34248 = state_32379__$1;
(statearr_32390_34248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (6))){
var state_32379__$1 = state_32379;
var statearr_32391_34249 = state_32379__$1;
(statearr_32391_34249[(2)] = null);

(statearr_32391_34249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (3))){
var inst_32376 = (state_32379[(2)]);
var inst_32377 = cljs.core.async.close_BANG_(out);
var state_32379__$1 = (function (){var statearr_32392 = state_32379;
(statearr_32392[(9)] = inst_32376);

return statearr_32392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32379__$1,inst_32377);
} else {
if((state_val_32380 === (2))){
var state_32379__$1 = state_32379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32379__$1,(4),ch);
} else {
if((state_val_32380 === (11))){
var inst_32359 = (state_32379[(8)]);
var inst_32368 = (state_32379[(2)]);
var inst_32356 = inst_32359;
var state_32379__$1 = (function (){var statearr_32394 = state_32379;
(statearr_32394[(10)] = inst_32368);

(statearr_32394[(7)] = inst_32356);

return statearr_32394;
})();
var statearr_32395_34250 = state_32379__$1;
(statearr_32395_34250[(2)] = null);

(statearr_32395_34250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (9))){
var inst_32359 = (state_32379[(8)]);
var state_32379__$1 = state_32379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32379__$1,(11),out,inst_32359);
} else {
if((state_val_32380 === (5))){
var inst_32356 = (state_32379[(7)]);
var inst_32359 = (state_32379[(8)]);
var inst_32363 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32359,inst_32356);
var state_32379__$1 = state_32379;
if(inst_32363){
var statearr_32397_34251 = state_32379__$1;
(statearr_32397_34251[(1)] = (8));

} else {
var statearr_32398_34252 = state_32379__$1;
(statearr_32398_34252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (10))){
var inst_32371 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32399_34253 = state_32379__$1;
(statearr_32399_34253[(2)] = inst_32371);

(statearr_32399_34253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32380 === (8))){
var inst_32356 = (state_32379[(7)]);
var tmp32396 = inst_32356;
var inst_32356__$1 = tmp32396;
var state_32379__$1 = (function (){var statearr_32401 = state_32379;
(statearr_32401[(7)] = inst_32356__$1);

return statearr_32401;
})();
var statearr_32402_34254 = state_32379__$1;
(statearr_32402_34254[(2)] = null);

(statearr_32402_34254[(1)] = (2));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_32406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32406[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_32406[(1)] = (1));

return statearr_32406;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_32379){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32379);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32407){var ex__29615__auto__ = e32407;
var statearr_32408_34255 = state_32379;
(statearr_32408_34255[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32379[(4)]))){
var statearr_32409_34256 = state_32379;
(statearr_32409_34256[(1)] = cljs.core.first((state_32379[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34257 = state_32379;
state_32379 = G__34257;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_32379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_32379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32410 = f__29731__auto__();
(statearr_32410[(6)] = c__29730__auto___34228);

return statearr_32410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
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
var c__29730__auto___34265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32452){
var state_val_32453 = (state_32452[(1)]);
if((state_val_32453 === (7))){
var inst_32448 = (state_32452[(2)]);
var state_32452__$1 = state_32452;
var statearr_32455_34266 = state_32452__$1;
(statearr_32455_34266[(2)] = inst_32448);

(statearr_32455_34266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (1))){
var inst_32415 = (new Array(n));
var inst_32416 = inst_32415;
var inst_32417 = (0);
var state_32452__$1 = (function (){var statearr_32459 = state_32452;
(statearr_32459[(7)] = inst_32417);

(statearr_32459[(8)] = inst_32416);

return statearr_32459;
})();
var statearr_32460_34269 = state_32452__$1;
(statearr_32460_34269[(2)] = null);

(statearr_32460_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (4))){
var inst_32420 = (state_32452[(9)]);
var inst_32420__$1 = (state_32452[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var inst_32422 = cljs.core.not(inst_32421);
var state_32452__$1 = (function (){var statearr_32461 = state_32452;
(statearr_32461[(9)] = inst_32420__$1);

return statearr_32461;
})();
if(inst_32422){
var statearr_32462_34271 = state_32452__$1;
(statearr_32462_34271[(1)] = (5));

} else {
var statearr_32464_34272 = state_32452__$1;
(statearr_32464_34272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (15))){
var inst_32442 = (state_32452[(2)]);
var state_32452__$1 = state_32452;
var statearr_32465_34273 = state_32452__$1;
(statearr_32465_34273[(2)] = inst_32442);

(statearr_32465_34273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (13))){
var state_32452__$1 = state_32452;
var statearr_32466_34276 = state_32452__$1;
(statearr_32466_34276[(2)] = null);

(statearr_32466_34276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (6))){
var inst_32417 = (state_32452[(7)]);
var inst_32438 = (inst_32417 > (0));
var state_32452__$1 = state_32452;
if(cljs.core.truth_(inst_32438)){
var statearr_32469_34277 = state_32452__$1;
(statearr_32469_34277[(1)] = (12));

} else {
var statearr_32471_34278 = state_32452__$1;
(statearr_32471_34278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (3))){
var inst_32450 = (state_32452[(2)]);
var state_32452__$1 = state_32452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32452__$1,inst_32450);
} else {
if((state_val_32453 === (12))){
var inst_32416 = (state_32452[(8)]);
var inst_32440 = cljs.core.vec(inst_32416);
var state_32452__$1 = state_32452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32452__$1,(15),out,inst_32440);
} else {
if((state_val_32453 === (2))){
var state_32452__$1 = state_32452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32452__$1,(4),ch);
} else {
if((state_val_32453 === (11))){
var inst_32432 = (state_32452[(2)]);
var inst_32433 = (new Array(n));
var inst_32416 = inst_32433;
var inst_32417 = (0);
var state_32452__$1 = (function (){var statearr_32472 = state_32452;
(statearr_32472[(7)] = inst_32417);

(statearr_32472[(8)] = inst_32416);

(statearr_32472[(10)] = inst_32432);

return statearr_32472;
})();
var statearr_32473_34286 = state_32452__$1;
(statearr_32473_34286[(2)] = null);

(statearr_32473_34286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (9))){
var inst_32416 = (state_32452[(8)]);
var inst_32430 = cljs.core.vec(inst_32416);
var state_32452__$1 = state_32452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32452__$1,(11),out,inst_32430);
} else {
if((state_val_32453 === (5))){
var inst_32420 = (state_32452[(9)]);
var inst_32417 = (state_32452[(7)]);
var inst_32416 = (state_32452[(8)]);
var inst_32425 = (state_32452[(11)]);
var inst_32424 = (inst_32416[inst_32417] = inst_32420);
var inst_32425__$1 = (inst_32417 + (1));
var inst_32426 = (inst_32425__$1 < n);
var state_32452__$1 = (function (){var statearr_32474 = state_32452;
(statearr_32474[(12)] = inst_32424);

(statearr_32474[(11)] = inst_32425__$1);

return statearr_32474;
})();
if(cljs.core.truth_(inst_32426)){
var statearr_32475_34303 = state_32452__$1;
(statearr_32475_34303[(1)] = (8));

} else {
var statearr_32476_34304 = state_32452__$1;
(statearr_32476_34304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (14))){
var inst_32445 = (state_32452[(2)]);
var inst_32446 = cljs.core.async.close_BANG_(out);
var state_32452__$1 = (function (){var statearr_32478 = state_32452;
(statearr_32478[(13)] = inst_32445);

return statearr_32478;
})();
var statearr_32479_34313 = state_32452__$1;
(statearr_32479_34313[(2)] = inst_32446);

(statearr_32479_34313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (10))){
var inst_32436 = (state_32452[(2)]);
var state_32452__$1 = state_32452;
var statearr_32480_34314 = state_32452__$1;
(statearr_32480_34314[(2)] = inst_32436);

(statearr_32480_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32453 === (8))){
var inst_32416 = (state_32452[(8)]);
var inst_32425 = (state_32452[(11)]);
var tmp32477 = inst_32416;
var inst_32416__$1 = tmp32477;
var inst_32417 = inst_32425;
var state_32452__$1 = (function (){var statearr_32481 = state_32452;
(statearr_32481[(7)] = inst_32417);

(statearr_32481[(8)] = inst_32416__$1);

return statearr_32481;
})();
var statearr_32482_34315 = state_32452__$1;
(statearr_32482_34315[(2)] = null);

(statearr_32482_34315[(1)] = (2));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_32483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32483[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_32483[(1)] = (1));

return statearr_32483;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_32452){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32452);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32484){var ex__29615__auto__ = e32484;
var statearr_32485_34316 = state_32452;
(statearr_32485_34316[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32452[(4)]))){
var statearr_32486_34317 = state_32452;
(statearr_32486_34317[(1)] = cljs.core.first((state_32452[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34318 = state_32452;
state_32452 = G__34318;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_32452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_32452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32487 = f__29731__auto__();
(statearr_32487[(6)] = c__29730__auto___34265);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32494 = arguments.length;
switch (G__32494) {
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
var c__29730__auto___34327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29731__auto__ = (function (){var switch__29611__auto__ = (function (state_32541){
var state_val_32542 = (state_32541[(1)]);
if((state_val_32542 === (7))){
var inst_32537 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32545_34330 = state_32541__$1;
(statearr_32545_34330[(2)] = inst_32537);

(statearr_32545_34330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (1))){
var inst_32500 = [];
var inst_32501 = inst_32500;
var inst_32502 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32541__$1 = (function (){var statearr_32546 = state_32541;
(statearr_32546[(7)] = inst_32502);

(statearr_32546[(8)] = inst_32501);

return statearr_32546;
})();
var statearr_32548_34332 = state_32541__$1;
(statearr_32548_34332[(2)] = null);

(statearr_32548_34332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (4))){
var inst_32505 = (state_32541[(9)]);
var inst_32505__$1 = (state_32541[(2)]);
var inst_32506 = (inst_32505__$1 == null);
var inst_32507 = cljs.core.not(inst_32506);
var state_32541__$1 = (function (){var statearr_32550 = state_32541;
(statearr_32550[(9)] = inst_32505__$1);

return statearr_32550;
})();
if(inst_32507){
var statearr_32552_34333 = state_32541__$1;
(statearr_32552_34333[(1)] = (5));

} else {
var statearr_32555_34334 = state_32541__$1;
(statearr_32555_34334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (15))){
var inst_32531 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32556_34335 = state_32541__$1;
(statearr_32556_34335[(2)] = inst_32531);

(statearr_32556_34335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (13))){
var state_32541__$1 = state_32541;
var statearr_32561_34336 = state_32541__$1;
(statearr_32561_34336[(2)] = null);

(statearr_32561_34336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (6))){
var inst_32501 = (state_32541[(8)]);
var inst_32526 = inst_32501.length;
var inst_32527 = (inst_32526 > (0));
var state_32541__$1 = state_32541;
if(cljs.core.truth_(inst_32527)){
var statearr_32566_34340 = state_32541__$1;
(statearr_32566_34340[(1)] = (12));

} else {
var statearr_32568_34341 = state_32541__$1;
(statearr_32568_34341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (3))){
var inst_32539 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32541__$1,inst_32539);
} else {
if((state_val_32542 === (12))){
var inst_32501 = (state_32541[(8)]);
var inst_32529 = cljs.core.vec(inst_32501);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32541__$1,(15),out,inst_32529);
} else {
if((state_val_32542 === (2))){
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32541__$1,(4),ch);
} else {
if((state_val_32542 === (11))){
var inst_32509 = (state_32541[(10)]);
var inst_32505 = (state_32541[(9)]);
var inst_32519 = (state_32541[(2)]);
var inst_32520 = [];
var inst_32521 = inst_32520.push(inst_32505);
var inst_32501 = inst_32520;
var inst_32502 = inst_32509;
var state_32541__$1 = (function (){var statearr_32579 = state_32541;
(statearr_32579[(11)] = inst_32521);

(statearr_32579[(7)] = inst_32502);

(statearr_32579[(12)] = inst_32519);

(statearr_32579[(8)] = inst_32501);

return statearr_32579;
})();
var statearr_32580_34350 = state_32541__$1;
(statearr_32580_34350[(2)] = null);

(statearr_32580_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (9))){
var inst_32501 = (state_32541[(8)]);
var inst_32517 = cljs.core.vec(inst_32501);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32541__$1,(11),out,inst_32517);
} else {
if((state_val_32542 === (5))){
var inst_32502 = (state_32541[(7)]);
var inst_32509 = (state_32541[(10)]);
var inst_32505 = (state_32541[(9)]);
var inst_32509__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32505) : f.call(null,inst_32505));
var inst_32510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32509__$1,inst_32502);
var inst_32511 = cljs.core.keyword_identical_QMARK_(inst_32502,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32512 = ((inst_32510) || (inst_32511));
var state_32541__$1 = (function (){var statearr_32581 = state_32541;
(statearr_32581[(10)] = inst_32509__$1);

return statearr_32581;
})();
if(cljs.core.truth_(inst_32512)){
var statearr_32582_34351 = state_32541__$1;
(statearr_32582_34351[(1)] = (8));

} else {
var statearr_32583_34352 = state_32541__$1;
(statearr_32583_34352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (14))){
var inst_32534 = (state_32541[(2)]);
var inst_32535 = cljs.core.async.close_BANG_(out);
var state_32541__$1 = (function (){var statearr_32585 = state_32541;
(statearr_32585[(13)] = inst_32534);

return statearr_32585;
})();
var statearr_32586_34375 = state_32541__$1;
(statearr_32586_34375[(2)] = inst_32535);

(statearr_32586_34375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (10))){
var inst_32524 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32587_34376 = state_32541__$1;
(statearr_32587_34376[(2)] = inst_32524);

(statearr_32587_34376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (8))){
var inst_32509 = (state_32541[(10)]);
var inst_32501 = (state_32541[(8)]);
var inst_32505 = (state_32541[(9)]);
var inst_32514 = inst_32501.push(inst_32505);
var tmp32584 = inst_32501;
var inst_32501__$1 = tmp32584;
var inst_32502 = inst_32509;
var state_32541__$1 = (function (){var statearr_32589 = state_32541;
(statearr_32589[(14)] = inst_32514);

(statearr_32589[(7)] = inst_32502);

(statearr_32589[(8)] = inst_32501__$1);

return statearr_32589;
})();
var statearr_32590_34377 = state_32541__$1;
(statearr_32590_34377[(2)] = null);

(statearr_32590_34377[(1)] = (2));


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
var cljs$core$async$state_machine__29612__auto__ = null;
var cljs$core$async$state_machine__29612__auto____0 = (function (){
var statearr_32591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32591[(0)] = cljs$core$async$state_machine__29612__auto__);

(statearr_32591[(1)] = (1));

return statearr_32591;
});
var cljs$core$async$state_machine__29612__auto____1 = (function (state_32541){
while(true){
var ret_value__29613__auto__ = (function (){try{while(true){
var result__29614__auto__ = switch__29611__auto__(state_32541);
if(cljs.core.keyword_identical_QMARK_(result__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29614__auto__;
}
break;
}
}catch (e32595){var ex__29615__auto__ = e32595;
var statearr_32596_34384 = state_32541;
(statearr_32596_34384[(2)] = ex__29615__auto__);


if(cljs.core.seq((state_32541[(4)]))){
var statearr_32597_34385 = state_32541;
(statearr_32597_34385[(1)] = cljs.core.first((state_32541[(4)])));

} else {
throw ex__29615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34386 = state_32541;
state_32541 = G__34386;
continue;
} else {
return ret_value__29613__auto__;
}
break;
}
});
cljs$core$async$state_machine__29612__auto__ = function(state_32541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29612__auto____1.call(this,state_32541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29612__auto____0;
cljs$core$async$state_machine__29612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29612__auto____1;
return cljs$core$async$state_machine__29612__auto__;
})()
})();
var state__29732__auto__ = (function (){var statearr_32599 = f__29731__auto__();
(statearr_32599[(6)] = c__29730__auto___34327);

return statearr_32599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29732__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
