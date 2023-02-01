$(document).ready(function () {
    // load - peticiones ajax
    //$('#datos').load("https://reqres.in/api/users?page=1/") // con este metodo podemos cargar toda el contenido de una pagina en un contenedor por ejemplo

    // Get y Post Methods

    let cajaDatos = $('#datos');

    $.get('https://reqres.in/api/users',{page:1}, function (response) { // utilizamos get para hacer peticiones asincronas y luego manipular la informacion para ser mostrada en la pagina
    // este metodo recibe 3 criterios (url,dataquery,succes) url: la url donde se va a hacer la peticion, dataquery: datos adisionales para hacer la consulta en formato json, en este caso se consultó una pagina determinanda {pagina: 2}, succes: en este caso una funcion para manipular los datos obtenido en caso d ser exitosa la consulta    
        let users = response.data;
        users.forEach(element => {
            cajaDatos.append(`<p>name: ${element.first_name}, lastname: ${element.last_name} </p>`) // con esta linea insertamos en el elemento div #datos, un elemento p con los nombres y apellidos de la lista que fue recibida de la peticion 
        });
    });

    //post 

    $("#form1").submit(function (e) {
        e.preventDefault(); // se captura el evento del formulario y se detiene
        
        let user = {
            name: $('input[id="name"]').val(), // se obtiene los datos de los campo de texto
            web: $('input[id="web"]').val()
        }
        console.log('datos a enviar',user);
        /*
        //  (      url,              JSON, success callback)
        $.post($(this).attr("action"),user, response =>{ // en envian los datos por el metodo POST y se espera la respuesta
            console.log('recibido',response);
            $('#response').text(`Nombre: ${response.name} Web: ${response.web}`);// insertamos el dato
        }).done(function () { // en salo de no tener nigun inconveniete la peticion este metodo nos puede indicar su validez
            alert("datos ingresado con exito");
            
        })
        */
        $.ajax({            // con el metodo ajax de jquery podemos configurar los datos de lapeticion como un JSON 
            type: 'POST',           // el tipo de solicitud
            url: $(this).attr("action"),            // url de api
            data: user,             // los datos a enviar como objeto 
            beforeSend: function () {           // accion a realizar justo cuando empieza la peticion
                console.log('enviando usuario...');
            },
            success: function (response) {          // si fue efectiva la operacion la accion a realizar
                console.log("datos enviados con exito", response);
                $('#response').text(`Nombre: ${response.name} Web: ${response.web}`);
            },
            error: function (err) {                 // en caso de error la accion a realizar
                console.log("ha ocurrido un error", err);
            },
            timeout: 1000           // se le determina tiempo de espera a la respuesta 

        })
        return false;
    })

})