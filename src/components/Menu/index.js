import "./menu.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/henrique-moreira-310106231/"
      >
        <BsLinkedin color="#fff" size={24} />
      </a>
      <a className="social" href="https://github.com/HenriqueMoreira-1">
        <BsGithub color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
