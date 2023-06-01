import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          <img src="http://wallpapercave.com/wp/atPJDyc.jpg" alt="pic" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </span>
        <div className="categories">
          <h4>
            <center>CATEGORIES</center>
          </h4>
          <ul>
            <li>Life</li>
            <li>Music</li>
            <li>Sport</li>
            <li>Cinema</li>
            <li>Tech</li>
            <li>Style</li>
          </ul>
        </div>
        <div className="socialSidebar">
          <h4>
            <center>FOLLOW US</center>
          </h4>
          <center>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
