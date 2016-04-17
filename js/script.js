
$(function() {
//menu 
   $('nav>ul').addClass('nav_menu');
    $('.nav_menu>li').addClass('nav_menu__item');
    $('.nav_menu').find('a').addClass('menu__link');
    $('.nav_menu__item ul').each(function () {
         $(this).addClass('sub_menu').parent().addClass('dropdown_menu');
     });
    
     $('.dropdown_menu').hover(
         function() {
             $(this).children('.sub_menu').stop().slideDown(500);
         },function(){
             $(this).children('.sub_menu').stop().slideUp(500);
         }
     );

// select
    $('.basic').fancySelect();
    
//carousel
    $('.jcarousel').jcarousel();
    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });
    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

// JS-checkbox

    $('.js_checkbox').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.attr("checked")){
            $(this).addClass("js_check_active");
        }
    });


    $('.js_checkbox').click(function(){
        var checkbox = $(this).find('input[type=checkbox]');
            if(checkbox.attr("checked")){
            $(this).removeClass("js_check_active");
            checkbox.removeAttr("checked");
        }else{
            $(this).addClass("js_check_active");
            checkbox.attr("checked", "checked");
        }
    });
});
