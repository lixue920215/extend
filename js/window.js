(function ($) {
    /*$.fn.win=function(options){
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
    }*/
    //定义构造函数
    var window=function(options){
        this.defaults={
            width:"200",
            height:"100",
            title:"系统提示",
            content:"是否删除"
        }
        this.options=$.extend(this.default,options);
    }
    window.prototype={
        init:function(){
            var winHtml="<div class='window-box'>"
                        +"<p class='window-title'>"+this.options.title
                        +"</p>"
                        +"<p class='window-content'>"
                        +this.options.content
                        +"</p>"
                        +"<p class='window-button'>"
                        +"<a href='javascript:;'>确认</a>"
                        +"<a href='javascript:;'>取消</a>"
                        +"</p>"
                        +"</div>"
            $("body").append(winHtml);
            $(".window-box").show();
            $(".window-button a").eq(0).on("click",function(){
                window.bind($(this));
            });
            $(".window-button a").eq(1).on("click",function(){
                window.bind($(this));
            });
        },
        bind:function(obj){
            //console.log(obj);
            obj.parents(".window-box").remove();
        }
    }
    $.fn.win=function(options){
        var window1=new window(options);
        return window1.init();
    }
})(jQuery);
;(function($){
    $.fn.selectCustom=function(options){
        $.fn.selectCustom.defaults={
            scrollId:'scroll',      //绑定滚动条的id
			dropClass:'dropdown',   //是否下拉控制的class
			dropbutton:'selected',  //选中状态的class  触发器class
			dropwrap:'select-drop-wrap',  //下拉列表容器class
			itemClass:'option',         //下拉列表class
			valAttr:'data-type',        //模拟options值属性
			event:'click',              //点击事件
			dataname:'selectVal',       //绑定选中值data名
			callback:null               //回调函数，参数为dataname的值，即在下拉列表中选中的列表所代表的值，类型为字符串，通过下拉列表的valAttr对应的属性控制
        }
        var opts=$.extend({},$.fn.selectCustom.defaults,options);
        this.each(function(){
            var $this=$(this),
                scrollId=opts.scrollId,
                dropClass=opts.dropClass,
                dropbutton=opts.dropbutton,
                dropwrap=opts.dropwrap,
                itemClass=opts.itemClass,
                valAttr=opts.valAttr,
                event=opts.event,
                dataname=opts.dataname,
                callback=opts.callback,
                $dropbtn=$this.children('.'+dropbutton),
                $dropwrap=$this.find('.'+dropwrap),
                $scrollId=$this.find('.'+scrollId),
                show=function(){
                    $this.addClass(dropClass); 
                    setTimeout(function(){
                        $scrollId.niceScroll({
                            cursorcolor:"#c6c7cb",  
                            cursoropacitymax:1,  
                            touchbehavior:false,  
                            cursorwidth:"5px",  
                            cursorborder:"0",  
                            cursorborderradius:"0px",
                        });
                        $scrollId.getNiceScroll().resize().show();
                    },300);
                },
                hide=function(){
                    setTimeout(function(){$scrollId.niceScroll({
						        cursorcolor:"#c6c7cb",  
						        cursoropacitymax:1,  
						        touchbehavior:false,  
						        cursorwidth:"5px",  
						        cursorborder:"0",  
						        cursorborderradius:"0px",
						    });
							$scrollId.getNiceScroll().resize().hide();
						});
                    $this.removeClass(dropClass);
                },
                saveVal=function(data){
                    $this.data(dataname,data);
                };
            $scrollId.getNiceScroll().hide();
            saveVal($dropbtn.attr(valAttr));
            $('html').on(event,function(e){
                var c=e.target.className;
                if($this[0]==$(e.target).parents('.select-wrap')[0]){
                    if($this.hasClass(dropClass)){
                        hide();
                        if(c == itemClass){
                            var $targe=$(e.target),
                                data=$targe.attr(valAttr),
                                text=$targe.text();
                            $targe.addClass(dropbutton)
                                  .siblings().removeClass(dropbutton);
                            $dropbtn.text(text).attr(valAttr,data);
                            saveVal(data);
                            if(callback)callback(data);
                        }
                    }else{
                        show();
                    }
                }else{
                    if($this.hasClass(dropClass)){
							hide();
						}
                }
            })
        });
        
    }
})(jQuery);