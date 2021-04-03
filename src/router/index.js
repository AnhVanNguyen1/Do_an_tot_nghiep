import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../views/404NotFound';
import SignIn from '../views/auth/form/signIn';
import SignUp from '../views/auth/form/signup';
import HomePage from '../views/main/homepage';
import ForgotPass from '../views/auth/forgotPass';
import { ROUTES } from './routerType';
import BlogPage from '../views/main/Blog';
import FeaturesPage from '../views/main/Features';
import Profile from '../views/main/Profile';

export default function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} exact />
        <Route path={ROUTES.SIGN_IN} component={SignIn} exact />
        <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
        <Route path={ROUTES.FORGOT_PASS} component={ForgotPass} exact />
        <Route path={ROUTES.PAGE_NOT_FOUND} component={NotFoundPage} exact />
        <Route path={ROUTES.BLOG} component={BlogPage} exact />
        <Route path={ROUTES.FEATURES} component={FeaturesPage} exact />
        <Route path={ROUTES.PROFILE} component={Profile} exact />
      </Switch>
    </Router>
  );
}
