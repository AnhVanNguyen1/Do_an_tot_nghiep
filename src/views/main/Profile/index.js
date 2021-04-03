import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import Header from '../homepage/components/Header';
import { MDBEdgeHeader, MDBFreeBird } from 'mdbreact';
import { AiOutlineEdit } from 'react-icons/ai';

export default function Profile() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <MDBContainer>
      <Header />
      <MDBTabs className="mb-3 f-flex flex-row justify-content-center  align-items-center">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab1')}
            active={basicActive === 'tab1'}
          >
            Profile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab2')}
            active={basicActive === 'tab2'}
          >
            My Favorites
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab3')}
            active={basicActive === 'tab3'}
          >
            My order
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
          <MDBContainer className="pb-5">
            <MDBRow>
              <MDBCol md="12" className="text-center">
                <MDBContainer className="mt-3">
                  <MDBEdgeHeader className="bg bg-profile position-relative">
                    {/* <div className="position-absolute icon-edit-bg">
                      <AiOutlineEdit size={30} />
                    </div> */}
                  </MDBEdgeHeader>
                  <MDBFreeBird>
                    <MDBRow>
                      <MDBCol
                        md="8"
                        lg="7"
                        className="mx-auto float-none white z-depth-1 py-5 px-2  view-profile"
                      >
                        <div className="position-relative">
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                            alt=""
                            className="rounded-circle img-fluid"
                          />
                        </div>
                        <div className="mt-3">
                          <h5>Email</h5>
                          <div>codertruong2001@gmail.com</div>
                        </div>
                        <div className="mt-3">
                          <h5>Address</h5>
                          <div>No 1 Phu Do Street, Bac Tu Liem Ha noi</div>
                        </div>
                        <div className="mt-3">
                          <h5>type customers</h5>
                          <div>Diamond</div>
                        </div>
                        <div className="mt-3">
                          <h5>Join Date</h5>
                          <div>Tue, 20/04/2021 </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBFreeBird>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
