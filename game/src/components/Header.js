import React from 'react'
import '../assets/Header.css'

export const Header = () => {
    return (
        <header>
            <div className="titulo">JAC CHRISTMAS GAME</div>
            <div>
                <button className="boton-reiniciar">
                    Reiniciar
            </button>
                <div className="titulo">
                    Intentos:
                </div>
            </div>
        </header>
    )
}
