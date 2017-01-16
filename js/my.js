$(document).ready(function () {

    $(".navbar a").on('click', function (event) {

        if(this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 1000, function () {
                window.location.hash = hash;
            })
        }

    })
});