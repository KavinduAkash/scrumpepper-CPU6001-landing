import React from 'react'
import { Link } from 'react-router-dom'

const Support = (props) => {
    return(
        <section className="wpo-support-section section-padding">
            <div className="container">
                <div className="wpo-support-wrap">
                    <div className="wpo-support-item-left">
                        <h3>Why late? Sign up today!</h3>
                        <p>Have a experience with 2022 matching scrum-based PM tool today.</p>
                    </div>
                    <div className="wpo-support-item-right">
                        <Link to="/contact" className="theme-btn">Sign up now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;
