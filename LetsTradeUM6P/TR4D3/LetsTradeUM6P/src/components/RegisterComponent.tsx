import { Link } from "react-router-dom";
import "./LoginRegister.css";
function RegisterComponent() {
  return (
    <>
      <div className="loginsignup">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active buttonloginsignup"
              id="tab-login"
              data-mdb-pill-init
              to="/login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active buttonloginsignup"
              id="tab-register"
              data-mdb-pill-init
              to="/register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </Link>
          </li>
        </ul>

        <div
          className="tab-pane"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="registerUsername"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerUsername">
                Username
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-3"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterComponent;
