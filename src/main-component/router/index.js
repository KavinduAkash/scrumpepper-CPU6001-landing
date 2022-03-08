import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import AboutPage from '../AboutPage'
import PortfolioGrid from '../PortfolioGrid'
import PortfolioGridS2 from '../PortfolioGridS2'
import PortfolioGridS3 from '../PortfolioGridS3'
import PortfolioSlide from '../PortfolioSlide'
import PortfolioSinglePage from '../PortfolioSinglePage'
import ServicePage from '../ServicePage'
import ServiceSinglePage from '../ServiceSinglePage'
import ProjectSinglePage from '../ProjectSinglePage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/home' component={Homepage} />
          {/*<Route path='/home2' component={Homepage2} />*/}
          {/*<Route path='/home3' component={Homepage3} />*/}
          {/*<Route path='/home4' component={Homepage4} />*/}
          <Route path='/about' component={AboutPage} />
          {/*<Route path='/portfolio-grid' component={PortfolioGrid} />*/}
          {/*<Route path='/portfolio-grid-s2' component={PortfolioGridS2} />*/}
          {/*<Route path='/portfolio-grid-s3' component={PortfolioGridS3} />*/}
          {/*<Route path='/portfolio-slide' component={PortfolioSlide} />*/}
          {/*<Route path='/portfolio-single/:id' component={PortfolioSinglePage} />*/}
          {/*<Route path='/service' component={ServicePage} />*/}
          {/*<Route path='/service-single/:id' component={ServiceSinglePage} />*/}
          {/*<Route path='/project-single/:id' component={ProjectSinglePage} />*/}
          {/*<Route path='/contact' component={ContactPage} />*/}
          <Route path='/404' component={ErrorPage} />
          <Route path='/blog-single/:id' component={BlogDetails} />
          <Route path='/blog-single-left-sidebar/:id' component={BlogDetailsLeftSiide} />
          <Route path='/blog-single-fullwidth/:id' component={BlogDetailsFull} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/blog-left-sidebar' component={BlogPageLeft} />
          <Route path='/blog-fullwidth' component={BlogPageFullwidth} />
          {/*<Route path='/login' component={LoginPage} />*/}
          {/*<Route path='/register' component={SignUpPage} />*/}
          {/*<Route path='/forgot-password' component={ForgotPassword} />*/}
        </Switch>
      </Router>

    </div>
  );
}

export default AllRoute;
