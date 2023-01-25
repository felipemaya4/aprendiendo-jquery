
$(document).ready(function () {
    //selector de id #
    const rojo = $("#rojo"); // lo podemos guradar en una variable pero no es necesario 
    let cssRojo = rojo.css("background", "red").css("color","white"); // podemos crear una referencia de la variable principal y modificar sus valores 
    
    $("#amarillo").css("background", "yellow")
                    .css("color","red"); // aqui hacemos lo mismo pero sin necesidad de almacenar en una variable
    $("#verde").css("background", "green")
                    .css("color","white");

    // Selectores de clase .
    let mi_clase = $(".zebra");

    console.log(mi_clase[1]);// en caso de tenr varios tributos con la clase entonces que hace seleccion de cada elemento como en un array,
    //pero si lo que quieres es para manipularlo entonces con el metodo de jquery mi_clase.eq(2) lo puedo sellecionar con todos sus propiedades
    console.log(mi_clase.eq(2));// este .eq() permite seleccionar un elemento jquery en el que podemos modificar sus atributos

    $(".sin_borde").click(function() {
        console.log("click dado");
    })

    // selectores de etiqueta <>
    let parrafos = $('p').css('cursor', 'pointer');
    // en el siguiente bloque de codigo que usa el evento click se utiliza para hacer un toggle con las etiquetas p  para poner o quitar la clase zebra y grande 
    parrafos.click(function() {
        let elemento = $(this); // inicializamos una variable this para evitar cargar el DOM 
        if(!elemento.hasClass('zebra')){
            elemento.addClass('zebra')
                    .addClass('grande');
        }else{
            elemento.removeClass('zebra')
                    .removeClass('grande');
        }
    });
    //selector por atributo
    $('[title="Google"]').css('background', 'skyblue'); // con este ejemplo podemos observar como selecionar etiquetas segun los atributos que tengan por ejemplo una etiqueta <a> con el atributo title="Google"
    $('[title="Facebook"]').css('background', 'greenyellow');// mismo ejemplo pero con title="facebook"
})