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
})