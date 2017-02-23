var browser = require('browser-x');
//这个也是类似虚拟dom所以抓不到什么东西
var url = "http://www.toutiao.com/";
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
    // 获取所有的li
    var classNa = document.getElementsByTagName("li");
    var classNaArr = [];
    // console.log(classNa[0].className) 
    // 首先对目标标签进行一个遍历
    for (var j = 0; j < classNa.length; j++){
       /* 一个标签可能有多个类名，用空格把他切割*/
        var classNas = classNa[j].className.toString().split(" ");
        // 根据一个标签的类名数量再做一个循环，找到对应的类名
            for(var x = 0; x < classNas.length; x++){
                // console.log(classNas[x]);
                // 判断标签内类名是否有满足需要的类名。
                if(classNas[x] == 'item') {
                // console.log(classNa[j].innerHTML,classNas)
                // 如果有则把便签的内容输入数组
                    classNaArr.push(classNa[j].childNodes[0].innerHTML);
                }
            }
        // if(classNa[j].className == 'class1') {
        //     classNaArr.push(classNa[j].innerHTML);
        // }
    };
    console.log(classNaArr);
});