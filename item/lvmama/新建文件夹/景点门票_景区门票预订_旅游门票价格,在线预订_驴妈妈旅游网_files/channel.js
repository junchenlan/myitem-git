/**
 * 门票，周边，国内，酒店，出境频道 下面推荐景点js
 * @param url ajax请求地址
 * @author nixianjun
 */
function getAjaxRecommendScenic(url,fromPlaceId,fromPlaceName){
	    $("a[paramDataCode]").bind("click", function(){
	         var paramDataCode=$(this).attr("paramDataCode"); 
             var paramId=$(this).attr("paramId"); 
             var paramDataSearchName=$(this).attr("paramDataSearchName"); 
 			 $.ajax({
			   type: "POST",
			   url: url,
			   data: {paramDataCode: paramDataCode,fromPlaceId:fromPlaceId,fromPlaceName:fromPlaceName,paramDataSearchName:paramDataSearchName},
			   async: true,
			   dataType:"html",
			   success: function(data){
			        $("#"+paramId).html(data); 
 			   },
			   error:function(msg){
			     alert( "Data fail: " + msg );
			   }
			});
 		});
	}

function getAjaxRecommendScenic(url,fromPlaceId,fromPlaceName,channelPage){
    $("a[paramDataCode]").bind("click", function(){
         var paramDataCode=$(this).attr("paramDataCode"); 
         var paramId=$(this).attr("paramId"); 
         var paramDataSearchName=$(this).attr("paramDataSearchName"); 
			 $.ajax({
		   type: "POST",
		   url: url,
		   data: {paramDataCode: paramDataCode,fromPlaceId:fromPlaceId,fromPlaceName:fromPlaceName,paramDataSearchName:paramDataSearchName,channelPage:channelPage},
		   async: true,
		   dataType:"html",
		   success: function(data){
		        $("#"+paramId).html(data); 
			   },
		   error:function(msg){
		     alert( "Data fail: " + msg );
		   }
		});
		});
}

function getAjaxRecommendScenic(url,fromPlaceId,fromPlaceName,channelPage,parentFromPlaceId){
    $("a[paramDataCode]").bind("click", function(){
         var paramDataCode=$(this).attr("paramDataCode"); 
         var paramId=$(this).attr("paramId"); 
         var paramDataSearchName=$(this).attr("paramDataSearchName"); 
			 $.ajax({
		   type: "POST",
		   url: url,
		   data: {paramDataCode: paramDataCode,fromPlaceId:fromPlaceId,fromPlaceName:fromPlaceName,paramDataSearchName:paramDataSearchName,channelPage:channelPage,parentFromPlaceId:parentFromPlaceId},
		   async: true,
		   dataType:"html",
		   success: function(data){
		        $("#"+paramId).html(data); 
			   },
		   error:function(msg){
		     alert( "Data fail: " + msg );
		   }
		});
		});
}

function getAjaxRecommendScenic(url,fromPlaceId,fromPlaceName,parentFromPlaceId){
    $("a[paramDataCode]").bind("click", function(){
         var paramDataCode=$(this).attr("paramDataCode"); 
         var paramId=$(this).attr("paramId"); 
         var paramDataSearchName=$(this).attr("paramDataSearchName"); 
			 $.ajax({
		   type: "POST",
		   url: url,
		   data: {paramDataCode: paramDataCode,fromPlaceId:fromPlaceId,fromPlaceName:fromPlaceName,paramDataSearchName:paramDataSearchName,parentFromPlaceId:parentFromPlaceId},
		   async: true,
		   dataType:"html",
		   success: function(data){
		        $("#"+paramId).html(data); 
			   },
		   error:function(msg){
		     alert( "Data fail: " + msg );
		   }
		});
		});
}

/*function getSeoDest(_seoStageKey,_destId,_url){
	$.ajax({
        url:"http://www.lvmama.com/seoDestLink/querySeoDestLinkByShip.do",
		url:_url,
        data:{
            seoStageKey:_seoStageKey,destId:_destId
        },
        dataType:'json',
        success:function(objs) {
           if(objs!=null){
        	   for(var i=0;i<objs.length;i++){
        		   $("#relationship").append("<a href='"+objs[i].linkUrl+"'>&nbsp"+objs[i].linkName+"&nbsp</a>");
        	    }
            }
        },
    });  
	
}*/