import { Link } from "react-router-dom";
import "./index.css";
import './style.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar-expand-sm">
        <div classname="container-fluid">
          <div className="row">
          <div className="navbar-brand col-md-2 logo">
            <Link to="/">
          <h3 style={{"text-decoration":"none"}}>
            Abinand <br />
            <span>Krishna </span>
          </h3>
          </Link>
          </div>
          <div className="col-md-6">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <a href="#home" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
