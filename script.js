/*fade animations*/
$(window).scroll(function(){
    /*intro page fade out animation*/
    $(".intro-page").css("opacity", 1 - $(window).scrollTop() / 450);
    /*about me fade in animation*/
    $("#about-me-section").css("opacity", 0 + $(window).scrollTop() / 330);

    /*implement gradient animation on main header
    $("#main-header").css("background-image", 0 + $(window).scrollTop() / 330);*/
});