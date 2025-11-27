import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem
} from "@material-tailwind/react";
import {
  FaBoxes,
} from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { GiWindow, GiGate, GiCeilingLight } from "react-icons/gi";
import { MdDoorSliding } from "react-icons/md";
import PropTypes from "prop-types";

export function CustomSideNav({ isOpen, onClose }) {
  // const [isSticky, setIsSticky] = React.useState(false);
  // const [isExpanded, setIsExpanded] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPaths, setSelectedPaths] = useState(() => {
    const filtersFromURL = searchParams.getAll("category"); // returns an array of values for the 'category' key
    return filtersFromURL.length > 0 ? filtersFromURL : [];
  });
  
  const navLinks = [
    { path: "/hardware_shop/custom-products/", icon: <FaBoxes className="h-5 w-5" />, label: "All Products" },
    { path: "/hardware_shop/steel-windows", icon: <GiWindow className="h-5 w-5" />, label: "Steel Windows" },
    { path: "/hardware_shop/wooden-windows", icon: <GiWindow className="h-5 w-5" />, label: "Wooden Windows" },
    { path: "/hardware_shop/wooden-doors", icon: <MdDoorSliding className="w-5 h-5" />, label: "Wooden Doors" },
    { path: "/hardware_shop/gates", icon: <GiGate className="w-5 h-5" />, label: "Gates" },
    { path: "/hardware_shop/gypsum-ceiling", icon: <GiCeilingLight className="w-5 h-5" />, label: "Gypsum Ceiling" },
    { path: "/hardware_shop/steel-doors", icon: <MdDoorSliding className="w-5 h-5" />, label: "Steel Doors" },
    { path: "/hardware_shop/bamboo-gates", icon: <GiGate className="w-5 h-5" />, label: "Bamboo Gates" },
  ];

  const handleCheckboxChange = (e) => {
    const { value: path, checked } = e.target;

    let updatedSelections = [...selectedPaths];

    if (checked) {
      updatedSelections.push(path);
    } else {
      updatedSelections = updatedSelections.filter((p) => p !== path);
    }

    setSelectedPaths(updatedSelections);

    // Update URL query string
    const params = new URLSearchParams();
    updatedSelections.forEach((p) => params.append("category", p));
    setSearchParams(params);
  };

  useEffect(() => {
    const filtersFromURL = searchParams.getAll("category");
    setSelectedPaths(filtersFromURL);
  }, [searchParams]);



  return (
    <Card className={`md:sticky md:top-24 md:h-[calc(100vh-6rem)] w-88 md:w-96 h-screen sm:h-full md:translate-x-0 p-4 left-0 bg-white fixed top-0 z-40 rounded-none transform transition-transform duration-300 ease-in-out overflow-y-auto
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
            to="/customer/custom-products/cart-preview"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
            Custom Products{" "}
            </Link>
          </div>
          <div className="mb-4 px-5">
            <Typography variant="h5" color="blue-gray" className="font-bold text-gray-900">
              CUSTOM PRODUCTS
            </Typography>
          </div>
          <List>
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}>
                <ListItem
                  className="flex items-center rounded-lg transition gap-2 align-baseline mb-1 font-semibold text-gray-500"
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
  );
}

CustomSideNav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

