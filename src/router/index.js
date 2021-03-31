import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import NotFoundPage from '../views/404NotFound';
import SignIn from '../views/auth/form/signIn';
import SignUp from '../views/auth/form/signup';
import HomePage from '../views/main/homepage';
import ForgotPass from '../views/auth/forgotPass';
import { ROUTES } from './routerType';

export default function RootRouter() {
  return (
    <Switch>
      <Route path={ROUTES.SIGN_IN} component={SignIn} exact />
      <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
      <Route path={ROUTES.FORGOT_PASS} component={ForgotPass} exact />
      <Route path={ROUTES.PAGE_NOT_FOUND} component={NotFoundPage} exact />
      <Route path={ROUTES.HOME} component={HomePage} exact />
    </Switch>
  );
}
