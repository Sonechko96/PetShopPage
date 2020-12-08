$(document).ready(function() {

    $('.cat-card__like, .pass').on('click', function () {
        $(this).toggleClass('pass').toggleClass('act');
    })


    let newBtnText = 'Продан';
    function soldCat() {
        $('.sold').text(newBtnText);
        $('.sold').css('background', '#1F2021');
    }
    soldCat();


    $('.sorting-price, .sorting-age').on('click', function () {
        $(this).toggleClass('arrowUp').toggleClass('arrowDown');
    })



    let btn = $('.scrollUp');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    $('.scrollUp').click(function() {
        $("html, body").animate({
            scrollTop:0
        },1000);
    })


    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-burger').toggleClass('menu-burger_active');
        $('html').toggleClass('overflow-h');
    });





});




