import "./PostMain.css";
function PostMain() {
  return (
    <>
      <div className="postmain">
        <div className="fileInput">
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>
        <form className="form">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Posting Title
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="An item for trade"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="This item is the best you can get"
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Category</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridCategory"
                    id="gridCategory1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Food
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridCategory"
                    id="gridCategory2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Clothing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridCategory"
                    id="gridCategory3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Electronics
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridCategory"
                    id="gridCategory4"
                    value="option4"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Books
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridCategory"
                    id="gridCategory5"
                    value="option5"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Value</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridValue"
                    id="gridValue1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Meh
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridValue"
                    id="gridValue2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Not Much
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridValue"
                    id="gridValue3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Moderate
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridValue"
                    id="gridValue4"
                    value="option4"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Starts getting expensive
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridValue"
                    id="gridValue5"
                    value="option5"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Would consider selling it rather than trading it
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary postbutton">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostMain;
