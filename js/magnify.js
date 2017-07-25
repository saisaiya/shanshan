(function(){
    var overlay=$('<div id="galleryOverlay"></div>'), //大全屏黑布
        slider=$('<div id="gallerySlider"></div>'),   //大盒子放图片
        pageSpan = $('<span id="pagelimit"></span>'),  //分页页码
        overlayVisible = false;                      //true,false,初始化开关

    $.fn.touchTouch = function(){
        var placeholders = $([]),                   //将数组转化为对象
            index = 0,
            items = this;
            overlay.hide().appendTo("body")//将元素添加到body中
            slider.appendTo(overlay);
            pageSpan.appendTo(overlay); 
        items.each(function(){                     //遍历a动态创建div元素
            placeholders = placeholders.add($('<div class="placeholder">'));
        });
        slider.append(placeholders).on("click",function(e){
            var e=e||window.event;
            if(e.target == "img"){

            }else if(e.target.className=="placeholder"){
                hideOverlay();
            }

        });
        $('#galleryOverlay').on("dblclick","#gallerySlider img",function(e){
            hideOverlay();
            return false;
            stopEventBubble(e);
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
            var src=items.eq(index).attr('src');
            var i=src.lastIndexOf('.');
            src=src.slice(0,i)+'1'+src.slice(i);
            loadImage(src,function(){
                placeholders.eq(index).html(this);
            });
        }
        function loadImage(src,callback){
            var img=$('<img>').on('load',function(){
                callback.call(img);
            })
            img.attr('src',src);
        }
    };
})(jQuery);



