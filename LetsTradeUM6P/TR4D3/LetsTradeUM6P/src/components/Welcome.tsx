import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="top" />
      <div className="quest">
        <h1>What is let's Trade UM6P</h1>
      </div>
      <div className="row align-items-center welcome">
        <div className=" col-md-4">
          <img
            src=".\public\assets\pelgora.png"
            className="img-fluid pelgora"
          />
        </div>
        <div className="col-md-8">
          <div>
            <h1 className="Text1">WE ARE</h1>
            <h3 className="Text2">
              A platform for university students to easily trade items like
              books, electronics, and furniture within dorms, promoting
              sustainable exchange and community connection. Secure, simple, and
              tailored for student needs.
            </h3>
          </div>
        </div>
      </div>
      <div className="quest">
        <h1>What's our mission ?</h1>
      </div>
      <div className="row align-items-center welcome">
        <div className="col-md-8 order-md-1 order-2">
          <div>
            <h1 className="Text1">WE WANT TO</h1>
            <h3 className="Text2">
              Reduce waste and promote sustainability. By reusing items locally,
              it lowers the demand for new products and decreases carbon
              emissions from shipping, helping students adopt greener lifestyles
              on campus.
            </h3>
          </div>
        </div>
        <div className=" col-md-4 order-md-2 order-1">
          <img
            src=".\public\assets\greenum6p.png"
            className="img-fluid pelgora"
          />
        </div>
      </div>
    </>
  );
}

export default Welcome;
