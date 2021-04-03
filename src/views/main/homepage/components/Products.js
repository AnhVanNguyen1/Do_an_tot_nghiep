import { MDBCheckbox } from 'mdb-react-ui-kit';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import Card from './Card';

export default function Products() {
  return (
    <MDBContainer className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow className="no-gutters">
        <MDBCol size="3" className="full-width">
          <MDBContainer fluid className="full-width">
            <div className="text-center h4 mt-2">Filter Tools</div>
            <div>
              <div className="text-left h5">Service</div>
              <MDBCheckbox
                name="flexCheck"
                value=""
                label="Fast delivery 2 hours"
              />
              <MDBCheckbox name="flexCheck" value="" label="Free ship" />
              <MDBCheckbox name="flexCheck" value="" label="Cheaper refund" />
              <div className="text-left h5 mt-5">Price</div>
              <div className="d-flex flex-row align-items-center my-3 flex-wrap">
                <input
                  className="input-price"
                  type="number"
                  placeholder="price from"
                />
                <div className="outline-input" />
                <input
                  className="input-price"
                  type="number"
                  placeholder="price to"
                />
              </div>
              <MDBBtn>Apply</MDBBtn>
              <div className="text-left h5 mt-5">Ratting</div>
              <div className="my-3">
                <MDBCheckbox name="flexCheck" value="" label="⭐" />
                <MDBCheckbox name="flexCheck" value="" label="⭐⭐" />
                <MDBCheckbox name="flexCheck" value="" label="⭐⭐⭐" />
                <MDBCheckbox name="flexCheck" value="" label="⭐⭐⭐⭐" />
                <MDBCheckbox name="flexCheck" value="" label="⭐⭐⭐⭐⭐" />
              </div>
              <div className="text-left h5 mt-5">Supplier</div>
              <div className="my-3">
                <MDBCheckbox name="flexCheck" value="" label="Nike" />
                <MDBCheckbox name="flexCheck" value="" label="Spermee" />
                <MDBCheckbox name="flexCheck" value="" label="Shoppe" />
                <MDBCheckbox name="flexCheck" value="" label="Monohia" />
                <MDBCheckbox name="flexCheck" value="" label="Limia Ango" />
                <MDBCheckbox name="flexCheck" value="" label="Guhata Minli" />
              </div>
            </div>
          </MDBContainer>
        </MDBCol>
        <MDBCol size="9" className="full-width">
          <MDBContainer fluid className="full-width">
            <div className="d-flex flex-wrap ">
              <MDBBtn outline color="success" className="mr-3">
                Men's clothing
              </MDBBtn>
              <MDBBtn outline color="danger" className="mx-3">
                Women clothes
              </MDBBtn>
              <MDBBtn outline color="warning" className="mx-3">
                Swimwear
              </MDBBtn>
              <MDBBtn outline color="secondary" className="mx-3">
                Office furniture
              </MDBBtn>
              <MDBBtn outline color="secondary" className="mx-3">
                Sunscreen fashion
              </MDBBtn>
              <MDBBtn outline color="secondary" className="mx-3">
                Fashion accessories
              </MDBBtn>
            </div>
            <div className="mt-5">
              <MDBContainer className="full-width">
                <MDBRow>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="4" xl="3">
                    <Card />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
