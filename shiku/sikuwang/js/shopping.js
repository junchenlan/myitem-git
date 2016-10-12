$(function() {
	var getShopCart = function() {
		var $shopcart = $.cookie("shopcart");
		if($shopcart != undefined) {
			var json = strOper.get($shopcart);
			var html = "";
			$.each(json, function(i, o) {
				html += "<tr class=\"cartrow\">" +
					"<td><input class=\"checkBox\"  id=\"choseItem\" data-pid=\"" + o.id + "\" type=\"checkbox\"></td>" +
					"<td width=\"97\" valign=\"top\">" +
					"<div class=\"cartPic fl padRight15\">" +
					"<a href=\"#\" data-pid=\"" + o.id + "\"><img src=\"" + o.img + "\"  width=\"80\" height=\"80\"></a>" +
					"</div>" +
					"</td>" +
					"<td valign=\"vtop\">" +
					"<p class=\"namePro\"><a href=\"\" data-pid=\"" + o.id + "\">" + o.name + "</a></p>" +
					"</td>" +
					"<td valign=\"vtop\">中国大陆</td>" +
					"<td valign=\"vtop\" class=\"vprice\">￥<b>" + o.price + "</b></td>" +
					"<td valign=\"vtop\">" +
					"<div class=\"countnum\">" +
					"<div class=\"cdes\" data-pid=\"" + o.id + "\">-</div>" +
					"<input type=\"text\" value=\"1\" class=\"Num\" />" +
					"<div class=\"cadd\" data-pid=\"" + o.id + "\">+</div>" +
					"</div>" +
					"</td>" +
					"<td valign=\"vtop\" class=\"tprice\">￥<b>" + o.price + "</b></td>" +
					"<td valign=\"vtop\">" +
					"<a class=\"del\" href=\"#\" data-pid=\"" + o.id + "\" name=\"deleterow\">删除</a>" +
					"</td>" +
					"</tr>";
			});
			$("tbody").html(html);

		}
	}

	//对产品数量加减的函数
	var counter = function(element, type) {
		var count = type === true ? 1 : -1;
		var $Num = type === true ? $(element).prev() : $(element).next();
		if($Num.val() == "1" && type === false) {
			count = 0;
		} else {
			var $shopcart = $.cookie("shopcart");
			var id = $(element).data("pid");
			var result = strOper.counter($shopcart, id, type);
			$.cookie("shopcart", result);
		}
		$Num.val(parseInt($Num.val()) + count);
	}

	//修改删除购物车中的产品事件代理

	$("tbody").click(function(e) {
			if($(e.target).attr("class") == "del") {

				var $shopcart = $.cookie("shopcart");
				var id = $(e.target).data("pid");
				var result = strOper.del($shopcart, id);
				$.cookie("shopcart", result);
				getShopCart();

			};
			
			if($(e.target).attr("class") == "cdes") {
				//减少产品数量
				counter(e.target, false);
				var $v = $(e.target).parent().parent().prev().children().html();

				var $va = $(e.target).next().val();
				//console.log($va);
				$(e.target).parent().parent().next().children().html($v * $va);

			};
			
			if($(e.target).attr("class") == "cadd") {
				//增加产品数量
				counter(e.target, true);
				$v = $(e.target).parent().parent().prev().children().html();
				$va = $(e.target).prev().val();
				$(e.target).parent().parent().next().children().html($v * $va);
				
			}
			
			 if($(e.target).attr("class") == "checkBox"){
				var id = $(e.target).data("pid");
				var $v =parseInt($(".totalprice").children().html());
				$v += parseInt($(e.target).parent().next().next().next().next().next().next().children().html()) ;
				$(".totalprice").children().html($v);
			}

		
	});

getShopCart();

});