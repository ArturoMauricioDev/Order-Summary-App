import React from 'react'
import PlanType from './PlanType'
import './styles/Plan.css'
import iconMusic from '../assets/icon-music.svg'

function Plan() {
    
    return (
        <section className="plan">
            <div>
                <img src={iconMusic} alt="icono de musica" />
            </div>
            <PlanType/>
            <div>
                <a href="/">Change</a>
            </div>

        </section>
    )
}

export default Plan
