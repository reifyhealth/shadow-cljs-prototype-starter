goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28610 = arguments.length;
switch (G__28610) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28615 = (function (f,blockable,meta28616){
this.f = f;
this.blockable = blockable;
this.meta28616 = meta28616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28617,meta28616__$1){
var self__ = this;
var _28617__$1 = this;
return (new cljs.core.async.t_cljs$core$async28615(self__.f,self__.blockable,meta28616__$1));
}));

(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28617){
var self__ = this;
var _28617__$1 = this;
return self__.meta28616;
}));

(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28616","meta28616",661594391,null)], null);
}));

(cljs.core.async.t_cljs$core$async28615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28615");

(cljs.core.async.t_cljs$core$async28615.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28615.
 */
cljs.core.async.__GT_t_cljs$core$async28615 = (function cljs$core$async$__GT_t_cljs$core$async28615(f__$1,blockable__$1,meta28616){
return (new cljs.core.async.t_cljs$core$async28615(f__$1,blockable__$1,meta28616));
});

}

return (new cljs.core.async.t_cljs$core$async28615(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28627 = arguments.length;
switch (G__28627) {
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
var G__28639 = arguments.length;
switch (G__28639) {
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
var G__28641 = arguments.length;
switch (G__28641) {
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
var val_31501 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31501) : fn1.call(null,val_31501));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31501) : fn1.call(null,val_31501));
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
var G__28671 = arguments.length;
switch (G__28671) {
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
var n__4613__auto___31526 = n;
var x_31527 = (0);
while(true){
if((x_31527 < n__4613__auto___31526)){
(a[x_31527] = x_31527);

var G__31529 = (x_31527 + (1));
x_31527 = G__31529;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28705 = (function (flag,meta28706){
this.flag = flag;
this.meta28706 = meta28706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28707,meta28706__$1){
var self__ = this;
var _28707__$1 = this;
return (new cljs.core.async.t_cljs$core$async28705(self__.flag,meta28706__$1));
}));

(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28707){
var self__ = this;
var _28707__$1 = this;
return self__.meta28706;
}));

(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28706","meta28706",-1904137321,null)], null);
}));

(cljs.core.async.t_cljs$core$async28705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28705");

(cljs.core.async.t_cljs$core$async28705.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28705.
 */
cljs.core.async.__GT_t_cljs$core$async28705 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28705(flag__$1,meta28706){
return (new cljs.core.async.t_cljs$core$async28705(flag__$1,meta28706));
});

}

return (new cljs.core.async.t_cljs$core$async28705(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28732 = (function (flag,cb,meta28733){
this.flag = flag;
this.cb = cb;
this.meta28733 = meta28733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28734,meta28733__$1){
var self__ = this;
var _28734__$1 = this;
return (new cljs.core.async.t_cljs$core$async28732(self__.flag,self__.cb,meta28733__$1));
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28734){
var self__ = this;
var _28734__$1 = this;
return self__.meta28733;
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28733","meta28733",-970656040,null)], null);
}));

(cljs.core.async.t_cljs$core$async28732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28732");

(cljs.core.async.t_cljs$core$async28732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28732.
 */
cljs.core.async.__GT_t_cljs$core$async28732 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28732(flag__$1,cb__$1,meta28733){
return (new cljs.core.async.t_cljs$core$async28732(flag__$1,cb__$1,meta28733));
});

}

return (new cljs.core.async.t_cljs$core$async28732(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28737_SHARP_){
var G__28752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28752) : fret.call(null,G__28752));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28738_SHARP_){
var G__28753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28753) : fret.call(null,G__28753));
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
var G__31548 = (i + (1));
i = G__31548;
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
var len__4736__auto___31551 = arguments.length;
var i__4737__auto___31552 = (0);
while(true){
if((i__4737__auto___31552 < len__4736__auto___31551)){
args__4742__auto__.push((arguments[i__4737__auto___31552]));

var G__31554 = (i__4737__auto___31552 + (1));
i__4737__auto___31552 = G__31554;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28762){
var map__28763 = p__28762;
var map__28763__$1 = (((((!((map__28763 == null))))?(((((map__28763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28763):map__28763);
var opts = map__28763__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28757){
var G__28758 = cljs.core.first(seq28757);
var seq28757__$1 = cljs.core.next(seq28757);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28758,seq28757__$1);
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
var G__28772 = arguments.length;
switch (G__28772) {
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
var c__28542__auto___31580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_28821){
var state_val_28822 = (state_28821[(1)]);
if((state_val_28822 === (7))){
var inst_28817 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28823_31582 = state_28821__$1;
(statearr_28823_31582[(2)] = inst_28817);

(statearr_28823_31582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (1))){
var state_28821__$1 = state_28821;
var statearr_28824_31584 = state_28821__$1;
(statearr_28824_31584[(2)] = null);

(statearr_28824_31584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (4))){
var inst_28789 = (state_28821[(7)]);
var inst_28789__$1 = (state_28821[(2)]);
var inst_28792 = (inst_28789__$1 == null);
var state_28821__$1 = (function (){var statearr_28825 = state_28821;
(statearr_28825[(7)] = inst_28789__$1);

return statearr_28825;
})();
if(cljs.core.truth_(inst_28792)){
var statearr_28826_31586 = state_28821__$1;
(statearr_28826_31586[(1)] = (5));

} else {
var statearr_28827_31587 = state_28821__$1;
(statearr_28827_31587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (13))){
var state_28821__$1 = state_28821;
var statearr_28828_31590 = state_28821__$1;
(statearr_28828_31590[(2)] = null);

(statearr_28828_31590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (6))){
var inst_28789 = (state_28821[(7)]);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28821__$1,(11),to,inst_28789);
} else {
if((state_val_28822 === (3))){
var inst_28819 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28821__$1,inst_28819);
} else {
if((state_val_28822 === (12))){
var state_28821__$1 = state_28821;
var statearr_28830_31592 = state_28821__$1;
(statearr_28830_31592[(2)] = null);

(statearr_28830_31592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (2))){
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28821__$1,(4),from);
} else {
if((state_val_28822 === (11))){
var inst_28809 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
if(cljs.core.truth_(inst_28809)){
var statearr_28831_31593 = state_28821__$1;
(statearr_28831_31593[(1)] = (12));

} else {
var statearr_28832_31594 = state_28821__$1;
(statearr_28832_31594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (9))){
var state_28821__$1 = state_28821;
var statearr_28833_31596 = state_28821__$1;
(statearr_28833_31596[(2)] = null);

(statearr_28833_31596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (5))){
var state_28821__$1 = state_28821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28834_31597 = state_28821__$1;
(statearr_28834_31597[(1)] = (8));

} else {
var statearr_28835_31598 = state_28821__$1;
(statearr_28835_31598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (14))){
var inst_28815 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28836_31599 = state_28821__$1;
(statearr_28836_31599[(2)] = inst_28815);

(statearr_28836_31599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (10))){
var inst_28804 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28837_31600 = state_28821__$1;
(statearr_28837_31600[(2)] = inst_28804);

(statearr_28837_31600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (8))){
var inst_28795 = cljs.core.async.close_BANG_(to);
var state_28821__$1 = state_28821;
var statearr_28838_31601 = state_28821__$1;
(statearr_28838_31601[(2)] = inst_28795);

(statearr_28838_31601[(1)] = (10));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_28839 = [null,null,null,null,null,null,null,null];
(statearr_28839[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_28839[(1)] = (1));

return statearr_28839;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_28821){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_28821);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e28840){var ex__28388__auto__ = e28840;
var statearr_28841_31620 = state_28821;
(statearr_28841_31620[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_28821[(4)]))){
var statearr_28842_31621 = state_28821;
(statearr_28842_31621[(1)] = cljs.core.first((state_28821[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31629 = state_28821;
state_28821 = G__31629;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_28821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_28821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_28843 = f__28543__auto__();
(statearr_28843[(6)] = c__28542__auto___31580);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var process = (function (p__28844){
var vec__28848 = p__28844;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(1),null);
var job = vec__28848;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28542__auto___31641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_28855){
var state_val_28856 = (state_28855[(1)]);
if((state_val_28856 === (1))){
var state_28855__$1 = state_28855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28855__$1,(2),res,v);
} else {
if((state_val_28856 === (2))){
var inst_28852 = (state_28855[(2)]);
var inst_28853 = cljs.core.async.close_BANG_(res);
var state_28855__$1 = (function (){var statearr_28857 = state_28855;
(statearr_28857[(7)] = inst_28852);

return statearr_28857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28855__$1,inst_28853);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_28858 = [null,null,null,null,null,null,null,null];
(statearr_28858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__);

(statearr_28858[(1)] = (1));

return statearr_28858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1 = (function (state_28855){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_28855);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e28859){var ex__28388__auto__ = e28859;
var statearr_28860_31649 = state_28855;
(statearr_28860_31649[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_28855[(4)]))){
var statearr_28861_31653 = state_28855;
(statearr_28861_31653[(1)] = cljs.core.first((state_28855[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31654 = state_28855;
state_28855 = G__31654;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = function(state_28855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1.call(this,state_28855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_28862 = f__28543__auto__();
(statearr_28862[(6)] = c__28542__auto___31641);

return statearr_28862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28864){
var vec__28865 = p__28864;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865,(1),null);
var job = vec__28865;
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
var n__4613__auto___31679 = n;
var __31680 = (0);
while(true){
if((__31680 < n__4613__auto___31679)){
var G__28868_31682 = type;
var G__28868_31683__$1 = (((G__28868_31682 instanceof cljs.core.Keyword))?G__28868_31682.fqn:null);
switch (G__28868_31683__$1) {
case "compute":
var c__28542__auto___31688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31680,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = ((function (__31680,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (1))){
var state_28881__$1 = state_28881;
var statearr_28883_31691 = state_28881__$1;
(statearr_28883_31691[(2)] = null);

(statearr_28883_31691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (2))){
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28881__$1,(4),jobs);
} else {
if((state_val_28882 === (3))){
var inst_28879 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28881__$1,inst_28879);
} else {
if((state_val_28882 === (4))){
var inst_28871 = (state_28881[(2)]);
var inst_28872 = process(inst_28871);
var state_28881__$1 = state_28881;
if(cljs.core.truth_(inst_28872)){
var statearr_28884_31698 = state_28881__$1;
(statearr_28884_31698[(1)] = (5));

} else {
var statearr_28885_31699 = state_28881__$1;
(statearr_28885_31699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (5))){
var state_28881__$1 = state_28881;
var statearr_28886_31700 = state_28881__$1;
(statearr_28886_31700[(2)] = null);

(statearr_28886_31700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (6))){
var state_28881__$1 = state_28881;
var statearr_28887_31705 = state_28881__$1;
(statearr_28887_31705[(2)] = null);

(statearr_28887_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (7))){
var inst_28877 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28888_31706 = state_28881__$1;
(statearr_28888_31706[(2)] = inst_28877);

(statearr_28888_31706[(1)] = (3));


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
});})(__31680,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
;
return ((function (__31680,switch__28384__auto__,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_28889 = [null,null,null,null,null,null,null];
(statearr_28889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__);

(statearr_28889[(1)] = (1));

return statearr_28889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1 = (function (state_28881){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_28881);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e28891){var ex__28388__auto__ = e28891;
var statearr_28892_31714 = state_28881;
(statearr_28892_31714[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_28881[(4)]))){
var statearr_28894_31715 = state_28881;
(statearr_28894_31715[(1)] = cljs.core.first((state_28881[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31719 = state_28881;
state_28881 = G__31719;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__;
})()
;})(__31680,switch__28384__auto__,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
})();
var state__28544__auto__ = (function (){var statearr_28895 = f__28543__auto__();
(statearr_28895[(6)] = c__28542__auto___31688);

return statearr_28895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
});})(__31680,c__28542__auto___31688,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
);


break;
case "async":
var c__28542__auto___31724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31680,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = ((function (__31680,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function (state_28911){
var state_val_28912 = (state_28911[(1)]);
if((state_val_28912 === (1))){
var state_28911__$1 = state_28911;
var statearr_28913_31731 = state_28911__$1;
(statearr_28913_31731[(2)] = null);

(statearr_28913_31731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (2))){
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28911__$1,(4),jobs);
} else {
if((state_val_28912 === (3))){
var inst_28909 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28911__$1,inst_28909);
} else {
if((state_val_28912 === (4))){
var inst_28901 = (state_28911[(2)]);
var inst_28902 = async(inst_28901);
var state_28911__$1 = state_28911;
if(cljs.core.truth_(inst_28902)){
var statearr_28914_31736 = state_28911__$1;
(statearr_28914_31736[(1)] = (5));

} else {
var statearr_28915_31737 = state_28911__$1;
(statearr_28915_31737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (5))){
var state_28911__$1 = state_28911;
var statearr_28919_31738 = state_28911__$1;
(statearr_28919_31738[(2)] = null);

(statearr_28919_31738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (6))){
var state_28911__$1 = state_28911;
var statearr_28920_31740 = state_28911__$1;
(statearr_28920_31740[(2)] = null);

(statearr_28920_31740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (7))){
var inst_28907 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
var statearr_28921_31746 = state_28911__$1;
(statearr_28921_31746[(2)] = inst_28907);

(statearr_28921_31746[(1)] = (3));


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
});})(__31680,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
;
return ((function (__31680,switch__28384__auto__,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_28922 = [null,null,null,null,null,null,null];
(statearr_28922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__);

(statearr_28922[(1)] = (1));

return statearr_28922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1 = (function (state_28911){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_28911);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e28923){var ex__28388__auto__ = e28923;
var statearr_28924_31750 = state_28911;
(statearr_28924_31750[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_28911[(4)]))){
var statearr_28925_31751 = state_28911;
(statearr_28925_31751[(1)] = cljs.core.first((state_28911[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31752 = state_28911;
state_28911 = G__31752;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = function(state_28911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1.call(this,state_28911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__;
})()
;})(__31680,switch__28384__auto__,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
})();
var state__28544__auto__ = (function (){var statearr_28926 = f__28543__auto__();
(statearr_28926[(6)] = c__28542__auto___31724);

return statearr_28926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
});})(__31680,c__28542__auto___31724,G__28868_31682,G__28868_31683__$1,n__4613__auto___31679,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28868_31683__$1)].join('')));

}

var G__31754 = (__31680 + (1));
__31680 = G__31754;
continue;
} else {
}
break;
}

var c__28542__auto___31755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_28948){
var state_val_28949 = (state_28948[(1)]);
if((state_val_28949 === (7))){
var inst_28944 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28951_31756 = state_28948__$1;
(statearr_28951_31756[(2)] = inst_28944);

(statearr_28951_31756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (1))){
var state_28948__$1 = state_28948;
var statearr_28952_31757 = state_28948__$1;
(statearr_28952_31757[(2)] = null);

(statearr_28952_31757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (4))){
var inst_28929 = (state_28948[(7)]);
var inst_28929__$1 = (state_28948[(2)]);
var inst_28930 = (inst_28929__$1 == null);
var state_28948__$1 = (function (){var statearr_28956 = state_28948;
(statearr_28956[(7)] = inst_28929__$1);

return statearr_28956;
})();
if(cljs.core.truth_(inst_28930)){
var statearr_28957_31764 = state_28948__$1;
(statearr_28957_31764[(1)] = (5));

} else {
var statearr_28958_31765 = state_28948__$1;
(statearr_28958_31765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (6))){
var inst_28934 = (state_28948[(8)]);
var inst_28929 = (state_28948[(7)]);
var inst_28934__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28936 = [inst_28929,inst_28934__$1];
var inst_28937 = (new cljs.core.PersistentVector(null,2,(5),inst_28935,inst_28936,null));
var state_28948__$1 = (function (){var statearr_28959 = state_28948;
(statearr_28959[(8)] = inst_28934__$1);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28948__$1,(8),jobs,inst_28937);
} else {
if((state_val_28949 === (3))){
var inst_28946 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28948__$1,inst_28946);
} else {
if((state_val_28949 === (2))){
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28948__$1,(4),from);
} else {
if((state_val_28949 === (9))){
var inst_28941 = (state_28948[(2)]);
var state_28948__$1 = (function (){var statearr_28963 = state_28948;
(statearr_28963[(9)] = inst_28941);

return statearr_28963;
})();
var statearr_28964_31768 = state_28948__$1;
(statearr_28964_31768[(2)] = null);

(statearr_28964_31768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (5))){
var inst_28932 = cljs.core.async.close_BANG_(jobs);
var state_28948__$1 = state_28948;
var statearr_28967_31769 = state_28948__$1;
(statearr_28967_31769[(2)] = inst_28932);

(statearr_28967_31769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (8))){
var inst_28934 = (state_28948[(8)]);
var inst_28939 = (state_28948[(2)]);
var state_28948__$1 = (function (){var statearr_28968 = state_28948;
(statearr_28968[(10)] = inst_28939);

return statearr_28968;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28948__$1,(9),results,inst_28934);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1 = (function (state_28948){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_28948);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e28974){var ex__28388__auto__ = e28974;
var statearr_28975_31778 = state_28948;
(statearr_28975_31778[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_28948[(4)]))){
var statearr_28978_31779 = state_28948;
(statearr_28978_31779[(1)] = cljs.core.first((state_28948[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31780 = state_28948;
state_28948 = G__31780;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_28979 = f__28543__auto__();
(statearr_28979[(6)] = c__28542__auto___31755);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


var c__28542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29031){
var state_val_29032 = (state_29031[(1)]);
if((state_val_29032 === (7))){
var inst_29027 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29033_31781 = state_29031__$1;
(statearr_29033_31781[(2)] = inst_29027);

(statearr_29033_31781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (20))){
var state_29031__$1 = state_29031;
var statearr_29034_31782 = state_29031__$1;
(statearr_29034_31782[(2)] = null);

(statearr_29034_31782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (1))){
var state_29031__$1 = state_29031;
var statearr_29035_31783 = state_29031__$1;
(statearr_29035_31783[(2)] = null);

(statearr_29035_31783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (4))){
var inst_28984 = (state_29031[(7)]);
var inst_28984__$1 = (state_29031[(2)]);
var inst_28985 = (inst_28984__$1 == null);
var state_29031__$1 = (function (){var statearr_29036 = state_29031;
(statearr_29036[(7)] = inst_28984__$1);

return statearr_29036;
})();
if(cljs.core.truth_(inst_28985)){
var statearr_29037_31784 = state_29031__$1;
(statearr_29037_31784[(1)] = (5));

} else {
var statearr_29038_31785 = state_29031__$1;
(statearr_29038_31785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (15))){
var inst_29009 = (state_29031[(8)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29031__$1,(18),to,inst_29009);
} else {
if((state_val_29032 === (21))){
var inst_29022 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29039_31786 = state_29031__$1;
(statearr_29039_31786[(2)] = inst_29022);

(statearr_29039_31786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (13))){
var inst_29024 = (state_29031[(2)]);
var state_29031__$1 = (function (){var statearr_29041 = state_29031;
(statearr_29041[(9)] = inst_29024);

return statearr_29041;
})();
var statearr_29044_31788 = state_29031__$1;
(statearr_29044_31788[(2)] = null);

(statearr_29044_31788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (6))){
var inst_28984 = (state_29031[(7)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29031__$1,(11),inst_28984);
} else {
if((state_val_29032 === (17))){
var inst_29017 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
if(cljs.core.truth_(inst_29017)){
var statearr_29048_31789 = state_29031__$1;
(statearr_29048_31789[(1)] = (19));

} else {
var statearr_29049_31790 = state_29031__$1;
(statearr_29049_31790[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (3))){
var inst_29029 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29031__$1,inst_29029);
} else {
if((state_val_29032 === (12))){
var inst_29006 = (state_29031[(10)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29031__$1,(14),inst_29006);
} else {
if((state_val_29032 === (2))){
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29031__$1,(4),results);
} else {
if((state_val_29032 === (19))){
var state_29031__$1 = state_29031;
var statearr_29053_31792 = state_29031__$1;
(statearr_29053_31792[(2)] = null);

(statearr_29053_31792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (11))){
var inst_29006 = (state_29031[(2)]);
var state_29031__$1 = (function (){var statearr_29056 = state_29031;
(statearr_29056[(10)] = inst_29006);

return statearr_29056;
})();
var statearr_29058_31797 = state_29031__$1;
(statearr_29058_31797[(2)] = null);

(statearr_29058_31797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (9))){
var state_29031__$1 = state_29031;
var statearr_29059_31798 = state_29031__$1;
(statearr_29059_31798[(2)] = null);

(statearr_29059_31798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (5))){
var state_29031__$1 = state_29031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29064_31799 = state_29031__$1;
(statearr_29064_31799[(1)] = (8));

} else {
var statearr_29066_31800 = state_29031__$1;
(statearr_29066_31800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (14))){
var inst_29009 = (state_29031[(8)]);
var inst_29009__$1 = (state_29031[(2)]);
var inst_29010 = (inst_29009__$1 == null);
var inst_29011 = cljs.core.not(inst_29010);
var state_29031__$1 = (function (){var statearr_29071 = state_29031;
(statearr_29071[(8)] = inst_29009__$1);

return statearr_29071;
})();
if(inst_29011){
var statearr_29072_31801 = state_29031__$1;
(statearr_29072_31801[(1)] = (15));

} else {
var statearr_29073_31802 = state_29031__$1;
(statearr_29073_31802[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (16))){
var state_29031__$1 = state_29031;
var statearr_29074_31803 = state_29031__$1;
(statearr_29074_31803[(2)] = false);

(statearr_29074_31803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (10))){
var inst_28991 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29076_31804 = state_29031__$1;
(statearr_29076_31804[(2)] = inst_28991);

(statearr_29076_31804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (18))){
var inst_29014 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29077_31805 = state_29031__$1;
(statearr_29077_31805[(2)] = inst_29014);

(statearr_29077_31805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (8))){
var inst_28988 = cljs.core.async.close_BANG_(to);
var state_29031__$1 = state_29031;
var statearr_29078_31806 = state_29031__$1;
(statearr_29078_31806[(2)] = inst_28988);

(statearr_29078_31806[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_29079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__);

(statearr_29079[(1)] = (1));

return statearr_29079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1 = (function (state_29031){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29031);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29080){var ex__28388__auto__ = e29080;
var statearr_29081_31807 = state_29031;
(statearr_29081_31807[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29031[(4)]))){
var statearr_29085_31811 = state_29031;
(statearr_29085_31811[(1)] = cljs.core.first((state_29031[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31812 = state_29031;
state_29031 = G__31812;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__ = function(state_29031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1.call(this,state_29031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29088 = f__28543__auto__();
(statearr_29088[(6)] = c__28542__auto__);

return statearr_29088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

return c__28542__auto__;
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
var G__29091 = arguments.length;
switch (G__29091) {
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
var G__29098 = arguments.length;
switch (G__29098) {
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
var G__29110 = arguments.length;
switch (G__29110) {
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
var c__28542__auto___31825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29140){
var state_val_29141 = (state_29140[(1)]);
if((state_val_29141 === (7))){
var inst_29136 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29143_31826 = state_29140__$1;
(statearr_29143_31826[(2)] = inst_29136);

(statearr_29143_31826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (1))){
var state_29140__$1 = state_29140;
var statearr_29145_31827 = state_29140__$1;
(statearr_29145_31827[(2)] = null);

(statearr_29145_31827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (4))){
var inst_29117 = (state_29140[(7)]);
var inst_29117__$1 = (state_29140[(2)]);
var inst_29118 = (inst_29117__$1 == null);
var state_29140__$1 = (function (){var statearr_29146 = state_29140;
(statearr_29146[(7)] = inst_29117__$1);

return statearr_29146;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29147_31830 = state_29140__$1;
(statearr_29147_31830[(1)] = (5));

} else {
var statearr_29149_31831 = state_29140__$1;
(statearr_29149_31831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (13))){
var state_29140__$1 = state_29140;
var statearr_29151_31845 = state_29140__$1;
(statearr_29151_31845[(2)] = null);

(statearr_29151_31845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (6))){
var inst_29117 = (state_29140[(7)]);
var inst_29123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29117) : p.call(null,inst_29117));
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29123)){
var statearr_29152_31846 = state_29140__$1;
(statearr_29152_31846[(1)] = (9));

} else {
var statearr_29156_31847 = state_29140__$1;
(statearr_29156_31847[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (3))){
var inst_29138 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29140__$1,inst_29138);
} else {
if((state_val_29141 === (12))){
var state_29140__$1 = state_29140;
var statearr_29157_31848 = state_29140__$1;
(statearr_29157_31848[(2)] = null);

(statearr_29157_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (2))){
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29140__$1,(4),ch);
} else {
if((state_val_29141 === (11))){
var inst_29117 = (state_29140[(7)]);
var inst_29127 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29140__$1,(8),inst_29127,inst_29117);
} else {
if((state_val_29141 === (9))){
var state_29140__$1 = state_29140;
var statearr_29158_31849 = state_29140__$1;
(statearr_29158_31849[(2)] = tc);

(statearr_29158_31849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (5))){
var inst_29120 = cljs.core.async.close_BANG_(tc);
var inst_29121 = cljs.core.async.close_BANG_(fc);
var state_29140__$1 = (function (){var statearr_29162 = state_29140;
(statearr_29162[(8)] = inst_29120);

return statearr_29162;
})();
var statearr_29163_31852 = state_29140__$1;
(statearr_29163_31852[(2)] = inst_29121);

(statearr_29163_31852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (14))){
var inst_29134 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29164_31855 = state_29140__$1;
(statearr_29164_31855[(2)] = inst_29134);

(statearr_29164_31855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (10))){
var state_29140__$1 = state_29140;
var statearr_29165_31856 = state_29140__$1;
(statearr_29165_31856[(2)] = fc);

(statearr_29165_31856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (8))){
var inst_29129 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29129)){
var statearr_29166_31863 = state_29140__$1;
(statearr_29166_31863[(1)] = (12));

} else {
var statearr_29167_31867 = state_29140__$1;
(statearr_29167_31867[(1)] = (13));

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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_29169 = [null,null,null,null,null,null,null,null,null];
(statearr_29169[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_29169[(1)] = (1));

return statearr_29169;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_29140){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29140);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29172){var ex__28388__auto__ = e29172;
var statearr_29173_31869 = state_29140;
(statearr_29173_31869[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29140[(4)]))){
var statearr_29175_31873 = state_29140;
(statearr_29175_31873[(1)] = cljs.core.first((state_29140[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31874 = state_29140;
state_29140 = G__31874;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_29140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29176 = f__28543__auto__();
(statearr_29176[(6)] = c__28542__auto___31825);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var c__28542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29209){
var state_val_29210 = (state_29209[(1)]);
if((state_val_29210 === (7))){
var inst_29205 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29235_31875 = state_29209__$1;
(statearr_29235_31875[(2)] = inst_29205);

(statearr_29235_31875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var inst_29181 = init;
var inst_29183 = inst_29181;
var state_29209__$1 = (function (){var statearr_29239 = state_29209;
(statearr_29239[(7)] = inst_29183);

return statearr_29239;
})();
var statearr_29240_31880 = state_29209__$1;
(statearr_29240_31880[(2)] = null);

(statearr_29240_31880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29188 = (state_29209[(8)]);
var inst_29188__$1 = (state_29209[(2)]);
var inst_29189 = (inst_29188__$1 == null);
var state_29209__$1 = (function (){var statearr_29241 = state_29209;
(statearr_29241[(8)] = inst_29188__$1);

return statearr_29241;
})();
if(cljs.core.truth_(inst_29189)){
var statearr_29242_31883 = state_29209__$1;
(statearr_29242_31883[(1)] = (5));

} else {
var statearr_29243_31884 = state_29209__$1;
(statearr_29243_31884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var inst_29188 = (state_29209[(8)]);
var inst_29183 = (state_29209[(7)]);
var inst_29192 = (state_29209[(9)]);
var inst_29192__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29183,inst_29188) : f.call(null,inst_29183,inst_29188));
var inst_29193 = cljs.core.reduced_QMARK_(inst_29192__$1);
var state_29209__$1 = (function (){var statearr_29244 = state_29209;
(statearr_29244[(9)] = inst_29192__$1);

return statearr_29244;
})();
if(inst_29193){
var statearr_29245_31890 = state_29209__$1;
(statearr_29245_31890[(1)] = (8));

} else {
var statearr_29246_31891 = state_29209__$1;
(statearr_29246_31891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (3))){
var inst_29207 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29209__$1,inst_29207);
} else {
if((state_val_29210 === (2))){
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29209__$1,(4),ch);
} else {
if((state_val_29210 === (9))){
var inst_29192 = (state_29209[(9)]);
var inst_29183 = inst_29192;
var state_29209__$1 = (function (){var statearr_29250 = state_29209;
(statearr_29250[(7)] = inst_29183);

return statearr_29250;
})();
var statearr_29251_31899 = state_29209__$1;
(statearr_29251_31899[(2)] = null);

(statearr_29251_31899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (5))){
var inst_29183 = (state_29209[(7)]);
var state_29209__$1 = state_29209;
var statearr_29252_31900 = state_29209__$1;
(statearr_29252_31900[(2)] = inst_29183);

(statearr_29252_31900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (10))){
var inst_29203 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29253_31907 = state_29209__$1;
(statearr_29253_31907[(2)] = inst_29203);

(statearr_29253_31907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29192 = (state_29209[(9)]);
var inst_29199 = cljs.core.deref(inst_29192);
var state_29209__$1 = state_29209;
var statearr_29254_31910 = state_29209__$1;
(statearr_29254_31910[(2)] = inst_29199);

(statearr_29254_31910[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28385__auto____0 = (function (){
var statearr_29255 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29255[(0)] = cljs$core$async$reduce_$_state_machine__28385__auto__);

(statearr_29255[(1)] = (1));

return statearr_29255;
});
var cljs$core$async$reduce_$_state_machine__28385__auto____1 = (function (state_29209){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29209);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29260){var ex__28388__auto__ = e29260;
var statearr_29261_31947 = state_29209;
(statearr_29261_31947[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29209[(4)]))){
var statearr_29262_31948 = state_29209;
(statearr_29262_31948[(1)] = cljs.core.first((state_29209[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31949 = state_29209;
state_29209 = G__31949;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28385__auto__ = function(state_29209){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28385__auto____1.call(this,state_29209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28385__auto____0;
cljs$core$async$reduce_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28385__auto____1;
return cljs$core$async$reduce_$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29263 = f__28543__auto__();
(statearr_29263[(6)] = c__28542__auto__);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

return c__28542__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29272){
var state_val_29273 = (state_29272[(1)]);
if((state_val_29273 === (1))){
var inst_29267 = cljs.core.async.reduce(f__$1,init,ch);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29272__$1,(2),inst_29267);
} else {
if((state_val_29273 === (2))){
var inst_29269 = (state_29272[(2)]);
var inst_29270 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29269) : f__$1.call(null,inst_29269));
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29272__$1,inst_29270);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28385__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28385__auto____0 = (function (){
var statearr_29274 = [null,null,null,null,null,null,null];
(statearr_29274[(0)] = cljs$core$async$transduce_$_state_machine__28385__auto__);

(statearr_29274[(1)] = (1));

return statearr_29274;
});
var cljs$core$async$transduce_$_state_machine__28385__auto____1 = (function (state_29272){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29272);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29276){var ex__28388__auto__ = e29276;
var statearr_29277_31950 = state_29272;
(statearr_29277_31950[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29272[(4)]))){
var statearr_29278_31951 = state_29272;
(statearr_29278_31951[(1)] = cljs.core.first((state_29272[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31955 = state_29272;
state_29272 = G__31955;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28385__auto__ = function(state_29272){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28385__auto____1.call(this,state_29272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28385__auto____0;
cljs$core$async$transduce_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28385__auto____1;
return cljs$core$async$transduce_$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29283 = f__28543__auto__();
(statearr_29283[(6)] = c__28542__auto__);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

return c__28542__auto__;
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
var G__29285 = arguments.length;
switch (G__29285) {
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
var c__28542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29310){
var state_val_29311 = (state_29310[(1)]);
if((state_val_29311 === (7))){
var inst_29292 = (state_29310[(2)]);
var state_29310__$1 = state_29310;
var statearr_29315_31961 = state_29310__$1;
(statearr_29315_31961[(2)] = inst_29292);

(statearr_29315_31961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (1))){
var inst_29286 = cljs.core.seq(coll);
var inst_29287 = inst_29286;
var state_29310__$1 = (function (){var statearr_29317 = state_29310;
(statearr_29317[(7)] = inst_29287);

return statearr_29317;
})();
var statearr_29321_31962 = state_29310__$1;
(statearr_29321_31962[(2)] = null);

(statearr_29321_31962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (4))){
var inst_29287 = (state_29310[(7)]);
var inst_29290 = cljs.core.first(inst_29287);
var state_29310__$1 = state_29310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29310__$1,(7),ch,inst_29290);
} else {
if((state_val_29311 === (13))){
var inst_29304 = (state_29310[(2)]);
var state_29310__$1 = state_29310;
var statearr_29322_31963 = state_29310__$1;
(statearr_29322_31963[(2)] = inst_29304);

(statearr_29322_31963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (6))){
var inst_29295 = (state_29310[(2)]);
var state_29310__$1 = state_29310;
if(cljs.core.truth_(inst_29295)){
var statearr_29323_31964 = state_29310__$1;
(statearr_29323_31964[(1)] = (8));

} else {
var statearr_29324_31965 = state_29310__$1;
(statearr_29324_31965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (3))){
var inst_29308 = (state_29310[(2)]);
var state_29310__$1 = state_29310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29310__$1,inst_29308);
} else {
if((state_val_29311 === (12))){
var state_29310__$1 = state_29310;
var statearr_29325_31968 = state_29310__$1;
(statearr_29325_31968[(2)] = null);

(statearr_29325_31968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (2))){
var inst_29287 = (state_29310[(7)]);
var state_29310__$1 = state_29310;
if(cljs.core.truth_(inst_29287)){
var statearr_29329_31969 = state_29310__$1;
(statearr_29329_31969[(1)] = (4));

} else {
var statearr_29360_31970 = state_29310__$1;
(statearr_29360_31970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (11))){
var inst_29301 = cljs.core.async.close_BANG_(ch);
var state_29310__$1 = state_29310;
var statearr_29361_31971 = state_29310__$1;
(statearr_29361_31971[(2)] = inst_29301);

(statearr_29361_31971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (9))){
var state_29310__$1 = state_29310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29365_31972 = state_29310__$1;
(statearr_29365_31972[(1)] = (11));

} else {
var statearr_29369_31973 = state_29310__$1;
(statearr_29369_31973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (5))){
var inst_29287 = (state_29310[(7)]);
var state_29310__$1 = state_29310;
var statearr_29392_31975 = state_29310__$1;
(statearr_29392_31975[(2)] = inst_29287);

(statearr_29392_31975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (10))){
var inst_29306 = (state_29310[(2)]);
var state_29310__$1 = state_29310;
var statearr_29397_31976 = state_29310__$1;
(statearr_29397_31976[(2)] = inst_29306);

(statearr_29397_31976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29311 === (8))){
var inst_29287 = (state_29310[(7)]);
var inst_29297 = cljs.core.next(inst_29287);
var inst_29287__$1 = inst_29297;
var state_29310__$1 = (function (){var statearr_29401 = state_29310;
(statearr_29401[(7)] = inst_29287__$1);

return statearr_29401;
})();
var statearr_29402_31977 = state_29310__$1;
(statearr_29402_31977[(2)] = null);

(statearr_29402_31977[(1)] = (2));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_29310){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29310);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29404){var ex__28388__auto__ = e29404;
var statearr_29405_31978 = state_29310;
(statearr_29405_31978[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29310[(4)]))){
var statearr_29406_31979 = state_29310;
(statearr_29406_31979[(1)] = cljs.core.first((state_29310[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31980 = state_29310;
state_29310 = G__31980;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_29310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_29310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29407 = f__28543__auto__();
(statearr_29407[(6)] = c__28542__auto__);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

return c__28542__auto__;
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
var G__29409 = arguments.length;
switch (G__29409) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31983 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31983(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31985 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31985(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31986 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31986(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31987 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_31987(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29422 = (function (ch,cs,meta29423){
this.ch = ch;
this.cs = cs;
this.meta29423 = meta29423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29424,meta29423__$1){
var self__ = this;
var _29424__$1 = this;
return (new cljs.core.async.t_cljs$core$async29422(self__.ch,self__.cs,meta29423__$1));
}));

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29424){
var self__ = this;
var _29424__$1 = this;
return self__.meta29423;
}));

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29422.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29423","meta29423",-756703662,null)], null);
}));

(cljs.core.async.t_cljs$core$async29422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29422");

(cljs.core.async.t_cljs$core$async29422.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29422.
 */
cljs.core.async.__GT_t_cljs$core$async29422 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29422(ch__$1,cs__$1,meta29423){
return (new cljs.core.async.t_cljs$core$async29422(ch__$1,cs__$1,meta29423));
});

}

return (new cljs.core.async.t_cljs$core$async29422(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28542__auto___32001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_29574){
var state_val_29575 = (state_29574[(1)]);
if((state_val_29575 === (7))){
var inst_29567 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29579_32002 = state_29574__$1;
(statearr_29579_32002[(2)] = inst_29567);

(statearr_29579_32002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (20))){
var inst_29471 = (state_29574[(7)]);
var inst_29483 = cljs.core.first(inst_29471);
var inst_29484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29483,(0),null);
var inst_29485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29483,(1),null);
var state_29574__$1 = (function (){var statearr_29580 = state_29574;
(statearr_29580[(8)] = inst_29484);

return statearr_29580;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29581_32004 = state_29574__$1;
(statearr_29581_32004[(1)] = (22));

} else {
var statearr_29582_32005 = state_29574__$1;
(statearr_29582_32005[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (27))){
var inst_29513 = (state_29574[(9)]);
var inst_29440 = (state_29574[(10)]);
var inst_29520 = (state_29574[(11)]);
var inst_29515 = (state_29574[(12)]);
var inst_29520__$1 = cljs.core._nth(inst_29513,inst_29515);
var inst_29521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29520__$1,inst_29440,done);
var state_29574__$1 = (function (){var statearr_29587 = state_29574;
(statearr_29587[(11)] = inst_29520__$1);

return statearr_29587;
})();
if(cljs.core.truth_(inst_29521)){
var statearr_29588_32007 = state_29574__$1;
(statearr_29588_32007[(1)] = (30));

} else {
var statearr_29589_32008 = state_29574__$1;
(statearr_29589_32008[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (1))){
var state_29574__$1 = state_29574;
var statearr_29590_32009 = state_29574__$1;
(statearr_29590_32009[(2)] = null);

(statearr_29590_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (24))){
var inst_29471 = (state_29574[(7)]);
var inst_29490 = (state_29574[(2)]);
var inst_29491 = cljs.core.next(inst_29471);
var inst_29449 = inst_29491;
var inst_29450 = null;
var inst_29451 = (0);
var inst_29452 = (0);
var state_29574__$1 = (function (){var statearr_29600 = state_29574;
(statearr_29600[(13)] = inst_29449);

(statearr_29600[(14)] = inst_29450);

(statearr_29600[(15)] = inst_29490);

(statearr_29600[(16)] = inst_29451);

(statearr_29600[(17)] = inst_29452);

return statearr_29600;
})();
var statearr_29607_32016 = state_29574__$1;
(statearr_29607_32016[(2)] = null);

(statearr_29607_32016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (39))){
var state_29574__$1 = state_29574;
var statearr_29620_32018 = state_29574__$1;
(statearr_29620_32018[(2)] = null);

(statearr_29620_32018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (4))){
var inst_29440 = (state_29574[(10)]);
var inst_29440__$1 = (state_29574[(2)]);
var inst_29441 = (inst_29440__$1 == null);
var state_29574__$1 = (function (){var statearr_29625 = state_29574;
(statearr_29625[(10)] = inst_29440__$1);

return statearr_29625;
})();
if(cljs.core.truth_(inst_29441)){
var statearr_29626_32020 = state_29574__$1;
(statearr_29626_32020[(1)] = (5));

} else {
var statearr_29627_32021 = state_29574__$1;
(statearr_29627_32021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (15))){
var inst_29449 = (state_29574[(13)]);
var inst_29450 = (state_29574[(14)]);
var inst_29451 = (state_29574[(16)]);
var inst_29452 = (state_29574[(17)]);
var inst_29467 = (state_29574[(2)]);
var inst_29468 = (inst_29452 + (1));
var tmp29611 = inst_29449;
var tmp29612 = inst_29450;
var tmp29613 = inst_29451;
var inst_29449__$1 = tmp29611;
var inst_29450__$1 = tmp29612;
var inst_29451__$1 = tmp29613;
var inst_29452__$1 = inst_29468;
var state_29574__$1 = (function (){var statearr_29628 = state_29574;
(statearr_29628[(13)] = inst_29449__$1);

(statearr_29628[(18)] = inst_29467);

(statearr_29628[(14)] = inst_29450__$1);

(statearr_29628[(16)] = inst_29451__$1);

(statearr_29628[(17)] = inst_29452__$1);

return statearr_29628;
})();
var statearr_29633_32022 = state_29574__$1;
(statearr_29633_32022[(2)] = null);

(statearr_29633_32022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (21))){
var inst_29494 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29637_32023 = state_29574__$1;
(statearr_29637_32023[(2)] = inst_29494);

(statearr_29637_32023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (31))){
var inst_29520 = (state_29574[(11)]);
var inst_29524 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29520);
var state_29574__$1 = state_29574;
var statearr_29639_32024 = state_29574__$1;
(statearr_29639_32024[(2)] = inst_29524);

(statearr_29639_32024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (32))){
var inst_29513 = (state_29574[(9)]);
var inst_29512 = (state_29574[(19)]);
var inst_29515 = (state_29574[(12)]);
var inst_29514 = (state_29574[(20)]);
var inst_29526 = (state_29574[(2)]);
var inst_29527 = (inst_29515 + (1));
var tmp29634 = inst_29513;
var tmp29635 = inst_29512;
var tmp29636 = inst_29514;
var inst_29512__$1 = tmp29635;
var inst_29513__$1 = tmp29634;
var inst_29514__$1 = tmp29636;
var inst_29515__$1 = inst_29527;
var state_29574__$1 = (function (){var statearr_29642 = state_29574;
(statearr_29642[(9)] = inst_29513__$1);

(statearr_29642[(19)] = inst_29512__$1);

(statearr_29642[(21)] = inst_29526);

(statearr_29642[(12)] = inst_29515__$1);

(statearr_29642[(20)] = inst_29514__$1);

return statearr_29642;
})();
var statearr_29645_32025 = state_29574__$1;
(statearr_29645_32025[(2)] = null);

(statearr_29645_32025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (40))){
var inst_29539 = (state_29574[(22)]);
var inst_29543 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29539);
var state_29574__$1 = state_29574;
var statearr_29647_32026 = state_29574__$1;
(statearr_29647_32026[(2)] = inst_29543);

(statearr_29647_32026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (33))){
var inst_29530 = (state_29574[(23)]);
var inst_29532 = cljs.core.chunked_seq_QMARK_(inst_29530);
var state_29574__$1 = state_29574;
if(inst_29532){
var statearr_29654_32027 = state_29574__$1;
(statearr_29654_32027[(1)] = (36));

} else {
var statearr_29655_32029 = state_29574__$1;
(statearr_29655_32029[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (13))){
var inst_29461 = (state_29574[(24)]);
var inst_29464 = cljs.core.async.close_BANG_(inst_29461);
var state_29574__$1 = state_29574;
var statearr_29656_32030 = state_29574__$1;
(statearr_29656_32030[(2)] = inst_29464);

(statearr_29656_32030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (22))){
var inst_29484 = (state_29574[(8)]);
var inst_29487 = cljs.core.async.close_BANG_(inst_29484);
var state_29574__$1 = state_29574;
var statearr_29659_32031 = state_29574__$1;
(statearr_29659_32031[(2)] = inst_29487);

(statearr_29659_32031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (36))){
var inst_29530 = (state_29574[(23)]);
var inst_29534 = cljs.core.chunk_first(inst_29530);
var inst_29535 = cljs.core.chunk_rest(inst_29530);
var inst_29536 = cljs.core.count(inst_29534);
var inst_29512 = inst_29535;
var inst_29513 = inst_29534;
var inst_29514 = inst_29536;
var inst_29515 = (0);
var state_29574__$1 = (function (){var statearr_29662 = state_29574;
(statearr_29662[(9)] = inst_29513);

(statearr_29662[(19)] = inst_29512);

(statearr_29662[(12)] = inst_29515);

(statearr_29662[(20)] = inst_29514);

return statearr_29662;
})();
var statearr_29663_32077 = state_29574__$1;
(statearr_29663_32077[(2)] = null);

(statearr_29663_32077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (41))){
var inst_29530 = (state_29574[(23)]);
var inst_29546 = (state_29574[(2)]);
var inst_29547 = cljs.core.next(inst_29530);
var inst_29512 = inst_29547;
var inst_29513 = null;
var inst_29514 = (0);
var inst_29515 = (0);
var state_29574__$1 = (function (){var statearr_29665 = state_29574;
(statearr_29665[(25)] = inst_29546);

(statearr_29665[(9)] = inst_29513);

(statearr_29665[(19)] = inst_29512);

(statearr_29665[(12)] = inst_29515);

(statearr_29665[(20)] = inst_29514);

return statearr_29665;
})();
var statearr_29667_32078 = state_29574__$1;
(statearr_29667_32078[(2)] = null);

(statearr_29667_32078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (43))){
var state_29574__$1 = state_29574;
var statearr_29675_32079 = state_29574__$1;
(statearr_29675_32079[(2)] = null);

(statearr_29675_32079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (29))){
var inst_29555 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29686_32080 = state_29574__$1;
(statearr_29686_32080[(2)] = inst_29555);

(statearr_29686_32080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (44))){
var inst_29564 = (state_29574[(2)]);
var state_29574__$1 = (function (){var statearr_29696 = state_29574;
(statearr_29696[(26)] = inst_29564);

return statearr_29696;
})();
var statearr_29701_32081 = state_29574__$1;
(statearr_29701_32081[(2)] = null);

(statearr_29701_32081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (6))){
var inst_29504 = (state_29574[(27)]);
var inst_29503 = cljs.core.deref(cs);
var inst_29504__$1 = cljs.core.keys(inst_29503);
var inst_29505 = cljs.core.count(inst_29504__$1);
var inst_29506 = cljs.core.reset_BANG_(dctr,inst_29505);
var inst_29511 = cljs.core.seq(inst_29504__$1);
var inst_29512 = inst_29511;
var inst_29513 = null;
var inst_29514 = (0);
var inst_29515 = (0);
var state_29574__$1 = (function (){var statearr_29709 = state_29574;
(statearr_29709[(27)] = inst_29504__$1);

(statearr_29709[(9)] = inst_29513);

(statearr_29709[(19)] = inst_29512);

(statearr_29709[(28)] = inst_29506);

(statearr_29709[(12)] = inst_29515);

(statearr_29709[(20)] = inst_29514);

return statearr_29709;
})();
var statearr_29711_32082 = state_29574__$1;
(statearr_29711_32082[(2)] = null);

(statearr_29711_32082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (28))){
var inst_29530 = (state_29574[(23)]);
var inst_29512 = (state_29574[(19)]);
var inst_29530__$1 = cljs.core.seq(inst_29512);
var state_29574__$1 = (function (){var statearr_29720 = state_29574;
(statearr_29720[(23)] = inst_29530__$1);

return statearr_29720;
})();
if(inst_29530__$1){
var statearr_29727_32084 = state_29574__$1;
(statearr_29727_32084[(1)] = (33));

} else {
var statearr_29728_32085 = state_29574__$1;
(statearr_29728_32085[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (25))){
var inst_29515 = (state_29574[(12)]);
var inst_29514 = (state_29574[(20)]);
var inst_29517 = (inst_29515 < inst_29514);
var inst_29518 = inst_29517;
var state_29574__$1 = state_29574;
if(cljs.core.truth_(inst_29518)){
var statearr_29744_32087 = state_29574__$1;
(statearr_29744_32087[(1)] = (27));

} else {
var statearr_29747_32091 = state_29574__$1;
(statearr_29747_32091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (34))){
var state_29574__$1 = state_29574;
var statearr_29754_32092 = state_29574__$1;
(statearr_29754_32092[(2)] = null);

(statearr_29754_32092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (17))){
var state_29574__$1 = state_29574;
var statearr_29761_32093 = state_29574__$1;
(statearr_29761_32093[(2)] = null);

(statearr_29761_32093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (3))){
var inst_29569 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29574__$1,inst_29569);
} else {
if((state_val_29575 === (12))){
var inst_29499 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29766_32109 = state_29574__$1;
(statearr_29766_32109[(2)] = inst_29499);

(statearr_29766_32109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (2))){
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29574__$1,(4),ch);
} else {
if((state_val_29575 === (23))){
var state_29574__$1 = state_29574;
var statearr_29775_32110 = state_29574__$1;
(statearr_29775_32110[(2)] = null);

(statearr_29775_32110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (35))){
var inst_29553 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29783_32111 = state_29574__$1;
(statearr_29783_32111[(2)] = inst_29553);

(statearr_29783_32111[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (19))){
var inst_29471 = (state_29574[(7)]);
var inst_29475 = cljs.core.chunk_first(inst_29471);
var inst_29476 = cljs.core.chunk_rest(inst_29471);
var inst_29477 = cljs.core.count(inst_29475);
var inst_29449 = inst_29476;
var inst_29450 = inst_29475;
var inst_29451 = inst_29477;
var inst_29452 = (0);
var state_29574__$1 = (function (){var statearr_29791 = state_29574;
(statearr_29791[(13)] = inst_29449);

(statearr_29791[(14)] = inst_29450);

(statearr_29791[(16)] = inst_29451);

(statearr_29791[(17)] = inst_29452);

return statearr_29791;
})();
var statearr_29792_32112 = state_29574__$1;
(statearr_29792_32112[(2)] = null);

(statearr_29792_32112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (11))){
var inst_29449 = (state_29574[(13)]);
var inst_29471 = (state_29574[(7)]);
var inst_29471__$1 = cljs.core.seq(inst_29449);
var state_29574__$1 = (function (){var statearr_29796 = state_29574;
(statearr_29796[(7)] = inst_29471__$1);

return statearr_29796;
})();
if(inst_29471__$1){
var statearr_29798_32113 = state_29574__$1;
(statearr_29798_32113[(1)] = (16));

} else {
var statearr_29800_32118 = state_29574__$1;
(statearr_29800_32118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (9))){
var inst_29501 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29801_32119 = state_29574__$1;
(statearr_29801_32119[(2)] = inst_29501);

(statearr_29801_32119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (5))){
var inst_29447 = cljs.core.deref(cs);
var inst_29448 = cljs.core.seq(inst_29447);
var inst_29449 = inst_29448;
var inst_29450 = null;
var inst_29451 = (0);
var inst_29452 = (0);
var state_29574__$1 = (function (){var statearr_29815 = state_29574;
(statearr_29815[(13)] = inst_29449);

(statearr_29815[(14)] = inst_29450);

(statearr_29815[(16)] = inst_29451);

(statearr_29815[(17)] = inst_29452);

return statearr_29815;
})();
var statearr_29816_32128 = state_29574__$1;
(statearr_29816_32128[(2)] = null);

(statearr_29816_32128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (14))){
var state_29574__$1 = state_29574;
var statearr_29820_32129 = state_29574__$1;
(statearr_29820_32129[(2)] = null);

(statearr_29820_32129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (45))){
var inst_29561 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29821_32130 = state_29574__$1;
(statearr_29821_32130[(2)] = inst_29561);

(statearr_29821_32130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (26))){
var inst_29504 = (state_29574[(27)]);
var inst_29557 = (state_29574[(2)]);
var inst_29558 = cljs.core.seq(inst_29504);
var state_29574__$1 = (function (){var statearr_29824 = state_29574;
(statearr_29824[(29)] = inst_29557);

return statearr_29824;
})();
if(inst_29558){
var statearr_29825_32131 = state_29574__$1;
(statearr_29825_32131[(1)] = (42));

} else {
var statearr_29827_32132 = state_29574__$1;
(statearr_29827_32132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (16))){
var inst_29471 = (state_29574[(7)]);
var inst_29473 = cljs.core.chunked_seq_QMARK_(inst_29471);
var state_29574__$1 = state_29574;
if(inst_29473){
var statearr_29831_32133 = state_29574__$1;
(statearr_29831_32133[(1)] = (19));

} else {
var statearr_29832_32134 = state_29574__$1;
(statearr_29832_32134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (38))){
var inst_29550 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29837_32135 = state_29574__$1;
(statearr_29837_32135[(2)] = inst_29550);

(statearr_29837_32135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (30))){
var state_29574__$1 = state_29574;
var statearr_29842_32137 = state_29574__$1;
(statearr_29842_32137[(2)] = null);

(statearr_29842_32137[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (10))){
var inst_29450 = (state_29574[(14)]);
var inst_29452 = (state_29574[(17)]);
var inst_29460 = cljs.core._nth(inst_29450,inst_29452);
var inst_29461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29460,(0),null);
var inst_29462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29460,(1),null);
var state_29574__$1 = (function (){var statearr_29852 = state_29574;
(statearr_29852[(24)] = inst_29461);

return statearr_29852;
})();
if(cljs.core.truth_(inst_29462)){
var statearr_29853_32138 = state_29574__$1;
(statearr_29853_32138[(1)] = (13));

} else {
var statearr_29855_32139 = state_29574__$1;
(statearr_29855_32139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (18))){
var inst_29497 = (state_29574[(2)]);
var state_29574__$1 = state_29574;
var statearr_29862_32140 = state_29574__$1;
(statearr_29862_32140[(2)] = inst_29497);

(statearr_29862_32140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (42))){
var state_29574__$1 = state_29574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29574__$1,(45),dchan);
} else {
if((state_val_29575 === (37))){
var inst_29530 = (state_29574[(23)]);
var inst_29539 = (state_29574[(22)]);
var inst_29440 = (state_29574[(10)]);
var inst_29539__$1 = cljs.core.first(inst_29530);
var inst_29540 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29539__$1,inst_29440,done);
var state_29574__$1 = (function (){var statearr_29867 = state_29574;
(statearr_29867[(22)] = inst_29539__$1);

return statearr_29867;
})();
if(cljs.core.truth_(inst_29540)){
var statearr_29869_32141 = state_29574__$1;
(statearr_29869_32141[(1)] = (39));

} else {
var statearr_29871_32142 = state_29574__$1;
(statearr_29871_32142[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29575 === (8))){
var inst_29451 = (state_29574[(16)]);
var inst_29452 = (state_29574[(17)]);
var inst_29454 = (inst_29452 < inst_29451);
var inst_29455 = inst_29454;
var state_29574__$1 = state_29574;
if(cljs.core.truth_(inst_29455)){
var statearr_29872_32143 = state_29574__$1;
(statearr_29872_32143[(1)] = (10));

} else {
var statearr_29873_32147 = state_29574__$1;
(statearr_29873_32147[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28385__auto__ = null;
var cljs$core$async$mult_$_state_machine__28385__auto____0 = (function (){
var statearr_29874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29874[(0)] = cljs$core$async$mult_$_state_machine__28385__auto__);

(statearr_29874[(1)] = (1));

return statearr_29874;
});
var cljs$core$async$mult_$_state_machine__28385__auto____1 = (function (state_29574){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_29574);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e29875){var ex__28388__auto__ = e29875;
var statearr_29876_32148 = state_29574;
(statearr_29876_32148[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_29574[(4)]))){
var statearr_29880_32149 = state_29574;
(statearr_29880_32149[(1)] = cljs.core.first((state_29574[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32150 = state_29574;
state_29574 = G__32150;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28385__auto__ = function(state_29574){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28385__auto____1.call(this,state_29574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28385__auto____0;
cljs$core$async$mult_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28385__auto____1;
return cljs$core$async$mult_$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_29882 = f__28543__auto__();
(statearr_29882[(6)] = c__28542__auto___32001);

return statearr_29882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var G__29885 = arguments.length;
switch (G__29885) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32192 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_32192(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32193 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_32193(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32195 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32195(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32198 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_32198(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32218 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32218(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32219 = arguments.length;
var i__4737__auto___32220 = (0);
while(true){
if((i__4737__auto___32220 < len__4736__auto___32219)){
args__4742__auto__.push((arguments[i__4737__auto___32220]));

var G__32221 = (i__4737__auto___32220 + (1));
i__4737__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29942){
var map__29943 = p__29942;
var map__29943__$1 = (((((!((map__29943 == null))))?(((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29943):map__29943);
var opts = map__29943__$1;
var statearr_29949_32226 = state;
(statearr_29949_32226[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29960_32227 = state;
(statearr_29960_32227[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29961_32228 = state;
(statearr_29961_32228[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29932){
var G__29933 = cljs.core.first(seq29932);
var seq29932__$1 = cljs.core.next(seq29932);
var G__29934 = cljs.core.first(seq29932__$1);
var seq29932__$2 = cljs.core.next(seq29932__$1);
var G__29935 = cljs.core.first(seq29932__$2);
var seq29932__$3 = cljs.core.next(seq29932__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29933,G__29934,G__29935,seq29932__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29973){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29973__$1));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
}));

(cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972");

(cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29972.
 */
cljs.core.async.__GT_t_cljs$core$async29972 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29972(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29973));
});

}

return (new cljs.core.async.t_cljs$core$async29972(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28542__auto___32248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30104){
var state_val_30105 = (state_30104[(1)]);
if((state_val_30105 === (7))){
var inst_30007 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30110_32249 = state_30104__$1;
(statearr_30110_32249[(2)] = inst_30007);

(statearr_30110_32249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (20))){
var inst_30019 = (state_30104[(7)]);
var state_30104__$1 = state_30104;
var statearr_30111_32250 = state_30104__$1;
(statearr_30111_32250[(2)] = inst_30019);

(statearr_30111_32250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (27))){
var state_30104__$1 = state_30104;
var statearr_30112_32251 = state_30104__$1;
(statearr_30112_32251[(2)] = null);

(statearr_30112_32251[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (1))){
var inst_29994 = (state_30104[(8)]);
var inst_29994__$1 = calc_state();
var inst_29996 = (inst_29994__$1 == null);
var inst_29997 = cljs.core.not(inst_29996);
var state_30104__$1 = (function (){var statearr_30117 = state_30104;
(statearr_30117[(8)] = inst_29994__$1);

return statearr_30117;
})();
if(inst_29997){
var statearr_30119_32252 = state_30104__$1;
(statearr_30119_32252[(1)] = (2));

} else {
var statearr_30120_32253 = state_30104__$1;
(statearr_30120_32253[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (24))){
var inst_30053 = (state_30104[(9)]);
var inst_30068 = (state_30104[(10)]);
var inst_30043 = (state_30104[(11)]);
var inst_30068__$1 = (inst_30043.cljs$core$IFn$_invoke$arity$1 ? inst_30043.cljs$core$IFn$_invoke$arity$1(inst_30053) : inst_30043.call(null,inst_30053));
var state_30104__$1 = (function (){var statearr_30121 = state_30104;
(statearr_30121[(10)] = inst_30068__$1);

return statearr_30121;
})();
if(cljs.core.truth_(inst_30068__$1)){
var statearr_30122_32256 = state_30104__$1;
(statearr_30122_32256[(1)] = (29));

} else {
var statearr_30123_32258 = state_30104__$1;
(statearr_30123_32258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (4))){
var inst_30010 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30010)){
var statearr_30124_32259 = state_30104__$1;
(statearr_30124_32259[(1)] = (8));

} else {
var statearr_30125_32260 = state_30104__$1;
(statearr_30125_32260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (15))){
var inst_30037 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30037)){
var statearr_30126_32277 = state_30104__$1;
(statearr_30126_32277[(1)] = (19));

} else {
var statearr_30127_32278 = state_30104__$1;
(statearr_30127_32278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (21))){
var inst_30042 = (state_30104[(12)]);
var inst_30042__$1 = (state_30104[(2)]);
var inst_30043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30042__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30042__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30042__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30104__$1 = (function (){var statearr_30128 = state_30104;
(statearr_30128[(13)] = inst_30044);

(statearr_30128[(11)] = inst_30043);

(statearr_30128[(12)] = inst_30042__$1);

return statearr_30128;
})();
return cljs.core.async.ioc_alts_BANG_(state_30104__$1,(22),inst_30045);
} else {
if((state_val_30105 === (31))){
var inst_30081 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30081)){
var statearr_30129_32285 = state_30104__$1;
(statearr_30129_32285[(1)] = (32));

} else {
var statearr_30130_32286 = state_30104__$1;
(statearr_30130_32286[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (32))){
var inst_30052 = (state_30104[(14)]);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30104__$1,(35),out,inst_30052);
} else {
if((state_val_30105 === (33))){
var inst_30042 = (state_30104[(12)]);
var inst_30019 = inst_30042;
var state_30104__$1 = (function (){var statearr_30131 = state_30104;
(statearr_30131[(7)] = inst_30019);

return statearr_30131;
})();
var statearr_30132_32290 = state_30104__$1;
(statearr_30132_32290[(2)] = null);

(statearr_30132_32290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (13))){
var inst_30019 = (state_30104[(7)]);
var inst_30026 = inst_30019.cljs$lang$protocol_mask$partition0$;
var inst_30027 = (inst_30026 & (64));
var inst_30028 = inst_30019.cljs$core$ISeq$;
var inst_30029 = (cljs.core.PROTOCOL_SENTINEL === inst_30028);
var inst_30030 = ((inst_30027) || (inst_30029));
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30030)){
var statearr_30133_32291 = state_30104__$1;
(statearr_30133_32291[(1)] = (16));

} else {
var statearr_30134_32292 = state_30104__$1;
(statearr_30134_32292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (22))){
var inst_30053 = (state_30104[(9)]);
var inst_30052 = (state_30104[(14)]);
var inst_30051 = (state_30104[(2)]);
var inst_30052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30051,(0),null);
var inst_30053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30051,(1),null);
var inst_30054 = (inst_30052__$1 == null);
var inst_30056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30053__$1,change);
var inst_30057 = ((inst_30054) || (inst_30056));
var state_30104__$1 = (function (){var statearr_30137 = state_30104;
(statearr_30137[(9)] = inst_30053__$1);

(statearr_30137[(14)] = inst_30052__$1);

return statearr_30137;
})();
if(cljs.core.truth_(inst_30057)){
var statearr_30138_32293 = state_30104__$1;
(statearr_30138_32293[(1)] = (23));

} else {
var statearr_30139_32294 = state_30104__$1;
(statearr_30139_32294[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (36))){
var inst_30042 = (state_30104[(12)]);
var inst_30019 = inst_30042;
var state_30104__$1 = (function (){var statearr_30142 = state_30104;
(statearr_30142[(7)] = inst_30019);

return statearr_30142;
})();
var statearr_30143_32296 = state_30104__$1;
(statearr_30143_32296[(2)] = null);

(statearr_30143_32296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (29))){
var inst_30068 = (state_30104[(10)]);
var state_30104__$1 = state_30104;
var statearr_30144_32297 = state_30104__$1;
(statearr_30144_32297[(2)] = inst_30068);

(statearr_30144_32297[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (6))){
var state_30104__$1 = state_30104;
var statearr_30149_32298 = state_30104__$1;
(statearr_30149_32298[(2)] = false);

(statearr_30149_32298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (28))){
var inst_30064 = (state_30104[(2)]);
var inst_30065 = calc_state();
var inst_30019 = inst_30065;
var state_30104__$1 = (function (){var statearr_30150 = state_30104;
(statearr_30150[(15)] = inst_30064);

(statearr_30150[(7)] = inst_30019);

return statearr_30150;
})();
var statearr_30152_32306 = state_30104__$1;
(statearr_30152_32306[(2)] = null);

(statearr_30152_32306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (25))){
var inst_30096 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30153_32307 = state_30104__$1;
(statearr_30153_32307[(2)] = inst_30096);

(statearr_30153_32307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (34))){
var inst_30094 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30156_32308 = state_30104__$1;
(statearr_30156_32308[(2)] = inst_30094);

(statearr_30156_32308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (17))){
var state_30104__$1 = state_30104;
var statearr_30158_32309 = state_30104__$1;
(statearr_30158_32309[(2)] = false);

(statearr_30158_32309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (3))){
var state_30104__$1 = state_30104;
var statearr_30161_32310 = state_30104__$1;
(statearr_30161_32310[(2)] = false);

(statearr_30161_32310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (12))){
var inst_30098 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30104__$1,inst_30098);
} else {
if((state_val_30105 === (2))){
var inst_29994 = (state_30104[(8)]);
var inst_29999 = inst_29994.cljs$lang$protocol_mask$partition0$;
var inst_30000 = (inst_29999 & (64));
var inst_30001 = inst_29994.cljs$core$ISeq$;
var inst_30002 = (cljs.core.PROTOCOL_SENTINEL === inst_30001);
var inst_30003 = ((inst_30000) || (inst_30002));
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30003)){
var statearr_30164_32312 = state_30104__$1;
(statearr_30164_32312[(1)] = (5));

} else {
var statearr_30165_32313 = state_30104__$1;
(statearr_30165_32313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (23))){
var inst_30052 = (state_30104[(14)]);
var inst_30059 = (inst_30052 == null);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30059)){
var statearr_30166_32315 = state_30104__$1;
(statearr_30166_32315[(1)] = (26));

} else {
var statearr_30167_32316 = state_30104__$1;
(statearr_30167_32316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (35))){
var inst_30084 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
if(cljs.core.truth_(inst_30084)){
var statearr_30169_32317 = state_30104__$1;
(statearr_30169_32317[(1)] = (36));

} else {
var statearr_30170_32318 = state_30104__$1;
(statearr_30170_32318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (19))){
var inst_30019 = (state_30104[(7)]);
var inst_30039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30019);
var state_30104__$1 = state_30104;
var statearr_30171_32320 = state_30104__$1;
(statearr_30171_32320[(2)] = inst_30039);

(statearr_30171_32320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (11))){
var inst_30019 = (state_30104[(7)]);
var inst_30023 = (inst_30019 == null);
var inst_30024 = cljs.core.not(inst_30023);
var state_30104__$1 = state_30104;
if(inst_30024){
var statearr_30172_32322 = state_30104__$1;
(statearr_30172_32322[(1)] = (13));

} else {
var statearr_30173_32323 = state_30104__$1;
(statearr_30173_32323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (9))){
var inst_29994 = (state_30104[(8)]);
var state_30104__$1 = state_30104;
var statearr_30174_32325 = state_30104__$1;
(statearr_30174_32325[(2)] = inst_29994);

(statearr_30174_32325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (5))){
var state_30104__$1 = state_30104;
var statearr_30175_32326 = state_30104__$1;
(statearr_30175_32326[(2)] = true);

(statearr_30175_32326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (14))){
var state_30104__$1 = state_30104;
var statearr_30177_32327 = state_30104__$1;
(statearr_30177_32327[(2)] = false);

(statearr_30177_32327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (26))){
var inst_30053 = (state_30104[(9)]);
var inst_30061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30053);
var state_30104__$1 = state_30104;
var statearr_30179_32372 = state_30104__$1;
(statearr_30179_32372[(2)] = inst_30061);

(statearr_30179_32372[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (16))){
var state_30104__$1 = state_30104;
var statearr_30180_32373 = state_30104__$1;
(statearr_30180_32373[(2)] = true);

(statearr_30180_32373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (38))){
var inst_30090 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30183_32374 = state_30104__$1;
(statearr_30183_32374[(2)] = inst_30090);

(statearr_30183_32374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (30))){
var inst_30044 = (state_30104[(13)]);
var inst_30053 = (state_30104[(9)]);
var inst_30043 = (state_30104[(11)]);
var inst_30076 = cljs.core.empty_QMARK_(inst_30043);
var inst_30077 = (inst_30044.cljs$core$IFn$_invoke$arity$1 ? inst_30044.cljs$core$IFn$_invoke$arity$1(inst_30053) : inst_30044.call(null,inst_30053));
var inst_30078 = cljs.core.not(inst_30077);
var inst_30079 = ((inst_30076) && (inst_30078));
var state_30104__$1 = state_30104;
var statearr_30186_32395 = state_30104__$1;
(statearr_30186_32395[(2)] = inst_30079);

(statearr_30186_32395[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (10))){
var inst_29994 = (state_30104[(8)]);
var inst_30015 = (state_30104[(2)]);
var inst_30016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30015,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30019 = inst_29994;
var state_30104__$1 = (function (){var statearr_30190 = state_30104;
(statearr_30190[(16)] = inst_30018);

(statearr_30190[(17)] = inst_30016);

(statearr_30190[(18)] = inst_30017);

(statearr_30190[(7)] = inst_30019);

return statearr_30190;
})();
var statearr_30191_32399 = state_30104__$1;
(statearr_30191_32399[(2)] = null);

(statearr_30191_32399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (18))){
var inst_30034 = (state_30104[(2)]);
var state_30104__$1 = state_30104;
var statearr_30198_32401 = state_30104__$1;
(statearr_30198_32401[(2)] = inst_30034);

(statearr_30198_32401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (37))){
var state_30104__$1 = state_30104;
var statearr_30203_32402 = state_30104__$1;
(statearr_30203_32402[(2)] = null);

(statearr_30203_32402[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30105 === (8))){
var inst_29994 = (state_30104[(8)]);
var inst_30012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29994);
var state_30104__$1 = state_30104;
var statearr_30204_32403 = state_30104__$1;
(statearr_30204_32403[(2)] = inst_30012);

(statearr_30204_32403[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28385__auto__ = null;
var cljs$core$async$mix_$_state_machine__28385__auto____0 = (function (){
var statearr_30205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30205[(0)] = cljs$core$async$mix_$_state_machine__28385__auto__);

(statearr_30205[(1)] = (1));

return statearr_30205;
});
var cljs$core$async$mix_$_state_machine__28385__auto____1 = (function (state_30104){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30104);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30206){var ex__28388__auto__ = e30206;
var statearr_30207_32404 = state_30104;
(statearr_30207_32404[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30104[(4)]))){
var statearr_30208_32405 = state_30104;
(statearr_30208_32405[(1)] = cljs.core.first((state_30104[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32406 = state_30104;
state_30104 = G__32406;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28385__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28385__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28385__auto____0;
cljs$core$async$mix_$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28385__auto____1;
return cljs$core$async$mix_$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30216 = f__28543__auto__();
(statearr_30216[(6)] = c__28542__auto___32248);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32461 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32461(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32472 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32472(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32479 = (function() {
var G__32480 = null;
var G__32480__1 = (function (p){
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
var G__32480__2 = (function (p,v){
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
G__32480 = function(p,v){
switch(arguments.length){
case 1:
return G__32480__1.call(this,p);
case 2:
return G__32480__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32480.cljs$core$IFn$_invoke$arity$1 = G__32480__1;
G__32480.cljs$core$IFn$_invoke$arity$2 = G__32480__2;
return G__32480;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30248 = arguments.length;
switch (G__30248) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32479(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32479(p,v);
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
var G__30258 = arguments.length;
switch (G__30258) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30256_SHARP_){
if(cljs.core.truth_((p1__30256_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30256_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30256_SHARP_.call(null,topic)))){
return p1__30256_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30256_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30274 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30275){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30275 = meta30275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30276,meta30275__$1){
var self__ = this;
var _30276__$1 = this;
return (new cljs.core.async.t_cljs$core$async30274(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30275__$1));
}));

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30276){
var self__ = this;
var _30276__$1 = this;
return self__.meta30275;
}));

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30275","meta30275",257437918,null)], null);
}));

(cljs.core.async.t_cljs$core$async30274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30274");

(cljs.core.async.t_cljs$core$async30274.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30274.
 */
cljs.core.async.__GT_t_cljs$core$async30274 = (function cljs$core$async$__GT_t_cljs$core$async30274(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30275){
return (new cljs.core.async.t_cljs$core$async30274(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30275));
});

}

return (new cljs.core.async.t_cljs$core$async30274(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28542__auto___32562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30382){
var state_val_30383 = (state_30382[(1)]);
if((state_val_30383 === (7))){
var inst_30377 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30388_32564 = state_30382__$1;
(statearr_30388_32564[(2)] = inst_30377);

(statearr_30388_32564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (20))){
var state_30382__$1 = state_30382;
var statearr_30389_32568 = state_30382__$1;
(statearr_30389_32568[(2)] = null);

(statearr_30389_32568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (1))){
var state_30382__$1 = state_30382;
var statearr_30390_32570 = state_30382__$1;
(statearr_30390_32570[(2)] = null);

(statearr_30390_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (24))){
var inst_30358 = (state_30382[(7)]);
var inst_30369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30358);
var state_30382__$1 = state_30382;
var statearr_30391_32572 = state_30382__$1;
(statearr_30391_32572[(2)] = inst_30369);

(statearr_30391_32572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (4))){
var inst_30305 = (state_30382[(8)]);
var inst_30305__$1 = (state_30382[(2)]);
var inst_30307 = (inst_30305__$1 == null);
var state_30382__$1 = (function (){var statearr_30392 = state_30382;
(statearr_30392[(8)] = inst_30305__$1);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30393_32577 = state_30382__$1;
(statearr_30393_32577[(1)] = (5));

} else {
var statearr_30395_32579 = state_30382__$1;
(statearr_30395_32579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (15))){
var inst_30352 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30397_32582 = state_30382__$1;
(statearr_30397_32582[(2)] = inst_30352);

(statearr_30397_32582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (21))){
var inst_30374 = (state_30382[(2)]);
var state_30382__$1 = (function (){var statearr_30398 = state_30382;
(statearr_30398[(9)] = inst_30374);

return statearr_30398;
})();
var statearr_30400_32587 = state_30382__$1;
(statearr_30400_32587[(2)] = null);

(statearr_30400_32587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (13))){
var inst_30332 = (state_30382[(10)]);
var inst_30336 = cljs.core.chunked_seq_QMARK_(inst_30332);
var state_30382__$1 = state_30382;
if(inst_30336){
var statearr_30405_32592 = state_30382__$1;
(statearr_30405_32592[(1)] = (16));

} else {
var statearr_30407_32594 = state_30382__$1;
(statearr_30407_32594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (22))){
var inst_30366 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
if(cljs.core.truth_(inst_30366)){
var statearr_30423_32595 = state_30382__$1;
(statearr_30423_32595[(1)] = (23));

} else {
var statearr_30425_32597 = state_30382__$1;
(statearr_30425_32597[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (6))){
var inst_30305 = (state_30382[(8)]);
var inst_30358 = (state_30382[(7)]);
var inst_30360 = (state_30382[(11)]);
var inst_30358__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30305) : topic_fn.call(null,inst_30305));
var inst_30359 = cljs.core.deref(mults);
var inst_30360__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30359,inst_30358__$1);
var state_30382__$1 = (function (){var statearr_30430 = state_30382;
(statearr_30430[(7)] = inst_30358__$1);

(statearr_30430[(11)] = inst_30360__$1);

return statearr_30430;
})();
if(cljs.core.truth_(inst_30360__$1)){
var statearr_30431_32604 = state_30382__$1;
(statearr_30431_32604[(1)] = (19));

} else {
var statearr_30432_32609 = state_30382__$1;
(statearr_30432_32609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (25))){
var inst_30371 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30433_32613 = state_30382__$1;
(statearr_30433_32613[(2)] = inst_30371);

(statearr_30433_32613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (17))){
var inst_30332 = (state_30382[(10)]);
var inst_30343 = cljs.core.first(inst_30332);
var inst_30344 = cljs.core.async.muxch_STAR_(inst_30343);
var inst_30345 = cljs.core.async.close_BANG_(inst_30344);
var inst_30346 = cljs.core.next(inst_30332);
var inst_30316 = inst_30346;
var inst_30317 = null;
var inst_30318 = (0);
var inst_30319 = (0);
var state_30382__$1 = (function (){var statearr_30436 = state_30382;
(statearr_30436[(12)] = inst_30345);

(statearr_30436[(13)] = inst_30317);

(statearr_30436[(14)] = inst_30316);

(statearr_30436[(15)] = inst_30318);

(statearr_30436[(16)] = inst_30319);

return statearr_30436;
})();
var statearr_30437_32619 = state_30382__$1;
(statearr_30437_32619[(2)] = null);

(statearr_30437_32619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (3))){
var inst_30379 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30382__$1,inst_30379);
} else {
if((state_val_30383 === (12))){
var inst_30354 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30443_32632 = state_30382__$1;
(statearr_30443_32632[(2)] = inst_30354);

(statearr_30443_32632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (2))){
var state_30382__$1 = state_30382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30382__$1,(4),ch);
} else {
if((state_val_30383 === (23))){
var state_30382__$1 = state_30382;
var statearr_30444_32634 = state_30382__$1;
(statearr_30444_32634[(2)] = null);

(statearr_30444_32634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (19))){
var inst_30305 = (state_30382[(8)]);
var inst_30360 = (state_30382[(11)]);
var inst_30364 = cljs.core.async.muxch_STAR_(inst_30360);
var state_30382__$1 = state_30382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30382__$1,(22),inst_30364,inst_30305);
} else {
if((state_val_30383 === (11))){
var inst_30316 = (state_30382[(14)]);
var inst_30332 = (state_30382[(10)]);
var inst_30332__$1 = cljs.core.seq(inst_30316);
var state_30382__$1 = (function (){var statearr_30445 = state_30382;
(statearr_30445[(10)] = inst_30332__$1);

return statearr_30445;
})();
if(inst_30332__$1){
var statearr_30446_32641 = state_30382__$1;
(statearr_30446_32641[(1)] = (13));

} else {
var statearr_30447_32642 = state_30382__$1;
(statearr_30447_32642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (9))){
var inst_30356 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30448_32644 = state_30382__$1;
(statearr_30448_32644[(2)] = inst_30356);

(statearr_30448_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (5))){
var inst_30313 = cljs.core.deref(mults);
var inst_30314 = cljs.core.vals(inst_30313);
var inst_30315 = cljs.core.seq(inst_30314);
var inst_30316 = inst_30315;
var inst_30317 = null;
var inst_30318 = (0);
var inst_30319 = (0);
var state_30382__$1 = (function (){var statearr_30449 = state_30382;
(statearr_30449[(13)] = inst_30317);

(statearr_30449[(14)] = inst_30316);

(statearr_30449[(15)] = inst_30318);

(statearr_30449[(16)] = inst_30319);

return statearr_30449;
})();
var statearr_30452_32652 = state_30382__$1;
(statearr_30452_32652[(2)] = null);

(statearr_30452_32652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (14))){
var state_30382__$1 = state_30382;
var statearr_30458_32653 = state_30382__$1;
(statearr_30458_32653[(2)] = null);

(statearr_30458_32653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (16))){
var inst_30332 = (state_30382[(10)]);
var inst_30338 = cljs.core.chunk_first(inst_30332);
var inst_30339 = cljs.core.chunk_rest(inst_30332);
var inst_30340 = cljs.core.count(inst_30338);
var inst_30316 = inst_30339;
var inst_30317 = inst_30338;
var inst_30318 = inst_30340;
var inst_30319 = (0);
var state_30382__$1 = (function (){var statearr_30461 = state_30382;
(statearr_30461[(13)] = inst_30317);

(statearr_30461[(14)] = inst_30316);

(statearr_30461[(15)] = inst_30318);

(statearr_30461[(16)] = inst_30319);

return statearr_30461;
})();
var statearr_30462_32696 = state_30382__$1;
(statearr_30462_32696[(2)] = null);

(statearr_30462_32696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (10))){
var inst_30317 = (state_30382[(13)]);
var inst_30316 = (state_30382[(14)]);
var inst_30318 = (state_30382[(15)]);
var inst_30319 = (state_30382[(16)]);
var inst_30324 = cljs.core._nth(inst_30317,inst_30319);
var inst_30326 = cljs.core.async.muxch_STAR_(inst_30324);
var inst_30327 = cljs.core.async.close_BANG_(inst_30326);
var inst_30329 = (inst_30319 + (1));
var tmp30455 = inst_30317;
var tmp30456 = inst_30316;
var tmp30457 = inst_30318;
var inst_30316__$1 = tmp30456;
var inst_30317__$1 = tmp30455;
var inst_30318__$1 = tmp30457;
var inst_30319__$1 = inst_30329;
var state_30382__$1 = (function (){var statearr_30463 = state_30382;
(statearr_30463[(17)] = inst_30327);

(statearr_30463[(13)] = inst_30317__$1);

(statearr_30463[(14)] = inst_30316__$1);

(statearr_30463[(15)] = inst_30318__$1);

(statearr_30463[(16)] = inst_30319__$1);

return statearr_30463;
})();
var statearr_30464_32701 = state_30382__$1;
(statearr_30464_32701[(2)] = null);

(statearr_30464_32701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (18))){
var inst_30349 = (state_30382[(2)]);
var state_30382__$1 = state_30382;
var statearr_30465_32703 = state_30382__$1;
(statearr_30465_32703[(2)] = inst_30349);

(statearr_30465_32703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30383 === (8))){
var inst_30318 = (state_30382[(15)]);
var inst_30319 = (state_30382[(16)]);
var inst_30321 = (inst_30319 < inst_30318);
var inst_30322 = inst_30321;
var state_30382__$1 = state_30382;
if(cljs.core.truth_(inst_30322)){
var statearr_30466_32709 = state_30382__$1;
(statearr_30466_32709[(1)] = (10));

} else {
var statearr_30467_32711 = state_30382__$1;
(statearr_30467_32711[(1)] = (11));

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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_30473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30473[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_30473[(1)] = (1));

return statearr_30473;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_30382){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30382);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30476){var ex__28388__auto__ = e30476;
var statearr_30477_32713 = state_30382;
(statearr_30477_32713[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30382[(4)]))){
var statearr_30478_32714 = state_30382;
(statearr_30478_32714[(1)] = cljs.core.first((state_30382[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_30382;
state_30382 = G__32719;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_30382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_30382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30479 = f__28543__auto__();
(statearr_30479[(6)] = c__28542__auto___32562);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var G__30491 = arguments.length;
switch (G__30491) {
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
var G__30497 = arguments.length;
switch (G__30497) {
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
var G__30501 = arguments.length;
switch (G__30501) {
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
var c__28542__auto___32763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30560){
var state_val_30562 = (state_30560[(1)]);
if((state_val_30562 === (7))){
var state_30560__$1 = state_30560;
var statearr_30564_32768 = state_30560__$1;
(statearr_30564_32768[(2)] = null);

(statearr_30564_32768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (1))){
var state_30560__$1 = state_30560;
var statearr_30565_32775 = state_30560__$1;
(statearr_30565_32775[(2)] = null);

(statearr_30565_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (4))){
var inst_30511 = (state_30560[(7)]);
var inst_30512 = (state_30560[(8)]);
var inst_30514 = (inst_30512 < inst_30511);
var state_30560__$1 = state_30560;
if(cljs.core.truth_(inst_30514)){
var statearr_30570_32784 = state_30560__$1;
(statearr_30570_32784[(1)] = (6));

} else {
var statearr_30571_32786 = state_30560__$1;
(statearr_30571_32786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (15))){
var inst_30544 = (state_30560[(9)]);
var inst_30551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30544);
var state_30560__$1 = state_30560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30560__$1,(17),out,inst_30551);
} else {
if((state_val_30562 === (13))){
var inst_30544 = (state_30560[(9)]);
var inst_30544__$1 = (state_30560[(2)]);
var inst_30545 = cljs.core.some(cljs.core.nil_QMARK_,inst_30544__$1);
var state_30560__$1 = (function (){var statearr_30579 = state_30560;
(statearr_30579[(9)] = inst_30544__$1);

return statearr_30579;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30580_32800 = state_30560__$1;
(statearr_30580_32800[(1)] = (14));

} else {
var statearr_30581_32805 = state_30560__$1;
(statearr_30581_32805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (6))){
var state_30560__$1 = state_30560;
var statearr_30585_32812 = state_30560__$1;
(statearr_30585_32812[(2)] = null);

(statearr_30585_32812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (17))){
var inst_30553 = (state_30560[(2)]);
var state_30560__$1 = (function (){var statearr_30608 = state_30560;
(statearr_30608[(10)] = inst_30553);

return statearr_30608;
})();
var statearr_30609_32819 = state_30560__$1;
(statearr_30609_32819[(2)] = null);

(statearr_30609_32819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (3))){
var inst_30558 = (state_30560[(2)]);
var state_30560__$1 = state_30560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30560__$1,inst_30558);
} else {
if((state_val_30562 === (12))){
var _ = (function (){var statearr_30610 = state_30560;
(statearr_30610[(4)] = cljs.core.rest((state_30560[(4)])));

return statearr_30610;
})();
var state_30560__$1 = state_30560;
var ex30590 = (state_30560__$1[(2)]);
var statearr_30611_32833 = state_30560__$1;
(statearr_30611_32833[(5)] = ex30590);


if((ex30590 instanceof Object)){
var statearr_30612_32834 = state_30560__$1;
(statearr_30612_32834[(1)] = (11));

(statearr_30612_32834[(5)] = null);

} else {
throw ex30590;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (2))){
var inst_30510 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30511 = cnt;
var inst_30512 = (0);
var state_30560__$1 = (function (){var statearr_30617 = state_30560;
(statearr_30617[(7)] = inst_30511);

(statearr_30617[(8)] = inst_30512);

(statearr_30617[(11)] = inst_30510);

return statearr_30617;
})();
var statearr_30618_32891 = state_30560__$1;
(statearr_30618_32891[(2)] = null);

(statearr_30618_32891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (11))){
var inst_30516 = (state_30560[(2)]);
var inst_30517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30560__$1 = (function (){var statearr_30619 = state_30560;
(statearr_30619[(12)] = inst_30516);

return statearr_30619;
})();
var statearr_30620_32894 = state_30560__$1;
(statearr_30620_32894[(2)] = inst_30517);

(statearr_30620_32894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (9))){
var inst_30512 = (state_30560[(8)]);
var _ = (function (){var statearr_30622 = state_30560;
(statearr_30622[(4)] = cljs.core.cons((12),(state_30560[(4)])));

return statearr_30622;
})();
var inst_30530 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30512) : chs__$1.call(null,inst_30512));
var inst_30531 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30512) : done.call(null,inst_30512));
var inst_30532 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30530,inst_30531);
var ___$1 = (function (){var statearr_30623 = state_30560;
(statearr_30623[(4)] = cljs.core.rest((state_30560[(4)])));

return statearr_30623;
})();
var state_30560__$1 = state_30560;
var statearr_30624_32899 = state_30560__$1;
(statearr_30624_32899[(2)] = inst_30532);

(statearr_30624_32899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (5))){
var inst_30542 = (state_30560[(2)]);
var state_30560__$1 = (function (){var statearr_30625 = state_30560;
(statearr_30625[(13)] = inst_30542);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30560__$1,(13),dchan);
} else {
if((state_val_30562 === (14))){
var inst_30548 = cljs.core.async.close_BANG_(out);
var state_30560__$1 = state_30560;
var statearr_30626_32909 = state_30560__$1;
(statearr_30626_32909[(2)] = inst_30548);

(statearr_30626_32909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (16))){
var inst_30556 = (state_30560[(2)]);
var state_30560__$1 = state_30560;
var statearr_30627_32910 = state_30560__$1;
(statearr_30627_32910[(2)] = inst_30556);

(statearr_30627_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (10))){
var inst_30512 = (state_30560[(8)]);
var inst_30535 = (state_30560[(2)]);
var inst_30536 = (inst_30512 + (1));
var inst_30512__$1 = inst_30536;
var state_30560__$1 = (function (){var statearr_30628 = state_30560;
(statearr_30628[(14)] = inst_30535);

(statearr_30628[(8)] = inst_30512__$1);

return statearr_30628;
})();
var statearr_30629_32911 = state_30560__$1;
(statearr_30629_32911[(2)] = null);

(statearr_30629_32911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (8))){
var inst_30540 = (state_30560[(2)]);
var state_30560__$1 = state_30560;
var statearr_30630_32912 = state_30560__$1;
(statearr_30630_32912[(2)] = inst_30540);

(statearr_30630_32912[(1)] = (5));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_30560){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30560);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30633){var ex__28388__auto__ = e30633;
var statearr_30634_32914 = state_30560;
(statearr_30634_32914[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30560[(4)]))){
var statearr_30635_32917 = state_30560;
(statearr_30635_32917[(1)] = cljs.core.first((state_30560[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32922 = state_30560;
state_30560 = G__32922;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_30560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_30560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30636 = f__28543__auto__();
(statearr_30636[(6)] = c__28542__auto___32763);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var G__30640 = arguments.length;
switch (G__30640) {
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
var c__28542__auto___32932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30685){
var state_val_30687 = (state_30685[(1)]);
if((state_val_30687 === (7))){
var inst_30658 = (state_30685[(7)]);
var inst_30657 = (state_30685[(8)]);
var inst_30657__$1 = (state_30685[(2)]);
var inst_30658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30657__$1,(0),null);
var inst_30659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30657__$1,(1),null);
var inst_30660 = (inst_30658__$1 == null);
var state_30685__$1 = (function (){var statearr_30692 = state_30685;
(statearr_30692[(9)] = inst_30659);

(statearr_30692[(7)] = inst_30658__$1);

(statearr_30692[(8)] = inst_30657__$1);

return statearr_30692;
})();
if(cljs.core.truth_(inst_30660)){
var statearr_30695_33019 = state_30685__$1;
(statearr_30695_33019[(1)] = (8));

} else {
var statearr_30699_33021 = state_30685__$1;
(statearr_30699_33021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (1))){
var inst_30647 = cljs.core.vec(chs);
var inst_30648 = inst_30647;
var state_30685__$1 = (function (){var statearr_30706 = state_30685;
(statearr_30706[(10)] = inst_30648);

return statearr_30706;
})();
var statearr_30709_33023 = state_30685__$1;
(statearr_30709_33023[(2)] = null);

(statearr_30709_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (4))){
var inst_30648 = (state_30685[(10)]);
var state_30685__$1 = state_30685;
return cljs.core.async.ioc_alts_BANG_(state_30685__$1,(7),inst_30648);
} else {
if((state_val_30687 === (6))){
var inst_30680 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30713_33025 = state_30685__$1;
(statearr_30713_33025[(2)] = inst_30680);

(statearr_30713_33025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (3))){
var inst_30682 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30685__$1,inst_30682);
} else {
if((state_val_30687 === (2))){
var inst_30648 = (state_30685[(10)]);
var inst_30650 = cljs.core.count(inst_30648);
var inst_30651 = (inst_30650 > (0));
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30651)){
var statearr_30727_33032 = state_30685__$1;
(statearr_30727_33032[(1)] = (4));

} else {
var statearr_30729_33033 = state_30685__$1;
(statearr_30729_33033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (11))){
var inst_30648 = (state_30685[(10)]);
var inst_30673 = (state_30685[(2)]);
var tmp30716 = inst_30648;
var inst_30648__$1 = tmp30716;
var state_30685__$1 = (function (){var statearr_30731 = state_30685;
(statearr_30731[(11)] = inst_30673);

(statearr_30731[(10)] = inst_30648__$1);

return statearr_30731;
})();
var statearr_30734_33037 = state_30685__$1;
(statearr_30734_33037[(2)] = null);

(statearr_30734_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (9))){
var inst_30658 = (state_30685[(7)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30685__$1,(11),out,inst_30658);
} else {
if((state_val_30687 === (5))){
var inst_30678 = cljs.core.async.close_BANG_(out);
var state_30685__$1 = state_30685;
var statearr_30737_33042 = state_30685__$1;
(statearr_30737_33042[(2)] = inst_30678);

(statearr_30737_33042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (10))){
var inst_30676 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30738_33044 = state_30685__$1;
(statearr_30738_33044[(2)] = inst_30676);

(statearr_30738_33044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (8))){
var inst_30659 = (state_30685[(9)]);
var inst_30658 = (state_30685[(7)]);
var inst_30657 = (state_30685[(8)]);
var inst_30648 = (state_30685[(10)]);
var inst_30668 = (function (){var cs = inst_30648;
var vec__30653 = inst_30657;
var v = inst_30658;
var c = inst_30659;
return (function (p1__30637_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30637_SHARP_);
});
})();
var inst_30669 = cljs.core.filterv(inst_30668,inst_30648);
var inst_30648__$1 = inst_30669;
var state_30685__$1 = (function (){var statearr_30745 = state_30685;
(statearr_30745[(10)] = inst_30648__$1);

return statearr_30745;
})();
var statearr_30746_33049 = state_30685__$1;
(statearr_30746_33049[(2)] = null);

(statearr_30746_33049[(1)] = (2));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_30751 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30751[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_30751[(1)] = (1));

return statearr_30751;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_30685){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30685);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30753){var ex__28388__auto__ = e30753;
var statearr_30754_33051 = state_30685;
(statearr_30754_33051[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30685[(4)]))){
var statearr_30757_33052 = state_30685;
(statearr_30757_33052[(1)] = cljs.core.first((state_30685[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_30685;
state_30685 = G__33071;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_30685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_30685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30763 = f__28543__auto__();
(statearr_30763[(6)] = c__28542__auto___32932);

return statearr_30763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
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
var G__30766 = arguments.length;
switch (G__30766) {
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
var c__28542__auto___33073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30795){
var state_val_30796 = (state_30795[(1)]);
if((state_val_30796 === (7))){
var inst_30774 = (state_30795[(7)]);
var inst_30774__$1 = (state_30795[(2)]);
var inst_30776 = (inst_30774__$1 == null);
var inst_30777 = cljs.core.not(inst_30776);
var state_30795__$1 = (function (){var statearr_30797 = state_30795;
(statearr_30797[(7)] = inst_30774__$1);

return statearr_30797;
})();
if(inst_30777){
var statearr_30800_33078 = state_30795__$1;
(statearr_30800_33078[(1)] = (8));

} else {
var statearr_30801_33081 = state_30795__$1;
(statearr_30801_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (1))){
var inst_30767 = (0);
var state_30795__$1 = (function (){var statearr_30803 = state_30795;
(statearr_30803[(8)] = inst_30767);

return statearr_30803;
})();
var statearr_30806_33082 = state_30795__$1;
(statearr_30806_33082[(2)] = null);

(statearr_30806_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (4))){
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30795__$1,(7),ch);
} else {
if((state_val_30796 === (6))){
var inst_30790 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30809_33085 = state_30795__$1;
(statearr_30809_33085[(2)] = inst_30790);

(statearr_30809_33085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (3))){
var inst_30792 = (state_30795[(2)]);
var inst_30793 = cljs.core.async.close_BANG_(out);
var state_30795__$1 = (function (){var statearr_30813 = state_30795;
(statearr_30813[(9)] = inst_30792);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30795__$1,inst_30793);
} else {
if((state_val_30796 === (2))){
var inst_30767 = (state_30795[(8)]);
var inst_30771 = (inst_30767 < n);
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30771)){
var statearr_30814_33090 = state_30795__$1;
(statearr_30814_33090[(1)] = (4));

} else {
var statearr_30815_33091 = state_30795__$1;
(statearr_30815_33091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (11))){
var inst_30767 = (state_30795[(8)]);
var inst_30780 = (state_30795[(2)]);
var inst_30782 = (inst_30767 + (1));
var inst_30767__$1 = inst_30782;
var state_30795__$1 = (function (){var statearr_30817 = state_30795;
(statearr_30817[(10)] = inst_30780);

(statearr_30817[(8)] = inst_30767__$1);

return statearr_30817;
})();
var statearr_30819_33093 = state_30795__$1;
(statearr_30819_33093[(2)] = null);

(statearr_30819_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (9))){
var state_30795__$1 = state_30795;
var statearr_30822_33094 = state_30795__$1;
(statearr_30822_33094[(2)] = null);

(statearr_30822_33094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (5))){
var state_30795__$1 = state_30795;
var statearr_30823_33096 = state_30795__$1;
(statearr_30823_33096[(2)] = null);

(statearr_30823_33096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (10))){
var inst_30786 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30825_33099 = state_30795__$1;
(statearr_30825_33099[(2)] = inst_30786);

(statearr_30825_33099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (8))){
var inst_30774 = (state_30795[(7)]);
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30795__$1,(11),out,inst_30774);
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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_30828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30828[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_30828[(1)] = (1));

return statearr_30828;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_30795){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30795);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30829){var ex__28388__auto__ = e30829;
var statearr_30830_33111 = state_30795;
(statearr_30830_33111[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30795[(4)]))){
var statearr_30831_33114 = state_30795;
(statearr_30831_33114[(1)] = cljs.core.first((state_30795[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_30795;
state_30795 = G__33115;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_30795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_30795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30832 = f__28543__auto__();
(statearr_30832[(6)] = c__28542__auto___33073);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30837 = (function (f,ch,meta30838){
this.f = f;
this.ch = ch;
this.meta30838 = meta30838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30839,meta30838__$1){
var self__ = this;
var _30839__$1 = this;
return (new cljs.core.async.t_cljs$core$async30837(self__.f,self__.ch,meta30838__$1));
}));

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30839){
var self__ = this;
var _30839__$1 = this;
return self__.meta30838;
}));

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30858 = (function (f,ch,meta30838,_,fn1,meta30859){
this.f = f;
this.ch = ch;
this.meta30838 = meta30838;
this._ = _;
this.fn1 = fn1;
this.meta30859 = meta30859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30860,meta30859__$1){
var self__ = this;
var _30860__$1 = this;
return (new cljs.core.async.t_cljs$core$async30858(self__.f,self__.ch,self__.meta30838,self__._,self__.fn1,meta30859__$1));
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30860){
var self__ = this;
var _30860__$1 = this;
return self__.meta30859;
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30836_SHARP_){
var G__30865 = (((p1__30836_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30836_SHARP_) : self__.f.call(null,p1__30836_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30865) : f1.call(null,G__30865));
});
}));

(cljs.core.async.t_cljs$core$async30858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30838","meta30838",261845102,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30837","cljs.core.async/t_cljs$core$async30837",-1847437792,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30859","meta30859",-1940151226,null)], null);
}));

(cljs.core.async.t_cljs$core$async30858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30858");

(cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30858.
 */
cljs.core.async.__GT_t_cljs$core$async30858 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30858(f__$1,ch__$1,meta30838__$1,___$2,fn1__$1,meta30859){
return (new cljs.core.async.t_cljs$core$async30858(f__$1,ch__$1,meta30838__$1,___$2,fn1__$1,meta30859));
});

}

return (new cljs.core.async.t_cljs$core$async30858(self__.f,self__.ch,self__.meta30838,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30878 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30878) : self__.f.call(null,G__30878));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30838","meta30838",261845102,null)], null);
}));

(cljs.core.async.t_cljs$core$async30837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30837");

(cljs.core.async.t_cljs$core$async30837.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30837.
 */
cljs.core.async.__GT_t_cljs$core$async30837 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30837(f__$1,ch__$1,meta30838){
return (new cljs.core.async.t_cljs$core$async30837(f__$1,ch__$1,meta30838));
});

}

return (new cljs.core.async.t_cljs$core$async30837(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30879 = (function (f,ch,meta30880){
this.f = f;
this.ch = ch;
this.meta30880 = meta30880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30881,meta30880__$1){
var self__ = this;
var _30881__$1 = this;
return (new cljs.core.async.t_cljs$core$async30879(self__.f,self__.ch,meta30880__$1));
}));

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30881){
var self__ = this;
var _30881__$1 = this;
return self__.meta30880;
}));

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30880","meta30880",1611166732,null)], null);
}));

(cljs.core.async.t_cljs$core$async30879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30879");

(cljs.core.async.t_cljs$core$async30879.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30879.
 */
cljs.core.async.__GT_t_cljs$core$async30879 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30879(f__$1,ch__$1,meta30880){
return (new cljs.core.async.t_cljs$core$async30879(f__$1,ch__$1,meta30880));
});

}

return (new cljs.core.async.t_cljs$core$async30879(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30882 = (function (p,ch,meta30883){
this.p = p;
this.ch = ch;
this.meta30883 = meta30883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30884,meta30883__$1){
var self__ = this;
var _30884__$1 = this;
return (new cljs.core.async.t_cljs$core$async30882(self__.p,self__.ch,meta30883__$1));
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30884){
var self__ = this;
var _30884__$1 = this;
return self__.meta30883;
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30883","meta30883",-208343412,null)], null);
}));

(cljs.core.async.t_cljs$core$async30882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30882");

(cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30882.
 */
cljs.core.async.__GT_t_cljs$core$async30882 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30882(p__$1,ch__$1,meta30883){
return (new cljs.core.async.t_cljs$core$async30882(p__$1,ch__$1,meta30883));
});

}

return (new cljs.core.async.t_cljs$core$async30882(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30910 = arguments.length;
switch (G__30910) {
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
var c__28542__auto___33232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_30933){
var state_val_30934 = (state_30933[(1)]);
if((state_val_30934 === (7))){
var inst_30929 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30940_33237 = state_30933__$1;
(statearr_30940_33237[(2)] = inst_30929);

(statearr_30940_33237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (1))){
var state_30933__$1 = state_30933;
var statearr_30945_33238 = state_30933__$1;
(statearr_30945_33238[(2)] = null);

(statearr_30945_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (4))){
var inst_30915 = (state_30933[(7)]);
var inst_30915__$1 = (state_30933[(2)]);
var inst_30916 = (inst_30915__$1 == null);
var state_30933__$1 = (function (){var statearr_30949 = state_30933;
(statearr_30949[(7)] = inst_30915__$1);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30916)){
var statearr_30953_33243 = state_30933__$1;
(statearr_30953_33243[(1)] = (5));

} else {
var statearr_30954_33244 = state_30933__$1;
(statearr_30954_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (6))){
var inst_30915 = (state_30933[(7)]);
var inst_30920 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30915) : p.call(null,inst_30915));
var state_30933__$1 = state_30933;
if(cljs.core.truth_(inst_30920)){
var statearr_30955_33247 = state_30933__$1;
(statearr_30955_33247[(1)] = (8));

} else {
var statearr_30956_33249 = state_30933__$1;
(statearr_30956_33249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (3))){
var inst_30931 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30933__$1,inst_30931);
} else {
if((state_val_30934 === (2))){
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30933__$1,(4),ch);
} else {
if((state_val_30934 === (11))){
var inst_30923 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30959_33256 = state_30933__$1;
(statearr_30959_33256[(2)] = inst_30923);

(statearr_30959_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (9))){
var state_30933__$1 = state_30933;
var statearr_30961_33258 = state_30933__$1;
(statearr_30961_33258[(2)] = null);

(statearr_30961_33258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (5))){
var inst_30918 = cljs.core.async.close_BANG_(out);
var state_30933__$1 = state_30933;
var statearr_30963_33261 = state_30933__$1;
(statearr_30963_33261[(2)] = inst_30918);

(statearr_30963_33261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (10))){
var inst_30926 = (state_30933[(2)]);
var state_30933__$1 = (function (){var statearr_30964 = state_30933;
(statearr_30964[(8)] = inst_30926);

return statearr_30964;
})();
var statearr_30965_33262 = state_30933__$1;
(statearr_30965_33262[(2)] = null);

(statearr_30965_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (8))){
var inst_30915 = (state_30933[(7)]);
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30933__$1,(11),out,inst_30915);
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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_30933){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_30933);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e30970){var ex__28388__auto__ = e30970;
var statearr_30971_33265 = state_30933;
(statearr_30971_33265[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_30933[(4)]))){
var statearr_30972_33266 = state_30933;
(statearr_30972_33266[(1)] = cljs.core.first((state_30933[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_30933;
state_30933 = G__33267;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_30933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_30933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_30976 = f__28543__auto__();
(statearr_30976[(6)] = c__28542__auto___33232);

return statearr_30976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30978 = arguments.length;
switch (G__30978) {
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
var c__28542__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_31051){
var state_val_31052 = (state_31051[(1)]);
if((state_val_31052 === (7))){
var inst_31047 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31053_33352 = state_31051__$1;
(statearr_31053_33352[(2)] = inst_31047);

(statearr_31053_33352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (20))){
var inst_31017 = (state_31051[(7)]);
var inst_31028 = (state_31051[(2)]);
var inst_31029 = cljs.core.next(inst_31017);
var inst_31003 = inst_31029;
var inst_31004 = null;
var inst_31005 = (0);
var inst_31006 = (0);
var state_31051__$1 = (function (){var statearr_31056 = state_31051;
(statearr_31056[(8)] = inst_31004);

(statearr_31056[(9)] = inst_31005);

(statearr_31056[(10)] = inst_31028);

(statearr_31056[(11)] = inst_31006);

(statearr_31056[(12)] = inst_31003);

return statearr_31056;
})();
var statearr_31058_33353 = state_31051__$1;
(statearr_31058_33353[(2)] = null);

(statearr_31058_33353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (1))){
var state_31051__$1 = state_31051;
var statearr_31060_33354 = state_31051__$1;
(statearr_31060_33354[(2)] = null);

(statearr_31060_33354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (4))){
var inst_30992 = (state_31051[(13)]);
var inst_30992__$1 = (state_31051[(2)]);
var inst_30993 = (inst_30992__$1 == null);
var state_31051__$1 = (function (){var statearr_31061 = state_31051;
(statearr_31061[(13)] = inst_30992__$1);

return statearr_31061;
})();
if(cljs.core.truth_(inst_30993)){
var statearr_31062_33365 = state_31051__$1;
(statearr_31062_33365[(1)] = (5));

} else {
var statearr_31063_33369 = state_31051__$1;
(statearr_31063_33369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (15))){
var state_31051__$1 = state_31051;
var statearr_31075_33371 = state_31051__$1;
(statearr_31075_33371[(2)] = null);

(statearr_31075_33371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (21))){
var state_31051__$1 = state_31051;
var statearr_31077_33379 = state_31051__$1;
(statearr_31077_33379[(2)] = null);

(statearr_31077_33379[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (13))){
var inst_31004 = (state_31051[(8)]);
var inst_31005 = (state_31051[(9)]);
var inst_31006 = (state_31051[(11)]);
var inst_31003 = (state_31051[(12)]);
var inst_31013 = (state_31051[(2)]);
var inst_31014 = (inst_31006 + (1));
var tmp31072 = inst_31004;
var tmp31073 = inst_31005;
var tmp31074 = inst_31003;
var inst_31003__$1 = tmp31074;
var inst_31004__$1 = tmp31072;
var inst_31005__$1 = tmp31073;
var inst_31006__$1 = inst_31014;
var state_31051__$1 = (function (){var statearr_31079 = state_31051;
(statearr_31079[(8)] = inst_31004__$1);

(statearr_31079[(9)] = inst_31005__$1);

(statearr_31079[(14)] = inst_31013);

(statearr_31079[(11)] = inst_31006__$1);

(statearr_31079[(12)] = inst_31003__$1);

return statearr_31079;
})();
var statearr_31080_33402 = state_31051__$1;
(statearr_31080_33402[(2)] = null);

(statearr_31080_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (22))){
var state_31051__$1 = state_31051;
var statearr_31081_33411 = state_31051__$1;
(statearr_31081_33411[(2)] = null);

(statearr_31081_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (6))){
var inst_30992 = (state_31051[(13)]);
var inst_31001 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30992) : f.call(null,inst_30992));
var inst_31002 = cljs.core.seq(inst_31001);
var inst_31003 = inst_31002;
var inst_31004 = null;
var inst_31005 = (0);
var inst_31006 = (0);
var state_31051__$1 = (function (){var statearr_31083 = state_31051;
(statearr_31083[(8)] = inst_31004);

(statearr_31083[(9)] = inst_31005);

(statearr_31083[(11)] = inst_31006);

(statearr_31083[(12)] = inst_31003);

return statearr_31083;
})();
var statearr_31090_33422 = state_31051__$1;
(statearr_31090_33422[(2)] = null);

(statearr_31090_33422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (17))){
var inst_31017 = (state_31051[(7)]);
var inst_31021 = cljs.core.chunk_first(inst_31017);
var inst_31022 = cljs.core.chunk_rest(inst_31017);
var inst_31023 = cljs.core.count(inst_31021);
var inst_31003 = inst_31022;
var inst_31004 = inst_31021;
var inst_31005 = inst_31023;
var inst_31006 = (0);
var state_31051__$1 = (function (){var statearr_31091 = state_31051;
(statearr_31091[(8)] = inst_31004);

(statearr_31091[(9)] = inst_31005);

(statearr_31091[(11)] = inst_31006);

(statearr_31091[(12)] = inst_31003);

return statearr_31091;
})();
var statearr_31092_33427 = state_31051__$1;
(statearr_31092_33427[(2)] = null);

(statearr_31092_33427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (3))){
var inst_31049 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31051__$1,inst_31049);
} else {
if((state_val_31052 === (12))){
var inst_31037 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31100_33480 = state_31051__$1;
(statearr_31100_33480[(2)] = inst_31037);

(statearr_31100_33480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (2))){
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31051__$1,(4),in$);
} else {
if((state_val_31052 === (23))){
var inst_31045 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31106_33481 = state_31051__$1;
(statearr_31106_33481[(2)] = inst_31045);

(statearr_31106_33481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (19))){
var inst_31032 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31107_33484 = state_31051__$1;
(statearr_31107_33484[(2)] = inst_31032);

(statearr_31107_33484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (11))){
var inst_31017 = (state_31051[(7)]);
var inst_31003 = (state_31051[(12)]);
var inst_31017__$1 = cljs.core.seq(inst_31003);
var state_31051__$1 = (function (){var statearr_31109 = state_31051;
(statearr_31109[(7)] = inst_31017__$1);

return statearr_31109;
})();
if(inst_31017__$1){
var statearr_31111_33488 = state_31051__$1;
(statearr_31111_33488[(1)] = (14));

} else {
var statearr_31114_33489 = state_31051__$1;
(statearr_31114_33489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (9))){
var inst_31039 = (state_31051[(2)]);
var inst_31040 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31051__$1 = (function (){var statearr_31115 = state_31051;
(statearr_31115[(15)] = inst_31039);

return statearr_31115;
})();
if(cljs.core.truth_(inst_31040)){
var statearr_31122_33493 = state_31051__$1;
(statearr_31122_33493[(1)] = (21));

} else {
var statearr_31123_33494 = state_31051__$1;
(statearr_31123_33494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (5))){
var inst_30995 = cljs.core.async.close_BANG_(out);
var state_31051__$1 = state_31051;
var statearr_31124_33498 = state_31051__$1;
(statearr_31124_33498[(2)] = inst_30995);

(statearr_31124_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (14))){
var inst_31017 = (state_31051[(7)]);
var inst_31019 = cljs.core.chunked_seq_QMARK_(inst_31017);
var state_31051__$1 = state_31051;
if(inst_31019){
var statearr_31126_33500 = state_31051__$1;
(statearr_31126_33500[(1)] = (17));

} else {
var statearr_31127_33501 = state_31051__$1;
(statearr_31127_33501[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (16))){
var inst_31035 = (state_31051[(2)]);
var state_31051__$1 = state_31051;
var statearr_31130_33504 = state_31051__$1;
(statearr_31130_33504[(2)] = inst_31035);

(statearr_31130_33504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31052 === (10))){
var inst_31004 = (state_31051[(8)]);
var inst_31006 = (state_31051[(11)]);
var inst_31011 = cljs.core._nth(inst_31004,inst_31006);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31051__$1,(13),out,inst_31011);
} else {
if((state_val_31052 === (18))){
var inst_31017 = (state_31051[(7)]);
var inst_31026 = cljs.core.first(inst_31017);
var state_31051__$1 = state_31051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31051__$1,(20),out,inst_31026);
} else {
if((state_val_31052 === (8))){
var inst_31005 = (state_31051[(9)]);
var inst_31006 = (state_31051[(11)]);
var inst_31008 = (inst_31006 < inst_31005);
var inst_31009 = inst_31008;
var state_31051__$1 = state_31051;
if(cljs.core.truth_(inst_31009)){
var statearr_31134_33515 = state_31051__$1;
(statearr_31134_33515[(1)] = (10));

} else {
var statearr_31135_33520 = state_31051__$1;
(statearr_31135_33520[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____0 = (function (){
var statearr_31136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31136[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__);

(statearr_31136[(1)] = (1));

return statearr_31136;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____1 = (function (state_31051){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_31051);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e31137){var ex__28388__auto__ = e31137;
var statearr_31138_33530 = state_31051;
(statearr_31138_33530[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_31051[(4)]))){
var statearr_31145_33532 = state_31051;
(statearr_31145_33532[(1)] = cljs.core.first((state_31051[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_31051;
state_31051 = G__33536;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__ = function(state_31051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____1.call(this,state_31051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_31146 = f__28543__auto__();
(statearr_31146[(6)] = c__28542__auto__);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));

return c__28542__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31152 = arguments.length;
switch (G__31152) {
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
var G__31160 = arguments.length;
switch (G__31160) {
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
var G__31166 = arguments.length;
switch (G__31166) {
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
var c__28542__auto___33572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_31194){
var state_val_31195 = (state_31194[(1)]);
if((state_val_31195 === (7))){
var inst_31188 = (state_31194[(2)]);
var state_31194__$1 = state_31194;
var statearr_31196_33578 = state_31194__$1;
(statearr_31196_33578[(2)] = inst_31188);

(statearr_31196_33578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (1))){
var inst_31169 = null;
var state_31194__$1 = (function (){var statearr_31197 = state_31194;
(statearr_31197[(7)] = inst_31169);

return statearr_31197;
})();
var statearr_31198_33579 = state_31194__$1;
(statearr_31198_33579[(2)] = null);

(statearr_31198_33579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (4))){
var inst_31172 = (state_31194[(8)]);
var inst_31172__$1 = (state_31194[(2)]);
var inst_31173 = (inst_31172__$1 == null);
var inst_31174 = cljs.core.not(inst_31173);
var state_31194__$1 = (function (){var statearr_31199 = state_31194;
(statearr_31199[(8)] = inst_31172__$1);

return statearr_31199;
})();
if(inst_31174){
var statearr_31200_33588 = state_31194__$1;
(statearr_31200_33588[(1)] = (5));

} else {
var statearr_31201_33589 = state_31194__$1;
(statearr_31201_33589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (6))){
var state_31194__$1 = state_31194;
var statearr_31202_33591 = state_31194__$1;
(statearr_31202_33591[(2)] = null);

(statearr_31202_33591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (3))){
var inst_31190 = (state_31194[(2)]);
var inst_31191 = cljs.core.async.close_BANG_(out);
var state_31194__$1 = (function (){var statearr_31203 = state_31194;
(statearr_31203[(9)] = inst_31190);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31194__$1,inst_31191);
} else {
if((state_val_31195 === (2))){
var state_31194__$1 = state_31194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31194__$1,(4),ch);
} else {
if((state_val_31195 === (11))){
var inst_31172 = (state_31194[(8)]);
var inst_31182 = (state_31194[(2)]);
var inst_31169 = inst_31172;
var state_31194__$1 = (function (){var statearr_31206 = state_31194;
(statearr_31206[(7)] = inst_31169);

(statearr_31206[(10)] = inst_31182);

return statearr_31206;
})();
var statearr_31208_33597 = state_31194__$1;
(statearr_31208_33597[(2)] = null);

(statearr_31208_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (9))){
var inst_31172 = (state_31194[(8)]);
var state_31194__$1 = state_31194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31194__$1,(11),out,inst_31172);
} else {
if((state_val_31195 === (5))){
var inst_31169 = (state_31194[(7)]);
var inst_31172 = (state_31194[(8)]);
var inst_31177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31172,inst_31169);
var state_31194__$1 = state_31194;
if(inst_31177){
var statearr_31210_33613 = state_31194__$1;
(statearr_31210_33613[(1)] = (8));

} else {
var statearr_31211_33614 = state_31194__$1;
(statearr_31211_33614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (10))){
var inst_31185 = (state_31194[(2)]);
var state_31194__$1 = state_31194;
var statearr_31212_33617 = state_31194__$1;
(statearr_31212_33617[(2)] = inst_31185);

(statearr_31212_33617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31195 === (8))){
var inst_31169 = (state_31194[(7)]);
var tmp31209 = inst_31169;
var inst_31169__$1 = tmp31209;
var state_31194__$1 = (function (){var statearr_31214 = state_31194;
(statearr_31214[(7)] = inst_31169__$1);

return statearr_31214;
})();
var statearr_31216_33626 = state_31194__$1;
(statearr_31216_33626[(2)] = null);

(statearr_31216_33626[(1)] = (2));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_31218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31218[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_31218[(1)] = (1));

return statearr_31218;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_31194){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_31194);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e31219){var ex__28388__auto__ = e31219;
var statearr_31220_33633 = state_31194;
(statearr_31220_33633[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_31194[(4)]))){
var statearr_31221_33635 = state_31194;
(statearr_31221_33635[(1)] = cljs.core.first((state_31194[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33636 = state_31194;
state_31194 = G__33636;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_31194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_31194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_31223 = f__28543__auto__();
(statearr_31223[(6)] = c__28542__auto___33572);

return statearr_31223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31226 = arguments.length;
switch (G__31226) {
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
var c__28542__auto___33646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_31283){
var state_val_31284 = (state_31283[(1)]);
if((state_val_31284 === (7))){
var inst_31279 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31286_33648 = state_31283__$1;
(statearr_31286_33648[(2)] = inst_31279);

(statearr_31286_33648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (1))){
var inst_31242 = (new Array(n));
var inst_31243 = inst_31242;
var inst_31244 = (0);
var state_31283__$1 = (function (){var statearr_31288 = state_31283;
(statearr_31288[(7)] = inst_31244);

(statearr_31288[(8)] = inst_31243);

return statearr_31288;
})();
var statearr_31290_33652 = state_31283__$1;
(statearr_31290_33652[(2)] = null);

(statearr_31290_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (4))){
var inst_31248 = (state_31283[(9)]);
var inst_31248__$1 = (state_31283[(2)]);
var inst_31249 = (inst_31248__$1 == null);
var inst_31250 = cljs.core.not(inst_31249);
var state_31283__$1 = (function (){var statearr_31298 = state_31283;
(statearr_31298[(9)] = inst_31248__$1);

return statearr_31298;
})();
if(inst_31250){
var statearr_31299_33657 = state_31283__$1;
(statearr_31299_33657[(1)] = (5));

} else {
var statearr_31300_33658 = state_31283__$1;
(statearr_31300_33658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (15))){
var inst_31273 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31301_33660 = state_31283__$1;
(statearr_31301_33660[(2)] = inst_31273);

(statearr_31301_33660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (13))){
var state_31283__$1 = state_31283;
var statearr_31307_33666 = state_31283__$1;
(statearr_31307_33666[(2)] = null);

(statearr_31307_33666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (6))){
var inst_31244 = (state_31283[(7)]);
var inst_31269 = (inst_31244 > (0));
var state_31283__$1 = state_31283;
if(cljs.core.truth_(inst_31269)){
var statearr_31311_33684 = state_31283__$1;
(statearr_31311_33684[(1)] = (12));

} else {
var statearr_31312_33685 = state_31283__$1;
(statearr_31312_33685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (3))){
var inst_31281 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31283__$1,inst_31281);
} else {
if((state_val_31284 === (12))){
var inst_31243 = (state_31283[(8)]);
var inst_31271 = cljs.core.vec(inst_31243);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31283__$1,(15),out,inst_31271);
} else {
if((state_val_31284 === (2))){
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31283__$1,(4),ch);
} else {
if((state_val_31284 === (11))){
var inst_31262 = (state_31283[(2)]);
var inst_31263 = (new Array(n));
var inst_31243 = inst_31263;
var inst_31244 = (0);
var state_31283__$1 = (function (){var statearr_31313 = state_31283;
(statearr_31313[(7)] = inst_31244);

(statearr_31313[(8)] = inst_31243);

(statearr_31313[(10)] = inst_31262);

return statearr_31313;
})();
var statearr_31314_33688 = state_31283__$1;
(statearr_31314_33688[(2)] = null);

(statearr_31314_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (9))){
var inst_31243 = (state_31283[(8)]);
var inst_31260 = cljs.core.vec(inst_31243);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31283__$1,(11),out,inst_31260);
} else {
if((state_val_31284 === (5))){
var inst_31255 = (state_31283[(11)]);
var inst_31244 = (state_31283[(7)]);
var inst_31243 = (state_31283[(8)]);
var inst_31248 = (state_31283[(9)]);
var inst_31254 = (inst_31243[inst_31244] = inst_31248);
var inst_31255__$1 = (inst_31244 + (1));
var inst_31256 = (inst_31255__$1 < n);
var state_31283__$1 = (function (){var statearr_31315 = state_31283;
(statearr_31315[(11)] = inst_31255__$1);

(statearr_31315[(12)] = inst_31254);

return statearr_31315;
})();
if(cljs.core.truth_(inst_31256)){
var statearr_31316_33692 = state_31283__$1;
(statearr_31316_33692[(1)] = (8));

} else {
var statearr_31317_33697 = state_31283__$1;
(statearr_31317_33697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (14))){
var inst_31276 = (state_31283[(2)]);
var inst_31277 = cljs.core.async.close_BANG_(out);
var state_31283__$1 = (function (){var statearr_31319 = state_31283;
(statearr_31319[(13)] = inst_31276);

return statearr_31319;
})();
var statearr_31320_33698 = state_31283__$1;
(statearr_31320_33698[(2)] = inst_31277);

(statearr_31320_33698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (10))){
var inst_31266 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31321_33699 = state_31283__$1;
(statearr_31321_33699[(2)] = inst_31266);

(statearr_31321_33699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (8))){
var inst_31255 = (state_31283[(11)]);
var inst_31243 = (state_31283[(8)]);
var tmp31318 = inst_31243;
var inst_31243__$1 = tmp31318;
var inst_31244 = inst_31255;
var state_31283__$1 = (function (){var statearr_31322 = state_31283;
(statearr_31322[(7)] = inst_31244);

(statearr_31322[(8)] = inst_31243__$1);

return statearr_31322;
})();
var statearr_31323_33707 = state_31283__$1;
(statearr_31323_33707[(2)] = null);

(statearr_31323_33707[(1)] = (2));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_31336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31336[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_31336[(1)] = (1));

return statearr_31336;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_31283){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_31283);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e31338){var ex__28388__auto__ = e31338;
var statearr_31340_33708 = state_31283;
(statearr_31340_33708[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_31283[(4)]))){
var statearr_31341_33709 = state_31283;
(statearr_31341_33709[(1)] = cljs.core.first((state_31283[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_31283;
state_31283 = G__33710;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_31283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_31283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_31342 = f__28543__auto__();
(statearr_31342[(6)] = c__28542__auto___33646);

return statearr_31342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31357 = arguments.length;
switch (G__31357) {
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
var c__28542__auto___33740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28543__auto__ = (function (){var switch__28384__auto__ = (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31428_33741 = state_31414__$1;
(statearr_31428_33741[(2)] = inst_31410);

(statearr_31428_33741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var inst_31365 = [];
var inst_31366 = inst_31365;
var inst_31367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31414__$1 = (function (){var statearr_31429 = state_31414;
(statearr_31429[(7)] = inst_31367);

(statearr_31429[(8)] = inst_31366);

return statearr_31429;
})();
var statearr_31430_33742 = state_31414__$1;
(statearr_31430_33742[(2)] = null);

(statearr_31430_33742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31370 = (state_31414[(9)]);
var inst_31370__$1 = (state_31414[(2)]);
var inst_31371 = (inst_31370__$1 == null);
var inst_31372 = cljs.core.not(inst_31371);
var state_31414__$1 = (function (){var statearr_31431 = state_31414;
(statearr_31431[(9)] = inst_31370__$1);

return statearr_31431;
})();
if(inst_31372){
var statearr_31432_33743 = state_31414__$1;
(statearr_31432_33743[(1)] = (5));

} else {
var statearr_31433_33744 = state_31414__$1;
(statearr_31433_33744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (15))){
var inst_31404 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31434_33745 = state_31414__$1;
(statearr_31434_33745[(2)] = inst_31404);

(statearr_31434_33745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var state_31414__$1 = state_31414;
var statearr_31435_33746 = state_31414__$1;
(statearr_31435_33746[(2)] = null);

(statearr_31435_33746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31366 = (state_31414[(8)]);
var inst_31395 = inst_31366.length;
var inst_31396 = (inst_31395 > (0));
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31396)){
var statearr_31437_33747 = state_31414__$1;
(statearr_31437_33747[(1)] = (12));

} else {
var statearr_31438_33748 = state_31414__$1;
(statearr_31438_33748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (12))){
var inst_31366 = (state_31414[(8)]);
var inst_31402 = cljs.core.vec(inst_31366);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31414__$1,(15),out,inst_31402);
} else {
if((state_val_31415 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(4),ch);
} else {
if((state_val_31415 === (11))){
var inst_31370 = (state_31414[(9)]);
var inst_31374 = (state_31414[(10)]);
var inst_31384 = (state_31414[(2)]);
var inst_31385 = [];
var inst_31386 = inst_31385.push(inst_31370);
var inst_31366 = inst_31385;
var inst_31367 = inst_31374;
var state_31414__$1 = (function (){var statearr_31441 = state_31414;
(statearr_31441[(11)] = inst_31384);

(statearr_31441[(7)] = inst_31367);

(statearr_31441[(8)] = inst_31366);

(statearr_31441[(12)] = inst_31386);

return statearr_31441;
})();
var statearr_31442_33749 = state_31414__$1;
(statearr_31442_33749[(2)] = null);

(statearr_31442_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var inst_31366 = (state_31414[(8)]);
var inst_31382 = cljs.core.vec(inst_31366);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31414__$1,(11),out,inst_31382);
} else {
if((state_val_31415 === (5))){
var inst_31370 = (state_31414[(9)]);
var inst_31367 = (state_31414[(7)]);
var inst_31374 = (state_31414[(10)]);
var inst_31374__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31370) : f.call(null,inst_31370));
var inst_31375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31374__$1,inst_31367);
var inst_31376 = cljs.core.keyword_identical_QMARK_(inst_31367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31377 = ((inst_31375) || (inst_31376));
var state_31414__$1 = (function (){var statearr_31443 = state_31414;
(statearr_31443[(10)] = inst_31374__$1);

return statearr_31443;
})();
if(cljs.core.truth_(inst_31377)){
var statearr_31444_33791 = state_31414__$1;
(statearr_31444_33791[(1)] = (8));

} else {
var statearr_31445_33792 = state_31414__$1;
(statearr_31445_33792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31407 = (state_31414[(2)]);
var inst_31408 = cljs.core.async.close_BANG_(out);
var state_31414__$1 = (function (){var statearr_31447 = state_31414;
(statearr_31447[(13)] = inst_31407);

return statearr_31447;
})();
var statearr_31448_33793 = state_31414__$1;
(statearr_31448_33793[(2)] = inst_31408);

(statearr_31448_33793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var inst_31389 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31449_33794 = state_31414__$1;
(statearr_31449_33794[(2)] = inst_31389);

(statearr_31449_33794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31370 = (state_31414[(9)]);
var inst_31366 = (state_31414[(8)]);
var inst_31374 = (state_31414[(10)]);
var inst_31379 = inst_31366.push(inst_31370);
var tmp31446 = inst_31366;
var inst_31366__$1 = tmp31446;
var inst_31367 = inst_31374;
var state_31414__$1 = (function (){var statearr_31451 = state_31414;
(statearr_31451[(7)] = inst_31367);

(statearr_31451[(8)] = inst_31366__$1);

(statearr_31451[(14)] = inst_31379);

return statearr_31451;
})();
var statearr_31452_33795 = state_31414__$1;
(statearr_31452_33795[(2)] = null);

(statearr_31452_33795[(1)] = (2));


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
var cljs$core$async$state_machine__28385__auto__ = null;
var cljs$core$async$state_machine__28385__auto____0 = (function (){
var statearr_31453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31453[(0)] = cljs$core$async$state_machine__28385__auto__);

(statearr_31453[(1)] = (1));

return statearr_31453;
});
var cljs$core$async$state_machine__28385__auto____1 = (function (state_31414){
while(true){
var ret_value__28386__auto__ = (function (){try{while(true){
var result__28387__auto__ = switch__28384__auto__(state_31414);
if(cljs.core.keyword_identical_QMARK_(result__28387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28387__auto__;
}
break;
}
}catch (e31454){var ex__28388__auto__ = e31454;
var statearr_31455_33796 = state_31414;
(statearr_31455_33796[(2)] = ex__28388__auto__);


if(cljs.core.seq((state_31414[(4)]))){
var statearr_31456_33797 = state_31414;
(statearr_31456_33797[(1)] = cljs.core.first((state_31414[(4)])));

} else {
throw ex__28388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33798 = state_31414;
state_31414 = G__33798;
continue;
} else {
return ret_value__28386__auto__;
}
break;
}
});
cljs$core$async$state_machine__28385__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28385__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28385__auto____0;
cljs$core$async$state_machine__28385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28385__auto____1;
return cljs$core$async$state_machine__28385__auto__;
})()
})();
var state__28544__auto__ = (function (){var statearr_31459 = f__28543__auto__();
(statearr_31459[(6)] = c__28542__auto___33740);

return statearr_31459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28544__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
