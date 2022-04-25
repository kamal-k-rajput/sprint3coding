import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/" key={nanoid(4)}>
        Home
      </Link>
      <Link className="nav-list" to="/employees" key={nanoid(4)}>
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin" key={nanoid(4)}>
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to="/logout" key={nanoid(4)}>
        Logout
      </Link>

      <Link className="nav-login" to="/login" key={nanoid(4)}>
        Login
      </Link>
    </div>
  );
};
