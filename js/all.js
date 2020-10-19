$(".backtoTOP").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },1500);
});
$(".menu  > li").hover(function () {
    // over
    $(this).addClass("active");
    $(this).find(".fas.fa-plus").show();
    $(this).find(".fas.fa-minus").hide();

}, function () {
    // out
    $(this).removeClass("active");
    $(this).find(".menu-open-second").hide();
    $(this).find(".menu-open > li").removeClass("menu-green");

}
);
$(".menu-open > li > a ").click(function(e){
    e.preventDefault();
    $(this).parent().find("ul").slideToggle(800);
    $(this).parent().siblings().find("ul").slideUp(800);
    $(this).parent().toggleClass("menu-green");
    $(this).parent().siblings().removeClass("menu-green"); 
    $(this).find(".fas.fa-minus").toggle();
    $(this).find(".fas.fa-plus").toggle();
    $(this).parent().siblings().find(".fas.fa-plus").show();
    $(this).parent().siblings().find(".fas.fa-minus").hide();
});
$(".menu-open > li > a ").click(function(e){
    e.preventDefault();
   

});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "cube",
    cubeEffect: {
        slideShadows: false,
    },
    speed: 2000,
    autoplay: {
        delay: 1500,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});