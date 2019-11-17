import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SplashContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ServerIndexContainer from './server/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DemoLoginFormContainer from './session_form/demo_login_form_container';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-content">

      <Route exact path="/" component={SplashContainer} />

        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/demologin" component={DemoLoginFormContainer} />
        </Switch>

      <ProtectedRoute path="/home" component={ServerIndexContainer} />

      </div>
    )
  }
}

export default MainComponent;