
$(document).ready(function(){

	//alert('Hola desde jquery');

	$('h1').hide('slow');
	$('h1').show('fast');
	$('h1').click(function(){
		$(this).hide('fast');
		$('#consola').html($(this).css('fontSize'));
		if($(this).css('fontSize')='50px')
		{
			$(this).css('fontSize','32px');
		}else {
			$(this).css('fontSize','50px');
		}
		$(this).show('fast');
		});

	

	$('#btn2').click(function(){
$('#img2').attr('src',"Img/1.jpg");
	});
	
});