import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';
import { ROUTES } from '../../../router/routerType';
// import OverlayLoader from "react-overlay-loading/lib/OverlayLoader";
export default function signIn() {
  return (
    <div className="layout-center bg">
      {/* <OverlayLoader
        color={"red"}
        loader="PulseLoader"
        text="Loading... Please wait!"
        active={true}
        backgroundColor={"black"}
        opacity=".4"
      /> */}

      <MDBContainer>
        <MDBRow className="d-flex flex-column align-items-center">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4 text-monospace">Sign in</p>
                  <div className="grey-text">
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
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      className="text-monospace"
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between px-4">
                    <Link
                      to={ROUTES.SIGN_UP}
                      className="text-reset text-monospace"
                    >
                      Register now!
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
                        Login
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
}
