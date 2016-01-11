(function ($) {
    $.fn.win=function(options){
        var defaults={
            width:"200",
            height:"100",
            title:"系统提示",
            content:"是否删除"
        }
        var opts = $.extend(defaults, options);
        var winHtml="<div class='window-box'>"
            +"<p class='window-title'>"+opts.title
            +"</p>"
            +"<p class='window-content'>"
            +opts.content
            +"</p>"
            +"<p class='window-button'>"
            +"<a href='javascript:;'>确认</a>"
            +"<a href='javascript:;'>取消</a>"
            +"</p>"
            +"</div>"
        $("body").append(winHtml);
        //$(".window-content").css("height",opts.height);
        $(".window-box").show();
        $(".window-button a").eq(0).on("click",function(){
            $(this).parents(".window-box").remove();
        });
        $(".window-button a").eq(1).on("click",function(){
            $(this).parents(".window-box").remove();
        });
    }
    
})(jQuery);