import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routerType';

const SignUp = () => (
  <div className="layout-center bg">
    <MDBContainer>
      <MDBRow className="d-flex flex-column align-items-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4 text-monospace">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className="text-monospace"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    className="text-monospace"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className="text-monospace"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    className="text-monospace"
                  />
                </div>
                <div className="d-flex flex-row justify-content-between mt-3 mb-3 px-4">
                  <Link
                    to={ROUTES.SIGN_IN}
                    className="text-reset text-monospace"
                  >
                    Login now!
                  </Link>
                  <Link
                    to={ROUTES.FORGOT_PASS}
                    className="text-reset text-monospace"
                  >
                    Forgot password!
                  </Link>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn outline color="info">
                    <Link to={ROUTES.HOME} className="text-monospace">
                      Register
                    </Link>
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);

export default SignUp;
