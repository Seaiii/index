// JavaScript Document


$("#gw").mouseover(function(){
  $('#dw').slideDown();
  $('#gw').css("border-bottom","0px");
  })
$("#dw").mouseleave(function(){
  $('#dw').hide();
  $('#gw').css("border-bottom","1px #3FF solid");
  })
$('#nav').children("li").mouseover(function(){
	$(this).addClass('active')
	})
$('#nav').children("li").mouseout(function(){
	$(this).removeClass('active')
	})
$('.circle2').click(function(){
	$('.circle2').css("background","black")
	$('.circle1').css("background","red")
	$('#z2').show();
	$('#z1').hide();
	})
$('.circle1').click(function(){
	$('.circle1').css("background","black")
	$('.circle2').css("background","red")
	$('#z1').show();
	$('#z2').hide();
	})
$('.a').hover(function(){
	$(".ta",this).stop().animate({width:'160px',height:'170px'},'slow');},
	function(){
	$(".ta",this).stop().animate({width:'140px',
		height:'150px'},'slow');});
$('.listimg').hover(function(){
	$(".summary",this).stop().animate({top:'310px'},{queue:false,duration:180});},
	function(){
	$(".summary",this).stop().animate({top:'365px'},{queue:false,duration:180});});
$('.q').hover(function(){
	$('.qa',this).stop().animate({width:'99%'},'0.1');
	$('.q11',this).css("opacity","0.8")},
	function(){
	$('.qa',this).stop().animate({width:'0%'},'0.1');
	$('.q11',this).css("opacity","1")
	})
$('.qbb').hover(function(){
	$('.qb',this).css('border','3px solid #FF0')
	$('.qb3',this).css('display','block')
	$('.qb3',this).stop().animate({top:'222px'},{queue:false,duration:180})},
	function(){
	$('.qb',this).css('border','3px solid #0FF')
	$('.qb3',this).stop().animate({top:'252px'},{queue:false,duration:180})
	})
function yz(obj){
	if(obj.id=='yhm'){
		var a = document.getElementById('yhm').value;
		var szMsg="[/[@#\$%\^&\*]+/g ]";
		for(i=1;i<szMsg.length+1;i++){
          if(a.indexOf(szMsg.substring(i-1,i))>-1){
			  $('.yhm').html('请勿输入非法字符');
			  return false;
			  }}
		if (obj.value== false)  {
			 $('.yhm').html('请输入用户名');}
		if(obj.value.length<=4){
			 $('.yhm').html('输入长度过短');
			}
		if(obj.value.length>=5){
			 $('.yhm').html('可以使用');
			 $('.yhm').css('color','green')
			}}
	if(obj.id=='password'){  
			if(obj.value.length==0){
			$('.password').html('请输入密码')
			return
			}
		if(obj.value.length<5){
			 $('.password').html('输入长度过短');
			}
		if(obj.value.length>5){
			 $('.password').html('可以使用');
			 $('.password').css('color','green')
			}}
	if(obj.id=='qrmm'){
		var passwd = document.getElementById('password').value;
		var qrmm = document.getElementById("qrmm").value;	
		if(qrmm.length==0){
			$('.qrmm').html('请输入密码')
			return
			}
		 if(passwd == qrmm){
			 $('.qrmm').html('可以使用')
			 $('.qrmm').css('color','green')
			 }
		 if(passwd != qrmm){
			 $('.qrmm').html('确认密码不相同') 
			 }
	}
	if(obj.id=='sj'){
		var sjj = document.getElementById('sj').value;
		if(!(/^1[34578]\d{9}$/.test(sjj))){ 
			 $('.sj').html('手机号错误');
		}
		else{
			 $('.sj').html('输入正确');
			 $('.sj').css('color','green')
			}}

	if(obj.id=='sfz'){
		var sf = document.getElementById('sfz').value;
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
  		 if(reg.test(sf) === false)  {
			 $('.sfz').html('身份证不合法')
			 }
			 else{
				 $('.sfz').html('输入正确')
				 $('.sfz').css('color','green')
				 }

}
	}
$('#zhi').blur(function(){
		var a=document.getElementById('zhi').value;
		if(a<1){
			document.getElementById('qz').innerHTML=('￥88');
			return;
			}
		document.getElementById('qz').innerHTML=('￥'+a*88);
	})
$('.jia').click(function(){
	var a=document.getElementById('zhi').value;
	document.getElementById('zhi').value++;
	document.getElementById('qz').innerHTML=('￥'+(++a)*88);
	})
$('.jian').click(function(){
	var a=document.getElementById('zhi').value;
	if(a<2){
		return;
		}
	document.getElementById('zhi').value--;
	document.getElementById('qz').innerHTML=('￥'+(--a)*88);
	})
$('.zzz').click(function(){
		$('.zzz').css('border-bottom','4px solid #0C3')
		$('.zzz1').css('border-bottom','0px solid #0C3')
		$('.jlz').css('display','block')
		$('.xq').css('display','none')
		
	})
$('.zzz1').click(function(){
		$('.zzz1').css('border-bottom','4px solid #0C3')
		$('.zzz').css('border-bottom','0px solid #0C3')
		$('.xq').css('display','block')
		$('.jlz').css('display','none')
	})
