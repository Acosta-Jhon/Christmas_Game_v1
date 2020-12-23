import { React, Component } from 'react';
import './style/LevelOne.css';
import Header from '../../components/Header';
import Tablero from './component/Tablero';
import construirBaraja from './construirBaraja1';
import Swal from "sweetalert2";

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 15
  };
}

class LevelOne extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  render() {
    return (
      <div className="App">
        <Header
          numeroDeIntentos={this.state.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
        />
        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    })

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
      console.log(parejaSeleccionada)
    }
  }
  compararPareja(parejaSeleccionada) {
    this.setState({ estaComparando: true });

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return { ...carta, fueAdivinada: true };
        });
      }
      if (this.state.numeroDeIntentos === 1) {
        Swal.fire({
          title: 'Fuiste muy lento y te contagiaste del virus',
          icon: 'warning',
          iconHtml: '😷',
          confirmButtonText: 'Reiniciar',
          cancelButtonText: 'Inicio',
          showCancelButton: true,
          showCloseButton: true
        })
          .then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/level_one'
              //getEstadoInicial();
            } else {
              window.location.href = '/'
            }
          })
      }
      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos - 1
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
    //baraja.forEach((carta) => carta.fueAdivinada = true);
    if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
      Swal.fire({
        title: '👏Excelente👏',
        icon: 'success',
        text: "¿Preparado para el Nivel 2?",
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Inicio',
        showCancelButton: true,
        showCloseButton: true
      })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/level_two'
          } else {
            window.location.href = '/'
          }
        })
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial()
    );
  }
}

export default LevelOne;


