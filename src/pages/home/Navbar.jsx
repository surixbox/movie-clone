import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-color._CB554929912_BR-6_AC_SX750_FMwebp_.png"
          alt="Prime Video"
          className="logo-img"
        />
        {/* <span className="logo-text">prime video</span> */}
      </div>

      <input
        type="text"
        placeholder="Search"
        className="search"
      />

      <div className="profile">👤</div>
    </nav>
  );
}

export default Navbar;
