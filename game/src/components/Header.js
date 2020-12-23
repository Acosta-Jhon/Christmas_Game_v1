import React, { Component } from 'react';
import '../assets/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="marcador">
        <div className="minidiv">
          <div className="titulo">CHRISTMAS GAME</div>
          <div className="titulo">
            Intentos: {this.props.numeroDeIntentos}
          </div>
          <div className="contenedor_boton">
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Header;