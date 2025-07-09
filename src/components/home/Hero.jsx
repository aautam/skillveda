import React from 'react'
import { Button } from '../common/Button'
import lava from '../../assets/main.avif'

import '../../style/Hero.css'
export const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Welcome to Skillveda</h1>
            <p className="hero-subtitle">
                <span>Master new skills.</span><br />
                Your journey to mastering skills starts here <br />
                Unlock your potential with top online courses.</p>
            <Button className="hero-button" label="Start Learning" variant='outline'/>
        </div>
        <div className="hero-image">
            <img src={lava} alt="offer" />
        </div>

        
    </div>
    </>
  )
}
