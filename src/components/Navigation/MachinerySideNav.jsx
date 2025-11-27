import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { machineryNavLinks } from "./MachineryNavLinks"; // Adjust the import path as needed
import { FcNext } from "react-icons/fc";

/* 
import { 
  FaBoxes, FaDrumSteelpan,
} from "react-icons/fa";

import { GiBulldozer, GiConcreteBag, GiDrill } from "react-icons/gi";
import { PiCraneDuotone, PiBulldozerBold } from "react-icons/pi";
import { TbBackhoe, TbBulldozer } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { LiaTapeSolid } from "react-icons/lia"; 
*/

export default function MachinerySideNav({ isOpen, onClose }) {

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
        <div className="z-50 p-4"></div>
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
            to="/customer/machinery/cart-preview"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
            Machinery{" "}
            </Link>
          </div>
          <div className="mb-4 px-5">
            <Typography variant="h5" color="blue-gray" className="font-bold text-gray-900">
              MACHINERY
            </Typography>
          </div>
          <List>
            {machineryNavLinks.map(({ path, label }) => (
                <ListItem
                  key={path}
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
            ))}
          </List>
    </Card>
  );
}

MachinerySideNav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

