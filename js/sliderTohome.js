/**
 * Created by Administrator on 2016/11/7.
 */
$("#wrapper").scroll(function(){
    console.log($(this).scrollTop());
})
// var scrollDown = function(){
//     $("#wrapper").scroll(function(){
//         console.log(111);
//     })
//     //     scrollHandler = null;
//     // document.querySelector('body' ).addEventListener('scroll', function (e) {
//     //     if(scrollHandler){
//     //         clearTimeout(scrollHandler);
//     //     }
//     //     scrollHandler = setTimeout(function(){
//     //         if(scroll.y > 30){
//     //             $('body').on("touchstart",".mui-content",function(e){
//     //                 var touch = e.originalEvent,
//     //                     startY = touch.changedTouches[0].pageY,
//     //                     startX=touch.changedTouches[0].pageX;
//     //                 $(".mui-scroll").on('touchend',function(e){
//     //
//     //                     touch = e.originalEvent.touches[0] ||
//     //                         e.originalEvent.changedTouches[0];
//     //                     if(touch.pageY - startY > 50&& Math.abs(touch.pageX- startX)<20){
//     //                         $(".mui-scroll").off('touchend');
//     //                         window.location.href="02首页导航.html";
//     //                     }
//     //                     else if (touch.pageY - startY< -100){
//     //                         $(".mui-scroll").off('touchend');
//     //                     }
//     //                 });
//     //                 return false;
//     //             });
//     //         }
//     //         scrollHandler = null;
//     //     },10);
//     // })
// }
// scrollDown();

