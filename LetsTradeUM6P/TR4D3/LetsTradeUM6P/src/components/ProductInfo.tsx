import "./ProductInfo.css";
function ProductInfo() {
  return (
    <>
      <div className="product">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Posting Title</h3>
            <div className="row align-items-center product-info">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center">
                  <img
                    src=".\public\assets\announcement.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6 text-center ">
                <h4 className="box-title mt-5">Product description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <h2 className="mt-5 text-success">Available</h2>
                <button className="btn btn-primary btn-rounded offer-btn">
                  Make Offer
                </button>
                <button className="btn btn-primary btn-rounded contact-btn">
                  Whatsapp
                </button>
              </div>

              <div className="col-lg-6 col-md-8 col-sm-12">
                <h3 className="box-title mt-5">General Info</h3>
                <div className="table-responsive">
                  <table className="table table-striped table-product">
                    <tbody>
                      <tr>
                        <td width="390">User's Name</td>
                        <td>name.name</td>
                      </tr>
                      <tr>
                        <td>Building Number</td>
                        <td>building.number</td>
                      </tr>
                      <tr>
                        <td>Block Number</td>
                        <td>block.number</td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>phone.number</td>
                      </tr>
                      <tr>
                        <td>Value</td>
                        <td>value.value</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
