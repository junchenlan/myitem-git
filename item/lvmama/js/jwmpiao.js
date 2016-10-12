/**
 * Created by Administrator on 2016/10/5.
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

        $(".movetoSon a").click(function () {
            var html = $(this).html();
            $(".movetotit span").html(html);
            $(".movetoSon").hide();
            console.log(2);
        })
    });

      //更多/收起
    $.get("../json/armto.json",function(data){
        var html="";
        var html1="";
        $.each(data[0],function(i,o){
            html+='<a href="">'+data[0][i]+'</a>';
        });
        $.each(data[1],function(i,o){
            html1+='<a href="">'+data[1][i]+'</a>';
        });
        $(".armto dl .place").eq(0).html(html);
        $(".armto dl .place").eq(1).html(html1);
        
        var clicknum=0;
        $(".armto dl .place").eq(0).children("a:gt(13)").hide();
        $(".armto dl .place").eq(1).children("a:gt(13)").hide();
        $(".armto dl .more span").click(function(){
            clicknum++;
            if(clicknum%2==0){
                $(this).html("更多");
                $(this).parent().prev().children("a:lt(14)").show();
                $(this).parent().prev().children("a:gt(13)").hide();
            }else{
                $(this).html("收起");
                $(this).parent().prev().children("a").show();
            }
        })
    });
    
    //json获取数据
    $.get("../json/mpiban.json",function(data){
    	$.each(data,function(i,o){
    		var html0="";
    		var html1="";
    		var html2="";
    		var html3="";
    		var html4="";
    		var html5="";
    		var html6="";
    		var html7="";
    		$.each(data[0],function(j,o){
    			html0+='<div class="mpiban"><i>[其它票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1.'+o.desc+'</p>'
	                +'<p><span>入园须知</span>1.入园限制:无限制2.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p>'
	                +'<p><span>退改说明</span><strong>预订付款后未使用，可在“我的订单”中申请退款，在游玩日前4天00:00前申请，不收取任何手续费；在游玩日前3天00:00前申请，需扣除每张门票100%的手续费。</strong></p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html0+='<div class="mpibanshow"><span>展开全部门票('+data[0].length+')</span></div>';
    		$(".conitem0 .menpiao .menpiaoitem").html(html0);
    		
    		$.each(data[1],function(j,o){
    			html1+='<div class="mpiban"><i>[单门票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1.大阪环球影城儿童票1张。</p>'
	                +'<p><span>票种说明</span>儿童票[0大1小]是指4周岁（含）～11周岁（含）（以护照年龄为准）</p>'
	                +'<p><span>入园须知</span>1.入园限制:无限制2.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p>'
	                +'<p><span>重要提示</span><strong>1.日本环球影城为热门景点，建议游玩当天尽早前往，以免部分项目排队等候太久。 2.根据日本环球影城的管理规定，除全年影城入场券以外，其他种类的门票不得再入场。 3.大阪环球影城开放时间因季节变换可能会略有更改。 4.哈利波特馆每日入馆人数有限，需您在入园后与工作人员索要整理券预约入馆时间，详询现场工作人员。 5.园区设施、服务如有变更，以园区安排为准。</strong></p>' 
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html1+='<div class="mpibanshow"><span>展开全部门票('+data[1].length+')</span></div>';
    		$(".conitem1 .menpiao .menpiaoitem").html(html1);
    		
    		$.each(data[2],function(j,o){
    			html2+='<div class="mpiban"><i>[单门票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1.新加坡环球影城一天门票1张。</p>'
	                +'<p><span>入园须知</span><strong><p>1.入园时间：10:00～19:00</p><p>2.入园地点：圣淘沙新加坡圣淘沙名胜世界</p><p>3.入园方式：1. 打印驴妈妈邮件中的电子确认函，携带纸质凭证和护照入园；* 该门票无需取票，可直接入园。</p><p>4.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p></strong></p>'
	                +'<p><span>重要提示</span><strong>入园后如需要在营业时间出入园区，请一定到门口找到工作人员盖章，否则您将不可能再次进入园区。</strong></p>' 
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html2+='<div class="mpibanshow"><span>展开全部门票('+data[2].length+')</span></div>';
    		$(".conitem2 .menpiao .menpiaoitem").html(html2);
    		
    		$.each(data[3],function(j,o){
    			html3+='<div class="mpiban"><i>[单门票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1.普吉岛西蒙人妖秀VIP门票 成人票 1张。</p>'
	                +'<p><span>入园须知</span><strong><p>1.入园时间：无限制</p><p>2.入园地点：芭东海滩南部，8 Siriach Road Patong Beach, Patong Beach</p><p>3.取票时间：无限制</p><p>4.入园方式：1. 打印驴妈妈邮件中的电子确认函，携带纸质凭证和护照入园</p><p>5.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p></strong></p>'
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html3+='<div class="mpibanshow"><span>展开全部门票('+data[3].length+')</span></div>';
    		$(".conitem3 .menpiao .menpiaoitem").html(html3);
    		
    		$.each(data[4],function(j,o){
    			html4+='<div class="mpiban"><i>[其他票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>【普通车厢】日本北海道铁路周游兑换券3日券【12周岁及以上成人】一张</p>'
	                +'<p><span>入园须知</span>1.入园限制:无限制2.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p>'
	                +'<p><span>重要提示</span><strong><p>票种说明:</p><p>身高: </p><p>年龄: 12周岁及以上</p><p>地域:</p><p>最大限购:</p><p>快递:</p><p>实体票:</p><p>其它: 1. 3日用、5日用、7日用票券可在选定的使用开始日起，连续使用3天或5天或7天。 2. "任选4日畅游券"：无法指定使用开始日。购买或兑换"任选4日畅游券"当天视为第1天，在10天内，不论连续或不连续可任选4天搭乘火车。 例：7月1日购买或兑换上述票券，至7月10日止，可任选4天搭乘火车。</p></strong></p>'
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html4+='<div class="mpibanshow"><span>展开全部门票('+data[4].length+')</span></div>';
    		$(".conitem4 .menpiao .menpiaoitem").html(html4);
    		
    		$.each(data[5],function(j,o){
    			html5+='<div class="mpiban"><i>[其他票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1日游玩门票（含游园小火车）</p>'
	                +'<p><span>入园须知</span><strong><p>1.取票时间：8:30 AM - 5:30 PM</p><p>2.取票地点：新加坡动物园1&2号票务处</p><p>3.入园方式：兑换门票时须出示打印出的使用凭证，或可出示手机上的电子使用凭证，在指定兑换地点换取门票入园</p><p>4.入园限制:有限制 请在入园当天的 17:00 以前入园</p><p>5.有效期限： (有效期内可入园1次) 指定游玩日当天内有效</p></strong></p>'
	                +'<p><span>重要提示</span><strong>兑换凭证上显示的“Visit Date” 为兑换实体票后，门票有效期开始的时间，并非您的实际参观日期；该票在“Visit Date”后的180天内都有效 例如：若您的兑换凭证显示12-12-2015，那么有效期截止日期将为12-06-2016（Visit Date+180天），您可以兑换并于12-06-2016前任何一天入园</strong></p>'
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html5+='<div class="mpibanshow"><span>展开全部门票('+data[5].length+')</span></div>';
    		$(".conitem5 .menpiao .menpiaoitem").html(html5);
    		
    		$.each(data[6],function(j,o){
    			html6+='<div class="mpiban"><i>[单门票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span>1.新加坡 S.E.A 海洋馆门票1张（含海事博物馆）。</p>'
	                +'<p><span>票种说明</span>儿童票[0大1小]是指4周岁（含）～12周岁（含）</p>'
	                +'<p><span>入园须知</span><strong><p>1.入园时间：10:00～19:00</p><p>2.入园地点：8 Sentosa Gateway, Resorts World Sentosa</p><p>3.入园方式：1. 打印驴妈妈邮件中的电子确认函，携带纸质凭证和护照入园；* 该门票无需取票，可直接入园</p><p>4.有效期限：指定游玩日当天内有效</p></strong></p>'
	                +'<p><span>重要提示</span><strong>您的预订将立刻得到确认，请务必查阅确认邮件，如有任何疑问，可根据邮件上的信息致电服务商获得产品最新动态； 预订成功后，电子凭证会在24小时内发送到您指定的邮箱，入园时需出示凭证和旅客有效证件。 SEA海洋馆10.24号星期六，5点闭馆，其他时间照常营业。</strong></p>'
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html6+='<div class="mpibanshow"><span>展开全部门票('+data[6].length+')</span></div>';
    		$(".conitem6 .menpiao .menpiaoitem").html(html6);
    		
    		$.each(data[7],function(j,o){
    			html7+='<div class="mpiban"><i>[其他票]</i><a href="javascript:;">'+o.desc+'</a><del>¥'+o.oprice+'</del> <span class="span1">¥<strong>'+o.nprice+'</strong></span><span class="span2">在线支付</span><i class="buy">预定</i>'
                    +'<div class="see">'
	                +'<p><span>费用包含</span></p>'
	                +'<p><span>入园须知</span><strong>1.有效期限：指定游玩日当天内有效</strong></p>'
	                +'<p><span>退改说明</span>本商品预定后不支持退改，敬请谅解。</p>'
	                +'<p><i>收起</i></p>'
	                +'</div></div>';
    		});
    		html7+='<div class="mpibanshow"><span>展开全部门票('+data[7].length+')</span></div>';
    		$(".conitem7 .menpiao .menpiaoitem").html(html7);
    		
    	});
    	
    	//json获取dl数据
    	$.get("../json/conitemdl.json",function(data){
    		$.each(data,function(i,o){
    			var html="";
    			html+='<dl><dt><img src="'+o.imgsrc+'" alt=""></dt>'
	                +'<dd class="conit1dd1">'
                    +'<h3>'+o.h3+'<i>'+o.h3i+'</i><span>境外门票</span></h3>';
                    if(o.jddz!=''){
                    	html+='<p><span>景点地址</span>'+o.jddz+'</p>';
                    }
                    if(o.yytime!=''){
                    	html+='<p><span>营业时间</span>'+o.yytime+'</p>';
                    }
                    if(o.theme!=''){
                    	html+='<p><span>主　&nbsp;&nbsp;&nbsp;题</span>'+o.theme+'</p>';
                    }
                    if(o.jdhd!=''){
                    	html+='<p><span>景点活动</span>'+o.jdhd+'</p>';
                    }
                    if(o.jdts!=''){
                    	html+='<p><span>景点特色</span>'+o.jdts+'</p>';
                    }
                    
                html+='</dd>'
                    +'<dd class="conit1dd2">'
                    +'<p><span>¥<strong>'+o.price+'</strong></span>起</p>'
                    +'<p><i>查看详情</i></p>'
                    +'<p><span>'+o.hpl+'</span>好评</p>'
                    +'<p>来自'+o.hprs+'条点评</p>'
	                +'</dd></dl>';
	            $(".conitemdl").eq(i).html(html);    
	                
    		});
    		
    		
    		
    	})
    	
    	
    //
    var mpibannum=0;
    $(" .menpiaoitem .mpiban a").click(function(){
        mpibannum++;
        if(mpibannum%2==0){
            $(this).parent().children(".see").hide();
        }else{
            $(this).parent().children(".see").show();
        }
    })
    $(" .menpiaoitem .mpiban .see p i").click(function(){
        $(this).parent().parent().hide();
    })
    $(".menpiaoitem .mpiban").hover(function(){
        $(this).css("background","#FFF9E1");
    },function(){
        $(this).css("background","#FFF");
    })
    var mpitemnum=0;
    var len=$(".menpiaoitem").length;
    for(var i=0;i<len;i++){
        $(".menpiaoitem").eq(i).children(".mpiban:gt(2)").hide();
    }
    $(".menpiaoitem  .mpibanshow span").click(function(){
        mpitemnum++;
        if(mpitemnum%2==0){
            $(this).parent().parent().children(".mpiban:gt(2)").hide();
            var len = $(this).parent().parent().children(".mpiban").length;
            $(this).html("展开全部门票("+len+")");
        }else{
            $(this).parent().parent().children(".mpiban:gt(2)").show();
            var len = $(this).parent().parent().children(".mpiban").length;
            $(this).html("收起全部门票("+len+")");
        }
    });	
    	
    });
    
    //猜你喜欢
    $.get("../json/youlove.json",function(data){
    	var html="";
    	$.each(data,function(i,o){
    		html+='<dl>'
              	+'<dt><a href="#"><img src="'+o.imgsrc+'"/></a></dt>'
              	+'<dd><a href="#">'+o.desc+'</a></dd>'
              	+'<dd><span>¥'+o.price+'</span> 起<i>查看详情</i></dd>'
              	+'</dl>';	
    	});
    	$(".youlove .loveitem").html(html);	
    })
    
});