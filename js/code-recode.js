/**
 * Created by Administrator on 2016/10/26.
 */
$(function(){
    $("#cancel").bind("click",function(e){
        $(".numb_box").slideUp(500);
        stopEventBubble(event);
    });
    $(".xiaq_tb").click(function(){
        $(".numb_box").slideUp(500);
        stopEventBubble(event);
    });
    $("#myForm").click(function(){
        $(".numb_box").slideDown(500);
        $("#0").addClass("borderColor");
        stopEventBubble(event);
    });
    var txts = $("#myForm input");
    var id=txts[0].id;
    $(".nub_ggg li a").unbind().click(function(){
        if($("#"+id).val()==""&&id<=3){
            $("#"+id).val($(this).text());
            id++;
            $("#"+id).addClass('borderColor').siblings().removeClass('borderColor');
            if($("#0").val()!=""&&$("#1").val()!=""&&$("#2").val()!=""&&$("#3").val()!=""){
                document.getElementById("myinputscode").style.display="none";
                // $("#myinputscode").children().remove();
                $(".rightInfo").css("display","block");
                var tt=setTimeout(function(){
                    $(".rightInfo").css("display","none");
                    document.getElementById("showResult").style.display="block";
                    // $(".expmenu").css("display","block");
                   //  var html='<div class="codeInfo" id="codeInfo"><p class="recode">扫码记录</p>';
                   //  html+='<span class="details">您购买的是由四川泸州醇酒业营销有限公司生产的产品.</span>';
                   //  html+='<div id="coderecoder">';
                   //  html+='<p class="warningInfo">';
                   //  html+='<span>此商品已经被扫码<span class="textColor">三次</span>以上，请谨慎消费！</span>';
                   //  html+='<a class="rt" data-toggle="modal" data-target=".bs-example-modal-sm">立即反馈</a>';
                   //  html+=' </p>';
                   //  html+='<ul class="takeNotes">';
                   //  html+=' <li><span class="textColor">第一次扫码</span><span class="rt">2016-09-12 12:00:00 四川省成都市创业路</span></li>';
                   //  html+='<li><span class="textColor">第二次扫码</span><span class="rt">2016-09-12 12:00:00 四川省成都市创业路</span></li>';
                   //  html+='<li><span class="textColor">第三次扫码</span><span class="rt">2016-09-12 12:00:00 四川省成都市创业路</span></li>';
                   //  html+='</ul>';
                   //  html+='</div>';
                   //  html+='</div>';
                   //
                   //  html+='<ul class="expmenu" id="showcontent">';
                   //  html+='<li>';
                   //  html+='<div class="header" id="haop">';
                   //  html+='<span class="labels" >商品好评度</span>';
                   //  html+='<span class="arrow down"></span>';
                   //  html+='</div>';
                   //  html+='<div class="starsBox">';
                   //  html+='<ul class="myStars">';
                   //  html+='<li><img src="img/redstar.png" /></li>';
                   //  html+='<li><img src="img/redstar.png" /></li>';
                   //  html+='<li><img src="img/redstar.png" /></li>';
                   //  html+='<li><img src="img/redstar.png" /></li>';
                   //  html+='<li><img src="img/starthalf.png"/></li>';
                   //  html+='</ul>';
                   //  html+='<span class="numbers" ><span class="textColor">12446</span >人评论</span>';
                   //  html+='</div>';
                   //  html+='<ul class="menu">';
                   //  html+='<li>';
                   //  html+='<ul class="myStars">';
                   //  html+=' <li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+=' <li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='</ul>' ;
                   //  html+='<div class="progress">';
                   //  html+='<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">';
                   //  html+='</div>';
                   //  html+=' </div>';
                   //  html+=' </li>' ;
                   //  html+='<li>';
                   //  html+='<ul class="myStars">';
                   //  html+=' <li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>' ;
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='</ul>' ;
                   //  html+='<div class="progress">' ;
                   //  html+='<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">';
                   //  html+=' </div>';
                   //  html+='</div>' ;
                   //  html+='</li>';
                   //  html+=' <li>';
                   //  html+='<ul class="myStars">';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='</ul>';
                   //  html+='<div class="progress">';
                   //  html+='<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">';
                   //  html+='</div>';
                   //  html+='</div>' ;
                   //  html+='</li>' ;
                   //  html+='<li>';
                   //  html+='<ul class="myStars">';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+=' <li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>' ;
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+='</ul>' ;
                   //  html+='<div class="progress">' ;
                   //  html+='<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">';
                   //  html+=' </div>' ;
                   //  html+=' </div>';
                   //  html+=' </li>';
                   //  html+=' <li>';
                   //  html+='<ul class="myStars">';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star02.png" /></li>';
                   //  html+='<li><img src="img/star01.png" /></li>';
                   //  html+=' </ul>';
                   //  html+=' <div class="progress">';
                   //  html+='<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 10%;">' ;
                   //  html+='</div>';
                   //  html+=' </div>';
                   //  html+=' </li>' ;
                   //   html+=' </ul>';
                   //   html+='</li>' ;
                   //   html+=' <li>';
                   //   html+=' <div class="header">' ;
                   //   html+='<span class="labels">营业执照</span>';
                   //   html+='<span class="arrow down"></span>';
                   //   html+='</div>';
                   //   html+='<ul class="menu">' ;
                   //   html+='<div class="my-gallery" data-pswp-uid="1">';
                   //   html+='  <figure><span>' ;
                   //   html+='<a href="img/zz1.jpg" data-size="670x712">';
                   //   html+='<img style="width:80%;" src="img/zz.jpg">' ;
                   //   html+='</a></span>';
                   //   html+='</figure>'  ;
                   //   html+='</div>' ;
                   //   html+='</ul>';
                   //   html+='</li>' ;
                   //   html+=' <li>';
                   //   html+='<div class="header">' ;
                   //   html+='<span class="labels">检验报告</span>';
                   //   html+='<span class="arrow down"></span>';
                   //   html+='</div>';
                   //   html+=' <ul class="menu">';
                   //   html+=' <div class="my-gallery" data-pswp-uid="1">';
                   //   html+='<figure><span>';
                   //   html+='<a href="img/bg1.jpg" data-size="670x712">';
                   //   html+='<img style="width:80%;" src="img/bg.jpg">';
                   //   html+='</a></span>';
                   //   html+='</figure>' ;
                   //   html+='</div>';
                   //   html+=' </ul>';
                   //   html+=' </li>';
                   //   html+=' <li>' ;
                   //   html+='<div class="header" id="intro">';
                   //   html+='<span class="labels">公司简介</span>';
                   //   html+='<span class="arrow down"></span>';
                   //   html+=' </div>';
                   //   html+='<ul class="menu">';
                   //   html+='<li style="padding-top:5px;padding-bottom:5px;">' ;
                   //   html+='<p class="textinfo">';
                   //  html+=' 四川泸州窖酒业营销有限公司，成立于1998年8月，系泸州老窖旗下最佳品牌运营商，十几年来本着“高起点、高速度、高质量、高效益”的宗旨，倾全力打造泸州老窖全国战略性品牌--泸州醇。多年的成功运作，已使得今天的泸州醇具有强大的品牌影响力和广阔的发展前景。';
                   //  html+='</p><br>';
                   //  html+='<p class="textinfo">';
                   //  html+='泸州醇酒具备得天独厚的地域环境、气候条件、历史沉淀、技术传承、工艺升级等综合条件，以生态原粮、龙泉活水、陈年老窖酿造孕育出了“味美醇香、柔和甘冽”的优异产品，以其“柔和口感”引领着当今健康白酒的新趋势，成为柔和型白酒的典范。';
                   // html+='</p><br>';
                   // html+='<p class="textinfo">';
                   //  html+=' 纵观白酒市场风起云涌，公司本着“资源构筑平台、服务体现价值、价值托起客户”的理念，以优秀的产品、先进的品牌营销理念、专业的营销团队、现代化的科学管理，全方位、多维度为客户提供市场支持与服务，确保实现客户与公司的双赢。';
                   //  html+='</p><br>';
                   //  html+='<p class="textinfo">';
                   //  html+='“尽至诚之心，献至善之作”，泸州醇将与您鼎力携手共创美好明天!';
                   //      html+='</p>';
                   //  html+='</li>';
                   //  html+='</ul>';
                   //  html+='</li>';
                   //  html+='</ul>';
                   //  $("#showResult").html(html);
                    $(".numb_box").slideUp(500);
                },500)

            }
        }
        stopEventBubble(event);
    })
    var index=0;
    $(".del").bind("click",function(){
        var txts = $("#myForm input");
        for(var j=0;j<txts.length;j++){
            if($("#"+j).val()==""){
                index=j-1;
                break;
            }
        }
        if(index<=3&&index>=0){
            $("#"+index).val("");

            id=index;
            index--;
            $("#"+id).addClass('borderColor').siblings().removeClass('borderColor');
        }
        stopEventBubble(event);
    })


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
