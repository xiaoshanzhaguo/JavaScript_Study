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
    })
})