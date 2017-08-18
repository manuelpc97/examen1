

function getData(){
	var nombre = $('#nombre').val();
	var marca = $('#marca').val();
	var color = $('#color').val();
	var talla = $('#talla').val();
	var tipo = $('#tipo').val();
	var estampado = $('#estampado').val();
	var genero = $('#genero').val();
	var precio = $('#precio').val();
	var imagen;
	var calcetin = {nombre: nombre,marca: marca, color:color,talla:talla,tipo:tipo,estampado:estampado,
				genero:genero,precio:precio};
	localStorage.size = parseInt(localStorage.getItem("size")) + 1;
	localStorage.setItem("Calcetin" + localStorage.size,JSON.stringify(calcetin));
	console.log("Size: " + localStorage.size);
	console.log("Size2: " + localStorage.getItem("Calcetin" + localStorage.size));
}