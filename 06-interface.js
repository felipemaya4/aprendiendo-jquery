$(document).ready(function () {
    // con este metodo de jquery ui podemos arrastrar los elementos a traves de la pantalla 
    $(".elemento").draggable();
    

    // redimensionar con este metodo podemos redimensionar los elementos
    
    $(".elemento").resizable(); // todos los qu etnegan esta clase se pueden redimensionar

    // seleccionar y ordenar elementos con selectable

    $(".lista-sortable").sortable({ // este metodo permite reodenar el orden de una lista 
        update: function (event, ui) {// con este codigo nos permite saber cada vez que se hace una cambio de la lista
            console.log("ha cambiado la lista");
        }
    })

    // $(".lista-seleccionada").selectable(); // se selecciona el elemento que contiene la lista ul en este caso
    
   // dropapble
   $(".elemento-movido").draggable();
   $("#area").droppable({ // podemos con este metodo insertar demanera grafica internamente un elemento draggable
    drop: function () {
        console.log("has soltado un elenebto dentro del area  Dropablee");
    }
   });

   //efectos

   $("#mostrar").click(function(){ // capturamos el evento y le cambiamoslas propiedades de la class .caja-efectos para wue el div aperezca en pantalla 

    $(".caja-efectos").toggle("blind",1000);// aca escogemos que tipo de transicion grafica parahacer aparecer y desaparecer el elemento con esa clasess
    
   })

   //tooltip

   $(document).tooltip() // este metod onos permite mostrar el atributo title de los elementos de la pagina con un formta  configurable

   //dialog
   
   $("#lanzaDialog").click(function () {
    $("#popup").dialog() // con este metodo podemos mostrar cuadro de dialogo en la pagina, en este caso esta configurado para dalir cuando suceda el ecento click en el boton con id lanzaDialog
   })
   // date picker

   $("#calendario").datepicker() // metodo para poder mostrar caledarios para que el usurio ingrese su fecha 

   //tabs o pestañas en la pagina 

   $("#pestanas").tabs(); // si necesitamos crear pestañas con este metodo lo podemos hacer 

})