
//--Componente simple
//ReactDOM.render(<Tag/>, document.getElementById('root'));
//--Componente con propiedades (props)

var datos = [];
var dato = {
    nombre: "Gustavo", puntos: 10
};
datos.push(dato);

console.log(datos);
var titulo = "Lista";

ReactDOM.render(<App titulo={titulo} lista={datos}/>, document.getElementById('root'));

$("#texto").load("datos.html");
/*
$(document).ready(function()
{
    ReactDOM.render(<App titulo={titulo} lista={datos}/>, $("#root")[0]);
});*/
