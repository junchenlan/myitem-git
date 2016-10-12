/**
 * Created by Administrator on 2016/9/27.
 */
$(function(){
    var flagnum=1;
    $(".teamtit").click(function(){
        flagnum++;
        if(flagnum%2==0){
            $(".movetoSon").hide();
            $(".teamSon").show();
        }else{
            $(".teamSon").hide();
        }
    });
    $(".movetotit").click(function(){
        if(flagnum%2==0){
            $(".teamSon").hide();
            $(".movetoSon").show();
        }else{
            $(".movetoSon").hide();
        }
        flagnum++;
    });

    //获取city数据
    $.get("../json/city.json",function(data){
        var html="";
        //console.log(data[0]);
        $.each(data[0].team,function(i,o){
            html+='<a href="#">'+data[0].team[i]+'</a>';
        })
        $(".teamSon").html(html);
        $(".teamSon a").click(function(){
            var html=$(this).html();
            $(".teamtit span").html(html);
            $(".teamSon").hide();
            console.log(1);
        });

        $.each(data[1],function(i,o){
            if(i==0){
                var dl=$('<dl><p>'+data[1][0].tit+'</p>');
                var dd=$('<dd class="dd1"></dd>').appendTo(dl);
                var html="";
                $.each(data[1][0].hot,function(j,o){
                    html+='<a href="javascript:;">'+data[1][0].hot[j]+'</a>';
                })
               dd.html(html);
               dl.appendTo(".movetoSon");
            }else{
                var dl=$("<dl><dt>"+data[1][i].tit+"</dt></dl>");
                var dd=$("<dd></dd>").appendTo(dl);
                var html="";
                $.each(data[1][i].city,function(k,o){
                    html+='<a href="javascript:;">'+ data[1][i].city[k]+'</a>';
                })
                dd.html(html);
                dl.appendTo(".movetoSon");
            }
        })

        $(".movetoSon a").click(function(){
            var html=$(this).html();
            $(".movetotit span").html(html);
            $(".movetoSon").hide();
            console.log(2);
        })
    });


    //轮播图
    var LBindex=0;
    $(".imgscontrols a").hover(function(){
        LBindex = $(this).index();
        $(".imgscontrols a").removeClass("on");
        $(this).addClass("on");
        $(".imgitem").removeClass("show").stop().animate({opacity:0},600);
        $(".imgitem").eq(LBindex).addClass("show").stop().animate({opacity:1},600);
    },function(){

    })
   //公司企业成团获取数据
    $.get("../json/team.json",function(data){
        $.each(data,function(i,o){
           var busitem= $( '<div class="busitem"></div>');
           var html="";
            $.each(data[i],function(j,o){
                if(o.rexiao){
                    html+='<dl><dt>'
                        +'<span>'+o.rexiao+'</span>'
                        +'<img src="'+ o.imgsrc+'" />'
                        +'<a>'+ o.desc+'</a>'
                        +'</dt><dd><a href="#">'+ o.tit+'</a></dd></dl>';
                }else{
                    html+='<dl><dt>'
                        +'<img src="'+ o.imgsrc+'" />'
                        +'<a>'+ o.desc+'</a>'
                        +'</dt><dd><a href="#">'+ o.tit+'</a></dd></dl>';
                }
            })
            busitem.html(html).appendTo(".business");
        });
        //table切换
        $(".business .busitem").hide();
        $(".business .busitem").eq(0).show();
        $(".busTit span").click(function(){
            $(".busTit span").removeClass("buson");
            $(this).addClass("buson");
            var index=$(this).index();
            $(".business .busitem").hide();
            $(".business .busitem").eq(index).show();
        });

        $(".business .busitem dl").hover(function(){
            $(this).stop().animate({top:-7},400);
            $(this).children("dt").children("a").stop().animate({height:40},400);
        },function(){
            $(this).stop().animate({top:0},400);
            $(this).children("dt").children("a").stop().animate({height:0},400)
        });

    })

   //西塘获取数据
    $.get("../json/xitang.json",function(data){
        var html="";
        $.each(data,function(i,o){
            html+='<div class="xtitem">'
                +'<img src="'+ o.imgsrc+'"/>'
                +'<i></i><span><strong>'+ o.tit+'</strong>'
                +'<p>'+ o.desc+'</p>'
                +'</span></div>';
        });
        $(".xitang").html(html);
        $(".xtitem").hover(function(){
            $(this).stop().animate({top:-10},200);
        },function(){
            $(this).stop().animate({top:0},200);
        })
    });

   //个人&团体推荐
    $.get("../json/person.json",function(data) {
        $.each(data, function (i, o) {
            var busitem = $('<div class="peritem"></div>');
            var html = "";
            $.each(data[i], function (j, o) {
                html += '<dl><dt>'
                    + '<img src="' + o.imgsrc + '" />'
                    + '<a>' + o.desc + '</a>'
                    + '</dt><dd><span>国内&nbsp;|&nbsp;</span><a href="#">' + o.tit + '</a><span class="perprice">' + o.perprice + '</span></dd></dl>';
            })
            busitem.html(html).appendTo(".personitem1");
        });
        //table切换
        $(".personitem1 .peritem").hide();
        $(".personitem1 .peritem").eq(0).show();
        $(".personitem1 span").click(function () {
            $(".personitem1 span").removeClass("peron");
            $(this).addClass("peron");
            var index = $(this).index();
            $(".personitem1 .peritem").hide();
            $(".personitem1 .peritem").eq(index).show();
        });

        $(".personitem1 .peritem dl").hover(function () {
            $(this).stop().animate({top: -7}, 400);
            $(this).children("dt").children("a").stop().animate({height: 40}, 400);
        }, function () {
            $(this).stop().animate({top: 0}, 400);
            $(this).children("dt").children("a").stop().animate({height: 0}, 400)
        });
    });
        //个人&团体推荐第二部分
        $.get("../json/person2.json",function(data){
            $.each(data,function(i,o){
                var busitem= $( '<div class="peritem"></div>');
                var html="";
                $.each(data[i],function(j,o){
                    if(o.remen){
                        html+='<dl><dt>'
                            +'<span>'+o.remen+'</span>'
                            +'<img src="'+ o.imgsrc+'" />'
                            +'<a>'+ o.desc+'</a>'
                            +'</dt><dd><span>出境&nbsp;|&nbsp;</span><a href="#">'+ o.tit+'</a><span class="perprice">'+ o.perprice+'</span></dd></dl>';
                    }else{
                        html+='<dl><dt>'
                            +'<img src="'+ o.imgsrc+'" />'
                            +'<a>'+ o.desc+'</a>'
                            +'</dt><dd><span>出境&nbsp;|&nbsp;</span><a href="#">'+ o.tit+'</a><span class="perprice">'+ o.perprice+'</span></dd></dl>';
                    }
                })
                busitem.html(html).appendTo(".personitem2");
            });
            //table切换
            $(".personitem2 .peritem").hide();
            $(".personitem2 .peritem").eq(0).show();
            $(".personitem2 span").click(function(){
                $(".personitem2 span").removeClass("peron");
                $(this).addClass("peron");
                var index=$(this).index();
                $(".personitem2 .peritem").hide();
                $(".personitem2 .peritem").eq(index).show();
            });

            $(".personitem2 .peritem dl").hover(function(){
                $(this).stop().animate({top:-7},400);
                $(this).children("dt").children("a").stop().animate({height:40},400);
            },function(){
                $(this).stop().animate({top:0},400);
                $(this).children("dt").children("a").stop().animate({height:0},400)
            });

        });

    //合作产品推荐
    $.get("../json/hezuo.json",function(data){
        var html="";
        $.each(data,function(i,o){
            html+='<dl><dt><img src="'+ o.imgsrc+'"/>'
                +'<i></i><a href="#">'+ o.desc+'</a>'
                +'</dt><dd><a href="#">'+ o.tit+'</a>'
                +'<p>合作伙伴<span>'+ o.hezuoren+'</span></p>'
                +'</dd></dl>';
        });
        $(".hezuoitem").html(html);
        $(".hezuoitem dl").hover(function(){
            $(this).stop().animate({top: -7}, 400);
            $(this).children("dt").children("i").stop().animate({height: 40}, 400);
            $(this).children("dt").children("a").stop().animate({height: 40}, 400);
        },function(){
            $(this).stop().animate({top:0},400);
            $(this).children("dt").children("i").stop().animate({height:0},400);
            $(this).children("dt").children("a").stop().animate({height:0},400)
        });
    })

})