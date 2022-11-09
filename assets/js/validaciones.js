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

$("#from_productos").submit(function() {
    var producto = $("pNombre").val();
    var descripcion = $("#descripcion").val();
    var categoria = $("#categoria").val ();
    var precio = $("#precio").val ();
    
    var errores = [];
    
    if($.trim(producto)===''){
            errores.push("debe completar el Nombre del producto");
            
    if($.trim(categoria)==='')
            errores.push("debe completar la Categoria");
            
    if($.trim(descripcion)==='')
            errores.push("debe completar la descripcion");
            
    if($.trim(precio)==='')
            errores.push("debe completar el precio");
            
    if (errores.length > 0)
        errores.push("Maximiliano Montivero");
        alert(errores.join("\n"));
        return false;
    }    
        return true;
    
     
    
    
            
    
    
    });