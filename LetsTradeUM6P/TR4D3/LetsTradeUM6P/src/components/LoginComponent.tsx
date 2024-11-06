import "./LoginRegister.css";
import { Link } from "react-router-dom";

function LoginComponent() {
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

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center forgor">
                  <Link to="#!">Forgot password?</Link>
                </div>
              </div>

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
