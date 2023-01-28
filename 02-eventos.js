$(document).ready(function(){
    
    // MouserOver y MouseOut
    let caja = $('#caja');

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green")
    })
})