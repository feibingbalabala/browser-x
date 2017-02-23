var browser = require('browser-x');

var url = "http://www.qdfuns.com/";
browser({
    url: url,
    loadCssFile: true,
    silent: false
}, function (errors, window) {
    if (errors) {
        throw errors;
    }
    var document = window.document;
    var classNa = document.getElementById("column-side").getElementsByTagName("li");
    var classNaArr = [];
    for (var j = 0; j < classNa.length; j++){
                    classNaArr.push(classNa[j].childNodes[0].innerHTML);
        
    };
    console.log(classNaArr);
});