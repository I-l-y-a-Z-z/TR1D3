import "./BrowsePost.css";
import { Link } from "react-router-dom";

function BrowsePost() {
  return (
    <>
      <div className="top"></div>
      <div className="quest realign ">
        <h1>Start Exploring below</h1>
      </div>
      <div className="browsePost row">
        <Link className="btn btn-primary btn-lg browse col-md-6" to="/explore">
          Explore
        </Link>
        <Link className="btn btn-secondary btn-lg post col-md-6" to="/post">
          Post
        </Link>
      </div>
    </>
  );
}

export default BrowsePost;
