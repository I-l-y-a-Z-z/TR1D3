import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navigation">
        <div className="container-fluid containreplace">
          <Link className="navbar-brand" to="/">
            <img
              src=".\public\Let's Trade.png"
              className=" logomain img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 onglets">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Other
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success search" type="submit">
                Search
              </button>
            </form>
            <Link to="/login">
              <img className="Accountpfp" src=".\public\blankpfp.png" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
