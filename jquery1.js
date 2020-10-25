
function mostrar(data) {
    alert(data);
}

$(document).ready(function () {
    //Selectores: retornan un objeto jquery
    //alert($("#root"));
    //este objeto es un arreglo de objetosDOM
    //alert($("#root")[0]);

    //html() reemplaza el contenido con el texto html que pases
    //$("#root").html("<h1>Hola</h1>");

    //añadimos el evento onclick al boton, pasando como parametro una funcion
    //$("#btn").click(saludar);

    $.get("Servlet1",mostrar);
})
