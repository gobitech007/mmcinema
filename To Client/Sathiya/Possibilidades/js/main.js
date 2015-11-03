var ditems=new Array();
$(function(){
	var boy = ['b','g'];
	var a=8,p=4;
	var k=0,pg=0;
	var pagelen=$('.pagenav').length;
	var counter = 0,mr=[];
	var pastDraggable = "",pageReset="";
	var materialinput=$('#materialarr');
	var sma="";

	$('.framePhoto').click(function(){
		$('.framePhoto').css('background-image','url("./images/template/icon_bg_normal.png")');
		var fr = $('.framePhoto').index(this)+1;
		k=fr;
		$(this).css('background-image','url("./images/template/icon_bg_over.png")');
		$('.rightArrowinactive').addClass('rightArrow');			
	});
	
	//$('.framePhoto').hover(function(){
	//	$('.framePhoto').css('background-image','url("./images/template/icon_bg_normal.png")');
	//	$(this).css('background-image','url("./images/template/icon_bg_over.png")');
		
	//});
	var matrestarr="";
	$('.rightArrowinactive').click(function(event){
		
		if (k>0) {			
			if (mr.length==0 && pg ==1) {				
				return false;
			}
			$('.pagenav:eq('+pg+')').hide();
			pg++;
			$('.pagenav:eq('+pg+')').show();
			secondimageset(k);
		}
		if (pg>0 && pg ==1) {
			var smanotrest=k;
			$('.leftArrowinactive').show();
			$('.leftArrowinactive').addClass('leftArrow');
			$('.resetButtoninactive').addClass('resetButton');
			if (mr.length==0) {
				$('.rightArrowinactive').removeClass('rightArrow');
			}
			
			if (sma!=smanotrest && sma!="" ) {				
				$('.ui-droppable img').css({'top':'0','left':'0'});
				$('.ui-droppable img').css({'top':'0','left':'0'});	
				$('#materialarr').val("");
				mr=[];
				counter=0;
				$('.greaterPick').remove();
				if (k<5) {
					pageReset=boy[1];
				}else if(k>4){
					pageReset=boy[0];
				}
				$('.rightArrowinactive').removeClass('rightArrow');
				$('.pagethreeresult').html("");
				var lastdress="",lastcap="",lastshoe="";				
			}
			sma=smanotrest;			
			
		}else if (pg>1) {
			var perreset=k;
			var changeanotherimg="";
			var img_arr = "";
			$(this).hide();
			if (pageReset=="g" && perreset>4 ) {
				$('.pagethreeresult').html("");
			}else if(pageReset=="b" && perreset<5){
				$('.pagethreeresult').html("");				
			}
			$('#avatar_image .cap_img').removeAttr("style").children('img').attr('id','img_cap');
			$('#avatar_image .dress_img').removeAttr("style").children('img').attr('id','img_dress');
			$('#avatar_image .shoe_img').removeAttr("style").children('img').attr('id','img_shoe');
			if($('#pagethreeImagearea').html()!=""){
				$('#pagethreeImagearea').html("");
			}
			//alert(changeanotherimg +" "+$('#imageid').val());
			//if (changeanotherimg!=$('#imageid').val()) {
			//	$('.pagethreeresult').html("");
			//}
			//changeanotherimg=$('#imageid').val();
			var lastdress="",lastcap="",lastshoe="";
			var ptim=materialinput.val();
			for(var pgti=0;pgti<ptim.split(',').length;pgti++){				
				$('#pagethreeImagearea').append('<img id="'+ptim.split(',')[pgti].split('_')[1]+'_'+pgti+'" class="pgthree '+ptim.split(',')[pgti].split('_')[1]+'" src="./images/material/'+ptim.split(',')[pgti]+'.png" width="38" alt="'+ptim.split(',')[pgti]+'"/>');				
				$('.avatar_image').css('background-image','url(./images/avatar/'+$('#imageid').val()+'.png)');
			}
			if ($('.pagethreeresult').html()!="") {	
				var resetInput=materialinput.val();
				//console.log(resetInput);
				//console.log(matrestarr);
				//console.log(matrestarr==resetInput);
				if (matrestarr!="" && matrestarr!=resetInput) {
					
					$('.pagethreeresult').html("");
				}
				matrestarr=resetInput;
			}
			var click = {
				x: 0,
				y: 0
			    };
			
			$("#pagethreeImagearea img").draggable({								
				refreshPositions: true,
				drag:function(e,ui){
					var zoom = 1.3;
					var original = ui.originalPosition;
					var lpos=((e.clientX - click.x + (original.left)) / zoom);					
					var tpos=((e.clientY - click.y + (original.top)) / zoom);
					ui.position = {
					    left: lpos,
					    top:  tpos
					};
				},
				start: function (event) {
					Positioning.initialize($(this));
					click.x = event.clientX;
					click.y = event.clientY;
				},
				revert : function(socketobj) {
					$(this).data("uiDraggable").originalPosition = {
						top : 0,
						left : 0
					};
					return !socketobj;
				},
				containment: ".pagethreedragmaterial", 
				scroll: false
			});			
			    var Positioning = (function () {
				return {
				    initialize: function (object) {
					object.data("originalLocation", $(this).originalPosition = { top: 0, left: 0 });
				    },
				    reset: function (object) {
					object.data("originalLocation").originalPosition = { top: 0, left: 0 };
				    },
				};
			    })();
			//    
			//$('#avatar_image img').each(function(i,e){
			//	
			//});
		}
	});
	$('.leftArrowinactive').click(function(){		
		if (k>0) {
			$('.pagenav:eq('+pg+')').hide();
			pg--;
			$('.pagenav:eq('+pg+')').show();
		}		
		if (pg<2 && pg==1) {
			$('.rightArrowinactive').show();						
			if (mr.length==0) {
				$('.rightArrowinactive').removeClass('rightArrow');
				$('.greaterPick').remove();
			}
			//$('#materialarr').val("");
			$(".pagethreedragmaterial #header_section img").attr({"src":"",'alt':''});
			$(".pagethreedragmaterial #body_section img").attr({"src":"",'alt':''});
			$(".pagethreedragmaterial #footer_section img").attr({"src":"",'alt':''});
			if ($('.pagethreeresult').html()!="") {	
				var resetInput=materialinput.val();
				console.log(resetInput);
				console.log(matrestarr);
				console.log(matrestarr==resetInput);
				if (matrestarr!="" && matrestarr!=resetInput) {					
					$('.pagethreeresult').html("");
				}
				matrestarr=resetInput;
			}
			
		}else if (pg<1) {
			var samrest=k;
			$(this).hide();
			$('.resetButtoninactive').removeClass('resetButton');
			//alert(sma +" "+samrest);	
			if (sma!=samrest && sma!="") {
								
				$('.ui-droppable img').css({'top':'0','left':'0'});
				$('.ui-droppable img').css({'top':'0','left':'0'});	
				$('#materialarr').val("");
				mr=[];
				counter=0;
				$('.greaterPick').remove();
				if (k<5) {
					pageReset=boy[1];
				}else if(k>4){
					pageReset=boy[0];
				}
				var lastdress="",lastcap="",lastshoe="";
			}
		}
	});

var click = {
    x: 0,
    y: 0
};


	 
	$('#boymaterials img').draggable({

		start: function(event) {
			click.x = event.clientX;
			click.y = event.clientY;			
		},
		clone:'div#pagetwodrag',
		cursor: 'move',          
		//revert: 'invalid',     
		///scroll:true,
		drag: function (e, ui) {
			// This is the parameter for scale()
			//console.log(ui.originalPosition);
	        var zoom = 1.3;

	        var original = ui.originalPosition;
	        var lpos=((e.clientX - click.x + (original.left)) / zoom);
	        //if(lpos>100) {lpos=0}
	     //   console.log(lpos);
	      //  console.log(tpos);
	        var tpos=((e.clientY - click.y + (original.top)) / zoom);
	        // jQuery will simply use the same object we alter here
	        ui.position = {
	            left: lpos,
	            top:  tpos
	        };
	        
		//$("#div#pagetwodrag").setTransform("scale", 1);
		//	//if (counter==7) {				
		//	//	$('.greaterPick').remove();
		//	//}
		//	//console.log(ui.helper)
		},
		revert: 'invalid',			 
		
		refreshPositions: true
		//cursorAt: {left: 0, top: 0},
		
		
	});
	$('#girlmaterials img').draggable({
		start: function(event) {
			click.x = event.clientX;
			click.y = event.clientY;
		},
		appendTo:'div#pagetwodrag',
		cursor: 'move',          
		//revert: 'invalid',       
		revert: 'invalid',
		revertDuration: 900,     
		opacity: 0.35,
		refreshPositions: true,
		drag: function (e, ui) {
	        var zoom = 1.3;

	        var original = ui.originalPosition;
	        var lpos=((e.clientX - click.x + (original.left)) / zoom);
	        //if(lpos>100) {lpos=0}
	       // console.log(lpos);
	       // console.log(tpos);
	        var tpos=((e.clientY - click.y + (original.top)) / zoom);
	        // jQuery will simply use the same object we alter here
	        ui.position = {
	            left: lpos,
	            top:  tpos
	        };
			//if (counter==7) {				
			//	$('.greaterPick').remove();
			//}		
		}		
	});
	$('#pagetwodrag').droppable({
		accept: "img.drp",
		activeClass: 'drp',
		hoverClass: "ui-state-hover",
		drop: function( event, ui ) {
			
			var ktk=ui.draggable[0].alt;			
			if ($.inArray(ktk, mr) == -1) {
				mr.push(ktk);				
				if (counter<8) {
					counter++;	
				}
			}
			//console.log(counter)
			$('#materialarr').val(mr);
			//if (ui.position.left<110){
			//	ui.position.left=110;				
			//}
			//else if(ui.position.left>125){
			//	//ui.position.left=ui.position.left-20
			//}
			//else{
			//	ui.position.left=ui.position.left
			//}
			//console.log(ui.position.left);
			//$('#'+ui.draggable[0].id).css({'position':'relative','left':ui.position.left+'px','top':ui.position.top+'px'});
			//ui.position.left=0;
			if (mr.length>0) {
				$('.rightArrowinactive').addClass('rightArrow');
			}
			if(counter==7){				
				$('.pagetwomaterial:eq(0)').append('<div class="greaterPick"></div>');				
				if ($('.greaterPick').length>1){
					$('.greaterPick:gt(0)').remove();
				}
			}
		
		}
	      });
	//$('#pagetwodrag img.drp').draggable({
	//	cursor: 'move',          
	//	revert: 'invalid',    
	//	revertDuration: 900,     
	//	opacity: 0.35,
	//	drag: function (e, ui) {
	//		console.log(ui)
	//		console.log('second')
	//		//$('#'+ui.draggable[0].id).css({'position':'relative','left':ui.position.left+'px'});
	//	}
	//});
	$('#boymaterials').droppable({
		start: function(event) {
        click.x = event.clientX;
        click.y = event.clientY;
    },
		accept: "img.drp",
		activeClass: '.drp',           		
		hoverClass: "ui-state-hover",		
		drop: function( event, ui ) {
			//console.log(counter)
			if (counter==7) {				
				$('.greaterPick').remove();
			}
			counter--;
			var k =mr.indexOf(ui.draggable[0].alt);
			mr.splice(k,1);
			if (mr.length==0) {
				$('.rightArrowinactive').removeClass('rightArrow');
				$('.greaterPick').remove();
			}
			$('#materialarr').val(mr);
			if(ui.position.top<-25){
				ui.position.top=0;
			}
			if (ui.position.left<110)
				ui.position.left=110;				
			else if(ui.position.left>110)
				ui.position.left=ui.position.left-20
			else
				ui.position.left=ui.position.left
			
			$('#'+ui.draggable[0].id).css({'position':'relative','left':ui.position.left+'px','top':ui.position.top+'px'});
			ui.position.left=0;
			$('#'+ui.draggable[0].id).css({'position':'relative','left':'0','top':'0'});
			var zoom = 1.3;

        /*var original = ui.originalPosition;

        // jQuery will simply use the same object we alter here
        ui.position = {
            left: ((e.clientX - click.x + (original.left)) / zoom),
            top:  ((e.clientY - click.y + (original.top)) / zoom)
        };*/
		}
	});
	$('#girlmaterials').droppable({
		accept: "img.drp",
		activeClass: 'drp',           		
		hoverClass: "ui-state-hover",		
		drop: function( event, ui ) {
			if (counter==7) {				
				$('.greaterPick').remove();
			}
			counter--;
			if (mr.length==0) {
				$('.rightArrowinactive').removeClass('rightArrow');
				$('.greaterPick').remove();
			}
			//console.log(counter);
			var k =mr.indexOf(ui.draggable[0].alt);
			mr.splice(k,1);
			$('#materialarr').val(mr);
			if(ui.position.top<-25){
				ui.position.top=0;
			}
			if (ui.position.left<110)
				ui.position.left=110;				
			else if(ui.position.left>110)
			ui.position.left=ui.position.left-20;
			else
			ui.position.left=ui.position.left;
			
			$('#'+ui.draggable[0].id).css({'position':'relative','left':ui.position.left+'px','top':ui.position.top+'px'});
			ui.position.left=0;
			$('#'+ui.draggable[0].id).css({'position':'relative','left':'0','top':'0'});
		}
	});	
	
	/*******************Third Page********************/	
	var lastdress="";
	var lastcap="";
	var lastshoe="";
	var dropagesec="";
	var dress_length=0,cap_length=0,shoe_length=0;
	
	$(".avatar_image").droppable({
		revert: 'invalid',
		drop: function( event, ui ) {		
			console.log(ui)
			var imgalt=ui.draggable[0].alt.split('_');
			var img_value = ui.draggable[0].src;
			var drag_value = ui.draggable[0].id.split('_')[0];
			var personid=$('#imageid').val();
			//selected images count
			var cap_length = $("#pagethreeImagearea .cap").length
			var dress_length = $("#pagethreeImagearea .dress").length
			var shoe_length = $("#pagethreeImagearea .shoe").length
			/*************Revert position**************/
			var currentDraggable = ui.draggable[0].id;
			
			//console.log(dropagesec);
			var resetInput=$('#materialarr').val();
			//console.log(resetInput);
			if (dropagesec!="" && dropagesec!=resetInput) {
				//console.log(resetInput+" inert");
				 lastdress="";
				 lastcap="";
				 lastshoe="";
			}
			dropagesec=resetInput;
			
			//console.log(dropagesec);
			//console.log(lastdress);
			
			if(drag_value=="cap"){
				if ((lastcap != "" || typeof(lastcap) == "undefined") && cap_length > 1){
					$('#pagethreeImagearea #'+lastcap).css('visibility','visible');	
					$("#pagethreeImagearea #"+lastcap).animate($("#pagethreeImagearea #" + lastcap).data().originalLocation, "slow");
					lastcap = "";
				}
				$(".cap_img img").removeAttr("style");
				$(".cap_img img").attr({'src':img_value,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
				$('#pagethreeImagearea #'+ui.draggable[0].id).css('visibility','hidden');
				if (imgalt[0]=="g") {
					$(".cap_img").css({'top':'-5px','left':'1px'});
				}else{
					$(".cap_img").removeAttr("style");
				}
				if (lastcap == "") {
					lastcap=currentDraggable;
				}
			}else if(drag_value=="dress"){
				//console.log(lastdress)
				if ((lastdress != "" || typeof(lastdress) == "undefined") && dress_length > 1){
					
					$('#pagethreeImagearea #'+lastdress).css('visibility','visible');	
					$("#pagethreeImagearea #"+lastdress).animate($("#pagethreeImagearea #"+lastdress).data().originalLocation, "slow");
					lastdress="";
				}
				$(".dress_img img").removeAttr("style");
				//$(".dress_img").html("");
				//$('#pagethreeImagearea #'+ui.draggable[0].id).appendTo(".dress_img")
				//$(".dress_img img").addClass('objectFitmat db').removeClass('pgthree dress ui-draggable ui-draggable-handle').attr({'width':'70'}).removeAttr("style");
				$(".dress_img img").attr({'src':img_value,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
				$('#pagethreeImagearea #'+ui.draggable[0].id).css('visibility','hidden');
				if (imgalt[0]=="g") {
					$(".dress_img").css({'top':'-8px','left':'1px'});
				}else{
					$(".dress_img").removeAttr("style");
				}
				if (lastdress == "") {
					lastdress=currentDraggable;
				}
				//console.log(lastdress)
			}else if(drag_value=="shoe"){
				if ((lastshoe != "" || typeof(lastshoe) == "undefined")  && shoe_length > 1){
					$('#pagethreeImagearea #'+lastshoe).css('visibility','visible');	
					$("#pagethreeImagearea #"+lastshoe).animate($("#pagethreeImagearea #"+lastshoe).data().originalLocation, "slow");
					lastshoe = "";
				}
				$(".shoe_img img").removeAttr("style");
				$(".shoe_img img").attr({'src':img_value,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
				$('#pagethreeImagearea #'+ui.draggable[0].id).css('visibility','hidden');
				if (imgalt[0]=="g") {
					$(".shoe_img").css({'top':'-8px','left':'1px'});
				}else{
					$(".shoe_img").removeAttr("style");
				}
				if (lastshoe=="") {
					lastshoe=currentDraggable;
				}
			}			
			if (k<5) {
				pageReset=boy[1];
			}else if(k>4){
				pageReset=boy[0];
			}
		}
	});
	
	//$('#avatar_image img').draggable({
	//	revert: "invalid",
	//	refreshPositions: true,
	//	drag:function(event,ui){
	//		$('.dropped_image img#'+ui.helper[0].id).attr({'src':'','alt':''});
	//		$('.dropped_image img#'+ui.helper[0].id).css({'top':'0','left':'0','border-style':'none'});
	//		//console.log(ui.helper[0].id)
	//		$('#pagethreeImagearea #'+ui.helper[0].id).css({'visibility':'visible','top':'0','left':'0'});
	//		//console.log($('#pagethreeImagearea img#'+ui.helper[0].id).css('visibility'));
	//		//$('#pagethreeImagearea img#'+ui.helper[0].id).animate($('#pagethreeImagearea img#'+ui.helper[0].id).data().originalLocation, "slow");
	//	}
	//});
	
	
	$(".pagethreemoveright").click(function(e){
		var cap_count = $("#pagethreeImagearea .cap:eq(0)").length;
		var dress_count = $("#pagethreeImagearea .dress:eq(0)").length;
		var shoe_count = $("#pagethreeImagearea .shoe:eq(0)").length;
		var flag = 0;
		var formed_img = $(".objectFitmat");
		var a=false,b=false,c=false;
		
		$(".pagethree div.dropped_image img").each(function(i,e){
			console.log(e.src.split('.')[1]+" "+e.src);
			if(e.src!=""){
				if(e.id.split('_')[0]=="dress" && dress_count>0){
					console.log(e.id.split('_')[0]+" "+dress_count)
					flag++;
				}
				if(e.id.split('_')[0]=="cap" && cap_count>0){
					console.log(e.id.split('_')[0]+" "+cap_count)
					flag++;
				}
				if(e.id.split('_')[0]=="shoe" && shoe_count>0){
					console.log(e.id.split('_')[0]+" "+shoe_count)
					flag++;
				}				
				
			}
		});
		
		console.log(cap_count+dress_count+shoe_count+" "+flag);
		if(cap_count+dress_count+shoe_count==flag && flag != 0){
			var clstr ='';
			$('#avatar_image').find('img').each(function(i,e){
				clstr = clstr+''+e.id
			});
			if($('.pagethreeresult div.avatar_image').hasClass(clstr)){
				//$('#popContentTxt').html('Escolha um traje para o personagem');
				$('#popContentTxt').html('Voc&#234; j&#225; vestiu o personagem <br/> dessa maneira. Escolha outra <br/> combina&#231;&#227;o de pe&#231;as.');
				$('.popupButton').html('<a href="javascript:void(0);" title="OK" class="popupokbut popupclose">OK</a>');
				popuphideshow(true)
			}else{
				$('#avatar_image div.avatar_image').addClass(clstr);
				$('.pagethreeresult').append($('#avatar_image').html());
				var addClasGirlshead='',addClasGirlsbody='',addClasGirlsfooter='';
				if ($('#imageid').val()>4) {
					addClasGirlshead='pagtherestalinghead';
					addClasGirlsbody='pagtherestalingbody';
					addClasGirlsfooter='pagtherestalingfooter';
				}
				$('.pagethreeresult').find('div.cap_img').removeClass('dropped_image cap_img ').addClass('cap_imgres '+addClasGirlshead);
				$('.pagethreeresult').find('div.dress_img').removeClass('dropped_image dress_img ').addClass('dress_imgres '+addClasGirlsbody);
				$('.pagethreeresult').find('div.shoe_img').removeClass('dropped_image shoe_img ').addClass('shoe_imgres '+addClasGirlsfooter);
				$('.pagethreeresult .avatar_image').css({'float':'left','margin-left':'-20px'});
				$('.pagethreeresult .avatar_image:eq(0)').css({'float':'left','margin-left':'0px'});
				$('.pagethreeresult .avatar_image:eq(6)').css({'float':'left','margin-left':'0px'});
				$('#avatar_image div.avatar_image').removeClass(clstr);
				flag=0;
			}			
		}
		else{
			var txt=" ";				
			if(cap_count >= 1 && $('.cap_img img').attr('src')==''){				
				txt = "chap&#233;u";
			}else if(dress_count >= 1 && $('.dress_img  img').attr('src')==''){				
				txt = "traje";
			}else if(shoe_count >= 1 && $('.shoe_img  img').attr('src')==''){				
				txt = "cal&#231;ado";
			}
			$('#popContentTxt').html('Escolha um '+txt+' para o personagem.');			
			$('.popupButton').html('<a href="javascript:void(0);" title="OK" class="popupokbut popupclose">OK</a>');
			popuphideshow(true)
		}
		
		if (flag==3){
			flag=0;
		}		
	});
	$('#popUpvalid').on('click','.popupclose',function(){
		popuphideshow(false)
	});
	
	$('.resetButtoninactive').click(function(){
		if($(this).hasClass('resetButton')){
			$('#popContentTxt').html('Voc&#234; perder&#225; tudo o que fez at&#233; <br/>agora. <br/>Deseja continuar?');
			$('.popupButton').html('<a href="javascript:void(0);" title="SIM" class="popupokbut resetthewebpage">SIM</a> <a href="javascript:void(0);" title="NAO" class="popupokbut popupclose">N&#195;O</a>');
			popuphideshow(true);			
		}
	});
	$('#popUpvalid').on('click','.resetthewebpage',function(){
		popuphideshow(false);		
		$('.resetButtoninactive').removeClass('resetButton');
		$('.leftArrowinactive').removeClass('leftArrow').hide();
		if ($('.rightArrowinactive').css('display')=="none") {
			$('.rightArrowinactive').removeClass('rightArrow').show();
		}
		$('.pageoneactivitycontainer div').each(function(){
			$(this).removeAttr("style");
		});
		$('#pagethreeImagearea').html("");
		$('.ui-droppable img').css({'top':'0','left':'0'});
		$('.ui-droppable img').css({'top':'0','left':'0'});
		$("#header_section img").attr({"src":"",'alt':''});
		$("#body_section img").attr({"src":"",'alt':''});
		$("#footer_section img").attr({"src":"",'alt':''});
		$('.pagethreeresult').html("");
		$('.framePhoto').removeAttr("style");
		$('.pageone').show();
		$('.pagetwo').hide();
		$('.pagethree').hide();
		$('#materialarr').val("");
		$('.greaterPick').remove();
		pg=0;		
		mr=[];
		counter=0;;
	});
	
	$('.creditWrapper').click(function(){
		$("#poptitleText_new").html("Cr&#233;ditos");
		$('#popContentTxt_new').html('<b>Design/Ilustra&#231;&#227;o </b><br/>F&#225;bio Belem/ PTE Imagens <br/>Rene Gon&#231;alves Junior / PTE Imagens ');
		$('.popupoverlay').css({'background-color':'#000','opacity':'0.4'});
		popuphideshow_new(true);
	});
	$('#popUpvalid_new').on('click','.popupclose',function(){
		popuphideshow_new(false);
	});
	
	/**************4th page****************/
	$('.ajustBut').click(function(){
		lastpagedrag( $("#pagethreeImagearea img.cap").length, $("#pagethreeImagearea img.dress").length, $("#pagethreeImagearea img.shoe").length);
		$('.leftArrowinactive').hide();
		$('#pagefourImagearea').html($('#pagethreeImagearea').html());		
		$('#pagefourImagearea img').css('visibility','visible').removeClass('pgthree').addClass('pgfour').removeAttr("style");
		$('.four_avatar_image').html($('#avatar_image').html());
		for (var pgthidch = 0; pgthidch < $('#pagethreeImagearea img').length; pgthidch++) {			
			$('#pagefourImagearea img:eq('+pgthidch+')').attr('id','frid_'+$('#pagethreeImagearea img:eq('+pgthidch+')').attr('id'));
			//$('.four_avatar_image').find('img').attr({'src':'','alt':''});
		}
		$('.pagethreeWrap').animate({
			left:'-400px',
			},500,function(){
			$('.pagethree').hide();
			$('.pagefour').show();
			$('.pagefour').animate({
				left:'13px',
				top:'0px'
				},1000);	
		});
		$('.pagethreeshowsection').animate({
			left:'650px',
		},1000, function() {			
			$('.pagethreeTitle').hide(500);
			$("#poptitleText").html("Dica");
			$('#popContentTxt').html('Use a &#225;rvore de possibilidades reconhecer todas as maneiras de vestir o personagem.');
			$('.popupButton').attr({'align':'center','valign':'bottom'});
			$('.popupButton').html('<a href="javascript:void(0);" title="OK" class="popupokbut popupclose">OK</a> <a href="javascript:void(0);" title="Aplicar dica" class="aplicarbutton" onclick="aplicadicr()">Aplicar dica</a>');		
			$('.popupoverlay').css({'background-color':'#fff','opacity':'0.6'});
			popuphideshow(true);
		});
		$('.four_avatar_image').find('div.cap_img').removeClass('cap_img').addClass('cap_imgtw');
		$('.four_avatar_image').find('div.dress_img').removeClass('dress_img').addClass('dress_imgtw');
		$('.four_avatar_image').find('div.shoe_img').removeClass('shoe_img').addClass('shoe_imgtw');
		//$('.four_avatar_image .cap_imgtw img').attr('src','');
		//$('.four_avatar_image .dress_imgtw img').attr('src','');
		//$('.four_avatar_image .shoe_imgtw img').attr('src','');
			var click = {
				x: 0,
				y: 0
			};
		$("#pagefourImagearea img").draggable({								
				refreshPositions: true,
				cursor:'move',
				drag:function(e,ui){
					var zoom = 1.3;
					var original = ui.originalPosition;
					var lpos=((e.clientX - click.x + (original.left)) / zoom);					
					var tpos=((e.clientY - click.y + (original.top)) / zoom);
					ui.position = {
					    left: lpos,
					    top:  tpos
					};
				},
				start: function (event) {
					Positioning.initialize($(this));
					click.x = event.clientX;
					click.y = event.clientY;
				},
				revert : function(socketobj) {
					$(this).data("uiDraggable").originalPosition = {
						top : 0,
						left : 0
					};
					return !socketobj;
				},
				containment: ".pagefourdragmaterial", 
				scroll: false
		});
			
		var Positioning = (function () {
		    return {
			initialize: function (object) {
			    object.data("originalLocation", $(this).originalPosition = { top: 0, left: 0 });
			},
			reset: function (object) {
			    object.data("originalLocation").originalPosition = { top: 0, left: 0 };
			},
		    };
		})();
		$('.divHead').find('img').attr({'src':'./images/members/'+$('#imageid').val()+'.png'});
		$('.placeholderBgimage').each(function(i,e){
			$(this).css('background-image','url(./images/avatar/'+$('#imageid').val()+'.png)');
		});
		
		setTimeout(function() {			
			matchingobjectthreefour();
		}, 50);
		$('.resetButtoninactive').hide();
		
	});
	$('.voltarbut').click(function(){
		$('.leftArrowinactive').show();
		$('.pagethreeWrap').removeAttr("style");
		$('.pagethreeTitle').show();		
		$('.pagefour').removeAttr("style");
		$('.pagethreeshowsection').removeAttr("style");
		$('.pagethree').show();
		$('.pagefour').hide();
		$('.resetButtoninactive').show();
	});
	/*************after append in 4th page**************/
	var lastdresstw="",lastcaptw="",lastshoetw="";
	$(".four_avatar_image").droppable({
			drop: function( event, ui ) {				
				var imgalttw=ui.draggable[0].alt.split('_');
				var img_valuetw = ui.draggable[0].src;
				var drag_valuetw = ui.draggable[0].id.split('_')[1];
				var personid=$('#imageid').val();				
				/*************Revert position**************/
				var currentDraggabletw = $(ui.draggable).attr('id');																		
				
				if(drag_valuetw=="cap"){
					if (lastcaptw != ""){
						$('#pagefourImagearea #'+lastcaptw).css('visibility','visible');	
						$("#pagefourImagearea #"+lastcaptw).animate($("#pagefourImagearea #"+lastcaptw).data().originalLocation, "slow");
						lastcaptw="";
					}
					$(".cap_imgtw img").removeAttr("style");
					$(".cap_imgtw img").attr({'src':img_valuetw,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
					$('#pagefourImagearea #'+ui.draggable[0].id).css('visibility','hidden');
					if (imgalttw[0]=="g") {
						$(".cap_imgtw").css({'top':'-7px','left':'-2px'});
					}
					lastcaptw=currentDraggabletw;
				}else if(drag_valuetw=="dress"){
					if (lastdresstw != ""){						
						$('#pagefourImagearea #'+lastdresstw).css('visibility','visible');	
						$("#pagefourImagearea #" + lastdresstw).animate($("#pagefourImagearea #" + lastdresstw).data().originalLocation, "slow");
						lastdresstw="";
					}
					//console.log(lastdresstw+" "+ui.draggable[0].id);
					$(".dress_imgtw img").removeAttr("style");
					$(".dress_imgtw img").attr({'src':img_valuetw,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
					$('#pagefourImagearea #'+ui.draggable[0].id).css('visibility','hidden');
					if (imgalttw[0]=="g") {
						$(".dress_imgtw").css({'top':'-7px','left':'0px'});
					}
					lastdresstw=currentDraggabletw;
				}else if(drag_valuetw=="shoe"){
					if (lastshoetw != ""){
						$('#pagefourImagearea #'+lastshoetw).css('visibility','visible');	
						$("#pagefourImagearea #" + lastshoetw).animate($("#pagefourImagearea #" + lastshoetw).data().originalLocation, "slow");
						lastshoetw="";
					}
					$(".shoe_imgtw img").removeAttr("style");
					$(".shoe_imgtw img").attr({'src':img_valuetw,'alt':ui.draggable[0].alt,'id':ui.draggable[0].id});
					$('#pagefourImagearea #'+ui.draggable[0].id).css('visibility','hidden');
					if (imgalttw[0]=="g") {
						$(".shoe_imgtw").css({'top':'-7px','left':'0px'});
					}
					lastshoetw=currentDraggabletw;
				}
			}
	});
	
	$('.four_avatar_image .avatar_image img').draggable({
		revert: "invalid",
		refreshPositions: true,
		drag:function(event,ui){
			$('.dropped_image img#'+ui.helper[0].id).attr({'src':'','alt':''});
			$('.dropped_image img#'+ui.helper[0].id).css({'top':'0','left':'0','border-style':'none'});
			$('#pagefourImagearea img#'+ui.helper[0].id).css({'visibility':'visible'});
			$('#pagefourImagearea img#'+ui.helper[0].id).animate($('#pagethreeImagearea img#'+ui.helper[0].id).data().originalLocation, "slow");
		}
	});
	
	$('.pagefourmoveright').click(function(){
		var cap_count = $("#pagefourImagearea .cap:eq(0)").length;
		var dress_count = $("#pagefourImagearea .dress:eq(0)").length;
		var shoe_count = $("#pagefourImagearea .shoe:eq(0)").length;
		var flag = 0;
		var formed_img = $(".objectFitmat");
		var a=false,b=false,c=false;
		
		$(".four_avatar_image div.dropped_image img").each(function(i,e){			
			if(e.src.split('.')[1]!='html'){
				if((e.id.split('_')[1]=="dress" && dress_count>0) || (e.id.split('_')[0]=="dress" && dress_count>0)){					
					flag++;
				}
				if((e.id.split('_')[1]=="cap" && cap_count>0) || (e.id.split('_')[0]=="cap" && cap_count>0)){
					flag++;
				}
				if((e.id.split('_')[1]=="shoe" && shoe_count>0) || (e.id.split('_')[0]=="shoe" && shoe_count>0)){
					flag++;
				}
			}
		});
		if(cap_count+dress_count+shoe_count==flag){			
			var clstr ='';
			$('.four_avatar_image div.avatar_image').find('img').each(function(i,e){
				var splitfrid='';				
				if (e.id.split('_')[0]=="frid") {
					splitfrid +=e.id.split('_')[1]+'_'+e.id.split('_')[2];
				}else{
					splitfrid += e.id;	
				}				
				clstr = clstr+''+splitfrid;
			});
				$('.four_avatar_image div.avatar_image').addClass(clstr);				
				$('.placeholderBgimage').each(function(){
					if($(this).hasClass(clstr)){
						if($(this).html()==""){
							$(this).html($('.four_avatar_image div.avatar_image').html());
							var marginfinthird=0;
							if ($('.pagethreeresult').html()==""){
								marginfinthird='0px';
							}else{
								marginfinthird='-20px';
							}
							var appendthridpage='<div class="avatar_image ui-droppable '+clstr+'" style="background-image: url(./images/avatar/'+$('#imageid').val()+'.png); float: left; margin-left: '+marginfinthird+';">'+$('.four_avatar_image div.avatar_image').html()+'</div>';
							$('.pagethreeresult').append(appendthridpage);
							$('.pagethreeresult #header_section div.dropped_image').removeClass('dropped_image cap_imgtw').addClass('cap_imgres');
							$('.pagethreeresult #body_section div.dropped_image').removeClass('dropped_image dress_imgtw').addClass('dress_imgres');
							$('.pagethreeresult #footer_section div.dropped_image').removeClass('dropped_image shoe_imgtw').addClass('shoe_imgres');
							$('.pagethreeresult .avatar_image:eq(6)').css({'margin-left':'0'});
						}else{
							$('#popContentTxt').html('Voc&#234; j&#225; vestiu o personagem <br/> dessa maneira. Escolha outra <br/> combina&#231;&#227;o de pe&#231;as.');
							$('.popupButton').html('<a href="javascript:void(0);" title="OK" class="popupokbut popupclose">OK</a>');
							popuphideshow(true)
						}
					}
				});
				$('.placeholderBgimage').find('div.dress_imgtw').removeClass('dropped_image dress_imgtw').addClass('dress_imgres');
				$('.placeholderBgimage').find('div.cap_imgtw').removeClass('dropped_image cap_imgtw ').addClass('cap_imgres');
				$('.placeholderBgimage').find('div.shoe_imgtw').removeClass('dropped_image shoe_imgtw').addClass('shoe_imgres');
				
				flag=0;
						
		}else{
			var txt=" ";
			//console.log($('.cap_img img').attr('src'))			
			if(cap_count >= 1 && $('.cap_imgtw img').attr('src')=='')
			{
				//alert(cap_count +" cap")
				txt = "chap&#233;u";
			}
			else if(dress_count >= 1 && $('.dress_imgtw  img').attr('src')=='')
			{
				//alert(cap_count +" dress")
				txt = "traje";
			}
			else if(shoe_count >= 1 && $('.shoe_imgtw  img').attr('src')=='')
			{
				//alert(cap_count +" shoe")
				txt = "cal&#231;ado";
			}
			
			$('#popContentTxt').html('Escolha um '+txt+' para o personagem');
			$('.popupButton').html('<a href="javascript:void(0);" title="OK" class="popupokbut popupclose">OK</a>');
			popuphideshow(true)
		}
		if (flag==3){
			flag=0;
		}
		
	});
	
	//$('.')on('click','.fourthrearrangeimage',function(){
	//});


});

function secondimageset(kp){
	var thu;
	if (kp>=1 && kp<=4) {		
		$('#boymaterials').show();
		$('#girlmaterials').hide();
		thu='b_'+kp;
		
	}else if (kp>=5 && kp<=8) {		
		$('#boymaterials').hide();
		$('#girlmaterials').show();
		thu='g_'+kp;
	}
	$('#imageid').val(kp);
	$('.thumImg img').attr('src','./images/material/'+thu+'.png');
}
function popuphideshow(arg) {
	if (arg) {
		$('.popupoverlay').show();
		$('#popUpvalid').show();
	}else{
		$('.popupoverlay').hide();
		$('#popUpvalid').hide();
	}
}
function popuphideshow_new(arg) {
	if (arg) {
		$('.popupoverlay').show();
		$('#popUpvalid_new').show();
	}else{
		$('.popupoverlay').hide();
		$('#popUpvalid_new').hide();
	}
}
 /*$.getScript("js/tree.js", function(){

   alert("Script loaded and executed.");
   // Here you can use anything you defined in the loaded script
});*/
var dressLineCnt = 0;
function lastpagedrag(cc,dc,sc){
 	$('.main').html("");
 	$('.divCap').html("");
 	$('.divCapline').html("");
 	$('.divDress').html("");
 	$('.divShoes').html("");
 	$('.divComb').html("");
 
 	var inc_item=1;
	var items_cnt=0;
	var cap = cc;
	var dress =dc;
	var shoes =sc;
	var comb = 0;
	var xcaplines=new Array();
	var ycaplines=new Array();
	var thrpgid=$('#pagethreeImagearea img');

            var drar=[],caar=[],shar=[];
	    var drarid=[],caarid=[],sharid=[];
	    
	    for (var kq=0;kq<thrpgid.length;kq++) {
		//console.log(thrpgid[kq].split('_')[1])
		if (thrpgid[kq].id.split('_')[0]=="dress") {
			drarid.push(thrpgid[kq].id)
		}
		if (thrpgid[kq].id.split('_')[0]=="cap") {
			caarid.push(thrpgid[kq].id)
		}
		if (thrpgid[kq].id.split('_')[0]=="shoe") {
			sharid.push(thrpgid[kq].id)
		}
	    }
            //console.log(drarid)  
            if (cap!=0) {
                inc_item=inc_item*cap//code
            }
            if (dress!=0) {
                inc_item=inc_item*dress//code
            }
            if (shoes!=0) {
                inc_item=inc_item*shoes//code
            }
            comb=(cap>0 || dress>0 || shoes>0)?inc_item:0;
            
            // Head Level
            var width = 100;
            drawline="<svg height='10' width='1' style='border:1px red solid;'><line x1='0' y1='0' x2='0' y2='12' style='stroke:rgb(255,102,0);stroke-width:5' /></svg></div>";
            var topblockline=''
            var topblockline="<blockquote class='avatarmanarrow'></blockquote>";
            $('.main').append("<div style='width:"+width+"%;float:left' class='newdiv0'><table cellpadding='0' cellspacing='0' border='0' width='"+width+"%'><tr><td width='"+width+"%' align='center' valign='top'>"+topblockline+"<img id='head1' src='images/head/placeholder.png'/></td></tr></table></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></div>")

            var matid=$('#materialarr').val().split(',');

           for (var matit = 0; matit < matid.length; matit++) {
            		if(matid[matit].split('_')[1]=="dress"){
            			drar.push(matid[matit])
            		}
            		if(matid[matit].split('_')[1]=="cap"){
            			caar.push(matid[matit])
            		}
            		if(matid[matit].split('_')[1]=="shoe"){
            			shar.push(matid[matit])
            		}
            };
            				var ww;
                       		
                       		if(cap>1){
                       			ww=(((width/cap)*cap)-((width/cap)*(cap-(cap-1))))+15;
                       			//$('.divCapline').append("<div class='test' style='width:"+ww+"%;margin:0px auto;border:1px orange solid;background-color:rgb(255,102,0);height:5px;position:relative;'></div>");
                       			var blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
                       			$('.divCapline').append(blockline);
                       			
                       		}else{
                       			$('.divCapline').append("");
                       		}
                       		

            // Cap Level
            if (cap>=1) {
                
                var cwidth = width/cap;                

                for(var c=1;c<=cap;c++){
                           var cwidth = width/cap;
                           var cav;
                           	if(caar[c-1].split('_')[1]=="cap"){
                           		cav=caar[c-1];
                           	}
                          // 	console.log(cav)
                       		
                       		var blockline='';
               	   			//if(dress!=1){
               	   				var dwidth = 100/(dress);
               	   				if(dress>1){	
               	   				blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
               	   				}
               	   				if(shoes>1){	
               	   				blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
               	   				}
               	   				//console.log(blockline);
               	   				//console.log('blockquote'+dwidth+','+(dwidth/dress));
               	   			//}
                            $('.divCap').append("<div style='width:"+cwidth+"%;display1:block;float:left;' class='newdiv1'><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></div><img src='images/material_results/"+cav+".png' alt='"+caarid[c-1]+"'/><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></div>"+blockline+"</td></tr></table></div>");
                          
                    // Dress Level
                    if (dress>=1) {
                       
                        var dwidth = 100/(cap*dress);
                        for(var d=1;d<=dress;d++){
                        		var drv;
                          
                           ///var drvn = $('#pagethreeImagearea img')[(d-1)].id.split('_')[1];                           
                           	if(drar[d-1].split('_')[1]=="dress"){
                           		drv=drar[d-1];
                           	}
                           //  console.log(drv)
                            var ww;
                            //cap=1;
                       		ww=(((dwidth/cap*dress)*(cap*dress))-((width/(cap*dress))*((cap*dress)-((cap*dress)-4))))
                       		//console.log(ww);
                       	   			var blockline='';
                       	   			if(shoes>1){

									blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
									}
   	   								

                                    $('.divDress').append("<div style='width:"+dwidth+"%;height:35px;float:left' class='newdiv2'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+dwidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+drv+".png' alt='"+drarid[d-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table>"+blockline+"</td></tr></table></div></div> ");

                                     var swidth = 100/(cap*shoes*dress);

                                     var cwidth = 100/comb;
                                     
                                     if(shoes>=1){
                                        

                                        
                                        for(var s=1;s<=shoes;s++){

                                        	var shv;                         
				                           	if(shar[s-1].split('_')[1]=="shoe"){
				                           		shv=shar[s-1];
				                           	}
				                           	
				                           	//console.log(shar);


		                       	   			var blockline='';
		                       	   			if(shoes>1){

											//blockline="<blockquote style='background-color:rgb(255,102,0);border:1px orange solid;height:5px;margin:0px 5px;width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
											}
		   	   								//console.log(blockline);
		   	   								//console.log('blockquote'+swidth+','+(swidth/shoes));                                                
                                                 $('.divShoes').append("<div style='width:"+swidth+"%;height:35px;float:left' class='newdiv3'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+swidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+shv+".png'  alt='"+sharid[s-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table>"+blockline+"</td></tr></table></div></div>");
                                                 
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage "+caarid[c-1]+drarid[d-1]+sharid[s-1]+"'>"+innerImageposition()+"</div></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage "+caarid[c-1]+drarid[d-1]+"img_shoe'>"+innerImageposition()+"</div></div>");
                                    }
                        }
                    }else{
                         if(shoes>=1){
                                        for(var s=1;s<=shoes;s++){
                                        	var shv;                         
				                           	if(shar[s-1].split('_')[1]=="shoe"){
				                           		shv=shar[s-1];
				                           	}
				                           	
                                            var swidth = 100/(cap*shoes)
                                            var cwidth = 100/comb;


                                            $('.divShoes').append("<div style='width:"+swidth+"%;height:35px;float:left' class='newdiv3'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+swidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+shv+".png'  alt='"+sharid[s-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");
													//$('.divShoes').append("<div style='width:"+swidth+"%;float:left' class='newdiv3'><div class='shoeimagefourthpage'><img src='images/material_results/"+shv+".png' alt='"+sharid[s-1]+"'/></div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div>");
                                             
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage "+caarid[c-1]+"img_dress"+sharid[s-1]+"'>"+innerImageposition()+"</div></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage "+caarid[c-1]+"img_dressimg_shoe'>"+innerImageposition()+"</div></div>");
                                    }
                    }
			dressLineCnt++;
                }

            }else{
                	if(dress>1){
	           			ww=(((width/cap)*cap)-((width/cap)*(cap-(cap-1))))+15;
	           			if(dress>1){

	           			var blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
	           			$('.divCapline').append(blockline);
	           			}
	           			
           			}else{
	           			$('.divCapline').append("");
           			}

                if (dress>=1) {
                       
                        var dwidth = width/(dress);
                        for(var d=1;d<=dress;d++){
                        	var drv;

                        		if(drar[d-1].split('_')[1]=="dress"){
	                           		drv=drar[d-1];
	                           	}

	                           	var blockline='';

                       	   			if(shoes>1){

									blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
									}
                                     
                                    
                                    $('.divDress').append("<div style='width:"+dwidth+"%;height:35px;float:left' class='newdiv2'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+dwidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+drv+".png'  alt='"+drarid[d-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table>"+blockline+"</td></tr></table></div></div> ");
                                    var swidth = 100/(shoes*dress)
                                     var cwidth = 100/comb;
                                    
                                     
                                     if(shoes>=1){
                                        for(var s=1;s<=shoes;s++){
                                        	var shv;                         
				                           	if(shar[s-1].split('_')[1]=="shoe"){
				                           		shv=shar[s-1];
				                           	}
				                           	//console.log(shar);
                                               $('.divShoes').append("<div style='width:"+swidth+"%;height:35px;float:left' class='newdiv3'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+swidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+shv+".png' alt='"+sharid[s-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");
                                                
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage img_cap"+drarid[d-1]+sharid[s-1]+"'></div></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage img_cap"+drarid[d-1]+"img_shoe'>"+innerImageposition()+"</div></div>");
                                    }
                               
                        }
                    }else{
                        
						if(shoes>1){
                       			ww=(((width/shoes)*shoes)-((width/shoes)*(shoes-(shoes-1))))+15;
                       			var blockline="<blockquote class='seconddrwaline' style='width1:"+((dwidth/dress)*cap)+"%;left1:"+(dwidth/(dress))+"%;'></blockquote>";
                       			$('.divCapline').append(blockline);
                       			
                       		}else{
                       			$('.divCapline').append("");
                       		}

                         var swidth = 100/(shoes);
                                     var cwidth = 100/comb;
                                     
                                     if(shoes>=1){
                                        for(var s=1;s<=shoes;s++){
                                        	var shv;                         
				                           	if(shar[s-1].split('_')[1]=="shoe"){
				                           		shv=shar[s-1];
				                           	}
                                               $('.divShoes').append("<div style='width:"+swidth+"%;height:35px;float:left' class='newdiv3'><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+swidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><div class='shoeimagefourthpage'><img src='images/material_results/"+shv+".png' alt='"+sharid[s-1]+"'/></div><div><table cellpadding='0' cellspacing='0' border='0' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");
                                               $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage img_capimg_dress"+sharid[s-1]+"'>"+innerImageposition()+"</div></div>");
                                        }
                                    }else{
                                       // $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><div class='placeholderBgimage'></div></div>");
                                    }
                }
            }
	    function innerImageposition() {		
		//	var hirval ='<div id="header_section">';
		//	hirval +='<div class=" cap_imghir">';
		//	hirval +='<img src="" alt="" id="hir_cap" width="80">';
		//	hirval +='</div>';
		//	hirval +='</div>';
		//	hirval +='<div id="body_section">';
		//	hirval +='<div class=" dress_imghir">';
		//	hirval +='<img src="" alt="" id="hir_dress" width="80">';
		//	hirval +='</div>';
		//	hirval +='</div>';
		//	hirval +='<div id="footer_section">';
		//	hirval +='<div class=" shoe_imghir">';
		//	hirval +='<img src="" alt="" id="hir_shoe" width="75">';
		//	hirval +='</div>';
		//	hirval +='</div>';
		//return hirval;
		return "";
	    }
	    
 } 

 function matchingobjectthreefour() {
	if ($('.pagethreeresult').html()!="") {
		$('.pagethreeresult .avatar_image').each(function(){
		var sett=this;
		var setJut=$(this).html();
		var setgirlpo=$(this).find('img').attr('alt').split('_')[0];
		console.log(sett.className.split(' ')[2]);
		$('.placeholderBgimage').each(function(i,e){
		  if($(this).hasClass(sett.className.split(' ')[2])){
		    $(this).html(setJut);		    
		    if($(this).find('img').attr('alt').split('_')[0]=="g"){
			$(this).find('.dress_imgres').css({'top':'-7px','left':'0'});
			$(this).find('.cap_imgres').css({'top':'-7px','left':'-2px'});
			$(this).find('.shoe_imgres').css({'top':'-7px','left':'0px'});
		    }
		  }
		});
		});
	}
}
function aplicadicr() {
	var thrpgid=$('#pagethreeImagearea img');
	var divcapimg=$('.divCap img');
	var divdressimg=$('.divDress img');
	var divshoeimg=$('.divShoes img');
	var divplaceholder =$('.placeholderBgimage');
	var drelen=$('#pagefourImagearea .dress').length;
	var caplen=$('#pagefourImagearea .cap').length;
	var shoelen=$('#pagefourImagearea .shoe').length;
	if (caplen>0) {
		divcapimg.each(function(i,e){
			var capname={'alt':e.alt,'src':e.src};
			if (drelen>0) {
				divdressimg.each(function(i,e){
					var dressname={'alt':e.alt,'src':e.src};					
					if (shoelen>0) {					
					divshoeimg.each(function(i,e){
						var shoename={'alt':e.alt,'src':e.src};
						var caplen=capname['alt']+dressname['alt']+shoename['alt'];
						divplaceholder.each(function(){
							if($(this).hasClass(caplen)){
								$(this).html(innerImageposition(capname['src'].replace(/material_results/gi, "material"),dressname['src'].replace(/material_results/gi, "material"),shoename['src'].replace(/material_results/gi, "material")));	
							}	
						});
						
					});
					}else{
						var caplen=capname['alt']+dressname['alt']+'img_shoe';
						divplaceholder.each(function(){
							if($(this).hasClass(caplen)){
								$(this).html(innerImageposition(capname['src'].replace(/material_results/gi, "material"),dressname['src'].replace(/material_results/gi, "material"),''));	
							}	
						});	
					}
				});
			}else{
				if (shoelen>0) {
					divcapimg.each(function(i,e){
						var capname={'alt':e.alt,'src':e.src};
						divshoeimg.each(function(i,e){
							var shoename={'alt':e.alt,'src':e.src};							
							var caplen=capname['alt']+'img_dress'+shoename['alt'];
							divplaceholder.each(function(){
								if($(this).hasClass(caplen)){
									$(this).html(innerImageposition(capname['src'].replace(/material_results/gi, "material"),'',shoename['src'].replace(/material_results/gi, "material")));	
								}	
							});
							
						});
					});
				}else{
					divcapimg.each(function(i,e){
						var capname={'alt':e.alt,'src':e.src};
						var caplen=capname['alt']+'img_dress'+'img_shoe';
						divplaceholder.each(function(){
							if($(this).hasClass(caplen)){
								$(this).html(innerImageposition(capname['src'].replace(/material_results/gi, "material"),'',''));	
							}	
						});
					});
				}
			}
		});
	}else{
		if (drelen>0) {
			divdressimg.each(function(i,e){
				var dressname={'alt':e.alt,'src':e.src};
				if (shoelen>0) {
					divshoeimg.each(function(i,e){
						var shoename={'alt':e.alt,'src':e.src};
						var caplen='img_cap'+dressname['alt']+shoename['alt'];
						//console.log(caplen)
						divplaceholder.each(function(){
							if($(this).hasClass(caplen)){
								console.log(caplen)
								$(this).html(innerImageposition('',dressname['src'].replace(/material_results/gi, "material"),shoename['src'].replace(/material_results/gi, "material")));	
							}	
						});
						
					});
				}else{
					var caplen='img_cap'+dressname['alt']+'img_shoe';
					divplaceholder.each(function(){
						if($(this).hasClass(caplen)){
							$(this).html(innerImageposition('',dressname['src'].replace(/material_results/gi, "material"),''));	
						}	
					});
				}
			});
		}else{
			if (shoelen>0) {
				divshoeimg.each(function(i,e){
					var shoename={'alt':e.alt,'src':e.src};
					var caplen='img_cap'+'img_dress'+shoename['alt'];
					divplaceholder.each(function(){
						if($(this).hasClass(caplen)){
							$(this).html(innerImageposition('','',shoename['src'].replace(/material_results/gi, "material")));	
						}	
					});
					
				});
			}
		}
	}
	function innerImageposition(csr,dsr,ssr) {
		var opc=1,dopc=1,sopc=1;
		if(csr=="" ){
			opc = 0;
		}else if(dsr=="") {
			dopc = 0;
		}else if(ssr=="") {
			sopc = 0;
		} 
		var addClasGirlshead='',addClasGirlsbody='',addClasGirlsfooter='';
			if ($('#imageid').val()>4) {
				addClasGirlshead='pagfrrestalinghead';
				addClasGirlsbody='pagfrrestalingbody';
				addClasGirlsfooter='pagfrrestalingfooter';
			}
			var hirval ='<div id="header_section">';
			hirval +='<div class="cap_imgres '+addClasGirlshead+'">';
			hirval +='<img src="'+csr+'" style="border-style:none;opacity:'+opc+'" alt="" id="img_cap" width="0">';
			hirval +='</div>';
			hirval +='</div>';
			hirval +='<div id="body_section">';
			hirval +='<div class="dress_imgres '+addClasGirlsbody+'">';
			hirval +='<img src="'+dsr+'" alt="" style="border-style:none;opacity:'+dopc+'" id="img_dress" width="0">';
			hirval +='</div>';
			hirval +='</div>';
			hirval +='<div id="footer_section">';
			hirval +='<div class="shoe_imgres '+addClasGirlsfooter+'">';
			hirval +='<img src="'+ssr+'" alt="" id="img_shoe" width="0" style="border-style:none;opacity:'+sopc+'">';
			hirval +='</div>';
			hirval +='</div>';
		return hirval;		
	}
	popuphideshow(false)
}