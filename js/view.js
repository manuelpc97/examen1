$(document).ready(function(){
	for(let i = 1; i <= parseInt(localStorage.getItem("size")); i++){
		console.log(i);
		$('#lista').append("<div class = \"item\"> " + 
			"<img id = \" imagen" + i + "\" src = \"../img/jon.png\" onclick = \" modificar()\">"+
			JSON.parse(localStorage.getItem("Calcetin" + i)).nombre + 
			"</div>");
	} 
});