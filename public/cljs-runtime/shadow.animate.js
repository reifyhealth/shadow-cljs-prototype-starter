goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_34064 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_34064(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_34076 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_34076(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_34095 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_34095(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_34111 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_34111(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_34114 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_34114(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33706){
var vec__33707 = p__33706;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4149__auto__ = delay;
if(cljs.core.truth_(and__4149__auto__)){
return (delay > (0));
} else {
return and__4149__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_34123 = (function (animator){
var x__4463__auto__ = (((animator == null))?null:animator);
var m__4464__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4464__auto__.call(null,animator));
} else {
var m__4461__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4461__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_34123(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_34142 = (function (animator){
var x__4463__auto__ = (((animator == null))?null:animator);
var m__4464__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4464__auto__.call(null,animator));
} else {
var m__4461__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4461__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_34142(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_34168 = (function (animator){
var x__4463__auto__ = (((animator == null))?null:animator);
var m__4464__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4464__auto__.call(null,animator));
} else {
var m__4461__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4461__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_34168(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_34172 = (function (animator){
var x__4463__auto__ = (((animator == null))?null:animator);
var m__4464__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4464__auto__.call(null,animator));
} else {
var m__4461__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4461__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_34172(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4648__auto__ = self__.items.length;
var i__28689__auto__ = (0);
while(true){
if((i__28689__auto__ < n__4648__auto__)){
var map__33731_34177 = (self__.items[i__28689__auto__]);
var map__33731_34178__$1 = cljs.core.__destructure_map(map__33731_34177);
var el_34179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33731_34178__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_34180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33731_34178__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_34179,from_34180);

var G__34186 = (i__28689__auto__ + (1));
i__28689__auto__ = G__34186;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4648__auto__ = self__.items.length;
var i__28689__auto__ = (0);
while(true){
if((i__28689__auto__ < n__4648__auto__)){
var map__33742_34188 = (self__.items[i__28689__auto__]);
var map__33742_34189__$1 = cljs.core.__destructure_map(map__33742_34188);
var el_34190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742_34189__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_34191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742_34189__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_34192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742_34189__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_34191["transition"] = transition_34192);

goog.style.setStyle(el_34190,to_34191);

var G__34206 = (i__28689__auto__ + (1));
i__28689__auto__ = G__34206;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4648__auto__ = self__.items.length;
var i__28689__auto__ = (0);
while(true){
if((i__28689__auto__ < n__4648__auto__)){
var map__33756_34213 = (self__.items[i__28689__auto__]);
var map__33756_34214__$1 = cljs.core.__destructure_map(map__33756_34213);
var el_34215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33756_34214__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_34216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33756_34214__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_34216["transition"] = null);

goog.style.setStyle(el_34215,toggles_34216);

var G__34221 = (i__28689__auto__ + (1));
i__28689__auto__ = G__34221;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k33768,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__33782 = k33768;
var G__33782__$1 = (((G__33782 instanceof cljs.core.Keyword))?G__33782.fqn:null);
switch (G__33782__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33768,else__4418__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__33790){
var vec__33791 = p__33790;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33767){
var self__ = this;
var G__33767__$1 = this;
return (new cljs.core.RecordIter((0),G__33767__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33769,other33770){
var self__ = this;
var this33769__$1 = this;
return (((!((other33770 == null)))) && ((this33769__$1.constructor === other33770.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.el,other33770.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.from,other33770.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.to,other33770.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.toggles,other33770.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.transition,other33770.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33769__$1.__extmap,other33770.__extmap)));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__33767){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__33824 = cljs.core.keyword_identical_QMARK_;
var expr__33825 = k__4423__auto__;
if(cljs.core.truth_((pred__33824.cljs$core$IFn$_invoke$arity$2 ? pred__33824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__33825) : pred__33824.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__33825)))){
return (new shadow.animate.AnimationStep(G__33767,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33824.cljs$core$IFn$_invoke$arity$2 ? pred__33824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__33825) : pred__33824.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__33825)))){
return (new shadow.animate.AnimationStep(self__.el,G__33767,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33824.cljs$core$IFn$_invoke$arity$2 ? pred__33824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__33825) : pred__33824.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__33825)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__33767,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33824.cljs$core$IFn$_invoke$arity$2 ? pred__33824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__33825) : pred__33824.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__33825)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__33767,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33824.cljs$core$IFn$_invoke$arity$2 ? pred__33824.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__33825) : pred__33824.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__33825)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__33767,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__33767),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__33767){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__33767,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__33778){
var extmap__4454__auto__ = (function (){var G__33837 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33778,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__33778)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33837);
} else {
return G__33837;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__33778),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__33778),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__33778),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__33778),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__33778),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$animate$setup_$_iter__33842(s__33843){
return (new cljs.core.LazySeq(null,(function (){
var s__33843__$1 = s__33843;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33843__$1);
if(temp__5735__auto__){
var s__33843__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33843__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__33843__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__33845 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__33844 = (0);
while(true){
if((i__33844 < size__4563__auto__)){
var vec__33846 = cljs.core._nth(c__4562__auto__,i__33844);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(1),null);
cljs.core.chunk_append(b__33845,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__34319 = (i__33844 + (1));
i__33844 = G__34319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33845),shadow$animate$setup_$_iter__33842(cljs.core.chunk_rest(s__33843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33845),null);
}
} else {
var vec__33850 = cljs.core.first(s__33843__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33850,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33850,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__33842(cljs.core.rest(s__33843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__28567__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28568__auto__ = (function (){var switch__28361__auto__ = (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (1))){
var inst_33854 = shadow.animate.get_duration(animator);
var inst_33855 = cljs.core.async.timeout(inst_33854);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33860__$1,(2),inst_33855);
} else {
if((state_val_33861 === (2))){
var inst_33857 = (state_33860[(2)]);
var inst_33858 = shadow.animate.finish_BANG_(animator);
var state_33860__$1 = (function (){var statearr_33862 = state_33860;
(statearr_33862[(7)] = inst_33857);

(statearr_33862[(8)] = inst_33858);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33860__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__28362__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__28362__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = shadow$animate$continue_BANG__$_state_machine__28362__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var shadow$animate$continue_BANG__$_state_machine__28362__auto____1 = (function (state_33860){
while(true){
var ret_value__28363__auto__ = (function (){try{while(true){
var result__28364__auto__ = switch__28361__auto__(state_33860);
if(cljs.core.keyword_identical_QMARK_(result__28364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28364__auto__;
}
break;
}
}catch (e33864){var ex__28365__auto__ = e33864;
var statearr_33865_34340 = state_33860;
(statearr_33865_34340[(2)] = ex__28365__auto__);


if(cljs.core.seq((state_33860[(4)]))){
var statearr_33866_34341 = state_33860;
(statearr_33866_34341[(1)] = cljs.core.first((state_33860[(4)])));

} else {
throw ex__28365__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34342 = state_33860;
state_33860 = G__34342;
continue;
} else {
return ret_value__28363__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__28362__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__28362__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__28362__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__28362__auto____0;
shadow$animate$continue_BANG__$_state_machine__28362__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__28362__auto____1;
return shadow$animate$continue_BANG__$_state_machine__28362__auto__;
})()
})();
var state__28569__auto__ = (function (){var statearr_33867 = f__28568__auto__();
(statearr_33867[(6)] = c__28567__auto__);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28569__auto__);
}));

return c__28567__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__33871 = arguments.length;
switch (G__33871) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33874 = (function (attr,from,to,timing,delay,meta33875){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta33875 = meta33875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33876,meta33875__$1){
var self__ = this;
var _33876__$1 = this;
return (new shadow.animate.t_shadow$animate33874(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta33875__$1));
}));

(shadow.animate.t_shadow$animate33874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33876){
var self__ = this;
var _33876__$1 = this;
return self__.meta33875;
}));

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate33874.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate33874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta33875","meta33875",268198956,null)], null);
}));

(shadow.animate.t_shadow$animate33874.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33874.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33874");

(shadow.animate.t_shadow$animate33874.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33874");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate33874.
 */
shadow.animate.__GT_t_shadow$animate33874 = (function shadow$animate$__GT_t_shadow$animate33874(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta33875){
return (new shadow.animate.t_shadow$animate33874(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta33875));
});

}

return (new shadow.animate.t_shadow$animate33874(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33879 = (function (attr,from,to,meta33880){
this.attr = attr;
this.from = from;
this.to = to;
this.meta33880 = meta33880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33881,meta33880__$1){
var self__ = this;
var _33881__$1 = this;
return (new shadow.animate.t_shadow$animate33879(self__.attr,self__.from,self__.to,meta33880__$1));
}));

(shadow.animate.t_shadow$animate33879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33881){
var self__ = this;
var _33881__$1 = this;
return self__.meta33880;
}));

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33879.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta33880","meta33880",1871617631,null)], null);
}));

(shadow.animate.t_shadow$animate33879.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33879.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33879");

(shadow.animate.t_shadow$animate33879.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33879");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate33879.
 */
shadow.animate.__GT_t_shadow$animate33879 = (function shadow$animate$toggle_$___GT_t_shadow$animate33879(attr__$1,from__$1,to__$1,meta33880){
return (new shadow.animate.t_shadow$animate33879(attr__$1,from__$1,to__$1,meta33880));
});

}

return (new shadow.animate.t_shadow$animate33879(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__33897 = arguments.length;
switch (G__33897) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33898 = (function (attrs,meta33899){
this.attrs = attrs;
this.meta33899 = meta33899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33900,meta33899__$1){
var self__ = this;
var _33900__$1 = this;
return (new shadow.animate.t_shadow$animate33898(self__.attrs,meta33899__$1));
}));

(shadow.animate.t_shadow$animate33898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33900){
var self__ = this;
var _33900__$1 = this;
return self__.meta33899;
}));

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33898.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33899","meta33899",-1430978039,null)], null);
}));

(shadow.animate.t_shadow$animate33898.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33898.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33898");

(shadow.animate.t_shadow$animate33898.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33898");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate33898.
 */
shadow.animate.__GT_t_shadow$animate33898 = (function shadow$animate$__GT_t_shadow$animate33898(attrs__$1,meta33899){
return (new shadow.animate.t_shadow$animate33898(attrs__$1,meta33899));
});

}

return (new shadow.animate.t_shadow$animate33898(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33903 = (function (attr,meta33904){
this.attr = attr;
this.meta33904 = meta33904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33905,meta33904__$1){
var self__ = this;
var _33905__$1 = this;
return (new shadow.animate.t_shadow$animate33903(self__.attr,meta33904__$1));
}));

(shadow.animate.t_shadow$animate33903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33905){
var self__ = this;
var _33905__$1 = this;
return self__.meta33904;
}));

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33903.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta33904","meta33904",-1229538668,null)], null);
}));

(shadow.animate.t_shadow$animate33903.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33903.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33903");

(shadow.animate.t_shadow$animate33903.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33903");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate33903.
 */
shadow.animate.__GT_t_shadow$animate33903 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate33903(attr__$1,meta33904){
return (new shadow.animate.t_shadow$animate33903(attr__$1,meta33904));
});

}

return (new shadow.animate.t_shadow$animate33903(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34393 = arguments.length;
var i__4772__auto___34394 = (0);
while(true){
if((i__4772__auto___34394 < len__4771__auto___34393)){
args__4777__auto__.push((arguments[i__4772__auto___34394]));

var G__34395 = (i__4772__auto___34394 + (1));
i__4772__auto___34394 = G__34395;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5733__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var adef = temp__5733__auto__;
var G__34397 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__34398 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__34399 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__34400 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__34401 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__34402 = cljs.core.rest(transitions__$1);
to = G__34397;
from = G__34398;
toggles = G__34399;
timings = G__34400;
delays = G__34401;
transitions__$1 = G__34402;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33915 = (function (transitions,to,from,toggles,timings,delays,temp__5733__auto__,meta33916){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5733__auto__ = temp__5733__auto__;
this.meta33916 = meta33916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_33917,meta33916__$1){
var self__ = this;
var _33917__$1 = this;
return (new shadow.animate.t_shadow$animate33915(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5733__auto__,meta33916__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_33917){
var self__ = this;
var _33917__$1 = this;
return self__.meta33916;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"meta33916","meta33916",-275584721,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate33915.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33915.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33915");

(shadow.animate.t_shadow$animate33915.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33915");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate33915.
 */
shadow.animate.__GT_t_shadow$animate33915 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function shadow$animate$__GT_t_shadow$animate33915(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5733__auto____$1,meta33916){
return (new shadow.animate.t_shadow$animate33915(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5733__auto____$1,meta33916));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
;

}

return (new shadow.animate.t_shadow$animate33915(transitions__$1,to,from,toggles,timings,delays,temp__5733__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq33907){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33907));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__33967 = arguments.length;
switch (G__33967) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__33972 = arguments.length;
switch (G__33972) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__33989 = arguments.length;
switch (G__33989) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate33996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33996 = (function (from,to,timing,delay,meta33997){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta33997 = meta33997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate33996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33998,meta33997__$1){
var self__ = this;
var _33998__$1 = this;
return (new shadow.animate.t_shadow$animate33996(self__.from,self__.to,self__.timing,self__.delay,meta33997__$1));
}));

(shadow.animate.t_shadow$animate33996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33998){
var self__ = this;
var _33998__$1 = this;
return self__.meta33997;
}));

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate33996.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate33996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta33997","meta33997",264239603,null)], null);
}));

(shadow.animate.t_shadow$animate33996.cljs$lang$type = true);

(shadow.animate.t_shadow$animate33996.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33996");

(shadow.animate.t_shadow$animate33996.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate33996");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate33996.
 */
shadow.animate.__GT_t_shadow$animate33996 = (function shadow$animate$__GT_t_shadow$animate33996(from__$1,to__$1,timing__$1,delay__$1,meta33997){
return (new shadow.animate.t_shadow$animate33996(from__$1,to__$1,timing__$1,delay__$1,meta33997));
});

}

return (new shadow.animate.t_shadow$animate33996(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__34010 = arguments.length;
switch (G__34010) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate34011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate34011 = (function (from,to,timing,delay,meta34012){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta34012 = meta34012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate34011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34013,meta34012__$1){
var self__ = this;
var _34013__$1 = this;
return (new shadow.animate.t_shadow$animate34011(self__.from,self__.to,self__.timing,self__.delay,meta34012__$1));
}));

(shadow.animate.t_shadow$animate34011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34013){
var self__ = this;
var _34013__$1 = this;
return self__.meta34012;
}));

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate34011.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate34011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta34012","meta34012",74493154,null)], null);
}));

(shadow.animate.t_shadow$animate34011.cljs$lang$type = true);

(shadow.animate.t_shadow$animate34011.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate34011");

(shadow.animate.t_shadow$animate34011.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.animate/t_shadow$animate34011");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate34011.
 */
shadow.animate.__GT_t_shadow$animate34011 = (function shadow$animate$__GT_t_shadow$animate34011(from__$1,to__$1,timing__$1,delay__$1,meta34012){
return (new shadow.animate.t_shadow$animate34011(from__$1,to__$1,timing__$1,delay__$1,meta34012));
});

}

return (new shadow.animate.t_shadow$animate34011(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
