import React from 'react'
import './card.styles.scss'
function Card() {
    return (
        <div className="card">
            <div className="card-wrapper">
                <img src="/assets/portfolio.jpg" alt=""/>
                <div className="caption">
                    <p>Portfolio</p>
                </div>
            </div>    
        </div>
    )
}

export default Card
