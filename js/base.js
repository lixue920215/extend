(function () {
    // 计算REM
    var width = window.innerWidth;
    /*lager screen*/
    if (width > 640) {
        width = 500;
    }
    var r = width / 16 + "px";
    document.querySelector("html").style.fontSize = r;
})();