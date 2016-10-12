/**
 * Created by Administrator on 2016/9/29.
 */
$(function() {
    var flagnum = 1;
    $(".teamtit").click(function () {
        flagnum++;
        if (flagnum % 2 == 0) {
            $(".movetoSon").hide();
            $(".teamSon").show();
        } else {
            $(".teamSon").hide();
        }
    });
    $(".movetotit").click(function () {
        if (flagnum % 2 == 0) {
            $(".teamSon").hide();
            $(".movetoSon").show();
        } else {
            $(".movetoSon").hide();
        }
        flagnum++;
    });

    //获取city数据
    $.get("../json/city.json", function (data) {
        var html = "";
        //console.log(data[0]);
        $.each(data[0].team, function (i, o) {
            html += '<a href="#">' + data[0].team[i] + '</a>';
        })
        $(".teamSon").html(html);
        $(".teamSon a").click(function () {
            var html = $(this).html();
            $(".teamtit span").html(html);
            $(".teamSon").hide();
            console.log(1);
        });

    });

   //ban导航栏
    var showindex=0;
    $.get("../json/foreign.json",function(data){
        console.log(data);
        $.each(data,function(i,o){
            var html="";
            var phtml="";
            $.each(data[i].desc,function(j,o){
                phtml+='<a href="">'+data[i].desc[j]+'</a>';
            })
            html+='<div class="banthem">'
                +'<h3>'+data[i].tit+'</h3>'
                +'<p>'+phtml+'</p>'
                +'</div>';
            $(".ban .bantit").eq(i).html(html);
        });

        var bantititem=$(".ban .bantititem");
        $.each(data,function(i,o){
           var html21="";
            $.each(data[i].item,function(j,o) {

                html21+='<dl><dt>'+data[i].item[j].itemtit+'</dt><dd>';
                $.each(data[i].item[j].itemdesc, function (k, o) {
                    html21 +='<a href="">'+data[i].item[j].itemdesc[k]+'</a>';
                });
                html21+='</dd></dl>';
            });
            html21+='<div><img src="'+data[i].imgsrc+'" alt=""></div>';
            $('<div class="banitem "></div>').html(html21).appendTo(bantititem);
        });

        $(".bantit").hover(function(){
            showindex=$(this).index();
            $(".bantit").removeClass("on");
            $(this).addClass("on");
            $(".bantititem .banitem").hide().removeClass("active");
            $(".bantititem .banitem").eq(showindex).show().addClass("active");
        },function(){
            $(".bantititem .banitem").hide().removeClass("active");
            $(".bantit").removeClass("on");
        })
        $(".banitem").hover(function(){
            $(this).show().addClass("active");
             $(".bantit").eq(showindex).addClass("on");
        },function(){
            $(".bantit").eq(showindex).removeClass("on");
            $(this).hide().removeClass("active");

        })
    })

    //轮播图
    var LBindex=1;
    var LBtimer;
    $(".LBitem").css("left",-760)
    var LBW=$(".banAlb .LBT").width();
    $(".banAlb .LBT").hover(function(){
        clearInterval(LBtimer);
        $(".LBbtnL").show();
        $(".LBbtnR").show();
    },function(){
        $(".LBbtnL").hide();
        $(".LBbtnR").hide();
        autoLB();
    })
    $(".LBbtnR").click(function(){
        clearInterval(LBtimer);
        LBindex++;
        if(LBindex>7){
            $(".LBitem").stop().animate({left:-LBindex*LBW},400,function(){
                $(this).css("left",-760);
                LBindex=1;
                $(" .banAlb .conLBitem span").removeClass("LBSon");
                $(" .banAlb .conLBitem span").eq(0).addClass("LBSon");
                console.log(LBindex);
            });
        }else{
            $(".LBitem").stop().animate({left:-LBindex*LBW},400);
            $(" .banAlb .conLBitem span").removeClass("LBSon");
            $(" .banAlb .conLBitem span").eq(LBindex-1).addClass("LBSon");
            console.log(LBindex);
        }
    });
    $(".LBbtnL").click(function(){
        clearInterval(LBtimer);
        LBindex--;
        if(LBindex<1){
            $(".LBitem").stop().animate({left:-LBindex*LBW},400,function(){
                $(this).css("left",-7*760);
                LBindex=7;
                $(" .banAlb .conLBitem span").removeClass("LBSon");
                $(" .banAlb .conLBitem span").eq(6).addClass("LBSon");
                console.log(LBindex);
            });
        }else{
            $(".LBitem").stop().animate({left:-LBindex*LBW},400);
            $(" .banAlb .conLBitem span").removeClass("LBSon");
            $(" .banAlb .conLBitem span").eq(LBindex-1).addClass("LBSon");
            console.log(LBindex);
        }
    });
    $(" .banAlb .conLBitem span").click(function(){
        clearInterval(LBtimer);
        $(" .banAlb .conLBitem span").removeClass("LBSon");
        $(this).addClass("LBSon");
        LBindex=$(this).index()+1;
        $(".LBitem").stop().animate({left:-LBindex*LBW},400);
    });
    //自动轮播
    function autoLB(){
        LBtimer = setInterval(function(){
            if(LBindex>7){
                $(".LBitem").stop().animate({left:-LBindex*LBW},400,function(){
                    $(this).css("left",-760);
                    LBindex=1;
                    $(" .banAlb .conLBitem span").removeClass("LBSon");
                    $(" .banAlb .conLBitem span").eq(0).addClass("LBSon");

                });
            }else{
                $(".LBitem").stop().animate({left:-LBindex*LBW},400);
                $(" .banAlb .conLBitem span").removeClass("LBSon");
                $(" .banAlb .conLBitem span").eq(LBindex-1).addClass("LBSon");

            };
            LBindex++;
        },3000)
    };
    autoLB();

    //天天特价
    $.get("../json/day.json",function(data){
        var html="";
        $.each(data,function(i,o){
            html+='<dl><dt><img src="'+data[i].imgsrc+'" alt="">'
                +'<div><span>'+data[i].zhe+'</span>'+data[i].xiang+'<i class="djs"></i></div>'
                +'<p></p></dt>'
                +'<dd><a href="" class="daya">'+data[i].daya1+'<br/>'+data[i].daya2+'</a> </dd>'
                +'<dd><span class="dayprice">¥<strong>'+data[i].nprice+'</strong></span> 起 <del>¥'+data[i].oprice+'</del> <a href="" class="daybuy">立即抢购</a></dd>'
                +'</dl>';
        });
        $(".dayitem").html(html);

        $(" .dayitem dl dd .daya").hover(function(){
            $(this).css({"color":"red","text-decoration": "underline"});
        },function(){
            $(this).css({"color":"#000","text-decoration": "none"});
        })
        $(".dayitem dl").hover(function(){
            $(this).stop().animate({top:-6},400);
        },function(){
            $(this).stop().animate({top:0},400);
        });
        
        //倒计时
        var date0 = new Date("2016-11-17 0:00:00:00");
        var date1 = new Date("2016-11-14 8:30:00:00");
        var date2 = new Date("2016-12-07 10:09:30:00");
        var date3 = new Date("2017-04-25 0:09:30:00");
        var obj0 = $(".djs").eq(0);
        var obj1 = $(".djs").eq(1);
        var obj2 = $(".djs").eq(2);
        var obj3 = $(".djs").eq(3);
        function daojishi(obj,date0){
	        var timer;
	        var date = new Date();
	    	var timetotal = date0-date;
	    	var day = parseInt(timetotal/(24*60*60*1000) );
			var hourother = timetotal%(24*60*60*1000);
			var hour = parseInt(hourother/(60*60*1000) );
			var minuteother = hourother%(60*60*1000);
			var minute = parseInt(minuteother/(60*1000) );
			var secondother = minuteother%(60*1000);
		 	var second = parseInt(secondother/1000); 
	        timer = setInterval(function(){
	        	second--;
	        	if(second==0){
	        		second=59;
	        		minute--;
	        		if(minute==0){
	        			minute=59;
	        			hour--;
	        			if(hour==0){
	        				hour=23;
	        				day--;
	        			}
	        		}
	        	}
	        obj.html(day+"天"+hour+"时"+minute+"分"+second+"秒结束"); 	     	
	        },1000);
        }
        
        daojishi(obj0,date0);
        daojishi(obj1,date1);
        daojishi(obj2,date2);
        daojishi(obj3,date3);
        
    });
    

   //欢度周末
   $(" .week .weekright dl").hover(function(){
       $(this).stop().animate({top:-6},400);
   },function(){
       $(this).stop().animate({top:0},400);
   })

   //畅游周边
    $.get("../json/rim.json",function(data){
        var rimitems=$(".rim .rimitems");
        var rimindex=0;
        $.each(data,function(i,o){
            var rimitem = $(' <div class="rimitem"></div>');
            var html="";
            $.each(data[i],function(j,o){
                html+='<dl><dt>'
                    +'<img src="'+ o.imgsrc+'" alt="">'
                    +'<p>'+ o.ping+'好评</p>'
                    +'</dt><dd><a href="">'+ o.desc+'</a> <span>¥<strong>'+ o.price+'</strong><i>起</i></span></dd>'
                    +'</dl>';
            });
            rimitem.html(html);
            rimitem.appendTo(rimitems);
        });

        $(" .rim .rimitems .rimitem").hide();
        $(" .rim .rimitems .rimitem").eq(rimindex).show();
        $(" .rim h2 i").click(function(){
            $(" .rim h2 i").removeClass("rimion");
            $(this).addClass("rimion");
            rimindex = $(this).index();
            console.log(rimindex);
            $(" .rim .rimitems .rimitem").hide();
            $(" .rim .rimitems .rimitem").eq(rimindex-1).show();
        })
        $(" .rim .rimitems .rimitem dl").hover(function(){
            $(this).stop().animate({top:-6},400);
        },function(){
            $(this).stop().animate({top:0},400);
        })

    })

  //精彩活动
   $(" .huodong .huodongitems .huodongitem").hover(function(){
       $(this).stop().animate({top:-6},400);
   },function(){
       $(this).stop().animate({top:0},400);
   })

    //结伴出游
    $.get("../json/tour.json",function(data){
        var tourindex=0;
        $.each(data,function(i,o){
            var tourritem=$('<div class="tourritem"></div>');
            var html="";
            $.each(data[i],function(j,o){
                html+='<dl><dt><img src="'+ o.imgsrc+'" alt=""></dt>'
                    +'<dd><a href="">'+ o.desc+'</a> <span>¥<strong>'+ o.price+'</strong><i>起</i></span></dd>'
                    +'</dl>';
            });
            tourritem.html(html);
            tourritem.appendTo(".tourright");
        });

        $(".tourright .tourritem").hide();
        $(".tourright .tourritem").eq(tourindex).show();
        $(" .tourleft .tourcons div").click(function(){
            tourindex = $(this).index();
            $(" .tourleft .tourcons div").children("span").removeClass("active");
            $(" .tourleft .tourcons div").children("i").removeClass("active");
            $(this).children("span").addClass("active");
            $(this).children("i").addClass("active");
            $(".tourleft .tlimgs img").hide();
            $(".tourleft .tlimgs img").eq(tourindex).show();
            $(".tourright .tourritem").hide();
            $(".tourright .tourritem").eq(tourindex).show();
        });
        $(" .tour .tourright .tourritem dl").hover(function(){
            $(this).stop().animate({top:-6},400);
        },function(){
            $(this).stop().animate({top:0},400);
        });
    });

   //推荐主题
    $.get("../json/theme.json",function(data){
        var themeindex=0;
        $.each(data,function(i,o){
            var themeitem = $('<div class="themeitem"></div>');
            var html="";
            $.each(data[i],function(j,o){
                html+='<dl><dt><img src="'+ o.imgsrc+'" alt=""></dt>'
                    +'<dd><a href="">'+ o.desc+'</a> <span>¥<strong>'+ o.price+'</strong><i>起</i></span></dd>'
                    +'</dl>';
            });
            themeitem.html(html);
            themeitem.appendTo(".themeitems");
        });
        $(" .theme .themeitems .themeitem").hide();
        $(" .theme .themeitems .themeitem").eq(themeindex).show();
        $(" .theme h2 i").click(function(){
            $(" .theme h2 i").removeClass("rimion");
            $(this).addClass("rimion");
            themeindex = $(this).index();
            $(".theme .themeitems .themeitem").hide();
            $(".theme .themeitems .themeitem").eq(themeindex-1).show();
        })
        $(".theme .themeitems .themeitem dl").hover(function(){
            $(this).stop().animate({top:-6},400);
        },function(){
            $(this).stop().animate({top:0},400);
        })

    })


});