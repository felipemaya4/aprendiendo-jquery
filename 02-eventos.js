//const { event } = require("jquery");

$(document).ready(function(){
    
    // MouserOver y MouseOut con este ejercicio podemos observar como podemos utilizar los eventos de mouseOver y mouseOut con jquery
    let caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green")
    })
    */
    // Hover forma mas sencilla de utilizar los eventos anteriores en uno 

    function fondoRojo() {
        $(this).css("background","red");
    }

    function fondoVerde() {
        $(this).css("background","green");
    }

    //hover
    caja.hover(fondoRojo,fondoVerde);

    //evento click y dobleclick
    caja.click(function () {
        $(this).css("background","blue").css("color", "white");
    })

    caja.dblclick(function () {
        $(this).css("background","pink").css("color", "yellow");
    })

    //evento focus blur

    let inputNombre = $('#nombre');
    let datos = $('#datos')

    inputNombre.focus(function () { // focus cuando estas en el elemento
        $(this).css("border", "5px solid green");
    });

    inputNombre.blur(function () { // cuando sales del elemento y escojes otro
        $(this).css("border", "5px solid red");
        let value = $(this).val(); // captura el valor de la eqtiqueta
        datos.text(value) // con .text() podemos insertar datos enlos elementos
        .show() // muestra un elemento que esta invisile "none"
        

    });

    //mousedown mouseup

    datos.mousedown(function () { // esqcuha el evento de presionar el click izquierdo y realiza una accion
        $(this).css("background","greenyellow");
    });

    datos.mouseup(function () { // esqcuha el evento de soltar el click iz y realiza una accion
        $(this).css("background","#ccc");

    });
    
    // mousemove se puede capturar las coordenadas del mouse
    let sigueme = $("#sigueme"); 
    $(document).mousemove(function () {
        console.log("x: ",event.clientX," y: ", event.clientY);
        $('body').css("cursor", "none"); // podemos cultar el cursor y que la circunferencia funcione como cursor
        sigueme.css("left", event.clientX) // le asignamos la ubicacion al elemento sigueme
               .css("top", event.clientY);
    })
    
})