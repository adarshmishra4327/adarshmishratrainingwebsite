import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

import Loading from './pages/Layouts/loading';

// Import css
import './Apps.scss';

// Import all components
const homeAgency = React.lazy(() => import('./pages/home-agency'));
const homeApp = React.lazy(() => import('./pages/home-app'));
const homeBusiness = React.lazy(() => import('./pages/home-business'));
const homeMultipurpose = React.lazy(() => import('./pages/home-multipurpose'));
const homeSoftware = React.lazy(() => import('./pages/home-software'));
const homeStartup = React.lazy(() => import('./pages/home-startup'));

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Router>
          <React.Suspense fallback={<div><Loading /></div>}>
            <Switch>
              <Route path="/home-agency" component={homeAgency} />
              <Route path="/home-app" component={homeApp} />
              <Route path="/home-business" component={homeBusiness} />
              <Route path="/home-multipurpose" component={homeMultipurpose} />
              <Route path="/home-software" component={homeSoftware} />
              <Route path="/home-startup" component={homeStartup} />
              <Route path="/" component={homeAgency} />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}



export default withRouter(App);


