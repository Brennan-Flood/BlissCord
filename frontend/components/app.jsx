import React from 'react';
import { login } from '../actions/session_actions';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ServerIndexContainer from './server/server_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DemoLoginFormContainer from './session_form/demo_login_form_container';

const App = () => (
  <div>
    <header className="main-header">
      <Link to="/home" >
        <h1 className="header-link" >Discord Clone</h1>
      </Link>

      <Link to='/'>
        <h1>Return to splash page</h1>
      </Link>

      

      <Route exact path="/" component={GreetingContainer} />

    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/demologin" component={DemoLoginFormContainer} />
    </Switch>
    <ProtectedRoute path="/home" component={ServerIndexContainer} />
    <footer className="main-footer"><h1 className="my-email">flood.brennan@gmail.com</h1></footer>
  </div>
);

export default App;
