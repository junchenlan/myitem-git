
//先取门票详情页所有destId到后台进行查询，若对应的destId有推荐的自由行，则展示自由行标签
var idValue ="";
var domain = "";
$("li[name='ticketrec_route']").each(function(i,n){
	var id=$(n).attr("id");
	var ValueJ = $("#"+id+"_div");
	idValue = idValue + ValueJ.attr("value") + ",";//目的地id
	var type2 = ValueJ.attr("type");
	domain=type2=="seo"?"ticket":"s";
});
if(idValue!=""){
	var urlStr="http://"+domain+".lvmama.com/vstRoute/ticket_route_filter.do?destId="+encodeURI(encodeURI(idValue));
	$.ajax({
		url :urlStr,
		dataType : "text",
		success : function(data) { 
			var reslut = data;
			if (reslut != ""||reslut != null) {
				reslut=reslut.substring(0,reslut.length-1);
				var strs= new Array(); 
				strs=reslut.split(","); 
				for (i=0;i<strs.length ;i++ ) {
					$(".ticket_route_"+strs[i]).show();
				}
			}else{
			}  
		},
		error : function() {
		}
	});
}
	
var idValue ="";
var domain = "";
$("li[name='ticketrec_group']").each(function(i,n){
	var id=$(n).attr("id");
	var ValueJ = $("#"+id+"_div");
	idValue = idValue + ValueJ.attr("value") + ",";//目的地id
	var type2 = ValueJ.attr("type");
	domain=type2=="seo"?"ticket":"s";
});
if(idValue!=""){
	var urlStr="http://"+domain+".lvmama.com/vstRoute/ticket_group_filter.do?destId="+encodeURI(encodeURI(idValue));
	$.ajax({
		url :urlStr,
		dataType : "text",
		success : function(data) {
			var reslut = data;
			if (reslut != ""||reslut != null) {
				reslut=reslut.substring(0,reslut.length-1);
				var strs= new Array(); 
				strs=reslut.split(","); 
				for (i=0;i<strs.length ;i++ ) {
					$(".ticket_group_"+strs[i]).show();
				}
			}else{
			}  
		},
		error : function() {
		}
	});
}




$("li[name='ticketrec_route'],li[name='ticketrec_group']").each(function(i,n){
	$(n).click(function(){
		var id=$(this).attr("id");
		var ValueJ = $("#"+id+"_div");
		if(ValueJ.text()==null||ValueJ.text()==""||ValueJ.text().indexOf("目前没有相关的")>=0){
			var idValue = ValueJ.attr("value");//目的地id
			var idName =  ValueJ.attr("name");//目的地名称 
			var type2 = ValueJ.attr("type");
			var domain=type2=="seo"?"ticket":"s";
			if(id.indexOf("route")>=0){
				var urlStr="http://"+domain+".lvmama.com/vstRoute/ticket_route.do?destId="+encodeURI(encodeURI(idValue))+"&idName="+encodeURI(encodeURI(idName));
			}
			else if (id.indexOf("group")>=0){
				var urlStr="http://"+domain+".lvmama.com/vstRoute/ticket_group.do?destId="+encodeURI(encodeURI(idValue))+"&idName="+encodeURI(encodeURI(idName));
			}
			$.ajax({
				url :urlStr,
				dataType : "html",
				success : function(data) {  
					if (data != "") {
						ValueJ.html(data);
					}else{
					}  
				},
				error : function() {
				}
			});
		}
	}); 
});

function submitForm() {
	var searchForm = $("#searchForm");
	// alert("searchForm: "+searchForm.html());
	searchForm.submit();
	// var searchForm=$("#keyword");
}

function setKeywords(o) {
	var keyword = $("#keyword");
	keyword.val(o.innerHTML);
	submitForm();
}

$(function(){
	
		$(".ticket_title").bind("click",
				function() {
					var $dl = $(this).parents(".pro_list");
					var hide_box = $dl.find('.pdetails');
					var id = hide_box.attr("pdetailsId");
					// alert("id: "+hide_box.attr("pdetailsId"));
					// alert("hide_box: "+hide_box.html());
					if (hide_box.length == 0) {
						// alert("11111");
						$dl.removeClass("list_bg").addClass('pro_list_hover');
					} else {
						if ($dl.hasClass("list_bg")) {
							// alert("22222");
							$dl.removeClass("list_bg");
						} else {
							// alert("33333");
							hide_box
									.html("<div class='download_loading'></div>");
							$dl.addClass("list_bg").siblings().removeClass(
									'list_bg');
							$.ajax({
										type : "POST",
										url : "http://s.lvmama.com/ticket/showGoodsDesc/"+ id + "?t=" + Math.random(),
										dataType : "JSONP",
										jsonp:"callback",
										success : function(data) {
											if(data) {
												var goodsDesc = data;
												var index = 1;
												var html = '<div class="tiptext tip-light">';
												html  +=    '<div class="tip-arrow tip-arrow-11">';
												html  +=    '<em>◆</em>';
												html  +=    '<i>◆</i>';
												html  +=    '</div>';
												html  +=    '<div class="tip-other">';
												html  +=    '<dl class="dl-hor">';
												html  +=    '<dt>费用包含</dt>';
												html  +=    '<dd>';
												html  +=    goodsDesc.priceIncludes + '</dd>';
												html  +=    '</dl>';
												if (goodsDesc.visitAddress && goodsDesc.typeDesc) {
													html  +=    '<dl class="dl-hor">';
													html  +=    '<dt>票种说明</dt>';
													html  +=    '<dd>';
													html  +=    goodsDesc.typeDesc + '</dd>';
													html  +=    '</dl>';
												}
												html  +=    '<dl class="dl-hor">';
												html  +=    '<dt>入园须知</dt>';
												html  +=    '<dd>';
												if (goodsDesc.visitAddress) {
													html  +=   index + '.入园时间：'+ goodsDesc.limitTime + '<br>';
													index++;
													html  +=   index + '.入园地点：'+ goodsDesc.visitAddress + '<br>';
													index++;
												}
												if(goodsDesc.changeTime) {
													html  +=   index + '.取票时间：'+ goodsDesc.changeTime + '<br>';
													index++;
												}
												
												if(goodsDesc.changeAddress) {
													html  +=   index+'.取票地点：'+ goodsDesc.changeAddress +'<br>';
													index++;
												}
												
												if(goodsDesc.enterStyle) {
													html  +=   index + '.入园方式：'+ goodsDesc.enterStyle +'<br>';
													index++;
												}
												
												if(goodsDesc.limitTime && goodsDesc.visitAddress == "") {
													html  += index+'.入园限制:' + (goodsDesc.limitFlag=='1'?'无限制':'有限制 请在入园当天的 '+ goodsDesc.limitTime +' 以前入园<br>') ; 
													index++;
												}
												
												if(goodsDesc.startTime || goodsDesc.endTime || goodsDesc.unvalidDesc || goodsDesc.useInstruction || goodsDesc.days) {
													html  +=   index+'.有效期限：';
													if (goodsDesc.useInstruction) {
														html  += '&nbsp;'+'('+ goodsDesc.useInstruction +') ';
													}
													
													if (goodsDesc.aperiodicFlag=='Y') {
														if(goodsDesc.startTime && goodsDesc.endTime) {
															html  += '&nbsp;'+ goodsDesc.startTime.substring(0,10) + '&nbsp;至&nbsp;' + goodsDesc.endTime.substring(0,10) + '&nbsp;有效'
														}
														if(goodsDesc.unvalidDesc) {
															html +='，期票商品不适用日期：' + goodsDesc.unvalidDesc;
														}
													} else {
													   if(goodsDesc.days == 1) {
														   html  += '指定游玩日当天内有效';  
													   } else {
														   html  += '指定游玩日后'+ goodsDesc.days + '天内有效';  
													   }
													}
													index++;
												}
												
												html  +='</dd>';
												html  +='</dl>';
												
												
												if(goodsDesc.height || goodsDesc.age || goodsDesc.region || goodsDesc.maxQuantity || goodsDesc.express || goodsDesc.entityTicket || goodsDesc.others) {
													html  +='<dl class="dl-hor">';
													html  +='<dt>重要提示</dt>';
													html  +='<dd>';
													if(!goodsDesc.height && !goodsDesc.age && !goodsDesc.region && !goodsDesc.maxQuantity && !goodsDesc.express && !goodsDesc.entityTicket) {
														html  += goodsDesc.others;
												    } else {
												    	html  += '票种说明:' +'<br>';
												    	html  += '身高: ' + goodsDesc.height +'<br>';
														html  += '年龄: ' + goodsDesc.age +'<br>';
														html  += '地域: ' + goodsDesc.region +'<br>';
														html  += '最大限购: ' + goodsDesc.maxQuantity +'<br>';
														html  += '快递: ' + goodsDesc.express +'<br>';
														html  += '实体票: ' + goodsDesc.entityTicket +'<br>';
														html  += '其它: ' + goodsDesc.others +'<br>';
												    }
													html  += '</dd>';
													html  += '</dl>';
												}
												
												
												if(goodsDesc.cancelStrategyDesc) {
													html  +='<dl class="dl-hor">';
													html  +='<dt>退改说明</dt>';
													html  +='<dd>';
													html += goodsDesc.cancelStrategyDesc;
													html  += '</dd>';
													html  += '</dl>';
												}
												
												html  += '</div>';
												html  += '<a class="view-details" href="javascript:;">收起</a>';
												html  += '</div>';
												hide_box.html(html);
											}
										}
									});
						}
					}
				});
		
		$(".name").bind("click",
				function() {
					var $dl = $(this).parents(".product-special-items-main");
					
					var hide_box = $dl.find('.psi-tab-contents');
					var id = hide_box.attr("pdetailsId");
					//hide_box.html("<div class='psi-tab-content active'></div>");
							$.ajax({
										type : "POST",
										url : "http://s.lvmama.com/ticket/showGoodsDesc/"+ id + "?t=" + Math.random(),
										dataType : "JSONP",
										jsonp:"callback",
										success : function(data) {
											if(data) {
												var goodsDesc = data;
												var index = 1;
												var html = '<div class="psi-tab-content active">';
												html  += ' <dl class="clearfix"><dt>费用包含</dt><dd>'+goodsDesc.priceIncludes+'</dd></dl>';
												if (goodsDesc.visitAddress && goodsDesc.typeDesc) {
													html  += ' <dl class="clearfix"><dt>票种说明</dt><dd>'+goodsDesc.typeDesc+'</dd></dl>';
												}
												html  += '<dl class="clearfix"><dt>入园须知</dt><dd>';
												if (goodsDesc.visitAddress) {
													html  +=   index + '.入园时间：'+ goodsDesc.limitTime + '<br>';
													index++;
													html  +=   index + '.入园地点：'+ goodsDesc.visitAddress + '<br>';
													index++;
												}
												if(goodsDesc.changeTime) {
													html  +=   index + '.取票时间：'+ goodsDesc.changeTime + '<br>';
													index++;
												}
												
												if(goodsDesc.changeAddress) {
													html  +=   index+'.取票地点：'+ goodsDesc.changeAddress +'<br>';
													index++;
												}
												
												if(goodsDesc.enterStyle) {
													html  +=   index + '.入园方式：'+ goodsDesc.enterStyle +'<br>';
													index++;
												}
												
												if(goodsDesc.limitTime && goodsDesc.visitAddress == "") {
													html  += index+'.入园限制:' + (goodsDesc.limitFlag=='1'?'无限制':'有限制 请在入园当天的 '+ goodsDesc.limitTime +' 以前入园<br>') ; 
													index++;
												}
												
												if(goodsDesc.startTime || goodsDesc.endTime || goodsDesc.unvalidDesc || goodsDesc.useInstruction || goodsDesc.days) {
													html  +=   index+'.有效期限：';
													if (goodsDesc.useInstruction) {
														html  += '&nbsp;'+'('+ goodsDesc.useInstruction +') ';
													}
													
													if (goodsDesc.aperiodicFlag=='Y') {
														if(goodsDesc.startTime && goodsDesc.endTime) {
															html  += '&nbsp;'+ goodsDesc.startTime.substring(0,10) + '&nbsp;至&nbsp;' + goodsDesc.endTime.substring(0,10) + '&nbsp;有效'
														}
														if(goodsDesc.unvalidDesc) {
															html +='，期票商品不适用日期：' + goodsDesc.unvalidDesc;
														}
													} else {
													   if(goodsDesc.days == 1) {
														   html  += '指定游玩日当天内有效';  
													   } else {
														   html  += '指定游玩日后'+ goodsDesc.days + '天内有效';  
													   }
													}
													index++;
												}
												html  += '</dd></dl>';
												if(goodsDesc.height || goodsDesc.age || goodsDesc.region || goodsDesc.maxQuantity || goodsDesc.express || goodsDesc.entityTicket || goodsDesc.others) {
													html  += '<dl class="clearfix"><dt>重要提示</dt><dd>';
													if(!goodsDesc.height && !goodsDesc.age && !goodsDesc.region && !goodsDesc.maxQuantity && !goodsDesc.express && !goodsDesc.entityTicket) {
														html  += goodsDesc.others;
												    } else {
												    	html  += '票种说明:' +'<br>';
												    	html  += '身高: ' + goodsDesc.height +'<br>';
														html  += '年龄: ' + goodsDesc.age +'<br>';
														html  += '地域: ' + goodsDesc.region +'<br>';
														html  += '最大限购: ' + goodsDesc.maxQuantity +'<br>';
														html  += '快递: ' + goodsDesc.express +'<br>';
														html  += '实体票: ' + goodsDesc.entityTicket +'<br>';
														html  += '其它: ' + goodsDesc.others +'<br>';
												    }
													html  += '</dd></dl>';
												}
												if(goodsDesc.cancelStrategyDesc) {
													html  += ' <dl class="clearfix"><dt>退改说明</dt><dd>'+goodsDesc.cancelStrategyDesc+'</dd></dl>';
												}
												html  +=  '</div>';
												hide_box.html(html);
											}
										}
									});
				});
		
		
	
	if ($("#guide_data_div").length > 0) 
	{
	// alert("攻略");
	var placeId = $("#guide_data_div").attr("placeId");
	var official_Guide = true;
	$.ajax({
				url : "http://www.lvmama.com/guide/ajax/api.php?action=getOrgInfo&id="+placeId,
				dataType : "jsonp",
				success : function(res) {
					var data = res.data;
					// alert("data3: "+data);
					if (data != null && data != "") {
						var g1="<h4 class='common_tit2'>"+data.name+"旅游攻略</h4>"; 
						g1 = g1+'<div class="gonglve">';
						g1 = g1+'<dl class="official_guide clearfix">';
						g1 = g1+ '<dt><a target="_blank" href="'+data.url+'"><img width="90" height="127" alt="" src="'
								+ data.thumb + '"></a></dt>';
						g1 = g1 + '<dd>';
						g1 = g1 + '<p class="version">攻略版本：<br>' + data.version
								+ '</p>';
						g1 = g1 + '<p class="update_time">更新时间：<span>'
								+ data.updatetime + '</span></p>';
						g1 = g1 + '<a   target="_blank" hidefocus="false" href="' + data.url
								+ '" class="btn btn-small btn-orange">下载攻略</a>';
						g1 = g1 + '</dd>';
						g1 = g1 + '</dl>';
						g1 = g1 + '<ul id="guide_data_list" class="guide_list">';
						g1 = g1 + '<div class="download_loading"></div>';
						g1 = g1 + '</ul>';
						g1 = g1 + '</div>';
						//alert("g1: "+g1);
						$("#guide_data_div").html(g1);
						
						$.ajax({
							url : "http://www.lvmama.com/guide/ajax/api.php?action=getOrgLatestArticle&id="+placeId,
							dataType : "jsonp",
							success : function(res2) {
								//alert("res2.data3: "+res2.data);
								if (res2.data != null && res2.data != "") {
									var g2 = "";
									$.each(res2.data, function(i, n) {
										g2 = g2 + '<li>';
										g2 = g2 + '<a target="_blank" href="' + n.url + '">'
												+ n.title + '</a>';
										g2 = g2 + '<p class="scan_detail">';
										g2 = g2 + '<span>' + n.inputtime
												+ '</span>';
										g2 = g2 + '<i>浏览' + n.hits + '次</i>';
										g2 = g2 + '</p>';
										g2 = g2 + '</li>';
									});
									$("#guide_data_list").html(g2);
								} else if (!official_Guide) {
									$("#guide_data_div").hide();
								}
							},
							error : function(XMLHttpRequest, textStatus, errorThrown) {
								if (!official_Guide) {
									$("#guide_data_div").hide();
								}
							}
						});
						
						
					} else {
						official_Guide = false;
						$("#guide_data_div").hide();
					}
				},
				error : function() {
					$("#guide_data_div").hide();
				}
			});
	}
	
	if ($("#ticket_seo_gonglve").length > 0) {
	// alert("攻略");
	var placeId = $("#ticket_seo_gonglve").attr("placeId");
	var official_Guide = true;
	$.ajax({
		// url:
		// "http://ticket.lvmama.com/search/js/shgl1.json",
		// "http://www.lvmama.com/guide/ajax/api.php?action=getOrgInfo&id="+placeId+"?jsoncallback=?",
		url : "http://www.lvmama.com/guide/ajax/api.php?action=getOrgInfo&id="+placeId,
		dataType : "jsonp",
		success : function(res) {
			var data = res.data;
			// alert("data3: "+data);
			if (data != null && data != "") {
				var g1='<dt><a href="#"><img width="90" height="127" alt="" src="'+data.thumb+'"></a></dt>'; 
				g1 = g1 + '<dd>';
				g1 = g1 + '<p class="version">攻略版本：<br>'+data.version+'</p>';
				g1 = g1 + '<p class="update_time">更新时间：<span>'+data.updatetime+'</span></p>';
				g1 = g1 + '<a target="_blank" hidefocus="false" href="'+data.url+'" class="btn btn-small btn-orange">下载攻略</a>';
				g1 = g1 + '</dd>';
				g1 = g1 + '</dl>';
				//alert("g1: "+g1);
				$("#ticket_seo_gonglve").html(g1);
			} else {
				official_Guide = false;
			}
		},
		error : function() {
			$("#ticket_seo_gonglve").hide();
		}
	});}
	
	
	if ($("#cmt_data_div").length > 0) {
		var placeId = $("#cmt_data_div").attr("placeId");
		$.ajax({
			url : "http://s.lvmama.com/ajax/cmt.do?placeId=" + placeId + "&type=1",
			dataType : "jsonp",
			jsonp : "callback",
			success : function(data) {
				if (data.cmtData != "") {
					$("#score_detail").html(data.cmtData);
				} else {
					$("#score_detail").parent().remove();
				}
			},
			error : function() {
				$("#score_detail").parent().remove();
			}
		});
	};
	
	(function(){
		var productIds = $(".product-info").map(function(){
			return $(this).prop("id");
		}).get().join(',');
		$.ajax({
			url : "http://s.lvmama.com/ajax/showLineProduct.do?productIds=" + productIds+"&type=1",
			dataType : "jsonp",
			beforeSend:function(XHR)
			{
				if(!productIds)
				{
					return false;
				}
			},
			success : function(data) 
			{
				if(data)
				{
					$.each(data,function(productId,product){
						//alert("unit:"+unit);
						$("#p"+productId).html(product.unit);
					//	$("label[name=nowLable]","#"+productId).html(unit);
					})
				}
			},
			error : function() {
			}
		});
	})();
  }
)


function setAdultChild(productId,baseAdultQuantity,baseChildQuantity)
{
	html = baseAdultQuantity + "成人" + baseChildQuantity + "个儿童";
	$("#m"+productId).html(html);
}

if ($(".product-info").length > 0) {}

// 将分钟数转换为天/时/分
function minutesToDate(time) {
	var time = parseInt(time);
	var day = 0;
	var hour = 0;
	var minute = 0;
	if (time > 0) {
		day = Math.ceil(time / 1440);
		if (time % 1440 == 0) {
			hour = 0;
			minute = 0;
		} else {
			hour = parseInt((1440 - time % 1440) / 60);
			minute = parseInt((1440 - time % 1440) % 60);
		}

	} else if (time < 0) {
		time = -time;
		hour = parseInt(time / 60);
		minute = parseInt(time % 60);
	}
	if (hour < 10)
		hour = "0" + hour;
	if (minute < 10)
		minute = "0" + minute;
	//var str=day + "天" + hour + "点" + minute + "分";
//	alert("str: "+str);
	var str=hour + ":" + minute
	return str;
}


var todayTickets=$(".tagsback-time_data");
$.each(todayTickets,function(n,value) {  
    //do something here 
	var valueJ=$(value);
	var timeValue=valueJ.attr("value");
	var flag=valueJ.attr("flag");
    if(flag=="1")
    {
    	if(timeValue!=null&&timeValue!=''&&timeValue!='0')
		{
    		valueJ.attr("tip-content",minutesToDate(timeValue)+"前可购买当日票")
    		valueJ.find("i").html(minutesToDate(timeValue)+"之前");
		}
    	else
    	{
    	}
    }	
});  


$(".time").countdown({
	format : "dd:hh:mm:ss", // 时间格式 自定义倒计时类型 现支持 dd:hh:mm:ss(默认) hh:mm:ss dd:hh:mm mm:ss 四种格式 
	prezero : true, // 前导零 
	effect : true, // 支持自定义格式  
	overtips : "已结束" // 自定义结束提醒 
	}); 

//加载门票
function getTicketYoulun(id,urlStr)
{
	//alert("keyword: "+keyword+" , len: "+$("#routeTicketContainer").length);
	//alert("urlStr: "+urlStr);
	if ($("#"+id).length > 0) {
		$.ajax({
			url :urlStr,
			dataType : "html",
			success : function(data) {
				// alert("data: "+data);
				// alert("html: "+$("#score_detail").html());
				if (data != "") {
					$("#"+id).html(data);
				}  
				else
				{
					$("#"+id).hide();
				}
			},
			error : function() 
			{
				//$("#ticketContainer").parent().remove();
				$("#"+id).hide();
			}
		});
	}
}



//配置默认选中的出发地
$(function()
{
	var path = window.location.pathname.split("/");
	if(path && path.length > 2)
	{
		var searchString = path[2];
		var destLetterIndex = searchString.indexOf("H") ;
		if(destLetterIndex > -1)//判断是否包含H,H代表出发地
		{
			var nextLetter = searchString.slice(destLetterIndex+1).match(/\D/);//获取下一个字母
			var nextLetterIndex =  nextLetter?searchString.indexOf(nextLetter):0;//获取下一个字母的位置
			var destId  = nextLetterIndex?searchString.slice(destLetterIndex+1, nextLetterIndex):searchString.slice(destLetterIndex+1);//截取H到下一个字母之间的数字
			if(destId == 8)//如果是8  就是全国
			{
				$("b",".btn_city.js_searchbox").attr("data-id",8).text("全国");
				return;
			}
			else if(destId)//如果destId不存在就不做任何处理
			{
				var dataName = $("a[data-id="+destId+"]:eq(0)","div.lv_city_down.js_cf_city div,dl").attr("data-name");
				if(dataName)//如果通过destId找不到数据.不做任何处理
				{
					$("b",".btn_city.js_searchbox").attr("data-id",destId).text(dataName);
				}
			}
		}
 	}
});

/**
 * 初始化线路猜你喜欢html
 * @param data
 */
function initGuessYouLikeRoute(data,typeTemp)
{
	var html = '';
	var type = 'losc=' + typeTemp;
	$(data).each(function(index,item)
	{
		var url = item.url.indexOf("?")>0?item.url+"&"+type:item.url+"?"+type ;
		if(index >= 5)
		{
			return false;
		}
		html +='<a  target="_blank" class="like-link" href="'+url+'">';
		html +='<img src="'+item.simg+'" width="198" height="132" alt="">';
		html+='<h4>'+item.name+'</h4>';
		html+='<div class="price"><em>¥'+item.price+'</em>起</div>';
		html +='</a>';
	})
	if(html)//如果html有循环拼接
	{
		$("#guessYouLikeRoute").html(html);
		$("#guessYouLikeDiv").show();
	}
	else//否则移除当前节点的父节点
	{
		$("#guessYouLikeDiv").remove();
	}
}

/**
 * 初始化门票猜你喜欢html
 * @param data
 */
function initGuessYouLike(data,typeTemp)
{
	var html = '';
	var type = 'losc=' + typeTemp;
	$(data).each(function(index,item)
	{
		var url = item.url.indexOf("?")>0?item.url+"&"+type:item.url+"?"+type ;
		if(index >= 5)
		{
			return false;
		}
		html +='<li><a  target="_blank" class="sale_img" href="'+url+'" hidefocus="false">';
		html +='<img src="'+item.simg+'" width="198" height="132" alt="">';
		html +='</a>';
		html +='<a target="_blank" class="sale_tit" style="max-height:40px; overflow:hidden;text-overflow:ellipsis;" href="'+url+'" hidefocus="false">'+item.name+'</a>';
		html +='<div class="jiage_box">';
		html +='<a target="_blank" class="btn btn-orange btn-small " href="'+ url +'" hidefocus="false">查看详情</a>';
		html +='<span class="current_price">¥'+item.price+'<i>起</i></span>';
		html +='</div>';
		html +='</li>';
	})
	if(html)//如果html有循环拼接
	{
		$("#guessYouLike").html(html);
		$("#guessYouLikeDiv").show();
	}
	else//否则移除当前节点的父节点
	{
		$("#guessYouLikeDiv").remove();
	}
}

function vstCreateProductviewTag(id,name,category,fromPage)
{
	cmCreateProductviewTag(id,name,category,"-_-"+fromPage+"景点门票");
}


