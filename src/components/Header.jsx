import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import mbLogo from "../assets/images/mb-logo.png";
import "../style/header.css";
import "../style/style.css";

const Header = ({ language, setLanguage }) => {
  const navItems = [
    { english: "Home", japanese: "ホーム", link: "home" },
    { english: "About Me", japanese: "自己紹介", link: "about" },
    { english: "Projects", japanese: "プロジェクト", link: "projects" },
    { english: "Contact", japanese: "お問い合わせ", link: "contact" },
  ];
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPosition =
        document.querySelector("#home").getBoundingClientRect().bottom +
        window.scrollY;

      if (window.scrollY >= stickyPosition) {
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
    language === "english" ? setLanguage("japanese") : setLanguage("english");
  };

  return (
    <Navbar
      expand="md"
      className={`mb-3 navbar ${isSticky ? "sticky" : ""}`}
      style={{ height: "5rem" }}
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#home" className="header-title animated">
          <img className="my-icon" src={mbLogo} alt="logo" />
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
              <img className="my-icon" src={mbLogo} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-5">
              {navItems.map((item) => (
                <Nav.Link
                  href={`#${item.link}`}
                  className="nav-item animated"
                  key={item.link}
                >
                  {language === "english" ? item.english : item.japanese}
                </Nav.Link>
              ))}
              <Nav.Link
                onClick={toggleLanguage}
                className="nav-item btn-language animated"
              >
                {language === "english" ? "日本語" : "English"}
                <img
                  src={`https://flagcdn.com/${
                    language === "english" ? "jp" : "ca"
                  }.svg`}
                  alt={language === "english" ? "Japan" : "Canada"}
                  className="country-flag"
                ></img>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
