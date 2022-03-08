import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/slider/right-img.png'

const Hero =() => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2><span>Best</span> <span>Scrum</span> <span>Based</span> <span>PM Tool</span></h2>
                            </div>
                            <div className="btns">
                                <Link to="/about">Sign up today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <img src={"https://anur-react.wpocean.com/static/media/right-img.24b30f13.png"} alt=""/>
                </div>
                <div className="round-1"></div>
                <div className="round-2"></div>
                <div className="round-3"></div>
                <div className="round-4"></div>
            </div>

            <div className="social-link">
                <ul>
                    <li><Link to="/">Facebook</Link></li>
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/">Instagram</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Hero;
