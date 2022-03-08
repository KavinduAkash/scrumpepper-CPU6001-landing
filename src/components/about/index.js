import React from 'react'
import abimg from '../../images/about.png'
import { Link } from 'react-router-dom'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={abimg} alt=""/>
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <span className="ab-btn">New PM for 2022</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>ABOUT US</span>
                                <h2>Scrum Pepper is a project started with
                                    <span> UNI Research Project.</span>
                                </h2>
                                <div className="transparent-text">About</div>
                            </div>
                            <p style={{textAlign: 'justify'}}>With Covid-19 pandemic world digital transformation increase 20%. In Project Management process had to move into totally remote controlling environments with more high budgets.</p>
                            <p style={{textAlign: 'justify'}}>We started a research on what are the most needed things in project management with scrum-based methodology to solve problems in 2022. </p>
                            {/*<ul>*/}
                            {/*    <li><i className="ti-plus"></i> Quis ipsum suspendisse ultrices gravida. </li>*/}
                            {/*    <li><i className="ti-plus"></i> Risus commodo viverra maecenas accumsan lacus.</li>*/}
                            {/*    <li><i className="ti-plus"></i> Incididunt ut labore et dolore magna aliqua. </li>*/}
                            {/*</ul>*/}
                            {/*<Link onClick={ClickHandler} className="theme-btn-s2" to="/portfolio-grid">View Projects</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
