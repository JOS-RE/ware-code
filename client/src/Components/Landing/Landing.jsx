import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import GIF from "./MAIN PAGE GIF.gif"

export default function Landing() {
    return (
        <div>
            <img className="img-fluid" style={{ "marginTop": "1%", "height": "30%" }} src={GIF} /><br />
            <Link to="/register">
                <button id="start" type="button">
                    Get Started
                </button>
            </Link>
        </div>
    );
}