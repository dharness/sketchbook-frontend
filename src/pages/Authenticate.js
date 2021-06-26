import './Header.css';

function Header() {
  return (
    <div className="sb-header">
        <h3>Sketchbook</h3>
        <div>
            <button className="sb-header-button">Sign In</button>
            <button className="sb-header-button">Sign Up</button>
        </div>
    </div>
  );
}

export default Header;
