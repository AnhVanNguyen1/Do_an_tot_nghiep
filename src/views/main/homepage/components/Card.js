import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from 'mdbreact';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
export default function Card() {
  return (
    <MDBCard narrow ecommerce className="mb-2">
      <MDBCardImage
        cascade
        top
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
        alt="sample photo"
      />
      <MDBCardBody cascade>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <a href="#!" className="text-muted">
            <h5>Shoes</h5>
          </a>
          <MDBBadge color="info">50%</MDBBadge>
        </div>

        <MDBCardTitle>
          <strong>
            <a href="#!">Leather boots</a>
          </strong>
        </MDBCardTitle>
        <MDBCardText className="text-limited">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci.
        </MDBCardText>
        <MDBCardText>⭐⭐⭐⭐⭐</MDBCardText>
        <MDBCardText>price : 1000$ - 2000$</MDBCardText>
        <MDBCardText>Supplier : Nikes</MDBCardText>
        <MDBCardFooter className="px-1">
          <div className="d-flex flex-row justify-content-between mt-3">
            <div className="shadow-5">
              <FiShoppingCart size={25} />
            </div>
            <AiOutlineHeart size={25} />
            <AiOutlineShareAlt size={25} />
          </div>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}
