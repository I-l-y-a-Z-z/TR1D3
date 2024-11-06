import "./ContactComponent.css";

function ContactComponent() {
  return (
    <>
      <section className="py-5">
        <div className="container-fluid p-lg-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6">
              <div className="col-lg-8 mx-auto">
                <span className="text-muted">Let's Talk</span>
                <h2 className="display-5 fw-bold">Contact Us</h2>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          className="form-control bg-light"
                          placeholder="Your name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          className="form-control bg-light"
                          placeholder="Your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <textarea
                          className="form-control bg-light"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-grid">
                        <button className="btn btn-primary" type="submit">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-5 mt-lg-0">
                <img alt="" className="img-fluid" src=".\public\pelgora.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactComponent;
