import { useEffect, useState } from "react";
import "./StickyHeader.css";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        {/* For the Logo */}
        <div className="logo">
          <span className="logoText">StickyUI</span>
        </div>

        <nav className="nav">
          <ul className="navList">
            <li>
              <a href="#home" className="navLink">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navLink">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="navLink">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="ctaButton">Get Started</button>
      </div>
    </header>
  );
};

export default StickyHeader;
