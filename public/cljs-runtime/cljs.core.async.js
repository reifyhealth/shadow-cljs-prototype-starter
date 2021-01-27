goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29740 = arguments.length;
switch (G__29740) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29741 = (function (f,blockable,meta29742){
this.f = f;
this.blockable = blockable;
this.meta29742 = meta29742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29743,meta29742__$1){
var self__ = this;
var _29743__$1 = this;
return (new cljs.core.async.t_cljs$core$async29741(self__.f,self__.blockable,meta29742__$1));
}));

(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29743){
var self__ = this;
var _29743__$1 = this;
return self__.meta29742;
}));

(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29742","meta29742",-1425817131,null)], null);
}));

(cljs.core.async.t_cljs$core$async29741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29741");

(cljs.core.async.t_cljs$core$async29741.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29741.
 */
cljs.core.async.__GT_t_cljs$core$async29741 = (function cljs$core$async$__GT_t_cljs$core$async29741(f__$1,blockable__$1,meta29742){
return (new cljs.core.async.t_cljs$core$async29741(f__$1,blockable__$1,meta29742));
});

}

return (new cljs.core.async.t_cljs$core$async29741(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29747 = arguments.length;
switch (G__29747) {
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
var G__29753 = arguments.length;
switch (G__29753) {
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
var G__29756 = arguments.length;
switch (G__29756) {
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
var val_32539 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32539) : fn1.call(null,val_32539));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32539) : fn1.call(null,val_32539));
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
var G__29761 = arguments.length;
switch (G__29761) {
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
var n__4613__auto___32545 = n;
var x_32546 = (0);
while(true){
if((x_32546 < n__4613__auto___32545)){
(a[x_32546] = x_32546);

var G__32547 = (x_32546 + (1));
x_32546 = G__32547;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29772 = (function (flag,meta29773){
this.flag = flag;
this.meta29773 = meta29773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29774,meta29773__$1){
var self__ = this;
var _29774__$1 = this;
return (new cljs.core.async.t_cljs$core$async29772(self__.flag,meta29773__$1));
}));

(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29774){
var self__ = this;
var _29774__$1 = this;
return self__.meta29773;
}));

(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29773","meta29773",398997752,null)], null);
}));

(cljs.core.async.t_cljs$core$async29772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29772");

(cljs.core.async.t_cljs$core$async29772.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29772.
 */
cljs.core.async.__GT_t_cljs$core$async29772 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29772(flag__$1,meta29773){
return (new cljs.core.async.t_cljs$core$async29772(flag__$1,meta29773));
});

}

return (new cljs.core.async.t_cljs$core$async29772(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29778 = (function (flag,cb,meta29779){
this.flag = flag;
this.cb = cb;
this.meta29779 = meta29779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29780,meta29779__$1){
var self__ = this;
var _29780__$1 = this;
return (new cljs.core.async.t_cljs$core$async29778(self__.flag,self__.cb,meta29779__$1));
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29780){
var self__ = this;
var _29780__$1 = this;
return self__.meta29779;
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29779","meta29779",1419180549,null)], null);
}));

(cljs.core.async.t_cljs$core$async29778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29778");

(cljs.core.async.t_cljs$core$async29778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29778.
 */
cljs.core.async.__GT_t_cljs$core$async29778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29778(flag__$1,cb__$1,meta29779){
return (new cljs.core.async.t_cljs$core$async29778(flag__$1,cb__$1,meta29779));
});

}

return (new cljs.core.async.t_cljs$core$async29778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29791_SHARP_){
var G__29809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29791_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29809) : fret.call(null,G__29809));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29792_SHARP_){
var G__29810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29792_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29810) : fret.call(null,G__29810));
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
var G__32556 = (i + (1));
i = G__32556;
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
var len__4736__auto___32559 = arguments.length;
var i__4737__auto___32560 = (0);
while(true){
if((i__4737__auto___32560 < len__4736__auto___32559)){
args__4742__auto__.push((arguments[i__4737__auto___32560]));

var G__32561 = (i__4737__auto___32560 + (1));
i__4737__auto___32560 = G__32561;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29821){
var map__29824 = p__29821;
var map__29824__$1 = (((((!((map__29824 == null))))?(((((map__29824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29824):map__29824);
var opts = map__29824__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29819){
var G__29820 = cljs.core.first(seq29819);
var seq29819__$1 = cljs.core.next(seq29819);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29820,seq29819__$1);
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
var G__29838 = arguments.length;
switch (G__29838) {
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
var c__29669__auto___32573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_29890){
var state_val_29891 = (state_29890[(1)]);
if((state_val_29891 === (7))){
var inst_29886 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29892_32576 = state_29890__$1;
(statearr_29892_32576[(2)] = inst_29886);

(statearr_29892_32576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (1))){
var state_29890__$1 = state_29890;
var statearr_29893_32577 = state_29890__$1;
(statearr_29893_32577[(2)] = null);

(statearr_29893_32577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (4))){
var inst_29864 = (state_29890[(7)]);
var inst_29864__$1 = (state_29890[(2)]);
var inst_29868 = (inst_29864__$1 == null);
var state_29890__$1 = (function (){var statearr_29894 = state_29890;
(statearr_29894[(7)] = inst_29864__$1);

return statearr_29894;
})();
if(cljs.core.truth_(inst_29868)){
var statearr_29895_32578 = state_29890__$1;
(statearr_29895_32578[(1)] = (5));

} else {
var statearr_29896_32579 = state_29890__$1;
(statearr_29896_32579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (13))){
var state_29890__$1 = state_29890;
var statearr_29897_32580 = state_29890__$1;
(statearr_29897_32580[(2)] = null);

(statearr_29897_32580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (6))){
var inst_29864 = (state_29890[(7)]);
var state_29890__$1 = state_29890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29890__$1,(11),to,inst_29864);
} else {
if((state_val_29891 === (3))){
var inst_29888 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29890__$1,inst_29888);
} else {
if((state_val_29891 === (12))){
var state_29890__$1 = state_29890;
var statearr_29901_32588 = state_29890__$1;
(statearr_29901_32588[(2)] = null);

(statearr_29901_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (2))){
var state_29890__$1 = state_29890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29890__$1,(4),from);
} else {
if((state_val_29891 === (11))){
var inst_29879 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
if(cljs.core.truth_(inst_29879)){
var statearr_29906_32593 = state_29890__$1;
(statearr_29906_32593[(1)] = (12));

} else {
var statearr_29907_32594 = state_29890__$1;
(statearr_29907_32594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (9))){
var state_29890__$1 = state_29890;
var statearr_29908_32595 = state_29890__$1;
(statearr_29908_32595[(2)] = null);

(statearr_29908_32595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (5))){
var state_29890__$1 = state_29890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29909_32596 = state_29890__$1;
(statearr_29909_32596[(1)] = (8));

} else {
var statearr_29910_32597 = state_29890__$1;
(statearr_29910_32597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (14))){
var inst_29884 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29913_32599 = state_29890__$1;
(statearr_29913_32599[(2)] = inst_29884);

(statearr_29913_32599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (10))){
var inst_29876 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29914_32600 = state_29890__$1;
(statearr_29914_32600[(2)] = inst_29876);

(statearr_29914_32600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (8))){
var inst_29873 = cljs.core.async.close_BANG_(to);
var state_29890__$1 = state_29890;
var statearr_29916_32602 = state_29890__$1;
(statearr_29916_32602[(2)] = inst_29873);

(statearr_29916_32602[(1)] = (10));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null,null];
(statearr_29917[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_29890){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_29890);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e29923){var ex__29569__auto__ = e29923;
var statearr_29924_32604 = state_29890;
(statearr_29924_32604[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_29890[(4)]))){
var statearr_29925_32606 = state_29890;
(statearr_29925_32606[(1)] = cljs.core.first((state_29890[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32608 = state_29890;
state_29890 = G__32608;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_29890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_29890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_29927 = f__29670__auto__();
(statearr_29927[(6)] = c__29669__auto___32573);

return statearr_29927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var process = (function (p__29936){
var vec__29937 = p__29936;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29937,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29937,(1),null);
var job = vec__29937;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29669__auto___32612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_29947){
var state_val_29948 = (state_29947[(1)]);
if((state_val_29948 === (1))){
var state_29947__$1 = state_29947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29947__$1,(2),res,v);
} else {
if((state_val_29948 === (2))){
var inst_29944 = (state_29947[(2)]);
var inst_29945 = cljs.core.async.close_BANG_(res);
var state_29947__$1 = (function (){var statearr_29949 = state_29947;
(statearr_29949[(7)] = inst_29944);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29947__$1,inst_29945);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_29956 = [null,null,null,null,null,null,null,null];
(statearr_29956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__);

(statearr_29956[(1)] = (1));

return statearr_29956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1 = (function (state_29947){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_29947);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e29957){var ex__29569__auto__ = e29957;
var statearr_29961_32643 = state_29947;
(statearr_29961_32643[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_29947[(4)]))){
var statearr_29962_32645 = state_29947;
(statearr_29962_32645[(1)] = cljs.core.first((state_29947[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32649 = state_29947;
state_29947 = G__32649;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = function(state_29947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1.call(this,state_29947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_29984 = f__29670__auto__();
(statearr_29984[(6)] = c__29669__auto___32612);

return statearr_29984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29987){
var vec__29988 = p__29987;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(1),null);
var job = vec__29988;
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
var n__4613__auto___32656 = n;
var __32657 = (0);
while(true){
if((__32657 < n__4613__auto___32656)){
var G__29993_32658 = type;
var G__29993_32659__$1 = (((G__29993_32658 instanceof cljs.core.Keyword))?G__29993_32658.fqn:null);
switch (G__29993_32659__$1) {
case "compute":
var c__29669__auto___32662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32657,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = ((function (__32657,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function (state_30007){
var state_val_30008 = (state_30007[(1)]);
if((state_val_30008 === (1))){
var state_30007__$1 = state_30007;
var statearr_30009_32666 = state_30007__$1;
(statearr_30009_32666[(2)] = null);

(statearr_30009_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (2))){
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30007__$1,(4),jobs);
} else {
if((state_val_30008 === (3))){
var inst_30005 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30007__$1,inst_30005);
} else {
if((state_val_30008 === (4))){
var inst_29997 = (state_30007[(2)]);
var inst_29998 = process(inst_29997);
var state_30007__$1 = state_30007;
if(cljs.core.truth_(inst_29998)){
var statearr_30015_32667 = state_30007__$1;
(statearr_30015_32667[(1)] = (5));

} else {
var statearr_30016_32668 = state_30007__$1;
(statearr_30016_32668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (5))){
var state_30007__$1 = state_30007;
var statearr_30017_32669 = state_30007__$1;
(statearr_30017_32669[(2)] = null);

(statearr_30017_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (6))){
var state_30007__$1 = state_30007;
var statearr_30019_32672 = state_30007__$1;
(statearr_30019_32672[(2)] = null);

(statearr_30019_32672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (7))){
var inst_30003 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
var statearr_30020_32673 = state_30007__$1;
(statearr_30020_32673[(2)] = inst_30003);

(statearr_30020_32673[(1)] = (3));


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
});})(__32657,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
;
return ((function (__32657,switch__29565__auto__,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_30038 = [null,null,null,null,null,null,null];
(statearr_30038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__);

(statearr_30038[(1)] = (1));

return statearr_30038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1 = (function (state_30007){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30007);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30040){var ex__29569__auto__ = e30040;
var statearr_30041_32698 = state_30007;
(statearr_30041_32698[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30007[(4)]))){
var statearr_30043_32699 = state_30007;
(statearr_30043_32699[(1)] = cljs.core.first((state_30007[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32701 = state_30007;
state_30007 = G__32701;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = function(state_30007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1.call(this,state_30007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__;
})()
;})(__32657,switch__29565__auto__,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30044 = f__29670__auto__();
(statearr_30044[(6)] = c__29669__auto___32662);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
});})(__32657,c__29669__auto___32662,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
);


break;
case "async":
var c__29669__auto___32707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32657,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = ((function (__32657,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function (state_30057){
var state_val_30058 = (state_30057[(1)]);
if((state_val_30058 === (1))){
var state_30057__$1 = state_30057;
var statearr_30059_32711 = state_30057__$1;
(statearr_30059_32711[(2)] = null);

(statearr_30059_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (2))){
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30057__$1,(4),jobs);
} else {
if((state_val_30058 === (3))){
var inst_30055 = (state_30057[(2)]);
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30057__$1,inst_30055);
} else {
if((state_val_30058 === (4))){
var inst_30047 = (state_30057[(2)]);
var inst_30048 = async(inst_30047);
var state_30057__$1 = state_30057;
if(cljs.core.truth_(inst_30048)){
var statearr_30061_32716 = state_30057__$1;
(statearr_30061_32716[(1)] = (5));

} else {
var statearr_30062_32717 = state_30057__$1;
(statearr_30062_32717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (5))){
var state_30057__$1 = state_30057;
var statearr_30065_32718 = state_30057__$1;
(statearr_30065_32718[(2)] = null);

(statearr_30065_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (6))){
var state_30057__$1 = state_30057;
var statearr_30066_32722 = state_30057__$1;
(statearr_30066_32722[(2)] = null);

(statearr_30066_32722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30058 === (7))){
var inst_30053 = (state_30057[(2)]);
var state_30057__$1 = state_30057;
var statearr_30067_32725 = state_30057__$1;
(statearr_30067_32725[(2)] = inst_30053);

(statearr_30067_32725[(1)] = (3));


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
});})(__32657,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
;
return ((function (__32657,switch__29565__auto__,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_30068 = [null,null,null,null,null,null,null];
(statearr_30068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__);

(statearr_30068[(1)] = (1));

return statearr_30068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1 = (function (state_30057){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30057);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30069){var ex__29569__auto__ = e30069;
var statearr_30070_32730 = state_30057;
(statearr_30070_32730[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30057[(4)]))){
var statearr_30071_32735 = state_30057;
(statearr_30071_32735[(1)] = cljs.core.first((state_30057[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32737 = state_30057;
state_30057 = G__32737;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = function(state_30057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1.call(this,state_30057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__;
})()
;})(__32657,switch__29565__auto__,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30079 = f__29670__auto__();
(statearr_30079[(6)] = c__29669__auto___32707);

return statearr_30079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
});})(__32657,c__29669__auto___32707,G__29993_32658,G__29993_32659__$1,n__4613__auto___32656,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29993_32659__$1)].join('')));

}

var G__32744 = (__32657 + (1));
__32657 = G__32744;
continue;
} else {
}
break;
}

var c__29669__auto___32745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30116){
var state_val_30117 = (state_30116[(1)]);
if((state_val_30117 === (7))){
var inst_30111 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30130_32758 = state_30116__$1;
(statearr_30130_32758[(2)] = inst_30111);

(statearr_30130_32758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (1))){
var state_30116__$1 = state_30116;
var statearr_30131_32759 = state_30116__$1;
(statearr_30131_32759[(2)] = null);

(statearr_30131_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (4))){
var inst_30089 = (state_30116[(7)]);
var inst_30089__$1 = (state_30116[(2)]);
var inst_30090 = (inst_30089__$1 == null);
var state_30116__$1 = (function (){var statearr_30134 = state_30116;
(statearr_30134[(7)] = inst_30089__$1);

return statearr_30134;
})();
if(cljs.core.truth_(inst_30090)){
var statearr_30136_32760 = state_30116__$1;
(statearr_30136_32760[(1)] = (5));

} else {
var statearr_30138_32762 = state_30116__$1;
(statearr_30138_32762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (6))){
var inst_30089 = (state_30116[(7)]);
var inst_30098 = (state_30116[(8)]);
var inst_30098__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30103 = [inst_30089,inst_30098__$1];
var inst_30104 = (new cljs.core.PersistentVector(null,2,(5),inst_30102,inst_30103,null));
var state_30116__$1 = (function (){var statearr_30140 = state_30116;
(statearr_30140[(8)] = inst_30098__$1);

return statearr_30140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30116__$1,(8),jobs,inst_30104);
} else {
if((state_val_30117 === (3))){
var inst_30113 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30116__$1,inst_30113);
} else {
if((state_val_30117 === (2))){
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30116__$1,(4),from);
} else {
if((state_val_30117 === (9))){
var inst_30108 = (state_30116[(2)]);
var state_30116__$1 = (function (){var statearr_30145 = state_30116;
(statearr_30145[(9)] = inst_30108);

return statearr_30145;
})();
var statearr_30148_32773 = state_30116__$1;
(statearr_30148_32773[(2)] = null);

(statearr_30148_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (5))){
var inst_30092 = cljs.core.async.close_BANG_(jobs);
var state_30116__$1 = state_30116;
var statearr_30150_32774 = state_30116__$1;
(statearr_30150_32774[(2)] = inst_30092);

(statearr_30150_32774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (8))){
var inst_30098 = (state_30116[(8)]);
var inst_30106 = (state_30116[(2)]);
var state_30116__$1 = (function (){var statearr_30155 = state_30116;
(statearr_30155[(10)] = inst_30106);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30116__$1,(9),results,inst_30098);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_30166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__);

(statearr_30166[(1)] = (1));

return statearr_30166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1 = (function (state_30116){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30116);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30173){var ex__29569__auto__ = e30173;
var statearr_30174_32792 = state_30116;
(statearr_30174_32792[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30116[(4)]))){
var statearr_30180_32797 = state_30116;
(statearr_30180_32797[(1)] = cljs.core.first((state_30116[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32798 = state_30116;
state_30116 = G__32798;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = function(state_30116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1.call(this,state_30116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30212 = f__29670__auto__();
(statearr_30212[(6)] = c__29669__auto___32745);

return statearr_30212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


var c__29669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (7))){
var inst_30251 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30269_32799 = state_30257__$1;
(statearr_30269_32799[(2)] = inst_30251);

(statearr_30269_32799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (20))){
var state_30257__$1 = state_30257;
var statearr_30270_32800 = state_30257__$1;
(statearr_30270_32800[(2)] = null);

(statearr_30270_32800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (1))){
var state_30257__$1 = state_30257;
var statearr_30271_32807 = state_30257__$1;
(statearr_30271_32807[(2)] = null);

(statearr_30271_32807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (4))){
var inst_30219 = (state_30257[(7)]);
var inst_30219__$1 = (state_30257[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var state_30257__$1 = (function (){var statearr_30275 = state_30257;
(statearr_30275[(7)] = inst_30219__$1);

return statearr_30275;
})();
if(cljs.core.truth_(inst_30220)){
var statearr_30277_32808 = state_30257__$1;
(statearr_30277_32808[(1)] = (5));

} else {
var statearr_30278_32809 = state_30257__$1;
(statearr_30278_32809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (15))){
var inst_30232 = (state_30257[(8)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30257__$1,(18),to,inst_30232);
} else {
if((state_val_30258 === (21))){
var inst_30246 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30279_32810 = state_30257__$1;
(statearr_30279_32810[(2)] = inst_30246);

(statearr_30279_32810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (13))){
var inst_30248 = (state_30257[(2)]);
var state_30257__$1 = (function (){var statearr_30289 = state_30257;
(statearr_30289[(9)] = inst_30248);

return statearr_30289;
})();
var statearr_30290_32811 = state_30257__$1;
(statearr_30290_32811[(2)] = null);

(statearr_30290_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (6))){
var inst_30219 = (state_30257[(7)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30257__$1,(11),inst_30219);
} else {
if((state_val_30258 === (17))){
var inst_30241 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
if(cljs.core.truth_(inst_30241)){
var statearr_30292_32812 = state_30257__$1;
(statearr_30292_32812[(1)] = (19));

} else {
var statearr_30293_32813 = state_30257__$1;
(statearr_30293_32813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (3))){
var inst_30253 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30257__$1,inst_30253);
} else {
if((state_val_30258 === (12))){
var inst_30229 = (state_30257[(10)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30257__$1,(14),inst_30229);
} else {
if((state_val_30258 === (2))){
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30257__$1,(4),results);
} else {
if((state_val_30258 === (19))){
var state_30257__$1 = state_30257;
var statearr_30297_32814 = state_30257__$1;
(statearr_30297_32814[(2)] = null);

(statearr_30297_32814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (11))){
var inst_30229 = (state_30257[(2)]);
var state_30257__$1 = (function (){var statearr_30298 = state_30257;
(statearr_30298[(10)] = inst_30229);

return statearr_30298;
})();
var statearr_30299_32815 = state_30257__$1;
(statearr_30299_32815[(2)] = null);

(statearr_30299_32815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (9))){
var state_30257__$1 = state_30257;
var statearr_30300_32816 = state_30257__$1;
(statearr_30300_32816[(2)] = null);

(statearr_30300_32816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (5))){
var state_30257__$1 = state_30257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30301_32817 = state_30257__$1;
(statearr_30301_32817[(1)] = (8));

} else {
var statearr_30302_32818 = state_30257__$1;
(statearr_30302_32818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (14))){
var inst_30232 = (state_30257[(8)]);
var inst_30232__$1 = (state_30257[(2)]);
var inst_30233 = (inst_30232__$1 == null);
var inst_30234 = cljs.core.not(inst_30233);
var state_30257__$1 = (function (){var statearr_30303 = state_30257;
(statearr_30303[(8)] = inst_30232__$1);

return statearr_30303;
})();
if(inst_30234){
var statearr_30304_32819 = state_30257__$1;
(statearr_30304_32819[(1)] = (15));

} else {
var statearr_30305_32820 = state_30257__$1;
(statearr_30305_32820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (16))){
var state_30257__$1 = state_30257;
var statearr_30306_32821 = state_30257__$1;
(statearr_30306_32821[(2)] = false);

(statearr_30306_32821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (10))){
var inst_30226 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30307_32822 = state_30257__$1;
(statearr_30307_32822[(2)] = inst_30226);

(statearr_30307_32822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (18))){
var inst_30238 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30311_32823 = state_30257__$1;
(statearr_30311_32823[(2)] = inst_30238);

(statearr_30311_32823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (8))){
var inst_30223 = cljs.core.async.close_BANG_(to);
var state_30257__$1 = state_30257;
var statearr_30318_32824 = state_30257__$1;
(statearr_30318_32824[(2)] = inst_30223);

(statearr_30318_32824[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1 = (function (state_30257){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30257);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30324){var ex__29569__auto__ = e30324;
var statearr_30325_32830 = state_30257;
(statearr_30325_32830[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30257[(4)]))){
var statearr_30326_32831 = state_30257;
(statearr_30326_32831[(1)] = cljs.core.first((state_30257[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32832 = state_30257;
state_30257 = G__32832;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30327 = f__29670__auto__();
(statearr_30327[(6)] = c__29669__auto__);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

return c__29669__auto__;
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
var G__30329 = arguments.length;
switch (G__30329) {
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
var G__30341 = arguments.length;
switch (G__30341) {
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
var G__30406 = arguments.length;
switch (G__30406) {
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
var c__29669__auto___32852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30436){
var state_val_30437 = (state_30436[(1)]);
if((state_val_30437 === (7))){
var inst_30431 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30438_32853 = state_30436__$1;
(statearr_30438_32853[(2)] = inst_30431);

(statearr_30438_32853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (1))){
var state_30436__$1 = state_30436;
var statearr_30445_32856 = state_30436__$1;
(statearr_30445_32856[(2)] = null);

(statearr_30445_32856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (4))){
var inst_30410 = (state_30436[(7)]);
var inst_30410__$1 = (state_30436[(2)]);
var inst_30411 = (inst_30410__$1 == null);
var state_30436__$1 = (function (){var statearr_30446 = state_30436;
(statearr_30446[(7)] = inst_30410__$1);

return statearr_30446;
})();
if(cljs.core.truth_(inst_30411)){
var statearr_30447_32857 = state_30436__$1;
(statearr_30447_32857[(1)] = (5));

} else {
var statearr_30448_32858 = state_30436__$1;
(statearr_30448_32858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (13))){
var state_30436__$1 = state_30436;
var statearr_30449_32859 = state_30436__$1;
(statearr_30449_32859[(2)] = null);

(statearr_30449_32859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (6))){
var inst_30410 = (state_30436[(7)]);
var inst_30417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30410) : p.call(null,inst_30410));
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30417)){
var statearr_30450_32860 = state_30436__$1;
(statearr_30450_32860[(1)] = (9));

} else {
var statearr_30451_32861 = state_30436__$1;
(statearr_30451_32861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (3))){
var inst_30433 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30436__$1,inst_30433);
} else {
if((state_val_30437 === (12))){
var state_30436__$1 = state_30436;
var statearr_30452_32864 = state_30436__$1;
(statearr_30452_32864[(2)] = null);

(statearr_30452_32864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (2))){
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30436__$1,(4),ch);
} else {
if((state_val_30437 === (11))){
var inst_30410 = (state_30436[(7)]);
var inst_30422 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30436__$1,(8),inst_30422,inst_30410);
} else {
if((state_val_30437 === (9))){
var state_30436__$1 = state_30436;
var statearr_30453_32872 = state_30436__$1;
(statearr_30453_32872[(2)] = tc);

(statearr_30453_32872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (5))){
var inst_30413 = cljs.core.async.close_BANG_(tc);
var inst_30414 = cljs.core.async.close_BANG_(fc);
var state_30436__$1 = (function (){var statearr_30454 = state_30436;
(statearr_30454[(8)] = inst_30413);

return statearr_30454;
})();
var statearr_30455_32876 = state_30436__$1;
(statearr_30455_32876[(2)] = inst_30414);

(statearr_30455_32876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (14))){
var inst_30429 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30457_32877 = state_30436__$1;
(statearr_30457_32877[(2)] = inst_30429);

(statearr_30457_32877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (10))){
var state_30436__$1 = state_30436;
var statearr_30460_32878 = state_30436__$1;
(statearr_30460_32878[(2)] = fc);

(statearr_30460_32878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (8))){
var inst_30424 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30424)){
var statearr_30462_32879 = state_30436__$1;
(statearr_30462_32879[(1)] = (12));

} else {
var statearr_30463_32880 = state_30436__$1;
(statearr_30463_32880[(1)] = (13));

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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_30464 = [null,null,null,null,null,null,null,null,null];
(statearr_30464[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_30464[(1)] = (1));

return statearr_30464;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_30436){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30436);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30465){var ex__29569__auto__ = e30465;
var statearr_30466_32881 = state_30436;
(statearr_30466_32881[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30436[(4)]))){
var statearr_30469_32882 = state_30436;
(statearr_30469_32882[(1)] = cljs.core.first((state_30436[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32887 = state_30436;
state_30436 = G__32887;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_30436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_30436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30472 = f__29670__auto__();
(statearr_30472[(6)] = c__29669__auto___32852);

return statearr_30472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var c__29669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30497 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30503_32897 = state_30501__$1;
(statearr_30503_32897[(2)] = inst_30497);

(statearr_30503_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var inst_30477 = init;
var inst_30478 = inst_30477;
var state_30501__$1 = (function (){var statearr_30505 = state_30501;
(statearr_30505[(7)] = inst_30478);

return statearr_30505;
})();
var statearr_30506_32901 = state_30501__$1;
(statearr_30506_32901[(2)] = null);

(statearr_30506_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30484 = (state_30501[(8)]);
var inst_30484__$1 = (state_30501[(2)]);
var inst_30485 = (inst_30484__$1 == null);
var state_30501__$1 = (function (){var statearr_30511 = state_30501;
(statearr_30511[(8)] = inst_30484__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30485)){
var statearr_30512_32906 = state_30501__$1;
(statearr_30512_32906[(1)] = (5));

} else {
var statearr_30513_32907 = state_30501__$1;
(statearr_30513_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var inst_30478 = (state_30501[(7)]);
var inst_30488 = (state_30501[(9)]);
var inst_30484 = (state_30501[(8)]);
var inst_30488__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30478,inst_30484) : f.call(null,inst_30478,inst_30484));
var inst_30489 = cljs.core.reduced_QMARK_(inst_30488__$1);
var state_30501__$1 = (function (){var statearr_30514 = state_30501;
(statearr_30514[(9)] = inst_30488__$1);

return statearr_30514;
})();
if(inst_30489){
var statearr_30515_32915 = state_30501__$1;
(statearr_30515_32915[(1)] = (8));

} else {
var statearr_30516_32916 = state_30501__$1;
(statearr_30516_32916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30499 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30501__$1,inst_30499);
} else {
if((state_val_30502 === (2))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30501__$1,(4),ch);
} else {
if((state_val_30502 === (9))){
var inst_30488 = (state_30501[(9)]);
var inst_30478 = inst_30488;
var state_30501__$1 = (function (){var statearr_30526 = state_30501;
(statearr_30526[(7)] = inst_30478);

return statearr_30526;
})();
var statearr_30527_32918 = state_30501__$1;
(statearr_30527_32918[(2)] = null);

(statearr_30527_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var inst_30478 = (state_30501[(7)]);
var state_30501__$1 = state_30501;
var statearr_30528_32919 = state_30501__$1;
(statearr_30528_32919[(2)] = inst_30478);

(statearr_30528_32919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var inst_30495 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30529_32920 = state_30501__$1;
(statearr_30529_32920[(2)] = inst_30495);

(statearr_30529_32920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30488 = (state_30501[(9)]);
var inst_30491 = cljs.core.deref(inst_30488);
var state_30501__$1 = state_30501;
var statearr_30530_32924 = state_30501__$1;
(statearr_30530_32924[(2)] = inst_30491);

(statearr_30530_32924[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29566__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29566__auto____0 = (function (){
var statearr_30535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30535[(0)] = cljs$core$async$reduce_$_state_machine__29566__auto__);

(statearr_30535[(1)] = (1));

return statearr_30535;
});
var cljs$core$async$reduce_$_state_machine__29566__auto____1 = (function (state_30501){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30501);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30536){var ex__29569__auto__ = e30536;
var statearr_30540_32927 = state_30501;
(statearr_30540_32927[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30501[(4)]))){
var statearr_30541_32928 = state_30501;
(statearr_30541_32928[(1)] = cljs.core.first((state_30501[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32929 = state_30501;
state_30501 = G__32929;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29566__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29566__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29566__auto____0;
cljs$core$async$reduce_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29566__auto____1;
return cljs$core$async$reduce_$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30542 = f__29670__auto__();
(statearr_30542[(6)] = c__29669__auto__);

return statearr_30542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

return c__29669__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30548){
var state_val_30549 = (state_30548[(1)]);
if((state_val_30549 === (1))){
var inst_30543 = cljs.core.async.reduce(f__$1,init,ch);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30548__$1,(2),inst_30543);
} else {
if((state_val_30549 === (2))){
var inst_30545 = (state_30548[(2)]);
var inst_30546 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30545) : f__$1.call(null,inst_30545));
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30548__$1,inst_30546);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29566__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29566__auto____0 = (function (){
var statearr_30553 = [null,null,null,null,null,null,null];
(statearr_30553[(0)] = cljs$core$async$transduce_$_state_machine__29566__auto__);

(statearr_30553[(1)] = (1));

return statearr_30553;
});
var cljs$core$async$transduce_$_state_machine__29566__auto____1 = (function (state_30548){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30548);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30554){var ex__29569__auto__ = e30554;
var statearr_30555_32930 = state_30548;
(statearr_30555_32930[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30548[(4)]))){
var statearr_30556_32931 = state_30548;
(statearr_30556_32931[(1)] = cljs.core.first((state_30548[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32935 = state_30548;
state_30548 = G__32935;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29566__auto__ = function(state_30548){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29566__auto____1.call(this,state_30548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29566__auto____0;
cljs$core$async$transduce_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29566__auto____1;
return cljs$core$async$transduce_$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30563 = f__29670__auto__();
(statearr_30563[(6)] = c__29669__auto__);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

return c__29669__auto__;
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
var G__30566 = arguments.length;
switch (G__30566) {
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
var c__29669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (7))){
var inst_30585 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30615_32942 = state_30606__$1;
(statearr_30615_32942[(2)] = inst_30585);

(statearr_30615_32942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (1))){
var inst_30576 = cljs.core.seq(coll);
var inst_30577 = inst_30576;
var state_30606__$1 = (function (){var statearr_30616 = state_30606;
(statearr_30616[(7)] = inst_30577);

return statearr_30616;
})();
var statearr_30619_32943 = state_30606__$1;
(statearr_30619_32943[(2)] = null);

(statearr_30619_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (4))){
var inst_30577 = (state_30606[(7)]);
var inst_30583 = cljs.core.first(inst_30577);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30606__$1,(7),ch,inst_30583);
} else {
if((state_val_30607 === (13))){
var inst_30600 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30635_32961 = state_30606__$1;
(statearr_30635_32961[(2)] = inst_30600);

(statearr_30635_32961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (6))){
var inst_30590 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
if(cljs.core.truth_(inst_30590)){
var statearr_30636_32962 = state_30606__$1;
(statearr_30636_32962[(1)] = (8));

} else {
var statearr_30637_32963 = state_30606__$1;
(statearr_30637_32963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (3))){
var inst_30604 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30606__$1,inst_30604);
} else {
if((state_val_30607 === (12))){
var state_30606__$1 = state_30606;
var statearr_30640_32964 = state_30606__$1;
(statearr_30640_32964[(2)] = null);

(statearr_30640_32964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (2))){
var inst_30577 = (state_30606[(7)]);
var state_30606__$1 = state_30606;
if(cljs.core.truth_(inst_30577)){
var statearr_30643_32965 = state_30606__$1;
(statearr_30643_32965[(1)] = (4));

} else {
var statearr_30644_32966 = state_30606__$1;
(statearr_30644_32966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (11))){
var inst_30597 = cljs.core.async.close_BANG_(ch);
var state_30606__$1 = state_30606;
var statearr_30646_32970 = state_30606__$1;
(statearr_30646_32970[(2)] = inst_30597);

(statearr_30646_32970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (9))){
var state_30606__$1 = state_30606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30649_32973 = state_30606__$1;
(statearr_30649_32973[(1)] = (11));

} else {
var statearr_30654_32974 = state_30606__$1;
(statearr_30654_32974[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (5))){
var inst_30577 = (state_30606[(7)]);
var state_30606__$1 = state_30606;
var statearr_30660_32975 = state_30606__$1;
(statearr_30660_32975[(2)] = inst_30577);

(statearr_30660_32975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (10))){
var inst_30602 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30663_32976 = state_30606__$1;
(statearr_30663_32976[(2)] = inst_30602);

(statearr_30663_32976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (8))){
var inst_30577 = (state_30606[(7)]);
var inst_30592 = cljs.core.next(inst_30577);
var inst_30577__$1 = inst_30592;
var state_30606__$1 = (function (){var statearr_30671 = state_30606;
(statearr_30671[(7)] = inst_30577__$1);

return statearr_30671;
})();
var statearr_30676_32977 = state_30606__$1;
(statearr_30676_32977[(2)] = null);

(statearr_30676_32977[(1)] = (2));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_30681 = [null,null,null,null,null,null,null,null];
(statearr_30681[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_30681[(1)] = (1));

return statearr_30681;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_30606){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30606);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e30686){var ex__29569__auto__ = e30686;
var statearr_30687_32978 = state_30606;
(statearr_30687_32978[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30606[(4)]))){
var statearr_30688_32979 = state_30606;
(statearr_30688_32979[(1)] = cljs.core.first((state_30606[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32980 = state_30606;
state_30606 = G__32980;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_30691 = f__29670__auto__();
(statearr_30691[(6)] = c__29669__auto__);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

return c__29669__auto__;
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
var G__30693 = arguments.length;
switch (G__30693) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32990 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_32990(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32991 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_32991(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32994 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_32994(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32998 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32998(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30708 = (function (ch,cs,meta30709){
this.ch = ch;
this.cs = cs;
this.meta30709 = meta30709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30710,meta30709__$1){
var self__ = this;
var _30710__$1 = this;
return (new cljs.core.async.t_cljs$core$async30708(self__.ch,self__.cs,meta30709__$1));
}));

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30710){
var self__ = this;
var _30710__$1 = this;
return self__.meta30709;
}));

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30708.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30709","meta30709",-1406008997,null)], null);
}));

(cljs.core.async.t_cljs$core$async30708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30708");

(cljs.core.async.t_cljs$core$async30708.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30708.
 */
cljs.core.async.__GT_t_cljs$core$async30708 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30708(ch__$1,cs__$1,meta30709){
return (new cljs.core.async.t_cljs$core$async30708(ch__$1,cs__$1,meta30709));
});

}

return (new cljs.core.async.t_cljs$core$async30708(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29669__auto___33012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_30855){
var state_val_30856 = (state_30855[(1)]);
if((state_val_30856 === (7))){
var inst_30848 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30857_33013 = state_30855__$1;
(statearr_30857_33013[(2)] = inst_30848);

(statearr_30857_33013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (20))){
var inst_30752 = (state_30855[(7)]);
var inst_30764 = cljs.core.first(inst_30752);
var inst_30765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(0),null);
var inst_30766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(1),null);
var state_30855__$1 = (function (){var statearr_30861 = state_30855;
(statearr_30861[(8)] = inst_30765);

return statearr_30861;
})();
if(cljs.core.truth_(inst_30766)){
var statearr_30862_33014 = state_30855__$1;
(statearr_30862_33014[(1)] = (22));

} else {
var statearr_30863_33015 = state_30855__$1;
(statearr_30863_33015[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (27))){
var inst_30794 = (state_30855[(9)]);
var inst_30721 = (state_30855[(10)]);
var inst_30796 = (state_30855[(11)]);
var inst_30801 = (state_30855[(12)]);
var inst_30801__$1 = cljs.core._nth(inst_30794,inst_30796);
var inst_30802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30801__$1,inst_30721,done);
var state_30855__$1 = (function (){var statearr_30864 = state_30855;
(statearr_30864[(12)] = inst_30801__$1);

return statearr_30864;
})();
if(cljs.core.truth_(inst_30802)){
var statearr_30865_33016 = state_30855__$1;
(statearr_30865_33016[(1)] = (30));

} else {
var statearr_30866_33017 = state_30855__$1;
(statearr_30866_33017[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (1))){
var state_30855__$1 = state_30855;
var statearr_30868_33018 = state_30855__$1;
(statearr_30868_33018[(2)] = null);

(statearr_30868_33018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (24))){
var inst_30752 = (state_30855[(7)]);
var inst_30771 = (state_30855[(2)]);
var inst_30772 = cljs.core.next(inst_30752);
var inst_30730 = inst_30772;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30855__$1 = (function (){var statearr_30872 = state_30855;
(statearr_30872[(13)] = inst_30771);

(statearr_30872[(14)] = inst_30730);

(statearr_30872[(15)] = inst_30733);

(statearr_30872[(16)] = inst_30732);

(statearr_30872[(17)] = inst_30731);

return statearr_30872;
})();
var statearr_30873_33019 = state_30855__$1;
(statearr_30873_33019[(2)] = null);

(statearr_30873_33019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (39))){
var state_30855__$1 = state_30855;
var statearr_30877_33020 = state_30855__$1;
(statearr_30877_33020[(2)] = null);

(statearr_30877_33020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (4))){
var inst_30721 = (state_30855[(10)]);
var inst_30721__$1 = (state_30855[(2)]);
var inst_30722 = (inst_30721__$1 == null);
var state_30855__$1 = (function (){var statearr_30878 = state_30855;
(statearr_30878[(10)] = inst_30721__$1);

return statearr_30878;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30882_33021 = state_30855__$1;
(statearr_30882_33021[(1)] = (5));

} else {
var statearr_30883_33022 = state_30855__$1;
(statearr_30883_33022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (15))){
var inst_30730 = (state_30855[(14)]);
var inst_30733 = (state_30855[(15)]);
var inst_30732 = (state_30855[(16)]);
var inst_30731 = (state_30855[(17)]);
var inst_30748 = (state_30855[(2)]);
var inst_30749 = (inst_30733 + (1));
var tmp30874 = inst_30730;
var tmp30875 = inst_30732;
var tmp30876 = inst_30731;
var inst_30730__$1 = tmp30874;
var inst_30731__$1 = tmp30876;
var inst_30732__$1 = tmp30875;
var inst_30733__$1 = inst_30749;
var state_30855__$1 = (function (){var statearr_30884 = state_30855;
(statearr_30884[(14)] = inst_30730__$1);

(statearr_30884[(15)] = inst_30733__$1);

(statearr_30884[(18)] = inst_30748);

(statearr_30884[(16)] = inst_30732__$1);

(statearr_30884[(17)] = inst_30731__$1);

return statearr_30884;
})();
var statearr_30885_33026 = state_30855__$1;
(statearr_30885_33026[(2)] = null);

(statearr_30885_33026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (21))){
var inst_30775 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30889_33027 = state_30855__$1;
(statearr_30889_33027[(2)] = inst_30775);

(statearr_30889_33027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (31))){
var inst_30801 = (state_30855[(12)]);
var inst_30805 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30801);
var state_30855__$1 = state_30855;
var statearr_30890_33028 = state_30855__$1;
(statearr_30890_33028[(2)] = inst_30805);

(statearr_30890_33028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (32))){
var inst_30794 = (state_30855[(9)]);
var inst_30795 = (state_30855[(19)]);
var inst_30796 = (state_30855[(11)]);
var inst_30793 = (state_30855[(20)]);
var inst_30807 = (state_30855[(2)]);
var inst_30808 = (inst_30796 + (1));
var tmp30886 = inst_30794;
var tmp30887 = inst_30795;
var tmp30888 = inst_30793;
var inst_30793__$1 = tmp30888;
var inst_30794__$1 = tmp30886;
var inst_30795__$1 = tmp30887;
var inst_30796__$1 = inst_30808;
var state_30855__$1 = (function (){var statearr_30892 = state_30855;
(statearr_30892[(9)] = inst_30794__$1);

(statearr_30892[(21)] = inst_30807);

(statearr_30892[(19)] = inst_30795__$1);

(statearr_30892[(11)] = inst_30796__$1);

(statearr_30892[(20)] = inst_30793__$1);

return statearr_30892;
})();
var statearr_30893_33029 = state_30855__$1;
(statearr_30893_33029[(2)] = null);

(statearr_30893_33029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (40))){
var inst_30821 = (state_30855[(22)]);
var inst_30825 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30821);
var state_30855__$1 = state_30855;
var statearr_30894_33030 = state_30855__$1;
(statearr_30894_33030[(2)] = inst_30825);

(statearr_30894_33030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (33))){
var inst_30812 = (state_30855[(23)]);
var inst_30814 = cljs.core.chunked_seq_QMARK_(inst_30812);
var state_30855__$1 = state_30855;
if(inst_30814){
var statearr_30896_33032 = state_30855__$1;
(statearr_30896_33032[(1)] = (36));

} else {
var statearr_30899_33033 = state_30855__$1;
(statearr_30899_33033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (13))){
var inst_30742 = (state_30855[(24)]);
var inst_30745 = cljs.core.async.close_BANG_(inst_30742);
var state_30855__$1 = state_30855;
var statearr_30900_33035 = state_30855__$1;
(statearr_30900_33035[(2)] = inst_30745);

(statearr_30900_33035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (22))){
var inst_30765 = (state_30855[(8)]);
var inst_30768 = cljs.core.async.close_BANG_(inst_30765);
var state_30855__$1 = state_30855;
var statearr_30902_33036 = state_30855__$1;
(statearr_30902_33036[(2)] = inst_30768);

(statearr_30902_33036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (36))){
var inst_30812 = (state_30855[(23)]);
var inst_30816 = cljs.core.chunk_first(inst_30812);
var inst_30817 = cljs.core.chunk_rest(inst_30812);
var inst_30818 = cljs.core.count(inst_30816);
var inst_30793 = inst_30817;
var inst_30794 = inst_30816;
var inst_30795 = inst_30818;
var inst_30796 = (0);
var state_30855__$1 = (function (){var statearr_30903 = state_30855;
(statearr_30903[(9)] = inst_30794);

(statearr_30903[(19)] = inst_30795);

(statearr_30903[(11)] = inst_30796);

(statearr_30903[(20)] = inst_30793);

return statearr_30903;
})();
var statearr_30904_33037 = state_30855__$1;
(statearr_30904_33037[(2)] = null);

(statearr_30904_33037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (41))){
var inst_30812 = (state_30855[(23)]);
var inst_30827 = (state_30855[(2)]);
var inst_30828 = cljs.core.next(inst_30812);
var inst_30793 = inst_30828;
var inst_30794 = null;
var inst_30795 = (0);
var inst_30796 = (0);
var state_30855__$1 = (function (){var statearr_30906 = state_30855;
(statearr_30906[(25)] = inst_30827);

(statearr_30906[(9)] = inst_30794);

(statearr_30906[(19)] = inst_30795);

(statearr_30906[(11)] = inst_30796);

(statearr_30906[(20)] = inst_30793);

return statearr_30906;
})();
var statearr_30907_33038 = state_30855__$1;
(statearr_30907_33038[(2)] = null);

(statearr_30907_33038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (43))){
var state_30855__$1 = state_30855;
var statearr_30908_33039 = state_30855__$1;
(statearr_30908_33039[(2)] = null);

(statearr_30908_33039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (29))){
var inst_30836 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30909_33040 = state_30855__$1;
(statearr_30909_33040[(2)] = inst_30836);

(statearr_30909_33040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (44))){
var inst_30845 = (state_30855[(2)]);
var state_30855__$1 = (function (){var statearr_30910 = state_30855;
(statearr_30910[(26)] = inst_30845);

return statearr_30910;
})();
var statearr_30911_33056 = state_30855__$1;
(statearr_30911_33056[(2)] = null);

(statearr_30911_33056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (6))){
var inst_30785 = (state_30855[(27)]);
var inst_30784 = cljs.core.deref(cs);
var inst_30785__$1 = cljs.core.keys(inst_30784);
var inst_30786 = cljs.core.count(inst_30785__$1);
var inst_30787 = cljs.core.reset_BANG_(dctr,inst_30786);
var inst_30792 = cljs.core.seq(inst_30785__$1);
var inst_30793 = inst_30792;
var inst_30794 = null;
var inst_30795 = (0);
var inst_30796 = (0);
var state_30855__$1 = (function (){var statearr_30912 = state_30855;
(statearr_30912[(28)] = inst_30787);

(statearr_30912[(9)] = inst_30794);

(statearr_30912[(19)] = inst_30795);

(statearr_30912[(11)] = inst_30796);

(statearr_30912[(27)] = inst_30785__$1);

(statearr_30912[(20)] = inst_30793);

return statearr_30912;
})();
var statearr_30913_33057 = state_30855__$1;
(statearr_30913_33057[(2)] = null);

(statearr_30913_33057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (28))){
var inst_30812 = (state_30855[(23)]);
var inst_30793 = (state_30855[(20)]);
var inst_30812__$1 = cljs.core.seq(inst_30793);
var state_30855__$1 = (function (){var statearr_30914 = state_30855;
(statearr_30914[(23)] = inst_30812__$1);

return statearr_30914;
})();
if(inst_30812__$1){
var statearr_30918_33058 = state_30855__$1;
(statearr_30918_33058[(1)] = (33));

} else {
var statearr_30919_33059 = state_30855__$1;
(statearr_30919_33059[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (25))){
var inst_30795 = (state_30855[(19)]);
var inst_30796 = (state_30855[(11)]);
var inst_30798 = (inst_30796 < inst_30795);
var inst_30799 = inst_30798;
var state_30855__$1 = state_30855;
if(cljs.core.truth_(inst_30799)){
var statearr_30920_33060 = state_30855__$1;
(statearr_30920_33060[(1)] = (27));

} else {
var statearr_30921_33061 = state_30855__$1;
(statearr_30921_33061[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (34))){
var state_30855__$1 = state_30855;
var statearr_30922_33062 = state_30855__$1;
(statearr_30922_33062[(2)] = null);

(statearr_30922_33062[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (17))){
var state_30855__$1 = state_30855;
var statearr_30927_33069 = state_30855__$1;
(statearr_30927_33069[(2)] = null);

(statearr_30927_33069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (3))){
var inst_30850 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30855__$1,inst_30850);
} else {
if((state_val_30856 === (12))){
var inst_30780 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30928_33070 = state_30855__$1;
(statearr_30928_33070[(2)] = inst_30780);

(statearr_30928_33070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (2))){
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30855__$1,(4),ch);
} else {
if((state_val_30856 === (23))){
var state_30855__$1 = state_30855;
var statearr_30929_33071 = state_30855__$1;
(statearr_30929_33071[(2)] = null);

(statearr_30929_33071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (35))){
var inst_30834 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30931_33072 = state_30855__$1;
(statearr_30931_33072[(2)] = inst_30834);

(statearr_30931_33072[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (19))){
var inst_30752 = (state_30855[(7)]);
var inst_30756 = cljs.core.chunk_first(inst_30752);
var inst_30757 = cljs.core.chunk_rest(inst_30752);
var inst_30758 = cljs.core.count(inst_30756);
var inst_30730 = inst_30757;
var inst_30731 = inst_30756;
var inst_30732 = inst_30758;
var inst_30733 = (0);
var state_30855__$1 = (function (){var statearr_30932 = state_30855;
(statearr_30932[(14)] = inst_30730);

(statearr_30932[(15)] = inst_30733);

(statearr_30932[(16)] = inst_30732);

(statearr_30932[(17)] = inst_30731);

return statearr_30932;
})();
var statearr_30933_33074 = state_30855__$1;
(statearr_30933_33074[(2)] = null);

(statearr_30933_33074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (11))){
var inst_30752 = (state_30855[(7)]);
var inst_30730 = (state_30855[(14)]);
var inst_30752__$1 = cljs.core.seq(inst_30730);
var state_30855__$1 = (function (){var statearr_30944 = state_30855;
(statearr_30944[(7)] = inst_30752__$1);

return statearr_30944;
})();
if(inst_30752__$1){
var statearr_30976_33075 = state_30855__$1;
(statearr_30976_33075[(1)] = (16));

} else {
var statearr_30980_33076 = state_30855__$1;
(statearr_30980_33076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (9))){
var inst_30782 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30981_33077 = state_30855__$1;
(statearr_30981_33077[(2)] = inst_30782);

(statearr_30981_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (5))){
var inst_30728 = cljs.core.deref(cs);
var inst_30729 = cljs.core.seq(inst_30728);
var inst_30730 = inst_30729;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30855__$1 = (function (){var statearr_30982 = state_30855;
(statearr_30982[(14)] = inst_30730);

(statearr_30982[(15)] = inst_30733);

(statearr_30982[(16)] = inst_30732);

(statearr_30982[(17)] = inst_30731);

return statearr_30982;
})();
var statearr_30983_33078 = state_30855__$1;
(statearr_30983_33078[(2)] = null);

(statearr_30983_33078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (14))){
var state_30855__$1 = state_30855;
var statearr_30984_33079 = state_30855__$1;
(statearr_30984_33079[(2)] = null);

(statearr_30984_33079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (45))){
var inst_30842 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30985_33080 = state_30855__$1;
(statearr_30985_33080[(2)] = inst_30842);

(statearr_30985_33080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (26))){
var inst_30785 = (state_30855[(27)]);
var inst_30838 = (state_30855[(2)]);
var inst_30839 = cljs.core.seq(inst_30785);
var state_30855__$1 = (function (){var statearr_30986 = state_30855;
(statearr_30986[(29)] = inst_30838);

return statearr_30986;
})();
if(inst_30839){
var statearr_30987_33081 = state_30855__$1;
(statearr_30987_33081[(1)] = (42));

} else {
var statearr_30988_33082 = state_30855__$1;
(statearr_30988_33082[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (16))){
var inst_30752 = (state_30855[(7)]);
var inst_30754 = cljs.core.chunked_seq_QMARK_(inst_30752);
var state_30855__$1 = state_30855;
if(inst_30754){
var statearr_30989_33083 = state_30855__$1;
(statearr_30989_33083[(1)] = (19));

} else {
var statearr_30990_33084 = state_30855__$1;
(statearr_30990_33084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (38))){
var inst_30831 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30991_33094 = state_30855__$1;
(statearr_30991_33094[(2)] = inst_30831);

(statearr_30991_33094[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (30))){
var state_30855__$1 = state_30855;
var statearr_30992_33095 = state_30855__$1;
(statearr_30992_33095[(2)] = null);

(statearr_30992_33095[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (10))){
var inst_30733 = (state_30855[(15)]);
var inst_30731 = (state_30855[(17)]);
var inst_30741 = cljs.core._nth(inst_30731,inst_30733);
var inst_30742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30741,(0),null);
var inst_30743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30741,(1),null);
var state_30855__$1 = (function (){var statearr_30993 = state_30855;
(statearr_30993[(24)] = inst_30742);

return statearr_30993;
})();
if(cljs.core.truth_(inst_30743)){
var statearr_30994_33099 = state_30855__$1;
(statearr_30994_33099[(1)] = (13));

} else {
var statearr_30996_33100 = state_30855__$1;
(statearr_30996_33100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (18))){
var inst_30778 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_31001_33103 = state_30855__$1;
(statearr_31001_33103[(2)] = inst_30778);

(statearr_31001_33103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (42))){
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30855__$1,(45),dchan);
} else {
if((state_val_30856 === (37))){
var inst_30812 = (state_30855[(23)]);
var inst_30721 = (state_30855[(10)]);
var inst_30821 = (state_30855[(22)]);
var inst_30821__$1 = cljs.core.first(inst_30812);
var inst_30822 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30821__$1,inst_30721,done);
var state_30855__$1 = (function (){var statearr_31005 = state_30855;
(statearr_31005[(22)] = inst_30821__$1);

return statearr_31005;
})();
if(cljs.core.truth_(inst_30822)){
var statearr_31006_33104 = state_30855__$1;
(statearr_31006_33104[(1)] = (39));

} else {
var statearr_31007_33105 = state_30855__$1;
(statearr_31007_33105[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (8))){
var inst_30733 = (state_30855[(15)]);
var inst_30732 = (state_30855[(16)]);
var inst_30735 = (inst_30733 < inst_30732);
var inst_30736 = inst_30735;
var state_30855__$1 = state_30855;
if(cljs.core.truth_(inst_30736)){
var statearr_31008_33106 = state_30855__$1;
(statearr_31008_33106[(1)] = (10));

} else {
var statearr_31009_33107 = state_30855__$1;
(statearr_31009_33107[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29566__auto__ = null;
var cljs$core$async$mult_$_state_machine__29566__auto____0 = (function (){
var statearr_31011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31011[(0)] = cljs$core$async$mult_$_state_machine__29566__auto__);

(statearr_31011[(1)] = (1));

return statearr_31011;
});
var cljs$core$async$mult_$_state_machine__29566__auto____1 = (function (state_30855){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_30855);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31012){var ex__29569__auto__ = e31012;
var statearr_31013_33110 = state_30855;
(statearr_31013_33110[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_30855[(4)]))){
var statearr_31014_33114 = state_30855;
(statearr_31014_33114[(1)] = cljs.core.first((state_30855[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_30855;
state_30855 = G__33115;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29566__auto__ = function(state_30855){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29566__auto____1.call(this,state_30855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29566__auto____0;
cljs$core$async$mult_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29566__auto____1;
return cljs$core$async$mult_$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31015 = f__29670__auto__();
(statearr_31015[(6)] = c__29669__auto___33012);

return statearr_31015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var G__31017 = arguments.length;
switch (G__31017) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33132 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33132(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33137 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33137(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33145 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33145(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33146 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33146(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33171 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33171(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33173 = arguments.length;
var i__4737__auto___33174 = (0);
while(true){
if((i__4737__auto___33174 < len__4736__auto___33173)){
args__4742__auto__.push((arguments[i__4737__auto___33174]));

var G__33175 = (i__4737__auto___33174 + (1));
i__4737__auto___33174 = G__33175;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31035){
var map__31037 = p__31035;
var map__31037__$1 = (((((!((map__31037 == null))))?(((((map__31037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31037):map__31037);
var opts = map__31037__$1;
var statearr_31043_33176 = state;
(statearr_31043_33176[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31047_33177 = state;
(statearr_31047_33177[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31048_33178 = state;
(statearr_31048_33178[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31029){
var G__31030 = cljs.core.first(seq31029);
var seq31029__$1 = cljs.core.next(seq31029);
var G__31031 = cljs.core.first(seq31029__$1);
var seq31029__$2 = cljs.core.next(seq31029__$1);
var G__31032 = cljs.core.first(seq31029__$2);
var seq31029__$3 = cljs.core.next(seq31029__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31030,G__31031,G__31032,seq31029__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31065 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31066){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31066 = meta31066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31067,meta31066__$1){
var self__ = this;
var _31067__$1 = this;
return (new cljs.core.async.t_cljs$core$async31065(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31066__$1));
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31067){
var self__ = this;
var _31067__$1 = this;
return self__.meta31066;
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31066","meta31066",2019140124,null)], null);
}));

(cljs.core.async.t_cljs$core$async31065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31065");

(cljs.core.async.t_cljs$core$async31065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31065.
 */
cljs.core.async.__GT_t_cljs$core$async31065 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31065(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31066){
return (new cljs.core.async.t_cljs$core$async31065(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31066));
});

}

return (new cljs.core.async.t_cljs$core$async31065(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29669__auto___33194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31193){
var state_val_31194 = (state_31193[(1)]);
if((state_val_31194 === (7))){
var inst_31103 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31195_33195 = state_31193__$1;
(statearr_31195_33195[(2)] = inst_31103);

(statearr_31195_33195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (20))){
var inst_31115 = (state_31193[(7)]);
var state_31193__$1 = state_31193;
var statearr_31200_33196 = state_31193__$1;
(statearr_31200_33196[(2)] = inst_31115);

(statearr_31200_33196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (27))){
var state_31193__$1 = state_31193;
var statearr_31201_33197 = state_31193__$1;
(statearr_31201_33197[(2)] = null);

(statearr_31201_33197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (1))){
var inst_31090 = (state_31193[(8)]);
var inst_31090__$1 = calc_state();
var inst_31092 = (inst_31090__$1 == null);
var inst_31093 = cljs.core.not(inst_31092);
var state_31193__$1 = (function (){var statearr_31202 = state_31193;
(statearr_31202[(8)] = inst_31090__$1);

return statearr_31202;
})();
if(inst_31093){
var statearr_31203_33203 = state_31193__$1;
(statearr_31203_33203[(1)] = (2));

} else {
var statearr_31210_33204 = state_31193__$1;
(statearr_31210_33204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (24))){
var inst_31139 = (state_31193[(9)]);
var inst_31148 = (state_31193[(10)]);
var inst_31164 = (state_31193[(11)]);
var inst_31164__$1 = (inst_31139.cljs$core$IFn$_invoke$arity$1 ? inst_31139.cljs$core$IFn$_invoke$arity$1(inst_31148) : inst_31139.call(null,inst_31148));
var state_31193__$1 = (function (){var statearr_31211 = state_31193;
(statearr_31211[(11)] = inst_31164__$1);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31164__$1)){
var statearr_31212_33211 = state_31193__$1;
(statearr_31212_33211[(1)] = (29));

} else {
var statearr_31216_33212 = state_31193__$1;
(statearr_31216_33212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (4))){
var inst_31106 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31106)){
var statearr_31220_33213 = state_31193__$1;
(statearr_31220_33213[(1)] = (8));

} else {
var statearr_31222_33214 = state_31193__$1;
(statearr_31222_33214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (15))){
var inst_31133 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31133)){
var statearr_31223_33219 = state_31193__$1;
(statearr_31223_33219[(1)] = (19));

} else {
var statearr_31224_33220 = state_31193__$1;
(statearr_31224_33220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (21))){
var inst_31138 = (state_31193[(12)]);
var inst_31138__$1 = (state_31193[(2)]);
var inst_31139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31138__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31138__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31138__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31193__$1 = (function (){var statearr_31228 = state_31193;
(statearr_31228[(13)] = inst_31140);

(statearr_31228[(9)] = inst_31139);

(statearr_31228[(12)] = inst_31138__$1);

return statearr_31228;
})();
return cljs.core.async.ioc_alts_BANG_(state_31193__$1,(22),inst_31141);
} else {
if((state_val_31194 === (31))){
var inst_31175 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31175)){
var statearr_31241_33234 = state_31193__$1;
(statearr_31241_33234[(1)] = (32));

} else {
var statearr_31242_33246 = state_31193__$1;
(statearr_31242_33246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (32))){
var inst_31147 = (state_31193[(14)]);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31193__$1,(35),out,inst_31147);
} else {
if((state_val_31194 === (33))){
var inst_31138 = (state_31193[(12)]);
var inst_31115 = inst_31138;
var state_31193__$1 = (function (){var statearr_31244 = state_31193;
(statearr_31244[(7)] = inst_31115);

return statearr_31244;
})();
var statearr_31245_33247 = state_31193__$1;
(statearr_31245_33247[(2)] = null);

(statearr_31245_33247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (13))){
var inst_31115 = (state_31193[(7)]);
var inst_31122 = inst_31115.cljs$lang$protocol_mask$partition0$;
var inst_31123 = (inst_31122 & (64));
var inst_31124 = inst_31115.cljs$core$ISeq$;
var inst_31125 = (cljs.core.PROTOCOL_SENTINEL === inst_31124);
var inst_31126 = ((inst_31123) || (inst_31125));
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31126)){
var statearr_31246_33248 = state_31193__$1;
(statearr_31246_33248[(1)] = (16));

} else {
var statearr_31247_33249 = state_31193__$1;
(statearr_31247_33249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (22))){
var inst_31147 = (state_31193[(14)]);
var inst_31148 = (state_31193[(10)]);
var inst_31146 = (state_31193[(2)]);
var inst_31147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31146,(0),null);
var inst_31148__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31146,(1),null);
var inst_31149 = (inst_31147__$1 == null);
var inst_31150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31148__$1,change);
var inst_31151 = ((inst_31149) || (inst_31150));
var state_31193__$1 = (function (){var statearr_31248 = state_31193;
(statearr_31248[(14)] = inst_31147__$1);

(statearr_31248[(10)] = inst_31148__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31249_33251 = state_31193__$1;
(statearr_31249_33251[(1)] = (23));

} else {
var statearr_31251_33252 = state_31193__$1;
(statearr_31251_33252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (36))){
var inst_31138 = (state_31193[(12)]);
var inst_31115 = inst_31138;
var state_31193__$1 = (function (){var statearr_31252 = state_31193;
(statearr_31252[(7)] = inst_31115);

return statearr_31252;
})();
var statearr_31253_33259 = state_31193__$1;
(statearr_31253_33259[(2)] = null);

(statearr_31253_33259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (29))){
var inst_31164 = (state_31193[(11)]);
var state_31193__$1 = state_31193;
var statearr_31254_33260 = state_31193__$1;
(statearr_31254_33260[(2)] = inst_31164);

(statearr_31254_33260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (6))){
var state_31193__$1 = state_31193;
var statearr_31255_33261 = state_31193__$1;
(statearr_31255_33261[(2)] = false);

(statearr_31255_33261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (28))){
var inst_31158 = (state_31193[(2)]);
var inst_31159 = calc_state();
var inst_31115 = inst_31159;
var state_31193__$1 = (function (){var statearr_31261 = state_31193;
(statearr_31261[(7)] = inst_31115);

(statearr_31261[(15)] = inst_31158);

return statearr_31261;
})();
var statearr_31263_33262 = state_31193__$1;
(statearr_31263_33262[(2)] = null);

(statearr_31263_33262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (25))){
var inst_31189 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31264_33263 = state_31193__$1;
(statearr_31264_33263[(2)] = inst_31189);

(statearr_31264_33263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (34))){
var inst_31187 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31265_33265 = state_31193__$1;
(statearr_31265_33265[(2)] = inst_31187);

(statearr_31265_33265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (17))){
var state_31193__$1 = state_31193;
var statearr_31269_33266 = state_31193__$1;
(statearr_31269_33266[(2)] = false);

(statearr_31269_33266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (3))){
var state_31193__$1 = state_31193;
var statearr_31270_33267 = state_31193__$1;
(statearr_31270_33267[(2)] = false);

(statearr_31270_33267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (12))){
var inst_31191 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31193__$1,inst_31191);
} else {
if((state_val_31194 === (2))){
var inst_31090 = (state_31193[(8)]);
var inst_31095 = inst_31090.cljs$lang$protocol_mask$partition0$;
var inst_31096 = (inst_31095 & (64));
var inst_31097 = inst_31090.cljs$core$ISeq$;
var inst_31098 = (cljs.core.PROTOCOL_SENTINEL === inst_31097);
var inst_31099 = ((inst_31096) || (inst_31098));
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31099)){
var statearr_31271_33270 = state_31193__$1;
(statearr_31271_33270[(1)] = (5));

} else {
var statearr_31272_33271 = state_31193__$1;
(statearr_31272_33271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (23))){
var inst_31147 = (state_31193[(14)]);
var inst_31153 = (inst_31147 == null);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31153)){
var statearr_31281_33272 = state_31193__$1;
(statearr_31281_33272[(1)] = (26));

} else {
var statearr_31282_33273 = state_31193__$1;
(statearr_31282_33273[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (35))){
var inst_31178 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31178)){
var statearr_31289_33274 = state_31193__$1;
(statearr_31289_33274[(1)] = (36));

} else {
var statearr_31290_33275 = state_31193__$1;
(statearr_31290_33275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (19))){
var inst_31115 = (state_31193[(7)]);
var inst_31135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31115);
var state_31193__$1 = state_31193;
var statearr_31291_33276 = state_31193__$1;
(statearr_31291_33276[(2)] = inst_31135);

(statearr_31291_33276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (11))){
var inst_31115 = (state_31193[(7)]);
var inst_31119 = (inst_31115 == null);
var inst_31120 = cljs.core.not(inst_31119);
var state_31193__$1 = state_31193;
if(inst_31120){
var statearr_31296_33277 = state_31193__$1;
(statearr_31296_33277[(1)] = (13));

} else {
var statearr_31297_33278 = state_31193__$1;
(statearr_31297_33278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (9))){
var inst_31090 = (state_31193[(8)]);
var state_31193__$1 = state_31193;
var statearr_31298_33280 = state_31193__$1;
(statearr_31298_33280[(2)] = inst_31090);

(statearr_31298_33280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (5))){
var state_31193__$1 = state_31193;
var statearr_31299_33294 = state_31193__$1;
(statearr_31299_33294[(2)] = true);

(statearr_31299_33294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (14))){
var state_31193__$1 = state_31193;
var statearr_31300_33295 = state_31193__$1;
(statearr_31300_33295[(2)] = false);

(statearr_31300_33295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (26))){
var inst_31148 = (state_31193[(10)]);
var inst_31155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31148);
var state_31193__$1 = state_31193;
var statearr_31301_33296 = state_31193__$1;
(statearr_31301_33296[(2)] = inst_31155);

(statearr_31301_33296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (16))){
var state_31193__$1 = state_31193;
var statearr_31302_33297 = state_31193__$1;
(statearr_31302_33297[(2)] = true);

(statearr_31302_33297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (38))){
var inst_31183 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31303_33298 = state_31193__$1;
(statearr_31303_33298[(2)] = inst_31183);

(statearr_31303_33298[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (30))){
var inst_31140 = (state_31193[(13)]);
var inst_31139 = (state_31193[(9)]);
var inst_31148 = (state_31193[(10)]);
var inst_31170 = cljs.core.empty_QMARK_(inst_31139);
var inst_31171 = (inst_31140.cljs$core$IFn$_invoke$arity$1 ? inst_31140.cljs$core$IFn$_invoke$arity$1(inst_31148) : inst_31140.call(null,inst_31148));
var inst_31172 = cljs.core.not(inst_31171);
var inst_31173 = ((inst_31170) && (inst_31172));
var state_31193__$1 = state_31193;
var statearr_31306_33302 = state_31193__$1;
(statearr_31306_33302[(2)] = inst_31173);

(statearr_31306_33302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (10))){
var inst_31090 = (state_31193[(8)]);
var inst_31111 = (state_31193[(2)]);
var inst_31112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31111,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31115 = inst_31090;
var state_31193__$1 = (function (){var statearr_31313 = state_31193;
(statearr_31313[(7)] = inst_31115);

(statearr_31313[(16)] = inst_31112);

(statearr_31313[(17)] = inst_31114);

(statearr_31313[(18)] = inst_31113);

return statearr_31313;
})();
var statearr_31316_33304 = state_31193__$1;
(statearr_31316_33304[(2)] = null);

(statearr_31316_33304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (18))){
var inst_31130 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31317_33307 = state_31193__$1;
(statearr_31317_33307[(2)] = inst_31130);

(statearr_31317_33307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (37))){
var state_31193__$1 = state_31193;
var statearr_31318_33310 = state_31193__$1;
(statearr_31318_33310[(2)] = null);

(statearr_31318_33310[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (8))){
var inst_31090 = (state_31193[(8)]);
var inst_31108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31090);
var state_31193__$1 = state_31193;
var statearr_31322_33311 = state_31193__$1;
(statearr_31322_33311[(2)] = inst_31108);

(statearr_31322_33311[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29566__auto__ = null;
var cljs$core$async$mix_$_state_machine__29566__auto____0 = (function (){
var statearr_31323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31323[(0)] = cljs$core$async$mix_$_state_machine__29566__auto__);

(statearr_31323[(1)] = (1));

return statearr_31323;
});
var cljs$core$async$mix_$_state_machine__29566__auto____1 = (function (state_31193){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31193);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31325){var ex__29569__auto__ = e31325;
var statearr_31326_33313 = state_31193;
(statearr_31326_33313[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31193[(4)]))){
var statearr_31327_33314 = state_31193;
(statearr_31327_33314[(1)] = cljs.core.first((state_31193[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33315 = state_31193;
state_31193 = G__33315;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29566__auto__ = function(state_31193){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29566__auto____1.call(this,state_31193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29566__auto____0;
cljs$core$async$mix_$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29566__auto____1;
return cljs$core$async$mix_$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31328 = f__29670__auto__();
(statearr_31328[(6)] = c__29669__auto___33194);

return statearr_31328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33318 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33318(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33328 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33328(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33332 = (function() {
var G__33333 = null;
var G__33333__1 = (function (p){
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
var G__33333__2 = (function (p,v){
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
G__33333 = function(p,v){
switch(arguments.length){
case 1:
return G__33333__1.call(this,p);
case 2:
return G__33333__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33333.cljs$core$IFn$_invoke$arity$1 = G__33333__1;
G__33333.cljs$core$IFn$_invoke$arity$2 = G__33333__2;
return G__33333;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31352 = arguments.length;
switch (G__31352) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33332(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33332(p,v);
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
var G__31360 = arguments.length;
switch (G__31360) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31358_SHARP_){
if(cljs.core.truth_((p1__31358_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31358_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31358_SHARP_.call(null,topic)))){
return p1__31358_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31358_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31364 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31365){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31365 = meta31365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31366,meta31365__$1){
var self__ = this;
var _31366__$1 = this;
return (new cljs.core.async.t_cljs$core$async31364(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31365__$1));
}));

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31366){
var self__ = this;
var _31366__$1 = this;
return self__.meta31365;
}));

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31365","meta31365",1834147686,null)], null);
}));

(cljs.core.async.t_cljs$core$async31364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31364");

(cljs.core.async.t_cljs$core$async31364.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31364.
 */
cljs.core.async.__GT_t_cljs$core$async31364 = (function cljs$core$async$__GT_t_cljs$core$async31364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31365){
return (new cljs.core.async.t_cljs$core$async31364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31365));
});

}

return (new cljs.core.async.t_cljs$core$async31364(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29669__auto___33345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31449){
var state_val_31450 = (state_31449[(1)]);
if((state_val_31450 === (7))){
var inst_31445 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31451_33347 = state_31449__$1;
(statearr_31451_33347[(2)] = inst_31445);

(statearr_31451_33347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (20))){
var state_31449__$1 = state_31449;
var statearr_31452_33353 = state_31449__$1;
(statearr_31452_33353[(2)] = null);

(statearr_31452_33353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (1))){
var state_31449__$1 = state_31449;
var statearr_31453_33354 = state_31449__$1;
(statearr_31453_33354[(2)] = null);

(statearr_31453_33354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (24))){
var inst_31428 = (state_31449[(7)]);
var inst_31437 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31428);
var state_31449__$1 = state_31449;
var statearr_31458_33355 = state_31449__$1;
(statearr_31458_33355[(2)] = inst_31437);

(statearr_31458_33355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (4))){
var inst_31380 = (state_31449[(8)]);
var inst_31380__$1 = (state_31449[(2)]);
var inst_31381 = (inst_31380__$1 == null);
var state_31449__$1 = (function (){var statearr_31459 = state_31449;
(statearr_31459[(8)] = inst_31380__$1);

return statearr_31459;
})();
if(cljs.core.truth_(inst_31381)){
var statearr_31461_33356 = state_31449__$1;
(statearr_31461_33356[(1)] = (5));

} else {
var statearr_31463_33357 = state_31449__$1;
(statearr_31463_33357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (15))){
var inst_31422 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31465_33358 = state_31449__$1;
(statearr_31465_33358[(2)] = inst_31422);

(statearr_31465_33358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (21))){
var inst_31442 = (state_31449[(2)]);
var state_31449__$1 = (function (){var statearr_31466 = state_31449;
(statearr_31466[(9)] = inst_31442);

return statearr_31466;
})();
var statearr_31467_33360 = state_31449__$1;
(statearr_31467_33360[(2)] = null);

(statearr_31467_33360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (13))){
var inst_31404 = (state_31449[(10)]);
var inst_31406 = cljs.core.chunked_seq_QMARK_(inst_31404);
var state_31449__$1 = state_31449;
if(inst_31406){
var statearr_31468_33378 = state_31449__$1;
(statearr_31468_33378[(1)] = (16));

} else {
var statearr_31469_33380 = state_31449__$1;
(statearr_31469_33380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (22))){
var inst_31434 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
if(cljs.core.truth_(inst_31434)){
var statearr_31470_33381 = state_31449__$1;
(statearr_31470_33381[(1)] = (23));

} else {
var statearr_31471_33386 = state_31449__$1;
(statearr_31471_33386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (6))){
var inst_31380 = (state_31449[(8)]);
var inst_31430 = (state_31449[(11)]);
var inst_31428 = (state_31449[(7)]);
var inst_31428__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31380) : topic_fn.call(null,inst_31380));
var inst_31429 = cljs.core.deref(mults);
var inst_31430__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31429,inst_31428__$1);
var state_31449__$1 = (function (){var statearr_31473 = state_31449;
(statearr_31473[(11)] = inst_31430__$1);

(statearr_31473[(7)] = inst_31428__$1);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31430__$1)){
var statearr_31474_33389 = state_31449__$1;
(statearr_31474_33389[(1)] = (19));

} else {
var statearr_31475_33390 = state_31449__$1;
(statearr_31475_33390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (25))){
var inst_31439 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31476_33391 = state_31449__$1;
(statearr_31476_33391[(2)] = inst_31439);

(statearr_31476_33391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (17))){
var inst_31404 = (state_31449[(10)]);
var inst_31413 = cljs.core.first(inst_31404);
var inst_31414 = cljs.core.async.muxch_STAR_(inst_31413);
var inst_31415 = cljs.core.async.close_BANG_(inst_31414);
var inst_31416 = cljs.core.next(inst_31404);
var inst_31390 = inst_31416;
var inst_31391 = null;
var inst_31392 = (0);
var inst_31393 = (0);
var state_31449__$1 = (function (){var statearr_31477 = state_31449;
(statearr_31477[(12)] = inst_31392);

(statearr_31477[(13)] = inst_31393);

(statearr_31477[(14)] = inst_31390);

(statearr_31477[(15)] = inst_31391);

(statearr_31477[(16)] = inst_31415);

return statearr_31477;
})();
var statearr_31479_33394 = state_31449__$1;
(statearr_31479_33394[(2)] = null);

(statearr_31479_33394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (3))){
var inst_31447 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31449__$1,inst_31447);
} else {
if((state_val_31450 === (12))){
var inst_31424 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31480_33399 = state_31449__$1;
(statearr_31480_33399[(2)] = inst_31424);

(statearr_31480_33399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (2))){
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31449__$1,(4),ch);
} else {
if((state_val_31450 === (23))){
var state_31449__$1 = state_31449;
var statearr_31481_33405 = state_31449__$1;
(statearr_31481_33405[(2)] = null);

(statearr_31481_33405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (19))){
var inst_31380 = (state_31449[(8)]);
var inst_31430 = (state_31449[(11)]);
var inst_31432 = cljs.core.async.muxch_STAR_(inst_31430);
var state_31449__$1 = state_31449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31449__$1,(22),inst_31432,inst_31380);
} else {
if((state_val_31450 === (11))){
var inst_31390 = (state_31449[(14)]);
var inst_31404 = (state_31449[(10)]);
var inst_31404__$1 = cljs.core.seq(inst_31390);
var state_31449__$1 = (function (){var statearr_31482 = state_31449;
(statearr_31482[(10)] = inst_31404__$1);

return statearr_31482;
})();
if(inst_31404__$1){
var statearr_31483_33410 = state_31449__$1;
(statearr_31483_33410[(1)] = (13));

} else {
var statearr_31484_33415 = state_31449__$1;
(statearr_31484_33415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (9))){
var inst_31426 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31485_33416 = state_31449__$1;
(statearr_31485_33416[(2)] = inst_31426);

(statearr_31485_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (5))){
var inst_31387 = cljs.core.deref(mults);
var inst_31388 = cljs.core.vals(inst_31387);
var inst_31389 = cljs.core.seq(inst_31388);
var inst_31390 = inst_31389;
var inst_31391 = null;
var inst_31392 = (0);
var inst_31393 = (0);
var state_31449__$1 = (function (){var statearr_31492 = state_31449;
(statearr_31492[(12)] = inst_31392);

(statearr_31492[(13)] = inst_31393);

(statearr_31492[(14)] = inst_31390);

(statearr_31492[(15)] = inst_31391);

return statearr_31492;
})();
var statearr_31493_33421 = state_31449__$1;
(statearr_31493_33421[(2)] = null);

(statearr_31493_33421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (14))){
var state_31449__$1 = state_31449;
var statearr_31501_33427 = state_31449__$1;
(statearr_31501_33427[(2)] = null);

(statearr_31501_33427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (16))){
var inst_31404 = (state_31449[(10)]);
var inst_31408 = cljs.core.chunk_first(inst_31404);
var inst_31409 = cljs.core.chunk_rest(inst_31404);
var inst_31410 = cljs.core.count(inst_31408);
var inst_31390 = inst_31409;
var inst_31391 = inst_31408;
var inst_31392 = inst_31410;
var inst_31393 = (0);
var state_31449__$1 = (function (){var statearr_31504 = state_31449;
(statearr_31504[(12)] = inst_31392);

(statearr_31504[(13)] = inst_31393);

(statearr_31504[(14)] = inst_31390);

(statearr_31504[(15)] = inst_31391);

return statearr_31504;
})();
var statearr_31506_33438 = state_31449__$1;
(statearr_31506_33438[(2)] = null);

(statearr_31506_33438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (10))){
var inst_31392 = (state_31449[(12)]);
var inst_31393 = (state_31449[(13)]);
var inst_31390 = (state_31449[(14)]);
var inst_31391 = (state_31449[(15)]);
var inst_31398 = cljs.core._nth(inst_31391,inst_31393);
var inst_31399 = cljs.core.async.muxch_STAR_(inst_31398);
var inst_31400 = cljs.core.async.close_BANG_(inst_31399);
var inst_31401 = (inst_31393 + (1));
var tmp31498 = inst_31392;
var tmp31499 = inst_31390;
var tmp31500 = inst_31391;
var inst_31390__$1 = tmp31499;
var inst_31391__$1 = tmp31500;
var inst_31392__$1 = tmp31498;
var inst_31393__$1 = inst_31401;
var state_31449__$1 = (function (){var statearr_31510 = state_31449;
(statearr_31510[(12)] = inst_31392__$1);

(statearr_31510[(13)] = inst_31393__$1);

(statearr_31510[(14)] = inst_31390__$1);

(statearr_31510[(15)] = inst_31391__$1);

(statearr_31510[(17)] = inst_31400);

return statearr_31510;
})();
var statearr_31515_33443 = state_31449__$1;
(statearr_31515_33443[(2)] = null);

(statearr_31515_33443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (18))){
var inst_31419 = (state_31449[(2)]);
var state_31449__$1 = state_31449;
var statearr_31518_33444 = state_31449__$1;
(statearr_31518_33444[(2)] = inst_31419);

(statearr_31518_33444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31450 === (8))){
var inst_31392 = (state_31449[(12)]);
var inst_31393 = (state_31449[(13)]);
var inst_31395 = (inst_31393 < inst_31392);
var inst_31396 = inst_31395;
var state_31449__$1 = state_31449;
if(cljs.core.truth_(inst_31396)){
var statearr_31520_33448 = state_31449__$1;
(statearr_31520_33448[(1)] = (10));

} else {
var statearr_31524_33450 = state_31449__$1;
(statearr_31524_33450[(1)] = (11));

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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_31525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31525[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_31525[(1)] = (1));

return statearr_31525;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_31449){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31449);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31526){var ex__29569__auto__ = e31526;
var statearr_31527_33452 = state_31449;
(statearr_31527_33452[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31449[(4)]))){
var statearr_31528_33453 = state_31449;
(statearr_31528_33453[(1)] = cljs.core.first((state_31449[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33454 = state_31449;
state_31449 = G__33454;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_31449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_31449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31529 = f__29670__auto__();
(statearr_31529[(6)] = c__29669__auto___33345);

return statearr_31529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var G__31531 = arguments.length;
switch (G__31531) {
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
var G__31547 = arguments.length;
switch (G__31547) {
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
var G__31552 = arguments.length;
switch (G__31552) {
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
var c__29669__auto___33490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (7))){
var state_31608__$1 = state_31608;
var statearr_31614_33499 = state_31608__$1;
(statearr_31614_33499[(2)] = null);

(statearr_31614_33499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (1))){
var state_31608__$1 = state_31608;
var statearr_31615_33502 = state_31608__$1;
(statearr_31615_33502[(2)] = null);

(statearr_31615_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (4))){
var inst_31559 = (state_31608[(7)]);
var inst_31560 = (state_31608[(8)]);
var inst_31562 = (inst_31560 < inst_31559);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31562)){
var statearr_31616_33513 = state_31608__$1;
(statearr_31616_33513[(1)] = (6));

} else {
var statearr_31617_33518 = state_31608__$1;
(statearr_31617_33518[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (15))){
var inst_31585 = (state_31608[(9)]);
var inst_31590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31585);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31608__$1,(17),out,inst_31590);
} else {
if((state_val_31609 === (13))){
var inst_31585 = (state_31608[(9)]);
var inst_31585__$1 = (state_31608[(2)]);
var inst_31586 = cljs.core.some(cljs.core.nil_QMARK_,inst_31585__$1);
var state_31608__$1 = (function (){var statearr_31618 = state_31608;
(statearr_31618[(9)] = inst_31585__$1);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31586)){
var statearr_31619_33534 = state_31608__$1;
(statearr_31619_33534[(1)] = (14));

} else {
var statearr_31620_33536 = state_31608__$1;
(statearr_31620_33536[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (6))){
var state_31608__$1 = state_31608;
var statearr_31621_33542 = state_31608__$1;
(statearr_31621_33542[(2)] = null);

(statearr_31621_33542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (17))){
var inst_31592 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31623 = state_31608;
(statearr_31623[(10)] = inst_31592);

return statearr_31623;
})();
var statearr_31624_33550 = state_31608__$1;
(statearr_31624_33550[(2)] = null);

(statearr_31624_33550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (3))){
var inst_31600 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31608__$1,inst_31600);
} else {
if((state_val_31609 === (12))){
var _ = (function (){var statearr_31630 = state_31608;
(statearr_31630[(4)] = cljs.core.rest((state_31608[(4)])));

return statearr_31630;
})();
var state_31608__$1 = state_31608;
var ex31622 = (state_31608__$1[(2)]);
var statearr_31635_33564 = state_31608__$1;
(statearr_31635_33564[(5)] = ex31622);


if((ex31622 instanceof Object)){
var statearr_31636_33565 = state_31608__$1;
(statearr_31636_33565[(1)] = (11));

(statearr_31636_33565[(5)] = null);

} else {
throw ex31622;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (2))){
var inst_31558 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31559 = cnt;
var inst_31560 = (0);
var state_31608__$1 = (function (){var statearr_31641 = state_31608;
(statearr_31641[(11)] = inst_31558);

(statearr_31641[(7)] = inst_31559);

(statearr_31641[(8)] = inst_31560);

return statearr_31641;
})();
var statearr_31642_33578 = state_31608__$1;
(statearr_31642_33578[(2)] = null);

(statearr_31642_33578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (11))){
var inst_31564 = (state_31608[(2)]);
var inst_31565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31608__$1 = (function (){var statearr_31643 = state_31608;
(statearr_31643[(12)] = inst_31564);

return statearr_31643;
})();
var statearr_31644_33579 = state_31608__$1;
(statearr_31644_33579[(2)] = inst_31565);

(statearr_31644_33579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (9))){
var inst_31560 = (state_31608[(8)]);
var _ = (function (){var statearr_31645 = state_31608;
(statearr_31645[(4)] = cljs.core.cons((12),(state_31608[(4)])));

return statearr_31645;
})();
var inst_31571 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31560) : chs__$1.call(null,inst_31560));
var inst_31572 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31560) : done.call(null,inst_31560));
var inst_31573 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31571,inst_31572);
var ___$1 = (function (){var statearr_31646 = state_31608;
(statearr_31646[(4)] = cljs.core.rest((state_31608[(4)])));

return statearr_31646;
})();
var state_31608__$1 = state_31608;
var statearr_31647_33611 = state_31608__$1;
(statearr_31647_33611[(2)] = inst_31573);

(statearr_31647_33611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (5))){
var inst_31583 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31648 = state_31608;
(statearr_31648[(13)] = inst_31583);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31608__$1,(13),dchan);
} else {
if((state_val_31609 === (14))){
var inst_31588 = cljs.core.async.close_BANG_(out);
var state_31608__$1 = state_31608;
var statearr_31649_33612 = state_31608__$1;
(statearr_31649_33612[(2)] = inst_31588);

(statearr_31649_33612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (16))){
var inst_31595 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31657_33613 = state_31608__$1;
(statearr_31657_33613[(2)] = inst_31595);

(statearr_31657_33613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (10))){
var inst_31560 = (state_31608[(8)]);
var inst_31576 = (state_31608[(2)]);
var inst_31577 = (inst_31560 + (1));
var inst_31560__$1 = inst_31577;
var state_31608__$1 = (function (){var statearr_31663 = state_31608;
(statearr_31663[(14)] = inst_31576);

(statearr_31663[(8)] = inst_31560__$1);

return statearr_31663;
})();
var statearr_31664_33614 = state_31608__$1;
(statearr_31664_33614[(2)] = null);

(statearr_31664_33614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (8))){
var inst_31581 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31665_33615 = state_31608__$1;
(statearr_31665_33615[(2)] = inst_31581);

(statearr_31665_33615[(1)] = (5));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_31608){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31608);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31668){var ex__29569__auto__ = e31668;
var statearr_31669_33617 = state_31608;
(statearr_31669_33617[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31608[(4)]))){
var statearr_31670_33618 = state_31608;
(statearr_31670_33618[(1)] = cljs.core.first((state_31608[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33619 = state_31608;
state_31608 = G__33619;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31671 = f__29670__auto__();
(statearr_31671[(6)] = c__29669__auto___33490);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var G__31675 = arguments.length;
switch (G__31675) {
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
var c__29669__auto___33623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31716){
var state_val_31717 = (state_31716[(1)]);
if((state_val_31717 === (7))){
var inst_31691 = (state_31716[(7)]);
var inst_31692 = (state_31716[(8)]);
var inst_31691__$1 = (state_31716[(2)]);
var inst_31692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31691__$1,(0),null);
var inst_31697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31691__$1,(1),null);
var inst_31698 = (inst_31692__$1 == null);
var state_31716__$1 = (function (){var statearr_31719 = state_31716;
(statearr_31719[(7)] = inst_31691__$1);

(statearr_31719[(9)] = inst_31697);

(statearr_31719[(8)] = inst_31692__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31698)){
var statearr_31720_33627 = state_31716__$1;
(statearr_31720_33627[(1)] = (8));

} else {
var statearr_31723_33628 = state_31716__$1;
(statearr_31723_33628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (1))){
var inst_31680 = cljs.core.vec(chs);
var inst_31681 = inst_31680;
var state_31716__$1 = (function (){var statearr_31725 = state_31716;
(statearr_31725[(10)] = inst_31681);

return statearr_31725;
})();
var statearr_31727_33629 = state_31716__$1;
(statearr_31727_33629[(2)] = null);

(statearr_31727_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (4))){
var inst_31681 = (state_31716[(10)]);
var state_31716__$1 = state_31716;
return cljs.core.async.ioc_alts_BANG_(state_31716__$1,(7),inst_31681);
} else {
if((state_val_31717 === (6))){
var inst_31712 = (state_31716[(2)]);
var state_31716__$1 = state_31716;
var statearr_31732_33639 = state_31716__$1;
(statearr_31732_33639[(2)] = inst_31712);

(statearr_31732_33639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (3))){
var inst_31714 = (state_31716[(2)]);
var state_31716__$1 = state_31716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31716__$1,inst_31714);
} else {
if((state_val_31717 === (2))){
var inst_31681 = (state_31716[(10)]);
var inst_31683 = cljs.core.count(inst_31681);
var inst_31684 = (inst_31683 > (0));
var state_31716__$1 = state_31716;
if(cljs.core.truth_(inst_31684)){
var statearr_31734_33641 = state_31716__$1;
(statearr_31734_33641[(1)] = (4));

} else {
var statearr_31735_33642 = state_31716__$1;
(statearr_31735_33642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (11))){
var inst_31681 = (state_31716[(10)]);
var inst_31705 = (state_31716[(2)]);
var tmp31733 = inst_31681;
var inst_31681__$1 = tmp31733;
var state_31716__$1 = (function (){var statearr_31736 = state_31716;
(statearr_31736[(11)] = inst_31705);

(statearr_31736[(10)] = inst_31681__$1);

return statearr_31736;
})();
var statearr_31737_33646 = state_31716__$1;
(statearr_31737_33646[(2)] = null);

(statearr_31737_33646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (9))){
var inst_31692 = (state_31716[(8)]);
var state_31716__$1 = state_31716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31716__$1,(11),out,inst_31692);
} else {
if((state_val_31717 === (5))){
var inst_31710 = cljs.core.async.close_BANG_(out);
var state_31716__$1 = state_31716;
var statearr_31746_33647 = state_31716__$1;
(statearr_31746_33647[(2)] = inst_31710);

(statearr_31746_33647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (10))){
var inst_31708 = (state_31716[(2)]);
var state_31716__$1 = state_31716;
var statearr_31748_33651 = state_31716__$1;
(statearr_31748_33651[(2)] = inst_31708);

(statearr_31748_33651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31717 === (8))){
var inst_31691 = (state_31716[(7)]);
var inst_31697 = (state_31716[(9)]);
var inst_31681 = (state_31716[(10)]);
var inst_31692 = (state_31716[(8)]);
var inst_31700 = (function (){var cs = inst_31681;
var vec__31687 = inst_31691;
var v = inst_31692;
var c = inst_31697;
return (function (p1__31672_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31672_SHARP_);
});
})();
var inst_31701 = cljs.core.filterv(inst_31700,inst_31681);
var inst_31681__$1 = inst_31701;
var state_31716__$1 = (function (){var statearr_31750 = state_31716;
(statearr_31750[(10)] = inst_31681__$1);

return statearr_31750;
})();
var statearr_31751_33665 = state_31716__$1;
(statearr_31751_33665[(2)] = null);

(statearr_31751_33665[(1)] = (2));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_31758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31758[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_31758[(1)] = (1));

return statearr_31758;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_31716){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31716);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31760){var ex__29569__auto__ = e31760;
var statearr_31761_33678 = state_31716;
(statearr_31761_33678[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31716[(4)]))){
var statearr_31764_33682 = state_31716;
(statearr_31764_33682[(1)] = cljs.core.first((state_31716[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33683 = state_31716;
state_31716 = G__33683;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_31716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_31716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31765 = f__29670__auto__();
(statearr_31765[(6)] = c__29669__auto___33623);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
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
var G__31775 = arguments.length;
switch (G__31775) {
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
var c__29669__auto___33685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31803){
var state_val_31804 = (state_31803[(1)]);
if((state_val_31804 === (7))){
var inst_31785 = (state_31803[(7)]);
var inst_31785__$1 = (state_31803[(2)]);
var inst_31786 = (inst_31785__$1 == null);
var inst_31787 = cljs.core.not(inst_31786);
var state_31803__$1 = (function (){var statearr_31806 = state_31803;
(statearr_31806[(7)] = inst_31785__$1);

return statearr_31806;
})();
if(inst_31787){
var statearr_31807_33726 = state_31803__$1;
(statearr_31807_33726[(1)] = (8));

} else {
var statearr_31808_33727 = state_31803__$1;
(statearr_31808_33727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (1))){
var inst_31780 = (0);
var state_31803__$1 = (function (){var statearr_31810 = state_31803;
(statearr_31810[(8)] = inst_31780);

return statearr_31810;
})();
var statearr_31812_33729 = state_31803__$1;
(statearr_31812_33729[(2)] = null);

(statearr_31812_33729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (4))){
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31803__$1,(7),ch);
} else {
if((state_val_31804 === (6))){
var inst_31798 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31815_33742 = state_31803__$1;
(statearr_31815_33742[(2)] = inst_31798);

(statearr_31815_33742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (3))){
var inst_31800 = (state_31803[(2)]);
var inst_31801 = cljs.core.async.close_BANG_(out);
var state_31803__$1 = (function (){var statearr_31818 = state_31803;
(statearr_31818[(9)] = inst_31800);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31803__$1,inst_31801);
} else {
if((state_val_31804 === (2))){
var inst_31780 = (state_31803[(8)]);
var inst_31782 = (inst_31780 < n);
var state_31803__$1 = state_31803;
if(cljs.core.truth_(inst_31782)){
var statearr_31821_33752 = state_31803__$1;
(statearr_31821_33752[(1)] = (4));

} else {
var statearr_31824_33753 = state_31803__$1;
(statearr_31824_33753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (11))){
var inst_31780 = (state_31803[(8)]);
var inst_31790 = (state_31803[(2)]);
var inst_31791 = (inst_31780 + (1));
var inst_31780__$1 = inst_31791;
var state_31803__$1 = (function (){var statearr_31827 = state_31803;
(statearr_31827[(8)] = inst_31780__$1);

(statearr_31827[(10)] = inst_31790);

return statearr_31827;
})();
var statearr_31830_33761 = state_31803__$1;
(statearr_31830_33761[(2)] = null);

(statearr_31830_33761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (9))){
var state_31803__$1 = state_31803;
var statearr_31833_33765 = state_31803__$1;
(statearr_31833_33765[(2)] = null);

(statearr_31833_33765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (5))){
var state_31803__$1 = state_31803;
var statearr_31834_33767 = state_31803__$1;
(statearr_31834_33767[(2)] = null);

(statearr_31834_33767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (10))){
var inst_31795 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31835_33771 = state_31803__$1;
(statearr_31835_33771[(2)] = inst_31795);

(statearr_31835_33771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (8))){
var inst_31785 = (state_31803[(7)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31803__$1,(11),out,inst_31785);
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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_31837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31837[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_31837[(1)] = (1));

return statearr_31837;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_31803){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31803);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e31841){var ex__29569__auto__ = e31841;
var statearr_31842_33774 = state_31803;
(statearr_31842_33774[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31803[(4)]))){
var statearr_31843_33775 = state_31803;
(statearr_31843_33775[(1)] = cljs.core.first((state_31803[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33776 = state_31803;
state_31803 = G__33776;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_31803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_31803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_31846 = f__29670__auto__();
(statearr_31846[(6)] = c__29669__auto___33685);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31855 = (function (f,ch,meta31856){
this.f = f;
this.ch = ch;
this.meta31856 = meta31856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31857,meta31856__$1){
var self__ = this;
var _31857__$1 = this;
return (new cljs.core.async.t_cljs$core$async31855(self__.f,self__.ch,meta31856__$1));
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31857){
var self__ = this;
var _31857__$1 = this;
return self__.meta31856;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31871 = (function (f,ch,meta31856,_,fn1,meta31872){
this.f = f;
this.ch = ch;
this.meta31856 = meta31856;
this._ = _;
this.fn1 = fn1;
this.meta31872 = meta31872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31873,meta31872__$1){
var self__ = this;
var _31873__$1 = this;
return (new cljs.core.async.t_cljs$core$async31871(self__.f,self__.ch,self__.meta31856,self__._,self__.fn1,meta31872__$1));
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31873){
var self__ = this;
var _31873__$1 = this;
return self__.meta31872;
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31851_SHARP_){
var G__31884 = (((p1__31851_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31851_SHARP_) : self__.f.call(null,p1__31851_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31884) : f1.call(null,G__31884));
});
}));

(cljs.core.async.t_cljs$core$async31871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31856","meta31856",511832241,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31855","cljs.core.async/t_cljs$core$async31855",391111565,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31872","meta31872",-1317787725,null)], null);
}));

(cljs.core.async.t_cljs$core$async31871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31871");

(cljs.core.async.t_cljs$core$async31871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31871.
 */
cljs.core.async.__GT_t_cljs$core$async31871 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31871(f__$1,ch__$1,meta31856__$1,___$2,fn1__$1,meta31872){
return (new cljs.core.async.t_cljs$core$async31871(f__$1,ch__$1,meta31856__$1,___$2,fn1__$1,meta31872));
});

}

return (new cljs.core.async.t_cljs$core$async31871(self__.f,self__.ch,self__.meta31856,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31897 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31897) : self__.f.call(null,G__31897));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31856","meta31856",511832241,null)], null);
}));

(cljs.core.async.t_cljs$core$async31855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31855");

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31855.
 */
cljs.core.async.__GT_t_cljs$core$async31855 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31855(f__$1,ch__$1,meta31856){
return (new cljs.core.async.t_cljs$core$async31855(f__$1,ch__$1,meta31856));
});

}

return (new cljs.core.async.t_cljs$core$async31855(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31906 = (function (f,ch,meta31907){
this.f = f;
this.ch = ch;
this.meta31907 = meta31907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31908,meta31907__$1){
var self__ = this;
var _31908__$1 = this;
return (new cljs.core.async.t_cljs$core$async31906(self__.f,self__.ch,meta31907__$1));
}));

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31908){
var self__ = this;
var _31908__$1 = this;
return self__.meta31907;
}));

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31907","meta31907",693886609,null)], null);
}));

(cljs.core.async.t_cljs$core$async31906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31906");

(cljs.core.async.t_cljs$core$async31906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31906.
 */
cljs.core.async.__GT_t_cljs$core$async31906 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31906(f__$1,ch__$1,meta31907){
return (new cljs.core.async.t_cljs$core$async31906(f__$1,ch__$1,meta31907));
});

}

return (new cljs.core.async.t_cljs$core$async31906(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async31927 = (function (p,ch,meta31928){
this.p = p;
this.ch = ch;
this.meta31928 = meta31928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31929,meta31928__$1){
var self__ = this;
var _31929__$1 = this;
return (new cljs.core.async.t_cljs$core$async31927(self__.p,self__.ch,meta31928__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31928","meta31928",1651569455,null)], null);
}));

(cljs.core.async.t_cljs$core$async31927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31927");

(cljs.core.async.t_cljs$core$async31927.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31927.
 */
cljs.core.async.__GT_t_cljs$core$async31927 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31927(p__$1,ch__$1,meta31928){
return (new cljs.core.async.t_cljs$core$async31927(p__$1,ch__$1,meta31928));
});

}

return (new cljs.core.async.t_cljs$core$async31927(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31938 = arguments.length;
switch (G__31938) {
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
var c__29669__auto___33808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_31965){
var state_val_31966 = (state_31965[(1)]);
if((state_val_31966 === (7))){
var inst_31961 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
var statearr_31967_33809 = state_31965__$1;
(statearr_31967_33809[(2)] = inst_31961);

(statearr_31967_33809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (1))){
var state_31965__$1 = state_31965;
var statearr_31968_33810 = state_31965__$1;
(statearr_31968_33810[(2)] = null);

(statearr_31968_33810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (4))){
var inst_31943 = (state_31965[(7)]);
var inst_31943__$1 = (state_31965[(2)]);
var inst_31944 = (inst_31943__$1 == null);
var state_31965__$1 = (function (){var statearr_31972 = state_31965;
(statearr_31972[(7)] = inst_31943__$1);

return statearr_31972;
})();
if(cljs.core.truth_(inst_31944)){
var statearr_31973_33811 = state_31965__$1;
(statearr_31973_33811[(1)] = (5));

} else {
var statearr_31974_33812 = state_31965__$1;
(statearr_31974_33812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (6))){
var inst_31943 = (state_31965[(7)]);
var inst_31948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31943) : p.call(null,inst_31943));
var state_31965__$1 = state_31965;
if(cljs.core.truth_(inst_31948)){
var statearr_31975_33813 = state_31965__$1;
(statearr_31975_33813[(1)] = (8));

} else {
var statearr_31976_33814 = state_31965__$1;
(statearr_31976_33814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (3))){
var inst_31963 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31965__$1,inst_31963);
} else {
if((state_val_31966 === (2))){
var state_31965__$1 = state_31965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31965__$1,(4),ch);
} else {
if((state_val_31966 === (11))){
var inst_31954 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
var statearr_31977_33823 = state_31965__$1;
(statearr_31977_33823[(2)] = inst_31954);

(statearr_31977_33823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (9))){
var state_31965__$1 = state_31965;
var statearr_31978_33826 = state_31965__$1;
(statearr_31978_33826[(2)] = null);

(statearr_31978_33826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (5))){
var inst_31946 = cljs.core.async.close_BANG_(out);
var state_31965__$1 = state_31965;
var statearr_31979_33827 = state_31965__$1;
(statearr_31979_33827[(2)] = inst_31946);

(statearr_31979_33827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (10))){
var inst_31957 = (state_31965[(2)]);
var state_31965__$1 = (function (){var statearr_31986 = state_31965;
(statearr_31986[(8)] = inst_31957);

return statearr_31986;
})();
var statearr_31987_33829 = state_31965__$1;
(statearr_31987_33829[(2)] = null);

(statearr_31987_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (8))){
var inst_31943 = (state_31965[(7)]);
var state_31965__$1 = state_31965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31965__$1,(11),out,inst_31943);
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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_31997 = [null,null,null,null,null,null,null,null,null];
(statearr_31997[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_31997[(1)] = (1));

return statearr_31997;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_31965){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_31965);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e32000){var ex__29569__auto__ = e32000;
var statearr_32001_33837 = state_31965;
(statearr_32001_33837[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_31965[(4)]))){
var statearr_32002_33838 = state_31965;
(statearr_32002_33838[(1)] = cljs.core.first((state_31965[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33839 = state_31965;
state_31965 = G__33839;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_31965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_31965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_32003 = f__29670__auto__();
(statearr_32003[(6)] = c__29669__auto___33808);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32044 = arguments.length;
switch (G__32044) {
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
var c__29669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_32113){
var state_val_32114 = (state_32113[(1)]);
if((state_val_32114 === (7))){
var inst_32109 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32150_33848 = state_32113__$1;
(statearr_32150_33848[(2)] = inst_32109);

(statearr_32150_33848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (20))){
var inst_32079 = (state_32113[(7)]);
var inst_32090 = (state_32113[(2)]);
var inst_32091 = cljs.core.next(inst_32079);
var inst_32064 = inst_32091;
var inst_32065 = null;
var inst_32066 = (0);
var inst_32067 = (0);
var state_32113__$1 = (function (){var statearr_32151 = state_32113;
(statearr_32151[(8)] = inst_32064);

(statearr_32151[(9)] = inst_32065);

(statearr_32151[(10)] = inst_32067);

(statearr_32151[(11)] = inst_32090);

(statearr_32151[(12)] = inst_32066);

return statearr_32151;
})();
var statearr_32155_33851 = state_32113__$1;
(statearr_32155_33851[(2)] = null);

(statearr_32155_33851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (1))){
var state_32113__$1 = state_32113;
var statearr_32166_33852 = state_32113__$1;
(statearr_32166_33852[(2)] = null);

(statearr_32166_33852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (4))){
var inst_32050 = (state_32113[(13)]);
var inst_32050__$1 = (state_32113[(2)]);
var inst_32051 = (inst_32050__$1 == null);
var state_32113__$1 = (function (){var statearr_32169 = state_32113;
(statearr_32169[(13)] = inst_32050__$1);

return statearr_32169;
})();
if(cljs.core.truth_(inst_32051)){
var statearr_32170_33883 = state_32113__$1;
(statearr_32170_33883[(1)] = (5));

} else {
var statearr_32171_33884 = state_32113__$1;
(statearr_32171_33884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (15))){
var state_32113__$1 = state_32113;
var statearr_32175_33885 = state_32113__$1;
(statearr_32175_33885[(2)] = null);

(statearr_32175_33885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (21))){
var state_32113__$1 = state_32113;
var statearr_32176_33886 = state_32113__$1;
(statearr_32176_33886[(2)] = null);

(statearr_32176_33886[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (13))){
var inst_32064 = (state_32113[(8)]);
var inst_32065 = (state_32113[(9)]);
var inst_32067 = (state_32113[(10)]);
var inst_32066 = (state_32113[(12)]);
var inst_32075 = (state_32113[(2)]);
var inst_32076 = (inst_32067 + (1));
var tmp32172 = inst_32064;
var tmp32173 = inst_32065;
var tmp32174 = inst_32066;
var inst_32064__$1 = tmp32172;
var inst_32065__$1 = tmp32173;
var inst_32066__$1 = tmp32174;
var inst_32067__$1 = inst_32076;
var state_32113__$1 = (function (){var statearr_32177 = state_32113;
(statearr_32177[(8)] = inst_32064__$1);

(statearr_32177[(9)] = inst_32065__$1);

(statearr_32177[(14)] = inst_32075);

(statearr_32177[(10)] = inst_32067__$1);

(statearr_32177[(12)] = inst_32066__$1);

return statearr_32177;
})();
var statearr_32178_33888 = state_32113__$1;
(statearr_32178_33888[(2)] = null);

(statearr_32178_33888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (22))){
var state_32113__$1 = state_32113;
var statearr_32179_33889 = state_32113__$1;
(statearr_32179_33889[(2)] = null);

(statearr_32179_33889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (6))){
var inst_32050 = (state_32113[(13)]);
var inst_32061 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32050) : f.call(null,inst_32050));
var inst_32062 = cljs.core.seq(inst_32061);
var inst_32064 = inst_32062;
var inst_32065 = null;
var inst_32066 = (0);
var inst_32067 = (0);
var state_32113__$1 = (function (){var statearr_32180 = state_32113;
(statearr_32180[(8)] = inst_32064);

(statearr_32180[(9)] = inst_32065);

(statearr_32180[(10)] = inst_32067);

(statearr_32180[(12)] = inst_32066);

return statearr_32180;
})();
var statearr_32181_33890 = state_32113__$1;
(statearr_32181_33890[(2)] = null);

(statearr_32181_33890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (17))){
var inst_32079 = (state_32113[(7)]);
var inst_32083 = cljs.core.chunk_first(inst_32079);
var inst_32084 = cljs.core.chunk_rest(inst_32079);
var inst_32085 = cljs.core.count(inst_32083);
var inst_32064 = inst_32084;
var inst_32065 = inst_32083;
var inst_32066 = inst_32085;
var inst_32067 = (0);
var state_32113__$1 = (function (){var statearr_32182 = state_32113;
(statearr_32182[(8)] = inst_32064);

(statearr_32182[(9)] = inst_32065);

(statearr_32182[(10)] = inst_32067);

(statearr_32182[(12)] = inst_32066);

return statearr_32182;
})();
var statearr_32183_33891 = state_32113__$1;
(statearr_32183_33891[(2)] = null);

(statearr_32183_33891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (3))){
var inst_32111 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32113__$1,inst_32111);
} else {
if((state_val_32114 === (12))){
var inst_32099 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32189_33897 = state_32113__$1;
(statearr_32189_33897[(2)] = inst_32099);

(statearr_32189_33897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (2))){
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32113__$1,(4),in$);
} else {
if((state_val_32114 === (23))){
var inst_32107 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32191_33906 = state_32113__$1;
(statearr_32191_33906[(2)] = inst_32107);

(statearr_32191_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (19))){
var inst_32094 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32192_33913 = state_32113__$1;
(statearr_32192_33913[(2)] = inst_32094);

(statearr_32192_33913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (11))){
var inst_32064 = (state_32113[(8)]);
var inst_32079 = (state_32113[(7)]);
var inst_32079__$1 = cljs.core.seq(inst_32064);
var state_32113__$1 = (function (){var statearr_32193 = state_32113;
(statearr_32193[(7)] = inst_32079__$1);

return statearr_32193;
})();
if(inst_32079__$1){
var statearr_32194_33920 = state_32113__$1;
(statearr_32194_33920[(1)] = (14));

} else {
var statearr_32195_33922 = state_32113__$1;
(statearr_32195_33922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (9))){
var inst_32101 = (state_32113[(2)]);
var inst_32102 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32113__$1 = (function (){var statearr_32198 = state_32113;
(statearr_32198[(15)] = inst_32101);

return statearr_32198;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32199_33923 = state_32113__$1;
(statearr_32199_33923[(1)] = (21));

} else {
var statearr_32200_33924 = state_32113__$1;
(statearr_32200_33924[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (5))){
var inst_32054 = cljs.core.async.close_BANG_(out);
var state_32113__$1 = state_32113;
var statearr_32202_33932 = state_32113__$1;
(statearr_32202_33932[(2)] = inst_32054);

(statearr_32202_33932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (14))){
var inst_32079 = (state_32113[(7)]);
var inst_32081 = cljs.core.chunked_seq_QMARK_(inst_32079);
var state_32113__$1 = state_32113;
if(inst_32081){
var statearr_32203_33933 = state_32113__$1;
(statearr_32203_33933[(1)] = (17));

} else {
var statearr_32204_33934 = state_32113__$1;
(statearr_32204_33934[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (16))){
var inst_32097 = (state_32113[(2)]);
var state_32113__$1 = state_32113;
var statearr_32205_33935 = state_32113__$1;
(statearr_32205_33935[(2)] = inst_32097);

(statearr_32205_33935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32114 === (10))){
var inst_32065 = (state_32113[(9)]);
var inst_32067 = (state_32113[(10)]);
var inst_32073 = cljs.core._nth(inst_32065,inst_32067);
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32113__$1,(13),out,inst_32073);
} else {
if((state_val_32114 === (18))){
var inst_32079 = (state_32113[(7)]);
var inst_32088 = cljs.core.first(inst_32079);
var state_32113__$1 = state_32113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32113__$1,(20),out,inst_32088);
} else {
if((state_val_32114 === (8))){
var inst_32067 = (state_32113[(10)]);
var inst_32066 = (state_32113[(12)]);
var inst_32070 = (inst_32067 < inst_32066);
var inst_32071 = inst_32070;
var state_32113__$1 = state_32113;
if(cljs.core.truth_(inst_32071)){
var statearr_32206_33939 = state_32113__$1;
(statearr_32206_33939[(1)] = (10));

} else {
var statearr_32209_33943 = state_32113__$1;
(statearr_32209_33943[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____0 = (function (){
var statearr_32212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32212[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__);

(statearr_32212[(1)] = (1));

return statearr_32212;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____1 = (function (state_32113){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_32113);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e32217){var ex__29569__auto__ = e32217;
var statearr_32218_33948 = state_32113;
(statearr_32218_33948[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_32113[(4)]))){
var statearr_32222_33950 = state_32113;
(statearr_32222_33950[(1)] = cljs.core.first((state_32113[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_32113;
state_32113 = G__33960;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__ = function(state_32113){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____1.call(this,state_32113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29566__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_32223 = f__29670__auto__();
(statearr_32223[(6)] = c__29669__auto__);

return statearr_32223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));

return c__29669__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32228 = arguments.length;
switch (G__32228) {
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
var G__32233 = arguments.length;
switch (G__32233) {
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
var G__32244 = arguments.length;
switch (G__32244) {
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
var c__29669__auto___34010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_32276){
var state_val_32277 = (state_32276[(1)]);
if((state_val_32277 === (7))){
var inst_32271 = (state_32276[(2)]);
var state_32276__$1 = state_32276;
var statearr_32279_34019 = state_32276__$1;
(statearr_32279_34019[(2)] = inst_32271);

(statearr_32279_34019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (1))){
var inst_32253 = null;
var state_32276__$1 = (function (){var statearr_32281 = state_32276;
(statearr_32281[(7)] = inst_32253);

return statearr_32281;
})();
var statearr_32283_34025 = state_32276__$1;
(statearr_32283_34025[(2)] = null);

(statearr_32283_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (4))){
var inst_32256 = (state_32276[(8)]);
var inst_32256__$1 = (state_32276[(2)]);
var inst_32257 = (inst_32256__$1 == null);
var inst_32258 = cljs.core.not(inst_32257);
var state_32276__$1 = (function (){var statearr_32286 = state_32276;
(statearr_32286[(8)] = inst_32256__$1);

return statearr_32286;
})();
if(inst_32258){
var statearr_32287_34039 = state_32276__$1;
(statearr_32287_34039[(1)] = (5));

} else {
var statearr_32288_34040 = state_32276__$1;
(statearr_32288_34040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (6))){
var state_32276__$1 = state_32276;
var statearr_32289_34045 = state_32276__$1;
(statearr_32289_34045[(2)] = null);

(statearr_32289_34045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (3))){
var inst_32273 = (state_32276[(2)]);
var inst_32274 = cljs.core.async.close_BANG_(out);
var state_32276__$1 = (function (){var statearr_32290 = state_32276;
(statearr_32290[(9)] = inst_32273);

return statearr_32290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32276__$1,inst_32274);
} else {
if((state_val_32277 === (2))){
var state_32276__$1 = state_32276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32276__$1,(4),ch);
} else {
if((state_val_32277 === (11))){
var inst_32256 = (state_32276[(8)]);
var inst_32265 = (state_32276[(2)]);
var inst_32253 = inst_32256;
var state_32276__$1 = (function (){var statearr_32293 = state_32276;
(statearr_32293[(7)] = inst_32253);

(statearr_32293[(10)] = inst_32265);

return statearr_32293;
})();
var statearr_32295_34050 = state_32276__$1;
(statearr_32295_34050[(2)] = null);

(statearr_32295_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (9))){
var inst_32256 = (state_32276[(8)]);
var state_32276__$1 = state_32276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32276__$1,(11),out,inst_32256);
} else {
if((state_val_32277 === (5))){
var inst_32253 = (state_32276[(7)]);
var inst_32256 = (state_32276[(8)]);
var inst_32260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32256,inst_32253);
var state_32276__$1 = state_32276;
if(inst_32260){
var statearr_32302_34058 = state_32276__$1;
(statearr_32302_34058[(1)] = (8));

} else {
var statearr_32306_34059 = state_32276__$1;
(statearr_32306_34059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (10))){
var inst_32268 = (state_32276[(2)]);
var state_32276__$1 = state_32276;
var statearr_32312_34062 = state_32276__$1;
(statearr_32312_34062[(2)] = inst_32268);

(statearr_32312_34062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32277 === (8))){
var inst_32253 = (state_32276[(7)]);
var tmp32298 = inst_32253;
var inst_32253__$1 = tmp32298;
var state_32276__$1 = (function (){var statearr_32314 = state_32276;
(statearr_32314[(7)] = inst_32253__$1);

return statearr_32314;
})();
var statearr_32315_34065 = state_32276__$1;
(statearr_32315_34065[(2)] = null);

(statearr_32315_34065[(1)] = (2));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_32316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32316[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_32316[(1)] = (1));

return statearr_32316;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_32276){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_32276);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e32317){var ex__29569__auto__ = e32317;
var statearr_32318_34077 = state_32276;
(statearr_32318_34077[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_32276[(4)]))){
var statearr_32319_34079 = state_32276;
(statearr_32319_34079[(1)] = cljs.core.first((state_32276[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34082 = state_32276;
state_32276 = G__34082;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_32276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_32276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_32320 = f__29670__auto__();
(statearr_32320[(6)] = c__29669__auto___34010);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32327 = arguments.length;
switch (G__32327) {
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
var c__29669__auto___34090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_32365){
var state_val_32366 = (state_32365[(1)]);
if((state_val_32366 === (7))){
var inst_32361 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32370_34091 = state_32365__$1;
(statearr_32370_34091[(2)] = inst_32361);

(statearr_32370_34091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (1))){
var inst_32328 = (new Array(n));
var inst_32329 = inst_32328;
var inst_32330 = (0);
var state_32365__$1 = (function (){var statearr_32373 = state_32365;
(statearr_32373[(7)] = inst_32330);

(statearr_32373[(8)] = inst_32329);

return statearr_32373;
})();
var statearr_32374_34094 = state_32365__$1;
(statearr_32374_34094[(2)] = null);

(statearr_32374_34094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (4))){
var inst_32333 = (state_32365[(9)]);
var inst_32333__$1 = (state_32365[(2)]);
var inst_32334 = (inst_32333__$1 == null);
var inst_32335 = cljs.core.not(inst_32334);
var state_32365__$1 = (function (){var statearr_32375 = state_32365;
(statearr_32375[(9)] = inst_32333__$1);

return statearr_32375;
})();
if(inst_32335){
var statearr_32376_34101 = state_32365__$1;
(statearr_32376_34101[(1)] = (5));

} else {
var statearr_32377_34107 = state_32365__$1;
(statearr_32377_34107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (15))){
var inst_32355 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32378_34108 = state_32365__$1;
(statearr_32378_34108[(2)] = inst_32355);

(statearr_32378_34108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (13))){
var state_32365__$1 = state_32365;
var statearr_32379_34109 = state_32365__$1;
(statearr_32379_34109[(2)] = null);

(statearr_32379_34109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (6))){
var inst_32330 = (state_32365[(7)]);
var inst_32351 = (inst_32330 > (0));
var state_32365__$1 = state_32365;
if(cljs.core.truth_(inst_32351)){
var statearr_32380_34114 = state_32365__$1;
(statearr_32380_34114[(1)] = (12));

} else {
var statearr_32381_34115 = state_32365__$1;
(statearr_32381_34115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (3))){
var inst_32363 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32365__$1,inst_32363);
} else {
if((state_val_32366 === (12))){
var inst_32329 = (state_32365[(8)]);
var inst_32353 = cljs.core.vec(inst_32329);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(15),out,inst_32353);
} else {
if((state_val_32366 === (2))){
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32365__$1,(4),ch);
} else {
if((state_val_32366 === (11))){
var inst_32345 = (state_32365[(2)]);
var inst_32346 = (new Array(n));
var inst_32329 = inst_32346;
var inst_32330 = (0);
var state_32365__$1 = (function (){var statearr_32382 = state_32365;
(statearr_32382[(10)] = inst_32345);

(statearr_32382[(7)] = inst_32330);

(statearr_32382[(8)] = inst_32329);

return statearr_32382;
})();
var statearr_32383_34126 = state_32365__$1;
(statearr_32383_34126[(2)] = null);

(statearr_32383_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (9))){
var inst_32329 = (state_32365[(8)]);
var inst_32343 = cljs.core.vec(inst_32329);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(11),out,inst_32343);
} else {
if((state_val_32366 === (5))){
var inst_32333 = (state_32365[(9)]);
var inst_32330 = (state_32365[(7)]);
var inst_32338 = (state_32365[(11)]);
var inst_32329 = (state_32365[(8)]);
var inst_32337 = (inst_32329[inst_32330] = inst_32333);
var inst_32338__$1 = (inst_32330 + (1));
var inst_32339 = (inst_32338__$1 < n);
var state_32365__$1 = (function (){var statearr_32384 = state_32365;
(statearr_32384[(12)] = inst_32337);

(statearr_32384[(11)] = inst_32338__$1);

return statearr_32384;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32385_34129 = state_32365__$1;
(statearr_32385_34129[(1)] = (8));

} else {
var statearr_32386_34134 = state_32365__$1;
(statearr_32386_34134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (14))){
var inst_32358 = (state_32365[(2)]);
var inst_32359 = cljs.core.async.close_BANG_(out);
var state_32365__$1 = (function (){var statearr_32388 = state_32365;
(statearr_32388[(13)] = inst_32358);

return statearr_32388;
})();
var statearr_32389_34135 = state_32365__$1;
(statearr_32389_34135[(2)] = inst_32359);

(statearr_32389_34135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (10))){
var inst_32349 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32390_34136 = state_32365__$1;
(statearr_32390_34136[(2)] = inst_32349);

(statearr_32390_34136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (8))){
var inst_32338 = (state_32365[(11)]);
var inst_32329 = (state_32365[(8)]);
var tmp32387 = inst_32329;
var inst_32329__$1 = tmp32387;
var inst_32330 = inst_32338;
var state_32365__$1 = (function (){var statearr_32391 = state_32365;
(statearr_32391[(7)] = inst_32330);

(statearr_32391[(8)] = inst_32329__$1);

return statearr_32391;
})();
var statearr_32392_34138 = state_32365__$1;
(statearr_32392_34138[(2)] = null);

(statearr_32392_34138[(1)] = (2));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32393[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_32365){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_32365);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e32394){var ex__29569__auto__ = e32394;
var statearr_32395_34144 = state_32365;
(statearr_32395_34144[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_32365[(4)]))){
var statearr_32396_34149 = state_32365;
(statearr_32396_34149[(1)] = cljs.core.first((state_32365[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34150 = state_32365;
state_32365 = G__34150;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_32365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_32365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_32402 = f__29670__auto__();
(statearr_32402[(6)] = c__29669__auto___34090);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32404 = arguments.length;
switch (G__32404) {
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
var c__29669__auto___34156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29670__auto__ = (function (){var switch__29565__auto__ = (function (state_32465){
var state_val_32466 = (state_32465[(1)]);
if((state_val_32466 === (7))){
var inst_32461 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32467_34157 = state_32465__$1;
(statearr_32467_34157[(2)] = inst_32461);

(statearr_32467_34157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (1))){
var inst_32412 = [];
var inst_32413 = inst_32412;
var inst_32414 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32465__$1 = (function (){var statearr_32468 = state_32465;
(statearr_32468[(7)] = inst_32414);

(statearr_32468[(8)] = inst_32413);

return statearr_32468;
})();
var statearr_32469_34173 = state_32465__$1;
(statearr_32469_34173[(2)] = null);

(statearr_32469_34173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (4))){
var inst_32417 = (state_32465[(9)]);
var inst_32417__$1 = (state_32465[(2)]);
var inst_32418 = (inst_32417__$1 == null);
var inst_32419 = cljs.core.not(inst_32418);
var state_32465__$1 = (function (){var statearr_32471 = state_32465;
(statearr_32471[(9)] = inst_32417__$1);

return statearr_32471;
})();
if(inst_32419){
var statearr_32472_34178 = state_32465__$1;
(statearr_32472_34178[(1)] = (5));

} else {
var statearr_32473_34193 = state_32465__$1;
(statearr_32473_34193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (15))){
var inst_32455 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32474_34198 = state_32465__$1;
(statearr_32474_34198[(2)] = inst_32455);

(statearr_32474_34198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (13))){
var state_32465__$1 = state_32465;
var statearr_32476_34200 = state_32465__$1;
(statearr_32476_34200[(2)] = null);

(statearr_32476_34200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (6))){
var inst_32413 = (state_32465[(8)]);
var inst_32450 = inst_32413.length;
var inst_32451 = (inst_32450 > (0));
var state_32465__$1 = state_32465;
if(cljs.core.truth_(inst_32451)){
var statearr_32477_34204 = state_32465__$1;
(statearr_32477_34204[(1)] = (12));

} else {
var statearr_32478_34205 = state_32465__$1;
(statearr_32478_34205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (3))){
var inst_32463 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32465__$1,inst_32463);
} else {
if((state_val_32466 === (12))){
var inst_32413 = (state_32465[(8)]);
var inst_32453 = cljs.core.vec(inst_32413);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32465__$1,(15),out,inst_32453);
} else {
if((state_val_32466 === (2))){
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32465__$1,(4),ch);
} else {
if((state_val_32466 === (11))){
var inst_32421 = (state_32465[(10)]);
var inst_32417 = (state_32465[(9)]);
var inst_32443 = (state_32465[(2)]);
var inst_32444 = [];
var inst_32445 = inst_32444.push(inst_32417);
var inst_32413 = inst_32444;
var inst_32414 = inst_32421;
var state_32465__$1 = (function (){var statearr_32481 = state_32465;
(statearr_32481[(7)] = inst_32414);

(statearr_32481[(11)] = inst_32443);

(statearr_32481[(12)] = inst_32445);

(statearr_32481[(8)] = inst_32413);

return statearr_32481;
})();
var statearr_32482_34235 = state_32465__$1;
(statearr_32482_34235[(2)] = null);

(statearr_32482_34235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (9))){
var inst_32413 = (state_32465[(8)]);
var inst_32441 = cljs.core.vec(inst_32413);
var state_32465__$1 = state_32465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32465__$1,(11),out,inst_32441);
} else {
if((state_val_32466 === (5))){
var inst_32421 = (state_32465[(10)]);
var inst_32417 = (state_32465[(9)]);
var inst_32414 = (state_32465[(7)]);
var inst_32421__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32417) : f.call(null,inst_32417));
var inst_32434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32421__$1,inst_32414);
var inst_32435 = cljs.core.keyword_identical_QMARK_(inst_32414,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32436 = ((inst_32434) || (inst_32435));
var state_32465__$1 = (function (){var statearr_32484 = state_32465;
(statearr_32484[(10)] = inst_32421__$1);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32436)){
var statearr_32485_34240 = state_32465__$1;
(statearr_32485_34240[(1)] = (8));

} else {
var statearr_32486_34241 = state_32465__$1;
(statearr_32486_34241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (14))){
var inst_32458 = (state_32465[(2)]);
var inst_32459 = cljs.core.async.close_BANG_(out);
var state_32465__$1 = (function (){var statearr_32490 = state_32465;
(statearr_32490[(13)] = inst_32458);

return statearr_32490;
})();
var statearr_32492_34243 = state_32465__$1;
(statearr_32492_34243[(2)] = inst_32459);

(statearr_32492_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (10))){
var inst_32448 = (state_32465[(2)]);
var state_32465__$1 = state_32465;
var statearr_32493_34244 = state_32465__$1;
(statearr_32493_34244[(2)] = inst_32448);

(statearr_32493_34244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32466 === (8))){
var inst_32421 = (state_32465[(10)]);
var inst_32417 = (state_32465[(9)]);
var inst_32413 = (state_32465[(8)]);
var inst_32438 = inst_32413.push(inst_32417);
var tmp32489 = inst_32413;
var inst_32413__$1 = tmp32489;
var inst_32414 = inst_32421;
var state_32465__$1 = (function (){var statearr_32494 = state_32465;
(statearr_32494[(7)] = inst_32414);

(statearr_32494[(8)] = inst_32413__$1);

(statearr_32494[(14)] = inst_32438);

return statearr_32494;
})();
var statearr_32495_34246 = state_32465__$1;
(statearr_32495_34246[(2)] = null);

(statearr_32495_34246[(1)] = (2));


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
var cljs$core$async$state_machine__29566__auto__ = null;
var cljs$core$async$state_machine__29566__auto____0 = (function (){
var statearr_32498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32498[(0)] = cljs$core$async$state_machine__29566__auto__);

(statearr_32498[(1)] = (1));

return statearr_32498;
});
var cljs$core$async$state_machine__29566__auto____1 = (function (state_32465){
while(true){
var ret_value__29567__auto__ = (function (){try{while(true){
var result__29568__auto__ = switch__29565__auto__(state_32465);
if(cljs.core.keyword_identical_QMARK_(result__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29568__auto__;
}
break;
}
}catch (e32500){var ex__29569__auto__ = e32500;
var statearr_32501_34257 = state_32465;
(statearr_32501_34257[(2)] = ex__29569__auto__);


if(cljs.core.seq((state_32465[(4)]))){
var statearr_32502_34258 = state_32465;
(statearr_32502_34258[(1)] = cljs.core.first((state_32465[(4)])));

} else {
throw ex__29569__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34259 = state_32465;
state_32465 = G__34259;
continue;
} else {
return ret_value__29567__auto__;
}
break;
}
});
cljs$core$async$state_machine__29566__auto__ = function(state_32465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29566__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29566__auto____1.call(this,state_32465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29566__auto____0;
cljs$core$async$state_machine__29566__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29566__auto____1;
return cljs$core$async$state_machine__29566__auto__;
})()
})();
var state__29671__auto__ = (function (){var statearr_32504 = f__29670__auto__();
(statearr_32504[(6)] = c__29669__auto___34156);

return statearr_32504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29671__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
