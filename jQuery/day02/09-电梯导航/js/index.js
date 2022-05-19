$(function () {
    // 1. 显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    $(window).scroll(function () {
        // ！！！下面的scrollTop要加()，它是个方法
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    });
});