import "./Announcement.css";

function Announcement() {
  return (
    <>
      <div className="box">
        <img
          src=".\public\announcement.png"
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
      </div>
    </>
  );
}

export default Announcement;
