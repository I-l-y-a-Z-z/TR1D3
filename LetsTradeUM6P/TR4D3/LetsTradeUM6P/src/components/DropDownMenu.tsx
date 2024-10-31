import "./DropDownMenu.css";
function DropDownMenu() {
  return (
    <>
      <div className="dropdownmenu filterdiv">
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle filter-button"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filters
          </button>
          <ul className="dropdown-menu filter-button">
            <li>
              <a className="dropdown-item" href="#">
                Food
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Clothing
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Electronics
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Books
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Other
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDownMenu;
