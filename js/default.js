$(document).ready(function () {

    $(".navbar a").on('click', function (event) {
        console.log(this.hash)
        if(this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 40
            }, 900, function () {
                window.location.hash = hash;
            })
        }

    })
});

$(window).scroll(function() {
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});









