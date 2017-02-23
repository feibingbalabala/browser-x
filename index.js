var browser = require('browser-x');

// var url = 'http://www.baidu.com';
// 抓不了https开头的东西
var url = "./demo.html";
browser({
    url: url,
    loadCssFile: true,
    silent: false
}, function (errors, window) {
    if (errors) {
        throw errors;
    }
    var document = window.document;
    // 获取页面的title
    console.log(document.title);
    //获取id为su的input标签名字
    console.log(document.getElementById("su").value);
    //获取页面中a标签的数量
    console.log(document.getElementsByTagName("a").length);
    //获取第一个a标签中的href
    console.log(document.getElementsByTagName("a")[0].getAttribute("href"));
    //获取所有a标签的href和innerHTML的内容
    var a = document.getElementById("demo-a").getElementsByTagName("a");
    var aHrefArr = [];
    var aTextArr = [];
    for (var i = 0 ; i < a.length; i++){
        aHrefArr.push(a[i].getAttribute("href"));
        aTextArr.push(a[i].innerHTML);
    };
    console.log(aHrefArr,aTextArr);
    //获取相同类名下的innerHTML内容
    var classNa = document.getElementById("demo-class").getElementsByTagName("li");
    var classNaArr = [];
    // console.log(classNa[0].className) 首先获取标签的数量
    for (var j = 0; j < classNa.length; j++){
       /* 一个标签可能有多个类名，用空格把他切割*/
        var classNas = classNa[j].className.toString().split(" ");
        // 根据一个标签的类名数量再做一个循环
            for(var x = 0; x < classNas.length; x++){
                // console.log(classNas[x]);
                // 判断标签内类名是否有满足需要的类名。
                if(classNas[x] == 'class1') {
                // console.log(classNa[j].innerHTML,classNas)
                // 如果有则把便签的内容输入数组
                    classNaArr.push(classNa[j].innerHTML);
                }
            }
    };
    console.log(classNaArr);
});