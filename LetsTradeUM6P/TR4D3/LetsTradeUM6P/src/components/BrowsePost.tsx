import "./BrowsePost.css";

function BrowsePost() {
  return (
    <>
      <div className="top"></div>
      <div className="quest realign ">
        <h1>Strat Exploring below</h1>
      </div>
      <div className="browsePost row">
        <button
          type="button"
          className="btn btn-primary btn-lg browse col-md-6"
        >
          Explore
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg post col-md-6"
        >
          Post
        </button>
      </div>
    </>
  );
}

export default BrowsePost;
