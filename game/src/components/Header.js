import React, { Component } from 'react';
import '../assets/Header.css'

 class Header extends Component {
  render() {
    return (
      <header> 
        <div className="titulo">JAC CHRISTMAS GAME</div>
          <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
        </div>
        <div className="titulo">
          Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  }
};
export default Header;