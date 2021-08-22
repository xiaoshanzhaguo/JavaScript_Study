"use strict";

function showPic(whichpic) {
  // 路径变量
  var source = whichpic.getAttribute("href"); // 获取占位符图片

  var placeholder = document.getElementById("placeholder"); // 刷新img标签中src属性的值

  placeholder.setAttribute("src", source); // 获取whichpic对象的title属性值

  var text = whichpic.getAttribute("title"); // 引用id为description的文本段落

  var description = document.getElementById("description"); // alert(description.firstChild.nodeValue);
  // 用text变量去刷新id值等于description的那个<p>元素的第一个子节点的nodeValue属性值

  description.firstChild.nodeValue = text;
}

;

function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0]; // alert(body_element.childNodes.length);
}

; // 上面的函数在页面加载时使用，这需要用到onload事件处理函数

window.onload = countBodyChildren;