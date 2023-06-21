import React, { useState } from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flagCa from "../assets/flags/flag_ca.png";
import flagEs from "../assets/flags/flag_es.png";
import flagEn from "../assets/flags/flag_en.png";

function NavHome() {
  const [selectedLanguage, setSelectedLanguage] = useState("ca");
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang), i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="home">
      <Navbar className="px-4" bg="light" variant="secondary" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              {t("nav.home")}
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ex1">
              {t("nav.ex1")}
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ex1">
              {t("nav.ex2")}
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ex1">
              {t("nav.ex3")}
            </Nav.Link>
          </Nav>
        </Container>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="ca">
            Ca
          </option>
          <option value="es">
            Es
          </option>
          <option value="en">
            En
          </option>
        </select>
      </Navbar>
    </div>
  );
}

export default NavHome;
