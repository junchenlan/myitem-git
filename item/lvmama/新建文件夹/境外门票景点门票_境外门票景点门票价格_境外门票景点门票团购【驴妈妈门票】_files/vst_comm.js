/**
 * 门票,酒店,线路共用js文件
 * 共用的函数写到这个文件里面,以便维护
 * 如果是独有函数,请放到对应的js文件里面
 */


/*
 * 判断用户是否是手机访问
*/
  var browser={
    versions:function(){
           var u = navigator.userAgent, app = navigator.appVersion;
           var mobileAgent = 
       		[
       	                   "Nokia",//诺基亚，有山寨机也写这个的，总还算是手机，Mozilla/5.0 (Nokia5800 XpressMusic)UC AppleWebkit(like Gecko) Safari/530
       	                   "SAMSUNG",//三星手机 SAMSUNG-GT-B7722/1.0+SHP/VPP/R5+Dolfin/1.5+Nextreaming+SMM-MMS/1.2.0+profile/MIDP-2.1+configuration/CLDC-1.1
       	                   "MIDP-2",//j2me2.0，Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaE75-1 /110.48.125 Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML like Gecko) Safari/413
       	                   "CLDC1.1",//M600/MIDP2.0/CLDC1.1/Screen-240X320
       	                   "SymbianOS",//塞班系统的，
       	                   "MAUI",//MTK山寨机默认ua
       	                   "UNTRUSTED/1.0",//疑似山寨机的ua，基本可以确定还是手机
       	                   "Windows CE",//Windows CE，Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)
       	                   "iPhone",//iPhone是否也转wap？不管它，先区分出来再说。Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; zh-cn) AppleWebKit/532.9 (KHTML like Gecko) Mobile/8B117
       	                   //"iPad",//iPad的ua，Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; zh-cn) AppleWebKit/531.21.10 (KHTML like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10
       	                   "Android",//Android是否也转wap？Mozilla/5.0 (Linux; U; Android 2.1-update1; zh-cn; XT800 Build/TITA_M2_16.22.7) AppleWebKit/530.17 (KHTML like Gecko) Version/4.0 Mobile Safari/530.17
       	                   "BlackBerry",//BlackBerry8310/2.7.0.106-4.5.0.182
       	                   "UCWEB",//ucweb是否只给wap页面？ Nokia5800 XpressMusic/UCWEB7.5.0.66/50/999
       	                   "ucweb",//小写的ucweb貌似是uc的代理服务器Mozilla/6.0 (compatible; MSIE 6.0;) Opera ucweb-squid
       	                   "BREW",//很奇怪的ua，例如：REW-Applet/0x20068888 (BREW/3.1.5.20; DeviceId: 40105; Lang: zhcn) ucweb-squid
       	                   "J2ME",//很奇怪的ua，只有J2ME四个字母
       	                   "YULONG",//宇龙手机，YULONG-CoolpadN68/10.14 IPANEL/2.0 CTC/1.0
       	                   "YuLong",//还是宇龙
       	                   "COOLPAD",//宇龙酷派YL-COOLPADS100/08.10.S100 POLARIS/2.9 CTC/1.0
       	                   "TIANYU",//天语手机TIANYU-KTOUCH/V209/MIDP2.0/CLDC1.1/Screen-240X320
       	                   "TY-",//天语，TY-F6229/701116_6215_V0230 JUPITOR/2.2 CTC/1.0
       	                   "K-Touch",//还是天语K-Touch_N2200_CMCC/TBG110022_1223_V0801 MTK/6223 Release/30.07.2008 Browser/WAP2.0
       	                   "Haier",//海尔手机，Haier-HG-M217_CMCC/3.0 Release/12.1.2007 Browser/WAP2.0
       	                   "DOPOD",//多普达手机
       	                   "Lenovo",// 联想手机，Lenovo-P650WG/S100 LMP/LML Release/2010.02.22 Profile/MIDP2.0 Configuration/CLDC1.1
       	                   "LENOVO",// 联想手机，比如：LENOVO-P780/176A
       	                   "HUAQIN",//华勤手机
       	                   "AIGO-",//爱国者居然也出过手机，AIGO-800C/2.04 TMSS-BROWSER/1.0.0 CTC/1.0
       	                   "CTC/1.0",//含义不明
       	                   "CTC/2.0",//含义不明
       	                   "CMCC",//移动定制手机，K-Touch_N2200_CMCC/TBG110022_1223_V0801 MTK/6223 Release/30.07.2008 Browser/WAP2.0
       	                   "DAXIAN",//大显手机DAXIAN X180 UP.Browser/6.2.3.2(GUI) MMP/2.0
       	                   "MOT-",//摩托罗拉，MOT-MOTOROKRE6/1.0 LinuxOS/2.4.20 Release/8.4.2006 Browser/Opera8.00 Profile/MIDP2.0 Configuration/CLDC1.1 Software/R533_G_11.10.54R
       	                   "SonyEricsson",// 索爱手机，SonyEricssonP990i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 405) Opera 8.65 [zh-CN]
       	                   "GIONEE",//金立手机
       	                   "HTC",//HTC手机" Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36" browser.versions.mobile
       	                   "ZTE",//中兴手机，ZTE-A211/P109A2V1.0.0/WAP2.0 Profile
       	                   "HUAWEI",//华为手机，
       	                   "webOS",//palm手机，Mozilla/5.0 (webOS/1.4.5; U; zh-CN) AppleWebKit/532.2 (KHTML like Gecko) Version/1.0 Safari/532.2 Pre/1.0
       	                   "GoBrowser",//3g GoBrowser.User-Agent=Nokia5230/GoBrowser/2.0.290 Safari
       	                   "IEMobile",//Windows CE手机自带浏览器，
       	                   "WAP2.0"//支持wap 2.0的
       	  ];
           return {//移动终端浏览器版本信息
                mobile: function(){
                	for(index in mobileAgent){
                		try{
                			if(u.match(mobileAgent[index])){
                    			return true;
                    		}
                		}catch(e){
                			return false;
                		}
                	}
                	return false;
                }() //是否为移动终端
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
};

  var pageAjax = function(theURL)
  {
 	 var url=$.trim(theURL);
 	 var encodeURL= encodeURI(url);
 	 $("#lmmurl").html(encodeURL);
 	  $.ajax({
 			type:"post",
 			url: encodeURL,
 			data:{"ajaxKey":"add"},
 			success:function(result){
 				$("#route-list").replaceWith(result);
 				refreshEvent.run();
 				fixPlaceholder();
 				bindFhEvent();
 				$('html, body').animate({scrollTop:0}, 0);
 			},
 			error:function(){
 			}
 		});
 	/*if (window.location.href == encodeURI($.trim(url) + "#list")) {
 		window.location.reload(true);
 	} else {
 		window.location.href = encodeURI($.trim(url) + "#list");
 	}*/
 };
  
var searchRedirectAjax = function(url)
 {
	  url="http://"+$.trim(url) + "#list";
	  var urlTure=url.replace(/</g,'.');
	  var urlTureSecond=urlTure.replace(/>/g,'/');
	  var encodeURL=encodeURI(urlTureSecond);
	  $("#lmmurl").html(encodeURL);
	  $.ajax({
			type:"post",
			url:encodeURL,
			data:{"ajaxKey":"add"},
			success:function(result){
				$("#route-list").replaceWith(result);
				refreshEvent.run();
				fixPlaceholder();
				bindFhEvent();
			},
			error:function(){
			}
		});
	/*if (window.location.href == encodeURI($.trim(url) + "#list")) {
		window.location.reload(true);
	} else {
		window.location.href = encodeURI($.trim(url) + "#list");
	}*/
};
  
  var searchRedirect = function(url)
  {
 	if (window.location.href == encodeURI($.trim(url) + "#list")) {
 		window.location.reload(true);
 	} else {
 		window.location.href = encodeURI($.trim(url) + "#list");
 	}
 };
  
  var searchRedirectAjaxToAll = function(url)
  {
 	  url=$.trim(url) + "#list";
 	  var urlTure="http://"+url.replace(/</g,'.');
	  var urlTureSecond=urlTure.replace(/>/g,'/');
	  var encodeURL=encodeURI(urlTureSecond);
	  $("#lmmurl").html(encodeURL);
 	 $.ajax({
			type:"post",
			url:encodeURL,
			data:{"ajaxKey":"toAll"},
			success:function(result){
				$("#route-list").replaceWith(result);
				refreshEvent.run();
				fixPlaceholder();
				bindFhEvent();
			},
			error:function(){
			}
		});
 };

  /** 
   * 页面有的地方不显示url链接执行此js方法
   */ 
  var redirectPageNoUrl = function(url)
  {
 	if (window.location.href == encodeURI($.trim(url))) {
 		window.location.reload(true);
 	} else {
 		window.location.href = encodeURI($.trim(url));
 	}
 };
/** 
 * 时间对象的格式化; 
 */  
Date.prototype.format = function(format) {  
    /* 
     * eg:format="yyyy-MM-dd hh:mm:ss"; 
     */  
    var o = {  
        "M+" : this.getMonth() + 1, // month  
        "d+" : this.getDate(), // day  
        "h+" : this.getHours(), // hour  
        "m+" : this.getMinutes(), // minute  
        "s+" : this.getSeconds(), // second  
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter  
        "S" : this.getMilliseconds()  
        // millisecond  
    };
  
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4  
                        - RegExp.$1.length));  
    }  
  
    for (var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1  
                            ? o[k]  
                            : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  
    return format;  
};


//按价格区间查询
function queryByPrice(baseUrl,filterStr,endWith,type2)
{
	var url=$.trim(baseUrl);
	if(filterStr)
	{
		url += filterStr;
	}else if(type2 && type2=="seo"){
		url += "-";
	}
	var priceStr="";
	var price1=$.trim($("#price1").val());
	var price2=$.trim($("#price2").val());
	var price0="";

	//如果前价格大于后价格，交换顺序
	if(parseInt(price1)>parseInt(price2))
	{
		$("#price1").val(price2);
		$("#price2").val(price1);
		price0=price1;
		price1=price2;
		price2=price0;
	}	
	priceStr="E"+price1+"_"+price2;
	//alert("priceStr: "+priceStr);
	var url2=url+priceStr+endWith;
	searchRedirect(url2);
}

//筛选条件，最早出发时间，最晚出发时间
function queryByDef(baseUrl,endWith,type2,filterStr)
{
	var early=$.trim($("#dateEarly").val());
	var latter=$.trim($("#dateLatter").val());
	if(early==null||early==""){
		alert("请选择最早出发时间");
		return;
	}
	if(latter==null||latter==""){
		alert("请选择最晚出发时间");
		return;
	}
	
	var url="";
	if(filterStr.indexOf("O")!=-1){
		var filter=baseUrl.toString();
		var patt=/[O]\d{4}(_\d{4})*/;
		url=filter.replace(patt,"");
	}else{
		url=baseUrl;
	}
	
	var earlyArr=early.split("-");
	var latterArr=latter.split("-");
	url=url+earlyArr[0].substring(0,4)+earlyArr[1]+earlyArr[2]+'_'+latterArr[0].substring(0,4)+latterArr[1]+latterArr[2];
	if(type2!="seo"){
		url+=endWith;
	}
	//searchRedirect(url);
	var urlTure="http://"+url.replace(/</g,'.');
	var urlTureSecond=urlTure.replace(/>/g,'/');
	window.location.href = encodeURI($.trim(urlTureSecond) + "#list");
//	$.ajax({
//		type:"post",
//		url:urlTureSecond,
//		data:{"ajaxKey":"add"},
//		success:function(result){
//			$("#route-list").replaceWith(result);
//			refreshEvent.run();
//			fixPlaceholder();
//			bindFhEvent();
//		},
//		error:function(){
//		}
//	});
}

function swichTab(type)
{
	$.searchType.showType(type);
}

function initHeadTab(type)
{
	var type2="";
	if(type=="all")
	{
		type2="ALL";
	}
	else if(type=="freetour" || type == "play")
	{
		type2="FREETOUR";
	}
	else if(type=="scenictour")
	{
		type2="SCENICTOUR";
	}
	else if(type=="around"||type=="local"||type=="group")
	{
		type2="GROUP";
	}
	else if(type=="ticket")
	{
		type2="TICKET";
	}
	else if(type=="youlun")
	{
		type2="SHIP";
	}
	else if(type=="route")
	{
		type2="ROUTE";
	}
	else if(type=="hotel")
	{
		type2="HOTEL";
	}
	else if(type=="visa")
	{
		type2="VISA";
	}
	else if(type=="localplay")
	{
		type2="LOCALPLAY";
	}
	swichTab(type2);
}

//把一些监控代码放在window.onload里面能保证页面上有些初始化的参数已经初始化完成
$(function(){
		
		//--begin:广告投放代码-->
		(function(param)
		{
			try{
				//初始化城市信息
				//因为无法通过freemarker直接获取当前分站信息,所以要用js获取
				__zp_tag_params.cityID = $("#currentCity").text();
			//转换成数组
			__zp_tag_params.productID_list =__zp_tag_params.productID_list ? __zp_tag_params.productID_list.split(","):[];
			//剔除空元素
			__zp_tag_params.productID_list = $.grep(__zp_tag_params.productID_list,function(o,i){
				return o != "";
			});
				var c = {query:[], args:param||{}};
				c.query.push(["_setAccount","443"]);
				(window.__zpSMConfig = window.__zpSMConfig||[]).push(c);
				var zp = document.createElement("script"); 
				zp.type = "text/javascript"; 
				zp.async = true;
				zp.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cdn.zampda.net/s.js";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(zp, s);
			}catch(e){}
		})(window.__zp_tag_params);
		//--end:广告投放代码--->
});

var scenictourAdCountTemp=function(param){
	var arr = param.split(";");
	$.ajax({
		type : "POST",
		url : "http://s.lvmama.com/vstRoute/scenictourAdCountTemp.do",
		dataType : "JSONP",
		jsonp:"callback",
		data:{"type":arr[1],
			"index":arr[2] },
		success : function(data) {
			
		}
	});
	window.open(arr[0]);
};

