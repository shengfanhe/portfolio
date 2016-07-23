//scroll触发BSX设备出现
$(function(){
            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');

                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });
                    var osTrigger = ( trigger ) ? trigger : osElement;

                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '60%'
                    });
                });
            }
            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});

//material design 下拉菜单
$(document).ready(function() {
    var triggerOpen     = $('#input');
    var triggerClose    = $('#dropdown-menu').find('li');
    var marka           = $('#icon');

    // set initial Marka icon
    var m = new Marka('#icon');
    m.set('bars').size(10);
    m.rotate('down');

    // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
        e.preventDefault();
        $('#dropdown-menu').add(triggerOpen).toggleClass('open');


        if($('#icon').hasClass("marka-icon-times")) {
            m.set('bars').size(10);
        } else {
            m.set('times').size(15);
        }
    });

    triggerClose.on('click', function() {
        // set new placeholder for demo
        var options = $(this).find('a').html();
        triggerOpen.text(options);

        $('#dropdown-menu').add(triggerOpen).toggleClass('open');
        m.set('triangle').size(10);
    });

});

//process collapes
$(function() {
  var b = $("#button");
  var w = $("#wrapper");
  var l = $("#list");

  w.height(l.outerHeight(true));

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }

  });
});

//portfolio-header fadeOutDown
$(function() {
  $('div.close-left').on('click',function() {
    $('section.portfolio-header').addClass('animated fadeOutDown');
  });
});

function delayURL(url,time){
  setTimeout("top.location.href = '" + url +"'",time);
}
