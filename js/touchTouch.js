(function(){
	var overlay=$('<div id="galleryOverlay"></div>'), //大全屏黑布
		slider=$('<div id="gallerySlider"></div>'),	  //大盒子放图片
		pageSpan = $('<span id="pagelimit"></span>'),  //分页页码
		overlayVisible = false;                      //true,false,初始化开关

	$.fn.touchTouch = function(){
		var placeholders = $([]),					//将数组转化为对象
			index = 0,
			items = this;
			overlay.hide().appendTo("body")//将元素添加到body中
			slider.appendTo(overlay);
			pageSpan.appendTo(overlay);	
		items.each(function(){                     //遍历a动态创建div元素
			placeholders = placeholders.add($('<div class="placeholder">'));
		});
		slider.append(placeholders).on("click",function(){
			hideOverlay();

		});
		$('body').on("touchstart","#gallerySlider img",function(e){
			var touch = e.originalEvent,
				startX = touch.changedTouches[0].pageX;
			slider.on('touchmove',function(e){
				e.preventDefault();
				touch = e.originalEvent.touches[0] ||      //dom对象和jquery对象的两种写法 手指列表
						e.originalEvent.changedTouches[0];
				if(touch.pageX - startX > 10){            //获取此时X坐标减去开始坐标大于10 相当于向右大于10 
					slider.off('touchmove');              //解除绑定事件
					showPrevious();                       //显示上一张
				}
				else if (touch.pageX - startX < -10){     //如果移动过程中x坐标小于开始坐标10 相当于向左划动
					slider.off('touchmove');              //解除绑定事件 
					showNext();                           //显示下一张
				}
			});
				return false;
			
		}).on('touchend',function(){
			slider.off('touchmove');
		});
		items.on('click',function(e){
			e.preventDefault();
			index=items.index(this);
			showOverlay(index);
			showImage(index);
			calcPages(items,index);
			preload(index+1);
			preload(index-1);
			$(document).data("overlayVisible",true);
			e.cancelBubble=true;
		});
		function calcPages(items,index){
			pageSpan.text((index+1)+"/"+items.length);
		}
		function showOverlay(index){
			if(overlayVisible){
				return false;
			}
			overlay.show();
			setTimeout(function(){
				overlay.addClass("visible");
			},100);
			offsetSlider(index);
			overlayVisible=true;
		}
		function hideOverlay(){
			if(!overlayVisible){
				return false;
			}
			overlay.hide().removeClass("visible");
			overlayVisible=false;
			$(document).data("overlayVisible",overlayVisible);
		}
		function offsetSlider(index){
			slider.css('left',(-index*100)+'%');
		}
		function preload(index){
			setTimeout(function(){
				showImage(index);
			},1000);
		}
		function showImage(index){
			if(index<0||index>=items.length){
				return false;
			}
			loadImage(items.eq(index).attr('href'),function(){
				placeholders.eq(index).html(this);
			});
		}
		function loadImage(src,callback){
			var img=$('<img>').on('load',function(){
				callback.call(img);
			})
			img.attr('src',src);
		}
		function showNext(){
			if(index+1<items.length){
				index++;
				offsetSlider(index);
				preload(index+1);
				calcPages(items,index);
			}
			else{
				slider.addClass('rightSpring');
				setTimeout(function(){
					slider.removeClass('rightSpring');
				},500);
			}
		}
		function showPrevious(){
			if(index>0){
				index--;
				offsetSlider(index);
				preload(index-1);
				calcPages(items,index);
			}
			else{
				slider.addClass('leftSpring');
				setTimeout(function(){
					slider.removeClass('leftSpring');
				},500);
			}
		}

	};
})(jQuery);