import { React, Component } from 'react';

import navidad1 from './assets/images/santa.png';
import navidad2 from './assets/images/santa2.jpg';
import navidad3 from './assets/images/jugar.png';
import './assets/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="historia">
                <div className="title1"><h2>Christmas Game</h2></div>
                <div className="title2"><h3>Ayuda a Santa !!</h3></div>
                <div className="box-cards">

                    <div className="box box1">
                        <img src={navidad1} alt='not found'/>
                        <span className="botton botton1" >PASO 1</span>
                        <p>Bienvenido, Santa necesita tu ayuda, por que sufre de pérdida de memoria, vamos allá!!!1</p>
                    </div>

                    <div className="box box2">
                        <img src={navidad2} alt='not found'/>
                        <span className="botton botton2">PASO 2</span>
                        <p>Ayuda a recordar los juguetes para los niños con la siguiente dinámica  y salva la navidad junto con Santa</p>
                    </div>

                    <div className="box box3">
                        <a href="./level_one">  <img src={navidad3}alt='not found' /></a>
                        <span className="botton botton3">CLICK EN LA IMAGEN PARA EMPEZAR</span>
                        <p>Empareja los juguetes que tengan la misma similitud</p>
                    </div>
                </div>

            </div>

        );
    }
}
export default Home;