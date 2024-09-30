import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="nav-link">
            New Tweet
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
