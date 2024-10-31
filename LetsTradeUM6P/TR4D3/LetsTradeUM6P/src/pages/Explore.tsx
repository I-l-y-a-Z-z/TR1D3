import Announcement from "../components/Announcement.tsx";
import DropDownMenu from "../components/DropDownMenu.tsx";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <>
      <div className="row explorepage">
        <div className="col-md-3">
          <DropDownMenu />
        </div>
        <div className="col-md-9 announcement-grid">
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
        </div>
        <Link className="plus-image-container" to="/post">
          <img src="./public/plus.png" className="img-plus" />
        </Link>
      </div>
    </>
  );
}

export default Explore;
