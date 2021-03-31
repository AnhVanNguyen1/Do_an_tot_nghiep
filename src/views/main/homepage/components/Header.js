import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo/4.png';
import { ROUTES } from '../../../../router/routerType';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import './styles.css';
export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  console.log(showMenuMobile);
  return (
    <div className="header">
      <div className="header-row">
        <div className="header-logo">
          <Link to={ROUTES.HOME}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="header-center">
          <ul>
            <li>
              <div className="text-nav">Home</div>
            </li>
            <li>
              <div className="text-nav">Feature</div>
            </li>
            <li>
              <div className="text-nav">Blog</div>
            </li>
            <li>
              <div className="text-nav">Contact</div>
            </li>
          </ul>
        </div>
        <div className="header-nav-mobile">
          <div>
            <FiMenu size={30} onClick={() => setShowMenuMobile(true)} />
          </div>
        </div>
        <div className="header-nav-right">
          <div className="header-nav-icon" onClick={() => setShowSearch(true)}>
            <FiSearch size={22.5} />
          </div>
          <div className="header-nav-icon nav-icon-line">
            <FiUser size={22.5} onClick={() => setToggleUser(!toggleUser)} />
            {toggleUser && (
              <div className="header-box-user">
                <a href="/" className="box-user-tab">
                  Profile
                </a>
                <a href="/" className="box-user-tab">
                  Statistical
                </a>
                <a href="/" className="box-user-tab">
                  Logout
                </a>
              </div>
            )}
          </div>
          <div className="header-nav-icon">
            <FiShoppingBag size={22.5} />
          </div>
        </div>
        {showSearch && (
          <div className="header-search">
            <div className="header-search-contain">
              <input
                placeholder="Searching...."
                className="header-input-search"
              />
              <div className="header-btn-close-search">
                <FiX size={40} onClick={() => setShowSearch(false)} />
              </div>
            </div>
          </div>
        )}
        {showMenuMobile && (
          <div className="header-menu-mobile">
            <div className="menu-mobile-close">
              <FiX size={50} onClick={() => setShowMenuMobile(false)} />
            </div>
            <div className="view-logo-mobile">
              <img src={Logo} />
            </div>
            <div className="menu-mobile-list-tab">
              <a className="mobile-tab-item">Home</a>
              <a className="mobile-tab-item">Feature</a>
              <a className="mobile-tab-item">Blog</a>
              <a className="mobile-tab-item">Contact</a>
              <a className="mobile-tab-item">Logout</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
