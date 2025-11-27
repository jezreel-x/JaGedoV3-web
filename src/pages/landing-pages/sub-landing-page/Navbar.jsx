 
import { useEffect, useState, useRef } from "react";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Home", subItems: null },
  { name: "Story", subItems: null },
  { name: "OurTeam", subItems: null }
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowMobileMenu(false);
        setOpenSubMenu(null);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMobileMenu(false);
    setOpenSubMenu(null);
  };

  // const toggleSubMenu = (itemName) => {
  //   setOpenSubMenu(openSubMenu === itemName ? null : itemName);
  // };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Sub-landing/hero.png"
            alt="JaGedo Logo"
            className="w-auto h-17 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4 text-gray-800 font-medium items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.name === "Home" ? "/" : `#${item.name.replace(/\s+/g, "")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.name === "Home") {
                      navigate("/");
                    } else {
                      handleScroll(item.name.replace(/\s+/g, ""));
                    }
                  }}
                  className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center sm:w-36 md:w-32"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu((prev) => !prev)}
          ref={buttonRef}
          className="md:hidden p-2 bg-white rounded-lg shadow-sm"
          aria-label="Open menu"
          aria-expanded={showMobileMenu}
        >
          <img src={assets.menu_bar} alt="Menu icon" className="w-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={menuRef}
            className="bg-white w-full shadow-lg transform transition-transform translate-x-0 p-4"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowMobileMenu(false)}
                aria-label="Close menu"
                className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                <img src={assets.cross_icon} alt="Close menu" className="w-6" />
              </button>
            </div>

            {/* Mobile Nav */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2 text-gray-800 font-medium bg-white">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.name === "Home" ? "/" : `#${item.name.replace(/\s+/g, "")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.name === "Home") {
                          navigate("/");
                        } else {
                          handleScroll(item.name.replace(/\s+/g, ""));
                        }
                      }}
                      className="bg-[rgb(0,0,122)] text-white py-2 px-6 rounded-full shadow-md hover:scale-105 hover:bg-[#FFD700] hover:text-black transition duration-300 ease-in-out text-center"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;