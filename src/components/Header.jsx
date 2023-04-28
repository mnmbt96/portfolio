import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../style/header.css";
import "../style/style.css";

const Header = ({ language, setLanguage }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset >= document.querySelector(".navbar").offsetHeight
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    language === "en" ? setLanguage("ja") : setLanguage("en");
  };

  return (
    <header>
      <Navbar
        expand="md"
        className={`mb-3 navbar ${isSticky ? "sticky" : ""}`}
        style={{ height: "5rem" }}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="header-title animated">
            mb
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            className="hamburger"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                mb
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5">
                <Nav.Link href="#" className="nav-item animated">
                  {language === "en" ? "Home" : "ホーム"}
                </Nav.Link>
                <Nav.Link href="#about" className="nav-item animated">
                  {language === "en" ? "About Me" : "自己紹介"}
                </Nav.Link>
                <Nav.Link href="#projects" className="nav-item animated">
                  {language === "en" ? "Projects" : "プロジェクト"}
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-item animated">
                  {language === "en" ? "Contact" : "お問い合せ"}
                </Nav.Link>
                <Nav.Link
                  onClick={toggleLanguage}
                  className="nav-item btn-language animated"
                >
                  {language === "en" ? "日本語" : "English"}
                  <img
                    src={`https://flagcdn.com/${
                      language === "en" ? "jp" : "ca"
                    }.svg`}
                    alt={language === "en" ? "Japan" : "Canada"}
                    className="country-flag"
                  ></img>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
