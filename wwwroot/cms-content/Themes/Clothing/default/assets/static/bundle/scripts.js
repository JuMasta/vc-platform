if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),s=i.data("bs.alert");s||i.data("bs.alert",s=new o(this)),"string"==typeof e&&s[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.2.0",o.prototype.close=function(e){function i(){n.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var n=t(s);e&&e.preventDefault(),n.length||(n=o.hasClass("alert")?o:o.parent()),n.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",i).emulateTransitionEnd(150):i())};var s=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=s,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.button"),n="object"==typeof e&&e;s||o.data("bs.button",s=new i(this,n)),"toggle"==e?s.toggle():e&&s.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.2.0",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,s=o.is("input")?"val":"html",n=o.data();e+="Text",null==n.resetText&&o.data("resetText",o[s]()),o[s](null==n[e]?this.options[e]:n[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.carousel"),n=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),r="string"==typeof e?e:n.slide;s||o.data("bs.carousel",s=new i(this,n)),"number"==typeof e?s.to(e):r?s[r]():n.interval&&s.pause().cycle()})}var i=function(e,i){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.2.0",i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},i.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.to=function(e){var i=this,o=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),s=i||o[e](),n=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".item")[a]()}if(s.hasClass("active"))return this.sliding=!1;var h=s[0],p=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(p),!p.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=t(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(r),s.addClass(r),o.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),o.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(1e3*o.css("transition-duration").slice(0,-1))):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(i){var o,s=t(this),n=t(s.attr("data-target")||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("carousel")){var r=t.extend({},n.data(),s.data()),a=s.attr("data-slide-to");a&&(r.interval=!1),e.call(n,r),a&&n.data("bs.carousel").to(a),i.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(s).remove(),t(n).each(function(){var o=i(t(this)),s={relatedTarget:this};o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown",s))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new r(this)),"string"==typeof e&&o[e].call(i)})}var s=".dropdown-backdrop",n='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.2.0",r.prototype.toggle=function(o){var s=t(this);if(!s.is(".disabled, :disabled")){var n=i(s),r=n.hasClass("open");if(e(),!r){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(n.trigger(o=t.Event("show.bs.dropdown",a)),o.isDefaultPrevented())return;s.trigger("focus"),n.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},r.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=i(o),r=s.hasClass("open");if(!r||r&&27==e.keyCode)return 27==e.which&&s.find(n).trigger("focus"),o.trigger("click");var a=" li:not(.divider):visible a",l=s.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var h=l.index(l.filter(":focus"));38==e.keyCode&&h>0&&h--,40==e.keyCode&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,r.prototype.toggle).on("keydown.bs.dropdown.data-api",n+', [role="menu"], [role="listbox"]',r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),r=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,r)),"string"==typeof e?n[e](o):r.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.2.0",i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(300):i.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t('<div class="modal-backdrop '+o+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(150):n()}else e&&e()},i.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),r=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,r,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tooltip"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.tooltip",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.2.0",i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var s=this.options.trigger.split(" "),n=s.length;n--;){var r=s[n];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show()},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,s=this.tip(),n=this.getUID(this.type);this.setContent(),s.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(l){var d=r,f=this.$element.parent(),u=this.getPosition(f);r="bottom"==r&&h.top+h.height+c-u.scroll>u.height?"top":"top"==r&&h.top-u.scroll-c<0?"bottom":"right"==r&&h.right+p>u.width?"left":"left"==r&&h.left-p<u.left?"right":r,s.removeClass(d).addClass(r)}var g=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(g,r);var v=function(){o.$element.trigger("shown.bs."+o.type),o.hoverState=null};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(150):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),s=o[0].offsetWidth,n=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=n&&(e.top=e.top+n-h);var p=this.getViewportAdjustedDelta(i,e,l,h);p.left?e.left+=p.left:e.top+=p.top;var c=p.left?2*p.left-s+l:2*p.top-n+h,d=p.left?"left":"top",f=p.left?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],d)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(){function e(){"in"!=i.hoverState&&o.detach(),i.$element.trigger("hidden.bs."+i.type)}var i=this,o=this.tip(),s=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(s),s.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName;return t.extend({},"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect():null,{scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:o?t(window).width():e.outerWidth(),height:o?t(window).height():e.outerHeight()},o?{top:0,left:0}:e.offset())},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-n-r.scroll,l=e.top+n-r.scroll+o;a<r.top?s.top=r.top-a:l>r.top+r.height&&(s.top=r.top+r.height-l)}else{var h=e.left-n,p=e.left+n+i;h<r.left?s.left=r.left-h:p>r.width&&(s.left=r.left+r.width-p)}return s},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.popover"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.popover",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.2.0",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.2.0",i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a")[0],n=t.Event("show.bs.tab",{relatedTarget:s});if(e.trigger(n),!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:s})})}}},i.prototype.activate=function(e,i,o){function s(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var n=i.find("> .active"),r=o&&t.support.transition&&n.hasClass("fade");r?n.one("bsTransitionEnd",s).emulateTransitionEnd(150):s(),n.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(i){i.preventDefault(),e.call(t(this),"show")})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.affix"),n="object"==typeof e&&e;s||o.data("bs.affix",s=new i(this,n)),"string"==typeof e&&s[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.2.0",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),o=this.$target.scrollTop(),s=this.$element.offset(),n=this.options.offset,r=n.top,a=n.bottom;"object"!=typeof n&&(a=r=n),"function"==typeof r&&(r=n.top(this.$element)),"function"==typeof a&&(a=n.bottom(this.$element));var l=null!=this.unpin&&o+this.unpin<=s.top?!1:null!=a&&s.top+this.$element.height()>=e-a?"bottom":null!=r&&r>=o?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),p=t.Event(h+".bs.affix");this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},o.offsetBottom&&(o.offset.bottom=o.offsetBottom),o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.collapse"),n=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);!s&&n.toggle&&"show"==e&&(e=!e),s||o.data("bs.collapse",s=new i(this,n)),"string"==typeof e&&s[e]()})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};i.VERSION="3.2.0",i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var i=t.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){var o=this.$parent&&this.$parent.find("> .panel > .in");if(o&&o.length){var s=o.data("bs.collapse");if(s&&s.transitioning)return;e.call(o,"hide"),s||o.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[n](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var a=t.camelCase(["scroll",n].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(350):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var o=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o,s=t(this),n=s.attr("data-target")||i.preventDefault()||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""),r=t(n),a=r.data("bs.collapse"),l=a?"toggle":s.data(),h=s.attr("data-parent"),p=h&&t(h);a&&a.transitioning||(p&&p.find('[data-toggle="collapse"][data-parent="'+h+'"]').not(s).addClass("collapsed"),s[r.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(r,l)})}(jQuery),+function(t){"use strict";function e(i,o){var s=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(i).is("body")?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),s=o.data("bs.scrollspy"),n="object"==typeof i&&i;s||o.data("bs.scrollspy",s=new e(this,n)),"string"==typeof i&&s[i]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",i=0;t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var o=this;this.$body.find(this.selector).map(function(){var o=t(this),s=o.data("target")||o.attr("href"),n=/^#./.test(s)&&t(s);return n&&n.length&&n.is(":visible")&&[[n[e]().top+i,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,n=this.targets,r=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return r!=(t=n[n.length-1])&&this.activate(t);if(r&&e<=s[0])return r!=(t=n[0])&&this.activate(t);for(t=s.length;t--;)r!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function B(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)p[c[d]]=c[d]in k;return p.list&&(p.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),p}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var C in n)v(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.input||B(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
var storefrontAppDependencies = [
    'ui.bootstrap',
    'ngStorage',
    'pascalprecht.translate',
    'ngSanitize',
]
var storefrontApp = angular.module('storefrontApp', storefrontAppDependencies);

storefrontApp.factory('httpErrorInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
    var httpErrorInterceptor = {};

    httpErrorInterceptor.responseError = function (rejection) {
        if (rejection.data && rejection.data.message) {
            $rootScope.$broadcast('storefrontError', {
                type: 'error',
                title: [rejection.config.method, rejection.config.url, rejection.status, rejection.statusText, rejection.data.message].join(' '),
                message: rejection.data.stackTrace,
            });
        }
        return $q.reject(rejection);
    };
    httpErrorInterceptor.requestError = function (rejection) {
        if (rejection.data && rejection.data.message) {
            $rootScope.$broadcast('storefrontError', {
                type: 'error',
                title: [rejection.config.method, rejection.config.url, rejection.status, rejection.statusText, rejection.data.message].join(' '),
                message: rejection.data.stackTrace,
            });
        }
        return $q.reject(rejection);
    };

    return httpErrorInterceptor;
}])

storefrontApp.config(['$httpProvider', '$translateProvider', function ($httpProvider, $translateProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');

    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useUrlLoader(BASE_URL + 'themes/localization.json');
    $translateProvider.preferredLanguage('en');

}]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('dialogService', ['$uibModal', function ($uibModal) {
    return {
        showDialog: function (dialogData, controller, templateUrl) {
            var modalInstance = $uibModal.open({
                controller: controller,
                templateUrl: templateUrl,
                resolve: {
                    dialogData: function () {
                        return dialogData;
                    }
                }
            });
        }
    }
}]);

storefrontApp.service('feedbackService', ['$http', function ($http) {
    return {
        postFeedback: function (data) {
            return $http.post('storefrontapi/feedback', { model: data });
        }
    }
}]);

storefrontApp.service('customerService', ['$http', function ($http) {
    return {
        getCurrentCustomer: function () {
            return $http.get('storefrontapi/account?t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.service('marketingService', ['$http', function ($http) {
    return {
        getDynamicContent: function (placeName) {
            return $http.get('storefrontapi/marketing/dynamiccontent/' + placeName + '?t=' + new Date().getTime());
        },
    }
}]);

storefrontApp.service('pricingService', ['$http', function ($http) {
	return {
		getActualProductPrices: function (products) {
		    return $http.post('storefrontapi/pricing/actualprices', { products: products });
		}
	}
}]);

storefrontApp.service('catalogService', ['$http', function ($http) {
    return {
        getProduct: function (productIds) {
            return $http.get('storefrontapi/products?productIds=' + productIds + '&t=' + new Date().getTime());
        },
        search: function (criteria) {
            return $http.post('storefrontapi/catalog/search', { searchCriteria: criteria });
        },
        searchCategories: function (criteria) {
            return $http.post('storefrontapi/categories/search', { searchCriteria: criteria });
        }
    }
}]);

storefrontApp.service('cartService', ['$http', function ($http) {
    return {
        getCart: function () {
            return $http.get('storefrontapi/cart?t=' + new Date().getTime());
        },
        getCartItemsCount: function () {
            return $http.get('storefrontapi/cart/itemscount?t=' + new Date().getTime());
        },
        addLineItem: function (productId, quantity) {
            return $http.post('storefrontapi/cart/items', { id: productId, quantity: quantity });
        },
        changeLineItemQuantity: function (lineItemId, quantity) {
            return $http.put('storefrontapi/cart/items', { lineItemId: lineItemId, quantity: quantity });
        },
        removeLineItem: function (lineItemId) {
            return $http.delete('storefrontapi/cart/items?lineItemId=' + lineItemId);
        },
        changeLineItemPrice: function (lineItemId, newPrice) {
        	return $http.put('storefrontapi/cart/items/price', { lineItemId: lineItemId, newPrice: newPrice});
        },
        clearCart: function () {
            return $http.post('storefrontapi/cart/clear');
        },
        getCountries: function () {
            return $http.get('storefrontapi/countries?t=' + new Date().getTime());
        },
        getCountryRegions: function (countryCode) {
        	return $http.get('storefrontapi/countries/' + countryCode + '/regions?t=' + new Date().getTime());
        },
        addCoupon: function (couponCode) {
            return $http.post('storefrontapi/cart/coupons/' + couponCode);
        },
        removeCoupon: function () {
            return $http.delete('storefrontapi/cart/coupons');
        },
        addOrUpdateShipment: function (shipment) {
            return $http.post('storefrontapi/cart/shipments', shipment);
        },
        addOrUpdatePayment: function (payment) {
            return $http.post('storefrontapi/cart/payments', payment );
        },
        getAvailableShippingMethods: function (shipmentId) {
            return $http.get('storefrontapi/cart/shipments/' + shipmentId + '/shippingmethods?t=' + new Date().getTime());
        },
        getAvailablePaymentMethods: function () {
            return $http.get('storefrontapi/cart/paymentmethods?t=' + new Date().getTime());
        },
        addOrUpdatePaymentPlan: function (plan) {
            return $http.post('storefrontapi/cart/paymentPlan', plan);
        },
        removePaymentPlan: function () {
            return $http.delete('storefrontapi/cart/paymentPlan');
        },
        createOrder: function (bankCardInfo) {
            return $http.post('storefrontapi/cart/createorder', { bankCardInfo: bankCardInfo });
        }
    }
}]);

storefrontApp.service('listService', ['$http', function ($http) {
    return {
        getWishlist: function (listName) {
            return $http.get('storefrontapi/lists/' + listName + '?t=' + new Date().getTime());
        },
        contains: function (productId, listName) {
            return $http.get('storefrontapi/lists/' + listName +'/items/'+ productId + '/contains?t=' + new Date().getTime());
        },
        addLineItem: function (productId, listName) {
            return $http.post('storefrontapi/lists/' + listName + '/items', { productId: productId });
        },
        removeLineItem: function (lineItemId, listName) {
            return $http.delete('storefrontapi/lists/' + listName + '/items/' + lineItemId);
        }
    }
}]);

storefrontApp.service('quoteRequestService', ['$http', function ($http) {
    return {
        getCurrentQuoteRequest: function () {
            return $http.get('storefrontapi/quoterequest/current?t=' + new Date().getTime());
        },
        getQuoteRequest: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '?t=' + new Date().getTime());
        },
        getQuoteRequestItemsCount: function (number) {
            return $http.get('storefrontapi/quoterequests/' + number + '/itemscount?t=' + new Date().getTime());
        },
        addProductToQuoteRequest: function (productId, quantity) {
            return $http.post('storefrontapi/quoterequests/current/items', { productId: productId, quantity: quantity });
        },
        removeProductFromQuoteRequest: function (quoteRequestNumber, quoteItemId) {
            return $http.delete('storefrontapi/quoterequests/' + quoteRequestNumber + '/items/' + quoteItemId);
        },
        submitQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/submit', { quoteForm: quoteRequest });
        },
        rejectQuoteRequest: function (quoteRequestNumber) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/reject');
        },
        updateQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.put('storefrontapi/quoterequests/' + quoteRequestNumber + '/update', { quoteRequest: quoteRequest });
        },
        getTotals: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/totals', { quoteRequest: quoteRequest });
        },
        confirmQuoteRequest: function (quoteRequestNumber, quoteRequest) {
            return $http.post('storefrontapi/quoterequests/' + quoteRequestNumber + '/confirm', { quoteRequest: quoteRequest });
        }
    }
}]);

storefrontApp.service('recommendationService', ['$http', function ($http) {
    return {
        getRecommendedProducts: function (requestData) {
            return $http.post('storefrontapi/recommendations', requestData );
        }
    }
}]);

storefrontApp.service('orderService', ['$http', function ($http) {
    return {
        getOrder: function (orderNumber) {
            return $http.get('storefrontapi/orders/' + orderNumber + '?t=' + new Date().getTime());
        }
    }
}]);
var storefrontApp = angular.module('storefrontApp');


storefrontApp.controller('mainController', ['$scope', '$location', '$window', 'customerService', 'storefrontApp.mainContext',
    function ($scope, $location, $window, customerService, mainContext) {

        //Base store url populated in layout and can be used for construction url inside controller
        $scope.baseUrl = {};

        $scope.$watch(function () {
            $scope.currentPath = $location.$$path.replace('/', '');
        });

        $scope.$on('storefrontError', function (event, data) {
            $scope.storefrontNotification = data;
            $scope.storefrontNotification.detailsVisible = false;
        });

        $scope.toggleNotificationDetails = function () {
            $scope.storefrontNotification.detailsVisible = !$scope.storefrontNotification.detailsVisible;
        }

        $scope.closeNotification = function () {
            $scope.storefrontNotification = null;
        }

        //For outside app redirect (To reload the page after changing the URL, use the lower-level API)
        $scope.outerRedirect = function (absUrl) {
            $window.location.href = absUrl;
        };

        //change in the current URL or change the current URL in the browser (for app route)
        $scope.innerRedirect = function (path) {
            $location.path(path);
            $scope.currentPath = $location.$$path.replace('/', '');
        };

        $scope.stringifyAddress = function (address) {
            var stringifiedAddress = address.firstName + ' ' + address.lastName + ', ';
            stringifiedAddress += address.organization ? address.organization + ', ' : '';
            stringifiedAddress += address.countryName + ', ';
            stringifiedAddress += address.regionName ? address.regionName + ', ' : '';
            stringifiedAddress += address.city + ' ';
            stringifiedAddress += address.line1 + ', ';
            stringifiedAddress += address.line2 ? address.line2 : '';
            stringifiedAddress += address.postalCode;
            return stringifiedAddress;
        }

        $scope.getObjectSize = function (obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    size++;
                }
            }
            return size;
        }

        mainContext.getCustomer = $scope.getCustomer = function () {
            customerService.getCurrentCustomer().then(function (response) {
                var addressId = 1;
                _.each(response.data.addresses, function (address) {
                    address.id = addressId;
                    addressId++;
                });
                response.data.isContact = response.data.memberType === 'Contact';
                mainContext.customer = $scope.customer = response.data;
            });
        };

        $scope.getCustomer();
    }])

.factory('storefrontApp.mainContext', function () {
    return {};
});
var storefrontApp = angular.module('storefrontApp');
storefrontApp.controller('orderController', ['$scope', '$window', 'orderService', function ($scope, $window, orderService) {
    getOrder($window.orderNumber);

    function getOrder(orderNumber) {
        orderService.getOrder(orderNumber).then(function (response) {
            if (response && response.data) {
                $scope.order = response.data;
            }
        });
    }
}]);
var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('collectionController', ['$scope', '$location',  function ($scope, $location) {
    $scope.currentFulfillmentCenter = { id: null };
    var $ctrl = this;
    $ctrl.init = function() {
        $ctrl.sortModes = {
            'manual': 'collections.sorting.featured',
            'best-selling': 'collections.sorting.best_selling',
            'title-ascending': 'collections.sorting.az',
            'title-descending': 'collections.sorting.za',
            'price-ascending': 'collections.sorting.price_ascending',
            'price-descending': 'collections.sorting.price_descending',
            'createddate-descending': 'collections.sorting.date_descending',
            'createddate-ascending': 'collections.sorting.date_ascending'
        };
        $ctrl.viewQuery = { view: ['grid'] };
        $ctrl.keywordQuery = { keyword: [] };       
    }
    
    $ctrl.generatePageSizes = function (capacity, steps) {
        $ctrl.pageSizeQuery = { page_size: [capacity] };
        // for example            start: 16 stop: 16 * 3 + 1 = 49 step: 16
        $ctrl.pageSizes = _.range(capacity, capacity * steps + 1, capacity);
    }

  
    $ctrl.init();
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('searchQueryService', ['$location', function ($location) {
    return {
        // emulate html5 mode because of bug in Microsoft Edge
        get: function () {
            var result = {};
            var url = new URL($location.absUrl());
            var entries = url.searchParams.entries();
            var pair = entries.next();
            while (!pair.done) {
                result[pair.value[0]] = pair.value[1];
                pair = entries.next();
            }
            return result;
        },

        // Deserializes search query strings like 'key=value1[,value2]' or 'key=key1:value1[,value2[;key2:value3[,value4]]]'
        deserialize: function (searchQuery, defaults) {
            var deserializeValues = function (string) {
                return string.split(',');
            };
            var deserializePairs = function (string) {
                return _.object(string.split(';').map(function (pairString) {
                    return _.reduce(pairString.split(':'), function (key, value) {
                        return [key, deserializeValues(value)];
                    });
                }));
            };
            searchQuery = searchQuery || {};
            defaults = defaults || {};
            var result = {};
            _.each(Object.keys(searchQuery), (function (key) {
                var string = searchQuery[key];
                if (string) {
                    var deserialize = string.includes(':') ? deserializePairs : deserializeValues;
                    result[key] = deserialize(string);
                }
            }));
            result = _.defaults(result, defaults);
            return result;
        },

        merge: function (searchQuery, changes, switchable) {
            if (!switchable) {
                return _.extend(searchQuery, changes);
            } else {
                var mergeValues = function (searchQueryValues, changeValues) {
                    var checkedValues = _.difference((searchQueryValues || []).concat(changeValues || []), _.intersection(searchQueryValues, changeValues));
                    return changeValues !== null && checkedValues.length ? checkedValues : null;
                };
                var mergePairs = function (searchQueryPairs, changePairs) {
                    return _.object(_.compact(_.union(Object.keys(searchQueryPairs), Object.keys(changePairs)).map(function (key) {
                        var mergedValues = mergeValues(searchQueryPairs[key], changePairs[key]);
                        return mergedValues !== null ? [key, mergedValues] : null;
                    })));
                };
                return _.object(_.compact(_.union(Object.keys(searchQuery), Object.keys(changes)).map(function (key) {
                    var searchQueryValues = searchQuery[key];
                    var changeValues = changes[key];
                    if (changeValues !== null) {
                        if (searchQueryValues && changeValues && angular.isArray(searchQueryValues) !== angular.isArray(changeValues)) {
                            throw 'Type of ' + key + ' in search query is' + typeof (searchQueryValues[key]) + ' while in changes is' + typeof (changeValues[key]);
                        }
                        if (angular.isArray(changeValues) || angular.isArray(searchQueryValues)) {
                            var mergedValues = mergeValues(searchQueryValues, changeValues);
                            return mergedValues !== null ? [key, mergedValues] : null;
                        } else {
                            var mergedPairs = mergePairs(searchQueryValues || [], changeValues || []);
                            return !_.isEmpty(mergedPairs) ? [key, mergedPairs] : null;
                        }
                    } else {
                        return null;
                    }
                })));
            }
        },

        // Serializes search query objects like { view: ['list'], terms: { Color: ["Black, "Red"], Brand: ["VirtoCommerce", "Microsoft"] } }  to string 
        serialize: function (searchQuery, defaults) {
            var serializeValues = function (values) {
                return values.join(',');
            };
            var serializePairs = function (pairs) {
                return _.map(Object.keys(pairs), function (key) {
                    return [key, angular.isArray(pairs[key]) ? serializeValues(pairs[key]) : pairs[key]].join(':');
                }).join(';');
            };
            searchQuery = searchQuery || {};
            defaults = defaults || {};
            var result = _.defaults(searchQuery, defaults);
            return _.mapObject(result, function (values, key) {
                return values !== null ? !angular.isArray(values) ? serializePairs(values) : serializeValues(values) : null;
            });
        }
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.directive('vcContentPlace', ['marketingService', function (marketingService) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            marketingService.getDynamicContent(attrs.id).then(function (response) {
                element.html(response.data);
            });
        },
        replace: true
    }
}]);

storefrontApp.directive('fallbackSrc', function () {
    return {
        link: function (scope, element, attrs) {
            element.on('error', errorHandler);

            scope.$on('$destroy', function() {
                element.off('error', errorHandler);
            });

            function errorHandler(event) {
                if (element.attr('src') !== attrs.fallbackSrc) {
                    element.attr('src', attrs.fallbackSrc);
                }
                else {
                    element.off(event);
                }
            };
        }
    }
});
var storefrontApp = angular.module('storefrontApp');

storefrontApp.directive('vcQuerySource', ['$parse', '$location', '$httpParamSerializer', 'searchQueryService', function ($parse, $location, $httpParamSerializer, searchQueryService) {
    return {
        restrict: "A",
        compile: function (tElem, tAttr) {
            if (!tAttr.href) {
                return function (scope, element, attrs) {
                    // If the linked element is not an anchor tag anymore, do nothing
                    if (element[0].nodeName.toLowerCase() !== 'a') return;

                    // get query from current url, replace query parts with specified parts and set href
                    var setUrl = function (querySource, switchable) {
                        switchable = switchable == 'true';
                        var state = searchQueryService.deserialize(searchQueryService.get(), {});
                        var result = searchQueryService.merge(state, querySource, switchable);
                        var params = searchQueryService.serialize(result, {});
                        var url = new URL($location.absUrl());
                        url.search = $httpParamSerializer(params);
                        element.attr("href", url.href);
                    };
                    scope.$watch(function () {
                        return $parse(attrs.vcQuerySource)(scope);
                    }, function (value) {
                        setUrl(value, attrs.switchable);
                    }, true);
                    scope.$watch(function () {
                        return attrs.switchable;
                    }, function (value) {
                        setUrl($parse(attrs.vcQuerySource)(scope), value);
                    });
                }
            }
        }
    }
}]);

var storefrontApp = angular.module('storefrontApp');

storefrontApp.directive('vcQueryTarget', ['$parse', '$location', 'searchQueryService', function ($parse, $location, searchQueryService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var vcQueryTarget = $parse(attrs.vcQueryTarget);
            // get requested keys and set ng-model value to value of ?key1=value1&key2=value2
            var state = searchQueryService.deserialize(searchQueryService.get(), vcQueryTarget(scope));
            vcQueryTarget.assign(scope, state);
        }
    }
}]);

//# sourceMappingURL=scripts.js.map
