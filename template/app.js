$(document).ready(function(){
    
        let menu_temp = $(".main-submenu").children().each(function(){
            $(this).clone().appendTo('.more-menu-contain');
        });
        let search_w = $(".search").width();
        let avatar_w = $(".avatar").width();
        let more_w = $('.more-menu').width();
        let menu_w_style = $(".submenu a").css('min-width');
        let menu_w = menu_w_style.replace("px","");
        let menus_w = $(window).width()-search_w-avatar_w-more_w;
        let show_items = Math.floor(menus_w / menu_w);
        console.log(show_items);
        $('.main-submenu a:nth-child('+(show_items+1)+')').prevAll().each(function(){
            $(this).css('display', 'block');
        });
        $('.more-menu-contain a:nth-child('+(show_items+1)+')').prevAll().each(function(){
            $(this).css('display', 'none');
        });
         $('.main-submenu a:nth-child('+show_items+')').nextAll().each(function(){
             $(this).css('display', 'none');
         });
         $('.more-menu-contain a:nth-child('+show_items+')').nextAll().each(function(){
            $(this).css('display', 'block');
        });
        $(".main-submenu").css("width", $(window).width()-search_w-avatar_w-more_w);
    $(window).resize(function(){
        let search_w = $(".search").width();
        let avatar_w = $(".avatar").width();
        let more_w = $('.more-menu').width();
        let menu_w_style = $(".submenu a").css('min-width');
        let menu_w = menu_w_style.replace("px","");
        let menus_w = $(window).width()-search_w-avatar_w-more_w;
        let show_items = Math.floor(menus_w / menu_w);
        console.log(show_items);
        $('.main-submenu a:nth-child('+(show_items+1)+')').prevAll().each(function(){
            $(this).css('display', 'block');
        });
        $('.more-menu-contain a:nth-child('+(show_items+1)+')').prevAll().each(function(){
            $(this).css('display', 'none');
        });
         $('.main-submenu a:nth-child('+show_items+')').nextAll().each(function(){
             $(this).css('display', 'none');
         });
         $('.more-menu-contain a:nth-child('+show_items+')').nextAll().each(function(){
            $(this).css('display', 'block');
        });
        $(".main-submenu").css("width", $(window).width()-search_w-avatar_w-more_w);
    });
    $(".dropdown-toggle").click(function(){
        $(".more-menu-contain").toggleClass("show");
    });

});