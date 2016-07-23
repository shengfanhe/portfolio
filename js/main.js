
(function() {

	"use strict";

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
		!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
		window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Vars.
	  var $body = document.querySelector('body');

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-loading');
			}, 100);
		});

		// Slideshow Background.
		  (function() {

		    // Settings.
		      var settings = {

		        // Images (in the format of 'url': 'alignment'). images应该是一个数组对象
		          images: {
		            'images/bg01.jpg': 'center',
		            'images/bg02.jpg': 'center',
		            'images/bg03.jpg': 'center',
								'images/bg04.jpg': 'center'
		          },

		        // Delay.
		          delay: 6000

		      };

		    // Vars. javascript的变量需要声明，但是变量不分类型
		      var	pos = 0, lastPos = 0,
		        $wrapper, $bgs = [], $bg,
		        k, v;

         $wrapper = document.getElementById("bg");

		      for (k in settings.images) {

		        // Create BG. $bg被设置为一个变量或者对象，为一个div
		          $bg = document.createElement("div");
		          $bg.style.backgroundImage = 'url("' + k + '")'; //style是一个属性，而backgroundImage是style子属性
		          $bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

		        // Add it to array.
		          $bgs.push($bg);

		      }

		    // Main loop.
		      $bgs[pos].classList.add('visible');//往一个节点(对象)里面加一个class
		      $bgs[pos].classList.add('top');

		      // Bail if we only have a single BG or the client doesn't support transitions.
		        if ($bgs.length == 1
		        ||	!canUse('transition'))
		          return;

		      window.setInterval(function() {

		        lastPos = pos;
		        pos++;

		        // Wrap to beginning if necessary.
		          if (pos >= $bgs.length)
		            pos = 0;//当轮到最后一个的时候计数器归零

		        // Swap top images.
		          $bgs[lastPos].classList.remove('top');
		          $bgs[pos].classList.add('visible');
		          $bgs[pos].classList.add('top');

		        // Hide last image after a short delay.
		          window.setTimeout(function() {
		            $bgs[lastPos].classList.remove('visible');
		          }, settings.delay / 2);

		      }, settings.delay);

		  })();
})();

(function() {

	function init() {
		var speed = 250,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}
	init();
})();
