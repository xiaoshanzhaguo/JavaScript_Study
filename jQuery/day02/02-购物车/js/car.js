// 等页面全部加载完再去执行
$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)就可以了
    // 事件可以使用change
    $(".checkall").change(function () {
        // console.log($(this).prop("checked"));
        // 因为三个小按钮里有隐式迭代，会依次改变三个小按钮的状态
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
    });

    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // if (被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);

        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });

    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $(".increment").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        // console.log(n);
        n++;
        $(this).siblings(".itxt").val(n);

        // 4. 计算小计模块 根据文本框的值 乘以 当前商品的价格 就是商品的小计
        // 当前商品的价格 p
        // var p = $(this).parent().parent().siblings(".p-price").html();
        // parents(".p-num") 返回指定的祖先元素
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2);
        // 小计模块
        // toFixed(2) 可以让我们保留2位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
    });
    $(".decrement").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        // console.log(n);
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);

        // 4. 计算小计模块 根据文本框的值 乘以 当前商品的价格 就是商品的小计
        // 当前商品的价格 p
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
    });
})