import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';
import { ROUTES } from '../../../router/routerType';
import Logo from '../../../assets/images/logo/4.png';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
// import OverlayLoader from "react-overlay-loading/lib/OverlayLoader";

const SignIn = (props) => {
  const history = useHistory();
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const onChangeForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
    history.push(ROUTES.HOME);
  };

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
              <MDBCardBody className="py-5">
                <form
                  className="needs-validation px-5"
                  onSubmit={submitHandler}
                >
                  <div className="text-center mt-3">
                    <img src={Logo} alt="logo" />
                  </div>
                  <div className="blue-text">
                    <MDBInput
                      value={formValue.email}
                      onChange={onChangeForm}
                      name="email"
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      className="text-monospace form-control"
                      required
                    />
                    <MDBInput
                      value={formValue.password}
                      onChange={onChangeForm}
                      name="password"
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      className="form-control text-monospace"
                      required
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between flex-wrap">
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
                  <div className="text-center mt-3">
                    <MDBBtn rounded outline color="primary" type="submit">
                      <span className="text-monospace text-login-black">
                        Login
                      </span>
                      <MDBIcon far icon="paper-plane" />
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
};

export default SignIn;
