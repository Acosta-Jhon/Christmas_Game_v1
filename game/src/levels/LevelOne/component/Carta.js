import React, {Component} from 'react';
import '../style/Carta.css'
import FlipCard from 'react-flipcard';

export default class Carta extends Component {
  render() {
    return (
      <div className="carta1" onClick={this.props.seleccionarCarta}>
        <FlipCard
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={true}
        >
          <div className="portada1"></div>
          <div className="contenido1">
            <i className={`fa ${this.props.icono} `}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};