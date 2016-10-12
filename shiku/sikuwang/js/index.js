//side
var dts = document.querySelectorAll(".sideMain dt");
var dds = document.querySelectorAll(".sideMain dd");
for(var i = 0; i < dts.length; i++) {
	dts[i].index = i;
	dts[i].onmouseenter = function() {
		for(var j = 0; j < dts.length; j++) {
			dts[j].parentNode.style.background = "";
		}
		this.parentNode.style.background = "#fff";
		this.firstElementChild.style.color = "#463b7f";
		dds[this.index].style.display = "block";
	}
	dts[i].onmouseleave = function() {
		this.parentNode.style.background = "#463b7f";
		this.firstElementChild.style.color = "#fff";
		dds[this.index].style.display = "none";
	}
}
for(var i = 0; i < dds.length; i++) {
	dds[i].index = i;
	dds[i].onmouseenter = function() {
		for(var j = 0; j < dds.length; j++) {
			dts[j].parentNode.style.background = "";
		}
		dts[this.index].parentNode.style.background = "#fff";
		dts[this.index].firstElementChild.style.color = "#463b7f";
		this.style.display = "block";
	}
	dds[i].onmouseleave = function() {
		dts[this.index].parentNode.style.background = "#463b7f";
		dts[this.index].firstElementChild.style.color = "#fff";
		this.style.display = "none";
	}
}

$(function() {
	//floor1
	for(var i = 0; i < 3; i++) {
		$(".floor1>p>a>img:eq(" + i + ")").mouseenter(function() {
			$(".floor1>p>a>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
		});
	}
	//sec1-t
	for(var i = 0; i < 2; i++) {
		$(".sec1-t>a>img:eq(" + i + ")").mouseenter(function() {
			$(".sec1-t>a>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
		});
	}

	//slist
	for(var i=0;i<5;i++){
		$(".slist>a>img:eq("+i+")").mouseenter(function() {
			$(".slist>a>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
		});
	}
	
	//fu
	var current;
	for(var i=0;i<4;i++){
		$(".fu:eq("+i+")").mouseenter(function() {
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
			$(this).children().stop().animate({
				left: '-20px'
			});
			$(this).children().children("i").stop().animate({
				right: '0'
			});
		});
	
		$(".fu:eq("+i+")").mouseleave(function() {
			$(this).children().stop().animate({
				left: '0'
			});
			$(this).children().children("i").stop().animate({
				right: '-90px'
			});
			
		})
	}
	
	//fivecount
	$(".fivecount>img").mouseenter(function() {
			$(".fivecount>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
	});
	
	//fourcount
	for(var i=0;i<2;i++){
		$(".fourcount>img:eq("+i+")").mouseenter(function() {
			$(".fourcount>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
		});
	}
	//xnleft
	$(".xnleft>a>img").mouseenter(function() {
			$(".xnleft>a>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
	});
	//backsec-left
	$(".backsec-left>img").mouseenter(function() {
			$(".backsec-left>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
	});
	//backsec-center
	$(".backsec-center>img").mouseenter(function() {
			$(".backsec-center>img").stop();
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
	});
	//backsec-right
	for(var i=0;i<4;i++){
		$(".backsec-right>ul>li>a:eq("+i+")").mouseenter(function() {
			$(this).animate({
				opacity: 0.7
			}).animate({
				opacity: 1
			});
	
		});
	}
	
	//slide
	$.get("js/slide.json",function(data){
		var html="";
		$.each(data, function(i,o) {
			html += "<li>"
				 +  "<a href=\"#\">"
				 +  "<img src=\""+o.imgSrc+"\"/>"
				 +  "<p>"+o.item+"</p>"
				 +  "<span>"+o.price+"</span>"
				 +  "</a>"
				 +  "</li>"
		});
		$(".slides").html(html);
		var len = $(".slides>li").length;
		var current = 0;
		$(".pre").click(function(){
			current--;
			if(current<0){
				current=len-6;
			}
			var v = current*-230;
			if(current==0){
				$(".slides").stop().animate({left:v},10,function(){
					current=len-5;
					$(".slides").css("left",current*-230);
				});
			}
			else{
				$(".slides").stop().animate({left:v},10);
				$(".slides").css("left",current*-230);
			}
		});
		
	
		var termId ;
		function autoplay(){
			termId= setInterval(function(){
						$(".pre").click();
					},3000)
			}
		autoplay();
		$(".slides").mouseenter(function(){
			clearInterval(termId);
		});
		$(".slides").mouseleave(function(){
			autoplay();
		});

	});
	
	//secoo
	$(window).scroll(function(){
		if($(window).scrollTop()>$(window).height()){
			$(".secoo").slideDown(400);
			$(".sideright").slideDown(400);
		}else{
			$(".secoo").slideUp(400);
			$(".sideright").slideUp(400);
		}
	});
	$(".sideimg").click(function(){
		$("html,body").animate({
			scrollTop:0
		});
	});
	
	//lunbo
	$.get("js/lunbo.json",function(data){
		var html="";
		$.each(data, function(i,o) {
			html += "<div class=\"item-img0\">"
				 +  "<img src=\""+o.imgSrc+"\" />"
				 +  "</div>"	
		});
		$(".item-img").html(html);
		var len = $(".item-img>.item-img0").length;
		//console.log(len);
		var current = 0;
		//moveleft
		$(".moveleft").click(function(){
			current--;
			if(current<0){
				current=len-2;
			}
			for(var i=0;i<len-1;i++){
				$(".tu-control>a:eq("+i+")").css("background","#fff")
			}
			var v = current*-1263;
			if(current==0){
				$(".item-img").stop().animate({left:v},10,function(){
					$(".tu-control>a:eq("+current+")").css("background","#463b7f")
					current=len-1;
					$(".item-img").css("left",current*-1263);
					
				});
			}
			else{
				$(".item-img").stop().animate({left:v},10);
				$(".item-img").css("left",current*-1263);
				$(".tu-control>a:eq("+current+")").css("background","#463b7f")
			}
		});
		$(".moveright").click(function(){
			current++;
			if(current>3){
				current=0;
			}
			var v = current*-1263;
			for(var i=0;i<len-1;i++){
				$(".tu-control>a:eq("+i+")").css("background","#fff")
			}
			if(current==3){
				$(".item-img").stop().animate({left:v},10,function(){
					current=0;
					$(".item-img").css("left",current*-1263);
					$(".tu-control>a:eq("+current+")").css("background","#463b7f")
				});
			}
			else{
				$(".item-img").stop().animate({left:v},10);
				$(".item-img").css("left",current*-1263);
				$(".tu-control>a:eq("+current+")").css("background","#463b7f")
			}
		});
		var termId ;
		function autoplay(){
			termId= setInterval(function(){
						$(".moveright").click();
					},2000)
			}
		autoplay();
		$(".lunbo-item").mouseenter(function(){
			$(".moveright").css("display","block");
			$(".moveleft").css("display","block");
			clearInterval(termId);
		});
		$(".lunbo-item").mouseleave(function(){
			$(".moveright").css("display","none");
			$(".moveleft").css("display","none");
			autoplay();
		});
	});
	
});

//倒计时
function getDiff(start, end) {
	var time1 = start.getTime(); //获取现在时间的毫秒
	var time2 = end.getTime(); //获取未来时间的毫秒

	var diff = time2 - time1; //相差毫秒值
	//document.write(diff);
	var s = parseInt(diff / 1000); //总秒
	var ls = s % 60; //表示剩下的秒
	var m = parseInt(s / 60); //总分种
	var lm = m % 60; //表示的是剩下的分钟
	var h = parseInt(m / 60); //总小时
	var lh = h % 24; //剩余的小时
	var d = parseInt(h / 24); //总天数

	var str = d + "天" + lh + "小时" + lm + "分钟" + ls + "秒";
	return str;
}
	var lefttime = document.getElementById("lefttime");
	lefttime.innerHTML = "";
	var end = new Date("2016-09-28 10:00:00");
	setInterval(function(){
		var date = new Date();
		lefttime.innerHTML = getDiff(date, end);
	},1000);


