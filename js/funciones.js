/*
 * bymarcel
 * version 20032021
 * archivo de funciones generales 
 *
 */

$(document).ready(function(){
	setTimeout(function(){
		$("#title").fadeIn();
	},1000);
})

function enviarformulario(){
	
	$("#loader").fadeIn();

	var url = "ajax/enviarFormulario.php";
	
	var email = $("#email").val();
	var pass  = $("#pass").val();
	var string = "&email="+email+"&pass="+pass;
    
    $.ajax({
      type: 'POST',
      url: url,
      data: string,
      error: function (res){
        alert("Error");
      },
      beforeSend: function(){

      },
      success: function(res){
        $("#loader").fadeOut();
        $(".resultado").show().html("<div class='result-text'>"+res+"</div>");
      }
    })
}