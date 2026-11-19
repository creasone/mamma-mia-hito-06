import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  // El token continúa simulado porque la autenticación real corresponde a otro hito.
  const token = false;
  const { total } = useCart();

  const navClass = ({ isActive }) =>
    `nav-button${isActive ? " nav-button--active" : ""}`;

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__content">
        <NavLink
          className="navbar__brand"
          to="/"
        >
          Mamma Mía!
        </NavLink>

        <div className="navbar__links">
          {/* Home siempre es visible, sin importar el valor del token. */}
          <NavLink className={navClass} to="/">
            🍕 Home
          </NavLink>

          {token ? (
            <>
              <NavLink className={navClass} to="/profile">
                🔓 Profile
              </NavLink>
              <button className="nav-button" type="button">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <NavLink className={navClass} to="/login">
                🔐 Login
              </NavLink>
              <NavLink className={navClass} to="/register">
                🔐 Register
              </NavLink>
            </>
          )}
        </div>

        {/* Total también permanece visible para ambos estados del token. */}
        <NavLink className="total-button" to="/cart">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
