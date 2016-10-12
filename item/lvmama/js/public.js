/**
 * Created by Administrator on 2016/9/29.
 */
var cityE = function () {
    var flag = true;
    $("#city_btn").click(function () {
        if(flag){
            flag = false;
            $(".city_hide").css("display","block");
            $(".city_up").css({
                "background":"#fff",
                "border-left":"1px solid #ccc",
                "border-right":"1px solid #ccc"
            });
            $(this).css("color","#f60");
            $(".city_icon").css("background-position","-18px -70px");
        }else{
            flag = true;
            $(".city_hide").css("display","none");
            $(".city_up").css({
                "background":"none",
                "border":"none"
            });
            $(this).css("color","#666");
            $(".city_icon").css("background-position","0 -70px");
        }
    })
}
var getCityData = function () {
    $.get("../json/city1.json",function (data) {
        var html="";
        $.each(data,function(x,o){
            html+="<dl class=\"city_dl\">"+
                    "<dt>"+o.tit+"</dt>"+
                    "<dd>";
            $.each(o.city,function(i,o){
                html+="<a href=\"javascript:;\">"+o.c+"</a>";
            })
            html+="</dd></dl>"
        })
        $(".select_city").after(html);
        cityE();
    })
}
getCityData();
var navEffect = function () {
        $(".pnav_down").mouseover(function () {
            var current = $(this).index();
            var $l = $(this).position().left;
            $(".down_nav").hide()
            var $currleft = $(this).children(".down_nav").position().left;
            $(this).children(".down_nav").css("display","block").css("left",$currleft-$l-32);
        })
        $(".pnav_down").mouseout(function () {
            $(".down_nav").css("display","none");
        })
    }
    navEffect();