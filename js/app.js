jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/background.jpg'], // 切り替える背景画像を指定
    });
});


$('.tagline').letterfx({"fx":"fall", "letter_end":"stay"});

// $('.tagline').arctext({
//     radius: 400,
// });

$(function() {
    $('[data-toggle="poppver"]').popover()
});

$(function() {
    $('.depo').popover({
        container: 'body',
    })
})
