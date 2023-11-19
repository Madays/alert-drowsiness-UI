import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between fixed top-0 left-0 p-4 w-full">
      <div>Alert drowsiness</div>
      <nav>
        <ul className="m-0 flex space-x-2">
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
