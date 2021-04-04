import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routerType';
import Logo from '../../../assets/images/logo/4.png';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const SignUp = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
    alert(JSON.stringify(formValue));
  };

  return (
    <div className="layout-center bg">
      <MDBContainer>
        <MDBRow className="d-flex flex-column align-items-center">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form
                  onSubmit={submitHandler}
                  className="needs-validation px-5 py-3"
                >
                  <div className="text-center mt-3">
                    <img src={Logo} alt="logo" />
                  </div>
                  <div className="blue-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      name="name"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      className="form-control text-monospace"
                      value={formValue.name}
                      onChange={onChangeForm}
                      required
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      name="email"
                      validate
                      error="wrong"
                      success="right"
                      className="form-control text-monospace"
                      value={formValue.email}
                      onChange={onChangeForm}
                      required
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      name="password"
                      type="password"
                      validate
                      className="form-control text-monospace"
                      value={formValue.password}
                      onChange={onChangeForm}
                      required
                    />
                    <MDBInput
                      label="Confirm password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="confirmPassword"
                      className="form-control text-monospace"
                      value={formValue.confirmPassword}
                      onChange={onChangeForm}
                      required
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between flex-wrap">
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
                  <div className="text-center mt-3">
                    <MDBBtn rounded outline color="primary" type="submit">
                      <span className="text-monospace text-login-black">
                        Register
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

export default SignUp;
