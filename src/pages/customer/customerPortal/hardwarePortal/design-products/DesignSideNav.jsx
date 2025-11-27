import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  FaCubes,
  FaBoxes,
  FaCity,
  FaMountain,
} from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";


export function DesignSideNav({ isOpen, onClose }) {
  // const [isSticky, setIsSticky] = React.useState(false);
  // const [isExpanded, setIsExpanded] = React.useState(true);
  // const [activePath, setActivePath] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPaths, setSelectedPaths] = useState(() => {
    const filtersFromURL = searchParams.getAll("category");
    return filtersFromURL.length > 0 ? filtersFromURL : [];
  });
  
  const handleCheckboxChange = (e) => {
    const { value: path, checked } = e.target;

    let updatedSelections = [...selectedPaths];

    if (checked) {
      updatedSelections.push(path);
    } else {
      updatedSelections = updatedSelections.filter((p) => p !== path);
    }

    setSelectedPaths(updatedSelections);

    // Update URL query params
    const params = new URLSearchParams();
    updatedSelections.forEach((p) => params.append("category", p));
    setSearchParams(params);
  };

  useEffect(() => {
    const filtersFromURL = searchParams.getAll("category");
    setSelectedPaths(filtersFromURL);
  }, [searchParams]);

  const navLinks = React.useMemo(() => [
    { path: "/hardware_shop/designs", icon: <FaBoxes className="h-5 w-5" />, label: "All Products" },
    { path: "/design/mansionettes", icon: <FaCubes className="h-5 w-5" />, label: "Mansionettes" },
    { path: "/design/bungalows", icon: <FaBoxes className="h-5 w-5" />, label: "Bungalows" },
    { path: "/design/apartments", icon: <FaCubes className="h-5 w-5" />, label: "Apartments" },
    { path: "/design/commercials", icon: <FaCity className="h-5 w-5" />, label: "Commercials" },
    { path: "/design/socials", icon: <FaMountain className="h-5 w-5" />, label: "Socials" },
  ], []);

  /*
  React.useEffect(() => {
    setActivePath(location.pathname || navLinks[0].path);
  }, [location.pathname, navLinks]);
  

  const handleItemClick = (path) => {
    setActivePath(path);
    setIsExpanded(false); // collapse after click
    navigate(path);       // navigate programmatically
  };
  */

  return (
    <Card className={`md:sticky md:top-24 md:h-[calc(100vh-6rem)] w-80 md:w-96 h-full md:translate-x-0 p-4 left-0 bg-white fixed top-0 z-40 rounded-none transform transition-transform duration-300 ease-in-out overflow-y-auto
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
      {/* Close Button - Top Right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 p-2 z-50 md:hidden"
      >
        <FaTimes size={24} />
      </button>
      <div className="z-50 p-4">
        <div className="flex my-8 px-5">
          <Link
          to="/customer/hardware_shop"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          Home{" "}
          <span>
              <FcNext />
          </span>
          </Link>
          {/* <Link to="">hardware-products/</Link> */}
          <Link
          to="/customer/designs/cart-preview"
          className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
          Design{" "}
          </Link>
        </div>
        <div className="my-4 px-5">
          <Typography variant="h5" color="blue-gray" className="font-bold text-gray-900">
            DESIGN
          </Typography>
        </div>
        <List>
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path}>
              <ListItem
                /* onClick={() => handleItemClick(path)} */
                className="flex items-center gap-2 align-baseline mb-1 rounded-lg transition text-gray-500 font-semibold"
              >
                <input
                type="checkbox"
                value={path}
                className="accent-blue-600 w-4 h-4"
                checked={selectedPaths.includes(path)}
                onChange={handleCheckboxChange}
                aria-label={`Filter by ${label}`}
                title={`Filter by ${label}`}
                // You can track checked items in state if needed
              />
              {label}
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Card>
)}

DesignSideNav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func, // Add this if you want to validate onClose as well
};

