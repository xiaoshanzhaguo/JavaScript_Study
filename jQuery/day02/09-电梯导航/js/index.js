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

    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        // console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置

        // 选出对应索引号的内容区的盒子 计算它的offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        })
    });
});