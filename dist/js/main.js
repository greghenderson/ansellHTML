$(document).ready(function() {
    $("#hamburger").on("click", function() {
        $(this).find("i").toggleClass("fa-bars fa-times");
    });

    $(".slider").slick({
        dots: true,
        arrows: false,
        lazyLoad: "progressive",
        mobileFirst: true
    });


    var slyOptions = {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        //scrollBar: $('.frame').next('.scrollbar'),
        scrollBy: 1,
        //pagesBar: $example.find('.pages'),
        activatePageOn: 'click',
        speed: 200,
        moveBy: 600,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 0,
        clickBar: 1,

        // Buttons
        // forward: $example.find('.forward'),
        // backward: $example.find('.backward'),
        // prev: $example.find('.prev'),
        // next: $example.find('.next'),
        // prevPage: $example.find('.prevPage'),
        // nextPage: $example.find('.nextPage')
    }


    var $sliderFrame = $('.frame');
    $('.frame').each(function(i, e){
        $(this).addClass('frame-'+i);
        var scrollbarOption = {scrollBar: $('.frame-'+i).next('.scrollbar')}
        new Sly($('.frame-'+i), $.extend( slyOptions, scrollbarOption )).init();
    });

    $(window).resize(function(e) {
        if($sliderFrame !== undefined){
            $sliderFrame.sly('reload');	
        }        
    });
});

