// 等整个页面加载完，再运行js
window.addEventListener('load', function () {
    // alert(1);
    // 1. 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus 的宽度
    var w = focus.offsetWidth;

    // 2. 利用定时器自动轮播图片
    var index = 0;
    var timer = this.setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s'; // 给ul加一个过渡效果
        ul.style.transform = 'translate(' + translatex + 'px)'; // 向左移动
    }, 2000);

    // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        // 无缝滚动
        if (index == 3) {
            index = 0;
            // console.log(index);
            // 去掉过渡效果 这样让我们的ul 快速跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translate(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            // 去掉过渡效果 这样让我们的ul 快速跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translate(' + translatex + 'px)';
        }
    })
});