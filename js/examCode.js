$(function(){
		//出现浮动层
$("#products").bind("click",function(){
	$(".ftc_wzsf").show(300);
		// document.querySelectorAll("#myForm input")[0].setAttribute("autofocus","autofocus");
		$(window).unbind();
		stopEventBubble(event);
	})
//浮动层消失
$("#cancel").bind("click",function(e){
	// if(e.target.className == "srzfmm_box" || e.target.id == "myForm" || e.target.type == "tel" ||e.srcElement =="a")return;
	$(".ftc_wzsf").hide(300);
	$("#0").val("");
	$("#1").val("");
	$("#2").val("");
	$("#3").val("");
		id=0;
	});
$(".xiaq_tb").click(function(){
	$(".numb_box").slideUp(500);
});
$("#myForm").click(function(){
	$(".numb_box").slideDown(500);
});
var txts = $("#myForm input");
var id=txts[0].id;
$(".nub_ggg li a").bind('click',function(){
	if($("#"+id).val()==""&&id<=3){
		$("#"+id).val($(this).text());
		id++;
		$("#"+id).addClass('borderColor').siblings().removeClass('borderColor');
		if($("#0").val()!=""&&$("#1").val()!=""&&$("#2").val()!=""&&$("#3").val()!=""){
			document.getElementById("right").style.display="block";
			var t=setTimeout(function(){
				window.location.href="flowInfo.html";
				$(".ftc_wzsf").hide(300);
				$("#0").val("");
				$("#1").val("");
				$("#2").val("");
				$("#3").val("");
				$("#0").addClass('borderColor').siblings().removeClass('borderColor');
				document.getElementById("right").style.display="none";
				id=0;
			},1000)
		}
	}

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
})


})
