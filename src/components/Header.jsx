import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Alert drowsiness</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subir-archivo"
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
            >
              Upload
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
