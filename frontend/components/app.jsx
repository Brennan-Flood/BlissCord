import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="main-header">
      <Link to="/" >
        <h1 className="header-link" >Discord Clone</h1>
      </Link>
      <Route exact path="/" component={GreetingContainer} />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <footer className="main-footer"><h1 className="my-email">flood.brennan@gmail.com</h1></footer>
  </div>
);

export default App;
