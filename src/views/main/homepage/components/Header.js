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
              <Link to={ROUTES.HOME} className="text-nav">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.BLOG} className="text-nav">
                Blog
              </Link>
            </li>
            <li>
              <Link to={ROUTES.FEATURES} className="text-nav">
                Feature
              </Link>
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
                <Link to={ROUTES.PROFILE} className="box-user-tab">
                  Profile
                </Link>

                <Link to={ROUTES.SIGN_IN} className="box-user-tab">
                  Logout
                </Link>
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
              <img src={Logo} alt="logo" />
            </div>
            <div className="menu-mobile-list-tab">
              <div className="mobile-tab-item">
                <Link className="text-nav" to={ROUTES.HOME}>
                  Home
                </Link>
              </div>
              <div className="mobile-tab-item">
                <Link className="text-nav" to={ROUTES.BLOG}>
                  Blog
                </Link>
              </div>
              <div className="mobile-tab-item">
                <Link className="text-nav" to={ROUTES.FEATURES}>
                  Feature
                </Link>
              </div>
              <div className="mobile-tab-item">
                <Link className="text-nav" to={ROUTES.SIGN_IN}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
