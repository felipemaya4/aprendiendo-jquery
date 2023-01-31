$(document).ready(function () {
    let caja = $('#caja');
    let mostrar = $('#mostrar');
    let ocultar = $('#ocultar');
    let todoEnUno = $('#todoenuno');
    let animar = $('#animar');
    
    caja.hide();
    ocultar.hide();
    mostrar.hide();


    mostrar.click(function () {
        $(this).hide();
        ocultar.show();
        //caja.show('fast');
        caja.fadeIn('fast');// fadeIn, fadeOut, slideUp, slideDown
    })

    ocultar.click(function () {
        $(this).hide();//con este metodo oculta un elemento visible
        mostrar.show();// muestra un elemento que esté oculto
        //caja.hide('slow');// con este metodo de jquery podemos ocultar un elemento con efecto de reduccion del cuandro de la pagina y ademas asignarle una velocidad a la transision fast,slow, normal
        caja.fadeOut('slow') // para ocultar elementos pero con efecto de desvanecimiento
        caja.animate({              // con .animate podemos darle estilos de animacion personalizado a los elementos de la pagina los datos de estilo los recibe en formato JSON
            marginLeft: '0px',
            fontSize: '10px',       // para volver a la poscicion inicail de la etiqueta debemos invertir los etilos y utilizar otros de los metodos de transicion que existen
            Height:'0px'    
        },'slow');
    })

    todoEnUno.click(function () {
        caja.toggle('fast', function () {
            caja.animate({              // con .animate podemos darle estilos de animacion personalizado a los elementos de la pagina los datos de estilo los recibe en formato JSON
                marginLeft: '400px',
                fontSize: '40px',       // para volver a la poscicion inicail de la etiqueta debemos invertir los etilos y utilizar otros de los metodos de transicion que existen
                Height:'110px'    
            },'slow');
        }); // tambien existe slideToggle, fadeToogle entre otros// con toggle podemos hacer aparecer y desaparecer un elemento con solo una linea de codigo
        todoEnUno.text() == "Mostrar" ? todoEnUno.text('Ocultar') : todoEnUno.text('Mostrar'); //con el operador ternario cambiamos el contenido del texto qye muestra el boton para que identifique que opcion es la que se puede hacer (mostrar, ocultar)
        
    })

    animar.click(function () {
        caja.animate({              // con .animate podemos darle estilos de animacion personalizado a los elementos de la pagina los datos de estilo los recibe en formato JSON
            marginLeft: '400px',
            fontSize: '40px',       // para volver a la poscicion inicail de la etiqueta debemos invertir los etilos y utilizar otros de los metodos de transicion que existen
            Height:'110px'    
        },'slow');
    })


        // pendiente realiza la animacion del retorno del elemento
})