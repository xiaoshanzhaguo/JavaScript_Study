"use strict";

function showPic(whichpic) {
  // 路径变量
  var source = whichpic.getAttribute("href"); // 获取占位符图片

  var placeholder = document.getElementById("placeholder"); // 刷新img标签中src属性的值

  placeholder.setAttribute("src", source); // 测试2
}