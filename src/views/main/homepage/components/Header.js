import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo/4.png';
import { ROUTES } from '../../../../router/routerType';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import { useClickAway } from 'react-use';
export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const refUserMenu = useRef(null);
  const refIconSearch = useRef(null);
  const dropIn = useSpring({
    opacity: showSearch ? 1 : 0,
    marginTop: showSearch ? 0 : -200,
  });
  const toggleMenuUser = useSpring({
    opacity: toggleUser ? 1 : 0,
    marginTop: toggleUser ? 20 : 100,
  });

  const sideNavMenu = useSpring({
    opacity: showMenuMobile ? 1 : 0,
    width: showMenuMobile ? 350 : 0,
  });

  useClickAway(refUserMenu, () => {
    setToggleUser(false);
  });

  useClickAway(refIconSearch, () => {
    setShowSearch(false);
  });

  const LinkTabMobile = ({ path, content }) => {
    return (
      <div className="mobile-tab-item">
        <Link className="text-nav" to={path}>
          {content}
        </Link>
      </div>
    );
  };
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
          <div
            ref={refIconSearch}
            className="header-nav-icon"
            onClick={() => {
              setShowSearch(true);
            }}
          >
            <FiSearch size={22.5} />
          </div>
          <div ref={refUserMenu} className="header-nav-icon nav-icon-line">
            <FiUser size={22.5} onClick={() => setToggleUser(!toggleUser)} />
            <animated.div style={toggleMenuUser} className="header-box-user">
              <Link to={ROUTES.PROFILE} className="box-user-tab">
                Profile
              </Link>

              <Link to={ROUTES.SIGN_IN} className="box-user-tab">
                Logout
              </Link>
            </animated.div>
          </div>
          <div className="header-nav-icon">
            <FiShoppingBag size={22.5} />
          </div>
        </div>
        <animated.div
          ref={refIconSearch}
          style={dropIn}
          className="header-search"
        >
          <div className="header-search-contain">
            <input
              placeholder="Searching...."
              className="header-input-search"
            />
            <div className="header-btn-close-search">
              <FiX size={40} onClick={() => setShowSearch(false)} />
            </div>
          </div>
        </animated.div>
        <animated.div style={sideNavMenu} className="header-menu-mobile">
          <div className="menu-mobile-close">
            <FiX size={50} onClick={() => setShowMenuMobile(false)} />
          </div>
          <div className="view-logo-mobile d-flex flex-column">
            <img src={Logo} alt="logo" />
            <div className="d-flex flex-row justify-content-between my-3 full-width">
              <div className="btn-auth-nav-mobile d-flex flex-row align-items-center justify-content-center">
                Login
              </div>
              <div className="btn-auth-nav-mobile d-flex flex-row align-items-center justify-content-center">
                Register
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-user-nav-mobile"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
              alt="sample"
            />
            <h4 className="mt-3">Edison Muntity</h4>
          </div>
          <div className="menu-mobile-list-tab">
            <LinkTabMobile content="Home" path={ROUTES.HOME} />
            <LinkTabMobile content="Blog" path={ROUTES.BLOG} />
            <LinkTabMobile content="Feature" path={ROUTES.FEATURES} />
            <LinkTabMobile content="Logout" path={ROUTES.SIGN_IN} />
          </div>
        </animated.div>
      </div>
    </div>
  );
}
