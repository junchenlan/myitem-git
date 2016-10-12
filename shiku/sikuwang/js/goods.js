$(function(){
	//放大镜
	$.get("js/goods.json",function(data){
		var html1="";
		$.each(data[0], function(i,o) {
			html1 += "<a href=\"#\">"
				 + "<img src=\""+o.imgSrc+"\" />"
				 + "<i></i>"
				 + "</a>"
		});
		$(".movebox").html(html1);
		var html2="";
		$.each(data[1], function(i,o) {
			html2 += "<a href=\"#\" >"
					+"<img src=\""+o.imgSrc+"\" style=\"width:400px;height:400px;display:block;\" />"
					+"</a>"
		});
		$(".smallimg").html(html2);
		var html3 = "";
		$.each(data[1], function(i,o) {
			html3 += "<img src=\""+o.imgSrc+"\" style=\"width:920px;height:400px;display:block;position:absolute;left:0;top:0;\" />"
					
		});
		$(".fdzoom1").html(html3);
		var current;
		for(var i=0;i<4;i++){
				$(".movebox>a:eq("+i+")").mouseenter(function(){
					current = $(this).index();
					//console.log(current);
					$(".movebox>a>i").css("display","none");
					$(this).children().next().css("display","block");
					$(".smallimg>a>img").css("display","none");
					$(".smallimg>a>img:eq("+current+")").css("display","block");
					
				});
				$(".movebox>a:eq("+i+")").mouseleave(function(){
					$(".smallimg>a>img:eq("+current+")").css("display","block");
				})
		}
		$(".smallImg").hover(function(){
			$(".tools").show();
			$(".fdzoom").show();
			$(".fdzoom1>img").css("display","none");
			$(".fdzoom1>img:eq("+current+")").css("display","block");
			//console.log(current);
			$(this).mousemove(function(e){
					$(".tools").css({
						left:Math.max(Math.min(e.pageX - $(".smallimg").offset().left - $(".tools").width() / 2,400 - $(".tools").width()),0),
						top:Math.max(Math.min(e.pageY - $(".smallimg").offset().top - $(".tools").height() / 2,400 - $(".tools").height()),0)
					});
					$(".fdzoom1 >img:eq("+current+")").css({
						left:$(".tools").position().left * 2.3 *-1 ,
						top:$(".tools").position().top * 2.3 *-1
					});
					
					
			});
			
		},function(){
			$(".fdzoom").hide();
			$(".tools").hide();
		});
		
		
	});	
	
	//加入购物车
	$("#addcarInfo").click(function(){
		$.get("js/shopping.json",function(data){
			$.each(data,function(i,o){
	             var $id = o.id;
	             var $imgsrc = o.imgSrc;
	             var $name = o.pname;
	             var $price = o.price;
	             var str = $id +"#" +$name +"#"+$imgsrc +"#"+$price +"#"+"1";
	             var $shopcart = $.cookie("shopcart");
	         		if(!$shopcart){
                        //cookie文件中是空的
                        $.cookie("shopcart",str,{
                            expires:7
                        });
                        
                    }
                    else{
                        var result = strOper.add($shopcart,str);
                        $.cookie("shopcart",result);
                        
                    }
         });
         alert("加入购物车成功");
		});
	});
	
	
});
