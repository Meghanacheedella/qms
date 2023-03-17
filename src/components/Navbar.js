import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <b className="logo">QMS</b>
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/givefeedback">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Give Feedback
                  </a>
                </li>
              </Link>
              <Link to="feedbacks">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feedbacks
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
