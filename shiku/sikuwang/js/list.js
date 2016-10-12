
var count = 0;
$.get("js/list.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<li>" +
			"<img src=\"" + o.imgSrc + "\"/>" +
			"<p>" + o.name + "</p>" +
			"<span>" + o.price + "</span>" +
			"<a href=\"#\" pid=\"" + o.id + "\">加入购物车</a>" +
			"</li>"
	});
	$(".slides1").html(html);
	
	$(".slide1>ul").click(function(e) {
		if($(e.target).is("a")) {
			//ID#产品名#图片#价格#数量
			var $target = $(e.target);
			var id = $target.attr("pid");
			var pname = $target.prev().prev().html();
			var img = $target.prev().prev().prev().attr("src");
			var price = $target.prev().html();
			var str = id + "#" + pname + "#" + img + "#" + price + "#" + "1";
			var $shopcart = $.cookie("shopcart");

			if(!$shopcart) {
				//cookie文件中是空的
				$.cookie("shopcart", str, {
					expires: 7
				});
			} else {
				var result = strOper.add($shopcart, str);
				$.cookie("shopcart", result);
			}
			var $productImg = $target.prev().prev().prev();
			$productImg.clone()
				.appendTo("body")
				.css({
					position: "absolute",
					left: $productImg.offset().left + 110,
					top: $productImg.offset().top + 72,
					width: 300,
					height: 300,
					background: "red",
					opacity: 0.8
				}).animate({
					left: $productImg.offset().left + 100,
					top: $productImg.offset().top + 69
				}, 500).delay(300).animate({
					left: $(".gou").offset().left,
					top: $(".gou").offset().top,
					opacity: 0,
					width: 0,
					height: 0
				}, 500, function() {
					getShopCart();
				});
				count++;
			 	$("#cart").html(count);
		}

	});
	
	
});