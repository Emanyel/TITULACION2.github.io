$(document).ready(function(){
	// CONTAMOS CUANTOS ITEM EXISTEN (TARJETAS)
	var items =  document.getElementsByClassName("item").length;
	console.log(items);


		//ACCCION PARA EL BOTON EDITAR
	$(document).on('click', '.button1', function(){
		window.open('../html/edicion.html', '_blank');
	});
		//ACCCION PARA EL BOTON ELIMINAR
	$(document).on('click', '.button2', function(){
		Swal.fire({
			type:'warning',
			title: 'Estas seguro?',
			text: 'Si eliminas un evento no podras deshacer esta acción.',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, hazlo!'
		  }).then((result) => {
			if (result.value) {
				borrarEvento();
			  Swal.fire(
				'Borrado!',
				'El evento ha sido borrado',
				'success'
			  )
			}
		})
	});
		//ACCION PARA EL BOTON CREAR UN NUEVO EVENTO
	$(document).on('click', '.newEvent', function(){
			
				$('.nuevoEvento').replaceWith('<div class="entradas">'+
				'<h4>Parte delantera de la tarjeta</h4>'+
				'<form id="form" action="agregarEvento.php" method="GET">'+
				'<div class="form-group"><input placeholder="Escribe el nombre del evento" required/></div>'+
				'<div class="form-group"><input placeholder="Escribe la dirección" required/></div>'+
				'<div class="form-group"><input type="date" placeholder="Selecciona la fecha" required/></div>'+
				'<button type="submit" class="aceptar" id="boton">Aceptar</button>'+
				'</form>'+
				'<button class="cancelar" id="boton">Cancelar</button>'+
				'</div>');
	});
		//ACCION PARA ACEPTAR LA INFO DEL NUEVO EVENTO
	$(document).on('click', '.aceptar', function(){
		 
	});
		//ACCION PARA DECLINAR LA INFO DEL NUEVO EVENTO
	$(document).on('click', '.cancelar', function(){
		Swal.fire({
			type:'warning',
			title: 'Estas seguro?',
			text: 'No se guardará ningun dato ingresado',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, hazlo!'
		  }).then((result) => {
			if (result.value) {
				agregarButtonEvento();
			  Swal.fire(
				'Hecho!',
				'Aqui no pasó nada',
				'success'
			  )
			}
		})
	});

	//FUNCIONES DE AYUDA
	function agregarButtonEvento(){
		$(".entradas").replaceWith("<div class='nuevoEvento'><button id='boton' class='newEvent'>Agregar evento</button></div>");
	}

	function borrarEvento(){
		
	}

});