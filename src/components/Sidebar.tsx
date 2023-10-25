import "../css/Sidebar.scss";

function Sidebar() {
  return (
    <>
      <div className="menu-btn btn btn-circle">
        <i className="fa-regular fa-bars"></i>
      </div>
      <div className="sidebar-menu border">
        <li className="sidebar-item active">
          <a href="#">
            <i className="fa-light fa-house"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-user"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-suitcase"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-layer-group"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-shapes"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-file"></i>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <i className="fa-light fa-envelope"></i>
          </a>
        </li>
      </div>
    </>
  );
}

export default Sidebar;
