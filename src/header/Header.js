import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Soulful Scribbles</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/1340517.jpg"
        alt="abc"
      />
    </div>
  );
}

export default Header;
