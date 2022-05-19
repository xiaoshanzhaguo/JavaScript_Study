$(function () {
    // 1. 显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    // 刷新页面会调用
    toggleTool();

    // 封装显示隐藏电梯导航的函数
    function toggleTool() {
        // ！！！下面的scrollTop要加()，它是个方法
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    $(window).scroll(function () {
        // 滚动页面也会调用
        toggleTool();
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

        // 点击之后，让当前的小li 添加current 类名，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass(); // 因为小li里面只要current一个类名，添加和删除都是针对class来说的，因此removeClass里面不用写current也没问题
    });
});