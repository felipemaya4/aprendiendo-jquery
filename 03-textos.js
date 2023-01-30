
function reloadLinks() {
    $('a').each(function () {
        let aElement = $(this);
        let enlace = aElement.attr("href"); //.ttr  capturamos el valor del atributo href de cada elelemto <a>
        aElement.text(enlace)// insertamos el valor de enlace en la etiqueta a 
        aElement.attr('target','blank'); // insertamos este nuevo atributo  para abirir los enlaces en una pestaña nueva
    });
};

$(document).ready(function () {

    reloadLinks();

    $('#addButton').removeAttr("disabled")
    .click(function () { // capturamos el evento click del button
        $('#list').prepend(`<li><a href="${$('#addLink').val()}"></a></li>`);//con .val capturamos el value del elemento input y con .append insertamos un nuevo elemento a la lista con los datos insertados por pantalla
        $('#addLink').val('') // despues de crea el item el campo de texto lo vaciamos con esta sentencia
        reloadLinks();
        //.append lo añade al final como el ultimo hijo de ese elemento
        //.prepend lo añade al principio como hijo
        //before lo aññade antes del elemento "afuera y opor encima de la lista por ejemplo"
        //after al final del elemento mencionado
    })

    

   
});


