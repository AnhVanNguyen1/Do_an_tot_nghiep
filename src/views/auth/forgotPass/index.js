import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardBody,
  MDBCard,
} from 'mdbreact';
import { ROUTES } from '../../../router/routerType';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Logo from '../../../assets/images/logo/4.png';
export default function ForgotPassword() {
  const [formValue, setFormValue] = useState({
    email: '',
  });

  const onChangeForm = (e) => {
    setFormValue({ ...setFormValue, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
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
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      className="form-control text-monospace"
                      value={formValue.email}
                      required
                      name="email"
                      onChange={onChangeForm}
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
                      to={ROUTES.SIGN_UP}
                      className="text-reset text-monospace"
                    >
                      Create account now!
                    </Link>
                  </div>
                  <div className="text-center py-3 mt-3">
                    <MDBBtn rounded outline color="primary" type="submit">
                      <span className="text-monospace text-login-black">
                        Forgot password
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
}
