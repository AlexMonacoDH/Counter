import React from "react";
import "./style.css";

class Contador extends React.Component{

    state = {
        contador: 0
    }

    adicionar=()=>{
        let aumentarContador = this.state.contador;
        aumentarContador++;
        this.setState({contador: aumentarContador});
    }

    diminuir=()=>{
        let diminuirContador = this.state.contador;
        diminuirContador--;
        this.setState({contador: diminuirContador});
    }

    zerar=()=>{
        this.setState({contador: 0});
    }

    render(){
        return (
            <>
                <h1>Contador: {this.state.contador}</h1>
                <div>
                    <button className="zerar" onClick={this.zerar}>Zerar</button>
                    <button className="adicionar" onClick={this.adicionar}>Adicionar</button>
                    <button className="diminuir" onClick={this.diminuir}>Diminuir</button>
                </div>
            </>
        );
    }
}

export default Contador;