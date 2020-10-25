

//Componente Simple
class Tag extends React.Component{
    render()
    {
        return(
            <h1>Hola mundo</h1>
        );
    }
};
//Componente con propiedades (props)
class TagProps extends React.Component{
    render()
    {
        let name = this.props.name;
        return(
            <h1>Hola {name}</h1>
        );
    }
}
//Componente para agregar contenido a una lista
class Item extends React.Component{
    remove = (e) => {
        this.props.onClick(e);
    }
    saludo = (msj) => {
        alert(msj);
    }
    render()
    {
        return(
            <li>
                {this.props.id},nombre: {this.props.name},puntos: {this.props.puntos}
                <button id={this.props.id} onClick={this.remove}>X</button>
            </li>
        );
    }
};

class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            lista: this.props.lista,
            i: 1
        };
    }
    add = () => {
        var name = $("#name");
        var puntos = $("#puntos");
        var ndato = {
                nombre: name.val(),
                puntos: puntos.val()
        };
        name.val("");
        puntos.val("");

        this.state.lista.push(ndato);
        this.setState(function (prevState) {
            return{
                i: prevState.i++
            }
        });

        /*
        this.setState({
            lista: [...this.state.lista,ndato]
        });*/
    }
    remove = (e) => {
        this.state.lista.splice(e.target.id-1,1);
        this.setState(function (prevState) {
            return{
                i: prevState.i--
            }
        });
    }
    render()
    {
        return(
            <div>
                <h2>{this.props.titulo}</h2>
                Nombre: <input id="name" type="text" name="name"/><br/>
                Puntos: <input id="puntos" type="text" name="puntos"/><br/>
                <input type="button" value="agregar" onClick={this.add}/><br/>
                Lista: {this.state.lista.length}<br/>
                <ul>
                    {
                        this.state.lista.map((item, i) => {
                            return(
                                <Item
                                    id={i+1}
                                    name={item.nombre}
                                    puntos={item.puntos}
                                    onClick={this.remove}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
};
