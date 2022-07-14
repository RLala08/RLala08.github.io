/*on load*/
$(document).ready(function () {
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

    /*if($(window).scrollTop() > 150) {
        $(".link-list").show(800);
    }
    else{
        $(".link-list").hide(800);
    }*/
    /*implement gradient animation on main header
    $("#main-header").css("background-image", 0 + $(window).scrollTop() / 330);*/
});

/*let observer = new IntersectionObserver(function(entries) {
	// no intersection with screen
	if(entries[0].intersectionRatio === 0)
        $(".link-list").hide(800);
	// fully intersects with screen
	else if(entries[0].intersectionRatio === 1)
        $(".link-list").show(800);
}, { threshold: [0,1] });
observer.observe(document.querySelector("#main-header"));