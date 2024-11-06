import "./Announcement.css";
import { Link } from "react-router-dom";
function Announcement() {
  return (
    <>
      <Link className="box" to="/product">
        <img
          src=".\public\assets\announcement.png"
          className="img-fluid img-announcement"
        />
        <h5>"Posting Title"</h5>
        <div className="descripters">
          <h6 className="general">Flags: </h6>
          <p className="details"> category</p>
        </div>
        <div className="descripters">
          <h6 className="general">Value: </h6>
          <p className="details"> value.value</p>
        </div>
        <h6>by : name.lastname</h6>
      </Link>
    </>
  );
}

export default Announcement;
