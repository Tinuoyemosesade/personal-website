$(document).ready(function(){

    $('#slides').superslides({
            animation: 'fade',
            play: 5000,
            pagination: false

    });
    let typed = new Typed(".typed", {
        strings: ["Software Quality Assurance Manager.", "FrontEnd Development Enthusiast.", "Musician."],
        typespeed: 70,
        loop: true,
        startDelay: 2000,
        showCursor: false
    });

});