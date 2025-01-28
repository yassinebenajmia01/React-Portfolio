import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const navLinks = [
    { to: "/", imgSrc: astronautHelmet, alt: "astronaut helmet icon", title: "ABOUT", className: "nav-about" },
    { to: "/skills", imgSrc: deadEye, alt: "deadEye icon", title: "SKILLS", className: "nav-skills" },
    { to: "/projects", imgSrc: stack, alt: "stack icon", title: "PROJECTS", className: "nav-projects" },
    { to: "/contact", imgSrc: envelope, alt: "envelope icon", title: "CONTACT", className: "nav-contact" },
  ];

  const renderNavLink = ({ to, imgSrc, alt, title, className }) => {
    const isCurrentPage = location.pathname === to;
    const linkClass = `nav-link ${isCurrentPage ? "current" : ""}`;

    return (
      <Link to={to} className={linkClass} key={title}>
        <img src={imgSrc} alt={alt} />
        {isCurrentPage && <h1 className="page-title">{title}</h1>}
      </Link>
    );
  };

  return (
    <nav className="nav">
      {navLinks.map(renderNavLink)}
    </nav>
  );
}
