
$(function () {
    //selector de id
    const rojo = $("#rojo"); // lo podemos guradar en una variable pero no es necesario 
    let cssRojo = rojo.css("background", "red").css("color","white"); // podemos crear una referencia de la variable principal y modificar sus valores 
    
    $("#amarillo").css("background", "yellow").css("color","red"); // aqui hacemos lo mismo pero sin necesidad de almacenar en una variable
    $("#verde").css("background", "green").css("color","white");
})