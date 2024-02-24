import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { Backdrop } from "@mui/material";

import { motion } from "framer-motion";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const [open, setOpen] = useState(false);

  const toggleAll = () => {
    toggleNavBar();
    handleToggle();
  };

  const handleClose = () => {
    setOpen(false);
    toggleNavBar();
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <motion.div
        className="nav_bar_"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <Link to="/" className="nav-bar__image"></Link>
            </div>
            <div className="col-md-5">
              <nav>
                <ul className="nav-bar__list">
                  <li>
                    <Link to="/" className="nav-bar__link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-bar__link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/works" className="nav-bar__link">
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-bar__link">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://github.com/Sampai0z/sampaio-homepage"
                      className="nav-bar__link_git"
                      target="_blank"
                    >
                      Source
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>

      {/* responsive nav-bar */}

      <div className="div_nav_responsive">
        <div
          className={isActive ? "icon iconActive" : "icon"}
          onClick={toggleAll}
        >
          <div className="hamburguer hamburguerIcon"></div>
        </div>

        <div className={isActive ? "menu menuOpen" : "menu menuClose"}>
          <div className="nav-bar_responsive">
            <Link to="/" className="link-responsive" onClick={toggleAll}>
              Home
            </Link>
            <Link to="/about" className="link-responsive" onClick={toggleAll}>
              About
            </Link>
            <Link to="/works" className="link-responsive" onClick={toggleAll}>
              Works
            </Link>
            <Link
              to="/contact-me"
              className="link-responsive"
              onClick={toggleAll}
            >
              Contact
            </Link>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer - 1251,
              }}
              open={open}
              onClick={handleClose}
            ></Backdrop>
          </div>
        </div>
      </div>
    </div>
  );
}
