import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>TASK LIST</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/task-name"}>Buscar por nome</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
