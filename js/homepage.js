var changeStatus = 0;
var swiper1 = new Swiper('.swiper-container', {
	followFinger: false,
	freeMode: false,
	speed: 350,
	pagination : '.swiper-pagination',
	paginationType : 'fraction',
	onInit: function(swiper){
		shownavs();
	},
	onSlideChangeStart: function() { /*手指滑动时，判断手指滑动的方向*/
		if(swiper1.activeIndex==0){
			swiper1.lockSwipeToNext()
			shownavs();
		}else{

		}
	},
	onTap: function(swiper, even) {
		hidenavs(); //点击页面隐藏侧边栏
	},
})

$(function() {
	navsHeight("navs"); //侧边栏导航
	$("#navRight").click(function() {
		showHide();
	})
})
function moveleft() {
	var startX, startY, moveEndX, moveEndY, X, Y, isTouchMove,isTouchdown,isTouchup;
	$(".swiper1 .swiper-slide:first").on("touchstart", function(e) {

		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
		isTouchMove = false;
		isTouchdown = false;
		isTouchup =false;
	});
	$(".swiper1 .swiper-slide:first").on('touchmove', function(e) {
		isTouchMove = true;
		isTouchdown = true;
		isTouchup =true;
		e.preventDefault();
	});
	$(".swiper1 .swiper-slide:first").on("touchend", function(e) {
		if(!isTouchMove) return;
		if(!isTouchdown) return;
		if(!isTouchup) return;

		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;
		if(Math.abs(X) > Math.abs(Y)) { //从右侧向左滑动
			//左滑关闭菜单后解锁
			if(X < -20) {
				if(changeStatus == 1) {
					hidenavs();
					swiper1.unlockSwipeToNext()
				} else {
					
				}
			//右滑拉出菜单前上锁
			} else if(X > 20) {
				swiper1.lockSwipeToNext();
				$(".scoreWrapper").stop().animate({
					left: 0
				}, 200);
				changeStatus = 1;
			}
		}
		if(Math.abs(X) <= 80 && Y >= 50){
			if(changeStatus == 1) {
				hidenavs();
				return;
			} else if(!changeStatus){
				window.location.href = "http://m.eqxiu.com/s/2bF3RH0Z";
			}
		}
		if(Math.abs(X) <= 80 && Y <= -50){
			if(changeStatus == 1) {
				hidenavs();
				return;
			} else if(!changeStatus){
				window.location.href = "parductsInfo.html";
			}
		}
	})
}
moveleft();
function goNext() {
	var startX, startY, moveEndX, moveEndY, X, Y,isTouchMove;
	$(".swiper1 .swiper-slide:last").on("touchstart", function(e) {
		// e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
		isTouchMove = false;
	});
	$(".swiper1 .swiper-slide:last").on("touchmove",function(e){
		isTouchMove = true;
		e.preventDefault();
	})
	$(".swiper1 .swiper-slide:last").on("touchend", function(e) {
		// e.preventDefault();
		if(!isTouchMove)return;
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;

		if(Math.abs(X) > Math.abs(Y)) {
			if(X < -20){

			}
		}
	});
}
goNext();

function hidenavs() {
	$(".scoreWrapper").stop().animate({
		left: -80 + "px"
	}, 200);
	changeStatus = 0;
}
function shownavs(){
	$(".scoreWrapper").stop().animate({
		left: 0
	}, 200);
	changeStatus = 1;
}
function showHide() {
	if(changeStatus) {
		$(".scoreWrapper").stop().animate({
			left: -80 + "px"
		}, 200);
		changeStatus = 0;
	} else {
		$(".scoreWrapper").stop().animate({
			left: 0
		}, 200);
		changeStatus = 1;
	}
}

function navsHeight(classname) {
	var liHeight = parseFloat((document.body.clientHeight-26) / 13);
	var navs = document.getElementsByClassName(classname);
	for(var i = 0; i < navs.length; i++) {
		navs[i].style.height = liHeight + "px";
		navs[i].style.lineHeight = liHeight + "px";
	}
}
//阻止事件冒泡
function stopEventBubble(event) {
	var e = event || window.event;

	if(e && e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}