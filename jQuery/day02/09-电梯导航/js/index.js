$(function () {
    // 当我们点了小li 此时不需要执行页面滚动事件里面的 li的背景选择 添加current
    // 节流阀  互斥锁
    var flag = true;

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

        if (flag) {
            // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top - 300) {
                    // console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        // console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置

        // 选出对应索引号的内容区的盒子 计算它的offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            // 页面滚动完成，到达了目标位置后，再把节流阀打开
            flag = true;
        })

        // 点击之后，让当前的小li 添加current 类名，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass(); // 因为小li里面只要current一个类名，添加和删除都是针对class来说的，因此removeClass里面不用写current也没问题
    });
});