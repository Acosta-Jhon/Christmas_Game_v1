import React, {Component} from 'react';
import '../style/Carta.css'
import FlipCard from 'react-flipcard';

export default class Carta extends Component {
  render() {
    return (
      <div className="carta3" onClick={this.props.seleccionarCarta}>
        <FlipCard
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={true}
        >
          <div className="portada3"></div>
          <div className="contenido3">
            <i className={`fa ${this.props.icono} `}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};