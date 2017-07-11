
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll(".top-right")[0];
toggle_open_text = '区域';
toggle_close_text = '关闭';
toggle.addEventListener('click', function() {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
    } else {
        toggle.innerHTML = toggle_open_text;
    }
}, false);