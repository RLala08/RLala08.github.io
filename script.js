let headerTop = $("#main-header").offset().top; //scroll point top of header
/*on load*/
$(document).ready(function(){
    /*welcome text fade in*/
    $("#welcome-top, #welcome-bottom, #scroll-down").fadeIn(2000);
    /*arrow bounce*/
    $("#scroll-down").effect( "bounce", {times:3}, 900 );
});
/*scrolling animations*/
$(window).scroll(function(){
    /*intro page fade out animation*/
    $(".intro-page").css("opacity", 1 - $(window).scrollTop() / 450);
    /*about me fade in animation*/
    $("#about-me-section").css("opacity", 0 + $(window).scrollTop() / 330);
    $("#education-section").css("opacity", 0 + $(window).scrollTop() / 330);
    /*links show animation*/
    if($(window).scrollTop() > (headerTop)){
        $(".link-list").show(500);
     }
    else{
        $(".link-list").hide(500);
     }
    /*implement gradient animation on main header
    $("#main-header").css("background-image", 0 + $(window).scrollTop() / 330);*/
});