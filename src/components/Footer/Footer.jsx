import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-cake-2-fill"></i>
                  <span>
                  Birthday <br /> Party
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Events create opportunities for people to connect with an area, spend time together, celebrate and experience the diversity of cultures, and foster creativity and innovation. They allow a community to come alive and provide an opportunity for a destination to highlight its tourism experience and increase economic activity.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Vijayawada</p>
              <p className="office__info">Phone: +91 9999999999</p>

              <p className="office__info">Email: eventmanagement@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          {/*<Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
                </Col>*/}

          <Col lg="12">
           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
