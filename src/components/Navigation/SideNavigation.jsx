import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import Select from "react-select";
import PropTypes from "prop-types";
import {
  Card,
  Typography,
  List,
  ListItem
} from "@material-tailwind/react";
import { hardwareNavLinks } from "./HardwareNavLinks";
import { FcNext } from "react-icons/fc";

/* import { 
  FaCubes, FaHammer, FaMountain, FaBuilding, FaTree, FaPaintBrush, 
  FaLayerGroup, FaThLarge, FaBoxes, FaTools, FaTint, FaWarehouse, FaColumns, FaWrench 
} from "react-icons/fa"; */

// const regionLinks = [
//   {path: "/hardware_shop/hardware-products/region/central", label: "Central"},
//   {path: "/hardware_shop/hardware-products/region/western", label: "Western"},
//   {path: "/hardware_shop/hardware-products/region/nairobi", label: "Nairobi"},
//   {path: "/hardware_shop/hardware-products/region/eastern", label: "Eastern"},
//   {path: "/hardware_shop/hardware-products/region/coast", label: "Coast"}
// ]

const regions = ["Nairobi", "Central", "Western", "Eastern", "Coast"];

const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(229, 231, 235)",
      borderRadius: "8px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(169, 169, 169)" : "transparent",
      color: state.isSelected ? "white" : "black",
    }),
    singleValue: (provided) => ({
      ...provided,
        color: "black",
        fontSize: "16px",
        fontWeight: "500",
        padding: "4px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
      fontSize: "16px",
      fontWeight: "500",
    }),
};


export function SideNavigation({ isOpen, onClose, toggleModalVisibility, selectedRegion, renderRegionNote }) {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPaths, setSelectedPaths] = useState(() => {
    const filtersFromURL = searchParams.getAll("category");
    return filtersFromURL.length > 0 ? filtersFromURL : [];
  });
  


  // const handleCheckboxChange = (e) => {
  //   const value = e.target.value;
  //   const updated = selectedPaths.includes(value)
  //     ? selectedPaths.filter((v) => v !== value)
  //     : [...selectedPaths, value];

  //   setSelectedPaths(updated);
  //   onFilterChange(updated); // Lift the selected categories up
  // };


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

    const regionOptions = regions.map((region) => ({
      value: region,
      label: region
    }))



  return (
    <Card className={`md:sticky md:top-24 md:h-[calc(100vh-6rem)] w-80 md:w-96 h-full md:translate-x-0 p-4 left-0 bg-white fixed top-0 z-40 rounded-none transform transition-transform duration-300 ease-in-out overflow-y-auto
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
        {/* Dark overlay */}
        {isOpen && (
          <div
            className="inset-0 bg-black opacity-50 z-40"
            onClick={onClose}
          />
        )} 
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-14 right-4 text-gray-700 p-2 z-50 md:hidden"
        >
          <FaTimes size={24} />
        </button>
        <div className="z-50 p-4">
            <Select
              options={regionOptions}
              value={selectedRegion}
              onChange={toggleModalVisibility}
              className="react-select-container"
              classNamePrefix="react-select"
              styles={customStyles}
            />
            <div className="flex mt-3 justify-center items-center z-30">
                <div className="bg-gray-100 rounded-lg p-6 w-80 text-center shadow-xl">
                    <p>{renderRegionNote(selectedRegion.value)}</p>
                </div>
            </div>
            <div className="flex my-8">
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
              to="/customer/hardware/cart-preview"
              className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
              Hardware{" "}
              </Link>
            </div>
            <div className="my-4">
              <Typography variant="h5" color="blue-gray" className="font-bold text-gray-900">
                HARDWARE
              </Typography>
            </div>
            <List>
              {hardwareNavLinks.map(({ path, label }) => (
                <ListItem
                  key={path}
                  className="flex items-center gap-2 align-baseline rounded-lg transition font-semibold text-gray-500"
                    /* location.pathname === path ? "bg-[rgb(0,0,122)] text-white" : "hover:bg-gray-200" */
                >
                  {/* <ListItemPrefix>{icon}</ListItemPrefix> */}
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
              {/* <div className="my-4 px-5">
                <Typography variant="h5" color="blue-gray" className="font-bold text-gray-900">
                  REGION
                </Typography>
              </div>
              <List>
                {regionLinks.map(({ path, label }) => (
                  <ListItem
                    key={path}
                    className="flex items-center gap-2 align-baseline mb-1 rounded-lg transition font-semibold text-gray-500"
                      /* location.pathname === path ? "bg-[rgb(0,0,122)] text-white" : "hover:bg-gray-200" 
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
              </List> */}
        </div>
    </Card>
  );
}

SideNavigation.propTypes = {
  onFilterChange: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModalVisibility: PropTypes.func.isRequired,
  selectedRegion: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  renderRegionNote: PropTypes.func.isRequired,
};

