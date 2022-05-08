// 页面加载完后，才执行js
window.addEventListener('load', function () {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清楚定时器变量  因为不用了，最好释放一下
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000);
    })

    // 3. 动态生成小圆圈 有几张图片，我就生成几个小圆圈
    var ul = focus.querySelector('ul'); // 必须加一个限定，因为这是正式开发，里面的ul很多
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);

        // 把小li插入ol 里面
        ol.appendChild(li);

        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人 把所有小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  this指向函数的调用者
            this.className = 'current';

            // 5. 点击小圆圈，移动图片 当前移动的是 ul
            // ul的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');

            // 当我们点击了某个小li 就要把这个li 的索引号给 num
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle
            circle = index;
            // num = circle = index;

            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个li设置类名为 current
    ol.children[0].className = 'current';

    // 6.克隆第一张图片(li) 放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 7. 点击右侧按钮，图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    arrow_r.addEventListener('click', function () {
        // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为0
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);


        // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
        circle++;
        // 如果circle == 4 说明走到最后 我们克隆的这张图片了 我们就复原
        if (circle == ol.children.length) {
            circle = 0;
        }

        // 调用函数
        circleChange();
    });

    // 9. 左侧按钮做法
    arrow_l.addEventListener('click', function () {
        // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px'; // ！！！千万别忘了加px
        }
        num--;
        // 我终于看懂了 为什么 点击左箭头还是负值，因为你们看left值为负数往左移动的距离。而num是减少的，所以left离0分界点会越来越近，ul整体是往右移动的，但ul位于focus还是负的left
        animate(ul, -num * focusWidth);


        // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
        circle--;
        // 如果circle < 0 说明走到第一张图片，则小圆圈要改为第4个小圆圈（3）
        // if (circle < 0) {
        //     circle = ol.children.length - 1;
        // }
        circle = circle < 0 ? ol.children.length - 1 : circle;

        // 调用函数
        circleChange();
    });

    function circleChange() {
        // 先清楚其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }

    // 10. 自动播放轮播图
    var timer = setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);
})