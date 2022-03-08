import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'
import Services from '../../api/service';
import Project from '../../api/project';



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt="logo" width={300}/>
                            </div>
                            <p>Build and Earn with your online store with lots of cool and exclusive features </p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                {Services.slice(1, 5).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-placeholder"></i>Colombo, Sri Lanka</li>
                                    {/*<li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>*/}
                                    <li><i className="fi flaticon-email"></i>kavinducv@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*<div className="col col-lg-3 col-md-6 col-sm-12 col-12">*/}
                    {/*    <div className="widget instagram">*/}
                    {/*        <div className="widget-title">*/}
                    {/*            <h3>Projects</h3>*/}
                    {/*        </div>*/}
                    {/*        <ul className="d-flex">*/}
                    {/*            {Project.slice(0, 6).map((project, Pitem) => (*/}
                    {/*                <li key={Pitem}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2022 Scrum Pepper by <Link onClick={ClickHandler} to="/">Kavindu Akash</Link>.
                            All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;
