import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Venues",
  },

  {
    path: "/blogs",
    display: "Portfolio",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill">Ph.no1</i> +91 9999999999
                  <i class="ri-phone-fill">Ph.no2</i> +91 7777777777
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/adminlogin" className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-fill"></i> Admin Login
                </Link>
                <Link to="/eventmanagerlogin" className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-fill"></i> Event Manager Login
  </Link>
  <Link to="/customerlogin" className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-fill"></i> Customer Login
                </Link>
                <Link to="/register" className=" d-flex align-items-center gap-1">
               <i class="ri-user-3-fill"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-cake-2-fill"></i>
                    <span>
                    Birthday <br /> Party
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Let's Surprise Them</h4>
                  <h6>At There Favorite Place</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-calendar-check-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>Pick a Date</h4>
                  
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/*<div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-notification-2-fill"></i>
                </span>
              </div>
                  </div>*/}
                  <div className="nav__right">
              <div className="search__box">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                </div>
                </div>
               

          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
