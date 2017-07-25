/**
 * Created by Administrator on 2016/11/7.
 */
$(document).ready(function(){
    /* 滑动/展开 */
    $("ul.expmenu li > div.header").click(function(){
        var arrow = $(this).find("span.arrow");
        if(arrow.hasClass("up")){
            arrow.removeClass("up");
            arrow.addClass("down");
        }else if(arrow.hasClass("down")){
            arrow.removeClass("down");
            arrow.addClass("up");
        }
        $(this).parent().find("ul.menu").slideToggle();

    });
    // $(".pict img").unbind().touchTouch();
    $(".starsBox").click(function(e){
        var arrow = $(this).prev().find("span.arrow");
        if(arrow.hasClass("up")){
            arrow.removeClass("up");
            arrow.addClass("down");
        }else if(arrow.hasClass("down")){
            arrow.removeClass("down");
            arrow.addClass("up");
        }
        $(this).parent().find("ul.menu").slideToggle();
    })

//
    $("#myForm").bind("click",function(){
        $(".numb_box").slideDown(500);
        var incodeHeight=$("#myinputscode").offset().top;//元素距离顶部距离
        var inputHeight=$("#myinputscode").height(); //输入框高度
        var totalHeight=incodeHeight+inputHeight;
        var bodyHeight=$(window).height();
        var scrollTop=totalHeight-bodyHeight;
        var newscroll=scrollTop+247;
        if($("body").scrollTop() >= newscroll){
            return;
        }else{
            $("body").stop().animate({
                scrollTop:newscroll
            },500);
        }
    });
    $("#cancel").bind("click",function(e){
        $(".numb_box").slideUp(500);
        $(".mui-content").scrollTop(0);
        stopEventBubble(event);
    });
    $("body").click(function(){
        $(".numb_box").slideUp(500);
    })
    //阻止事件冒泡
    function stopEventBubble(event) {
        var e = event || window.event;
        if(e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
});
function disapp(){
    $(".bs-example-modal-sm").modal("hide");
}