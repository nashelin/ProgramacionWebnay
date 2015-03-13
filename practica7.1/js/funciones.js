$(document).ready(
	function(){
        var mensaje='GANASTE FELICIDADES'
		var nuevacarta;
		var cont = 1;
		var numClics = 0;
		setInterval(
			function(){
				//console.log('Hola');
				//console.log(Math.round(Math.random()*10));
				nuevacarta = 'img/loteria-'+cont+'.jpg';
				$('#cartaMaestra').attr('src',nuevacarta);
				cont ++;

				if (cont > 52) {
					cont = 1;
				};

			},2000
		);

		/*$('#carta'+1).attr('src',nuevacarta);*/



        
		$('.carta').click(
			function(){
				ganador='Img/ganado';
				 $(this).animate({height:'150px'},2000)
				 $(this).css("opacity", 0.5);
                 numClics++
				if(numClics>8)
					
						/*$('#ganador').attr('src',ganador);*/
					alert('GANASTE FELICIDADES');
					



			}



		);

	}
);