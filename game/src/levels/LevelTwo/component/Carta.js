import React, {Component} from 'react';
import '../style/Carta.css'
import FlipCard from 'react-flipcard';


export default class Carta extends Component {
  render() {
    return (
      <div className="cartaDos" onClick={this.props.seleccionarCarta}>
        <FlipCard
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={true}
        >
          <div className="portadaDos"></div>
          <div className="contenidoDos">
            <i className={`fa ${this.props.icono} `}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};