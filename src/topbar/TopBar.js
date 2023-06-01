import "./topbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function TopBar() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    console.log(!isMobileMenu);
    console.log(navbarClass);
  };
  const navbarClass = isMobileMenu ? "hambar open" : "hambar";
  return (
    <>
      <div className="tpbar">
        <i
          className="fa-sharp fa-solid fa-bars ham"
          onClick={toggleMobileMenu}
        ></i>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="navBar">
          <ul className="navList">
            <li className="listItem">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                ABOUT
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                CONTACT
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/write"
                style={{ textDecoration: "none", color: "white" }}
              >
                WRITE
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <i className="fa-solid fa-b"></i>
        </div>
      </div>
      <div className={navbarClass}>
        <ul>
          <center>
            <li className="listItem">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                ABOUT
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                CONTACT
              </Link>
            </li>
            <li className="listItem">
              <Link
                to="/write"
                style={{ textDecoration: "none", color: "white" }}
              >
                WRITE
              </Link>
            </li>
          </center>
        </ul>
      </div>
    </>
  );
}

export default TopBar;
