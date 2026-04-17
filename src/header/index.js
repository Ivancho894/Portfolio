import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const NAV_ITEMS = [
  { label: "Home", section: "home", path: "/" },
  { label: "Projects", section: "projects", path: "/" },
  { label: "Experience", section: "experience", path: "/" },
  { label: "Services", section: "services", path: "/services" },
  { label: "Skills", section: "skills", path: "/" },
  { label: "Contact", section: "contact", path: "/" },
];

const Headermain = ({ theme, settheme }) => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleNavClick = (item) => {
    setActive(false);
    document.body.classList.remove("ovhidden");

    if (location.pathname === "/") {
      const el = document.getElementById(item.section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    navigate(item.path);
    setTimeout(() => {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <header className="site__header">
        <div className="header-inner d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center gap-2">
            <Themetoggle theme={theme} settheme={settheme} />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label} className="menu_item">
                      <button
                        className="menu-nav-btn my-3"
                        onClick={() => handleNavClick(item)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      Full Timeline
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/certificates" className="my-3">
                      Certificates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              <a href={socialprofils.instagram}>Instagram</a>
              <a href={socialprofils.github}>GitHub</a>
              <a href={socialprofils.linkedin}>LinkedIn</a>
            </div>
            <p className="copyright m-0">© {logotext}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
