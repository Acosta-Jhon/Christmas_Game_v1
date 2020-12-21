import { Component } from 'react';
import '../assets/LevelOne.css';
import { Header } from '../components/Header';
import Tablero from '../components/Tablero';
import construirBaraja from '../utils/Construir_Baraja'

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return{
    baraja
  }
}

export default class LevelOne extends Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  render(){
    return(
      <div>
        <Header/>
        <Tablero baraja={this.state.baraja}/>
    </div>
    );
  }
}

