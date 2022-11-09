//$(document).ready(function(){
//    alert("Listo");
//});

$("#from_categorias").submit(function (){
     var nombre = $("#categorias").val();
    
     if($.trim(nombre)===''){
            alert("debe completar la categoria \n Maximiliano Montivero");
     return false;
    }
   return true;
});