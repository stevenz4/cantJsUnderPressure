import React from 'react'
import './home.css'
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className='home'>
            <div className='homeTitle'>
                YOU CAN'T<br/>JAVASCRIPT<br/>UNDER PRESSURE
            </div>
            <div className="homeSubTitle">
                Five functions to fill. One ticking clock. <b>How fast can you code?</b>
            </div>
            <Link to="/exo1" style={{textDecoration: "none"}}>
                <div className="homeButtonContainer">
                    <button className="homeButton">Start the test</button>
                </div>
            </Link>
        </div>
    )
}
